# Tasks: SaaS Landing Page for Armory AI

**Input**: Design documents from `/specs/001-saas-landing-page/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize React + Vite project in the repository root directory
- [ ] T002 Install Tailwind CSS and Three.js dependencies via npm
- [ ] T003 [P] Configure Tailwind CSS config file at `tailwind.config.js` and PostCSS at `postcss.config.js`
- [ ] T004 [P] Add CSS variables for colors, fonts, and Google Fonts import to `src/index.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Create the directory structure for `src/components`, `src/config`, `src/hooks`, `src/store`
- [ ] T006 Create pricing config matrix in `src/config/pricing.config.js`
- [ ] T007 Implement active feature state bridge in `src/store/bentoState.js`
- [ ] T008 Implement layout mode breakpoint watcher hook in `src/hooks/useLayoutMode.js`
- [ ] T009 [P] Copy all SVG files from `Assests` folder to `src/assets`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Dynamic Pricing Engine with Zero-Rerender Switcher (Priority: P1) 🎯 MVP

**Goal**: Toggle currencies and billing cycles dynamically with direct DOM mutations, bypassing React state to achieve 0% parent component re-renders.

**Independent Test**: Interact with pricing switcher controls on the page, verify that prices update to mathematically correct values instantly, and use Chrome DevTools/React DevTools to confirm zero component re-renders.

### Implementation for User Story 1

- [ ] T010 [US1] Create singleton store `PricingStore` in `src/store/PricingStore.js` to manage registered text nodes and calculations
- [ ] T011 [P] [US1] Create `PriceNode.jsx` component in `src/components/PriceNode.jsx` registering a raw DOM Text node with `PricingStore` on mount
- [ ] T012 [US1] Create `CurrencySwitcher.jsx` component in `src/components/CurrencySwitcher.jsx` to select currency/billing cycle and trigger `PricingStore` updates
- [ ] T013 [US1] Create `PricingSection.jsx` component in `src/components/PricingSection.jsx` displaying the three pricing cards with `PriceNode` and `CurrencySwitcher`
- [ ] T014 [US1] Verify that changing currency/billing cycle updates only text nodes and triggers zero parent component re-renders in DevTools

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Context-Preserved Bento-to-Accordion View Transition (Priority: P2)

**Goal**: Display feature grid as a Bento Grid on desktop and Accordion on mobile, transferring the active index context smoothly during resize transitions.

**Independent Test**: Hover over Bento card #2 on desktop, resize browser below 768px, and verify that Accordion panel #2 is open on mount.

### Implementation for User Story 2

- [ ] T015 [P] [US2] Implement `BentoGrid.jsx` component in `src/components/BentoGrid.jsx` rendering 4 feature cards and updating `bentoState` on hover
- [ ] T016 [P] [US2] Implement `Accordion.jsx` component in `src/components/Accordion.jsx` displaying 4 touch-optimized panels, reading initial open state from `bentoState.get()`
- [ ] T017 [US2] Implement `FeaturesSection.jsx` component in `src/components/FeaturesSection.jsx` dynamically switching views using `useLayoutMode`
- [ ] T018 [US2] Verify layout transition and context transfer by resizing the browser under DevTools responsive mode

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Premium Aesthetic & Asset Compliance (Priority: P3)

**Goal**: Create a premium developer tool aesthetic (Oceanic Noir) incorporating custom fonts, all 14 SVG assets, and a 3D Hero background.

**Independent Test**: Inspect the page to confirm JetBrains Mono and Inter are loaded, and that all 14 SVG assets are placed in meaningful contexts.

### Implementation for User Story 3

- [ ] T019 [P] [US3] Create `ThreeBg.jsx` component in `src/components/ThreeBg.jsx` rendering interactive WebGL particles using Three.js
- [ ] T020 [US3] Create `Header.jsx` component in `src/components/Header.jsx` integrating logo, nav links, nav search SVG, and console CTA
- [ ] T021 [US3] Create `Hero.jsx` component in `src/components/Hero.jsx` displaying heading, subtitle, CTA buttons, metrics card with trending SVG, and `ThreeBg`
- [ ] T022 [US3] Create `SocialProof.jsx` component in `src/components/SocialProof.jsx` displaying client logo grid
- [ ] T023 [US3] Create `Footer.jsx` component in `src/components/Footer.jsx` integrating copyright, footer links, and a scroll-to-top button with chevron-up SVG

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final integration, SEO/meta tag configurations, native CSS compositor animation setup, and validation checks.

- [ ] T024 Add SEO meta headers, Open Graph (OG) tags, favicon, and title in `index.html`
- [ ] T025 Configure native CSS keyframe animations and staggering delays in `src/index.css` for under 500ms entrance timeline
- [ ] T026 Integrate all sections (Header, Hero, FeaturesSection, PricingSection, SocialProof, Footer) in `src/App.jsx`
- [ ] T027 Run `npm run build` to verify clean compilation and zero build errors/warnings
- [ ] T028 Run manual verification scenarios per `specs/001-saas-landing-page/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
- **User Stories (Phases 3, 4, 5)**: All depend on Foundational phase completion. User Story 1, 2, and 3 can be developed independently.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### Parallel Opportunities

- All Setup tasks (T003, T004) can run in parallel.
- Copying SVGs (T009) can run in parallel with configuration setup.
- Once Foundation is complete, User Story 1 (P1), User Story 2 (P2), and User Story 3 (P3) tasks can run in parallel (e.g. T010, T015, T019).

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Dynamic Pricing)
4. Validate pricing state isolation manually.

### Incremental Delivery
1. Add User Story 2 (Bento-to-Accordion view transition + context sync). Validate transition.
2. Add User Story 3 (Header, Hero, Footer, ThreeBg particle canvas). Validate visuals.
3. Complete Phase 6: Polish & SEO. Run full validation.
