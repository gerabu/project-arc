import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="view-animate-single py-20 md:py-28">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-2xl space-y-8 rounded-2xl bg-primary/5 p-8 md:p-12 animate-fade-in animate-range-[entry_10%_contain_25%]">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of architecture firms who've moved beyond spreadsheets
            and paper. Get started in minutes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[200px] text-base">
              Get Started Free
            </Button>
            <p className="text-sm text-muted-foreground">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
