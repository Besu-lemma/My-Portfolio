/** IDE-style gutter / line-number strip on the sides */
export default function EditorGutter({ className = "" }: { className?: string }) {
  const lines = Array.from({ length: 28 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12 border-r border-border/40 bg-muted/20 font-mono-meta text-[9px] text-muted-foreground/40 pt-16 pl-2 space-y-1 hidden sm:block">
        {lines.map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-12 border-l border-border/40 bg-muted/10 font-mono-meta text-[9px] text-primary/25 pt-20 pr-2 text-right space-y-1 hidden md:block">
        {lines.map((n) => (
          <div key={`r-${n}`}>{n}</div>
        ))}
      </div>
      {/* Bracket ornaments */}
      <span className="absolute top-[20%] left-[12%] font-mono-meta text-4xl sm:text-6xl text-primary/10 dark:text-primary/15 select-none">
        {"{"}
      </span>
      <span className="absolute bottom-[18%] right-[10%] font-mono-meta text-4xl sm:text-6xl text-[hsl(var(--companion)/0.12)] select-none">
        {"}"}
      </span>
      <span className="absolute top-[55%] left-[8%] font-mono-meta text-3xl text-primary/10 select-none">
        {"</>"}
      </span>
    </div>
  );
}
