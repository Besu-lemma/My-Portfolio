import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ExperienceItem } from "@/types/content";
import MovingBorder from "@/components/effects/MovingBorder";

type Props = {
  items: ExperienceItem[];
};

export default function Timeline({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((i) => i.id === activeId) ?? items[0];
  const reduceMotion = useReducedMotion();

  if (!active) return null;

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
      <div className="lg:col-span-4">
        <ol className="relative border-l border-rule/80 ml-2 space-y-0">
          {items.map((item, index) => {
            const isActive = item.id === active.id;
            return (
              <li key={item.id} className="relative pl-6 pb-6 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 transition-colors ${
                    isActive
                      ? "border-primary bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.55)]"
                      : "border-border bg-background"
                  }`}
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left rounded-sm px-2 py-1.5 -ml-2 transition-all ${
                    isActive
                      ? "text-foreground bg-primary/5 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground border border-transparent hover:bg-muted/40"
                  }`}
                >
                  <span className="font-mono-meta text-[10px] tracking-wider block mb-1">
                    {String(index + 1).padStart(2, "0")} · {item.period}
                    {item.status === "current" && (
                      <span className="ml-2 status-chip align-middle">now</span>
                    )}
                  </span>
                  <span className="font-display text-sm sm:text-base font-semibold block leading-snug">
                    {item.company}
                  </span>
                  <span className="text-xs sm:text-sm block mt-0.5 line-clamp-2 opacity-80">
                    {item.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <motion.div
        key={active.id}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:col-span-8"
      >
        <MovingBorder className="rounded-sm" duration={9}>
          <div className="p-5 sm:p-7 bg-card/95">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold">
                  {active.title}
                </h3>
                <p className="text-primary font-medium mt-1">{active.company}</p>
              </div>
              <div className="font-mono-meta text-xs text-muted-foreground text-right">
                <p>{active.period}</p>
                <p className="mt-0.5">{active.location}</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              {active.summary}
            </p>

            <h4 className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              Contributions
            </h4>
            <ul className="space-y-2.5 mb-6">
              {active.highlights.map((h) => (
                <li key={h} className="text-sm leading-relaxed flex gap-2.5">
                  <span className="text-primary shrink-0 mt-0.5" aria-hidden>
                    ▸
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {active.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </MovingBorder>
      </motion.div>
    </div>
  );
}
