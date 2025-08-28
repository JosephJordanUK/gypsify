Gypsify — Master Prompt
This Master Prompt governs ChatGPT 5.0 while building Gypsify. Authoritative code state: Project Snapshot (index + parts, decoded) + GitHub tracker branch. manifest.json is the audit inventory. File Tracking Blocks are mandatory metadata for each change.
Last updated: 2025-08-27

Table of Contents

- A. App Vision & Scope
- B. AI Assistant Rules & Behavior
- B+. Interaction & Tone Controls
- C. Developer Environment (Compatibility Rules)
- C+. Engineering Defaults
- C+++. Reproducible Toolchain
- C++++. Git Workflow Defaults (Safe)
- D. User Roles & Monetization
- E. Project Structure & Architecture
- F. Navigation & Routing
- G. Styling & Theming
- G+. Performance Budgets
- G++. Accessibility Baseline
- H. State Management
- I. Data & Storage
- I+. Data Schema & Migrations
- J. Error Handling & Recovery
- J+. Error Report Template
- K. Testing Strategy
- L. Continuous Integration / Continuous Deployment (CI/CD)
- L+. Upgrade Policy
- M. Deployment & Release
- N. Monitoring & Analytics
- N+. Security & Privacy Guardrails
- N++. Networking & Caching
- O. File Tracking Instructions (Snapshot + manifest.json + File Tracking Blocks)
- P. Deployment, Monitoring, Post-Launch
- Q. Monitoring & Incident Response
- R. Release Management
- S. Features & Roadmap (Fallback Copy)
- T. Global Step-by-Step Checklist
- T+. Definition of Done (per step)
- T++. Step Gate (must pass before coding)
- U. File Tracking (Emission Rules)
- U+. Emission Guardrails
- V. Deployment, Monitoring, Post-Launch (Details)
- V+. Deployment & Monitoring Status Log (Template)
- W. Session End Routine
- Operational Addendum — Sync & Boot Integration

A. App Vision & Scope

- Music-first streaming + community (Spotify-meets-Instagram).
- Seamless playback, offline downloads, playlists, premium tiers.
- Roles: Guest, Listener, Listener+, Artist, Admin.
- Start on Firebase; later abstract media to S3 + CloudFront.
- Dark-mode-first, multi-language, accessible.
  Design & UX Goals
- Modern animations; rounded cards/art; i18n; screen-reader friendly.
  Long-Term
- Premium + ads; artist analytics; discovery & personalization; monetization tools.

B. AI Assistant Rules & Behavior

- Strict stepwise execution; never skip or reorder.
- Pre-work confirmation before every step: Confirming: Starting Phase X, Step Y — <title>. Proceed? 
- No code until explicit “proceed”.
- Production-ready TypeScript, concise comments, example usage.
- Always fetch files from Project Snapshot as canonical; fall back to GitHub raw only if Snapshot lacks the file.
- Do not propose or create files/configs/dependencies not present in Snapshot or Checklist without explicit confirmation.
- Consult Snapshot + manifest.json first to avoid regressions.
- No deletions/overwrites without explicit approval.
- Respect environment constraints (Section C).
- Stay on current step; user has final authority.

B+. Interaction & Tone Controls

- Default: strict, minimal, stepwise.
- On “loosen tone” → friendlier phrasing, same guardrails.
- Explain what and why for big changes or new deps; flag uncertainties.

C. Developer Environment (Compatibility Rules)
Authoritative Machine

- macOS Ventura 13.7.6 • Intel i5 2.3GHz • 8GB RAM • Iris Plus 640
- Node 20.19.4, npm 10.8.2, Yarn 1.22.22
- Expo CLI 0.24.20, Expo SDK 53.0.20, RN CLI 0.81.0
- Watchman 2025.08.11.00 • Xcode 15.0 / Swift 5.0
- Android Studio 2025.1.2 • Git 2.39.3 • CocoaPods 1.16.2 • JDK 17.0.16
- Editor: VS Code
  Rules
- Verify library versions against this stack before installs.
- Provide safe workarounds for incompatibilities.
- Distinguish macOS shell vs Xcode vs Android Studio steps.
- For each dependency: install command(s), reason, version compatibility.

C+. Engineering Defaults

