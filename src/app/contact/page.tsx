"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";
import PageHeader from "@/components/shared/PageHeader";
import MultiStepForm from "@/components/form/MultiStepForm";
import BlurFade from "@/components/ui/blur-fade";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";
import {
  whatsappLink,
  telHref,
  mailHref,
  DISPLAY_PHONE,
  DISPLAY_EMAIL,
  DEMO_MODE,
} from "@/lib/utils";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t.contact.title}
        title={t.pages.contact.title}
        subtitle={t.pages.contact.subtitle}
      />

      <section className="relative bg-ink-950 pb-20 pt-4 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <BlurFade>
                <MultiStepForm />
              </BlurFade>
            </div>

            <div className="lg:col-span-5">
              <BlurFade delay={0.15}>
                <div className="space-y-4">
                  <InfoCard
                    icon={Phone}
                    title={t.nav.phone}
                    primary={DISPLAY_PHONE}
                    href={telHref()}
                    disabled
                    hint="Lun–Ven 8h30–18h"
                  />
                  <InfoCard
                    icon={WhatsAppIcon}
                    title="WhatsApp"
                    primary={DISPLAY_PHONE}
                    href={whatsappLink("Bonjour, je souhaite un devis.")}
                    disabled
                    hint="Réponse rapide"
                  />
                  <InfoCard
                    icon={Mail}
                    title="Email"
                    primary={DISPLAY_EMAIL}
                    href={mailHref()}
                    disabled
                    hint="Réponse sous 24h"
                  />
                  <InfoCard
                    icon={MapPin}
                    title="Atelier"
                    primary={t.footer.address}
                    hint="Sur rendez-vous"
                  />
                  <InfoCard
                    icon={Clock}
                    title="Horaires"
                    primary={t.footer.hours}
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  primary,
  hint,
  href,
  disabled,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  primary: string;
  hint?: string;
  href?: string;
  disabled?: boolean;
}) {
  const content = (
    <div
      className={
        "group flex items-start gap-4 rounded-2xl border border-ink-800 bg-ink-900/60 p-5 transition-all " +
        (disabled
          ? "cursor-not-allowed opacity-95"
          : "hover:border-ember-500/50 hover:bg-ink-900")
      }
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ember-500/10 text-ember-400 transition-colors group-hover:bg-ember-500 group-hover:text-ink-950">
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-widest text-ink-400">
          {title}
        </div>
        <div className="mt-1 truncate text-sm font-semibold text-ink-50">
          {primary}
        </div>
        {hint && <div className="mt-1 text-xs text-ink-500">{hint}</div>}
      </div>
    </div>
  );

  if (!href) return content;

  if (disabled || DEMO_MODE) {
    return (
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        aria-disabled="true"
        tabIndex={-1}
        role="link"
      >
        {content}
      </a>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}
