import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionShell from "@/components/effects/SectionShell";
import Timeline from "@/components/Timeline";
import { useContent } from "@/context/ContentContext";

export default function Experience() {
  const { experience } = useContent();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="experience" variant="grid" tinted>
      <div ref={ref}>
        <SectionHeader
          index="03 / Experience"
          title="Professional journey"
          description="Full-stack product work and software engineering roles first—plus ERP systems delivery where that is the business problem."
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45 }}
        >
          <Timeline items={experience} />
        </motion.div>
      </div>
    </SectionShell>
  );
}
