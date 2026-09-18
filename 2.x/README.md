# 2.x — store artwork

Eight shots, every slot both stores actually take an upload for, in the eight
languages the app speaks. One template throughout: each screen in a device
bezel — an iPhone 17 Pro on the App Store slots, a Pixel 10 Pro on Play's — on
the brand ground, under a headline and one line of support copy.

**Read this before you upload.** The screen inside every shot is rendered from
the phone components on langx.io, not captured from a build on a device. It is
the app's own markup at the app's own sizes, so it matches what a person sees —
but it is a recreation, and both stores ask for the app in use. Treat it as the
set to ship now and replace shot for shot as real captures are taken; the
composition does not change when they are.

Nothing came from an account: the content is demonstration data and the faces
are AI-generated portraits (`../marketing/2.x/README.md`).

## Three Apple slots, out of eleven

App Store Connect takes an upload for two iPhone sizes and one iPad size and
derives every other one. In Media Manager the rest read "Using 6.9" Display",
"Using 5.5" Display" or "Using 13" Display" — there is nothing to upload
there.

| Folder      | Size        | Covers                              |
| ----------- | ----------- | ----------------------------------- |
| `ios/6.9/`  | 1320 × 2868 | iPhone 6.9", and 6.5" / 6.3" / 6.1" |
| `ios/5.5/`  | 1242 × 2208 | iPhone 5.5", and 4.7" / 4" / 3.5"   |
| `ios/13/`   | 2064 × 2752 | every iPad size, 12.9" included      |
| `ios/12.9/` | 2048 × 2732 | kept, but do not upload it — below   |

The iPad set is not optional: `apps/mobile/app.config.ts` sets
`ios.supportsTablet`, so the listing has an iPad tab to fill. One set fills it.
App Store Connect's 13" slot accepts 2064 × 2752 **and** 2048 × 2732, so
`ios/13/` and `ios/12.9/` both resolve to it — send both and sixteen images
arrive at a slot that holds ten, six of them silently dropped, in every
language. Send `ios/13/` and 12.9", 10.5" and 9.7" are derived from it.

The 1024 × 1024 app icon is `../brand/icon/default.png`.

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

| #   | Screen         | Ground | Layout                         | English headline            |
| --- | -------------- | ------ | ------------------------------ | --------------------------- |
| 1   | Discover       | yellow | hero                           | They need your language     |
| 2   | Chat           | white  | tilt                           | Say it wrong. Get it fixed. |
| 3   | Feed           | white  | classic                        | Corrections are always free |
| 4   | Tokens, dark   | ink    | classic                        | Earned by teaching          |
| 5   | Chat, dark     | ink    | duo, the dark Feed behind      | It has a night side         |
| 6   | Feed, dark     | ink    | tilt-right                     | Ask when you're stuck       |
| 7   | Discover, dark | ink    | hero                           | Or whoever is online now    |
| 8   | Me             | yellow | hero                           | A streak worth keeping      |

Three acts: yellow opens, three light screens carry the loop, four dark ones
are the app after hours, yellow closes. Every headline is a claim
`langx/docs/store/listing.md` also makes.

The whole set was re-shot on 2026-09-17, in the device bezel. The screens, the
order, the grounds and the copy are the ones the flat-card set carried; what
changed is the composition around them, and that it is now one render per slot
rather than one card cut to seven canvases. The strip that had been framed for
two of the seven slots on 2026-09-16 is where it started.

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
  cannot be bought, traded or withdrawn, which is the answer to 3.1.5(b). Its
  shot is the one layout that keeps a whole screen in frame, so the line
  survives in every slot and every language.

Apple's own note in Media Manager is worth keeping in mind: only the **first
three** are used on the app installation sheets. Shots 1–3 have to carry the
listing on their own.

## The composition

Every shot is [goldie](https://github.com/kacperkapusciak/goldie)'s: the bezel,
the layouts, the type setting and the wrapping are its renderer, and
[`../goldie/`](../goldie/) is the config that chooses what it draws and the
scripts that run it. `../goldie/README.md` is the how; this is the what.

| Element      | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| Ground       | `#ffc409`, `#ffffff` or `#17191c`                          |
| Headline     | Nunito ExtraBold, 8.2% of the tile width, `-0.0016em`      |
| Support line | Nunito Regular, 3.8% of the tile width                     |
| Copy colours | ink on white and on yellow, `#f2f3f5` on ink               |
| Bezel        | goldie's `17-pro-silver`, and its Pixel 10 Pro on Play      |
| Device       | 84–95% of the column wide, by layout                        |

Everything is a ratio of the tile, so one composition fills seven differently
shaped slots. A slot wider than the 6.9" aspect — the 5.5" iPhone, both iPads,
both Play tablets — keeps the copy column and the device at that aspect,
centred, which is how a phone ends up on an iPad canvas: there is no tablet
layout to shoot, and the set has never pretended otherwise.

**The screen in each shot is cut once**, from the 1170 × 2532 render, 6px in on
every side so the site's own drawn device edge does not show as a hairline
inside a real bezel. It is the same cut in every slot and every language; only
the tile around it changes.

Arabic sets in Noto Sans Arabic at the same weights; Nunito has no Arabic.
Everything else is Nunito, which covers Latin, Latin Extended and Cyrillic.

The feature graphic is the one asset that is not a screenshot — a landscape
banner with the lockup on it, which goldie's renderer does not compose — so it
is drawn by `../goldie/feature.mjs` from the same parts: the yellow ground, the
lockup, shot 1's copy, and the Discover screen in the same bezel. Arabic
mirrors the whole banner.

## Uploading the set

Each store has a lane in `apps/mobile/fastlane/Fastfile` in `langx/langx`, and
a script that lays this folder out the way the lane reads it:

```
node apps/mobile/scripts/collect-store-metadata.mjs      # docs/store/listing.md → metadata
node apps/mobile/scripts/collect-store-screenshots.mjs   # this folder → App Store
cd apps/mobile && fastlane store

node apps/mobile/scripts/collect-play-screenshots.mjs    # this folder → Play
cd apps/mobile && fastlane android play
```

Neither lane submits anything for review on its own. Authentication on the App
Store is an API key (`.p8`), not an Apple ID, so there is no password and no
2FA prompt; Play uses a service account. Play's own locale list is shorter than
this folder's — it has no Russian and no Arabic — so that lane covers six of
the eight and the rest of its listing falls back to `en-GB`.

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
[`../marketing/2.x/`](../marketing/2.x/).
