import { Github, Linkedin, Code2, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-fg-subtle">
          <span className="text-accent">$</span> echo "© {year} {profile.name}"
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-fg-subtle transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
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
    </footer>
  );
}
