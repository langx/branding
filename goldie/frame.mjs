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
import { loadConfig, renderScreenshots, verify } from "goldie";

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

const cfg = await loadConfig(join(here, "goldie.config.ts"));
const shots = cfg.scenes.filter((s) => s.kind === "screenshot");
const order = shots.map((s) => s.id);

const groups = new Map();
for (const scene of shots) {
  const ground = scene.background ?? cfg.theme.background;
  if (!COPY[ground]) throw new Error(`No copy colours for ground ${ground} (scene "${scene.id}")`);
  if (!groups.has(ground)) groups.set(ground, []);
  groups.get(ground).push(scene);
}

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
    const outDir = join(cfg.outDir, "screenshots", device, locale);
    const staging = join(cfg.outDir, ".staging", device, locale);
    await rm(staging, { recursive: true, force: true });
    await mkdir(staging, { recursive: true });

    for (const [ground, scenes] of groups) {
      // A duo layout borrows another scene's capture; it may sit in a
      // different group, so every scene stays in the pass and only the
      // ones on this ground are rendered.
      const pass = {
        ...cfg,
        theme: { ...cfg.theme, background: ground, ...COPY[ground] },
        scenes: cfg.scenes.filter((s) => s.kind !== "screenshot" || scenes.includes(s)),
      };
      const files = await renderScreenshots(pass, device, locale);
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
