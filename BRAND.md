# Brand guide — v3 identity

What LangX looks like across the 2.x line. It replaces the identity that
`archive/0.1.x/` and `archive/0.3.x/` were shot in: Comfortaa, yellow chrome,
cards on a grey ground.

The files themselves are in [`brand/`](brand/) — logos as vector, the palette as
JSON and CSS, and [`brand/print.md`](brand/print.md) for anything that ends up
on paper.

**Nothing here is the source of truth.** Every value below is copied by hand
from the app, and the app is where it is decided:

| Here                    | Decided in                                  |
| ----------------------- | ------------------------------------------- |
| Colour, type, spacing   | `langx/apps/mobile/src/lib/theme/tokens.ts` |
| Which asset goes where  | `langx/apps/mobile/app.config.ts`           |
| Token iconography rules | `langx/docs/token-messaging-brief.md`       |

The identity has a second written form, for the web: `DESIGN.md` in
`langx/website`, which carries the same palette under its own names plus what
only a site needs — hover and pressed states, a wider type ramp, component
specs. Where the two overlap they agree; where this guide and that file
disagree, the app's `tokens.ts` is the one that decides, and both copies are
wrong until someone fixes them.

Change one of those and this file is wrong until someone edits it too. That is
the same arrangement `langx/docs/repo-map.md` records for the website's plan
and token data, and it fails the same way: silently.

## The mark

Two arcs, one black and one white, turning around each other — an exchange, not
a letter. The pair sits on the brand yellow and carries a hard yellow-shade
drop shadow down and to the right.

The artwork lives in [`brand/`](brand/), and the icons and badges are
byte-identical to what the app ships:

| File                       | Size  | Ground             | Used as                                    |
| -------------------------- | ----- | ------------------ | ------------------------------------------ |
| `icon/default.png`         | 1024² | `#ffc409`, opaque  | the home-screen icon, both platforms       |
| `icon/dark.png`            | 1024² | `#121318`, opaque  | alternate, Pro only, native only           |
| `icon/split.png`           | 1024² | yellow and ink     | alternate, Pro only, native only           |
| `icon/pro.png`             | 1024² | `#7a5af8`, opaque  | alternate, Pro only, native only           |
| `icon/new-year.png`        | 1024² | `#ffc409`, opaque  | alternate, Pro only, native only           |
| `splash/badge.png`         | 512²  | yellow disc        | the launch badge, light                    |
| `splash/badge-dark.png`    | 512²  | ink disc           | the launch badge, dark                     |
| `logo/logo-rounded.png`    | 512²  | yellow squircle    | in-app and web use, avatars, README marks  |

The mark is also drawn as vector, from the construction below rather than traced
from these: `logo/mark.svg` on yellow, `logo/mark-ink.svg` on ink,
`logo/mark-arcs.svg` bare, and `logo/mark-mono.svg` in one colour. Use those for
anything that scales or prints.

### The construction

The four icons after `default.png` are the same drawing on a different ground,
and the drawing is two half-annuli, not a letter. On the 1024² canvas: outer
radius 235.3, inner 151.5, stroke 83.8. The black one is centred at (591,
463.5) and runs 147° → 327°; the white one is that shape turned 180° about the
canvas centre, so it is centred at (433, 560.5) and runs 327° → 147°. Both are
cut on **one line** — the two flat edges are collinear to within 2px, which is
what makes the pair read as an S rather than as two arcs. The drop shadow is
each shape again, 20px along 57°, in the ground's own shade.

That shared cut line is also the seam in `split.png`: it is the only division
of the ground that leaves the black arc wholly on yellow and the white arc
wholly on ink, which is the whole point of that icon. It is not a free choice.

Two constraints bind any further icon in this set:

- **Everything must fit a circle of radius 341.** Android takes the whole
  square as the *foreground* layer of an adaptive icon and the launcher keeps
  only the middle of it, so a badge along the bottom edge is simply thrown
  away and the icon becomes indistinguishable from the plain yellow one. That
  is why `new-year.png` sets the year on the ground instead of on a ribbon at
  the foot of the icon, and why its mark is at 0.78.
- **The arcs stay black and white.** Only the ground changes. `pro.png` is the
  one icon that puts the mark on a colour rather than on yellow or ink, and it
  is deliberate: it is sold as the Pro icon and `#7a5af8` is the Pro token, in
  the same way `frame.gold` reads as a rank.

The mark also comes as a lockup with the wordmark, drawn for v3 and not shipped
by the app:

| File                               | Size      | Wordmark  |
| ---------------------------------- | --------- | --------- |
| `logo/lockup-horizontal.png`       | 3190×1024 | `#17191c` |
| `logo/lockup-horizontal-dark.png`  | 3190×1024 | `#f2f3f5` |
| `logo/lockup-horizontal.svg`       | 3190×1024 | `#17191c` |
| `logo/lockup-horizontal-dark.svg`  | 3190×1024 | `#f2f3f5` |

