type Profile = {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly role: string;
  readonly location: string;
  readonly summary: string;
  readonly linkedin: string;
  readonly github: string;
};

type Experience = {
  readonly company: string;
  readonly url: string;
  readonly role: string;
  readonly period: string;
  readonly location: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
};

type Project = {
  readonly title: string;
  readonly eyebrow: string;
  readonly description: string;
  readonly outcome: string;
  readonly technologies: readonly string[];
};

export const profile = {
  name: "Pooja Donode",
  email: "poojadonode36921@gmail.com",
  phone: "+91 96899 55894",
  role: "Software Engineer",
  location: "Bengaluru, India",
  summary:
    "I build reliable backend systems and intuitive product experiences across Java, Spring Boot, Vue, React, and TypeScript.",
  linkedin: "https://www.linkedin.com/in/pooja-donode-948b49244",
  github: "https://github.com/poojadonode28",
} satisfies Profile;

export const experience = [
  {
    company: "JFrog",
    url: "https://jfrog.com",
    role: "Software Engineer",
    period: "Apr 2025 — Present",
    location: "Bengaluru, India",
    summary:
      "Building enterprise Artifactory capabilities across backend services, event-driven workflows, and self-hosted product interfaces.",
    highlights: [
      "Implemented Spring Boot Webhook APIs for non-admin creation and updates, with subscription validation, authorization checks, and event handling.",
      "Built Groovy end-to-end coverage for Artifactory-to-worker event flows and unit coverage above 95%.",
      "Led the Smart Archiving management UI in Vue 3 and TypeScript, and migrated critical Vue 2 modules with a measured 20–30% frontend performance gain.",
    ],
    technologies: ["Java", "Spring Boot", "Vue 3", "TypeScript", "Groovy", "REST APIs"],
  },
  {
    company: "VidyutTech",
    url: "https://www.vidyuttech.com",
    role: "Software Development Engineer",
    period: "Mar 2024 — Apr 2025",
    location: "Bengaluru, India",
    summary:
      "Owned product and platform improvements spanning customer communication, support operations, APIs, and dashboard performance.",
    highlights: [
      "Reduced vehicle-data API latency by 150 ms through targeted Java refactoring.",
      "Reworked the postpaid dashboard architecture, cutting data retrieval latency by 50% and improving experience scores by 35%.",
      "Mentored two junior engineers while leading code reviews and delivery quality.",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "GraphQL", "Jenkins", "AWS S3"],
  },
  {
    company: "Tekion",
    url: "https://www.tekion.com",
    role: "Software Engineer",
    period: "Nov 2023 — Jan 2024",
    location: "Bengaluru, India",
    summary:
      "Contributed backend services for the Service Menu platform with a focus on scalable, low-latency APIs.",
    highlights: [
      "Delivered 9+ production REST APIs and helped reduce platform latency by 20%.",
      "Implemented robust backend solutions supporting service-menu workflows and reliable data access.",
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "MongoDB"],
  },
  {
    company: "Cognizant",
    url: "https://www.cognizant.com",
    role: "Programmer Analyst",
    period: "Oct 2021 — Dec 2022",
    location: "Pune, India",
    summary:
      "Designed and optimized database systems for Comcast cable operations.",
    highlights: [
      "Created optimized database tables and indexes for clearer data organization and faster retrieval.",
      "Improved complex SQL script and query processing time by 60%.",
    ],
    technologies: ["SQL", "Database Design", "Query Optimization"],
  },
] as const satisfies readonly Experience[];

export const projects = [
  {
    title: "PopcornTime",
    eyebrow: "Movie booking platform",
    description:
      "A Spring Boot application for movie-ticket booking with REST services, business logic, and a relational data model built for scale.",
    outcome:
      "Designed 20+ tables and supporting class diagrams, reducing query times by 25%.",
    technologies: ["Java", "Spring Boot", "JPA", "MySQL", "Log4j"],
  },
  {
    title: "E-Commerce Platform",
    eyebrow: "Performance-first commerce",
    description:
      "A full-featured commerce backend with product search, cart workflows, secure payments, and a flexible integration architecture.",
    outcome:
      "Introduced Redis caching to reduce API response time from 150 ms to 10 ms.",
    technologies: ["Java", "Spring Boot", "Redis", "MySQL", "Design Patterns"],
  },
] as const satisfies readonly Project[];

export const skillGroups = [
  {
    label: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "GraphQL", "SQL", "Microservices"],
  },
  {
    label: "Frontend",
    skills: ["Vue 3", "React", "TypeScript", "JavaScript", "HTML5"],
  },
  {
    label: "Quality & delivery",
    skills: ["JUnit 5", "Mockito", "Groovy", "Git", "Jenkins", "Postman"],
  },
  {
    label: "Data & observability",
    skills: ["MySQL", "MongoDB", "Redis", "AWS S3", "Grafana", "New Relic"],
  },
] as const;
