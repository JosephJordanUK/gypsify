Current phase focus: Phase 3 — Authentication & Firebase

# Gypsify — Step-by-Step Checklist (Section T)

Status legend: ✅ DONE · 🚧 IN PROGRESS · ⏭️ NOT STARTED

---

## Step Gate (must pass before coding)

* Fresh tracker sync & consistency checks passed ✅
* Current Phase/Step explicitly approved (“proceed”) ✅
* Impacted files loaded from latest bundle or raw ✅
* **Permalinks check**: open 3 random raw links → HTTP 200 ✅
* Environment constraints (Section C) checked ✅
* No open Critical/High incidents blocking this step ✅

## Definition of Done (per step)

* iOS and Android build/launch locally
* `yarn lint` passes; tests for touched areas pass; ≥80% coverage on critical modules (unless waived)
* File Tracking Blocks emitted for all changed files
* **Mini-manifest bump** only for files touched this step
* `/prompt/checklist.md` updated
* **Docs updated** (README or ADRs) when applicable
* i18n keys added/used for any UI strings
* If deps changed: include compatibility note + rollback path

**Between steps run**

```bash
yarn lint
npx expo start
```

## Per-Step Quality Checks

* **Accessibility**: roles/labels set, 44×44dp targets, Dynamic Type, AA contrast
* **Performance**: cold start unaffected; gz bundle < 1.8 MB; no new jank
* **Security**: no PII in logs; tokens not persisted; Firestore rules least-privilege

## Global Networking & Caching

* Base URL per env resolved from `EXPO_PUBLIC_*`
* React Query defaults set (staleTime, retry, backoff)
* Localized network errors (i18n) and offline fallbacks verified

---

## Phase 1: Project Setup ✅ (baseline complete)

**Already completed:**

