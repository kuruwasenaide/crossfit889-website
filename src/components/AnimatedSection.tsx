"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "fade-down" | "scale-in" | "fade-in";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animationStyles: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "translate-y-12 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  "fade-down": {
    hidden: "-translate-y-12 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  "fade-left": {
    hidden: "-translate-x-12 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  "fade-right": {
    hidden: "translate-x-12 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  "scale-in": {
    hidden: "scale-95 opacity-0",
    visible: "scale-100 opacity-100",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all will-change-transform",
        isVisible ? styles.visible : styles.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
