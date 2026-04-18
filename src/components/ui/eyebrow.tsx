import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ember-400",
        className,
      )}
    >
      <span className="h-px w-8 bg-ember-500/70" />
      {children}
    </div>
  );
}
