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

        <div className="relative mx-auto max-w-xs md:mx-0">
          <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-lg border border-accent/40" />
          <div className="relative overflow-hidden rounded-lg border border-border-strong bg-bg-elevated">
            <img
              src={profile.photoUrl}
              alt={`Photo of ${profile.name}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
