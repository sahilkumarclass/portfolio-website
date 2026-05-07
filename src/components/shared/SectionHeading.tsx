import { cn } from "@/lib/utils";

type Props = {
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ index, label, title, description, className }: Props) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <p className="font-mono text-xs text-accent">
        <span className="text-fg-subtle">{index} /</span> {label}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-fg-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
