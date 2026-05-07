import { Badge } from "@/components/ui/badge";

type Props = {
  label: string;
  variant?: "default" | "accent" | "outline";
};

export function TechBadge({ label, variant = "default" }: Props) {
  return <Badge variant={variant}>{label}</Badge>;
}
