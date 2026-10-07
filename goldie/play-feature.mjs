/**
 * Play's feature graphic, one file for every listing: 1024 x 500, opaque RGB.
 *
 * feature.mjs draws one per language with shot 1's headline on the left. On a
 * desktop, Play lays the app's title, rating and Install button over the left
 * ~45% of the graphic behind a dark gradient, which is exactly where that
 * headline sits; on a phone with a promo video set, it puts a round play
 * button over the centre. So this one says nothing in words - the lockup is
 * the only lettering - and keeps everything to the right of centre: the
 * lockup in the upper area, then two phones in Play's own Pixel 10 Pro bezel,
 * a correction in a chat behind and 2.9's incoming call in front. The left
 * 45% and the centre are bare ground, and everything that matters is inside
 * a 10% margin.
 *
 * The screens are the English renders from screens/render.mjs. At this size
 * their text is texture, not reading, which is what lets one file serve all
 * thirteen Play listings.
 *
 *   node play-feature.mjs   ->  ../2.x/android-feature-graphic.png
 */
import { execFile } from "node:child_process";
import { rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { createCanvas, loadImage } from "@napi-rs/canvas";

const run = promisify(execFile);
const here = dirname(fileURLToPath(import.meta.url));

const W = 1024;
const H = 500;
const YELLOW = "#ffc409";

/** goldie's Pixel 10 Pro bezel, from its src/frame.ts (ANDROID_FRAME). */
const PIXEL = { width: 1410, height: 2968, screen: { x: 59, y: 60, width: 1280, height: 2856 }, radius: 178 };

function drawPhone(ctx, bezel, screen, { left, top, width }) {
  const scale = width / PIXEL.width;
  const cut = {
    x: left + PIXEL.screen.x * scale,
    y: top + PIXEL.screen.y * scale,
    width: PIXEL.screen.width * scale,
    height: PIXEL.screen.height * scale,
  };
  const radius = PIXEL.radius * scale;
  ctx.save();
  ctx.shadowColor = "rgba(32, 25, 0, 0.3)";
  ctx.shadowBlur = width * 0.14;
  ctx.shadowOffsetY = width * 0.05;
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.roundRect(cut.x, cut.y, cut.width, cut.height, radius);
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(cut.x, cut.y, cut.width, cut.height, radius);
  ctx.clip();
  // Cover, anchored at the top: the Pixel's screen is a touch taller than the
  // iPhone render, so the sides are trimmed rather than the status bar.
  const cover = Math.max(cut.width / screen.width, cut.height / screen.height);
  const w = screen.width * cover;
  ctx.drawImage(screen, cut.x + (cut.width - w) / 2, cut.y, w, screen.height * cover);
  ctx.restore();
  ctx.drawImage(bezel, left, top, width, PIXEL.height * scale);
}

const screens = join(here, "..", "marketing", "2.x", "screens", "en");
const bezel = await loadImage(join(here, "node_modules", "goldie", "assets", "pixel-10-pro.webp"));
const lockup = await loadImage(join(here, "..", "brand", "logo", "lockup-horizontal.png"));
const chat = await loadImage(join(screens, "chat-correction.png"));
const call = await loadImage(join(screens, "calls.png"));

const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");
ctx.fillStyle = YELLOW;
ctx.fillRect(0, 0, W, H);

// The lockup, upper area, starting just right of the half Play covers.
const lockupHeight = 52;
ctx.drawImage(lockup, 486, 58, (lockup.width / lockup.height) * lockupHeight, lockupHeight);

// The chat behind, the call in front and higher, overlapping by a bezel's width.
drawPhone(ctx, bezel, chat, { left: 592, top: 122, width: 156 });
drawPhone(ctx, bezel, call, { left: 730, top: 56, width: 180 });

const file = join(here, "..", "2.x", "android-feature-graphic.png");
const rgba = join(here, "..", "2.x", ".android-feature-graphic.rgba.png");
await writeFile(rgba, await canvas.encode("png"));
await run("ffmpeg", ["-y", "-loglevel", "error", "-i", rgba, "-pix_fmt", "rgb24", file]);
await rm(rgba, { force: true });
console.log(`${W}x${H} -> ${file}`);
