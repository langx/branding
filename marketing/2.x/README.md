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

## `video/`

`preview-1080x1920.webm` — 23 seconds, the six screens in order with the lockup
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
