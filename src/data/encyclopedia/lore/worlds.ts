import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des mondes de la saga : origine (œuvre Disney adaptée, particularités),
 * puis récit de chaque visite, jeu par jeu. Les clés sont les slugs des entrées de worlds.ts et worlds-more.ts.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Îles du Destin ───────────────────────────
  "destiny-islands": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Les Îles du Destin sont un monde original de la saga, sans modèle Disney : un petit archipel tropical composé d'une île principale, où vivent les habitants, et d'une île de jeu où les enfants passent leurs journées. C'est cette seconde île que le joueur explore : la plage, la cabane et le ponton, la petite île au paopu rattachée par un pont de bois, et la Grotte Secrète, tapissée de dessins d'enfants, où se cache une porte sans serrure.\n\nLe fruit paopu, dont la légende veut qu'il lie pour toujours les destins de ceux qui le partagent, est le symbole du monde et du trio Sora, Riku et Kairi. Les Îles du Destin sont aussi le monde natal de Xehanort, qui les a quittées adolescent pour Scala ad Caelum. Terre d'ouverture et de conclusion, elles encadrent presque chaque épisode de la saga.",
          "Destiny Islands is an original world of the series, with no Disney model: a small tropical archipelago made up of a main island where people live and a play island where the children spend their days. That second island is the one the player explores: the beach, the shack and the pier, the tiny paopu islet reached by a wooden bridge, and the Secret Place, covered in children's drawings, where a keyhole-less door is hidden.\n\nThe paopu fruit, said to bind forever the destinies of those who share it, is the symbol of the world and of the trio Sora, Riku and Kairi. Destiny Islands is also the home world of Xehanort, who left it as a teenager for Scala ad Caelum. A land of openings and endings, it frames almost every episode of the series.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Dix ans avant le premier jeu, Terra fait halte sur les Îles du Destin au cours de sa quête et y rencontre deux petits garçons, Sora et Riku. Frappé par la détermination de Riku, qui rêve déjà de voir d'autres mondes, Terra lui fait toucher sa Keyblade, ce qui revient à lui transmettre le droit d'en manier une un jour. Aqua passe peu après, remarque le lien entre les deux enfants et demande à Sora de veiller sur Riku s'il venait à s'égarer dans les ténèbres.\n\nÀ la fin de l'aventure, le cœur brisé de Ventus quitte le Nécropole des Keyblades et trouve refuge dans celui de Sora, sur la plage des îles : le garçon, qui ne comprend pas sa tristesse soudaine, en est réconforté par Riku. Ce moment, inaperçu de tous, explique pourquoi Sora deviendra l'héritier d'une Keyblade.",
          "Ten years before the first game, Terra stops on Destiny Islands during his quest and meets two little boys, Sora and Riku. Struck by the determination of Riku, who already dreams of seeing other worlds, Terra lets him touch his Keyblade, which amounts to passing him the right to wield one someday. Aqua comes by shortly afterwards, notices the bond between the two children and asks Sora to look after Riku should he ever stray into darkness.\n\nAt the end of the adventure, Ventus's broken heart leaves the Keyblade Graveyard and takes shelter in Sora's, on the islands' beach: the boy, who cannot understand his sudden sadness, is comforted by Riku. That moment, unnoticed by everyone, explains why Sora will become the heir to a Keyblade.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Riku et Kairi construisent un radeau pour partir découvrir d'autres mondes. Ces journées de jeu, de duels à l'épée de bois et de collecte de provisions servent de didacticiel, jusqu'à la nuit où une tempête s'abat sur l'île. Sora y découvre Riku qui s'abandonne aux ténèbres, reçoit la Chaîne Royale et affronte un Darkside avant que le monde entier ne soit englouti ; Riku avait ouvert la porte de la Grotte Secrète.\n\nLes Îles du Destin réapparaissent à la Fin du Monde sous forme d'un fragment flottant : Sora y retrouve une Kairi de mémoire qui lui confie son porte-bonheur, et Ansem y révèle que la porte de la grotte menait au cœur du monde. Une fois Kingdom Hearts refermé, le monde est restauré et Kairi se retrouve seule sur la plage, tandis que Sora reste de l'autre côté, avec la promesse de revenir.",
          "Sora, Riku and Kairi build a raft to set out and discover other worlds. Those days of play, wooden-sword duels and gathering supplies serve as the tutorial, until the night a storm hits the island. Sora finds Riku giving himself over to darkness, receives the Kingdom Key and fights a Darkside before the whole world is swallowed; Riku had opened the door in the Secret Place.\n\nDestiny Islands returns at the End of the World as a drifting fragment: there Sora meets a memory of Kairi who entrusts him with her lucky charm, and Ansem reveals that the cave's door led to the heart of the world. Once Kingdom Hearts is shut, the world is restored and Kairi finds herself alone on the beach, while Sora stays on the far side with a promise to come back.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, les Îles du Destin sont recréées à partir des souvenirs de Sora comme avant-dernier étage. Le monde est vide de ses habitants : Sora y rencontre Naminé, qu'il croit être son amie d'enfance grâce aux souvenirs qu'elle a réécrits, et découvre que le vrai visage de ses souvenirs, celui de Kairi, s'efface. Le Réplica de Riku, persuadé d'être le véritable Riku, se dresse contre lui pour protéger Naminé, avant que Larxène et Marluxia ne révèlent leur plan.\n\nDans l'histoire de Riku, l'étage des Îles du Destin est celui où le jeune homme affronte ses ténèbres les plus intimes : il y retrouve son île dévastée par la tempête, se remémore sa trahison et croise le Darkside né cette nuit-là. Il en ressort décidé à emprunter la voie de l'aube.",
          "In Castle Oblivion, Destiny Islands is recreated from Sora's memories as the second-to-last floor. The world is empty of its inhabitants: there Sora meets Naminé, whom he believes to be his childhood friend thanks to the memories she has rewritten, and finds that the true face of his memories, Kairi's, is fading. Riku Replica, convinced he is the real Riku, stands against him to protect Naminé, before Larxene and Marluxia reveal their plan.\n\nIn Riku's story, the Destiny Islands floor is where he faces his most intimate darkness: he finds his island wrecked by the storm, recalls his betrayal and meets the Darkside born that night. He leaves it determined to walk the road to dawn.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Les Îles du Destin ne sont pas explorables dans Kingdom Hearts II, mais elles y servent de fil rouge. Kairi y attend le retour de ses amis pendant un an, sans se souvenir du nom de Sora jusqu'à ce que Roxas, dans la Cité du Crépuscule virtuelle, ne le lui rappelle par le lien de leurs cœurs. Elle rédige alors une lettre qu'elle jette à la mer, avant d'être enlevée par Axel puis Saïx.\n\nÀ la fin du jeu, Sora et Riku, bloqués sur la plage sombre du Domaine des Ténèbres, retrouvent cette lettre dans une bouteille, et sa lecture ouvre la porte de la lumière. Ils réapparaissent dans la mer des Îles du Destin, accueillis par Kairi, Donald, Dingo et le roi Mickey. La scène finale montre le trio dans la Grotte Secrète, où Pluto apporte une nouvelle lettre du roi.",
          "Destiny Islands cannot be explored in Kingdom Hearts II, but it runs through the game as a thread. Kairi waits there for a year for her friends to return, unable to recall Sora's name until Roxas, in the virtual Twilight Town, reminds her of it through the bond between their hearts. She then writes a letter that she throws into the sea, before being kidnapped by Axel and then Saïx.\n\nAt the end of the game, Sora and Riku, stranded on the dark shore of the Realm of Darkness, find that letter in a bottle, and reading it opens the door to light. They reappear in the sea off Destiny Islands, welcomed by Kairi, Donald, Goofy and King Mickey. The final scene shows the trio in the Secret Place, where Pluto brings a new letter from the king.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Dans le journal numérisé de Jiminy, les Îles du Destin sont le premier monde que Sora Données doit explorer. Mickey, Donald, Dingo et Jiminy y expédient une copie de Sora pour comprendre l'origine des bugs qui corrompent le journal : des blocs sombres obstruent l'île, et Sora doit les détruire pour progresser, en revivant la nuit de la tempête et le combat contre le Darkside.\n\nC'est aussi sur ces îles reconstituées que Sora entrevoit pour la première fois un mystérieux encapuchonné, qui se révélera être le Riku Données. Le monde est restauré une fois débogué, mais il annonce le fonctionnement de tout le jeu : chaque monde du journal cache une porte secrète et un morceau de la vérité sur les mots gravés à l'ouverture, « leur souffrance sera apaisée ».",
          "In Jiminy's digitised journal, Destiny Islands is the first world Data Sora must explore. Mickey, Donald, Goofy and Jiminy send a copy of Sora there to understand the origin of the bugs corrupting the journal: dark blocks clog the island, and Sora has to destroy them to move on, reliving the night of the storm and the fight against the Darkside.\n\nIt is also on these recreated islands that Sora first glimpses a mysterious hooded figure, who will turn out to be Data Riku. The world is restored once debugged, but it sets up how the whole game works: every world in the journal hides a secret door and a piece of the truth behind the words that opened it, “their hurting will be mended”.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Le prologue montre les jeunes Sora et Riku assis face à la mer, discutant d'un voyage à venir, puis, la nuit de la tempête, Sora prêt à sauter du radeau vers l'inconnu. Pour commencer l'examen de Maîtrise, Yen Sid renvoie les deux amis précisément dans cette version des Îles du Destin, celle du passé au moment de leur destruction, afin qu'ils y plongent dans les Mondes Endormis.\n\nSora et Riku se séparent sur la plage submergée, chacun aspiré par un passage différent, et ne se retrouveront qu'à la fin de l'aventure. Le Palier de l'Éveil et cette île engloutie servent ainsi de point de départ à chaque plongée, rappelant que tout l'examen se joue dans les rêves de Sora, où Riku n'a fait que suivre son ami.",
          "The prologue shows young Sora and Riku sitting by the sea talking of a journey to come, then, on the night of the storm, Sora ready to jump from the raft into the unknown. To begin the Mark of Mastery exam, Yen Sid sends the two friends back into that very version of Destiny Islands, the one of the past at the moment of its destruction, so that they can dive into the Sleeping Worlds from there.\n\nSora and Riku part on the flooded beach, each taken by a different Dream portal, and will not meet again until the end of the adventure. The Dive to the Heart and that sunken island thus serve as the starting point of each dive, a reminder that the whole exam takes place within Sora's dreams, where Riku only followed his friend.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Les Îles du Destin restent hors de portée pendant la majeure partie de Kingdom Hearts III, mais elles sont partout dans ses souvenirs : Sora y pense au moment de choisir sa voie, et les rapports de Xehanort rappellent que le vieux Maître a grandi sur cette île avant de la quitter, incapable d'en supporter l'étroitesse. Riku y retourne en rêve, et c'est sur cette plage que Sora, en esprit, sent Kairi l'appeler.\n\nAprès la victoire de Scala ad Caelum, Sora annonce qu'il va utiliser le Pouvoir de l'éveil pour ramener Kairi, malgré les avertissements. L'épilogue montre tous les Gardiens de la Lumière réunis sur l'île au paopu : Terra, Aqua et Ventus, Roxas, Xion et Axel, Naminé et le Réplica de Riku, Mickey, Donald et Dingo. Sora est assis avec Kairi sur l'arbre courbé... puis disparaît sous ses yeux, sa réunion accomplie mais son propre prix payé.",
          "Destiny Islands stays out of reach for most of Kingdom Hearts III, yet it is everywhere in its memories: Sora thinks of it when choosing his path, and Xehanort's reports recall that the old Master grew up on that island before leaving it, unable to bear its smallness. Riku returns there in a dream, and it is on that beach that Sora, in spirit, feels Kairi calling him.\n\nAfter the victory at Scala ad Caelum, Sora announces that he will use the power of waking to bring Kairi back, despite the warnings. The epilogue shows every Guardian of Light gathered on the paopu islet: Terra, Aqua and Ventus, Roxas, Xion and Axel, Naminé and Riku Replica, Mickey, Donald and Goofy. Sora sits with Kairi on the bent tree... and then fades before her eyes, the reunion complete but his own price paid.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, デスティニーアイランド (Destiny Island), est au singulier, alors que les versions occidentales parlent des Îles au pluriel.", "The Japanese name, デスティニーアイランド (Destiny Island), is singular, while Western versions use the plural Islands."),
      L("La chanson « Dearly Beloved » et le thème des Îles du Destin sont parmi les premières mélodies composées par Yoko Shimomura pour la saga.", "“Dearly Beloved” and the Destiny Islands theme are among the first melodies Yoko Shimomura composed for the series."),
      L("L'île principale, où vivent les familles, n'est visible qu'en cinématique et n'a jamais été explorable.", "The main island, where the families live, is only seen in cutscenes and has never been explorable."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Destiny Islands", url: "https://kingdomhearts.fandom.com/wiki/Destiny_Islands" },
    ],
  },

  // ─────────────────────────── Ville de Traverse ───────────────────────────
  "traverse-town": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Ville de Traverse est un monde original, imaginé comme un refuge : une petite ville nocturne aux toits pentus, aux ruelles pavées et aux enseignes de néon, qui accueille ceux dont le monde a été englouti par les ténèbres. Elle se divise en trois quartiers successifs, du Premier au Troisième District, auxquels s'ajoutent la maison de Merlin, accessible par une caverne, et l'atelier de synthèse des Mogs au-dessus de la boutique d'accessoires.\n\nSon esthétique, à mi-chemin entre l'Europe et le Japon, marque le premier contact du joueur avec les personnages de Final Fantasy transposés dans l'univers : Léon, Yuffie, Aerith et Cid y ont trouvé asile après la chute de leur monde. La ville existe tant que des mondes sont perdus : elle disparaît quand ils sont restaurés, mais peut renaître dans les rêves.",
          "Traverse Town is an original world conceived as a refuge: a small night-time town of steep roofs, cobbled alleys and neon signs that takes in those whose world was swallowed by darkness. It is divided into three successive districts, from the First to the Third District, to which are added Merlin's house, reached through a cavern, and the Moogles' synthesis workshop above the accessory shop.\n\nIts look, halfway between Europe and Japan, marks the player's first contact with the Final Fantasy characters transposed into the universe: Leon, Yuffie, Aerith and Cid found shelter there after the fall of their world. The town exists as long as worlds are lost: it vanishes when they are restored, but can be reborn in dreams.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora s'éveille dans une ruelle de la Ville de Traverse après la destruction de son île. Il y découvre les Sans-cœur, rencontre Léon et Yuffie, qui lui expliquent que la Keyblade attire les monstres, et Aerith, qui raconte à Donald et Dingo les recherches d'Ansem sur les ténèbres. Le combat contre l'Armure Gardienne dans le Troisième District scelle la rencontre du trio, qui quitte la ville en vaisseau gummi construit par Cid.\n\nSora y revient régulièrement : c'est la base de son voyage, où Cid installe les blocs de navigation, où Merlin et la Fée Marraine enseignent la magie et les invocations, et où les Mogs synthétisent objets et armes. Un retour majeur survient quand Sora y retrouve brièvement Riku, qui repart avec Maléfique, puis découvre la serrure du monde derrière la fresque du Deuxième District. Le rapport d'Ansem se rassemble peu à peu chez Léon, préparant la route vers la Forteresse Oubliée.",
          "Sora wakes in a back alley of Traverse Town after his island is destroyed. There he discovers the Heartless, meets Leon and Yuffie, who explain that the Keyblade draws the monsters, and Aerith, who tells Donald and Goofy about Ansem's research on darkness. The fight against the Guard Armor in the Third District seals the trio's meeting, and they leave town in a gummi ship built by Cid.\n\nSora keeps coming back: it is the base of his journey, where Cid installs navigation gummis, where Merlin and the Fairy Godmother teach magic and summons, and where the Moogles synthesise items and weapons. A major return comes when Sora briefly meets Riku again, who leaves with Maleficent, then finds the world's keyhole behind the mural of the Second District. The Ansem Reports are gradually gathered at Leon's, paving the way to Hollow Bastion.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "La Ville de Traverse est le premier monde de souvenirs que Sora traverse au Manoir Oblivion, produit par la carte que lui remet Marluxia à l'entrée. Le joueur y apprend le système de cartes et de salles. Sora retrouve Léon, Yuffie, Aerith et Cid, mais ces figures tirées de sa mémoire ne se souviennent pas de lui, tout en ayant l'impression de le connaître ; Aerith pressent même que quelque chose cloche dans les souvenirs qui les entourent.\n\nL'Armure Gardienne est de nouveau vaincue dans le Troisième District, et Sora entend pour la première fois parler de Naminé. Dans l'histoire de Riku, la ville est l'un des étages du sous-sol, où le jeune homme apprend à manier ses ténèbres, guidé par la voix du roi Mickey.",
          "Traverse Town is the first memory world Sora goes through in Castle Oblivion, produced by the card Marluxia hands him at the entrance. The player learns the card and room system there. Sora meets Leon, Yuffie, Aerith and Cid again, but these figures drawn from his memory do not remember him while feeling they know him; Aerith even senses that something is wrong with the memories around them.\n\nThe Guard Armor is defeated once more in the Third District, and Sora hears the name Naminé for the first time. In Riku's story, the town is one of the basement floors, where he learns to wield his darkness, guided by King Mickey's voice.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Dans le journal de Jiminy, la Ville de Traverse Données est infestée de bugs. Sora Données y retrouve Cid, Léon, Yuffie et Aerith en version numérique et constate avec eux que des blocs de données obstruent les districts et perturbent la ville. Sora explore les quartiers, corrige les anomalies et affronte à nouveau l'Armure Gardienne.\n\nCe monde sert surtout à installer le système de progression du jeu, et à faire apparaître le mystérieux Riku Données, qui explique être une incarnation du journal lui-même. C'est lui qui entraîne Sora dans le débogage successif des mondes et qui, plus tard, révèle que les bugs proviennent d'un intrus venu de l'extérieur : Maléfique et Pat.",
          "In Jiminy's journal, Data Traverse Town is infested with bugs. Data Sora finds digital versions of Cid, Leon, Yuffie and Aerith there and sees with them that data blocks are clogging the districts and disrupting the town. Sora explores the districts, fixes the anomalies and fights the Guard Armor once more.\n\nThis world mainly sets up the game's progression system, and introduces the mysterious Data Riku, who explains he is an embodiment of the journal itself. He is the one who leads Sora through the successive debugging of the worlds and who later reveals that the bugs come from an intruder from outside: Maleficent and Pete.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Disparue une fois les mondes restaurés, la Ville de Traverse renaît comme Monde Endormi et devient le premier monde de l'examen de Maîtrise. Sora et Riku y arrivent séparément et y rencontrent les Avale-Rêves, ainsi que des adolescents venus de Shibuya : Neku, Shiki, Joshua, Beat et Rhyme, personnages de The World Ends with You, pris dans un « Jeu » qui les oppose deux par deux. Joshua révèle que la ville a été recréée par les rêves de ceux qui y ont vécu.\n\nSora y apprend le Flowmotion et le système de liens avec ses Esprits, avant de vaincre un Avale-Rêves géant dans le Troisième District. Plus tard, une seconde visite ouvre les Quatrième et Cinquième Districts, où se trouve la grande poste. C'est aussi là que le jeune Xehanort et un mystérieux Riku encapuchonné commencent à croiser la route de Sora.",
          "Gone once the worlds were restored, Traverse Town is reborn as a Sleeping World and becomes the first world of the Mark of Mastery exam. Sora and Riku arrive there separately and meet the Dream Eaters, as well as teenagers from Shibuya: Neku, Shiki, Joshua, Beat and Rhyme, characters from The World Ends with You, caught in a “Game” that pits them against each other in pairs. Joshua reveals that the town was recreated by the dreams of those who once lived there.\n\nSora learns Flowmotion and the link system with his Spirits there, before defeating a giant Dream Eater in the Third District. A second visit later opens the Fourth and Fifth Districts, home to the big post office. It is also there that Young Xehanort and a mysterious hooded Riku begin crossing Sora's path.",
        ),
      },
    ],
    trivia: [
      L("Dream Drop Distance est le premier crossover officiel entre Kingdom Hearts et The World Ends with You, autre série de Tetsuya Nomura.", "Dream Drop Distance is the first official crossover between Kingdom Hearts and The World Ends with You, another Tetsuya Nomura series."),
      L("Le thème musical de la ville, « Traverse Town », reprend un motif que l'on retrouve dans plusieurs mondes-refuges de la saga.", "The town's musical theme, “Traverse Town”, uses a motif that returns in several refuge worlds of the series."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Traverse Town", url: "https://kingdomhearts.fandom.com/wiki/Traverse_Town" },
    ],
  },

  // ─────────────────────────── Jardin Radieux / Forteresse Oubliée ───────────────────────────
  "radiant-garden": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Monde original au cœur de la mythologie de la saga, le Jardin Radieux est une cité de fontaines, de jardins fleuris et de canaux, dominée par le château d'Ansem le Sage. Sa chute dans les ténèbres, provoquée par les expériences de ses apprentis sur le cœur, le transforme en Forteresse Oubliée : un château démesuré planté au milieu de cascades qui remontent vers le ciel, aux salles inspirées de Sleeping Beauty et aux mécanismes de la Belle et la Bête.\n\nIl est le monde natal de Kairi, de Léon, de Yuffie, d'Aerith et de Cid, mais aussi d'Isa et de Lea, et le lieu de naissance des Similis de l'Organisation XIII. Selon les épisodes, il porte l'un ou l'autre nom : Jardin Radieux dans Birth by Sleep et après sa reconstruction, Forteresse Oubliée pendant sa période de ténèbres.",
          "An original world at the heart of the series' mythology, Radiant Garden is a city of fountains, flowered gardens and canals dominated by the castle of Ansem the Wise. Its fall into darkness, caused by his apprentices' experiments on the heart, turns it into Hollow Bastion: an oversized castle set among waterfalls flowing up towards the sky, with halls inspired by Sleeping Beauty and mechanisms from Beauty and the Beast.\n\nIt is the home world of Kairi, Leon, Yuffie, Aerith and Cid, but also of Isa and Lea, and the birthplace of Organization XIII's Nobodies. Depending on the game, it goes by one name or the other: Radiant Garden in Birth by Sleep and after its reconstruction, Hollow Bastion during its years of darkness.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Le Jardin Radieux est ici une ville prospère gouvernée par Ansem le Sage, entouré de ses apprentis, dont un amnésique recueilli sous le nom de Xehanort. Terra, Ventus et Aqua s'y retrouvent pour la première fois depuis leur départ et unissent leurs forces contre un Nescient géant, avant de se séparer sur un désaccord : Aqua reproche à Terra sa proximité avec les ténèbres.\n\nChacun y vit une rencontre décisive. Aqua protège une petite fille, Kairi, contre les Nescients, et l'enfant touche sa Keyblade, ce qui la liera un jour à une arme. Ventus croise Lea et Isa, deux garçons du quartier, et Terra affronte Braig, qui tient Maître Xehanort en otage et perd un œil dans l'échange. Le monde est aussi celui où Ienzo enfant est sauvé, et où le vrai visage de Xehanort se devine déjà.",
          "Radiant Garden is here a prosperous city ruled by Ansem the Wise, surrounded by his apprentices, including an amnesiac taken in under the name Xehanort. Terra, Ventus and Aqua meet there for the first time since setting out and join forces against a giant Unversed, before parting on a disagreement: Aqua reproaches Terra for his closeness to darkness.\n\nEach of them has a decisive encounter there. Aqua protects a little girl, Kairi, from the Unversed, and the child touches her Keyblade, which will one day tie her to a weapon. Ventus runs into Lea and Isa, two boys from the neighbourhood, and Terra fights Braig, who is holding Master Xehanort hostage and loses an eye in the exchange. It is also the world where a young Ienzo is rescued, and where Xehanort's true face can already be guessed.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "La Forteresse Oubliée est l'avant-dernier monde du premier jeu et le quartier général de Maléfique, qui y rassemble les Princesses de Cœur. Sora y retrouve la Bête, venue chercher Belle, et affronte Riku, qui lui reprend la Keyblade et le laisse avec une épée de bois. Sora la récupère en choisissant de protéger ses amis, puis bat Maléfique, transformée en dragon par la Keyblade des Cœurs que manie Riku, possédé par Ansem.\n\nDans la Grande Salle, Sora découvre Kairi privée de son cœur et comprend qu'il le porte en lui. Il se transperce avec la Keyblade des Cœurs pour la libérer, devenant brièvement un Sans-cœur avant que la lumière de Kairi ne le ramène. À son retour, la serrure du monde est scellée, et le trio retrouve Léon, Yuffie et Aerith dans la bibliothèque, où les derniers rapports d'Ansem désignent le Bout du Monde.",
          "Hollow Bastion is the second-to-last world of the first game and Maleficent's headquarters, where she gathers the Princesses of Heart. Sora meets the Beast there, come to find Belle, and faces Riku, who takes the Keyblade from him and leaves him with a wooden sword. Sora wins it back by choosing to protect his friends, then defeats Maleficent, turned into a dragon by the Keyblade of People's Hearts wielded by Riku, possessed by Ansem.\n\nIn the Grand Hall, Sora finds Kairi bereft of her heart and understands that he carries it within him. He pierces himself with the Keyblade of People's Hearts to free it, briefly becoming a Heartless before Kairi's light brings him back. On his return, the world's keyhole is sealed, and the trio meets Leon, Yuffie and Aerith in the library, where the last Ansem Reports point to the End of the World.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, la Forteresse Oubliée est l'un des derniers étages tirés des souvenirs de Sora. Il y retrouve la Bête et Belle, séparés par Maléfique, et revit sa victoire contre la sorcière transformée en dragon. Ce monde est aussi celui où les souvenirs de Sora ont été le plus altérés : Naminé y apparaît à la place de Kairi dans des scènes clés, et Larxène en profite pour le tourmenter.\n\nDans l'histoire de Riku, la Forteresse Oubliée est l'étage où il affronte de nouveau les fantômes de sa trahison : Maléfique sous forme de dragon, puis Ansem lui-même, qui tente de le posséder à nouveau. Riku résiste grâce à la carte du roi Mickey, prouvant qu'il peut utiliser les ténèbres sans leur appartenir.",
          "In Castle Oblivion, Hollow Bastion is one of the last floors drawn from Sora's memories. He finds the Beast and Belle there, separated by Maleficent, and relives his victory over the witch turned into a dragon. This world is also where Sora's memories have been most altered: Naminé appears in Kairi's place in key scenes, and Larxene uses it to torment him.\n\nIn Riku's story, Hollow Bastion is the floor where he confronts the ghosts of his betrayal again: Maleficent in dragon form, then Ansem himself, who tries to possess him once more. Riku resists thanks to King Mickey's card, proving he can use darkness without belonging to it.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, la Forteresse Oubliée est en reconstruction sous l'égide du Comité de Restauration, mené par Léon. Sora y retrouve ses amis dans la maison de Merlin, découvre l'existence de l'Organisation XIII et rencontre le roi Mickey, qui révèle que l'Ansem vaincu n'était que le Sans-cœur de Xehanort. Le château abrite l'ordinateur d'Ansem le Sage, porte vers l'Espace Paranoïaque et Tron.\n\nLors de la seconde visite, Maléfique lance des milliers de Sans-cœur sur la ville : c'est la bataille des Mille Sans-cœur, où Sora, aidé de Léon, Cloud, Yuffie et Tifa, repousse l'assaut tandis que Xemnas observe depuis les hauteurs. Le nom de Roxas y est prononcé par les membres de l'Organisation, et le monde retrouve son vrai nom, Jardin Radieux. Sephiroth attend Sora au fond du ravin, et l'atelier des Mogs du quartier y prépare l'Arme Ultime.",
          "A year later, Hollow Bastion is being rebuilt under the Restoration Committee led by Leon. Sora reunites with his friends in Merlin's house, learns of Organization XIII and meets King Mickey, who reveals that the defeated Ansem was only Xehanort's Heartless. The castle houses Ansem the Wise's computer, gateway to Space Paranoids and Tron.\n\nDuring the second visit, Maleficent unleashes thousands of Heartless on the town: this is the Battle of the 1,000 Heartless, where Sora, helped by Leon, Cloud, Yuffie and Tifa, holds back the assault while Xemnas watches from above. The name Roxas is spoken there by the Organization's members, and the world regains its true name, Radiant Garden. Sephiroth waits for Sora at the bottom of the ravine, and the Moogle shop in the district prepares the Ultima Weapon.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Le Jardin Radieux n'est pas explorable dans Kingdom Hearts III, mais il est au centre du volet scientifique de l'intrigue. Dans le laboratoire du château, Ienzo, Even et Ansem le Sage, ramené par Demyx, travaillent à recréer un corps pour Roxas ; Aeleus et Dilan les protègent. Ansem le Sage présente ses excuses à Sora par écran interposé et confie à Ienzo la tâche de transférer les données de Roxas dans un réplica.\n\nC'est dans ce laboratoire que Naminé retrouve son propre corps à la fin du jeu, et que les réplicas préparés par Even servent à ramener Roxas et Xion. Dans Re Mind, l'ordinateur du château donne accès aux combats de données de l'épisode Limitcut, et le Jardin Radieux devient ainsi le point de départ des affrontements les plus difficiles du jeu.",
          "Radiant Garden cannot be explored in Kingdom Hearts III, but it is at the centre of the plot's scientific side. In the castle laboratory, Ienzo, Even and Ansem the Wise, brought back by Demyx, work on recreating a body for Roxas; Aeleus and Dilan protect them. Ansem the Wise apologises to Sora over a screen link and entrusts Ienzo with transferring Roxas's data into a replica.\n\nIt is in that laboratory that Naminé gets a body of her own at the end of the game, and that the replicas prepared by Even are used to bring Roxas and Xion back. In Re Mind, the castle computer grants access to the data battles of the Limitcut episode, making Radiant Garden the starting point of the game's hardest fights.",
        ),
      },
    ],
    trivia: [
      L("Le nom Hollow Bastion est conservé tel quel dans certaines versions ; la version française lui donne le nom de Forteresse Oubliée.", "The name Hollow Bastion is kept as is in some versions; the French release renames it Forteresse Oubliée."),
      L("La Bataille des Mille Sans-cœur de Kingdom Hearts II est une démonstration technique : le moteur affiche réellement un millier d'ennemis.", "The Battle of the 1,000 Heartless in Kingdom Hearts II is a technical showcase: the engine actually displays a thousand enemies."),
      L("La ville de Kingdom Hearts II tire une partie de son style des paysages de Final Fantasy VII et VIII.", "The town in Kingdom Hearts II draws part of its style from the settings of Final Fantasy VII and VIII."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Radiant Garden", url: "https://kingdomhearts.fandom.com/wiki/Radiant_Garden" },
      { label: "Kingdom Hearts Wiki — Hollow Bastion", url: "https://kingdomhearts.fandom.com/wiki/Hollow_Bastion" },
    ],
  },

  // ─────────────────────────── Cité du Crépuscule ───────────────────────────
  "twilight-town": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Cité du Crépuscule est un monde original baigné d'un éternel coucher de soleil, situé entre lumière et ténèbres : c'est là que les Similis et les cœurs incomplets trouvent naturellement leur place. Ses lieux emblématiques sont la place de la gare et sa tour de l'horloge, d'où l'on regarde le soleil, la place du Tram, la Colline du Coucher de Soleil, la forêt et, au bout, le vieux manoir aux grilles closes.\n\nLa ville est indissociable de la glace à l'eau de mer, salée et sucrée, que partagent Roxas, Axel et Xion. Elle a inspiré aux développeurs un art de vivre paisible : concours de Struggle, petits boulots, sept merveilles à élucider. Elle abrite aussi le laboratoire secret de DiZ sous le manoir et une copie virtuelle d'elle-même, où Roxas passe son dernier été.",
          "Twilight Town is an original world bathed in an eternal sunset, set between light and darkness: it is where Nobodies and incomplete hearts naturally find their place. Its landmark spots are the station plaza and its clock tower, from which one watches the sun, the Tram Common, Sunset Hill, the woods and, at the end, the old mansion with its closed gates.\n\nThe town is inseparable from sea-salt ice cream, salty and sweet, shared by Roxas, Axel and Xion. It inspired the developers to depict a peaceful way of life: Struggle tournaments, odd jobs, seven wonders to solve. It also houses DiZ's secret laboratory under the mansion and a virtual copy of itself, where Roxas spends his last summer.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "La Cité du Crépuscule apparaît pour la première fois dans Chain of Memories, mais comme un monde que Sora n'a jamais visité : la carte lui est remise par Vexen, qui la tire des souvenirs enfouis de Sora, ceux liés à Roxas. Sora y ressent une étrange familiarité et y affronte Vexen une seconde fois, avant qu'Axel n'élimine le savant sous ses yeux pour l'empêcher de trop en dire.\n\nDans l'histoire de Riku, la Cité du Crépuscule est la dernière étape avant la sortie du manoir. Riku y rencontre DiZ, qui lui donne rendez-vous, et affronte pour la dernière fois son réplica, qui disparaît en se demandant où va le cœur d'une copie. C'est là que Riku choisit la voie de l'aube et reçoit de DiZ un manteau noir pour se protéger des ténèbres.",
          "Twilight Town first appears in Chain of Memories, but as a world Sora has never visited: the card is handed to him by Vexen, who draws it from Sora's buried memories, those tied to Roxas. Sora feels a strange familiarity there and fights Vexen a second time, before Axel eliminates the scientist before his eyes to stop him saying too much.\n\nIn Riku's story, Twilight Town is the last stop before leaving the castle. Riku meets DiZ there, who sets him a rendezvous, and fights his replica one last time; the copy fades while wondering where a replica's heart goes. It is there that Riku chooses the road to dawn and receives from DiZ a black coat to shield himself from darkness.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "La Cité du Crépuscule est le monde où Roxas naît, où l'Organisation le recrute et où il accomplit ses premières missions. Chaque journée s'achève sur la tour de l'horloge, glace à l'eau de mer en main, d'abord avec Axel puis avec Xion : ces moments quotidiens forment le cœur émotionnel du jeu. Roxas y croise aussi Hayner, Pence et Olette, les vrais habitants, et le vieux manoir où Naminé dessine.\n\nÀ la fin, Xion, devenue une menace pour Roxas, l'attire dans la ville pour un dernier combat sur la place de la gare. Vaincue, elle s'efface dans ses bras et disparaît de tous les souvenirs, ne laissant qu'un coquillage. Roxas quitte alors l'Organisation ; capturé par Riku, il est placé par DiZ dans une Cité du Crépuscule virtuelle, où commencera Kingdom Hearts II.",
          "Twilight Town is the world where Roxas is born, where the Organization recruits him and where he carries out his first missions. Each day ends on the clock tower with sea-salt ice cream in hand, first with Axel and then with Xion: those daily moments form the emotional core of the game. Roxas also crosses paths with Hayner, Pence and Olette, the real inhabitants, and the old mansion where Naminé draws.\n\nAt the end, Xion, now a threat to Roxas, lures him into town for a last fight on the station plaza. Defeated, she fades in his arms and disappears from everyone's memories, leaving only a seashell. Roxas then leaves the Organization; captured by Riku, he is placed by DiZ in a virtual Twilight Town, where Kingdom Hearts II will begin.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Le prologue se déroule dans la Cité du Crépuscule virtuelle : Roxas y vit six jours d'été avec Hayner, Pence et Olette, entre concours de Struggle, petits boulots et sept merveilles, tandis que des Reflets et des phénomènes étranges perturbent la simulation. Il rencontre Naminé, affronte Axel, puis découvre dans le sous-sol du manoir la vérité : il est le Simili de Sora, qui dort dans une capsule. Il s'y fond en disant que son été est terminé.\n\nSora s'éveille dans le vrai manoir, retrouve la ville réelle et Yen Sid par le train magique. Il y revient lorsque Kairi, enlevée, y a laissé une trace, et lorsqu'Hayner, Pence et Olette découvrent l'ordinateur du manoir : la photo sans Roxas confirme l'existence des deux villes. Depuis la version virtuelle, Sora emprunte l'Entre-deux, ouvert grâce au sacrifice d'Axel, jusqu'au Monde qui n'existe pas.",
          "The prologue takes place in the virtual Twilight Town: Roxas lives six summer days there with Hayner, Pence and Olette, between Struggle tournaments, odd jobs and seven wonders, while Dusks and strange phenomena disturb the simulation. He meets Naminé, fights Axel, then finds the truth in the mansion basement: he is the Nobody of Sora, who sleeps in a pod. He merges into him, saying his summer is over.\n\nSora wakes in the real mansion, discovers the real town and reaches Yen Sid by the magic train. He returns when the kidnapped Kairi leaves a trace there, and when Hayner, Pence and Olette find the mansion computer: the photo without Roxas confirms the existence of two towns. From the virtual version, Sora takes Betwixt and Between, opened thanks to Axel's sacrifice, to The World That Never Was.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora revient dans la Cité du Crépuscule pour chercher un moyen de ramener Roxas. Il y retrouve Hayner, Pence et Olette et affronte Maléfique et Pat, venus chercher la boîte noire, avant qu'une Marée Démoniaque n'envahisse la ville. Dans le manoir, les trois amis récupèrent les données de l'ordinateur d'Ansem le Sage et les transmettent à Ienzo, ce qui permettra de reconstituer le cœur de Roxas.\n\nLe bistrot du Petit Chef, tenu par Rémy, ouvre après la première visite et propose une cuisine améliorant les statistiques de Sora. Le monde diffuse aussi une publicité pour Verum Rex, jeu qui préfigure Yozora. À la fin de Kingdom Hearts III, Roxas, Xion et Axel, enfin réunis, regardent le coucher de soleil depuis la tour de l'horloge avec Hayner, Pence, Olette et Isa, tandis que Naminé rejoint le groupe des Îles du Destin.",
          "Sora returns to Twilight Town looking for a way to bring Roxas back. He reunites with Hayner, Pence and Olette and confronts Maleficent and Pete, come in search of the black box, before a Demon Tide overruns the town. In the mansion, the three friends retrieve the data from Ansem the Wise's computer and send it to Ienzo, which will allow Roxas's heart to be pieced together again.\n\nLe Grand Bistrot, run by Remy, opens after the first visit and offers cooking that boosts Sora's stats. The world also plays an advert for Verum Rex, a game that foreshadows Yozora. At the end of Kingdom Hearts III, Roxas, Xion and Axel, finally reunited, watch the sunset from the clock tower with Hayner, Pence, Olette and Isa, while Naminé joins the group on Destiny Islands.",
        ),
      },
    ],
    trivia: [
      L("La glace à l'eau de mer existe réellement : Tetsuya Nomura l'a goûtée à Tokyo DisneySea, ce qui a inspiré son intégration au jeu.", "Sea-salt ice cream really exists: Tetsuya Nomura tasted it at Tokyo DisneySea, which inspired its inclusion in the game."),
      L("Dans Kingdom Hearts III, Rémy de Ratatouille tient le bistrot de la ville, seule apparition du film dans la saga.", "In Kingdom Hearts III, Remy from Ratatouille runs the town bistro, the film's only appearance in the series."),
      L("Le thème « Lazy Afternoons » et sa version de combat « Sinister Sundown » comptent parmi les morceaux les plus repris de la saga.", "The theme “Lazy Afternoons” and its battle version “Sinister Sundown” are among the most reused tracks of the series."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Twilight Town", url: "https://kingdomhearts.fandom.com/wiki/Twilight_Town" },
    ],
  },

  // ─────────────────────────── Manoir Oblivion ───────────────────────────
  "castle-oblivion": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Manoir Oblivion est un château entièrement blanc, aux couloirs symétriques et aux salles vides, dont les treize étages et les douze sous-sols n'existent que par les cartes de souvenirs qu'on y utilise : chaque étage prend la forme d'un monde tiré de la mémoire du visiteur. Y entrer, c'est perdre ses souvenirs à mesure qu'on avance ; en sortir revient à les retrouver.\n\nSa véritable nature est révélée dans Birth by Sleep : il s'agit de la Contrée du Départ, transformée par Aqua grâce à la Keyblade de Maître Eraqus pour dissimuler le corps endormi de Ventus. Seul celui qui connaît la vraie forme des lieux peut y retrouver la Salle de l'Éveil. L'Organisation XIII en a fait une base de recherche, et Chain of Memories s'y déroule tout entier.",
          "Castle Oblivion is an entirely white castle of symmetrical corridors and empty halls, whose thirteen floors and twelve basements exist only through the memory cards used inside: each floor takes the shape of a world drawn from the visitor's memory. Entering it means losing one's memories as one climbs; leaving it means regaining them.\n\nIts true nature is revealed in Birth by Sleep: it is the Land of Departure, transformed by Aqua with Master Eraqus's Keyblade to hide Ventus's sleeping body. Only someone who knows the true shape of the place can find the Chamber of Waking there. Organization XIII turned it into a research base, and Chain of Memories takes place entirely within it.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Après la bataille du Nécropole des Keyblades, Aqua ramène Ventus endormi à la Contrée du Départ, dévastée par le combat entre Eraqus et Terra. Elle y découvre la Keyblade de son Maître, Maître Gardien, et se souvient des instructions qu'il lui avait laissées : en cas de malheur, se servir de cette clé pour verrouiller le monde et le transformer afin que personne ne puisse y retrouver ce qui doit y rester caché.\n\nAqua active la serrure du trône et le château se réorganise en un labyrinthe blanc : le Manoir Oblivion. Elle laisse Ventus assis sur son trône dans la Salle de l'Éveil, promettant de revenir, puis part chercher Terra. Elle ne reviendra pas avant plus de dix ans, et le Manoir reste un mystère pour ceux qui en franchissent le seuil.",
          "After the battle at the Keyblade Graveyard, Aqua carries the sleeping Ventus back to the Land of Departure, ravaged by the fight between Eraqus and Terra. There she finds her Master's Keyblade, Master's Defender, and remembers the instructions he left her: in the event of disaster, use that key to lock the world and transform it so that no one can find what must stay hidden within.\n\nAqua activates the throne's keyhole and the castle rearranges itself into a white labyrinth: Castle Oblivion. She leaves Ventus seated on his throne in the Chamber of Waking, promising to return, then sets out to find Terra. She will not come back for over ten years, and the castle remains a mystery to those who cross its threshold.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Sora, Donald et Dingo suivent un inconnu en manteau noir jusqu'au Manoir Oblivion, où Marluxia leur explique la règle : à chaque étage, ils perdront des souvenirs et en gagneront d'autres. De monde en monde, Sora se convainc d'avoir promis à une certaine Naminé de la protéger, alors que Kairi s'efface de sa mémoire. Il affronte Axel, Larxène et Vexen, ainsi que le Réplica de Riku, avant de découvrir que Naminé, prisonnière de Marluxia, a réécrit ses souvenirs sur ordre.\n\nAprès la défaite de Marluxia, Sora choisit de retrouver ses vrais souvenirs et s'endort dans une capsule au dernier étage. Simultanément, Riku gravit les sous-sols depuis le Domaine des Ténèbres, guidé par DiZ et le roi Mickey, apprend à dominer les ténèbres d'Ansem en lui, vainquit Lexaeus et Zexion, puis quitte le château par la voie de l'aube.",
          "Sora, Donald and Goofy follow a stranger in a black coat to Castle Oblivion, where Marluxia explains the rule: on each floor they will lose memories and gain others. World after world, Sora becomes convinced that he promised a certain Naminé to protect her, while Kairi fades from his memory. He fights Axel, Larxene and Vexen, as well as Riku Replica, before discovering that Naminé, Marluxia's prisoner, rewrote his memories on command.\n\nAfter Marluxia's defeat, Sora chooses to recover his true memories and falls asleep in a pod on the top floor. At the same time, Riku climbs the basements from the Realm of Darkness, guided by DiZ and King Mickey, learns to master Ansem's darkness within him, defeats Lexaeus and Zexion, then leaves the castle by the road to dawn.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "358/2 Days éclaire les coulisses du château. Xion y a été créée par Vexen dans les laboratoires du sous-sol, réplica destiné à copier les pouvoirs de Sora ; Axel y est envoyé par Saïx pour éliminer les membres jugés traîtres, et l'on assiste à la disparition de Zexion, qu'il livre au Réplica de Riku. Le groupe du Manoir est ainsi décimé, et Roxas apprend seulement plus tard que ses collègues n'en sont pas revenus.\n\nXion retourne plusieurs fois au Manoir Oblivion pour comprendre ses origines, et y subit un malaise qui fait ressurgir les souvenirs de Sora. Roxas, qui part la chercher avec Axel, s'effondre dès l'entrée du château, assailli par des souvenirs qui ne sont pas les siens. C'est d'ailleurs le château que DiZ a fait quitter à Sora, transféré dans le manoir de la Cité du Crépuscule pour être caché de l'Organisation.",
          "358/2 Days sheds light on what goes on behind the castle's scenes. Xion was created there by Vexen in the basement laboratories, a replica meant to copy Sora's powers; Axel is sent there by Saïx to eliminate members deemed traitors, and we witness the end of Zexion, whom he hands over to Riku Replica. The castle group is thus wiped out, and Roxas only later learns that his colleagues never came back.\n\nXion returns to Castle Oblivion several times to understand her origins, and suffers a collapse there that stirs up Sora's memories. Roxas, who goes looking for her with Axel, collapses as soon as he enters the castle, assailed by memories that are not his own. It is also the castle DiZ had Sora moved out of, transferred to the Twilight Town mansion to be hidden from the Organization.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Après avoir été délivrée du Domaine des Ténèbres par Sora, Aqua conduit ses amis au Manoir Oblivion. En tant que nouvelle gardienne des lieux, elle lève l'enchantement avec Maître Gardien : le château blanc reprend la forme de la Contrée du Départ, révélant la Salle de l'Éveil et Ventus endormi sur son trône. Vanitas surgit pour s'emparer du garçon, et c'est Sora, en libérant le cœur de Ventus abrité en lui, qui réveille enfin son ami.\n\nLe Manoir Oblivion cesse alors d'exister : il redevient un monde à ciel ouvert, base des Gardiens de la Lumière avant l'assaut du Nécropole des Keyblades. Dans l'épilogue et dans Re Mind, la Contrée du Départ restaurée accueille Terra, Aqua et Ventus, de nouveau réunis, ainsi que Kairi, qui y poursuit son entraînement.",
          "After being rescued from the Realm of Darkness by Sora, Aqua leads her friends to Castle Oblivion. As the new keeper of the place, she lifts the enchantment with Master's Defender: the white castle returns to the shape of the Land of Departure, revealing the Chamber of Waking and Ventus asleep on his throne. Vanitas bursts in to seize the boy, and it is Sora, by releasing the heart of Ventus sheltered within him, who finally wakes his friend.\n\nCastle Oblivion then ceases to exist: it becomes an open-sky world again, the base of the Guardians of Light before the assault on the Keyblade Graveyard. In the epilogue and in Re Mind, the restored Land of Departure welcomes Terra, Aqua and Ventus, together once more, as well as Kairi, who continues her training there.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, 忘却の城, signifie littéralement « le château de l'oubli ».", "The Japanese name, 忘却の城, literally means “the castle of oblivion”."),
      L("Le Manoir Oblivion compte treize étages, chiffre récurrent de l'Organisation XIII, mais seuls douze sont explorables par Riku.", "Castle Oblivion has thirteen floors, a recurring number for Organization XIII, but only twelve are explorable by Riku."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Castle Oblivion", url: "https://kingdomhearts.fandom.com/wiki/Castle_Oblivion" },
    ],
  },

  // ─────────────────────────── Le Monde qui n'existe pas ───────────────────────────
  "world-that-never-was": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Monde qui n'existe pas est la cité des Similis, un monde original qui, comme ses habitants, ne devrait pas exister : une ville nocturne noyée sous une pluie perpétuelle, hérissée de gratte-ciel aux néons bleutés, d'où se dresse l'immense château blanc de l'Organisation XIII, la Forteresse du Néant. Au-dessus flotte le Kingdom Hearts artificiel, lune en forme de cœur nourrie par les cœurs libérés par Roxas.\n\nLe monde se compose de l'Avenue Sombre, du Gratte-ciel des Souvenirs, où se croisent Roxas et Riku, et des salles du château : la Chambre du Repos où siègent les treize trônes, la Preuve d'Existence et la Falaise de l'Altération. Situé aux confins du Domaine des Ténèbres et de l'entre-deux, il est accessible depuis la Cité du Crépuscule par un couloir de ténèbres ou par l'Entre-deux.",
          "The World That Never Was is the city of the Nobodies, an original world which, like its residents, should not exist: a night-time city drowned in perpetual rain, bristling with neon-blue skyscrapers, from which rises Organization XIII's immense white castle, the Castle That Never Was. Above it floats the artificial Kingdom Hearts, a heart-shaped moon fed by the hearts Roxas releases.\n\nThe world is made of Dark City, Memory's Skyscraper, where Roxas and Riku cross paths, and the castle halls: Where Nothing Gathers, with its thirteen thrones, Proof of Existence and the Altar of Naught. Set at the edge of the Realm of Darkness and the in-between, it is reached from Twilight Town by a corridor of darkness or through Betwixt and Between.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Le château du Monde qui n'existe pas est la maison de Roxas pendant 358 jours : il y a sa chambre, la Zone Grise où Saïx distribue les missions, et les couloirs où il croise Axel, Xion, Demyx ou Xigbar. Le Kingdom Hearts artificiel grandit au fil de ses missions, à mesure qu'il libère des cœurs à la Keyblade. Xemnas y révèle son ambition à ses membres, tout en cachant la vraie nature de Xion.\n\nÀ la fin, Roxas quitte l'Organisation et revient dans la ville pour libérer Kingdom Hearts, espérant ramener Xion. Au pied du Gratte-ciel des Souvenirs, sous la pluie, il affronte Riku, double Keyblade en main. Riku ne l'emporte qu'en libérant les ténèbres d'Ansem en lui, ce qui lui donne l'apparence de l'ennemi de Sora ; Roxas est ensuite conduit par DiZ dans la Cité du Crépuscule virtuelle.",
          "The castle of The World That Never Was is Roxas's home for 358 days: it holds his room, the Grey Area where Saïx hands out missions, and the corridors where he runs into Axel, Xion, Demyx or Xigbar. The artificial Kingdom Hearts grows with each mission as he releases hearts with the Keyblade. Xemnas reveals his ambition to his members there while hiding Xion's true nature.\n\nAt the end, Roxas leaves the Organization and comes back to the city to free Kingdom Hearts, hoping to bring Xion back. At the foot of Memory's Skyscraper, in the rain, he faces Riku, two Keyblades in hand. Riku only prevails by unleashing Ansem's darkness within him, which gives him the appearance of Sora's enemy; Roxas is then taken by DiZ to the virtual Twilight Town.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Dernier monde de Kingdom Hearts II, la ville accueille Sora, Donald et Dingo sortis de l'Entre-deux. Sora y affronte Roxas dans un duel mental au pied du Gratte-ciel des Souvenirs, puis retrouve Kairi et Naminé, que Riku, sous les traits d'Ansem, a aidées à s'échapper. Il rencontre ensuite Xigbar, Luxord et Saïx, avant de découvrir la véritable identité de son ami à la voix familière.\n\nSur la Falaise de l'Altération, Ansem le Sage tente de convertir Kingdom Hearts en données ; sa machine explose, lui rend son apparence à Riku et disperse les cœurs. Sora et Riku affrontent Xemnas dans une série de combats, jusqu'à sa forteresse volante en forme de dragon et au duel final, puis se retrouvent abandonnés sur une plage sombre. C'est là que la lettre de Kairi leur ouvre la porte vers les Îles du Destin.",
          "The final world of Kingdom Hearts II, the city welcomes Sora, Donald and Goofy as they step out of Betwixt and Between. Sora fights Roxas there in a mental duel at the foot of Memory's Skyscraper, then reunites with Kairi and Naminé, whom Riku, wearing Ansem's features, helped escape. He then meets Xigbar, Luxord and Saïx, before learning the true identity of the friend with the familiar voice.\n\nOn the Altar of Naught, Ansem the Wise tries to convert Kingdom Hearts into data; his machine explodes, gives Riku his appearance back and scatters the hearts. Sora and Riku face Xemnas in a series of battles, up to his dragon-shaped flying fortress and the final duel, and then find themselves stranded on a dark shore. It is there that Kairi's letter opens the door to Destiny Islands for them.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Le Monde qui n'existe pas est le dernier monde de l'examen de Maîtrise, mais il n'est pas endormi : Sora y est attiré par le jeune Xehanort, qui l'a manipulé tout au long de son voyage. Sora y revit les souvenirs de ceux qui lui sont liés, croise Xigbar et Xemnas, et apprend qu'il était destiné à devenir le treizième réceptacle de Xehanort. Il s'endort dans la Chambre du Repos, où treize trônes attendent la vraie Organisation XIII.\n\nRiku arrive à son tour, affronte Ansem, puis le jeune Xehanort, avant que le roi Mickey ne fige le temps et que le Maître Xehanort ressuscité ne révèle son plan : réunir treize ténèbres et sept lumières pour forger la χ-blade. Lea fait irruption pour sauver Sora, et Riku plonge ensuite dans le cœur de son ami pour le réveiller.",
          "The World That Never Was is the last world of the Mark of Mastery exam, though it is not asleep: Sora is drawn there by Young Xehanort, who has manipulated him throughout his journey. Sora relives the memories of those connected to him, meets Xigbar and Xemnas, and learns he was meant to become Xehanort's thirteenth vessel. He falls asleep in Where Nothing Gathers, where thirteen thrones await the true Organization XIII.\n\nRiku arrives in turn, fights Ansem and then Young Xehanort, before King Mickey freezes time and a revived Master Xehanort reveals his plan: gather thirteen darknesses and seven lights to forge the χ-blade. Lea bursts in to save Sora, and Riku then dives into his friend's heart to wake him.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, 存在しなかった世界, se traduit par « le monde qui n'a jamais existé ».", "The Japanese name, 存在しなかった世界, translates as “the world that never existed”."),
      L("Le Gratte-ciel des Souvenirs est le décor du célèbre affrontement Roxas–Riku, dont Kingdom Hearts II ne montrait qu'un bref extrait avant 358/2 Days.", "Memory's Skyscraper is the setting of the famous Roxas–Riku clash, of which Kingdom Hearts II showed only a brief glimpse before 358/2 Days."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — The World That Never Was", url: "https://kingdomhearts.fandom.com/wiki/The_World_That_Never_Was" },
    ],
  },

  // ─────────────────────────── Contrée du Départ ───────────────────────────
  "land-of-departure": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Contrée du Départ est un monde original, une haute vallée de montagnes verdoyantes dominée par un château aux toits dorés et flanqué de deux chaînes gigantesques. C'est là que Maître Eraqus forme ses disciples, Terra, Aqua et Ventus, à l'art de la Keyblade. La cour d'entraînement, la grande salle du trône et le sommet où les trois amis regardent les étoiles en sont les lieux marquants.\n\nSelon la tradition, ce monde a été fondé pour se tenir en équilibre entre lumière et ténèbres, et son gardien peut en verrouiller la forme grâce à la serrure du trône : c'est ce mécanisme qui le transforme en Manoir Oblivion. Le monde n'a été pleinement explorable que dans Birth by Sleep, mais il constitue le point de départ de toute la chronologie moderne de la saga.",
          "The Land of Departure is an original world, a high valley of green mountains dominated by a castle with golden roofs and flanked by two gigantic chains. It is where Master Eraqus trains his pupils, Terra, Aqua and Ventus, in the art of the Keyblade. The training yard, the great throne hall and the summit where the three friends watch the stars are its memorable spots.\n\nAccording to tradition, this world was founded to stand in balance between light and darkness, and its keeper can lock its shape through the throne's keyhole: that mechanism is what turns it into Castle Oblivion. The world was only fully explorable in Birth by Sleep, but it is the starting point of the series' entire modern chronology.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Birth by Sleep s'ouvre sur l'examen de Maîtrise de Terra et Aqua, présidé par Eraqus et observé par Maître Xehanort. Seule Aqua est reçue : Terra a laissé ses ténèbres s'exprimer. Peu après, Eraqus envoie Terra chasser les Nescients et Aqua le surveiller, tandis que Ventus quitte le monde sans permission après une visite de Vanitas. Le château se vide.\n\nQuand Ventus revient, ayant appris son passé, Eraqus tente de le détruire pour empêcher la création de la χ-blade ; Terra s'interpose et frappe son propre Maître, que Xehanort achève. Le monde est ensuite dévasté par les ténèbres. Après la bataille finale, Aqua y ramène Ventus endormi et, grâce à la Keyblade d'Eraqus, transforme le château en Manoir Oblivion avant de partir sauver Terra.",
          "Birth by Sleep opens on Terra's and Aqua's Mark of Mastery exam, presided over by Eraqus and watched by Master Xehanort. Only Aqua passes: Terra let his darkness show. Shortly afterwards, Eraqus sends Terra to hunt the Unversed and Aqua to keep an eye on him, while Ventus leaves the world without permission after a visit from Vanitas. The castle empties.\n\nWhen Ventus returns having learned about his past, Eraqus tries to destroy him to prevent the creation of the χ-blade; Terra steps in and strikes his own Master, whom Xehanort then finishes off. The world is then ravaged by darkness. After the final battle, Aqua brings the sleeping Ventus back and, using Eraqus's Keyblade, turns the castle into Castle Oblivion before setting out to save Terra.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sauvée du Domaine des Ténèbres, Aqua conduit Sora et ses amis au Manoir Oblivion et lui rend sa vraie forme : la Contrée du Départ réapparaît, intacte, avec sa Salle de l'Éveil. Ventus s'y réveille grâce au cœur que Sora lui rend, après que Vanitas a tenté de s'en emparer. Le monde redevient le foyer des disciples d'Eraqus et le rendez-vous des Gardiens de la Lumière avant le Nécropole des Keyblades.\n\nAprès la victoire, l'épilogue y montre Terra, Aqua et Ventus enfin réunis, un porte-bonheur Wayfinder à la main, sous les étoiles. Dans Re Mind, Kairi s'y installe pour poursuivre son entraînement auprès d'Aqua, comme le confirme l'épilogue de Melody of Memory. Le monde n'est pas explorable dans Kingdom Hearts III, mais il sert de cadre à plusieurs cinématiques et à un combat contre Vanitas.",
          "Rescued from the Realm of Darkness, Aqua leads Sora and his friends to Castle Oblivion and restores its true form: the Land of Departure reappears, intact, with its Chamber of Waking. Ventus wakes there thanks to the heart Sora returns to him, after Vanitas tries to seize it. The world becomes once more the home of Eraqus's pupils and the meeting point of the Guardians of Light before the Keyblade Graveyard.\n\nAfter the victory, the epilogue shows Terra, Aqua and Ventus there at last reunited, Wayfinder charm in hand, under the stars. In Re Mind, Kairi settles there to continue her training under Aqua, as the epilogue of Melody of Memory confirms. The world is not explorable in Kingdom Hearts III, but it serves as the setting for several cutscenes and a fight against Vanitas.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, 旅立ちの地, signifie « la terre du départ » ; le mot évoque un voyage qui commence.", "The Japanese name, 旅立ちの地, means “the land of setting out”; the word evokes a journey beginning."),
      L("Les deux chaînes géantes du château sont un motif que l'on retrouve sur les Keyblades des disciples d'Eraqus.", "The castle's two giant chains are a motif also found on the Keyblades of Eraqus's pupils."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Land of Departure", url: "https://kingdomhearts.fandom.com/wiki/Land_of_Departure" },
    ],
  },

  // ─────────────────────────── Daybreak Town ───────────────────────────
  "daybreak-town": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Ville de l'Aube est un monde original situé à l'Âge des Fées, bien avant les événements du reste de la saga. C'est une ville ensoleillée aux façades ocre et aux canaux, articulée autour d'une grande place à fontaine et d'une tour de l'horloge, avec des quartiers d'entrepôts, un port et des collines en périphérie. Son architecture méditerranéenne contraste avec les cités sombres de la saga.\n\nLa ville est le siège des cinq Unions de Porteurs de Keyblade, chacune dirigée par un Prophète disciple du Maître des Maîtres : Unicornis, Leopardus, Ursus, Vulpes et Anguis. Les Porteurs y collectent la Lux, la lumière issue des Sans-cœur, accompagnés de leurs Chirithy. Ville de l'Aube est ainsi le berceau de la Guerre des Keyblades, et ses ruines serviront de fondation à Scala ad Caelum.",
          "Daybreak Town is an original world set in the Age of Fairy Tales, long before the events of the rest of the series. It is a sunlit town of ochre façades and canals, built around a large fountain square and a clock tower, with warehouse districts, a harbour and hills on its outskirts. Its Mediterranean architecture contrasts with the series' darker cities.\n\nThe town is the seat of the five Unions of Keyblade wielders, each led by a Foreteller who studied under the Master of Masters: Unicornis, Leopardus, Ursus, Vulpes and Anguis. There the wielders collect Lux, the light released by the Heartless, accompanied by their Chirithy. Daybreak Town is thus the cradle of the Keyblade War, and its ruins will become the foundation of Scala ad Caelum.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
      "Le joueur y incarne un Porteur sans nom qui rejoint l'une des cinq Unions et part collecter la Lux dans les mondes voisins. Il se lie d'amitié avec Ephemer, un Porteur curieux qui disparaît après avoir cherché à percer le secret de la ville, puis avec Skuld, qui part à sa recherche. Pendant ce temps, la confiance entre les Prophètes s'effrite : le Maître des Maîtres a disparu en leur laissant le Livre des Prophéties et des rôles secrets, et chacun soupçonne les autres d'être le « traître » annoncé.\n\nLa Guerre des Keyblades éclate finalement au Nécropole des Keyblades. Le Porteur, qui succombe, est ramené à Ville de l'Aube dans un monde de données créé par Ava pour que les Pissenlits, Porteurs épargnés par la guerre, puissent reconstruire l'avenir. Union χ poursuit l'histoire avec cinq nouveaux dirigeants d'Union, Ephemer, Skuld, Ventus, Brain et Lauriam, tandis que Darkness s'infiltre dans la cité de données. Le monde finit par sombrer, et les survivants gagnent le futur.",
          "The player controls a nameless wielder who joins one of the five Unions and sets out to collect Lux in neighbouring worlds. They befriend Ephemer, a curious wielder who vanishes after trying to uncover the town's secret, then Skuld, who goes looking for him. Meanwhile, trust between the Foretellers crumbles: the Master of Masters has disappeared, leaving them the Book of Prophecies and secret roles, and each suspects the others of being the foretold “traitor”.\n\nThe Keyblade War finally breaks out at the Keyblade Graveyard. The wielder, who falls, is brought back to Daybreak Town inside a data world created by Ava so that the Dandelions, wielders spared from the war, can rebuild the future. Union χ continues the story with five new Union leaders, Ephemer, Skuld, Ventus, Brain and Lauriam, while Darkness infiltrates the data town. The world eventually falls, and the survivors reach the future.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, デイブレイクタウン, est une simple transcription ; la version française du site officiel conserve le nom anglais.", "The Japanese name, デイブレイクタウン, is a plain transliteration; the official French site keeps the English name."),
      L("La place à fontaine de Ville de l'Aube est reproduite presque à l'identique à Scala ad Caelum dans Kingdom Hearts III.", "Daybreak Town's fountain square is reproduced almost identically in Scala ad Caelum in Kingdom Hearts III."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Daybreak Town", url: "https://kingdomhearts.fandom.com/wiki/Daybreak_Town" },
    ],
  },

  // ─────────────────────────── Nécropole des Keyblades ───────────────────────────
  "keyblade-graveyard": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Nécropole des Keyblades est un désert de roche ocre, sillonné de crevasses et de tours de pierre, où des milliers de Keyblades plantées dans le sol forment autant de tombes. Ce paysage désolé est ce qui reste du monde originel après la Guerre des Keyblades : les Porteurs s'y sont entretués pour la lumière de Kingdom Hearts, et les ténèbres nées de cette bataille ont fait éclater le monde en une multitude de petits mondes.\n\nLe monde est surtout un champ de bataille : c'est là que Maître Xehanort convoque ses adversaires pour forger la χ-blade, dans Birth by Sleep puis dans Kingdom Hearts III. On y trouve la Croisée des Chemins et le Rempart des Clés, deux lieux au nom devenu célèbre, ainsi que le Labyrinthe des Cieux, ajouté dans Kingdom Hearts III pour l'ultime affrontement.",
          "The Keyblade Graveyard is a desert of ochre rock, crisscrossed by crevasses and stone towers, where thousands of Keyblades planted in the ground form as many graves. This desolate landscape is what remains of the original world after the Keyblade War: wielders killed one another there for the light of Kingdom Hearts, and the darkness born from that battle shattered the world into a multitude of smaller worlds.\n\nThe world is above all a battlefield: it is where Master Xehanort summons his opponents to forge the χ-blade, in Birth by Sleep and again in Kingdom Hearts III. It contains the Badlands and the Seat of War, two places whose names have become famous, as well as the Skein of Severance, added in Kingdom Hearts III for the final showdown.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
      "Kingdom Hearts χ montre la Guerre des Keyblades elle-même. Divisés par la méfiance après la disparition du Maître des Maîtres, les cinq Prophètes lèvent leurs Unions les unes contre les autres pour s'emparer de la lumière. Ava, qui refuse cette guerre, rassemble en secret les Pissenlits pour qu'ils survivent au désastre et reconstruisent l'avenir.\n\nLe Porteur incarné par le joueur se rend au Cimetière malgré les avertissements et y affronte des ténèbres surgies de la bataille, avant de rencontrer Ephemer et Skuld dans un dernier moment de lumière. La guerre laisse le monde en ruine et les Keyblades plantées dans le sol ; la lumière de Kingdom Hearts se retire et le monde se fragmente. C'est ce champ de bataille que Xehanort cherchera à recréer des siècles plus tard.",
          "Kingdom Hearts χ depicts the Keyblade War itself. Divided by suspicion after the Master of Masters' disappearance, the five Foretellers raise their Unions against one another to seize the light. Ava, who refuses that war, secretly gathers the Dandelions so that they survive the disaster and rebuild the future.\n\nThe player's wielder goes to the Graveyard despite the warnings and there faces darkness rising from the battle, before meeting Ephemer and Skuld in one last moment of light. The war leaves the world in ruins and the Keyblades planted in the ground; the light of Kingdom Hearts withdraws and the world fragments. It is that battlefield that Xehanort will seek to recreate centuries later.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Le Nécropole des Keyblades est le monde final de Birth by Sleep. Terra, Ventus et Aqua s'y retrouvent pour affronter Maître Xehanort et Vanitas, après la mort d'Eraqus. Xehanort révèle son plan : provoquer la fusion de Ventus et de Vanitas pour forger la χ-blade et rouvrir Kingdom Hearts, tout en volant le corps de Terra pour rajeunir.\n\nLes trois amis sont séparés dans la Croisée des Chemins. Terra affronte Xehanort et est possédé par lui après avoir vaincu son corps ; Ventus est gelé puis se bat contre Vanitas à l'intérieur de son propre cœur ; Aqua affronte Vanitas-χ-blade avec l'aide de Mickey et parvient à briser l'arme, dont l'explosion disperse tout le monde. À l'issue de la bataille, le cœur de Ventus s'échappe, Aqua sauve Terra-Xehanort en se sacrifiant dans le Domaine des Ténèbres, et l'Armure de Terra, vidée, reste assise au milieu du désert.",
          "The Keyblade Graveyard is the final world of Birth by Sleep. Terra, Ventus and Aqua gather there to face Master Xehanort and Vanitas after Eraqus's death. Xehanort reveals his plan: force Ventus and Vanitas to merge in order to forge the χ-blade and reopen Kingdom Hearts, while stealing Terra's body to grow young again.\n\nThe three friends are separated in the Badlands. Terra fights Xehanort and is possessed by him after defeating his body; Ventus is frozen and then battles Vanitas inside his own heart; Aqua faces Vanitas wielding the χ-blade with Mickey's help and manages to shatter the weapon, whose explosion scatters everyone. In the battle's aftermath, Ventus's heart escapes, Aqua saves Terra-Xehanort by sacrificing herself in the Realm of Darkness, and Terra's emptied armour is left sitting in the middle of the desert.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Les sept Gardiens de la Lumière, menés par Sora, arrivent au Nécropole des Keyblades pour l'affrontement décisif contre les treize ténèbres de Xehanort. Dans une première tentative, une Marée Démoniaque emporte tous les Gardiens et Sora, seul, se retrouve au Monde Final. Grâce au Pouvoir de l'éveil, il ramène ses amis et un second assaut commence, dans le Labyrinthe des Cieux, où chaque groupe affronte ses adversaires attitrés : Aqua et Ventus contre Vanitas et Terra-Xehanort, Riku et Mickey contre Xigbar et Riku des ténèbres, Axel et Kairi contre Saïx, Xion et Xemnas.\n\nRoxas, Xion et Naminé changent le cours de la bataille, et Terra, à travers son Armure, retrouve sa volonté. Xehanort forge la χ-blade en frappant Kairi et ouvre Kingdom Hearts ; les Gardiens le poursuivent jusqu'à Scala ad Caelum. Re Mind détaille chaque duel et permet d'incarner Riku, Aqua, Roxas et Kairi dans ce désert.",
          "The seven Guardians of Light, led by Sora, arrive at the Keyblade Graveyard for the decisive confrontation with Xehanort's thirteen darknesses. In a first attempt, a Demon Tide sweeps every Guardian away and Sora, alone, ends up in the Final World. Thanks to the power of waking he brings his friends back and a second assault begins, in the Skein of Severance, where each group faces its designated foes: Aqua and Ventus against Vanitas and Terra-Xehanort, Riku and Mickey against Xigbar and Dark Riku, Axel and Kairi against Saïx, Xion and Xemnas.\n\nRoxas, Xion and Naminé turn the tide of battle, and Terra, through his armour, regains his will. Xehanort forges the χ-blade by striking Kairi down and opens Kingdom Hearts; the Guardians pursue him to Scala ad Caelum. Re Mind details every duel and lets the player control Riku, Aqua, Roxas and Kairi in that desert.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, キーブレード墓場, se traduit littéralement par « cimetière des Keyblades ».", "The Japanese name, キーブレード墓場, literally translates as “Keyblade graveyard”."),
      L("La cinématique secrète du premier Kingdom Hearts, « Deep Dive », est la première évocation des Keyblades plantées dans le sol.", "The first Kingdom Hearts secret movie, “Deep Dive”, is the first hint of Keyblades planted in the ground."),
      L("L'Armure de Terra, laissée dans le désert, y reste plus de dix ans avant d'être retrouvée dans Kingdom Hearts III.", "Terra's armour, left in the desert, stays there for over ten years before being found again in Kingdom Hearts III."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Keyblade Graveyard", url: "https://kingdomhearts.fandom.com/wiki/Keyblade_Graveyard" },
    ],
  },

  // ─────────────────────────── Scala ad Caelum ───────────────────────────
  "scala-ad-caelum": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Scala ad Caelum, « l'escalier vers le ciel » en latin, est un monde original : une cité blanche bâtie sur une succession d'îlots reliés par des ponts et des escaliers, au milieu d'une mer étincelante, avec au sommet une immense tour surmontée d'une cloche. Ses toits bleus, ses colonnades et ses places à fontaine rappellent Ville de l'Aube, sur les ruines de laquelle la cité a été édifiée après la Guerre des Keyblades.\n\nC'est la ville où l'on forme les Porteurs de Keyblade : Xehanort et Eraqus y ont étudié dans leur jeunesse, sous l'autorité de Maître Odin. Dans Kingdom Hearts III, elle apparaît comme un monde figé, sans habitants, où Xehanort attire Sora pour le combat final. Elle devait aussi être le cadre de Missing-Link.",
          "Scala ad Caelum, Latin for “stairway to heaven”, is an original world: a white city built on a chain of islets linked by bridges and stairways in the middle of a glittering sea, crowned by an immense tower topped with a bell. Its blue roofs, colonnades and fountain squares recall Daybreak Town, on whose ruins the city was raised after the Keyblade War.\n\nIt is the city where Keyblade wielders are trained: Xehanort and Eraqus studied there in their youth under Master Odin. In Kingdom Hearts III it appears as a frozen, uninhabited world where Xehanort lures Sora for the final battle. It was also meant to be the setting of Missing-Link.",
        ),
      },
      {
        game: "dark-road",
        text: L(
      "Dark Road se déroule presque entièrement à Scala ad Caelum, alors que Xehanort, adolescent venu des Îles du Destin, y étudie la Keyblade auprès de Maître Odin avec Eraqus, Bragi, Hermod, Vor, Urd et Vidar. Le jeu montre la ville vivante : ses classes, sa bibliothèque, ses salles d'entraînement et les Sans-cœur qui rôdent dans ses ruelles.\n\nLes disciples enquêtent sur la disparition de plusieurs élèves et Maîtres, et le drame se noue autour de Baldr, dont les ténèbres finissent par consumer la ville. Xehanort, hanté par les visions d'un avenir sombre, en sort convaincu que les ténèbres sont nécessaires à l'équilibre des mondes, tandis qu'Eraqus choisit la voie de la lumière. Leur amitié et leur désaccord, nés sur ces escaliers, annoncent la tragédie de Birth by Sleep.",
          "Dark Road takes place almost entirely in Scala ad Caelum, as Xehanort, a teenager from Destiny Islands, studies the Keyblade there under Master Odin alongside Eraqus, Bragi, Hermod, Vor, Urd and Vidar. The game shows the city alive: its classes, its library, its training halls and the Heartless prowling its alleys.\n\nThe students investigate the disappearance of several pupils and Masters, and the tragedy unfolds around Baldr, whose darkness ends up consuming the city. Xehanort, haunted by visions of a dark future, comes out convinced that darkness is necessary to the balance of the worlds, while Eraqus chooses the path of light. Their friendship and their disagreement, born on those stairways, foreshadow the tragedy of Birth by Sleep.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Après avoir forgé la χ-blade et ouvert Kingdom Hearts au Nécropole des Keyblades, Maître Xehanort s'enfuit à Scala ad Caelum, où Sora, Donald et Dingo le poursuivent. La cité apparaît vide et figée, ses escaliers menant à la tour au sommet de laquelle Xehanort attend. Sora y affronte d'abord des réplicas de Xehanort en armure, puis le vieux Maître lui-même, dans une bataille qui bouleverse le décor et renverse la ville sens dessus dessous.\n\nVaincu, Xehanort remet la χ-blade à Sora après qu'Eraqus, dont le cœur vivait en Terra, l'a apaisé ; les deux vieux amis disparaissent ensemble. Les Gardiens referment alors Kingdom Hearts. Dans Re Mind, Scala ad Caelum est le lieu du combat final rejoué avec tous les Gardiens réunis, puis, dans sa version « inversée », celui de l'affrontement contre le Xehanort en armure.",
          "After forging the χ-blade and opening Kingdom Hearts at the Keyblade Graveyard, Master Xehanort flees to Scala ad Caelum, where Sora, Donald and Goofy pursue him. The city appears empty and frozen, its stairways leading to the tower at whose top Xehanort waits. Sora first fights armoured Xehanort replicas there, then the old Master himself, in a battle that upends the scenery and turns the city upside down.\n\nDefeated, Xehanort hands the χ-blade to Sora after Eraqus, whose heart lived on in Terra, has soothed him; the two old friends fade away together. The Guardians then close Kingdom Hearts. In Re Mind, Scala ad Caelum is the setting of the final battle replayed with all the Guardians together, and then, in its “inverted” version, of the fight against the armoured Xehanort.",
        ),
      },
      {
        game: "missing-link",
        text: L(
      "Kingdom Hearts Missing-Link, jeu mobile annoncé en 2022, devait se dérouler à Scala ad Caelum à une époque intermédiaire, entre la Guerre des Keyblades et les événements de Dark Road. Le joueur y aurait incarné un nouveau Porteur mêlé à l'histoire de la ville, avec des phases de jeu en réalité augmentée dans le monde réel. Des tests fermés ont permis d'entrevoir une cité bien plus vivante que celle de Kingdom Hearts III, peuplée d'habitants et de commerces.\n\nSquare Enix a finalement annoncé en 2025 l'arrêt du développement du jeu, en indiquant que ses éléments d'histoire seraient réutilisés dans un projet ultérieur. Scala ad Caelum reste donc, pour l'heure, un monde dont une grande partie du passé n'a été racontée qu'à travers Dark Road.",
          "Kingdom Hearts Missing-Link, a mobile game announced in 2022, was to take place in Scala ad Caelum at an intermediate period, between the Keyblade War and the events of Dark Road. The player would have controlled a new wielder caught up in the city's history, with augmented-reality gameplay phases in the real world. Closed tests offered a glimpse of a city far livelier than the one in Kingdom Hearts III, populated with residents and shops.\n\nSquare Enix eventually announced in 2025 that development of the game had been discontinued, stating that its story elements would be reused in a later project. For now, Scala ad Caelum thus remains a world whose past has largely been told only through Dark Road.",
        ),
      },
    ],
    trivia: [
      L("Le nom est du latin et se traduit par « escalier vers le ciel » ; les personnages de Dark Road l'abrègent parfois en « Scala ».", "The name is Latin and translates as “stairway to heaven”; the characters of Dark Road sometimes shorten it to “Scala”."),
      L("Les Keyblades plantées au Cimetière et les toits de Scala ad Caelum partagent les mêmes motifs, soulignant que la ville est bâtie sur les ruines de l'ancien monde.", "The Keyblades planted in the Graveyard and Scala ad Caelum's roofs share the same motifs, underlining that the city is built on the old world's ruins."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Scala ad Caelum", url: "https://kingdomhearts.fandom.com/wiki/Scala_ad_Caelum" },
    ],
  },

  // ─────────────────────────── Domaine des Ténèbres ───────────────────────────
  "realm-of-darkness": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Domaine des Ténèbres est l'envers du Domaine de la Lumière : la dimension où vont les mondes engloutis et d'où proviennent les Sans-cœur. Il n'a pas de forme fixe et se compose de paysages fragmentaires : la Marge Sombre, plage au sable noir et à la mer immobile où Sora et Riku échouent à la fin de Kingdom Hearts II ; des grottes bleutées, des ruines de mondes disparus et, au bout, la porte de Kingdom Hearts.\n\nLe temps y passe autrement, et ceux qui s'y attardent voient leur cœur et leur corps se corrompre ou s'estomper ; seul un manteau noir permet de s'y déplacer sans dommage. Aqua y erre plus de dix ans, Mickey y trouve la Chaîne Royale D et Ansem le Sage y échoue après l'explosion de sa machine. Sa Keyblade attitrée est la Chaîne Royale D.",
          "The Realm of Darkness is the reverse of the Realm of Light: the dimension where swallowed worlds go and from which the Heartless come. It has no fixed shape and is made of fragmentary landscapes: the Dark Margin, a beach of black sand and motionless sea where Sora and Riku wash up at the end of Kingdom Hearts II; bluish caves, ruins of vanished worlds and, at the far end, the door to Kingdom Hearts.\n\nTime passes differently there, and those who linger see their heart and body corrupted or faded; only a black coat allows one to move through it unharmed. Aqua wanders there for over ten years, Mickey finds the Kingdom Key D there and Ansem the Wise washes up there after his machine explodes. Its designated Keyblade is the Kingdom Key D.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Le Domaine des Ténèbres n'est pas exploré dans Birth by Sleep, mais il en est la destination tragique. Après la bataille du Nécropole des Keyblades, Aqua retrouve Terra-Xehanort au Jardin Radieux et le combat ; l'ennemi, dans un dernier sursaut de volonté de Terra, se plonge lui-même dans les ténèbres. Aqua se jette à sa suite et, pour le sauver, lui abandonne son armure et sa Keyblade afin qu'il remonte vers la lumière.\n\nElle reste seule dans le Domaine, sans Keyblade, décidée à en sortir un jour pour retrouver ses amis. L'épilogue « Blank Points » la montre sur la Marge Sombre, en compagnie d'Ansem le Sage, qui évoque Sora comme la clé capable de ramener ceux qui souffrent. Cet exil ouvre directement sur A fragmentary passage.",
          "The Realm of Darkness is not explored in Birth by Sleep, but it is the game's tragic destination. After the battle at the Keyblade Graveyard, Aqua finds Terra-Xehanort in Radiant Garden and fights him; the enemy, in one last surge of Terra's will, plunges himself into darkness. Aqua throws herself after him and, to save him, gives up her armour and her Keyblade so that he can rise back towards the light.\n\nShe stays alone in the Realm, without a Keyblade, determined to leave one day and find her friends again. The “Blank Points” epilogue shows her on the Dark Margin with Ansem the Wise, who speaks of Sora as the key able to bring back those who suffer. That exile leads straight into A fragmentary passage.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Dans le premier Kingdom Hearts, le Domaine des Ténèbres se devine derrière la porte de Kingdom Hearts, à la Fin du Monde. Ansem, Sans-cœur de Xehanort, veut l'ouvrir en croyant que Kingdom Hearts est ténèbres ; c'est la lumière qui en jaillit et le détruit. Derrière la porte se pressent des milliers de Sans-cœur, et Sora, Donald et Dingo tentent de la refermer.\n\nLe roi Mickey apparaît alors de l'autre côté, Chaîne Royale D en main, aux côtés de Riku : tous deux acceptent de rester enfermés dans le Domaine des Ténèbres pour que la porte puisse être scellée. Ce sacrifice ouvre l'histoire de Riku dans Chain of Memories, qui commence justement dans ces ténèbres, et fait du Domaine l'endroit où le roi trouve la Keyblade capable de refermer Kingdom Hearts.",
          "In the first Kingdom Hearts, the Realm of Darkness is glimpsed behind the door to Kingdom Hearts at the End of the World. Ansem, Xehanort's Heartless, wants to open it believing Kingdom Hearts to be darkness; it is light that bursts out and destroys him. Behind the door throng thousands of Heartless, and Sora, Donald and Goofy try to close it.\n\nKing Mickey then appears on the other side, Kingdom Key D in hand, beside Riku: both agree to stay locked in the Realm of Darkness so that the door can be sealed. That sacrifice opens Riku's story in Chain of Memories, which begins precisely in that darkness, and makes the Realm the place where the king finds the Keyblade able to close Kingdom Hearts.",
        ),
      },
      {
        game: "0-2-birth-by-sleep-a-fragmentary-passage",
        text: L(
      "A fragmentary passage est entièrement consacré à l'errance d'Aqua dans le Domaine des Ténèbres, en parallèle des événements du premier Kingdom Hearts. Elle y traverse les vestiges de mondes engloutis, le Palais des Rêves, la Forêt des Nains et le Domaine Enchanté, déformés par les ténèbres, et y affronte son propre reflet, un fantôme né de ses doutes. Le jeu introduit aussi le système d'habillage de l'armure d'Aqua.\n\nSur la plage de la Marge Sombre, elle rencontre Mickey, venu chercher la Keyblade du Domaine des Ténèbres. Ils atteignent ensemble la porte de Kingdom Hearts juste au moment où Sora la referme, et Aqua se sacrifie pour repousser une Tour Démoniaque, restant prisonnière. L'épilogue, dans la Tour Mystérieuse, lance la mission de sauvetage de Kingdom Hearts III.",
          "A fragmentary passage is entirely devoted to Aqua's wandering in the Realm of Darkness, in parallel with the events of the first Kingdom Hearts. She crosses the remains of swallowed worlds, the Castle of Dreams, the Dwarf Woodlands and the Enchanted Dominion, warped by darkness, and faces her own reflection, a phantom born of her doubts. The game also introduces the outfit system for Aqua's armour.\n\nOn the beach of the Dark Margin she meets Mickey, come to find the Keyblade of the Realm of Darkness. Together they reach the door to Kingdom Hearts just as Sora closes it, and Aqua sacrifices herself to hold back a Demon Tower, remaining trapped. The epilogue, in the Mysterious Tower, launches the rescue mission of Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Kingdom Hearts III s'ouvre sur Riku et Mickey qui explorent le Domaine des Ténèbres pour retrouver Aqua. Sur la Marge Sombre, une Tour Démoniaque brise Point du Jour et les force à battre en retraite. Ils y reviennent plus tard, mais découvrent Aqua transformée : rongée par les ténèbres après dix ans d'errance, elle attaque Mickey et Riku.\n\nSora, ayant récupéré le Pouvoir de l'éveil, les rejoint en plongeant depuis les Îles du Destin. Il affronte Aqua corrompue aux côtés de Riku et la ramène à la lumière ; elle recouvre son apparence et ses amis la font sortir du Domaine. C'est aussi sur la Marge Sombre qu'Ansem, le Sans-cœur, retrouve Ansem le Sage et le remet à Demyx pour qu'il soit conduit au Jardin Radieux, un geste inattendu de la part de l'ennemi de Sora.",
          "Kingdom Hearts III opens with Riku and Mickey exploring the Realm of Darkness to find Aqua. On the Dark Margin, a Demon Tower breaks Way to the Dawn and forces them to retreat. They return later, but find Aqua transformed: eaten away by darkness after ten years of wandering, she attacks Mickey and Riku.\n\nSora, having recovered the power of waking, joins them by diving from Destiny Islands. He fights the corrupted Aqua beside Riku and brings her back to the light; she regains her appearance and her friends lead her out of the Realm. It is also on the Dark Margin that Ansem the Heartless finds Ansem the Wise and hands him to Demyx to be taken to Radiant Garden, an unexpected gesture from Sora's old enemy.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, 闇の世界, signifie « le monde des ténèbres ».", "The Japanese name, 闇の世界, means “the world of darkness”."),
      L("La Marge Sombre, avec sa mer immobile, est le décor de la fin de Kingdom Hearts II, de l'épilogue de Birth by Sleep et d'A fragmentary passage.", "The Dark Margin, with its motionless sea, is the setting of the end of Kingdom Hearts II, the epilogue of Birth by Sleep and A fragmentary passage."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Realm of Darkness", url: "https://kingdomhearts.fandom.com/wiki/Realm_of_Darkness" },
    ],
  },

  // ─────────────────────────── Quadratum ───────────────────────────
  "quadratum": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Quadratum est une métropole moderne inspirée de Tokyo et en particulier du quartier de Shibuya : carrefours immenses, écrans géants, gratte-ciel de verre et tours de bureaux. Elle relève de ce que les personnages appellent l'« irréalité », un monde situé de l'autre côté de la réalité des mondes de la saga, où un cœur ne peut se rendre qu'en mourant ou en payant un prix. Le nom, latin, signifie « carré ».\n\nC'est le monde de Yozora, héros du jeu fictif Verum Rex évoqué dans la Boîte à Jouets, et le lieu où Sora se réveille après avoir usé du Pouvoir de l'éveil pour sauver Kairi. Quadratum est présentée comme le cadre principal de Kingdom Hearts IV, qui ouvre le nouvel arc de la saga, « Lost Master », et adopte pour l'occasion une esthétique plus réaliste.",
          "Quadratum is a modern metropolis inspired by Tokyo and specifically the Shibuya district: huge crossings, giant screens, glass skyscrapers and office towers. It belongs to what the characters call “unreality”, a world on the other side of the reality of the series' worlds, which a heart can only reach by dying or by paying a price. The name, in Latin, means “square”.\n\nIt is the world of Yozora, hero of the fictional game Verum Rex mentioned in the Toy Box, and the place where Sora wakes after using the power of waking to save Kairi. Quadratum is presented as the main setting of Kingdom Hearts IV, which opens the series' new arc, “Lost Master”, and adopts a more realistic look for the occasion.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Quadratum apparaît dans la cinématique secrète de Kingdom Hearts III, « Yozora » : Sora, qui a disparu des Îles du Destin après avoir ramené Kairi, se réveille allongé sur la chaussée d'un carrefour de la ville, sous le regard d'un jeune homme aux yeux vairons debout au sommet d'un immeuble, tandis que Riku se réveille dans un autre lieu inconnu. Le Maître des Maîtres observe la scène.\n\nRe Mind ajoute un épisode dédié : après les combats de données de Limitcut, Sora est invité par une étoile sans nom à affronter Yozora dans une version onirique de Quadratum, la nuit, au milieu des enseignes lumineuses. Selon l'issue du combat, Yozora prend Sora avec lui ou lui rend sa liberté, en disant qu'il a été envoyé pour le sauver. Les deux fins montrent Yozora se réveillant dans une voiture, dans une ville identique.",
          "Quadratum appears in the secret movie of Kingdom Hearts III, “Yozora”: Sora, who vanished from Destiny Islands after bringing Kairi back, wakes lying on the road at one of the city's crossings, watched by a young man with mismatched eyes standing on top of a building, while Riku wakes in another unknown place. The Master of Masters observes the scene.\n\nRe Mind adds a dedicated episode: after the Limitcut data battles, Sora is invited by a nameless star to face Yozora in a dreamlike version of Quadratum, at night, amid the glowing signs. Depending on the outcome of the fight, Yozora takes Sora with him or sets him free, saying he was sent to save him. Both endings show Yozora waking in a car, in an identical city.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
      "Melody of Memory apporte les premières explications. À la Tour Mystérieuse, Kairi raconte à Yen Sid, Mickey, Riku, Donald et Dingo ce qu'elle a perçu en plongeant dans ses souvenirs : Sora se trouve dans un monde qui n'appartient ni à la lumière ni aux ténèbres, une « irréalité » dont les habitants voient les mondes de la saga comme une fiction. Les Fées et Yen Sid identifient ce monde comme Quadratum.\n\nRiku, qui a rêvé d'un garçon dans une ville aux hautes tours, comprend qu'il a entrevu ce même monde, et se porte volontaire pour s'y rendre, en dépit du prix à payer. Les Fées lui préparent une tenue pour ce voyage tandis que Kairi choisit de s'entraîner. L'épilogue montre Riku prêt à partir, et Yozora, endormi dans sa voiture, rêvant de Sora.",
          "Melody of Memory brings the first explanations. At the Mysterious Tower, Kairi tells Yen Sid, Mickey, Riku, Donald and Goofy what she sensed while diving into her memories: Sora is in a world that belongs to neither light nor darkness, an “unreality” whose inhabitants see the series' worlds as fiction. The Fairies and Yen Sid identify that world as Quadratum.\n\nRiku, who dreamt of a boy in a city of tall towers, realises he glimpsed that same world and volunteers to go there, despite the price to pay. The Fairies prepare him an outfit for the journey while Kairi chooses to train. The epilogue shows Riku ready to leave, and Yozora asleep in his car, dreaming of Sora.",
        ),
      },
      {
        game: "kingdom-hearts-iv",
        text: L(
      "Kingdom Hearts IV, annoncé en 2022, fait de Quadratum son point de départ. La bande-annonce montre Sora, à l'apparence plus réaliste, qui se réveille dans un appartement de la ville sous le regard d'une jeune femme, Strelitzia, qui lui explique qu'il vit ici depuis sept jours. Dans les rues, un Darkside gigantesque s'abat sur le quartier et Sora l'affronte, Chaîne Royale en main, entre les immeubles.\n\nLa bande-annonce laisse entrevoir un jeu avec des mécaniques de combat renouvelées, une ville plus vaste que tout ce que la saga a proposé, et Donald et Dingo cherchant Sora dans un lieu sombre où résonne la voix d'Hadès. Le titre inaugure l'arc « Lost Master », centré sur le Maître des Maîtres, et sa sortie n'a pas encore été précisée lors des dernières communications officielles.",
          "Kingdom Hearts IV, announced in 2022, makes Quadratum its starting point. The trailer shows a more realistic-looking Sora waking in an apartment in the city under the gaze of a young woman, Strelitzia, who explains that he has been living here for seven days. In the streets, a gigantic Darkside crashes down on the district and Sora fights it, Kingdom Key in hand, among the buildings.\n\nThe trailer hints at a game with renewed combat mechanics, a city larger than anything the series has offered, and Donald and Goofy searching for Sora in a dark place where Hades's voice echoes. The title opens the “Lost Master” arc, centred on the Master of Masters, and its release date had not yet been specified in the latest official communications.",
        ),
      },
    ],
    trivia: [
      L("Quadratum reprend le quartier de Shibuya, déjà utilisé par Tetsuya Nomura dans The World Ends with You et dans les premiers prototypes de Final Fantasy XV, dont Yozora est un écho.", "Quadratum revisits the Shibuya district, already used by Tetsuya Nomura in The World Ends with You and in the early prototypes of Final Fantasy XV, of which Yozora is an echo."),
      L("Le nom latin Quadratum (« carré ») répond à Scala ad Caelum (« escalier vers le ciel »), autre monde au nom latin.", "The Latin name Quadratum (“square”) answers Scala ad Caelum (“stairway to heaven”), another world with a Latin name."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Quadratum", url: "https://kingdomhearts.fandom.com/wiki/Quadratum" },
    ],
  },

  // ─────────────────────────── Château Disney ───────────────────────────
  "disney-castle": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Château Disney est la demeure du roi Mickey et de la reine Minnie, inspirée du château de la Belle au bois dormant qui sert d'emblème aux parcs Disney, avec ses tours bleues et ses murs blancs. Autour vivent Donald, Daisy, Dingo, Pluto, ainsi que Tic et Tac, mécaniciens du vaisseau gummi caché dans le hangar sous le château. Les lieux marquants sont la salle du trône, la bibliothèque, le jardin aux topiaires et la salle des sculptures.\n\nLe monde est protégé des ténèbres par la Pierre Angulaire de Lumière, une relique conservée sous la salle du trône qui empêche les Sans-cœur d'y pénétrer. C'est le point de départ de Donald et Dingo dans le premier jeu, et Mickey y règne en tant que Maître de la Keyblade, disciple de Yen Sid. La Disneyville voisine, explorée dans Birth by Sleep, en est le versant populaire.",
          "Disney Castle is the home of King Mickey and Queen Minnie, inspired by the Sleeping Beauty Castle that serves as the emblem of the Disney parks, with its blue towers and white walls. Around them live Donald, Daisy, Goofy, Pluto, as well as Chip and Dale, mechanics of the gummi ship hidden in the hangar beneath the castle. The memorable spots are the throne room, the library, the topiary gardens and the hall of statues.\n\nThe world is shielded from darkness by the Cornerstone of Light, a relic kept beneath the throne room that keeps the Heartless from entering. It is Donald's and Goofy's starting point in the first game, and Mickey rules there as a Keyblade Master and pupil of Yen Sid. Neighbouring Disney Town, explored in Birth by Sleep, is its popular side.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le premier Kingdom Hearts s'ouvre, du côté de Donald et Dingo, au Château Disney. Un matin, Donald se rend dans la salle du trône pour saluer le roi et le trouve vide : seul Pluto est là, avec une lettre. Mickey y explique qu'il est parti enquêter sur la disparition des étoiles et charge Donald et Dingo de trouver celui qui porte « la clé », en insistant pour qu'ils ne le quittent jamais. Il conseille de rejoindre Léon à la Ville de Traverse.\n\nDaisy et Minnie apprennent la nouvelle, Jiminy Criquet est chargé de tenir le journal du voyage, et le trio quitte le hangar gummi sous les yeux de Tic et Tac. Le château n'est pas explorable dans ce premier jeu, mais cette scène d'ouverture fixe la mission de Donald et Dingo pour toute la suite.",
          "The first Kingdom Hearts opens, on Donald's and Goofy's side, in Disney Castle. One morning Donald goes to the throne room to greet the king and finds it empty: only Pluto is there, with a letter. Mickey explains that he has left to investigate the disappearance of the stars and tasks Donald and Goofy with finding the one who carries “the key”, insisting they never leave him. He advises them to meet Leon in Traverse Town.\n\nDaisy and Minnie hear the news, Jiminy Criquet is put in charge of the journey's journal, and the trio leaves the gummi hangar under the eyes of Chip and Dale. The castle cannot be explored in this first game, but that opening scene sets Donald's and Goofy's mission for everything that follows.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo se rendent au Château Disney lorsque Tic et Tac signalent que des Sans-cœur y sont apparus, ce qui n'aurait jamais dû être possible. La reine Minnie les guide jusqu'à la salle du trône, sous laquelle la Pierre Angulaire de Lumière est envahie d'épines : Maléfique cherche à prendre le contrôle du château en corrompant la relique depuis le passé.\n\nMerlin fait apparaître une porte vers la Rivière Intemporelle, où Sora affronte Pat d'autrefois et découvre l'origine de la Pierre Angulaire. Une fois le passé protégé, le château est débarrassé de ses épines, et Minnie offre à Sora la Keyblade Monochrome. Le monde reste ensuite un lieu de passage, où le trio peut revenir pour la Coupe de la Déesse du Destin.",
          "Sora, Donald and Goofy go to Disney Castle when Chip and Dale report that Heartless have appeared there, something that should never have been possible. Queen Minnie leads them to the throne room, beneath which the Cornerstone of Light is overrun by thorns: Maleficent is trying to take control of the castle by corrupting the relic from the past.\n\nMerlin conjures a door to the Timeless River, where Sora fights the Pete of old and learns the origin of the Cornerstone. Once the past is protected, the castle is rid of its thorns, and Minnie gives Sora the Monochrome Keyblade. The world then remains a stopping point, to which the trio can return for the Goddess of Fate Cup.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Re:coded se déroule en grande partie dans la bibliothèque du Château Disney, où Mickey, Donald, Dingo, Jiminy, Tic et Tac ont numérisé le journal de Jiminy pour comprendre le message mystérieux apparu dans ses pages. Depuis l'ordinateur, ils suivent la progression de Sora Données et interviennent quand les bugs s'aggravent.\n\nLa situation se complique lorsque Maléfique et Pat s'introduisent dans le château pour s'emparer du journal et se retrouvent, avec Mickey, Donald, Dingo et Jiminy, aspirés dans le monde de données. Sora Données doit alors les secourir à l'intérieur du Datascape, avant que le roi ne rédige à la fin du jeu la lettre destinée à Sora, celle-là même que Pluto apporte dans la Grotte Secrète à la fin de Kingdom Hearts II.",
          "Re:coded takes place largely in the library of Disney Castle, where Mickey, Donald, Goofy, Jiminy, Chip and Dale have digitised Jiminy's journal to understand the mysterious message that appeared in its pages. From the computer, they follow Data Sora's progress and step in when the bugs worsen.\n\nThings get complicated when Maleficent and Pete break into the castle and are drawn, together with Mickey, Donald, Goofy and Jiminy, into the data world in a bid to seize the journal. Data Sora must then rescue them inside the Datascape, before the king writes at the end of the game the letter meant for Sora, the very one Pluto brings to the Secret Place at the end of Kingdom Hearts II.",
        ),
      },
    ],
    trivia: [
      L("Le hangar gummi caché sous le jardin du château est le point de départ de tous les voyages de Donald et Dingo depuis le premier jeu.", "The gummi hangar hidden beneath the castle garden is the starting point of all of Donald's and Goofy's journeys since the first game."),
      L("Le Château Disney n'est explorable que dans Kingdom Hearts II ; ailleurs, il n'apparaît qu'en cinématique ou depuis la bibliothèque.", "Disney Castle is only explorable in Kingdom Hearts II; elsewhere it appears only in cutscenes or from the library."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Disney Castle", url: "https://kingdomhearts.fandom.com/wiki/Disney_Castle" },
    ],
  },

  // ─────────────────────────── Tour Mystérieuse ───────────────────────────
  "mysterious-tower": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Tour Mystérieuse est la demeure de Yen Sid, le sorcier de la séquence « L'Apprenti sorcier » de Fantasia (1940), dont Mickey était le disciple. Le jeu en fait un Maître de la Keyblade à la retraite, sage et grave, dont le chapeau bleu constellé et la barbe grise reprennent le personnage du film. La tour, penchée et biscornue, se dresse sur un îlot flottant au milieu d'un ciel étoilé, hors de tout monde.\n\nOn y trouve une succession de salles d'entraînement, la bibliothèque et le cabinet de Yen Sid, ainsi que la pièce des trois bonnes fées, Flora, Pâquerette et Pimprenelle, tirées de La Belle au bois dormant. Yen Sid y joue le rôle de mentor et de stratège pour les Porteurs, et la tour est le point de rendez-vous des Gardiens de la Lumière.",
          "The Mysterious Tower is the home of Yen Sid, the sorcerer from the “Sorcerer's Apprentice” segment of Fantasia (1940), whose pupil Mickey was. The game makes him a retired Keyblade Master, wise and grave, whose star-studded blue hat and grey beard reproduce the film's character. The tower, crooked and leaning, stands on a floating islet in the middle of a starry sky, outside any world.\n\nInside are a succession of training rooms, the library and Yen Sid's study, as well as the room of the three good fairies, Flora, Fauna and Merryweather, taken from Sleeping Beauty. Yen Sid acts there as mentor and strategist for the wielders, and the tower is the meeting point of the Guardians of Light.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Mickey, alors apprenti de Yen Sid, s'entraîne à la Tour Mystérieuse et en part avec un Éclat d'Étoile pour aller voir les mondes, contre l'avis de son maître. Ventus, arrivé à son tour à la tour, y rencontre Yen Sid, qui lui apprend que Maître Eraqus a été vaincu par Terra et que Xehanort attend au Nécropole des Keyblades. Aqua vient elle aussi consulter le sorcier, qui lui confie ses inquiétudes.\n\nMickey est ramené inconscient à la tour par Aqua après le combat contre Vanitas, et Yen Sid, à la fin, le laisse repartir avec sa Keyblade en le félicitant. La tour devient ainsi, dès cette époque, le lieu où l'on prend la mesure des événements et où Yen Sid coordonne ce qui reste des Porteurs.",
          "Mickey, then Yen Sid's apprentice, trains at the Mysterious Tower and leaves it with a Star Shard to go see the worlds, against his master's advice. Ventus, reaching the tower in turn, meets Yen Sid there, who tells him that Master Eraqus has been struck down by Terra and that Xehanort waits at the Keyblade Graveyard. Aqua also comes to consult the sorcerer, who shares his worries with her.\n\nMickey is brought back unconscious to the tower by Aqua after the fight against Vanitas, and Yen Sid, at the end, lets him set off again with his Keyblade and his blessing. From that time on, the tower becomes the place where events are weighed and where Yen Sid coordinates what remains of the wielders.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo arrivent à la Tour Mystérieuse par le train magique de la Cité du Crépuscule et y croisent Pat, venu réveiller Yen Sid pour Maléfique. Le sorcier explique à Sora la nature des Sans-cœur et des Similis, lui montre l'Organisation XIII et le prévient que son voyage ne fait que commencer.\n\nLes trois fées lui offrent alors de nouveaux vêtements, capables de changer de forme grâce aux Formes de Fusion, et Yen Sid lui remet la Keyblade Star Seeker. Depuis la tour, Sora prend son nouveau vaisseau gummi et repart vers les mondes. Maléfique, ressuscitée dans la salle voisine par le souvenir des fées, y reprend forme sous les yeux de Pat.",
          "Sora, Donald and Goofy reach the Mysterious Tower by the magic train from Twilight Town and run into Pete, sent to wake Yen Sid for Maleficent. The sorcerer explains to Sora the nature of Heartless and Nobodies, shows him Organization XIII and warns him that his journey is only beginning.\n\nThe three fairies then give him new clothes, able to change shape through Drive Forms, and Yen Sid hands him the Star Seeker Keyblade. From the tower, Sora takes his new gummi ship and sets out again for the worlds. Maleficent, resurrected in the next room by the fairies' memory of her, regains her form before Pete's eyes.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "La Tour Mystérieuse encadre l'examen de Maîtrise : Yen Sid y reçoit Sora et Riku, leur explique l'enjeu, le retour de Xehanort, et leur confie l'épreuve des sept Mondes Endormis. Mickey attend avec lui les nouvelles des deux candidats et s'inquiète des manipulations de l'Organisation.\n\nÀ la fin, tout le monde s'y retrouve : Sora, ramené par Riku, Lea, qui demande à apprendre la Keyblade, et Kairi, que Yen Sid fait venir pour la former. Yen Sid proclame Riku Maître de la Keyblade, tandis que Sora, qui a échoué mais garde sa bonne humeur, repart s'entraîner. La scène finale, dans laquelle Sora fait ses adieux à ses amis depuis la porte de la tour, ouvre la voie à Kingdom Hearts III.",
          "The Mysterious Tower frames the Mark of Mastery exam: Yen Sid receives Sora and Riku there, explains what is at stake, Xehanort's return, and sets them the trial of the seven Sleeping Worlds. Mickey waits with him for news of the two candidates and worries about the Organization's manipulations.\n\nAt the end, everyone gathers there: Sora, brought back by Riku, Lea, who asks to learn the Keyblade, and Kairi, whom Yen Sid summons to train her. Yen Sid proclaims Riku a Keyblade Master, while Sora, who failed but keeps his good cheer, sets off to train again. The final scene, in which Sora bids his friends farewell from the tower door, opens the way to Kingdom Hearts III.",
        ),
      },
      {
        game: "0-2-birth-by-sleep-a-fragmentary-passage",
        text: L(
      "L'épilogue d'A fragmentary passage se déroule à la Tour Mystérieuse, où Mickey achève de raconter à Yen Sid, Riku et Kairi sa rencontre avec Aqua dans le Domaine des Ténèbres. Yen Sid comprend qu'il faut la sauver et réveiller Ventus, et confie à Mickey et Riku la mission de retourner dans les ténèbres.\n\nKairi et Lea sont envoyés s'entraîner auprès de Merlin, dans un lieu hors du temps, pour rejoindre les Gardiens à temps. C'est aussi là que Sora arrive, joyeux, pour apprendre qu'il a perdu presque toute sa force pendant l'examen : Yen Sid l'envoie chez Hercule pour retrouver son pouvoir, ce qui ouvre Kingdom Hearts III.",
          "The epilogue of A fragmentary passage takes place at the Mysterious Tower, where Mickey finishes telling Yen Sid, Riku and Kairi of his meeting with Aqua in the Realm of Darkness. Yen Sid understands that she must be saved and Ventus awakened, and entrusts Mickey and Riku with returning to the darkness.\n\nKairi and Lea are sent to train under Merlin, in a place outside time, so they can join the Guardians in time. It is also there that Sora arrives, cheerful, to learn that he has lost almost all his strength during the exam: Yen Sid sends him to Hercules to recover his power, which opens Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "La Tour Mystérieuse est la base de Kingdom Hearts III. Sora, Donald et Dingo en partent pour l'Olympe et y reviennent entre les mondes ; Riku y reçoit Braveheart après la perte de Point du Jour, et Mickey y prépare avec lui le retour dans le Domaine des Ténèbres. Yen Sid y organise la stratégie contre Xehanort : rassembler sept Gardiens capables de tenir tête aux treize ténèbres.\n\nAprès la victoire, la tour est le lieu où les amis se rassemblent avant de regagner les Îles du Destin, et où Yen Sid apprend la disparition de Sora. Dans Melody of Memory, c'est encore dans son cabinet que Kairi livre ce qu'elle a compris de la position de Sora, et que Riku décide de partir pour Quadratum.",
          "The Mysterious Tower is the base of Kingdom Hearts III. Sora, Donald and Goofy leave it for Olympus and return between worlds; Riku receives Braveheart there after losing Way to the Dawn, and Mickey prepares the return to the Realm of Darkness with him. Yen Sid organises the strategy against Xehanort there: gather seven Guardians able to stand up to the thirteen darknesses.\n\nAfter the victory, the tower is where the friends gather before heading back to Destiny Islands, and where Yen Sid learns of Sora's disappearance. In Melody of Memory, it is again in his study that Kairi shares what she has understood of Sora's whereabouts, and that Riku decides to leave for Quadratum.",
        ),
      },
    ],
    trivia: [
      L("Le nom Yen Sid est « Disney » écrit à l'envers, un clin d'œil des animateurs de Fantasia à Walt Disney.", "The name Yen Sid is “Disney” spelled backwards, a nod from the animators of Fantasia to Walt Disney."),
      L("La tour apparaît aussi comme monde endormi, la Symphonie du Sorcier, dans Dream Drop Distance, sous une forme entièrement musicale.", "The tower also appears as a Sleeping World, Symphony of Sorcery, in Dream Drop Distance, in a fully musical form."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Mysterious Tower", url: "https://kingdomhearts.fandom.com/wiki/Mysterious_Tower" },
    ],
  },

  // ─────────────────────────── Olympe ───────────────────────────
  "olympus": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "L'Olympe est l'adaptation d'Hercule (1997), le film Disney inspiré de la mythologie grecque, au trait anguleux et coloré. La saga en reprend Hercule, Phil le satyre, Pégase, Mégara, Hadès et ses Titans, ainsi que l'humour du film. Jusqu'à Kingdom Hearts II, le monde se limite au Colisée de l'Olympe, l'arène où Phil entraîne les héros, puis s'étend au Monde Souterrain d'Hadès ; Kingdom Hearts III y ajoute enfin la ville de Thèbes, le mont Olympe et le Domaine des Dieux.\n\nC'est le monde des tournois : les coupes du Colisée opposent Sora à des vagues d'ennemis et à des invités de Final Fantasy, Cloud, Sephiroth, Auron, Zack, souvent sous contrat avec Hadès. Le monde apparaît dans presque tous les épisodes et sert de terrain d'entraînement récurrent.",
          "Olympus is the adaptation of Hercules (1997), the Disney film inspired by Greek mythology, with its angular, colourful style. The series borrows Hercules, Phil the satyr, Pegasus, Megara, Hades and his Titans, as well as the film's humour. Until Kingdom Hearts II, the world is limited to Olympus Coliseum, the arena where Phil trains heroes, then extends to Hades's Underworld; Kingdom Hearts III finally adds the city of Thebes, Mount Olympus and the Realm of the Gods.\n\nIt is the world of tournaments: the Coliseum cups pit Sora against waves of enemies and Final Fantasy guests, Cloud, Sephiroth, Auron, Zack, often under contract with Hades. The world appears in almost every game and serves as a recurring training ground.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Dix ans avant Sora, Terra, Ventus et Aqua participent tour à tour aux Jeux du Colisée, où Phil entraîne un jeune Hercule encore inexpérimenté et où un nouveau venu, Zack, rêve de devenir un héros. Hadès convainc Terra de s'inscrire et manipule Zack, plongé dans les ténèbres, pour l'opposer au Porteur ; Terra libère Zack et refuse l'offre d'Hadès.\n\nVentus se lie avec Hercule et Zack, et affronte avec eux un Nescient géant qui envahit l'arène, révélant à Hercule qu'un vrai héros se mesure au cœur. Aqua, enfin, remporte la finale contre Zack, qui lui propose un rendez-vous une fois devenu héros. Ces épisodes montrent Hercule avant sa gloire et posent les bases de la relation entre le Colisée et les Porteurs.",
          "Ten years before Sora, Terra, Ventus and Aqua each take part in the Coliseum Games, where Phil trains a young and still inexperienced Hercules and where a newcomer, Zack, dreams of becoming a hero. Hades persuades Terra to enter and manipulates Zack, plunged into darkness, to pit him against the wielder; Terra frees Zack and refuses Hades's offer.\n\nVentus befriends Hercules and Zack and fights with them a giant Unversed that invades the arena, showing Hercules that a true hero is measured by the heart. Aqua, finally, wins the final against Zack, who asks her on a date once he becomes a hero. These episodes show Hercules before his fame and lay the foundations of the bond between the Coliseum and the wielders.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo arrivent au Colisée de l'Olympe et sont d'abord refusés par Phil, qui ne forme que des héros. Après une série d'épreuves, ils obtiennent le droit de participer aux Jeux, où Hadès a engagé Cloud, mercenaire à la recherche d'une personne disparue, pour éliminer Hercule. Cloud affronte Sora, puis les deux sont attaqués par Cerbère, que Sora vainc avec l'aide d'Hercule.\n\nLe monde propose ensuite les coupes Phil, Pégase, Hercule et, une fois la Forteresse Oubliée traversée, la coupe Hadès, où le dieu lui-même et le Titan de roche attendent. Kingdom Hearts Final Mix ajoute le Titan de glace et Sephiroth comme adversaires optionnels, et la serrure du Colisée se trouve derrière le piédestal de l'entrée, verrouillée après la première victoire.",
          "Sora, Donald and Goofy arrive at Olympus Coliseum and are first turned away by Phil, who only trains heroes. After a series of trials they earn the right to enter the Games, where Hades has hired Cloud, a mercenary searching for a missing person, to eliminate Hercules. Cloud fights Sora, then both are attacked by Cerberus, whom Sora defeats with Hercules's help.\n\nThe world then offers the Phil, Pegasus, Hercules and, once Hollow Bastion is cleared, Hades cups, where the god himself and the Rock Titan await. Kingdom Hearts Final Mix adds the Ice Titan and Sephiroth as optional opponents, and the Coliseum's keyhole lies behind the pedestal at the entrance, sealed after the first victory.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora atterrit cette fois dans le Monde Souterrain d'Hadès, où il rencontre Auron, guerrier tiré de la mort par le dieu pour tuer Hercule. Affaibli par la malédiction des lieux, Sora doit récupérer la Pierre de l'Olympe volée par Pat, tandis que Mégara se rend chez Hadès pour négocier le repos d'Hercule. Hadès libère l'Hydre, qui détruit le Colisée, et Hercule, épuisé, perd toute confiance en lui.\n\nLors de la seconde visite, Hadès contrôle Auron grâce à une statue et l'oblige à combattre Sora ; Auron libéré, tous descendent affronter le dieu dans son palais, où Hercule retrouve sa force en sauvant Mégara. Les coupes du Monde Souterrain, dont la Coupe de la Déesse du Destin et la Coupe du Paradoxe d'Hadès, offrent les combats les plus longs du jeu.",
          "This time Sora lands in Hades's Underworld, where he meets Auron, a warrior drawn back from death by the god to kill Hercules. Weakened by the curse of the place, Sora has to recover the Olympus Stone stolen by Pete, while Megara goes to Hades to bargain for Hercules's rest. Hades releases the Hydra, which destroys the Coliseum, and an exhausted Hercules loses all faith in himself.\n\nOn the second visit, Hades controls Auron with a statue and forces him to fight Sora; once Auron is freed, everyone goes down to face the god in his palace, where Hercules regains his strength by saving Megara. The Underworld cups, including the Goddess of Fate Cup and the Hades Paradox Cup, offer the longest fights in the game.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "L'Olympe est le premier monde de Kingdom Hearts III : Yen Sid y envoie Sora pour demander à Hercule comment il a retrouvé sa force après l'avoir perdue. Le trio découvre Thèbes en flammes, attaquée par le Titan de roche, et apprend qu'Hadès a libéré les Titans pour renverser Zeus. Sora sauve la ville avec Hercule, puis gravit le mont Olympe jusqu'au Domaine des Dieux.\n\nAu sommet, Sora, Donald, Dingo et Hercule affrontent les Titans de glace, de lave et de vent, puis libèrent Zeus, qui repousse les Titans avec Hercule. Maléfique et Pat, venus chercher la boîte noire, repartent bredouilles. Hercule confie à Sora que sa force lui est revenue en risquant sa vie pour Mégara, une réponse que Sora comprendra plus tard. Le Colisée n'est pas explorable, mais Sora repart avec une nouvelle Keyblade et un lien renforcé avec Hercule.",
          "Olympus is the first world of Kingdom Hearts III: Yen Sid sends Sora there to ask Hercules how he recovered his strength after losing it. The trio finds Thebes in flames, attacked by the Rock Titan, and learns that Hades has freed the Titans to overthrow Zeus. Sora saves the city with Hercules, then climbs Mount Olympus to the Realm of the Gods.\n\nAt the summit, Sora, Donald, Goofy and Hercules fight the Ice, Lava and Tornado Titans, then free Zeus, who drives the Titans back with Hercules. Maleficent and Pete, come in search of the black box, leave empty-handed. Hercules tells Sora that his strength returned when he risked his life for Megara, an answer Sora will understand later. The Coliseum cannot be explored, but Sora leaves with the Hero's Origin Keyblade and a renewed bond with Hercules.",
        ),
      },
    ],
    trivia: [
      L("En français, le monde s'appelle Colisée de l'Olympe jusqu'à Kingdom Hearts II, puis simplement Olympe dans Kingdom Hearts III.", "In French the world is called Colisée de l'Olympe until Kingdom Hearts II, then simply Olympe in Kingdom Hearts III."),
      L("Cloud, Sephiroth, Auron et Zack, tous issus de Final Fantasy, font leurs apparitions dans la saga à travers ce monde.", "Cloud, Sephiroth, Auron and Zack, all from Final Fantasy, make their entrances into the series through this world."),
      L("Le style anguleux de la version Kingdom Hearts III reprend le design de Gerald Scarfe, illustrateur du film de 1997.", "The angular style of the Kingdom Hearts III version follows the design of Gerald Scarfe, illustrator of the 1997 film."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Olympus Coliseum", url: "https://kingdomhearts.fandom.com/wiki/Olympus_Coliseum" },
      { label: "Kingdom Hearts Wiki — Olympus", url: "https://kingdomhearts.fandom.com/wiki/Olympus" },
    ],
  },

  // ─────────────────────────── Agrabah ───────────────────────────
  "agrabah": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Agrabah est l'adaptation d'Aladdin (1992), le classique Disney situé dans une cité d'Orient imaginaire. La saga en reprend Aladdin et Abu, la princesse Jasmine, le Génie, le tapis volant, Iago, et le vizir Jafar, sorcier ambitieux qui rêve de s'emparer de la lampe. Le monde se compose de la ville aux ruelles et aux toits, du palais du Sultan, du désert et de la Caverne aux Merveilles, gardée par une tête de tigre géante.\n\nLe premier jeu suit le film de près en y greffant l'alliance de Jafar avec Maléfique, tandis que Kingdom Hearts II s'inspire du Retour de Jafar et de sa lampe noire. Agrabah est l'un des mondes les plus visités de la saga et le Génie y devient l'une des invocations favorites de Sora. Jasmine est une Princesse de Cœur, ce qui fait de la cité une cible pour les ténèbres.",
          "Agrabah is the adaptation of Aladdin (1992), the Disney classic set in an imaginary Eastern city. The series borrows Aladdin and Abu, Princess Jasmine, the Genie, the magic carpet, Iago and the vizier Jafar, an ambitious sorcerer who dreams of seizing the lamp. The world is made of the city with its alleys and rooftops, the Sultan's palace, the desert and the Cave of Wonders, guarded by a giant tiger head.\n\nThe first game follows the film closely while grafting on Jafar's alliance with Maleficent, whereas Kingdom Hearts II draws on The Return of Jafar and its black lamp. Agrabah is one of the most visited worlds of the series and the Genie becomes one of Sora's favourite summons there. Jasmine is a Princess of Heart, which makes the city a target for darkness.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo trouvent Agrabah envahie par les Sans-cœur, que Jafar contrôle en tant qu'allié de Maléfique. Le vizir cherche Jasmine, Princesse de Cœur, et la serrure du monde. Sora rencontre Aladdin dans le désert, où le jeune homme utilise son premier vœu pour se sortir des sables mouvants et libère le Génie, puis tous rentrent défendre la ville.\n\nJafar s'empare de Jasmine et de la lampe, et le groupe le poursuit à l'intérieur de la Caverne aux Merveilles. Sora l'affronte deux fois, d'abord en sorcier, puis, dans le repaire de lave, sous la forme d'un génie rouge dont il faut frapper la lampe tenue par Iago. Jasmine est enlevée par Riku pendant le combat, mais Sora scelle la serrure de la Caverne. Aladdin, resté à Agrabah, prête le Génie à Sora comme invocation.",
          "Sora, Donald and Goofy find Agrabah overrun by Heartless, controlled by Jafar as Maleficent's ally. The vizier is looking for Jasmine, a Princess of Heart, and for the world's keyhole. Sora meets Aladdin in the desert, where the young man uses his first wish to escape the quicksand and releases the Genie, then everyone heads back to defend the city.\n\nJafar seizes Jasmine and the lamp, and the group chases him into the Cave of Wonders. Sora fights him twice, first as a sorcerer, then, in the lava lair, as a red genie whose lamp, held by Iago, must be struck. Jasmine is taken by Riku during the fight, but Sora seals the Cave's keyhole. Aladdin, staying in Agrabah, lends the Genie to Sora as a summon.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Agrabah fait partie des mondes recréés au Manoir Oblivion à partir des souvenirs de Sora. Il y revit sa rencontre avec Aladdin dans la Caverne aux Merveilles et l'affrontement avec Jafar, qui a de nouveau pris Jasmine en otage. Le Génie, transformé en carte d'invocation, est l'un des atouts les plus puissants du jeu de cartes.\n\nComme les autres mondes de souvenirs, cet Agrabah est peuplé de figures sans vraie mémoire, qui ne se rappellent pas Sora tout en ressentant un lien avec lui. Dans Reverse/Rebirth, Riku traverse un Agrabah de ténèbres où il affronte un Jafar-génie, apprenant à maîtriser le Mode Ténèbres.",
          "Agrabah is among the worlds recreated in Castle Oblivion from Sora's memories. He relives his meeting with Aladdin in the Cave of Wonders and the confrontation with Jafar, who has once again taken Jasmine hostage. The Genie, turned into a summon card, is one of the strongest assets in the card game.\n\nLike the other memory worlds, this Agrabah is peopled with figures without real memory, who do not remember Sora while feeling a bond with him. In Reverse/Rebirth, Riku crosses an Agrabah of darkness where he fights Genie Jafar, learning to master Dark Mode.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Agrabah est l'un des mondes de mission de Roxas, qui y est envoyé collecter des cœurs et enquêter sur les Sans-cœur du désert. Il y assiste, sans intervenir, à la reconstruction de la ville par Aladdin et Jasmine après le passage de Jafar, et observe le lien qui unit les deux jeunes gens, sans comprendre ce que signifie tenir à quelqu'un.\n\nAu fil des missions, Roxas explore la Caverne aux Merveilles pour désamorcer un mécanisme qui menace la ville et affronte un Sans-cœur fourmilion dans le désert. Xion l'accompagne parfois, et leurs échanges sur les habitants d'Agrabah nourrissent la réflexion de Roxas sur ce que sont les cœurs. Aladdin ne rencontre jamais directement les deux Similis.",
          "Agrabah is one of Roxas's mission worlds, where he is sent to collect hearts and investigate the Heartless of the desert. He watches, without intervening, Aladdin and Jasmine rebuilding the city after Jafar's rampage, and observes the bond between the two young people without understanding what it means to care for someone.\n\nOver the missions, Roxas explores the Cave of Wonders to defuse a mechanism threatening the city and fights an Antlion Heartless in the desert. Xion sometimes goes with him, and their exchanges about the people of Agrabah feed Roxas's reflection on what hearts are. Aladdin never directly meets the two Nobodies.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, Sora retrouve Agrabah en pleine tempête de sable et découvre Iago, repenti, qui cherche à se faire pardonner. Pat, venu au nom de Maléfique, veut libérer Jafar de sa lampe pour en faire un allié. Le groupe accompagne Aladdin dans la Caverne aux Merveilles et affronte un Sans-cœur gardien avant de sécuriser la lampe.\n\nÀ la seconde visite, un marchand ambulant a libéré Jafar, qui menace la ville depuis les Ruines du Désert. Iago, capturé, sert d'appât ; Sora, Aladdin et le tapis volant affrontent Jafar-génie au-dessus de la ville, dans un combat aérien. Jafar est enfin détruit et Sora reçoit une nouvelle Keyblade en forme de lampe. Le Génie est jouable en invocation tout au long du jeu.",
          "A year later, Sora finds Agrabah in the middle of a sandstorm and meets a repentant Iago seeking forgiveness. Pete, come on Maleficent's behalf, wants to free Jafar from his lamp to make him an ally. The group goes with Aladdin into the Cave of Wonders and fights a guardian Heartless before securing the lamp.\n\nOn the second visit, a peddler has released Jafar, who threatens the city from the Ruined Chamber in the desert. Iago, captured, serves as bait; Sora, Aladdin and the magic carpet fight Genie Jafar above the city in an aerial battle. Jafar is finally destroyed and Sora receives the Wishing Lamp Keyblade. The Genie is available as a summon throughout the game.",
        ),
      },
    ],
    trivia: [
      L("Agrabah est le monde Disney qui revient le plus souvent dans la saga jusqu'à Dream Drop Distance, avec cinq apparitions.", "Agrabah is the Disney world that returns most often in the series up to Dream Drop Distance, with five appearances."),
      L("Le Génie est doublé en français par Richard Darbois, comme dans le film d'animation.", "The Genie is voiced in French by Richard Darbois, as in the animated film."),
      L("Kingdom Hearts II adapte Le Retour de Jafar (1994), suite en vidéo du film, plutôt que le film original.", "Kingdom Hearts II adapts The Return of Jafar (1994), the film's direct-to-video sequel, rather than the original film."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Agrabah", url: "https://kingdomhearts.fandom.com/wiki/Agrabah" },
    ],
  },

  // ─────────────────────────── Atlantica ───────────────────────────
  "atlantica": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Atlantica est l'adaptation de La Petite Sirène (1989), le film qui a relancé l'animation Disney. On y retrouve Ariel, la sirène curieuse des humains, son père le roi Triton et son trident, Sébastien le crabe, Polochon, Ursula la sorcière des mers avec ses murènes Flotsam et Jetsam, et le prince Eric. Le monde est entièrement sous-marin : le palais de Triton, la grotte aux trésors d'Ariel, l'épave du navire et l'antre d'Ursula.\n\nPour s'y fondre, Sora prend la forme d'un triton à queue de dauphin, Donald celle d'un demi-poulpe et Dingo d'une tortue. La nage libre en trois dimensions fait du monde l'un des plus déroutants du premier jeu, tandis que Kingdom Hearts II le transforme en comédie musicale rythmée, adaptée des chansons du film.",
          "Atlantica is the adaptation of The Little Mermaid (1989), the film that relaunched Disney animation. It features Ariel, the mermaid curious about humans, her father King Triton and his trident, Sebastian the crab, Flounder, Ursula the sea witch with her eels Flotsam and Jetsam, and Prince Eric. The world is entirely underwater: Triton's palace, Ariel's treasure grotto, the shipwreck and Ursula's lair.\n\nTo blend in, Sora takes the form of a merman with a dolphin tail, Donald becomes half-octopus and Goofy a turtle. Free three-dimensional swimming makes the world one of the most disorienting of the first game, while Kingdom Hearts II turns it into a rhythm-based musical adapted from the film's songs.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo se retrouvent transformés en créatures marines et rencontrent Ariel, Sébastien et Polochon, poursuivis par des Sans-cœur. Au palais, le roi Triton se méfie de la Keyblade, qu'il sait capable de faire tomber les mondes, et interdit à Ariel de chercher la serrure. Ursula, alliée de Maléfique, profite de la curiosité d'Ariel : la jeune sirène l'aide à trouver le trident et la sorcière s'en empare.\n\nSora poursuit Ursula jusqu'à son antre, l'affronte une première fois dans son chaudron, puis une seconde fois, devenue géante, au large. Le trident rendu, Triton révèle que la serrure se trouve dans la grotte aux trésors d'Ariel et laisse Sora la sceller. Ariel garde son rêve de voir d'autres mondes, et Sora repart avec une nouvelle Keyblade en forme de pince.",
          "Sora, Donald and Goofy find themselves turned into sea creatures and meet Ariel, Sebastian and Flounder, chased by Heartless. At the palace, King Triton distrusts the Keyblade, which he knows can bring worlds to ruin, and forbids Ariel from looking for the keyhole. Ursula, Maleficent's ally, takes advantage of Ariel's curiosity: the young mermaid helps her find the trident and the witch seizes it.\n\nSora pursues Ursula to her lair, fights her first in her cauldron, then a second time, grown gigantic, in open water. With the trident returned, Triton reveals that the keyhole lies in Ariel's treasure grotto and lets Sora seal it. Ariel keeps her dream of seeing other worlds, and Sora leaves with the Crabclaw Keyblade.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Atlantica est l'un des étages du Manoir Oblivion tirés des souvenirs de Sora. Sora y retrouve Ariel, qui a livré le trident à Ursula pour sauver Polochon, capturé par la sorcière. Le récit condensé du premier jeu se conclut sur un nouvel affrontement contre Ursula géante, où Sora doit frapper sa tête et ses tentacules dans un combat de cartes.\n\nComme partout dans le château, les personnages ne se souviennent pas vraiment de Sora, et le monde sert avant tout à tester des mécaniques de combat sous-marin adaptées au système de cartes. Dans l'histoire de Riku, Atlantica est un étage de ténèbres où le jeune homme affronte de nouveau Ursula, sans Ariel pour l'aider.",
          "Atlantica is one of the Castle Oblivion floors drawn from Sora's memories. Sora finds Ariel there, who has handed the trident to Ursula to save Flounder, captured by the witch. The condensed retelling of the first game ends on a new fight against a giant Ursula, where Sora must strike her head and tentacles in a card battle.\n\nAs everywhere in the castle, the characters do not truly remember Sora, and the world mainly serves to test underwater combat mechanics adapted to the card system. In Riku's story, Atlantica is a floor of darkness where he faces Ursula again, without Ariel to help him.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Kingdom Hearts II transforme Atlantica en comédie musicale : le monde se joue en une série de cinq chansons rythmées, sans combat classique. Sébastien prépare un concert et Ariel, amoureuse du prince Eric qu'elle a sauvé d'un naufrage, chante son désir de vivre parmi les humains. Sora, Donald et Dingo l'aident à retrouver une statue d'Eric et à répéter, tandis que Triton s'oppose à ses rêves.\n\nUrsula réapparaît et propose à Ariel un marché : des jambes contre sa voix. Devenue humaine, Ariel tente de séduire Eric, mais Ursula prend l'apparence de Vanessa pour l'épouser. Le final musical voit Sora affronter Ursula géante en chanson aux côtés d'Eric, qui la transperce avec la proue du navire. Triton bénit l'union d'Ariel et d'Eric, et Sora reçoit une nouvelle Keyblade.",
          "Kingdom Hearts II turns Atlantica into a musical: the world is played as a series of five rhythm songs, with no classic combat. Sebastian is preparing a concert and Ariel, in love with Prince Eric, whom she saved from a shipwreck, sings her longing to live among humans. Sora, Donald and Goofy help her find a statue of Eric and rehearse, while Triton opposes her dreams.\n\nUrsula reappears and offers Ariel a deal: legs in exchange for her voice. Now human, Ariel tries to win Eric over, but Ursula takes on the appearance of Vanessa to marry him. The finale, “A New Day is Dawning”, has Sora face a giant Ursula in song alongside Eric, who pierces her with the ship's prow. Triton blesses the union of Ariel and Eric, and Sora receives the Mysterious Abyss Keyblade.",
        ),
      },
    ],
    trivia: [
      L("« Sous l'océan » et « Partir là-bas » sont les seules chansons de film Disney chantées par les personnages dans la saga, avec celles de La Reine des neiges et de Raiponce.", "“Under the Sea” and “Part of Your World” are among the few Disney film songs sung by the characters in the series, together with those of Frozen and Tangled."),
      L("Ariel apparaît comme invocation dans Kingdom Hearts III, projetée hors de l'eau pour attaquer aux côtés de Sora.", "Ariel appears as a summon in Kingdom Hearts III, leaping out of the water to attack alongside Sora."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Atlantica", url: "https://kingdomhearts.fandom.com/wiki/Atlantica" },
    ],
  },

  // ─────────────────────────── Ville d'Halloween ───────────────────────────
  "halloween-town": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Ville d'Halloween adapte L'Étrange Noël de monsieur Jack (1993), le film d'animation en volume produit par Tim Burton et réalisé par Henry Selick. On y retrouve Jack Skellington, le roi des citrouilles, Sally, le docteur Finkelstein, le maire à deux visages, Zéro le chien fantôme, Oogie Boogie et ses trois sbires Am, Stram et Gram. Le monde comprend la place de la guillotine, le laboratoire du docteur, le cimetière, la colline courbée et le manoir d'Oogie Boogie.\n\nPour s'y fondre, Sora prend un costume de vampire avec une petite citrouille en guise de masque, Donald devient une momie et Dingo un Frankenstein. Kingdom Hearts II y ajoute la Ville de Noël, accessible par la porte en forme de sapin, avec le Père Noël, ce qui permet d'adapter la seconde partie du film. Jack combat aux côtés de Sora dans chaque visite.",
          "Halloween Town adapts The Nightmare Before Christmas (1993), the stop-motion film produced by Tim Burton and directed by Henry Selick. It features Jack Skellington, the Pumpkin King, Sally, Doctor Finkelstein, the two-faced Mayor, Zero the ghost dog, Oogie Boogie and his three henchmen Lock, Shock and Barrel. The world includes Guillotine Square, the doctor's laboratory, the graveyard, Curly Hill and Oogie Boogie's manor.\n\nTo blend in, Sora wears a vampire costume with a small pumpkin as a mask, Donald becomes a mummy and Goofy a Frankenstein's monster. Kingdom Hearts II adds Christmas Town, reached through the fir-tree door, with Santa Claus, which allows the second half of the film to be adapted. Jack fights alongside Sora on every visit.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo découvrent Jack Skellington en train de préparer la fête d'Halloween avec des Sans-cœur, qu'il compte animer grâce à un cœur artificiel fabriqué par le docteur Finkelstein. Le cœur, qui manque d'ingrédients, est volé par Am, Stram et Gram sur ordre d'Oogie Boogie, allié de Maléfique. Sally, inquiète, tente de dissuader Jack de jouer avec les ténèbres.\n\nLe groupe traverse le cimetière et la colline courbée jusqu'au manoir d'Oogie Boogie, où le sac de vers avale le cœur et affronte Sora dans une roulette géante. Une fois vaincu, Oogie fusionne avec son manoir, que Sora doit détruire en frappant ses cristaux de ténèbres. Jack comprend que le cœur artificiel était une erreur, et Sora scelle la serrure au sommet de la colline avant de repartir avec une Keyblade à tête de citrouille.",
          "Sora, Donald and Goofy find Jack Skellington preparing the Halloween festival with Heartless, which he plans to bring to life with an artificial heart made by Doctor Finkelstein. The heart, lacking ingredients, is stolen by Lock, Shock and Barrel on the orders of Oogie Boogie, Maleficent's ally. Sally, worried, tries to talk Jack out of playing with darkness.\n\nThe group crosses the graveyard and Curly Hill to Oogie Boogie's manor, where the bag of bugs swallows the heart and fights Sora on a giant roulette wheel. Once defeated, Oogie merges with his manor, which Sora has to destroy by striking its dark crystals. Jack realises the artificial heart was a mistake, and Sora seals the keyhole atop the hill before leaving with the Pumpkinhead Keyblade.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Dans le Manoir Oblivion, la Ville d'Halloween est reconstituée à partir des souvenirs de Sora. Le docteur Finkelstein y a mis au point une potion capable de raviver les vrais souvenirs, mais Am, Stram et Gram la dérobent pour Oogie Boogie, et les Sans-cœur se multiplient. Jack aide Sora à récupérer la fiole et Oogie Boogie est vaincu une nouvelle fois.\n\nLe thème de la potion des souvenirs fait écho à la situation de Sora dans le château, qui perd les siens à mesure qu'il avance : Finkelstein s'interroge sur ce qui fait la vérité d'un souvenir, et le monde tient ainsi une place particulière dans la mécanique narrative du jeu. Riku traverse aussi cet étage dans son histoire, en affrontant Oogie Boogie.",
          "In Castle Oblivion, Halloween Town is rebuilt from Sora's memories. Doctor Finkelstein has developed a potion able to revive true memories, but Lock, Shock and Barrel steal it for Oogie Boogie, and the Heartless multiply. Jack helps Sora recover the vial and Oogie Boogie is defeated once more.\n\nThe theme of the memory potion echoes Sora's situation in the castle, losing his own memories as he climbs: Finkelstein wonders what makes a memory true, and the world thus holds a special place in the game's narrative mechanics. Riku also crosses this floor in his story, facing Oogie Boogie.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "La Ville d'Halloween fait partie des mondes de mission de Roxas, qui y est envoyé collecter des cœurs et éliminer des Sans-cœur particuliers. Il y observe Jack Skellington, occupé à améliorer les décorations de la fête et à conduire des expériences avec le docteur Finkelstein, sans jamais se faire voir. Les missions mènent Roxas du cimetière au manoir d'Oogie Boogie, en passant par le laboratoire.\n\nUn des Sans-cœur à abattre est un géant qui se nourrit des décorations, et une autre mission met en scène un piège tendu par Am, Stram et Gram. Ces séjours sont l'occasion pour Roxas et Xion, qui l'accompagne parfois, de discuter du sens de fêtes qu'ils ne comprennent pas, faute de cœur. Le monde est aussi l'un des lieux du dernier combat contre Xion, qui y prend une forme monstrueuse.",
          "Halloween Town is one of Roxas's mission worlds, where he is sent to collect hearts and eliminate specific Heartless. He watches Jack Skellington busy improving the festival decorations and running experiments with Doctor Finkelstein, without ever being seen. The missions lead Roxas from the graveyard to Oogie Boogie's manor, by way of the laboratory.\n\nOne of the Heartless to be defeated is a giant that feeds on decorations, and another mission features a trap set by Lock, Shock and Barrel. These stays give Roxas and Xion, who sometimes goes with him, a chance to discuss the meaning of festivals they cannot understand, lacking hearts. The world is also one of the stages of the final battle against Xion, who takes a monstrous form there.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora retrouve Jack déguisé en Père Noël : il a découvert la Ville de Noël et veut en organiser la fête lui-même, au grand désespoir de Sally. Le trio passe la porte en forme de sapin et rencontre le vrai Père Noël, qui rassure Sora sur son existence. Maléfique et Pat ressuscitent Oogie Boogie pour s'emparer de la Ville de Noël, mais le sac de vers, amnésique, est vaincu sur la chaîne de fabrication des jouets.\n\nÀ la seconde visite, des cadeaux disparaissent, et Jack, Sora et le docteur Finkelstein enquêtent : le coupable est l'Expérience, une créature du docteur privée de cœur, qui voulait comprendre ce qu'est un cadeau. Jack finit par renoncer à remplacer le Père Noël et danse avec Sally sous la neige. Sora obtient une nouvelle Keyblade et, dans Final Mix, un costume de Noël pour Sora et ses amis.",
          "Sora finds Jack dressed as Santa Claus: he has discovered Christmas Town and wants to run the holiday himself, to Sally's dismay. The trio passes through the fir-tree door and meets the real Santa Claus, who reassures Sora about his existence. Maleficent and Pete resurrect Oogie Boogie to seize Christmas Town, but the amnesiac bag of bugs is defeated on the toy production line.\n\nOn the second visit, presents go missing, and Jack, Sora and Doctor Finkelstein investigate: the culprit is the Experiment, a heartless creature of the doctor's who wanted to understand what a present is. Jack finally gives up replacing Santa and dances with Sally in the snow. Sora obtains the Decisive Pumpkin Keyblade and, in Final Mix, Christmas costumes for himself and his friends.",
        ),
      },
    ],
    trivia: [
      L("Am, Stram et Gram sont les noms français de Lock, Shock et Barrel, conservés dans les jeux.", "Am, Stram and Gram are the French names of Lock, Shock and Barrel, kept in the games."),
      L("Les mondes de la Ville d'Halloween utilisent une palette désaturée et un style de rendu propre, hommage à l'animation en volume du film.", "The Halloween Town worlds use a desaturated palette and a distinct rendering style, a tribute to the film's stop-motion animation."),
      L("« This Is Halloween », la chanson d'ouverture du film, sert de thème au monde dans chaque épisode.", "“This Is Halloween”, the film's opening song, serves as the world's theme in every game."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Halloween Town", url: "https://kingdomhearts.fandom.com/wiki/Halloween_Town" },
    ],
  },

  // ─────────────────────────── Pays des Merveilles ───────────────────────────
  "wonderland": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Pays des Merveilles adapte Alice au pays des merveilles (1951), le classique Disney tiré de Lewis Carroll. On y retrouve Alice, le Lapin Blanc toujours en retard, le Chat de Cheshire et ses énigmes, la Reine de Cœur et son armée de cartes, et le Loir endormi. Le monde se compose du terrier et de sa chute, de la salle aux portes minuscules, du tribunal de la Reine, de la forêt aux lotus et du salon à l'envers, où l'on marche au plafond.\n\nL'exploration repose sur le changement de taille : en buvant et mangeant, Sora devient minuscule ou géant et accède à des zones cachées. Alice est l'une des sept Princesses de Cœur, ce qui explique l'intérêt des ténèbres pour ce monde, et le Chat de Cheshire y sert d'entité ambiguë, ni allié ni ennemi.",
          "Wonderland adapts Alice in Wonderland (1951), the Disney classic based on Lewis Carroll. It features Alice, the ever-late White Rabbit, the Cheshire Cat and his riddles, the Queen of Hearts and her army of cards, and the sleepy Dormouse. The world comprises the rabbit hole and its fall, the room of tiny doors, the Queen's court, the Lotus Forest and the Bizarre Room, where one walks on the ceiling.\n\nExploration relies on changing size: by drinking and eating, Sora becomes tiny or huge and reaches hidden areas. Alice is one of the seven Princesses of Heart, which explains darkness's interest in this world, and the Cheshire Cat acts there as an ambiguous entity, neither ally nor enemy.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo suivent le Lapin Blanc dans le terrier et arrivent au tribunal, où la Reine de Cœur juge Alice pour avoir soi-disant tenté de lui voler son cœur. Pour la disculper, le trio rassemble des preuves dans la forêt aux lotus, guidé par les énigmes du Chat de Cheshire, mais la Reine refuse d'entendre raison et ordonne l'attaque de ses cartes. Sora libère Alice en détruisant la tour qui la retient.\n\nAlice disparaît pourtant, enlevée par les ténèbres, et le Chat conduit le trio dans le salon à l'envers, où le Trickmaster, un Sans-cœur jongleur, les attend. Après sa défaite, la serrure du monde apparaît dans la bouche de la Poignée de porte parlante, qui bâille, et Sora la scelle sans avoir retrouvé Alice, qui réapparaîtra à la Forteresse Oubliée parmi les Princesses de Cœur.",
          "Sora, Donald and Goofy follow the White Rabbit down the hole and reach the court, where the Queen of Hearts is trying Alice for allegedly attempting to steal her heart. To clear her, the trio gathers evidence in the Lotus Forest, guided by the Cheshire Cat's riddles, but the Queen refuses to listen and orders her cards to attack. Sora frees Alice by destroying the tower holding her.\n\nAlice nonetheless vanishes, taken by darkness, and the Cat leads the trio into the Bizarre Room, where the Trickmaster, a juggling Heartless, awaits. After its defeat, the world's keyhole appears in the mouth of the yawning Doorknob, and Sora seals it without having found Alice, who will reappear at Hollow Bastion among the Princesses of Heart.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Le Pays des Merveilles est l'un des premiers étages du Manoir Oblivion, reconstitué à partir des souvenirs de Sora. La Reine de Cœur y accuse Alice d'avoir volé sa mémoire, et le Chat de Cheshire s'amuse à faire remarquer que Sora lui-même est en train de perdre la sienne. Sora défend Alice devant le tribunal et affronte de nouveau le Trickmaster.\n\nLe monde souligne le thème central du jeu : les souvenirs y sont traités comme des objets que l'on peut perdre ou dérober, à l'image de la potion de la Ville d'Halloween. Dans l'histoire de Riku, le Pays des Merveilles est un étage de sous-sol où il affronte les cartes de la Reine et le Trickmaster, avec l'aide occasionnelle de Mickey.",
          "Wonderland is one of the first floors of Castle Oblivion, rebuilt from Sora's memories. The Queen of Hearts accuses Alice of stealing her memory, and the Cheshire Cat amuses himself by pointing out that Sora himself is losing his. Sora defends Alice before the court and fights the Trickmaster again.\n\nThe world underlines the game's central theme: memories are treated there as objects that can be lost or stolen, much like the potion of Halloween Town. In Riku's story, Wonderland is a basement floor where he fights the Queen's cards and the Trickmaster, with occasional help from Mickey.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Roxas est envoyé plusieurs fois au Pays des Merveilles pour collecter des cœurs et enquêter sur les Sans-cœur qui perturbent la Reine de Cœur. Luxord l'accompagne lors d'une mission et lui enseigne, à sa manière joueuse, à lire les indices laissés dans le monde. Roxas découvre la salle aux portes, la forêt aux lotus et le tribunal, tout en évitant les cartes qui patrouillent.\n\nLes missions incluent la traque d'un Sans-cœur capable de voler les objets du Lapin Blanc et d'autres qui se cachent en changeant de taille. Xion, qui y est aussi envoyée, y confie à Roxas son inquiétude sur sa propre identité. Comme dans les autres mondes de 358/2 Days, les personnages Disney restent à distance, et l'histoire d'Alice n'est pas poursuivie.",
          "Roxas is sent to Wonderland several times to collect hearts and investigate the Heartless troubling the Queen of Hearts. Luxord accompanies him on one mission and teaches him, in his playful way, to read the clues left in the world. Roxas discovers the room of doors, the Lotus Forest and the court, while avoiding the patrolling cards.\n\nThe missions include hunting a Heartless able to steal the White Rabbit's belongings and others that hide by changing size. Xion, who is also sent there, confides in Roxas her worry about her own identity. As in the other worlds of 358/2 Days, the Disney characters stay at a distance, and Alice's story is not continued.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Dans le journal numérisé, le Pays des Merveilles est envahi de bugs qui ont effacé les souvenirs d'Alice : la jeune fille ne se rappelle plus ce qu'elle a vu, et la Reine de Cœur exige des preuves de son innocence. Sora Données doit retrouver dans la forêt aux lotus les « inklings », fragments de mémoire dispersés, avec l'aide du Chat de Cheshire, tout en débogant les zones corrompues.\n\nUne fois les souvenirs rendus à Alice, Sora affronte de nouveau le Trickmaster et découvre que les bugs de ce monde révèlent des données cachées du journal, indices sur le message mystérieux. Le monde propose aussi un chapitre en vue de dessus dans le salon à l'envers, l'une des variations de gameplay propres à Re:coded.",
          "In the digitised journal, Wonderland is overrun by bugs that have erased Alice's memories: the girl no longer remembers what she saw, and the Queen of Hearts demands proof of her innocence. Data Sora must find the “inklings”, scattered memory fragments, in the Lotus Forest with the Cheshire Cat's help, while debugging the corrupted areas.\n\nOnce Alice's memories are restored, Sora fights the Trickmaster again and finds that this world's bugs reveal hidden journal data, clues to the mysterious message. The world also offers a top-down chapter in the Bizarre Room, one of the gameplay variations specific to Re:coded.",
        ),
      },
    ],
    trivia: [
      L("Le Pays des Merveilles est le premier monde Disney que la plupart des joueurs visitent dans le premier Kingdom Hearts.", "Wonderland is the first Disney world most players visit in the first Kingdom Hearts."),
      L("Le salon à l'envers, où le trio marche au plafond, est inspiré d'une scène de coupe du film que Disney avait envisagée.", "The Bizarre Room, where the trio walks on the ceiling, is inspired by a cut scene Disney had considered for the film."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Wonderland", url: "https://kingdomhearts.fandom.com/wiki/Wonderland" },
    ],
  },

  // ─────────────────────────── Pays Imaginaire ───────────────────────────
  "neverland": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Pays Imaginaire adapte Peter Pan (1953), le classique Disney tiré de J. M. Barrie. On y retrouve Peter Pan, le garçon qui ne grandit jamais, la fée Clochette, Wendy, le capitaine Crochet et son second Mouche, les Enfants Perdus et le crocodile qui a avalé un réveil. Dans le premier jeu, le monde se limite au navire de Crochet, à ses cales et à la Tour de l'Horloge de Londres ; Birth by Sleep et 358/2 Days ouvrent l'île elle-même, avec sa plage, le Rocher du Crâne et le repaire des Enfants Perdus.\n\nLa particularité du monde est le vol : grâce à la poussière de fée de Clochette, Sora et ses compagnons peuvent voler librement, ce qui fait du Pays Imaginaire un des rares mondes à exploiter la verticalité. Peter Pan combat aux côtés de Sora dans le premier jeu et devient ensuite une invocation.",
          "Neverland adapts Peter Pan (1953), the Disney classic based on J. M. Barrie. It features Peter Pan, the boy who never grows up, the fairy Tinker Bell, Wendy, Captain Hook and his mate Smee, the Lost Boys and the crocodile that swallowed an alarm clock. In the first game the world is limited to Hook's ship, its holds and London's Clock Tower; Birth by Sleep and 358/2 Days open up the island itself, with its beach, Skull Rock and the Lost Boys' hideout.\n\nThe world's special feature is flight: thanks to Tinker Bell's pixie dust, Sora and his companions can fly freely, which makes Neverland one of the rare worlds to exploit verticality. Peter Pan fights alongside Sora in the first game and later becomes a summon.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Terra arrive sur l'île et se laisse convaincre par le capitaine Crochet que Peter Pan lui a volé un trésor contenant une lumière, en réalité Clochette enfermée dans une lanterne. Il en vient à affronter Peter Pan avant de comprendre la ruse et de libérer la fée. Ventus, lui, se joint aux Enfants Perdus dans leur chasse au trésor et vainc Crochet au Rocher du Crâne, avant de placer son épée de bois dans le coffre aux trésors.\n\nAqua, enfin, rencontre Peter Pan et Clochette au moment où Vanitas cherche à s'emparer de ce même coffre. Elle affronte Vanitas, qui brise l'épée de bois de Ventus, dans un combat qui la persuade de retrouver ses amis au plus vite. Le coffre aux trésors des Enfants Perdus relie ainsi les trois histoires, chaque disciple y laissant ou y trouvant une trace des autres.",
          "Terra reaches the island and lets Captain Hook convince him that Peter Pan stole a treasure containing a light, in fact Tinker Bell locked in a lantern. He ends up fighting Peter Pan before seeing through the trick and freeing the fairy. Ventus, for his part, joins the Lost Boys in their treasure hunt and defeats Hook at Skull Rock, before placing his wooden sword in the treasure chest.\n\nAqua, finally, meets Peter Pan and Tinker Bell just as Vanitas tries to seize that same chest. She fights Vanitas, who breaks Ventus's wooden sword, in a battle that convinces her to find her friends as soon as possible. The Lost Boys' treasure chest thus links the three stories, each pupil leaving or finding a trace of the others there.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le vaisseau gummi est capturé par le navire du capitaine Crochet, allié de Maléfique, qui détient Wendy et, à son bord, Kairi inanimée. Sora, Donald et Dingo s'échappent des cales avec Peter Pan, venu chercher Wendy, et Sora affronte sa propre ombre, qu'un Riku jaloux a matérialisée. Riku, jaloux, se sert de Kairi pour provoquer Sora, puis repart avec elle vers la Forteresse Oubliée.\n\nSur le pont, Sora affronte le capitaine Crochet, que le crocodile finit par chasser. Grâce à Clochette, le trio s'envole vers la Tour de l'Horloge de Londres, où Sora scelle la serrure du monde après avoir corrigé l'heure de l'horloge. Peter Pan devient une invocation, et Final Mix ajoute le Fantôme comme boss optionnel de la tour.",
          "The gummi ship is captured by Captain Hook's ship; Hook, Maleficent's ally, holds Wendy and, on board, an unconscious Kairi. Sora, Donald and Goofy escape the holds with Peter Pan, come to find Wendy, and Sora fights his own shadow, given form by a jealous Riku. Riku uses Kairi to provoke Sora, then leaves with her for Hollow Bastion.\n\nOn deck, Sora fights Captain Hook, whom the crocodile eventually chases off. Thanks to Tinker Bell, the trio flies to London's Clock Tower, where Sora seals the world's keyhole after correcting the clock's time. Peter Pan becomes a summon, and Final Mix adds the Phantom as an optional boss at the tower.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, le Pays Imaginaire se limite au navire de Crochet, tel que Sora s'en souvient. Wendy y a été enlevée par le capitaine, qui veut se venger de Peter Pan, et Sora se lie à ce dernier pour la libérer. Un désaccord oppose brièvement Peter Pan à Wendy, qui songe à rentrer à Londres pour grandir, avant que le combat contre Crochet sur le pont ne les réconcilie.\n\nComme dans les autres mondes de souvenirs, Sora mesure combien son propre passé lui échappe. Dans l'histoire de Riku, le Pays Imaginaire est un étage où le jeune homme retrouve le navire sur lequel il avait servi Maléfique, et affronte de nouveau le capitaine Crochet.",
          "In Castle Oblivion, Neverland is limited to Hook's ship, as Sora remembers it. Wendy has been kidnapped by the captain, who wants revenge on Peter Pan, and Sora teams up with the latter to free her. A brief disagreement sets Peter Pan against Wendy, who considers returning to London to grow up, before the fight against Hook on deck reconciles them.\n\nAs in the other memory worlds, Sora realises how much his own past is slipping away. In Riku's story, Neverland is a floor where he returns to the ship on which he served Maleficent, and fights Captain Hook again.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Le Pays Imaginaire de 358/2 Days est l'île entière, visitée par Roxas au cours de ses missions. Clochette lui offre la faculté de voler, et il croise le capitaine Crochet et Mouche en train de creuser des trous sur toute l'île à la recherche d'un trésor, sur la foi de cartes tracées par Pat pour attirer les Sans-cœur. Roxas observe la scène sans se mêler aux pirates.\n\nXigbar accompagne Roxas lors d'une mission et le pousse à réfléchir à ce que voient ses camarades quand ils le regardent, laissant entendre qu'il ressemble à quelqu'un d'autre. Le monde propose l'une des dernières missions du jeu, contre un Sans-cœur volant au-dessus de la mer, alors que Roxas commence à douter de l'Organisation.",
          "The Neverland of 358/2 Days is the whole island, visited by Roxas during his missions. Tinker Bell gives him the ability to fly, and he comes across Captain Hook and Smee digging holes all over the island in search of treasure, following maps drawn by Pete to attract the Heartless. Roxas watches without mixing with the pirates.\n\nXigbar accompanies Roxas on one mission and prompts him to think about what his colleagues see when they look at him, hinting that he resembles someone else. The world hosts one of the game's last missions, against a flying Heartless above the sea, as Roxas begins to doubt the Organization.",
        ),
      },
    ],
    trivia: [
      L("Le Pays Imaginaire du premier jeu est le seul monde Disney où l'on ne visite pas l'île elle-même, uniquement le navire et Londres.", "The Neverland of the first game is the only Disney world where the island itself is not visited, only the ship and London."),
      L("Le nom français, Pays Imaginaire, est celui du film de 1953 ; le japonais conserve « Neverland ».", "The French name, Pays Imaginaire, is that of the 1953 film; the Japanese keeps “Neverland”."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Neverland", url: "https://kingdomhearts.fandom.com/wiki/Neverland" },
    ],
  },

  // ─────────────────────────── Forêt des Rêves Bleus ───────────────────────────
  "hundred-acre-wood": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Forêt des Rêves Bleus adapte les histoires de Winnie l'ourson, tirées des livres d'A. A. Milne et des courts métrages Disney réunis dans Les Aventures de Winnie l'ourson (1977). On y retrouve Winnie, Porcinet, Tigrou, Coco Lapin, Bourriquet, Maître Hibou, Grand Gourou et Petit Gourou. Le monde est unique en son genre : il n'existe que dans un livre, que Sora ouvre pour entrer dans ses pages, et il n'y a jamais d'ennemi.\n\nÀ chaque visite, le livre est abîmé et il faut en rassembler les pages ou en réparer les liens pour débloquer une série de mini-jeux : cueillette de miel, cache-cache, courses, jardinage. Le monde offre une pause dans l'aventure et récompense le joueur de Keyblades et d'objets rares. Le livre est conservé chez Merlin, d'abord à la Ville de Traverse, puis à la Forteresse Oubliée.",
          "The Hundred Acre Wood adapts the Winnie the Pooh stories, drawn from A. A. Milne's books and the Disney shorts collected in The Many Adventures of Winnie the Pooh (1977). It features Pooh, Piglet, Tigger, Rabbit, Eeyore, Owl, Kanga and Roo. The world is one of a kind: it exists only inside a book, which Sora opens to step into its pages, and there is never an enemy.\n\nOn each visit the book is damaged and its pages must be gathered or its bonds repaired to unlock a series of minigames: honey gathering, hide-and-seek, races, gardening. The world offers a break in the adventure and rewards the player with Keyblades and rare items. The book is kept at Merlin's, first in Traverse Town, then in Hollow Bastion.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Merlin confie à Sora, à la Ville de Traverse, un vieux livre abîmé dont les pages ont été dispersées dans les mondes. En l'ouvrant, Sora se retrouve dans la Forêt des Rêves Bleus, où Winnie l'ourson, seul sur une souche, cherche ses amis. Chaque Page Déchirée retrouvée ailleurs rouvre une zone de la forêt et un mini-jeu : la cueillette de miel avec Winnie, le cache-cache avec Tigrou, la course du potager de Coco Lapin, la balançoire de Bourriquet.\n\nUne fois toutes les pages rassemblées, Winnie et ses amis se retrouvent pour une dernière aventure, et Sora reçoit la capacité Encouragement ainsi que des objets rares, dont un Orichalque. Le livre reste chez Merlin, et l'histoire se conclut sur Winnie qui promet de ne jamais oublier Sora, thème que Kingdom Hearts II reprendra.",
          "In Traverse Town, Merlin entrusts Sora with an old damaged book whose pages have been scattered across the worlds. Opening it, Sora finds himself in the Hundred Acre Wood, where Winnie the Pooh, alone on a log, is looking for his friends. Each Torn Page found elsewhere reopens an area of the wood and a minigame: honey gathering with Pooh, hide-and-seek with Tigger, the race through Rabbit's vegetable garden, Eeyore's swing.\n\nOnce all the pages are gathered, Pooh and his friends reunite for one last adventure, and Sora receives the Cheer ability along with rare items, including an Orichalcum. The book stays at Merlin's, and the story ends with Pooh promising never to forget Sora, a theme Kingdom Hearts II will take up.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, la Forêt des Rêves Bleus est un étage sans combat où Sora accompagne Winnie l'ourson dans sa recherche de ses amis, qui se sont tous perdus dans la forêt. L'exploration prend la forme d'une promenade linéaire, jalonnée de petits jeux : aider Porcinet effrayé, retrouver Petit Gourou, guider Winnie en ballon, gagner une course contre Tigrou.\n\nChaque ami retrouvé offre à Sora une récompense de cartes, et la promenade s'achève par une réunion autour d'un pot de miel. Comme dans le premier jeu, le monde souligne, par la naïveté de Winnie, le thème des amis que l'on n'oublie pas, en contraste avec les souvenirs que Sora perd à chaque étage.",
          "In Castle Oblivion, the Hundred Acre Wood is a fight-free floor where Sora accompanies Winnie the Pooh in his search for his friends, who have all got lost in the wood. Exploration takes the form of a linear stroll punctuated by small games: helping a frightened Piglet, finding Roo, guiding Pooh on a balloon, winning a race against Tigger.\n\nEach friend found gives Sora a card reward, and the stroll ends with a gathering around a honey pot. As in the first game, the world highlights, through Pooh's innocence, the theme of friends one never forgets, in contrast with the memories Sora loses on every floor.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Le livre est cette fois chez Merlin, à la Forteresse Oubliée, où Sora le retrouve avec joie. Mais des Sans-cœur attaquent la maison et abîment l'ouvrage : à sa visite suivante, Winnie ne se souvient plus de Sora. Il faut retrouver dans les mondes les Pages Déchirées, qui restaurent les souvenirs de Winnie et rouvrent la forêt.\n\nLes mini-jeux comprennent une expédition dans une grotte inquiétante avec Winnie, une glissade dans le miel avec Tigrou, une escalade de pots de miel et une chasse aux étoiles avec les amis réunis. Une fois tous les souvenirs rendus, Winnie retrouve Sora et le groupe fête ses retrouvailles ; Sora obtient une nouvelle Keyblade et, plus tard, l'Orichalque+ nécessaire à l'Arme Ultime.",
          "This time the book is at Merlin's in Hollow Bastion, where Sora is delighted to find it. But Heartless attack the house and damage the book: on his next visit, Pooh no longer remembers Sora. The Torn Pages must be found across the worlds, restoring Pooh's memories and reopening the wood.\n\nThe minigames include an expedition to the Spooky Cave with Pooh, a barrel ride with Tigger, the Honey Pot Hill expedition and star-catching with the reunited friends. Once all the memories are restored, Pooh recognises Sora again and the group celebrates; Sora obtains the Sweet Memories Keyblade and, later, the Orichalcum+ needed for the Ultima Weapon.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora retrouve le livre chez Merlin, dans la Cité du Crépuscule, et découvre à son ouverture une couverture pâle : Winnie, inquiet, craint que son ami ne l'ait oublié, ce qui a affaibli le livre. Sora le rassure et l'aide à réunir les amis dispersés, dans une version plus courte et plus intime du monde, réduite à quelques zones autour de la maison de Coco Lapin.\n\nLes mini-jeux prennent la forme de puzzles en trois volets, où il faut aligner des fruits et des légumes du potager : chaque victoire rapporte des ingrédients pour la cuisine de Rémy. Winnie et Sora se promettent une nouvelle fois de ne pas s'oublier, et Sora reçoit une nouvelle Keyblade en récompense. Le monde n'est pas nécessaire à l'intrigue mais reste un rendez-vous de la saga.",
          "Sora finds the book at Merlin's in Twilight Town and, on opening it, sees its cover has paled: Pooh, worried, fears his friend has forgotten him, which has weakened the book. Sora reassures him and helps him gather his scattered friends, in a shorter, more intimate version of the world, reduced to a few areas around Rabbit's house.\n\nThe minigames take the form of three-part puzzles where fruits and vegetables from the garden must be lined up: each win yields ingredients for Remy's cooking. Pooh and Sora once again promise not to forget each other, and Sora receives the Hunny Spout Keyblade. The world is not needed for the plot but remains a fixture of the series.",
        ),
      },
    ],
    trivia: [
      L("La Forêt des Rêves Bleus est le seul monde de la saga entièrement dépourvu d'ennemis, dans chacune de ses apparitions.", "The Hundred Acre Wood is the only world in the series entirely free of enemies in each of its appearances."),
      L("Le nom français reprend celui de la chanson « La Forêt des Rêves Bleus » du doublage français des dessins animés de Winnie l'ourson.", "The French name comes from the song “La Forêt des Rêves Bleus” from the French dubbing of the Winnie the Pooh cartoons."),
      L("Dans Kingdom Hearts II, les pages du livre sont cachées dans cinq mondes différents, y compris la Terre des Lions et Port Royal.", "In Kingdom Hearts II, the book's pages are hidden in five different worlds, including the Pride Lands and Port Royal."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — 100 Acre Wood", url: "https://kingdomhearts.fandom.com/wiki/100_Acre_Wood" },
    ],
  },

  // ─────────────────────────── Fin du Monde ───────────────────────────
  "end-of-the-world": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Fin du Monde n'est pas un monde à proprement parler : c'est l'amas de débris laissés par tous les mondes que les Sans-cœur ont engloutis, un lieu où les ténèbres s'accumulent et où la porte de Kingdom Hearts a été localisée par Ansem. Le décor mêle une plaine désolée sous un ciel violet, une crevasse gigantesque, des cavernes de cristal et de lave, et le Terminus des Mondes, un carrefour de portails qui ramènent vers chaque monde visité.\n\nSa seule composante Disney est Chernabog, le démon de la séquence « Une nuit sur le mont Chauve » de Fantasia (1940), qui surgit d'une montagne au sommet du monde. Le lieu tient aussi de l'univers Final Fantasy avec ses Béhémoths. Il n'apparaît que dans le premier Kingdom Hearts, dont il constitue le dernier chapitre et la seule visite.",
          "The End of the World is not strictly a world: it is the heap of debris left by every world the Heartless have swallowed, a place where darkness accumulates and where Ansem has located the door to Kingdom Hearts. Its scenery mixes a desolate plain under a violet sky, a gigantic crevasse, crystal and lava caverns, and the World Terminus, a crossroads of portals leading back to each visited world.\n\nIts only Disney component is Chernabog, the demon from the “Night on Bald Mountain” segment of Fantasia (1940), who rises from a mountain at the top of the world. The place also owes something to Final Fantasy with its Behemoths. It appears only in the first Kingdom Hearts, of which it is the last chapter and the sole visit.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Après avoir scellé la Forteresse Oubliée, Sora, Donald et Dingo suivent la piste d'Ansem jusqu'à la Fin du Monde. Ils traversent la Porte des Ténèbres, la crevasse et ses Béhémoths, puis le Terminus des Mondes, dont chaque portail rappelle un monde et livre parfois un objet rare. Dans la Salle du Repos Final, une porte s'ouvre sur un fragment des Îles du Destin, où Ansem attend, à l'endroit même où tout a commencé.\n\nAnsem révèle que la porte de la Grotte Secrète menait au cœur du monde et engage le combat, seul, puis flanqué de son Gardien et d'un Darkside, avant de se réfugier dans le Monde du Chaos, un immense vaisseau de ténèbres. Vaincu, il ouvre la porte de Kingdom Hearts, croyant y trouver les ténèbres suprêmes ; la lumière qui en jaillit le détruit. Sora, Riku et Mickey referment la porte, les mondes se reconstituent et la Fin du Monde disparaît avec eux.",
          "After sealing Hollow Bastion, Sora, Donald and Goofy follow Ansem's trail to the End of the World. They cross the Gate to the Dark, the crevasse and its Behemoths, then the World Terminus, whose every portal recalls a world and sometimes yields a rare item. In the Final Rest, a door opens onto a fragment of Destiny Islands, where Ansem waits, at the very place where it all began.\n\nAnsem reveals that the door in the Secret Place led to the heart of the world and joins battle, alone, then flanked by his Guardian and a Darkside, before retreating into the World of Chaos, an immense vessel of darkness. Defeated, he opens the door to Kingdom Hearts, believing he will find supreme darkness there; the light that pours out destroys him. Sora, Riku and Mickey close the door, the worlds are restored and the End of the World vanishes with them.",
        ),
      },
    ],
    trivia: [
      L("Chernabog, boss optionnel dans les versions Final Mix, était un combat obligatoire dans la version originale de 2002.", "Chernabog, an optional boss in the Final Mix versions, was a mandatory fight in the original 2002 release."),
      L("Le nom japonais du monde, 最後の世界 (Saigo no Sekai), signifie littéralement « le dernier monde ».", "The world's Japanese name, 最後の世界 (Saigo no Sekai), literally means “the last world”."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — End of the World", url: "https://kingdomhearts.fandom.com/wiki/End_of_the_World" },
    ],
  },

  // ─────────────────────────── Château de la Bête ───────────────────────────
  "beasts-castle": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Château de la Bête adapte La Belle et la Bête (1991), le classique Disney dans lequel un prince changé en monstre doit se faire aimer avant que ne tombe le dernier pétale d'une rose enchantée. La saga en reprend la Bête, Belle, les serviteurs transformés en objets, Lumière, Big Ben, Mrs Samovar et Zip, ainsi que les lieux du film : la grande salle, la salle de bal, l'aile ouest et sa rose, le cachot, la cour et le pont d'entrée. Gaston, en revanche, n'y apparaît jamais.\n\nLa Bête avait déjà croisé Sora à la Forteresse Oubliée dans le premier jeu, où il cherchait Belle, Princesse de Cœur ; le monde lui-même n'apparaît qu'à partir de 358/2 Days et de Kingdom Hearts II. Le scénario original y greffe Xaldin, membre de l'Organisation XIII décidé à exploiter le désespoir de la Bête.",
          "Beast's Castle adapts Beauty and the Beast (1991), the Disney classic in which a prince turned into a monster must earn love before the last petal of an enchanted rose falls. The series borrows the Beast, Belle, the servants transformed into objects, Lumière, Cogsworth, Mrs Potts and Chip, as well as the film's locations: the entrance hall, the ballroom, the west wing and its rose, the dungeon, the courtyard and the bridge. Gaston, on the other hand, never appears.\n\nThe Beast had already met Sora in Hollow Bastion in the first game, where he was looking for Belle, a Princess of Heart; the world itself only appears from 358/2 Days and Kingdom Hearts II onward. The original storyline grafts on Xaldin, a member of Organization XIII determined to exploit the Beast's despair.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Roxas est envoyé à plusieurs reprises au Château de la Bête, où Xaldin poursuit son propre projet : pousser la Bête à s'abandonner aux ténèbres pour en faire un Sans-cœur et un Simili puissants. Roxas assiste, caché, aux colères de la Bête et à sa manière de protéger Belle, et apprend de Xaldin, lors d'une mission commune, qu'il s'agit là d'un sentiment appelé amour, que les Similis ne peuvent pas éprouver.\n\nLes missions le conduisent dans les couloirs du château, dans l'aile ouest où repose la rose et jusque sur le pont, où il combat des Sans-cœur attirés par le désespoir de la Bête. Xion l'accompagne parfois, et leurs discussions sur ce qui unit Belle et la Bête alimentent la réflexion du jeu sur les liens du cœur. L'intrigue de Xaldin se poursuit ensuite dans Kingdom Hearts II.",
          "Roxas is sent to Beast's Castle several times, where Xaldin pursues his own scheme: pushing the Beast to give in to darkness so as to turn him into a powerful Heartless and Nobody. Roxas secretly witnesses the Beast's rages and the way he protects Belle, and learns from Xaldin, during a shared mission, that this is a feeling called love, one Nobodies cannot experience.\n\nThe missions take him through the castle corridors, into the west wing where the rose rests and onto the bridge, where he fights Heartless drawn by the Beast's despair. Xion sometimes accompanies him, and their conversations about what binds Belle and the Beast feed the game's reflection on the bonds of the heart. Xaldin's storyline then continues in Kingdom Hearts II.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo trouvent la Bête méconnaissable : sous l'influence de Xaldin, il a enfermé ses serviteurs au cachot et repousse Belle. Le trio libère Lumière, Big Ben, Mrs Samovar et Zip en vainquant le Gardien du Seuil, puis raisonne la Bête, qui se joint à eux. Dans la salle de bal, ils affrontent l'Ombre Rôdeuse et sa forme d'Épine Noire, tandis que Xaldin, démasqué, disparaît.\n\nÀ la seconde visite, Xaldin dérobe la rose enchantée et propose un marché à la Bête : Belle ou la rose. Belle s'échappe avec la rose, et Sora et la Bête affrontent Xaldin sur le pont du château, dans l'un des combats les plus exigeants du jeu. Après sa défaite, la Bête et Belle dansent enfin dans la salle de bal, et Sora reçoit une Keyblade en forme de rose. La Bête peut rejoindre l'équipe comme allié pendant les visites.",
          "Sora, Donald and Goofy find the Beast unrecognisable: under Xaldin's influence, he has locked his servants in the dungeon and pushes Belle away. The trio frees Lumière, Cogsworth, Mrs Potts and Chip by defeating the Thresholder, then talks sense into the Beast, who joins them. In the ballroom they fight the Shadow Stalker and its Dark Thorn form, while an unmasked Xaldin vanishes.\n\nOn the second visit, Xaldin steals the enchanted rose and offers the Beast a bargain: Belle or the rose. Belle escapes with the rose, and Sora and the Beast fight Xaldin on the castle bridge, in one of the game's most demanding battles. After his defeat, the Beast and Belle finally dance in the ballroom, and Sora receives a rose-shaped Keyblade. The Beast can join the party as an ally during the visits.",
        ),
      },
    ],
    trivia: [
      L("La Bête est le seul allié Disney du premier jeu à avoir rejoint Sora hors de son propre monde, à la Forteresse Oubliée.", "The Beast is the only Disney ally of the first game to have joined Sora outside his own world, in Hollow Bastion."),
      L("Le combat contre Xaldin sur le pont est réputé pour sa difficulté ; le roi Mickey peut y remplacer Sora s'il tombe.", "The fight against Xaldin on the bridge is known for its difficulty; King Mickey can step in for Sora if he falls."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Beast's Castle", url: "https://kingdomhearts.fandom.com/wiki/Beast%27s_Castle" },
    ],
  },

  // ─────────────────────────── Port Royal / Les Caraïbes ───────────────────────────
  "port-royal": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Port Royal adapte Pirates des Caraïbes : La Malédiction du Black Pearl (2003), premier film en prises de vues réelles à entrer dans la saga, avec Jack Sparrow, Will Turner, Elizabeth Swann et le capitaine Barbossa. Pour respecter le film, le monde adopte un rendu plus réaliste que les autres, et Sora, Donald et Dingo y gardent leur apparence sans transformation. On y explore la ville et son fort, le Black Pearl, l'Isla de Muerta et sa grotte au trésor.\n\nDans Kingdom Hearts III, le monde devient Les Caraïbes et adapte Jusqu'au bout du monde (2007) : Sora y commande son propre navire, le Léviathan, et navigue librement entre les îles, avec des batailles navales, de la plongée et une carte marine. Davy Jones, Tia Dalma et le Kraken complètent le casting.",
          "Port Royal adapts Pirates of the Caribbean: The Curse of the Black Pearl (2003), the first live-action film to enter the series, with Jack Sparrow, Will Turner, Elizabeth Swann and Captain Barbossa. To honour the film, the world adopts a more realistic look than the others, and Sora, Donald and Goofy keep their appearance without transformation. The town and its fort, the Black Pearl, Isla de Muerta and its treasure cave can be explored.\n\nIn Kingdom Hearts III the world becomes The Caribbean and adapts At World's End (2007): Sora commands his own ship, the Leviathan, and sails freely between the islands, with naval battles, diving and a sea chart. Davy Jones, Tia Dalma and the Kraken round out the cast.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo arrivent à Port Royal alors que Barbossa et son équipage maudit attaquent la ville avec l'aide de Pat, pour enlever Elizabeth et lever la malédiction de l'or aztèque. Le trio rejoint Will Turner et Jack Sparrow, qui les emmène sur l'Interceptor jusqu'à l'Isla de Muerta. Les pirates, squelettes sous la lune, se révèlent immunisés aux attaques hors du clair de lune, et Sora doit composer avec cette règle du film.\n\nDans la grotte au trésor, Will rend la dernière pièce maudite, la malédiction est levée et Jack tire sur Barbossa, mortel de nouveau. À la seconde visite, Luxord dérobe des médaillons du coffre pour maudire un Sans-cœur, le Faucheur, qui aspire les cœurs de Port Royal. Sora récupère les pièces sur le Black Pearl, les rend au coffre et vainc le Faucheur ; Jack Sparrow est jouable comme allié dans tout le monde.",
          "Sora, Donald and Goofy arrive in Port Royal as Barbossa and his cursed crew attack the town with Pete's help, to kidnap Elizabeth and lift the curse of the Aztec gold. The trio joins Will Turner and Jack Sparrow, who takes them aboard the Interceptor to Isla de Muerta. The pirates, skeletons under the moon, prove immune to attacks outside the moonlight, and Sora has to deal with that rule from the film.\n\nIn the treasure cave, Will returns the last cursed coin, the curse is lifted and Jack shoots Barbossa, mortal once more. On the second visit, Luxord steals medallions from the chest to curse a Heartless, the Grim Reaper, which drains the hearts of Port Royal. Sora recovers the coins aboard the Black Pearl, returns them to the chest and defeats the Grim Reaper; Jack Sparrow is playable as an ally throughout the world.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo arrivent dans Les Caraïbes en plein affrontement contre le Flying Dutchman et échouent sous l'eau, dans le Casier de Davy Jones, où Jack Sparrow est prisonnier. Avec Elizabeth, Will, Barbossa ressuscité et Tia Dalma, ils ramènent Jack sur le Black Pearl, puis Sora reçoit son propre navire, le Léviathan, qu'il améliore en collectant des cristaux blancs sur les îles.\n\nLuxord réapparaît, cherchant la boîte noire pour le compte de l'Organisation, et propose à Sora un jeu autour d'un coffre volé. Le monde culmine dans une bataille navale contre Davy Jones et le Kraken dans un maelström, où Will transperce le cœur de Jones et devient capitaine du Dutchman. Le Black Pearl et le Léviathan repoussent l'armada, et Sora repart avec une Keyblade en forme de gouvernail, non sans que Luxord lui ait laissé une carte comme porte-bonheur.",
          "Sora, Donald and Goofy arrive in The Caribbean in the middle of a clash with the Flying Dutchman and end up underwater, in Davy Jones's Locker, where Jack Sparrow is trapped. With Elizabeth, Will, a resurrected Barbossa and Tia Dalma, they bring Jack back to the Black Pearl, and Sora then receives his own ship, the Leviathan, which he upgrades by collecting white crabs on the islands.\n\nLuxord reappears, seeking the black box on behalf of the Organization, and proposes a game to Sora around a stolen chest. The world peaks in a naval battle against Davy Jones and the Kraken in a maelstrom, where Will pierces Jones's heart and becomes captain of the Dutchman. The Black Pearl and the Leviathan drive off the armada, and Sora leaves with a wheel-shaped Keyblade, not without Luxord leaving him a card as a good-luck charm.",
        ),
      },
    ],
    trivia: [
      L("Port Royal est le premier monde de la saga tiré d'un film en prises de vues réelles ; Tron le suivra dans le même jeu.", "Port Royal is the first world in the series based on a live-action film; Tron follows in the same game."),
      L("Dans Kingdom Hearts III, Sora peut personnaliser le Léviathan et recruter un équipage en collectant des crabes blancs, la « monnaie » du monde.", "In Kingdom Hearts III, Sora can customise the Leviathan and recruit a crew by collecting white crabs, the world's “currency”."),
      L("Le monde de Kingdom Hearts II utilise un filtre visuel plus sombre pour rapprocher les personnages du style du film.", "The Kingdom Hearts II world uses a darker visual filter to bring the characters closer to the film's style."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Port Royal", url: "https://kingdomhearts.fandom.com/wiki/Port_Royal" },
      { label: "Kingdom Hearts Wiki — The Caribbean", url: "https://kingdomhearts.fandom.com/wiki/The_Caribbean" },
    ],
  },

  // ─────────────────────────── La Grille / Space Paranoids ───────────────────────────
  "the-grid": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "L'Espace Paranoïaque, dans Kingdom Hearts II, adapte Tron (1982), film pionnier de l'imagerie de synthèse dans lequel un programmeur est numérisé à l'intérieur d'un ordinateur. Le monde est le système informatique d'Ansem le Sage, gouverné par le Maître Contrôle Principal (MCP) et son bras droit Sark, où Tron, programme de sécurité, résiste. Sora, Donald et Dingo y sont numérisés et revêtent des combinaisons aux lignes lumineuses.\n\nDans Dream Drop Distance, La Grille adapte Tron : L'Héritage (2010) : un monde numérique plus vaste, aux néons bleu et orange, créé par Kevin Flynn et usurpé par son double CLU. Sam Flynn, Quorra et Rinzler, un Tron reprogrammé, y remplacent le casting du premier film. Les deux versions partagent les Motos lumineuses, les disques et les voiliers solaires.",
          "Space Paranoids, in Kingdom Hearts II, adapts Tron (1982), a pioneering computer-graphics film in which a programmer is digitised inside a computer. The world is the computer system of Ansem the Wise, ruled by the Master Control Program (MCP) and its right hand Sark, where Tron, a security program, resists. Sora, Donald and Goofy are digitised there and wear suits traced with glowing lines.\n\nIn Dream Drop Distance, The Grid adapts Tron: Legacy (2010): a larger digital world in blue and orange neon, created by Kevin Flynn and usurped by his double CLU. Sam Flynn, Quorra and Rinzler, a reprogrammed Tron, replace the cast of the first film. Both versions share the Light Cycles, the discs and the solar sailers.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "En explorant l'ordinateur d'Ansem à la Forteresse Oubliée, Sora, Donald et Dingo sont numérisés par le MCP et jetés dans une cellule de l'Espace Paranoïaque. Tron les libère et leur explique que le MCP, corrompu, veut prendre le contrôle du réseau de la ville. Le groupe s'évade sur des Motos lumineuses, puis retourne dans le monde réel chercher un mot de passe, révélé par la photo d'Ansem le Sage avec ses apprentis : les noms des amis de Tron.\n\nAprès avoir affronté le Programme Hostile, le trio revient lors de la seconde visite avec un voilier solaire jusqu'à la tour du MCP, où Sark et le MCP sont détruits avec l'aide de Tron. En remerciement, Tron accède aux données de la ville et déclenche un spectacle de lumières dans le château. Sora reçoit une Keyblade aux couleurs de Tron, et l'accès à la salle de l'ordinateur ouvre la piste vers les données de la ville.",
          "While exploring Ansem's computer in Hollow Bastion, Sora, Donald and Goofy are digitised by the MCP and thrown into a cell in Space Paranoids. Tron frees them and explains that the corrupted MCP wants to seize control of the town's network. The group escapes on Light Cycles, then returns to the real world to find a password, revealed by the photo of Ansem the Wise with his apprentices: the names of Tron's friends.\n\nAfter facing the Hostile Program, the trio returns on the second visit aboard a solar sailer to the MCP's tower, where Sark and the MCP are destroyed with Tron's help. In thanks, Tron accesses the town's data and sets off a light show in the castle. Sora receives a Keyblade in Tron's colours, and access to the computer room opens the trail to the town's data.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora et Riku plongent séparément dans La Grille, monde endormi né de Tron : L'Héritage. Sora y rencontre Sam Flynn et Quorra, en fuite devant les forces de CLU, et affronte Rinzler, sans comprendre d'abord qu'il s'agit de Tron reprogrammé. CLU, allié à l'Organisation, cherche à copier les données de Sora pour en apprendre davantage sur son cœur. Sora tente jusqu'au bout de rendre sa mémoire à Rinzler, qui tombe dans la Mer de Simulation.\n\nRiku, de son côté, rencontre Kevin Flynn dans son refuge et apprend l'origine du monde et de CLU, avant d'accompagner Sam et Quorra vers le portail sur un voilier solaire. Le monde propose des courses de Motos lumineuses et se conclut, pour Riku, par un combat contre le vaisseau de CLU. Sora et Riku y croisent aussi le jeune Xehanort, qui poursuit ses manœuvres.",
          "Sora and Riku dive separately into The Grid, a Sleeping World born from Tron: Legacy. Sora meets Sam Flynn and Quorra there, fleeing CLU's forces, and fights Rinzler without at first realising that he is a reprogrammed Tron. CLU, allied with the Organization, seeks to copy Sora's data to learn more about his heart. Sora tries to the end to restore Rinzler's memory, and Rinzler falls into the Sea of Simulation.\n\nRiku, for his part, meets Kevin Flynn in his hideout and learns the origin of the world and of CLU, before escorting Sam and Quorra to the portal aboard a solar sailer. The world offers Light Cycle races and ends, for Riku, with a battle against CLU's ship. Sora and Riku also encounter Young Xehanort there, pursuing his schemes.",
        ),
      },
    ],
    trivia: [
      L("En français, le monde de Kingdom Hearts II s'appelle Espace Paranoïaque, et celui de Dream Drop Distance La Grille.", "In French, the Kingdom Hearts II world is called Espace Paranoïaque and the Dream Drop Distance one La Grille."),
      L("Le mot de passe de l'ordinateur d'Ansem, formé des noms de ses apprentis, est un indice majeur de l'intrigue de Kingdom Hearts II.", "The password of Ansem's computer, made of his apprentices' names, is a major clue in the plot of Kingdom Hearts II."),
      L("Tron : L'Héritage est le film le plus récent adapté par Dream Drop Distance, sorti seulement deux ans avant le jeu.", "Tron: Legacy is the most recent film adapted by Dream Drop Distance, released only two years before the game."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Space Paranoids", url: "https://kingdomhearts.fandom.com/wiki/Space_Paranoids" },
      { label: "Kingdom Hearts Wiki — The Grid", url: "https://kingdomhearts.fandom.com/wiki/The_Grid" },
    ],
  },

  // ─────────────────────────── Arendelle ───────────────────────────
  "arendelle": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Arendelle adapte La Reine des neiges (2013), le film Disney inspiré de Hans Christian Andersen, avec Elsa, Anna, Kristoff, Sven, Olaf, Hans et le géant de neige Guimauve. Le monde ne couvre pas le royaume lui-même mais la montagne du Nord : forêts enneigées, falaises glacées, le palais de glace d'Elsa et un labyrinthe de glace créé pour le jeu. Sora, Donald et Dingo y gardent leur apparence habituelle.\n\nLe scénario reprend le film de très près, jusqu'à intégrer les chansons « Libérée, délivrée » et « Je voudrais un bonhomme de neige », et y ajoute Larxène, chargée par l'Organisation de surveiller Elsa, candidate au rang de nouvelle Princesse de Cœur. Le monde propose la course de luge Frozen Slider et Guimauve comme allié de combat.",
          "Arendelle adapts Frozen (2013), the Disney film inspired by Hans Christian Andersen, with Elsa, Anna, Kristoff, Sven, Olaf, Hans and the snow giant Marshmallow. The world does not cover the kingdom itself but the North Mountain: snowy forests, icy cliffs, Elsa's ice palace and an ice labyrinth created for the game. Sora, Donald and Goofy keep their usual appearance there.\n\nThe storyline follows the film very closely, even including the songs “Let It Go” and “Do You Want to Build a Snowman?”, and adds Larxene, tasked by the Organization with watching Elsa, a candidate for the rank of new Princess of Heart. The world offers the Frozen Slider sledging race and Marshmallow as a battle ally.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo arrivent sur la montagne du Nord et croisent Elsa, qui vient de fuir Arendelle après avoir plongé le royaume dans l'hiver, et qui repousse leur aide par peur de ses pouvoirs. Larxène intervient et enferme le trio dans un labyrinthe de glace pour les tenir éloignés d'Elsa, dont l'Organisation veut déterminer si elle est lumière ou ténèbres. Sortis du labyrinthe, ils rencontrent Anna, Kristoff, Sven et Olaf, partis eux aussi vers le palais de glace.\n\nChassés du palais par Guimauve, ils affrontent des Sans-cœur de glace et assistent, impuissants, au retour d'Anna à Arendelle et à la trahison de Hans. Alors qu'Anna se change en glace pour protéger sa sœur, l'amour sincère la sauve et Elsa fait cesser l'hiver ; Sora affronte ensuite Sköll, un loup Sans-cœur né des ténèbres de Hans. Larxène repart, convaincue qu'Elsa appartient à la lumière, et Sora reçoit une Keyblade de cristal de neige.",
          "Sora, Donald and Goofy arrive on the North Mountain and come across Elsa, who has just fled Arendelle after plunging the kingdom into winter, and who rejects their help out of fear of her powers. Larxene steps in and traps the trio in an ice labyrinth to keep them away from Elsa, whom the Organization wants to test as light or darkness. Out of the labyrinth, they meet Anna, Kristoff, Sven and Olaf, also heading for the ice palace.\n\nDriven from the palace by Marshmallow, they fight ice Heartless and helplessly witness Anna's return to Arendelle and Hans's betrayal. As Anna turns to ice to protect her sister, true love saves her and Elsa ends the winter; Sora then faces Sköll, a wolf Heartless born from Hans's darkness. Larxene leaves, convinced that Elsa belongs to the light, and Sora receives a snow-crystal Keyblade.",
        ),
      },
    ],
    trivia: [
      L("Arendelle est le seul monde de Kingdom Hearts III où le personnage principal Disney, Elsa, ne rejoint jamais l'équipe ; c'est Guimauve qui combat aux côtés de Sora.", "Arendelle is the only world in Kingdom Hearts III where the main Disney character, Elsa, never joins the party; it is Marshmallow who fights alongside Sora."),
      L("La chanson « Libérée, délivrée » est intégrée en cinématique dans sa version française, interprétée par Anaïs Delva.", "The song “Let It Go” is included as a cutscene in its French version, performed by Anaïs Delva."),
      L("La course de luge Frozen Slider est nécessaire pour obtenir l'un des Orichalque+ de l'Arme Ultime.", "The Frozen Slider sledging race is required to obtain one of the Orichalcum+ for the Ultima Weapon."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Arendelle", url: "https://kingdomhearts.fandom.com/wiki/Arendelle" },
    ],
  },

  // ─────────────────────────── Boîte à Jouets ───────────────────────────
  "toy-box": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Boîte à Jouets est le monde de Toy Story, la série de Pixar, et le premier monde Pixar de la saga. Plutôt que d'adapter un film, il propose une histoire originale validée par Pixar, située après Toy Story 2 : Woody, Buzz l'Éclair, Rex, Hamm, Sergent et les petits hommes verts se retrouvent seuls dans la chambre d'Andy, tandis que le garçon et les autres jouets ont disparu. Le monde s'étend ensuite au magasin Galaxy Toys, un grand magasin de jouets sur plusieurs étages.\n\nSora, Donald et Dingo y sont transformés en jouets articulés, et Sora peut piloter des robots Gigas, des jouets géants vendus dans le magasin. Le monde est aussi celui où apparaît Verum Rex, jeu vidéo fictif dont le héros, Yozora, prendra une importance croissante dans la saga.",
          "The Toy Box is the world of Toy Story, the Pixar series, and the first Pixar world in the saga. Rather than adapting a film, it offers an original story approved by Pixar, set after Toy Story 2: Woody, Buzz Lightyear, Rex, Hamm, Sarge and the little green men find themselves alone in Andy's room, while the boy and the other toys have vanished. The world then extends to Galaxy Toys, a large multi-storey toy store.\n\nSora, Donald and Goofy are turned into articulated toys there, and Sora can pilot Gigas robots, giant toys sold in the store. The world is also where Verum Rex appears, a fictional video game whose hero, Yozora, will grow in importance in the saga.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo, changés en jouets, tombent sur Woody, Buzz et leurs amis, seuls dans une chambre d'Andy désertée depuis des jours. Ils comprennent que le monde a été scindé en deux par le jeune Xehanort, qui veut observer comment les cœurs réagissent à la séparation et aux ténèbres, dans l'espoir de recréer des cœurs artificiels. Le groupe part chercher Andy au magasin Galaxy Toys, où les Sans-cœur animent des jouets et des Gigas.\n\nLe jeune Xehanort exploite les doutes de Buzz, persuadé que Sora est un jouet défectueux, et le plonge dans les ténèbres, mais Woody le libère et rappelle à Xehanort que personne ne l'a jamais aimé. Après un dernier combat contre un jouet géant possédé, le Roi des Jouets, le monde est rendu à sa forme normale, et Woody et Buzz promettent à Sora de le retrouver un jour. Sora repart avec une Keyblade à l'effigie de Woody.",
          "Sora, Donald and Goofy, turned into toys, run into Woody, Buzz and their friends, alone in an Andy's room deserted for days. They learn that the world has been split in two by Young Xehanort, who wants to observe how hearts react to separation and darkness, hoping to recreate artificial hearts. The group sets out to find Andy at Galaxy Toys, where Heartless animate toys and Gigas robots.\n\nYoung Xehanort exploits Buzz's doubts, convinced that Sora is a defective toy, and plunges him into darkness, but Woody frees him and reminds Xehanort that no one has ever loved him. After a final battle against a giant possessed toy, the King of Toys, the world is restored to normal, and Woody and Buzz promise Sora to see him again someday. Sora leaves with a Woody-themed Keyblade.",
        ),
      },
    ],
    trivia: [
      L("La Boîte à Jouets est le premier monde de la saga à proposer une histoire originale plutôt que l'adaptation d'un film, à la demande de Pixar.", "The Toy Box is the first world in the series to offer an original story rather than a film adaptation, at Pixar's request."),
      L("Verum Rex, aperçu à la télévision d'Andy et dans le magasin, est un clin d'œil à Final Fantasy Versus XIII, projet passé de Tetsuya Nomura.", "Verum Rex, glimpsed on Andy's TV and in the store, is a nod to Final Fantasy Versus XIII, a past project of Tetsuya Nomura."),
      L("Les jouets Gigas peuvent être pilotés, une mécanique unique dans la saga.", "The Gigas toys can be piloted, a mechanic unique in the series."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Toy Box", url: "https://kingdomhearts.fandom.com/wiki/Toy_Box" },
    ],
  },

  // ─────────────────────────── San Fransokyo ───────────────────────────
  "san-fransokyo": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "San Fransokyo adapte Les Nouveaux Héros (2014), film Disney inspiré du comic Marvel Big Hero 6, situé dans une ville hybride entre San Francisco et Tokyo. La saga en reprend Hiro Hamada, le robot infirmier Baymax, Go Go, Wasabi, Honey Lemon et Fred, et se place après le film : l'équipe des héros est formée et protège la ville. Le monde comprend le quartier de la baie, le pont et les toits des gratte-ciel, explorables de jour comme de nuit.\n\nSora, Donald et Dingo y gardent leur apparence. La particularité du monde est le vol sur le dos de Baymax, avec lequel Sora peut se déplacer d'un immeuble à l'autre, et les combats contre les Darkubes, des Sans-cœur cubiques capables de se regrouper. L'histoire originale s'appuie sur ce que le film laissait en suspens : le premier corps de Baymax, perdu dans le portail.",
          "San Fransokyo adapts Big Hero 6 (2014), the Disney film inspired by the Marvel comic of the same name, set in a hybrid city between San Francisco and Tokyo. The series borrows Hiro Hamada, the nurse robot Baymax, Go Go, Wasabi, Honey Lemon and Fred, and is set after the film: the hero team is formed and protects the city. The world includes the bay district, the bridge and the skyscraper rooftops, explorable by day and by night.\n\nSora, Donald and Goofy keep their appearance there. The world's special feature is flying on Baymax's back, with which Sora can move from building to building, and the fights against Darkubes, cube-shaped Heartless able to cluster together. The original story builds on what the film left hanging: Baymax's first body, lost in the portal.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora, Donald et Dingo arrivent à San Fransokyo alors que Hiro et ses amis testent leurs équipements sur le pont, et se joignent à l'équipe pour repousser des Sans-cœur en plein jour, avant que la ville ne soit envahie la nuit. Fred baptise Sora nouvel héros, et Hiro travaille à améliorer Baymax pour l'aider. Le jeune homme avoue à Sora qu'il ne s'est jamais tout à fait remis d'avoir laissé le premier Baymax dans le portail.\n\nCe premier corps a été récupéré par le Riku des ténèbres, membre de la nouvelle Organisation, qui en fait un Baymax sombre, contrôlé par une puce corrompue et capable d'absorber les Darkubes. Sora l'affronte dans les airs, aidé de Hiro et de ses amis, et détruit la puce ; Hiro décide de garder le corps récupéré pour le reconstruire. Sora repart avec une Keyblade aux couleurs de Baymax, et peut ensuite revenir survoler la ville pour des défis de vol.",
          "Sora, Donald and Goofy arrive in San Fransokyo as Hiro and his friends test their gear on the bridge, and join the team to repel Heartless in broad daylight, before the city is overrun at night. Fred dubs Sora a new hero, and Hiro works on upgrading Baymax to help him. The young man admits to Sora that he never quite got over leaving the first Baymax in the portal.\n\nThat first body has been recovered by Dark Riku, a member of the new Organization, who turns it into a dark Baymax, controlled by a corrupted chip and able to absorb Darkubes. Sora fights it in the air, helped by Hiro and his friends, and destroys the chip; Hiro decides to keep the recovered body to rebuild it. Sora leaves with a Baymax-coloured Keyblade, and can later return to fly over the city for flight challenges.",
        ),
      },
    ],
    trivia: [
      L("San Fransokyo est le premier monde tiré d'une propriété Marvel dans la saga, par l'intermédiaire du film Disney.", "San Fransokyo is the first world in the series drawn from a Marvel property, by way of the Disney film."),
      L("Le monde propose deux ambiances distinctes, jour et nuit, entre lesquelles le joueur peut alterner depuis un point de sauvegarde.", "The world offers two distinct settings, day and night, which the player can switch between from a save point."),
      L("Les Darkubes, Sans-cœur en forme de cubes, sont un clin d'œil aux microbots du film.", "The Darkubes, cube-shaped Heartless, are a nod to the film's microbots."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — San Fransokyo", url: "https://kingdomhearts.fandom.com/wiki/San_Fransokyo" },
    ],
  },
};
