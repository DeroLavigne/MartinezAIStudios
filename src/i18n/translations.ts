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
    blog: 'Studio Log',
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
    blog: 'Studio Log',
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
        'Press kit and verifiable public facts — trade name, Steam publisher, developer, and contact for media inquiries. Dallas, Texas.',
      h1: 'Press & Facts',
    },
    es: {
      title: 'Prensa y Datos — Martinez AI Studios',
      description:
        'Kit de prensa y datos públicos verificables — nombre comercial, publisher Steam, developer y contacto para medios. Dallas, Texas.',
      h1: 'Prensa y Datos',
    },
  },
  faq: {
    en: {
      title: 'FAQ — Martinez AI Studios',
      description:
        'Publisher, creator roles, Kaela Inferna, CONTRABAND Rift branches, AI music ethics, ComfyUI stack, Steam curators, and Studio Log.',
      h1: 'Frequently Asked Questions',
    },
    es: {
      title: 'Preguntas Frecuentes — Martinez AI Studios',
      description:
        'Roles publisher/creador, Kaela Inferna, Rift branches de CONTRABAND, ética música IA, stack ComfyUI, curators Steam y Studio Log.',
      h1: 'Preguntas Frecuentes',
    },
  },
  blog: {
    en: {
      title: 'Studio Log — Games, AI Music & Tools | Martinez AI Studios',
      description:
        'Long-form publisher notes: 500+ referenced games, indie and AAA craft, AI music pipeline, ComfyUI and ElevenLabs stack, Steam curation.',
      h1: 'Studio Log',
    },
    es: {
      title: 'Studio Log — Juegos, Música IA y Herramientas | Martinez AI Studios',
      description:
        'Notas extensas del publisher: 500+ juegos referenciados, craft indie y AAA, pipeline música IA, stack ComfyUI y ElevenLabs, curación Steam.',
      h1: 'Studio Log',
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
        'Privacy policy placeholder. Martinez AI Studios respects visitor privacy. Analytics, if added, will be disclosed here.',
      h1: 'Legal & Privacy',
    },
    es: {
      title: 'Legal y Privacidad — Martinez AI Studios',
      description:
        'Política de privacidad provisional. Martinez AI Studios respeta la privacidad del visitante. Analytics, si se añaden, se divulgarán aquí.',
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
      ctaDero: 'Dero Lavigne — Full Portfolio',
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
      creatorTitle: 'One creator behind every release',
      creatorBody:
        'Dero Lavigne is the developer, composer, writer, and creative director of everything under this label — the music, the games, the websites, the 3D, the video, and the narrative. Martinez AI Studios exists to publish and distribute that work to the world.',
      pipelineTitle: 'How the work is made',
      pipelineIntro:
        'Every release is created by Dero Lavigne on a high-end, locally-run production pipeline, then published and distributed under the Martinez AI Studios imprint. AI is a tool under human direction — the message stays human.',
      pipelineNote: 'Created by Dero Lavigne · Published & distributed by Martinez AI Studios',
      pipelineGroups: [
        {
          title: 'AI Visual & Video',
          items: [
            'Locally-run ComfyUI pipelines for characters, cinematics, and key art',
            'Diffusion and video models (SDXL, WAN, LTX) for stills and motion',
            'Frame interpolation and 4K upscaling for clean, cinematic output',
            'Talking-head and lip-sync passes for performer visuals',
            'Editorial assembly, cut, and color in Filmora',
          ],
        },
        {
          title: 'Music & Audio',
          items: [
            'Songwriting and composition workflows with Suno',
            'Voice and narration with ElevenLabs',
            'Kaela Inferna catalog — 4 albums, 41 tracks',
            'Original game soundtracks and cinematic scoring',
            'Distribution to Spotify, Apple Music, and YouTube Music',
          ],
        },
        {
          title: 'Games & Interactive',
          items: [
            'CONTRABAND: Edge of the Fold — branching space RPG',
            'HTML5 / JavaScript engine, Electron packaging for Steam',
            'Steamworks: achievements, cloud saves, store presence',
            '3D assets authored in Blender and exported as GLB',
          ],
        },
        {
          title: 'Web & Brand',
          items: [
            'Bilingual sites built with Astro, Next.js, and HTML5',
            'Real-time 3D on the web with Three.js / WebGL',
            'Technical SEO, structured data, and performance',
            'Transmedia lore hubs and interconnected sister sites',
          ],
        },
      ],
      catalogTitle: 'Full creative catalog',
      catalogBody:
        'Dero Lavigne develops music, games, websites, and transmedia narrative. Martinez AI Studios publishes and distributes those works. For the complete, always-updated portfolio of everything created — visit derolavigne.com.',
      catalogCta: 'View full catalog at derolavigne.com',
      servicesTitle: 'Creative production, end to end',
      servicesIntro:
        'Martinez AI Studios is a Dallas, Texas creative production studio and label. Every project is created and directed by Dero Lavigne — from first concept to final master — on a modern, human-directed AI pipeline. We take music, video, games, and websites from idea to published, distributed, and live.',
      services: [
        {
          title: 'AI Music & Audio Production',
          body:
            'Original songs, scores, and voices built for release. We write, produce, and master music across dark electronic, pop, R&B, cumbia, reggaetón, and cinematic scoring — then distribute to every major platform.',
          items: [
            'Original songwriting, composition, and production',
            'Character and brand voices with ElevenLabs',
            'Game and film scoring, stingers, and sound design',
            'Mixing, mastering, and release-ready deliverables',
            'Distribution to Spotify, Apple Music, and YouTube Music',
          ],
        },
        {
          title: 'AI Video & Cinematics',
          body:
            'Cinematic clips, music videos, trailers, and social content produced on a locally-run pipeline — full creative control, no per-render limits.',
          items: [
            'Music videos, lyric visuals, and Spotify Canvas loops',
            'Game trailers, teasers, and store capsules',
            'Talking-head and lip-sync performer content',
            '4K upscaling, frame interpolation, and color',
            'Editorial cut and finishing in Filmora',
          ],
        },
        {
          title: 'Game Development & Steam Publishing',
          body:
            'From branching narrative RPGs to store-ready launches. We design, build, and ship PC games, then handle Steam publishing end to end.',
          items: [
            'Narrative, systems, and gameplay design',
            'HTML5 / JavaScript engines, Electron packaging',
            'Steamworks: achievements, cloud saves, store setup',
            'Store art, capsules, and marketing assets',
            'Launch, community, and post-release support',
          ],
        },
        {
          title: 'Web Development & Real-time 3D',
          body:
            'Fast, bilingual, SEO-ready websites with cinematic motion and real-time 3D — built to rank in Dallas and convert visitors into customers.',
          items: [
            'Marketing sites, landing pages, and web apps',
            'Real-time 3D and WebGL with Three.js',
            'Technical SEO, structured data, and Core Web Vitals',
            'Bilingual English / Spanish builds',
            'Analytics, tracking, and performance tuning',
          ],
        },
        {
          title: 'Branding, Characters & Visual Identity',
          body:
            'Logos, characters, key art, and complete visual systems — including consistent AI-born artists and brand characters across every channel.',
          items: [
            'Logos, wordmarks, and brand systems',
            'Character design and consistent AI-born identities',
            'Album covers, posters, and social art',
            'Steam and streaming profile assets',
            'Ultra-wide 21:9 and 32:9 key art',
          ],
        },
        {
          title: 'Transmedia & Distribution',
          body:
            'One story across music, games, video, and web — released and distributed under one publisher, in English and Spanish.',
          items: [
            'Cross-platform release strategy',
            'Lore hubs and interconnected sister sites',
            'Multi-channel publishing and scheduling',
            'Bilingual audience reach',
            'Rights-clean, transparent AI credits',
          ],
        },
      ],
      processTitle: 'How we work',
      processIntro: 'A clear, collaborative path from first call to public launch.',
      processSteps: [
        { title: 'Discovery', body: 'We learn your goals, audience, budget, and timeline before anything is produced.' },
        { title: 'Creative direction', body: 'Dero Lavigne sets the concept, references, and direction so every asset stays on-brand.' },
        { title: 'Production', body: 'Music, video, art, code, or game systems are built on our high-end local pipeline with fast iteration.' },
        { title: 'Publishing', body: 'We prepare release-ready masters, store pages, and metadata under the Martinez AI Studios imprint.' },
        { title: 'Distribution & support', body: 'We ship to Steam, streaming, and the web, then support the launch and everything after.' },
      ],
      whyTitle: 'Why Martinez AI Studios',
      whyIntro: 'A studio built for the way media is actually made in 2026 — fast, transparent, and human-directed.',
      whyPoints: [
        { title: 'End to end, one roof', body: 'Music, video, games, and web in one studio. No handoffs, no mismatched vendors.' },
        { title: 'Human-directed AI', body: 'AI is a tool. Dero Lavigne directs every creative decision — the message stays human.' },
        { title: 'Our own local pipeline', body: 'A high-end workstation and local models mean speed, privacy, and no per-render ceilings.' },
        { title: 'Bilingual by default', body: 'Native English and Spanish across every deliverable — built for Texas and beyond.' },
        { title: 'Transparent & rights-clean', body: 'Clear credits and an honest process. No "100% generated" claims, no AAA-team fiction.' },
        { title: 'Publisher-grade delivery', body: 'We do not just create — we publish and distribute to Steam and streaming platforms.' },
      ],
      industriesTitle: 'Who we work with',
      industriesIntro: 'Artists, studios, and businesses that want standout media without a bloated agency.',
      industries: [
        { title: 'Musicians & labels', body: 'Releases, scores, and visuals ready for streaming and social.' },
        { title: 'Indie game developers', body: 'Design, build, and Steam publishing for PC titles.' },
        { title: 'Small & midsize businesses', body: 'Websites that rank in Dallas and convert visitors into customers.' },
        { title: 'Content creators & streamers', body: 'Channel art, intros, music, and short-form video.' },
        { title: 'Startups & brands', body: 'Identity, key art, and launch campaigns across channels.' },
        { title: 'Nonprofits & local orgs', body: 'Bilingual sites and media that reach the whole community.' },
      ],
      localTitle: 'Based in Dallas, Texas — working worldwide',
      localBody:
        'Martinez AI Studios operates from Dallas, Texas (DFW), serving clients across Texas and around the world. Whether you are a Dallas–Fort Worth musician who needs a release, an indie developer shipping to Steam, or a local business that needs a website that ranks and converts, we bring cinematic, AI-accelerated production to your project — in English and Spanish.',
      localPoints: [
        'Dallas–Fort Worth (DFW) and all of Texas',
        'Remote collaboration worldwide',
        'Native English and Spanish',
        'Fast turnaround on a local production pipeline',
      ],
      faqTitle: 'Common questions',
      faqIntro: 'Quick answers for creators, businesses, and partners.',
      faqItems: [
        { q: 'Are you a studio for hire or a label?', a: 'Both. Martinez AI Studios publishes its own works (Kaela Inferna, CONTRABAND) and produces music, video, games, and websites for clients.' },
        { q: 'Where are you located?', a: 'Dallas, Texas, USA (DFW). We work with clients across Texas and worldwide, in English and Spanish.' },
        { q: 'Do you really use AI for everything?', a: 'AI is a tool under human direction. Dero Lavigne writes, directs, and finishes every project — the message stays human.' },
        { q: 'Can you distribute my music?', a: 'Yes. We deliver release-ready masters and distribute to Spotify, Apple Music, and YouTube Music.' },
        { q: 'Can you publish my game on Steam?', a: 'Yes. We handle Steamworks setup, store pages, achievements, cloud saves, and launch.' },
        { q: 'How do we start?', a: 'Reach out through the contact page with your goals and timeline, and we will map the fastest path to launch.' },
      ],
      ctaBandTitle: 'Have a project in mind?',
      ctaBandBody: 'Music, video, a game, or a website — let us build something worth publishing.',
      ctaBandPrimary: 'Start a project',
      ctaBandSecondary: 'See the full portfolio',
      statsTitle: 'The label by the numbers',
      statsIntro: 'A snapshot of what has already shipped under Martinez AI Studios.',
      stats: [
        { value: '2', label: 'Original brands published' },
        { value: '4', label: 'Albums released' },
        { value: '41', label: 'Tracks distributed' },
        { value: '300+', label: 'Game scenes written' },
        { value: '4+1', label: 'Endings in CONTRABAND' },
        { value: 'EN/ES', label: 'Native bilingual output' },
      ],
      worksDeepTitle: 'Selected work',
      worksDeepIntro:
        'Two flagship IPs and a connected network of sites — all created by Dero Lavigne and published under Martinez AI Studios.',
      worksDeep: [
        {
          tag: 'Music',
          title: 'Kaela Inferna',
          body:
            'An AI-born dark electronic pop artist with a fully defined canon — voice, look, and message. Four albums and forty-one tracks, with cinematic visuals and a presence across every major streaming platform.',
          points: [
            '4 albums · 41 tracks',
            'Dark electronic pop with soul',
            'Music videos & Spotify Canvas loops',
            'Streaming on Spotify, Apple Music, YouTube Music',
          ],
        },
        {
          tag: 'Games',
          title: 'CONTRABAND: Edge of the Fold',
          body:
            'A branching space RPG built in HTML5/JavaScript and packaged for Steam. Reactive factions, ghost timelines, real combat, and multiple endings across 300+ narrative scenes.',
          points: [
            'Branching narrative · 300+ scenes',
            '4 endings plus a Walk Away path',
            'Steamworks: achievements & cloud saves',
            'Original score and Blender-authored 3D assets',
          ],
        },
        {
          tag: 'Web',
          title: 'The transmedia network',
          body:
            'A connected set of bilingual sites — the label, the artist, and the game universe — sharing lore, design language, and real-time 3D on the web.',
          points: [
            'martinezaistudios.com — the label',
            'kaelainferna.com — the artist',
            'edgeofthefold.com — the game universe',
            'derolavigne.com — the full portfolio',
          ],
        },
      ],
      stackTitle: 'Tools & platforms',
      stackIntro: 'A modern, mostly locally-run stack — chosen for control, speed, and cinematic quality.',
      stackGroups: [
        {
          title: 'Visual & Video AI',
          tools: ['ComfyUI', 'WAN', 'LTX-Video', 'SDXL', 'Flux', 'RealVis XL', 'Juggernaut XL', 'UltimateSD Upscale', 'FILM VFI', 'Wav2Lip', 'SadTalker'],
        },
        { title: 'Music & Voice', tools: ['Suno', 'ElevenLabs'] },
        { title: '3D & Games', tools: ['Blender', 'HTML5 / JavaScript', 'Electron', 'Steamworks', 'GLB export'] },
        { title: 'Web & Real-time', tools: ['Astro', 'Next.js', 'Three.js / WebGL', 'HTML5 / CSS / JS'] },
        { title: 'Post & Editorial', tools: ['Filmora', '4K upscaling', 'Frame interpolation', 'Color & finishing'] },
        { title: 'Distribution', tools: ['Steam', 'Spotify', 'Apple Music', 'YouTube Music'] },
      ],
      approachTitle: 'Human-directed AI',
      approachBody:
        'AI is the microphone, the synthesizer, the copilot, and the compiler — not the author. Every song, scene, frame, and line is directed and finished by Dero Lavigne. We do not sell "100% generated" novelty or pretend to be a hundred-person studio. We use the best modern tools to move fast, then apply human taste, editing, and intent so the final work carries a real message.',
      approachPoints: [
        'A human writes, directs, and signs off on every deliverable',
        'AI accelerates production — it does not replace judgment',
        'Transparent credits and an honest process',
        'Cinematic quality over volume for its own sake',
      ],
      genresTitle: 'Music we produce',
      genresIntro: 'Original composition and voice across a wide stylistic range.',
      genres: ['Dark electronic pop', 'Cinematic pop', 'R&B', 'Cumbia', 'Reggaetón', 'Emotional & ambient', 'Commercial & ad music', 'Original game scores'],
      deliverablesTitle: 'What you receive',
      deliverablesIntro: 'Release-ready deliverables in the formats modern platforms and stores actually need.',
      deliverables: [
        'Release-ready audio masters for streaming',
        '4K / HDR video and cinematic clips',
        'Vertical short-form for Shorts, Reels, and TikTok',
        '8-second Spotify Canvas loops',
        'Ultra-wide 21:9 and 32:9 key art',
        'Steam store capsules and marketing assets',
        'Optimized GLB 3D assets for the web',
        'Bilingual English / Spanish copy',
      ],
      engagementTitle: 'Ways to work together',
      engagementIntro: 'Flexible engagements sized to your goals and budget.',
      engagementModels: [
        { title: 'Per project', body: 'A defined scope with clear deliverables and timeline — ideal for a single release, site, or campaign.' },
        { title: 'Per release', body: 'Recurring support for artists and devs shipping music, updates, or content on a schedule.' },
        { title: 'Ongoing partnership', body: 'An extension of your team for continuous production across music, video, web, and games.' },
        { title: 'White-label', body: 'Production capacity for other studios and agencies that need cinematic AI output under their own brand.' },
      ],
      serviceAreasTitle: 'Serving Dallas–Fort Worth & beyond',
      serviceAreasBody:
        'Based in Dallas, Texas, we work with clients across the DFW metroplex and the entire state — and remotely with partners worldwide.',
      serviceAreas: ['Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 'Frisco', 'Garland', 'McKinney', 'Denton', 'Richardson', 'Deep Ellum', 'Bishop Arts District'],
      faqExtraItems: [
        { q: 'What does an AI-directed production actually mean?', a: 'A human writes and directs the work; AI tools accelerate production. Dero Lavigne makes every creative decision and finishes every deliverable.' },
        { q: 'Do you work in Spanish?', a: 'Yes. Every deliverable can be produced natively in English, Spanish, or both — ideal for the Texas market.' },
        { q: 'Can you build my website and make it rank?', a: 'Yes. We build fast, SEO-ready sites with structured data and strong Core Web Vitals, and we can add real-time 3D and cinematic motion.' },
        { q: 'Do you offer 3D and WebGL?', a: 'Yes. We author 3D in Blender, optimize GLB assets, and bring them to the web with Three.js / WebGL.' },
        { q: 'What formats do you deliver?', a: 'Streaming-ready masters, 4K/HDR video, vertical short-form, Spotify Canvas loops, ultra-wide key art, and Steam store assets.' },
        { q: 'How fast can you turn work around?', a: 'Our local pipeline enables fast iteration. Timelines depend on scope, but we move quickly without per-render limits.' },
      ],
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
        'Martinez AI Studios handles Steam publishing, store presence, and community. Developer: Dero Lavigne. Publisher: Martinez AI Studios — as credited on every Steam release.',
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
        ['Trade Name', 'Martinez AI Studios'],
        ['Steam Publisher', 'Martinez AI Studios'],
        ['Developer', 'Dero Lavigne'],
        ['Location', 'Dallas, Texas, USA'],
        ['Featured Works', 'Kaela Inferna · Contraband: Edge of the Fold'],
        ['Creator Portfolio', 'derolavigne.com'],
        ['Official Sites', 'kaelainferna.com · edgeofthefold.com · derolavigne.com'],
        ['Steam Presence', 'Martinez AI Studios — Publisher / Curator · Dero Lavigne — Author / Curator'],
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
        {
          q: 'What is The Fold?',
          a: 'The Fold is the universe metaphor behind CONTRABAND and related works — reality that bends, branches, and keeps ghost timelines. Lore hubs live at edgeofthefold.com; the publisher hub is here.',
        },
        {
          q: 'What are Rift branches?',
          a: 'CONTRABAND’s core narrative system: revisit any story moment, split decisions, and keep abandoned paths as ghost timelines. It is designed for replay with consequence, not cosmetic choice menus.',
        },
        {
          q: 'What is the Studio Log?',
          a: 'Our long-form blog at martinezaistudios.com/blog — publisher notes on classic and modern games, indie and AAA craft, AI music, and the ComfyUI/ElevenLabs production stack documented at derolavigne.com.',
        },
        {
          q: 'Which AI tools does Dero Lavigne use?',
          a: 'ComfyUI for visual iteration, ElevenLabs for character voice profiles, language models for outline and dialogue stress-testing under authorial veto, Three.js for web 3D, and DAW workflows for music — all directed by Dero, published by Martinez AI Studios.',
        },
        {
          q: 'How is AI music different from “AI slop”?',
          a: 'Slop is undirected volume. Our releases use AI as a production vessel under Dero Lavigne’s taste — authored lyrics, cut filler, consistent vocal identity for Kaela Inferna, and transparent credit lines. AI-born. Human in message.',
        },
        {
          q: 'What are the Steam Curator pages?',
          a: 'Editorial recommendation feeds: Martinez AI Studios and Dero Lavigne each run one. They highlight games, media, and tools we think deserve attention — not paid placements.',
        },
        {
          q: 'Does Martinez AI Studios accept game submissions?',
          a: 'No open submission portal. The label publishes works created by Dero Lavigne. Studio Log posts explain our taste and standards for press and partners.',
        },
        {
          q: 'How do Kaela Inferna and CONTRABAND connect?',
          a: 'Kaela is a streaming artist and in-game Operations Mode aboard Haven in CONTRABAND — same creative direction by Dero Lavigne, published by Martinez AI Studios. You can enjoy either layer independently or both for transmedia depth.',
        },
        {
          q: 'Where are press assets and fact sheets?',
          a: 'The Press page lists public trade name, publisher, developer, flagship stats, and contact email Dero.Lavigne@gmail.com — include outlet name and deadline for media requests.',
        },
        {
          q: 'Is CONTRABAND a live-service game?',
          a: 'No. It is a finishable branching RPG with 140 Steam achievements and cloud saves — designed for complete playthroughs and Rift replays, not endless season treadmills.',
        },
        {
          q: 'Why Dallas, Texas?',
          a: 'Martinez AI Studios is headquartered in Dallas with global distribution via Steam and streaming. Texas is home base; audience is worldwide.',
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
      copyright: '© Martinez AI Studios. All rights reserved.',
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
      ctaDero: 'Dero Lavigne — Portfolio Completo',
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
      creatorTitle: 'Un solo creador detrás de cada lanzamiento',
      creatorBody:
        'Dero Lavigne es el developer, compositor, escritor y director creativo de todo lo que hay bajo este sello — la música, los juegos, las webs, el 3D, el video y la narrativa. Martinez AI Studios existe para publicar y distribuir ese trabajo al mundo.',
      pipelineTitle: 'Cómo se hace cada obra',
      pipelineIntro:
        'Cada lanzamiento es creado por Dero Lavigne en un pipeline de producción local de alto rendimiento, y luego publicado y distribuido bajo el sello Martinez AI Studios. La IA es una herramienta bajo dirección humana — el mensaje sigue siendo humano.',
      pipelineNote: 'Creado por Dero Lavigne · Publicado y distribuido por Martinez AI Studios',
      pipelineGroups: [
        {
          title: 'Visual y Video con IA',
          items: [
            'Pipelines locales en ComfyUI para personajes, cinemáticas y key art',
            'Modelos de difusión y video (SDXL, WAN, LTX) para imágenes y movimiento',
            'Interpolación de frames y upscaling 4K para un acabado cinematográfico',
            'Pases de talking-head y lip-sync para visuales de personajes',
            'Ensamblado editorial, corte y color en Filmora',
          ],
        },
        {
          title: 'Música y Audio',
          items: [
            'Composición y escritura de canciones con Suno',
            'Voz y narración con ElevenLabs',
            'Catálogo Kaela Inferna — 4 álbumes, 41 pistas',
            'Bandas sonoras originales y scoring cinematográfico',
            'Distribución a Spotify, Apple Music y YouTube Music',
          ],
        },
        {
          title: 'Juegos e Interactivo',
          items: [
            'CONTRABAND: Edge of the Fold — RPG espacial ramificado',
            'Motor HTML5 / JavaScript, empaquetado Electron para Steam',
            'Steamworks: logros, cloud saves, presencia en store',
            'Assets 3D creados en Blender y exportados como GLB',
          ],
        },
        {
          title: 'Web y Marca',
          items: [
            'Sitios bilingües con Astro, Next.js y HTML5',
            '3D en tiempo real en la web con Three.js / WebGL',
            'SEO técnico, datos estructurados y performance',
            'Lore hubs transmedia y sister sites interconectadas',
          ],
        },
      ],
      catalogTitle: 'Catálogo creativo completo',
      catalogBody:
        'Dero Lavigne desarrolla música, juegos, webs y narrativa transmedia. Martinez AI Studios publica y distribuye esas obras. Para el portfolio completo y siempre actualizado de todo lo creado — visitá derolavigne.com.',
      catalogCta: 'Ver catálogo completo en derolavigne.com',
      servicesTitle: 'Producción creativa, de principio a fin',
      servicesIntro:
        'Martinez AI Studios es un estudio de producción creativa y sello con base en Dallas, Texas. Cada proyecto es creado y dirigido por Dero Lavigne —desde el primer concepto hasta el máster final— sobre un pipeline de IA moderno y dirigido por humanos. Llevamos música, video, videojuegos y sitios web de la idea a publicado, distribuido y en vivo.',
      services: [
        {
          title: 'Producción de Música y Audio con IA',
          body:
            'Canciones, bandas sonoras y voces originales listas para lanzamiento. Escribimos, producimos y masterizamos música en electrónica oscura, pop, R&B, cumbia, reggaetón y scoring cinematográfico — y la distribuimos a todas las plataformas.',
          items: [
            'Composición, letra y producción original',
            'Voces de personaje y de marca con ElevenLabs',
            'Scoring para juegos y cine, stingers y diseño sonoro',
            'Mezcla, masterización y entregables listos para publicar',
            'Distribución a Spotify, Apple Music y YouTube Music',
          ],
        },
        {
          title: 'Video y Cinemáticas con IA',
          body:
            'Clips cinematográficos, videoclips, tráilers y contenido social producidos en un pipeline local — control creativo total, sin límites por render.',
          items: [
            'Videoclips, visuales de letra y loops para Spotify Canvas',
            'Tráilers de juegos, teasers y cápsulas de tienda',
            'Contenido con talking-head y lip-sync',
            'Reescalado 4K, interpolación de frames y color',
            'Ensamblaje editorial y finishing en Filmora',
          ],
        },
        {
          title: 'Desarrollo de Videojuegos y Publicación en Steam',
          body:
            'Desde RPG narrativos ramificados hasta lanzamientos listos para tienda. Diseñamos, construimos y publicamos juegos de PC, y gestionamos Steam de punta a punta.',
          items: [
            'Diseño narrativo, de sistemas y de jugabilidad',
            'Motores en HTML5 / JavaScript, empaquetado en Electron',
            'Steamworks: logros, guardado en la nube, ficha de tienda',
            'Arte de tienda, cápsulas y assets de marketing',
            'Lanzamiento, comunidad y soporte post-lanzamiento',
          ],
        },
        {
          title: 'Desarrollo Web y 3D en Tiempo Real',
          body:
            'Sitios web rápidos, bilingües y optimizados para SEO, con movimiento cinematográfico y 3D en tiempo real — hechos para posicionar en Dallas y convertir visitantes en clientes.',
          items: [
            'Sitios de marketing, landing pages y web apps',
            '3D en tiempo real y WebGL con Three.js',
            'SEO técnico, datos estructurados y Core Web Vitals',
            'Builds bilingües en inglés / español',
            'Analítica, tracking y optimización de rendimiento',
          ],
        },
        {
          title: 'Marca, Personajes e Identidad Visual',
          body:
            'Logos, personajes, key art y sistemas visuales completos — incluyendo artistas nacidos de la IA y personajes de marca consistentes en cada canal.',
          items: [
            'Logos, wordmarks y sistemas de marca',
            'Diseño de personajes e identidades IA consistentes',
            'Portadas de álbum, pósters y arte social',
            'Assets de perfil para Steam y streaming',
            'Key art ultra-wide 21:9 y 32:9',
          ],
        },
        {
          title: 'Transmedia y Distribución',
          body:
            'Una historia a través de música, juegos, video y web — lanzada y distribuida bajo un solo sello, en inglés y español.',
          items: [
            'Estrategia de lanzamiento multiplataforma',
            'Hubs de lore y sitios hermanos interconectados',
            'Publicación y calendarización multicanal',
            'Alcance de audiencia bilingüe',
            'Créditos de IA transparentes y sin conflictos de derechos',
          ],
        },
      ],
      processTitle: 'Cómo trabajamos',
      processIntro: 'Un camino claro y colaborativo, desde la primera llamada hasta el lanzamiento público.',
      processSteps: [
        { title: 'Descubrimiento', body: 'Entendemos tus objetivos, audiencia, presupuesto y tiempos antes de producir nada.' },
        { title: 'Dirección creativa', body: 'Dero Lavigne define el concepto, las referencias y la dirección para que todo quede en línea con la marca.' },
        { title: 'Producción', body: 'Música, video, arte, código o sistemas de juego se construyen en nuestro pipeline local de alto rendimiento, con iteración rápida.' },
        { title: 'Publicación', body: 'Preparamos másteres listos para lanzar, fichas de tienda y metadatos bajo el sello Martinez AI Studios.' },
        { title: 'Distribución y soporte', body: 'Publicamos en Steam, streaming y la web, y damos soporte al lanzamiento y a todo lo que sigue.' },
      ],
      whyTitle: 'Por qué Martinez AI Studios',
      whyIntro: 'Un estudio pensado para cómo se hace realmente el contenido en 2026 — rápido, transparente y dirigido por humanos.',
      whyPoints: [
        { title: 'De principio a fin, bajo un techo', body: 'Música, video, juegos y web en un solo estudio. Sin traspasos ni proveedores desalineados.' },
        { title: 'IA dirigida por humanos', body: 'La IA es una herramienta. Dero Lavigne dirige cada decisión creativa — el mensaje sigue siendo humano.' },
        { title: 'Pipeline local propio', body: 'Una workstation de alto rendimiento y modelos locales significan velocidad, privacidad y cero límites por render.' },
        { title: 'Bilingüe por defecto', body: 'Inglés y español nativos en cada entregable — hecho para Texas y más allá.' },
        { title: 'Transparente y sin conflictos de derechos', body: 'Créditos claros y un proceso honesto. Sin afirmaciones de "100% generado" ni ficción de equipos AAA.' },
        { title: 'Entrega a nivel publisher', body: 'No solo creamos — publicamos y distribuimos en Steam y plataformas de streaming.' },
      ],
      industriesTitle: 'Con quién trabajamos',
      industriesIntro: 'Artistas, estudios y negocios que quieren contenido destacado sin una agencia inflada.',
      industries: [
        { title: 'Músicos y sellos', body: 'Lanzamientos, bandas sonoras y visuales listos para streaming y redes.' },
        { title: 'Desarrolladores indie', body: 'Diseño, desarrollo y publicación en Steam para títulos de PC.' },
        { title: 'Pequeñas y medianas empresas', body: 'Sitios web que posicionan en Dallas y convierten visitantes en clientes.' },
        { title: 'Creadores de contenido y streamers', body: 'Arte de canal, intros, música y video de formato corto.' },
        { title: 'Startups y marcas', body: 'Identidad, key art y campañas de lanzamiento en todos los canales.' },
        { title: 'ONGs y organizaciones locales', body: 'Sitios y contenido bilingüe que llegan a toda la comunidad.' },
      ],
      localTitle: 'Con base en Dallas, Texas — trabajando en todo el mundo',
      localBody:
        'Martinez AI Studios opera desde Dallas, Texas (DFW), atendiendo clientes en todo Texas y en el mundo. Ya seas un músico de Dallas–Fort Worth que necesita un lanzamiento, un desarrollador indie que va a Steam, o un negocio local que necesita un sitio que posicione y convierta, llevamos producción cinematográfica acelerada con IA a tu proyecto — en inglés y español.',
      localPoints: [
        'Dallas–Fort Worth (DFW) y todo Texas',
        'Colaboración remota en todo el mundo',
        'Inglés y español nativos',
        'Entrega rápida con un pipeline de producción local',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqIntro: 'Respuestas rápidas para creadores, negocios y socios.',
      faqItems: [
        { q: '¿Son un estudio de contratación o un sello?', a: 'Ambos. Martinez AI Studios publica sus propias obras (Kaela Inferna, CONTRABAND) y produce música, video, juegos y sitios web para clientes.' },
        { q: '¿Dónde están ubicados?', a: 'Dallas, Texas, EE. UU. (DFW). Trabajamos con clientes en todo Texas y el mundo, en inglés y español.' },
        { q: '¿Realmente usan IA para todo?', a: 'La IA es una herramienta bajo dirección humana. Dero Lavigne escribe, dirige y finaliza cada proyecto — el mensaje sigue siendo humano.' },
        { q: '¿Pueden distribuir mi música?', a: 'Sí. Entregamos másteres listos para lanzar y distribuimos a Spotify, Apple Music y YouTube Music.' },
        { q: '¿Pueden publicar mi juego en Steam?', a: 'Sí. Gestionamos la configuración de Steamworks, la ficha de tienda, logros, guardado en la nube y el lanzamiento.' },
        { q: '¿Cómo empezamos?', a: 'Escríbenos desde la página de contacto con tus objetivos y tiempos, y trazamos el camino más rápido al lanzamiento.' },
      ],
      ctaBandTitle: '¿Tienes un proyecto en mente?',
      ctaBandBody: 'Música, video, un juego o un sitio web — construyamos algo que valga la pena publicar.',
      ctaBandPrimary: 'Iniciar un proyecto',
      ctaBandSecondary: 'Ver el portafolio completo',
      statsTitle: 'El sello en números',
      statsIntro: 'Un vistazo a lo que ya se ha publicado bajo Martinez AI Studios.',
      stats: [
        { value: '2', label: 'Marcas propias publicadas' },
        { value: '4', label: 'Álbumes lanzados' },
        { value: '41', label: 'Pistas distribuidas' },
        { value: '300+', label: 'Escenas de juego escritas' },
        { value: '4+1', label: 'Finales en CONTRABAND' },
        { value: 'EN/ES', label: 'Salida bilingüe nativa' },
      ],
      worksDeepTitle: 'Trabajo seleccionado',
      worksDeepIntro:
        'Dos IPs insignia y una red conectada de sitios — todos creados por Dero Lavigne y publicados bajo Martinez AI Studios.',
      worksDeep: [
        {
          tag: 'Música',
          title: 'Kaela Inferna',
          body:
            'Una artista de dark electronic pop nacida de la IA, con un canon totalmente definido — voz, imagen y mensaje. Cuatro álbumes y cuarenta y una pistas, con visuales cinematográficos y presencia en todas las plataformas de streaming.',
          points: [
            '4 álbumes · 41 pistas',
            'Dark electronic pop con alma',
            'Videoclips y loops para Spotify Canvas',
            'Streaming en Spotify, Apple Music, YouTube Music',
          ],
        },
        {
          tag: 'Juegos',
          title: 'CONTRABAND: Edge of the Fold',
          body:
            'Un RPG espacial ramificado hecho en HTML5/JavaScript y empaquetado para Steam. Facciones reactivas, líneas temporales fantasma, combate real y múltiples finales a lo largo de más de 300 escenas narrativas.',
          points: [
            'Narrativa ramificada · 300+ escenas',
            '4 finales más un camino de "Walk Away"',
            'Steamworks: logros y guardado en la nube',
            'Banda sonora original y assets 3D en Blender',
          ],
        },
        {
          tag: 'Web',
          title: 'La red transmedia',
          body:
            'Un conjunto conectado de sitios bilingües — el sello, la artista y el universo del juego — que comparten lore, lenguaje de diseño y 3D en tiempo real en la web.',
          points: [
            'martinezaistudios.com — el sello',
            'kaelainferna.com — la artista',
            'edgeofthefold.com — el universo del juego',
            'derolavigne.com — el portafolio completo',
          ],
        },
      ],
      stackTitle: 'Herramientas y plataformas',
      stackIntro: 'Un stack moderno, mayormente local — elegido por control, velocidad y calidad cinematográfica.',
      stackGroups: [
        {
          title: 'IA Visual y Video',
          tools: ['ComfyUI', 'WAN', 'LTX-Video', 'SDXL', 'Flux', 'RealVis XL', 'Juggernaut XL', 'UltimateSD Upscale', 'FILM VFI', 'Wav2Lip', 'SadTalker'],
        },
        { title: 'Música y Voz', tools: ['Suno', 'ElevenLabs'] },
        { title: '3D y Juegos', tools: ['Blender', 'HTML5 / JavaScript', 'Electron', 'Steamworks', 'Exportación GLB'] },
        { title: 'Web y Tiempo Real', tools: ['Astro', 'Next.js', 'Three.js / WebGL', 'HTML5 / CSS / JS'] },
        { title: 'Post y Edición', tools: ['Filmora', 'Reescalado 4K', 'Interpolación de frames', 'Color y finishing'] },
        { title: 'Distribución', tools: ['Steam', 'Spotify', 'Apple Music', 'YouTube Music'] },
      ],
      approachTitle: 'IA dirigida por humanos',
      approachBody:
        'La IA es el micrófono, el sintetizador, el copiloto y el compilador — no el autor. Cada canción, escena, frame y línea es dirigida y finalizada por Dero Lavigne. No vendemos la novedad del "100% generado" ni fingimos ser un estudio de cien personas. Usamos las mejores herramientas modernas para ir rápido, y luego aplicamos criterio, edición e intención humana para que la obra final lleve un mensaje real.',
      approachPoints: [
        'Un humano escribe, dirige y aprueba cada entregable',
        'La IA acelera la producción — no reemplaza el criterio',
        'Créditos transparentes y un proceso honesto',
        'Calidad cinematográfica por encima del volumen por el volumen',
      ],
      genresTitle: 'Música que producimos',
      genresIntro: 'Composición y voz original en un amplio rango estilístico.',
      genres: ['Dark electronic pop', 'Pop cinematográfico', 'R&B', 'Cumbia', 'Reggaetón', 'Emocional y ambient', 'Música comercial y publicitaria', 'Bandas sonoras originales'],
      deliverablesTitle: 'Lo que recibes',
      deliverablesIntro: 'Entregables listos para lanzar, en los formatos que las plataformas y tiendas realmente necesitan.',
      deliverables: [
        'Másteres de audio listos para streaming',
        'Video 4K / HDR y clips cinematográficos',
        'Formato vertical para Shorts, Reels y TikTok',
        'Loops de 8 segundos para Spotify Canvas',
        'Key art ultra-wide 21:9 y 32:9',
        'Cápsulas de tienda y assets de marketing para Steam',
        'Assets 3D GLB optimizados para la web',
        'Copy bilingüe en inglés / español',
      ],
      engagementTitle: 'Formas de trabajar juntos',
      engagementIntro: 'Colaboraciones flexibles según tus objetivos y presupuesto.',
      engagementModels: [
        { title: 'Por proyecto', body: 'Un alcance definido con entregables y tiempos claros — ideal para un lanzamiento, sitio o campaña puntual.' },
        { title: 'Por lanzamiento', body: 'Soporte recurrente para artistas y devs que publican música, actualizaciones o contenido de forma periódica.' },
        { title: 'Alianza continua', body: 'Una extensión de tu equipo para producción continua en música, video, web y juegos.' },
        { title: 'White-label', body: 'Capacidad de producción para otros estudios y agencias que necesitan salida cinematográfica con IA bajo su propia marca.' },
      ],
      serviceAreasTitle: 'Atendiendo a Dallas–Fort Worth y más allá',
      serviceAreasBody:
        'Con base en Dallas, Texas, trabajamos con clientes en todo el metroplex DFW y en todo el estado — y de forma remota con socios en el mundo.',
      serviceAreas: ['Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 'Frisco', 'Garland', 'McKinney', 'Denton', 'Richardson', 'Deep Ellum', 'Bishop Arts District'],
      faqExtraItems: [
        { q: '¿Qué significa realmente una producción dirigida por IA?', a: 'Un humano escribe y dirige la obra; las herramientas de IA aceleran la producción. Dero Lavigne toma cada decisión creativa y finaliza cada entregable.' },
        { q: '¿Trabajan en español?', a: 'Sí. Cada entregable puede producirse de forma nativa en inglés, español o ambos — ideal para el mercado de Texas.' },
        { q: '¿Pueden construir mi sitio web y hacer que posicione?', a: 'Sí. Construimos sitios rápidos y optimizados para SEO, con datos estructurados y buenos Core Web Vitals, y podemos añadir 3D en tiempo real y movimiento cinematográfico.' },
        { q: '¿Ofrecen 3D y WebGL?', a: 'Sí. Creamos 3D en Blender, optimizamos assets GLB y los llevamos a la web con Three.js / WebGL.' },
        { q: '¿Qué formatos entregan?', a: 'Másteres listos para streaming, video 4K/HDR, formato vertical, loops de Spotify Canvas, key art ultra-wide y assets de tienda de Steam.' },
        { q: '¿Qué tan rápido pueden entregar?', a: 'Nuestro pipeline local permite iteración rápida. Los tiempos dependen del alcance, pero avanzamos rápido y sin límites por render.' },
      ],
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
        'Martinez AI Studios gestiona publicación Steam, store y comunidad. Developer: Dero Lavigne. Publisher: Martinez AI Studios — como figura en cada release de Steam.',
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
        ['Developer', 'Dero Lavigne'],
        ['Ubicación', 'Dallas, Texas, EE.UU.'],
        ['Obras destacadas', 'Kaela Inferna · Contraband: Edge of the Fold'],
        ['Portfolio del creador', 'derolavigne.com'],
        ['Sitios oficiales', 'kaelainferna.com · edgeofthefold.com · derolavigne.com'],
        ['Presencia en Steam', 'Martinez AI Studios — Publisher / Curator · Dero Lavigne — Author / Curator'],
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
        {
          q: '¿Qué es el Pliegue / The Fold?',
          a: 'El Pliegue es la metáfora del universo detrás de CONTRABAND — realidad que se dobla, ramifica y guarda timelines fantasma. Lore en edgeofthefold.com; hub del publisher aquí.',
        },
        {
          q: '¿Qué son los Rift branches?',
          a: 'Sistema narrativo central de CONTRABAND: revisita cualquier momento, bifurca decisiones y mantiene rutas abandonadas como timelines fantasma. Diseñado para replay con consecuencia.',
        },
        {
          q: '¿Qué es el Studio Log?',
          a: 'Blog extensivo en martinezaistudios.com/blog — notas del publisher sobre juegos clásicos y modernos, craft indie y AAA, música IA y stack ComfyUI/ElevenLabs documentado en derolavigne.com.',
        },
        {
          q: '¿Qué herramientas IA usa Dero Lavigne?',
          a: 'ComfyUI para iteración visual, ElevenLabs para perfiles de voz, modelos de lenguaje para outlines y stress-test de diálogo bajo veto autoral, Three.js para 3D web, y workflows DAW para música — dirigido por Dero, publicado por Martinez AI Studios.',
        },
        {
          q: '¿En qué se diferencia la música IA del «slop»?',
          a: 'El slop es volumen sin dirección. Nuestros releases usan IA como vessel bajo el gusto de Dero Lavigne — letras authored, filler cortado, identidad vocal consistente para Kaela. Nacido de IA. Humano en el mensaje.',
        },
        {
          q: '¿Qué son las páginas Steam Curator?',
          a: 'Feeds editoriales de recomendación: Martinez AI Studios y Dero Lavigne tienen uno cada uno. Destacan juegos, media y herramientas — no placements pagados.',
        },
        {
          q: '¿Martinez AI Studios acepta submissions de juegos?',
          a: 'No hay portal abierto. El sello publica obras creadas por Dero Lavigne. Posts del Studio Log explican gusto y estándares para prensa y partners.',
        },
        {
          q: '¿Cómo se conectan Kaela Inferna y CONTRABAND?',
          a: 'Kaela es artista streaming y Operations Mode in-game en Haven en CONTRABAND — misma dirección creativa de Dero Lavigne, publicada por Martinez AI Studios. Puedes disfrutar cada capa por separado o ambas.',
        },
        {
          q: '¿Dónde están assets de prensa y fact sheets?',
          a: 'La página Press lista nombre comercial, publisher, developer, stats flagship y email Dero.Lavigne@gmail.com — incluye medio y deadline para solicitudes.',
        },
        {
          q: '¿CONTRABAND es juego live-service?',
          a: 'No. Es RPG ramificado terminable con 140 logros Steam y cloud saves — diseñado para partidas completas y replays del Rift, no temporadas infinitas.',
        },
        {
          q: '¿Por qué Dallas, Texas?',
          a: 'Martinez AI Studios tiene sede en Dallas con distribución global vía Steam y streaming. Texas es base del sello; la audiencia es mundial.',
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
      copyright: '© Martinez AI Studios. Todos los derechos reservados.',
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
