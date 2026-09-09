import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire des porte-clés obtenus au fil des mondes : apparence et symbolique, puis obtention et rôle
 * dans le jeu concerné. Les clés sont les slugs de keyblades.ts et keyblades-more.ts.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Kingdom Hearts ───────────────────────────
  "jungle-king": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Primitive est la plus rustique des Keyblades du premier jeu : une longue tige de bois brut, noueuse comme une branche arrachée à la canopée, dont les dents sont trois éclats taillés à la serpe. La garde est faite de lianes tressées et de feuillages, et la lame court sur une longueur inhabituelle, ce qui lui donne l'allure d'une lance plus que d'une clé.\n\nAu bout de sa chaîne pend une petite tête de gorille, hommage direct à Kerchak et à la famille de singes qui a élevé Tarzan. Tout, dans cette arme, renvoie à la Jungle Profonde : le bois, la végétation, l'idée d'un monde où l'homme n'a rien construit et où l'on se bat avec ce que la forêt donne.",
          "Jungle King is the most rustic Keyblade of the first game: a long shaft of raw wood, gnarled like a branch torn from the canopy, its teeth three roughly hewn splinters. The guard is woven from vines and leaves, and the blade runs to an unusual length, making it look more like a spear than a key.\n\nA small gorilla head hangs from its chain, a direct nod to Kerchak and the ape family that raised Tarzan. Everything about the weapon points back to Deep Jungle: the wood, the foliage, the idea of a world where nothing has been built by human hands and where you fight with whatever the forest provides.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora reçoit Primitive à la Jungle Profonde, une fois Clayton démasqué et vaincu au campement, et la serrure du monde scellée dans l'arbre creux où Tarzan conduit le groupe. Elle arrive donc tôt dans l'aventure, juste après la Ville de Traverse et le Pays des Merveilles.\n\nSur le terrain, c'est une arme de force pure : elle n'apporte aucun bonus de magie, mais sa portée allongée permet de toucher les Sans-cœur avant qu'ils n'atteignent Sora, ce qui est précieux contre les Ombres et les Soldats en nombre. Elle sert surtout de transition, le temps d'atteindre Agrabah et Lampe Magique, mais reste appréciée des joueurs qui privilégient les combos au corps à corps.",
          "Sora receives Jungle King in Deep Jungle, once Clayton has been exposed and beaten at the camp and the world's keyhole sealed inside the hollow tree Tarzan leads the party to. It therefore arrives early in the adventure, right after Traverse Town and Wonderland.\n\nIn the field it is a pure strength weapon: it grants no magic bonus, but its extended reach lets Sora hit Heartless before they close in, which matters against packs of Shadows and Soldiers. It mostly serves as a stopgap until Agrabah and Three Wishes, though players who favour melee combos keep it around longer.",
        ),
      },
    ],
    trivia: [
      L("Son nom japonais, Jungle King (ジャングルキング), est identique à l'anglais.", "Its Japanese name, Jungle King (ジャングルキング), is identical to the English one."),
      L("C'est l'une des rares Keyblades dont la lame n'est pas métallique.", "It is one of the very few Keyblades whose blade is not metallic."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Jungle King", url: "https://kingdomhearts.fandom.com/wiki/Jungle_King" }],
  },

  "three-wishes": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Lampe Magique est entièrement dorée et incurvée à la manière d'un cimeterre arabe : la lame s'évase vers la pointe, les dents évoquent le créneau d'un minaret et la garde reprend les volutes des ornements d'Agrabah. Sa silhouette est celle d'une arme de conte oriental plus que d'une clé.\n\nSon porte-clés est la lampe magique du Génie, l'objet autour duquel tourne toute l'histoire d'Aladdin et le nom même de la Keyblade : les trois vœux que le Génie accorde à son maître. L'arme condense ainsi le monde qu'elle représente, à la fois le trésor de la Grotte aux Merveilles et la promesse d'un pouvoir qui ne rend libre que celui qui sait y renoncer.",
          "Three Wishes is entirely golden and curved like an Arabian scimitar: the blade flares towards the tip, the teeth suggest the crenellation of a minaret, and the guard echoes the scrollwork of Agrabah's ornaments. Its silhouette belongs to an oriental fairy tale rather than to a key.\n\nIts keychain is the Genie's magic lamp, the object the whole story of Aladdin turns on and the source of the Keyblade's very name: the three wishes the Genie grants his master. The weapon thus condenses the world it stands for, at once the treasure of the Cave of Wonders and the promise of a power that only frees whoever knows how to let it go.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora obtient Lampe Magique à Agrabah, après avoir aidé Aladdin à repousser Jafar devenu génie, libéré Jasmine et scellé la serrure cachée dans la Grotte aux Merveilles. Elle marque la fin d'un des mondes les plus longs de la première moitié du jeu.\n\nStatistiquement, c'est un net progrès sur la Chaîne Royale : elle apporte un solide bonus de force sans sacrifier totalement la magie, ce qui en fait une arme équilibrée pour la traversée de Monstro et de la Ville d'Halloween. Beaucoup de joueurs la gardent équipée jusqu'à ce que la Forteresse Oubliée offre des porte-clés plus spécialisés. Elle réapparaît sous forme de carte dans Chain of Memories, obtenue dans le monde d'Agrabah reconstitué par les souvenirs de Sora.",
          "Sora obtains Three Wishes in Agrabah, after helping Aladdin drive back a Jafar turned genie, freeing Jasmine and sealing the keyhole hidden in the Cave of Wonders. It caps one of the longest worlds in the first half of the game.\n\nStatistically it is a clear step up from the Kingdom Key: a solid strength bonus without wholly sacrificing magic, which makes it a balanced choice for Monstro and Halloween Town. Many players keep it equipped until Hollow Bastion offers more specialised keychains. It returns as a card in Chain of Memories, found in the Agrabah rebuilt from Sora's memories.",
        ),
      },
    ],
    trivia: [L("Le porte-clés est la lampe elle-même, et non le Génie, contrairement à Lampe Merveilleuse dans Kingdom Hearts II.", "The keychain is the lamp itself rather than the Genie, unlike Wishing Lamp in Kingdom Hearts II.")],
    sources: [{ label: "Kingdom Hearts Wiki — Three Wishes", url: "https://kingdomhearts.fandom.com/wiki/Three_Wishes" }],
  },

  "crabclaw": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Trésor des mers est une Keyblade sous-marine : sa lame turquoise est bordée de nageoires, sa garde faite de coquillages roses et de corail, et ses dents rappellent les branches d'un récif. Les couleurs pastel tranchent avec la sobriété de la Chaîne Royale et donnent à l'arme un aspect de trésor ramassé sur le sable.\n\nSon porte-clés est un petit crabe orange, référence évidente à Sébastien, le compositeur de la cour du roi Triton. L'ensemble renvoie à Atlantica et à l'univers de La Petite Sirène : un monde de musique, de chants et de coquillages, où Ariel rêve d'un ailleurs et où la sorcière Ursula convoite la couronne de son père.",
          "Crabclaw is an underwater Keyblade: its turquoise blade is edged with fins, its guard built from pink shells and coral, and its teeth recall the branches of a reef. The pastel colours contrast with the plainness of the Kingdom Key and give the weapon the look of treasure picked up off the sand.\n\nIts keychain is a small orange crab, an obvious reference to Sebastian, court composer to King Triton. The whole design points to Atlantica and the world of The Little Mermaid: a place of music, song and seashells, where Ariel dreams of somewhere else and the sea witch Ursula covets her father's crown.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Ariel remet Trésor des mers à Sora à Atlantica, une fois Ursula vaincue dans les ruines englouties et la serrure du monde scellée sous la grotte secrète de la sirène. Le monde étant facultatif au sens strict de la progression, certains joueurs la découvrent tardivement.\n\nContrairement aux Keyblades précédentes, elle penche du côté de la magie : son bonus de MP en fait l'un des meilleurs choix du milieu de jeu pour enchaîner Glace et Soin, notamment pendant les combats aquatiques où la nage rend les combos moins fiables. Elle reste un compromis très correct jusqu'à l'obtention d'Clairvoyante chez Merlin. Elle revient en carte dans Chain of Memories, liée au souvenir d'Atlantica.",
          "Ariel hands Crabclaw to Sora in Atlantica, once Ursula has been defeated among the sunken ruins and the world's keyhole sealed beneath the mermaid's secret grotto. As the world is optional in strict progression terms, some players find it late.\n\nUnlike the earlier Keyblades it leans towards magic: its MP bonus makes it one of the better mid-game picks for chaining Blizzard and Cure, especially during underwater fights where swimming makes combos less reliable. It stays a decent compromise until Spellbinder is obtained from Merlin. It returns as a card in Chain of Memories, tied to the memory of Atlantica.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Crabclaw", url: "https://kingdomhearts.fandom.com/wiki/Crabclaw" }],
  },

  "pumpkinhead": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Tête de Citrouille est une Keyblade d'Halloween jusque dans le moindre détail : la lame est une tige noire et tordue, la garde une paire de chauves-souris déployées, et l'extrémité s'achève sur une citrouille sculptée dont les yeux triangulaires et le sourire édenté forment les dents de la clé. Les couleurs orange et violet renvoient directement à la palette de L'Étrange Noël de Monsieur Jack.\n\nSon porte-clés est une petite citrouille, écho de Jack Skellington, le Roi des Citrouilles, et du déguisement de vampire que Sora endosse dans ce monde. L'arme dit à sa manière ce qu'est la Ville d'Halloween : un lieu où la frayeur est une fête, et où le macabre n'est jamais tout à fait sérieux.",
          "Pumpkinhead is a Halloween Keyblade down to the last detail: a black, twisted stem for a blade, a pair of spread bat wings for a guard, and a carved pumpkin at the tip whose triangular eyes and gap-toothed grin form the key's teeth. The orange and purple palette comes straight from The Nightmare Before Christmas.\n\nIts keychain is a small pumpkin, an echo of Jack Skellington, the Pumpkin King, and of the vampire costume Sora wears in this world. In its own way the weapon states what Halloween Town is: a place where fright is a celebration and the macabre is never quite serious.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora reçoit Tête de Citrouille à la Ville d'Halloween, après avoir traversé le manoir d'Oogie Boogie, vaincu le sac de bestioles puis le manoir lui-même transformé en colosse, et scellé la serrure du monde. Elle arrive dans la seconde moitié du jeu, peu avant la Forteresse Oubliée.\n\nSa particularité est d'être l'une des rares Keyblades du premier épisode à offrir un bonus de magie substantiel en plus d'une force honorable, ce qui la rend polyvalente pour un Sora qui commence à disposer de Brasier et Foudre de niveau supérieur. Elle inspirera directement Citrouille de Noël dans Kingdom Hearts II, qui reprend son nom japonais et son design en le rendant plus élancé.",
          "Sora receives Pumpkinhead in Halloween Town, after making his way through Oogie Boogie's manor, defeating the bug-filled sack and then the manor itself turned into a colossus, and sealing the world's keyhole. It arrives in the second half of the game, shortly before Hollow Bastion.\n\nIts particularity is being one of the few Keyblades in the first game to offer a substantial magic bonus alongside respectable strength, which makes it versatile for a Sora who is starting to have upgraded Fire and Thunder. It directly inspires Decisive Pumpkin in Kingdom Hearts II, which reuses its Japanese name and stretches its design into something sleeker.",
        ),
      },
    ],
    trivia: [L("Tête de Citrouille et Citrouille de Noël portent le même nom japonais, パンプキンヘッド (Pumpkinhead).", "Pumpkinhead and Decisive Pumpkin share the same Japanese name, パンプキンヘッド (Pumpkinhead).")],
    sources: [{ label: "Kingdom Hearts Wiki — Pumpkinhead", url: "https://kingdomhearts.fandom.com/wiki/Pumpkinhead" }],
  },

  "fairy-harp": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Harpe féérique est bâtie comme un instrument de musique : la lame verte s'incurve en arc de harpe, la garde imite le cadre doré de l'instrument, et les dents dessinent une aile stylisée. Les teintes vertes et or reprennent celles de la tunique de Peter Pan et de la poussière de fée qui permet de voler.\n\nSon porte-clés est une petite fée, en référence évidente à Clochette, qui accompagne Sora comme invocation dans le premier jeu. Toute l'arme parle du Pays Imaginaire : le vol, l'enfance qui refuse de finir, et la musique légère des scènes où le navire du Capitaine Crochet flotte au-dessus de Londres.",
          "Fairy Harp is built like a musical instrument: the green blade curves into a harp's arc, the guard imitates the instrument's gilded frame, and the teeth form a stylised wing. The green and gold recall Peter Pan's tunic and the pixie dust that lets you fly.\n\nIts keychain is a small fairy, an obvious reference to Tinker Bell, who accompanies Sora as a summon in the first game. The whole weapon speaks of Neverland: flight, childhood that refuses to end, and the light music of the scenes where Captain Hook's ship drifts above London.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora obtient Harpe féérique au Pays Imaginaire, après avoir libéré Wendy, affronté le Capitaine Crochet sur le pont du navire volant et scellé la serrure du monde sur la tour de l'horloge de Londres. Le monde est l'avant-dernier avant la Forteresse Oubliée.\n\nC'est une Keyblade nettement orientée magie, avec un bonus de MP parmi les plus généreux du jeu à ce stade, doublé d'une portée courte mais d'une vitesse d'attaque confortable. Elle s'adresse aux joueurs qui misent sur les sorts et sur les invocations, d'autant que Clochette, obtenue dans ce même monde, restaure les PV de Sora. Elle réapparaît en carte dans Chain of Memories.",
          "Sora obtains Fairy Harp in Neverland, after freeing Wendy, facing Captain Hook on the deck of his flying ship and sealing the world's keyhole on the London clock tower. The world is the second to last before Hollow Bastion.\n\nIt is a clearly magic-oriented Keyblade, with one of the most generous MP bonuses available at that point, paired with short reach but a comfortable swing speed. It suits players who rely on spells and summons, all the more since Tinker Bell, earned in the same world, restores Sora's HP. It returns as a card in Chain of Memories.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Fairy Harp", url: "https://kingdomhearts.fandom.com/wiki/Fairy_Harp" }],
  },

  "wishing-star": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Bonne Étoile est une Keyblade bleu nuit parsemée d'étoiles : la lame évoque un ciel constellé, la garde reprend la forme d'un pantin articulé, et les dents dessinent une étoile à cinq branches. Le tout est plus décoratif que menaçant, à l'image du monde qui l'inspire.\n\nSon porte-clés est une étoile filante, référence directe au vœu que Geppetto adresse à l'étoile du soir pour que Pinocchio devienne un vrai petit garçon. La Keyblade est ainsi liée moins à Monstro, la baleine où Sora retrouve la marionnette, qu'à ce qui suit : la reconstruction de la maison de Geppetto à la Ville de Traverse, et l'idée qu'un souhait sincère peut donner un cœur.",
          "Wishing Star is a midnight-blue Keyblade scattered with stars: the blade suggests a constellated sky, the guard takes the shape of a jointed puppet, and the teeth form a five-pointed star. The result is decorative rather than threatening, much like the world that inspires it.\n\nIts keychain is a shooting star, a direct reference to the wish Geppetto makes on the evening star so that Pinocchio may become a real boy. The Keyblade is therefore tied less to Monstro, the whale where Sora finds the puppet, than to what follows: Geppetto's house rebuilt in Traverse Town, and the idea that an honest wish can grant a heart.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Contrairement aux autres porte-clés de mondes, Bonne Étoile ne s'obtient pas dans Monstro mais à la Ville de Traverse : une fois la baleine quittée, Geppetto et Pinocchio s'installent dans le quartier d'accès, et parler au vieil artisan chez lui donne la Keyblade.\n\nEn combat, elle est modeste : sa force et sa magie restent inférieures à celles de Lampe Magique, et elle sert surtout de récompense de collection. Sa véritable valeur est ailleurs : la maison de Geppetto abrite aussi l'atelier de synthèse des Mogs, et la visite qui offre la Keyblade est l'occasion de découvrir Cid, les objets rares et la chaîne d'améliorations qui mène à l'Ultima.",
          "Unlike other world keychains, Wishing Star is not found inside Monstro but in Traverse Town: once the whale is behind him, Geppetto and Pinocchio settle in the accessory district, and talking to the old craftsman in his house yields the Keyblade.\n\nIn battle it is modest: its strength and magic both fall short of Three Wishes, and it works mainly as a collection reward. Its real value lies elsewhere: Geppetto's house also hosts the Moogle synthesis shop, and the visit that grants the Keyblade is the occasion to discover Cid, rare materials and the upgrade chain that leads to the Ultima Weapon.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wishing Star", url: "https://kingdomhearts.fandom.com/wiki/Wishing_Star" }],
  },

  "spellbinder": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Clairvoyante est la Keyblade des mages : sa lame violette se termine par une spirale ouvragée, sa garde bleue s'enroule comme le pommeau d'un bâton de sorcier, et l'ensemble évoque davantage un sceptre qu'une arme tranchante. Les couleurs froides tranchent avec les ors d'Agrabah et les verts du Pays Imaginaire.\n\nSon porte-clés est un livre relié, référence au chapeau et aux grimoires de Merlin, et par extension à la Forêt des Rêves Bleus, le livre magique que le vieux magicien conserve dans sa maison. Elle symbolise moins un monde qu'une manière de se battre : celle de Donald, des sorts et de l'étude, par opposition à la force brute des Keyblades de la Jungle Profonde ou du Colisée.",
          "Spellbinder is the mages' Keyblade: its purple blade ends in a worked spiral, its blue guard coils like the pommel of a wizard's staff, and the whole thing suggests a sceptre more than a cutting weapon. The cool colours contrast with Agrabah's golds and Neverland's greens.\n\nIts keychain is a bound book, a reference to Merlin's hat and grimoires and, by extension, to the Hundred Acre Wood, the magic book the old wizard keeps in his house. It stands less for a world than for a way of fighting: Donald's way, of spells and study, as opposed to the brute force of the Deep Jungle or Coliseum Keyblades.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Clairvoyante ne se trouve pas dans un coffre : elle est offerte par Merlin, à la Ville de Traverse, lorsque Sora vient lui montrer qu'il maîtrise les trois magies élémentaires de base — Brasier, Glacier et Foudre — apprises auprès des différents mondes et alliés.\n\nC'est de loin la meilleure Keyblade magique de la première moitié du jeu : son bonus de MP dépasse celui de Harpe féérique, au prix d'une force très faible. Elle transforme la manière de jouer, en poussant à alterner sorts et coups plutôt qu'à enchaîner les combos, et reste pertinente jusqu'aux Keyblades de la Forteresse Oubliée. Elle prépare aussi la visite de la Forêt des Rêves Bleus, dont Merlin garde le livre.",
          "Spellbinder is not found in a chest: Merlin gives it to Sora in Traverse Town when the boy shows he has mastered the three basic elemental spells — Fire, Blizzard and Thunder — learned across the worlds and from his allies.\n\nIt is by far the best magic Keyblade of the game's first half: its MP bonus exceeds Fairy Harp's, at the cost of very low strength. It changes how the game plays, encouraging alternation between spells and strikes rather than long combos, and stays relevant until the Hollow Bastion keychains. It also sets up the visit to the Hundred Acre Wood, whose book Merlin keeps.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Spellbinder", url: "https://kingdomhearts.fandom.com/wiki/Spellbinder" }],
  },

  "olympia": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Olympia est une Keyblade de bronze et de pierre : sa lame reprend le fût cannelé d'une colonne grecque, sa garde imite un chapiteau, et les dents forment un motif de temple antique. La sobriété du bronze et la rigueur géométrique de l'ensemble évoquent l'architecture du Colisée de l'Olympe plutôt qu'un objet magique.\n\nSon porte-clés est le médaillon d'Hercule, l'emblème que le héros porte sur sa tunique. La Keyblade récompense donc moins la traversée d'un monde qu'un accomplissement sportif : les coupes que Phil organise dans l'arène, et l'idée, centrale au film comme au monde du jeu, qu'on ne devient un vrai héros qu'à force d'épreuves.",
          "Olympia is a Keyblade of bronze and stone: its blade reproduces the fluted shaft of a Greek column, its guard imitates a capital, and its teeth form the motif of an ancient temple. The plain bronze and strict geometry evoke the architecture of Olympus Coliseum rather than a magical object.\n\nIts keychain is Hercules's medallion, the emblem the hero wears on his tunic. The Keyblade therefore rewards not the crossing of a world but an athletic achievement: the cups Phil runs in the arena, and the idea, central to both film and world, that one only becomes a true hero through trials.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Olympia s'obtient au Colisée de l'Olympe, en remportant les trois premières coupes du tournoi — la Coupe Phil, la Coupe Pégase et la Coupe Hercule — que Sora dispute au fil de ses retours dans le monde, entre deux étapes de l'histoire principale.\n\nC'est une Keyblade franchement offensive, avec l'un des meilleurs bonus de force du jeu à mi-parcours et une magie nulle. Elle est le choix naturel pour aborder la Forteresse Oubliée ou pour poursuivre le tournoi, notamment la redoutable Coupe Hadès, qui débloque à son tour Lionheart. Elle illustre bien le rôle du Colisée dans Kingdom Hearts : un contenu annexe, mais la meilleure source d'équipement pour qui aime se battre.",
          "Olympia is obtained at Olympus Coliseum by winning the tournament's first three cups — the Phil Cup, the Pegasus Cup and the Hercules Cup — which Sora fights through on return visits, between stages of the main story.\n\nIt is a bluntly offensive Keyblade, with one of the game's best mid-run strength bonuses and no magic at all. It is the natural pick for tackling Hollow Bastion or for pushing further into the tournament, notably the punishing Hades Cup, which in turn unlocks Lionheart. It captures the Coliseum's role in Kingdom Hearts well: side content, but the best source of gear for players who like to fight.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Olympia", url: "https://kingdomhearts.fandom.com/wiki/Olympia" }],
  },

  "lady-luck": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "As de Cœur est une Keyblade de jeu de cartes : sa lame rouge et or porte les quatre enseignes — cœur, pique, carreau, trèfle — sa garde s'ouvre comme un éventail de cartes, et les dents dessinent un motif de dame de cœur. Le rouge dominant renvoie aux roses peintes du jardin de la Reine.\n\nSon porte-clés est une carte à jouer, référence évidente aux cartes-soldats du Pays des Merveilles, qui montent la garde autour de la Reine de Cœur et servent d'ennemis lors du procès d'Alice. Le nom même de l'arme joue sur le hasard, thème du monde entier : un lieu où les règles changent, où l'on rétrécit et grandit sans logique, et où le verdict tombe avant le procès.",
          "Lady Luck is a playing-card Keyblade: its red and gold blade carries the four suits — hearts, spades, diamonds, clubs — its guard opens like a fan of cards, and its teeth form a queen-of-hearts motif. The dominant red recalls the painted roses of the Queen's garden.\n\nIts keychain is a playing card, an obvious nod to the card soldiers of Wonderland who stand guard around the Queen of Hearts and serve as enemies during Alice's trial. The weapon's very name plays on chance, the theme of the whole world: a place where rules shift, where you shrink and grow without logic, and where the verdict comes before the trial.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "As de Cœur n'est pas remise par un personnage : elle attend dans un coffre de la Forêt des Lotus, au Pays des Merveilles, accessible seulement en déclenchant une Trinité — les marques au sol que Sora, Donald et Dingo activent ensemble. Il faut donc revenir dans le monde plus tard, une fois la capacité obtenue.\n\nSes statistiques sont équilibrées, avec un peu de force et un peu de magie, ce qui en fait une alternative honnête à Lampe Magique pour un joueur qui alterne coups et sorts. Elle vaut surtout comme récompense d'exploration : sa présence rappelle que les Trinités cachent, dans presque chaque monde, un coffre que la progression normale laisse de côté.",
          "Lady Luck is not handed over by a character: it waits in a chest in the Lotus Forest of Wonderland, reachable only by triggering a Trinity — the ground marks Sora, Donald and Goofy activate together. That means coming back to the world later, once the ability has been learned.\n\nIts stats are balanced, a little strength and a little magic, making it an honest alternative to Three Wishes for a player who alternates blows and spells. Its main worth is as an exploration reward: its presence is a reminder that Trinity marks hide, in almost every world, a chest normal progression walks past.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lady Luck", url: "https://kingdomhearts.fandom.com/wiki/Lady_Luck" }],
  },

  "divine-rose": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Rose Éternelle est l'une des Keyblades les plus ornées du premier jeu : une lame blanche et or, fine et élégante, dont les dents dessinent un motif de pétales, et une garde en volutes dorées qui évoque la ferronnerie d'un château. L'ensemble a l'allure d'un objet de cour plutôt que d'une arme de combat.\n\nSon porte-clés est une rose, celle-là même qui, sous cloche, compte les jours qui restent à la Bête avant que le sortilège ne devienne définitif. La Keyblade renvoie donc au Château de la Bête et à Belle, l'une des sept Princesses de Cœur : la beauté qui se cache sous la monstruosité, et un amour qui doit être sincère pour rompre la malédiction.",
          "Divine Rose is one of the most ornate Keyblades of the first game: a white and gold blade, slim and elegant, with teeth shaped like petals and a guard of golden scrollwork recalling a castle's ironwork. The whole thing looks like a courtly object rather than a fighting weapon.\n\nIts keychain is a rose — the very one that, under its glass bell, counts down the days the Beast has left before the spell becomes permanent. The Keyblade thus points to Beast's Castle and to Belle, one of the seven Princesses of Heart: beauty hidden beneath monstrosity, and a love that must be sincere to break the curse.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Rose Éternelle s'obtient à la Forteresse Oubliée, en parlant à Belle dans la bibliothèque du château après que Sora a scellé le monde et libéré les Princesses de Cœur retenues par Maléfique et Ansem. Elle arrive donc très tard, presque à la fin de l'aventure.\n\nC'est l'une des meilleures Keyblades de tout le jeu : son bonus de force est parmi les plus élevés, sans la nullité magique d'Olympia, ce qui en fait une arme redoutable pour le Bout du Monde et pour les combats optionnels. Beaucoup de joueurs terminent Kingdom Hearts avec elle, faute de mettre la main sur l'Ultima, dont la synthèse exige des matériaux rares. Elle revient en carte dans Chain of Memories.",
          "Divine Rose is obtained in Hollow Bastion, by speaking to Belle in the castle library after Sora has sealed the world and freed the Princesses of Heart held by Maleficent and Ansem. It therefore arrives very late, almost at the end of the adventure.\n\nIt is one of the best Keyblades in the whole game: its strength bonus ranks among the highest without Olympia's total lack of magic, which makes it formidable for the End of the World and the optional fights. Many players finish Kingdom Hearts with it, failing to secure the Ultima Weapon, whose synthesis demands rare materials. It returns as a card in Chain of Memories.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Divine Rose", url: "https://kingdomhearts.fandom.com/wiki/Divine_Rose" }],
  },

  "lionheart": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Lionheart est directement calquée sur la gunblade de Squall Leonhart dans Final Fantasy VIII : la lame reprend la silhouette de l'arme, avec sa garde métallique et son mécanisme, et le tout est traité dans des gris froids qui contrastent avec les Keyblades colorées des mondes Disney.\n\nSon porte-clés est le pendentif de Griever, la tête de lion rugissant que Squall porte au cou et qui donne son nom à l'invocation la plus puissante du jeu d'origine. En passant dans Kingdom Hearts, ce symbole devient celui de Léon, le combattant taciturne de la Ville de Traverse qui apprend à Sora ce qu'est vraiment la Keyblade et qui rêve de reprendre le Jardin Radieux aux Sans-cœur.",
          "Lionheart is modelled directly on Squall Leonhart's gunblade from Final Fantasy VIII: the blade reproduces the weapon's silhouette, metal guard and mechanism included, all rendered in cold greys that stand apart from the colourful Disney-world Keyblades.\n\nIts keychain is the Griever pendant, the roaring lion's head Squall wears at his neck and which names the most powerful summon of the original game. Carried over into Kingdom Hearts, that symbol becomes Leon's — the taciturn fighter of Traverse Town who teaches Sora what the Keyblade truly is and who dreams of taking Radiant Garden back from the Heartless.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Lionheart est l'une des récompenses les plus exigeantes du jeu : elle s'obtient au Colisée de l'Olympe en franchissant la Coupe Hadès, le tournoi de haut niveau qui n'est ouvert qu'après les trois premières coupes, et qui oppose notamment Sora à Léon et Cloud réunis dans le même combat.\n\nStatistiquement, c'est une Keyblade équilibrée et très solide, à la fois en force et en magie, souvent considérée comme la meilleure arme polyvalente avant la Rose Éternelle et l'Ultima. Elle est aussi une déclaration d'intention de la série : intégrer les héros de Final Fantasy à l'univers Disney, non comme des clins d'œil, mais comme des adversaires qu'il faut battre pour progresser.",
          "Lionheart is one of the game's most demanding rewards: it is earned at Olympus Coliseum by clearing the Hades Cup, the high-level tournament unlocked only after the first three cups, which pits Sora against Leon and Cloud together in the same match.\n\nStatistically it is a balanced and very solid Keyblade in both strength and magic, often considered the best all-round weapon short of Divine Rose and the Ultima Weapon. It is also a statement of intent from the series: bringing the Final Fantasy heroes into the Disney universe not as winks to the audience, but as opponents you must beat to progress.",
        ),
      },
    ],
    trivia: [L("Le nom vient de Squall Leonhart, dont le patronyme donne aussi le surnom « Léon » utilisé dans la série.", "The name comes from Squall Leonhart, whose surname also yields the alias “Leon” used throughout the series.")],
    sources: [{ label: "Kingdom Hearts Wiki — Lionheart", url: "https://kingdomhearts.fandom.com/wiki/Lionheart" }],
  },

  "metal-chocobo": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Chocobo d'Acier est la plus massive des Keyblades de Kingdom Hearts : une immense lame plate et grise, à peine dentée, dont la silhouette reproduit l'Épée Buster de Cloud Strife dans Final Fantasy VII. Elle est enveloppée de bandages sur sa longueur, exactement comme l'arme que Cloud porte dans son apparence Kingdom Hearts.\n\nSon porte-clés est un chocobo, l'oiseau emblématique de la série Final Fantasy, ce qui donne à l'arme son nom un peu incongru : le « chocobo de métal » est en réalité une référence croisée entre le bestiaire de Square et la silhouette la plus reconnaissable de Final Fantasy VII. Elle est la Keyblade la plus lourde, la moins magique, la plus brute.",
          "Metal Chocobo is the bulkiest Keyblade in Kingdom Hearts: an enormous flat grey blade, barely toothed, whose silhouette reproduces Cloud Strife's Buster Sword from Final Fantasy VII. It is wrapped in bandages along its length, exactly like the weapon Cloud carries in his Kingdom Hearts design.\n\nIts keychain is a chocobo, the emblematic bird of the Final Fantasy series, which gives the weapon its slightly incongruous name: the “metal chocobo” is in fact a crossed reference between Square's bestiary and the most recognisable silhouette in Final Fantasy VII. It is the heaviest Keyblade, the least magical, the most brutal.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora reçoit Chocobo d'Acier au Colisée de l'Olympe, en remportant la Coupe Hercule, la troisième du tournoi, dont Cloud est l'un des adversaires : le mercenaire, lié par un pacte à Hadès, y affronte Sora avant de se retourner contre le dieu des Enfers.\n\nC'est une arme de force pure, avec une allonge exceptionnelle qui permet de balayer plusieurs Sans-cœur d'un seul coup, mais un malus notable sur les MP : équiper Chocobo d'Acier, c'est renoncer aux sorts. Elle convient aux joueurs qui misent tout sur les combos et sur les capacités physiques, et reste un choix populaire pour affronter les boss du Bout du Monde.",
          "Sora receives Metal Chocobo at Olympus Coliseum by winning the Hercules Cup, the tournament's third, in which Cloud is one of the opponents: the mercenary, bound by a pact to Hades, faces Sora there before turning on the lord of the underworld.\n\nIt is a pure strength weapon, with exceptional reach that sweeps several Heartless in a single swing, but a notable MP penalty: equipping Metal Chocobo means giving up spells. It suits players who bet everything on combos and physical abilities, and remains a popular pick for the End of the World bosses.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Metal Chocobo", url: "https://kingdomhearts.fandom.com/wiki/Metal_Chocobo" }],
  },

  "one-winged-angel": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Monoptéryx est la Keyblade la plus sinistre du premier jeu : une lame noire, mince et démesurément longue, à l'image du Masamune de Sephiroth, prolongée d'une garde en aile de corbeau déployée. Les plumes noires courent le long du manche, seule concession décorative d'une arme entièrement tournée vers la coupe.\n\nSon nom reprend celui du thème musical de Sephiroth dans Final Fantasy VII, « One-Winged Angel », l'un des morceaux les plus célèbres du compositeur Nobuo Uematsu, et l'aile unique qui pousse dans le dos du personnage. Elle est donc à la fois un trophée et une citation : la trace, dans l'univers de Kingdom Hearts, de l'antagoniste le plus emblématique de Square.",
          "One-Winged Angel is the grimmest Keyblade of the first game: a black blade, thin and inordinately long, in the image of Sephiroth's Masamune, extended by a guard shaped like a spread crow's wing. Black feathers run along the hilt, the only decorative concession in a weapon wholly given over to cutting.\n\nIts name is that of Sephiroth's theme in Final Fantasy VII, “One-Winged Angel”, one of composer Nobuo Uematsu's most famous pieces, and of the single wing that grows from the character's back. It is thus both a trophy and a quotation: the trace, inside Kingdom Hearts, of Square's most iconic antagonist.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Monoptéryx est exclusive à Kingdom Hearts Final Mix, la réédition japonaise du premier jeu, reprise ensuite dans les collections HD. On l'obtient au Colisée de l'Olympe en battant Sephiroth, adversaire optionnel réputé pour être le combat le plus dur du jeu, bien au-delà du niveau requis par l'histoire.\n\nEn récompense, elle offre le meilleur bonus de force du jeu, assorti d'un malus sur les MP et d'un effet particulier : elle draine des PV à chaque coup porté, ce qui la rend redoutable en combat prolongé. Elle est la Keyblade des joueurs qui ont épuisé le contenu principal, symbole de fin de parcours au même titre que l'Ultima.",
          "One-Winged Angel is exclusive to Kingdom Hearts Final Mix, the Japanese re-release of the first game later carried into the HD collections. It is obtained at Olympus Coliseum by beating Sephiroth, an optional opponent widely regarded as the game's hardest fight, far above the level the story requires.\n\nAs a reward it offers the game's best strength bonus, along with an MP penalty and a distinctive effect: it drains HP with every hit landed, making it fearsome in drawn-out battles. It is the Keyblade of players who have exhausted the main content, an endgame symbol on a par with the Ultima Weapon.",
        ),
      },
    ],
    trivia: [L("Le nom renvoie au thème musical de Sephiroth composé par Nobuo Uematsu pour Final Fantasy VII.", "The name refers to Sephiroth's theme, composed by Nobuo Uematsu for Final Fantasy VII.")],
    sources: [{ label: "Kingdom Hearts Wiki — One-Winged Angel", url: "https://kingdomhearts.fandom.com/wiki/One-Winged_Angel" }],
  },

  "diamond-dust": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Gemme de glace est taillée dans la glace : la lame est un long cristal bleu pâle, translucide, dont les dents forment un flocon, et la garde s'ouvre en éclats gelés. C'est l'une des rares Keyblades du premier jeu à n'avoir ni métal ni bois dans sa composition apparente.\n\nSon nom est celui de l'attaque signature de Shiva, l'invocation de glace récurrente de la série Final Fantasy, et son porte-clés est un flocon de neige. Elle célèbre donc, comme Monoptéryx, l'héritage Square plutôt qu'un monde Disney, et se rattache au Titan de Glace, l'un des colosses que Sora doit affronter dans l'arène du Colisée de l'Olympe.",
          "Diamond Dust is carved from ice: the blade is a long, translucent pale-blue crystal whose teeth form a snowflake, and the guard opens into frozen shards. It is one of the very few Keyblades in the first game with neither metal nor wood in its apparent make-up.\n\nIts name is that of Shiva's signature attack, the recurring ice summon of the Final Fantasy series, and its keychain is a snowflake. Like One-Winged Angel it therefore celebrates the Square heritage rather than a Disney world, and attaches itself to the Ice Titan, one of the colossi Sora must face in the arena of Olympus Coliseum.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Gemme de glace est, comme Monoptéryx, une exclusivité de Kingdom Hearts Final Mix. Elle récompense la victoire sur le Titan de Glace, boss optionnel du Colisée de l'Olympe qu'il faut affronter seul, en renvoyant ses éclats de glace à coups de Keyblade ou de commande de blocage.\n\nÀ l'opposé de son homologue noire, c'est une Keyblade magique : elle offre le plus gros bonus de MP du jeu, au prix d'une force très basse, et convient à une approche fondée sur les sorts et les invocations. Les deux armes obtenues en Final Mix résument ainsi les deux voies possibles en fin de partie, la force brute ou la magie poussée à son maximum.",
          "Diamond Dust, like One-Winged Angel, is exclusive to Kingdom Hearts Final Mix. It rewards victory over the Ice Titan, an optional Olympus Coliseum boss fought alone, whose ice shards must be knocked back with the Keyblade or a guard command.\n\nOpposite to its black counterpart, it is a magic Keyblade: it offers the largest MP bonus in the game at the cost of very low strength, and suits a spell- and summon-based approach. The two Final Mix rewards thus sum up the two possible endgame routes, brute force or magic pushed to its limit.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Diamond Dust", url: "https://kingdomhearts.fandom.com/wiki/Diamond_Dust" }],
  },

  // ─────────────────────────── Kingdom Hearts II ───────────────────────────
  "heros-crest": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Emblème de Héros reprend le vocabulaire visuel du Colisée de l'Olympe : une lame bleu-gris à l'allure d'épée grecque, une garde faite de deux ailes de bronze et des dents en forme d'éclair, clin d'œil à Zeus. La sobriété du dessin la distingue des Keyblades ornées obtenues plus tard dans le jeu.\n\nSon porte-clés est le médaillon d'Hercule, le même emblème que portait Olympia dans le premier épisode : la continuité est volontaire, l'arme étant la « suite » directe de sa devancière. Elle symbolise la première épreuve du monde, la victoire sur l'Hydre, et le thème d'Hercule tout entier — un héros ne se mesure pas à sa force, mais à ce qu'il accepte de risquer pour les autres.",
          "Hero's Crest reuses the visual vocabulary of Olympus Coliseum: a blue-grey blade shaped like a Greek sword, a guard of two bronze wings and lightning-bolt teeth, a nod to Zeus. Its restrained design sets it apart from the ornate Keyblades earned later in the game.\n\nIts keychain is Hercules's medallion, the same emblem Olympia carried in the first game: the continuity is deliberate, the weapon being its predecessor's direct sequel. It stands for the world's first trial, the victory over the Hydra, and for the whole theme of Hercules — a hero is measured not by strength but by what he is willing to risk for others.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Phil et Hercule remettent Emblème de Héros à Sora lors de la première visite du Colisée de l'Olympe, après la remontée du Val des Morts et surtout après l'affrontement contre l'Hydre dans l'arène, l'un des premiers grands combats du jeu.\n\nSa capacité est Combo aérien +, qui allonge les enchaînements de Sora dans les airs. C'est une orientation force, pensée pour les joueurs qui gardent leurs adversaires en l'air, et elle reste efficace pendant tout le premier tour des mondes. Le Colisée fournira plus tard Âme de Gardien, puis Fatalis et Treize Fongus pour les coupes de haut niveau : Emblème de Héros est la première marche de cette progression.",
          "Phil and Hercules hand Hero's Crest to Sora during the first visit to Olympus Coliseum, after climbing out of the Underdrome and above all after the fight against the Hydra in the arena, one of the game's first major battles.\n\nIts ability is Air Combo Boost, which lengthens Sora's aerial chains. It is a strength-leaning pick, built for players who keep enemies airborne, and it stays effective through the whole first round of worlds. The Coliseum later supplies Guardian Soul, then Fatal Crest and Winner's Proof for the high-level cups: Hero's Crest is the first step of that ladder.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hero's Crest", url: "https://kingdomhearts.fandom.com/wiki/Hero%27s_Crest" }],
  },

  "monochrome": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Monochrome est unique dans toute la série : elle est entièrement en noir et blanc, sans la moindre couleur, avec un léger grain qui imite la pellicule des dessins animés muets. Sa lame carrée et sa garde ronde reprennent le style graphique épuré des courts métrages Disney des années 1920 et 1930.\n\nSon porte-clés est l'emblème de Mickey. L'arme est le souvenir matériel de la Rivière Intemporelle, ce monde qui n'existe que parce que Pat a volé une porte du Château Disney pour retourner dans le passé : Sora, Donald et Dingo s'y retrouvent redessinés dans le style de l'époque, et repartent avec une Keyblade qui a la même texture d'archive.",
          "Monochrome is unique in the whole series: entirely black and white, without a trace of colour, with a faint grain imitating the film stock of silent cartoons. Its square blade and round guard borrow the stripped-down graphic style of Disney shorts from the 1920s and 1930s.\n\nIts keychain is Mickey's emblem. The weapon is the material souvenir of Timeless River, a world that exists only because Pete stole a door from Disney Castle to return to the past: Sora, Donald and Goofy find themselves redrawn there in period style, and leave with a Keyblade that carries the same archival texture.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Monochrome s'obtient à la Rivière Intemporelle, après que Sora a traversé les quatre scènes du passé du Château Disney, récupéré les fragments de l'histoire volée et vaincu Pat — ou plutôt les deux Pat, celui du passé et celui du présent, réunis dans le même combat devant le bâtiment de la construction.\n\nSa capacité est Objet +, qui renforce l'effet des objets de soin utilisés en combat. Elle est plutôt orientée magie, avec une force modeste, et s'adresse aux joueurs qui s'appuient sur les Potions et les Éthers plutôt que sur les sorts. Le monde étant court et facultatif dans l'ordre de visite, la Keyblade fait figure de récompense de détour.",
          "Monochrome is obtained in Timeless River, after Sora has crossed the four scenes of Disney Castle's past, recovered the fragments of the stolen history and defeated Pete — or rather both Petes, past and present, joined in the same fight outside the building site.\n\nIts ability is Item Boost, which strengthens healing items used in battle. It leans towards magic with modest strength, and suits players who rely on Potions and Ethers rather than spells. As the world is short and optional in visiting order, the Keyblade reads as a reward for taking the detour.",
        ),
      },
    ],
    trivia: [L("C'est la seule Keyblade de la série dessinée intégralement en noir et blanc.", "It is the only Keyblade in the series drawn entirely in black and white.")],
    sources: [{ label: "Kingdom Hearts Wiki — Monochrome", url: "https://kingdomhearts.fandom.com/wiki/Monochrome" }],
  },

  "follow-the-wind": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Follow the Wind est une Keyblade de pirate : la lame brune évoque le bois d'un mât, la garde reprend la forme d'une barre de gouvernail, et les dents dessinent une voile gonflée. Un pavillon noir orne le sommet, et l'ensemble a l'aspect usé d'un objet qui a passé sa vie en mer.\n\nSon porte-clés est une tête de mort surmontée de deux os croisés, référence au Jolly Roger et au Black Pearl. Elle renvoie à Port Royal, le monde adapté de Pirates des Caraïbes : la Malédiction du Black Pearl, l'équipage de Barbossa réduit à l'état de squelettes au clair de lune, et un capitaine Jack Sparrow qui suit surtout le vent de son propre intérêt.",
          "Follow the Wind is a pirate's Keyblade: the brown blade suggests the wood of a mast, the guard takes the shape of a ship's wheel, and the teeth form a billowing sail. A black flag tops it off, and the whole thing has the worn look of something that has spent its life at sea.\n\nIts keychain is a skull over crossed bones, a reference to the Jolly Roger and the Black Pearl. It points to Port Royal, the world adapted from Pirates of the Caribbean: the Curse of the Black Pearl, Barbossa's crew reduced to skeletons in moonlight, and a Captain Jack Sparrow who mostly follows the wind of his own interest.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora obtient Follow the Wind à Port Royal, lors de la première visite, après avoir rendu les médaillons aztèques au coffre de l'Isla de Muerta et vaincu Barbossa, immortel tant que la malédiction pesait sur son équipage.\n\nSa capacité est Attraction, qui attire vers Sora les orbes lâchés par les ennemis : munitions, PV et MP viennent à lui sans qu'il ait à se déplacer. C'est un porte-clés équilibré, sans excès dans un sens ni dans l'autre, dont l'intérêt tient surtout à ce confort de récolte, précieux pendant les longues séquences de combat contre les Pirates Sans-cœur. Il reste très utilisé pour farmer l'expérience et la munition.",
          "Sora obtains Follow the Wind in Port Royal on the first visit, after returning the Aztec medallions to the chest on Isla de Muerta and defeating Barbossa, immortal for as long as the curse lay on his crew.\n\nIts ability is Draw, which pulls the orbs dropped by enemies towards Sora: munny, HP and MP come to him without his having to move. It is a balanced keychain, excessive in neither direction, whose appeal rests mainly on that harvesting comfort, valuable during the long stretches of fighting against Heartless pirates. It stays a favourite for grinding experience and munny.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Follow the Wind", url: "https://kingdomhearts.fandom.com/wiki/Follow_the_Wind" }],
  },

  "circle-of-life": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Cercle vital est une Keyblade de savane : sa lame beige et ocre imite l'os et le bois sec, sa garde est formée de deux herbes hautes recourbées, et ses dents dessinent une empreinte de patte de lion. Les couleurs chaudes reprennent la palette du lever de soleil sur le Rocher des Lions.\n\nSon porte-clés est une empreinte de lion, et le nom de l'arme est celui de la chanson d'ouverture du Roi Lion, « Circle of Life », qui donne son sens au monde entier : la place de chacun dans un ordre naturel que Scar a rompu en tuant Mufasa. La Keyblade est ainsi liée à Simba, invocation du premier jeu et allié de Sora dans la Terre des Lions.",
          "Circle of Life is a savannah Keyblade: its beige and ochre blade imitates bone and dry wood, its guard is formed of two curved stalks of tall grass, and its teeth form a lion's pawprint. The warm colours borrow the palette of sunrise over Pride Rock.\n\nIts keychain is a lion's pawprint, and the weapon's name is that of The Lion King's opening song, “Circle of Life”, which gives the whole world its meaning: everyone's place in a natural order that Scar broke by killing Mufasa. The Keyblade is thus tied to Simba, a summon in the first game and Sora's ally in the Pride Lands.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora reçoit Cercle vital à la Terre des Lions, lors de la première visite, après avoir aidé Simba à retrouver sa confiance et à revenir au Rocher des Lions pour affronter Scar, qui s'y est installé en roi avec ses hyènes.\n\nSa capacité est MP de secours, qui accélère la récupération des MP lorsqu'ils sont épuisés — l'une des capacités les plus recherchées de Kingdom Hearts II, puisqu'elle permet d'enchaîner les cycles de magie et de Soin. Le porte-clés penche du côté de la magie et devient rapidement un favori des joueurs qui construisent leur style autour de Soin et de Brasier, bien au-delà du monde qui l'a fourni.",
          "Sora receives Circle of Life in the Pride Lands on the first visit, after helping Simba regain his confidence and return to Pride Rock to face Scar, who has installed himself there as king with his hyenas.\n\nIts ability is MP Haste, which speeds up MP recovery once the gauge is spent — one of the most sought-after abilities in Kingdom Hearts II, since it lets players cycle through magic and Cure much faster. The keychain leans towards magic and quickly becomes a favourite for anyone building a style around Cure and Fire, well beyond the world that provided it.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Circle of Life", url: "https://kingdomhearts.fandom.com/wiki/Circle_of_Life" }],
  },

  "photon-debugger": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Debugger Photon est une Keyblade numérique : sa lame noire est parcourue de circuits lumineux cyan, sa garde forme un cadre géométrique évoquant un port de données, et ses dents sont un motif de code. Elle brille dans le noir, comme les combinaisons des programmes de Space Paranoids.\n\nSon porte-clés est un disque d'identité, l'objet que chaque programme porte dans le dos et qui contient sa mémoire dans l'univers de Tron. La Keyblade est le souvenir du monde le plus étranger de Kingdom Hearts II : l'intérieur de l'ordinateur d'Ansem le Sage, où le Maître Contrôle Principal, corrompu par Xemnas, tient Tron prisonnier.",
          "Photon Debugger is a digital Keyblade: its black blade is threaded with glowing cyan circuitry, its guard forms a geometric frame suggesting a data port, and its teeth are a pattern of code. It glows in the dark, like the suits of the programs in Space Paranoids.\n\nIts keychain is an identity disc, the object every program carries on its back and which holds its memory in the world of Tron. The Keyblade is the souvenir of Kingdom Hearts II's strangest world: the inside of Ansem the Wise's computer, where the Master Control Program, corrupted by Xemnas, holds Tron prisoner.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Tron remet Debugger Photon à Sora lors de la première visite de Space Paranoids, après le combat contre le Sans-cœur Hostile dans le canyon de données et la restauration d'une partie du système piraté depuis le bureau d'Ansem, au Jardin Radieux.\n\nSa capacité est Foudre +, qui renforce les dégâts de la magie Foudre — cohérent avec un monde tout entier fait d'électricité. Le porte-clés penche nettement du côté de la magie et devient l'arme de choix pour un Sora spécialisé dans Foudre, notamment contre les groupes d'ennemis. Il annonce Double disque, son équivalent de Dream Drop Distance, obtenu dans La Grille.",
          "Tron hands Photon Debugger to Sora on the first visit to Space Paranoids, after the fight against the Hostile Program in the canyon of data and the partial restoration of the hacked system from Ansem's study in Radiant Garden.\n\nIts ability is Thunder Boost, which strengthens Thunder magic — fitting for a world made entirely of electricity. The keychain leans clearly towards magic and becomes the weapon of choice for a Thunder-focused Sora, especially against crowds. It foreshadows Dual Disc, its Dream Drop Distance counterpart, obtained in The Grid.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Photon Debugger", url: "https://kingdomhearts.fandom.com/wiki/Photon_Debugger" }],
  },

  "gull-wing": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Albatros est une Keyblade colorée et légère : sa lame verte et jaune est traversée de motifs d'ailes, sa garde bleue s'ouvre en deux plumes, et ses dents dessinent une aile stylisée. Le dessin est volontairement pop, très éloigné du sérieux des Keyblades de fin de jeu.\n\nSon porte-clés est un logo d'aile, celui des Gullwings, le trio de chasseuses de trésors formé par Yuna, Rikku et Paine, venues de Final Fantasy X-2 et transformées en petites fées dans Kingdom Hearts II. D'abord au service de Maléfique, elles changent de camp au Jardin Radieux et deviennent une source de renseignements — et de bavardages — pour Sora.",
          "Gull Wing is a bright, light Keyblade: its green and yellow blade is crossed with wing motifs, its blue guard opens into two feathers, and its teeth form a stylised wing. The design is deliberately pop, far removed from the gravity of the endgame Keyblades.\n\nIts keychain is a wing logo, that of the Gullwings, the treasure-hunting trio of Yuna, Rikku and Paine, brought over from Final Fantasy X-2 and turned into tiny fairies in Kingdom Hearts II. Initially working for Maleficent, they switch sides in Radiant Garden and become a source of information — and of chatter — for Sora.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Albatros s'obtient au Jardin Radieux, après la bataille des Mille Sans-cœur : les Gullwings, qui ont fini par prendre le parti de Sora contre Maléfique, lui offrent le porte-clés en guise de remerciement lorsqu'on va leur parler.\n\nSa capacité est Expérience +, qui augmente l'expérience gagnée lorsque les PV de Sora sont bas. C'est donc une Keyblade de progression plus que de combat : ses statistiques restent faibles, mais elle accélère nettement la montée en niveau pour qui accepte de jouer à la limite. Beaucoup de joueurs l'équipent le temps de quelques zones de farm avant de revenir à une arme plus offensive.",
          "Gull Wing is obtained in Radiant Garden after the Battle of 1000 Heartless: the Gullwings, who have finally sided with Sora against Maleficent, hand over the keychain as thanks when he goes to speak with them.\n\nIts ability is Experience Boost, which increases experience gained while Sora's HP is low. It is therefore a progression Keyblade rather than a combat one: its stats stay weak, but it speeds levelling sharply for players willing to fight on the edge. Many equip it for a few grinding areas before returning to something more offensive.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Gull Wing", url: "https://kingdomhearts.fandom.com/wiki/Gull_Wing" }],
  },

  "rumbling-rose": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Rose de Combat est la version sombre de Rose Éternelle : là où la Keyblade du premier jeu était blanche et dorée, celle-ci est noire, verte et rouge, avec une lame hérissée d'épines et une garde en tiges enroulées. Les pétales qui formaient les dents sont devenus tranchants.\n\nSon porte-clés est une rose fanée, écho de la fleur sous cloche du Château de la Bête, mais dont les pétales tombent. Le dessin traduit le moment du récit où l'arme est obtenue : la Bête, manipulée par Xaldin, a chassé Belle et s'est laissé regagner par sa colère. La rose n'est plus une promesse, mais un compte à rebours.",
          "Rumbling Rose is the dark version of Divine Rose: where the first game's Keyblade was white and gold, this one is black, green and red, with a blade bristling with thorns and a guard of coiled stems. The petals that once formed the teeth have become cutting edges.\n\nIts keychain is a wilting rose, an echo of the flower under glass in Beast's Castle, but with its petals falling. The design translates the moment in the story when the weapon is earned: the Beast, manipulated by Xaldin, has driven Belle away and let his anger take him back. The rose is no longer a promise but a countdown.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora obtient Rose de Combat au Château de la Bête, lors de la seconde visite, après avoir affronté Xaldin sur le pont du château : le membre de l'Organisation XIII manipulait la Bête depuis le début pour lui arracher un cœur assez sombre et le transformer en Sans-cœur et en Simili.\n\nSa capacité est Finition +, qui autorise un coup final supplémentaire à la fin des combos — l'une des capacités les plus prisées du jeu pour maximiser les dégâts. Le porte-clés est nettement orienté force et devient, avec Citrouille de Noël, l'un des choix de référence pour la fin de Kingdom Hearts II et pour les combats de données du Final Mix.",
          "Sora obtains Rumbling Rose in Beast's Castle on the second visit, after facing Xaldin on the castle bridge: the Organization XIII member had been manipulating the Beast from the start in order to wring from him a heart dark enough to become both Heartless and Nobody.\n\nIts ability is Finishing Plus, which grants an extra finishing move at the end of combos — one of the game's most prized abilities for maximising damage. The keychain leans firmly towards strength and becomes, alongside Decisive Pumpkin, a reference pick for the end of Kingdom Hearts II and for the Final Mix data battles.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Rumbling Rose", url: "https://kingdomhearts.fandom.com/wiki/Rumbling_Rose" }],
  },

  "guardian-soul": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Âme de Gardien est une Keyblade sombre et anguleuse, à mi-chemin entre l'arme et l'objet rituel : sa lame violette et grise s'achève en crâne, sa garde est faite d'os croisés, et l'ensemble baigne dans les tons froids des Enfers grecs. Son style tranche avec les autres armes du Colisée de l'Olympe, plus solaires.\n\nSon porte-clés est un heaume, référence à Auron, le gardien venu de Final Fantasy X qu'Hadès enrôle de force pour combattre dans l'arène. La Keyblade parle donc du Val des Morts plus que de l'Olympe : de la mort qu'on refuse, du serment qu'un gardien tient jusqu'au bout, et du dieu qui essaie d'en faire son instrument.",
          "Guardian Soul is a dark, angular Keyblade, halfway between a weapon and a ritual object: its purple and grey blade ends in a skull, its guard is made of crossed bones, and the whole thing sits in the cold tones of the Greek underworld. Its style contrasts with the sunnier weapons of Olympus Coliseum.\n\nIts keychain is a helm, a reference to Auron, the guardian from Final Fantasy X whom Hades presses into fighting in the arena. The Keyblade therefore speaks of the Underworld rather than of Olympus: of a death refused, of an oath a guardian keeps to the end, and of the god who tries to make him his instrument.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Âme de Gardien s'obtient au Colisée de l'Olympe, lors de la seconde visite, après la descente dans le Val des Morts, la libération d'Auron de l'emprise d'Hadès et la victoire sur le dieu des morts au fond de son domaine.\n\nSa capacité est Réaction +, qui augmente les dégâts infligés par les commandes de réaction — un choix cohérent dans un jeu qui en fait un pilier de son système de combat, et particulièrement efficace contre les boss dont les phases reposent sur ces commandes. Le porte-clés est orienté force et reste un bon compromis jusqu'aux Keyblades de fin de partie, Rose de Combat et Citrouille de Noël en tête.",
          "Guardian Soul is obtained at Olympus Coliseum on the second visit, after the descent into the Underworld, Auron's release from Hades's hold and the victory over the god of the dead deep in his domain.\n\nIts ability is Reaction Boost, which raises the damage of reaction commands — a coherent choice in a game that makes them a pillar of its combat system, and particularly effective against bosses whose phases hinge on them. The keychain leans towards strength and stays a good compromise until the late-game Keyblades, chiefly Rumbling Rose and Decisive Pumpkin.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Guardian Soul", url: "https://kingdomhearts.fandom.com/wiki/Guardian_Soul" }],
  },

  "wishing-lamp": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Lampe Merveilleuse est la Keyblade d'Agrabah dans Kingdom Hearts II, et elle assume pleinement l'héritage de Lampe Magique : or, bleu et pourpre, une lame qui s'élargit en volutes orientales, une garde en forme d'arche de palais et des dents ciselées comme un bijou. Elle est nettement plus ornée que sa devancière.\n\nSon porte-clés est la lampe magique elle-même, entourée d'une volute de fumée bleue qui rappelle le Génie. La Keyblade renvoie à toute la seconde visite du monde : la Grotte aux Merveilles ensevelie, le retour de Jafar, et un Génie qui, désormais libre, choisit d'aider Sora sans y être contraint par aucun vœu.",
          "Wishing Lamp is Kingdom Hearts II's Agrabah Keyblade, and it fully embraces the legacy of Three Wishes: gold, blue and purple, a blade widening into oriental scrollwork, a guard shaped like a palace arch and teeth chased like jewellery. It is markedly more ornate than its predecessor.\n\nIts keychain is the magic lamp itself, wreathed in a curl of blue smoke that recalls the Genie. The Keyblade points to the whole second visit to the world: the buried Cave of Wonders, Jafar's return, and a Genie who, now free, chooses to help Sora without being bound by any wish.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora reçoit Lampe Merveilleuse à Agrabah, lors de la seconde visite, après avoir traversé la Grotte aux Merveilles ensevelie sous le sable et vaincu le Génie Jafar, que la lampe volée avait rendu monstrueux.\n\nSa capacité est Jackpot, qui augmente le nombre d'orbes lâchés par les ennemis vaincus. Le porte-clés est orienté magie, avec un bon bonus de MP, mais son intérêt principal est économique : associé à la capacité Chance, il accélère considérablement la récolte de munitions nécessaire à la synthèse. C'est l'une des armes que les joueurs équipent pour préparer les objets de fin de jeu plutôt que pour combattre.",
          "Sora receives Wishing Lamp in Agrabah on the second visit, after crossing the sand-buried Cave of Wonders and defeating Genie Jafar, whom the stolen lamp had turned monstrous.\n\nIts ability is Jackpot, which increases the number of orbs dropped by defeated enemies. The keychain leans towards magic with a solid MP bonus, but its main appeal is economic: paired with Lucky Lucky it greatly speeds the munny gathering that synthesis demands. It is one of the weapons players equip to prepare endgame items rather than to fight.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wishing Lamp", url: "https://kingdomhearts.fandom.com/wiki/Wishing_Lamp" }],
  },

  "hidden-dragon": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Dragon Tapi est une Keyblade d'inspiration chinoise : sa lame verte et blanche est fine et droite comme une lame de jian, sa garde imite un pommeau de sabre orné d'un gland de soie, et ses dents dessinent une flamme stylisée. La sobriété du dessin reprend celle des paysages de la Terre des Dragons.\n\nSon porte-clés est un petit dragon enroulé, référence évidente à Mushu, le gardien de la famille Fa qui accompagne Mulan, mais aussi au titre : le « dragon caché » est Mulan elle-même, jeune femme dissimulée sous l'identité du soldat Ping pour prendre la place de son père dans l'armée impériale.",
          "Hidden Dragon is a Chinese-inspired Keyblade: its green and white blade is slim and straight like a jian, its guard imitates a sabre pommel hung with a silk tassel, and its teeth form a stylised flame. The restraint of the design echoes the landscapes of the Land of Dragons.\n\nIts keychain is a small coiled dragon, an obvious reference to Mushu, guardian of the Fa family and Mulan's companion, but also to the title: the “hidden dragon” is Mulan herself, a young woman concealed under the identity of the soldier Ping to take her father's place in the imperial army.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora obtient Dragon Tapi à la Terre des Dragons, lors de la première visite, après la montée de la montagne enneigée, l'avalanche déclenchée contre les Huns et la victoire sur Shan-Yu devant le palais impérial.\n\nSa capacité est Rage de MP, qui restaure des MP lorsque Sora subit des dégâts : une orientation magie qui récompense un jeu risqué, puisqu'il faut encaisser pour relancer ses sorts. Le porte-clés est l'un des premiers du jeu à proposer un bonus de magie franc, et il reste utile jusqu'à Cercle vital et Debugger Photon, obtenus dans les mondes suivants.",
          "Sora obtains Hidden Dragon in the Land of Dragons on the first visit, after the climb up the snowy mountain, the avalanche loosed against the Huns and the victory over Shan-Yu outside the imperial palace.\n\nIts ability is MP Rage, which restores MP when Sora takes damage: a magic-leaning design that rewards risky play, since you have to be hit to refill your spells. The keychain is one of the first in the game to offer a clear magic bonus, and it stays useful until Circle of Life and Photon Debugger arrive in later worlds.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hidden Dragon", url: "https://kingdomhearts.fandom.com/wiki/Hidden_Dragon" }],
  },

  "mysterious-abyss": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Mystérieuse Abîme prolonge Trésor des mers avec beaucoup plus d'élégance : la lame bleue et blanche s'incurve comme une vague, la garde évoque une nageoire caudale, et les dents dessinent un coquillage ouvert. Les dégradés d'eau profonde donnent à l'arme une transparence que peu de Keyblades possèdent.\n\nSon porte-clés est un coquillage, écho des trésors qu'Ariel collectionne dans sa grotte secrète. La Keyblade renvoie à l'Atlantica de Kingdom Hearts II, monde entièrement transformé en séquences musicales : plutôt que de combattre, Sora, Donald et Dingo y chantent avec Ariel, Sébastien et le roi Triton, et le récit du film s'y rejoue en chansons.",
          "Mysterious Abyss extends Crabclaw with far more elegance: the blue and white blade curves like a wave, the guard suggests a caudal fin, and the teeth form an open shell. Deep-water gradients give the weapon a transparency few Keyblades have.\n\nIts keychain is a seashell, an echo of the treasures Ariel collects in her secret grotto. The Keyblade points to Kingdom Hearts II's Atlantica, a world turned entirely into musical numbers: rather than fight, Sora, Donald and Goofy sing there with Ariel, Sebastian and King Triton, and the film's story replays in song.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Comme le monde ne contient plus de combats, Mystérieuse Abîme ne récompense pas une victoire mais une performance musicale : Sora l'obtient à Atlantica après avoir réussi la chanson « La Vengeance d'Ursula », l'un des numéros rythmiques qui structurent le monde.\n\nSa capacité est Glace +, qui renforce les dégâts de la magie Glace. Le porte-clés est franchement orienté magie et devient l'un des meilleurs choix pour un Sora spécialisé dans Glacier, notamment contre les ennemis vulnérables au froid. Atlantica étant facultatif dans Kingdom Hearts II, beaucoup de joueurs passent à côté de cette Keyblade sans le savoir.",
          "As the world no longer contains any combat, Mysterious Abyss rewards a musical performance rather than a victory: Sora obtains it in Atlantica after clearing the song “Ursula's Revenge”, one of the rhythm numbers that structure the world.\n\nIts ability is Blizzard Boost, which strengthens Blizzard magic. The keychain leans firmly towards magic and becomes one of the best picks for a Blizzard-focused Sora, especially against enemies weak to cold. As Atlantica is optional in Kingdom Hearts II, many players miss this Keyblade without ever knowing it existed.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mysterious Abyss", url: "https://kingdomhearts.fandom.com/wiki/Mysterious_Abyss" }],
  },

  "sweet-memories": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Doux Souvenir est la Keyblade la plus douce de la série : une lame jaune pâle en forme de pot de miel renversé, une garde faite de deux abeilles stylisées, et des dents rondes qui évoquent des gouttes de miel. Rien, dans son dessin, ne suggère une arme.\n\nSon porte-clés est la tête de Winnie l'ourson. Elle renvoie à la Forêt des Rêves Bleus, ce monde qui n'existe que dans un livre confié à Merlin et où l'on ne rencontre aucun Sans-cœur : Sora y retrouve un refuge, et le récit y traite de la mémoire — les pages arrachées, l'amnésie de Winnie et la crainte de Jean-Christophe d'être oublié par ses amis.",
          "Sweet Memories is the gentlest Keyblade in the series: a pale yellow blade shaped like an upturned honey pot, a guard of two stylised bees, and rounded teeth suggesting drops of honey. Nothing in its design suggests a weapon.\n\nIts keychain is Winnie the Pooh's head. It points to the Hundred Acre Wood, a world that exists only inside a book entrusted to Merlin and where no Heartless is ever met: Sora finds a refuge there, and the story turns on memory — the torn-out pages, Pooh's forgetfulness and Christopher Robin's fear of being forgotten by his friends.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Doux Souvenir récompense la complétion de la Forêt des Rêves Bleus : Sora doit retrouver dans les mondes les pages arrachées du livre, revenir chez Merlin pour les remettre en place et terminer les épisodes et mini-jeux qu'elles débloquent, jusqu'au dernier chapitre.\n\nLe porte-clés n'apporte aucune force du tout et compense par un bonus de magie et par une capacité de collecte : Chance dans la version d'origine, qui augmente les chutes d'objets rares, remplacée par Convertisseur de Forme dans Final Mix, qui transforme les orbes de Transe. C'est l'arme des joueurs qui préparent la synthèse, pas celle des combats.",
          "Sweet Memories rewards completing the Hundred Acre Wood: Sora must find the book's torn-out pages scattered across the worlds, bring them back to Merlin to slot them in, and clear the episodes and mini-games they unlock, all the way to the final chapter.\n\nThe keychain grants no strength whatsoever and makes up for it with a magic bonus and a gathering ability: Lucky Lucky in the original release, which raises rare item drops, replaced by Drive Converter in Final Mix, which converts Drive orbs. It is the weapon of players preparing synthesis, not of combat.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sweet Memories", url: "https://kingdomhearts.fandom.com/wiki/Sweet_Memories" }],
  },

  "winners-proof": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Treize Fongus est une Keyblade blanche et dorée, d'apparence presque cérémonielle : la lame lisse s'achève en une couronne ouvragée, la garde forme deux ailes fines, et l'ensemble évoque un trophée davantage qu'une arme. Elle n'a rien du style d'un monde particulier ; elle est une récompense pure.\n\nSon porte-clés est un champignon coiffé de blanc, référence directe aux Champignons XIII, les Sans-cœur pacifiques dispersés dans les mondes de Kingdom Hearts II Final Mix. Chacun propose une épreuve — enchaîner des coups, encaisser des sorts, rester en l'air — et le nom de la Keyblade dit exactement ce qu'elle atteste : que le joueur les a toutes réussies.",
          "Winner's Proof is a white and gold Keyblade of almost ceremonial appearance: a smooth blade ending in a worked crown, a guard of two slender wings, the whole suggesting a trophy more than a weapon. It carries no particular world's style; it is a pure reward.\n\nIts keychain is a white-capped mushroom, a direct reference to the Mushroom XIII, the peaceful Heartless scattered through the worlds of Kingdom Hearts II Final Mix. Each sets a challenge — chaining hits, absorbing spells, staying airborne — and the Keyblade's name states exactly what it attests: that the player cleared them all.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Treize Fongus est exclusive à Kingdom Hearts II Final Mix. Elle s'obtient en décrochant l'emblème de chacun des treize Champignons XIII, ce qui suppose de les trouver dans des mondes très éloignés les uns des autres et de réussir des épreuves techniques exigeantes, souvent en fin de partie.\n\nSes statistiques sont excellentes, mais elle vient avec Zéro Expérience : tant qu'elle est équipée, Sora ne gagne plus aucun point d'expérience. La capacité en fait l'outil des joueurs qui tentent une partie niveau 1, l'un des défis les plus célèbres de la série, où le personnage traverse toute l'aventure sans jamais monter de niveau.",
          "Winner's Proof is exclusive to Kingdom Hearts II Final Mix. It is earned by claiming the emblem from each of the thirteen Mushroom XIII, which means tracking them across widely separated worlds and clearing demanding technical challenges, often late in the game.\n\nIts stats are excellent, but it comes with No Experience: while it is equipped Sora gains no experience points at all. That ability makes it the tool of players attempting a level 1 run, one of the series' most famous challenges, in which the character crosses the entire adventure without ever levelling up.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Winner's Proof", url: "https://kingdomhearts.fandom.com/wiki/Winner%27s_Proof" }],
  },

  "fatal-crest": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Fatalis est une Keyblade rouge et noire, agressive dans chacune de ses lignes : la lame porte des motifs de flammes, la garde forme deux ailes repliées, et les dents dessinent un blason brisé. Elle rappelle les arènes souterraines du Val des Morts plus que les colonnades de l'Olympe.\n\nSon porte-clés est un emblème de flamme, écho des feux bleus d'Hadès qui éclairent la Coupe Déesse du Destin. Comme Treize Fongus, elle ne représente pas un monde mais un exploit : celle qui l'obtient a franchi l'un des tournois les plus longs de Kingdom Hearts II, seule véritable épreuve d'endurance du jeu de base.",
          "Fatal Crest is a red and black Keyblade, aggressive in every line: the blade carries flame motifs, the guard forms two folded wings, and the teeth shape a broken crest. It recalls the underground arenas of the Underworld more than the colonnades of Olympus.\n\nIts keychain is a flame emblem, an echo of the blue fires of Hades that light the Goddess of Fate Cup. Like Winner's Proof it stands not for a world but for a feat: whoever earns it has cleared one of Kingdom Hearts II's longest tournaments, the base game's only true endurance trial.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Fatalis s'obtient au Colisée de l'Olympe en remportant la Coupe Déesse du Destin, l'un des tournois de haut niveau organisés dans le Val des Morts, disponible tard dans l'aventure et enchaînant de longues séries de combats sans interruption.\n\nSa capacité est Charge Berserk : tant que les MP de Sora sont en récupération, ses combos ne se terminent plus, ce qui permet d'enchaîner indéfiniment les coups au sol. Associée à un équipement pensé pour vider volontairement la jauge de MP, elle produit l'un des styles de jeu les plus destructeurs de Kingdom Hearts II, très prisé pour les combats de données du Final Mix.",
          "Fatal Crest is earned at Olympus Coliseum by winning the Goddess of Fate Cup, one of the high-level tournaments held in the Underworld, available late in the adventure and running long unbroken strings of fights.\n\nIts ability is Berserk Charge: while Sora's MP is recharging, his combos no longer end, letting him chain ground attacks indefinitely. Combined with gear built to empty the MP gauge on purpose, it produces one of Kingdom Hearts II's most destructive playstyles, highly prized for the Final Mix data battles.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Fatal Crest", url: "https://kingdomhearts.fandom.com/wiki/Fatal_Crest" }],
  },

  "decisive-pumpkin": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Citrouille de Noël reprend le motif de Tête de Citrouille en l'étirant : la lame noire et violette est plus longue et plus fine, la garde forme deux chauves-souris aux ailes déployées, et une citrouille sculptée coiffe l'extrémité, son sourire découpé servant de dents. Le contraste entre l'orange vif et le noir est encore plus marqué que dans le premier jeu.\n\nSon porte-clés est une citrouille, et son nom japonais est exactement le même que celui de sa devancière : パンプキンヘッド. La Keyblade renvoie à la Ville d'Halloween version Kingdom Hearts II, où Jack Skellington veut cette fois s'inviter dans la Ville de Noël, et où le docteur Finkelstein bricole une créature qui lui échappe.",
          "Decisive Pumpkin reuses the Pumpkinhead motif and stretches it: the black and purple blade is longer and slimmer, the guard forms two bats with spread wings, and a carved pumpkin caps the tip, its cut grin serving as teeth. The contrast between bright orange and black is even sharper than in the first game.\n\nIts keychain is a pumpkin, and its Japanese name is exactly that of its predecessor: パンプキンヘッド. The Keyblade points to Kingdom Hearts II's Halloween Town, where Jack Skellington this time wants to invite himself into Christmas Town, and where Doctor Finkelstein cobbles together a creature that gets away from him.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora obtient Citrouille de Noël à la Ville d'Halloween, lors de la seconde visite, après la course entre la Ville d'Halloween et la Ville de Noël et la victoire sur l'Expérimentateur, la créature composite que le docteur Finkelstein a assemblée et que les Sans-cœur ont réanimée.\n\nSa capacité est Combo +++, qui augmente les dégâts au fur et à mesure que le combo s'allonge. Le porte-clés est franchement orienté force et, associé aux capacités de combo apprises en fin de jeu, il produit l'une des configurations les plus puissantes de Kingdom Hearts II. Beaucoup de joueurs le considèrent comme la meilleure Keyblade offensive du jeu, avant même l'Ultima.",
          "Sora obtains Decisive Pumpkin in Halloween Town on the second visit, after the race between Halloween Town and Christmas Town and the victory over the Experiment, the patchwork creature Doctor Finkelstein assembled and the Heartless brought back to life.\n\nIts ability is Combo Boost, which increases damage as the combo grows longer. The keychain leans firmly towards strength and, paired with the late-game combo abilities, produces one of Kingdom Hearts II's most powerful setups. Many players consider it the best offensive Keyblade in the game, ahead even of the Ultima Weapon.",
        ),
      },
    ],
    trivia: [L("Tête de Citrouille et Citrouille de Noël portent le même nom japonais ; seules les versions occidentales les distinguent.", "Pumpkinhead and Decisive Pumpkin share one Japanese name; only the Western releases tell them apart.")],
    sources: [{ label: "Kingdom Hearts Wiki — Decisive Pumpkin", url: "https://kingdomhearts.fandom.com/wiki/Decisive_Pumpkin" }],
  },


  "sleeping-lion": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Lion Assoupi est la Keyblade la plus proche d'une arme à feu de toute la série : sa lame grise et bleue reprend la silhouette de la gunblade de Léon, avec sa poignée, sa garde carrée et son mécanisme, et les dents forment un bloc anguleux au bout du canon. Le style est industriel, sans aucun ornement.\n\nSon porte-clés est la tête de lion griffé de Griever, le symbole que Squall Leonhart porte au cou dans Final Fantasy VIII. Elle succède ainsi à Lionheart du premier jeu, mais dans un contexte différent : Léon est désormais l'un des artisans de la reconstruction du Jardin Radieux, aux côtés d'Aerith, de Yuffie, de Cid et de Merlin.",
          "Sleeping Lion is the closest thing to a firearm in the whole series: its grey and blue blade reproduces the silhouette of Leon's gunblade, grip, square guard and mechanism included, with the teeth forming an angular block at the end of the barrel. The style is industrial, without ornament.\n\nIts keychain is Griever, the clawed lion's head Squall Leonhart wears at his neck in Final Fantasy VIII. It thus succeeds the first game's Lionheart, but in a different context: Leon is now one of the architects of Radiant Garden's restoration, alongside Aerith, Yuffie, Cid and Merlin.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Lion Assoupi ne s'obtient pas en battant Léon : elle attend dans un coffre du bureau d'Ansem, au Jardin Radieux, la pièce cachée derrière la bibliothèque du château depuis laquelle on accède à l'ordinateur qui mène à Space Paranoids.\n\nSa capacité est Combo +, qui ajoute un coup aux enchaînements au sol. Le porte-clés offre des statistiques équilibrées, honorables sans être exceptionnelles, et sert surtout de valeur sûre pour la seconde moitié du jeu, en attendant Rose de Combat ou Citrouille de Noël. Son emplacement en fait aussi une récompense d'exploration : rien n'oblige à ouvrir ce coffre pour avancer dans l'histoire.",
          "Sleeping Lion is not earned by beating Leon: it waits in a chest in Ansem's study in Radiant Garden, the room hidden behind the castle library from which the computer leading to Space Paranoids is reached.\n\nIts ability is Combo Plus, adding a hit to ground chains. The keychain offers balanced stats, respectable without being exceptional, and mostly serves as a safe bet for the game's second half while waiting for Rumbling Rose or Decisive Pumpkin. Its location also makes it an exploration reward: nothing forces you to open that chest to advance the story.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sleeping Lion", url: "https://kingdomhearts.fandom.com/wiki/Sleeping_Lion" }],
  },

  "fenrir": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Fenrir est une Keyblade massive et sombre : sa lame grise et noire est large, presque rectangulaire, et se sépare en plusieurs sections à la manière de l'épée démontable de Cloud dans Final Fantasy VII: Advent Children. Sa garde évoque le guidon d'une moto, et le nom même de l'arme est celui de l'engin que Cloud pilote dans le film.\n\nSon porte-clés est une tête de loup, référence au loup Fenrir de la mythologie nordique dont Cloud a fait son emblème. La Keyblade récompense donc le combat contre Sephiroth, l'homme à une aile que Cloud poursuit à travers les mondes, et scelle dans Kingdom Hearts II le duel resté inachevé du premier jeu.",
          "Fenrir is a heavy, sombre Keyblade: its grey and black blade is broad, almost rectangular, and splits into several sections in the manner of Cloud's separable sword from Final Fantasy VII: Advent Children. Its guard suggests motorcycle handlebars, and the weapon's very name is that of the bike Cloud rides in the film.\n\nIts keychain is a wolf's head, a reference to the Norse wolf Fenrir that Cloud has taken as his emblem. The Keyblade therefore rewards the fight against Sephiroth, the one-winged man Cloud pursues across the worlds, and settles in Kingdom Hearts II the duel left unfinished in the first game.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Fenrir récompense la victoire sur Sephiroth, adversaire optionnel qui apparaît au Jardin Radieux une fois Space Paranoids terminé. Le combat est réputé l'un des plus durs du jeu, et le vaincre déclenche aussi la conversation entre Sephiroth et Cloud, puis leur disparition commune.\n\nSa capacité est Combo négatif, qui retire deux coups aux enchaînements de Sora : les combos deviennent plus courts, mais le coup final arrive beaucoup plus vite, ce qui augmente considérablement les dégâts par seconde. Associé à Finition +, ce porte-clés devient l'un des piliers des configurations de haut niveau utilisées contre les combats de données du Final Mix.",
          "Fenrir rewards victory over Sephiroth, an optional opponent who appears in Radiant Garden once Space Paranoids is complete. The fight is reckoned among the game's hardest, and beating him also triggers the conversation between Sephiroth and Cloud and their shared disappearance.\n\nIts ability is Negative Combo, which removes two hits from Sora's chains: combos become shorter, but the finisher lands much sooner, sharply raising damage per second. Paired with Finishing Plus, this keychain becomes a pillar of the high-level setups used against the Final Mix data battles.",
        ),
      },
    ],
    trivia: [L("Le nom vient de la moto de Cloud dans Final Fantasy VII: Advent Children.", "The name comes from Cloud's motorcycle in Final Fantasy VII: Advent Children.")],
    sources: [{ label: "Kingdom Hearts Wiki — Fenrir", url: "https://kingdomhearts.fandom.com/wiki/Fenrir" }],
  },


  // ─────────────────────────── 358/2 Days ───────────────────────────
  "midnight-roar": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Midnight Roar est une Keyblade noire et rouge aux lignes agressives : la lame est barrée de stries qui évoquent des griffures, la garde s'ouvre en deux crocs métalliques, et les dents dessinent une gueule ouverte. Le contraste du noir profond et du rouge sombre reprend la palette du Monde qui n'existe pas.\n\nComme toutes les Keyblades de 358/2 Days, elle n'est pas un objet distinct mais une apparence : Roxas manie toujours la Chaîne Royale, dont la forme change selon le Gear installé dans son panneau de commandes. Le nom, « rugissement de minuit », renvoie à l'Organisation XIII et à ses nuits sans fin sous un Kingdom Hearts artificiel en forme de lune.",
          "Midnight Roar is a black and red Keyblade of aggressive lines: the blade is streaked with marks suggesting claw scratches, the guard opens into two metal fangs, and the teeth form an open maw. The contrast of deep black and dark red borrows the palette of The World That Never Was.\n\nLike every Keyblade in 358/2 Days it is not a separate object but an appearance: Roxas always wields the Kingdom Key, whose shape changes with the Gear installed in his panel grid. The name, a roar at midnight, points to Organization XIII and its endless nights beneath an artificial, moon-shaped Kingdom Hearts.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Midnight Roar apparaît lorsque Roxas équipe le Gear Fantôme dans son panneau de commandes, l'un des équipements obtenus en progressant dans les missions de l'Organisation XIII et en achetant les composants auprès des Mogs de la boutique.\n\nLe système de 358/2 Days repose entièrement sur ces panneaux : chaque Gear modifie à la fois les statistiques, la portée et la vitesse de l'arme, et se combine avec des emplacements supplémentaires. Ce Gear-là privilégie la force et une allonge moyenne, adaptée aux missions de la seconde moitié du jeu, lorsque Roxas commence à s'interroger sur Xion et sur ce que l'Organisation lui cache.",
          "Midnight Roar appears when Roxas equips the Phantom Gear in his panel grid, one of the loadouts obtained by progressing through Organization XIII's missions and buying components from the Moogle shop.\n\nThe whole 358/2 Days system rests on those panels: each Gear alters the weapon's stats, reach and speed at once, and combines with additional slots. This particular Gear favours strength and medium reach, suited to the missions of the game's second half, when Roxas begins to question Xion and what the Organization is hiding from him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Midnight Roar", url: "https://kingdomhearts.fandom.com/wiki/Midnight_Roar" }],
  },

  "total-eclipse": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Total Eclipse est une Keyblade sombre traversée d'un disque : la lame noire s'élargit près de la pointe pour former un anneau lumineux, image directe d'une éclipse, et la garde reprend les motifs anguleux propres aux armes de l'Organisation XIII. Les rares touches de couleur sont un bleu froid, presque lunaire.\n\nComme les autres armes de 358/2 Days, elle n'existe que comme apparence de la Chaîne Royale de Roxas, déterminée par le Gear équipé. Son nom, ses formes circulaires et son éclat froid renvoient au cœur du jeu : le Kingdom Hearts artificiel que l'Organisation nourrit dans le ciel du Monde qui n'existe pas, et qui a lui-même la forme d'une lune.",
          "Total Eclipse is a dark Keyblade crossed by a disc: the black blade widens near the tip into a glowing ring, a direct image of an eclipse, and the guard reuses the angular motifs proper to Organization XIII's weapons. Its rare touches of colour are a cold, almost lunar blue.\n\nLike the other weapons in 358/2 Days it exists only as an appearance of Roxas's Kingdom Key, determined by the equipped Gear. Its name, circular forms and cold gleam point to the heart of the game: the artificial Kingdom Hearts the Organization feeds in the sky of The World That Never Was, itself shaped like a moon.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Total Eclipse s'obtient en équipant l'un des Gears de la seconde moitié du jeu, une fois que Roxas dispose d'un panneau assez large et des composants nécessaires, achetés ou rapportés des missions.\n\nCe Gear penche du côté de la magie, ce qui reste rare pour Roxas : ses configurations les plus courantes privilégient la force et la vitesse. Il devient intéressant dans les missions coopératives et dans le mode Mission Multijoueur, où chaque membre de l'Organisation dispose de son propre panneau. Sur le plan du récit, ces Gears de fin de partie accompagnent les chapitres où Xion s'effondre et où Roxas quitte l'Organisation.",
          "Total Eclipse is obtained by equipping one of the second-half Gears, once Roxas has a wide enough panel and the necessary components, bought or brought back from missions.\n\nThis Gear leans towards magic, which stays rare for Roxas: his most common setups favour strength and speed. It becomes interesting in co-operative missions and in Mission Mode, where each Organization member has their own panel. Narratively, these late Gears accompany the chapters in which Xion breaks down and Roxas walks away from the Organization.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Total Eclipse", url: "https://kingdomhearts.fandom.com/wiki/Total_Eclipse" }],
  },

  // ─────────────────────────── Birth by Sleep ───────────────────────────
  "treasure-trove": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Mine de joyaux est une Keyblade de mineur : sa lame évoque le manche d'une pioche, sa garde imite l'entrée boisée d'une galerie, et ses dents sont taillées comme un tas de gemmes brutes. Les couleurs — bleu, rouge et jaune vif — reprennent celles des costumes des sept nains.\n\nSon porte-clés est un diamant. La Keyblade renvoie au Bois des Nains, le monde adapté de Blanche-Neige et les Sept Nains : la mine où les nains chantent en travaillant, la Reine et son miroir, et la pomme empoisonnée. C'est le premier monde Disney visité par Terra, Ventus et Aqua dans plusieurs itinéraires de Birth by Sleep.",
          "Treasure Trove is a miner's Keyblade: its blade suggests a pickaxe handle, its guard imitates the timbered mouth of a gallery, and its teeth are cut like a heap of raw gems. The colours — blue, red and bright yellow — borrow the seven dwarfs' costumes.\n\nIts keychain is a diamond. The Keyblade points to Dwarf Woodlands, the world adapted from Snow White and the Seven Dwarfs: the mine where the dwarfs sing at work, the Queen and her mirror, and the poisoned apple. It is the first Disney world Terra, Ventus and Aqua visit on several Birth by Sleep routes.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Mine de joyaux est remise au personnage à la fin de l'épisode du Bois des Nains, quel que soit celui des trois protagonistes que l'on incarne : Terra, qui y croise la Reine et son miroir magique, Ventus, qui protège Blanche-Neige des Nescients, ou Aqua, qui affronte la sorcière dans la forêt.\n\nLe système de Birth by Sleep diffère de celui des autres épisodes : la Keyblade équipée modifie les statistiques et surtout le Style de Combat auquel elle donne accès. Mine de joyaux est un porte-clés d'entrée de gamme, équilibré, dont l'intérêt est de faire découvrir le fonctionnement des commandes et des Styles avant les armes plus spécialisées des mondes suivants.",
          "Treasure Trove is handed to the character at the end of the Dwarf Woodlands episode, whichever of the three protagonists is being played: Terra, who meets the Queen and her magic mirror; Ventus, who protects Snow White from the Unversed; or Aqua, who confronts the witch in the forest.\n\nBirth by Sleep's system differs from the other entries': the equipped Keyblade alters stats and, above all, the Command Style it grants access to. Treasure Trove is an entry-level, balanced keychain whose purpose is to introduce how commands and Styles work before the more specialised weapons of later worlds.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Treasure Trove", url: "https://kingdomhearts.fandom.com/wiki/Treasure_Trove" }],
  },

  "stroke-of-midnight": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Coup de minuit est une Keyblade de bal : sa lame bleu pâle et argentée s'élance comme une aiguille d'horloge, sa garde forme un cadran, et ses dents reprennent la silhouette d'un escalier de château. L'ensemble est fin, presque fragile, dans les teintes de la robe de Cendrillon.\n\nSon porte-clés est une pantoufle de verre. Le nom de l'arme désigne le douzième coup de minuit, l'instant où le sortilège de la Bonne Fée se rompt et où le carrosse redevient citrouille. La Keyblade renvoie donc au Palais des Rêves et à ce qui, dans Birth by Sleep, fait de Cendrillon l'exemple même d'un cœur assez fort pour espérer sans jamais céder.",
          "Stroke of Midnight is a ballroom Keyblade: its pale blue and silver blade rises like a clock hand, its guard forms a dial, and its teeth reproduce the silhouette of a castle staircase. The whole is slender, almost fragile, in the shades of Cinderella's gown.\n\nIts keychain is a glass slipper. The weapon's name denotes the twelfth stroke of midnight, the instant the Fairy Godmother's spell breaks and the coach turns back into a pumpkin. The Keyblade therefore points to Castle of Dreams and to what, in Birth by Sleep, makes Cinderella the very example of a heart strong enough to hope without ever giving way.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Coup de minuit récompense la fin de l'épisode du Palais des Rêves, dans le scénario de chacun des trois porteurs : Terra y observe la Bonne Fée, Ventus y suit Jaq à travers le château rétréci, et Aqua y protège Cendrillon des Nescients pendant le bal.\n\nLe porte-clés penche du côté de la magie et donne accès à un Style de Combat adapté aux enchaînements de sorts, ce qui en fait un choix logique pour Aqua, la plus magicienne des trois. Il illustre la manière dont Birth by Sleep lie chaque monde Disney à une façon de se battre, et non plus seulement à un décor et à un bonus chiffré.",
          "Stroke of Midnight rewards the end of the Castle of Dreams episode in each of the three wielders' stories: Terra watches the Fairy Godmother there, Ventus follows Jaq through the shrunken castle, and Aqua protects Cinderella from the Unversed during the ball.\n\nThe keychain leans towards magic and grants a Command Style suited to spell chains, which makes it a logical pick for Aqua, the most magically inclined of the three. It shows how Birth by Sleep ties each Disney world to a way of fighting rather than merely to a setting and a numeric bonus.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Stroke of Midnight", url: "https://kingdomhearts.fandom.com/wiki/Stroke_of_Midnight" }],
  },

  "fairy-stars": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Astres féériques est une Keyblade tricolore, et ce n'est pas un hasard : le vert, le rouge et le bleu sont les couleurs de Flora, Pâquerette et Pimprenelle, les trois bonnes fées de La Belle au bois dormant, dont les baguettes se disputent la teinte de la robe d'Aurore. La lame est parsemée d'étoiles et la garde forme une couronne de pétales.\n\nSon porte-clés est une baguette étoilée. La Keyblade renvoie au Domaine Enchanté et à Maléfique, qui y jette sa malédiction sur Aurore, endort tout un royaume et se change en dragon. Dans Birth by Sleep, c'est aussi le monde où Terra arrache le cœur d'Aurore sous l'influence de la sorcière, sans en mesurer la portée.",
          "Fairy Stars is a three-coloured Keyblade, and not by chance: green, red and blue are the colours of Flora, Fauna and Merryweather, the three good fairies of Sleeping Beauty whose wands quarrel over the shade of Aurora's gown. The blade is scattered with stars and the guard forms a crown of petals.\n\nIts keychain is a star-tipped wand. The Keyblade points to Enchanted Dominion and to Maleficent, who casts her curse on Aurora there, puts a whole kingdom to sleep and turns into a dragon. In Birth by Sleep it is also the world where Terra tears out Aurora's heart under the witch's influence, without grasping what he has done.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Astres féériques s'obtient à la fin de l'épisode du Domaine Enchanté, dans le scénario de chacun des trois personnages. Terra y sert d'instrument à Maléfique, Ventus y poursuit les Nescients dans le château endormi, et Aqua y affronte la sorcière changée en dragon aux côtés du prince Philippe.\n\nLe porte-clés est nettement orienté magie, avec un bon bonus de MP, et donne accès à un Style de Combat qui privilégie les sorts. Comme la plupart des Keyblades de Birth by Sleep, il n'est pas lié à un personnage : les trois porteurs peuvent l'équiper, et c'est la combinaison Keyblade-commandes qui définit réellement le style de chacun.",
          "Fairy Stars is obtained at the end of the Enchanted Dominion episode in each of the three characters' stories. Terra serves as Maleficent's instrument there, Ventus chases the Unversed through the sleeping castle, and Aqua faces the witch turned dragon alongside Prince Phillip.\n\nThe keychain leans clearly towards magic, with a good MP bonus, and grants a Command Style that favours spells. Like most Birth by Sleep Keyblades it is not bound to a character: all three wielders can equip it, and it is the Keyblade-and-command combination that truly defines each one's style.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Fairy Stars", url: "https://kingdomhearts.fandom.com/wiki/Fairy_Stars" }],
  },

  "victory-line": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Victory Line est une Keyblade de course automobile : sa lame reprend la carrosserie d'un bolide, avec ses bandes de couleur, sa garde imite un aileron et ses dents forment un damier d'arrivée. Les rouges et les jaunes vifs en font l'une des armes les plus criardes de la série.\n\nSon porte-clés est un drapeau à damier. Elle renvoie à la Ville de Disney, le monde de Birth by Sleep entièrement bâti autour des courts métrages classiques : les Rumble Racing, les mini-jeux de Pat et de Dingo, et une place de fête où l'on trouve aussi le Rythme des Glaces. C'est le monde le plus léger du jeu, à l'écart de l'intrigue principale.",
          "Victory Line is a motor-racing Keyblade: its blade reproduces a racer's bodywork with coloured stripes, its guard imitates a spoiler and its teeth form a chequered finish line. The bright reds and yellows make it one of the loudest weapons in the series.\n\nIts keychain is a chequered flag. It points to Disney Town, the Birth by Sleep world built entirely around the classic shorts: Rumble Racing, Pete and Goofy's mini-games, and a festival square that also hosts Ice Cream Beat. It is the game's lightest world, set apart from the main plot.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Victory Line est remise au personnage à la fin de l'épisode de la Ville de Disney, dans le scénario de chacun des trois porteurs, une fois les épreuves de Pat déjouées et la fête rendue à ses habitants.\n\nLe porte-clés est orienté force, avec des statistiques honnêtes mais sans excès, et donne accès à un Style de Combat rapide. Son intérêt tient surtout à son contexte : la Ville de Disney concentre les mini-jeux de Birth by Sleep, et les récompenses qu'on y gagne — dont Gourmandises — sont parmi les rares à ne pas dépendre d'un combat de boss.",
          "Victory Line is handed to the character at the end of the Disney Town episode in each of the three wielders' stories, once Pete's rigged contests are foiled and the festival returned to its people.\n\nThe keychain leans towards strength, with honest but unremarkable stats, and grants a fast Command Style. Its appeal lies mainly in its context: Disney Town concentrates Birth by Sleep's mini-games, and the rewards earned there — Sweetstack among them — are among the few that do not depend on a boss fight.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Victory Line", url: "https://kingdomhearts.fandom.com/wiki/Victory_Line" }],
  },

  "mark-of-a-hero": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Mark of a Hero reprend le vocabulaire du Colisée de l'Olympe : lame de bronze aux allures de glaive, garde en forme d'ailes, dents évoquant un éclair. Le traitement est plus antique et plus sobre que celui d'Olympia ou de Emblème de Héros, en accord avec l'époque où se déroule Birth by Sleep, une décennie avant le premier Kingdom Hearts.\n\nSon porte-clés est le médaillon d'Hercule, alors encore un jeune apprenti que Phil entraîne sans conviction. Le nom de l'arme — la marque d'un héros — résume le sujet du monde : ce qui distingue le vrai héros n'est ni la force ni la victoire, leçon que Terra, Ventus et Aqua reçoivent chacun à leur manière.",
          "Mark of a Hero reuses the vocabulary of Olympus Coliseum: a bronze, gladius-like blade, a winged guard, teeth suggesting a lightning bolt. The treatment is more ancient and more restrained than Olympia's or Hero's Crest's, in keeping with the era of Birth by Sleep, a decade before the first Kingdom Hearts.\n\nIts keychain is Hercules's medallion, at a time when he is still a young trainee Phil coaches without much faith. The weapon's name — the mark of a hero — sums up the world's subject: what makes a true hero is neither strength nor victory, a lesson Terra, Ventus and Aqua each receive in their own way.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Mark of a Hero s'obtient à la fin de l'épisode du Colisée de l'Olympe, dans le scénario de chacun des trois personnages. C'est aussi le monde où Terra rencontre Zack, l'apprenti héros venu de Final Fantasy VII, et où Hadès tente d'utiliser les ténèbres du porteur pour ses propres desseins.\n\nLe porte-clés est orienté force, avec un bonus d'attaque parmi les plus nets des Keyblades de monde, et donne accès à un Style de Combat physique. Il convient particulièrement à Terra, dont le jeu repose sur les coups lourds, et reste un choix solide pour l'Arène Mirage, le mode de défis en ligne de Birth by Sleep.",
          "Mark of a Hero is obtained at the end of the Olympus Coliseum episode in each of the three characters' stories. It is also the world where Terra meets Zack, the trainee hero from Final Fantasy VII, and where Hades tries to turn the wielder's darkness to his own ends.\n\nThe keychain leans towards strength, with one of the sharpest attack bonuses among the world Keyblades, and grants a physical Command Style. It suits Terra especially, whose play rests on heavy blows, and stays a solid pick for the Mirage Arena, Birth by Sleep's challenge mode.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mark of a Hero", url: "https://kingdomhearts.fandom.com/wiki/Mark_of_a_Hero" }],
  },

  "hyperdrive": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Hyperdrive est une Keyblade de science-fiction : sa lame bleu-gris est faite de plaques métalliques et de tuyères, sa garde imite un réacteur, et ses dents forment un module de propulsion. Le design industriel tranche avec les Keyblades féeriques des autres mondes de Birth by Sleep.\n\nSon porte-clés est un vaisseau spatial rouge, celui que Stitch dérobe pour fuir. Elle renvoie à l'Espace Profond, le monde adapté de Lilo et Stitch : la fédération galactique, le vaisseau-prison, et l'Expérience 626 que le docteur Jumba a créée pour détruire et qui, dans Birth by Sleep, croise la route des trois apprentis bien avant d'atterrir à Hawaï.",
          "Hyperdrive is a science-fiction Keyblade: its blue-grey blade is built from metal plates and thruster nozzles, its guard imitates an engine, and its teeth form a propulsion module. The industrial design contrasts with the fairy-tale Keyblades of Birth by Sleep's other worlds.\n\nIts keychain is a red spacecraft, the one Stitch steals to escape. It points to Deep Space, the world adapted from Lilo & Stitch: the galactic federation, the prison ship, and Experiment 626, whom Doctor Jumba built to destroy and who, in Birth by Sleep, crosses the three apprentices' paths long before landing in Hawaii.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Hyperdrive s'obtient à la fin de l'épisode de l'Espace Profond, dans le scénario de chacun des trois porteurs. Terra y affronte l'Expérience 221, Ventus y sympathise avec Stitch, et Aqua contribue à la fuite de la créature à travers le vaisseau du Grand Conseil.\n\nLe porte-clés est équilibré et donne accès à un Style de Combat rapide, cohérent avec l'univers technologique du monde. Comme les autres Keyblades de Birth by Sleep, il se conserve d'un scénario à l'autre pour un même fichier de sauvegarde, ce qui encourage à refaire les mondes avec chacun des trois personnages pour compléter la collection.",
          "Hyperdrive is obtained at the end of the Deep Space episode in each of the three wielders' stories. Terra faces Experiment 221 there, Ventus befriends Stitch, and Aqua helps the creature escape through the Grand Council's ship.\n\nThe keychain is balanced and grants a fast Command Style, in keeping with the world's technological setting. Like the other Birth by Sleep Keyblades it carries across stories within the same save file, which encourages replaying the worlds with each of the three characters to complete the collection.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hyperdrive", url: "https://kingdomhearts.fandom.com/wiki/Hyperdrive" }],
  },

  "pixie-petal": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Pixie Petal est une Keyblade légère et verte : la lame s'ouvre en pétales, la garde forme deux ailes de fée translucides, et l'ensemble semble fait pour flotter plutôt que pour frapper. Les tons verts et dorés reprennent la palette de Clochette et de la poussière de fée.\n\nSon porte-clés est une fleur. Elle renvoie au Pays Imaginaire tel que Birth by Sleep le montre : Peter Pan et les Enfants Perdus, le Capitaine Crochet à la poursuite d'un trésor, et une île où le temps ne passe pas. C'est la version Birth by Sleep de ce que Harpe féérique représentait dans le premier Kingdom Hearts.",
          "Pixie Petal is a light green Keyblade: the blade opens into petals, the guard forms two translucent fairy wings, and the whole seems made to float rather than to strike. The greens and golds borrow the palette of Tinker Bell and her pixie dust.\n\nIts keychain is a flower. It points to Neverland as Birth by Sleep shows it: Peter Pan and the Lost Boys, Captain Hook chasing treasure, and an island where time does not pass. It is the Birth by Sleep counterpart to what Fairy Harp represented in the first Kingdom Hearts.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Pixie Petal est remise au personnage à la fin de l'épisode du Pays Imaginaire, dans le scénario de chacun des trois porteurs, après les péripéties autour de la carte au trésor de Crochet et les affrontements contre les Nescients sur le pont du navire.\n\nLe porte-clés est franchement orienté magie, avec un bon bonus de MP, et donne accès à un Style de Combat qui privilégie les sorts enchaînés. Il figure parmi les meilleurs choix magiques du jeu et se marie particulièrement bien avec le jeu d'Aqua et avec les commandes de foudre et de glace montées via la fusion de commandes.",
          "Pixie Petal is handed to the character at the end of the Neverland episode in each of the three wielders' stories, after the business with Hook's treasure map and the fights against the Unversed on the ship's deck.\n\nThe keychain leans firmly towards magic, with a good MP bonus, and grants a Command Style favouring chained spells. It ranks among the game's best magical picks and pairs particularly well with Aqua's play and with the Thunder and Blizzard commands built through command melding.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Pixie Petal", url: "https://kingdomhearts.fandom.com/wiki/Pixie_Petal" }],
  },

  "sweetstack": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Gourmandises est sans doute la Keyblade la plus improbable de la série : sa lame est une pile de boules de glace multicolores en équilibre sur un cornet, sa garde une cerise confite, et ses dents des morceaux de gaufrette. Elle est vive, sucrée, et n'a rien d'intimidant.\n\nElle est née d'un mini-jeu : le Rythme des Glaces de la Ville de Disney, où le personnage doit empiler des boules au rythme de la musique sans faire tomber la pile. Elle est aussi un écho de la glace à l'eau de mer, la friandise de la Cité du Crépuscule qui traverse toute la saga et lie Roxas, Axel et Xion — un lien que Birth by Sleep amorce discrètement, une décennie plus tôt.",
          "Sweetstack is probably the most improbable Keyblade in the series: its blade is a stack of multicoloured ice-cream scoops balanced on a cone, its guard a candied cherry, its teeth pieces of wafer. It is bright, sugary and not remotely intimidating.\n\nIt was born from a mini-game: Disney Town's Ice Cream Beat, in which the character stacks scoops in time with the music without toppling the pile. It is also an echo of sea-salt ice cream, the Twilight Town treat that runs through the whole saga and binds Roxas, Axel and Xion — a link Birth by Sleep quietly sets up a decade earlier.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Gourmandises ne récompense pas un combat mais un mini-jeu : il faut réussir le Rythme des Glaces à la Ville de Disney, avec un score suffisant, pour que le porte-clés soit remis au personnage. C'est l'une des rares Keyblades du jeu qu'on peut manquer entièrement en se contentant de l'histoire.\n\nSes statistiques sont solides, avec un net bonus de magie, et le Style de Combat auquel elle donne accès est l'un des plus originaux du jeu. Elle illustre l'importance des activités annexes dans Birth by Sleep : la Ville de Disney, l'Arène Mirage et la fusion de commandes forment un tissu de contenus facultatifs indispensables pour affronter les défis de fin de partie.",
          "Sweetstack rewards not a battle but a mini-game: you must clear Ice Cream Beat in Disney Town with a high enough score for the keychain to be handed over. It is one of the few Keyblades in the game you can miss entirely by sticking to the story.\n\nIts stats are solid, with a clear magic bonus, and the Command Style it grants is among the game's most distinctive. It illustrates how much side content matters in Birth by Sleep: Disney Town, the Mirage Arena and command melding form a fabric of optional activities that endgame challenges effectively require.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sweetstack", url: "https://kingdomhearts.fandom.com/wiki/Sweetstack" }],
  },

  "frolic-flame": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Frolic Flame est une Keyblade rouge et noire dont la lame évoque une flamme figée : les bords sont dentelés comme un incendie, la garde forme deux volutes de feu, et les dents rappellent la silhouette d'un chakram. Le rapprochement n'est pas fortuit.\n\nLe porte-clés reprend en effet l'emblème d'Axel — ou plutôt de Lea, l'adolescent roux du Jardin Radieux que Birth by Sleep montre en train de se battre au frisbee avec son ami Isa, une décennie avant de devenir un Simili. La Keyblade est ainsi l'un des nombreux fils que Birth by Sleep tend vers Kingdom Hearts II et 358/2 Days, en donnant une enfance aux membres de l'Organisation XIII.",
          "Frolic Flame is a red and black Keyblade whose blade suggests a frozen flame: the edges are serrated like a fire, the guard forms two curls of flame, and the teeth recall the silhouette of a chakram. The resemblance is not accidental.\n\nThe keychain in fact reuses Axel's emblem — or rather Lea's, the red-haired teenager of Radiant Garden whom Birth by Sleep shows sparring with frisbees alongside his friend Isa, a decade before becoming a Nobody. The Keyblade is thus one of the many threads Birth by Sleep runs towards Kingdom Hearts II and 358/2 Days, giving the Organization XIII members a childhood.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Frolic Flame s'obtient à la fin de l'épisode du Jardin Radieux, dans le scénario de chacun des trois porteurs. C'est le monde où Terra, Ventus et Aqua croisent Lea et Isa, où Aqua rencontre une petite Kairi, et où le combat contre l'Armure Trinité réunit brièvement les trois amis.\n\nLe porte-clés est orienté force, avec un bonus d'attaque appréciable, et donne accès à un Style de Combat agressif. Il arrive tard dans la plupart des itinéraires, à un moment où le récit se resserre autour du Maître Xehanort et où le Jardin Radieux commence à révéler ce qu'il deviendra plus tard : la Forteresse Oubliée.",
          "Frolic Flame is obtained at the end of the Radiant Garden episode in each of the three wielders' stories. It is the world where Terra, Ventus and Aqua run into Lea and Isa, where Aqua meets a young Kairi, and where the fight against the Trinity Armor briefly reunites the three friends.\n\nThe keychain leans towards strength, with a welcome attack bonus, and grants an aggressive Command Style. It arrives late on most routes, at a point where the story tightens around Master Xehanort and Radiant Garden begins to hint at what it will later become: Hollow Bastion.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Frolic Flame", url: "https://kingdomhearts.fandom.com/wiki/Frolic_Flame" }],
  },

  // ─────────────────────────── Kingdom Hearts III ───────────────────────────
  "ever-after": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "À tout jamais est l'une des Keyblades les plus délicates de Kingdom Hearts III : sa lame violette et dorée est ornée de motifs floraux peints, sa garde forme une couronne de fleurs, et une longue mèche de cheveux blonds tressée court le long du manche. L'ensemble tient de l'objet de conte plus que de l'arme.\n\nSon porte-clés est un soleil stylisé, l'emblème du royaume de Corona et le motif que Raiponce peint sur les murs de sa tour sans savoir qu'il désigne sa propre famille. La Keyblade renvoie donc à ce que le film raconte : une princesse enfermée par une femme qui vole sa jeunesse, et une chevelure dont la magie guérit.",
          "Ever After is one of the most delicate Keyblades in Kingdom Hearts III: its purple and gold blade carries painted floral patterns, its guard forms a crown of flowers, and a long braid of blonde hair runs along the hilt. The whole belongs to a storybook rather than to an armoury.\n\nIts keychain is a stylised sun, the emblem of the kingdom of Corona and the motif Rapunzel paints on her tower walls without knowing it names her own family. The Keyblade therefore points to what the film tells: a princess shut away by a woman who steals her youth, and hair whose magic heals.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora obtient À tout jamais au Royaume de Corona, après avoir accompagné Raiponce jusqu'aux lanternes du royaume et affronté Mère Gothel, qui manipule la jeune fille depuis toujours pour conserver le pouvoir de guérison de sa chevelure.\n\nLe porte-clés est nettement orienté magie et donne la capacité Soin +, qui empêche d'être interrompu pendant un sort de soin. Sa transformation est la Baguette Miroir, qui change la Keyblade en bâton magique et permet d'enchaîner des sorts de zone d'une portée inhabituelle. C'est l'un des choix privilégiés des joueurs qui construisent un Sora magicien dans Kingdom Hearts III.",
          "Sora obtains Ever After in the Kingdom of Corona, after escorting Rapunzel to the kingdom's lanterns and facing Mother Gothel, who has manipulated the girl all her life to keep the healing power of her hair.\n\nThe keychain leans clearly towards magic and grants Leaf Bracer, which prevents interruption while casting a healing spell. Its formchange is the Mirage Staff, turning the Keyblade into a magic rod and letting Sora chain area spells of unusual reach. It is one of the favoured picks for players building a magic-focused Sora in Kingdom Hearts III.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Ever After", url: "https://kingdomhearts.fandom.com/wiki/Ever_After" }],
  },

  "happy-gear": {
    sections: [
      {
        title: L("Apparence et symbolique", "Design and symbolism"),
        text: L(
      "Happy Gear est une Keyblade d'usine : sa lame est faite de plaques d'acier et d'engrenages jaunes et bleus, sa garde imite le châssis d'une machine, et ses dents forment une roue dentée. Des portes de placard miniatures ornent le manche, en écho au système de portes de Monstres et Cie.\n\nSon porte-clés est une porte de placard. Le nom joue sur les deux ressorts du film : les « gears », rouages de l'usine qui produit l'énergie de Monstropolis, et le rire, dont Bob et Sulli découvrent qu'il alimente la ville bien mieux que la peur. C'est la seule Keyblade de la série dont le thème est une chaîne de production.",
          "Happy Gear is a factory Keyblade: its blade is built from steel plates and yellow-and-blue cogs, its guard imitates a machine frame, and its teeth form a gear wheel. Miniature closet doors decorate the hilt, echoing the door system of Monsters, Inc.\n\nIts keychain is a closet door. The name plays on the film's two mainsprings: the gears of the factory that produces Monstropolis's energy, and laughter, which Mike and Sulley discover powers the city far better than fear does. It is the only Keyblade in the series whose theme is an assembly line.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora reçoit Happy Gear à Monstropolis, à la fin du monde, après avoir traversé l'usine et les couloirs de portes, protégé Bouh de Randall et affronté Vanitas, dont la réapparition annonce le retour du Maître Xehanort et des treize ténèbres.\n\nLe porte-clés est équilibré, avec une légère avance en magie, et donne la capacité Siphon de Focus, qui restaure la jauge de Focus en frappant. Ses deux transformations sont les Griffes Agiles, rapides et mobiles, et les Yo-yos Jumeaux, qui frappent à distance. Cette double transformation en fait l'une des Keyblades les plus polyvalentes du milieu de Kingdom Hearts III.",
          "Sora receives Happy Gear in Monstropolis at the end of the world, after crossing the factory and the door corridors, protecting Boo from Randall and facing Vanitas, whose reappearance announces the return of Master Xehanort and the thirteen darknesses.\n\nThe keychain is balanced with a slight lean towards magic, and grants Focus Syphon, which refills the Focus gauge on hit. Its two formchanges are Agile Claws, fast and mobile, and Twin Yo-yos, which strike at range. That double formchange makes it one of the most versatile Keyblades of Kingdom Hearts III's middle stretch.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Happy Gear", url: "https://kingdomhearts.fandom.com/wiki/Happy_Gear" }],
  },
};
