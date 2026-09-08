# 2.0.x — store artwork

Eight shots, every slot both stores actually take an upload for, in the eight
languages the app speaks.

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

| #   | Screen        | Ground | Treatment       | English headline                |
| --- | ------------- | ------ | --------------- | ------------------------------- |
| 1   | Discover      | yellow | cropped, zoomed | They need your language         |
| 2   | Chat          | white  | cropped, zoomed | Say it wrong. Get it fixed.     |
| 3   | Feed          | white  | cropped, zoomed | Corrections are always free     |
| 4   | Me            | white  | whole device    | A streak worth keeping          |
| 5   | Tokens        | ink    | whole device    | Earned by teaching              |
| 6   | Chat, dark    | ink    | cropped, zoomed | It has a night side             |
| 7   | Discover, dark| ink    | cropped, zoomed | Or whoever is online now        |
| 8   | Paywall       | yellow | whole device    | Free to use, always             |

Yellow opens and closes, the middle is white, and 5–7 are an ink block: the
dark side of the app, shown deliberately rather than as filler. Every headline
is a claim `langx/docs/store/listing.md` also makes.

Five things are decided here rather than only drawn:

- **The four cropped shots are zoomed.** A store thumbnail is barely 120px
  wide. A whole 844pt screen shrunk to that is a grey smudge; a cropped one
  still reads. The crop is fitted after the headline wraps, so the cut lands
  above the tab bar at every canvas size and in every language.
- **No badges.** The Me screen carries a "Badges — coming back soon" row on the
  site. Badges are not in 2.0's first release, and App Review 2.3.1 rules out
  "coming soon" content, so the row is hidden in the render.
- **The Welcome back screen is not in the set**, although it exists and reads
  well. It draws a coin beside the token balance and explains a carry-over
  rate, and `langx/docs/token-messaging-brief.md` rules out coin iconography —
  that is Guideline 3.1.5(b), not taste.
- **No prices.** The paywall shot shows what each plan includes, never a
  number: prices are per storefront and a number baked into a PNG is wrong in
  most of them.
- **The token screen stays legible.** It states on its own face that tokens
  cannot be bought, traded or withdrawn, which is the answer to 3.1.5(b).

Apple's own note in Media Manager is worth keeping in mind: only the **first
three** are used on the app installation sheets. Shots 1–3 have to carry the
listing on their own.

## The composition

Everything scales from the canvas height, `u = height / 2796`:

| Element      | Value                                                        |
| ------------ | ------------------------------------------------------------ |
| Ground       | `#ffc409`, `#ffffff` or `#17191c`                            |
| Headline     | Nunito ExtraBold 118·u / 1.03, `-0.03em`, 172·u down         |
| Support line | Nunito Bold 47·u / 1.35, 34·u below                          |
| Cropped shot | the top 79% of the screen, in a card at its own aspect        |
| Whole device | 920·u wide, 78·u below the text, 22·u/56·u drop shadow       |

The column is centred rather than pinned to the top, so a one-line headline and
a two-line one both sit balanced. The crop is a card at the source's own
aspect: filling the leftover height instead would mean cropping the sides,
which cuts the status bar and the message bubbles. The three cropped screens
are cut once, above every bottom bar, so no canvas size or language can push
the tab bar or the chat composer into shot.

Arabic sets in Noto Sans Arabic at the same weights, right to left; Nunito has
no Arabic. Everything else is Nunito, which covers Latin, Latin Extended and
Cyrillic.

Press images, social cards and the preview video are in
[`../marketing/2.0/`](../marketing/2.0/).
