import { SectionHeading } from "@/components/shared/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-24">
      <SectionHeading index="01" label="about" title="A bit about me." />

      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-fg-muted md:text-lg">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="pt-2 font-mono text-sm text-fg-subtle">
            <span className="text-accent">→</span> based in {profile.location} ·{" "}
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:mx-0">
          <span
            className="pointer-events-none absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-accent/70"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-accent/70"
            aria-hidden="true"
          />

          <div className="group relative overflow-hidden rounded-lg border border-border-strong bg-bg-elevated shadow-lg shadow-accent/5 ring-1 ring-accent/20">
            <img
              src={profile.photoUrl}
              alt={`Photo of ${profile.name}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-[center_top] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-base/30 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <p className="mt-3 text-center font-mono text-xs text-fg-subtle md:text-left">
            <span className="text-accent">$</span> ./{profile.initials.toLowerCase()}.jpg
          </p>
        </div>
      </div>
    </section>
  );
}
