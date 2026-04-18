"use client";

import WhatsAppIcon from "@/components/ui/whatsapp-icon";
import { whatsappLink } from "@/lib/utils";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Bonjour, je souhaite un devis pour mon véhicule.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6"
      aria-label="Contacter sur WhatsApp"
    >
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/40 transition-transform hover:scale-110">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25d366]"
          style={{ animation: "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite" }}
        />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
