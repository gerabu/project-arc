# Tasks: Architecture SaaS Landing Page

**Input**: Design documents from `/specs/002-arch-saas-landing/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md

**Tests**: Not explicitly requested in the spec. No test tasks generated.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single project with Next.js App Router: `src/` at repository root
- Feature-based architecture: `src/features/landing/components/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Install dependencies and configure the project foundation

- [ ] T001 Install tailwind-animations plugin via `pnpm add tailwind-animations`
- [ ] T002 Install shadcn Card component via `pnpm dlx shadcn@latest add card`
- [ ] T003 Add `@import 'tailwind-animations';` to `src/app/globals.css` after existing imports
- [ ] T004 Create feature directory `src/features/landing/components/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core page structure that MUST exist before ANY user story section can be rendered

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Create sticky navigation bar component in `src/features/landing/components/navbar.tsx` with logo placeholder, nav links (Home, Plans, About Us, Blog with `href="#"`), and "Get Started Free" CTA button. Responsive: hamburger menu on mobile.
- [ ] T006 Create landing page composer in `src/features/landing/landing-page.tsx` that imports and renders Navbar, then placeholder slots for all sections
- [ ] T007 Update root page in `src/app/page.tsx` to render the `LandingPage` component

**Checkpoint**: Page loads at localhost with sticky navbar visible. User story sections can now be added independently.

---

## Phase 3: User Story 1 - Visitor understands the value proposition (Priority: P1) 🎯 MVP

**Goal**: Hero section with clear headline conveying the shift from manual chaos to digital precision for architecture firms, plus a "Get Started Free" CTA button.

**Independent Test**: A first-time visitor can articulate what the product does and who it is for within 10 seconds of viewing the hero section.

### Implementation for User Story 1

- [ ] T008 [P] [US1] Create hero section component in `src/features/landing/components/hero-section.tsx` with headline, subheadline targeting architecture firms, and "Get Started Free" primary CTA button
- [ ] T009 [US1] Import and render HeroSection in `src/features/landing/landing-page.tsx` (after Navbar)

**Checkpoint**: Hero section visible on page. Headline and CTA button render correctly. Story independently verifiable.

---

## Phase 4: User Story 2 - Visitor identifies with the problem (Priority: P1)

**Goal**: Problem section with 3-4 pain point cards describing architecture-industry struggles: scattered files, missed deadlines, lost change requests, spreadsheet chaos.

**Independent Test**: At least 80% of architecture professionals who read the problem section relate it to their own experience.

### Implementation for User Story 2

- [ ] T010 [P] [US2] Create problem section component in `src/features/landing/components/problem-section.tsx` with 3-4 pain point cards using shadcn Card, each with an icon and empathetic architecture-industry copy
- [ ] T011 [US2] Import and render ProblemSection in `src/features/landing/landing-page.tsx` (after Hero)

**Checkpoint**: Problem section visible with pain point cards. Story independently verifiable.

---

## Phase 5: User Story 3 - Visitor understands how the platform solves their problems (Priority: P2)

**Goal**: How section with 4 capability cards: phased project management, task assignment with deadlines, deadline tracking, and centralized file hub for plans/change requests/contracts/estimates.

**Independent Test**: Visitors can describe at least three specific platform capabilities after reading the "How" section.

### Implementation for User Story 3

- [ ] T012 [P] [US3] Create how section component in `src/features/landing/components/how-section.tsx` with 4 capability cards using shadcn Card, each with a visual indicator connecting back to a problem from the previous section
- [ ] T013 [US3] Import and render HowSection in `src/features/landing/landing-page.tsx` (after Problem)

**Checkpoint**: How section visible with capability cards. Story independently verifiable.

---

## Phase 6: User Story 4 - Visitor is impressed by the client timeline feature (Priority: P2)

**Goal**: Main feature section showcasing the client-facing project timeline that displays project status, stages, delays, and changes. This is the differentiating "wow" feature.

**Independent Test**: At least 70% of architecture firm owners say this feature would improve their client communication.

### Implementation for User Story 4

- [ ] T014 [P] [US4] Create feature section component in `src/features/landing/components/feature-section.tsx` with a timeline visualization showing project stages, delays, and changes, plus supporting copy explaining client visibility
- [ ] T015 [US4] Import and render FeatureSection in `src/features/landing/landing-page.tsx` (after How)

**Checkpoint**: Main feature section visible with timeline visualization. Story independently verifiable.

---

## Phase 7: User Story 5 - Visitor is compelled to sign up (Priority: P1)

**Goal**: Summary section with a concise value recap and a "Get Started Free" CTA button matching the hero CTA.

**Independent Test**: Click-through rate on the summary CTA is measurable and the button is responsive with visual feedback.

### Implementation for User Story 5

- [ ] T016 [P] [US5] Create CTA section component in `src/features/landing/components/cta-section.tsx` with a concise value recap and "Get Started Free" button matching the hero CTA style
- [ ] T017 [US5] Import and render CTASection in `src/features/landing/landing-page.tsx` (after Main Feature)

**Checkpoint**: Summary CTA section visible. Both hero and summary CTAs are prominent. Story independently verifiable.

---

## Phase 8: User Story 6 - Visitor can navigate the page easily (Priority: P3)

**Goal**: Footer with navigation links (Home, Plans, About Us, Blog), copyright, and basic information.

**Independent Test**: All navigation links are present in both navbar and footer. Footer renders at the bottom of the page.

### Implementation for User Story 6

- [ ] T018 [P] [US6] Create footer component in `src/features/landing/components/footer.tsx` with navigation links (Home, Plans, About Us, Blog with `href="#"`), copyright, and basic information
- [ ] T019 [US6] Import and render Footer in `src/features/landing/landing-page.tsx` (after CTA)

**Checkpoint**: Footer visible at page bottom with all navigation links. Story independently verifiable.

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Scroll animations, theme verification, and responsive testing across all sections

- [ ] T020 [P] Add scroll-triggered animations to Hero section: wrap content in `view-animate-single`, apply `animate-fade-in` and `animate-delay-*` classes to `src/features/landing/components/hero-section.tsx`
- [ ] T021 [P] Add scroll-triggered animations to Problem section: apply `animate-slide-in-bottom` with staggered delays to cards in `src/features/landing/components/problem-section.tsx`
- [ ] T022 [P] Add scroll-triggered animations to How section: apply `animate-slide-in-bottom` with staggered delays to cards in `src/features/landing/components/how-section.tsx`
- [ ] T023 [P] Add scroll-triggered animations to Feature section: apply `animate-zoom-in` to timeline visualization in `src/features/landing/components/feature-section.tsx`
- [ ] T024 [P] Add scroll-triggered animations to CTA section: apply `animate-fade-in` to `src/features/landing/components/cta-section.tsx`
- [ ] T025 Verify all components use semantic Tailwind tokens (`bg-background`, `text-foreground`, `bg-primary`, etc.) for light/dark theme support — add `.dark` class to `<html>` and inspect visually
- [ ] T026 Verify responsive layout at 320px, 768px, and 1280px viewports — ensure navbar collapses, cards stack, and CTAs remain tappable

**Checkpoint**: All sections animate on scroll. Light and dark themes render correctly. Responsive at all breakpoints.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Stories (Phase 3–8)**: All depend on Foundational phase completion
  - Can proceed sequentially in priority order (P1 first: US1, US2, US5; then P2: US3, US4; then P3: US6)
  - Or in parallel if staffing allows
- **Polish (Phase 9)**: Depends on all desired user stories being complete

### User Story Dependencies

- **US1 (P1)**: Can start after Foundational — no dependencies on other stories
- **US2 (P1)**: Can start after Foundational — no dependencies on other stories (problem section is independent, though it pairs conceptually with US3's How section)
- **US3 (P2)**: Can start after Foundational — no hard dependency on US2, but reads better after it
- **US4 (P2)**: Can start after Foundational — no dependencies on other stories
- **US5 (P1)**: Can start after Foundational — no dependencies on other stories
- **US6 (P3)**: Can start after Foundational — no dependencies on other stories

### Parallel Opportunities

- **Phase 1**: T001 and T002 can run in parallel (different commands)
- **Phase 3**: T008 and T009 are sequential (T009 imports T008's component)
- **Phase 3–8**: All user story phases can run in parallel once Foundational is complete
- **Phase 9**: T020–T024 can all run in parallel (each touches a different file)

---

## Parallel Example: All User Stories After Foundational

```bash
# Once Phase 2 is complete, all stories can be built in parallel:
Task: "Create hero section in src/features/landing/components/hero-section.tsx"
Task: "Create problem section in src/features/landing/components/problem-section.tsx"
Task: "Create how section in src/features/landing/components/how-section.tsx"
Task: "Create feature section in src/features/landing/components/feature-section.tsx"
Task: "Create CTA section in src/features/landing/components/cta-section.tsx"
Task: "Create footer in src/features/landing/components/footer.tsx"

