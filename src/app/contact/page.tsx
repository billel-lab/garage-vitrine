"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";
import PageHeader from "@/components/shared/PageHeader";
import MultiStepForm from "@/components/form/MultiStepForm";
import BlurFade from "@/components/ui/blur-fade";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";
import { whatsappLink } from "@/lib/utils";

export default function ContactPage() {
  const { t } = useLang();
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "+32 478 11 59 81";
  const phoneRaw = phone.replace(/\s/g, "");

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
                    primary={phone}
                    href={`tel:${phoneRaw}`}
                    hint="Lun–Ven 8h30–18h"
                  />
                  <InfoCard
                    icon={WhatsAppIcon}
                    title="WhatsApp"
                    primary={phone}
                    href={whatsappLink("Bonjour, je souhaite un devis.")}
                    hint="Réponse rapide"
                  />
                  <InfoCard
                    icon={Mail}
                    title="Email"
                    primary="contact@garage.example.be"
                    href="mailto:contact@garage.example.be"
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
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  primary: string;
  hint?: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-4 rounded-2xl border border-ink-800 bg-ink-900/60 p-5 transition-all hover:border-ember-500/50 hover:bg-ink-900">
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

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
