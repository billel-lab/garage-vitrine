"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  quantity?: number;
  color?: string;
  staticity?: number;
  ease?: number;
  size?: number;
};

type Particle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export default function Particles({
  className,
  quantity = 80,
  color = "#ff7033",
  staticity = 50,
  ease = 50,
  size = 0.7,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const parent = canvas.parentElement;
    const rgb = hexToRgb(color);

    const resize = () => {
      if (!parent) return;
      canvasSize.current.w = parent.offsetWidth;
      canvasSize.current.h = parent.offsetHeight;
      canvas.width = canvasSize.current.w * window.devicePixelRatio;
      canvas.height = canvasSize.current.h * window.devicePixelRatio;
      canvas.style.width = `${canvasSize.current.w}px`;
      canvas.style.height = `${canvasSize.current.h}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvasSize.current.w,
      y: Math.random() * canvasSize.current.h,
      translateX: 0,
      translateY: 0,
      size: Math.random() * 1.4 + size,
      alpha: 0,
      targetAlpha: Number((Math.random() * 0.5 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      magnetism: 0.1 + Math.random() * 2,
    });

    const init = () => {
      resize();
      particlesRef.current = Array.from({ length: quantity }, createParticle);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      particlesRef.current.forEach((p, i) => {
        ctx.translate(p.translateX, p.translateY);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fill();
        ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

        p.x += p.dx;
        p.y += p.dy;
        if (p.alpha < p.targetAlpha) p.alpha += 0.02;
        // Mouse interaction
        p.translateX +=
          ((mouse.current.x / (staticity / p.magnetism) - p.translateX) / ease) * 1;
        p.translateY +=
          ((mouse.current.y / (staticity / p.magnetism) - p.translateY) / ease) * 1;

        if (
          p.x < -p.size ||
          p.x > canvasSize.current.w + p.size ||
          p.y < -p.size ||
          p.y > canvasSize.current.h + p.size
        ) {
          particlesRef.current[i] = createParticle();
        }
      });
      rafRef.current = requestAnimationFrame(draw);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left - canvasSize.current.w / 2;
      mouse.current.y = e.clientY - rect.top - canvasSize.current.h / 2;
    };

    init();
    draw();
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouse);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [quantity, color, staticity, ease, size]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "");
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;
  const r = parseInt(full.substring(0, 2), 16);
  const g = parseInt(full.substring(2, 4), 16);
  const b = parseInt(full.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
