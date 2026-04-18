"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
  once?: boolean;
  as?: "div" | "section" | "article" | "span" | "li";
};

export default function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 12,
  inViewMargin = "-80px",
  blur = "8px",
  once = true,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: inViewMargin as never });

  const variants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
      variants={variants}
      transition={{
        duration,
        delay: 0.04 + delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
