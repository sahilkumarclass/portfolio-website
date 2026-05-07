import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="container scroll-mt-24 py-24">
      <SectionHeading
        index="03"
        label="experience"
        title="Where I've worked."
        description="Roles and internships I've taken on so far."
      />

      {experience.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-start gap-4 p-8 md:flex-row md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent ring-1 ring-accent/30">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs text-accent">// status: open</p>
              <h3 className="mt-1 text-lg font-semibold text-fg">
                Looking for my first SDE role.
              </h3>
              <p className="mt-1 text-sm text-fg-muted">
                Final-year B.Tech student actively seeking fullstack / SDE internships and
                new‑grad roles. Building shipped projects in the meantime — see below.
              </p>
            </div>
            <Badge variant="accent" className="shrink-0">
              available 2026
            </Badge>
          </CardContent>
        </Card>
      ) : (
        <ol className="relative space-y-8 border-l border-border-strong pl-6">
          {experience.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-bg-base ring-2 ring-accent" />
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-fg">{item.role}</h3>
                  <p className="font-mono text-sm text-accent">{item.org}</p>
                </div>
                <p className="font-mono text-xs text-fg-subtle">{item.period}</p>
              </div>
              <p className="mt-3 text-sm text-fg-muted">{item.description}</p>
              {item.tech && item.tech.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
