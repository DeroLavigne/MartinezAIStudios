/**
 * Generates src/data/games/catalog.json — 420+ titles with varied EN/ES notes.
 * Run: node scripts/generate-game-catalog.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dir, '../src/data/games/catalog.json');

const impactEn = [
  'defined its genre for a generation of designers.',
  'proved that small teams could compete with warehouse-scale budgets.',
  'turned a mechanical idea into a cultural reference point.',
  'showed how narrative and systems could share the same stage.',
  'remains a case study in pacing, readability, and player trust.',
  'introduced a control scheme studios still imitate decades later.',
  'made emergent play feel authored rather than accidental.',
  'demonstrated how audio can carry as much story as dialogue.',
  'rewarded curiosity without punishing experimentation.',
  'set a bar for polish that publishers still cite in pitch meetings.',
  'bridged arcade immediacy with home-console depth.',
  'taught an industry to respect player agency in open spaces.',
  'turned difficulty into identity instead of frustration.',
  'made co-op feel essential, not optional.',
  'reframed what “indie scale” could accomplish on a global stage.',
  'showed AAA production values could serve intimate character arcs.',
  'became shorthand for a whole era of design optimism.',
  'influenced Martinez AI Studios conversations about branching consequence.',
  'is still discussed in postmortems about scope, tone, and restraint.',
  'helped normalize digital distribution for unconventional projects.',
];

const impactEs = [
  'definió su género para toda una generación de diseñadores.',
  'demostró que equipos pequeños podían competir con presupuestos AAA.',
  'convirtió una idea mecánica en referencia cultural.',
  'mostró cómo narrativa y sistemas pueden compartir escenario.',
  'sigue siendo caso de estudio en ritmo, claridad y confianza del jugador.',
  'introdujo un esquema de control que aún se imita décadas después.',
  'hizo que el juego emergente se sintiera authored, no accidental.',
  'demostró que el audio puede contar tanto como el diálogo.',
  'premió la curiosidad sin castigar la experimentación.',
  'fijó un estándar de pulido que publishers aún citan en pitches.',
  'unió la inmediatez arcade con profundidad de consola.',
  'enseñó a la industria a respetar la agencia del jugador en espacios abiertos.',
  'convirtió la dificultad en identidad, no en frustración.',
  'hizo que el co-op se sintiera esencial, no opcional.',
  'redefinió lo que escala “indie” puede lograr a nivel global.',
  'mostró que producción AAA puede servir arcos íntimos de personaje.',
  'se volvió shorthand de toda una era de optimismo en diseño.',
  'influye en conversaciones de Martinez AI Studios sobre consecuencia ramificada.',
  'aún se analiza en postmortems sobre scope, tono y contención.',
  'ayudó a normalizar la distribución digital para proyectos no convencionales.',
];

const batches = [
  { era: '1970s-1980s', indie: false, aaa: false, games: [
    ['Pong',1972],['Space Invaders',1978],['Asteroids',1979],['Pac-Man',1980],['Defender',1981],
    ['Donkey Kong',1981],['Galaga',1981],['Dig Dug',1982],['Pole Position',1982],['Joust',1982],
    ['Q*bert',1982],['Robotron 2084',1982],['Dragon\'s Lair',1983],['Mario Bros.',1983],['Star Wars',1983],
    ['Track & Field',1983],['Bomb Jack',1984],['Gauntlet',1985],['Gradius',1985],['Ghosts \'n Goblins',1985],
    ['Super Mario Bros.',1985],['The Legend of Zelda',1986],['Metroid',1986],['Castlevania',1986],['Out Run',1986],
    ['Bubble Bobble',1986],['Contra',1987],['Mega Man',1987],['R-Type',1987],['Street Fighter',1987],
    ['Final Fantasy',1987],['Phantasy Star',1987],['Metal Gear',1987],['Double Dragon',1987],['Sid Meier\'s Pirates!',1987],
    ['Populous',1989],['SimCity',1989],['Prince of Persia',1989],['Golden Axe',1989],['Herzog Zwei',1989],
    ['Tetris',1984],['Elite',1984],['King\'s Quest',1984],['Lode Runner',1983],['Zaxxon',1982],
  ]},
  { era: '1990s', indie: false, aaa: false, games: [
    ['Super Mario World',1990],['F-Zero',1990],['Secret of Mana',1993],['Chrono Trigger',1995],['EarthBound',1994],
    ['Final Fantasy VI',1994],['Super Metroid',1994],['Donkey Kong Country',1994],['Star Fox',1993],['Pilotwings',1990],
    ['Street Fighter II',1991],['Sonic the Hedgehog',1991],['Castlevania: Symphony of the Night',1997],['Metal Gear Solid',1998],['Resident Evil',1996],
    ['Silent Hill',1999],['Diablo',1996],['Diablo II',2000],['StarCraft',1998],['Warcraft II',1995],
    ['Command & Conquer',1995],['Age of Empires',1997],['Civilization II',1996],['X-COM',1994],['Master of Orion II',1996],
    ['Doom',1993],['Doom II',1994],['Quake',1996],['Half-Life',1998],['Unreal',1998],
    ['System Shock',1994],['Thief',1998],['Deus Ex',2000],['Duke Nukem 3D',1996],['Hexen',1995],
    ['Myst',1993],['Riven',1997],['The Secret of Monkey Island',1990],['Day of the Tentacle',1993],['Grim Fandango',1998],
    ['Full Throttle',1995],['Sam & Max Hit the Road',1993],['Gabriel Knight',1993],['Phantasmagoria',1995],['The Dig',1995],
    ['Super Mario 64',1996],['The Legend of Zelda: Ocarina of Time',1998],['Banjo-Kazooie',1998],['Perfect Dark',2000],['GoldenEye 007',1997],
    ['Tekken 3',1997],['Gran Turismo',1997],['PaRappa the Rapper',1996],['Vagrant Story',2000],['Final Fantasy VII',1997],
    ['Final Fantasy VIII',1999],['Final Fantasy IX',2000],['Xenogears',1998],['Suikoden II',1998],['Valkyrie Profile',1999],
    ['Pokemon Red/Blue',1996],['Harvest Moon',1996],['Animal Crossing',2001],['Tony Hawk\'s Pro Skater',1999],['Wipeout',1995],
  ]},
  { era: '2000s', indie: false, aaa: false, games: [
    ['Halo: Combat Evolved',2001],['Halo 2',2004],['Gears of War',2006],['Mass Effect',2007],['Mass Effect 2',2010],
    ['Knights of the Old Republic',2003],['Jade Empire',2005],['Dragon Age: Origins',2009],['The Witcher',2007],['The Witcher 2',2011],
    ['Grand Theft Auto III',2001],['Vice City',2002],['San Andreas',2004],['GTA IV',2008],['Red Dead Redemption',2010],
    ['Assassin\'s Creed',2007],['Assassin\'s Creed II',2009],['Far Cry',2004],['Far Cry 2',2008],['Crysis',2007],
    ['Call of Duty',2003],['Call of Duty 4',2007],['Modern Warfare 2',2009],['Battlefield 1942',2002],['Battlefield 2',2005],
    ['BioShock',2007],['BioShock Infinite',2013],['System Shock 2',1999],['Prey',2006],['Dishonored',2012],
    ['Half-Life 2',2004],['Portal',2007],['Portal 2',2011],['Team Fortress 2',2007],['Left 4 Dead',2008],
    ['Counter-Strike',2000],['Counter-Strike: Source',2004],['Day of Defeat',2003],['Garry\'s Mod',2006],['Alien Swarm',2010],
    ['World of Warcraft',2004],['EverQuest',1999],['EVE Online',2003],['Guild Wars',2005],['Runescape',2001],
    ['The Sims',2000],['The Sims 2',2004],['SimCity 4',2003],['Spore',2008],['Black & White',2001],
    ['Civilization III',2001],['Civilization IV',2005],['Rome: Total War',2004],['Medieval II',2006],['Company of Heroes',2006],
    ['StarCraft II',2010],['Warcraft III',2002],['Diablo III',2012],['Heroes of the Storm',2015],['Hearthstone',2014],
    ['Shadow of the Colossus',2005],['Ico',2001],['Okami',2006],['Katamari Damacy',2004],['Rez',2001],
    ['Guitar Hero',2005],['Rock Band',2007],['Dance Dance Revolution',1998],['Beat Saber',2019],['Osu!',2007],
    ['Metroid Prime',2002],['Metroid Prime 2',2004],['Super Smash Bros. Melee',2001],['Wind Waker',2002],['Twilight Princess',2006],
    ['Persona 3',2006],['Persona 4',2008],['Shin Megami Tensei: Nocturne',2003],['Disgaea',2003],['Final Fantasy X',2001],
    ['Kingdom Hearts',2002],['Kingdom Hearts II',2005],['Nier',2010],['Drakengard',2003],['Bayonetta',2009],
  ]},
  { era: '2010s', indie: false, aaa: false, games: [
    ['The Witcher 3',2015],['Cyberpunk 2077',2020],['Horizon Zero Dawn',2017],['God of War',2018],['Spider-Man',2018],
    ['Uncharted 2',2009],['Uncharted 4',2016],['The Last of Us',2013],['The Last of Us Part II',2020],['Ghost of Tsushima',2020],
    ['Red Dead Redemption 2',2018],['Grand Theft Auto V',2013],['Watch Dogs',2014],['Far Cry 3',2012],['Far Cry 5',2018],
    ['Assassin\'s Creed Origins',2017],['Odyssey',2018],['Valhalla',2020],['Immortals Fenyx Rising',2020],['Skull and Bones',2024],
    ['Dark Souls',2011],['Dark Souls III',2016],['Bloodborne',2015],['Sekiro',2019],['Elden Ring',2022],
    ['Demon\'s Souls',2009],['Nioh',2017],['Code Vein',2019],['Lies of P',2023],['Lords of the Fallen',2023],
    ['Skyrim',2011],['Fallout 3',2008],['Fallout: New Vegas',2010],['Fallout 4',2015],['Starfield',2023],
    ['Mass Effect: Andromeda',2017],['Dragon Age: Inquisition',2014],['Baldur\'s Gate 3',2023],['Pillars of Eternity',2015],['Divinity: Original Sin 2',2017],
    ['XCOM 2',2016],['Into the Breach',2018],['Civilization VI',2016],['Crusader Kings III',2020],['Europa Universalis IV',2013],
    ['Overwatch',2016],['Valorant',2020],['Apex Legends',2019],['Fortnite',2017],['PUBG',2017],
    ['League of Legends',2009],['Dota 2',2013],['Smite',2014],['Heroes of the Storm',2015],['Paladins',2018],
    ['Minecraft',2011],['Terraria',2011],['Stardew Valley',2016],['Factorio',2020],['RimWorld',2018],
    ['Hollow Knight',2017],['Celeste',2018],['Undertale',2015],['Shovel Knight',2014],['Cuphead',2017],
    ['Hades',2020],['Dead Cells',2018],['Slay the Spire',2019],['Return of the Obra Dinn',2018],['Outer Wilds',2019],
    ['Breath of the Wild',2017],['Tears of the Kingdom',2023],['Super Mario Odyssey',2017],['Metroid Dread',2021],['Fire Emblem: Three Houses',2019],
    ['Persona 5',2016],['Yakuza 0',2015],['Final Fantasy XIV',2010],['Monster Hunter: World',2018],['Nier: Automata',2017],
  ]},
  { era: '2020s', indie: false, aaa: false, games: [
    ['Elden Ring',2022],['Armored Core VI',2023],['Lies of P',2023],['Black Myth: Wukong',2024],['Final Fantasy XVI',2023],
    ['Final Fantasy VII Rebirth',2024],['Starfield',2023],['Baldur\'s Gate 3',2023],['Diablo IV',2023],['Path of Exile 2',2024],
    ['Hogwarts Legacy',2023],['Spider-Man 2',2023],['God of War Ragnarok',2022],['Horizon Forbidden West',2022],['Ghost of Tsushima DC',2021],
    ['Resident Evil 4 Remake',2023],['Resident Evil Village',2021],['Dead Space Remake',2023],['Alan Wake II',2023],['Control',2019],
    ['Cyberpunk 2077: Phantom Liberty',2023],['Star Wars Jedi: Survivor',2023],['Returnal',2021],['Ratchet & Clank: Rift Apart',2021],['Kena: Bridge of Spirits',2021],
    ['It Takes Two',2021],['A Way Out',2018],['Split Fiction',2025],['Helldivers 2',2024],['Destiny 2',2017],
    ['Genshin Impact',2020],['Honkai: Star Rail',2023],['Zenless Zone Zero',2024],['Wuthering Waves',2024],['Palworld',2024],
    ['Lethal Company',2023],['Content Warning',2024],['Among Us',2018],['Fall Guys',2020],['Valheim',2021],
    ['Satisfactory',2024],['Dyson Sphere Program',2021],['Sons of the Forest',2023],['The Forest',2018],['Green Hell',2019],
    ['Sea of Thieves',2018],['No Man\'s Sky',2016],['Elite Dangerous',2014],['Star Citizen',2015],['EVE Online',2003],
    ['Civilization VII',2025],['Manor Lords',2024],['Cities: Skylines II',2023],['Frostpunk 2',2024],['Against the Storm',2023],
    ['Pizza Tower',2023],['Animal Well',2024],['Nine Sols',2024],['Blasphemous 2',2023],['Silksong',2025],
    ['Metaphor: Refantazio',2024],['Like a Dragon: Infinite Wealth',2024],['Tekken 8',2024],['Street Fighter 6',2023],['Mortal Kombat 1',2023],
    ['Forza Horizon 5',2021],['Gran Turismo 7',2022],['F1 24',2024],['WRC Generations',2022],['Dirt Rally 2',2019],
    ['CONTRABAND: Edge of the Fold',2026],['Kaela Inferna discography',2024],['Martinez AI Studios catalog',2024],['Edge of the Fold wiki',2024],['Dero Lavigne portfolio',2024],
  ]},
  { era: 'indie', indie: true, aaa: false, games: [
    ['Braid',2008],['Fez',2012],['Super Meat Boy',2010],['The Binding of Isaac',2011],['Enter the Gungeon',2016],
    ['Hotline Miami',2012],['Katana ZERO',2019],['My Friend Pedro',2019],['OlliOlli',2014],['Downwell',2015],
    ['Hyper Light Drifter',2016],['CrossCode',2018],['Chained Echoes',2022],['Sea of Stars',2023],['Eastward',2021],
    ['Oxenfree',2016],['Night in the Woods',2017],['Kentucky Route Zero',2020],['Firewatch',2016],['What Remains of Edith Finch',2017],
    ['Gone Home',2013],['Tacoma',2017],['Life is Strange',2015],['Telltale The Walking Dead',2012],['Tales from the Borderlands',2014],
    ['Disco Elysium',2019],['Norco',2022],['Citizen Sleeper',2022],['8089',2020],['Genesis Alpha One',2019],
    ['FTL',2012],['Into the Breach',2018],['Darkest Dungeon',2016],['Darkest Dungeon II',2023],['Hades II',2024],
    ['Inscryption',2021],['Loop Hero',2021],['Vampire Survivors',2022],['20 Minutes Till Dawn',2022],['Brotato',2022],
    ['Cult of the Lamb',2022],['Spiritfarer',2020],['Gris',2018],['Journey',2012],['Abzû',2016],
    ['Flower',2009],['The Witness',2016],['Baba Is You',2019],['Stephen\'s Sausage Roll',2016],['Opus Magnum',2017],
    ['Factorio',2020],['Satisfactory',2024],['Dyson Sphere Program',2021],['Mindustry',2019],['Shapez',2020],
    ['Terraria',2011],['Starbound',2016],['Core Keeper',2022],['Moonlighter',2018],['Cadence of Hyrule',2019],
    ['A Short Hike',2019],['Webbed',2021],['Untitled Goose Game',2019],['Donut County',2018],['Lil Gator Game',2022],
    ['Tunic',2022],['Death\'s Door',2021],['Sable',2021],['Solar Ash',2021],['Prodeus',2022],
    ['Signalis',2022],['World of Horror',2023],['Chained Echoes',2022],['Sea of Stars',2023],['Bug Fables',2020],
    ['Papers Please',2013],['Beholder',2016],['Do Not Feed the Monkeys',2018],['Orwell',2016],['Not For Broadcast',2022],
    ['Dwarf Fortress',2022],['RimWorld',2018],['Oxygen Not Included',2019],['Project Zomboid',2013],['Kenshi',2018],
    ['Subnautica',2018],['Subnautica: Below Zero',2021],['Outer Wilds',2019],['Satisfactory',2024],['Astroneer',2019],
    ['Slay the Spire',2019],['Monster Train',2020],['Griftlands',2021],['Vault of the Void',2021],['Roguebook',2021],
    ['Hollow Knight: Silksong',2025],['Blasphemous',2019],['Ender Lilies',2021],['The Mageseeker',2023],['Afterimage',2023],
  ]},
  { era: 'aaa', indie: false, aaa: true, games: [
    ['Call of Duty: Modern Warfare III',2023],['Battlefield 2042',2021],['Halo Infinite',2021],['Gears 5',2019],['Destiny 2',2017],
    ['The Division 2',2019],['Rainbow Six Siege',2015],['Ghost Recon Breakpoint',2019],['Far Cry 6',2021],['Watch Dogs: Legion',2020],
    ['Assassin\'s Creed Mirage',2023],['Prince of Persia: The Lost Crown',2024],['Skull and Bones',2024],['Avatar: Frontiers of Pandora',2023],['Star Wars Outlaws',2024],
    ['Marvel\'s Avengers',2020],['Guardians of the Galaxy',2021],['Spider-Man: Miles Morales',2020],['Wolverine',2026],['Insomniac legacy',2020],
    ['God of War Ragnarok',2022],['Horizon Forbidden West',2022],['Returnal',2021],['Death Stranding',2019],['Death Stranding 2',2025],
    ['Final Fantasy XVI',2023],['Final Fantasy VII Rebirth',2024],['Kingdom Hearts IV',2025],['Dragon Quest XII',2024],['Persona 6',2026],
    ['Resident Evil 2 Remake',2019],['Resident Evil 3 Remake',2020],['Resident Evil 4 Remake',2023],['Devil May Cry 5',2019],['Monster Hunter Rise',2021],
    ['Street Fighter 6',2023],['Tekken 8',2024],['Mortal Kombat 1',2023],['Guilty Gear Strive',2021],['Granblue Fantasy Versus',2020],
    ['Forza Motorsport',2023],['Forza Horizon 5',2021],['Gran Turismo 7',2022],['Need for Speed Unbound',2022],['F1 24',2024],
    ['FIFA 24',2023],['EA Sports FC 24',2023],['NBA 2K24',2023],['Madden NFL 24',2023],['WWE 2K24',2024],
    ['Grand Theft Auto VI',2025],['Red Dead Online',2018],['Mafia: Definitive Edition',2020],['Sleeping Dogs',2012],['Saints Row',2022],
    ['Elden Ring',2022],['Armored Core VI',2023],['Sekiro',2019],['Bloodborne',2015],['Demon\'s Souls Remake',2020],
    ['Starfield',2023],['Skyrim Anniversary',2021],['Fallout 76',2018],['The Elder Scrolls Online',2014],['Starfield Shattered Space',2024],
    ['Mass Effect Legendary Edition',2021],['Dragon Age: Dreadwolf',2025],['Anthem',2019],['Mass Effect Andromeda',2017],['SWTOR',2011],
    ['Hogwarts Legacy',2023],['Suicide Squad',2024],['Gotham Knights',2022],['Batman: Arkham Knight',2015],['Middle-earth: Shadow of War',2017],
    ['Cyberpunk 2077',2020],['The Witcher 3: Wild Hunt',2015],['Greedfall',2019],['ELEX 2',2022],['Gothic Remake',2024],
    ['Microsoft Flight Simulator',2020],['XPlane 12',2022],['Assetto Corsa Competizione',2020],['iRacing',2008],['DCS World',2008],
    ['Civilization VII',2025],['Age of Empires IV',2021],['Total War: Warhammer III',2022],['Company of Heroes 3',2023],['Anno 1800',2019],
    ['SimCity',2013],['Cities: Skylines II',2023],['Planet Zoo',2019],['Planet Coaster',2016],['Two Point Hospital',2018],
    ['The Sims 4',2014],['Paralives',2026],['InZOI',2025],['Life by You',2024],['Project Life',2025],
    ['No Man\'s Sky',2016],['Starfield',2023],['Elite Dangerous',2014],['Star Citizen',2015],['Dual Universe',2022],
  ]},
];

const seen = new Set();
const catalog = [];
let idx = 0;

for (const batch of batches) {
  for (const [title, year] of batch.games) {
    const key = `${title}|${year}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const i = idx % impactEn.length;
    catalog.push({
      id: key.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60),
      title,
      year,
      era: batch.era,
      indie: batch.indie,
      aaa: batch.aaa,
      en: `${title} (${year}) ${impactEn[i]}`,
      es: `${title} (${year}) ${impactEs[i]}`,
    });
    idx++;
  }
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify({ generated: new Date().toISOString(), count: catalog.length, games: catalog }, null, 0));
console.log(`Wrote ${catalog.length} games to ${outPath}`);
