import type { Lang } from './utils';

export const OFFICIAL = {
  kaela: 'https://www.kaelainferna.com/',
  contraband: 'https://edgeofthefold.com/',
  author: 'https://derolavigne.com/',
  steamMartinez: 'https://steamcommunity.com/groups/MartinezAIStudios',
  steamDero: 'https://steamcommunity.com/groups/DeroLavigne',
  steamCuratorMartinez: 'https://store.steampowered.com/curator/46190141-Martinez-AI-Studios/',
  steamCuratorDero: 'https://store.steampowered.com/curator/46190105-Dero-Lavigne/',
  steamApp: 'https://store.steampowered.com/app/4901100/',
  steamAppId: 4901100,
  steamGroupMartinezId: '46190141',
  steamGroupDeroId: '46190105',
  partnerId: '410350',
  email: 'Dero.Lavigne@gmail.com',
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
      'Martinez AI Studios — Texas publisher and creative label. We release music, games, and transmedia created by Dero Lavigne. AI-born. Human in message.',
    orgDescription:
      'Publisher and creative label based in Dallas, Texas. Releases works created by Dero Lavigne, including Kaela Inferna and CONTRABAND: Edge of the Fold.',
  },
  es: {
    tagline: 'Nacido de IA. Humano en el mensaje.',
    description:
      'Martinez AI Studios — publisher y sello creativo en Texas. Publicamos música, juegos y transmedia creados por Dero Lavigne. Nacido de IA. Humano en el mensaje.',
    orgDescription:
      'Publisher y sello creativo con sede en Dallas, Texas. Publica obras creadas por Dero Lavigne, incluyendo Kaela Inferna y CONTRABAND: Edge of the Fold.',
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
        'Texas publisher and label releasing works created by Dero Lavigne — Kaela Inferna, CONTRABAND on Steam, and the Fold universe.',
      h1: 'Martinez AI Studios',
    },
    es: {
      title: 'Martinez AI Studios — Música IA y Juegos Narrativos',
      description:
        'Publisher y sello de Texas. Publicamos obras creadas por Dero Lavigne — Kaela Inferna, CONTRABAND en Steam y el universo del Pliegue.',
      h1: 'Martinez AI Studios',
    },
  },
  studio: {
    en: {
      title: 'The Studio — Publisher & Label | Martinez AI Studios',
      description:
        'Martinez AI Studios is a publisher and creative label in Dallas, Texas. Works are created by Dero Lavigne and released under the Martinez AI Studios imprint.',
      h1: 'The Studio',
    },
    es: {
      title: 'El Estudio — Publisher y Sello | Martinez AI Studios',
      description:
        'Martinez AI Studios es publisher y sello creativo en Dallas, Texas. Las obras las crea Dero Lavigne y se publican bajo el sello Martinez AI Studios.',
      h1: 'El Estudio',
    },
  },
  works: {
    en: {
      title: 'Published Works — Martinez AI Studios',
      description:
        'Flagship releases published by Martinez AI Studios and created by Dero Lavigne — Kaela Inferna, CONTRABAND, and more at derolavigne.com.',
      h1: 'Published Works',
    },
    es: {
      title: 'Obras Publicadas — Martinez AI Studios',
      description:
        'Lanzamientos insignia publicados por Martinez AI Studios y creados por Dero Lavigne — Kaela Inferna, CONTRABAND y más en derolavigne.com.',
      h1: 'Obras Publicadas',
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
    creditLine: 'Created by Dero Lavigne · Published by Martinez AI Studios',
    hero: {
      subtitle:
        'Texas-based publisher and creative label. We release music, games, and transmedia created by Dero Lavigne.',
      ctaWorks: 'Explore Published Works',
      ctaSteam: 'CONTRABAND on Steam',
      ctaKaela: 'Listen to Kaela',
    },
    home: {
      manifestoTitle: 'The publisher behind the Fold universe',
      manifesto:
        'Martinez AI Studios is the label and publisher — not the development studio. Dero Lavigne creates the music, games, websites, and narrative. Martinez AI Studios publishes and distributes those works on Steam, streaming platforms, and across the brand. Kaela Inferna and CONTRABAND are flagship releases under one editorial identity.',
      featuredTitle: 'Flagship Published Works',
      capabilitiesTitle: 'What We Publish',
      capabilities: [
        'Steam releases — store presence, achievements, cloud saves, community',
        'Music label — Kaela Inferna catalog, game OST, official streaming distribution',
        'Brand and editorial identity — transmedia under one publisher imprint',
        'Official distribution — bilingual sites, lore hubs, and public-facing releases',
      ],
      ecosystemTitle: 'How the roles connect',
      ecosystemCreator: 'Dero Lavigne — creates',
      ecosystemPublisher: 'Martinez AI Studios — publishes',
    },
    studio: {
      intro:
        'Martinez AI Studios is a publisher and creative label based in Dallas, Texas. Every work on this site is created by Dero Lavigne and published under the Martinez AI Studios imprint — on Steam, streaming, and across the transmedia universe.',
      rolesTitle: 'Two roles, one universe',
      rolesIntro:
        'The creative portfolio lives at derolavigne.com. This site is the publisher\'s home — the label that releases and presents those works to the world.',
      rolesHeaders: ['', 'Dero Lavigne', 'Martinez AI Studios'],
      rolesRows: [
        ['Role', 'Developer · Author · Creative direction', 'Publisher · Label · Producer'],
        ['Creates / Does', 'Music, games, code, narrative, websites', 'Steam publishing, label, brand, distribution'],
        ['Home site', 'derolavigne.com', 'martinezaistudios.com'],
      ],
      philosophyTitle: 'Label philosophy',
      philosophy:
        'We publish works where AI is a vessel — a container for human message — not the author. Dero Lavigne directs creation; Martinez AI Studios handles publishing with transparency. No "100% generated" claims. No AAA team fiction.',
      quote:
        'My music is not made to confront anyone; it is a call to restore balance. True equality is born from listening to one another, not silencing each other. Authentic strength comes from unity, never from dominance.',
      quoteAttr: '— Kaela Inferna',
      texasTitle: 'Rooted in Texas',
      texas:
        'Publisher and creative label based in Dallas, Texas, USA — global reach through Steam, streaming platforms, and the open lore of the Fold.',
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
        'These are flagship works published by Martinez AI Studios. Each was created by Dero Lavigne and released under the label — on streaming, Steam, and across the Fold universe.',
      flagshipTitle: 'Flagship releases',
      catalogTitle: 'Full creative catalog',
      catalogBody:
        'Dero Lavigne develops music, games, websites, and transmedia narrative. Martinez AI Studios publishes and distributes those works. For the complete, always-updated portfolio of everything created — visit derolavigne.com.',
      catalogCta: 'View full catalog at derolavigne.com',
    },
    kaela: {
      credits: 'Created by Dero Lavigne · Published by Martinez AI Studios',
      genre: 'Dark electronic pop',
      stats: '4 albums · 41 tracks',
      albums: 'Crown of Fire, Phoenix Era, Digital Rebellion, Aurora Rising',
      tagline: 'AI-born. Human in message.',
      transmediaTitle: 'Transmedia Identity',
      transmedia:
        'Kaela Inferna was created by Dero Lavigne and is published by Martinez AI Studios. She is a streaming artist and the in-game AI navigator in CONTRABAND. After escaping Verge Station, she accepts her primary directive: keep Lyra alive, keep the ship intact. Operations Mode in Haven handles contracts, threats, and crew analysis.',
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
        'Martinez AI Studios is the releasing label for music created by Dero Lavigne — the Kaela Inferna catalog and original game soundtracks. AI augments composition, lyrics, and vocal production under Dero\'s creative direction.',
      labelTitle: 'The label',
      label:
        'Kaela Inferna — created by Dero Lavigne, published by Martinez AI Studios. 41 tracks across four albums of dark electronic pop with a humanist core.',
      ostTitle: 'CONTRABAND Original Soundtrack',
      ost: '21 original tracks score the Fold — from Haven operations to Rift combat. Available through the game and official channels.',
      pipelineTitle: 'Voice Pipeline',
      pipeline:
        'Character voices in published works use ElevenLabs with per-character profiles — developed by Dero Lavigne, released under the Martinez AI Studios label.',
    },
    games: {
      intro:
        'Martinez AI Studios publishes commercial PC games on Steam. Games are developed by Dero Lavigne; the label handles publishing, store presence, and community. Flagship title: CONTRABAND: Edge of the Fold.',
      publishingTitle: 'Steam publishing',
      publishing:
        'As Steamworks Partner (ID 410350), Martinez AI Studios handles publishing, store presence, and community. Developer: Dero Lavigne. Publisher: Martinez AI Studios — as credited on every Steam release.',
      narrativeTitle: 'Branching Narrative',
      narrative:
        '300+ narrative scenes, faction-driven dialogue, and the Rift system let players revisit and branch decisions while ghost timelines persist — narrative design built for replayability and consequence.',
      achievements: '140 Steam achievements track exploration, endings, combat mastery, and hidden paths.',
    },
    technology: {
      intro:
        'Published works are developed by Dero Lavigne using the tools below. Martinez AI Studios publishes the results — we describe the production stack honestly, without marketing hype.',
      items: [
        {
          title: 'Directed AI',
          body: 'Dero Lavigne uses large language models and generative tools for writing, iteration, and world-building under author supervision. Published by Martinez AI Studios. AI-born, human in message.',
        },
        {
          title: 'ElevenLabs voice pipeline',
          body: 'Per-character voice profiles for in-game dialogue and narrative — created by Dero Lavigne, released under the label.',
        },
        {
          title: 'Three.js & web graphics',
          body: 'Real-time 3D for web experiences, lore sites, and visual systems — developed by Dero Lavigne for published works.',
        },
        {
          title: 'Procedural & reactive audio',
          body: 'Dynamic music layers and combat-reactive sound design in CONTRABAND — created by Dero Lavigne, published by Martinez AI Studios.',
        },
        {
          title: 'Bilingual content systems',
          body: 'Native EN/ES content pipelines for narrative, web, and store copy — developed by Dero Lavigne, distributed by the label.',
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
        ['Steam Curator (label)', '46190141 — store.steampowered.com/curator/46190141-Martinez-AI-Studios'],
        ['Steam Group (author)', '46190105 — DeroLavigne'],
        ['Steam Curator (author)', '46190105 — store.steampowered.com/curator/46190105-Dero-Lavigne'],
        ['Location', 'Dallas, Texas, USA'],
        ['Flagship works', 'Kaela Inferna (41 tracks) · CONTRABAND (300+ scenes, 140 achievements)'],
        ['Creator portfolio', 'derolavigne.com — full catalog of works created by Dero Lavigne'],
        ['Sister sites', 'kaelainferna.com · edgeofthefold.com · derolavigne.com'],
      ],
      contactNote: 'For press inquiries, use the contact page. Include outlet name and deadline.',
    },
    faq: {
      items: [
        {
          q: 'What is Martinez AI Studios?',
          a: 'A publisher and creative label based in Dallas, Texas. We publish and distribute works created by Dero Lavigne — including Kaela Inferna on streaming and CONTRABAND on Steam. AI-born. Human in message.',
        },
        {
          q: 'Who creates the content?',
          a: 'Dero Lavigne — developer, author, and creative director. He creates the music, games, websites, and narrative. Martinez AI Studios publishes and releases those works under the label.',
        },
        {
          q: 'Is it the same as Dero Lavigne?',
          a: 'No. Dero Lavigne is the creator (derolavigne.com). Martinez AI Studios is the publisher and label (this site). Created by Dero · Published by Martinez AI Studios.',
        },
        {
          q: 'Why two websites?',
          a: 'derolavigne.com is the creative portfolio — everything Dero builds. martinezaistudios.com is the publisher\'s home — what the label releases on Steam, streaming, and under the brand.',
        },
        {
          q: 'Is Kaela Inferna real?',
          a: 'Kaela was created by Dero Lavigne and is published by Martinez AI Studios. She is both a streaming artist and the in-game AI navigator in CONTRABAND. Music and voice use AI tools under Dero\'s direction.',
        },
        {
          q: 'Where do I play CONTRABAND?',
          a: 'On Steam for PC (App ID 4901100). The browser build was retired; Steam is the official destination.',
        },
        {
          q: 'Do you use AI for everything?',
          a: 'AI is a production vessel under Dero Lavigne\'s direction — for music, voices, iteration, and tooling. Martinez AI Studios publishes the results transparently. The creative message is human.',
        },
        {
          q: 'Where is the label based?',
          a: 'Dallas, Texas, USA.',
        },
        {
          q: 'How can I support the project?',
          a: 'Wishlist CONTRABAND on Steam, stream Kaela Inferna, and join the Martinez AI Studios Steam community group.',
        },
      ],
    },
    contact: {
      intro: 'Reach the publisher, join the community, or explore sister sites.',
      location: 'Dallas, Texas, USA',
      email: OFFICIAL.email,
      emailNote: 'General inquiries, press, and publishing',
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
      { term: 'Martinez AI Studios', def: 'Publisher, sello creativo, hub de marca — publica obras creadas por Dero Lavigne' },
      { term: 'Dero Lavigne', def: 'Developer, autor, director creativo — crea todo el contenido' },
      { term: 'The Fold', def: 'Universe metaphor — reality that bends and branches' },
      { term: 'Rift branches', def: 'Branching decisions and revisit system in CONTRABAND' },
      { term: 'Vessel', def: 'AI as container for human message' },
      { term: 'Operations Mode', def: 'In-game Kaela — contracts and tactical analysis' },
      { term: 'AI-born, human in message', def: 'Official label tagline' },
    ],
  },
  es: {
    creditLine: 'Creado por Dero Lavigne · Publicado por Martinez AI Studios',
    hero: {
      subtitle:
        'Publisher y sello creativo en Texas. Publicamos música, juegos y transmedia creados por Dero Lavigne.',
      ctaWorks: 'Explorar Obras Publicadas',
      ctaSteam: 'CONTRABAND en Steam',
      ctaKaela: 'Escuchar a Kaela',
    },
    home: {
      manifestoTitle: 'El publisher detrás del universo del Pliegue',
      manifesto:
        'Martinez AI Studios es el sello y publisher — no el estudio de desarrollo. Dero Lavigne crea la música, los juegos, las webs y la narrativa. Martinez AI Studios publica y distribuye esas obras en Steam, streaming y bajo la marca. Kaela Inferna y CONTRABAND son lanzamientos insignia bajo una identidad editorial común.',
      featuredTitle: 'Obras Insignia Publicadas',
      capabilitiesTitle: 'Qué Publicamos',
      capabilities: [
        'Lanzamientos Steam — presencia en store, logros, cloud saves, comunidad',
        'Sello musical — catálogo Kaela Inferna, OST de juegos, distribución en streaming',
        'Marca e identidad editorial — transmedia bajo un sello',
        'Distribución oficial — webs bilingües, lore hubs y releases públicos',
      ],
      ecosystemTitle: 'Cómo se conectan los roles',
      ecosystemCreator: 'Dero Lavigne — crea',
      ecosystemPublisher: 'Martinez AI Studios — publica',
    },
    studio: {
      intro:
        'Martinez AI Studios es publisher y sello creativo con sede en Dallas, Texas. Cada obra en este sitio es creada por Dero Lavigne y publicada bajo el sello Martinez AI Studios — en Steam, streaming y el universo transmedia.',
      rolesTitle: 'Dos roles, un universo',
      rolesIntro:
        'El portfolio creativo vive en derolavigne.com. Este sitio es la casa del publisher — el sello que publica y presenta esas obras al mundo.',
      rolesHeaders: ['', 'Dero Lavigne', 'Martinez AI Studios'],
      rolesRows: [
        ['Rol', 'Developer · Autor · Dirección creativa', 'Publisher · Sello · Productora'],
        ['Crea / Hace', 'Música, juegos, código, narrativa, webs', 'Publicación Steam, sello, marca, distribución'],
        ['Sitio web', 'derolavigne.com', 'martinezaistudios.com'],
      ],
      philosophyTitle: 'Filosofía del sello',
      philosophy:
        'Publicamos obras donde la IA es vessel (recipiente) del mensaje humano, no el autor. Dero Lavigne dirige la creación; Martinez AI Studios publica con transparencia. Sin claims de «100% generado». Sin ficción de equipo AAA.',
      quote:
        'Mi música no está hecha para confrontar a nadie; es un llamado a restaurar el equilibrio. La verdadera igualdad nace de escucharnos unos a otros, no de silenciarnos. La fuerza auténtica surge de la unidad, nunca del dominio.',
      quoteAttr: '— Kaela Inferna',
      texasTitle: 'Arraigados en Texas',
      texas:
        'Publisher y sello creativo con sede en Dallas, Texas, EE.UU. — alcance global vía Steam, streaming y el lore abierto del Pliegue.',
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
        'Estas son obras insignia publicadas por Martinez AI Studios. Cada una fue creada por Dero Lavigne y lanzada bajo el sello — en streaming, Steam y el universo del Pliegue.',
      flagshipTitle: 'Lanzamientos insignia',
      catalogTitle: 'Catálogo creativo completo',
      catalogBody:
        'Dero Lavigne desarrolla música, juegos, webs y narrativa transmedia. Martinez AI Studios publica y distribuye esas obras. Para el portfolio completo y siempre actualizado — visita derolavigne.com.',
      catalogCta: 'Ver catálogo completo en derolavigne.com',
    },
    kaela: {
      credits: 'Creado por Dero Lavigne · Publicado por Martinez AI Studios',
      genre: 'Dark electronic pop',
      stats: '4 álbumes · 41 pistas',
      albums: 'Crown of Fire, Phoenix Era, Digital Rebellion, Aurora Rising',
      tagline: 'Nacido de IA. Humano en el mensaje.',
      transmediaTitle: 'Identidad Transmedia',
      transmedia:
        'Kaela Inferna fue creada por Dero Lavigne y publicada por Martinez AI Studios. Es artista en streaming y nave IA dentro de CONTRABAND. Tras escapar de Verge Station, acepta su directiva principal: mantener viva a Lyra, mantener la nave intacta. Operations Mode en Haven gestiona contratos, amenazas y análisis de tripulación.',
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
        'Martinez AI Studios es el sello que publica la música creada por Dero Lavigne — el catálogo Kaela Inferna y bandas sonoras originales. La IA augmenta composición, letras y producción vocal bajo la dirección creativa de Dero.',
      labelTitle: 'El sello',
      label:
        'Kaela Inferna — creada por Dero Lavigne, publicada por Martinez AI Studios. 41 pistas en cuatro álbumes de dark electronic pop con núcleo humanista.',
      ostTitle: 'Banda Sonora Original de CONTRABAND',
      ost: '21 temas originales puntean el Pliegue — desde operaciones en Haven hasta combate en el Rift. Disponible con el juego y canales oficiales.',
      pipelineTitle: 'Pipeline de Voces',
      pipeline:
        'Las voces de personajes en obras publicadas usan ElevenLabs con perfiles por personaje — desarrolladas por Dero Lavigne, publicadas bajo el sello Martinez AI Studios.',
    },
    games: {
      intro:
        'Martinez AI Studios publica videojuegos comerciales PC en Steam. Los juegos los desarrolla Dero Lavigne; el sello gestiona publicación, store y comunidad. Título insignia: CONTRABAND: Edge of the Fold.',
      publishingTitle: 'Publicación Steam',
      publishing:
        'Como Steamworks Partner (ID 410350), Martinez AI Studios gestiona publicación, store y comunidad. Developer: Dero Lavigne. Publisher: Martinez AI Studios — como figura en cada release de Steam.',
      narrativeTitle: 'Narrativa Ramificada',
      narrative:
        '300+ escenas narrativas, diálogo por facciones y el sistema Rift permiten revisitar y ramificar decisiones mientras persisten timelines fantasma — diseño narrativo para rejugar y consecuencias.',
      achievements: '140 logros Steam rastrean exploración, finales, maestría en combate y rutas ocultas.',
    },
    technology: {
      intro:
        'Las obras publicadas las desarrolla Dero Lavigne con las herramientas siguientes. Martinez AI Studios publica los resultados — describimos el stack con honestidad, sin hype de marketing.',
      items: [
        {
          title: 'IA dirigida',
          body: 'Dero Lavigne usa modelos de lenguaje y herramientas generativas para escritura, iteración y world-building bajo supervisión autoral. Publicado por Martinez AI Studios. Nacido de IA. Humano en el mensaje.',
        },
        {
          title: 'Pipeline de voces ElevenLabs',
          body: 'Perfiles de voz por personaje para diálogo in-game y narrativa — creados por Dero Lavigne, publicados bajo el sello.',
        },
        {
          title: 'Three.js y gráficos web',
          body: '3D en tiempo real para experiencias web, sitios de lore y sistemas visuales — desarrollados por Dero Lavigne para obras publicadas.',
        },
        {
          title: 'Audio procedural y reactivo',
          body: 'Capas musicales dinámicas y diseño de sonido reactivo al combate en CONTRABAND — creado por Dero Lavigne, publicado por Martinez AI Studios.',
        },
        {
          title: 'Sistemas de contenido bilingüe',
          body: 'Pipelines nativos EN/ES para narrativa, web y copy de store — desarrollados por Dero Lavigne, distribuidos por el sello.',
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
        ['Steam Curator (sello)', '46190141 — store.steampowered.com/curator/46190141-Martinez-AI-Studios'],
        ['Grupo Steam (autor)', '46190105 — DeroLavigne'],
        ['Steam Curator (autor)', '46190105 — store.steampowered.com/curator/46190105-Dero-Lavigne'],
        ['Ubicación', 'Dallas, Texas, EE.UU.'],
        ['Obras flagship', 'Kaela Inferna (41 pistas) · CONTRABAND (300+ escenas, 140 logros)'],
        ['Portfolio del creador', 'derolavigne.com — catálogo completo de obras creadas por Dero Lavigne'],
        ['Sitios hermanos', 'kaelainferna.com · edgeofthefold.com · derolavigne.com'],
      ],
      contactNote: 'Para prensa, usa la página de contacto. Incluye medio y deadline.',
    },
    faq: {
      items: [
        {
          q: '¿Qué es Martinez AI Studios?',
          a: 'Publisher y sello creativo con sede en Dallas, Texas. Publicamos y distribuimos obras creadas por Dero Lavigne — incluyendo Kaela Inferna en streaming y CONTRABAND en Steam. Nacido de IA. Humano en el mensaje.',
        },
        {
          q: '¿Quién crea el contenido?',
          a: 'Dero Lavigne — developer, autor y director creativo. Crea la música, juegos, webs y narrativa. Martinez AI Studios publica y lanza esas obras bajo el sello.',
        },
        {
          q: '¿Es lo mismo que Dero Lavigne?',
          a: 'No. Dero Lavigne es el creador (derolavigne.com). Martinez AI Studios es el publisher y sello (este sitio). Creado por Dero · Publicado por Martinez AI Studios.',
        },
        {
          q: '¿Por qué dos sitios web?',
          a: 'derolavigne.com es el portfolio creativo — todo lo que Dero construye. martinezaistudios.com es la casa del publisher — lo que el sello publica en Steam, streaming y bajo la marca.',
        },
        {
          q: '¿Kaela Inferna es real?',
          a: 'Kaela fue creada por Dero Lavigne y publicada por Martinez AI Studios. Es artista en streaming y nave IA en CONTRABAND. Música y voz usan herramientas IA bajo la dirección de Dero.',
        },
        {
          q: '¿Dónde juego CONTRABAND?',
          a: 'En Steam para PC (App ID 4901100). La versión browser fue retirada; Steam es el destino oficial.',
        },
        {
          q: '¿Usáis IA para todo?',
          a: 'La IA es vessel de producción bajo la dirección de Dero Lavigne — música, voces, iteración y tooling. Martinez AI Studios publica los resultados con transparencia. El mensaje creativo es humano.',
        },
        {
          q: '¿Dónde está el sello?',
          a: 'Dallas, Texas, EE.UU.',
        },
        {
          q: '¿Cómo apoyo el proyecto?',
          a: 'Wishlist de CONTRABAND en Steam, streaming de Kaela Inferna, y únete al grupo Steam de Martinez AI Studios.',
        },
      ],
    },
    contact: {
      intro: 'Contacta con el publisher, únete a la comunidad o explora sitios hermanos.',
      location: 'Dallas, Texas, EE.UU.',
      email: OFFICIAL.email,
      emailNote: 'Consultas generales, prensa y publicación',
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
      { term: 'Martinez AI Studios', def: 'Publisher, sello creativo, hub de marca — publica obras creadas por Dero Lavigne' },
      { term: 'Dero Lavigne', def: 'Developer, autor, director creativo — crea todo el contenido' },
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
