"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, Wrench } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { DISPLAY_PHONE, DISPLAY_EMAIL, telHref, mailHref, blockedLinkProps } from "@/lib/utils";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Garage">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-ember-500 to-ember-700 shadow-ember">
                <Wrench className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl tracking-widest">Garage</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Youtube, href: "https://youtube.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-ink-700 bg-ink-900/60 text-ink-300 transition-colors hover:border-ember-500/60 hover:text-ember-300"
                  aria-label={`Follow ${href}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-xs tracking-widest text-ink-400">{t.footer.nav}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="text-ink-300 hover:text-ember-300" href="/">{t.nav.home}</Link></li>
              <li><Link className="text-ink-300 hover:text-ember-300" href="/services">{t.nav.services}</Link></li>
              <li><Link className="text-ink-300 hover:text-ember-300" href="/realisations">{t.nav.realisations}</Link></li>
              <li><Link className="text-ink-300 hover:text-ember-300" href="/faq">{t.nav.faq}</Link></li>
              <li><Link className="text-ink-300 hover:text-ember-300" href="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-xs tracking-widest text-ink-400">{t.footer.services}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
              {t.services.items.slice(0, 6).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-xs tracking-widest text-ink-400">{t.footer.contact}</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                <a href={telHref()} {...blockedLinkProps} className="cursor-not-allowed text-ink-300">
                  {DISPLAY_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                <a href={mailHref()} {...blockedLinkProps} className="cursor-not-allowed text-ink-300">
                  {DISPLAY_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                <span>{t.footer.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-6 text-xs text-ink-500 md:flex-row md:items-center">
          <p>
            © {year} Garage. {t.footer.rights}
          </p>
          <p className="text-ink-600">{t.footer.madeWith}</p>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-ember-700 via-ember-500 to-ember-700" />
    </footer>
  );
}
