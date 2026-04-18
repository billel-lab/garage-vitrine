"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";
import MagicCard from "@/components/ui/magic-card";
import GhostButton from "@/components/ui/ghost-button";

export default function Services() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <BlurFade>
              <Eyebrow>{t.services.eyebrow}</Eyebrow>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
                {t.services.title}
              </h2>
            </BlurFade>
            <BlurFade delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
                {t.services.subtitle}
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.2}>
            <Link href="/services">
              <GhostButton>
                {t.services.cta}
                <ArrowUpRight className="h-4 w-4" />
              </GhostButton>
            </Link>
          </BlurFade>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <BlurFade key={s.title} delay={0.2 + i * 0.07}>
              <MagicCard className="h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
                  <div className="absolute top-3 left-3 rounded-full border border-ember-500/40 bg-ink-950/70 px-3 py-1 font-display text-[10px] uppercase tracking-widest text-ember-300 backdrop-blur-sm">
                    0{i + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl tracking-wide text-ink-50">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    {s.desc}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
