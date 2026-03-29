const features = [
  {
    title: "Phased Project Management",
    description: "Break projects into clear phases—schematic, design, construction docs, delivery—so teams always know where to focus.",
  },
  {
    title: "Task Assignment",
    description: "Assign tasks to team members with clear deadlines and progress checkpoints without endless emails.",
  },
  {
    title: "Deadline Tracking",
    description: "Visual deadline tracking with automated reminders. Never miss a client deadline again.",
  },
  {
    title: "Centralized File Hub",
    description: "One place for all project files—plans, change requests, contracts, estimates. Always use the latest version.",
  },
];

export default function HowSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-black text-slate-900">How ArcFlow Helps</h2>
          <p className="mt-3 text-lg text-slate-600">Everything you need to manage projects efficiently—without the chaos of multiple disconnected tools.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
