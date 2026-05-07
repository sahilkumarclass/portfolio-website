import { SectionHeading } from "@/components/shared/SectionHeading";
import { skillCategories, alsoFamiliarWith } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="container scroll-mt-24 py-24">
      <SectionHeading
        index="02"
        label="skills"
        title="The stack I work in."
        description="The tools I reach for day-to-day, grouped by where they sit in the stack."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => (
          <Card key={cat.id} className="hover:border-accent/40">
            <CardContent className="p-5">
              <p className="font-mono text-xs text-accent">/ {cat.label.toLowerCase()}</p>
              <h3 className="mt-1 text-base font-semibold text-fg">{cat.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-bg-subtle px-2.5 py-1 font-mono text-xs text-fg-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {alsoFamiliarWith.length > 0 && (
        <p className="mt-8 font-mono text-sm text-fg-subtle">
          <span className="text-accent">#</span> also familiar with:{" "}
          <span className="text-fg-muted">{alsoFamiliarWith.join(", ")}</span>
        </p>
      )}
    </section>
  );
}
