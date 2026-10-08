/**
 * Play's feature graphic, one file for every listing: 1024 x 500, opaque RGB,
 * no words but the lockup. covers/covers.mjs says why and draws it; this runs
 * it. A phone-size preview lands in out/covers/play.png.
 *
 *   node play-feature.mjs   ->  ../2.x/android-feature-graphic.png
 */
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { closeBrowser, playHtml, preview, renderCover } from './covers/covers.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const out = join(here, '..', '2.x', 'android-feature-graphic.png')
await renderCover({ html: await playHtml(), width: 1024, height: 500, scale: 2, size: { width: 1024, height: 500 }, out })
await preview(out, 412, join(here, 'out', 'covers', 'play.png'))
await closeBrowser()
console.log(`1024x500 -> ${out}`)
