# goldie — how the 2.x shots are made

The renderer behind [`../2.x/`](../2.x/). It is
[goldie](https://github.com/kacperkapusciak/goldie), which puts each screen in
a device bezel — an iPhone 17 Pro for the App Store, a Pixel 10 Pro for Play —
and lays the strip out with a rhythm rather than one card on every shot.
[`../2.x/README.md`](../2.x/README.md) is the set itself: the shot list, the
slots, what may and may not appear in a shot, and how it goes up.

**The artwork is in `../2.x/`, not here.** This folder is the config, the
scripts and the fonts; `publish.mjs` files each render under
`../2.x/<locale>/<slot>/<n>.png`, which is the layout both collect scripts in
`langx/langx` read. `out/` is working state and is not committed.

**These are still renders, not captures.** goldie normally drives the app on a
simulator and screenshots it; there is no simulator in this pipeline. The
screens are the same renders as the card set — the phone components on
langx.io, in `../marketing/2.x/screens/` — handed to goldie's frame step as if
they were captures. Replace them with real captures when there are some and
re-run; the composition does not change.

2.9's screens (shots 9 and 10) are the exception in one way: the site has no
call or camera screen, so `screens/` draws them from the app's own source and
renders them **once per language**, every string read out of the app's locale
files. See *The 2.9 screens* below.

## Output

```
out/screenshots/<device>/<locale>/01-discover.png … 08-me.png
```

then `publish.mjs` copies each strip to its slot (on Play's slots, the first
eight; the ninth and tenth go to `<slot>-extra/`, since Play takes eight):

| Device key         | Slot under `../2.x/<locale>/` | Size        |
| ------------------ | ----------------------------- | ----------- |
| `iphone-6.9`       | `ios/6.9`                     | 1320 × 2868 |
| `iphone-5.5`       | `ios/5.5`                     | 1242 × 2208 |
| `ipad-13`          | `ios/13`                      | 2064 × 2752 |
| `ipad-12.9`        | `ios/12.9`                    | 2048 × 2732 |
| `pixel-10-pro`     | `android/phone`               | 1440 × 3120 |
| `android-7tablet`  | `android/7tablet`             | 1200 × 1920 |
| `android-10tablet` | `android/10tablet`            | 1600 × 2560 |

Locales are `en · tr · es · ru · ar · fr · de · pt-BR`. goldie ships two of
those seven device records — the 6.9" iPhone and the Play phone, at its own
sizes — so `devices.mjs` registers all seven at the sizes the stores take. A
record is only a tile size and a platform to the frame step, which is the only
step run here; the bezel follows the platform.

`feature.mjs` draws the one asset goldie cannot: Play's 1024 × 500 feature
graphic, a landscape banner with the lockup on it, one per locale.
`play-feature.mjs` draws its successor, one file with no words for every
listing, `creative.mjs` the App Store's two creative assets per locale, and
`event.mjs` the in-app event's card and details page per locale — all
described in `../2.x/README.md`. The two creative assets and the Play
successor are not canvas drawings: `covers/covers.mjs` writes each cover as
HTML and photographs it in headless Chromium (the same playwright-core as
`screens/`), which is what gives the scene its perspective, its shadows and
the app's own type; `covers/covers.css` is the shared look. The words on the
floating cards are read from the app's locale files, so the run needs a
langx/langx checkout (`LANGX_DIR`, as for `screens/`), and the two portraits
beside it are the site's AI-generated Lucía and Javier.

## The tile, and the squat slots

goldie composes against the 6.9" aspect. A tile wider than that — the 5.5"
iPhone, both iPads, both Play tablets — has its copy column clamped back to
that aspect and centred, which is what puts a phone on an iPad canvas the way
the card set did. It sizes the *device* against the tile's full width, though,
which is right for a panorama and wrong here: on a squat tile the bezel ran off
both sides. `frame.mjs` scales each layout's device by the same clamp the copy
gets, so every slot is the one composition at its own size.

## The ten shots

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
| 9   | Incoming call  | white  | duo, with the call's thread behind |
| 10  | Chat camera    | yellow | duo, with two view-once rows behind |

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

## The 2.9 screens

`screens/screens.html` draws five screens at the app's own 390 × 844 —
the incoming call, its thread, the chat camera's preview, the view-once thread,
and a thread with a correction (for the Play feature graphic) — from the values
in `apps/mobile` in `langx/langx`: `CallHost.tsx`, `chat-camera.tsx`,
`ChatScreen.tsx`, `MessageBubble.tsx` and the theme's `tokens.ts`. Icons are
Feather, the app's own icon font (`fonts/Feather.ttf`, MIT, notice beside it).
The face is the site's AI-generated Lucía (`screens/lucia.webp`); the photo in
the camera is drawn (`screens/photo.svg`), so no real picture is in a shot.

`screens/render.mjs` renders them at 3× in headless Chromium, once per locale,
into `../marketing/2.x/screens/<locale>/`. **No word on them is written
here**: each is read at render time from `apps/mobile/src/i18n/messages/` in a
`langx/langx` checkout — the sibling `../../langx` by default, or
`LANGX_DIR` — and the run stops on a key the checkout lacks rather than fall
back to English. Arabic is rendered right to left.

Three things in the pipeline exist for them:

- **Per-locale capture records.** `manifest.mjs` cuts a scene's
  `screens/<locale>/<id>.png` when there is one, and writes each locale its own
  record under `out/locales/<locale>/`, which `frame.mjs` points goldie at.
  Scenes with one render for every language are unaffected.
- **`behind: true`** marks a scene that is only ever the second screen of
  another scene's duo. goldie needs it declared, but it is never a shot and
  takes no number.
- **`mirrorRtl: true`** turns a scene's layout left for right in Arabic, so a
  duo whose screens are mirrored is mirrored with them.

## Running it

Node 20+ and ffmpeg on the PATH (goldie strips the alpha channel with it —
the App Store rejects screenshots that carry one).

```
cd goldie
npm install
npx playwright-core install chromium-headless-shell   # once, for screens/
npm run screens    # the 2.9 screens, from the app's strings (LANGX_DIR)
npm run all        # manifest.mjs, frame.mjs, then publish.mjs
npm run creative   # the App Store creative assets (needs LANGX_DIR, like screens/)
npm run event      # the in-app event's card and details page (after manifest.mjs)
npm run play-feature  # the language-free Play feature graphic
node feature.mjs   # the per-language Play feature graphic, when its screen changes
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
- `publish.mjs` copies each strip into `../2.x/<locale>/<slot>/`, numbered the
  way both stores are fed, and stops the run if a file is not the size its slot
  takes. It touches the numbered shots only; the feature graphic beside them is
  `feature.mjs`'s.
- The studio composites in the browser from one theme, so it shows the strip
  on a single ground with a single copy colour. It is still the quickest way to
  try a layout or a bezel; copy the choice into `goldie.config.ts` rather than
  saving it from the studio, because `goldie.design.json` would override the
  per-scene grounds on the next CLI run.

`goldie.config.ts` is the source of every visible choice — screens, order,
grounds, layouts, copy. Edit it and re-run `npm run all`; `devices.mjs` is the
other half, and it holds the slots and their sizes.

## What to know before uploading

- **Shots 1–8 are English in every language**: the site the renders come from
  is English, so only the headline and the line under it are translated.
  Shooting the app in each language is the fix, and it comes with real
  captures. Shots 9 and 10 are localized.
- **The Play set shows an iOS status bar** — 9:41, the Dynamic Island cutout —
  inside a Pixel bezel, because the screens are iPhone renders. The set it
  replaced had the same status bar on its Android canvases and Play has not
  objected, but real Android captures would end it.
- **The tablet slots carry a phone.** Both iPads and both Play tablets show the
  same phone screens on their own canvas, because there is no tablet layout to
  shoot. That is what the set has always done.
- **Copy has been read by a native speaker only in Turkish.**
- Upload one file at a time, or through `fastlane deliver`: App Store Connect
  does not keep the order of a bulk upload, and order is the argument here.
  goldie's numeric prefixes are the order.
