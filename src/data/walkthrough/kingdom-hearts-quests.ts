import type { LocalizedText } from "@/data/games";
import type { WalkPlace, WalkQuest } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/** Crédit commun des visuels repris du Kingdom Hearts Wiki (voir docs/IMAGES.md). */
const credit = (file: string) => `© Square Enix / Disney — via Kingdom Hearts Wiki (${file})`;

/** Une ligne d'emplacement : monde, ce qu'on y trouve, où, et ce qu'il faut avoir. */
const at = (world: string, what: [string, string], where: [string, string], requires?: [string, string]): WalkPlace => ({
  world: L(world, world),
  what: L(what[0], what[1]),
  where: L(where[0], where[1]),
  requires: requires ? L(requires[0], requires[1]) : undefined,
});

/**
 * Les 33 coffres à chiots, dans l'ordre des mondes. Les emplacements donnés sont ceux de
 * Final Mix : plusieurs coffres ont été déplacés par rapport à la version d'origine, et
 * c'est Final Mix qui se joue aujourd'hui.
 */
const puppies: WalkPlace[] = [
  at("Ville de Traverse", ["Chiots 1 à 3", "Puppies 1 to 3"], ["Sur le rocher, en face de la maison de Merlin.", "On the rock island across from Merlin's house."], ["Planer ou Nage de sirène", "Glide or Mermaid Kick"]),
  at("Ville de Traverse", ["Chiots 4 à 6", "Puppies 4 to 6"], ["Dans la ruelle, derrière un mur de caisses.", "In the Alleyway, behind a wall of crates."], ["Trinité Charge", "Trinity Charge"]),
  at("Ville de Traverse", ["Chiots 7 à 9", "Puppies 7 to 9"], ["Dans l'atelier, au-dessus de la boutique d'accessoires.", "In the Item Workshop, above the Accessory Shop."], ["Trinité Échelle", "Trinity Ladder"]),
  at("Ville de Traverse", ["Chiots 10 à 12", "Puppies 10 to 12"], ["Dans l'égout secret, derrière la grille.", "In the Secret Waterway, behind the sewer gate."], ["Trinité Charge", "Trinity Charge"]),
  at("Pays des Merveilles", ["Chiots 13 à 15", "Puppies 13 to 15"], ["Sur la haie gauche du château de la Reine.", "On the left hedge of the Queen's Castle."], ["Sortie de la pièce à l'envers", "The exit from the upside-down room"]),
  at("Pays des Merveilles", ["Chiots 16 à 18", "Puppies 16 to 18"], ["Sur l'un des nénuphars surélevés de la forêt de lotus.", "On one of the raised lily pads in the Lotus Forest."]),
  at("Pays des Merveilles", ["Chiots 19 à 21", "Puppies 19 to 21"], ["Sur l'arche d'entrée du jardin du thé.", "On the arched entrance to the Tea Party Garden."], ["Saut Haut et Planer", "High Jump and Glide"]),
  at("Pays des Merveilles", ["Chiots 58 à 60", "Puppies 58 to 60"], ["Forêt de lotus : par la porte au-dessus de l'entrée du jardin du thé, activez le cadre pour revenir dans la forêt, puis lancez Foudre sur la guirlande de fleurs.", "Lotus Forest: through the door above the Tea Party Garden entrance, activate the picture frame to return to the forest, then cast Thunder on the string of flowers."], ["Foudre", "Thunder"]),
  at("Colisée de l'Olympe", ["Chiots 22 à 24", "Puppies 22 to 24"], ["Devant le Colisée, sous la statue de droite.", "At the Coliseum Gates, under the right-hand statue."], ["Trinité Saut", "Trinity Jump"]),
  at("Jungle Profonde", ["Chiots 25 à 27", "Puppies 25 to 27"], ["Sur le dernier îlot du marais aux hippopotames.", "On the last islet in the Hippos' Lagoon."], ["Planer conseillé", "Glide recommended"]),
  at("Jungle Profonde", ["Chiots 28 à 30", "Puppies 28 to 30"], ["En haut de la liane qui part du marais aux hippopotames.", "At the top of the vine leading up from the Hippos' Lagoon."]),
  at("Jungle Profonde", ["Chiots 31 à 33", "Puppies 31 to 33"], ["Dans la caverne de la cascade.", "In the Waterfall Cavern."]),
  at("Jungle Profonde", ["Chiots 34 à 36", "Puppies 34 to 36"], ["Au campement, près du matériel de Jane.", "At the Camp, near the lab equipment."], ["Trinité Saut", "Trinity Jump"]),
  at("Agrabah", ["Chiots 37 à 39", "Puppies 37 to 39"], ["Dans la salle du trésor de la caverne.", "In the Cave of Wonders' Treasure Room."]),
  at("Agrabah", ["Chiots 46 à 48", "Puppies 46 to 48"], ["Dans la salle cachée du palais.", "In the palace's Hidden Room."], ["Trinité Poussée, ou Saut Haut et Planer", "Trinity Push, or High Jump and Glide"]),
  at("Agrabah", ["Chiots 49 à 51", "Puppies 49 to 51"], ["À l'entrée de la caverne, en haut du pilier : poussez un tonneau au pied de l'estrade pour vous en servir de marche.", "At the Cave: Entrance, on top of the pillar: push a barrel next to the pedestal to use as a foothold."], ["Saut Haut, ou Planer", "High Jump, or Glide"]),
  at("Agrabah", ["Chiots 52 à 54", "Puppies 52 to 54"], ["Devant les portes du palais.", "At the Palace Gates."], ["Saut Haut", "High Jump"]),
  at("Monstro", ["Chiots 55 à 57", "Puppies 55 to 57"], ["Troisième cavité, sur une plateforme accessible par un tonneau.", "Chamber 3, on a platform reached with a barrel."]),
  at("Monstro", ["Chiots 73 à 75", "Puppies 73 to 75"], ["Dans la bouche, au sommet des débris.", "In the Mouth, on top of the debris."], ["Saut Haut", "High Jump"]),
  at("Monstro", ["Chiots 76 à 78", "Puppies 76 to 78"], ["Sixième cavité.", "In Chamber 6."]),
  at("Monstro", ["Chiots 79 à 81", "Puppies 79 to 81"], ["Cinquième cavité, sur un tonneau posé en hauteur.", "In Chamber 5, on a barrel on one of the higher platforms."]),
  at("Ville d'Halloween", ["Chiots 40 à 42", "Puppies 40 to 42"], ["Sur l'arche sous le manoir d'Oogie Boogie ; une fois le manoir détruit, le coffre se retrouve dans les ruines.", "On the arch below Oogie's Manor; once the manor is destroyed, the chest turns up in the Manor Ruins."]),
  at("Ville d'Halloween", ["Chiots 64 à 66", "Puppies 64 to 66"], ["Au cimetière, par le passage secret ouvert après la destruction du manoir.", "In the Cemetery, through the secret doorway opened after the manor falls."]),
  at("Ville d'Halloween", ["Chiots 67 à 69", "Puppies 67 to 69"], ["Sur la colline au clair de lune.", "On Moonlight Hill."], ["Trinité Détection", "Trinity Detect"]),
  at("Ville d'Halloween", ["Chiots 70 à 72", "Puppies 70 to 72"], ["Place de la guillotine, dans la gueule de la tour grise en forme de citrouille.", "In Guillotine Square, in the mouth of the grey pumpkin-shaped tower."], ["Planer", "Glide"]),
  at("Pays Imaginaire", ["Chiots 43 à 45", "Puppies 43 to 45"], ["Sur le pont du navire.", "On the ship's Deck."], ["Trinité Détection", "Trinity Detect"]),
  at("Pays Imaginaire", ["Chiots 82 à 84", "Puppies 82 to 84"], ["Dans la cale, sur une poutre près du plafond.", "In the Ship's Hold, on a beam near the top of the room."], ["Voler", "Flight"]),
  at("Pays Imaginaire", ["Chiots 85 à 87", "Puppies 85 to 87"], ["Dans la cale, derrière une porte de l'étage supérieur.", "In the Ship's Hold, behind a door on the upper level."], ["Trinité Poussée, après la Trinité Détection sur la porte", "Trinity Push, after Trinity Detect on the door"]),
  at("Pays Imaginaire", ["Chiots 88 à 90", "Puppies 88 to 90"], ["Dans la cabine du capitaine.", "In the Captain's Cabin."]),
  at("Forteresse Oubliée", ["Chiots 61 à 63", "Puppies 61 to 63"], ["Dans le grand hall, sur une corniche à gauche du trou de serrure, lors de la seconde visite.", "In the Grand Hall, on a left-hand ledge near the Keyhole, during the second visit."]),
  at("Forteresse Oubliée", ["Chiots 91 à 93", "Puppies 91 to 93"], ["Aux chutes ascendantes, sur l'une des plateformes flottantes.", "At the Rising Falls, on one of the floating platforms."]),
  at("Forteresse Oubliée", ["Chiots 94 à 96", "Puppies 94 to 96"], ["Aux portes du château : lancez Gravité pour faire descendre la plateforme.", "At the Castle Gates: cast Gravity to lower the floating platform."], ["Gravité", "Gravity"]),
  at("Forteresse Oubliée", ["Chiots 97 à 99", "Puppies 97 to 99"], ["À l'arrêt de l'ascenseur, dans la partie ouverte par l'énigme de la bibliothèque : le coffre flotte, faites-le descendre avec Gravité.", "At the Lift Stop, in the part unlocked by the library puzzle: the chest floats, bring it down with Gravity."], ["Gravité", "Gravity"]),
];

