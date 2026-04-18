"use client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
};

export default function BorderBeam({
  className,
  size = 220,
  duration = 8,
  delay = 0,
  colorFrom = "#ff7033",
  colorTo = "#ff4d0d",
}: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "[border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box]",
        "![mask-composite:intersect]",
        "[mask:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        className,
      )}
      style={{
        ["--border-width" as string]: "1.5",
      }}
    >
      <div
        className="absolute aspect-square"
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          animation: `border-beam ${duration}s linear infinite`,
          animationDelay: `${-delay}s`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          offsetRotate: "0deg",
        }}
      />
    </div>
  );
}
