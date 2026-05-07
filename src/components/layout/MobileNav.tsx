import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { sections } from "@/data/sections";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = sections.map((s) => s.id);

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-border bg-bg-base/80 px-4 py-3 backdrop-blur-md lg:hidden">
      <a href="#home" className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 font-mono text-sm font-bold text-accent ring-1 ring-accent/30">
          {profile.initials}
        </span>
        <span className="font-mono text-sm text-fg">{profile.name}</span>
      </a>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72">
          <SheetTitle className="font-mono text-sm text-fg-subtle">/ sections</SheetTitle>
          <nav className="mt-6">
            <ul className="space-y-1">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 font-mono text-sm",
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
                      )}
                    >
                      <span className="text-xs text-fg-subtle">{s.index}</span>
                      <span>{s.filename}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
