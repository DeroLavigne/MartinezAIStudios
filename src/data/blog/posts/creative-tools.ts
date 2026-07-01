import type { BlogPost } from '../types';

export const creativeToolsPost: BlogPost = {
  slug: 'creative-tools-comfyui-elevenlabs-and-the-fold-stack',
  date: '2025-07-13',
  category: 'technology',
  en: {
    title: 'Creative Tools — ComfyUI, ElevenLabs, Three.js, and the Fold Production Stack',
    description:
      'The honest toolchain behind works published by Martinez AI Studios — documented at derolavigne.com, summarized here for press and collaborators.',
    excerpt:
      'Tools do not replace authorship. They replace excuses for not iterating — when a human director owns the graph, the prompt, and the cut.',
    sections: [
      {
        heading: 'Two sites, one pipeline',
        paragraphs: [
          'derolavigne.com is where Dero Lavigne documents experiments, graphs, and work-in-progress craft. martinezaistudios.com is where finished works appear as published releases — store pages, label copy, press facts. This split is intentional: creators need a messy workshop; publishers need a clean storefront. The Studio Log bridges them for readers who want technical depth without hunting through both sites blindly.',
        ],
      },
      {
        heading: 'ComfyUI — visual iteration under author control',
        paragraphs: [
          'ComfyUI node graphs let Dero Lavigne batch visual exploration — key art directions, UI mood boards, marketing frames — with reproducible workflows instead of one-off lottery prompts. The point is not infinite images; it is comparable iterations you can reject quickly. Published store capsules and web hero assets for the Fold universe go through human selection: composition, readability at thumbnail size, color harmony with the cyan-gold Martinez AI Studios palette.',
          'We do not ship raw diffusion output as final art when it fails legibility tests. ComfyUI is a sketch engine with memory, not an art director.',
        ],
      },
      {
        heading: 'Language models — outlines, stress tests, localization assists',
        paragraphs: [
          'Large language models assist outline generation, dialogue stress-testing, and bilingual copy drafts for EN/ES sites. Every line that reaches CONTRABAND or public web copy passes authorial veto. Models suggest; Dero Lavigne decides. This matches the Technology page commitment: no “ChatGPT powered” marketing badge — just transparent augmentation.',
          'Branching narrative especially benefits from mechanical replay: models help find dead-end branches, repetitive barks, and faction tone drift before players do.',
        ],
      },
      {
        heading: 'ElevenLabs — voice profiles as character infrastructure',
        paragraphs: [
          'ElevenLabs profiles encode vocal identity for Kaela, crew, factions, and UI prompts. Profiles are tuned for headphones and laptop speakers — how most players actually hear us. Martinez AI Studios publishes games with substantial line counts; recording every variant in a traditional booth is not always viable for a focused team. Synthetic voices under direction let us ship performance consistency while keeping budget aligned with indie reality.',
          'Music and dialogue pipelines stay separate. A character voice is not a singing voice unless the story demands it — Kaela’s albums follow their own production chain.',
        ],
      },
      {
        heading: 'Three.js, web graphics, and the home hero',
        paragraphs: [
          'Real-time 3D on the web powers lore sites, interactive presentations, and the Martinez AI Studios home hero GLB — slow continuous rotation, premium lighting, optimized mesh without destroying silhouette readability. Three.js integration shares code patterns with other Dero Lavigne web experiments documented on derolavigne.com.',
          'GLB assets are compressed for load performance while preserving material response players expect from a label that cares about first impressions. Technical SEO means nothing if the hero stutters on first visit.',
        ],
      },
      {
        heading: 'Audio tools — reactive layers and OST export',
        paragraphs: [
          'DAW workflows, stem exports, and in-engine audio triggers cooperate for CONTRABAND. Combat intensity, faction presence, and Rift state can influence mix layers — detailed further on the Music page. AI-assisted mastering and sound-design drafts follow the same rule as visuals: accelerate iteration, not replace ears.',
        ],
      },
      {
        heading: 'Bilingual content systems',
        paragraphs: [
          'Native EN/ES pipelines live in the site architecture you are reading now — translations.ts, localized routes, hreflang alternates. The same discipline applies to in-game text and Steam store copy: not machine-translate once and forget, but maintain parallel intent in both languages. Martinez AI Studios is Texas-based with global storefronts; language parity is publishing hygiene.',
        ],
      },
      {
        heading: 'What we document publicly versus what stays internal',
        paragraphs: [
          'Graphs, prompts, and experiment logs that could mislead competitors about unfinished features stay in the workshop. Principles, tool names, and ethical boundaries ship publicly so press does not have to guess. Start at derolavigne.com for living documentation; return here for what is actually released — Kaela Inferna, CONTRABAND App 4901100, and Steam groups and curator pages for both label and author.',
        ],
      },
    ],
  },
  es: {
    title: 'Herramientas Creativas — ComfyUI, ElevenLabs, Three.js y el Stack del Pliegue',
    description:
      'Toolchain honesto detrás de obras publicadas por Martinez AI Studios — documentado en derolavigne.com, resumido aquí para prensa y colaboradores.',
    excerpt:
      'Las herramientas no reemplazan autoría. Reemplazan excusas para no iterar — cuando un director humano posee el grafo, el prompt y el corte.',
    sections: [
      {
        heading: 'Dos sitios, un pipeline',
        paragraphs: [
          'derolavigne.com es donde Dero Lavigne documenta experimentos, grafos y craft en progreso. martinezaistudios.com es donde obras terminadas aparecen como releases — store pages, copy de sello, datos de prensa. El split es intencional: creadores necesitan taller desordenado; publishers necesitan vitrina limpia. El Studio Log conecta ambos para lectores que quieren profundidad técnica.',
        ],
      },
      {
        heading: 'ComfyUI — iteración visual bajo control autoral',
        paragraphs: [
          'Grafos ComfyUI permiten exploración visual por lotes — direcciones de key art, mood boards UI, frames de marketing — con workflows reproducibles. No buscamos imágenes infinitas; buscamos iteraciones comparables para rechazar rápido. Assets finales pasan selección humana: composición, legibilidad en thumbnail, armonía con paleta cyan-oro de Martinez AI Studios.',
          'No lanzamos output crudo de diffusion como arte final si falla legibilidad. ComfyUI es motor de sketch con memoria, no director de arte.',
        ],
      },
      {
        heading: 'Modelos de lenguaje — outlines, stress tests, localización',
        paragraphs: [
          'LLM asisten generación de outlines, stress-test de diálogo y borradores bilingües EN/ES. Cada línea en CONTRABAND o web pública pasa veto autoral. Modelos sugieren; Dero Lavigne decide. Sin badge marketing «powered by ChatGPT» — solo augmentación transparente.',
          'Narrativa ramificada se beneficia de replay mecánico: modelos ayudan a encontrar ramas muertas y deriva de tono antes que jugadores.',
        ],
      },
      {
        heading: 'ElevenLabs — perfiles de voz como infraestructura',
        paragraphs: [
          'Perfiles ElevenLabs codifican identidad vocal para Kaela, tripulación, facciones y prompts UI — afinados para auriculares y altavoces de portátil. Publicamos juegos con line counts sustanciales; grabar cada variante en booth no siempre es viable. Voces sintéticas bajo dirección permiten consistencia de performance con presupuesto indie.',
          'Pipelines de música y diálogo permanecen separados salvo que la historia lo exija.',
        ],
      },
      {
        heading: 'Three.js, gráficos web y el hero de home',
        paragraphs: [
          '3D realtime en web impulsa lore sites, presentaciones interactivas y el GLB hero de martinezaistudios.com — rotación lenta, iluminación premium, mesh optimizado sin destruir silueta. Patrones compartidos con experimentos web en derolavigne.com.',
          'Assets GLB se comprimen por performance sin perder respuesta de material. SEO técnico no sirve si el hero tartamudea en primera visita.',
        ],
      },
      {
        heading: 'Herramientas de audio — capas reactivas y export OST',
        paragraphs: [
          'Workflows DAW, exports de stems y triggers in-engine cooperan en CONTRABAND. Intensidad de combate, facciones y estado del Rift influyen capas — detallado en Music. Mastering asistido sigue la regla visual: acelerar iteración, no reemplazar oídos.',
        ],
      },
      {
        heading: 'Sistemas de contenido bilingüe',
        paragraphs: [
          'Pipelines nativos EN/ES viven en la arquitectura actual — translations.ts, rutas localizadas, hreflang. Misma disciplina en texto in-game y copy Steam: no traducir una vez y olvidar, sino mantener intención paralela. Martinez AI Studios está en Texas con storefronts globales; paridad de idioma es higiene de publishing.',
        ],
      },
      {
        heading: 'Qué documentamos público versus interno',
        paragraphs: [
          'Grafos y logs que confundirían sobre features unfinished permanecen en taller. Principios, nombres de herramientas y límites éticos se publican para que prensa no adivine. Empieza en derolavigne.com; vuelve aquí por lo released — Kaela Inferna, CONTRABAND App 4901100, y grupos Steam y curator pages de sello y autor.',
        ],
      },
    ],
  },
};
