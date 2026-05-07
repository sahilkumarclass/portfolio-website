import { Github, ExternalLink, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/shared/TechBadge";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectDialog({ project, open, onOpenChange }: Props) {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <p className="font-mono text-xs text-accent">/ {project.category.toLowerCase()}</p>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.tagline}</DialogDescription>
        </DialogHeader>

        <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>

        {project.highlights.length > 0 && (
          <div>
            <p className="font-mono text-xs text-fg-subtle">// highlights</p>
            <ul className="mt-2 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-fg-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <p className="font-mono text-xs text-fg-subtle">// tech</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.links.github && (
            <Button asChild variant="outline" size="sm">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Source
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button asChild size="sm">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
