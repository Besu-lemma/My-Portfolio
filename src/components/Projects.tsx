import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import SectionShell from "@/components/effects/SectionShell";
import CaseStudy from "@/components/CaseStudy";
import { useContent } from "@/context/ContentContext";
import type { SelectedBuild } from "@/types/content";

export default function Projects() {
  const { caseStudies, selectedBuilds } = useContent();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [gallery, setGallery] = useState<string[] | null>(null);

  const openBuild = (build: SelectedBuild) => {
    if (build.isMobileApp && build.images?.length) {
      setGallery(build.images);
      return;
    }
    if (build.liveUrl) {
      window.open(build.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <SectionShell id="work" variant="beams">
      <div ref={ref}>
        <SectionHeader
          index="04 / Work"
          title="Engineering case studies"
          description="Full-stack products first (coffee training app and LMS, kept separate), then ERP systems work, then selected public builds."
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45 }}
          className="space-y-3 mb-16"
        >
          {caseStudies.map((study, i) => (
            <CaseStudy key={study.id} study={study} defaultOpen={i === 0} />
          ))}
        </motion.div>

        <div className="mb-8">
          <h3 className="font-display text-xl font-semibold mb-1">
            Selected builds
          </h3>
          <p className="text-sm text-muted-foreground">
            Public projects with screenshots or deployed demos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {selectedBuilds.map((build) => (
            <article
              key={build.id}
              className="border border-border bg-card/80 backdrop-blur-sm overflow-hidden group flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.35)]"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-border bg-muted relative">
                <img
                  src={build.image}
                  alt={`${build.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/70 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-display text-lg font-semibold mb-2">
                  {build.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {build.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {build.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {(build.liveUrl || build.isMobileApp) && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-sm border-border"
                      onClick={() => openBuild(build)}
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      {build.isMobileApp ? "Screenshots" : "Live"}
                    </Button>
                  )}
                  {build.githubUrl && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-sm"
                      onClick={() =>
                        window.open(build.githubUrl, "_blank", "noopener,noreferrer")
                      }
                    >
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {gallery && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="App screenshots"
          onClick={() => setGallery(null)}
        >
          <div
            className="bg-card border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => setGallery(null)}
              aria-label="Close screenshots"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="font-display text-lg font-semibold mb-4 pr-8">
              App screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full object-cover border border-border"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  );
}
