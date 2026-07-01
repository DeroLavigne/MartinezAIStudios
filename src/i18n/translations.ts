import type { Lang } from './utils';

export const OFFICIAL = {
  kaela: 'https://www.kaelainferna.com/',
  contraband: 'https://edgeofthefold.com/',
  author: 'https://derolavigne.com/',
  steamMartinez: 'https://steamcommunity.com/groups/MartinezAIStudios',
  steamDero: 'https://steamcommunity.com/groups/DeroLavigne',
  steamApp: 'https://store.steampowered.com/app/4901100/',
  steamAppId: 4901100,
  steamGroupMartinezId: '46190141',
  steamGroupDeroId: '46190105',
  partnerId: '410350',
} as const;

export const nav = {
  en: {
    studio: 'Studio',
    works: 'Works',
    music: 'Music',
    games: 'Games',
    technology: 'Technology',
    press: 'Press',
    faq: 'FAQ',
    contact: 'Contact',
  },
  es: {
    studio: 'Estudio',
    works: 'Obras',
    music: 'Música',
    games: 'Juegos',
    technology: 'Tecnología',
    press: 'Prensa',
    faq: 'FAQ',
    contact: 'Contacto',
  },
} as const;

export const siteMeta = {
  en: {
    tagline: 'AI-born. Human in message.',
    description:
      'Martinez AI Studios — Texas-based creative label publishing AI-augmented music and branching narrative games. AI-born. Human in message.',
    orgDescription:
      'Creative label and Steam publisher based in Dallas, Texas. Home of Kaela Inferna and CONTRABAND: Edge of the Fold.',
  },
  es: {
    tagline: 'Nacido de IA. Humano en el mensaje.',
    description:
      'Martinez AI Studios — sello creativo en Texas. Publicamos música y videojuegos narrativos con IA al servicio del mensaje humano. Nacido de IA. Humano en el mensaje.',
    orgDescription:
      'Sello creativo y publisher Steam con sede en Dallas, Texas. Casa de Kaela Inferna y CONTRABAND: Edge of the Fold.',
  },
} as const;

export interface PageMeta {
  title: string;
  description: string;
  h1: string;
}

