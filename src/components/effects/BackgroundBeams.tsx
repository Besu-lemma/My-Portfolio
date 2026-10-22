import { useReducedMotion } from "framer-motion";

/** Aceternity-inspired SVG path beams — https://ui.aceternity.com/components/background-beams */
export default function BackgroundBeams({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  const paths = [
    "M-100 40C-20 80 80 -20 180 60C280 140 380 20 480 90C580 160 680 40 780 100C880 160 980 60 1100 120",
    "M-80 120C20 40 120 180 220 80C320 0 420 160 520 70C620 -10 720 150 820 90C920 30 1020 140 1120 80",
    "M-120 200C0 240 100 120 200 200C300 280 400 140 500 220C600 300 700 160 800 240C900 320 1000 180 1140 260",
    "M-60 280C40 200 140 340 240 240C340 140 440 320 540 230C640 140 740 310 840 250C940 190 1040 300 1140 220",
    "M-40 20C60 -40 160 100 260 20C360 -60 460 90 560 10C660 -70 760 80 860 20C960 -40 1060 70 1160 10",
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 320"
        preserveAspectRatio="none"
        fill="none"
      >
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="hsl(var(--primary))"
            strokeWidth={i % 2 === 0 ? 1.2 : 0.7}
            strokeOpacity={0.12 + (i % 3) * 0.04}
            strokeLinecap="round"
            className={reduce ? "" : "animate-beam-path"}
            style={
              reduce
                ? undefined
                : {
                    strokeDasharray: 800,
                    animationDelay: `${i * 0.6}s`,
                    animationDuration: `${7 + i}s`,
                  }
            }
          />
        ))}
        {!reduce &&
          paths.map((d, i) => (
            <path
              key={`glow-${i}`}
              d={d}
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              strokeOpacity={0.35}
              strokeLinecap="round"
              className="animate-beam-path"
              style={{
                strokeDasharray: "40 760",
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + i * 0.5}s`,
              }}
            />
          ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
