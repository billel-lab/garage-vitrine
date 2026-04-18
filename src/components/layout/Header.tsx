"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Wrench, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { cn, DISPLAY_PHONE } from "@/lib/utils";
import LangSwitch from "./LangSwitch";

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/services", label: t.nav.services },
    { href: "/realisations", label: t.nav.realisations },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-ink-950/80 border-b border-ink-800/80"
            : "backdrop-blur-md bg-ink-950/30 border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Garage — Accueil">
            <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-ember-500 to-ember-700 shadow-ember transition-transform group-hover:rotate-[-8deg]">
              <Wrench className="h-4.5 w-4.5 text-ink-950" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg leading-none tracking-widest text-ink-50">
              Garage
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative rounded-lg px-3 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-ember-300"
              >
                {l.label}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-ember-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LangSwitch />
            <Link
              href="/contact"
              className="group relative hidden md:inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-br from-ember-400 via-ember-500 to-ember-600 px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink-950 shadow-ember transition-transform hover:scale-[1.04] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
              />
              <span className="relative flex items-center gap-2">
                {t.nav.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-ink-700 bg-ink-900/60 text-ink-100 hover:border-ember-500/60"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              className="relative ml-auto h-full w-full max-w-sm border-l border-ink-800 bg-ink-950 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg tracking-widest">MENU</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-ink-700 bg-ink-900/60 text-ink-100 hover:border-ember-500/60"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-4 text-lg font-semibold text-ink-100 hover:border-ember-500/40 hover:bg-ink-900/70 hover:text-ember-300"
                  >
                    {l.label}
                    <span className="font-display text-xs tracking-widest text-ink-400 group-hover:text-ember-400">→</span>
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 block rounded-xl bg-gradient-to-br from-ember-500 to-ember-600 py-4 text-center text-sm font-bold uppercase tracking-widest text-ink-950 shadow-ember"
              >
                {t.nav.cta}
              </Link>
              <p className="mt-6 text-xs text-ink-500">{DISPLAY_PHONE}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
