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
    degree: "B.Tech, Computer Science & Engineering — CGPA: 7.4",
    institution: "Lovely Professional University",
    period: "Jul 2022 — Jul 2026",
    location: "Phagwara, Punjab",
    details:
      "Coursework in DSA, Operating Systems, DBMS, Computer Networks, Software Engineering, OOP, and Web Technologies.",
  },
  {
    id: "senior-secondary",
    degree: "Higher Secondary — Science Stream (PCM)",
    institution: "D.A.V Public School",
    period: "Jun 2021 — May 2022",
    location: "Gaya, Bihar",
    details: "Mathematics, Physics, Chemistry.",
  },
];
