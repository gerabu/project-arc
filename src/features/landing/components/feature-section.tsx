import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  title: string;
  description: string;
  date: string;
  status: "completed" | "in-progress" | "pending";
  icon?: "check" | "clock";
}

const timelineItems: TimelineItem[] = [
  {
    title: "Schematic Design",
    description: "Concept sketches and initial design direction approved",
    date: "Completed · Jan 15",
    status: "completed",
    icon: "check",
  },
  {
    title: "Design Development",
    description: "Floor plans, elevations, and material selections approved",
    date: "Completed · Feb 28",
    status: "completed",
    icon: "check",
  },
  {
    title: "Construction Documents",
    description: "Working drawings and permit documentation",
    date: "In Progress · Due Mar 20",
    status: "in-progress",
    icon: "clock",
  },
  {
    title: "Bidding",
    description: "Contractor selection and contract negotiation",
    date: "Pending · Apr 2026",
    status: "pending",
  },
  {
    title: "Construction Administration",
    description: "On-site coordination and client walkthroughs",
    date: "Pending · May 2026",
    status: "pending",
  },
];

function TimelineIcon({ status, index }: { status: TimelineItem["status"]; index: number }) {
  if (status === "completed") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  if (status === "in-progress") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }
  return <span className="text-xs font-bold">{(index + 1)}</span>;
}

export function FeatureSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl animate-fade-in-up">
            Keep Your Clients Informed—Automatically
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            The client-facing timeline that transforms how you communicate project
            status. No more ad-hoc updates.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-border/60 bg-card/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <CardHeader className="border-b border-border/40 bg-muted/20 pb-6">
              <CardTitle className="text-base font-medium text-muted-foreground tracking-wider">
                Project Timeline — Riverside Residence
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-3 bottom-3 w-px bg-linear-to-b from-primary via-border to-border" />

                <div className="space-y-0">
                  {timelineItems.map((item, index) => {
                    const isCompleted = item.status === "completed";
                    const isInProgress = item.status === "in-progress";
                    const isPending = item.status === "pending";

                    return (
                      <div
                        key={item.title}
                        className="relative flex gap-5 pb-8 last:pb-0 animate-fade-in-up"
                        style={{ animationDelay: `${(index + 3) * 100}ms` }}
                      >
                        {/* Circle */}
                        <div
                          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            isCompleted
                              ? "border-primary bg-primary text-primary-foreground"
                              : isInProgress
                              ? "border-amber-500 bg-amber-500 text-white"
                              : "border-border bg-background text-muted-foreground"
                          }`}
                        >
                          <TimelineIcon status={item.status} index={index} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1.5">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <span
                              className={`font-semibold ${
                                isPending ? "text-muted-foreground" : "text-foreground"
                              }`}
                            >
                              {item.title}
                            </span>
                            <span
                              className={`text-sm ${
                                isInProgress
                                  ? "text-amber-600 dark:text-amber-500 font-medium"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {item.date}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Change Request Alert */}
                <div className="mt-6 ml-15 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/80 p-4 dark:border-amber-800/50 dark:bg-amber-950/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-500"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" x2="12" y1="9" y2="13" />
                    <line x1="12" x2="12.01" y1="17" y2="17" />
                  </svg>
                  <div className="text-sm">
                    <span className="font-semibold text-amber-800 dark:text-amber-400">
                      Change Request #12:
                    </span>{" "}
                    <span className="text-amber-700 dark:text-amber-300">
                      Client requested kitchen layout modification. Review pending.
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Clients see exactly what you want them to see—no surprises, no
              confusion. They can view project stages, track delays, and review
              change requests all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
