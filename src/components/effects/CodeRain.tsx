import { useReducedMotion } from "framer-motion";

const COLUMNS = [
  { left: "4%", delay: 0, duration: 14, chars: "01af{}<>/;=" },
  { left: "14%", delay: 2.2, duration: 16, chars: "const=>()[]" },
  { left: "26%", delay: 1.1, duration: 13, chars: "fn():{};#" },
  { left: "38%", delay: 3.4, duration: 17, chars: "01<>/=*" },
  { left: "52%", delay: 0.6, duration: 15, chars: "async{};" },
  { left: "64%", delay: 2.8, duration: 14, chars: "def_self." },
  { left: "76%", delay: 1.7, duration: 18, chars: "0101<>{}" },
  { left: "88%", delay: 3.9, duration: 12, chars: "npm::||&&" },
];

/** Soft falling code glyph columns — programming atmosphere */
export default function CodeRain({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden font-mono-meta ${className}`}
      aria-hidden
    >
      {COLUMNS.map((col, i) => (
        <div
          key={i}
          className={`absolute top-0 text-[10px] sm:text-[11px] leading-[1.7] tracking-widest text-primary/25 dark:text-primary/20 whitespace-pre select-none ${
            reduce ? "opacity-30" : "animate-code-fall"
          }`}
          style={{
            left: col.left,
            animationDelay: reduce ? undefined : `${col.delay}s`,
            animationDuration: reduce ? undefined : `${col.duration}s`,
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          {col.chars.repeat(8).split("").join("\n")}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
