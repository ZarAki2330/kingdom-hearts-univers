import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des grands personnages originaux de la saga (première série) :
 * origines, puis parcours jeu par jeu dans l'ordre chronologique interne.
 * Les clés sont les slugs des entrées de characters-original.ts et characters-more.ts.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Sora ───────────────────────────
  "sora": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Sora est le héros de la saga, un garçon des Îles du Destin sans rien d'extraordinaire au départ, si ce n'est un cœur capable de se lier à celui de tous les autres. Tetsuya Nomura l'a imaginé pour incarner un personnage original entre les univers Disney et Final Fantasy : cheveux en pointes, grandes chaussures, couronne en pendentif, et une tenue rouge et noire qui rappelle Mickey. Son nom signifie « ciel » en japonais, et fait système avec Riku (« terre ») et Kairi (« mer »).\n\nSa particularité est révélée peu à peu : quatre ans avant le premier jeu, le cœur brisé de Ventus a trouvé refuge en lui, et c'est ce lien qui lui vaut d'être choisi par la Keyblade à la place de Riku. Sora n'est jamais le plus fort ni le plus doué, mais il est celui qui relie : Kairi, Roxas, Xion, Ventus ou même Naminé lui doivent d'exister encore. Cette faculté fait de lui la clé de tous les plans de Xehanort et le centre de gravité de la série.",
          "Sora is the hero of the series, a boy from Destiny Islands with nothing extraordinary about him at first, except a heart able to connect with everyone else's. Tetsuya Nomura designed him as an original character sitting between the Disney and Final Fantasy universes: spiky hair, oversized shoes, a crown pendant, and a red and black outfit that recalls Mickey. His name means “sky” in Japanese and forms a set with Riku (“land”) and Kairi (“sea”).\n\nWhat makes him special is revealed little by little: four years before the first game, Ventus's broken heart found refuge inside him, and that bond is why the Keyblade chooses him instead of Riku. Sora is never the strongest or the most gifted, but he is the one who connects: Kairi, Roxas, Xion, Ventus and even Naminé owe him their continued existence. That ability makes him the key to all of Xehanort's plans and the centre of gravity of the whole series.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Riku et Kairi construisent un radeau pour quitter les Îles du Destin. La nuit du départ, une tempête de ténèbres s'abat sur l'île : Riku disparaît dans l'ombre, Kairi s'évanouit et la Chaîne Royale apparaît dans la main de Sora, qui affronte un Ombre Sombre avant d'être emporté. Il se réveille à la Ville de Traverse, où Léon lui apprend ce qu'est la Keyblade, et où Donald et Dingo, envoyés par le roi Mickey pour trouver « la clé », deviennent ses compagnons.\n\nDe monde en monde, Sora scelle les serrures et retrouve Riku, qui s'est allié à Maléfique pour sauver Kairi. À la Forteresse Oubliée, Riku lui prend la Keyblade ; Sora la récupère en choisissant de protéger ses amis, puis découvre que le cœur de Kairi repose dans le sien. Il se transperce avec la Keyblade des Cœurs pour le libérer, devient brièvement un Sans-cœur, et retrouve sa forme grâce à Kairi. Au Bout du Monde, il vainc Ansem, puis referme la porte de Kingdom Hearts avec Mickey, laissant Riku et le roi de l'autre côté. Il repart aussitôt à leur recherche.",
          "Sora, Riku and Kairi build a raft to leave Destiny Islands. On the night they plan to sail, a storm of darkness hits the island: Riku vanishes into the shadows, Kairi fades away and the Kingdom Key appears in Sora's hand as he faces a Darkside before being swept away. He wakes in Traverse Town, where Leon explains what the Keyblade is and where Donald and Goofy, sent by King Mickey to find “the key”, become his companions.\n\nFrom world to world Sora seals keyholes and finds Riku again, now allied with Maleficent in order to save Kairi. In Hollow Bastion Riku takes the Keyblade from him; Sora wins it back by choosing to protect his friends, then discovers that Kairi's heart rests within his own. He stabs himself with the Keyblade of People's Hearts to release it, briefly becomes a Heartless, and regains his form thanks to Kairi. At the End of the World he defeats Ansem, then closes the door to Kingdom Hearts with Mickey, leaving Riku and the king on the other side. He sets off at once to find them.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "En suivant une route inconnue, Sora, Donald et Dingo arrivent au Manoir Oblivion, où « perdre pour trouver » est la règle. À chaque étage, Sora traverse un monde reconstitué à partir de ses souvenirs, tandis que sa mémoire s'efface. Les membres de l'Organisation XIII qui hantent le château, Marluxia, Larxene, Axel et Vexen, se disputent son sort, et Sora se persuade peu à peu qu'une fille nommée Naminé, et non Kairi, était son amie d'enfance.\n\nAu sommet, Naminé avoue avoir réécrit ses souvenirs sous la contrainte de Marluxia, qui voulait faire de Sora sa marionnette pour renverser l'Organisation. Sora vainc Marluxia, puis accepte de dormir dans une capsule pour que Naminé reconstitue sa mémoire d'origine, quitte à l'oublier elle. Avant de s'endormir, il lui promet que, même effacé, leur lien restera quelque part en lui.",
          "Following an unfamiliar road, Sora, Donald and Goofy reach Castle Oblivion, where “to find is to lose” is the rule. On each floor Sora crosses a world rebuilt from his memories while his own recollections fade. The Organization XIII members haunting the castle, Marluxia, Larxene, Axel and Vexen, fight over his fate, and Sora gradually convinces himself that a girl named Naminé, not Kairi, was his childhood friend.\n\nAt the top, Naminé admits she rewrote his memories under orders from Marluxia, who wanted to turn Sora into his puppet and overthrow the Organization. Sora defeats Marluxia, then agrees to sleep in a pod so that Naminé can restore his original memories, even though it means forgetting her. Before falling asleep he promises that, even erased, their bond will remain somewhere inside him.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Après un an de sommeil, Sora se réveille au manoir de la Cité du Crépuscule, une fois que Roxas, son Simili, l'a rejoint. Yen Sid lui apprend l'existence des Similis et de l'Organisation XIII et lui confie de nouveaux vêtements. À la Forteresse Oubliée, Sora retrouve Léon et rencontre enfin le roi Mickey, qui révèle que l'Ansem vaincu n'était que le Sans-cœur de Xehanort, et que Xemnas, son Simili, dirige l'Organisation.\n\nSora sillonne à nouveau les mondes, mais comprend, lors de la bataille des Mille Sans-cœur, que chaque Sans-cœur détruit par sa Keyblade nourrit le Kingdom Hearts artificiel de Xemnas. Kairi, enlevée par Axel puis par Saïx, est retenue dans le Monde qui n'existe pas. Le sacrifice d'Axel ouvre un passage à Sora, qui y retrouve Kairi et Riku, dissimulé sous l'apparence d'Ansem. Après l'explosion de la machine d'Ansem le Sage, Sora et Riku affrontent Xemnas dans un duel final et regagnent les Îles du Destin par la porte de la lumière, où une lettre du roi les attend.",
          "After a year of sleep, Sora wakes in the Twilight Town mansion once Roxas, his Nobody, has rejoined him. Yen Sid tells him about Nobodies and Organization XIII and gives him new clothes. In Hollow Bastion Sora meets Leon again and finally King Mickey, who reveals that the Ansem he defeated was only Xehanort's Heartless, and that Xemnas, his Nobody, leads the Organization.\n\nSora travels the worlds again, but during the Battle of 1000 Heartless he understands that every Heartless destroyed by his Keyblade feeds Xemnas's artificial Kingdom Hearts. Kairi, kidnapped by Axel and then by Saïx, is held in The World That Never Was. Axel's sacrifice opens a path for Sora, who finds Kairi and Riku there, the latter hidden behind Ansem's appearance. After the explosion of Ansem the Wise's machine, Sora and Riku face Xemnas in a final duel and return to Destiny Islands through the door to light, where a letter from the king awaits them.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Sora n'intervient pas lui-même dans Re:coded : le héros en est un double numérique, créé par Mickey et Jiminy à partir du journal de ce dernier. Ce Sora virtuel, qui n'a aucun souvenir, revit les événements du premier jeu à l'intérieur des données pour comprendre d'où viennent les « bugs » qui les corrompent. Il croise un Riku virtuel, gardien du journal, et un Roxas de données, avant de percer le message caché dans le carnet.\n\nAu terme de l'aventure, Mickey apprend que les cœurs de Terra, Ventus, Aqua, Roxas, Naminé et Xion souffrent et qu'ils sont liés à Sora. Il écrit alors au véritable Sora, ce qui le conduit, avec Riku, à la Tour Mystérieuse pour l'examen de Maîtrise de Dream Drop Distance.",
          "Sora does not act in person in Re:coded: its hero is a digital copy created by Mickey and Jiminy from Jiminy's journal. This Data-Sora, who has no memories, relives the events of the first game inside the data to find out where the “bugs” corrupting them come from. He meets a data Riku, keeper of the journal, and a data Roxas before uncovering the message hidden in the notebook.\n\nAt the end of the adventure Mickey learns that the hearts of Terra, Ventus, Aqua, Roxas, Naminé and Xion are suffering and that they are connected to Sora. He writes to the real Sora, which leads him and Riku to the Mysterious Tower for the Mark of Mastery exam of Dream Drop Distance.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Yen Sid soumet Sora et Riku à l'examen de Maîtrise : ils doivent réveiller sept Mondes Endormis, plongés dans le sommeil depuis le premier jeu, et y retrouver les serrures. Sora traverse la Ville de Traverse, la Cité des Cloches, la Grille, le Pays des Rêves, le Pays des Mousquetaires et la Symphonie du Sorcier avec ses Avale-Rêves, mais un jeune homme aux cheveux argentés croise sans cesse sa route et le nargue.\n\nAu Monde qui n'existe pas, Sora comprend qu'il est tombé dans un piège : le Jeune Xehanort l'a attiré dans les rêves pour plonger son cœur dans le sommeil et faire de lui le treizième réceptacle du Maître Xehanort ressuscité. Sora, submergé par les Cauchemars, ne doit son salut qu'à Riku, Mickey et Lea. Réveillé, il échoue à l'examen mais accepte le résultat avec le sourire, et repart aussitôt s'entraîner pour retrouver ce qu'il a perdu.",
          "Yen Sid puts Sora and Riku through the Mark of Mastery exam: they must wake seven Sleeping Worlds, asleep since the first game, and find their keyholes. Sora crosses Traverse Town, La Cité des Cloches, The Grid, Prankster's Paradise, Country of the Musketeers and Symphony of Sorcery with his Dream Eaters, but a silver-haired young man keeps crossing his path and taunting him.\n\nIn The World That Never Was Sora realises he has walked into a trap: Young Xehanort lured him into the dreams to plunge his heart into sleep and make him the thirteenth vessel of the revived Master Xehanort. Overwhelmed by Nightmares, Sora is saved only by Riku, Mickey and Lea. Once awake he fails the exam but takes the result with a smile and sets off again at once to train and recover what he lost.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Affaibli par l'épreuve de Dream Drop Distance, Sora part chercher le Pouvoir de l'éveil, indispensable pour sauver ceux dont le cœur dort. Il traverse l'Olympe, la Boîte à Jouets, le Royaume de Corona, Monstropolis, Arendelle, les Caraïbes et San Fransokyo, tout en récoltant les indices laissés par l'Organisation. Ce voyage le mène à sauver Aqua dans le Domaine des Ténèbres, puis Ventus au Manoir Oblivion.\n\nAu Nécropole des Keyblades, les Gardiens de la Lumière sont d'abord balayés par une Marée Démoniaque : Sora, seul survivant, échoue dans le Monde Final, d'où il revient en remontant le fil des cœurs grâce au Pouvoir de l'éveil. Lors de la seconde bataille, il permet à ses amis de vaincre les treize ténèbres, mais Xehanort brise Kairi pour forger la χ-blade. À Scala ad Caelum, les Gardiens réunis renversent le Maître Xehanort, et Sora referme Kingdom Hearts. Il part ensuite seul retrouver Kairi en usant encore du Pouvoir de l'éveil, malgré l'avertissement de Yen Sid : il la ramène sur les Îles du Destin, puis disparaît. La scène secrète le montre s'éveillant dans une ville inconnue, Quadratum.",
          "Weakened by the ordeal of Dream Drop Distance, Sora sets out to find the power of waking, needed to save those whose hearts are asleep. He crosses Olympus, the Toy Box, the Kingdom of Corona, Monstropolis, Arendelle, the Caribbean and San Fransokyo while gathering the clues left by the Organization. That journey leads him to rescue Aqua in the Realm of Darkness, then Ventus in Castle Oblivion.\n\nAt the Keyblade Graveyard the Guardians of Light are first wiped out by a Demon Tide: Sora, the only survivor, ends up in the Final World, from which he returns by following the thread of hearts with the power of waking. In the second battle he lets his friends defeat the thirteen darknesses, but Xehanort shatters Kairi to forge the χ-blade. In Scala ad Caelum the united Guardians bring down Master Xehanort, and Sora closes Kingdom Hearts. He then leaves alone to find Kairi, using the power of waking once more despite Yen Sid's warning: he brings her back to Destiny Islands, then vanishes. The secret scene shows him waking in an unknown city, Quadratum.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
      "Melody of Memory retrace toute la saga à travers les souvenirs de Kairi, qui dort dans le laboratoire d'Ansem le Sage au Jardin Radieux pour retrouver une trace de Sora. Les niveaux musicaux revisitent ainsi chaque étape de son parcours, du premier jeu jusqu'à Kingdom Hearts III, et Sora reste le personnage central des équipes jouables.\n\nDans l'épilogue, Kairi rapporte qu'elle a aperçu Sora dans une ville inconnue, et que sa voix lui est parvenue depuis ce lieu qui n'appartient pas au Domaine de la Lumière. Yen Sid comprend qu'il s'agit d'un monde « irréel » du point de vue des leurs, et Riku se porte volontaire pour aller l'y chercher. Sora, lui, n'apparaît que comme un souvenir et une voix : sa disparition reste entière à la fin du jeu.",
          "Melody of Memory retraces the whole series through the memories of Kairi, who sleeps in Ansem the Wise's laboratory in Radiant Garden to find a trace of Sora. The rhythm stages thus revisit every step of his journey, from the first game to Kingdom Hearts III, and Sora remains the central figure of the playable teams.\n\nIn the epilogue Kairi reports that she glimpsed Sora in an unknown city and that his voice reached her from a place that does not belong to the Realm of Light. Yen Sid understands it is a world “unreal” from their point of view, and Riku volunteers to go and look for him there. Sora himself appears only as a memory and a voice: his disappearance remains unresolved when the game ends.",
        ),
      },
      {
        game: "kingdom-hearts-iv",
        text: L(
      "Kingdom Hearts IV ouvre la « saga de la Perte », dont Sora est à nouveau le héros. Les premières images le montrent se réveillant dans un appartement de Quadratum, une métropole réaliste inspirée de Tokyo, avec des proportions et une tenue plus proches de celles d'un jeune adulte. Il y est accueilli par Strelitzia, une jeune fille qui semble en savoir plus que lui sur ce monde, et doit affronter un gigantesque Sans-cœur dans les rues de la ville.\n\nCe nouvel épisode part du principe que Sora, en s'effaçant du Domaine de la Lumière, a rejoint le monde « irréel » aperçu par Kairi, celui d'où vient Yozora. Le détail de ce qu'il y vit reste à découvrir, mais la ville, la Keyblade toujours à sa main et l'absence de ses amis en font un point de départ radicalement nouveau pour le personnage.",
          "Kingdom Hearts IV opens the “Lost Master” arc, with Sora once again as its hero. The first footage shows him waking in an apartment in Quadratum, a realistic metropolis inspired by Tokyo, with proportions and an outfit closer to those of a young adult. He is greeted there by Strelitzia, a young woman who seems to know more than he does about this world, and must face a gigantic Heartless in the city streets.\n\nThe new game starts from the idea that Sora, by fading from the Realm of Light, has reached the “unreal” world Kairi glimpsed, the one Yozora comes from. What he goes through there remains to be discovered, but the city, the Keyblade still in his hand and the absence of his friends make it a radically new starting point for the character.",
        ),
      },
    ],
    trivia: [
      L("Sora est doublé par Haley Joel Osment en anglais depuis 2002 et par Miyu Irino en japonais ; en français, Donald Reignoux lui prête sa voix.", "Sora has been voiced by Haley Joel Osment in English since 2002 and by Miyu Irino in Japanese; in French, Donald Reignoux lends him his voice."),
      L("Le tout premier concept de Nomura le représentait avec une arme en forme de tronçonneuse, remplacée par la Keyblade à la demande de Disney.", "Nomura's very first concept gave him a chainsaw-like weapon, replaced by the Keyblade at Disney's request."),
      L("Sora est le seul personnage jouable de la saga à apparaître dans chaque jeu, y compris en tant que double numérique dans Re:coded.", "Sora is the only playable character in the series to appear in every game, including as a digital copy in Re:coded."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Sora", url: "https://kingdomhearts.fandom.com/wiki/Sora" },
    ],
  },

  // ─────────────────────────── Riku ───────────────────────────
  "riku": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Riku est le meilleur ami et le rival de Sora sur les Îles du Destin, d'un an son aîné, plus fort et plus posé. Son nom signifie « terre » en japonais. Nomura l'a conçu comme le contrepoint de Sora : là où l'un est ouvert et impulsif, l'autre est réservé, ambitieux et rongé par l'envie de partir. C'est d'ailleurs lui qui, enfant, a reçu de Terra la promesse de la Keyblade lors d'une visite sur son île, quatre ans avant le premier jeu.\n\nCette prédestination lui échappe : la Keyblade choisit Sora, parce que Riku a laissé les ténèbres entrer dans son cœur. Toute sa trajectoire consiste ensuite à réparer cette faute, non en rejetant les ténèbres, mais en apprenant à les tenir. Il est le premier héros de la saga à devenir Maître de la Keyblade, et le personnage dont l'évolution est la plus longue et la plus documentée.",
          "Riku is Sora's best friend and rival on Destiny Islands, a year older, stronger and more composed. His name means “land” in Japanese. Nomura designed him as Sora's counterpoint: where one is open and impulsive, the other is reserved, ambitious and consumed by the urge to leave. He is also the one who, as a child, received from Terra the promise of the Keyblade during a visit to his island, four years before the first game.\n\nThat destiny slips away from him: the Keyblade chooses Sora, because Riku let darkness into his heart. His whole path afterwards consists of repairing that mistake, not by rejecting darkness but by learning to hold it. He is the first hero of the series to become a Keyblade Master, and the character with the longest and best-documented growth.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "La nuit de la tempête, Riku tend la main à Sora au milieu des ténèbres et s'y laisse engloutir, convaincu qu'il n'y a pas d'autre moyen de quitter l'île. Il se réveille à la Forteresse Oubliée, où Maléfique le prend sous son aile et le persuade que Sora l'a remplacé par Donald et Dingo. Riku accepte de l'aider à réunir les Princesses de Cœur pour retrouver Kairi, dont le corps sans cœur est en sa possession.\n\nLes ténèbres lui donnent l'Âme Éternelle, puis la Keyblade de Sora elle-même, avant que celle-ci ne retourne à son véritable porteur. Riku se laisse alors posséder par Ansem, Chercheur des Ténèbres, qui se sert de son corps pour ouvrir le cœur de la Forteresse Oubliée. Sa conscience réussit pourtant à retenir Ansem un instant, offrant à Sora la chance de fuir. Au Bout du Monde, Riku réapparaît de l'autre côté de la porte de Kingdom Hearts, aux côtés du roi Mickey, et aide Sora à la refermer en restant dans le Domaine des Ténèbres.",
          "On the night of the storm, Riku holds out his hand to Sora amid the darkness and lets himself be swallowed by it, convinced there is no other way off the island. He wakes in Hollow Bastion, where Maleficent takes him under her wing and persuades him that Sora has replaced him with Donald and Goofy. Riku agrees to help her gather the Princesses of Heart in order to save Kairi, whose heartless body she holds.\n\nDarkness grants him Soul Eater, then Sora's own Keyblade, before it returns to its true wielder. Riku then lets himself be possessed by Ansem, Seeker of Darkness, who uses his body to open the heart of Hollow Bastion. His consciousness nonetheless manages to hold Ansem back for a moment, giving Sora a chance to escape. At the End of the World, Riku reappears on the far side of the door to Kingdom Hearts beside King Mickey and helps Sora close it, staying behind in the Realm of Darkness.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Le scénario « Reverse/Rebirth » suit Riku, qui se réveille dans les sous-sols du Manoir Oblivion, séparé de Mickey. Une voix mystérieuse, celle de DiZ, lui propose de remonter vers la lumière en traversant des mondes nés de ses propres souvenirs, remplis de Sans-cœur. Riku y découvre qu'Ansem survit dans son cœur et tente de reprendre le contrôle à chaque faiblesse.\n\nIl affronte Vexen, Lexaeus et Zexion, ainsi qu'une copie de lui-même créée par Vexen, qui se croit le vrai Riku. Mickey le rejoint et l'empêche de sombrer. Au terme de son ascension, Riku choisit de ne renier ni la lumière ni les ténèbres, mais d'emprunter « la voie de l'aube ». Il quitte le château avec Mickey, vêtu du manteau noir de l'Organisation que DiZ lui a remis pour tenir Ansem à distance, et accepte de traquer Roxas afin de hâter le réveil de Sora.",
          "The “Reverse/Rebirth” scenario follows Riku, who wakes in the basements of Castle Oblivion, separated from Mickey. A mysterious voice, that of DiZ, offers him a way up towards the light through worlds born from his own memories and filled with Heartless. There Riku discovers that Ansem survives in his heart and tries to seize control whenever he weakens.\n\nHe fights Vexen, Lexaeus and Zexion, as well as a copy of himself created by Vexen who believes he is the real Riku. Mickey joins him and keeps him from sinking. At the end of his climb, Riku chooses to deny neither light nor darkness but to walk “the road to dawn”. He leaves the castle with Mickey, wearing the Organization's black coat that DiZ gave him to keep Ansem at bay, and agrees to hunt Roxas in order to hasten Sora's awakening.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Pendant le sommeil de Sora, Riku travaille pour DiZ depuis les coulisses. Il surveille l'Organisation, croise Xion à plusieurs reprises et finit par comprendre qu'elle est une réplique nourrie des souvenirs de Sora, ce qui empêche celui-ci de se réveiller. Plutôt que de la détruire, il la laisse choisir et lui indique comment retrouver Naminé.\n\nAprès la disparition de Xion, Roxas quitte l'Organisation et Riku l'affronte dans le Monde qui n'existe pas. Incapable de vaincre un Roxas maniant deux Keyblades, il libère volontairement les ténèbres d'Ansem qui sommeillent en lui : il l'emporte, mais son corps prend l'apparence du Chercheur des Ténèbres. C'est sous cette forme qu'il livre Roxas à DiZ et qu'il vivra toute l'année suivante, se cachant même de Sora.",
          "While Sora sleeps, Riku works for DiZ from behind the scenes. He keeps watch on the Organization, crosses paths with Xion several times and eventually understands that she is a replica fed with Sora's memories, which prevents Sora from waking. Rather than destroy her, he lets her choose and tells her how to find Naminé.\n\nAfter Xion's disappearance, Roxas leaves the Organization and Riku confronts him in The World That Never Was. Unable to beat a Roxas wielding two Keyblades, he deliberately unleashes the darkness of Ansem lying dormant within him: he wins, but his body takes on the appearance of the Seeker of Darkness. It is in that form that he hands Roxas to DiZ and that he will live through the whole following year, hiding even from Sora.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sous l'apparence d'Ansem, Riku agit dans l'ombre pendant presque tout le jeu : il rapporte à DiZ, dépose des indices pour Sora, envoie Kairi vers la Cité du Crépuscule avec Pluto, puis la délivre de sa cellule au Monde qui n'existe pas et lui confie une Keyblade. Sora ne le reconnaît que grâce à Kairi, qui devine son identité en lui prenant la main.\n\nRiku a apporté à DiZ la machine destinée à détruire le Kingdom Hearts de Xemnas ; son explosion rend à Riku sa véritable apparence, mais laisse Ansem le Sage disparaître. Riku combat alors aux côtés de Sora, avec Point du Jour, jusqu'au duel final contre Xemnas, où les deux amis survivent en s'appuyant l'un sur l'autre. Ils atterrissent sur une plage du Domaine des Ténèbres, où Riku accepte enfin de ne pas être seul, avant qu'une porte de lumière ne les ramène aux Îles du Destin.",
          "In Ansem's guise, Riku acts in the shadows for almost the entire game: he reports to DiZ, leaves clues for Sora, sends Kairi to Twilight Town with Pluto, then frees her from her cell in The World That Never Was and gives her a Keyblade. Sora only recognises him thanks to Kairi, who guesses his identity by taking his hand.\n\nRiku brought DiZ the machine meant to destroy Xemnas's Kingdom Hearts; its explosion gives Riku back his true appearance but makes Ansem the Wise vanish. Riku then fights beside Sora with Way to the Dawn up to the final duel against Xemnas, where the two friends survive by leaning on each other. They land on a beach in the Realm of Darkness, where Riku finally accepts that he is not alone, before a door of light returns them to Destiny Islands.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Riku passe l'examen de Maîtrise en même temps que Sora, mais dans une version différente des mêmes Mondes Endormis, accompagné de ses Avale-Rêves. Il y est confronté à ses vieux démons : Ansem, une réplique de son ancien moi, et les insinuations du Jeune Xehanort, qui lui rappelle avoir été un réceptacle des ténèbres.\n\nAu Monde qui n'existe pas, il apprend qu'il a en réalité voyagé tout du long à l'intérieur des rêves de Sora, pour le protéger de l'intérieur. Lorsque le cœur de Sora est plongé dans le sommeil, Riku plonge à son tour dans son cœur, vainc le Cauchemar de Ventus en armure et le réveille, aidé par Roxas, Ventus et Xion qu'il entrevoit en chemin. À la Tour Mystérieuse, Yen Sid le nomme Maître de la Keyblade, et Riku se voit confier la mission d'aller chercher Kairi pour qu'elle apprenne à manier la sienne.",
          "Riku takes the Mark of Mastery exam alongside Sora, but in a different version of the same Sleeping Worlds, accompanied by his Dream Eaters. There he faces his old demons: Ansem, a replica of his former self, and the insinuations of Young Xehanort, who reminds him that he was once a vessel for darkness.\n\nIn The World That Never Was he learns that he has actually been travelling inside Sora's dreams all along, protecting him from within. When Sora's heart is cast into sleep, Riku in turn dives into that heart, defeats the Armored Ventus Nightmare and wakes him, helped by Roxas, Ventus and Xion whom he glimpses along the way. At the Mysterious Tower, Yen Sid names him Keyblade Master, and Riku is entrusted with fetching Kairi so that she can learn to wield hers.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Riku et Mickey ouvrent le jeu dans le Domaine des Ténèbres, à la recherche d'Aqua. Une Tour Démoniaque brise Point du Jour et force leur retraite ; Yen Sid remet à Riku Braveheart, une Keyblade de Maître, et Riku déclare ne plus avoir besoin d'une arme née de ses ténèbres. Avec Sora, il retourne chercher Aqua, corrompue par les ténèbres, et la ramène à la lumière.\n\nAu Nécropole des Keyblades, Riku affronte le Réplica de Riku, copie de son ancien lui recrutée par Xehanort, puis Ansem, avec Mickey et Sora. Il fait partie des Gardiens réunis à Scala ad Caelum pour vaincre le Maître Xehanort. De retour sur les Îles du Destin, il assiste impuissant à la disparition de Sora, parti sauver Kairi. Re Mind le rend jouable le temps d'un affrontement, et la scène secrète le montre, comme Sora, éveillé dans une ville inconnue.",
          "Riku and Mickey open the game in the Realm of Darkness, searching for Aqua. A Demon Tower shatters Way to the Dawn and forces them to retreat; Yen Sid hands Riku Braveheart, a Master's Keyblade, and Riku declares he no longer needs a weapon born of his darkness. With Sora he goes back for Aqua, corrupted by darkness, and brings her back to the light.\n\nAt the Keyblade Graveyard Riku faces Riku Replica, a copy of his former self recruited by Xehanort, then Ansem, alongside Mickey and Sora. He is among the Guardians gathered in Scala ad Caelum to defeat Master Xehanort. Back on Destiny Islands he can only watch as Sora vanishes after leaving to save Kairi. Re Mind makes him playable for one battle, and the secret scene shows him, like Sora, awake in an unknown city.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
      "Dans les scènes inédites de Melody of Memory, Riku accompagne la Fée Marraine chez Naminé, qui vient de retrouver un corps. Il lui raconte un rêve récurrent : il se voit dans une ville immense et inconnue, où un jeune homme aux yeux vairons lui parle. Naminé comprend que ce rêve n'est pas le sien mais celui d'un cœur lié à Sora, et que Riku sert de relais.\n\nÀ la Tour Mystérieuse, lorsque Kairi rapporte avoir aperçu Sora dans cette même ville, Yen Sid confirme qu'il s'agit d'un monde extérieur au Domaine de la Lumière. Riku se porte volontaire pour s'y rendre, tandis que Kairi choisit de s'entraîner auprès d'Aqua. La dernière image le montre s'engager, Braveheart en main, vers cette « réalité » où l'attend Kingdom Hearts IV.",
          "In the new scenes of Melody of Memory, Riku accompanies the Fairy Godmother to see Naminé, who has just regained a body. He tells her about a recurring dream: he sees himself in a vast unknown city where a young man with mismatched eyes speaks to him. Naminé understands that the dream is not his own but that of a heart connected to Sora, and that Riku serves as a relay.\n\nAt the Mysterious Tower, when Kairi reports having glimpsed Sora in that same city, Yen Sid confirms it is a world outside the Realm of Light. Riku volunteers to go there while Kairi chooses to train under Aqua. The final image shows him heading, Braveheart in hand, towards that “reality” where Kingdom Hearts IV awaits.",
        ),
      },
      {
        game: "kingdom-hearts-iv",
        text: L(
      "Kingdom Hearts IV prolonge le départ de Riku vers Quadratum, la ville « irréelle » où Sora s'est éveillé. Les premières images officielles laissent entendre que les deux amis se retrouveront dans cette métropole, mais que leurs chemins n'y seront pas immédiatement communs : Riku y apparaît de loin, et Sora ignore encore qu'on est venu le chercher.\n\nCe nouvel arc, la saga de la Perte, s'appuie sur la promesse faite dans Melody of Memory. Riku, devenu Maître, y aborde l'aventure non plus comme celui qu'il faut sauver, mais comme celui qui vient sauver Sora, inversion de leur rôle dans le tout premier jeu. Les détails de son parcours restent à découvrir à la sortie du jeu.",
          "Kingdom Hearts IV continues Riku's departure for Quadratum, the “unreal” city where Sora woke. The first official footage suggests that the two friends will meet again in that metropolis, but that their paths will not immediately join: Riku appears there from afar, and Sora does not yet know that someone has come for him.\n\nThis new arc, the Lost Master arc, builds on the promise made in Melody of Memory. Riku, now a Master, approaches the adventure no longer as the one who needs saving but as the one who comes to save Sora, a reversal of their roles in the very first game. The details of his journey remain to be discovered when the game releases.",
        ),
      },
    ],
    trivia: [
      L("Riku est doublé par David Gallagher en anglais et par Mamoru Miyano en japonais ; Alexandre Gillet lui prête sa voix en français.", "Riku is voiced by David Gallagher in English and Mamoru Miyano in Japanese; Alexandre Gillet voices him in French."),
      L("Dans Kingdom Hearts II, sa voix japonaise et anglaise change pour celle d'Ansem tant qu'il en porte l'apparence.", "In Kingdom Hearts II his Japanese and English voice switches to Ansem's for as long as he wears that appearance."),
      L("Riku est le premier personnage de la saga, avec Aqua, à réussir l'examen de Maîtrise à l'écran.", "Riku is, with Aqua, the first character in the series to pass the Mark of Mastery exam on screen."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Riku", url: "https://kingdomhearts.fandom.com/wiki/Riku" },
    ],
  },

  // ─────────────────────────── Kairi ───────────────────────────
  "kairi": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Kairi est l'amie d'enfance de Sora et Riku, arrivée sur les Îles du Destin sans souvenirs, portée par une pluie de météores, alors qu'elle avait quatre ans. Son nom signifie « mer » en japonais et complète ceux de Sora et Riku. Nomura l'a voulue comme le point d'ancrage émotionnel du trio, celle qui attend et qui rappelle aux deux garçons ce qu'ils défendent.\n\nElle est née au Jardin Radieux, où sa grand-mère lui racontait la légende de la lumière et des ténèbres. Elle est aussi l'une des sept Princesses de Cœur, ces jeunes filles au cœur pur, sans la moindre ténèbre, dont la réunion permet d'ouvrir la porte de Kingdom Hearts. C'est Xehanort, alors apprenti d'Ansem le Sage, qui l'a envoyée à travers les mondes pour observer où mènerait son cœur. Longtemps cantonnée au rôle de la personne à sauver, elle devient Porteuse de Keyblade à partir de Kingdom Hearts II et entame sa propre formation dans Kingdom Hearts III.",
          "Kairi is Sora's and Riku's childhood friend, who arrived on Destiny Islands with no memories, carried by a meteor shower, when she was four. Her name means “sea” in Japanese and completes those of Sora and Riku. Nomura intended her as the trio's emotional anchor, the one who waits and reminds the two boys what they are fighting for.\n\nShe was born in Radiant Garden, where her grandmother told her the legend of light and darkness. She is also one of the seven Princesses of Heart, girls with pure hearts free of any darkness, whose gathering can open the door to Kingdom Hearts. It was Xehanort, then Ansem the Wise's apprentice, who sent her across the worlds to see where her heart would lead. Long confined to the role of the person to be rescued, she becomes a Keyblade wielder from Kingdom Hearts II onwards and begins her own training in Kingdom Hearts III.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Kairi apparaît enfant au Jardin Radieux, dix ans avant Kingdom Hearts. Poursuivie par des Nescients alors qu'elle cueillait des fleurs pour sa grand-mère, elle se réfugie auprès d'Aqua et du roi Mickey, qui les repoussent. En s'agrippant à Aqua, elle touche par hasard sa Keyblade : sans le savoir, elle vient de recevoir le rite de succession qui fera d'elle une future Porteuse.\n\nAqua perçoit la lumière exceptionnelle de la fillette et lance sur elle un charme de protection, en souhaitant que, si Kairi tombe un jour dans les ténèbres, la lumière de quelqu'un la guide vers la sortie. Ce sort explique que le cœur de Kairi, une fois perdu, se réfugie dans celui de Sora au lieu de disparaître. Kairi offre des fleurs à Aqua en remerciement, puis retrouve sa grand-mère dans le château.",
          "Kairi appears as a child in Radiant Garden, ten years before Kingdom Hearts. Chased by Unversed while picking flowers for her grandmother, she takes refuge with Aqua and King Mickey, who drive them off. Clinging to Aqua, she happens to touch her Keyblade: without knowing it, she has just received the inheritance ceremony that will make her a future wielder.\n\nAqua senses the girl's exceptional light and casts a protective charm on her, wishing that, should Kairi ever fall into darkness, someone's light will guide her back out. That spell explains why Kairi's heart, once lost, takes refuge in Sora's rather than vanishing. Kairi gives Aqua flowers in thanks, then rejoins her grandmother inside the castle.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Kairi participe à la construction du radeau et rêve, comme ses amis, de découvrir d'autres mondes, tout en se demandant d'où elle vient. La nuit de la tempête, Sora la retrouve dans la grotte secrète, mais la porte s'ouvre derrière elle et son corps, privé de cœur, est projeté vers lui avant de disparaître. Maléfique récupère ce corps inerte et l'utilise pour appâter Riku.\n\nÀ la Forteresse Oubliée, Sora découvre que le cœur de Kairi s'est réfugié dans le sien. En se transperçant avec la Keyblade des Cœurs, il le libère : Kairi se réveille et, lorsque Sora réduit à l'état d'Ombre s'approche d'elle, son étreinte lui rend forme humaine. Elle reste ensuite sur les Îles du Destin, restaurées, où elle confie à Sora son porte-bonheur en lui faisant promettre de le lui rapporter. La dernière scène la montre sur la plage, séparée de lui alors que les mondes retrouvent leur place.",
          "Kairi helps build the raft and dreams, like her friends, of seeing other worlds, while wondering where she comes from. On the night of the storm Sora finds her in the secret cave, but the door opens behind her and her body, stripped of its heart, is thrown towards him before vanishing. Maleficent recovers that lifeless body and uses it to bait Riku.\n\nIn Hollow Bastion Sora discovers that Kairi's heart took refuge in his own. By stabbing himself with the Keyblade of People's Hearts he releases it: Kairi wakes and, when a Sora reduced to a Shadow approaches her, her embrace gives him back his human form. She then stays on the restored Destiny Islands, where she entrusts Sora with her lucky charm and makes him promise to bring it back. The final scene shows her on the beach, separated from him as the worlds return to their places.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, Kairi a oublié le nom de Sora, comme tous ceux qui l'ont connu, mais son souvenir persiste. Lorsque Roxas entre brièvement en contact avec elle, le nom lui revient, et elle écrit une lettre qu'elle jette à la mer. Axel débarque alors sur les Îles du Destin pour l'enlever ; elle s'échappe avec Pluto par un couloir des ténèbres et atterrit à la Cité du Crépuscule, où Hayner, Pence et Olette l'accueillent avant que Saïx ne la capture.\n\nEnfermée dans le Monde qui n'existe pas, elle est libérée par Naminé, puis reçoit de Riku, sous l'apparence d'Ansem, une Keyblade avec laquelle elle affronte pour la première fois des Sans-cœur. Elle retrouve Sora et est la seule à reconnaître Riku sous ses traits d'emprunt. Naminé se fond en elle avant de disparaître, et Kairi ouvre ainsi la porte qui ramène tout le monde sur les Îles du Destin, où elle attend le retour de Sora et Riku.",
          "A year later Kairi has forgotten Sora's name, like everyone who knew him, but his memory persists. When Roxas briefly makes contact with her, the name comes back, and she writes a letter that she throws into the sea. Axel then lands on Destiny Islands to kidnap her; she escapes with Pluto through a corridor of darkness and ends up in Twilight Town, where Hayner, Pence and Olette take her in before Saïx captures her.\n\nLocked up in The World That Never Was, she is freed by Naminé and then receives from Riku, in Ansem's guise, a Keyblade with which she faces Heartless for the first time. She reunites with Sora and is the only one to recognise Riku under his borrowed features. Naminé merges back into her before vanishing, and Kairi opens the door that brings everyone back to Destiny Islands, where she waits for Sora and Riku to return.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Appelée par Yen Sid à la fin de Dream Drop Distance, Kairi s'entraîne avec Lea dans une forêt hors du temps, sous la direction de Merlin, pour devenir l'une des sept Gardiens de la Lumière. Elle écrit à Sora des lettres qui ponctuent son voyage, et lui offre son soutien lorsqu'il doute de ses forces.\n\nAu Nécropole des Keyblades, elle combat aux côtés de Sora et de Lea, mais Xemnas la capture, et le Maître Xehanort la brise sous les yeux de Sora pour provoquer le choc qui achève la χ-blade. Sa lumière survit pourtant, et son cœur guide les Gardiens à Scala ad Caelum. Une fois Xehanort vaincu, Sora part seul la retrouver en usant du Pouvoir de l'éveil : dans Re Mind, il la rejoint au Monde Final, où elle a préservé un fragment de lui. Kairi revient sur les Îles du Destin, mais Sora s'efface à ses côtés sur la plage.",
          "Summoned by Yen Sid at the end of Dream Drop Distance, Kairi trains with Lea in a forest outside of time under Merlin's guidance, to become one of the seven Guardians of Light. She writes Sora letters that punctuate his journey and offers her support when he doubts his strength.\n\nAt the Keyblade Graveyard she fights alongside Sora and Lea, but Xemnas captures her, and Master Xehanort shatters her before Sora's eyes to provoke the clash that completes the χ-blade. Her light nonetheless survives, and her heart guides the Guardians to Scala ad Caelum. Once Xehanort is defeated, Sora leaves alone to find her using the power of waking: in Re Mind he reaches her in the Final World, where she has kept a fragment of him safe. Kairi returns to Destiny Islands, but Sora fades away beside her on the beach.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
      "Melody of Memory est raconté par Kairi. Après la disparition de Sora, elle s'endort dans le laboratoire d'Ansem le Sage, au Jardin Radieux, pour fouiller ses souvenirs à la recherche d'un indice ; tout le jeu est cette traversée musicale de la saga, depuis la nuit de la tempête jusqu'à la bataille contre Xehanort.\n\nAu bout de sa plongée, Kairi entend la voix de Sora et le voit dans une ville immense, avec un jeune homme aux yeux vairons. Elle en fait le récit à Yen Sid et à Riku, qui identifient ce lieu comme un monde étranger au Domaine de la Lumière. Kairi choisit alors de laisser Riku partir à sa recherche et de demander à Aqua de l'entraîner, afin d'être un jour assez forte pour protéger Sora à son tour. La scène finale la montre saluer Riku à la Tour Mystérieuse, Keyblade en main, aux côtés d'Aqua.",
          "Melody of Memory is told by Kairi. After Sora's disappearance she falls asleep in Ansem the Wise's laboratory in Radiant Garden to search her memories for a clue; the whole game is that musical journey through the series, from the night of the storm to the battle against Xehanort.\n\nAt the end of her dive Kairi hears Sora's voice and sees him in a vast city with a young man with mismatched eyes. She reports this to Yen Sid and Riku, who identify the place as a world foreign to the Realm of Light. Kairi then chooses to let Riku go looking for him and asks Aqua to train her, so that one day she will be strong enough to protect Sora in turn. The final scene shows her waving Riku off at the Mysterious Tower, Keyblade in hand, beside Aqua.",
        ),
      },
    ],
    trivia: [
      L("Kairi est doublée par Hayden Panettiere puis Alyson Stoner en anglais, et par Risa Uchida en japonais.", "Kairi is voiced by Hayden Panettiere and later Alyson Stoner in English, and by Risa Uchida in Japanese."),
      L("Sa Keyblade, Appel du destin, est ornée de fleurs et de coquillages thalassa qui rappellent son porte-bonheur.", "Her Keyblade, Destiny's Embrace, is decorated with flowers and thalassa shells that recall her lucky charm."),
      L("Elle est la seule Princesse de Cœur qui ne vienne pas d'un film Disney.", "She is the only Princess of Heart who does not come from a Disney film."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Kairi", url: "https://kingdomhearts.fandom.com/wiki/Kairi" },
    ],
  },

  // ─────────────────────────── Roxas ───────────────────────────
  "roxas": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Roxas est le Simili de Sora, né à la Forteresse Oubliée à l'instant où Sora s'est transpercé le cœur pour libérer celui de Kairi. Comme le corps de Sora a très vite été restauré, Roxas est venu au monde sans aucun souvenir et avec un corps qui lui est propre, ce qui en fait un Simili à part. Son visage n'est pas celui de Sora mais celui de Ventus, dont le cœur reposait en Sora à ce moment-là.\n\nXemnas le trouve dans la Cité du Crépuscule, le nomme en ajoutant un X aux lettres de « Sora », et lui donne le numéro XIII de l'Organisation, avec le titre de « Clé du Destin ». Roxas est le seul membre capable de manier la Keyblade et donc de libérer les cœurs des Sans-cœur, ce qui en fait la pièce maîtresse du plan de Xemnas. Personnage introduit dans Kingdom Hearts II, il est devenu si populaire que 358/2 Days lui a été entièrement consacré.",
          "Roxas is Sora's Nobody, born in Hollow Bastion the instant Sora pierced his own heart to free Kairi's. Because Sora's body was restored almost at once, Roxas came into being with no memories and a body of his own, which makes him an unusual Nobody. His face is not Sora's but that of Ventus, whose heart rested inside Sora at the time.\n\nXemnas finds him in Twilight Town, names him by adding an X to the letters of “Sora”, and gives him number XIII in the Organization, with the title “Key of Destiny”. Roxas is the only member able to wield the Keyblade and therefore to release the hearts of the Heartless, which makes him the centrepiece of Xemnas's plan. Introduced in Kingdom Hearts II, he became so popular that 358/2 Days was devoted entirely to him.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Le jeu couvre les 358 jours de Roxas au sein de l'Organisation XIII. Encadré par Axel, qui devient son premier ami, il apprend les missions, les Sans-cœur et l'usage de la Keyblade, puis prend l'habitude de partager une glace à l'eau de mer au sommet de la tour de l'horloge de la Cité du Crépuscule. Xion, quatorzième membre arrivée peu après lui, rejoint bientôt ce rituel et le trio devient inséparable.\n\nPendant la mission de l'Organisation au Manoir Oblivion, Roxas sombre dans un sommeil de plusieurs semaines, lié à celui de Sora. À son réveil, Xion perd sa Keyblade, puis la retrouve en lui volant peu à peu sa force. Roxas découvre que l'Organisation lui cache tout : l'existence de Sora, la nature de Xion et la vérité sur les cœurs. Quand Xion, devenue une menace pour Sora, choisit de mourir de sa main, Roxas hérite de ses souvenirs et de sa Keyblade, puis quitte l'Organisation. Décidé à libérer Kingdom Hearts pour la ramener, il affronte Riku dans le Monde qui n'existe pas et est capturé par DiZ.",
          "The game covers Roxas's 358 days within Organization XIII. Mentored by Axel, who becomes his first friend, he learns missions, Heartless and the use of the Keyblade, then takes to sharing sea-salt ice cream at the top of Twilight Town's clock tower. Xion, the fourteenth member who arrives shortly after him, soon joins that ritual and the trio becomes inseparable.\n\nDuring the Organization's operation at Castle Oblivion, Roxas falls into a weeks-long sleep tied to Sora's. When he wakes, Xion loses her Keyblade, then recovers it by gradually stealing his strength. Roxas discovers that the Organization hides everything from him: Sora's existence, Xion's nature and the truth about hearts. When Xion, now a threat to Sora, chooses to die by his hand, Roxas inherits her memories and her Keyblade, then leaves the Organization. Set on freeing Kingdom Hearts to bring her back, he fights Riku in The World That Never Was and is captured by DiZ.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Kingdom Hearts II s'ouvre sur les derniers jours de vacances d'été de Roxas dans une Cité du Crépuscule virtuelle, conçue par DiZ pour le maintenir à l'écart pendant que Naminé reconstitue la mémoire de Sora. Entouré de Hayner, Pence et Olette, Roxas voit son quotidien se dérégler : Reflets, tournoi de Struggle interrompu, photos volées, et rêves des aventures de Sora. La Keyblade apparaît dans sa main sans qu'il la comprenne.\n\nNaminé lui apprend qu'il est un Simili et Axel tente de le ramener de force. Au manoir, Roxas découvre la capsule où Sora dort et affronte les créations de DiZ, puis accepte, la gorge serrée, que ses vacances sont finies : il fusionne avec Sora, qui se réveille. Plus tard, Roxas resurgit dans le cœur de Sora : Final Mix met en scène leur duel dans le Palier de l'Éveil, et la Forme Finale de Sora reprend son double maniement. Dans la scène finale, Roxas et Naminé contemplent la mer depuis Sora et Kairi, enfin apaisés.",
          "Kingdom Hearts II opens on the last days of Roxas's summer holiday in a virtual Twilight Town, built by DiZ to keep him apart while Naminé restores Sora's memory. Surrounded by Hayner, Pence and Olette, Roxas sees his daily life fall apart: Dusks, an interrupted Struggle tournament, stolen photos, and dreams of Sora's adventures. The Keyblade appears in his hand without his understanding it.\n\nNaminé tells him he is a Nobody and Axel tries to bring him back by force. In the mansion Roxas finds the pod where Sora sleeps and fights DiZ's creations, then accepts, with a lump in his throat, that his holiday is over: he merges with Sora, who wakes. Later Roxas resurfaces within Sora's heart: Final Mix stages their duel in the Station of Awakening, and Sora's Final Form borrows his dual wielding. In the final scene Roxas and Naminé watch the sea through Sora and Kairi, finally at peace.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Roxas n'existe plus comme individu, mais il refait surface lorsque Sora traverse une version endormie du Monde qui n'existe pas. Sur le chemin du château, Sora est assailli par des souvenirs qui ne sont pas les siens : ceux de Roxas au sommet de la tour de l'horloge, et sa douleur d'avoir perdu Xion et Axel. Roxas lui apparaît et lui transmet ses souvenirs, en lui demandant de les porter à sa place.\n\nCette rencontre, avec celles de Ventus et de Xion, convainc Sora que ces cœurs blessés attendent d'être sauvés. Lorsque Riku plonge dans le cœur de Sora pour le réveiller, Roxas est l'un des trois visages qui l'aident à trouver le chemin. Elle prépare aussi la promesse de Kingdom Hearts III : rendre à Roxas une existence propre.",
          "Roxas no longer exists as an individual, but he resurfaces when Sora crosses a sleeping version of The World That Never Was. On the way to the castle Sora is assailed by memories that are not his own: Roxas's atop the clock tower, and his pain at losing Xion and Axel. Roxas appears to him and hands over those memories, asking Sora to carry them in his stead.\n\nThat encounter, along with those with Ventus and Xion, convinces Sora that these wounded hearts are waiting to be saved. When Riku dives into Sora's heart to wake him, Roxas is one of the three faces who help him find the way. It also sets up the promise of Kingdom Hearts III: giving Roxas an existence of his own.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Depuis le Jardin Radieux, Ienzo, Even et Ansem le Sage cherchent un moyen de rendre Roxas à lui-même : il faut un réceptacle, une réplique, capable d'accueillir un cœur qui vit toujours dans celui de Sora. Le corps est finalement fourni par Even, et le cœur de Roxas, réveillé par Sora lorsque celui-ci retrouve ses souvenirs, attend le moment de le rejoindre.\n\nCe moment arrive au Nécropole des Keyblades : alors que Sora et Xion sont acculés par Xemnas et Saïx, Roxas surgit du cœur de Sora dans son nouveau corps, Tendre Promesse et Souvenir Perdu en main, et vient en aide à Lea. Avec Xion, à laquelle il rend sa mémoire, il vainc Saïx et retrouve enfin ses deux amis. L'épilogue le montre au sommet de la tour de l'horloge avec Xion, Lea, Isa et les amis de la Cité du Crépuscule, glace à l'eau de mer à la main, pendant que Sora s'efface ailleurs.",
          "From Radiant Garden, Ienzo, Even and Ansem the Wise seek a way to restore Roxas to himself: they need a vessel, a replica, able to receive a heart still living within Sora's. The body is eventually supplied by Even, and Roxas's heart, awakened by Sora when he recovers his memories, waits for the moment to join it.\n\nThat moment comes at the Keyblade Graveyard: as Sora and Xion are cornered by Xemnas and Saïx, Roxas bursts out of Sora's heart into his new body, Oathkeeper and Oblivion in hand, and comes to Lea's aid. With Xion, whose memory he restores, he defeats Saïx and is finally reunited with both his friends. The epilogue shows him atop the clock tower with Xion, Lea, Isa and the Twilight Town friends, sea-salt ice cream in hand, while Sora fades away elsewhere.",
        ),
      },
    ],
    trivia: [
      L("Roxas est doublé par Jesse McCartney en anglais et par Kōki Uchiyama en japonais.", "Roxas is voiced by Jesse McCartney in English and Kōki Uchiyama in Japanese."),
      L("Son nom est l'anagramme de « Sora » avec un X, selon la règle de nommage des membres de l'Organisation XIII.", "His name is an anagram of “Sora” with an X, following the naming rule of Organization XIII's members."),
      L("Le titre 358/2 Days désigne les 358 jours partagés à deux, Roxas et Xion, selon Nomura.", "According to Nomura, the title 358/2 Days refers to 358 days shared by two people, Roxas and Xion."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Roxas", url: "https://kingdomhearts.fandom.com/wiki/Roxas" },
    ],
  },

  // ─────────────────────────── Naminé ───────────────────────────
  "namine": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Naminé est un Simili unique : elle est née de la libération du cœur de Kairi à la Forteresse Oubliée, mais à partir du corps et de l'âme de Sora, puisque c'est lui qui s'est transpercé. Kairi étant une Princesse de Cœur sans ténèbres, aucun Sans-cœur n'a été créé, et Naminé s'est retrouvée sans place dans l'ordre des choses, sorte de « sorcière » aux pouvoirs sans équivalent. Son nom vient de « nami », la vague, en écho à Kairi, la mer.\n\nElle a la faculté de manipuler les souvenirs de Sora et de tous ceux dont le cœur lui est lié, en défaisant ou en renouant leurs chaînes. Vêtue d'une robe blanche et toujours munie de son carnet à dessins, elle est d'abord une prisonnière de l'Organisation XIII, avant de devenir l'alliée discrète qui répare ce qu'elle a défait. Sa trajectoire passe par la disparition, la fusion avec Kairi, puis un retour dans un corps de réplique dans Kingdom Hearts III.",
          "Naminé is a unique Nobody: she was born from the release of Kairi's heart in Hollow Bastion, but out of Sora's body and soul, since he is the one who pierced himself. As Kairi is a Princess of Heart with no darkness, no Heartless was created, and Naminé ended up without a place in the order of things, a kind of “witch” with powers unlike anyone else's. Her name comes from “nami”, the wave, echoing Kairi, the sea.\n\nShe has the ability to manipulate the memories of Sora and of everyone whose heart is connected to his, undoing or re-linking their chains. Dressed in white and never without her sketchbook, she is first a prisoner of Organization XIII before becoming the quiet ally who repairs what she undid. Her path goes through disappearance, merging with Kairi, then a return in a replica body in Kingdom Hearts III.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Retenue au Manoir Oblivion par Marluxia et Larxene, Naminé est contrainte de réécrire les souvenirs de Sora au fur et à mesure de son ascension : elle efface Kairi et s'insère à sa place comme son amie d'enfance, jusqu'à ce que Sora se croie lié à elle par une vieille promesse. Marluxia entend ainsi transformer Sora en pantin pour renverser Xemnas.\n\nNaminé donne aussi de faux souvenirs au Réplica de Riku pour en faire son protecteur. Mais, touchée par la sincérité de Sora, elle finit par lui avouer la vérité et brise le charme au moment décisif. Après la défaite de Marluxia, elle propose à Sora de dormir dans une capsule pendant qu'elle reconstitue sa mémoire véritable, ce qui implique qu'il l'oublie. Dans l'histoire de Riku, elle intervient également pour l'aider à contenir Ansem, prenant un instant l'apparence de Kairi.",
          "Held in Castle Oblivion by Marluxia and Larxene, Naminé is forced to rewrite Sora's memories as he climbs: she erases Kairi and inserts herself in her place as his childhood friend, until Sora believes himself bound to her by an old promise. Marluxia intends to turn Sora into a puppet with which to overthrow Xemnas.\n\nNaminé also gives false memories to Riku Replica to make him her protector. Moved by Sora's sincerity, however, she eventually tells him the truth and breaks the spell at the decisive moment. After Marluxia's defeat she offers to let Sora sleep in a pod while she restores his true memory, which means he will forget her. In Riku's story she also steps in to help him contain Ansem, briefly taking Kairi's appearance.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Pendant l'année de sommeil de Sora, Naminé travaille au manoir de la Cité du Crépuscule sous la protection de DiZ, mais la reconstitution des souvenirs de Sora stagne : une partie d'entre eux s'est échappée vers Xion, la réplique de l'Organisation. Naminé comprend que Roxas et Xion doivent tous deux retourner à Sora pour qu'il se réveille, et que Xion, faite de souvenirs, s'effacera de toutes les mémoires.\n\nElle reçoit la visite de Xion, venue lui demander ce qu'elle doit faire, et lui explique sans détour ce qu'elle est. Elle promet de veiller à ce que Roxas, une fois réuni à Sora, ne souffre pas de ce qu'il a oublié. Après la capture de Roxas par Riku, c'est Naminé qui accueille son cœur au moment de la fusion, tandis que DiZ l'installe dans la Cité du Crépuscule virtuelle.",
          "During Sora's year of sleep, Naminé works in the Twilight Town mansion under DiZ's protection, but the restoration of Sora's memories stalls: part of them has escaped into Xion, the Organization's replica. Naminé understands that both Roxas and Xion must return to Sora for him to wake, and that Xion, made of memories, will vanish from everyone's mind.\n\nShe receives a visit from Xion, who comes to ask what she should do, and tells her plainly what she is. She promises to make sure that Roxas, once rejoined with Sora, will not suffer from what he has forgotten. After Roxas is captured by Riku, it is Naminé who receives his heart at the moment of the merge, while DiZ places him in the virtual Twilight Town.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Naminé apparaît à Roxas dans la Cité du Crépuscule virtuelle pour lui révéler qu'il est un Simili et que Sora a besoin de lui. DiZ, qui la considère comme un simple outil, l'écarte, et Axel lui reproche de vouloir faire disparaître Roxas. Une fois Sora réveillé, elle quitte le manoir et se retrouve aux mains de l'Organisation.\n\nAu Monde qui n'existe pas, elle ouvre la cellule de Kairi et l'emmène par un couloir des ténèbres, aidée de Riku. Lorsque Sora retrouve Kairi, Naminé se présente à elle et à lui pour dire adieu : Roxas et elle s'adressent l'un à l'autre depuis Sora et Kairi, avant que Naminé ne se fonde dans Kairi, où elle continuera d'exister. Sa promesse à Sora est ainsi tenue : ils se sont retrouvés, même s'il ne se souvient pas d'elle.",
          "Naminé appears to Roxas in the virtual Twilight Town to reveal that he is a Nobody and that Sora needs him. DiZ, who regards her as a mere tool, pushes her aside, and Axel blames her for wanting to make Roxas disappear. Once Sora is awake she leaves the mansion and falls into the Organization's hands.\n\nIn The World That Never Was she opens Kairi's cell and leads her through a corridor of darkness, helped by Riku. When Sora finds Kairi again, Naminé presents herself to both of them to say goodbye: Roxas and she speak to each other through Sora and Kairi, before Naminé merges into Kairi, where she will go on existing. Her promise to Sora is thus kept: they met again, even though he does not remember her.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Naminé n'a pas de corps pendant l'essentiel de Kingdom Hearts III, mais sa voix se fait entendre depuis le cœur de Kairi. Après la première défaite des Gardiens au Nécropole des Keyblades, alors que Sora remonte le fil des cœurs depuis le Monde Final, elle lui indique la voie à suivre. Lorsque Terra-Xehanort menace Ventus et Aqua, c'est elle qui, en se connectant au cœur de Terra, appelle la Volonté Persistante à la rescousse.\n\nAprès la défaite de Xehanort, le Réplica de Riku, dont le cœur survivait dans le corps du Riku des ténèbres, cède ce réceptacle pour qu'elle puisse revenir. Ansem le Sage, Even et Ienzo procèdent au transfert au Jardin Radieux, et Riku vient la chercher : Naminé rejoint tous les autres sur les Îles du Destin dans l'épilogue, où elle retrouve Kairi.",
          "Naminé has no body for most of Kingdom Hearts III, but her voice is heard from within Kairi's heart. After the Guardians' first defeat at the Keyblade Graveyard, as Sora follows the thread of hearts back from the Final World, she points him the way. When Terra-Xehanort threatens Ventus and Aqua, she is the one who, by connecting to Terra's heart, calls the Lingering Will to the rescue.\n\nAfter Xehanort's defeat, Riku Replica, whose heart survived inside Dark Riku's body, gives up that vessel so that she can return. Ansem the Wise, Even and Ienzo carry out the transfer in Radiant Garden, and Riku comes to fetch her: Naminé joins everyone on Destiny Islands in the epilogue, where she is reunited with Kairi.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
      "Melody of Memory retrouve Naminé peu après son retour, dans une scène où la Fée Marraine et Riku lui rendent visite. Riku lui décrit son rêve d'une ville inconnue et d'un jeune homme qui l'y interpelle ; Naminé, qui perçoit encore les liens entre les cœurs, explique que ce rêve provient d'un cœur relié à Sora, qui se sert de Riku pour transmettre un message.\n\nElle mentionne également une jeune fille dont le cœur, rencontré par Sora au Monde Final, cherche à se faire entendre. Cette conversation prépare directement Kingdom Hearts IV, où Strelitzia accueille Sora à Quadratum. Naminé n'intervient plus ensuite, mais elle est la première à mettre des mots sur le monde « irréel » dans lequel Sora s'est éveillé.",
          "Melody of Memory catches up with Naminé shortly after her return, in a scene where the Fairy Godmother and Riku visit her. Riku describes his dream of an unknown city and a young man calling out to him there; Naminé, who still senses the links between hearts, explains that the dream comes from a heart connected to Sora that is using Riku to pass on a message.\n\nShe also mentions a girl whose heart, met by Sora in the Final World, is trying to make itself heard. That conversation directly sets up Kingdom Hearts IV, where Strelitzia greets Sora in Quadratum. Naminé does not appear again afterwards, but she is the first to put words on the “unreal” world in which Sora woke.",
        ),
      },
    ],
    trivia: [
      L("Naminé est doublée par Brittany Snow puis Meaghan Jette Martin en anglais, et par Iyuno Ōhara en japonais.", "Naminé is voiced by Brittany Snow and later Meaghan Jette Martin in English, and by Iyuno Ōhara in Japanese."),
      L("Ses dessins, visibles dans le manoir de la Cité du Crépuscule, annoncent plusieurs événements de Kingdom Hearts II.", "Her drawings, visible in the Twilight Town mansion, foreshadow several events of Kingdom Hearts II."),
      L("Elle est la seule Simili dont l'original, Kairi, n'a jamais engendré de Sans-cœur.", "She is the only Nobody whose original, Kairi, never produced a Heartless."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Naminé", url: "https://kingdomhearts.fandom.com/wiki/Namin%C3%A9" },
    ],
  },

  // ─────────────────────────── Xion ───────────────────────────
  "xion": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Xion est la quatorzième membre de l'Organisation XIII, mais elle n'est pas un Simili : c'est une réplique, la « No. i » du programme de répliques mené par Vexen au Manoir Oblivion, conçue pour absorber les souvenirs de Sora à travers Roxas et devenir une copie de la Clé du Destin, au cas où celui-ci ferait défaut. Xemnas lui donne un nom sur le même modèle que les autres, en ajoutant un X à sa désignation de laboratoire.\n\nSon apparence dépend de celui qui la regarde : Roxas et Axel voient une jeune fille aux cheveux noirs qui ressemble à Kairi, Xigbar voit Ventus, et Saïx ne voit qu'une poupée sans visage. Créée pour 358/2 Days afin de donner un enjeu personnel au parcours de Roxas, Xion est aussi le personnage dont l'existence est vouée à être oubliée de tous, ce qui explique son absence des jeux précédents.",
          "Xion is the fourteenth member of Organization XIII, but she is not a Nobody: she is a replica, “No. i” of the replica programme run by Vexen at Castle Oblivion, designed to absorb Sora's memories through Roxas and become a copy of the Key of Destiny, in case he failed. Xemnas names her on the same pattern as the others, adding an X to her laboratory designation.\n\nHer appearance depends on who looks at her: Roxas and Axel see a black-haired girl who resembles Kairi, Xigbar sees Ventus, and Saïx sees only a faceless doll. Created for 358/2 Days to give Roxas's journey a personal stake, Xion is also the character whose existence is doomed to be forgotten by everyone, which explains her absence from the earlier games.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Xion rejoint l'Organisation juste après Roxas et, d'abord silencieuse, devient son amie puis celle d'Axel au fil des missions et des glaces partagées sur la tour de l'horloge. Elle manie la Keyblade comme lui, ce qui étonne les autres membres. Après les événements du Manoir Oblivion, elle perd ce pouvoir, le retrouve en affrontant Roxas, puis apprend de Naminé et de Riku ce qu'elle est : une réplique nourrie des souvenirs de Sora, dont l'existence empêche celui-ci de se réveiller.\n\nDéchirée entre l'envie de rester avec ses amis et la conscience de ce qu'elle vole à Roxas, elle s'enfuit à plusieurs reprises, avant d'être reprogrammée par Xemnas pour absorber Roxas. Elle choisit alors de se laisser vaincre par lui, sous la forme d'un colosse tiré des souvenirs de Sora, sur la place de la Cité du Crépuscule. Dans ses bras, elle lui demande de libérer Kingdom Hearts et de ne pas l'oublier, puis se dissout en cristaux ; aussitôt, Roxas ne se souvient plus de son nom.",
          "Xion joins the Organization right after Roxas and, silent at first, becomes his friend and then Axel's over missions and ice creams shared on the clock tower. She wields the Keyblade like him, to the surprise of the other members. After the events of Castle Oblivion she loses that power, recovers it by fighting Roxas, then learns from Naminé and Riku what she is: a replica fed with Sora's memories, whose existence keeps him from waking.\n\nTorn between wanting to stay with her friends and knowing what she is stealing from Roxas, she runs away several times before Xemnas reprograms her to absorb Roxas. She then chooses to let him defeat her, in the form of a giant drawn from Sora's memories, on the Twilight Town plaza. In his arms she asks him to set Kingdom Hearts free and not to forget her, then dissolves into crystals; at once, Roxas can no longer remember her name.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Les souvenirs de Xion ont regagné Sora avec ceux de Roxas, mais son cœur est ravivé par le Maître Xehanort, qui en fait l'un des treize Chercheurs des Ténèbres dans un nouveau corps de réplique. Amnésique et docile, elle accompagne Saïx et Xemnas au Nécropole des Keyblades, où elle affronte Sora, Lea et Kairi sans les reconnaître.\n\nLea, incapable de la frapper, laisse tomber sa Keyblade ; Xion hésite, puis retrouve la mémoire lorsque Roxas jaillit du cœur de Sora et prononce son nom. Elle se retourne contre Saïx aux côtés de ses deux amis et du Sora qui a permis leur retour, et retrouve enfin une existence propre. L'épilogue la montre au sommet de la tour de l'horloge, glace à l'eau de mer à la main, avec Roxas, Lea, Isa, Hayner, Pence et Olette.",
          "Xion's memories returned to Sora together with Roxas's, but her heart is revived by Master Xehanort, who makes her one of the thirteen Seekers of Darkness in a new replica body. Amnesiac and compliant, she accompanies Saïx and Xemnas to the Keyblade Graveyard, where she fights Sora, Lea and Kairi without recognising them.\n\nLea, unable to strike her, drops his Keyblade; Xion hesitates, then regains her memory when Roxas bursts from Sora's heart and speaks her name. She turns on Saïx alongside her two friends and the Sora who made their return possible, and finally gains an existence of her own. The epilogue shows her atop the clock tower, sea-salt ice cream in hand, with Roxas, Lea, Isa, Hayner, Pence and Olette.",
        ),
      },
    ],
    trivia: [
      L("Xion est doublée par Alyson Stoner en anglais et par Risa Uchida en japonais, les mêmes voix que Kairi.", "Xion is voiced by Alyson Stoner in English and Risa Uchida in Japanese, the same voices as Kairi."),
      L("Son nom vient de « No. i », sa désignation de réplique, avec le X de l'Organisation ; il évoque aussi « shion », l'aster, dont le langage des fleurs signifie « je ne t'oublierai pas ».", "Her name comes from “No. i”, her replica designation, with the Organization's X; it also evokes “shion”, the aster, which in the language of flowers means “I will not forget you”."),
      L("Xion est le seul membre de l'Organisation XIII à ne pas apparaître dans Kingdom Hearts II, puisque tout le monde l'a oubliée.", "Xion is the only member of Organization XIII not to appear in Kingdom Hearts II, since everyone has forgotten her."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Xion", url: "https://kingdomhearts.fandom.com/wiki/Xion" },
    ],
  },

  // ─────────────────────────── Axel (Lea) ───────────────────────────
  "axel": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Axel est le numéro VIII de l'Organisation XIII, la « Rafale de Flammes Dansantes », reconnaissable à ses cheveux rouges hérissés, aux larmes tatouées sous ses yeux et à ses deux chakrams. Il est le Simili de Lea, un garçon du Jardin Radieux qui, avec son ami Isa, a perdu son cœur lors des expériences de Xehanort sur les ténèbres. Sa réplique fétiche, « c'est bien enregistré ? », est devenue l'une des plus célèbres de la saga.\n\nIntroduit dans Chain of Memories comme un manipulateur ambigu, il gagne en profondeur avec Kingdom Hearts II et surtout 358/2 Days, où son amitié avec Roxas et Xion en fait le membre le plus humain de l'Organisation. Recomplété sous le nom de Lea dans Dream Drop Distance, il devient un Porteur de Keyblade inattendu et l'un des Gardiens de la Lumière dans Kingdom Hearts III.",
          "Axel is number VIII of Organization XIII, the “Flurry of Dancing Flames”, recognisable by his spiky red hair, the teardrop tattoos under his eyes and his two chakrams. He is the Nobody of Lea, a boy from Radiant Garden who, along with his friend Isa, lost his heart during Xehanort's experiments on darkness. His catchphrase, “Got it memorized?”, became one of the most famous lines of the series.\n\nIntroduced in Chain of Memories as an ambiguous schemer, he gains depth with Kingdom Hearts II and above all 358/2 Days, where his friendship with Roxas and Xion makes him the most human member of the Organization. Recompleted as Lea in Dream Drop Distance, he becomes an unexpected Keyblade wielder and one of the Guardians of Light in Kingdom Hearts III.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Lea apparaît adolescent au Jardin Radieux, en compagnie d'Isa. Les deux amis rêvent de s'introduire dans le château d'Ansem le Sage et croisent Ventus sur la place, à qui Lea propose un duel amical au frisbee, préfiguration de ses chakrams. Battu, il affirme avec assurance qu'il ne s'agissait que d'un échauffement, puis décrète que Ventus et lui sont désormais amis, parce qu'il veut que les gens se souviennent de lui.\n\nCette scène anodine pose tout le personnage : sa vantardise, sa loyauté et son obsession de laisser une trace. Le jeu ne montre pas la suite, mais les rapports et Kingdom Hearts III révèlent que Lea et Isa ont fini par pénétrer dans le château, y ont découvert une prisonnière, et ont perdu leur cœur dans les expériences de Xehanort, donnant naissance à Axel et Saïx.",
          "Lea appears as a teenager in Radiant Garden, in Isa's company. The two friends dream of sneaking into Ansem the Wise's castle and run into Ventus on the square, where Lea challenges him to a friendly frisbee duel, a foreshadowing of his chakrams. Beaten, he confidently claims it was only a warm-up, then declares that he and Ventus are now friends, because he wants people to remember him.\n\nThat harmless scene sets up the whole character: his bravado, his loyalty and his obsession with leaving a mark. The game does not show what follows, but the reports and Kingdom Hearts III reveal that Lea and Isa eventually got into the castle, found a prisoner there, and lost their hearts in Xehanort's experiments, giving birth to Axel and Saïx.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Axel est envoyé au Manoir Oblivion avec Marluxia, Larxene, Vexen, Lexaeus et Zexion. Officiellement membre du groupe de Marluxia, il joue en réalité double jeu pour le compte de Saïx : il laisse Marluxia et Larxene comploter contre Xemnas afin de les démasquer. Il est le premier membre de l'Organisation que Sora affronte, en un combat qu'il présente comme un simple test.\n\nQuand Vexen menace de révéler la vérité sur Roxas à Sora, Axel l'élimine sur ordre de Marluxia, qui croit ainsi s'assurer de sa fidélité. Il libère ensuite Naminé pour saboter le plan de Marluxia, puis se dérobe et laisse Zexion être détruit par le Réplica de Riku. Il ressort du château seul survivant de son groupe, sans que personne à l'extérieur ne sache exactement ce qu'il y a fait.",
          "Axel is sent to Castle Oblivion with Marluxia, Larxene, Vexen, Lexaeus and Zexion. Officially part of Marluxia's group, he actually plays a double game on Saïx's behalf: he lets Marluxia and Larxene plot against Xemnas in order to expose them. He is the first Organization member Sora fights, in a battle he presents as a mere test.\n\nWhen Vexen threatens to reveal the truth about Roxas to Sora, Axel eliminates him on Marluxia's orders, who thinks he is thereby securing his loyalty. He then frees Naminé to sabotage Marluxia's plan, slips away, and lets Zexion be destroyed by Riku Replica. He leaves the castle as the sole survivor of his group, with nobody outside knowing exactly what he did there.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Axel est chargé de former Roxas à son arrivée dans l'Organisation et, contre toute attente, s'attache à lui. Les glaces à l'eau de mer sur la tour de l'horloge deviennent leur rituel, bientôt partagé avec Xion. Sa mission au Manoir Oblivion l'éloigne plusieurs semaines, et il en revient changé, plus taciturne, sans pouvoir raconter à Roxas ce qui s'y est passé.\n\nTiraillé entre Saïx, qui lui rappelle leur projet commun de prendre le contrôle de l'Organisation, et ses deux amis, Axel ment à Roxas sur la nature de Xion, en espérant préserver leur trio. Il ramène Xion de force au château lorsqu'elle s'enfuit, ce qui le brouille avec Roxas. Quand celui-ci quitte l'Organisation, Axel tente de le retenir sur la place de la Cité du Crépuscule, puis reste seul, sa glace à la main, à se demander ce qu'il a réellement voulu.",
          "Axel is tasked with training Roxas when he joins the Organization and, against all odds, grows attached to him. Sea-salt ice creams on the clock tower become their ritual, soon shared with Xion. His mission at Castle Oblivion takes him away for several weeks, and he comes back changed, more withdrawn, unable to tell Roxas what happened there.\n\nTorn between Saïx, who reminds him of their shared plan to take control of the Organization, and his two friends, Axel lies to Roxas about Xion's nature, hoping to keep their trio together. He drags Xion back to the castle by force when she runs away, which drives a wedge between him and Roxas. When Roxas leaves the Organization, Axel tries to stop him on the Twilight Town plaza, then stays alone, ice cream in hand, wondering what he really wanted.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Dans la Cité du Crépuscule virtuelle, Axel est envoyé récupérer Roxas et découvre que ce dernier ne le reconnaît pas. Il l'affronte à deux reprises, sans parvenir à le convaincre de revenir, et disparaît en lui promettant de ne pas l'oublier. Considéré comme un traître par l'Organisation, il enlève ensuite Kairi sur les Îles du Destin, dans l'espoir insensé que Sora, en la cherchant, lui « rende » Roxas.\n\nIl finit pourtant par changer de camp : à l'Entre-Deux, submergé de Reflets, il brûle toute sa propre existence dans une dernière attaque pour sauver Sora et lui ouvrir la voie vers le Monde qui n'existe pas. Avant de s'effacer, il avoue que Roxas était le seul qui lui donnait l'impression d'avoir un cœur, et confie Kairi à Sora.",
          "In the virtual Twilight Town, Axel is sent to retrieve Roxas and discovers that Roxas does not recognise him. He fights him twice without managing to convince him to return, and vanishes while promising not to forget him. Considered a traitor by the Organization, he then kidnaps Kairi on Destiny Islands, in the senseless hope that Sora, searching for her, will “give” Roxas back to him.\n\nHe ends up changing sides all the same: in Betwixt and Between, overwhelmed by Dusks, he burns his entire being in one last attack to save Sora and open the way to The World That Never Was for him. Before fading, he admits that Roxas was the only one who made him feel as if he had a heart, and entrusts Kairi to Sora.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "La destruction d'Axel entraîne, comme pour tous les Similis, le retour de son original : Lea se réveille au Jardin Radieux, dans le laboratoire d'Ansem le Sage, en même temps que Dilan, Even, Aeleus et Ienzo. Il quitte aussitôt les lieux pour retrouver Isa, ou plutôt Saïx, dont il n'a aucune nouvelle.\n\nSon chemin le conduit au Monde qui n'existe pas au moment précis où le Maître Xehanort s'apprête à faire de Sora son treizième réceptacle. Lea fait irruption dans la salle du trône, repousse Xehanort avec ses chakrams et aide Riku et Mickey à emporter Sora. À la Tour Mystérieuse, il demande à Yen Sid d'apprendre à manier la Keyblade et surprend tout le monde en en invoquant une sur-le-champ, ce qui lui vaut d'être formé par Merlin et les trois fées.",
          "Axel's destruction brings back, as for every Nobody, his original: Lea wakes in Radiant Garden, in Ansem the Wise's laboratory, at the same time as Dilan, Even, Aeleus and Ienzo. He leaves at once to look for Isa, or rather Saïx, of whom he has no news.\n\nHis path leads him to The World That Never Was at the very moment Master Xehanort is about to make Sora his thirteenth vessel. Lea bursts into the throne room, drives Xehanort back with his chakrams and helps Riku and Mickey carry Sora away. At the Mysterious Tower he asks Yen Sid to learn the Keyblade and surprises everyone by summoning one on the spot, which earns him training from Merlin and the three fairies.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Lea s'entraîne avec Kairi dans une forêt hors du temps et, malgré son inexpérience, rejoint les sept Gardiens de la Lumière. Au Nécropole des Keyblades, il retrouve face à lui Saïx et Xion, ressuscitée par Xehanort : incapable de frapper son amie, il laisse tomber sa Keyblade et manque de mourir. C'est le retour de Roxas, surgi du cœur de Sora, qui renverse la situation, et Xion recouvre la mémoire.\n\nÀ trois, ils vainquent Saïx, dont la disparition ramène Isa : celui-ci explique enfin que toute leur entreprise visait à retrouver la jeune fille rencontrée jadis dans le château d'Ansem. Lea participe ensuite à la victoire contre Xehanort, et l'épilogue le réunit avec Roxas, Xion, Isa et les jeunes de la Cité du Crépuscule au sommet de la tour de l'horloge.",
          "Lea trains with Kairi in a forest outside of time and, despite his inexperience, joins the seven Guardians of Light. At the Keyblade Graveyard he finds Saïx and Xion, revived by Xehanort, standing against him: unable to strike his friend, he drops his Keyblade and nearly dies. It is Roxas's return, bursting from Sora's heart, that turns the tide, and Xion recovers her memory.\n\nThe three of them defeat Saïx, whose disappearance brings Isa back: he finally explains that their whole enterprise was meant to find the girl they once met in Ansem's castle. Lea then takes part in the victory over Xehanort, and the epilogue reunites him with Roxas, Xion, Isa and the Twilight Town kids atop the clock tower.",
        ),
      },
    ],
    trivia: [
      L("Axel est doublé par Quinton Flynn en anglais et par Keiji Fujiwara en japonais ; Emmanuel Garijo lui prête sa voix en français.", "Axel is voiced by Quinton Flynn in English and Keiji Fujiwara in Japanese; Emmanuel Garijo voices him in French."),
      L("Sa Keyblade, Flame Liberator, a une garde en forme de chakram et un porte-clés à la flamme.", "His Keyblade, Flame Liberator, has a chakram-shaped guard and a flame keychain."),
      L("Nomura a expliqué que le nom Lea s'écrit sans « h » final pour éviter toute confusion avec le prénom féminin.", "Nomura explained that the name Lea is spelled without a final “h” to avoid confusion with the female first name."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Lea", url: "https://kingdomhearts.fandom.com/wiki/Lea" },
      { label: "Kingdom Hearts Wiki — Axel", url: "https://kingdomhearts.fandom.com/wiki/Axel" },
    ],
  },

  // ─────────────────────────── Terra ───────────────────────────
  "terra": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Terra est l'aîné du trio de Birth by Sleep, élève du Maître Eraqus à la Contrée du Départ avec Aqua et Ventus. Grand, taciturne, il incarne la force brute et l'attachement à la lumière tel que l'enseigne Eraqus, mais il porte en lui des ténèbres qu'il n'a jamais appris à accepter. Son nom signifie « terre » en latin, comme Ventus signifie « vent » et Aqua « eau », et sa Keyblade, Confins de la Terre, reflète cette solidité.\n\nSon apparence a d'abord fait croire aux joueurs de Kingdom Hearts II Final Mix, où son armure apparaissait comme boss secret, qu'il était lié à Xehanort. Ce n'était pas faux : Terra est le corps dans lequel le Maître Xehanort s'installe, ce qui fait de lui, malgré lui, l'origine d'Ansem, Chercheur des Ténèbres, et de Xemnas. Personnage tragique par excellence, il est aussi celui qui a choisi Riku comme successeur.",
          "Terra is the eldest of the Birth by Sleep trio, a student of Master Eraqus in the Land of Departure alongside Aqua and Ventus. Tall and taciturn, he embodies raw strength and devotion to the light as Eraqus teaches it, but he carries a darkness within that he never learned to accept. His name means “earth” in Latin, as Ventus means “wind” and Aqua “water”, and his Keyblade, Ends of the Earth, reflects that solidity.\n\nHis appearance first led players of Kingdom Hearts II Final Mix, where his armour appeared as a secret boss, to believe he was tied to Xehanort. That was not wrong: Terra is the body Master Xehanort moves into, which makes him, against his will, the origin of Ansem, Seeker of Darkness, and Xemnas. The tragic character par excellence, he is also the one who chose Riku as his successor.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Lors de l'examen de Maîtrise, Terra laisse échapper des ténèbres et échoue là où Aqua réussit. Eraqus lui confie néanmoins la mission de retrouver le Maître Xehanort disparu et de traquer les Nescients. Dans les mondes qu'il traverse, Terra se laisse instrumentaliser : il ouvre la voie à Maléfique dans le Domaine Enchanté, croise la route de Xehanort, qui prétend vouloir l'aider à maîtriser ses ténèbres, et s'éloigne d'Aqua, chargée par Eraqus de le surveiller. Sur les Îles du Destin, il désigne le jeune Riku comme futur Porteur de Keyblade.\n\nDe retour à la Contrée du Départ, il surprend Eraqus prêt à frapper Ventus et, dans sa colère, terrasse son propre maître, que Xehanort achève avant de détruire le monde. Au Nécropole des Keyblades, Terra comprend enfin le plan de Xehanort, mais celui-ci arrache son propre cœur et le lui impose. Terra résiste de l'intérieur ; sa volonté, réfugiée dans son armure, abat Terra-Xehanort, tandis que son cœur, emporté avec le corps, va lutter pendant plus de dix ans contre celui de Xehanort.",
          "During the Mark of Mastery exam, Terra lets darkness slip out and fails where Aqua passes. Eraqus nonetheless entrusts him with finding the missing Master Xehanort and hunting the Unversed. In the worlds he crosses, Terra lets himself be used: he opens the way for Maleficent in the Enchanted Dominion, meets Xehanort, who claims he wants to help him master his darkness, and drifts away from Aqua, whom Eraqus has asked to keep watch on him. On Destiny Islands he chooses the young Riku as a future Keyblade wielder.\n\nBack in the Land of Departure he catches Eraqus about to strike Ventus and, in his anger, brings down his own master, whom Xehanort finishes off before destroying the world. At the Keyblade Graveyard Terra finally understands Xehanort's plan, but Xehanort tears out his own heart and forces it into him. Terra resists from within; his will, sheltered in his armour, defeats Terra-Xehanort, while his heart, carried off with the body, will struggle for more than ten years against Xehanort's.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Le cœur de Terra a passé plus d'une décennie enfermé dans le Gardien, le Sans-cœur qui accompagne Ansem, Chercheur des Ténèbres, où Xehanort l'a enchaîné. Terra-Xehanort, ramené par le voyage temporel, se dresse au Nécropole des Keyblades contre Aqua et Ventus, et le Gardien s'apprête à les écraser lorsque Naminé, en se connectant au cœur de Terra, réveille la Volonté Persistante.\n\nSoutenu par la volonté de son armure et par l'appel de ses amis, Terra reprend le contrôle de son corps et expulse le cœur de Xehanort : il retrouve Aqua et Ventus sur le champ de bataille, puis se bat à leurs côtés jusqu'à Scala ad Caelum. L'épilogue le montre, en compagnie de ses deux amis, réunis autour de Chirithy sur les Îles du Destin, tandis que la Contrée du Départ, restaurée, redevient leur foyer.",
          "Terra's heart spent more than a decade imprisoned in the Guardian, the Heartless that accompanies Ansem, Seeker of Darkness, where Xehanort chained it. Terra-Xehanort, brought back through time travel, stands at the Keyblade Graveyard against Aqua and Ventus, and the Guardian is about to crush them when Naminé, by connecting to Terra's heart, awakens the Lingering Will.\n\nSupported by the will in his armour and by his friends' call, Terra regains control of his body and expels Xehanort's heart: he reunites with Aqua and Ventus on the battlefield, then fights beside them all the way to Scala ad Caelum. The epilogue shows him with his two friends, gathered around Chirithy on Destiny Islands, while the restored Land of Departure becomes their home again.",
        ),
      },
    ],
    trivia: [
      L("Terra est doublé par Jason Dohring en anglais et par Ryōtarō Okiayu en japonais.", "Terra is voiced by Jason Dohring in English and Ryōtarō Okiayu in Japanese."),
      L("Son armure et sa Keyblade sont apparues dans Kingdom Hearts II Final Mix, en 2007, avant même l'annonce de Birth by Sleep.", "His armour and Keyblade appeared in Kingdom Hearts II Final Mix, in 2007, before Birth by Sleep was even announced."),
      L("Ses Keyblades successives, Trembleterre puis Confins de la Terre, portent toutes deux des noms liés à la terre.", "His successive Keyblades, Earthshaker and Ends of the Earth, both bear names tied to the earth."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Terra", url: "https://kingdomhearts.fandom.com/wiki/Terra" },
    ],
  },

  // ─────────────────────────── Ventus ───────────────────────────
  "ventus": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Ventus, ou Ven, est le plus jeune du trio de Birth by Sleep. Il est arrivé à la Contrée du Départ amnésique, déposé par le Maître Xehanort, qui l'avait pris comme apprenti avant d'arracher de son cœur les ténèbres pour créer Vanitas. Aqua et Terra l'adoptent comme un petit frère. Son nom signifie « vent » en latin, et il se bat avec sa Keyblade tenue à l'envers, un style qui le distingue immédiatement.\n\nSon visage est celui de Roxas, et ce n'est pas un hasard : lorsque son cœur est brisé, il trouve refuge dans celui du petit Sora, sur les Îles du Destin, et y reste dix ans ; c'est ce cœur qui donne ses traits à Roxas à la naissance de celui-ci. Ventus est aussi l'un des rares personnages à traverser presque toute la chronologie de la saga : Union χ révèle qu'il est en réalité un Porteur de l'Âge des Fées, l'un des cinq chefs d'Union choisis par Ava, envoyé bien plus tard dans le temps.",
          "Ventus, or Ven, is the youngest of the Birth by Sleep trio. He arrived in the Land of Departure amnesiac, dropped off by Master Xehanort, who had taken him as an apprentice before tearing the darkness out of his heart to create Vanitas. Aqua and Terra adopt him like a little brother. His name means “wind” in Latin, and he fights with his Keyblade held backhand, a style that sets him apart at once.\n\nHis face is Roxas's, and that is no coincidence: when his heart is broken it takes refuge in the young Sora's on Destiny Islands and stays there ten years; that heart gives Roxas his features when he is born. Ventus is also one of the few characters to span almost the entire chronology of the series: Union χ reveals that he is in fact a wielder from the Age of Fairy Tales, one of the five Union leaders chosen by Ava, sent far ahead in time.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
      "Ventus vit à Ville de l'Aube, à l'Âge des Fées, où il fait partie de l'Union de la Prophète Ava. Celle-ci le choisit, avec Ephemer, Skuld, Brain et Lauriam, pour diriger les Pissenlits, les Porteurs qu'elle a mis à l'abri de la Guerre des Keyblades. Ventus est le plus jeune des cinq chefs, souvent moqué pour sa candeur, mais sincèrement attaché à ses camarades et à Chirithy.\n\nUnion χ révèle peu à peu qu'une entité, les Ténèbres, s'est glissée en lui à son insu : c'est elle qui, à travers son corps, a fait disparaître Strelitzia, la sœur de Lauriam, et Ventus n'en garde aucun souvenir. Une fois la vérité connue, les chefs d'Union font le nécessaire pour préserver les mondes de cette menace, et Ventus, plongé dans le sommeil, est envoyé vers l'avenir. C'est ainsi qu'il finit, sans mémoire, entre les mains du Maître Xehanort, des siècles plus tard.",
          "Ventus lives in Daybreak Town in the Age of Fairy Tales, where he belongs to the Union of the Foreteller Ava. She chooses him, with Ephemer, Skuld, Brain and Lauriam, to lead the Dandelions, the wielders she sheltered from the Keyblade War. Ventus is the youngest of the five leaders, often teased for his naivety but sincerely attached to his comrades and to Chirithy.\n\nUnion χ gradually reveals that an entity, the Darkness, slipped into him without his knowledge: it is the Darkness that, through his body, made Strelitzia, Lauriam's sister, disappear, and Ventus retains no memory of it. Once the truth is known, the Union leaders do what is needed to protect the worlds from that threat, and Ventus, cast into sleep, is sent towards the future. That is how he ends up, memoryless, in Master Xehanort's hands centuries later.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Ventus vit heureux à la Contrée du Départ jusqu'à la visite de Vanitas, qui lui annonce que Terra ne reviendra pas le même. Malgré l'interdiction d'Eraqus, il part à sa poursuite et parcourt les mondes en compagnie de nouveaux amis, dont Mickey, tout en se heurtant aux Nescients. Sur les Îles du Destin, il rencontre les petits Sora et Riku, et au Jardin Radieux il se lie avec Lea.\n\nXehanort finit par lui révéler la vérité : Ventus est la moitié lumineuse d'un cœur dont Vanitas est la moitié sombre, et leur réunion forgera la χ-blade. Ventus rentre demander des comptes à Eraqus, qui tente de le détruire pour empêcher cela ; Terra le sauve. Au Nécropole des Keyblades, Vanitas s'empare de lui et la χ-blade se forme, mais Ventus la brise de l'intérieur en affrontant Vanitas dans son propre cœur. Son cœur fracturé quitte son corps, qu'Aqua dépose au Manoir Oblivion, et trouve refuge chez Sora.",
          "Ventus lives happily in the Land of Departure until Vanitas visits him and announces that Terra will not come back the same. Despite Eraqus's ban, he sets off after him and travels the worlds with new friends, including Mickey, while clashing with the Unversed. On Destiny Islands he meets the young Sora and Riku, and in Radiant Garden he befriends Lea.\n\nXehanort eventually reveals the truth to him: Ventus is the light half of a heart whose dark half is Vanitas, and their reunion will forge the χ-blade. Ventus goes home to confront Eraqus, who tries to destroy him to prevent it; Terra saves him. At the Keyblade Graveyard Vanitas seizes him and the χ-blade takes shape, but Ventus breaks it from within by fighting Vanitas inside his own heart. His fractured heart leaves his body, which Aqua lays to rest in Castle Oblivion, and finds refuge in Sora.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Le cœur de Ventus, endormi en Sora depuis Dream Drop Distance, se manifeste ponctuellement, notamment lorsque Sora et Vanitas se retrouvent à Monstropolis. Après le sauvetage d'Aqua, celle-ci conduit Sora au Manoir Oblivion, qu'elle retransforme en Contrée du Départ pour ouvrir la Chambre de l'Éveil. Vanitas les y attend ; Sora libère le cœur de Ventus, qui regagne son corps et se lève pour la première fois depuis dix ans.\n\nAu Nécropole des Keyblades, Ventus combat aux côtés d'Aqua contre Terra-Xehanort, puis affronte Vanitas une dernière fois avec Sora, avant que ce dernier ne s'efface en refusant la lumière. Ventus prend part à la bataille finale contre Xehanort à Scala ad Caelum. L'épilogue le montre, réuni avec Terra et Aqua, retrouvant Chirithy que Sora a ramené du Monde Final.",
          "Ventus's heart, asleep within Sora since Dream Drop Distance, surfaces at times, notably when Sora and Vanitas meet in Monstropolis. After Aqua is rescued, she leads Sora to Castle Oblivion, which she turns back into the Land of Departure to open the Chamber of Waking. Vanitas is waiting there; Sora frees Ventus's heart, which returns to its body, and Ventus stands up for the first time in ten years.\n\nAt the Keyblade Graveyard Ventus fights alongside Aqua against Terra-Xehanort, then faces Vanitas one last time with Sora, before Vanitas fades away, refusing the light. Ventus takes part in the final battle against Xehanort in Scala ad Caelum. The epilogue shows him, reunited with Terra and Aqua, finding Chirithy again, whom Sora brought back from the Final World.",
        ),
      },
    ],
    trivia: [
      L("Ventus est doublé par Jesse McCartney en anglais et par Kōki Uchiyama en japonais, les mêmes voix que Roxas.", "Ventus is voiced by Jesse McCartney in English and Kōki Uchiyama in Japanese, the same voices as Roxas."),
      L("Sa manière de tenir la Keyblade à l'envers est reprise par Roxas dans certaines attaques de Kingdom Hearts II.", "His backhand grip on the Keyblade is reused by Roxas in some attacks in Kingdom Hearts II."),
      L("Dans Dream Drop Distance, Ventus apparaît sous la forme de l'armure cauchemardesque que Riku doit vaincre dans le cœur de Sora.", "In Dream Drop Distance, Ventus appears as the nightmare armour Riku must defeat inside Sora's heart."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Ventus", url: "https://kingdomhearts.fandom.com/wiki/Ventus" },
    ],
  },

  // ─────────────────────────── Aqua ───────────────────────────
  "aqua": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Aqua est la seule femme du trio de Birth by Sleep et la première Porteuse de Keyblade féminine jouable de la saga. Élève d'Eraqus à la Contrée du Départ, elle est la plus disciplinée et la plus douée en magie des trois, et la seule à réussir l'examen de Maîtrise. Son nom signifie « eau » en latin, et elle fabrique pour ses amis trois porte-bonheur en forme d'étoile, inspirés des coquillages des Îles du Destin, pour que leurs cœurs restent liés.\n\nNomura a conçu Aqua comme le pilier moral du trio : celle qui suit les ordres, mais qui refuse d'abandonner Terra et Ventus quoi qu'il arrive. Cette loyauté lui coûte plus de dix ans dans le Domaine des Ténèbres. Elle est aussi celle qui rencontre Kairi enfant, qui croise Sora et Riku, et qui transforme la Contrée du Départ en Manoir Oblivion : bon nombre des mystères du premier cycle passent par elle.",
          "Aqua is the only woman of the Birth by Sleep trio and the first playable female Keyblade wielder in the series. A student of Eraqus in the Land of Departure, she is the most disciplined and the most gifted in magic of the three, and the only one to pass the Mark of Mastery exam. Her name means “water” in Latin, and she makes three star-shaped good-luck charms for her friends, inspired by the shells of Destiny Islands, so that their hearts stay connected.\n\nNomura designed Aqua as the trio's moral pillar: the one who follows orders but refuses to abandon Terra and Ventus no matter what. That loyalty costs her more than ten years in the Realm of Darkness. She is also the one who meets the young Kairi, who crosses paths with Sora and Riku, and who turns the Land of Departure into Castle Oblivion: many mysteries of the first cycle run through her.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Nommée Maître à l'issue de l'examen, Aqua reçoit d'Eraqus la mission de suivre Terra et de ramener Ventus. Elle traverse les mêmes mondes que ses amis, rencontrant Cendrillon, Blanche-Neige et Aurore, dont elle protège la lumière contre les Nescients. Au Jardin Radieux, elle sauve la petite Kairi et lui lance un charme de protection ; sur les Îles du Destin, elle croise Sora et Riku et devine que ce dernier a été choisi par Terra.\n\nSon obéissance à Eraqus la sépare de Terra, qui se sent trahi, et elle assiste impuissante à la chute de la Contrée du Départ. Au Nécropole des Keyblades, elle affronte Vanitas, puis Terra-Xehanort au Jardin Radieux : pour empêcher Terra de disparaître dans les ténèbres, elle plonge à sa suite et lui cède son armure et sa Keyblade, restant seule dans le Domaine des Ténèbres. Auparavant, elle a déposé le corps de Ventus dans la Contrée du Départ transformée en Manoir Oblivion, grâce à la Keyblade d'Eraqus.",
          "Named Master after the exam, Aqua is given by Eraqus the mission of following Terra and bringing Ventus home. She crosses the same worlds as her friends, meeting Cinderella, Snow White and Aurora, whose light she protects from the Unversed. In Radiant Garden she saves the young Kairi and casts a protective charm on her; on Destiny Islands she meets Sora and Riku and guesses that the latter has been chosen by Terra.\n\nHer obedience to Eraqus separates her from Terra, who feels betrayed, and she can only watch as the Land of Departure falls. At the Keyblade Graveyard she fights Vanitas, then Terra-Xehanort in Radiant Garden: to keep Terra from vanishing into the darkness she dives in after him and gives up her armour and Keyblade, staying behind alone in the Realm of Darkness. Before that, she laid Ventus's body to rest in the Land of Departure, turned into Castle Oblivion with Eraqus's Keyblade.",
        ),
      },
      {
        game: "0-2-birth-by-sleep-a-fragmentary-passage",
        text: L(
      "0.2 suit Aqua dans le Domaine des Ténèbres, où le temps ne s'écoule pas comme ailleurs. Armée de la Keyblade d'Eraqus, elle traverse les ruines des mondes engloutis par les Sans-cœur, le Domaine Enchanté, le Palais des Rêves et la Forêt des Nains, hantée par des visions de Terra et Ventus et par son propre reflet qui l'accuse d'avoir échoué.\n\nAu bord de la mer sombre, elle rencontre le roi Mickey, venu chercher la Keyblade du Domaine des Ténèbres pour refermer la porte de Kingdom Hearts. Tous deux parviennent à la porte alors que Sora et Riku la ferment de l'autre côté ; Aqua se sacrifie pour repousser une Tour Démoniaque et permettre à Mickey de rester près de la porte, mais elle est entraînée au plus profond des ténèbres. Le jeu s'achève sur Mickey racontant à Yen Sid, Sora, Donald et Dingo ce qu'il lui doit, au moment où Kingdom Hearts III commence.",
          "0.2 follows Aqua in the Realm of Darkness, where time does not flow as it does elsewhere. Armed with Eraqus's Keyblade, she crosses the ruins of worlds swallowed by the Heartless, the Enchanted Dominion, the Castle of Dreams and the Dwarf Woodlands, haunted by visions of Terra and Ventus and by her own reflection accusing her of having failed.\n\nOn the shore of the dark sea she meets King Mickey, who has come for the Realm of Darkness's Keyblade in order to close the door to Kingdom Hearts. The two reach the door as Sora and Riku close it from the other side; Aqua sacrifices herself to hold off a Demon Tower and let Mickey stay by the door, but she is dragged into the deepest darkness. The game ends with Mickey telling Yen Sid, Sora, Donald and Goofy what he owes her, just as Kingdom Hearts III begins.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Quand Riku et Mickey la retrouvent enfin sur la plage du Domaine des Ténèbres, Aqua a cédé : trahie par la fin de son espoir, elle a été submergée par les ténèbres, prend l'apparence d'une Anti-Aqua et se retourne contre eux. Sora, arrivé grâce au Pouvoir de l'éveil, plonge avec Riku pour la ramener à la lumière, et Aqua reprend ses esprits sur la plage des Îles du Destin, libre pour la première fois depuis plus de dix ans.\n\nElle conduit Sora au Manoir Oblivion, qu'elle retransforme en Contrée du Départ, et assiste au réveil de Ventus. Au Nécropole des Keyblades, elle affronte Vanitas puis Terra-Xehanort aux côtés de Ven, jusqu'au retour de Terra. Elle participe à la bataille finale à Scala ad Caelum, et Melody of Memory la montre ensuite prête à entraîner Kairi. L'épilogue de Kingdom Hearts III la réunit avec ses deux amis sur les Îles du Destin, leur promesse enfin tenue.",
          "When Riku and Mickey finally find her on the shore of the Realm of Darkness, Aqua has given in: betrayed by the end of her hope, she has been swallowed by darkness, takes the form of Anti-Aqua and turns on them. Sora, arriving through the power of waking, dives in with Riku to bring her back to the light, and Aqua comes to her senses on the beach of Destiny Islands, free for the first time in more than ten years.\n\nShe leads Sora to Castle Oblivion, which she turns back into the Land of Departure, and witnesses Ventus's awakening. At the Keyblade Graveyard she faces Vanitas and then Terra-Xehanort beside Ven, until Terra returns. She takes part in the final battle in Scala ad Caelum, and Melody of Memory later shows her ready to train Kairi. The epilogue of Kingdom Hearts III reunites her with her two friends on Destiny Islands, their promise finally kept.",
        ),
      },
    ],
    trivia: [
      L("Aqua est doublée par Willa Holland en anglais et par Megumi Toyoguchi en japonais.", "Aqua is voiced by Willa Holland in English and Megumi Toyoguchi in Japanese."),
      L("Le nom des porte-bonheur, « Wayfinder », désigne aussi le trio dans les documents officiels.", "The name of the good-luck charms, “Wayfinder”, also designates the trio in official material."),
      L("Elle est le premier personnage à réussir l'examen de Maîtrise à l'écran, avant Riku dans Dream Drop Distance.", "She is the first character to pass the Mark of Mastery exam on screen, before Riku in Dream Drop Distance."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Aqua", url: "https://kingdomhearts.fandom.com/wiki/Aqua" },
    ],
  },

  // ─────────────────────────── Maître Eraqus ───────────────────────────
  "eraqus": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Maître Eraqus est le Maître de la Keyblade qui a formé Terra, Aqua et Ventus à la Contrée du Départ. Cheveux noirs noués, cicatrices au visage, il incarne une vision rigoureuse de la lumière : les ténèbres sont un mal à éradiquer, y compris chez ses propres élèves. Sa Keyblade, Garde du Maître, sert aussi de clé à la Contrée du Départ, qu'elle peut transformer en labyrinthe pour protéger ce qu'on y cache. Son nom est l'anagramme de « Square », clin d'œil de Nomura à l'éditeur.\n\nCondisciple du Maître Xehanort dans leur jeunesse à Scala ad Caelum, il en est resté l'ami malgré leurs désaccords, ce qui lui sera fatal. Après sa mort, son cœur survit dans celui de Terra, ce qui permet à Eraqus de revenir un instant à la fin de Kingdom Hearts III pour clore, aux côtés de Xehanort, une partie d'échecs commencée soixante ans plus tôt.",
          "Master Eraqus is the Keyblade Master who trained Terra, Aqua and Ventus in the Land of Departure. With tied-back black hair and a scarred face, he embodies a strict vision of the light: darkness is an evil to be rooted out, even in his own students. His Keyblade, Master's Defender, also serves as the key to the Land of Departure, which it can turn into a maze to protect whatever is hidden there. His name is an anagram of “Square”, a nod from Nomura to the publisher.\n\nA classmate of Master Xehanort in their youth in Scala ad Caelum, he remained his friend despite their disagreements, which would prove fatal. After his death his heart survives within Terra's, which allows Eraqus to return for a moment at the end of Kingdom Hearts III to finish, beside Xehanort, a chess game begun sixty years earlier.",
        ),
      },
      {
        game: "dark-road",
        text: L(
      "Dark Road montre Eraqus adolescent à Scala ad Caelum, élève du Maître Odin dans la même classe que Xehanort, Bragi, Vor, Hermod et Urd. Issu d'une famille de Maîtres établie de longue date dans la cité, il est le plus sérieux du groupe, mais aussi le partenaire d'échecs de Xehanort, avec qui il débat sans fin de la lumière, des ténèbres et de l'équilibre du monde. Les deux garçons se lient d'une amitié sincère malgré leurs vues opposées.\n\nLeur formation est bouleversée par une série de disparitions parmi les élèves plus âgés, jusqu'à ce que la classe découvre que les ténèbres ont trouvé un hôte parmi eux. La tragédie qui s'ensuit coûte la vie à plusieurs de leurs camarades. Eraqus en sort convaincu que les ténèbres doivent être combattues sans compromis, là où Xehanort en tire la conclusion inverse : cette divergence, née à Scala, structure toute la saga.",
          "Dark Road shows Eraqus as a teenager in Scala ad Caelum, a student of Master Odin in the same class as Xehanort, Bragi, Vor, Hermod and Urd. Born into a family of Masters long established in the city, he is the most serious of the group, but also Xehanort's chess partner, with whom he endlessly debates light, darkness and the balance of the world. The two boys form a sincere friendship despite their opposing views.\n\nTheir training is shaken by a series of disappearances among the older students, until the class discovers that darkness has found a host among them. The ensuing tragedy costs several of their classmates their lives. Eraqus comes out of it convinced that darkness must be fought without compromise, while Xehanort draws the opposite conclusion: that divergence, born in Scala, shapes the whole series.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Eraqus préside l'examen de Maîtrise de Terra et Aqua, en présence de Xehanort, et ne reconnaît qu'Aqua comme Maître, les ténèbres ayant transparu chez Terra. Il confie néanmoins à Terra la traque des Nescients et la recherche de Xehanort, puis demande discrètement à Aqua de surveiller son ami. Lorsque Ventus part à son tour, il ne peut le retenir.\n\nXehanort lui révèle alors, par un message, que Ventus est destiné à forger la χ-blade avec Vanitas. Fidèle à ses principes, Eraqus décide de détruire son propre élève pour empêcher une nouvelle Guerre des Keyblades. Terra, de retour, s'interpose et abat son maître, qui comprend trop tard qu'il a été manipulé. Xehanort l'achève et détruit la Contrée du Départ. Avant de mourir, Eraqus avait transmis à Aqua le secret de Garde du Maître, qui lui permet de transformer le monde en Manoir Oblivion, et son cœur, sans que nul ne le sache, s'est réfugié dans celui de Terra.",
          "Eraqus presides over Terra's and Aqua's Mark of Mastery exam in Xehanort's presence, and recognises only Aqua as a Master, darkness having shown through in Terra. He nonetheless entrusts Terra with hunting the Unversed and finding Xehanort, then quietly asks Aqua to keep watch on her friend. When Ventus leaves in turn, he cannot hold him back.\n\nXehanort then reveals to him, in a message, that Ventus is destined to forge the χ-blade with Vanitas. True to his principles, Eraqus decides to destroy his own student to prevent a new Keyblade War. Terra, returning, steps in and strikes down his master, who understands too late that he has been manipulated. Xehanort finishes him and destroys the Land of Departure. Before dying, Eraqus had passed on to Aqua the secret of Master's Defender, which lets her turn the world into Castle Oblivion, and his heart, unbeknownst to all, took refuge in Terra's.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Kingdom Hearts III s'ouvre sur une partie d'échecs entre le jeune Eraqus et le jeune Xehanort à Scala ad Caelum, où Eraqus laisse entendre qu'un rôle décisif reviendra à ceux qui ne figurent pas sur l'échiquier. Le jeu reprend cette image tout au long de l'aventure, à mesure que les pièces des Gardiens et des Chercheurs se mettent en place.\n\nÀ Scala ad Caelum, une fois le Maître Xehanort vaincu, le cœur d'Eraqus se manifeste depuis celui de Terra. Il reproche affectueusement à son vieil ami d'avoir voulu tout réinitialiser, le convainc de remettre la χ-blade à Sora, et l'emmène avec lui vers l'au-delà, sous le regard de Terra, Aqua et Ventus, à qui il demande pardon. La dernière scène du duo reprend leur partie d'échecs, enfin achevée.",
          "Kingdom Hearts III opens on a chess game between the young Eraqus and the young Xehanort in Scala ad Caelum, where Eraqus hints that a decisive part will fall to those not on the board. The game returns to that image throughout the adventure, as the pieces of the Guardians and the Seekers fall into place.\n\nIn Scala ad Caelum, once Master Xehanort is defeated, Eraqus's heart emerges from Terra's. He gently reproaches his old friend for wanting to reset everything, convinces him to hand the χ-blade to Sora, and takes him away to the beyond under the eyes of Terra, Aqua and Ventus, whom he asks for forgiveness. The pair's final scene returns to their chess game, at last finished.",
        ),
      },
    ],
    trivia: [
      L("Eraqus est doublé par Mark Hamill en anglais et par Makio Inoue en japonais.", "Eraqus is voiced by Mark Hamill in English and Makio Inoue in Japanese."),
      L("Son nom est une anagramme de « Square », comme Xehanort contient « Another » et « No heart ».", "His name is an anagram of “Square”, just as Xehanort contains “Another” and “No heart”."),
      L("Sa Keyblade, Garde du Maître, est celle qu'Aqua manie dans 0.2 Birth by Sleep.", "His Keyblade, Master's Defender, is the one Aqua wields in 0.2 Birth by Sleep."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Eraqus", url: "https://kingdomhearts.fandom.com/wiki/Eraqus" },
    ],
  },

  // ─────────────────────────── Maître Xehanort ───────────────────────────
  "master-xehanort": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Maître Xehanort est le grand antagoniste de la saga du Chercheur des Ténèbres. Vieillard chauve à la barbiche blanche et aux yeux dorés, il est un Maître de la Keyblade persuadé que le monde a perdu son équilibre et qu'il faut déclencher une nouvelle Guerre des Keyblades pour le remettre à zéro. Né sur les Îles du Destin, il a été formé à Scala ad Caelum, et son nom contient les anagrammes « No heart » et « Another », qui résument sa nature.\n\nRévélé dans Birth by Sleep, il est en réalité l'origine d'Ansem, Chercheur des Ténèbres, et de Xemnas, tous deux issus du corps de Terra qu'il s'est approprié. Son plan, étalé sur des décennies, consiste à réunir treize réceptacles de ses ténèbres et sept cœurs de lumière pour forger la χ-blade et ouvrir Kingdom Hearts. Chaque jeu de la saga, de Kingdom Hearts à Kingdom Hearts III, se révèle rétrospectivement une pièce de ce plan.",
          "Master Xehanort is the great antagonist of the Dark Seeker saga. A bald old man with a white goatee and golden eyes, he is a Keyblade Master convinced that the world has lost its balance and that a new Keyblade War must be triggered to reset it. Born on Destiny Islands, he was trained in Scala ad Caelum, and his name contains the anagrams “No heart” and “Another”, which sum up his nature.\n\nRevealed in Birth by Sleep, he is in fact the origin of Ansem, Seeker of Darkness, and of Xemnas, both born from Terra's body, which he appropriated. His plan, spread across decades, consists of gathering thirteen vessels of his darkness and seven hearts of light in order to forge the χ-blade and open Kingdom Hearts. Every game in the series, from Kingdom Hearts to Kingdom Hearts III, turns out in hindsight to be a piece of that plan.",
        ),
      },
      {
        game: "dark-road",
        text: L(
      "Dark Road raconte la jeunesse de Xehanort. Adolescent élevé sur les Îles du Destin, il rejoint Scala ad Caelum pour y devenir Porteur de Keyblade sous la direction du Maître Odin, aux côtés d'Eraqus, Bragi, Vor, Hermod et Urd. Curieux et brillant, il s'interroge très tôt sur la place des ténèbres dans le monde et sur les légendes de la Guerre des Keyblades, tout en se liant d'amitié avec Eraqus autour de l'échiquier.\n\nLa classe est envoyée à travers les mondes pour élucider la disparition d'élèves plus âgés, une enquête qui les confronte à la corruption des cœurs et se solde par la mort de plusieurs de leurs camarades. Xehanort en ressort persuadé que la lumière et les ténèbres doivent être remises à égalité, fût-ce par la destruction. Le jeu éclaire aussi ses liens avec l'Âge des Fées et son départ de Scala, prélude à sa rencontre future avec Eraqus devenu Maître.",
          "Dark Road tells the story of Xehanort's youth. A teenager raised on Destiny Islands, he joins Scala ad Caelum to become a Keyblade wielder under Master Odin, alongside Eraqus, Bragi, Vor, Hermod and Urd. Curious and brilliant, he wonders early on about the place of darkness in the world and about the legends of the Keyblade War, while befriending Eraqus over the chessboard.\n\nThe class is sent across the worlds to investigate the disappearance of older students, an inquiry that confronts them with the corruption of hearts and ends with the death of several of their classmates. Xehanort comes out convinced that light and darkness must be made equal again, even through destruction. The game also sheds light on his ties to the Age of Fairy Tales and on his departure from Scala, a prelude to his later meeting with Eraqus as a Master.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Devenu vieux, Xehanort a extrait les ténèbres du cœur de son apprenti Ventus pour créer Vanitas, dans l'espoir que leur affrontement forge la χ-blade. Ayant échoué à obtenir un résultat immédiat, il abandonne Ventus à Eraqus et attend. Il assiste à l'examen de Maîtrise, puis disparaît, laissant les Nescients de Vanitas ravager les mondes pour attirer Terra, Aqua et Ventus hors de la Contrée du Départ.\n\nIl flatte Terra, lui promet de l'aider à maîtriser ses ténèbres, et révèle à Eraqus la nature de Ventus pour dresser le maître contre l'élève. Une fois Eraqus terrassé par Terra, Xehanort l'achève et détruit son monde. Au Nécropole des Keyblades, il fige Ventus, brise Aqua, et arrache son propre cœur pour l'implanter dans Terra, choisi comme nouveau corps. Sa victoire est incomplète : la χ-blade se brise, et la Volonté Persistante de Terra abat Terra-Xehanort, qui perd la mémoire en tombant dans les ténèbres avant d'échouer au Jardin Radieux.",
          "Now old, Xehanort has extracted the darkness from the heart of his apprentice Ventus to create Vanitas, hoping that their clash will forge the χ-blade. Having failed to get an immediate result, he leaves Ventus with Eraqus and waits. He attends the Mark of Mastery exam, then vanishes, letting Vanitas's Unversed ravage the worlds to lure Terra, Aqua and Ventus out of the Land of Departure.\n\nHe flatters Terra, promises to help him master his darkness, and reveals Ventus's nature to Eraqus to turn master against student. Once Eraqus is struck down by Terra, Xehanort finishes him and destroys his world. At the Keyblade Graveyard he freezes Ventus, breaks Aqua, and tears out his own heart to implant it in Terra, chosen as his new body. His victory is incomplete: the χ-blade shatters, and Terra's Lingering Will defeats Terra-Xehanort, who loses his memory as he falls into darkness before washing up in Radiant Garden.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Ansem et Xemnas ayant tous deux été détruits, le Maître Xehanort est « recomplété » et revient à l'existence. Il attend, dans le Monde qui n'existe pas, que son moi plus jeune, envoyé à travers le temps, rassemble les versions de lui-même issues de différentes époques pour former une nouvelle Organisation XIII, composée de treize réceptacles de son cœur.\n\nLorsque Sora, attiré dans les Mondes Endormis, tombe dans le sommeil, Xehanort apparaît dans la salle du trône et expose son plan à Riku et Mickey : recréer la χ-blade en opposant ses treize ténèbres à sept lumières, et faire de Sora son dernier réceptacle. L'intervention de Lea et l'arrivée de Donald et Dingo font échouer la tentative. Xehanort se retire en promettant que le rassemblement des treize et des sept aura lieu, et que la guerre suivra.",
          "With both Ansem and Xemnas destroyed, Master Xehanort is “recompleted” and returns to existence. In The World That Never Was he waits for his younger self, sent through time, to gather versions of himself from different eras and form a new Organization XIII, made up of thirteen vessels for his heart.\n\nWhen Sora, lured into the Sleeping Worlds, falls into sleep, Xehanort appears in the throne room and lays out his plan to Riku and Mickey: recreate the χ-blade by pitting his thirteen darknesses against seven lights, and make Sora his final vessel. Lea's intervention and the arrival of Donald and Goofy foil the attempt. Xehanort withdraws, promising that the gathering of the thirteen and the seven will take place, and that war will follow.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Xehanort achève de constituer sa véritable Organisation XIII, en y intégrant Xion, le Réplica de Riku et Vanitas, tandis que les Gardiens de la Lumière réunissent leurs sept cœurs. Au Nécropole des Keyblades, il déclenche d'abord une Marée Démoniaque qui anéantit ses adversaires, avant que Sora ne rétablisse le cours des choses. Ses treize réceptacles tombent un à un, mais il obtient ce qu'il voulait : en brisant Kairi sous les yeux de Sora, il provoque l'affrontement final qui forge la χ-blade.\n\nIl ouvre Kingdom Hearts et se replie à Scala ad Caelum, où Sora, Donald et Dingo l'affrontent en armure puis sans, jusqu'à ce que les Gardiens réunis l'emportent. Vaincu, il refuse de reconnaître son erreur jusqu'à ce que le cœur d'Eraqus surgisse de Terra et le persuade de remettre la χ-blade à Sora. Il s'en va avec son vieil ami, laissant à Sora le soin de refermer Kingdom Hearts. Re Mind montre en outre, dans les combats de données, une version de lui comme boss final d'un épisode consacré aux treize.",
          "Xehanort finishes assembling his real Organization XIII, bringing in Xion, Riku Replica and Vanitas, while the Guardians of Light gather their seven hearts. At the Keyblade Graveyard he first unleashes a Demon Tide that wipes out his opponents, before Sora sets things right. His thirteen vessels fall one by one, but he gets what he wanted: by shattering Kairi before Sora's eyes he provokes the final clash that forges the χ-blade.\n\nHe opens Kingdom Hearts and withdraws to Scala ad Caelum, where Sora, Donald and Goofy fight him in armour and then without, until the united Guardians prevail. Defeated, he refuses to admit his mistake until Eraqus's heart emerges from Terra and persuades him to hand the χ-blade to Sora. He departs with his old friend, leaving Sora to close Kingdom Hearts. Re Mind also features a data version of him as the final boss of an episode devoted to the thirteen.",
        ),
      },
    ],
    trivia: [
      L("Le Maître Xehanort a été doublé en anglais par Leonard Nimoy, puis par Rutger Hauer dans 0.2 et Christopher Lloyd dans Kingdom Hearts III ; Chikao Ōtsuka puis son fils Akio Ōtsuka l'interprètent en japonais.", "Master Xehanort was voiced in English by Leonard Nimoy, then Rutger Hauer in 0.2 and Christopher Lloyd in Kingdom Hearts III; Chikao Ōtsuka and then his son Akio Ōtsuka play him in Japanese."),
      L("Sa Keyblade, Innommée, est celle que le Maître des Maîtres a transmise à Luxu, ce qui explique l'œil qui l'orne.", "His Keyblade, No Name, is the one the Master of Masters passed to Luxu, which explains the eye that adorns it."),
      L("Son nom peut se lire comme « No heart » et « Another », deux anagrammes assumées par Nomura.", "His name can be read as “No heart” and “Another”, two anagrams acknowledged by Nomura."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Master Xehanort", url: "https://kingdomhearts.fandom.com/wiki/Master_Xehanort" },
    ],
  },

  // ─────────────────────────── Ansem, Chercheur des Ténèbres ───────────────────────────
  "ansem-seeker-of-darkness": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Ansem, Chercheur des Ténèbres, est le Sans-cœur de Xehanort, né lorsque l'apprenti d'Ansem le Sage a volontairement plongé son cœur dans les ténèbres au Jardin Radieux. Ayant conservé forme humaine, il a usurpé le nom de son maître, si bien que pendant tout le premier jeu les joueurs l'ont pris pour le véritable Ansem, auteur des rapports sur les Sans-cœur. Longs cheveux argentés, peau brune, manteau noir et gardien spectral surgissant dans son dos : il a fixé l'image de l'antagoniste de la saga.\n\nSa conviction est que les ténèbres sont la vraie nature du cœur et que Kingdom Hearts en est la source. Après sa destruction, il subsiste dans le cœur de Riku, puis revient par le voyage temporel comme l'un des treize Chercheurs des Ténèbres. Sa relation tourmentée avec Riku, qu'il a possédé et hanté, est le fil rouge de son personnage.",
          "Ansem, Seeker of Darkness, is Xehanort's Heartless, born when Ansem the Wise's apprentice deliberately plunged his heart into darkness in Radiant Garden. Having kept a human form, he usurped his master's name, so that throughout the first game players took him for the real Ansem, author of the reports on the Heartless. Long silver hair, dark skin, a black coat and a spectral guardian looming behind him: he set the image of the series' antagonist.\n\nHis conviction is that darkness is the heart's true nature and that Kingdom Hearts is its source. After his destruction he lingers in Riku's heart, then returns through time travel as one of the thirteen Seekers of Darkness. His tormented relationship with Riku, whom he possessed and haunted, is the through-line of his character.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Ansem manipule tout le premier jeu depuis l'ombre : c'est lui qui a lâché les Sans-cœur sur les mondes et qui se sert de Maléfique, puis de Riku, dont il prend le contrôle à la Forteresse Oubliée. Sous les traits de Riku, il tente d'ouvrir la serrure de la Forteresse avec la Keyblade des Cœurs, forgée à partir des cœurs des Princesses de Cœur, et pousse Sora à se sacrifier pour libérer le cœur de Kairi.\n\nSora le retrouve au Bout du Monde, où Ansem expose sa thèse : tout cœur retourne aux ténèbres, et Kingdom Hearts est la plus grande des ténèbres. Après plusieurs affrontements, dont un à bord du Monde du Chaos, il ouvre la porte de Kingdom Hearts pour s'en abreuver, mais n'y trouve que de la lumière, qui le détruit. Ses « rapports », dispersés dans les mondes, se révèlent avoir été écrits par Xehanort, l'apprenti, ce qui prépare la révélation de Kingdom Hearts II.",
          "Ansem manipulates the whole first game from the shadows: he is the one who unleashed the Heartless on the worlds and who uses Maleficent, then Riku, whom he takes control of in Hollow Bastion. In Riku's form he tries to open the Bastion's keyhole with the Keyblade of People's Hearts, forged from the hearts of the Princesses of Heart, and drives Sora to sacrifice himself to free Kairi's heart.\n\nSora finds him at the End of the World, where Ansem sets out his thesis: every heart returns to darkness, and Kingdom Hearts is the greatest darkness of all. After several battles, including one aboard the World of Chaos, he opens the door to Kingdom Hearts to drink from it, but finds only light there, which destroys him. His “reports”, scattered across the worlds, turn out to have been written by Xehanort the apprentice, setting up the reveal of Kingdom Hearts II.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Détruit en apparence, Ansem survit dans le cœur de Riku, où il avait laissé une part de ses ténèbres. Tout au long du scénario « Reverse/Rebirth », il tente de reprendre le contrôle : il apparaît à Riku dans les sous-sols du Manoir Oblivion, l'incite à user de ses ténèbres, et profite de chaque affrontement pour resserrer son emprise. C'est Mickey, puis DiZ, qui aident Riku à lui résister.\n\nAu terme de sa remontée, Riku affronte Ansem dans les profondeurs de son propre cœur et le vainc, sans parvenir à l'en chasser complètement. Ansem lui promet qu'il ne disparaîtra jamais tant que Riku aura des ténèbres. Le manteau de l'Organisation, remis par DiZ, et la carte Oblivion forgée par Naminé permettent à Riku de le tenir en respect, jusqu'à ce qu'il choisisse, dans 358/2 Days, de libérer volontairement ce pouvoir.",
          "Seemingly destroyed, Ansem survives within Riku's heart, where he had left a portion of his darkness. Throughout the “Reverse/Rebirth” scenario he tries to regain control: he appears to Riku in the basements of Castle Oblivion, urges him to use his darkness, and takes advantage of every fight to tighten his grip. Mickey, then DiZ, help Riku resist him.\n\nAt the end of his climb, Riku faces Ansem in the depths of his own heart and defeats him without managing to drive him out entirely. Ansem promises he will never disappear as long as Riku holds darkness. The Organization coat given by DiZ and the card forged by Naminé allow Riku to keep him at bay, until he chooses, in 358/2 Days, to unleash that power deliberately.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Ansem n'agit pas directement dans Kingdom Hearts II, mais son ombre plane sur tout le jeu. Riku, qui a libéré ses ténèbres pour vaincre Roxas, porte désormais son apparence et sa voix, et c'est sous ces traits qu'il aide Sora depuis les coulisses puis délivre Kairi, jusqu'à ce que l'explosion de la machine d'Ansem le Sage lui rende son visage.\n\nLe jeu révèle par ailleurs la confusion des noms : Mickey apprend à Sora que le vaincu du premier jeu était le Sans-cœur de Xehanort, et Ansem le Sage, qui vit sous le nom de DiZ, est rongé de voir son identité volée par son ancien apprenti. La quête de vengeance du vrai Ansem contre Xemnas, Simili du même homme, est la conséquence directe de cette usurpation.",
          "Ansem does not act directly in Kingdom Hearts II, but his shadow hangs over the whole game. Riku, who unleashed his darkness to defeat Roxas, now bears his appearance and voice, and it is in that form that he helps Sora from behind the scenes and then frees Kairi, until the explosion of Ansem the Wise's machine gives him back his face.\n\nThe game also clears up the confusion of names: Mickey tells Sora that the foe defeated in the first game was Xehanort's Heartless, and Ansem the Wise, living as DiZ, is consumed by seeing his identity stolen by his former apprentice. The real Ansem's quest for revenge against Xemnas, Nobody of the same man, is the direct consequence of that usurpation.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Ansem revient en personne dans Dream Drop Distance, ramené par le Jeune Xehanort depuis le passé pour siéger parmi les treize Chercheurs des Ténèbres. On apprend qu'il est celui qui, en voyageant dans le temps, a rendu visite au jeune Xehanort sur les Îles du Destin pour lui donner le pouvoir de traverser les époques : la boucle temporelle de la saga passe par lui.\n\nDans les Mondes Endormis, il apparaît à Riku pour le narguer, puis l'affronte au Monde qui n'existe pas, accompagné de son Gardien. Riku le vainc et lui oppose une confiance nouvelle en lui-même. Ansem prend ensuite place aux côtés de Xemnas et du Jeune Xehanort autour du Maître Xehanort ressuscité, avant de se retirer avec eux lorsque la tentative de faire de Sora un réceptacle échoue.",
          "Ansem returns in person in Dream Drop Distance, brought back from the past by Young Xehanort to sit among the thirteen Seekers of Darkness. It is revealed that he is the one who, by travelling through time, visited the young Xehanort on Destiny Islands to give him the power to cross eras: the series' time loop runs through him.\n\nIn the Sleeping Worlds he appears to Riku to taunt him, then fights him in The World That Never Was with his Guardian at his side. Riku defeats him and meets him with a newfound confidence in himself. Ansem then takes his place beside Xemnas and Young Xehanort around the revived Master Xehanort, before withdrawing with them when the attempt to make Sora a vessel fails.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Ansem se montre au Jardin Radieux en compagnie d'Ansem le Sage, qu'il a ramené du Domaine des Ténèbres, et le confie à son ancien entourage sans autre explication, geste ambigu qui intrigue même Ienzo. Il croise ensuite la route de Sora, Donald et Dingo au fil de leur voyage, distillant comme les autres Chercheurs des indices sur le plan de Xehanort.\n\nAu Nécropole des Keyblades, il affronte Riku et Mickey, secondés par Sora, et retrouve dans le Gardien qui l'accompagne le cœur de Terra, qu'il retenait prisonnier depuis des années. Vaincu, il reconnaît que la lumière lui a offert une fin plus douce que prévu et s'efface. Re Mind lui offre, avec Xemnas et le Jeune Xehanort, un combat commun contre Sora, Riku et Mickey, ainsi qu'une version de données pour l'épisode Limitcut.",
          "Ansem shows up in Radiant Garden with Ansem the Wise, whom he brought back from the Realm of Darkness, and hands him over to his former circle without further explanation, an ambiguous gesture that puzzles even Ienzo. He then crosses paths with Sora, Donald and Goofy during their journey, dropping, like the other Seekers, hints about Xehanort's plan.\n\nAt the Keyblade Graveyard he faces Riku and Mickey, backed by Sora, and in the Guardian at his side lies Terra's heart, which he had held captive for years. Defeated, he admits the light has given him a gentler end than expected and fades away. Re Mind gives him, with Xemnas and Young Xehanort, a joint battle against Sora, Riku and Mickey, as well as a data version for the Limitcut episode.",
        ),
      },
    ],
    trivia: [
      L("Ansem est doublé par Billy Zane dans le premier jeu, puis par Richard Epcar ; Akio Ōtsuka lui prête sa voix en japonais.", "Ansem is voiced by Billy Zane in the first game, then by Richard Epcar; Akio Ōtsuka voices him in Japanese."),
      L("Le Gardien qui l'accompagne est un Sans-cœur à part entière, dans lequel Xehanort a enfermé le cœur de Terra.", "The Guardian that accompanies him is a Heartless in its own right, in which Xehanort imprisoned Terra's heart."),
      L("Il est souvent surnommé « Ansem SoD » par la communauté, pour le distinguer d'Ansem le Sage.", "He is often nicknamed “Ansem SoD” by the community, to tell him apart from Ansem the Wise."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Ansem, Seeker of Darkness", url: "https://kingdomhearts.fandom.com/wiki/Ansem,_Seeker_of_Darkness" },
    ],
  },

  // ─────────────────────────── Xemnas ───────────────────────────
  "xemnas": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Xemnas est le numéro I et le fondateur de l'Organisation XIII, le « Supérieur de l'Inexistant ». Il est le Simili de Xehanort, l'apprenti d'Ansem le Sage, né en même temps qu'Ansem, Chercheur des Ténèbres, lorsque celui-ci a livré son cœur aux ténèbres. Son nom est l'anagramme d'« Ansem » avec un X, puisque l'apprenti avait usurpé ce nom ; il porte les traits de Terra vieillis de dix ans, avec les cheveux argentés et les yeux ambrés de Xehanort.\n\nArmé de deux lames d'énergie rouge, il commande aux Similis et à leurs légions de Reflets. Son but affiché, obtenir un cœur pour lui et ses membres grâce à un Kingdom Hearts artificiel, dissimule le plan de Xehanort : faire de l'Organisation treize réceptacles vides prêts à recevoir son cœur. Introduit comme boss secret dans Kingdom Hearts Final Mix, il est l'antagoniste principal de Kingdom Hearts II et l'un des piliers de la nouvelle Organisation dans Kingdom Hearts III.",
          "Xemnas is number I and the founder of Organization XIII, the “Superior of the In-Between”. He is the Nobody of Xehanort, Ansem the Wise's apprentice, born at the same time as Ansem, Seeker of Darkness, when the latter gave his heart to darkness. His name is an anagram of “Ansem” with an X, since the apprentice had usurped that name; he has Terra's features aged ten years, with Xehanort's silver hair and amber eyes.\n\nArmed with two red energy blades, he commands the Nobodies and their legions of Dusks. His stated goal, obtaining a heart for himself and his members through an artificial Kingdom Hearts, hides Xehanort's plan: turning the Organization into thirteen empty vessels ready to receive his heart. Introduced as a secret boss in Kingdom Hearts Final Mix, he is the main antagonist of Kingdom Hearts II and one of the pillars of the new Organization in Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Xemnas fait sa première apparition dans Kingdom Hearts Final Mix, sous le nom d'« Inconnu », comme boss secret. Une fois la Forteresse Oubliée pacifiée, un homme en manteau noir attend Sora dans la chapelle du château. Il manie des lames d'énergie et des techniques inédites, et paraît reconnaître en Sora quelqu'un d'autre, murmurant qu'il n'est pas celui qu'il a choisi.\n\nCe combat, sans explication à l'époque, annonçait l'Organisation XIII de Chain of Memories et de Kingdom Hearts II. Rétrospectivement, la remarque de Xemnas s'explique par la présence du cœur de Ventus en Sora, que Xemnas, héritier des souvenirs de Terra, cherche depuis le début. Le boss revient dans Kingdom Hearts II Final Mix et dans les compilations HD, avec ses répliques traduites.",
          "Xemnas first appears in Kingdom Hearts Final Mix, under the name “Unknown”, as a secret boss. Once Hollow Bastion is at peace, a man in a black coat waits for Sora in the castle chapel. He wields energy blades and never-before-seen techniques, and seems to recognise someone else in Sora, murmuring that he is not the one he chose.\n\nThat fight, unexplained at the time, foreshadowed the Organization XIII of Chain of Memories and Kingdom Hearts II. In hindsight, Xemnas's remark is explained by the presence of Ventus's heart within Sora, whom Xemnas, heir to Terra's memories, has been seeking from the start. The boss returns in Kingdom Hearts II Final Mix and in the HD collections, with his lines translated.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Xemnas préside l'Organisation depuis son trône au Monde qui n'existe pas. C'est lui qui recueille Roxas à la Cité du Crépuscule, lui donne son nom et l'introduit comme treizième membre, puis présente Xion, quatorzième recrue dont il tait la nature de réplique. Il confie à Saïx la gestion quotidienne, tout en fixant le cap : rassembler les cœurs libérés par la Keyblade pour achever Kingdom Hearts.\n\nDerrière cette façade, il mène le programme de répliques et se rend régulièrement dans la Chambre du Repos, où il converse avec l'armure d'Aqua, qu'il appelle son amie. Lorsque Xion vacille, il la reprogramme pour absorber Roxas et devenir une Clé du Destin parfaite, sans se soucier de la disparition de l'un ou de l'autre. La désertion de Roxas et la perte de Xion l'obligent à changer de plan, ce qui mène directement aux événements de Kingdom Hearts II.",
          "Xemnas presides over the Organization from his throne in The World That Never Was. He is the one who takes in Roxas in Twilight Town, gives him his name and introduces him as the thirteenth member, then presents Xion, the fourteenth recruit whose replica nature he keeps quiet. He leaves the day-to-day running to Saïx while setting the course: gather the hearts released by the Keyblade to complete Kingdom Hearts.\n\nBehind that front he runs the replica programme and regularly visits the Chamber of Repose, where he talks to Aqua's armour, which he calls his friend. When Xion falters, he reprograms her to absorb Roxas and become a perfect Key of Destiny, unconcerned about the disappearance of either. Roxas's desertion and Xion's loss force him to change plans, leading directly to the events of Kingdom Hearts II.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Xemnas se révèle à Sora à la Forteresse Oubliée, dans l'ancien laboratoire d'Ansem le Sage, où il évoque un « ami » que Sora ignore. Ses membres poussent Sora à détruire des Sans-cœur par milliers, et la bataille des Mille Sans-cœur nourrit son Kingdom Hearts artificiel au-dessus du Monde qui n'existe pas. Il enlève Kairi par l'intermédiaire de Saïx pour attirer Sora.\n\nQuand Ansem le Sage tente de convertir Kingdom Hearts en données, la machine explose et Xemnas absorbe une partie de la lune de cœurs, prenant les habits d'un souverain. Sora et ses amis le poursuivent jusqu'à sa forteresse volante, puis Sora et Riku l'affrontent seuls dans un dernier duel, en dehors des mondes, où Xemnas manie ses lames sur une armure gigantesque. Vaincu, il s'efface en se demandant s'il aurait fini par ressentir quelque chose.",
          "Xemnas reveals himself to Sora in Hollow Bastion, in Ansem the Wise's old laboratory, where he speaks of a “friend” Sora knows nothing about. His members drive Sora to destroy Heartless by the thousands, and the Battle of 1000 Heartless feeds his artificial Kingdom Hearts above The World That Never Was. He has Kairi kidnapped through Saïx to lure Sora.\n\nWhen Ansem the Wise tries to convert Kingdom Hearts into data, the machine explodes and Xemnas absorbs part of the moon of hearts, taking on the garb of a sovereign. Sora and his friends pursue him to his flying fortress, then Sora and Riku face him alone in a final duel outside the worlds, where Xemnas wields his blades on a gigantic armour. Defeated, he fades away wondering whether he would eventually have felt something.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Ramené du passé par le Jeune Xehanort, Xemnas rejoint la nouvelle Organisation XIII, composée des réceptacles de Xehanort. Il apparaît à Sora dans la Grille, où il s'intéresse aux programmes capables de ressentir, puis au Monde qui n'existe pas, où il lui expose une théorie troublante : les cœurs de Sora et de ceux qui lui sont liés ne seraient que des données et des souvenirs, sans réalité propre.\n\nCe discours vise à ébranler Sora avant que le Jeune Xehanort ne plonge son cœur dans le sommeil. Xemnas se tient ensuite parmi les treize sièges autour du Maître Xehanort et disparaît avec les autres lorsque Riku, Mickey et Lea arrachent Sora à leur emprise. Sa présence confirme que l'Organisation d'origine n'était qu'une étape du plan de Xehanort.",
          "Brought back from the past by Young Xehanort, Xemnas joins the new Organization XIII, made up of Xehanort's vessels. He appears to Sora in The Grid, where he takes an interest in programs able to feel, then in The World That Never Was, where he lays out a troubling theory: the hearts of Sora and of those connected to him might be nothing but data and memories, with no reality of their own.\n\nThat speech is meant to shake Sora before Young Xehanort casts his heart into sleep. Xemnas then stands among the thirteen seats around Master Xehanort and vanishes with the others when Riku, Mickey and Lea wrest Sora from their grasp. His presence confirms that the original Organization was only one stage of Xehanort's plan.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Xemnas apparaît dès l'ouverture de Kingdom Hearts III au Jardin Radieux, aux côtés d'Ansem, et prend part à la première bataille du Nécropole des Keyblades, où les Gardiens de la Lumière sont anéantis par la Marée Démoniaque avant que le Pouvoir de l'éveil ne change le cours des choses. Lors de la seconde bataille, il enlève Kairi et la livre au Maître Xehanort, qui la brise pour forger la χ-blade.\n\nIl affronte ensuite Sora, épaulé par Roxas et Xion, revenus à eux, et par Lea. Vaincu, Xemnas confesse ressentir enfin la peur et le regret, et s'interroge sur ce que cela dit d'un cœur qu'il prétendait ne pas avoir. Re Mind lui donne, avec Ansem et le Jeune Xehanort, un combat commun contre Sora, Riku et Mickey, et une version de données dans l'épisode Limitcut.",
          "Xemnas appears from the opening of Kingdom Hearts III in Radiant Garden, alongside Ansem, and takes part in the first battle of the Keyblade Graveyard, where the Guardians of Light are wiped out by the Demon Tide before the power of waking changes the course of events. In the second battle he abducts Kairi and delivers her to Master Xehanort, who breaks her to forge the χ-blade.\n\nHe then faces Sora, backed by Roxas and Xion, both restored, and by Lea. Defeated, Xemnas confesses that he finally feels fear and regret, and wonders what that says about a heart he claimed not to have. Re Mind gives him, with Ansem and Young Xehanort, a joint battle against Sora, Riku and Mickey, and a data version in the Limitcut episode.",
        ),
      },
    ],
    trivia: [
      L("Xemnas est doublé par Paul St. Peter en anglais et par Norio Wakamoto en japonais.", "Xemnas is voiced by Paul St. Peter in English and Norio Wakamoto in Japanese."),
      L("Dans Kingdom Hearts Final Mix, ses répliques n'étaient pas traduites du japonais, ce qui a nourri des années de spéculations.", "In Kingdom Hearts Final Mix his lines were left untranslated from Japanese, which fuelled years of speculation."),
      L("Son nom est l'anagramme d'« Ansem » avec un X, et non de Xehanort, puisqu'il est né de l'apprenti qui avait usurpé ce nom.", "His name is an anagram of “Ansem” with an X, not of Xehanort, since he was born from the apprentice who had usurped that name."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Xemnas", url: "https://kingdomhearts.fandom.com/wiki/Xemnas" },
    ],
  },

  // ─────────────────────────── Jeune Xehanort ───────────────────────────
  "young-xehanort": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Jeune Xehanort est le Maître Xehanort à l'âge de l'adolescence, arraché à son époque et envoyé à travers le temps. Silhouette élancée, cheveux argentés mi-longs et manteau noir, il apparaît pour la première fois dans la scène secrète de Birth by Sleep, où un jeune garçon contemple l'océan depuis les Îles du Destin, avant de devenir un adversaire à part entière dans Dream Drop Distance.\n\nSa raison d'être tient aux règles du voyage temporel fixées par la saga : on ne peut se déplacer que vers une époque où existe une autre version de soi, il faut se défaire de son corps pour le faire, et l'on perd ses souvenirs en rentrant. C'est Ansem, Chercheur des Ténèbres, qui lui a donné ce pouvoir en lui rendant visite sur son île natale, et c'est lui qui, en retour, rassemble les Xehanort de toutes les époques. Il incarne l'obstination froide de son aîné, sans en avoir encore ni la sagesse ni l'usure.",
          "Young Xehanort is Master Xehanort as a teenager, plucked from his own era and sent through time. Slender, with mid-length silver hair and a black coat, he first appears in the secret scene of Birth by Sleep, where a young boy gazes at the ocean from Destiny Islands, before becoming a fully fledged opponent in Dream Drop Distance.\n\nHis purpose stems from the rules of time travel laid down by the series: one can only travel to an era in which another version of oneself exists, one must shed one's body to do so, and one loses one's memories upon returning. It was Ansem, Seeker of Darkness, who gave him that power by visiting him on his home island, and he in turn gathers the Xehanorts of every era. He embodies his elder self's cold obstinacy, without yet having either his wisdom or his weariness.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Le Jeune Xehanort apparaît dans chacun des Mondes Endormis traversés par Sora et Riku, toujours pour semer le doute ou détourner leur route : il discute avec Riku de la nature des rêves, oriente Sora vers le Monde qui n'existe pas et se moque de ses certitudes. En coulisses, il a réuni Ansem, Xemnas et d'autres incarnations de Xehanort pour former la nouvelle Organisation XIII.\n\nAu Monde qui n'existe pas, il révèle à Sora le piège : les Mondes Endormis étaient une voie d'accès à son cœur, désormais plongé dans le sommeil pour en faire le treizième réceptacle. Sora l'affronte dans une salle où le temps se remonte, mais succombe. Le Jeune Xehanort explique ensuite à Riku les règles du voyage temporel et brise le sort Stopza de Mickey avant de laisser la parole au Maître Xehanort ressuscité. Le plan déjoué, il disparaît avec les autres.",
          "Young Xehanort appears in every Sleeping World Sora and Riku cross, always to sow doubt or steer them off course: he discusses the nature of dreams with Riku, points Sora towards The World That Never Was and mocks his certainties. Behind the scenes, he has gathered Ansem, Xemnas and other incarnations of Xehanort to form the new Organization XIII.\n\nIn The World That Never Was he reveals the trap to Sora: the Sleeping Worlds were a way into his heart, now cast into sleep to make him the thirteenth vessel. Sora fights him in a room where time rewinds, but succumbs. Young Xehanort then explains the rules of time travel to Riku and breaks Mickey's Stopza spell before yielding the floor to the revived Master Xehanort. With the plan foiled, he vanishes with the others.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Membre à part entière de la véritable Organisation XIII, le Jeune Xehanort se montre à Sora dans la Boîte à Jouets, où il mène une expérience sur les cœurs des jouets et sur leur lien avec leurs propriétaires, en compagnie d'un Sans-cœur venu du jeu Verum Rex. Il réapparaît ensuite à plusieurs reprises pour commenter, avec détachement, les progrès de Sora vers le Pouvoir de l'éveil.\n\nAu Nécropole des Keyblades, il affronte Sora, Riku et Mickey aux côtés d'Ansem et de Xemnas. Vaincu, il prévient Sora que l'usage répété du Pouvoir de l'éveil pour voyager entre les cœurs lui coûtera cher, avertissement qui se réalise à la fin du jeu. Conformément aux règles du voyage temporel, il retourne à son époque sans souvenir de ce qu'il a vécu. Re Mind ajoute un combat de données contre lui dans l'épisode Limitcut.",
          "A full member of the real Organization XIII, Young Xehanort shows himself to Sora in the Toy Box, where he runs an experiment on the hearts of toys and their bond with their owners, in the company of a Heartless drawn from the game Verum Rex. He then reappears several times to comment, with detachment, on Sora's progress towards the power of waking.\n\nAt the Keyblade Graveyard he fights Sora, Riku and Mickey alongside Ansem and Xemnas. Defeated, he warns Sora that repeatedly using the power of waking to travel between hearts will cost him dearly, a warning that comes true at the end of the game. In keeping with the rules of time travel, he returns to his era with no memory of what he went through. Re Mind adds a data battle against him in the Limitcut episode.",
        ),
      },
    ],
    trivia: [
      L("Le Jeune Xehanort est doublé par Ben Diskin en anglais et par Takanori Hoshino en japonais.", "Young Xehanort is voiced by Ben Diskin in English and Takanori Hoshino in Japanese."),
      L("Son combat dans Dream Drop Distance se déroule dans une pièce dont l'horloge remonte le temps quand il se soigne.", "His battle in Dream Drop Distance takes place in a room whose clock rewinds time when he heals himself."),
      L("Dark Road raconte sa jeunesse réelle à Scala ad Caelum, avant qu'Ansem ne lui offre le voyage dans le temps.", "Dark Road tells his actual youth in Scala ad Caelum, before Ansem grants him time travel."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Young Xehanort", url: "https://kingdomhearts.fandom.com/wiki/Young_Xehanort" },
    ],
  },

  // ─────────────────────────── Ansem le Sage ───────────────────────────
  "ansem-the-wise": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Ansem le Sage est le souverain et savant du Jardin Radieux, un homme d'âge mûr à la barbe blonde, au manteau rouge et à l'écharpe blanche. Chercheur passionné par le cœur humain, il a entrepris d'étudier les ténèbres qui y sommeillent avec ses six apprentis : Xehanort, Braig, Dilan, Even, Aeleus et Ienzo. Effrayé par les résultats, il a interrompu ces recherches, mais ses apprentis les ont poursuivies en secret, jusqu'à créer les premiers Sans-cœur artificiels et à le bannir dans le néant.\n\nSon nom, volé par Xehanort, a servi de couverture au Chercheur des Ténèbres pendant tout le premier jeu ; c'est pourquoi il réapparaît sous l'identité de DiZ, « Darkness in Zero », le visage bandé de rouge, rongé par la vengeance. Sa trajectoire, de savant orgueilleux à homme qui reconnaît ses fautes, fait de lui l'un des personnages les plus nuancés de la saga.",
          "Ansem the Wise is the ruler and scholar of Radiant Garden, a middle-aged man with a blond beard, a red coat and a white scarf. A researcher fascinated by the human heart, he set out to study the darkness sleeping within it with his six apprentices: Xehanort, Braig, Dilan, Even, Aeleus and Ienzo. Frightened by the results, he halted that research, but his apprentices pursued it in secret, going as far as creating the first artificial Heartless and banishing him into nothingness.\n\nHis name, stolen by Xehanort, served as a cover for the Seeker of Darkness throughout the first game; that is why he resurfaces under the identity of DiZ, “Darkness in Zero”, his face wrapped in red bandages and consumed by revenge. His path, from proud scholar to a man who admits his faults, makes him one of the most nuanced characters in the series.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Dans Birth by Sleep, Ansem le Sage règne sur un Jardin Radieux prospère, entouré de ses apprentis, dont le jeune Ienzo qu'il a recueilli. Terra, Ventus et Aqua traversent sa ville sans le rencontrer directement, mais son laboratoire et son entourage sont déjà en place : Braig y complote avec le Maître Xehanort, Even et Dilan y travaillent.\n\nÀ la toute fin du jeu, Terra-Xehanort, amnésique, est retrouvé dans les rues de la ville par Ansem et Braig : le savant recueille l'inconnu, qui ne se souvient que de son nom, Xehanort, et en fait son apprenti. Le sort du Jardin Radieux est scellé : les recherches sur le cœur de cet apprenti brillant mèneront aux Sans-cœur, à la chute du monde et à la naissance d'Ansem, Chercheur des Ténèbres, et de Xemnas.",
          "In Birth by Sleep, Ansem the Wise rules over a thriving Radiant Garden, surrounded by his apprentices, including the young Ienzo whom he took in. Terra, Ventus and Aqua pass through his city without meeting him directly, but his laboratory and his circle are already in place: Braig plots there with Master Xehanort, Even and Dilan work there.\n\nAt the very end of the game, an amnesiac Terra-Xehanort is found in the city streets by Ansem and Braig: the scholar takes in the stranger, who remembers only his name, Xehanort, and makes him his apprentice. Radiant Garden's fate is sealed: the research on the heart carried out by this brilliant apprentice will lead to the Heartless, to the fall of the world and to the birth of Ansem, Seeker of Darkness, and Xemnas.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Sous le nom de DiZ, Ansem le Sage dirige depuis le manoir de la Cité du Crépuscule l'effort pour réveiller Sora. Il a recruté Riku, à qui il fournit le manteau de l'Organisation, et retient Naminé, qu'il traite comme un instrument sans valeur propre. Sa priorité est de nuire à l'Organisation XIII et à Xemnas, l'apprenti qui l'a trahi.\n\nQuand la restauration des souvenirs de Sora piétine à cause de Xion, DiZ ordonne sans hésiter d'éliminer la réplique et de capturer Roxas, dont il refuse de reconnaître l'humanité. Une fois Roxas capturé par Riku, il le place dans une Cité du Crépuscule virtuelle qu'il a construite avec Naminé, dernière étape avant Kingdom Hearts II. Riku, de son côté, commence à douter de la dureté de son allié.",
          "Under the name DiZ, Ansem the Wise directs the effort to wake Sora from the Twilight Town mansion. He has recruited Riku, whom he supplies with the Organization coat, and holds Naminé, whom he treats as a tool with no worth of her own. His priority is to harm Organization XIII and Xemnas, the apprentice who betrayed him.\n\nWhen the restoration of Sora's memories stalls because of Xion, DiZ orders without hesitation that the replica be eliminated and Roxas captured, refusing to acknowledge the latter's humanity. Once Roxas is captured by Riku, he places him in a virtual Twilight Town that he built with Naminé, the last step before Kingdom Hearts II. Riku, for his part, begins to doubt his ally's harshness.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "DiZ surveille Roxas dans la Cité du Crépuscule virtuelle et s'assure qu'il rejoigne Sora, quitte à balayer les objections de Naminé et d'Axel. Une fois Sora réveillé, il se rend au Monde qui n'existe pas avec une machine conçue pour convertir en données le Kingdom Hearts de Xemnas. Là, il révèle enfin son identité à Mickey et aux héros : il est Ansem le Sage.\n\nLa machine s'emballe et, avant qu'elle n'explose, Ansem reconnaît que sa soif de vengeance l'a rendu aussi mauvais que ses apprentis, présente ses excuses à Roxas et à Naminé, et disparaît dans la déflagration, qui rend à Riku son apparence. La scène secrète de Birth by Sleep le montre ensuite sur la plage du Domaine des Ténèbres, où il retrouve Aqua et lui parle de Sora, ce que 0.2 confirme.",
          "DiZ watches over Roxas in the virtual Twilight Town and makes sure he rejoins Sora, brushing aside the objections of Naminé and Axel. Once Sora is awake, he travels to The World That Never Was with a machine designed to convert Xemnas's Kingdom Hearts into data. There he finally reveals his identity to Mickey and the heroes: he is Ansem the Wise.\n\nThe machine goes out of control and, before it explodes, Ansem admits that his thirst for revenge has made him as bad as his apprentices, apologises to Roxas and Naminé, and vanishes in the blast, which gives Riku back his appearance. The secret scene of Birth by Sleep then shows him on the shore of the Realm of Darkness, where he meets Aqua and tells her about Sora, which 0.2 confirms.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Ansem le Sage a passé des années dans le Domaine des Ténèbres, où il a partagé un temps l'errance d'Aqua. C'est Ansem, Chercheur des Ténèbres, qui le ramène au Jardin Radieux et le remet, sans explication, aux mains d'Ienzo et de ses anciens apprentis. Réconcilié avec eux, il reprend ses recherches, cette fois pour réparer : avec Even, revenu à lui, et Ienzo, il travaille au réceptacle destiné à rendre à Roxas une existence propre.\n\nAprès la bataille finale, il supervise également le transfert de Naminé dans le corps abandonné par le Réplica de Riku, et confie à Sora l'importance de ne pas abuser du Pouvoir de l'éveil. Melody of Memory le montre enfin prêtant son laboratoire à Kairi, qu'il plonge dans le sommeil pour qu'elle explore ses souvenirs à la recherche de Sora.",
          "Ansem the Wise spent years in the Realm of Darkness, where for a time he shared Aqua's wandering. It is Ansem, Seeker of Darkness, who brings him back to Radiant Garden and hands him over, without explanation, to Ienzo and his former apprentices. Reconciled with them, he resumes his research, this time to make amends: with Even, restored to himself, and Ienzo, he works on the vessel meant to give Roxas an existence of his own.\n\nAfter the final battle he also oversees Naminé's transfer into the body left behind by Riku Replica, and impresses on Sora the importance of not abusing the power of waking. Melody of Memory finally shows him lending his laboratory to Kairi, whom he puts to sleep so that she can explore her memories in search of Sora.",
        ),
      },
    ],
    trivia: [
      L("Ansem le Sage est doublé par Christopher Lee dans Kingdom Hearts II, puis par Corey Burton ; Genzō Wakayama lui prête sa voix en japonais dans Kingdom Hearts II.", "Ansem the Wise is voiced by Christopher Lee in Kingdom Hearts II, then by Corey Burton; Genzō Wakayama voices him in Japanese in Kingdom Hearts II."),
      L("DiZ signifie « Darkness in Zero », un nom qu'il s'est choisi pour se définir par ce qu'il n'est plus.", "DiZ stands for “Darkness in Zero”, a name he chose to define himself by what he no longer is."),
      L("Les rapports d'Ansem du premier jeu mélangent ses propres écrits et ceux de Xehanort, ce que Kingdom Hearts II éclaircit.", "The Ansem Reports of the first game mix his own writings with Xehanort's, which Kingdom Hearts II clarifies."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Ansem the Wise", url: "https://kingdomhearts.fandom.com/wiki/Ansem_the_Wise" },
    ],
  },

  // ─────────────────────────── Vanitas ───────────────────────────
  "vanitas": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Vanitas est la part de ténèbres arrachée au cœur de Ventus par le Maître Xehanort, devenue un être à part entière. Masqué, vêtu d'une combinaison rouge et noire, il ne montre son visage qu'à la fin de Birth by Sleep : c'est celui de Sora, parce qu'au moment de sa création le cœur de Ventus venait de se lier à celui du nouveau-né des Îles du Destin. Son nom vient du latin « vanitas », le vide, et fait écho à Ventus ainsi qu'à Sora.\n\nToute émotion négative qu'il ressent engendre des Nescients, les ennemis de Birth by Sleep, ce qui fait de lui une source de monstres inépuisable. Xehanort l'a conçu pour un seul but : affronter Ventus et fusionner avec lui afin de forger la χ-blade. Sa Keyblade, Void Gear, et ses attaques miroitent celles de Ventus, comme un négatif. Dans Kingdom Hearts III, il revient comme l'un des treize Chercheurs des Ténèbres, toujours aussi seul et amer.",
          "Vanitas is the portion of darkness torn from Ventus's heart by Master Xehanort, turned into a being of his own. Masked and dressed in a red and black suit, he shows his face only at the end of Birth by Sleep: it is Sora's, because at the moment of his creation Ventus's heart had just connected with that of the newborn on Destiny Islands. His name comes from the Latin “vanitas”, emptiness, and echoes Ventus as well as Sora.\n\nEvery negative emotion he feels spawns Unversed, the enemies of Birth by Sleep, which makes him an inexhaustible source of monsters. Xehanort designed him for a single purpose: to fight Ventus and merge with him to forge the χ-blade. His Keyblade, Void Gear, and his attacks mirror Ventus's like a negative. In Kingdom Hearts III he returns as one of the thirteen Seekers of Darkness, as lonely and bitter as ever.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Vanitas apparaît dès le début à la Contrée du Départ pour provoquer Ventus, et ses Nescients envahissent les mondes que Terra, Ventus et Aqua parcourent. Il croise chacun d'eux : il défie Ventus à plusieurs reprises, se moque de Terra, tente d'éliminer Aqua, et affronte Mickey. Il révèle finalement à Ventus qu'ils sont les deux moitiés d'un même cœur et qu'en s'unissant ils forgeront la χ-blade, ce que Xehanort a voulu depuis le premier jour.\n\nAu Nécropole des Keyblades, il assomme Mickey, puis force la fusion avec Ventus : la χ-blade se forme et Vanitas, le visage découvert, affronte Aqua et Mickey en la maniant. À l'intérieur de leur cœur commun, Ventus refuse cette union et le vainc ; la χ-blade se brise et Vanitas est détruit, tandis que les Nescients disparaissent de tous les mondes.",
          "Vanitas appears from the start in the Land of Departure to provoke Ventus, and his Unversed invade the worlds Terra, Ventus and Aqua travel through. He crosses each of them: he challenges Ventus repeatedly, mocks Terra, tries to eliminate Aqua, and fights Mickey. He finally reveals to Ventus that they are two halves of one heart and that, by uniting, they will forge the χ-blade, which Xehanort has wanted from the very first day.\n\nAt the Keyblade Graveyard he knocks out Mickey, then forces the merge with Ventus: the χ-blade takes shape and Vanitas, unmasked, wields it against Aqua and Mickey. Inside their shared heart, Ventus refuses that union and defeats him; the χ-blade shatters and Vanitas is destroyed, while the Unversed vanish from every world.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Recréé par le Maître Xehanort à partir des ténèbres persistantes, Vanitas intègre la véritable Organisation XIII. Il se manifeste à Monstropolis, où il collecte l'énergie négative des cris pour renforcer ses Nescients, et ressent la présence du cœur de Ventus en Sora, qu'il tente de récupérer. Il attend ensuite Sora et Aqua dans la Contrée du Départ, devant le corps endormi de Ventus, sans parvenir à empêcher son réveil.\n\nAu Nécropole des Keyblades, il affronte Sora, Ventus et Aqua. Battu, il refuse la main tendue par Ventus : il affirme n'être que ténèbres, et n'avoir jamais voulu autre chose que sa propre existence, avant de s'effacer. Re Mind ajoute un combat de données contre lui dans l'épisode Limitcut, l'un des plus redoutés du jeu.",
          "Recreated by Master Xehanort from lingering darkness, Vanitas joins the real Organization XIII. He surfaces in Monstropolis, where he harvests the negative energy of screams to strengthen his Unversed, and senses the presence of Ventus's heart within Sora, which he tries to claim. He then waits for Sora and Aqua in the Land of Departure, before Ventus's sleeping body, without managing to prevent his awakening.\n\nAt the Keyblade Graveyard he fights Sora, Ventus and Aqua. Beaten, he refuses the hand Ventus holds out: he insists he is nothing but darkness and never wanted anything but his own existence, before fading away. Re Mind adds a data battle against him in the Limitcut episode, one of the most feared in the game.",
        ),
      },
    ],
    trivia: [
      L("Vanitas est doublé par Haley Joel Osment en anglais, la voix de Sora, et par Miyu Irino en japonais.", "Vanitas is voiced by Haley Joel Osment in English, Sora's voice, and by Miyu Irino in Japanese."),
      L("Les Nescients naissent de ses émotions négatives ; leur disparition à la fin de Birth by Sleep coïncide avec sa destruction.", "The Unversed are born from his negative emotions; their disappearance at the end of Birth by Sleep coincides with his destruction."),
      L("Son nom, « vanitas », signifie « vide » ou « vanité » en latin.", "His name, “vanitas”, means “emptiness” or “vanity” in Latin."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Vanitas", url: "https://kingdomhearts.fandom.com/wiki/Vanitas" },
    ],
  },

  // ─────────────────────────── Xigbar (Braig / Luxu) ───────────────────────────
  "xigbar": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Xigbar est le numéro II de l'Organisation XIII, le « Franc-Tireur », armé de deux pistolets-arbalètes et capable de manipuler l'espace. Cheveux noirs striés de gris, cache-œil et longue cicatrice sur la joue, il est le Simili de Braig, l'un des apprentis d'Ansem le Sage au Jardin Radieux. Son ton sarcastique et ses remarques à double sens ont longtemps laissé penser qu'il en savait plus que les autres.\n\nKingdom Hearts III le confirme : Xigbar est en réalité Luxu, le sixième apprenti du Maître des Maîtres à l'Âge des Fées, qui a passé les siècles à changer de corps pour accomplir la mission confiée par son maître. Cette révélation fait de lui l'un des personnages les plus anciens de la saga et relie l'intrigue de Union χ à celle de Xehanort, dont il n'a été qu'un allié de circonstance.",
          "Xigbar is number II of Organization XIII, the “Freeshooter”, armed with two arrowguns and able to manipulate space. With black hair streaked with grey, an eyepatch and a long scar on his cheek, he is the Nobody of Braig, one of Ansem the Wise's apprentices in Radiant Garden. His sarcastic tone and double-edged remarks long suggested he knew more than the others.\n\nKingdom Hearts III confirms it: Xigbar is actually Luxu, the sixth apprentice of the Master of Masters in the Age of Fairy Tales, who has spent centuries switching bodies to carry out the mission his master gave him. That reveal makes him one of the oldest characters in the series and links the plot of Union χ to Xehanort's, of whom he was only an ally of convenience.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
      "À l'Âge des Fées, Luxu est l'un des six apprentis du Maître des Maîtres, le seul à ne pas recevoir de rôle de Prophète. Son maître lui confie à la place la Keyblade Innommée, dont l'œil permet au Maître des Maîtres de voir l'avenir, ainsi qu'une boîte noire dont il ne doit jamais révéler le contenu. Sa mission : observer, transmettre la Keyblade de porteur en porteur, et s'assurer que les événements prédits par le Livre des Prophéties se réalisent.\n\nDans Union χ, Luxu observe de loin les cinq Prophètes et la Guerre des Keyblades, puis les chefs d'Union et les Pissenlits. Il intervient parfois masqué, et le jeu suggère qu'il a survécu à la fin de cet âge en changeant de corps. C'est ce Luxu que l'on retrouve, sans le savoir, sous les traits de Braig puis de Xigbar, des siècles plus tard.",
          "In the Age of Fairy Tales, Luxu is one of the six apprentices of the Master of Masters, the only one not to receive a Foreteller's role. His master instead entrusts him with the Keyblade No Name, whose eye lets the Master of Masters see the future, together with a black box whose contents he must never reveal. His mission: to watch, to pass the Keyblade from wielder to wielder, and to make sure the events foretold in the Book of Prophecies come to pass.\n\nIn Union χ, Luxu watches the five Foretellers and the Keyblade War from afar, then the Union leaders and the Dandelions. He sometimes steps in masked, and the game suggests he survived the end of that age by changing bodies. It is this Luxu who is found, unknowingly, in the guise of Braig and then Xigbar, centuries later.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Braig est l'un des gardes et apprentis d'Ansem le Sage au Jardin Radieux. Allié secret du Maître Xehanort, il enlève celui-ci et provoque Terra pour tester ses ténèbres ; le combat lui coûte un œil et lui laisse la cicatrice qu'il conservera. Il en tire une rancune tenace envers Terra, mais garde sa loyauté à Xehanort, qui lui promet en échange une Keyblade.\n\nÀ la fin du jeu, Braig affronte de nouveau Terra puis retrouve Terra-Xehanort amnésique dans les rues de la ville, aux côtés d'Ansem le Sage. Les rapports secrets révèlent qu'il a accepté de devenir un réceptacle du cœur de Xehanort, ce qui explique ses yeux dorés et sa connaissance des plans à venir. Il sera de ceux qui trahiront Ansem le Sage et deviendront les premiers membres de l'Organisation XIII.",
          "Braig is one of Ansem the Wise's guards and apprentices in Radiant Garden. A secret ally of Master Xehanort, he abducts him and provokes Terra to test his darkness; the fight costs him an eye and leaves him with the scar he will keep. He nurses a lasting grudge against Terra from it, but stays loyal to Xehanort, who promises him a Keyblade in exchange.\n\nAt the end of the game Braig fights Terra again, then finds an amnesiac Terra-Xehanort in the city streets alongside Ansem the Wise. The secret reports reveal that he agreed to become a vessel for Xehanort's heart, which explains his golden eyes and his knowledge of what is to come. He will be among those who betray Ansem the Wise and become the first members of Organization XIII.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Au sein de l'Organisation, Xigbar est un vétéran désinvolte que Roxas croise régulièrement en mission. Il l'appelle « le p'tit » et se montre plus loquace que les autres sur l'histoire de la Keyblade, sans jamais rien révéler d'utile. À plusieurs reprises, il se montre troublé en regardant Xion : là où Roxas voit une jeune fille, Xigbar voit Ventus, souvenir de ses combats du Jardin Radieux.\n\nIl participe aux missions à Agrabah, au Pays des Merveilles et à l'Olympe, et affronte Xion lorsque celle-ci fuit l'Organisation, avant d'être vaincu. Ces épisodes laissent entendre qu'il connaît le passé de Xehanort bien mieux que les autres membres, ce que Dream Drop Distance et Kingdom Hearts III confirmeront.",
          "Within the Organization, Xigbar is a laid-back veteran whom Roxas regularly runs into on missions. He calls him “kiddo” and is more talkative than the others about the history of the Keyblade, without ever giving away anything useful. Several times he looks unsettled when he sees Xion: where Roxas sees a girl, Xigbar sees Ventus, a memory of his fights in Radiant Garden.\n\nHe takes part in missions in Agrabah, Wonderland and Olympus Coliseum, and fights Xion when she flees the Organization, only to be defeated. Those episodes suggest that he knows Xehanort's past far better than the other members, which Dream Drop Distance and Kingdom Hearts III will confirm.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Xigbar se présente à Sora à la Forteresse Oubliée, où l'Organisation vient observer l'affrontement avec les Sans-cœur de Maléfique. Il se moque de Sora, qu'il juge bien moins impressionnant que d'autres porteurs qu'il a connus, allusion transparente à Terra et Ventus pour qui connaît Birth by Sleep.\n\nAu Monde qui n'existe pas, il affronte Sora dans une salle du château de l'Organisation, en tirant depuis des angles impossibles et en déformant l'arène. Vaincu, il s'efface sur un dernier rictus, mais son Simili détruit fait renaître Braig, qui reste un réceptacle de Xehanort et poursuit sa route sans être vu.",
          "Xigbar introduces himself to Sora in Hollow Bastion, where the Organization comes to watch the clash with Maleficent's Heartless. He mocks Sora, whom he finds far less impressive than other wielders he has known, a transparent nod to Terra and Ventus for anyone who knows Birth by Sleep.\n\nIn The World That Never Was he fights Sora in a hall of the Organization's castle, shooting from impossible angles and warping the arena. Defeated, he fades on one last smirk, but his destroyed Nobody brings Braig back, who remains a vessel of Xehanort and carries on his way unseen.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Xigbar reparaît dans le Monde qui n'existe pas endormi, en manteau noir, comme membre de la nouvelle Organisation XIII. Il s'adresse à Sora avec le même mépris amusé et lui apprend qu'il a été choisi pour devenir le treizième réceptacle du Maître Xehanort, avant de le laisser au Jeune Xehanort et à Xemnas.\n\nIl explique aussi, à demi-mot, que la première Organisation n'a jamais eu d'autre but que de préparer treize corps pour Xehanort. Xigbar s'assied ensuite parmi les treize sièges lors de la tentative de faire de Sora un réceptacle, et disparaît avec les autres quand elle échoue.",
          "Xigbar reappears in the sleeping World That Never Was, in a black coat, as a member of the new Organization XIII. He speaks to Sora with the same amused contempt and tells him he has been chosen to become Master Xehanort's thirteenth vessel, before leaving him to Young Xehanort and Xemnas.\n\nHe also hints that the first Organization never had any other purpose than preparing thirteen bodies for Xehanort. Xigbar then sits among the thirteen seats during the attempt to make Sora a vessel, and vanishes with the others when it fails.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Xigbar accompagne Luxord dans les Caraïbes, où l'Organisation cherche la boîte noire, et multiplie les allusions à l'Âge des Fées. Au Nécropole des Keyblades, il affronte Sora, Riku et Mickey aux côtés du Riku des ténèbres ; vaincu, il se laisse tomber dans le vide avec un sourire, sans que son corps ne se dissolve.\n\nAprès la défaite du Maître Xehanort, il réapparaît sur le champ de bataille, ramasse la Keyblade Innommée et révèle sa véritable identité : Luxu, l'apprenti du Maître des Maîtres, qui a suivi son maître à travers les âges en changeant de corps. Il invoque les Prophètes Aced, Invi, Gula et Ira, s'étonne de l'absence d'Ava, et fait apparaître la boîte noire, ouvrant la voie à la saga suivante. Re Mind lui consacre un combat de données dans l'épisode Limitcut.",
          "Xigbar accompanies Luxord in the Caribbean, where the Organization searches for the black box, and drops hint after hint about the Age of Fairy Tales. At the Keyblade Graveyard he fights Sora, Riku and Mickey alongside Dark Riku; defeated, he lets himself fall into the void with a smile, his body never dissolving.\n\nAfter Master Xehanort's defeat he reappears on the battlefield, picks up the Keyblade No Name and reveals his true identity: Luxu, apprentice of the Master of Masters, who followed his master across the ages by changing bodies. He summons the Foretellers Aced, Invi, Gula and Ira, wonders at Ava's absence, and brings out the black box, opening the way to the next saga. Re Mind gives him a data battle in the Limitcut episode.",
        ),
      },
    ],
    trivia: [
      L("Xigbar est doublé par James Patrick Stuart en anglais et par Hōchū Ōtsuka en japonais.", "Xigbar is voiced by James Patrick Stuart in English and Hōchū Ōtsuka in Japanese."),
      L("Sa réplique « As if! » est devenue une signature, et son ton décontracté le distingue du reste de l'Organisation.", "His line “As if!” became a signature, and his casual tone sets him apart from the rest of the Organization."),
      L("Son nom est l'anagramme de Braig avec un X ; il est aussi le seul membre de l'Organisation dont le corps ne se dissout pas après sa défaite dans Kingdom Hearts III.", "His name is an anagram of Braig with an X; he is also the only Organization member whose body does not dissolve after his defeat in Kingdom Hearts III."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Xigbar", url: "https://kingdomhearts.fandom.com/wiki/Xigbar" },
      { label: "Kingdom Hearts Wiki — Luxu", url: "https://kingdomhearts.fandom.com/wiki/Luxu" },
    ],
  },

  // ─────────────────────────── Saïx (Isa) ───────────────────────────
  "saix": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Saïx est le numéro VII de l'Organisation XIII, le « Devin Lunaire », reconnaissable à ses longs cheveux bleus, à sa cicatrice en X entre les yeux et à sa claymore. Bras droit de Xemnas, il distribue les missions et incarne la froideur bureaucratique de l'Organisation. Sous l'influence de la lune de Kingdom Hearts, il entre dans une rage berserk qui décuple sa force.\n\nIl est le Simili d'Isa, le meilleur ami de Lea au Jardin Radieux, devenu cobaye des expériences de Xehanort après s'être introduit dans le château d'Ansem le Sage. Sa cicatrice et ses yeux dorés sont les marques de sa transformation en réceptacle de Xehanort. L'amitié brisée entre Isa et Lea, puis entre Saïx et Axel, est l'un des fils les plus discrets et les plus poignants de la saga, résolu seulement dans Kingdom Hearts III.",
          "Saïx is number VII of Organization XIII, the “Luna Diviner”, recognisable by his long blue hair, the X-shaped scar between his eyes and his claymore. Xemnas's right-hand man, he hands out missions and embodies the Organization's bureaucratic coldness. Under the influence of the moon of Kingdom Hearts he flies into a berserk rage that multiplies his strength.\n\nHe is the Nobody of Isa, Lea's best friend in Radiant Garden, who became a test subject of Xehanort's experiments after sneaking into Ansem the Wise's castle. His scar and golden eyes are the marks of his transformation into one of Xehanort's vessels. The broken friendship between Isa and Lea, then between Saïx and Axel, is one of the quietest and most poignant threads of the series, resolved only in Kingdom Hearts III.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Isa apparaît adolescent au Jardin Radieux, aux côtés de Lea. Plus calme et plus moqueur que son ami, il le regarde défier Ventus au frisbee sur la place et raille sa défaite. Les deux garçons projettent de s'introduire dans le château d'Ansem le Sage, curieux de ce qui s'y trame.\n\nLe jeu n'en montre pas davantage, mais Kingdom Hearts III complète l'histoire : Lea et Isa ont fini par pénétrer dans le château, où ils ont découvert une prisonnière amnésique, et se sont juré de la libérer. Repris, ils ont servi de sujets d'expérience à Xehanort et à ses complices, ont perdu leur cœur, et leurs Similis Axel et Saïx sont devenus les premiers membres de l'Organisation XIII, la promesse de retrouver la jeune fille devenant pour Saïx le moteur secret de toute son ascension.",
          "Isa appears as a teenager in Radiant Garden alongside Lea. Calmer and more sardonic than his friend, he watches him challenge Ventus to frisbee on the square and mocks his defeat. The two boys plan to sneak into Ansem the Wise's castle, curious about what is going on there.\n\nThe game shows no more, but Kingdom Hearts III completes the story: Lea and Isa eventually got into the castle, where they found an amnesiac prisoner, and swore to free her. Caught, they served as test subjects for Xehanort and his accomplices, lost their hearts, and their Nobodies Axel and Saïx became the first members of Organization XIII, the promise to find the girl becoming Saïx's secret motive for his whole rise.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Saïx dirige le quotidien de l'Organisation : c'est lui qui confie chaque matin leurs missions à Roxas et à Xion, avec une indifférence marquée pour la seconde, qu'il considère comme un outil défectueux. Il rappelle régulièrement à Axel leur projet commun, conçu au Jardin Radieux, de prendre un jour le contrôle de l'Organisation, et voit d'un mauvais œil l'attachement de son ancien ami pour deux « jouets ».\n\nIl rapporte à Xemnas l'échec de Xion et suggère de la remplacer par Roxas, puis affronte Xion lorsqu'elle s'échappe avec l'aide d'Axel. Vaincu, il laisse partir Axel, mais leur lien est rompu. La désertion de Roxas, dont il est en partie responsable par sa froideur, prive l'Organisation de sa Keyblade et prépare la vengeance qu'il exercera sur Axel dans Kingdom Hearts II.",
          "Saïx runs the Organization's daily routine: he is the one who hands Roxas and Xion their missions each morning, with marked indifference towards the latter, whom he regards as a defective tool. He regularly reminds Axel of their shared plan, hatched in Radiant Garden, to one day take control of the Organization, and disapproves of his old friend's attachment to two “toys”.\n\nHe reports Xion's failure to Xemnas and suggests replacing her with Roxas, then fights Xion when she escapes with Axel's help. Defeated, he lets Axel go, but their bond is broken. Roxas's desertion, for which his coldness is partly responsible, deprives the Organization of its Keyblade and sets up the revenge he will take on Axel in Kingdom Hearts II.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Saïx se dévoile à Sora à la Forteresse Oubliée, lors de la bataille des Mille Sans-cœur, et lui révèle cyniquement que chaque Sans-cœur abattu nourrit le Kingdom Hearts de l'Organisation. Il enlève ensuite Kairi à la Cité du Crépuscule, en la soustrayant à Axel, qu'il traite désormais en traître, et l'enferme au Monde qui n'existe pas.\n\nIl affronte Sora au sommet du château de l'Organisation, transfiguré par la lumière de Kingdom Hearts, et se bat comme un berserker jusqu'à ce que Sora l'emporte. Il meurt en tendant la main vers la lune de cœurs, demandant où est le sien. Sa destruction ramène Isa à l'existence au Jardin Radieux, mais avec un cœur déjà marqué par Xehanort.",
          "Saïx unveils himself to Sora in Hollow Bastion during the Battle of 1000 Heartless, cynically revealing that every Heartless struck down feeds the Organization's Kingdom Hearts. He then abducts Kairi in Twilight Town, snatching her from Axel, whom he now treats as a traitor, and locks her up in The World That Never Was.\n\nHe fights Sora at the top of the Organization's castle, transfigured by the light of Kingdom Hearts, and battles like a berserker until Sora prevails. He dies reaching out to the moon of hearts, asking where his own is. His destruction brings Isa back to existence in Radiant Garden, but with a heart already marked by Xehanort.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Saïx siège dans la véritable Organisation XIII comme réceptacle de Xehanort. Il se tient en retrait pendant la majeure partie du voyage de Sora, puis, au Nécropole des Keyblades, affronte Lea et Kairi accompagné de Xion, dont il veut faire une arme contre son ancien ami. Il combat avec une rage froide, jusqu'à ce que Roxas surgisse du cœur de Sora et que Xion retrouve la mémoire.\n\nVaincu par Roxas, Xion et Lea, il avoue enfin son mobile : il n'a jamais cherché le pouvoir, mais la jeune fille rencontrée jadis dans le château d'Ansem, connue sous le nom de sujet X, et il en voulait à Lea de l'avoir oubliée pour Roxas et Xion. Sa disparition ramène Isa, apaisé, qui rejoint Lea, Roxas et Xion au sommet de la tour de l'horloge dans l'épilogue. Re Mind ajoute un combat de données contre lui dans l'épisode Limitcut.",
          "Saïx sits in the real Organization XIII as one of Xehanort's vessels. He stays in the background for most of Sora's journey, then, at the Keyblade Graveyard, fights Lea and Kairi with Xion at his side, intending to make her a weapon against his old friend. He fights with cold fury until Roxas bursts from Sora's heart and Xion regains her memory.\n\nDefeated by Roxas, Xion and Lea, he finally confesses his motive: he never sought power, only the girl they met long ago in Ansem's castle, known as Subject X, and he resented Lea for forgetting her in favour of Roxas and Xion. His disappearance brings back a calmer Isa, who joins Lea, Roxas and Xion atop the clock tower in the epilogue. Re Mind adds a data battle against him in the Limitcut episode.",
        ),
      },
    ],
    trivia: [
      L("Saïx est doublé par Kirk Thornton en anglais et par Ginpei Sato en japonais.", "Saïx is voiced by Kirk Thornton in English and Ginpei Sato in Japanese."),
      L("Son arme est une claymore à la forme de croissant de lune, et son élément est la lune.", "His weapon is a crescent-moon-shaped claymore, and his element is the moon."),
      L("Sa cicatrice en X n'existait pas chez Isa adolescent dans Birth by Sleep : elle apparaît avec sa transformation en réceptacle de Xehanort.", "His X-shaped scar did not exist on the teenage Isa in Birth by Sleep: it appears with his transformation into one of Xehanort's vessels."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Saïx", url: "https://kingdomhearts.fandom.com/wiki/Sa%C3%AFx" },
      { label: "Kingdom Hearts Wiki — Isa", url: "https://kingdomhearts.fandom.com/wiki/Isa" },
    ],
  },

  // ─────────────────────────── Réplica de Riku ───────────────────────────
  "riku-replica": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Réplica de Riku est une copie de Riku fabriquée par Vexen au Manoir Oblivion, à partir des données recueillies lors d'un combat contre l'original. Il fait partie du programme de répliques de l'Organisation XIII, dont Xion sera l'aboutissement, et il est le premier à démontrer qu'une réplique peut développer un cœur et une volonté propres. Physiquement identique à Riku, il porte la tenue et l'Âme Éternelle de celui-ci.\n\nNaminé lui implante de faux souvenirs qui le persuadent d'être le vrai Riku, protecteur de la jeune fille depuis l'enfance. Ce mensonge, puis sa découverte, façonnent un personnage tragique, obsédé par la question de savoir ce qu'il vaut s'il n'est qu'une copie. Les joueurs le surnomment « Repliku ». Il revient dans Kingdom Hearts III, où il obtient enfin une forme de rédemption en cédant son corps à Naminé.",
          "Riku Replica is a copy of Riku made by Vexen at Castle Oblivion from data collected during a fight with the original. He belongs to Organization XIII's replica programme, of which Xion will be the culmination, and he is the first to prove that a replica can develop a heart and a will of its own. Physically identical to Riku, he wears Riku's outfit and carries his Soul Eater.\n\nNaminé implants false memories in him that convince him he is the real Riku, the girl's protector since childhood. That lie, and then its discovery, shape a tragic character obsessed with what he is worth if he is only a copy. Players nicknamed him “Repliku”. He returns in Kingdom Hearts III, where he finally earns a form of redemption by giving his body to Naminé.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Vexen crée le Réplica pour tester Sora et le présente d'abord comme le vrai Riku, revenu des ténèbres et hostile. Naminé, sous la contrainte de Marluxia et Larxene, réécrit ses souvenirs pour qu'il se croie lié à elle par une promesse d'enfance : le Réplica affronte alors Sora à plusieurs reprises, convaincu de défendre Naminé contre un rival. Larxene finit par lui révéler sa nature, ce qui le plonge dans la fureur.\n\nDans le scénario de Riku, le Réplica croise plusieurs fois l'original et le défie, revendiquant le droit d'exister. Axel le pousse à absorber Zexion pour gagner en puissance, puis le lance contre Riku. Vaincu dans les sous-sols du château, il demande, avant de s'effacer, ce qu'il advient du cœur d'un être artificiel, question à laquelle Riku ne sait pas répondre.",
          "Vexen creates the Replica to test Sora and first presents him as the real Riku, back from the darkness and hostile. Naminé, under orders from Marluxia and Larxene, rewrites his memories so that he believes himself bound to her by a childhood promise: the Replica then fights Sora several times, convinced he is defending Naminé from a rival. Larxene eventually reveals his nature to him, which drives him into a fury.\n\nIn Riku's scenario the Replica crosses the original several times and challenges him, claiming his right to exist. Axel pushes him to absorb Zexion to gain power, then sets him on Riku. Defeated in the castle's basements, he asks, before fading, what becomes of the heart of an artificial being, a question Riku cannot answer.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Le Maître Xehanort se sert d'une réplique pour héberger le Riku des ténèbres, le Riku du premier jeu ramené par le voyage temporel et intégré à la véritable Organisation XIII. Le cœur du Réplica de Riku, lui, subsiste dans ce corps : il se manifeste au Nécropole des Keyblades, lorsque Riku vainc son double, et s'adresse à l'original pour lui dire qu'il a réussi là où lui a échoué.\n\nLibéré, il choisit de renoncer au corps de réplique, désormais vide, afin que Naminé puisse y être transférée et revenir à la vie. Ansem le Sage et ses apprentis réalisent ce transfert au Jardin Radieux après la victoire. Le Réplica disparaît ainsi pour de bon, mais en donnant à celle qu'il avait été programmé pour protéger la chose qu'il avait toujours voulue pour lui-même : une existence.",
          "Master Xehanort uses a replica to house Dark Riku, the Riku of the first game brought back through time travel and made part of the real Organization XIII. Riku Replica's own heart lingers in that body: it surfaces at the Keyblade Graveyard, when Riku defeats his double, and speaks to the original to tell him he succeeded where he himself failed.\n\nOnce freed, he chooses to give up the replica body, now empty, so that Naminé can be transferred into it and return to life. Ansem the Wise and his apprentices carry out that transfer in Radiant Garden after the victory. The Replica thus disappears for good, but by giving the one he had been programmed to protect the very thing he had always wanted for himself: an existence.",
        ),
      },
    ],
    trivia: [
      L("Le Réplica de Riku partage les voix de Riku : David Gallagher en anglais et Mamoru Miyano en japonais.", "Riku Replica shares Riku's voices: David Gallagher in English and Mamoru Miyano in Japanese."),
      L("Dans Re:Chain of Memories, il est le seul adversaire que Sora affronte quatre fois au cours de la même aventure.", "In Re:Chain of Memories he is the only opponent Sora fights four times in the same adventure."),
      L("Son surnom « Repliku » n'apparaît dans aucun jeu : il vient des joueurs.", "His nickname “Repliku” appears in no game: it comes from the players."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Riku Replica", url: "https://kingdomhearts.fandom.com/wiki/Riku_Replica" },
    ],
  },

  // ─────────────────────────── Volonté Persistante ───────────────────────────
  "lingering-will": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Volonté Persistante est l'armure de Terra animée par sa seule conscience. Lorsque le Maître Xehanort implante son cœur dans le corps de Terra, la volonté de celui-ci refuse de disparaître et se réfugie dans l'armure que Terra venait de retirer. Il en résulte un être sans cœur ni corps, une pure détermination revêtue de métal, qui manie Confins de la Terre et se déplace en armure de Porteur.\n\nElle apparaît pour la première fois comme boss secret de Kingdom Hearts II Final Mix, en 2007, avant même que Birth by Sleep n'explique qui elle est ; son nom japonais signifie « la pensée qui demeure ». Ce combat, l'un des plus difficiles de la saga, a fait de la Volonté Persistante une légende parmi les joueurs, et son retour dans Kingdom Hearts III répond à une attente de plus de dix ans.",
          "The Lingering Will is Terra's armour animated by his consciousness alone. When Master Xehanort implants his heart into Terra's body, Terra's will refuses to vanish and takes refuge in the armour Terra had just removed. The result is a being with neither heart nor body, pure determination clad in metal, wielding Ends of the Earth and moving in Keyblade armour.\n\nIt first appears as the secret boss of Kingdom Hearts II Final Mix, in 2007, before Birth by Sleep even explained who it was; its Japanese name means “the thought that remains”. That fight, one of the hardest in the series, made the Lingering Will a legend among players, and its return in Kingdom Hearts III answered more than ten years of anticipation.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Au Nécropole des Keyblades, après que Xehanort a transféré son cœur dans Terra, Terra-Xehanort s'éloigne en abandonnant l'armure de son hôte. Celle-ci se redresse alors d'elle-même : la volonté de Terra, qui refuse de céder son corps, l'anime. Elle affronte Terra-Xehanort et le terrasse, le renvoyant hébété vers le Jardin Radieux, où il perdra la mémoire.\n\nRestée seule sur le champ de bataille, la Volonté Persistante plante sa Keyblade dans le sol et s'agenouille, promettant de mettre fin un jour à Xehanort. Elle veillera ainsi pendant plus de dix ans, immobile dans le désert des Keyblades, tandis que le cœur de Terra livre de l'intérieur son propre combat.",
          "At the Keyblade Graveyard, after Xehanort has transferred his heart into Terra, Terra-Xehanort walks away, leaving behind his host's armour. The armour then rises on its own: Terra's will, refusing to give up his body, animates it. It faces Terra-Xehanort and strikes him down, sending him dazed towards Radiant Garden, where he will lose his memory.\n\nLeft alone on the battlefield, the Lingering Will plants its Keyblade in the ground and kneels, vowing to one day put an end to Xehanort. It will keep watch like that for more than ten years, motionless in the desert of Keyblades, while Terra's heart fights its own battle from within.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Dans Kingdom Hearts II Final Mix, un portail apparaît dans la Salle de la Pierre Angulaire du Château Disney une fois Xemnas vaincu. Il mène au Nécropole des Keyblades, où une armure agenouillée attend Sora. Elle le prend d'abord pour Xehanort, puis, constatant son erreur, lui demande s'il est un Porteur de Keyblade et l'affronte pour en juger.\n\nLe combat est l'un des plus exigeants du jeu : la Volonté Persistante change sa Keyblade en fouet, en canon ou en planeur, immobilise Sora et frappe avec une vitesse redoutable. Vaincue, elle s'agenouille à nouveau et reconnaît en Sora un porteur digne de ce nom, avant de disparaître de la scène. L'objet rare obtenu en récompense matérialise cette reconnaissance.",
          "In Kingdom Hearts II Final Mix, a portal appears in Disney Castle's Hall of the Cornerstone once Xemnas is defeated. It leads to the Keyblade Graveyard, where a kneeling armour waits for Sora. It first mistakes him for Xehanort, then, realising its error, asks whether he is a Keyblade wielder and fights him to find out.\n\nThe battle is one of the most demanding in the game: the Lingering Will turns its Keyblade into a whip, a cannon or a glider, pins Sora down and strikes with fearsome speed. Defeated, it kneels again and acknowledges Sora as a worthy wielder before leaving the scene. The rare item earned as a reward embodies that recognition.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Lors de la seconde bataille du Nécropole des Keyblades, Terra-Xehanort domine Aqua et Ventus, et le Gardien qui l'accompagne s'apprête à les achever. Naminé, depuis le cœur de Kairi, se connecte alors au cœur de Terra et appelle à l'aide sa volonté : l'armure se relève au loin, traverse le champ de bataille et s'interpose.\n\nLa Volonté Persistante affronte Terra-Xehanort et le tient en échec, offrant à Sora le temps de porter secours à ses amis. Son intervention, combinée à l'appel d'Aqua et de Ventus, permet à Terra de reprendre le contrôle de son corps et d'expulser le cœur de Xehanort. Sa mission accomplie, l'armure retourne au repos : Terra, revenu, porte à nouveau lui-même ce qu'elle avait gardé pour lui pendant treize ans.",
          "During the second battle of the Keyblade Graveyard, Terra-Xehanort overpowers Aqua and Ventus, and the Guardian at his side is about to finish them. Naminé, from within Kairi's heart, then connects to Terra's heart and calls his will for help: the armour rises in the distance, crosses the battlefield and steps in.\n\nThe Lingering Will faces Terra-Xehanort and holds him at bay, giving Sora time to rescue his friends. Its intervention, combined with Aqua's and Ventus's call, allows Terra to regain control of his body and expel Xehanort's heart. Its mission fulfilled, the armour returns to rest: Terra, restored, once again carries himself what it had kept for him for thirteen years.",
        ),
      },
    ],
    trivia: [
      L("Son nom japonais, 留まりし思念, se traduit par « la pensée qui demeure ».", "Its Japanese name, 留まりし思念, translates as “the thought that remains”."),
      L("Le combat de Kingdom Hearts II Final Mix est resté exclusif au Japon jusqu'à la compilation HD 2.5 ReMIX en 2014.", "The Kingdom Hearts II Final Mix battle stayed exclusive to Japan until the HD 2.5 ReMIX collection in 2014."),
      L("Ses transformations de Keyblade en Kingdom Hearts II préfigurent les styles de commande de Birth by Sleep et les transformations de Kingdom Hearts III.", "Its Keyblade transformations in Kingdom Hearts II foreshadow the command styles of Birth by Sleep and the formchanges of Kingdom Hearts III."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Lingering Will", url: "https://kingdomhearts.fandom.com/wiki/Lingering_Will" },
    ],
  },

  // ─────────────────────────── Terra-Xehanort ───────────────────────────
  "terra-xehanort": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Ce Xehanort-là n'est ni le vieux maître de la Contrée du Départ ni le Jeune Xehanort venu du passé : c'est le jeune homme aux cheveux argentés retrouvé sans mémoire au Jardin Radieux, celui que la série appelle simplement « l'apprenti d'Ansem ». Son corps est en réalité celui de Terra, et le cœur qui l'habite celui du Maître Xehanort, qui s'y est implanté au Nécropole des Keyblades. L'amnésie qui suit ce transfert ne lui laisse qu'un nom.\n\nSa silhouette annonce déjà les deux figures qu'il engendrera : Ansem, Chercheur des Ténèbres, en reprendra les traits presque à l'identique, et Xemnas en héritera la voix et la démarche. Dans les jeux japonais comme occidentaux, il partage d'ailleurs ses comédiens avec ces deux entités, ce qui souligne qu'il s'agit d'une seule et même personne fragmentée.",
          "This Xehanort is neither the old master of the Land of Departure nor the Young Xehanort brought from the past: he is the silver-haired young man found without memory in Radiant Garden, the one the series simply calls “Ansem's apprentice”. His body is in fact Terra's, and the heart inhabiting it is Master Xehanort's, implanted there at the Keyblade Graveyard. The amnesia that follows leaves him nothing but a name.\n\nHis silhouette already announces the two figures he will produce: Ansem, Seeker of Darkness, takes on almost identical features, and Xemnas inherits his voice and bearing. In both the Japanese and Western games he shares his actors with those two entities, underlining that they are one fractured person.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Au terme de Birth by Sleep, Terra perd son corps au Nécropole des Keyblades lorsque le Maître Xehanort y transfère son propre cœur. Le nouvel occupant du corps est aussitôt affronté par l'armure sans maître de Terra, et le choc lui coûte ses souvenirs : il s'effondre au Jardin Radieux, incapable de dire d'où il vient.\n\nAnsem le Sage, souverain et savant du monde, le recueille. Frappé par son intelligence, il en fait son sixième apprenti aux côtés de Braig, Dilan, Even, Aeleus et Ienzo. Xehanort se montre studieux, docile en apparence, et gagne rapidement la confiance de son maître, jusqu'à être associé aux recherches sur le cœur humain menées dans les laboratoires du château.",
          "At the end of Birth by Sleep, Terra loses his body at the Keyblade Graveyard when Master Xehanort transfers his own heart into it. The new occupant is immediately fought by Terra's masterless armor, and the clash costs him his memories: he collapses in Radiant Garden, unable to say where he comes from.\n\nAnsem the Wise, the world's ruler and scholar, takes him in. Struck by his intelligence, he makes him his sixth apprentice alongside Braig, Dilan, Even, Aeleus and Ienzo. Xehanort proves studious and outwardly docile, quickly earning his master's trust until he is brought into the research on the human heart carried out in the castle laboratories.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Les rapports laissés dans la Forteresse Oubliée racontent la suite. Ansem le Sage renonce à ses expériences, jugeant qu'on ne doit pas sonder les ténèbres du cœur ; ses apprentis, menés par Xehanort, poursuivent en secret. Ils enferment des cobayes dans les salles souterraines, provoquent l'apparition des premiers Sans-cœur, puis se débarrassent de leur maître en le précipitant dans le Domaine des Ténèbres.\n\nXehanort s'approprie alors le nom et le titre d'Ansem, signe les rapports à sa place et laisse les Sans-cœur dévorer le Jardin Radieux, qui devient la Forteresse Oubliée. Pour aller plus loin, il abandonne volontairement son propre cœur aux ténèbres : de cet acte naissent Ansem, Chercheur des Ténèbres, le Sans-cœur que Sora affrontera au Bout du Monde, et Xemnas, son Simili.",
          "The reports left behind in Hollow Bastion tell what follows. Ansem the Wise abandons his experiments, judging that the darkness of the heart must not be probed; his apprentices, led by Xehanort, carry on in secret. They lock test subjects in the underground chambers, cause the first Heartless to appear, then rid themselves of their master by casting him into the Realm of Darkness.\n\nXehanort then takes Ansem's name and title, signs the reports in his place, and lets the Heartless devour Radiant Garden, which becomes Hollow Bastion. To go further still, he willingly surrenders his own heart to darkness: from that act are born Ansem, Seeker of Darkness, the Heartless Sora will fight at the End of the World, and Xemnas, his Nobody.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Kingdom Hearts II démêle enfin l'imposture. Mickey explique à Sora que l'homme vaincu un an plus tôt n'était pas Ansem le Sage mais le Sans-cœur de son apprenti, et le véritable Ansem, revenu du Domaine des Ténèbres sous le nom de DiZ, confirme le récit. Les rapports d'Ansem, disséminés dans les mondes, retracent l'engrenage : la curiosité du maître, la trahison des six, la naissance des Sans-cœur.\n\nLe corps volé, lui, n'a pas disparu. Privé de son cœur, il a laissé derrière lui Xemnas, qui bâtit le Monde qui n'existe pas et prend la tête de l'Organisation XIII. Ainsi, l'apprenti amnésique du Jardin Radieux se retrouve à l'origine des deux grandes menaces de la première saga, sans jamais apparaître lui-même en scène.",
          "Kingdom Hearts II finally unravels the deception. Mickey explains to Sora that the man defeated a year earlier was not Ansem the Wise but his apprentice's Heartless, and the real Ansem, returned from the Realm of Darkness under the name DiZ, confirms the account. Ansem's reports, scattered across the worlds, retrace the chain of events: the master's curiosity, the betrayal of the six, the birth of the Heartless.\n\nThe stolen body has not vanished either. Emptied of its heart, it left behind Xemnas, who builds The World That Never Was and leads Organization XIII. The amnesiac apprentice of Radiant Garden thus stands at the origin of both great threats of the first saga, without ever appearing on screen himself.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Lorsque Sans-cœur et Simili sont tous deux vaincus, le corps de l'apprenti se recompose : c'est Terra-Xehanort, réceptacle du cœur du Maître Xehanort, qui rejoint la véritable Organisation XIII. Au Nécropole des Keyblades, il affronte Aqua et Ventus, ceux-là mêmes qu'il avait perdus de vue dix ans plus tôt.\n\nLe combat tourne quand l'armure sans maître de Terra, restée là depuis Birth by Sleep, se dresse une seconde fois contre l'usurpateur. La volonté de Terra reprend enfin le dessus, chasse le cœur de Xehanort du corps qu'il occupait et rend au porteur son visage d'origine. L'apprenti d'Ansem cesse alors d'exister : il n'était qu'un masque posé sur Terra, et sa disparition permet aux trois amis de la Contrée du Départ de se retrouver.",
          "Once both Heartless and Nobody are defeated, the apprentice's body reforms: it is Terra-Xehanort, vessel of Master Xehanort's heart, who joins the real Organization XIII. At the Keyblade Graveyard he faces Aqua and Ventus, the very people he lost sight of ten years earlier.\n\nThe fight turns when Terra's masterless armor, still standing there since Birth by Sleep, rises a second time against the usurper. Terra's will finally regains the upper hand, drives Xehanort's heart from the body it occupied and gives the wielder back his own face. Ansem's apprentice then ceases to exist: he was only a mask laid over Terra, and his disappearance lets the three friends of the Land of Departure reunite.",
        ),
      },
    ],
    trivia: [
      L("Son nom japonais, ゼアノート, est le même que celui du Maître Xehanort : rien ne distingue les deux personnages à l'écrit, ce qui alimentait la confusion avant Birth by Sleep.", "His Japanese name, ゼアノート, is the same as Master Xehanort's: nothing distinguishes the two in writing, which fuelled confusion before Birth by Sleep."),
      L("Richard Epcar et Akio Ōtsuka doublent à la fois l'apprenti, Ansem Chercheur des Ténèbres et Xemnas, soulignant leur unité.", "Richard Epcar and Akio Ōtsuka voice the apprentice, Ansem Seeker of Darkness and Xemnas alike, underlining their unity."),
      L("Le premier Kingdom Hearts le montrait déjà, sans le nommer, dans les illustrations des rapports d'Ansem découverts à la Forteresse Oubliée.", "The first Kingdom Hearts already showed him, unnamed, in the illustrations of Ansem's reports found in Hollow Bastion."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Terra-Xehanort", url: "https://kingdomhearts.fandom.com/wiki/Terra-Xehanort" },
      { label: "Kingdom Hearts Wiki — Ansem's Reports", url: "https://kingdomhearts.fandom.com/wiki/Ansem_Report" },
    ],
  },

  // ─────────────────────────── Yozora ───────────────────────────
  "yozora": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Yozora est le héros de Verum Rex, un jeu vidéo fictif aperçu dans la Boîte à Jouets de Kingdom Hearts III. Cheveux argentés, yeux vairons rouge et bleu, tenue noire et argent, il est conçu par Nomura comme un écho volontaire de Noctis, le héros de Final Fantasy XV, et de Sora lui-même : Rex confond d'ailleurs ce dernier avec lui. Son nom signifie « ciel nocturne » en japonais, miroir de Sora, le « ciel ».\n\nD'abord simple clin d'œil, il devient un personnage à part entière avec Re Mind, où il apparaît comme boss secret, et surtout avec Kingdom Hearts IV, qui fait de sa ville, Quadratum, le nouveau théâtre de la saga. Yozora incarne un monde « irréel » aux yeux des habitants du Domaine de la Lumière, mais tout aussi réel de son propre point de vue, et il semble poursuivre une mission qui le concerne directement, sauver Sora ou l'affronter.",
          "Yozora is the hero of Verum Rex, a fictional video game glimpsed in the Toy Box of Kingdom Hearts III. Silver hair, mismatched red and blue eyes, a black and silver outfit: Nomura designed him as a deliberate echo of Noctis, the hero of Final Fantasy XV, and of Sora himself, whom Rex actually mistakes for him. His name means “night sky” in Japanese, a mirror of Sora, the “sky”.\n\nA mere nod at first, he becomes a character in his own right with Re Mind, where he appears as a secret boss, and above all with Kingdom Hearts IV, which makes his city, Quadratum, the series' new stage. Yozora embodies a world that is “unreal” in the eyes of the Realm of Light's inhabitants but just as real from his own point of view, and he seems to be pursuing a mission that concerns him directly: saving Sora, or fighting him.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Dans la Boîte à Jouets, Yozora n'existe que comme figurine et vidéo promotionnelle du jeu Verum Rex, dans le magasin de jouets de Galaxy Toys. Sa présence prend un autre sens dans le Monde Final : une Étoile sans Nom y confie à Sora attendre quelqu'un dont le nom et le visage lui ont été volés, allusion que Re Mind éclaire.\n\nDans l'épisode Limitcut de Re Mind, après les treize combats de données, Sora s'endort sur la plage et se retrouve dans une Quadratum nocturne, face à Yozora, qui affirme avoir été chargé de le « sauver ». Le combat qui suit est le plus difficile du jeu. Selon l'issue, Yozora cristallise Sora ou reconnaît sa défaite, avant de se réveiller à l'arrière d'une voiture, troublé. La scène secrète le montre enfin sur un gratte-ciel de Quadratum, observant Sora éveillé dans cette ville, et Riku dans une ville voisine.",
          "In the Toy Box, Yozora exists only as a figurine and promotional video for the game Verum Rex in the Galaxy Toys store. His presence takes on a different meaning in the Final World: a Nameless Star there tells Sora she is waiting for someone whose name and face were stolen, a hint that Re Mind clarifies.\n\nIn Re Mind's Limitcut episode, after the thirteen data battles, Sora falls asleep on the beach and finds himself in a night-time Quadratum, facing Yozora, who claims he was asked to “save” him. The battle that follows is the hardest in the game. Depending on the outcome, Yozora crystallises Sora or acknowledges defeat, before waking in the back of a car, unsettled. The secret scene finally shows him on a Quadratum skyscraper, watching Sora awake in that city, and Riku in a neighbouring one.",
        ),
      },
      {
        game: "kingdom-hearts-iv",
        text: L(
      "Kingdom Hearts IV se déroule à Quadratum, la ville de Yozora, ce qui fait de lui un personnage central du nouvel arc. Le récit reprend là où Re Mind et Melody of Memory l'ont laissé : Sora, effacé du Domaine de la Lumière, s'est éveillé dans cette métropole, et le jeune homme aux yeux vairons que Kairi et Riku ont entrevu dans leurs visions est Yozora lui-même.\n\nLa nature exacte de sa relation avec Sora, sa mission de « sauvetage » et ses liens avec Verum Rex restent à découvrir. Nomura a seulement confirmé que Quadratum et Yozora seraient au cœur de cette saga de la Perte, et que ce monde possède ses propres règles, distinctes de celles de la lumière et des ténèbres.",
          "Kingdom Hearts IV takes place in Quadratum, Yozora's city, which makes him a central figure of the new arc. The story picks up where Re Mind and Melody of Memory left it: Sora, erased from the Realm of Light, woke in that metropolis, and the young man with mismatched eyes glimpsed by Kairi and Riku in their visions is Yozora himself.\n\nThe exact nature of his relationship with Sora, his “rescue” mission and his ties to Verum Rex remain to be discovered. Nomura has only confirmed that Quadratum and Yozora would be at the heart of this Lost Master arc, and that this world has its own rules, distinct from those of light and darkness.",
        ),
      },
    ],
    trivia: [
      L("Yozora est doublé par Dylan Sprouse en anglais et par Tasuku Hatanaka en japonais.", "Yozora is voiced by Dylan Sprouse in English and Tasuku Hatanaka in Japanese."),
      L("Verum Rex signifie « le vrai roi » en latin, allusion au titre de travail de Final Fantasy XV, Final Fantasy Versus XIII, que Nomura devait diriger.", "Verum Rex means “the true king” in Latin, a nod to the working title of Final Fantasy XV, Final Fantasy Versus XIII, which Nomura was to direct."),
      L("Le combat contre lui dans Re Mind débloque la Keyblade Souvenir Perdu.", "Beating him in Re Mind unlocks the Oblivion Keyblade."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Yozora", url: "https://kingdomhearts.fandom.com/wiki/Yozora" },
    ],
  },

  // ─────────────────────────── Ephemer ───────────────────────────
  "ephemer": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Ephemer est un jeune Porteur de Keyblade de Ville de l'Aube, à l'Âge des Fées, l'époque de Kingdom Hearts χ. Cheveux argentés en bataille, foulard rouge, il est curieux, impulsif et affable, et devient le premier véritable ami du Joueur, le héros anonyme du jeu. Son nom, dérivé d'« éphémère », renvoie à la brièveté de cet âge condamné à disparaître dans la Guerre des Keyblades.\n\nConçu pour Union χ, où il est l'un des cinq chefs d'Union chargés de guider les Pissenlits après la guerre, il est le premier personnage de cet âge à faire le lien avec la saga principale : dans Kingdom Hearts III, sa voix s'élève au Nécropole des Keyblades pour soutenir Sora. Nomura en a fait un des visages de la mémoire des anciens porteurs, et les jeux mobiles suggèrent qu'il est lié à la fondation de Scala ad Caelum.",
          "Ephemer is a young Keyblade wielder from Daybreak Town in the Age of Fairy Tales, the era of Kingdom Hearts χ. With unruly silver hair and a red scarf, he is curious, impulsive and friendly, and becomes the first true friend of the Player, the game's anonymous hero. His name, derived from “ephemeral”, points to the brevity of that age, doomed to vanish in the Keyblade War.\n\nCreated for Union χ, where he is one of the five Union leaders tasked with guiding the Dandelions after the war, he is the first character of that age to connect with the main series: in Kingdom Hearts III his voice rises at the Keyblade Graveyard to support Sora. Nomura made him one of the faces of the memory of past wielders, and the mobile games suggest he is tied to the founding of Scala ad Caelum.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
      "Ephemer rencontre le Joueur à Ville de l'Aube, alors que les Unions rivalisent pour collecter la lumière. Intrigué par les secrets des Prophètes, il entraîne son nouvel ami dans une exploration de la ville, puis disparaît sans laisser de trace : Ava l'a choisi pour devenir l'un des chefs des Pissenlits, les Porteurs qu'elle met à l'abri de la guerre à venir. Le Joueur et Skuld partent à sa recherche, sans le retrouver avant la catastrophe.\n\nDans Union χ, après la Guerre des Keyblades, Ephemer dirige les Pissenlits avec Skuld, Ventus, Brain et Lauriam, dans une Ville de l'Aube reconstituée. Les cinq chefs affrontent la trahison des instructions laissées par Ava, la disparition de Strelitzia et l'entité appelée les Ténèbres, cachée parmi eux. Au terme de l'histoire, Ephemer et Skuld restent pour transmettre l'avenir aux mondes, et Ephemer est vu, bien plus tard, à Scala ad Caelum, dont il semble être l'un des fondateurs.",
          "Ephemer meets the Player in Daybreak Town, while the Unions compete to collect light. Intrigued by the Foretellers' secrets, he drags his new friend into an exploration of the town, then vanishes without a trace: Ava has chosen him to become one of the leaders of the Dandelions, the wielders she shelters from the coming war. The Player and Skuld go looking for him, without finding him before the catastrophe.\n\nIn Union χ, after the Keyblade War, Ephemer leads the Dandelions with Skuld, Ventus, Brain and Lauriam in a rebuilt Daybreak Town. The five leaders face the betrayal of the instructions Ava left, Strelitzia's disappearance and the entity called Darkness hiding among them. At the end of the story, Ephemer and Skuld stay behind to hand the future on to the worlds, and Ephemer is seen, much later, in Scala ad Caelum, of which he appears to be one of the founders.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Ephemer n'apparaît pas en personne dans Kingdom Hearts III, mais sa présence est décisive au Nécropole des Keyblades. Lors de la seconde bataille, une Marée Démoniaque gigantesque menace d'engloutir Sora ; c'est alors qu'une voix familière pour les joueurs de Union χ se fait entendre : Ephemer, depuis la mémoire des lieux, appelle les Keyblades abandonnées des porteurs tombés à la guerre.\n\nDes milliers de Keyblades se soulèvent du sol et forment, sous la conduite de Sora, une lame immense qui traverse et anéantit la Marée. Cette scène ferme la boucle ouverte par Kingdom Hearts χ : les Porteurs de l'Âge des Fées, morts pour rien selon la prophétie, sauvent enfin le monde qu'ils n'avaient pas pu protéger. Une silhouette translucide, celle d'Ephemer, se tient un instant aux côtés de Sora avant de s'effacer.",
          "Ephemer does not appear in person in Kingdom Hearts III, but his presence is decisive at the Keyblade Graveyard. During the second battle, a gigantic Demon Tide threatens to swallow Sora; that is when a voice familiar to Union χ players is heard: Ephemer, from the memory of the place, calls the abandoned Keyblades of the wielders who fell in the war.\n\nThousands of Keyblades rise from the ground and form, under Sora's guidance, an immense blade that pierces and annihilates the Tide. That scene closes the loop opened by Kingdom Hearts χ: the wielders of the Age of Fairy Tales, who died for nothing according to the prophecy, finally save the world they had not been able to protect. A translucent figure, Ephemer's, stands for a moment beside Sora before fading.",
        ),
      },
    ],
    trivia: [
      L("Ephemer est doublé par Griffin Burns en anglais et par Yūma Uchida en japonais.", "Ephemer is voiced by Griffin Burns in English and Yūma Uchida in Japanese."),
      L("Son nom vient du grec « ephemeros », « qui ne dure qu'un jour », tandis que Skuld porte le nom d'une Norne de la mythologie nordique.", "His name comes from the Greek “ephemeros”, “lasting only a day”, while Skuld bears the name of a Norn from Norse mythology."),
      L("Comme tous les Porteurs de Ville de l'Aube, il manie Lumière Stellaire, la Keyblade de l'Âge des Fées.", "Like every wielder of Daybreak Town, he wields Starlight, the Keyblade of the Age of Fairy Tales."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Ephemer", url: "https://kingdomhearts.fandom.com/wiki/Ephemer" },
    ],
  },
};
