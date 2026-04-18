"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  className?: string;
  duration?: string;
  gap?: string;
};

export default function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  repeat = 2,
  className,
  duration = "60s",
  gap = "1.5rem",
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
      style={{
        ["--duration" as string]: duration,
        ["--gap" as string]: gap,
      }}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center justify-around gap-[var(--gap)] px-[var(--gap)]",
            vertical ? "flex-col animate-marquee-vertical" : "flex-row",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          aria-hidden={i > 0}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
