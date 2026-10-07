/**
 * Renders the four 2.9 screens in screens.html, once per locale, at 3x:
 * 1170 x 2532, the size of every other render in ../../marketing/2.x/screens.
 *
 * The words come from the app. Every string a person reads on these screens is
 * read here out of `apps/mobile/src/i18n/messages/<locale>.ts` in a langx/langx
 * checkout — the sibling `../../../langx` by default, or LANGX_DIR — so a
 * Turkish shot shows the Turkish the app ships, not a translation made for the
 * picture. A key the checkout does not have stops the run: that checkout is
 * older than the screens, and a fallback would put English into a Turkish shot.
 *
 *   npm install && npx playwright-core install chromium-headless-shell
 *   node screens/render.mjs            # then: npm run all
 *
 * Output: ../../marketing/2.x/screens/<locale>/<screen>.png.
 */
import { mkdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'

const here = dirname(fileURLToPath(import.meta.url))
const langx = resolve(process.env.LANGX_DIR ?? join(here, '..', '..', '..', 'langx'))
const messages = join(langx, 'apps', 'mobile', 'src', 'i18n', 'messages')
const out = join(here, '..', '..', 'marketing', '2.x', 'screens')
const { default: config } = await import('../goldie.config.ts')

const SCREENS = ['calls', 'calls-chat', 'camera', 'camera-chat', 'chat-correction']
const RTL = new Set(['ar'])

/** The name screens.html uses for each string, and the app key it comes from. */
const KEYS = {
  online: 'presence.online',
  today: 'day.today',
  read: 'messageMeta.read',
  writeMessage: 'chat.writeMessage',
  composerCorrect: 'tips.composerCorrect',
  tokensPerMessage: 'chat.tokensPerMessage',
  incomingVideo: 'calls.incomingVideo',
  decline: 'calls.decline',
  answer: 'calls.answer',
  answerNoCamera: 'calls.answerNoCamera',
  rowIncomingVideo: 'calls.row.incomingVideo',
  callBack: 'calls.callBack',
  correctionFrom: 'chat.correctionFrom',
  photo: 'viewOnce.photo',
  opened: 'viewOnce.opened',
  tapToView: 'viewOnce.tapToView',
  modeOnce: 'viewOnce.modeOnce',
  modeReplay: 'viewOnce.modeReplay',
  modeKeep: 'viewOnce.modeKeep',
}

/*
 * The composer's "+1 token / message" is TOKEN_RULES.award.message. It is read
 * from the shared package's source rather than imported, because that module
 * imports the rest of the package and none of it resolves from here; the
 * number is config there and must not be written down a second time here.
 */
const tokenSource = await readFile(join(langx, 'packages', 'shared', 'src', 'token.ts'), 'utf8')
const award = /award:\s*{[^}]*?\bmessage:\s*(\d+)/s.exec(tokenSource.slice(tokenSource.indexOf('TOKEN_RULES')))
if (!award) throw new Error('TOKEN_RULES.award.message not found in packages/shared/src/token.ts')
const perMessage = Number(award[1])

const lookup = (catalogue, key) => key.split('.').reduce((node, part) => node?.[part], catalogue)

async function stringsFor(locale) {
  const file = join(messages, `${locale}.ts`)
  if (!existsSync(file)) throw new Error(`No ${file}. Set LANGX_DIR to a langx/langx checkout.`)
  const mod = await import(pathToFileURL(file).href)
  const catalogue = Object.values(mod).find((value) => value && typeof value === 'object')
  const strings = {}
  for (const [name, key] of Object.entries(KEYS)) {
    let value = lookup(catalogue, key)
    if (value && typeof value === 'object') {
      // A plural entry: the category is the locale's own, as the app's is.
      const category = new Intl.PluralRules(locale).select(perMessage)
      value = (value[category] ?? value.other).replace('{count}', String(perMessage))
    }
    if (typeof value !== 'string') {
      throw new Error(`${locale}: no "${key}" in ${file} — is that checkout older than 2.9?`)
    }
    strings[name] = value
  }
  return strings
}

const photo = await readFile(join(here, 'photo.svg'), 'utf8')
const page = pathToFileURL(join(here, 'screens.html')).href
const avatar = pathToFileURL(join(here, 'lucia.webp')).href

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 3,
})
for (const locale of config.locales) {
  const s = await stringsFor(locale)
  await mkdir(join(out, locale), { recursive: true })
  for (const screen of SCREENS) {
    const tab = await context.newPage()
    await tab.addInitScript(
      ([shot, svg]) => {
        window.SHOT = shot
        window.PHOTO = svg
      },
      [{ screen, dir: RTL.has(locale) ? 'rtl' : 'ltr', s, avatar }, photo],
    )
    await tab.goto(page)
    await tab.evaluate(async () => {
      await document.fonts.ready
      await Promise.all([...document.images].map((img) => img.decode()))
    })
    const file = join(out, locale, `${screen}.png`)
    await tab.screenshot({ path: file, omitBackground: false })
    await tab.close()
    console.log(`  ${locale}/${screen}.png`)
  }
}
await browser.close()
