# design

Design files — the mockups a screen was drawn in, before anyone built it.

Everything else in this repo is finished artwork. This folder is the step
before that, and it is the one place with markup in it: the prototypes are
HTML/CSS/JS because that is the medium they were drawn in, not because
anything here ships. **[`BRAND.md`](../BRAND.md) is still the identity** — a
prototype is a drawing of one, and where the two disagree, `BRAND.md` wins.

| Path                | What                                                        |
| ------------------- | ----------------------------------------------------------- |
| `mobile-app/`       | every screen of the 2.x Expo app, drawn in the v3 language   |

## `mobile-app/`

A handoff bundle exported from [Claude Design](https://claude.ai/design) on
2026-09-06, covering all 64 routes under `apps/mobile/app` in
[`langx/langx`](https://github.com/langx/langx).

- **`LangX App.dc.html`** — the interactive prototype. Every route, light /
  dark / auto, with enough state simulated to walk a flow end to end.
- **`LangX Screens.dc.html`** — the same screens as a board, grouped by route
  group, each one live. This is the overview; open it first.
- **`github.md`** — the screen map: prototype route → the `.tsx` files it
  stands for. Also records where the visual language came from — `DESIGN.md`
  in `langx/website` and `apps/mobile/src/lib/theme/tokens.ts` — and that the
  copy is `src/i18n/messages/en.ts`.
- **`HANDOFF.md`** — the export's own note to whoever implements it.
- **`support.js`** — the Claude Design runtime the two `.dc.html` files need.
  Generated; do not edit.
- **`assets/`** — the prototype's own copies of four files from this repo, at
  the paths it resolves them from. They were taken before the repo was
  reorganised, so the names inside are the old ones: `assets/rounded/logo.png`
  is now [`../brand/logo/logo-rounded.png`](../brand/logo/logo-rounded.png)
  and `assets/icon/` is now [`../brand/favicon/`](../brand/favicon/).
  Byte-identical to the originals except the pinned-tab SVG, which is the same
  artwork with its whitespace stripped. `brand/` is the source; these are
  copies, and the prototype needs them at these paths to render.
- **`_ds/`** — two stock design systems (Modernist, Organic) that Claude
  Design ships with every export. Neither is ours — one is red Archivo, the
  other tan Caprasimo — and neither prototype links them. Kept so the bundle
  still opens in the tool it came from; ignore them otherwise.

Open either `.dc.html` in a browser straight from disk. Nothing to build, no
server. The prototypes pull Nunito from Google Fonts, so the type falls back
to the system stack offline.
