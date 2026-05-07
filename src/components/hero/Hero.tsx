import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { StatusPill } from "./StatusPill";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20 lg:pt-0"
    >
      <div
        className="dot-grid pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 40%, hsl(var(--accent) / 0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="max-w-3xl animate-fade-in">
          <StatusPill />

          <p className="mt-6 font-mono text-sm text-fg-muted">
            <span className="text-accent">$</span> whoami
          </p>

          <h1 className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-fg">{profile.name}</span>
            <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] animate-caret-blink bg-accent" />
          </h1>

          <p className="mt-4 font-mono text-lg text-accent md:text-xl">
            <span className="text-fg-subtle">&gt;</span> {profile.role}
          </p>

          <p className="mt-6 max-w-2xl text-base text-fg-muted md:text-lg">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" download>
                <Download className="h-4 w-4" />
                Resume.pdf
              </a>
            </Button>
          </div>

          <div className="mt-14 hidden items-center gap-6 font-mono text-xs text-fg-subtle md:flex">
            <span>
              <span className="text-accent">→</span> scroll
            </span>
            <span className="h-px w-16 bg-border-strong" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
