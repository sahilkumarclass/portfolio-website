export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  location?: string;
  description: string;
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  // Empty for now — graceful empty state will render in Experience.tsx.
];
