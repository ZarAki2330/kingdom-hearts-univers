import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

const NATURE = L("Nature du monstre", "Nature of the creature");

/**
 * Histoire détaillée des ennemis (lot B) : boss de Birth by Sleep, 358/2 Days,
 * Dream Drop Distance, Kingdom Hearts III et Melody of Memory.
 * Les clés sont les slugs des entrées d'ennemis.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Armure Trinité ───────────────────────────
  "gluttonous-goo": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Gluttonous Goo est un Nescient, l'une des créatures nées des émotions négatives de Vanitas dans Birth by Sleep. Il prend la forme d'une énorme gelée molle et tremblante, marquée du blason rouge et noir de l'espèce, et son nom japonais — Jelly Glee Tea — dit assez le ton comique de sa silhouette.\n\nIl appartient au contenu ajouté par le Final Mix du jeu et n'apparaît dans aucune scène du récit : c'est une créature de défi, conçue pour un mode annexe plutôt que pour l'histoire des trois apprentis.",
          "The Gluttonous Goo is an Unversed, one of the creatures born from Vanitas's negative emotions in Birth by Sleep. It takes the form of an enormous soft, quivering jelly bearing the species' red and black crest, and its Japanese name — Jelly Glee Tea — says enough about the comic tone of its shape.\n\nIt belongs to the content added by the game's Final Mix and appears in no story scene: it is a challenge creature, designed for a side mode rather than for the three apprentices' tale.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Le combat se déroule à Deep Space, sur le pont d'envol du vaisseau de la Fédération Galactique Unie, dans une Mission Nesciente : un défi où le Porteur de Keyblade doit s'emparer de billes colorées et les conserver. La gelée en contient une centaine et fait tout pour les reprendre, fonçant sur le joueur pour lui arracher celle qu'il tient et ramassant celles qui tombent quand une attaque à distance la fait échapper.\n\nS'y ajoute une défense frontale : le Gluttonous Goo pare une partie des coups portés de face, ce qui pousse à alterner esquives, attaques de dos et magie plutôt qu'à frapper sans relâche. La récompense de ces missions, propres au Final Mix, en fait un passage recherché des joueurs qui préparent les défis optionnels les plus exigeants.",
          "The fight takes place in Deep Space, on the launch deck of the United Galactic Federation ship, as an Unversed Mission: a challenge where the Keyblade wielder has to grab coloured balls and hold on to them. The jelly holds a hundred of them and does everything to take them back, charging the player to snatch the one being carried and picking up any that a ranged attack knocks loose.\n\nOn top of that comes a frontal guard: the Gluttonous Goo blocks part of the blows landed head-on, which encourages dodging, attacking from behind and using magic rather than swinging relentlessly. The rewards of these Final Mix missions make it a sought-after fight for players preparing the game's hardest optional challenges.",
        ),
      },
    ],
  },
  "trinity-armor": {
    sections: [
      {
        title: NATURE,
        text: L(
          "L'Armure Trinité est un Nescient colossal, c'est-à-dire l'une de ces créatures nées des émotions négatives de Vanitas et reconnaissables au symbole rouge et noir qu'elles portent. Contrairement aux Nescients ordinaires, ce boss ne ressemble ni à un insecte ni à une flamme : il prend l'apparence d'une armure articulée bleu et or, un torse massif surmonté d'un casque et flanqué de bras et de jambes qui peuvent se détacher pour combattre séparément.\n\nOn l'affronte au Jardin Radieux, la ville-jardin où vivent alors Ansem le Sage et ses apprentis, dans les rues basses envahies par les Nescients. Sa particularité tient à sa capacité à se scinder en trois adversaires distincts, chacun avec son propre style d'attaque, ce qui force les héros à se répartir la cible.",
          "The Trinity Armor is a colossal Unversed, one of those creatures born from Vanitas's negative emotions and marked with the red and black emblem they all carry. Unlike ordinary Unversed, this boss looks neither like an insect nor a flame: it takes the shape of an articulated blue and gold suit of armour, a massive torso topped by a helmet and flanked by arms and legs that can detach and fight on their own.\n\nIt is fought in Radiant Garden, the garden city where Ansem the Wise and his apprentices still live, in the lower streets overrun by Unversed. Its trademark is the ability to split into three separate opponents, each with its own attack pattern, forcing the heroes to divide their attention.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Le combat contre l'Armure Trinité est le seul moment de Birth by Sleep où Terra, Aqua et Ventus se battent ensemble, quel que soit le scénario choisi. Les trois apprentis, séparés depuis leur départ de la Contrée du Départ et lancés chacun sur sa propre route, se croisent au Jardin Radieux et découvrent qu'ils poursuivent les mêmes ennemis.\n\nL'armure se démembre pour les prendre à revers, mais le trio riposte par une attaque conjointe qui la met en pièces. Cette victoire est le sommet émotionnel de la première moitié du jeu : elle prouve que les trois amis sont plus forts unis. Elle est aussi cruelle par contraste, car ils se séparent aussitôt après, chacun rappelé par ses propres doutes, et ne se retrouveront plus qu'au Cimetière des Keyblades, cette fois pour un désastre.",
          "The Trinity Armor battle is the only moment in Birth by Sleep where Terra, Aqua and Ventus fight side by side, whichever scenario you play. The three apprentices, apart since they left the Land of Departure and each set on their own road, cross paths in Radiant Garden and realise they are chasing the same enemies.\n\nThe armour dismembers itself to flank them, but the trio answers with a joint attack that tears it apart. This victory is the emotional peak of the game's first half: it proves the three friends are stronger together. It is also cruel by contrast, since they split up immediately afterwards, each called away by their own doubts, and will only meet again at the Keyblade Graveyard, this time for a disaster.",
        ),
      },
    ],
    trivia: [
      L("Le combat se joue à trois personnages contrôlés par le joueur et l'IA, une configuration unique dans Birth by Sleep.", "The fight puts three characters on the field between the player and the AI, a setup unique in Birth by Sleep."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Trinity Armor", url: "https://kingdomhearts.fandom.com/wiki/Trinity_Armor" }],
  },

  // ─────────────────────────── Iron Imprisoner ───────────────────────────
  "iron-imprisoner": {
    sections: [
      {
        title: NATURE,
        text: L(
          "L'Iron Imprisoner est un Nescient massif et grotesque, une silhouette bardée de fer et entravée de lourdes chaînes, comme un geôlier devenu son propre prisonnier. Sa tête cornue et ses bracelets brisés évoquent une créature qu'on a voulu enfermer et qui a fini par retourner sa prison contre le monde. Comme tous les Nescients, il est né des émotions négatives de Vanitas et disparaît en fumée sombre une fois vaincu.\n\nIl s'agit d'un adversaire optionnel de Birth by Sleep, associé aux combats d'arène plutôt qu'à un monde Disney précis. Il revient en quatre incarnations successives, numérotées de I à IV, chacune plus rapide et plus résistante que la précédente, avec de nouvelles attaques de feu et de chaînes.",
          "The Iron Imprisoner is a massive, grotesque Unversed: an iron-clad silhouette weighed down by heavy chains, a jailer that has become its own prisoner. Its horned head and broken shackles evoke a creature someone tried to lock away that ended up turning its cell against the world. Like every Unversed it was born from Vanitas's negative emotions and bursts into dark smoke when defeated.\n\nIt is an optional opponent in Birth by Sleep, tied to the arena challenges rather than to any one Disney world. It returns in four successive incarnations, numbered I to IV, each faster and tougher than the last, with new fire and chain attacks.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "L'Iron Imprisoner ne participe pas à l'intrigue principale : il est réservé aux joueurs qui veulent mesurer la puissance réelle de Terra, Ventus et Aqua. Ses quatre versions se débloquent au fil de la progression et constituent l'un des paliers de difficulté les plus redoutés du jeu, aux côtés du Vanitas Remnant et des surnoms d'arène.\n\nLe combat repose sur la gestion de l'espace : la créature charge en ligne droite, projette des vagues de flammes et fait tournoyer ses chaînes pour couvrir tout le terrain. Les dernières incarnations enchaînent ces schémas presque sans pause, ce qui oblige à composer un jeu de commandes très précis et à exploiter les Styles de Combat. Le vaincre n'apporte aucune révélation narrative, mais reste une preuve de maîtrise du système de combat le plus technique de la saga.",
          "The Iron Imprisoner takes no part in the main plot: it is reserved for players who want to test the real strength of Terra, Ventus and Aqua. Its four versions unlock as you progress and form one of the game's most feared difficulty steps, alongside the Vanitas Remnant and the arena challenges.\n\nThe fight is about controlling space: the creature charges in straight lines, throws out waves of flame and whirls its chains to cover the whole arena. The later incarnations chain those patterns almost without pause, forcing a carefully built command deck and heavy use of Command Styles. Beating it brings no story revelation, but it remains proof of mastery over the most technical battle system in the series.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Iron Imprisoner", url: "https://kingdomhearts.fandom.com/wiki/Iron_Imprisoner" }],
  },

  // ─────────────────────────── Manteau Noir Anti ───────────────────────────
  "anti-black-coat": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Manteau Noir Anti appartient à la famille des Avale-Rêves, ces créatures qui peuplent les Mondes Endormis, et plus précisément à leur versant maléfique : les Cauchemars, qui se nourrissent des rêves au lieu de les protéger. Sa silhouette est celle d'un membre de l'Organisation XIII, capuche relevée et manteau noir flottant, mais son corps est fait de ténèbres pures et son visage reste vide.\n\nOn l'affronte au Monde qui n'existe pas, la forteresse blanche de l'Organisation, revue ici en version endormie. Le monstre n'est pas un ennemi extérieur : il naît des ténèbres que Riku porte en lui depuis sa chute dans le premier Kingdom Hearts, et qu'il n'a jamais complètement chassées.",
          "The Anti Black Coat belongs to the Dream Eater family that fills the Sleeping Worlds, and specifically to their malevolent side: the Nightmares, which feed on dreams instead of protecting them. Its silhouette is that of an Organization XIII member, hood up and black coat flowing, but its body is made of pure darkness and its face stays blank.\n\nIt is fought in The World That Never Was, the Organization's white fortress, seen here in its sleeping version. The monster is no outside enemy: it is born from the darkness Riku has carried since his fall in the first Kingdom Hearts and never entirely driven out.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Pendant l'examen de Maîtrise, Riku traverse les Mondes Endormis persuadé que sa mission est de veiller sur Sora. Au Monde qui n'existe pas, le Manteau Noir Anti lui barre la route et combat comme un miroir : téléportations, lames de ténèbres, charges rapides, exactement l'arsenal que Riku a lui-même employé du temps où il servait Ansem.\n\nLe combat est donc moins une épreuve de force qu'une confrontation avec son passé. En l'emportant, Riku ne rejette pas ses ténèbres : il montre qu'il peut les employer sans se laisser dévorer, ce qui est précisément la leçon que Yen Sid attendait. Cette victoire prépare la fin du jeu, où Riku est reconnu Maître de la Keyblade tandis que Sora, tombé dans le piège de Xehanort, doit être sauvé de son propre sommeil.",
          "During the Mark of Mastery exam, Riku crosses the Sleeping Worlds convinced his task is to watch over Sora. In The World That Never Was, the Anti Black Coat blocks his way and fights like a mirror: teleports, blades of darkness, fast charges — exactly the arsenal Riku himself used while serving Ansem.\n\nThe fight is therefore less a test of strength than a confrontation with his past. By winning, Riku does not reject his darkness: he shows he can wield it without being devoured, which is precisely the lesson Yen Sid was waiting for. The victory sets up the ending, where Riku is named a Keyblade Master while Sora, caught in Xehanort's trap, must be rescued from his own sleep.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Anti Black Coat", url: "https://kingdomhearts.fandom.com/wiki/Anti_Black_Coat" }],
  },

  // ─────────────────────────── Spellican ───────────────────────────
  "spellican": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Spellican est un Cauchemar, la variante hostile des Avale-Rêves qui hantent les Mondes Endormis. Son corps évoque un grand oiseau au long bec, coiffé d'un chapeau de sorcier étoilé et enveloppé d'une cape, silhouette qui renvoie directement à l'apprenti sorcier de Fantasia. Des runes et des notes de musique l'accompagnent quand il déploie ses ailes.\n\nOn le rencontre dans la Symphonie de la Sorcellerie, le monde tiré du Fantasia de Disney, où les décors se composent au rythme de la musique de Moussorgski et de Beethoven. Fidèle à ce cadre, Spellican combat en invoquant d'autres Cauchemars et en détournant la magie du lieu contre son adversaire, ce qui en fait un boss de soutien autant qu'un combattant direct.",
          "Spellican is a Nightmare, the hostile branch of the Dream Eaters haunting the Sleeping Worlds. Its body suggests a large long-beaked bird wearing a star-covered sorcerer's hat and a cape, a silhouette that points straight at the sorcerer's apprentice of Fantasia. Runes and musical notes trail it whenever it spreads its wings.\n\nIt is met in Symphony of Sorcery, the world drawn from Disney's Fantasia, where the scenery assembles itself in time with Mussorgsky and Beethoven. True to that setting, Spellican fights by summoning other Nightmares and by turning the world's own magic against its opponent, making it as much a support boss as a direct fighter.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Dans Dream Drop Distance, Spellican est responsable du désordre qui ronge la Symphonie de la Sorcellerie : il brouille la partition du monde et fait sombrer Yen Sid, alors simple sorcier du rêve, dans une mélodie faussée. Sora l'y poursuit à travers les mouvements musicaux, aidé par ses Esprits, avant de le forcer au combat.\n\nVaincu une première fois, l'oiseau ne meurt pas : il s'échappe et rejoint le Monde qui n'existe pas, où Sora l'affronte de nouveau. Sa fuite sert de fil conducteur entre plusieurs mondes de l'examen de Maîtrise et illustre la façon dont les Cauchemars, contrairement aux Sans-cœur, se contentent de contaminer les rêves plutôt que de dérober des cœurs.",
          "In Dream Drop Distance, Spellican is behind the disorder eating away at Symphony of Sorcery: it scrambles the world's score and drags Yen Sid, here only a dream sorcerer, into a distorted melody. Sora chases it through the musical movements with his Spirits' help before forcing it into battle.\n\nBeaten once, the bird does not die: it escapes to The World That Never Was, where Sora faces it again. Its flight ties several worlds of the Mark of Mastery exam together and illustrates how Nightmares, unlike Heartless, merely contaminate dreams instead of stealing hearts.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
          "Melody of Memory, qui rejoue la saga sous forme de jeu de rythme, redonne à Spellican un rôle de boss. Son combat s'y déroule entièrement sur la partition : ses attaques arrivent en mesure et le joueur doit frapper les notes au bon moment pour l'atteindre, sans jamais rompre la cadence.\n\nLe choix n'est pas anodin : ce Cauchemar né d'un monde musical est l'adversaire idéal d'un jeu où toute l'action se joue au tempo. Sa présence rappelle aussi que le voyage de Melody of Memory est un parcours de souvenirs, et que les créatures des Mondes Endormis en font partie au même titre que les Sans-cœur et les Nescients affrontés plus tôt par Sora, Donald et Dingo.",
          "Melody of Memory, which replays the saga as a rhythm game, gives Spellican a boss role again. The fight happens entirely on the score: its attacks arrive on the beat and the player must hit the notes in time to land a blow, never breaking the rhythm.\n\nThe choice is fitting: a Nightmare born of a musical world is the ideal opponent for a game where every action is played to tempo. Its presence also underlines that Melody of Memory is a journey through memories, and that the creatures of the Sleeping Worlds belong to it just as much as the Heartless and Unversed Sora, Donald and Goofy faced earlier.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Spellican", url: "https://kingdomhearts.fandom.com/wiki/Spellican" }],
  },

  // ─────────────────────────── Ruler of the Sky ───────────────────────────
  "ruler-of-the-sky": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Ruler of the Sky est un Sans-cœur emblème, donc une créature artificielle créée à partir d'un cœur perdu et marquée du blason à cœur épineux de l'espèce. Il prend la forme d'un immense oiseau au plumage sombre et aux ailes démesurées, dont la queue traîne dans le ciel comme un sillage de plumes. Sa taille interdit tout combat au sol classique.\n\nOn l'affronte au Pays Imaginaire, le monde de Peter Pan, au-dessus de la baie et des rochers. Le décor est essentiel : la créature reste hors de portée et impose de la poursuivre en vol, en s'accrochant aux plumes qu'elle laisse tomber ou en profitant des îlots suspendus. C'est l'un des rares boss de la saga conçu pour un affrontement presque entièrement aérien.",
          "The Ruler of the Sky is an Emblem Heartless, an artificial creature made from a lost heart and stamped with the species' thorned-heart crest. It takes the shape of an enormous dark-feathered bird with outsized wings whose tail trails across the sky like a wake of plumage. Its sheer size rules out any conventional ground fight.\n\nIt is faced in Neverland, Peter Pan's world, above the bay and the rocks. The setting matters: the creature stays out of reach and must be chased in flight, by clinging to the feathers it sheds or using the floating islets. It is one of the few bosses in the series designed for an almost entirely aerial battle.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Dans 358/2 Days, l'Organisation XIII envoie ses membres récolter les cœurs libérés par les Sans-cœur pour nourrir son propre Kingdom Hearts. Le Ruler of the Sky est l'une de ces cibles majeures : Roxas est chargé de l'abattre au Pays Imaginaire, mission qui compte parmi les plus spectaculaires du jeu.\n\nLe combat oblige le jeune Simili à traverser plusieurs zones du ciel, à s'accrocher aux plumes géantes de l'oiseau et à frapper ses ailes pour le forcer à descendre. Au-delà de l'exploit, la mission illustre le quotidien de Roxas au sein de l'Organisation : des ordres exécutés sans explication, un cœur promis qu'il ne comprend pas encore, et des journées de travail solitaires que seules les glaces à l'eau de mer partagées avec Axel et Xion viennent adoucir.",
          "In 358/2 Days, Organization XIII sends its members out to harvest the hearts released by Heartless in order to feed its own Kingdom Hearts. The Ruler of the Sky is one of those major targets: Roxas is ordered to bring it down in Neverland, one of the game's most spectacular missions.\n\nThe fight makes the young Nobody cross several stretches of sky, cling to the bird's giant feathers and strike its wings to force it down. Beyond the spectacle, the mission illustrates Roxas's daily life in the Organization: orders carried out without explanation, a promised heart he does not yet understand, and lonely workdays softened only by the sea-salt ice cream shared with Axel and Xion.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Ruler of the Sky", url: "https://kingdomhearts.fandom.com/wiki/Ruler_of_the_Sky" }],
  },

  // ─────────────────────────── Leechgrave ───────────────────────────
  "leechgrave": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Leechgrave est un Sans-cœur emblème d'une taille impressionnante, mélange de plante carnivore et de sépulture. Un tronc noueux couronné d'une gueule végétale s'élève au centre, entouré de longues tentacules terminées par des bouches suceuses et flanqué de petites créatures-bulbes qui le soignent en permanence. Le blason des Sans-cœur emblèmes orne son corps principal.\n\nIl apparaît à la Ville d'Halloween, le monde tiré de L'Étrange Noël de monsieur Jack, dont l'imagerie macabre convient parfaitement à cette chose enracinée dans un cimetière. Son mode de combat découle de son anatomie : tant que les bulbes autour de lui restent debout, le tronc se régénère, et il faut donc nettoyer la périphérie avant d'espérer entamer le cœur du monstre.",
          "The Leechgrave is an unusually large Emblem Heartless, half carnivorous plant and half grave. A gnarled trunk crowned with a plant maw rises at its centre, ringed by long tentacles ending in sucking mouths and flanked by small bulb creatures that constantly heal it. The Emblem Heartless crest marks its main body.\n\nIt appears in Halloween Town, the world drawn from The Nightmare Before Christmas, whose macabre imagery suits this thing rooted in a graveyard perfectly. Its combat style follows from its anatomy: as long as the bulbs around it stand, the trunk regenerates, so the outskirts must be cleared before the monster's core can be hurt.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Le Leechgrave est l'une des grandes missions de 358/2 Days, confiée à Roxas et Xion à la Ville d'Halloween. Les deux Similis y opèrent en binôme, ce qui donne au combat une valeur particulière : c'est en travaillant ensemble sur ce type de contrat que naît leur amitié, sur fond de missions ordonnées par Xemnas et Saïx.\n\nL'affrontement suit la logique du monstre : les tentacules et les bulbes doivent tomber avant le tronc, faute de quoi la créature se relève indéfiniment. La coopération entre Roxas et Xion, chacun s'occupant d'un flanc, est mise en avant. Cette réussite commune rend d'autant plus douloureuse la suite du récit, quand Xion découvre sa véritable nature de réplica et que le trio qu'elle formait avec Roxas et Axel se disloque.",
          "The Leechgrave is one of 358/2 Days' major missions, assigned to Roxas and Xion in Halloween Town. The two Nobodies work as a pair, which gives the fight particular weight: it is on contracts like this one that their friendship grows, against a backdrop of missions ordered by Xemnas and Saïx.\n\nThe battle follows the monster's logic: tentacles and bulbs must fall before the trunk, or the creature keeps rising again. Cooperation between Roxas and Xion, each handling one flank, is put front and centre. That shared success only makes the rest of the story more painful, when Xion learns her true nature as a replica and the trio she formed with Roxas and Axel falls apart.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Leechgrave", url: "https://kingdomhearts.fandom.com/wiki/Leechgrave" }],
  },

  // ─────────────────────────── Sköll ───────────────────────────
  "skoll": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Sköll est un Sans-cœur emblème géant qui prend la forme d'un loup, corps sombre parcouru de veines lumineuses et gueule ouverte sur une lueur froide. Son nom vient de la mythologie nordique, où Sköll est le loup lancé à la poursuite du soleil pour le dévorer, image que le jeu reprend en faisant de lui un prédateur de lumière.\n\nOn l'affronte à Arendelle, le monde de La Reine des Neiges, dans les montagnes enneigées et la nuit polaire qui entourent le palais de glace d'Elsa. Le décor blanc et l'obscurité de la créature créent un contraste très net, et la bête profite de la topographie : elle bondit de crête en crête, disparaît dans la tempête et fond sur sa cible depuis les hauteurs.",
          "Sköll is a giant Emblem Heartless shaped like a wolf, a dark body threaded with glowing veins and a maw open on a cold light. Its name comes from Norse mythology, where Sköll is the wolf chasing the sun to devour it — an image the game reuses by making it a predator of light.\n\nIt is fought in Arendelle, the Frozen world, in the snowy mountains and polar night around Elsa's ice palace. The white setting and the creature's darkness make a sharp contrast, and the beast exploits the terrain: it leaps from ridge to ridge, vanishes into the storm and drops on its target from above.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "À Arendelle, Sora, Donald et Dingo suivent la trace d'Elsa tandis que Larxene manipule la peur de la reine pour nourrir les ténèbres du monde. Sköll est l'aboutissement de cette manœuvre : le loup surgit dans la nuit et attaque le trio au terme de sa traversée de la montagne.\n\nLe combat se déroule sur une aire enneigée où la bête alterne bonds, charges et projections d'orbes d'énergie sombre, obligeant Sora à esquiver puis à contre-attaquer sur ses flancs. Sa défaite libère Arendelle de l'emprise des Sans-cœur et permet à Elsa et Anna de se retrouver, mais l'essentiel se joue ailleurs : ce passage montre comment la véritable Organisation XIII se sert des mondes Disney comme d'un terrain d'expérimentation pour provoquer la souffrance et récolter les ténèbres.",
          "In Arendelle, Sora, Donald and Goofy follow Elsa's trail while Larxene works on the queen's fear to feed the world's darkness. Sköll is the payoff of that scheme: the wolf bursts out of the night and attacks the trio at the end of their climb.\n\nThe fight takes place on a snowfield where the beast alternates leaps, charges and volleys of dark energy orbs, forcing Sora to dodge and counter from the flanks. Its defeat frees Arendelle from the Heartless, letting Elsa and Anna reunite, but the real point lies elsewhere: the episode shows how the real Organization XIII treats Disney worlds as testing grounds, provoking suffering in order to harvest darkness.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sköll", url: "https://kingdomhearts.fandom.com/wiki/Sk%C3%B6ll" }],
  },

  // ─────────────────────────── Liche ───────────────────────────
  "lich": {
    sections: [
      {
        title: NATURE,
        text: L(
          "La Liche est un Sans-cœur emblème d'allure spectrale : une silhouette encapuchonnée qui flotte au-dessus du sol, longues manches vides, corps immatériel traversé de ténèbres. Contrairement aux Sans-cœur de combat classiques, elle n'est pas conçue pour encaisser mais pour fuir : elle se téléporte sans cesse et frappe à distance par des sorts de ténèbres.\n\nSa fonction narrative est unique dans Kingdom Hearts III. Ces créatures n'appartiennent à aucun monde en particulier : après la bataille du Cimetière des Keyblades, elles emportent les cœurs des Gardiens de la Lumière et se dispersent dans les mondes déjà visités par Sora, ce qui contraint le héros à repasser par Olympe, la Boîte à Jouets, le Royaume de Corona et les autres pour les rattraper une à une.",
          "The Lich is a spectral Emblem Heartless: a hooded silhouette hovering above the ground, long empty sleeves, an immaterial body run through with darkness. Unlike ordinary combat Heartless it is not built to take hits but to flee, teleporting constantly and striking from range with darkness spells.\n\nIts narrative role is unique in Kingdom Hearts III. These creatures belong to no particular world: after the battle at the Keyblade Graveyard they carry off the hearts of the Guardians of Light and scatter across the worlds Sora has already visited, forcing the hero to return to Olympus, the Toy Box, the Kingdom of Corona and the rest to catch them one by one.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Cimetière des Keyblades, la Marée Démoniaque engloutit les Gardiens de la Lumière et Sora se réveille seul, ses amis dispersés. C'est alors qu'il découvre les Liches, qui détiennent leurs cœurs. Pour les récupérer, il fait appel au pouvoir de l'éveil et voyage de monde en monde, affrontant une Liche à chaque étape avant de rendre à chacun son cœur.\n\nCette séquence est décisive pour la fin du jeu : elle permet à Sora de rassembler de nouveau l'équipe pour l'affrontement contre le Maître Xehanort. Elle a pourtant un prix. Utiliser le pouvoir de l'éveil pour ramener des cœurs perdus consume peu à peu l'existence même de Sora, et cet usage répété explique sa disparition dans l'épilogue, une fois Xehanort vaincu et Kairi ramenée.",
          "At the Keyblade Graveyard, the Demon Tide swallows the Guardians of Light and Sora wakes alone, his friends scattered. That is when he discovers the Liches, which hold their hearts. To get them back he calls on the power of waking and travels from world to world, fighting a Lich at each stop before returning each heart to its owner.\n\nThe sequence is decisive for the ending: it lets Sora gather the team again for the confrontation with Master Xehanort. It comes at a price, though. Using the power of waking to retrieve lost hearts slowly consumes Sora's own existence, and this repeated use explains his disappearance in the epilogue, once Xehanort is beaten and Kairi restored.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lich", url: "https://kingdomhearts.fandom.com/wiki/Lich" }],
  },

  // ─────────────────────────── Dark Inferno ───────────────────────────
  "dark-inferno": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Dark Inferno est un Sans-cœur pur-sang, c'est-à-dire une créature née directement des ténèbres d'un cœur et non fabriquée en laboratoire : il ne porte donc pas le blason des Sans-cœur emblèmes. Sa silhouette humanoïde, élancée et vêtue de noir, aux yeux jaunes et à la longue épée sombre, l'apparente aux duellistes plutôt qu'aux bêtes de la même famille.\n\nOn le rencontre dans Kingdom Hearts III derrière l'un des portails de combat du Cimetière des Keyblades, ces défis optionnels qui enferment Sora dans une arène le temps d'un affrontement. Rapide, capable de s'entourer de flammes noires et d'enchaîner les coups sans temps mort, il est conçu comme un test de réflexes plus que comme un obstacle scénaristique.",
          "The Dark Inferno is a Pureblood Heartless, born directly from the darkness of a heart rather than manufactured in a laboratory, and so it bears no Emblem crest. Its lean humanoid silhouette dressed in black, with yellow eyes and a long dark sword, places it among duellists rather than the beasts of the same family.\n\nIt is met in Kingdom Hearts III behind one of the Keyblade Graveyard's battlegates, the optional challenges that lock Sora into an arena for a single fight. Fast, able to wreathe itself in black flame and to chain attacks without pause, it is designed as a test of reflexes rather than a story obstacle.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Le Dark Inferno n'intervient dans aucune scène de l'intrigue : il incarne le contenu de haut niveau de Kingdom Hearts III, réservé aux joueurs qui reviennent au Cimetière des Keyblades une fois l'histoire achevée. Le combat impose de renoncer à la force brute pour privilégier l'esquive, la parade et les fenêtres de riposte, dans un duel d'épée à rythme soutenu.\n\nL'extension Re Mind pousse l'idée plus loin avec le Dark Inferno χ, version renforcée dotée d'attaques supplémentaires et d'une résistance nettement accrue, aux côtés des autres défis ajoutés par le contenu additionnel. Ensemble, ces adversaires ont contribué à répondre aux joueurs qui reprochaient au jeu de base sa difficulté trop clémente par rapport aux boss secrets des épisodes précédents.",
          "The Dark Inferno appears in no story scene: it embodies Kingdom Hearts III's high-level content, meant for players who return to the Keyblade Graveyard once the story is done. The fight demands that brute force give way to dodging, blocking and counter windows, in a fast-paced sword duel.\n\nThe Re Mind expansion pushes the idea further with the Dark Inferno χ, a strengthened version with extra attacks and far more endurance, alongside the other challenges the add-on introduced. Together these opponents answered players who found the base game too forgiving compared with the secret bosses of earlier entries.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dark Inferno", url: "https://kingdomhearts.fandom.com/wiki/Dark_Inferno" }],
  },

  // ─────────────────────────── Anti-Aqua ───────────────────────────
  "anti-aqua": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Anti-Aqua n'appartient à aucune des familles habituelles : ce n'est ni un Sans-cœur, ni un Simili, ni un Nescient, ni un Avale-Rêves, mais Aqua elle-même, transformée par les ténèbres. Sa peau a pâli, ses cheveux ont bruni, ses yeux ont viré au jaune et sa Keyblade s'est assombrie ; seul son uniforme de porteuse rappelle la Maîtresse qu'elle a été.\n\nOn l'affronte dans le Domaine des Ténèbres, où Aqua est prisonnière depuis qu'elle s'y est jetée pour sauver Terra à la fin de Birth by Sleep. Dix ans d'errance dans ce monde sans lumière ont fini par l'entamer. Le combat se déroule sur une plage sombre, écho retourné des Îles du Destin, décor qui souligne à quel point tout y est inversé.",
          "Anti-Aqua belongs to none of the usual families: not a Heartless, not a Nobody, not an Unversed, not a Dream Eater, but Aqua herself, transformed by darkness. Her skin has paled, her hair browned, her eyes turned yellow and her Keyblade darkened; only her wielder's outfit recalls the Master she once was.\n\nShe is fought in the Realm of Darkness, where Aqua has been trapped ever since she threw herself in to save Terra at the end of Birth by Sleep. Ten years of wandering in that lightless world finally wore her down. The battle unfolds on a dark shore, an inverted echo of Destiny Islands, a setting that underlines how everything there is reversed.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans Kingdom Hearts III, Riku et Mickey descendent dans le Domaine des Ténèbres pour retrouver Aqua, avec la Keyblade que Sora a laissée à Riku. Ils la découvrent transformée : elle les attaque sans les reconnaître, se téléporte, déchaîne des vagues de ténèbres et prend le dessus, jusqu'à ce que la Keyblade de Riku soit brisée.\n\nSora, envoyé à leur secours après avoir reçu une nouvelle arme de Yen Sid, arrive à temps pour la vaincre sans la détruire : la libérer de son emprise suffit à lui rendre son apparence et sa mémoire. Aqua peut alors quitter les ténèbres, retrouver Ventus endormi à la Contrée du Départ et rejoindre les Gardiens de la Lumière au Cimetière des Keyblades. C'est l'aboutissement d'une attente commencée deux jeux plus tôt.",
          "In Kingdom Hearts III, Riku and Mickey descend into the Realm of Darkness to find Aqua, carrying the Keyblade Sora left with Riku. They discover her transformed: she attacks without recognising them, teleporting, unleashing waves of darkness and gaining the upper hand until Riku's Keyblade is shattered.\n\nSora, sent to their rescue after receiving a new weapon from Yen Sid, arrives in time to beat her without destroying her: freeing her from the darkness is enough to restore her appearance and her memory. Aqua can then leave the darkness, wake Ventus at the Land of Departure and join the Guardians of Light at the Keyblade Graveyard. It is the payoff of a wait begun two games earlier.",
        ),
      },
    ],
    trivia: [
      L("La scène d'Anti-Aqua avait été esquissée dès l'épilogue de 0.2 Birth by Sleep – A Fragmentary Passage, qui montre Aqua au bord de la reddition.", "The Anti-Aqua scene was foreshadowed in the epilogue of 0.2 Birth by Sleep – A Fragmentary Passage, which shows Aqua on the verge of giving in."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Anti-Aqua", url: "https://kingdomhearts.fandom.com/wiki/Anti-Aqua" }],
  },

  // ─────────────────────────── Mimic Master ───────────────────────────
  "mimic-master": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Mimic Master est un Nescient, l'une des créatures issues des émotions négatives de Vanitas qui pullulent dans Birth by Sleep. Il prend la forme d'un grand grimoire vivant, couverture ornée et pages qui tournent seules, flanqué de bras spectraux ; le blason rouge et noir des Nescients marque sa reliure.\n\nSa spécialité est l'illusion. Plutôt que de frapper directement, il feuillette son propre volume pour en faire sortir des copies du héros et de ses attaques, jusqu'à saturer l'arène de doubles. C'est un boss de Birth by Sleep qui n'est rattaché à aucun monde Disney : il relève des affrontements de haut niveau du jeu, où l'on mesure la maîtrise du système de commandes plutôt que l'avancée du récit.",
          "The Mimic Master is an Unversed, one of the creatures spawned from Vanitas's negative emotions that swarm through Birth by Sleep. It takes the form of a large living grimoire, an ornate cover and pages that turn on their own, flanked by spectral arms; the red and black Unversed crest marks its binding.\n\nIllusion is its speciality. Rather than striking directly, it leafs through its own volume to pull out copies of the hero and of their attacks until the arena is crowded with doubles. It is a Birth by Sleep boss tied to no Disney world: it belongs to the game's high-level encounters, which measure command-deck mastery rather than story progress.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Le combat contre le Mimic Master est l'un des plus déroutants de Birth by Sleep, parce qu'il inverse la logique habituelle : le joueur affronte son propre personnage. Les doubles reproduisent les mouvements de Terra, Ventus ou Aqua, y compris leurs sorts, et il faut distinguer l'original des illusions pour ne pas gaspiller ses commandes.\n\nLa fenêtre d'attaque s'ouvre quand le grimoire s'immobilise pour tourner ses pages : c'est le seul moment où il est vulnérable. Narrativement, ce Nescient illustre bien ce que sont ces créatures : nées de la souffrance de Vanitas, elles renvoient aux héros une version déformée d'eux-mêmes, comme le fera Vanitas lui-même face à Ventus, dont il est la moitié sombre arrachée par le Maître Xehanort.",
          "The Mimic Master fight is one of the most disorienting in Birth by Sleep, because it reverses the usual logic: the player faces their own character. The doubles reproduce Terra's, Ventus's or Aqua's moves, spells included, and the original must be told from the illusions to avoid wasting commands.\n\nThe attack window opens when the grimoire stops to turn its pages, the only moment it is vulnerable. Narratively, this Unversed sums up what those creatures are: born of Vanitas's suffering, they throw a distorted version of the heroes back at them, just as Vanitas himself will do against Ventus, whose dark half he is after Master Xehanort tore them apart.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mimic Master", url: "https://kingdomhearts.fandom.com/wiki/Mimic_Master" }],
  },

  // ─────────────────────────── Cursed Coach ───────────────────────────
  "cursed-coach": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Cursed Coach est un Nescient, créature née des émotions négatives de Vanitas, qui a pris l'apparence d'un carrosse. La citrouille dorée du conte de Cendrillon y est devenue une machine grimaçante, roues cerclées de métal, lanternes en guise d'yeux et attelage de fantômes, avec le blason rouge et noir de l'espèce sur le flanc.\n\nOn l'affronte au Château des Rêves, le monde tiré de Cendrillon, sur la route qui mène au bal. Sa forme de véhicule dicte le combat : il fonce en ligne droite, écrase ce qui se trouve sur sa trajectoire et fait tournoyer ses roues comme des lames, si bien qu'il faut esquiver ses charges avant de pouvoir attaquer ses flancs et son attelage.",
          "The Cursed Coach is an Unversed, a creature born from Vanitas's negative emotions, in the shape of a carriage. The golden pumpkin of Cinderella's tale has become a leering machine, iron-rimmed wheels, lanterns for eyes and a ghostly team in harness, with the species' red and black crest on its side.\n\nIt is fought in Castle of Dreams, the Cinderella world, on the road to the ball. Its vehicle form dictates the battle: it charges in straight lines, crushes whatever stands in its path and spins its wheels like blades, so its charges must be dodged before its flanks and harness can be attacked.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Au Château des Rêves, la marraine la bonne fée transforme une citrouille en carrosse pour permettre à Cendrillon de se rendre au bal. La jalousie de la belle-mère, Lady Trémaine, donne naissance à un Nescient qui s'empare du véhicule et le corrompt : le Cursed Coach lance sa course pour empêcher la jeune fille d'atteindre le palais.\n\nTerra puis Aqua le prennent en chasse et l'arrêtent, chacun selon son propre passage dans le monde. Cet épisode illustre le principe qui structure Birth by Sleep : les Nescients ne créent pas le mal, ils se nourrissent des sentiments sombres déjà présents dans chaque monde Disney et les amplifient. Vaincu, le carrosse retrouve sa forme enchantée, et le conte peut suivre son cours jusqu'à minuit.",
          "At Castle of Dreams, the Fairy Godmother turns a pumpkin into a coach so Cinderella can reach the ball. The envy of her stepmother, Lady Tremaine, gives rise to an Unversed that seizes the vehicle and corrupts it: the Cursed Coach sets off to keep the young woman from the palace.\n\nTerra and later Aqua give chase and stop it, each during their own visit to the world. The episode illustrates the principle that structures Birth by Sleep: Unversed do not create evil, they feed on the dark feelings already present in each Disney world and amplify them. Once beaten, the coach returns to its enchanted form, and the tale can run its course until midnight.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Cursed Coach", url: "https://kingdomhearts.fandom.com/wiki/Cursed_Coach" }],
  },

  // ─────────────────────────── Symphony Master ───────────────────────────
  "symphony-master": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Symphony Master est un Nescient de grande taille en forme de chef d'orchestre : un corps flottant vêtu comme un maestro, deux mains détachées brandissant des baguettes, et le blason rouge et noir des créatures de Vanitas au centre. Sa gestuelle emprunte au vocabulaire de la direction musicale, chaque mouvement de bras déclenchant une attaque.\n\nOn le rencontre au Château des Rêves, le monde de Cendrillon, autour de la salle de bal du palais. Le décor et le monstre se répondent : il transforme le bal en champ de bataille, invoque des notes et des ondes sonores et impose son propre tempo aux combattants. Comme tous les Nescients, il naît de la souffrance et se dissout en fumée noire lorsqu'on l'emporte.",
          "The Symphony Master is a large Unversed shaped like a conductor: a floating body dressed as a maestro, two detached hands wielding batons, and the red and black crest of Vanitas's creatures at its centre. Its gestures borrow the vocabulary of conducting, each sweep of an arm triggering an attack.\n\nIt is met in Castle of Dreams, Cinderella's world, around the palace ballroom. Setting and monster answer one another: it turns the ball into a battlefield, summons notes and sound waves and imposes its own tempo on the fight. Like every Unversed it is born of suffering and dissolves into black smoke when defeated.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans le scénario de Ventus, le jeune porteur arrive au Château des Rêves au moment où Cendrillon accède enfin au bal. La joie de la scène attire un Nescient qui prend la forme du Symphony Master et menace de gâcher la soirée : Ventus l'affronte pour protéger la jeune femme et permettre au conte de se poursuivre.\n\nLe combat mêle esquives et contre-attaques entre les mains volantes du maestro, qu'il faut réduire au silence avant de s'en prendre au corps principal. Au-delà du spectacle, le passage tient une place particulière dans le parcours de Ventus : c'est en voyant Cendrillon défendre son rêve malgré tout qu'il retrouve la conviction dont il a besoin, avant de reprendre sa route à la recherche de Terra et d'Aqua.",
          "In Ventus's scenario, the young wielder reaches Castle of Dreams just as Cinderella finally makes it to the ball. The joy of the scene draws an Unversed that takes the Symphony Master's form and threatens to ruin the evening: Ventus fights it to protect her and let the tale continue.\n\nThe battle mixes dodges and counters between the maestro's flying hands, which must be silenced before the main body can be hurt. Beyond the spectacle, the scene holds a particular place in Ventus's journey: watching Cinderella defend her dream against everything gives him back the conviction he needs before setting off again in search of Terra and Aqua.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Symphony Master", url: "https://kingdomhearts.fandom.com/wiki/Symphony_Master" }],
  },

  // ─────────────────────────── Wheel Master ───────────────────────────
  "wheel-master": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Wheel Master est un Nescient monumental en forme de rouet. La roue à filer, objet central de La Belle au bois dormant, y devient une machine mouvante entourée de fils, dotée de bras filiformes et marquée du blason rouge et noir des créatures nées des émotions de Vanitas.\n\nOn l'affronte au Domaine Enchanté, le monde tiré de La Belle au bois dormant, dans le château où la princesse Aurore doit se piquer le doigt. Son style de combat découle directement de son apparence : il tourne sur lui-même, lance des fils qui immobilisent l'adversaire et fait pleuvoir des aiguilles. Il faut donc rester mobile et frapper la roue lorsque sa rotation ralentit pour espérer l'entamer.",
          "The Wheel Master is a monumental Unversed shaped like a spinning wheel. The spindle at the heart of Sleeping Beauty becomes a moving machine wrapped in thread, with spindly arms and the red and black crest of the creatures born from Vanitas's emotions.\n\nIt is fought in Enchanted Dominion, the Sleeping Beauty world, inside the castle where Princess Aurora is fated to prick her finger. Its combat style follows straight from its look: it spins in place, throws threads that pin down its opponent and rains needles. Staying mobile and striking the wheel when its rotation slows is the only way to wear it down.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Au Domaine Enchanté, Maléfique met à exécution la malédiction lancée à la naissance d'Aurore et attire la princesse vers un rouet enchanté. Le sortilège et la détresse qu'il provoque font surgir le Wheel Master, que les porteurs de Keyblade doivent affronter dans le château.\n\nLe passage compte parmi les plus importants du scénario de Terra, car c'est au Domaine Enchanté que Maléfique le manipule en lui suggérant d'arracher le cœur endormi d'Aurore, une des sept Princesses de Cœur. Terra cède, croyant agir pour le bien, et fait un pas de plus vers les ténèbres que le Maître Xehanort cultive en lui. La chute du Wheel Master ne répare rien : la vraie défaite de Terra dans ce monde est intérieure.",
          "In Enchanted Dominion, Maleficent carries out the curse laid at Aurora's birth and lures the princess to an enchanted spinning wheel. The spell and the distress it causes bring forth the Wheel Master, which the Keyblade wielders must fight inside the castle.\n\nThe episode is among the most important in Terra's scenario, because it is in Enchanted Dominion that Maleficent manipulates him into tearing out Aurora's sleeping heart, one of the seven Princesses of Heart. Terra gives in, believing he is doing good, and takes another step toward the darkness Master Xehanort is cultivating in him. Felling the Wheel Master mends nothing: Terra's real defeat in this world is an inner one.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wheel Master", url: "https://kingdomhearts.fandom.com/wiki/Wheel_Master" }],
  },

  // ─────────────────────────── Mad Treant ───────────────────────────
  "mad-treant": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Mad Treant est un Nescient en forme d'arbre animé : un tronc tordu au visage grimaçant, des branches maigres qui servent de bras et un feuillage sombre qui bruisse à chaque mouvement. Le blason rouge et noir des créatures de Vanitas apparaît sur son écorce, rappel qu'il est né des émotions négatives du jeune homme au masque et non de la forêt elle-même.\n\nOn l'affronte à la Forêt des Nains, monde tiré de Blanche-Neige et les Sept Nains, dans les bois où l'héroïne s'enfuit après avoir échappé au chasseur. Le lieu est essentiel : le film transforme déjà cette forêt en cauchemar, les arbres semblant tendre les bras vers Blanche-Neige, et le Nescient donne corps à cette peur enfantine.",
          "The Mad Treant is an Unversed shaped like an animate tree: a twisted trunk with a leering face, thin branches for arms and dark foliage that rustles with every move. The red and black crest of Vanitas's creatures shows on its bark, a reminder that it was born of the masked youth's negative emotions and not of the forest itself.\n\nIt is fought in Dwarf Woodlands, the world drawn from Snow White and the Seven Dwarfs, in the woods where the heroine flees after escaping the huntsman. The place matters: the film already turns that forest into a nightmare, its trees seeming to reach for Snow White, and the Unversed gives that childhood fear a body.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans Birth by Sleep, la Forêt des Nains est l'un des premiers mondes visités par les trois apprentis. Blanche-Neige, chassée du château par la Reine, s'y perd de nuit ; sa terreur nourrit les Nescients qui rôdent entre les troncs et fait surgir le Mad Treant.\n\nLe combat se déroule dans une clairière obscure : l'arbre laisse tomber des pommes explosives, balaie le sol de ses branches et invoque des Nescients plus petits pour occuper le terrain. Le vaincre permet à Blanche-Neige de gagner la maison des Sept Nains et au conte de reprendre son cours. Ce boss précoce sert aussi de démonstration : il montre au joueur comment les Nescients s'agrègent à un récit Disney existant en donnant une forme monstrueuse aux émotions de ses personnages.",
          "In Birth by Sleep, Dwarf Woodlands is one of the first worlds the three apprentices visit. Snow White, driven from the castle by the Queen, gets lost there at night; her terror feeds the Unversed prowling between the trunks and calls up the Mad Treant.\n\nThe fight takes place in a dark clearing: the tree drops explosive apples, sweeps the ground with its branches and summons smaller Unversed to crowd the field. Beating it lets Snow White reach the Seven Dwarfs' cottage and the tale resume. This early boss also works as a demonstration: it shows the player how Unversed graft themselves onto an existing Disney story by giving its characters' feelings a monstrous shape.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mad Treant", url: "https://kingdomhearts.fandom.com/wiki/Mad_Treant" }],
  },

  // ─────────────────────────── Metamorphosis ───────────────────────────
  "metamorphosis": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Metamorphosis est un Nescient qui se présente d'abord comme un cocon suspendu, coque sombre striée de motifs clairs et frappée du blason rouge et noir de l'espèce. Son nom annonce son fonctionnement : au fil du combat, il se déchire et laisse apparaître une créature ailée plus grande, plus rapide et plus agressive, transformation qui rappelle celle d'un insecte.\n\nOn l'affronte dans l'Espace Lointain, le monde tiré de Lilo & Stitch, à bord du vaisseau de la Fédération galactique où l'expérience 626 est retenue prisonnière. Les couloirs métalliques et l'apesanteur du lieu accentuent l'étrangeté du monstre, qui libère des Floods, les plus petits Nescients, et projette des décharges d'énergie à chaque mue.",
          "The Metamorphosis is an Unversed that first appears as a hanging cocoon, a dark shell streaked with pale patterns and stamped with the species' red and black crest. Its name announces how it works: as the fight goes on it splits open to reveal a larger, faster, more aggressive winged creature, a transformation borrowed from insects.\n\nIt is fought in Deep Space, the world drawn from Lilo & Stitch, aboard the Galactic Federation ship where Experiment 626 is being held. The metal corridors and low gravity heighten the creature's strangeness as it releases Floods, the smallest Unversed, and fires energy blasts with each moult.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "L'Espace Lointain est le monde où Ventus et Aqua croisent Stitch, expérience génétique en fuite jugée trop dangereuse pour vivre. Les Nescients profitent du chaos à bord et le Metamorphosis surgit dans les coursives du vaisseau.\n\nSon combat est construit autour de ses mues : chaque phase change ses attaques et sa vitesse, obligeant à revoir sa stratégie plusieurs fois de suite. Le passage a surtout une portée thématique, puisqu'il accompagne la trajectoire de Stitch, créature fabriquée pour détruire qui choisit finalement l'amitié — un miroir de Ventus, façonné par le Maître Xehanort mais qui refuse le destin qu'on lui assigne. La visite du monde s'achève par le sauvetage de la petite créature bleue, plus tard adoptée par Lilo dans le film.",
          "Deep Space is the world where Ventus and Aqua meet Stitch, a genetic experiment on the run judged too dangerous to live. The Unversed take advantage of the chaos aboard and the Metamorphosis appears in the ship's passageways.\n\nThe fight is built around its moults: each phase changes its attacks and speed, forcing repeated changes of strategy. The episode carries thematic weight above all, since it accompanies Stitch's arc, a creature built to destroy who finally chooses friendship — a mirror of Ventus, shaped by Master Xehanort yet refusing the fate assigned to him. The visit ends with the rescue of the little blue creature, later adopted by Lilo in the film.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Metamorphosis", url: "https://kingdomhearts.fandom.com/wiki/Metamorphosis" }],
  },

  // ─────────────────────────── Vanitas Remnant ───────────────────────────
  "vanitas-remnant": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Vanitas Remnant n'est pas un monstre ordinaire : c'est la pensée résiduelle de Vanitas, le porteur masqué né de la moitié sombre du cœur de Ventus, qui subsiste après sa disparition. Son apparence reprend celle de Vanitas — combinaison rouge et noire, casque intégral opaque — mais son corps semble fait d'une matière instable, comme une image qui refuserait de s'effacer.\n\nSa nature le rattache à la famille des Nescients, dont Vanitas était la source : c'est de sa souffrance que naissaient toutes ces créatures. Il apparaît au Cimetière des Keyblades, l'immense plaine jonchée d'armes rouillées où s'est jouée la bataille finale de Birth by Sleep, et n'existe que comme adversaire optionnel, sans intervenir dans le récit.",
          "The Vanitas Remnant is no ordinary monster: it is the lingering will of Vanitas, the masked wielder born from the dark half of Ventus's heart, left behind after his disappearance. It looks like Vanitas — red and black bodysuit, opaque full helmet — but its body seems made of unstable matter, an image refusing to fade.\n\nIts nature ties it to the Unversed, of whom Vanitas was the source: every one of those creatures was born of his suffering. It appears at the Keyblade Graveyard, the vast plain strewn with rusted weapons where Birth by Sleep's final battle was fought, and exists only as an optional opponent, taking no part in the story.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Le Vanitas Remnant est le boss secret de Birth by Sleep, réservé aux joueurs qui reviennent au Cimetière des Keyblades une fois les conditions remplies. Aqua l'affronte dans son scénario, seule, sur le lieu même où Terra et Ventus ont été perdus.\n\nLe combat est réputé pour son intensité : la créature se téléporte, enchaîne des attaques quasi instantanées, ouvre des portails de ténèbres et frappe avec la même Keyblade que Vanitas. Vaincre cette ombre ne change rien à l'histoire, mais la scène a une valeur symbolique forte : Aqua, seule survivante en liberté du trio, doit affronter le fantôme de celui qui a détruit ses amis, juste avant de se condamner elle-même au Domaine des Ténèbres pour sauver Terra.",
          "The Vanitas Remnant is Birth by Sleep's secret boss, reserved for players who return to the Keyblade Graveyard once the conditions are met. Aqua faces it in her scenario, alone, on the very ground where Terra and Ventus were lost.\n\nThe fight is famous for its intensity: the creature teleports, chains near-instant attacks, opens portals of darkness and strikes with the same Keyblade as Vanitas. Defeating this shadow changes nothing in the story, but the scene carries strong symbolic weight: Aqua, the trio's only member still free, must face the ghost of the one who destroyed her friends, just before condemning herself to the Realm of Darkness to save Terra.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Vanitas Remnant", url: "https://kingdomhearts.fandom.com/wiki/Vanitas_Remnant" }],
  },

  // ─────────────────────────── Hockomonkey ───────────────────────────
  "hockomonkey": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Hockomonkey est un Avale-Rêves de type Cauchemar, la variante hostile de ces créatures qui peuplent les Mondes Endormis. Il ressemble à un singe démesuré au pelage bariolé, aux motifs colorés typiques de l'espèce, dont les bras peuvent se détacher du corps et attaquer séparément.\n\nOn l'affronte à la Ville de Traverse, refuge nocturne aux ruelles étroites et aux toits pentus que Dream Drop Distance transforme en monde de rêve. Le décor sert directement le combat : le singe escalade les murs, se téléporte d'un quartier à l'autre et se réfugie hors de portée, ce qui pousse à employer le Flowmotion, le système de déplacement acrobatique introduit par ce jeu, pour le rattraper.",
          "The Hockomonkey is a Nightmare-type Dream Eater, the hostile branch of the creatures filling the Sleeping Worlds. It looks like an oversized ape with gaudy fur bearing the species' typical colourful patterns, and its arms can detach from its body to attack on their own.\n\nIt is fought in Traverse Town, the night-time refuge of narrow alleys and steep roofs that Dream Drop Distance reworks as a dream world. The setting serves the battle directly: the ape climbs walls, teleports between districts and retreats out of reach, which pushes the player to use Flowmotion, the acrobatic movement system this game introduced, to catch up with it.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Le Hockomonkey est le premier boss de Dream Drop Distance, et le jeu s'en sert pour poser ses règles. Sora et Riku, envoyés par Yen Sid passer leur examen de Maîtrise dans les Mondes Endormis, y arrivent séparément sans le savoir : chacun affronte le même monstre à la Ville de Traverse, dans sa propre version du monde, sans jamais croiser l'autre.\n\nCette double rencontre installe le principe du jeu, où l'on alterne entre les deux héros au gré de la jauge de plongée. Le combat se déroule dans le Quartier Trois et sur les toits, entre bras volants et charges du singe, et sert d'introduction aux Esprits, ces Avale-Rêves bienveillants que Sora et Riku recrutent pour les épauler faute de Donald et Dingo.",
          "The Hockomonkey is Dream Drop Distance's first boss, and the game uses it to lay out its rules. Sora and Riku, sent by Yen Sid to take their Mark of Mastery exam in the Sleeping Worlds, arrive separately without knowing it: each fights the same monster in Traverse Town, in his own version of the world, never meeting the other.\n\nThat double encounter establishes the game's central conceit, alternating between the two heroes as the Drop gauge empties. The fight plays out in the Third District and on the rooftops, between flying arms and the ape's charges, and introduces the Spirits, the friendly Dream Eaters Sora and Riku recruit to help them in the absence of Donald and Goofy.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hockomonkey", url: "https://kingdomhearts.fandom.com/wiki/Hockomonkey" }],
  },

  // ─────────────────────────── Wargoyle ───────────────────────────
  "wargoyle": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Wargoyle est un Cauchemar, donc un Avale-Rêves malfaisant des Mondes Endormis. Il prend l'apparence d'une gargouille de pierre aux larges ailes membraneuses, mâchoire proéminente et corps couvert de motifs vifs qui trahissent son appartenance à l'espèce. Sa silhouette évoque directement les statues de pierre qui ornent les cathédrales gothiques.\n\nOn l'affronte à La Cité des Cloches, le monde tiré du Bossu de Notre-Dame, sur le parvis puis sur les toits de la cathédrale. L'architecture du lieu structure le combat : la créature s'accroche aux façades, prend de l'altitude, souffle des flammes et fond en piqué sur ses adversaires, imposant de rester constamment en mouvement d'un niveau à l'autre du bâtiment.",
          "The Wargoyle is a Nightmare, a malevolent Dream Eater of the Sleeping Worlds. It looks like a stone gargoyle with wide membranous wings, a jutting jaw and a body covered in the vivid patterns that mark the species. Its silhouette points straight at the stone statues of Gothic cathedrals.\n\nIt is fought in La Cité des Cloches, the world drawn from The Hunchback of Notre Dame, first on the square and then on the cathedral roofs. The architecture shapes the battle: the creature clings to the façades, gains height, breathes flame and dives at its opponents, demanding constant movement between the building's levels.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "À La Cité des Cloches, le juge Frollo poursuit Esmeralda et les gitans en incendiant la ville. Sa haine attire les Cauchemars, et le Wargoyle est celui qu'il déchaîne sur les habitants avant d'en perdre lui-même le contrôle.\n\nSora l'affronte sur la place puis au sommet de la cathédrale, tandis que Riku le combat de son côté dans un affrontement aérien. Ce double combat rappelle que les deux héros parcourent le même monde à des moments différents de leur rêve. La créature entre aussi dans une logique plus large : les Cauchemars servent les plans de Xehanort, qui cherche à plonger Sora dans un sommeil profond pour en faire l'un des réceptacles de son cœur, ce que révélera la fin du jeu au Monde qui n'existe pas.",
          "In La Cité des Cloches, Judge Frollo hunts Esmeralda and the gypsies and sets the city ablaze. His hatred draws Nightmares, and the Wargoyle is the one he unleashes on the citizens before losing control of it himself.\n\nSora fights it on the square and then atop the cathedral, while Riku faces it on his own side in an aerial battle. This double encounter is a reminder that the two heroes travel the same world at different points of their dream. The creature also fits a wider design: the Nightmares serve Xehanort's plans, which aim to sink Sora into a deep sleep and make him one of the vessels for his heart, as the ending in The World That Never Was reveals.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wargoyle", url: "https://kingdomhearts.fandom.com/wiki/Wargoyle" }],
  },

  // ─────────────────────────── Char Clawbster ───────────────────────────
  "char-clawbster": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Char Clawbster est un Cauchemar, la variante hostile des Avale-Rêves qui hantent les Mondes Endormis de Dream Drop Distance. Il a la forme d'un homard géant à la carapace rouge et orangée, pinces massives et antennes recourbées, dont le corps dégage une chaleur permanente : ses attaques reposent presque toutes sur le feu.\n\nOn l'affronte au Paradis des Farceurs, le monde tiré de Pinocchio, et plus précisément à l'intérieur de Monstro, la baleine qui a avalé le pantin et Geppetto. Le décor humide et organique du ventre du cétacé contraste avec les flammes du monstre, qui projette des boules de feu, chauffe le sol et charge à travers l'espace confiné en obligeant à esquiver plutôt qu'à bloquer.",
          "The Char Clawbster is a Nightmare, the hostile branch of the Dream Eaters haunting Dream Drop Distance's Sleeping Worlds. It has the shape of a giant lobster with a red and orange shell, massive claws and curved antennae, its body radiating constant heat: nearly all of its attacks are fire-based.\n\nIt is fought in Prankster's Paradise, the Pinocchio world, and specifically inside Monstro, the whale that swallowed the puppet and Geppetto. The damp, organic setting of the whale's belly contrasts with the monster's flames as it throws fireballs, heats the ground and charges through the cramped space, demanding dodges rather than blocks.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Dans le parcours de Sora, le Paradis des Farceurs se termine à l'intérieur de Monstro, où Pinocchio et Geppetto sont prisonniers. Le Char Clawbster y surgit et bloque la sortie : Sora doit l'abattre pour permettre au pantin et à son père de s'échapper.\n\nCe combat forme un diptyque avec celui du Chill Clawbster, que Riku affronte de son côté dans le même monde : deux versions d'une même créature, l'une de feu, l'autre de glace, symétrie caractéristique de la structure en miroir de Dream Drop Distance. Le passage est aussi celui où Sora, poussé par sa confiance sans limite, se laisse aller à défendre Pinocchio contre toute logique, trait de caractère que le Jeune Xehanort exploitera plus tard pour le piéger.",
          "On Sora's route, Prankster's Paradise ends inside Monstro, where Pinocchio and Geppetto are trapped. The Char Clawbster appears and blocks the way out: Sora has to bring it down so the puppet and his father can escape.\n\nThe battle forms a diptych with the Chill Clawbster that Riku faces on his own side in the same world: two versions of one creature, one of fire and one of ice, a symmetry typical of Dream Drop Distance's mirrored structure. The episode is also where Sora, driven by boundless trust, defends Pinocchio against all reason — a trait Young Xehanort will later exploit to trap him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Char Clawbster", url: "https://kingdomhearts.fandom.com/wiki/Char_Clawbster" }],
  },

  // ─────────────────────────── Chill Clawbster ───────────────────────────
  "chill-clawbster": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Chill Clawbster est le pendant glacé du Char Clawbster, un Cauchemar de la famille des Avale-Rêves. Sa carapace bleutée, ses pinces couvertes de givre et son souffle froid en font l'exact opposé de son jumeau de feu, jusque dans la façon dont il gèle la surface de l'eau pour se déplacer.\n\nOn l'affronte au Paradis des Farceurs, le monde de Pinocchio, mais du côté de la mer plutôt que dans le ventre de Monstro. Le combat se joue donc sur une surface glissante et changeante, entre plaques de glace et vagues, avec un monstre qui plonge, resurgit et projette des éclats gelés. C'est un affrontement mobile, où le terrain lui-même est modifié en permanence par les attaques de la créature.",
          "The Chill Clawbster is the icy counterpart of the Char Clawbster, a Nightmare of the Dream Eater family. Its blue-tinged shell, frost-covered claws and cold breath make it the exact opposite of its fiery twin, down to the way it freezes the surface of the water to move around.\n\nIt is fought in Prankster's Paradise, the Pinocchio world, but out at sea rather than inside Monstro. The battle therefore plays out on a slippery, shifting surface between ice floes and waves, against a monster that dives, resurfaces and hurls frozen shards. It is a mobile fight in which the ground itself is constantly reshaped by the creature's attacks.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Riku traverse le Paradis des Farceurs en parallèle de Sora, mais son rêve à lui insiste sur le doute : il craint que les ténèbres qu'il porte ne finissent par contaminer son ami. Le Chill Clawbster l'attaque en pleine mer, autour et sur le dos de Monstro.\n\nLe combat oppose la mobilité de Riku, épaulé par ses Esprits, à un adversaire qui gèle l'eau et se dérobe sous la glace. La victoire dégage la route de Riku dans le monde, mais l'intérêt du passage tient surtout à la symétrie qu'il établit avec Sora : deux héros, deux versions d'un même monstre, deux façons d'aborder la même épreuve, ce qui prépare la conclusion du jeu où seul Riku sera jugé apte à devenir Maître de la Keyblade.",
          "Riku crosses Prankster's Paradise alongside Sora, but his dream dwells on doubt: he fears the darkness he carries will end up contaminating his friend. The Chill Clawbster attacks him out at sea, around and on top of Monstro.\n\nThe fight sets Riku's mobility, backed by his Spirits, against an opponent that freezes the water and slips away beneath the ice. Victory clears his path through the world, but the scene's interest lies mainly in the symmetry it draws with Sora: two heroes, two versions of one monster, two ways of meeting the same test — setting up the ending in which only Riku is judged fit to become a Keyblade Master.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Chill Clawbster", url: "https://kingdomhearts.fandom.com/wiki/Chill_Clawbster" }],
  },

  // ─────────────────────────── Holey Moley ───────────────────────────
  "holey-moley": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Holey Moley est un Cauchemar, un Avale-Rêves hostile des Mondes Endormis. Il prend la forme d'une taupe géante au museau rose et aux griffes larges, avec les motifs colorés que partagent toutes les créatures de son espèce. Son corps massif est bâti pour creuser plus que pour combattre à découvert.\n\nOn l'affronte au Pays des Mousquetaires, monde inspiré du film Mickey, Donald, Dingo : les Trois Mousquetaires, sur la scène de l'opéra où se joue le dénouement de l'histoire. Le décor devient un terrain de jeu : la taupe disparaît sous les planches, laisse une bosse trahir sa progression et jaillit sous les pieds de son adversaire, avant de balayer la scène d'ondes de choc.",
          "The Holey Moley is a Nightmare, a hostile Dream Eater of the Sleeping Worlds. It takes the shape of a giant mole with a pink snout and broad claws, carrying the colourful markings shared by all creatures of its kind. Its bulky body is built for digging rather than open combat.\n\nIt is fought in Country of the Musketeers, the world inspired by Mickey, Donald, Goofy: The Three Musketeers, on the opera stage where the story reaches its climax. The setting becomes a playground: the mole vanishes under the boards, betrays its progress with a moving mound and bursts up beneath its opponent's feet before sweeping the stage with shockwaves.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Le Pays des Mousquetaires est un monde de rêve où Mickey, Donald et Dingo sont de jeunes mousquetaires maladroits chargés de protéger la princesse Minnie, tandis que Pat le Pied complote pour prendre le trône. Sora y arrive au moment de l'affrontement final, dans le théâtre où la conspiration se dénoue.\n\nLe Holey Moley est le Cauchemar qui vient perturber cette conclusion : il sape la scène et menace tout le monde. Sora l'affronte sous les yeux des trois mousquetaires, qui reprennent courage en le voyant se battre. Ce monde tient une place particulière dans Dream Drop Distance, car il montre une version rêvée du passé de Mickey et rappelle que les Mondes Endormis sont faits de souvenirs et de récits autant que de lieux réels.",
          "Country of the Musketeers is a dream world where Mickey, Donald and Goofy are clumsy young musketeers charged with protecting Princess Minnie, while Pete schemes to take the throne. Sora arrives just as the final confrontation begins, in the theatre where the plot unravels.\n\nThe Holey Moley is the Nightmare that disrupts that conclusion, undermining the stage and threatening everyone. Sora fights it before the three musketeers, who take heart from watching him. This world holds a special place in Dream Drop Distance, since it shows a dreamed version of Mickey's past and reminds the player that the Sleeping Worlds are made of memories and stories as much as of real places.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Holey Moley", url: "https://kingdomhearts.fandom.com/wiki/Holey_Moley" }],
  },

  // ─────────────────────────── Veil Lizard ───────────────────────────
  "veil-lizard": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Veil Lizard est un Sans-cœur emblème, créature artificielle marquée du blason à cœur épineux de l'espèce. Il a la forme d'un grand lézard aux pattes trapues, doté d'une longue langue et d'une queue lourde, dont la peau reprend le principe du caméléon : elle se fond dans le décor jusqu'à le rendre invisible.\n\nOn l'affronte à la Cité du Crépuscule, la ville aux couleurs de fin d'après-midi que 358/2 Days utilise comme point d'ancrage. Son camouflage détermine tout le combat : seule son ombre portée, ou l'ondulation de l'air autour de lui, permet de deviner sa position. Il faut donc le débusquer, le frapper au moment où il redevient visible, ou l'exposer par la magie avant qu'il ne disparaisse de nouveau.",
          "The Veil Lizard is an Emblem Heartless, an artificial creature stamped with the species' thorned-heart crest. It has the shape of a large lizard with stubby legs, a long tongue and a heavy tail, its skin working like a chameleon's: it blends into the scenery until it becomes invisible.\n\nIt is fought in Twilight Town, the late-afternoon-coloured city 358/2 Days uses as its anchor. Its camouflage governs the whole battle: only its cast shadow, or a ripple in the air around it, hints at its position. It must be flushed out and hit the moment it reappears, or exposed with magic before it fades again.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Le Veil Lizard est le premier grand adversaire que Roxas affronte dans 358/2 Days, envoyé en mission par l'Organisation XIII pour éliminer un Sans-cœur qui trouble la Cité du Crépuscule. À ce stade du récit, le jeune Simili obéit sans comprendre : il ne sait ni pourquoi il manie la Keyblade, ni ce qu'est vraiment ce cœur que Xemnas leur promet à tous.\n\nLe combat lui impose d'apprendre à observer plutôt qu'à foncer, puisque la cible reste la plupart du temps invisible. Cette mission marque aussi le début de sa routine quotidienne : rapports, ordres de Saïx, et retour au sommet de la tour de l'horloge pour partager une glace à l'eau de mer avec Axel, puis avec Xion, seuls moments où sa vie de Simili ressemble à quelque chose.",
          "The Veil Lizard is the first major opponent Roxas faces in 358/2 Days, sent on mission by Organization XIII to wipe out a Heartless disturbing Twilight Town. At this point in the story the young Nobody obeys without understanding: he knows neither why he wields the Keyblade nor what the heart Xemnas promises them all really is.\n\nThe fight forces him to observe rather than charge, since the target is invisible most of the time. The mission also begins his daily routine: reports, orders from Saïx, and a return to the clock tower to share sea-salt ice cream with Axel and later Xion, the only moments when his Nobody's life resembles anything at all.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Veil Lizard", url: "https://kingdomhearts.fandom.com/wiki/Veil_Lizard" }],
  },

  // ─────────────────────────── Tailbunker ───────────────────────────
  "tailbunker": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Tailbunker est un Sans-cœur emblème massif, à mi-chemin entre le dragon et la forteresse volante. Son corps sombre est prolongé par une queue démesurée qui lui sert de massue, ses ailes membraneuses lui permettent de rester en vol stationnaire, et le blason à cœur épineux des Sans-cœur emblèmes orne son poitrail.\n\nOn le rencontre à la Cité du Crépuscule, notamment près de la gare et de sa tour de l'horloge, lieux emblématiques de 358/2 Days. Sa manière de combattre découle de sa masse : il plane hors d'atteinte au-dessus de sa cible, puis s'écrase au sol dans un choc qui secoue toute l'aire de combat. Sa queue et ses pattes constituent ses points faibles, seuls accessibles quand il touche terre.",
          "The Tailbunker is a massive Emblem Heartless, halfway between a dragon and a flying fortress. Its dark body extends into an oversized tail used as a club, its membranous wings let it hover in place, and the thorned-heart crest of Emblem Heartless marks its chest.\n\nIt is met in Twilight Town, notably around the station and its clock tower, landmarks of 358/2 Days. Its fighting style follows from its bulk: it hovers out of reach above its target, then slams into the ground with an impact that shakes the whole arena. Its tail and legs are its weak points, reachable only when it lands.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Le Tailbunker est un boss récurrent de 358/2 Days : Roxas l'affronte une première fois près de la gare de la Cité du Crépuscule, puis retrouve des variantes renforcées au fil des missions confiées par l'Organisation XIII, dans d'autres mondes et à des niveaux de difficulté croissants.\n\nCette répétition correspond à la structure même du jeu, bâti sur des journées de travail numérotées et des contrats successifs plutôt que sur un voyage continu. Le dragon devient ainsi un repère : chaque nouvelle rencontre mesure les progrès de Roxas, du débutant maladroit au porteur capable de tenir tête à un membre de l'Organisation. En arrière-plan, la récolte des cœurs libérés par ces Sans-cœur alimente le Kingdom Hearts artificiel que Xemnas fait grossir au-dessus du Monde qui n'existe pas.",
          "The Tailbunker is a recurring boss in 358/2 Days: Roxas first fights it near Twilight Town's station, then meets stronger variants across missions handed down by Organization XIII, in other worlds and at rising difficulty.\n\nThat repetition suits the game's own structure, built on numbered workdays and successive contracts rather than a continuous journey. The dragon becomes a benchmark: each new encounter measures Roxas's progress, from clumsy beginner to a wielder able to stand up to an Organization member. In the background, the hearts these Heartless release feed the artificial Kingdom Hearts Xemnas is growing above The World That Never Was.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Tailbunker", url: "https://kingdomhearts.fandom.com/wiki/Tailbunker" }],
  },

  // ─────────────────────────── Crimson Prankster ───────────────────────────
  "crimson-prankster": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Crimson Prankster est un Sans-cœur emblème à l'allure de bouffon : silhouette élancée en costume rouge et noir, chapeau à grelots et sourire figé, avec le blason à cœur épineux de l'espèce sur la poitrine. Sa singularité est de se présenter en deux exemplaires identiques, deux jumeaux qui agissent de concert.\n\nOn l'affronte au Pays des Merveilles, le monde tiré d'Alice au pays des merveilles, dont l'absurdité colle parfaitement à ce duo de farceurs. Le combat repose sur leur gémellité : les deux corps jonglent avec des flammes, se déplacent en miroir et surtout se soignent mutuellement, si bien que frapper l'un sans l'autre ne mène à rien. Il faut les abattre presque simultanément pour venir à bout de l'ensemble.",
          "The Crimson Prankster is an Emblem Heartless dressed as a jester: a lithe silhouette in red and black, a belled hat and a frozen grin, with the species' thorned-heart crest on its chest. Its peculiarity is appearing as two identical copies, twins acting in concert.\n\nIt is fought in Wonderland, the world drawn from Alice in Wonderland, whose absurdity suits this pair of pranksters perfectly. The battle turns on their twinning: the two bodies juggle flames, move in mirror image and, above all, heal one another, so hitting one alone achieves nothing. Both must be brought down almost simultaneously to finish the fight.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Dans 358/2 Days, le Pays des Merveilles fait partie des mondes où l'Organisation XIII envoie ses agents traquer les Sans-cœur. Roxas y est chargé d'éliminer le Crimson Prankster, dont le dédoublement rend la mission plus retorse que les précédentes.\n\nLe combat lui impose de gérer deux cibles à la fois et de les affaiblir en parallèle avant de porter les coups décisifs, sous peine de les voir se remettre indéfiniment. Cette mission s'inscrit dans la longue série de contrats qui rythment le quotidien du jeune Simili, à mesure qu'il gagne en puissance sans rien comprendre à ce qui l'attend. Le récit du jeu tire précisément sa force de ce décalage entre la banalité des missions et la tragédie qui se noue autour de Xion et d'Axel.",
          "In 358/2 Days, Wonderland is one of the worlds where Organization XIII sends its agents to hunt Heartless. Roxas is ordered to eliminate the Crimson Prankster, whose split form makes the mission trickier than his earlier ones.\n\nThe fight forces him to handle two targets at once and weaken them in parallel before landing the decisive blows, or watch them heal indefinitely. The mission belongs to the long series of contracts that pace the young Nobody's days as he grows stronger while understanding nothing of what awaits him. The game's story draws its power precisely from that gap between the banality of the missions and the tragedy building around Xion and Axel.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Crimson Prankster", url: "https://kingdomhearts.fandom.com/wiki/Crimson_Prankster" }],
  },

  // ─────────────────────────── Gluttonous Goo ───────────────────────────
// ─────────────────────────── Queen Buzzerfly ───────────────────────────
  "queen-buzzerfly": {
    sections: [
      {
        title: NATURE,
        text: L(
          "La Queen Buzzerfly est un Cauchemar, c'est-à-dire un Avale-Rêves hostile des Mondes Endormis. Son corps mêle l'abeille et le papillon : abdomen rayé, dard proéminent, grandes ailes aux motifs colorés caractéristiques de l'espèce. Elle règne sur un essaim de petits insectes du même type, qui l'accompagnent en permanence.\n\nComme son nom l'indique, elle combat en reine : elle reste en vol au-dessus de l'arène, ordonne à ses sujets d'attaquer et s'entoure d'eux comme d'un bouclier vivant lorsqu'on l'approche. Ses propres offensives sont des piqués en piqûre, rapides et difficiles à anticiper. Riku la rencontre au cours de son voyage à travers les Mondes Endormis, pendant l'examen de Maîtrise organisé par Yen Sid.",
          "The Queen Buzzerfly is a Nightmare, a hostile Dream Eater of the Sleeping Worlds. Its body blends bee and butterfly: a striped abdomen, a prominent stinger and large wings bearing the species' distinctive colourful patterns. It rules over a swarm of small insects of the same kind that follow it everywhere.\n\nAs its name suggests it fights like a queen: it stays airborne above the arena, orders its subjects to attack and surrounds itself with them like a living shield when approached. Its own offensives are stinging dives, fast and hard to read. Riku meets it during his journey through the Sleeping Worlds, in the Mark of Mastery exam set by Yen Sid.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "La Queen Buzzerfly fait partie des Cauchemars que Riku doit écarter pendant son passage dans les Mondes Endormis. Le combat s'organise autour de l'essaim : tant que les insectes protègent leur reine, les coups portés à celle-ci restent inefficaces, et il faut donc dégager le ciel avant d'espérer la toucher.\n\nSur le plan du récit, ces affrontements ont tous la même fonction. Les Cauchemars ne sont pas des ennemis de hasard : ils infestent les mondes endormis pour empêcher qu'on les réveille, et servent ainsi les plans de Xehanort, qui compte sur le sommeil prolongé de Sora. Chaque victoire de Riku libère un peu ces mondes, jusqu'à ce que la fin du jeu révèle que l'examen tout entier était un piège tendu par le Jeune Xehanort.",
          "The Queen Buzzerfly is one of the Nightmares Riku must clear during his passage through the Sleeping Worlds. The fight is built around the swarm: as long as the insects shield their queen, blows aimed at her do little, so the sky must be cleared before she can be hurt.\n\nIn story terms, all these encounters serve the same function. Nightmares are not random enemies: they infest the sleeping worlds to keep them from waking, and so serve Xehanort's plans, which rely on Sora's prolonged sleep. Each of Riku's victories frees those worlds a little, until the ending reveals that the whole exam was a trap laid by Young Xehanort.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Queen Buzzerfly", url: "https://kingdomhearts.fandom.com/wiki/Queen_Buzzerfly" }],
  },

  // ─────────────────────────── Commantis ───────────────────────────
  "commantis": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Commantis est un Cauchemar, la variante malfaisante des Avale-Rêves. Sa forme est celle d'une mante religieuse géante, mais son corps est traité comme un programme informatique : lignes lumineuses, plaques géométriques et lames-faucilles éclatantes, esthétique reprise du monde qui l'abrite.\n\nOn l'affronte en effet à La Grille, univers numérique tiré de Tron : L'Héritage, où les habitants sont des programmes et où tout le décor est fait de circuits lumineux. Le monstre y combine les caractéristiques de son espèce et celles du monde : il se téléporte comme une donnée qui change d'adresse, découpe l'arène de ses lames et déploie des barrières d'énergie pour se protéger, ce qui oblige à choisir ses fenêtres d'attaque avec soin.",
          "The Commantis is a Nightmare, the malevolent branch of the Dream Eaters. Its shape is that of a giant praying mantis, but its body is rendered like a computer program: glowing lines, geometric plates and brilliant sickle blades, an aesthetic borrowed from the world that hosts it.\n\nIt is indeed fought in The Grid, the digital universe drawn from Tron: Legacy, where the inhabitants are programs and the scenery is made of glowing circuits. The creature combines the traits of its species with those of the world: it teleports like data changing address, slices across the arena with its blades and raises energy barriers to protect itself, forcing careful choice of attack windows.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Riku découvre La Grille au cours de son examen de Maîtrise et y aide Sam Flynn et Quorra à échapper au contrôle de Clu, le programme qui a pris le pouvoir sur le système. Le Commantis surgit au terme de cette traversée et lui barre la route.\n\nLe combat exploite pleinement les particularités du lieu, entre plates-formes numériques et déplacements en Flowmotion. Il illustre aussi le rôle de Riku dans ce jeu : là où Sora avance porté par sa confiance, Riku traverse chaque monde en cherchant à protéger les autres et à contenir ses propres ténèbres. Cette constance sera précisément ce que Yen Sid reconnaîtra à la fin de Dream Drop Distance en le nommant Maître de la Keyblade, tandis que Sora, piégé, devra être ramené du sommeil.",
          "Riku discovers The Grid during his Mark of Mastery exam and helps Sam Flynn and Quorra escape the control of Clu, the program that seized the system. The Commantis appears at the end of that run and blocks his way.\n\nThe fight makes full use of the setting, between digital platforms and Flowmotion travel. It also illustrates Riku's role in this game: where Sora advances on trust alone, Riku crosses each world trying to protect others and to keep his own darkness in check. That steadiness is exactly what Yen Sid recognises at the end of Dream Drop Distance by naming him a Keyblade Master, while a trapped Sora has to be brought back from sleep.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Commantis", url: "https://kingdomhearts.fandom.com/wiki/Commantis" }],
  },

  // ─────────────────────────── Cauchemar Ventus en armure ───────────────────────────
  "armored-ventus-nightmare": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Cauchemar Ventus en armure est un Avale-Rêves hostile qui a revêtu l'armure de porteur de Keyblade de Ventus. Casque fermé, plastron sombre et Keyblade noire : l'apparence est celle du jeune apprenti de la Contrée du Départ, mais l'être qui l'occupe n'est qu'un Cauchemar attiré par un cœur endormi.\n\nCette forme n'est pas un hasard. Depuis la fin de Birth by Sleep, le cœur brisé de Ventus repose au sein de celui de Sora, où il a trouvé refuge ; le Cauchemar s'est donc emparé de la seule figure disponible dans les profondeurs de ce cœur. On l'affronte à l'intérieur même des rêves de Sora, dans un espace onirique et non dans un monde Disney, ce qui en fait l'un des adversaires les plus abstraits de la saga.",
          "The Armored Ventus Nightmare is a hostile Dream Eater that has donned Ventus's Keyblade armor. Closed helmet, dark breastplate and black Keyblade: the appearance is that of the young apprentice from the Land of Departure, but the being inside is only a Nightmare drawn to a sleeping heart.\n\nThat shape is no accident. Since the end of Birth by Sleep, Ventus's broken heart has rested inside Sora's, where it found shelter; the Nightmare has therefore seized the only figure available in that heart's depths. It is fought inside Sora's dreams themselves, in an oneiric space rather than a Disney world, which makes it one of the most abstract opponents in the series.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "À la fin de Dream Drop Distance, Sora est tombé dans le piège du Jeune Xehanort et sombre dans un sommeil dont il ne peut sortir seul, réduit à l'état de réceptacle potentiel pour le cœur du Maître Xehanort. Riku, désormais Maître de la Keyblade, plonge dans les rêves de son ami pour l'en tirer.\n\nC'est là qu'il affronte le Cauchemar Ventus en armure, dernier boss du jeu, adversaire rapide qui enchaîne charges, rayons et attaques en vol dans un décor de constellations. En le vainquant, Riku dissipe le cauchemar qui retenait Sora et le ramène à la Tour Mystérieuse. Ce combat scelle l'inversion du duo : celui qui avait cédé aux ténèbres est devenu le sauveur, tandis que Sora devra reprendre son entraînement dans Kingdom Hearts III.",
          "At the end of Dream Drop Distance, Sora has fallen into Young Xehanort's trap and sunk into a sleep he cannot leave on his own, reduced to a potential vessel for Master Xehanort's heart. Riku, now a Keyblade Master, dives into his friend's dreams to pull him out.\n\nThere he faces the Armored Ventus Nightmare, the game's final boss, a fast opponent chaining charges, beams and aerial assaults against a backdrop of constellations. By beating it, Riku dispels the nightmare holding Sora and brings him back to the Mysterious Tower. The fight seals the pair's reversal: the one who once gave in to darkness has become the rescuer, while Sora must resume his training in Kingdom Hearts III.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Armored Ventus Nightmare", url: "https://kingdomhearts.fandom.com/wiki/Armored_Ventus_Nightmare" }],
  },

  // ─────────────────────────── Grim Guardianess ───────────────────────────
  "grim-guardianess": {
    sections: [
      {
        title: NATURE,
        text: L(
          "La Grim Guardianess est un Sans-cœur emblème de très grande taille, en forme d'arbre gigantesque dont le tronc et les branches dessinent un visage de femme aux traits de Mère Gothel. Le blason à cœur épineux des Sans-cœur emblèmes marque son écorce, et des corbeaux nichent dans son feuillage.\n\nOn l'affronte au Royaume de Corona, monde tiré de Raiponce, autour de la tour où la jeune fille a été retenue prisonnière toute sa vie. La créature naît de la volonté possessive de Gothel, qui voulait garder Raiponce enfermée : elle emprisonne d'ailleurs Sora dans ses racines, lance des graines explosives et fait pleuvoir des corbeaux, tandis qu'il faut grimper le long de ses branches pour atteindre son visage.",
          "The Grim Guardianess is a very large Emblem Heartless shaped like a gigantic tree whose trunk and branches form a woman's face with Mother Gothel's features. The thorned-heart crest of Emblem Heartless marks its bark, and crows nest in its foliage.\n\nIt is fought in the Kingdom of Corona, the world drawn from Tangled, around the tower where Rapunzel was kept prisoner all her life. The creature is born of Gothel's possessive will to keep Rapunzel locked away: fittingly it traps Sora in its roots, fires explosive seeds and rains down crows, while he must climb its branches to reach its face.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Royaume de Corona, Sora, Donald et Dingo accompagnent Raiponce dans sa découverte du monde extérieur, jusqu'au moment où Mère Gothel tente de la ramener de force à la tour et disparaît. La Grim Guardianess surgit alors, née des ténèbres laissées par cette obsession.\n\nLe combat se joue sur et autour de l'arbre, entre racines, branches et Attractions, et libère la tour de son emprise. Il conclut l'un des mondes Disney les plus lumineux du jeu par une image franchement inquiétante, fidèle à la manière dont Kingdom Hearts III fait naître ses Sans-cœur des sentiments les plus sombres de chaque récit. Une fois la créature abattue, Raiponce peut retrouver ses parents et le monde est débarrassé de l'ombre qui pesait sur lui.",
          "In the Kingdom of Corona, Sora, Donald and Goofy accompany Rapunzel as she discovers the outside world, until Mother Gothel tries to drag her back to the tower and vanishes. The Grim Guardianess then rises, born of the darkness that obsession left behind.\n\nThe fight plays out on and around the tree, between roots, branches and Attractions, and frees the tower from its grip. It closes one of the game's brightest Disney worlds on a frankly unsettling image, true to the way Kingdom Hearts III grows its Heartless out of each story's darkest feelings. Once the creature falls, Rapunzel can find her parents again and the world is rid of the shadow hanging over it.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Grim Guardianess", url: "https://kingdomhearts.fandom.com/wiki/Grim_Guardianess" }],
  },

  // ─────────────────────────── Raging Vulture ───────────────────────────
  "raging-vulture": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Le Raging Vulture est un Sans-cœur emblème géant en forme de rapace : cou dégarni, bec crochu, ailes immenses et serres capables d'emporter une proie. Le blason à cœur épineux de son espèce apparaît sur son plumage sombre, signe qu'il s'agit d'un Sans-cœur fabriqué et non d'un pur-sang.\n\nOn l'affronte dans les Caraïbes, le monde tiré de Pirates des Caraïbes, au-dessus des îles et des eaux où naviguent Jack Sparrow et le Black Pearl. Sa taille et son vol dictent le combat : il plane hors d'atteinte, soulève des rafales de ses ailes, plonge en piqué et emporte ses cibles dans les airs, obligeant à utiliser le Flowmotion, la magie et les formes de Keyblade pour l'atteindre.",
          "The Raging Vulture is a giant Emblem Heartless shaped like a raptor: a bare neck, hooked beak, huge wings and talons able to carry off prey. Its species' thorned-heart crest shows on its dark plumage, marking it as a manufactured Heartless rather than a Pureblood.\n\nIt is fought in The Caribbean, the world drawn from Pirates of the Caribbean, above the islands and waters where Jack Sparrow and the Black Pearl sail. Its size and flight shape the battle: it glides out of reach, whips up gusts with its wings, dives and carries its targets aloft, forcing the use of Flowmotion, magic and Keyblade transformations to reach it.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Les Caraïbes sont l'un des mondes les plus vastes de Kingdom Hearts III, avec ses îles à explorer et sa navigation libre à bord d'un navire. Sora, Donald et Dingo y aident Jack Sparrow contre Davy Jones et les Sans-cœur qui infestent les eaux, et le Raging Vulture est l'un des adversaires majeurs de cette traversée.\n\nLe combat se déroule en grande partie en hauteur, sur les falaises et les mâts, et met en valeur les nouvelles possibilités de déplacement du jeu. Il s'inscrit dans la mission plus large de Sora dans Kingdom Hearts III : retrouver le pouvoir qu'il a perdu et rassembler les sept Gardiens de la Lumière avant l'affrontement final avec la véritable Organisation XIII au Cimetière des Keyblades.",
          "The Caribbean is one of Kingdom Hearts III's largest worlds, with islands to explore and free sailing aboard a ship. Sora, Donald and Goofy help Jack Sparrow against Davy Jones and the Heartless infesting the waters, and the Raging Vulture is one of the major opponents of that voyage.\n\nThe fight takes place largely at height, on cliffs and masts, showing off the game's new traversal options. It belongs to Sora's wider mission in Kingdom Hearts III: to regain the power he lost and gather the seven Guardians of Light before the final confrontation with the real Organization XIII at the Keyblade Graveyard.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Raging Vulture", url: "https://kingdomhearts.fandom.com/wiki/Raging_Vulture" }],
  },

  // ─────────────────────────── Xehanort en armure ───────────────────────────
  "armored-xehanort-boss": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Xehanort en armure n'appartient à aucune famille de monstres : ce n'est ni un Sans-cœur, ni un Simili, ni un Nescient, ni un Avale-Rêves, mais un porteur de Keyblade humain revêtu de l'armure protectrice que les apprentis de la Contrée du Départ endossaient pour voyager entre les mondes. Casque intégral, plastron sombre et Keyblade en main, il combat masqué, sans qu'aucun visage ne soit visible.\n\nCette armure est directement héritée de Terra, dont Xehanort a pris le corps à la fin de Birth by Sleep et dont l'équipement de porteur a suivi. On l'affronte dans Kingdom Hearts III au Cimetière des Keyblades, la plaine désolée hérissée d'armes rouillées où la véritable Organisation XIII a donné rendez-vous aux Gardiens de la Lumière pour provoquer une seconde Guerre des Keyblades.",
          "Armored Xehanort belongs to no monster family: not a Heartless, not a Nobody, not an Unversed, not a Dream Eater, but a human Keyblade wielder clad in the protective armor apprentices of the Land of Departure wore to travel between worlds. Full helmet, dark breastplate and Keyblade in hand, he fights masked, with no face on show.\n\nThat armor is inherited directly from Terra, whose body Xehanort took at the end of Birth by Sleep and whose wielder's gear came with it. He is fought in Kingdom Hearts III at the Keyblade Graveyard, the desolate plain bristling with rusted weapons where the real Organization XIII summoned the Guardians of Light to provoke a second Keyblade War.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Cimetière des Keyblades, les treize membres de la véritable Organisation XIII attendent les sept Gardiens de la Lumière : Xehanort veut provoquer le choc des deux camps pour faire réapparaître la χ-blade et remodeler les mondes. Xehanort en armure est l'un des adversaires que Sora et ses alliés doivent écarter au cours de cette bataille finale.\n\nLe combat est marqué par la puissance brute de l'armure, qui manie la Keyblade et libère des vagues de ténèbres, et par l'ambiguïté du personnage : sous le casque se joue aussi le sort de Terra, prisonnier de son propre corps depuis dix ans. C'est précisément cette victoire qui ouvre la voie à sa libération, lorsque l'armure abandonnée du porteur — le Gardien qui l'accompagne — permet à Terra de reprendre enfin sa place parmi les siens.",
          "At the Keyblade Graveyard, the thirteen members of the real Organization XIII await the seven Guardians of Light: Xehanort wants the two sides to clash so the χ-blade will reappear and let him remake the worlds. Armored Xehanort is one of the opponents Sora and his allies must clear away during that final battle.\n\nThe fight is defined by the armor's raw power, wielding the Keyblade and unleashing waves of darkness, and by the character's ambiguity: beneath the helmet, Terra's fate is also at stake, a prisoner in his own body for ten years. It is precisely this victory that opens the way to his release, when the wielder's abandoned armor — the Guardian at his side — lets Terra finally retake his place among his friends.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Terra-Xehanort", url: "https://kingdomhearts.fandom.com/wiki/Terra-Xehanort" }],
  },

  // ─────────────────────────── Réplica de Xehanort ───────────────────────────
  "replica-xehanort": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Les Réplicas de Xehanort ne sont ni des Sans-cœur ni des Similis, mais des corps artificiels : des copies fabriquées sur le modèle des réplicas mis au point autrefois par Even au Manoir Oblivion, puis reprises par Xehanort pour accueillir des fragments de son propre cœur. Chacun porte le manteau noir et le visage du vieil homme, ce qui donne à l'ensemble une allure de foule identique.\n\nIls appartiennent au camp de la véritable Organisation XIII, dont ils constituent la réserve de réceptacles. On les affronte dans Kingdom Hearts III à Scala ad Caelum, la cité verticale aux tours blanches et aux canaux où Xehanort a grandi, décor à la fois monumental et instable qui sert de théâtre à la conclusion du jeu.",
          "The Xehanort Replicas are neither Heartless nor Nobodies but artificial bodies: copies built on the replica model Even once developed at Castle Oblivion, later taken up by Xehanort to hold fragments of his own heart. Each wears the black coat and the old man's face, giving the whole group the look of an identical crowd.\n\nThey belong to the real Organization XIII, forming its reserve of vessels. They are fought in Kingdom Hearts III at Scala ad Caelum, the vertical city of white towers and canals where Xehanort grew up, a setting at once monumental and unstable that stages the game's conclusion.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Après la bataille du Cimetière des Keyblades, Sora poursuit Xehanort jusqu'à Scala ad Caelum. Une douzaine de Réplicas l'y attendent : ils attaquent en groupe, se téléportent et lancent des projectiles de ténèbres, submergeant le héros par le nombre plutôt que par la force individuelle.\n\nLe combat sert de prélude à l'affrontement final, puisque le Maître Xehanort absorbe ensuite la puissance de ses copies pour livrer bataille en personne. Il donne aussi une image saisissante du projet de Xehanort : un homme prêt à se multiplier à l'infini, à sacrifier des corps interchangeables et à effacer toute individualité pour imposer sa vision de l'équilibre entre lumière et ténèbres. Face à cette foule d'un seul visage, Sora incarne l'inverse exact — un cœur lié à ceux de tous ses amis.",
          "After the battle at the Keyblade Graveyard, Sora pursues Xehanort to Scala ad Caelum. A dozen Replicas wait for him there: they attack as a group, teleport and fire dark projectiles, overwhelming the hero by numbers rather than individual strength.\n\nThe fight is the prelude to the final confrontation, since Master Xehanort then absorbs his copies' power to fight in person. It also gives a striking image of Xehanort's project: a man ready to multiply himself endlessly, to spend interchangeable bodies and erase all individuality in order to impose his vision of balance between light and darkness. Against that crowd wearing one face, Sora stands for the exact opposite — a heart bound to all his friends'.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Replica Xehanort", url: "https://kingdomhearts.fandom.com/wiki/Replica_Xehanort" }],
  },

  // ─────────────────────────── Riku des Ténèbres ───────────────────────────
  "dark-riku-boss": {
    sections: [
      {
        title: NATURE,
        text: L(
          "Riku des Ténèbres n'est ni un Sans-cœur ni un Simili : c'est un membre humain, ou plutôt artificiel, de la véritable Organisation XIII. Son corps est un réplica, du type de ceux mis au point par Even, occupé par le cœur du Réplica de Riku sous l'apparence du Riku adolescent possédé par Ansem, Suzerain des Ténèbres. Manteau noir ouvert, cheveux argentés et Soul Eater à la main, il est la copie exacte d'un Riku qui n'existe plus.\n\nOn l'affronte dans Kingdom Hearts III au Cimetière des Keyblades, pendant la confrontation entre les sept Gardiens de la Lumière et les treize réceptacles de Xehanort. Il combine attaques à l'épée, magie des ténèbres et déplacements rapides, dans un style calqué sur celui de son modèle.",
          "Dark Riku is neither a Heartless nor a Nobody: he is a human — or rather artificial — member of the real Organization XIII. His body is a replica of the kind Even developed, inhabited by the heart of the Riku Replica in the shape of the teenage Riku possessed by Ansem, Seeker of Darkness. Black coat open, silver hair and Soul Eater in hand, he is the exact copy of a Riku who no longer exists.\n\nHe is fought in Kingdom Hearts III at the Keyblade Graveyard, during the confrontation between the seven Guardians of Light and Xehanort's thirteen vessels. He mixes sword attacks, dark magic and rapid movement, in a style modelled on his original.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Cimetière des Keyblades, Riku des Ténèbres affronte Sora, Riku et le roi Mickey, opposant à l'adulte qu'est devenu Riku l'image de ce qu'il fut au pire moment de sa vie. Le combat est donc, pour le vrai Riku, une confrontation avec un passé qu'il a mis deux jeux à surmonter.\n\nVaincu, le réplica renonce à son corps et le laisse disponible. Riku, qui avait autrefois combattu et vu mourir le Réplica au Manoir Oblivion, choisit d'offrir ce corps à Naminé, la Simili de Kairi, afin qu'elle puisse enfin exister par elle-même. Ce geste rachète l'un des drames les plus anciens de la saga et permet à Naminé de réapparaître, vivante, dans l'épilogue du jeu, aux côtés de Roxas et de Xion.",
          "At the Keyblade Graveyard, Dark Riku faces Sora, Riku and King Mickey, setting against the adult Riku has become the image of what he was at the worst moment of his life. For the real Riku the fight is a confrontation with a past that took him two games to overcome.\n\nOnce defeated, the replica gives up his body and leaves it available. Riku, who had once fought and watched the Replica die at Castle Oblivion, chooses to offer that body to Naminé, Kairi's Nobody, so she can finally exist in her own right. The gesture redeems one of the series' oldest tragedies and lets Naminé reappear, alive, in the game's epilogue alongside Roxas and Xion.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dark Riku", url: "https://kingdomhearts.fandom.com/wiki/Dark_Riku" }],
  },
};
