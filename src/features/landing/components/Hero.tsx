import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(96,165,250,0.18), transparent 58%), radial-gradient(circle at 80% 80%, rgba(99,102,241,0.18), transparent 52%)",
        }}
      />
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
          From Paper Chaos to Digital Precision
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          The all-in-one project management platform built specifically for architecture firms. Replace scattered spreadsheets and endless paperwork with a seamless digital workflow.
        </p>
        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800" size="lg">
            Get Started Free
          </Button>
          <Button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 border border-slate-300 hover:bg-slate-100" size="lg">
            See How It Works
          </Button>
        </div>
        <p className="mt-3 text-sm text-slate-500">No credit card required · Free 14-day trial</p>
      </div>
    </section>
  );
}
