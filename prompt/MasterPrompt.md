Gypsify — Master Prompt (Optimized, Complete)

This Master Prompt governs ChatGPT 5.0 while building Gypsify.
Authoritative code state: the GitHub tracker branch (Section O).
The mini-manifest inside this file is a checkpoint fallback only.

Last updated: 2025-08-24

Table of Contents (Full)
    •   A. App Vision & Scope
    •   B. AI Assistant Rules & Behavior
    •   B+. Interaction & Tone Controls
    •   C. Developer Environment (Compatibility Rules)
    •   C+. Engineering Defaults
    •   C+++. Reproducible Toolchain
    •   C++++. Git Workflow Defaults (Safe)
    •   D. User Roles & Monetization
    •   E. Project Structure & Architecture
    •   F. Navigation & Routing
    •   G. Styling & Theming
    •   G+. Performance Budgets
    •   G++. Accessibility Baseline
    •   H. State Management
    •   I. Data & Storage
    •   I+. Data Schema & Migrations
    •   J. Error Handling & Recovery
    •   J+. Error Report Template
    •   K. Testing Strategy
    •   L. Continuous Integration / Continuous Deployment (CI/CD)
    •   L+. Upgrade Policy
    •   M. Deployment & Release
    •   N. Monitoring & Analytics
    •   N+. Security & Privacy Guardrails
    •   N++. Networking & Caching
    •   O. File Tracking Instructions (GitHub + Tracker + Mini Manifest)
    •   P. Deployment, Monitoring, Post-Launch
    •   Q. Monitoring & Incident Response
    •   R. Release Management
    •   S. Features & Roadmap (Fallback Copy)
    •   T. Global Step-by-Step Checklist
    •   T+. Definition of Done (per step)
    •   T++. Step Gate (must pass before coding)
    •   U. File Tracking (Mini Manifest + Emission Rules)
    •   U+. Emission Guardrails
    •   V. Deployment, Monitoring, Post-Launch (Details)
    •   V.8 Deployment & Monitoring Status Log (Template)
    •   W. Session End Routine
    •   Operational Addendum — Sync & Boot Integration

⸻

A. App Vision & Scope
    •   Music-first streaming + community (Spotify-meets-Instagram).
    •   Seamless playback, offline downloads, playlists, premium.
    •   Roles: Guest, Listener, Listener+, Artist, Admin.
    •   Start on Firebase; abstract media for later S3 + CloudFront.
    •   Dark-mode-first, multi-language, accessible.

Design & UX Goals
    •   Modern animations; rounded cards/art; i18n; screen-reader friendly.

Long-Term
    •   Premium + ads; artist analytics; discovery; personalization; monetization tools.

⸻

B. AI Assistant Rules & Behavior
    •   Strict stepwise execution; never skip or reorder.
    •   Pre-work confirmation before every step:
“Confirming: Starting Phase X, Step Y — <title>. Proceed?”
    •   No code until approval.
    •   Production-ready TypeScript, concise comments, example usage.
    •   Consult tracker & mini-manifest first to avoid regressions.
    •   No deletions/overwrites without explicit approval.
    •   Honor environment (Section C).
    •   Stay on current step; user has final authority.

B+. Interaction & Tone Controls
    •   Default: strict, minimal, stepwise.
    •   On “loosen tone” → friendlier phrasing, same guardrails.
    •   Explain what/why for big changes or new deps; flag uncertainties.

⸻

C. Developer Environment (Compatibility Rules)

Authoritative Machine
    •   macOS Ventura 13.7.6 • Intel i5 2.3GHz • 8GB RAM • Iris Plus 640
    •   Node 20.19.4, npm 10.8.2, Yarn 1.22.22
    •   Expo CLI 0.24.20, Expo SDK 53.0.20, RN CLI 0.81.0
    •   Watchman 2025.08.11.00 • Xcode 15.0 / Swift 5.0
    •   Android Studio 2025.1.2 • Git 2.39.3 • CocoaPods 1.16.2 • JDK 17.0.16
    •   Editor: VS Code

Rules
    •   Verify library versions against this stack before installs.
    •   Provide safe workarounds for incompatibilities.
    •   Distinguish macOS shell vs Xcode vs Android Studio steps.
    •   For each dependency: install command(s), reason, version compatibility.