All four are transparent, and the wordmark in the two SVGs is outlined, so they
need no font installed.

The construction, if it has to be redrawn: the rounded mark at height *H*, a gap
of 0.24·*H* to the wordmark's pen — not to its first ink — then "LangX" in
Nunito ExtraBold at 0.64·*H* with `-0.02em` tracking after every letter, sitting
on the mark's optical centre rather than its geometric one. Measured back off
the shipped PNG, that baseline lands at 0.681·*H* from the top, which is what
`brand/logo/build.py` draws to.

Two things about these files are load-bearing rather than stylistic:

- **The splash badges are discs on a transparent surround.** Android 12+ draws
  the launch icon through the platform SplashScreen API, which masks it to a
  circle. A square badge would become a disc there and stay square on iOS, so
  the mark would change shape between the two platforms and again when the JS
  layer took over.
- **The badge is drawn at 160px wide** on `#ffffff` (light) and `#1c1f24`
  (dark). The static splash the OS shows and the app's own first frame have to
  be indistinguishable, or hiding one is a blink.

The dark icon's drop shadow is `#deab06` — the yellow shade, not a shade of its
own ink ground, so it is the one icon in the set that does not follow the rule
above. That is what is on disk; it has not been treated as a bug.

The dark icon's own ground is `#121318`, while `app.config.ts` declares
`#141519` as the Android adaptive-icon background behind it. Both are ink and
the seam is only ever visible in the mask bleed, but if the artwork is ever
redrawn, redraw it against the declared value. The three icons added after it
declare their own ground and have no such seam.

### Don'ts

- Do not put the mark on a coloured ground of its own. It carries one. The
  alternate home-screen icons above are the exception and the only one: there
  the ground *is* what the person is choosing between.
- Do not recolour the arcs. The black/white pair is the whole idea, and it
  holds across all five icons.
- Do not use the v1 lockup (`archive/assets/logo-horizontal.png`). Its wordmark
  is Comfortaa and it sits on a white square; `brand/logo/lockup-horizontal.svg`
  is the v3 replacement.

## Colour

One blue for everything interactive, yellow exactly once per screen — the
committing action — and no card layer: the ground *is* the surface, and
structure comes from dividers and whitespace.

### Light

| Token             | Hex                          | Where                                              |
| ----------------- | ---------------------------- | -------------------------------------------------- |
| `bg`              | `#ffffff`                    | the screen behind everything                       |
| `feedBg`          | `#ffffff`                    | the feed, same ground as everything else           |
| `surface`         | `#ffffff`                    | sheets, tab bar, compose bar                       |
| `fill`            | `#f4f5f7`                    | the one grey allowed to be a box                   |
| `border`          | `#e8eaec`                    | hairline dividers                                  |
| `text`            | `#17191c`                    | body                                               |
| `textMuted`       | `#62676d`                    | secondary text, captions, meta                     |
| `textFaint`       | `#9aa1a7`                    | placeholder, disabled, tertiary meta               |
| `textInverse`     | `#fefefe`                    | text on a saturated or ink fill                    |
| `ink`             | `#17191c`                    | `text` used as a background; its label is `bg`     |
| `onInkMuted`      | `rgba(128, 128, 128, 0.45)`  | the "off" half of a glyph drawn on `ink`           |
| `primary`         | `#ffc409`                    | **the committing action, once per screen**         |
| `primaryShade`    | `#e0ac08`                    | under the yellow button                            |
| `primaryText`     | `#201900`                    | label on yellow                                    |
| `primaryTextMuted`| `rgba(32, 25, 0, 0.55)`      | meta on yellow                                     |
| `secondary`       | `#3b6cf6`                    | the second action — plain blue text in v3          |
| `accent`          | `#3b6cf6`                    | links, tabs, toggles on, level bars, progress      |
| `accentBg`        | `#e9f0fe`                    | your own chat bubble, the Copilot panel            |
| `streak`          | `#f79009`                    | streaks                                            |
| `pro`             | `#7a5af8`                    | Pro                                                |
| `proPlus`         | `#5b21b6`                    | Pro+ — same hue, further from the ground           |
| `success` / `Bg`  | `#009f70` / `#e2f6ee`        | **corrections, always**                            |
| `info` / `Bg`     | `#3b6cf6` / `#e9f0fe`        | **Copilot, always**                                |
| `warning` / `Bg`  | `#c87820` / `#fff6b6`        | streak milestones, level chips                     |
| `danger` / `Bg`   | `#e5484d` / `#fdecec`        | empty states, unread counts, delete, negative rows |
| `dangerShade`     | `#b83236`                    | under the red button                               |
| `knob`            | `#ffffff`                    | the toggle knob — white in both schemes            |
| `scrim`           | `rgba(0, 0, 0, 0.45)`        | behind a sheet                                     |
| `scrimStrong`     | `rgba(0, 0, 0, 0.94)`        | the photo lightbox                                 |
| `onScrim`         | `#ffffff`                    | chrome on a scrim                                  |

