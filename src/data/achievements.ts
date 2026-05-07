export type Achievement = {
  id: string;
  title: string;
  description: string;
  category: "Coding" | "Certification" | "Hackathon" | "Other";
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: "sih-2024",
    title: "Smart India Hackathon (SIH) 2024 — Participant",
    description:
      "Built a web-based solution for real-time traffic data visualisation as part of a 6-member team — integrated public APIs with a PostgreSQL-backed service.",
    category: "Hackathon",
  },
  {
    id: "leetcode",
    title: "Active on LeetCode",
    description:
      "Regularly solving DSA problems to keep core algorithms and problem-solving sharp.",
    category: "Coding",
    link: "https://leetcode.com/u/sahilkumarclass10/",
  },
  {
    id: "github-streak",
    title: "Consistent GitHub Activity",
    description:
      "Public commits across personal projects — see the contribution graph above for recent activity.",
    category: "Coding",
    link: "https://github.com/sahilkumarclass",
  },
];
