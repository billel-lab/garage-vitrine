export type Lang = "fr" | "nl";

export const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      realisations: "Réalisations",
      faq: "FAQ",
      contact: "Contact",
      cta: "Devis gratuit",
      phone: "Nous appeler",
    },
    hero: {
      badge: "Atelier artisan · Belgique",
      titleLine1: "Préparation.",
      titleLine2: "Précision.",
      titleLine3: "Passion.",
      subtitle:
        "Depuis 15 ans, nous redonnons vie aux moteurs et transformons les voitures de passionnés. Préparation, restauration, entretien haut de gamme — fait main, pièce par pièce.",
      ctaPrimary: "Obtenir un devis",
      ctaSecondary: "Voir nos réalisations",
      reassure: "Devis gratuit · Réponse sous 24h",
      stats: [
        { value: 850, suffix: "+", label: "Projets livrés" },
        { value: 15, suffix: " ans", label: "D'expérience" },
        { value: 98, suffix: "%", label: "Clients satisfaits" },
      ],
    },
    problem: {
      eyebrow: "Pourquoi nous choisir",
      title: "Un atelier, pas une chaîne de montage.",
      subtitle:
        "Chez nous, votre voiture n'est pas un numéro. Elle passe entre les mains d'un seul responsable, du premier coup d'œil jusqu'à la livraison.",
      items: [
        {
          title: "Prise en charge personnalisée",
          desc: "Un interlocuteur unique du diagnostic à la livraison. Vous savez toujours où en est votre voiture.",
        },
        {
          title: "Pièces sélectionnées",
          desc: "OEM ou équivalent qualité constructeur. Zéro compromis, zéro surprise sur la facture.",
        },
        {
          title: "Diagnostic honnête",
          desc: "Si ce n'est pas cassé, on ne le remplace pas. Transparence totale sur ce qui est nécessaire ou non.",
        },
        {
          title: "Délais tenus",
          desc: "Planning communiqué dès le devis. On respecte nos engagements, ou on vous prévient avant.",
        },
      ],
    },
    services: {
      eyebrow: "Nos expertises",
      title: "Six savoir-faire. Une seule obsession : le détail.",
      subtitle:
        "De l'entretien courant à la préparation sur-mesure, chaque intervention est traitée avec le même niveau d'exigence.",
      items: [
        {
          title: "Préparation moteur",
          desc: "Reprogrammation, stage 1/2/3, downpipe, admission. Gain de puissance maîtrisé, fiabilité préservée.",
          image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Restauration classique",
          desc: "Carrosserie, sellerie, mécanique. On redonne vie aux youngtimers et aux voitures de collection.",
          image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Entretien & révision",
          desc: "Vidange, freinage, distribution, embrayage. Travail selon carnet constructeur, factures détaillées.",
          image: "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Tuning esthétique",
          desc: "Jantes, suspensions, échappements, wrap. On respecte votre vision, on vous conseille sur l'équilibre.",
          image: "https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Diagnostic électronique",
          desc: "Valise multi-marques, lecture ECU, codage calculateurs. On trouve la cause, pas juste le symptôme.",
          image: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Préparation circuit",
          desc: "Frein, suspension, arceau, ceintures. Configuration track-ready sans sacrifier l'usage route.",
          image: "https://images.unsplash.com/photo-1607603750909-408e193868c7?q=80&w=1600&auto=format&fit=crop",
        },
      ],
      cta: "Voir tous nos services",
    },
    metrics: {
      eyebrow: "En chiffres",
      title: "Ce que 15 ans d'atelier ont construit.",
      items: [
        { value: 850, suffix: "+", label: "Projets livrés" },
        { value: 180, suffix: "", label: "Youngtimers restaurés" },
        { value: 45, suffix: " CH", label: "Gain moyen stage 1" },
        { value: 98, suffix: "%", label: "Clients qui reviennent" },
      ],
    },
    portfolio: {
      eyebrow: "Réalisations",
      title: "Quelques projets qui racontent ce qu'on fait.",
      subtitle:
        "De la préparation raisonnée à la restauration complète, chaque projet est documenté photo par photo.",
      items: [
        {
          title: "BMW E46 M3 — Restauration + Stage 2",
          tag: "Youngtimer",
          image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Porsche 997 Carrera — Préparation circuit",
          tag: "Track day",
          image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Golf MK7 GTI — Stage 2 + Échappement",
          tag: "Préparation",
          image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Mercedes 190E — Restauration complète",
          tag: "Collection",
          image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Audi RS3 — Reprogrammation + Échappement",
          tag: "Tuning",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Alpine A110 — Setup circuit",
          tag: "Track day",
          image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
        },
      ],
      cta: "Voir toutes les réalisations",
    },
    testimonials: {
      eyebrow: "Ce qu'ils en disent",
      title: "La meilleure pub, c'est la leur.",
      items: [
        {
          name: "Thomas R.",
          car: "BMW M2 Competition",
          quote:
            "Stage 2 + échappement inox. Travail nickel, explications claires, voiture rendue plus propre qu'à l'arrivée.",
        },
        {
          name: "Julien M.",
          car: "Porsche 997",
          quote:
            "Préparation circuit sérieuse, pas de blabla, pas de surfacturation. Je recommande les yeux fermés.",
        },
        {
          name: "Sarah D.",
          car: "Golf GTI",
          quote:
            "Restauration suspension + freinage. Ils m'ont pris au téléphone avant de changer quoi que ce soit. Rare.",
        },
        {
          name: "Alex B.",
          car: "Mercedes 190E",
          quote:
            "Restauration complète sur 8 mois. Photos chaque semaine, budget tenu à l'euro. Un vrai artisan.",
        },
        {
          name: "Karim L.",
          car: "Audi RS3",
          quote:
            "Reprogrammation + downpipe. +65CH mesurés au banc, zéro voyant, zéro souci depuis 12 000 km.",
        },
        {
          name: "Noah V.",
          car: "Alpine A110",
          quote:
            "Préparation circuit complète. Setup impeccable, temps au tour amélioré de 2s. Parfait.",
        },
      ],
    },
    zone: {
      eyebrow: "Zone d'intervention",
      title: "Basés en Belgique, on rayonne partout.",
      subtitle:
        "Atelier principal à Bruxelles. Nous intervenons sur tout le Benelux et organisons le transport pour les projets longs.",
      cities: [
        "Bruxelles",
        "Anvers",
        "Gand",
        "Liège",
        "Namur",
        "Charleroi",
        "Louvain",
        "Mons",
        "Mechelen",
        "Courtrai",
        "Hasselt",
        "Tournai",
      ],
      note: "Transport voiture organisé sur demande (Benelux + frontières).",
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les réponses qu'on nous donne le plus souvent.",
      items: [
        {
          q: "Combien de temps pour une préparation moteur ?",
          a: "Une préparation stage 1 prend généralement 1 à 2 journées. Stage 2/3 avec pièces spécifiques : 1 à 3 semaines selon disponibilité. On communique un planning précis avec le devis.",
        },
        {
          q: "Vous travaillez sur toutes les marques ?",
          a: "On est spécialisés sur les marques allemandes (BMW, Mercedes, Audi, Porsche, VW), françaises (Peugeot, Renault, Alpine) et certaines japonaises (Nissan, Honda, Toyota GR). Pour les autres marques, on répond après diagnostic.",
        },
        {
          q: "Mes garanties constructeur sont-elles préservées ?",
          a: "Pour l'entretien courant selon carnet constructeur : oui, intégralement. Pour les préparations moteur (reprogrammation, etc.), la garantie constructeur sur les pièces concernées saute légalement. On vous explique en détail avant d'intervenir.",
        },
        {
          q: "Vous faites des devis gratuits ?",
          a: "Oui, toujours. Le diagnostic visuel et le devis sont gratuits. Si un diagnostic électronique poussé est nécessaire, il est facturé 60€ TTC et déduit si on réalise les travaux.",
        },
        {
          q: "Puis-je apporter mes propres pièces ?",
          a: "Oui, avec deux conditions : les pièces doivent être compatibles (on vérifie avec vous) et on ne peut pas garantir la pièce elle-même — uniquement notre pose. Pour les pièces sensibles (moteur, freinage), on recommande de passer par nos fournisseurs.",
        },
        {
          q: "Quels sont vos délais de réponse ?",
          a: "Demande de devis : réponse sous 24h (24/48h en week-end). Prise en atelier : généralement sous 7 à 15 jours selon la charge. Urgence réelle : on trouve toujours une solution, appelez-nous.",
        },
      ],
    },
    ctaFinal: {
      eyebrow: "Prêt à démarrer ?",
      title: "Parlez-nous de votre projet.",
      subtitle:
        "Devis gratuit. Réponse sous 24h. Sans engagement, sans blabla commercial.",
      primary: "Demander un devis",
      secondary: "Appeler maintenant",
    },
    contact: {
      title: "Demander un devis",
      subtitle:
        "Décrivez-nous votre projet en 2 minutes. On revient vers vous sous 24h avec une estimation précise.",
      steps: [
        {
          label: "Type de projet",
          question: "Quel type de prestation ?",
          options: [
            "Entretien / révision",
            "Préparation moteur",
            "Restauration",
            "Tuning esthétique",
            "Diagnostic",
            "Autre",
          ],
        },
        {
          label: "Votre véhicule",
          question: "Parlez-nous de votre voiture.",
        },
        {
          label: "Vos coordonnées",
          question: "Où vous joindre ?",
        },
      ],
      fields: {
        make: "Marque",
        model: "Modèle",
        year: "Année",
        mileage: "Kilométrage",
        details: "Détails du projet",
        name: "Prénom et nom",
        email: "Email",
        phone: "Téléphone",
      },
      next: "Suivant",
      prev: "Retour",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      success: "Demande reçue. On revient vers vous sous 24h.",
      successAction: "Envoyer une autre demande",
      error: "Une erreur est survenue. Essayez à nouveau ou appelez-nous.",
    },
    popup: {
      badge: "Offre atelier · cette semaine",
      title: "Diagnostic offert",
      subtitle:
        "Pour toute préparation ou restauration engagée cette semaine. Rendez-vous en 7 jours.",
      bullets: [
        "Diagnostic électronique multi-marques inclus",
        "Devis écrit et détaillé sous 24h",
        "Garantie atelier 12 mois sur nos interventions",
      ],
      primary: "Réserver mon créneau",
      secondary: "Discuter sur WhatsApp",
      close: "Fermer",
    },
    footer: {
      tagline: "Atelier artisan — Préparation, restauration, entretien.",
      nav: "Navigation",
      services: "Nos services",
      legal: "Informations",
      contact: "Contact",
      rights: "Tous droits réservés.",
      madeWith: "Fait avec passion en Belgique.",
      address: "Rue de l'Atelier 12, 1000 Bruxelles",
      hours: "Lun–Ven : 8h30 – 18h · Sam : sur rendez-vous",
    },
    pages: {
      services: {
        title: "Nos services",
        subtitle:
          "Six expertises complémentaires pour traiter votre voiture de A à Z. Chaque prestation est devisée gratuitement et détaillée par écrit.",
      },
      realisations: {
        title: "Nos réalisations",
        subtitle:
          "Chaque projet raconte une histoire. Voici quelques-unes des voitures qui sont passées entre nos mains.",
      },
      faq: {
        title: "Questions fréquentes",
        subtitle: "Les réponses aux questions qu'on reçoit le plus souvent.",
      },
      contact: {
        title: "Contact & devis",
        subtitle:
          "Deux minutes pour nous expliquer votre projet. 24h pour vous répondre avec une estimation précise.",
      },
    },
  },
  nl: {
    nav: {
      home: "Home",
      services: "Diensten",
      realisations: "Realisaties",
      faq: "FAQ",
      contact: "Contact",
      cta: "Gratis offerte",
      phone: "Bel ons",
    },
    hero: {
      badge: "Ambachtelijke werkplaats · België",
      titleLine1: "Voorbereiding.",
      titleLine2: "Precisie.",
      titleLine3: "Passie.",
      subtitle:
        "Al 15 jaar geven we motoren nieuw leven en transformeren we auto's van liefhebbers. Tuning, restauratie, premium onderhoud — met de hand, onderdeel per onderdeel.",
      ctaPrimary: "Offerte aanvragen",
      ctaSecondary: "Onze realisaties",
      reassure: "Gratis offerte · Antwoord binnen 24u",
      stats: [
        { value: 850, suffix: "+", label: "Projecten geleverd" },
        { value: 15, suffix: " jaar", label: "Ervaring" },
        { value: 98, suffix: "%", label: "Tevreden klanten" },
      ],
    },
    problem: {
      eyebrow: "Waarom kiezen voor ons",
      title: "Een werkplaats, geen assemblagelijn.",
      subtitle:
        "Bij ons is uw auto geen nummer. Eén persoon volgt uw wagen op van diagnose tot levering.",
      items: [
        {
          title: "Persoonlijke opvolging",
          desc: "Eén aanspreekpunt van begin tot eind. U weet altijd waar uw auto staat.",
        },
        {
          title: "Geselecteerde onderdelen",
          desc: "OEM of gelijkwaardige kwaliteit. Geen compromissen, geen verrassingen op de factuur.",
        },
        {
          title: "Eerlijke diagnose",
          desc: "Wat niet kapot is, vervangen we niet. Volledige transparantie over wat nodig is.",
        },
        {
          title: "Afspraken nagekomen",
          desc: "Planning gecommuniceerd bij de offerte. We respecteren onze beloftes, of we verwittigen op tijd.",
        },
      ],
    },
    services: {
      eyebrow: "Onze expertise",
      title: "Zes specialisaties. Eén obsessie: het detail.",
      subtitle:
        "Van regulier onderhoud tot maatwerk tuning, elke tussenkomst krijgt hetzelfde niveau van aandacht.",
      items: [
        {
          title: "Motortuning",
          desc: "Chiptuning, stage 1/2/3, downpipe, inlaat. Beheerste vermogenswinst, behoud van betrouwbaarheid.",
          image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Klassieke restauratie",
          desc: "Carrosserie, bekleding, mechaniek. We geven youngtimers en oldtimers nieuw leven.",
          image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Onderhoud & revisie",
          desc: "Olie, remmen, distributie, koppeling. Volgens constructeursboekje, gedetailleerde facturen.",
          image: "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Esthetische tuning",
          desc: "Velgen, ophanging, uitlaten, wrap. Uw visie, ons advies over het evenwicht.",
          image: "https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Elektronische diagnose",
          desc: "Multi-merk uitleesapparatuur, ECU-lezing, codering. We vinden de oorzaak, niet enkel het symptoom.",
          image: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Circuitvoorbereiding",
          desc: "Remmen, ophanging, rolkooi, gordels. Track-ready setup zonder wegcomfort op te offeren.",
          image: "https://images.unsplash.com/photo-1607603750909-408e193868c7?q=80&w=1600&auto=format&fit=crop",
        },
      ],
      cta: "Alle diensten bekijken",
    },
    metrics: {
      eyebrow: "In cijfers",
      title: "Wat 15 jaar werkplaats heeft opgebouwd.",
      items: [
        { value: 850, suffix: "+", label: "Projecten geleverd" },
        { value: 180, suffix: "", label: "Youngtimers gerestaureerd" },
        { value: 45, suffix: " PK", label: "Gemiddelde winst stage 1" },
        { value: 98, suffix: "%", label: "Klanten die terugkomen" },
      ],
    },
    portfolio: {
      eyebrow: "Realisaties",
      title: "Enkele projecten die onze aanpak tonen.",
      subtitle:
        "Van weloverwogen tuning tot volledige restauratie, elk project wordt foto per foto gedocumenteerd.",
      items: [
        { title: "BMW E46 M3 — Restauratie + Stage 2", tag: "Youngtimer", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop" },
        { title: "Porsche 997 Carrera — Circuit setup", tag: "Track day", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop" },
        { title: "Golf MK7 GTI — Stage 2 + Uitlaat", tag: "Tuning", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop" },
        { title: "Mercedes 190E — Volledige restauratie", tag: "Oldtimer", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop" },
        { title: "Audi RS3 — Chiptuning + Uitlaat", tag: "Tuning", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop" },
        { title: "Alpine A110 — Circuit setup", tag: "Track day", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop" },
      ],
      cta: "Alle realisaties bekijken",
    },
    testimonials: {
      eyebrow: "Wat ze erover zeggen",
      title: "De beste reclame is hun stem.",
      items: [
        { name: "Thomas R.", car: "BMW M2 Competition", quote: "Stage 2 + inox uitlaat. Top werk, duidelijke uitleg, auto properder teruggekregen dan gebracht." },
        { name: "Julien M.", car: "Porsche 997", quote: "Serieuze circuitvoorbereiding, geen bla bla, geen overfacturatie. Aan te raden." },
        { name: "Sarah D.", car: "Golf GTI", quote: "Ophanging en remmen vernieuwd. Ze belden me vóór ze iets wijzigden. Zeldzaam." },
        { name: "Alex B.", car: "Mercedes 190E", quote: "Volledige restauratie over 8 maanden. Wekelijkse foto's, budget op de euro gerespecteerd." },
        { name: "Karim L.", car: "Audi RS3", quote: "Chiptuning + downpipe. +65 PK op bankmeting, geen storingslampjes, geen zorgen na 12.000 km." },
        { name: "Noah V.", car: "Alpine A110", quote: "Volledige circuitvoorbereiding. Perfecte setup, rondetijd 2s sneller. Perfect." },
      ],
    },
    zone: {
      eyebrow: "Werkgebied",
      title: "Gevestigd in België, actief overal.",
      subtitle:
        "Hoofdwerkplaats in Brussel. We werken in heel de Benelux en regelen transport voor lange projecten.",
      cities: [
        "Brussel",
        "Antwerpen",
        "Gent",
        "Luik",
        "Namen",
        "Charleroi",
        "Leuven",
        "Bergen",
        "Mechelen",
        "Kortrijk",
        "Hasselt",
        "Doornik",
      ],
      note: "Transport op aanvraag (Benelux + grensgebieden).",
    },
    faq: {
      eyebrow: "Veelgestelde vragen",
      title: "De antwoorden die we het vaakst geven.",
      items: [
        {
          q: "Hoelang duurt een motortuning?",
          a: "Een stage 1 neemt gewoonlijk 1 tot 2 dagen. Stage 2/3 met specifieke onderdelen: 1 tot 3 weken afhankelijk van beschikbaarheid. Een precieze planning staat in de offerte.",
        },
        {
          q: "Werken jullie met alle merken?",
          a: "We zijn gespecialiseerd in Duitse merken (BMW, Mercedes, Audi, Porsche, VW), Franse (Peugeot, Renault, Alpine) en bepaalde Japanse (Nissan, Honda, Toyota GR). Voor andere merken: na diagnose.",
        },
        {
          q: "Blijft mijn fabrieksgarantie behouden?",
          a: "Voor regulier onderhoud volgens boekje: ja, volledig. Voor motortuning vervalt wettelijk de garantie op de betrokken onderdelen. We leggen alles uit vóór we starten.",
        },
        {
          q: "Zijn offertes gratis?",
          a: "Ja, altijd. Visuele diagnose en offerte zijn gratis. Bij een diepgaande elektronische diagnose rekenen we 60 € aan, afgetrokken bij effectieve werken.",
        },
        {
          q: "Mag ik eigen onderdelen meebrengen?",
          a: "Ja, met twee voorwaarden: de onderdelen moeten compatibel zijn (we controleren samen) en we kunnen het onderdeel zelf niet garanderen — enkel onze montage. Voor kritieke onderdelen (motor, remmen) raden we onze leveranciers aan.",
        },
        {
          q: "Hoe snel krijg ik antwoord?",
          a: "Offerteaanvraag: antwoord binnen 24u (24/48u in het weekend). Werkplaats: gewoonlijk binnen 7 à 15 dagen. Echte noodgevallen: we vinden altijd een oplossing, bel ons.",
        },
      ],
    },
    ctaFinal: {
      eyebrow: "Klaar om te starten?",
      title: "Vertel ons over uw project.",
      subtitle:
        "Gratis offerte. Antwoord binnen 24u. Zonder verplichting, zonder commerciële praat.",
      primary: "Offerte aanvragen",
      secondary: "Bel direct",
    },
    contact: {
      title: "Offerte aanvragen",
      subtitle:
        "Beschrijf uw project in 2 minuten. We komen binnen 24u terug met een precieze raming.",
      steps: [
        {
          label: "Type project",
          question: "Welk type werk?",
          options: [
            "Onderhoud / revisie",
            "Motortuning",
            "Restauratie",
            "Esthetische tuning",
            "Diagnose",
            "Andere",
          ],
        },
        {
          label: "Uw voertuig",
          question: "Vertel ons over uw wagen.",
        },
        {
          label: "Uw gegevens",
          question: "Hoe kunnen we u bereiken?",
        },
      ],
      fields: {
        make: "Merk",
        model: "Model",
        year: "Bouwjaar",
        mileage: "Kilometerstand",
        details: "Projectdetails",
        name: "Voor- en achternaam",
        email: "E-mail",
        phone: "Telefoon",
      },
      next: "Volgende",
      prev: "Terug",
      submit: "Aanvraag verzenden",
      sending: "Versturen...",
      success: "Aanvraag ontvangen. We komen binnen 24u terug.",
      successAction: "Nieuwe aanvraag",
      error: "Er ging iets mis. Probeer opnieuw of bel ons.",
    },
    popup: {
      badge: "Aanbieding werkplaats · deze week",
      title: "Gratis diagnose",
      subtitle:
        "Voor elke tuning of restauratie die deze week wordt geboekt. Afspraak binnen 7 dagen.",
      bullets: [
        "Multi-merk elektronische diagnose inbegrepen",
        "Geschreven gedetailleerde offerte binnen 24u",
        "Werkplaatsgarantie 12 maanden op onze tussenkomsten",
      ],
      primary: "Mijn plaats reserveren",
      secondary: "Op WhatsApp chatten",
      close: "Sluiten",
    },
    footer: {
      tagline: "Ambachtelijke werkplaats — Tuning, restauratie, onderhoud.",
      nav: "Navigatie",
      services: "Onze diensten",
      legal: "Informatie",
      contact: "Contact",
      rights: "Alle rechten voorbehouden.",
      madeWith: "Met passie gemaakt in België.",
      address: "Werkplaatsstraat 12, 1000 Brussel",
      hours: "Ma–Vr: 8u30 – 18u · Za: op afspraak",
    },
    pages: {
      services: {
        title: "Onze diensten",
        subtitle:
          "Zes complementaire expertises om uw auto van A tot Z te behandelen. Elke prestatie wordt gratis en schriftelijk geoffreerd.",
      },
      realisations: {
        title: "Onze realisaties",
        subtitle:
          "Elk project vertelt een verhaal. Dit zijn enkele auto's die door onze handen zijn gegaan.",
      },
      faq: {
        title: "Veelgestelde vragen",
        subtitle: "De antwoorden op de vragen die we het vaakst ontvangen.",
      },
      contact: {
        title: "Contact & offerte",
        subtitle:
          "Twee minuten om uw project uit te leggen. 24u om u te antwoorden met een precieze raming.",
      },
    },
  },
};

export type Dict = (typeof dictionaries)["fr"];
