export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "github"
  | "education"
  | "achievements"
  | "blog"
  | "contact";

export type Section = {
  id: SectionId;
  index: string;
  label: string;
  filename: string;
};

export const sections: Section[] = [
  { id: "home", index: "00", label: "home", filename: "_home.tsx" },
  { id: "about", index: "01", label: "about", filename: "_about.tsx" },
  { id: "skills", index: "02", label: "skills", filename: "_skills.tsx" },
  { id: "experience", index: "03", label: "experience", filename: "_experience.tsx" },
  { id: "projects", index: "04", label: "projects", filename: "_projects.tsx" },
  { id: "github", index: "05", label: "github", filename: "_github.tsx" },
  { id: "education", index: "06", label: "education", filename: "_education.tsx" },
  { id: "achievements", index: "07", label: "achievements", filename: "_achievements.tsx" },
  { id: "blog", index: "08", label: "blog", filename: "_blog.tsx" },
  { id: "contact", index: "09", label: "contact", filename: "_contact.tsx" },
];
