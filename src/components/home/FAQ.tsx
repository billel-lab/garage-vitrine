"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLang } from "@/lib/i18n";
import BlurFade from "@/components/ui/blur-fade";
import Eyebrow from "@/components/ui/eyebrow";

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BlurFade>
            <Eyebrow className="justify-center">{t.faq.eyebrow}</Eyebrow>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
              {t.faq.title}
            </h2>
          </BlurFade>
        </div>

        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <BlurFade key={item.q} delay={0.15 + i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-ember-500/40 bg-ink-950"
                      : "border-ink-700 bg-ink-950/60"
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base tracking-wide text-ink-50 sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
                        isOpen
                          ? "bg-ember-500 text-ink-950 rotate-180"
                          : "bg-ink-800 text-ink-300"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-ink-300 sm:text-base">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
