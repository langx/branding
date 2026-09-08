repo: langx/langx
branch: main
path: apps/mobile/app
secondary: langx/website (DESIGN.md, PRODUCT.md — visual language reference); langx/branding (assets/rounded/logo.png, assets/icon/safari-pinned-tab.svg copied to assets/)

## Last sync
date: 2026-09-06T10:05:00Z
### Updated in this project
- Built `LangX App.dc.html` — interactive prototype of all 64 routes, light/dark/auto, full state simulation
- Built `LangX Screens.dc.html` — board of every screen grouped by route group with a theme toggle
- Visual language from website/DESIGN.md + apps/mobile/src/lib/theme/tokens.ts; copy from src/i18n/messages/en.ts

## Screen map
| Screen (prototype route) | Repo files |
| --- | --- |
| intro, welcome, signIn, signUp, forgotPassword, resetPassword, checkEmail, signInLink, verifyEmail, qr | apps/mobile/app/(auth)/*.tsx |
| magicLink | apps/mobile/app/magic-link.tsx |
| obLanguages, obLevels, obAbout, obHandle, obPhoto, obDone, welcomeBack | apps/mobile/app/(onboarding)/*.tsx |
| discover, chats, feed, me | apps/mobile/app/(app)/(tabs)/*.tsx, _layout.tsx |
| chat | apps/mobile/app/(app)/chat/[id].tsx |
| post | apps/mobile/app/(app)/post/[id].tsx |
| profile | apps/mobile/app/(app)/profile/[handle].tsx, apps/mobile/app/[username].tsx |
| compose, filters, editProfile, corrections, badges, blocked, follows, likes, viewers, starred, shareProfile, invite, gift, scan, linkDevice, paywall, kitchen, legal, appLanguage, translateLanguage | apps/mobile/app/(app)/<name>.tsx |
| settings, sPlan, sShare, sPrivacy, sNotifications, sAppearance, sAccount, sAbout, sPassword, sSignInMethods, sDelete | apps/mobile/app/(app)/settings/*.tsx, src/lib/settingsRegistry.ts |
| streak, streakHistory, streakLeaderboard | apps/mobile/app/(app)/streak/*.tsx |
| wallet, walletHistory, walletLeaderboard, walletPool, walletStore | apps/mobile/app/(app)/wallet/*.tsx |
| shared controls (Button, SegmentedControl, ListRow, StatTile, ScreenHeader) | apps/mobile/src/components/ui/*.tsx |
