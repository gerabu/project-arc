import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-2xl space-y-8 rounded-2xl bg-primary/5 p-8 md:p-12 animate-fade-in-up relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-2xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/10 blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />
          
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Join hundreds of architecture firms who've moved beyond spreadsheets
              and paper. Get started in minutes.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-8">
              <Button 
                size="lg" 
                className="min-w-[200px] text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started Free
              </Button>
              <p className="text-sm text-muted-foreground">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
