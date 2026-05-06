export const profile = {
  name: "Mursaleen",
  role: "Product-minded Developer",
  tagline: "I build practical web products that make messy workflows easier to manage.",
  location: "India · Open to remote",
  email: "mursaleenmk.dev@gmail.com",
  github: "https://github.com/mursaleenmk3",
  linkedin: "https://www.linkedin.com/in/mursaleen-kembhavi/",
  resume: "/resume.pdf",
  profileImage:"/img.jpeg"
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  title: "About Me",
  paragraphs: [
    "I’m Mursaleen, a developer who enjoys building software that solves practical problems, not just good-looking screens.",
    "Most of my hands-on experience comes from building business workflow systems, internal tools, forms, records, APIs, database-connected flows, and deployed web applications.",
    "I’m currently looking for remote developer, frontend, full-stack intern, or product engineering opportunities where I can contribute, learn fast, and work on real product problems.",
  ],
};

export const whatIDo = [
  {
    title: "Product Interfaces",
    description:
      "Building clean, practical interfaces for tools, internal systems, and workflow-based products.",
  },
  {
    title: "Workflow Systems",
    description:
      "Converting real business processes into structured software screens and flows.",
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive and usable web interfaces with attention to clarity and interaction.",
  },
  {
    title: "Backend & APIs",
    description:
      "Building backend flows, API routes, database-connected logic, and server-side functionality for web applications.",
  },
  {
    title: "Data & Records Handling",
    description:
      "Working with forms, records, structured data, calculations, and database-driven workflows.",
  },
  {
    title: "Deployment & Debugging",
    description:
      "Deploying projects, handling VPS setup, fixing issues, and improving reliability.",
  },
  {
    title: "Product Thinking",
    description:
      "Understanding user problems and turning messy workflows into simple software experiences.",
  },
];

export const featuredProject = {
  title: "Dream Dome Decors Internal System",

  shortDescription:
    "A custom internal operations system built for an interior/decor business to manage site work, labour, stock, billing, expenses, and drawing-based estimates from one structured place.",
  problem:
    "The business needed a simpler way to manage daily operational information instead of depending on scattered manual tracking, notes, and follow-ups.",
  solution:
    "I helped build a module-based internal system where core business areas like Sites, Labour, Stock, Billing, Expenses, Draw Estimate, and Overview could be managed from one place.",
  modules: [
    "Sites",
    "Labour",
    "Stock",
    "Billing",
    "Expenses",
    "Draw Estimate",
    "Overview",
  ],
  responsibilities: [
    "Converted real business workflows into structured software modules",
    "Built module-based UI screens for daily operational use",
    "Worked on forms, records, calculations, and database-connected flows",
    "Handled frontend and backend implementation",
    "Focused on keeping the system simple for non-technical users",
  ],
  learnings: [
    "Real business software has to match how people actually work",
    "Simple workflows matter more than adding too many features",
    "Forms, records, and data relationships need careful planning",
    "Non-technical users need clarity, not complicated screens",
    "Debugging and iteration are part of real client-style development",
  ],
  techFocus: [
    "Business workflow mapping",
    "Module-based UI",
    "Forms and records",
    "Billing and expense flows",
    "Stock and labour tracking",
    "Database-connected logic",
    "Deployment",
  ],

};

export const otherProjects = [
  {
    title: "90’s Nest Cafe Internal System",
    type: "Client Project",
    description:
      "A custom internal system built to help a cafe manage operational work through structured digital workflows.",
    highlights: [
      "Converted business requirements into usable software flows",
      "Built clean internal screens for operational use",
      "Worked on forms, records, APIs, and data handling",
      "Focused on making daily business information easier to manage",
    ],
  },
  {
    title: "QoroTech Website",
    type: "Company Website",
    description:
      "A responsive website built for QoroTech to present services, credibility, case studies, and business positioning clearly.",
    highlights: [
      "Built responsive website pages",
      "Structured service and positioning content",
      "Focused on clean UI, readability, and conversion-friendly sections",
      "Handled deployment and updates",
    ],
  },
];

export const skills = {
  frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "REST APIs", "Prisma", "PostgreSQL"],
  tools: ["Git", "GitHub", "Chrome DevTools", "VS Code"],
  deployment: ["VPS Deployment", "Nginx", "PM2", "Production Debugging"],
  strengths: ["Product Thinking", "Workflow Design", "Debugging", "Fast Learning"],
};