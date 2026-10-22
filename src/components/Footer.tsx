import { site } from "@/data/site";
import SectionBackground from "@/components/effects/SectionBackground";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-10 px-4 sm:px-6 overflow-hidden">
      <SectionBackground variant="dots" />
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-display font-semibold text-sm">
            <span className="font-mono-meta text-primary mr-1.5">{site.shortName}</span>
            {site.name}
          </p>
          <p className="font-mono-meta text-[10px] text-muted-foreground mt-1 tracking-wider">
            Software · Full-stack · ERP · Applied AI & ML
          </p>
          <nav className="mt-3 flex flex-wrap gap-3" aria-label="Identity profiles">
            <a
              href={site.links.linkedin}
              rel="me noopener noreferrer"
              target="_blank"
              className="font-mono-meta text-[10px] text-muted-foreground hover:text-primary tracking-wider"
            >
              LinkedIn
            </a>
            <a
              href={site.links.github}
              rel="me noopener noreferrer"
              target="_blank"
              className="font-mono-meta text-[10px] text-muted-foreground hover:text-primary tracking-wider"
            >
              GitHub
            </a>
            <a
              href={site.links.twitter}
              rel="me noopener noreferrer"
              target="_blank"
              className="font-mono-meta text-[10px] text-muted-foreground hover:text-primary tracking-wider"
            >
              X / Twitter
            </a>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground">
          © {currentYear} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
