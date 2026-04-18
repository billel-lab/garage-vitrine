"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles, CircleCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import ShimmerButton from "@/components/ui/shimmer-button";
import GhostButton from "@/components/ui/ghost-button";
import Confetti from "./Confetti";

type FormData = {
  projectType: string;
  make: string;
  model: string;
  year: string;
  mileage: string;
  details: string;
  name: string;
  email: string;
  phone: string;
};

const INITIAL: FormData = {
  projectType: "",
  make: "",
  model: "",
  year: "",
  mileage: "",
  details: "",
  name: "",
  email: "",
  phone: "",
};

export default function MultiStepForm() {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const totalSteps = 3;

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => setData((d) => ({ ...d, [k]: v }));

  const canGoNext = () => {
    if (step === 0) return !!data.projectType;
    if (step === 1) return data.make.trim().length > 0 && data.model.trim().length > 0;
    return false;
  };

  const submit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setData(INITIAL);
    setStep(0);
    setStatus("idle");
  };

  const progress = ((step + 1) / totalSteps) * 100;

  if (status === "success") {
    return (
      <>
        <Confetti show />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-3xl border border-ember-500/40 bg-ink-900/80 p-10 text-center shadow-ember"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ember-500/20 text-ember-400">
            <CircleCheck className="h-8 w-8" strokeWidth={2.4} />
          </div>
          <h3 className="mt-5 font-display text-2xl tracking-wide text-ink-50 sm:text-3xl">
            {t.contact.success}
          </h3>
          <p className="mt-3 text-sm text-ink-400">
            {process.env.NEXT_PUBLIC_PHONE ?? "+32 478 11 59 81"}
          </p>
          <button
            onClick={reset}
            className="mt-6 text-xs font-bold uppercase tracking-widest text-ember-400 hover:text-ember-300"
          >
            ← {t.contact.successAction}
          </button>
        </motion.div>
      </>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/60 p-6 sm:p-10">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-ink-400">
          <span>
            {String(step + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
          </span>
          <span className="font-display text-ember-400">
            {t.contact.steps[step]?.label}
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-800">
          <motion.div
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full bg-gradient-to-r from-ember-500 to-ember-400"
          />
        </div>
        <div className="mt-4 flex gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex h-7 flex-1 items-center justify-center rounded-md border text-[10px] font-bold uppercase tracking-widest",
                i < step
                  ? "border-ember-500 bg-ember-500/20 text-ember-300"
                  : i === step
                  ? "border-ember-500 bg-ember-500 text-ink-950"
                  : "border-ink-700 bg-ink-950 text-ink-500",
              )}
            >
              {i < step ? <Check className="h-3 w-3" /> : i + 1}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {step === 0 && <StepProjectType data={data} update={update} />}
          {step === 1 && <StepVehicle data={data} update={update} />}
          {step === 2 && <StepContact data={data} update={update} />}
        </motion.div>
      </AnimatePresence>

      {status === "error" && (
        <p className="mt-4 text-sm text-rust-500">{t.contact.error}</p>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <GhostButton onClick={() => setStep((s) => s - 1)}>
            <ArrowLeft className="h-4 w-4" />
            {t.contact.prev}
          </GhostButton>
        ) : (
          <div />
        )}
        {step < totalSteps - 1 ? (
          <ShimmerButton
            onClick={() => canGoNext() && setStep((s) => s + 1)}
            disabled={!canGoNext()}
          >
            {t.contact.next}
            <ArrowRight className="h-4 w-4" />
          </ShimmerButton>
        ) : (
          <ShimmerButton
            onClick={submit}
            disabled={
              status === "sending" ||
              !data.name ||
              !data.email ||
              !data.phone
            }
          >
            {status === "sending" ? t.contact.sending : t.contact.submit}
            <Sparkles className="h-4 w-4" />
          </ShimmerButton>
        )}
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-400">
      {children}
    </label>
  );
}

function TextField({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-ember-500 focus:outline-none focus:ring-2 focus:ring-ember-500/30"
    />
  );
}

function StepProjectType({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
}) {
  const { t } = useLang();
  const step = t.contact.steps[0];
  return (
    <div>
      <h3 className="font-display text-2xl tracking-wide text-ink-50 sm:text-3xl">
        {step.question}
      </h3>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {step.options?.map((opt) => {
          const selected = data.projectType === opt;
          return (
            <button
              key={opt}
              onClick={() => update("projectType", opt)}
              className={cn(
                "group flex items-center justify-between rounded-xl border px-5 py-4 text-left text-sm font-semibold transition-all",
                selected
                  ? "border-ember-500 bg-ember-500/10 text-ember-200"
                  : "border-ink-700 bg-ink-950/60 text-ink-200 hover:border-ember-500/50 hover:text-ink-50",
              )}
            >
              {opt}
              <span
                className={cn(
                  "grid h-6 w-6 place-items-center rounded-full border-2",
                  selected ? "border-ember-400 bg-ember-500 text-ink-950" : "border-ink-600",
                )}
              >
                {selected && <Check className="h-3.5 w-3.5" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepVehicle({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
}) {
  const { t } = useLang();
  const step = t.contact.steps[1];
  return (
    <div>
      <h3 className="font-display text-2xl tracking-wide text-ink-50 sm:text-3xl">
        {step.question}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel>{t.contact.fields.make}</FieldLabel>
          <div className="mt-1.5">
            <TextField
              value={data.make}
              onChange={(v) => update("make", v)}
              placeholder="BMW, Porsche, Audi..."
            />
          </div>
        </div>
        <div>
          <FieldLabel>{t.contact.fields.model}</FieldLabel>
          <div className="mt-1.5">
            <TextField
              value={data.model}
              onChange={(v) => update("model", v)}
              placeholder="M3 E46, 997 Carrera..."
            />
          </div>
        </div>
        <div>
          <FieldLabel>{t.contact.fields.year}</FieldLabel>
          <div className="mt-1.5">
            <TextField
              value={data.year}
              onChange={(v) => update("year", v)}
              placeholder="2005"
            />
          </div>
        </div>
        <div>
          <FieldLabel>{t.contact.fields.mileage}</FieldLabel>
          <div className="mt-1.5">
            <TextField
              value={data.mileage}
              onChange={(v) => update("mileage", v)}
              placeholder="85 000 km"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>{t.contact.fields.details}</FieldLabel>
          <div className="mt-1.5">
            <textarea
              value={data.details}
              onChange={(e) => update("details", e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-ember-500 focus:outline-none focus:ring-2 focus:ring-ember-500/30"
              placeholder="Objectifs, budget approximatif, délais souhaités..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepContact({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
}) {
  const { t } = useLang();
  const step = t.contact.steps[2];
  return (
    <div>
      <h3 className="font-display text-2xl tracking-wide text-ink-50 sm:text-3xl">
        {step.question}
      </h3>
      <div className="mt-6 grid gap-4">
        <div>
          <FieldLabel>{t.contact.fields.name}</FieldLabel>
          <div className="mt-1.5">
            <TextField
              value={data.name}
              onChange={(v) => update("name", v)}
              placeholder="Thomas Dupont"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <FieldLabel>{t.contact.fields.email}</FieldLabel>
            <div className="mt-1.5">
              <TextField
                type="email"
                value={data.email}
                onChange={(v) => update("email", v)}
                placeholder="thomas@email.com"
              />
            </div>
          </div>
          <div>
            <FieldLabel>{t.contact.fields.phone}</FieldLabel>
            <div className="mt-1.5">
              <TextField
                type="tel"
                value={data.phone}
                onChange={(v) => update("phone", v)}
                placeholder="+32 4xx xx xx xx"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
