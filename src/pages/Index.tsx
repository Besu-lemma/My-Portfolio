import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

const Index = () => {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm"
      >
        Skip to content
      </a>
      <Navigation onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <main id="main-content" role="main" aria-label="Portfolio content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
