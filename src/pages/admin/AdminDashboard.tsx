import { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useContent } from "@/context/ContentContext";

export default function AdminDashboard() {
  const {
    content,
    experience,
    caseStudies,
    selectedBuilds,
    capabilities,
    exportJson,
    importJson,
    resetToDefaults,
  } = useContent();
  const fileRef = useRef<HTMLInputElement>(null);

  const cards = [
    { label: "Experience roles", count: experience.length, to: "/admin/experience" },
    { label: "Case studies", count: caseStudies.length, to: "/admin/projects" },
    { label: "Selected builds", count: selectedBuilds.length, to: "/admin/projects" },
    { label: "Capability groups", count: capabilities.length, to: "/admin/capabilities" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">Overview</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Edit portfolio content here. Public pages read from the same store.
        </p>
        <p className="font-mono-meta text-[10px] text-muted-foreground mt-2 tracking-wider">
          Last saved · {new Date(content.updatedAt).toLocaleString()}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {cards.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            className="border border-border bg-card/70 p-5 hover:border-primary/40 transition-colors"
          >
            <p className="font-mono-meta text-[10px] text-primary tracking-wider">
              {String(c.count).padStart(2, "0")}
            </p>
            <p className="font-display font-semibold mt-1">{c.label}</p>
          </Link>
        ))}
      </div>

      <div className="border border-border bg-card/50 p-5 space-y-4">
        <h2 className="font-display font-semibold">Backup & restore</h2>
        <p className="text-sm text-muted-foreground">
          Content lives in this browser&apos;s localStorage. Export JSON before
          clearing data, or import a previous export on another device.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={() => exportJson()}>
            Export JSON
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => fileRef.current?.click()}
          >
            Import JSON
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={() => {
              if (
                window.confirm(
                  "Reset all content to the code defaults? This cannot be undone."
                )
              ) {
                resetToDefaults();
                toast.success("Reset to defaults");
              }
            }}
          >
            Reset to defaults
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              if (!file) return;
              try {
                await importJson(file);
                toast.success("Content imported");
              } catch {
                toast.error("Invalid JSON file");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
