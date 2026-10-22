import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AreaField, Field, TextField } from "@/components/admin/Field";
import StringListField from "@/components/admin/StringListField";
import { useContent } from "@/context/ContentContext";
import { newId } from "@/lib/content-storage";
import type { ExperienceItem } from "@/types/content";

const emptyItem = (): ExperienceItem => ({
  id: newId("exp"),
  title: "",
  company: "",
  location: "",
  period: "",
  status: "past",
  summary: "",
  highlights: [],
  technologies: [],
});

export default function AdminExperience() {
  const { experience, setExperience } = useContent();
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  const update = (id: string, patch: Partial<ExperienceItem>) => {
    setExperience(
      experience.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );
  };

  const move = (index: number, dir: -1 | 1) => {
    const next = [...experience];
    const j = index + dir;
    if (j < 0 || j >= next.length) return;
    [next[index], next[j]] = [next[j], next[index]];
    setExperience(next);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Experience</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Roles shown on the Experience timeline.
          </p>
        </div>
        <Button
          type="button"
          onClick={() => {
            const item = emptyItem();
            setExperience([item, ...experience]);
            setOpenId(item.id);
            toast.success("Role added");
          }}
        >
          <Plus className="h-4 w-4" />
          Add role
        </Button>
      </div>

      <div className="space-y-3">
        {experience.map((item, index) => {
          const open = openId === item.id;
          return (
            <div key={item.id} className="border border-border bg-card/60">
              <div className="flex items-center gap-2 p-3 border-b border-border">
                <button
                  type="button"
                  className="flex-1 text-left min-w-0"
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <p className="font-display font-semibold truncate">
                    {item.title || "Untitled role"}
                  </p>
                  <p className="font-mono-meta text-[10px] text-muted-foreground tracking-wider truncate">
                    {item.company || "Company"} · {item.period || "Period"}
                  </p>
                </button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => move(index, 1)}
                  disabled={index === experience.length - 1}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    if (!window.confirm("Delete this role?")) return;
                    setExperience(experience.filter((e) => e.id !== item.id));
                    toast.success("Role deleted");
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
                    onChange={(v) => update(item.id, { title: v })}
                  />
                  <TextField
                    label="Company"
                    value={item.company}
                    onChange={(v) => update(item.id, { company: v })}
                  />
                  <TextField
                    label="Location"
                    value={item.location}
                    onChange={(v) => update(item.id, { location: v })}
                  />
                  <TextField
                    label="Period"
                    value={item.period}
                    onChange={(v) => update(item.id, { period: v })}
                  />
                  <Field label="Status">
                    <Select
                      value={item.status}
                      onValueChange={(v: "current" | "past") =>
                        update(item.id, { status: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Current</SelectItem>
                        <SelectItem value="past">Past</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <TextField
                    label="Id (slug)"
                    value={item.id}
                    onChange={(v) => update(item.id, { id: v || item.id })}
                  />
                  <div className="sm:col-span-2">
                    <AreaField
                      label="Summary"
                      value={item.summary}
                      onChange={(v) => update(item.id, { summary: v })}
                      rows={3}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <StringListField
                      label="Highlights"
                      values={item.highlights}
                      onChange={(highlights) => update(item.id, { highlights })}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <StringListField
                      label="Technologies"
                      values={item.technologies}
                      onChange={(technologies) =>
                        update(item.id, { technologies })
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
