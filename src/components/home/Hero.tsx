"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import Particles from "@/components/ui/particles";
import ShimmerButton from "@/components/ui/shimmer-button";
import GhostButton from "@/components/ui/ghost-button";
import NumberTicker from "@/components/ui/number-ticker";
import Badge from "@/components/ui/badge";

const choreography = (i: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    duration: 0.7,
    delay: 0.1 + i * 0.12,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
});

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background: industrial grid + particles + ember glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-industrial-grid opacity-70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,77,13,0.22)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.12)_0%,_transparent_45%)]"
      />
      <Particles className="absolute inset-0" quantity={60} />

      {/* Floating caution tape bar */}
      <div
        aria-hidden
        className="absolute -top-1 left-0 right-0 h-10 overflow-hidden opacity-30"
      >
        <div
          className="h-full w-[200%] animate-marquee"
          style={{
            background:
              "repeating-linear-gradient(45deg, #facc15 0 20px, #050507 20px 40px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.div {...choreography(0)}>
              <Badge>{t.hero.badge}</Badge>
            </motion.div>

            <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
              <motion.span {...choreography(1)} className="block text-ink-50">
                {t.hero.titleLine1}
              </motion.span>
              <motion.span {...choreography(2)} className="block text-ember-gradient">
                {t.hero.titleLine2}
              </motion.span>
              <motion.span {...choreography(3)} className="block text-ink-50">
                {t.hero.titleLine3}
              </motion.span>
            </h1>

            <motion.p
              {...choreography(4)}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div {...choreography(5)} className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact">
                <ShimmerButton>
                  {t.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ShimmerButton>
              </Link>
              <Link href="/realisations">
                <GhostButton>
                  <Play className="h-4 w-4" />
                  {t.hero.ctaSecondary}
                </GhostButton>
              </Link>
            </motion.div>

            <motion.div {...choreography(6)} className="mt-5 flex items-center gap-2 text-xs text-ink-400">
              <ShieldCheck className="h-3.5 w-3.5 text-ember-400" />
              <span>{t.hero.reassure}</span>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...choreography(7)}
              className="mt-12 grid max-w-lg grid-cols-3 gap-6"
            >
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl text-ink-50 sm:text-4xl">
                    <NumberTicker value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-ink-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            {...choreography(3)}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-ink-800 shadow-2xl shadow-ember-900/40">
              <Image
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop"
                alt="Atelier de préparation — mécanicien sur moteur, éclairage dramatique"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-ink-800/80 bg-ink-950/80 backdrop-blur-md p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-ember-500/15 text-ember-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-wider text-ink-50">
                      GARANTIE ATELIER 12 MOIS
                    </div>
                    <div className="text-[11px] text-ink-400">
                      Sur toutes les interventions mécaniques
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating ember mark */}
              <div
                aria-hidden
                className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-ember-500 blur-3xl opacity-40"
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="absolute -left-2 bottom-20 hidden w-52 rounded-2xl border border-ember-500/30 bg-ink-900/90 p-4 backdrop-blur-xl shadow-xl sm:block"
            >
              <div className="font-display text-xs uppercase tracking-widest text-ember-400">
                Stage 1 moyen
              </div>
              <div className="mt-1 font-display text-3xl text-ink-50">
                <NumberTicker value={45} suffix=" CH" />
              </div>
              <div className="mt-1 text-[11px] text-ink-400">
                Gain mesuré au banc
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom geometric transition — not SVG wave */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember-500/50 to-transparent"
      />
    </section>
  );
}