const trinityJump: WalkPlace[] = [
  at("Ville de Traverse", ["Balcon et carte postale", "Balcony and a postcard"], ["Premier district, devant les tables du restaurant.", "First District, in front of the restaurant tables."]),
  at("Ville de Traverse", ["Munnies", "Munny"], ["Premier district, dans le coin gauche près de la sortie du monde.", "First District, in the left corner near the world exit."]),
  at("Ville de Traverse", ["Nécessaire de camping et munnies", "Camping Set and munny"], ["Troisième district, dans la ruelle derrière la fontaine.", "Third District, in the alley behind the fountain."]),
  at("Ville de Traverse", ["Méga-Éther et munnies", "Mega-Ether and munny"], ["Bureau du magicien, près de l'entrée.", "Magician's Study, near the main entrance."]),
  at("Pays des Merveilles", ["Potion, Éther, tente", "Potion, Ether, Tent"], ["Forêt de lotus, dans l'alcôve de droite où l'on donne une Potion à la fleur.", "Lotus Forest, in the alcove on the right where you give the flower a Potion."]),
  at("Pays des Merveilles", ["Nécessaire de camping", "Camping Set"], ["Forêt de lotus : une fois le rocher sorti de la fleur, grandissez, poussez-le dans l'eau, rapetissez et montez par les nénuphars.", "Lotus Forest: once the boulder comes out of the flower, grow big, push it into the water, shrink back and climb the lily pads."]),
  at("Colisée de l'Olympe", ["Chiots 22 à 24", "Puppies 22 to 24"], ["Sous la statue de droite, devant le Colisée.", "Under the right-hand statue at the Coliseum Gates."]),
  at("Colisée de l'Olympe", ["Éclat de mithril", "Mythril Shard"], ["Sous la statue de gauche.", "Under the left-hand statue."]),
  at("Jungle Profonde", ["Chiots 34 à 36", "Puppies 34 to 36"], ["Au campement, près du matériel scientifique.", "At the Camp, near the lab equipment."]),
  at("Jungle Profonde", ["Foudra-G", "Thundara-G"], ["Sur la corniche la plus haute des arbres à grimper, près de la cabane.", "On the topmost ledge of the Climbing Trees, near the Tree House."]),
  at("Agrabah", ["Méga-Éther et munnies", "Mega-Ether and munny"], ["Au milieu du bazar.", "In the middle of the Bazaar."]),
  at("Agrabah", ["Foudra-G", "Thundara-G"], ["Chambre silencieuse, juste devant les marches.", "Silent Chamber, right in front of the steps."]),
  at("Monstro", ["Chalet et munnies", "Cottage and munny"], ["Cinquième cavité, devant l'entrée basse venant de la sixième.", "Chamber 5, in front of the lower entrance from Chamber 6."]),
  at("Monstro", ["Potions et chalet", "Potions and a Cottage"], ["Dans la bouche, au pied du tas de débris près des dents.", "In the Mouth, at the foot of the debris pile near the teeth."]),
  at("Monstro", ["Éclat de mithril et munnies", "Mythril Shard and munny"], ["Au centre du sol de la gorge.", "In the centre of the Throat's floor."]),
  at("Forteresse Oubliée", ["Méga-Potion, Méga-Éther, chalet", "Mega-Potion, Mega-Ether, Cottage"], ["Au centre du cachot.", "In the centre of the Dungeon."]),
];

