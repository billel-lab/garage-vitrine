"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import PageHeader from "@/components/shared/PageHeader";
import BlurFade from "@/components/ui/blur-fade";
import CTAFinal from "@/components/home/CTAFinal";
import Metrics from "@/components/home/Metrics";
import FAQ from "@/components/home/FAQ";

export default function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t.services.eyebrow}
        title={t.pages.services.title}
        subtitle={t.pages.services.subtitle}
      />

      <section className="bg-ink-950 pb-20 pt-4 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {t.services.items.map((s, i) => (
              <BlurFade key={s.title} delay={0.1}>
                <article
                  className={`grid items-center gap-8 rounded-3xl border border-ink-800 bg-ink-900/40 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5 lg:aspect-[4/5]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 rounded-full border border-ember-500/50 bg-ink-950/80 px-3 py-1 font-display text-[11px] uppercase tracking-widest text-ember-300 backdrop-blur-sm">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <h2 className="font-display text-2xl tracking-wide text-ink-50 sm:text-3xl md:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
                      {s.desc}
                    </p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {getBenefits(i).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-ink-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <Metrics />
      <FAQ />
      <CTAFinal />
    </>
  );
}

function getBenefits(i: number): string[] {
  const sets: string[][] = [
    ["Banc de puissance mesuré", "Reprogrammation OBD", "Fiabilité préservée", "Garantie 12 mois"],
    ["Expertise tôlerie", "Pièces d'origine sourcing", "Sellerie traditionnelle", "Devis transparent"],
    ["Selon carnet constructeur", "Garantie préservée", "Pièces OEM", "Factures détaillées"],
    ["Conseil esthétique", "Respect de votre vision", "Pose certifiée", "Finition atelier"],
    ["Valise multi-marques", "Lecture ECU complète", "Codage calculateur", "Réparation ciblée"],
    ["Setup géométrie 4 roues", "Freinage track", "Arceau homologué", "Usage route conservé"],
  ];
  return sets[i] ?? sets[0];
}
