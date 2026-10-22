import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SystemDiagram from "@/components/SystemDiagram";
import SectionBackground from "@/components/effects/SectionBackground";
import MovingBorder from "@/components/effects/MovingBorder";
import { useContent } from "@/context/ContentContext";

export default function Hero() {
  const { site } = useContent();
  const reduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="overview"
      className="relative min-h-[100svh] flex items-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <SectionBackground variant="hero" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none z-[1]"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 isolate">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-6"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="font-mono-meta text-xs text-primary tracking-widest mb-4">
              01 / Overview
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight">
              {site.name}
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl text-foreground/90 leading-snug max-w-xl">
              {site.headline}
            </p>
            <p className="mt-3 font-mono-meta text-xs sm:text-sm text-muted-foreground">
              {site.role}
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              {site.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-sm"
                onClick={() => scrollTo("work")}
              >
                Explore work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-sm border-border"
                onClick={() => scrollTo("experience")}
              >
                Experience
              </Button>
              <Button size="lg" variant="ghost" className="rounded-sm" asChild>
                <a href={site.cvUrl} download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  CV
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <span className="ml-2 font-mono-meta text-[10px] text-muted-foreground hidden sm:inline">
                {site.location}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <MovingBorder duration={10} className="rounded-sm">
              <SystemDiagram />
            </MovingBorder>
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => scrollTo("practice")}
          className="mt-14 mx-auto flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to practice section"
        >
          <span className="font-mono-meta text-[10px] uppercase tracking-widest">
            Continue
          </span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
