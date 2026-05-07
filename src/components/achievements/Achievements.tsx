import { Trophy, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="container scroll-mt-24 py-24">
      <SectionHeading
        index="07"
        label="achievements"
        title="Wins along the way."
        description="A small but growing list of things I'm proud of."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a) => (
          <Card key={a.id} className="hover:border-accent/40">
            <CardContent className="flex gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent ring-1 ring-accent/30">
                <Trophy className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-fg">{a.title}</h3>
                  <Badge>{a.category}</Badge>
                </div>
                <p className="mt-1.5 text-sm text-fg-muted">{a.description}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
