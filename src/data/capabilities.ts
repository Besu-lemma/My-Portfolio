export type CapabilityGroup = {
  id: string;
  label: string;
  items: string[];
};

/** Ordered for a balanced software-engineer story — not ERP-first. */
export const capabilities: CapabilityGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "JavaScript", "SQL", "XML", "HTML5/CSS3"],
  },
  {
    id: "frontend",
    label: "Frontend Engineering",
    items: ["React.js", "Next.js", "OWL", "Responsive UI"],
  },
  {
    id: "backend",
    label: "Backend & Full-Stack",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "MERN stack",
      "RESTful APIs",
      "Microservice architecture",
    ],
  },
  {
    id: "data",
    label: "Data & Databases",
    items: ["PostgreSQL", "MongoDB", "Data modeling", "Business Intelligence"],
  },
  {
    id: "aiml",
    label: "Applied AI & ML",
    items: [
      "Python for data-oriented work",
      "CS foundations (algorithms & data)",
      "Data-driven product features",
      "Exploring ML for software products",
      "Practical automation over model hype",
    ],
  },
  {
    id: "erp",
    label: "ERP & Business Systems",
    items: [
      "Odoo Community v15–v19",
      "ERPNext / Frappe",
      "ORM, QWeb, OWL",
      "Integrations (XML-RPC / JSON-RPC)",
    ],
  },
  {
    id: "apis",
    label: "APIs & Integrations",
    items: ["REST", "XML-RPC", "JSON-RPC", "Postman"],
  },
  {
    id: "devops",
    label: "Delivery & Tooling",
    items: [
      "Git / GitHub",
      "Docker",
      "Kubernetes",
      "Agile",
      "Code review",
      "Requirements analysis",
    ],
  },
];
