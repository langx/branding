"""Draw the LangX mark as vector, from the construction in ../../BRAND.md.

Every number here was measured back off the shipped artwork before it was
written down. The arcs reach an IoU of 0.98 against brand/icon/default.png, and
the lockup's gap, size and tracking reproduce brand/logo/lockup-horizontal.png
to within 2px on a 3190px canvas.

    FONT=/path/to/Nunito_800ExtraBold.ttf OUT=brand/logo python3 brand/logo/build.py

Needs fonttools. The font is not in this repo - see brand/README.md.
"""
import math, os

S = 1024.0                     # canvas
RI, RO = 151.5, 235.3          # inner and outer radius
CB = (591.0, 463.5)            # black arc centre
CW = (2 * 512.0 - CB[0], 2 * 512.0 - CB[1])   # white arc: 180 deg about canvas centre
A_BLACK = 147.0                # start angle, degrees, SVG axes (y down)
A_WHITE = 327.0
SHADOW_D, SHADOW_A = 20.0, 57.0

YELLOW, YELLOW_SHADE = "#ffc409", "#e0ac08"
INK, INK_SHADOW = "#121318", "#deab06"
BLACK, WHITE = "#000000", "#ffffff"


def pt(c, r, a):
    return (c[0] + r * math.cos(math.radians(a)), c[1] + r * math.sin(math.radians(a)))


def f(v):
    return f"{v:.3f}".rstrip("0").rstrip(".")


def half_annulus(c, ri, ro, a0):
    """A 180 degree annulus sector, cut on one line. Two 90 degree arcs a side,
    because a single 180 degree elliptical arc is ambiguous to a renderer."""
    a1, a2 = a0 + 90.0, a0 + 180.0
    p = []
    x, y = pt(c, ro, a0); p.append(f"M{f(x)} {f(y)}")
    for a in (a1, a2):
        x, y = pt(c, ro, a); p.append(f"A{f(ro)} {f(ro)} 0 0 1 {f(x)} {f(y)}")
    x, y = pt(c, ri, a2); p.append(f"L{f(x)} {f(y)}")
    for a in (a1, a0):
        x, y = pt(c, ri, a); p.append(f"A{f(ri)} {f(ri)} 0 0 0 {f(x)} {f(y)}")
    p.append("Z")
    return "".join(p)


def arcs(dx=0.0, dy=0.0, black=BLACK, white=WHITE):
    o = f' transform="translate({f(dx)} {f(dy)})"' if (dx or dy) else ""
    return (f'<path{o} fill="{black}" d="{half_annulus(CB, RI, RO, A_BLACK)}"/>\n'
            f'<path{o} fill="{white}" d="{half_annulus(CW, RI, RO, A_WHITE)}"/>')


def shadow(colour):
    dx = SHADOW_D * math.cos(math.radians(SHADOW_A))
    dy = SHADOW_D * math.sin(math.radians(SHADOW_A))
    return arcs(dx, dy, colour, colour)


HEAD = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        'width="{w}" height="{h}" role="img" aria-label="{label}">\n'
        '<title>{label}</title>\n')


def svg(body, w=S, h=S, label="LangX"):
    return HEAD.format(w=f(w), h=f(h), label=label) + body + "\n</svg>\n"


# ---------------------------------------------------------------- the wordmark
def wordmark_path(size, tracking_em, x0, baseline):
    from fontTools.ttLib import TTFont
    from fontTools.pens.svgPathPen import SVGPathPen
    from fontTools.pens.transformPen import TransformPen
    from fontTools.misc.transform import Transform

    font = TTFont(FONT)
    gs, cmap = font.getGlyphSet(), font.getBestCmap()
    upem = font["head"].unitsPerEm
    scale = size / upem
    track = tracking_em * size
    pen = SVGPathPen(gs, ntos=lambda v: f(v))
    x = x0
    for ch in "LangX":
        name = cmap[ord(ch)]
        tp = TransformPen(pen, Transform(scale, 0, 0, -scale, x, baseline))
        gs[name].draw(tp)
        x += gs[name].width * scale + track
    return pen.getCommands(), x - track


