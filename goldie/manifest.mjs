/**
 * Stands in for `goldie capture`. goldie's frame step reads
 * out/raw/<device>/manifest.json, the record its capture step writes after
 * driving a simulator. There is no simulator here: the screens are the
 * renders in ../marketing/2.x/screens, so this writes that record by hand,
 * one entry per screenshot scene, pointing at a copy of each render.
 *
 * The copy is cropped 6px on every side. The renders carry the site's own
 * device edge - a 3px border in the app's `border` colour on a rounded
 * corner - and inside goldie's bezel that edge would show as a hairline
 * along the screen. The corners need no work: goldie clips the capture to
 * the cutout's own radius, which is larger than the render's, and a rounded
 * rectangle with the larger radius fits inside the one with the smaller.
 *
 * The cut is the same for every slot, so it is made once into out/raw/screens
 * and each device's record points at it.
 *
 * A scene with a render per locale - ../marketing/2.x/screens/<locale>/<id>.png,
 * which screens/render.mjs writes for 2.9's screens - is cut once per locale,
 * and each locale gets its own record under out/locales/<locale>/raw/<device>/,
 * which frame.mjs points goldie at. out/raw/<device>/ keeps the English one,
 * for the studio.
 */
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas, loadImage } from "@napi-rs/canvas";
import "./devices.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const { default: config } = await import("./goldie.config.ts");
const screens = resolve(here, "../marketing/2.x/screens");
const EDGE = 6;

const cutDir = join(here, "out", "raw", "screens");
await mkdir(cutDir, { recursive: true });

async function cut(from, to) {
  const image = await loadImage(from);
  const w = image.width - 2 * EDGE;
  const h = image.height - 2 * EDGE;
  const canvas = createCanvas(w, h);
  canvas.getContext("2d").drawImage(image, EDGE, EDGE, w, h, 0, 0, w, h);
  await writeFile(to, await canvas.encode("png"));
  return to;
}

const shared = new Map();
for (const scene of config.scenes) {
  if (scene.kind !== "screenshot") continue;
  const source = join(screens, `${scene.id}.png`);
  if (existsSync(source)) shared.set(scene.id, await cut(source, join(cutDir, `${scene.id}.png`)));
}
console.log(`${shared.size} shared screens cut -> ${cutDir}`);

async function writeManifests(root, screenshots) {
  for (const device of config.devices) {
    const rawDir = join(root, "raw", device);
    await mkdir(rawDir, { recursive: true });
    const manifest = {
      device,
      udid: "",
      capturedAt: new Date().toISOString(),
      screenshots,
      preview: null,
    };
    await writeFile(join(rawDir, "manifest.json"), JSON.stringify(manifest, null, 2));
  }
}

const record = (files) =>
  config.scenes
    .filter((scene) => scene.kind === "screenshot")
    .map((scene) => {
      const file = files.get(scene.id) ?? shared.get(scene.id);
      if (!file) throw new Error(`No render for scene "${scene.id}" in ${screens}`);
      return { sceneId: scene.id, file };
    });

for (const locale of config.locales) {
  const localDir = join(here, "out", "locales", locale, "raw", "screens");
  await mkdir(localDir, { recursive: true });
  const files = new Map();
  for (const scene of config.scenes) {
    const source = join(screens, locale, `${scene.id}.png`);
    if (scene.kind === "screenshot" && existsSync(source)) {
      files.set(scene.id, await cut(source, join(localDir, `${scene.id}.png`)));
    }
  }
  await writeManifests(join(here, "out", "locales", locale), record(files));
  console.log(`${locale}: ${files.size} localized screens, manifests for ${config.devices.length} devices`);
  if (locale === "en") await writeManifests(join(here, "out"), record(files));
}
