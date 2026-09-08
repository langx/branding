# brand

The current identity as files. If you are making something — a card, a sticker,
a flyer, a slide, a page — everything you need is in this folder, and you should
not have to look anywhere else in the repo.

Read [`../BRAND.md`](../BRAND.md) first: it is the identity written down, and it
explains *why* each of these files is the shape it is. This README only says
what is where.

## Start here

| You want | Open |
| -------- | ---- |
| The colours, in a machine-readable form | [`tokens.json`](tokens.json) · [`tokens.css`](tokens.css) |
| The colours, explained | [`../BRAND.md`](../BRAND.md#colour) |
| A logo to place | [`logo/`](logo/) — take the SVG |
| Anything that will be printed | [`print.md`](print.md) |
| The app's screens, to show the product | [`../marketing/2.x/screens/`](../marketing/2.x/screens/) |
| Every screen of the app, clickable | [`../design/mobile-app/`](../design/mobile-app/) |

## `logo/`

Vector first. The SVGs are drawn from the construction in `BRAND.md` — not
traced — so they are exact at any size, and both lockups have the wordmark
outlined so nothing depends on having Nunito installed.

| File | What |
| ---- | ---- |
| `mark.svg` | the mark on brand yellow, 1024², with its drop shadow — the default |
| `mark-ink.svg` | the same on ink `#121318`, matching the app's dark alternate icon |
| `mark-arcs.svg` | the two arcs alone, transparent, for placing on an approved ground |
| `mark-mono.svg` | one colour, drawn in `currentColor` — foil, emboss, engrave, single-screen print |
| `lockup-horizontal.svg` | mark + "LangX", ink wordmark, 3190 × 1024 |
| `lockup-horizontal-dark.svg` | the same with a `#f2f3f5` wordmark, for dark grounds |
| `lockup-horizontal.png`, `-dark.png` | the raster originals, same artwork, for screens |
| `logo-rounded.png` | the rounded mark, 512² — avatars, in-app, README marks |
| `build.py` | the script that draws the SVGs, and checks them |

`build.py` is worth knowing about: it carries the geometry as numbers, and it
verifies its own output — it recovers each arc command's centre back out of the
path with the SVG spec's arc parameterisation, and refuses to write a file whose
curves do not describe the intended circle. Re-run it if the mark is ever
retuned. It needs `fonttools` and a Nunito ExtraBold TTF:

```
FONT=/path/to/Nunito_800ExtraBold.ttf OUT=brand/logo python3 brand/logo/build.py
```

The app already carries that font at `apps/api/assets/fonts/` in
[`langx/langx`](https://github.com/langx/langx); Nunito is
[SIL Open Font Licensed](https://fonts.google.com/specimen/Nunito) and free to
use in artwork. It is not vendored here, because the licence has to travel with
the font and this repo has no copy of the OFL text.

## `icon/`, `splash/`, `favicon/`, `animated/`

| Folder | What |
| ------ | ---- |
| `icon/` | the five 1024² home-screen icons: `default` and the four Pro alternates |
| `splash/` | the two 512² launch badges, light and dark — discs on a transparent surround |
| `favicon/` | the web set: `.ico`, the PNG sizes, `site.webmanifest`, `browserconfig.xml`, and the mono `safari-pinned-tab.svg` |
| `animated/` | the mark animated, GIF and MP4 |

`icon/` and `splash/` are byte-identical to what the app ships, copied by hand
out of `apps/mobile/assets/` in [`langx/langx`](https://github.com/langx/langx).
`app.config.ts` there is what decides which file is the icon, which are the Pro
alternates and which two are the splash badges. When the artwork there changes,
copy it here; nothing checks that anyone did.

The favicons were exported for v1's web build and are still correct, because the
mark did not change between v1 and v3. Only the type and the UI around it did.

## What this folder is not

Not the source of truth. Every value in `tokens.json`, `tokens.css` and
`BRAND.md` is copied by hand from `apps/mobile/src/lib/theme/tokens.ts` in the
app, and that file is where colour is decided. Change it and everything here is
wrong until someone edits it too — silently, with nothing to catch it.
