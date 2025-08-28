Gypsify — Ultimate Step-by-Step Checklist (v1.0)

(AI Execution Manual — Consumer-Ready Release)

Status legend: ✅ DONE · 🚧 IN PROGRESS · ⏭️ NOT STARTED

⸻

Step Gate (must pass before coding)
• Fresh Snapshot sync & integrity checks passed ✅
• Current Phase/Step restated and explicitly approved (“proceed”) ✅
• Impacted files loaded from latest Snapshot (or GitHub raw fallback) ✅
• Permalinks check: open 3 random raw links → HTTP 200 ✅
• Environment constraints (Section C) checked ✅
• No open Critical/High incidents blocking this step ✅
• Run yarn tsc --noEmit before coding; stop if errors ✅

⸻

Definition of Done (per step)

✅ A step is DONE only if:
• iOS and Android build/launch locally.
• yarn lint passes; yarn tsc --noEmit passes.
• Tests for touched areas pass; ≥80% coverage on critical modules (unless waived).
• File Tracking Blocks emitted for all changed files (with reason + metadata).
• /prompt/checklist.md updated.
• Docs updated (README or ADRs) when applicable.
• i18n keys added/used for any UI strings.
• If deps changed: include compatibility note + rollback path.

If any missing → mark 🚧 IN PROGRESS and list gaps.

⸻

Between Steps (mandatory)

yarn lint
yarn tsc --noEmit
npx expo start
Halt if any fails; fix before proceeding.

⸻

Per-Step Quality Checks
• Accessibility: roles/labels set, 44×44dp targets, Dynamic Type, AA contrast.
• Performance: cold start unaffected; gz bundle < 1.8 MB; no new jank.
• Security: no PII in logs; tokens not persisted; Firestore rules least-privilege.

⸻

Global Networking & Caching
• Base URL per env resolved from EXPO*PUBLIC*\*.
• React Query defaults set (staleTime, retry, backoff).
• Localized network errors (i18n) and offline fallbacks verified.

⸻

Continuity & Output Guardrails
• If assistant output > 4k tokens → split sequentially with clear markers; never truncate.
• Always nudge back to current Phase/Step if drift occurs.

⸻

Execution Order Rule (Critical)
• Always finish every step in the current Phase before moving on.
• Do not skip ahead, do not backtrack unless explicitly instructed.
• Example: If working in Phase 1, complete all steps before starting Phase 2.
• Once Phase 2 is complete, move to Phase 3, and so on, until the entire checklist is finished.
• If a step is 🚧 IN PROGRESS or ⏭️ NOT STARTED, it must be fully completed and marked ✅ DONE before the assistant can move forward.

⸻

Phase 1 — Project Setup

🚧 (current focus)

✅ Completed
• Phase 1.1 Base configs: README.md, app.json, tsconfig.json, .gitignore
• Phase 1.2 Canonical folders (/src/{components,hooks,navigation,screens,services,store,styles,utils}, /assets)
• Phase 1.3 ESLint + Prettier + Husky pre-commit hooks
• Phase 1.4 Expo TypeScript project initialized (npx expo)
• Phase 1.5 Git repo initialized; branch naming (feature/, fix/, hotfix/\*)
• Phase 1.6 Scaffold commit (step-0-initial-scaffold)

⸻

⏭️ Remaining (to complete Phase 1)

Tooling & Config
• Phase 1.7 Toolchain pins: .nvmrc=20.19.4, Yarn 1.22.22, lockfile committed
• Phase 1.8 Expo SDK pinned (53.x) and expo doctor clean
• Phase 1.9 TS strict config ("strict": true, "noImplicitAny": true, "exactOptionalPropertyTypes": true, baseUrl: "src", alias @/_)
• Phase 1.10 ESLint rules (unused-imports, import/order, no console in prod) + single Prettier source
• Phase 1.11 NativeWind/Tailwind setup (babel plugin, tailwind.config.js)
• Phase 1.12 i18n scaffold (assets/locales/en.json; nav/auth keys)
• Phase 1.13 Assets placeholders (icon/splash wired in app.json)
• Phase 1.14 Env scaffolding (.env.development, .env.production, EXPO*PUBLIC*_ flags)
• Phase 1.15 Feature flags scaffold (/src/config/flags.ts reading EXPO*PUBLIC*\*)
• Phase 1.16 Git safety: pull.rebase=true, rebase.autoStash=true
• Phase 1.17 Repo hygiene: .editorconfig, LICENSE

CI/CD & Quality
• Phase 1.18 CI workflow for lint, typecheck, tests
• Phase 1.19 VSCode settings & extensions recommendations committed
• Phase 1.20 ADRs (Architecture Decision Records) folder scaffolded
• Phase 1.21 Unit test harness scaffold (Jest + React Native Testing Library)
• Phase 1.22 Detox config stub for e2e
• Phase 1.23 CI badge in README

Security & Stability Additions (NEW)
• Phase 1.24 Run npm audit & yarn audit — resolve high/critical vulnerabilities
• Phase 1.25 Enable Dependabot (or Renovate) for Expo SDK, Firebase SDK, React Native updates
• Phase 1.26 Verify .env\* excluded from git (git-secrets + pre-commit check)
• Phase 1.27 Configure .gitattributes for consistent LF line endings cross-platform
• Phase 1.28 Lock down GitHub repo settings (require PR reviews, no direct pushes to main/dev)
• Phase 1.29 Add CODEOWNERS (prompt/ + src/ separated)

Dev UX Additions (NEW)
• Phase 1.30 Add lint-staged for faster pre-commit checks
• Phase 1.31 Configure Expo Updates (expo-updates) for OTA updates baseline
• Phase 1.32 Add .vscode/launch.json for one-click Expo debugger
• Phase 1.33 Preload fonts & colors (tokens in /src/styles/theme.ts)
• Phase 1.34 Add Storybook scaffold for isolated UI testing (optional but recommended)

Validation & Commit
• Phase 1.35 Verify: iOS and Android both build/launch on simulator/emulator with current setup
• Phase 1.36 Update /prompt/checklist.md after setup
• Phase 1.37 File Tracking Blocks for all changed files
• Phase 1.38 Commit Project Setup phase completion

⸻

✅ Once Phase 1.38 is complete → lock Phase 1, mark it fully ✅ DONE, then AI assistant moves to Phase 2 (Navigation & Routing).

⸻

Phase 2 — Navigation & Routing

✅ Phase 2.1 Auth screens scaffold (Login, Signup, Password Reset)
✅ Phase 2.2 Root navigator created (Stack + Tabs)
✅ Phase 2.3 Flow: Splash → Onboarding wizard → Language Selection → Auth → Main
✅ Phase 2.4 Tabs: Home / Search / Library / Profile
✅ Phase 2.5 Commit navigation + screen scaffolds

⏭️ Phase 2.6 Type-safe param lists for all stacks/tabs
⏭️ Phase 2.7 Deep link config (prefixes, routes) + test iOS/Android
⏭️ Phase 2.8 Android back-button behavior + state restore on cold start
⏭️ Phase 2.9 Tab icons + i18n labels
⏭️ Phase 2.10 Screen analytics hook (log screen_view events)
⏭️ Phase 2.11 Accessibility pass: labels/roles for tabs; logical focus order
⏭️ Phase 2.12 Navigation persistence disabled in private flows (Auth)
⏭️ Phase 2.13 Mini-player frame persists across stacks/tabs
⏭️ Phase 2.14 Playlist & Album detail screens scaffolded (navigation routes wired)
⏭️ Phase 2.15 Navigation error boundary (fallback “Something went wrong” screen)
⏭️ Phase 2.16 Deep link smoke tests on real iOS + Android devices
⏭️ Phase 2.17 Verify onboarding screens handle back navigation correctly
⏭️ Phase 2.18 Confirm cold start rehydration doesn’t land in invalid routes
⏭️ Phase 2.19 Unit tests: navigation param typing (happy + error paths)
⏭️ Phase 2.20 Integration tests: Splash → Onboarding → Auth → Main works end-to-end
⏭️ Phase 2.21 E2E Detox: back-button navigation across Auth, Main, and nested stacks
⏭️ Phase 2.22 Update checklist.md + ADRs with navigation structure & decisions
⏭️ Phase 2.23 Commit Navigation & Routing phase completion

⸻

Phase 3 — Authentication & Firebase

✅ 3.1 Configure .env.development and .env.production with EXPO*PUBLIC*\* flags
✅ 3.2 Add Firebase web config (apiKey, projectId, etc.)
✅ 3.3 Install Firebase SDK (Auth, Firestore, Storage, Analytics, Crashlytics)
✅ 3.4 Firebase initialization wrapper (src/services/firebase.ts)
✅ 3.5 expo doctor clean (no Firebase warnings)

✅ 3.6 Email/Password sign-up
✅ 3.7 Email/Password login
✅ 3.8 Password reset
✅ 3.9 Guest login mode
✅ 3.10 Enforce email verification (UI + guards)
✅ 3.11 Sign-out clears Redux, AsyncStorage, React Query caches
✅ 3.12 Commit baseline auth system

⏭️ 3.13 Firestore schema: users (role: Listener | Artist | Admin; status; createdAt)
⏭️ 3.14 Firestore profiles doc/schema (username, bio, avatarUrl, links)
⏭️ 3.15 Seed script stub (admin, test listener, test artist)
⏭️ 3.16 Security rules: least-privilege by role (read/write matrices)
✅ 3.17 Rules enforce email_verified (already live)
⏭️ 3.18 Rules tests on emulator (role × action matrix)
⏭️ 3.19 Storage rules (avatars/uploads: owner-write, public-read if allowed)

⏭️ 3.20 Google OAuth: web client ID, iOS URL scheme, Android SHA-256
⏭️ 3.21 Apple Sign-In: capability, Services ID, redirect URL
⏭️ 3.22 Link/unlink providers (Google/Apple ↔ Email)
⏭️ 3.23 Anonymous → full account upgrade flow