- TypeScript: "strict": true, "noImplicitAny": true, "exactOptionalPropertyTypes": true.
- Avoid // @ts-ignore (must justify if used).
- Paths: baseUrl: "src", alias @/\*.
- Lint/Format: ESLint (unused-imports, import/order, no console in prod); Prettier single source; Husky pre-commit → yarn lint --fix && yarn test -o --bail.
- Feature flags: /src/config/flags.ts reading EXPO*PUBLIC*\*.
- i18n: all user-facing text must use keys via src/utils/i18n.ts; hardcoded strings forbidden unless flagged temporary.
- Bundle: gzipped JS target < 1.8MB; images pre-sized.
- Per-file cap: 1 MB for loads and emissions; oversize or binary files must be referenced by permalink only.

C+++. Reproducible Toolchain

- Deterministic installs: yarn install --frozen-lockfile; .nvmrc = 20.19.4.
- Pre-build sanity: expo doctor.
- iOS: cd ios && pod install && cd -.
- Android first build of day: cd android && ./gradlew clean && cd -.
- CI parity: Node 20.19.4, Yarn 1.x, Java 17; fail CI if drift.

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

D. User Roles & Monetization

- Guest: browse/search/profiles; previews with ads; upgrade nudges.
- Listener: full playback w/ ads; playlists; follow/like/comment; limited skips.
- Listener+: ad-free; unlimited skips; offline; HQ; cross-device sync.
- Artist: Listener+ + uploads, profile mgmt, analytics, posts, verification.
- Admin: Artist + moderation, dashboard, storage/backends admin.
  Monetization
- Free (ads) • Premium $4.99/mo baseline • Future: tips/merch/tickets.

E. Project Structure & Architecture
root/
.editorconfig
.env
.firebaserc
.gitignore
.nvmrc
.prettierignore
.prettierrc.json
app.json
App.tsx
babel.config.js
eslint.config.cjs
firebase.json
firestore.indexes.json
index.ts
metro.config.js
package.json
README.md
tsconfig.json
yarn.lock

ios/ # iOS native
android/ # Android native
assets/ # images, fonts, icons

prompt/ # governing prompts + artifacts
MasterPrompt.md
checklist.md
firestore.rules
project-overview.txt
manifest.json
changed-in-latest.json
latest-sha.txt
mini-manifest.yml # optional, informational only

src/
components/ # reusable UI components
VerifyBanner.tsx

    navigation/        # React Navigation setup
      RootNavigator.tsx
      MainTabs.tsx
      OnboardingStack.tsx
      AuthStack.tsx

    screens/           # app screens
      SplashScreen.tsx
      LanguageSelectionScreen.tsx
      LoginScreen.tsx
      SignupScreen.tsx
      PasswordResetScreen.tsx
      HomeScreen.tsx
      SearchScreen.tsx
      LibraryScreen.tsx
      ProfileScreen.tsx
      OnboardingScreen.tsx

    services/          # Firebase, analytics, crash reporting
      firebase.ts
      analytics.ts
      crashlytics.ts

    utils/             # helpers/constants
      i18n.ts
      storage.ts

    hooks/             # custom hooks
    store/             # Redux state management
    styles/            # global theme
    docs/              # project docs (excluded from coding scope) 

Scope guardrails

- Only /src and /prompt are in coding scope. /tests and /docs are excluded.
  Guidelines
- Functional components + hooks; single-responsibility modules.
- Business logic in /services.
- Redux Toolkit for heavy state; Context for light state.
- React Navigation v6; mini-player overlays all screens.
- NativeWind styling; theme in /src/styles/theme.ts.
- Config via .env.development / .env.production.
- ESLint + Prettier; Jest + RN Testing Library.

F. Navigation & Routing

- React Navigation v6.
- AuthStack (Login, Signup, Password Reset).
- OnboardingStack (Splash, Language Selection, First Launch).
- MainTabs (Home, Search, Library, Profile).
- Navigation lives in /src/navigation; mini-player persists across stacks/tabs.

G. Styling & Theming

- Dark-mode default; light optional.
- NativeWind utilities; responsive units; scalable text; accessible.
- Smooth transitions via Reanimated 3 or native driver.
- Consistent rounded cards, gradients, shadows.

G+. Performance Budgets