const trinityCharge: WalkPlace[] = [
  at("Ville de Traverse", ["Accès à la ruelle et aux chiots 4 à 6", "Access to the Alleyway and puppies 4 to 6"], ["Premier district, au fond de la ruelle derrière la boutique d'objets.", "First District, at the end of the alley behind the Item Shop."]),
  at("Ville de Traverse", ["Accès à la cloche qui révèle le trou de serrure", "Access to the bell that reveals the Keyhole"], ["Sur le toit du magasin Gizmo, deuxième district, le long du mur du fond.", "On the Gizmo Shop roof in the Second District, along the back wall."]),
  at("Ville de Traverse", ["Accès à l'égout secret", "Access to the Secret Waterway"], ["Sur la grille d'évacuation, au bout de la ruelle près de la maison des dalmatiens.", "On the drainage grate at the end of the alley near the Dalmatians' house."]),
  at("Agrabah", ["Éclat de mithril et munnies", "Mythril Shard and munny"], ["Salle du trésor, devant la statue.", "Treasure Room, in front of the statue."]),
  at("Ville d'Halloween", ["Éclat de mithril", "Mythril Shard"], ["Sur l'arche sous le manoir d'Oogie Boogie.", "On the arch below Oogie's Manor."]),
  at("Forteresse Oubliée", ["Méga-Élixir et chalets", "Megalixir and Cottages"], ["Grande crête, balcon inférieur droit, près du point d'arrivée du grand ascenseur magique.", "Great Crest, lower right-hand balcony, near the landing point of the large magic lift."]),
];

