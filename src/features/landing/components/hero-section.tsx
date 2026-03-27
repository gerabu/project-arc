import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/8 via-background to-background animate-fade-in" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Decorative gradient orb */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/3 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Headline with character-by-character reveal feel */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            From Paper Chaos to{" "}
            <span className="text-primary relative">
              Digital Precision
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full animate-expand-horizontally" />
            </span>
          </h1>

          {/* Subheadline with slight delay */}
          <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            The all-in-one project management platform built specifically for
            architecture firms. Replace scattered spreadsheets and endless
            paperwork with a seamless digital workflow.
          </p>

          {/* CTA buttons with stagger */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Button 
              size="lg" 
              className="min-w-[180px] text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[180px] text-base"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust badge */}
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "450ms" }}>
            No credit card required · Free 14-day trial
          </p>
        </div>
      </div>
    </section>
  );
}
