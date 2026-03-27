# Quickstart: Architecture SaaS Landing Page

## Prerequisites
- Node.js installed
- Project dependencies installed (`pnpm install`)

## Steps

1. **Install dependencies**
   ```bash
   pnpm add tailwind-animations
   pnpm dlx shadcn@latest add card
   ```

2. **Configure tailwind-animations**
   - Add `@import 'tailwind-animations';` to `src/app/globals.css` after existing imports

3. **Create feature directory structure**
   ```bash
   mkdir -p src/features/landing/components
   ```

4. **Create landing page components** (in order):
   - `src/features/landing/components/navbar.tsx`
   - `src/features/landing/components/hero-section.tsx`
   - `src/features/landing/components/problem-section.tsx`
   - `src/features/landing/components/how-section.tsx`
   - `src/features/landing/components/feature-section.tsx`
   - `src/features/landing/components/cta-section.tsx`
   - `src/features/landing/components/footer.tsx`

5. **Add scroll animations to sections**
   - Wrap each section's outer element with `view-animate-single`
   - Apply `animate-fade-in`, `animate-slide-in-bottom`, or `animate-zoom-in` to content
   - Use `animate-delay-100` / `animate-delay-200` / `animate-delay-300` for staggered reveals
   - Use `animate-range-[entry_10%_contain_25%]` to control scroll trigger timing

6. **Compose landing page**
   - Create `src/features/landing/landing-page.tsx` importing all section components

7. **Wire up root page**
   - Edit `src/app/page.tsx` to render `<LandingPage />`

8. **Verify**
   ```bash
   pnpm dev
   ```
   - Open http://localhost:3000
   - Check all sections render
   - Scroll to verify animations trigger
   - Test responsive layout (mobile, tablet, desktop)
   - Toggle `.dark` class on `<html>` to verify dark theme

## Verification Checklist
- [ ] Navigation bar is sticky and contains all 4 links + CTA
- [ ] Hero section displays headline and "Get Started Free" button
- [ ] Problem section shows pain point cards
- [ ] How section shows capability cards
- [ ] Main Feature section shows timeline visualization
- [ ] Summary section has "Get Started Free" CTA
- [ ] Footer displays navigation links
- [ ] Scroll animations trigger on section entry (fade-in, slide-in-bottom)
- [ ] Layout is responsive at 320px, 768px, and 1280px
- [ ] Light theme renders correctly
- [ ] Dark theme renders correctly (add `.dark` class to test)
