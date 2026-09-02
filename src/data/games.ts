import type { Locale } from "@/i18n/routing";

export type GameKind = "main" | "spin" | "collection" | "remake";
export type GameStatus = "released" | "upcoming" | "cancelled";

export type LocalizedText = Partial<Record<Locale, string>> & { fr: string; en: string };

export interface Game {
  slug: string;
  title: string;
  shortTitle: string;
  kind: GameKind;
  status: GameStatus;
  /** Dates ISO (AAAA-MM-JJ) ou AAAA seul quand la date exacte n'est pas connue */
  release: { jp?: string; na?: string; eu?: string };
  platforms: string[];
  developer: string;
  /** Durée indicative de l'histoire principale en heures (source : HowLongToBeat, arrondi) */
  mainStoryHours?: number;
  /** Ordre des événements dans l'univers. Même valeur = événements parallèles. */
  chronoOrder?: number;
  synopsis: LocalizedText;
  /** Slugs contenus (compilations) */
  includes?: string[];
  /** Slug du jeu original (remakes) */
  remakeOf?: string;
  /** Couleur d'accent de la jaquette, utilisée pour l'illustration générée */
  accent: string;
  /**
   * Visuel officiel (jaquette, logo ou illustration) : fichier dans public/images/games/<slug>.jpg.
   * Tout ratio accepté : l'image est affichée entière (object-contain) sur un fond à la couleur du jeu.
   * Renseigner `credit` (ayant droit + source) — voir docs/IMAGES.md. Absent = jaquette générée.
   */
  cover?: { src: string; credit: string; width: number; height: number };
}

