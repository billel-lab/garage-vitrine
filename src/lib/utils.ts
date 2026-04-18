import { clsx, type ClassValue } from "clsx";
import type { MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Demo mode: contact links are disabled until the real client onboarding.
// Set NEXT_PUBLIC_DEMO_MODE to "false" to re-enable tel:, mailto: and WhatsApp.
export const DEMO_MODE =
  (process.env.NEXT_PUBLIC_DEMO_MODE ?? "true").toLowerCase() !== "false";

// Display helpers — used wherever we render contact info in the page body.
export const DISPLAY_PHONE = DEMO_MODE
  ? "+32 XXX XX XX XX"
  : (process.env.NEXT_PUBLIC_PHONE ?? "+32 478 11 59 81");

export const DISPLAY_EMAIL = DEMO_MODE
  ? "contact@demo-garage.example"
  : (process.env.NEXT_PUBLIC_EMAIL ?? "contact@garage.example.be");

/** Build a tel: href, or return a blocked anchor target when in demo mode. */
export const telHref = (phone: string = DISPLAY_PHONE) =>
  DEMO_MODE ? "#" : `tel:${phone.replace(/\s/g, "")}`;

/** Build a mailto: href, or return a blocked anchor target when in demo mode. */
export const mailHref = (email: string = DISPLAY_EMAIL) =>
  DEMO_MODE ? "#" : `mailto:${email}`;

/** Build a wa.me link, or return a blocked anchor target when in demo mode. */
export const whatsappLink = (message?: string) => {
  if (DEMO_MODE) return "#";
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "32478115981";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
};

/**
 * Spread on any <a> pointing to a demo-disabled destination.
 * Blocks navigation, marks the link as inert, and drops target/rel.
 */
export const blockedLinkProps: {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  "aria-disabled": "true";
  tabIndex: -1;
  role: "link";
} = {
  onClick: (e) => {
    if (DEMO_MODE) e.preventDefault();
  },
  "aria-disabled": "true",
  tabIndex: -1,
  role: "link",
};
