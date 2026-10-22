import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ReactNode } from "react";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="font-mono-meta text-[10px] tracking-wider uppercase text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}

export function TextField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <Field label={label}>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-mono text-sm"
      />
    </Field>
  );
}

export function AreaField({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <Field label={label}>
      <Textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="font-mono text-sm"
      />
    </Field>
  );
}
