import type { LocalizedText } from "@/data/games";
import type { WalkQuest } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Les guides et annexes de Kingdom Hearts II : tout ce qui ne fait pas avancer l'histoire
 * — les deux mondes facultatifs, les collectes, les défis de Final Mix — plus les pages de
 * référence du jeu. Elles sont annoncées avant d'être rédigées : le sommaire dit ce que la
 * soluce couvrira, et ce qui reste à écrire.
 */
export const quests: WalkQuest[] = [
  {
    id: "atlantica",
    title: L("Atlantica", "Atlantica"),
    tagline: L(
      "Le monde musical : six numéros chantés, entièrement facultatifs et indispensables au Journal.",
      "The musical world: six sung numbers, entirely optional and required for the Journal.",
    ),
    entry: "atlantica",
    status: "todo",
  },
  {
    id: "foret-des-reves-bleus",
    title: L("Forêt des Rêves Bleus", "Hundred Acre Wood"),
    tagline: L(
      "Les six pages du livre de Winnie, et les mini-jeux qui vont avec.",
      "The six pages of Pooh's book, and the mini-games that come with them.",
    ),
    entry: "hundred-acre-wood",
    status: "todo",
  },
  {
    id: "coupes-colisee",
    title: L("Les coupes du Colisée", "The Coliseum cups"),
    tagline: L(
      "Six coupes, dont la Paradoxe d'Hadès et ses cinquante manches.",
      "Six cups, including the Hades Paradox and its fifty rounds.",
    ),
    entry: "olympus",
    status: "todo",
  },
  {
    id: "formes",
    title: L("Les formes", "The Drive Forms"),
    tagline: L(
      "Valeur, Sagesse, Maître, Final et Anti : comment les obtenir et comment les monter.",
      "Valor, Wisdom, Master, Final and Anti: how to get them and how to level them.",
    ),
    entry: "sora",
    status: "todo",
  },
  {
    id: "invocations",
    title: L("Les invocations", "The summons"),
    tagline: L(
      "Les quatre charmes, où les trouver, et ce que chacun vaut.",
      "The four charms, where to find them, and what each is worth.",
    ),
    entry: "chip-and-dale",
    status: "todo",
  },
  {
    id: "synthese",
    title: L("La synthèse", "Synthesis"),
    tagline: L(
      "L'atelier des Mogs de Kingdom Hearts II : les recettes, les matériaux et l'Ultima.",
      "Kingdom Hearts II's moogle workshop: the recipes, the materials and the Ultima Weapon.",
    ),
    entry: "moogles",
    status: "todo",
  },
  {
    id: "mini-jeux",
    title: L("Les mini-jeux", "The mini-games"),
    tagline: L(
      "Le Struggle, les courses de la Cité du Crépuscule, les missions Gummi et le reste.",
      "Struggle, Twilight Town's races, the Gummi missions and the rest.",
    ),
    entry: "twilight-town",
    status: "todo",
  },
  {
    id: "puzzles",
    title: L("Les puzzles", "The puzzles"),
    tagline: L(
      "Les six puzzles de Final Mix, et les pièces cachées dans tous les mondes.",
      "Final Mix's six puzzles, and the pieces hidden across every world.",
    ),
    entry: "jiminy-cricket",
    status: "todo",
  },
  {
    id: "mushroom-xiii",
    title: L("Les Mushroom XIII", "The Mushroom XIII"),
    tagline: L(
      "Treize champignons, treize défis, et les récompenses de Final Mix.",
      "Thirteen mushrooms, thirteen challenges, and Final Mix's rewards.",
    ),
    entry: "mushroom-xiii",
    status: "todo",
  },
  {
    id: "repliques-organisation",
    title: L("Les répliques de l'Organisation", "The Absent Silhouettes"),
    tagline: L(
      "Six silhouettes puis treize données : les combats les plus durs du jeu.",
      "Six silhouettes then thirteen data fights: the hardest battles in the game.",
    ),
    entry: "organization-xiii",
    status: "todo",
  },
  {
    id: "boss-optionnels",
    title: L("Les boss facultatifs", "The optional bosses"),
    tagline: L(
      "Séphiroth, la Volonté Persistante, et ce qu'il faut avoir avant d'y aller.",
      "Sephiroth, the Lingering Will, and what you need before going in.",
    ),
    entry: "sephiroth",
    status: "todo",
  },
  {
    id: "rapports-ansem",
    title: L("Les rapports d'Ansem", "Ansem's Reports"),
    tagline: L(
      "Les treize rapports secrets, et ce qu'ils racontent vraiment.",
      "The thirteen secret reports, and what they actually say.",
    ),
    entry: "ansem-the-wise",
    status: "todo",
  },
  {
    id: "inventaire",
    title: L("L'inventaire", "The inventory"),
    tagline: L(
      "Armes, objets, accessoires, armures et objets clés : tout ce que l'équipe peut porter.",
      "Weapons, items, accessories, armour and key items: everything the party can carry.",
    ),
    entry: "moogles",
    status: "todo",
  },
  {
    id: "bestiaire",
    title: L("Le bestiaire", "The bestiary"),
    tagline: L(
      "Toutes les espèces et tous les boss, avec leurs caractéristiques.",
      "Every species and every boss, with their stats.",
    ),
    entry: "heartless",
    status: "todo",
  },
  {
    id: "trophees",
    title: L("Les trophées", "The trophies"),
    tagline: L(
      "La liste complète, et ce qu'il faut faire pour décrocher le Platine.",
      "The full list, and what it takes to get the Platinum.",
    ),
    entry: "sora",
    status: "todo",
  },
  {
    id: "fin-secrete",
    title: L("La fin secrète", "The secret ending"),
    tagline: L(
      "Les conditions selon la difficulté, et ce que la scène annonce.",
      "The conditions by difficulty, and what the scene sets up.",
    ),
    entry: "sora",
    status: "todo",
  },
];
