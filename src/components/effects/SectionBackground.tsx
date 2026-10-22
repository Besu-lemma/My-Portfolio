import { useReducedMotion } from "framer-motion";
import CodeRain from "@/components/effects/CodeRain";
import CodeSnippetWall from "@/components/effects/CodeSnippetWall";
import EditorGutter from "@/components/effects/EditorGutter";
import BackgroundBeams from "@/components/effects/BackgroundBeams";
import Sparkles from "@/components/effects/Sparkles";

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
  variant?: Variant;
  className?: string;
};

/** Programming-themed atmospheres: code rain, snippets, editor gutters */
export default function SectionBackground({
  variant = "dots",
  className = "",
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {variant === "hero" && (
        <>
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage:
                "radial-gradient(ellipse 75% 60% at 50% 40%, black 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 60% at 50% 40%, black 20%, transparent 75%)",
            }}
          />
          <CodeRain />
          <CodeSnippetWall />
          <div
            className="absolute -top-28 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--primary) / 0.16), transparent 68%)",
            }}
          />
          <Sparkles />
        </>
      )}

      {variant === "dots" && (
        <>
          <div
            className="absolute inset-0 opacity-[0.4] dark:opacity-[0.28] font-mono-meta text-[10px] leading-6 text-muted-foreground/30 whitespace-pre overflow-hidden p-6"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 15%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 15%, transparent 75%)",
            }}
          >
            {`01001100 01101111 01100111\n01101001 01100011 00100000\n01100010 01110101 01101001\n01101100 01100100 00101110\n`.repeat(12)}
          </div>
          <span className="absolute top-1/4 right-[15%] font-mono-meta text-5xl text-primary/10">
            {"{}"}
          </span>
        </>
      )}

      {variant === "grid" && (
        <>
          <EditorGutter />
          <div
            className="absolute inset-0 opacity-50 dark:opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: "48px 28px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 0%, black 10%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 0%, black 10%, transparent 70%)",
            }}
          />
          <div className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        </>
      )}

      {variant === "aurora" && (
        <>
          <CodeSnippetWall />
          <div
            className={`absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/14 blur-3xl ${
              reduce ? "" : "animate-aurora-drift"
            }`}
          />
          <div
            className={`absolute top-1/3 -right-20 h-[22rem] w-[22rem] rounded-full bg-[hsl(var(--companion)/0.12)] blur-3xl ${
              reduce ? "" : "animate-aurora-drift-delayed"
            }`}
          />
          <span className="absolute bottom-[22%] left-[18%] font-mono-meta text-6xl text-primary/10">
            {"</>"}
          </span>
        </>
      )}

      {variant === "spotlight" && (
        <>
          <CodeRain />
          <div
            className="absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--primary) / 0.18), transparent 65%)",
            }}
          />
        </>
      )}

      {variant === "beams" && (
        <>
          <EditorGutter />
          <BackgroundBeams />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 font-mono-meta text-[10px] tracking-[0.35em] uppercase text-primary/20">
            {"// engineering.case_studies"}
          </div>
          {!reduce && (
            <div className="absolute inset-y-0 left-[30%] w-px overflow-hidden">
              <div className="h-24 w-full animate-beam-fall bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />
            </div>
          )}
        </>
      )}

      {variant === "noise" && (
        <>
          <CodeSnippetWall />
          <div className="absolute inset-0 font-mono-meta text-[10px] leading-5 text-muted-foreground/20 p-8 overflow-hidden">
            {Array.from({ length: 40 }, (_, i) => (
              <div key={i}>
                {`${String(i + 10).padStart(2, "0")}  import { Module } from './stack';`}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
          <div className="absolute left-1/2 top-0 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
        </>
      )}

      {variant === "meteors" && (
        <>
          <CodeRain />
          <div className="absolute top-[25%] right-[12%] font-mono-meta text-xs text-primary/25 tracking-wider">
            pip · npm · git · docker
          </div>
          <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          {!reduce &&
            [18, 34, 55, 72].map((left, i) => (
              <span
                key={left}
                className="absolute top-0 font-mono-meta text-[10px] text-primary/40 animate-meteor"
                style={{
                  left: `${left}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${3.5 + i * 0.4}s`,
                }}
              >
                {"=>"}
              </span>
            ))}
        </>
      )}
    </div>
  );
}
