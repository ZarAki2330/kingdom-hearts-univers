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
        "L'Orichalque du palier 72 est l'un des rares du jeu : il entre dans la synthèse de l'Ultima. Les 99 chiots complètent la section « 101 Dalmatiens » du Journal de Jiminy, donc la seconde fin secrète.",
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
  {
    id: "cartes-postales",
    title: L("Les cartes postales", "The postcards"),
    tagline: L(
      "Dix cartes cachées dans la Ville de Traverse, et dix récompenses dans la boîte aux lettres.",
      "Ten postcards hidden in Traverse Town, and ten prizes in the mailbox.",
    ),
    entry: "traverse-town",
    image: { src: "/images/walkthrough/traverse-g1.webp", credit: credit("Traverse Town from KH1 gameplay 1.png"), width: 420, height: 237 },
    status: "done",
    intro: L(
      "Les dix cartes postales sont toutes à la Ville de Traverse, et elles ne servent qu'à une chose : être glissées dans la **grande boîte aux lettres rouge du premier quartier**, près de la porte du deuxième. Chaque envoi donne un objet, dans un ordre fixe — la première carte postée rapporte toujours un Pavillon, la dixième toujours un Boost.\n\nL'ordre de ramassage, lui, n'a aucune importance : on peut les poster une par une, ou toutes d'un coup. Mais plusieurs ne deviennent accessibles qu'après un événement précis — la fin du combat contre Léon, la Trinité Saut, la Foudre, ou le passage par Monstro. Autant dire que la collecte s'étale sur toute la partie.\n\nQuatre cartes se trouvent en examinant un décor plutôt que dans un coffre : c'est là que la plupart des joueurs en oublient. Elles comptent toutes pour le Journal de Jiminy.",
      "All ten postcards are in Traverse Town, and they serve one purpose: being dropped into the **large red mailbox in the First District**, near the Second District door. Each one sent yields an item, in a fixed order — the first postcard always gives a Cottage, the tenth always a stat Up.\n\nThe order you pick them up in does not matter: you can post them one at a time or all at once. But several only become reachable after a specific event — the end of the Leon fight, Trinity Jump, Thunder, or the trip through Monstro. So the collection spreads across the whole playthrough.\n\nFour postcards are found by examining scenery rather than in a chest: that is where most players miss one. They all count towards Jiminy's Journal.",
    ),
    tables: [
      {
        id: "cartes",
        title: L("Où trouver les dix cartes", "Where to find the ten postcards"),
        intro: L(
          "Dans l'ordre où elles deviennent accessibles au fil de la partie.",
          "In the order they become reachable over the course of the game.",
        ),
        columns: [L("Lieu", "Place"), L("En bref", "In short"), L("Comment l'obtenir", "How to get it")],
        rows: [
          at("Boutique d'objets", ["Frappez le ventilateur du plafond", "Hit the ceiling fan"], ["Un ou deux coups suffisent : la carte tombe toute seule. C'est la plus facile, et la plus oubliée.", "One or two hits is enough: the postcard drops on its own. The easiest, and the most often missed."]),
          at("Premier quartier", ["Coffre sur le toit de la boutique d'accessoires", "Chest on the Accessory Shop roof"], ["Montez l'escalier après la boutique, tournez à droite : poussez la plus grosse caisse contre le mur de chez Cid et servez-vous-en comme marche.", "Up the stairs past the shop, turn right: push the largest crate against Cid's wall and use it as a step."], ["Accessible dès la première visite ; le Saut Haut simplifie plus tard.", "Reachable on the first visit; High Jump makes it simpler later."]),
          at("Deuxième quartier", ["Coffre sur l'auvent, à droite de l'entrée", "Chest on the awning, right of the entrance"], ["Prenez appui sur la lanterne d'angle pour attraper l'auvent.", "Use the corner lantern as a step-up to catch the awning."], ["Accessible dès la première visite ; le Saut Haut simplifie plus tard.", "Reachable on the first visit; High Jump makes it simpler later."]),
          at("Premier quartier", ["Examinez le coffre-fort bleu", "Examine the blue safe"], ["Contre le mur, près de la porte du deuxième quartier. Il ne s'ouvre qu'une fois le combat contre Léon terminé.", "Against the wall, near the Second District door. It only opens once the Leon fight is over."], ["Avoir affronté Léon", "Having fought Leon"]),
          at("Premier quartier", ["Coffre sur le balcon du café", "Chest on the café balcony"], ["Le balcon juste au-dessus du café : la marque Trio bleue au sol vous y envoie.", "The balcony right above the café: the blue Trinity Mark on the ground sends you up."], ["Trinité Saut", "Trinity Jump"]),
          at("Troisième quartier", ["Examinez le coin vide d'un balcon", "Examine the empty corner of a balcony"], ["Depuis les toits du deuxième quartier, passez par le trou dans le mur. Le coin a l'air vide : examinez-le quand même.", "From the Second District rooftops, go through the hole in the wall. The corner looks empty: examine it anyway."], ["Après l'Armure Gardienne, quand l'échelle du magasin Gizmo devient utilisable.", "After the Guard Armor, once the Gizmo Shop ladder becomes usable."]),
          at("Magasin Gizmo", ["Deux cartes d'un coup, dans l'horloge", "Two postcards at once, in the clock"], ["Lancez Foudre sur les câbles dénudés du troisième quartier, puis servez-vous des plateformes du magasin pour actionner les trois boutons des coursives. Examinez l'horloge centrale une fois qu'elle s'arrête.", "Cast Thunder on the exposed wiring in the Third District, then use the shop's moved platforms to hit the three buttons on the walkways. Examine the central clock once it stops."], ["Foudre", "Thunder"]),
          at("Atelier des Mogs", ["Examinez la note punaisée au mur", "Examine the note on the wall"], ["Derrière le Mog de gauche, au-dessus de la boutique d'accessoires.", "Behind the left-most Moogle, above the Accessory Shop."], ["Trinité Échelle", "Trinity Ladder"]),
          at("Maison de Geppetto", ["Examinez le dernier objet de l'étagère", "Examine the last item on the shelf"], ["Une fois Geppetto installé en ville, après Monstro.", "Once Geppetto has settled in town, after Monstro."], ["Avoir terminé Monstro", "Having cleared Monstro"]),
        ],
      },
    ],
    rewards: {
      tierHeader: L("Carte postée", "Postcard sent"),
      intro: L(
        "L'ordre est fixe et ne dépend pas de la carte envoyée : c'est le rang de l'envoi qui compte.",
        "The order is fixed and does not depend on which postcard you send: what counts is the rank of the mailing.",
      ),
      rows: [
        { tier: L("1re", "1st"), reward: L("Pavillon", "Cottage") },
        { tier: L("2e", "2nd"), reward: L("Éclat de mithril", "Mythril Shard") },
        { tier: L("3e", "3rd"), reward: L("Méga-potion", "Mega-Potion") },
        { tier: L("4e", "4th"), reward: L("Méga-éther", "Mega-Ether") },
        { tier: L("5e", "5th"), reward: L("Mithril", "Mythril") },
        { tier: L("6e", "6th"), reward: L("Élixir", "Elixir") },
        { tier: L("7e", "7th"), reward: L("Méga-élixir", "Megalixir") },
        { tier: L("8e", "8th"), reward: L("Orichalque", "Orichalcum") },
        { tier: L("9e", "9th"), reward: L("Boost de compétence (Boost de défense dans la version d'origine)", "AP Up (Defense Up in the original version)") },
        { tier: L("10e", "10th"), reward: L("Boost de défense (Boost de force dans la version d'origine)", "Defense Up (Power Up in the original version)") },
      ],
      note: L(
        "L'Orichalque de la huitième carte est l'un des rares du jeu : il entre dans la synthèse de l'Ultima. À lui seul, il justifie de terminer la collecte.",
        "The Orichalcum from the eighth postcard is one of the game's rare ones: it goes into the Ultima recipe. On its own, it justifies finishing the collection.",
      ),
    },
  },
  {
    id: "atelier-des-mogs",
    title: L("L'atelier des Mogs", "The moogle workshop"),
    tagline: L(
      "Trente-trois recettes, six listes qui se débloquent l'une l'autre, et l'Ultima au bout.",
      "Thirty-three recipes, six lists that unlock one another, and the Ultima at the end.",
    ),
    image: { src: "/images/walkthrough/moogle.webp", credit: credit("Moogle (Art) KH.png"), width: 164, height: 400 },
    status: "done",
    intro: L(
      "L'atelier se trouve **au-dessus de la boutique d'accessoires de Cid**, à la Ville de Traverse : une marque Trio verte fait apparaître l'échelle qui y mène. La Trinité Échelle s'obtient en terminant Agrabah — avant, l'atelier reste inaccessible.\n\nLa synthèse elle-même est gratuite : les Mogs ne demandent que des matériaux. Toutes les recettes sont répétables, **sauf l'Ultima**, qui ne se fabrique qu'une fois.\n\nLe menu affiche une seule liste, mais elle est en réalité découpée en six ensembles qui se débloquent l'un l'autre : fabriquer trois objets différents ouvre la liste II, neuf ouvrent la III, quinze la IV, vingt et un la V, et les trente ouvrent la dernière — celle de la Fantasista, des Sept Éléments et de l'Ultima. Autrement dit, **il faut tout fabriquer pour arriver à l'Ultima**, et c'est le vrai travail de cette quête.\n\nAu passage, quinze objets fabriqués donnent à Sora la capacité Rencontre+, et les paliers 1, 3, 15, 30 et 33 correspondent chacun à un trophée.\n\nLes chiffres ci-dessous sont ceux de **Final Mix** : la version d'origine n'avait que 25 recettes, réparties autrement, et des taux de butin bien plus généreux.",
      "The workshop is **above Cid's Accessory Shop** in Traverse Town: a green Trinity Mark reveals the ladder up to it. Trinity Ladder comes from finishing Agrabah — before that, the workshop stays out of reach.\n\nSynthesis itself is free: the Moogles only ask for materials. Every recipe is repeatable, **except the Ultima**, which can only be made once.\n\nThe menu shows a single list, but it is really six sets that unlock one another: crafting three different items opens list II, nine opens III, fifteen IV, twenty-one V, and all thirty opens the last one — the Fantasista, Seven Elements and the Ultima. In other words, **you have to craft everything to reach the Ultima**, and that is this quest's real work.\n\nAlong the way, fifteen items crafted give Sora the Encounter Plus ability, and the 1, 3, 15, 30 and 33 milestones are each a trophy.\n\nThe figures below are those of **Final Mix**: the original release had only 25 recipes, arranged differently, and far more generous drop rates.",
    ),
    tables: [
      {
        id: "liste-1",
        title: L("Liste I — dès l'ouverture", "List I — from the start"),
        columns: [L("Objet", "Item"), L("Recette", "Recipe"), L("À quoi il sert", "What it is for")],
        rows: [
          at("Mégapotion", ["Éclat d'audace ×1, Éclat de force ×1, Bout de mithril ×4", "1 Spirit Shard, 1 Power Shard, 4 Mythril Shards"], ["Soigne toute l'équipe. La recette la plus rentable du jeu au début.", "Heals the whole party. The most cost-effective recipe early on."]),
          at("Pavillon", ["Éclat hyalin ×1, Éclat de vie ×1", "1 Lucid Shard, 1 Bright Shard"], ["Rend toute la vie et toute la magie, hors combat.", "Restores all HP and MP, outside battle."]),
          at("Bracelet d'énergie", ["Éclat d'audace ×2, Éclat de vie ×1", "2 Spirit Shards, 1 Bright Shard"], ["+2 en vie maximum.", "+2 maximum HP."]),
          at("Chaîne d'argent", ["Éclat de force ×2, Éclat hyalin ×1", "2 Power Shards, 1 Lucid Shard"], ["+1 en force.", "+1 Strength."]),
          at("Poignet magique", ["Éclat ardent ×3, Éclat glacial ×3, Éclat grondant ×3", "3 Blaze, 3 Frost and 3 Thunder Shards"], ["+1 en magie.", "+1 Magic."]),
          at("Anneau XP", ["Gemme colère ×1, Gemme force ×1, Gemme mithril ×1, Cristal serein ×1, Matière noire ×3", "1 Fury Stone, 1 Power Stone, 1 Mythril Stone, 1 Serenity Power, 3 Dark Matter"], ["Double l'expérience gagnée. Exclusif à Final Mix, et très cher.", "Doubles experience gained. Final Mix only, and very expensive."]),
        ],
      },
      {
        id: "liste-2",
        title: L("Liste II — après 3 recettes", "List II — after 3 recipes"),
        columns: [L("Objet", "Item"), L("Recette", "Recipe"), L("À quoi il sert", "What it is for")],
        rows: [
          at("Mégaéther", ["Éclat ardent ×1, Éclat glacial ×1, Éclat grondant ×1, Mithril ×2", "1 Blaze, 1 Frost and 1 Thunder Shard, 2 Mythril"], ["Rend toute la magie de l'équipe.", "Restores the whole party's MP."]),
          at("Anneau d'artisan", ["Éclat de vie ×3, Éclat glacial ×1, Bout de mithril ×3", "3 Bright Shards, 1 Frost Shard, 3 Mythril Shards"], ["+1 en défense.", "+1 Defense."]),
          at("Bracelet d'ange", ["Éclat grondant ×3, Roc de vie ×1", "3 Thunder Shards, 1 Bright Gem"], ["+4 en vie maximum.", "+4 maximum HP."]),
          at("Chaîne d'or", ["Éclat ardent ×3, Roc d'audace ×1", "3 Blaze Shards, 1 Spirit Gem"], ["+2 en force.", "+2 Strength."]),
          at("Poignet runique", ["Roc ardent ×3, Roc glacial ×3, Roc grondant ×3", "3 Blaze, 3 Frost and 3 Thunder Gems"], ["+2 en magie.", "+2 Magic."]),
          at("Badge Mog", ["Gemme feu ×1, Gemme glace ×1, Gemme foudre ×1, Mithril ×5, Orichalque ×3", "1 Blazing, 1 Frost and 1 Lightning Stone, 5 Mythril, 3 Orichalcum"], ["Augmente le butin lâché par les ennemis. Exclusif à Final Mix.", "Increases enemy drops. Final Mix only."]),
        ],
      },
      {
        id: "liste-3",
        title: L("Liste III — après 9 recettes", "List III — after 9 recipes"),
        columns: [L("Objet", "Item"), L("Recette", "Recipe"), L("À quoi il sert", "What it is for")],
        rows: [
          at("Bonus PC", ["Roc ardent ×2, Roc glacial ×2, Roc grondant ×2, Mithril ×4", "2 Blaze, 2 Frost and 2 Thunder Gems, 4 Mythril"], ["+1 point de compétence, définitivement.", "+1 AP, permanently."]),
          at("Bague Tenebra", ["Roc hyalin ×2, Roc de vie ×2", "2 Lucid Gems, 2 Bright Gems"], ["Résistance aux ténèbres.", "Darkness resistance."]),
          at("Anneau de maître", ["Éclat d'audace ×5, Roc d'audace ×3, Gemme colère ×1", "5 Spirit Shards, 3 Spirit Gems, 1 Fury Stone"], ["+1 en force et en magie.", "+1 Strength and Magic."]),
          at("Bracelet de Gaïa", ["Éclat hyalin ×5, Roc hyalin ×3, Gemme foudre ×1", "5 Lucid Shards, 3 Lucid Gems, 1 Lightning Stone"], ["+8 en vie maximum.", "+8 maximum HP."]),
          at("Chaîne de platine", ["Éclat de force ×5, Roc de force ×3, Gemme force ×1", "5 Power Shards, 3 Power Gems, 1 Power Stone"], ["+3 en force.", "+3 Strength."]),
          at("Mithril", ["Bout de mithril ×5, Gemme mithril ×1, Larme de joie ×1", "5 Mythril Shards, 1 Mythril Stone, 1 Mystery Goo"], ["Fabriquer du Mithril évite d'aller le chercher sur les Béhémoths.", "Crafting Mythril saves hunting Behemoths for it."]),
        ],
      },
      {
        id: "liste-4",
        title: L("Liste IV — après 15 recettes", "List IV — after 15 recipes"),
        columns: [L("Objet", "Item"), L("Recette", "Recipe"), L("À quoi il sert", "What it is for")],
        rows: [
          at("Élixir", ["Cristal fougue ×1, Cristal pur ×1, Cristal vie ×2, Orichalque ×3", "1 Power Crystal, 1 Shiny Crystal, 2 Bright Crystals, 3 Orichalcum"], ["Vie et magie au maximum, en plein combat. Coûteux mais indispensable pour les boss facultatifs.", "Full HP and MP, mid-fight. Expensive, but essential for the optional bosses."]),
          at("Bonus Défense", ["Éclat hyalin ×3, Éclat de vie ×3, Roc de vie ×2, Cristal fougue ×1, Orichalque ×5", "3 Lucid Shards, 3 Bright Shards, 2 Bright Gems, 1 Power Crystal, 5 Orichalcum"], ["+1 en défense, définitivement.", "+1 Defense, permanently."]),
          at("Protège-cœur", ["Roc hyalin ×3, Cristal hyalin ×1, Cristal vie ×1", "3 Lucid Gems, 1 Lucid Crystal, 1 Bright Crystal"], ["+15 en vie maximum.", "+15 maximum HP."]),
          at("Tristella", ["Roc de force ×5, Larme de joie ×3, Cristal pur ×1", "5 Power Gems, 3 Mystery Goo, 1 Shiny Crystal"], ["+3 en force et en magie.", "+3 Strength and Magic."]),
          at("Poignet astral", ["Éclat ardent ×5, Éclat glacial ×5, Éclat grondant ×5, Larme de joie ×1, Matière noire ×3", "5 Blaze, 5 Frost and 5 Thunder Shards, 1 Mystery Goo, 3 Dark Matter"], ["+3 en magie et +2 points de magie : la meilleure pièce pour les combats magiques.", "+3 Magic and +2 MP: the best piece for magic fights."]),
          at("Tiare de cristal", ["Cristal hyalin ×5, Cristal fougue ×1, Cristal pur ×1, Gemme feu ×3, Gemme glace ×3", "5 Lucid Crystals, 1 Power Crystal, 1 Shiny Crystal, 3 Blazing and 3 Frost Stones"], ["+4 en force et en défense.", "+4 Strength and Defense."]),
        ],
      },
      {
        id: "liste-5",
        title: L("Liste V — après 21 recettes", "List V — after 21 recipes"),
        columns: [L("Objet", "Item"), L("Recette", "Recipe"), L("À quoi il sert", "What it is for")],
        rows: [
          at("Matière noire", ["Éclat hyalin ×9, Vent déchaîné ×1, Mithril ×2", "9 Lucid Shards, 1 Gale, 2 Mythril"], ["Le seul moyen d'en obtenir en quantité : plusieurs recettes en réclament trois.", "The only way to get it in quantity: several recipes ask for three."]),
          at("Mégalixir", ["Roc hyalin ×5, Cristal hyalin ×3, Vent déchaîné ×2, Matière noire ×1", "5 Lucid Gems, 3 Lucid Crystals, 2 Gales, 1 Dark Matter"], ["Vie et magie au maximum pour toute l'équipe.", "Full HP and MP for the whole party."]),
          at("Bonus Attaque", ["Éclat d'audace ×5, Roc d'audace ×3, Éclat de force ×5, Roc de force ×3, Matière noire ×1", "5 Spirit Shards, 3 Spirit Gems, 5 Power Shards, 3 Power Gems, 1 Dark Matter"], ["+1 en force, définitivement.", "+1 Strength, permanently."]),
          at("Amulette cosmique", ["Éclat de vie ×5, Roc de vie ×3, Cristal vie ×1, Gemme mithril ×3", "5 Bright Shards, 3 Bright Gems, 1 Bright Crystal, 3 Mythril Stones"], ["+3 points de magie. À porter pour l'Agaric Rose.", "+3 MP. Wear it for the Pink Agaricus."]),
          at("Bracelet XP", ["Gemme fougue ×1, Gemme pure ×1, Gemme vent ×1, Orichalque ×8, Matière noire ×3", "1 Energy Stone, 1 Dazzling Stone, 1 Stormy Stone, 8 Orichalcum, 3 Dark Matter"], ["Double l'expérience. Huit Orichalques : à ne fabriquer qu'en dernier.", "Doubles experience. Eight Orichalcum: craft it last."]),
          at("Ruban", ["Roc ardent ×5, Roc glacial ×5, Roc grondant ×5, Vent déchaîné ×1, Cristal serein ×3", "5 Blaze, 5 Frost and 5 Thunder Gems, 1 Gale, 3 Serenity Powers"], ["Résistance à tous les éléments : le meilleur accessoire défensif du jeu.", "Resistance to every element: the game's best defensive accessory."]),
        ],
      },
      {
        id: "liste-6",
        title: L("Liste VI — après les 30 autres", "List VI — after the other 30"),
        columns: [L("Objet", "Item"), L("Recette", "Recipe"), L("À quoi il sert", "What it is for")],
        rows: [
          at("Fantasista", ["Gemme colère ×3, Gemme force ×3, Gemme mithril ×3, Gemme fougue ×5", "3 Fury Stones, 3 Power Stones, 3 Mythril Stones, 5 Energy Stones"], ["Le meilleur bâton de Donald. Exclusif à Final Mix.", "Donald's best staff. Final Mix only."]),
          at("Sept éléments", ["Gemme feu ×3, Gemme glace ×3, Gemme foudre ×3, Gemme pure ×5", "3 Blazing, 3 Frost and 3 Lightning Stones, 5 Dazzling Stones"], ["Le meilleur bouclier de Dingo. Exclusif à Final Mix.", "Goofy's best shield. Final Mix only."]),
          at("Ultima", ["Roc grondant ×5, Larme de joie ×5, Cristal serein ×3, Gemme vent ×3, Matière noire ×3", "5 Thunder Gems, 5 Mystery Goo, 3 Serenity Powers, 3 Stormy Stones, 3 Dark Matter"], ["La meilleure Keyblade du jeu. Une seule fois : le Cristal Serein vient de l'Agaric Rose, la Gemme vent des Néo-Ombres.", "The game's best Keyblade. Once only: Serenity Power comes from the Pink Agaricus, Stormy Stone from the Neoshadows."]),
        ],
      },
      {
        id: "materiaux",
        title: L("Où trouver les matériaux", "Where to find the materials"),
        intro: L(
          "Presque tout se récolte sur les Sans-cœur. Un conseil de méthode : **récoltez avant la Forteresse Oubliée**, car après, tous les ennemis du jeu montent aux alentours du niveau 50.",
          "Nearly everything is farmed from Heartless. One piece of method: **farm before Hollow Bastion**, because afterwards every enemy in the game jumps to around level 50.",
        ),
        columns: [L("Matériau", "Material"), L("Qui le lâche", "Who drops it"), L("Où le chercher", "Where to look")],
        rows: [
          at("Éclat / Roc / Cristal hyalin", ["Ombres · Gargouilles, Chevaliers Blancs · Sphères Sombres", "Shadows · Gargoyles, Wight Knights · Darkballs"], ["Les Ombres partout ; les Gargouilles et Chevaliers Blancs à la Ville d'Halloween ; les Sphères Sombres à la Forteresse Oubliée et à la Fin du Monde.", "Shadows everywhere; Gargoyles and Wight Knights in Halloween Town; Darkballs in Hollow Bastion and the End of the World."]),
          at("Éclat / Roc d'audace", ["Soldats, Costauds · Soldats Volants", "Soldiers, Large Bodies · Air Soldiers"], ["Ville de Traverse et Agrabah, en quantité.", "Traverse Town and Agrabah, in quantity."]),
          at("Éclat / Roc de force", ["Primates, Sauteurs · Pirates, Pirates de l'Air, Cuirassés", "Powerwilds, Bouncywilds · Pirates, Air Pirates, Battleships"], ["La Jungle Profonde pour les premiers, le Pays Imaginaire pour les seconds. Les Primates et Sauteurs lâchent aussi un objet en glissant sur une peau de banane.", "Deep Jungle for the first, Neverland for the rest. Powerwilds and Bouncywilds also drop an item when they slip on a banana peel."]),
          at("Éclat / Roc / Cristal de vie", ["Requiems Verts · Chasseurs de Fantômes · Défenseurs", "Green Requiems · Search Ghosts · Defenders"], ["Les Requiems un peu partout ; les Chasseurs de Fantômes à la Ville d'Halloween ; les Défenseurs à la Forteresse Oubliée.", "Green Requiems more or less everywhere; Search Ghosts in Halloween Town; Defenders in Hollow Bastion."]),
          at("Éclat / Roc ardent", ["Nocturnes Rouges · Bandits, Gros Bandits", "Red Nocturnes · Bandits, Fat Bandits"], ["Agrabah, où les deux se croisent en nombre.", "Agrabah, where both appear in numbers."]),
          at("Éclat / Roc glacial", ["Rhapsodies Bleues · Néons Marins, Zones Abris", "Blue Rhapsodies · Sea Neons, Sheltering Zones"], ["Les Rhapsodies à la Ville de Traverse, les autres à Atlantica.", "Rhapsodies in Traverse Town, the rest in Atlantica."]),
          at("Éclat / Roc grondant", ["Opéras Jaunes · Vissodeurs, Aquatanks", "Yellow Operas · Screwdivers, Aquatanks"], ["Atlantica pour les deux derniers — cinq Rocs grondants entrent dans l'Ultima.", "Atlantica for the last two — five Thunder Gems go into the Ultima."]),
          at("Cristal fougue et Cristal pur", ["Vouivres · Sorciers", "Wyverns · Wizards"], ["Tous les deux à la Forteresse Oubliée, dans le grand hall.", "Both in Hollow Bastion, in the Entrance Hall."]),
          at("Bout de mithril et Mithril", ["Araignées-Pots et Araignées-Tonneaux, Bambi · Étoiles Angéliques, Béhémoths", "Pot and Barrel Spiders, Bambi · Angel Stars, Behemoths"], ["Les araignées à Agrabah et au Pays Imaginaire. Bambi en lâche si sa jauge est remplie trois fois dans un même combat. En Final Mix, le Mithril se fabrique (liste III).", "The spiders in Agrabah and Neverland. Bambi drops some if his gauge is filled three times in one fight. In Final Mix, Mythril can be crafted (list III)."]),
          at("Larme de joie", ["Bolets Blancs, Truffes Bleues, Fungus Noirs", "White Mushrooms, Rare Truffles, Black Fungi"], ["Les trois champignons : voir la quête des ennemis spéciaux. Cinq Larmes entrent dans l'Ultima.", "The three mushrooms: see the special enemies quest. Five go into the Ultima."]),
          at("Vent déchaîné", ["Étoiles Angéliques, Invisibles", "Angel Stars, Invisibles"], ["À la Fin du Monde, dans la zone des Mondes Liés, où ils réapparaissent en boucle.", "In the End of the World, in the Linked Worlds area, where they respawn endlessly."]),
          at("Cristal serein", ["Agaric Rose", "Pink Agaricus"], ["Jungle Profonde et Atlantica, uniquement en Final Mix. Trois entrent dans l'Ultima, trois dans le Ruban.", "Deep Jungle and Atlantica, Final Mix only. Three go into the Ultima, three into the Ribbon."]),
          at("Gemme vent", ["Néo-Ombres", "Neoshadows"], ["Fin du Monde, dans les Mondes Liés, en Final Mix. Trois entrent dans l'Ultima.", "End of the World, in the Linked Worlds, Final Mix only. Three go into the Ultima."]),
          at("Orichalque et Matière noire", ["Coffres et récompenses", "Chests and rewards"], ["Ni l'un ni l'autre ne se récolte sur les ennemis : coffres, dalmatiens, cartes postales, trinités, coupes et surf de la jungle. En Final Mix, l'Orichalque s'achète 5 000 munnies à la boutique, et la Matière noire se fabrique (liste V).", "Neither is farmed from enemies: chests, puppies, postcards, Trinity Marks, cups and Jungle Slider. In Final Mix, Orichalcum can be bought for 5,000 munny at the Item Shop, and Dark Matter crafted (list V)."]),
        ],
      },
    ],
  },
  {
    id: "ennemis-speciaux",
    title: L("Les ennemis spéciaux", "The special enemies"),
    tagline: L(
      "Quatre champignons qui ne se battent pas comme les autres, et qui paient très bien.",
      "Four mushrooms that do not fight like the rest, and pay very well.",
    ),
    entry: "white-mushroom",
    status: "done",
    intro: L(
      "Quatre Sans-cœur du premier Kingdom Hearts ne s'affrontent pas : ils se **satisfont**. Chacun attend quelque chose de précis, et récompense qui le comprend par des matériaux de synthèse rares — dont trois des cinq ingrédients les plus difficiles de l'Ultima.\n\nIls apparaissent au hasard, à la place d'un groupe de Sans-cœur ordinaire, dans une poignée de zones seulement. Sortir de la zone et y revenir relance le tirage : c'est la seule façon de les faire apparaître.\n\nIls comptent tous pour le Journal de Jiminy, qui demande de rencontrer chaque espèce au moins une fois.",
      "Four Heartless in the first Kingdom Hearts are not fought: they are **satisfied**. Each wants something specific, and rewards whoever understands it with rare synthesis materials — including three of the Ultima's five hardest ingredients.\n\nThey appear at random, in place of an ordinary group of Heartless, in a handful of areas only. Leaving the area and coming back re-rolls the draw: that is the only way to make them show up.\n\nThey all count towards Jiminy's Journal, which asks you to meet every species at least once.",
    ),
    steps: [
      {
        id: "bolet-blanc",
        title: L("Le Bolet Blanc : sept mimes, sept sorts", "The White Mushroom: seven mimes, seven spells"),
        text: L(
          "Le Bolet Blanc ne vous attaquera **jamais**. Il prend une pose, et attend le sort correspondant. Trois bons sorts d'affilée et il saute de joie avant de disparaître, en laissant une pluie de sphères de magie et des matériaux. Un mauvais sort, un coup de Keyblade, ou trop d'hésitation, et il s'en va.\n\nLes sept poses :\n\n- Il **baisse la tête, joint les mains et tremble** → Brasier\n- Il **se cambre en arrière en agitant les bras** → Glacier\n- Une **lumière apparaît au-dessus de lui** → Foudre\n- Il **tombe en avant et reste allongé** → Soin (mettez-vous à côté et choisissez « au contact »)\n- Il **flotte dans les airs** → Gravité\n- Il **se fige en plein pas** → Stop\n- Il **tourne sur lui-même** → Rafale\n\nQuand il se déhanche, marche, ou porte la main à son menton, il ne demande rien : ne lancez rien.\n\nL'astuce qui compte : **attendez la pose qui vous intéresse** et lancez trois fois le même sort. Vous recevez alors le **Brevet** correspondant. Les sept Brevets montrés à Merlin donnent la **Targe des Rêves** à Dingo. Trois fois le même sort donne aussi 40 % de chances d'obtenir le Roc de l'élément, et 20 % une Larme de Joie.\n\nOn le trouve à la Jungle Profonde (campement et cabane), à la Ville d'Halloween (cimetière), à Atlantica (épaves et grotte), à Agrabah (salle du trésor), au Pays des Merveilles (forêt de lotus), à la Fin du Monde (croisée des mondes), et à la Ville de Traverse (chambre rouge) — mais seulement avant la première visite à la Forteresse Oubliée.",
          "The White Mushroom will **never** attack you. It strikes a pose and waits for the matching spell. Three correct spells in a row and it hops with joy before vanishing, leaving a shower of MP orbs and materials. A wrong spell, a Keyblade swing, or too much hesitation, and it leaves.\n\nThe seven poses:\n\n- It **bows its head, clasps its hands and shivers** → Fire\n- It **arches back waving its arms** → Blizzard\n- A **light appears above it** → Thunder\n- It **falls forward and lies still** → Cure (stand next to it and choose the contact option)\n- It **floats into the air** → Gravity\n- It **freezes mid-step** → Stop\n- It **spins on the spot** → Aero\n\nWhen it sways, walks, or puts a hand to its chin, it is asking for nothing: cast nothing.\n\nThe trick that matters: **wait for the pose you want** and cast the same spell three times. You then receive the matching **Arts** item. The seven Arts shown to Merlin grant Goofy the **Dream Shield**. Three casts of the same spell also give a 40% chance of the element's Gem, and 20% of a Mystery Goo.\n\nIt is found in Deep Jungle (Camp and Tree House), Halloween Town (Graveyard), Atlantica (Sunken Ship and Grotto), Agrabah (Treasure Room), Wonderland (Lotus Forest), the End of the World (World Terminus), and Traverse Town (Red Room) — but only before the first visit to Hollow Bastion.",
        ),
      },
      {
        id: "truffe-bleue",
        title: L("La Truffe Bleue : cent rebonds", "The Rare Truffle: a hundred bounces"),
        text: L(
          "Jaune et bleue, la Truffe Bleue ne demande qu'une chose : **rester en l'air**. Chaque coup la fait rebondir ; **dès qu'elle retouche le sol, elle s'en va**. Le compteur monte jusqu'à cent.\n\nLa méthode fiable ne passe pas par la Keyblade : **coincez-la dans un angle et lancez Rafale**. Le vent autour de Sora la propulse, et tant qu'elle retombe dedans elle rebondit toute seule — il suffit de rester dessous et de relancer le sort quand il s'épuise. C'est le seul moyen raisonnable d'atteindre cent.\n\nLe meilleur endroit est le **cinquième match de la coupe d'Hercule**, où elle apparaît seule dans une arène fermée, sans rien pour la déranger.\n\nAu Pays Imaginaire, une autre méthode marche : sur le pont du navire, où l'on vole, on peut la frapper à un rythme régulier sans avoir à sauter — équipez l'Aimant à trésors pour que les objets ne tombent pas à la mer, et démarrez loin des mâts.\n\nLes paliers : **10 rebonds** un Élixir ; **50** un Élixir, le Prix Shiitake et de bonnes chances de Larme de Joie ; **100** un Méga-élixir, une Larme de Joie garantie et le Prix Matsutake.\n\nOn la trouve au Colisée de l'Olympe, à Monstro (la gorge), à la Ville d'Halloween (le pont), au Pays Imaginaire (le pont du navire) et à la Fin du Monde.",
          "Yellow and blue, the Rare Truffle wants one thing: **to stay in the air**. Each hit sends it back up; **the moment it touches the ground, it leaves**. The counter runs to a hundred.\n\nThe reliable method is not the Keyblade: **corner it and cast Aero**. The wind around Sora launches it, and as long as it falls back into the wind it bounces on its own — just stay underneath and recast the spell as it runs out. That is the only sane way to reach a hundred.\n\nThe best place is the **fifth match of the Hercules Cup**, where it appears alone in a closed arena with nothing to get in the way.\n\nIn Neverland another method works: on the ship's deck, where you fly, you can hit it at an even pace without jumping — equip Treasure Magnet so the drops do not fall into the sea, and start away from the masts.\n\nThe tiers: **10 bounces** an Elixir; **50** an Elixir, the Shiitake Rank and good odds on a Mystery Goo; **100** a Megalixir, a guaranteed Mystery Goo and the Matsutake Rank.\n\nIt is found at Olympus Coliseum, in Monstro (the Gorge), Halloween Town (the Bridge), Neverland (the ship's Deck) and the End of the World.",
        ),
      },
      {
        id: "fungus-noir",
        title: L("Le Fungus Noir : le seul qui riposte", "The Black Fungus: the only one that fights back"),
        text: L(
          "Violet et noir, le Fungus Noir est l'exception : c'est un vrai ennemi, et un ennemi coriace. Il se **ramasse sur lui-même** avant de lâcher un nuage de spores empoisonnées qui repousse et empoisonne — c'est le signal pour s'écarter le temps que ça se dissipe. Quand il **vire au blanc-gris**, il est totalement invulnérable : inutile d'insister, attendez.\n\nSa vie n'est pas énorme mais il encaisse remarquablement bien. La Gravité l'entame mieux que tout le reste, et la **Trinité Limite** en vient à bout d'un coup.\n\nCe qui compte, c'est **la manière de le finir** : achevé par un coup critique en fin de combo, il lâche une Larme de Joie à coup sûr, et une chance sur dix de laisser une **Moisissure Mystère** — un objet qui ne sert strictement à rien, sinon à se vendre 3 000 munnies et à figurer au Journal.\n\nIl apparaît notamment au quatrième match de la coupe Pégase, où l'on en affronte trois d'un coup.",
          "Purple and black, the Black Fungus is the exception: a real enemy, and a tough one. It **hunches down** before releasing a cloud of poisonous spores that knocks back and poisons — that is your cue to step away until it clears. When it **turns greyish white**, it is completely invulnerable: do not insist, wait.\n\nIts HP is not huge but it soaks damage remarkably well. Gravity cuts through it better than anything else, and **Trinity Limit** finishes it in one go.\n\nWhat matters is **how you finish it**: killed with a critical hit at the end of a combo, it always drops a Mystery Goo, and has a one-in-ten chance of leaving a **Mystery Mold** — an item that serves no purpose at all, beyond selling for 3,000 munny and appearing in the Journal.\n\nIt shows up notably in the Pegasus Cup's fourth match, where three are fought at once.",
        ),
      },
      {
        id: "agaric-rose",
        title: L("L'Agaric Rose : le plus exigeant, et le plus utile", "The Pink Agaricus: the most demanding, and the most useful"),
        text: L(
          "Exclusif à Final Mix, l'Agaric Rose fait deux fois la taille de Sora et n'apparaît qu'à la **Jungle Profonde** et à **Atlantica** — et seulement une fois que les **trois Bolets Blancs** de la zone ont été renvoyés en leur lançant Stop.\n\nLe principe : le figer avec **Stop**, puis le frapper le plus possible avant la fin du sort. Or la durée de Stop dépend uniquement de vos **points de magie maximum** : c'est donc un problème d'équipement avant d'être un problème d'adresse. La meilleure combinaison est l'As de Cœur ou l'Ultima, avec la Ceinture de Shiva, le Poignet astral et l'Amulette cosmique.\n\nIl faut aussi **Rafale X** et les capacités **Ragnarok** et **Combo aérien**. Visez la tête, lancez Rafale X puis Stop, et enchaînez les Ragnarok dès qu'ils sont disponibles — attention, il faut être au sol pour les déclencher. Rafale X ajoute deux coups par seconde sans rien faire.\n\nC'est la **seule source de Cristal Serein** du jeu : trois pour l'Ultima, trois pour le Ruban, un pour l'Anneau XP. Autrement dit, pas d'Ultima sans lui.",
          "Exclusive to Final Mix, the Pink Agaricus is twice Sora's size and only appears in **Deep Jungle** and **Atlantica** — and only once the area's **three White Mushrooms** have been dismissed by casting Stop on them.\n\nThe principle: freeze it with **Stop**, then hit it as much as possible before the spell ends. But Stop's duration depends solely on your **maximum MP**: so it is a question of equipment before it is a question of skill. The best set-up is Lady Luck or the Ultima, with the Ifrit Belt, Atlas Armlet and Cosmic Arts.\n\nYou also want **Aeroga** and the **Ragnarok** and **Aerial Sweep** abilities. Aim for the head, cast Aeroga then Stop, and chain Ragnaroks whenever available — note you must be on the ground to trigger them. Aeroga adds about two hits a second on its own.\n\nIt is the game's **only source of Serenity Power**: three for the Ultima, three for the Ribbon, one for the EXP Ring. In other words, no Ultima without it.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Sans-cœur", "Heartless"),
      intro: L(
        "Ce que chacun rapporte, une fois satisfait.",
        "What each one is worth, once satisfied.",
      ),
      rows: [
        { tier: L("Bolet Blanc", "White Mushroom"), reward: L("Les sept Brevets (Brasier, Glacier, Foudre, Soin, Gravité, Stop, Rafale), qui donnent la Targe des Rêves. Rocs élémentaires et Larmes de Joie en prime.", "The seven Arts items (Fire, Blizzard, Thunder, Cure, Gravity, Stop, Aero), which grant the Dream Shield. Elemental Gems and Mystery Goo besides.") },
        { tier: L("Truffe Bleue", "Rare Truffle"), reward: L("Élixir, Méga-élixir, Larme de Joie, Prix Shiitake et Prix Matsutake selon le nombre de rebonds.", "Elixir, Megalixir, Mystery Goo, Shiitake Rank and Matsutake Rank depending on the number of bounces.") },
        { tier: L("Fungus Noir", "Black Fungus"), reward: L("Larme de Joie à coup sûr sur un coup critique, et une fois sur dix la Moisissure Mystère.", "A guaranteed Mystery Goo on a critical hit, and a one-in-ten Mystery Mold.") },
        { tier: L("Agaric Rose", "Pink Agaricus"), reward: L("Le Cristal Serein — introuvable ailleurs, et indispensable à l'Ultima.", "Serenity Power — found nowhere else, and essential to the Ultima.") },
      ],
      note: L(
        "Les trois derniers sont la raison d'être de cette quête : sans eux, la liste de synthèse ne se termine pas.",
        "The last three are the reason this quest exists: without them, the synthesis list cannot be finished.",
      ),
    },
  },
  {
    id: "tournois-colisee",
    title: L("Les tournois du Colisée", "The Coliseum tournaments"),
    tagline: L(
      "Quatre coupes, soixante-seize matchs, et les meilleures armes du jeu à la clé.",
      "Four cups, seventy-six matches, and the game's best weapons at stake.",
    ),
    entry: "olympus",
    image: { src: "/images/walkthrough/olympus-3.webp", credit: credit("Olympus Coliseum from KH1 gameplay 3.png"), width: 420, height: 237 },
    status: "done",
    intro: L(
      "Les coupes du Colisée sont le contenu facultatif le plus riche du jeu, et de loin le plus rentable : la Keyblade Chocobo d'Acier, la Keyblade Lionheart, les armes ultimes de Donald et Dingo, la Trinité Limite, trois sorts de niveau maximum et un rapport d'Ansem s'y gagnent.\n\nChaque coupe s'ouvre à un moment précis de l'histoire, et se joue de trois façons. **En équipe**, c'est le parcours normal. **Seul contre tous**, Sora se bat sans Donald ni Dingo. **Contre la montre**, il faut finir la coupe sous un temps donné — vingt minutes pour la coupe de l'Hadès, la plus longue. Les trois versions donnent chacune leur récompense.\n\nUn détail qui change tout dans la coupe de l'Hadès : **chaque boss vaincu aux matchs multiples de dix sert de point de reprise**. Perdre au match 12 ne renvoie donc pas au match 49, mais au 20.\n\nUn mot sur la difficulté : les coupes reprennent les ennemis des mondes, mais en configurations que l'on ne croise jamais en jeu normal — plus nombreux, mieux assortis, et souvent plus coriaces.",
      "The Coliseum cups are the game's richest optional content, and by far the most rewarding: the Metal Chocobo and Lionheart Keyblades, Donald's and Goofy's ultimate weapons, Trinity Limit, three top-tier spells and an Ansem's Report are all won here.\n\nEach cup opens at a set point in the story, and is played three ways. **As a team**, the normal run. **Solo**, Sora fights without Donald or Goofy. **Time trial**, finishing the cup under a set time — twenty minutes for the Hades Cup, the longest. All three give their own reward.\n\nOne detail changes everything in the Hades Cup: **each boss beaten at a multiple-of-ten seed acts as a checkpoint**. Losing at seed 12 does not send you back to seed 49, but to 20.\n\nA word on difficulty: the cups reuse the worlds' enemies, but in line-ups you never meet in normal play — more numerous, better matched, and often tougher.",
    ),
    tables: [
      {
        id: "coupes",
        title: L("Les quatre coupes", "The four cups"),
        columns: [L("Coupe", "Cup"), L("Quand elle s'ouvre", "When it opens"), L("Ce qu'elle rapporte", "What it gives")],
        rows: [
          at("Coupe Philoctète", ["Après avoir scellé la Serrure de la Ville de Traverse", "After sealing Traverse Town's Keyhole"], ["En équipe : Essence des Étoiles. Seul : Bout de Mithril. Contre la montre : Bonus PC. Neuf matchs, les ennemis de la Ville de Traverse, du Pays des Merveilles et de la Jungle Profonde.", "Team: Power of Stars. Solo: Mythril Shard. Time trial: AP Up. Nine matches, the enemies of Traverse Town, Wonderland and Deep Jungle."]),
          at("Coupe Pégase", ["Après avoir terminé Monstro", "After finishing Monstro"], ["En équipe : Diskobolos. Seul : Mithril. Contre la montre : Bonus Défense. Neuf matchs, les ennemis d'Agrabah et de Monstro, avec Léon et Youfie en finale.", "Team: Entei. Solo: Mythril. Time trial: Defense Up. Nine matches, the enemies of Agrabah and Monstro, with Leon and Yuffie in the final."]),
          at("Coupe Hercule", ["Après avoir scellé la Serrure du Pays Imaginaire", "After sealing Neverland's Keyhole"], ["En équipe : Targe d'Hercule. Seul : Orichalque. Contre la montre : Bonus Attaque. Battre Cloud au sixième match donne la Keyblade Chocobo d'Acier. Neuf matchs, les ennemis de la Ville d'Halloween et du Pays Imaginaire, Hercule en finale.", "Team: Hero's License. Solo: Orichalcum. Time trial: Power Up. Beating Cloud in the sixth match gives the Metal Chocobo Keyblade. Nine matches, the enemies of Halloween Town and Neverland, Hercules in the final."]),
          at("Coupe de l'Hadès", ["Après avoir scellé la Serrure finale de la Forteresse Oubliée", "After sealing Hollow Bastion's final Keyhole"], ["En équipe : la Trinité Limite. Seul : Save the Queen pour Donald. Contre la montre (20 min) : Save the King pour Dingo. Quarante-neuf matchs, tous les ennemis du jeu ou presque.", "Team: Trinity Limit. Solo: Save the Queen for Donald. Time trial (20 min): Save the King for Goofy. Forty-nine matches, nearly every enemy in the game."]),
        ],
      },
      {
        id: "hades-boss",
        title: L("Les six rendez-vous de la coupe de l'Hadès", "The Hades Cup's six appointments"),
        intro: L(
          "Les quarante-neuf matchs se comptent à rebours : le 49 est le premier, le 1 est la finale. Ces six-là sont les seuls qui comptent vraiment — et cinq d'entre eux servent de point de reprise.",
          "The forty-nine seeds count down: 49 is the first match, 1 the final. These six are the only ones that really matter — and five of them act as checkpoints.",
        ),
        columns: [L("Match", "Seed"), L("Adversaire", "Opponent"), L("Ce qu'il rapporte, et comment le battre", "What it gives, and how to beat it")],
        rows: [
          at("44", ["Youfie, seule", "Yuffie, alone"], ["Le Bouclier Genji pour Dingo. Elle esquive plus qu'elle ne frappe et lance des shurikens à tête chercheuse : parez-les pour les lui renvoyer, elle s'étourdit et s'ouvre à un combo.", "The Genji Shield for Goofy. She dodges more than she strikes and throws homing shuriken: block them to send them back, she staggers and opens up to a combo."]),
          at("40", ["Béhémoth détruit", "Destroyed Behemoth"], ["Le sort **Glacier X**. Le Béhémoth ordinaire dans la version d'origine. Sa corne reste son seul point faible : le Saut Haut permet de grimper sur son dos.", "The **Blizzaga** spell. An ordinary Behemoth in the original version. Its horn is still the only weak point: High Jump lets you climb onto its back."]),
          at("30", ["Cerbère", "Cerberus"], ["Le sort **Foudre X**. Le même combat qu'au premier passage, en plus solide. Avec le Saut Haut on peut monter sur son dos, ce qui simplifie beaucoup les têtes.", "The **Thundaga** spell. The same fight as the first time, sturdier. With High Jump you can get onto his back, which makes the heads much easier."]),
          at("20", ["Cloud et Léon, ensemble", "Cloud and Leon, together"], ["La Keyblade **Lionheart**, l'une des meilleures du jeu. Le combat le plus dur de la coupe : concentrez-vous sur l'un en esquivant l'autre, leurs attaques sont rapides et font très mal.", "The **Lionheart** Keyblade, one of the best in the game. The cup's hardest fight: focus on one while dodging the other, their attacks are fast and hit very hard."]),
          at("10", ["Hadès", "Hades"], ["Le sort **Gravité X** et le **rapport d'Ansem n° 8**. Tout chez lui est à base de feu : la Ceinture de Shiva et les accessoires de résistance au feu changent le combat. Il annonce ses attaques à voix haute — c'est ce qui le rend lisible.", "The **Graviga** spell and **Ansem's Report 8**. Everything about him is fire-based: the Ifrit Belt and fire-resistance accessories change the fight. He announces his attacks out loud — that is what makes him readable."]),
          at("1", ["Titan de Roche", "Rock Titan"], ["La fin de la coupe. Malgré sa place, il est très facile : frappez ses pieds jusqu'à ce qu'il tombe, grimpez sur son corps et tapez les têtes en restant sur les côtés.", "The end of the cup. Despite its place, it is very easy: hit its feet until it falls over, climb onto its body and strike the heads while staying to the sides."]),
        ],
      },
      {
        id: "matchs-notables",
        title: L("Les matchs qui méritent qu'on s'y prépare", "The matches worth preparing for"),
        intro: L(
          "Le reste se déroule sans surprise, à quelques exceptions près.",
          "The rest goes by without surprises, with a few exceptions.",
        ),
        columns: [L("Coupe et match", "Cup and seed"), L("Ce qu'on y trouve", "What is in it"), L("Pourquoi il compte", "Why it matters")],
        rows: [
          at("Philoctète, 1", ["Bataillon de l'Ombre : Torse Blindé, Opéras Jaunes, Rhapsodies Bleues", "Shadow Battalion: Armored Torso, Yellow Operas, Blue Rhapsodies"], ["Le Torse ne fait qu'une chose : une tornade à tête chercheuse, trop rapide pour être esquivée. Parez-la, puis abattez-le tant qu'il est étourdi — et avant les Sans-cœur magiques, qui servent surtout à vous distraire.", "The Torso does one thing: a homing tornado, too fast to reliably dodge. Block it, then take it down while it is stunned — and before the magic Heartless, whose job is to distract you."]),
          at("Pégase, 4", ["Truffe Folle : trois Fungus Noirs", "Toadstool: three Black Fungi"], ["Le seul champignon agressif du jeu, et trois d'un coup. La Gravité les entame bien mieux que le reste. Achevez-les d'un coup critique pour les Larmes de Joie.", "The game's only aggressive mushroom, and three at once. Gravity cuts through them far better than anything else. Finish them with a critical hit for the Mystery Goo."]),
          at("Pégase, 1", ["Léon et Youfie", "Leon and Yuffie"], ["Visez Youfie d'abord : elle a bien moins de vie, et elle les soigne tous les deux avec des potions si on la laisse faire.", "Aim for Yuffie first: she has far less HP, and she heals both of them with potions if left alone."]),
          at("Hercule, 5", ["Truffe Folle : une Truffe Bleue, seule", "Mad Truffle: a lone Rare Truffle"], ["L'endroit idéal pour les cent rebonds : arène fermée, aucun autre ennemi. Rafale dans un angle et le compteur monte tout seul.", "The ideal place for the hundred bounces: closed arena, no other enemies. Aero in a corner and the counter climbs on its own."]),
          at("Hercule, 4", ["Cloud", "Cloud"], ["Les mêmes coups qu'au premier combat, avec des statistiques bien plus hautes, plus l'Omnislash : sous 50 % de vie il crépite, devient invulnérable et vous poursuit en volant. Roulade, et rien d'autre. Sa défaite donne la Keyblade Chocobo d'Acier.", "The same moves as the first fight, with far higher stats, plus Omnislash: below 50% HP he crackles, turns invulnerable and chases you through the air. Dodge Roll, and nothing else. Beating him gives the Metal Chocobo Keyblade."]),
          at("Hercule, 1", ["Hercule", "Hercules"], ["Son aura dorée le rend invulnérable. Des tonneaux apparaissent dans l'arène : **ramassez-en un et jetez-le sur lui** pour dissiper l'aura, puis frappez tant qu'elle est baissée. Ses coups de poing s'annoncent longtemps à l'avance mais portent loin ; la roulade suffit.", "His golden aura makes him invulnerable. Barrels spawn in the arena: **pick one up and throw it at him** to dispel the aura, then hit him while it is down. His punches wind up well in advance but carry a long way; Dodge Roll is enough."]),
          at("Hadès, 6", ["Bolet Fou : trois Bolets Blancs", "Mad Mushroom: three White Mushrooms"], ["Attention : les Bolets Blancs de la coupe de l'Hadès **ne donnent ni sphères ni objets**. Inutile de perdre du temps à leur lancer des sorts.", "Careful: the White Mushrooms in the Hades Cup **give neither orbs nor items**. There is no point spending time casting spells at them."]),
          at("Hadès, 5, 3 et 2", ["Des vagues sans fin : 26, 19 puis 29 ennemis", "Endless waves: 26, 19 then 29 enemies"], ["Trop d'ennemis pour l'arène : ils réapparaissent au fur et à mesure jusqu'à ce que le compte y soit. Ce sont les matchs les plus longs de la coupe, et une pure guerre d'usure — gardez des Élixirs.", "Too many enemies for the arena: they respawn as you go until the count is met. The cup's longest matches, and pure attrition — keep Elixirs."]),
        ],
      },
    ],
    rewards: {
      tierHeader: L("Épreuve", "Challenge"),
      intro: L(
        "Chaque coupe se termine trois fois. Voici ce que rapporte chaque version.",
        "Each cup is finished three times. Here is what each version gives.",
      ),
      rows: [
        { tier: L("Philoctète — équipe / seul / temps", "Phil — team / solo / time"), reward: L("Essence des Étoiles · Bout de Mithril · Bonus PC", "Power of Stars · Mythril Shard · AP Up") },
        { tier: L("Pégase — équipe / seul / temps", "Pegasus — team / solo / time"), reward: L("Diskobolos · Mithril · Bonus Défense", "Entei · Mythril · Defense Up") },
        { tier: L("Hercule — équipe / seul / temps", "Hercules — team / solo / time"), reward: L("Targe d'Hercule · Orichalque · Bonus Attaque", "Hero's License · Orichalcum · Power Up") },
        { tier: L("Hadès — équipe / seul / temps", "Hades — team / solo / time"), reward: L("Trinité Limite · Save the Queen (Donald) · Save the King (Dingo)", "Trinity Limit · Save the Queen (Donald) · Save the King (Goofy)") },
        { tier: L("En chemin", "Along the way"), reward: L("Chocobo d'Acier (Cloud, Hercule 4) · Bouclier Genji (Youfie, Hadès 44) · Lionheart (Cloud et Léon, Hadès 20) · Glacier X, Foudre X, Gravité X · rapport d'Ansem n° 8", "Metal Chocobo (Cloud, Hercules 4) · Genji Shield (Yuffie, Hades 44) · Lionheart (Cloud and Leon, Hades 20) · Blizzaga, Thundaga, Graviga · Ansem's Report 8") },
      ],
      note: L(
        "Save the Queen et Save the King sont les meilleures armes de Donald et de Dingo dans la version d'origine ; en Final Mix, la Fantasista et les Sept Éléments, à synthétiser, passent devant.",
        "Save the Queen and Save the King are Donald's and Goofy's best weapons in the original release; in Final Mix the Fantasista and Seven Elements, both crafted, overtake them.",
      ),
    },
  },
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
