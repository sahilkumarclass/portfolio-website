export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "Java", "REST APIs"],
  },
  {
    id: "database",
    label: "Database",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "Linux", "Cloud"],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: ["Android", "Kotlin"],
  },
];

export const alsoFamiliarWith = ["Figma", "Penetration Testing"];
