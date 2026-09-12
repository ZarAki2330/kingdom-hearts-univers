import type { LocalizedText } from "@/data/games";
import type { WalkQuest } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Les guides et annexes de Kingdom Hearts III : les collectes, les défis facultatifs et les
 * pages de référence. Elles sont annoncées avant d'être rédigées — le sommaire dit ce que la
 * soluce couvrira, et ce qui reste à écrire.
 */
export const quests: WalkQuest[] = [
  {
    id: "emblemes-fetiches",
    title: L("Les emblèmes fétiches", "The Lucky Emblems"),
    tagline: L(
      "Quatre-vingt-dix emblèmes de Mickey à photographier, et la condition de la scène secrète.",
      "Ninety Mickey emblems to photograph, and the secret-ending condition.",
    ),
    entry: "mickey",
    status: "todo",
  },
  {
    id: "foret-des-reves-bleus",
    title: L("Forêt des Rêves Bleus", "Hundred Acre Wood"),
    tagline: L(
      "Le livre de Winnie, et les mini-jeux de Petit Chef qui vont avec.",
      "Pooh's book, and the Little Chef mini-games that come with it.",
    ),
    entry: "hundred-acre-wood",
    status: "todo",
  },
  {
    id: "portails-de-combat",
    title: L("Les portails de combat", "The Battlegates"),
    tagline: L(
      "Quatorze portails, et les combats les plus durs du jeu de base.",
      "Fourteen gates, and the hardest fights in the base game.",
    ),
    entry: "heartless",
    status: "todo",
  },
  {
    id: "sept-flantastiques",
    title: L("Les Sept Flantastiques", "The Flantastic Seven"),
    tagline: L(
      "Sept flans, sept mini-jeux, et les meilleures récompenses de la cuisine.",
      "Seven puddings, seven mini-games, and the kitchen's best rewards.",
    ),
    entry: "heartless",
    status: "todo",
  },
  {
    id: "bistrot",
    title: L("Le Bistrot du Petit Chef", "Le Grand Bistrot"),
    tagline: L(
      "Les recettes de Petit Chef, et les bonus de repas avant un combat difficile.",
      "Little Chef's recipes, and the meal bonuses before a hard fight.",
    ),
    entry: "moogles",
    status: "todo",
  },
  {
    id: "atelier-mog",
    title: L("L'atelier des Mogs", "The moogle workshop"),
    tagline: L(
      "La synthèse de Kingdom Hearts III : les matériaux, les recettes et l'Ultima.",
      "Kingdom Hearts III's synthesis: materials, recipes and the Ultima Weapon.",
    ),
    entry: "moogles",
    status: "todo",
  },
  {
    id: "formes-keyblade",
    title: L("Les Keyblades et leurs formes", "The Keyblades and their transformations"),
    tagline: L(
      "Chaque Keyblade et ses deux formes, ses capacités et sa finition.",
      "Each Keyblade and its two forms, its abilities and its finisher.",
    ),
    entry: "kingdom-key",
    status: "todo",
  },
  {
    id: "figurines-hercule",
    title: L("Les figurines dorées d'Hercule", "The golden Hercules figures"),
    tagline: L(
      "Les figurines cachées dans tous les mondes, et ce qu'elles rapportent.",
      "The figurines hidden across every world, and what they pay out.",
    ),
    entry: "hercules",
    status: "todo",
  },
  {
    id: "royaume-classique",
    title: L("Le Royaume Classique", "Classic Kingdom"),
    tagline: L(
      "Vingt-trois mini-jeux en noir et blanc, tirés des courts-métrages de Mickey.",
      "Twenty-three black-and-white mini-games, drawn from the Mickey shorts.",
    ),
    entry: "mickey",
    status: "todo",
  },
  {
    id: "mini-jeux",
    title: L("Les mini-jeux", "The mini-games"),
    tagline: L(
      "La luge d'Arendelle, le festival de Corona, les manèges et le reste.",
      "Arendelle's sled run, Corona's festival, the rides and the rest.",
    ),
    entry: "sora",
    status: "todo",
  },
  {
    id: "vaisseau-gummi",
    title: L("Le vaisseau Gummi", "The Gummi ship"),
    tagline: L(
      "L'espace ouvert, les trésors, les constellations et les trois Sans-cœur géants.",
      "The open space, the treasures, the constellations and the three giant Heartless.",
    ),
    entry: "chip-and-dale",
    status: "todo",
  },
  {
    id: "rapports-secrets",
    title: L("Les rapports secrets", "The Secret Reports"),
    tagline: L(
      "Les carnets qui expliquent ce que l'histoire garde pour elle.",
      "The notebooks that explain what the story keeps back.",
    ),
    entry: "ansem-the-wise",
    status: "todo",
  },
  {
    id: "inventaire",
    title: L("L'inventaire", "The inventory"),
    tagline: L(
      "Keyblades, armes des compagnons, accessoires et objets-clés.",
      "Keyblades, party weapons, accessories and key items.",
    ),
    entry: "kingdom-key",
    status: "todo",
  },
  {
    id: "bestiaire",
    title: L("Le bestiaire", "The bestiary"),
    tagline: L(
      "Les Sans-cœur, les Similis et les Nescients de Kingdom Hearts III.",
      "Kingdom Hearts III's Heartless, Nobodies and Unversed.",
    ),
    entry: "heartless",
    status: "todo",
  },
  {
    id: "trophees",
    title: L("Les trophées", "Trophies"),
    tagline: L(
      "La liste complète, et ce que demande le platine.",
      "The complete list, and what the platinum asks for.",
    ),
    entry: "jiminy-cricket",
    status: "todo",
  },
  {
    id: "scene-secrete",
    title: L("La scène secrète", "The secret ending"),
    tagline: L(
      "Les emblèmes fétiches par difficulté, et ce que la scène annonce.",
      "The Lucky Emblems by difficulty, and what the scene announces.",
    ),
    entry: "sora",
    status: "todo",
  },
];