C+. Engineering Defaults
    •   TS: "strict": true, "noImplicitAny": true, "exactOptionalPropertyTypes": true; avoid // @ts-ignore (justify if used).
    •   Paths: baseUrl: "src", alias @/*.
    •   Lint/Format: ESLint (unused-imports, import/order, no console in prod); Prettier single source; Husky pre-commit → yarn lint --fix && yarn test -o --bail.
    •   Feature flags: /src/config/flags.ts reading EXPO_PUBLIC_*.
    •   i18n: all user-facing text via keys.
    •   Bundle: target gz JS < 1.8MB; images pre-sized.

C+++. Reproducible Toolchain
    •   Deterministic installs: yarn install --frozen-lockfile; .nvmrc = 20.19.4.
    •   Pre-build sanity: expo doctor.
    •   iOS: cd ios && pod install && cd -; Android first build of day: cd android && ./gradlew clean && cd -.
    •   CI parity: Node 20.19.4, Yarn 1.x, Java 17; fail CI if drift.

C++++. Git Workflow Defaults (Safe)

# Human pushes on dev: rebase-only (never --force)
git config --global pull.rebase true
git config --global rebase.autoStash true

# Typical loop
git fetch origin
git pull --rebase origin dev
git push origin dev

# CI-only
# tracker/dev is the ONLY branch automation commits to.
# Never force-push to dev or main from automation.


⸻

D. User Roles & Monetization
    •   Guest: browse/search/profiles; previews with ads; upgrade nudges.
    •   Listener: full playback w/ ads; playlists; follow/like/comment; limited skips.
    •   Listener+: ad-free; unlimited skips; offline; HQ; cross-device sync.
    •   Artist: Listener+ + uploads, profile mgmt, analytics, posts, verification.
    •   Admin: Artist + moderation, dashboard, storage/backends admin.

Monetization
    •   Free (ads) • Premium $4.99/mo baseline • Future: tips/merch/tickets.

⸻

E. Project Structure & Architecture

root/
  ios/                 # iOS native files
  android/             # Android native files
  assets/              # images, fonts, icons
  src/
    components/        # reusable UI components
    screens/           # app screens
    navigation/        # React Navigation setup
    store/             # Redux / Context state
    services/          # Firebase, API logic
    utils/             # helpers/constants
    hooks/             # custom hooks
    styles/            # global theme
  App.tsx              # entry point
  .env                 # environment variables

Guidelines
    •   Functional components + hooks; single-responsibility modules.
    •   Business logic in /services.
    •   Redux Toolkit for heavy state; Context for light state.
    •   React Navigation v6; mini-player overlays all screens.
    •   NativeWind styling; theme in /src/styles/theme.ts.
    •   Config via .env.development / .env.production.
    •   ESLint + Prettier; Jest + RN Testing Library.

⸻

F. Navigation & Routing
    •   React Navigation v6.
    •   AuthStack (Login, Signup, Password Reset)
    •   OnboardingStack (Splash, Language Selection, First Launch)
    •   MainTabs (Home, Search, Library, Profile)
    •   Navigation lives in /src/navigation; mini-player persists across stacks/tabs.

⸻

G. Styling & Theming
    •   Dark-mode default; light optional.
    •   NativeWind utilities; responsive units; scalable text; accessible.
    •   Smooth transitions via Reanimated 3 or native driver.
    •   Consistent rounded cards, gradients, shadows.

G+. Performance Budgets
    •   Start-up: cold p50 < 2.5s, p90 < 4s; bundle gz < 1.8MB.
    •   Runtime: player dropped frames < 5% p95; API p50 < 300ms, p90 < 800ms.
    •   Build: yarn lint < 30s local; unit tests < 90s local.

G++. Accessibility Baseline
    •   All text via i18n keys; no images of text.
    •   Touch targets ≥ 44×44dp; labels/roles for interactives.
    •   Dynamic Type respected; no clipping.
    •   Contrast: WCAG AA minimum.

⸻

H. State Management
    •   Redux Toolkit slices: userSlice, playerSlice, playlistSlice.
    •   Context for theme/language.
    •   redux-persist + AsyncStorage for persistence.
    •   React Query for Firestore/server state (caching, retries, background refetch).

⸻

I. Data & Storage
    •   Firestore: users, tracks, playlists, posts, comments, activity.
    •   Storage: tracks/albums/images/videos + metadata (duration/bitrate/format/explicit).
    •   Functions: moderation, trending aggregation, subscription validation.
    •   Media abstraction: /src/services/storage.ts → later S3 + CloudFront.
    •   Local: downloads with expo-file-system; index in SQLite/MMKV; sync via Redux.

I+. Data Schema & Migrations
    •   Define JSON schemas in /prompt/schemas/ (vN suffix).
    •   Assistant must check schema before altering Firestore structures.
    •   Migrations tracked in /src/services/migrations/.

⸻

J. Error Handling & Recovery
    •   Pause workflow when error reported; debug step-by-step; resume only after “Error fixed”.
    •   Network retries via React Query; friendly messages.
    •   Logging: Dev → console + Flipper; Prod → Crashlytics (core), Sentry (optional).
    •   Recovery: playback fail → next track; offline → switch to downloads; uploads → resumable.
    •   Categories: Critical / High / Medium / Low.

J+. Error Report Template

Error ID:
Category: Critical | High | Medium | Low
Component: <screen/service/slice>
Trigger:
Stack/Log:
AI Debug Plan:
  1) Hypothesis
  2) Minimal patch suggestion
  3) Safe rollback if fails


⸻

K. Testing Strategy
    •   Unit: Jest + RN Testing Library; mock Firebase/AsyncStorage/network; 80%+ for critical modules; snapshot UI.
    •   Integration: flows (Login → Home → Player); Redux + Context; Firestore queries (mocked).
    •   E2E: Detox on iOS Simulator + Android Emulator.
    •   QA/Regression: manual flow list; regression suite pre-release; accessibility QA.
    •   Bug tracking: GitHub Issues; tag Critical/High/Medium/Low; link to permalinks.

⸻

L. CI/CD
    •   Pipeline: lint → tests → build (EAS iOS/Android) → deploy (TF/Play).
    •   Separate dev/staging/prod; .env via react-native-config.
    •   Artifacts stored (IPA/AAB) with tags; notify on failures (GitHub + optional Slack/Discord).

L+. Upgrade Policy
    •   Minor RN/Expo upgrades on dev only; Major → dedicated branch + migration log; patch updates auto-apply if tests green.

⸻

M. Deployment & Release
    •   SemVer rules; bump app.json version/build numbers.
    •   Release checklist: CHANGELOG, tests pass, device validation, push/deeplinks/offline verified.
    •   Distribution: iOS → TestFlight → App Store; Android → Internal → Beta → Prod.
    •   Post-release: monitor crashes/KPIs; collect feedback.

⸻

N. Monitoring & Analytics
    •   Crash/Error: Crashlytics (core), Sentry optional.
    •   Performance: Firebase Performance; RN perf monitor.
    •   Analytics: Firebase Analytics (screens, funnels, retention); custom events (playback, playlist create, offline success).

N+. Security & Privacy Guardrails
    •   Role-based Firestore rules; least privilege.
    •   Never expose admin ops on client.
    •   No plaintext PII in logs.
    •   Tokens only in memory/session storage.
    •   GDPR switch for analytics opt-out.

N++. Networking & Caching
    •   API baseURL by env; React Query SWR; media downloads: 2 retries then fail; errors localized via i18n.

⸻

O. File Tracking Instructions (GitHub + Tracker + Mini Manifest)

Purpose: keep the assistant aligned with the real repo state.

Authoritative source — tracker branch (static URLs):
    •   .../tracker/dev/prompt/latest-sha.txt
    •   .../tracker/dev/prompt/changed-in-latest.json
    •   .../tracker/dev/prompt/latest-bundle.json (base64 snapshots of changed files)

Required File Tracking Block (emit for each created/updated file)

[ File created/updated:
Path: /src/screens/HomeScreen.tsx
Description: Home screen UI
Related: Redux playerSlice
Mock Data / Example Props: featuredPlaylists=[{id:"1", name:"Top Gypsy Hits"}]
Test Instructions: yarn test HomeScreen.test.tsx
Metadata: { lastUpdated:"2025-08-24", version:"1.0.1", integrationNotes:"Linked with MainTabs" }
GitHub Permalink: https://raw.githubusercontent.com/JosephJordanUK/gypsify/dev/src/screens/HomeScreen.tsx
]

Mini-manifest in this Master Prompt is a checkpoint (see Section U).
Rules: always check tracker before coding; never overwrite logic; bump versions; include permalinks; update mini-manifest at session end.

⸻

P. Deployment, Monitoring, Post-Launch
    •   Prep: envs (.env dev/staging/prod), secrets only in CI, version bumps, EAS Build.
    •   CI/CD: install → lint/tests → build → deploy; store artifacts; notify failures.
    •   Stores: iOS (TestFlight/App Store Connect) • Android (Play Console).
    •   Monitoring: Crashlytics + Firebase Performance + Analytics.
    •   Post-launch: hotfix critical crashes ≤72h; watch ANRs/frame drops; gather feedback.

⸻

Q. Monitoring & Incident Response
    •   Alerts: email + dashboard (crash spikes, perf regressions, security anomalies).
    •   Process: identify → pause feature work → hotfix branch → patch → redeploy → postmortem /docs/incidents.md.

⸻

R. Release Management
    •   Branches: main (stable), dev (integration), feature/*, hotfix/*.
    •   SemVer enforced; tag releases; validate builds; update manifests.
    •   Rollback = redeploy last stable; hotfix via hotfix/* → merge to main.

⸻

S. Features & Roadmap (Fallback Copy)
    •   Phase 1 — MVP: setup, auth, playback, offline, social basics, monetization, CI/CD, deployment.
    •   Phase 2 — Post-MVP: notifications, advanced search, playlist creation, admin dashboard, recommendations, artist verification + analytics, ads.
    •   Phase 3 — Long-Term: messaging, AI recommendations, cross-platform, artist monetization, live streaming, gamification, royalty accounting, community features.
(Assistant cross-checks /prompt/checklist.md; if missing, fall back here.)

⸻

T. Global Step-by-Step Checklist
    •   Status markers: ✅ DONE | 🚧 IN PROGRESS | ⏭️ NOT STARTED.
    •   Before coding each item:
“Confirming: Starting Phase X, Step Y — <title>. Proceed?”
    •   On error: pause → debug → await “Error fixed” → resume.
    •   Between steps, print:

yarn lint
npx expo start



Phases
    1.  Project Setup
    2.  Navigation & Routing
    3.  Authentication & Firebase
    4.  Home & Discovery
    5.  Search
    6.  Library & Playlists
    7.  Music Playback
    8.  Offline Mode
    9.  Social Core
    10. Artist Tools
    11. Monetization
    12. Analytics & Crash Monitoring
    13. UI/UX Polish
    14. Testing & QA
    15. Build & Deployment
    16. Post-Launch

T+. Definition of Done (per step)

A step is ✅ DONE only if:
    •   iOS and Android build/launch locally.
    •   yarn lint passes; tests for touched areas pass; ≥80% coverage on critical modules (unless explicitly waived).
    •   File Tracking Blocks emitted for all changed files.
    •   Mini-manifest snippet prepared.
    •   /prompt/checklist.md updated.
    •   i18n keys added/used for any UI strings.
    •   If deps changed: include compatibility note + rollback path.

If any missing → mark 🚧 IN PROGRESS and list gaps.

T++. Step Gate (must pass before coding)
    •   Fresh tracker sync & consistency checks passed.
    •   Current Phase/Step restated and explicitly approved (“proceed”).
    •   Impacted files loaded from latest bundle or raw.
    •   Environment constraints (Section C) checked.
    •   No open Critical/High incidents blocking this step.

⸻

U. File Tracking (Mini Manifest + Emission Rules)

Mini-Manifest (checkpoint) — update at session end:

manifest:
  src/screens/HomeScreen.tsx:
    permalink: https://raw.githubusercontent.com/JosephJordanUK/gypsify/dev/src/screens/HomeScreen.tsx
    description: Home screen with VerifyBanner + i18n
    lastUpdated: 2025-08-24
    version: 0.3.0

Emission Rules (assistant output)
    •   Emit only changed files; include entire file content (≤1MB each).
    •   After files, print exact git commands:

git add .
git commit -m "feat: …"  # or fix/chore/refactor/docs/test
git push origin dev


    •   If file >1MB or binary: state “oversize/binary — see permalink (or SHA+path)” and do not inline.
    •   Do not proceed if tracker sync failed or stale.

U+. Emission Guardrails
    •   Human pushes to dev must not use --force; prefer --rebase.
    •   For resolving CI conflicts on tracker/dev, use --force-with-lease (CI only).
    •   If latest-bundle.json is empty while changed-in-latest.json is non-empty → stop and report tracker inconsistency.
    •   Each File Tracking Block must include a one-sentence reason for the change.

⸻

V. Deployment, Monitoring, Post-Launch (Details)
    •   Deployment prep: envs, SemVer, EAS pipeline.
    •   CI/CD: install → lint/tests → build → deploy; artifacts versioned; alerts on failures.
    •   Stores: iOS (TestFlight/App Store) • Android (Play staged rollout).
    •   Monitoring: Crashlytics (required), Firebase Performance, Analytics events.
    •   Post-launch: hotfix ≤72h; monitor playback stability; collect feedback; start Post-MVP items.
    •   Long-term: monthly dep/security updates; test OS betas; keep storage abstraction migration-ready.

V.8 Deployment & Monitoring Status Log (Template)

Deployment & Monitoring Status Log — YYYY-MM-DD

Recent Builds
• iOS: <success/failure>, version <x.y.z>, buildNumber <N>, store status <…>
• Android: <success/failure>, version <x.y.z>, versionCode <N>, store status <…>

Recent Releases
• vX.Y.Z to <TestFlight/Play Internal/Production>
• Notes: <highlights>

Monitoring
• Crashes 24h/7d: <count> — top issue: <id/summary>
• Performance: cold start, buffering, dropped frames hotspots
• Analytics: DAU/WAU/MAU, premium conversion %, playback completion %

Next Actions
• Fix <top 1–2 issues>
• Improve <performance/stability hotspot>
• Prepare <next build/release>


⸻

W. Session End Routine

When the user says “I’m now ending this session”, output only:
    1.  Summary of Changes — bullets of created/edited/tested/deployed.
    2.  Manifest Updates — File Tracking Blocks for changed files + mini-manifest YAML snippet.
    3.  Checklist Status — relevant Phase/Step subset with ✅/🚧/⏭️ (fallback to Section S if checklist missing).
    4.  Optional Logs — Testing Log (K) and/or Deployment & Monitoring Status Log (V.8) if relevant.

⸻

Operational Addendum — Sync & Boot Integration

Sync triggers: “Sync Project”, “Daily Boot”, or “saved”.

On trigger, assistant must:
    1.  Re-open (fresh, with cache-buster ?t=<unix>):
    •   https://raw.githubusercontent.com/JosephJordanUK/gypsify/refs/heads/tracker/dev/prompt/latest-sha.txt?t=<unix>
    •   https://raw.githubusercontent.com/JosephJordanUK/gypsify/refs/heads/tracker/dev/prompt/changed-in-latest.json?t=<unix>
    •   https://raw.githubusercontent.com/JosephJordanUK/gypsify/refs/heads/tracker/dev/prompt/latest-bundle.json?t=<unix>
    2.  Decode latest-bundle.json; update this chat’s internal file state.
    3.  Acknowledge changed paths; by default don’t dump full contents unless requested.
    4.  Health checks:
    •   latest-sha.txt is a 40-char hex SHA.
    •   If changed-in-latest.json non-empty → latest-bundle.json lists matching paths.
    •   Base64 decode succeeds for each listed file.
    •   If inconsistent → stop and report tracker failure.
    5.  Only after a successful sync, proceed with the approved checklist step.

Error Handling Override
    •   When logs/errors are pasted: parse + classify (Critical/High/Medium/Low), fill Error Report Template (J+), propose minimal safe fix and rollback; pause checklist until “Error fixed”.

Continuity Guardrails
    •   Nudge back to current Phase/Step if drift occurs.
    •   Always confirm Phase/Step before coding.
    •   Roadmap (S) + Checklist (T) act as dual safety nets.
