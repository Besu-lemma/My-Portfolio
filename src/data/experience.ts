export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  status: "current" | "past";
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "beltech",
    title: "Technical Team Leader & Project Manager",
    company: "BelTech Solutions",
    location: "Hybrid",
    period: "08/2026 – Present",
    status: "current",
    summary:
      "Lead technical teams and coordinate development, task delegation, and delivery across projects in construction, education, travel, real estate, and related sectors—spanning custom software development and ERP implementation work.",
    highlights: [
      "Engage in custom software development alongside systems delivery for client organizations.",
      "Plan and follow through on project implementation—from requirements gathering through customization, integration, and business process rollout.",
      "Deliver corporate ERP training for client organizations, including an import/export company, in addition to implementation work.",
      "Work with stakeholders to translate business requirements into practical technical solutions; support technical decisions, code quality, and troubleshooting.",
    ],
    technologies: [
      "Custom software",
      "Odoo",
      "ERPNext",
      "Python",
      "PostgreSQL",
      "Corporate ERP training",
      "Project delivery",
    ],
  },
  {
    id: "soez",
    title: "Odoo ERP Technical & Functional Consultant | Team Leader | Full-Stack Developer",
    company: "SOEZ Technology",
    location: "Addis Ababa, Ethiopia",
    period: "02/2025 – Present",
    status: "current",
    summary:
      "Architect Odoo 18 Community solutions across the full development lifecycle while contributing to custom full-stack applications for training organizations.",
    highlights: [
      "Agile workflows reduced deployment cycles by 20%.",
      "Built custom Odoo modules with ORM (model inheritance, computed fields, constraints), automating manual workflows and reducing processing time by 30%.",
      "Developed QWeb reports and OWL-based dashboards for 50+ users, reducing reporting time from hours to minutes.",
      "Optimized PostgreSQL performance for high-concurrency internal operations.",
      "Design, architect, and develop a full-stack application for a coffee training company (MERN).",
      "Contribute to a large-scale online learning management system for a training company (back-end and front-end).",
    ],
    technologies: [
      "Odoo 18",
      "Python",
      "OWL",
      "QWeb",
      "PostgreSQL",
      "React",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    id: "alta",
    title: "Software Engineer (Odoo)",
    company: "ALTAcomputec",
    location: "Addis Ababa, Ethiopia",
    period: "12/2025 – 02/2026",
    status: "past",
    summary:
      "Led a development team customizing Odoo ERP with custom fields, workflows, and business logic for multi-warehouse operations.",
    highlights: [
      "Wrote Python data-migration scripts preserving integrity of historical financial data during ERP transition.",
      "Integrated third-party systems via XML-RPC/JSON-RPC for synchronization between Odoo and external hardware.",
      "Conducted code reviews and enforced Odoo best practices (PEP8, module structure), reducing post-launch bug reports by 15%.",
      "Translated multi-warehouse requirements into technical specifications for a system-wide Odoo deployment.",
    ],
    technologies: ["Odoo", "Python", "XML-RPC", "JSON-RPC", "PostgreSQL"],
  },
  {
    id: "grace",
    title: "Odoo Technical Developer (Intern)",
    company: "GraceERP Consultancy",
    location: "Addis Ababa, Ethiopia",
    period: "09/2025 – 12/2025",
    status: "past",
    summary:
      "Built and customized Odoo solutions across many business sectors and modules, working through Odoo versions 15 to 19—from early framework testing to production client deployments.",
    highlights: [
      "Delivered custom ERP work for clients in diverse industries, spanning a wide range of Odoo modules rather than a single vertical.",
      "Implemented an Ethiopian calendar (Ethiopian date) feature wired into date fields so users can work with local date conventions inside Odoo.",
      "Developed bid management functionality to support procurement and tender workflows.",
      "Built custom models and inherited views in Python and XML for compliance and reporting needs.",
      "Contributed to module compatibility and early testing of new framework features across Odoo 15–19.",
    ],
    technologies: [
      "Odoo 15–19",
      "Python",
      "XML",
      "PostgreSQL",
      "Ethiopian date",
      "Bid management",
    ],
  },
  {
    id: "debo",
    title: "Full-Stack Developer",
    company: "Debo Engineering Corporate",
    location: "Addis Ababa, Ethiopia",
    period: "10/2024 – 06/2025",
    status: "past",
    summary:
      "Full-stack development on the MERN stack—building custom web platforms end to end, from UI/UX wireframing and MongoDB schema design through Express/Node APIs, React front ends, and cloud deployment.",
    highlights: [
      "Shipped full-stack features using MongoDB, Express, React, and Node.js (MERN).",
      "Designed responsive React interfaces and RESTful backends for business-focused workflows.",
      "Owned schema design, API development, and deployment alongside stakeholder requirements gathering.",
    ],
    technologies: ["MERN", "MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: "rago",
    title: "Web Development Intern",
    company: "Rago Software Solution",
    location: "Addis Ababa, Ethiopia",
    period: "07/2024 – 10/2024",
    status: "past",
    summary:
      "Developed a dynamic product showcase website using Next.js and Payload CMS.",
    highlights: [
      "Improved responsive layouts and load-time performance; built modular frontend components.",
      "Collaborated in Git-based Agile team workflows.",
    ],
    technologies: ["Next.js", "Payload CMS", "Git"],
  },
];
