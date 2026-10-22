import { useReducedMotion } from "framer-motion";

const sparks = [
  { top: "12%", left: "8%", size: 2, delay: 0 },
  { top: "22%", left: "78%", size: 3, delay: 0.4 },
  { top: "38%", left: "18%", size: 2, delay: 1.1 },
  { top: "48%", left: "88%", size: 2, delay: 0.7 },
  { top: "62%", left: "42%", size: 3, delay: 1.6 },
  { top: "72%", left: "68%", size: 2, delay: 0.2 },
  { top: "18%", left: "52%", size: 2, delay: 1.9 },
  { top: "84%", left: "28%", size: 2, delay: 1.3 },
];

/** Soft sparkle field — Aceternity-inspired ambient particles */
export default function Sparkles({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary animate-sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${2.4 + (i % 3) * 0.6}s`,
            boxShadow: "0 0 8px hsl(var(--primary) / 0.6)",
          }}
        />
      ))}
    </div>
  );
}
