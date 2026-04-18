"use client";

import { Quote, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";
import Marquee from "@/components/ui/marquee";

export default function Testimonials() {
  const { t } = useLang();
  const items = t.testimonials.items;
  const firstRow = items.slice(0, Math.ceil(items.length / 2));
  const secondRow = items.slice(Math.ceil(items.length / 2));

  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <BlurFade>
            <Eyebrow>{t.testimonials.eyebrow}</Eyebrow>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
              {t.testimonials.title}
            </h2>
          </BlurFade>
        </div>
      </div>

      <div className="relative mt-14">
        <Marquee duration="70s" className="py-3">
          {firstRow.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </Marquee>
        <Marquee reverse duration="70s" className="py-3">
          {secondRow.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </Marquee>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-900 to-transparent md:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-900 to-transparent md:w-32"
        />
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  car,
  quote,
}: {
  name: string;
  car: string;
  quote: string;
}) {
  return (
    <figure className="w-[320px] shrink-0 rounded-2xl border border-ink-700 bg-ink-950/80 p-6 backdrop-blur-sm sm:w-[380px]">
      <div className="flex items-center justify-between">
        <Quote className="h-5 w-5 text-ember-500" />
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-signal-400 text-signal-400" />
          ))}
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-ink-200">
        "{quote}"
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-ember-500/15 font-display text-xs tracking-widest text-ember-400">
          {name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </div>
        <div>
          <div className="text-sm font-semibold text-ink-50">{name}</div>
          <div className="text-[11px] uppercase tracking-widest text-ink-500">{car}</div>
        </div>
      </figcaption>
    </figure>
  );
}
