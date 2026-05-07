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
    id: "inteligenai-emr",
    title: "Inteligenai EMR — Multi-tenant Healthcare Platform",
    tagline: "Multi-tenant EMR monorepo for clinics: appointments, prescriptions, billing, IPD.",
    description:
      "End-to-end Electronic Medical Record platform spanning patient + admin portals, a REST API, and a real-time chat service. Designed Spring Boot 3 (Java 21) services on MongoDB with per-request multi-tenant ThreadContext, JWT auth, and Resilience4j circuit breakers around external integrations. The React 18 + Vite + MUI frontend is backed by TanStack Query, with a migration off legacy Recoil atoms into a unified query layer.",
    highlights: [
      "Multi-tenant Spring Boot 3 + MongoDB API with per-request ThreadContext for tenant isolation",
      "JWT authentication, role-aware endpoints, and Resilience4j circuit breakers",
      "React 18 / Vite / MUI screens powered by TanStack Query (migrated off Recoil)",
      "Socket.IO chat service with reconnection handling and message persistence",
      "Coverage across appointments, e-prescriptions, billing, and IPD workflows",
    ],
    tech: [
      "Spring Boot 3",
      "Java 21",
      "React 18",
      "Vite",
      "MUI",
      "TanStack Query",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Resilience4j",
    ],
    category: "Fullstack",
    links: {
      live: "https://admin.alpha-emr.inteligenai.com/#!/admin/login",
    },
    featured: true,
  },
  {
    id: "music-player",
    title: "Music Player Application v1.0.2",
    tagline: "Full-stack music platform with Redis caching, AWS auto-scaling, and Cloudinary uploads.",
    description:
      "Music streaming platform where a React client talks to a Spring Boot REST service for catalog, playlists, and playback state. Optimized with Redis caching and API rate limiting, deployed on AWS with auto-scaling for resilience under load. Catalog assets are uploaded via Cloudinary.",
    highlights: [
      "JWT authentication supporting 500+ users with an admin panel",
      "Redis caching + 100 req/min rate limiting cut song load times by 60% for 200+ concurrent users",
      "Deployed on AWS with auto-scaling at 99.9% uptime",
      "10,000+ song uploads handled via Cloudinary",
    ],
    tech: ["Spring Boot", "React", "MongoDB", "Redis", "AWS", "Cloudinary", "JWT"],
    category: "Fullstack",
    links: {
      github: "https://github.com/sahilkumarclass/MusicPlayerApplication",
    },
    featured: true,
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    tagline: "JWT-secured library platform with lending workflow and overdue fines.",
    description:
      "Library management platform with a JWT-secured Spring Boot REST API and a React + TypeScript frontend. Implements full lending workflow with 14-day loan periods, issue/return transactions, and automatic overdue fine calculation on top of paginated, sortable catalogue search.",
    highlights: [
      "Spring Security with role-based access (ADMIN / MEMBER) over PostgreSQL via Spring Data JPA + Hibernate",
      "14-day loan periods, issue/return transactions, automatic overdue fines (₹5/day)",
      "Paginated, sortable catalogue search",
      "React 18 + TypeScript + Vite + Tailwind frontend with role-aware navigation, dashboards, modal forms, and toasts",
    ],
    tech: [
      "Spring Boot",
      "Java",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind",
    ],
    category: "Fullstack",
    links: {
      github: "https://github.com/sahilkumarclass/Library-Management-System",
    },
    featured: true,
  },
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
      live: "https://gym-site-psi.vercel.app/",
    },
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
