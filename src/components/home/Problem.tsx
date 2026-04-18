"use client";

import { Wrench, Package, Search, Clock3 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";

const ICONS = [Wrench, Package, Search, Clock3];

export default function Problem() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 lg:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_0%,_rgba(255,77,13,0.04)_50%,_transparent_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <Eyebrow>{t.problem.eyebrow}</Eyebrow>
        </BlurFade>
        <BlurFade delay={0.1}>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
            {t.problem.title}
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg">
            {t.problem.subtitle}
          </p>
        </BlurFade>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.problem.items.map((item, i) => {
            const Icon = ICONS[i] ?? Wrench;
            return (
              <BlurFade key={item.title} delay={0.2 + i * 0.08}>
                <div className="group h-full rounded-2xl border border-ink-700/70 bg-ink-950/60 p-6 transition-all hover:border-ember-500/50 hover:-translate-y-1">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-ember-500/10 text-ember-400 transition-colors group-hover:bg-ember-500 group-hover:text-ink-950">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-lg tracking-wide text-ink-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    {item.desc}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
