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
 */
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

const screenshots = [];
for (const scene of config.scenes) {
  if (scene.kind !== "screenshot") continue;
  const image = await loadImage(join(screens, `${scene.id}.png`));
  const w = image.width - 2 * EDGE;
  const h = image.height - 2 * EDGE;
  const canvas = createCanvas(w, h);
  canvas.getContext("2d").drawImage(image, EDGE, EDGE, w, h, 0, 0, w, h);
  const file = join(cutDir, `${scene.id}.png`);
  await writeFile(file, await canvas.encode("png"));
  screenshots.push({ sceneId: scene.id, file });
}
console.log(`${screenshots.length} screens cut -> ${cutDir}`);

for (const device of config.devices) {
  const rawDir = join(here, "out", "raw", device);
  await mkdir(rawDir, { recursive: true });
  const manifest = {
    device,
    udid: "",
    capturedAt: new Date().toISOString(),
    screenshots,
    preview: null,
  };
  await writeFile(join(rawDir, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`${device}: manifest -> ${rawDir}`);
}
