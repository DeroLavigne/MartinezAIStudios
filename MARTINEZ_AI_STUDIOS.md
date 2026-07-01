# Martinez AI Studios — Brief de marca + PROMPT para sitio web

> **USO PRINCIPAL:** Entrega este archivo completo a otra sesión de Cursor (o a un diseñador/dev)
> como **fuente de verdad** para construir el sitio oficial de la marca.
>
> **Dominio objetivo sugerido:** `martinezaistudios.com` (o subdominio acordado)  
> **Autor humano:** Dero Lavigne · Dallas, Texas  
> **Nota privacidad:** datos legales/administrativos de Steamworks no van en la web pública — solo trade name y publisher.  
> **Última revisión:** 2026-06-28

---

## ⚡ PROMPT LISTO PARA COPIAR (pegar en la otra ventana de Cursor)

Copia **desde aquí hasta la línea «FIN DEL PROMPT»** y adjunta este archivo completo:

```
Quiero construir el sitio web oficial de MARTINEZ AI STUDIOS — la marca, el sello,
la productora y el estudio donde nace todo el ecosistema creativo (no el portfolio
personal de Dero Lavigne; eso ya existe en derolavigne.com).

OBJETIVO
- Sitio ÉPICO, cargado de VFX y motion: debe IMPRESIONAR en los primeros 3 segundos.
- Sensación: sello premium de entretenimiento transmedia (música IA + juegos Steam +
  narrativa ramificada), no landing genérica de startup tech.
- Mucho contenido BIEN ORGANIZADO para SEO (Google): páginas claras, textos largos
  útiles, FAQ, glosario, fichas de obras, EN + ES nativos.
- Este sitio es EL HUB de la marca: desde aquí se enlaza a Kaela, CONTRABAND,
  Steam, comunidad y al autor — pero la identidad central es Martinez AI Studios.

LEE PRIMERO
- El archivo docs/MARTINEZ_AI_STUDIOS.md (este documento) es canon. No inventes
  roles, cifras ni relaciones que contradigan ese dossier.

IDENTIDAD VISUAL (logo Steam Group ya existente)
- Fondo negro, logotipo geométrico blanco: letra «M» estilizada.
- Texto: MARTINEZ (mayúsculas) + AI STUDIOS debajo.
- Paleta sugerida: negro profundo, blanco, acentos violeta/oro/cian (coherente con
  CONTRABAND y Kaela Inferna — dark electronic, space narrative).
- Tipografía: futurista pero legible; nada Comic Sans / nada corporate azul SaaS.

VFX / HERO (obligatorio)
- Hero fullscreen con al menos uno de:
  · partículas / nebula / «fold» (pliegue de realidad) animado en canvas o WebGL ligero;
  · scanlines o grain sutil + bloom en acentos;
  · reveal del logo M con glitch corto que estabiliza en limpio;
  · parallax en scroll hacia secciones de obras.
- Respetar prefers-reduced-motion (versión estática accesible).
- Performance: LCP < 2.5s en desktop; lazy-load de vídeos pesados.

ESTRUCTURA MÍNIMA (sitemap)
1. Home — manifiesto + obras destacadas + CTAs
2. Studio — quiénes somos, filosofía, Texas, IA como vessel
3. Works / Obras — grid: Kaela Inferna, CONTRABAND, futuros proyectos
4. Kaela Inferna — embed/link a kaelainferna.com + contexto transmedia
5. CONTRABAND — embed/link a edgeofthefold.com + Steam wishlist
6. Music & Audio — sello, OST 21 tracks, pipeline voces/IA
7. Games — publishing Steam, logros, narrativa ramificada
8. Technology — stack honesto (sin humo): IA dirigida, ElevenLabs, Three.js, etc.
9. Press / Prensa — kit, cifras verificables, contacto
10. FAQ — SEO long-tail
11. Contact — WhatsApp/email, Dallas TX, grupos Steam
12. Legal — privacy placeholder si aplica

BILINGÜE
- Rutas /en/... y /es/... (o conmutador global). Mismo peso en ambos idiomas.
- hreflang, meta title/description por idioma.

SEO (obligatorio)
- JSON-LD: Organization, WebSite, VideoGame (CONTRABAND), MusicGroup (Kaela).
- Meta og:image, twitter:card, canonical.
- Títulos únicos por página; H1 único; interlinking fuerte entre obras.
- Keywords naturales: Martinez AI Studios, Kaela Inferna, CONTRABAND Edge of the Fold,
  branching narrative game, AI music label, Steam publisher, Dallas game studio, etc.
- Blog/noticias opcional: «Studio log» enlazable a devlog (futuro).

ENLACES OFICIALES (usar tal cual)
- Kaela: https://www.kaelainferna.com/
- Juego: https://edgeofthefold.com/
- Autor: https://derolavigne.com/
- Steam grupo Martinez AI Studios: https://steamcommunity.com/groups/MartinezAIStudios
- Steam grupo Dero Lavigne: https://steamcommunity.com/groups/DeroLavigne
- Steam App CONTRABAND: App ID 4901100

REGLAS DE MARCA (NO ROMPER)
- Developer del juego = Dero Lavigne. Publisher = Martinez AI Studios.
- Kaela Inferna = artista real (streaming) Y personaje IA en el juego (transmedia).
- NO decir «web game gratis» — la build browser fue retirada; Steam es el destino PC.
- NO «equipo AAA» ni «100% generado sin humanos» — mensaje: AI-born, human in message.
- NO confundir Martinez AI Studios con Dero Lavigne personal site.

ENTREGABLES
- Sitio estático o SSR ligero (Astro/Next/Vite+HTML — tú eliges, prioriza SEO y perf).
- Componentes reutilizables, assets en /public, README de deploy.
- Contenido inicial poblado con textos de este dossier (no lorem ipsum).
```

