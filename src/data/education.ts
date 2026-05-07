export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
};

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Lovely Professional University",
    period: "2022 — 2026",
    location: "Punjab, India",
    details: "Coursework in DSA, OS, DBMS, Networks, and Software Engineering.",
  },
  {
    id: "senior-secondary",
    degree: "Senior Secondary (XII)",
    institution: "DAV Public School, Gaya",
    period: "2020 — 2022",
    location: "Bihar, India",
    details: "Science stream — Mathematics, Physics, Chemistry.",
  },
];
