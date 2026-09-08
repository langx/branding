# branding

Logos, app icons, store artwork, press images and the brand animation for
[LangX](https://langx.io). No code, and nothing here is built — it is the folder
every other repo and every store listing takes its artwork from.

**Making something? Go to [`brand/`](brand/).** Everything current is in that one
folder — the logos as vector, the palette as JSON and CSS, the icons, and
[`brand/print.md`](brand/print.md) for anything that ends up on paper.

**Want to know why it looks like this?** [`BRAND.md`](BRAND.md) is the identity
written down: the mark and its construction, the palette in both colour schemes,
the type, and the two iconography rules that are App Review questions rather
than taste.

## The current identity

The app has been rebuilt. The 2.x line is Expo + Fastify
([`langx/langx`](https://github.com/langx/langx)) and it carries the **v3
identity** — Nunito, one blue for everything interactive, yellow exactly once
per screen, no card layer.

| Path | What |
| ---- | ---- |
| [`BRAND.md`](BRAND.md) | the v3 identity, written down |
| [`brand/`](brand/) | the identity as files — logos, icons, tokens, print guide |
| [`brand/logo/`](brand/logo/) | the mark and the lockup, **as SVG**, plus the rasters |
| [`brand/tokens.json`](brand/tokens.json), [`brand/tokens.css`](brand/tokens.css) | the palette, type and spacing, machine-readable |
| [`brand/print.md`](brand/print.md) | ink builds, clear space, minimum sizes, cards and stickers |
| [`design/`](design/) | the mockups — every screen of the app as a clickable prototype |
| [`2.x/`](2.x/) | store artwork — eight shots in eight languages, at every size both stores take an upload for |
| [`marketing/2.x/`](marketing/2.x/) | app screens, social posts and the preview video |
| [`archive/`](archive/) | v1. Kept because a press kit is also a record |

## What is archive

Everything under [`archive/`](archive/) is v1: Comfortaa, yellow chrome, cards
on a grey ground, and screenshots of the Ionic app. It is kept because the 0.15
store listings were built from it and because a brand's own history is worth
keeping, but **none of it is the current identity**. Do not take colours, type
or a logo out of it. [`archive/README.md`](archive/README.md) says what each
folder is.

The mark itself did not change between v1 and v3 — what v3 added is the dark Pro
icon and the two splash badges, and what it replaced is the type and the UI
around the mark.

## Store screenshots

One folder for the whole 2.x line, [`2.x/`](2.x/), replaced in place as the app
changes rather than copied to a new folder per release. The next new folder is
3.x, when there is a 3.x. Language comes first, because both stores key
screenshots off language rather than country and every shot's headline is
translated:

```
2.x/
  <locale>/                    en · tr · es · ru · ar · fr · de · pt-BR
    ios/6.9/     1..8.png      1320 × 2868, and Apple derives 6.5" / 6.3" / 6.1"
    ios/5.5/     1..8.png      1242 × 2208, and 4.7" / 4" / 3.5"
    ios/13/      1..8.png      2064 × 2752, and every other iPad size
    ios/12.9/    1..8.png      2048 × 2732, kept, not uploaded — see below
    android/phone/     1..8.png
    android/7tablet/   1..8.png
    android/10tablet/  1..8.png
    android/feature-graphic.png
  icon-512.png
```

Three of those four go up. App Store Connect derives every size it can from the
largest of each kind — 6.5" down to 3.5" come from `ios/6.9/`, and *all* the
iPad sizes come from `ios/13/`, 12.9" included. The `ios/12.9/` files are kept
because Play derives nothing and a later App Store Connect may split the slots
again, but uploading them is worse than not: its 13" slot accepts both
2064 × 2752 and 2048 × 2732, so sending both fills one ten-image slot with
sixteen images and silently drops six. Play takes all three of its sizes.

The shots are compositions, not raw captures: a headline over the screen, on the
brand ground. [`2.x/README.md`](2.x/README.md) carries the composition in
numbers, the shot list, and the two things that must not appear in a screenshot.

`apps/mobile/scripts/collect-store-screenshots.mjs` in `langx/langx` reads this
folder directly and lays it out for `fastlane deliver`, so the folder names above
are an interface, not a preference.

## Rules

- **This repo is public**, like every `langx/*` repo. No credentials, and no map
  of where anything private lives.
- **English on disk**, including file and folder names.
- **Archive is append-only.** Nothing in `archive/` gets overwritten — a store
  listing that was built from a file is entitled to keep finding it.
- Outside the archive, the current set is replaced in place. `brand/`, `2.x/`
  and `marketing/2.x/` are the identity as it is *now*, and the history is in
  git.