export const games: Game[] = [
  {
    slug: "kingdom-hearts",
    title: "Kingdom Hearts",
    shortTitle: "KH",
    kind: "main",
    status: "released",
    release: { jp: "2002-03-28", na: "2002-09-17", eu: "2002-11-15" },
    platforms: ["PlayStation 2"],
    developer: "Square",
    mainStoryHours: 29,
    chronoOrder: 40,
    accent: "#2b7de9",
    cover: { src: "/images/games/kingdom-hearts.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 637, height: 900 },
    synopsis: {
      fr: "Sora, Riku et Kairi rêvent de quitter les Îles du Destin. Quand les Sans-cœur engloutissent leur monde, Sora reçoit la Keyblade et, aux côtés de Donald et Dingo, parcourt les mondes Disney à la recherche de ses amis et du roi Mickey, jusqu'à affronter Ansem devant la porte de Kingdom Hearts.",
      en: "Sora, Riku and Kairi dream of leaving Destiny Islands. When the Heartless swallow their world, Sora receives the Keyblade and, alongside Donald and Goofy, travels through the Disney worlds searching for his friends and King Mickey, until he faces Ansem before the door to Kingdom Hearts.",
    },
  },
  {
    slug: "chain-of-memories",
    title: "Kingdom Hearts: Chain of Memories",
    shortTitle: "CoM",
    kind: "main",
    status: "released",
    release: { jp: "2004-11-11", na: "2004-12-07", eu: "2005-05-06" },
    platforms: ["Game Boy Advance"],
    developer: "Square Enix, Jupiter",
    mainStoryHours: 22,
    chronoOrder: 50,
    accent: "#8e44ad",
    cover: { src: "/images/games/chain-of-memories.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 500, height: 500 },
    synopsis: {
      fr: "Juste après Kingdom Hearts, Sora, Donald et Dingo pénètrent dans le Manoir Oblivion, où chaque étage leur coûte des souvenirs. Manipulé par des membres de l'Organisation XIII et par la jeune Naminé, Sora doit choisir entre ses vrais souvenirs et ceux qu'on lui a fabriqués. En parallèle, Riku affronte ses propres ténèbres dans les sous-sols.",
      en: "Right after Kingdom Hearts, Sora, Donald and Goofy enter Castle Oblivion, where every floor costs them memories. Manipulated by members of Organization XIII and by the young Naminé, Sora must choose between his true memories and the ones fabricated for him. Meanwhile, Riku faces his own darkness in the basements.",
    },
  },
  {
    slug: "kingdom-hearts-ii",
    title: "Kingdom Hearts II",
    shortTitle: "KH II",
    kind: "main",
    status: "released",
    release: { jp: "2005-12-22", na: "2006-03-28", eu: "2006-09-29" },
    platforms: ["PlayStation 2"],
    developer: "Square Enix",
    mainStoryHours: 32,
    chronoOrder: 60,
    accent: "#e0a526",
    cover: { src: "/images/games/kingdom-hearts-ii.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 641, height: 900 },
    synopsis: {
      fr: "Un an après Chain of Memories, un garçon nommé Roxas vit ses derniers jours d'été dans une Cité du Crépuscule virtuelle. Sora s'éveille enfin et repart avec Donald et Dingo affronter l'Organisation XIII, dont le chef Xemnas veut s'emparer de Kingdom Hearts pour retrouver un cœur.",
      en: "A year after Chain of Memories, a boy named Roxas lives his last summer days in a virtual Twilight Town. Sora finally awakens and sets out again with Donald and Goofy to face Organization XIII, whose leader Xemnas wants to claim Kingdom Hearts to regain a heart.",
    },
  },
  {
    slug: "re-chain-of-memories",
    title: "Kingdom Hearts Re:Chain of Memories",
    shortTitle: "Re:CoM",
    kind: "remake",
    status: "released",
    release: { jp: "2007-03-29", na: "2008-12-02" },
    platforms: ["PlayStation 2"],
    developer: "Square Enix",
    mainStoryHours: 25,
    remakeOf: "chain-of-memories",
    accent: "#7d3c98",
    cover: { src: "/images/games/re-chain-of-memories.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 423, height: 599 },
    synopsis: {
      fr: "Remake en 3D de Chain of Memories, avec des cinématiques doublées et de nouvelles scènes. Sorti au Japon dans Kingdom Hearts II Final Mix+, puis seul en Amérique du Nord ; l'Europe l'a découvert dans la compilation HD 1.5 ReMIX.",
      en: "3D remake of Chain of Memories with voiced cutscenes and new scenes. Released in Japan within Kingdom Hearts II Final Mix+, then on its own in North America; Europe first got it in the HD 1.5 ReMIX collection.",
    },
  },
  {
    slug: "358-2-days",
    title: "Kingdom Hearts 358/2 Days",
    shortTitle: "Days",
    kind: "spin",
    status: "released",
    release: { jp: "2009-05-30", na: "2009-09-29", eu: "2009-10-09" },
    platforms: ["Nintendo DS"],
    developer: "h.a.n.d.",
    mainStoryHours: 24,
    chronoOrder: 50,
    accent: "#c0392b",
    cover: { src: "/images/games/358-2-days.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 900, height: 810 },
    synopsis: {
      fr: "Les 358 jours de Roxas au sein de l'Organisation XIII, entre le sommeil de Sora et Kingdom Hearts II. Avec Axel et la mystérieuse Xion, quatorzième membre, il découvre l'amitié, les glaces à l'eau de mer et la vérité sur son existence.",
      en: "Roxas's 358 days within Organization XIII, between Sora's sleep and Kingdom Hearts II. With Axel and the mysterious fourteenth member Xion, he discovers friendship, sea-salt ice cream and the truth about his existence.",
    },
  },
  {
    slug: "birth-by-sleep",
    title: "Kingdom Hearts Birth by Sleep",
    shortTitle: "BbS",
    kind: "main",
    status: "released",
    release: { jp: "2010-01-09", na: "2010-09-07", eu: "2010-09-10" },
    platforms: ["PlayStation Portable"],
    developer: "Square Enix",
    mainStoryHours: 27,
    chronoOrder: 30,
    accent: "#1abc9c",
    cover: { src: "/images/games/birth-by-sleep.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 522, height: 900 },
    synopsis: {
      fr: "Dix ans avant Kingdom Hearts, trois apprentis Porteurs de Keyblade — Terra, Ventus et Aqua — quittent la Contrée du Départ à la poursuite du Maître Xehanort et des Nescients. Trois histoires entrelacées qui posent les fondations de toute la saga.",
      en: "Ten years before Kingdom Hearts, three apprentice Keyblade wielders — Terra, Ventus and Aqua — leave the Land of Departure in pursuit of Master Xehanort and the Unversed. Three intertwined stories that lay the foundations of the whole saga.",
    },
  },
  {
    slug: "re-coded",
    title: "Kingdom Hearts Re:coded",
    shortTitle: "Re:coded",
    kind: "spin",
    status: "released",
    release: { jp: "2010-10-07", na: "2011-01-11", eu: "2011-01-14" },
    platforms: ["Nintendo DS"],
    developer: "h.a.n.d., Square Enix",
    mainStoryHours: 17,
    chronoOrder: 70,
    accent: "#27ae60",
    cover: { src: "/images/games/re-coded.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 900, height: 813 },
    synopsis: {
      fr: "Après Kingdom Hearts II, Jiminy Cricket découvre un message inconnu dans son journal. Le roi Mickey numérise le carnet et envoie un Sora de données explorer des mondes corrompus par des bugs, jusqu'à révéler ceux qui souffrent et qu'il faut sauver. Remake du jeu mobile coded (2008).",
      en: "After Kingdom Hearts II, Jiminy Cricket finds an unknown message in his journal. King Mickey digitises the journal and sends a Data Sora to explore worlds corrupted by bugs, until the message reveals those who hurt and must be saved. Remake of the mobile game coded (2008).",
    },
  },
  {
    slug: "dream-drop-distance",
    title: "Kingdom Hearts 3D: Dream Drop Distance",
    shortTitle: "DDD",
    kind: "main",
    status: "released",
    release: { jp: "2012-03-29", na: "2012-07-31", eu: "2012-07-20" },
    platforms: ["Nintendo 3DS"],
    developer: "Square Enix",
    mainStoryHours: 22,
    chronoOrder: 80,
    accent: "#e67e22",
    cover: { src: "/images/games/dream-drop-distance.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 900, height: 806 },
    synopsis: {
      fr: "Pour devenir Maîtres de la Keyblade, Sora et Riku passent l'Épreuve de Maîtrise : réveiller sept mondes endormis avec l'aide des Avale-Rêves. Mais un jeune Xehanort les traque à travers le temps, et l'Organisation XIII révèle sa véritable nature.",
      en: "To become Keyblade Masters, Sora and Riku take the Mark of Mastery exam: awaken seven Sleeping Worlds with the help of Dream Eaters. But a young Xehanort hunts them through time, and Organization XIII reveals its true nature.",
    },
  },
  {
    slug: "kingdom-hearts-chi",
    title: "Kingdom Hearts χ / Union χ [Cross]",
    shortTitle: "χ",
    kind: "spin",
    status: "released",
    release: { jp: "2013-07-18", na: "2016-04-07", eu: "2016-06-16" },
    platforms: ["Navigateur (χ)", "iOS", "Android", "Amazon"],
    developer: "Square Enix, BitGroove, Success",
    chronoOrder: 10,
    accent: "#d35400",
    cover: { src: "/images/games/kingdom-hearts-chi.jpg", credit: "© Square Enix / Disney — logo officiel, via Kingdom Hearts Wiki", width: 900, height: 657 },
    synopsis: {
      fr: "À l'Âge des Fées, bien avant tous les autres jeux, des Porteurs de Keyblade répartis en cinq Unions collectent la lumière sous l'autorité des Prophètes. Le joueur suit la Guerre des Keyblades et, dans Union χ, le destin des nouveaux chefs d'Union et du Dandelion. Les serveurs ont fermé en 2021 ; l'histoire reste jouable hors ligne.",
      en: "In the Age of Fairy Tales, long before every other game, Keyblade wielders split into five Unions gather light under the Foretellers. The player follows the Keyblade War and, in Union χ, the fate of the new Union leaders and the Dandelions. Servers closed in 2021; the story remains playable offline.",
    },
  },
  {
    slug: "0-2-birth-by-sleep-a-fragmentary-passage",
    title: "Kingdom Hearts 0.2 Birth by Sleep – A fragmentary passage –",
    shortTitle: "0.2",
    kind: "spin",
    status: "released",
    release: { jp: "2017-01-12", na: "2017-01-24", eu: "2017-01-24" },
    platforms: ["PlayStation 4"],
    developer: "Square Enix",
    mainStoryHours: 3,
    chronoOrder: 90,
    accent: "#3498db",
    cover: { src: "/images/games/0-2-birth-by-sleep-a-fragmentary-passage.jpg", credit: "© Square Enix / Disney — logo officiel, via Kingdom Hearts Wiki", width: 900, height: 633 },
    synopsis: {
      fr: "Après Dream Drop Distance, Aqua poursuit son errance dans le Domaine des Ténèbres depuis dix ans. Ce court épisode, premier du moteur de Kingdom Hearts III, la mène jusqu'à la retrouvaille avec Mickey et à la promesse de sauver Terra et Ventus.",
      en: "After Dream Drop Distance, Aqua continues her ten-year wandering in the Realm of Darkness. This short episode, the first on the Kingdom Hearts III engine, leads her to reunite with Mickey and to the promise of saving Terra and Ventus.",
    },
  },
  {
    slug: "kingdom-hearts-iii",
    title: "Kingdom Hearts III",
    shortTitle: "KH III",
    kind: "main",
    status: "released",
    release: { jp: "2019-01-25", na: "2019-01-29", eu: "2019-01-29" },
    platforms: ["PlayStation 4", "Xbox One", "Nintendo Switch (cloud)", "PC"],
    developer: "Square Enix",
    mainStoryHours: 29,
    chronoOrder: 100,
    accent: "#f1c40f",
    cover: { src: "/images/games/kingdom-hearts-iii.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 718, height: 900 },
    synopsis: {
      fr: "Conclusion de la Saga des Ténèbres de Xehanort. Sora, Donald et Dingo cherchent le pouvoir de l'éveil pour rassembler les sept Gardiens de la Lumière, tandis que la véritable Organisation XIII prépare la seconde Guerre des Keyblades au Cimetière des Keyblades. Le DLC Re Mind prolonge le dénouement.",
      en: "Conclusion of the Dark Seeker Saga. Sora, Donald and Goofy seek the power of waking to gather the seven Guardians of Light, while the true Organization XIII prepares the second Keyblade War at the Keyblade Graveyard. The Re Mind DLC extends the ending.",
    },
  },
  {
    slug: "dark-road",
    title: "Kingdom Hearts Dark Road",
    shortTitle: "Dark Road",
    kind: "spin",
    status: "released",
    release: { jp: "2020-06-22", na: "2020-06-22", eu: "2020-06-22" },
    platforms: ["iOS", "Android"],
    developer: "Square Enix",
    chronoOrder: 20,
    accent: "#34495e",
    cover: { src: "/images/games/dark-road.jpg", credit: "© Square Enix / Disney — illustration officielle, via Kingdom Hearts Wiki", width: 775, height: 900 },
    synopsis: {
      fr: "Comment Xehanort est-il devenu le Chercheur des Ténèbres ? Dark Road suit le jeune Xehanort et ses camarades de Scala ad Caelum, élèves du Maître Odin, dans une enquête qui les mène vers les ténèbres. Conclu en 2022 ; jouable hors ligne.",
      en: "How did Xehanort become the Seeker of Darkness? Dark Road follows young Xehanort and his classmates from Scala ad Caelum, students of Master Odin, in an investigation that leads them toward darkness. Concluded in 2022; playable offline.",
    },
  },
  {
    slug: "melody-of-memory",
    title: "Kingdom Hearts Melody of Memory",
    shortTitle: "MoM",
    kind: "spin",
    status: "released",
    release: { jp: "2020-11-11", na: "2020-11-13", eu: "2020-11-13" },
    platforms: ["PlayStation 4", "Xbox One", "Nintendo Switch", "PC"],
    developer: "Square Enix, indieszero",
    mainStoryHours: 10,
    chronoOrder: 110,
    accent: "#9b59b6",
    cover: { src: "/images/games/melody-of-memory.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 600, height: 900 },
    synopsis: {
      fr: "Jeu de rythme qui retraverse toute la saga à travers ses musiques, racontée par Kairi qui plonge dans ses souvenirs pour retrouver Sora. Son épilogue ouvre la voie à Kingdom Hearts IV.",
      en: "A rhythm game that revisits the whole saga through its music, narrated by Kairi as she dives into her memories to find Sora. Its epilogue opens the way to Kingdom Hearts IV.",
    },
  },
  {
    slug: "missing-link",
    title: "Kingdom Hearts Missing-Link",
    shortTitle: "Missing-Link",
    kind: "spin",
    status: "cancelled",
    release: {},
    platforms: ["iOS", "Android"],
    developer: "Square Enix",
    accent: "#7f8c8d",
    cover: { src: "/images/games/missing-link.jpg", credit: "© Square Enix / Disney — illustration officielle, via Kingdom Hearts Wiki", width: 563, height: 900 },
    synopsis: {
      fr: "Jeu mobile annoncé en 2022, situé à Scala ad Caelum après la Guerre des Keyblades. Après plusieurs bêtas, Square Enix a annulé son développement en mai 2025 pour concentrer l'équipe sur Kingdom Hearts IV.",
      en: "Mobile game announced in 2022, set in Scala ad Caelum after the Keyblade War. After several betas, Square Enix cancelled development in May 2025 to focus the team on Kingdom Hearts IV.",
    },
  },
  {
    slug: "kingdom-hearts-iv",
    title: "Kingdom Hearts IV",
    shortTitle: "KH IV",
    kind: "main",
    status: "upcoming",
    release: { jp: "2027", na: "2027", eu: "2027" },
    platforms: ["PlayStation 5", "Xbox Series X|S", "Nintendo Switch 2", "PC"],
    developer: "Square Enix",
    chronoOrder: 120,
    accent: "#2c3e50",
    cover: { src: "/images/games/kingdom-hearts-iv.jpg", credit: "© Square Enix / Disney — logo officiel, via Kingdom Hearts Wiki", width: 900, height: 449 },
    synopsis: {
      fr: "Début de la Saga de la Perte du Maître. Sora s'éveille à Quadratum, une métropole moderne, tandis que Donald et Dingo descendent aux Enfers chercher des indices. Annoncé pour fin 2027, avec notamment le monde de Coco.",
      en: "Beginning of the Lost Master Arc. Sora awakens in Quadratum, a modern metropolis, while Donald and Goofy head to the Underworld for clues. Announced for late 2027, featuring the world of Coco among others.",
    },
  },
  // Compilations
  {
    slug: "hd-1-5-remix",
    title: "Kingdom Hearts HD 1.5 ReMIX",
    shortTitle: "1.5",
    kind: "collection",
    status: "released",
    release: { jp: "2013-03-14", na: "2013-09-10", eu: "2013-09-13" },
    platforms: ["PlayStation 3"],
    developer: "Square Enix",
    includes: ["kingdom-hearts", "re-chain-of-memories", "358-2-days"],
    accent: "#2980b9",
    cover: { src: "/images/games/hd-1-5-remix.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 435, height: 500 },
    synopsis: {
      fr: "Première compilation HD : Kingdom Hearts Final Mix, Re:Chain of Memories et les cinématiques remasterisées de 358/2 Days sous forme de film.",
      en: "First HD collection: Kingdom Hearts Final Mix, Re:Chain of Memories and the remastered cutscenes of 358/2 Days as a movie.",
    },
  },
  {
    slug: "hd-2-5-remix",
    title: "Kingdom Hearts HD 2.5 ReMIX",
    shortTitle: "2.5",
    kind: "collection",
    status: "released",
    release: { jp: "2014-10-02", na: "2014-12-02", eu: "2014-12-05" },
    platforms: ["PlayStation 3"],
    developer: "Square Enix",
    includes: ["kingdom-hearts-ii", "birth-by-sleep", "re-coded"],
    accent: "#d4ac0d",
    cover: { src: "/images/games/hd-2-5-remix.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 783, height: 900 },
    synopsis: {
      fr: "Kingdom Hearts II Final Mix, Birth by Sleep Final Mix et les cinématiques de Re:coded en film.",
      en: "Kingdom Hearts II Final Mix, Birth by Sleep Final Mix and the cutscenes of Re:coded as a movie.",
    },
  },
  {
    slug: "hd-2-8-final-chapter-prologue",
    title: "Kingdom Hearts HD 2.8 Final Chapter Prologue",
    shortTitle: "2.8",
    kind: "collection",
    status: "released",
    release: { jp: "2017-01-12", na: "2017-01-24", eu: "2017-01-24" },
    platforms: ["PlayStation 4", "Xbox One", "Nintendo Switch (cloud)", "PC"],
    developer: "Square Enix",
    includes: ["dream-drop-distance", "0-2-birth-by-sleep-a-fragmentary-passage", "kingdom-hearts-chi"],
    accent: "#16a085",
    cover: { src: "/images/games/hd-2-8-final-chapter-prologue.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 723, height: 900 },
    synopsis: {
      fr: "Dream Drop Distance HD, l'épisode inédit 0.2 Birth by Sleep et le film χ Back Cover, qui raconte les Prophètes de l'Âge des Fées.",
      en: "Dream Drop Distance HD, the brand-new 0.2 Birth by Sleep episode and the χ Back Cover movie, which tells the story of the Foretellers.",
    },
  },
  {
    slug: "hd-1-5-2-5-remix",
    title: "Kingdom Hearts HD 1.5 + 2.5 ReMIX",
    shortTitle: "1.5 + 2.5",
    kind: "collection",
    status: "released",
    release: { jp: "2017-03-09", na: "2017-03-28", eu: "2017-03-31" },
    platforms: ["PlayStation 4", "Xbox One", "Nintendo Switch (cloud)", "PC"],
    developer: "Square Enix",
    includes: ["hd-1-5-remix", "hd-2-5-remix"],
    accent: "#5b2c6f",
    cover: { src: "/images/games/hd-1-5-2-5-remix.jpg", credit: "© Square Enix / Disney — logo officiel, via Kingdom Hearts Wiki", width: 900, height: 615 },
    synopsis: {
      fr: "Les six titres des compilations 1.5 et 2.5 réunis sur une seule galette, en 60 images par seconde.",
      en: "The six titles of the 1.5 and 2.5 collections gathered on a single disc, at 60 frames per second.",
    },
  },
  {
    slug: "all-in-one-package",
    title: "Kingdom Hearts All-in-One Package",
    shortTitle: "All-in-One",
    kind: "collection",
    status: "released",
    release: { na: "2020-03-17", eu: "2020-03-17" },
    platforms: ["PlayStation 4"],
    developer: "Square Enix",
    includes: ["hd-1-5-2-5-remix", "hd-2-8-final-chapter-prologue", "kingdom-hearts-iii"],
    accent: "#c0392b",
    cover: { src: "/images/games/all-in-one-package.jpg", credit: "© Square Enix / Disney — jaquette, via Kingdom Hearts Wiki", width: 711, height: 900 },
    synopsis: {
      fr: "Dix histoires en un coffret : l'intégralité de la Saga des Ténèbres de Xehanort, de Kingdom Hearts à Kingdom Hearts III.",
      en: "Ten stories in one box: the entire Dark Seeker Saga, from Kingdom Hearts to Kingdom Hearts III.",
    },
  },
  {
    slug: "integrum-masterpiece",
    title: "Kingdom Hearts Integrum Masterpiece",
    shortTitle: "Integrum",
    kind: "collection",
    status: "released",
    release: { jp: "2022-02-10", na: "2022-02-10", eu: "2022-02-10" },
    platforms: ["Nintendo Switch (cloud)", "PC (Steam)"],
    developer: "Square Enix",
    includes: ["hd-1-5-2-5-remix", "hd-2-8-final-chapter-prologue", "kingdom-hearts-iii"],
    accent: "#1f618d",
    synopsis: {
      fr: "La saga complète réunie pour Nintendo Switch (versions cloud, 2022) puis pour PC via Steam (juin 2024), avec Melody of Memory en bonus sur Steam.",
      en: "The complete saga gathered for Nintendo Switch (cloud versions, 2022) and then PC via Steam (June 2024), with Melody of Memory as a Steam bonus.",
    },
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function releaseYear(g: Game): number | undefined {
  const d = g.release.jp ?? g.release.na ?? g.release.eu;
  return d ? Number(d.slice(0, 4)) : undefined;
}

export function localized(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text.en ?? text.fr;
}

/** Jeux classés par première sortie */
export function byRelease(): Game[] {
  return [...games].sort((a, b) => {
    const da = a.release.jp ?? a.release.na ?? a.release.eu ?? "9999";
    const db = b.release.jp ?? b.release.na ?? b.release.eu ?? "9999";
    return da.localeCompare(db);
  });
}

/** Jeux ayant une place dans la chronologie interne, groupés par ordre (parallèles ensemble) */
export function byStory(): { order: number; games: Game[] }[] {
  const map = new Map<number, Game[]>();
  for (const g of games) {
    if (g.chronoOrder == null) continue;
    map.set(g.chronoOrder, [...(map.get(g.chronoOrder) ?? []), g]);
  }
  return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([order, gs]) => ({ order, games: gs }));
}