export const pages: Record<string, Record<Lang, PageMeta>> = {
  home: {
    en: {
      title: 'Martinez AI Studios — AI Music & Narrative Games',
      description:
        'Texas creative label publishing Kaela Inferna and CONTRABAND: Edge of the Fold on Steam. AI-born. Human in message.',
      h1: 'Martinez AI Studios',
    },
    es: {
      title: 'Martinez AI Studios — Música IA y Juegos Narrativos',
      description:
        'Sello creativo de Texas. Kaela Inferna y CONTRABAND: Edge of the Fold en Steam. Nacido de IA. Humano en el mensaje.',
      h1: 'Martinez AI Studios',
    },
  },
  studio: {
    en: {
      title: 'The Studio — Martinez AI Studios',
      description:
        'Human-directed AI production in Dallas, Texas. Philosophy, manifesto, and the vessel approach to transmedia creation.',
      h1: 'The Studio',
    },
    es: {
      title: 'El Estudio — Martinez AI Studios',
      description:
        'Producción con IA dirigida por humanos en Dallas, Texas. Filosofía, manifiesto y el enfoque vessel en creación transmedia.',
      h1: 'El Estudio',
    },
  },
  works: {
    en: {
      title: 'Works — Kaela Inferna & CONTRABAND',
      description:
        'Transmedia catalog: dark electronic music, branching narrative space RPG, and future Martinez AI Studios releases.',
      h1: 'Works',
    },
    es: {
      title: 'Obras — Kaela Inferna y CONTRABAND',
      description:
        'Catálogo transmedia: dark electronic, RPG espacial narrativo ramificado y futuros lanzamientos de Martinez AI Studios.',
      h1: 'Obras',
    },
  },
  kaela: {
    en: {
      title: 'Kaela Inferna — Dark Electronic Pop | Martinez AI Studios',
      description:
        'AI-born artist with 41 tracks across 4 albums. Real streaming identity and in-game AI navigator in CONTRABAND.',
      h1: 'Kaela Inferna',
    },
    es: {
      title: 'Kaela Inferna — Dark Electronic Pop | Martinez AI Studios',
      description:
        'Artista nacida de IA con 41 pistas en 4 álbumes. Identidad real en streaming y nave IA en CONTRABAND.',
      h1: 'Kaela Inferna',
    },
  },
  contraband: {
    en: {
      title: 'CONTRABAND: Edge of the Fold — Steam | Martinez AI Studios',
      description:
        'Branching narrative space RPG with 300+ scenes, 140 achievements, Rift branches. Published by Martinez AI Studios.',
      h1: 'CONTRABAND: Edge of the Fold',
    },
    es: {
      title: 'CONTRABAND: Edge of the Fold — Steam | Martinez AI Studios',
      description:
        'RPG espacial narrativo ramificado con 300+ escenas, 140 logros y Rift branches. Publicado por Martinez AI Studios.',
      h1: 'CONTRABAND: Edge of the Fold',
    },
  },
  music: {
    en: {
      title: 'Music & Sound — Martinez AI Studios',
      description:
        'AI-augmented label, 21-track CONTRABAND OST, ElevenLabs voice pipeline per character. Kaela Inferna catalog.',
      h1: 'Music & Sound',
    },
    es: {
      title: 'Música y Sonido — Martinez AI Studios',
      description:
        'Sello con IA, OST de 21 temas de CONTRABAND, pipeline de voces ElevenLabs por personaje. Catálogo Kaela Inferna.',
      h1: 'Música y Sonido',
    },
  },
  games: {
    en: {
      title: 'Games — Steam Publisher | Martinez AI Studios',
      description:
        'PC games on Steam with achievements, cloud saves, and branching narrative. CONTRABAND: Edge of the Fold.',
      h1: 'Games',
    },
    es: {
      title: 'Juegos — Publisher Steam | Martinez AI Studios',
      description:
        'Videojuegos PC en Steam con logros, cloud y narrativa ramificada. CONTRABAND: Edge of the Fold.',
      h1: 'Juegos',
    },
  },
  technology: {
    en: {
      title: 'Technology — Honest Stack | Martinez AI Studios',
      description:
        'Directed AI, ElevenLabs voices, Three.js, procedural audio. No hype — human-directed production pipeline.',
      h1: 'Technology',
    },
    es: {
      title: 'Tecnología — Stack Honesto | Martinez AI Studios',
      description:
        'IA dirigida, voces ElevenLabs, Three.js, audio procedural. Sin humo — pipeline de producción dirigido por humanos.',
      h1: 'Tecnología',
    },
  },
  press: {
    en: {
      title: 'Press & Facts — Martinez AI Studios',
      description:
        'Press kit, verifiable facts, Steam Partner ID 410350, contact for media inquiries. Dallas, Texas.',
      h1: 'Press & Facts',
    },
    es: {
      title: 'Prensa y Datos — Martinez AI Studios',
      description:
        'Kit de prensa, cifras verificables, Steam Partner ID 410350, contacto para medios. Dallas, Texas.',
      h1: 'Prensa y Datos',
    },
  },
  faq: {
    en: {
      title: 'FAQ — Martinez AI Studios',
      description:
        'What is Martinez AI Studios? Kaela Inferna, CONTRABAND on Steam, AI approach, Dallas location, and how to support.',
      h1: 'Frequently Asked Questions',
    },
    es: {
      title: 'Preguntas Frecuentes — Martinez AI Studios',
      description:
        '¿Qué es Martinez AI Studios? Kaela Inferna, CONTRABAND en Steam, enfoque IA, ubicación Dallas y cómo apoyar.',
      h1: 'Preguntas Frecuentes',
    },
  },
  contact: {
    en: {
      title: 'Contact — Martinez AI Studios',
      description:
        'Reach Martinez AI Studios in Dallas, Texas. Steam community groups, email, and official sister sites.',
      h1: 'Contact',
    },
    es: {
      title: 'Contacto — Martinez AI Studios',
      description:
        'Contacta con Martinez AI Studios en Dallas, Texas. Grupos Steam, email y sitios hermanos oficiales.',
      h1: 'Contacto',
    },
  },
  legal: {
    en: {
      title: 'Legal & Privacy — Martinez AI Studios',
      description:
        'Privacy policy placeholder. © Martinez AI Studios / David J Martinez. Steamworks Partner 410350.',
      h1: 'Legal & Privacy',
    },
    es: {
      title: 'Legal y Privacidad — Martinez AI Studios',
      description:
        'Política de privacidad provisional. © Martinez AI Studios / David J Martinez. Steamworks Partner 410350.',
      h1: 'Legal y Privacidad',
    },
  },
};

