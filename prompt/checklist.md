
Current phase focus: Phase 3 — Authentication & Firebase

# Gypsify — Step-by-Step Checklist (Section T)
Status legend: ✅ DONE · 🚧 IN PROGRESS · ⏭️ NOT STARTED

---

## Phase 1: Project Setup
- Initialize Git repo; set branch naming (feature/_, fix/_, hotfix/*) ✅ DONE
- Create Expo TypeScript project (npx expo) ✅ DONE
- Canonical folders (/src/{screens,components,navigation,store,services,utils,hooks,styles,theme,types}, /assets) ✅ DONE
- Base configs: app.json, tsconfig.json, .gitignore, README.md ✅ DONE
- ESLint + Prettier + Husky pre-commit hooks ✅ DONE
- Commit scaffold (step-0-initial-scaffold) ✅ DONE

---

## Phase 2: Navigation & Routing
- Install React Navigation deps ✅ DONE
- Root navigator (Stack + Tabs) ✅ DONE
- Splash → Onboarding wizard → Language Selection → Auth → Main ✅ DONE
- Auth screens (Login, Signup, Password Reset) ✅ DONE
- Tabs: Home / Search / Library / Profile ✅ DONE
- Playlist & Album detail scaffolds ⏭️ NOT STARTED
- Mini-player frame persisted across screens ⏭️ NOT STARTED
- Commit navigation + screens ✅ DONE

---

## Phase 3: Authentication & Firebase
- Install Firebase SDK (Auth, Firestore, Storage, Analytics, Crashlytics) ✅ DONE
- Configure env (.env.development/.production) ✅ DONE
- Email/Password auth ✅ DONE
- Google OAuth ⏭️ NOT STARTED
- Apple Sign-In ⏭️ NOT STARTED
- Guest login mode ✅ DONE
- Firestore user schema (Listener/Artist/Admin) ⏭️ NOT STARTED
- Security rules (email_verified gate) ✅ DONE
- Profile CRUD (avatar, username, bio) ⏭️ NOT STARTED
- Commit auth system ✅ DONE

---

## Phase 4: Home & Discovery
- Featured, Recommended, Trending, Recently Played sections ⏭️ NOT STARTED
- Banner carousel + quick access cards ⏭️ NOT STARTED
- Firestore/Functions data hooks ⏭️ NOT STARTED
- Commit home features ⏭️ NOT STARTED

---

## Phase 5: Search
- Search bar + autocomplete ⏭️ NOT STARTED
- Tabs: Songs / Artists / Albums / Playlists ⏭️ NOT STARTED
- Real-time suggestions ⏭️ NOT STARTED
- Commit search module ⏭️ NOT STARTED

---

## Phase 6: Library & Playlists
- Tabs: Playlists / Favorites / Downloads ⏭️ NOT STARTED
- Playlist creation & editing ⏭️ NOT STARTED
- Favorites system ⏭️ NOT STARTED
- Downloads integration (Firebase Storage) ⏭️ NOT STARTED
- Commit library module ⏭️ NOT STARTED

---

## Phase 7: Music Playback
- Audio engine (expo-av initially) ⏭️ NOT STARTED
- AudioService (play/pause/skip/shuffle/repeat) ⏭️ NOT STARTED
- playerSlice (Redux) ⏭️ NOT STARTED
- Full-screen Player ⏭️ NOT STARTED
- Mini-player with progress ⏭️ NOT STARTED
- Queue management ⏭️ NOT STARTED
- Background playback + lockscreen controls ⏭️ NOT STARTED
- Commit playback module ⏭️ NOT STARTED

---

## Phase 8: Offline Mode
- Track & playlist downloads ⏭️ NOT STARTED
- Quality selector (low/med/high) ⏭️ NOT STARTED
- Offline queue management ⏭️ NOT STARTED
- Sync back when online ⏭️ NOT STARTED
- Storage cleanup ⏭️ NOT STARTED
- Commit offline features ⏭️ NOT STARTED

---

## Phase 9: Social Core
- Follow/unfollow ⏭️ NOT STARTED
- Activity feed (followed users/artists) ⏭️ NOT STARTED
- Posts: text + images (videos post-MVP if approved) ⏭️ NOT STARTED
- Comments & likes ⏭️ NOT STARTED
- Commit social module ⏭️ NOT STARTED

---

## Phase 10: Artist Tools (MVP scope)
- Upload constraints (MP3/WAV/AAC; size limit) ⏭️ NOT STARTED
- Client-side validations (format/bitrate/size) ⏭️ NOT STARTED
- Basic moderation (explicit flag filter) ⏭️ NOT STARTED
- Artist profile management ⏭️ NOT STARTED
- Commit artist essentials ⏭️ NOT STARTED

---

## Phase 11: Monetization
- Premium sub ($4.99/mo baseline) ⏭️ NOT STARTED
- Ads for free tier (between songs) ⏭️ NOT STARTED
- In-app purchase flows + server-side validation ⏭️ NOT STARTED
- Unlock premium features (ad-free, offline, HQ audio) ⏭️ NOT STARTED
- Commit monetization ⏭️ NOT STARTED

---

## Phase 12: Analytics & Crash Monitoring
- Firebase Analytics events (auth, playback, downloads, subs) ⏭️ NOT STARTED
- Crashlytics integration ⏭️ NOT STARTED
- Optional Sentry setup ⏭️ NOT STARTED
- Commit analytics ⏭️ NOT STARTED

---

## Phase 13: UI/UX Polish
- Dark mode default + light toggle ⏭️ NOT STARTED
- Theming (rounded components, consistent spacing/typography) ⏭️ NOT STARTED
- Smooth animations/transitions (Reanimated/native driver) ⏭️ NOT STARTED
- Responsive layouts (phones/tablets) ⏭️ NOT STARTED
- Accessibility pass (screen reader, font scaling, contrast) ⏭️ NOT STARTED
- Commit UI polish ⏭️ NOT STARTED

---

## Phase 14: Testing & QA
- Unit tests (auth, player, downloads) ⏭️ NOT STARTED
- Integration tests (auth → playback → downloads) ⏭️ NOT STARTED
- E2E (Detox on iOS/Android) ⏭️ NOT STARTED
- Regression suite ⏭️ NOT STARTED
- Device testing on real hardware ⏭️ NOT STARTED
- Commit test coverage ⏭️ NOT STARTED

---

## Phase 15: Build & Deployment
- Configure EAS Build ⏭️ NOT STARTED
- iOS build (Xcode/CocoaPods) ⏭️ NOT STARTED
- Android build (Gradle/JDK 17) ⏭️ NOT STARTED
- App Store Connect & Play Console metadata (placeholders OK) ⏭️ NOT STARTED
- TestFlight / Internal testing tracks ⏭️ NOT STARTED
- Commit deployment artifacts ⏭️ NOT STARTED

---

## Phase 16: Post-Launch
- Push notifications (Expo + FCM/APNs) ⏭️ NOT STARTED
- Personalized recommendations (basic rule-based) ⏭️ NOT STARTED
- Translations (multi-language UI) ⏭️ NOT STARTED
- CI/CD hardening (cache, parallelism, flaky tests) ⏭️ NOT STARTED
- Iterative bug fixes & improvements ⏭️ NOT STARTED
