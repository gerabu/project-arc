import { Button } from "@/components/ui/button";

export default function SummarySection() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-slate-900">Ready to Transform Your Project Management?</h2>
        <p className="mt-3 text-lg text-slate-600">Join hundreds of architecture firms who’ve moved beyond spreadsheets and paper. Get started in minutes.</p>
        <Button className="mt-6 rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800">Get Started Free</Button>
        <p className="mt-2 text-sm text-slate-500">No credit card required</p>
      </div>
    </section>
  );
}
