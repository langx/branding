# goldie — the 2.x shots, framed

The eight store shots of [`../2.x/`](../2.x/) composed a second way: with
[goldie](https://github.com/kacperkapusciak/goldie), which puts each screen in
a device bezel — an iPhone 17 Pro for the App Store, a Pixel 10 Pro for Play —
and lays the strip out with a rhythm rather than one card on every shot. Same
eight screens, same three grounds, same headline and support line in the same
eight languages, so both sets make the same claims and
[`../2.x/README.md`](../2.x/README.md) still says what may and may not appear
in a shot.

**These are still renders, not captures.** goldie normally drives the app on a
simulator and screenshots it; there is no simulator in this pipeline. The
screens are the same renders as the card set — the phone components on
langx.io, in `../marketing/2.x/screens/` — handed to goldie's frame step as if
they were captures. Replace them with real captures when there are some and
re-run; the composition does not change.

## Output

```
out/screenshots/
  iphone-6.9/<locale>/01-discover.png … 08-me.png    1320 × 2868, App Store 6.9"
  pixel-10-pro/<locale>/01-discover.png … 08-me.png  1080 × 1920, Play phone
```

Locales are `en · tr · es · ru · ar · fr · de · pt-BR`. goldie renders the two
sizes it knows and no others, so this set fills the iPhone 6.9" slot (from
which App Store Connect derives 6.5" down to 6.1") and the Play phone slot.
The 5.5" iPhone, the iPad and the Play tablet slots are still the card set's.

The files are committed, like everything else in this repo: the folder is the
artwork, and the scripts are how it was made.

## The eight shots

| #   | Screen         | Ground | Layout       |
| --- | -------------- | ------ | ------------ |
| 1   | Discover       | yellow | hero         |
| 2   | Chat           | white  | tilt         |
| 3   | Feed           | white  | classic      |
| 4   | Tokens, dark   | ink    | classic      |
| 5   | Chat, dark     | ink    | duo, with the dark Feed behind |
| 6   | Feed, dark     | ink    | tilt-right   |
| 7   | Discover, dark | ink    | hero         |
| 8   | Me             | yellow | hero         |

The layouts are goldie's, from its `src/layouts.ts`. Two are chosen for a
reason rather than for rhythm: the token screen is `classic`, the one layout
that keeps the whole screen in frame, because its last line — tokens cannot be
bought, traded or withdrawn — is the answer to Guideline 3.1.5(b) and has to
survive; and the Me screen is `hero`, which runs the device off the bottom,
because the lower half of that screen is empty.

The bezel is goldie's `17-pro-silver`, the finish that sits on all three
grounds. The type is the brand's: Nunito ExtraBold for the headline, Nunito
Regular for the line under it, Noto Sans Arabic for the Arabic. The fonts are
in `fonts/`, with their OFL notices, so the render needs nothing installed.

## Running it

Node 20+ and ffmpeg on the PATH (goldie strips the alpha channel with it —
the App Store rejects screenshots that carry one).

```
cd goldie
npm install
npm run all        # manifest.mjs, then frame.mjs
npm run studio     # goldie's studio at http://localhost:4321
```

- `manifest.mjs` stands in for `goldie capture`: it writes the capture record
  goldie's frame step reads, pointing at the renders. It also crops each
  render 6px on every side, because the renders carry the site's own drawn
  device edge and inside a real bezel that edge would show as a hairline.
- `frame.mjs` is `goldie frame` in three passes, one per ground. goldie has one
  pair of copy colours per theme and a scene may override the background but
  not the colours, so ink copy on the ink ground would vanish; each ground is
  rendered with its own colours and the strip is merged back in store order.
  Everything drawn is goldie's own renderer. `--device <key>` and
  `--locale <code>` narrow a run.
- The studio composites in the browser from one theme, so it shows the strip
  on a single ground with a single copy colour. It is still the quickest way to
  try a layout or a bezel; copy the choice into `goldie.config.ts` rather than
  saving it from the studio, because `goldie.design.json` would override the
  per-scene grounds on the next CLI run.

`goldie.config.ts` is the source of every visible choice — screens, order,
grounds, layouts, copy. Edit it and re-run `npm run frame`.

## What to know before uploading

- **Screens are English in every language**, as in the card set: the site the
  renders come from is English. Only the headline and the line under it are
  translated. Shooting the app in each language is the fix, and it comes with
  real captures.
- **The Play set shows an iOS status bar** — 9:41, the Dynamic Island cutout —
  inside a Pixel bezel, because the screens are iPhone renders. The card set
  has the same status bar on its Android canvases, and Play has not objected,
  but real Android captures would end it.
- **Copy has been read by a native speaker only in Turkish.** Same copy as the
  card set, same caveat.
- Upload one file at a time, or through `fastlane deliver`: App Store Connect
  does not keep the order of a bulk upload, and order is the argument here.
  goldie's numeric prefixes are the order.
