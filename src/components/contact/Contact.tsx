import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./ContactForm";
import { profile } from "@/data/profile";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", value: "@sahilkumarclass", href: profile.socials.github, Icon: Github },
  { label: "LinkedIn", value: "sahil-kumar", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "LeetCode", value: "sahilkumarclass10", href: profile.socials.leetcode, Icon: Code2 },
];

export function Contact() {
  return (
    <section id="contact" className="container scroll-mt-24 py-24">
      <SectionHeading
        index="09"
        label="contact"
        title="Let's build something."
        description="Open to fullstack / SDE roles and interesting freelance work. Drop a message or reach out directly."
      />

      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardContent className="p-6 md:p-8">
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-3">
          <p className="font-mono text-xs text-fg-subtle">// or directly</p>
          <ul className="space-y-2">
            {links.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-md border border-border bg-bg-elevated p-4 transition-colors hover:border-accent/40 hover:bg-bg-subtle"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent ring-1 ring-accent/30">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs text-fg-subtle">/ {label.toLowerCase()}</p>
                    <p className="truncate text-sm text-fg group-hover:text-accent">{value}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
