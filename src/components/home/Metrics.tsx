"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";
import NumberTicker from "@/components/ui/number-ticker";

export default function Metrics() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(5,5,7,0.6)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <BlurFade>
            <Eyebrow>{t.metrics.eyebrow}</Eyebrow>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
              {t.metrics.title}
            </h2>
          </BlurFade>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.metrics.items.map((m, i) => (
            <BlurFade key={m.label} delay={0.15 + i * 0.08}>
              <div className="relative overflow-hidden rounded-2xl border border-ember-500/20 bg-ink-950/70 p-6 backdrop-blur-sm">
                <div className="font-display text-5xl text-ember-gradient">
                  <NumberTicker value={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-3 text-sm text-ink-300">{m.label}</div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-ember-500/20 blur-2xl"
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
