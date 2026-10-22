import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { CaseStudy as CaseStudyType } from "@/data/projects";

type Props = {
  study: CaseStudyType;
  defaultOpen?: boolean;
};

export default function CaseStudy({ study, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const reduceMotion = useReducedMotion();

  return (
    <article className="border border-border bg-card/80 backdrop-blur-sm transition-colors hover:border-primary/30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-5 sm:p-6 md:p-8 flex gap-4 sm:gap-6 items-start hover:bg-muted/30 transition-colors"
        aria-expanded={open}
      >
        <span className="font-mono-meta text-sm text-primary shrink-0 pt-1">
          {study.index}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="tech-tag">{study.domain}</span>
            {study.confidential && (
              <span className="font-mono-meta text-[10px] uppercase tracking-wider text-muted-foreground">
                Client-confidential detail omitted
              </span>
            )}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
            {study.title}
          </h3>
          <p className="mt-1 text-muted-foreground text-sm sm:text-base">
            {study.subtitle}
          </p>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-border">
              <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-5">
                  <div>
                    <h4 className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Role
                    </h4>
                    <p className="text-sm leading-relaxed">{study.role}</p>
                  </div>
                  <div>
                    <h4 className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Problem
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Approach
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {study.approach}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {study.capabilities.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary mt-1.5 shrink-0" aria-hidden>
                            ▸
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {study.challenges && study.challenges.length > 0 && (
                    <div>
                      <h4 className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Engineering decisions
                      </h4>
                      <ul className="space-y-2">
                        {study.challenges.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <span className="text-primary mt-1.5 shrink-0" aria-hidden>
                              ▸
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {study.outcomes && study.outcomes.length > 0 && (
                    <div>
                      <h4 className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {study.outcomes.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-foreground flex gap-2"
                          >
                            <span className="text-primary mt-1.5 shrink-0" aria-hidden>
                              ▸
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
