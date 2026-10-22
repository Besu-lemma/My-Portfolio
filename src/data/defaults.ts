import type { PortfolioContent } from "@/types/content";
import { site as siteSeed } from "@/data/site";
import { experience } from "@/data/experience";
import { capabilities } from "@/data/capabilities";
import { caseStudies, selectedBuilds } from "@/data/projects";

export const defaultContent: PortfolioContent = {
  version: 1,
  updatedAt: new Date().toISOString(),
  site: {
    name: siteSeed.name,
    shortName: siteSeed.shortName,
    url: siteSeed.url,
    headline: siteSeed.headline,
    role: siteSeed.role,
    location: siteSeed.location,
    email: siteSeed.email,
    phone: siteSeed.phone,
    phoneHref: siteSeed.phoneHref,
    cvUrl: siteSeed.cvUrl,
    ogImage: siteSeed.ogImage,
    summary: siteSeed.summary,
    seo: { ...siteSeed.seo },
    links: { ...siteSeed.links },
    education: { ...siteSeed.education },
    nav: siteSeed.nav.map((n) => ({ name: n.name, href: n.href })),
  },
  experience: experience.map((item) => ({
    ...item,
    highlights: [...item.highlights],
    technologies: [...item.technologies],
  })),
  caseStudies: caseStudies.map((item) => ({
    ...item,
    capabilities: [...item.capabilities],
    technologies: [...item.technologies],
    challenges: item.challenges ? [...item.challenges] : undefined,
    outcomes: item.outcomes ? [...item.outcomes] : undefined,
  })),
  selectedBuilds: selectedBuilds.map((item) => ({
    ...item,
    technologies: [...item.technologies],
    images: item.images ? [...item.images] : undefined,
  })),
  capabilities: capabilities.map((group) => ({
    ...group,
    items: [...group.items],
  })),
};
