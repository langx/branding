# 2.x — store artwork

Ten shots, every slot both stores actually take an upload for, in the eight
languages the app speaks. One template throughout: each screen in a device
bezel — an iPhone 17 Pro on the App Store slots, a Pixel 10 Pro on Play's — on
the brand ground, under a headline and one line of support copy.

The watch is the exception to all of that and has its own section below: real
captures, no bezel, no headline, because its canvas is the size of the display.

**Read this before you upload.** The screen inside every shot is rendered from
the phone components on langx.io (shots 1–8) or from the app's own values and
strings (shots 9 and 10, below), not captured from a build on a device. It is
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
`ios/13/` and `ios/12.9/` both resolve to it — send both and twenty images
arrive at a slot that holds ten, ten of them silently dropped, in every
language. Send `ios/13/` and 12.9", 10.5" and 9.7" are derived from it.

The 1024 × 1024 app icon is `../brand/icon/default.png`.

## The Apple Watch slot

`ios/watch/` — **1 to 10 shots at 416 × 496**, the Series 12 / 11 / 10 display.
The listing grows this tab the moment a build carries a watchOS app, which is
the build the watch app first ships in.

Apple sizes this slot by watch series and takes one of them only: 422 × 514 is
Ultra 4 and 3, 410 × 502 the older Ultra, 416 × 496 the current Series, 396 ×
484 the Series 9 and back, 368 × 448 the SE. **One size has to serve every
localization** — Apple says so outright — so mixing an Ultra shot into this set
costs the set. 416 × 496 is the mainstream size and it is what the Series 11
46mm simulator writes, which is why these files needed no scaling at all.

**These are captures, not renders, and that is the difference from everything
above.** The phone set is the site's own markup handed to goldie; this set is
`xcrun simctl io … screenshot` against the watch app running on a paired
simulator, fed a real payload by a real phone over WatchConnectivity. Two
things follow. There is no bezel and no headline — the canvas *is* the display,
so a frame around it would mean shrinking the app below its own size — and the
screen inside is localized for real: the watch app reads
`targets/_shared/Localizable.xcstrings`, which carries all eight languages, so
"Unread" is "Okunmamış" and "غير المقروءة" rather than English under a
translated headline.

| #   | Screen                          | What it has to show                    |
| --- | ------------------------------- | -------------------------------------- |
| 1   | Unread, three threads           | the app's whole reason: who is waiting |
| 2   | One thread, with **Reply**      | that the wrist answers, not just reads |

The cast is the phone set's — **Sofia R.**, **Mateo P.**, **Daniel K.** — so one
listing shows one set of people. Nothing came from a real account: they are
fixture accounts on a development database (`seed-test-users.ts`), renamed for
the shoot.

**Arabic has two shots now, and the second one needs a build that carries the
fix.** In right-to-left the navigation bar's back chevron moved to the trailing
edge, which on watchOS is where the system clock is drawn, and the two
overlapped. The watch app now pins the bar left-to-right while giving the
screens back their real direction, so the chevron is clear of the clock and the
names and bubbles stay right-to-left. `ar/ios/watch/2.png` is that build. If a
binary was cut before it, upload `1.png` alone for Arabic — a screenshot has to
be the build it is sold beside.

