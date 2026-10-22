const SNIPPETS = [
  { top: "8%", left: "6%", rotate: -6, lines: ["const build = () => {", "  return ship();", "};"] },
  { top: "18%", right: "5%", rotate: 4, lines: ["def deploy(env):", "  return true"] },
  { top: "55%", left: "3%", rotate: 3, lines: ["SELECT * FROM systems", "WHERE ready = 1;"] },
  { top: "62%", right: "4%", rotate: -5, lines: ["git commit -m", '"ship it"'] },
  { top: "38%", left: "42%", rotate: 2, lines: ["api.post('/build')", ".then(ok)"] },
];

/** Faded floating code cards — editor/snippet vibe */
export default function CodeSnippetWall({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {SNIPPETS.map((s, i) => (
        <div
          key={i}
          className="absolute max-w-[11rem] sm:max-w-[13rem] rounded-sm border border-border/60 bg-card/40 backdrop-blur-[2px] px-3 py-2 opacity-[0.35] dark:opacity-[0.28]"
          style={{
            top: s.top,
            left: "left" in s ? s.left : undefined,
            right: "right" in s ? s.right : undefined,
            transform: `rotate(${s.rotate}deg)`,
          }}
        >
          <div className="flex gap-1 mb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--companion)/0.45)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
          </div>
          <pre className="font-mono-meta text-[9px] sm:text-[10px] leading-relaxed text-muted-foreground">
            {s.lines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </pre>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/80" />
    </div>
  );
}
