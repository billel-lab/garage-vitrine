"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import PageHeader from "@/components/shared/PageHeader";
import BlurFade from "@/components/ui/blur-fade";
import CTAFinal from "@/components/home/CTAFinal";
import { cn } from "@/lib/utils";

export default function RealisationsPage() {
  const { t } = useLang();
  const allItems = t.portfolio.items;
  const tags = Array.from(new Set(allItems.map((p) => p.tag)));
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? allItems.filter((p) => p.tag === filter) : allItems;

  return (
    <>
      <PageHeader
        eyebrow={t.portfolio.eyebrow}
        title={t.pages.realisations.title}
        subtitle={t.pages.realisations.subtitle}
      />

      <section className="bg-ink-950 pb-20 pt-4 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <BlurFade>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilter(null)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all",
                  filter === null
                    ? "border-ember-500 bg-ember-500 text-ink-950"
                    : "border-ink-700 bg-ink-900/60 text-ink-300 hover:border-ember-500/50 hover:text-ember-300",
                )}
              >
                Tout voir
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all",
                    filter === tag
                      ? "border-ember-500 bg-ember-500 text-ink-950"
                      : "border-ink-700 bg-ink-900/60 text-ink-300 hover:border-ember-500/50 hover:text-ember-300",
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </BlurFade>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <BlurFade key={p.title + i} delay={0.1 + i * 0.05}>
                <article className="group relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/60">
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
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