The clock in these reads whatever the simulator's was: `simctl status_bar
override` answers "Operation not supported" on watchOS, so there is no 9:41
here and no way to make one.


## Play

| File                            | Size        | Slot            |
| ------------------------------- | ----------- | --------------- |
| `android/phone/1..8.png`        | 1440 × 3120 | Phone           |
| `android/7tablet/1..8.png`      | 1200 × 1920 | 7" tablet       |
| `android/10tablet/1..8.png`     | 1600 × 2560 | 10" tablet      |
| `android/<slot>-extra/9..10.png`| as its slot | not uploaded — see below |
| `../android-feature-graphic.png`| 1024 × 500  | Feature graphic, every language — see below |
| `android/feature-graphic.png`   | 1024 × 500  | the earlier, per-language one |
| `icon-512.png`                  | 512 × 512   | App icon        |
| `android/wear/1..2.png`         | 384 × 384   | Wear OS — see below |

**Play takes eight a slot, and the set has ten.** Shots 9 and 10 are drawn
for Play too, but they sit beside each slot in `<slot>-extra/` rather than in
it: the Play lane uploads every file in a slot, and a ninth is refused. They
are there to swap in for two of the eight when that is the choice, under
their own numbers.

### The feature graphic, one for every listing

`android-feature-graphic.png`, at the root of this folder, is the banner at the
top of the Play listing: 1024 × 500, opaque RGB, and **no words** except the
lockup, so one file serves all thirteen of Play's listings, the ones with no
artwork of their own included. It replaces the v1 "languageXchange" banner.

It is drawn around how Play shows it, which is why it is not the per-language
`android/feature-graphic.png` beside the shots:

- On a desktop, Play lays the title, rating and Install button over the **left
  ~45%** behind a dark gradient. The per-language banner puts its headline
  exactly there. This one keeps that half bare yellow.
- On a phone, with a promo video set (ours is), Play puts a round play button
  over the **centre**. Nothing is under it: no face, no control.
- Everything that matters is inside a 10% margin on every edge.

What is in it: the lockup in the upper area, right of the half Play covers;
then two phones in the **Pixel 10 Pro** bezel the Play shots use — a chat with
a correction in it behind, and 2.9's incoming call in front. The screens are
the English renders; at this size their text is texture, not reading.
`../goldie/play-feature.mjs` draws it.

`collect-play-screenshots.mjs` in `langx/langx` still sends the per-language
`android/feature-graphic.png`. Until it is pointed at this file instead, upload
this one by hand to each listing.

The tablet folders are what stops Play marking the listing phone-only. Both
carry the same phone screens on a tablet canvas, because there is no tablet
layout to shoot.

## The Wear OS slot

`android/wear/` — **1 to 8 shots, square, at least 384 x 384**. Play requires
at least one before it will distribute to watches at all, and it only asks once
the app is opted into the **Wear OS form factor** in Play Console (Advanced
settings → Form factors). Until somebody ticks that box these files are
waiting, not late.

Google's rules here are stricter than Apple's about what may be in the frame:
the app interface only, **no device frame**, no added text, graphics or
background, and no transparency. That suits the set, because the emulator
writes exactly 384 x 384 — the minimum, and 1:1 — so again nothing is scaled
and nothing is composed around it.

| #   | Screen                     | Note                                        |
| --- | -------------------------- | ------------------------------------------- |
| 1   | Unread, at rest            | the round bezel clips the list, as it does on a watch |
| 2   | One thread, with **Reply** | scrolled 50px, see below                    |

**The second shot is scrolled on purpose.** The thread's three items — name,
bubble, Reply — sit just past the bottom of the circle when the screen opens,
so the yellow pill is sliced by the bezel. Fifty pixels brings the whole pill
inside without pushing the name into the top arc. It is a scroll position, not
a layout fix: the screen is not broken, it simply starts one nudge above where
it photographs best.

Captured from a Wear OS 5 emulator (`android-34`, arm64, 384 x 384, round)
paired to a Pixel 9 running the app signed in as a fixture account, with the
payload arriving over the **Data Layer** exactly as it does on a watch. Same
cast as everywhere else.

All eight languages are here; Play's own locale list is shorter and its lane
takes six of them, the same way it does for the phone shots.

## Languages

`en · tr · es · ru · ar · fr · de · pt-BR`, one folder each, same eight shots
in the same order.

**In shots 1–8 only the headline and the line under it are translated.** The
screen inside stays English, because those screens come from the site and the
site is English.
That is the normal shape of a localized listing and better than nothing, but a
Turkish visitor still sees an English UI in the picture. Shooting the app in
each language is the fix, and it comes with the real captures.

Both stores key screenshots off **language**, not country: you add a
localization and it is shown to whoever reads the store in that language. Play
also has *custom store listings*, which can be targeted by country — a separate
feature, and these files work there too.

Shots 9 and 10 are the exception: their screens are localized for real, every
word on them read out of the app's own locale files (below).

None of this copy has been read by a native speaker except the Turkish. Have
each one checked; a headline is the most-read sentence in a listing.

## The ten shots

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
| 9   | Incoming call  | white  | duo, the thread it came from behind | Call your partner      |
| 10  | Chat camera    | yellow | duo, two view-once rows behind | Seen once, then gone        |

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

### Shots 9 and 10: 2.9's calls and chat camera

Added on 2026-10-06 for 2.9, after the eight rather than among them, so the
eight the stores already hold keep their numbers and order. Ten is what an App
Store slot holds, so the iPhone and iPad slots are now full. If calls should
reach the installation sheet, that is a reorder — moving 9 into the first
three — and a decision about the set, not something these files assume.

| #   | Front phone                                   | Behind it                                         |
| --- | --------------------------------------------- | ------------------------------------------------- |
| 9   | An incoming video call from Lucía, ringing: Decline, Answer, Answer without camera | Her thread, with the row an earlier call left (Incoming video call · 14:32 · Call back) and the call button in the header |
| 10  | The chat camera's preview after a photo: View once, Allow replay, Keep in chat, and the send button | The other side: one view-once photo Opened, a newer one waiting with Tap to view |

**These screens are not the site's.** langx.io has no call or camera screen to
render, so `../goldie/screens/screens.html` draws them from the app's own
source — `CallHost.tsx`, `chat-camera.tsx`, `ChatScreen.tsx` and
`MessageBubble.tsx` in `langx/langx`: the same sizes, the theme's colours,
Nunito where the app sets it and the platform face where it does not, and
Feather, the app's icon font, for every glyph. And **every word on them comes
from the app's locale files** for that language, read at render time — so the
Turkish shot says "Gelen görüntülü arama" because the app does. The Spanish in
the threads is the conversation itself, demonstration data like the names and
the 9:41.

Two things in them are drawn rather than captured: the photo in the camera is
an illustrated sunset (`screens/photo.svg`), so no one's real picture is in a
store shot, and the face is the same AI-generated Lucía as in shots 1–8.

**Arabic is mirrored, screen and composition both.** The screens are right to
left, as the app is in Arabic, so the two duos are turned round there as well —
otherwise the half of each thread that matters would sit behind the front
phone. Shot 5's duo is not turned: its screens are the English renders.
goldie sets type on a left-to-right canvas, where a closing full stop (or a
comma or dash a wrap leaves last on a line) is drawn at the wrong end of an
Arabic line. `../goldie/rtl.mjs` puts an invisible U+200F after every
punctuation mark in right-to-left copy before it is drawn, so the stop sits at
the left end where an Arabic line finishes. It applies to every shot and to the
per-language feature graphic, so all ten Arabic shots are right; the copy in
`goldie.config.ts` carries no marks of its own.

The copy:

| Locale | 9 headline / support line | 10 headline / support line |
| ------ | ------------------------- | -------------------------- |
| en     | Call your partner / Voice and video, right from the chat. Free for everyone. | Seen once, then gone / Tap for a photo, hold for a video. Send it as View once. |
| tr     | Pratik arkadaşını ara / Sesli ve görüntülü, doğrudan sohbetten. Herkese ücretsiz. | Bir kez görülür, sonra kaybolur / Fotoğraf için dokun, video için basılı tut. Bir kez görüntüle olarak gönder. |
| es     | Llama a quien practica contigo / Voz y vídeo desde el propio chat. Gratis para todos. | Se ve una vez y desaparece / Toca para foto, mantén para vídeo. Envíalo como Ver una vez. |
| ru     | Позвоните партнёру / Аудио и видео прямо из чата. Бесплатно для всех. | Один раз — и всё / Нажмите — фото, удерживайте — видео. Отправьте как «Один просмотр». |
| ar     | اتصل بشريكك / صوت وفيديو من داخل الدردشة مباشرةً. مجانًا للجميع. | يُشاهَد مرة ثم يختفي / اضغط لصورة، واضغط مطولًا لفيديو، وأرسلها بخيار عرض مرة واحدة. |
| fr     | Appelle ton partenaire / Voix et vidéo, directement depuis la discussion. Gratuit pour tous. | Vue une fois, puis disparue / Touche pour une photo, maintiens pour une vidéo. Envoie-la en Voir une fois. |
| de     | Ruf deine Übungspartner an / Sprach- und Videoanrufe direkt aus dem Chat. Kostenlos für alle. | Einmal gesehen, dann weg / Tippen für Foto, halten für Video. Als „Einmal ansehen“ senden. |
| pt-BR  | Ligue para quem pratica com você / Voz e vídeo direto da conversa. Grátis para todo mundo. | Vista uma vez, depois some / Toque para foto, segure para vídeo. Envie como Ver uma vez. |

"Free for everyone" is true on every plan — calls are not a plan limit
(`CALL_LIMITS` in `packages/shared`) — and it is the claim 2.9's promotional
text makes. The camera's support lines use the app's own words for the gesture
and the mode, so the shot and the button under the reader's thumb say the same
thing. As with the rest, only the Turkish has been read by a native speaker.

## Creative assets (App Store, iOS 27)

`<locale>/ios/creative/`, one pair per language:

| File          | Size        | App Store Connect slot           |
| ------------- | ----------- | -------------------------------- |
| `header.png`  | 3840 × 1646 | Product page header (21:9)       |
| `search.png`  | 3840 × 2560 | Search results (3:2)             |

Both are opaque RGB PNG, well under 5 MB. Neither is a screenshot and Apple
asks them to carry the app's value and brand rather than its interface, so each
is the lockup and **one line** on the yellow ground, with two of 2.9's phones —
the call in front, the camera behind — as the picture, not the subject.

- **Header:** the line is the store subtitle the listing already carries in
  every language, "Practice with real people". The banner is cropped on
  narrower screens, so the lockup and the line sit inside the middle 70% across
  and 76% down; only the phones run past it.
- **Search:** the line is 2.9's promotional text cut to its first clause, "Call
  the people you practice with", set large and centred, because the card is
  seen small.

No prices, no rankings, no other app's name. Arabic mirrors both.
`../goldie/creative.mjs` draws them.

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
