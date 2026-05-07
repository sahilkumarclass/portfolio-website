export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "C++",
      "Kotlin",
      "SQL",
      "HTML",
      "CSS",
      "XML",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "shadcn/ui",
      "TanStack Query",
      "Bootstrap",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Node.js",
      "Express",
      "REST APIs",
      "Socket.IO",
      "JWT",
      "Resilience4j",
    ],
  },
  {
    id: "database",
    label: "Database & Caching",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "AWS",
      "Apache Kafka",
      "Cloudinary",
      "Postman",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: ["Android", "Kotlin", "Android Studio"],
  },
];

export const alsoFamiliarWith = ["Figma", "Penetration Testing", "CI/CD", "Agile / Scrum"];
