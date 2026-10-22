import type { PortfolioContent } from "@/types/content";
import { defaultContent } from "@/data/defaults";

export const CONTENT_STORAGE_KEY = "portfolio-cms-content-v1";
export const AUTH_STORAGE_KEY = "portfolio-admin-auth";

export function loadContent(): PortfolioContent {
  try {
    const raw = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) return structuredClone(defaultContent);
    const parsed = JSON.parse(raw) as PortfolioContent;
    if (!parsed?.site || !Array.isArray(parsed.experience)) {
      return structuredClone(defaultContent);
    }
    return {
      ...structuredClone(defaultContent),
      ...parsed,
      site: { ...defaultContent.site, ...parsed.site },
      experience: parsed.experience ?? defaultContent.experience,
      caseStudies: parsed.caseStudies ?? defaultContent.caseStudies,
      selectedBuilds: parsed.selectedBuilds ?? defaultContent.selectedBuilds,
      capabilities: parsed.capabilities ?? defaultContent.capabilities,
    };
  } catch {
    return structuredClone(defaultContent);
  }
}

export function saveContent(content: PortfolioContent) {
  const next: PortfolioContent = {
    ...content,
    version: 1,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function resetContent() {
  localStorage.removeItem(CONTENT_STORAGE_KEY);
  return structuredClone(defaultContent);
}

export function exportContentJson(content: PortfolioContent) {
  const blob = new Blob([JSON.stringify(content, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `portfolio-content-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function isAdminAuthed() {
  return sessionStorage.getItem(AUTH_STORAGE_KEY) === "1";
}

export function setAdminAuthed(value: boolean) {
  if (value) sessionStorage.setItem(AUTH_STORAGE_KEY, "1");
  else sessionStorage.removeItem(AUTH_STORAGE_KEY);
}

export function getAdminPassword() {
  return import.meta.env.VITE_ADMIN_PASSWORD || "admin";
}

export function newId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
