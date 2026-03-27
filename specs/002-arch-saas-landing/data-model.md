# Data Model: Architecture SaaS Landing Page

This is a static landing page with no persistent data model. The "entities" below represent the component/content structure.

## Content Sections

| Section | Purpose | Key Content |
|---------|---------|-------------|
| **Navbar** | Persistent navigation | Logo placeholder, links (Home, Plans, About Us, Blog), CTA button |
| **Hero** | Value proposition, first impression | Headline, subheadline, "Get Started Free" CTA |
| **Problem** | Pain point identification | 3-4 pain point cards with icons |
| **How** | Solution capabilities | 4 capability cards: phased projects, task assignment, deadlines, file hub |
| **Main Feature** | Differentiator showcase | Client timeline visualization, supporting copy |
| **CTA Summary** | Conversion push | Value recap, "Get Started Free" CTA |
| **Footer** | Supplementary navigation | Links, copyright |

## Component Hierarchy

```
page.tsx
└── LandingPage
    ├── Navbar (sticky, fixed position)
    ├── HeroSection
    ├── ProblemSection
    ├── HowSection
    ├── FeatureSection
    ├── CTASection
    └── Footer
```

## Scroll Animation Classes (tailwind-animations)

| Class | Effect | Usage |
|-------|--------|-------|
| `view-animate-single` | Enables CSS View Timeline on container | Wrap each section's outer element |
| `animate-fade-in` | Fade in from transparent | Hero text, CTA buttons |
| `animate-slide-in-bottom` | Slide up from below | Problem/How/Feature card content |
| `animate-zoom-in` | Scale in from small | Main feature visualization |
| `animate-delay-100` | 100ms animation delay | Staggered card reveals |
| `animate-delay-200` | 200ms animation delay | Second wave of stagger |
| `animate-delay-300` | 300ms animation delay | Third wave of stagger |
| `animate-duration-slow` | Slower animation timing | Emphasized hero elements |
| `animate-range-[entry_10%_contain_25%]` | Control animation timing window | Fine-tune scroll trigger range |

## Theme Tokens Used

All components reference these CSS variables (defined in `globals.css`):

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `bg-background` | white | dark slate | Page background |
| `text-foreground` | dark | light | Body text |
| `bg-primary` | dark slate | light gray | CTA buttons, accent |
| `text-primary-foreground` | light | dark | Text on primary |
| `bg-secondary` | light gray | darker gray | Secondary surfaces |
| `bg-card` | white | dark slate | Card backgrounds |
| `text-muted-foreground` | medium gray | medium gray | Secondary text |
| `border-border` | light border | translucent border | Dividers |
