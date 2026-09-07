# 2.0 — press images

The v3 app screens, light and dark, at 1170 × 2532 (a 390 × 844 device at 3×).
Seven screens: Discover, Chat, Feed, Me, Paywall, Tokens and Welcome back.

**These are mockups, not device captures.** They are rendered from the phone
components on langx.io — `src/lib/components/phone/` in `langx/website`, where
`PhoneFrame` draws the device and each screen is real HTML in the app's own
sizes. That is what makes them press-safe and what limits them:

- **Safe to publish.** Nothing here came from an account. The names, messages
  and numbers are demonstration data, and the six faces are AI-generated
  portraits — none of those people exist (`static/images/people/README.md` in
  that repo says where they came from).
- **Not store screenshots.** Both stores ask for pictures of the app in use.
  Use these for press, social, the site and decks; shoot
  [`../../2.0.x/`](../../2.0.x/) from a real build.

They also drift the same way everything else in this repo does: the site's
components are maintained, these PNGs are not. Re-render them when the app's
screens change, rather than retouching them.

The rest of `marketing/` is 0.3.x, drawn in v1's identity.
