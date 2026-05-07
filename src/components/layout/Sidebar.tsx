import { Github, Linkedin, Code2 } from "lucide-react";
import { sections } from "@/data/sections";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = sections.map((s) => s.id);

export function Sidebar() {
  const active = useActiveSection(sectionIds);

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-border bg-bg-elevated/60 backdrop-blur-sm lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 font-mono text-sm font-bold text-accent ring-1 ring-accent/30">
          {profile.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-fg">{profile.name}</p>
          <p className="font-mono text-xs text-fg-subtle">{profile.role.toLowerCase()}</p>
        </div>
      </div>

      <div className="px-6 pb-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
          / sections
        </p>
      </div>

      <nav className="flex-1 px-3" aria-label="Sections">
        <ul className="space-y-0.5">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "group flex items-center gap-3 rounded-md px-3 py-2 font-mono text-sm transition-colors",
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className={cn(
                      "text-xs",
                      isActive ? "text-accent" : "text-fg-subtle group-hover:text-fg-muted",
                    )}
                  >
                    {s.index}
                  </span>
                  <span className="flex-1 truncate">{s.filename}</span>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-opacity",
                      isActive ? "bg-accent opacity-100" : "opacity-0",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-subtle transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-subtle transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-subtle transition-colors hover:text-accent"
            aria-label="LeetCode"
          >
            <Code2 className="h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