* Base configs: README.md, app.json, tsconfig.json, .gitignore ✅ DONE
* Canonical folders (/src/{components,hooks,navigation,screens,services,store,styles,theme,types,utils}, /assets) ✅ DONE
* ESLint + Prettier + Husky pre-commit hooks ✅ DONE
* Expo TypeScript project initialized (`npx expo`) ✅ DONE
* Git repo initialized; branch naming (feature/*, fix/*, hotfix/\*) ✅ DONE
* Scaffold commit (step-0-initial-scaffold) ✅ DONE

**Backlog (to be completed after Phase 3):**

* Toolchain pins (`.nvmrc=20.19.4`, Yarn 1.22.22, lockfile committed) ⏭️ BACKLOG
* Expo SDK pinned (53.x) and `expo doctor` clean ⏭️ BACKLOG
* TS strict config (`"strict": true`, `"noImplicitAny": true`, `"exactOptionalPropertyTypes": true`, `baseUrl: "src"`, alias `@/*`) ⏭️ BACKLOG
* ESLint rules (`unused-imports`, `import/order`, no console in prod) + single Prettier source ⏭️ BACKLOG
* NativeWind/Tailwind setup (babel plugin, tailwind.config.js) ⏭️ BACKLOG
* i18n scaffold (`assets/locales/en.json`; nav/auth keys) ⏭️ BACKLOG
* Assets placeholders (icon/splash wired in app.json) ⏭️ BACKLOG
* Env scaffolding (`.env.development`, `.env.production`, EXPO\_PUBLIC\_\* flags) ⏭️ BACKLOG
* Feature flags scaffold (`/src/config/flags.ts` reading `EXPO_PUBLIC_*`; CI var mapping noted) ⏭️ BACKLOG
* Git safety: `pull.rebase=true`, `rebase.autoStash=true` ⏭️ BACKLOG
* Repo hygiene: `.editorconfig`, LICENSE (if applicable) ⏭️ BACKLOG

---

## Phase 2: Navigation & Routing ✅ (baseline complete)

**Already completed:**

* Auth screens (Login, Signup, Password Reset) ✅ DONE
* Root navigator (Stack + Tabs) ✅ DONE
* Splash → Onboarding wizard → Language Selection → Auth → Main ✅ DONE
* Tabs: Home / Search / Library / Profile ✅ DONE
* Commit navigation + screens ✅ DONE

**Backlog (to be completed after Phase 3):**

* Type-safe param lists for all stacks/tabs ⏭️ BACKLOG
* Deep link config (prefixes, routes) + test on iOS/Android ⏭️ BACKLOG
* Android back behavior and state restore on cold start ⏭️ BACKLOG
* Tab icons + i18n labels ⏭️ BACKLOG
* Screen analytics hook (screen\_view events) ⏭️ BACKLOG
* A11y: labels/roles for tabs; focus order check ⏭️ BACKLOG
* Navigation persistence disabled in private flows (Auth) ⏭️ BACKLOG
* Mini-player frame persists across stacks/tabs ⏭️ BACKLOG
* Playlist & Album detail scaffolds ⏭️ BACKLOG

---

## Phase 3: Authentication & Firebase 🚧 (current focus)

**Completed:**

* Configure env (.env.development / .env.production) ✅ DONE
* Email/Password auth ✅ DONE
* Guest login mode ✅ DONE
* Install Firebase SDK (Auth, Firestore, Storage, Analytics, Crashlytics) ✅ DONE
* Security rules (email\_verified gate) ✅ DONE
* Commit auth system ✅ DONE

**In progress / upcoming:**

* Firestore user schema doc (Listener/Artist/Admin) + seed script stub ⏭️ NOT STARTED
* Google OAuth ⏭️ NOT STARTED
* Apple Sign-In ⏭️ NOT STARTED
* Profile CRUD ⏭️ NOT STARTED
* VerifyBanner UI integrated ⏭️ NOT STARTED
* Auth UX (localized errors, sign-out clears caches) ⏭️ NOT STARTED
* userSlice ⏭️ NOT STARTED
* Security rules tests ⏭️ NOT STARTED
* Analytics & Crashlytics (auth funnel, smoke test) ⏭️ NOT STARTED
* Migrations stub (`/src/services/migrations/` with v0 policy file) ⏭️ NOT STARTED
* Unit + integration tests (login → home happy path) ⏭️ NOT STARTED

---

## Phase 4: Home & Discovery

* Skeleton loaders and empty states ⏭️ NOT STARTED
* React Query caching + pagination; offline fallback ⏭️ NOT STARTED
* Sections: Featured, Recommended, Recently Played, Trending ⏭️ NOT STARTED
* Analytics: impressions and taps per module ⏭️ NOT STARTED
* A11y roles for carousels; scroll indicators ⏭️ NOT STARTED
* Commit home features ⏭️ NOT STARTED

---

## Phase 5: Search

* Debounce input; cancel in-flight requests ⏭️ NOT STARTED
* Recent searches (persisted) + clear ⏭️ NOT STARTED
* Error states: no results, offline ⏭️ NOT STARTED
* Query caching TTL; min chars before query ⏭️ NOT STARTED
* Tabs: Songs / Artists / Albums / Playlists ⏭️ NOT STARTED
* Search bar + autocomplete ⏭️ NOT STARTED
* Analytics: search\_query, search\_result\_tap ⏭️ NOT STARTED
* A11y: input hints, clear-button label ⏭️ NOT STARTED
* Commit search module ⏭️ NOT STARTED

---

## Phase 6: Library & Playlists

* State persistence for library views (redux-persist/AsyncStorage) ⏭️ NOT STARTED
* Playlist creation & editing (validations, privacy) ⏭️ NOT STARTED
* Favorites toggling optimistic with rollback ⏭️ NOT STARTED
* Downloads list shows size and status; empty/failed states ⏭️ NOT STARTED
* Tabs: Playlists / Favorites / Downloads ⏭️ NOT STARTED
* **playlistSlice** ⏭️ NOT STARTED
  Shape defined (tracks\[], ownerId, privacy, artwork); optimistic add/remove/reorder; persisted
* Analytics: playlist\_create/edit, favorite\_toggle ⏭️ NOT STARTED
* Downloads integration (Firebase Storage) ⏭️ NOT STARTED
* Commit library module ⏭️ NOT STARTED

---

## Phase 7: Music Playback

* Audio engine (expo-av initially) ⏭️ NOT STARTED
* AudioService API (play/pause/seek/skip/shuffle/repeat) ⏭️ NOT STARTED
* Background playback + lockscreen controls (MediaSession) ⏭️ NOT STARTED
* Media metadata updates during playback ⏭️ NOT STARTED
* Error handling: next-track fallback on decode errors ⏭️ NOT STARTED
* Full-screen Player ⏭️ NOT STARTED
* Mini-player with progress ⏭️ NOT STARTED
* Queue management ⏭️ NOT STARTED
* playerSlice (Redux) ⏭️ NOT STARTED
* Analytics: playback\_start/complete/skip/seek/buffer ⏭️ NOT STARTED
* Tests: service unit tests with mocked `expo-av` ⏭️ NOT STARTED
* Commit playback module ⏭️ NOT STARTED

---

## Phase 8: Offline Mode

* Download queue with retries (×2) and pause/resume ⏭️ NOT STARTED
* Disk-space check before enqueue; per-track size display ⏭️ NOT STARTED
* Storage index in MMKV/SQLite; reconcile on launch ⏭️ NOT STARTED
* Clear downloads on sign-out ⏭️ NOT STARTED
* Offline guard: route to downloads when network missing ⏭️ NOT STARTED
* Track & playlist downloads ⏭️ NOT STARTED
* Quality selector (low/med/high) ⏭️ NOT STARTED
* Storage cleanup ⏭️ NOT STARTED
* Sync back when online ⏭️ NOT STARTED
* Commit offline features ⏭️ NOT STARTED

---

## Phase 9: Social Core

* Moderation flags; report/block flows ⏭️ NOT STARTED
* Rate limits for posts/comments ⏭️ NOT STARTED
* Privacy: who can comment/follow ⏭️ NOT STARTED
* Activity feed (followed users/artists) ⏭️ NOT STARTED
* Posts: text + images (videos post-MVP if approved) ⏭️ NOT STARTED
* Comments & likes ⏭️ NOT STARTED
* Analytics: follow, like, comment, post events ⏭️ NOT STARTED
* A11y: actionable labels on buttons ⏭️ NOT STARTED
* Commit social module ⏭️ NOT STARTED

---

## Phase 10: Artist Tools (MVP)

* Upload UI with progress/cancel; file pick constraints ⏭️ NOT STARTED
* Client validations: format/bitrate/size; explicit flag checkbox ⏭️ NOT STARTED
* Metadata capture: title/artist/album/art; preview playback ⏭️ NOT STARTED
* Draft vs published states ⏭️ NOT STARTED
* Artist profile management ⏭️ NOT STARTED
* Analytics: upload\_start/success/fail ⏭️ NOT STARTED
* Commit artist essentials ⏭️ NOT STARTED

---

## Phase 11: Monetization

* Paywall screen with feature matrix ⏭️ NOT STARTED
* Subscriptions (purchase + restore) ⏭️ NOT STARTED
* Entitlement gating for premium features ⏭️ NOT STARTED
* Receipt validation stub (Functions) ⏭️ NOT STARTED
* Analytics: paywall\_view, purchase\_start/success/fail, restore ⏭️ NOT STARTED
* Premium sub (\$4.99/mo baseline) ⏭️ NOT STARTED
* Ads for free tier (between songs) ⏭️ NOT STARTED
* Unlock premium features (ad-free, offline, HQ audio) ⏭️ NOT STARTED
* Commit monetization ⏭️ NOT STARTED

---

## Phase 12: Analytics & Crash Monitoring

* Event schema doc (names, params); lint for event names ⏭️ NOT STARTED
* DebugView verification in development ⏭️ NOT STARTED
* Crashlytics: non-fatal smoke + breadcrumbs at key actions ⏭️ NOT STARTED
* Privacy: GDPR opt-out toggle wired ⏭️ NOT STARTED
* Crashlytics integration ⏭️ NOT STARTED
* Firebase Analytics events (auth, playback, downloads, subs) ⏭️ NOT STARTED
* Optional Sentry setup ⏭️ NOT STARTED
* Commit analytics ⏭️ NOT STARTED

---

## Phase 13: UI/UX Polish

* Design tokens: color, spacing, radius, typography scale ⏭️ NOT STARTED
* Haptics on key actions (expo-haptics) ⏭️ NOT STARTED
* RTL pass; large text pass; contrast AA ⏭️ NOT STARTED
* Motion: durations/curves; respect reduce-motion ⏭️ NOT STARTED
* Dark mode default + light toggle ⏭️ NOT STARTED
* Responsive layouts (phones/tablets) ⏭️ NOT STARTED
* Smooth animations/transitions (Reanimated/native driver) ⏭️ NOT STARTED
* Theming (rounded components, consistent spacing/typography) ⏭️ NOT STARTED
* Accessibility pass (screen reader, font scaling, contrast) ⏭️ NOT STARTED
* Commit UI polish ⏭️ NOT STARTED

---

## Phase 14: Testing & QA

* Jest + RN Testing Library configured; Firebase/AsyncStorage mocks ⏭️ NOT STARTED
* Coverage thresholds set; critical modules list ⏭️ NOT STARTED
* Detox config for iOS/Android; smoke scenario scripted ⏭️ NOT STARTED
* CI runs lint, unit, e2e (smoke) on PR ⏭️ NOT STARTED
* Device testing on real hardware ⏭️ NOT STARTED
* E2E (Detox on iOS/Android) ⏭️ NOT STARTED
* Integration tests (auth → playback → downloads) ⏭️ NOT STARTED
* Regression suite ⏭️ NOT STARTED
* Unit tests (auth, player, downloads) ⏭️ NOT STARTED
* Commit test coverage ⏭️ NOT STARTED

---

## Phase 15: Build & Deployment

* EAS project ID in `eas.json`; channel/branch mapping ⏭️ NOT STARTED
* Versioning rules: bump in `app.json` per release ⏭️ NOT STARTED
* iOS signing and capabilities checklist; Android keystore handling ⏭️ NOT STARTED
* Store metadata placeholders; release notes template ⏭️ NOT STARTED
* Post-build smoke checklist (launch, login, nav, play) ⏭️ NOT STARTED
* Configure EAS Build ⏭️ NOT STARTED
* iOS build (Xcode/CocoaPods) ⏭️ NOT STARTED
* Android build (Gradle/JDK 17) ⏭️ NOT STARTED
* TestFlight / Internal testing tracks ⏭️ NOT STARTED
* **Release management** ⏭️ NOT STARTED
  SemVer bump + Git tag + CHANGELOG update; EAS Submit flows; create V.8 Deployment & Monitoring Status Log entry
* Commit deployment artifacts ⏭️ NOT STARTED

---

## Phase 16: Post-Launch

* Incident response runbook link; severity matrix ⏭️ NOT STARTED
* KPIs: DAU/WAU/MAU, crash-free %, playback completion %, premium conversion ⏭️ NOT STARTED
* Feedback channels and triage cadence ⏭️ NOT STARTED
* Monthly dependency/security update task ⏭️ NOT STARTED
* OS beta test schedule and compatibility sweep ⏭️ NOT STARTED
* Push notifications (Expo + FCM/APNs) ⏭️ NOT STARTED
* Personalized recommendations (basic rule-based) ⏭️ NOT STARTED
* Translations (multi-language UI) ⏭️ NOT STARTED

---

### Incident Handling

When errors arise, pause the checklist and use Section J+ “Error Report Template”.