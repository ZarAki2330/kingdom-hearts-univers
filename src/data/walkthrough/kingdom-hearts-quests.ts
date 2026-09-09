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
    entry: "pongo-and-perdita",
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
    rewards: {
      tierHeader: L("Chiots ramenés", "Puppies returned"),
      intro: L(
        "Pongo et Perdita récompensent le retour des chiots par paliers : repassez les voir régulièrement plutôt qu'une seule fois à la fin.",
        "Pongo and Perdita hand out rewards in tiers: drop by regularly rather than once at the very end.",
      ),
      rows: [
        { tier: L("12", "12"), reward: L("Soin+++G (bloc Gummi)", "Curaga-G (Gummi block)") },
        { tier: L("21", "21"), reward: L("Brasier+++G", "Firaga-G") },
        { tier: L("30", "30"), reward: L("Foudre++G", "Thundara-G") },
        { tier: L("42", "42"), reward: L("Éclat de mithril", "Mythril Shard") },
        { tier: L("51", "51"), reward: L("Page déchirée, mithril", "Torn Page, Mythril") },
        { tier: L("60", "60"), reward: L("Méga-Élixir", "Megalixir") },
        { tier: L("72", "72"), reward: L("Orichalque", "Orichalcum") },
        { tier: L("81", "81"), reward: L("Ultima-G", "Ultima-G") },
        { tier: L("90", "90"), reward: L("Techno-boost", "Tech Boost") },
        { tier: L("99", "99"), reward: L("Pouvoir du vent, panoplie Gummi complète", "Power of Wind, full Gummi set") },
      ],
      note: L(
        "L'Orichalque du palier 72 est l'un des rares du jeu : il entre dans la synthèse de l'Ultima Weapon. Les 99 chiots complètent la section « 101 Dalmatiens » du Journal de Jiminy, donc la seconde fin secrète.",
        "The Orichalcum at 72 is one of the game's rare ones: it goes into the Ultima Weapon recipe. All 99 puppies complete the \"101 Dalmatians\" section of Jiminy's Journal, and with it the second secret ending.",
      ),
    },
  },
  {
    id: "marques-trio",
    title: L("Les marques Trio", "The Trinity Marks"),
    tagline: L(
      "Cinq commandes à trois, une quarantaine de marques au sol, et beaucoup de trésors cachés.",
      "Five three-person commands, some forty marks on the ground, and a lot of hidden treasure.",
    ),
    image: { src: "/images/walkthrough/marques-trio.webp", credit: credit("MarquesTrio.png, wiki francophone"), width: 400, height: 80 },
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
    rewards: {
      tierHeader: L("Commande", "Command"),
      intro: L(
        "Ce que les marques rapportent en tout, une fois toutes activées.",
        "What the marks are worth in total, once every one has been activated.",
      ),
      rows: [
        { tier: L("Saut (bleue)", "Jump (blue)"), reward: L("Objets de soin, munnies, deux coffres à chiots, une carte postale", "Healing items, munny, two puppy chests, a postcard") },
        { tier: L("Charge (verte)", "Charge (green)"), reward: L("Accès à la ruelle, à l'égout secret et à la cloche du trou de serrure", "Access to the Alleyway, the Secret Waterway and the Keyhole bell") },
        { tier: L("Échelle (jaune)", "Ladder (yellow)"), reward: L("Mithril, éclats de mithril, accès à l'atelier et à la cabine du capitaine", "Mythril, Mythril Shards, access to the Item Workshop and the Captain's Cabin") },
        { tier: L("Poussée (blanche)", "Push (white)"), reward: L("Le trou de serrure du Colisée, la salle cachée d'Agrabah, un boost permanent", "The Coliseum Keyhole, Agrabah's Hidden Room, a permanent boost") },
        { tier: L("Détection (rouge)", "Detect (red)"), reward: L("Quatre Orichalques, la Keyblade As de Cœur, deux coffres à chiots", "Four Orichalcum, the Lady Luck Keyblade, two puppy chests") },
      ],
      note: L(
        "Activer toutes les marques remplit la section « Marques Trio » du Journal de Jiminy.",
        "Activating every mark fills the \"Trinity Marks\" section of Jiminy's Journal.",
      ),
    },
  },
  {
    id: "foret-des-reves-bleus",
    title: L("Forêt des Rêves Bleus", "Hundred Acre Wood"),
    tagline: L(
      "Le monde caché dans un livre : cinq pages déchirées, cinq mini-jeux, et une invocation.",
      "The world hidden inside a book: five torn pages, five mini-games, and a summon.",
    ),
    entry: "hundred-acre-wood",
    status: "done",
    intro: L(
      "La Forêt des Rêves Bleus n'est pas un monde comme les autres : c'est un livre, confié par Cid à Merlin, et le monde qu'il contient s'ouvre au fur et à mesure qu'on lui rend ses pages. Entièrement facultatif pour l'histoire, il est en revanche indispensable au 100 % — sceller sa Serrure remplit une section du Journal de Jiminy et fait partie des conditions des fins secrètes.\n\nLe principe est simple : chaque page déchirée trouvée ailleurs dans les mondes ouvre une nouvelle zone du livre, et chaque zone contient un mini-jeu. Terminer le mini-jeu, même en le ratant, donne la récompense de la page et débloque la suivante. Les pages s'ouvrent toujours dans le même ordre, quel que soit l'ordre où on les ramasse.\n\nOn entre dans le livre chez Merlin, à la Ville de Traverse, après lui avoir rapporté le vieux livre — c'est-à-dire au retour des Keyholes du Pays des Merveilles et de la Jungle Profonde.",
      "The Hundred Acre Wood is not a world like the others: it is a book, handed by Cid to Merlin, and the world inside opens up as you return its pages. Entirely optional for the story, it is nonetheless required for 100% — sealing its Keyhole fills a section of Jiminy's Journal and is part of the secret-ending conditions.\n\nThe principle is simple: each Torn Page found elsewhere opens a new area of the book, and each area holds a mini-game. Finishing the mini-game, even badly, gives that page's reward and unlocks the next. The pages always open in the same order, whatever order you pick them up in.\n\nYou enter the book at Merlin's house in Traverse Town, after returning the old book to him — that is, once the Wonderland and Deep Jungle Keyholes are sealed.",
    ),
    tables: [
      {
        id: "pages",
        title: L("Les cinq pages déchirées", "The five Torn Pages"),
        intro: L(
          "Elles sont dispersées dans cinq mondes. Rien n'oblige à les ramasser dans cet ordre : c'est le livre qui impose l'ordre des zones.",
          "They are scattered across five worlds. Nothing forces you to collect them in this order: the book decides the order of its areas.",
        ),
        rows: [
          at("Agrabah", ["Page déchirée", "Torn Page"], ["Salle sombre, sur la plateforme du pont : remontez le courant depuis la salle des reliques.", "Dark Chamber, on the bridge platform: swim upstream from the Relic Chamber."]),
          at("Monstro", ["Page déchirée", "Torn Page"], ["Sixième cavité, sur la plateforme la plus proche du passage vers la cinquième.", "Chamber 6, on the platform closest to the upper passage to Chamber 5."], ["Saut Haut, ou un tonneau pour prendre de la hauteur", "High Jump, or a barrel for extra height"]),
          at("Ville de Traverse", ["Page déchirée", "Torn Page"], ["Chez Pongo et Perdita, en récompense des 51 premiers dalmatiens ramenés.", "At Pongo and Perdita's house, as the reward for the first 51 puppies returned."]),
          at("Atlantica", ["Page déchirée", "Torn Page"], ["Dans un coffre ordinaire, en haut de la grotte d'Ariel.", "In an ordinary chest, at the top of Ariel's Grotto."]),
          at("Ville d'Halloween", ["Page déchirée", "Torn Page"], ["Au laboratoire : examinez les livres de la bibliothèque.", "In the Research Lab: examine the books in the bookcase."]),
        ],
      },
    ],
    steps: [
      {
        id: "page-1",
        title: L("Première page : l'Arbre à Miel", "First page: the Hunny Tree"),
        image: { src: "/images/walkthrough/hunny-hunt.webp", credit: credit("Pooh's Hunny Hunt gameplay.png"), width: 420, height: 236 },
        text: L(
          "La zone s'ouvre en haut à droite du livre. Après la scène, faites le tour de l'arbre pour surprendre Porcinet par-derrière, puis parlez à Winnie pour lui proposer votre aide : le mini-jeu commence.\n\nIl s'agit de protéger le ballon de Winnie des abeilles pendant qu'il se sert dans l'arbre. Réussi ou raté, vous recevez l'Orbe de la Nature. Portez-le à la Bonne Fée, à la Ville de Traverse : il devient l'invocation Bambi.\n\nBambi n'attaque pas. Il fait tomber des sphères de magie en continu, de plus en plus vite à mesure que vous tuez des ennemis, puis des objets et des matériaux de synthèse. C'est l'invocation à sortir quand on est à court de magie au milieu d'une horde.\n\nPour l'Ovation, visez 100 léchées ou plus.",
          "The area opens in the top-right corner of the book. After the cutscene, walk around the tree to surprise Piglet from behind, then talk to Pooh to offer your help: the mini-game starts.\n\nYou have to protect Pooh's balloon from the bees while he helps himself to the honey. Win or lose, you receive the Naturespark. Take it to the Fairy Godmother in Traverse Town: it becomes the Bambi summon.\n\nBambi does not attack. He drops MP orbs continuously, faster as you defeat enemies, then items and synthesis materials. He is the summon to bring out when you run dry in the middle of a crowd.\n\nFor Cheer, aim for 100 licks or more.",
        ),
      },
      {
        id: "page-2",
        title: L("Deuxième page : Bloque-Tigrou", "Second page: Block Tigger"),
        image: { src: "/images/walkthrough/block-tigger.webp", credit: credit("Block Tigger gameplay.png"), width: 420, height: 236 },
        text: L(
          "La maison de Coco Lapin, en haut à gauche. Passez sur le côté pour parler à Winnie et Porcinet, puis entrez pour rencontrer Coco Lapin. Aidez Winnie à trouver le miel en examinant les pots cachés sur les racines, près du plafond.\n\nEn voulant repartir, Porcinet vous retient ; parlez à Winnie, Tigrou débarque, et Coco Lapin réclame de l'aide : le mini-jeu consiste à empêcher Tigrou d'écraser les légumes pendant une minute. Ensuite, retournez dans la maison pour en pousser Winnie dehors — vous recevez un éclat de mithril.\n\nLe mini-jeu se rejoue autant qu'on veut. Pour l'Ovation, il faut 150 points ou plus.",
          "Rabbit's house, top-left. Go around the side to talk to Pooh and Piglet, then step in to meet Rabbit. Help Pooh find the honey by examining the pots hidden on the roots near the ceiling.\n\nAs you try to leave, Piglet stops you; talk to Pooh, Tigger shows up, and Rabbit asks for help: the mini-game is about keeping Tigger off the vegetables for a minute. Then go back into the house to push Pooh out — you receive a Mythril Shard.\n\nThe mini-game can be replayed as often as you like. Cheer needs a score of 150 or more.",
        ),
      },
      {
        id: "page-3",
        title: L("Troisième page : la balançoire", "Third page: Pooh's Swing"),
        image: { src: "/images/walkthrough/pooh-swing.webp", credit: credit("Pooh's Swing gameplay.png"), width: 420, height: 236 },
        text: L(
          "L'arbre à balançoire, en bas à droite. Commencez par repêcher Bourriquet en sautant dans la rivière à côté de lui. Ensuite, verrouillez Winnie pour qu'il vous suive et menez-le en haut de la colline : le mini-jeu se lance. Évitez les pots de miel en chemin, ils le distraient.\n\nIl faut envoyer Winnie assez loin pour qu'il décroche la queue de Bourriquet. Appuyez au bon moment pour accélérer la balançoire : au moment où Maître Hibou abaisse les ailes pour la distance maximale, au moment où elles sont au plus haut pour la hauteur qui décroche la queue. Vingt à trente mètres suffisent pour avancer.\n\nRécompense : la magie Stop améliorée (Stopra), qui élargit la zone touchée sans allonger la durée du gel. Pour l'Ovation, il faut atteindre 40 mètres.",
          "The swinging tree, bottom-right. Start by fishing Eeyore out of the river by jumping in next to him. Then lock on to Pooh so he follows you and lead him to the top of the hill: the mini-game starts. Avoid the honey pots on the way, they distract him.\n\nYou need to send Pooh far enough to knock down Eeyore's tail. Press at the right moment to speed the swing up: as Owl lowers his wings for maximum distance, as they reach their highest for the height that knocks the tail down. Twenty to thirty metres is enough to move on.\n\nReward: the upgraded Stop spell (Stopra), which widens the area without lengthening the freeze. Cheer needs 40 metres.",
        ),
      },
      {
        id: "page-4",
        title: L("Quatrième page : le pot de Tigrou et les noix rares", "Fourth page: Tigger's Giant Pot and the Rare Nuts"),
        image: { src: "/images/walkthrough/giant-pot.webp", credit: credit("Tigger's Giant Pot gameplay.png"), width: 420, height: 236 },
        text: L(
          "La zone centrale du livre. Parlez d'abord à Tigrou et Petit Gourou pour les rebonds : il suffit de les suivre de souche en souche, en trois manches de plus en plus longues. Le Saut Haut est désactivé, mais on s'en passe. À la troisième manche, servez-vous de la bascule pour atteindre la branche du haut.\n\nParlez ensuite à Petit Gourou pour le vrai mini-jeu : renvoyer les noix que Tigrou fait sortir du pot, jusqu'à le briser, sans jamais quitter la souche. Frapper une noix le plus tôt possible rapporte davantage. Tomber sans avoir touché de noix oblige à recommencer. Le pot brisé, un boost de compétence attend dans la souche ; sortir de la zone donne un mithril.\n\nC'est aussi ici que se trouvent les cinq noix rares : reparlez à Tigrou pour remettre la bascule en place, faites-vous propulser dans les arbres, et rapportez les noix une par une à Maître Hibou — on n'en porte qu'une à la fois. Elles rapportent un boost de défense, un boost de force, un second boost de compétence et un Orichalque.\n\nPour l'Ovation, il faut casser le pot en moins de trente secondes.",
          "The central area of the book. First talk to Tigger and Roo for the bouncing: just follow them from stump to stump, in three increasingly long rounds. High Jump is disabled, but you can manage without. On the third round, use the seesaw to reach the upper branch.\n\nThen talk to Roo for the real mini-game: hit back the nuts Tigger throws out of the pot until it breaks, without ever leaving your stump. Hitting a nut as early as possible scores more. Falling off before hitting one means starting over. Once the pot is broken, an AP Up waits inside the stump; leaving the area gives a Mythril.\n\nThis is also where the five Rare Nuts are: talk to Tigger again to set the seesaw back up, get launched into the treetops, and bring the nuts to Owl one at a time — you can only carry one. They are worth a Defense Up, a Power Up, a second AP Up and an Orichalcum.\n\nFor Cheer, break the pot in under thirty seconds.",
        ),
      },
      {
        id: "page-5",
        title: L("Cinquième page : le chemin boueux, et la Serrure", "Fifth page: the Muddy Path, and the Keyhole"),
        image: { src: "/images/walkthrough/muddy-path.webp", credit: credit("Pooh's Muddy Path gameplay.png"), width: 420, height: 236 },
        text: L(
          "Dernière zone, en bas à gauche. Parlez à Winnie pour l'aider à retrouver ses amis, tous dispersés aux alentours. Verrouillez-le pour qu'il vous suive, contournez le grand buisson et examinez les petites branches : Bourriquet apparaît, et le chronomètre démarre.\n\nIl faut ramener tout le monde auprès de Bourriquet en parlant à chacun. Le seul passage délicat est Porcinet : il faut d'abord amener Winnie en haut de la colline, là où vole Maître Hibou, pour le rassurer.\n\nLa page devient un Anneau d'expérience dans Final Mix (un Orichalque dans la version d'origine), Sora quitte le livre et la Serrure se scelle. Le monde reste accessible ensuite : tous les mini-jeux se rejouent.\n\nPour l'Ovation, il faut avoir retrouvé tout le monde en moins de cinq minutes.",
          "Last area, bottom-left. Talk to Pooh to help him find his friends, all scattered nearby. Lock on so he follows you, walk around the large bush and examine the smaller branches: Eeyore appears, and the clock starts.\n\nYou have to bring everyone back to Eeyore by talking to them. The only tricky one is Piglet: you first need to get Pooh to the top of the hill, where Owl is flying, to calm him down.\n\nThe page becomes an EXP Ring in Final Mix (an Orichalcum in the original), Sora leaves the book and the Keyhole is sealed. The world stays open afterwards: every mini-game can be replayed.\n\nFor Cheer, find everyone in under five minutes.",
        ),
      },
      {
        id: "ovation",
        title: L("L'Ovation, la vraie récompense", "Cheer, the real reward"),
        text: L(
          "Une fois la Serrure scellée, retournez chez Winnie et parlez à Maître Hibou. S'il vous remercie pour les cinq mini-jeux, il donne l'Ovation : la capacité qui augmente la jauge de résistance des invocations. Sinon, il ne vous remercie que pour ceux qui sont au niveau — les autres sont à rejouer.\n\nLes scores demandés sont dans le tableau ci-dessous. Aucun n'est difficile, mais aucun ne s'obtient par hasard : il vaut mieux viser le score dès la première tentative que revenir en fin de partie.",
          "Once the Keyhole is sealed, go back to Pooh's house and talk to Owl. If he thanks you for all five mini-games, he gives you Cheer: the ability that boosts summons' endurance gauge. Otherwise he only thanks you for the ones that met the mark — the rest have to be replayed.\n\nThe required scores are in the table below. None is hard, but none happens by accident: better to aim for the score on the first run than to come back at the end of the game.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Mini-jeu", "Mini-game"),
      intro: L(
        "Ce que chaque page rapporte, et le score à atteindre pour l'Ovation.",
        "What each page is worth, and the score needed for Cheer.",
      ),
      rows: [
        { tier: L("L'Arbre à Miel", "Pooh's Hunny Hunt"), reward: L("Orbe de la Nature, à échanger contre l'invocation Bambi — Ovation : 100 léchées", "Naturespark, traded for the Bambi summon — Cheer: 100 licks") },
        { tier: L("Bloque-Tigrou", "Block Tigger"), reward: L("Éclat de mithril — Ovation : 150 points", "Mythril Shard — Cheer: 150 points") },
        { tier: L("La balançoire", "Pooh's Swing"), reward: L("Stop amélioré (Stopra) — Ovation : 40 mètres", "Stopra — Cheer: 40 metres") },
        { tier: L("Le pot de Tigrou", "Tigger's Giant Pot"), reward: L("Mithril, boost de compétence, puis boost de défense, boost de force, second boost de compétence et Orichalque contre les cinq noix rares — Ovation : moins de 30 secondes", "Mythril, an AP Up, then a Defense Up, a Power Up, a second AP Up and an Orichalcum for the five Rare Nuts — Cheer: under 30 seconds") },
        { tier: L("Le chemin boueux", "Pooh's Muddy Path"), reward: L("Anneau d'expérience (Orichalque dans la version d'origine) — Ovation : moins de 5 minutes", "EXP Ring (Orichalcum in the original) — Cheer: under 5 minutes") },
      ],
      note: L(
        "Les cinq scores réunis débloquent l'Ovation auprès de Maître Hibou. Sceller la Serrure du livre remplit la section du monde dans le Journal de Jiminy et compte pour les fins secrètes.",
        "All five scores together unlock Cheer from Owl. Sealing the book's Keyhole fills the world's section in Jiminy's Journal and counts towards the secret endings.",
      ),
    },
  },
  {
    id: "trophees",
    title: L("Les trophées", "Trophies"),
    tagline: L(
      "Les 56 trophées de la version PS4, et ce qu'il faut faire pour décrocher le Platine.",
      "The 56 trophies of the PS4 version, and what it takes to earn the Platinum.",
    ),
    image: { src: "/images/walkthrough/trophees.webp", credit: credit("KINGDOM HEARTS Master.png"), width: 240, height: 240 },
    status: "done",
    intro: L(
      "Les trophées n'existent que dans les versions HD — Kingdom Hearts HD 1.5 ReMIX et la compilation 1.5 + 2.5 ReMIX. Ils suivent d'assez près la complétion du jeu : sceller chaque monde, remplir le Journal de Jiminy, gagner les coupes, terminer la synthèse. Une partie menée au 100 % les décroche presque tous en chemin.\n\nPresque tous, mais pas tous : trois d'entre eux se jouent sur la manière de terminer la partie, et deux autres dépendent de la difficulté choisie au départ. Ce sont ceux-là qu'il faut avoir en tête avant de commencer, pas après.\n\nLes noms sont ceux de la version française du jeu, tels qu'ils apparaissent sur la liste de trophées PlayStation. Les guides anglophones emploient d'autres intitulés : « Expéditif » s'y appelle Speedster, « Comme d'habitude » Unchanging Armor.",
      "Trophies only exist in the HD versions — Kingdom Hearts HD 1.5 ReMIX and the 1.5 + 2.5 ReMIX collection. They follow the game's completion fairly closely: seal every world, fill in Jiminy's Journal, win the cups, finish synthesis. A run aimed at 100% picks up nearly all of them along the way.\n\nNearly all, but not all: three depend on how you finish the game, and two more on the difficulty chosen at the start. Those are the ones to keep in mind before you begin, not after.\n\nNames follow the French release, as they appear on the PlayStation trophy list; English guides use different wording.",
    ),
    steps: [
      {
        id: "a-preparer",
        title: L("Les trois pièges à connaître avant de lancer une partie", "The three traps to know before starting"),
        text: L(
          "Expéditif (Speedster) demande de battre le Monde du Chaos en moins de quinze heures de jeu. C'est confortable si l'on sait ce que l'on saute : la Forêt des Rêves Bleus, Monstro, le Colisée en grande partie, et l'un des deux mondes Atlantica ou Ville d'Halloween. Choisir la courbe d'expérience de l'Aube aide aussi. Faites-en une partie à part, en Débutant : viser la complétion et le chronomètre dans la même partie ne marche pas.\n\nInvaincu (Undefeated) demande de terminer sans jamais utiliser l'option Continuer. Il ne se rate pas vraiment : après un game over, ne choisissez jamais « Continuer », relancez depuis votre sauvegarde.\n\nComme d'habitude (Unchanging Armor) demande de terminer sans jamais changer l'arme ni les accessoires de départ. C'est le plus contraignant : la Chaîne Royale et rien d'autre, du prologue au générique. À faire dans la même partie qu'Expéditif, en Débutant.",
          "Speedster asks you to beat the World of Chaos in under fifteen hours of play. That is comfortable if you know what to skip: the Hundred Acre Wood, Monstro, most of the Coliseum, and one of Atlantica or Halloween Town. Picking the Dawn experience curve helps too. Make it a separate run, on Beginner: chasing completion and the clock in the same run does not work.\n\nUndefeated asks you to finish without ever using a continue. It is hard to fail: after a game over, never pick Continue, reload your save instead.\n\nUnchanging Armor asks you to finish without ever changing the starting weapon or accessories. This is the strictest: the Kingdom Key and nothing else, from the prologue to the credits. Do it in the same run as Speedster, on Beginner.",
        ),
      },
    ],
    tables: [
      {
        id: "histoire",
        title: L("Progression de l'histoire", "Story progress"),
        intro: L("Ils tombent tout seuls : un par trou de serrure scellé.", "They come on their own: one per Keyhole sealed."),
        columns: [L("Trophée", "Trophy"), L("Type", "Type"), L("Comment l'obtenir", "How to get it")],
        rows: [
    { world: L("Là où sonne le glas", "Where the Bells Toll"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure de la Ville de Traverse.", "Seal the Keyhole in Traverse Town.") },
    { world: L("Le Terrier", "The Rabbit Hole"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure du Pays des Merveilles.", "Seal the Keyhole in Wonderland.") },
    { world: L("Héros junior", "Junior Hero"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure du Colisée de l'Olympe.", "Seal the Keyhole in Olympus Coliseum.") },
    { world: L("Membre de la tribu", "Member of the Tribe"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure de la Jungle Profonde.", "Seal the Keyhole in Deep Jungle.") },
    { world: L("Lampe magique", "Magic Lamp"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure d'Agrabah.", "Seal the Keyhole in Agrabah.") },
    { world: L("Âme courageuse", "Honest Soul"), what: L("Bronze", "Bronze"), where: L("S'enfuir de Monstro.", "Escape from Monstro.") },
    { world: L("Maître des mers", "Master of the Seas"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure d'Atlantica.", "Seal the Keyhole in Atlantica.") },
    { world: L("Roi des citrouilles", "Pumpkin Prince"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure de la Ville d'Halloween.", "Seal the Keyhole in Halloween Town.") },
    { world: L("Poussière de fée", "Pixie Dust"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure du Pays Imaginaire.", "Seal the Keyhole in Neverland.") },
    { world: L("Ami de Winnie", "Pooh's Friend"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure de la Forêt des Rêves Bleus.", "Seal the Keyhole in the Hundred Acre Wood.") },
    { world: L("Fin du Monde", "End of the World"), what: L("Bronze", "Bronze"), where: L("Sceller la serrure de la Forteresse oubliée.", "Seal the Keyhole in Hollow Bastion.") },
    { world: L("Tendre promesse", "Oathkeeper"), what: L("Bronze", "Bronze"), where: L("Obtenir la Keyblade Tendre promesse.", "Obtain the Oathkeeper Keychain.") },
        ],
      },
      {
        id: "colisee",
        title: L("Colisée et boss facultatifs", "Coliseum and optional bosses"),
        intro: L("Les quatre coupes, leurs défis, et les quatre boss cachés du jeu.", "The four cups, their challenges, and the game's four hidden bosses."),
        columns: [L("Trophée", "Trophy"), L("Type", "Type"), L("Comment l'obtenir", "How to get it")],
        rows: [
    { world: L("Héros en herbe", "Novice Hero"), what: L("Bronze", "Bronze"), where: L("Remporter la Coupe Philoctète.", "Win the Phil Cup.") },
    { world: L("Héros naissant", "Artisan Hero"), what: L("Bronze", "Bronze"), where: L("Remporter la Coupe Pégase.", "Win the Pegasus Cup.") },
    { world: L("Héros confirmé", "Hero of the Coliseum"), what: L("Bronze", "Bronze"), where: L("Remporter la Coupe Hercule.", "Win the Hercules Cup.") },
    { world: L("Champion du Colisée", "Coliseum Champion"), what: L("Bronze", "Bronze"), where: L("Remporter la Coupe Hadès.", "Win the Hades Cup.") },
    { world: L("Combattant solitaire", "Supreme Soloist"), what: L("Bronze", "Bronze"), where: L("Remporter un défi en solo.", "Win a solo challenge.") },
    { world: L("Contre-la-montre", "Time Attacker"), what: L("Bronze", "Bronze"), where: L("Remporter une épreuve chronométrée.", "Win a time trial.") },
    { world: L("Le géant de glace", "The Frosty Giant"), what: L("Bronze", "Bronze"), where: L("Vaincre le Titan de glace lors du Match d'Or.", "Defeat the Ice Titan in the Gold Match.") },
    { world: L("Monoptéryx", "One-Winged Angel"), what: L("Bronze", "Bronze"), where: L("Vaincre Séphiroth lors du Match de Platine.", "Defeat Sephiroth in the Platinum Match.") },
    { world: L("L'ombre dissimulée", "The Cloaked Shadow"), what: L("Bronze", "Bronze"), where: L("Vaincre le Fantôme dans la Grande Horloge.", "Defeat the Phantom in the Clock Tower.") },
    { world: L("La menace des sables", "The Sandy Blade"), what: L("Bronze", "Bronze"), where: L("Vaincre Kurt Zisa à Agrabah.", "Defeat Kurt Zisa in Agrabah.") },
    { world: L("Celui qui n'existe pas", "He Who Doesn't Exist"), what: L("Bronze", "Bronze"), where: L("Vaincre le personnage mystérieux dans la Forteresse oubliée.", "Defeat the mysterious man in Hollow Bastion.") },
        ],
      },
      {
        id: "collection",
        title: L("Collection et synthèse", "Collection and synthesis"),
        intro: L("La partie longue : les armes, les objets de synthèse, le niveau 100.", "The long part: weapons, synthesis items, level 100."),
        columns: [L("Trophée", "Trophy"), L("Type", "Type"), L("Comment l'obtenir", "How to get it")],
        rows: [
    { world: L("Chasseur de trésors", "Treasure Hunter"), what: L("Bronze", "Bronze"), where: L("Ouvrir 100 coffres.", "Open 100 chests.") },
    { world: L("Parti de rien", "From Rags to Riches"), what: L("Bronze", "Bronze"), where: L("Obtenir plus de 10 000 munnies.", "Obtain over 10,000 munny.") },
    { world: L("Chasseur de Sans-cœur", "Heartless Hunter"), what: L("Bronze", "Bronze"), where: L("Vaincre plus de 2 000 Sans-cœur.", "Defeat over 2,000 Heartless.") },
    { world: L("Première création", "First Synthesis"), what: L("Bronze", "Bronze"), where: L("Créer un objet pour la première fois.", "Synthesize an item for the first time.") },
    { world: L("Créateur novice", "Synthesis Novice"), what: L("Bronze", "Bronze"), where: L("Créer 3 types d'objets différents.", "Create 3 different item types.") },
    { world: L("Créateur aguerri", "Synthesis Amateur"), what: L("Bronze", "Bronze"), where: L("Créer 15 types d'objets différents.", "Create 15 different item types.") },
    { world: L("Créateur confirmé", "Synthesis Vet"), what: L("Bronze", "Bronze"), where: L("Créer 30 types d'objets différents.", "Create 30 different item types.") },
    { world: L("Maître ès création", "Synthesis Master"), what: L("Bronze", "Bronze"), where: L("Créer tous les objets.", "Create every item.") },
    { world: L("Maître ès Keyblades", "Blade Master"), what: L("Bronze", "Bronze"), where: L("Obtenir toutes les Keyblades.", "Obtain every Keyblade.") },
    { world: L("Maître ès magie", "Master Magician"), what: L("Bronze", "Bronze"), where: L("Obtenir tous les bâtons de Donald.", "Obtain all of Donald's staves.") },
    { world: L("Maître ès défense", "Master Defender"), what: L("Bronze", "Bronze"), where: L("Obtenir tous les boucliers de Dingo.", "Obtain all of Goofy's shields.") },
    { world: L("Niveau 100", "Level Master"), what: L("Argent", "Silver"), where: L("Monter Sora au niveau 100.", "Raise Sora to level 100.") },
        ],
      },
      {
        id: "journal",
        title: L("Journal de Jiminy", "Jiminy's Journal"),
        intro: L("Les mêmes objectifs que la complétion, découpés section par section.", "The same goals as completion, split section by section."),
        columns: [L("Trophée", "Trophy"), L("Type", "Type"), L("Comment l'obtenir", "How to get it")],
        rows: [
    { world: L("Conteur", "Storyteller"), what: L("Bronze", "Bronze"), where: L("Récupérer toutes les entrées Résumés du carnet de Jiminy.", "Collect every Story entry in Jiminy's Journal.") },
    { world: L("Investigateur", "Searcher"), what: L("Bronze", "Bronze"), where: L("Récupérer toutes les entrées Rapports d'Ansem.", "Collect every Ansem's Report entry.") },
    { world: L("Erudit", "Professor"), what: L("Bronze", "Bronze"), where: L("Récupérer toutes les entrées Personnages.", "Collect every Character entry.") },
    { world: L("Fin limier", "Top Dog"), what: L("Bronze", "Bronze"), where: L("Récupérer toutes les entrées Les 101 Dalmatiens.", "Collect every 101 Dalmatians entry.") },
    { world: L("Meilleur ami", "Best Friend"), what: L("Bronze", "Bronze"), where: L("Récupérer toutes les entrées Marques Trio.", "Collect every Trinity Mark entry.") },
    { world: L("Pro des mini-jeux", "Mini-game Maniac"), what: L("Bronze", "Bronze"), where: L("Récupérer toutes les entrées Records.", "Collect every Records entry.") },
    { world: L("Archiviste", "Record Keeper"), what: L("Bronze", "Bronze"), where: L("Récupérer toutes les entrées du carnet de Jiminy.", "Collect every entry in Jiminy's Journal.") },
        ],
      },
      {
        id: "gummi",
        title: L("Vaisseau Gummi", "Gummi ship"),
        intro: L("La partie que tout le monde oublie, et qui vaut sept trophées.", "The part everyone forgets, and which is worth seven trophies."),
        columns: [L("Trophée", "Trophy"), L("Type", "Type"), L("Comment l'obtenir", "How to get it")],
        rows: [
    { world: L("Personnalisation", "Customizer"), what: L("Bronze", "Bronze"), where: L("Modifier un vaisseau gummi et actualiser les données.", "Customize a Gummi ship and update its data.") },
    { world: L("Pilote novice", "Test Pilot"), what: L("Bronze", "Bronze"), where: L("Accomplir la 1re mission du vaisseau gummi.", "Complete the 1st Gummi ship mission.") },
    { world: L("Pilote aguerri", "Veteran Pilot"), what: L("Bronze", "Bronze"), where: L("Accomplir la 2e mission du vaisseau gummi.", "Complete the 2nd Gummi ship mission.") },
    { world: L("Pilote confirmé", "Ace Pilot"), what: L("Bronze", "Bronze"), where: L("Accomplir la 3e mission du vaisseau gummi.", "Complete the 3rd Gummi ship mission.") },
    { world: L("Pilote de chasse", "Flying Ace"), what: L("Bronze", "Bronze"), where: L("Neutraliser plus de 2 500 ennemis avec le vaisseau gummi.", "Shoot down over 2,500 enemies in the Gummi ship.") },
    { world: L("As du pilotage", "Top Gun"), what: L("Bronze", "Bronze"), where: L("Prendre tous les itinéraires du vaisseau gummi.", "Take every Gummi ship route.") },
    { world: L("Collectionneur de vaisseau gummi", "Gummi Ship Collector"), what: L("Bronze", "Bronze"), where: L("Récupérer au moins 30 plans de vaisseau gummi.", "Collect at least 30 Gummi ship blueprints.") },
        ],
      },
      {
        id: "parties",
        title: L("Manière de terminer la partie", "How you finish the game"),
        intro: L("Ceux qui se préparent avant de lancer une partie, pas après.", "The ones you prepare before starting a run, not after."),
        columns: [L("Trophée", "Trophy"), L("Type", "Type"), L("Comment l'obtenir", "How to get it")],
        rows: [
    { world: L("Joueur novice", "Novice Player"), what: L("Bronze", "Bronze"), where: L("Terminer le jeu en Final Mix : débutant ou dans une difficulté supérieure.", "Clear the game on Final Mix: Beginner or above.") },
    { world: L("As de Final Mix", "Final Mix Master"), what: L("Argent", "Silver"), where: L("Terminer le jeu en mode Final Mix ou dans une difficulté supérieure.", "Clear the game on Final Mix or above.") },
    { world: L("Joueur expert", "Proud Player"), what: L("Or", "Gold"), where: L("Terminer Final Mix en mode difficile.", "Clear Final Mix on Proud.") },
    { world: L("Expéditif", "Speedster"), what: L("Or", "Gold"), where: L("Vaincre le Monde Chaotique à la Fin du Monde en moins de quinze heures de jeu.", "Defeat the World of Chaos in the End of the World in under fifteen hours.") },
    { world: L("Invaincu", "Undefeated"), what: L("Argent", "Silver"), where: L("Terminer le jeu en n'utilisant jamais l'option Continuer.", "Clear the game without ever using Continue.") },
    { world: L("Comme d'habitude", "Unchanging Armor"), what: L("Argent", "Silver"), where: L("Finir le jeu sans changer d'équipement.", "Clear the game without changing equipment.") },
    { world: L("As de KINGDOM HEARTS", "KINGDOM HEARTS Master"), what: L("Platine", "Platinum"), where: L("Obtenir tous les autres trophées.", "Obtain every other trophy.") },
        ],
      },
    ],
    rewards: {
      tierHeader: L("Type", "Type"),
      intro: L("Ce que vaut la collection, une fois complète.", "What the full set is worth."),
      rows: [
        { tier: L("Bronze", "Bronze"), reward: L("49 trophées : la progression de l'histoire, les coupes, la collection, le carnet de Jiminy et le vaisseau gummi.", "49 trophies: story progress, the cups, collection, Jiminy's Journal and the Gummi ship.") },
        { tier: L("Argent", "Silver"), reward: L("4 trophées : Niveau 100, As de Final Mix, Invaincu et Comme d'habitude.", "4 trophies: Level 100, Final Mix Master, Undefeated and Unchanging Armor.") },
        { tier: L("Or", "Gold"), reward: L("2 trophées : Joueur expert et Expéditif.", "2 trophies: Proud Player and Speedster.") },
        { tier: L("Platine", "Platinum"), reward: L("As de KINGDOM HEARTS, une fois les 55 autres obtenus.", "KINGDOM HEARTS Master, once the other 55 are earned.") },
      ],
      note: L(
        "Deux parties suffisent : une en Expert menée à la complétion, une en Débutant qui réunit Expéditif, Invaincu et Comme d'habitude.",
        "Two runs are enough: one on Proud aimed at completion, one on Beginner covering Speedster, Undefeated and Unchanging Armor together.",
      ),
    },
  },
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
    "boss-optionnels",
    L("Les boss optionnels", "The optional bosses"),
    L("Kurt Zisa, le Fantôme, le Titan de glace, Séphiroth et l'Inconnu.", "Kurt Zisa, the Phantom, the Ice Titan, Sephiroth and the Unknown."),
    "kurt-zisa",
  ),
  soon(
    "fin-secrete",
    L("Les fins secrètes", "The secret endings"),
    L("Ce qu'il faut accomplir, difficulté par difficulté, pour les débloquer.", "What to accomplish, difficulty by difficulty, to unlock them."),
    "ansem-seeker-of-darkness",
  ),
];
