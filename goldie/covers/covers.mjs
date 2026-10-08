/**
 * The three store covers, drawn as HTML and photographed by headless Chromium:
 * the App Store's product page header and search results card, one pair per
 * language, and Play's one wordless feature graphic. `../creative.mjs` and
 * `../play-feature.mjs` are the runners; this module is the picture.
 *
 * The composition is one scene on every cover: a phone taking an incoming
 * video call from a real person, tilted into light perspective, with the
 * app's own surfaces lifted off it - the green correction card, a partner
 * chip with a language pair, the call controls - each on its own depth, lit
 * once from the top-left. The headline is the only marketing sentence; every
 * other word on the canvas is a string the app ships, read from a langx/langx
 * checkout (the sibling `../../../langx` by default, or LANGX_DIR), so a
 * Turkish cover carries the Turkish the app carries. The Spanish inside the
 * correction card is demonstration content, the same as on the screens.
 *
 * Arabic mirrors the layout but not the light: words to the right, scene to
 * the left, the tilt turned the other way, shadows still falling down-right.
 */
import { execFile } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { promisify } from 'node:util'
import { chromium } from 'playwright-core'

const run = promisify(execFile)
const here = dirname(fileURLToPath(import.meta.url))
const goldie = join(here, '..')
const root = join(goldie, '..')
const langx = resolve(process.env.LANGX_DIR ?? join(root, '..', 'langx'))
const url = (p) => pathToFileURL(p).href

export const RTL = new Set(['ar'])

const ASSETS = {
  fonts: url(join(goldie, 'fonts')),
  lockup: url(join(root, 'brand', 'logo', 'lockup-horizontal.svg')),
  iphone: url(join(goldie, 'node_modules', 'goldie', 'assets', '17-pro-silver.png')),
  pixel: url(join(goldie, 'node_modules', 'goldie', 'assets', 'pixel-10-pro.webp')),
  lucia: url(join(here, 'lucia.webp')),
  javier: url(join(here, 'javier.webp')),
  screen: (locale, name) => url(join(root, 'marketing', '2.x', 'screens', locale, `${name}.png`)),
}

/*
 * The lines. The header's is the store subtitle the listing already carries
 * (goldie.config.ts -> store.subtitle), broken where it reads best; the join
 * is asserted against the config so the banner cannot drift from the listing.
 * The search card's is 2.9's promotional text cut to its first clause
 * (langx/docs/store/listing.md), with the verb - the one word that says
 * "call" - set on an ink pill. No prices, no rankings, no other app's name.
 */
export const HEADER = {
  en: ['Practice with', 'real people'],
  tr: ['Gerçek insanlarla', 'pratik'],
  es: ['Practica con', 'gente real'],
  ru: ['Практика с', 'живыми людьми'],
  ar: ['تدرّب مع أشخاص', 'حقيقيين'],
  fr: ['Pratiquez avec', 'de vrais gens'],
  de: ['Üben mit', 'echten Menschen'],
  'pt-BR': ['Pratique com', 'gente real'],
}
export const SEARCH = {
  en: { lines: ['Call the people', 'you practice with'], pill: 'Call' },
  tr: { lines: ['Birlikte pratik', 'yaptığın kişileri ara'], pill: 'ara' },
  es: { lines: ['Llama a quien', 'practica contigo'], pill: 'Llama' },
  ru: { lines: ['Звони тем,', 'с кем практикуешься'], pill: 'Звони' },
  ar: { lines: ['اتصل بمن', 'تتدرّب معهم'], pill: 'اتصل' },
  fr: { lines: ['Appelez vos', 'partenaires de pratique'], pill: 'Appelez' },
  de: { lines: ['Ruf deine', 'Übungspartner an'], pill: 'Ruf' },
  'pt-BR': { lines: ['Ligue para quem', 'pratica com você'], pill: 'Ligue' },
}

/** The app's own strings for the surfaces that float off the phone. */
const KEYS = {
  decline: 'calls.decline',
  answer: 'calls.answer',
  correctionFrom: 'chat.correctionFrom',
}
const lookup = (catalogue, key) => key.split('.').reduce((node, part) => node?.[part], catalogue)

