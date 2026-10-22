import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

type Props = {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
};

export default function StringListField({
  label,
  values,
  onChange,
  placeholder = "Add item…",
}: Props) {
  return (
    <div className="space-y-2">
      <Label className="font-mono-meta text-[10px] tracking-wider uppercase text-muted-foreground">
        {label}
      </Label>
      <div className="space-y-2">
        {values.map((value, i) => (
          <div key={i} className="flex gap-2">
            <Input
              value={value}
              onChange={(e) => {
                const next = [...values];
                next[i] = e.target.value;
                onChange(next);
              }}
              className="font-mono text-sm"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => onChange(values.filter((_, j) => j !== i))}
              aria-label={`Remove ${label} item`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => onChange([...values, ""])}
        >
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>
      {values.length === 0 && (
        <p className="text-xs text-muted-foreground">{placeholder}</p>
      )}
    </div>
  );
}
