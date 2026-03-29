const timeline = [
  { phase: "Schematic Design", details: "Concept sketches and initial design direction approved", status: "Completed · Jan 15", style: "bg-emerald-50 border-emerald-300 text-emerald-700" },
  { phase: "Design Development", details: "Floor plans, elevations, and material selections approved", status: "Completed · Feb 28", style: "bg-emerald-50 border-emerald-300 text-emerald-700" },
  { phase: "Construction Documents", details: "Working drawings and permit documentation", status: "In Progress · Due Mar 20", style: "bg-amber-50 border-amber-300 text-amber-700" },
  { phase: "Bidding", details: "Contractor selection and negotiation", status: "Pending · Apr 2026", style: "bg-slate-50 border-slate-200 text-slate-500" },
  { phase: "Construction Administration", details: "On-site coordination and client walkthroughs", status: "Pending · May 2026", style: "bg-slate-50 border-slate-200 text-slate-500" },
];

export default function TimelineSection() {
  return (
    <section className="container mx-auto px-6 pb-20 pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-black text-slate-900">Keep Your Clients Informed—Automatically</h2>
        <p className="mt-4 text-lg text-slate-600">The client-facing timeline that transforms how you communicate project status. No more ad-hoc updates.</p>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <header className="mb-6 border-b border-slate-100 pb-4 text-left">
          <h3 className="text-xl font-bold text-slate-900">Project Timeline — Riverside Residence</h3>
        </header>

        <ul className="space-y-4 text-sm text-slate-600">
          {timeline.map((item) => (
            <li key={item.phase} className="flex gap-4 rounded-lg p-4 border border-slate-200">
              <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-slate-900" />
              <div>
                <p className="font-semibold text-slate-800">{item.phase}</p>
                <p className="text-slate-500">{item.details}</p>
                <span className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${item.style}`}>{item.status}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
          <p className="text-sm font-semibold text-amber-700">Change Request #12: Client requested kitchen layout modification. Review pending.</p>
        </div>
      </div>
    </section>
  );
}
