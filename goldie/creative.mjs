/**
 * The App Store's two creative assets, one pair per locale. They are new with
 * iOS 27 and neither is a screenshot: the product page header is a 21:9
 * banner across the top of the listing, and the search result asset is a 3:2
 * card in search. Apple wants them to carry the app's value and brand rather
 * than its interface, so each is the lockup and one line on the yellow ground,
 * with two of 2.9's phones as the picture, not the subject.
 *
 * | File                 | Size        | Slot                           |
 * | -------------------- | ----------- | ------------------------------ |
 * | creative/header.png  | 3840 x 1646 | PRODUCT_PAGE_HEADER_ASSET      |
 * | creative/search.png  | 3840 x 2560 | APP_STORE_SEARCH_RESULTS_ASSET |
 *
 * Both are opaque RGB, written through ffmpeg as the shots are: App Store
 * Connect refuses an alpha channel on these as it does on screenshots.
 *
 * The header is cropped on narrower screens, so everything that matters stays
 * inside the middle 70% across and 76% down; the phones may run past it. The
 * search card sets its line large and centred, since it is seen small.
 *
 * Run after manifest.mjs: the phones are its localized cuts, so the screen in
 * each is in that language. Arabic mirrors the whole composition.
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

const YELLOW = "#ffc409";
const INK = "#201900";
const FAMILY = '"Nunito", "Noto Sans Arabic", sans-serif';
const RTL = new Set(["ar"]);

/** goldie's iPhone bezel, from its src/frame.ts, as feature.mjs uses it. */
const FRAME = { width: 606, height: 1252, screen: { x: 24, y: 21, width: 557, height: 1210 }, radius: 82 };

/*
 * The lines. The header's is the store subtitle the listing already carries in
 * all eight languages (goldie.config.ts → store.subtitle), so the banner says
 * what the listing says. The search card's is 2.9's promotional text cut to
 * its first clause (langx/docs/store/listing.md), which is what that release
 * leads with. No prices, no rankings, no other app's name.
 */
const SEARCH = {
  en: "Call the people you practice with",
  tr: "Birlikte pratik yaptığın kişileri ara",
  es: "Llama a quien practica contigo",
  ru: "Звони тем, с кем практикуешься",
  ar: "اتصل بمن تتدرّب معهم",
  fr: "Appelez vos partenaires de pratique",
  de: "Ruf deine Übungspartner an",
  "pt-BR": "Ligue para quem pratica com você",
};

const ASSETS = {
  header: {
    width: 3840,
    height: 1646,
    line: (locale) => config.store.subtitle[locale],
    layout: "banner",
  },
  search: {
    width: 3840,
    height: 2560,
    line: (locale) => SEARCH[locale],
    layout: "card",
  },
};

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

/** One phone, as goldie draws it: the cut clipped to the cutout, the bezel over it, a soft shadow under. */
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

const bezel = await loadImage(join(here, "node_modules", "goldie", "assets", "17-pro-silver.png"));
const lockup = await loadImage(join(here, "..", "brand", "logo", "lockup-horizontal.png"));

for (const locale of config.locales) {
  const rtl = RTL.has(locale);
  const cuts = join(here, "out", "locales", locale, "raw", "screens");
  const calls = await loadImage(join(cuts, "calls.png"));
  const camera = await loadImage(join(cuts, "camera.png"));
  const dir = join(here, "..", "2.x", locale, "ios", "creative");
  await mkdir(dir, { recursive: true });

  for (const [name, asset] of Object.entries(ASSETS)) {
    const { width: W, height: H } = asset;
    const canvas = createCanvas(W, H);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = YELLOW;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = INK;
    ctx.textBaseline = "alphabetic";
    // Mirrored for Arabic: every x is measured from the other edge.
    const X = (x) => (rtl ? W - x : x);

    if (asset.layout === "banner") {
      // Safe area: the middle 70% across, 76% down.
      const safe = { left: W * 0.15, right: W * 0.85, top: H * 0.12, bottom: H * 0.88 };
      const size = 210;
      const font = `700 ${size}px ${FAMILY}`;
      const lines = wrap(ctx, asset.line(locale), font, 1500);
      const lockupHeight = 200;
      const lockupWidth = (lockup.width / lockup.height) * lockupHeight;
      const gap = 80;
      const block = lockupHeight + gap + lines.length * size * 1.08;
      let y = (H - block) / 2;
      const x = safe.left + 40;
      ctx.drawImage(lockup, rtl ? W - x - lockupWidth : x, y, lockupWidth, lockupHeight);
      y += lockupHeight + gap;
      ctx.font = font;
      ctx.textAlign = rtl ? "right" : "left";
      for (const line of lines) {
        y += size;
        ctx.fillText(line, X(x), y);
        y += size * 0.08;
      }
      // Two phones on the far side of the safe area, the camera behind the call.
      const phone = 640;
      const right = safe.right - 20;
      drawPhone(ctx, bezel, camera, { left: X(right - phone * 1.62) - (rtl ? phone * 0.92 : 0), top: H * 0.165, width: phone * 0.92 });
      drawPhone(ctx, bezel, calls, { left: rtl ? W - right : right - phone, top: H * 0.23, width: phone });
    } else {
      const size = 230;
      const font = `700 ${size}px ${FAMILY}`;
      const lines = wrap(ctx, asset.line(locale), font, 3000);
      const lockupHeight = 210;
      const lockupWidth = (lockup.width / lockup.height) * lockupHeight;
      let y = 230;
      ctx.drawImage(lockup, (W - lockupWidth) / 2, y, lockupWidth, lockupHeight);
      y += lockupHeight + 70;
      ctx.font = font;
      ctx.textAlign = "center";
      for (const line of lines) {
        y += size;
        ctx.fillText(line, W / 2, y);
        y += size * 0.08;
      }
      // The phones rise from the bottom edge, overlapping at the centre line.
      const phone = 700;
      const top = y + 130;
      drawPhone(ctx, bezel, camera, { left: X(W / 2 - phone * 0.9) - (rtl ? phone : 0), top: top + 60, width: phone });
      drawPhone(ctx, bezel, calls, { left: X(W / 2 - phone * 0.1) - (rtl ? phone : 0), top, width: phone });
    }

    const file = join(dir, `${name}.png`);
    const rgba = join(dir, `.${name}.rgba.png`);
    await writeFile(rgba, await canvas.encode("png"));
    await run("ffmpeg", ["-y", "-loglevel", "error", "-i", rgba, "-pix_fmt", "rgb24", file]);
    await rm(rgba, { force: true });
    console.log(`  ${locale}  ${name}  ${W}x${H}`);
  }
}