⏭️ 3.24 Profile CRUD (username, bio, avatar upload)
⏭️ 3.25 Avatar validation (type/size); image transform path (if used)
⏭️ 3.26 Username uniqueness (Firestore index + check)
⏭️ 3.27 Bio length validation
⏭️ 3.28 Optimistic UI updates with rollback
⏭️ 3.29 Storage path: users/{uid}/profile/avatar.jpg

⏭️ 3.30 VerifyBanner shown when !emailVerified
⏭️ 3.31 “Open Mail App” CTA from banner (platform-aware)
⏭️ 3.32 Resend verification throttled (server timestamp/backoff)
⏭️ 3.33 Localized auth error messages (i18n keys)
⏭️ 3.34 Guest → upgrade UX (preserve local state)
⏭️ 3.35 Offline auth UX (cached session, friendly fallback)

⏭️ 3.36 userSlice (Redux) + selectors
⏭️ 3.37 redux-persist for user/session shape (non-sensitive only)
⏭️ 3.38 Auth listener hook (subscribe to Firebase auth state)
⏭️ 3.39 Migrations stub (src/services/migrations/v0_policy.ts)

⏭️ 3.40 Analytics: auth_sign_up, auth_login, auth_error, auth_sign_out
⏭️ 3.41 Crashlytics non-fatal smoke on login success/failure
⏭️ 3.42 Enable Analytics DebugView (dev only)
⏭️ 3.43 Log provider used (email, google, apple, guest)
⏭️ 3.44 Lightweight audit trail (sign-in/out, provider link, password reset)

⏭️ 3.45 Unit: Email/Password login
⏭️ 3.46 Unit: Google login
⏭️ 3.47 Unit: Apple login
⏭️ 3.48 Unit: Guest login
⏭️ 3.49 Integration: login → home happy path
⏭️ 3.50 Integration: logout clears caches
⏭️ 3.51 Integration: unverified email blocked by rules
⏭️ 3.52 Rules test: Artist cannot delete another Artist’s track
⏭️ 3.53 E2E: Email login
⏭️ 3.54 E2E: Google login
⏭️ 3.55 E2E: Apple login
⏭️ 3.56 E2E: Password reset
⏭️ 3.57 E2E: Delete account

⏭️ 3.58 Handle revoked/expired tokens → force reauth with message
⏭️ 3.59 Cache-safe persistence (no secrets; verify rehydrate path)
⏭️ 3.60 Detect concurrent sessions (optional notice)
⏭️ 3.61 Throttle failed sign-ins (client delay; server-side—if added later)
⏭️ 3.62 (Future PWA) Graceful OAuth popup-blocked handling

⏭️ 3.63 All auth UI strings via i18n keys (no hardcoded text)
⏭️ 3.64 Central guard util: block actions until emailVerified
⏭️ 3.65 Re-validate rules + Storage with regression tests
⏭️ 3.66 Perf check: auth doesn’t harm cold start budgets
⏭️ 3.67 Privacy: no PII in logs; sanitize Crashlytics breadcrumbs
⏭️ 3.68 A11y: labels, focus order, error announcements (SR)
⏭️ 3.69 Device smoke: fresh install on iOS + Android
⏭️ 3.70 Fallback “locked state” screen if auth listener fails
⏭️ 3.71 Update /prompt/checklist.md with statuses
⏭️ 3.72 File Tracking Blocks for all changed files
⏭️ 3.73 Update README/ADRs (auth architecture + rules)
⏭️ 3.74 Post-auth migration test (guest → full; listener → artist)
⏭️ 3.75 Final sign-off: iOS + Android builds pass with all flows
⏭️ 3.76 Commit Phase 3 completion

Additions for robustness (kept minimal & free):
⏭️ 3.77 Firebase App Check (Play Integrity on Android, DeviceCheck/Apple App Attest on iOS)
⏭️ 3.78 Role claims wiring (server stub): on artist approval, set customClaims.role and reflect in client guards
⏭️ 3.79 Emulator suite workflow (firebase emulators:start) for Auth/Firestore/Rules CI jobs
⏭️ 3.80 Account recovery UX polish (verify mail sent, deep-link back into app on iOS/Android)

⸻

Phase 4 — Home & Discovery

⏭️ 4.1 Home screen scaffold (HomeScreen.tsx) with section container + scroll list
⏭️ 4.2 Data hooks scaffold (useHomeFeed.ts, React Query) with typed DTOs
⏭️ 4.3 Firestore queries: featured, recommended, recentlyPlayed, trending (typed)
⏭️ 4.4 Pagination & infinite scroll (per section) with getNextPageParam
⏭️ 4.5 Offline behavior: show cached data; pull-to-refresh when online
⏭️ 4.6 Shimmer/skeleton loaders for cards/rows; empty-state components
⏭️ 4.7 Error states: network error, permission error, empty feed (with CTA)
⏭️ 4.8 Section headers with i18n + “See All” routing
⏭️ 4.9 “See All” screens per section (grid/list toggle, sort, filters placeholder)
⏭️ 4.10 Card components: TrackCard, PlaylistCard, ArtistCard (tap → detail)
⏭️ 4.11 Image prefetch & memoized FastImage/Image caching (within Expo constraints)
⏭️ 4.12 Scroll-to-top on tab reselect; preserve scroll on tab switch
⏭️ 4.13 Pull-to-refresh with refetch cascaded across sections
⏭️ 4.14 Deep links from cards: gypsify://track/:id, …/playlist/:id, …/artist/:id
⏭️ 4.15 CTA to Search when empty (prefill trending query chips)
⏭️ 4.16 “Resume listening” mini-banner if paused track exists

Featured & Editorial
⏭️ 4.17 Featured Playlists rail (curated docs)
⏭️ 4.18 Editorial promo banner (optional) with deep link + dismiss persistence
⏭️ 4.19 Weekly Editorial refresh job stub (Functions placeholder; client tolerant)

Recommended (rule-based initial)
⏭️ 4.20 “Recommended for You” = last N genres/artists from history
⏭️ 4.21 Fallback to popular playlists when history insufficient
⏭️ 4.22 Deduplicate across sections (track/playlist IDs set)

Recently Played
⏭️ 4.23 Local queue → cloud mirror (last 50) sync policy
⏭️ 4.24 Show across devices (user doc subcollection)
⏭️ 4.25 Clear/hide controls with confirm

Trending
⏭️ 4.26 Client reads aggregated trending (precomputed collection)
⏭️ 4.27 Time-window tabs: 24h / 7d (UI only; same query param)
⏭️ 4.28 Region placeholder (future); default “Global”

Performance & Caching
⏭️ 4.29 Query keys stable; staleTime tuned per section
⏭️ 4.30 Prefetch track detail on card hover/focus (mobile “onFocus”)
⏭️ 4.31 Keep gz bundle ≤ 1.8MB; lazy-load heavy rows (virtualized lists)
⏭️ 4.32 Batch Firestore reads; index hints (composite index notes)

Accessibility & i18n
⏭️ 4.33 A11y roles/labels for all cards/buttons; 44×44dp targets
⏭️ 4.34 Announce errors/refresh complete to screen reader
⏭️ 4.35 All strings via i18n keys (no hardcoded copy)

Analytics
⏭️ 4.36 home_impression per section (once per visit)
⏭️ 4.37 home_tap_card (type, id, position, section)
⏭️ 4.38 home_see_all (section) & home_pull_to_refresh
⏭️ 4.39 Verify in DebugView; guard against event spam

QA & Tests
⏭️ 4.40 Unit: mappers/DTOs, de-dupe util, query key builders
⏭️ 4.41 Unit: reducers/selectors used by Home (if any)
⏭️ 4.42 Integration: Home renders 4 sections with mock data
⏭️ 4.43 Integration: error → retry → success path
⏭️ 4.44 E2E: first launch → sections visible; tap card → detail; back restores scroll
⏭️ 4.45 E2E: offline → cached feed shown; online → refresh updates

Polish
⏭️ 4.46 Micro-interactions (press/hover states; haptics on tap if enabled)
⏭️ 4.47 Consistent radius/shadows aligned with theme tokens
⏭️ 4.48 Compact vs roomy density (respect system font scale)

Security/Privacy
⏭️ 4.49 No PII in logs/analytics params; only IDs/enum fields
⏭️ 4.50 Respect user analytics opt-out

Docs & Emissions
⏭️ 4.51 Update README: Home data flows & section sources
⏭️ 4.52 ADR: Home feed strategy (rule-based → future ML)
⏭️ 4.53 File Tracking Blocks for changed files (with reasons)
⏭️ 4.54 Update /prompt/checklist.md statuses

Rundown Gate (must pass before Phase 5)
⏭️ 4.55 Visual pass: empty/error/loading/filled for each section
⏭️ 4.56 Perf pass: no jank on scroll; images prefetching OK
⏭️ 4.57 A11y pass: SR reads headers/cards; focus order sane
⏭️ 4.58 Analytics pass: events visible once; params correct
⏭️ 4.59 Offline pass: cached content renders; refresh works online
⏭️ 4.60 Final smoke on iOS + Android devices; screenshots captured
⏭️ 4.61 Commit Phase 4 completion

⸻

Phase 5 — Search

⏭️ 5.1 Search root screen scaffold (SearchScreen.tsx) with header + input + tabs
⏭️ 5.2 Tabs scaffold: Songs / Artists / Albums / Playlists (type-safe params)
⏭️ 5.3 Debounced input (300–400ms) with cancel of in-flight queries
⏭️ 5.4 Short-circuit: blank input → show “Discover” panel (trending chips, genres)
⏭️ 5.5 Clear button + keyboard “search” action + auto-focus behavior
⏭️ 5.6 Recent searches store (persisted last 10) with remove/clear-all
⏭️ 5.7 Suggestion row: trending queries + recent chips (tap → fills input + search)
⏭️ 5.8 Query hooks per tab (useSearchSongs/Artists/Albums/Playlists) with React Query
⏭️ 5.9 Result DTOs + mappers (strict types shared across tabs)
⏭️ 5.10 TTLs: cacheTime/staleTime tuned; disable refetch on focus if input unchanged
⏭️ 5.11 Offline fallback: show cached results + banner; disable new queries
⏭️ 5.12 Error states per tab: retry CTA; detailed dev logs, friendly user copy (i18n)
⏭️ 5.13 Empty states: suggestions (genres/tags), “Try a shorter query” guidance

