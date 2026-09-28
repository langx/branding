# 2.0 — press, social and video

Everything here is built from the v3 app screens. **They are mockups, not device
captures**: rendered from the phone components on langx.io —
`src/lib/components/phone/` in `langx/website`, where `PhoneFrame` draws the
device and each screen is real HTML at the app's own sizes.

Nothing came from an account. The names, messages and numbers are demonstration
data, and the six faces are AI-generated portraits — none of those people exist
(`static/images/people/README.md` in that repo says where they came from).

## `screens/`

The seven screens on their own, light and dark, 1170 × 2532 (390 × 844 at 3×):
Discover, Chat, Feed, Me, Paywall, Tokens, Welcome back. This is the source
every other file here and in [`../../2.x/`](../../2.x/) is cut from.

The four Discover files were re-shot on 2026-09-10, after the site's phone
screen gained the **boosted strip** the app has had since `langx/langx` #1274.
The same render also picks up what the screen had drifted to since the first
shoot — the search button, the filter count, the language pair under the title
— so these four differ from their neighbours by more than the strip.

The Me screen is rendered with its "Badges — coming back soon" row hidden.
Badges are not in 2.0's first release and a picture is not the place to promise
one.

## `social/`

English and Turkish, six posts each:

| Path                     | Size        | For                                 |
| ------------------------ | ----------- | ----------------------------------- |
| `<locale>/square/1..6`   | 1080 × 1080 | Instagram, X, LinkedIn              |
| `<locale>/story/1..6`    | 1080 × 1920 | Stories, Reels covers, TikTok still |
| `<locale>/og.png`        | 1200 × 630  | what a link to langx.io unfurls into |

Same six messages as the store set, same grounds, laid out for each shape. The
other six languages are one render away if a campaign needs them.

## `print/`

The postcard from [`../../design/print/Postcard.dc.html`](../../design/print/Postcard.dc.html),
rendered as pictures: `postcard-front.png` and `postcard-back.png`, 1728 × 1152
(4" × 6" at 288 dpi, bleed cropped off, so this is the card as it is cut). They
are screenshots of the design file, not a second drawing of it — when the
design changes, re-shoot rather than edit. The front is the hero image of the
`langx/langx` README.

## `video/`

**Say it back**, the motion reel — 44 seconds, 60 fps, H.264 with an AAC
soundtrack, in two frames:

| File                          | Size        | For                                   |
| ----------------------------- | ----------- | ------------------------------------- |
| `say-it-back-1920x1080.mp4`   | 1920 × 1080 | the site, YouTube, talks, a Play promo |
| `say-it-back-1080x1920.mp4`   | 1080 × 1920 | Reels, TikTok, Shorts, Stories        |

A caret edits *Hello* through three languages and becomes the line the mark is
cut on; sixteen scripts move the way they are read; a chat gets its green
correction and climbs the Echo ladder; *No ads. Real people. Open source.*;
*thank you* in the app's eight languages; and rivers of greetings bend into the
two arcs and lock into the lockup. The vertical cut is recomposed for a phone
held upright, with its words kept clear of the platforms' own chrome — not the
wide one letterboxed.

Both are rendered, not edited: `tools/showreel/` in `langx/langx` builds them
frame by frame from one page (`render.mjs --format wide|vertical`), and the
score is synthesised there too, so there is no licensed music in them. Re-cut
them from that tool rather than editing these files. The app's launch
animation comes from the same finale (`render.mjs --page splash`).

`preview-1080x1920.webm`, the earlier draft — 23 seconds, the six screens in order with the lockup
at the end. Use it on the site and in social posts.

**It is not a store upload.** The two stores want different things and neither
takes this file:

- **App Store** app previews are uploaded as video, in the formats and
  resolutions App Store Connect lists per device — H.264 in `.mov`/`.mp4`, not
  WebM. Converting needs an H.264 encoder, which is not what produced this file.
- **Play** does not take a video file at all: its promo video is a **YouTube
  URL** on the store listing.

So this is the draft that shows the cut working. The polished version belongs in
`../../animations/`, where the After Effects project already lives — the shot
order, timing (3.4s a screen) and copy here are the storyboard for it.
