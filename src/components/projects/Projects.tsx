import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";
import { projects } from "@/data/projects";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  const active = useMemo(() => projects.find((p) => p.id === openId) ?? null, [openId]);

  return (
    <section id="projects" className="container scroll-mt-24 py-24">
      <SectionHeading
        index="04"
        label="projects"
        title="Things I've built."
        description="A handful of fullstack projects — click any card for details."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpenId} />
        ))}
      </div>

      <ProjectDialog
        project={active}
        open={Boolean(openId)}
        onOpenChange={(o) => !o && setOpenId(null)}
      />
    </section>
  );
}