Result Lists & Cards
⏭️ 5.14 Virtualized lists per tab (FlatList) with stable keys + getItemLayout (when feasible)
⏭️ 5.15 TrackResultCard: artwork, title, artist, overflow menu (Play Next, Add to Playlist)
⏭️ 5.16 ArtistResultCard: avatar, name, followers; tap → Artist detail
⏭️ 5.17 AlbumResultCard: cover, title, artist, year; tap → Album detail
⏭️ 5.18 PlaylistResultCard: art, title, owner, count; tap → Playlist detail
⏭️ 5.19 Quick actions: long-press haptics; mini-play preview (short clip if available; else disabled)
⏭️ 5.20 Image prefetch (artwork/avatars) + memoized rows

Query Model (Firebase-first)
⏭️ 5.21 Firestore search strategy (MVP): prefix + token arrays (searchTokens)
⏭️ 5.22 Tokenization util (client/shared): lowercased n-grams for title/artist fields
⏭️ 5.23 Backfill script stub to add searchTokens to existing docs (run via admin tool/manual)
⏭️ 5.24 Composite indexes definition notes (docs) for token queries (where array-contains)
⏭️ 5.25 Fallback: if no tokens present, degrade to “startsWith” where applicable
⏭️ 5.26 (Optional later) Algolia bridge stub (feature-flagged; not required pre-launch)

UI Polish & UX
⏭️ 5.27 Sticky tab bar under search field; progress indicator while querying
⏭️ 5.28 Keep input visible on scroll; tap tab re-executes query for that scope
⏭️ 5.29 “Did you mean” hint (simple heuristic: nearest recent/trending token)
⏭️ 5.30 Deep links: gypsify://search?q=...&tab=songs open with input seeded
⏭️ 5.31 State restore: return from detail keeps list position & query
⏭️ 5.32 i18n for all copy (placeholders, errors, empty, hints)

Performance
⏭️ 5.33 Limit page size; infinite scroll (getNextPageParam) with cursor pagination
⏭️ 5.34 Avoid over-fetch: gate by min chars (≥2) except trending chip taps
⏭️ 5.35 Profiler pass: ensure no dropped frames on rapid typing
⏭️ 5.36 Bundle guard: lazy load heavy result row components if needed

Accessibility
⏭️ 5.37 Input hints/labels; announce result counts; SR reads tab changes
⏭️ 5.38 Buttons 44×44dp; focus order: input → chips → tabs → list
⏭️ 5.39 Large text passes; high-contrast verified

Analytics
⏭️ 5.40 search_query (q, tab, length, source: manual/trending/recent)
⏭️ 5.41 search_result_tap (type, id, position, tab)
⏭️ 5.42 search_clear_recent / search_chip_tap (trending|recent)
⏭️ 5.43 DebugView verification checklist (no PII, only IDs/lengths)

Tests
⏭️ 5.44 Unit: tokenization util (ngrams), DTO mappers, query key builders
⏭️ 5.45 Unit: recent searches reducer/persist logic
⏭️ 5.46 Integration: debounce, cancel inflight, render results per tab
⏭️ 5.47 Integration: offline shows cached + disables query
⏭️ 5.48 E2E: type → results → tap → detail → back retains scroll & query
⏭️ 5.49 E2E: clear recents; tap trending chip flows

Security & Privacy
⏭️ 5.50 No PII in events/queries; log only identifiers/enums
⏭️ 5.51 Respect analytics opt-out; suppress events if disabled

Docs & Emissions
⏭️ 5.52 README section: Search strategy (tokens, limits, future Algolia)
⏭️ 5.53 ADR: “Search v1 — Firebase tokens” with tradeoffs & upgrade path
⏭️ 5.54 File Tracking Blocks for all touched files (reasons + metadata)
⏭️ 5.55 Update /prompt/checklist.md statuses

Rundown Gate (must pass before Phase 6)
⏭️ 5.56 Visual: loading/error/empty/results verified on all tabs
⏭️ 5.57 Perf: typing smooth; network calls debounced; no over-fetch
⏭️ 5.58 A11y: SR workable, focus order correct, large text OK
⏭️ 5.59 Analytics: events visible and de-duplicated in DebugView
⏭️ 5.60 Offline: cached results render; banner + disabled queries work
⏭️ 5.61 Final device smoke (iOS + Android); screenshots captured
⏭️ 5.62 Commit Phase 5 completion

⸻

Phase 6 — Library & Playlists

⏭️ 6.1 Library root with tabs: Playlists / Favorites / Downloads (type-safe params)
⏭️ 6.2 DTOs & types: Track, Playlist, PlaylistSummary, Favorite (strict)
⏭️ 6.3 Firestore schema: playlists/{id} + tracks/{id}; indexes for ownerId, privacy
⏭️ 6.4 Service layer (/src/services/library.ts): list/create/update/delete playlists; add/remove/reorder tracks; toggle privacy
⏭️ 6.5 playlistSlice (Redux Toolkit): state, actions, reducers, selectors
⏭️ 6.6 Optimistic updates: create, title/desc edits, add/remove, reorder; rollback on fail
⏭️ 6.7 Persist playlists (redux-persist/AsyncStorage) with migration key library_v1
⏭️ 6.8 favoritesSlice: toggle favorite track, list favorites, persisted
⏭️ 6.9 React Query integration for server reads (playlist details, counts); cache keys & invalidation
⏭️ 6.10 Playlist list screen: user-owned + saved/followed playlists; empty state CTA
⏭️ 6.11 Create Playlist flow: modal (title, privacy, artwork optional) + validation
⏭️ 6.12 Edit Playlist screen: title/desc/cover/privacy; confirm on discard
⏭️ 6.13 Artwork upload (Firebase Storage): size/type limits, progress, replace/delete
⏭️ 6.14 Reorder tracks (drag & drop) with haptic tick + optimistic index swap
⏭️ 6.15 Track overflow menu: Play Next, Add to Queue, Add to Playlist, Remove
⏭️ 6.16 Add-to-Playlist picker: search user playlists, create-new inline
⏭️ 6.17 Remove-from-Playlist confirm (undo toast, 5s)
⏭️ 6.18 Privacy: public / unlisted / private; share URL for public/unlisted (deeplink)
⏭️ 6.19 Follow/Save playlist (others’ public) → appears in list; unfollow flow
⏭️ 6.20 Favorites screen: sections (Songs/Albums/Artists) or simple list (MVP: Songs)
⏭️ 6.21 Favorites quick toggle on track rows; optimistic UI
⏭️ 6.22 Downloads tab (UI): shows items, size/status; wired to slice; Phase 8 engine flag-gated
⏭️ 6.23 Download actions (disabled until Phase 8): show tooltip “Enable Offline in Phase 8”
⏭️ 6.24 Offline behavior: library & favorites usable from persisted state; banner shown
⏭️ 6.25 Detail screens: Playlist detail (header, owner, actions, tracks list)
⏭️ 6.26 Deep links: gypsify://playlist/:id open detail (guard privacy)
⏭️ 6.27 i18n: all labels, toasts, errors, empty states via keys
⏭️ 6.28 A11y: roles/labels; list items 44×44dp; focus order; SR reads counts & changes
⏭️ 6.29 Performance: FlatList virtualization, keyExtractor, getItemLayout (when stable)
⏭️ 6.30 Image prefetch for covers; memo row components; avoid re-render on slice changes
⏭️ 6.31 Bundle guard: lazy-load playlist detail & artwork picker if needed
⏭️ 6.32 Guard rails: owner-only edits/deletes; block edits when offline (friendly copy)
⏭️ 6.33 Error handling: per-action toasts; retry on transient; surface rule denies
⏭️ 6.34 Security rules additions: playlists write by owner; read by privacy; follow saved in user doc
⏭️ 6.35 Analytics: playlist_create/edit/delete, playlist_follow/unfollow, favorite_toggle, reorder_tracks
⏭️ 6.36 Analytics context: screen, network, counts (no PII)
⏭️ 6.37 Mini-player integration: “Play” on playlist starts queue; enqueue next; resume position
⏭️ 6.38 Queue source tagging (playlistId) for analytics & resume
⏭️ 6.39 Confirmation modals: delete playlist, remove track; consistent button order
⏭️ 6.40 Toasts & haptics (success/warn/error) standardized util
⏭️ 6.41 Empty states: Playlists (create CTA), Favorites (how to add), Downloads (Phase 8 hint)
⏭️ 6.42 Pagination & limits: page size tuned; “Show more” for large lists
⏭️ 6.43 Search within playlist (client-side filter)
⏭️ 6.44 Share sheet (native) for public/unlisted playlists
⏭️ 6.45 Followed playlists refresh on focus (throttled)
⏭️ 6.46 Data migrations stub: playlist shape v1→v2 (future tags)
⏭️ 6.47 Unit tests: playlist & favorites reducers, selectors, optimistic reducers
⏭️ 6.48 Unit tests: services (create/update/remove), artwork validator
⏭️ 6.49 Integration: create → add tracks → reorder → play → persist → reload
⏭️ 6.50 Integration: favorite toggle reflects across views
⏭️ 6.51 E2E: create playlist, add tracks, share, follow from another acct (simulated)
⏭️ 6.52 E2E: offline library shows persisted data; edit blocked with banner
⏭️ 6.53 Dev menu: seed helper to fabricate N sample playlists for visual QA
⏭️ 6.54 Docs: README “Library & Playlists v1” + Firestore rules notes + indexes list
⏭️ 6.55 ADR: Privacy model (public/unlisted/private) & follow semantics
⏭️ 6.56 i18n keys added & referenced; no hard-coded user-facing strings
⏭️ 6.57 File Tracking Blocks for all touched files (reason + metadata)
⏭️ 6.58 Update /prompt/checklist.md statuses

