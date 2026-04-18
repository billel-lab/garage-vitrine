# CLAUDE.md — Garage

## Informations client
- **Client :** Garage (à remplacer par la raison sociale du client)
- **Type de business :** Atelier de préparation auto / tuning / restauration — artisan créatif
- **URL cible :** _(à définir — ex. `garage-exemple.be`)_
- **Date de début :** 18/04/2026

## Objectif du projet
Site vitrine moderne, mobile-first, bilingue FR/NL — présenter l'atelier, ses services
(préparation, restauration, entretien, tuning, diagnostic, circuit), le portfolio de
réalisations, la zone d'intervention, une FAQ, et capter les demandes de devis via un
formulaire multi-étapes gamifié (confetti à la validation, envoi email via Resend).

## Stack choisie
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (pas de `tailwind.config` — tout dans `globals.css` via `@theme`)
- Framer Motion (animations scroll-reveal + chorégraphie hero)
- Lucide React (icônes) + Iconsax React (icônes décoratives)
- Zod (validation formulaire)
- Resend (emails transactionnels)
- next/font : `Oswald` (display uppercase) + `Inter` (body)
- Composants Magic UI copy-paste : `particles`, `blur-fade`, `number-ticker`, `shimmer-button`,
  `marquee`, `magic-card`, `border-beam`
- **Pas de Supabase, pas d'admin** — vitrine pure.

## Branding
- **Ambiance :** Industriel dark — atelier/tuning, accents feu.
- **Palette :**
  - Fond `#050507` (ink-950) → `#0b0b0f` → `#16161b`
  - Accent primaire orange feu `#ff4d0d` (ember-500) + gradient vers `#ff7033`
  - Rouge caliper `#dc2626` (rust-500) pour accents secondaires
  - Jaune warning `#facc15` (signal-400) pour la bande biseautée hero
- **Typographie :** Oswald (headings, uppercase, tracking large) + Inter (body)
- **Style :** Sombre dense, grain subtil, grille industrielle en background, halos ember
  radial au lieu de vagues SVG, bandes de marquage jaune/noir en hero.

## Sections prévues
Template service local + artisan, adapté :
1. **Hero** — titre chorégraphié en 3 lignes (Préparation / Précision / Passion),
   particles canvas + grille industrielle, image atelier à droite, stats (NumberTicker),
   badge garantie atelier superposé, bande caution tape animée en marquee.
2. **Problem** — 4 cards (prise en charge, pièces, diagnostic, délais).
3. **Services** — 6 magic cards avec image + numéro + description.
4. **Metrics** — bande avec image de fond dimmed + 4 compteurs (projets, youngtimers, CH, fidélité).
5. **Portfolio** — grille 6 projets avec tag catégorie + hover scale + flèche.
6. **Testimonials** — marquee double (rangée avant + rangée arrière) avec 6 avis 5 étoiles.
7. **Zone** — 12 villes du Benelux en grille avec carte rayonnement (sans SVG).
8. **FAQ** — accordéon Framer Motion 6 questions.
9. **CTAFinal** — container avec border-beam animé, image de fond, 2 CTA (devis + appel).

## Pages additionnelles
- `/services` — détail des 6 prestations avec alternance gauche/droite image + liste de bénéfices.
- `/realisations` — grille + filtres par tag (Tuning / Track day / Youngtimer / Oldtimer…).
- `/faq` — accordéon étendu.
- `/contact` — formulaire multi-étapes + infos de contact (téléphone, WhatsApp, email, adresse, horaires).
- `/api/contact` — route POST validée par Zod, envoi email via Resend.

## Features
- i18n FR/NL — context React + dictionnaires complets (`src/lib/dictionaries.ts`)
  + switcher FR/NL dans le header. Persistence localStorage. Détection navigator.language.
- WhatsApp flottant (pulse ring) + CTA mobile sticky bas.
- SEO : metadata rich, opengraph-image dynamique, sitemap, robots, manifest, icon SVG.
- Mobile-first (navbar mobile fullscreen, menu hamburger, sticky CTA bas < md).
- `prefers-reduced-motion` respecté dans `globals.css`.

## Conventions
- Code et commentaires en anglais.
- Documentation en français.
- Alias `@/*` → `src/*`.
- Mobile-first systématique.
- Toutes les sections utilisent `<BlurFade>` pour les animations d'entrée scroll-reveal.
- Toutes les valeurs numériques utilisent `<NumberTicker>` (jamais de texte statique pour un chiffre).
- Les CTA principaux utilisent `<ShimmerButton>`, les secondaires `<GhostButton>`.
- Commits : `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.

## À faire (après scaffolding)
1. `pnpm install` (ou `npm install`) dans `Garage/`.
2. Remplir `.env.local` avec les vraies clés Resend et l'email client.
3. Remplacer les images Unsplash par des photos réelles de l'atelier + portfolio.
4. Adapter les textes dictionaries (nom du garage, adresse, horaires, spécialités réelles).
5. Déployer sur Vercel — root `Garage/`, framework Next.js.
6. Connecter le domaine client + configurer `NEXT_PUBLIC_SITE_URL`.

## Notes spécifiques
- **Artisan garage créatif** — ton passion / précision / zéro bullshit. Pas de jargon SaaS,
  pas de buzzwords. On parle chevaux, fiabilité, respect du boulot.
- **Ne JAMAIS copier** ce design pour un autre projet — ambiance industrielle dark
  + typo Oswald + accents feu = signature Garage.
- **Bouton WhatsApp** uniquement vers `+32 478 11 59 81` (règle atelier).
