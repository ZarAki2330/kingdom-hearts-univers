import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des concepts : notions, organisations et objets emblématiques.
 * Les sections sont organisées de façon thématique, avec un `game` quand la section
 * porte réellement sur un épisode précis. Les clés sont les slugs des entrées de concepts.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Kingdom Hearts ───────────────────────────
  "kingdom-hearts-heart": {
    sections: [
      {
        title: L("Le cœur de tous les mondes", "The heart of all worlds"),
        text: L(
          "Kingdom Hearts n'est pas un lieu mais une source : le cœur de tous les mondes, formé de la lumière contenue dans chaque cœur individuel. La saga le représente le plus souvent comme une immense lune en forme de cœur, suspendue au-dessus d'un domaine intermédiaire, mais sa nature réelle reste volontairement floue. Ce qu'on en sait tient surtout à ce que chacun croit y trouver.\n\nC'est précisément là que réside son rôle narratif : Kingdom Hearts fonctionne comme un miroir. Ansem, Chercheur des Ténèbres, est convaincu qu'il est fait de ténèbres et que tout est né d'elles. Xemnas y voit la promesse d'un cœur pour les Similis. Le Maître Xehanort, lui, veut l'ouvrir pour rebattre les cartes de l'existence. Aucun ne se contente de le contempler : tous cherchent une clé pour l'atteindre, ce qui explique que l'arme centrale de la série soit précisément une clé.\n\nLes textes de la saga associent aussi Kingdom Hearts à un « livre » et à une mémoire du monde : le fermer, l'ouvrir ou le vider revient toujours à décider du sort de tous les mondes en même temps.",
          "Kingdom Hearts is not a place but a source: the heart of all worlds, formed from the light held in every individual heart. The saga most often depicts it as an enormous heart-shaped moon hanging over an in-between realm, though its true nature is deliberately left vague. What we know of it comes mostly from what each character believes they will find there.\n\nThat is exactly its narrative function: Kingdom Hearts works as a mirror. Ansem, Seeker of Darkness, is convinced it is made of darkness and that everything began there. Xemnas sees in it the promise of a heart for Nobodies. Master Xehanort wants to open it in order to reshuffle existence itself. None of them is content to merely look at it: all of them seek a key to reach it, which is why the series' central weapon is precisely a key.\n\nThe saga also ties Kingdom Hearts to a “book” and to the memory of the world: closing it, opening it or emptying it always amounts to deciding the fate of every world at once.",
        ),
      },
      {
        title: L("La lumière perdue de l'Âge des Fées", "The lost light of the Age of Fairy Tales"),
        text: L(
          "À l'Âge des Fées, avant que le monde ne se fragmente, Kingdom Hearts est protégé par la χ-blade, l'arme originelle. Les Unions de Porteurs se disputent la lumière ; leur guerre brise la χ-blade en vingt fragments et laisse Kingdom Hearts hors de portée, dissimulé derrière les ténèbres. Le monde unique éclate alors en une multitude de mondes séparés par des murs.\n\nCe que la Guerre des Keyblades détruit vraiment, c'est l'accès direct à cette lumière. Le peu qui subsiste est préservé dans le cœur de sept jeunes filles, les Princesses de Cœur, dont la réunion peut rouvrir un chemin vers Kingdom Hearts. Toute la saga découle de cette perte : chaque antagoniste tente de refaire, par un moyen différent, ce que les Porteurs de l'Âge des Fées ont raté.",
          "In the Age of Fairy Tales, before the world was fragmented, Kingdom Hearts is guarded by the χ-blade, the original weapon. The Unions of wielders fight over the light; their war shatters the χ-blade into twenty fragments and leaves Kingdom Hearts out of reach, hidden behind darkness. The single world then bursts into a multitude of worlds separated by walls.\n\nWhat the Keyblade War really destroys is direct access to that light. What little remains is preserved in the hearts of seven maidens, the Princesses of Heart, whose gathering can reopen a path to Kingdom Hearts. The whole saga follows from that loss: every antagonist tries, by a different means, to achieve what the wielders of the Age of Fairy Tales failed to do.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Dans le premier jeu, Kingdom Hearts prend la forme d'une porte, au Bout du Monde, que la Serrure Ultime ouvre lorsque les cœurs des sept Princesses sont réunis à la Forteresse Oubliée. Ansem y voit l'aboutissement de sa quête : il est persuadé que derrière ce seuil se trouvent les ténèbres primordiales dont tout est issu, et il fait de Riku puis de son propre corps l'instrument de cette ouverture.\n\nQuand la porte s'entrouvre enfin, ce n'est pas l'obscurité qui en jaillit mais une lumière aveuglante qui détruit Ansem. Sora, Donald et Dingo entreprennent alors de la refermer, aidés de l'autre côté par le roi Mickey et Riku, restés dans le Domaine des Ténèbres. La scène pose la règle qui gouvernera la série entière : Kingdom Hearts n'est ni bon ni mauvais, il renvoie à celui qui l'atteint ce qu'il porte en lui.",
          "In the first game, Kingdom Hearts takes the form of a door at the End of the World, opened by the Final Keyhole once the hearts of the seven Princesses are gathered at Hollow Bastion. Ansem sees it as the culmination of his quest: he is convinced that beyond that threshold lies the primordial darkness everything came from, and he makes Riku, then his own body, the instrument of that opening.\n\nWhen the door finally cracks open, what pours out is not darkness but a blinding light that destroys Ansem. Sora, Donald and Goofy then set about closing it, helped from the other side by King Mickey and Riku, who remain in the Realm of Darkness. The scene establishes the rule that will govern the entire series: Kingdom Hearts is neither good nor evil, it returns to whoever reaches it what they carry within.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "L'Organisation XIII ne cherche pas le Kingdom Hearts originel : elle en fabrique un. Chaque Sans-cœur détruit par une Keyblade libère un cœur, et l'Organisation manipule Sora pour qu'il en libère par milliers, les agrégeant en une lune en forme de cœur au-dessus du Monde qui n'existe pas. Xemnas promet à ses membres qu'en l'absorbant ils redeviendront complets.\n\nAnsem le Sage tente de détruire ce Kingdom Hearts artificiel avec une machine capable de le convertir en données ; l'appareil sature et explose, dispersant l'homme et endommageant gravement l'édifice. Sora achève le travail en affrontant Xemnas au sommet de la forteresse. Les révélations ultérieures montreront que Xemnas n'a jamais cru à sa propre promesse : ce Kingdom Hearts n'était qu'un moyen de forger des réceptacles pour le cœur de Xehanort.",
          "Organization XIII does not look for the original Kingdom Hearts: it manufactures one. Every Heartless destroyed by a Keyblade releases a heart, and the Organization manipulates Sora into releasing them by the thousand, gathering them into a heart-shaped moon above The World That Never Was. Xemnas promises his members that absorbing it will make them whole again.\n\nAnsem the Wise tries to destroy this artificial Kingdom Hearts with a machine meant to convert it into data; the device overloads and explodes, scattering the man and badly damaging the structure. Sora finishes the job by facing Xemnas atop the fortress. Later revelations show Xemnas never believed his own promise: this Kingdom Hearts was only a way to forge vessels for Xehanort's heart.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Nécropole des Keyblades, le Maître Xehanort met en scène la seconde Guerre des Keyblades : sept Gardiens de la Lumière contre treize Chercheurs des Ténèbres, le choc censé reforger la χ-blade. Il y parvient, s'empare de l'arme et ouvre Kingdom Hearts au sommet du Pic du Destin, avec l'intention de dissoudre l'ordre existant et de recommencer le monde selon son propre jugement.\n\nSora, Donald et Dingo l'affrontent au seuil même de la lumière. Vaincu, Xehanort finit par confier la χ-blade à Sora et par admettre son erreur ; Eraqus, revenu par le cœur de Terra, l'emmène. Kingdom Hearts est refermé, et la lumière qu'il contenait retourne au monde. La conclusion de la Saga de Xehanort remet la question au repos sans jamais dévoiler entièrement ce que Kingdom Hearts est réellement.",
          "At the Keyblade Graveyard, Master Xehanort stages the second Keyblade War: seven Guardians of Light against thirteen Seekers of Darkness, the clash meant to reforge the χ-blade. He succeeds, seizes the weapon and opens Kingdom Hearts atop the Skein of Severance, intending to dissolve the existing order and begin the world again according to his own judgement.\n\nSora, Donald and Goofy face him on the very threshold of that light. Defeated, Xehanort ends up entrusting the χ-blade to Sora and admitting his error; Eraqus, returned through Terra's heart, leads him away. Kingdom Hearts is closed again and the light it held returns to the world. The end of the Dark Seeker Saga puts the question to rest without ever fully revealing what Kingdom Hearts truly is.",
        ),
      },
    ],
    trivia: [
      L(
        "Le titre de la série vient du nom de cette entité, imaginé par Tetsuya Nomura dès les premières discussions avec Disney.",
        "The series' title comes from the name of this entity, devised by Tetsuya Nomura from the earliest discussions with Disney.",
      ),
      L(
        "La chanson-thème de chaque épisode principal, interprétée par Hikaru Utada, accompagne systématiquement les scènes où Kingdom Hearts apparaît.",
        "The theme song of each main entry, performed by Hikaru Utada, consistently accompanies the scenes where Kingdom Hearts appears.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Kingdom Hearts (realm)", url: "https://kingdomhearts.fandom.com/wiki/Kingdom_Hearts_(realm)" },
    ],
  },

  // ─────────────────────────── Keyblade ───────────────────────────
  "keyblade": {
    sections: [
      {
        title: L("Une arme qui choisit son porteur", "A weapon that chooses its wielder"),
        text: L(
          "La Keyblade est une arme en forme de clé, apparue dès la première scène jouable de la saga et devenue son emblème. Elle n'est pas un simple objet : elle se matérialise et disparaît à volonté, revient dans la main de son porteur lorsqu'on la lui arrache, et ne se laisse pas manier par n'importe qui. Selon la formule reprise dans plusieurs épisodes, ce n'est pas le porteur qui choisit la Keyblade, mais la Keyblade qui choisit son porteur.\n\nSes pouvoirs dépassent le combat. Elle ouvre et ferme n'importe quelle serrure, y compris les serrures des cœurs et celles des mondes, ce qui en fait l'unique moyen de protéger un monde de la dévoration par les ténèbres. Elle libère le cœur emprisonné dans un Sans-cœur, là où une arme ordinaire ne fait que le détruire. Une Keyblade peut aussi, à l'inverse, arracher un cœur : la Keyblade des cœurs des Princesses, forgée par Ansem, sert exactement à cela dans le premier jeu.\n\nSa forme varie selon les porte-bonheurs, les liens et les mondes visités, ce qui explique la profusion de modèles au fil de la série.",
          "The Keyblade is a key-shaped weapon, present from the saga's very first playable scene and now its emblem. It is no ordinary object: it materialises and vanishes at will, returns to its wielder's hand when torn away, and cannot be handled by just anyone. As several games put it, the wielder does not choose the Keyblade — the Keyblade chooses the wielder.\n\nIts powers go well beyond combat. It opens and closes any lock, including the locks of hearts and of worlds, which makes it the only means of protecting a world from being devoured by darkness. It frees the heart imprisoned inside a Heartless, where an ordinary weapon merely destroys it. Conversely a Keyblade can also tear a heart out: the Keyblade of People's Hearts forged by Ansem does exactly that in the first game.\n\nIts shape varies with charms, bonds and the worlds visited, which explains the profusion of designs across the series.",
        ),
      },
      {
        title: L("Héritage, Épreuve de Maîtrise et forgeage", "Inheritance, Mark of Mastery and forging"),
        text: L(
          "Le pouvoir se transmet par la cérémonie d'héritage : un porteur confie sa Keyblade à un candidat, qui reçoit alors la capacité d'invoquer la sienne. Terra procède ainsi avec Riku aux Îles du Destin, et Aqua avec Kairi, ce qui explique rétrospectivement pourquoi ces deux-là finiront par manier une Keyblade. Un cœur peut aussi en hériter par contact direct, comme Sora recevant celui de Riku.\n\nUn porteur devient Maître en réussissant l'Épreuve de Maîtrise, un examen supervisé par un ou deux Maîtres confirmés : Terra et Aqua l'affrontent sous le regard d'Eraqus et de Xehanort, Sora et Riku sous celui de Yen Sid. L'épreuve juge moins la puissance que la maîtrise des ténèbres intérieures, ce qui vaut à Terra puis à Sora d'échouer.\n\nUne Keyblade peut enfin être forgée : la Contrée du Départ conserve cet art, et le Maître Xehanort en fait usage. La χ-blade, elle, n'est pas une Keyblade ordinaire mais l'original dont toutes les autres sont des copies imparfaites.",
          "The power is passed on through the inheritance ceremony: a wielder entrusts their Keyblade to a candidate, who then gains the ability to summon one of their own. Terra does this with Riku on Destiny Islands, and Aqua with Kairi, which explains in hindsight why both eventually wield a Keyblade. A heart can also inherit one through direct contact, as Sora does from Riku.\n\nA wielder becomes a Master by passing the Mark of Mastery, an exam overseen by one or two established Masters: Terra and Aqua take it under the eyes of Eraqus and Xehanort, Sora and Riku under Yen Sid's. The exam tests mastery over inner darkness rather than raw power, which is why Terra and later Sora fail it.\n\nA Keyblade can also be forged: the Land of Departure preserves that craft, and Master Xehanort makes use of it. The χ-blade, however, is no ordinary Keyblade but the original of which all others are imperfect copies.",
        ),
      },
      {
        title: L("Keyblades de lumière, de ténèbres et de rêve", "Keyblades of light, darkness and dream"),
        text: L(
          "Il existe des Keyblades pour chaque domaine. Celles du Domaine de la Lumière, comme la Chaîne Royale de Sora, sont les plus fréquentes ; le Domaine des Ténèbres possède la sienne, la Chaîne Royale D que Mickey part chercher et manie dans le Domaine des Ténèbres. Riku, longtemps partagé, finit par obtenir la Voie de l'Aube, née de son choix d'assumer les ténèbres sans y céder.\n\nLes Keyblades des cœurs, comme celle d'Ansem, arrachent au lieu d'ouvrir. Les armes de la Contrée du Départ se transforment en planeur pour voyager entre les mondes, et le Maître Xehanort utilise une Keyblade sans nom transmise de main en main depuis l'Âge des Fées. Les porte-clés modifient l'apparence et les propriétés de l'arme, et Kingdom Hearts III introduit les transformations, qui font passer une même Keyblade par plusieurs formes en plein combat.",
          "There are Keyblades for each realm. Those of the Realm of Light, like Sora's Kingdom Key, are the most common; the Realm of Darkness has its own, the Kingdom Key D that Mickey seeks and wields there. Riku, long torn between the two, eventually gains Way to the Dawn, born from his choice to accept darkness without surrendering to it.\n\nKeyblades of hearts, like Ansem's, tear open rather than unlock. Land of Departure weapons transform into gliders for travelling between worlds, and Master Xehanort uses a No Name Keyblade handed down since the Age of Fairy Tales. Keychains change the weapon's look and properties, and Kingdom Hearts III introduces transformations, letting a single Keyblade shift through several forms mid-battle.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Union χ montre l'époque où les Keyblades étaient innombrables. À l'Âge des Fées, les cinq Unions rassemblent des armées entières de Porteurs, chacun formé par un Prophète et envoyé collecter la Lux, la lumière du monde. La Keyblade y est un outil de masse autant qu'une arme, et les modèles se comptent par centaines.\n\nCette abondance rend la Guerre des Keyblades d'autant plus dévastatrice. Après le conflit, le Nécropole des Keyblades se couvre d'armes plantées dans le sol, vestiges des porteurs tombés : une image que Birth by Sleep puis Kingdom Hearts III reprennent comme signature visuelle de la saga. La rareté des Porteurs à l'époque de Sora contraste directement avec cette profusion perdue.",
          "Union χ shows the era when Keyblades were countless. In the Age of Fairy Tales, the five Unions gather whole armies of wielders, each trained by a Foreteller and sent to collect Lux, the light of the world. The Keyblade there is a mass tool as much as a weapon, and the models number in the hundreds.\n\nThat abundance makes the Keyblade War all the more devastating. After the conflict, the Keyblade Graveyard is covered in weapons planted in the ground, the remains of fallen wielders: an image Birth by Sleep and later Kingdom Hearts III reuse as a visual signature of the saga. The scarcity of wielders in Sora's era stands in direct contrast with that lost profusion.",
        ),
      },
    ],
    trivia: [
      L(
        "Sora manie la Chaîne Royale dans presque tous les épisodes ; son design a été conçu pour rester lisible même en petite taille à l'écran.",
        "Sora wields the Kingdom Key in nearly every entry; its design was made to stay readable even at small on-screen sizes.",
      ),
      L(
        "Kingdom Hearts III est le premier épisode à permettre de changer de Keyblade en plein combat grâce au système de transformations.",
        "Kingdom Hearts III is the first entry allowing the player to swap Keyblades mid-combat thanks to the transformation system.",
      ),
      L(
        "La χ-blade et la Keyblade se prononcent de la même façon en anglais, ce qui a longtemps entretenu la confusion voulue par les scénaristes.",
        "The χ-blade and the Keyblade are pronounced identically in English, sustaining a confusion the writers intended.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Keyblade", url: "https://kingdomhearts.fandom.com/wiki/Keyblade" },
    ],
  },

  // ─────────────────────────── Organisation XIII ───────────────────────────
  "organization-xiii": {
    sections: [
      {
        title: L("Naissance des Similis en manteau noir", "Birth of the black-coated Nobodies"),
        text: L(
          "L'Organisation XIII naît d'un accident scientifique. Au Jardin Radieux, six apprentis d'Ansem le Sage — Xehanort, Braig, Dilan, Even, Aeleus et Ienzo — mènent des expériences interdites sur le cœur, jusqu'à se plonger eux-mêmes dans les ténèbres. Leurs cœurs perdus, leurs corps et leurs âmes survivent sous forme de Similis, dotés d'une conscience intacte mais, disent-ils, privés d'émotions.\n\nXemnas, le Simili de Xehanort, prend la tête du groupe et lui donne son nom, son uniforme — le manteau noir qui protège des ténèbres — et sa hiérarchie numérotée. Chaque membre reçoit un nom formé de son nom d'origine augmenté d'un X : Lea devient Axel, Isa devient Saïx, Ienzo devient Zexion. Le recrutement s'étend ensuite à d'autres Similis nés ailleurs, jusqu'à atteindre treize membres, chiffre choisi bien avant qu'on en comprenne la raison.",
          "Organization XIII is born of a scientific accident. In Radiant Garden, six of Ansem the Wise's apprentices — Xehanort, Braig, Dilan, Even, Aeleus and Ienzo — carry out forbidden experiments on the heart until they plunge themselves into darkness. With their hearts lost, their bodies and souls survive as Nobodies, their minds intact but, so they claim, stripped of emotion.\n\nXemnas, Xehanort's Nobody, takes charge of the group and gives it its name, its uniform — the black coat that shields from darkness — and its numbered hierarchy. Each member receives a name made of their original one plus an X: Lea becomes Axel, Isa becomes Saïx, Ienzo becomes Zexion. Recruitment then extends to Nobodies born elsewhere, until thirteen members are reached, a number chosen long before anyone understands why.",
        ),
      },
      {
        title: L("La promesse d'un cœur", "The promise of a heart"),
        text: L(
          "Le discours officiel de l'Organisation tient en une phrase : ses membres veulent redevenir complets. Pour cela, Xemnas leur ordonne de récolter des cœurs en envoyant les Sans-cœur au combat contre un Porteur de Keyblade, chaque destruction libérant un cœur qui rejoint le Kingdom Hearts artificiel en construction.\n\nCette promesse est un mensonge utile. Xemnas sait que ses subordonnés sont d'abord des corps disponibles, destinés à recevoir des fragments du cœur du Maître Xehanort. Saïx et Xigbar, seuls dans la confidence, écartent méthodiquement les membres jugés inutiles : le lot envoyé au Manoir Oblivion est délibérément sacrifié, Roxas et Xion sont surveillés comme des expériences, Axel manipulé.\n\nCette double vérité explique la tonalité particulière du groupe. Les membres jouent l'indifférence, se disent incapables de ressentir, mais agissent par jalousie, ambition ou attachement — et plusieurs d'entre eux mourront en découvrant qu'ils tenaient à quelque chose.",
          "The Organization's official line fits in one sentence: its members want to become whole again. To that end Xemnas orders them to harvest hearts by sending Heartless against a Keyblade wielder, each destruction releasing a heart that joins the artificial Kingdom Hearts under construction.\n\nThat promise is a useful lie. Xemnas knows his subordinates are first and foremost available bodies, meant to receive fragments of Master Xehanort's heart. Saïx and Xigbar, the only ones in on it, methodically weed out the members judged useless: the batch sent to Castle Oblivion is deliberately sacrificed, Roxas and Xion are watched like experiments, Axel is manipulated.\n\nThat double truth explains the group's peculiar tone. Members play at indifference and claim they cannot feel, yet act out of jealousy, ambition or attachment — and several of them die discovering they cared about something after all.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Le joueur découvre l'Organisation au Manoir Oblivion. Six membres y opèrent — Marluxia, Larxene, Zexion, Lexaeus, Vexen et Axel — dans une lutte de pouvoir interne : Marluxia entend se servir de Sora, dont Naminé réécrit les souvenirs, pour renverser Xemnas.\n\nAxel, chargé en réalité d'éliminer les traîtres, joue double jeu, élimine Vexen puis laisse Sora et Riku faire le reste. Le manoir se vide de ses occupants et l'Organisation perd d'un coup près de la moitié de ses effectifs, sans que Xemnas s'en émeuve. C'est aussi ici qu'apparaissent le manteau noir, les portails de ténèbres et les Similis comme espèce, éléments qui structureront tout Kingdom Hearts II.",
          "The player discovers the Organization at Castle Oblivion. Six members operate there — Marluxia, Larxene, Zexion, Lexaeus, Vexen and Axel — amid an internal power struggle: Marluxia intends to use Sora, whose memories Naminé rewrites, to overthrow Xemnas.\n\nAxel, actually tasked with eliminating traitors, plays a double game, kills Vexen and lets Sora and Riku do the rest. The castle empties of its occupants and the Organization loses nearly half its ranks at a stroke, without Xemnas showing concern. This is also where the black coat, the corridors of darkness and Nobodies as a species first appear, elements that will structure all of Kingdom Hearts II.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Un an plus tard, l'Organisation est l'adversaire principal. Ses membres restants apparaissent d'un monde à l'autre pour surveiller Sora, provoquer des Sans-cœur et faire progresser leur récolte de cœurs. Le Monde qui n'existe pas, leur forteresse, flotte dans un domaine intermédiaire sous la lune en forme de cœur qu'ils ont bâtie.\n\nLes membres tombent un à un face à Sora, jusqu'au duel final contre Xemnas. Certaines de ces morts pèsent : Axel se sacrifie pour ouvrir un passage à Sora, Saïx meurt en évoquant un souvenir qu'il prétendait ne pas avoir. Le Kingdom Hearts artificiel est en partie détruit par la machine d'Ansem le Sage, puis définitivement perdu. La première Organisation cesse d'exister — mais ses membres, redevenus complets ou promis à un retour, reviendront tous d'une façon ou d'une autre.",
          "A year later, the Organization is the main antagonist. Its remaining members show up from world to world to watch Sora, stir up Heartless and advance their harvest of hearts. The World That Never Was, their fortress, floats in an in-between realm beneath the heart-shaped moon they have built.\n\nThe members fall one by one to Sora, up to the final duel against Xemnas. Some of these deaths carry weight: Axel sacrifices himself to open a path for Sora, Saïx dies invoking a memory he claimed not to have. The artificial Kingdom Hearts is partly destroyed by Ansem the Wise's machine, then lost for good. The first Organization ceases to exist — but its members, whether recompleted or promised a return, all come back one way or another.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Dream Drop Distance révèle la véritable Organisation XIII. Le Jeune Xehanort, tiré du passé, réunit dans le Monde qui n'existe pas treize réceptacles destinés à recevoir chacun un fragment du cœur du Maître Xehanort. Le but n'est plus d'obtenir un cœur, mais de constituer les treize ténèbres nécessaires à la reforge de la χ-blade face à sept lumières.\n\nLa nouvelle Organisation n'est donc plus faite de Similis mais d'incarnations de Xehanort : versions passées, hôtes possédés, membres ressuscités. Le piège tendu à Sora pendant l'Épreuve de Maîtrise vise à faire de lui le treizième réceptacle ; Riku, Lea et Mickey l'en arrachent de justesse. Xehanort repart en annonçant que le compte sera complet le moment venu.",
          "Dream Drop Distance reveals the true Organization XIII. Young Xehanort, drawn from the past, gathers in The World That Never Was thirteen vessels each meant to receive a fragment of Master Xehanort's heart. The goal is no longer to obtain a heart but to assemble the thirteen darknesses needed to reforge the χ-blade against seven lights.\n\nThe new Organization is therefore no longer made of Nobodies but of incarnations of Xehanort: past versions, possessed hosts, resurrected members. The trap laid for Sora during the Mark of Mastery aims to make him the thirteenth vessel; Riku, Lea and Mickey tear him free just in time. Xehanort departs announcing the count will be complete when the time comes.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "La véritable Organisation XIII est enfin au complet au Nécropole des Keyblades. Elle mêle d'anciens Similis rendus à leur rôle — Xigbar, Saïx, Luxord, Marluxia, Larxene, Vexen, Xemnas — à des incarnations de Xehanort et à Vanitas. Chacun affronte les Gardiens de la Lumière dans un enchaînement de duels.\n\nPlusieurs membres se retournent en cours de route : Vexen a déjà transmis un réplica au camp adverse, Marluxia et Larxene se laissent vaincre sans conviction, Saïx meurt réconcilié avec Lea et Xion. Xigbar révèle enfin qu'il est Luxu, envoyé depuis l'Âge des Fées pour observer, et se laisse tomber une fois sa mission accomplie. L'Organisation disparaît avec Xehanort, refermant la Saga du Chercheur des Ténèbres.",
          "The true Organization XIII is finally complete at the Keyblade Graveyard. It mixes former Nobodies restored to their roles — Xigbar, Saïx, Luxord, Marluxia, Larxene, Vexen, Xemnas — with incarnations of Xehanort and with Vanitas. Each faces the Guardians of Light in a chain of duels.\n\nSeveral members turn along the way: Vexen has already passed a replica to the other side, Marluxia and Larxene let themselves be beaten without conviction, Saïx dies reconciled with Lea and Xion. Xigbar finally reveals he is Luxu, sent from the Age of Fairy Tales to observe, and lets himself fall once his mission is done. The Organization vanishes with Xehanort, closing the Dark Seeker Saga.",
        ),
      },
    ],
    trivia: [
      L(
        "Tous les noms de membres sont des anagrammes de leur nom d'origine avec un X ajouté : Xemnas vient d'Ansem, Roxas de Sora.",
        "Every member's name is an anagram of their original name plus an X: Xemnas comes from Ansem, Roxas from Sora.",
      ),
      L(
        "Le manteau noir n'est pas un simple uniforme : il protège des effets corrosifs des ténèbres lors des voyages par les portails.",
        "The black coat is not merely a uniform: it protects from the corrosive effects of darkness when travelling through corridors.",
      ),
      L(
        "Kingdom Hearts II Final Mix ajoute les combats contre les membres du Manoir Oblivion, absents de la version originale.",
        "Kingdom Hearts II Final Mix adds the battles against the Castle Oblivion members, absent from the original release.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Organization XIII", url: "https://kingdomhearts.fandom.com/wiki/Organization_XIII" },
    ],
  },

  // ─────────────────────────── Gardiens de la Lumière ───────────────────────────
  "guardians-of-light": {
    sections: [
      {
        title: L("Sept lumières contre treize ténèbres", "Seven lights against thirteen darknesses"),
        text: L(
          "Le principe des Gardiens de la Lumière découle directement de la structure de la χ-blade : sept fragments de lumière, treize de ténèbres. Puisque Xehanort a besoin de treize réceptacles obscurs pour rejouer la Guerre des Keyblades, il lui faut aussi sept porteurs de lumière en face. Yen Sid comprend le piège et décide de le retourner : plutôt que de laisser Xehanort choisir ses adversaires, il réunit lui-même les sept.\n\nLa symétrie est le cœur du problème. Refuser le combat n'est pas une option, puisque Xehanort peut forcer la confrontation ; accepter, c'est jouer son jeu. Les Gardiens partent donc au Nécropole des Keyblades en sachant que leur victoire même risque de servir les plans de leur adversaire. Le nom qu'ils portent renvoie autant à une fonction — protéger la lumière du monde — qu'à un décompte imposé par l'ennemi.",
          "The idea of the Guardians of Light follows directly from the structure of the χ-blade: seven fragments of light, thirteen of darkness. Since Xehanort needs thirteen dark vessels to replay the Keyblade War, he also needs seven bearers of light facing them. Yen Sid sees the trap and decides to turn it around: rather than let Xehanort pick his opponents, he gathers the seven himself.\n\nThe symmetry is the heart of the problem. Refusing the fight is not an option, since Xehanort can force the confrontation; accepting it means playing his game. The Guardians therefore go to the Keyblade Graveyard knowing that their very victory may serve their enemy's plans. Their name refers as much to a function — protecting the world's light — as to a count imposed by the enemy.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "C'est à la Tour Mystérieuse, après l'Épreuve de Maîtrise, que Yen Sid formule le problème. Ayant compris que Xehanort réunit treize ténèbres, il commence à compter les lumières disponibles : Sora, Riku, Mickey, Kairi et Lea, à qui il faut ajouter Aqua, Terra et Ventus s'ils peuvent être retrouvés.\n\nLe recrutement commence aussitôt. Riku est nommé Maître de la Keyblade à l'issue de l'examen ; Kairi et Lea sont envoyés s'entraîner auprès de Merlin ; Sora part reconquérir le pouvoir qu'il a perdu. Le sauvetage des trois porteurs de la Contrée du Départ devient l'objectif central, puisque sans eux le compte ne peut être atteint. Toute la structure de Kingdom Hearts III découle de cette liste dressée dans une pièce ronde au sommet d'une tour.",
          "It is at the Mysterious Tower, after the Mark of Mastery, that Yen Sid frames the problem. Having realised Xehanort is assembling thirteen darknesses, he starts counting the available lights: Sora, Riku, Mickey, Kairi and Lea, to whom must be added Aqua, Terra and Ventus if they can be found.\n\nRecruitment begins at once. Riku is named a Keyblade Master at the end of the exam; Kairi and Lea are sent to train with Merlin; Sora leaves to win back the power he lost. Rescuing the three wielders of the Land of Departure becomes the central objective, since without them the count cannot be met. The whole structure of Kingdom Hearts III follows from that list drawn up in a round room at the top of a tower.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Nécropole des Keyblades, les Gardiens se présentent enfin réunis : Sora, Riku, Mickey, Kairi, Lea, Aqua et Ventus, accompagnés de Donald et Dingo. Le combat tourne mal presque aussitôt. Une Marée Démoniaque, vague colossale de Sans-cœur, engloutit le groupe entier ; Sora se retrouve seul, tous ses compagnons dispersés.\n\nIl remonte alors le fil du temps grâce au pouvoir de l'éveil et ramène chacun d'eux avant l'instant fatal. Les Gardiens reprennent le combat, rejoints par Roxas, Xion, Naminé indirectement et Terra libéré de Xehanort — le groupe dépasse largement les sept prévus. Kairi est frappée par Xehanort et disparaît, ce qui permet malgré tout la reforge de la χ-blade. Après la victoire, les Gardiens se retrouvent aux Îles du Destin, avant que Sora ne s'efface à son tour.",
          "At the Keyblade Graveyard, the Guardians finally stand together: Sora, Riku, Mickey, Kairi, Lea, Aqua and Ventus, joined by Donald and Goofy. The battle goes wrong almost at once. A Demon Tide, a colossal wave of Heartless, engulfs the whole group; Sora finds himself alone, all his companions scattered.\n\nHe then walks back through time with the power of waking and brings each of them back from before the fatal moment. The Guardians resume the fight, joined by Roxas, Xion, indirectly Naminé, and Terra freed from Xehanort — the group far exceeds the intended seven. Kairi is struck down by Xehanort and vanishes, which nonetheless allows the χ-blade to be reforged. After the victory the Guardians gather on Destiny Islands, before Sora in turn fades away.",
        ),
      },
    ],
    trivia: [
      L(
        "Donald et Dingo ne manient pas de Keyblade et ne comptent donc pas parmi les sept, malgré leur présence à toutes les batailles.",
        "Donald and Goofy do not wield Keyblades and so do not count among the seven, despite fighting in every battle.",
      ),
      L(
        "L'affiche promotionnelle de Kingdom Hearts III joue sur le décompte des lumières et des ténèbres bien avant la sortie du jeu.",
        "Kingdom Hearts III's promotional artwork plays on the tally of lights and darknesses well before the game's release.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Guardians of Light", url: "https://kingdomhearts.fandom.com/wiki/Guardians_of_Light" },
    ],
  },

  // ─────────────────────────── Princesses de Cœur ───────────────────────────
  "princesses-of-heart": {
    sections: [
      {
        title: L("Des cœurs sans la moindre ténèbre", "Hearts without a trace of darkness"),
        text: L(
          "Les Princesses de Cœur sont sept jeunes filles dont le cœur ne contient aucune ténèbre. Cette pureté n'est pas une qualité morale mais une propriété : leur cœur ne peut pas être corrompu, ce qui les rend invulnérables à la transformation en Sans-cœur mais aussi extrêmement convoitées. Réunies, leurs sept lumières ouvrent la Serrure Ultime, le passage vers Kingdom Hearts.\n\nLa saga les rattache à la Guerre des Keyblades : lorsque le monde s'est fragmenté, la lumière qui subsistait s'est réfugiée dans le cœur d'enfants, et ces sept-là en sont les héritières. Le groupe rassemble six héroïnes Disney — Blanche-Neige, Cendrillon, Aurore, Belle, Jasmine et Alice — et une héroïne originale, Kairi, dont l'appartenance n'est révélée qu'à la fin du premier jeu. Cette liste explique pourquoi ces mondes précis sont visitables dans Kingdom Hearts.",
          "The Princesses of Heart are seven maidens whose hearts contain no darkness at all. That purity is not a moral quality but a property: their hearts cannot be corrupted, which makes them immune to becoming Heartless yet also fiercely coveted. Gathered together, their seven lights open the Final Keyhole, the passage to Kingdom Hearts.\n\nThe saga ties them to the Keyblade War: when the world fragmented, the light that remained took refuge in the hearts of children, and these seven are its heirs. The group brings together six Disney heroines — Snow White, Cinderella, Aurora, Belle, Jasmine and Alice — and one original character, Kairi, whose membership is only revealed at the end of the first game. That list explains why these particular worlds are visitable in Kingdom Hearts.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dix ans avant Sora, le Maître Xehanort s'intéresse déjà à ces cœurs sans ténèbres. Il pousse Terra, Ventus et Aqua à croiser la route de plusieurs futures Princesses — Blanche-Neige, Cendrillon, Aurore — pour observer ce qui arrive à une lumière pure exposée aux ténèbres. Les trois apprentis les protègent sans savoir ce qu'elles représentent.\n\nAux Îles du Destin, Aqua rencontre une petite Kairi et, pressentant un danger, dépose sur elle un charme de protection en lui confiant sa Keyblade — geste qui fera plus tard de Kairi une Porteuse. C'est aussi Birth by Sleep qui pose l'existence du groupe : Xehanort explique que sept lumières pures et treize ténèbres sont nécessaires pour reforger la χ-blade, énoncé fondateur de toute la suite de la saga.",
          "Ten years before Sora, Master Xehanort is already interested in these hearts without darkness. He steers Terra, Ventus and Aqua into the paths of several future Princesses — Snow White, Cinderella, Aurora — to observe what happens to pure light exposed to darkness. The three apprentices protect them without knowing what they represent.\n\nOn Destiny Islands, Aqua meets a young Kairi and, sensing danger, places a protective charm on her while entrusting her with her Keyblade — a gesture that will later make Kairi a wielder. Birth by Sleep also establishes the group's existence: Xehanort explains that seven pure lights and thirteen darknesses are needed to reforge the χ-blade, the founding statement for everything that follows.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Maléfique, à la tête d'un conseil de méchants Disney installé à la Forteresse Oubliée, fait enlever les Princesses une à une à travers les mondes : Alice au Pays des Merveilles, Jasmine à Agrabah, Belle par Riku. Leurs corps restent inertes, leurs cœurs alimentant la machine censée révéler la Serrure Ultime.\n\nKairi fait exception. Son cœur a quitté son corps aux Îles du Destin et s'est réfugié en Sora, ce qui explique son état comateux et l'absence de Sans-cœur à son image. Pour la libérer, Sora se transperce le cœur avec la Keyblade des cœurs d'Ansem : il devient brièvement un Sans-cœur, et c'est Kairi qui le ramène. La Serrure Ultime s'ouvre malgré tout, et les Princesses maintiennent ensuite la porte des ténèbres assez longtemps pour que Sora puisse la refermer.",
          "Maleficent, leading a council of Disney villains at Hollow Bastion, has the Princesses abducted one by one across the worlds: Alice in Wonderland, Jasmine in Agrabah, Belle by Riku. Their bodies remain inert while their hearts power the machine meant to reveal the Final Keyhole.\n\nKairi is the exception. Her heart left her body on Destiny Islands and took refuge in Sora, which explains her comatose state and the absence of a Heartless in her image. To free her, Sora pierces his own heart with Ansem's Keyblade of People's Hearts: he briefly becomes a Heartless, and it is Kairi who brings him back. The Final Keyhole opens all the same, and the Princesses then hold the door of darkness long enough for Sora to close it.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Puisque Xehanort a besoin de sept lumières pures, la question des Princesses ressurgit. Les sept d'origine ne peuvent plus servir de la même manière, et une nouvelle génération apparaît : les Nouvelles Sept Cœurs, héroïnes des mondes visités dans Kingdom Hearts III — Raiponce, Elsa, Anna, Kairi et d'autres — que Xehanort envisage comme lumières de rechange.\n\nMaléfique et Pat Hibulaire les traquent un temps, avant de se détourner au profit de la boîte noire. Xehanort finit par renoncer à cette voie et se contente des Gardiens que Yen Sid lui a offerts. Le motif reste néanmoins essentiel : il justifie le choix des mondes de l'épisode et rappelle que la lumière du monde continue de se transmettre, génération après génération, à des cœurs qui n'ont rien demandé.",
          "Since Xehanort needs seven pure lights, the question of the Princesses resurfaces. The original seven can no longer serve the same way, and a new generation appears: the New Seven Hearts, heroines of the worlds visited in Kingdom Hearts III — Rapunzel, Elsa, Anna, Kairi and others — whom Xehanort considers as replacement lights.\n\nMaleficent and Pete hunt them for a while before turning instead to the black box. Xehanort eventually abandons that route and settles for the Guardians Yen Sid has handed him. The motif still matters: it justifies the game's choice of worlds and reminds us that the world's light keeps being passed on, generation after generation, to hearts that never asked for it.",
        ),
      },
    ],
    trivia: [
      L(
        "Les six Princesses Disney du groupe viennent toutes de films sortis avant 1993, ce qui reflète le catalogue disponible lors de la conception du premier jeu.",
        "The six Disney Princesses in the group all come from films released before 1993, reflecting the catalogue available when the first game was designed.",
      ),
      L(
        "Alice n'est pas une princesse dans son film d'origine, mais son cœur répond au critère de pureté retenu par la saga.",
        "Alice is not a princess in her original film, yet her heart meets the purity criterion the saga uses.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Princesses of Heart", url: "https://kingdomhearts.fandom.com/wiki/Princess_of_Heart" },
    ],
  },

  // ─────────────────────────── Prophètes ───────────────────────────
  "foretellers": {
    sections: [
      {
        title: L("Cinq masques, cinq Unions", "Five masks, five Unions"),
        text: L(
          "Les Prophètes sont les cinq apprentis à qui le Maître des Maîtres confie la charge du monde avant de disparaître. Ira, Aced, Invi, Gula et Ava portent chacun un masque et un manteau à l'effigie d'un animal, et dirigent une Union de Porteurs : Unicornis, Ursus, Anguis, Leopardos et Vulpes. Leur mission est de collecter la Lux, la lumière du monde, et de la préserver.\n\nChacun reçoit un chapitre du Livre des Prophéties, recueil que le Maître a écrit grâce à l'œil de sa Keyblade, capable de voir l'avenir. Ces extraits ne disent pas la même chose à tous : l'un annonce une trahison parmi eux, un autre la fin du monde par les ténèbres. Le dispositif est conçu pour que chacun n'ait qu'une part de la vérité, ce qui rend la méfiance inévitable et la coopération impossible.",
          "The Foretellers are the five apprentices to whom the Master of Masters entrusts the world before vanishing. Ira, Aced, Invi, Gula and Ava each wear a mask and an animal-themed coat, and lead a Union of wielders: Unicornis, Ursus, Anguis, Leopardos and Vulpes. Their task is to gather Lux, the light of the world, and preserve it.\n\nEach receives a chapter of the Book of Prophecies, a work the Master wrote thanks to the eye of his Keyblade, which can see the future. Those excerpts do not tell them all the same thing: one announces a traitor among them, another the world's end in darkness. The arrangement is designed so that each holds only part of the truth, making distrust inevitable and cooperation impossible.",
        ),
      },
      {
        title: L("Le sixième apprenti", "The sixth apprentice"),
        text: L(
          "Luxu occupe une place à part. Il ne reçoit pas d'Union mais une mission privée : porter la Keyblade du Maître, qui contient l'œil, transmettre une boîte noire scellée et surtout se faire léguer son propre corps de génération en génération afin de traverser les siècles. Sa véritable fonction est d'observer, pour que l'œil enregistre les événements qui permettront au Maître d'écrire le Livre des Prophéties.\n\nLe paradoxe est complet : le livre décrit l'avenir parce que Luxu aura vu cet avenir se produire. Les Prophètes ignorent tout de cet arrangement et cherchent le traître annoncé dans leurs chapitres, ce qui accélère leur rupture. Kingdom Hearts III révèle que Luxu est Xigbar, et donc qu'un membre de l'Organisation observait la saga depuis le premier jour.",
          "Luxu holds a place apart. He receives no Union but a private mission: to carry the Master's Keyblade, which holds the eye, to pass on a sealed black box, and above all to have his own body bequeathed from generation to generation so as to cross the centuries. His true role is to observe, so that the eye records the events that will let the Master write the Book of Prophecies.\n\nThe paradox is complete: the book describes the future because Luxu will have seen that future happen. The Foretellers know nothing of this arrangement and hunt the traitor announced in their chapters, which hastens their falling-out. Kingdom Hearts III reveals that Luxu is Xigbar, and thus that an Organization member had been watching the saga from day one.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Union χ suit la lente désagrégation du groupe. Ira, désigné chef par défaut, veut appliquer le livre à la lettre ; Aced lui reproche sa timidité et forme des alliances de son côté ; Invi tente d'arbitrer ; Gula, seul à connaître le chapitre parlant du traître, garde le silence ; Ava, chargée de former les Unions Croisées, prépare en secret la survie de quelques Porteurs.\n\nLes soupçons se transforment en manœuvres, les manœuvres en affrontements. Chacun finit par lancer son Union contre les autres au Nécropole des Keyblades, persuadé d'agir pour le bien du monde. Les Prophètes disparaissent dans la bataille, laissant derrière eux des Porteurs qui ne comprennent pas pour qui ils meurent. Les Unions Croisées d'Ava et le monde de données conçu par les Renards Chercheurs permettent malgré tout à quelques survivants d'échapper à l'effondrement.",
          "Union χ follows the group's slow disintegration. Ira, leader by default, wants the book applied to the letter; Aced accuses him of timidity and builds alliances of his own; Invi tries to mediate; Gula, the only one who knows the chapter naming a traitor, stays silent; Ava, tasked with forming the Dandelions, secretly prepares for the survival of a few wielders.\n\nSuspicions turn into manoeuvres, manoeuvres into open conflict. Each ends up hurling his Union against the others at the Keyblade Graveyard, convinced he is acting for the world's good. The Foretellers vanish in the battle, leaving behind wielders who do not understand who they are dying for. Ava's Dandelions and the data world built by the Foretellers' allies nevertheless let a handful of survivors escape the collapse.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "L'épilogue de Kingdom Hearts III ramène les Prophètes au premier plan. Dans une ruelle du Bastion Héréditaire, Luxu — Xigbar redevenu lui-même — retrouve Ira, Aced, Invi et Gula, revenus d'une manière que le jeu ne précise pas, et pose devant eux la boîte noire qu'il a portée à travers les siècles.\n\nLa scène ne montre pas son contenu. Les Prophètes constatent seulement que leur maître n'est pas là et que Luxu prétend avoir rempli sa part du contrat. Ava manque à l'appel, ce qui laisse la réunion incomplète. Ce court épilogue rouvre la saga en direction de la Perte du Maître : ce ne sont plus les cœurs de Sora et de ses amis qui sont en jeu, mais un plan tracé bien avant leur naissance.",
          "The Kingdom Hearts III epilogue brings the Foretellers back to the fore. In an alley of Scala ad Caelum, Luxu — Xigbar restored to himself — meets Ira, Aced, Invi and Gula, returned in a way the game does not explain, and sets before them the black box he has carried through the centuries.\n\nThe scene does not show its contents. The Foretellers only note that their master is absent and that Luxu claims to have kept his side of the bargain. Ava is missing, leaving the reunion incomplete. This short epilogue reopens the saga towards the Lost Master Arc: what is at stake is no longer the hearts of Sora and his friends but a plan laid long before they were born.",
        ),
      },
    ],
    trivia: [
      L(
        "Les noms des cinq Prophètes viennent du latin : ira (colère), invidia (envie), gula (gourmandise), acedia (paresse), avaritia (avarice) — cinq des sept péchés capitaux.",
        "The five Foretellers' names come from Latin: ira (wrath), invidia (envy), gula (gluttony), acedia (sloth), avaritia (greed) — five of the seven deadly sins.",
      ),
      L(
        "Chaque Union porte un nom latin d'animal : Unicornis la licorne, Ursus l'ours, Anguis le serpent, Leopardos le léopard, Vulpes le renard.",
        "Each Union bears a Latin animal name: Unicornis the unicorn, Ursus the bear, Anguis the snake, Leopardos the leopard, Vulpes the fox.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Foretellers", url: "https://kingdomhearts.fandom.com/wiki/Foretellers" },
    ],
  },

  // ─────────────────────────── Guerre des Keyblades ───────────────────────────
  "keyblade-war": {
    sections: [
      {
        title: L("Un événement fondateur raconté à l'envers", "A founding event told backwards"),
        text: L(
          "La Guerre des Keyblades est l'événement dont découle la structure même de l'univers de la saga, et la série l'a longtemps évoquée sans la montrer. Kairi en parle la première dans le premier jeu, par le souvenir d'une histoire racontée par sa grand-mère : autrefois le monde était un et baigné de lumière, jusqu'à ce que les hommes se disputent cette lumière et que les ténèbres s'engouffrent dans leurs cœurs.\n\nBirth by Sleep en révèle l'enjeu concret, la χ-blade et Kingdom Hearts, tandis qu'Union χ en fait le terme de son récit. Le conflit produit trois conséquences durables : le monde unique éclate en mondes séparés par des murs, la χ-blade se brise en vingt fragments, et la lumière restante se réfugie dans quelques cœurs purs. Tout ce que fait Xehanort vise à revenir à l'état antérieur.",
          "The Keyblade War is the event from which the very structure of the saga's universe follows, and the series long referred to it without showing it. Kairi mentions it first in the original game, recalling a story her grandmother told: once the world was one and bathed in light, until people fought over that light and darkness poured into their hearts.\n\nBirth by Sleep reveals what was concretely at stake, the χ-blade and Kingdom Hearts, while Union χ makes the war the endpoint of its story. The conflict has three lasting consequences: the single world bursts into worlds separated by walls, the χ-blade shatters into twenty fragments, and the remaining light takes refuge in a few pure hearts. Everything Xehanort does aims at restoring the earlier state.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Union χ montre comment la guerre arrive : non par une invasion, mais par la défiance. Les Prophètes, chacun détenteur d'un fragment de prophétie, soupçonnent l'un des leurs d'être le traître annoncé. Faute de pouvoir en parler franchement, ils accumulent les décisions unilatérales, lèvent des forces, préparent des ripostes.\n\nLa collecte de la Lux, censée préserver la lumière, devient une compétition entre Unions. Les Porteurs de base, qui ne savent rien des chapitres du livre, obéissent à leur chef et finissent par se battre entre camarades. Le Nécropole des Keyblades se remplit de milliers d'armes plantées dans la terre. Ava, prévoyant l'issue, avait formé les Unions Croisées, un groupe de jeunes Porteurs tenus à l'écart du combat pour reconstruire le monde après coup : c'est par eux que la lignée des Porteurs survit.",
          "Union χ shows how the war comes about: not through invasion but through distrust. The Foretellers, each holding a fragment of prophecy, suspect one of their own of being the announced traitor. Unable to speak plainly about it, they pile up unilateral decisions, raise forces, prepare counterstrikes.\n\nThe gathering of Lux, meant to preserve the light, turns into a competition between Unions. Rank-and-file wielders, who know nothing of the book's chapters, obey their leaders and end up fighting their own comrades. The Keyblade Graveyard fills with thousands of weapons planted in the ground. Ava, foreseeing the outcome, had formed the Dandelions, a group of young wielders kept out of the fighting to rebuild the world afterwards: through them the line of wielders survives.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Au Nécropole des Keyblades, le Maître Xehanort explique à Terra, Ventus et Aqua ce qu'il compte faire de cette histoire. La χ-blade ne peut être reforgée que par le choc de la lumière pure et des ténèbres pures ; il a donc extrait les ténèbres du cœur de Ventus pour en faire Vanitas, et attend que les deux moitiés se réunissent.\n\nVentus refuse de servir de pièce et se bat contre Vanitas à l'intérieur même de son cœur, brisant la χ-blade en formation et se vidant de lui-même dans l'opération. La tentative échoue, mais le principe reste posé : provoquer un second conflit permettrait d'atteindre Kingdom Hearts. Le champ de bataille figé, avec ses Keyblades rouillées et son ciel jaune, devient l'un des décors les plus reconnaissables de la série.",
          "At the Keyblade Graveyard, Master Xehanort explains to Terra, Ventus and Aqua what he intends to do with that history. The χ-blade can only be reforged by the clash of pure light and pure darkness; he therefore extracted the darkness from Ventus's heart to make Vanitas, and waits for the two halves to reunite.\n\nVentus refuses to serve as a component and fights Vanitas inside his own heart, shattering the forming χ-blade and emptying himself in the process. The attempt fails, but the principle stands: provoking a second conflict would allow Kingdom Hearts to be reached. The frozen battlefield, with its rusted Keyblades and yellow sky, becomes one of the series' most recognisable settings.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "La seconde Guerre des Keyblades a lieu au même endroit, plusieurs décennies plus tard, avec un dispositif entièrement calculé : sept Gardiens de la Lumière face à treize Chercheurs des Ténèbres, comme le veut la structure de la χ-blade. Xehanort a passé toute sa vie à réunir ces vingt cœurs.\n\nLa bataille commence par une déroute — la Marée Démoniaque disperse les Gardiens — puis reprend après que Sora a remonté le temps. Les duels s'enchaînent jusqu'à ce que les treize ténèbres tombent, ce qui suffit à Xehanort : le choc a eu lieu, la χ-blade se reforge et il l'emporte au Pic du Destin pour ouvrir Kingdom Hearts. Sa défaite finale referme le cycle, mais l'épisode confirme que la guerre n'a jamais eu de vainqueur, seulement des survivants.",
          "The second Keyblade War takes place at the same site decades later, with an entirely calculated arrangement: seven Guardians of Light against thirteen Seekers of Darkness, as the χ-blade's structure requires. Xehanort has spent his whole life assembling those twenty hearts.\n\nThe battle opens with a rout — the Demon Tide scatters the Guardians — then resumes once Sora has turned back time. Duel follows duel until the thirteen darknesses fall, which is all Xehanort needs: the clash has happened, the χ-blade reforges and he carries it to the Skein of Severance to open Kingdom Hearts. His final defeat closes the cycle, but the game confirms the war never had a victor, only survivors.",
        ),
      },
    ],
    trivia: [
      L(
        "Le Nécropole des Keyblades apparaît dès Kingdom Hearts II dans un souvenir, bien avant que Birth by Sleep n'en explique l'origine.",
        "The Keyblade Graveyard already appears in a memory in Kingdom Hearts II, long before Birth by Sleep explains its origin.",
      ),
      L(
        "Le secret ending de Kingdom Hearts II Final Mix, « Birth by Sleep », montre trois porteurs au Cimetière et a lancé des années de spéculation.",
        "The Kingdom Hearts II Final Mix secret ending, “Birth by Sleep”, shows three wielders at the Graveyard and sparked years of speculation.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Keyblade War", url: "https://kingdomhearts.fandom.com/wiki/Keyblade_War" },
    ],
  },

  // ─────────────────────────── Cœur, corps et âme ───────────────────────────
  "heart-body-soul": {
    sections: [
      {
        title: L("Les trois composantes d'un être", "The three components of a being"),
        text: L(
          "La saga décompose chaque être vivant en trois éléments. Le cœur porte les émotions, les souvenirs affectifs, et contient à la fois de la lumière et des ténèbres. Le corps est l'enveloppe physique. L'âme est ce qui anime le corps et lui donne une conscience de soi. Tant que les trois tiennent ensemble, la personne est dite complète.\n\nCette mécanique n'est pas décorative : elle sert de règle du jeu à toute la série. Elle explique pourquoi une Keyblade, qui agit sur les serrures des cœurs, est l'arme centrale ; pourquoi les ténèbres sont un danger physique et pas seulement moral ; et pourquoi la mort, dans cet univers, est rarement définitive. Un cœur peut survivre à la perte de son corps, voyager, se réfugier dans un autre cœur, dormir des années. C'est cette souplesse qui autorise les retours multiples des personnages de la saga.",
          "The saga breaks every living being down into three elements. The heart carries emotions and emotional memories, and holds both light and darkness. The body is the physical shell. The soul is what animates the body and gives it self-awareness. As long as the three hold together, the person is said to be whole.\n\nThis mechanic is not decorative: it acts as the rulebook for the whole series. It explains why a Keyblade, which acts on the locks of hearts, is the central weapon; why darkness is a physical danger and not only a moral one; and why death in this universe is rarely final. A heart can outlive its body, travel, take shelter in another heart, sleep for years. That flexibility is what allows the saga's many returns.",
        ),
      },
      {
        title: L("Sans-cœur et Similis", "Heartless and Nobodies"),
        text: L(
          "Quand les ténèbres s'emparent d'un cœur, celui-ci se détache et devient un Sans-cœur : une créature mue par le seul instinct de dévorer d'autres cœurs. Les Sans-cœur Pur-sang naissent directement des ténèbres du cœur, tandis que les Sans-cœur emblèmes, marqués du logo en cœur barré, sont produits artificiellement par les expériences du Jardin Radieux.\n\nLe corps et l'âme laissés derrière disparaissent normalement. Mais si la volonté de la personne était particulièrement forte, ils se maintiennent et forment un Simili : un être qui conserve la mémoire, l'intelligence et l'apparence de l'original, mais prétend ne rien ressentir faute de cœur. Les Similis les plus puissants gardent forme humaine ; les autres deviennent des Reflets ou d'autres créatures blanchâtres.\n\nDétruire les deux moitiés, Sans-cœur et Simili, rend la personne complète : c'est ce qu'on appelle la recomplétion, et c'est ainsi que Lea, Ienzo, Even ou Isa reviennent au Jardin Radieux.",
          "When darkness seizes a heart, it detaches and becomes a Heartless: a creature driven solely by the instinct to devour other hearts. Pureblood Heartless arise directly from the darkness of the heart, while Emblem Heartless, marked with the crossed-heart logo, are produced artificially by the Radiant Garden experiments.\n\nThe body and soul left behind normally vanish. But if the person's will was especially strong, they persist and form a Nobody: a being that keeps the original's memory, intelligence and appearance, yet claims to feel nothing for lack of a heart. The strongest Nobodies keep a human shape; the others become Dusks or similar pale creatures.\n\nDestroying both halves, Heartless and Nobody, makes the person whole again: this is called recompletion, and it is how Lea, Ienzo, Even and Isa return in Radiant Garden.",
        ),
      },
      {
        title: L("Cœurs invités et corps vacants", "Guest hearts and vacant bodies"),
        text: L(
          "La séparation des trois composantes ouvre des cas limites que la saga exploite abondamment. Un cœur privé de corps peut se loger dans un autre : celui de Ventus dort des années dans le cœur de Sora, celui de Kairi s'y réfugie brièvement, celui de Xehanort s'implante de force dans des hôtes pour en faire des réceptacles.\n\nÀ l'inverse, un corps peut se retrouver vacant. Le corps de Terra est occupé par Xehanort et devient Terra-Xehanort ; le corps de Ventus, vidé de son cœur, est veillé par Aqua au Château Oblivion. Les réplicas de Vexen exploitent la même règle en fabriquant des corps artificiels prêts à recevoir un cœur ou des souvenirs.\n\nC'est ce mécanisme, plus qu'aucune magie, qui rend possibles les résurrections de la série : tant qu'un cœur subsiste quelque part, la personne peut être reconstituée.",
          "Splitting the three components opens edge cases the saga exploits freely. A heart without a body can lodge inside another: Ventus's sleeps for years within Sora's heart, Kairi's shelters there briefly, Xehanort's is forcibly implanted in hosts to turn them into vessels.\n\nConversely a body can end up vacant. Terra's body is occupied by Xehanort and becomes Terra-Xehanort; Ventus's body, emptied of its heart, is watched over by Aqua in Castle Oblivion. Vexen's replicas exploit the same rule by manufacturing artificial bodies ready to receive a heart or memories.\n\nIt is this mechanism, more than any magic, that makes the series' resurrections possible: as long as a heart persists somewhere, the person can be put back together.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le premier jeu pose la règle par la pratique. Sora traverse les mondes en libérant des cœurs à coups de Keyblade sans savoir ce qu'il fait vraiment, jusqu'à la Forteresse Oubliée, où Ansem lui apprend que le cœur de Kairi s'est réfugié dans le sien.\n\nPour le rendre, Sora retourne contre lui-même la Keyblade des cœurs et libère les sept cœurs de Princesses, dont le sien perd la protection : il devient à son tour un Sans-cœur, un petit Ombre parmi la foule. Kairi le reconnaît et l'appelle, ce qui suffit à ramener son cœur dans son corps. La scène établit deux points sur lesquels la série ne reviendra jamais : les liens entre les cœurs sont une force en soi, et un cœur suffisamment fort peut résister à sa propre perte.",
          "The first game establishes the rule through practice. Sora crosses the worlds freeing hearts with his Keyblade without really knowing what he is doing, until Hollow Bastion, where Ansem tells him Kairi's heart has taken refuge in his own.\n\nTo give it back, Sora turns the Keyblade of People's Hearts on himself and releases the seven Princesses' hearts, losing the protection of his own in the process: he too becomes a Heartless, a small Shadow among the crowd. Kairi recognises him and calls out, which is enough to bring his heart back to his body. The scene establishes two points the series never walks back: bonds between hearts are a force in their own right, and a strong enough heart can survive its own loss.",
        ),
      },
    ],
    trivia: [
      L(
        "Le mot japonais utilisé pour « cœur » dans la série, kokoro, désigne autant l'esprit et les sentiments que l'organe, ce que le français rend imparfaitement.",
        "The Japanese word the series uses for “heart”, kokoro, covers mind and feelings as much as the organ, which English and French render only imperfectly.",
      ),
      L(
        "L'emblème des Sans-cœur et celui des Similis sont deux variantes du même motif en cœur barré, dessinées pour être reconnaissables au premier coup d'œil.",
        "The Heartless and Nobody emblems are two variants of the same crossed-heart motif, designed to be recognisable at a glance.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Heart", url: "https://kingdomhearts.fandom.com/wiki/Heart" },
      { label: "Kingdom Hearts Wiki — Nobody", url: "https://kingdomhearts.fandom.com/wiki/Nobody" },
    ],
  },

  // ─────────────────────────── Pouvoir de l'éveil ───────────────────────────
  "power-of-waking": {
    sections: [
      {
        title: L("Réveiller les cœurs endormis", "Awakening sleeping hearts"),
        text: L(
          "Le pouvoir de l'éveil est la capacité d'atteindre un cœur endormi et de le ramener à la conscience. Il permet de circuler entre les cœurs comme entre des serrures, de rejoindre un endroit où l'on n'a plus d'accès physique, et de tirer quelqu'un du sommeil dans lequel les ténèbres l'ont enfermé.\n\nYen Sid en fait l'objet même de l'Épreuve de Maîtrise qu'il impose à Sora et Riku : pour libérer les mondes endormis depuis la première invasion des Sans-cœur, il faut savoir y entrer et en ressortir. Riku réussit l'examen, Sora échoue — non par manque de puissance, mais parce qu'il s'est laissé tomber trop loin dans les ténèbres sans en maîtriser le chemin. Cette distinction, qui paraît formelle sur le moment, deviendra le nœud de Kingdom Hearts III.",
          "The power of waking is the ability to reach a sleeping heart and bring it back to consciousness. It allows movement between hearts as between locks, reaching a place one can no longer physically access, and pulling someone out of the sleep darkness has locked them into.\n\nYen Sid makes it the very subject of the Mark of Mastery he sets for Sora and Riku: to free the worlds asleep since the first Heartless invasion, one must know how to enter and leave them. Riku passes the exam, Sora fails — not for lack of power but because he let himself fall too deep into darkness without mastering the way through. That distinction, which seems merely formal at the time, becomes the crux of Kingdom Hearts III.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "L'Épreuve de Maîtrise plonge Sora et Riku dans sept Mondes Endormis, où ils ne peuvent ni se voir ni s'entraider directement. Sora s'y ouvre sans méfiance à tous les cœurs qu'il croise, ce qui le rend vulnérable : le Jeune Xehanort et l'Organisation véritable l'attirent dans le Monde qui n'existe pas et le désignent comme treizième réceptacle.\n\nSauvé de justesse par Riku, Lea et Mickey, Sora ressort de l'épreuve amoindri. Yen Sid lui refuse le titre de Maître et lui explique qu'il a perdu, en tombant, la maîtrise du pouvoir de l'éveil. Riku, lui, obtient le titre parce qu'il a plongé dans le cœur de Sora pour l'en sortir. Cet échec envoie Sora refaire tout le chemin dans Kingdom Hearts III.",
          "The Mark of Mastery plunges Sora and Riku into seven Sleeping Worlds where they can neither see nor directly help each other. Sora opens himself unguardedly to every heart he meets, which leaves him vulnerable: Young Xehanort and the true Organization lure him into The World That Never Was and mark him as the thirteenth vessel.\n\nSaved at the last moment by Riku, Lea and Mickey, Sora comes out of the exam diminished. Yen Sid denies him the title of Master and explains that in falling he lost his command of the power of waking. Riku earns the title because he dived into Sora's heart to pull him out. That failure sends Sora back to walk the whole road again in Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sora passe l'essentiel du jeu à rechercher ce pouvoir perdu, en visitant les mondes et en renouant des liens. Il finit par le retrouver, et l'utilise pour ce à quoi il est destiné : réveiller Ventus, ramener Aqua du Domaine des Ténèbres, rendre à Roxas, Naminé et Xion une place dans le monde.\n\nMais Sora s'en sert aussi pour l'impossible. Après que la Marée Démoniaque a englouti tous les Gardiens au Nécropole des Keyblades, il remonte le fil du temps pour les récupérer un à un, usage que Yen Sid désapprouvera clairement. Le vieux maître l'avertit : le pouvoir de l'éveil n'est pas une clé passe-partout, et l'employer pour forcer un chemin qui n'existe pas se paie.",
          "Sora spends most of the game searching for that lost power, visiting worlds and renewing bonds. He eventually recovers it and uses it for what it is meant for: waking Ventus, bringing Aqua back from the Realm of Darkness, giving Roxas, Naminé and Xion a place in the world again.\n\nBut Sora also uses it for the impossible. After the Demon Tide swallows all the Guardians at the Keyblade Graveyard, he walks back through time to retrieve them one by one, a use Yen Sid clearly disapproves of. The old master warns him: the power of waking is not a skeleton key, and using it to force a path that does not exist carries a price.",
        ),
      },
      {
        title: L("Le prix payé", "The price paid"),
        text: L(
          "Après la victoire, Kairi a disparu, dispersée par le coup de Xehanort. Sora décide de la retrouver et emploie une dernière fois le pouvoir de l'éveil, contre l'avertissement explicite de Yen Sid, pour la ramener aux Îles du Destin. Il y parvient : Kairi revient.\n\nMais avoir emprunté trop de fois des chemins qui ne devaient pas exister a un coût. Aux Îles du Destin, après les retrouvailles, Sora s'efface progressivement sous les yeux de Kairi, sans douleur ni combat. Il ne meurt pas : il quitte le Domaine de la Lumière et réapparaît à Quadratum, une ville réaliste et inconnue, où il erre en cherchant à comprendre où il se trouve. Cette scène clôt la Saga du Chercheur des Ténèbres et ouvre celle de la Perte du Maître, que Kingdom Hearts IV doit poursuivre.",
          "After the victory, Kairi has vanished, scattered by Xehanort's blow. Sora decides to find her and uses the power of waking one last time, against Yen Sid's explicit warning, to bring her back to Destiny Islands. He succeeds: Kairi returns.\n\nBut having taken paths that were never meant to exist too many times carries a cost. On Destiny Islands, after the reunion, Sora gradually fades before Kairi's eyes, without pain or struggle. He does not die: he leaves the Realm of Light and reappears in Quadratum, a realistic and unfamiliar city where he wanders trying to understand where he is. That scene closes the Dark Seeker Saga and opens the Lost Master Arc, which Kingdom Hearts IV is to continue.",
        ),
      },
    ],
    trivia: [
      L(
        "L'épilogue de Kingdom Hearts III laisse la disparition de Sora inexpliquée ; c'est le DLC Re Mind qui en détaille les circonstances.",
        "The Kingdom Hearts III epilogue leaves Sora's disappearance unexplained; the Re Mind DLC details the circumstances.",
      ),
      L(
        "Quadratum, où Sora réapparaît, s'inspire ouvertement du quartier de Shibuya à Tokyo, déjà présent dans The World Ends with You.",
        "Quadratum, where Sora reappears, is openly modelled on Tokyo's Shibuya district, already featured in The World Ends with You.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Power of Waking", url: "https://kingdomhearts.fandom.com/wiki/Power_of_Waking" },
    ],
  },

  // ─────────────────────────── Boîte noire ───────────────────────────
  "black-box": {
    sections: [
      {
        title: L("Un coffre qu'il ne faut pas ouvrir", "A chest that must not be opened"),
        text: L(
          "La boîte noire est un coffret sombre, sans serrure apparente, que le Maître des Maîtres confie à Luxu au moment de disparaître. La consigne tient en deux points : la transporter à travers les siècles et ne jamais l'ouvrir. Luxu, qui ne connaît pas son contenu, obéit sans discuter, et l'objet traverse toute l'histoire de la saga dans l'ombre.\n\nLa série ne montre jamais ce qu'elle renferme. Les personnages qui la cherchent en parlent comme d'une source de pouvoir, d'un secret, ou d'un moyen de peser sur la suite ; rien ne confirme aucune de ces hypothèses. Cette opacité est délibérée : la boîte fonctionne comme un objectif narratif qui pousse plusieurs camps à agir sans que le joueur sache pourquoi. Son motif est indissociable du Maître des Maîtres, dont l'objectif réel reste tout aussi obscur.",
          "The black box is a dark chest with no visible lock, which the Master of Masters entrusts to Luxu as he disappears. The instruction has two parts: carry it through the centuries and never open it. Luxu, who does not know its contents, obeys without argument, and the object crosses the saga's entire history in the shadows.\n\nThe series never shows what it holds. The characters who seek it speak of it as a source of power, a secret, or a means of shaping what comes next; nothing confirms any of these guesses. That opacity is deliberate: the box works as a narrative goal driving several factions to act without the player knowing why. Its motif is inseparable from the Master of Masters, whose real aim remains just as obscure.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Union χ montre la remise de la boîte. Dans les souterrains de Daybreak Town, le Maître des Maîtres charge Luxu de trois choses : sa Keyblade dotée d'un œil, un rôle d'observateur passant de corps en corps, et ce coffret scellé. Il précise que la boîte ne doit être remise que le moment venu, à ceux qui sauront la reconnaître.\n\nLes Prophètes ignorent son existence, ce qui ajoute à leur sentiment d'avoir été tenus à l'écart. Après la Guerre des Keyblades, Luxu s'éloigne avec la boîte tandis que le monde se fragmente. Le jeu laisse entendre que son contenu a un lien avec le Livre des Prophéties, sans jamais rien affirmer, et fait de cet objet le fil rouge le plus discret de tout Union χ.",
          "Union χ shows the box being handed over. In the tunnels beneath Daybreak Town, the Master of Masters charges Luxu with three things: his Keyblade fitted with an eye, a role as observer passing from body to body, and this sealed chest. He specifies the box is only to be handed over when the time comes, to those who will know it for what it is.\n\nThe Foretellers know nothing of its existence, which adds to their feeling of being kept out of the loop. After the Keyblade War, Luxu walks away with the box as the world fragments. The game hints its contents relate to the Book of Prophecies without ever asserting anything, making the object the quietest through-line in all of Union χ.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans Kingdom Hearts III, la boîte devient un objectif partagé. Maléfique et Pat Hibulaire l'ont vue mentionnée et se lancent à sa recherche, fouillant les mondes et interrogeant quiconque semble en savoir plus. Luxord, membre de l'Organisation, poursuit discrètement le même but et laisse à Sora une carte à jouer avant de disparaître, signe qu'il n'était pas entièrement du côté de Xehanort.\n\nLa réponse arrive dans l'épilogue. Luxu, dont Xigbar était le dernier corps, retrouve les Prophètes au Bastion Héréditaire et pose la boîte devant eux. La scène se coupe sans l'ouvrir. Le joueur repart avec la certitude que cet objet, plus ancien que tous les personnages de la saga, sera au centre de ce qui suit.",
          "In Kingdom Hearts III, the box becomes a shared objective. Maleficent and Pete have seen it mentioned and set out to find it, combing the worlds and questioning anyone who might know more. Luxord, an Organization member, quietly pursues the same goal and leaves Sora a playing card before he vanishes, a sign he was not entirely on Xehanort's side.\n\nThe answer comes in the epilogue. Luxu, whose last body was Xigbar, meets the Foretellers in Scala ad Caelum and sets the box down before them. The scene cuts away without it being opened. The player leaves with the certainty that this object, older than every character in the saga, will be central to what comes next.",
        ),
      },
    ],
    trivia: [
      L(
        "Le nom japonais de l'objet signifie littéralement « boîte noire », sans le sens technique que l'expression a en français ou en anglais.",
        "The object's Japanese name means literally “black box”, without the technical sense the phrase carries in English or French.",
      ),
      L(
        "La boîte est visible dans plusieurs illustrations promotionnelles de la saga bien avant que son rôle ne soit expliqué.",
        "The box is visible in several promotional illustrations of the saga long before its role is explained.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Black Box", url: "https://kingdomhearts.fandom.com/wiki/Black_Box" },
    ],
  },

  // ─────────────────────────── Réplicas ───────────────────────────
  "replicas": {
    sections: [
      {
        title: L("Des corps fabriqués", "Manufactured bodies"),
        text: L(
          "Les réplicas sont des corps artificiels conçus par Vexen, quatrième membre de l'Organisation XIII et ancien apprenti d'Ansem le Sage sous le nom d'Even. L'idée découle directement de la règle des trois composantes : si un corps peut se retrouver vacant, alors un corps vide, fabriqué de toutes pièces, peut recevoir des souvenirs puis, éventuellement, un cœur.\n\nLes premiers modèles sont instables. Ce sont des coquilles dont l'identité dépend entièrement de ce qu'on y verse : on peut leur donner un passé, des sentiments, la conviction d'être quelqu'un, et modifier tout cela ensuite. Le programme pose donc d'emblée une question dérangeante pour une saga fondée sur l'authenticité des liens : un être fait sur mesure est-il moins réel que l'original ? La série répondra par l'affirmative aux personnages qui doutent, et par la négative à ceux qui les aiment.",
          "Replicas are artificial bodies designed by Vexen, fourth member of Organization XIII and formerly Ansem the Wise's apprentice Even. The idea follows directly from the three-component rule: if a body can end up vacant, then an empty body built from scratch can receive memories and, eventually, a heart.\n\nThe first models are unstable. They are shells whose identity depends entirely on what is poured into them: they can be given a past, feelings, the conviction of being someone, and all of it can be altered later. The programme therefore raises, from the outset, an uncomfortable question for a saga built on the authenticity of bonds: is a made-to-order being less real than the original? The series answers yes to the characters who doubt, and no to those who love them.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Le premier réplica que rencontre le joueur est celui de Riku, fabriqué au Manoir Oblivion. Doté d'une copie des souvenirs du vrai Riku, il se croit l'original et affronte Sora à plusieurs reprises. Larxene et Vexen lui réécrivent la mémoire à volonté, lui donnant une enfance aux Îles du Destin et un attachement à Naminé.\n\nQuand il découvre sa nature, le réplica s'effondre puis choisit malgré tout de se battre pour exister par lui-même. Il affronte le véritable Riku, perd, et disparaît en concluant que ses sentiments, même empruntés, lui appartenaient. Cette conclusion pose le motif que la série reprendra à chaque réplica : le corps est fabriqué, le cœur qui y pousse ne l'est pas.",
          "The first replica the player meets is Riku's, built at Castle Oblivion. Given a copy of the real Riku's memories, he believes himself the original and fights Sora several times. Larxene and Vexen rewrite his memory at will, giving him a childhood on Destiny Islands and an attachment to Naminé.\n\nWhen he learns what he is, the replica collapses, then chooses to fight to exist on his own terms anyway. He faces the real Riku, loses, and fades away concluding that his feelings, borrowed as they were, belonged to him. That conclusion sets the pattern the series reuses for every replica: the body is manufactured, the heart that grows in it is not.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Xion est le réplica le plus abouti du programme. Créée à partir des souvenirs de Sora fuyant Naminé, elle est intégrée à l'Organisation comme quatorzième membre et se lie d'amitié avec Roxas et Axel. Elle apparaît différemment selon celui qui la regarde, signe de son statut d'image plutôt que de personne.\n\nÀ mesure qu'elle absorbe les souvenirs de Sora, elle affaiblit celui-ci et menace de rendre son réveil impossible. Xion comprend la situation et demande à Roxas de la détruire pour que les souvenirs retournent à leur propriétaire. Elle disparaît en s'effaçant de la mémoire de tous ceux qui l'ont connue — punition d'autant plus cruelle qu'elle est la conséquence logique de ce qu'elle est. Days fait ainsi du programme de réplicas un drame intime plutôt qu'une curiosité scientifique.",
          "Xion is the programme's most accomplished replica. Created from Sora's memories leaking out of Naminé, she is folded into the Organization as its fourteenth member and befriends Roxas and Axel. She appears differently depending on who is looking at her, a sign that she is an image rather than a person.\n\nAs she absorbs Sora's memories she weakens him and threatens to make his awakening impossible. Xion understands the situation and asks Roxas to destroy her so the memories return to their owner. She fades away, erased from the memory of everyone who knew her — a punishment made crueller by being the logical consequence of what she is. Days thus turns the replica programme into an intimate tragedy rather than a scientific curiosity.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Redevenu Even au Jardin Radieux, le chercheur reprend ses travaux, cette fois du côté de la lumière. Ses nouveaux réplicas sont assez stables pour accueillir un cœur entier, et il en fait passer un à Ienzo puis à Naminé et Roxas. La véritable Organisation XIII s'en sert de son côté comme réceptacles de rechange pour les fragments du cœur de Xehanort.\n\nAu Nécropole des Keyblades, ces corps changent l'issue de la bataille. Roxas revient dans un réplica pour affronter Xemnas et Saïx ; Xion réapparaît de la même manière et se souvient enfin de tout ; Naminé retrouve un corps à la fin du jeu. Le programme conçu pour fabriquer des soldats jetables finit par rendre une existence à ceux que l'Organisation avait sacrifiés.",
          "Restored as Even in Radiant Garden, the researcher resumes his work, this time on the side of light. His new replicas are stable enough to host a full heart, and he passes one to Ienzo and then to Naminé and Roxas. The true Organization XIII meanwhile uses them as spare vessels for fragments of Xehanort's heart.\n\nAt the Keyblade Graveyard those bodies change the outcome of the battle. Roxas returns in a replica to face Xemnas and Saïx; Xion reappears the same way and finally remembers everything; Naminé regains a body at the end of the game. The programme built to manufacture disposable soldiers ends up restoring existence to those the Organization had sacrificed.",
        ),
      },
    ],
    trivia: [
      L(
        "Le Réplica de Riku porte la même tenue que Riku dans le premier jeu, ce qui permet de le distinguer à l'écran du Riku de Chain of Memories.",
        "The Riku Replica wears the same outfit Riku had in the first game, which visually distinguishes him from the Riku of Chain of Memories.",
      ),
      L(
        "358/2 Days doit son titre à Xion : le « /2 » renvoie à la façon dont elle partage l'existence de Roxas.",
        "358/2 Days owes its title to Xion: the “/2” refers to the way she shares Roxas's existence.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Replica", url: "https://kingdomhearts.fandom.com/wiki/Replica" },
    ],
  },

  // ─────────────────────────── Vaisseau Gummi ───────────────────────────
  "gummi-ship": {
    sections: [
      {
        title: L("Voyager entre des mondes séparés", "Travelling between separated worlds"),
        text: L(
          "Depuis la Guerre des Keyblades, les mondes sont isolés les uns des autres par des murs, et le voyage ordinaire est impossible. Le vaisseau Gummi est la solution trouvée par le Château Disney : un appareil assemblé à partir de blocs Gummi, un matériau issu des débris de ces murs, seul capable de traverser l'espace intermédiaire.\n\nSa nature explique son apparence. Le vaisseau n'a pas de forme fixe : c'est un assemblage de cubes colorés que l'on complète, allonge et rearme au fil du jeu, ce qui tranche volontairement avec le sérieux du reste de la saga. Tic et Tac en assurent l'entretien depuis le hangar du Château Disney, Cid fournit et améliore les pièces à la Ville de Traverse puis à la Forteresse Oubliée, et Sora, Donald et Dingo l'utilisent pour rejoindre chaque nouveau monde.",
          "Since the Keyblade War, the worlds have been walled off from one another and ordinary travel is impossible. The Gummi ship is Disney Castle's answer: a craft assembled from Gummi blocks, a material made from the debris of those walls and the only thing able to cross the space between.\n\nIts nature explains its look. The ship has no fixed shape: it is an assembly of coloured cubes that the player extends, rebuilds and rearms as the game goes on, deliberately at odds with the seriousness of the rest of the saga. Chip and Dale maintain it from the Disney Castle hangar, Cid supplies and upgrades parts in Traverse Town and later Hollow Bastion, and Sora, Donald and Goofy use it to reach each new world.",
        ),
      },
      {
        title: L("Un jeu dans le jeu", "A game within the game"),
        text: L(
          "Le vaisseau Gummi n'est pas qu'un élément de scénario : c'est un mode de jeu à part entière, différent à chaque épisode. Le premier Kingdom Hearts propose des niveaux de tir sur rails entre deux mondes, avec un éditeur de vaisseau assez libre pour que les joueurs y passent des heures. Kingdom Hearts II en fait une séquence plus spectaculaire, découpée en missions notées, avec des boss dédiés et des routes alternatives à débloquer.\n\nKingdom Hearts III change de formule : l'espace devient une zone ouverte que l'on explore librement, où l'on récolte des matériaux, découvre des constellations cachées et affronte d'énormes Sans-cœur de l'espace. Le jeu propose aussi de dessiner soi-même son vaisseau et de partager ses créations. Ce mode reste l'un des rares moments où la série accepte de se détourner franchement de son intrigue.",
          "The Gummi ship is not only a plot device: it is a game mode in its own right, different in each entry. The first Kingdom Hearts offers rail-shooter stages between worlds, with a ship editor free enough that players spend hours in it. Kingdom Hearts II makes it more spectacular, split into graded missions with dedicated bosses and alternate routes to unlock.\n\nKingdom Hearts III changes the formula: space becomes an open area to roam freely, gathering materials, discovering hidden constellations and fighting enormous space Heartless. The game also lets players draw their own ship and share their creations. This mode remains one of the few places where the series willingly steps away from its plot.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le vaisseau apparaît dès la Ville de Traverse, où Donald et Dingo le présentent à Sora comme leur moyen de chercher le roi. Il porte alors le nom d'Highwind, en hommage à Cid, et sert de fil conducteur entre les mondes : chaque monde débloqué s'ajoute à la carte du hangar.\n\nSa fragilité est un ressort narratif. Le vaisseau doit être renforcé pour franchir certains passages, ce qui oblige à revenir voir Cid, et les blocs Gummi ramassés dans les mondes deviennent une monnaie de progression. À la fin du jeu, quand les mondes se referment un à un, c'est le vaisseau que Sora doit abandonner : la séparation d'avec Donald et Dingo passe littéralement par la perte du moyen de transport qui les réunissait.",
          "The ship appears as early as Traverse Town, where Donald and Goofy present it to Sora as their means of finding the king. It is named Highwind, in tribute to Cid, and acts as the thread between worlds: each unlocked world is added to the hangar's map.\n\nIts fragility is a narrative device. The ship must be reinforced to clear certain passages, which forces return trips to Cid, and the Gummi blocks picked up in the worlds become a progression currency. At the end of the game, as the worlds close one by one, it is the ship Sora must give up: the parting from Donald and Goofy comes literally through the loss of the vehicle that brought them together.",
        ),
      },
    ],
    trivia: [
      L(
        "Le mot « gummi » vient des bonbons gélifiés : les blocs sont censés être mous et colorés, d'où l'apparence enfantine des vaisseaux.",
        "The word “gummi” comes from gummy sweets: the blocks are meant to be soft and colourful, hence the childlike look of the ships.",
      ),
      L(
        "Kingdom Hearts III permet d'importer un dessin fait à main levée et de le convertir en vaisseau jouable.",
        "Kingdom Hearts III lets players import a freehand drawing and convert it into a playable ship.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Gummi Ship", url: "https://kingdomhearts.fandom.com/wiki/Gummi_Ship" },
    ],
  },

  // ─────────────────────────── Glace à l'eau de mer ───────────────────────────
  "sea-salt-ice-cream": {
    sections: [
      {
        title: L("Une glace bleue, salée et sucrée", "A blue ice cream, salty and sweet"),
        text: L(
          "La glace à l'eau de mer est un bâtonnet bleu vendu à la Cité du Crépuscule, dont le goût est décrit dans la série par une formule devenue proverbiale : c'est salé, et pourtant sucré. Cette ambivalence en fait un objet parfaitement adapté à la tonalité d'un monde suspendu entre le jour et la nuit.\n\nSa fonction narrative est simple et efficace : c'est un rendez-vous. Manger une glace en haut de la tour de l'horloge, au coucher du soleil, est un rituel quotidien qui n'exige ni discours ni justification. La série s'en sert pour montrer, sans le dire, ce que des personnages censés ne rien ressentir éprouvent malgré tout. Le bâtonnet réserve en outre parfois la mention « gagnant », qui donne droit à une glace gratuite et sert de petit motif de chance récurrent.",
          "Sea-salt ice cream is a blue bar sold in Twilight Town, its taste described in the series by a phrase that has become proverbial: it is salty, and yet sweet. That ambivalence makes it perfectly suited to the tone of a world suspended between day and night.\n\nIts narrative function is simple and effective: it is a standing appointment. Eating ice cream at the top of the clock tower at sunset is a daily ritual that requires no speeches and no justification. The series uses it to show, without saying so, what characters supposedly incapable of feeling nevertheless feel. The stick also sometimes reads “WINNER”, good for a free bar, and serves as a small recurring motif of luck.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "La glace apparaît d'abord dans le prologue consacré à Roxas, dans la Cité du Crépuscule virtuelle. Roxas, Hayner, Pence et Olette la partagent chaque jour de leurs vacances d'été, et le rituel sert de repère au joueur dans une semaine qui se répète et se dérègle.\n\nLe motif revient plus tard sur un mode douloureux. Axel, mourant devant Sora, évoque la Cité du Crépuscule et son ami disparu ; la glace n'est pas nommée mais tout le prologue y renvoie. Sora, qui ignore encore tout de Roxas, ressent une tristesse qu'il ne s'explique pas en goûtant cette saveur. Le jeu utilise ainsi un simple dessert pour faire passer des souvenirs d'un personnage à l'autre, sans avoir besoin d'exposition.",
          "The ice cream first appears in the prologue devoted to Roxas, in the virtual Twilight Town. Roxas, Hayner, Pence and Olette share one every day of their summer holiday, and the ritual gives the player a fixed point in a week that repeats and comes apart.\n\nThe motif returns later in a painful key. Axel, dying in front of Sora, speaks of Twilight Town and his lost friend; the ice cream is not named but the whole prologue points to it. Sora, who still knows nothing of Roxas, feels an inexplicable sadness on tasting that flavour. The game thus uses a simple dessert to carry memories from one character to another without needing exposition.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Days fait de la glace le cœur de son récit. Chaque journée de mission de Roxas se termine sur la tour de l'horloge, avec Axel puis avec Xion, et ces courtes scènes constituent l'essentiel de la relation entre les trois personnages. C'est là qu'ils parlent de choses sans importance, qu'ils promettent de rester amis, et que Xion finit par s'éloigner.\n\nLe jeu comptabilise même ces moments : le nombre de glaces partagées mesure indirectement le temps écoulé. Lorsque Roxas se retrouve seul sur la tour avec deux bâtonnets qui fondent, la scène dit plus que n'importe quel dialogue. Le motif culmine dans Kingdom Hearts III, où Roxas, Axel et Xion, tous rendus à une existence propre, s'assoient enfin ensemble au même endroit.",
          "Days puts the ice cream at the centre of its story. Each of Roxas's mission days ends on the clock tower, with Axel and later with Xion, and those short scenes carry the bulk of the relationship between the three. It is there that they talk about nothing in particular, promise to stay friends, and where Xion eventually pulls away.\n\nThe game even keeps count of these moments: the number of shared bars indirectly measures the passing time. When Roxas ends up alone on the tower with two bars melting, the scene says more than any dialogue could. The motif culminates in Kingdom Hearts III, where Roxas, Axel and Xion, all restored to lives of their own, finally sit together in the same spot.",
        ),
      },
    ],
    trivia: [
      L(
        "La glace s'inspire d'un vrai bâtonnet vendu au Tokyo DisneySea, à la saveur de sel de mer, que Tetsuya Nomura a fait entrer dans la série.",
        "The ice cream is inspired by a real sea-salt-flavoured bar sold at Tokyo DisneySea, which Tetsuya Nomura brought into the series.",
      ),
      L(
        "Dans 358/2 Days, la mention « gagnant » sur le bâtonnet fait l'objet d'une plaisanterie récurrente entre Roxas et Axel.",
        "In 358/2 Days, the “WINNER” mark on the stick is a running joke between Roxas and Axel.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Sea-salt ice cream", url: "https://kingdomhearts.fandom.com/wiki/Sea-salt_ice_cream" },
    ],
  },

  // ─────────────────────────── Éclaireuse (porte-bonheur) ───────────────────────────
  "wayfinder": {
    sections: [
      {
        title: L("Trois étoiles de verre", "Three glass stars"),
        text: L(
          "Le Wayfinder est un porte-bonheur en forme d'étoile à cinq branches, tressé à partir de morceaux de verre coloré. Aqua en fabrique trois, un pour elle, un pour Terra et un pour Ventus, en s'inspirant d'une superstition des Îles du Destin : le fruit paopou, partagé entre deux personnes, lie leurs destins pour toujours.\n\nElle en donne sa propre version : tant que chacun garde son étoile, les trois resteront liés, où qu'ils aillent, et se retrouveront toujours. Le nom même de l'objet dit sa fonction — un repère pour retrouver le chemin. Le trio y gagne son surnom de « trio Wayfinder ». La saga en fait un objet fiable dans un univers où tout se disloque : les porte-bonheur survivent aux personnages et servent de preuve que le lien tient encore.",
          "The Wayfinder is a five-pointed star-shaped good-luck charm, woven from pieces of coloured glass. Aqua makes three of them, one for herself, one for Terra and one for Ventus, drawing on a Destiny Islands superstition: the paopu fruit, shared between two people, binds their destinies forever.\n\nShe gives it her own twist: as long as each keeps their star, the three will stay connected wherever they go, and will always find their way back to each other. The object's very name states its function — a marker for finding the way. The trio owes its nickname, the Wayfinder trio, to it. The saga makes it a reliable object in a universe where everything comes apart: the charms outlive the characters and prove the bond still holds.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Aqua offre les porte-bonheur juste avant que le trio ne se disperse, ce qui donne à la scène sa charge : les trois amis se séparent le jour même où ils se promettent de rester unis. Chacun garde le sien à travers les mondes, et l'objet réapparaît aux moments de doute pour rappeler ce qui est en jeu.\n\nÀ la fin du jeu, Terra est possédé par Xehanort, Ventus dort sans son cœur et Aqua se perd dans le Domaine des Ténèbres. C'est le Wayfinder d'Aqua qui la maintient à flot pendant plus de dix ans d'errance : elle le tient en main dans les moments les plus sombres, et la lumière qu'il conserve devient littéralement ce qui l'empêche de céder. Le porte-bonheur passe ainsi du souvenir sentimental à l'objet de survie.",
          "Aqua gives out the charms just before the trio scatters, which is what gives the scene its weight: the three friends part on the very day they promise to stay together. Each keeps their own across the worlds, and the object reappears at moments of doubt to recall what is at stake.\n\nBy the end of the game Terra is possessed by Xehanort, Ventus sleeps without his heart and Aqua is lost in the Realm of Darkness. It is Aqua's Wayfinder that keeps her afloat through more than ten years of wandering: she holds it in the darkest moments, and the light it preserves becomes literally what stops her from giving in. The charm thus moves from sentimental keepsake to survival object.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le motif circule vers l'autre trio de la série. Aux Îles du Destin, Kairi tresse un porte-bonheur en forme d'étoile à partir de coquillages thalassa et le confie à Sora en lui faisant promettre de le lui rendre : c'est leur promesse de se retrouver, faite juste avant que la tempête n'emporte l'île.\n\nSora garde le porte-bonheur tout au long du voyage. Il en naît Tendre Promesse, l'une de ses Keyblades les plus emblématiques, qui apparaît lorsqu'il pense à Kairi ; sa contrepartie, Souvenir Perdu, renvoie à Riku. Le rapprochement entre les deux générations n'est pleinement lisible qu'après Birth by Sleep : le geste de Kairi reprend, sans qu'elle le sache, celui d'Aqua dix ans plus tôt.",
          "The motif passes to the series' other trio. On Destiny Islands, Kairi weaves a star-shaped charm from thalassa shells and gives it to Sora, making him promise to bring it back: it is their promise to find each other again, made just before the storm takes the island.\n\nSora keeps the charm throughout the journey. Oathkeeper, one of his most emblematic Keyblades, is born from it and appears when he thinks of Kairi; its counterpart, Oblivion, points to Riku. The link between the two generations only becomes fully legible after Birth by Sleep: Kairi's gesture unknowingly repeats Aqua's from ten years earlier.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Le porte-bonheur revient au moment où le trio d'origine est enfin réuni. Sora traverse le Domaine des Ténèbres pour retrouver Aqua, dont l'étoile est restée intacte malgré des années d'obscurité ; Ventus est réveillé et Terra libéré de Xehanort. Les trois Wayfinder se retrouvent ensemble, ce qui n'était plus arrivé depuis la Contrée du Départ.\n\nL'objet sert aussi de fil dans le prologue Re Mind et dans les scènes de fin : il matérialise la promesse qui a survécu à tout, y compris à des décennies de séparation. La série l'utilise sans dialogue explicatif, en comptant sur le joueur pour reconnaître la forme et comprendre ce qu'elle signifie — l'un des rares symboles de Kingdom Hearts qui n'a jamais eu besoin d'être expliqué.",
          "The charm returns just as the original trio is finally reunited. Sora crosses the Realm of Darkness to find Aqua, whose star has stayed intact through years of gloom; Ventus is woken and Terra freed from Xehanort. The three Wayfinders are together again, something that had not happened since the Land of Departure.\n\nThe object also runs through the Re Mind content and the closing scenes: it embodies the promise that survived everything, decades of separation included. The series uses it without explanatory dialogue, trusting the player to recognise the shape and understand what it means — one of the few Kingdom Hearts symbols that never needed explaining.",
        ),
      },
    ],
    trivia: [
      L(
        "Les trois Wayfinder reprennent les couleurs de leurs propriétaires : orange pour Terra, bleu pour Aqua, vert pour Ventus.",
        "The three Wayfinders use their owners' colours: orange for Terra, blue for Aqua, green for Ventus.",
      ),
      L(
        "Le fruit paopou, dont s'inspire le porte-bonheur, a lui-même la forme d'une étoile à cinq branches.",
        "The paopu fruit the charm is inspired by is itself shaped like a five-pointed star.",
      ),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Wayfinder", url: "https://kingdomhearts.fandom.com/wiki/Wayfinder" },
    ],
  },
};
