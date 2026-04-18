"use client";

import { MapPin, Truck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";

export default function Zone() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <BlurFade>
              <Eyebrow>{t.zone.eyebrow}</Eyebrow>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
                {t.zone.title}
              </h2>
            </BlurFade>
            <BlurFade delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-ink-400">
                {t.zone.subtitle}
              </p>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-ember-500/30 bg-ember-500/10 px-4 py-3 text-sm text-ember-200">
                <Truck className="h-4 w-4" />
                {t.zone.note}
              </div>
            </BlurFade>
          </div>

          <div className="lg:col-span-7">
            <BlurFade delay={0.1}>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {t.zone.cities.map((city, i) => (
                  <div
                    key={city}
                    className="group relative overflow-hidden rounded-xl border border-ink-700 bg-ink-900/40 px-4 py-4 text-sm text-ink-200 transition-all hover:border-ember-500/50 hover:bg-ink-900"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-ember-500" />
                      <span className="font-medium">{city}</span>
                    </div>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-ember-500 transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
