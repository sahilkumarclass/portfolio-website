export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  location?: string;
  description: string;
  tech?: string[];
  links?: {
    label: string;
    url: string;
  }[];
};

export const experience: ExperienceItem[] = [
  {
    id: "inteligenai",
    role: "SDE-1 Intern",
    org: "Inteligenai",
    period: "Jan 2025 — Present",
    location: "On-site, Gurgaon",
    description:
      "Shipping features across a multi-tenant Electronic Medical Record (EMR) monorepo — patient + admin portals, REST API, and a real-time chat service. Built React 18 / Vite / MUI screens backed by TanStack Query and migrated legacy Recoil atoms into the unified query layer. On the backend, implemented Spring Boot 3 (Java 21) endpoints over MongoDB with JWT auth, multi-tenant ThreadContext, and Resilience4j circuit breakers, and integrated a Socket.IO chat service. Coverage spans appointments, prescriptions, billing, and IPD workflows.",
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
    links: [
      { label: "Admin Portal", url: "https://admin.alpha-emr.inteligenai.com/#!/admin/login" },
      { label: "Booking Portal", url: "https://booking.alpha-emr.inteligenai.com/#/" },
    ],
  },
  {
    id: "moonpreneur",
    role: "Robotics PG & Web Development Intern",
    org: "Moonpreneur",
    period: "Mar 2024 — May 2024",
    location: "Remote",
    description:
      "Worked across the Web Development & Robotics Programming track. Shipped frontend features and bug fixes across Next.js + React applications focused on UI responsiveness and component reuse, and built / maintained Spring Boot REST endpoints with attention to error handling and contract stability. Also supported the Robotics PG curriculum with automation, control-algorithm, and system-integration tasks.",
    tech: ["Next.js", "React", "Spring Boot", "REST APIs", "Java"],
  },
];
