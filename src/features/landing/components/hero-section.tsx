import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="view-animate-single relative overflow-hidden py-20 md:py-28 lg:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
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
      </div>

      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 animate-fade-in animate-range-[entry_10%_contain_25%] animate-duration-slow">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            From Paper Chaos to{" "}
            <span className="text-primary">Digital Precision</span>
          </h1>

          <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl">
            The all-in-one project management platform built specifically for
            architecture firms. Replace scattered spreadsheets and endless
            paperwork with a seamless digital workflow.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[180px] text-base">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="min-w-[180px] text-base">
              See How It Works
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required · Free 14-day trial
          </p>
        </div>
      </div>
    </section>
  );
}
