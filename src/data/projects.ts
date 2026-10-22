import project1 from "@/assets/project-1.png";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.png";
import home from "@/assets/home.jpg";
import home1 from "@/assets/home1.jpg";
import controller from "@/assets/controller.png";
import auth from "@/assets/auth.png";
import pin from "@/assets/pin.png";

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  domain: string;
  role: string;
  problem: string;
  approach: string;
  capabilities: string[];
  technologies: string[];
  challenges?: string[];
  outcomes?: string[];
  confidential?: boolean;
};

export type SelectedBuild = {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isMobileApp?: boolean;
};

/** Featured case studies — full-stack first, ERP as a domain strength; LMS ≠ coffee app */
export const caseStudies: CaseStudy[] = [
  {
    id: "coffee-training",
    index: "01",
    title: "Coffee Training Company Application",
    subtitle: "Custom full-stack product for coffee training operations",
    domain: "Full-stack · MERN",
    role: "Design, architecture, and full-stack development",
    problem:
      "A coffee training company required a dedicated application—separate from the LMS—to support its training business with a purpose-built digital product.",
    approach:
      "Design and architect a MERN-stack application end to end: MongoDB data model, Express/Node API layer, and React front end, aligned to the company's operational needs.",
    capabilities: [
      "Application architecture and data modeling",
      "RESTful API design with Express and Node.js",
      "React front-end for training-oriented workflows",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    confidential: true,
  },
  {
    id: "lms",
    index: "02",
    title: "Online Learning Management System",
    subtitle: "Large-scale LMS for a training company",
    domain: "Full-stack · EdTech",
    role: "Full-stack contributor — back-end and front-end",
    problem:
      "A training company needed a large-scale online learning management system to support digital course delivery and learner workflows beyond what a generic website could provide.",
    approach:
      "Contribute across the stack: implement back-end functionality and front-end interfaces that support learning and training operations as part of a larger product effort at SOEZ Technology.",
    capabilities: [
      "Back-end feature development for LMS workflows",
      "Front-end interfaces for learners and training operations",
      "Collaboration within a multi-contributor product codebase",
    ],
    technologies: ["Full-stack web", "JavaScript", "REST APIs"],
    challenges: [
      "Working within a large existing system with established patterns and delivery cadence",
    ],
    confidential: true,
  },
  {
    id: "erp-systems",
    index: "03",
    title: "ERP Implementations & Customizations",
    subtitle: "Business systems across multiple sectors",
    domain: "Software · ERP · Odoo",
    role: "Software engineer, technical lead, and trainer across BelTech, SOEZ, and prior engagements",
    problem:
      "Organizations needed ERP platforms tailored to their operational workflows—inventory, reporting, multi-warehouse processes, and integrations—without discarding existing business rules or historical data.",
    approach:
      "Translate requirements into Odoo/ERPNext customizations: models and inheritance, computed fields, constraints, QWeb reports, OWL dashboards, and RPC-based integrations. Coordinate delivery from planning through rollout and corporate training.",
    capabilities: [
      "Custom module development across many sectors and Odoo modules (v15–v19)",
      "Ethiopian calendar date support wired into Odoo date fields",
      "Bid management workflows for procurement/tender processes",
      "QWeb reporting and OWL-based dashboards",
      "Third-party integration via XML-RPC / JSON-RPC",
      "Data migration with financial integrity checks",
      "Stakeholder alignment and end-user training",
    ],
    technologies: [
      "Odoo v15–v19",
      "ERPNext",
      "Python",
      "OWL",
      "QWeb",
      "PostgreSQL",
      "XML-RPC",
      "JSON-RPC",
      "Ethiopian date",
    ],
    challenges: [
      "Localizing date UX with Ethiopian calendar across date fields",
      "Preserving historical financial data during ERP transitions",
      "High-concurrency reporting and internal operations on PostgreSQL",
      "Aligning multi-warehouse requirements with a coherent technical specification",
    ],
    outcomes: [
      "Agile workflows reduced deployment cycles by 20% (SOEZ).",
      "Custom modules reduced processing time by 30% for automated workflows.",
      "QWeb reports and OWL dashboards for 50+ users cut reporting from hours to minutes.",
      "Code-review practices reduced post-launch bug reports by 15% (ALTAcomputec).",
    ],
    confidential: true,
  },
];

/** Public builds with existing assets / links */
export const selectedBuilds: SelectedBuild[] = [
  {
    id: "olana",
    title: "Olana Construction Website",
    description:
      "Marketing site for a construction company—services and project showcase with a clean, professional layout.",
    image: project1,
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://olanaconstruction.com/",
    githubUrl: "https://github.com/Besu-lemma/olana-construction",
  },
  {
    id: "ethio-exchange",
    title: "Ethio Exchange",
    description:
      "Currency exchange platform with conversion tools and market-oriented views for Ethiopian and other currencies.",
    image: project4,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Flutter"],
    liveUrl: "https://ethio-xchange.vercel.app/",
    githubUrl: "https://github.com/Besu-lemma/Ethio-Xchange",
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation App",
    description:
      "IoT-connected mobile app for soil moisture monitoring with data-driven irrigation recommendations for Ethiopian farmers—applied intelligence in a real field product.",
    image: home,
    images: [home1, controller, auth, pin],
    technologies: ["Flutter", "Dart", "Firebase", "IoT", "Data-driven features"],
    githubUrl: "https://github.com/Besu-lemma/Smart_Irrigation_app",
    isMobileApp: true,
  },
  {
    id: "task-app",
    title: "Task Management App",
    description:
      "Collaborative task tracking app focused on productivity and an intuitive mobile UI.",
    image: project3,
    images: [project3],
    technologies: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/Besu-lemma/task-management-app",
    isMobileApp: true,
  },
];
