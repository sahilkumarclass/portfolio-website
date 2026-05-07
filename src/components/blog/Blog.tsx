import { Pencil, Github } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Blog() {
  return (
    <section id="blog" className="container scroll-mt-24 py-24">
      <SectionHeading index="08" label="blog" title="Writing." />

      <Card className="border-dashed">
        <CardContent className="flex flex-col items-start gap-4 p-8 md:flex-row md:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent ring-1 ring-accent/30">
            <Pencil className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs text-accent">// status: drafting</p>
            <h3 className="mt-1 text-lg font-semibold text-fg">Posts coming soon.</h3>
            <p className="mt-1 text-sm text-fg-muted">
              I'm planning to write about the engineering decisions behind my projects — fullstack
              architecture, debugging stories, and patterns I keep reaching for. Until then, my
              GitHub is the most current record of what I'm building.
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Follow on GitHub
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
