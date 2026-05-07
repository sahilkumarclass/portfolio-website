export type Achievement = {
  id: string;
  title: string;
  description: string;
  category: "Coding" | "Certification" | "Hackathon" | "Other";
  link?: string;
};

export const achievements: Achievement[] = [
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
