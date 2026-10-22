import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionShell from "@/components/effects/SectionShell";
import { useContent } from "@/context/ContentContext";

export default function Skills() {
  const { capabilities } = useContent();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="capabilities" variant="meteors" tinted>
      <div ref={ref}>
        <SectionHeader
          index="05 / Capabilities"
          title="Engineering toolkit"
          description="Balanced toolkit: languages and full-stack first, applied AI/ML grounded in CS and product work, ERP as a domain strength. No skill percentages."
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45 }}
          className="grid sm:grid-cols-2 gap-3"
        >
          {capabilities.map((group, i) => (
            <motion.div
              key={group.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.35, delay: 0.04 * i }}
              className="group relative border border-border bg-card/75 backdrop-blur-sm p-5 sm:p-6 overflow-hidden transition-colors hover:border-primary/35"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/15"
                aria-hidden
              />
              <div className="flex items-baseline gap-2 mb-4 relative">
                <span className="font-mono-meta text-[10px] text-primary tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base sm:text-lg font-semibold">
                  {group.label}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-1.5 relative">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="tech-tag transition-colors group-hover:border-primary/25 group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
