"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";
import ShimmerButton from "@/components/ui/shimmer-button";
import GhostButton from "@/components/ui/ghost-button";
import BorderBeam from "@/components/ui/border-beam";
import { DISPLAY_PHONE, telHref, blockedLinkProps } from "@/lib/utils";

export default function CTAFinal() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-ember-500/30">
          <BorderBeam size={260} duration={10} />
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=2000&auto=format&fit=crop"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink-950/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,77,13,0.25)_0%,_transparent_55%)]" />
          </div>

          <div className="relative z-10 grid gap-8 p-10 lg:grid-cols-12 lg:gap-10 lg:p-16">
            <div className="lg:col-span-8">
              <BlurFade>
                <Eyebrow>{t.ctaFinal.eyebrow}</Eyebrow>
              </BlurFade>
              <BlurFade delay={0.1}>
                <h2 className="mt-4 font-display text-3xl tracking-tight text-ink-50 sm:text-5xl md:text-6xl">
                  {t.ctaFinal.title}
                </h2>
              </BlurFade>
              <BlurFade delay={0.2}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
                  {t.ctaFinal.subtitle}
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={0.25} className="flex flex-col justify-end gap-3 lg:col-span-4">
              <Link href="/contact">
                <ShimmerButton className="w-full">
                  {t.ctaFinal.primary}
                  <ArrowRight className="h-4 w-4" />
                </ShimmerButton>
              </Link>
              <a href={telHref()} {...blockedLinkProps} className="cursor-not-allowed">
                <GhostButton className="w-full pointer-events-none">
                  <Phone className="h-4 w-4" />
                  {t.ctaFinal.secondary}
                </GhostButton>
              </a>
              <p className="mt-1 text-center text-xs text-ink-500">
                {DISPLAY_PHONE} · Lun–Ven 8h30–18h
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