const trinityLadder: WalkPlace[] = [
  at("Ville de Traverse", ["Échelle vers l'atelier (chiots 7 à 9)", "Ladder to the Item Workshop (puppies 7 to 9)"], ["Au milieu du sol de la boutique d'accessoires.", "In the middle of the Accessory Shop floor."]),
  at("Pays des Merveilles", ["Élixir", "Elixir"], ["Terrier du lapin, à l'endroit où l'on arrive dans le monde.", "Rabbit Hole, where you first enter the world."]),
  at("Pays des Merveilles", ["Éclat de mithril", "Mythril Shard"], ["Dans la cheminée de la pièce bizarre.", "In the fireplace of the Bizarre Room."]),
  at("Colisée de l'Olympe", ["Mithril", "Mythril"], ["À gauche de l'entrée, devant le classement des tournois.", "To the left of the main entrance, in front of the tournament rankings."]),
  at("Jungle Profonde", ["Éclat de mithril", "Mythril Shard"], ["À la cime des arbres, en plein centre — difficile à voir dans le feuillage.", "At the Treetop, right in the centre — hard to see in the foliage."]),
  at("Agrabah", ["Boost de compétence", "AP Up"], ["Dans la réserve, devant l'étagère.", "In the Storage room, in front of the shelf."]),
  at("Monstro", ["Éclat de mithril", "Mythril Shard"], ["Sur le toit du bateau de Geppetto, dans la bouche.", "On the roof of Geppetto's ship, in the Mouth."], ["Saut Haut", "High Jump"]),
  at("Pays Imaginaire", ["Accès à la cabine du capitaine", "Access to the Captain's Cabin"], ["Au milieu du sol de la cabine du navire.", "In the middle of the Ship's Cabin floor."]),
];

const trinityPush: WalkPlace[] = [
  at("Ville de Traverse", ["Accès au boost de compétence", "Access to an AP Up"], ["Maison mystique, au fond, sur la pile de caisses.", "Mystical House, at the back, on the stack of crates."]),
  at("Colisée de l'Olympe", ["Trou de serrure du monde", "The world's Keyhole"], ["Dans le hall, à côté de la pierre que Phil demande de déplacer.", "In the Lobby, next to the stone Phil asks you to move."]),
  at("Agrabah", ["Accès à la salle cachée", "Access to the Hidden Room"], ["Dans le hall de la caverne, devant le pilier.", "In the Cave: Hall, in front of the pillar."]),
  at("Forteresse Oubliée", ["Livre Azal volume 3", "Azal vol. 3"], ["Bibliothèque, deuxième étage, près de la table.", "Library, second floor, near the table."]),
];

