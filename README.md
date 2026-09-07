# branding

Logos, app icons, store screenshots, press images and the brand animation for
[LangX](https://langx.io). No code, and nothing here is built — it is the
folder every other repo and every store listing takes its artwork from.

**Start with [`BRAND.md`](BRAND.md).** It is the current identity: the mark, the
palette in both colour schemes, the type, and the two iconography rules that
are App Review questions rather than taste.

## What is current

The app has been rebuilt. Version 2.0 is Expo + Fastify
([`langx/langx`](https://github.com/langx/langx)) and it carries the **v3
identity** — Nunito, one blue for everything interactive, yellow exactly once
per screen, no card layer.

| Path                        | What                                                             |
| --------------------------- | ---------------------------------------------------------------- |
| [`BRAND.md`](BRAND.md)      | the v3 identity, written down                                    |
| `app-resources/v2/`         | the icons and splash badges the app ships today, byte-identical  |
| `app-resources/v2/brand/`   | the rounded mark and the horizontal lockup, light and dark       |
| `2.0.x/`                    | store screenshots — the v3 template is there, the captures are not yet |
| `marketing/2.0/`            | seven v3 app screens, light and dark, rendered from the site's phone components |
| `assets/rounded/logo.png`   | the same file as `app-resources/v2/brand/logo-rounded.png`, kept at its old path so existing links hold |
| `assets/icon/`              | the favicon set — exported for v1's web build, still correct because the mark did not change |
| `assets/animated-logo.*`    | the mark, animated; the mark did not change, so it still fits    |

`app-resources/v2/` is copied by hand out of `langx/apps/mobile/assets/`, and
`app.config.ts` in that repo is what decides which file is the icon, which is
the Pro alternate and which two are the splash badges. When the artwork there
changes, copy it here; nothing checks that anyone did.

## What is archive

Kept because a press kit is also a record, and because the store listings for
0.15 were built from it. None of it is the current identity — the screenshots
are Comfortaa, yellow chrome and cards, and they are shots of v1's Ionic app.

| Path                            | What                                                          |
| ------------------------------- | ------------------------------------------------------------- |
| `0.1.x/`, `0.3.x/`              | store screenshots, iOS and Android, January 2024               |
| `app-resources/` (root), `v0.6/`| v1's icon and its 3600² splash                                 |
| `assets/image/badges/`, the rest of `assets/rounded/` | the v1 badge art — badges are not in 2.0's first release |
| `assets/icons/`                 | v1's PWA icon set, webp — note the `s`, `assets/icon/` is the favicons |
| `assets/image/how-it-works-*.png` | the three explainer images from the v1 site                 |
| `assets/logo-horizontal.png`    | the Comfortaa wordmark                                        |
| `marketing/` (root)             | 0.3.x promo images, the featured graphics and the preview gif |
| `video/`, `animations/`         | the 2024 brand film and the projects behind it — the mark holds, but the type and the UI in it are v1's |
| `copilot/`                      | the AI Language Copilot deck and the Discord instruction cards |

The v1 mark itself did not change — `app-resources/v2/icons/default.png` and
`app-resources/icon-only.png` are the same file. What v3 added is the dark Pro
icon and the two splash badges.

## Adding a release's store screenshots

One folder per marketing version, named the way `0.1.x/` and `0.3.x/` are, and
inside it the shape the stores ask for:

```
<version>/
  ios/6.7/       1..n.png    iPhone
  ios/12.9/      1..n.jpg    iPad
  android/phone/ 1..n.png
  android/10tablet/
```

The shots are compositions, not raw captures: a headline over the screen, on
the brand ground. [`2.0.x/README.md`](2.0.x/README.md) carries the composition
in numbers, the shot list and the two things that must not appear in a
screenshot; `2.0.x/template/` is that composition rendered empty at each size.

## Rules

- **This repo is public**, like every `langx/*` repo. No credentials, and no
  map of where anything private lives.
- **English on disk**, including file and folder names.
- Assets are large and permanent. Add a new folder rather than overwriting a
  shipped one — a store listing that was built from a file is entitled to keep
  finding it.
