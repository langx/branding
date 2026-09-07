# 2.0.x — store screenshots

**Status: the templates are here, the captures are not.** This folder holds the
v3 composition at every size the stores ask for, with the screen area empty.
Nothing in it is a picture of the app yet.

Shooting the app needs the app running against an API, and the API needs a
MongoDB replica set — Better Auth wraps writes in transactions, and a standalone
`mongod` fails on the first sign-up. Screens shot without an account are empty
states, which is not what a store listing is for. So the captures have to be
taken where a real instance runs: `pnpm dev` in `langx/langx` against a local
replica set, signed in, with the sample content in place.

## Sizes

| Path                | Size        | Store                       |
| ------------------- | ----------- | --------------------------- |
| `ios/6.7/`          | 1290 × 2796 | App Store, iPhone           |
| `ios/12.9/`         | 2048 × 2732 | App Store, iPad             |
| `android/phone/`    | 1440 × 3120 | Play                        |
| `android/10tablet/` | 1600 × 2560 | Play, 10" tablet            |

Numbered `1.png`, `2.png`, … in the order they should appear. `0.1.x/` also has
a `5.5/` folder; that size is only needed if the listing still carries an
iPhone 8-era device.

## The shot list

Eight, the same count as 0.3.x. Every headline has to be a claim the listing
also makes — `langx/docs/store/listing.md` is where the copy is decided, and a
screenshot is a claim in exactly the way a sentence is.

| #   | Screen                       | Headline                        |
| --- | ---------------------------- | ------------------------------- |
| 1   | Discover                     | Matched both ways               |
| 2   | Chat thread                  | Real conversations, not lessons |
| 3   | The correction sheet         | Correct each other              |
| 4   | A translated message         | Translation when you're stuck   |
| 5   | Streak and tokens            | A reason to come back           |
| 6   | Leaderboard                  | Weekly, monthly, all time       |
| 7   | Profile                      | Say who you are                 |
| 8   | Paywall                      | Free to use, always             |

Two things must not be in shot:

- **Badges.** They exist in v1, they are not in 2.0's first release, and the
  listing is being corrected because of it. A screenshot claiming them is the
  same false claim in a picture.
- **Coin, chain or wallet iconography**, for the reason in
  [`../BRAND.md`](../BRAND.md#iconography) — it is an App Review question,
  not a stylistic one.

And nothing shot from a real account: names, photos and message text in these
files are published to two stores and a public repo. Use seeded content.

## Until the captures exist

[`../marketing/2.0/`](../marketing/2.0/) holds the same seven screens rendered
from the site's phone components — v3, light and dark, demonstration data. They
are the nearest thing that exists today and they are right for press, social
and decks. They are not right here: both stores ask for pictures of the app in
use, and a faithful recreation is not that.

## The composition

`template/` is the layout, rendered at each size. It is white ground, ink
headline, one yellow rule, and the capture in a rounded stage — v3's own rules,
which is the point: the listing should look like the app it sells.

Everything scales from the canvas width, `u = width / 1290`:

| Element        | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Ground         | `#ffffff`                                                         |
| Headline       | Nunito ExtraBold 104·u, line-height 1.06, `-0.025em`, `#17191c`   |
|                | 150·u from the top, wrapping at 1010·u                            |
| Support line   | Nunito Bold 46·u, line-height 1.35, `#62676d`, 36·u below         |
| Rule           | 96·u × 10·u pill, `#ffc409`, 48·u below                           |
| Stage          | 72% of the canvas wide, 96·u below the rule                       |
|                | radius 56·u, `#f4f5f7`, 2·u `#e8eaec` border                      |
|                | shadow `0 4·u 10·u rgba(0, 0, 0, 0.06)`                           |

The capture goes inside the stage, clipped to the same radius. Drop the
placeholder text; keep the border, which is what separates a white screen from
the white ground behind it.

The yellow rule is the one piece of yellow in the composition. That is the app's
rule — yellow appears once per screen — and it holds here.
