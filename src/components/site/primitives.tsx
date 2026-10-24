import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const img = (id: string) => `https://framerusercontent.com/images/${id}.webp?scale-down-to=1024`;
export const EASE = [0.22, 1, 0.36, 1] as const;

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("eyebrow flex items-center gap-3 text-muted-foreground", className)}>
      <span className="h-px w-6 bg-brass" />
      {children}
    </div>
  );
}

export function Pill({
  href,
  children,
  variant = "brass",
}: {
  href: string;
  children: ReactNode;
  variant?: "brass" | "ghost-dark" | "ghost-light" | "ink";
}) {
  const styles = {
    brass: "bg-brass text-night shadow-brass hover:bg-bone",
    "ghost-dark": "border border-bone/25 text-bone hover:bg-bone hover:text-night",
    "ghost-light": "border border-ink/20 text-ink hover:bg-ink hover:text-bone",
    ink: "bg-ink text-bone hover:bg-brass hover:text-night",
  }[variant];
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex h-11 sm:h-[55px] items-center gap-2 sm:gap-3 rounded-full px-5 sm:px-7 text-[13px] sm:text-[14px] font-medium transition-colors duration-300",
        styles,
      )}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 [transition-timing-function:var(--ease-out)] group-hover:translate-y-0">
          {children}
        </span>
      </span>
      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
    </a>
  );
}

export function Reveal({ children, delay = 0, className, y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Headline that reveals word by word; words wrapped in *x* render as italic serif accent. */
export function SplitHeading({ text, className, accent = "text-brass" }: { text: string; className?: string; accent?: string }) {
  const words = text.split(" ");
  return (
    <h2 className={cn("font-display font-medium tracking-[-0.04em]", className)}>
      {words.map((w, i) => {
        const isAcc = w.startsWith("*");
        const clean = w.replace(/\*/g, "");
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className={cn("inline-block", isAcc && cn("serif-i pr-[0.06em]", accent))}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, delay: i * 0.06, ease: EASE }}
            >
              {clean}
            </motion.span>
            {i < words.length - 1 && "\u00a0"}
          </span>
        );
      })}
    </h2>
  );
}

export function Counter({
  to,
  decimals = 0,
  className,
  duration = 2,
}: {
  to: number;
  decimals?: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Use zero margin and small threshold so on mobile it starts as soon as it enters viewport
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setVal(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}
