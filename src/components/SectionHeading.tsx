import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string | ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  accentBar?: boolean;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  accentBar = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {accentBar && (
        <div className="w-12 h-1 bg-cf-orange mb-4" />
      )}
      {subtitle && (
        <span className="text-cf-orange font-display text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-3 block">
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold uppercase leading-[1.1] tracking-tight",
          "text-3xl md:text-4xl lg:text-5xl",
          "text-white",
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
}
