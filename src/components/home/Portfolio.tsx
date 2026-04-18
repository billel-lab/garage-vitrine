"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";
import GhostButton from "@/components/ui/ghost-button";

export default function Portfolio() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <BlurFade>
              <Eyebrow>{t.portfolio.eyebrow}</Eyebrow>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
                {t.portfolio.title}
              </h2>
            </BlurFade>
            <BlurFade delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
                {t.portfolio.subtitle}
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.2}>
            <Link href="/realisations">
              <GhostButton>
                {t.portfolio.cta}
                <ArrowUpRight className="h-4 w-4" />
              </GhostButton>
            </Link>
          </BlurFade>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.items.map((p, i) => (
            <BlurFade key={p.title} delay={0.15 + i * 0.06}>
              <Link
                href="/realisations"
                className="group relative block overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
                  <div className="absolute top-3 left-3 rounded-full border border-ember-500/50 bg-ink-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ember-300 backdrop-blur-sm">
                    {p.tag}
                  </div>
                  <div className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-ember-500 text-ink-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base leading-snug tracking-wide text-ink-50">
                    {p.title}
                  </h3>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
