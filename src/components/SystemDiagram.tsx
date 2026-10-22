import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { id: "prob", label: "Problems", sub: "Requirements", x: 4, y: 48 },
  { id: "stack", label: "Full-Stack", sub: "MERN · APIs", x: 36, y: 22 },
  { id: "sys", label: "Systems", sub: "ERP · Data", x: 36, y: 72 },
  { id: "apps", label: "Products", sub: "Apps · AI-aware", x: 68, y: 48 },
];

const edges = [
  { from: "prob", to: "stack" },
  { from: "prob", to: "sys" },
  { from: "stack", to: "apps" },
  { from: "sys", to: "apps" },
];

function nodePos(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function SystemDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative w-full aspect-[4/3] sm:aspect-[16/11] border border-border bg-card overflow-hidden"
      role="img"
      aria-label="System topology: problems flow into full-stack engineering and business systems, then into digital products"
    >
      <div className="absolute inset-0 ledger-grid opacity-60" aria-hidden />
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
        <span className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground">
          {"// system.topology"}
        </span>
        <span className="status-chip">compiled</span>
      </div>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {edges.map((edge) => {
          const a = nodePos(edge.from);
          const b = nodePos(edge.to);
          return (
            <motion.line
              key={`${edge.from}-${edge.to}`}
              x1={a.x + 10}
              y1={a.y + 6}
              x2={b.x}
              y2={b.y + 6}
              stroke="hsl(var(--primary))"
              strokeWidth="0.35"
              strokeOpacity="0.45"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.45 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          );
        })}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute w-[26%] sm:w-[22%] border border-border bg-background/95 backdrop-blur-sm px-2 py-2 sm:px-3 sm:py-2.5"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translateY(-50%)",
          }}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 * i }}
        >
          <p className="font-mono-meta text-[9px] sm:text-[10px] text-primary tracking-wider mb-0.5">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="font-display text-xs sm:text-sm font-semibold text-foreground leading-tight">
            {node.label}
          </p>
          <p className="font-mono-meta text-[9px] sm:text-[10px] text-muted-foreground mt-0.5 truncate">
            {node.sub}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
