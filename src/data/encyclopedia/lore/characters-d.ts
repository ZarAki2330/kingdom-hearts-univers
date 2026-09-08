import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des personnages (lot D) : invités Disney et Pixar des mondes
 * tardifs de la saga, princesses de contes, et invités Final Fantasy de la Cité du
 * Crépuscule et du Jardin Radieux. Les clés sont les slugs des entrées de personnages.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Tron ───────────────────────────
  "tron": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Tron vient du film Tron (1982), l'une des premières œuvres de cinéma à mêler prises de vues réelles et images de synthèse. Dans le film, il s'agit d'un programme de sécurité écrit par Alan Bradley pour surveiller le Contrôle Central (le MCP), incarné à l'écran par Bruce Boxleitner, qui reprend son rôle dans les jeux.\n\nKingdom Hearts II ne situe pas Tron dans un monde Disney classique mais à l'intérieur de l'ordinateur d'Ansem le Sage, sous la Forteresse Oubliée : ce monde s'appelle l'Espace Paradoxal, nom emprunté au jeu d'arcade qui apparaît dans le film. Tron y devient l'allié le plus utile de Sora, puisqu'il seul peut manipuler les données du système. Dream Drop Distance revient ensuite à l'univers du film, mais dans sa suite Tron : L'Héritage (2010) : le monde s'appelle la Grille, et Tron y réapparaît sous les traits de Rinzler, exécuteur masqué au service de CLU.",
          "Tron comes from the film Tron (1982), one of the first films to blend live action with computer imagery. In the film he is a security program written by Alan Bradley to watch over the Master Control Program, played on screen by Bruce Boxleitner, who reprises the role in the games.\n\nKingdom Hearts II does not place Tron in a classic Disney world but inside Ansem the Wise's computer, beneath Hollow Bastion: the world is called Space Paranoids, a name borrowed from the arcade game seen in the film. There Tron becomes Sora's most useful ally, since he alone can manipulate the system's data. Dream Drop Distance then returns to the film's universe, but to its sequel Tron: Legacy (2010): the world is called The Grid, and Tron reappears there as Rinzler, a masked enforcer serving CLU.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo sont numérisés par l'ordinateur d'Ansem le Sage après avoir manipulé la console de la Forteresse Oubliée. Dans l'Espace Paradoxal, ils rencontrent Tron, prisonnier du Contrôle Central et de son second Sark, condamné à combattre dans les jeux de l'arène. Sora le libère, et Tron accepte de les aider en échange d'un mot de passe permettant de restaurer les fichiers effacés du système.\n\nTron révèle que le MCP a effacé les recherches d'Ansem le Sage et travaille pour l'Organisation XIII. Après un premier passage, Sora revient dans l'ordinateur lorsque le système menace de faire sauter tout le complexe : il détruit Sark puis le Contrôle Central lui-même. Tron consacre alors ses dernières ressources à réparer les données de la ville et le système de défense de la Forteresse Oubliée, avant de rétablir le contact avec ses amis « utilisateurs ». Il offre à Sora le porte-clés Débogueur Photonique et une amitié qui, pour un programme, tient de l'exploit.",
          "Sora, Donald and Goofy are digitised by Ansem the Wise's computer after tampering with the console in Hollow Bastion. In Space Paranoids they meet Tron, a prisoner of the Master Control Program and its second-in-command Sark, forced to fight in the arena games. Sora frees him, and Tron agrees to help in exchange for a password that would restore the system's deleted files.\n\nTron reveals that the MCP has erased Ansem the Wise's research and is working for Organization XIII. After a first visit, Sora returns to the computer when the system threatens to blow up the whole complex: he destroys Sark and then the MCP itself. Tron spends his last resources repairing the town's data and Hollow Bastion's defence system before making contact with his “User” friends again. He gives Sora the Photon Debugger keychain and a friendship that, for a program, is no small feat.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Dans les Mondes Endormis, la Grille rejoue la trame de Tron : L'Héritage. Sora y est capturé par les gardes de CLU et jeté dans les jeux de lumière, où il affronte Rinzler, un exécuteur masqué d'une redoutable efficacité. De son côté, Riku croise Sam Flynn et Quorra, et apprend que CLU a trahi Kevin Flynn et gouverne la Grille en tyran.\n\nCLU convoite les données des voyageurs pour s'échapper vers d'autres mondes, et se sert des Avale-Rêves pour parvenir à ses fins. Au cours de l'affrontement final, Rinzler retrouve des bribes de sa mémoire en voyant Sora se battre pour ses amis : il se retourne contre son maître et se souvient d'avoir été Tron, le programme qui « se bat pour les utilisateurs ». Sa libération se paie de sa disparition dans les profondeurs du système, mais Sora garde le souvenir du programme qui lui avait tendu la main dans l'ordinateur d'Ansem.",
          "In the Sleeping Worlds, The Grid replays the plot of Tron: Legacy. Sora is captured by CLU's guards and thrown into the light games, where he faces Rinzler, a masked enforcer of fearsome efficiency. Riku, meanwhile, meets Sam Flynn and Quorra and learns that CLU betrayed Kevin Flynn and now rules the Grid as a tyrant.\n\nCLU covets the travellers' data to escape into other worlds, and uses Dream Eaters to get there. During the final confrontation, Rinzler recovers fragments of his memory as he watches Sora fight for his friends: he turns on his master and remembers having been Tron, the program who “fights for the Users”. His release costs him his disappearance into the depths of the system, but Sora keeps the memory of the program who once reached out to him inside Ansem's computer.",
        ),
      },
    ],
    trivia: [
      L("Bruce Boxleitner, interprète de Tron au cinéma, double le personnage dans Kingdom Hearts II comme dans Dream Drop Distance.", "Bruce Boxleitner, Tron's screen actor, voices the character in both Kingdom Hearts II and Dream Drop Distance."),
      L("« Espace Paradoxal » traduit Space Paranoids, le nom du jeu d'arcade que l'on aperçoit dans le film de 1982.", "“Space Paranoids” is the name of the arcade game glimpsed in the 1982 film, reused for the Kingdom Hearts II world."),
      L("La Grille de Dream Drop Distance est le seul monde de la saga adapté d'un film Disney sorti après le début de la série.", "The Grid in Dream Drop Distance is the only world in the series adapted from a Disney film released after the series began."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Tron", url: "https://kingdomhearts.fandom.com/wiki/Tron" },
    ],
  },

  // ─────────────────────────── Stitch ───────────────────────────
  "stitch": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Stitch est l'expérience 626 de Lilo & Stitch (2002), créature génétique conçue par le savant Jumba pour détruire tout ce qu'elle touche, et doublée par son propre créateur au cinéma, Chris Sanders, qui reprend le rôle dans les jeux. Petit, bleu, doté de six membres rétractables et d'une force disproportionnée, il devient dans le film un membre de la famille de Lilo.\n\nKingdom Hearts fait un choix inhabituel : Lilo est absente des jeux, et l'histoire de 626 est déplacée dans l'espace, à bord du croiseur du capitaine Gantu. Le monde s'appelle Espace Profond dans Birth by Sleep comme dans Kingdom Hearts II, et se déroule avant que la créature ne s'écrase sur Terre. Ce parti pris permet de raconter la naissance d'un cœur chez un être conçu pour n'en avoir aucun, thème qui rejoint directement celui de la saga.",
          "Stitch is Experiment 626 from Lilo & Stitch (2002), a genetic creature designed by the scientist Jumba to destroy everything he touches, voiced on screen by his own creator, Chris Sanders, who reprises the role in the games. Small, blue, with six retractable limbs and outsized strength, he becomes part of Lilo's family in the film.\n\nKingdom Hearts makes an unusual choice: Lilo is absent from the games, and 626's story is moved into space, aboard Captain Gantu's cruiser. The world is called Deep Space in both Birth by Sleep and Kingdom Hearts II, and takes place before the creature crashes on Earth. That decision lets the series tell of a heart being born in a being designed to have none, a theme that speaks directly to the saga's own.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Terra, Ventus et Aqua débarquent chacun leur tour sur le croiseur de la Fédération Galactique, où l'expérience 626 vient de s'échapper de sa cellule. La créature sème le chaos dans les couloirs et les trois porteurs sont d'abord pris pour des complices par le capitaine Gantu, tandis que les Nescients envahissent le vaisseau.\n\n626 est intrigué par le porte-bonheur en forme d'étoile que chacun des trois amis porte sur lui : cet objet, symbole d'un lien, éveille chez lui quelque chose que ses concepteurs n'avaient pas prévu. Aidé tour à tour par les trois porteurs, il finit par s'emparer d'une capsule et fuir dans l'espace, direction une petite île du monde des humains. Le Dr Jumba constate, effaré, que sa création s'est mise à ressentir. Cet épisode fait de l'expérience 626 l'un des rares personnages Disney à qui Birth by Sleep donne un véritable arc.",
          "Terra, Ventus and Aqua each land in turn on the Galactic Federation cruiser, where Experiment 626 has just broken out of his cell. The creature wreaks havoc in the corridors, and all three wielders are first taken for accomplices by Captain Gantu, while Unversed swarm the ship.\n\n626 is fascinated by the star-shaped charm each of the three friends carries: that object, the symbol of a bond, stirs something in him his designers never planned for. Helped in turn by the three wielders, he eventually seizes a pod and escapes into space, headed for a small island in the human world. Dr Jumba notes, appalled, that his creation has begun to feel. The episode makes Experiment 626 one of the few Disney characters given a real arc in Birth by Sleep.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo atterrissent à leur tour sur le croiseur de Gantu, plusieurs années plus tard. Le vaisseau est en alerte : l'expérience 626, de nouveau capturée, s'échappe et les systèmes du bord se retournent contre l'équipage à mesure que les Sans-cœur se répandent. Sora aide la créature à traverser les niveaux du croiseur et à reprendre sa liberté.\n\nReconnaissant, 626 remet à Sora un porte-bonheur qui lui permet de l'appeler à tout moment : il devient ainsi l'une des quatre invocations du jeu. Sous ce nom de Stitch, il apparaît en pleine bataille, s'accroche à l'écran, joue de son ukulélé et arrose les ennemis de tirs plasma, tout en régénérant les points de magie de Sora. On le retrouve ensuite en passager clandestin du vaisseau Gummi, occupé à démonter tout ce qui lui tombe sous la patte.",
          "Sora, Donald and Goofy land on Gantu's cruiser in their turn, several years later. The ship is on alert: Experiment 626, recaptured, escapes again and the onboard systems turn on the crew as the Heartless spread. Sora helps the creature through the cruiser's decks and back to freedom.\n\nGrateful, 626 gives Sora a charm that lets him call on him at any moment: he becomes one of the game's four summons. Under the name Stitch he shows up mid-battle, clings to the screen, plays his ukulele and sprays enemies with plasma fire while restoring Sora's magic. He then turns up as a stowaway on the Gummi ship, busy dismantling everything within reach of his paws.",
        ),
      },
    ],
    trivia: [
      L("Chris Sanders, créateur et voix de Stitch au cinéma, le double dans les jeux ; Kōichi Yamadera assure la version japonaise.", "Chris Sanders, Stitch's creator and screen voice, voices him in the games; Kōichi Yamadera handles the Japanese version."),
      L("Lilo n'apparaît dans aucun jeu Kingdom Hearts : l'histoire du monde Espace Profond se déroule avant sa rencontre avec 626.", "Lilo appears in no Kingdom Hearts game: the Deep Space world's story takes place before her meeting with 626."),
      L("L'invocation Stitch de Kingdom Hearts II est la seule à interrompre les combos de Sora pour placer un mini-numéro d'ukulélé.", "The Stitch summon in Kingdom Hearts II is the only one to interrupt Sora's combos for a small ukulele routine."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Stitch", url: "https://kingdomhearts.fandom.com/wiki/Stitch" },
    ],
  },

  // ─────────────────────────── Elsa ───────────────────────────
  "elsa": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Elsa est l'aînée des deux princesses de La Reine des neiges (2013), née avec le pouvoir de créer la glace et la neige. Après avoir blessé sa sœur Anna par accident dans leur enfance, elle grandit isolée, terrifiée par ce qu'elle pourrait déclencher, jusqu'à ce que le jour de son couronnement révèle son secret devant tout le royaume d'Arendelle.\n\nKingdom Hearts III reprend fidèlement la trame du film, chansons comprises, et y greffe son propre enjeu : Elsa fait partie des Nouveaux Sept Cœurs, les jeunes filles pures que l'Organisation XIII cherche à réunir pour remplacer les Princesses de Cœur. Sa peur d'elle-même en fait une cible idéale, et Larxene est envoyée pour déterminer de quel côté penche ce cœur. Le jeu prolonge donc la lecture du film — la peur qui isole, l'amour qui délivre — en la reliant au conflit entre lumière et ténèbres.",
          "Elsa is the elder of the two princesses of Frozen (2013), born with the power to create ice and snow. After accidentally hurting her sister Anna as a child, she grows up isolated, terrified of what she might unleash, until her coronation day exposes her secret before the whole kingdom of Arendelle.\n\nKingdom Hearts III follows the film's plot faithfully, songs included, and grafts its own stake onto it: Elsa is one of the New Seven Hearts, the pure-hearted maidens Organization XIII seeks to gather in place of the Princesses of Heart. Her fear of herself makes her an ideal target, and Larxene is sent to work out which way that heart leans. The game thus extends the film's reading — fear that isolates, love that frees — by tying it to the conflict between light and darkness.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo arrivent sur la Montagne du Nord peu après la fuite d'Elsa, qui vient d'y bâtir son palais de glace. Larxene l'aborde la première et souffle sur ses craintes, espérant faire basculer son cœur du côté des ténèbres. Elsa refuse de la suivre, mais son angoisse suffit à déchaîner la tempête et à faire naître le Sans-cœur Sköll, loup de neige que Sora doit affronter.\n\nQuand Sora tente de la rejoindre, le géant de neige Marshmallow, créé par Elsa pour éloigner les intrus, précipite le groupe dans le Labyrinthe de Glace. Elsa, elle, poursuit sa route seule, gèle sans le vouloir le cœur de sa sœur venue la chercher, puis est ramenée de force à Arendelle par les hommes du prince Hans. C'est le sacrifice d'Anna, se jetant devant l'épée de Hans, qui lui fait comprendre que l'amour est la clé de son pouvoir : elle dégèle alors le royaume. Sora repart en sachant que l'Organisation la surveille toujours.",
          "Sora, Donald and Goofy reach the North Mountain shortly after Elsa's flight, just as she raises her ice palace there. Larxene approaches her first and plays on her fears, hoping to tip her heart toward darkness. Elsa refuses to follow her, but her anxiety alone is enough to whip up the storm and give birth to the Heartless Sköll, a snow wolf Sora must fight.\n\nWhen Sora tries to reach her, the snow giant Marshmallow, made by Elsa to keep intruders away, hurls the group into the Labyrinth of Ice. Elsa goes on alone, unwittingly freezes the heart of the sister who came for her, then is dragged back to Arendelle by Prince Hans's men. It is Anna's sacrifice, throwing herself in front of Hans's sword, that shows her love is the key to her power: she thaws the kingdom. Sora leaves knowing the Organization is still watching her.",
        ),
      },
    ],
    trivia: [
      L("Elsa est la seule des Nouveaux Sept Cœurs à posséder un pouvoir magique offensif, ce qui la distingue nettement des Princesses de Cœur.", "Elsa is the only one of the New Seven Hearts with an offensive magical power, setting her clearly apart from the Princesses of Heart."),
      L("Arendelle est le seul monde de Kingdom Hearts III à intégrer les chansons du film dans ses scènes cinématiques.", "Arendelle is the only world in Kingdom Hearts III to use the film's songs in its cutscenes."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Elsa", url: "https://kingdomhearts.fandom.com/wiki/Elsa" },
    ],
  },

  // ─────────────────────────── Anna ───────────────────────────
  "anna": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Anna est la cadette des princesses d'Arendelle dans La Reine des neiges (2013). Enthousiaste, maladroite et incapable de renoncer, elle ignore tout des pouvoirs de sa sœur, dont on a effacé le souvenir de sa mémoire après l'accident de leur enfance. Son personnage sert de contrepoint solaire à l'isolement d'Elsa.\n\nKingdom Hearts III conserve son rôle intact : elle est le moteur de l'histoire du monde, celle qui part dans la tempête sans équipement, avec le livreur de glace Kristoff, son renne Sven et le bonhomme de neige Olaf. Le jeu ne la range pas parmi les Nouveaux Sept Cœurs, mais fait de son geste final la démonstration exacte de ce que Sora défend depuis le premier épisode : un lien assez fort pour renverser les ténèbres. Le prince Hans, dont la trahison structure le dernier acte du film, est conservé lui aussi.",
          "Anna is the younger princess of Arendelle in Frozen (2013). Eager, clumsy and incapable of giving up, she knows nothing of her sister's powers, the memory of which was erased from her mind after their childhood accident. Her character is the sunlit counterpoint to Elsa's isolation.\n\nKingdom Hearts III keeps her role intact: she drives the world's story, the one who sets off into the storm without gear, alongside the ice harvester Kristoff, his reindeer Sven and the snowman Olaf. The game does not count her among the New Seven Hearts, but makes her final act the exact demonstration of what Sora has defended since the first game: a bond strong enough to overturn darkness. Prince Hans, whose betrayal shapes the film's last act, is kept as well.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora croise Anna à plusieurs reprises sur les pentes de la Montagne du Nord, où elle grimpe avec Kristoff et Sven à la recherche de sa sœur. Le groupe est séparé par les Sans-cœur et par les avalanches provoquées par Larxene et par la tempête d'Elsa, si bien que Sora, Donald et Dingo passent une bonne partie du monde à tenter de les rejoindre.\n\nAnna atteint le palais de glace, supplie Elsa de rentrer, et reçoit en pleine poitrine le trait de magie qui commence à la changer en glace. Kristoff la ramène à Arendelle, où le prince Hans révèle qu'il ne l'a jamais aimée et la laisse mourir de froid. Libérée, Anna choisit pourtant de courir vers sa sœur plutôt que vers Kristoff : elle s'interpose au moment où Hans lève son épée sur Elsa et se change en statue de glace. Cet acte d'amour véritable la dégèle et sauve le royaume, sous les yeux de Sora.",
          "Sora runs into Anna several times on the slopes of the North Mountain, where she is climbing with Kristoff and Sven in search of her sister. The group is split up by the Heartless and by avalanches set off by Larxene and by Elsa's storm, so Sora, Donald and Goofy spend much of the world trying to catch up with them.\n\nAnna reaches the ice palace, begs Elsa to come home, and takes a bolt of magic to the chest that begins turning her to ice. Kristoff brings her back to Arendelle, where Prince Hans reveals he never loved her and leaves her to freeze. Freed, Anna nonetheless runs toward her sister rather than toward Kristoff: she steps in as Hans raises his sword over Elsa and turns to solid ice. That act of true love thaws her and saves the kingdom, before Sora's eyes.",
        ),
      },
    ],
    trivia: [
      L("Anna se bat brièvement à mains nues contre les Sans-cœur dans une scène, sans jamais devenir un membre de l'équipe jouable.", "Anna briefly fights the Heartless bare-handed in one scene, without ever becoming a playable party member."),
      L("Le monde d'Arendelle a été l'un des plus longs à développer de Kingdom Hearts III, en raison des exigences de Disney sur le rendu de la neige.", "Arendelle was one of Kingdom Hearts III's longest worlds to develop, because of Disney's requirements on the rendering of snow."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Anna", url: "https://kingdomhearts.fandom.com/wiki/Anna" },
    ],
  },

  // ─────────────────────────── Olaf ───────────────────────────
  "olaf": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Olaf naît d'un souvenir : c'est le bonhomme de neige qu'Elsa et Anna construisaient enfants, ramené à la vie par la magie d'Elsa dans La Reine des neiges (2013). Innocent, bavard et fasciné par un été qu'il n'a jamais connu, il tient le rôle du compagnon comique tout en rappelant sans cesse aux deux sœurs le lien qu'elles ont perdu. Josh Gad, sa voix au cinéma, le double également dans Kingdom Hearts III.\n\nLe jeu conserve son caractère et ajoute une conséquence propre à son état : un être fait de neige peut être démembré sans dommage, ce dont Kingdom Hearts III tire à la fois des gags et un mini-jeu. Sa place dans le monde d'Arendelle reste celle du film : il accompagne Anna, la conduit jusqu'au palais de glace, et incarne la mémoire d'une enfance heureuse que la peur d'Elsa avait enfouie.",
          "Olaf is born of a memory: he is the snowman Elsa and Anna built as children, brought to life by Elsa's magic in Frozen (2013). Innocent, talkative and fascinated by a summer he has never known, he plays the comic companion while constantly reminding the two sisters of the bond they lost. Josh Gad, his screen voice, also voices him in Kingdom Hearts III.\n\nThe game keeps his character and adds a consequence peculiar to his condition: a being made of snow can be taken apart without harm, from which Kingdom Hearts III draws both gags and a mini-game. His place in Arendelle stays that of the film: he goes with Anna, leads her to the ice palace, and embodies the memory of a happy childhood that Elsa's fear had buried.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora rencontre Olaf après que les vents de la Montagne du Nord l'ont éparpillé : sa tête, son torse, ses bras et son nez de carotte ont été soufflés aux quatre coins de la forêt gelée. Le joueur doit retrouver chaque morceau à travers les zones enneigées pour le reconstituer, séquence qui sert aussi de fil conducteur à l'exploration du monde.\n\nUne fois entier, Olaf explique à Sora qu'il cherche Anna et Elsa, et l'oriente vers la montagne. Il reste ensuite fidèle à sa mission : il retrouve Anna gelée dans le château d'Arendelle, allume un feu pour la réchauffer au risque de fondre, et lui rappelle que « certaines personnes valent bien qu'on fonde pour elles ». Sa présence légère contraste avec l'enjeu du monde, où Larxene guette le cœur d'Elsa, et Sora voit en lui la preuve qu'un cœur peut naître dans les créations les plus improbables.",
          "Sora meets Olaf after the North Mountain winds have scattered him: his head, torso, arms and carrot nose have been blown to the four corners of the frozen forest. The player has to find each piece across the snowy areas to put him back together, a sequence that also threads through the world's exploration.\n\nOnce whole, Olaf explains to Sora that he is looking for Anna and Elsa, and points him toward the mountain. He then stays true to his errand: he finds Anna freezing in Arendelle's castle, lights a fire to warm her at the risk of melting, and reminds her that some people are worth melting for. His lightness contrasts with the world's stakes, where Larxene is stalking Elsa's heart, and Sora sees in him proof that a heart can be born in the unlikeliest of creations.",
        ),
      },
    ],
    trivia: [
      L("La collecte des morceaux d'Olaf est l'un des rares mini-jeux de Kingdom Hearts III intégrés directement à l'exploration d'un monde.", "Gathering Olaf's pieces is one of the few Kingdom Hearts III mini-games built directly into a world's exploration."),
      L("Josh Gad reprend son rôle dans le jeu, ce qui n'est pas le cas de tous les acteurs du film.", "Josh Gad reprises his role in the game, which is not the case for every actor from the film."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Olaf", url: "https://kingdomhearts.fandom.com/wiki/Olaf" },
    ],
  },

  // ─────────────────────────── Raiponce ───────────────────────────
  "rapunzel": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Raiponce vient de Raiponce (2010), relecture du conte des frères Grimm par les studios Disney. Enlevée bébé pour ses cheveux magiques, capables de guérir et de rendre la jeunesse, elle est élevée dans une tour isolée par Mère Gothel, qui se fait passer pour sa mère. Mandy Moore, sa voix originale au cinéma, reprend le rôle dans Kingdom Hearts III.\n\nLe jeu adapte le film presque scène par scène et confie à Raiponce un statut nouveau : elle est l'un des Nouveaux Sept Cœurs, ces cœurs purs que l'Organisation XIII cherche à réunir pour forger la χ-blade. Marluxia est chargé de l'observer. Son arme reste la poêle à frire du film, à laquelle s'ajoute sa chevelure, dont elle se sert comme d'un fouet ou d'un grappin. Le Royaume de Corona est aussi l'un des mondes les plus vastes du jeu, avec sa forêt, sa tour et son port.",
          "Rapunzel comes from Tangled (2010), Disney's retelling of the Brothers Grimm tale. Stolen as a baby for her magic hair, which can heal and restore youth, she is raised in an isolated tower by Mother Gothel, who passes herself off as her mother. Mandy Moore, her original screen voice, reprises the role in Kingdom Hearts III.\n\nThe game adapts the film almost scene for scene and gives Rapunzel a new status: she is one of the New Seven Hearts, the pure hearts Organization XIII seeks to gather to forge the χ-blade. Marluxia is tasked with watching her. Her weapon is still the film's frying pan, joined by her hair, which she uses as a whip or a grappling line. The Kingdom of Corona is also one of the game's largest worlds, with its forest, its tower and its harbour.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo découvrent Raiponce au pied de sa tour, le jour où elle en sort pour la première fois, tiraillée entre l'exaltation et la culpabilité. Ils l'escortent jusqu'à la capitale de Corona pour voir de près les lanternes que l'on fait monter chaque année le soir de son anniversaire, en traversant la forêt et l'auberge du Canard Boiteux. Marluxia les intercepte en chemin et confirme, en la voyant repousser les ténèbres, qu'elle est bien l'un des Nouveaux Sept Cœurs.\n\nMère Gothel manipule la jeune fille pour la ramener à sa tour, puis poignarde Flynn afin qu'il ne puisse jamais la reprendre. Raiponce accepte de la suivre pour toujours en échange du droit de le soigner ; Flynn tranche alors la chevelure magique, ce qui détruit Gothel. Les larmes de Raiponce, dernier reste de son pouvoir, ramènent Flynn à la vie. Le monde s'achève sur son retour au château, où le roi et la reine retrouvent la fille qu'ils croyaient perdue.",
          "Sora, Donald and Goofy find Rapunzel at the foot of her tower on the day she leaves it for the first time, torn between exhilaration and guilt. They escort her to Corona's capital to see up close the lanterns raised every year on her birthday, crossing the forest and the Snuggly Duckling tavern. Marluxia intercepts them on the way and confirms, seeing her push back the darkness, that she is indeed one of the New Seven Hearts.\n\nMother Gothel manipulates the girl into returning to her tower, then stabs Flynn so he can never take her away. Rapunzel agrees to follow Gothel forever in exchange for the right to heal him; Flynn then cuts off the magic hair, which destroys Gothel. Rapunzel's tears, the last trace of her power, bring Flynn back to life. The world closes on her return to the castle, where the king and queen find again the daughter they thought lost.",
        ),
      },
    ],
    trivia: [
      L("Raiponce est l'une des rares personnages Disney de la saga à disposer d'attaques de groupe scénarisées avec Sora, via ses cheveux.", "Rapunzel is one of the few Disney characters in the series with scripted team attacks alongside Sora, using her hair."),
      L("Le nom des Nouveaux Sept Cœurs n'est prononcé qu'à partir de Kingdom Hearts III : ils remplacent les Princesses de Cœur devenues inaccessibles.", "The New Seven Hearts are only named from Kingdom Hearts III onward: they replace the Princesses of Heart, who have become out of reach."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Rapunzel", url: "https://kingdomhearts.fandom.com/wiki/Rapunzel" },
    ],
  },

  // ─────────────────────────── Flynn Rider ───────────────────────────
  "flynn-rider": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Flynn Rider est le nom d'emprunt d'Eugene Fitzherbert, voleur charmeur et vantard de Raiponce (2010), doublé au cinéma comme dans le jeu par Zachary Levi. Le film en fait un orphelin qui s'est inventé un personnage de roman d'aventures pour se donner une contenance, et qui redevient Eugene à mesure qu'il s'attache à Raiponce.\n\nKingdom Hearts III le conserve tel quel et lui donne un rôle mécanique appréciable : il est l'un des rares alliés Disney du jeu à combattre aux côtés de Sora sur toute la durée d'un monde, avec ses attaques rapides à l'épée et son sens du duel. Sa relation avec Raiponce sert de fil au Royaume de Corona, tandis que l'Organisation XIII, par la voix de Marluxia, guette celle qu'elle a identifiée comme l'un des Nouveaux Sept Cœurs.",
          "Flynn Rider is the assumed name of Eugene Fitzherbert, the swaggering charmer-thief of Tangled (2010), voiced in the film and the game by Zachary Levi. The film makes him an orphan who invented an adventure-novel persona to give himself a front, and who becomes Eugene again as he grows attached to Rapunzel.\n\nKingdom Hearts III keeps him as he is and gives him a welcome mechanical role: he is one of the game's few Disney allies to fight beside Sora for the length of a whole world, with quick sword attacks and a duellist's flair. His relationship with Rapunzel threads through the Kingdom of Corona, while Organization XIII, in the voice of Marluxia, watches the girl it has identified as one of the New Seven Hearts.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Poursuivi par la garde royale après avoir dérobé la couronne de la princesse disparue, Flynn se réfugie dans la tour de Raiponce, où celle-ci l'assomme d'un coup de poêle et le contraint à lui servir de guide. Sora, Donald et Dingo se joignent à eux dans la forêt : Flynn rejoint alors l'équipe et combat les Sans-cœur à l'épée pendant la traversée jusqu'à Corona.\n\nSa méfiance envers Sora s'estompe à mesure qu'il renonce à son personnage de voleur. Après la nuit des lanternes, Mère Gothel le fait passer pour un traître, le livre à la garde puis le poignarde dans la tour. Refusant que Raiponce sacrifie sa liberté pour le sauver, Flynn coupe la chevelure magique : Gothel vieillit et disparaît, et lui-même meurt dans les bras de la jeune fille avant que la dernière larme de son pouvoir ne le ranime. Il redevient alors Eugene, aux côtés de la princesse retrouvée de Corona.",
          "Chased by the royal guard after stealing the lost princess's crown, Flynn takes refuge in Rapunzel's tower, where she knocks him out with a frying pan and presses him into service as a guide. Sora, Donald and Goofy join them in the forest: Flynn then joins the party and fights the Heartless with his sword all the way to Corona.\n\nHis mistrust of Sora fades as he lets go of his thief persona. After the night of the lanterns, Mother Gothel frames him as a traitor, hands him to the guard, then stabs him in the tower. Refusing to let Rapunzel trade away her freedom to save him, Flynn cuts off the magic hair: Gothel ages and vanishes, and he himself dies in the girl's arms before the last tear of her power revives him. He becomes Eugene again, at the side of Corona's recovered princess.",
        ),
      },
    ],
    trivia: [
      L("Flynn est l'un des rares compagnons de Kingdom Hearts III à utiliser une épée classique, arme rare chez les alliés Disney.", "Flynn is one of the few Kingdom Hearts III companions to use a conventional sword, a rare weapon among Disney allies."),
      L("Zachary Levi reprend son rôle du film pour la version anglaise du jeu.", "Zachary Levi reprises his film role for the game's English version."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Flynn Rider", url: "https://kingdomhearts.fandom.com/wiki/Flynn_Rider" },
    ],
  },

  // ─────────────────────────── Woody ───────────────────────────
  "woody": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Woody est le cow-boy de chiffon de Toy Story (1995), premier long métrage entièrement en images de synthèse, et le jouet préféré du petit Andy. Son autorité bienveillante sur la chambre, sa jalousie initiale envers Buzz l'Éclair et sa loyauté envers son propriétaire fondent tout l'univers Pixar de la série. Dans Kingdom Hearts III, il est doublé en anglais par Jim Hanks, frère de Tom Hanks et voix habituelle du personnage dans les produits dérivés.\n\nLa Boîte à Jouets n'adapte aucun film en particulier : c'est un scénario inédit, écrit avec l'accord de Pixar, qui se déroule après les événements de Toy Story 3. Le monde exploite une idée que la saga ne pouvait pas laisser passer : des jouets qui parlent et bougent alors qu'ils n'ont, en principe, pas de cœur. Woody y devient le porte-parole de la réponse du jeu : un jouet reçoit un cœur de l'enfant qui l'aime.",
          "Woody is the rag-doll cowboy of Toy Story (1995), the first fully computer-animated feature, and young Andy's favourite toy. His kindly authority over the bedroom, his early jealousy of Buzz Lightyear and his loyalty to his owner underpin the whole Pixar side of the series. In Kingdom Hearts III he is voiced in English by Jim Hanks, Tom Hanks's brother and the character's usual voice in tie-in products.\n\nToy Box adapts no particular film: it is an original story, written with Pixar's approval, set after the events of Toy Story 3. The world exploits an idea the saga could not pass up: toys that talk and move although they should, in principle, have no heart. Woody becomes the spokesman for the game's answer: a toy receives a heart from the child who loves it.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo débarquent dans la chambre d'Andy transformés en jouets. Woody et Buzz s'aperçoivent que la maison est vide : Andy et les autres jouets ont disparu, et le quartier est envahi de Sans-cœur. Les recherches conduisent le groupe au magasin Galaxy Toys, où le jeune Xehanort mène une expérience : il a coupé ce fragment de monde de sa réalité pour observer ce qu'il advient de cœurs qui n'auraient jamais dû exister.\n\nLe jeune Xehanort tente de convaincre les jouets qu'ils sont vides et que leurs amis ont été effacés. Woody refuse de céder et lui oppose une conviction simple : leur attachement à Andy est réel, donc leur cœur l'est aussi. Il aide Sora à traverser les étages du magasin, à piloter les robots Gigas et à vaincre le Roi des Jouets. Une fois la coupure refermée, Andy et les autres réapparaissent, et Woody reprend sa place au fond de la chambre comme si rien n'avait eu lieu.",
          "Sora, Donald and Goofy land in Andy's room turned into toys. Woody and Buzz realise the house is empty: Andy and the other toys are gone, and the neighbourhood swarms with Heartless. The search leads the group to the Galaxy Toys store, where Young Xehanort is running an experiment: he has cut this fragment of world off from its reality to observe what becomes of hearts that should never have existed.\n\nYoung Xehanort tries to convince the toys that they are empty and that their friends have been erased. Woody refuses to yield and answers with a simple conviction: their attachment to Andy is real, so their hearts are too. He helps Sora through the store's floors, piloting the Gigas robots and defeating the King of Toys. Once the rift is closed, Andy and the others reappear, and Woody takes his place at the back of the bedroom as though nothing had happened.",
        ),
      },
    ],
    trivia: [
      L("La Boîte à Jouets est le premier monde Pixar de la saga : il a fallu attendre Kingdom Hearts III pour que Disney en autorise l'usage.", "Toy Box is the series' first Pixar world: it took until Kingdom Hearts III for Disney to allow their use."),
      L("Jim Hanks double Woody dans le jeu ; il assure la voix du personnage dans la plupart des jeux et attractions depuis les années 2000.", "Jim Hanks voices Woody in the game; he has been the character's voice in most games and attractions since the 2000s."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Woody", url: "https://kingdomhearts.fandom.com/wiki/Woody" },
    ],
  },

  // ─────────────────────────── Buzz l'Éclair ───────────────────────────
  "buzz-lightyear": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Buzz l'Éclair est le ranger de l'espace de Toy Story (1995), jouet dernier cri persuadé, dans le premier film, d'être un véritable astronaute en mission. Sa découverte de sa nature de jouet et son amitié avec Woody constituent le cœur de la trilogie Pixar. Kingdom Hearts III le retrouve bien après cette prise de conscience : il sait parfaitement ce qu'il est.\n\nLe jeu se sert de cette lucidité comme d'un point faible. Là où Woody croit d'instinct à l'existence de leur cœur, Buzz raisonne, doute et cherche des preuves ; le jeune Xehanort n'a plus qu'à s'engouffrer dans cette brèche. Cette opposition entre foi et raisonnement fait de la Boîte à Jouets l'un des mondes de la saga les plus directement consacrés à la question du cœur, sans passer par une intrigue Disney préexistante.",
          "Buzz Lightyear is the space ranger of Toy Story (1995), a state-of-the-art toy convinced, in the first film, that he is a real astronaut on a mission. His discovery that he is a toy, and his friendship with Woody, form the heart of the Pixar trilogy. Kingdom Hearts III meets him long after that realisation: he knows exactly what he is.\n\nThe game uses that clear-sightedness as a weak point. Where Woody instinctively believes in their hearts, Buzz reasons, doubts and looks for proof; Young Xehanort has only to push into that gap. The opposition between faith and reasoning makes Toy Box one of the series' worlds most directly devoted to the question of the heart, without going through a pre-existing Disney plot.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Buzz accueille Sora avec méfiance dans la chambre d'Andy, mais accepte de mener l'enquête sur la disparition des autres jouets. Il rejoint l'équipe et combat au laser et au poing, avec des attaques combinées où Sora l'utilise comme projectile.\n\nAu magasin Galaxy Toys, le jeune Xehanort lui montre une chambre d'Andy factice, vide de toute présence, et lui affirme que ses amis n'ont jamais eu d'existence propre. Le doute suffit : la lumière du cœur de Buzz s'éteint, il devient inerte puis se retourne contre le groupe avant d'être enfermé dans un robot Gigas piloté par les ténèbres. Sora doit l'affronter, tandis que Woody s'obstine à lui parler d'Andy et des souvenirs qu'ils ont partagés. Le ranger revient à lui, honteux d'avoir douté, et participe à la bataille finale contre le Roi des Jouets. Le jeune Xehanort repart en constatant que son expérience a échoué : ces cœurs-là existaient bel et bien.",
          "Buzz greets Sora with suspicion in Andy's room but agrees to investigate the other toys' disappearance. He joins the party and fights with laser and fists, with team attacks in which Sora uses him as a projectile.\n\nIn the Galaxy Toys store, Young Xehanort shows him a fake Andy's room, empty of any presence, and tells him his friends never had an existence of their own. Doubt is enough: the light in Buzz's heart goes out, he falls inert, then turns on the group before being sealed inside a Gigas robot piloted by darkness. Sora has to fight him while Woody keeps talking to him about Andy and the memories they shared. The ranger comes back to himself, ashamed of having doubted, and takes part in the final battle against the King of Toys. Young Xehanort leaves noting that his experiment has failed: those hearts did exist after all.",
        ),
      },
    ],
    trivia: [
      L("Le magasin Galaxy Toys du jeu est une création originale : il n'apparaît dans aucun film Toy Story.", "The game's Galaxy Toys store is an original creation: it appears in no Toy Story film."),
      L("Les robots Gigas pilotables de la Boîte à Jouets sont l'un des rares systèmes de combat propres à un seul monde de Kingdom Hearts III.", "The pilotable Gigas robots of Toy Box are one of the few combat systems exclusive to a single Kingdom Hearts III world."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Buzz Lightyear", url: "https://kingdomhearts.fandom.com/wiki/Buzz_Lightyear" },
    ],
  },

  // ─────────────────────────── Baymax ───────────────────────────
  "baymax": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Baymax est le robot infirmier des Nouveaux Héros (2014), conçu par Tadashi Hamada pour soigner et rassurer. Son corps gonflable, sa voix calme et son protocole médical en font l'un des personnages Disney les plus atypiques ; Scott Adsit, sa voix originale, reprend le rôle dans Kingdom Hearts III. Après la mort de Tadashi, son frère Hiro équipe le robot d'une armure et d'une puce de combat pour en faire un héros.\n\nSan Fransokyo est l'un des mondes les plus tardifs de Kingdom Hearts III et prolonge le film plutôt qu'il ne l'adapte : les Big Hero 6 existent déjà, et l'histoire tourne autour de la première puce de combat de Baymax, perdue dans le portail à la fin du long métrage. Le monde permet aussi à Sora de survoler librement la ville accroché au robot, l'un des rares moments de vol libre de la saga.",
          "Baymax is the nurse robot of Big Hero 6 (2014), built by Tadashi Hamada to heal and reassure. His inflatable body, calm voice and medical protocol make him one of the most unusual Disney characters; Scott Adsit, his original voice, reprises the role in Kingdom Hearts III. After Tadashi's death, his brother Hiro fits the robot with armour and a combat chip to make him a hero.\n\nSan Fransokyo is one of Kingdom Hearts III's late worlds and extends the film rather than adapting it: Big Hero 6 already exist, and the story revolves around Baymax's first combat chip, lost in the portal at the end of the feature. The world also lets Sora fly freely over the city clinging to the robot, one of the series' rare free-flight sequences.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora arrive à San Fransokyo alors que des Sans-cœur émergent de cubes de données noirs semés dans la ville. Baymax le prend en charge selon son protocole de soins, puis l'emmène en vol au-dessus des toits pour repousser l'invasion aux côtés d'Hiro, Go Go, Wasabi, Honey Lemon et Fred. Le robot combat avec ses poings-fusées tout en signalant scrupuleusement l'état de santé de ses coéquipiers.\n\nL'Organisation XIII a récupéré la puce de combat perdue du premier Baymax et s'en est servie pour animer un second robot, corrompu par les ténèbres. Ce Baymax noir attaque la ville et Sora doit l'affronter, ce qui place Hiro devant l'image même de ce qu'il avait renoncé à faire de sa création. Le double est finalement libéré des ténèbres, et Baymax veille sur lui le temps qu'il redémarre. Sora repart en emportant la leçon du robot : réparer plutôt que détruire.",
          "Sora reaches San Fransokyo as Heartless pour out of black data cubes scattered through the city. Baymax takes charge of him according to his care protocol, then carries him in flight over the rooftops to push back the invasion alongside Hiro, Go Go, Wasabi, Honey Lemon and Fred. The robot fights with his rocket fists while scrupulously reporting on his teammates' health.\n\nOrganization XIII has retrieved the first Baymax's lost combat chip and used it to animate a second robot, corrupted by darkness. This dark Baymax attacks the city and Sora must fight it, confronting Hiro with the very image of what he had given up making of his creation. The double is finally freed from the darkness, and Baymax watches over it while it reboots. Sora leaves carrying the robot's lesson: repair rather than destroy.",
        ),
      },
    ],
    trivia: [
      L("Baymax est le seul compagnon de Kingdom Hearts III sur lequel Sora peut s'accrocher pour voler librement au-dessus d'un monde.", "Baymax is Kingdom Hearts III's only companion Sora can cling to in order to fly freely above a world."),
      L("Scott Adsit reprend son rôle du film pour la version anglaise du jeu.", "Scott Adsit reprises his film role for the game's English version."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Baymax", url: "https://kingdomhearts.fandom.com/wiki/Baymax" },
    ],
  },

  // ─────────────────────────── Hiro Hamada ───────────────────────────
  "hiro": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Hiro Hamada est le jeune prodige des Nouveaux Héros (2014) : quatorze ans, un talent de roboticien hors norme et un frère aîné, Tadashi, mort dans l'incendie de l'institut. C'est en héritant de Baymax, la création de Tadashi, qu'il fonde l'équipe des Big Hero 6 avec les amis de son frère. Ryan Potter, sa voix originale, le double dans Kingdom Hearts III.\n\nLe jeu situe San Fransokyo après le film : Hiro dirige l'équipe, conçoit les équipements et travaille à l'université. Le scénario reprend le point le plus douloureux de son histoire, la puce de combat qu'il avait installée dans Baymax pour venger son frère et qu'il avait fini par retirer. En la remettant en circulation, l'Organisation XIII confronte l'adolescent à sa propre colère, thème qui fait écho aux motifs de la saga sans jamais avoir besoin de la Keyblade.",
          "Hiro Hamada is the young prodigy of Big Hero 6 (2014): fourteen years old, an extraordinary talent for robotics, and an older brother, Tadashi, killed in the institute fire. It is by inheriting Baymax, Tadashi's creation, that he founds Big Hero 6 with his brother's friends. Ryan Potter, his original voice, voices him in Kingdom Hearts III.\n\nThe game sets San Fransokyo after the film: Hiro leads the team, designs its gear and studies at the university. The story picks up the most painful point of his history, the combat chip he had installed in Baymax to avenge his brother and eventually removed. By putting it back into circulation, Organization XIII confronts the teenager with his own anger, a theme that echoes the saga's motifs without ever needing the Keyblade.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Hiro accueille Sora comme un allié improvisé lorsque les Sans-cœur, issus de cubes de données noirs, submergent San Fransokyo. Il améliore l'armure de Baymax pour tenir tête à ces créatures et coordonne les Big Hero 6 depuis son atelier, tout en interrogeant Sora sur la nature des cœurs et de ces monstres.\n\nLa découverte d'un second Baymax, animé par la puce de combat perdue et corrompu par les ténèbres, le renvoie brutalement à la nuit où il avait ordonné à son robot de tuer. Il refuse pourtant d'abandonner ce double : plutôt que de le détruire, il cherche à le récupérer et à effacer la programmation qui le pousse à attaquer. Sora l'affronte pour l'immobiliser, et le robot est finalement libéré. Hiro comprend, comme Sora l'avait compris avant lui, que la perte d'un proche ne se répare pas par la vengeance, et le monde se conclut sur la reconstruction de la ville.",
          "Hiro takes Sora on as an improvised ally when Heartless from black data cubes overwhelm San Fransokyo. He upgrades Baymax's armour to stand up to those creatures and coordinates Big Hero 6 from his workshop, while questioning Sora about the nature of hearts and of these monsters.\n\nThe discovery of a second Baymax, driven by the lost combat chip and corrupted by darkness, throws him violently back to the night he ordered his robot to kill. He nonetheless refuses to give up on the double: rather than destroy it, he tries to recover it and wipe the programming pushing it to attack. Sora fights it to immobilise it, and the robot is finally freed. Hiro understands, as Sora had understood before him, that losing someone is not repaired by revenge, and the world closes on the city's rebuilding.",
        ),
      },
    ],
    trivia: [
      L("San Fransokyo est le dernier monde Disney visité dans Kingdom Hearts III avant le Nécropole des Keyblades.", "San Fransokyo is the last Disney world visited in Kingdom Hearts III before the Keyblade Graveyard."),
      L("Ryan Potter, voix de Hiro au cinéma, reprend son rôle dans le jeu.", "Ryan Potter, Hiro's screen voice, reprises his role in the game."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Hiro Hamada", url: "https://kingdomhearts.fandom.com/wiki/Hiro_Hamada" },
    ],
  },

  // ─────────────────────────── Sulli ───────────────────────────
  "sulley": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "James P. Sullivan, dit Sulli, est le grand monstre bleu à cornes de Monstres et Cie (2001), meilleur « terreur » de l'usine qui alimente Monstropolis en énergie grâce aux cris des enfants. Le film raconte comment sa rencontre avec la petite Bouh lui fait découvrir que le rire produit bien plus d'énergie que la peur.\n\nKingdom Hearts III place Monstropolis après le film : l'usine fonctionne désormais au rire, Sulli en est le directeur et Bouh peut y revenir sans danger. Le monde greffe sur cette situation une intrigue originale, où Vanitas et Randall détournent la production d'énergie pour leur propre compte. Il s'agit du seul monde de la saga où l'on croise à la fois des Nescients et un membre de l'Organisation venu du passé, ce qui en fait une étape clé de l'intrigue de Kingdom Hearts III.",
          "James P. Sullivan, known as Sulley, is the big blue horned monster of Monsters, Inc. (2001), the top “scarer” of the factory that powers Monstropolis with children's screams. The film tells how meeting little Boo shows him that laughter produces far more energy than fear.\n\nKingdom Hearts III sets Monstropolis after the film: the factory now runs on laughter, Sulley is its director and Boo can come back safely. The world grafts an original plot onto that situation, in which Vanitas and Randall divert the energy production for their own ends. It is the only world in the series where one meets both Unversed and a member of the Organization come from the past, which makes it a key stage of Kingdom Hearts III's plot.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo, transformés en monstres, sont d'abord pris pour des intrus par Sulli et Bob avant de faire cause commune : Bouh est revenue rendre visite à ses amis et l'usine est envahie de Nescients. Sulli rejoint l'équipe et combat à mains nues, projetant les ennemis d'un rugissement ou d'un revers de patte.\n\nRandall, rentré clandestinement à Monstropolis, s'est allié à Vanitas, qui cherche à extraire le cœur de Bouh pour en faire un réceptacle et à nourrir ses Nescients de la peur des enfants. Sulli protège la petite fille à travers les usines de portes, refuse de croire aux discours de Vanitas sur les cœurs vides, puis affronte l'amalgame de bidons de cris qui menace de tout engloutir. Il apprend de Sora l'existence des ténèbres et des cœurs, et lui rend la pareille en lui montrant qu'un monstre effrayant peut choisir de faire rire. Bouh rentre chez elle et l'usine reprend son rythme.",
          "Sora, Donald and Goofy, turned into monsters, are first taken for intruders by Sulley and Mike before joining forces: Boo has come back to visit her friends and the factory is overrun with Unversed. Sulley joins the party and fights bare-handed, sending enemies flying with a roar or a swipe of his paw.\n\nRandall, who has sneaked back into Monstropolis, has allied with Vanitas, who seeks to extract Boo's heart to make it a vessel and to feed his Unversed on children's fear. Sulley shields the little girl through the door factories, refuses to believe Vanitas's talk of empty hearts, then faces the mass of scream canisters threatening to swallow everything. He learns from Sora about darkness and hearts, and repays him by showing that a frightening monster can choose to make people laugh. Boo goes home and the factory returns to its rhythm.",
        ),
      },
    ],
    trivia: [
      L("Monstropolis est le seul monde de Kingdom Hearts III où Sora, Donald et Dingo sont métamorphosés en monstres pour toute la durée de la visite.", "Monstropolis is the only Kingdom Hearts III world where Sora, Donald and Goofy are turned into monsters for the whole visit."),
      L("C'est dans ce monde que Vanitas réapparaît pour la première fois dans le présent de la saga, plus de dix ans après Birth by Sleep.", "It is in this world that Vanitas reappears for the first time in the saga's present, more than ten years after Birth by Sleep."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Sulley", url: "https://kingdomhearts.fandom.com/wiki/Sulley" },
    ],
  },

  // ─────────────────────────── Bob Razowski ───────────────────────────
  "mike-wazowski": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Bob Razowski est la petite sphère verte à œil unique de Monstres et Cie (2001), assistant et meilleur ami de Sulli, aussi bavard que soucieux de sa carrière et de sa fiancée Célia. Le film et sa préquelle en font le cerveau organisateur du duo, celui qui remplit les formulaires pendant que Sulli récolte la gloire.\n\nKingdom Hearts III le retrouve après la conversion de l'usine au rire : Bob y est devenu un comique professionnel, ce qui lui donne, pour la première fois, une utilité au combat. Ses blagues servent littéralement d'attaques, et il déclenche avec Sulli des actions d'équipe empruntées aux gags du film. Sa présence garantit au monde de Monstropolis un ton comique constant, en contrepoint de l'intrigue de Vanitas et du sort réservé au cœur de Bouh.",
          "Mike Wazowski is the small green one-eyed sphere of Monsters, Inc. (2001), Sulley's assistant and best friend, as talkative as he is concerned with his career and his girlfriend Celia. The film and its prequel make him the organising brain of the duo, the one who fills in the paperwork while Sulley collects the glory.\n\nKingdom Hearts III finds him after the factory's switch to laughter: Mike has become a professional comedian, which gives him, for the first time, a use in combat. His jokes literally serve as attacks, and with Sulley he triggers team actions borrowed from the film's gags. His presence guarantees Monstropolis a steady comic tone, in counterpoint to Vanitas's plot and the fate awaiting Boo's heart.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Bob rejoint l'équipe de Sora dès l'arrivée de Bouh dans l'usine et l'accompagne à travers les entrepôts de portes. Il combat en lançant des gags, en projetant des accessoires de scène et, avec Sulli, en enchaînant des figures acrobatiques qui balaient les Nescients.\n\nSon obsession pour la sécurité du site et pour la réputation de la compagnie le rend d'abord réticent à croire les explications de Sora sur les mondes et les cœurs. Il découvre pourtant Randall en pleine trahison, comprend que quelqu'un détourne l'énergie de l'usine et se range aux côtés de son associé pour protéger Bouh. Lorsque Vanitas déclare aux monstres qu'ils ne sont que des outils sans cœur, c'est Bob qui répond le plus vertement, avant de participer à l'affrontement final contre la masse de bidons de cris. Le monde se referme sur son retour à la scène, devant une salle pleine d'enfants qui rient.",
          "Mike joins Sora's team as soon as Boo arrives in the factory and goes with them through the door warehouses. He fights by throwing out jokes, hurling stage props and, with Sulley, chaining acrobatic moves that sweep the Unversed away.\n\nHis obsession with the site's safety and the company's reputation makes him reluctant at first to believe Sora's explanations about worlds and hearts. He nonetheless catches Randall in the act of betrayal, works out that someone is siphoning the factory's energy, and sides with his partner to protect Boo. When Vanitas tells the monsters they are nothing but heartless tools, it is Mike who answers most sharply, before taking part in the final fight against the mass of scream canisters. The world closes on his return to the stage, before a room full of laughing children.",
        ),
      },
    ],
    trivia: [
      L("Le nom français officiel du personnage est Bob Razowski, tandis que la version originale conserve Mike Wazowski.", "The official French name of the character is Bob Razowski, while the original version keeps Mike Wazowski."),
      L("Les actions d'équipe de Sulli et Bob à Monstropolis rejouent plusieurs gags visuels du film de 2001.", "The Sulley and Mike team actions in Monstropolis replay several visual gags from the 2001 film."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Mike Wazowski", url: "https://kingdomhearts.fandom.com/wiki/Mike_Wazowski" },
    ],
  },

  // ─────────────────────────── Bouh ───────────────────────────
  "boo": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Bouh est la petite fille humaine de Monstres et Cie (2001), qui franchit accidentellement une porte de placard et se retrouve à Monstropolis, où les enfants sont réputés toxiques. Son vrai prénom, Mary, n'est révélé qu'en marge du film ; le surnom que lui donne Sulli lui reste. À la fin du long métrage, sa porte est reconstruite pour que les deux amis puissent se revoir.\n\nKingdom Hearts III part de ce point : Bouh peut désormais rendre visite à l'usine, désormais alimentée par le rire. Le jeu lui donne un rôle plus lourd que son âge ne le laisse supposer, puisque son cœur pur intéresse directement Vanitas. Elle n'a que quelques mots de vocabulaire et ne comprend rien à ce qui l'entoure, ce qui rend d'autant plus frappante la scène où elle console Sora — l'un des rares moments où un personnage Disney perçoit la mélancolie du héros.",
          "Boo is the little human girl of Monsters, Inc. (2001), who accidentally slips through a closet door and ends up in Monstropolis, where children are believed toxic. Her real name, Mary, is only revealed in the film's margins; the nickname Sulley gives her sticks. At the end of the feature, her door is rebuilt so the two friends can meet again.\n\nKingdom Hearts III starts from that point: Boo can now visit the factory, which now runs on laughter. The game gives her a heavier role than her age suggests, since her pure heart is of direct interest to Vanitas. She has only a few words of vocabulary and understands nothing of what surrounds her, which makes all the more striking the scene where she comforts Sora — one of the rare moments when a Disney character perceives the hero's melancholy.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Bouh revient à Monstropolis pour voir Sulli et Bob au moment précis où l'usine est envahie de Nescients. Randall, revenu clandestinement et allié à Vanitas, cherche à s'emparer d'elle : les larmes et la peur d'un enfant restent la matière première la plus rentable, et Vanitas y voit surtout un cœur assez pur pour servir de réceptacle.\n\nSora, Sulli et Bob l'escortent à travers les entrepôts de portes, la cachent dans un sac et déjouent plusieurs tentatives d'enlèvement. Lorsque Sora se retrouve accablé par ses doutes, c'est Bouh qui vient poser la main sur lui, geste enfantin qui suffit à le remettre debout. Après la défaite de Vanitas et de Randall, la petite fille rentre chez elle par sa porte, en promettant à sa manière de revenir. Sora repart avec la conviction qu'un cœur d'enfant, même incapable de s'expliquer, éclaire tout ce qui l'entoure.",
          "Boo comes back to Monstropolis to see Sulley and Mike at the exact moment the factory is overrun by Unversed. Randall, who has sneaked back and allied with Vanitas, is trying to seize her: a child's tears and fear remain the most profitable raw material, and Vanitas above all sees in her a heart pure enough to serve as a vessel.\n\nSora, Sulley and Mike escort her through the door warehouses, hide her in a bag and foil several kidnapping attempts. When Sora is weighed down by his doubts, it is Boo who comes and puts a hand on him, a childish gesture that is enough to get him back on his feet. After Vanitas's and Randall's defeat, the little girl goes home through her door, promising in her own way to come back. Sora leaves convinced that a child's heart, even unable to explain itself, lights up everything around it.",
        ),
      },
    ],
    trivia: [
      L("Bouh ne prononce jamais de phrase complète dans le jeu, conformément au film ; ses répliques sont des onomatopées.", "Boo never speaks a full sentence in the game, in keeping with the film; her lines are all sounds and babble."),
      L("La scène où elle réconforte Sora est l'une des rares occasions où un personnage Disney remarque son abattement dans Kingdom Hearts III.", "The scene where she comforts Sora is one of the rare occasions when a Disney character notices his low spirits in Kingdom Hearts III."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Boo", url: "https://kingdomhearts.fandom.com/wiki/Boo" },
    ],
  },

  // ─────────────────────────── Cendrillon ───────────────────────────
  "cinderella": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Cendrillon vient du long métrage Disney de 1950, adapté de Perrault : orpheline réduite au rang de servante par sa belle-mère Lady Trémaine et ses deux demi-sœurs, elle voit sa marraine la fée transformer une citrouille en carrosse pour l'envoyer au bal du prince. Sa voix anglaise dans les jeux est celle de Jennifer Hale.\n\nKingdom Hearts en fait l'une des sept Princesses de Cœur, ces jeunes filles dont le cœur ne contient aucune trace de ténèbres et dont la réunion permet d'ouvrir la Porte ultime. Elle est ainsi présente dès le premier jeu, en captive, avant que Birth by Sleep ne raconte son histoire pour de bon, dix ans plus tôt, dans le monde du Palais des Rêves. Sa réplique la plus citée dans la saga — un rêve est un souhait que fait le cœur — résume à elle seule ce que la série entend par « lumière ».",
          "Cinderella comes from the 1950 Disney feature adapted from Perrault: an orphan reduced to servitude by her stepmother Lady Tremaine and her two stepsisters, she sees her fairy godmother turn a pumpkin into a coach to send her to the prince's ball. Her English voice in the games is Jennifer Hale's.\n\nKingdom Hearts makes her one of the seven Princesses of Heart, the maidens whose hearts hold no trace of darkness and whose gathering opens the final Keyhole. She is therefore present from the first game onward, as a captive, before Birth by Sleep properly tells her story, ten years earlier, in the world of Castle of Dreams. Her most quoted line in the series — a dream is a wish your heart makes — sums up on its own what the series means by “light”.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Le Palais des Rêves accueille successivement les trois porteurs. Ventus arrive alors que Jacquot et les souris cousent la robe de Cendrillon ; il les aide à rassembler les fournitures, avant que Lady Trémaine et ses filles ne mettent la robe en pièces. La jalousie de la belle-mère donne naissance à un Nescient, le Carrosse Maudit, que Ventus doit affronter.\n\nTerra, présent au bal, protège Cendrillon des Nescients qui envahissent la salle et remarque la force tranquille de sa lumière. Aqua, elle, empêche Lady Trémaine de briser la pantoufle de verre et escorte la jeune fille jusqu'au château pour l'essayage décisif. Chacun des trois amis en retire la même impression : ce cœur-là ne cède ni à l'amertume ni au découragement, alors que tout l'y invite. Cendrillon, de son côté, leur répète que rien n'est perdu tant qu'on continue de croire, conseil que les trois porteurs auront bientôt de bonnes raisons de méditer.",
          "Castle of Dreams welcomes each of the three wielders in turn. Ventus arrives as Jaq and the mice are sewing Cinderella's gown; he helps them gather the materials, before Lady Tremaine and her daughters tear the dress apart. The stepmother's jealousy gives birth to an Unversed, the Cursed Coach, which Ventus must fight.\n\nTerra, present at the ball, shields Cinderella from the Unversed swarming the hall and notes the quiet strength of her light. Aqua stops Lady Tremaine from smashing the glass slipper and escorts the girl to the castle for the decisive fitting. Each of the three friends comes away with the same impression: that heart yields neither to bitterness nor to discouragement, though everything invites it to. Cinderella, for her part, keeps telling them that nothing is lost as long as one keeps believing, advice the three wielders will soon have good reason to weigh.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Dix ans plus tard, Maléfique rassemble les sept Princesses de Cœur pour ouvrir la porte du Kingdom Hearts final. Cendrillon est enlevée et conduite à la Forteresse Oubliée, où elle est enfermée dans une capsule de la Chapelle avec Blanche-Neige, Aurore, Belle, Jasmine et Alice ; il ne manque que Kairi, dont le cœur s'est réfugié en Sora.\n\nQuand Sora libère le cœur de Kairi, la Serrure finale s'ouvre malgré tout et les princesses se retrouvent réunies dans la salle du trône. Elles ne peuvent pas se battre, mais leur lumière maintient ouverte une voie vers le Bout du Monde, et c'est grâce à elles que Sora, Donald et Dingo peuvent poursuivre Ansem. Cendrillon compte parmi celles qui promettent d'entretenir cette lumière le temps nécessaire, avant de retourner dans son monde une fois la porte de Kingdom Hearts scellée.",
          "Ten years later, Maleficent gathers the seven Princesses of Heart to open the door to the final Kingdom Hearts. Cinderella is abducted and taken to Hollow Bastion, where she is sealed in a pod in the Chapel with Snow White, Aurora, Belle, Jasmine and Alice; only Kairi is missing, her heart having taken shelter within Sora.\n\nWhen Sora frees Kairi's heart, the final Keyhole opens all the same and the princesses find themselves gathered in the throne room. They cannot fight, but their light holds open a path to the End of the World, and it is thanks to them that Sora, Donald and Goofy can pursue Ansem. Cinderella is among those who promise to keep that light burning as long as needed, before returning to her own world once the door to Kingdom Hearts is sealed.",
        ),
      },
    ],
    trivia: [
      L("Le Palais des Rêves n'apparaît que dans Birth by Sleep : dans le premier Kingdom Hearts, Cendrillon n'est vue qu'à la Forteresse Oubliée.", "Castle of Dreams appears only in Birth by Sleep: in the first Kingdom Hearts, Cinderella is seen only at Hollow Bastion."),
      L("Jennifer Hale double à la fois Cendrillon et Aurore dans les versions anglaises des jeux.", "Jennifer Hale voices both Cinderella and Aurora in the games' English versions."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Cinderella", url: "https://kingdomhearts.fandom.com/wiki/Cinderella" },
    ],
  },

  // ─────────────────────────── Blanche-Neige ───────────────────────────
  "snow-white": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Blanche-Neige est l'héroïne du tout premier long métrage d'animation des studios Disney, sorti en 1937. Persécutée par sa belle-mère la Reine, qui interroge chaque jour son Miroir magique, elle fuit dans la forêt et trouve refuge chez sept nains, avant d'être endormie par une pomme empoisonnée.\n\nKingdom Hearts la compte parmi les sept Princesses de Cœur : son cœur, exempt de toute ténèbre, fait d'elle une cible pour Maléfique dès le premier jeu. Birth by Sleep raconte ensuite son conte dans le monde de la Forêt des Nains, en confiant à Terra, Ventus et Aqua trois moments différents de l'histoire. Le contraste entre son extrême douceur et la violence de la Reine sert au jeu à illustrer une idée simple : une lumière pure attire les ténèbres autant qu'elle les repousse.",
          "Snow White is the heroine of the very first Disney animated feature, released in 1937. Persecuted by her stepmother the Queen, who questions her Magic Mirror daily, she flees into the forest and takes refuge with seven dwarfs, before being put to sleep by a poisoned apple.\n\nKingdom Hearts counts her among the seven Princesses of Heart: her heart, free of any darkness, makes her a target for Maleficent from the first game. Birth by Sleep then tells her tale in the world of Dwarf Woodlands, giving Terra, Ventus and Aqua three different moments of the story. The contrast between her extreme gentleness and the Queen's violence lets the game illustrate a simple idea: a pure light draws darkness as much as it repels it.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Terra arrive à la Forêt des Nains alors que la Reine vient d'ordonner la mort de Blanche-Neige. Sa silhouette et son armure effraient la jeune fille, qui s'enfuit dans la forêt hantée ; Terra la poursuit sans parvenir à la rassurer, épisode qui nourrit chez lui le sentiment d'être perçu comme une menace. Ventus, arrivé après lui, la retrouve et la conduit jusqu'à la maison des sept nains.\n\nAqua, enfin, affronte le Miroir magique après que la Reine, folle de rage, l'a interrogé une fois de trop. Elle arrive trop tard pour empêcher la pomme empoisonnée : Blanche-Neige gît, endormie, veillée par les nains en larmes. Aqua reste auprès d'eux et assiste au baiser du prince qui rompt le sortilège. Ce sommeil, présenté comme une mort apparente, résonne avec le sort qui attend Ventus quelques mois plus tard, et le jeu établit ainsi un parallèle entre les cœurs endormis et les Princesses de Cœur.",
          "Terra arrives in Dwarf Woodlands just as the Queen has ordered Snow White's death. His silhouette and armour frighten the girl, who flees into the haunted forest; Terra chases after her without managing to reassure her, an episode that feeds his sense of being seen as a threat. Ventus, arriving later, finds her and leads her to the seven dwarfs' cottage.\n\nAqua, at last, faces the Magic Mirror after the Queen, mad with rage, has questioned it once too often. She comes too late to prevent the poisoned apple: Snow White lies asleep, watched over by the weeping dwarfs. Aqua stays with them and witnesses the prince's kiss that breaks the spell. That sleep, presented as an apparent death, echoes the fate awaiting Ventus a few months later, and the game thus draws a parallel between sleeping hearts and Princesses of Heart.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Blanche-Neige est l'une des sept Princesses de Cœur enlevées par Maléfique et ses alliés. Retenue prisonnière dans la Chapelle de la Forteresse Oubliée, elle est enfermée dans une capsule avec Cendrillon, Aurore, Belle, Jasmine et Alice, en attendant que le cœur de Kairi complète le groupe et ouvre la Serrure finale.\n\nAprès la libération du cœur de Kairi et la défaite de Maléfique, les princesses se retrouvent dans la salle du trône, où elles unissent leur lumière pour retenir les ténèbres qui s'échappent de la Serrure. Elles ouvrent ainsi à Sora, Donald et Dingo un passage vers le Bout du Monde. Blanche-Neige, comme ses compagnes, ne combat jamais : son rôle tient entièrement à la nature de son cœur, ce qui fait des Princesses de Cœur l'un des concepts les plus singuliers du premier jeu.",
          "Snow White is one of the seven Princesses of Heart abducted by Maleficent and her allies. Held in the Chapel of Hollow Bastion, she is sealed in a pod with Cinderella, Aurora, Belle, Jasmine and Alice, waiting for Kairi's heart to complete the group and open the final Keyhole.\n\nAfter Kairi's heart is freed and Maleficent defeated, the princesses gather in the throne room, where they join their light to hold back the darkness pouring out of the Keyhole. In doing so they open a path to the End of the World for Sora, Donald and Goofy. Snow White, like her companions, never fights: her role rests entirely on the nature of her heart, which makes the Princesses of Heart one of the first game's most singular concepts.",
        ),
      },
    ],
    trivia: [
      L("Blanche-Neige est la seule Princesse de Cœur dont le monde d'origine, la Forêt des Nains, n'apparaît que dans Birth by Sleep.", "Snow White is the only Princess of Heart whose home world, Dwarf Woodlands, appears only in Birth by Sleep."),
      L("La Reine se sert de son Miroir magique comme d'un artefact capable de voir d'autres mondes, ce que le jeu ajoute au conte d'origine.", "The Queen uses her Magic Mirror as an artefact able to see other worlds, an addition the game makes to the original tale."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Snow White", url: "https://kingdomhearts.fandom.com/wiki/Snow_White" },
    ],
  },

  // ─────────────────────────── Aurore ───────────────────────────
  "aurora": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Aurore est la princesse de La Belle au bois dormant (1959), maudite à sa naissance par Maléfique et cachée dans la forêt par les trois bonnes fées Flora, Pâquerette et Pimprenelle sous le nom de Rose. Le sortilège la plonge dans un sommeil dont seul le baiser du prince Philippe peut la tirer. Jennifer Hale la double en anglais dans les jeux.\n\nSa présence dans Kingdom Hearts a une importance particulière : elle est l'une des sept Princesses de Cœur, et Maléfique, principale antagoniste Disney du premier jeu, est aussi sa persécutrice d'origine. Birth by Sleep en fait le théâtre d'un moment charnière de la saga : c'est sur elle que Terra, manipulé, emploie pour la première fois la Keyblade pour arracher un cœur, technique dont dérive tout ce que l'Organisation XIII fera par la suite.",
          "Aurora is the princess of Sleeping Beauty (1959), cursed at birth by Maleficent and hidden in the forest by the three good fairies Flora, Fauna and Merryweather under the name Briar Rose. The spell plunges her into a sleep from which only Prince Phillip's kiss can wake her. Jennifer Hale voices her in English in the games.\n\nHer presence in Kingdom Hearts carries particular weight: she is one of the seven Princesses of Heart, and Maleficent, the first game's chief Disney antagonist, is also her original tormentor. Birth by Sleep makes her the stage for a pivotal moment in the saga: it is on her that Terra, manipulated, first uses the Keyblade to tear out a heart, the technique from which everything Organization XIII later does derives.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Terra arrive au Domaine Enchanté alors qu'Aurore vient de succomber au sortilège. Maléfique lui explique que la Keyblade peut prendre un cœur comme elle ouvre une serrure, et le pousse à s'emparer de celui de la princesse endormie afin de le placer sous son contrôle. Terra obéit, découvre trop tard qu'il a servi les desseins de la sorcière, et repart honteux.\n\nVentus, sur ses traces, récupère le cœur d'Aurore auprès de Maléfique et le lui restitue, sans pouvoir la réveiller. Aqua, arrivée la dernière, escorte le prince Philippe jusqu'au château, l'aide à traverser les ronces et à affronter Maléfique changée en dragon. Le baiser du prince rompt enfin la malédiction. Ces trois passages font du Domaine Enchanté l'un des mondes les plus lourds de conséquences de Birth by Sleep : c'est là que naît la technique d'extraction des cœurs, et là que Maléfique apprend l'existence des Princesses de Cœur.",
          "Terra arrives in Enchanted Dominion just after Aurora has succumbed to the spell. Maleficent explains that the Keyblade can take a heart the way it opens a lock, and pushes him to seize the sleeping princess's heart so as to place it under her control. Terra obeys, discovers too late that he has served the witch's designs, and leaves in shame.\n\nVentus, on his trail, recovers Aurora's heart from Maleficent and returns it to her, without being able to wake her. Aqua, arriving last, escorts Prince Phillip to the castle, helps him through the thorns and face Maleficent turned dragon. The prince's kiss finally breaks the curse. These three visits make Enchanted Dominion one of Birth by Sleep's most consequential worlds: it is there that the heart-extraction technique is born, and there that Maleficent learns of the Princesses of Heart.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Dix ans après ces événements, Maléfique reprend son projet à plus grande échelle. Aurore est enlevée avec les autres Princesses de Cœur et conduite à la Forteresse Oubliée, où elle est enfermée dans l'une des capsules de la Chapelle en attendant que leurs sept cœurs révèlent la Serrure finale.\n\nSora affronte Maléfique dans la salle du trône, puis sa forme de dragon, avant que la sorcière ne soit dévorée par les ténèbres qu'elle croyait maîtriser. Les princesses libérées unissent alors leur lumière pour contenir un moment la brèche ouverte par la Serrure, permettant à Sora de gagner le Bout du Monde. Aurore retrouve son monde après la fermeture de la porte de Kingdom Hearts, et ne réapparaîtra plus dans la saga, sinon comme référence lorsque l'Organisation évoquera les Princesses de Cœur devenues hors d'atteinte.",
          "Ten years after those events, Maleficent resumes her plan on a larger scale. Aurora is abducted with the other Princesses of Heart and taken to Hollow Bastion, where she is sealed in one of the Chapel's pods while their seven hearts reveal the final Keyhole.\n\nSora fights Maleficent in the throne room, then her dragon form, before the witch is devoured by the darkness she believed she controlled. The freed princesses join their light to hold back for a time the breach opened by the Keyhole, letting Sora reach the End of the World. Aurora returns to her world after the door to Kingdom Hearts is closed, and does not appear again in the saga, except as a reference when the Organization speaks of the Princesses of Heart now beyond reach.",
        ),
      },
    ],
    trivia: [
      L("L'extraction du cœur d'Aurore par Terra est la première utilisation de la Keyblade contre un cœur montrée dans la chronologie de la saga.", "Terra's extraction of Aurora's heart is the first use of the Keyblade against a heart shown in the saga's chronology."),
      L("Maléfique est la seule antagoniste Disney à apparaître à la fois dans le conte d'origine d'une princesse et comme grande méchante de la saga.", "Maleficent is the only Disney villain to appear both in a princess's original tale and as a major villain of the saga."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Aurora", url: "https://kingdomhearts.fandom.com/wiki/Aurora" },
    ],
  },

  // ─────────────────────────── Quasimodo ───────────────────────────
  "quasimodo": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Quasimodo est le sonneur de cloches de Notre-Dame de Paris dans Le Bossu de Notre-Dame (1996), film Disney adapté de Victor Hugo. Recueilli enfant par le juge Claude Frollo, qui l'a persuadé d'être un monstre, il vit reclus dans le clocher en compagnie de trois gargouilles imaginaires et rêve de se mêler une fois à la foule.\n\nKingdom Hearts 3D : Dream Drop Distance fait de Paris — La Cité des Cloches — l'un des Mondes Endormis, visité successivement par Sora et par Riku dans deux versions décalées de la même histoire. Le monde est l'un des rares à adapter un film Disney à l'ambiance sombre, et la question qu'il pose à Quasimodo — obéir à celui qui l'a élevé ou écouter son propre cœur — recoupe exactement l'examen de Maîtrise que les deux garçons sont en train de passer.",
          "Quasimodo is the bell-ringer of Notre-Dame in The Hunchback of Notre Dame (1996), Disney's adaptation of Victor Hugo. Taken in as a child by Judge Claude Frollo, who convinced him he was a monster, he lives shut away in the bell tower with three imaginary gargoyles and dreams of joining the crowd just once.\n\nKingdom Hearts 3D: Dream Drop Distance makes Paris — La Cité des Cloches — one of the Sleeping Worlds, visited in turn by Sora and Riku in two offset versions of the same story. It is one of the few worlds to adapt a darker-toned Disney film, and the question it puts to Quasimodo — obey the man who raised him or listen to his own heart — matches exactly the Mark of Mastery exam the two boys are taking.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora arrive à La Cité des Cloches le jour de la Fête des Fous et pousse Quasimodo à descendre du clocher pour y participer. La foule le couronne roi des fous puis se retourne contre lui, et seuls Sora et la bohémienne Esmeralda prennent sa défense. Riku, de son côté, croise le même Quasimodo à un autre moment et l'encourage lui aussi à ne pas se laisser définir par le regard de Frollo.\n\nQuand Frollo décide de brûler la ville pour débusquer Esmeralda et la fait attacher au bûcher, Quasimodo brise enfin sa chaîne morale : il descend en rappel le long de la façade, l'arrache aux flammes et la ramène dans la cathédrale en proclamant l'asile. Il affronte ensuite son maître et survit à la chute de celui-ci, tandis que Sora et Riku terrassent l'Avale-Rêves Wargoyle né des ténèbres du juge. Le monde s'achève sur son entrée dans la ville, acclamé pour la première fois.",
          "Sora arrives in La Cité des Cloches on the day of the Festival of Fools and pushes Quasimodo to come down from the tower to join in. The crowd crowns him king of fools then turns on him, and only Sora and the gypsy Esmeralda stand up for him. Riku, for his part, meets the same Quasimodo at another moment and likewise urges him not to let Frollo's gaze define him.\n\nWhen Frollo decides to burn the city to flush out Esmeralda and has her tied to the stake, Quasimodo finally breaks his moral chain: he rappels down the façade, snatches her from the flames and carries her into the cathedral proclaiming sanctuary. He then confronts his master and survives the judge's fall, while Sora and Riku bring down the Dream Eater Wargoyle born of Frollo's darkness. The world closes on his entrance into the city, cheered for the first time.",
        ),
      },
    ],
    trivia: [
      L("La Cité des Cloches n'apparaît que dans Dream Drop Distance : c'est le seul monde de la saga tiré du Bossu de Notre-Dame.", "La Cité des Cloches appears only in Dream Drop Distance: it is the saga's only world drawn from The Hunchback of Notre Dame."),
      L("Le monde conserve les gargouilles du film, qui commentent l'action sans que l'on tranche jamais leur nature.", "The world keeps the film's gargoyles, who comment on the action without their nature ever being settled."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Quasimodo", url: "https://kingdomhearts.fandom.com/wiki/Quasimodo" },
    ],
  },

  // ─────────────────────────── Esmeralda ───────────────────────────
  "esmeralda": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Esmeralda est la danseuse bohémienne du Bossu de Notre-Dame (1996), seule personne de Paris à traiter Quasimodo en égal et à défier ouvertement le juge Frollo. Accompagnée de sa chèvre Djali, elle vit avec les siens dans la Cour des Miracles, refuge que Frollo cherche à détruire.\n\nDream Drop Distance conserve intégralement ce rôle et lui donne une fonction supplémentaire : dans un monde où l'on cherche à savoir si un cœur peut échapper à ce que l'on a fait de lui, elle est celle qui voit la valeur des êtres avant leur apparence. Sora comme Riku la croisent dans leurs versions respectives de La Cité des Cloches, et son courage sert de contrepoint à la fascination du monde pour les ténèbres. Le capitaine Phœbus, qui déserte plutôt que d'exécuter les ordres du juge, complète ce trio.",
          "Esmeralda is the gypsy dancer of The Hunchback of Notre Dame (1996), the only person in Paris to treat Quasimodo as an equal and to openly defy Judge Frollo. Accompanied by her goat Djali, she lives with her people in the Court of Miracles, the refuge Frollo seeks to destroy.\n\nDream Drop Distance keeps that role wholesale and adds a further function: in a world asking whether a heart can escape what has been made of it, she is the one who sees people's worth before their appearance. Both Sora and Riku meet her in their respective versions of La Cité des Cloches, and her courage counterbalances the world's fascination with darkness. Captain Phoebus, who deserts rather than carry out the judge's orders, completes the trio.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Esmeralda défend Quasimodo devant la foule qui l'humilie à la Fête des Fous, puis se réfugie dans la cathédrale pour échapper aux gardes. Sora l'aide à sortir de la ville quadrillée par Frollo ; Riku, dans sa propre version du monde, la protège des Avale-Rêves qui pullulent dans les rues et découvre que le juge se sert de ces créatures pour la traquer.\n\nCapturée alors qu'elle tentait de mettre les siens à l'abri, elle est condamnée au bûcher sur la place de la cathédrale. Quasimodo la sauve in extremis, et l'incendie que Frollo a allumé dans Paris se retourne contre lui : de ses ténèbres surgit le Wargoyle, que Sora et Riku affrontent au-dessus des toits. Une fois le danger écarté, Esmeralda est la première à tendre la main à Quasimodo devant la ville entière, scellant le sens du monde : ce sont les actes, non le visage, qui font le monstre.",
          "Esmeralda stands up for Quasimodo before the crowd humiliating him at the Festival of Fools, then takes refuge in the cathedral to escape the guards. Sora helps her out of a city locked down by Frollo; Riku, in his own version of the world, protects her from the Dream Eaters swarming the streets and discovers that the judge is using those creatures to hunt her.\n\nCaptured while trying to get her people to safety, she is condemned to the stake in the cathedral square. Quasimodo saves her at the last moment, and the fire Frollo set in Paris turns against him: from his darkness rises the Wargoyle, which Sora and Riku fight above the rooftops. Once the danger has passed, Esmeralda is the first to take Quasimodo's hand before the whole city, sealing the world's meaning: it is deeds, not faces, that make a monster.",
        ),
      },
    ],
    trivia: [
      L("Esmeralda est l'un des rares personnages Disney à apparaître dans les deux parcours, celui de Sora et celui de Riku, avec des scènes différentes.", "Esmeralda is one of the few Disney characters to appear in both routes, Sora's and Riku's, with different scenes."),
      L("Sa chèvre Djali est présente dans le jeu, fidèle à sa place dans le film.", "Her goat Djali is present in the game, faithful to his place in the film."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Esmeralda", url: "https://kingdomhearts.fandom.com/wiki/Esmeralda" },
    ],
  },

  // ─────────────────────────── Frollo ───────────────────────────
  "frollo": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le juge Claude Frollo est l'antagoniste du Bossu de Notre-Dame (1996), magistrat convaincu d'agir au nom du ciel tout en ordonnant des exécutions et des rafles. Le film en fait l'un des méchants Disney les plus dérangeants, parce que sa cruauté procède d'une conviction morale et non d'une soif de pouvoir. Corey Burton le double en anglais dans le jeu.\n\nDream Drop Distance conserve ce portrait sans l'édulcorer et l'adapte à sa mécanique : dans les Mondes Endormis, les Avale-Rêves se nourrissent des ténèbres des cœurs, et celles de Frollo sont d'une densité rare. Le juge devient ainsi l'exemple le plus net du thème du jeu — un cœur qui se croit pur et ne voit pas les ténèbres qui l'habitent —, en miroir de l'examen que passent Sora et Riku et de la manipulation dont Sora est lui-même l'objet.",
          "Judge Claude Frollo is the antagonist of The Hunchback of Notre Dame (1996), a magistrate convinced he acts in heaven's name while ordering executions and round-ups. The film makes him one of Disney's most disturbing villains, because his cruelty proceeds from moral conviction rather than a thirst for power. Corey Burton voices him in English in the game.\n\nDream Drop Distance keeps that portrait unsoftened and fits it to its mechanics: in the Sleeping Worlds, Dream Eaters feed on the darkness in hearts, and Frollo's is of rare density. The judge thus becomes the clearest example of the game's theme — a heart that believes itself pure and cannot see the darkness within it — mirroring the exam Sora and Riku are taking and the manipulation Sora is himself subject to.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Frollo règne sur Paris par la peur, traque les bohémiens et tient Quasimodo enfermé dans le clocher en lui répétant que le monde le rejetterait. Il voit dans les Avale-Rêves une aubaine et les lance sur Esmeralda, persuadé que ces monstres sont un instrument de la justice divine ; Sora comme Riku le voient à l'œuvre dans leurs versions respectives du monde.\n\nQuand la bohémienne lui échappe encore, il fait incendier des quartiers entiers pour la débusquer, puis la condamne au bûcher. Trahi par Phœbus, désavoué par Quasimodo et refusant jusqu'au bout d'admettre sa faute, il finit dévoré par ses propres ténèbres : celles-ci prennent corps sous la forme du Wargoyle, gargouille de feu qui s'envole au-dessus de Notre-Dame et que les deux porteurs doivent abattre. Sa chute referme l'un des rares mondes de la saga où l'antagoniste n'est ni un sorcier ni une créature, mais un homme persuadé d'avoir raison.",
          "Frollo rules Paris through fear, hunts the gypsies and keeps Quasimodo shut in the bell tower, repeating that the world would reject him. He sees the Dream Eaters as a windfall and sets them on Esmeralda, convinced those monsters are an instrument of divine justice; both Sora and Riku see him at work in their respective versions of the world.\n\nWhen the gypsy escapes him again, he has whole districts burned to flush her out, then condemns her to the stake. Betrayed by Phoebus, disowned by Quasimodo and refusing to the last to admit his fault, he ends devoured by his own darkness: it takes shape as the Wargoyle, a fiery gargoyle that soars above Notre-Dame and that the two wielders must bring down. His fall closes one of the saga's few worlds whose antagonist is neither a sorcerer nor a creature, but a man certain he is right.",
        ),
      },
    ],
    trivia: [
      L("Frollo est l'un des rares méchants Disney de la saga à ne disposer d'aucun pouvoir magique propre.", "Frollo is one of the few Disney villains in the series with no magical power of his own."),
      L("Le Wargoyle est un Avale-Rêves exclusif à La Cité des Cloches, affronté par Sora et par Riku dans des conditions différentes.", "The Wargoyle is a Dream Eater exclusive to La Cité des Cloches, faced by Sora and Riku under different conditions."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Judge Claude Frollo", url: "https://kingdomhearts.fandom.com/wiki/Judge_Claude_Frollo" },
    ],
  },

  // ─────────────────────────── Pinocchio ───────────────────────────
  "pinocchio": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Pinocchio vient du long métrage Disney de 1940 adapté de Collodi : un pantin de bois taillé par le menuisier Geppetto, à qui la Fée Bleue donne la vie en promettant qu'il deviendra un vrai garçon s'il se montre brave, sincère et généreux. Jiminy Criquet est nommé sa conscience pour l'y aider.\n\nKingdom Hearts s'empare de ce personnage pour une raison précise : un pantin qui bouge et parle pose exactement la question que la saga ne cesse de creuser, celle de savoir ce qui fait qu'un être possède un cœur. Riku, dans le premier jeu, y voit une piste pour sauver Kairi ; le jeu se garde bien de répondre. Le personnage réapparaît dans Chain of Memories par le biais des souvenirs de Sora, puis dans Dream Drop Distance, où Prankster's Paradise rejoue son histoire dans les Mondes Endormis.",
          "Pinocchio comes from the 1940 Disney feature adapted from Collodi: a wooden puppet carved by the woodcarver Geppetto, brought to life by the Blue Fairy on the promise that he will become a real boy if he proves brave, truthful and unselfish. Jiminy Criquet is appointed his conscience to help him.\n\nKingdom Hearts seizes on the character for a precise reason: a puppet that moves and speaks poses exactly the question the saga keeps digging at, that of what makes a being possess a heart. Riku, in the first game, sees in him a lead for saving Kairi; the game carefully avoids answering. The character returns in Chain of Memories through Sora's memories, then in Dream Drop Distance, where Prankster's Paradise replays his story in the Sleeping Worlds.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo sont avalés par la baleine Monstro alors qu'ils voyagent entre les mondes. Dans son ventre, ils retrouvent Pinocchio, qui joue à cache-cache, et Geppetto, parti à la recherche de son fils et englouti à son tour. Riku est là lui aussi : il emmène le pantin, persuadé qu'un être dépourvu de cœur véritable pourrait servir à ramener celui de Kairi.\n\nSora poursuit son ami, et Pinocchio finit dans les entrailles de Monstro face au Sans-cœur Parasite Cage. La créature l'engloutit ; Sora la combat et libère le pantin, dont le nez s'allonge à chaque mensonge, y compris pour minimiser le danger. Une fois Monstro échappé, Geppetto s'installe à la Ville de Traverse, où il offre à Sora des plans de vaisseaux Gummi. L'épisode laisse en suspens la question posée par Riku, qui restera l'un des fils conducteurs de la saga.",
          "Sora, Donald and Goofy are swallowed by the whale Monstro while travelling between worlds. In its belly they find Pinocchio, playing hide-and-seek, and Geppetto, who set out to look for his son and was swallowed in turn. Riku is there too: he takes the puppet away, convinced that a being without a true heart might serve to bring Kairi's back.\n\nSora goes after his friend, and Pinocchio ends up deep inside Monstro facing the Heartless Parasite Cage. The creature swallows him; Sora fights it and frees the puppet, whose nose grows with every lie, including one meant to play down the danger. Once out of Monstro, Geppetto settles in Traverse Town, where he gives Sora Gummi ship blueprints. The episode leaves Riku's question hanging, one that will remain a running thread of the saga.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, Monstro réapparaît comme un étage reconstitué à partir des souvenirs de Sora. Pinocchio et Geppetto y rejouent leur histoire, mais les cartes du château déforment les événements : le pantin ment de nouveau, se perd dans les boyaux de la baleine, et Sora en vient à douter de ce qu'il croit se rappeler.\n\nCet étage sert surtout à mesurer la dégradation de la mémoire de Sora à mesure qu'il monte dans le château. Ce qui l'avait ému chez Pinocchio — la sincérité et le mensonge, la promesse de devenir vrai — lui revient déformé, teinté par les manipulations de Naminé. Dans Reverse/Rebirth, Riku traverse à son tour ces souvenirs, où réapparaît la tentation qui l'avait poussé à enlever le pantin, cette fois retournée contre lui par les ténèbres qui l'habitent.",
          "In Castle Oblivion, Monstro returns as a floor rebuilt from Sora's memories. Pinocchio and Geppetto replay their story there, but the castle's cards distort events: the puppet lies again, gets lost in the whale's innards, and Sora comes to doubt what he thinks he remembers.\n\nThe floor mainly serves to measure the decay of Sora's memory as he climbs the castle. What had moved him about Pinocchio — sincerity and lies, the promise of becoming real — comes back to him warped, tinged by Naminé's manipulations. In Reverse/Rebirth, Riku passes through those memories in turn, where the temptation that had pushed him to take the puppet reappears, this time turned against him by the darkness within him.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Prankster's Paradise, l'un des Mondes Endormis, rejoue l'histoire de Pinocchio depuis l'Île enchantée jusqu'au ventre de Monstro. Sora y suit le pantin qui se laisse entraîner par Crapule et Grand Coquin, tandis que Riku, dans sa propre version du monde, cherche Geppetto et s'inquiète de l'influence des Avale-Rêves.\n\nLes mensonges de Pinocchio prennent ici une consistance nouvelle : ils nourrissent les Cauchemars et donnent naissance à un Avale-Rêves qui l'avale littéralement, obligeant Sora à le récupérer de l'intérieur. Riku, lui, refuse d'admettre qu'un pantin puisse posséder un cœur, jusqu'à ce que le geste de Pinocchio — se jeter dans la gueule de Monstro pour sauver Geppetto — le contredise. Le monde s'achève sur la promesse tenue de la Fée Bleue, et sur la conviction, chez Riku, qu'un cœur ne se déduit pas de la matière dont on est fait.",
          "Prankster's Paradise, one of the Sleeping Worlds, replays Pinocchio's story from Pleasure Island to the belly of Monstro. Sora follows the puppet as he is led astray by Honest John and Gideon, while Riku, in his own version of the world, looks for Geppetto and worries about the Dream Eaters' influence.\n\nPinocchio's lies take on new substance here: they feed the Nightmares and give rise to a Dream Eater that literally swallows him, forcing Sora to retrieve him from inside. Riku, for his part, refuses to admit that a puppet could possess a heart, until Pinocchio's act — throwing himself into Monstro's jaws to save Geppetto — contradicts him. The world ends on the Blue Fairy's promise kept, and on Riku's conviction that a heart cannot be deduced from the matter one is made of.",
        ),
      },
    ],
    trivia: [
      L("Monstro est l'un des rares « mondes » de la saga à être un être vivant, que l'on visite de l'intérieur.", "Monstro is one of the few “worlds” in the series that is a living creature, visited from the inside."),
      L("La question posée par Riku au sujet du cœur de Pinocchio n'obtient jamais de réponse explicite dans les jeux.", "The question Riku raises about Pinocchio's heart is never explicitly answered in the games."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Pinocchio", url: "https://kingdomhearts.fandom.com/wiki/Pinocchio" },
    ],
  },

  // ─────────────────────────── Tarzan ───────────────────────────
  "tarzan": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Tarzan vient du long métrage Disney de 1999 adapté d'Edgar Rice Burroughs : orphelin recueilli par la gorille Kala après la mort de ses parents, élevé parmi les grands singes sous l'autorité méfiante de Kerchak, il découvre l'existence des humains à l'arrivée de l'expédition de Jane Porter, du professeur Porter et du chasseur Clayton. Tony Goldwyn, sa voix au cinéma, le double dans le jeu.\n\nLa Jungle Profonde est l'un des mondes obligatoires du premier Kingdom Hearts, et Tarzan y devient le premier allié Disney à rejoindre l'équipe de Sora. Le monde ne réapparaîtra plus jamais dans la saga, les droits sur l'œuvre de Burroughs n'ayant pas été reconduits, ce qui en fait un cas unique : un compagnon marquant du premier jeu, absent de tous les suivants.",
          "Tarzan comes from the 1999 Disney feature adapted from Edgar Rice Burroughs: an orphan taken in by the gorilla Kala after his parents' death, raised among the apes under Kerchak's wary authority, he discovers the existence of humans with the arrival of Jane Porter's expedition, Professor Porter and the hunter Clayton. Tony Goldwyn, his screen voice, voices him in the game.\n\nDeep Jungle is one of the first Kingdom Hearts' mandatory worlds, and Tarzan is the first Disney ally to join Sora's party. The world never returns in the saga, the rights to Burroughs's work not having been renewed, which makes it a unique case: a memorable companion from the first game, absent from every one that follows.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le vaisseau Gummi s'écrase dans la Jungle Profonde et Sora, séparé de Donald et Dingo, est sauvé de la panthère Sabor par Tarzan. Le langage des gorilles réduit d'abord leurs échanges à quelques mots, dont un que Tarzan répète : « friends in our hearts ». Sora y entend une piste vers Riku et Kairi, et accepte de l'aider en échange de renseignements ; l'équipe se reforme au campement de Jane.\n\nClayton, obsédé par la capture des gorilles, s'allie aux Sans-cœur et tire sur les singes du clan de Kerchak. Tarzan et Sora le poursuivent jusqu'à la clairière où il les attaque monté sur le Sans-cœur Stealth Sneak, un caméléon géant ; le chasseur meurt écrasé sous sa propre monture. Une fois le clan en sécurité, Tarzan conduit Sora derrière les cascades, dans la grotte tapissée de peintures, où se trouve la Serrure du monde. Sora en repart avec le porte-clés Roi de la Jungle.",
          "The Gummi ship crashes into Deep Jungle and Sora, separated from Donald and Goofy, is saved from the leopard Sabor by Tarzan. The gorillas' language at first reduces their exchanges to a few words, one of which Tarzan repeats: “friends in our hearts”. Sora hears in it a lead toward Riku and Kairi, and agrees to help him in exchange for information; the party reunites at Jane's camp.\n\nClayton, obsessed with capturing the gorillas, allies with the Heartless and fires on the apes of Kerchak's clan. Tarzan and Sora chase him to the clearing where he attacks them riding the Heartless Stealth Sneak, a giant chameleon; the hunter dies crushed beneath his own mount. Once the clan is safe, Tarzan leads Sora behind the waterfalls, into the cave lined with paintings, where the world's Keyhole lies. Sora leaves with the Jungle King keychain.",
        ),
      },
    ],
    trivia: [
      L("La Jungle Profonde n'apparaît que dans le premier Kingdom Hearts : les droits sur l'œuvre d'Edgar Rice Burroughs n'ont pas été reconduits pour les épisodes suivants.", "Deep Jungle appears only in the first Kingdom Hearts: the rights to Edgar Rice Burroughs's work were not renewed for later games."),
      L("Tetsuya Nomura a raconté que Disney avait d'abord refusé l'usage du monde, avant de l'accorder tardivement pendant le développement.", "Tetsuya Nomura has said Disney first refused the use of the world, before granting it late in development."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Tarzan", url: "https://kingdomhearts.fandom.com/wiki/Tarzan" },
    ],
  },

  // ─────────────────────────── Tifa Lockhart ───────────────────────────
  "tifa": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Tifa Lockhart est l'une des héroïnes de Final Fantasy VII (1997) : amie d'enfance de Cloud Strife, tenancière du bar Le Septième Ciel et combattante au corps à corps, elle est celle qui aide Cloud à reconstituer sa mémoire et son identité. Rachael Leigh Cook la double en anglais depuis Advent Children, et reprend le rôle dans Kingdom Hearts II.\n\nSon apparition dans Kingdom Hearts II reprend le design de Advent Children (2005) et ne conserve de son histoire que l'essentiel : elle cherche Cloud, disparu, et se présente elle-même comme « sa lumière », face aux ténèbres qu'incarne Sephiroth. La saga se sert ainsi de son trio avec Cloud et Sephiroth comme d'une variation compacte de ses propres thèmes, sans jamais expliquer comment ces personnages sont arrivés au Jardin Radieux.",
          "Tifa Lockhart is one of the heroines of Final Fantasy VII (1997): Cloud Strife's childhood friend, keeper of the Seventh Heaven bar and a hand-to-hand fighter, she is the one who helps Cloud piece his memory and identity back together. Rachael Leigh Cook has voiced her in English since Advent Children, and reprises the role in Kingdom Hearts II.\n\nHer appearance in Kingdom Hearts II uses the Advent Children (2005) design and keeps only the essentials of her story: she is looking for the missing Cloud, and describes herself as “his light” against the darkness embodied by Sephiroth. The saga thus uses her trio with Cloud and Sephiroth as a compact variation on its own themes, without ever explaining how those characters came to Radiant Garden.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Tifa apparaît à la Forteresse Oubliée, où le Comité de Restauration s'emploie à reconstruire la ville. Elle interroge Sora sur un homme aux cheveux blonds en bataille, sans jamais le nommer, et fouille les ruines et les couloirs souterrains du château d'Ansem ; d'un coup de poing, elle ouvre une brèche dans un mur du Postern, révélant un passage vers les niveaux inférieurs.\n\nElle intervient pendant la bataille des Mille Sans-cœur aux côtés de Léon, Yuffie, Cid, Aerith et Cloud, puis assiste au duel entre Cloud et Sephiroth. Lorsque Sephiroth déclare qu'il est les ténèbres de Cloud, Tifa affirme être sa lumière et frappe le guerrier ailé de plein fouet, avant que les deux hommes ne disparaissent ensemble. Elle est aussi affrontable dans la Fosse Sous-Terrain de Kingdom Hearts II Final Mix, où sa force au poing en fait l'une des adversaires les plus brutales du jeu.",
          "Tifa appears in Hollow Bastion, where the Restoration Committee is rebuilding the town. She questions Sora about a man with spiky blond hair, never naming him, and searches the ruins and underground corridors of Ansem's castle; with one punch she smashes a hole in a wall of the Postern, revealing a passage to the lower levels.\n\nShe takes part in the Battle of 1000 Heartless alongside Leon, Yuffie, Cid, Aerith and Cloud, then witnesses the duel between Cloud and Sephiroth. When Sephiroth declares he is Cloud's darkness, Tifa answers that she is his light and strikes the winged warrior head-on, before the two men vanish together. She can also be fought in Kingdom Hearts II Final Mix's Underdrome, where her raw striking power makes her one of the game's most brutal opponents.",
        ),
      },
    ],
    trivia: [
      L("Le design de Tifa dans Kingdom Hearts II est celui du film Final Fantasy VII : Advent Children, sorti la même année au Japon.", "Tifa's design in Kingdom Hearts II is the one from the film Final Fantasy VII: Advent Children, released the same year in Japan."),
      L("Elle ne prononce jamais le nom de Cloud devant Sora : elle le décrit seulement, ce qui laisse le joueur faire le lien.", "She never says Cloud's name in front of Sora: she only describes him, leaving the player to make the connection."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Tifa Lockhart", url: "https://kingdomhearts.fandom.com/wiki/Tifa_Lockhart" },
    ],
  },

  // ─────────────────────────── Setzer ───────────────────────────
  "setzer": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Setzer Gabbiani est le joueur invétéré de Final Fantasy VI (1994), propriétaire du dirigeable Blackjack, qui rejoint le groupe après un pari perdu et met sa flotte au service de la résistance. Son goût du risque et son élégance affectée en font l'un des personnages les plus reconnaissables du jeu.\n\nKingdom Hearts II le transplante à la Cité du Crépuscule et en fait le champion en titre du Struggle, le tournoi local de combat à la batte de mousse. Il en garde le costume, les cheveux blancs et le penchant pour les paris, mais perd son dirigeable : la saga se contente d'emprunter la silhouette du personnage pour peupler une ville de banlieue. Il n'apparaît que dans la Cité du Crépuscule virtuelle, ce qui en fait l'un des invités Final Fantasy les plus brefs de la série.",
          "Setzer Gabbiani is the inveterate gambler of Final Fantasy VI (1994), owner of the airship Blackjack, who joins the party after a lost wager and puts his fleet at the resistance's service. His taste for risk and his affected elegance make him one of that game's most recognisable characters.\n\nKingdom Hearts II transplants him to Twilight Town and makes him the reigning champion of the Struggle, the local foam-bat fighting tournament. He keeps the costume, the white hair and the fondness for bets, but loses his airship: the saga simply borrows the character's silhouette to populate a suburban town. He appears only in the virtual Twilight Town, which makes him one of the series' briefest Final Fantasy guests.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Pendant les sept derniers jours de Roxas dans la Cité du Crépuscule virtuelle, le tournoi de Struggle bat son plein sur la place de la gare. Setzer y règne en champion sortant, entouré d'admiratrices, et prend de haut les concurrents du quartier. Avant la finale, il propose à Roxas un arrangement : perdre volontairement en échange d'une part de la mise.\n\nRoxas refuse et le bat en finale, ce qui lui vaut le trophée du tournoi et la ceinture de champion. Le trophée, aux quatre gemmes de couleur, prend une valeur particulière quelques scènes plus tard : Roxas le regarde en pensant à Hayner, Pence et Olette, au moment précis où le monde virtuel commence à se désagréger et où ses souvenirs cessent de lui appartenir. Setzer, lui, n'apparaît plus jamais : il fait partie des habitants de données que Roxas laisse derrière lui en rejoignant Sora.",
          "During Roxas's last seven days in the virtual Twilight Town, the Struggle tournament is in full swing on the station plaza. Setzer reigns there as defending champion, surrounded by admirers, and looks down on the local entrants. Before the final he offers Roxas a deal: throw the match in exchange for a cut of the purse.\n\nRoxas refuses and beats him in the final, winning the tournament trophy and the champion's belt. The trophy, with its four coloured gems, takes on particular weight a few scenes later: Roxas looks at it thinking of Hayner, Pence and Olette, at the exact moment the virtual world begins to fall apart and his memories cease to be his own. Setzer never appears again: he is one of the data residents Roxas leaves behind when he rejoins Sora.",
        ),
      },
    ],
    trivia: [
      L("Setzer est le seul personnage de Final Fantasy VI à apparaître dans la saga Kingdom Hearts.", "Setzer is the only Final Fantasy VI character to appear in the Kingdom Hearts series."),
      L("Le trophée du Struggle remporté sur lui devient un objet clé de la fin du prologue de Kingdom Hearts II.", "The Struggle trophy won from him becomes a key object at the end of Kingdom Hearts II's prologue."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Setzer Gabbiani", url: "https://kingdomhearts.fandom.com/wiki/Setzer_Gabbiani" },
    ],
  },

  // ─────────────────────────── Vivi ───────────────────────────
  "vivi": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Vivi Ornitier est l'un des héros de Final Fantasy IX (2000) : un petit mage noir au grand chapeau et aux yeux jaunes brillant dans l'ombre, qui découvre au fil de l'aventure qu'il est une créature fabriquée en série et dont l'existence a une durée limitée. Son questionnement sur ce qu'il est réellement fait de lui un invité particulièrement approprié pour Kingdom Hearts.\n\nKingdom Hearts II le place à la Cité du Crépuscule, dans la bande de Seifer, où il fait figure de petit dernier timide. Le jeu se sert de son apparence — un être dont on ne voit jamais le visage sous le chapeau — pour un tour de passe-passe scénaristique lié aux Similis, et rejoue ainsi, sans le dire, la question posée par Final Fantasy IX : quelque chose qui n'est pas né peut-il exister ?",
          "Vivi Ornitier is one of the heroes of Final Fantasy IX (2000): a small black mage with a big hat and yellow eyes glowing in the shadow, who discovers over the course of the adventure that he is a mass-produced creature with a limited lifespan. His questioning of what he really is makes him an especially fitting guest for Kingdom Hearts.\n\nKingdom Hearts II places him in Twilight Town, in Seifer's gang, where he is the shy youngest member. The game uses his appearance — a being whose face is never seen beneath the hat — for a plot sleight of hand tied to the Nobodies, and thus replays, unspoken, the question Final Fantasy IX asked: can something that was never born exist?",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Dans la Cité du Crépuscule virtuelle, Vivi accompagne Seifer, Fuu et Raijin, qui se donnent des airs de comité de discipline. Il affronte Roxas au tournoi de Struggle et se révèle d'une rapidité invraisemblable pour un enfant de sa taille : c'est en réalité un Simili qui a pris sa place, l'un des premiers indices que le monde de Roxas n'est pas réel.\n\nAprès le combat, le vrai Vivi réapparaît sans aucun souvenir du tournoi, tandis que des Reflets se dédoublent dans les ruelles sous les traits du petit mage. Roxas, seul à voir ces créatures, commence alors à comprendre que quelque chose ne tourne pas rond dans sa ville. Le Vivi de la véritable Cité du Crépuscule, croisé plus tard par Sora, est un enfant ordinaire, toujours dans le sillage de Seifer, et n'a rien à voir avec ce qui s'est joué dans les données.",
          "In the virtual Twilight Town, Vivi tags along with Seifer, Fuu and Rai, who fancy themselves a disciplinary committee. He faces Roxas in the Struggle tournament and proves implausibly fast for a child his size: it is in fact a Nobody that has taken his place, one of the first clues that Roxas's world is not real.\n\nAfter the fight, the real Vivi reappears with no memory of the tournament, while Dusks multiply in the back alleys wearing the little mage's shape. Roxas, the only one who can see those creatures, begins to grasp that something is wrong with his town. The Vivi of the real Twilight Town, met later by Sora, is an ordinary child, still trailing after Seifer, and has nothing to do with what played out inside the data.",
        ),
      },
    ],
    trivia: [
      L("Vivi est doublé en japonais par Ikue Ōtani, qui reprend son rôle de Final Fantasy IX.", "Vivi is voiced in Japanese by Ikue Ōtani, reprising her Final Fantasy IX role."),
      L("Le combat contre le faux Vivi est l'un des rares moments du prologue où le joueur affronte directement un Simili sans le savoir.", "The fight against the false Vivi is one of the few moments in the prologue where the player unknowingly fights a Nobody head-on."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Vivi Ornitier", url: "https://kingdomhearts.fandom.com/wiki/Vivi_Ornitier" },
    ],
  },

  // ─────────────────────────── Les Gullwings ───────────────────────────
  "gullwings": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Yuna, Rikku et Paine forment les Gullwings, l'équipage de chasseuses de sphères de Final Fantasy X-2 (2003). Yuna, ancienne invokeuse devenue chanteuse et aventurière, Rikku sa cousine survoltée et Paine, taciturne et sarcastique, y parcourent Spira à bord de leur dirigeable à la recherche de reliques.\n\nKingdom Hearts II les reprend telles quelles mais leur applique une transformation inattendue : elles apparaissent sous la forme de minuscules fées ailées, à peine plus grandes qu'une main, ce qui permet de les faire voleter autour des personnages sans occuper la place d'un membre d'équipe. Le clin d'œil est double, puisqu'il rapproche leur statut de chasseuses de trésors de celui de la Fée Clochette. Elles ne travaillent d'abord pas pour les héros : Maléfique les a engagées, en leur promettant un butin.",
          "Yuna, Rikku and Paine make up the Gullwings, the sphere-hunting crew of Final Fantasy X-2 (2003). Yuna, a former summoner turned singer and adventurer, her live-wire cousin Rikku, and the taciturn, sardonic Paine roam Spira aboard their airship in search of relics.\n\nKingdom Hearts II takes them as they are but applies an unexpected transformation: they appear as tiny winged fairies, barely larger than a hand, which lets them flit around the characters without taking a party slot. The nod is a double one, since it brings their treasure-hunting status close to Tinker Bell's. They do not work for the heroes at first: Maleficent has hired them, promising them loot.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora croise les trois fées à la Forteresse Oubliée, où elles espionnent le Comité de Restauration pour le compte de Maléfique, qui leur a promis un trésor en échange de renseignements. Rikku s'enthousiasme, Yuna hésite et Paine soupçonne l'arnaque ; elles finissent par constater que leur employeuse n'a aucune intention de tenir parole.\n\nDéçues, elles changent de camp et proposent leurs services à Léon et à Sora, à condition d'être payées en « trésors » — c'est-à-dire en munny et en objets divers que le joueur peut leur remettre. Reconnaissantes, elles offrent à Sora le porte-clés Ailes de Mouette, référence directe à leur nom, et continuent d'apparaître autour de la ville en reconstruction. Elles reviennent aussi ponctuellement narguer Maléfique, ce qui fait d'elles l'un des rares groupes du jeu à changer d'allégeance en pleine partie.",
          "Sora meets the three fairies in Hollow Bastion, where they are spying on the Restoration Committee for Maleficent, who promised them treasure in exchange for information. Rikku is thrilled, Yuna hesitates and Paine suspects a swindle; they eventually realise their employer has no intention of keeping her word.\n\nDisappointed, they switch sides and offer their services to Leon and Sora, on condition of being paid in “treasure” — that is, in munny and assorted items the player can hand over. Grateful, they give Sora the Gull Wing keychain, a direct nod to their name, and go on appearing around the rebuilding town. They also come back now and then to taunt Maleficent, making them one of the few groups in the game to change allegiance mid-story.",
        ),
      },
    ],
    trivia: [
      L("Yuna, Rikku et Paine sont doublées par leurs interprètes de Final Fantasy X-2 dans les deux versions du jeu.", "Yuna, Rikku and Paine are voiced by their Final Fantasy X-2 actresses in both versions of the game."),
      L("Leur taille réduite est un clin d'œil à la Fée Clochette, invocation du premier Kingdom Hearts.", "Their reduced size is a nod to Tinker Bell, a summon in the first Kingdom Hearts."),
      L("La Keyblade Ailes de Mouette qu'elles offrent porte le nom anglais de leur équipage, les Gullwings.", "The Gull Wing Keyblade they give is named after their crew's English name, the Gullwings."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Gullwings", url: "https://kingdomhearts.fandom.com/wiki/Gullwings" },
    ],
  },
};
