import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des ennemis (lot A) : les quatre grandes espèces
 * (Sans-cœur, Similis, Nescients, Avale-Rêves) et les boss les plus marquants.
 * Les clés sont les slugs des entrées d'ennemis.
 */
export const lore: Record<string, EntryLore> = {
  // ═══════════════════════════════════ ESPÈCES ═══════════════════════════════════
  "heartless": {
    sections: [
      {
        title: L("Ce qu'est un Sans-cœur", "What a Heartless is"),
        text: L(
          "Un Sans-cœur naît quand les ténèbres l'emportent dans un cœur. Ce cœur arraché à son porteur prend une forme autonome, mue par un seul instinct : trouver d'autres cœurs et les dévorer. Le corps et l'âme abandonnés derrière lui, eux, donnent naissance à un Simili si la volonté du disparu était assez forte. Les Sans-cœur n'ont ni mémoire ni parole ; les plus faibles rampent au ras du sol, les plus évolués manient armes et sortilèges.\n\nOn les partage en deux familles. Les Pur-sang, entièrement noirs et parcourus d'antennes, apparaissent naturellement là où les ténèbres s'accumulent : Ombres, Néo-Ombres, Invisibles, Darkside. Les Emblèmes portent au contraire un blason rouge et noir en forme de cœur barré d'une croix : ils sont le produit des expériences menées dans les laboratoires du Jardin Radieux. Un Sans-cœur détruit par une arme ordinaire se reforme ; seule la Keyblade libère le cœur prisonnier, qui rejoint alors Kingdom Hearts.",
          "A Heartless is born when darkness wins out inside a heart. Torn from its bearer, that heart takes on a shape of its own, driven by a single instinct: to find other hearts and devour them. The body and soul left behind give rise to a Nobody, provided the vanished person's will was strong enough. Heartless have neither memory nor speech; the weakest crawl along the ground, the more evolved wield weapons and spells.\n\nThey fall into two families. Purebloods, entirely black and crowned with antennae, appear naturally wherever darkness pools: Shadows, Neoshadows, Invisibles, Darksides. Emblem Heartless instead bear a red-and-black crest shaped like a heart crossed out by a spiked cross: they are the product of the experiments run in the laboratories of Radiant Garden. A Heartless destroyed by an ordinary weapon simply reforms; only the Keyblade releases the captive heart, which then returns to Kingdom Hearts.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Les Sans-cœur sont l'ennemi de toute l'aventure de Sora. Ils s'abattent sur les Îles du Destin la nuit où le monde s'effondre, dévorent le cœur de l'île et dispersent les trois amis. Sora se réveille à la Ville de Traverse, où Léon lui explique qu'ils sont attirés par la lumière des cœurs et qu'ils progressent de monde en monde par les couloirs de ténèbres.\n\nMaléfique, entourée des grands méchants Disney, croit les commander ; en réalité ils obéissent à Ansem, Sans-cœur du savant Xehanort, qui veut ouvrir la porte de Kingdom Hearts. C'est en verrouillant les serrures des mondes, une à une, que Sora les empêche de les dévorer. À Hollow Bastion, il se transperce lui-même avec la Keyblade des cœurs pour libérer Kairi : il devient brièvement une Ombre, avant que la volonté de ses amis ne le ramène.",
          "The Heartless are the enemy of Sora's entire journey. They fall upon Destiny Islands the night the world collapses, devour the island's heart and scatter the three friends. Sora wakes in Traverse Town, where Leon explains that they are drawn to the light of hearts and travel from world to world through corridors of darkness.\n\nMaleficent, surrounded by the great Disney villains, believes she commands them; in truth they answer to Ansem, the Heartless of the scholar Xehanort, who wants to open the door to Kingdom Hearts. By sealing the worlds' keyholes one by one, Sora keeps them from being devoured. At Hollow Bastion he stabs himself with the Keyblade of people's hearts to free Kairi: he briefly becomes a Shadow, until his friends' will brings him back.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Un an plus tard, les Sans-cœur pullulent de nouveau, mais ils ne sont plus qu'un outil. L'Organisation XIII les laisse proliférer et charge Roxas, puis Sora, de les abattre : chaque Sans-cœur tué par une Keyblade libère un cœur qui va grossir le Kingdom Hearts artificiel que Xemnas assemble au-dessus du Monde qui n'existe pas.\n\nMaléfique et Pat tentent d'en reprendre le contrôle et lancent la bataille des Mille Sans-cœur contre le Jardin Radieux, où Sora, le roi Mickey et les défenseurs de la ville les repoussent. Le jeu introduit aussi les Sans-cœur nés d'un cœur unique et fort, comme Ombre Chevalier, et montre que la lune de cœurs de l'Organisation ne peut se remplir sans ce massacre organisé.",
          "A year later the Heartless swarm again, but they are now merely a tool. Organization XIII lets them multiply and sends Roxas, then Sora, to cut them down: every Heartless slain by a Keyblade releases a heart that swells the artificial Kingdom Hearts Xemnas is assembling above The World That Never Was.\n\nMaleficent and Pete try to take them back and launch the Battle of 1000 Heartless against Radiant Garden, where Sora, King Mickey and the town's defenders drive them off. The game also introduces Heartless born from a single powerful heart, such as the Dark Thorn, and shows that the Organization's moon of hearts cannot fill without this organised slaughter.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans Kingdom Hearts III, la Vraie Organisation XIII se sert des Sans-cœur comme d'une armée jetable. Sora en croise dans chaque monde visité, mais les rencontres marquantes sont les masses collectives : la Tour Démoniaque qui l'assaille dès la Cité du Crépuscule, puis la Marée Démoniaque qui, au Cimetière des Keyblades, engloutit tous les Gardiens de la Lumière.\n\nCette défaite pousse Sora à user du pouvoir de l'éveil pour remonter le temps et sauver ses amis, geste qui finira par lui coûter son existence. Le jeu rappelle aussi que Xehanort, en réunissant sept lumières et treize ténèbres, n'a plus besoin des Sans-cœur pour ouvrir Kingdom Hearts : ils ne sont plus que la marée qu'il déchaîne pour épuiser ses adversaires.",
          "In Kingdom Hearts III the Real Organization XIII uses the Heartless as a disposable army. Sora meets them in every world he visits, but the memorable encounters are the collective masses: the Demon Tower that assails him as early as Twilight Town, then the Demon Tide that swallows every Guardian of Light at the Keyblade Graveyard.\n\nThat defeat pushes Sora to use the power of waking to turn back time and save his friends, a gesture that will ultimately cost him his existence. The game also reminds us that Xehanort, by gathering seven lights and thirteen darknesses, no longer needs the Heartless to open Kingdom Hearts: they are just the tide he unleashes to wear his opponents down.",
        ),
      },
    ],
    trivia: [
      L(
        "L'emblème des Sans-cœur emblèmes — un cœur barré d'une croix pointue — est l'inverse de celui des Nescients, un cœur renversé.",
        "The Emblem Heartless crest — a heart crossed by a spiked cross — is the inverse of the Unversed's, an upside-down heart.",
      ),
      L(
        "Le nom japonais est simplement la transcription de l'anglais, ハートレス (Hātoresu).",
        "The Japanese name is simply a transcription of the English one, ハートレス (Hātoresu).",
      ),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Heartless", url: "https://kingdomhearts.fandom.com/wiki/Heartless" }],
  },

  "nobodies": {
    sections: [
      {
        title: L("Ce qu'est un Simili", "What a Nobody is"),
        text: L(
          "Quand les ténèbres arrachent un cœur, le corps et l'âme qui restent ne disparaissent pas toujours. Si la volonté du disparu était assez forte, ils continuent d'agir : c'est un Simili. Privé de cœur, il n'existe officiellement pas — d'où son nom, « celui qui n'est personne » — et l'Organisation XIII enseigne à ses membres qu'ils ne peuvent rien ressentir et se contentent d'imiter les émotions dont ils gardent le souvenir.\n\nLes Similis nés d'une volonté exceptionnelle conservent une apparence humaine et un nom formé de celui d'origine augmenté d'un X. Les autres deviennent des créatures pâles, souples et contorsionnées, marquées d'un emblème blanc échancré : Reflets, Danseurs, Samouraïs, Sorciers, Assassins… Chaque membre de l'Organisation commande la famille qui correspond à son attribut. Détruire un Simili sans détruire son Sans-cœur ne ramène personne ; il faut les vaincre tous deux pour que la personne d'origine renaisse.",
          "When darkness tears a heart away, the body and soul left behind do not always vanish. If the lost person's will was strong enough, they keep acting: that is a Nobody. Lacking a heart, it officially does not exist — hence the name — and Organization XIII teaches its members that they can feel nothing and merely mimic the emotions they remember.\n\nNobodies born of an exceptional will keep a human shape and a name formed from the original one plus an X. The others become pale, supple, contorted creatures marked with a white notched emblem: Dusks, Dancers, Samurai, Sorcerers, Assassins… Each Organization member commands the family matching their attribute. Destroying a Nobody without destroying its Heartless brings no one back; both must fall for the original person to be reborn.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Les Similis apparaissent pour la première fois au Manoir Oblivion, sans que le mot soit encore prononcé. Marluxia, Larxene, Vexen, Lexaeus et Zexion y attirent Sora pour le transformer en arme, tandis qu'Axel joue double jeu et que Naminé récrit les souvenirs du garçon carte après carte.\n\nLe jeu ne montre presque aucun Simili commun — les ennemis sont des Sans-cœur nés des souvenirs de Sora — mais il installe l'Organisation en manipulateurs froids, capables de fabriquer un réplica de Riku de toutes pièces. La révélation de leur nature attendra Kingdom Hearts II ; ici, ils ne sont encore que des silhouettes en manteau noir dont on ignore ce qu'elles veulent.",
          "Nobodies first appear at Castle Oblivion, though the word itself is not yet spoken. Marluxia, Larxene, Vexen, Lexaeus and Zexion lure Sora there to turn him into a weapon, while Axel plays a double game and Naminé rewrites the boy's memories card by card.\n\nThe game shows almost no common Nobodies — the enemies are Heartless born from Sora's memories — but it establishes the Organization as cold manipulators, able to build a Riku Replica from nothing. The reveal of their nature waits for Kingdom Hearts II; here they are still only black-coated silhouettes whose goals remain unknown.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Kingdom Hearts II fait des Similis l'antagoniste principal. Le prologue les montre traquant Roxas dans la Cité du Crépuscule virtuelle, et Yen Sid explique enfin à Sora ce qu'ils sont. Les Reflets, Danseurs, Samouraïs, Sorciers et Assassins accompagnent chaque apparition d'un membre de l'Organisation.\n\nXemnas, Simili de Xehanort, dirige le groupe depuis le Monde qui n'existe pas et fait miroiter à ses subordonnés un cœur qu'ils obtiendraient une fois Kingdom Hearts achevé. Sora abat les membres un à un — Demyx, Xaldin, Xigbar, Luxord, Saïx — avant d'affronter Xemnas lui-même. L'épilogue montre pourtant Axel se sacrifiant pour Sora et Roxas acceptant de retourner en lui : le jeu commence à démentir le dogme selon lequel les Similis ne ressentent rien.",
          "Kingdom Hearts II makes the Nobodies its main antagonists. The prologue shows them hunting Roxas through the virtual Twilight Town, and Yen Sid finally explains to Sora what they are. Dusks, Dancers, Samurai, Sorcerers and Assassins accompany every appearance of an Organization member.\n\nXemnas, Xehanort's Nobody, leads the group from The World That Never Was and dangles before his subordinates the promise of a heart once Kingdom Hearts is complete. Sora cuts the members down one by one — Demyx, Xaldin, Xigbar, Luxord, Saïx — before facing Xemnas himself. Yet the epilogue shows Axel sacrificing himself for Sora and Roxas agreeing to return within him: the game starts to contradict the dogma that Nobodies feel nothing.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Kingdom Hearts III tranche la question. Vexen, revenu dans la Vraie Organisation, trahit Xehanort pour rendre à Roxas, Xion et Naminé un corps ; Axel, Roxas et Xion prouvent qu'un Simili peut faire naître un cœur neuf en aimant et en souffrant. Xemnas et Saïx eux-mêmes reconnaissent, avant de disparaître, ce qui les liait à leurs amis.\n\nSur le terrain, les Similis communs restent l'apanage des membres survivants et déferlent au Cimetière des Keyblades aux côtés des Sans-cœur et des Nescients. Leur disparition définitive accompagne celle de l'Organisation : privés de meneurs, ils cessent d'être une armée organisée et deviennent un souvenir de la longue expérience de Xehanort sur le cœur humain.",
          "Kingdom Hearts III settles the question. Vexen, back in the Real Organization, betrays Xehanort to give Roxas, Xion and Naminé bodies of their own; Axel, Roxas and Xion prove that a Nobody can grow a new heart by loving and by hurting. Even Xemnas and Saïx acknowledge, before they fade, what bound them to their friends.\n\nOn the battlefield, common Nobodies remain the preserve of the surviving members and pour into the Keyblade Graveyard alongside Heartless and Unversed. Their final disappearance follows the Organization's own: with no leaders left, they stop being an organised army and become a memory of Xehanort's long experiment on the human heart.",
        ),
      },
    ],
    trivia: [
      L(
        "Le nom de chaque Simili humain est l'anagramme du nom d'origine avec un X ajouté : Xemnas pour Xehanort, Roxas pour Sora.",
        "Each human Nobody's name is an anagram of the original with an added X: Xemnas from Xehanort, Roxas from Sora.",
      ),
      L(
        "Les Similis communs sont classés par attribut (liberté, danse, sabre, sorcellerie…) et correspondent chacun à un membre de l'Organisation.",
        "Common Nobodies are sorted by attribute (freedom, dance, blade, sorcery…), each tied to one Organization member.",
      ),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Nobody", url: "https://kingdomhearts.fandom.com/wiki/Nobody" }],
  },

  "unversed": {
    sections: [
      {
        title: L("Ce qu'est un Nescient", "What an Unversed is"),
        text: L(
          "Les Nescients ne sont ni des cœurs volés ni des corps abandonnés : ce sont des émotions. Quand le Maître Xehanort arrache à Ventus les ténèbres de son cœur, il crée Vanitas, un être fait de tout le négatif du garçon. Incapable de contenir cette masse de colère, de peur et de tristesse, Vanitas la laisse déborder de lui : chaque bouffée prend une forme, un corps bleu nuit aux yeux rouges marqué d'un cœur renversé.\n\nLes Nescients n'ont aucun but propre. Ils vont là où Vanitas va, sèment le désordre dans les mondes et servent d'appât pour pousser Terra, Aqua et Ventus à voyager. Détruits, ils ne libèrent aucun cœur : ils retournent à leur créateur. Chaque victoire des trois apprentis renforce donc paradoxalement Vanitas, ce qui explique qu'il les laisse faire.",
          "Unversed are neither stolen hearts nor abandoned bodies: they are emotions. When Master Xehanort tears the darkness out of Ventus's heart, he creates Vanitas, a being made of everything negative in the boy. Unable to hold that mass of anger, fear and sorrow, Vanitas lets it spill out of him: each surge takes a shape, a dark blue body with red eyes marked by an inverted heart.\n\nUnversed have no purpose of their own. They go where Vanitas goes, sow disorder across the worlds and serve as bait to keep Terra, Aqua and Ventus travelling. Destroyed, they release no heart: they simply return to their maker. Every victory by the three apprentices therefore strengthens Vanitas, which is why he lets them fight.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Les Nescients envahissent les mondes dès que Terra, Aqua et Ventus quittent la Contrée du Départ. Ils s'attaquent à la Cité des Nains, au Château des Rêves, à l'Île Enchantée, au Jardin Radieux, et leur présence sert de fil conducteur aux trois trajets parallèles.\n\nCertains prennent des formes de boss : l'Armure Trinité, seule occasion pour le trio de combattre ensemble, ou l'Iron Imprisoner que Hadès garde enchaîné. Le Maître Eraqus s'inquiète de leur apparition sans en comprendre l'origine, et Yen Sid met en garde contre le porteur masqué qui les accompagne. La vérité n'éclate qu'au Cimetière des Keyblades : Vanitas les fabrique pour épuiser Ventus et le forcer à fusionner avec lui, afin de forger la χ-blade.",
          "Unversed swarm the worlds as soon as Terra, Aqua and Ventus leave the Land of Departure. They strike Dwarf Woodlands, Castle of Dreams, Enchanted Dominion and Radiant Garden, and their presence is the thread linking the three parallel journeys.\n\nSome take boss shapes: the Trinity Armor, the only battle the trio fights together, or the Iron Imprisoner that Hades keeps chained. Master Eraqus worries about their appearance without understanding its cause, and Yen Sid warns of the masked wielder who travels with them. The truth only breaks at the Keyblade Graveyard: Vanitas makes them to wear Ventus down and force him to merge, in order to forge the χ-blade.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Les Nescients réapparaissent avec Vanitas, ressuscité parmi les treize ténèbres de la Vraie Organisation XIII. On les croise surtout à Monstropolis, où Vanitas les glisse dans l'usine pour aider Bouh à être capturée et où l'énergie des cris nourrit le Lump of Horror.\n\nIls reviennent ensuite au Cimetière des Keyblades, mêlés aux Sans-cœur et aux Similis dans l'ultime bataille. Leur retour confirme que Vanitas n'a jamais cessé d'exister tant qu'une part des ténèbres de Ventus subsistait ; quand Ventus l'affronte une dernière fois et lui offre malgré tout de rentrer chez eux, les Nescients disparaissent avec lui.",
          "The Unversed return with Vanitas, revived among the thirteen darknesses of the Real Organization XIII. They are met above all in Monstropolis, where Vanitas slips them into the factory to help Boo be captured and where scream energy feeds the Lump of Horror.\n\nThey come back at the Keyblade Graveyard, mixed with Heartless and Nobodies in the final battle. Their return confirms that Vanitas never ceased to exist as long as a share of Ventus's darkness remained; when Ventus faces him one last time and still offers to take him home, the Unversed vanish with him.",
        ),
      },
    ],
    trivia: [
      L(
        "« Unversed » signifie « inexpérimenté » : ces créatures ne savent littéralement pas exister.",
        "“Unversed” means inexperienced: these creatures literally do not know how to exist.",
      ),
      L(
        "Leur emblème est un cœur renversé, image miroir de l'emblème des Sans-cœur.",
        "Their emblem is an inverted heart, a mirror image of the Heartless crest.",
      ),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Unversed", url: "https://kingdomhearts.fandom.com/wiki/Unversed" }],
  },

  "dream-eaters": {
    sections: [
      {
        title: L("Esprits et Cauchemars", "Spirits and Nightmares"),
        text: L(
          "Les Avale-Rêves peuplent les mondes endormis, ces mondes tombés aux mains des ténèbres lors de la première guerre des Sans-cœur et jamais réveillés depuis. Ils se nourrissent de rêves et se répartissent en deux familles opposées : les Cauchemars, noirs et rouges, dévorent les bons rêves et sèment le désordre ; les Esprits, colorés et marqués d'un emblème lumineux, dévorent les mauvais rêves et protègent les dormeurs.\n\nSora et Riku, entrés dans ces mondes pour leur examen de Maîtrise, ne peuvent pas y compter sur des alliés ordinaires : leurs compagnons de route sont des Esprits qu'ils créent eux-mêmes à partir de matériaux de rêve, élèvent, caressent et entraînent. Chaque Esprit débloque des capacités pour son porteur via un tableau de compétences, ce qui fait des Avale-Rêves à la fois les ennemis et l'équipement du jeu.",
          "Dream Eaters populate the Sleeping Worlds, worlds that fell to darkness during the first Heartless war and were never woken since. They feed on dreams and split into two opposed families: Nightmares, black and red, devour good dreams and spread disorder; Spirits, colourful and marked with a glowing emblem, devour bad dreams and protect sleepers.\n\nSora and Riku, who enter these worlds for their Mark of Mastery exam, cannot rely on ordinary allies there: their companions are Spirits they create themselves from dream materials, then raise, pet and train. Each Spirit unlocks abilities for its wielder through an ability grid, which makes Dream Eaters both the enemies and the equipment of the game.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Yen Sid envoie Sora et Riku libérer sept mondes endormis pour prouver qu'ils savent ouvrir et refermer les serrures du sommeil. Les Cauchemars y tiennent lieu d'ennemis dans la Cité de Traverse, la Cité des Cloches, la Grille, la Contrée du Rythme, la Symphonie de la Sorcellerie et le Pays des Mousquetaires, tandis que les Esprits combattent aux côtés des deux garçons.\n\nCes créatures ne sont pas neutres : le Jeune Xehanort a semé les Cauchemars pour attirer Sora, dont le cœur, laissé sans défense, doit devenir le treizième réceptacle. Riku, lui, apprend à la fin qu'il n'a jamais parcouru son propre rêve : il est entré dans celui de Sora comme un Esprit, littéralement un Avale-Rêves chargé de le protéger — ce qui lui vaut d'être seul reçu Maître de la Keyblade.",
          "Yen Sid sends Sora and Riku to free seven Sleeping Worlds and prove they can open and close the keyholes of sleep. Nightmares serve as enemies in Traverse Town, La Cité des Cloches, The Grid, Prankster's Paradise, Symphony of Sorcery and Country of the Musketeers, while Spirits fight at the two boys' side.\n\nThese creatures are not neutral: Young Xehanort seeded the Nightmares to lure Sora, whose defenceless heart is meant to become the thirteenth vessel. Riku, for his part, learns at the end that he never travelled his own dream: he entered Sora's as a Spirit, literally a Dream Eater tasked with protecting him — which is why he alone is named a Keyblade Master.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans Kingdom Hearts III, les Avale-Rêves ne sont plus des ennemis. Les Esprits reviennent dans le mini-jeu du Bistrot Petit Ratatouille et surtout dans la Forêt des Rêves Bleus, où Sora retrouve Winnie l'ourson dans un monde reconstitué à partir d'un livre endommagé.\n\nLeur rôle principal est ailleurs : Sora doit à son passage par les mondes endormis le pouvoir de l'éveil, capacité à réveiller les cœurs endormis qu'il utilise pour ramener Roxas, Ventus, Naminé et ses amis engloutis par la Marée Démoniaque. Cette même capacité, employée sans maîtrise, provoque sa disparition finale — conséquence directe de ce qu'il a appris auprès des Avale-Rêves.",
          "In Kingdom Hearts III, Dream Eaters are no longer enemies. Spirits return in the Little Chef bistro mini-game and above all in the Hundred Acre Wood, where Sora finds Winnie the Pooh in a world rebuilt from a damaged book.\n\nTheir main role lies elsewhere: Sora owes his passage through the Sleeping Worlds the power of waking, the ability to rouse sleeping hearts that he uses to bring back Roxas, Ventus, Naminé and the friends swallowed by the Demon Tide. That same ability, used without mastery, causes his final disappearance — a direct consequence of what he learned from the Dream Eaters.",
        ),
      },
    ],
    trivia: [
      L(
        "Les Esprits peuvent être caressés et nourris ; leur humeur influe sur les capacités qu'ils débloquent.",
        "Spirits can be petted and fed; their mood affects the abilities they unlock.",
      ),
      L(
        "Chaque espèce d'Avale-Rêves existe en version Esprit et en version Cauchemar, avec la même silhouette et des couleurs opposées.",
        "Every Dream Eater species exists as both a Spirit and a Nightmare, sharing a silhouette with opposite colours.",
      ),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dream Eater", url: "https://kingdomhearts.fandom.com/wiki/Dream_Eater" }],
  },

  // ═══════════════════════════════════ BOSS ═══════════════════════════════════
  "darkside": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Darkside est un Sans-cœur pur-sang colossal, entièrement noir, au visage réduit à deux yeux jaunes cerclés d'un casque de ténèbres. Son torse est percé d'un trou en forme de cœur : la marque de ce qui lui manque. Il combat en enfonçant un poing dans le sol, d'où jaillit une flaque sombre qui vomit des Ombres, et en concentrant dans son ventre une sphère de ténèbres qu'il tire vers l'adversaire.\n\nIl n'a ni chef ni mission : il apparaît partout où les ténèbres se sont accumulées assez longtemps pour prendre forme. C'est pour cela qu'il sert de premier obstacle dans presque chaque jeu de la série, silhouette immédiatement lisible de la menace que Sora affronte. Sa version Simili, l'Épine du Crépuscule, en reprend la posture et la disproportion.",
          "The Darkside is a colossal Pureblood Heartless, entirely black, its face reduced to two yellow eyes ringed by a helmet of darkness. Its torso is pierced by a heart-shaped hole: the mark of what it lacks. It fights by driving a fist into the ground, where a dark pool spits out Shadows, and by gathering a sphere of darkness in its belly to fire at its opponent.\n\nIt has no leader and no mission: it appears wherever darkness has pooled long enough to take shape. That is why it serves as a first obstacle in almost every game in the series, an instantly readable silhouette of the threat Sora faces. Its Nobody counterpart, the Twilight Thorn, echoes its posture and its disproportion.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Sora rencontre le Darkside deux fois avant même de comprendre ce qui lui arrive. La première dans son rêve, sur le Palier de l'Éveil : après avoir choisi son arme et répondu aux questions de la voix, il voit son ombre s'étirer et se dresser en géant. Le combat qu'il livre alors n'est qu'une prémonition.\n\nLa nuit suivante, la tempête emporte les Îles du Destin. Sora, la Chaîne Royale à la main pour la première fois, retrouve le même colosse au-dessus de la petite île qui se désagrège. Il le vainc, mais le vide qui a dévoré le monde l'aspire aussitôt : le Darkside n'était que le signe visible d'une île déjà perdue. Le monstre revient plus tard à la Fin du Monde, où l'accumulation des mondes engloutis en fait naître d'autres.",
          "Sora meets the Darkside twice before he even understands what is happening. The first time in a dream, on the Dive to the Heart: after choosing his weapon and answering the voice's questions, he watches his shadow stretch and rise up as a giant. The fight he then puts up is only a premonition.\n\nThe next night the storm carries off Destiny Islands. Sora, holding the Kingdom Key for the first time, meets the same colossus above the crumbling small island. He beats it, but the void that has devoured the world sucks him in at once: the Darkside was only the visible sign of an island already lost. The monster returns later at End of the World, where the mass of swallowed worlds breeds more of them.",
        ),
      },
    ],
    trivia: [
      L(
        "Le Darkside garde son nom anglais dans toutes les versions, y compris japonaise (ダークサイド).",
        "The Darkside keeps its English name in every version, including Japanese (ダークサイド).",
      ),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Darkside", url: "https://kingdomhearts.fandom.com/wiki/Darkside" }],
  },

  "guard-armor": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "L'Armure Gardienne est un Sans-cœur emblème composé de pièces d'armure violettes et dorées qui flottent sans être reliées : un torse, une tête casquée, deux gantelets griffus et deux bottes. Le blason rouge et noir des Emblèmes est peint sur son plastron, preuve qu'elle sort d'un laboratoire et non des ténèbres brutes.\n\nSa mécanique de combat a fait école : chaque membre se détruit séparément, et l'ordre dans lequel on les abat change le comportement de l'ensemble. Privée de ses bottes, elle se met à tournoyer ; privée de ses gantelets, elle charge. Sa variante inversée, l'Armure Opposée, réutilise les mêmes pièces montées à l'envers, et l'idée sera reprise dans plusieurs épisodes ultérieurs.",
          "The Guard Armor is an Emblem Heartless made of purple and gold armour pieces that float unattached: a torso, a helmeted head, two clawed gauntlets and two boots. The red-and-black Emblem crest is painted on its breastplate, proof that it came from a laboratory and not from raw darkness.\n\nIts fight design set a pattern: each limb is destroyed separately, and the order in which they fall changes the whole creature's behaviour. Stripped of its boots it starts spinning; stripped of its gauntlets it charges. Its inverted variant, the Opposite Armor, reuses the same pieces mounted upside down, and the idea returns in several later entries.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "L'Armure Gardienne surgit sur la première place de la Ville de Traverse au moment exact où Sora, Donald et Dingo se voient pour la première fois. Le canard et le chien cherchaient « la clé » évoquée par la lettre du roi ; le Sans-cœur leur désigne le porteur en se jetant sur lui.\n\nLe combat scelle l'alliance : les trois personnages se battent ensemble sans encore rien savoir les uns des autres, et découvrent en la détruisant qu'ils poursuivent le même but. C'est aussi le premier Sans-cœur emblème que Sora affronte, donc la première preuve que ces créatures sont fabriquées par quelqu'un. Après la victoire, Léon confirme que les Sans-cœur cherchent le cœur des mondes et que la Keyblade est la seule arme capable de les arrêter. L'Armure Opposée reviendra plus tard, dans le quartier de la ville que Sora traverse à son retour.",
          "The Guard Armor bursts into Traverse Town's First District at the exact moment Sora, Donald and Goofy first see one another. The duck and the dog were looking for “the key” mentioned in the king's letter; the Heartless points the wielder out to them by hurling itself at him.\n\nThe fight seals their alliance: the three characters fight side by side while still knowing nothing about each other, and discover as it falls apart that they share a goal. It is also the first Emblem Heartless Sora faces, and so the first proof that these creatures are manufactured by someone. After the victory, Leon confirms that the Heartless seek the hearts of worlds and that the Keyblade is the only weapon able to stop them. The Opposite Armor returns later, in the district Sora crosses on his way back.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Guard Armor", url: "https://kingdomhearts.fandom.com/wiki/Guard_Armor" }],
  },

  "trickmaster": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Trickmaster est un Sans-cœur emblème long et dégingandé, monté sur des jambes en échasses, coiffé d'un haut-de-forme et le visage réduit à une bouche fendue. Il tient deux torches qu'il fait tourner comme un jongleur de cirque et qu'il enflamme aux lampes de la pièce où il combat, transformant chaque coup en attaque de feu.\n\nSa silhouette absurde et ses mouvements de saltimbanque en font une créature parfaitement accordée au Pays des Merveilles, monde où rien ne garde sa taille ni sa logique. Le combat lui-même joue sur cette instabilité : il faut grimper sur les tables et les meubles de la Chambre Bizarre pour atteindre sa tête, seul point vulnérable de ce corps trop haut pour être frappé depuis le sol.",
          "The Trickmaster is a long, gangly Emblem Heartless perched on stilt-like legs, wearing a top hat, its face reduced to a slit of a mouth. It holds two batons that it twirls like a circus juggler and sets alight on the room's lamps, turning every blow into a fire attack.\n\nIts absurd silhouette and acrobat's movements make it a creature perfectly matched to Wonderland, a world where nothing keeps its size or its logic. The fight plays on that instability: you have to climb the tables and furniture of the Bizarre Room to reach its head, the only vulnerable point on a body too tall to strike from the floor.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Au Pays des Merveilles, la Reine de Cœur accuse Alice d'avoir tenté de lui voler son cœur et la condamne sans preuve. Sora, Donald et Dingo obtiennent le droit de chercher les vraies pièces à conviction dans la forêt de lotus et rapportent des indices désignant les Sans-cœur — mais la Reine, furieuse, refuse le verdict et fait enfermer la jeune fille dans une cage.\n\nLorsque le trio la délivre, Alice a déjà disparu : c'est le Trickmaster qui bondit à sa place dans la Chambre Bizarre. Le combat se déroule sous les yeux de la Reine et de ses cartes, dans l'obscurité, jusqu'à ce que Sora abatte le jongleur. La victoire ne sauve personne : Alice, l'une des sept Princesses de Cœur, a été emportée par les Sans-cœur vers Hollow Bastion, et le trio repart sans elle.",
          "In Wonderland, the Queen of Hearts accuses Alice of trying to steal her heart and condemns her without proof. Sora, Donald and Goofy earn the right to look for real evidence in the Lotus Forest and bring back clues pointing at the Heartless — but the furious Queen rejects the verdict and has the girl locked in a cage.\n\nBy the time the trio frees her, Alice is already gone: the Trickmaster leaps out in her place in the Bizarre Room. The fight unfolds in the dark before the Queen and her cards, until Sora brings the juggler down. The victory saves no one: Alice, one of the seven Princesses of Heart, has been carried off by the Heartless towards Hollow Bastion, and the trio leaves without her.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Trickmaster", url: "https://kingdomhearts.fandom.com/wiki/Trickmaster" }],
  },

  "stealth-sneak": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Stealth Sneak est un Sans-cœur emblème en forme de caméléon géant, au corps vert sombre et à la longue langue préhensile. Sa particularité est de se rendre presque invisible : il se fond dans le décor et ne trahit sa position que par le contour flou de sa silhouette et par son œil unique, qui s'ouvre dans son dos et constitue son point faible.\n\nSa conception colle au monde qu'il hante, une jungle où la chasse consiste à voir sans être vu. Il fouette de la queue, projette sa langue pour saisir ses adversaires et disparaît dès qu'il est trop blessé. Le trouver relève du même travail que suivre un animal dans la végétation, ce qui en fait l'un des rares boss de Kingdom Hearts fondé sur la perception plutôt que sur la force.",
          "The Stealth Sneak is an Emblem Heartless shaped like a giant chameleon, with a dark green body and a long prehensile tongue. Its speciality is near-invisibility: it blends into the scenery and betrays its position only by a blurred outline and by the single eye that opens on its back, which is also its weak point.\n\nIts design matches the world it haunts, a jungle where hunting means seeing without being seen. It lashes with its tail, flicks its tongue to grab opponents, and vanishes as soon as it is badly hurt. Finding it is the same work as tracking an animal through vegetation, which makes it one of the rare Kingdom Hearts bosses built on perception rather than strength.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Dans la Jungle Profonde, le chasseur Clayton se sert de l'expédition de Jane et du professeur Porter comme d'une couverture pour localiser les gorilles. Tarzan finit par le démasquer et le fait chasser du campement ; Clayton, décidé à obtenir ses trophées, se laisse alors gagner par les ténèbres et se lie aux Sans-cœur.\n\nSora, Donald et Dingo le retrouvent dans le bosquet où il tient en joue Kerchak et les siens. Clayton ne combat pas seul : le Stealth Sneak apparaît sous lui et le porte sur son dos, l'homme tirant à la carabine pendant que le caméléon charge et fouette. Quand la créature s'écroule, Clayton meurt avec elle, dévoré par les ténèbres qu'il avait acceptées. Tarzan conduit ensuite le trio jusqu'à la cascade, où la serrure du monde est scellée.",
          "In Deep Jungle, the hunter Clayton uses Jane and Professor Porter's expedition as cover to locate the gorillas. Tarzan eventually exposes him and has him driven from the camp; determined to get his trophies, Clayton then gives in to darkness and binds himself to the Heartless.\n\nSora, Donald and Goofy find him in the bamboo thicket holding Kerchak and his family at gunpoint. Clayton does not fight alone: the Stealth Sneak appears beneath him and carries him on its back, the man firing his rifle while the chameleon charges and lashes out. When the creature collapses, Clayton dies with it, consumed by the darkness he had accepted. Tarzan then leads the trio to the waterfall, where the world's keyhole is sealed.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Stealth Sneak", url: "https://kingdomhearts.fandom.com/wiki/Stealth_Sneak" }],
  },

  "parasite-cage": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Parasite Cage est un Sans-cœur emblème visqueux, mi-plante mi-parasite, dont le corps mou s'accroche aux parois et dont la gueule s'ouvre en fleur pour avaler ses adversaires. Il vit à l'intérieur de la baleine Monstro, dont il occupe les entrailles comme un mal logé dans un organisme vivant.\n\nSon nom dit son fonctionnement : il emprisonne. Il gobe un personnage, le retient dans sa cage de chair pendant que l'acide le brûle, puis le recrache. Le décor participe au combat, puisque les salles de l'estomac de Monstro tanguent et se contractent. Il incarne l'idée, filée dans tout le jeu, que les ténèbres s'installent à l'intérieur d'un être et le rongent de l'intérieur — ici littéralement.",
          "The Parasite Cage is a slimy Emblem Heartless, half plant and half parasite, its soft body clinging to walls and its maw opening like a flower to swallow opponents. It lives inside the whale Monstro, occupying his innards like a sickness lodged in a living organism.\n\nIts name states its method: it imprisons. It gulps a character down, holds them in its cage of flesh while acid burns them, then spits them out. The setting takes part in the fight, since the chambers of Monstro's stomach pitch and contract. It embodies the idea running through the whole game, that darkness settles inside a being and eats it from within — here quite literally.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le vaisseau Gummi de Sora est avalé par Monstro entre deux mondes. À l'intérieur, le trio retrouve Pinocchio et Gepetto, eux aussi engloutis, et surtout Riku, qui promène la marionnette de salle en salle en cherchant à comprendre ce qui, chez elle, tient lieu de cœur.\n\nLe Parasite Cage attaque une première fois dans la Chambre 5 : Riku s'échappe avec Pinocchio pendant que Sora se bat. Le trio les rattrape plus loin et découvre que la marionnette a été avalée par la créature ; il faut la vaincre une seconde fois pour la libérer. La baleine, malade de ce parasite, se calme dès qu'il disparaît. La rencontre laisse Sora face à un Riku de plus en plus lointain, décidé à sauver Kairi par n'importe quel moyen.",
          "Sora's Gummi ship is swallowed by Monstro between worlds. Inside, the trio finds Pinocchio and Geppetto, swallowed too, and above all Riku, who leads the puppet from chamber to chamber trying to understand what stands in for a heart in it.\n\nThe Parasite Cage attacks first in Chamber 5: Riku escapes with Pinocchio while Sora fights. The trio catches up with them further on and finds that the puppet has been swallowed by the creature; it must be beaten a second time to free him. The whale, sick with this parasite, calms down as soon as it is gone. The encounter leaves Sora facing an increasingly distant Riku, set on saving Kairi by any means.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Parasite Cage", url: "https://kingdomhearts.fandom.com/wiki/Parasite_Cage" }],
  },

  "behemoth": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Behemoth est un Sans-cœur emblème quadrupède de très grande taille, au pelage sombre, aux pattes massives et surtout à la longue corne unique plantée sur son front. Cette corne est à la fois son arme et sa faiblesse : il en charge ses adversaires, il en fait jaillir des éclairs, mais c'est en grimpant sur son dos pour la frapper qu'on l'abat.\n\nLe nom vient de la créature biblique et, dans la tradition Final Fantasy, désigne une bête monstrueuse dont l'affrontement sert de test de puissance. Kingdom Hearts en garde cette fonction : le Behemoth n'a pas de rôle narratif propre, il est là pour mesurer le joueur. Il apparaît aussi bien dans les tournois du Colisée que dans les zones les plus tardives, où sa présence signale un territoire hostile.",
          "The Behemoth is a very large four-legged Emblem Heartless with dark fur, massive limbs and, above all, a single long horn planted on its brow. That horn is both its weapon and its weakness: it charges with it, calls lightning from it, but it is by climbing onto its back to strike it that you bring the beast down.\n\nThe name comes from the biblical creature and, in Final Fantasy tradition, denotes a monstrous beast whose defeat serves as a test of strength. Kingdom Hearts keeps that function: the Behemoth has no plot of its own, it exists to measure the player. It appears both in the Coliseum tournaments and in the latest areas, where its presence marks hostile ground.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le Behemoth attend Sora à la Fin du Monde, dans les couloirs formés par les débris des mondes dévorés par les Sans-cœur. Il y est le plus gros adversaire ordinaire, gardien de fait du chemin qui mène à la porte des ténèbres, et il faut souvent le contourner plutôt que l'affronter.\n\nIl sert également d'épreuve au Colisée de l'Olympe : Phil et Hercule l'inscrivent parmi les adversaires des tournois, où il se rencontre seul ou par groupes. Le combat consiste à briser sa garde, monter sur son échine et frapper la corne pendant qu'il secoue le sol. Sa présence dans les deux lieux résume sa fonction : un mur de puissance brute que le porteur de la Keyblade doit apprendre à franchir avant les vrais affrontements.",
          "The Behemoth waits for Sora at End of the World, in the corridors formed by debris from the worlds the Heartless devoured. There it is the largest ordinary opponent, effectively guarding the road to the door of darkness, and it is often better avoided than fought.\n\nIt also serves as a trial at Olympus Coliseum: Phil and Hercules list it among the tournament opponents, where it is met alone or in groups. The fight means breaking through its guard, climbing onto its spine and striking the horn while it shakes the ground. Its presence in both places sums up its function: a wall of raw power the Keyblade wielder must learn to get past before the real confrontations.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Behemoth", url: "https://kingdomhearts.fandom.com/wiki/Behemoth" }],
  },

  "world-of-chaos": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le World of Chaos n'est pas une créature ordinaire : c'est la forme finale prise par Ansem, Sans-cœur de Xehanort, une fois qu'il a fusionné avec le vaisseau de ténèbres qui lui servait de corps de rechange. L'ensemble tient du navire, de la forteresse et de l'organisme : une coque hérissée de canons, un visage géant enchâssé dans la structure, et Ansem lui-même incrusté dans la proue, torse nu, encore capable de parler.\n\nL'affrontement se déroule en plusieurs zones du même corps. Il faut détruire les bras, atteindre la bouche qui aspire les combattants, puis pénétrer à l'intérieur où le Guardian, l'entité sombre qui l'accompagne depuis toujours, protège son maître. Le monstre incarne littéralement la thèse d'Ansem : les ténèbres sont le cœur véritable de toute chose, et il s'y est fondu jusqu'à perdre toute forme humaine.",
          "The World of Chaos is no ordinary creature: it is the final form taken by Ansem, Xehanort's Heartless, once he has merged with the ship of darkness that served as his spare body. The whole is part vessel, part fortress, part organism: a hull bristling with cannons, a giant face set into the structure, and Ansem himself embedded in the prow, bare-chested, still able to speak.\n\nThe battle unfolds across several zones of that same body. You must destroy the arms, reach the mouth that sucks fighters in, then get inside where the Guardian, the dark entity that has always accompanied him, shields its master. The monster literally embodies Ansem's thesis: darkness is the true heart of all things, and he has dissolved into it until nothing human remains.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Au bout de la Fin du Monde, Sora, Donald et Dingo trouvent Ansem devant la porte de Kingdom Hearts, qu'il croit être la source de toutes les ténèbres. Battu sous forme humaine, il se retire au-delà de la porte, dans un espace vide où il se fond avec son vaisseau : le World of Chaos.\n\nLe combat est le dernier du jeu. Sora détruit les membres, entre dans le corps de la créature et y affronte le Guardian avant de porter le coup final. Ansem s'obstine à réclamer la lumière ultime au moment où la porte s'entrouvre — et découvre que Kingdom Hearts est lumière, ce qui l'anéantit. Sora et Riku referment alors la porte des deux côtés, avec l'aide du roi Mickey, scellant les ténèbres mais séparant Sora de ses deux amis.",
          "At the far end of End of the World, Sora, Donald and Goofy find Ansem before the door to Kingdom Hearts, which he believes to be the source of all darkness. Beaten in human form, he withdraws beyond the door into an empty space where he merges with his vessel: the World of Chaos.\n\nThe fight is the game's last. Sora destroys the limbs, enters the creature's body and faces the Guardian there before landing the final blow. Ansem still demands the ultimate darkness as the door opens — and discovers that Kingdom Hearts is light, which annihilates him. Sora and Riku then close the door from both sides with King Mickey's help, sealing the darkness but separating Sora from his two friends.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — World of Chaos", url: "https://kingdomhearts.fandom.com/wiki/World_of_Chaos" }],
  },

  "anti-sora": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Anti Sora est une copie de Sora faite de ténèbres : même silhouette, même façon de bondir, mais un corps entièrement noir aux yeux jaunes et une Keyblade d'ombre. Contrairement aux répliques grossières qui l'annoncent, il reproduit fidèlement les mouvements de l'original, ce qui en fait un adversaire déroutant à combattre.\n\nLa créature n'a pas de volonté propre : elle est fabriquée pour démontrer une maîtrise. Elle préfigure aussi la Forme Anti de Kingdom Hearts II, cette transformation involontaire où Sora, en usant trop des ténèbres accumulées, tombe à quatre pattes, perd sa Keyblade et attaque à mains nues. Dans les deux cas, la même idée : Sora porte en lui les ténèbres nécessaires pour devenir cela, et son propre reflet est le pire adversaire qu'on puisse lui opposer.",
          "Anti Sora is a copy of Sora made of darkness: the same silhouette, the same way of leaping, but a wholly black body with yellow eyes and a shadow Keyblade. Unlike the crude replicas that precede it, it reproduces the original's moves faithfully, which makes it a disorienting opponent.\n\nThe creature has no will of its own: it is built to demonstrate mastery. It also foreshadows Anti Form in Kingdom Hearts II, the involuntary transformation in which Sora, having drawn too much on accumulated darkness, drops to all fours, loses his Keyblade and attacks bare-handed. Both share one idea: Sora carries within him the darkness needed to become that, and his own reflection is the worst opponent one can set against him.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Au Pays Imaginaire, Sora monte à bord du navire du Capitaine Crochet pour retrouver Kairi et Wendy. Riku, qui a ouvert son cœur aux ténèbres pour obtenir le pouvoir de commander les Sans-cœur, y règne en maître et veut prouver à son ami d'enfance qu'il a fait le bon choix.\n\nDans la cale, Sora traverse des ombres qui prennent grossièrement sa forme. Puis, dans la cabine du capitaine, Riku fabrique une copie complète, capable de manier une Keyblade de ténèbres, et la lance contre lui. Sora la détruit ; la silhouette se dissout sans laisser de trace. La victoire ne change rien à la situation de Kairi, dont le corps reste sans cœur, mais elle marque le moment où Sora comprend que Riku ne se contente plus de le devancer : il se sert des ténèbres contre lui.",
          "In Neverland, Sora boards Captain Hook's ship to find Kairi and Wendy. Riku, who has opened his heart to darkness to gain command of the Heartless, rules there and wants to prove to his childhood friend that he made the right choice.\n\nIn the hold, Sora fights through shadows that crudely take his shape. Then, in the captain's cabin, Riku produces a complete copy, able to wield a Keyblade of darkness, and sends it at him. Sora destroys it; the silhouette dissolves without a trace. The victory changes nothing for Kairi, whose body remains heartless, but it marks the moment Sora understands that Riku is no longer merely getting ahead of him: he is using darkness against him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — AntiSora", url: "https://kingdomhearts.fandom.com/wiki/AntiSora" }],
  },

  "twilight-thorn": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "L'Épine du Crépuscule est le pendant Simili du Darkside : même gigantisme, même posture voûtée, mais un corps blanc et gris parcouru de sangles, une tête casquée sans visage et de longs membres articulés en épingle. L'emblème échancré des Similis s'ouvre sur son torse à l'endroit exact où le Darkside porte son trou en forme de cœur.\n\nElle combat en se contorsionnant : elle se plie, se déplie, se replie sur elle-même, saisit son adversaire pour le projeter au loin ou l'entraîner dans une chute vertigineuse. Le combat est bâti autour des commandes de réaction, où il faut renvoyer une prise ou retourner une attaque au bon moment. Sa disproportion et son calme mécanique en font la mise en image la plus nette de ce qu'est un Simili : une forme parfaite, vide de toute intention.",
          "The Twilight Thorn is the Nobody counterpart of the Darkside: the same gigantism, the same hunched posture, but a white and grey body laced with straps, a faceless helmeted head and long limbs jointed like pins. The notched Nobody emblem opens on its chest exactly where the Darkside carries its heart-shaped hole.\n\nIt fights by contorting: folding, unfolding, doubling back on itself, seizing its opponent to fling them away or drag them into a dizzying fall. The battle is built around reaction commands, where a grab must be reversed or an attack turned back at the right moment. Its disproportion and mechanical calm make it the clearest image of what a Nobody is: a perfect form, empty of intent.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Pendant les sept jours de vacances qu'il croit vivre dans la Cité du Crépuscule, Roxas fait des rêves qui ne lui appartiennent pas et croise des créatures blanches que personne d'autre ne voit. La nuit, son sommeil le mène sur un Palier de l'Éveil semblable à celui de Sora, où l'Épine du Crépuscule fond sur lui.\n\nLe combat lui révèle une chose : la Keyblade lui répond. Elle apparaît d'elle-même dans sa main alors qu'il n'a jamais été porteur dans cette vie factice, et le géant blanc s'effondre. Cette victoire ne lui apprend pourtant rien de sa condition. Ce n'est qu'à la fin de la semaine, en découvrant DiZ et Naminé dans le manoir abandonné, que Roxas comprendra qu'il est le Simili de Sora et que la ville où il vit n'est qu'un programme conçu pour l'occuper.",
          "During the seven days of holiday he believes he is living in Twilight Town, Roxas has dreams that are not his own and meets white creatures nobody else can see. At night his sleep takes him to a Dive to the Heart like Sora's, where the Twilight Thorn swoops down on him.\n\nThe fight reveals one thing: the Keyblade answers him. It appears in his hand on its own, though he has never been a wielder in this fabricated life, and the white giant collapses. The victory teaches him nothing about his condition, though. Only at the end of the week, discovering DiZ and Naminé in the abandoned mansion, will Roxas understand that he is Sora's Nobody and that the town he lives in is only a program built to keep him busy.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Twilight Thorn", url: "https://kingdomhearts.fandom.com/wiki/Twilight_Thorn" }],
  },

  "shadow-stalker": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Shadow Stalker est un Sans-cœur qui ne possède pas de corps stable : il s'installe dans un lieu et anime ce qu'il y trouve. Au Château de la Bête, il prend possession du grand escalier, du lustre, des colonnes et des portes de la salle de bal, transformant l'architecture elle-même en adversaire. On ne le frappe pas directement ; on frappe l'objet qu'il habite au moment où il s'y montre.\n\nCe fonctionnement en fait un boss de décor plutôt que de créature, et il colle au monde qu'il hante : un château qu'une malédiction a déjà transformé en piège pour son maître. Vaincu dans une forme, il n'est jamais détruit : il se contente de changer de support, jusqu'à trouver assez de ténèbres pour se donner enfin un corps propre.",
          "The Shadow Stalker is a Heartless with no stable body: it settles into a place and animates whatever it finds there. At Beast's Castle it takes hold of the grand staircase, the chandelier, the pillars and the ballroom doors, turning the architecture itself into an opponent. You never strike it directly; you strike whichever object it inhabits at the moment it shows itself.\n\nThat makes it a boss of scenery rather than of creature, and it fits the world it haunts: a castle a curse has already turned into a trap for its master. Beaten in one form, it is never destroyed: it simply changes host, until it finds enough darkness to give itself a body at last.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Xaldin s'est introduit au Château de la Bête pour nourrir la colère et le désespoir du maître des lieux, dans l'espoir d'en tirer à la fois un Sans-cœur et un Simili puissants. Sa manœuvre réussit : la Bête chasse Belle, brise ses derniers liens avec ses serviteurs et laisse les ténèbres emplir le château.\n\nQuand Sora, Donald et Dingo interviennent, le Shadow Stalker se sert de cette atmosphère pour animer la salle de bal contre eux. Le combat se joue à travers le mobilier et le lustre, jusqu'à ce que le Sans-cœur, acculé, absorbe assez de ténèbres pour se donner un corps de bête griffue : il devient Dark Thorn. La rencontre marque le moment où le château cesse d'être un refuge et où la Bête doit choisir entre sa rage et Belle.",
          "Xaldin has slipped into Beast's Castle to feed the master's anger and despair, hoping to draw both a powerful Heartless and a powerful Nobody from him. His scheme works: the Beast drives Belle away, breaks his last ties with his servants and lets darkness fill the castle.\n\nWhen Sora, Donald and Goofy step in, the Shadow Stalker uses that atmosphere to turn the ballroom against them. The fight plays out through the furniture and the chandelier, until the cornered Heartless absorbs enough darkness to give itself a clawed, bestial body: it becomes the Dark Thorn. The encounter marks the moment the castle stops being a refuge and the Beast must choose between his rage and Belle.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Shadow Stalker", url: "https://kingdomhearts.fandom.com/wiki/Shadow_Stalker" }],
  },

  "dark-thorn": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Dark Thorn est la forme aboutie du Shadow Stalker : un fauve noir massif, dressé sur ses pattes arrière, aux longues griffes et aux cornes recourbées, dont le corps disparaît par intermittence pour ne laisser voir que deux yeux jaunes. Il n'anime plus le décor, il l'utilise — il arrache les colonnes de la salle de bal et s'en sert comme de gourdins.\n\nSa silhouette n'est pas choisie au hasard : c'est une version dévoyée de la Bête, un miroir de ce que le maître du château deviendrait s'il laissait sa colère l'emporter. Le combat se déroule d'ailleurs avec la Bête en équipier, et les commandes de réaction les font agir de concert, comme si l'homme métamorphosé devait affronter en face l'image de son propre reniement.",
          "The Dark Thorn is the Shadow Stalker's completed form: a massive black beast standing on its hind legs, with long claws and curved horns, its body flickering out of sight to leave only two yellow eyes. It no longer animates the scenery, it uses it — tearing the ballroom's pillars loose and swinging them as clubs.\n\nIts shape is no accident: it is a corrupted version of the Beast, a mirror of what the castle's master would become if he let his rage win. The fight is indeed fought with the Beast as a party member, and the reaction commands have them act in concert, as though the transformed man had to face the image of his own surrender head-on.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Après avoir été chassé de forme en forme dans la salle de bal, le Shadow Stalker se change en Dark Thorn devant Sora et la Bête. Le combat oppose donc le maître du château à la créature née de sa propre noirceur, entretenue par les manipulations de Xaldin.\n\nLa victoire rend au château son calme et à la Bête la mesure de ce qu'il a failli perdre : il retrouve Belle, s'excuse, et le monde livre sa serrure. Mais Xaldin n'a pas renoncé — il reviendra plus tard voler la rose enchantée et le miroir magique, forçant Sora à un second passage et à un affrontement direct avec le Simili. Dark Thorn, lui, ne réapparaît pas : il aura servi à montrer que les Sans-cœur du monde poussent sur les blessures de ceux qui l'habitent.",
          "After being driven from form to form around the ballroom, the Shadow Stalker turns into the Dark Thorn before Sora and the Beast. The fight therefore sets the castle's master against the creature born of his own darkness, cultivated by Xaldin's manipulations.\n\nThe victory returns calm to the castle and gives the Beast the measure of what he nearly lost: he finds Belle, apologises, and the world yields its keyhole. But Xaldin has not given up — he returns later to steal the enchanted rose and the magic mirror, forcing Sora into a second visit and a direct confrontation with the Nobody. The Dark Thorn does not come back: it served to show that a world's Heartless grow out of the wounds of those who live there.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dark Thorn", url: "https://kingdomhearts.fandom.com/wiki/Dark_Thorn" }],
  },

  "illuminator": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "L'Illuminator est un Sans-cœur emblème de petite taille, au corps de lézard vert et bleu, dont la queue se termine par une grosse lanterne. Contrairement à la plupart des Sans-cœur, il n'attaque pas : sa lanterne absorbe la lumière alentour et plonge la zone dans le noir, ne laissant briller que ses yeux jaunes.\n\nC'est un ennemi de fonction, pas de puissance : il possède peu de points de vie et se contente de fuir. Son intérêt est purement tactique, et il n'existe que parce qu'un adversaire avait besoin, précisément, d'éteindre la lumière. Cette spécialisation en fait l'un des Sans-cœur les plus inhabituels de la série, invoqué comme un outil plutôt que lâché comme une bête.",
          "The Illuminator is a small Emblem Heartless with a green and blue lizard body whose tail ends in a large lantern. Unlike most Heartless it does not attack: its lantern absorbs the surrounding light and plunges the area into darkness, leaving only its yellow eyes visible.\n\nIt is an enemy of function, not of power: it has little health and mostly flees. Its interest is purely tactical, and it exists only because one opponent specifically needed the light put out. That specialisation makes it one of the most unusual Heartless in the series, summoned as a tool rather than loosed as a beast.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "À Port Royal, l'équipage de Barbossa est frappé par la malédiction de l'or aztèque : sous la lumière de la lune, les pirates apparaissent tels qu'ils sont, des squelettes vivants — et c'est aussi le seul moment où ils peuvent être blessés. Sora, Jack Sparrow et Will Turner en font l'expérience à l'Île de la Muerta.\n\nQuand ils interrompent le rituel censé lever la malédiction au prix du sang de Will, Pat fournit à Barbossa la parade : des Illuminators, invoqués pour aspirer le clair de lune et rendre le capitaine intouchable. Le combat consiste donc à traquer les petits Sans-cœur pour rétablir la lumière, puis à frapper Barbossa dans les rares secondes où la lune l'atteint. Chaque Illuminator abattu est aussitôt remplacé, ce qui fait de l'affrontement une course entre l'ombre et le temps.",
          "In Port Royal, Barbossa's crew is under the curse of the Aztec gold: in moonlight the pirates appear as they truly are, walking skeletons — and that is also the only moment they can be hurt. Sora, Jack Sparrow and Will Turner learn this at the Isla de Muerta.\n\nWhen they interrupt the ritual meant to lift the curse at the cost of Will's blood, Pete hands Barbossa the counter: Illuminators, summoned to drink in the moonlight and make the captain untouchable. The fight therefore means hunting the little Heartless down to restore the light, then striking Barbossa in the rare seconds the moon reaches him. Every Illuminator felled is immediately replaced, turning the confrontation into a race between shadow and time.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Illuminator", url: "https://kingdomhearts.fandom.com/wiki/Illuminator" }],
  },

  "prison-keeper": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Prison Keeper est un Sans-cœur emblème d'allure mécanique : une grosse tête ovoïde à la bouche déchiquetée, des yeux en spirales triangulaires, une antenne tordue au sommet du crâne et deux longs bras terminés par des mains osseuses. Sous lui pend une cage de métal, à laquelle il doit son nom.\n\nSon comportement découle entièrement de cette cage. Le monstre avale les prisonniers qu'elle contient pour se renforcer, et le pouvoir qu'il en tire change selon celui qu'il a gobé : chaque captif lui prête un élément différent. Le geôlier est donc à la fois la prison et le prisonnier, et le combat consiste à lui faire recracher ce qu'il a avalé. Son esthétique de jouet grinçant l'accorde parfaitement à la Ville d'Halloween.",
          "The Prison Keeper is a mechanical-looking Emblem Heartless: a large egg-shaped head with a jagged maw, eyes like triangular spirals, a twisted antenna on its crown and two long arms ending in bony hands. A metal cage hangs beneath it, which is what gives it its name.\n\nIts behaviour follows entirely from that cage. The monster swallows the prisoners it holds to strengthen itself, and the power it draws changes with whoever it has gulped down: each captive lends it a different element. The jailer is therefore both the prison and the prisoner, and the fight means making it spit out what it has swallowed. Its creaky-toy aesthetic suits Halloween Town perfectly.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "À la Ville d'Halloween, Maléfique se sert des ténèbres du monde pour ressusciter Oogie Boogie, que Jack Skellington croyait définitivement défait. Le Croquemitaine reprend aussitôt ses habitudes et rappelle à son service Am, Stram et Gram, les trois enfants farceurs.\n\nQuand Sora et Jack se lancent à leur poursuite, Maléfique invoque le Prison Keeper pour les couvrir. Le Sans-cœur enferme le trio dans sa cage puis les avale un à un, changeant d'élément selon l'enfant absorbé, ce qui oblige Sora à s'adapter en permanence. Sa destruction libère les enfants et ouvre la route jusqu'au manoir d'Oogie Boogie. Le boss n'est donc pas une fin en soi : il sert de rideau derrière lequel Maléfique reconstitue tranquillement son réseau de méchants Disney.",
          "In Halloween Town, Maleficent uses the world's darkness to revive Oogie Boogie, whom Jack Skellington believed defeated for good. The Boogeyman promptly resumes his habits and calls Lock, Shock and Barrel back into service.\n\nWhen Sora and Jack give chase, Maleficent summons the Prison Keeper to cover them. The Heartless locks the trio in its cage then swallows them one by one, switching element with each child absorbed and forcing Sora to keep adapting. Destroying it frees the children and opens the road to Oogie Boogie's manor. The boss is therefore not an end in itself: it is a curtain behind which Maleficent quietly rebuilds her network of Disney villains.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Prison Keeper", url: "https://kingdomhearts.fandom.com/wiki/Prison_Keeper" }],
  },

  "storm-rider": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Storm Rider est un Sans-cœur emblème gigantesque en forme de dragon oriental : un corps allongé, des ailes membraneuses immenses, une tête cornue et un souffle chargé d'électricité. Il ne se bat pas au sol mais dans le ciel, en tournoyant au-dessus de sa cible et en frappant par rafales de vent et éclairs.\n\nSa forme reprend le dragon des estampes chinoises, créature associée au ciel, à l'orage et à l'autorité impériale, ce qui en fait le gardien logique du palais qu'il survole. Le combat se déroule en grande partie en l'air : il faut sauter sur son dos, courir le long de son échine et frapper ses cornes pendant qu'il vire. C'est l'un des rares boss de Kingdom Hearts II où l'arène est entièrement mobile.",
          "The Storm Rider is a gigantic Emblem Heartless shaped like an eastern dragon: a long body, huge membranous wings, a horned head and a breath charged with electricity. It does not fight on the ground but in the sky, circling above its target and striking with gusts of wind and lightning.\n\nIts shape takes up the dragon of Chinese prints, a creature tied to sky, storm and imperial authority, which makes it the logical guardian of the palace it flies over. The battle is largely airborne: you must leap onto its back, run along its spine and strike its horns as it banks. It is one of the rare Kingdom Hearts II bosses whose arena is entirely in motion.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Dans la Terre des Dragons, Mulan, déguisée en soldat sous le nom de Ping, sauve l'Empereur de Shan-Yu avec l'aide de Sora, Mushu et Shang. Le chef huns vaincu, la cour croit la menace écartée et la cité célèbre sa victoire.\n\nC'est alors que le Storm Rider s'abat sur le palais impérial. Le Sans-cœur, attiré par les ténèbres laissées par Shan-Yu, s'attaque directement au toit du palais où se tient l'Empereur. Sora et Mulan combattent sur les tuiles et sur le dos de la bête, dans un affrontement suspendu au-dessus de la ville. Sa chute confirme aux yeux de tous la valeur de Mulan et permet la fermeture de la serrure du monde. Le dragon revient plus tard sous forme de rencontre optionnelle, signe que le ciel de ce monde n'est jamais tout à fait sûr.",
          "In the Land of Dragons, Mulan, disguised as a soldier under the name Ping, saves the Emperor from Shan-Yu with the help of Sora, Mushu and Shang. With the Hun leader beaten, the court believes the threat is over and the city celebrates.\n\nThat is when the Storm Rider falls on the imperial palace. Drawn by the darkness Shan-Yu left behind, the Heartless attacks the palace roof where the Emperor stands. Sora and Mulan fight across the tiles and on the beast's back, in a confrontation suspended above the city. Its fall confirms Mulan's worth in everyone's eyes and allows the world's keyhole to be sealed. The dragon later returns as an optional encounter, a sign that this world's sky is never quite safe.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Storm Rider", url: "https://kingdomhearts.fandom.com/wiki/Storm_Rider" }],
  },

  "grim-reaper": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Grim Reaper est un Sans-cœur emblème en forme de faucheuse : une silhouette encapuchonnée flottant au-dessus du pont d'un navire, une faux démesurée à la main, le visage réduit à une bouche et à deux points lumineux sous la capuche. Sa taille et son immobilité de spectre en font un adversaire lent mais écrasant.\n\nCe qui le distingue, c'est son lien avec les médaillons d'or aztèque : il puise sa force dans les pièces maudites et devient invulnérable tant qu'il en possède. Le combat consiste donc moins à le frapper qu'à lui reprendre les médaillons et à les jeter dans le coffre auquel ils appartiennent. Il est le prolongement monstrueux de la malédiction qui frappe l'équipage de Barbossa : un mort qui refuse de rester mort tant que l'or n'est pas rendu.",
          "The Grim Reaper is an Emblem Heartless shaped like a reaper: a hooded figure floating above a ship's deck, an oversized scythe in hand, its face reduced to a mouth and two points of light beneath the hood. Its size and spectral stillness make it a slow but crushing opponent.\n\nWhat sets it apart is its bond with the Aztec gold medallions: it draws strength from the cursed coins and is invulnerable while it holds them. The fight is therefore less about hitting it than about taking the medallions back and returning them to the chest they belong to. It is the monstrous extension of the curse that struck Barbossa's crew: a dead thing that refuses to stay dead while the gold is unreturned.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sora revient à Port Royal après la mort de Barbossa et découvre que les médaillons maudits ont été dispersés et volés. Le Grim Reaper s'en est emparé et s'en sert pour se rendre invincible, tandis que Jack Sparrow, plus intéressé par le trésor que par la morale, complique la traque.\n\nLe premier affrontement, à bord du Black Pearl, se termine sans conclusion : le Sans-cœur reprend les pièces et s'enfuit. Il faut réunir les médaillons dispersés dans le port et sur l'île, puis les rendre au coffre pour le priver de sa protection, avant de l'affronter une seconde fois à l'Île de la Muerta. Sa destruction met un terme définitif à la malédiction de l'or aztèque et laisse Jack libre de reprendre la mer — ce qu'il fait aussitôt, sans remercier personne.",
          "Sora returns to Port Royal after Barbossa's death to find the cursed medallions scattered and stolen. The Grim Reaper has taken them and uses them to make itself invincible, while Jack Sparrow, more interested in treasure than in principle, complicates the hunt.\n\nThe first confrontation aboard the Black Pearl ends without resolution: the Heartless takes the coins back and flees. The medallions scattered around the port and the island must be gathered and returned to the chest to strip it of its protection, before facing it a second time at the Isla de Muerta. Destroying it puts a definitive end to the curse of the Aztec gold and leaves Jack free to sail again — which he does at once, thanking no one.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Grim Reaper", url: "https://kingdomhearts.fandom.com/wiki/Grim_Reaper" }],
  },

  "groundshaker": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Groundshaker est un Sans-cœur emblème colossal aux allures de mammouth : un corps massif porté par quatre pattes-piliers, une tête basse, des ornements sombres sur le dos et une aura de ténèbres qui traîne derrière lui. Son nom vient de sa démarche, qui suffit à ébranler la savane.\n\nContrairement à la plupart des boss de Kingdom Hearts II, il ne se combat pas dans une arène close : Sora et Simba le poursuivent à travers la plaine, courent le long de ses flancs, grimpent sur son échine et frappent la tête pendant qu'il avance. La créature n'a rien d'un adversaire tactique — elle est une masse en mouvement, image de la catastrophe qui menace un royaume dont le roi vient à peine d'être rétabli.",
          "The Groundshaker is a colossal Emblem Heartless resembling a mammoth: a massive body on four pillar-legs, a low-slung head, dark ornaments along its back and a trail of darkness behind it. Its name comes from its gait, which alone shakes the savannah.\n\nUnlike most Kingdom Hearts II bosses it is not fought in a closed arena: Sora and Simba chase it across the plain, run along its flanks, climb its spine and strike the head as it advances. The creature is no tactical opponent — it is a mass in motion, an image of the catastrophe threatening a kingdom whose king has only just been restored.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Simba a repris la Terre des Lions à Scar, mais le doute le ronge : il se croit indigne de son père et l'ombre de son oncle continue de le hanter, littéralement, sous la forme d'un fantôme que Sora, Donald et Dingo doivent chasser à travers le royaume.\n\nQuand Simba affronte enfin cette image et l'accepte, les ténèbres accumulées prennent une dernière forme : le Groundshaker, qui traverse la savane en direction du Rocher des Lions. Sora combat aux côtés du roi lion, à pleine course sur le dos du monstre. La victoire ne se joue pas seulement sur la bête : c'est en rugissant, en assumant enfin sa place, que Simba met fin à la peur qui avait donné naissance au Sans-cœur. La serrure du monde apparaît ensuite au Rocher des Lions.",
          "Simba has taken the Pride Lands back from Scar, but doubt gnaws at him: he believes himself unworthy of his father, and his uncle's shadow keeps haunting him, literally, as a ghost Sora, Donald and Goofy must chase across the kingdom.\n\nWhen Simba finally faces that image and accepts it, the accumulated darkness takes one last shape: the Groundshaker, crossing the savannah towards Pride Rock. Sora fights alongside the lion king, at full run on the monster's back. The victory is not won on the beast alone: it is by roaring, by finally claiming his place, that Simba ends the fear which gave the Heartless its birth. The world's keyhole then appears at Pride Rock.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Groundshaker", url: "https://kingdomhearts.fandom.com/wiki/Groundshaker" }],
  },

  "antlion": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "L'Antlion est un Sans-cœur emblème massif et d'aspect mécanique : des anneaux tournants qui forment un corps ovoïde, une turbine grise qui le maintient en mouvement, une petite tête sphérique aux yeux jaunes et deux mandibules d'acier bleuté. Il tire son nom du fourmilion, l'insecte qui creuse un entonnoir de sable pour y faire glisser ses proies.\n\nC'est exactement ainsi qu'il combat. Il tourbillonne au-dessus du désert, aspire le sable en une tempête et attire tout ce qui l'entoure vers ses mandibules. Sa présence explique à elle seule les tempêtes qui rendent Agrabah impraticable : la créature n'attaque pas une cible précise, elle transforme le climat du monde en piège permanent.",
          "The Antlion is a massive, mechanical-looking Emblem Heartless: rotating rings forming an egg-shaped body, a grey turbine keeping it aloft, a small spherical head with yellow eyes and two steel-blue mandibles. It takes its name from the antlion, the insect that digs a funnel in sand to make its prey slide down.\n\nThat is exactly how it fights. It whirls above the desert, draws the sand up into a storm and pulls everything around it towards its mandibles. Its presence alone explains the storms that make Agrabah impassable: the creature does not attack a specific target, it turns the world's weather into a permanent trap.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "L'Organisation XIII surveille Agrabah, où des tempêtes de sable anormales empêchent toute progression. Saïx envisage d'abord d'y envoyer Xion, alors incapable d'invoquer la Keyblade, comme on jette une recrue dans l'eau pour voir si elle nage — décision qui en dit long sur la place qu'occupe la jeune fille dans la hiérarchie.\n\nC'est finalement Roxas qui reçoit l'ordre d'éliminer le géant sans nom repéré dans le désert. Il découvre l'Antlion au cœur de la tempête et l'abat, mettant fin aux perturbations qui isolaient la cité. La mission, comme la plupart de celles de 358/2 Days, n'apporte aucune révélation : elle sert le fonctionnement quotidien de l'Organisation, qui nettoie les mondes pour garder ses zones de chasse ouvertes et récolter les cœurs libérés.",
          "Organization XIII is watching Agrabah, where abnormal sandstorms make progress impossible. Saïx first considers sending Xion, then unable to summon the Keyblade, the way one throws a recruit into water to see if they swim — a decision that says a great deal about the girl's place in the hierarchy.\n\nIn the end it is Roxas who is ordered to eliminate the unnamed giant spotted in the desert. He finds the Antlion at the heart of the storm and cuts it down, ending the disturbances that had cut the city off. The mission, like most in 358/2 Days, brings no revelation: it serves the Organization's daily business, clearing worlds to keep its hunting grounds open and harvest released hearts.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Antlion", url: "https://kingdomhearts.fandom.com/wiki/Antlion" }],
  },

  "infernal-engine": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "L'Infernal Engine est un Sans-cœur emblème en forme de grand caisson de bois monté sur quatre roues noires. Sa façade est occupée par un visage : une bouche rouge dentelée aux lèvres jaunes et deux yeux luisants. Une balustrade ornée court sur son toit, hérissée de piques blanches.\n\nSa singularité tient à son équipage. De petits Sans-cœur armés d'arcs se tiennent sur sa plate-forme supérieure et tirent pendant que le chariot roule et écrase. Le boss se combat donc à deux niveaux : la machine elle-même, lourde et difficile à contourner, et les archers qu'il faut déloger pour cesser d'être harcelé. Son allure de char de siège médiéval, tout en bois et en ferrures, l'accorde au château qu'il hante.",
          "The Infernal Engine is an Emblem Heartless shaped like a large wooden box mounted on four black wheels. Its front is taken up by a face: a jagged red mouth with yellow lips and two glowing eyes. An ornamented guardrail runs along its roof, bristling with white spikes.\n\nWhat makes it unusual is its crew. Small bow-armed Heartless stand on its upper platform and shoot while the cart rolls and crushes. The boss is therefore fought on two levels: the machine itself, heavy and hard to get around, and the archers that must be dislodged to stop the harassment. Its look of a medieval siege engine, all timber and ironwork, suits the castle it haunts.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Roxas est envoyé seul au Château de la Bête pour y détruire un Sans-cœur géant repéré par l'Organisation. Il traverse les couloirs déserts et finit par acculer l'Infernal Engine, qu'il abat sans qu'aucun allié ne l'accompagne — un détail qui souligne à quel point Saïx lui confie désormais les missions solitaires.\n\nC'est ce qui suit le combat qui compte. Roxas aperçoit la Bête et Belle ensemble et ne comprend pas ce qui les lie ; Xaldin, en poste dans ce monde, en profite pour lui parler de l'amour et de l'attachement, notions qu'un Simili est censé ne pas éprouver. La mission devient ainsi l'une des nombreuses occasions où le jeu fissure le dogme de l'Organisation, en montrant Roxas troublé par des sentiments qu'on lui affirme impossibles.",
          "Roxas is sent alone to Beast's Castle to destroy a giant Heartless spotted by the Organization. He crosses the deserted corridors and eventually corners the Infernal Engine, which he brings down with no ally at his side — a detail that underlines how far Saïx now trusts him with solitary missions.\n\nWhat follows the fight is what matters. Roxas glimpses the Beast and Belle together and does not understand what binds them; Xaldin, stationed in that world, seizes the chance to talk to him about love and attachment, notions a Nobody is supposed to be incapable of. The mission thus becomes one of the many moments where the game cracks the Organization's dogma, showing Roxas unsettled by feelings he is told are impossible.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Infernal Engine", url: "https://kingdomhearts.fandom.com/wiki/Infernal_Engine" }],
  },

  "dustflier": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Dustflier est un Sans-cœur emblème draconique de grande taille : peau brune, ventre clair, épaules et pattes noires, ailes courtes et trapues aux extrémités orangées, et une queue en massue armée de trois pointes coniques. Sa tête plate en V porte deux petits yeux jaunes, et l'emblème des Sans-cœur s'étale sur son poitrail.\n\nIl est conçu comme un test d'endurance plutôt que comme un adversaire narratif. Ses coups infligent des dégâts très lourds, il inflige des altérations d'état et fait surgir des Ombres pendant le combat, si bien qu'il faut privilégier l'esquive et la mobilité aérienne plutôt que l'échange direct. C'est le genre d'adversaire que la série réserve aux joueurs venus chercher une difficulté supérieure à celle du scénario.",
          "The Dustflier is a large draconic Emblem Heartless: brown skin, a pale belly, black shoulders and feet, short stubby wings tipped in orange, and a club-like tail armed with three conical spikes. Its flat V-shaped head carries two small yellow eyes, and the Heartless emblem spreads across its chest.\n\nIt is designed as an endurance test rather than a story opponent. Its blows deal very heavy damage, it inflicts status ailments and spawns Shadows during the fight, so dodging and aerial mobility matter far more than trading hits. It is the kind of opponent the series reserves for players looking for difficulty beyond the main plot.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Le Dustflier n'apparaît qu'une fois, tout à la fin des missions de 358/2 Days, sur la place de la gare de la Cité du Crépuscule — le lieu même où Roxas passait ses soirées à manger une glace avec Axel et Xion. Il faut d'abord venir à bout d'une série d'autres Sans-cœur géants pour que la mission se débloque.\n\nL'ironie du décor fait tout l'intérêt de l'affrontement : le jeu place son adversaire le plus violent dans son endroit le plus paisible. Aucun dialogue, aucune conséquence scénaristique ; c'est un défi pur, réservé à ceux qui ont épuisé le reste du carnet de missions. Le Dustflier reste ainsi le combat le plus redouté de l'épisode Nintendo DS, souvent cité parmi les plus exigeants de toute la série.",
          "The Dustflier appears only once, at the very end of 358/2 Days' missions, on Twilight Town's Station Plaza — the very place where Roxas spent his evenings eating ice cream with Axel and Xion. A string of other giant Heartless must be defeated before the mission unlocks.\n\nThe irony of the setting is the whole point: the game places its most violent opponent in its most peaceful spot. No dialogue, no story consequence; it is a pure challenge for players who have exhausted the rest of the mission log. The Dustflier remains the most feared battle of the Nintendo DS entry, often cited among the hardest in the whole series.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dustflier", url: "https://kingdomhearts.fandom.com/wiki/Dustflier" }],
  },

  "mushroom-xiii": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Les Mushroom XIII sont treize Sans-cœur emblèmes en forme de champignons, vêtus du manteau noir de l'Organisation XIII et portant chacun un chiffre romain de I à XIII inscrit dans le dos. Ils ne s'attaquent jamais à Sora et ne peuvent pas être vaincus par des coups ordinaires.\n\nChacun impose à la place une épreuve : maintenir un enchaînement, esquiver sans être touché, geler l'adversaire, le frapper à une hauteur donnée, atteindre un score dans le temps imparti. Ce sont des puzzles déguisés en ennemis, prolongement de la série des champignons des jeux précédents. Leur costume est un clin d'œil : là où l'Organisation fabrique des Similis, ces créatures-là sont des Sans-cœur qui en empruntent seulement l'uniforme.",
          "The Mushroom XIII are thirteen mushroom-shaped Emblem Heartless dressed in Organization XIII's black coat, each bearing a Roman numeral from I to XIII on its back. They never attack Sora and cannot be beaten by ordinary blows.\n\nEach one sets a challenge instead: keep a combo going, dodge without being hit, freeze the opponent, strike at a given height, reach a score within a time limit. They are puzzles dressed as enemies, an extension of the mushroom line from earlier games. Their costume is a wink: where the Organization manufactures Nobodies, these creatures are Heartless merely borrowing the uniform.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Les Mushroom XIII sont ajoutés par Kingdom Hearts II Final Mix et dispersés dans une dizaine de mondes : la Cité du Crépuscule, le Château de la Bête, la Caverne des Merveilles, les Enfers, le Fleuve du Temps, l'Île de la Muerta, le Jardin Radieux et jusqu'à l'Immeuble du Souvenir, au Monde qui n'existe pas.\n\nLes vaincre — c'est-à-dire réussir leurs épreuves — rapporte des matériaux de Sérénité ainsi que des bâtons pour Donald et des boucliers pour Dingo, dont plusieurs comptent parmi les meilleurs équipements du jeu. Réussir les treize donne accès à la Preuve de Paix et permet d'obtenir la Keyblade Winner's Proof. Ils constituent donc l'un des grands contenus annexes de l'épisode, sans lien avec le scénario mais indispensable à qui veut le compléter entièrement.",
          "The Mushroom XIII were added by Kingdom Hearts II Final Mix and scattered across a dozen worlds: Twilight Town, Beast's Castle, the Cave of Wonders, the Underworld, Timeless River, the Isla de Muerta, Radiant Garden and even Memory's Skyscraper in The World That Never Was.\n\nBeating them — that is, passing their challenges — yields Tranquility materials as well as staves for Donald and shields for Goofy, several of which rank among the game's best equipment. Completing all thirteen grants the Proof of Peace and allows the Winner's Proof Keyblade to be obtained. They are therefore one of the entry's major side activities, unconnected to the plot but essential to anyone aiming for full completion.",
        ),
      },
    ],
    trivia: [
      L(
        "Ils prolongent la lignée des champignons de Kingdom Hearts (Mushroom, Rare Truffle), ennemis pacifiques qu'il fallait déjà traiter d'une manière particulière.",
        "They continue the mushroom line from Kingdom Hearts (Mushroom, Rare Truffle), peaceful enemies that already had to be handled in a particular way.",
      ),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mushroom XIII", url: "https://kingdomhearts.fandom.com/wiki/Mushroom_XIII" }],
  },

  "guardian": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Guardian est un Sans-cœur emblème d'aspect mécanique, gris sombre, en forme d'entonnoir renversé qui flotte au-dessus du sol. Deux yeux jaunes brillent sur sa face avant, des canons losangés sont montés sur ses flancs et un anneau noir tourne lentement autour de sa base.\n\nIl combat exclusivement dans les airs et son attaque caractéristique est un rayon continu qui balaie tout ce qui se trouve devant lui et annule les défenses de sa cible. La riposte passe par la magie de foudre, qui interrompt la charge du canon. Son nom, qui désigne un être veillant sur un autre, renvoie sans doute à sa parenté d'allure avec les Watchers, ces Sans-cœur plus faibles chargés de surveiller les lieux.",
          "The Guardian is a mechanical-looking Emblem Heartless, dark grey, shaped like an upturned funnel hovering above the ground. Two yellow eyes glow on its front face, diamond-shaped guns are mounted on its sides and a black ring turns slowly around its base.\n\nIt fights entirely in the air, and its signature attack is a sustained beam that sweeps everything in front of it and nullifies its target's defences. The counter runs through Thunder magic, which interrupts the cannon's charge. Its name, denoting a being that watches over another, likely points to its resemblance to the Watchers, weaker Heartless posted to keep an eye on a place.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Roxas et Axel sont envoyés ensemble à la Cité du Crépuscule pour éliminer le Guardian, un Sans-cœur assez puissant pour justifier un binôme. La mission se déroule sans complication : les deux membres de l'Organisation abattent la machine volante puis s'accordent la pause habituelle sur le Terrain de Sable, glace à l'eau de mer en main.\n\nC'est là qu'Axel annonce à Roxas qu'il est muté au Manoir Oblivion et qu'il ne reviendra pas avant longtemps. Le jeune Simili, encore incapable de nommer ce qu'il ressent, se retrouve seul avec son bâtonnet de glace — sur lequel il lit le mot « GAGNÉ ». Le boss n'est donc qu'un prétexte : la mission marque le départ d'Axel vers les événements de Chain of Memories et le début de l'isolement de Roxas.",
          "Roxas and Axel are sent together to Twilight Town to eliminate the Guardian, a Heartless powerful enough to warrant a pair. The mission goes smoothly: the two Organization members bring the flying machine down, then take their usual break in the Sandlot, sea-salt ice cream in hand.\n\nThat is where Axel tells Roxas he is being reassigned to Castle Oblivion and will not be back for a long time. The young Nobody, still unable to name what he feels, is left alone with his ice cream stick — on which he reads the word “WINNER”. The boss is therefore only a pretext: the mission marks Axel's departure towards the events of Chain of Memories and the start of Roxas's isolation.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Guardian", url: "https://kingdomhearts.fandom.com/wiki/Guardian_(Heartless)" }],
  },

  "demon-tide": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "La Marée Démoniaque n'est pas un individu mais une agglomération : des milliers d'Ombres compressées en une seule masse mouvante, qui se déplace comme un raz-de-marée noir parcouru d'yeux jaunes. Elle naît là où les Sans-cœur purs-sang s'accumulent en quantité telle qu'ils cessent d'agir séparément.\n\nOn ne la combat pas comme une bête : elle balaie, engloutit, emporte tout ce qu'elle croise et ne laisse pas d'ouverture évidente. Sa parente plus petite, la Tour Démoniaque, tourbillonne en colonne verticale ; la Marée, elle, s'étale et déferle. Ces deux formes sont apparues avec le Domaine des Ténèbres, où l'absence de lumière permet à une telle densité de se constituer, et elles constituent l'arme la plus impersonnelle de tout l'arsenal de Xehanort.",
          "The Demon Tide is not an individual but an aggregation: thousands of Shadows compressed into a single moving mass that rolls like a black tidal wave shot through with yellow eyes. It forms where Pureblood Heartless pile up in such numbers that they stop acting separately.\n\nIt is not fought like a beast: it sweeps, swallows and carries off everything in its path, offering no obvious opening. Its smaller relative, the Demon Tower, whirls as a vertical column; the Tide instead spreads and breaks. Both forms emerged with the Realm of Darkness, where the absence of light allows such density to build, and they are the most impersonal weapon in Xehanort's whole arsenal.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Cimetière des Keyblades, les sept Gardiens de la Lumière avancent enfin réunis vers la Vraie Organisation XIII. Xehanort ne leur oppose pas d'abord ses porteurs : il libère une armée de Sans-cœur qui se rassemble en une Marée Démoniaque immense.\n\nLe combat tourne au désastre. La vague emporte les Gardiens l'un après l'autre, malgré leurs efforts pour se protéger mutuellement, et Sora reste seul sur le sable. C'est cette défaite complète qui le pousse à employer le pouvoir de l'éveil pour remonter jusqu'à l'instant précédant leur disparition et les ramener tous — geste que Yen Sid avait pourtant averti d'éviter, et dont le prix sera payé à la toute fin du jeu par la disparition de Sora lui-même. La Marée Démoniaque est donc moins un boss qu'un point de bascule du récit.",
          "At the Keyblade Graveyard, the seven Guardians of Light finally advance together against the Real Organization XIII. Xehanort does not send his wielders first: he releases an army of Heartless that gathers into an immense Demon Tide.\n\nThe fight turns into a disaster. The wave carries the Guardians off one after another, despite their efforts to shield each other, and Sora is left alone on the sand. That total defeat is what pushes him to use the power of waking to reach back to the moment before they vanished and bring them all back — a step Yen Sid had warned him against, and whose price is paid at the very end of the game by Sora's own disappearance. The Demon Tide is therefore less a boss than a turning point in the story.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Demon Tide", url: "https://kingdomhearts.fandom.com/wiki/Demon_Tide" }],
  },

  "demon-tower": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "La Tour Démoniaque est une masse d'Ombres purs-sang enroulées en colonne tourbillonnante, originaire du Domaine des Ténèbres. Là où la Marée Démoniaque déferle horizontalement, la Tour monte, aspire et fait tourner les Sans-cœur qui la composent comme une tornade vivante.\n\nLe combat consiste à frapper la colonne pour en détacher des Ombres, puis à profiter des moments où elle se disloque pour toucher son cœur. Elle réapparaît partout où la densité de ténèbres est suffisante : les rues englouties du Domaine des Ténèbres, les mondes que la Vraie Organisation attaque, et jusqu'aux abords du Cimetière des Keyblades. C'est l'illustration la plus concrète de l'idée que les Sans-cœur n'ont pas besoin d'un chef pour devenir une catastrophe collective.",
          "The Demon Tower is a mass of Pureblood Shadows coiled into a whirling column, native to the Realm of Darkness. Where the Demon Tide breaks horizontally, the Tower rises, draws things in and spins the Heartless that compose it like a living tornado.\n\nThe fight means striking the column to shake Shadows loose, then using the moments when it comes apart to reach its core. It reappears wherever the density of darkness is sufficient: the drowned streets of the Realm of Darkness, the worlds the Real Organization attacks, and even the approaches to the Keyblade Graveyard. It is the most concrete illustration of the idea that Heartless need no leader to become a collective catastrophe.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Kingdom Hearts III ouvre sur des Tours Démoniaques. Riku et Mickey, partis dans le Domaine des Ténèbres retrouver Aqua, en affrontent au Rivage Obscur ; l'une d'elles immobilise même le roi sous le contrôle d'Aqua corrompue par les ténèbres.\n\nSora, de son côté, en croise une dès son retour à la Cité du Crépuscule, avant que le voyage ne commence vraiment. Plus tard, au Cimetière des Keyblades, Riku des Ténèbres en invoque une légion pour éprouver les Gardiens de la Lumière : chaque porteur doit se frayer un passage à travers ces colonnes, avant que la Marée Démoniaque ne les submerge tous. Les Tours servent ainsi de mesure constante de la puissance brute que Xehanort peut jeter sur ses adversaires sans y consacrer un seul de ses treize porteurs.",
          "Kingdom Hearts III opens on Demon Towers. Riku and Mickey, gone into the Realm of Darkness to find Aqua, face them at the Dark Margin; one even pins the king down under the control of a darkness-corrupted Aqua.\n\nSora, for his part, meets one as soon as he returns to Twilight Town, before the journey truly begins. Later, at the Keyblade Graveyard, Dark Riku summons a legion of them to test the Guardians of Light: each wielder must cut a path through these columns before the Demon Tide swallows them all. The Towers thus serve as a constant measure of the raw force Xehanort can throw at his opponents without spending a single one of his thirteen wielders.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Demon Tower", url: "https://kingdomhearts.fandom.com/wiki/Demon_Tower" }],
  },

  "rock-titan": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Titan de roche vient directement du film Hercule de Disney : c'est l'un des quatre Titans que Zeus avait emprisonnés et que Hadès libère pour renverser l'Olympe. Sa masse est faite de blocs de pierre empilés, deux têtes surmontent ses épaules et ses bras s'allongent démesurément pour écraser ce qui se trouve à ses pieds.\n\nContrairement aux Sans-cœur, il n'a rien à voir avec les ténèbres du cœur : c'est une créature mythologique, une force naturelle que quelqu'un a décidé de lâcher. Le combat repose sur sa taille — il faut esquiver ses poings, courir sous lui et frapper là où on peut l'atteindre — et sur les rochers qu'il jette, qui deviennent autant d'obstacles. Il est le plus lent et le plus lourd des quatre.",
          "The Rock Titan comes straight from Disney's Hercules: one of the four Titans Zeus had imprisoned and that Hades frees to overthrow Olympus. Its bulk is made of stacked blocks of stone, two heads crown its shoulders and its arms stretch out absurdly to crush whatever stands at its feet.\n\nUnlike the Heartless it has nothing to do with darkness of the heart: it is a mythological creature, a natural force somebody decided to unleash. The fight rests on its size — dodging its fists, running beneath it and striking wherever it can be reached — and on the boulders it throws, which become obstacles in themselves. It is the slowest and heaviest of the four.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Au Colisée de l'Olympe, Sora, Donald et Dingo enchaînent les tournois pour prouver leur valeur à Phil, qui les prend d'abord pour des gêneurs. La Coupe d'Hadès est la dernière et la plus dure, organisée par le dieu des Enfers lui-même dans l'espoir de faire abattre Hercule par les concurrents.\n\nLe combat final de la coupe se joue seul, dans un colisée plongé dans la pénombre : c'est le Titan de roche qui attend le vainqueur. Le monstre n'a pas de rôle dans l'intrigue générale — il est le sommet de la progression sportive du monde, la preuve que le porteur de la Keyblade peut tenir tête à une créature de la mythologie. Sa défaite achève le parcours du Colisée et rapporte la récompense la plus convoitée du tournoi.",
          "At Olympus Coliseum, Sora, Donald and Goofy work through the tournaments to prove themselves to Phil, who first takes them for a nuisance. The Hades Cup is the last and hardest, run by the lord of the Underworld himself in the hope that the contestants will bring Hercules down.\n\nThe cup's final match is fought alone, in a coliseum dropped into gloom: the Rock Titan is what awaits the winner. The monster has no role in the wider plot — it is the summit of the world's athletic progression, proof that the Keyblade wielder can stand up to a creature out of mythology. Its defeat completes the Coliseum's course and yields the tournament's most coveted reward.",
        ),
      },
    ],
    trivia: [
      L(
        "Dans Kingdom Hearts III, le Titan de roche revient garder le sommet du mont Olympe : Sora doit escalader la falaise en esquivant les rochers qu'il lance.",
        "In Kingdom Hearts III the Rock Titan returns to guard the summit of Mount Olympus: Sora has to climb the cliff while dodging the boulders it throws.",
      ),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Rock Titan", url: "https://kingdomhearts.fandom.com/wiki/Rock_Titan" }],
  },

  "ice-titan": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Titan de glace est le plus élancé des quatre Titans du film Hercule : une silhouette bleutée et translucide, taillée dans le gel, dont le souffle projette des blocs de glace et dont les bras s'étirent pour balayer l'arène. Il ne se déplace presque pas et laisse ses projectiles faire le travail.\n\nCette immobilité définit son combat. Le seul moyen d'entamer sérieusement le colosse consiste à lui renvoyer ses propres éclats de glace, ce qui fait de l'affrontement un long échange à distance plutôt qu'un corps-à-corps. Sa mécanique de renvoi est restée célèbre parmi les joueurs de la série, car elle demande une régularité parfaite sur une durée inhabituellement longue.",
          "The Ice Titan is the slenderest of the four Titans from the film Hercules: a bluish, translucent figure carved from frost, whose breath hurls blocks of ice and whose arms stretch to sweep the arena. It barely moves and lets its projectiles do the work.\n\nThat stillness defines its fight. The only way to seriously wound the colossus is to knock its own shards of ice back at it, which turns the confrontation into a long ranged exchange rather than a melee. Its deflection mechanic became famous among series players, because it demands perfect consistency over an unusually long stretch.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le Titan de glace n'apparaît pas dans le déroulement normal de l'histoire : il attend au Colisée de l'Olympe ceux qui ont remporté toutes les coupes, y compris la Coupe d'Hadès, et qui reviennent chercher un adversaire à leur mesure.\n\nC'est l'un des combats optionnels les plus exigeants du premier jeu, aux côtés de Sephiroth. Phil et Hercule n'ont rien à voir avec sa venue ; il est là comme épreuve pure, sans scène, sans dialogue et sans conséquence sur le récit. Le vaincre récompense le joueur par l'un des objets les plus rares de l'épisode et marque, pour beaucoup, la fin réelle du contenu du Colisée. Le personnage reviendra dans Kingdom Hearts III, cette fois pleinement intégré à l'intrigue de l'Olympe.",
          "The Ice Titan does not appear in the normal course of the story: it waits at Olympus Coliseum for those who have won every cup, the Hades Cup included, and come back looking for an opponent worth their time.\n\nIt is one of the first game's most demanding optional fights, alongside Sephiroth. Phil and Hercules have nothing to do with its arrival; it is there as a pure trial, with no cutscene, no dialogue and no bearing on the plot. Beating it rewards the player with one of the entry's rarest items and marks, for many, the real end of the Coliseum's content. The character returns in Kingdom Hearts III, this time fully woven into the Olympus storyline.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Ice Titan", url: "https://kingdomhearts.fandom.com/wiki/Ice_Titan" }],
  },

  "lava-titan": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Titan de lave est le troisième des géants libérés par Hadès. Son corps est fait de roche en fusion : ses bras et sa partie inférieure sont liquéfiés, dégoulinants et incandescents, tandis que son torse et sa tête sont recouverts d'une croûte de magma craquelée par où la lave transparaît.\n\nIl combat en projetant des coulées et des boules de feu et en frappant le sol de ses bras coulants, transformant l'arène en surface brûlante. Sa présence colle à la géographie du monde : le Titan est une force tellurique, et l'affronter revient à se battre contre le volcan lui-même. Dans le film comme dans le jeu, il agit rarement seul et complète les autres Titans, notamment le Titan de glace, avec lequel il forme un couple d'éléments opposés.",
          "The Lava Titan is the third of the giants freed by Hades. Its body is made of molten rock: its arms and lower half are liquefied, dripping and glowing, while its chest and head are covered in a crust of magma cracked open to show the lava beneath.\n\nIt fights by hurling flows and fireballs and by slamming the ground with its running arms, turning the arena into a burning surface. Its presence fits the world's geography: the Titan is a telluric force, and fighting it means fighting the volcano itself. In the film as in the game, it rarely acts alone and complements the other Titans, notably the Ice Titan, with which it forms a pair of opposed elements.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Hadès libère les quatre Titans pour ravager l'Olympe et se débarrasser de Zeus. Le Titan de lave et le Titan de glace agissent de concert : ils enferment Zeus dans un cône de lave refroidie au sommet du mont Olympe, neutralisant le roi des dieux avant qu'il n'ait pu réagir.\n\nSora, Donald et Dingo les affrontent tous deux dans un même combat, au Royaume des Dieux, en devant gérer simultanément le feu de l'un et la précision de l'autre. Le Titan de vent, lui, reste hors d'atteinte pendant cette phase et absorbera ensuite leurs pouvoirs. Une fois tous les Titans vaincus, Hercule libère son père, puis ramasse les géants d'une seule prise, les fourre dans le Titan de vent et projette l'ensemble dans l'espace.",
          "Hades frees the four Titans to ravage Olympus and be rid of Zeus. The Lava Titan and the Ice Titan act together: they seal Zeus inside a cone of cooled lava at the summit of Mount Olympus, neutralising the king of the gods before he can react.\n\nSora, Donald and Goofy face both of them in a single battle in the Realm of the Gods, having to handle one's fire and the other's precision at once. The Tornado Titan stays out of reach during this phase and later absorbs their powers. Once every Titan is beaten, Hercules frees his father, then scoops the giants up in one grip, stuffs them into the Tornado Titan and hurls the whole lot into space.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lava Titan", url: "https://kingdomhearts.fandom.com/wiki/Lava_Titan" }],
  },

  "tornado-titan": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Titan de vent est le quatrième géant du film Hercule : une colonne d'air en rotation surmontée d'une tête, sans masse solide, qui se déplace en aspirant tout ce qui l'entoure. Il n'a pas de corps à frapper au sens habituel, ce qui en fait le plus difficile à atteindre des quatre.\n\nSa particularité est d'absorber : il avale les autres Titans et les pouvoirs qu'ils possèdent, se chargeant de feu et de glace pour cracher ensuite ces éléments dans sa tornade. Il est ainsi le seul dont la puissance dépend des trois autres, et le combat contre lui n'a de sens qu'après les avoir affrontés. C'est également le Titan que le film utilise pour l'image finale des géants renvoyés dans le ciel.",
          "The Tornado Titan is the fourth giant from the film Hercules: a rotating column of air topped by a head, with no solid mass, moving by drawing in everything around it. It has no body to strike in the usual sense, which makes it the hardest of the four to reach.\n\nIts speciality is absorption: it swallows the other Titans and the powers they hold, charging itself with fire and ice to then spit those elements out inside its tornado. It is thus the only one whose strength depends on the other three, and the fight against it only makes sense after facing them. It is also the Titan the film uses for its final image of the giants flung back into the sky.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Royaume des Dieux, après le double combat contre le Titan de lave et le Titan de glace, le Titan de vent aspire les deux vaincus et se met à cracher feu et glace au cœur de sa colonne. Sora doit alors se battre dans un environnement en rotation constante, où le sol lui-même est emporté.\n\nSa chute clôt l'épisode olympien de Kingdom Hearts III. Hercule libère Zeus du cône de lave, puis se sert du Titan de vent comme d'un sac : il y enfourne les autres géants et lance le tout dans l'espace, sous les yeux de Sora. Hadès, dont c'était le dernier plan, se retire furieux. L'aventure permet surtout à Sora d'y retrouver le pouvoir qu'il avait perdu et de comprendre que sa force ne vient pas de ses armes mais de ses liens.",
          "In the Realm of the Gods, after the double fight against the Lava and Ice Titans, the Tornado Titan sucks up the two defeated giants and starts spitting fire and ice from inside its column. Sora must then fight in a constantly rotating environment where the ground itself is carried away.\n\nIts fall closes Kingdom Hearts III's Olympus chapter. Hercules frees Zeus from the cone of lava, then uses the Tornado Titan as a sack: he stuffs the other giants into it and hurls the whole thing into space before Sora's eyes. Hades, whose last plan this was, withdraws in fury. Above all, the adventure lets Sora begin to recover the power he had lost and understand that his strength comes not from his weapons but from his bonds.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Tornado Titan", url: "https://kingdomhearts.fandom.com/wiki/Tornado_Titan" }],
  },

  "king-of-toys": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le King of Toys est un Sans-cœur emblème qui a pris la forme d'une grande soucoupe volante en plastique violet, jouet de magasin agrandi jusqu'au gigantisme. Un faux visage est peint sur sa face avant, tandis que son vrai visage occupe le sommet de l'engin ; quatre antennes se dressent aux angles, des cônes montés sur ressorts pendent sous la coque et un dôme de verre trône en son centre.\n\nIl combat comme le jouet qu'il imite : salves de missiles, champs de force et tourbillons. L'affrontement se déroule à hauteur de rayonnage, dans un magasin où tout est démesuré parce que les héros y sont devenus des figurines. C'est l'un des rares Sans-cœur de la série dont l'apparence est entièrement dictée par le monde qui l'accueille.",
          "The King of Toys is an Emblem Heartless that has taken the shape of a large purple plastic flying saucer, a store toy blown up to giant size. A false face is painted on its front while its real face sits on top of the machine; four antennae rise from the corners, spring-mounted cones hang beneath the hull and a glass dome crowns its centre.\n\nIt fights like the toy it imitates: missile salvos, force fields and tornadoes. The battle takes place at shelf height, in a store where everything is oversized because the heroes have become action figures. It is one of the rare Heartless in the series whose appearance is entirely dictated by the world hosting it.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans la Boîte à Jouets, Sora, Donald et Dingo se réveillent transformés en figurines et découvrent que les jouets d'Andy ont disparu du magasin Galaxy Toys, où le Jeune Xehanort mène une expérience : il veut savoir si des êtres sans cœur véritable — des jouets — peuvent être plongés dans les ténèbres.\n\nQuand la manœuvre échoue, il fabrique le King of Toys à partir des ténèbres présentes dans le cœur de Buzz l'Éclair, dont il a temporairement brisé la volonté. Le Sans-cœur sert de diversion pour couvrir sa fuite. Sora, Woody et Buzz l'affrontent au dernier étage du magasin, à bord des grands robots Gigas. Sa destruction rend à Buzz sa clarté d'esprit et permet aux jouets de rentrer chez Andy, mais le Jeune Xehanort, lui, s'est déjà éclipsé.",
          "In Toy Box, Sora, Donald and Goofy wake up turned into action figures and discover that Andy's toys have vanished into the Galaxy Toys store, where Young Xehanort is running an experiment: he wants to know whether beings with no true heart — toys — can be plunged into darkness.\n\nWhen the attempt fails, he builds the King of Toys out of the darkness inside Buzz Lightyear's heart, whose will he has temporarily broken. The Heartless serves as a distraction to cover his escape. Sora, Woody and Buzz fight it on the store's top floor aboard the great Gigas robots. Destroying it restores Buzz's clarity and lets the toys go home to Andy, but Young Xehanort has already slipped away.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — King of Toys", url: "https://kingdomhearts.fandom.com/wiki/King_of_Toys" }],
  },

  "angelic-amber": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Angelic Amber n'est pas un Sans-cœur à proprement parler : c'est une poupée de collection possédée par un Sans-cœur Marionnette. Le jouet a un visage pâle et allongé, des yeux verts, du rouge à lèvres, des cheveux bleus bouclés et un serre-tête à oreilles de lapin blanches ; elle porte une robe victorienne noire bordée de blanc, des manches grises, un nœud à la taille, des socquettes blanches et des escarpins noirs.\n\nUne fois possédée, l'emblème des Sans-cœur apparaît sur son oreille gauche et ses yeux virent au doré. Le contraste entre cette apparence de poupée soignée et le comportement de la créature fait tout l'effet du combat, dans un magasin où chaque jouet peut basculer du côté des ténèbres.",
          "Angelic Amber is not strictly a Heartless: she is a collector's doll possessed by a Marionette Heartless. The toy has a pale, long face, green eyes, red lipstick, curled blue hair and a headband with white rabbit ears; she wears a black Victorian dress lined in white, grey sleeves, a bow at the waist, white socks and black heels.\n\nOnce possessed, the Heartless emblem appears on her left ear and her eyes turn gold. The contrast between that immaculate doll's appearance and the creature's behaviour is what gives the fight its effect, in a store where any toy might tip over to the side of darkness.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "En cherchant les jouets d'Andy dispersés dans Galaxy Toys, Sora, Woody et Buzz retrouvent Bayonne enfermé dans une maison de poupées du rayon consacré aux tout-petits. C'est Angelic Amber, possédée par une Marionnette, qui l'y retient.\n\nQuand le groupe la confronte, elle engage le combat au milieu du rayon, soutenue par d'autres jouets tombés eux aussi sous l'emprise des ténèbres. Sa défaite libère la poupée de la possession — elle n'est pas détruite, seulement délivrée, ce qui la distingue des Sans-cœur ordinaires. L'épisode a surtout une conséquence morale : Buzz, en voyant ce qui vient d'arriver, s'inquiète ouvertement de ce que Woody ou lui-même pourraient devenir si les ténèbres les atteignaient — angoisse que le Jeune Xehanort exploitera peu après.",
          "While looking for Andy's toys scattered around Galaxy Toys, Sora, Woody and Buzz find Hamm shut inside a dollhouse in the babies and toddlers section. It is Angelic Amber, possessed by a Marionette, who holds him there.\n\nWhen the group confronts her, she gives battle in the middle of the aisle, backed by other toys that have likewise fallen under the sway of darkness. Her defeat frees the doll from possession — she is not destroyed, only released, which sets her apart from ordinary Heartless. The episode matters above all morally: seeing what has just happened, Buzz openly worries about what Woody or he himself might become if darkness reached them — an anxiety Young Xehanort exploits shortly afterwards.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Angelic Amber", url: "https://kingdomhearts.fandom.com/wiki/Angelic_Amber" }],
  },

  "dark-baymax": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Dark Baymax n'est ni un Sans-cœur ni un Simili : c'est le Baymax d'origine, le robot infirmier resté coincé dans le portail dimensionnel à la fin du film Les Nouveaux Héros, récupéré et corrompu. Son armure violette et fuchsia, ses épaulières à pointes et son casque à cornes s'opposent point par point au rouge et bleu du Baymax reconstruit par Hiro.\n\nSa main droite est faite de Darkubes, ces cubes de ténèbres qui remplacent le gantelet perdu. Ce détail dit l'essentiel : la machine a été complétée avec de la matière obscure. Le personnage est moins un monstre qu'un ami détourné, et le combat contre lui reprend le motif récurrent de la série — devoir frapper quelqu'un qu'on voudrait sauver.",
          "Dark Baymax is neither a Heartless nor a Nobody: he is the original Baymax, the nurse robot left stranded in the dimensional portal at the end of Big Hero 6, recovered and corrupted. His purple and fuchsia armour, spiked shoulders and horned visor stand point for point against the red and blue of the Baymax Hiro rebuilt.\n\nHis right hand is made of Darkubes, cubes of darkness replacing the gauntlet he lost. That detail says everything: the machine was completed with dark matter. The character is less a monster than a friend turned against you, and the fight repeats the series' recurring motif — having to strike someone you would rather save.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "À San Fransokyo, des cubes de ténèbres — les Darkubes — attaquent la ville et absorbent les émotions de ses habitants. Riku des Ténèbres est derrière l'opération : il a récupéré le Baymax d'origine, en a extrait la puce de combat et l'a rechargée avec les données prises aux cœurs frappés par les Darkubes.\n\nLe résultat affronte Sora, Hiro et Big Hero 6 au-dessus de la ville. Le combat n'a rien d'un simple obstacle : il oblige Hiro à voir son premier Baymax retourné contre lui, écho direct de la colère qu'il avait failli laisser gagner dans le film. Une fois la machine mise hors d'état, Hiro la répare et lui rend sa programmation d'origine ; le Baymax restauré rejoint alors l'équipe, qui compte désormais un septième membre.",
          "In San Fransokyo, cubes of darkness — the Darkubes — attack the city and drain the emotions of its people. Dark Riku is behind the operation: he has recovered the original Baymax, extracted its combat chip and reloaded it with data taken from the hearts the Darkubes struck.\n\nThe result faces Sora, Hiro and Big Hero 6 above the city. The fight is no mere obstacle: it forces Hiro to see his first Baymax turned against him, a direct echo of the anger he nearly gave in to in the film. Once the machine is disabled, Hiro repairs it and restores its original programming; the recovered Baymax then joins the team, which now counts a seventh member.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dark Baymax", url: "https://kingdomhearts.fandom.com/wiki/Dark_Baymax" }],
  },

  "lump-of-horror": {
    sections: [
      {
        title: L("Nature du monstre", "Nature of the beast"),
        text: L(
          "Le Lump of Horror est un Nescient, donc une émotion négative devenue créature — ici la terreur. Il se présente comme une masse sombre et gluante à la base de laquelle s'ouvre un visage triste caractéristique des Nescients, surmontée d'une sphère bleue portant l'emblème au cœur renversé et entourée de bidons de cris arrachés à l'usine.\n\nCes bidons ne sont pas décoratifs : ils l'alimentent. Le monstre puise sa force dans l'énergie des hurlements d'enfants stockée par Monstres et Cie, et le combat consiste largement à le priver de ce carburant. C'est l'un des rares boss de Kingdom Hearts III à disposer d'une réserve d'énergie visible, dont l'épuisement décide de l'issue.",
          "The Lump of Horror is an Unversed, that is a negative emotion made creature — here, terror. It appears as a dark, gluey mass with the sad Unversed face opening at its base, topped by a blue sphere bearing the inverted-heart emblem and ringed with scream canisters torn from the factory.\n\nThose canisters are not decoration: they feed it. The monster draws its strength from the energy of children's screams stockpiled by Monsters, Inc., and the fight largely consists of cutting off that fuel. It is one of the rare Kingdom Hearts III bosses with a visible energy reserve whose exhaustion decides the outcome.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "À Monstropolis, Vanitas s'est glissé dans l'usine pour tenter de faire de Bouh un réceptacle : une enfant terrorisée est, selon lui, un cœur idéal à plonger dans les ténèbres. Randall Boggs, qui veut évincer Bob et Sulli, sert d'allié local et laisse les Nescients circuler dans les couloirs de portes.\n\nQuand le plan échoue et que Bouh reste hors d'atteinte, Vanitas laisse à Randall un atout : le Lump of Horror, bâti autour de l'énergie des cris que l'usine a mise en réserve. Sora, Sulli et Bob l'affrontent au cœur de l'entrepôt. Privé de ses bidons, le monstre s'effondre, Randall est chassé, et le monde peut basculer vers le fonctionnement du film — l'énergie du rire remplaçant celle de la peur.",
          "In Monstropolis, Vanitas has slipped into the factory to try to make Boo into a vessel: a terrified child, in his view, is an ideal heart to plunge into darkness. Randall Boggs, out to push Sulley and Mike aside, serves as the local ally and lets the Unversed roam the door corridors.\n\nWhen the plan fails and Boo stays out of reach, Vanitas leaves Randall a trump card: the Lump of Horror, built around the scream energy the factory had stored. Sora, Sulley, Mike and their friends face it in the warehouse. Stripped of its canisters, the monster collapses, Randall is driven out, and the world can shift to the film's own ending — laughter energy replacing fear.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lump of Horror", url: "https://kingdomhearts.fandom.com/wiki/Lump_of_Horror" }],
  },
};
