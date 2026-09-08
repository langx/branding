# Print

What a business card, a sticker or a flyer needs that a screen never asks for:
a vector file, an ink build, a clear-space rule and a size below which the mark
stops working.

[`../BRAND.md`](../BRAND.md) decides the identity. This file only carries it
onto paper. Where something here is a print convention rather than a brand rule
it says so — those are conventions to argue with, not law.

## Hand the printer vector

| Want | File |
| ---- | ---- |
| The mark on its yellow | [`logo/mark.svg`](logo/mark.svg) |
| The mark on ink | [`logo/mark-ink.svg`](logo/mark-ink.svg) |
| The arcs alone, to place on an approved ground | [`logo/mark-arcs.svg`](logo/mark-arcs.svg) |
| One colour — foil, emboss, engrave, single-screen | [`logo/mark-mono.svg`](logo/mark-mono.svg) |
| Name and mark together | [`logo/lockup-horizontal.svg`](logo/lockup-horizontal.svg), `-dark` on a dark ground |

The wordmark in both lockups is outlined, so nothing depends on the printer
having Nunito. The PNGs beside them are the same artwork and are for screens;
sending a PNG to a press is how a mark ends up with soft edges.

## Ink

These CMYK builds are straight arithmetic from the sRGB hex — **no profile, no
proof**. Treat them as the starting point you take to the printer, get a proof
of, and correct. When a job comes back right, write the corrected build in here
so the next one starts from it.

| Colour | Hex | CMYK, unproofed | Where it goes |
| ------ | --- | --------------- | ------------- |
| Brand yellow | `#ffc409` | 0 · 23 · 96 · 0 | the ground the mark carries; one field per piece |
| Ink | `#17191c` | 18 · 11 · 0 · 89 | type, and the dark ground |
| Blue | `#3b6cf6` | 76 · 56 · 0 · 4 | anything that would be a link or a control |
| Green | `#009f70` | 100 · 0 · 30 · 38 | corrections, and only corrections |
| Pro violet | `#7a5af8` | 51 · 64 · 0 · 3 | Pro |
| Red | `#e5484d` | 0 · 69 · 66 · 10 | rarely; it means something is wrong |

Two things worth saying to the printer directly:

- **The yellow is the brand.** It is a saturated orange-yellow and it is the
  one colour a person recognises across a room. If a run comes back muddy or
  green-shifted, it is wrong even if the numbers were followed. On a job where
  it matters — a card, a run of stickers — match it to a physical guide and
  print it as a spot colour rather than a build. Screen-derived guesses at a
  Pantone neighbour are not good enough to order from; hold a chip against a
  print of `logo/mark.svg` and write the number that actually matches into this
  table.
- **Ink at 100K goes flat in a large field.** For type, plain 100K. For a card
  backed entirely in ink, ask for a rich black — the recipe depends on the
  press, so let them give you theirs rather than sending one.

Everything else is on screen in [`tokens.json`](tokens.json) and
[`tokens.css`](tokens.css).

## Clear space

Keep **0.24 × the mark's height** clear on every side. Nothing in it: no type,
no rule, no fold, no trim edge. The number is not invented for print — it is the
gap the lockup already puts between the mark and the wordmark, so a piece using
it stays in step with the logo's own spacing.

## How small it can go

The narrowest things in the mark are the ring (0.082 × height) and the gap
between the two arcs (0.100 × height). Below roughly 0.5 mm either one starts to
close up, and the mark reads as a blob.

| Mark height | Ring | Gap between arcs | |
| ----------- | ---- | ---------------- | --- |
| 30 mm | 2.46 mm | 3.01 mm | comfortable |
| 12 mm | 0.98 mm | 1.20 mm | comfortable |
| 10 mm | 0.82 mm | 1.00 mm | floor for one-colour and screen print |
| 8 mm | 0.65 mm | 0.80 mm | floor for offset and digital |
| 5 mm | 0.41 mm | 0.50 mm | too small — use the mark alone, never the lockup |

So: **mark no smaller than 8 mm**, **lockup no smaller than 12 mm tall**, and on
screen 16 px and 24 px respectively. Print convention, from the measurements
above — a printer who knows their press may hold finer.

## Grounds the mark may sit on

The mark carries its own ground and its own drop shadow. Do not give it another
one.

- **Yellow** `#ffc409` — the default, `logo/mark.svg`.
- **Ink** `#121318` — `logo/mark-ink.svg`. Note the shadow on the ink version
  stays yellow (`#deab06`), matching the icon the app ships. That is what is on
  disk; it is not the "ground's own shade" the rest of the set uses.
- **Pro violet** `#7a5af8` — only where the piece is about Pro.

On white, or on a photograph, place the mark *with* its ground — the yellow
square or the rounded one — rather than dropping the bare arcs onto it. The
white arc disappears on white and the black one disappears on ink; the pair only
works because it brings its own field.

The one-colour file is for processes that cannot print two: foil, blind emboss,
engraving, a single-screen print on fabric. Anywhere two colours are available,
use the pair.

## The pieces

Sizes below are the common ones, not brand rules. Bleed 3 mm on everything, and
keep type 4 mm in from the trim.

**Business card — 85 × 55 mm.** One side yellow with the mark, the other ink or
white with the details in Nunito ExtraBold for the name and the platform stack
for the rest. Yellow once: if the mark side is yellow, the type side is not.
90 × 50 mm is the other size Turkish printers quote by default and the layout
survives it; 3.5 × 2 in for anything printed in the US.

**Sticker.** Die-cut the yellow square with the mark's own corner, or a circle
with the mark centred and 0.24 clear all round. Smallest useful is about 25 mm —
at that size the mark is roughly 20 mm and well clear of the floor above. Ask
for a cut line as a separate spot colour named `CutContour`.

**Flyer — A5 or A6.** The screen rules do carry here: one yellow field, no card
layer, structure from dividers and whitespace, and a single committing thing to
do. Screens to show are in [`../marketing/2.x/screens/`](../marketing/2.x/screens/).

## What must not happen

The first four are [`../BRAND.md`](../BRAND.md)'s, and they hold in print exactly as they hold on
a screen:

- Do not recolour the arcs. Black and white, on all grounds.
- Do not put the mark on a coloured ground of its own — it carries one.
- Do not use the v1 lockup (Comfortaa, in
  [`../archive/assets/logo-horizontal.png`](../archive/assets/logo-horizontal.png)).
  It is archive.
- No coin, chain or wallet iconography for tokens, and no wallet addresses.
  LangX tokens are not on a blockchain, and artwork implying otherwise is a
  claim the product does not make — it is an App Review question, not taste.

And from the geometry: do not stretch, rotate or re-space the lockup. The arcs
are cut on one shared line, which is the whole reason the pair reads as an S; a
non-uniform scale breaks that and nothing else in the mark survives it either.
