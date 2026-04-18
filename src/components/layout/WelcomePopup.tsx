"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { whatsappLink } from "@/lib/utils";
import BorderBeam from "@/components/ui/border-beam";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";

const STORAGE_KEY = "garage-welcome-popup-v1";
const SHOW_AFTER_MS = 6000;

export default function WelcomePopup() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const timer = window.setTimeout(() => setOpen(true), SHOW_AFTER_MS);

    // Open earlier if the user is about to leave (desktop exit intent)
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
        window.clearTimeout(timer);
        setOpen(true);
      }
    };
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-popup-title"
        >
          {/* Backdrop */}
          <motion.button
            aria-label={t.popup.close}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-default bg-ink-950/75 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{
              duration: 0.45,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-ember-500/40 bg-ink-950 shadow-2xl shadow-ember-900/50"
          >
            <BorderBeam size={240} duration={9} />

            {/* Ember glow behind */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-ember-500/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-rust-600/15 blur-3xl"
            />

            {/* Close */}
            <button
              onClick={close}
              aria-label={t.popup.close}
              className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full border border-ink-700 bg-ink-900/80 text-ink-300 backdrop-blur transition-colors hover:border-ember-500/60 hover:text-ember-300"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative z-10 grid gap-0 sm:grid-cols-5">
              {/* Image side */}
              <div className="relative hidden sm:col-span-2 sm:block">
                <div className="relative h-full min-h-[360px]">
                  <Image
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
                    alt="Atelier mécanique — éclairage dramatique"
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-950/40 via-transparent to-ink-950" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />

                  {/* Stamp */}
                  <div className="absolute left-4 top-4 rotate-[-6deg] rounded-md border-2 border-ember-500/80 bg-ink-950/60 px-3 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-ember-300 backdrop-blur">
                    — Exclusivité —
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="p-6 sm:col-span-3 sm:p-8">
                {/* Mobile banner image */}
                <div className="relative -mx-6 -mt-6 mb-5 h-32 overflow-hidden sm:hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=900&auto=format&fit=crop"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                </div>

                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/40 bg-ember-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ember-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-ember-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember-400" />
                  </span>
                  {t.popup.badge}
                </span>

                <h2
                  id="welcome-popup-title"
                  className="mt-4 font-display text-3xl leading-[1.05] tracking-tight text-ink-50 sm:text-4xl"
                >
                  <span className="block">{t.popup.title}</span>
                  <span className="mt-1 block text-ember-gradient">
                    <Sparkles className="mr-2 inline h-5 w-5 text-ember-400" />
                    -100%
                  </span>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-ink-300 sm:text-base">
                  {t.popup.subtitle}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {t.popup.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-ink-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <Link
                    href="/contact"
                    onClick={close}
                    className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-ember-400 via-ember-500 to-ember-600 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-ink-950 shadow-ember transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                    />
                    <span className="relative flex items-center gap-2">
                      {t.popup.primary}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                  <a
                    href={whatsappLink(
                      "Bonjour, je viens de voir l'offre atelier. Je souhaite réserver mon diagnostic.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 bg-ink-900/60 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-ink-100 transition-colors hover:border-[#25d366]/60 hover:text-[#25d366]"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />
                    WhatsApp
                  </a>
                </div>

                <button
                  onClick={close}
                  className="mt-4 text-[11px] font-medium uppercase tracking-widest text-ink-500 hover:text-ink-300"
                >
                  {t.popup.close} →
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
