/**
 * The store slots goldie does not ship.
 *
 * goldie knows two devices — an iPhone 6.9" tile and a Play phone tile — and
 * `DEVICES` is how its renderer is told a tile's size and which bezel goes on
 * it (`platform` picks the bezel; everything else in the record belongs to the
 * capture step, which this pipeline does not run). The store set has seven
 * slots, so the other five are registered here at the sizes `../2.x/README.md`
 * lists. Nothing about the composition changes with the tile: goldie clamps a
 * tile wider than the 6.9" aspect to that aspect and centres the column, which
 * is what puts a phone on an iPad canvas the way the card set did.
 *
 * `slot` is where the finished file belongs under `../2.x/<locale>/`, which is
 * the interface `collect-store-screenshots.mjs` and `collect-play-screenshots.mjs`
 * in `langx/langx` read. Sizes are the ones both stores have already taken;
 * publish.mjs verifies against them.
 */
import { DEVICES } from "goldie";

/** device key -> its slot under 2.x/<locale>/ and the size that slot takes. */
export const SLOTS = {
  "iphone-6.9": { slot: "ios/6.9", width: 1320, height: 2868 },
  "iphone-5.5": { slot: "ios/5.5", width: 1242, height: 2208 },
  "ipad-13": { slot: "ios/13", width: 2064, height: 2752 },
  "ipad-12.9": { slot: "ios/12.9", width: 2048, height: 2732 },
  "pixel-10-pro": { slot: "android/phone", width: 1440, height: 3120 },
  "android-7tablet": { slot: "android/7tablet", width: 1200, height: 1920 },
  "android-10tablet": { slot: "android/10tablet", width: 1600, height: 2560 },
};

const IOS = new Set(["iphone-6.9", "iphone-5.5", "ipad-13", "ipad-12.9"]);

for (const [key, { slot, width, height }] of Object.entries(SLOTS)) {
  DEVICES[key] = {
    // Whatever the built-in record carries (a simulator name, an AVD profile)
    // is kept; the capture step that reads it is not run here either way.
    ...DEVICES[key],
    // The label is the key so goldie's own housekeeping - it clears
    // out/screenshots/<label> when the two differ - has nothing to clear.
    label: key,
    platform: IOS.has(key) ? "ios" : "android",
    native: DEVICES[key]?.native ?? null,
    screenshot: { width, height },
    preview: null,
    slot,
  };
}

export const DEVICE_KEYS = Object.keys(SLOTS);
