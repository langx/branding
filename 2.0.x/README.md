# 2.0.x — store artwork

Eight shots, every slot both stores actually take an upload for, in the eight
languages the app speaks. One template throughout: the same card, at the same
width and the same height, on every shot.

**Read this before you upload.** The screen inside every shot is rendered from
the phone components on langx.io, not captured from a build on a device. It is
the app's own markup at the app's own sizes, so it matches what a person sees —
but it is a recreation, and both stores ask for the app in use. Treat it as the
set to ship now and replace shot for shot as real captures are taken; the
composition does not change when they are.

Nothing came from an account: the content is demonstration data and the faces
are AI-generated portraits (`../marketing/2.0/README.md`).

## The four Apple slots, and only four

App Store Connect takes uploads for two iPhone sizes and two iPad sizes and
derives every other one. In Media Manager the rest read "Using 6.9" Display",
"Using 5.5" Display", "Using 13" Display" or "Using 12.9" Display" — there is
nothing to upload there.

| Folder      | Size        | Covers                              |
| ----------- | ----------- | ----------------------------------- |
| `ios/6.9/`  | 1320 × 2868 | iPhone 6.9", and 6.5" / 6.3" / 6.1" |
| `ios/5.5/`  | 1242 × 2208 | iPhone 5.5", and 4.7" / 4" / 3.5"   |
| `ios/13/`   | 2064 × 2752 | iPad 13", and 11"                   |
| `ios/12.9/` | 2048 × 2732 | iPad 12.9", and 10.5" / 9.7"        |

The iPad sets are not optional: `apps/mobile/app.config.ts` sets
`ios.supportsTablet`, so the listing has an iPad tab to fill. The 1024 × 1024
app icon is `../app-resources/v2/icons/default.png`.

## Play

| File                            | Size        | Slot            |
| ------------------------------- | ----------- | --------------- |
| `android/phone/1..8.png`        | 1440 × 3120 | Phone           |
| `android/7tablet/1..8.png`      | 1200 × 1920 | 7" tablet       |
| `android/10tablet/1..8.png`     | 1600 × 2560 | 10" tablet      |
| `android/feature-graphic.png`   | 1024 × 500  | Feature graphic |
| `icon-512.png`                  | 512 × 512   | App icon        |

The tablet folders are what stops Play marking the listing phone-only. Both
carry the same phone screens on a tablet canvas, because there is no tablet
layout to shoot.

## Languages

`en · tr · es · ru · ar · fr · de · pt-BR`, one folder each, same eight shots
in the same order.

**Only the headline and the line under it are translated.** The screen inside
stays English, because the screens come from the site and the site is English.
That is the normal shape of a localized listing and better than nothing, but a
Turkish visitor still sees an English UI in the picture. Shooting the app in
each language is the fix, and it comes with the real captures.

Both stores key screenshots off **language**, not country: you add a
localization and it is shown to whoever reads the store in that language. Play
also has *custom store listings*, which can be targeted by country — a separate
feature, and these files work there too.

None of this copy has been read by a native speaker except the Turkish. Have
each one checked; a headline is the most-read sentence in a listing.

## The eight shots

| #   | Screen         | Ground | English headline            |
| --- | -------------- | ------ | --------------------------- |
| 1   | Discover       | yellow | They need your language     |
| 2   | Chat           | white  | Say it wrong. Get it fixed. |
| 3   | Feed           | white  | Corrections are always free |
| 4   | Tokens, dark   | ink    | Earned by teaching          |
| 5   | Chat, dark     | ink    | It has a night side         |
| 6   | Feed, dark     | ink    | Ask when you're stuck       |
| 7   | Discover, dark | ink    | Or whoever is online now    |
| 8   | Me             | yellow | A streak worth keeping      |

Three acts: yellow opens, three light screens carry the loop, four dark ones
are the app after hours, yellow closes. Every headline is a claim
`langx/docs/store/listing.md` also makes.

Four things are decided here rather than only drawn:

- **The plans screen is not in the set.** A headline saying the app is free
  should not sit over a list of paid tiers, and that is what the shot was. What
  is free is stated where it is true: corrections, in shot 3.
- **No badges.** The Me screen carries a "Badges - coming back soon" row on the
  site. Badges are not in 2.0's first release, and App Review 2.3.1 rules out
  "coming soon" content, so the row is hidden in the render.
- **The Welcome back screen is out**, although it reads well and speaks to the
  v1 users this release is an update for. It draws a coin beside the token
  balance and explains a carry-over rate, and
  `langx/docs/token-messaging-brief.md` rules out coin iconography - Guideline
  3.1.5(b), not taste.
- **The token screen stays legible.** It states on its own face that tokens
  cannot be bought, traded or withdrawn, which is the answer to 3.1.5(b). The
  crop window on that screen is offset so the line survives.

Apple's own note in Media Manager is worth keeping in mind: only the **first
three** are used on the app installation sheets. Shots 1–3 have to carry the
listing on their own.

## The composition

Everything scales from the canvas height, `u = height / 2796`:

| Element      | Value                                                        |
| ------------ | ------------------------------------------------------------ |
| Ground       | `#ffc409`, `#ffffff` or `#17191c`                            |
| Headline     | Nunito ExtraBold 118·u / 1.03, `-0.03em`                     |
| Support line | Nunito Bold 47·u / 1.35, 34·u below                          |
| Card         | 84% of the canvas wide, 1170 × 2000, radius 54·u, 76·u below |

The column is centred rather than pinned to the top, so a one-line headline and
a two-line one both sit balanced.

**Every shot is the same card.** Each screen is cut once to a 1170 × 2000
window, so the card is identical everywhere and only its contents change; a set
where some shots are a whole device and others a wider crop reads as two
templates rather than one. The window sits at the top of every screen except
the token screen, which is offset 330px so its balance and its disclaimer are
both in frame. Cutting the source once is also what keeps a tab bar or a chat
composer out of shot at every canvas size and in every language.

Arabic sets in Noto Sans Arabic at the same weights, right to left; Nunito has
no Arabic. Everything else is Nunito, which covers Latin, Latin Extended and
Cyrillic.

## Uploading the set

Two scripts in `langx/langx` lay this folder out the way `fastlane deliver`
reads it, and deliver puts it up in one pass:

```
node apps/mobile/scripts/collect-store-metadata.mjs      # docs/store/listing.md → metadata
node apps/mobile/scripts/collect-store-screenshots.mjs   # this folder → screenshots
cd apps/mobile && fastlane deliver
```

Authentication is an App Store Connect API key (`.p8`), not an Apple ID, so
there is no password and no 2FA prompt.

Two things about App Store Connect are worth knowing before doing this by hand
instead, because both cost a set:

**A locale will not take a screenshot before it exists.** A localization is
created by giving it a description and keywords, and nothing else will do it —
so the metadata has to go up first or with the images, never after. Seven of
these eight languages did not exist on the listing when the screenshots were
drawn.

**A bulk upload does not keep its order.** Dropping eight files into a slot
puts them up in whatever sequence App Store Connect finished processing them,
not the order they were sent — the first attempt at the English 6.9" slot came
out 4, 1, 7, 2, 6, 3, 8, 5. Order is the argument here, and only the first
three are shown on the app installation sheet, so it matters. deliver sends
files one at a time in filename order, which is what the numeric prefix its
script writes is for. By hand, upload one file at a time.

Press images, social cards and the preview video are in
[`../marketing/2.0/`](../marketing/2.0/).
