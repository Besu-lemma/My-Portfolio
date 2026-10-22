import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionShell from "@/components/effects/SectionShell";
import MovingBorder from "@/components/effects/MovingBorder";
import { useContent } from "@/context/ContentContext";
import pro from "@/assets/pro.png";

export default function About() {
  const { site } = useContent();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="practice" variant="aurora">
      <div ref={ref}>
        <SectionHeader
          index="02 / Practice"
          title="How I work"
          description="Software engineering first—full-stack products, business systems, and applied AI/ML curiosity—tied together by understanding the problem, then shipping maintainable code."
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          <div className="lg:col-span-5 order-1">
            <MovingBorder className="h-full rounded-sm" duration={8}>
              <figure className="h-full flex flex-col">
                <div className="relative flex-1 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] overflow-hidden bg-muted">
                  <img
                    src={pro}
                    alt="Besufikad Lemma"
                    className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <div>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {site.name}
                      </p>
                      <p className="font-mono-meta text-[10px] text-muted-foreground">
                        Addis Ababa
                      </p>
                    </div>
                    <span className="status-chip backdrop-blur-sm">verified</span>
                  </div>
                </div>
                <figcaption className="px-4 py-3 border-t border-border flex justify-between items-center bg-card">
                  <span className="font-mono-meta text-[10px] tracking-wider text-muted-foreground">
                    02 · portrait.frame
                  </span>
                  <span className="font-mono-meta text-[10px] text-primary tracking-wider">
                    SE · FS · AI
                  </span>
                </figcaption>
              </figure>
            </MovingBorder>
          </div>

          <div className="lg:col-span-7 order-2 flex flex-col justify-center">
            <div className="border border-border/80 bg-card/70 backdrop-blur-md p-6 sm:p-8 h-full flex flex-col justify-center space-y-5 shadow-[0_0_60px_-24px_hsl(var(--primary)/0.2)]">
              <p className="font-mono-meta text-[10px] uppercase tracking-widest text-primary">
                Operating model
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I work as a software engineer across the stack: React and Node.js
                products on MERN, solid API and data modeling, and shipping features
                teams can operate. ERP (Odoo / ERPNext) is a strong domain where I
                also customize modules, integrations, and reporting—not the only
                story.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a B.Sc. in Computer Science, I treat applied AI and ML as tools
                for real products—data-driven recommendations, automation, and
                smarter workflows—without overclaiming research credentials I do
                not hold.
              </p>

              <div className="pt-5 border-t border-border grid sm:grid-cols-2 gap-5">
                <div className="rounded-sm border border-border/60 bg-background/60 p-4">
                  <p className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    Education
                  </p>
                  <p className="font-display font-semibold text-foreground text-sm sm:text-base">
                    {site.education.degree}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {site.education.school} · {site.education.period}
                  </p>
                </div>
                <div className="rounded-sm border border-border/60 bg-background/60 p-4">
                  <p className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    Based in
                  </p>
                  <p className="font-display font-semibold text-foreground text-sm sm:text-base">
                    {site.location}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open to software, product, and systems work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
