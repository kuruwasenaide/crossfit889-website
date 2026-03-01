"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export default function CTAButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  icon,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group";

  const variantStyles = {
    primary:
      "bg-cf-orange text-white hover:bg-cf-orange-light active:bg-cf-orange-dark",
    secondary:
      "bg-white text-cf-dark hover:bg-gray-100 active:bg-gray-200",
    outline:
      "bg-transparent border-1 border-white text-white hover:bg-white hover:text-cf-dark",
  };

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-base",
  };

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {icon}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {icon}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