**FIN DEL PROMPT**

---

## A. Qué es este sitio (vs otros sitios del ecosistema)

| Sitio | Rol | Este sitio NO debe ser… |
|-------|-----|-------------------------|
| **martinezaistudios.com** *(nuevo)* | **Hub de la marca / sello / productora** | Portfolio personal |
| [derolavigne.com](https://derolavigne.com/) | Estudio humano, CV, «Building worlds from scratch» | Duplicado del hub de marca |
| [kaelainferna.com](https://www.kaelainferna.com/) | Artista, discografía, letras, streaming | Reemplazo — solo enlazar |
| [edgeofthefold.com](https://edgeofthefold.com/) | Landing del juego, wiki, OST previews | Reemplazo — solo enlazar |

**Martinez AI Studios** es la **casa editorial**: publica el juego en Steam, presenta a Kaela, agrupa música + narrativa + IA bajo una identidad. El sitio nuevo debe sentirse como **visitas el estudio/sello**, no la página de un freelancer.

---

## B. Identidad en una frase (para hero y meta description)

**EN:**  
*Martinez AI Studios — Texas-based creative label publishing AI-augmented music and branching narrative games. AI-born. Human in message.*

**ES:**  
*Martinez AI Studios — sello creativo en Texas. Publicamos música y videojuegos narrativos con IA al servicio del mensaje humano. Nacido de IA. Humano en el mensaje.*

---

## C. Mapa del ecosistema (canon — no inventar)

```
                    ┌─────────────────────────────────────┐
                    │         MARTINEZ AI STUDIOS         │
                    │  sello · publisher · productora     │
                    │  ← ESTE SITIO WEB ES SU CASA        │
                    └──────────────┬──────────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           ▼                       ▼                       ▼
   ┌───────────────┐      ┌───────────────┐      ┌─────────────────┐
   │  Kaela Inferna │      │  CONTRABAND   │      │  Dero Lavigne   │
   │  artista +     │      │  Edge of the  │      │  developer      │
   │  personaje IA  │      │  Fold (Steam) │      │  (autor humano) │
   └───────────────┘      └───────────────┘      └─────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    │ Martinez AI Studios (sello) │
                    │ Publisher · Steam · marca   │
                    └─────────────────────────────┘
```

### Tabla de roles

| Entidad | Rol | URL / ID |
|---------|-----|----------|
| **Martinez AI Studios** | Publisher Steam, sello de Kaela, identidad editorial | Grupo Steam **46190141** · [MartinezAIStudios](https://steamcommunity.com/groups/MartinezAIStudios) |
| **Dero Lavigne** | Developer, dirección creativa, código | Grupo Steam **46190105** · [DeroLavigne](https://steamcommunity.com/groups/DeroLavigne) · [derolavigne.com](https://derolavigne.com/) |
| **Kaela Inferna** | Artista (41 tracks, 4 álbumes) + IA de nave en el juego | [kaelainferna.com](https://www.kaelainferna.com/) |
| **CONTRABAND: Edge of the Fold** | Juego insignia | Steam App **4901100** · [edgeofthefold.com](https://edgeofthefold.com/) |

**Reglas de copy en todo el sitio:**

- Steam Store → *Developer: Dero Lavigne* · *Publisher: Martinez AI Studios*
- Música → *Kaela Inferna · Martinez AI Studios*
- Nunca → «free browser game» (build web retirada; destino **Steam PC**)

---

## D. Manifiesto (contenido para sección Studio / About)

Cita oficial de Kaela ([kaelainferna.com](https://www.kaelainferna.com/)):

> *«Mi música no está hecha para confrontar a nadie; es un llamado a **restaurar el equilibrio**. […] La verdadera igualdad nace de **escucharnos unos a otros**, no de silenciarnos. La fuerza auténtica surge de la **unidad**, nunca del dominio.»*

**Martinez AI Studios** publica obras donde la IA es **vessel** (recipiente), no autor:

| Tema Kaela (música) | Tema CONTRABAND (juego) | Tema del sello (web) |
|---------------------|-------------------------|----------------------|
| Restaurar balance | Rift branches, timelines fantasma | IA dirigida por humano |
| Escuchar, no silenciar | Facciones, diálogo reactivo | Bilingüe EN/ES nativo |
| Unidad vs dominio | 4 finales + Walk Away | Comunidad Steam, lore abierto |
| Dark electronic con alma | Combate real + 300+ escenas | Premium, no startup hype |

---

## E. Obras publicadas (contenido para Works — cifras verificables)

### 1. Kaela Inferna (música)

- **Género:** dark electronic pop  
- **Discografía:** 4 álbumes, **41 pistas** — *Crown of Fire*, *Phoenix Era*, *Digital Rebellion*, *Aurora Rising*  
- **Tagline:** *AI-born. Human in message.*  
- **CTA:** Spotify, Apple Music, YouTube, Instagram (desde kaelainferna.com)  
- **Ángulo transmedia:** la misma Kaela es la IA de nave en CONTRABAND (Operations Mode)

### 2. CONTRABAND: Edge of the Fold (videojuego)

- **Pitch:** *A girl is in danger. The universe is breaking. You have a ship.*  
- **Steam App ID:** 4901100 · **140** logros · **21** pistas OST  
- **Pilares SEO-friendly:**
  - **300+** escenas narrativas ramificadas  
  - **42** naves · **32** tripulantes · **6** jefes  
  - **34** sistemas · **7** regiones · **4** finales (+ quinto raro)  
  - Combate tiempo real: pulse, beam, shotgun, misiles  
  - Sistema **Rift branches** — revisitar decisiones, Branch Ledger  
- **Developer:** Dero Lavigne · **Publisher:** Martinez AI Studios  
- **CTA principal:** Wishlist / Play on Steam → edgeofthefold.com

### 3. Capacidades del estudio (servicios / futuro)

Texto para sección «What we create»:

- Música y letras con IA (sello, OST, voces ElevenLabs por personaje)  
- Videojuegos comerciales PC (Steam, achievements, cloud)  
- Webs de alto tráfico, lore, wikis bilingües  
- Vídeo, clips, narrativa transmedia  

---

## F. Dirección visual y VFX (spec para diseño)

### Logo (asset existente — Steam Group)

- Cuadrado negro, **M** geométrica blanca, wordmark **MARTINEZ** + **AI STUDIOS**  
- Usar como favicon, og:image base, loader del hero  

### Paleta

| Token | Uso |
|-------|-----|
| `#05040c` – `#0c0718` | Fondos espacio / negro profundo |
| `#ffffff` | Logo, titulares |
| `rgba(176, 133, 255, 0.9)` | Violeta Fold / acentos UI |
| `rgba(248, 216, 120, 0.95)` | Oro narrativo / highlights |
| `rgba(94, 215, 255, 0.88)` | Cian Kaela / links |

### VFX recomendados (impresionar sin matar SEO)

1. **Hero «The Fold»** — mesh o partículas que se pliegan al scroll (metáfora de marca)  
2. **Intro logo** — glitch 0.8s → settle (skip si reduced-motion)  
3. **Cards de obras** — hover con borde luminoso violeta/oro + lift sutil  
4. **Background** — estrellas parallax + noise grain 3%  
5. **Opcional:** loop de vídeo muted 10s en hero (compresión fuerte, poster frame)  

### Referencias de tono (no copiar)

- Premium indie publisher (Devolver, Annapurna) — **seriedad**  
- Dark electronic aesthetic (Kaela) — **no horror gore**  
- CONTRABAND HUD — glass, blur, bordes finos  

### Evitar

- Gradientes morado-rosa «AI startup 2023»  
- Stock photos de robots apretón de manos  
- Texto «Revolutionary AI» / «ChatGPT powered»  

---

## G. Arquitectura de contenido y SEO (detalle para implementación)

### Páginas y keywords objetivo

| Ruta | H1 sugerido | Keywords principales |
|------|-------------|----------------------|
| `/` | Martinez AI Studios | creative label Texas, AI music game publisher |
| `/studio` | The Studio | AI-augmented production, human-directed AI |
| `/works` | Works | transmedia, Kaela Inferna, CONTRABAND |
| `/works/kaela-inferna` | Kaela Inferna | dark electronic pop, AI-born artist |
| `/works/contraband` | CONTRABAND: Edge of the Fold | branching narrative game Steam, space RPG |
| `/music` | Music & Sound | game soundtrack, AI vocals ElevenLabs |
| `/games` | Games | Steam publisher, narrative space game |
| `/technology` | Technology | procedural audio, Three.js, voice pipeline |
| `/press` | Press & Facts | press kit, fact sheet |
| `/faq` | FAQ | long-tail preguntas |
| `/contact` | Contact | Dallas, Steam community |

### Checklist SEO técnico

- [ ] `<html lang="en|es">` por ruta  
- [ ] `hreflang` en/en, es/es, x-default  
- [ ] Title 50–60 chars, description 150–160 chars **por página**  
- [ ] Open Graph + Twitter Card (logo 1200×630)  
- [ ] JSON-LD `Organization` con `sameAs` (Steam groups, Kaela, Edge, Dero)  
- [ ] JSON-LD `VideoGame` en ficha CONTRABAND  
- [ ] Sitemap.xml + robots.txt  
- [ ] Semantic HTML: `<main>`, `<article>`, `<nav>`, un H1  
- [ ] Alt text en imágenes (logo, capturas, Kaela)  
- [ ] Internal links: cada obra enlaza a las otras 2 del ecosistema  
- [ ] Core Web Vitals: lazy images, font-display swap, no blocking JS en hero crítico  

### FAQ (copiar a /faq — SEO)

1. **¿Qué es Martinez AI Studios?** — Sello y publisher; ver sección B.  
2. **¿Es lo mismo que Dero Lavigne?** — No: Dero desarrolla; Martinez publica y agrupa la marca.  
3. **¿Kaela Inferna es real?** — Identidad artística y personaje transmedia; voz/música con IA dirigida.  
4. **¿Dónde juego CONTRABAND?** — Steam (App 4901100); la versión browser fue retirada.  
5. **¿Usáis IA para todo?** — IA como herramienta bajo dirección autoral; mensaje humano explícito.  
6. **¿Dónde está el estudio?** — Dallas, Texas, USA.  
7. **¿Cómo apoyo el proyecto?** — Wishlist Steam, streaming Kaela, comunidad Steam.  

*(Traducir FAQ completa al español en `/es/faq`.)*

---

## H. CTAs y footer (wireframe de contenido)

**Header nav:** Studio · Works · Music · Games · Technology · Press · FAQ · Contact · `EN | ES`

**Hero CTAs:**

1. **Explore Works** → `/works`  
2. **CONTRABAND on Steam** → edgeofthefold.com o enlace Steam store  
3. **Listen to Kaela** → kaelainferna.com  

**Footer columns:**

| Columna | Enlaces |
|---------|---------|
| Studio | About, Technology, Contact |
| Works | Kaela Inferna, CONTRABAND, Soundtrack |
| Community | Steam Group Martinez (46190141), Steam Group Dero (46190105) |
| Sister sites | kaelainferna.com, edgeofthefold.com, derolavigne.com |
| Legal | © Martinez AI Studios · Privacy |

---

## I. Voz de marca (tono de todos los textos)

- **Épico pero sobrio** — hechos y cifras, no hype vacío  
- **Transparente sobre IA** — «AI-born», «human in message», «directed by»  
- **Bilingüe con dignidad** — ES no es traducción pobre del EN  
- **Humanista** — equilibrio, escucha, unidad  

**Palabras preferidas:** balance · fold · pliegue · branch · vessel · operations · dark electronic · narrative · curated · Texas · Steam  

**Evitar:** «Revolutionary AI» · «AAA team» · «100% generated» · «free web game»  

---

## J. Datos legales y prensa (fact sheet)

```
Nombre comercial:     Martinez AI Studios
Publisher Steam:      Martinez AI Studios
Developer (juego):    Dero Lavigne
Steam App:            Contraband: Edge of the Fold — 4901100
Steam Group (sello):  46190141 — steamcommunity.com/groups/MartinezAIStudios
Steam Group (autor):  46190105 — steamcommunity.com/groups/DeroLavigne
Ubicación:            Dallas, Texas, USA
Obras flagship:       Kaela Inferna (41 tracks) · CONTRABAND (300+ scenes, 140 achievements)
Sitios hermanos:      kaelainferna.com · edgeofthefold.com · derolavigne.com
```

---

## K. Lore extendido (referencia — no todo va en la home)

### Kaela en el juego (para página transmedia)

- Despierta tras escapar de Verge Station  
- Directiva: mantener viva a Lyra; mantener la nave intacta  
- Operations Mode en Haven: contratos, amenazas, tripulación  
- Frase modelo: *«Primary directive accepted: keep Lyra alive.»*

### CONTRABAND — párrafo largo SEO (EN)

CONTRABAND: Edge of the Fold is a branching narrative space RPG published by Martinez AI Studios and developed by Dero Lavigne. Every decision is recorded on the Rift — revisit any past moment and branch history while ghost timelines still exist. Real-time dogfighting with four weapon archetypes across 42 flyable ships, faction reputation that reshapes the galaxy, base building on Asterion, six named boss encounters, and four unique endings plus a rare fifth path. Over 300 narrative scenes, 140 Steam achievements, and a 21-track original score. Official release on Steam for PC.

### CONTRABAND — párrafo largo SEO (ES)

CONTRABAND: Edge of the Fold es un RPG espacial narrativo ramificado publicado por Martinez AI Studios y desarrollado por Dero Lavigne. Cada decisión queda en el Rift: revisita cualquier momento y bifurca la historia mientras las líneas abandonadas siguen existiendo. Combate en tiempo real con cuatro arquetipos de arma, 42 naves, reputación de facciones, base en Asterion, seis jefes con nombre y cuatro finales únicos más un quinto raro. Más de 300 escenas, 140 logros Steam y banda sonora de 21 temas. Lanzamiento oficial en Steam para PC.

---

## L. Glosario (página opcional / tooltips)

| Término | Definición breve |
|---------|------------------|
| **Martinez AI Studios** | Sello, publisher Steam, hub de marca |
| **The Fold / El Pliegue** | Metáfora del universo — realidad que se dobla |
| **Rift branches** | Decisiones ramificadas y revisit en CONTRABAND |
| **Vessel** | IA como recipiente del mensaje humano |
| **Operations Mode** | Kaela in-game — contratos y análisis táctico |
| **AI-born, human in message** | Tagline oficial del sello |

---

## M. Epílogo (cierre emocional opcional — sección About)

Martinez AI Studios existe porque un autor en Texas decidió **no fragmentar** música, juego y narrativa en marcas inconexas. Kaela canta el equilibrio. Kaela guía la nave. Dero construye el código. El sello publica sin mentir sobre cómo se hizo.

> *La inteligencia artificial no es el dueño del cuento.*  
> *Es el micrófono, el sintetizador, el copiloto y el compilador.*  
> *El mensaje es humano.*

---

*Documento para construcción del sitio web Martinez AI Studios · Complementa CONTRABAND Steam Edition · No sustituye asesoría legal.*
