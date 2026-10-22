import type { ReactNode } from "react";
import SectionBackground from "@/components/effects/SectionBackground";

type Variant =
  | "dots"
  | "grid"
  | "aurora"
  | "spotlight"
  | "beams"
  | "noise"
  | "meteors"
  | "hero";

type Props = {
  id: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  tinted?: boolean;
};

/** Consistent section wrapper: relative layout + Aceternity-style background. */
export default function SectionShell({
  id,
  variant = "dots",
  children,
  className = "",
  tinted = false,
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 px-4 sm:px-6 ledger-rule overflow-hidden ${className}`}
    >
      <SectionBackground variant={variant} />
      {tinted && (
        <div
          className="absolute inset-0 bg-muted/20 dark:bg-muted/10 pointer-events-none"
          aria-hidden
        />
      )}
      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
