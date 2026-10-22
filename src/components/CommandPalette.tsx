import { useEffect, useCallback } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { site } from "@/data/site";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Navigation,
} from "lucide-react";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CommandPalette({ open, onOpenChange }: Props) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  const run = useCallback(
    (fn: () => void) => {
      onOpenChange(false);
      // Allow dialog close animation before scroll/navigation
      window.setTimeout(fn, 50);
    },
    [onOpenChange]
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Jump to section, open CV, or contact…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {site.nav.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() =>
                run(() => scrollToId(item.href.replace("#", "")))
              }
            >
              <Navigation className="mr-2 h-4 w-4" />
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              run(() => {
                window.open(site.cvUrl, "_blank", "noopener,noreferrer");
              })
            }
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </CommandItem>
          <CommandItem
            onSelect={() =>
              run(() => {
                window.location.href = `mailto:${site.email}`;
              })
            }
          >
            <Mail className="mr-2 h-4 w-4" />
            Email {site.email}
          </CommandItem>
          <CommandItem
            onSelect={() =>
              run(() => {
                window.open(site.links.linkedin, "_blank", "noopener,noreferrer");
              })
            }
          >
            <Linkedin className="mr-2 h-4 w-4" />
            Open LinkedIn
          </CommandItem>
          <CommandItem
            onSelect={() =>
              run(() => {
                window.open(site.links.github, "_blank", "noopener,noreferrer");
              })
            }
          >
            <Github className="mr-2 h-4 w-4" />
            Open GitHub
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