export const content = {
  en: {
    hero: {
      subtitle:
        'Texas-based creative label publishing AI-augmented music and branching narrative games.',
      ctaWorks: 'Explore Works',
      ctaSteam: 'CONTRABAND on Steam',
      ctaKaela: 'Listen to Kaela',
    },
    home: {
      manifestoTitle: 'The editorial home of a transmedia universe',
      manifesto:
        'Martinez AI Studios is the label, publisher, and production house where music, games, and narrative share one identity. We publish Kaela Inferna on streaming platforms and CONTRABAND: Edge of the Fold on Steam — not as disconnected projects, but as branches of the same fold.',
      featuredTitle: 'Flagship Works',
      capabilitiesTitle: 'What We Create',
      capabilities: [
        'AI-directed music and lyrics — label releases, game OST, ElevenLabs voices per character',
        'Commercial PC games on Steam — achievements, cloud saves, branching narrative',
        'High-traffic bilingual websites, lore hubs, and wikis',
        'Video, clips, and transmedia storytelling',
      ],
    },
    studio: {
      intro:
        'Martinez AI Studios exists because an author in Texas decided not to fragment music, games, and narrative into disconnected brands. Kaela sings balance. Kaela guides the ship. Dero builds the code. The label publishes without lying about how it was made.',
      philosophyTitle: 'Philosophy',
      philosophy:
        'We publish works where AI is a vessel — a container for human message — not the author. Directed AI under creative leadership. Transparent about tools. No "100% generated" claims. No AAA team fiction.',
      quote:
        'My music is not made to confront anyone; it is a call to restore balance. True equality is born from listening to one another, not silencing each other. Authentic strength comes from unity, never from dominance.',
      quoteAttr: '— Kaela Inferna',
      texasTitle: 'Rooted in Texas',
      texas:
        'Based in Dallas, Texas, USA. A independent creative label with global reach through Steam, streaming platforms, and the open lore of the Fold.',
      tableTitle: 'Themes Across the Ecosystem',
      tableHeaders: ['Kaela (Music)', 'CONTRABAND (Game)', 'The Label (Web)'],
      tableRows: [
        ['Restore balance', 'Rift branches, ghost timelines', 'Human-directed AI'],
        ['Listen, do not silence', 'Factions, reactive dialogue', 'Native bilingual EN/ES'],
        ['Unity vs dominance', '4 endings + Walk Away', 'Steam community, open lore'],
        ['Dark electronic with soul', 'Real combat + 300+ scenes', 'Premium, not startup hype'],
      ],
      epilogueTitle: 'The message is human',
      epilogue: [
        'Artificial intelligence is not the owner of the story.',
        'It is the microphone, the synthesizer, the copilot, and the compiler.',
        'The message is human.',
      ],
    },
    works: {
      intro:
        'Every release from Martinez AI Studios connects to the same universe — music that echoes in-game, characters that exist on streaming and in Operations Mode, narratives that branch and fold.',
    },
    kaela: {
      genre: 'Dark electronic pop',
      stats: '4 albums · 41 tracks',
      albums: 'Crown of Fire, Phoenix Era, Digital Rebellion, Aurora Rising',
      tagline: 'AI-born. Human in message.',
      transmediaTitle: 'Transmedia Identity',
      transmedia:
        'Kaela Inferna is a real streaming artist and the in-game AI navigator in CONTRABAND. After escaping Verge Station, she accepts her primary directive: keep Lyra alive, keep the ship intact. Operations Mode in Haven handles contracts, threats, and crew analysis.',
      directive: 'Primary directive accepted: keep Lyra alive.',
      cta: 'Visit kaelainferna.com',
    },
    contraband: {
      pitch: 'A girl is in danger. The universe is breaking. You have a ship.',
      long:
        'CONTRABAND: Edge of the Fold is a branching narrative space RPG published by Martinez AI Studios and developed by Dero Lavigne. Every decision is recorded on the Rift — revisit any past moment and branch history while ghost timelines still exist. Real-time dogfighting with four weapon archetypes across 42 flyable ships, faction reputation that reshapes the galaxy, base building on Asterion, six named boss encounters, and four unique endings plus a rare fifth path. Over 300 narrative scenes, 140 Steam achievements, and a 21-track original score. Official release on Steam for PC.',
      devPub: 'Developer: Dero Lavigne · Publisher: Martinez AI Studios',
      stats: [
        { label: 'Narrative scenes', value: '300+' },
        { label: 'Steam achievements', value: '140' },
        { label: 'Flyable ships', value: '42' },
        { label: 'Crew members', value: '32' },
        { label: 'Boss encounters', value: '6' },
        { label: 'Star systems', value: '34' },
        { label: 'Regions', value: '7' },
        { label: 'Endings', value: '4 + rare 5th' },
        { label: 'OST tracks', value: '21' },
      ],
      pillars: [
        'Rift branches — revisit decisions, Branch Ledger',
        'Real-time combat: pulse, beam, shotgun, missiles',
        'Faction reputation reshapes the galaxy',
        'Base building on Asterion',
      ],
      ctaGame: 'Visit edgeofthefold.com',
      ctaWishlist: 'Wishlist on Steam',
    },
    music: {
      intro:
        'Music at Martinez AI Studios spans the Kaela Inferna label catalog and original game soundtracks. AI augments composition, lyrics, and vocal production — always under human creative direction.',
      labelTitle: 'The Label',
      label:
        'Kaela Inferna · Martinez AI Studios — 41 tracks across four albums of dark electronic pop with a humanist core.',
      ostTitle: 'CONTRABAND Original Soundtrack',
      ost: '21 original tracks score the Fold — from Haven operations to Rift combat. Available through the game and official channels.',
      pipelineTitle: 'Voice Pipeline',
      pipeline:
        'Character voices use ElevenLabs with per-character voice profiles. Kaela speaks in-game and on album — same identity, different mediums.',
    },
    games: {
      intro:
        'Martinez AI Studios publishes commercial PC games on Steam. Our flagship, CONTRABAND: Edge of the Fold, delivers branching narrative, achievements, and cloud saves.',
      publishingTitle: 'Steam Publishing',
      publishing:
        'As Steamworks Partner (ID 410350), we handle publishing, store presence, and community for Martinez AI Studios releases. Developer credit stays with Dero Lavigne; publisher credit with the label.',
      narrativeTitle: 'Branching Narrative',
      narrative:
        '300+ narrative scenes, faction-driven dialogue, and the Rift system let players revisit and branch decisions while ghost timelines persist — narrative design built for replayability and consequence.',
      achievements: '140 Steam achievements track exploration, endings, combat mastery, and hidden paths.',
    },
    technology: {
      intro:
        'We describe our stack honestly. AI is a production tool directed by humans — not a marketing gimmick.',
      items: [
        {
          title: 'Directed AI',
          body: 'Large language models and generative tools assist writing, iteration, and world-building under author supervision. AI-born, human in message.',
        },
        {
          title: 'ElevenLabs Voice Pipeline',
          body: 'Per-character voice profiles for in-game dialogue and narrative scenes. Consistent identity across music and Operations Mode.',
        },
        {
          title: 'Three.js & Web Graphics',
          body: 'Real-time 3D for web experiences, lore sites, and visual systems. Performance-first rendering for high-traffic pages.',
        },
        {
          title: 'Procedural & Reactive Audio',
          body: 'Dynamic music layers and combat-reactive sound design in CONTRABAND. OST production integrated with gameplay states.',
        },
        {
          title: 'Bilingual Content Systems',
          body: 'Native EN/ES content pipelines for narrative, web, and store copy — not machine-translated afterthoughts.',
        },
      ],
      avoid: 'We avoid: "Revolutionary AI", "ChatGPT powered", stock robot imagery, and claims of fully automated authorship.',
    },
    press: {
      intro: 'Verifiable facts for media, creators, and partners.',
      factSheet: [
        ['Trade name', 'Martinez AI Studios'],
        ['Steam Publisher', 'Martinez AI Studios'],
        ['Developer (game)', 'Dero Lavigne'],
        ['Legal (Steamworks)', 'David J Martinez'],
        ['Partner ID', '410350'],
        ['Steam App', 'Contraband: Edge of the Fold — 4901100'],
        ['Steam Group (label)', '46190141 — MartinezAIStudios'],
        ['Steam Group (author)', '46190105 — DeroLavigne'],
        ['Location', 'Dallas, Texas, USA'],
        ['Flagship works', 'Kaela Inferna (41 tracks) · CONTRABAND (300+ scenes, 140 achievements)'],
        ['Sister sites', 'kaelainferna.com · edgeofthefold.com · derolavigne.com'],
      ],
      contactNote: 'For press inquiries, use the contact page. Include outlet name and deadline.',
    },
    faq: {
      items: [
        {
          q: 'What is Martinez AI Studios?',
          a: 'A creative label and Steam publisher based in Dallas, Texas. We publish AI-augmented music (Kaela Inferna) and branching narrative games (CONTRABAND). AI-born. Human in message.',
        },
        {
          q: 'Is it the same as Dero Lavigne?',
          a: 'No. Dero Lavigne is the developer and creative director. Martinez AI Studios is the publisher and brand hub that groups music, games, and narrative under one identity.',
        },
        {
          q: 'Is Kaela Inferna real?',
          a: 'Kaela is both a streaming artist identity and a transmedia character — the in-game AI navigator in CONTRABAND. Music and voice use AI tools under human direction.',
        },
        {
          q: 'Where do I play CONTRABAND?',
          a: 'On Steam for PC (App ID 4901100). The browser build was retired; Steam is the official destination.',
        },
        {
          q: 'Do you use AI for everything?',
          a: 'AI is a production vessel under author direction — for music, voices, iteration, and tooling. The creative message and final curation are human.',
        },
        {
          q: 'Where is the studio located?',
          a: 'Dallas, Texas, USA.',
        },
        {
          q: 'How can I support the project?',
          a: 'Wishlist CONTRABAND on Steam, stream Kaela Inferna, and join the Martinez AI Studios Steam community group.',
        },
      ],
    },
    contact: {
      intro: 'Reach the label, join the community, or explore sister sites.',
      location: 'Dallas, Texas, USA',
      email: 'contact@martinezaistudios.com',
      emailNote: 'General inquiries and press',
      communityTitle: 'Steam Community',
      sisterTitle: 'Sister Sites',
    },
    legal: {
      privacy:
        'This privacy policy is a placeholder. Martinez AI Studios respects visitor privacy. Analytics, if added, will be disclosed here. For data requests, contact the email on the contact page.',
      copyright: '© Martinez AI Studios / David J Martinez. All rights reserved.',
    },
    footer: {
      studio: 'Studio',
      works: 'Works',
      community: 'Community',
      sister: 'Sister Sites',
      legal: 'Legal',
      about: 'About',
      soundtrack: 'Soundtrack',
      privacy: 'Privacy',
    },
    glossary: [
      { term: 'Martinez AI Studios', def: 'Creative label, Steam publisher, brand hub' },
      { term: 'The Fold', def: 'Universe metaphor — reality that bends and branches' },
      { term: 'Rift branches', def: 'Branching decisions and revisit system in CONTRABAND' },
      { term: 'Vessel', def: 'AI as container for human message' },
      { term: 'Operations Mode', def: 'In-game Kaela — contracts and tactical analysis' },
      { term: 'AI-born, human in message', def: 'Official label tagline' },
    ],
  },
  es: {
    hero: {
      subtitle:
        'Sello creativo en Texas. Publicamos música y videojuegos narrativos con IA al servicio del mensaje humano.',
      ctaWorks: 'Explorar Obras',
      ctaSteam: 'CONTRABAND en Steam',
      ctaKaela: 'Escuchar a Kaela',
    },
    home: {
      manifestoTitle: 'La casa editorial de un universo transmedia',
      manifesto:
        'Martinez AI Studios es el sello, publisher y productora donde música, juegos y narrativa comparten una identidad. Publicamos a Kaela Inferna en streaming y CONTRABAND: Edge of the Fold en Steam — no como proyectos desconectados, sino como ramas del mismo pliegue.',
      featuredTitle: 'Obras Insignia',
      capabilitiesTitle: 'Qué Creamos',
      capabilities: [
        'Música y letras con IA dirigida — sello, OST de juegos, voces ElevenLabs por personaje',
        'Videojuegos comerciales PC en Steam — logros, cloud, narrativa ramificada',
        'Webs de alto tráfico, lore y wikis bilingües',
        'Vídeo, clips y narrativa transmedia',
      ],
    },
    studio: {
      intro:
        'Martinez AI Studios existe porque un autor en Texas decidió no fragmentar música, juego y narrativa en marcas inconexas. Kaela canta el equilibrio. Kaela guía la nave. Dero construye el código. El sello publica sin mentir sobre cómo se hizo.',
      philosophyTitle: 'Filosofía',
      philosophy:
        'Publicamos obras donde la IA es vessel (recipiente) del mensaje humano, no el autor. IA dirigida bajo liderazgo creativo. Transparentes sobre las herramientas. Sin claims de «100% generado». Sin ficción de equipo AAA.',
      quote:
        'Mi música no está hecha para confrontar a nadie; es un llamado a restaurar el equilibrio. La verdadera igualdad nace de escucharnos unos a otros, no de silenciarnos. La fuerza auténtica surge de la unidad, nunca del dominio.',
      quoteAttr: '— Kaela Inferna',
      texasTitle: 'Arraigados en Texas',
      texas:
        'Con sede en Dallas, Texas, EE.UU. Sello creativo independiente con alcance global vía Steam, plataformas de streaming y el lore abierto del Pliegue.',
      tableTitle: 'Temas en el Ecosistema',
      tableHeaders: ['Kaela (Música)', 'CONTRABAND (Juego)', 'El Sello (Web)'],
      tableRows: [
        ['Restaurar balance', 'Rift branches, timelines fantasma', 'IA dirigida por humano'],
        ['Escuchar, no silenciar', 'Facciones, diálogo reactivo', 'Bilingüe EN/ES nativo'],
        ['Unidad vs dominio', '4 finales + Walk Away', 'Comunidad Steam, lore abierto'],
        ['Dark electronic con alma', 'Combate real + 300+ escenas', 'Premium, no hype startup'],
      ],
      epilogueTitle: 'El mensaje es humano',
      epilogue: [
        'La inteligencia artificial no es el dueño del cuento.',
        'Es el micrófono, el sintetizador, el copiloto y el compilador.',
        'El mensaje es humano.',
      ],
    },
    works: {
      intro:
        'Cada lanzamiento de Martinez AI Studios conecta con el mismo universo — música que resuena in-game, personajes que existen en streaming y en Operations Mode, narrativas que ramifican y se pliegan.',
    },
    kaela: {
      genre: 'Dark electronic pop',
      stats: '4 álbumes · 41 pistas',
      albums: 'Crown of Fire, Phoenix Era, Digital Rebellion, Aurora Rising',
      tagline: 'Nacido de IA. Humano en el mensaje.',
      transmediaTitle: 'Identidad Transmedia',
      transmedia:
        'Kaela Inferna es artista real en streaming y nave IA dentro de CONTRABAND. Tras escapar de Verge Station, acepta su directiva principal: mantener viva a Lyra, mantener la nave intacta. Operations Mode en Haven gestiona contratos, amenazas y análisis de tripulación.',
      directive: 'Directiva principal aceptada: mantener viva a Lyra.',
      cta: 'Visitar kaelainferna.com',
    },
    contraband: {
      pitch: 'Una chica en peligro. El universo se rompe. Tienes una nave.',
      long:
        'CONTRABAND: Edge of the Fold es un RPG espacial narrativo ramificado publicado por Martinez AI Studios y desarrollado por Dero Lavigne. Cada decisión queda en el Rift: revisita cualquier momento y bifurca la historia mientras las líneas abandonadas siguen existiendo. Combate en tiempo real con cuatro arquetipos de arma, 42 naves, reputación de facciones, base en Asterion, seis jefes con nombre y cuatro finales únicos más un quinto raro. Más de 300 escenas, 140 logros Steam y banda sonora de 21 temas. Lanzamiento oficial en Steam para PC.',
      devPub: 'Developer: Dero Lavigne · Publisher: Martinez AI Studios',
      stats: [
        { label: 'Escenas narrativas', value: '300+' },
        { label: 'Logros Steam', value: '140' },
        { label: 'Naves pilotables', value: '42' },
        { label: 'Tripulantes', value: '32' },
        { label: 'Jefes', value: '6' },
        { label: 'Sistemas estelares', value: '34' },
        { label: 'Regiones', value: '7' },
        { label: 'Finales', value: '4 + 5.º raro' },
        { label: 'Temas OST', value: '21' },
      ],
      pillars: [
        'Rift branches — revisitar decisiones, Branch Ledger',
        'Combate en tiempo real: pulse, beam, shotgun, misiles',
        'Reputación de facciones reshapea la galaxia',
        'Construcción de base en Asterion',
      ],
      ctaGame: 'Visitar edgeofthefold.com',
      ctaWishlist: 'Wishlist en Steam',
    },
    music: {
      intro:
        'La música en Martinez AI Studios abarca el catálogo del sello Kaela Inferna y bandas sonoras originales. La IA augmenta composición, letras y producción vocal — siempre bajo dirección creativa humana.',
      labelTitle: 'El Sello',
      label:
        'Kaela Inferna · Martinez AI Studios — 41 pistas en cuatro álbumes de dark electronic pop con núcleo humanista.',
      ostTitle: 'Banda Sonora Original de CONTRABAND',
      ost: '21 temas originales puntean el Pliegue — desde operaciones en Haven hasta combate en el Rift. Disponible con el juego y canales oficiales.',
      pipelineTitle: 'Pipeline de Voces',
      pipeline:
        'Las voces de personajes usan ElevenLabs con perfiles por personaje. Kaela habla in-game y en álbum — misma identidad, distintos medios.',
    },
    games: {
      intro:
        'Martinez AI Studios publica videojuegos comerciales PC en Steam. Nuestro flagship, CONTRABAND: Edge of the Fold, ofrece narrativa ramificada, logros y cloud saves.',
      publishingTitle: 'Publicación Steam',
      publishing:
        'Como Steamworks Partner (ID 410350), gestionamos publicación, presencia en store y comunidad. Crédito de developer: Dero Lavigne; publisher: el sello.',
      narrativeTitle: 'Narrativa Ramificada',
      narrative:
        '300+ escenas narrativas, diálogo por facciones y el sistema Rift permiten revisitar y ramificar decisiones mientras persisten timelines fantasma — diseño narrativo para rejugar y consecuencias.',
      achievements: '140 logros Steam rastrean exploración, finales, maestría en combate y rutas ocultas.',
    },
    technology: {
      intro:
        'Describimos nuestro stack con honestidad. La IA es herramienta de producción dirigida por humanos — no gimmick de marketing.',
      items: [
        {
          title: 'IA Dirigida',
          body: 'Modelos de lenguaje y herramientas generativas asisten escritura, iteración y world-building bajo supervisión autoral. Nacido de IA. Humano en el mensaje.',
        },
        {
          title: 'Pipeline de Voces ElevenLabs',
          body: 'Perfiles de voz por personaje para diálogo in-game y escenas narrativas. Identidad consistente entre música y Operations Mode.',
        },
        {
          title: 'Three.js y Gráficos Web',
          body: '3D en tiempo real para experiencias web, sitios de lore y sistemas visuales. Renderizado performance-first para páginas de alto tráfico.',
        },
        {
          title: 'Audio Procedural y Reactivo',
          body: 'Capas musicales dinámicas y diseño de sonido reactivo al combate en CONTRABAND. Producción OST integrada con estados de gameplay.',
        },
        {
          title: 'Sistemas de Contenido Bilingüe',
          body: 'Pipelines nativos EN/ES para narrativa, web y copy de store — no traducciones automáticas como afterthought.',
        },
      ],
      avoid: 'Evitamos: «Revolutionary AI», «ChatGPT powered», stock de robots, y claims de autoría totalmente automatizada.',
    },
    press: {
      intro: 'Datos verificables para medios, creadores y partners.',
      factSheet: [
        ['Nombre comercial', 'Martinez AI Studios'],
        ['Publisher Steam', 'Martinez AI Studios'],
        ['Developer (juego)', 'Dero Lavigne'],
        ['Legal (Steamworks)', 'David J Martinez'],
        ['Partner ID', '410350'],
        ['Steam App', 'Contraband: Edge of the Fold — 4901100'],
        ['Grupo Steam (sello)', '46190141 — MartinezAIStudios'],
        ['Grupo Steam (autor)', '46190105 — DeroLavigne'],
        ['Ubicación', 'Dallas, Texas, EE.UU.'],
        ['Obras flagship', 'Kaela Inferna (41 pistas) · CONTRABAND (300+ escenas, 140 logros)'],
        ['Sitios hermanos', 'kaelainferna.com · edgeofthefold.com · derolavigne.com'],
      ],
      contactNote: 'Para prensa, usa la página de contacto. Incluye medio y deadline.',
    },
    faq: {
      items: [
        {
          q: '¿Qué es Martinez AI Studios?',
          a: 'Sello creativo y publisher Steam con sede en Dallas, Texas. Publicamos música con IA (Kaela Inferna) y juegos narrativos ramificados (CONTRABAND). Nacido de IA. Humano en el mensaje.',
        },
        {
          q: '¿Es lo mismo que Dero Lavigne?',
          a: 'No. Dero Lavigne es developer y director creativo. Martinez AI Studios es el publisher y hub de marca que agrupa música, juegos y narrativa bajo una identidad.',
        },
        {
          q: '¿Kaela Inferna es real?',
          a: 'Kaela es identidad artística en streaming y personaje transmedia — la nave IA en CONTRABAND. Música y voz usan herramientas IA bajo dirección humana.',
        },
        {
          q: '¿Dónde juego CONTRABAND?',
          a: 'En Steam para PC (App ID 4901100). La versión browser fue retirada; Steam es el destino oficial.',
        },
        {
          q: '¿Usáis IA para todo?',
          a: 'La IA es vessel de producción bajo dirección autoral — música, voces, iteración y tooling. El mensaje creativo y la curación final son humanos.',
        },
        {
          q: '¿Dónde está el estudio?',
          a: 'Dallas, Texas, EE.UU.',
        },
        {
          q: '¿Cómo apoyo el proyecto?',
          a: 'Wishlist de CONTRABAND en Steam, streaming de Kaela Inferna, y únete al grupo Steam de Martinez AI Studios.',
        },
      ],
    },
    contact: {
      intro: 'Contacta con el sello, únete a la comunidad o explora sitios hermanos.',
      location: 'Dallas, Texas, EE.UU.',
      email: 'contact@martinezaistudios.com',
      emailNote: 'Consultas generales y prensa',
      communityTitle: 'Comunidad Steam',
      sisterTitle: 'Sitios Hermanos',
    },
    legal: {
      privacy:
        'Esta política de privacidad es provisional. Martinez AI Studios respeta la privacidad del visitante. Analytics, si se añaden, se divulgarán aquí. Para solicitudes de datos, contacta el email en la página de contacto.',
      copyright: '© Martinez AI Studios / David J Martinez. Todos los derechos reservados.',
    },
    footer: {
      studio: 'Estudio',
      works: 'Obras',
      community: 'Comunidad',
      sister: 'Sitios Hermanos',
      legal: 'Legal',
      about: 'Sobre nosotros',
      soundtrack: 'Banda sonora',
      privacy: 'Privacidad',
    },
    glossary: [
      { term: 'Martinez AI Studios', def: 'Sello creativo, publisher Steam, hub de marca' },
      { term: 'El Pliegue / The Fold', def: 'Metáfora del universo — realidad que se dobla' },
      { term: 'Rift branches', def: 'Decisiones ramificadas y revisit en CONTRABAND' },
      { term: 'Vessel', def: 'IA como recipiente del mensaje humano' },
      { term: 'Operations Mode', def: 'Kaela in-game — contratos y análisis táctico' },
      { term: 'AI-born, human in message', def: 'Tagline oficial del sello' },
    ],
  },
} as const;

export function t(lang: Lang) {
  return content[lang];
}

export function getNav(lang: Lang) {
  return nav[lang];
}

export function getPageMeta(page: keyof typeof pages, lang: Lang): PageMeta {
  return pages[page][lang];
}
