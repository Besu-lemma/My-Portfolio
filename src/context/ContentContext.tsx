import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  CapabilityGroup,
  CaseStudy,
  ExperienceItem,
  PortfolioContent,
  SelectedBuild,
  SiteContent,
} from "@/types/content";
import {
  exportContentJson,
  loadContent,
  resetContent,
  saveContent,
} from "@/lib/content-storage";

type ContentContextValue = {
  content: PortfolioContent;
  site: SiteContent;
  experience: ExperienceItem[];
  caseStudies: CaseStudy[];
  selectedBuilds: SelectedBuild[];
  capabilities: CapabilityGroup[];
  setSite: (site: SiteContent) => void;
  setExperience: (items: ExperienceItem[]) => void;
  setCaseStudies: (items: CaseStudy[]) => void;
  setSelectedBuilds: (items: SelectedBuild[]) => void;
  setCapabilities: (items: CapabilityGroup[]) => void;
  replaceAll: (content: PortfolioContent) => void;
  resetToDefaults: () => void;
  exportJson: () => void;
  importJson: (file: File) => Promise<void>;
};

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PortfolioContent>(() => loadContent());

  useEffect(() => {
    saveContent(content);
  }, [content]);

  const persist = useCallback((next: PortfolioContent) => {
    setContent(saveContent(next));
  }, []);

  const value = useMemo<ContentContextValue>(
    () => ({
      content,
      site: content.site,
      experience: content.experience,
      caseStudies: content.caseStudies,
      selectedBuilds: content.selectedBuilds,
      capabilities: content.capabilities,
      setSite: (site) => persist({ ...content, site }),
      setExperience: (experience) => persist({ ...content, experience }),
      setCaseStudies: (caseStudies) => persist({ ...content, caseStudies }),
      setSelectedBuilds: (selectedBuilds) =>
        persist({ ...content, selectedBuilds }),
      setCapabilities: (capabilities) => persist({ ...content, capabilities }),
      replaceAll: (next) => persist(next),
      resetToDefaults: () => setContent(resetContent()),
      exportJson: () => exportContentJson(content),
      importJson: async (file) => {
        const text = await file.text();
        const parsed = JSON.parse(text) as PortfolioContent;
        if (!parsed?.site) throw new Error("Invalid content file");
        persist({
          ...parsed,
          version: 1,
          updatedAt: new Date().toISOString(),
        });
      },
    }),
    [content, persist]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}
