const problems = [
  {
    title: "Scattered Files Everywhere",
    description:
      "Plans, contracts, and change requests scattered across email, Dropbox, hard drives, and shared folders. Always losing the latest version.",
  },
  {
    title: "Missed Deadlines",
    description:
      "Deadlines buried in email threads or tracked on paper. Clients surprised by delays because there’s no centralized way to monitor progress.",
  },
  {
    title: "Lost Change Requests",
    description:
      "Client requests get lost in email chains. No audit trail, no clear approval process, no way to track what’s been agreed upon.",
  },
  {
    title: "Spreadsheet Chaos",
    description:
      "Master spreadsheets with tabs for every project. Formulas break, versions conflict, and it’s impossible to get a real-time overview.",
  },
];

export default function ProblemSection() {
  return (
    <section className="container mx-auto px-6 pb-20 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">Sound familiar?</h2>
        <p className="mt-4 text-lg text-slate-600">
          You’re not alone. Every architecture firm we talk to faces the same challenges—manual processes that slow you down.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {problems.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
