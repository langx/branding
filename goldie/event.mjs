/**
 * The App Store in-app event's two pictures, one pair per locale, for 2.9's
 * calls. An event shows as a card in search, on the product page and in the
 * Today tab, and opens to a full-screen details page.
 *
 * | File              | Size        | Slot               |
 * | ----------------- | ----------- | ------------------ |
 * | event/card.png    | 1920 x 1080 | EVENT_CARD         |
 * | event/details.png | 1080 x 1920 | EVENT_DETAILS_PAGE |
 *
 * No words, no lockup: the App Store sets the event's name and short
 * description over the bottom of both, with its own gradient, and Apple asks
 * that the media carry none of its own. So the phones keep clear of where that
 * text goes — the card's lower left, the details page's bottom fifth — and
 * the rest is the yellow ground: an incoming call in front, the chat it came
 * from behind. The screens are the localized cuts manifest.mjs
 * renders, so each locale's phones are in its own language; Arabic mirrors.
 *
 * Opaque RGB through ffmpeg, as the shots and creative.mjs are.
 */
import { execFile } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { createCanvas, loadImage } from "@napi-rs/canvas";

const run = promisify(execFile);
const here = dirname(fileURLToPath(import.meta.url));
const { default: config } = await import("./goldie.config.ts");

const YELLOW = "#ffc409";
const RTL = new Set(["ar"]);

/** goldie's iPhone bezel, from its src/frame.ts, as creative.mjs uses it. */
const FRAME = { width: 606, height: 1252, screen: { x: 24, y: 21, width: 557, height: 1210 }, radius: 82 };

function drawPhone(ctx, bezel, screen, { left, top, width }) {
  const scale = width / FRAME.width;
  const height = FRAME.height * scale;
  const cut = {
    x: left + FRAME.screen.x * scale,
    y: top + FRAME.screen.y * scale,
    width: FRAME.screen.width * scale,
    height: FRAME.screen.height * scale,
  };
  ctx.save();
  ctx.shadowColor = "rgba(32, 25, 0, 0.28)";
  ctx.shadowBlur = width * 0.12;
  ctx.shadowOffsetY = width * 0.04;
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.roundRect(cut.x, cut.y, cut.width, cut.height, FRAME.radius * scale);
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(cut.x, cut.y, cut.width, cut.height, FRAME.radius * scale);
  ctx.clip();
  const cover = Math.max(cut.width / screen.width, cut.height / screen.height);
  const w = screen.width * cover;
  const h = screen.height * cover;
  ctx.drawImage(screen, cut.x + (cut.width - w) / 2, cut.y + (cut.height - h) / 2, w, h);
  ctx.restore();
  ctx.drawImage(bezel, left, top, width, height);
}

/*
 * Layouts in left-to-right terms; Arabic swaps the two phones' sides. `back`
 * is the chat, `front` the incoming call. Both run past the bottom edge, so
 * what shows above the App Store's text band is the top two thirds of each.
 */
const ASSETS = {
  card: { width: 1920, height: 1080, back: { cx: 0.6, top: 60, width: 420 }, front: { cx: 0.77, top: 130, width: 450 } },
  details: { width: 1080, height: 1920, back: { cx: 0.33, top: 110, width: 560 }, front: { cx: 0.64, top: 220, width: 600 } },
};

const bezel = await loadImage(join(here, "node_modules", "goldie", "assets", "17-pro-silver.png"));

for (const locale of config.locales) {
  const rtl = RTL.has(locale);
  const cuts = join(here, "out", "locales", locale, "raw", "screens");
  const call = await loadImage(join(cuts, "calls.png"));
  const chat = await loadImage(join(cuts, "calls-chat.png"));
  const dir = join(here, "..", "2.x", locale, "ios", "event");
  await mkdir(dir, { recursive: true });

  for (const [name, a] of Object.entries(ASSETS)) {
    const canvas = createCanvas(a.width, a.height);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = YELLOW;
    ctx.fillRect(0, 0, a.width, a.height);
    const left = ({ cx, width }) => (rtl ? 1 - cx : cx) * a.width - width / 2;
    drawPhone(ctx, bezel, chat, { left: left(a.back), top: a.back.top, width: a.back.width });
    drawPhone(ctx, bezel, call, { left: left(a.front), top: a.front.top, width: a.front.width });

    const file = join(dir, `${name}.png`);
    const rgba = join(dir, `.${name}.rgba.png`);
    await writeFile(rgba, await canvas.encode("png"));
    await run("ffmpeg", ["-y", "-loglevel", "error", "-i", rgba, "-pix_fmt", "rgb24", file]);
    await rm(rgba, { force: true });
    console.log(`  ${locale}  ${name}  ${a.width}x${a.height}`);
  }
}