Rundown Gate (must pass before Phase 7)
⏭️ 6.59 Visual QA: lists, detail, create/edit, reorder, favorites behave as designed
⏭️ 6.60 Perf: smooth scroll; no jank on reorder; memory stable on long lists
⏭️ 6.61 A11y pass complete; large text & SR verified
⏭️ 6.62 Security: rules enforce ownership & privacy; negative tests pass
⏭️ 6.63 Analytics events appear once, with correct payloads, opt-out respected
⏭️ 6.64 Offline: persisted library/favorites accessible; clear banners
⏭️ 6.65 Device smoke (iOS + Android): create/edit/share/favorite/play flows OK
⏭️ 6.66 Commit Phase 6 completion

⸻

Phase 7 — Music Playback

⏭️ 7.1 Install & wire expo-av; central AudioService singleton (/src/services/audio.ts)
⏭️ 7.2 Configure Audio.setAudioModeAsync (background, ducking, interruption) per iOS/Android
⏭️ 7.3 Define audio types: AudioSource, PlaybackStatus, QueueItem, RepeatMode
⏭️ 7.4 playerSlice (Redux Toolkit): state {queue[], index, current, isPlaying, shuffle, repeat, position, duration, volume, muted} + actions
⏭️ 7.5 Wire AudioService ↔ playerSlice: dispatch on status updates (position, buffering, ended)
⏭️ 7.6 Queue API: setQueue, enqueueNext, enqueueEnd, removeAt, move(from,to), clear
⏭️ 7.7 Play controls: play(track|index), pause, toggle, seek(ms), next, prev, setVolume, mute/unmute
⏭️ 7.8 Repeat/Shuffle: cycle repeat (off→one→all), toggle shuffle (deterministic seed)
⏭️ 7.9 Preload strategy: prefetch next track (via loadAsync), artwork prefetch (Image.prefetch)
⏭️ 7.10 Error handling: decode/network errors → toast + auto-skip; exponential backoff (2 tries)
⏭️ 7.11 Background & lockscreen: MediaSession metadata + actions (play/pause/skip/seek)
⏭️ 7.12 Headphone/route changes: pause on unplug (configurable), resume on plug (flag)
⏭️ 7.13 Interruptions: handle phone call/audio focus; resume policy (opt-in)
⏭️ 7.14 Persistence: last session snapshot (queue, index, position) to AsyncStorage; resume on launch (opt-in prompt)
⏭️ 7.15 Source resolver: Firebase Storage HTTPS URL signer / cached URL map; offline path integration (Phase 8)
⏭️ 7.16 Bitrate selector (auto/low/med/high) setting stored; re-resolve source on change
⏭️ 7.17 Crossfade (MVP off): scaffold timer-based linear fade in/out (feature flag)
⏭️ 7.18 Gapless-ready hooks (no-op for now), ensure no double-loads
⏭️ 7.19 Full-screen Player UI: artwork, title/artist, scrubber, elapsed/remaining, repeat/shuffle, queue button
⏭️ 7.20 Mini-player persistent bar: artwork thumb, title/artist, play/pause, next, expand
⏭️ 7.21 Queue screen: reordering (drag & drop), remove, tap-to-skip-to
⏭️ 7.22 Track options sheet (from anywhere): add to playlist, favorite toggle, share, go to artist/album
⏭️ 7.23 Haptics: ticks on scrub end, reorder, like/favorite
⏭️ 7.24 A11y: focus order, SR labels for controls, 44×44dp targets, slider accessible
⏭️ 7.25 i18n: all labels/tooltips/errors/toasts via keys
⏭️ 7.26 Performance: avoid re-renders (memo row, selective selectors), throttle status update to ~250ms
⏭️ 7.27 Memory guard: unload previous when moving >1 ahead; artwork cache limits
⏭️ 7.28 Analytics: playback_start, playback_pause, playback_complete, skip_next/prev, seek, buffer_start/end, queue_modify (with context: trackId, playlistId, position, network)
⏭️ 7.29 Crashlytics breadcrumbs around playback state changes
⏭️ 7.30 Deep link intents: gypsify://play/track/:id starts playback; respects verification/entitlements
⏭️ 7.31 Entitlements hook: block HQ/Offline controls for non-premium (tie to Phase 11 later; show paywall)
⏭️ 7.32 Foreground service (Android) / Now Playing info (iOS) icons & actions validated
⏭️ 7.33 Dev toggles: simulate poor network, force decode error, force interruption (hidden debug menu)
⏭️ 7.34 Unit tests: playerSlice reducers/selectors (play/pause/next/prev/seek/shuffle/repeat)
⏭️ 7.35 Unit tests: AudioService logic with mocked expo-av (status mapping, error paths)
⏭️ 7.36 Integration: play from Home card → mini → expand → queue reorder → resume on relaunch
⏭️ 7.37 Integration: interruption (incoming call) pauses; resume policy works
⏭️ 7.38 E2E (Detox): background play, lockscreen controls, next/prev, scrub
⏭️ 7.39 Docs: README “Playback v1” (modes, persistence, error handling), ADR: repeat/shuffle design
⏭️ 7.40 i18n keys added & referenced; no hard-coded strings
⏭️ 7.41 File Tracking Blocks for all touched files; update /prompt/checklist.md

Rundown Gate (must pass before Phase 8)
⏭️ 7.42 Visual QA: mini/full player parity, queue ops, metadata correctness
⏭️ 7.43 Perf: smooth 60fps scrub/animations; CPU/memory within budget; no leaks on track changes
⏭️ 7.44 A11y: SR pass, large text, contrast; slider operable with SR
⏭️ 7.45 Reliability: 50-track stress queue; no stuck states; recover from 3 consecutive errors
⏭️ 7.46 Background/lockscreen verified on both platforms
⏭️ 7.47 Analytics fire once each; opt-out respected; Crashlytics breadcrumbs present
⏭️ 7.48 Offline guard: attempts to play non-downloaded content show friendly banner (until Phase 8)
⏭️ 7.49 Device smoke (iOS + Android): play/pause/seek/skip/queue reorder OK
⏭️ 7.50 Commit Phase 7 completion

⸻

Phase 8 — Offline Mode

⏭️ 8.1 Install libs: expo-file-system, expo-task-manager, expo-network, expo-sqlite (or MMKV), @react-native-community/netinfo
⏭️ 8.2 Create DownloadService (/src/services/downloads.ts): start/pause/resume/cancel, progress callbacks, error mapping
⏭️ 8.3 Index storage: downloadsIndex in SQLite/MMKV with schema: {id, trackId, bytesTotal, bytesDownloaded, status, quality, fileUri, checksum?, updatedAt}
⏭️ 8.4 File layout: FileSystem.documentDirectory + 'downloads/<quality>/<trackId>.mp3' (+ artwork /<trackId>.jpg)
⏭️ 8.5 Quality policy: low/med/high bitrates; source resolver maps to Firebase Storage URLs
⏭️ 8.6 Entitlement gate: premium-only for offline (tie to Phase 11 flags), friendly paywall if blocked
⏭️ 8.7 Disk space check before enqueue (target bytes + 10% headroom); surface “not enough space” error
⏭️ 8.8 Parallelism: max 2 concurrent downloads; queue rest (FIFO), configurable in flags
⏭️ 8.9 Retries: auto backoff ×2 on network/HTTP; persist last error
⏭️ 8.10 Pause/Resume API; resume uses resumeDownloadAsync when possible, else range request fallback
⏭️ 8.11 Wi-Fi only toggle; block on cellular when on and show CTA
⏭️ 8.12 Background task: register TaskManager to keep downloads alive with OS constraints
⏭️ 8.13 Connectivity watcher: auto-pause when offline; auto-resume when online + policy ok
⏭️ 8.14 Integrity check (optional): store SHA256/MD5 from metadata; verify on completion (feature-flagged)
⏭️ 8.15 Artwork/cache: download artwork once per track; purge policy aligns with media purge
⏭️ 8.16 Storage guard: purge LRU when free space < threshold (config), confirm with user
⏭️ 8.17 Sign-out cleanup: cancel active downloads; delete files; wipe index safely
⏭️ 8.18 Migration hook: v0→v1 if switching MMKV/SQLite or path layout
⏭️ 8.19 Offline guard UX: global banner + route to Downloads when attempting network-only content offline
⏭️ 8.20 Downloads UI (tab): list, filters (All/In progress/Completed/Failed), progress bars, per-item actions
⏭️ 8.21 Track detail CTA: “Download” / “Remove download” with state sync
⏭️ 8.22 Playlist download: batch enqueue (dedupe by trackId), group progress, cancel all
⏭️ 8.23 Error surfaces: per-item error chip + retry button; snackbars for global failures
⏭️ 8.24 Player integration: prefer local fileUri when downloaded (seamless handoff), fall back to network
⏭️ 8.25 Airplane-mode playback: ensure player reads local sources; suppress network toasts
⏭️ 8.26 Analytics: download_start, download_progress(rounded), download_success, download_fail{code}, download_delete, offline_playback_start (+ track/playlist, quality, network state)
⏭️ 8.27 Crashlytics breadcrumbs around enqueue, fail, resume, purge
⏭️ 8.28 A11y: controls 44×44dp, SR labels for “Download/Pause/Resume/Remove”, progress announced politely
⏭️ 8.29 i18n: all strings/empty states/errors via keys
⏭️ 8.30 Performance: throttle progress updates to ~250ms; virtualized list; avoid re-renders with selectors
⏭️ 8.31 Privacy: no PII in file names; don’t log Storage URLs; no tokens persisted
⏭️ 8.32 Security rules sanity: clients read Storage objects they own/are public; respect role checks
⏭️ 8.33 Settings screen toggles: Wi-Fi only, quality default, auto-delete finished on low storage
⏭️ 8.34 Deep links (optional): gypsify://downloads opens Downloads tab; gypsify://download/track/:id enqueues
⏭️ 8.35 State shape: downloadsSlice with maps by id + selectors (inProgress, byTrackId, completed, failed)
⏭️ 8.36 Persist slice via redux-persist; rehydrate reconciles with index + file existence
⏭️ 8.37 File existence check on launch; mark missing files as orphaned and offer cleanup
⏭️ 8.38 Batch actions: “Pause all”, “Resume all”, “Cancel all”, “Remove completed”
⏭️ 8.39 Playlist delta updates: if playlist changes, new tracks offered for download (non-destructive)
⏭️ 8.40 Background fetch (optional): resume few queued items when on charger + Wi-Fi
⏭️ 8.41 Unit tests: reducers/selectors; enqueue, progress apply, fail, resume, purge
⏭️ 8.42 Unit tests: DownloadService progress + retry logic (mock FileSystem)
⏭️ 8.43 Integration: download track → play offline → delete → fallback to network
⏭️ 8.44 Integration: playlist bulk download with dedupe + cancel all
⏭️ 8.45 E2E (Detox): airplane mode → open app → play downloaded track; verify no network calls
⏭️ 8.46 E2E: low-storage simulation → user sees guard and purge flow works
⏭️ 8.47 Docs: README “Offline v1” (policies, limits, troubleshooting), ADR: storage index choice
⏭️ 8.48 i18n keys verified; no hard-coded strings; a11y pass on Downloads
⏭️ 8.49 File Tracking Blocks for all touched files; update /prompt/checklist.md
⏭️ 8.50 Commit Phase 8 completion

