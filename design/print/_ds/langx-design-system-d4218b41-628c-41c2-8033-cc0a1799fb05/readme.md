# LangX Design System

**LangX** ([langx.io](https://langx.io)) is a language-exchange app: you practise a language with someone who is learning yours. The core loop is chat → correction → feed. Corrections are always free; Copilot (AI help) and filters sit behind Pro / Pro+. Tokens are earned by teaching and spent on profile frames and titles; they are not on a blockchain and cannot be bought or cashed out.

Products represented:
- **Mobile app (2.x, Expo)** — the only shipping surface. Tabs: Discover · Chats · Feed · Me. This is what the UI kit recreates.
- **langx.io website** — the same palette under its own names (`DESIGN.md` in `langx/website`, not attached). Not recreated here.
- **Store & marketing artwork** — store shots, social posts, OG image; copied to `assets/marketing/`.

This is the **v3 identity**: Nunito, one blue for everything interactive, yellow exactly once per screen, no card layer. Everything before it (Comfortaa, yellow chrome, cards on grey) is archive and must not be used.

## Sources

- GitHub `langx/branding` (https://github.com/langx/branding), branch `main`. Read: `BRAND.md`, `brand/tokens.css`, `brand/tokens.json`, `brand/print.md`, `README.md`, `2.x/README.md`, `marketing/2.x/README.md`, `design/mobile-app/LangX App.dc.html` (the 64-route prototype the UI kit is built from). Copies of the four brand documents are in `guidelines/source/`.
- Referenced but not attached: `langx/langx` (`apps/mobile/src/lib/theme/tokens.ts` is the real source of truth for colour, type and spacing; `apps/mobile/src/components/ui/*.tsx` are the shared controls) and `langx/website` (`DESIGN.md`). Explore those repos to go beyond what is here.
- User brief: business cards from jukeboxprint.com, Soft Touch, Standard 3.5" × 2" → `templates/business-card/`.

## Content fundamentals

- **Voice:** plain, direct, matter-of-fact. Short sentences, no exclamation marks in UI (they appear only in demonstration chat messages). "Have a look first — you can pick your languages and see who is here before you sign up for anything."
- **Person:** the app speaks to *you*; it never says "we". Rows read as things you own: "Who viewed your profile", "Preview my profile", "Edit profile".
- **Casing:** sentence case everywhere — titles, rows, buttons ("Send correction", "Look around first", "Create an account"). Button labels are *rendered* uppercase by the type style, not written that way. Eyebrows ("CORRECTION FROM YUKI", "TEACHES") are 12px 700 uppercase with 0.04em tracking.
- **Headlines** (store, social): claims, five words or fewer, often two clauses: "Say it wrong. Get it fixed." · "They need your language" · "Corrections are always free" · "It has a night side".
- **Empty states:** a title in Nunito 800 20px plus one calm sentence and a blue text action: "Nobody here yet — People whose languages match yours in both directions show up here. Try loosening the filters."
- **Toasts** are one sentence, past tense, with a full stop: "Language changed." "Recording sent. Thank you."
- **Emoji:** never in UI chrome. Flags appear as data (a person's country); ✍️ marks a correction in a chat preview; ✦ prefixes "Go further" (Pro). Demonstration chat text may contain emoji because people do.
- **Numbers:** big Nunito numerals; counts spelled with locale separators ("1,240"). Plans are named, not numbered: Free · Pro · Pro+ (marketing: Fluent · Polyglot).
- **What the copy must never say:** anything that implies tokens are money (coin, buy, withdraw, wallet address); "coming soon" content in store artwork.

## Visual foundations

- **Colour.** White ground (`#ffffff`) in light, `#1c1f24` in dark. One grey box, `--fill` `#f4f5f7`. Hairlines `--border` `#e8eaec`. Text `#17191c` / muted `#62676d` / faint `#9aa1a7`. **Yellow `#ffc409`** is the committing action, once per screen, identical in dark, with label `#201900`. **Blue `#3b6cf6`** is everything interactive: links, tabs, toggles, level bars, your own bubble (`--accent-bg` `#e9f0fe`), Copilot. **Green `#009f70`** is a correction, always. Orange `#f79009` streaks; violet `#7a5af8` Pro, `#5b21b6` Pro+; red `#e5484d` danger/unread. `ink` is text used as a fill and inverts with the ground.
- **Type.** Nunito 800 for titles (30; tab roots 34), headings (20), row titles and names (17), buttons (15, uppercase, 0.8px tracking), big numerals (26–88). Body is the platform stack: 15–16 regular, labels 13/600, captions 12. Nunito is the only webfont (Google Fonts; SIL OFL).
- **Spacing.** 4 · 8 · 12 · 16 · 24 · 32 · 48. Screen gutter 20 (auth screens 24). Rows are 18px vertical padding between hairlines. Content max 720px.
- **Radius.** 8 · 12 · 16 · 24 · 28 · pill. Buttons 16, tips and correction blocks 16, bubbles 20 with a 6px tail corner, sheets 28 top only, inputs and chips pill, phone frame 44.
- **Backgrounds.** Flat colour only. No gradients, no textures, no patterns, no illustration. Imagery is the app's own screens, cut to a card and set on yellow, white or ink with a headline above.
- **Cards.** There is no card layer. Structure is hairline dividers and whitespace; the exceptions are `--fill` boxes (tips, search, inputs, their bubble), `--accent-bg` (your bubble, Go further), `--success-bg` (corrections).
- **Shadow.** Almost nothing floats: sheets (`0 -8px 38px 14%`), the segmented thumb (`0 1px 3px 8%`), the committing button and toasts (`0 4px 10px 6%`; 40% in dark). Buttons carry a hard 4px shade below (`--primary-shade`) rather than a blur.
- **Hover.** Yellow lightens to `#ffcf33`; outline buttons fill with `--fill`; text buttons gain `--accent-bg`; links darken to `#2f56c4`.
- **Press.** Buttons travel down 4px and lose their shade (`translateY(4px)`, `box-shadow:none`). Rows dim to 60–70% opacity. Icon buttons show a `--fill` disc.
- **Focus.** 2px `--accent` outline, 2px offset. Inputs turn white with a blue hairline.
- **Animation.** Rows and bubbles `rise` in (10px up, 0.3–0.4s ease-out, 60ms stagger). Sheets slide up in 0.36s `cubic-bezier(.32,.72,0,1)`. The send button `pop`s in (scale .6→1, 0.2s). Typing dots `blink` 1.2s. Segmented and toggle transitions 0.2s ease-out. No bounces, no parallax.
- **Transparency and blur.** Scrim `rgba(0,0,0,.45)` under sheets; `.94` for the photo lightbox. Blur (6px) is used once: locked "who viewed you" avatars. No frosted glass.
- **Borders.** 1px hairlines for dividers and unselected chips; 2px for outline buttons and radios; nothing thicker.
- **Layout.** Fixed status bar (50), fixed tab bar (border-top, 10/8/24 padding), scrolling middle. Titles left-aligned; actions right. Yellow button pinned at the end of a flow.
- **Imagery.** Avatars are initials on a tone disc (blue, green, violet, ink); marketing faces are AI-generated portraits. Neutral colour temperature, no grain, no filters.
- **Dark mode.** Same yellow, same knob white, same scrims; every other token has a dark value (see `tokens/colors.css`). Data grounds go `#1c1f24`, blue lifts to `#7c9cf9`, green to `#34c796`.

## Iconography

- **Feather**, through `@expo/vector-icons`. Line icons, stroke 2.5 in the prototype, round caps and joins, no fills, no second family. Tab icons: search · message-square · list · user. A 40-glyph subset ships in `components/core/Icon.jsx` (paths copied from the prototype); anything else is available from Feather at the same weight.
- **Token iconography is an App Review question, not taste.** No coin, chain or wallet glyphs and no wallet addresses; use `award` and `gift`. Gold (`frame.gold`) must read as a bought rank.
- No icon font, no PNG icons, no emoji as icons. Unicode appears only as `›` on stat labels, `·` separators, `↔` between language pairs (rendered in blue) and `✦` before Pro.
- **Brand marks** (`assets/logo/`): `mark.svg` on yellow, `mark-ink.svg`, `mark-arcs.svg` bare, `mark-mono.svg` in `currentColor`, both horizontal lockups (wordmark outlined), `logo-rounded.png`. App icons and splash badges in `assets/icon/`, `assets/splash/`; favicons in `assets/favicon/`. Never recolour the arcs; never place the bare arcs on white or ink — bring the ground.

## Index

- `styles.css` — imports everything in `tokens/` (fonts, colors, typography, spacing, base).
- `tokens/` — `colors.css` (light/dark + semantic aliases), `typography.css`, `spacing.css` (space, radius, motion), `fonts.css` (Nunito from Google Fonts), `base.css` (resets, keyframes `lx-rise` `lx-blink` `lx-sheet-up` `lx-pop`).
- `guidelines/` — specimen cards (Colors, Type, Spacing, Brand) and `source/` copies of BRAND.md, print.md, tokens.css, tokens.json.
- `assets/` — `logo/`, `icon/`, `splash/`, `favicon/`, `screens/` (marketing renders, light and dark), `marketing/` (store shots, social square, OG), `qr/` (get.langx.io QR, verified to decode).
- `components/` — see below.
- `ui_kits/mobile-app/` — the app, clickable (`index.html`).
- `templates/business-card/` — Jukebox Print Soft Touch 3.5×2 card, two sides, bleed and safety guides.
- `thumbnail.html`, `SKILL.md`, `github.md`.

### Components

Inventory follows the prototype's shared controls (`apps/mobile/src/components/ui`: Button, SegmentedControl, ListRow, StatTile, ScreenHeader) plus the helpers the prototype draws inline.

- `core/` — **Button** (primary yellow · outline · outlineAccent · danger · ink · text), **Icon** (Feather subset; exports `ICON_PATHS`)
- `forms/` — **Input** (pill, multiline), **SegmentedControl**, **Chip**, **Toggle**, **Radio**
- `display/` — **Avatar**, **LevelBars**, **Badge**, **StatTile**, **ProgressBar**
- `lists/` — **ListRow**, **ScreenHeader** (+ `HeaderAction`), **TabBar** (+ `DEFAULT_TABS`)
- `chat/` — **ChatBubble** (+ `TypingIndicator`), **CorrectionCard** (+ `CopilotCard`)
- `feedback/` — **Toast**, **Sheet**

Intentional additions (not named in the source inventory, but drawn repeatedly in the prototype): Icon wrapper, Avatar, LevelBars, Badge, ProgressBar, Chip, Toggle, Radio, Input, TabBar, ChatBubble, CorrectionCard, CopilotCard, Toast, Sheet.

## Caveats

- Nunito is loaded from Google Fonts, not vendored (the source repo does the same; the OFL text must travel with any vendored copy).
- The real source of truth (`langx/langx` `tokens.ts`) was not attached; values are from `brand/tokens.css`, which its authors mark as hand-copied.
- Business card bleed/safety follow Jukebox's published 0.125" standard; some specialty stocks need 0.25" — confirm for Soft Touch before ordering.
