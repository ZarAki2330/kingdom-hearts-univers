import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des personnages Disney secondaires (lot G) : compagnons de monde,
 * commerçants, souverains, montures et programmes. Clés = slugs des entrées de personnages.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────── Château Disney / Disneyville ───────────────────────
  "chip-and-dale": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Tic et Tac apparaissent en 1943 dans les courts métrages Disney, d'abord comme deux écureuils facétieux qui s'acharnent sur Pluto puis sur Donald. On les distingue à leur museau : Tic a le nez noir et sérieux, Tac le nez rouge et l'air ahuri.\n\nKingdom Hearts leur confie un rôle beaucoup plus technique. Installés au Château Disney, ils sont les ingénieurs du vaisseau Gummi : ils assemblent les blocs, testent les moteurs et gardent le contact radio avec Sora d'un monde à l'autre. Leur voix aiguë accompagne ainsi tous les voyages interstellaires de la série, et l'atelier Gummi devient leur domaine réservé. La saga en fait aussi des informaticiens improvisés, capables de manipuler des données aussi bien que des boulons.",
          "Chip and Dale first appeared in 1943 in Disney's shorts, as two mischievous chipmunks tormenting Pluto and then Donald. They are told apart by their noses: Chip's is black and businesslike, Dale's red and slack-jawed.\n\nKingdom Hearts gives them a far more technical job. Based at Disney Castle, they are the Gummi ship's engineers: they assemble blocks, test engines and keep radio contact with Sora from world to world. Their high-pitched chatter accompanies every interstellar trip in the series, and the Gummi garage becomes their private domain. The saga also turns them into improvised computer technicians, as comfortable with data as with bolts.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Dès le départ de Donald et Dingo du Château Disney, Tic et Tac prennent en charge le vaisseau Gummi qui doit les mener vers les autres mondes. Ce sont eux qui expliquent à Sora le fonctionnement des blocs Gummi récupérés au fil de l'aventure et qui installent les pièces rapportées, notamment celles que Cid fournit à la Ville de Traverse.\n\nLeur atelier reste accessible entre deux mondes : le joueur peut y personnaliser la coque, les armes et la vitesse du vaisseau. Les deux écureuils réapparaissent dans le même rôle dans Kingdom Hearts II, où ils reçoivent Sora au Château Disney, puis dans Kingdom Hearts III, où ils gèrent les communications de bord et signalent les nouvelles routes ouvertes entre les mondes.",
          "As soon as Donald and Goofy leave Disney Castle, Chip and Dale take charge of the Gummi ship meant to carry them to other worlds. They are the ones who explain to Sora how the Gummi blocks gathered along the way work, and who fit the parts brought back to them, including those Cid supplies in Traverse Town.\n\nTheir workshop stays open between worlds: the player can customise the hull, weapons and speed of the ship there. The two chipmunks return in the same role in Kingdom Hearts II, welcoming Sora to Disney Castle, and again in Kingdom Hearts III, where they handle onboard communications and flag the new routes opening between worlds.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Re:coded leur donne leur mission la plus inhabituelle. Lorsque Mickey découvre une phrase mystérieuse dans le journal de Jiminy, c'est à Tic et Tac qu'il demande de numériser l'ouvrage pour l'explorer de l'intérieur. Les deux écureuils installent le matériel dans la bibliothèque du Château Disney et convertissent le journal en un monde de données.\n\nIls surveillent ensuite l'opération depuis l'extérieur, commentant les bugs qui rongent les données et prévenant Mickey quand le Sora numérique se retrouve en difficulté. Leur bricolage permet à Naminé de délivrer son message et, indirectement, ouvre la voie au sauvetage de Terra, Ventus et Aqua.",
          "Re:coded hands them their oddest assignment. When Mickey finds a mysterious sentence in Jiminy's journal, it is Chip and Dale he asks to digitise the book so it can be explored from within. The two chipmunks set up their equipment in Disney Castle's library and convert the journal into a world of data.\n\nThey then monitor the operation from outside, commenting on the bugs eating away at the data and warning Mickey whenever Data-Sora runs into trouble. Their tinkering lets Naminé deliver her message and, indirectly, opens the way to rescuing Terra, Ventus and Aqua.",
        ),
      },
    ],
    trivia: [
      L("Leurs noms français, Tic et Tac, imitent le tic-tac d'une horloge, là où l'anglais « Chip and Dale » joue sur le nom du designer Chippendale.", "Their French names, Tic et Tac, imitate a clock's ticking, whereas the English “Chip and Dale” puns on the furniture designer Chippendale."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Chip and Dale", url: "https://kingdomhearts.fandom.com/wiki/Chip_and_Dale" }],
  },

  "daisy": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Daisy Duck naît en 1940 dans le court métrage Mr. Duck Steps Out, comme partenaire attitrée de Donald : coquette, élégante et nettement moins colérique que lui, mais capable de le remettre à sa place d'un mot.\n\nKingdom Hearts la place au Château Disney, où elle est la dame de compagnie et l'amie de la reine Minnie. Sa relation avec Donald y sert de ressort comique récurrent : le magicien de la cour part sans prévenir, disparaît des mois entiers, et revient devoir des explications. Sa présence, comme celle d'Horace ou de Pat Hibulaire, ancre le château dans l'univers classique des courts métrages plutôt que dans celui des longs métrages Disney adaptés en mondes.",
          "Daisy Duck was born in 1940 in the short Mr. Duck Steps Out, as Donald's regular partner: stylish, refined and far less short-tempered than he is, yet perfectly able to put him in his place with a word.\n\nKingdom Hearts places her at Disney Castle, where she is Queen Minnie's lady-in-waiting and friend. Her relationship with Donald is a recurring comic thread: the court magician leaves without warning, vanishes for months, and comes back owing an explanation. Her presence, like Horace's or Pete's, roots the castle in the world of the classic shorts rather than in the Disney features adapted as worlds.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Une dizaine d'années avant l'aventure de Sora, Daisy vit à la Disneyville, la bourgade voisine du château. Elle y participe aux préparatifs du Festival des Rêves, la fête organisée par la reine Minnie, et croise Terra, Ventus et Aqua lors de leurs passages.\n\nLe festival est perturbé par Pat Hibulaire, qui truque les épreuves et convoite le prix. Daisy fait partie des habitants floués par ses manœuvres, et c'est aux trois porteurs de Keyblade que revient de rétablir l'honnêteté des jeux. Cette apparition, purement domestique, sert surtout à montrer la Disneyville en temps de paix, avant que les ténèbres n'atteignent le royaume.",
          "About a decade before Sora's adventure, Daisy lives in Disney Town, the borough neighbouring the castle. She takes part in preparations for the Dream Festival, the celebration organised by Queen Minnie, and crosses paths with Terra, Ventus and Aqua during their visits.\n\nThe festival is disrupted by Pete, who rigs the events and covets the prize. Daisy is among the townsfolk cheated by his schemes, and it falls to the three Keyblade wielders to restore fair play. This purely domestic appearance mainly serves to show Disney Town at peace, before darkness reaches the kingdom.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Quand Sora, Donald et Dingo reviennent enfin au Château Disney dans Kingdom Hearts II, Daisy les accueille dans la salle du trône aux côtés de Minnie. Elle reproche aussitôt à Donald son silence prolongé, avant que l'attaque des Sans-cœur sur la Pierre Angulaire ne coupe court aux retrouvailles.\n\nPendant que Sora et ses amis partent pour la Rivière du Temps sur les traces de Pat Hibulaire, Daisy reste au château avec la reine. Elle n'a pas de rôle dans le combat, mais sa présence rappelle ce que Donald a laissé derrière lui : un foyer, une promesse, et une raison de rentrer une fois la porte refermée.",
          "When Sora, Donald and Goofy finally return to Disney Castle in Kingdom Hearts II, Daisy welcomes them in the throne room alongside Minnie. She immediately scolds Donald for his long silence, before the Heartless attack on the Cornerstone of Light cuts the reunion short.\n\nWhile Sora and his friends head for Timeless River on Pete's trail, Daisy stays at the castle with the queen. She plays no part in the fighting, but her presence is a reminder of what Donald left behind: a home, a promise, and a reason to come back once the door is shut.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Daisy Duck", url: "https://kingdomhearts.fandom.com/wiki/Daisy_Duck" }],
  },

  "horace-horsecollar": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Horace apparaît en 1929 dans The Plowboy, d'abord comme un simple cheval de trait de la ferme de Mickey, avant de devenir un personnage bipède et bavard de la bande des premiers courts métrages, aux côtés de Clarabelle Cow. Longtemps oublié des productions modernes, il fait partie du fonds classique que Kingdom Hearts réactive.\n\nLa série le range parmi les habitants de la Disneyville, la petite ville rattachée au royaume de Mickey. Il n'a aucun lien avec l'intrigue des Sans-cœur ni avec les porteurs de Keyblade : sa fonction est décorative et comique, et il incarne, avec Clarabelle et Dingo, la mémoire des dessins animés en noir et blanc dans un jeu qui adapte surtout des longs métrages en couleurs.",
          "Horace first appeared in 1929 in The Plowboy, at first simply as a workhorse on Mickey's farm, before becoming a talkative bipedal member of the early shorts' cast alongside Clarabelle Cow. Long forgotten by modern productions, he belongs to the classic stock that Kingdom Hearts revives.\n\nThe series counts him among the residents of Disney Town, the small borough attached to Mickey's kingdom. He has no connection to the Heartless plot or to the Keyblade wielders: his role is decorative and comic, and along with Clarabelle and Goofy he embodies the memory of the black-and-white cartoons in a game that mostly adapts colour features.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Horace n'apparaît que dans Birth by Sleep, lors des visites de Terra, Ventus et Aqua à la Disneyville. La ville est alors en pleine effervescence : la reine Minnie a lancé le Festival des Rêves, une fête faite de courses, de jeux de plateau et de concours de glaces.\n\nHorace fait partie des habitants qui animent ces réjouissances et accueillent les trois porteurs, à qui Minnie remet une médaille en récompense de leur participation. Il assiste ainsi, sans le savoir, aux manigances de Pat Hibulaire, qui triche pour remporter le prix du festival avant d'être démasqué. Aucun combat ne se déroule en sa présence : la Disneyville reste, dans tout l'épisode, l'un des rares mondes épargnés par les Nescients.",
          "Horace appears only in Birth by Sleep, during Terra, Ventus and Aqua's visits to Disney Town. The town is then in full swing: Queen Minnie has launched the Dream Festival, a celebration of races, board games and ice cream contests.\n\nHorace is one of the residents running these festivities and welcoming the three wielders, to whom Minnie awards a medal for taking part. He thus witnesses, without knowing it, Pete's scheming as the villain cheats to win the festival prize before being exposed. No battle takes place in his presence: throughout the game Disney Town remains one of the few worlds spared by the Unversed.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Horace Horsecollar", url: "https://kingdomhearts.fandom.com/wiki/Horace_Horsecollar" }],
  },

  "pluto": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Pluto apparaît en 1930 comme le chien de Mickey. Contrairement à Dingo, il n'est ni bipède ni doué de parole : il reste un animal, ce qui fait tout son intérêt comique et, dans Kingdom Hearts, tout son intérêt narratif.\n\nLa série lui confie un rôle de messager silencieux. Incapable d'expliquer ce qu'il a vu, Pluto se contente d'apparaître, d'aboyer et de repartir, laissant aux personnages le soin de deviner ce qu'il annonce. Il traverse les mondes sans vaisseau ni Keyblade, par des chemins que le scénario n'explique jamais, et ses surgissements marquent presque toujours un tournant de l'intrigue ou l'arrivée d'une lettre du roi.",
          "Pluto first appeared in 1930 as Mickey's dog. Unlike Goofy he is neither bipedal nor able to speak: he remains an animal, which is the source of both his comedy and, in Kingdom Hearts, his narrative usefulness.\n\nThe series casts him as a silent messenger. Unable to explain what he has seen, Pluto simply appears, barks and leaves, letting the characters work out what he is announcing. He crosses worlds without a ship or a Keyblade, by routes the story never explains, and his sudden arrivals almost always mark a turn in the plot or the delivery of a letter from the king.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "C'est Pluto qui déclenche tout : il apporte à Donald, dans la salle du trône du Château Disney, la lettre par laquelle Mickey annonce son départ et demande qu'on trouve « la clé ». Le chien accompagne ensuite Donald et Dingo jusqu'à la Ville de Traverse.\n\nLà, il retrouve Sora, tout juste arrivé après la destruction des Îles du Destin, et le réveille dans une ruelle : leur rencontre précède de peu celle du garçon avec le canard et le chien. À la toute fin du jeu, alors que Sora, Donald et Dingo marchent sur une route sans but, Pluto surgit derrière eux, une enveloppe frappée du sceau de Mickey dans la gueule, avant de repartir en courant — une image qui ferme le premier épisode et ouvre directement Chain of Memories.",
          "Pluto sets everything in motion: he brings Donald, in Disney Castle's throne room, the letter in which Mickey announces his departure and asks that “the key” be found. The dog then travels with Donald and Goofy to Traverse Town.\n\nThere he finds Sora, newly arrived after the destruction of Destiny Islands, and wakes him in an alley: their meeting comes shortly before the boy meets the duck and the dog. At the very end of the game, as Sora, Donald and Goofy walk down an aimless road, Pluto bounds up behind them with an envelope bearing Mickey's seal in his mouth, then runs off — an image that closes the first game and leads straight into Chain of Memories.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Pluto réapparaît à la Cité du Crépuscule, où le Roxas des données le croise dans les ruelles du monde virtuel sans comprendre d'où il sort. Plus tard, dans le Monde qui n'existe pas, c'est lui qui tient compagnie à Kairi lorsque Axel l'enlève et que l'Organisation XIII la retient prisonnière.\n\nQuand Kairi s'échappe de sa cellule, Pluto reste à ses côtés dans les couloirs blancs de la forteresse, jusqu'à ce qu'elle retrouve Sora. Le jeu ne dit jamais comment un chien de Disney a pu franchir les frontières entre les mondes : cette invraisemblance assumée fait partie du personnage, et son fidèle compagnonnage auprès de Kairi reste l'un des rares réconforts de cette partie du récit.",
          "Pluto turns up again in Twilight Town, where Data-Roxas meets him in the alleys of the virtual world without understanding where he came from. Later, in The World That Never Was, he is the one who keeps Kairi company after Axel abducts her and Organization XIII holds her captive.\n\nWhen Kairi escapes her cell, Pluto stays with her through the fortress's white corridors until she finds Sora again. The game never explains how a Disney dog managed to cross between worlds: that cheerful implausibility is part of the character, and his loyal company at Kairi's side is one of the few comforts in this stretch of the story.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Pluto", url: "https://kingdomhearts.fandom.com/wiki/Pluto" }],
  },

  "scrooge-mcduck": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Créé par Carl Barks en 1947 dans les bandes dessinées de Donald, Balthazar Picsou est l'oncle richissime du canard, un vieil Écossais en redingote et guêtres qui a bâti sa fortune à la force du poignet et ne s'en laisse jamais conter.\n\nKingdom Hearts en fait le grand entrepreneur de la saga : partout où il passe, il ouvre une boutique, lance un produit ou monte une affaire. Le jeu lui attribue surtout la paternité de la glace à l'eau de mer, cette friandise bleue au goût salé-sucré qui devient l'un des symboles les plus forts de la série, associée à Roxas, Axel et Xion sur la tour de la gare de la Cité du Crépuscule. Picsou traverse ainsi les épisodes sans jamais combattre, mais en laissant sa marque commerciale dans plusieurs mondes.",
          "Created by Carl Barks in 1947 in Donald's comics, Scrooge McDuck is the duck's fabulously wealthy uncle, an old Scot in frock coat and spats who built his fortune by his own hand and is never taken in.\n\nKingdom Hearts makes him the saga's great entrepreneur: wherever he goes he opens a shop, launches a product or starts a venture. Above all the game credits him with inventing sea-salt ice cream, the blue salty-sweet treat that becomes one of the series' strongest symbols, tied to Roxas, Axel and Xion on the Twilight Town clock tower. Scrooge thus moves through the games without ever fighting, yet leaves his commercial mark on several worlds.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Birth by Sleep montre Picsou à la Disneyville, une dizaine d'années avant l'aventure de Sora. Il y a monté un empire local : le stand de glaces confié à ses petits-neveux, le jeu de plateau Command Board et les courses du Festival des Rêves passent tous par lui.\n\nC'est là qu'il met au point la recette de la glace à l'eau de mer, en cherchant un parfum qui « donne envie de pleurer et de sourire en même temps ». Terra, Ventus et Aqua l'aident chacun à leur manière, en testant ses créations et en participant à ses attractions. Le vieux canard mentionne aussi ses projets d'expansion vers d'autres mondes, ce qui explique qu'on le retrouve bien plus tard, installé ailleurs, la même recette en tête.",
          "Birth by Sleep shows Scrooge in Disney Town, a decade or so before Sora's adventure. He has built a local empire there: the ice cream stand entrusted to his great-nephews, the Command Board game and the Dream Festival races all run through him.\n\nIt is there that he perfects the sea-salt ice cream recipe, hunting for a flavour that “makes you want to cry and smile at once”. Terra, Ventus and Aqua each help in their own way, testing his creations and joining his attractions. The old duck also mentions plans to expand into other worlds, which explains why he is found much later, settled elsewhere, with the same recipe on his mind.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Réfugié à la Forteresse Oubliée après la disparition de son ancien monde, Picsou y tient boutique avec les neveux de Donald et se lamente d'avoir perdu la recette exacte de sa glace. Il finit par la retrouver et confie à Sora des marchandises à écouler, ce qui donne lieu à une petite chaîne de quêtes commerciales.\n\nOn le retrouve aussi à la Cité du Crépuscule, où il tient un stand près de la place. Ses apparitions restent en marge de l'intrigue principale, mais elles tissent un lien discret entre les épisodes : la glace bleue qu'il vend est exactement celle que Roxas, Axel et Xion partagent au sommet de la tour de l'horloge, et que Sora reconnaît sans savoir pourquoi elle lui est familière.",
          "Having taken refuge in Hollow Bastion after his old world was lost, Scrooge runs a shop there with Donald's nephews and laments having lost the exact recipe for his ice cream. He eventually recovers it and hands Sora goods to sell, which gives rise to a small chain of trading quests.\n\nHe also turns up in Twilight Town, running a stall near the square. His appearances stay on the margins of the main plot, but they quietly link the games together: the blue ice cream he sells is exactly the one Roxas, Axel and Xion share atop the clock tower, and that Sora recognises without knowing why it feels familiar.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Dans Kingdom Hearts III, Picsou a ouvert un bistrot à la Cité du Crépuscule et cherche un chef digne de son établissement. Il engage le Petit Chef, le rat cuisinier venu du monde de Ratatouille, et transforme le restaurant en mini-jeu de cuisine où Sora prépare des plats à partir des ingrédients récoltés dans les mondes.\n\nLes plats réussis offrent des bonus de statistiques durables, ce qui fait du bistrot l'un des systèmes de progression secondaires du jeu. Picsou y accueille aussi Sora, Donald et Dingo à leur retour, commente les nouvelles des mondes et rappelle que même en pleine guerre des Keyblades, la vie et le commerce continuent à la Cité du Crépuscule.",
          "In Kingdom Hearts III, Scrooge has opened a bistro in Twilight Town and is looking for a chef worthy of it. He hires Little Chef, the cooking rat from the world of Ratatouille, and turns the restaurant into a cooking mini-game where Sora prepares dishes from ingredients gathered across the worlds.\n\nSuccessful dishes grant lasting stat bonuses, making the bistro one of the game's secondary progression systems. Scrooge also welcomes Sora, Donald and Goofy back there, comments on news from the worlds, and reminds them that even in the middle of a Keyblade war, life and business go on in Twilight Town.",
        ),
      },
    ],
    trivia: [
      L("Alan Young, la voix anglaise historique de Picsou depuis La Bande à Picsou, reprend le rôle dans la série jusqu'à Kingdom Hearts III.", "Alan Young, Scrooge's long-standing English voice since DuckTales, reprises the role in the series up to Kingdom Hearts III."),
      L("La glace à l'eau de mer, inventée par Picsou dans Birth by Sleep, est une création originale de Kingdom Hearts sans équivalent chez Disney.", "Sea-salt ice cream, invented by Scrooge in Birth by Sleep, is an original Kingdom Hearts creation with no Disney equivalent."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Scrooge McDuck", url: "https://kingdomhearts.fandom.com/wiki/Scrooge_McDuck" }],
  },

  "huey-dewey-louie": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Riri, Fifi et Loulou apparaissent en 1937 dans les bandes dessinées de Donald avant de passer à l'animation : trois neveux identiques que seule la couleur de leur casquette et de leur chemise distingue, rouge, bleu et vert.\n\nKingdom Hearts leur donne un rôle très concret : ce sont les commerçants de la série. Partout où le trio de Sora s'arrête assez longtemps, l'un des triplés tient un comptoir d'objets, un stand d'accessoires ou une échoppe de synthèse. Leur présence rend le réseau de boutiques cohérent d'un monde à l'autre et évite d'inventer un marchand par lieu. Comme leur grand-oncle Picsou, ils ne combattent jamais, mais leur commerce accompagne toute la progression du joueur.",
          "Huey, Dewey and Louie first appeared in 1937 in Donald's comics before moving into animation: three identical nephews told apart only by the colour of their caps and shirts, red, blue and green.\n\nKingdom Hearts gives them a very concrete role: they are the series' shopkeepers. Wherever Sora's trio stops long enough, one of the triplets runs an item counter, an accessory stand or a synthesis shop. Their presence keeps the network of shops coherent from world to world and avoids inventing a merchant for every location. Like their great-uncle Scrooge they never fight, but their trade accompanies the player's whole progression.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "À la Disneyville, dix ans plus tôt, les triplés sont encore des enfants et se disputent le stand de glaces que leur grand-oncle Picsou leur a confié. Chacun défend sa propre idée de la recette idéale et cherche à convaincre les visiteurs de choisir son parfum.\n\nTerra, Ventus et Aqua se prêtent au jeu : les trois porteurs apprennent à mélanger les ingrédients et à créer de nouveaux parfums de glace, un mini-jeu qui débloque des commandes et des objets. En arbitrant leurs chamailleries, les Wayfinders assistent aussi, sans le savoir, à la naissance commerciale de la glace à l'eau de mer, qui prendra tant d'importance des années plus tard à la Cité du Crépuscule.",
          "In Disney Town, ten years earlier, the triplets are still children and squabble over the ice cream stand their great-uncle Scrooge has entrusted to them. Each defends his own idea of the perfect recipe and tries to convince visitors to pick his flavour.\n\nTerra, Ventus and Aqua play along: the three wielders learn to mix ingredients and create new ice cream flavours, a mini-game that unlocks commands and items. In settling their bickering, the Wayfinders also witness, without knowing it, the commercial birth of sea-salt ice cream, which will matter so much years later in Twilight Town.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "À la Ville de Traverse, les triplés tiennent les boutiques du premier district : l'un vend les objets de soin, un autre les accessoires, le troisième les armes et les munitions. Ce sont les premiers marchands que Sora rencontre, et leur comptoir devient l'escale obligée entre deux mondes.\n\nIls réapparaissent dans Kingdom Hearts II, installés cette fois à la Forteresse Oubliée avec Picsou, où ils reprennent les mêmes fonctions dans une ville en pleine reconstruction. Leur passage d'un monde à l'autre illustre discrètement le sort des réfugiés de la série : quand un monde tombe aux ténèbres, ses habitants se retrouvent ailleurs et recommencent, avec les mêmes gestes et le même commerce.",
          "In Traverse Town the triplets run the First District's shops: one sells healing items, another accessories, the third weapons and ammunition. They are the first merchants Sora meets, and their counter becomes the obligatory stop between worlds.\n\nThey return in Kingdom Hearts II, this time set up in Hollow Bastion with Scrooge, where they take on the same duties in a town under reconstruction. Their move from one world to another quietly illustrates the fate of the series' refugees: when a world falls to darkness, its people turn up elsewhere and start again, with the same gestures and the same trade.",
        ),
      },
    ],
    trivia: [
      L("Leurs noms français, Riri, Fifi et Loulou, ne correspondent pas à l'ordre anglais : Huey est Riri, Dewey Fifi et Louie Loulou.", "Their French names, Riri, Fifi and Loulou, map onto Huey, Dewey and Louie respectively."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Huey, Dewey, and Louie", url: "https://kingdomhearts.fandom.com/wiki/Huey,_Dewey,_and_Louie" }],
  },

  "magic-brooms": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Les balais magiques viennent du segment L'Apprenti sorcier de Fantasia (1940), où Mickey, ayant emprunté le chapeau de Yen Sid, anime un balai pour porter ses seaux d'eau, avant que la magie ne lui échappe et que le balai, tranché en morceaux, ne se multiplie jusqu'à inonder l'atelier.\n\nKingdom Hearts en fait des serviteurs domestiques permanents de la magie. On les trouve partout où Yen Sid et Mickey exercent leur art : ils balaient, transportent des objets, montent la garde. Leur silhouette rigide, leurs bras de bois et leur démarche saccadée sont reprises telles quelles du film, et leur présence signale toujours qu'un sorcier veille quelque part sur les lieux.",
          "The magic brooms come from the Sorcerer's Apprentice segment of Fantasia (1940), in which Mickey, having borrowed Yen Sid's hat, animates a broom to carry his water buckets, before the magic escapes him and the broom, chopped to pieces, multiplies until the workshop floods.\n\nKingdom Hearts turns them into magic's permanent household servants. They are found wherever Yen Sid and Mickey practise their art: sweeping, carrying objects, standing guard. Their stiff silhouettes, wooden arms and jerky gait are taken straight from the film, and their presence always signals that a sorcerer is watching over the place.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Au Château Disney, les balais font partie du personnel et s'affairent dans les couloirs et la salle du trône. Lorsque les Sans-cœur franchissent les défenses du château, ils sont mêlés à l'agitation générale autour de la Pierre Angulaire de lumière, l'artefact qui protège le royaume et que Pat Hibulaire cherche à contourner en passant par la Rivière du Temps.\n\nOn les retrouve également dans la Rivière du Temps elle-même, ce monde en noir et blanc reconstitué à partir des vieux dessins animés, où leur présence renforce l'illusion d'un Château Disney d'autrefois. Ils y vaquent à leurs tâches sans se soucier des combats qui se déroulent autour d'eux.",
          "At Disney Castle the brooms are part of the staff, bustling through the corridors and the throne room. When the Heartless breach the castle's defences, they are caught up in the general commotion around the Cornerstone of Light, the artefact protecting the kingdom that Pete tries to get around by way of Timeless River.\n\nThey are also found in Timeless River itself, the black-and-white world rebuilt from the old cartoons, where their presence reinforces the illusion of a Disney Castle of long ago. There they go about their chores heedless of the fighting going on around them.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Dream Drop Distance leur rend leur décor d'origine. La Symphonie du Sorcier, l'un des Mondes Endormis, rejoue Fantasia : Sora et Riku y traversent l'atelier de Yen Sid, où les balais transportent leurs seaux en file indienne comme dans le film, avant que l'eau ne submerge la salle.\n\nUn balai réapparaît dans Kingdom Hearts III, chargé de l'entretien de la Tour Mystérieuse où Yen Sid reçoit les Gardiens de la Lumière. Ces apparitions sont purement décoratives, mais elles installent une continuité visuelle entre le maître de Mickey, l'iconographie de Fantasia et la magie enseignée aux porteurs de Keyblade tout au long de la série.",
          "Dream Drop Distance returns them to their original setting. Symphony of Sorcery, one of the Sleeping Worlds, replays Fantasia: Sora and Riku cross Yen Sid's workshop, where the brooms carry their buckets in single file just as in the film, before the water swamps the room.\n\nA broom reappears in Kingdom Hearts III, keeping house at the Mysterious Tower where Yen Sid receives the Guardians of Light. These appearances are purely decorative, but they establish a visual continuity between Mickey's master, Fantasia's imagery and the magic taught to Keyblade wielders throughout the series.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Magic Brooms", url: "https://kingdomhearts.fandom.com/wiki/Magic_Broom" }],
  },

  // ─────────────────────── Geppetto, Clayton, Chernabog ───────────────────────
  "geppetto": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Vieux menuisier solitaire de Pinocchio (1940), Geppetto sculpte une marionnette de bois à laquelle la Fée Bleue donne la vie, à condition qu'elle prouve son courage et son honnêteté pour devenir un vrai petit garçon. Parti à sa recherche, il est avalé par la baleine Monstro.\n\nKingdom Hearts conserve cette trame et lui ajoute une compétence inattendue : la fabrication de vaisseaux. Le vieil homme, qui passait son temps à tailler des horloges et des jouets, devient dans la série un artisan capable de dessiner des plans de vaisseaux Gummi. Sa maison, son atelier et son inquiétude perpétuelle pour son fils le suivent d'un monde à l'autre, faisant de lui l'un des rares personnages Disney de la série à changer de domicile au fil des épisodes.",
          "The lonely old woodcarver of Pinocchio (1940), Geppetto carves a wooden puppet that the Blue Fairy brings to life, on condition that it prove itself brave and honest to become a real boy. Setting out to look for him, he is swallowed by the whale Monstro.\n\nKingdom Hearts keeps this framework and adds an unexpected skill: shipbuilding. The old man, who used to spend his days carving clocks and toys, becomes in the series a craftsman able to draw up Gummi ship blueprints. His house, his workshop and his perpetual worry for his son follow him from world to world, making him one of the few Disney characters in the series to change address across the games.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo découvrent Geppetto dans le ventre de Monstro, la baleine qui les a avalés au cours d'un saut entre les mondes. Le vieil homme y a monté un campement de fortune et cherche Pinocchio, égaré plus loin dans les entrailles du cétacé. Riku, présent lui aussi, tente de se servir de la marionnette pour comprendre ce qu'est un cœur.\n\nUne fois Pinocchio retrouvé et le Sans-cœur Parasite Cage vaincu, Geppetto s'installe à la Ville de Traverse, son monde d'origine ayant été englouti par les ténèbres. Cid lui bricole une maison dans le troisième district, et le menuisier remercie Sora en lui remettant des plans de blocs Gummi rares, dont ceux qui permettent d'ouvrir de nouvelles routes entre les mondes.",
          "Sora, Donald and Goofy find Geppetto inside Monstro, the whale that swallowed them during a jump between worlds. The old man has set up a makeshift camp there and is searching for Pinocchio, lost further inside the creature. Riku, also present, tries to use the puppet to understand what a heart is.\n\nOnce Pinocchio is found and the Parasite Cage Heartless defeated, Geppetto settles in Traverse Town, his home world having been swallowed by darkness. Cid puts together a house for him in the Third District, and the woodcarver thanks Sora with blueprints for rare Gummi blocks, including those that open new routes between worlds.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Dans les Mondes Endormis, Sora et Riku retrouvent une version rêvée de l'histoire de Pinocchio, le Repaire des Chenapans. Geppetto y court de nouveau après son fils, entraîné sur l'Île aux Plaisirs par de mauvaises fréquentations, puis jusque dans le ventre de Monstro.\n\nLe vieil homme y répète les gestes du film : il appelle Pinocchio, s'inquiète de son mensonge, et se réjouit sans réserve quand la marionnette revient. Cette réapparition permet à la série de rejouer, sous forme de rêve, la scène que le premier jeu avait déjà adaptée, et souligne le rôle de Geppetto comme figure paternelle inconditionnelle, exactement au moment où Sora s'interroge sur ce qui lie vraiment les cœurs entre eux.",
          "In the Sleeping Worlds, Sora and Riku find a dreamed version of Pinocchio's story, Prankster's Paradise. Geppetto is again chasing after his son, lured to Pleasure Island by bad company, and then into Monstro's belly.\n\nThe old man repeats the film's beats there: he calls out for Pinocchio, frets over his lies, and rejoices without reservation when the puppet returns. This reappearance lets the series replay, in dream form, the scene the first game had already adapted, and underlines Geppetto's role as an unconditional father figure at exactly the moment Sora is questioning what truly binds hearts together.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Geppetto", url: "https://kingdomhearts.fandom.com/wiki/Geppetto" }],
  },

  "clayton": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Clayton est l'antagoniste de Tarzan (1999) : le guide armé et moustachu qui escorte le professeur Porter et sa fille Jane dans la jungle africaine, officiellement pour étudier les gorilles, en réalité pour les capturer et les revendre. Sa cupidité le mène à sa perte, pendu par accident aux lianes qu'il tranchait à la machette.\n\nKingdom Hearts en fait le premier méchant Disney que Sora affronte comme tel. Le jeu conserve son fusil, sa carrure et son mépris pour tout ce qui n'a pas de valeur marchande, mais ajoute une dimension propre à la série : c'est son avidité qui ouvre son cœur aux ténèbres et attire les Sans-cœur dans la Jungle Profonde.",
          "Clayton is the antagonist of Tarzan (1999): the armed, moustachioed guide escorting Professor Porter and his daughter Jane through the African jungle, officially to study the gorillas, in fact to capture and sell them. His greed destroys him, hanged by accident in the vines he was slashing with his machete.\n\nKingdom Hearts makes him the first Disney villain Sora faces as such. The game keeps his rifle, his bulk and his contempt for anything without market value, but adds a dimension of its own: it is his greed that opens his heart to darkness and draws the Heartless into Deep Jungle.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Arrivés dans la Jungle Profonde, Sora, Donald et Dingo sont d'abord pris en charge par Clayton, qui feint de les aider à retrouver leurs amis. Il les accompagne au camp de Jane, se dit prêt à protéger l'expédition, puis s'impatiente devant le refus de Tarzan de révéler où vivent les gorilles.\n\nSurpris en train de tirer sur les singes, il est chassé du camp et s'enfonce dans la jungle. Son cœur cède alors aux ténèbres : Sora le retrouve juché sur un Stealth Sneak, un Sans-cœur caméléon invisible, qu'il monte comme une bête de chasse. Vaincu, Clayton disparaît avec sa monture, dévoré par les ténèbres. Sa défaite libère les gorilles, permet à Tarzan de conduire le trio jusqu'à la cascade et de révéler la Serrure du monde.",
          "On arriving in Deep Jungle, Sora, Donald and Goofy are first taken in hand by Clayton, who pretends to help them find their friends. He escorts them to Jane's camp, claims he will protect the expedition, then grows impatient at Tarzan's refusal to reveal where the gorillas live.\n\nCaught shooting at the apes, he is driven out of the camp and disappears into the jungle. His heart then gives way to darkness: Sora finds him perched on a Stealth Sneak, an invisible chameleon Heartless, which he rides like a hunting beast. Defeated, Clayton vanishes along with his mount, devoured by darkness. His defeat frees the gorillas and lets Tarzan lead the trio to the waterfall and reveal the world's Keyhole.",
        ),
      },
    ],
    trivia: [
      L("La Jungle Profonde n'est jouable que dans le premier Kingdom Hearts et ses versions remastérisées ; Clayton n'a jamais reparu depuis, faute de droits sur le monde de Tarzan.", "Deep Jungle is playable only in the first Kingdom Hearts and its remasters; Clayton has never returned since, owing to rights on the Tarzan world."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Clayton", url: "https://kingdomhearts.fandom.com/wiki/Clayton" }],
  },

  "chernabog": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Chernabog domine le segment final de Fantasia (1940), Une nuit sur le mont Chauve : un démon ailé colossal qui s'extrait d'un sommet la nuit de Walpurgis, appelle à lui les âmes damnées et les jette dans les flammes, jusqu'à ce que les cloches de l'aube et l'Ave Maria le forcent à replier ses ailes.\n\nKingdom Hearts le reprend sans lui donner une seule réplique. Il n'a pas de plan, pas de motivation exprimée, pas de lien avec Ansem ou Maléfique : c'est une force pure, l'incarnation des ténèbres brutes plutôt qu'un méchant au sens habituel. Ce mutisme et son échelle démesurée en font l'un des adversaires les plus mémorables de la série, et sa place à la Fin du Monde n'est pas un hasard.",
          "Chernabog dominates the final segment of Fantasia (1940), Night on Bald Mountain: a colossal winged demon rising from a peak on Walpurgis Night, summoning damned souls to him and flinging them into the flames, until the bells of dawn and the Ave Maria force him to fold his wings.\n\nKingdom Hearts takes him up without giving him a single line. He has no plan, no stated motive, no link to Ansem or Maleficent: he is pure force, the embodiment of raw darkness rather than a villain in the usual sense. That silence and his sheer scale make him one of the series' most memorable opponents, and his placement at the End of the World is no accident.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "À la Fin du Monde, ce territoire composite fait des débris des mondes engloutis par les Sans-cœur, Sora traverse une zone volcanique où Chernabog se dresse hors de la roche. Le combat se déroule d'abord au sol, sous les nuées d'âmes et les gerbes de feu qu'il projette, puis en plein vol lorsque le démon s'élève et que Sora doit l'affronter dans les airs.\n\nIl s'agit du dernier boss avant les couloirs menant à Ansem, et sa présence donne à la zone finale sa tonalité : ce n'est plus l'univers Disney familier, mais son revers. Vaincu, Chernabog s'effondre sans un mot dans son volcan, sans que le jeu explique jamais ce qu'il faisait là ni à quel monde il appartenait.",
          "At the End of the World, that patchwork territory made from the debris of worlds swallowed by the Heartless, Sora crosses a volcanic zone where Chernabog rises out of the rock. The battle takes place first on the ground, beneath the swarms of souls and gouts of fire he hurls, then in mid-air once the demon takes flight and Sora must face him aloft.\n\nHe is the last boss before the corridors leading to Ansem, and his presence sets the tone of the final area: no longer the familiar Disney universe, but its reverse side. Defeated, Chernabog collapses wordlessly into his volcano, the game never explaining what he was doing there or which world he belonged to.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Dream Drop Distance lui rend son décor d'origine. Dans la Symphonie du Sorcier, l'un des Mondes Endormis bâti sur Fantasia, la partition de Une nuit sur le mont Chauve a été corrompue et Chernabog s'y matérialise de nouveau.\n\nC'est Riku, et non Sora, qui l'affronte cette fois, dans un combat aérien au-dessus du mont, avant que la musique ne soit rétablie et que le démon ne disparaisse avec elle. Cette seconde apparition remet le personnage à sa place véritable — une figure musicale et allégorique de Fantasia — après l'avoir vu servir de gardien final aux ruines des mondes dans le premier épisode.",
          "Dream Drop Distance gives him back his original setting. In Symphony of Sorcery, one of the Sleeping Worlds built on Fantasia, the score of Night on Bald Mountain has been corrupted and Chernabog materialises there once more.\n\nIt is Riku, not Sora, who faces him this time, in an aerial battle above the mountain, before the music is restored and the demon vanishes with it. This second appearance puts the character back where he belongs — a musical, allegorical figure out of Fantasia — after having served as the final guardian of the ruined worlds in the first game.",
        ),
      },
    ],
    trivia: [
      L("Chernabog est l'un des rares boss de la série à ne prononcer aucune parole, fidèle à sa version muette de Fantasia.", "Chernabog is one of the few bosses in the series to speak no line at all, faithful to his silent Fantasia incarnation."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Chernabog", url: "https://kingdomhearts.fandom.com/wiki/Chernabog" }],
  },

  // ─────────────────────── Forêt des Rêves Bleus ───────────────────────
  "winnie-the-pooh": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Né des récits d'A. A. Milne puis des films Disney à partir de 1966, Winnie l'Ourson est un ours en peluche obsédé par le miel, doux, lent et volontiers philosophe, qui vit dans la Forêt des Rêves Bleus avec Porcinet, Tigrou, Bourriquet, Coco Lapin, Maître Hibou et Grand Gourou.\n\nKingdom Hearts reprend un parti pris du film d'origine : l'histoire se déroule littéralement dans un livre, et les personnages savent qu'ils habitent des pages. La série en fait un monde à part, sans Sans-cœur ni combat, accessible depuis un ouvrage confié à Merlin. Winnie y devient pour Sora une échappatoire, un lieu où l'on ne se bat pas et où l'amitié se mesure en après-midis passés à ne rien faire.",
          "Born from A. A. Milne's stories and then Disney's films from 1966 on, Winnie the Pooh is a honey-obsessed teddy bear, gentle, slow and cheerfully philosophical, living in the Hundred Acre Wood with Piglet, Tigger, Eeyore, Rabbit, Owl and Kanga.\n\nKingdom Hearts adopts a conceit from the original film: the story literally takes place inside a book, and the characters know they live on pages. The series makes it a world apart, with no Heartless and no combat, reached through a volume kept by Merlin. For Sora, Pooh becomes an escape, a place where no one fights and friendship is measured in afternoons spent doing nothing.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Merlin conserve dans sa maison de la Ville de Traverse un livre dont les pages ont été dispersées lorsque les mondes ont été frappés par les ténèbres. Sora y entre et découvre une forêt vide : seul Winnie subsiste, assis devant sa maison, et ne se souvient plus de ses amis, partis avec les pages arrachées.\n\nÀ mesure que Sora retrouve les pages disséminées à travers les mondes et les rapporte à Merlin, la forêt se repeuple : Tigrou, Porcinet, Coco Lapin, Bourriquet et les autres réapparaissent, chacun dans une scène jouable indépendante. Le monde n'offre aucun combat, seulement des mini-jeux et des conversations, et il se termine sur une promesse d'amitié entre Sora et l'ourson, scellée par un objet accessoire.",
          "In his Traverse Town house, Merlin keeps a book whose pages were scattered when the worlds were struck by darkness. Sora steps inside and finds an empty wood: only Pooh remains, sitting outside his house, no longer remembering his friends, gone along with the torn-out pages.\n\nAs Sora recovers the pages scattered across the worlds and brings them back to Merlin, the wood fills up again: Tigger, Piglet, Rabbit, Eeyore and the others reappear, each in a separate playable scene. The world offers no combat at all, only mini-games and conversations, and it ends on a promise of friendship between Sora and the bear, sealed with an accessory.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Le livre, abîmé pendant l'absence de Sora, a perdu de nouvelles pages : lorsque le garçon y revient, Winnie ne le reconnaît plus du tout. Les retrouvailles sont d'autant plus rudes que Sora vient de traverser des mondes où l'oubli est devenu une menace concrète.\n\nEn restaurant les pages une à une, Sora rend à la forêt ses habitants et à Winnie ses souvenirs. La conclusion du monde tourne autour du départ imaginé de Jean-Christophe et de la peur de Winnie de rester seul ; Sora lui promet qu'il reviendra toujours. Ce fil, entièrement dépourvu d'enjeu épique, fonctionne comme un contrepoint intime aux thèmes de mémoire et de perte que l'Organisation XIII fait peser sur le reste du jeu.",
          "The book, damaged during Sora's absence, has lost further pages: when the boy returns, Pooh does not recognise him at all. The reunion stings all the more because Sora has just crossed worlds where forgetting has become a concrete threat.\n\nBy restoring the pages one by one, Sora gives the wood back its residents and Pooh his memories. The world's conclusion turns on Christopher Robin's imagined departure and Pooh's fear of being left alone; Sora promises he will always come back. This thread, entirely free of epic stakes, works as an intimate counterpoint to the themes of memory and loss that Organization XIII presses on the rest of the game.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Dans Kingdom Hearts III, le livre est retrouvé à la Cité du Crépuscule, mais les Rats de bibliothèque, des Sans-cœur voleurs de pages, y ont fait des ravages. La forêt est fragmentée et Winnie, une fois encore, a tout oublié.\n\nLe monde se traverse sous forme de mini-jeux — récolte de fruits, jeux de mémoire, courses dans les buissons — au terme desquels Sora rend au livre son intégrité. Leur dernière conversation prend un relief particulier : Sora, qui approche de la guerre du Nécropole des Keyblades et pressent qu'il pourrait ne pas revenir, fait ses adieux à l'ourson. Winnie, sans comprendre l'enjeu, lui répond simplement qu'il l'attendra.",
          "In Kingdom Hearts III the book is recovered in Twilight Town, but page-stealing Heartless have wrought havoc in it. The wood is fragmented and Pooh, once again, has forgotten everything.\n\nThe world is played through as a series of mini-games — fruit gathering, memory games, races through the bushes — at the end of which Sora restores the book's integrity. Their last conversation carries particular weight: Sora, approaching the war at the Keyblade Graveyard and sensing he might not come back, says goodbye to the bear. Pooh, without grasping the stakes, simply answers that he will wait for him.",
        ),
      },
    ],
    trivia: [
      L("Jim Cummings double en anglais à la fois Winnie l'Ourson et Tigrou dans la série, comme dans les productions Disney depuis les années 1980.", "Jim Cummings voices both Winnie the Pooh and Tigger in the series in English, as he has in Disney productions since the 1980s."),
      L("La Forêt des Rêves Bleus est le seul monde récurrent de la saga où aucun combat n'a jamais lieu.", "The Hundred Acre Wood is the only recurring world in the saga where no combat ever takes place."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Winnie the Pooh", url: "https://kingdomhearts.fandom.com/wiki/Winnie_the_Pooh" }],
  },

  "tigger": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Tigrou rejoint la bande de Winnie dans les récits de Milne puis dans les films Disney : un tigre à ressort qui rebondit sur sa queue, incapable de tenir en place, persuadé que ce qu'il y a de mieux chez les Tigrou, c'est qu'il est le seul.\n\nKingdom Hearts en fait le moteur d'agitation de la Forêt des Rêves Bleus. Là où Winnie propose la douceur et la lenteur, Tigrou apporte le mouvement : la plupart des mini-jeux du monde reposent sur lui, ses rebonds et ses défis. Il est aussi le premier ami que Sora retrouve dans les pages restaurées, ce qui en fait le compagnon le plus visible de l'ourson dans la série.",
          "Tigger joins Pooh's circle in Milne's stories and then Disney's films: a spring-loaded tiger who bounces on his tail, incapable of sitting still, convinced that the wonderful thing about Tiggers is that he's the only one.\n\nKingdom Hearts makes him the Hundred Acre Wood's engine of commotion. Where Pooh offers softness and slowness, Tigger brings movement: most of the world's mini-games rest on him, his bouncing and his challenges. He is also the first friend Sora finds again in the restored pages, which makes him the bear's most visible companion in the series.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Tigrou réapparaît dans le livre de Merlin dès que Sora rapporte la page correspondante. Il entraîne aussitôt le garçon dans des jeux de sauts : il faut rebondir sur les souches, les champignons et les rochers de la clairière pour marquer des points dans un temps limité.\n\nCes épreuves, sans conséquence sur l'intrigue, servent à débloquer des objets et des améliorations pour Sora. Tigrou participe également aux scènes collectives du monde, notamment la chasse au miel et la recherche de Porcinet. Sa présence installe le ton du lieu : la Forêt des Rêves Bleus est le seul monde où l'on ne dégaine jamais la Keyblade et où le seul obstacle est un chronomètre.",
          "Tigger reappears in Merlin's book as soon as Sora brings back the matching page. He immediately drags the boy into bouncing games: hopping across stumps, mushrooms and rocks in the clearing to score points within a time limit.\n\nThese trials, with no bearing on the plot, unlock items and upgrades for Sora. Tigger also takes part in the world's group scenes, notably the honey hunt and the search for Piglet. His presence sets the tone of the place: the Hundred Acre Wood is the only world where the Keyblade is never drawn and where the sole obstacle is a stopwatch.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Dans Kingdom Hearts II, Tigrou est de nouveau au cœur des mini-jeux du livre restauré. Il fait rebondir Sora à travers la maison de Coco Lapin, s'invite dans le potager qu'il dévaste, et refuse obstinément d'admettre qu'il pourrait exister un endroit où l'on ne rebondit pas.\n\nIl participe aussi à la scène finale du monde, lorsque Winnie s'inquiète du départ de Jean-Christophe : c'est Tigrou qui, à sa manière brouillonne, refuse de s'attarder sur la tristesse et relance tout le monde. Il revient dans les mini-jeux de Kingdom Hearts III, où ses courses rythment encore la visite de la forêt.",
          "In Kingdom Hearts II, Tigger is again at the centre of the restored book's mini-games. He bounces Sora through Rabbit's house, invites himself into the vegetable patch he then wrecks, and stubbornly refuses to admit there could be anywhere one does not bounce.\n\nHe also takes part in the world's closing scene, when Pooh frets about Christopher Robin leaving: it is Tigger who, in his own scattered way, refuses to dwell on sadness and gets everyone moving again. He returns in the mini-games of Kingdom Hearts III, where his races still punctuate the visit to the wood.",
        ),
      },
    ],
    trivia: [
      L("Son nom français, Tigrou, est utilisé dans toutes les versions françaises de la série, comme dans les films Disney.", "His French name, Tigrou, is used throughout the French versions of the series, as in the Disney films."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Tigger", url: "https://kingdomhearts.fandom.com/wiki/Tigger" }],
  },

  // ─────────────────────── Château de la Bête ───────────────────────
  "lumiere": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Dans La Belle et la Bête (1991), Lumière est le maître d'hôtel du château, changé en chandelier par la malédiction de l'enchanteresse. Français, charmeur et théâtral, il accueille Belle par le grand numéro musical du film et pousse son maître à courtiser la jeune femme, au grand dam du majordome Big Ben.\n\nKingdom Hearts reprend le personnage tel quel : une flamme vivante à trois bras, incapable de résister à l'envie de recevoir. La série lui donne un rôle de guide et d'allié à l'intérieur du château, l'un des rares lieux Disney de la saga où les compagnons ne se battent pas mais ouvrent des passages, actionnent des mécanismes et éclairent littéralement le chemin.",
          "In Beauty and the Beast (1991), Lumiere is the castle's maître d', turned into a candelabra by the enchantress's curse. French, charming and theatrical, he welcomes Belle with the film's great musical number and urges his master to court the young woman, much to the majordomo Cogsworth's dismay.\n\nKingdom Hearts takes the character as he is: a living three-armed flame who cannot resist the urge to entertain. The series gives him the role of guide and ally inside the castle, one of the few Disney locations in the saga where companions do not fight but open passages, work mechanisms and quite literally light the way.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Quand Sora arrive au Château de la Bête, les serviteurs ont été enfermés au cachot par Xaldin, le Simili qui manipule la colère du maître des lieux pour lui arracher son cœur. Lumière est libéré avec Big Ben, Mrs Samovar et Zip, et se joint aussitôt à l'expédition.\n\nSa flamme sert à éclairer les couloirs obscurs et à activer les mécanismes du château, notamment les torches de la salle du bal. Il aide Sora à ramener la Bête à la raison lorsque celle-ci chasse Belle et se replie dans ses appartements. Après la défaite de Xaldin, Lumière prend part au dîner qui referme la visite du monde, où il retrouve son rôle premier : recevoir dignement des invités dans un château qui n'en accueillait plus.",
          "When Sora arrives at Beast's Castle, the servants have been locked in the dungeon by Xaldin, the Nobody manipulating the master's anger in order to tear out his heart. Lumiere is freed along with Cogsworth, Mrs. Potts and Chip, and joins the expedition at once.\n\nHis flame is used to light dark corridors and trigger the castle's mechanisms, notably the ballroom torches. He helps Sora bring the Beast to his senses when he drives Belle away and shuts himself in his chambers. After Xaldin's defeat, Lumiere takes part in the dinner that closes the world's visit, where he returns to his first calling: receiving guests properly in a castle that had stopped welcoming any.",
        ),
      },
    ],
    trivia: [
      L("Roxas croise également les serviteurs du château lors de ses missions au Château de la Bête dans 358/2 Days.", "Roxas also encounters the castle's servants during his Beast's Castle missions in 358/2 Days."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lumiere", url: "https://kingdomhearts.fandom.com/wiki/Lumiere" }],
  },

  "cogsworth": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Big Ben — Cogsworth en version originale — est le majordome du château de La Belle et la Bête, transformé en pendule de cheminée. Pointilleux, anxieux et attaché au règlement, il passe le film à tenter de contenir les initiatives de Lumière et à répéter que le maître ne doit surtout pas être contrarié.\n\nKingdom Hearts conserve ce duo comique et lui ajoute une fonction pratique. Dans un château plein de portes verrouillées et de passages dérobés, l'horloge qui connaît chaque pièce et chaque mécanisme devient un guide indispensable. Son nom français, Big Ben, est celui retenu dans les versions françaises des jeux comme du film.",
          "Cogsworth is the majordomo of the castle in Beauty and the Beast, transformed into a mantel clock. Fussy, anxious and devoted to the rules, he spends the film trying to rein in Lumiere's initiatives and repeating that the master must on no account be upset.\n\nKingdom Hearts keeps this comic double act and adds a practical function. In a castle full of locked doors and hidden passages, the clock who knows every room and every mechanism becomes an indispensable guide. His French name, Big Ben, is the one used in the French versions of both the games and the film.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Libéré du cachot par Sora en même temps que les autres serviteurs, Big Ben s'improvise guide du Château de la Bête. Il indique les couloirs praticables, actionne les leviers des grilles et proteste bruyamment chaque fois qu'on lui demande de désobéir au protocole.\n\nIl joue un rôle direct dans la libération de Belle et dans la préparation du bal, et son inquiétude constante devant l'humeur de son maître donne la mesure de la menace que Xaldin fait peser sur le château. Lorsque la malédiction est enfin brisée et que la Bête redevient prince, Big Ben retrouve forme humaine avec le reste du personnel, en même temps que le château retrouve ses couleurs.",
          "Freed from the dungeon by Sora along with the other servants, Cogsworth appoints himself guide to Beast's Castle. He points out passable corridors, works the levers of the gates and protests loudly whenever he is asked to breach protocol.\n\nHe plays a direct part in freeing Belle and in preparing the ball, and his constant worry about his master's temper is the measure of the threat Xaldin poses to the castle. When the curse is finally broken and the Beast becomes a prince again, Cogsworth regains human form along with the rest of the staff, just as the castle regains its colours.",
        ),
      },
    ],
    trivia: [
      L("Son nom français officiel est Big Ben ; les jeux conservent cette adaptation issue du doublage du film de 1991.", "His official French name is Big Ben, an adaptation from the 1991 film's dub that the games retain."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Cogsworth", url: "https://kingdomhearts.fandom.com/wiki/Cogsworth" }],
  },

  "mrs-potts": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Gouvernante du château dans La Belle et la Bête, Mrs Samovar est devenue une théière par l'effet de la malédiction. Mère de Zip, la petite tasse ébréchée, elle est la figure maternelle du film : c'est elle qui console Belle, qui rassure la Bête et qui chante le thème du bal.\n\nKingdom Hearts lui conserve exactement cette place. Elle n'ouvre aucun passage et ne combat pas, mais elle sert de voix de la raison au milieu d'un château où la colère du maître menace tout le monde. Son rôle est d'autant plus utile dans la série que la Bête, dans Kingdom Hearts II, se laisse manipuler par un Simili qui joue précisément sur cette colère.",
          "The castle's housekeeper in Beauty and the Beast, Mrs. Potts has been turned into a teapot by the curse. Mother of Chip, the little chipped cup, she is the film's maternal figure: she consoles Belle, reassures the Beast and sings the ballroom theme.\n\nKingdom Hearts keeps her in exactly that place. She opens no passages and does not fight, but she is the voice of reason in a castle where the master's rage threatens everyone. That role matters all the more in the series because the Beast, in Kingdom Hearts II, lets himself be manipulated by a Nobody who plays on precisely that rage.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Enfermée au cachot avec Lumière, Big Ben et son fils Zip par les manœuvres de Xaldin, Mrs Samovar est délivrée par Sora, Donald et Dingo. Elle veille ensuite sur Belle, à qui elle conseille de ne pas répondre à la colère de la Bête par la fuite.\n\nQuand le maître chasse la jeune femme du château sous l'influence de Xaldin, c'est en partie grâce à elle que le groupe garde son sang-froid et cherche la véritable cause du revirement. Elle est présente lors de la scène du bal et du dîner qui closent la visite du monde. Zip, sa tasse de fils, apparaît à ses côtés dans les mêmes scènes, comme dans le film.",
          "Locked in the dungeon with Lumiere, Cogsworth and her son Chip by Xaldin's scheming, Mrs. Potts is freed by Sora, Donald and Goofy. She then looks after Belle, advising her not to answer the Beast's anger by fleeing.\n\nWhen the master drives the young woman from the castle under Xaldin's influence, it is partly thanks to her that the group keeps its composure and looks for the real cause of the change. She is present at the ball and the dinner that close the world's visit. Chip, her teacup son, appears at her side in the same scenes, as in the film.",
        ),
      },
    ],
    trivia: [
      L("Son nom français officiel est Mrs Samovar, et son fils, la petite tasse, s'appelle Zip en français.", "Her official French name is Mrs Samovar, and her son, the little cup, is called Zip in French."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mrs. Potts", url: "https://kingdomhearts.fandom.com/wiki/Mrs._Potts" }],
  },

  // ─────────────────────── Agrabah ───────────────────────
  "abu": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Abu est le petit singe voleur d'Aladdin (1992), complice du jeune homme dans ses larcins sur les marchés d'Agrabah. Coiffé d'un fez et vêtu d'un gilet, il ne parle pas mais grommelle sans discontinuer, et son incapacité à résister aux objets brillants déclenche la catastrophe de la Caverne aux Merveilles.\n\nKingdom Hearts s'appuie entièrement sur ce défaut. Dans les deux visites d'Agrabah, c'est un geste de cupidité d'Abu qui fait basculer une scène : le jeu se sert du singe comme d'un déclencheur comique de crise, sans lui donner d'arc narratif propre. Il accompagne Aladdin partout, mais ne combat jamais aux côtés de Sora.",
          "Abu is the little thieving monkey of Aladdin (1992), the young man's accomplice in his pickpocketing on Agrabah's markets. Wearing a fez and a waistcoat, he does not speak but grumbles constantly, and his inability to resist shiny objects triggers the disaster in the Cave of Wonders.\n\nKingdom Hearts leans entirely on that flaw. In both visits to Agrabah, a greedy grab by Abu tips a scene over: the game uses the monkey as a comic trigger for crisis, without giving him an arc of his own. He follows Aladdin everywhere, but never fights alongside Sora.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora rencontre Abu en même temps qu'Aladdin, dans les ruelles d'Agrabah envahies par les Sans-cœur. Le singe accompagne le groupe jusqu'à la Caverne aux Merveilles, où Jafar les envoie chercher la lampe du Génie.\n\nComme dans le film, Abu ne résiste pas à une gemme posée sur un socle et s'en empare, déclenchant l'effondrement de la caverne. Le groupe doit fuir tandis que les salles s'écroulent, et la lampe échappe ensuite à Aladdin. Cet épisode, joué pour le comique, sert surtout à reproduire fidèlement la structure du film à l'intérieur d'un monde par ailleurs remanié pour accueillir les Sans-cœur et la Serrure.",
          "Sora meets Abu at the same time as Aladdin, in Agrabah's alleys overrun by Heartless. The monkey travels with the group to the Cave of Wonders, where Jafar sends them to fetch the Genie's lamp.\n\nAs in the film, Abu cannot resist a gem set on a pedestal and grabs it, bringing the cave down. The group must flee as the halls collapse, and the lamp then slips out of Aladdin's hands. Played for comedy, this episode mainly reproduces the film's structure faithfully inside a world otherwise reworked to accommodate the Heartless and the Keyhole.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, Agrabah est menacée par le retour de Jafar, enfermé dans une lampe noire depuis sa défaite. Abu, toujours aussi peu regardant, s'empare de cette lampe au cours d'une poursuite dans les Ruines du désert, ce qui manque de libérer le sorcier avant l'heure.\n\nSora, Aladdin et le Tapis doivent la lui reprendre, puis affronter Jafar lorsque Pat Hibulaire parvient malgré tout à le réveiller. Le singe assiste au combat sans y participer et retrouve Aladdin une fois la paix revenue. Comme dans le premier jeu, sa présence sert à rappeler la texture du film d'origine plus qu'à faire progresser l'intrigue de la série.",
          "A year later Agrabah is threatened by the return of Jafar, sealed inside a black lamp since his defeat. Abu, as undiscerning as ever, snatches that lamp during a chase through the desert Ruins, nearly freeing the sorcerer ahead of time.\n\nSora, Aladdin and Carpet must take it back from him, then face Jafar when Pete manages to wake him anyway. The monkey watches the battle without taking part and rejoins Aladdin once peace returns. As in the first game, his presence serves to recall the texture of the original film rather than to advance the series' plot.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Abu", url: "https://kingdomhearts.fandom.com/wiki/Abu" }],
  },

  "iago": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Perroquet rouge au bec acide, Iago est le complice de Jafar dans Aladdin : il imite les voix, vole les objets et supporte de moins en moins les manières de son maître, tout en restant à son service par intérêt.\n\nKingdom Hearts lui offre ce que le film principal ne lui donnait pas : un véritable arc de rédemption étalé sur plusieurs jeux. Fidèle sbire dans le premier épisode, il devient dans Kingdom Hearts II un personnage tiraillé, méprisé par ceux qu'il a trahis et incapable de retourner auprès de son ancien maître. La série en fait ainsi l'un des rares seconds rôles Disney à changer réellement de camp.",
          "A red parrot with a scathing beak, Iago is Jafar's accomplice in Aladdin: he mimics voices, steals objects and grows ever less tolerant of his master's manners, while staying in his service out of self-interest.\n\nKingdom Hearts gives him what the first film did not: a genuine redemption arc spread over several games. A loyal minion in the first instalment, in Kingdom Hearts II he becomes a torn character, despised by those he betrayed and unable to return to his old master. The series thus makes him one of the few Disney supporting characters to genuinely change sides.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "À Agrabah, Iago seconde Jafar dans sa recherche de la lampe du Génie et de la Princesse de Cœur que le sorcier doit livrer à Maléfique. C'est lui qui subtilise la lampe à Aladdin et la remet à son maître, permettant à Jafar de devenir génie.\n\nQuand Sora vainc le sorcier au fond de la Caverne aux Merveilles, Jafar est aspiré dans sa propre lampe, une lampe noire, et Iago se retrouve enfermé avec lui. Le perroquet réapparaît dans les répliques du monde d'Agrabah reconstituées par la mémoire dans Chain of Memories, où il rejoue le même rôle de complice, cette fois dans un décor issu des souvenirs de Sora.",
          "In Agrabah, Iago assists Jafar in his search for the Genie's lamp and for the Princess of Heart the sorcerer must deliver to Maleficent. He is the one who filches the lamp from Aladdin and hands it to his master, allowing Jafar to become a genie.\n\nWhen Sora defeats the sorcerer deep in the Cave of Wonders, Jafar is sucked into his own lamp, a black one, and Iago is trapped inside with him. The parrot returns in the memory-built replica of Agrabah in Chain of Memories, replaying the same accomplice role, this time in a setting drawn from Sora's memories.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Échappé de la lampe noire, Iago se cache dans Agrabah et supplie Sora et Aladdin de le laisser se racheter. Aladdin accepte à contrecœur, Jasmine se méfie, et le perroquet passe le monde à tenter de prouver sa bonne foi malgré son passé.\n\nQuand Pat Hibulaire réveille Jafar, Iago vacille un instant devant son ancien maître, avant de choisir définitivement son camp : lors du combat final au-dessus d'Agrabah, il se jette dans la trajectoire d'une attaque destinée à Aladdin et à ses amis, et s'effondre gravement blessé. Il survit et est enfin accepté par le groupe, ce qui referme un des rares arcs de rédemption complets d'un personnage secondaire Disney dans la saga.",
          "Escaped from the black lamp, Iago hides in Agrabah and begs Sora and Aladdin to let him make amends. Aladdin reluctantly agrees, Jasmine remains wary, and the parrot spends the world trying to prove his good faith in spite of his past.\n\nWhen Pete revives Jafar, Iago wavers for a moment before his old master, then settles his allegiance for good: during the final battle above Agrabah he throws himself into the path of an attack aimed at Aladdin and his friends and drops, badly hurt. He survives and is finally accepted by the group, closing one of the few complete redemption arcs of a Disney supporting character in the saga.",
        ),
      },
    ],
    trivia: [
      L("Gilbert Gottfried reprend son rôle du film pour la version anglaise de la série.", "Gilbert Gottfried reprises his role from the film for the series' English version."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Iago", url: "https://kingdomhearts.fandom.com/wiki/Iago" }],
  },

  "magic-carpet": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Tapis d'Aladdin est un personnage sans visage ni voix : c'est par ses plis, ses gestes et sa posture qu'il exprime la timidité, l'impatience ou l'enthousiasme. Découvert dans la Caverne aux Merveilles, il devient la monture et l'ami d'Aladdin, et le véhicule du grand numéro romantique du film.\n\nKingdom Hearts en tire un usage très concret : le Tapis est l'un des rares moyens de déplacement en vol de la série, en dehors du vaisseau Gummi. Il transporte le groupe au-dessus du désert, sert de plate-forme mobile pendant certains combats, et permet de mettre en scène des affrontements verticaux impossibles au sol.",
          "Aladdin's Carpet is a character with no face and no voice: it expresses shyness, impatience or enthusiasm through its folds, gestures and posture. Found in the Cave of Wonders, it becomes Aladdin's mount and friend, and the vehicle for the film's great romantic number.\n\nKingdom Hearts puts it to very concrete use: Carpet is one of the series' rare means of flight outside the Gummi ship. It carries the party over the desert, acts as a moving platform during certain battles, and makes possible vertical confrontations that would be impossible on the ground.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le Tapis apparaît dans la Caverne aux Merveilles, où il se joint au groupe d'Aladdin. Quand Jafar enlève Jasmine et se réfugie au fond de la caverne, c'est lui qui vient chercher Sora pour l'y conduire.\n\nLors du combat contre Jafar transformé en génie, le Tapis sert de monture volante : Sora l'enfourche pour esquiver les attaques du sorcier et atteindre la lampe noire qui contient sa vie. Ce boss aérien fait partie des affrontements les plus mémorables du premier jeu, et il repose entièrement sur la mobilité offerte par le Tapis, seul moyen de rester hors de portée du géant.",
          "Carpet appears in the Cave of Wonders, where it joins Aladdin's group. When Jafar abducts Jasmine and retreats deep into the cave, it is Carpet that comes to fetch Sora and carry him there.\n\nDuring the battle against Jafar transformed into a genie, Carpet serves as a flying mount: Sora rides it to dodge the sorcerer's attacks and reach the black lamp holding his life. That aerial boss is among the most memorable fights in the first game, and it rests entirely on the mobility Carpet provides, the only way to stay out of the giant's reach.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Dans Kingdom Hearts II, le Tapis reprend son rôle de véhicule. Il emmène Sora, Donald, Dingo et Aladdin au-dessus des dunes jusqu'aux Ruines du désert, séquence entièrement jouée en vol, où il faut éviter les tempêtes de sable et les Sans-cœur volants.\n\nIl intervient de nouveau lors de l'affrontement final contre Jafar au-dessus d'Agrabah, où le groupe le chevauche pour poursuivre le sorcier dans les airs. Entre deux batailles, le Tapis sert aussi de raccourci entre les quartiers du monde. Il ne prononce jamais un mot, mais son langage corporel — impatience, encouragement, découragement — est intégralement conservé depuis le film.",
          "In Kingdom Hearts II, Carpet resumes its role as a vehicle. It takes Sora, Donald, Goofy and Aladdin over the dunes to the desert Ruins, a sequence played entirely in flight, dodging sandstorms and flying Heartless.\n\nIt returns for the final confrontation with Jafar above Agrabah, where the party rides it to chase the sorcerer through the air. Between battles, Carpet also serves as a shortcut between the world's districts. It never says a word, but its body language — impatience, encouragement, dejection — is carried over wholesale from the film.",
        ),
      },
    ],
    trivia: [
      L("Son nom français dans les jeux comme dans le film est simplement « Tapis ».", "Its French name in both the games and the film is simply “Tapis”."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Carpet", url: "https://kingdomhearts.fandom.com/wiki/Carpet" }],
  },

  "sultan": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Souverain d'Agrabah et père de Jasmine, le Sultan est dans le film d'Aladdin un petit homme rond et jovial, plus occupé de ses jouets mécaniques que des affaires de l'État, ce qui laisse à son grand vizir Jafar une latitude considérable. Sa principale préoccupation est de marier sa fille avant l'échéance fixée par la loi du royaume.\n\nKingdom Hearts le maintient à l'arrière-plan. Absent des scènes du premier jeu, où l'enlèvement de Jasmine par Jafar se joue sans lui, il n'apparaît qu'une fois la paix revenue, en souverain qui découvre après coup ce que sa fille et Aladdin ont traversé. Son rôle est celui d'un point d'aboutissement pour l'intrigue amoureuse plutôt que d'un acteur des événements.",
          "Agrabah's ruler and Jasmine's father, the Sultan is in the Aladdin film a small, round, jovial man more concerned with his mechanical toys than with affairs of state, which leaves his grand vizier Jafar considerable latitude. His chief worry is marrying off his daughter before the deadline set by the kingdom's law.\n\nKingdom Hearts keeps him in the background. Absent from the first game's scenes, where Jafar's abduction of Jasmine plays out without him, he appears only once peace has returned, as a ruler discovering after the fact what his daughter and Aladdin went through. His role is an endpoint for the romantic plot rather than an actor in events.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Le Sultan n'apparaît en personne que dans Kingdom Hearts II, après la défaite définitive de Jafar. Il reçoit Sora, Donald et Dingo au palais et les remercie d'avoir sauvé Agrabah et sa fille.\n\nLa scène sert surtout à trancher une question laissée en suspens : Aladdin, devenu le compagnon de Jasmine, hésite entre la vie de palais qui l'attend et sa liberté de « rat des rues ». Le Sultan lève l'obstacle en approuvant leur union, ce qui clôt l'arc d'Agrabah pour toute la série. C'est aussi l'une des rares scènes du monde où les Sans-cœur n'interviennent pas, le jeu prenant le temps de refermer une histoire Disney selon ses propres termes.",
          "The Sultan appears in person only in Kingdom Hearts II, after Jafar's final defeat. He receives Sora, Donald and Goofy at the palace and thanks them for saving Agrabah and his daughter.\n\nThe scene mainly settles a question left hanging: Aladdin, now Jasmine's partner, is torn between the palace life awaiting him and his freedom as a “street rat”. The Sultan removes the obstacle by approving their union, closing Agrabah's arc for the whole series. It is also one of the few scenes in the world where the Heartless play no part, the game taking the time to end a Disney story on its own terms.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sultan", url: "https://kingdomhearts.fandom.com/wiki/Sultan" }],
  },

  // ─────────────────────── Atlantica ───────────────────────
  "sebastian": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Crabe rouge et compositeur de la cour dans La Petite Sirène (1989), Sébastien est chargé par le roi Triton de surveiller Ariel. Écartelé entre son devoir de rapporteur et son affection pour la princesse, il finit par l'aider, et c'est lui qui orchestre le grand numéro musical destiné à provoquer un baiser entre Ariel et Éric.\n\nKingdom Hearts conserve cette double fonction de chaperon et de musicien, mais l'accentue selon les épisodes : d'abord guide sous-marin de Sora, il devient dans Kingdom Hearts II le maître d'œuvre d'un monde entièrement construit autour de ses spectacles. Peu de personnages Disney de la série voient ainsi leur rôle changer de nature d'un jeu à l'autre.",
          "The red crab and court composer of The Little Mermaid (1989), Sebastian is charged by King Triton with keeping an eye on Ariel. Torn between his duty to report and his affection for the princess, he ends up helping her, and it is he who stages the great musical number meant to prompt a kiss between Ariel and Eric.\n\nKingdom Hearts keeps this double function of chaperone and musician but shifts the emphasis between games: first Sora's underwater guide, he becomes in Kingdom Hearts II the impresario of a world built entirely around his shows. Few Disney characters in the series see their role change in nature so completely from one game to the next.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo arrivent à Atlantica transformés — Sora en garçon à queue de poisson, Donald en calmar, Dingo en tortue — et rencontrent Ariel et Sébastien. Le crabe se méfie d'abord de ces inconnus, puis les guide dans le palais et les récifs.\n\nC'est lui qui les mène à la grotte secrète d'Ariel et qui les avertit du danger que représente Ursula. Il assiste à la confrontation avec le roi Triton, qui reproche à Sora d'apporter la ruine avec sa Keyblade, puis à la traque de la sorcière des mers. Sébastien réapparaît dans les répliques d'Atlantica reconstruites par la mémoire dans Chain of Memories, où il rejoue son rôle de chaperon dépassé par les événements.",
          "Sora, Donald and Goofy arrive in Atlantica transformed — Sora with a fish tail, Donald as a squid, Goofy as a turtle — and meet Ariel and Sebastian. The crab is wary of these strangers at first, then guides them through the palace and the reefs.\n\nHe leads them to Ariel's secret grotto and warns them of the danger Ursula poses. He witnesses the confrontation with King Triton, who accuses Sora of bringing ruin with his Keyblade, and then the hunt for the sea witch. Sebastian returns in the memory-built replicas of Atlantica in Chain of Memories, replaying his role as a chaperone overwhelmed by events.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Kingdom Hearts II fait d'Atlantica un monde entièrement musical, et Sébastien en est le chef d'orchestre. La visite se déroule sous forme de numéros chantés rythmés par des séquences de rythme, sans combat véritable, et le crabe dirige chaque répétition.\n\nSon projet est double : monter un spectacle digne du roi Triton et, en coulisses, pousser Ariel à avouer ses sentiments pour Éric. Il compose pour cela une chanson entière destinée à révéler le cœur de la princesse. Le monde se conclut sur le mariage d'Ariel et d'Éric, célébré par un dernier numéro que Sébastien dirige devant toute la cour, satisfait pour une fois d'avoir désobéi à son roi dans le bon sens.",
          "Kingdom Hearts II turns Atlantica into an entirely musical world, and Sebastian is its conductor. The visit unfolds as sung numbers punctuated by rhythm sequences, with no real combat, and the crab directs every rehearsal.\n\nHis aim is twofold: to mount a show worthy of King Triton and, behind the scenes, to push Ariel into admitting her feelings for Eric. He composes a whole song for the purpose, meant to reveal the princess's heart. The world closes on Ariel and Eric's wedding, celebrated with a final number Sebastian conducts before the entire court, satisfied for once at having disobeyed his king in the right direction.",
        ),
      },
    ],
    trivia: [
      L("Kevin Michael Richardson double Sébastien dans la série en anglais, à la place de Samuel E. Wright, sa voix dans le film.", "Kevin Michael Richardson voices Sebastian in the series in English, in place of Samuel E. Wright, his voice in the film."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sebastian", url: "https://kingdomhearts.fandom.com/wiki/Sebastian" }],
  },

  "flounder": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Polochon est le meilleur ami d'Ariel dans La Petite Sirène : un petit poisson jaune et bleu, craintif jusqu'à la panique, qui suit malgré tout la princesse dans toutes ses explorations d'épaves et de récifs interdits.\n\nKingdom Hearts conserve ce contraste entre sa peur et sa loyauté. Il n'a aucune capacité de combat et se retrouve régulièrement en position de victime ou d'otage, ce qui suffit à motiver les interventions d'Ariel et de Sora. La série l'utilise ainsi comme jauge du danger : quand Polochon panique, c'est que quelque chose approche, et c'est souvent la première alerte que reçoit le groupe dans Atlantica.",
          "Flounder is Ariel's best friend in The Little Mermaid: a small yellow and blue fish, timid to the point of panic, who nonetheless follows the princess on all her explorations of wrecks and forbidden reefs.\n\nKingdom Hearts keeps the contrast between his fear and his loyalty. He has no combat ability and regularly ends up a victim or a hostage, which is enough to motivate Ariel and Sora into action. The series thus uses him as a danger gauge: when Flounder panics, something is coming, and it is often the group's first warning in Atlantica.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Polochon accompagne Ariel lorsqu'elle rencontre Sora, Donald et Dingo, tout juste transformés en créatures marines. Il assiste aux premières attaques de Sans-cœur dans les récifs et sert de repère dans les eaux du monde, en indiquant les passages praticables.\n\nQuand Ursula lance sa manœuvre pour s'emparer du trident de Triton, Polochon est pris dans la tourmente et se retrouve à la merci de la sorcière. Sa capture pousse Ariel à agir contre l'avis de son père, ce qui précipite le vol du trident. Il apparaît de nouveau dans les versions d'Atlantica reconstituées par la mémoire dans Chain of Memories, où il sert cette fois explicitement d'otage à Ursula.",
          "Flounder is with Ariel when she meets Sora, Donald and Goofy, freshly transformed into sea creatures. He witnesses the first Heartless attacks among the reefs and serves as a landmark in the world's waters, pointing out passable routes.\n\nWhen Ursula makes her move for Triton's trident, Flounder is caught up in the turmoil and left at the witch's mercy. His capture pushes Ariel to act against her father's wishes, which precipitates the theft of the trident. He appears again in the memory-built versions of Atlantica in Chain of Memories, where he explicitly serves as Ursula's hostage.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Dans l'Atlantica musical de Kingdom Hearts II, Polochon devient l'un des participants du spectacle monté par Sébastien. Il chante, danse et se laisse embarquer dans les répétitions malgré son trac permanent.\n\nIl reste aussi le confident d'Ariel : c'est à lui qu'elle raconte le naufrage d'Éric et son désir de vivre à la surface. Sans jamais peser sur les décisions, Polochon assiste au pacte avec Ursula, à la transformation de la princesse et au combat final contre la sorcière géante. Il est présent au mariage qui referme le monde, dans le grand numéro collectif dirigé par le crabe compositeur.",
          "In Kingdom Hearts II's musical Atlantica, Flounder becomes one of the performers in the show Sebastian mounts. He sings, dances and lets himself be swept into the rehearsals despite his permanent stage fright.\n\nHe also remains Ariel's confidant: it is to him that she recounts Eric's shipwreck and her longing to live above the surface. Without ever influencing decisions, Flounder witnesses the bargain with Ursula, the princess's transformation and the final battle against the giant witch. He is present at the wedding that closes the world, in the great ensemble number conducted by the composer crab.",
        ),
      },
    ],
    trivia: [
      L("Son nom français est Polochon ; l'anglais « Flounder » désigne un poisson plat, alors que le personnage n'en est pas un.", "His French name is Polochon; the English “Flounder” names a flatfish, although the character is not one."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Flounder", url: "https://kingdomhearts.fandom.com/wiki/Flounder" }],
  },

  "king-triton": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Roi des mers dans La Petite Sirène, Triton règne sur Atlantica avec un trident capable de déchaîner la foudre. Père de sept filles, il interdit tout contact avec le monde des humains, qu'il tient pour barbares, et détruit la collection d'objets de surface d'Ariel dans un accès de colère qu'il regrettera.\n\nKingdom Hearts lui ajoute une dimension propre à la saga : Triton connaît la Keyblade et sait ce qu'elle annonce. Sa méfiance envers Sora n'est donc pas de l'arbitraire paternel mais un savoir ancien sur l'arme qui « apporte la ruine », ce qui fait de lui l'un des rares personnages Disney à posséder une connaissance directe de la mythologie originale de la série.",
          "King of the seas in The Little Mermaid, Triton rules Atlantica with a trident able to unleash lightning. Father of seven daughters, he forbids all contact with the human world, which he considers barbaric, and destroys Ariel's collection of surface objects in a fit of anger he will come to regret.\n\nKingdom Hearts adds a dimension of its own: Triton knows the Keyblade and knows what it heralds. His distrust of Sora is therefore not paternal arbitrariness but old knowledge of the weapon that “brings ruin”, making him one of the few Disney characters with direct knowledge of the series' original mythology.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Triton reconnaît immédiatement l'arme de Sora et lui ordonne de quitter Atlantica : à ses yeux, la Keyblade attire les catastrophes et menace l'équilibre de son royaume. Il reproche à Ariel de fréquenter ces étrangers et détruit la Serrure de son monde, croyant ainsi le protéger.\n\nSa rigidité laisse le champ libre à Ursula, qui manipule Ariel pour lui dérober le trident. Dépouillé de son pouvoir, Triton assiste impuissant à la transformation de la sorcière en géante des mers, jusqu'à ce que Sora et Ariel la vainquent. Le roi reconnaît alors son erreur et accepte que la Keyblade ait aussi le pouvoir de refermer ce qu'il a lui-même laissé ouvrir.",
          "Triton recognises Sora's weapon at once and orders him out of Atlantica: in his eyes the Keyblade attracts disaster and threatens his realm's balance. He rebukes Ariel for keeping company with these strangers and destroys his world's Keyhole, believing he is protecting it.\n\nHis rigidity leaves the field open to Ursula, who manipulates Ariel into stealing the trident for her. Stripped of his power, Triton watches helplessly as the witch swells into a sea giant, until Sora and Ariel defeat her. The king then admits his mistake and accepts that the Keyblade also has the power to close what he himself let be opened.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, la menace des Sans-cœur a reculé et le conflit d'Atlantica redevient familial. Triton s'oppose à l'attachement d'Ariel pour le prince Éric, qu'il découvre à travers les chansons de sa fille et les manœuvres de Sébastien, chargé de la surveiller.\n\nLa dispute reprend celle du film : le roi détruit un objet de surface auquel Ariel tient, et la princesse se tourne vers Ursula. Après la défaite de la sorcière, Triton finit par céder. Comprenant que sa fille aime réellement Éric, il use de son trident pour la transformer en humaine et lui permettre de vivre à la surface, geste par lequel s'achève l'arc d'Atlantica dans la série.",
          "A year later the Heartless threat has receded and Atlantica's conflict becomes a family matter again. Triton opposes Ariel's attachment to Prince Eric, which he discovers through his daughter's songs and the schemes of Sebastian, tasked with watching her.\n\nThe quarrel replays the film's: the king destroys a surface object Ariel treasures, and the princess turns to Ursula. After the witch's defeat, Triton finally relents. Understanding that his daughter truly loves Eric, he uses his trident to turn her human so she can live above the waves, the gesture with which Atlantica's arc in the series comes to an end.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — King Triton", url: "https://kingdomhearts.fandom.com/wiki/King_Triton" }],
  },

  "prince-eric": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Prince humain de La Petite Sirène, Éric règne sur un royaume côtier et préfère la mer à sa cour. Sauvé de la noyade par Ariel après le naufrage de son navire, il ne garde d'elle que le souvenir d'une voix, ce dont Ursula se sert pour le détourner en prenant cette voix pour elle.\n\nKingdom Hearts ne l'introduit qu'au moment où le monde d'Atlantica cesse d'être un terrain de chasse aux Sans-cœur pour devenir une comédie musicale. Éric y est moins un personnage actif qu'un enjeu : c'est autour de lui que se cristallisent le désir d'Ariel de quitter la mer, l'opposition de Triton et le marché passé avec la sorcière.",
          "The human prince of The Little Mermaid, Eric rules a coastal kingdom and prefers the sea to his court. Saved from drowning by Ariel after his ship is wrecked, he retains nothing of her but the memory of a voice, which Ursula exploits by taking that voice for herself.\n\nKingdom Hearts introduces him only once Atlantica stops being Heartless hunting ground and becomes a musical. Eric is less an active character there than a stake: it is around him that Ariel's wish to leave the sea, Triton's opposition and the bargain struck with the witch all crystallise.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Éric apparaît lors du naufrage rejoué au début de la visite d'Atlantica : Ariel l'arrache aux flots et le dépose inconscient sur le rivage, sans qu'il puisse voir son visage. Cette scène déclenche tout le reste, puisqu'elle donne à Sébastien le sujet du spectacle qu'il veut monter et à Ursula le levier de son marché.\n\nQuand la sorcière prend l'apparence d'une humaine et la voix d'Ariel pour épouser le prince, Éric est ensorcelé jusqu'à ce que la supercherie soit éventée. Il participe alors à la défaite d'Ursula, devenue géante, aux côtés d'Ariel et de Sora. Le monde se referme sur leur mariage, célébré par le dernier numéro musical dirigé par Sébastien.",
          "Eric appears in the shipwreck replayed at the start of the Atlantica visit: Ariel pulls him from the waves and leaves him unconscious on the shore without his seeing her face. That scene sets everything else in motion, giving Sebastian the subject of the show he wants to stage and Ursula the leverage for her bargain.\n\nWhen the witch takes human form and Ariel's voice to marry the prince, Eric is enchanted until the deception is exposed. He then takes part in the defeat of the now giant Ursula alongside Ariel and Sora. The world closes on their wedding, celebrated with the final musical number Sebastian conducts.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Prince Eric", url: "https://kingdomhearts.fandom.com/wiki/Prince_Eric" }],
  },

  // ─────────────────────── Pays des Merveilles ───────────────────────
  "white-rabbit": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Lapin Blanc ouvre Alice au pays des merveilles (1951) : c'est en le suivant, montre à la main et perpétuellement en retard, qu'Alice tombe dans le terrier et bascule dans un monde absurde. Héraut de la Reine de Cœur, il annonce les procès et les décrets d'un royaume où la logique n'a plus cours.\n\nKingdom Hearts lui conserve exactement cette fonction de seuil. Il est le premier être que Sora aperçoit au Pays des Merveilles, et c'est en courant derrière lui que le trio découvre le Terrier du Lapin, la potion qui rapetisse et le Bosquet Enchanté. Il ne se bat jamais et ne prend jamais parti : il annonce, court, et disparaît par la porte suivante.",
          "The White Rabbit opens Alice in Wonderland (1951): it is by following him, watch in hand and perpetually late, that Alice falls down the hole and tips into an absurd world. Herald of the Queen of Hearts, he announces the trials and decrees of a kingdom where logic no longer applies.\n\nKingdom Hearts keeps him in exactly that threshold role. He is the first being Sora glimpses in Wonderland, and it is by running after him that the trio discovers the Rabbit Hole, the shrinking potion and the Lotus Forest. He never fights and never takes sides: he announces, runs, and vanishes through the next door.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo tombent au Pays des Merveilles à la poursuite du Lapin Blanc, qu'ils voient passer en courant et disparaître par une porte minuscule. Il faut boire la potion indiquée par la Poignée de porte pour le suivre.\n\nOn le retrouve à la Cour de la Reine, où il joue les hérauts au procès d'Alice, accusée d'avoir volé le cœur de la souveraine. Il proclame la sentence sans jamais discuter l'absurdité de l'accusation, puis assiste à la disparition d'Alice, enlevée par les Sans-cœur pour son statut de Princesse de Cœur. Le Lapin réapparaît dans les répliques du Pays des Merveilles bâties par la mémoire dans Chain of Memories et dans les données de Re:coded, toujours dans le même rôle.",
          "Sora, Donald and Goofy tumble into Wonderland chasing the White Rabbit, whom they see dash past and disappear through a tiny door. They must drink the potion the Doorknob points out in order to follow him.\n\nHe turns up again at the Queen's Court, playing herald at Alice's trial, where she is accused of stealing the sovereign's heart. He proclaims the sentence without ever questioning the charge's absurdity, then witnesses Alice's disappearance, taken by the Heartless for her status as a Princess of Heart. The Rabbit reappears in the memory-built replicas of Wonderland in Chain of Memories and in the data of Re:coded, always in the same role.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — White Rabbit", url: "https://kingdomhearts.fandom.com/wiki/White_Rabbit" }],
  },

  "doorknob": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Poignée de porte est une invention du film Disney de 1951, absente du roman de Lewis Carroll : une poignée parlante et somnolente au bas du terrier, qui explique à Alice qu'elle est trop grande pour passer et lui indique la petite bouteille marquée « Bois-moi ».\n\nKingdom Hearts lui confie un rôle bien plus important qu'un simple gag. Chaque monde de la série possède une Serrure, le point par lequel les ténèbres peuvent atteindre son cœur, et celle du Pays des Merveilles se trouve dissimulée dans la bouche de la Poignée. Le personnage devient donc, malgré lui, le gardien du monde entier, incapable de rester éveillé assez longtemps pour s'en soucier.",
          "The Doorknob is an invention of the 1951 Disney film, absent from Lewis Carroll's novel: a talking, drowsy knob at the bottom of the hole, who explains to Alice that she is too big to pass through and points out the little bottle marked “Drink me”.\n\nKingdom Hearts gives it a role far weightier than a gag. Every world in the series has a Keyhole, the point through which darkness can reach its heart, and Wonderland's is hidden in the Doorknob's mouth. The character thus becomes, in spite of itself, the guardian of an entire world, unable to stay awake long enough to care.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Au bas du Terrier du Lapin, Sora réveille la Poignée, qui râle d'être dérangée et lui explique comment rapetisser pour franchir la porte. C'est le premier obstacle du monde, et il se résout par une conversation plutôt que par un combat.\n\nAprès le procès d'Alice, l'enlèvement de la jeune fille et la défaite du Trickmaster, ce Sans-cœur jongleur qui règne sur le Bosquet Enchanté, Sora revient devant la Poignée. Celle-ci bâille longuement, et la Serrure du Pays des Merveilles apparaît au fond de sa bouche : Sora la scelle avec sa Keyblade, protégeant le monde des ténèbres. La Poignée retombe aussitôt endormie, sans réaliser ce qui vient de se jouer.",
          "At the bottom of the Rabbit Hole, Sora wakes the Doorknob, which grumbles at being disturbed and explains how to shrink in order to pass through. It is the world's first obstacle, and it is solved by conversation rather than combat.\n\nAfter Alice's trial, her abduction and the defeat of the Trickmaster, the juggling Heartless ruling the Lotus Forest, Sora returns to the Doorknob. It yawns at length, and Wonderland's Keyhole appears at the back of its mouth: Sora seals it with his Keyblade, shielding the world from darkness. The Doorknob promptly falls asleep again, without realising what has just happened.",
        ),
      },
    ],
    trivia: [
      L("Corey Burton double en anglais la Poignée de porte et le Lapin Blanc, deux rôles du même monde.", "Corey Burton voices both the Doorknob and the White Rabbit in English, two roles from the same world."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Doorknob", url: "https://kingdomhearts.fandom.com/wiki/Doorknob" }],
  },

  // ─────────────────────── Pays Imaginaire ───────────────────────
  "wendy": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Aînée des enfants Darling dans Peter Pan (1953), Wendy raconte à ses frères les histoires du Pays Imaginaire avant que Peter ne vienne les y emmener. Enlevée par le Capitaine Crochet, elle est la raison pour laquelle Peter affronte le pirate, et c'est elle qui choisit finalement de grandir et de rentrer à Londres.\n\nKingdom Hearts la place au cœur d'une méprise. Maléfique et Crochet cherchent les sept Princesses de Cœur, dont les cœurs de pure lumière peuvent ouvrir la porte de Kingdom Hearts ; Wendy, jeune fille sans ténèbres apparentes, est enlevée dans l'hypothèse qu'elle en soit une. Le jeu se sert d'elle pour montrer que les ravisseurs eux-mêmes ignorent qui sont réellement les Princesses.",
          "The eldest of the Darling children in Peter Pan (1953), Wendy tells her brothers stories of Neverland before Peter comes to take them there. Kidnapped by Captain Hook, she is the reason Peter confronts the pirate, and it is she who finally chooses to grow up and return to London.\n\nKingdom Hearts places her at the centre of a mistake. Maleficent and Hook are hunting the seven Princesses of Heart, whose hearts of pure light can open the door to Kingdom Hearts; Wendy, a girl with no apparent darkness, is abducted on the assumption that she is one. The game uses her to show that the kidnappers themselves do not know who the Princesses really are.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Wendy est retenue prisonnière dans la cale du Jolly Roger, le navire du Capitaine Crochet, où Kairi, inconsciente et privée de cœur, a également été déposée. C'est là que Riku, allié à Maléfique et lancé sur la piste des Princesses de Cœur, vient l'examiner.\n\nIl constate qu'elle n'est pas l'une d'elles et perd tout intérêt pour elle. Sora, Donald et Dingo, capturés puis évadés, la libèrent avec l'aide de Peter Pan et de la Fée Clochette. Wendy quitte le navire avant l'affrontement final contre Crochet sur le pont, et rentre chez elle à Londres. Son bref passage sert surtout à cadrer l'enjeu des Princesses de Cœur et à souligner l'aveuglement des serviteurs de Maléfique.",
          "Wendy is held captive in the hold of the Jolly Roger, Captain Hook's ship, where Kairi, unconscious and heartless, has also been laid. It is there that Riku, allied with Maleficent and hunting the Princesses of Heart, comes to examine her.\n\nHe finds she is not one of them and loses all interest in her. Sora, Donald and Goofy, captured and then escaped, free her with the help of Peter Pan and Tinker Bell. Wendy leaves the ship before the final confrontation with Hook on deck, and returns home to London. Her brief appearance mainly frames the stakes around the Princesses of Heart and underlines the blindness of Maleficent's servants.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wendy", url: "https://kingdomhearts.fandom.com/wiki/Wendy" }],
  },

  "mr-smee": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Monsieur Mouche est le second du Capitaine Crochet dans Peter Pan : un petit homme rond à lunettes, bonhomme et serviable, dont la douceur contraste avec la cruauté de son capitaine. Il rase Crochet, le console de ses échecs et exécute ses ordres sans jamais s'interroger sur leur moralité.\n\nKingdom Hearts conserve intégralement ce duo. Mouche n'a pas d'ambition propre et n'est jamais un adversaire pour Sora : il court d'un bout à l'autre du Jolly Roger pour transmettre les ordres, annoncer une mauvaise nouvelle ou signaler que le crocodile approche. La série l'utilise essentiellement comme relais d'information, y compris quand son capitaine s'allie à des puissances qui le dépassent.",
          "Mr. Smee is Captain Hook's first mate in Peter Pan: a small, round, bespectacled man, kindly and helpful, whose gentleness contrasts with his captain's cruelty. He shaves Hook, consoles him after his failures and carries out his orders without ever questioning their morality.\n\nKingdom Hearts keeps the pairing intact. Smee has no ambitions of his own and is never an opponent for Sora: he runs from one end of the Jolly Roger to the other passing on orders, announcing bad news or warning that the crocodile is coming. The series uses him essentially as an information relay, including when his captain allies himself with powers beyond him.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Une dizaine d'années avant l'aventure de Sora, Crochet cherche déjà un trésor au Pays Imaginaire, et Mouche l'assiste dans ses fouilles. Terra, Ventus et Aqua croisent chacun le duo lors de leurs passages sur l'île.\n\nMouche transmet les ordres de son capitaine, veille sur la carte au trésor et se fait régulièrement rudoyer pour son incompétence supposée. Cette apparition précoce établit que le Pays Imaginaire est resté longtemps à l'écart des grands bouleversements de la saga : les pirates y poursuivent leurs chasses au trésor et leurs querelles avec Peter Pan bien avant que les Sans-cœur ne s'y intéressent.",
          "About a decade before Sora's adventure, Hook is already hunting treasure in Neverland, and Smee assists him in the digging. Terra, Ventus and Aqua each cross paths with the pair during their visits to the island.\n\nSmee passes on his captain's orders, minds the treasure map and is regularly berated for his supposed incompetence. This early appearance establishes that Neverland long stayed apart from the saga's great upheavals: the pirates pursue their treasure hunts and their quarrels with Peter Pan well before the Heartless take any interest in the place.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "À bord du Jolly Roger, Mouche seconde Crochet dans sa collaboration avec Maléfique. Il surveille les prisonniers, Wendy et Kairi, et se charge des allées et venues entre le pont et la cale pendant que son capitaine négocie avec les puissances des ténèbres.\n\nQuand Sora et Peter Pan reprennent le navire, Mouche s'éclipse plutôt que de combattre. Crochet, vaincu, tombe à la mer et est aussitôt poursuivi par le crocodile. Le second réapparaît dans 358/2 Days, où il sert d'intermédiaire entre Crochet et les Sans-cœur du Pays Imaginaire lors des missions de Roxas, toujours dans le même rôle d'exécutant maladroit et inoffensif.",
          "Aboard the Jolly Roger, Smee assists Hook in his collaboration with Maleficent. He watches over the prisoners, Wendy and Kairi, and handles the traffic between deck and hold while his captain negotiates with the powers of darkness.\n\nWhen Sora and Peter Pan retake the ship, Smee slips away rather than fight. Hook, defeated, falls into the sea and is immediately pursued by the crocodile. The first mate returns in 358/2 Days, acting as go-between for Hook and Neverland's Heartless during Roxas's missions, still in the same role of clumsy, harmless underling.",
        ),
      },
    ],
    trivia: [
      L("Son nom français officiel est Monsieur Mouche, employé dans les versions françaises du film comme des jeux.", "His official French name is Monsieur Mouche, used in the French versions of both the film and the games."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mr. Smee", url: "https://kingdomhearts.fandom.com/wiki/Mr._Smee" }],
  },

  "tick-tock-crocodile": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Dans Peter Pan, le crocodile a dévoré la main que Peter avait tranchée au Capitaine Crochet, et a également avalé un réveil. Depuis, son tic-tac annonce son arrivée et terrifie le pirate, qui prend la fuite au moindre bruit d'horlogerie. Il poursuit Crochet pour goûter au reste du personnage.\n\nKingdom Hearts reprend le gag tel quel, sans lui ajouter la moindre dimension. Le crocodile n'est pas un ennemi combattu, n'appartient à aucune faction et n'a pas de lien avec les ténèbres : c'est une menace comique, un point de ponctuation qui referme les scènes où Crochet est humilié. Sa fonction narrative dans la série est exactement celle qu'il avait dans le film.",
          "In Peter Pan, the crocodile devoured the hand Peter cut off Captain Hook, and also swallowed an alarm clock. Ever since, its ticking announces its arrival and terrifies the pirate, who bolts at the slightest sound of clockwork. It pursues Hook in hope of tasting the rest of him.\n\nKingdom Hearts takes the gag over unchanged, adding no dimension to it. The crocodile is not a fought enemy, belongs to no faction and has no link to darkness: it is a comic threat, a punctuation mark closing the scenes in which Hook is humiliated. Its narrative function in the series is exactly what it was in the film.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le crocodile rôde autour du Jolly Roger pendant toute la visite du Pays Imaginaire, et son tic-tac se fait entendre chaque fois que Crochet s'approche du bastingage. La menace est permanente et sert de ressort comique dans un monde par ailleurs sombre, où Kairi gît sans cœur dans la cale.\n\nAprès la défaite de Crochet sur le pont face à Sora et Peter Pan, le pirate bascule par-dessus bord. Le crocodile l'attend en dessous et se lance aussitôt à sa poursuite : Crochet s'enfuit à la nage en hurlant, exactement comme dans le film. Le reptile réapparaît dans les missions du Pays Imaginaire de 358/2 Days, toujours cantonné aux abords du navire.",
          "The crocodile prowls around the Jolly Roger throughout the Neverland visit, its ticking heard whenever Hook nears the rail. The threat is constant and provides comic relief in an otherwise dark world, where Kairi lies heartless in the hold.\n\nAfter Hook's defeat on deck at the hands of Sora and Peter Pan, the pirate topples overboard. The crocodile is waiting below and gives chase at once: Hook swims off screaming, exactly as in the film. The reptile returns in the Neverland missions of 358/2 Days, still confined to the waters around the ship.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Tick-Tock", url: "https://kingdomhearts.fandom.com/wiki/Tick-Tock" }],
  },

  // ─────────────────────── Olympe ───────────────────────
  "hercules": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Fils de Zeus dans Hercule (1997), le héros est enlevé enfant par les sbires d'Hadès, rendu mortel et élevé sur terre. Pour retrouver sa place parmi les dieux, il doit devenir un « vrai héros », ce que son entraîneur Philoctète tente de lui enseigner à coups d'exploits publics, avant qu'il ne comprenne que l'héroïsme se mesure au sacrifice et non à la gloire.\n\nKingdom Hearts en fait le pilier de l'Olympe, monde structuré autour du Colisée et de ses tournois. Hercule y est à la fois un allié, un modèle et, pour le joueur, un adversaire de tournoi. La série le suit sur presque tous ses épisodes, et sa question centrale — qu'est-ce qui fait un héros ? — sert de miroir aux doutes de Sora, notamment quand celui-ci perd à son tour sa force.",
          "Zeus's son in Hercules (1997), the hero is stolen as an infant by Hades's minions, made mortal and raised on earth. To regain his place among the gods he must become a “true hero”, which his trainer Philoctetes tries to teach him through public feats, before he learns that heroism is measured in sacrifice rather than glory.\n\nKingdom Hearts makes him the pillar of Olympus, a world built around the Coliseum and its tournaments. Hercules is at once an ally, a model and, for the player, a tournament opponent. The series follows him through nearly every game, and his central question — what makes a hero? — mirrors Sora's own doubts, especially when Sora in turn loses his strength.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora découvre le Colisée de l'Olympe alors qu'Hercule en est le champion en titre. Philoctète, prenant Sora pour son élève, le fait s'entraîner puis l'inscrit aux tournois, et le garçon gravit les coupes jusqu'à affronter Hercule lui-même en finale.\n\nEn coulisses, Hadès prépare la chute du héros : il engage Cloud pour l'éliminer, puis lâche Cerbère sur le Colisée. Hercule combat aux côtés de Sora contre le chien à trois têtes, et lui reconnaît le titre de héros à l'issue des épreuves. Le monde ne comporte pas de Serrure classique et fonctionne surtout comme une arène de progression, mais il installe durablement le trio Hercule-Phil-Hadès dans la série.",
          "Sora discovers the Olympus Coliseum while Hercules is the reigning champion. Philoctetes, mistaking Sora for his pupil, puts him through training and enters him in the tournaments, and the boy climbs the cups until he faces Hercules himself in the final.\n\nBehind the scenes Hades is preparing the hero's downfall: he hires Cloud to kill him, then looses Cerberus on the Coliseum. Hercules fights beside Sora against the three-headed dog and acknowledges him as a hero at the end of the trials. The world has no conventional Keyhole and functions mainly as an arena of progression, but it firmly establishes the Hercules-Phil-Hades trio in the series.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, Hercule est devenu une célébrité et en paie le prix : accaparé par ses admirateurs et ses obligations, il s'épuise et se laisse gagner par le découragement. Hadès en profite pour rouvrir le Arène des Mirages, une arène souterraine où il compte briser le héros, et pour enlever Mégara aux Enfers.\n\nSora, Donald et Dingo l'accompagnent dans la descente aux Enfers, où ils rencontrent Auron, que le dieu tente d'enrôler contre lui. Hercule finit par retrouver sa détermination en comprenant que sa force ne vient pas de sa gloire mais de ce qu'il est prêt à perdre pour Mégara. Il triomphe d'Hadès à la fin de la seconde visite, et le Colisée reprend ses tournois.",
          "A year later Hercules has become a celebrity and pays the price: monopolised by admirers and obligations, he wears himself out and gives way to discouragement. Hades takes the opportunity to reopen the Underdrome, an underground arena in which he intends to break the hero, and to carry Megara off to the Underworld.\n\nSora, Donald and Goofy go with him down into the Underworld, where they meet Auron, whom the god is trying to press into service against him. Hercules eventually recovers his resolve on realising that his strength comes not from his fame but from what he is willing to lose for Megara. He overcomes Hades at the end of the second visit, and the Coliseum resumes its tournaments.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Kingdom Hearts III ouvre sur l'Olympe attaqué : Hadès a libéré les Titans pour renverser Zeus, Thèbes brûle et le mont Olympe est pris d'assaut. Sora, qui a perdu ses pouvoirs à la fin de Dream Drop Distance, vient précisément chercher auprès d'Hercule la réponse à sa question — comment retrouver une force que l'on a perdue.\n\nHercule combat les Titans avec lui, sauve Mégara des flammes et libère Zeus, prisonnier au sommet. Sa réponse à Sora est simple : la force vient de ce que l'on porte en soi et de ceux pour qui l'on se bat, pas d'un pouvoir que l'on posséderait. Cette leçon oriente tout le début du jeu et prépare la reconquête, par Sora, du Pouvoir de l'éveil.",
          "Kingdom Hearts III opens on an Olympus under attack: Hades has freed the Titans to overthrow Zeus, Thebes is burning and Mount Olympus is being stormed. Sora, who lost his powers at the end of Dream Drop Distance, comes specifically to ask Hercules his question — how does one regain a strength that has been lost?\n\nHercules fights the Titans with him, saves Megara from the flames and frees Zeus, imprisoned at the summit. His answer to Sora is simple: strength comes from what you carry inside and from those you fight for, not from a power you possess. That lesson shapes the whole opening of the game and prepares Sora's recovery of the power of waking.",
        ),
      },
    ],
    trivia: [
      L("Dans le premier Kingdom Hearts, Hercule est aussi un adversaire de tournoi : Sora l'affronte en finale de la coupe qui porte son nom.", "In the first Kingdom Hearts, Hercules is also a tournament opponent: Sora faces him in the final of the cup that bears his name."),
      L("Son nom français officiel est Hercule, comme le titre du film Disney de 1997.", "His official French name is Hercule, matching the title of the 1997 Disney film."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hercules", url: "https://kingdomhearts.fandom.com/wiki/Hercules" }],
  },

  "pain-and-panic": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Peine et Panique sont les deux démons au service d'Hadès dans Hercule : l'un trapu et rose, l'autre maigre et vert, tous deux métamorphes et parfaitement incapables. Ce sont eux qui ratent l'assassinat du bébé Hercule au début du film, faute d'avoir réussi à lui faire boire la totalité de la potion mortelle, ce qui déclenche toute l'intrigue.\n\nKingdom Hearts en fait des faire-valoir comiques du dieu des Enfers. Ils n'ont aucune autonomie, encaissent ses colères et laissent échapper les informations qu'ils devaient garder. Leur présence permet à Hadès d'exposer ses plans à voix haute sans jamais paraître soliloquer, procédé que la série utilise à chacune de leurs apparitions.",
          "Pain and Panic are the two imps in Hades's service in Hercules: one squat and pink, the other lanky and green, both shapeshifters and utterly incompetent. They are the ones who bungle the murder of the infant Hercules at the start of the film by failing to make him drink all of the deadly potion, which sets the whole plot in motion.\n\nKingdom Hearts turns them into the underworld god's comic foils. They have no autonomy, absorb his rages and let slip the information they were meant to guard. Their presence lets Hades lay out his plans aloud without ever appearing to soliloquise, a device the series uses at each of their appearances.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Peine et Panique tiennent le guichet des tournois du Arène des Mirages, l'arène souterraine qu'Hadès rouvre aux Enfers. Ce sont eux qui inscrivent les concurrents, annoncent les coupes et commentent les combats, ce qui les place au centre du système de tournois du monde.\n\nLeur incompétence sert plusieurs fois à Sora : ils révèlent malgré eux les intentions de leur maître, notamment son projet d'utiliser Auron comme champion et de retenir Mégara aux Enfers. Hadès les punit régulièrement en les carbonisant sur place, sans conséquence durable. Ils assistent à sa défaite finale sans intervenir, fidèles à leur habitude de se mettre à couvert dès que la situation tourne mal.",
          "Pain and Panic man the registration desk for the Underdrome tournaments, the underground arena Hades reopens in the Underworld. They enrol competitors, announce the cups and comment on the fights, which places them at the centre of the world's tournament system.\n\nTheir incompetence serves Sora more than once: they inadvertently reveal their master's intentions, notably his plan to use Auron as a champion and to keep Megara in the Underworld. Hades regularly punishes them by scorching them on the spot, with no lasting consequence. They witness his final defeat without intervening, true to their habit of taking cover as soon as things go badly.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Toujours au service d'Hadès lors de l'assaut sur l'Olympe, les deux démons surveillent les Titans que leur maître a libérés et lui rapportent la progression de l'attaque contre Thèbes et le mont Olympe.\n\nIls croisent Sora, Donald et Dingo à plusieurs reprises, prennent la fuite à chaque fois et confirment involontairement que Zeus est retenu prisonnier au sommet. Comme dans l'épisode précédent, leur rôle est de rendre lisibles les manœuvres d'Hadès pour le joueur tout en apportant la respiration comique dont le monde a besoin entre deux affrontements contre des colosses de roche, de glace, de lave et de vent.",
          "Still in Hades's service during the assault on Olympus, the two imps keep watch on the Titans their master has freed and report to him on the progress of the attack against Thebes and Mount Olympus.\n\nThey run into Sora, Donald and Goofy several times, flee on each occasion, and unintentionally confirm that Zeus is held prisoner at the summit. As in the previous game, their role is to make Hades's manoeuvres legible to the player while providing the comic relief the world needs between fights against colossi of rock, ice, lava and wind.",
        ),
      },
    ],
    trivia: [
      L("Leurs noms français officiels sont Peine et Panique, traduction directe de Pain and Panic.", "Their official French names are Peine et Panique, a direct rendering of Pain and Panic."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Pain and Panic", url: "https://kingdomhearts.fandom.com/wiki/Pain_and_Panic" }],
  },

  "zeus": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Roi des dieux dans Hercule, Zeus règne sur l'Olympe et a jadis emprisonné les Titans sous la terre et la mer. Père d'Hercule, il lui interdit l'accès au monde des dieux tant que celui-ci n'aura pas prouvé qu'il est un véritable héros, et lui offre Pégase comme compagnon.\n\nKingdom Hearts le maintient longtemps hors champ : pendant deux jeux entiers, l'Olympe se limite au Colisée, à Phil, à Hercule et à Hadès, et les dieux ne sont évoqués que de loin. Il faut attendre que le récit ait besoin d'un enjeu à l'échelle du monde pour que Zeus apparaisse enfin, au moment précis où Hadès tente le coup d'État que le film n'avait montré qu'une fois.",
          "King of the gods in Hercules, Zeus rules Olympus and once imprisoned the Titans beneath earth and sea. Hercules's father, he bars him from the realm of the gods until he proves himself a true hero, and gives him Pegasus as a companion.\n\nKingdom Hearts keeps him offstage for a long time: for two whole games Olympus amounts to the Coliseum, Phil, Hercules and Hades, and the gods are mentioned only at a distance. Only when the story needs stakes on the scale of a world does Zeus finally appear, at precisely the moment Hades attempts the coup the film had staged just once.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Zeus n'apparaît en personne que dans Kingdom Hearts III. Hadès a libéré les quatre Titans — roche, glace, lave et vent — et les a lancés contre l'Olympe pour renverser son frère. Zeus est capturé et enfermé au sommet de la montagne pendant que Thèbes brûle en contrebas.\n\nHercule, Sora, Donald et Dingo remontent le mont Olympe en affrontant les colosses, puis délivrent le roi des dieux. Libéré, Zeus foudroie les Titans et les renvoie à leur prison, rétablissant l'ordre. Il salue le courage de son fils et des porteurs de Keyblade, mais laisse Hadès filer, ce qui laisse la porte ouverte à d'éventuelles représailles. Sa Foudre reste l'une des rares manifestations de puissance divine directe de toute la série.",
          "Zeus appears in person only in Kingdom Hearts III. Hades has freed the four Titans — rock, ice, lava and wind — and hurled them at Olympus to overthrow his brother. Zeus is captured and locked away at the mountain's summit while Thebes burns below.\n\nHercules, Sora, Donald and Goofy climb Mount Olympus, fighting the colossi, and free the king of the gods. Released, Zeus blasts the Titans with lightning and returns them to their prison, restoring order. He salutes the courage of his son and of the Keyblade wielders, but lets Hades slip away, leaving the door open to further reprisals. His thunderbolt remains one of the very few displays of direct divine power in the whole series.",
        ),
      },
    ],
    trivia: [
      L("Corey Burton, voix anglaise de Zeus dans la série, double également le Lapin Blanc, la Poignée de porte et Sark.", "Corey Burton, Zeus's English voice in the series, also voices the White Rabbit, the Doorknob and Sark."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Zeus", url: "https://kingdomhearts.fandom.com/wiki/Zeus" }],
  },

  "pegasus": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Dans Hercule, Pégase est un cheval ailé façonné par Zeus à partir d'un nuage et offert à son fils. Il a le caractère d'un chien fidèle : jaloux, joueur, immédiatement méfiant envers Mégara, mais prêt à traverser le ciel pour son cavalier.\n\nKingdom Hearts en fait une monture d'apparat plus qu'un compagnon jouable. Il n'appartient pas à l'équipe de Sora, ne combat pas et n'est jamais contrôlé par le joueur ; il sert à souligner l'échelle des scènes aériennes de l'Olympe et à rappeler que le monde d'Hercule est celui des dieux autant que celui des arènes. Sa présence augmente logiquement quand le monde s'ouvre au-delà du Colisée.",
          "In Hercules, Pegasus is a winged horse Zeus shapes out of a cloud and gives to his son. He has the temperament of a loyal dog: jealous, playful, instantly suspicious of Megara, but ready to cross the sky for his rider.\n\nKingdom Hearts makes him a ceremonial mount rather than a playable companion. He is not part of Sora's party, does not fight and is never controlled by the player; he serves to underline the scale of Olympus's aerial scenes and to remind us that Hercules's world belongs to the gods as much as to the arenas. His presence naturally grows once the world expands beyond the Coliseum.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Pégase n'apparaît que brièvement dans Kingdom Hearts II, dans les scènes du Colisée. On le voit emporter Hercule et Mégara lorsque le héros s'échappe de la foule de ses admirateurs, image reprise du film.\n\nSon rôle reste strictement décoratif : le monde se joue alors au sol, dans les arènes du Colisée et du Arène des Mirages, et aucune séquence de vol n'est proposée au joueur. Sa présence sert surtout à rappeler l'existence d'un Olympe plus vaste que l'arène, que le jeu suivant finira par montrer réellement.",
          "Pegasus appears only briefly in Kingdom Hearts II, in the Coliseum scenes. He is seen carrying Hercules and Megara off when the hero escapes his crowd of admirers, an image lifted from the film.\n\nHis role stays strictly decorative: the world is played on the ground at this point, in the arenas of the Coliseum and the Underdrome, and no flying sequence is offered to the player. His presence mainly recalls the existence of an Olympus larger than the arena, which the next game will finally show.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Kingdom Hearts III donne enfin à Pégase la place que le film lui accordait. Alors que les Titans ravagent Thèbes et prennent le mont Olympe d'assaut, il transporte Hercule au-dessus de la ville en flammes pour évacuer les habitants et rejoindre Mégara.\n\nIl participe ensuite à la remontée vers le sommet, où Zeus est retenu prisonnier, et vole aux côtés de Sora pendant les affrontements aériens contre les colosses. Le monde de l'Olympe s'étendant cette fois du pied de la montagne aux nuages, la monture ailée y trouve enfin un usage à la mesure de son personnage d'origine.",
          "Kingdom Hearts III finally gives Pegasus the place the film allowed him. As the Titans lay waste to Thebes and storm Mount Olympus, he carries Hercules above the burning city to evacuate its people and reach Megara.\n\nHe then takes part in the climb towards the summit where Zeus is held prisoner, flying alongside Sora during the aerial clashes with the colossi. With the world of Olympus now stretching from the foot of the mountain to the clouds, the winged mount at last finds a use worthy of his original character.",
        ),
      },
    ],
    trivia: [
      L("Son nom français officiel est Pégase, conformément au doublage du film Disney.", "His official French name is Pégase, in keeping with the Disney film's French dub."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Pegasus", url: "https://kingdomhearts.fandom.com/wiki/Pegasus" }],
  },

  // ─────────────────────── Space Paranoids ───────────────────────
  "sark": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Sark est le lieutenant du Maître Contrôle Principal dans Tron (1982), le programme militaire chargé de faire respecter l'ordre à l'intérieur du système et d'envoyer les programmes récalcitrants mourir dans les jeux de l'arène. Rouge, casqué et méthodique, il n'a d'autre volonté que celle de son maître.\n\nKingdom Hearts II l'importe tel quel dans Space Paranoids, le système informatique installé dans l'ordinateur d'Ansem le Sage sous la Forteresse Oubliée. La série ne lui invente ni passé ni nuance : il reste un exécutant, ce qui en fait un adversaire purement fonctionnel, dont la seule caractéristique notable est de ne jamais agir pour lui-même.",
          "Sark is the Master Control Program's lieutenant in Tron (1982), the military program charged with enforcing order inside the system and sending recalcitrant programs to die in the arena games. Red, helmeted and methodical, he has no will beyond his master's.\n\nKingdom Hearts II imports him unchanged into Space Paranoids, the computer system housed in Ansem the Wise's machine beneath Hollow Bastion. The series invents neither past nor nuance for him: he remains an enforcer, which makes him a purely functional opponent whose one notable trait is never acting on his own account.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Lorsque Sora, Donald et Dingo sont numérisés par l'ordinateur de la Forteresse Oubliée, Sark les fait aussitôt arrêter comme programmes non autorisés et les jette dans les jeux de la grille, où ils affrontent des adversaires dans une arène de disques et de motos lumineuses.\n\nÉvadés avec l'aide de Tron, le programme de sécurité que le MCP traque, ils remontent jusqu'au cœur du système. Sark tente de les arrêter à chaque étape et empêche Tron d'accéder au canal de contrôle. Lors de l'affrontement final, le MCP lui transfère une partie de sa puissance et Sark devient gigantesque ; Sora et Tron le détruisent en même temps que le programme maître, ce qui rend le contrôle du système à ses utilisateurs.",
          "When Sora, Donald and Goofy are digitised by Hollow Bastion's computer, Sark has them arrested at once as unauthorised programs and throws them into the grid's games, where they face opponents in an arena of discs and light cycles.\n\nEscaping with the help of Tron, the security program the MCP is hunting, they work their way to the system's core. Sark tries to stop them at every stage and blocks Tron's access to the control channel. In the final confrontation the MCP transfers part of its power to him and Sark becomes gigantic; Sora and Tron destroy him along with the master program, returning control of the system to its users.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sark", url: "https://kingdomhearts.fandom.com/wiki/Sark" }],
  },

  "mcp": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Maître Contrôle Principal — Master Control Program — est l'antagoniste de Tron (1982) : une intelligence qui a pris le contrôle du système informatique d'une entreprise, absorbe les autres programmes pour croître et considère les utilisateurs humains comme des parasites à écarter. Il apparaît sous la forme d'un cylindre rouge tournoyant.\n\nKingdom Hearts II le réimplante dans son propre univers. Le MCP n'est plus le programme d'une multinationale mais celui qui règne sur Space Paranoids, le système bâti dans l'ordinateur d'Ansem le Sage, sous la Forteresse Oubliée. La série lui prête ainsi un lien direct avec l'histoire des apprentis d'Ansem et avec les données que Xehanort a laissées derrière lui.",
          "The Master Control Program is the antagonist of Tron (1982): an intelligence that has taken over a corporation's computer system, absorbs other programs to grow and regards human users as parasites to be pushed aside. It appears as a spinning red cylinder.\n\nKingdom Hearts II replants it in its own universe. The MCP is no longer a multinational's program but the one ruling Space Paranoids, the system built inside Ansem the Wise's computer beneath Hollow Bastion. The series thus gives it a direct link to the history of Ansem's apprentices and to the data Xehanort left behind.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Le MCP a pris le contrôle du système d'Ansem le Sage et cherche à étendre son emprise au-delà : il vise les défenses de la Forteresse Oubliée elles-mêmes, ce qui menace directement la ville en pleine reconstruction et le Comité de Restauration.\n\nIl traque Tron, le programme de sécurité écrit pour le contenir, et fait numériser Sora et ses amis pour s'en débarrasser dans l'arène. Lors de la seconde visite du monde, alors que les Sans-cœur assiègent la ville, Sora et Tron atteignent le noyau du système. Tron sacrifie son intégrité pour ouvrir une brèche, le MCP est désintégré avec Sark, et le contrôle revient aux utilisateurs. Les données ainsi libérées permettent ensuite d'accéder aux recherches d'Ansem le Sage.",
          "The MCP has seized control of Ansem the Wise's system and seeks to extend its grip further: it targets Hollow Bastion's own defences, which directly threatens the town under reconstruction and the Restoration Committee.\n\nIt hunts Tron, the security program written to contain it, and has Sora and his friends digitised to dispose of them in the arena. During the world's second visit, as the Heartless besiege the town, Sora and Tron reach the system's core. Tron sacrifices his integrity to open a breach, the MCP is derezzed along with Sark, and control returns to the users. The data thus freed then gives access to Ansem the Wise's research.",
        ),
      },
    ],
    trivia: [
      L("Son nom complet, Master Control Program, est rendu par « Maître Contrôle Principal » dans les versions françaises.", "Its full name, Master Control Program, is rendered as “Maître Contrôle Principal” in the French versions."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Master Control Program", url: "https://kingdomhearts.fandom.com/wiki/Master_Control_Program" }],
  },

  // ─────────────────────── La Grille ───────────────────────
  "kevin-flynn": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Kevin Flynn est le héros de Tron (1982) et la figure centrale de Tron : L'Héritage (2010) : programmeur devenu patron d'ENCOM, il a conçu la Grille, un univers numérique qu'il voulait parfait. Piégé à l'intérieur après la trahison de CLU, le programme créé à son image, il y a vécu des décennies en reclus.\n\nKingdom Hearts Dream Drop Distance reprend cette situation dans La Grille, l'un des Mondes Endormis. Flynn y est un utilisateur enfermé dans sa propre création, qui a renoncé à l'action et prêche l'immobilité pour ne pas donner prise à CLU. Sa réflexion sur la perfection recherchée qui engendre la tyrannie fait écho aux thèmes que la saga développe autour de Xehanort.",
          "Kevin Flynn is the hero of Tron (1982) and the central figure of Tron: Legacy (2010): a programmer turned head of ENCOM, he designed the Grid, a digital universe he meant to be perfect. Trapped inside after the betrayal of CLU, the program made in his image, he has lived there for decades as a recluse.\n\nKingdom Hearts Dream Drop Distance takes up this situation in The Grid, one of the Sleeping Worlds. Flynn is a user shut inside his own creation, who has renounced action and preaches stillness so as to give CLU no purchase. His reflections on how a pursuit of perfection breeds tyranny echo the themes the saga develops around Xehanort.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora découvre La Grille et parvient au refuge de Flynn, caché loin de la cité. L'utilisateur lui explique l'histoire du monde : la création de la Grille, l'apparition spontanée des ISO, leur extermination par CLU, et la transformation de Tron en Rinzler, le champion masqué du tyran.\n\nFlynn cherche à récupérer son disque d'identité, que CLU convoite car il contient la clé du passage vers le monde réel. Lors de l'affrontement final, plutôt que de laisser son double s'échapper, Flynn se réintègre à CLU — les deux programmes fusionnent et disparaissent ensemble — offrant à son fils Sam et à Quorra le temps de quitter la Grille. Ce sacrifice referme l'histoire de La Grille dans la série.",
          "Sora discovers The Grid and reaches Flynn's hideout, hidden far from the city. The user explains the world's history: the creation of the Grid, the spontaneous emergence of the ISOs, their extermination by CLU, and the transformation of Tron into Rinzler, the tyrant's masked champion.\n\nFlynn is trying to recover his identity disc, which CLU covets because it holds the key to the passage to the real world. In the final confrontation, rather than let his double escape, Flynn reintegrates with CLU — the two programs merge and vanish together — buying his son Sam and Quorra the time to leave the Grid. That sacrifice closes The Grid's story in the series.",
        ),
      },
    ],
    trivia: [
      L("La Grille de Dream Drop Distance adapte Tron : L'Héritage, alors que Space Paranoids, dans Kingdom Hearts II, adaptait le film Tron de 1982.", "The Grid in Dream Drop Distance adapts Tron: Legacy, whereas Space Paranoids in Kingdom Hearts II adapted the 1982 film Tron."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Kevin Flynn", url: "https://kingdomhearts.fandom.com/wiki/Kevin_Flynn" }],
  },

  "sam-flynn": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Fils de Kevin Flynn dans Tron : L'Héritage, Sam a grandi sans son père, disparu quand il était enfant, et mène une existence désinvolte en marge de l'entreprise dont il a hérité. Un signal venu de l'ancienne salle d'arcade de son père l'attire jusqu'à la machine qui le numérise et le projette dans la Grille.\n\nKingdom Hearts Dream Drop Distance conserve ce point de départ. Sam est un utilisateur comme son père, doté d'une résistance que les programmes n'ont pas, mais totalement étranger aux règles du monde où il atterrit. Sa position en fait un allié naturel de Sora, lui aussi arrivé sans comprendre où il se trouvait ni à quoi ressemblait le jeu auquel on l'oblige à jouer.",
          "Kevin Flynn's son in Tron: Legacy, Sam grew up without his father, who vanished when he was a child, and leads a casual existence on the fringes of the company he inherited. A signal from his father's old arcade draws him to the machine that digitises him and throws him into the Grid.\n\nKingdom Hearts Dream Drop Distance keeps that premise. Sam is a user like his father, with a resilience programs lack, but wholly ignorant of the rules of the world he lands in. That position makes him a natural ally for Sora, who likewise arrived without understanding where he was or what game he was being made to play.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Arrivé dans la Grille, Sam est arrêté par les forces de CLU et envoyé dans les jeux de disques, où Sora le rejoint. Les deux s'échappent ensemble à moto lumineuse, poursuivis par Rinzler, puis gagnent le refuge de Kevin Flynn.\n\nSam pousse son père à agir plutôt qu'à attendre, ce qui provoque l'affrontement final avec CLU. Pendant que Flynn se réintègre à son double, Sam et Quorra atteignent le portail et regagnent le monde réel. Riku, qui traverse la même Grille dans son propre rêve, croise également Sam au cours de sa progression : les deux versions du monde se répondent sans se rejoindre, selon le principe des Mondes Endormis.",
          "On arriving in the Grid, Sam is arrested by CLU's forces and sent to the disc games, where Sora joins him. The two escape together on light cycles, pursued by Rinzler, then reach Kevin Flynn's hideout.\n\nSam pushes his father to act rather than wait, which brings about the final confrontation with CLU. While Flynn reintegrates with his double, Sam and Quorra reach the portal and return to the real world. Riku, crossing the same Grid in his own dream, also meets Sam during his progress: the two versions of the world answer each other without ever joining, following the logic of the Sleeping Worlds.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sam Flynn", url: "https://kingdomhearts.fandom.com/wiki/Sam_Flynn" }],
  },

  "quorra": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Quorra est, dans Tron : L'Héritage, la dernière des ISO : des algorithmes isomorphes apparus spontanément dans la Grille, sans avoir été programmés par personne, et que Kevin Flynn tenait pour le miracle de sa création. CLU, jugeant leur imperfection incompatible avec le système parfait qu'il devait bâtir, les a tous exterminés.\n\nRecueillie et protégée par Flynn, Quorra combine une loyauté absolue envers son mentor et une curiosité insatiable pour le monde des utilisateurs, qu'elle ne connaît que par les livres. Kingdom Hearts conserve intégralement cette identité, qui résonne avec les questions de la saga sur les êtres nés autrement — Similis, répliques, cœurs sans origine.",
          "In Tron: Legacy, Quorra is the last of the ISOs: isomorphic algorithms that arose spontaneously in the Grid, programmed by no one, and that Kevin Flynn regarded as the miracle of his creation. CLU, judging their imperfection incompatible with the perfect system he was meant to build, wiped them all out.\n\nTaken in and protected by Flynn, Quorra combines absolute loyalty to her mentor with an insatiable curiosity about the users' world, which she knows only from books. Kingdom Hearts keeps that identity intact, and it resonates with the saga's questions about beings born otherwise — Nobodies, replicas, hearts without origin.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Quorra veille sur le refuge de Kevin Flynn et accueille Sora quand celui-ci le découvre. C'est elle qui lui explique le fonctionnement de la Grille, la nature des programmes et ce qu'était le peuple des ISO avant l'épuration menée par CLU.\n\nElle se bat aux côtés de Sora et de Sam contre les forces du tyran, et affronte Rinzler, dont elle ignore qu'il fut Tron. Lorsque Flynn décide de se réintégrer à CLU pour l'anéantir, Quorra s'échappe avec Sam par le portail et quitte définitivement la Grille pour le monde réel — un passage inédit pour un programme, et la seule fin heureuse que le monde offre.",
          "Quorra watches over Kevin Flynn's hideout and welcomes Sora when he finds it. She is the one who explains to him how the Grid works, what programs are, and what the ISO people were before CLU's purge.\n\nShe fights alongside Sora and Sam against the tyrant's forces, and faces Rinzler, not knowing he was once Tron. When Flynn decides to reintegrate with CLU in order to destroy him, Quorra escapes with Sam through the portal and leaves the Grid for good for the real world — an unprecedented crossing for a program, and the only happy ending the world offers.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Quorra", url: "https://kingdomhearts.fandom.com/wiki/Quorra" }],
  },

  "clu": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "CLU est le programme que Kevin Flynn a créé à sa propre image dans Tron : L'Héritage, avec pour instruction de bâtir un système parfait. Prenant l'ordre au pied de la lettre, il a jugé que la perfection exigeait l'élimination de tout ce qui n'était pas conforme : les ISO d'abord, puis son créateur lui-même, qu'il a piégé dans la Grille.\n\nKingdom Hearts en fait le méchant d'un des Mondes Endormis, et le personnage entre en résonance directe avec l'intrigue principale : un double créé à l'image d'un homme, qui se retourne contre lui au nom d'un idéal, préfigure ou reflète les manipulations de Xehanort et ses multiples réceptacles. CLU garde l'apparence de Flynn jeune, marquée d'une cicatrice dorée.",
          "CLU is the program Kevin Flynn created in his own image in Tron: Legacy, instructed to build a perfect system. Taking the order literally, he decided perfection required eliminating everything non-conforming: the ISOs first, then his creator himself, whom he trapped in the Grid.\n\nKingdom Hearts makes him the villain of one of the Sleeping Worlds, and the character resonates directly with the main plot: a double created in a man's image who turns against him in the name of an ideal prefigures or mirrors Xehanort's manipulations and his many vessels. CLU keeps the appearance of a young Flynn, marked by a golden scar.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "CLU règne sur la Grille et traque Kevin Flynn depuis des années, car le disque d'identité de l'utilisateur contient la clé du passage vers le monde réel, où il compte étendre son ordre. Il envoie Rinzler — Tron reprogrammé — à ses trousses et fait numériser tout intrus.\n\nIl affronte Riku dans le rêve de celui-ci, et cette confrontation ébranle la loyauté de Rinzler, dont la mémoire de Tron commence à remonter. Voyant son champion vaciller, CLU le précipite dans la Mer de simulation. Lors du dénouement, Flynn choisit de se réintégrer à lui : les deux programmes fusionnent et s'annulent, mettant fin au règne de CLU au prix de la vie de son créateur.",
          "CLU rules the Grid and has hunted Kevin Flynn for years, because the user's identity disc holds the key to the passage to the real world, where he intends to extend his order. He sends Rinzler — Tron reprogrammed — after him and has every intruder digitised.\n\nHe faces Riku in Riku's dream, and that confrontation shakes Rinzler's loyalty as his memories of being Tron begin to surface. Seeing his champion waver, CLU casts him into the Sea of Simulation. At the climax, Flynn chooses to reintegrate with him: the two programs merge and cancel each other out, ending CLU's reign at the cost of his creator's life.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — CLU", url: "https://kingdomhearts.fandom.com/wiki/CLU" }],
  },

  "rinzler": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Rinzler est, dans Tron : L'Héritage, le champion masqué de CLU : un guerrier silencieux maniant deux disques d'identité, dont on découvre en cours de récit qu'il n'est autre que Tron, le programme de sécurité reprogrammé de force après avoir tenté de s'opposer au coup d'État.\n\nKingdom Hearts exploite ce retournement au maximum, parce que la série avait déjà présenté Tron comme un allié dans Kingdom Hearts II. Le joueur qui retrouve le personnage dans Dream Drop Distance le retrouve donc en ennemi muet, méconnaissable sous son casque. Cette corruption d'un ami par la réécriture de son identité rejoint les thèmes de possession et de perte de soi qui dominent cet épisode.",
          "In Tron: Legacy, Rinzler is CLU's masked champion: a silent warrior wielding twin identity discs, revealed in the course of the story to be none other than Tron, the security program forcibly reprogrammed after trying to oppose the coup.\n\nKingdom Hearts exploits that reversal to the full, because the series had already presented Tron as an ally in Kingdom Hearts II. A player meeting the character again in Dream Drop Distance meets him as a mute enemy, unrecognisable under his helmet. This corruption of a friend by the rewriting of his identity ties into the themes of possession and loss of self that dominate this instalment.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Rinzler poursuit Sora et Sam à travers la Grille et les affronte à plusieurs reprises, sans jamais prononcer un mot. Sora, qui pressent quelque chose de familier chez lui, tente de raviver ses souvenirs pendant le combat, comme il l'a fait avec d'autres amis perdus.\n\nRiku l'affronte à son tour dans sa propre version du monde. Sous la pression, la mémoire de Tron commence à remonter et Rinzler hésite face à CLU. Le tyran, constatant la faille, le précipite dans la Mer de simulation, où son identité est réinitialisée. Le personnage disparaît sans que la série ne montre son rétablissement, laissant en suspens le sort du Tron que Sora avait connu.",
          "Rinzler pursues Sora and Sam across the Grid and fights them several times, never speaking a word. Sora, sensing something familiar in him, tries to stir his memories during the battle, as he has done with other lost friends.\n\nRiku faces him in turn in his own version of the world. Under pressure, Tron's memories begin to surface and Rinzler hesitates before CLU. The tyrant, seeing the flaw, hurls him into the Sea of Simulation, where his identity is reset. The character vanishes without the series showing his recovery, leaving the fate of the Tron Sora once knew unresolved.",
        ),
      },
    ],
    trivia: [
      L("Le Tron allié de Kingdom Hearts II et le Rinzler de Dream Drop Distance appartiennent à deux mondes distincts : Space Paranoids et La Grille.", "The friendly Tron of Kingdom Hearts II and the Rinzler of Dream Drop Distance belong to two separate worlds: Space Paranoids and The Grid."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Rinzler", url: "https://kingdomhearts.fandom.com/wiki/Rinzler" }],
  },

  // ─────────────────────── Terre des Lions ───────────────────────
  "nala": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Amie d'enfance de Simba dans Le Roi lion (1994), Nala grandit sous le règne de Scar, qui laisse la Terre des Lions se dessécher et s'allie aux hyènes. Devenue adulte, elle quitte le territoire pour chercher de l'aide et retrouve par hasard Simba, qu'elle croyait mort, vivant dans une oasis avec Timon et Pumbaa.\n\nKingdom Hearts II reprend cette trame sans la modifier. Nala y est le personnage qui fait le lien entre l'exil de Simba et la reconquête du royaume : sans elle, le lion resterait dans sa jungle. La série l'utilise également comme relais du thème de Sora dans ce monde — assumer une responsabilité que l'on préférerait fuir — au moment où le garçon lui-même s'interroge sur sa place.",
          "Simba's childhood friend in The Lion King (1994), Nala grows up under Scar's reign as he lets the Pride Lands wither and allies himself with the hyenas. As an adult she leaves the territory to seek help and by chance finds Simba, whom she believed dead, living in an oasis with Timon and Pumbaa.\n\nKingdom Hearts II takes up this framework unchanged. Nala is the character linking Simba's exile to the reconquest of the kingdom: without her, the lion would stay in his jungle. The series also uses her to carry the world's theme for Sora — taking on a responsibility one would rather flee — at the very moment the boy is questioning his own place.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo arrivent à la Terre des Lions transformés en animaux — Sora en lionceau, Donald en oiseau, Dingo en tortue — et rencontrent Nala, qui les prend d'abord pour des intrus. Elle leur explique que Scar règne sur un territoire mourant et qu'elle cherche du secours.\n\nElle les conduit jusqu'à l'oasis où vit Simba, le presse de revenir assumer sa place, et se heurte à son refus. Une fois Simba décidé, elle combat à ses côtés au Rocher des Lions contre les hyènes et les Sans-cœur. Après la chute de Scar, elle règne avec lui, et se trouve confrontée lors de la seconde visite au fantôme de Scar, que la culpabilité de Simba maintient en vie.",
          "Sora, Donald and Goofy arrive in the Pride Lands transformed into animals — Sora a lion cub, Donald a bird, Goofy a tortoise — and meet Nala, who first takes them for intruders. She explains that Scar rules a dying territory and that she is looking for help.\n\nShe leads them to the oasis where Simba lives, presses him to come back and take his place, and meets his refusal. Once Simba resolves to return, she fights at his side at Pride Rock against the hyenas and the Heartless. After Scar's fall she rules with him, and during the second visit she is confronted with Scar's ghost, kept alive by Simba's guilt.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Nala", url: "https://kingdomhearts.fandom.com/wiki/Nala" }],
  },

  "rafiki": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Rafiki est le vieux mandrill chaman du Roi lion : c'est lui qui présente Simba nouveau-né aux animaux du royaume et qui, des années plus tard, décèle par ses signes que l'héritier est toujours vivant. Il pousse le lion adulte à affronter son passé plutôt qu'à le fuir, avec sa formule sur le passé qui fait mal mais dont on peut apprendre.\n\nKingdom Hearts II conserve ce rôle de guide spirituel. Dans une série où la mémoire, le remords et les fantômes du passé sont des mécaniques narratives constantes, Rafiki est le personnage Disney qui les formule le plus directement. Il perçoit aussi la nature véritable de Sora et de ses amis, malgré leur apparence animale.",
          "Rafiki is the old mandrill shaman of The Lion King: he presents the newborn Simba to the kingdom's animals and, years later, reads in his signs that the heir is still alive. He pushes the grown lion to face his past rather than run from it, with his line about the past hurting but being something one can learn from.\n\nKingdom Hearts II keeps that role of spiritual guide. In a series where memory, remorse and the ghosts of the past are constant narrative mechanics, Rafiki is the Disney character who states them most directly. He also perceives the true nature of Sora and his friends, despite their animal forms.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Rafiki observe l'arrivée de Sora, Donald et Dingo avec méfiance, puis reconnaît en eux autre chose que des animaux de la savane. Il sent que Simba est vivant et guide Nala et le groupe vers lui, puis pousse le lion à retourner au Rocher des Lions.\n\nLors de la seconde visite du monde, Simba, devenu roi, est hanté par un fantôme de Scar qui le suit partout et ronge sa confiance. Rafiki aide Sora à comprendre que cette apparition n'est pas une résurrection mais le produit des doutes de Simba lui-même : c'est en acceptant son passé que le roi la fait disparaître. La leçon vaut aussi pour Sora, confronté au même moment à ses propres souvenirs incertains.",
          "Rafiki watches the arrival of Sora, Donald and Goofy with suspicion, then recognises them as something other than savannah animals. He senses that Simba is alive and guides Nala and the group to him, then urges the lion to return to Pride Rock.\n\nDuring the world's second visit, Simba, now king, is haunted by a ghost of Scar that follows him everywhere and eats away at his confidence. Rafiki helps Sora understand that this apparition is not a resurrection but the product of Simba's own doubts: it is by accepting his past that the king makes it vanish. The lesson applies to Sora too, facing his own uncertain memories at that same moment.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Rafiki", url: "https://kingdomhearts.fandom.com/wiki/Rafiki" }],
  },
};