const trinityDetect: WalkPlace[] = [
  at("Ville de Traverse", ["Orichalque", "Orichalcum"], ["Égout secret, à la jonction du petit tunnel et du tunnel principal.", "Secret Waterway, where the short tunnel meets the main one."]),
  at("Pays des Merveilles", ["Keyblade As de Cœur", "Lady Luck Keyblade"], ["Forêt de lotus, dans la zone cachée atteinte en allumant les lampes près du tableau vide.", "Lotus Forest, in the hidden area reached by lighting the lamps next to the blank painting."]),
  at("Colisée de l'Olympe", ["Bâton Violetta", "Violetta staff"], ["Au sol, en plein centre du parvis du Colisée.", "On the ground, in the very centre of the Coliseum Gates."]),
  at("Jungle Profonde", ["Orichalque", "Orichalcum"], ["Caverne des cœurs, devant le trou de serrure.", "Cavern of Hearts, in front of the Keyhole."]),
  at("Agrabah", ["Ceinture d'Ifrit", "Ifrit Belt"], ["Au milieu du sol, à l'entrée de la caverne.", "In the middle of the floor at the Cave: Entrance."]),
  at("Monstro", ["Matière noire", "Dark Matter"], ["Sixième cavité, dans le creux derrière la plus haute « marche ».", "Chamber 6, in the low-lying area behind the tallest step."]),
  at("Atlantica", ["Orichalque", "Orichalcum"], ["Palais de Triton, au centre de la structure en spirale.", "Triton's Palace, at the centre of the spiral shell structure."]),
  at("Ville d'Halloween", ["Chiots 67 à 69", "Puppies 67 to 69"], ["Colline au clair de lune, à gauche de l'entrée, près du mur brisé.", "Moonlight Hill, to the left of the entrance, near the broken wall."]),
  at("Pays Imaginaire", ["Chiots 43 à 45", "Puppies 43 to 45"], ["À l'arrière du navire pirate.", "At the back of the Pirate Ship."]),
  at("Pays Imaginaire", ["Accès à l'Orichalque et aux chiots 85 à 87", "Access to the Orichalcum and puppies 85 to 87"], ["Dans la cale, sur la porte de gauche du niveau supérieur.", "In the Ship's Hold, on the left-hand door of the upper level."]),
  at("Forteresse Oubliée", ["Foudraga-G", "Thundaga-G"], ["Aux chutes ascendantes, dans le bassin peu profond où l'on retrouve Riku.", "At the Rising Falls, in the shallow pool where you meet Riku."]),
];

/** Quête annoncée mais pas encore rédigée. */
const soon = (id: string, title: LocalizedText, tagline: LocalizedText, entry?: string, image?: WalkQuest["image"]): WalkQuest => ({
  id,
  title,
  tagline,
  entry,
  image,
  status: "todo",
});