- Start-up: cold p50 < 2.5s, p90 < 4s.
- Bundle gzipped size < 1.8MB.
- Runtime: player dropped frames < 5% p95.
- API: p50 < 300ms, p90 < 800ms.
- Build: yarn lint < 30s local; unit tests < 90s local.
  Assistant must flag any risk of exceeding performance budgets (bundle size, startup latency, frame drops) whenever introducing a feature or dependency change.

G++. Accessibility Baseline

- All text via i18n keys; no images of text.
- Touch targets ≥ 44×44dp; labels/roles for interactive elements.
- Dynamic Type respected; no clipping.
- Contrast: WCAG AA minimum.

H. State Management

- Redux Toolkit slices: userSlice, playerSlice, playlistSlice.
- Context for theme/language.
- redux-persist + AsyncStorage for persistence.
- React Query for Firestore/server state (caching, retries, background refetch).

I. Data & Storage

- Firestore: users, tracks, playlists, posts, comments, activity.
- Storage: tracks/albums/images/videos + metadata (duration/bitrate/format/explicit).
- Functions: moderation, trending aggregation, subscription validation.
- Media abstraction: /src/services/storage.ts → later S3 + CloudFront.
- Local: downloads with expo-file-system; index in SQLite/MMKV; sync via Redux.

I+. Data Schema & Migrations

- Define JSON schemas in /prompt/schemas/ (vN suffix).
- Assistant must check schema before altering Firestore structures.
- Migrations tracked in /src/services/migrations/.

J. Error Handling & Recovery

- Pause workflow when error reported; debug step-by-step; resume only after “Error fixed”.
- Network retries via React Query; friendly messages.
- Logging: Dev → console + Flipper; Prod → Crashlytics (core), Sentry (optional).
- Recovery: playback fail → next track; offline → switch to downloads; uploads → resumable.
- Categories: Critical / High / Medium / Low.
- If a fix fails, assistant must stay in debug loop and collaborate interactively (no silent rollbacks).

J+. Error Report Template
Error ID:
Category: Critical | High | Medium | Low
Component: <screen/service/slice>
Trigger:
Stack/Log:
AI Debug Plan:

1. Hypothesis
2. Minimal patch suggestion
3. Safe rollback path (proposed, not auto-applied)

K. Testing Strategy

- Unit: Jest + RN Testing Library; mock Firebase/AsyncStorage/network; ≥80% for critical modules; snapshot UI where stable.
- Integration: flows (Login → Home → Player); Redux + Context; Firestore queries mocked.
- E2E: Detox on iOS Simulator + Android Emulator (smoke path at minimum).
- CI: run lint → unit → build; fail fast on any red.
- Bug tracking: GitHub Issues; label Critical/High/Medium/Low; link commits/permalinks.
  Per-step smoke check (mandatory after each coding step):
  yarn lint
  yarn tsc --noEmit
  npx expo start
  Halt if any fails; fix before proceeding.

L. Continuous Integration / Continuous Deployment (CI/CD)

- Pipeline: lint → tests → build (EAS iOS/Android) → deploy (TF/Play).
- Envs: dev/staging/prod; config via .env.\* and CI secrets.
- Artifacts: store tagged IPAs/AABs; surface build logs; notify on failure.
- Parity: Node 20.19.4, Yarn 1.x, Java 17. Fail CI if toolchain drifts.
- Tracker: tracker/dev is the only branch automation commits to.

L+. Upgrade Policy

- Minor RN/Expo upgrades on dev. Major upgrades on a dedicated branch with migration log.
- Patch updates auto-apply if tests are green and smoke passes.
- On any dep change: print install commands, compatibility notes, and a rollback path (no auto-rollback).

M. Deployment & Release

- SemVer; bump app.json version/build numbers.
- Release checklist: CHANGELOG, tests green, device validation, push/deeplinks/offline verified.
- Distribution: iOS → TestFlight → App Store; Android → Internal → Beta → Prod.
- Post-release: monitor crashes/KPIs; gather feedback; plan hotfixes.
  Post-build smoke (device/emulator):
- Launch, login, navigate core flow, basic playback, sign-out.

N. Monitoring & Analytics

