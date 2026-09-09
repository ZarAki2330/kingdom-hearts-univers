import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée d'un second groupe de mondes Disney : origine (œuvre adaptée,
 * particularités, zones, boss), puis récit de chaque visite, jeu par jeu.
 * Les clés sont les slugs des entrées de worlds.ts et worlds-more.ts.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Forêt des Nains ───────────────────────────
  "dwarf-woodlands": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Forêt des Nains adapte Blanche-Neige et les Sept Nains (1937), le tout premier long métrage animé de Disney, ce qui en fait un choix symbolique pour ouvrir la galerie des mondes de Birth by Sleep. Le jeu en retient l'essentiel : la Reine et son miroir magique, la fuite de Blanche-Neige dans la forêt hantée, la chaumière et la mine des sept nains, puis la pomme empoisonnée et le baiser du prince.\n\nL'exploration se répartit entre la salle du trône du château, la forêt sombre, la clairière de la chaumière et les galeries de la mine où l'on ramasse les gemmes. Le monde compte deux figures d'affrontement : l'esprit du Miroir Magique, que Terra provoque dans la salle du trône, et le Nescient Mad Treant, un arbre furieux né de la peur qui règne sur la forêt. Comme partout dans Birth by Sleep, les trois héros traversent le même décor à des moments différents et n'en voient chacun qu'une part.",
          "Dwarf Woodlands adapts Snow White and the Seven Dwarfs (1937), Disney's very first animated feature, which makes it a fitting choice to open Birth by Sleep's gallery of worlds. The game keeps the essentials: the Queen and her magic mirror, Snow White's flight through the haunted forest, the seven dwarfs' cottage and mine, then the poisoned apple and the prince's kiss.\n\nExploration is split between the castle throne room, the dark forest, the cottage clearing and the mine tunnels where gems are gathered. The world has two figures to fight: the spirit of the Magic Mirror, which Terra provokes in the throne room, and the Mad Treant Unversed, a furious tree born of the fear that rules the forest. As everywhere in Birth by Sleep, the three heroes cross the same setting at different moments and each sees only part of it.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Terra arrive le premier et se heurte à la Reine, qui interroge son miroir pour retrouver Blanche-Neige. Prêt à croire que la jeune fille détient une lumière qu'il doit protéger, Terra se laisse manipuler, brise le miroir en duel puis part fouiller la forêt, poursuivi par le soupçon de sombrer lui-même dans les ténèbres. Ventus, arrivé ensuite, croise Blanche-Neige terrorisée, met les sept nains en fuite malgré lui et finit par gagner leur confiance en défendant la mine contre les Nescients.\n\nAqua ferme la marche : elle trouve Blanche-Neige endormie sous la garde des nains, écarte le Mad Treant qui infeste le bois et assiste au réveil de la princesse par le prince. Le monde plante deux graines pour la suite de la saga : Blanche-Neige, première des Princesses de Cœur, est repérée comme telle, et Terra apprend qu'un pouvoir sans maîtrise attire ceux qui savent s'en servir. Chaque scénario s'achève sur la Keyblade Mine de joyaux.",
          "Terra arrives first and runs into the Queen, who questions her mirror to find Snow White. Ready to believe the girl holds a light he must protect, Terra lets himself be manipulated, shatters the mirror in a duel and then searches the forest, haunted by the suspicion that he is sinking into darkness himself. Ventus comes next, meets a terrified Snow White, unwittingly scatters the seven dwarfs and finally earns their trust by defending the mine against the Unversed.\n\nAqua closes the sequence: she finds Snow White asleep under the dwarfs' watch, drives off the Mad Treant infesting the woods and witnesses the prince waking the princess. The world plants two seeds for the rest of the saga: Snow White, first of the Princesses of Heart, is spotted as such, and Terra learns that unmastered power attracts those who know how to use it. Each scenario ends with the Treasure Trove Keyblade.",
        ),
      },
    ],
    trivia: [
      L("La Forêt des Nains est le premier monde Disney visitable dans les trois scénarios de Birth by Sleep, dans l'ordre suggéré par le jeu.", "Dwarf Woodlands is the first Disney world available in all three Birth by Sleep scenarios, in the order the game suggests."),
      L("Le miroir magique avait déjà servi d'objet d'invocation dans Kingdom Hearts, où il permettait d'appeler Mushu.", "The magic mirror had already served as a summon item in Kingdom Hearts, where it called Mushu."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Dwarf Woodlands", url: "https://kingdomhearts.fandom.com/wiki/Dwarf_Woodlands" },
    ],
  },

  // ─────────────────────────── Palais des Rêves ───────────────────────────
  "castle-of-dreams": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Palais des Rêves adapte Cendrillon (1950), et c'est le monde qui porte le plus directement le thème de Birth by Sleep : croire en un rêve jusqu'à ce qu'il se réalise. Le jeu suit le film de près, de la maison de la belle-mère à la robe déchirée, de l'intervention de la Bonne Fée au bal du prince, puis à la pantoufle de verre.\n\nSa particularité tient à une idée de mise en scène : Ventus, touché par la magie, est réduit à la taille des souris et parcourt les mêmes pièces vues d'en bas, entre pieds de meubles et trous de plinthe, avec Jaq pour guide et le chat Lucifer pour menace. Les autres zones — le manoir, la cour, la salle de bal et les jardins — se traversent à taille normale. Le boss du monde est le Cursed Coach, un carrosse possédé par les Nescients qui charge sur la route du château.",
          "Castle of Dreams adapts Cinderella (1950), and it is the world that carries Birth by Sleep's theme most directly: believing in a dream until it comes true. The game follows the film closely, from the stepmother's house to the torn dress, from the Fairy Godmother's intervention to the prince's ball, and then the glass slipper.\n\nIts distinctive touch is a staging idea: Ventus, caught by the magic, is shrunk to mouse size and crosses the same rooms seen from below, among furniture legs and skirting-board holes, with Jaq as a guide and the cat Lucifer as a threat. The other areas — the manor, the courtyard, the ballroom and the gardens — are travelled at normal size. The world's boss is the Cursed Coach, a carriage possessed by the Unversed that charges along the road to the castle.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Ventus, minuscule, découvre la maison des Tremaine du point de vue des souris : il aide Jaq à rassembler perles et rubans pour la robe, échappe à Lucifer et voit les demi-sœurs mettre la tenue en pièces. Terra, lui, arrive à l'heure du bal ; convaincu que la volonté de Cendrillon est une lumière à défendre, il écarte les Nescients qui s'en prennent au carrosse et la laisse gagner le palais, avant de méditer sur la différence entre force et cœur.\n\nAqua veille sur la fin de l'histoire : elle protège la pantoufle de verre des Nescients lancés à sa perte, permet à Cendrillon d'être retrouvée par le grand-duc et voit la belle-mère perdre tout pouvoir sur elle. Le monde ne fait pas avancer le complot de Xehanort, mais il donne à chaque héros une leçon qu'il retiendra : le rêve, ici, tient lieu d'arme. Les trois scénarios y débloquent la Keyblade Coup de minuit.",
          "A tiny Ventus discovers the Tremaine house from the mice's point of view: he helps Jaq gather beads and ribbons for the dress, escapes Lucifer and sees the stepsisters tear the outfit apart. Terra arrives at the hour of the ball; convinced that Cinderella's will is a light worth defending, he clears the Unversed attacking the coach and lets her reach the palace, then reflects on the difference between strength and heart.\n\nAqua watches over the story's end: she protects the glass slipper from the Unversed sent to destroy it, allows the Grand Duke to find Cinderella and sees the stepmother lose all power over her. The world does not advance Xehanort's scheme, but it gives each hero a lesson they will keep: here, the dream works as a weapon. All three scenarios unlock the Stroke of Midnight Keyblade.",
        ),
      },
    ],
    trivia: [
      L("La séquence de Ventus miniature reprend le principe des passages en taille réduite du Pays des Merveilles dans Kingdom Hearts.", "Ventus's miniature sequence reuses the shrinking idea of Wonderland in Kingdom Hearts."),
      L("Le nom japonais du monde, キャッスル・オブ・ドリーム, est au singulier : « Château du Rêve ».", "The world's Japanese name, キャッスル・オブ・ドリーム, is singular: “Castle of Dream”."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Castle of Dreams", url: "https://kingdomhearts.fandom.com/wiki/Castle_of_Dreams" },
    ],
  },

  // ─────────────────────────── Domaine Enchanté ───────────────────────────
  "enchanted-dominion": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Domaine Enchanté adapte La Belle au bois dormant (1959) et occupe une place à part : c'est le monde où la saga donne enfin une origine à Maléfique, adversaire de Kingdom Hearts et meneuse des méchants Disney. Le jeu conserve la trame du film — le sortilège du fuseau, le royaume endormi sous les ronces, les trois bonnes fées Flora, Pâquerette et Pimprenelle, le prince Philippe et le dragon — mais y greffe la rencontre décisive avec Xehanort.\n\nOn y visite le château du roi Stéphane et sa salle du trône, la tour où Aurore succombe au sortilège, la forêt, puis la Montagne Interdite, repaire de Maléfique gardé par ses serviteurs. L'affrontement final oppose les héros à Maléfique elle-même, y compris sous sa forme de dragon, dans les ronces au pied du château.",
          "Enchanted Dominion adapts Sleeping Beauty (1959) and holds a special place: it is where the saga finally gives Maleficent, the antagonist of Kingdom Hearts and leader of the Disney villains, an origin. The game keeps the film's outline — the spindle's curse, the kingdom asleep under thorns, the three good fairies Flora, Fauna and Merryweather, Prince Phillip and the dragon — but grafts onto it the decisive meeting with Xehanort.\n\nThe visit covers King Stefan's castle and throne room, the tower where Aurora succumbs to the curse, the forest, and then the Forbidden Mountain, Maleficent's lair guarded by her servants. The final confrontation pits the heroes against Maleficent herself, including in dragon form, in the thorns at the foot of the castle.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Terra parvient au château alors qu'Aurore vient de s'effondrer. Maléfique, qui a déjà reçu de Xehanort l'idée que les Princesses de Cœur détiennent une lumière sans ténèbres, persuade le jeune homme d'extraire le cœur endormi de la princesse avec sa Keyblade, en lui présentant le geste comme une protection. Terra obéit, comprend trop tard qu'il vient d'offrir un cœur pur à une sorcière, et repart avec un remords de plus.\n\nVentus arrive sur les traces de son ami, apprend des trois fées ce qui s'est passé et s'introduit à la Montagne Interdite pour reprendre le cœur volé. Aqua conclut : elle libère le prince Philippe des geôles de Maléfique, l'escorte jusqu'au château et l'aide à terrasser la sorcière changée en dragon, ce qui permet de rendre son cœur à Aurore. Le monde explique ainsi comment Maléfique apprendra à collectionner les Princesses de Cœur dans Kingdom Hearts. Chaque scénario s'achève sur la Keyblade Astres féériques.",
          "Terra reaches the castle just as Aurora has collapsed. Maleficent, who has already been given by Xehanort the idea that Princesses of Heart hold a light with no darkness, persuades the young man to draw out the sleeping princess's heart with his Keyblade, presenting the act as protection. Terra obeys, realises too late that he has handed a pure heart to a witch, and leaves with one more regret.\n\nVentus arrives on his friend's trail, learns from the three fairies what happened and breaks into the Forbidden Mountain to take back the stolen heart. Aqua closes the story: she frees Prince Phillip from Maleficent's dungeons, escorts him to the castle and helps him strike down the witch turned dragon, which allows Aurora's heart to be returned. The world thus explains how Maleficent will learn to collect Princesses of Heart in Kingdom Hearts. Each scenario ends with the Fairy Stars Keyblade.",
        ),
      },
    ],
    trivia: [
      L("Aurore fait partie des sept Princesses de Cœur enlevées par Maléfique dans Kingdom Hearts, mais son monde n'y est pas visitable.", "Aurora is one of the seven Princesses of Heart kidnapped by Maleficent in Kingdom Hearts, though her world cannot be visited there."),
      L("Le sommeil d'Aurore fait écho à celui des mondes de Dream Drop Distance, où le motif du monde endormi devient un ressort de jeu.", "Aurora's sleep echoes the Sleeping Worlds of Dream Drop Distance, where the sleeping-world motif becomes a game mechanic."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Enchanted Dominion", url: "https://kingdomhearts.fandom.com/wiki/Enchanted_Dominion" },
    ],
  },

  // ─────────────────────────── La Cité des Cloches ───────────────────────────
  "la-cite-des-cloches": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Cité des Cloches adapte Le Bossu de Notre-Dame (1996) et porte, fait rare, un nom français jusque dans la version japonaise du jeu. Le monde reconstitue le Paris médiéval du film : le parvis et les combles de Notre-Dame, le beffroi où vit Quasimodo, les toits et les places où se tient la Fête des Fous, et la Cour des Miracles où se cachent les bohémiens.\n\nComme tous les mondes de Dream Drop Distance, il s'agit d'un Monde Endormi : le lieu n'a jamais été libéré des ténèbres après la première guerre, et ses habitants n'y sont que des rêves. Les ennemis y sont des Avale-Rêves, Esprits alliés ou Cauchemars hostiles, et le boss commun aux deux héros est le Wargoyle, une gargouille de feu qui s'envole autour de la cathédrale.",
          "La Cité des Cloches adapts The Hunchback of Notre Dame (1996) and, unusually, keeps a French name even in the Japanese version of the game. The world recreates the film's medieval Paris: the square and rafters of Notre-Dame, the bell tower where Quasimodo lives, the roofs and squares hosting the Feast of Fools, and the Court of Miracles where the gypsies hide.\n\nLike every world in Dream Drop Distance, it is a Sleeping World: the place was never freed from darkness after the first war, and its inhabitants are only dreams. Its enemies are Dream Eaters, friendly Spirits or hostile Nightmares, and the boss shared by both heroes is the Wargoyle, a fiery gargoyle that circles the cathedral in flight.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora tombe dans la cité en pleine Fête des Fous et prend la défense de Quasimodo, humilié par la foule, avant d'aider Esmeralda et le capitaine Phœbus à protéger les bohémiens des rafles du juge Frollo. Décidé à pousser le sonneur à sortir de son beffroi, il assiste à la traque d'Esmeralda et à l'embrasement du quartier.\n\nRiku, qui traverse le même monde à un autre moment du rêve, voit surtout Frollo se laisser dévorer par sa propre haine : le juge attire les Cauchemars, en perd le contrôle et disparaît, englouti par les ténèbres qu'il avait appelées. Les deux héros affrontent le Wargoyle, Riku l'achevant au sommet de Notre-Dame. Sora en rapporte la Keyblade Cloche gardienne. Le monde illustre l'un des fils de l'examen de Maîtrise : les ténèbres que l'on refuse de voir en soi finissent par prendre forme, leçon que Riku, seul, entend vraiment.",
          "Sora falls into the city in the middle of the Feast of Fools and stands up for Quasimodo, humiliated by the crowd, before helping Esmeralda and Captain Phoebus shield the gypsies from Judge Frollo's raids. Determined to coax the bell-ringer out of his tower, he witnesses the hunt for Esmeralda and the burning of the district.\n\nRiku, who crosses the same world at another point of the dream, mostly sees Frollo devoured by his own hatred: the judge draws the Nightmares in, loses control of them and vanishes, swallowed by the darkness he summoned. Both heroes fight the Wargoyle, Riku finishing it atop Notre-Dame. Sora brings back the Guardian Bell Keyblade. The world illustrates one of the exam's threads: the darkness one refuses to see in oneself eventually takes shape — a lesson only Riku truly hears.",
        ),
      },
    ],
    trivia: [
      L("C'est le seul monde de la saga dont le nom officiel est en français dans toutes les versions, y compris japonaise.", "It is the only world in the series whose official name is French in every version, including the Japanese one."),
      L("Le monde reprend des arrangements des chansons du film, chose rare dans la saga, qui privilégie d'ordinaire des compositions originales.", "The world reuses arrangements of the film's songs, a rarity in a series that usually favours original compositions."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — La Cité des Cloches", url: "https://kingdomhearts.fandom.com/wiki/La_Cit%C3%A9_des_Cloches" },
    ],
  },

  // ─────────────────────────── Jungle Profonde ───────────────────────────
  "deep-jungle": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Jungle Profonde adapte Tarzan (1999). Le monde reprend la trame du film : un homme élevé par les gorilles, l'arrivée d'une expédition anglaise avec Jane et le professeur Porter, la méfiance du chef Kerchak et la duplicité du chasseur Clayton, qui veut capturer les gorilles.\n\nL'exploration se fait en trois blocs : la canopée et l'arbre où l'on atterrit, avec ses descentes en glissade sur les branches et les lianes, le campement de l'expédition, et enfin la falaise aux bambous puis la caverne derrière la cascade, où le gorille Terk mène jusqu'à la Serrure du monde. Le panneau d'affrontements comprend la panthère Sabor, croisée plusieurs fois, et le duo final Clayton et Stealth Sneak, un Sans-cœur caméléon capable de devenir invisible. Le monde n'est jamais réapparu depuis Kingdom Hearts.",
          "Deep Jungle adapts Tarzan (1999). The world keeps the film's plot: a man raised by gorillas, the arrival of an English expedition with Jane and Professor Porter, the distrust of the leader Kerchak and the duplicity of the hunter Clayton, who wants to capture the gorillas.\n\nExploration is split into three blocks: the canopy and the tree where the party lands, with its slides down branches and vines, the expedition camp, and finally the bamboo cliff and the cavern behind the waterfall, where the gorilla Terk leads to the world's Keyhole. The roster of fights includes the panther Sabor, met several times, and the final pair of Clayton and Stealth Sneak, a chameleon Heartless able to turn invisible. The world has never returned since Kingdom Hearts.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le vaisseau Gummi s'écrase et disperse le groupe : Sora se réveille seul dans une cabane et rencontre Tarzan, qui lui parle d'« amis » et le conduit au campement. Donald refuse d'abord de fouiller ce monde, où le roi Mickey ne peut pas se trouver, et le trio se sépare pour de bon le temps de quelques scènes — première dispute réelle entre les trois compagnons, et première fois que Sora doit avancer seul.\n\nClayton, lui, s'est allié aux Sans-cœur pour débusquer le nid des gorilles. Après avoir mené la chasse contre l'expédition et retourné Kerchak contre les humains, il attaque au pied de la falaise, monté sur le Stealth Sneak, et disparaît avec lui. Tarzan mène ensuite Sora derrière la cascade : les dessins de la caverne cachent la Serrure, que Sora scelle en recevant la Keyblade Primitive. Le monde règle la brouille du trio et fixe le mot d'ordre du jeu : ce sont les amis qui font la force.",
          "The Gummi Ship crashes and scatters the group: Sora wakes alone in a treehouse and meets Tarzan, who speaks to him of “friends” and leads him to the camp. Donald at first refuses to search a world where King Mickey cannot be, and the trio truly splits for a few scenes — their first real quarrel, and the first time Sora must press on alone.\n\nClayton, meanwhile, has allied with the Heartless to flush out the gorillas' nest. After leading the hunt against the expedition and turning Kerchak against the humans, he attacks at the foot of the cliff riding the Stealth Sneak, and vanishes with it. Tarzan then takes Sora behind the waterfall: the drawings in the cavern hide the Keyhole, which Sora seals while receiving the Jungle King Keyblade. The world settles the trio's quarrel and sets the game's motto: friends are what give strength.",
        ),
      },
    ],
    trivia: [
      L("La Jungle Profonde n'apparaît dans aucun autre épisode de la saga, y compris dans les remakes et les jeux qui recyclent les mondes de Kingdom Hearts.", "Deep Jungle appears in no other entry of the series, not even in the remakes and games that recycle the Kingdom Hearts worlds."),
      L("Le monde a failli être coupé du jeu en cours de développement, faute de temps, avant d'être maintenu par l'équipe.", "The world was nearly cut during development for lack of time, before the team kept it in."),
      L("Sabor, la panthère, sert de mini-boss récurrent et compte parmi les adversaires optionnels les plus coriaces du début du jeu.", "Sabor the panther acts as a recurring mini-boss and is one of the toughest optional foes early in the game."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Deep Jungle", url: "https://kingdomhearts.fandom.com/wiki/Deep_Jungle" },
    ],
  },

  // ─────────────────────────── Monstro ───────────────────────────
  "monstro": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Monstro vient de Pinocchio (1940), dont il reprend la baleine géante qui avale Geppetto parti chercher sa marionnette. La saga en fait une singularité : Monstro n'est pas une terre mais une créature errant dans l'espace entre les mondes, capable d'engloutir un vaisseau Gummi en plein vol, ce qui rend son accès purement accidentel.\n\nL'intérieur se parcourt comme un donjon organique : la Bouche, où l'on atterrit, puis une série de Chambres numérotées reliées par des passages de chair et des tendons servant de tremplins, jusqu'à l'estomac où la bile ronge le décor. Le boss du monde est le Parasite Cage, un Sans-cœur difforme accroché aux parois, affronté deux fois. Monstro n'a pas de Serrure : c'est un des rares mondes du premier jeu où Sora n'a rien à sceller.",
          "Monstro comes from Pinocchio (1940), taking from it the giant whale that swallows Geppetto when he goes looking for his puppet. The series makes it a one-off: Monstro is not a land but a creature roaming the space between worlds, able to swallow a Gummi Ship in mid-flight, which makes reaching it purely accidental.\n\nThe interior is travelled like an organic dungeon: the Mouth, where the party lands, then a series of numbered Chambers linked by fleshy passages and tendons used as springboards, down to the stomach where bile eats away at the scenery. The world's boss is the Parasite Cage, a misshapen Heartless clinging to the walls, fought twice. Monstro has no Keyhole: it is one of the few worlds in the first game where Sora has nothing to seal.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Avalés en route, Sora, Donald et Dingo tombent dans la baleine et y retrouvent Pinocchio, puis Geppetto, réfugié dans les entrailles avec sa maison de fortune. Riku est là lui aussi, désormais au service de Maléfique : il enlève la marionnette et cherche à comprendre comment un pantin de bois peut posséder un cœur, dans l'espoir de reconstituer celui de Kairi. Sa confrontation avec Sora est la première depuis la chute des Îles du Destin, et la plus froide.\n\nLe Parasite Cage engloutit Pinocchio, que Sora libère au terme du combat, puis reparaît quand Monstro, furieux, se secoue entièrement. Une fois le groupe recraché, Geppetto et Pinocchio s'installent en Ville de Traverse, dans le Troisième District ; c'est là que Geppetto offre à Sora la Keyblade Bonne Étoile. Le monde installe surtout une question qui portera toute la saga : un être sans corps de chair peut-il avoir un cœur ?",
          "Swallowed on the way, Sora, Donald and Goofy fall inside the whale and find Pinocchio, then Geppetto, sheltering in the guts with his makeshift house. Riku is there too, now serving Maleficent: he takes the puppet away and tries to understand how a wooden figure can hold a heart, hoping to rebuild Kairi's. His confrontation with Sora is the first since the fall of Destiny Islands, and the coldest.\n\nThe Parasite Cage swallows Pinocchio, whom Sora frees at the end of the fight, then reappears when a furious Monstro shakes himself entirely. Once the group is spat out, Geppetto and Pinocchio settle in Traverse Town's Third District; it is there that Geppetto gives Sora the Wishing Star Keyblade. Above all, the world raises a question that will carry the whole saga: can a being without a body of flesh have a heart?",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, Monstro est recréé à partir des souvenirs de Sora sous forme de carte de monde. La baleine est identique, mais l'épisode se réduit à l'essentiel : Pinocchio disparaît dans les couloirs, Geppetto s'inquiète, et Sora part le chercher jusqu'à l'estomac où l'attend de nouveau le Parasite Cage.\n\nComme dans tous les étages, la reconstitution est faussée : Jiminy note que ses souvenirs ne concordent pas, et l'illusion sert surtout à faire avancer la manipulation de Naminé. Monstro figure aussi parmi les mondes de la Rétro-genèse de Riku, où il permet de retrouver des ténèbres déjà vaincues. Le monde disparaît ensuite de la saga en tant que tel : seule sa carcasse est réutilisée dans Dream Drop Distance, comme seconde moitié du Paradis des Garnements.",
          "In Castle Oblivion, Monstro is recreated from Sora's memories as a world card. The whale is identical, but the episode is boiled down to essentials: Pinocchio disappears into the passages, Geppetto worries, and Sora goes looking for him down to the stomach, where the Parasite Cage waits again.\n\nAs on every floor, the recreation is skewed: Jiminy notes that his records do not match, and the illusion mainly serves to advance Naminé's manipulation. Monstro also appears among the worlds of Riku's Reverse/Rebirth, where it lets him face darkness already defeated. The world then leaves the saga as such: only its carcass is reused in Dream Drop Distance, as the second half of Prankster's Paradise.",
        ),
      },
    ],
    trivia: [
      L("Monstro est l'un des rares mondes de Kingdom Hearts dépourvu de Serrure, avec la Fin du Monde et le Colisée de l'Olympe.", "Monstro is one of the few Kingdom Hearts worlds with no Keyhole, along with End of the World and Olympus Coliseum."),
      L("On y accède en étant avalé lors d'un vol Gummi, sans jamais avoir à l'atteindre volontairement.", "It is reached by being swallowed during Gummi flight, without ever having to aim for it deliberately."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Monstro", url: "https://kingdomhearts.fandom.com/wiki/Monstro" },
    ],
  },

  // ─────────────────────────── Terre des Lions ───────────────────────────
  "pride-lands": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Terre des Lions adapte Le Roi Lion (1994) et couvre la seconde moitié du film : l'exil de Simba, sa vie insouciante avec Timon et Pumbaa, le retour de Nala et la reconquête du Rocher des Lions sur Scar et les hyènes. Kingdom Hearts II y ajoute une suite inédite, où l'ombre du roi déchu continue de hanter la savane.\n\nSa particularité est la transformation : pour se fondre dans un monde sans humains, Sora devient un lionceau, Donald un oiseau et Dingo une tortue. Le lionceau se bat à quatre pattes, avec un jeu de commandes et des combos remaniés, et perd l'usage des formes fusionnées, ce qui fait de ce monde l'un des plus dépaysants du jeu. On parcourt la savane, les gorges, les terres d'éléphants et la jungle de l'oasis. La première visite s'achève sur le duel contre Scar, la seconde sur le colossal Sans-cœur Groundshaker.",
          "Pride Lands adapts The Lion King (1994) and covers the film's second half: Simba's exile, his carefree life with Timon and Pumbaa, Nala's return and the reconquest of Pride Rock from Scar and the hyenas. Kingdom Hearts II adds an original follow-up in which the fallen king's shadow keeps haunting the savanna.\n\nIts distinctive feature is transformation: to blend into a world without humans, Sora becomes a lion cub, Donald a bird and Goofy a tortoise. The cub fights on all fours, with reworked commands and combos, and loses access to Drive Forms, which makes this one of the game's most disorienting worlds. The savanna, the gorge, the elephant graveyard and the oasis jungle are explored. The first visit ends with the duel against Scar, the second with the colossal Groundshaker Heartless.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora débarque dans une savane desséchée, tenue par Scar et ses hyènes, et se voit intronisé par le sage Rafiki comme celui qui ramènera le roi. Retrouvé dans l'oasis avec Timon et Pumbaa, Simba refuse d'abord d'affronter son passé ; Nala et l'insistance de Sora finissent par le décider. La remontée jusqu'au Rocher des Lions s'achève sur le combat contre Scar, vaincu et jeté dans les flammes par son propre frère de meute. Sora en repart avec la Keyblade Cercle vital.\n\nLors de la seconde visite, le fantôme de Scar hante la savane et instille le doute dans le cœur de Simba, tandis que les hyènes tentent un retour. Sora poursuit le spectre à travers les gorges avant que la peur accumulée n'engendre le Groundshaker, une bête gigantesque qu'il faut combattre en courant sur son dos. La victoire libère Simba de son doute et clôt le monde ; l'ancien esprit d'invocation de Kingdom Hearts est ainsi devenu un allié à part entière.",
          "Sora lands in a parched savanna held by Scar and his hyenas, and is anointed by the wise Rafiki as the one who will bring the king back. Found in the oasis with Timon and Pumbaa, Simba at first refuses to face his past; Nala and Sora's insistence finally convince him. The climb to Pride Rock ends with the fight against Scar, defeated and thrown into the flames by his own pack. Sora leaves with the Circle of Life Keyblade.\n\nOn the second visit, Scar's ghost haunts the savanna and sows doubt in Simba's heart, while the hyenas attempt a comeback. Sora chases the spectre through the gorge before the accumulated fear gives birth to the Groundshaker, a gigantic beast that must be fought while running along its back. Victory frees Simba from his doubt and closes the world; the former summon spirit of Kingdom Hearts has become a full ally.",
        ),
      },
    ],
    trivia: [
      L("Le monde figurait dans les projets de Kingdom Hearts premier du nom, mais la difficulté à animer des personnages quadrupèdes l'a repoussé à Kingdom Hearts II.", "The world was planned for the first Kingdom Hearts, but the difficulty of animating four-legged characters pushed it back to Kingdom Hearts II."),
      L("Simba était un esprit d'invocation dans Kingdom Hearts avant de devenir un compagnon de route dans la Terre des Lions.", "Simba was a summon spirit in Kingdom Hearts before becoming a travelling companion in the Pride Lands."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Pride Lands", url: "https://kingdomhearts.fandom.com/wiki/Pride_Lands" },
    ],
  },

  // ─────────────────────────── Terre des Dragons ───────────────────────────
  "land-of-dragons": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Terre des Dragons adapte Mulan (1998) : une jeune femme prend la place de son père à l'armée sous le nom de Ping, se fait passer pour un homme et sauve la Chine de l'invasion des Huns. Le jeu suit fidèlement le film, du camp d'entraînement du capitaine Shang à l'avalanche du col enneigé, jusqu'à la Cité impériale prise par Shan-Yu.\n\nLe monde se traverse en trois grands décors : le camp et le sentier de montagne, le col enneigé où l'on déclenche l'avalanche, et la place et le palais de la Cité impériale. Mushu, ancienne invocation de Kingdom Hearts, y joue son rôle de dragon gardien et sert de commentaire comique. La première visite se conclut par le combat contre Shan-Yu et son faucon ; la seconde par le Sans-cœur Storm Rider, un dragon de foudre affronté sur les toits du palais.",
          "Land of Dragons adapts Mulan (1998): a young woman takes her father's place in the army under the name Ping, passes as a man and saves China from the Hun invasion. The game follows the film closely, from Captain Shang's training camp to the avalanche in the snowy pass, up to the Imperial City taken by Shan-Yu.\n\nThe world is crossed in three main settings: the camp and mountain trail, the snowy pass where the avalanche is triggered, and the square and palace of the Imperial City. Mushu, a former Kingdom Hearts summon, plays his guardian-dragon role and provides the comic relief. The first visit concludes with the fight against Shan-Yu and his falcon; the second with the Storm Rider Heartless, a lightning dragon fought on the palace roofs.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo s'engagent aux côtés de Ping pour l'aider à intégrer l'armée de Shang, et la troupe se distingue en repoussant les Sans-cœur qui accompagnent l'avancée des Huns. Dans le col, Sora provoque l'avalanche qui ensevelit l'armée de Shan-Yu ; le secret de Mulan est alors éventé, et Shang, malgré la loi, lui laisse la vie sauve. À la Cité impériale, Shan-Yu, qui a survécu, s'empare du palais avant d'être vaincu : Sora obtient la Keyblade Dragon Tapi.\n\nLa seconde visite ouvre sur une silhouette encapuchonnée que Sora prend pour un membre de l'Organisation XIII et poursuit à travers la ville : il s'agit en réalité de Riku, qui garde son visage caché depuis qu'il a pris celui d'Ansem. Xigbar, lui, observe vraiment la scène et évoque devant Sora un porteur de Keyblade qu'il aurait connu. Le combat contre le Storm Rider referme le monde, mais ces deux rencontres sont la véritable avancée : la piste de Riku et le premier indice sur le passé de Xehanort.",
          "Sora, Donald and Goofy enlist alongside Ping to help her fit into Shang's army, and the squad stands out by pushing back the Heartless that accompany the Huns' advance. In the pass, Sora triggers the avalanche that buries Shan-Yu's army; Mulan's secret is then exposed, and Shang, against the law, spares her life. In the Imperial City, Shan-Yu, who survived, seizes the palace before being defeated: Sora obtains the Hidden Dragon Keyblade.\n\nThe second visit opens on a hooded figure Sora takes for an Organization XIII member and chases through the city: it is in fact Riku, who has kept his face hidden since taking Ansem's. Xigbar, meanwhile, really is watching, and mentions to Sora a Keyblade wielder he once knew. The Storm Rider fight closes the world, but those two encounters are the real progress: Riku's trail, and the first hint about Xehanort's past.",
        ),
      },
    ],
    trivia: [
      L("Mushu apparaissait déjà dans Kingdom Hearts comme esprit d'invocation, appelé grâce au miroir magique.", "Mushu already appeared in Kingdom Hearts as a summon spirit, called through the magic mirror."),
      L("La Terre des Dragons figure aussi parmi les mondes reconstitués du Datascape dans Re:coded.", "Land of Dragons is also among the worlds recreated in the Datascape in Re:coded."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — The Land of Dragons", url: "https://kingdomhearts.fandom.com/wiki/The_Land_of_Dragons" },
    ],
  },

  // ─────────────────────────── Royaume de Corona ───────────────────────────
  "kingdom-of-corona": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Royaume de Corona adapte Raiponce (2010) : une princesse enlevée bébé pour ses cheveux magiques, élevée dans une tour par Mère Gothel, et le voleur Flynn Rider qui l'entraîne dehors le jour de la fête des lanternes. Kingdom Hearts III en reprend le déroulé complet, de l'évasion de la tour au repaire du Canard Boiteux, jusqu'au retour de la jeune fille auprès de ses parents.\n\nLe monde s'ouvre sur une grande forêt en trois parties, dessinée pour les acrobaties de la Keyblade et les glissades sur les rochers, puis sur le village de Corona et son port. La ville accueille un mini-jeu de danse pendant la fête, et le ciel se remplit de lanternes lors d'une scène en bateau reprise du film. Le boss est le Sans-cœur Grim Guardianess, une créature de ronces et de branches née de Gothel, affrontée devant la tour.",
          "Kingdom of Corona adapts Tangled (2010): a princess taken as a baby for her magic hair, raised in a tower by Mother Gothel, and the thief Flynn Rider who draws her outside on the day of the lantern festival. Kingdom Hearts III replays the whole arc, from the escape from the tower to the Snuggly Duckling, up to the girl's return to her parents.\n\nThe world opens on a large three-part forest, designed for Keyblade acrobatics and slides down rocks, then on the village of Corona and its harbour. The town hosts a dance mini-game during the festival, and the sky fills with lanterns in a boat scene taken from the film. The boss is the Grim Guardianess Heartless, a creature of thorns and branches born from Gothel, fought in front of the tower.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo croisent Raiponce et Flynn au sortir de la tour et se joignent à eux pour la route, apprenant à la jeune fille ce qu'est le monde du dehors tout en écartant les Sans-cœur attirés par sa lumière. Marluxia, ressuscité au sein de la nouvelle Organisation XIII, apparaît à plusieurs reprises : il observe Raiponce et cherche à savoir si elle compte parmi les Nouveaux Sept Cœurs que l'Organisation veut réunir pour forger la χ-blade.\n\nGothel, décidée à ramener sa prisonnière, se sert des ténèbres et finit par se perdre dedans : sa rancœur donne naissance au Grim Guardianess. La créature vaincue, Raiponce retrouve ses parents, coupe ses cheveux et referme son histoire, tandis que Sora reçoit la Keyblade À tout jamais. Le monde installe surtout la course de l'Organisation aux Nouveaux Sept Cœurs, qui structurera toute la seconde moitié du jeu, et confirme que Marluxia se souvient mal, mais pas complètement, de son passage au Manoir Oblivion.",
          "Sora, Donald and Goofy meet Rapunzel and Flynn as they leave the tower and join them on the road, teaching the girl what the outside world is while clearing away the Heartless drawn to her light. Marluxia, revived within the new Organization XIII, appears several times: he watches Rapunzel and tries to learn whether she is one of the New Seven Hearts the Organization wants to gather to forge the χ-blade.\n\nGothel, determined to take her prisoner back, uses darkness and ends up lost in it: her spite gives birth to the Grim Guardianess. Once the creature is defeated, Rapunzel finds her parents again, cuts her hair and closes her story, while Sora receives the Ever After Keyblade. Above all the world establishes the Organization's race for the New Seven Hearts, which structures the game's whole second half, and confirms that Marluxia remembers his time in Castle Oblivion poorly, but not entirely.",
        ),
      },
    ],
    trivia: [
      L("Le rendu des cheveux de Raiponce a demandé un travail spécifique à l'équipe, la longueur de la chevelure devant suivre les mouvements de combat.", "Rendering Rapunzel's hair required specific work from the team, since its length had to follow the movements of combat."),
      L("Le mini-jeu de danse de la fête des lanternes reprend le pas de deux du film, et débloque une variante d'attaque de Sora.", "The lantern festival dance mini-game recreates the film's duet and unlocks a variation on Sora's attacks."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Kingdom of Corona", url: "https://kingdomhearts.fandom.com/wiki/Kingdom_of_Corona" },
    ],
  },

  // ─────────────────────────── Monstropolis ───────────────────────────
  "monstropolis": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Monstropolis adapte Monstres & Cie (2001), deuxième monde Pixar de Kingdom Hearts III avec la Boîte à Jouets. Le jeu en reprend le principe : une usine qui alimente une ville de monstres en énergie tirée des cris d'enfants, deux employés vedettes, Sulli et son ami Bob, et une petite fille, Bouh, passée par erreur de l'autre côté d'une porte de placard.\n\nSora, Donald et Dingo y sont métamorphosés pour passer inaperçus : Sora devient un monstre bleu à queue rayée, Donald un oiseau à quatre pattes et Dingo une créature à ressort. On traverse le hall de l'usine, les vestiaires et l'immense entrepôt des portes, où la poursuite se fait sur les rails suspendus, puis la centrale électrique. Le monde s'achève sur le Nescient Lump of Horror, une masse de peur amalgamée, puis sur un duel contre Vanitas.",
          "Monstropolis adapts Monsters, Inc. (2001), the second Pixar world in Kingdom Hearts III alongside Toy Box. The game keeps its premise: a factory powering a city of monsters with energy drawn from children's screams, two star employees, Sulley and his friend Mike, and a little girl, Boo, who came through a closet door by mistake.\n\nSora, Donald and Goofy are transformed to blend in: Sora becomes a blue monster with a striped tail, Donald a four-legged bird and Goofy a spring-loaded creature. The factory lobby, the locker rooms and the vast door vault — where the chase happens on the hanging rails — are crossed, then the power plant. The world ends with the Lump of Horror Unversed, a mass of congealed fear, and then a duel against Vanitas.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Arrivés au milieu de la crise, Sora et ses compagnons aident Sulli et Bob à cacher Bouh puis à la ramener chez elle, tandis que Randall, jaloux, sabote l'usine pour imposer sa machine à extraire les cris. Des Nescients apparaissent alors que ces créatures avaient disparu avec Vanitas : c'est le premier signe que quelque chose cloche.\n\nVanitas se montre en effet, ressuscité par Xehanort, et explique qu'il nourrit les Nescients de la peur des enfants de l'usine. Il révèle à Sora que Ventus dort quelque part et se moque de son incapacité à protéger ceux qu'il aime. La confrontation passe par le Lump of Horror dans la centrale, puis par un combat direct contre Vanitas, qui se retire sans être battu. Bouh est rendue à sa chambre, l'usine passe au rire plutôt qu'au cri, et Sora repart avec la Keyblade Happy Gear et la certitude que l'Organisation a reconstitué ses treize ténèbres.",
          "Arriving in the middle of the crisis, Sora and his companions help Sulley and Mike hide Boo and then bring her home, while a jealous Randall sabotages the factory to impose his scream-extraction machine. Unversed appear even though those creatures had vanished with Vanitas: the first sign that something is wrong.\n\nVanitas indeed shows himself, revived by Xehanort, and explains that he is feeding the Unversed on the fear of the factory's children. He tells Sora that Ventus sleeps somewhere and mocks his inability to protect those he loves. The confrontation goes through the Lump of Horror in the power plant, then a direct fight with Vanitas, who withdraws undefeated. Boo is returned to her bedroom, the factory switches from screams to laughter, and Sora leaves with the Happy Gear Keyblade and the certainty that the Organization has assembled its thirteen darknesses.",
        ),
      },
    ],
    trivia: [
      L("Monstropolis et la Boîte à Jouets sont les deux premiers mondes Pixar de la saga, absents de tous les épisodes antérieurs.", "Monstropolis and Toy Box are the series' first two Pixar worlds, absent from every earlier entry."),
      L("La forme monstre de Sora reprend la fourrure et les cornes typiques des habitants de la ville, avec une queue rayée inspirée du design de Sulli.", "Sora's monster form takes the fur and horns typical of the city's inhabitants, with a striped tail inspired by Sulley's design."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Monstropolis", url: "https://kingdomhearts.fandom.com/wiki/Monstropolis" },
    ],
  },

  // ─────────────────────────── Paradis des Garnements ───────────────────────────
  "pranksters-paradise": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Paradis des Garnements revient à Pinocchio (1940), mais sur une autre partie du film que Monstro : l'Île enchantée, ce parc d'attractions où les garçons paresseux sont attirés par le Cocher pour être changés en ânes et vendus. Le monde en fait un décor de fête foraine éclatant, avec grande roue, montagnes russes, salle de billard et rues de manèges, avant de basculer dans l'océan puis dans le ventre de Monstro, recyclé du premier jeu.\n\nComme les autres Mondes Endormis de Dream Drop Distance, le lieu n'existe que dans le sommeil : Sora et Riku le traversent au même endroit mais à des moments décalés, et n'y croisent que des rêves. Les affrontements majeurs opposent chacun des deux héros à un Avale-Rêves de type Clawbster, un crustacé de cauchemar qui se déplace le long des rails du parc.",
          "Prankster's Paradise returns to Pinocchio (1940), but to a different part of the film than Monstro: Pleasure Island, the amusement park where the Coachman lures lazy boys to be turned into donkeys and sold. The world turns it into a dazzling fairground, with a Ferris wheel, roller coasters, a pool hall and streets of rides, before tipping into the ocean and then into Monstro's belly, recycled from the first game.\n\nLike the other Sleeping Worlds of Dream Drop Distance, the place exists only in sleep: Sora and Riku cross it in the same locations but at offset moments, and meet only dreams. The major fights pit each hero against a Clawbster-type Dream Eater, a nightmare crustacean that travels along the park's rails.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora arrive dans le parc, retrouve Pinocchio parmi les garçons livrés à eux-mêmes et tente de le convaincre de rentrer avant qu'il ne se transforme ; Jiminy, dépassé, court derrière son protégé. Riku, lui, traverse une île déjà en train de se vider et découvre un Pinocchio dont le mensonge attire les Cauchemars, ce qui le pousse à se demander comment un pantin sans cœur véritable peut être englouti par les ténèbres.\n\nLa poursuite se termine dans le ventre de Monstro, où chacun des deux héros affronte son Clawbster. Riku y fait surtout une expérience troublante : il voit une ombre de Sora sombrer, s'y jette pour le rattraper, et sent que quelque chose s'est glissé dans les rêves de son ami — première alerte concrète du piège tendu par l'Organisation. Sora en repart avec la Keyblade Rouage. Le monde prolonge la question ouverte par Monstro dans le premier jeu, appliquée cette fois à Roxas et aux Similis.",
          "Sora arrives in the park, finds Pinocchio among the boys left to themselves and tries to convince him to go home before he transforms; an overwhelmed Jiminy runs after his charge. Riku crosses an island already emptying out and finds a Pinocchio whose lies draw the Nightmares in, which leads him to wonder how a puppet without a true heart can be swallowed by darkness.\n\nThe chase ends in Monstro's belly, where each hero faces his Clawbster. Riku has the more unsettling experience: he sees a shadow of Sora sinking, throws himself after it to catch him, and senses that something has slipped into his friend's dreams — the first concrete warning of the trap set by the Organization. Sora leaves with the Ferris Gear Keyblade. The world extends the question Monstro opened in the first game, applied this time to Roxas and the Nobodies.",
        ),
      },
    ],
    trivia: [
      L("Le monde réutilise l'intérieur de Monstro, visité dans Kingdom Hearts, ce qui en fait le seul monde de Dream Drop Distance à recycler un décor du premier jeu.", "The world reuses Monstro's interior, visited in Kingdom Hearts, making it the only Dream Drop Distance world to recycle a setting from the first game."),
      L("Le nom japonais, プランクスターズ・パラダイス, est une translittération directe de l'anglais Prankster's Paradise.", "The Japanese name, プランクスターズ・パラダイス, is a direct transliteration of the English Prankster's Paradise."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Prankster's Paradise", url: "https://kingdomhearts.fandom.com/wiki/Prankster%27s_Paradise" },
    ],
  },

  // ─────────────────────────── Espace Profond ───────────────────────────
  "deep-space": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Espace Profond adapte Lilo & Stitch (2002), mais uniquement son prologue : le procès du savant Jumba et de son expérience 626, à bord du vaisseau de la Fédération galactique, avant que la créature ne s'échappe vers la Terre. Le monde se situe donc entièrement dans l'espace, ce qui en fait le seul de Birth by Sleep à ne pas poser le pied sur une planète.\n\nOn parcourt la salle du tribunal de la Grande Conseillère, les couloirs et les cellules de détention, la salle des machines et le hangar, certains passages se traversant en apesanteur, avec des changements d'orientation qui rendent la navigation particulière. Les adversaires y sont des Nescients, ainsi que le capitaine Gantu, chargé du transfert du prisonnier. Le boss du monde est le Nescient Metamorphosis, une créature volante qui change de forme, affrontée à bord du vaisseau.",
          "Deep Space adapts Lilo & Stitch (2002), but only its prologue: the trial of the scientist Jumba and his Experiment 626 aboard the Galactic Federation ship, before the creature escapes to Earth. The world therefore takes place entirely in space, making it the only Birth by Sleep world that never sets foot on a planet.\n\nThe visit covers the Grand Councilwoman's courtroom, the corridors and detention cells, the machine room and the hangar, with some passages crossed in zero gravity and shifts of orientation that make navigation unusual. Its opponents are Unversed, along with Captain Gantu, in charge of transferring the prisoner. The world's boss is the Metamorphosis Unversed, a shape-shifting flying creature fought aboard the ship.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Terra arrive pendant le procès et se retrouve accusé d'être un complice de Jumba ; poursuivi dans les couloirs, il doit se justifier auprès de Gantu et de la Grande Conseillère avant de reprendre sa route. Ventus, venu ensuite, croise l'expérience 626 en fuite et se lie à elle : la petite créature, fascinée par son Porte-bonheur, se fabrique un objet semblable, et c'est ce geste maladroit qui lui donne sa première idée de l'amitié.\n\nAqua ferme le passage : elle empêche les Nescients d'infester le vaisseau, affronte le Metamorphosis et laisse 626 s'échapper vers la planète où il rencontrera Lilo. Le monde n'infléchit pas directement le complot de Xehanort, mais il fonde le lien entre Stitch et la saga : la créature deviendra un allié dans Kingdom Hearts II, dans la Forteresse Oubliée, puis un lien d'invocation dans Kingdom Hearts III. Les trois scénarios y débloquent la Keyblade Hyperdrive.",
          "Terra arrives during the trial and is accused of being Jumba's accomplice; chased through the corridors, he has to clear himself with Gantu and the Grand Councilwoman before moving on. Ventus, coming next, meets the escaping Experiment 626 and bonds with it: the small creature, fascinated by his Wayfinder, makes itself a similar object, and that clumsy gesture gives it its first idea of friendship.\n\nAqua closes the sequence: she keeps the Unversed from infesting the ship, fights the Metamorphosis and lets 626 escape towards the planet where it will meet Lilo. The world does not directly bend Xehanort's scheme, but it grounds Stitch's link to the saga: the creature will become an ally in Kingdom Hearts II, in Hollow Bastion, then a summon link in Kingdom Hearts III. All three scenarios unlock the Hyperdrive Keyblade.",
        ),
      },
    ],
    trivia: [
      L("Espace Profond est le seul monde de Birth by Sleep entièrement situé à bord d'un vaisseau, avec des séquences en apesanteur.", "Deep Space is the only Birth by Sleep world set entirely aboard a ship, with zero-gravity sequences."),
      L("Le Porte-bonheur copié par l'expérience 626 explique l'objet que Stitch conserve dans ses apparitions ultérieures.", "The Wayfinder copied by Experiment 626 explains the charm Stitch keeps in his later appearances."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Deep Space", url: "https://kingdomhearts.fandom.com/wiki/Deep_Space" },
    ],
  },

  // ─────────────────────────── Pays des Mousquetaires ───────────────────────────
  "country-of-the-musketeers": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Pays des Mousquetaires adapte Mickey, Donald, Dingo : Les Trois Mousquetaires (2004), un long métrage sorti directement en vidéo, ce qui en fait l'une des adaptations les plus inattendues de la saga. Le monde y transpose les personnages familiers dans un rôle inédit : Mickey, Donald et Dingo sont trois hommes à tout faire rêvant de devenir mousquetaires, Minnie est la princesse à protéger, et Pat, capitaine de la garde, complote avec les Rapetou pour s'emparer du trône.\n\nComme les autres Mondes Endormis de Dream Drop Distance, il n'existe que dans le sommeil, et Sora comme Riku y arrivent décalés dans le temps. On y parcourt la place de la ville, les toits, l'opéra où se joue le complot et la tour où la princesse est enfermée. Le boss du monde est l'Avale-Rêves Holey Moley, une créature aux longs bras affrontée dans les hauteurs.",
          "Country of the Musketeers adapts Mickey, Donald, Goofy: The Three Musketeers (2004), a direct-to-video feature, which makes it one of the series' most unexpected adaptations. The world casts the familiar characters in a new role: Mickey, Donald and Goofy are three janitors dreaming of becoming musketeers, Minnie is the princess to protect, and Pete, captain of the guard, plots with the Beagle Boys to seize the throne.\n\nLike the other Sleeping Worlds of Dream Drop Distance, it exists only in sleep, and Sora and Riku both arrive at offset moments. The town square, the roofs, the opera house where the plot unfolds and the tower where the princess is locked away are all explored. The world's boss is the Holey Moley Dream Eater, a long-armed creature fought up in the heights.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora arrive alors que les trois apprentis viennent d'être nommés gardes du corps de la princesse Minnie par Pat lui-même, qui les croit incapables. Il les épaule contre les Rapetou, encourage Dingo et Donald quand ils flanchent, et voit Mickey se relever seul après chaque échec — le futur roi n'a alors ni Keyblade ni couronne, seulement de l'obstination.\n\nRiku traverse le même monde plus loin dans le rêve : il arrive au moment où le complot éclate à l'opéra, aide à libérer Minnie de la tour et affronte Holey Moley avant que Pat ne soit démasqué. Les deux héros repartent avec une Keyblade tirée du monde, Knockout Punch pour Sora et All for One pour Riku. Le passage n'a pas de conséquence directe sur le complot de Xehanort, mais il sert la thématique de l'examen de Maîtrise : le courage n'est pas donné par un titre, il se prouve, ce qui vaut aussi bien pour Mickey que pour les deux candidats.",
          "Sora arrives just as the three apprentices have been named Princess Minnie's bodyguards by Pete himself, who thinks them useless. He backs them against the Beagle Boys, encourages Goofy and Donald when they falter, and sees Mickey pick himself up alone after every failure — the future king has neither Keyblade nor crown at this point, only stubbornness.\n\nRiku crosses the same world further along the dream: he arrives as the plot breaks out at the opera house, helps free Minnie from the tower and fights Holey Moley before Pete is unmasked. Both heroes leave with a Keyblade from the world, Knockout Punch for Sora and All for One for Riku. The episode has no direct bearing on Xehanort's scheme, but it serves the exam's theme: courage is not granted by a title, it is proven — which holds for Mickey as much as for the two candidates.",
        ),
      },
    ],
    trivia: [
      L("C'est l'un des rares mondes de la saga tiré d'un film sorti directement en vidéo plutôt que d'un long métrage de cinéma.", "It is one of the few worlds in the series drawn from a direct-to-video film rather than a theatrical feature."),
      L("Le monde montre un Mickey antérieur à son règne : dans le rêve, il n'est encore ni roi ni porteur de Keyblade.", "The world shows a Mickey from before his reign: in the dream he is neither king nor Keyblade wielder."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Country of the Musketeers", url: "https://kingdomhearts.fandom.com/wiki/Country_of_the_Musketeers" },
    ],
  },
};
