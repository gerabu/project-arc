# Implementation Plan: Architecture SaaS Landing Page

**Branch**: `002-arch-saas-landing` | **Date**: 2026-03-26 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/002-arch-saas-landing/spec.md`

## Summary

Build a high-conversion landing page for an architecture project management SaaS platform. The page targets small and medium-sized architecture firms and guides visitors through a conversion funnel: value proposition (Hero) → problem identification → solution overview → main feature showcase → final CTA. Uses Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui with scroll-triggered animations and light/dark theme support.

## Technical Context

**Language/Version**: TypeScript, Next.js 16.2.1, React 19.2.4
**Primary Dependencies**: Tailwind CSS v4, shadcn/ui (radix-lyra style), tw-animate-css, tailwind-animations
**Storage**: N/A (static marketing page)
**Testing**: Vitest + React Testing Library (per constitution)
**Target Platform**: Web (modern browsers, latest 2 versions of Chrome, Firefox, Safari, Edge)
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Page loads fully within 3 seconds on standard broadband (SC-006)
**Constraints**: Must use existing `globals.css` color scheme, shadcn components, Tailwind classes. CTA buttons labeled "Get Started Free". Sticky navigation bar. Support light and dark themes. Minimal scroll-triggered transitions.
**Scale/Scope**: Single landing page with 7 sections (Nav, Hero, Problem, How, Main Feature, Summary, Footer)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Pragmatism | PASS | Landing page is a simple component, no over-engineering needed |
| II. Tech Stack | PASS | Using Next.js, Tailwind CSS, shadcn/ui as required |
| III. DDD | N/A | No domain logic, pure presentation layer |
| IV. Feature-Based | PASS | Landing page organized in `src/features/landing/` |
| V. State Management | N/A | No client/server state needed |
| VI. Testing | PASS | Will use Vitest + RTL |
| VII. Prohibited Patterns | PASS | No `useEffect` or global variables needed. Scroll animations via CSS-only `tailwind-animations` plugin (no JS observers). |

## Project Structure

### Documentation (this feature)

```text
specs/002-arch-saas-landing/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── page.tsx              # Root page → renders LandingPage
│   ├── layout.tsx            # Root layout (existing)
│   └── globals.css           # Theme tokens (existing)
├── features/
│   └── landing/
│       ├── components/
│       │   ├── navbar.tsx           # Sticky navigation bar
│       │   ├── hero-section.tsx     # Hero with CTA
│       │   ├── problem-section.tsx  # Pain points
│       │   ├── how-section.tsx      # Solution capabilities
│       │   ├── feature-section.tsx  # Client timeline showcase
│       │   ├── cta-section.tsx      # Final summary + CTA
│       │   └── footer.tsx           # Footer
│       └── landing-page.tsx         # Composes all sections
├── components/
│   └── ui/
│       ├── button.tsx        # Existing
│       └── card.tsx          # To be added (shadcn)
└── lib/
    └── utils.ts              # Existing
```

**Structure Decision**: Option 1 (Single project with Next.js App Router). Feature-based architecture per Constitution IV with `src/features/landing/` containing all landing page components. The root `page.tsx` imports and renders the `LandingPage` component.

## Complexity Tracking

No violations. This is a straightforward static landing page implementation.

---

## Implementation Steps

### Step 1: Install shadcn Card component
- Run `pnpm dlx shadcn@latest add card` to get the Card component for feature showcases

### Step 2: Install tailwind-animations plugin
- Run `pnpm add tailwind-animations`
- Add `@import 'tailwind-animations';` to `src/app/globals.css` (after existing imports)
- Provides utility classes: `animate-fade-in`, `animate-slide-in-bottom`, `animate-zoom-in`, `animate-delay-*`, `animate-duration-*`
- For scroll-triggered animations, use CSS View Timeline: `view-animate-single` class on container + `animate-*` on child elements with `animate-range-[entry_10%_contain_25%]`

### Step 3: Build Navbar component
- `src/features/landing/components/navbar.tsx`
- Sticky header with logo placeholder, nav links (Home, Plans, About Us, Blog with `href="#"`), and "Get Started Free" CTA button
- Uses `position: sticky` with backdrop blur for modern glass effect
- Responsive: collapses to hamburger menu on mobile

### Step 4: Build Hero Section
- `src/features/landing/components/hero-section.tsx`
- Headline: shift from manual chaos to digital precision
- Subheadline: empathetic copy targeting architecture firms
- "Get Started Free" CTA button (primary variant)
- Subtle background pattern or gradient for visual depth

### Step 5: Build Problem Section
- `src/features/landing/components/problem-section.tsx`
- 3-4 pain point cards: scattered files, missed deadlines, lost change requests, spreadsheet chaos
- Empathetic tone, architecture-industry specific

### Step 6: Build How Section
- `src/features/landing/components/how-section.tsx`
- 4 capability cards using shadcn Card: phased project management, task assignment, deadline tracking, centralized file hub
- Icons or visual indicators for each capability
- Connects each capability back to a problem from the previous section

### Step 7: Build Main Feature Section
- `src/features/landing/components/feature-section.tsx`
- Visual showcase of the client-facing project timeline
- Timeline visualization showing stages, delays, changes
- Supporting copy explaining client visibility

### Step 8: Build CTA Section (Summary)
- `src/features/landing/components/cta-section.tsx`
- Concise value recap
- "Get Started Free" button matching hero CTA

### Step 9: Build Footer
- `src/features/landing/components/footer.tsx`
- Navigation links (Home, Plans, About Us, Blog)
- Copyright, placeholder links

### Step 10: Add scroll animations to sections
- Wrap each section's content in a `view-animate-single` container
- Apply `animate-fade-in` or `animate-slide-in-bottom` to content blocks
- Use `animate-delay-100` / `animate-delay-200` / `animate-delay-300` for staggered reveals
- Use `animate-range-[entry_10%_contain_25%]` to control animation timing relative to scroll position

### Step 11: Compose Landing Page
- `src/features/landing/landing-page.tsx` — Composes all sections in order

### Step 12: Wire up root page
- Update `src/app/page.tsx` to render the `LandingPage` component

### Step 13: Verify dark/light theme
- All components use Tailwind semantic tokens from `globals.css` (`bg-background`, `text-foreground`, `bg-primary`, etc.)
- Dark mode via `.dark` class on `<html>` (existing setup)

### Step 14: Test
- Visual verification across breakpoints (mobile, tablet, desktop)
