# 2.0.x — store artwork

Everything both stores ask for, in eight languages, in the v3 identity.

**Read this before you upload.** The screen inside every shot is rendered from
the phone components on langx.io, not captured from a build on a device. It is
the app's own markup at the app's own sizes, so it matches what a person sees —
but it is a recreation, and both stores ask for the app in use. Treat it as the
set to ship now and replace shot for shot as real captures are taken; the
composition does not change when they are.

Nothing came from an account: the content is demonstration data and the faces
are AI-generated portraits (`../marketing/2.0/README.md`).

## Languages

`en · tr · es · ru · ar · fr · de · pt-BR` — the eight the app itself speaks.

**Only the headline and the line under it are translated.** The screen inside
stays English, because the screens come from the site and the site is English.
That is the normal shape of a localized listing and it is better than nothing,
but a Turkish visitor still sees an English UI in the picture. Shooting the app
in each language is the fix, and it comes with the real captures.

Both stores key screenshots off **language**, not country: you add a
localization and it is shown to whoever reads the store in that language. Play
also has *custom store listings*, which can be targeted by country — that is a
separate feature, and these files work there too.

None of this copy has been read by a native speaker except the Turkish. Have
each one checked before it goes up; a headline is the most-read sentence in the
listing.

## What is where

```
2.0.x/<locale>/ios/6.9/1..6.png            1320 × 2868   App Store, iPhone
2.0.x/<locale>/ios/13/1..6.png             2064 × 2752   App Store, iPad
2.0.x/<locale>/android/phone/1..6.png      1440 × 3120   Play, phone
2.0.x/<locale>/android/7tablet/1..6.png    1200 × 1920   Play, 7" tablet
2.0.x/<locale>/android/10tablet/1..6.png   1600 × 2560   Play, 10" tablet
2.0.x/<locale>/android/feature-graphic.png 1024 × 500    Play, feature graphic
2.0.x/icon-512.png                          512 × 512    Play, app icon
2.0.x/en/ios/6.7/, 2.0.x/en/ios/12.9/                    older Apple slots
```

The iPad set is not optional: `apps/mobile/app.config.ts` sets
`ios.supportsTablet`, so the listing has an iPad tab to fill. The Play tablet
folders are what stops the listing being marked phone-only; both carry the same
phone screens on a tablet canvas, because there is no tablet layout to shoot.
`en/ios/6.7` and `en/ios/12.9` are there in case App Store Connect still shows
the slots 0.15 was uploaded to.

The 1024 × 1024 App Store icon is `../app-resources/v2/icons/default.png`.

## The six shots

Same order in every folder and every language. Every headline is a claim
`langx/docs/store/listing.md` also makes.

| #   | Screen   | Ground | Treatment      | English headline                |
| --- | -------- | ------ | -------------- | ------------------------------- |
| 1   | Discover | yellow | cropped, zoomed| They need your language         |
| 2   | Chat     | white  | cropped, zoomed| Say it wrong. Get it fixed.     |
| 3   | Feed     | white  | cropped, zoomed| Corrections are always free     |
| 4   | Tokens   | ink    | whole device   | Earned by teaching              |
| 5   | Me       | white  | whole device   | A streak worth keeping          |
| 6   | Paywall  | yellow | whole device   | Free to use, always             |

Four things are decided here rather than only drawn:

- **The first three are cropped and zoomed.** A store thumbnail is barely 120px
  wide. A whole 844pt screen shrunk to that is a grey smudge; a cropped one
  still reads. The crop is fitted after the headline wraps, so the cut lands
  above the tab bar at every canvas size and in every language.
- **The ground alternates.** Yellow opens and closes, ink carries the token
  screen, white holds the middle. Six white cards in a row disappear next to
  every other listing on the page; this gives the carousel a shape.
- **No badges.** The Me screen carries a "Badges — coming back soon" row on the
  site. Badges are not in 2.0's first release, and App Review 2.3.1 rules out
  "coming soon" content, so the row is hidden in the render.
- **No prices, and no coin.** The paywall shot shows what each plan includes,
  never a number: prices are per storefront. Shot 4 is the token screen, which
  states on its own face that tokens cannot be bought, traded or withdrawn —
  the answer to Guideline 3.1.5(b), left legible on purpose.

## The composition

Everything scales from the canvas height, `u = height / 2796`:

| Element      | Value                                                           |
| ------------ | ---------------------------------------------------------------- |
| Ground       | `#ffc409`, `#ffffff` or `#17191c`                                |
| Headline     | Nunito ExtraBold 118·u / 1.03, `-0.03em`, 172·u down             |
| Support line | Nunito Bold 47·u / 1.35, 34·u below                              |
| Cropped shot | fills the rest, top 80% of the screen, bleeds off the bottom     |
| Whole device | 920·u wide, 78·u below the text, 22·u/56·u drop shadow           |

Arabic sets in Noto Sans Arabic at the same weights, right to left; Nunito has
no Arabic. Everything else is Nunito, which covers Latin, Latin Extended and
Cyrillic.

Press images, social cards and the preview video are in
[`../marketing/2.0/`](../marketing/2.0/).