Rundown Gate (must pass before Phase 9)
⏭️ 8.51 Stress: 100 tracks queued, app background/foreground cycles, no stuck states
⏭️ 8.52 Recovery: kill app mid-download → relaunch resumes correctly; no index/file drift
⏭️ 8.53 Space: simulate <200 MB free → guard triggers; purge flow restores space
⏭️ 8.54 Policy: Wi-Fi only honored; cellular block prompts correctly
⏭️ 8.55 Playback: local files always preferred; seamless switch when network returns
⏭️ 8.56 Analytics/Crashlytics events present once each; opt-out respected
⏭️ 8.57 Performance: UI remains responsive; CPU/battery within budget during long downloads
⏭️ 8.58 Security: no tokens/URLs stored in plaintext logs; Storage access respects rules
⏭️ 8.59 Device smoke (iOS + Android real devices): queue, pause, resume, delete, offline playback OK
⏭️ 8.60 Gate PASS → proceed to Phase 9

⸻

Phase 9 — Social Core

⏭️ 9.1 Data models: Post, Comment, Like, Follow, Report, Block (TS types + Firestore schemas)
⏭️ 9.2 Collections/paths:
 - posts/{postId} (ownerId, text, media[], createdAt, likeCount, commentCount, visibility)
 - posts/{postId}/comments/{commentId}
 - userSocial/{uid}/following/{targetUid} & .../followers/... (or a single follows collection)
 - reports/{id} (targetType, targetId, reason, reporterId, status)
 - blocks/{id} or userSocial/{uid}/blocks/{blockedUid}
⏭️ 9.3 Security rules (least-privilege): create/read/update/delete scope by owner/mod/admin; enforce block/visibility
⏭️ 9.4 Firestore indexes for common queries (feed by followings, post comments by createdAt, trending)
⏭️ 9.5 Media policy: image uploads to users/{uid}/posts/{postId}/{file}.jpg with size/type validation

Core features
⏭️ 9.6 Create Post screen: text (limit/emoji), optional images (multi-select), preview, progress, error handling
⏭️ 9.7 Post visibility: public/unlisted/followers-only (guarded in rules + UI)
⏭️ 9.8 Edit/Delete own post (edit window policy configurable)
⏭️ 9.9 Like/Unlike post (optimistic; dedupe; count sync)
⏭️ 9.10 Comment: add/delete own comment; nested replies (v2 flag) or flat list v1
⏭️ 9.11 Report content (post/comment/user) with reasons (spam, hate, NSFW, other)
⏭️ 9.12 Block user: hide their posts/comments, prevent DM/follow/mention (future)
⏭️ 9.13 Follow/Unfollow artist/users (optimistic, counts, guard if blocked)
⏭️ 9.14 Activity Feed: “from following” timeline (paginated, by createdAt desc)
⏭️ 9.15 Trending Feed (Phase-4 signal reuse): order by engagement/recency; server function or client aggregate
⏭️ 9.16 Profile social section: posts tab, followers/following counts & lists
⏭️ 9.17 Deep links: gypsify://post/:id, gypsify://user/:uid open appropriate screen
⏭️ 9.18 Empty/error states with CTAs (follow artists, discover)

Moderation & rate limits
⏭️ 9.19 Client-side rate limit UI (cooldowns) for post/comment (e.g., 1 post/30s, 1 comment/5s)
⏭️ 9.20 Firestore/Functions-backed write throttling (server-side)
⏭️ 9.21 Admin-only moderation actions scaffold (hide post/comment, mark report resolved)
⏭️ 9.22 NSFW/explicit flag respected from track metadata (hide covers/blur media when opted)
⏭️ 9.23 Block enforcement in queries: exclude blocked users’ content at source (query + client filter)
⏭️ 9.24 Abuse reporting pipeline: create reports doc; notify admin channel (placeholder Function)

UX & A11y
⏭️ 9.25 Post cell component: avatar, name, timestamp (relative), more-menu, like/comment counts
⏭️ 9.26 Comment list: virtualized; “load more” pagination; inline composer
⏭️ 9.27 Image grid: responsive, tap-to-zoom viewer, cached thumbnails
⏭️ 9.28 A11y: roles/labels on like/comment/report; dynamic type; focus order; 44×44 targets
⏭️ 9.29 i18n: all strings and error messages via keys
⏭️ 9.30 Haptics: light impact on like/follow actions (flagged)

State & caching
⏭️ 9.31 React Query for lists (feed, comments) with sane staleTime & pagination cursors
⏭️ 9.32 Redux slices (minimal): socialPrefs (mute NSFW, showCounts), blocks cache
⏭️ 9.33 Optimistic updates with rollback for like/follow; toast on rollback
⏭️ 9.34 Image cache policy (pre-size, memory/disk caps)

Analytics & Crashlytics
⏭️ 9.35 Events: post_create, post_view, like_tap, comment_create, follow_tap, report_submit, block_create (with surface, ids hashed)
⏭️ 9.36 Funnel: feed_impression → post_view → engagement (like/comment/follow)
⏭️ 9.37 Crash breadcrumbs around post create, comment submit, report submit

Performance & privacy
⏭️ 9.38 Feed virtualization (windowed lists), keyExtractor stable, getItemLayout when possible
⏭️ 9.39 Batch reads; avoid N+1 (join author basics via denormalized fields)
⏭️ 9.40 No PII in logs; redact user identifiers in analytics; respect analytics opt-out
⏭️ 9.41 Bundle budget: lazy-load image viewer & post composer

Testing
⏭️ 9.42 Unit: reducers/selectors for likes/follows/blocks
⏭️ 9.43 Unit: utilities (rate limit timers, visibility checks)
⏭️ 9.44 Integration: create post → appears in feed; like/comment optimistic then server-confirmed
⏭️ 9.45 Integration: block user → their content disappears from feed & profile
⏭️ 9.46 Integration: report flow writes reports & UI acknowledges
⏭️ 9.47 E2E (Detox): scroll feed → open post → add comment → back → state preserved
⏭️ 9.48 E2E: follow artist → Home/Feed updates; unfollow reverts

Docs & emissions
⏭️ 9.49 README: “Social v1” (models, rules, limits, moderation) + ADR for follow graph storage choice
⏭️ 9.50 File Tracking Blocks for all touched files; update /prompt/checklist.md
⏭️ 9.51 Commit Phase 9 completion

Rundown Gate (must pass before Phase 10)
⏭️ 9.52 Security: rules verified on emulator for owner vs non-owner; blocked-user access prevented
⏭️ 9.53 Performance: feed scroll p95 fps ≥ target; image loads under threshold on typical network
⏭️ 9.54 Consistency: optimistic updates settle to server truth; no phantom likes/comments
⏭️ 9.55 Moderation: reports created; admin tools stub reachable; rate limits effective
⏭️ 9.56 A11y/i18n: audit passes; no hardcoded strings; dynamic type OK
⏭️ 9.57 Analytics: events show in DebugView; opt-out respected
⏭️ 9.58 Device smoke (iOS + Android): post, like, comment, follow, block, report flows clean
⏭️ 9.59 Gate PASS → proceed to Phase 10

⸻

Phase 10 — Artist Tools (MVP)

Data models & storage
⏭️ 10.1 TS types & Firestore schemas: ArtistProfile, UploadDraft, TrackRelease, ArtworkAsset, ArtistApplication
⏭️ 10.2 Collections/paths:
 - artistProfiles/{artistId} (uid, displayName, bio, socials, verified, createdAt)
 - artistApplications/{appId} (applicantUid, links, notes, status: pending/approved/rejected, reviewerUid, timestamps)
 - tracks/{trackId} (ownerUid, title, duration, explicit, artworkUrl, storagePath, status: draft/published, visibility, createdAt)
 - Storage: artists/{uid}/tracks/{trackId}/source.{mp3|m4a}, .../artwork.jpg
⏭️ 10.3 Security rules:
 - Only ownerUid can write their drafts/track files; publish toggles allowed by owner.
 - Only admin can approve applications / set verified=true.
 - Read: only published & visible (public/unlisted by id).
⏭️ 10.4 Indexes: tracks by ownerUid+createdAt, published desc; applications by status+createdAt.

Artist application (listener → artist)
⏭️ 10.5 Application form (from listener account): stage name, genre tags, links, bio snapshot.
⏭️ 10.6 Submit → create artistApplications doc; prevent duplicate pending by applicantUid.
⏭️ 10.7 Admin review screen (in-app “Admin Tools”): list pending, view details, approve/reject with reason.
⏭️ 10.8 On approve: set artistProfiles/{uid} (verified=true), upgrade role in user doc; retain same uid & data.
⏭️ 10.9 Notifications/toasts: submitted, approved, rejected (with message).
⏭️ 10.10 Rate-limit: 1 open application per user; 14-day cooldown after rejection.

Upload UI & validation
⏭️ 10.11 Track Upload screen: file picker (audio), artwork picker (image), metadata form (title, explicit, optional ISRC).
⏭️ 10.12 Client validations:
 - Audio: types audio/mpeg, audio/aac, audio/mp4; size ≤ 30MB (soft-launch cap).
 - Artwork: JPEG/PNG ≤ 2MB; square recommended; min 1000×1000.
 - Title non-empty; length ≤ 120; no forbidden chars.
