# design

Design files — the mockups a screen was drawn in, before anyone built it.

Everything else in this repo is finished artwork. This folder is the step
before that, and it is the one place with markup in it: the prototypes are
HTML/CSS/JS because that is the medium they were drawn in, not because
anything here ships. **[`BRAND.md`](../BRAND.md) is still the identity** — a
prototype is a drawing of one, and where the two disagree, `BRAND.md` wins.

| Path                | What                                                        |
| ------------------- | ----------------------------------------------------------- |
| `mobile-app/`       | every screen of the 2.x Expo app, drawn in the v3 language   |
| `print/`            | the sticker, the postcard and the business card, as print files |

## `mobile-app/`

A handoff bundle exported from [Claude Design](https://claude.ai/design) on
2026-09-06, covering all 64 routes under `apps/mobile/app` in
[`langx/langx`](https://github.com/langx/langx). Updated 2026-09-10 with a
Discover redesign: a horizontally-scrolling "Boosted profiles" row above the
list, shown on the For You sort when there's no search query.

- **`LangX App.dc.html`** — the interactive prototype. Every route, light /
  dark / auto, with enough state simulated to walk a flow end to end.
- **`LangX Screens.dc.html`** — the same screens as a board, grouped by route
  group, each one live. This is the overview; open it first.
- **`github.md`** — the screen map: prototype route → the `.tsx` files it
  stands for. Also records where the visual language came from — `DESIGN.md`
  in `langx/website` and `apps/mobile/src/lib/theme/tokens.ts` — and that the
  copy is `src/i18n/messages/en.ts`.
- **`HANDOFF.md`** — the export's own note to whoever implements it.
- **`support.js`** — the Claude Design runtime the two `.dc.html` files need.
  Generated; do not edit.
- **`assets/`** — the prototype's own copies of four files from this repo, at
  the paths it resolves them from. They were taken before the repo was
  reorganised, so the names inside are the old ones: `assets/rounded/logo.png`
  is now [`../brand/logo/logo-rounded.png`](../brand/logo/logo-rounded.png)
  and `assets/icon/` is now [`../brand/favicon/`](../brand/favicon/).
  Byte-identical to the originals except the pinned-tab SVG, which is the same
  artwork with its whitespace stripped. `brand/` is the source; these are
  copies, and the prototype needs them at these paths to render.
- **`_ds/`** — two stock design systems (Modernist, Organic) that Claude
  Design ships with every export. Neither is ours — one is red Archivo, the
  other tan Caprasimo — and neither prototype links them. Kept so the bundle
  still opens in the tool it came from; ignore them otherwise.

Open either `.dc.html` in a browser straight from disk. Nothing to build, no
server. The prototypes pull Nunito from Google Fonts, so the type falls back
to the system stack offline.

## `print/`

Three pieces exported from [Claude Design](https://claude.ai/design) on
2026-09-09, each drawn against a specific product at
[Jukebox Print](https://www.jukeboxprint.com). **[`brand/print.md`](../brand/print.md)
is the print spec these drawings follow** — ink builds, clear space, minimum
sizes, and what a card and a sticker are — and above it,
[`BRAND.md`](../BRAND.md) is still the identity. Where a drawing and either
file disagree, the written one wins.

- **`Sticker.dc.html`** — a 3" × 3" die cut on Super Matte, one 3.25 × 3.25 in
  page. Rounded square (the app icon's own corner) or circle, carrying the QR
  or the bare mark; guides off by default, so it exports as-is.
- **`Postcard.dc.html`** — Jukebox Classic 4" × 6" landscape, two pages at
  6.25 × 4.25 in. Yellow coated front with the headline and the Discover
  screen; uncoated back kept mostly white so a pen works on it.
- **`BusinessCardOptions.dc.html`** — Standard 3.5" × 2" Soft Touch, two pages
  at 3.75 × 2.25 in. Yellow headline front, ink back with the QR — yellow
  once, as `brand/print.md` asks.
- **`github.md`** — the print map: every page, its trim and what is on it, plus
  which section of `brand/print.md` each piece answers to and where each file
  in `assets/` came from.
- **`support.js`** — the Claude Design runtime all three need. Generated; do
  not edit. Byte-identical in all three bundles, and byte-identical to
  [`../mobile-app/support.js`](mobile-app/support.js), so one copy is kept.
- **`ds-base.js`** — six lines that link `_ds/` into the page. Generated too.
- **`assets/`** — the prototypes' own copies, at the paths they resolve them
  from. `logo/mark-arcs.svg` is [`../brand/logo/mark-arcs.svg`](../brand/logo/mark-arcs.svg)
  — the same artwork, both `<path d="…">` values identical — re-serialised with
  a C2PA provenance manifest, so it is *not* byte-identical.
  `screens/discover.png` and `screens/feed.png` are pixel-identical to the two
  of the same name in [`../marketing/2.x/screens/`](../marketing/2.x/screens/):
  same header, every image chunk matching byte for byte, plus one extra
  5758-byte C2PA chunk. `qr/get-langx-io.svg` encodes `https://get.langx.io`
  and has no counterpart in `brand/`. `brand/` is the source; these are copies.
- **`_ds/`** — one design system, `langx-design-system-…`, and unlike the two
  in `mobile-app/` **this one is ours and the pages actually load it**:
  `ds-base.js` pulls its five token stylesheets, `styles.css` and
  `_ds_bundle.js` on every open. Its own readme records that it was built by
  reading this repo — `BRAND.md`, `brand/tokens.css`, `brand/tokens.json`,
  `brand/print.md` — and all six ink colours in `brand/print.md` appear in its
  `tokens/colors.css` unchanged. It is a drawing of the identity like
  everything else here, not a second source of it. Identical in all three
  bundles, so one copy is kept.

Open any of the three in a browser straight from disk; nothing to build. Two
things are missing on purpose. There is no `HANDOFF.md`: that file and a
per-bundle `github.md` are written by Claude Design's *handoff* export, and
these three came out through the project-archive export instead, which does not
write them — so `github.md` here is written from the bundles rather than merged
from theirs. And there is no `.thumbnail`: each bundle carries its own, one
folder can hold one, and it is only a preview for the tool's gallery.

