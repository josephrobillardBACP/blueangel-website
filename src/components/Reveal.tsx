import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Subtle entrance fade + rise, driven by a pure CSS keyframe (`animate-fade-up`,
 * defined in tailwind.config.ts with `both` fill so delayed items stay hidden
 * until they play).
 *
 * We use CSS rather than a JS/observer animation on purpose: a CSS animation
 * runs every time the element mounts — on first load AND on client-side route
 * changes — so navigated pages can never get stuck invisible. (An earlier
 * framer-motion `whileInView`/`animate` version left freshly routed pages at
 * opacity:0 until a manual refresh.)
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <div
      className={`animate-fade-up ${className ?? ""}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
