import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="container scroll-mt-24 py-24">
      <SectionHeading index="06" label="education" title="Where I studied." />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <Card key={item.id} className="hover:border-accent/40">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent ring-1 ring-accent/30">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-mono text-xs text-accent">{item.period}</p>
                <h3 className="mt-1 text-base font-semibold text-fg">{item.degree}</h3>
                <p className="text-sm text-fg-muted">{item.institution}</p>
                <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-fg-subtle">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </p>
                {item.details && (
                  <p className="mt-3 border-t border-border pt-3 text-sm text-fg-muted">
                    {item.details}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