export async function appStrings(locale) {
  const messages = join(langx, 'apps', 'mobile', 'src', 'i18n', 'messages', `${locale}.ts`)
  if (!existsSync(messages)) throw new Error(`No ${messages}. Set LANGX_DIR to a langx/langx checkout.`)
  const mod = await import(url(messages))
  const catalogue = Object.values(mod).find((value) => value && typeof value === 'object')
  const strings = {}
  for (const [name, key] of Object.entries(KEYS)) {
    const value = lookup(catalogue, key)
    if (typeof value !== 'string') throw new Error(`${locale}: ${key} is missing from the app's catalogue`)
    strings[name] = value
  }
  strings.correctionFrom = strings.correctionFrom.replace('{name}', 'Lucía')
  // Language names the way the app shows them: CLDR's table for every locale but English.
  const { DISPLAY_NAMES } = await import(url(join(langx, 'apps', 'mobile', 'src', 'i18n', 'displayNameData.ts')))
  const table = DISPLAY_NAMES[locale]?.languages
  strings.spanish = table?.es ?? 'Spanish'
  strings.english = table?.en ?? 'English'
  return strings
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Wraps the pill word, once, where it stands as a whole word. */
function pillify(line, word) {
  const i = line.indexOf(word)
  if (i < 0) return esc(line)
  const before = line.slice(0, i)
  const after = line.slice(i + word.length)
  const edge = (c) => !c || /[\s,.!?]/.test(c)
  if (!edge(before.at(-1)) || !edge(after[0])) return esc(line)
  return `${esc(before)}<span class="pill">${esc(word)}</span>${esc(after)}`
}

let css
async function stylesheet() {
  css ??= (await readFile(join(here, 'covers.css'), 'utf8')).replaceAll('__FONTS__', ASSETS.fonts)
  return css
}

const arcs = () => `<svg class="arcs" viewBox="0 0 1024 1024">
<path class="k" d="M393.661 591.654A235.3 235.3 0 0 1 462.846 266.161A235.3 235.3 0 0 1 788.339 335.346L718.059 380.987A151.5 151.5 0 0 0 508.487 336.441A151.5 151.5 0 0 0 463.941 546.013Z"/>
<path class="w" d="M630.339 432.346A235.3 235.3 0 0 1 561.154 757.839A235.3 235.3 0 0 1 235.661 688.654L305.941 643.013A151.5 151.5 0 0 0 515.513 687.559A151.5 151.5 0 0 0 560.059 477.987Z"/></svg>`

const phone = (screen) => `<div class="phone"><div class="screen"><img src="${screen}"></div><img class="bezel" src="${ASSETS.iphone}"></div>`
const pixel = (screen) => `<div class="pixel"><div class="screen"><img src="${screen}"></div><img class="bezel" src="${ASSETS.pixel}"></div>`

const chip = ({ img, name, pair, pairMax = 9999 }) =>
  `<div class="card chip"><span class="who"><img src="${img}"><span class="dot"></span></span><span>${name ? `<div class="name"><bdi>${esc(name)}</bdi></div>` : ''}<div class="pair" data-fit="${pairMax}" data-min="12">${esc(pair)}</div></span></div>`

const correction = ({ label, note = true }) => `<div class="card correction">${label ? `<div class="label">${esc(label)}</div>` : ''}
<div class="old es">Ayer <s>voy</s> a la playa con mi hermana.</div>
<div class="new es">Ayer <b>fui</b> a la playa con mi hermana.</div>
${note ? '<div class="note es">«Ayer» pide el pasado: fui, no voy.</div>' : ''}</div>`

const controls = ({ decline, answer }) => `<div class="card controls">
<div class="btn"><span class="disc danger">&#61883;</span><span class="lbl">${esc(decline)}</span></div>
<div class="btn"><span class="disc success">&#61963;</span><span class="lbl">${esc(answer)}</span></div></div>`

/*
 * A headline is set at its design size and shrinks, two pixels at a time,
 * until its longest line fits the column: German and Russian run long, and a
 * third line would move the scene. The renderer waits for data-fitted.
 */
const fitScript = () => `<script>document.fonts.ready.then(() => {
  for (const el of document.querySelectorAll('[data-fit]')) {
    const max = +el.dataset.fit; const min = +(el.dataset.min || 48); const step = min < 20 ? 0.5 : 2;
    const t = el.querySelector('.t') || el;
    let s = parseFloat(getComputedStyle(el).fontSize);
    while (s > min && t.getBoundingClientRect().width > max) { s -= step; el.style.fontSize = s + 'px'; }
  }
  requestAnimationFrame(() => { document.documentElement.dataset.fitted = '1' });
});</script>`

const page = async ({ locale, width, height, style, body }) => `<!doctype html>
<html lang="${locale}" dir="${RTL.has(locale) ? 'rtl' : 'ltr'}"><head><meta charset="utf-8">
<style>${await stylesheet()}
html, body { width: ${width}px; height: ${height}px; }
${style}</style></head><body>${body}${fitScript()}</body></html>`

const pairFor = (locale, s) => (RTL.has(locale) ? `${s.spanish} ← ${s.english}` : `${s.spanish} → ${s.english}`)

/** Product page header, 1920 x 823 at 2x = 3840 x 1646. */
export async function headerHtml({ locale, subtitle, support, strings }) {
  const lines = HEADER[locale]
  if (lines.join(' ') !== subtitle) throw new Error(`${locale}: HEADER lines do not join to the store subtitle`)
  return page({
    locale, width: 1920, height: 823,
    style: `
/* Words: lockup, headline and support line inside the middle of the canvas, the part every device shows (iPad crops the top and bottom). */
.col { position: absolute; left: 308px; top: 152px; width: 900px; display: flex; flex-direction: column; align-items: flex-start; }
html[dir='rtl'] .col { left: auto; right: 308px; }
.col .lockup { position: static; height: 66px; }
h1 { font-size: 120px; margin-top: 44px; }
.sub { font-size: 36px; margin-top: 34px; max-width: 560px; }
html[lang='ar'] .sub { font-size: 33px; }
.arcs { left: 900px; top: -360px; width: 1540px; height: 1540px; transform: rotate(180deg); }
html[dir='rtl'] .arcs { left: auto; right: 900px; transform: rotate(180deg) scaleX(-1); }
/* The scene. The phone's right edge stops short of the canvas; the share button iPhone draws over the top-right corner (about x 1620-1790, y 190-350) stays clear. */
.plane { left: 1000px; top: 0; width: 900px; height: 823px; }
html[dir='rtl'] .plane { left: 20px; }
.phone { left: 230px; top: 70px; transform: rotateY(-16deg) rotateX(5deg) rotateZ(-6deg) scale(0.70); }
html[dir='rtl'] .phone { left: auto; right: 230px; transform: rotateY(16deg) rotateX(5deg) rotateZ(6deg) scale(0.70); }
.card.correction { left: -100px; top: 522px; width: 452px; padding: 24px 30px 20px; font-size: 22px; --d: 1.4; transform: translateZ(140px) rotateZ(-5deg); }
html[dir='rtl'] .card.correction { left: auto; right: -100px; transform: translateZ(140px) rotateZ(5deg); }
.correction .label { font-size: 15px; margin-bottom: 8px; }
.correction .note { margin-top: 12px; padding-top: 12px; font-size: 20px; }
.card.chip { right: 78px; top: 350px; padding: 9px 24px 9px 9px; gap: 13px; font-size: 21px; --d: 0.7; transform: translateZ(120px) rotateZ(-5deg); }
html[dir='rtl'] .card.chip { right: auto; left: 78px; padding: 9px 9px 9px 24px; transform: translateZ(120px) rotateZ(5deg); }
.chip .who { width: 56px; height: 56px; }
.chip .pair { font-size: 17px; margin-top: 2px; }`,
    body: `<div class="ground"></div>${arcs()}
<div class="stage"><div class="plane">${phone(ASSETS.screen(locale, 'calls'))}
${chip({ img: ASSETS.javier, name: 'Javier R.', pair: pairFor(locale, strings), pairMax: 200 })}
${correction({ label: strings.correctionFrom })}</div></div>
<div class="col"><img class="lockup" src="${ASSETS.lockup}" alt="LangX"><h1 data-fit="880"><span class="t">${lines.map(esc).join('<br>')}</span></h1><p class="sub">${esc(support)}</p></div>`,
  })
}

/** Search results card, 1920 x 1280 at 2x = 3840 x 2560. */
export async function searchHtml({ locale, strings }) {
  const { lines, pill } = SEARCH[locale]
  return page({
    locale, width: 1920, height: 1280,
    style: `
.lockup { left: 50%; top: 96px; height: 84px; transform: translateX(-50%); }
h1 { position: absolute; left: 0; right: 0; top: 226px; text-align: center; font-size: 160px; line-height: 1.04; }
html[lang='ar'] h1 { line-height: 1.12; top: 200px; }
.arcs { left: -300px; top: 420px; width: 1500px; height: 1500px; transform: rotate(160deg); }
html[dir='rtl'] .arcs { left: auto; right: -300px; transform: rotate(160deg) scaleX(-1); }
.plane { left: 0; top: 0; width: 1920px; height: 1280px; }
html[dir='rtl'] .plane { top: 70px; }
.phone { left: 717px; top: 560px; transform: rotateY(-14deg) rotateX(5deg) rotateZ(-5deg) scale(0.88); }
html[dir='rtl'] .phone { left: auto; right: 717px; transform: rotateY(14deg) rotateX(5deg) rotateZ(5deg) scale(0.88); }
.card.correction { left: 290px; top: 905px; width: 560px; padding: 32px 38px 28px; font-size: 29px; --d: 1.4; transform: translateZ(160px) rotateZ(-4deg); }
html[dir='rtl'] .card.correction { left: auto; right: 290px; transform: translateZ(160px) rotateZ(4deg); }
.correction .label { font-size: 19px; margin-bottom: 10px; }
.correction .note { margin-top: 14px; padding-top: 14px; font-size: 26px; }
.card.controls { left: 1250px; top: 700px; padding: 34px 54px; gap: 64px; font-size: 26px; --d: 1; transform: translateZ(200px) rotateZ(-4deg); }
html[dir='rtl'] .card.controls { left: auto; right: 1250px; transform: translateZ(200px) rotateZ(4deg); }
.controls .disc { width: 128px; height: 128px; font-size: 56px; }`,
    body: `<div class="ground"></div>${arcs()}
<img class="lockup" src="${ASSETS.lockup}" alt="LangX">
<h1 data-fit="1700"><span class="t">${lines.map((l) => pillify(l, pill)).join('<br>')}</span></h1>
<div class="stage"><div class="plane">${phone(ASSETS.screen(locale, 'calls'))}
${correction({ label: strings.correctionFrom })}
${controls(strings)}</div></div>`,
  })
}

/**
 * Play's feature graphic, 1024 x 500, drawn at 2x and scaled down. No words
 * but the lockup: on a desktop Play lays the title, rating and Install button
 * over the left ~45% behind a dark gradient, and on a phone the promo video's
 * play button sits over the centre, so everything lives right of centre,
 * inside a 10% margin, and the one file serves every listing.
 */
export async function playHtml() {
  return page({
    locale: 'en', width: 1024, height: 500,
    style: `
.lockup { left: 560px; top: 58px; height: 42px; }
.arcs { left: 80px; top: -420px; width: 1200px; height: 1200px; transform: rotate(180deg); }
.stage { perspective: 1300px; perspective-origin: 80% 40%; }
.plane { left: 0; top: 0; width: 1024px; height: 500px; }
.pixel { left: 106px; top: -1236px; transform: rotateY(-14deg) rotateX(5deg) rotateZ(-5deg) scale(0.132); }
.card { --s: 0.5; box-shadow: calc(8px * var(--d)) calc(13px * var(--d)) calc(26px * var(--d)) rgba(var(--warm), 0.26), 1px 2px 5px rgba(var(--warm), 0.12), 0 1px 0 rgba(255, 255, 255, 0.7) inset; }
.card.correction { left: 584px; top: 252px; width: 250px; padding: 12px 15px 11px; font-size: 12.5px; border-radius: 16px; --d: 1.4; transform: translateZ(70px) rotateZ(-5deg); }
.card.chip { left: 598px; top: 150px; padding: 6px 16px 6px 6px; gap: 9px; font-size: 13px; --d: 0.7; transform: translateZ(90px) rotateZ(-5deg); }
.chip .who { width: 36px; height: 36px; }
.chip .pair { font-size: 12px; }`,
    body: `<div class="ground"></div>${arcs()}
<img class="lockup" src="${ASSETS.lockup}" alt="LangX">
<div class="stage"><div class="plane">${pixel(ASSETS.screen('en', 'calls'))}
${chip({ img: ASSETS.lucia, pair: 'ES → EN' })}
${correction({ label: null, note: false })}</div></div>`,
  })
}

let browser
async function getBrowser() {
  browser ??= await chromium.launch()
  return browser
}
export async function closeBrowser() {
  await browser?.close()
  browser = undefined
}

/**
 * Photographs one page: writes the HTML beside its output so a render can be
 * opened and inspected, screenshots it at `scale`, then strips the alpha
 * channel with ffmpeg - the stores refuse PNGs that carry one - and, when
 * `size` is given, scales to it (Play is drawn at 2x for its small type).
 */
export async function renderCover({ html, width, height, scale = 2, out, size }) {
  await mkdir(dirname(out), { recursive: true })
  const file = out.replace(/\.png$/, '.html')
  await writeFile(file, html)
  const ctx = await (await getBrowser()).newContext({ viewport: { width, height }, deviceScaleFactor: scale })
  const page = await ctx.newPage()
  await page.goto(url(file), { waitUntil: 'load' })
  await page.waitForFunction(() => document.documentElement.dataset.fitted === '1')
  await page.waitForTimeout(100)
  const rgba = out.replace(/\.png$/, '.rgba.png')
  await page.screenshot({ path: rgba, clip: { x: 0, y: 0, width, height }, type: 'png' })
  await ctx.close()
  const filters = size ? ['-vf', `scale=${size.width}:${size.height}:flags=lanczos`] : []
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', rgba, ...filters, '-pix_fmt', 'rgb24', out])
  await rm(rgba, { force: true })
  await rm(file, { force: true })
  return out
}

/** A store-size preview beside a render, for looking at what a person will actually see. */
export async function preview(file, width, out) {
  await mkdir(dirname(out), { recursive: true })
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', file, '-vf', `scale=${width}:-1`, out])
  return out
}
