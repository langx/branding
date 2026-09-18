/**
 * The Play feature graphic, one per locale: 1024 x 500, the only store asset
 * that is not a screenshot and the one goldie cannot draw - its renderer
 * composes portrait tiles, and this is a landscape banner with the lockup on
 * it.
 *
 * So it is drawn here, from the same parts as the shots: the yellow ground,
 * the lockup, shot 1's headline and support line out of goldie.config.ts, and
 * the Discover render in goldie's own bezel, geometry and all. Arabic mirrors
 * the whole banner, as the set it replaces did.
 *
 * Run it after frame.mjs; it reads the cut screens manifest.mjs writes.
 */
import { execFile } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { createCanvas, GlobalFonts, loadImage } from "@napi-rs/canvas";

const run = promisify(execFile);

const here = dirname(fileURLToPath(import.meta.url));
const { default: config } = await import("./goldie.config.ts");

for (const file of ["Nunito-Regular.ttf", "Nunito-ExtraBold.ttf"]) {
  GlobalFonts.registerFromPath(join(here, "fonts", file), "Nunito");
}
GlobalFonts.registerFromPath(join(here, "fonts", "NotoSansArabic.ttf"), "Noto Sans Arabic");

const W = 1024;
const H = 500;
const YELLOW = "#ffc409";
const HEADLINE = "#201900";
const SUBHEAD = "#846604";
const FAMILY = '"Nunito", "Noto Sans Arabic", sans-serif';
const RTL = new Set(["ar"]);

/** goldie's iPhone bezel, from its src/frame.ts. */
const FRAME = {
  width: 606,
  height: 1252,
  screen: { x: 24, y: 21, width: 557, height: 1210 },
  radius: 82,
};
const DEVICE_WIDTH = 296;
const DEVICE_TOP = 64;
const DEVICE_CENTRE = 0.815;

const PAD = 64;
const COLUMN = 520;
const LOCKUP_HEIGHT = 52;
const HEADLINE_SIZE = 44;
const SUBHEAD_SIZE = 20;

const wrap = (ctx, text, font, maxWidth) => {
  ctx.font = font;
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(next).width > maxWidth) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
};

const shot = config.scenes.find((s) => s.kind === "screenshot");
const screen = await loadImage(join(here, "out", "raw", "screens", `${shot.id}.png`));
const bezel = await loadImage(join(here, "node_modules", "goldie", "assets", "17-pro-silver.png"));
const lockup = await loadImage(join(here, "..", "brand", "logo", "lockup-horizontal.png"));

for (const locale of config.locales) {
  const rtl = RTL.has(locale);
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = YELLOW;
  ctx.fillRect(0, 0, W, H);

  // The device, in goldie's bezel: the render is clipped to the cutout's own
  // radius and the bezel is drawn over it, as goldie's drawDevice does.
  const scale = DEVICE_WIDTH / FRAME.width;
  const centre = rtl ? 1 - DEVICE_CENTRE : DEVICE_CENTRE;
  const left = W * centre - DEVICE_WIDTH / 2;
  const cut = {
    x: left + FRAME.screen.x * scale,
    y: DEVICE_TOP + FRAME.screen.y * scale,
    width: FRAME.screen.width * scale,
    height: FRAME.screen.height * scale,
  };
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(cut.x, cut.y, cut.width, cut.height, FRAME.radius * scale);
  ctx.clip();
  // Cover: the render is a hair narrower than the cutout, so it is scaled to
  // fill and cropped at the bottom, where the screen runs off the banner anyway.
  const cover = Math.max(cut.width / screen.width, cut.height / screen.height);
  ctx.drawImage(screen, cut.x, cut.y, screen.width * cover, screen.height * cover);
  ctx.restore();
  ctx.drawImage(bezel, left, DEVICE_TOP, DEVICE_WIDTH, FRAME.height * scale);

  // The copy column, mirrored for Arabic.
  const headlineFont = `700 ${HEADLINE_SIZE}px ${FAMILY}`;
  const subheadFont = `400 ${SUBHEAD_SIZE}px ${FAMILY}`;
  const headline = wrap(ctx, shot.headline[locale], headlineFont, COLUMN);
  const subhead = wrap(ctx, shot.subhead[locale], subheadFont, COLUMN);
  const height =
    LOCKUP_HEIGHT + 34 + headline.length * HEADLINE_SIZE * 1.08 + 14 + subhead.length * SUBHEAD_SIZE * 1.3;
  let y = (H - height) / 2;
  const x = rtl ? W - PAD : PAD;
  ctx.textAlign = rtl ? "right" : "left";
  ctx.textBaseline = "top";

  const lockupWidth = (lockup.width / lockup.height) * LOCKUP_HEIGHT;
  ctx.drawImage(lockup, rtl ? x - lockupWidth : x, y, lockupWidth, LOCKUP_HEIGHT);
  y += LOCKUP_HEIGHT + 34;

  ctx.font = headlineFont;
  ctx.fillStyle = HEADLINE;
  for (const line of headline) {
    ctx.fillText(line, x, y);
    y += HEADLINE_SIZE * 1.08;
  }
  y += 14;
  ctx.font = subheadFont;
  ctx.fillStyle = SUBHEAD;
  for (const line of subhead) {
    ctx.fillText(line, x, y);
    y += SUBHEAD_SIZE * 1.3;
  }

  const dir = join(here, "..", "2.x", locale, "android");
  await mkdir(dir, { recursive: true });
  const file = join(dir, "feature-graphic.png");
  // Written through ffmpeg for the same reason goldie writes the shots that
  // way: the canvas is RGBA and a store asset should carry no alpha channel.
  const rgba = join(dir, ".feature-graphic.rgba.png");
  await writeFile(rgba, await canvas.encode("png"));
  await run("ffmpeg", ["-y", "-loglevel", "error", "-i", rgba, "-pix_fmt", "rgb24", file]);
  await rm(rgba, { force: true });
  console.log(`  ${locale}  ${W}x${H} -> ${file}`);
}