# ------------------------------------------------------------------- verifying
def endpoint_to_centre(x1, y1, rx, ry, sweep, x2, y2):
    """SVG spec F.6.5 in reverse: recover an arc's centre from its path
    command, so a wrong sweep flag cannot ship unnoticed."""
    dx2, dy2 = (x1 - x2) / 2.0, (y1 - y2) / 2.0
    x1p, y1p = dx2, dy2
    num = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p
    den = rx * rx * y1p * y1p + ry * ry * x1p * x1p
    co = math.sqrt(max(num / den, 0.0))
    if sweep == 0:          # large-arc is 0 throughout, so the sign is + when
        co = -co            # the flags differ and - when they agree
    cxp, cyp = co * rx * y1p / ry, -co * ry * x1p / rx
    return cxp + (x1 + x2) / 2.0, cyp + (y1 + y2) / 2.0


def check():
    import re
    d = half_annulus(CB, RI, RO, A_BLACK)
    toks = re.findall(r"([MALZ])([^MALZ]*)", d)
    cur = None
    seen = []
    for cmd, rest in toks:
        n = [float(v) for v in re.findall(r"-?\d+\.?\d*", rest)]
        if cmd == "M":
            cur = (n[0], n[1])
        elif cmd == "L":
            cur = (n[0], n[1])
        elif cmd == "A":
            rx, ry, sweep, x2, y2 = n[0], n[1], n[4], n[5], n[6]
            seen.append((endpoint_to_centre(cur[0], cur[1], rx, ry, sweep, x2, y2), rx))
            cur = (x2, y2)
    ok = True
    for (c, r) in seen:
        err = math.hypot(c[0] - CB[0], c[1] - CB[1])
        if err > 0.05:
            ok = False
        print(f"    arc r={r:.1f} recovered centre ({c[0]:.2f}, {c[1]:.2f}) err {err:.4f}")
    assert ok, "an arc command does not describe the intended circle"
    print("    path commands verified against the SVG arc spec")


OUT = os.environ.get("OUT", "brand/logo")
FONT = os.environ["FONT"]

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    check()

    files = {}
    files["mark-arcs.svg"] = svg(arcs(), label="LangX mark")
    files["mark.svg"] = svg(
        f'<rect width="{f(S)}" height="{f(S)}" fill="{YELLOW}"/>\n'
        + shadow(YELLOW_SHADE) + "\n" + arcs(), label="LangX")
    files["mark-ink.svg"] = svg(
        f'<rect width="{f(S)}" height="{f(S)}" fill="{INK}"/>\n'
        + shadow(INK_SHADOW) + "\n" + arcs(), label="LangX")
    files["mark-mono.svg"] = svg(
        arcs(black="currentColor", white="currentColor"), label="LangX mark")

    # Lockup: mark at height S, a gap of 0.24*S to the pen, "LangX" at 0.64*S.
    size = 0.64 * S
    x0 = S + 0.24 * S
    baseline = 696.9
    for name, colour in (("lockup-horizontal.svg", "#17191c"),
                         ("lockup-horizontal-dark.svg", "#f2f3f5")):
        d, end = wordmark_path(size, -0.02, x0, baseline)
        # 3190 is the shipped PNG's width, so the vector drops straight into a
        # layout built around the raster one without reflowing it.
        files[name] = svg(arcs() + f'\n<path fill="{colour}" d="{d}"/>',
                          w=3190, h=S, label="LangX")
        print(f"    {name}: 3190 x {int(S)}, pen ends at {end:.0f}")

    for name, body in files.items():
        with open(os.path.join(OUT, name), "w") as fh:
            fh.write(body)
        print(f"    wrote {OUT}/{name}  {len(body)} bytes")
