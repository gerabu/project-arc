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

- [X] T001 Install tailwind-animations plugin via `pnpm add tailwind-animations`
- [X] T002 Install shadcn Card component via `pnpm dlx shadcn@latest add card`
- [X] T003 Add `@import 'tailwind-animations';` to `src/app/globals.css` after existing imports
- [X] T004 Create feature directory `src/features/landing/components/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core page structure that MUST exist before ANY user story section can be rendered

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create sticky navigation bar component in `src/features/landing/components/navbar.tsx` with logo placeholder, nav links (Home, Plans, About Us, Blog with `href="#"`), and "Get Started Free" CTA button. Responsive: hamburger menu on mobile.
- [X] T006 Create landing page composer in `src/features/landing/landing-page.tsx` that imports and renders Navbar, then placeholder slots for all sections
- [X] T007 Update root page in `src/app/page.tsx` to render the `LandingPage` component

**Checkpoint**: Page loads at localhost with sticky navbar visible. User story sections can now be added independently.

---

## Phase 3: User Story 1 - Visitor understands the value proposition (Priority: P1) 🎯 MVP

**Goal**: Hero section with clear headline conveying the shift from manual chaos to digital precision for architecture firms, plus a "Get Started Free" CTA button.

**Independent Test**: A first-time visitor can articulate what the product does and who it is for within 10 seconds of viewing the hero section.

### Implementation for User Story 1

- [X] T008 [P] [US1] Create hero section component in `src/features/landing/components/hero-section.tsx` with headline, subheadline targeting architecture firms, and "Get Started Free" primary CTA button
- [X] T009 [US1] Import and render HeroSection in `src/features/landing/landing-page.tsx` (after Navbar)

**Checkpoint**: Hero section visible on page. Headline and CTA button render correctly. Story independently verifiable.

---

## Phase 4: User Story 2 - Visitor identifies with the problem (Priority: P1)

**Goal**: Problem section with 3-4 pain point cards describing architecture-industry struggles: scattered files, missed deadlines, lost change requests, spreadsheet chaos.

**Independent Test**: At least 80% of architecture professionals who read the problem section relate it to their own experience.

### Implementation for User Story 2

- [X] T010 [P] [US2] Create problem section component in `src/features/landing/components/problem-section.tsx` with 3-4 pain point cards using shadcn Card, each with an icon and empathetic architecture-industry copy
- [X] T011 [US2] Import and render ProblemSection in `src/features/landing/landing-page.tsx` (after Hero)

**Checkpoint**: Problem section visible with pain point cards. Story independently verifiable.

---

## Phase 5: User Story 3 - Visitor understands how the platform solves their problems (Priority: P2)

**Goal**: How section with 4 capability cards: phased project management, task assignment with deadlines, deadline tracking, and centralized file hub for plans/change requests/contracts/estimates.

**Independent Test**: Visitors can describe at least three specific platform capabilities after reading the "How" section.

### Implementation for User Story 3

- [X] T012 [P] [US3] Create how section component in `src/features/landing/components/how-section.tsx` with 4 capability cards using shadcn Card, each with a visual indicator connecting back to a problem from the previous section
- [X] T013 [US3] Import and render HowSection in `src/features/landing/landing-page.tsx` (after Problem)

**Checkpoint**: How section visible with capability cards. Story independently verifiable.

---

## Phase 6: User Story 4 - Visitor is impressed by the client timeline feature (Priority: P2)

**Goal**: Main feature section showcasing the client-facing project timeline that displays project status, stages, delays, and changes. This is the differentiating "wow" feature.

**Independent Test**: At least 70% of architecture firm owners say this feature would improve their client communication.

### Implementation for User Story 4

- [X] T014 [P] [US4] Create feature section component in `src/features/landing/components/feature-section.tsx` with a timeline visualization showing project stages, delays, and changes, plus supporting copy explaining client visibility
- [X] T015 [US4] Import and render FeatureSection in `src/features/landing/landing-page.tsx` (after How)

**Checkpoint**: Main feature section visible with timeline visualization. Story independently verifiable.

---

## Phase 7: User Story 5 - Visitor is compelled to sign up (Priority: P1)

**Goal**: Summary section with a concise value recap and a "Get Started Free" CTA button matching the hero CTA.

**Independent Test**: Click-through rate on the summary CTA is measurable and the button is responsive with visual feedback.

### Implementation for User Story 5

- [X] T016 [P] [US5] Create CTA section component in `src/features/landing/components/cta-section.tsx` with a concise value recap and "Get Started Free" button matching the hero CTA style
- [X] T017 [US5] Import and render CTASection in `src/features/landing/landing-page.tsx` (after Main Feature)

**Checkpoint**: Summary CTA section visible. Both hero and summary CTAs are prominent. Story independently verifiable.

---

## Phase 8: User Story 6 - Visitor can navigate the page easily (Priority: P3)

**Goal**: Footer with navigation links (Home, Plans, About Us, Blog), copyright, and basic information.

**Independent Test**: All navigation links are present in both navbar and footer. Footer renders at the bottom of the page.

### Implementation for User Story 6

- [X] T018 [P] [US6] Create footer component in `src/features/landing/components/footer.tsx` with navigation links (Home, Plans, About Us, Blog with `href="#"`), copyright, and basic information
- [X] T019 [US6] Import and render Footer in `src/features/landing/landing-page.tsx` (after CTA)

**Checkpoint**: Footer visible at page bottom with all navigation links. Story independently verifiable.

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Scroll animations, theme verification, and responsive testing across all sections

- [X] T020 [P] Add scroll-triggered animations to Hero section: wrap content in `view-animate-single`, apply `animate-fade-in` and `animate-delay-*` classes to `src/features/landing/components/hero-section.tsx`
- [X] T021 [P] Add scroll-triggered animations to Problem section: apply `animate-slide-in-bottom` with staggered delays to cards in `src/features/landing/components/problem-section.tsx`
- [X] T022 [P] Add scroll-triggered animations to How section: apply `animate-slide-in-bottom` with staggered delays to cards in `src/features/landing/components/how-section.tsx`
- [X] T023 [P] Add scroll-triggered animations to Feature section: apply `animate-zoom-in` to timeline visualization in `src/features/landing/components/feature-section.tsx`
- [X] T024 [P] Add scroll-triggered animations to CTA section: apply `animate-fade-in` to `src/features/landing/components/cta-section.tsx`
- [X] T025 Verify all components use semantic Tailwind tokens (`bg-background`, `text-foreground`, `bg-primary`, etc.) for light/dark theme support — add `.dark` class to `<html>` and inspect visually
- [X] T026 Verify responsive layout at 320px, 768px, and 1280px viewports — ensure navbar collapses, cards stack, and CTAs remain tappable

**Checkpoint**: All sections animate on scroll. Light and dark themes render correctly. Responsive at all breakpoints.

---

## Implementation Complete

All 26 tasks completed successfully. The landing page is ready for testing.