### Dark

Only the tokens that move. Everything absent from this table is the same value
in both schemes, deliberately: `primary` and its three companions, `knob`,
`onInkMuted`, the three scrim tokens, `textInverse` and `dangerShade`.

| Token       | Hex       | Token       | Hex       |
| ----------- | --------- | ----------- | --------- |
| `bg`        | `#1c1f24` | `secondary` | `#7c9cf9` |
| `feedBg`    | `#1c1f24` | `accent`    | `#7c9cf9` |
| `surface`   | `#1c1f24` | `accentBg`  | `#202b45` |
| `fill`      | `#23272d` | `streak`    | `#ffa93d` |
| `border`    | `#2c3036` | `pro`       | `#9b83ff` |
| `text`      | `#f2f3f5` | `proPlus`   | `#c9b8ff` |
| `textMuted` | `#9aa1a9` | `success`   | `#34c796` |
| `textFaint` | `#70767e` | `successBg` | `#16332a` |
| `ink`       | `#f2f3f5` | `info`      | `#7c9cf9` |
| `warning`   | `#ffca39` | `infoBg`    | `#202b45` |
| `warningBg` | `#724413` | `danger`    | `#ef6b6f` |
|             |           | `dangerBg`  | `#3a2023` |

Three rules survive the switch and are worth stating on their own, because a
press image or a store screenshot can break them as easily as a screen can:

- **The yellow does not change.** Someone who has learned "the yellow one sends
  it" should not have to relearn it after dark.
- **Green is a correction and blue is Copilot.** They are the two voices in the
  core loop and must never be mistaken for each other.
- **`ink` inverts with the ground.** It is `text` used as a fill, so in dark it
  is near-white with a `bg`-coloured label.

### Shadow

Almost nothing floats in v3 — only sheets, the segmented thumb and the
committing button. `0 4px 10px rgba(0,0,0,0.06)` in light; the same geometry at
40% in dark, where 6% black is invisible.

## Type

**Nunito** replaced Comfortaa. ExtraBold (800) carries titles, buttons, names
and the big numerals; Bold (700) is the in-between weight for row titles that
lead. Body text keeps the platform stack, because body text here is often
someone's second language and a display face at 13px is a legibility tax.

| Role    | Size | Weight | Face             |
| ------- | ---- | ------ | ---------------- |
| Title   | 30   | 800    | Nunito ExtraBold |
| Heading | 20   | 800    | Nunito ExtraBold |
| Body    | 15   | 400    | platform         |
| Label   | 13   | 600    | platform         |
| Caption | 12   | 400    | platform         |

