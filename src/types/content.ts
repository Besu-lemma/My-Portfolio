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

export type CapabilityGroup = {
  id: string;
  label: string;
  items: string[];
};

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

export type SiteContent = {
  name: string;
  shortName: string;
  url: string;
  headline: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  cvUrl: string;
  ogImage: string;
  summary: string;
  seo: {
    title: string;
    description: string;
  };
  links: {
    linkedin: string;
    github: string;
    twitter: string;
    portfolio: string;
  };
  education: {
    degree: string;
    school: string;
    period: string;
  };
  nav: { name: string; href: string }[];
};

export type PortfolioContent = {
  version: number;
  updatedAt: string;
  site: SiteContent;
  experience: ExperienceItem[];
  caseStudies: CaseStudy[];
  selectedBuilds: SelectedBuild[];
  capabilities: CapabilityGroup[];
};
