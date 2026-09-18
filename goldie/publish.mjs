/**
 * Files the framed renders as the store set.
 *
 * goldie writes out/screenshots/<device>/<locale>/NN-<scene>.png, which is its
 * own shape. Both stores are fed from ../2.x/<locale>/<slot>/<n>.png instead -
 * the layout `collect-store-screenshots.mjs` and `collect-play-screenshots.mjs`
 * in `langx/langx` read, and the one ../2.x/README.md documents - so each
 * render is copied to its slot under its store number. devices.mjs holds the
 * device-to-slot map and the size each slot takes; a file that is not that
 * size stops the run rather than reaching a store.
 *
 * Only the numbered shots are touched. The feature graphic sits beside them in
 * android/ and is not a screen shot, so it is left where it is.
 */
import { copyFile, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadImage } from "@napi-rs/canvas";
import { SLOTS } from "./devices.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const { default: config } = await import("./goldie.config.ts");
const storeRoot = join(here, "..", "2.x");

let count = 0;
for (const device of config.devices) {
  const { slot, width, height } = SLOTS[device];
  for (const locale of config.locales) {
    const from = join(here, "out", "screenshots", device, locale);
    const to = join(storeRoot, locale, slot);
    await mkdir(to, { recursive: true });
    const renders = (await readdir(from)).filter((n) => n.endsWith(".png")).sort();
    if (renders.length !== config.scenes.filter((s) => s.kind === "screenshot").length) {
      throw new Error(`${device}/${locale}: ${renders.length} renders, expected the whole set. Run: npm run frame`);
    }
    for (const name of await readdir(to)) {
      if (name.endsWith(".png")) await rm(join(to, name), { force: true });
    }
    for (const [i, name] of renders.entries()) {
      const file = join(from, name);
      const shot = await loadImage(file);
      if (shot.width !== width || shot.height !== height) {
        throw new Error(`${device}/${locale}/${name} is ${shot.width}x${shot.height}, and ${slot} takes ${width}x${height}`);
      }
      await copyFile(file, join(to, `${i + 1}.png`));
      count++;
    }
    console.log(`  ${locale}/${slot}  ${renders.length} shots`);
  }
}
console.log(`${count} files -> ${storeRoot}`);
