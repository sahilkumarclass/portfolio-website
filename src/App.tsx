import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { GitHubSection } from "@/components/github/GitHubSection";
import { Education } from "@/components/education/Education";
import { Achievements } from "@/components/achievements/Achievements";
import { Blog } from "@/components/blog/Blog";
import { Contact } from "@/components/contact/Contact";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <TooltipProvider delayDuration={150}>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg-base"
      >
        Skip to content
      </a>
      <MobileNav />
      <Sidebar />
      <main className="lg:pl-64">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <Education />
        <Achievements />
        <Blog />
        <Contact />
        <Footer />
      </main>
      <Toaster position="bottom-right" richColors />
    </TooltipProvider>
  );
}
