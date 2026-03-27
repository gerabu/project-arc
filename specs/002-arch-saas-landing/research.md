# Research: Architecture SaaS Landing Page

## Tech Stack

- **Decision**: Next.js 16.2.1 + React 19.2.4 + Tailwind CSS v4 + shadcn/ui
- **Rationale**: Already established in the project. Constitution mandates this stack. No alternatives needed.
- **Alternatives considered**: None — project constraints are explicit.

## Scroll-Triggered Animations

- **Decision**: Use `tailwind-animations` plugin by midudev. CSS-only, no custom JS hooks.
- **Rationale**: Provides ready-made animation classes (`animate-fade-in`, `animate-slide-in-bottom`, `animate-zoom-in`, etc.) and CSS View Timeline support for scroll-triggered animations (`view-animate-single`, `animate-range-[entry_10%_contain_25%]`). Zero runtime JS, fully CSS-driven. Aligns with the constitution's "no `useEffect`" principle and keeps the implementation simple.
- **Alternatives considered**:
  - Custom Intersection Observer hook — rejected: requires `useEffect`, adds JS complexity for what CSS View Timeline handles natively
  - Framer Motion — rejected: adds bundle weight for minimal animation needs
  - `react-intersection-observer` — rejected: unnecessary dependency when CSS-only solution exists
  - `tw-animate-css` — already installed but provides base utilities only; `tailwind-animations` provides richer presets and scroll timeline support

## shadcn Components Needed

- **Decision**: Install `card` component. Use existing `button` component.
- **Rationale**: Card component needed for Problem, How, and Feature section layouts. Button already installed with all needed variants.
- **Alternatives considered**: Custom card — rejected per constitution (prioritize shadcn for common UI patterns).

## Theme Support

- **Decision**: Use existing `globals.css` oklch color tokens with `.dark` class variant. No theme switcher in this version.
- **Rationale**: The project already defines light (`:root`) and dark (`.dark`) color schemes. All components will use Tailwind semantic classes (`bg-background`, `text-foreground`, etc.) which automatically adapt. User explicitly said "even if we don't add a theme switch for now."
- **Alternatives considered**: next-themes — deferred until a theme toggle is actually needed.

## Responsive Navigation

- **Decision**: Hamburger menu on mobile (<768px), horizontal links on desktop. Sticky with backdrop blur.
- **Rationale**: Standard SaaS landing page pattern. Sticky nav keeps CTA accessible per spec clarification.
- **Alternatives considered**: Off-canvas drawer — rejected: adds complexity for a simple nav with 4 links.

## Font Strategy

- **Decision**: Keep Inter as the primary font (existing `--font-sans`). No additional font imports.
- **Rationale**: Inter is already configured and is a professional, readable font suitable for SaaS landing pages. Adding fonts would conflict with the existing `font-sans` setup and add load time.
- **Alternatives considered**: Custom display font for headings — deferred to keep POC scope minimal.
