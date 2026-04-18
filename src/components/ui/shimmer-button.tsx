"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  shimmerColor?: string;
  borderColor?: string;
  background?: string;
};

const ShimmerButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      shimmerColor = "rgba(255, 255, 255, 0.45)",
      borderColor = "rgba(255, 112, 51, 0.9)",
      background = "linear-gradient(120deg, #ff7033 0%, #ff4d0d 55%, #f03400 100%)",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-3.5",
          "text-sm font-semibold uppercase tracking-wider text-ink-950",
          "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
          "shadow-ember disabled:opacity-60 disabled:pointer-events-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
          className,
        )}
        style={{ background, borderColor, borderWidth: 1 }}
        {...props}
      >
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 transition-transform duration-1000 group-hover:translate-x-full"
          style={{ background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)` }}
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  },
);
ShimmerButton.displayName = "ShimmerButton";
export default ShimmerButton;
