import { useState, useEffect } from "react";
import { Menu, X, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useContent } from "@/context/ContentContext";

type Props = {
  onOpenCommand?: () => void;
};

const Navigation = ({ onOpenCommand }: Props) => {
  const { site } = useContent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const ids = site.nav.map((n) => n.href.replace("#", ""));
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [site.nav]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-semibold text-foreground tracking-tight hover:text-primary transition-colors"
          >
            <span className="font-mono-meta text-primary text-sm mr-1.5">
              {site.shortName}
            </span>
            Besufikad
          </button>

          <div className="hidden lg:flex items-center gap-0.5">
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeSection === id;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-sm transition-colors relative whitespace-nowrap ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-px bg-primary" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {onOpenCommand && (
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenCommand}
                className="hidden sm:inline-flex h-8 gap-1.5 font-mono-meta text-xs border-border"
                aria-label="Open command palette"
              >
                <Command className="h-3.5 w-3.5" />
                <span>⌘K</span>
              </Button>
            )}
            <ThemeToggle />
            <div className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-8 w-8 border-border"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background pb-3">
            <div className="pt-2 space-y-0.5">
              {site.nav.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              {onOpenCommand && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCommand();
                  }}
                  className="block w-full text-left px-3 py-2.5 text-sm text-primary font-mono-meta"
                >
                  Open command palette
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
