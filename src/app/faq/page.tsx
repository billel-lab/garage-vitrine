"use client";

import { useLang } from "@/lib/i18n";
import PageHeader from "@/components/shared/PageHeader";
import FAQ from "@/components/home/FAQ";
import CTAFinal from "@/components/home/CTAFinal";

export default function FAQPage() {
  const { t } = useLang();
  return (
    <>
      <PageHeader
        eyebrow={t.faq.eyebrow}
        title={t.pages.faq.title}
        subtitle={t.pages.faq.subtitle}
      />
      <FAQ />
      <CTAFinal />
    </>
  );
}
