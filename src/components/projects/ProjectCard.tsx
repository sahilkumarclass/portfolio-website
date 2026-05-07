import { useEffect, useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Star, GitFork, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/shared/TechBadge";
import { fetchRepoStats, type RepoStats } from "@/lib/github";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onOpen: (id: string) => void;
};

export function ProjectCard({ project, onOpen }: Props) {
  const [stats, setStats] = useState<RepoStats | null>(null);
  const [loading, setLoading] = useState<boolean>(Boolean(project.links.github));

  useEffect(() => {
    let active = true;
    if (!project.links.github) {
      setLoading(false);
      return;
    }
    fetchRepoStats(project.links.github).then((s) => {
      if (active) {
        setStats(s);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [project.links.github]);

  return (
    <Card
      className="group relative flex h-full flex-col overflow-hidden transition-all hover:border-accent/50 hover:bg-bg-elevated"
    >
      <button
        type="button"
        onClick={() => onOpen(project.id)}
        className="flex flex-1 flex-col p-6 text-left focus-visible:outline-none"
        aria-label={`Open details for ${project.title}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs text-accent">/ {project.category.toLowerCase()}</p>
            <h3 className="mt-1 text-lg font-semibold text-fg group-hover:text-accent">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="mt-3 text-sm text-fg-muted">{project.tagline}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <TechBadge key={t} label={t} />
          ))}
          {project.tech.length > 5 && (
            <Badge variant="outline">+{project.tech.length - 5}</Badge>
          )}
        </ul>
      </button>

      <CardContent className="border-t border-border bg-bg-base/50 px-6 py-3">
        <div className="flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-4 text-fg-subtle">
            {loading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : stats ? (
              <>
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" /> {stats.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" /> {stats.forks}
                </span>
                {stats.language && <span>{stats.language}</span>}
              </>
            ) : (
              <span>—</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-fg-muted hover:text-accent"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} GitHub`}
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-fg-muted hover:text-accent"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} live site`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
