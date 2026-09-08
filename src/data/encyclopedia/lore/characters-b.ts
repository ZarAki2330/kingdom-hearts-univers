import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des personnages (lot B) : Disney, Final Fantasy, Organisation XIII
 * et figures de l'Âge des Fées. Les clés sont les slugs des entrées de personnages.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Roi Mickey ───────────────────────────
  "mickey": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Mickey Mouse naît en 1928 sous le crayon de Walt Disney et d'Ub Iwerks, avec le court métrage Steamboat Willie, et devient très vite l'emblème du studio. Kingdom Hearts en fait le roi du Château Disney, époux de la reine Minnie, entouré de Donald, son magicien, et de Dingo, le capitaine de sa garde. Son costume rouge et noir et ses grandes oreilles restent ceux du personnage classique, mais le jeu lui donne une gravité nouvelle.\n\nMickey est en effet un Maître de la Keyblade, ancien apprenti de Yen Sid, qui manie d'abord Star Seeker puis la Chaîne Royale D trouvée dans le Domaine des Ténèbres. Disney ayant d'abord limité son usage, il n'apparaît qu'à la toute fin du premier jeu, ce qui a nourri son aura de sauveur surgissant au moment décisif. Au fil des épisodes, il devient l'un des sept Gardiens de la Lumière et le lien vivant entre le monde de Disney et l'intrigue originale de Square Enix.",
          "Mickey Mouse was born in 1928 from the pens of Walt Disney and Ub Iwerks with the short Steamboat Willie, and quickly became the studio's emblem. Kingdom Hearts makes him the king of Disney Castle, husband of Queen Minnie, surrounded by Donald, his magician, and Goofy, the captain of his guard. His red and black outfit and big ears are those of the classic character, but the game gives him a new gravity.\n\nMickey is a Keyblade Master, a former apprentice of Yen Sid, who first wields Star Seeker and later the Kingdom Key D found in the Realm of Darkness. Since Disney initially restricted his use, he only appears at the very end of the first game, which fed his aura as a saviour arriving at the decisive moment. Over the series he becomes one of the seven Guardians of Light and the living link between the Disney world and Square Enix's original plot.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dix ans avant le premier jeu, Mickey est encore l'apprenti de Yen Sid à la Tour Mystérieuse. Impatient de se rendre utile, il emprunte sans permission un fragment d'étoile qui le projette de monde en monde, Star Seeker à la main. Il croise ainsi Ventus au Jardin Radieux, combat des Nescients à ses côtés, puis est emporté de nouveau par l'artefact avant d'avoir pu s'expliquer.\n\nAu Nécropole des Keyblades, il est vaincu par Vanitas ; Aqua le trouve inconscient et l'affronte pour le protéger, avant qu'ils ne repoussent ensemble l'ennemi. Lors de l'affrontement final, c'est Mickey qui tire Aqua du Domaine des Ténèbres puis ramène Ventus, vidé de son cœur, jusqu'à la Tour Mystérieuse. Il rend Star Seeker à Yen Sid, persuadé d'avoir échoué, mais son maître la lui restitue : Mickey a prouvé qu'il était digne de la Keyblade.",
          "Ten years before the first game, Mickey is still Yen Sid's apprentice at the Mysterious Tower. Eager to be useful, he borrows a Star Shard without permission, and it flings him from world to world with Star Seeker in hand. He runs into Ventus in Radiant Garden, fights Unversed at his side, then is whisked away again by the artefact before he can explain himself.\n\nAt the Keyblade Graveyard he is beaten by Vanitas; Aqua finds him unconscious and fights to protect him before they drive the enemy back together. During the final confrontation it is Mickey who pulls Aqua out of the Realm of Darkness and carries the heartless body of Ventus to the Mysterious Tower. He hands Star Seeker back to Yen Sid, convinced he has failed, but his master returns it: Mickey has proved himself worthy of the Keyblade.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Au début de Kingdom Hearts, Mickey a déjà quitté le Château Disney. Il laisse une lettre à Donald et Dingo : les étoiles s'éteignent une à une, il part enquêter et leur demande de trouver « la clé » et de la suivre. Cette lettre déclenche tout le voyage de Sora, puisque c'est en cherchant le roi que le canard et le chien rencontrent le jeune porteur à la Ville de Traverse.\n\nMickey reste hors champ jusqu'au Bout du Monde. Lorsque Sora tente de refermer la porte de Kingdom Hearts sur les Sans-cœur qui en déferlent, le roi apparaît de l'autre côté, dans le Domaine des Ténèbres, la Chaîne Royale D à la main. Il rassure ses amis, promet qu'il existe toujours une porte vers la lumière, et scelle Kingdom Hearts avec Sora, restant enfermé avec Riku du côté des ténèbres.",
          "At the start of Kingdom Hearts, Mickey has already left Disney Castle. He leaves a letter for Donald and Goofy: the stars are going out one by one, he is leaving to investigate and asks them to find “the key” and follow it. That letter sets Sora's whole journey in motion, since it is while looking for the king that the duck and the dog meet the young wielder in Traverse Town.\n\nMickey stays off screen until the End of the World. When Sora tries to close the door to Kingdom Hearts on the Heartless pouring out of it, the king appears on the other side, in the Realm of Darkness, Kingdom Key D in hand. He reassures his friends, promises there will always be a door to the light, and seals Kingdom Hearts with Sora, remaining locked with Riku on the side of darkness.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Dans Reverse/Rebirth, Mickey est d'abord une voix et une lueur qui guident Riku dans les sous-sols du Manoir Oblivion. Riku, tenté par les ténèbres d'Ansem, s'accroche à cette lumière ; le roi lui apparaît comme une carte d'ami avant de le rejoindre en personne pour l'aider à repousser Ansem.\n\nMickey soutient Riku dans son duel intérieur contre le Sans-cœur de Xehanort et rencontre DiZ, l'homme masqué qui observe le château. Une fois Riku décidé à emprunter « la voie de l'aube », le roi accepte de l'accompagner. Tous deux quittent le Manoir Oblivion ensemble, tandis que Sora s'endort dans la capsule de Naminé pour retrouver ses souvenirs.",
          "In Reverse/Rebirth, Mickey is at first a voice and a glow guiding Riku through the basements of Castle Oblivion. Tempted by Ansem's darkness, Riku clings to that light; the king appears to him as a friend card before joining him in person to help drive Ansem back.\n\nMickey supports Riku in his inner duel against Xehanort's Heartless and meets DiZ, the masked man watching over the castle. Once Riku decides to walk “the road to dawn”, the king agrees to go with him. The two leave Castle Oblivion together, while Sora falls asleep in Naminé's pod to recover his memories.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Mickey traverse Kingdom Hearts II vêtu du manteau noir de l'Organisation, ce qui le rend méconnaissable. À la gare de la Cité du Crépuscule, c'est lui qui sauve Sora des Reflets et l'envoie chez Yen Sid. À Hollow Bastion, il révèle enfin son visage et explique que l'ennemi vaincu un an plus tôt n'était que le Sans-cœur de Xehanort, l'apprenti d'Ansem le Sage, et que le Simili du même homme dirige l'Organisation XIII.\n\nIl combat lors de la bataille des Mille Sans-cœur, puis retrouve Ansem le Sage, son vieil ami, dans le Monde qui n'existe pas. Il assiste, impuissant, à l'explosion de la machine avec laquelle Ansem tente de décoder Kingdom Hearts. Sur le plan du jeu, Mickey peut remplacer Sora tombé au combat contre certains boss, seule occasion de le contrôler dans cet épisode.",
          "Mickey goes through Kingdom Hearts II wearing the Organization's black coat, which makes him unrecognisable. At Twilight Town station he is the one who saves Sora from the Dusks and sends him to Yen Sid. In Hollow Bastion he finally shows his face and explains that the enemy defeated a year earlier was only the Heartless of Xehanort, Ansem the Wise's apprentice, and that the same man's Nobody leads Organization XIII.\n\nHe fights in the Battle of 1000 Heartless, then finds his old friend Ansem the Wise in The World That Never Was. He watches helplessly as the machine with which Ansem tries to decode Kingdom Hearts explodes. Gameplay-wise, Mickey can replace a fallen Sora against certain bosses, the only chance to control him in this game.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "De retour au Château Disney, Mickey découvre avec Jiminy une phrase inconnue dans le journal du grillon : « Leur souffrance sera apaisée quand tu reviendras y mettre fin ». Pour élucider ce message, il fait numériser le journal par Tic et Tac et crée un Sora de données chargé d'explorer ce monde virtuel rongé par des bugs.\n\nQuand le Sora de données se retrouve en danger, Mickey entre lui-même dans le journal et l'accompagne à la Forteresse Oubliée virtuelle. Grâce aux découvertes du Sora de données et à Naminé, il apprend que Terra, Ventus, Aqua, Roxas, Xion et Axel attendent d'être sauvés. Il écrit alors la lettre que Sora, Riku et Kairi reçoivent à la fin de Kingdom Hearts II, puis, avec Yen Sid, comprend que le Maître Xehanort ne tardera pas à revenir.",
          "Back at Disney Castle, Mickey and Jiminy find an unknown sentence in the cricket's journal: “Their hurting will be mended when you return to end it.” To decipher the message he has Chip and Dale digitise the journal and creates a Data-Sora tasked with exploring that bug-ridden virtual world.\n\nWhen Data-Sora finds himself in danger, Mickey enters the journal himself and goes with him to the virtual Hollow Bastion. Thanks to Data-Sora's findings and to Naminé, he learns that Terra, Ventus, Aqua, Roxas, Xion and Axel are waiting to be saved. He then writes the letter Sora, Riku and Kairi receive at the end of Kingdom Hearts II and, with Yen Sid, realises that Master Xehanort will soon return.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Pendant l'examen de Maîtrise de Sora et Riku, Mickey seconde Yen Sid à la Tour Mystérieuse, tandis que les Mondes Endormis proposent des versions rêvées de son propre passé : un Mickey mousquetaire dans le Pays des Mousquetaires et un Mickey apprenti sorcier dans la Symphonie du Sorcier.\n\nLorsque le Monde qui n'existe pas révèle le piège de Xehanort, Mickey rejoint Riku à temps pour immobiliser Ansem avec un sort de Stopza, que le Jeune Xehanort brise aussitôt. Face au Maître Xehanort ressuscité, le roi tient tête jusqu'à l'irruption de Lea. De retour à la Tour, il raconte enfin à Yen Sid sa rencontre avec Aqua dans le Domaine des Ténèbres, ce qui prépare le sauvetage des porteurs perdus.",
          "During Sora's and Riku's Mark of Mastery exam, Mickey assists Yen Sid at the Mysterious Tower while the Sleeping Worlds show dreamed versions of his own adventures as a musketeer and as the Sorcerer's apprentice.\n\nWhen The World That Never Was reveals Xehanort's trap, Mickey reaches Riku in time to freeze Ansem with a Stopza spell, which Young Xehanort breaks at once. Facing the revived Master Xehanort, the king holds his ground until Lea bursts in. Back at the Tower, he finally tells Yen Sid of his encounter with Aqua in the Realm of Darkness, which paves the way for the rescue of the lost wielders.",
        ),
      },
      {
        game: "0-2-birth-by-sleep-a-fragmentary-passage",
        text: L(
          "0.2 montre la rencontre qu'il n'avait fait qu'évoquer. Aqua, errant depuis plus de dix ans dans le Domaine des Ténèbres, retrouve Mickey près de la mer sombre : le roi y cherche la Keyblade de ce domaine, indispensable pour refermer Kingdom Hearts de l'intérieur. Sa chemise déchirée dans un combat, il porte la Chaîne Royale D et se bat à ses côtés contre les Sans-cœur.\n\nTous deux atteignent la porte de Kingdom Hearts au moment même où Sora la ferme de l'autre côté. Une Tour Démoniaque s'abat sur eux ; Aqua se sacrifie pour repousser la vague et permettre à Mickey de rester près du seuil. Le roi n'oubliera jamais ce geste, et cette dette le pousse à retourner chercher Aqua dès que la situation le permet.",
          "0.2 shows the encounter he had only hinted at. Aqua, wandering for more than ten years in the Realm of Darkness, meets Mickey by the dark sea: the king is looking for that realm's Keyblade, needed to close Kingdom Hearts from within. His shirt torn in a fight, he carries the Kingdom Key D and battles the Heartless beside her.\n\nThe two reach the door to Kingdom Hearts at the very moment Sora closes it from the other side. A Demon Tower falls upon them; Aqua sacrifices herself to hold the wave back so that Mickey can stay by the threshold. The king never forgets that gesture, and the debt drives him to go back for Aqua as soon as circumstances allow.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Mickey ouvre Kingdom Hearts III aux côtés de Riku dans le Domaine des Ténèbres, à la recherche d'Aqua. La Tour Démoniaque qu'ils affrontent brise la Keyblade de Riku et les force à battre en retraite ; le roi porte alors, pour la première fois, un costume de Maître à part entière. Lorsque Sora acquiert le Pouvoir de l'éveil, Mickey et Riku retournent sur la plage sombre et retrouvent Aqua, transformée par les ténèbres, que Sora finit par délivrer.\n\nAu Nécropole des Keyblades, Mickey est l'un des sept Gardiens de la Lumière. Il combat Xemnas avec Sora et Riku, puis affronte Xigbar et le Riku des ténèbres, avant de se dresser avec les autres Gardiens face au Maître Xehanort. À Scala ad Caelum, il assiste à la disparition de Sora après le sauvetage de Kairi, et c'est en son absence que se referme l'épisode.",
          "Mickey opens Kingdom Hearts III beside Riku in the Realm of Darkness, searching for Aqua. The Demon Tower they face shatters Riku's Keyblade and forces them to retreat; the king then wears, for the first time, a full Master's outfit. Once Sora gains the power of waking, Mickey and Riku return to the dark shore and find Aqua, changed by darkness, whom Sora eventually frees.\n\nAt the Keyblade Graveyard, Mickey is one of the seven Guardians of Light. He fights Xemnas with Sora and Riku, then Xigbar and Dark Riku, before standing with the other Guardians against Master Xehanort. In Scala ad Caelum he witnesses Sora's disappearance after Kairi's rescue, and the game closes in his absence.",
        ),
      },
    ],
    trivia: [
      L("Wayne Allwine double Mickey en anglais jusqu'à Kingdom Hearts II ; Bret Iwan lui succède à partir de Birth by Sleep. En français, Laurent Pasquier prête sa voix au roi.", "Wayne Allwine voices Mickey in English up to Kingdom Hearts II; Bret Iwan takes over from Birth by Sleep. In French, Laurent Pasquier lends his voice to the king."),
      L("Disney n'avait autorisé qu'une apparition très limitée de Mickey dans le premier jeu, d'où sa présence réduite à la scène finale.", "Disney had only allowed a very limited appearance of Mickey in the first game, hence his presence being confined to the final scene."),
      L("Son nom japonais dans les jeux est simplement « le Roi » (王様), Mickey n'étant nommé qu'entre parenthèses.", "His Japanese name in the games is simply “the King” (王様), Mickey being named only in brackets."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Mickey Mouse", url: "https://kingdomhearts.fandom.com/wiki/Mickey_Mouse" },
    ],
  },

  // ─────────────────────────── Donald Duck ───────────────────────────
  "donald": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Donald Duck fait ses débuts en 1934 dans le court métrage Une petite poule avisée, et sa voix nasillarde, créée par Clarence Nash, en fait aussitôt une vedette. Colérique, vaniteux mais attachant, il devient l'un des trois piliers de l'univers Disney avec Mickey et Dingo. Kingdom Hearts conserve ce caractère explosif et lui donne un rôle inédit : magicien de la cour du Château Disney.\n\nArmé d'un bâton, Donald est le lanceur de sorts du trio, spécialiste de Brasier, Glacier, Foudre et Soin. Le jeu joue de son impatience et de sa mauvaise foi, mais aussi de sa loyauté : c'est lui qui rappelle sans cesse la mission confiée par le roi, quitte à se brouiller avec Sora. Sa relation avec Daisy, restée au château, et sa rivalité affectueuse avec Dingo rythment les moments de détente de la saga.",
          "Donald Duck debuted in 1934 in the short The Wise Little Hen, and his nasal voice, created by Clarence Nash, made him a star at once. Hot-tempered, vain yet endearing, he became one of the three pillars of the Disney universe alongside Mickey and Goofy. Kingdom Hearts keeps that explosive temper and gives him a new role: court magician of Disney Castle.\n\nArmed with a staff, Donald is the trio's spellcaster, a specialist of Fire, Blizzard, Thunder and Cure. The game plays on his impatience and bad faith, but also on his loyalty: he is the one who keeps reminding everyone of the king's mission, even at the cost of falling out with Sora. His relationship with Daisy, who stays at the castle, and his affectionate rivalry with Goofy set the tone of the saga's lighter moments.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le matin où Mickey disparaît, Donald découvre sa lettre et entraîne Dingo, avec Jiminy Criquet pour chroniqueur, à bord du vaisseau Gummi vers la Ville de Traverse. Le roi leur a demandé de trouver « la clé » : ils tombent sur Sora, et Donald accepte à contrecœur d'embarquer ce garçon à la Keyblade, non sans lui imposer une règle, garder le sourire, et une autre, ne pas se mêler des affaires des mondes.\n\nDonald suit cette consigne à la lettre : à la Forteresse Oubliée, quand la Keyblade passe dans les mains de Riku, il abandonne Sora pour suivre l'arme, comme l'a ordonné le roi. Il revient pourtant dès que Sora reprend la Keyblade par la force de son cœur. Il combat Maléfique, puis Ansem au Bout du Monde, et assiste, bouleversé, à la fermeture de la porte qui le sépare de Mickey.",
          "The morning Mickey disappears, Donald finds his letter and drags Goofy, with Jiminy Criquet as chronicler, aboard the Gummi ship toward Traverse Town. The king asked them to find “the key”: they meet Sora, and Donald reluctantly agrees to take the Keyblade boy aboard, imposing one rule, keep smiling, and another, never meddle in the affairs of other worlds.\n\nDonald follows that order to the letter: in Hollow Bastion, when the Keyblade passes into Riku's hands, he abandons Sora to follow the weapon, as the king commanded. Yet he returns as soon as Sora reclaims the Keyblade through the strength of his heart. He fights Maleficent, then Ansem at the End of the World, and watches, shaken, as the door closes and separates him from Mickey.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Au Manoir Oblivion, Donald est réduit à une carte que Sora doit jouer pour l'invoquer, et ses souvenirs s'effacent étage après étage comme ceux de ses compagnons. Il oublie ses sorts, puis les événements de la Ville de Traverse, et finit par ne plus savoir pourquoi il a quitté le château.\n\nMalgré tout, il reste le premier à défendre Sora lorsque celui-ci s'entête à retrouver Naminé, et le premier à s'inquiéter en le voyant changer. Au sommet du château, après la défaite de Marluxia, Donald et Dingo acceptent, comme Sora, de dormir dans les capsules de Naminé pour récupérer leurs vrais souvenirs, quitte à oublier toute cette aventure.",
          "In Castle Oblivion, Donald is reduced to a card Sora must play to summon him, and his memories fade floor after floor like those of his companions. He forgets his spells, then the events of Traverse Town, and ends up no longer knowing why he left the castle.\n\nEven so, he is the first to defend Sora when the boy stubbornly insists on finding Naminé, and the first to worry when he sees him change. At the top of the castle, after Marluxia's defeat, Donald and Goofy agree, like Sora, to sleep in Naminé's pods to recover their true memories, at the cost of forgetting the whole adventure.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Donald se réveille au manoir de la Cité du Crépuscule un an après le Manoir Oblivion, sans souvenir de ce qui s'y est passé. Yen Sid lui rend ses pouvoirs et il repart avec Sora et Dingo à la recherche du roi et de Riku. Le trio traverse une douzaine de mondes, où Donald découvre le passé de son propre château, le Fleuve Intemporel, et retrouve Daisy le temps d'une escale mouvementée.\n\nÀ Hollow Bastion, il prend part à la bataille des Mille Sans-cœur et voit Dingo s'effondrer sous un rocher, avant d'exploser de joie en le retrouvant indemne. Dans le Monde qui n'existe pas, il participe à la lutte contre Xemnas, et c'est avec Sora et Dingo qu'il rentre au Château Disney, où le roi les attend enfin.",
          "Donald wakes in the Twilight Town mansion a year after Castle Oblivion, with no memory of what happened there. Yen Sid restores his powers and he sets off again with Sora and Goofy to find the king and Riku. The trio crosses a dozen worlds, where Donald discovers his own castle's past in the Timeless River and briefly reunites with Daisy during a hectic stopover.\n\nIn Hollow Bastion he takes part in the Battle of 1000 Heartless and sees Goofy collapse under a boulder, before bursting with joy on finding him unharmed. In The World That Never Was he joins the fight against Xemnas, and it is with Sora and Goofy that he returns to Disney Castle, where the king at last awaits them.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Kingdom Hearts III renvoie Donald sur les routes avec Sora et Dingo, cette fois pour aider le porteur à retrouver le Pouvoir de l'éveil. Le canard ronchonne devant les jouets de la Boîte à Jouets, s'émerveille devant Arendelle et devient une pieuvre de dessin animé dans le monde de Monstres et Cie, mais il reste le soutien magique indispensable, doté pour la première fois d'attaques en équipe dédiées.\n\nAu Nécropole des Keyblades, alors que Terra-Xehanort menace Ventus et Aqua, Donald lance Zettaflare, le sort le plus puissant de tout l'univers Final Fantasy, au prix de son propre effondrement. Le geste est resté l'un des moments les plus commentés du jeu. Il se relève à temps pour affronter le Maître Xehanort avec les Gardiens, puis rentre aux Îles du Destin sans Sora.",
          "Kingdom Hearts III sends Donald back on the road with Sora and Goofy, this time to help the wielder regain the power of waking. The duck grumbles at the toys of Toy Box, marvels at Arendelle and turns into a cartoon octopus in the Monsters, Inc. world, yet he remains the indispensable magical support, gifted for the first time with dedicated team attacks.\n\nAt the Keyblade Graveyard, as Terra-Xehanort threatens Ventus and Aqua, Donald casts Zettaflare, the most powerful spell in the whole Final Fantasy universe, at the cost of collapsing himself. The move remains one of the game's most talked-about moments. He gets back up in time to face Master Xehanort with the Guardians, then returns to Destiny Islands without Sora.",
        ),
      },
      {
        game: "kingdom-hearts-iv",
        text: L(
          "La bande-annonce d'annonce de Kingdom Hearts IV, diffusée en 2022, montre Donald et Dingo loin de Sora, dans un lieu sombre et enflammé qui évoque les Enfers d'Hadès. Ils semblent y chercher de l'aide, ou des informations, pour retrouver leur ami disparu à la fin de Kingdom Hearts III.\n\nRien de plus n'a été révélé sur leur rôle, si ce n'est que le duo reste inséparable et que leur quête se déroule en parallèle du réveil de Sora à Quadratum. Cette scène confirme en tout cas que le trio d'origine n'a pas été abandonné avec le nouveau chapitre de la saga.",
          "The announcement trailer for Kingdom Hearts IV, released in 2022, shows Donald and Goofy far from Sora, in a dark, fiery place reminiscent of Hades's Underworld. They appear to be seeking help, or information, to find their friend who vanished at the end of Kingdom Hearts III.\n\nNothing more has been revealed about their role, except that the pair remains inseparable and that their quest runs parallel to Sora's awakening in Quadratum. The scene at least confirms that the original trio has not been left behind with the new chapter of the saga.",
        ),
      },
    ],
    trivia: [
      L("Tony Anselmo, voix officielle de Donald depuis 1985, le double en anglais dans tous les jeux ; Kōichi Yamadera assure la version japonaise.", "Tony Anselmo, Donald's official voice since 1985, plays him in English in every game; Kōichi Yamadera provides the Japanese version."),
      L("Zettaflare, lancé par Donald dans Kingdom Hearts III, n'avait jusque-là été utilisé que par Bahamut dans Final Fantasy XIV.", "Zettaflare, cast by Donald in Kingdom Hearts III, had previously only been used by Bahamut in Final Fantasy XIV."),
      L("Donald ne peut pas rejoindre Sora dans les mondes d'Atlantica ou de la Ville d'Halloween sans changer d'apparence : pieuvre, momie ou pantin selon l'épisode.", "Donald cannot follow Sora into Atlantica or Halloween Town without changing shape: octopus, mummy or puppet depending on the game."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Donald Duck", url: "https://kingdomhearts.fandom.com/wiki/Donald_Duck" },
    ],
  },

  // ─────────────────────────── Dingo ───────────────────────────
  "goofy": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Dingo apparaît en 1932 dans Mickey's Revue sous le nom de Dippy Dawg, avant de devenir le grand chien dégingandé au rire célèbre, doublé par Pinto Colvig puis par Bill Farmer. Maladroit, naïf et fondamentalement bon, il complète Mickey et Donald dans d'innombrables courts métrages et séries. Kingdom Hearts le nomme capitaine des chevaliers du Château Disney, un titre qui contraste avec son allure.\n\nPacifiste convaincu, Dingo refuse les armes tranchantes et se bat uniquement avec un bouclier, dont il se sert autant pour protéger ses amis que pour charger l'ennemi. Derrière ses bourdes, le jeu lui prête une intuition remarquable : c'est souvent lui qui remarque un détail décisif, retient une information oubliée par les autres, ou pose la question que personne n'ose poser. Ses ancêtres apparaissent dans le passé du Château Disney, et son fils Max est évoqué dans la série.",
          "Goofy first appeared in 1932 in Mickey's Revue under the name Dippy Dawg, before becoming the lanky dog with the famous laugh, voiced by Pinto Colvig and later Bill Farmer. Clumsy, naive and fundamentally good, he rounds out Mickey and Donald in countless shorts and series. Kingdom Hearts makes him captain of Disney Castle's knights, a title that clashes with his looks.\n\nA confirmed pacifist, Goofy refuses bladed weapons and fights only with a shield, which he uses as much to protect his friends as to charge the enemy. Behind his blunders, the game grants him remarkable intuition: he is often the one who notices a decisive detail, remembers a piece of information the others forgot, or asks the question nobody dares to ask. His ancestors appear in Disney Castle's past, and his son Max is mentioned in the series.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Réveillé par Donald dans les jardins du château, Dingo apprend la disparition du roi et embarque sans hésiter pour la Ville de Traverse. Il est le premier à proposer d'emmener Sora, et le premier à se plier de bonne grâce à la règle du sourire. Tout au long du voyage, il tempère les colères de Donald et prend au sérieux la promesse faite au roi.\n\nÀ la Forteresse Oubliée, quand la Keyblade choisit Riku, Dingo suit d'abord Donald, mais il ne peut se résoudre à laisser Sora désarmé : il s'interpose avec son bouclier entre son ami et Riku, en s'excusant auprès du roi de désobéir. Ce choix, qui pousse Donald à revenir, scelle l'amitié du trio. Dingo combat ensuite au Bout du Monde et voit la porte de Kingdom Hearts se refermer sur Mickey.",
          "Woken by Donald in the castle gardens, Goofy learns of the king's disappearance and sets sail without hesitation for Traverse Town. He is the first to suggest taking Sora along, and the first to accept the smiling rule with good grace. Throughout the journey he tempers Donald's outbursts and takes the promise made to the king seriously.\n\nIn Hollow Bastion, when the Keyblade chooses Riku, Goofy first follows Donald, but cannot bring himself to leave Sora defenceless: he steps between his friend and Riku with his shield, apologising to the king for disobeying. That choice, which brings Donald back, seals the trio's friendship. Goofy then fights at the End of the World and sees the door to Kingdom Hearts close on Mickey.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Comme Donald, Dingo n'existe au Manoir Oblivion que sous forme de carte d'ami, et ses souvenirs se délitent à mesure que Sora monte les étages. Il perd le fil des aventures passées mais conserve, jusqu'au bout, une conviction simple : quoi qu'il arrive, il restera avec Sora.\n\nLorsque Sora, manipulé par les faux souvenirs de Naminé, s'éloigne de ses compagnons, Dingo est celui qui le suit sans poser de conditions. Après la chute de Marluxia, il entre à son tour dans une capsule pour retrouver sa mémoire, résigné à oublier Naminé mais persuadé que les liens du cœur, eux, ne s'effacent pas.",
          "Like Donald, Goofy exists in Castle Oblivion only as a friend card, and his memories crumble as Sora climbs the floors. He loses track of past adventures but keeps, to the end, one simple conviction: whatever happens, he will stay with Sora.\n\nWhen Sora, manipulated by Naminé's false memories, drifts away from his companions, Goofy is the one who follows him without conditions. After Marluxia's fall he enters a pod in turn to recover his memory, resigned to forgetting Naminé but convinced that the bonds of the heart never fade.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Réveillé au manoir de la Cité du Crépuscule, Dingo repart avec Sora et Donald. Il retrouve ses attaques au bouclier renforcées par Yen Sid et découvre, au Fleuve Intemporel, un Château Disney d'antan où ses ancêtres montent la garde. Au Colisée, au Château de la Bête ou au Pays Imaginaire, il est le compagnon le plus fiable du trio.\n\nÀ Hollow Bastion, alors que le groupe rejoint Mickey, un rocher projeté par un Sans-cœur le frappe en pleine tête. Sora, Donald et le roi le croient mort ; leur douleur se mue en fureur jusqu'à ce que Dingo réapparaisse, en pleine forme, en se demandant pourquoi tout le monde pleure. Cette fausse mort est restée l'un des moments les plus célèbres de la saga. Dingo se bat ensuite jusqu'au Monde qui n'existe pas et rentre au château avec ses amis.",
          "Woken in the Twilight Town mansion, Goofy sets off again with Sora and Donald. His shield attacks are strengthened by Yen Sid and, in the Timeless River, he discovers a Disney Castle of old where his ancestors stand guard. At the Coliseum, Beast's Castle or Neverland he is the trio's most reliable companion.\n\nIn Hollow Bastion, as the group reaches Mickey, a boulder hurled by a Heartless strikes him square on the head. Sora, Donald and the king believe him dead; their grief turns to fury until Goofy reappears, perfectly fine, wondering why everyone is crying. That fake death remains one of the most famous moments in the saga. Goofy then fights all the way to The World That Never Was and returns to the castle with his friends.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans Kingdom Hearts III, Dingo accompagne Sora dans sa quête du Pouvoir de l'éveil. Ses moments de lucidité restent sa marque : c'est lui qui rappelle la leçon d'Hercule sur la force du cœur, ou qui devine la relation entre Woody et ses jouets. Il pilote aussi les attaques d'équipe et devient, au fil des mondes, un garde du corps redoutable, capable de protéger Sora des coups les plus violents.\n\nAu Nécropole des Keyblades, Dingo tombe avec les autres Gardiens sous la Marée Démoniaque avant que Sora ne remonte le temps pour les sauver. Il combat aux côtés de Sora et Donald jusqu'au Maître Xehanort, à Scala ad Caelum, et repart avec ses amis aux Îles du Destin, où le trio se retrouve sans Sora, parti sauver Kairi.",
          "In Kingdom Hearts III, Goofy accompanies Sora in his quest for the power of waking. His flashes of insight remain his trademark: he is the one who recalls Hercules's lesson about the strength of the heart, or who guesses the relationship between Woody and his toys. He also drives the team attacks and becomes, world after world, a formidable bodyguard able to shield Sora from the heaviest blows.\n\nAt the Keyblade Graveyard, Goofy falls with the other Guardians beneath the Demon Tide before Sora turns back time to save them. He fights beside Sora and Donald up to Master Xehanort in Scala ad Caelum, and returns with his friends to Destiny Islands, where the trio gathers without Sora, gone to save Kairi.",
        ),
      },
      {
        game: "kingdom-hearts-iv",
        text: L(
          "La bande-annonce de Kingdom Hearts IV montre Dingo et Donald dans un lieu ténébreux éclairé de flammes, qui rappelle le royaume d'Hadès. Séparés de Sora depuis sa disparition, ils semblent avoir choisi de frapper à une porte peu recommandable pour retrouver leur ami.\n\nLe détail de leur mission reste inconnu, mais le duo apparaît toujours ensemble et toujours fidèle à l'esprit du trio original. Leur histoire se déroulera en parallèle de celle de Sora à Quadratum, dans la nouvelle saga inaugurée par cet épisode.",
          "The Kingdom Hearts IV trailer shows Goofy and Donald in a dark place lit by flames, reminiscent of Hades's realm. Separated from Sora since his disappearance, they seem to have chosen to knock on an unsavoury door in order to find their friend.\n\nThe details of their mission remain unknown, but the pair always appears together and true to the spirit of the original trio. Their story will run alongside Sora's in Quadratum, in the new saga this game inaugurates.",
        ),
      },
    ],
    trivia: [
      L("Bill Farmer double Dingo en anglais depuis 1987 et dans tous les Kingdom Hearts ; Yū Shimaka assure la version japonaise. Gérard Rinaldi prête sa voix française aux deux premiers épisodes.", "Bill Farmer has voiced Goofy in English since 1987 and in every Kingdom Hearts; Yū Shimaka provides the Japanese version. Gérard Rinaldi voiced him in French in the first two games."),
      L("Le prénom original de Dingo, Goofy, n'a jamais été traduit dans les jeux français, qui utilisent toujours le nom francophone.", "Goofy's original name was never kept in the French games, which always use his French name Dingo."),
      L("Dans Kingdom Hearts II, Dingo apprend la capacité Bouclier Miracle au fil des niveaux, ce qui fait de lui le meilleur protecteur des trois.", "In Kingdom Hearts II, Goofy learns defensive abilities as he levels up, making him the best protector of the three."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Goofy", url: "https://kingdomhearts.fandom.com/wiki/Goofy" },
    ],
  },

  // ─────────────────────────── Yen Sid ───────────────────────────
  "yen-sid": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Yen Sid est le sorcier de L'Apprenti sorcier, séquence de Fantasia (1940) dans laquelle Mickey, coiffé du chapeau magique de son maître, déclenche une inondation en animant des balais. Son nom, jamais prononcé dans le film, est « Disney » écrit à l'envers, et ses traits s'inspireraient de Walt Disney lui-même. Dans le film, il est un maître sévère mais patient, capable d'arrêter une catastrophe d'un simple geste.\n\nKingdom Hearts en fait un ancien Maître de la Keyblade, retiré dans la Tour Mystérieuse, où il observe les mondes depuis ses fenêtres en forme d'étoiles. Il a formé Mickey, puis conseille tour à tour Terra, Aqua, Sora et Riku. Yen Sid ne combat presque jamais, mais il est la mémoire vivante des Keyblades, celui qui explique les Sans-cœur, les Similis, le plan de Xehanort et la façon de le contrer. Il incarne l'autorité bienveillante qui manque aux héros après la disparition de leurs propres maîtres.",
          "Yen Sid is the sorcerer of The Sorcerer's Apprentice, the Fantasia sequence (1940) in which Mickey, wearing his master's magic hat, causes a flood by bringing broomsticks to life. His name, never spoken in the film, is “Disney” spelled backwards, and his features are said to be inspired by Walt Disney himself. In the film he is a stern but patient master, able to stop a disaster with a single gesture.\n\nKingdom Hearts makes him a former Keyblade Master, retired to the Mysterious Tower, where he watches the worlds through star-shaped windows. He trained Mickey and later advises Terra, Aqua, Sora and Riku in turn. Yen Sid almost never fights, but he is the living memory of the Keyblades, the one who explains the Heartless, the Nobodies, Xehanort's plan and how to counter it. He embodies the benevolent authority the heroes lack after their own masters are gone.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Yen Sid apparaît dans Birth by Sleep comme un Maître retraité, contemporain d'Eraqus et de Xehanort. Quand Mickey disparaît avec le fragment d'étoile, il reçoit à la Tour Mystérieuse Terra, à qui il apprend que le Maître Xehanort est bien vivant, puis Aqua, qu'il met en garde contre les intentions de son ami. À chaque fois, il se refuse à trancher : c'est aux porteurs de découvrir la vérité par eux-mêmes.\n\nAprès la bataille du Nécropole des Keyblades, Yen Sid accueille Aqua et le corps endormi de Ventus, ramenés par Mickey, et lui annonce qu'Eraqus est mort. Il lui explique que le cœur de Ven a quitté son corps et qu'il n'existe aucun moyen connu de le réveiller. C'est dans son bureau que Mickey lui rend Star Seeker, et c'est lui qui, dans la scène finale, offre la Keyblade au roi en reconnaissance de ses actes.",
          "Yen Sid appears in Birth by Sleep as a retired Master, a contemporary of Eraqus and Xehanort. When Mickey vanishes with the Star Shard, he receives Terra at the Mysterious Tower and tells him Master Xehanort is very much alive, then Aqua, whom he warns about her friend's intentions. Each time he refuses to decide for them: the wielders must discover the truth themselves.\n\nAfter the battle at the Keyblade Graveyard, Yen Sid takes in Aqua and the sleeping body of Ventus, brought by Mickey, and tells her Eraqus is dead. He explains that Ven's heart has left his body and that no known means can wake him. It is in his study that Mickey hands back Star Seeker, and he is the one who, in the final scene, offers the Keyblade to the king in recognition of his deeds.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Après son réveil au manoir de la Cité du Crépuscule, Sora est envoyé par Mickey à la Tour Mystérieuse. Yen Sid y attend le trio, en compagnie de Donald et Dingo qu'il traite en vieilles connaissances. Il leur montre, à l'aide d'un livre et d'images projetées, la nature des Similis et de l'Organisation XIII, et leur révèle que le roi est déjà en mission contre eux.\n\nLes trois fées, Flora, Pâquerette et Pimprenelle, offrent alors à Sora ses nouveaux vêtements, dotés du pouvoir des Formes, tandis que Yen Sid lui remet la Keyblade Star Seeker et un vaisseau Gummi. Il se retire ensuite dans son rôle de vigie, et c'est vers sa tour que Maléfique, ressuscitée par les souvenirs de Donald et Dingo, revient d'abord semer le trouble.",
          "After waking in the Twilight Town mansion, Sora is sent by Mickey to the Mysterious Tower. Yen Sid awaits the trio there, treating Donald and Goofy as old acquaintances. Using a book and projected images, he shows them the nature of the Nobodies and of Organization XIII, and reveals that the king is already on a mission against them.\n\nThe three fairies, Flora, Fauna and Merryweather, then give Sora his new clothes, imbued with the power of Drive Forms, while Yen Sid hands him the Star Seeker Keyblade and a Gummi ship. He withdraws to his role as watchman, and it is at his tower that Maleficent, revived by Donald's and Goofy's memories, first returns to stir up trouble.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Dans l'épilogue de Re:coded, Mickey se rend à la Tour Mystérieuse pour rapporter à Yen Sid ce que le Sora de données a appris dans le journal : Terra, Ventus et Aqua, ainsi que Roxas, Xion et Axel, attendent d'être sauvés. Le sorcier tire alors une conclusion que le roi n'avait pas envisagée.\n\nAnsem, Sans-cœur de Xehanort, et Xemnas, son Simili, ayant tous deux été vaincus, le Maître Xehanort d'origine va inévitablement renaître. Yen Sid explique que la lutte contre les ténèbres n'est pas terminée et qu'il faut préparer de nouveaux Maîtres de la Keyblade. Il décide de convoquer Sora et Riku pour leur faire passer l'examen de Maîtrise, ce qui ouvre directement sur Dream Drop Distance.",
          "In the epilogue of Re:coded, Mickey goes to the Mysterious Tower to report to Yen Sid what Data-Sora learned in the journal: Terra, Ventus and Aqua, as well as Roxas, Xion and Axel, are waiting to be saved. The sorcerer then draws a conclusion the king had not considered.\n\nSince Ansem, Xehanort's Heartless, and Xemnas, his Nobody, have both been defeated, the original Master Xehanort is bound to be reborn. Yen Sid explains that the struggle against darkness is not over and that new Keyblade Masters must be prepared. He decides to summon Sora and Riku for the Mark of Mastery exam, which leads straight into Dream Drop Distance.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Yen Sid organise l'examen de Maîtrise de Sora et Riku : ils devront réveiller sept Mondes Endormis, plongés dans le sommeil depuis la chute de leurs serrures, et en revenir. Il les prévient que ces mondes sont peuplés d'Avale-Rêves, et les envoie aux Îles du Destin d'avant la catastrophe pour amorcer leur plongée.\n\nÀ mesure que l'examen tourne au piège tendu par le Jeune Xehanort, Yen Sid analyse la situation avec Mickey et devine les treize ténèbres réunies par Xehanort. Quand Riku ramène Sora endormi à la Tour puis plonge dans son cœur pour le libérer, le sorcier le proclame Maître de la Keyblade, alors que Sora échoue. Dans la scène finale, il accueille Lea, venu apprendre à manier la Keyblade, et charge Mickey de rassembler les sept Gardiens de la Lumière.",
          "Yen Sid organises Sora's and Riku's Mark of Mastery exam: they must wake seven Sleeping Worlds, dormant since their keyholes fell, and return. He warns them that those worlds are home to Dream Eaters, and sends them to the Destiny Islands of before the disaster to begin their dive.\n\nAs the exam turns into a trap set by Young Xehanort, Yen Sid analyses the situation with Mickey and deduces the thirteen darknesses Xehanort has gathered. When Riku brings the sleeping Sora back to the Tower and dives into his heart to free him, the sorcerer proclaims him a Keyblade Master, while Sora fails. In the final scene he welcomes Lea, come to learn the Keyblade, and tasks Mickey with gathering the seven Guardians of Light.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Depuis la Tour Mystérieuse, Yen Sid coordonne la préparation de la bataille finale. Il envoie Sora, privé de la plupart de ses pouvoirs, retrouver le Pouvoir de l'éveil auprès d'Hercule, confie Kairi et Lea à Merlin pour leur entraînement, et dépêche Riku et Mickey dans le Domaine des Ténèbres à la recherche d'Aqua. C'est également lui qui remet Braveheart à Riku, sa nouvelle Keyblade de Maître.\n\nAu Nécropole des Keyblades, Yen Sid quitte enfin sa tour : il se tient face à la Marée Démoniaque avec Donald et Dingo pour couvrir les Gardiens, révélant qu'il n'a rien perdu de sa puissance. Après la disparition de Sora, il retrouve les survivants et, dans l'épilogue, veille avec eux à la Tour, où Kairi vient lui demander de la laisser chercher Sora.",
          "From the Mysterious Tower, Yen Sid coordinates the preparations for the final battle. He sends Sora, stripped of most of his powers, to regain the power of waking from Hercules, entrusts Kairi and Lea to Merlin for their training, and dispatches Riku and Mickey into the Realm of Darkness to look for Aqua. He is also the one who hands Braveheart, the new Master's Keyblade, to Riku.\n\nAt the Keyblade Graveyard, Yen Sid finally leaves his tower: he stands against the Demon Tide with Donald and Goofy to cover the Guardians, showing he has lost none of his power. After Sora's disappearance he gathers the survivors and, in the epilogue, keeps watch with them at the Tower, where Kairi comes to ask him to let her search for Sora.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
          "Dans Melody of Memory, Yen Sid propose à Kairi de plonger dans ses propres souvenirs, sous surveillance, pour y chercher un indice sur l'endroit où se trouve Sora. Le voyage musical du jeu est ce parcours mental, que le sorcier suit depuis la Tour.\n\nÀ l'issue de cette plongée, Kairi rapporte ce qu'elle a aperçu : un monde inconnu où Sora pourrait se trouver. Yen Sid en déduit qu'il s'agit d'un lieu situé hors du Domaine de la Lumière, et Riku se porte volontaire pour s'y rendre. Le sorcier fait alors appel aux fées pour préparer Riku, et accepte que Kairi rejoigne Aqua pour poursuivre son entraînement.",
          "In Melody of Memory, Yen Sid suggests that Kairi dive into her own memories, under supervision, to search for a clue as to Sora's whereabouts. The game's musical journey is that mental voyage, which the sorcerer follows from the Tower.\n\nAt the end of the dive, Kairi reports what she glimpsed: an unknown world where Sora might be. Yen Sid deduces that it is a place outside the Realm of Light, and Riku volunteers to go there. The sorcerer then calls on the fairies to prepare Riku, and agrees that Kairi should join Aqua to continue her training.",
        ),
      },
    ],
    trivia: [
      L("« Yen Sid » est l'anacyclique de « Disney » ; ce nom, inventé par les animateurs de Fantasia, n'est jamais prononcé dans le film.", "“Yen Sid” is “Disney” spelled backwards; the name, coined by Fantasia's animators, is never spoken in the film."),
      L("Corey Burton le double en anglais dans tous les jeux ; en japonais, il est interprété par Naoya Uchida à partir de Birth by Sleep.", "Corey Burton voices him in English in every game; in Japanese he is played by Naoya Uchida from Birth by Sleep onward."),
      L("Sa Tour Mystérieuse est un monde à part entière depuis Birth by Sleep, mais il n'y a aucun combat de boss en son sein.", "His Mysterious Tower has been a world in its own right since Birth by Sleep, but no boss fight ever takes place inside it."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Yen Sid", url: "https://kingdomhearts.fandom.com/wiki/Yen_Sid" },
    ],
  },

  // ─────────────────────────── Maléfique ───────────────────────────
  "maleficent": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Maléfique est la fée maléfique de La Belle au bois dormant (1959), animée par Marc Davis et doublée par Eleanor Audley : vexée de ne pas avoir été invitée au baptême d'Aurore, elle condamne la princesse à se piquer le doigt et à mourir. Sa silhouette encornée, sa robe noire et violette, son corbeau Diablo et sa transformation en dragon en font l'un des méchants les plus emblématiques du studio.\n\nKingdom Hearts en fait la grande antagoniste Disney de la saga. Elle réunit les autres méchants, Jafar, Ursula, Oogie Boogie, Crochet et Hadès, commande les Sans-cœur et cherche les sept Princesses de Cœur pour ouvrir Kingdom Hearts. Le jeu lui prête une ambition démesurée mais aussi une naïveté : manipulée par Xehanort puis par son Sans-cœur, elle n'est jamais l'esprit qui tire vraiment les ficelles. Elle devient par la suite une force indépendante, toujours prête à saisir la moindre occasion de conquérir les mondes.",
          "Maleficent is the evil fairy of Sleeping Beauty (1959), animated by Marc Davis and voiced by Eleanor Audley: offended at not being invited to Aurora's christening, she curses the princess to prick her finger and die. Her horned silhouette, black and purple robe, raven Diablo and transformation into a dragon make her one of the studio's most iconic villains.\n\nKingdom Hearts makes her the saga's great Disney antagonist. She gathers the other villains, Jafar, Ursula, Oogie Boogie, Hook and Hades, commands the Heartless and seeks the seven Princesses of Heart to open Kingdom Hearts. The game gives her boundless ambition but also a certain naivety: manipulated by Xehanort and then by his Heartless, she is never the mind truly pulling the strings. She later becomes an independent force, always ready to seize the slightest chance to conquer the worlds.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans le Domaine Enchanté, Maléfique révèle qu'un homme vêtu de noir, le Maître Xehanort, lui a enseigné le pouvoir des ténèbres et l'existence des Keyblades. Elle utilise ce savoir pour manipuler Terra : en s'appuyant sur les ténèbres du jeune homme, elle lui fait arracher le cœur d'Aurore, l'une des Princesses de Cœur, avant qu'il ne comprenne ce qu'il a fait.\n\nVentus la défie ensuite avec le prince Philippe et libère le cœur d'Aurore, tandis qu'Aqua l'affronte à son tour, sous sa forme de dragon. Vaincue mais nullement découragée, Maléfique prophétise que d'autres porteurs de Keyblade rejoindront les ténèbres. Ces événements expliquent sa fascination pour les Princesses de Cœur et sa connaissance des Sans-cœur dix ans plus tard.",
          "In Enchanted Dominion, Maleficent reveals that a man in black, Master Xehanort, taught her the power of darkness and the existence of the Keyblades. She uses that knowledge to manipulate Terra: drawing on the young man's darkness, she has him tear out the heart of Aurora, one of the Princesses of Heart, before he understands what he has done.\n\nVentus then challenges her with Prince Phillip and frees Aurora's heart, while Aqua faces her in turn, in dragon form. Defeated but far from discouraged, Maleficent prophesies that other Keyblade wielders will join the darkness. These events explain her fascination with the Princesses of Heart and her knowledge of the Heartless ten years later.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Depuis la Forteresse Oubliée, Maléfique dirige un conseil de méchants Disney et lance les Sans-cœur à l'assaut des mondes pour capturer les sept Princesses de Cœur. Elle recueille Riku après la destruction des Îles du Destin, lui fait miroiter le moyen de sauver Kairi et l'emploie à retrouver les princesses tout en dressant le garçon contre Sora.\n\nUne fois les princesses réunies, Maléfique affronte Sora dans sa chapelle, puis, transpercée par la Keyblade des Cœurs que manie Riku possédé par Ansem, se change en dragon. Sora la terrasse, et Ansem, qui l'a manipulée depuis le début à travers Riku, ne laisse d'elle qu'un tas de cendres. Sa défaite prouve que la maîtresse des ténèbres n'était qu'un pion dans le plan du Sans-cœur de Xehanort.",
          "From Hollow Bastion, Maleficent leads a council of Disney villains and unleashes the Heartless on the worlds to capture the seven Princesses of Heart. She takes in Riku after the destruction of Destiny Islands, dangles before him a way to save Kairi and uses him to find the princesses while turning the boy against Sora.\n\nOnce the princesses are gathered, Maleficent faces Sora in her chapel, then, pierced by the Keyblade of People's Hearts wielded by an Ansem-possessed Riku, turns into a dragon. Sora strikes her down, and Ansem, who has manipulated her through Riku from the start, leaves nothing of her but ashes. Her defeat proves that the mistress of darkness was only a pawn in the plan of Xehanort's Heartless.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Maléfique renaît à la Tour Mystérieuse lorsque son corbeau Diablo réveille les souvenirs que Donald, Dingo et les trois fées gardent d'elle. Sitôt revenue, elle recrute Pat Hibulaire, libéré de la dimension où Minnie l'avait banni, et repart à la conquête des mondes, tentant de reprendre Hollow Bastion et son château, qu'elle considère comme sa propriété.\n\nSon plan se heurte à l'Organisation XIII, dont les Similis lui font concurrence pour le contrôle des Sans-cœur. Dans le Monde qui n'existe pas, elle finit par tenir tête aux Sans-cœur avec Pat pour couvrir Sora et ses amis, non par générosité mais parce qu'elle convoite le château de Xemnas. Elle disparaît dans la mêlée, déjà tournée vers sa prochaine intrigue.",
          "Maleficent is reborn at the Mysterious Tower when her raven Diablo stirs the memories Donald, Goofy and the three fairies keep of her. Back at once, she recruits Pete, freed from the dimension Minnie had banished him to, and sets out to conquer the worlds again, trying to retake Hollow Bastion and its castle, which she regards as her property.\n\nHer plan collides with Organization XIII, whose Nobodies compete with her for control of the Heartless. In The World That Never Was she ends up holding the Heartless back with Pete to cover Sora and his friends, not out of generosity but because she covets Xemnas's castle. She vanishes into the fray, already turned to her next scheme.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Maléfique et Pat Hibulaire s'introduisent dans le journal numérisé de Jiminy, où ils espèrent transformer le monde de données en une armée à leur solde. Ils capturent le Sora de données et piègent Mickey, ce qui contraint le roi à intervenir lui-même dans le monde virtuel.\n\nDans la Forteresse Oubliée de données, Maléfique affronte le Sora de données sous sa forme de dragon et, une fois vaincue, voit son projet s'effondrer avec les bugs qu'elle voulait exploiter. Le jeu suggère qu'elle et Pat sont expulsés du journal, mais aussi qu'elle a désormais entendu parler de choses plus anciennes que les Sans-cœur, ce que Dream Drop Distance et Kingdom Hearts III exploitent.",
          "Maleficent and Pete break into Jiminy's digitised journal, hoping to turn the data world into an army of their own. They capture Data-Sora and trap Mickey, forcing the king to step into the virtual world himself.\n\nIn the data Hollow Bastion, Maleficent faces Data-Sora in dragon form and, once defeated, sees her project collapse together with the bugs she meant to exploit. The game suggests she and Pete are ejected from the journal, but also that she has now heard of things older than the Heartless, something Dream Drop Distance and Kingdom Hearts III build on.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Pendant l'examen de Maîtrise, Maléfique et Pat Hibulaire attaquent le Château Disney et enlèvent la reine Minnie. Maléfique convoque Mickey, Donald et Dingo dans la salle du trône et exige, en échange de la reine, l'accès aux données des mondes que le roi a explorées dans le journal de Jiminy.\n\nElle laisse entendre que Xehanort lui a promis un rôle dans l'avenir des mondes et qu'elle vise désormais plus haut que les Princesses de Cœur. Son chantage tourne court lorsque Lea, arrivé par un couloir de ténèbres, lance un chakram et libère Minnie. Maléfique et Pat s'échappent, mais l'épisode confirme que la sorcière prépare son propre plan en marge de celui de Xehanort.",
          "During the Mark of Mastery exam, Maleficent and Pete attack Disney Castle and kidnap Queen Minnie. Maleficent summons Mickey, Donald and Goofy to the throne room and demands, in exchange for the queen, access to the data of the worlds the king explored in Jiminy's journal.\n\nShe hints that Xehanort promised her a role in the future of the worlds and that she now aims higher than the Princesses of Heart. Her blackmail is cut short when Lea, arriving through a corridor of darkness, throws a chakram and frees Minnie. Maleficent and Pete escape, but the episode confirms that the witch is preparing her own plan alongside Xehanort's.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Maléfique et Pat Hibulaire traversent Kingdom Hearts III à la recherche d'une mystérieuse boîte noire, celle que le Maître des Maîtres a confiée à Luxu. Ils interrogent Hadès à l'Olympe, fouillent le manoir de la Cité du Crépuscule et surgissent dans plusieurs mondes sans jamais croiser directement le fer avec Sora.\n\nCette quête la place, pour une fois, en marge de l'affrontement principal : elle ne prend pas part à la bataille du Nécropole des Keyblades et attend son heure. À la fin du jeu, la boîte reste entre les mains de Luxu, et Maléfique repart bredouille, décidée à poursuivre ses recherches. Elle est ainsi l'une des rares antagonistes de la saga à survivre à tous les épisodes.",
          "Maleficent and Pete spend Kingdom Hearts III searching for a mysterious black box, the one the Master of Masters entrusted to Luxu. They question Hades in Olympus, search the Twilight Town mansion and pop up in several worlds without ever directly crossing swords with Sora.\n\nThat quest places her, for once, at the edge of the main conflict: she takes no part in the battle at the Keyblade Graveyard and bides her time. At the end of the game the box remains in Luxu's hands, and Maleficent leaves empty-handed, determined to keep searching. She is thus one of the saga's rare antagonists to survive every game.",
        ),
      },
    ],
    trivia: [
      L("Susanne Blakeslee, voix officielle du personnage depuis les années 2000, la double en anglais ; Toshiko Sawada assure la version japonaise.", "Susanne Blakeslee, the character's official voice since the 2000s, plays her in English; Toshiko Sawada provides the Japanese version."),
      L("Maléfique est le premier boss Disney vaincu deux fois de suite dans Kingdom Hearts, sous forme humaine puis sous forme de dragon.", "Maleficent is the first Disney boss defeated twice in a row in Kingdom Hearts, in human form and then as a dragon."),
      L("Dans Kingdom Hearts χ, une Maléfique venue du futur se retrouve brièvement à Daybreak Town, à l'époque des Prophètes.", "In Kingdom Hearts χ, a Maleficent from the future briefly finds herself in Daybreak Town, in the age of the Foretellers."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Maleficent", url: "https://kingdomhearts.fandom.com/wiki/Maleficent" },
    ],
  },

  // ─────────────────────────── Pat Hibulaire ───────────────────────────
  "pete": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Pat Hibulaire est le plus ancien personnage récurrent de Disney : il apparaît dès 1925 dans la série Alice Comedies, trois ans avant Mickey, et devient ensuite l'éternel adversaire de la souris, de Donald et de Dingo. Gros chat brutal et fanfaron, il est tantôt gangster, tantôt voisin insupportable, tantôt patron tyrannique selon les époques.\n\nKingdom Hearts en fait un ancien habitant du Château Disney, capitaine du bateau à vapeur dans le passé du royaume, banni dans une autre dimension par la reine Minnie pour ses méfaits. Maléfique le libère pour en faire son homme de main, chargé de recruter des Sans-cœur et des méchants dans les mondes. Le jeu joue de sa vantardise et de sa maladresse : Pat est un menace sérieuse pour les habitants des mondes, mais rarement pour Sora, qu'il fuit plus souvent qu'il ne l'affronte.",
          "Pete is Disney's oldest recurring character: he first appears in 1925 in the Alice Comedies, three years before Mickey, and then becomes the eternal foe of the mouse, of Donald and of Goofy. A brutish, boastful fat cat, he is by turns a gangster, an unbearable neighbour or a tyrannical boss depending on the era.\n\nKingdom Hearts makes him a former resident of Disney Castle, captain of the steamboat in the kingdom's past, banished to another dimension by Queen Minnie for his misdeeds. Maleficent frees him to make him her henchman, tasked with recruiting Heartless and villains across the worlds. The game plays on his bragging and clumsiness: Pete is a serious threat to the inhabitants of the worlds, but rarely to Sora, whom he flees more often than he fights.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans Disney Town, Pat Hibulaire est encore un habitant ordinaire, mais déjà un tricheur. Pendant le Festival des Rêves, il se déguise en « Capitaine Justice » pour séduire les habitants, puis en « Capitaine Ténèbres » pour saboter les épreuves, dans l'espoir de remporter le prix des Un Million de Rêves.\n\nTerra, Ventus et Aqua le croisent tour à tour dans les jeux du festival, où il se montre mauvais perdant et met en danger les autres concurrents. La reine Minnie finit par le bannir dans une dimension à part, dont il ne sortira que dix ans plus tard grâce à Maléfique. Cette origine explique la rancune qu'il nourrit envers le château et la fidélité aveugle qu'il voue à la sorcière.",
          "In Disney Town, Pete is still an ordinary resident, but already a cheat. During the Dream Festival he disguises himself as “Captain Justice” to win the townsfolk over, then as “Captain Dark” to sabotage the events, hoping to win the Million Dreams Award.\n\nTerra, Ventus and Aqua meet him in turn at the festival games, where he proves a sore loser and endangers the other contestants. Queen Minnie eventually banishes him to a separate dimension, from which he only emerges ten years later thanks to Maleficent. That origin explains the grudge he holds against the castle and the blind loyalty he shows the witch.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Libéré par Maléfique, Pat Hibulaire devient son émissaire et parcourt les mondes pour rallier les méchants à sa cause. Sora le rencontre d'abord au Colisée de l'Olympe, où il pousse Hadès à se débarrasser du porteur, puis au Fleuve Intemporel, où son double du passé, capitaine du bateau à vapeur, se bat aux côtés de Sora contre lui sans comprendre qu'il s'agit de sa propre version future.\n\nIl réapparaît à Agrabah, au Pays Imaginaire, à la Ville d'Halloween et dans la Terre des Lions, toujours à la manœuvre derrière un méchant local. À Hollow Bastion, il assiste à la bataille des Mille Sans-cœur, et dans le Monde qui n'existe pas, il retient les Sans-cœur avec Maléfique tandis que Sora poursuit Xemnas.",
          "Freed by Maleficent, Pete becomes her envoy and travels the worlds to rally villains to her cause. Sora first meets him at Olympus Coliseum, where he pushes Hades to get rid of the wielder, then in the Timeless River, where his past self, captain of the steamboat, fights beside Sora against him without realising he is facing his own future.\n\nHe reappears in Agrabah, Neverland, Halloween Town and the Pride Lands, always pulling strings behind a local villain. In Hollow Bastion he watches the Battle of 1000 Heartless, and in The World That Never Was he holds the Heartless back with Maleficent while Sora goes after Xemnas.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Pat Hibulaire suit Maléfique dans le journal numérisé de Jiminy, où tous deux espèrent bâtir une armée de données. Il y affronte le Sora de données à plusieurs reprises et sert surtout de bras armé et de bouffon à la sorcière, dont il exécute les ordres sans en saisir la portée.\n\nQuand le plan s'effondre dans la Forteresse Oubliée virtuelle, après la défaite de la sorcière contre le Sora de données, Pat s'enfuit avec elle par un couloir de ténèbres. Il l'accompagne ensuite dans ses nouvelles ambitions, plus vastes que le simple contrôle des Sans-cœur.",
          "Pete follows Maleficent into Jiminy's digitised journal, where the two hope to build an army of data. He faces Data-Sora several times and mostly serves as the witch's muscle and clown, carrying out her orders without grasping their scope.\n\nWhen the plan collapses in the virtual Hollow Bastion, after the witch's defeat by Data-Sora, Pete flees with her through a corridor of darkness. He then accompanies her in her new ambitions, far broader than mere control of the Heartless.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Pat Hibulaire participe à l'enlèvement de la reine Minnie au Château Disney. Il retient la reine dans la salle du trône pendant que Maléfique dicte ses exigences à Mickey, Donald et Dingo.\n\nL'arrivée de Lea renverse la situation : un chakram lancé au bon moment force Pat à lâcher sa prisonnière. Il s'enfuit avec Maléfique par un couloir de ténèbres, ridiculisé une fois de plus, mais le raid montre que le duo est prêt à s'attaquer au cœur même du royaume de Mickey.",
          "Pete takes part in the kidnapping of Queen Minnie at Disney Castle. He holds the queen in the throne room while Maleficent dictates her demands to Mickey, Donald and Goofy.\n\nLea's arrival turns the tables: a well-timed chakram forces Pete to let go of his prisoner. He flees with Maleficent through a corridor of darkness, humiliated once again, but the raid shows the pair is willing to strike at the very heart of Mickey's kingdom.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Pat Hibulaire accompagne Maléfique dans sa chasse à la boîte noire. On les voit interroger Hadès à l'Olympe, fouiller le manoir de la Cité du Crépuscule et discuter avec un chat de la Boîte à Jouets, Pat se plaignant à chaque fois de ne pas comprendre ce qu'ils cherchent.\n\nÀ la différence des épisodes précédents, il n'affronte jamais Sora et ne commande aucun Sans-cœur. Il quitte le jeu comme il y est entré, à la traîne de la sorcière, la boîte toujours introuvable. Sa présence sert surtout de contrepoint comique à une intrigue de plus en plus sombre.",
          "Pete accompanies Maleficent in her hunt for the black box. They are seen questioning Hades in Olympus, searching the Twilight Town mansion and dealing with a cat in Toy Box, Pete complaining each time that he does not understand what they are looking for.\n\nUnlike in previous games, he never fights Sora and commands no Heartless. He leaves the game as he entered it, trailing the witch, the box still nowhere to be found. His presence mainly provides comic relief to an increasingly dark plot.",
        ),
      },
    ],
    trivia: [
      L("Jim Cummings le double en anglais dans tous les Kingdom Hearts ; en japonais, la voix est celle de Tōru Ōhira.", "Jim Cummings voices him in English in every Kingdom Hearts; in Japanese, the voice is Tōru Ōhira's."),
      L("Le Pat du Fleuve Intemporel, capitaine du bateau à vapeur, est une référence directe à Steamboat Willie (1928), où il est déjà le patron de Mickey.", "The Timeless River Pete, captain of the steamboat, is a direct reference to Steamboat Willie (1928), where he is already Mickey's boss."),
      L("Kingdom Hearts II est le premier jeu dans lequel Pat est un antagoniste récurrent ; il n'apparaissait pas dans le premier épisode.", "Kingdom Hearts II is the first game in which Pete is a recurring antagonist; he did not appear in the first game."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Pete", url: "https://kingdomhearts.fandom.com/wiki/Pete" },
    ],
  },

  // ─────────────────────────── Reine Minnie ───────────────────────────
  "minnie": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Minnie Mouse naît en même temps que Mickey, en 1928, dans Steamboat Willie, dont elle est déjà la partenaire. Avec sa robe à pois, son nœud dans les cheveux et sa douceur, elle incarne la compagne fidèle et pleine de ressources de la souris. Longtemps doublée par Russi Taylor, elle est l'un des visages les plus reconnaissables de Disney.\n\nKingdom Hearts la couronne reine du Château Disney. En l'absence de Mickey, c'est elle qui gouverne, secondée par Daisy et par Tic et Tac. Le jeu lui prête une autorité tranquille et une magie de lumière capable de repousser les Sans-cœur, ce qui en fait bien plus qu'une figure d'attente : elle protège le royaume, bannit Pat Hibulaire, et garde la Pierre Angulaire de Lumière qui tient les ténèbres à distance du château.",
          "Minnie Mouse was born alongside Mickey, in 1928, in Steamboat Willie, where she is already his partner. With her polka-dot dress, her hair bow and her gentleness, she embodies the mouse's loyal and resourceful companion. Long voiced by Russi Taylor, she is one of Disney's most recognisable faces.\n\nKingdom Hearts crowns her queen of Disney Castle. In Mickey's absence she is the one who rules, assisted by Daisy and by Chip and Dale. The game gives her quiet authority and a light magic able to repel the Heartless, which makes her far more than a waiting figure: she protects the kingdom, banishes Pete, and keeps the Cornerstone of Light that holds darkness away from the castle.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans Disney Town, Minnie préside le Festival des Rêves, une fête où les habitants élisent leur héros favori pour le prix des Un Million de Rêves. Elle accueille Terra, Ventus et Aqua avec bienveillance et les invite à participer aux épreuves : course de luge, rythmique de glaces ou parcours de balles.\n\nLorsque Pat Hibulaire, déguisé, multiplie les tricheries et met les concurrents en danger, la reine le bannit dans une dimension isolée. Elle remet aux porteurs le prix du festival, qui prend la forme d'une glace pour chacun. Ces scènes, situées avant les événements des Îles du Destin, montrent une Minnie déjà souveraine et déjà décidée.",
          "In Disney Town, Minnie presides over the Dream Festival, a celebration where residents vote for their favourite hero for the Million Dreams Award. She welcomes Terra, Ventus and Aqua warmly and invites them to join the events: sled race, ice-cream rhythm game or ball course.\n\nWhen a disguised Pete cheats repeatedly and endangers the contestants, the queen banishes him to an isolated dimension. She hands the festival prize to the wielders, taking the form of an ice cream for each. These scenes, set before the events of Destiny Islands, show a Minnie already sovereign and already decisive.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le premier jeu s'ouvre au Château Disney, où Donald découvre que le roi a disparu. C'est à Minnie qu'il rapporte la lettre laissée par Mickey, en présence de Daisy. La reine lit le message du roi et confie aussitôt à Donald et Dingo la mission de retrouver « la clé », en leur adjoignant Jiminy Criquet pour tenir le journal du voyage.\n\nMinnie ne quitte pas le château de tout l'épisode, mais son consentement est ce qui lance l'aventure. Elle reste, avec Daisy, l'image du foyer auquel Donald et Dingo se promettent de revenir. Kingdom Hearts II la retrouve à la même place, toujours à la tête du royaume.",
          "The first game opens at Disney Castle, where Donald discovers the king has vanished. It is to Minnie that he brings Mickey's letter, in Daisy's presence. The queen reads the king's message and at once entrusts Donald and Goofy with finding “the key”, sending Jiminy Criquet with them to keep the journal of their journey.\n\nMinnie never leaves the castle throughout the game, but her consent is what launches the adventure. She remains, with Daisy, the image of the home Donald and Goofy promise to return to. Kingdom Hearts II finds her in the same place, still at the head of the kingdom.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Lorsque des Sans-cœur envahissent le Château Disney, Minnie fait appeler Sora, Donald et Dingo. Elle explique que la Pierre Angulaire de Lumière, qui protège le château, est envahie d'épines et que Maléfique menace le royaume depuis le passé. Sora escorte la reine jusqu'à la salle du trône à travers la bibliothèque et la salle des colonnes, tandis que Minnie repousse elle-même les Sans-cœur avec sa lumière.\n\nElle envoie ensuite le trio à travers la porte magique créée par Merlin vers le Fleuve Intemporel, où il faut empêcher Pat Hibulaire de corrompre la Pierre Angulaire. Une fois le château sauvé, Minnie remercie Sora, et c'est à ses côtés que Mickey, Donald et Dingo célèbrent leur retour à la toute fin du jeu.",
          "When Heartless invade Disney Castle, Minnie sends for Sora, Donald and Goofy. She explains that the Cornerstone of Light, which protects the castle, is overrun with thorns and that Maleficent threatens the kingdom from the past. Sora escorts the queen to the throne room through the library and the Hall of the Cornerstone, while Minnie repels the Heartless herself with her light.\n\nShe then sends the trio through the magic door Merlin creates to the Timeless River, where Pete must be stopped from corrupting the Cornerstone. Once the castle is saved, Minnie thanks Sora, and it is at her side that Mickey, Donald and Goofy celebrate their homecoming at the very end of the game.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Pendant l'examen de Maîtrise de Sora et Riku, Maléfique et Pat Hibulaire attaquent le Château Disney et s'emparent de Minnie. La reine est retenue dans la salle du trône et sert de monnaie d'échange : Maléfique réclame les données des mondes en échange de sa liberté.\n\nMinnie reste digne face à ses ravisseurs, et c'est l'intervention imprévue de Lea qui la libère. Elle est ensuite aperçue à la Tour Mystérieuse, où elle assiste avec Donald, Dingo et les autres au retour de Sora et Riku, sains et saufs, et à la nomination de ce dernier au rang de Maître.",
          "During Sora's and Riku's Mark of Mastery exam, Maleficent and Pete attack Disney Castle and seize Minnie. The queen is held in the throne room and used as a bargaining chip: Maleficent demands the data of the worlds in exchange for her freedom.\n\nMinnie keeps her dignity before her captors, and it is Lea's unexpected intervention that frees her. She is later seen at the Mysterious Tower, where she witnesses with Donald, Goofy and the others the safe return of Sora and Riku, and the latter's promotion to Master.",
        ),
      },
    ],
    trivia: [
      L("Russi Taylor, voix de Minnie de 1986 à sa mort en 2019, la double dans tous les jeux jusqu'à Kingdom Hearts III ; en japonais, c'est Yūko Mizutani.", "Russi Taylor, Minnie's voice from 1986 until her death in 2019, plays her in every game up to Kingdom Hearts III; in Japanese it is Yūko Mizutani."),
      L("La mission d'escorte de Minnie dans Kingdom Hearts II est l'une des rares séquences où un personnage Disney combat les Sans-cœur par sa propre magie.", "Minnie's escort mission in Kingdom Hearts II is one of the rare sequences where a Disney character fights the Heartless with her own magic."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Minnie Mouse", url: "https://kingdomhearts.fandom.com/wiki/Minnie_Mouse" },
    ],
  },

  // ─────────────────────────── Jiminy Criquet ───────────────────────────
  "jiminy-cricket": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Jiminy Criquet est le grillon de Pinocchio (1940), nommé conscience officielle du pantin par la Fée Bleue. Avec son haut-de-forme, son parapluie et sa chanson Quand on prie la bonne étoile, devenue l'hymne de Disney, il est le narrateur et la voix morale du film. Le personnage a ensuite servi de présentateur à de nombreuses émissions éducatives du studio.\n\nKingdom Hearts en fait le chroniqueur de la saga. Envoyé par la reine Minnie pour accompagner Donald et Dingo, il tient le journal de bord qui consigne les personnages rencontrés, les Sans-cœur combattus et les rapports d'Ansem : le menu du journal, dans le jeu, est le sien. Ce rôle prend une importance inattendue lorsque l'effacement puis la numérisation de ses notes deviennent le point de départ de Re:coded. Jiminy est ainsi le témoin discret de tous les voyages de Sora.",
          "Jiminy Criquet is the cricket of Pinocchio (1940), appointed the puppet's official conscience by the Blue Fairy. With his top hat, umbrella and song When You Wish Upon a Star, which became Disney's anthem, he is the film's narrator and moral voice. The character later hosted many of the studio's educational programmes.\n\nKingdom Hearts makes him the saga's chronicler. Sent by Queen Minnie to accompany Donald and Goofy, he keeps the journal that records the characters met, the Heartless fought and Ansem's reports: the journal menu in the game is his. That role gains unexpected weight when the erasure and later digitisation of his notes become the starting point of Re:coded. Jiminy is thus the quiet witness of all of Sora's journeys.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Jiminy quitte le Château Disney avec Donald et Dingo sur ordre de la reine Minnie, chargé de consigner leurs aventures. Il voyage caché dans la capuche de Sora et intervient rarement dans les combats, mais son journal accompagne le joueur du début à la fin.\n\nSon monde d'origine, celui de Pinocchio, a été détruit par les Sans-cœur. Il en retrouve les survivants dans le ventre de Monstro, où Pinocchio et Geppetto ont échoué : Jiminy s'inquiète pour le pantin, que Riku tente d'enlever afin d'étudier son cœur artificiel. Une fois Pinocchio sauvé, Jiminy reprend sa place dans la capuche et achève son journal au Bout du Monde.",
          "Jiminy leaves Disney Castle with Donald and Goofy on Queen Minnie's orders, tasked with recording their adventures. He travels hidden in Sora's hood and rarely takes part in the fighting, but his journal accompanies the player from start to finish.\n\nHis home world, that of Pinocchio, was destroyed by the Heartless. He finds its survivors inside Monstro, where Pinocchio and Geppetto have ended up: Jiminy worries about the puppet, whom Riku tries to abduct in order to study his artificial heart. Once Pinocchio is saved, Jiminy returns to the hood and completes his journal at the End of the World.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Au Manoir Oblivion, les souvenirs de Jiminy s'effacent comme ceux de ses compagnons, et son journal se vide au fil des étages. Ce détail devient un fil rouge : le grillon comprend qu'il ne se souvient plus de ce qu'il a écrit et en tire l'intuition que le château dérobe les souvenirs.\n\nÀ la fin du jeu, avant d'entrer en capsule pour retrouver sa mémoire, Jiminy note une dernière ligne : « Remercier Naminé ». Cette phrase unique, survivante de l'effacement, est tout ce qui reste de l'aventure lorsque le groupe se réveille un an plus tard, et elle intrigue Sora au début de Kingdom Hearts II.",
          "In Castle Oblivion, Jiminy's memories fade like those of his companions, and his journal empties floor after floor. That detail becomes a thread: the cricket realises he no longer remembers what he wrote and deduces that the castle steals memories.\n\nAt the end of the game, before entering a pod to recover his memory, Jiminy writes one last line: “Thank Naminé.” That single sentence, survivor of the erasure, is all that remains of the adventure when the group wakes a year later, and it puzzles Sora at the start of Kingdom Hearts II.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Réveillé avec Sora au manoir de la Cité du Crépuscule, Jiminy constate que son journal ne contient qu'une seule phrase, « Remercier Naminé », sans qu'aucun d'eux ne sache qui elle est. Il reprend la plume et tient le compte rendu des nouveaux mondes, des trésors et des rapports d'Ansem le Sage, cette fois dispersés sous forme de rapports secrets.\n\nSon rôle reste celui de chroniqueur, mais le jeu multiplie les défis liés à son journal, qui devient la mesure de la complétion. Après la défaite de Xemnas, il rentre au Château Disney avec Donald et Dingo, et c'est en relisant ses notes qu'il découvrira, dans Re:coded, une phrase qu'il n'a jamais écrite.",
          "Woken with Sora in the Twilight Town mansion, Jiminy finds that his journal contains only one sentence, “Thank Naminé”, without any of them knowing who she is. He picks up his pen again and records the new worlds, the treasures and the reports of Ansem the Wise, this time scattered as secret reports.\n\nHis role remains that of chronicler, but the game multiplies challenges tied to his journal, which becomes the measure of completion. After Xemnas's defeat he returns to Disney Castle with Donald and Goofy, and it is while rereading his notes that he discovers, in Re:coded, a sentence he never wrote.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Jiminy relit ses deux journaux au Château Disney et découvre, dans celui vidé au Manoir Oblivion, une phrase inconnue : « Leur souffrance sera apaisée quand tu reviendras y mettre fin ». Il alerte Mickey, et le journal est numérisé par Tic et Tac pour être exploré de l'intérieur par un Sora de données.\n\nTout Re:coded se déroule ainsi dans le journal de Jiminy, un monde de données infesté de bugs qui reproduit les mondes du premier jeu. Le grillon suit l'enquête depuis la bibliothèque avec le roi, Donald et Dingo, et commente chaque découverte du Sora de données. Le message est finalement attribué à Naminé, qui a caché dans les souvenirs de Sora l'appel à l'aide de Terra, Ventus, Aqua, Roxas, Xion et Axel.",
          "Jiminy rereads his two journals at Disney Castle and discovers, in the one emptied at Castle Oblivion, an unknown sentence: “Their hurting will be mended when you return to end it.” He alerts Mickey, and the journal is digitised by Chip and Dale so that a Data-Sora can explore it from within.\n\nAll of Re:coded thus takes place inside Jiminy's journal, a bug-infested data world reproducing the worlds of the first game. The cricket follows the investigation from the library with the king, Donald and Goofy, commenting on each of Data-Sora's discoveries. The message is finally attributed to Naminé, who hid in Sora's memories the call for help from Terra, Ventus, Aqua, Roxas, Xion and Axel.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Jiminy reprend sa place dans la capuche de Sora pour Kingdom Hearts III, où son journal s'enrichit d'une nouvelle fonction : c'est lui qui tient le registre des Marques Chanceuses, des recettes de cuisine et des rapports de Mogs. Le Gummiphone, offert par Tic et Tac, complète désormais sa chronique par des photographies.\n\nIl assiste, depuis la capuche, à la bataille du Nécropole des Keyblades et au sauvetage des Gardiens. Après la disparition de Sora, Jiminy figure parmi les proches réunis aux Îles du Destin lors de l'épilogue. Son rôle de mémoire de la saga est aussi mis à l'honneur dans Melody of Memory, dont le voyage repose sur les souvenirs des jeux précédents.",
          "Jiminy returns to Sora's hood for Kingdom Hearts III, where his journal gains a new function: he keeps the record of Lucky Emblems, cooking recipes and Moogle reports. The Gummiphone, a gift from Chip and Dale, now complements his chronicle with photographs.\n\nFrom the hood he witnesses the battle at the Keyblade Graveyard and the rescue of the Guardians. After Sora's disappearance, Jiminy is among the friends gathered on Destiny Islands in the epilogue. His role as the saga's memory is also honoured in Melody of Memory, whose journey rests on the memories of the previous games.",
        ),
      },
    ],
    trivia: [
      L("Eddie Carroll, voix officielle de Jiminy pendant près de quarante ans, le double dans les premiers jeux ; Phil Snyder lui succède après 2010.", "Eddie Carroll, Jiminy's official voice for almost forty years, plays him in the early games; Phil Snyder takes over after 2010."),
      L("Re:coded est le seul jeu de la saga qui se déroule entièrement à l'intérieur d'un objet appartenant à un personnage : le journal de Jiminy.", "Re:coded is the only game in the saga set entirely inside an object belonging to a character: Jiminy's journal."),
      L("Le monde de Pinocchio, d'où vient Jiminy, n'est visitable qu'à travers Monstro dans Kingdom Hearts et sous forme de Monde Endormi dans Dream Drop Distance.", "Pinocchio's world, where Jiminy comes from, can only be visited through Monstro in Kingdom Hearts and as a Sleeping World in Dream Drop Distance."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Jiminy Criquet", url: "https://kingdomhearts.fandom.com/wiki/Jiminy_Cricket" },
    ],
  },

  // ─────────────────────────── Merlin ───────────────────────────
  "merlin": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Merlin est l'enchanteur de Merlin l'Enchanteur (1963), adaptation du roman de T. H. White dans laquelle le vieux magicien distrait, accompagné de son hibou Archimède, fait l'éducation du jeune Arthur. Barbe interminable, robe bleue, lunettes et valise enchantée qui range toute sa maison : le film en fait un sage bougon, capable de voyager dans le temps et de se transformer en écureuil ou en poisson.\n\nKingdom Hearts conserve ce Merlin étourdi mais formidablement puissant. Installé à la Ville de Traverse puis au Jardin Radieux, il enseigne la magie à Sora, garde le livre de Winnie l'Ourson qui ouvre la Forêt des Rêves Bleus, et participe au Comité de Restauration de Hollow Bastion. Sa querelle permanente avec Cid, qui oppose magie et technologie, est l'un des gags récurrents de la série. Dans Kingdom Hearts III, il est chargé par Yen Sid d'entraîner Kairi et Lea dans un lieu hors du temps.",
          "Merlin is the wizard of The Sword in the Stone (1963), an adaptation of T. H. White's novel in which the absent-minded old magician, accompanied by his owl Archimedes, educates the young Arthur. Endless beard, blue robe, glasses and an enchanted suitcase that packs his whole house: the film makes him a grumpy sage able to travel through time and turn into a squirrel or a fish.\n\nKingdom Hearts keeps that scatterbrained yet formidably powerful Merlin. Settled in Traverse Town and later Radiant Garden, he teaches Sora magic, keeps the Winnie the Pooh book that opens the Hundred Acre Wood, and sits on the Hollow Bastion Restoration Committee. His running feud with Cid, pitting magic against technology, is one of the series' recurring gags. In Kingdom Hearts III, Yen Sid tasks him with training Kairi and Lea in a place outside time.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dix ans avant le premier jeu, Merlin habite déjà le Jardin Radieux. Terra, Ventus et Aqua le croisent chacun devant sa maison, où il vient de laisser tomber un livre étrange : celui de Winnie l'Ourson. Merlin explique qu'il ne se souvient plus d'où vient ce livre, mais que quiconque le lit peut entrer dans le monde qu'il contient.\n\nLes trois porteurs peuvent ainsi accéder aux mini-jeux de la Forêt des Rêves Bleus. Merlin, lui, s'apprête à quitter le Jardin Radieux : le jeu établit qu'il transportera le livre avec lui jusqu'à la Ville de Traverse après la chute du monde, ce qui explique sa présence dans le premier Kingdom Hearts.",
          "Ten years before the first game, Merlin already lives in Radiant Garden. Terra, Ventus and Aqua each meet him outside his house, where he has just dropped a strange book: that of Winnie the Pooh. Merlin explains that he no longer remembers where the book came from, but that anyone who reads it can enter the world it contains.\n\nThe three wielders can thus access the Hundred Acre Wood minigames. Merlin, for his part, is preparing to leave Radiant Garden: the game establishes that he carries the book with him to Traverse Town after the world's fall, which explains his presence in the first Kingdom Hearts.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "À la Ville de Traverse, Merlin vit dans une maison isolée au fond d'un canal, accessible par des rochers mouvants. Sur la recommandation de Léon, Sora lui rend visite : le magicien lui propose d'exercer sa magie sur ses meubles animés et héberge la Marraine la bonne fée, qui transforme les gemmes d'invocation en alliés.\n\nMerlin confie aussi à Sora le livre abîmé de Winnie l'Ourson, que Cid lui a livré : au fur et à mesure que Sora retrouve les pages perdues dans les mondes, la Forêt des Rêves Bleus se reconstitue. Enfin, il remet à Sora des sorts améliorés, dont Foudre, en récompense de ses progrès. Il représente dans ce premier jeu le mentor magique, pendant du mentor guerrier qu'est Léon.",
          "In Traverse Town, Merlin lives in an isolated house at the end of a waterway, reached across moving stones. On Leon's advice, Sora visits him: the wizard offers to let him practise magic on his animated furniture and hosts the Fairy Godmother, who turns summon gems into allies.\n\nMerlin also entrusts Sora with the damaged Winnie the Pooh book that Cid delivered to him: as Sora recovers the pages lost across the worlds, the Hundred Acre Wood is pieced back together. Finally, he gives Sora upgraded spells, including Thunder, as a reward for his progress. In this first game he embodies the magical mentor, the counterpart of the warrior mentor that is Leon.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "De retour à Hollow Bastion, Merlin siège au Comité de Restauration avec Léon, Yuffie, Aerith et Cid, qu'il ne cesse de houspiller pour son recours à l'informatique. C'est chez lui que Sora retrouve le comité et reçoit le sort Glacier, et c'est encore lui qui a conçu, avec Cid, le système de défense du bourg contre les Sans-cœur.\n\nMerlin intervient aussi au Château Disney : il ouvre une porte magique vers le Fleuve Intemporel pour permettre à Sora de sauver la Pierre Angulaire de Lumière. Il confie une nouvelle fois à Sora le livre de Winnie l'Ourson, que les Sans-cœur abîment, forçant Sora à reconstituer les souvenirs de l'ourson. Il achève l'épisode en soutenant le comité pendant la reconstruction du Jardin Radieux.",
          "Back in Hollow Bastion, Merlin sits on the Restoration Committee with Leon, Yuffie, Aerith and Cid, whom he keeps scolding for relying on computers. It is at his house that Sora meets the committee and receives the Blizzard spell, and it is he who designed, with Cid, the town's defence system against the Heartless.\n\nMerlin also steps in at Disney Castle: he opens a magic door to the Timeless River so that Sora can save the Cornerstone of Light. He once more entrusts Sora with the Winnie the Pooh book, which the Heartless damage, forcing Sora to piece Pooh's memories back together. He ends the game supporting the committee during the rebuilding of Radiant Garden.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Yen Sid confie à Merlin l'entraînement de Kairi et Lea, deux nouveaux porteurs qui n'ont que quelques mois pour se préparer. Le magicien les installe dans un lieu qu'il a créé, où le temps s'écoule différemment, afin de leur offrir des années d'exercice en quelques semaines. Kairi y écrit les lettres qu'elle adresse à Sora.\n\nMerlin s'établit aussi à la Cité du Crépuscule, où Sora le retrouve avec le livre de Winnie l'Ourson, ouvrant une dernière fois la Forêt des Rêves Bleus. Sa maison de la Cité du Crépuscule sert de point de ralliement, et c'est là que Kairi et Lea reviennent entre deux séances d'entraînement. Après la bataille, Merlin figure parmi ceux qui se réjouissent du retour des disparus.",
          "Yen Sid entrusts Merlin with training Kairi and Lea, two new wielders who have only a few months to prepare. The wizard settles them in a place he created, where time flows differently, so as to give them years of practice in a few weeks. It is there that Kairi writes her letters to Sora.\n\nMerlin also sets up in Twilight Town, where Sora finds him with the Winnie the Pooh book, opening the Hundred Acre Wood one last time. His Twilight Town house serves as a rallying point, and it is there that Kairi and Lea return between training sessions. After the battle, Merlin is among those rejoicing at the return of the lost.",
        ),
      },
    ],
    trivia: [
      L("Jeff Bennett le double en anglais dans tous les jeux ; sa voix japonaise est celle de Kinpei Azusa jusqu'à Kingdom Hearts II.", "Jeff Bennett voices him in English in every game; his Japanese voice is Kinpei Azusa's up to Kingdom Hearts II."),
      L("Merlin est l'un des seuls personnages Disney à apparaître dans un monde original de la saga plutôt que dans celui de son film.", "Merlin is one of the only Disney characters to appear in an original world of the saga rather than in that of his own film."),
      L("Le monde de Merlin l'Enchanteur n'a jamais été adapté dans Kingdom Hearts ; seul le magicien a été retenu.", "The world of The Sword in the Stone has never been adapted in Kingdom Hearts; only the wizard was kept."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Merlin", url: "https://kingdomhearts.fandom.com/wiki/Merlin" },
    ],
  },
  // ─────────────────────────── Léon ───────────────────────────
  "leon": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Squall Leonhart est le héros de Final Fantasy VIII (1999), un jeune mercenaire du Garden de Balamb, taciturne, armé d'une gunblade et marqué au visage par une cicatrice que lui a laissée son rival Seifer. Kingdom Hearts reprend ce personnage en l'assagissant : il porte désormais une veste courte à col de fourrure, plusieurs ceintures et le pendentif Griever, mais il a vieilli et gagné en calme.\n\nDans la saga, Squall a pris le nom de Léon après la destruction de son monde natal, le Jardin Radieux, par les Sans-cœur : il s'estime coupable de n'avoir pas su le défendre et refuse de porter son ancien nom tant qu'il ne l'aura pas reconquis. Réfugié à la Ville de Traverse avec Yuffie, Aerith et Cid, il est le premier adulte à expliquer à Sora ce que sont la Keyblade et les Sans-cœur. Mentor bourru puis chef du Comité de Restauration, il incarne le personnage Final Fantasy le plus intégré à l'intrigue.",
          "Squall Leonhart is the hero of Final Fantasy VIII (1999), a young mercenary of Balamb Garden, taciturn, armed with a gunblade and scarred across the face by his rival Seifer. Kingdom Hearts reworks the character into a more settled man: he now wears a short fur-collared jacket, several belts and the Griever pendant, but he has aged and grown calmer.\n\nIn the series, Squall took the name Leon after his home world, Radiant Garden, was destroyed by the Heartless: he blames himself for failing to defend it and refuses his old name until he has reclaimed it. Sheltering in Traverse Town with Yuffie, Aerith and Cid, he is the first adult to explain to Sora what the Keyblade and the Heartless are. A gruff mentor and later head of the Restoration Committee, he is the Final Fantasy character most woven into the plot.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Léon accueille Sora à la Ville de Traverse d'une manière peu amicale : pour vérifier la valeur du porteur, il l'affronte dans le quartier commerçant et le met hors de combat. Une fois Sora réveillé dans l'hôtel, il lui explique avec Yuffie que la Keyblade attire les Sans-cœur, que ces créatures chassent les cœurs et qu'un certain Ansem a consigné leurs secrets dans des rapports dispersés.\n\nIl guide ensuite Sora vers Cid et Merlin, puis se bat à ses côtés contre le Gardien de l'Armure. Léon rejoint ensuite la Forteresse Oubliée, son monde natal enfin retrouvé, où il s'installe dans la bibliothèque avec Aerith et Yuffie et encourage Sora avant le Bout du Monde. Au Colisée, il forme avec Yuffie puis avec Cloud une équipe redoutable dans la Coupe Hadès, où le joueur peut le défier.",
          "Leon greets Sora in Traverse Town in an unfriendly way: to test the wielder's worth, he fights him in the shopping district and knocks him out. Once Sora wakes in the hotel, he explains with Yuffie that the Keyblade draws the Heartless, that those creatures hunt hearts and that a certain Ansem recorded their secrets in scattered reports.\n\nHe then directs Sora to Cid and Merlin, and fights beside him against the Guard Armor. Leon then moves to Hollow Bastion, his home world finally found again, where he settles in the library with Aerith and Yuffie and encourages Sora before the End of the World. At the Coliseum he forms with Yuffie and later Cloud a formidable team in the Hades Cup, where the player can challenge him.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Au premier étage du Manoir Oblivion, Sora traverse une Ville de Traverse née de ses souvenirs. Il y retrouve un Léon qui ne le reconnaît pas, puisqu'il n'est qu'une projection, mais qui sent pourtant qu'il devrait le connaître. Cette contradiction est la première indication que le château manipule la mémoire.\n\nCe Léon de souvenir apprend à Sora les règles des cartes de combat, puis l'aide à vaincre le Gardien de l'Armure. Il reste à l'écart du reste de l'intrigue, mais son attitude, méfiante d'abord puis protectrice, reproduit fidèlement celle du vrai Léon, ce qui rappelle que les souvenirs de Sora, même déformés, conservent l'essentiel de ses liens.",
          "On the first floor of Castle Oblivion, Sora walks through a Traverse Town born from his memories. He meets a Leon who does not recognise him, being only a projection, yet senses he ought to know him. That contradiction is the first sign that the castle tampers with memory.\n\nThis memory Leon teaches Sora the rules of battle cards, then helps him defeat the Guard Armor. He stays outside the rest of the plot, but his attitude, wary at first and then protective, faithfully mirrors the real Leon's, a reminder that Sora's memories, however distorted, retain the essence of his bonds.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Un an plus tard, Léon a regagné Hollow Bastion et fondé le Comité de Restauration avec Yuffie, Aerith, Cid et Merlin. Il retrouve Sora dans le bourg et le charge d'affronter les Sans-cœur qui infestent encore la ville, avant de le conduire au château, dans l'ancien bureau d'Ansem le Sage, où il tente de percer les secrets de l'ordinateur.\n\nAvec Sora, il découvre l'existence de Tron et de l'Espace Paranoïaque, puis participe à la bataille des Mille Sans-cœur, affrontant les créatures aux côtés de Cloud, Yuffie et Tifa. Il reste ensuite au Jardin Radieux, redevenu ainsi nommé, pour en achever la reconstruction. Dans la Coupe Paradoxe d'Hadès, il forme une équipe de quatre avec Cloud, Yuffie et Tifa qui constitue l'un des combats les plus difficiles du Colisée.",
          "A year later, Leon has returned to Hollow Bastion and founded the Restoration Committee with Yuffie, Aerith, Cid and Merlin. He meets Sora in the borough and asks him to deal with the Heartless still infesting the town, before leading him to the castle, into the former study of Ansem the Wise, where he is trying to crack the computer's secrets.\n\nWith Sora he discovers Tron and Space Paranoids, then takes part in the Battle of 1000 Heartless, fighting the creatures alongside Cloud, Yuffie and Tifa. He then remains in Radiant Garden, as it is once again called, to finish the rebuilding. In the Hades Paradox Cup he forms a team of four with Cloud, Yuffie and Tifa, one of the Coliseum's hardest fights.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Absent du jeu de base, Léon revient dans l'épisode Limitcut de Re Mind. Un an après la bataille du Nécropole des Keyblades, Riku, Mickey et les apprentis d'Ansem cherchent Sora ; on retrouve Léon au Jardin Radieux, en compagnie d'Aerith et de Yuffie, dans le bureau d'Ansem où Ienzo analyse les données.\n\nSa présence, brève, confirme que le Comité de Restauration a mené sa tâche à bien et que le Jardin Radieux est redevenu une cité habitée. C'est depuis cet ordinateur que sont lancés les treize combats de données contre l'Organisation, sous le regard des survivants de la première aventure.",
          "Absent from the base game, Leon returns in the Limitcut episode of Re Mind. A year after the battle at the Keyblade Graveyard, Riku, Mickey and Ansem's apprentices are searching for Sora; Leon is found in Radiant Garden with Aerith and Yuffie, in Ansem's study where Ienzo analyses the data.\n\nHis brief presence confirms that the Restoration Committee has completed its task and that Radiant Garden is once again a living city. It is from that computer that the thirteen data battles against the Organization are launched, watched by the survivors of the first adventure.",
        ),
      },
    ],
    trivia: [
      L("David Boreanaz le double dans le premier Kingdom Hearts ; Doug Erholtz lui succède dès Kingdom Hearts II. En japonais, Hideo Ishikawa reprend le rôle qu'il tenait dans Final Fantasy VIII.", "David Boreanaz voices him in the first Kingdom Hearts; Doug Erholtz takes over from Kingdom Hearts II. In Japanese, Hideo Ishikawa reprises the role he held in Final Fantasy VIII."),
      L("Le pendentif Griever qu'il porte et l'aile sur sa veste sont directement repris de son apparence dans Final Fantasy VIII.", "The Griever pendant he wears and the wing on his jacket are lifted straight from his appearance in Final Fantasy VIII."),
      L("Léon est le premier boss humain de la saga : sa défaite lors du duel de la Ville de Traverse fait avancer l'histoire.", "Leon is the saga's first human boss: losing the duel in Traverse Town still advances the story."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Leon", url: "https://kingdomhearts.fandom.com/wiki/Leon" },
    ],
  },

  // ─────────────────────────── Cloud Strife ───────────────────────────
  "cloud": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Cloud Strife est le protagoniste de Final Fantasy VII (1997), ancien membre du SOLDAT reconverti en mercenaire, hanté par Sephiroth et par un passé qu'il a reconstruit de toutes pièces. Sa chevelure blonde en pointes et son énorme Épée Buster en ont fait l'un des personnages les plus célèbres du jeu vidéo.\n\nKingdom Hearts propose une version hybride du personnage : à son costume classique, Tetsuya Nomura ajoute une cape rouge déchirée et un gantelet doré empruntés à Vincent Valentine, une aile noire évoquant Sephiroth, et une Épée Buster enveloppée de bandages. Cloud y est un homme rongé par ses ténèbres, qui traverse les mondes à la recherche de Sephiroth, ombre dont il ne parvient pas à se défaire. Sa quête, parallèle à celle de Sora, illustre le thème central de la saga : la lumière que l'on trouve auprès des autres. Dans Kingdom Hearts II, son apparence reprend celle d'Advent Children.",
          "Cloud Strife is the protagonist of Final Fantasy VII (1997), a former SOLDIER turned mercenary, haunted by Sephiroth and by a past he has rebuilt from scratch. His spiky blond hair and enormous Buster Sword made him one of the most famous characters in video games.\n\nKingdom Hearts offers a hybrid version of the character: to his classic outfit, Tetsuya Nomura adds a torn red cape and a golden gauntlet borrowed from Vincent Valentine, a black wing evoking Sephiroth, and a Buster Sword wrapped in bandages. Here Cloud is a man consumed by his darkness, travelling the worlds in search of Sephiroth, a shadow he cannot shake off. His quest, parallel to Sora's, illustrates the saga's central theme: the light one finds in others. In Kingdom Hearts II, his look follows that of Advent Children.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Au Colisée de l'Olympe, Cloud a passé un marché avec Hadès : le dieu des Enfers lui promet de l'aider à retrouver quelqu'un s'il élimine Hercule au cours des jeux. Sora le rencontre dans les épreuves préliminaires, où Cloud, engagé par Hadès, l'affronte et lui apprend la technique Lame Sonique une fois vaincu.\n\nQuand Hadès, mécontent, lâche Cerbère sur le Colisée, le monstre écrase Cloud, qu'Hercule sauve de justesse. Cloud confie ensuite à Sora qu'il cherche sa lumière, sans dire à qui il pense. Il revient dans la Coupe Hadès en tandem avec Léon, et, dans Final Mix, on le voit affronter Sephiroth après la victoire de Sora contre l'ange à une aile, avant que les deux combattants ne disparaissent.",
          "At Olympus Coliseum, Cloud has struck a deal with Hades: the lord of the Underworld promises to help him find someone if he eliminates Hercules during the games. Sora meets him in the preliminaries, where Cloud, hired by Hades, fights him and teaches him Sonic Blade once defeated.\n\nWhen a displeased Hades unleashes Cerberus on the Coliseum, the beast crushes Cloud, whom Hercules barely saves. Cloud then tells Sora he is looking for his light, without saying whom he means. He returns in the Hades Cup paired with Leon and, in Final Mix, is seen facing Sephiroth after Sora's victory over the one-winged angel, before both fighters vanish.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sora retrouve Cloud à Hollow Bastion, dans les ruelles du bourg. Cloud lui apprend qu'il traque Sephiroth, qu'il décrit comme l'incarnation de ses propres ténèbres, et qu'il ne pourra pas revenir tant qu'il ne l'aura pas vaincu. Tifa, qui le cherche de son côté, représente la lumière qu'il refuse de voir.\n\nCloud participe à la bataille des Mille Sans-cœur avec Léon, Yuffie et Tifa, et croise brièvement Sephiroth au milieu du chaos. Après la victoire de Sora contre Sephiroth aux Abîmes Sombres, Cloud surgit pour livrer son propre duel ; Tifa le rejoint, et tous trois disparaissent dans un éclat de lumière, sans que le jeu tranche l'issue. Cloud figure aussi dans la Coupe Paradoxe d'Hadès, où il combat Sora en équipe.",
          "Sora finds Cloud in Hollow Bastion, in the alleys of the borough. Cloud tells him he is tracking Sephiroth, whom he describes as the embodiment of his own darkness, and that he cannot come back until he has beaten him. Tifa, searching for him on her side, stands for the light he refuses to see.\n\nCloud takes part in the Battle of 1000 Heartless with Leon, Yuffie and Tifa, and briefly crosses paths with Sephiroth amid the chaos. After Sora's victory over Sephiroth in the Dark Depths, Cloud appears to fight his own duel; Tifa joins him, and all three vanish in a flash of light, the outcome left open. Cloud also features in the Hades Paradox Cup, where he fights Sora as part of a team.",
        ),
      },
    ],
    trivia: [
      L("Steve Burton, voix anglaise de Cloud depuis Kingdom Hearts, a conservé le rôle dans Advent Children et les jeux Final Fantasy VII suivants ; Takahiro Sakurai le double en japonais.", "Steve Burton, Cloud's English voice since Kingdom Hearts, kept the role in Advent Children and later Final Fantasy VII games; Takahiro Sakurai voices him in Japanese."),
      L("Sa cape rouge et sa main gantée de doré dans le premier jeu sont des emprunts à Vincent Valentine, autre personnage de Final Fantasy VII.", "His red cape and golden-gauntleted hand in the first game are borrowed from Vincent Valentine, another Final Fantasy VII character."),
      L("Dans Kingdom Hearts II, Cloud porte la tenue d'Advent Children, sorti un an plus tôt ; l'aile noire a disparu.", "In Kingdom Hearts II, Cloud wears his Advent Children outfit, released a year earlier; the black wing is gone."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Cloud", url: "https://kingdomhearts.fandom.com/wiki/Cloud" },
    ],
  },

  // ─────────────────────────── Sephiroth ───────────────────────────
  "sephiroth": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Sephiroth est l'antagoniste de Final Fantasy VII (1997), un ancien héros du SOLDAT qui, en découvrant ses origines, sombre dans la folie et cherche à devenir un dieu. Son long manteau noir, sa chevelure argentée, son katana démesuré Masamune et son thème musical One-Winged Angel en ont fait l'un des méchants les plus célèbres du jeu vidéo.\n\nKingdom Hearts le présente sans explication : il est simplement l'ombre qui poursuit Cloud, la manifestation de ses ténèbres. Muni d'une seule aile noire, il apparaît comme un boss secret dans le premier jeu, puis dans Kingdom Hearts II, où il fait partie du décor de Hollow Bastion sans jamais interagir avec l'intrigue principale. Ces affrontements comptent parmi les plus difficiles de la saga et ont établi la tradition des combats optionnels démesurés. Sephiroth n'a pas de lien avec Xehanort ni avec les Sans-cœur : il est un défi, plus qu'un personnage.",
          "Sephiroth is the antagonist of Final Fantasy VII (1997), a former SOLDIER hero who, on discovering his origins, descends into madness and seeks to become a god. His long black coat, silver hair, oversized katana Masamune and musical theme One-Winged Angel made him one of video games' most famous villains.\n\nKingdom Hearts presents him without explanation: he is simply the shadow pursuing Cloud, the manifestation of his darkness. Bearing a single black wing, he appears as a secret boss in the first game, then in Kingdom Hearts II, where he is part of the Hollow Bastion scenery without ever touching the main plot. Those battles rank among the saga's hardest and established the tradition of outsized optional fights. Sephiroth has no link to Xehanort or the Heartless: he is a challenge more than a character.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Sephiroth n'est pas présent dans la version japonaise originale du premier Kingdom Hearts : il est ajouté dans les versions occidentales, puis dans Final Mix, comme adversaire du Match Platine, un tournoi à un seul combat au Colisée de l'Olympe. Il attend Sora seul dans l'arène, sans un mot, et déploie des techniques dévastatrices : une attaque qui réduit les PV et les PM de Sora à un, et des assauts de Masamune à longue portée.\n\nDans Final Mix, une scène s'ajoute après sa défaite : Cloud entre dans l'arène, les deux hommes échangent quelques mots sur les ténèbres et croisent le fer, puis s'élancent hors de l'écran, laissant Sora témoin de leur duel inachevé. La victoire contre Sephiroth n'a aucune incidence sur l'histoire, mais elle est devenue un rite de passage.",
          "Sephiroth is not in the original Japanese release of the first Kingdom Hearts: he was added in the Western versions, then in Final Mix, as the opponent of the Platinum Match, a single-battle tournament at Olympus Coliseum. He waits for Sora alone in the arena, wordlessly, and unleashes devastating techniques: Heartless Angel, which drops HP and MP to one, and long-range Masamune assaults.\n\nFinal Mix adds a scene after his defeat: Cloud enters the arena, the two exchange a few words about darkness and cross blades, then dash off screen, leaving Sora to witness their unfinished duel. Beating Sephiroth has no effect on the story, but it became a rite of passage.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sephiroth apparaît pour la première fois dans l'histoire principale pendant la bataille des Mille Sans-cœur : au milieu du chaos de Hollow Bastion, il se dresse devant Sora et demande où se trouve Cloud, avant de disparaître. Il se poste ensuite aux Abîmes Sombres, tout au fond du ravin, où Sora peut le défier après avoir terminé l'Espace Paranoïaque.\n\nLe combat, réputé comme l'un des plus durs du jeu, mêle son attaque qui vide les PV, des pluies de météores et des enchaînements de Masamune. Une fois vaincu, Sephiroth demande à Sora d'aller chercher Cloud ; celui-ci arrive, Tifa aussi, et Cloud s'élance vers son ennemi. Tous deux disparaissent dans une lumière aveuglante. Sora reçoit en récompense la Keyblade Fenrir, dont le dessin rappelle l'épée de Cloud.",
          "Sephiroth first appears in the main story during the Battle of 1000 Heartless: amid the chaos of Hollow Bastion he stands before Sora and asks where Cloud is, then vanishes. He then waits in the Dark Depths, at the very bottom of the ravine, where Sora can challenge him after completing Space Paranoids.\n\nThe fight, known as one of the game's hardest, combines his HP-draining Heartless Angel, meteor showers and Masamune combos. Once beaten, Sephiroth asks Sora to fetch Cloud; he arrives, Tifa too, and Cloud charges at his enemy. Both vanish in a blinding light. Sora is rewarded with the Fenrir Keyblade, whose design recalls Cloud's sword.",
        ),
      },
    ],
    trivia: [
      L("Lance Bass, chanteur du groupe NSYNC, le double dans le premier Kingdom Hearts ; George Newbern reprend le rôle à partir de Kingdom Hearts II. Toshiyuki Morikawa est sa voix japonaise.", "Lance Bass, singer of the band NSYNC, voices him in the first Kingdom Hearts; George Newbern takes over from Kingdom Hearts II. Toshiyuki Morikawa is his Japanese voice."),
      L("Son thème, One-Winged Angel, est repris tel quel de Final Fantasy VII lors des deux combats.", "His theme, One-Winged Angel, is reused straight from Final Fantasy VII in both fights."),
      L("Sephiroth fut ajouté à la version américaine du premier jeu, avec d'autres nouveautés, avant que Final Mix ne les rapatrie au Japon.", "Sephiroth was added to the American version of the first game, along with other new content, before Final Mix brought them back to Japan."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Sephiroth", url: "https://kingdomhearts.fandom.com/wiki/Sephiroth" },
    ],
  },

  // ─────────────────────────── Aerith Gainsborough ───────────────────────────
  "aerith": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Aerith Gainsborough est la marchande de fleurs des taudis de Midgar dans Final Fantasy VII (1997), dernière représentante du peuple des Cetra, et l'un des personnages les plus aimés de la série pour sa mort restée célèbre. Sa robe rose, sa longue tresse nouée d'un ruban et son bâton en font une figure de douceur au milieu d'un monde industriel.\n\nKingdom Hearts la présente comme une réfugiée du Jardin Radieux installée à la Ville de Traverse avec Léon, Yuffie et Cid. Elle n'a rien de la fleuriste des taudis : elle est ici l'érudite calme du groupe, celle qui explique à Sora l'histoire d'Ansem et des Sans-cœur. Dans Kingdom Hearts II, elle devient l'âme du Comité de Restauration de Hollow Bastion et son apparence reprend celle d'Advent Children. Le jeu la place dans un rôle de soutien et de conseil, sans jamais faire référence à son destin dans Final Fantasy VII.",
          "Aerith Gainsborough is the flower seller of the Midgar slums in Final Fantasy VII (1997), the last of the Cetra people, and one of the series' most beloved characters for her famous death. Her pink dress, long braid tied with a ribbon and staff make her a figure of gentleness in an industrial world.\n\nKingdom Hearts presents her as a refugee from Radiant Garden living in Traverse Town with Leon, Yuffie and Cid. She is nothing like the slum flower girl: here she is the group's calm scholar, the one who explains to Sora the history of Ansem and the Heartless. In Kingdom Hearts II she becomes the soul of the Hollow Bastion Restoration Committee and her look follows Advent Children. The game keeps her in a supporting and advisory role, never referring to her fate in Final Fantasy VII.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "À la Ville de Traverse, Aerith explique à Donald et Dingo, pendant que Léon et Yuffie s'occupent de Sora, ce que sont les Sans-cœur, comment ils ont détruit son monde, et qui était Ansem, le sage qui les étudiait. C'est elle qui évoque la première les rapports d'Ansem, que Sora rassemblera ensuite à travers les mondes.\n\nElle reste à Traverse pendant la majeure partie du voyage, accueillant le trio dans la maison de Merlin ou dans l'hôtel. Après la libération de la Forteresse Oubliée, elle rejoint la bibliothèque du château, où elle aide Sora à retrouver les derniers rapports d'Ansem. Elle représente, dans ce premier jeu, la mémoire d'un monde perdu et l'espoir tranquille de le retrouver.",
          "In Traverse Town, Aerith explains to Donald and Goofy, while Leon and Yuffie deal with Sora, what the Heartless are, how they destroyed her world, and who Ansem was, the sage who studied them. She is the first to mention Ansem's reports, which Sora then gathers across the worlds.\n\nShe stays in Traverse for most of the journey, welcoming the trio in Merlin's house or in the hotel. After Hollow Bastion is freed, she joins the castle library, where she helps Sora recover the last of Ansem's reports. In this first game she represents the memory of a lost world and the quiet hope of regaining it.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "De retour à Hollow Bastion, Aerith siège au Comité de Restauration, qu'elle anime avec douceur entre les disputes de Merlin et de Cid. Elle offre à Sora la carte de membre du comité et, plus tard, l'attend aux abords du château pour l'informer des mouvements des Sans-cœur.\n\nElle est aussi celle qui s'inquiète de Cloud, dont elle devine le tourment : lorsqu'il évoque Sephiroth, Aerith lui assure qu'il aura toujours un endroit où revenir. Elle ne participe pas directement à la bataille des Mille Sans-cœur, préférant veiller sur les habitants. Dans Re Mind, elle réapparaît brièvement au Jardin Radieux, aux côtés de Léon et Yuffie, un an après Kingdom Hearts III.",
          "Back in Hollow Bastion, Aerith sits on the Restoration Committee, which she gently keeps together between Merlin's and Cid's quarrels. She gives Sora the committee's membership card and later waits near the castle to inform him of the Heartless's movements.\n\nShe is also the one who worries about Cloud, whose torment she senses: when he mentions Sephiroth, Aerith assures him he will always have a place to come back to. She does not take a direct part in the Battle of 1000 Heartless, preferring to watch over the townsfolk. In Re Mind she briefly reappears in Radiant Garden beside Leon and Yuffie, a year after Kingdom Hearts III.",
        ),
      },
    ],
    trivia: [
      L("Mandy Moore la double dans le premier jeu, Mena Suvari dans Kingdom Hearts II, puis Andrea Bowen à partir de Re:Chain of Memories ; Maaya Sakamoto est sa voix japonaise.", "Mandy Moore voices her in the first game, Mena Suvari in Kingdom Hearts II, then Andrea Bowen from Re:Chain of Memories onward; Maaya Sakamoto is her Japanese voice."),
      L("Les versions occidentales du premier jeu l'appellent « Aerith », alors que Final Fantasy VII l'avait fait connaître sous le nom d'« Aeris » en Occident.", "The Western versions of the first game call her “Aerith”, whereas Final Fantasy VII had introduced her as “Aeris” in the West."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Aerith", url: "https://kingdomhearts.fandom.com/wiki/Aerith" },
    ],
  },

  // ─────────────────────────── Yuffie Kisaragi ───────────────────────────
  "yuffie": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Yuffie Kisaragi est la jeune ninja de Wutai dans Final Fantasy VII (1997), un personnage optionnel espiègle, voleuse de matérias et adepte du shuriken géant. Son énergie débordante et son sens de la provocation en font l'un des membres les plus comiques de l'équipe de Cloud.\n\nKingdom Hearts la présente comme une adolescente réfugiée du Jardin Radieux, qui vit à la Ville de Traverse avec Léon, Aerith et Cid. Elle conserve son tempérament : elle se présente comme la « grande ninja Yuffie », taquine Léon en l'appelant Squall et prend Sora sous son aile avec une familiarité immédiate. Elle combat avec un shuriken à quatre branches et se révèle redoutable au Colisée de l'Olympe. Dans Kingdom Hearts II, son apparence s'inspire d'Advent Children, et elle fait partie des membres les plus actifs du Comité de Restauration de Hollow Bastion.",
          "Yuffie Kisaragi is the young ninja of Wutai in Final Fantasy VII (1997), an optional mischievous character, materia thief and wielder of a giant shuriken. Her boundless energy and knack for provocation make her one of the funniest members of Cloud's party.\n\nKingdom Hearts presents her as a teenage refugee from Radiant Garden living in Traverse Town with Leon, Aerith and Cid. She keeps her temperament: she introduces herself as “the great ninja Yuffie”, teases Leon by calling him Squall and takes Sora under her wing with instant familiarity. She fights with a four-pointed shuriken and proves formidable at Olympus Coliseum. In Kingdom Hearts II her look draws on Advent Children, and she is one of the most active members of the Hollow Bastion Restoration Committee.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Yuffie est présente lorsque Sora se réveille dans l'hôtel de la Ville de Traverse après son duel contre Léon. Sora la prend un instant pour Kairi, ce qui l'amuse. Avec Léon, elle lui explique la nature des Sans-cœur et l'origine de la Keyblade, puis l'aide à repousser l'attaque de la troisième zone de la ville.\n\nElle reste ensuite à Traverse, où elle renseigne Sora sur les événements et l'encourage à progresser. Au Colisée de l'Olympe, elle apparaît d'abord seule dans l'une des premières coupes, puis en duo avec Léon dans la Coupe Hadès, où ses shurikens à distance complètent les attaques de la gunblade. Elle rejoint enfin la bibliothèque de la Forteresse Oubliée après la défaite de Maléfique.",
          "Yuffie is there when Sora wakes in the Traverse Town hotel after his duel with Leon. Sora briefly mistakes her for Kairi, which amuses her. With Leon she explains the nature of the Heartless and the origin of the Keyblade, then helps him repel the attack on the town's third district.\n\nShe then stays in Traverse, keeping Sora informed of events and urging him on. At Olympus Coliseum she first appears alone in one of the early cups, then paired with Leon in the Hades Cup, where her ranged shurikens complement the gunblade's strikes. She finally joins the Hollow Bastion library after Maleficent's defeat.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Yuffie est la première du comité à retrouver Sora à Hollow Bastion : elle l'accueille du haut d'un mur du bourg, avec la même énergie qu'un an plus tôt, avant de le conduire chez Merlin. Elle patrouille ensuite dans la ville et participe à la bataille des Mille Sans-cœur, où elle est aperçue en pleine action avec Léon, Cloud et Tifa.\n\nAu Colisée de l'Olympe, elle fait partie de la Coupe Paradoxe d'Hadès dans l'équipe formée avec Léon, Cloud et Tifa. Dans Re Mind, elle réapparaît au Jardin Radieux un an après Kingdom Hearts III, toujours aux côtés de Léon et Aerith, dans le bureau d'Ansem le Sage.",
          "Yuffie is the first of the committee to find Sora in Hollow Bastion: she greets him from atop a borough wall with the same energy as a year before, then leads him to Merlin's. She then patrols the town and takes part in the Battle of 1000 Heartless, where she is seen in full action with Leon, Cloud and Tifa.\n\nAt Olympus Coliseum she is part of the Hades Paradox Cup in the team formed with Leon, Cloud and Tifa. In Re Mind she reappears in Radiant Garden a year after Kingdom Hearts III, still beside Leon and Aerith, in the study of Ansem the Wise.",
        ),
      },
    ],
    trivia: [
      L("Christy Carlson Romano la double dans le premier jeu, Mae Whitman à partir de Kingdom Hearts II ; Yumi Kakazu assure la version japonaise.", "Christy Carlson Romano voices her in the first game, Mae Whitman from Kingdom Hearts II; Yumi Kakazu provides the Japanese version."),
      L("Sa tenue du premier Kingdom Hearts s'inspire de celle de Final Fantasy VII, tandis que celle de Kingdom Hearts II reprend Advent Children.", "Her outfit in the first Kingdom Hearts draws on Final Fantasy VII, while that of Kingdom Hearts II follows Advent Children."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Yuffie", url: "https://kingdomhearts.fandom.com/wiki/Yuffie" },
    ],
  },

  // ─────────────────────────── Cid Highwind ───────────────────────────
  "cid": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Cid Highwind est le pilote bourru de Final Fantasy VII (1997), un ingénieur au langage fleuri, la cigarette au bec et la lance à la main, qui rêvait d'aller dans l'espace. Chaque Final Fantasy a son Cid, presque toujours lié aux machines volantes ; celui de Kingdom Hearts est directement inspiré du septième épisode, avec ses lunettes de pilote sur le front et son pantalon bleu.\n\nDans la saga, Cid est un réfugié du Jardin Radieux installé à la Ville de Traverse, où il tient la boutique d'accessoires et se spécialise dans les vaisseaux Gummi. Sa cigarette est remplacée par un cure-dents et son vocabulaire est adouci, mais il garde son franc-parler. Dans Kingdom Hearts II, il devient l'informaticien du Comité de Restauration et le rival de Merlin, dont il rejette la magie au profit de la technologie. Il est la figure de l'ingénieur au grand cœur qui construit ce dont les héros ont besoin.",
          "Cid Highwind is the gruff pilot of Final Fantasy VII (1997), a foul-mouthed engineer with a cigarette in his mouth and a spear in hand who dreamed of going to space. Every Final Fantasy has its Cid, almost always tied to flying machines; the one in Kingdom Hearts is directly inspired by the seventh game, with pilot goggles on his forehead and blue trousers.\n\nIn the saga, Cid is a refugee from Radiant Garden living in Traverse Town, where he runs the accessory shop and specialises in Gummi ships. His cigarette is replaced by a toothpick and his vocabulary is softened, but he keeps his blunt manner. In Kingdom Hearts II he becomes the Restoration Committee's computer expert and Merlin's rival, dismissing magic in favour of technology. He is the big-hearted engineer who builds what the heroes need.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Cid est le premier habitant de la Ville de Traverse que Sora rencontre : il tient la boutique d'accessoires du premier quartier et conseille au garçon, perdu, d'explorer la ville. Une fois le trio formé, il devient l'expert des vaisseaux Gummi, expliquant les blocs, installant le Gummi de navigation et confiant à Sora la livraison du livre de Winnie l'Ourson à Merlin.\n\nIl s'implique ensuite dans la lutte : après la découverte de la serrure de Traverse, il aide Sora à repousser les Sans-cœur, et il continue d'améliorer le vaisseau Gummi tout au long du voyage. Cid est aussi celui qui parle le plus librement du passé : il évoque le Jardin Radieux d'avant la chute et sa haine des Sans-cœur qui l'ont chassé de chez lui.",
          "Cid is the first inhabitant of Traverse Town Sora meets: he runs the accessory shop in the first district and advises the lost boy to explore the town. Once the trio is formed, he becomes the Gummi ship expert, explaining the blocks, installing the Navi-Gummi and entrusting Sora with delivering the Winnie the Pooh book to Merlin.\n\nHe then gets involved in the fight: after Traverse Town's keyhole is found, he helps Sora drive back the Heartless, and he keeps improving the Gummi ship throughout the journey. Cid is also the one who speaks most freely of the past: he recalls Radiant Garden before its fall and his hatred of the Heartless that drove him from his home.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "À Hollow Bastion, Cid a troqué l'atelier Gummi pour l'ordinateur de Merlin, sur lequel il conçoit le système de défense du bourg, les Claymores, en associant sa technique à la magie du sorcier, ce qui ne les empêche pas de se disputer sans cesse. Il siège au Comité de Restauration et coordonne les travaux.\n\nQuand Sora découvre l'ordinateur d'Ansem le Sage et le monde de Tron, Cid prend une importance nouvelle : il écrit le programme qui permet d'anéantir le MCP, l'intelligence hostile de l'Espace Paranoïaque, et le charge dans le système pendant que Sora et Tron combattent. Il reste au Jardin Radieux après la bataille des Mille Sans-cœur, occupé à remettre la ville en état.",
          "In Hollow Bastion, Cid has swapped the Gummi workshop for Merlin's computer, on which he designs the borough's defence system, the Claymores, combining his engineering with the wizard's magic, which does not stop the two from bickering constantly. He sits on the Restoration Committee and coordinates the works.\n\nWhen Sora discovers the computer of Ansem the Wise and Tron's world, Cid gains new importance: he writes the program that wipes out the MCP, the hostile intelligence of Space Paranoids, and loads it into the system while Sora and Tron fight. He stays in Radiant Garden after the Battle of 1000 Heartless, busy repairing the town.",
        ),
      },
    ],
    trivia: [
      L("Chris Edgerly le double en anglais dans tous les jeux ; Kazuyuki Yama assure la version japonaise.", "Chris Edgerly voices him in English in every game; Kazuyuki Yama provides the Japanese version."),
      L("Sa cigarette de Final Fantasy VII a été remplacée par un cure-dents, l'univers Disney interdisant le tabac.", "His Final Fantasy VII cigarette was replaced by a toothpick, tobacco being off-limits in the Disney universe."),
      L("Il est le seul Cid de Final Fantasy à apparaître dans Kingdom Hearts, alors que presque chaque épisode de la série en possède un.", "He is the only Final Fantasy Cid to appear in Kingdom Hearts, although almost every game in the series has one."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Cid", url: "https://kingdomhearts.fandom.com/wiki/Cid" },
    ],
  },

  // ─────────────────────────── Auron ───────────────────────────
  "auron": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Auron est le guerrier légendaire de Final Fantasy X (2001), ancien gardien du grand invocateur Braska, qui accompagne Tidus et Yuna dans leur pèlerinage à travers Spira. Manteau rouge, lunettes noires, katana porté sur l'épaule et jarre de saké à la ceinture : l'homme est un mort qui refuse de partir, un « non-envoyé » resté sur terre pour tenir une promesse.\n\nKingdom Hearts II respecte ce statut : c'est parce qu'Auron est mort qu'Hadès peut le tirer des Enfers de l'Olympe pour en faire un champion à sa solde. Le jeu conserve sa réplique fétiche, « Ceci est mon histoire », et son refus de se laisser dicter son destin. Auron est le seul personnage Final Fantasy jouable en compagnon dans un monde Disney, où sa force et sa stature contrastent avec le style de Sora. Il n'a aucun lien avec le Jardin Radieux ni avec les autres invités de la série.",
          "Auron is the legendary warrior of Final Fantasy X (2001), former guardian of the high summoner Braska, who accompanies Tidus and Yuna on their pilgrimage across Spira. Red coat, dark glasses, katana carried on the shoulder and sake jug at the belt: the man is a dead man who refuses to leave, an “unsent” who stayed to keep a promise.\n\nKingdom Hearts II honours that status: it is because Auron is dead that Hades can pull him out of the Olympus Underworld to make him a champion in his service. The game keeps his signature line, “This is my story”, and his refusal to let anyone dictate his fate. Auron is the only Final Fantasy character playable as a party member in a Disney world, where his strength and stature contrast with Sora's style. He has no connection to Radiant Garden or to the series' other guests.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Hadès invoque Auron depuis les profondeurs des Enfers pour lui proposer un marché : tuer Hercule en échange de sa liberté. Auron refuse net, et c'est à ce moment que Sora, Donald et Dingo surgissent dans la salle du trône du dieu. Le guerrier s'allie au trio pour s'échapper des Enfers, puis accepte de participer aux jeux du Colisée, tout en gardant ses distances.\n\nHadès, décidé à le soumettre, fabrique une statuette liée à l'âme d'Auron et l'utilise pour le contrôler, le forçant à combattre Hercule dans l'Arène des Enfers. Sora s'introduit dans la chambre d'Hadès, récupère la statuette et brise le sort. Libéré, Auron affronte Hadès aux côtés de Sora et Hercule, puis choisit de regagner le repos des morts, sa promesse tenue. Il reste disponible comme allié dans les tournois du Colisée.",
          "Hades summons Auron from the depths of the Underworld to offer him a deal: kill Hercules in exchange for his freedom. Auron flatly refuses, and that is when Sora, Donald and Goofy burst into the god's throne room. The warrior joins the trio to escape the Underworld, then agrees to enter the Coliseum games while keeping his distance.\n\nHades, set on subduing him, crafts a statuette bound to Auron's soul and uses it to control him, forcing him to fight Hercules in the Underdrome. Sora sneaks into Hades's chamber, retrieves the statuette and breaks the spell. Freed, Auron faces Hades beside Sora and Hercules, then chooses to return to the rest of the dead, his promise kept. He remains available as an ally in the Coliseum tournaments.",
        ),
      },
    ],
    trivia: [
      L("Matt McKenzie, voix anglaise d'Auron dans Final Fantasy X, reprend le rôle ; Hideo Ishikawa, sa voix japonaise, double aussi Léon.", "Matt McKenzie, Auron's English voice in Final Fantasy X, reprises the role; Hideo Ishikawa, his Japanese voice, also voices Leon."),
      L("Auron est le seul personnage issu de Final Fantasy X, aux côtés des enfants Tidus, Wakka et Selphie des Îles du Destin.", "Auron is the only character from Final Fantasy X, alongside the Destiny Islands children Tidus, Wakka and Selphie."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Auron", url: "https://kingdomhearts.fandom.com/wiki/Auron" },
    ],
  },

  // ─────────────────────────── Zack Fair ───────────────────────────
  "zack": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Zack Fair est le héros de Crisis Core: Final Fantasy VII (2007), un SOLDAT de première classe enthousiaste dont le destin tragique précède les événements de Final Fantasy VII : ami de Cloud, amoureux d'Aerith, il lègue à Cloud son Épée Buster et ses rêves. Sa bonne humeur et son ambition, « devenir un héros », le distinguent du ténébreux Cloud.\n\nBirth by Sleep le fait apparaître au Colisée de l'Olympe, rajeuni, avant qu'il n'ait rejoint le SOLDAT : c'est un adolescent qui s'entraîne auprès de Phil pour devenir un héros, aux côtés d'un Hercule encore débutant. Sa tenue, ses cheveux noirs en pointes et sa cicatrice sont ceux de Crisis Core, mais sans l'épée. Il est le premier personnage Final Fantasy à apparaître dans un jeu situé avant le premier Kingdom Hearts, et le seul à y côtoyer Terra, Ventus et Aqua.",
          "Zack Fair is the hero of Crisis Core: Final Fantasy VII (2007), an enthusiastic SOLDIER 1st Class whose tragic fate precedes the events of Final Fantasy VII: Cloud's friend, in love with Aerith, he bequeaths Cloud his Buster Sword and his dreams. His good humour and ambition, “to become a hero”, set him apart from the brooding Cloud.\n\nBirth by Sleep brings him to Olympus Coliseum, younger, before he has joined SOLDIER: he is a teenager training under Phil to become a hero, alongside a still-novice Hercules. His outfit, spiky black hair and scar are those of Crisis Core, but without the sword. He is the first Final Fantasy character to appear in a game set before the first Kingdom Hearts, and the only one to meet Terra, Ventus and Aqua there.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Au Colisée de l'Olympe, Zack s'entraîne avec Hercule sous la direction de Phil, qui hésite entre les deux garçons. Terra le rencontre le premier : Hadès, impatient de se débarrasser d'Hercule, offre à Zack un coup de pouce et le plonge dans les ténèbres pour qu'il affronte Terra dans la finale des jeux. Terra le libère en le battant, et Zack, honteux, jure de devenir un héros par ses propres moyens.\n\nVentus le croise ensuite au Colisée, où Zack encourage un Hercule qui doute de lui-même. Aqua, enfin, participe aux jeux et reçoit de Zack une demande maladroite de rendez-vous, qu'elle accepte en riant sans jamais l'honorer. Zack n'a pas d'autre apparition dans la saga, mais sa rencontre avec les trois porteurs fait de lui l'un des rares invités Final Fantasy liés à leur histoire.",
          "At Olympus Coliseum, Zack trains with Hercules under Phil, who hesitates between the two boys. Terra meets him first: Hades, eager to be rid of Hercules, offers Zack a helping hand and plunges him into darkness so that he fights Terra in the games' final. Terra frees him by defeating him, and an ashamed Zack vows to become a hero on his own merits.\n\nVentus then meets him at the Coliseum, where Zack cheers on a self-doubting Hercules. Aqua, finally, enters the games and receives from Zack a clumsy request for a date, which she laughingly accepts without ever honouring it. Zack has no other appearance in the saga, but meeting the three wielders makes him one of the rare Final Fantasy guests tied to their story.",
        ),
      },
    ],
    trivia: [
      L("Rick Gomez, voix de Zack dans Crisis Core, le double en anglais ; Kenichi Suzumura, sa voix japonaise, double aussi Demyx.", "Rick Gomez, Zack's voice in Crisis Core, plays him in English; Kenichi Suzumura, his Japanese voice, also voices Demyx."),
      L("Zack est le seul personnage issu de Crisis Core à apparaître dans la saga, et le seul invité Final Fantasy de Birth by Sleep.", "Zack is the only character from Crisis Core to appear in the saga, and the only Final Fantasy guest in Birth by Sleep."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Zack", url: "https://kingdomhearts.fandom.com/wiki/Zack" },
    ],
  },
  // ─────────────────────────── Marluxia ───────────────────────────
  "marluxia": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Marluxia est le numéro XI de l'Organisation XIII, l'Assassin Sublime, maître des fleurs et porteur d'une immense faux rose, Graceful Dahlia. Ses cheveux roses, ses gestes gracieux et les pétales qui accompagnent chacune de ses attaques contrastent avec sa cruauté : parmi les Similis, il est l'ambitieux, celui qui complote pour renverser Xemnas. Son nom est l'anagramme de Lauriam, augmenté du X rituel de l'Organisation.\n\nLauriam, son humain d'origine, est un porteur de Keyblade de l'Âge des Fées, l'un des nouveaux chefs d'Union choisis pour survivre à la Guerre des Keyblades et le frère de Strelitzia. Cette révélation, faite dans Kingdom Hearts χ et Kingdom Hearts III, fait de Marluxia un personnage bien plus ancien que les autres membres, à l'exception de Luxu. Il conserve, même en Simili, une obsession vague pour une sœur perdue dont il ne retrouve le souvenir qu'à sa seconde mort.",
          "Marluxia is Organization XIII's number XI, the Graceful Assassin, master of flowers and wielder of a huge pink scythe, Graceful Dahlia. His pink hair, elegant gestures and the petals accompanying each attack contrast with his cruelty: among the Nobodies he is the ambitious one, the one plotting to overthrow Xemnas. His name is an anagram of Lauriam with the Organization's ritual X added.\n\nLauriam, his original self, is a Keyblade wielder from the Age of Fairy Tales, one of the new Union leaders chosen to survive the Keyblade War, and Strelitzia's brother. That revelation, made in Kingdom Hearts χ and Kingdom Hearts III, makes Marluxia a far older character than the other members, Luxu excepted. Even as a Nobody he keeps a vague obsession with a lost sister whose memory only returns to him at his second death.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "À Daybreak Town, Lauriam est un porteur de Keyblade choisi par Ava pour rejoindre les Dandelions, le groupe destiné à survivre à la Guerre des Keyblades. Après la guerre, il fait partie des cinq nouveaux chefs d'Union, avec Ephemer, Skuld, Ventus et Brain, chargés de rebâtir le monde à partir du Livre des Prophéties.\n\nMais Lauriam cherche surtout sa sœur Strelitzia, disparue sans laisser de traces avant la guerre. Il finit par apprendre qu'elle a été tuée dans un bâtiment de la ville, et que Ventus, alors possédé par une entité de ténèbres, en est responsable. Sa confrontation avec Ventus, dans les derniers chapitres, tourne à l'affrontement avec les ténèbres elles-mêmes. Kingdom Hearts χ ne dit pas comment Lauriam et Elrena perdent ensuite leur cœur.",
          "In Daybreak Town, Lauriam is a Keyblade wielder chosen by Ava to join the Dandelions, the group meant to survive the Keyblade War. After the war he is one of the five new Union leaders, with Ephemer, Skuld, Ventus and Brain, tasked with rebuilding the world from the Book of Prophecies.\n\nBut Lauriam is above all searching for his sister Strelitzia, who vanished without a trace before the war. He eventually learns she was killed in a building of the town, and that Ventus, then possessed by an entity of darkness, is responsible. His confrontation with Ventus, in the last chapters, turns into a fight against darkness itself. Kingdom Hearts χ does not say how Lauriam and Elrena later lose their hearts.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Xemnas confie à Marluxia la direction du Manoir Oblivion, où Naminé est retenue. Marluxia y voit l'occasion de prendre le pouvoir : en faisant réécrire les souvenirs de Sora par la sorcière, il compte transformer le porteur de Keyblade en pantin dévoué et renverser l'Organisation avec Larxene. Il accueille Sora à l'entrée du château et lui remet les cartes qui feront surgir les mondes de ses souvenirs.\n\nAxel, envoyé pour surveiller le château, découvre la trahison et se retourne contre lui ; Vexen, qui menaçait le plan, est éliminé sur ordre de Marluxia. Lorsque Naminé refuse de briser le cœur de Sora, Marluxia l'affronte lui-même au sommet du château, dissimulé derrière une réplique, puis sur une monture géante. Sora le détruit, mettant fin à la première trahison interne de l'Organisation.",
          "Xemnas puts Marluxia in charge of Castle Oblivion, where Naminé is kept. Marluxia sees a chance to seize power: by having the witch rewrite Sora's memories, he means to turn the Keyblade wielder into a devoted puppet and overthrow the Organization with Larxene. He greets Sora at the castle entrance and hands him the cards that will conjure the worlds of his memories.\n\nAxel, sent to watch the castle, uncovers the treachery and turns on him; Vexen, who threatened the plan, is eliminated on Marluxia's orders. When Naminé refuses to break Sora's heart, Marluxia faces him himself at the top of the castle, hidden behind a replica and then atop a giant construct. Sora destroys him, ending the Organization's first internal betrayal.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Peu après l'arrivée de Roxas dans l'Organisation, Marluxia est chargé de l'accompagner dans l'une de ses premières missions à la Cité du Crépuscule, où il lui apprend à collecter les cœurs libérés par la Keyblade. Il se montre affable et curieux du potentiel du nouveau venu, qu'il envisage déjà comme un atout.\n\nIl part ensuite pour le Manoir Oblivion avec Larxene, Axel, Vexen, Lexaeus et Zexion. Sa mort là-bas est annoncée à Roxas par Saïx, sans détails, et laisse l'Organisation amputée de près de la moitié de ses membres. Ses appartements et son nom restent des indices que Roxas et Xion tentent de déchiffrer au cours de l'année.",
          "Shortly after Roxas joins the Organization, Marluxia is assigned to accompany him on one of his first missions in Twilight Town, where he teaches him to collect the hearts released by the Keyblade. He is affable and curious about the newcomer's potential, whom he already sees as an asset.\n\nHe then leaves for Castle Oblivion with Larxene, Axel, Vexen, Lexaeus and Zexion. His death there is announced to Roxas by Saïx, without details, and leaves the Organization short of nearly half its members. His quarters and his name remain clues Roxas and Xion try to decipher over the year.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Reconstitué en humain puis retransformé en Simili par Xehanort, Marluxia rejoint la nouvelle Organisation XIII comme l'un des treize réceptacles de ténèbres. Il apparaît au Royaume de Corona, où il s'intéresse à Raiponce, l'une des nouvelles Princesses de Cœur, et laisse entendre à Sora que l'Organisation dispose d'un plan de secours si la χ-blade venait à manquer.\n\nAu Nécropole des Keyblades, il affronte Sora aux côtés de Larxene et Luxord, puis seul, sa faux dressée sous une pluie de pétales. Vaincu, il se demande pourquoi Xehanort l'a choisi, lui, et évoque une raison plus ancienne qu'il ne parvient plus à saisir : l'ombre de Lauriam et de Strelitzia. Une version de données l'attend dans l'épisode Limitcut de Re Mind.",
          "Recompleted as a human and turned back into a Nobody by Xehanort, Marluxia joins the new Organization XIII as one of the thirteen vessels of darkness. He appears in the Kingdom of Corona, where he takes an interest in Rapunzel, one of the new Princesses of Heart, and hints to Sora that the Organization has a backup plan should the χ-blade fail.\n\nAt the Keyblade Graveyard he fights Sora alongside Larxene and Luxord, then alone, scythe raised beneath a rain of petals. Defeated, he wonders why Xehanort chose him of all people, and evokes an older reason he can no longer grasp: the shadow of Lauriam and Strelitzia. A data version awaits in the Limitcut episode of Re Mind.",
        ),
      },
    ],
    trivia: [
      L("Sa voix japonaise est Shūichi Ikeda, célèbre pour Char Aznable dans Gundam ; Keith Ferguson le double en anglais.", "His Japanese voice is Shūichi Ikeda, famous as Char Aznable in Gundam; Keith Ferguson voices him in English."),
      L("Dans les premiers concepts de Chain of Memories, Marluxia devait être une femme, ce qui explique son apparence androgyne.", "In early Chain of Memories concepts Marluxia was to be a woman, which explains his androgynous look."),
      L("Le nom de Lauriam est apparu dans Kingdom Hearts Union χ en 2018, quelques mois avant que Kingdom Hearts III ne confirme son lien avec Marluxia.", "The name Lauriam appeared in Kingdom Hearts Union χ in 2018, a few months before Kingdom Hearts III confirmed his link to Marluxia."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Marluxia", url: "https://kingdomhearts.fandom.com/wiki/Marluxia" },
      { label: "Kingdom Hearts Wiki — Lauriam", url: "https://kingdomhearts.fandom.com/wiki/Lauriam" },
    ],
  },

  // ─────────────────────────── Larxene ───────────────────────────
  "larxene": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Larxene est le numéro XII de l'Organisation XIII, la Nymphe Sauvage, seule femme du groupe originel. Maîtresse de la foudre, elle combat avec des couteaux de lancer qu'elle tient entre les doigts, et se déplace à une vitesse qui la rend presque insaisissable. Sarcastique, cruelle et impatiente, elle prend un plaisir évident à tourmenter ses adversaires. Son nom est l'anagramme d'Elrena, son humaine d'origine, avec le X de l'Organisation.\n\nElrena est, comme Lauriam, une porteuse de Keyblade de l'Âge des Fées, membre des Dandelions, dont Kingdom Hearts χ révèle le passé. Cette origine ancienne, commune à Marluxia, explique la complicité étroite qui lie les deux Similis dans Chain of Memories et Kingdom Hearts III. Larxene est le personnage le plus ouvertement méchant de l'Organisation, mais ses dernières paroles laissent entrevoir une fidélité inattendue.",
          "Larxene is Organization XIII's number XII, the Savage Nymph, the only woman in the original group. Mistress of lightning, she fights with throwing knives held between her fingers and moves so fast she is almost impossible to catch. Sarcastic, cruel and impatient, she takes obvious pleasure in tormenting her opponents. Her name is an anagram of Elrena, her original self, with the Organization's X.\n\nElrena is, like Lauriam, a Keyblade wielder from the Age of Fairy Tales, a member of the Dandelions, whose past Kingdom Hearts χ reveals. That ancient origin, shared with Marluxia, explains the close complicity binding the two Nobodies in Chain of Memories and Kingdom Hearts III. Larxene is the Organization's most openly villainous character, yet her last words hint at an unexpected loyalty.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "À Daybreak Town, Elrena est une porteuse de Keyblade au caractère bien trempé, accompagnée de son Chirithy. Elle fait partie des Dandelions choisis par Ava pour survivre à la Guerre des Keyblades et, après celle-ci, se rapproche de Lauriam pour l'aider à retrouver sa sœur Strelitzia, qu'elle connaissait.\n\nElle participe ainsi à l'enquête qui conduit au lieu où Strelitzia a été tuée, et assiste à la confrontation entre Lauriam et Ventus. Kingdom Hearts χ montre une Elrena déjà cassante mais loyale envers Lauriam, sans expliquer comment tous deux perdent leur cœur avant de renaître en Similis à l'époque de Xemnas.",
          "In Daybreak Town, Elrena is a strong-willed Keyblade wielder accompanied by her Chirithy. She is one of the Dandelions chosen by Ava to survive the Keyblade War and, after it, draws close to Lauriam to help him find his sister Strelitzia, whom she knew.\n\nShe thus takes part in the investigation leading to the place where Strelitzia was killed, and witnesses the confrontation between Lauriam and Ventus. Kingdom Hearts χ shows an Elrena already sharp-tongued but loyal to Lauriam, without explaining how the two lose their hearts before being reborn as Nobodies in Xemnas's time.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Au Manoir Oblivion, Larxene est la complice de Marluxia dans le complot visant à s'emparer de Sora. Elle se charge de le provoquer : elle l'affronte une première fois pour tester sa force, se moque de ses souvenirs reconstruits et gifle Naminé sous ses yeux, s'amusant de la colère qu'elle suscite.\n\nElle tente aussi de rallier Axel, sans se douter qu'il joue double jeu. Lorsque Naminé avoue à Sora que ses souvenirs sont faux, Larxene, furieuse de voir le plan s'effondrer, décide de tuer le porteur elle-même et l'affronte au douzième étage. Sora la détruit dans un dernier éclair, et elle disparaît en refusant de croire à sa défaite. Elle est le premier membre de l'Organisation vaincu par Sora en personne.",
          "In Castle Oblivion, Larxene is Marluxia's accomplice in the plot to seize Sora. She takes on the job of provoking him: she fights him once to test his strength, mocks his rebuilt memories and slaps Naminé before his eyes, enjoying the anger she stirs.\n\nShe also tries to win Axel over, unaware he is playing a double game. When Naminé confesses to Sora that his memories are false, Larxene, furious to see the plan collapse, decides to kill the wielder herself and faces him on the twelfth floor. Sora destroys her in a final flash of lightning, and she fades away refusing to believe in her defeat. She is the first Organization member defeated by Sora in person.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Ramenée parmi les treize ténèbres de Xehanort, Larxene se rend à Arendelle, où elle observe Elsa pour déterminer si elle est l'une des nouvelles Princesses de Cœur. Elle piège Sora dans un labyrinthe de glace et se moque de sa faiblesse, tout en laissant entendre que l'Organisation attend de savoir si la lumière d'Elsa versera dans les ténèbres.\n\nAu Nécropole des Keyblades, elle combat Sora avec Marluxia et Luxord, puis seule, multipliant les clones électriques. Vaincue, elle avoue n'avoir jamais cru aux ambitions de Xehanort : elle n'était là que pour suivre quelqu'un, sans nommer Marluxia. Elle disparaît sur cette confession, et sa version de données attend dans l'épisode Limitcut de Re Mind.",
          "Brought back among Xehanort's thirteen darknesses, Larxene goes to Arendelle, where she watches Elsa to determine whether she is one of the new Princesses of Heart. She traps Sora in an ice labyrinth and mocks his weakness, while hinting that the Organization is waiting to see whether Elsa's light will tip into darkness.\n\nAt the Keyblade Graveyard she fights Sora with Marluxia and Luxord, then alone, multiplying electric clones. Defeated, she admits she never believed in Xehanort's ambitions: she was only there to follow someone, without naming Marluxia. She fades on that confession, and her data version awaits in the Limitcut episode of Re Mind.",
        ),
      },
    ],
    trivia: [
      L("Shanelle Gray la double en anglais dans Kingdom Hearts II et Re:Chain of Memories ; Alyson Stoner reprend le rôle dans Kingdom Hearts III. Rieko Katayama est sa voix japonaise.", "Shanelle Gray voices her in English in Kingdom Hearts II and Re:Chain of Memories; Alyson Stoner takes over in Kingdom Hearts III. Rieko Katayama is her Japanese voice."),
      L("Larxene est la seule membre de l'Organisation XIII originelle à n'avoir jamais été vaincue par Riku : elle n'apparaît que dans l'histoire de Sora.", "Larxene is the only member of the original Organization XIII never defeated by Riku: she appears only in Sora's story."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Larxene", url: "https://kingdomhearts.fandom.com/wiki/Larxene" },
    ],
  },

  // ─────────────────────────── Vexen ───────────────────────────
  "vexen": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Vexen est le numéro IV de l'Organisation XIII, le Savant Glacial. Il combat avec un large bouclier et la magie de la glace, mais son arme véritable est la science : c'est lui qui conçoit le programme des Réplicas, ces copies artificielles capables de recevoir des souvenirs et un cœur. Susceptible, hautain et facilement humilié, il est le premier membre de l'Organisation à mourir, de la main d'Axel.\n\nSon humain d'origine, Even, est un scientifique du Jardin Radieux, apprenti d'Ansem le Sage aux côtés de Braig, Dilan, Aeleus, Ienzo et Xehanort. Son nom donne Vexen par anagramme, avec le X de l'Organisation. Recomplété après la mort de son Simili, Even revient dans Kingdom Hearts III sous l'apparence de Vexen, cette fois comme agent double, et emploie ses Réplicas à rendre un corps à Roxas, Naminé et Xion, réparant en partie ce qu'il avait causé.",
          "Vexen is Organization XIII's number IV, the Chilly Academic. He fights with a broad shield and ice magic, but his real weapon is science: he designs the Replica Program, artificial copies able to receive memories and a heart. Touchy, haughty and easily humiliated, he is the first Organization member to die, at Axel's hand.\n\nHis original self, Even, is a scientist of Radiant Garden, an apprentice of Ansem the Wise alongside Braig, Dilan, Aeleus, Ienzo and Xehanort. His name yields Vexen by anagram with the Organization's X. Recompleted after his Nobody's death, Even returns in Kingdom Hearts III in Vexen's guise, this time as a double agent, and uses his Replicas to give Roxas, Naminé and Xion new bodies, partly repairing what he had caused.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dix ans avant Kingdom Hearts, Even est l'un des apprentis d'Ansem le Sage au Jardin Radieux. Ventus le rencontre dans les jardins du château alors qu'il cherche le jeune Ienzo, dont Even a la charge. Le scientifique, intrigué par le garçon, lui pose des questions sur son cœur et devine qu'il est incomplet.\n\nCette curiosité annonce le personnage qu'il deviendra : fasciné par la nature des cœurs, Even participera aux expériences d'Ansem, puis à celles de Xehanort, jusqu'à perdre le sien. Birth by Sleep ne montre pas cette chute, mais les rapports secrets des jeux suivants expliquent que les six apprentis ont volontairement plongé dans les ténèbres, donnant naissance à leurs Similis.",
          "Ten years before Kingdom Hearts, Even is one of Ansem the Wise's apprentices in Radiant Garden. Ventus meets him in the castle gardens while looking for young Ienzo, who is in Even's care. The scientist, intrigued by the boy, questions him about his heart and senses that it is incomplete.\n\nThat curiosity foreshadows the man he will become: fascinated by the nature of hearts, Even takes part in Ansem's experiments and then in Xehanort's, until he loses his own heart. Birth by Sleep does not show that fall, but the secret reports of later games explain that the six apprentices deliberately plunged into darkness, giving birth to their Nobodies.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Envoyé au Manoir Oblivion avec Lexaeus et Zexion pour surveiller Marluxia, Vexen y poursuit ses recherches sur les Réplicas. Il crée le Réplica de Riku, qu'il dote des souvenirs du vrai Riku grâce à Naminé, et l'envoie affronter Sora comme une arme d'expérimentation. Lui-même se rend dans les sous-sols pour étudier Riku, qu'il combat afin de recueillir ses données.\n\nVexen défie ensuite Sora dans une Cité du Crépuscule tirée non pas de ses souvenirs, mais de « l'autre côté » de son cœur, c'est-à-dire de Roxas. Furieux de cette provocation qui menace son plan, Marluxia ordonne à Axel de l'éliminer : Axel le brûle sous les yeux de Sora, faisant de Vexen le premier membre de l'Organisation à disparaître.",
          "Sent to Castle Oblivion with Lexaeus and Zexion to keep an eye on Marluxia, Vexen continues his research on Replicas there. He creates the Riku Replica, gives it the real Riku's memories through Naminé, and sends it against Sora as an experimental weapon. He himself goes down to the basements to study Riku, whom he fights to gather data.\n\nVexen then challenges Sora in a Twilight Town drawn not from his memories but from “the other side” of his heart, that is, from Roxas. Furious at a provocation that threatens his plan, Marluxia orders Axel to eliminate him: Axel burns him before Sora's eyes, making Vexen the first Organization member to vanish.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Avant de partir pour le Manoir Oblivion, Vexen a laissé derrière lui son œuvre la plus aboutie : Xion, le numéro XIV, un Réplica conçu à partir des souvenirs de Sora pour copier le pouvoir de la Keyblade au cas où Roxas ferait défaut. Roxas et Axel ignorent tout de cette origine.\n\nSa mort, rapportée à l'Organisation avec celle des autres membres envoyés au château, laisse Xion sans créateur ni explication. C'est en retournant au Manoir Oblivion, à la recherche de ses propres origines, que Xion comprend qu'elle n'est qu'une copie issue du programme de Vexen, découverte qui précipite la fin de 358/2 Days.",
          "Before leaving for Castle Oblivion, Vexen left behind his most accomplished work: Xion, number XIV, a Replica built from Sora's memories to copy the Keyblade's power in case Roxas failed. Roxas and Axel know nothing of that origin.\n\nHis death, reported to the Organization together with those of the other members sent to the castle, leaves Xion without a creator or an explanation. It is by returning to Castle Oblivion, in search of her own origins, that Xion understands she is only a copy born of Vexen's program, a discovery that hastens the end of 358/2 Days.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Lorsque les Similis d'un même humain sont tous deux détruits, leur humain se reconstitue. Après la fin de Kingdom Hearts II, Even réapparaît donc au Jardin Radieux, dans le château d'Ansem, avec Lea, Ienzo, Aeleus et Dilan. Ienzo et Aeleus sont déjà debout à l'éveil de Lea, mais Even et Dilan, eux, ne se sont pas encore réveillés.\n\nCette scène de Dream Drop Distance, brève, ferme une boucle ouverte dans Chain of Memories : le savant qui avait créé des vies artificielles retrouve la sienne, sans qu'on sache encore ce qu'il en fera. Braig et Isa, eux, manquent à l'appel, signe qu'ils ont rejoint Xehanort.",
          "When both Nobodies of the same human are destroyed, that human is recompleted. After the end of Kingdom Hearts II, Even thus reappears in Radiant Garden, inside Ansem's castle, with Lea, Ienzo, Aeleus and Dilan. Ienzo and Aeleus are already up when Lea wakes, but Even and Dilan have not yet come round.\n\nThat brief scene in Dream Drop Distance closes a loop opened in Chain of Memories: the scientist who created artificial lives regains his own, with no word yet on what he will do with it. Braig and Isa, on the other hand, are missing, a sign they have rejoined Xehanort.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Even, redevenu Vexen, rejoint la nouvelle Organisation XIII de Xehanort, mais en secret il n'a jamais quitté le camp d'Ansem le Sage : il s'y est introduit pour obtenir le matériel nécessaire à ses Réplicas et pour retrouver son ancien maître. Avec la complicité de Demyx, il fait sortir Ansem le Sage du Monde qui n'existe pas et le ramène au Jardin Radieux, puis livre à Ienzo un Réplica vierge.\n\nCe corps artificiel accueille le cœur de Roxas, tandis que d'autres Réplicas serviront à Naminé et à Xion. Vexen ne participe pas à la bataille du Nécropole des Keyblades ; sa place parmi les treize est occupée par Xion. Dans Re Mind, une version de données de Vexen figure néanmoins parmi les combats de Limitcut, et le vrai Even assiste Ansem et Ienzo dans leurs recherches sur Sora.",
          "Even, Vexen once more, joins Xehanort's new Organization XIII, but in secret he never left Ansem the Wise's side: he infiltrated it to obtain the materials his Replicas required and to find his former master. With Demyx's help he smuggles Ansem the Wise out of The World That Never Was and brings him to Radiant Garden, then delivers a blank Replica to Ienzo.\n\nThat artificial body receives Roxas's heart, while other Replicas serve Naminé and Xion. Vexen takes no part in the battle at the Keyblade Graveyard; his seat among the thirteen is filled by Xion. In Re Mind, a data version of Vexen nonetheless features among the Limitcut battles, and the real Even assists Ansem and Ienzo in their research on Sora.",
        ),
      },
    ],
    trivia: [
      L("Derek Stephen Prince le double en anglais dans tous les jeux ; en japonais, Nachi Nozawa l'interprète dans Re:Chain of Memories, puis Masaki Terasoma après sa mort.", "Derek Stephen Prince voices him in English in every game; in Japanese, Nachi Nozawa plays him in Re:Chain of Memories, then Masaki Terasoma after his death."),
      L("Vexen est le premier membre de l'Organisation XIII à mourir dans l'ordre chronologique, mais son humain est aussi l'un des rares à survivre à toute la saga.", "Vexen is the first Organization XIII member to die in chronological order, yet his original self is also one of the few to survive the whole saga."),
      L("Son bouclier se nomme Fierté Gelée (Frozen Pride) et il est le seul membre à combattre avec une arme défensive.", "His shield is called Frozen Pride and he is the only member to fight with a defensive weapon."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Vexen", url: "https://kingdomhearts.fandom.com/wiki/Vexen" },
    ],
  },

  // ─────────────────────────── Zexion ───────────────────────────
  "zexion": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Zexion est le numéro VI de l'Organisation XIII, le Conspirateur Obscur, le plus jeune des membres fondateurs. Il combat avec un Lexique, un livre capable de créer des illusions et de reproduire les pouvoirs de ses adversaires, et se distingue par un odorat surnaturel qui lui permet de reconnaître les cœurs. Calme et calculateur, il préfère manipuler qu'affronter, ce qui lui vaut d'être finalement victime de plus manipulateur que lui.\n\nSon humain d'origine, Ienzo, est un orphelin recueilli par Ansem le Sage au Jardin Radieux, devenu le plus jeune de ses apprentis. Enfant muet et solitaire dans Birth by Sleep, il grandit en Simili silencieux, puis, recomplété, devient un jeune homme affable qui met son savoir au service de Sora. Son nom donne Zexion par anagramme, avec le X de l'Organisation. Il est l'un des membres dont le parcours est le plus ouvertement rédempteur.",
          "Zexion is Organization XIII's number VI, the Cloaked Schemer, the youngest of the founding members. He fights with a Lexicon, a book able to create illusions and copy his opponents' powers, and stands out for a supernatural sense of smell that lets him recognise hearts. Calm and calculating, he prefers manipulating to fighting, which ends up making him the victim of someone more manipulative still.\n\nHis original self, Ienzo, is an orphan taken in by Ansem the Wise in Radiant Garden, who became the youngest of his apprentices. A mute, lonely child in Birth by Sleep, he grows into a silent Nobody, then, recompleted, becomes an affable young man who puts his knowledge at Sora's service. His name yields Zexion by anagram with the Organization's X. He is one of the members whose path is most openly redemptive.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Au Jardin Radieux, Ienzo n'est encore qu'un petit garçon silencieux, protégé d'Ansem le Sage et surveillé par Even. Ventus le trouve seul dans les jardins, menacé par des Nescients, et le sauve avant qu'Even ne vienne le récupérer. L'enfant ne prononce pas un mot, mais l'épisode établit sa présence au château avant la chute du monde.\n\nCette rencontre est l'une des rares fois où un apprenti d'Ansem apparaît sous sa forme humaine originelle dans un jeu. Elle éclaire aussi le respect que Ienzo témoignera plus tard à ceux qui l'ont protégé, et la reconnaissance qu'il montrera envers Ansem le Sage dans Kingdom Hearts III.",
          "In Radiant Garden, Ienzo is still a silent little boy, a ward of Ansem the Wise watched over by Even. Ventus finds him alone in the gardens, threatened by Unversed, and saves him before Even comes to fetch him. The child does not say a word, but the scene establishes his presence at the castle before the world's fall.\n\nThat encounter is one of the rare times an apprentice of Ansem appears in his original human form in a game. It also sheds light on the respect Ienzo will later show to those who protected him, and on the gratitude he displays toward Ansem the Wise in Kingdom Hearts III.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Dans les sous-sols du Manoir Oblivion, Zexion surveille Riku avec Vexen et Lexaeus, tout en observant à distance le complot de Marluxia. Après la mort de ses deux alliés, il tente de briser Riku en lui faisant vivre une illusion des Îles du Destin détruites, puis en prenant l'apparence de Sora pour lui reprocher ses ténèbres.\n\nRiku perce l'illusion en se fiant à l'odeur des ténèbres et blesse Zexion, qui bat en retraite. Axel envoie alors le Réplica de Riku l'achever : le Réplica absorbe Zexion pour gagner en puissance, sur les conseils du roux, qui se débarrasse ainsi d'un témoin gênant. Zexion est le troisième membre de l'Organisation à périr dans le château.",
          "In the basements of Castle Oblivion, Zexion watches Riku with Vexen and Lexaeus while keeping an eye on Marluxia's plot from afar. After the death of his two allies, he tries to break Riku by making him live an illusion of a destroyed Destiny Islands, then by taking Sora's form to reproach him for his darkness.\n\nRiku sees through the illusion by trusting the scent of darkness and wounds Zexion, who retreats. Axel then sends the Riku Replica to finish him: the Replica absorbs Zexion to grow stronger, on the advice of the redhead, who thereby rids himself of an inconvenient witness. Zexion is the third Organization member to perish in the castle.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Recomplété après la destruction de Xemnas, Ienzo se réveille au Jardin Radieux dans le château d'Ansem, où il retrouve Aeleus, puis Lea. Il a l'âge qu'il aurait eu sans les années passées en Simili, et surtout la parole : c'est lui qui explique à Lea ce qui leur est arrivé et constate que Even et Dilan ne se sont pas encore réveillés, tandis que Braig et Isa manquent à l'appel.\n\nCette scène le présente comme le futur informateur scientifique des héros : posé, courtois, désireux de réparer les erreurs des apprentis. Il reprend les recherches d'Ansem le Sage dans le bureau du château, en attendant l'occasion de se rendre utile.",
          "Recompleted after Xemnas's destruction, Ienzo wakes in Radiant Garden inside Ansem's castle, where he finds Aeleus and then Lea. He is the age he would have been without the years spent as a Nobody, and above all he can speak: he is the one who explains to Lea what happened to them and notes that Even and Dilan have not yet woken, while Braig and Isa are missing.\n\nThat scene presents him as the heroes' future scientific informant: composed, courteous, eager to mend the apprentices' mistakes. He resumes Ansem the Wise's research in the castle study, awaiting a chance to be of use.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Ienzo devient le contact scientifique de Sora par Gummiphone. Depuis le bureau d'Ansem au Jardin Radieux, il déchiffre les données laissées par Ansem le Sage et découvre que le cœur de Sora abrite plusieurs autres cœurs, dont celui de Roxas, ce qui laisse espérer de le faire renaître. Il reçoit Even, puis Ansem le Sage lui-même, ramené par Vexen et Demyx, et retrouve ainsi son maître d'enfance.\n\nAvec Even et Ansem, il transfère le cœur de Roxas dans un Réplica, puis assiste à la renaissance de Naminé. Il ne se bat pas au Nécropole des Keyblades, mais son travail y rend possibles plusieurs retours décisifs. Dans Re Mind, une version de données de Zexion figure parmi les combats de Limitcut, tandis que Ienzo aide Riku et Mickey à chercher Sora dans les données.",
          "Ienzo becomes Sora's scientific contact by Gummiphone. From Ansem's study in Radiant Garden he deciphers the data left by Ansem the Wise and discovers that Sora's heart shelters several other hearts, including Roxas's, raising hopes of bringing him back. He receives Even, then Ansem the Wise himself, brought back by Vexen and Demyx, and so reunites with his childhood master.\n\nWith Even and Ansem he transfers Roxas's heart into a Replica, then witnesses Naminé's rebirth. He does not fight at the Keyblade Graveyard, but his work makes several decisive returns possible. In Re Mind, a data version of Zexion is among the Limitcut battles, while Ienzo helps Riku and Mickey search for Sora within the data.",
        ),
      },
    ],
    trivia: [
      L("Vincent Corazza le double en anglais ; Akira Ishida, sa voix japonaise, prête aussi sa voix à Ienzo adulte.", "Vincent Corazza voices him in English; Akira Ishida, his Japanese voice, also plays the adult Ienzo."),
      L("Dans Chain of Memories sur Game Boy Advance, Zexion n'est jamais affronté : son combat n'a été ajouté que dans Re:Chain of Memories.", "In Chain of Memories on Game Boy Advance, Zexion is never fought: his battle was only added in Re:Chain of Memories."),
      L("Son Lexique se nomme Livre de la Rétribution (Book of Retribution) et il est le seul membre à combattre avec un livre.", "His Lexicon is called Book of Retribution and he is the only member to fight with a book."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Zexion", url: "https://kingdomhearts.fandom.com/wiki/Zexion" },
    ],
  },

  // ─────────────────────────── Lexaeus ───────────────────────────
  "lexaeus": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Lexaeus est le numéro V de l'Organisation XIII, le Héros Silencieux. Colosse taciturne, il manie une hache-épée massive, Skysplitter, et l'élément terre, qu'il utilise pour soulever le sol et écraser ses adversaires. Peu bavard, loyal envers Zexion et Vexen, il incarne la force brute mais réfléchie de l'Organisation. Son nom est l'anagramme d'Aeleus, avec le X rituel.\n\nAeleus, son humain d'origine, est un garde du château du Jardin Radieux, apprenti d'Ansem le Sage aux côtés de Dilan, avec qui il forme la sentinelle de l'entrée. Recomplété après la mort de Xemnas, il reprend ses fonctions au Jardin Radieux et se range du côté des héros dans les derniers épisodes. Lexaeus est l'un des membres les moins développés de l'Organisation, mais sa mort face à Riku marque un tournant dans Reverse/Rebirth.",
          "Lexaeus is Organization XIII's number V, the Silent Hero. A taciturn colossus, he wields a massive axe sword, Skysplitter, and the element of earth, which he uses to heave the ground and crush his opponents. A man of few words, loyal to Zexion and Vexen, he embodies the Organization's brute yet considered strength. His name is an anagram of Aeleus with the ritual X.\n\nAeleus, his original self, is a guard of the Radiant Garden castle, an apprentice of Ansem the Wise alongside Dilan, with whom he watches the entrance. Recompleted after Xemnas's death, he resumes his duties in Radiant Garden and sides with the heroes in the later games. Lexaeus is one of the least developed Organization members, but his death at Riku's hands is a turning point in Reverse/Rebirth.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Au Jardin Radieux, Aeleus monte la garde devant le château avec Dilan. Les deux hommes sont les premiers apprentis d'Ansem le Sage que les porteurs croisent : ils barrent le passage à Ventus qui poursuit Vanitas, puis à Terra et Aqua, sans se départir de leur devoir.\n\nAeleus se montre aussi protecteur envers le petit Ienzo, dont la garde revient à Even. Ce personnage effacé mais fidèle explique l'attachement qui liera plus tard Lexaeus à Zexion au Manoir Oblivion, et sa fidélité renouvelée envers Ansem le Sage une fois recomplété.",
          "In Radiant Garden, Aeleus stands guard in front of the castle with Dilan. The two men are the first of Ansem the Wise's apprentices the wielders meet: they block Ventus as he chases Vanitas, then Terra and Aqua, never straying from their duty.\n\nAeleus is also protective of little Ienzo, whose care falls to Even. This quiet but faithful figure explains the attachment that will later bind Lexaeus to Zexion at Castle Oblivion, and his renewed loyalty to Ansem the Wise once recompleted.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Envoyé au Manoir Oblivion avec Vexen et Zexion pour surveiller Marluxia, Lexaeus se charge de Riku dans les sous-sols. Après la mort de Vexen, il décide d'affronter le garçon pour l'obliger à embrasser ses ténèbres, estimant qu'un Riku soumis à Ansem serait plus utile qu'un Riku libre.\n\nLe combat, dans les profondeurs du château, tourne à l'avantage de Lexaeus jusqu'à ce que Riku libère le pouvoir d'Ansem enfoui en lui. Terrassé par cette explosion de ténèbres, Lexaeus meurt en avouant sa défaite face à ce qu'il a lui-même provoqué. Sa disparition laisse Zexion seul face à Axel et au Réplica de Riku.",
          "Sent to Castle Oblivion with Vexen and Zexion to watch Marluxia, Lexaeus takes charge of Riku in the basements. After Vexen's death he decides to face the boy to force him to embrace his darkness, judging that a Riku subject to Ansem would be more useful than a free one.\n\nThe fight, in the castle's depths, goes Lexaeus's way until Riku unleashes the power of Ansem buried within him. Struck down by that burst of darkness, Lexaeus dies admitting defeat at the hands of what he himself provoked. His loss leaves Zexion alone against Axel and the Riku Replica.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Après la destruction de Xemnas, Aeleus se reconstitue au Jardin Radieux. Il est déjà debout, avec Ienzo, lorsque Lea se réveille dans le château d'Ansem, et il aide le jeune scientifique à faire le point sur les absents : Even et Dilan dorment encore, Braig et Isa ont disparu.\n\nSa présence, brève, indique qu'Aeleus a repris son poste de garde et son rôle de protecteur. Dans Kingdom Hearts III, il reste au Jardin Radieux auprès de Ienzo et d'Ansem le Sage, hors des combats, comme l'un des rares anciens membres de l'Organisation à avoir simplement retrouvé sa vie.",
          "After Xemnas's destruction, Aeleus is recompleted in Radiant Garden. He is already up, with Ienzo, when Lea wakes in Ansem's castle, and he helps the young scientist take stock of the absentees: Even and Dilan still sleep, Braig and Isa have vanished.\n\nHis brief presence shows that Aeleus has resumed his post as guard and his role as protector. In Kingdom Hearts III he stays in Radiant Garden with Ienzo and Ansem the Wise, away from the fighting, as one of the rare former Organization members to have simply got his life back.",
        ),
      },
    ],
    trivia: [
      L("Dave Boat le double en anglais ; Fumihiko Tachiki est sa voix japonaise.", "Dave Boat voices him in English; Fumihiko Tachiki is his Japanese voice."),
      L("Contrairement à Zexion, Lexaeus est affronté par Riku dès la version Game Boy Advance de Chain of Memories.", "Unlike Zexion, Lexaeus is already fought by Riku in the Game Boy Advance version of Chain of Memories."),
      L("Dans Kingdom Hearts II Final Mix, Lexaeus fait partie des membres disparus affrontés sous forme de Silhouettes Absentes, puis dans le Jardin des Assemblages.", "In Kingdom Hearts II Final Mix, Lexaeus is one of the fallen members fought as Absent Silhouettes and, later, in the Garden of Assemblage."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Lexaeus", url: "https://kingdomhearts.fandom.com/wiki/Lexaeus" },
    ],
  },

  // ─────────────────────────── Xaldin ───────────────────────────
  "xaldin": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Xaldin est le numéro III de l'Organisation XIII, la Lance Tourbillonnante. Reconnaissable à ses longues tresses noires et à ses favoris, il manie six lances à la fois, portées par le vent, qu'il combine en un dragon de lances pour ses assauts les plus violents. Froid, méthodique et sans pitié, il est l'un des membres les plus fidèles à Xemnas.\n\nSon humain d'origine, Dilan, est un garde du château du Jardin Radieux, apprenti d'Ansem le Sage, qui monte la faction avec Aeleus dans Birth by Sleep. Son nom donne Xaldin par anagramme, avec le X de l'Organisation. Xaldin est l'antagoniste principal du Château de la Bête dans Kingdom Hearts II, où il tente d'exploiter la colère de la Bête, et l'un des premiers membres que Sora affronte. Dilan, recomplété, réapparaît ensuite au Jardin Radieux, hors de toute intrigue.",
          "Xaldin is Organization XIII's number III, the Whirlwind Lancer. Recognisable by his long black braids and sideburns, he wields six lances at once, carried by the wind, which he combines into a lance dragon for his most violent assaults. Cold, methodical and merciless, he is one of the members most loyal to Xemnas.\n\nHis original self, Dilan, is a guard of the Radiant Garden castle, an apprentice of Ansem the Wise, who stands watch with Aeleus in Birth by Sleep. His name yields Xaldin by anagram with the Organization's X. Xaldin is the main antagonist of Beast's Castle in Kingdom Hearts II, where he tries to exploit the Beast's anger, and one of the first members Sora faces. Dilan, recompleted, later reappears in Radiant Garden, outside any plot.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Au Jardin Radieux, Dilan garde l'entrée du château d'Ansem le Sage avec Aeleus. Lances au poing, les deux apprentis refusent l'accès aux porteurs de Keyblade : ils repoussent Ventus, lancé à la poursuite de Vanitas, puis se montrent tout aussi intraitables avec Terra et Aqua.\n\nDilan est déjà l'homme d'armes rigide et discipliné que sera Xaldin. Le jeu ne montre pas sa chute, mais les rapports secrets établissent qu'il suit Xehanort dans ses expériences sur les ténèbres, jusqu'à devenir l'un des six Similis fondateurs de l'Organisation.",
          "In Radiant Garden, Dilan guards the entrance of Ansem the Wise's castle with Aeleus. Lances in hand, the two apprentices deny the Keyblade wielders access: they push back Ventus, chasing Vanitas, and prove just as unbending with Terra and Aqua.\n\nDilan is already the rigid, disciplined man-at-arms Xaldin will be. The game does not show his fall, but the secret reports establish that he follows Xehanort into his experiments on darkness, until he becomes one of the Organization's six founding Nobodies.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Xaldin accompagne Roxas dans plusieurs missions de reconnaissance au Château de la Bête, où il observe la Bête et Belle. Il y explique au jeune Simili sa théorie : l'attachement de la Bête à la jeune femme et sa colère en font un candidat idéal pour produire à la fois un Sans-cœur et un Simili puissants.\n\nSes échanges avec Roxas, secs et professionnels, montrent un membre entièrement dévoué aux objectifs de Xemnas. Il reste au Monde qui n'existe pas pendant la majeure partie de l'année et ne joue aucun rôle dans le drame de Xion, mais ses observations préparent son plan de Kingdom Hearts II.",
          "Xaldin accompanies Roxas on several reconnaissance missions to Beast's Castle, where he observes the Beast and Belle. He explains his theory to the young Nobody: the Beast's attachment to the young woman and his anger make him an ideal candidate to yield both a powerful Heartless and a powerful Nobody.\n\nHis exchanges with Roxas, curt and professional, show a member wholly devoted to Xemnas's goals. He stays in The World That Never Was for most of the year and plays no part in Xion's drama, but his observations set up his plan in Kingdom Hearts II.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Au Château de la Bête, Xaldin manipule la Bête pour exacerber sa colère et son désespoir, espérant que son cœur puissant, une fois sombré dans les ténèbres, produira un Sans-cœur et un Simili d'exception. Il fait douter la Bête de Belle et de ses serviteurs, jusqu'à ce que Sora l'aide à reprendre ses esprits.\n\nLors de la seconde visite, Xaldin s'empare de la rose enchantée et de Belle pour forcer la Bête à choisir entre les deux. Belle profite de la diversion pour s'enfuir avec la rose, et Sora, la Bête et leurs amis affrontent Xaldin sur le pont du château. Il est l'un des premiers membres de l'Organisation XIII que Sora détruit dans Kingdom Hearts II.",
          "At Beast's Castle, Xaldin manipulates the Beast to inflame his anger and despair, hoping that his powerful heart, once sunk into darkness, will yield an exceptional Heartless and Nobody. He makes the Beast doubt Belle and his servants, until Sora helps him come to his senses.\n\nOn the second visit, Xaldin seizes the enchanted rose and Belle to force the Beast to choose between them. Belle uses the distraction to escape with the rose, and Sora, the Beast and their friends fight Xaldin on the castle bridge. He is one of the first Organization XIII members Sora destroys in Kingdom Hearts II.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Après la mort de Xemnas, Dilan se reconstitue au Jardin Radieux avec les autres apprentis d'Ansem. Lorsque Lea se réveille dans le château, Ienzo précise que Dilan et Even ne sont pas encore revenus à eux, contrairement à Aeleus.\n\nSa mention établit qu'il ne s'est pas rallié à Xehanort, à la différence de Braig et Isa. Dans Kingdom Hearts III, Dilan est simplement retourné à son poste au Jardin Radieux, l'un des rares anciens membres de l'Organisation à ne plus jamais prendre part au conflit.",
          "After Xemnas's death, Dilan is recompleted in Radiant Garden with the other apprentices of Ansem. When Lea wakes in the castle, Ienzo notes that Dilan and Even have not yet come round, unlike Aeleus.\n\nThat mention establishes that he did not side with Xehanort, unlike Braig and Isa. In Kingdom Hearts III, Dilan has simply returned to his post in Radiant Garden, one of the rare former Organization members never to take part in the conflict again.",
        ),
      },
    ],
    trivia: [
      L("David Dayan Fisher le double en anglais ; Yōsuke Akimoto est sa voix japonaise.", "David Dayan Fisher voices him in English; Yōsuke Akimoto is his Japanese voice."),
      L("Le combat contre Xaldin est réputé l'un des plus difficiles de Kingdom Hearts II ; une commande de réaction permet à Sora de lui voler ses lances pour les retourner contre lui.", "The Xaldin fight is reputed to be one of the hardest in Kingdom Hearts II; a Reaction Command lets Sora steal his lances and turn them against him."),
      L("Ses six lances se nomment collectivement Lindworm, du nom d'un dragon des légendes germaniques.", "His six lances are collectively named Lindworm, after a dragon of Germanic legend."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Xaldin", url: "https://kingdomhearts.fandom.com/wiki/Xaldin" },
    ],
  },

  // ─────────────────────────── Luxord ───────────────────────────
  "luxord": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Luxord est le numéro X de l'Organisation XIII, le Joueur du Destin. Barbe blonde taillée, boucles d'oreilles et accent britannique dans la version anglaise, il combat avec des cartes à jouer et manipule le temps, transformant chaque affrontement en jeu de hasard aux règles qu'il fixe lui-même. Courtois, beau joueur et imperturbable, il est l'un des membres les plus mystérieux : contrairement aux autres, son humain d'origine n'a jamais été révélé.\n\nDans Kingdom Hearts II, il est un adversaire secondaire lié à Port Royal ; dans Kingdom Hearts III, il devient un enquêteur à la recherche de la boîte noire, et laisse à Sora une carte dont le rôle reste à écrire. Tetsuya Nomura a indiqué que Luxord réservait des surprises pour la suite de la saga, et sa fin dans Kingdom Hearts III, où il quitte le combat sans rancune, en fait l'un des rares membres de l'Organisation traités avec sympathie.",
          "Luxord is Organization XIII's number X, the Gambler of Fate. Trimmed blond beard, earrings and a British accent in the English version, he fights with playing cards and manipulates time, turning every battle into a game of chance whose rules he sets himself. Courteous, a good sport and unflappable, he is one of the most mysterious members: unlike the others, his original self has never been revealed.\n\nIn Kingdom Hearts II he is a secondary opponent tied to Port Royal; in Kingdom Hearts III he becomes an investigator searching for the black box, and leaves Sora a card whose role is yet to be written. Tetsuya Nomura has said Luxord holds surprises for the saga's future, and his end in Kingdom Hearts III, where he leaves the fight without a grudge, makes him one of the rare Organization members treated with sympathy.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Luxord fait partie des membres qui accompagnent Roxas dans ses premières missions, au cours desquelles il lui apprend à repérer les Sans-cœur et lui parle de chance et de destin avec sa placidité coutumière. Il reste au Monde qui n'existe pas toute l'année, à l'écart du drame de Xion, et se distingue par un flegme qui contraste avec l'agitation de Demyx ou la brutalité de Xigbar.\n\nDans le mode Mission, il est jouable, cartes en main, avec des techniques fondées sur le hasard. Le jeu ne lui accorde aucune scène majeure, mais il consolide son image de membre loyal et discret, prêt à jouer le jeu de l'Organisation sans jamais dévoiler ses propres cartes.",
          "Luxord is among the members who accompany Roxas on his first missions, during which he teaches him to spot the Heartless and speaks of luck and fate with his usual composure. He stays in The World That Never Was all year, away from Xion's drama, and stands out for a calm that contrasts with Demyx's fidgeting or Xigbar's brutality.\n\nIn Mission Mode he is playable, cards in hand, with techniques based on chance. The game grants him no major scene, but it cements his image as a loyal, discreet member, willing to play the Organization's game without ever showing his own cards.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "À Port Royal, Luxord s'empare des pièces d'or maudites de l'Isla de Muerta pour en étudier le pouvoir, et s'en sert pour rendre un Sans-cœur en forme de faucheur invincible tant que les pièces ne sont pas restituées. Il manipule le capitaine Barbossa et joue avec Jack Sparrow, dont il admire la roublardise, tout en observant Sora de loin.\n\nDans le Monde qui n'existe pas, il attend Sora dans une salle du château et l'entraîne dans un jeu contre la montre : chaque camp dispose d'un temps limité, et Sora doit vaincre Luxord avant que le sien ne s'épuise, sous peine de devenir une carte. Vaincu, Luxord regrette de n'avoir pu retenir Sora plus longtemps et s'efface en gentleman, sans colère.",
          "In Port Royal, Luxord seizes the cursed gold coins of Isla de Muerta to study their power, and uses them to make the Grim Reaper Heartless invincible as long as the coins are not returned. He manipulates Captain Barbossa and toys with Jack Sparrow, whose cunning he admires, while watching Sora from afar.\n\nIn The World That Never Was he waits for Sora in a chamber of the castle and draws him into a race against the clock: each side has a time limit, and Sora must beat Luxord before his own runs out or be turned into a card. Defeated, Luxord regrets not having held Sora back longer and fades like a gentleman, without anger.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Reconstitué puis rappelé par Xehanort, Luxord traverse les Caraïbes à bord d'un navire de l'Organisation, à la recherche de la boîte noire, qu'il croit cachée quelque part dans ces eaux. Il défie Sora à une course maritime, échange quelques mots avec Jack Sparrow et ne se départ jamais de sa courtoisie.\n\nAu Nécropole des Keyblades, il affronte Sora avec Marluxia et Larxene, puis seul, dans un jeu de cartes géantes où il faut retrouver la bonne carte parmi ses illusions. Vaincu, il remet à Sora une « carte joker » qui, dit-il, pourrait lui servir un jour. Il disparaît en pariant sur une revanche, et sa version de données attend dans Limitcut.",
          "Recompleted then recalled by Xehanort, Luxord sails the Caribbean aboard an Organization ship, searching for the black box, which he believes hidden somewhere in those waters. He challenges Sora to a sea race, exchanges a few words with Jack Sparrow and never drops his courtesy.\n\nAt the Keyblade Graveyard he faces Sora with Marluxia and Larxene, then alone, in a game of giant cards where the right one must be found among his illusions. Defeated, he hands Sora a “wild card” which, he says, might be useful one day. He vanishes betting on a rematch, and his data version awaits in Limitcut.",
        ),
      },
    ],
    trivia: [
      L("Robin Atkin Downes le double en anglais avec un accent britannique ; Jōji Nakata, sa voix japonaise, est aussi celle d'Alucard dans Hellsing.", "Robin Atkin Downes voices him in English with a British accent; Jōji Nakata, his Japanese voice, also plays Alucard in Hellsing."),
      L("Luxord et Demyx sont les seuls membres de l'Organisation originelle dont le nom humain n'a jamais été officiellement révélé.", "Luxord and Demyx are the only members of the original Organization whose human names have never been officially revealed."),
      L("Ses cartes portent le nom de Fair Game ; il est le seul membre à manipuler le temps, pouvoir que partage plus tard le Jeune Xehanort.", "His cards are called Fair Game; he is the only member to control time, a power later shared by Young Xehanort."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Luxord", url: "https://kingdomhearts.fandom.com/wiki/Luxord" },
    ],
  },

  // ─────────────────────────── Demyx ───────────────────────────
  "demyx": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Demyx est le numéro IX de l'Organisation XIII, le Nocturne Mélodieux. Coiffé d'une crête blonde, il combat avec un sitar, Arpeggio, dont les accords invoquent des clones d'eau, son élément. Paresseux, geignard et peu enclin aux missions dangereuses, il est le membre comique de l'Organisation, celui qui préfère jouer de la musique plutôt que de se battre, et pourtant l'un de ses combats est resté redouté des joueurs.\n\nSon humain d'origine n'a jamais été nommé, et Tetsuya Nomura a laissé entendre que Demyx cachait un passé plus important qu'il n'y paraît, hypothèse alimentée par Kingdom Hearts III, où il devient un allié inattendu. Simple soldat dans Kingdom Hearts II et 358/2 Days, il est exclu des treize ténèbres dans Kingdom Hearts III faute de motivation, ce qui le conduit, avec Vexen, à travailler pour les héros. Demyx est l'exemple même du personnage secondaire que la saga a fini par charger de mystère.",
          "Demyx is Organization XIII's number IX, the Melodious Nocturne. Sporting a blond mullet, he fights with a sitar, Arpeggio, whose chords summon clones of water, his element. Lazy, whiny and reluctant to take dangerous missions, he is the Organization's comic member, the one who would rather play music than fight, and yet one of his battles remains dreaded by players.\n\nHis original self has never been named, and Tetsuya Nomura has hinted that Demyx hides a past more important than it seems, a theory fed by Kingdom Hearts III, where he becomes an unexpected ally. A mere foot soldier in Kingdom Hearts II and 358/2 Days, he is dropped from the thirteen darknesses in Kingdom Hearts III for lack of motivation, which leads him, with Vexen, to work for the heroes. Demyx is the very example of a minor character the saga ended up loading with mystery.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Demyx est l'un des membres qui accompagnent Roxas dans ses missions à la Cité du Crépuscule et ailleurs, et il ne manque jamais de se plaindre du travail ou de tenter de le refiler au nouveau venu. Il se présente comme un artiste plus qu'un combattant et passe ses journées à gratter son sitar dans la salle grise.\n\nSes échanges avec Roxas et Xion, légers et parfois attendrissants, apportent une respiration au récit. Demyx reste toute l'année au Monde qui n'existe pas, sans jamais être mêlé à l'intrigue de Xion, et il est jouable dans le mode Mission avec ses clones d'eau.",
          "Demyx is one of the members who accompany Roxas on missions in Twilight Town and elsewhere, and he never fails to complain about the work or to try to pass it on to the newcomer. He presents himself as an artist rather than a fighter and spends his days strumming his sitar in the Grey Area.\n\nHis exchanges with Roxas and Xion, light and sometimes touching, offer breathing room in the story. Demyx stays in The World That Never Was all year, never involved in Xion's plot, and is playable in Mission Mode with his water clones.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sora rencontre Demyx dans les Enfers de l'Olympe, où il a dérobé la Pierre de l'Olympe, un talisman qui permet de garder ses forces dans le royaume d'Hadès. Il fuit dès que le combat tourne mal, en lâchant qu'il s'attendait à trouver Roxas plutôt que Sora, l'une des premières allusions au lien entre les deux.\n\nÀ Hollow Bastion, aux abords du château et juste avant la bataille des Mille Sans-cœur, il se dresse devant Sora et l'affronte pour de bon : « Danse, eau, danse ! ». Le combat impose d'éliminer ses clones d'eau dans un temps limité, une épreuve restée célèbre pour sa difficulté. Vaincu, Demyx se dissout en gémissant, premier membre de l'Organisation détruit par Sora dans cet épisode.",
          "Sora meets Demyx in the Olympus Underworld, where he has stolen the Olympus Stone, a talisman that preserves one's strength in Hades's realm. He flees as soon as the fight turns bad, blurting that he expected Roxas rather than Sora, one of the first hints of the link between the two.\n\nIn Hollow Bastion, near the castle and just before the Battle of 1000 Heartless, he stands before Sora and fights for real: “Dance, water, dance!” The battle requires wiping out his water clones within a time limit, a trial famous for its difficulty. Defeated, Demyx dissolves with a whimper, the first Organization member Sora destroys in this game.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Reconstitué puis rappelé, Demyx est d'abord intégré à la nouvelle Organisation XIII, mais Xehanort le juge trop peu motivé pour devenir un réceptacle de ténèbres et le remplace. Vexé, il accepte la proposition de Vexen : servir de coursier pour le camp adverse. C'est lui qui convoie Ansem le Sage hors du Monde qui n'existe pas et le dépose au Jardin Radieux, puis qui apporte à Ienzo le Réplica destiné à Roxas.\n\nIl ne combat pas au Nécropole des Keyblades et se contente de râler contre le travail qu'on lui donne, tout en s'en acquittant. Dans Re Mind, une version de données de Demyx figure parmi les combats de Limitcut, la plus imprévisible de toutes, tandis que le vrai Demyx reste dans l'ombre, son passé toujours inexpliqué.",
          "Recompleted and then recalled, Demyx is first brought into the new Organization XIII, but Xehanort deems him too unmotivated to become a vessel of darkness and replaces him. Piqued, he accepts Vexen's offer: to act as courier for the other side. He is the one who carries Ansem the Wise out of The World That Never Was and drops him in Radiant Garden, then brings Ienzo the Replica meant for Roxas.\n\nHe does not fight at the Keyblade Graveyard and merely grumbles about the tasks he is given, while carrying them out. In Re Mind, a data version of Demyx is among the Limitcut battles, the most unpredictable of them all, while the real Demyx stays in the shadows, his past still unexplained.",
        ),
      },
    ],
    trivia: [
      L("Ryan O'Donohue le double en anglais ; Kenichi Suzumura, sa voix japonaise, est aussi celle de Zack.", "Ryan O'Donohue voices him in English; Kenichi Suzumura, his Japanese voice, also plays Zack."),
      L("Son cri « Danse, eau, danse ! » est devenu l'une des répliques les plus citées de Kingdom Hearts II.", "His cry “Dance, water, dance!” became one of the most quoted lines of Kingdom Hearts II."),
      L("Nomura a confié que Demyx et Luxord avaient tous deux un rôle à jouer dans l'avenir de la saga, sans en dire plus.", "Nomura has said that both Demyx and Luxord have a part to play in the saga's future, without elaborating."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Demyx", url: "https://kingdomhearts.fandom.com/wiki/Demyx" },
    ],
  },
  // ─────────────────────────── Luxu ───────────────────────────
  "luxu": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Luxu est le sixième apprenti du Maître des Maîtres, le seul à ne pas recevoir d'Union ni de copie du Livre des Prophéties. Son maître lui confie à la place deux objets : une boîte noire dont il ne doit jamais révéler le contenu, et sa propre Keyblade, Sans Nom, ornée de l'œil qui permet au Maître d'observer l'avenir. Sa mission consiste à transmettre cette Keyblade de porteur en porteur, à travers les siècles, et à regarder sans intervenir.\n\nCette mission fait de Luxu le personnage le plus ancien encore actif dans la saga. Pour la mener à bien, il passe de corps en corps, et Kingdom Hearts III révèle qu'il a fini par occuper celui de Braig, le garde du Jardin Radieux devenu Xigbar, numéro II de l'Organisation XIII. Le ricanement, le « comme si ! » et la désinvolture de Xigbar cachaient donc un observateur millénaire, qui a manipulé Xehanort autant qu'il l'a servi. Son nom se lit dans celui de Xigbar : Braig anagrammé et augmenté du X.",
          "Luxu is the sixth apprentice of the Master of Masters, the only one to receive neither a Union nor a copy of the Book of Prophecies. His master instead entrusts him with two things: a black box whose contents he must never reveal, and his own Keyblade, No Name, bearing the eye through which the Master watches the future. His mission is to pass that Keyblade from wielder to wielder across the centuries, and to watch without interfering.\n\nThat mission makes Luxu the oldest character still active in the saga. To carry it out he moves from body to body, and Kingdom Hearts III reveals that he ended up in Braig's, the Radiant Garden guard who became Xigbar, Organization XIII's number II. Xigbar's snicker, his “as if!” and his nonchalance thus hid a thousand-year-old observer who manipulated Xehanort as much as he served him. His name can be read in Xigbar's: Braig scrambled and given the X.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Dans Back Cover et Kingdom Hearts χ, Luxu reçoit du Maître des Maîtres la boîte noire et la Keyblade Sans Nom, avec l'ordre de s'éloigner de Daybreak Town et de ne rien dire aux cinq Prophètes. Le Maître lui explique que l'œil de la Keyblade enregistre tout ce qu'il voit, et que c'est ainsi que le Livre des Prophéties a pu être écrit à l'avance.\n\nLuxu observe donc de loin la méfiance grandissante entre Ira, Aced, Invi, Gula et Ava, alimentée par l'existence d'un traître que le Maître a lui-même inventé. Il assiste à la Guerre des Keyblades depuis les hauteurs, la boîte à ses pieds, puis reparaît dans les derniers chapitres de Union χ face aux nouveaux chefs d'Union, préparant la « nouvelle ère » voulue par son maître.",
          "In Back Cover and Kingdom Hearts χ, Luxu receives from the Master of Masters the black box and the No Name Keyblade, with orders to leave Daybreak Town and say nothing to the five Foretellers. The Master explains that the Keyblade's eye records everything it sees, and that this is how the Book of Prophecies could be written in advance.\n\nLuxu therefore watches from afar the growing distrust between Ira, Aced, Invi, Gula and Ava, fed by the existence of a traitor the Master himself invented. He witnesses the Keyblade War from the heights, the box at his feet, then reappears in the last chapters of Union χ before the new Union leaders, preparing the “new age” his master wants.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Sous les traits de Braig, Luxu est un garde du Jardin Radieux, apprenti d'Ansem le Sage, et le complice de Xehanort. Il aide le vieux Maître en feignant de le retenir en otage pour attirer Terra dans le château, où il affronte le jeune homme avec ses pistolets à flèches. Terra, cédant à ses ténèbres, lui balafre le visage et lui crève l'œil droit : Braig gardera ce bandeau et cette cicatrice.\n\nAu Nécropole des Keyblades, Braig revient tirer sur Aqua et Ventus pour permettre à Xehanort de s'emparer du corps de Terra. Il commente les événements avec son cynisme habituel, sans que personne ne devine qu'il en sait plus que Xehanort lui-même. Les rapports secrets révèlent qu'il a accepté d'être le premier réceptacle de Xehanort en échange d'une Keyblade, promesse dont Kingdom Hearts III donne le vrai sens.",
          "As Braig, Luxu is a Radiant Garden guard, an apprentice of Ansem the Wise, and Xehanort's accomplice. He helps the old Master by pretending to hold him hostage to lure Terra into the castle, where he fights the young man with his arrowguns. Terra, giving in to his darkness, scars his face and puts out his right eye: Braig keeps that eyepatch and scar.\n\nAt the Keyblade Graveyard, Braig returns to shoot at Aqua and Ventus so that Xehanort can seize Terra's body. He comments on events with his usual cynicism, and nobody guesses he knows more than Xehanort himself. The secret reports reveal that he agreed to be Xehanort's first vessel in exchange for a Keyblade, a promise whose true meaning Kingdom Hearts III gives.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Devenu Xigbar, numéro II de l'Organisation XIII, il accompagne Roxas dans plusieurs missions et se moque volontiers du nouveau venu avec son ricanement caractéristique. Il est l'un des rares membres à comprendre ce que sont vraiment Roxas et Xion.\n\nEn regardant Xion, Xigbar voit Ventus là où les autres voient Sora, ce qui trahit sa connaissance du passé et son lien avec Birth by Sleep. Ses remarques ironiques sur la « marionnette » et sur les projets de Xemnas laissent deviner qu'il joue sa propre partie, tout en exécutant les ordres à la lettre.",
          "As Xigbar, Organization XIII's number II, he accompanies Roxas on several missions and readily mocks the newcomer with his trademark snicker. He is one of the few members who understand what Roxas and Xion really are.\n\nLooking at Xion, Xigbar sees Ventus where the others see Sora, which betrays his knowledge of the past and his link to Birth by Sleep. His ironic remarks about the “puppet” and about Xemnas's plans suggest he is playing his own game, while carrying out orders to the letter.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Xigbar apparaît encapuchonné dans la Terre des Dragons, où il fait douter Sora en le comparant à Roxas, puis se dévoile dans le Monde qui n'existe pas. Franc-tireur de l'Organisation, il combat avec deux pistolets à flèches qu'il fusionne en un fusil de précision, et manie l'espace : il se téléporte, renverse la gravité et transforme l'arène en champ de tir.\n\nSora le vainc dans une salle du château, et Xigbar se dissout avec un dernier ricanement, sans révéler quoi que ce soit. Sa mort permet à son humain, Braig, de se reconstituer, ce que Dream Drop Distance confirme. Il reste dans cet épisode un simple lieutenant de Xemnas, que rien ne distingue encore des autres membres.",
          "Xigbar appears hooded in the Land of Dragons, where he unsettles Sora by comparing him to Roxas, then reveals himself in The World That Never Was. The Organization's sharpshooter, he fights with two arrowguns he can merge into a sniper rifle, and controls space: he teleports, flips gravity and turns the arena into a shooting range.\n\nSora beats him in a hall of the castle, and Xigbar dissolves with a final snicker, revealing nothing. His death allows his human self, Braig, to be recompleted, as Dream Drop Distance confirms. In this game he remains a mere lieutenant of Xemnas, still indistinguishable from the other members.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Braig, redevenu humain, s'est empressé de rejoindre Xehanort. Il est l'un des rares apprentis d'Ansem à manquer à l'appel au Jardin Radieux, et il réapparaît sous l'apparence de Xigbar dans le Monde qui n'existe pas, aux côtés du Jeune Xehanort et d'Ansem.\n\nC'est lui qui explique à Sora, avec une jubilation cruelle, qu'il n'a jamais été qu'un pion : l'examen de Maîtrise a été détourné pour faire de lui le treizième réceptacle de Xehanort. Il se révèle aussi l'un des plus fidèles membres de la nouvelle Organisation, tout en glissant à Sora que le garçon n'a rien d'un vrai porteur, raillerie qui prend un autre sens après Kingdom Hearts III.",
          "Braig, human once more, hurried to rejoin Xehanort. He is one of the rare apprentices of Ansem missing in Radiant Garden, and he reappears as Xigbar in The World That Never Was, beside Young Xehanort and Ansem.\n\nHe is the one who explains to Sora, with cruel glee, that he was never more than a pawn: the Mark of Mastery exam was hijacked to make him Xehanort's thirteenth vessel. He also proves one of the most loyal members of the new Organization, while sneering that the boy is nothing like a real wielder, a taunt that takes on new meaning after Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Xigbar croise Sora à plusieurs reprises au cours de sa quête, toujours pour semer le doute, puis affronte Sora, Riku et Mickey au Nécropole des Keyblades avec le Riku des ténèbres. Vaincu, il se laisse tomber du haut d'une falaise en riant, refusant de se battre jusqu'à sa dissolution, ce qui intrigue les héros.\n\nAprès la défaite de Xehanort, il réapparaît sur le champ de bataille, ramasse la Keyblade Sans Nom tombée des mains de son ancien maître et révèle son identité : il est Luxu, et Xehanort n'a jamais été que l'un des porteurs successifs de cette Keyblade. Il fait ensuite surgir la boîte noire et fait revenir les Prophètes Ira, Aced, Invi et Gula. L'épilogue de Re Mind les montre réunis, Luxu constatant l'absence d'Ava, tandis que le Maître des Maîtres est annoncé.",
          "Xigbar crosses Sora's path several times during his quest, always to sow doubt, then fights Sora, Riku and Mickey at the Keyblade Graveyard alongside Dark Riku. Defeated, he lets himself fall from a cliff, laughing, refusing to fight until he dissolves, which puzzles the heroes.\n\nAfter Xehanort's defeat he reappears on the battlefield, picks up the No Name Keyblade fallen from his former master's hands and reveals his identity: he is Luxu, and Xehanort was only ever one of that Keyblade's successive wielders. He then produces the black box and brings back the Foretellers Ira, Aced, Invi and Gula. The Re Mind epilogue shows them gathered, Luxu noting Ava's absence, while the Master of Masters is announced.",
        ),
      },
    ],
    trivia: [
      L("James Patrick Stuart double Xigbar et Luxu en anglais depuis Kingdom Hearts II ; Hōchū Ōtsuka est sa voix japonaise.", "James Patrick Stuart has voiced Xigbar and Luxu in English since Kingdom Hearts II; Hōchū Ōtsuka is his Japanese voice."),
      L("Xigbar est le seul membre de l'Organisation XIII à apparaître, sous une forme ou une autre, dans Birth by Sleep, Kingdom Hearts II, 358/2 Days, Dream Drop Distance, Kingdom Hearts χ et Kingdom Hearts III.", "Xigbar is the only Organization XIII member to appear, in one form or another, in Birth by Sleep, Kingdom Hearts II, 358/2 Days, Dream Drop Distance, Kingdom Hearts χ and Kingdom Hearts III."),
      L("Le tic de langage « Comme si ! » (« As if! ») accompagne le personnage depuis sa première apparition.", "The verbal tic “As if!” has accompanied the character since his first appearance."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Luxu", url: "https://kingdomhearts.fandom.com/wiki/Luxu" },
      { label: "Kingdom Hearts Wiki — Xigbar", url: "https://kingdomhearts.fandom.com/wiki/Xigbar" },
    ],
  },

  // ─────────────────────────── Maître des Maîtres ───────────────────────────
  "master-of-masters": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Le Maître des Maîtres est le mentor des six apprentis de l'Âge des Fées, et l'auteur du Livre des Prophéties, qui décrit l'avenir jusqu'à la Guerre des Keyblades. Toujours dissimulé sous un manteau noir à capuche, le même que portera plus tard l'Organisation XIII, il n'a ni visage ni nom connus. Sa Keyblade, Sans Nom, porte un œil qui lui permet de voir tout ce qu'elle observera dans le futur, ce qui explique sa connaissance de l'avenir.\n\nSon caractère contraste avec sa gravité supposée : il est bavard, facétieux, théâtral, et semble se réjouir des situations qu'il provoque. Il confie à cinq apprentis, Ira, Aced, Invi, Gula et Ava, la direction des Unions, désigne parmi eux un traître qu'il a lui-même inventé, et donne à Luxu la boîte noire et la mission d'observer. Puis il disparaît. Sa réapparition, annoncée dans Kingdom Hearts III et esquissée dans Melody of Memory, est le point de départ de la nouvelle saga.",
          "The Master of Masters is the mentor of the six apprentices of the Age of Fairy Tales, and the author of the Book of Prophecies, which describes the future up to the Keyblade War. Always hidden beneath a hooded black coat, the same one Organization XIII will later wear, he has neither a known face nor a name. His Keyblade, No Name, bears an eye that lets him see everything it will observe in the future, which explains his knowledge of what is to come.\n\nHis manner contrasts with his supposed gravity: he is talkative, playful, theatrical, and seems to delight in the situations he creates. He entrusts five apprentices, Ira, Aced, Invi, Gula and Ava, with leading the Unions, names among them a traitor he himself invented, and gives Luxu the black box and the mission to observe. Then he vanishes. His return, announced in Kingdom Hearts III and hinted at in Melody of Memory, is the starting point of the new saga.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Back Cover, le film inclus dans Kingdom Hearts HD 2.8, raconte ses derniers jours à Daybreak Town. Le Maître des Maîtres remet à chacun des cinq Prophètes une copie du Livre des Prophéties et un rôle : Ira dirigera, Aced sera son second, Invi observera, Gula cherchera le traître, Ava réunira les Dandelions, ceux qui survivront à la guerre. À Luxu, il confie la boîte noire et sa Keyblade, avec l'ordre de partir.\n\nIl explique à Luxu que l'œil de la Keyblade, en enregistrant le futur, est la source même du Livre des Prophéties, puis disparaît sans laisser d'explication. Sa disparition et la mention d'un traître provoquent la méfiance entre les Prophètes, qui dégénère en Guerre des Keyblades. Dans Union χ, les Dandelions découvrent plus tard que tout cela était prévu, et que le Maître attend son heure pour revenir.",
          "Back Cover, the film included in Kingdom Hearts HD 2.8, recounts his last days in Daybreak Town. The Master of Masters gives each of the five Foretellers a copy of the Book of Prophecies and a role: Ira will lead, Aced will be his second, Invi will observe, Gula will look for the traitor, Ava will gather the Dandelions, those who will survive the war. To Luxu he entrusts the black box and his Keyblade, with orders to leave.\n\nHe explains to Luxu that the Keyblade's eye, by recording the future, is the very source of the Book of Prophecies, then vanishes without explanation. His disappearance and the mention of a traitor breed distrust among the Foretellers, which degenerates into the Keyblade War. In Union χ, the Dandelions later discover that all of this was planned, and that the Master is biding his time to return.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Le Maître des Maîtres n'apparaît pas en personne dans Kingdom Hearts III, mais l'épilogue lui est entièrement consacré. Après la défaite de Xehanort, Luxu révèle que le vieux Maître n'était que l'un des porteurs successifs de la Keyblade Sans Nom, et que sa quête de la χ-blade servait un dessein plus ancien. Il fait apparaître la boîte noire et rappelle les Prophètes.\n\nDans l'épilogue de Re Mind, Ira, Aced, Invi et Gula se retrouvent autour de Luxu, qui s'étonne de l'absence d'Ava et évoque le rôle qu'a joué le Maître pendant tout ce temps. Luxu a rempli sa mission : le Maître va pouvoir revenir.",
          "The Master of Masters does not appear in person in Kingdom Hearts III, but the epilogue is entirely devoted to him. After Xehanort's defeat, Luxu reveals that the old Master was only one of the successive wielders of the No Name Keyblade, and that his quest for the χ-blade served an older design. He produces the black box and recalls the Foretellers.\n\nIn the Re Mind epilogue, Ira, Aced, Invi and Gula gather around Luxu, who wonders at Ava's absence and speaks of the part the Master has played all along. Luxu has completed his mission: the Master can now return.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
          "Melody of Memory se termine sur une scène qui prépare Kingdom Hearts IV. Alors que Riku s'apprête à partir pour le monde inconnu où Sora pourrait se trouver, et que Yozora observe la ville de Quadratum, une silhouette en manteau noir apparaît dans cette même ville : le Maître des Maîtres, qui contemple les lieux avec sa désinvolture coutumière.\n\nCette apparition, la première hors de l'Âge des Fées, confirme que le Maître a franchi les frontières entre les mondes et qu'il agit désormais dans la « réalité » de Quadratum. Elle fait de lui l'antagoniste présumé de la nouvelle saga, dont Kingdom Hearts IV constituera le premier chapitre.",
          "Melody of Memory ends on a scene that sets up Kingdom Hearts IV. As Riku prepares to leave for the unknown world where Sora might be, and Yozora watches the city of Quadratum, a figure in a black coat appears in that same city: the Master of Masters, surveying the place with his usual nonchalance.\n\nThat appearance, the first outside the Age of Fairy Tales, confirms that the Master has crossed the boundaries between worlds and now acts within the “reality” of Quadratum. It makes him the presumed antagonist of the new saga, of which Kingdom Hearts IV will be the first chapter.",
        ),
      },
    ],
    trivia: [
      L("Ray Chase le double en anglais ; Tomokazu Sugita, sa voix japonaise, lui donne son ton railleur caractéristique.", "Ray Chase voices him in English; Tomokazu Sugita, his Japanese voice, gives him his trademark mocking tone."),
      L("Son manteau noir est identique à celui que l'Organisation XIII adoptera des siècles plus tard.", "His black coat is identical to the one Organization XIII will adopt centuries later."),
      L("Son visage n'a jamais été montré ; seuls ses gestes exubérants et sa voix le caractérisent.", "His face has never been shown; only his exuberant gestures and his voice characterise him."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Master of Masters", url: "https://kingdomhearts.fandom.com/wiki/Master_of_Masters" },
    ],
  },

  // ─────────────────────────── Strelitzia ───────────────────────────
  "strelitzia": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Strelitzia est une porteuse de Keyblade de Daybreak Town, à l'Âge des Fées, reconnaissable à ses cheveux roux orangé et à sa robe claire. Elle porte le nom d'une fleur, l'oiseau de paradis, comme son frère Lauriam, futur Marluxia. Timide et solitaire, elle observe de loin le personnage du joueur, qu'elle admire sans oser lui adresser la parole, et rêve de l'inviter à rejoindre les Dandelions.\n\nChoisie par Ava pour devenir l'un des cinq nouveaux chefs d'Union après la Guerre des Keyblades, elle n'en aura jamais l'occasion : elle est tuée avant même le début de la guerre, et son rôle est usurpé par Ventus. Sa mort, mystère central de Union χ, structure la quête de Lauriam et lie l'intrigue de l'Âge des Fées à celle de l'Organisation XIII. Son retour annoncé dans Kingdom Hearts IV fait d'elle l'un des personnages les plus attendus de la nouvelle saga.",
          "Strelitzia is a Keyblade wielder of Daybreak Town, in the Age of Fairy Tales, recognisable by her orange-red hair and light dress. She is named after a flower, the bird of paradise, like her brother Lauriam, the future Marluxia. Shy and solitary, she watches the Player from afar, admiring them without daring to speak, and dreams of inviting them to join the Dandelions.\n\nChosen by Ava to become one of the five new Union leaders after the Keyblade War, she never gets the chance: she is killed before the war even begins, and her role is usurped by Ventus. Her death, the central mystery of Union χ, shapes Lauriam's quest and ties the plot of the Age of Fairy Tales to that of Organization XIII. Her announced return in Kingdom Hearts IV makes her one of the most anticipated characters of the new saga.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Peu avant la Guerre des Keyblades, Ava remet à Strelitzia le livre des règles des Dandelions et lui annonce qu'elle sera l'un des nouveaux chefs d'Union. Strelitzia veut d'abord retrouver le personnage du joueur pour lui proposer de rejoindre les Dandelions ; elle le suit jusqu'à un bâtiment de Daybreak Town où elle est attaquée par-derrière et tuée, sans que son agresseur soit montré.\n\nLe livre des règles est récupéré par l'assassin, et Ventus prend sa place parmi les chefs d'Union. Bien plus tard, l'enquête de Lauriam et d'Elrena, puis les aveux des ténèbres qui habitaient Ventus, révèlent que le garçon, possédé, a frappé sans le savoir. Union χ laisse en suspens le devenir de son cœur, question que Kingdom Hearts IV devra éclaircir.",
          "Shortly before the Keyblade War, Ava hands Strelitzia the Dandelions' rulebook and tells her she will be one of the new Union leaders. Strelitzia first wants to find the Player to invite them to join the Dandelions; she follows them to a building in Daybreak Town where she is attacked from behind and killed, her assailant unseen.\n\nThe rulebook is taken by the killer, and Ventus takes her place among the Union leaders. Much later, the investigation by Lauriam and Elrena, then the confession of the darkness that inhabited Ventus, reveal that the possessed boy struck without knowing it. Union χ leaves the fate of her heart unresolved, a question Kingdom Hearts IV will have to clarify.",
        ),
      },
      {
        game: "kingdom-hearts-iv",
        text: L(
          "La bande-annonce de Kingdom Hearts IV, dévoilée en 2022 pour le vingtième anniversaire de la saga, montre Sora se réveillant dans un appartement de Quadratum, accueilli par une jeune femme rousse. Tetsuya Nomura a identifié cette jeune femme comme Strelitzia, ce qui fait d'elle le premier personnage de l'Âge des Fées à rejoindre l'histoire de Sora en personne.\n\nLa nature de sa présence à Quadratum, monde présenté comme une « réalité » distincte des mondes de Kingdom Hearts, n'a pas été expliquée. Elle rejoint ainsi les fils laissés en suspens par Union χ et Melody of Memory : le sort de son cœur, l'ambition de Lauriam et le rôle du Maître des Maîtres dans cette ville.",
          "The Kingdom Hearts IV trailer, revealed in 2022 for the saga's twentieth anniversary, shows Sora waking in a Quadratum apartment, greeted by a red-haired young woman. Tetsuya Nomura identified the young woman as Strelitzia, making her the first character of the Age of Fairy Tales to join Sora's story in person.\n\nThe nature of her presence in Quadratum, a world presented as a “reality” distinct from the worlds of Kingdom Hearts, has not been explained. She thus picks up the threads left hanging by Union χ and Melody of Memory: the fate of her heart, Lauriam's ambition and the role of the Master of Masters in that city.",
        ),
      },
    ],
    trivia: [
      L("Le strelitzia, ou oiseau de paradis, est une fleur : Lauriam, Elrena et Strelitzia portent tous des noms liés aux fleurs.", "Strelitzia, or bird of paradise, is a flower: Lauriam, Elrena and Strelitzia all bear flower-related names."),
      L("Strelitzia n'a jamais été jouable ni affrontée : elle n'apparaît que dans des scènes cinématiques.", "Strelitzia has never been playable or fought: she appears only in cutscenes."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Strelitzia", url: "https://kingdomhearts.fandom.com/wiki/Strelitzia" },
    ],
  },
};
