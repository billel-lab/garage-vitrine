"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const GhostButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-xl border border-ink-600 bg-ink-900/40 backdrop-blur px-6 py-3.5",
          "text-sm font-semibold uppercase tracking-wider text-ink-50",
          "transition-colors duration-200 hover:bg-ink-800/70 hover:border-ember-500/60 hover:text-ember-300",
          "active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
GhostButton.displayName = "GhostButton";
export default GhostButton;
