import resumePdf from "@/assets/docs/Resume.pdf";
import profilePhoto from "@/assets/images/profilePhoto.jpg";

export const profile = {
  name: "Sahil Kumar",
  initials: "SK",
  role: "Fullstack Software Engineer",
  location: "India",
  status: "Open to Fullstack / SDE roles · 2026",
  tagline:
    "I build reliable web applications across the stack — React on the front, Node and Spring Boot on the back, MongoDB and MySQL behind.",
  about: [
    "I'm a fullstack software engineer focused on building dependable, well-tested web applications. I work across the stack — designing component-driven UIs in React, writing REST APIs in Node and Spring Boot, and modeling data in MongoDB and MySQL.",
    "I care about clean code, readable architecture, and the small details that make products feel solid: typed contracts, sensible error states, accessible markup. Currently finishing my B.Tech at Lovely Professional University and looking for SDE roles in 2026.",
  ],
  email: "sahilkumar.professional@gmail.com",
  phone: "+91-7488187309",
  resumeUrl: resumePdf,
  photoUrl: profilePhoto,
  socials: {
    github: "https://github.com/sahilkumarclass",
    linkedin: "https://www.linkedin.com/in/sahil-kumar-16617224a/",
    leetcode: "https://leetcode.com/u/sahilkumarclass10/",
    website: "http://sahil-kumar.dev/",
  },
  githubUser: "sahilkumarclass",
} as const;