export const quests: WalkQuest[] = [
  {
    id: "99-dalmatiens",
    title: L("Les 99 dalmatiens", "The 99 puppies"),
    tagline: L(
      "Trente-trois coffres dispersés dans neuf mondes, et la plus longue collecte du jeu.",
      "Thirty-three chests spread across nine worlds, and the game's longest collection.",
    ),
    image: { src: "/images/walkthrough/pongo.webp", credit: credit("Pongo_KH.png"), width: 206, height: 149 },
    status: "done",
    intro: L(
      "Pongo et Perdita ont perdu leurs 99 chiots dans la tempête des mondes. Ils vous attendent dans leur maison, au troisième district de la Ville de Traverse, et vous les rendent par trois : chaque coffre contient trois chiots.\n\nC'est la collecte qui structure tout le 100 % : elle demande les cinq trinités, les trois capacités de déplacement (Saut Haut, Planer, Nage de sirène) et l'accès aux dernières zones du jeu. Autrement dit, on ne la termine qu'en toute fin de partie — mais ramasser au passage évite de tout refaire.\n\nLes emplacements ci-dessous sont ceux de Final Mix. Plusieurs coffres ont changé de place par rapport à la version de 2002 : si un guide plus ancien vous envoie ailleurs, c'est cette raison-là.",
      "Pongo and Perdita lost their 99 puppies in the storm between worlds. They wait in their house in Traverse Town's Third District, and take them back three at a time: each chest holds three puppies.\n\nThis is the collection that shapes the whole 100%: it needs all five Trinity commands, the three movement abilities (High Jump, Glide, Mermaid Kick) and access to the game's final areas. In other words it can only be finished very late — but picking chests up along the way saves a second tour.\n\nThe locations below are the Final Mix ones. Several chests moved compared with the 2002 release: that is why an older guide may send you elsewhere.",
    ),
    tables: [
      {
        id: "coffres",
        title: L("Les 33 coffres", "The 33 chests"),
        intro: L(
          "Dans l'ordre des mondes, pas dans l'ordre des numéros : les chiots ne sont pas numérotés dans l'ordre de la visite.",
          "In world order, not number order: the puppies are not numbered in the order you visit.",
        ),
        rows: puppies,
      },
    ],
    rewards: [
      {
        label: L("Par paliers de dix chiots", "Every ten puppies"),
        text: L(
          "Pongo et Perdita ouvrent leur maison à mesure : objets de soin, matériaux de synthèse, puis les récompenses rares. Repassez les voir régulièrement plutôt qu'une seule fois à la fin.",
          "Pongo and Perdita hand out rewards as you go: healing items, synthesis materials, then the rare rewards. Drop by regularly rather than once at the very end.",
        ),
      },
      {
        label: L("Aux 99 chiots", "At 99 puppies"),
        text: L(
          "La récompense finale comprend un Orichalque — matériau nécessaire à l'Ultima Weapon — et compte pour la section « 101 Dalmatiens » du Journal de Jiminy, donc pour la seconde fin secrète.",
          "The final reward includes an Orichalcum — a material required for the Ultima Weapon — and completes the \"101 Dalmatians\" section of Jiminy's Journal, and with it the second secret ending.",
        ),
      },
    ],
  },
  {
    id: "marques-trio",
    title: L("Les marques Trio", "The Trinity Marks"),
    tagline: L(
      "Cinq commandes à trois, une quarantaine de marques au sol, et beaucoup de trésors cachés.",
      "Five three-person commands, some forty marks on the ground, and a lot of hidden treasure.",
    ),
    entry: "goofy",
    status: "done",
    intro: L(
      "Les marques Trio sont des symboles peints au sol : quand Sora s'y tient avec Donald et Dingo, le trio exécute une action commune. Certaines ouvrent la route, la plupart révèlent un trésor, et toutes comptent pour le Journal de Jiminy.\n\nLes cinq commandes s'apprennent au fil de l'histoire : Saut après l'Armure Gardienne à la Ville de Traverse, puis Charge, Échelle, Poussée et Détection. Presque toutes les marques restent activables jusqu'à la fin du jeu — inutile de se précipiter, sauf à la Ville d'Halloween, où la marque du manoir d'Oogie Boogie disparaît avec le manoir dans la version d'origine (Final Mix la déplace sur l'arche, où elle reste accessible).",
      "Trinity Marks are symbols painted on the ground: when Sora stands on one with Donald and Goofy, the trio performs a shared action. Some open the way, most reveal treasure, and all count towards Jiminy's Journal.\n\nThe five commands are learned along the story: Jump after the Guard Armor in Traverse Town, then Charge, Ladder, Push and Detect. Nearly every mark stays usable until the end of the game — no need to rush, except in Halloween Town, where the mark in Oogie's Manor disappears with the manor in the original release (Final Mix moves it to the arch, where it stays reachable).",
    ),
    tables: [
      { id: "saut", title: L("Trinité Saut (bleue)", "Trinity Jump (blue)"), rows: trinityJump },
      { id: "charge", title: L("Trinité Charge (verte)", "Trinity Charge (green)"), rows: trinityCharge },
      { id: "echelle", title: L("Trinité Échelle (jaune)", "Trinity Ladder (yellow)"), rows: trinityLadder },
      { id: "poussee", title: L("Trinité Poussée (blanche)", "Trinity Push (white)"), rows: trinityPush },
      { id: "detection", title: L("Trinité Détection (rouge)", "Trinity Detect (red)"), rows: trinityDetect },
    ],
    rewards: [
      {
        label: L("Ce que ça rapporte", "What it is worth"),
        text: L(
          "Quatre des cinq Orichalques du jeu viennent d'une marque Trio, ainsi que la Keyblade As de Cœur et plusieurs boosts permanents. Activer toutes les marques remplit la section « Marques Trio » du Journal.",
          "Four of the game's five Orichalcum come from a Trinity Mark, along with the Lady Luck Keyblade and several permanent boosts. Activating every mark fills the Journal's \"Trinity Marks\" section.",
        ),
      },
    ],
  },
  soon(
    "foret-des-reves-bleus",
    L("Forêt des Rêves Bleus", "Hundred Acre Wood"),
    L("Le monde de Winnie l'ourson, ses pages arrachées et ses mini-jeux.", "Winnie the Pooh's world, its torn-out pages and its mini-games."),
    undefined,
    { src: "/images/walkthrough/pooh-house.webp", credit: credit("100 Acre Wood- Pooh's House (Art) KH.png"), width: 400, height: 333 },
  ),
  soon(
    "cartes-postales",
    L("Les cartes postales", "The postcards"),
    L("Dix cartes à glisser dans la boîte aux lettres de la Ville de Traverse.", "Ten postcards to drop in the Traverse Town mailbox."),
    "traverse-town",
  ),
  soon(
    "atelier-des-mogs",
    L("L'atelier des Mogs", "The moogle workshop"),
    L("La synthèse d'objets, des matériaux de base jusqu'à l'Ultima Weapon.", "Item synthesis, from basic materials up to the Ultima Weapon."),
    undefined,
    { src: "/images/walkthrough/moogle.webp", credit: credit("Moogle (Art) KH.png"), width: 164, height: 400 },
  ),
  soon(
    "ennemis-speciaux",
    L("Les ennemis spéciaux", "The special enemies"),
    L("Les Sans-cœur rares à débusquer pour compléter le Journal.", "The rare Heartless to track down to complete the Journal."),
    "heartless",
  ),
  soon(
    "tournois-colisee",
    L("Les tournois du Colisée", "The Coliseum tournaments"),
    L("Les quatre coupes, leurs règles et leurs séries d'adversaires.", "The four cups, their rules and their line-ups."),
    "olympus",
  ),
  soon(
    "rapports-ansem",
    L("Les rapports d'Ansem", "Ansem's Reports"),
    L("Treize pages qui expliquent les Sans-cœur — et toute la suite de la saga.", "Thirteen pages that explain the Heartless — and the rest of the saga."),
    "ansem-the-wise",
  ),
  soon(
    "surf-jungle",
    L("Le surf de la jungle", "Jungle slider"),
    L("Le mini-jeu de descente en liane et ses records.", "The vine-sliding mini-game and its records."),
    "tarzan",
  ),
  soon(
    "kurt-zisa",
    L("Kurt Zisa", "Kurt Zisa"),
    L("Le boss caché d'Agrabah, et l'un des plus durs du jeu.", "Agrabah's hidden boss, and one of the hardest in the game."),
    undefined,
    { src: "/images/walkthrough/kurt-zisa.webp", credit: credit("Kurt_Zisa_KH.png"), width: 400, height: 335 },
  ),
  soon(
    "fantome",
    L("Le Fantôme", "The Phantom"),
    L("L'horloge du Pays Imaginaire, et le combat contre la montre.", "Neverland's clock tower, and a fight against the clock."),
    undefined,
    { src: "/images/walkthrough/phantom.webp", credit: credit("Phantom_KH.png"), width: 378, height: 400 },
  ),
  soon(
    "titan-de-glace",
    L("Le Titan de glace", "The Ice Titan"),
    L("La coupe Platine, et l'art de renvoyer les glaçons.", "The Platinum Match, and the art of batting icicles back."),
    "ice-titan",
  ),
  soon(
    "sephiroth",
    L("Séphiroth", "Sephiroth"),
    L("Le combat facultatif le plus exigeant de Kingdom Hearts.", "The most demanding optional fight in Kingdom Hearts."),
    "sephiroth",
  ),
  soon(
    "inconnu",
    L("L'Inconnu", "The Unknown"),
    L("Le boss ajouté par Final Mix, à la Forteresse Oubliée.", "The boss added by Final Mix, in Hollow Bastion."),
    "xemnas",
  ),
  soon(
    "fin-secrete",
    L("Les fins secrètes", "The secret endings"),
    L("Ce qu'il faut accomplir, difficulté par difficulté, pour les débloquer.", "What to accomplish, difficulty by difficulty, to unlock them."),
    "ansem-seeker-of-darkness",
  ),
];
