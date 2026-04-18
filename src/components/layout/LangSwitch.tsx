"use client";

import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-ink-700 bg-ink-900/60 p-0.5 text-[11px] font-semibold uppercase tracking-widest",
        className,
      )}
    >
      {(["fr", "nl"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-md px-2.5 py-1.5 transition-colors",
            lang === l
              ? "bg-ember-500 text-ink-950"
              : "text-ink-300 hover:text-ink-50",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
