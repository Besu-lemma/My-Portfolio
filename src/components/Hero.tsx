import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated background elements */}
      <div className="absolute inset-0 animated-bg opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Hi, I'm</span>
            <span className="block gradient-text animate-pulse-glow">
              Besufikad Lemma
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            MERN Stack Developer
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building scalable and modern web applications with React, Node.js,
            and cutting-edge technologies. Passionate about creating exceptional
            user experiences and robust backend solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/Besufikad Lemma_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="glass glow-primary hover:glow-accent transition-all duration-300 hover-lift group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="glass border-white/20\ hover:bg-white/10 gradient-text animate-pulse-glow hover-lift"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-16 w-6 h-6 bg-accent rounded-full animate-float animation-delay-1000 opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary-glow rounded-full animate-float animation-delay-2000 opacity-50" />
    </section>
  );
};

export default Hero;
