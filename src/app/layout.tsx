import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garage.example.be";
const BRAND = "Garage — Atelier de Préparation & Tuning";
const DESC =
  "Atelier artisan spécialisé en préparation moteur, tuning, restauration et entretien. Passion, précision, pièces sélectionnées — pour les passionnés exigeants.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BRAND,
    template: `%s · ${BRAND}`,
  },
  description: DESC,
  keywords: [
    "garage",
    "tuning",
    "préparation moteur",
    "restauration auto",
    "atelier mécanique",
    "entretien auto",
    "Belgique",
  ],
  authors: [{ name: "Garage" }],
  openGraph: {
    type: "website",
    locale: "fr_BE",
    alternateLocale: ["nl_BE"],
    url: SITE_URL,
    title: BRAND,
    description: DESC,
    siteName: "Garage",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND,
    description: DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <LangProvider>
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <StickyMobileCTA />
        </LangProvider>
      </body>
    </html>
  );
}
