# Garage — Site vitrine

Site vitrine Next.js 15 pour un atelier de préparation / tuning / restauration auto.
Ambiance industrielle dark, bilingue FR/NL, formulaire de devis multi-étapes gamifié.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** (config inline dans `globals.css`)
- **Framer Motion** (animations scroll + chorégraphie hero)
- **Lucide React** + **Iconsax React** (icônes)
- **Zod** (validation formulaires)
- **Resend** (emails transactionnels)

## Démarrage

```bash
# 1. Installer les dépendances
pnpm install
# ou npm install / yarn

# 2. Configurer les variables d'environnement
cp .env.local.example .env.local  # (si fourni)
# Puis éditer .env.local :
#   RESEND_API_KEY=re_xxxxxxxxxx
#   CONTACT_EMAIL_TO=contact@garage.example.be
#   CONTACT_EMAIL_FROM=noreply@garage.example.be

# 3. Lancer en dev
pnpm dev
# → http://localhost:3000
```

## Structure

```
Garage/
├── CLAUDE.md                  # Contexte projet (lu par Claude Code)
├── README.md                  # Ce fichier
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── .env.local                 # (ignoré par git)
├── .gitignore
├── public/
│   ├── icon.svg
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── app/
    │   ├── layout.tsx         # Layout racine + fonts + providers
    │   ├── page.tsx           # Homepage (assemble 9 sections)
    │   ├── globals.css        # Tailwind + theme industriel dark
    │   ├── icon.tsx           # Favicon dynamique (ImageResponse)
    │   ├── opengraph-image.tsx # OG image dynamique
    │   ├── sitemap.ts
    │   ├── services/page.tsx
    │   ├── realisations/page.tsx
    │   ├── faq/page.tsx
    │   ├── contact/page.tsx
    │   └── api/
    │       └── contact/route.ts
    ├── components/
    │   ├── ui/                # Primitives (BlurFade, NumberTicker, ShimmerButton...)
    │   ├── layout/            # Header, Footer, LangSwitch, FloatingWhatsApp, StickyMobileCTA
    │   ├── home/              # Sections homepage (Hero, Problem, Services, Metrics...)
    │   ├── form/              # MultiStepForm + Confetti canvas
    │   └── shared/            # PageHeader réutilisable
    └── lib/
        ├── utils.ts           # cn() helper + whatsappLink()
        ├── i18n.tsx           # LangProvider + useLang()
        └── dictionaries.ts    # Textes FR/NL complets
```

## i18n FR/NL

- Context React (`LangProvider`) avec toggle dans le header.
- Persistence `localStorage` (clé `garage-lang`).
- Détection `navigator.language` au premier chargement.
- Pour ajouter une langue : éditer `src/lib/dictionaries.ts` et `src/lib/i18n.tsx`.

## Formulaire de contact

3 étapes : type de projet → véhicule → coordonnées. Confetti canvas à la validation.
L'API `/api/contact` valide avec Zod, envoie un email via Resend. Si `RESEND_API_KEY`
n'est pas défini en dev, la requête est loggée et retourne `{ ok: true, dev: true }`.

## Design — principes

- **Mobile-first** — chaque composant testé mobile puis adapté desktop.
- **Scroll-reveal partout** — toutes les sections enveloppées dans `<BlurFade>`.
- **Compteurs animés** — tout nombre visible passe par `<NumberTicker>`.
- **Industriel dark** — fond `ink-950`, accents `ember-500` (orange feu).
- **Typographie** — Oswald uppercase pour les headings, Inter pour le corps.
- **prefers-reduced-motion** — respecté via `globals.css`.

## Déploiement Vercel

```bash
# Via dashboard :
# - Root directory : Garage/
# - Framework : Next.js (auto-détecté)
# - Build : next build
# - Install : pnpm install
# - Env vars : ajouter RESEND_API_KEY, CONTACT_EMAIL_TO, CONTACT_EMAIL_FROM,
#              NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_WHATSAPP_NUMBER, NEXT_PUBLIC_PHONE
```

## Licence

© 2026 Garage. Tous droits réservés.
