"use client";

import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-12 md:pt-40 md:pb-16">
      <div aria-hidden className="absolute inset-0 bg-industrial-grid opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,77,13,0.15)_0%,_transparent_60%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <BlurFade>
            <Eyebrow>{eyebrow}</Eyebrow>
          </BlurFade>
        )}
        <BlurFade delay={0.1}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-ink-50 sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </BlurFade>
        {subtitle && (
          <BlurFade delay={0.15}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg">
              {subtitle}
            </p>
          </BlurFade>
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent"
      />
    </section>
  );
}
