/**
 * `goldie frame`, one pass per ground. goldie's theme has one background and
 * one pair of copy colours; a scene can override the background but not
 * the colours, and ink copy on the ink ground is invisible. So the scenes
 * are grouped by ground and each group is rendered as its own pass with
 * the copy colours that ground needs, then the files are merged back into
 * one strip, numbered in store order.
 *
 * Everything drawn - bezel, layout, type, wrapping - is goldie's own
 * renderScreenshots; this only chooses what it sees.
 */
import { mkdir, readdir, rename, rm } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { GlobalFonts } from "@napi-rs/canvas";
import { DEVICES, LAYOUTS, loadConfig, renderScreenshots, verify } from "goldie";
import "./devices.mjs";

const here = dirname(fileURLToPath(import.meta.url));

// Regular for the support line, ExtraBold for the headline. goldie asks the
// canvas for weight 700 and gets the nearest registered cut, which is what
// makes the headline ExtraBold, the brand's display weight, without a Bold
// file in between.
for (const file of ["Nunito-Regular.ttf", "Nunito-ExtraBold.ttf"]) {
  GlobalFonts.registerFromPath(join(here, "fonts", file), "Nunito");
}
GlobalFonts.registerFromPath(join(here, "fonts", "NotoSansArabic.ttf"), "Noto Sans Arabic");

/** Copy colours per ground, from brand/tokens.json: text and textMuted on white and on ink, primaryText and its muted mix on yellow. */
const COPY = {
  "#ffc409": { headlineColor: "#201900", subheadColor: "#846604" },
  "#ffffff": { headlineColor: "#17191c", subheadColor: "#62676d" },
  "#17191c": { headlineColor: "#f2f3f5", subheadColor: "#9aa1a9" },
};

// goldie reserves the top 24% of the tile for copy whatever the copy's
// length, and hangs each layout's device below that band. Ours is a headline
// and one line under it, which fills about half of it, so the device sat
// under a strip of empty ground. Raise each device until its top sits just
// under the tallest copy in the set (a two-line headline over a two-line
// support line ends near 20% of the tile). The tilted ones rise a little
// less, since rotation lifts a corner above the frame's top edge. The
// classic layout takes its band from theme.copyHeightRatio instead, set in
// the config. The wide Play tile keeps goldie's own clamp and is unaffected.
const DEVICE_Y = { hero: [0.67], tilt: [0.67], "tilt-right": [0.68], duo: [0.51, 0.59] };
for (const [key, ys] of Object.entries(DEVICE_Y)) {
  ys.forEach((y, i) => {
    LAYOUTS[key].devices[i].y = y;
  });
}

// goldie clamps a tile wider than the 6.9" aspect back to that aspect for the
// copy column, but sizes each layout's device against the tile's full width -
// right for a panorama, wrong for a squat slot. On the 5.5" iPhone, both iPads
// and both Play tablets that draws a device wider than the column it stands
// in, and the bezel runs off both sides. Scale the device by the same clamp
// the copy gets, so every slot is the one composition at its own size. The
// classic layout is already sized against the clamped tile and is left alone.
const REF_ASPECT = 1320 / 2868;
const BASE_WIDTH = new Map(
  Object.entries(LAYOUTS).map(([key, layout]) => [key, layout.devices.map((d) => d.widthRatio)]),
);
const fitToTile = (device) => {
  const { width, height } = DEVICES[device].screenshot;
  const fit = Math.min(1, (height * REF_ASPECT) / width);
  for (const [key, widths] of BASE_WIDTH) {
    LAYOUTS[key].devices.forEach((d, i) => {
      if (!d.fitBelowCopy) d.widthRatio = widths[i] * fit;
    });
  }
};

const cfg = await loadConfig(join(here, "goldie.config.ts"));
// A `behind` scene is only ever drawn behind another one's device, so it is
// never rendered as a shot and takes no number.
const shots = cfg.scenes.filter((s) => s.kind === "screenshot" && !s.behind);
const order = shots.map((s) => s.id);

// Right-to-left locales. A scene marked `mirrorRtl` has a localized screen,
// which is itself mirrored there, so its layout is turned round to match.
const RTL = new Set(["ar"]);

/** The passes for one locale: one per ground, and one more per ground for mirrored scenes. */
const passesFor = (locale) => {
  const groups = new Map();
  for (const scene of shots) {
    const ground = scene.background ?? cfg.theme.background;
    if (!COPY[ground]) throw new Error(`No copy colours for ground ${ground} (scene "${scene.id}")`);
    const mirror = RTL.has(locale) && scene.mirrorRtl === true;
    const key = `${ground}${mirror ? " rtl" : ""}`;
    if (!groups.has(key)) groups.set(key, { ground, mirror, scenes: [] });
    groups.get(key).scenes.push(scene);
  }
  return [...groups.values()];
};

/** Turns every layout left for right, and back. Passes run one at a time, so this is safe. */
const mirrorLayouts = () => {
  for (const layout of Object.values(LAYOUTS)) {
    for (const device of layout.devices) {
      device.x = 1 - device.x;
      device.rotate = -device.rotate;
    }
  }
};

const only = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
};
const devices = only("device") ? [only("device")] : cfg.devices;
const locales = only("locale") ? [only("locale")] : cfg.locales;

let ok = true;
for (const device of devices) {
  for (const locale of locales) {
    console.log(`> ${device} ${locale}`);
    fitToTile(device);
    const outDir = join(cfg.outDir, "screenshots", device, locale);
    const staging = join(cfg.outDir, ".staging", device, locale);
    await rm(staging, { recursive: true, force: true });
    await mkdir(staging, { recursive: true });
    await mkdir(outDir, { recursive: true });

    for (const { ground, mirror, scenes } of passesFor(locale)) {
      // Only the scenes on this ground are rendered. A duo's second screen
      // comes from the capture record, not from the pass, so it need not be
      // in it. The record is the locale's own (manifest.mjs), since some
      // screens are rendered per language.
      const pass = {
        ...cfg,
        outDir: join(cfg.outDir, "locales", locale),
        theme: { ...cfg.theme, background: ground, ...COPY[ground] },
        scenes: cfg.scenes.filter((s) => s.kind !== "screenshot" || scenes.includes(s)),
      };
      if (mirror) mirrorLayouts();
      const files = await renderScreenshots(pass, device, locale).finally(() => {
        if (mirror) mirrorLayouts();
      });
      for (const file of files) {
        // goldie numbers by position within the pass; renumber by store order.
        const id = basename(file).replace(/^\d+-/, "").replace(/\.png$/, "");
        const slot = String(order.indexOf(id) + 1).padStart(2, "0");
        await rename(file, join(staging, `${slot}-${id}.png`));
      }
    }

    for (const name of await readdir(outDir)) {
      if (name.endsWith(".png")) await rm(join(outDir, name), { force: true });
    }
    for (const name of await readdir(staging)) {
      await rename(join(staging, name), join(outDir, name));
    }
    ok = (await verify(cfg, device, locale)) && ok;
  }
}
await rm(join(cfg.outDir, ".staging"), { recursive: true, force: true });
process.exit(ok ? 0 : 1);
