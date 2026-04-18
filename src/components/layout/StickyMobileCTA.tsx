"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { telHref, blockedLinkProps } from "@/lib/utils";

export default function StickyMobileCTA() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-3 bottom-3 z-30 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-stretch gap-2 rounded-2xl border border-ink-800 bg-ink-950/90 p-2 backdrop-blur-xl shadow-xl">
        <a
          href={telHref()}
          {...blockedLinkProps}
          className="grid h-11 w-11 cursor-not-allowed place-items-center rounded-xl border border-ink-700 bg-ink-900 text-ink-500"
          aria-label={t.nav.phone}
        >
          <Phone className="h-4.5 w-4.5" />
        </a>
        <Link
          href="/contact"
          className="flex-1 grid place-items-center rounded-xl bg-gradient-to-br from-ember-500 to-ember-600 text-xs font-bold uppercase tracking-widest text-ink-950 shadow-ember"
        >
          {t.nav.cta}
        </Link>
      </div>
    </div>
  );
}
