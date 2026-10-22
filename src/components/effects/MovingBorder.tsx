import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Border duration in seconds */
  duration?: number;
};

/** Aceternity-style rotating gradient border frame */
export default function MovingBorder({
  children,
  className = "",
  duration = 6,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative p-[1px] overflow-hidden ${className}`}>
      <div
        className={`absolute inset-[-100%] ${reduce ? "opacity-40" : "animate-border-spin"}`}
        style={
          reduce
            ? {
                background:
                  "conic-gradient(from 0deg, transparent 35%, hsl(var(--primary)) 48%, hsl(var(--companion)) 55%, transparent 65%)",
              }
            : {
                background:
                  "conic-gradient(from 0deg, transparent 30%, hsl(var(--primary)) 45%, hsl(var(--companion)) 52%, hsl(var(--primary) / 0.45) 58%, transparent 70%)",
                animationDuration: `${duration}s`,
              }
        }
        aria-hidden
      />
      <div className="relative z-10 h-full bg-card">{children}</div>
    </div>
  );
}
