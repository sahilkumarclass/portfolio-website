export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  category: "Fullstack" | "Frontend" | "Backend";
  links: {
    github?: string;
    live?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "gym-website",
    title: "Gym Website",
    tagline: "Membership and class booking for a fitness studio.",
    description:
      "Fullstack gym membership platform with member sign-up, class scheduling, and an admin dashboard. Built REST APIs in Express, persisted data in MongoDB, and shipped a responsive React UI.",
    highlights: [
      "JWT-based auth with role-based access (member / admin)",
      "Class booking flow with capacity limits and conflict checks",
      "Admin dashboard for managing classes, trainers, and members",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Fullstack",
    links: {
      github: "https://github.com/sahilkumarclass/Gym-Website",
    },
    featured: true,
  },
  {
    id: "music-player",
    title: "Music Player",
    tagline: "Stream and queue tracks via a custom Spring Boot API.",
    description:
      "Music streaming app where the React client talks to a Spring Boot REST service for catalog, playlists, and playback state. Designed clean DTOs and paginated endpoints for the catalog.",
    highlights: [
      "Spring Boot REST API with layered service architecture",
      "Playlist CRUD, search, and queue persistence",
      "React player with optimistic UI for queue actions",
    ],
    tech: ["React", "Spring Boot", "Java", "REST API", "MySQL"],
    category: "Fullstack",
    links: {
      github: "https://github.com/sahilkumarclass/MusicPlayerAPI",
    },
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Site",
    tagline: "This site — Vite, React, TypeScript, Tailwind, shadcn/ui.",
    description:
      "Self-hosted portfolio rebuilt from CRA + plain CSS to a typed Vite + Tailwind + shadcn stack. Contact form posts to a Spring Boot backend deployed on Railway.",
    highlights: [
      "TypeScript everywhere, strict mode",
      "Accessible primitives via Radix / shadcn",
      "Dark dev-terminal aesthetic with custom tokens",
    ],
    tech: ["Vite", "React", "TypeScript", "Tailwind", "shadcn/ui", "Spring Boot"],
    category: "Fullstack",
    links: {
      github: "https://github.com/sahilkumarclass",
    },
  },
];