⏭️ 10.13 Duration read via expo-av; bitrate optional; store in track doc.
⏭️ 10.14 Resumable uploads (Firebase Storage): show progress %, cancel, retry.
⏭️ 10.15 Background-safe: persist pending upload jobs (MMKV) to resume after relaunch.
⏭️ 10.16 Artwork processing (client): downscale & compress before upload.
⏭️ 10.17 Custom metadata on Storage object: {ownerUid, trackId, contentHash}.

Draft → publish workflow
⏭️ 10.18 Save draft: create tracks/{trackId} status=draft; link temp storage paths.
⏭️ 10.19 Publish action: final validations (files exist, duration > 10s, artwork present unless waived).
⏭️ 10.20 Visibility: public / unlisted (shareable link) / private (draft only).
⏭️ 10.21 Edit metadata post-publish (non-breaking fields only: title, explicit, artwork).
⏭️ 10.22 Unpublish (soft): set status=draft; hide from discovery, keep perms/likes intact.
⏭️ 10.23 Delete track: confirm modal; delete Storage files and doc (guard if referenced in playlists → soft-delete flag).

Artist profile management
⏭️ 10.24 Profile screen: displayName, avatar, banner, bio (limits), socials (IG/Twitter/YouTube).
⏭️ 10.25 Link artist profile to public page (deep link gypsify://artist/:uid).
⏭️ 10.26 Counts: tracks, monthly listeners (placeholder), followers (from Social).
⏭️ 10.27 Verified badge rendering when verified=true.

Moderation & content policy
⏭️ 10.28 Explicit flag enforced in UI & track doc; show advisory on player.
⏭️ 10.29 Report flow reuse for tracks; admin hide/restore.
⏭️ 10.30 Basic DMCA intake stub: reports with type=dmca, required fields; admin-only action placeholder.
⏭️ 10.31 Quotas (soft launch): max 20 tracks/artist; per-day upload cap; surface friendly messages.

UX, A11y, i18n
⏭️ 10.32 Upload progress UI: cancel/retry; failure reasons localized.
⏭️ 10.33 Draft list screen with badges (missing artwork, missing title).
⏭️ 10.34 A11y: labels for pickers/buttons; large touch targets; focus management on errors.
⏭️ 10.35 i18n keys for all strings; no hardcoded text.
⏭️ 10.36 Haptics on publish success.

State, caching, performance
⏭️ 10.37 React Query: my-tracks list (ownerUid), drafts, single track; cache & background refetch.
⏭️ 10.38 Optimistic draft creation; rollback on failure.
⏭️ 10.39 Storage upload chunk tuning (default fine); throttle setState to avoid jank.
⏭️ 10.40 Bundle: lazy-load upload & image compressor modules.

Analytics & Crashlytics
⏭️ 10.41 Events: artist_application_submit/approve/reject, upload_start/progress/complete/fail, track_publish/unpublish, artwork_select/validate_fail.
⏭️ 10.42 Attributes: fileSizeBucket, durationBucket, networkType (if available), retriesCount.
⏭️ 10.43 Crash breadcrumbs around pickers, upload start/finish.

Testing
⏭️ 10.44 Unit: validators (file type/size, title rules, artwork dimensions).
⏭️ 10.45 Unit: reducers/helpers for draft management.
⏭️ 10.46 Integration: upload audio+artwork → draft → publish → visible on profile & searchable.
⏭️ 10.47 Integration: listener applies → admin approves → role upgrades; upload becomes enabled.
⏭️ 10.48 Rules tests (emulator): owner write paths, publish read, admin-only approvals.
⏭️ 10.49 E2E (Detox): end-to-end upload & publish; cancel/resume mid-upload; reject oversized file shows error.

Docs & emissions
⏭️ 10.50 README section “Artist Tools v1”: workflow, quotas, file rules, support matrix.
⏭️ 10.51 ADR: “No server transcoding (soft launch); client validation + MP3/AAC only”.
⏭️ 10.52 File Tracking Blocks for all touched files; update /prompt/checklist.md.
⏭️ 10.53 Commit Phase 10 completion.

Rundown Gate (must pass before Phase 11)
⏭️ 10.54 Security: rules verified (only owner writes; only admin approves; published read only).
⏭️ 10.55 Reliability: resume upload after app restart; cancel/retry works; no orphaned Storage files.
⏭️ 10.56 UX/A11y/i18n: errors localized; labels present; large text OK.
⏭️ 10.57 Performance: upload UI stays responsive; artwork compression < threshold; bundle budget respected.
⏭️ 10.58 Analytics visible in DebugView; Crashlytics smoke events present.
⏭️ 10.59 Device smoke (iOS + Android): apply → approve → upload → publish → play → unpublish.
⏭️ 10.60 Gate PASS → proceed to Phase 11.

⸻

Phase 11 — Monetization

Strategy & products
⏭️ 11.1 Pricing matrix & SKUs: 1 subscription tier “Listener+ $4.99/mo”, product IDs aligned (iOS/Android).
⏭️ 11.2 Entitlements model (client types): premium: boolean, sources: receipt, grace, promo.
⏭️ 11.3 Gated features list: Offline downloads, Ad-free, HQ audio, Unlimited skips (toggleable via flags).

Store configuration
⏭️ 11.4 App Store Connect: create auto-renewable sub, localizations, review notes.
⏭️ 11.5 Google Play Console: create subscription base plan + offer; intro price optional.
⏭️ 11.6 Platform metadata parity check (productId, price, titles, descriptions).

Library & setup
⏭️ 11.7 Choose IAP lib compatible with Expo SDK 53 (config-plugin path).
⏭️ 11.8 Wire purchase client: init, getProducts, requestPurchase, getAvailablePurchases, finish/acknowledge.
⏭️ 11.9 Environment gates: sandbox vs production; test users configured.

Paywall UX
⏭️ 11.10 Paywall screen: benefits matrix, monthly price, terms links, restore button, CTA → “Continue”.
⏭️ 11.11 Entry points: mini-player limit, offline prompt, ads “remove ads” banner, Profile → Upgrade.
⏭️ 11.12 A/B-ready layout slots (copy/images) behind feature flags.

Client purchase flow
⏭️ 11.13 Fetch products w/ locale-aware price.
⏭️ 11.14 Start purchase → handle: success, user cancel, deferred/Ask-to-Buy, failure.
⏭️ 11.15 Acknowledge/finish transaction (platform-specific).
⏭️ 11.16 Persist provisional entitlement pending server verification.

Server verification (stub + path to prod)
⏭️ 11.17 Cloud Function endpoint: /iap/verify (token exchange + verification).
⏭️ 11.18 iOS: verify receipt w/ App Store; Android: verify purchase via Play Developer API.
⏭️ 11.19 On valid → set users/{uid}.entitlements.premium=true, expiry, source='receipt'.
⏭️ 11.20 On invalid → revoke provisional entitlement; show friendly error.
⏭️ 11.21 Log verification results (no PII; redact tokens).

Restore & lifecycle
⏭️ 11.22 Restore purchases (both stores) → re-verify → update entitlements.
⏭️ 11.23 Grace period handling (source='grace'): keep features active until graceEnd.
⏭️ 11.24 Billing retry & pause states (Android): reflect limited access message.
⏭️ 11.25 Refund/revocation webhook (stub): mark premium=false; notify user in-app.

Entitlement gating
⏭️ 11.26 Central useEntitlements() hook (memoized, persisted).
⏭️ 11.27 Feature gates:
 - Offline: block enqueue; show paywall.
 - Ads: hide for premium.
 - HQ audio: toggle selectable only if premium.
⏭️ 11.28 Fallback UI: skeleton + “Upgrade to unlock” components, i18n’d.

Ads for free tier (minimal, compliant)
⏭️ 11.29 Ads SDK setup (Google Mobile Ads): app IDs via env; no secrets in code.
⏭️ 11.30 Placements: Home banner; interstitial between tracks (freq cap, no spam).
⏭️ 11.31 Disable all ads when premium=true.
⏭️ 11.32 Consent (GDPR/UMP): prompt flow; store preference; request non-personalized if declined.

Compliance & review
⏭️ 11.33 Terms of Service & Privacy Policy links from paywall and settings.
⏭️ 11.34 “Manage Subscription” deep links (iOS Subscriptions, Play subscriptions).
⏭️ 11.35 Clear pricing & renewal text; free trial disclosure if used.
⏭️ 11.36 Account deletion path documented (store guideline requirement).

Analytics & logging
⏭️ 11.37 Events: paywall_view, purchase_start, purchase_success, purchase_fail, restore_start/success, entitlement_update, ads_impression/click.
⏭️ 11.38 Params: productId, price, currency, flow (entry_point), errorCode, networkType (if available).
⏭️ 11.39 Crash breadcrumbs around purchase/restore/verify.

Edge cases & resilience
⏭️ 11.40 Deferred/Ask-to-Buy → show pending state; poll restore.
⏭️ 11.41 Network loss mid-flow → retry queue; idempotent verification.
⏭️ 11.42 Duplicate acknowledgements handled safely.
⏭️ 11.43 Multi-device sync: entitlement reads reflect server within seconds (onFocus/refetch).

Testing
⏭️ 11.44 Unit: entitlement reducer/hook; paywall copy render.
⏭️ 11.45 Integration: purchase success → entitlement true → offline allowed; restore flow.
⏭️ 11.46 Sandbox runs: iOS TestFlight, Android Internal; screenshots of receipts (redacted).
⏭️ 11.47 Negative tests: cancel, fail, deferred, refund → entitlement revoked.
⏭️ 11.48 Ads tests: premium hides ads; consent states respected.

Docs & emissions
⏭️ 11.49 README “Monetization v1”: SKUs, flows, gating matrix, troubleshooting.
⏭️ 11.50 ADR: “Client-first gating with server verification stub; upgrade path to full webhooks”.
⏭️ 11.51 File Tracking Blocks for all touched files; update /prompt/checklist.md.
⏭️ 11.52 Commit Phase 11 completion.

Rundown Gate (must pass before Phase 12)
⏭️ 11.53 Purchases: buy/ack/verify/entitle works on both platforms.
⏭️ 11.54 Restore & refund paths correct; grace handled; no stale premium.
⏭️ 11.55 Ads never show for premium; consent flows logged; policy-compliant.
⏭️ 11.56 A11y/i18n complete; pricing readable with screen readers.
⏭️ 11.57 Analytics visible in DebugView; Crashlytics breadcrumbs present.
⏭️ 11.58 Device smoke (iOS+Android): free → paywall → purchase → offline OK → restore on 2nd device.
⏭️ 11.59 Gate PASS → proceed to Phase 12.

⸻

Phase 12 — Analytics & Crash Monitoring

Foundation & standards
⏭️ 12.1 Define global event schema doc: names, params, types, units, conventions (snake_case).
⏭️ 12.2 Event categories: auth, playback, playlist, search, social, iap, ads, navigation.
⏭️ 12.3 Add lint rule/pre-commit check for event names → must exist in schema doc.
⏭️ 12.4 Version event schema (/docs/events-v1.md); include migration notes.

Firebase Analytics
⏭️ 12.5 Integrate Firebase Analytics core; ensure setUserId, setUserProperties.
⏭️ 12.6 Log key funnels: sign_up, login, search_query, playback_start/complete, playlist_create, purchase_success.
⏭️ 12.7 Enable DebugView in dev builds (EXPO_PUBLIC_FIREBASE_DEBUG_ANALYTICS=true).
⏭️ 12.8 Add session_start/session_end tracking via navigation listener.

Crash & error monitoring
⏭️ 12.9 Integrate Crashlytics (fatal + non-fatal).
⏭️ 12.10 Add non-fatal logError util (category, context, error message, stack).
⏭️ 12.11 Breadcrumbs: auth events, playback start/stop, purchases, navigation route changes.
⏭️ 12.12 Smoke test: throw intentional error in dev → visible in Firebase console.

Opt-outs & compliance
⏭️ 12.13 GDPR toggle: settings → disable analytics, clearUserProperties, stop logging.
⏭️ 12.14 Ensure no PII logged: no emails, no raw IDs, only hashed anon IDs.
⏭️ 12.15 Consent screen (if EU region detected): opt-in default false, persisted.

Optional (future-proof)
⏭️ 12.16 Integrate Sentry (Expo SDK plugin) for richer error tracking (web + RN).
⏭️ 12.17 Dual-emit errors (Crashlytics + Sentry) behind flag.
⏭️ 12.18 Add performance monitoring stub (Sentry traces or Firebase perf).

Testing & validation
⏭️ 12.19 Unit test: mock logEvent util, ensure schema validation passes.
⏭️ 12.20 Integration test: trigger login → event appears in DebugView.
⏭️ 12.21 Detox E2E: toggle analytics off → no events logged.
⏭️ 12.22 Error injection: simulate playback error → logged to Crashlytics.

Docs & emissions
⏭️ 12.23 Update /docs/events-v1.md with event catalog.
⏭️ 12.24 ADR: “Adopt Firebase Analytics + Crashlytics as v1 telemetry backend, optional Sentry for extended coverage.”
⏭️ 12.25 File Tracking Blocks; update /prompt/checklist.md.
⏭️ 12.26 Commit Phase 12 completion.

Rundown Gate (must pass before Phase 13)
⏭️ 12.27 Events visible in DebugView for dev; none when toggle off.
⏭️ 12.28 Crashlytics logs both fatal & non-fatal; breadcrumbs present.
⏭️ 12.29 GDPR/consent respected; no PII leaks.
⏭️ 12.30 Docs current with schema; ADR committed.
⏭️ 12.31 Device smoke: cause error, log playback, log purchase → confirm all appear in console.
⏭️ 12.32 Gate PASS → proceed to Phase 13.

⸻

Phase 13 — UI/UX Polish

Design system foundation
⏭️ 13.1 Define design tokens: color palette, typography scale, spacing, radius, elevation.
⏭️ 13.2 Store tokens in /src/styles/tokens.ts and sync with Tailwind config.
⏭️ 13.3 Document tokens in /docs/design-tokens.md with examples.
⏭️ 13.4 Implement global theme provider (dark/light mode switch).
⏭️ 13.5 Default dark mode ON; toggle persisted in AsyncStorage.
⏭️ 13.6 Build responsive layouts for tablets & larger devices.

Animations & motion
⏭️ 13.7 Define animation guidelines: duration, easing curves, respect “reduce motion”.
⏭️ 13.8 Smooth transitions with Reanimated/native driver.
⏭️ 13.9 Page transitions: fade/slide consistent across navigation stack.
⏭️ 13.10 Micro-interactions: like button → haptic + scale bounce.

Accessibility (A11y) polish
⏭️ 13.11 Screen reader labels for all interactive UI elements.
⏭️ 13.12 Font scaling support (Dynamic Type).
⏭️ 13.13 Contrast compliance: AA minimum, AAA target for text.
⏭️ 13.14 RTL support (mirroring layouts).
⏭️ 13.15 Ensure touch targets ≥44×44dp.

UI refinements
⏭️ 13.16 Apply consistent spacing, radii, typography, shadows.
⏭️ 13.17 Global shimmer loaders + skeletons for loading states.
⏭️ 13.18 Empty states with illustrations + i18n text.
⏭️ 13.19 Consistent button hierarchy: primary, secondary, ghost.
⏭️ 13.20 Iconography consistent (Feather or Material Icons set).

Feedback & haptics
⏭️ 13.21 Integrate expo-haptics for key actions: play, like, add to playlist.
⏭️ 13.22 Non-intrusive toast/snackbar feedback for actions (undo where relevant).
⏭️ 13.23 Confirm destructive actions with modal (delete, sign-out).

Testing
⏭️ 13.24 Unit test: theming utils (colors, tokens, spacing).
⏭️ 13.25 Integration test: toggle dark/light mode → global UI updates.
⏭️ 13.26 E2E Detox: accessibility audit (voiceover, large text mode, RTL).
⏭️ 13.27 Snapshot test UI for key screens (Home, Search, Player, Library).

Docs & emissions
⏭️ 13.28 Update /docs/design-system.md with tokens, themes, animations, accessibility notes.
⏭️ 13.29 ADR: “Adopt token-based design system with dark/light mode and accessibility-first UI.”
⏭️ 13.30 File Tracking Blocks; update /prompt/checklist.md.
⏭️ 13.31 Commit Phase 13 completion.

Rundown Gate (must pass before Phase 14)
⏭️ 13.32 All UI follows design tokens and global theme.
⏭️ 13.33 Animations respect system “reduce motion”.
⏭️ 13.34 Accessibility checks passed (contrast, screen reader, RTL, touch size).
⏭️ 13.35 Dark/light toggle works globally.
⏭️ 13.36 UI smoke tests on iOS + Android devices.
⏭️ 13.37 Gate PASS → proceed to Phase 14.

⸻

Phase 14 — Testing & QA

Test foundations
⏭️ 14.1 Configure Jest + React Native Testing Library baseline.
⏭️ 14.2 Add Firebase, AsyncStorage, and React Query mocks.
⏭️ 14.3 Set coverage thresholds (≥80% critical modules: auth, playback, playlists, payments).
⏭️ 14.4 Add Jest watch scripts (yarn test:unit, yarn test:watch).
⏭️ 14.5 Integrate coverage reporting into CI.

Integration tests
⏭️ 14.6 Define critical flows list (auth → home, search → playback, playlist → download, premium purchase).
⏭️ 14.7 Write integration tests for each critical flow.
⏭️ 14.8 Mock network + Firebase responses for reproducibility.

E2E tests (Detox)
⏭️ 14.9 Configure Detox for iOS + Android simulators.
⏭️ 14.10 Script smoke scenarios: launch → login → play track → logout.
⏭️ 14.11 Script offline scenario: download → airplane mode → playback.
⏭️ 14.12 Script subscription flow: paywall → purchase → premium unlock.
⏭️ 14.13 Add snapshot baseline: Home, Search, Player, Library.

QA & regression
⏭️ 14.14 Manual testing on real iOS + Android devices.
⏭️ 14.15 Regression suite: auth, playback, search, playlist, offline, payments.
⏭️ 14.16 Capture edge cases: slow network, token expiration, full storage.
⏭️ 14.17 Record QA results in /docs/qa-log.md.

CI/CD integration
⏭️ 14.18 Add test stages to CI pipeline: lint → unit → integration → E2E.
⏭️ 14.19 Run parallelized jobs for faster feedback.
⏭️ 14.20 Add failing test reporting in CI logs.
⏭️ 14.21 Block merges if lint/typecheck/tests fail.

Accessibility QA
⏭️ 14.22 Test screen reader flows (iOS VoiceOver, Android TalkBack).
⏭️ 14.23 Test large text scaling and dynamic font support.
⏭️ 14.24 Test RTL layouts with Arabic/Hebrew locales.
⏭️ 14.25 Log results in /docs/accessibility-qa.md.

Security QA
⏭️ 14.26 Run npm audit + yarn audit and record open issues.
⏭️ 14.27 Verify Firestore + Storage rules with emulator tests.
⏭️ 14.28 Check no PII logged in dev/prod builds.

Docs & emissions
⏭️ 14.29 Update /docs/testing-strategy.md (unit, integration, E2E).
⏭️ 14.30 ADR: “Adopt Jest + Detox for layered testing with CI gating.”
⏭️ 14.31 File Tracking Blocks; update /prompt/checklist.md.
⏭️ 14.32 Commit Phase 14 completion.

Rundown Gate (must pass before Phase 15)
⏭️ 14.33 Unit coverage ≥80% for critical modules.
⏭️ 14.34 Integration flows pass reliably on local + CI.
⏭️ 14.35 E2E Detox flows run cleanly on iOS + Android simulators.
⏭️ 14.36 QA regression suite passes on physical devices.
⏭️ 14.37 Accessibility & security QA documented.
⏭️ 14.38 Gate PASS → proceed to Phase 15.

⸻

Phase 15 — Build & Deployment

EAS & project config
⏭️ 15.1 Add eas.json with project ID + channel/branch mapping (dev, preview, prod).
⏭️ 15.2 Configure app identifiers: iOS bundle ID, Android applicationId.
⏭️ 15.3 Configure build profiles: development, preview, production.
⏭️ 15.4 Commit .easignore for unnecessary files (node_modules cache, tests).

iOS setup
⏭️ 15.5 Create App Store Connect app entry.
⏭️ 15.6 Configure provisioning profiles, entitlements (Sign In with Apple, Push, Background Modes).
⏭️ 15.7 Add iOS splash + icons in correct sizes.
⏭️ 15.8 Verify iOS build with Xcode + expo prebuild smoke test.

Android setup
⏭️ 15.9 Create Play Console app entry.
⏭️ 15.10 Generate keystore; store securely.
⏭️ 15.11 Configure Gradle signing config.
⏭️ 15.12 Add adaptive icons + splash for Android.
⏭️ 15.13 Verify Android build with Gradle + expo prebuild smoke test.

Versioning & release metadata
⏭️ 15.14 Define versioning rules (semver patch/minor/major).
⏭️ 15.15 Auto-bump app.json version + iOS/Android build numbers.
⏭️ 15.16 Prepare store metadata: app name, subtitle, description, keywords, screenshots, privacy policy URL.
⏭️ 15.17 Write release notes template (CHANGELOG + App Store + Play Store).

CI/CD build pipelines
⏭️ 15.18 Configure GitHub Actions (or CI) to trigger EAS builds on tags.
⏭️ 15.19 Enable cache for yarn/node_modules for faster builds.
⏭️ 15.20 Add build artifacts upload (IPA/APK/AAB).

Test distribution
⏭️ 15.21 Run first cloud EAS build for iOS → TestFlight.
⏭️ 15.22 Run first cloud EAS build for Android → Internal Testing track.
⏭️ 15.23 Install on real iOS + Android devices.
⏭️ 15.24 Smoke test flows: login → search → play track → logout.

Release management
⏭️ 15.25 Add Git tagging convention (vX.Y.Z).
⏭️ 15.26 Update CHANGELOG.md with release notes per version.
⏭️ 15.27 Create /docs/release-process.md (step-by-step guide).
⏭️ 15.28 EAS Submit automation: send builds to TestFlight & Play Internal Track.
⏭️ 15.29 Setup crash/analytics validation before pushing to wider release.

Monitoring & logging
⏭️ 15.30 Create /docs/deployment-log.md (release metadata, build IDs, test results).
⏭️ 15.31 Verify analytics & Crashlytics events appear in staging builds.
⏭️ 15.32 Verify update delivery (OTA via Expo Updates).

Docs & emissions
⏭️ 15.33 Update /docs/build-deployment-strategy.md.
⏭️ 15.34 ADR: “Adopt Expo EAS for build/distribution.”
⏭️ 15.35 File Tracking Blocks; update /prompt/checklist.md.
⏭️ 15.36 Commit Phase 15 completion.

Rundown Gate (must pass before Phase 16)
⏭️ 15.37 iOS + Android builds install on real devices.
⏭️ 15.38 Core flows validated in TestFlight + Play Console.
⏭️ 15.39 Store metadata drafted.
⏭️ 15.40 Git tagging + release log system in place.
⏭️ 15.41 Gate PASS → proceed to Phase 16.

⸻

Phase 16 — Post-Launch Readiness

Incident & KPI readiness
⏭️ 16.1 Write incident response runbook + severity matrix; define “pause feature work → hotfix branch → patch → postmortem” loop.
⏭️ 16.2 Define KPIs & targets: DAU/WAU/MAU, crash-free %, p50/p90 cold start, playback completion %, premium conversion %.
⏭️ 16.3 Create KPI dashboards (Firebase Analytics + Crashlytics + Perf).
⏭️ 16.4 Set triage cadence (weekly bug review; daily crash spike alerts).
⏭️ 16.5 Set support channels: in-app feedback form, support email, optional Discord.

Push notifications
⏭️ 16.6 Integrate Expo Notifications (permission prompt, token capture, error paths).
⏭️ 16.7 Backend/topic stub for announcements (per-role: listener/artist/admin).
⏭️ 16.8 Test device tokens on iOS/Android; verify receipt + deep link open.
⏭️ 16.9 Settings toggle to opt-out (persisted; respects OS settings).
⏭️ 16.10 A11y/i18n for prompts and settings labels.

Translations (multi-language UX)
⏭️ 16.11 Integrate i18n runtime fully across screens (no hardcoded strings).
⏭️ 16.12 Add initial locales (EN, ES, FR, DE); language selector UI.
⏭️ 16.13 Pseudo-localization pass (length/diacritics); fix truncation.
⏭️ 16.14 RTL check (layout flip, focus order).

Basic personalization (rule-based)
⏭️ 16.15 Implement rule engine: trending + recently played + followed artists.
⏭️ 16.16 Feature flags for experimentation (enable/disable rules by cohort).
⏭️ 16.17 Log inputs/outputs for audit; no PII in logs.
⏭️ 16.18 Unit tests for rules; integration test that Home surfaces signals.

Pre-release quality sweep
⏭️ 16.19 Performance: verify budgets (gz bundle < 1.8 MB; cold start p50/p90).
⏭️ 16.20 Offline sweep: auth cache, downloads, playback offline, reconcile.
⏭️ 16.21 Background playback + lockscreen controls on both OSes.
⏭️ 16.22 A11y audit: labels, 44×44dp, large text, VoiceOver/TalkBack.
⏭️ 16.23 Security: Firestore/Storage rules smoke (least-privilege), no PII in logs.
⏭️ 16.24 Privacy: data deletion path documented; Analytics opt-out works.
⏭️ 16.25 Store compliance: age rating, content disclosures align with app.
⏭️ 16.26 App icons/screenshots/splash match brand in all sizes.

Soft-launch plan & gating
⏭️ 16.27 Define soft-launch cohort (TestFlight/Play Internal) + regions.
⏭️ 16.28 Success thresholds: crash-free ≥ 99.5%, ANR ≤ 0.3%, core funnel CVR target.
⏭️ 16.29 Collect feedback (in-app + store test notes); triage top issues.
⏭️ 16.30 Patch critical bugs; re-spin builds; re-validate thresholds.

Consumer-Ready gate
⏭️ 16.31 Checklist: Phases 1–16 ✅, QA passes, A11y/Perf/Security ✅, Analytics/Crash/Feedback/Translations ✅.
⏭️ 16.32 Final smoke on real devices (fresh install) across core flows.
⏭️ 16.33 Mark Consumer-Ready → safe for App Store + Google Play publishing.
⏭️ 16.34 Update /prompt/checklist.md, File Tracking Blocks, and CHANGELOG.
⏭️ 16.35 Commit Phase 16 completion.

⸻

Phase 17 — Launch & Growth Enablement

App Store / Play Store readiness
⏭️ 17.1 Finalize store metadata: title, subtitle, description, keywords, categories, content rating.
⏭️ 17.2 Upload screenshots (iPhone, iPad, Android phone, tablet).
⏭️ 17.3 Add app preview video (optional, but boosts conversion).
⏭️ 17.4 Privacy policy URL + Terms of Service URL live and linked.
⏭️ 17.5 Set pricing/free tier info in store consoles.
⏭️ 17.6 Configure age rating + content warnings per platform.
⏭️ 17.7 Verify compliance with App Store Review Guidelines + Google Play Developer Policies.
⏭️ 17.8 Run “store readiness” precheck tools (Google Play pre-launch report, Apple TestFlight test run).

Legal & compliance
⏭️ 17.9 GDPR/CCPA privacy compliance checklist (data collection, opt-out, deletion).
⏭️ 17.10 COPPA compliance check (if any <13 flows detected → block or verify).
⏭️ 17.11 Export compliance questionnaire (App Store).
⏭️ 17.12 Verify licensed fonts, icons, and audio assets.

Release management & rollout
⏭️ 17.13 Prepare v1.0.0 release notes (user-friendly, feature highlights).
⏭️ 17.14 Decide rollout strategy: phased rollout (1–5% → 25% → 100%) or full release.
⏭️ 17.15 Configure feature flags for “kill switches” (disable risky features remotely).
⏭️ 17.16 Create hotfix branch policy (main → hotfix/vX.Y.Z → tag → deploy).
⏭️ 17.17 Backup/rollback process: ensure last stable build easily redeployable.

User acquisition prep
⏭️ 17.18 Setup App Store Optimization (ASO): keyword research, screenshots with text overlays.
⏭️ 17.19 Google Play Store A/B test assets (icon, screenshots).
⏭️ 17.20 Create website landing page with store links + newsletter signup.
⏭️ 17.21 Link social accounts (Twitter, Instagram, TikTok, YouTube) for brand presence.
⏭️ 17.22 Enable smart banners on landing page (deep link → app store).
⏭️ 17.23 Add UTM tracking to all marketing links.

Growth monitoring
⏭️ 17.24 Verify Analytics events flow into dashboards (Firebase, GA, Amplitude if added).
⏭️ 17.25 Set up conversion funnels: download → onboarding → first play → premium trial.
⏭️ 17.26 Monitor crash-free sessions, DAU/WAU/MAU in real time after launch.
⏭️ 17.27 Enable alerts: crash spike, ANR spike, payment failures.

Team & support readiness
⏭️ 17.28 Create canned responses for common issues (login fail, download fail, subscription).
⏭️ 17.29 Setup support SLA (response time, escalation path).
⏭️ 17.30 Create internal “Known Issues” doc for testers + early adopters.

Final pre-launch gate
⏭️ 17.31 Double-check every item from Phases 1–17 marked ✅.
⏭️ 17.32 Dry run “submit for review” → ensure no blockers (certs, metadata, builds).
⏭️ 17.33 Submit v1.0.0 build to App Store + Google Play.
⏭️ 17.34 Mark Launch Initiated in checklist; monitor review feedback.
⏭️ 17.35 Commit Phase 17 completion.
