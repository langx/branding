/**
 * The App Store's two creative assets, one pair per locale. They are new with
 * iOS 27 and neither is a screenshot: the product page header is a 21:9
 * banner across the top of the listing, and the search result asset is a 3:2
 * card in search. Apple wants them to carry the app's value and brand rather
 * than its interface; covers/covers.mjs is the picture, this file only runs it.
 *
 * | File                 | Size        | Slot                           |
 * | -------------------- | ----------- | ------------------------------ |
 * | creative/header.png  | 3840 x 1646 | PRODUCT_PAGE_HEADER_ASSET      |
 * | creative/search.png  | 3840 x 2560 | APP_STORE_SEARCH_RESULTS_ASSET |
 *
 * Both are opaque RGB. Store-size previews (an iPhone's width for the header,
 * the card as search shows it) land in out/covers/<locale>/ for looking at.
 *
 *   LANGX_DIR=/path/to/langx node creative.mjs [locale ...]
 */
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { appStrings, closeBrowser, headerHtml, preview, renderCover, searchHtml } from './covers/covers.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const { default: config } = await import('./goldie.config.ts')
const locales = process.argv.slice(2).length ? process.argv.slice(2) : config.locales

for (const locale of locales) {
  const strings = await appStrings(locale)
  const dir = join(here, '..', '2.x', locale, 'ios', 'creative')
  const previews = join(here, 'out', 'covers', locale)
  const header = await renderCover({
    html: await headerHtml({ locale, subtitle: config.store.subtitle[locale], support: config.store.description[locale], strings }),
    width: 1920, height: 823, out: join(dir, 'header.png'),
  })
  const search = await renderCover({ html: await searchHtml({ locale, strings }), width: 1920, height: 1280, out: join(dir, 'search.png') })
  await preview(header, 1179, join(previews, 'header.png'))
  await preview(search, 1080, join(previews, 'search.png'))
  console.log(`  ${locale}  header 3840x1646  search 3840x2560`)
}
await closeBrowser()
