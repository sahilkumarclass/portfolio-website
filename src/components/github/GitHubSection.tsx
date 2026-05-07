import { Github, ArrowUpRight } from "lucide-react";
import GitHubCalendar from "react-github-calendar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

const theme = {
  light: ["#18181b", "#0a3d33", "#006e54", "#00a87a", "#00d9a3"],
  dark: ["#18181b", "#0a3d33", "#006e54", "#00a87a", "#00d9a3"],
};

export function GitHubSection() {
  return (
    <section id="github" className="container scroll-mt-24 py-24">
      <SectionHeading
        index="05"
        label="github"
        title="What I've been shipping."
        description="Public commit activity from my GitHub — a quick look at recent momentum."
      />

      <Card>
        <CardContent className="p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-mono text-sm text-fg-muted">
              <Github className="h-4 w-4" />
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                @{profile.githubUser}
              </a>
            </div>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-fg-subtle hover:text-accent"
            >
              View on GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="overflow-x-auto">
            <GitHubCalendar
              username={profile.githubUser}
              colorScheme="dark"
              theme={theme}
              fontSize={12}
              blockSize={12}
              blockMargin={4}
              hideColorLegend={false}
              hideMonthLabels={false}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