# Then wire them all into landing-page.tsx (sequential, one import per task)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T004)
2. Complete Phase 2: Foundational (T005–T007) — CRITICAL, blocks all stories
3. Complete Phase 3: User Story 1 (T008–T009)
4. **STOP and VALIDATE**: Open browser, verify hero section renders with headline and CTA
5. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Page loads with navbar
2. Add US1 (Hero) → Test → Deploy/Demo (MVP!)
3. Add US2 (Problem) → Test → Deploy/Demo
4. Add US3 (How) + US4 (Feature) → Test → Deploy/Demo
5. Add US5 (CTA) → Test → Deploy/Demo
6. Add US6 (Footer) → Test → Deploy/Demo
7. Polish (animations, theme, responsive) → Final pass

### Parallel Team Strategy

With multiple developers:
1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: US1 (Hero) + US2 (Problem) — P1 content sections
   - Developer B: US3 (How) + US4 (Feature) — P2 content sections
   - Developer C: US5 (CTA) + US6 (Footer) — P1 CTA + P3 navigation
3. All wire into landing-page.tsx, then one developer handles Polish

---

## Notes

- [P] tasks = different files, no dependencies on incomplete tasks
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- CTA buttons use "Get Started Free" text (spec clarification)
- Navbar is sticky (spec clarification)
- Animations use tailwind-animations plugin (CSS-only, no JS hooks)
- Dark/light theme via existing `globals.css` oklch tokens and `.dark` class
- Commit after each task or logical group
