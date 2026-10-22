import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/admin/Field";
import StringListField from "@/components/admin/StringListField";
import { useContent } from "@/context/ContentContext";
import { newId } from "@/lib/content-storage";
import type { CapabilityGroup } from "@/types/content";

const emptyGroup = (): CapabilityGroup => ({
  id: newId("cap"),
  label: "",
  items: [],
});

export default function AdminCapabilities() {
  const { capabilities, setCapabilities } = useContent();
  const [openId, setOpenId] = useState<string | null>(
    capabilities[0]?.id ?? null
  );

  const update = (id: string, patch: Partial<CapabilityGroup>) => {
    setCapabilities(
      capabilities.map((g) => (g.id === id ? { ...g, ...patch } : g))
    );
  };

  const move = (index: number, dir: -1 | 1) => {
    const next = [...capabilities];
    const j = index + dir;
    if (j < 0 || j >= next.length) return;
    [next[index], next[j]] = [next[j], next[index]];
    setCapabilities(next);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Capabilities</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Skill groups on the Capabilities section.
          </p>
        </div>
        <Button
          type="button"
          onClick={() => {
            const item = emptyGroup();
            setCapabilities([item, ...capabilities]);
            setOpenId(item.id);
            toast.success("Group added");
          }}
        >
          <Plus className="h-4 w-4" />
          Add group
        </Button>
      </div>

      <div className="space-y-3">
        {capabilities.map((item, index) => {
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
                    {item.label || "Untitled group"}
                  </p>
                  <p className="font-mono-meta text-[10px] text-muted-foreground tracking-wider">
                    {item.items.length} items
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
                  disabled={index === capabilities.length - 1}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    if (!window.confirm("Delete this group?")) return;
                    setCapabilities(capabilities.filter((g) => g.id !== item.id));
                    toast.success("Deleted");
                  }}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
              {open && (
                <div className="p-4 grid gap-4">
                  <TextField
                    label="Label"
                    value={item.label}
                    onChange={(v) => update(item.id, { label: v })}
                  />
                  <TextField
                    label="Id"
                    value={item.id}
                    onChange={(v) => update(item.id, { id: v || item.id })}
                  />
                  <StringListField
                    label="Items"
                    values={item.items}
                    onChange={(items) => update(item.id, { items })}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