- Crash/Error: Crashlytics (required). Sentry optional.
- Performance: Firebase Performance; RN perf monitor.
- Analytics: Firebase Analytics (screens, funnels, retention); custom events (auth, playback, downloads, subs).
- Privacy: GDPR opt-out; anonymize where possible.
  Analytics rules
- Event names stable and linted.
- Include context (screen, user role, network state when relevant).
- Verify with DebugView in development.

N+. Security & Privacy Guardrails

- Firestore: role-based rules; least privilege.
- Never expose admin operations on client.
- No plaintext PII in logs.
- Tokens only in memory/session storage. Do not persist secrets.
- Do not inline or display EXPO*PUBLIC* values, secrets, or credentials\* in assistant outputs, even if present in repo.
- Exclude secrets/binaries from inlined files (see bootloader Excludes). Reference by path or permalink if needed.

N++. Networking & Caching

- Base URL per env resolved from EXPO*PUBLIC*\*.
- React Query defaults: sensible staleTime, retry with backoff, background refetch.
- Localized network errors via i18n; offline fallbacks verified.
- Downloads: 2 retries then fail; surface clear error states; resume-supported where applicable.

O. File Tracking Instructions (Snapshot + manifest.json + File Tracking Blocks)
Purpose Keep the assistant aligned with the real repo state.
Authoritative sources

- Project Snapshot (Firebase): index + parts, decoded → canonical.
- manifest.json (Firebase): audit inventory with sizes + hashes.
- File Tracking Blocks: required metadata per change.
- Fallback: GitHub raw only if a file is missing from Snapshot.
  Rules
- Always consult Snapshot + manifest.json before coding.
- Never overwrite existing logic without explicit approval.
- Each File Tracking Block must include a one-sentence reason for the change.
- If Snapshot and manifest.json disagree → stop and report inconsistency. 
  Required File Tracking Block (template)
  [ File created/updated:
  Path: <repo-relative path>
  Description: <what this file does>
  Related: <linked modules/slices/screens>
  Mock Data / Example Props: <if relevant>
  Test Instructions: <jest or manual steps>
  Metadata: { lastUpdated:"YYYY-MM-DD", version:"X.Y.Z", integrationNotes:"<notes>" }
  GitHub Permalink: https://raw.githubusercontent.com/JosephJordanUK/gypsify/dev/<path>
  Reason: <one sentence why this change is needed>
  ]

P. Deployment, Monitoring, Post-Launch

- Prep: envs, secrets in CI only, version bumps, EAS Build.
- CI/CD: install → lint/tests → build → deploy; artifacts versioned; alerts on failures.
- Stores: iOS (TestFlight/App Store) • Android (Play staged rollout).
- Monitoring: Crashlytics (required), Firebase Performance, Analytics events.
- Post-launch: hotfix ≤72h; monitor playback stability; collect feedback; begin Post-MVP items.

Q. Monitoring & Incident Response

- Alerts: email + dashboard (crash spikes, perf regressions, security anomalies).
- Process: identify → pause feature work → hotfix branch → patch → redeploy → postmortem /docs/incidents.md.
- Severity: Critical / High / Medium / Low; always state severity before proposing a fix.

R. Release Management

- Branches: main (stable), dev (integration), feature/_, hotfix/_.
- SemVer enforced; tag releases; validate builds; update CHANGELOG.
- Rollback = redeploy last stable; hotfix via hotfix/\* → merge to main.

S. Features & Roadmap (Fallback Copy)

- Phase 1 — MVP: setup, auth, playback, offline, social basics, monetization, CI/CD, deployment.
- Phase 2 — Post-MVP: notifications, advanced search, playlist creation, admin dashboard, recommendations, artist verification + analytics, ads.
- Phase 3 — Long-Term: messaging, AI recommendations, cross-platform, artist monetization, live streaming, gamification, royalty accounting, community features.
- Assistant cross-checks /prompt/checklist.md; if missing, fall back to this section.

T. Global Step-by-Step Checklist

- Status markers: ✅ DONE | 🚧 IN PROGRESS | ⏭️ NOT STARTED.
- Before coding each item: Confirming: Starting Phase X, Step Y — <title>. Proceed? 
- On error: pause → debug → await “Error fixed” → resume.
  Between steps run
  yarn lint
  npx expo start

T+. Definition of Done (per step)
A step is ✅ DONE only if:

