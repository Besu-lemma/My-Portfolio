import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaField, TextField } from "@/components/admin/Field";
import StringListField from "@/components/admin/StringListField";
import { useContent } from "@/context/ContentContext";
import { newId } from "@/lib/content-storage";
import type { CaseStudy, SelectedBuild } from "@/types/content";

const emptyCase = (): CaseStudy => ({
  id: newId("case"),
  index: "00",
  title: "",
  subtitle: "",
  domain: "",
  role: "",
  problem: "",
  approach: "",
  capabilities: [],
  technologies: [],
  challenges: [],
  outcomes: [],
  confidential: false,
});

const emptyBuild = (): SelectedBuild => ({
  id: newId("build"),
  title: "",
  description: "",
  image: "",
  images: [],
  technologies: [],
  liveUrl: "",
  githubUrl: "",
  isMobileApp: false,
});

export default function AdminProjects() {
  const {
    caseStudies,
    setCaseStudies,
    selectedBuilds,
    setSelectedBuilds,
  } = useContent();
  const [openCase, setOpenCase] = useState<string | null>(
    caseStudies[0]?.id ?? null
  );
  const [openBuild, setOpenBuild] = useState<string | null>(
    selectedBuilds[0]?.id ?? null
  );

  const updateCase = (id: string, patch: Partial<CaseStudy>) => {
    setCaseStudies(
      caseStudies.map((c) => (c.id === id ? { ...c, ...patch } : c))
    );
  };

  const updateBuild = (id: string, patch: Partial<SelectedBuild>) => {
    setSelectedBuilds(
      selectedBuilds.map((b) => (b.id === id ? { ...b, ...patch } : b))
    );
  };

  const moveList = <T,>(list: T[], index: number, dir: -1 | 1) => {
    const next = [...list];
    const j = index + dir;
    if (j < 0 || j >= next.length) return list;
    [next[index], next[j]] = [next[j], next[index]];
    return next;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">Projects</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Case studies and selected public builds.
        </p>
      </div>

      <Tabs defaultValue="cases">
        <TabsList>
          <TabsTrigger value="cases">Case studies</TabsTrigger>
          <TabsTrigger value="builds">Selected builds</TabsTrigger>
        </TabsList>

        <TabsContent value="cases" className="space-y-3 mt-4">
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() => {
                const item = emptyCase();
                item.index = String(caseStudies.length + 1).padStart(2, "0");
                setCaseStudies([item, ...caseStudies]);
                setOpenCase(item.id);
                toast.success("Case study added");
              }}
            >
              <Plus className="h-4 w-4" />
              Add case study
            </Button>
          </div>
          {caseStudies.map((item, index) => {
            const open = openCase === item.id;
            return (
              <div key={item.id} className="border border-border bg-card/60">
                <div className="flex items-center gap-2 p-3 border-b border-border">
                  <button
                    type="button"
                    className="flex-1 text-left min-w-0"
                    onClick={() => setOpenCase(open ? null : item.id)}
                  >
                    <p className="font-display font-semibold truncate">
                      {item.index} · {item.title || "Untitled"}
                    </p>
                    <p className="font-mono-meta text-[10px] text-muted-foreground tracking-wider truncate">
                      {item.domain || "Domain"}
                    </p>
                  </button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setCaseStudies(moveList(caseStudies, index, -1))
                    }
                    disabled={index === 0}
                  >
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setCaseStudies(moveList(caseStudies, index, 1))
                    }
                    disabled={index === caseStudies.length - 1}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (!window.confirm("Delete this case study?")) return;
                      setCaseStudies(caseStudies.filter((c) => c.id !== item.id));
                      toast.success("Deleted");
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                {open && (
                  <div className="p-4 grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="Index"
                      value={item.index}
                      onChange={(v) => updateCase(item.id, { index: v })}
                    />
                    <TextField
                      label="Id"
                      value={item.id}
                      onChange={(v) => updateCase(item.id, { id: v || item.id })}
                    />
                    <TextField
                      label="Title"
                      value={item.title}
                      onChange={(v) => updateCase(item.id, { title: v })}
                    />
                    <TextField
                      label="Subtitle"
                      value={item.subtitle}
                      onChange={(v) => updateCase(item.id, { subtitle: v })}
                    />
                    <TextField
                      label="Domain"
                      value={item.domain}
                      onChange={(v) => updateCase(item.id, { domain: v })}
                    />
                    <TextField
                      label="Role"
                      value={item.role}
                      onChange={(v) => updateCase(item.id, { role: v })}
                    />
                    <div className="sm:col-span-2">
                      <AreaField
                        label="Problem"
                        value={item.problem}
                        onChange={(v) => updateCase(item.id, { problem: v })}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <AreaField
                        label="Approach"
                        value={item.approach}
                        onChange={(v) => updateCase(item.id, { approach: v })}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <StringListField
                        label="Capabilities"
                        values={item.capabilities}
                        onChange={(capabilities) =>
                          updateCase(item.id, { capabilities })
                        }
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <StringListField
                        label="Technologies"
                        values={item.technologies}
                        onChange={(technologies) =>
                          updateCase(item.id, { technologies })
                        }
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <StringListField
                        label="Challenges"
                        values={item.challenges ?? []}
                        onChange={(challenges) =>
                          updateCase(item.id, { challenges })
                        }
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <StringListField
                        label="Outcomes"
                        values={item.outcomes ?? []}
                        onChange={(outcomes) =>
                          updateCase(item.id, { outcomes })
                        }
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`conf-${item.id}`}
                        checked={!!item.confidential}
                        onCheckedChange={(v) =>
                          updateCase(item.id, { confidential: !!v })
                        }
                      />
                      <Label htmlFor={`conf-${item.id}`}>Confidential</Label>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </TabsContent>

        <TabsContent value="builds" className="space-y-3 mt-4">
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() => {
                const item = emptyBuild();
                setSelectedBuilds([item, ...selectedBuilds]);
                setOpenBuild(item.id);
                toast.success("Build added");
              }}
            >
              <Plus className="h-4 w-4" />
              Add build
            </Button>
          </div>
          {selectedBuilds.map((item, index) => {
            const open = openBuild === item.id;
            return (
              <div key={item.id} className="border border-border bg-card/60">
                <div className="flex items-center gap-2 p-3 border-b border-border">
                  <button
                    type="button"
                    className="flex-1 text-left min-w-0"
                    onClick={() => setOpenBuild(open ? null : item.id)}
                  >
                    <p className="font-display font-semibold truncate">
                      {item.title || "Untitled build"}
                    </p>
                    <p className="font-mono-meta text-[10px] text-muted-foreground tracking-wider truncate">
                      {item.technologies.join(" · ") || "No stack yet"}
                    </p>
                  </button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setSelectedBuilds(moveList(selectedBuilds, index, -1))
                    }
                    disabled={index === 0}
                  >
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setSelectedBuilds(moveList(selectedBuilds, index, 1))
                    }
                    disabled={index === selectedBuilds.length - 1}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (!window.confirm("Delete this build?")) return;
                      setSelectedBuilds(
                        selectedBuilds.filter((b) => b.id !== item.id)
                      );
                      toast.success("Deleted");
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                {open && (
                  <div className="p-4 grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="Title"
                      value={item.title}
                      onChange={(v) => updateBuild(item.id, { title: v })}
                    />
                    <TextField
                      label="Id"
                      value={item.id}
                      onChange={(v) =>
                        updateBuild(item.id, { id: v || item.id })
                      }
                    />
                    <div className="sm:col-span-2">
                      <AreaField
                        label="Description"
                        value={item.description}
                        onChange={(v) =>
                          updateBuild(item.id, { description: v })
                        }
                      />
                    </div>
                    <TextField
                      label="Cover image URL / path"
                      value={item.image}
                      onChange={(v) => updateBuild(item.id, { image: v })}
                    />
                    <TextField
                      label="Live URL"
                      value={item.liveUrl ?? ""}
                      onChange={(v) => updateBuild(item.id, { liveUrl: v })}
                    />
                    <TextField
                      label="GitHub URL"
                      value={item.githubUrl ?? ""}
                      onChange={(v) => updateBuild(item.id, { githubUrl: v })}
                    />
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`mobile-${item.id}`}
                        checked={!!item.isMobileApp}
                        onCheckedChange={(v) =>
                          updateBuild(item.id, { isMobileApp: !!v })
                        }
                      />
                      <Label htmlFor={`mobile-${item.id}`}>Mobile app gallery</Label>
                    </div>
                    <div className="sm:col-span-2">
                      <StringListField
                        label="Gallery image URLs"
                        values={item.images ?? []}
                        onChange={(images) => updateBuild(item.id, { images })}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <StringListField
                        label="Technologies"
                        values={item.technologies}
                        onChange={(technologies) =>
                          updateBuild(item.id, { technologies })
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}
