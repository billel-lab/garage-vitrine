"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export default function AuroraText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(120deg, #ff7033 0%, #ff4d0d 45%, #ffb088 75%, #ff4d0d 100%)",
        backgroundSize: "200% 200%",
        animation: "aurora-shift 6s ease-in-out infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes aurora-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </span>
  );
}