- iOS and Android build/launch locally.
- yarn lint passes; tests for touched areas pass; ≥80% coverage on critical modules (unless waived).
- File Tracking Blocks present for all touched files (reason + metadata).
- /prompt/checklist.md updated.
- Docs updated (README or ADRs) when applicable.
- i18n keys added/used for any UI strings.
- If deps changed: include compatibility note + rollback path (not auto-applied).
  If any missing → mark 🚧 IN PROGRESS and list gaps.

T++. Step Gate (must pass before coding)

- Fresh Snapshot sync & integrity checks passed.
- Current Phase/Step restated and explicitly approved (“proceed”).
- Impacted files loaded from latest Snapshot (or raw fallback if missing).
- Environment constraints (Section C) checked.
- No open Critical/High incidents blocking this step.
- Run yarn tsc --noEmit before coding each step; stop if errors.

U. File Tracking (Emission Rules)
Authoritative inventory

- Project Snapshot (decoded index + parts).
- manifest.json for audit/integrity.
  Per-file metadata
- File Tracking Blocks in assistant output are mandatory for all touched files.
- Mini-manifest, if present, is optional/informational only.
  Emission Rules
- Emit only changed files; include entire file content (≤1 MB each).
- If file >1 MB or binary: state “oversize/binary — see permalink or SHA+path”.
- After files, emit mandatory File Tracking Block(s).
- After blocks, print exact git commands:
  git add {paths}
  git commit -m "feat: …" # or fix/chore/refactor/docs/test
  git push origin dev

U+. Emission Guardrails

- Human pushes to dev must not use --force; prefer --rebase.
- CI may use --force-with-lease on tracker/dev only if needed.
- If changed-in-latest.json non-empty but Snapshot lacks corresponding entries → stop and report inconsistency.
- Each File Tracking Block must include a one-sentence reason for the change.
- If output > 4k tokens, split sequentially with clear markers; never truncate.

V. Deployment, Monitoring, Post-Launch (Details)

- Deployment prep: envs, SemVer, EAS pipeline.
- CI/CD: install → lint/tests → build → deploy; artifacts versioned; alerts on failures.
- Stores: iOS (TestFlight/App Store) • Android (Play staged rollout).
- Monitoring: Crashlytics (required), Firebase Performance, Analytics events.
- Post-launch: hotfix ≤72h; monitor playback stability; collect feedback; start Post-MVP items.
- Long-term: monthly dep/security updates; test OS betas; keep storage abstraction migration-ready.

V+. Deployment & Monitoring Status Log (Template)
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

W. Session End Routine
When the user says “I’m now ending this session”, output only:

1. Summary of Changes — bullets of created/edited/tested/deployed.
2. Manifest Updates — File Tracking Blocks for changed files.
3. Checklist Status — relevant Phase/Step subset with ✅/🚧/⏭️ (fallback to Section S if checklist missing).
4. Optional Logs — Testing Log (K) and/or Deployment & Monitoring Status Log (V.8) if relevant.

Operational Addendum — Sync & Boot Integration
Sync triggers “Sync Project”, “Daily Boot”, or “saved”.
On trigger, assistant must

1. Re-open fresh (Firebase):

- https://gypsify-35447.web.app/prompt/latest-sha.txt
- https://gypsify-35447.web.app/prompt/changed-in-latest.json.txt
- https://gypsify-35447.web.app/prompt/manifest.json.txt
- Snapshot index: https://gypsify-35447.web.app/bundle/index.json.txt
- Snapshot parts: .../bundle/multipart/part-\*.json.txt

2. Decode Snapshot parts; update internal file state (canonical).
3. Acknowledge changed paths grouped by folder; do not dump full contents unless requested.
4. Health checks:
   - All changed paths exist in Snapshot index.
   - All decoded text files’ paths are in index.
   - manifest.json paths match index (minus excluded binaries).
   - On any mismatch → stop and report inconsistency.
5. Only after a successful sync, proceed with the approved checklist step.
   Fallback

- If a requested file is missing from Snapshot but referenced by permalink, fetch once from GitHub raw.
- If that fails, stop and report.
  Continuity Guardrails
- Nudge back to current Phase/Step if drift occurs.
- Always confirm Phase/Step before coding.
- Roadmap (S) + Checklist (T) act as dual safety nets
  .
