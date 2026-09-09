repo: langx/branding
branch: main
path: design/print
secondary: jukeboxprint.com (the three products these files are cut and printed as); langx/langx (apps/mobile — the two screens on the postcard are renders of it, by way of marketing/2.x/screens/)

## Last sync
date: 2026-09-09
### Updated in this project
- Exported the three pieces from their Claude Design projects (Share → Export → Project HTML → Project archive) and merged them into one folder.
- `support.js`, `ds-base.js` and the whole `_ds/` tree are byte-identical in all three bundles, so one copy of each is kept. No `.dc.html` needed editing — every path in them is flat and relative.
- The three projects hold no `HANDOFF.md` and no `github.md`. Those two are written by the *handoff* export, which was not the export used, so this file is written from the bundles themselves rather than merged from theirs.

## Print map
Every size below is read out of the file's own `@page` rule and its printed note,
not assumed. Bleed is 0.125 in on every edge of every page.

### `Sticker.dc.html` — Jukebox 3" × 3" die cut, Super Matte
| Page | Face | What is on it |
| --- | --- | --- |
| 1 of 1 — 3.25 × 3.25 in | die-cut sticker | Yellow ground bled to the page edge; cut line follows the shape at 3 × 3 in. Mark sits at 0.78 of the cut, clearing Jukebox's 0.125" safety and the brand's 0.24·H clear space. |

Props: `content` — `qr` (default) or `mark`; `shape` — `square` (rounded square, the app icon's corner; default) or `circle`; `showGuides` — `false` (default), red = cut line, blue = safety.
Assets: `assets/logo/mark-arcs.svg`, `assets/qr/get-langx-io.svg`.
Follows: [`brand/print.md`](../../brand/print.md) → *The pieces* → **Sticker**, and *Grounds the mark may sit on*.

### `Postcard.dc.html` — Jukebox Classic 4" × 6", landscape
| Page | Face | What is on it |
| --- | --- | --- |
| 1 of 2 — 6.25 × 4.25 in | front, coated | Yellow field. Headline "Help someone speak yours." / "They'll do the same.", lockup bottom-left, Discover screen cut to a card on the right. |
| 2 of 2 — 6.25 × 4.25 in | back, uncoated, writable | Light ground, kept mostly white so a pen works; no solid ink fields. "Swap languages?" plus the standing copy, QR to get.langx.io, Feed screen on the right. |

Assets: `assets/logo/mark-arcs.svg`, `assets/qr/get-langx-io.svg`, `assets/screens/discover.png`, `assets/screens/feed.png`.
Follows: [`brand/print.md`](../../brand/print.md) → *The pieces* → **Flyer** (one yellow field, no card layer, one committing thing to do), and *Ink*.

### `BusinessCardOptions.dc.html` — Jukebox Standard 3.5" × 2", Soft Touch
| Page | Face | What is on it |
| --- | --- | --- |
| 1 of 2 — 3.75 × 2.25 in | front | Yellow. Headline "Help someone speak yours.", `LangX` and `hi@langx.io` on the bottom line. |
| 2 of 2 — 3.75 × 2.25 in | back | Ink. "They'll do the same.", QR to get.langx.io, `langx.io` beneath it. |

Assets: `assets/qr/get-langx-io.svg`.
Follows: [`brand/print.md`](../../brand/print.md) → *The pieces* → **Business card** — yellow once, so the mark side is yellow and the type side is ink.

## Where the artwork came from
| In `assets/` | In this repo | Relationship |
| --- | --- | --- |
| `logo/mark-arcs.svg` | [`brand/logo/mark-arcs.svg`](../../brand/logo/mark-arcs.svg) | Same artwork — the two `<path d="…">` values are identical. The copy adds a C2PA provenance manifest and self-closes its tags, so the bytes differ. |
| `screens/discover.png`, `screens/feed.png` | [`marketing/2.x/screens/`](../../marketing/2.x/screens/) | Pixel-identical: same `IHDR`, and every `IDAT` chunk matches byte for byte. The copies carry one extra 5758-byte `caBX` (C2PA) chunk. |
| `qr/get-langx-io.svg` | — | Generated for these pieces; encodes `https://get.langx.io`. No counterpart in `brand/`. |

`brand/` is the source. These are copies, and the three prototypes resolve them
from exactly these paths.

## Notes for whoever prints these
- Export each file to PDF with guides off. `showGuides` defaults to `false`, so
  the files are export-ready as committed.
- The yellow is `#ffc409`. [`brand/print.md`](../../brand/print.md) says to match
  it to a physical chip and print it as a spot colour rather than trusting the
  unproofed CMYK build (0 · 23 · 96 · 0), and to write the corrected build back
  into that file once a job comes back right.
- On the sticker, Jukebox draws the die from the artwork's outer shape, so the
  cut shape goes in Special Instructions.