Tab-root screens run their titles at 34. Nunito is
[SIL Open Font Licensed](https://fonts.google.com/specimen/Nunito) and safe to
use in marketing artwork.

## Spacing and radius

`4 · 8 · 12 · 16 · 24 · 32 · 48` and radii `8 · 12 · 16 · 24 · 28 · pill`.
28 is the sheet's top corners; nothing smaller than a sheet is that round.
Content is capped at 720px wide, which is what keeps the web build from
stretching a chat bubble across a desktop window.

## Iconography

Feather, through `@expo/vector-icons`. Line icons, no fills, no second family.

Two constraints on drawing the token, and the first one is an App Review
question (Guideline 3.1.5(b)) rather than a stylistic preference:

- **No coin, chain or wallet iconography, and no wallet addresses.** LangX
  tokens are not on a blockchain: no chain, no contract, no market, they cannot
  be bought and they cannot be cashed out. Artwork that implies otherwise is a
  claim the product does not make. Use Feather `award` and `gift`. "Wallet" as
  the name of the screen holding a balance is fine — that is what it is called.
- **Gold has to read as something bought**, not as the product: `frame.gold` is
  sold as a rank.

## The app's v3 tokens (ships with 3.0)

**Not live yet.** Everything above is the look the 2.x app ships. This section
is the redesign's — named "v3" on 16 October 2026, shipping as app 3.0 — and
it stays a preview until 3.0 is in the stores. Until then, artwork keeps to the
sections above. (The heading of this file says "v3 identity" for the 2.x look;
that name predates the redesign's.)

The values are `theme.v3` in `langx/apps/mobile/src/lib/theme/tokens.ts`, which
decides them. From 3.0 the app's palette may leave the website's; the website
and this file follow at that release.

Flat colour blocks, no shadows, big Nunito, flat pill buttons, ink on colour,
and a colour for every exchange partner. Two anchors do not move: the yellow
and its label are the same in both schemes and appear once per screen, on the
committing action — and the blue is held to the same rule.

### Palette

| Token        | Light                   | Dark                 | Where                                              |
| ------------ | ----------------------- | -------------------- | -------------------------------------------------- |
| `bg`         | `#ffffff`               | `#0c0d10`            | the ground                                         |
| `fg`         | `#14161b`               | `#f2f3f5`            | text                                               |
| `muted`      | `#5a5f69`               | `#a3a8b3`            | secondary text                                     |
| `surface`    | `#f2f2ee`               | `#1a1c21`            | the grey block: a row group, a field               |
| `line`       | `#e4e4df`               | `#2a2d33`            | hairlines                                          |
| `tabOn`      | `#e8e7e1`               | `#2a2d33`            | the selected tab's pill                            |
| `echoTint`   | `#e3ebfe`               | `#1c2748`            | Echo's tab and surfaces                            |
| `echoText`   | `#2a54d0`               | `#8aa6ff`            | text on Echo's tint; text that should read as blue |
| `pill`       | `#14161b`               | `#f2f3f5`            | the ink pill — inverts with the ground             |
| `pillText`   | `#ffffff`               | `#14161b`            | label on the ink pill                              |
| `ink`        | `#14161b`               | `#14161b`            | text on a partner hue — the same in both schemes   |
| `blue`       | `#3b6cf6`               | `#3b6cf6`            | the main action that does not commit; a fill only  |
| `onBlue`     | `#ffffff`               | `#ffffff`            | label on blue                                      |
| `yellow`     | `#ffc409`               | `#ffc409`            | **the committing action, once per screen**         |
| `onYellow`   | `#14161b`               | `#14161b`            | label on yellow                                    |
| `correction` | `#0b7a3e`               | `#5ee39a`            | a correction's green, as text                      |
| `danger`     | `#c0281b`               | `#ff8a80`            | the destructive action: a red outline and label    |
| `scrim`      | `rgba(12, 13, 16, 0.55)` | `rgba(0, 0, 0, 0.7)` | behind a sheet — the only elevation                |

Blue is a fill, never text on the dark ground, where it falls under 4.5:1.
Every text pair above is measured in both schemes by the app's
`contrast.test.ts`.

### Partner hues

One per partner, picked from their id and the same everywhere. Always `ink` on
a hue; a chip turns it round, the hue on `ink`. The order is part of every
partner's colour — it is not to be reshuffled.

| Hue         | Light     | Dark      |
| ----------- | --------- | --------- |
| `lilac`     | `#bba4ff` | `#a68cf5` |
| `aqua`      | `#48d3d0` | `#2fbfbc` |
| `mint`      | `#5fdc98` | `#45c883` |
| `lime`      | `#b8e15c` | `#a2cf45` |
| `sky`       | `#74b9ff` | `#5aa5f5` |
| `tangerine` | `#ff9f52` | `#f08a3c` |

### Type

Nunito for display, title, headline and label — now including Black (900) —
and the platform face for reading text. Every step has its line height.

| Step          | Size / line | Face       |
| ------------- | ----------- | ---------- |
| Display       | 44 / 46     | Nunito 900 |
| Title         | 32 / 36     | Nunito 900 |
| Headline      | 22 / 28     | Nunito 800 |
| Body          | 17 / 24     | platform   |
| Callout       | 16 / 21     | platform   |
| Caption       | 14 / 20     | platform   |
| Label         | 13 / 16     | Nunito 800 |
| Button        | 17 / 22     | Nunito 800 |
| Button, small | 16 / 20     | Nunito 800 |

Display tracks at −0.5. Button labels are sentence case, never upper-cased.

### Spacing, radius, icons, elevation

- **Spacing:** `2 · 4 · 6 · 8 · 10 · 12 · 14 · 16 · 20 · 24 · 32`. 16 is the
  screen's side gutter; 10 is the commonest gap.
- **Radius:** icon square 12 · row 18 · card 20 · tile 22 · badge 24 ·
  block 28 · hero 32 · pill. The taller the block, the rounder the corner.
- **Icon glyphs:** 16 · 18 · 20 · 22 · 24 (tab bar) · 26 (header chrome). The
  touch target round a glyph is larger.
- **Elevation:** none. Depth is colour; the only layer is the scrim.
- **Buttons:** flat pills, no shadow, no drop. Faces of 56, 52 and 44pt
  (48dp on Android); the yellow once per screen on the committing action, the
  blue for the main action that does not commit, an outline in the text colour
  for the rest, the ink pill for buy and copy, and a red outline — never a
  fill, never yellow — for what cannot be undone.

## Turning this into artwork

Store screenshots, press images and social cards are the one place the app's
own rules can be safely bent — a headline is not a screen. What must not bend:
the palette, the two-voice rule, the token iconography constraints above, and
the mark itself.
