# 2.0.x — store artwork

Upload-ready sets for both stores, six shots each, in the v3 identity.

**Read this before you upload.** The screen inside every shot is rendered from
the phone components on langx.io, not captured from a build on a device. It is
the app's own markup at the app's own sizes, so it matches what a person sees —
but it is a recreation, and both stores ask for the app in use. Treat these as
the set to ship now and replace shot-for-shot as real captures are taken; the
composition does not change when they are.

Nothing here came from an account: the content is demonstration data and the
faces are AI-generated portraits (`../marketing/2.0/README.md`).

## App Store Connect

| Folder       | Size        | Slot                                    |
| ------------ | ----------- | --------------------------------------- |
| `ios/6.9/`   | 1320 × 2868 | iPhone 6.9" — the current iPhone slot   |
| `ios/6.7/`   | 1290 × 2796 | iPhone 6.7" — what 0.15 was uploaded at |
| `ios/13/`    | 2064 × 2752 | iPad 13"                                |
| `ios/12.9/`  | 2048 × 2732 | iPad 12.9"                              |

Both iPhone sizes are here because Apple has changed which one it asks for
before; upload whichever slot App Store Connect shows and ignore the other. The
iPad set is not optional — `apps/mobile/app.config.ts` sets
`ios.supportsTablet: true`, so the listing has an iPad tab to fill.

The 1024 × 1024 app icon is `../app-resources/v2/icons/default.png`, unchanged.

## Play Console

| File                            | Size        | Slot                        |
| ------------------------------- | ----------- | --------------------------- |
| `android/phone/1..6.png`        | 1440 × 3120 | Phone screenshots           |
| `android/7tablet/1..6.png`      | 1200 × 1920 | 7" tablet                   |
| `android/10tablet/1..6.png`     | 1600 × 2560 | 10" tablet                  |
| `android/feature-graphic.png`   | 1024 × 500  | Feature graphic             |
| `android/icon-512.png`          | 512 × 512   | App icon                    |

The tablet folders are what stops Play marking the listing as phone-only. Both
hold the same phone screens on a tablet-shaped canvas, which is what 0.3.x did
too — there is no tablet layout to shoot.

## The shots

Every headline is a claim `langx/docs/store/listing.md` also makes. Same order
in every folder.

| #   | Screen   | Headline                             |
| --- | -------- | ------------------------------------ |
| 1   | Discover | Matched both ways                    |
| 2   | Chat     | Real conversations, not lessons      |
| 3   | Feed     | Correct each other                   |
| 4   | Tokens   | Earn tokens for talking and teaching |
| 5   | Me       | A reason to come back                |
| 6   | Paywall  | Free to use, always                  |

Three things were decided rather than drawn, and they are the reason this list
is six and not eight:

- **No badges.** The Me screen carries a "Badges — coming back soon" row on the
  site. Badges are not in 2.0's first release, and a screenshot is not the
  place to promise one, so the row is hidden in the render. It is also why the
  listing copy is being corrected.
- **No coin, chain or wallet.** Shot 4 is the token screen, which states on its
  own face that tokens cannot be bought, traded or withdrawn — that is the
  answer to Guideline 3.1.5(b), and it should stay legible in the shot.
- **No prices.** The paywall shot shows what each plan includes, not what it
  costs: prices are per storefront and a number baked into a PNG goes wrong in
  174 of them.

## The composition

White ground, ink headline, one yellow rule, the screen below with its own
device edge and a 8% drop shadow. Everything scales from the canvas height,
`u = height / 2796`:

| Element      | Value                                                           |
| ------------ | ---------------------------------------------------------------- |
| Ground       | `#ffffff`                                                        |
| Headline     | Nunito ExtraBold 104·u / 1.06, `-0.025em`, `#17191c`, 150·u down |
| Support line | Nunito Bold 46·u / 1.35, `#62676d`, 36·u below                   |
| Rule         | 96·u × 10·u pill, `#ffc409`, 48·u below                          |
| Screen       | 96·u below the rule, fills the rest, 1170 × 2532 aspect          |

`template/` is that composition rendered empty at four sizes, for a shot the
list above does not cover.

The yellow rule is the one piece of yellow in the composition — the app's own
rule, holding here.
