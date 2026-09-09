import type { LocalizedText } from "@/data/games";
import type { Era, StoryEvent } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

export const eras: Era[] = [
  {
    id: "age-of-fairy-tales",
    title: L("L’Âge des Fées", "The Age of Fairy Tales"),
    summary: L(
      "Le monde est encore unique et baigné de lumière ; le Maître des Maîtres y écrit un livre qui annonce sa fin, et la Guerre des Keyblades le brise.",
      "The world is still one and bathed in light; the Master of Masters writes a book foretelling its end, and the Keyblade War shatters it.",
    ),
  },
  {
    id: "rebuilt-world",
    title: L("Le monde reconstruit", "The rebuilt world"),
    summary: L(
      "Des survivants transportés à travers le temps rebâtissent une civilisation de Porteurs à Scala ad Caelum, où grandira l’élève le plus doué et le plus dangereux de son école.",
      "Survivors carried across time rebuild a civilisation of wielders in Scala ad Caelum, where the most gifted and most dangerous student of its school grows up.",
    ),
  },
  {
    id: "departure-generation",
    title: L("La génération de la Contrée du Départ", "The Land of Departure generation"),
    summary: L(
      "Terra, Ventus et Aqua sont formés par Maître Eraqus pendant que le Maître Xehanort met en place, pièce par pièce, la forge de la χ-blade.",
      "Terra, Ventus and Aqua are trained by Master Eraqus while Master Xehanort assembles, piece by piece, the forging of the χ-blade.",
    ),
  },
  {
    id: "radiant-garden-fall",
    title: L("La chute du Jardin Radieux", "The fall of Radiant Garden"),
    summary: L(
      "Un savant et six apprentis ouvrent des cœurs pour comprendre les ténèbres ; ils engendrent les Sans-cœur, les Similis et le monde que Sora trouvera en ruine.",
      "A scholar and six apprentices open hearts to understand darkness; they beget the Heartless, the Nobodies and the world Sora will find in ruins.",
    ),
  },
  {
    id: "soras-journey",
    title: L("L’aventure de Sora", "Sora's journey"),
    summary: L(
      "Un garçon des Îles du Destin reçoit la Keyblade, referme la porte de Kingdom Hearts, perd la mémoire, puis démonte l’Organisation XIII.",
      "A boy from Destiny Islands receives the Keyblade, seals the door to Kingdom Hearts, loses his memory, then dismantles Organization XIII.",
    ),
  },
  {
    id: "mark-of-mastery",
    title: L("L’examen et le compte à rebours", "The exam and the countdown"),
    summary: L(
      "Entre deux guerres, Yen Sid prépare ses porteurs, la Vraie Organisation XIII se dévoile et l’on découvre qu’Aqua n’est jamais remontée des ténèbres.",
      "Between two wars, Yen Sid prepares his wielders, the true Organization XIII shows itself, and it emerges that Aqua never climbed back out of the darkness.",
    ),
  },
  {
    id: "last-keyblade-war",
    title: L("La dernière Guerre des Keyblades", "The last Keyblade War"),
    summary: L(
      "Sept gardiens et treize ténèbres se rejoignent au Nécropole des Keyblades pour l’affrontement que le Maître Xehanort prépare depuis soixante ans.",
      "Seven guardians and thirteen darknesses converge on the Keyblade Graveyard for the clash Master Xehanort has been preparing for sixty years.",
    ),
  },
  {
    id: "quadratum-era",
    title: L("Quadratum et l’après", "Quadratum and the aftermath"),
    summary: L(
      "Xehanort vaincu, Sora s’efface et se réveille dans une ville qui n’appartient pas à la carte des mondes ; la saga y ouvre son arc suivant.",
      "With Xehanort defeated, Sora fades away and wakes in a city that belongs to no map of the worlds; there the saga opens its next arc.",
    ),
  },
];

export const events: StoryEvent[] = [
  // ─── L’Âge des Fées ───────────────────────────────────────────────
  {
    id: "book-of-prophecies",
    era: "age-of-fairy-tales",
    when: L("Bien avant tous les jeux", "Long before every game"),
    title: L("Le Maître des Maîtres écrit le Livre des Prophéties", "The Master of Masters writes the Book of Prophecies"),
    text: L(
      "Dans un monde encore unique, un homme dont personne ne voit le visage possède une Keyblade contenant un œil capable de regarder l’avenir. Il consigne ce qu’il y voit dans un ouvrage, le Livre des Prophéties, et en distribue des copies partielles à cinq apprentis qu’il nomme Prophètes : Ira, Aced, Invi, Gula et Ava. Chacun reçoit un fragment de la même histoire, jamais la totalité.\n\nLe livre annonce une catastrophe, une guerre qui plongera le monde dans les ténèbres. C’est le geste fondateur de toute la saga : il ne provoque pas la guerre en la prédisant, il la rend inévitable en confiant à cinq personnes cinq versions incomplètes d’une même vérité.",
      "In a world still whole, a man whose face nobody ever sees carries a Keyblade holding an eye able to look into the future. He writes down what he sees there in a single work, the Book of Prophecies, and hands partial copies to five apprentices he names Foretellers: Ira, Aced, Invi, Gula and Ava. Each receives a fragment of the same story, never all of it.\n\nThe book announces a catastrophe, a war that will plunge the world into darkness. It is the founding gesture of the whole saga: predicting the war does not cause it, but entrusting five people with five incomplete versions of one truth makes it unavoidable.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["master-of-masters", "foretellers", "no-name"],
  },
  {
    id: "luxu-charge",
    era: "age-of-fairy-tales",
    title: L("La charge de Luxu : une Keyblade et une boîte close", "Luxu's charge: a Keyblade and a sealed box"),
    text: L(
      "Un sixième apprenti reçoit une mission différente des autres. Luxu se voit remettre la Keyblade Innommée, celle qui contient l’œil du Maître, ainsi qu’une boîte noire qu’il ne doit jamais ouvrir. Sa consigne tient en peu de mots : traverser les siècles, transmettre l’arme et la boîte de porteur en porteur, et se placer là où l’histoire se joue sans jamais intervenir.\n\nPour tenir cette charge, Luxu passe d’un corps à l’autre au fil des générations. C’est le fil le plus long de la série : il relie l’Âge des Fées à Scala ad Caelum, puis à l’Organisation XIII, et il n’est révélé qu’au terme de Kingdom Hearts III.",
      "A sixth apprentice is given a different mission. Luxu receives the No Name Keyblade, the one containing the Master's eye, along with a black box he must never open. His instructions are brief: cross the centuries, pass weapon and box from wielder to wielder, and stand where history happens without ever intervening.\n\nTo carry that charge, Luxu moves from one body to the next across generations. It is the longest thread in the series: it ties the Age of Fairy Tales to Scala ad Caelum, then to Organization XIII, and it is only revealed at the very end of Kingdom Hearts III.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["luxu", "no-name", "black-box", "master-of-masters"],
  },
  {
    id: "unions-and-disappearance",
    era: "age-of-fairy-tales",
    title: L("La disparition du Maître et les cinq Unions", "The Master's disappearance and the five Unions"),
    text: L(
      "Le Maître des Maîtres s’en va sans explication, laissant ses Prophètes diriger seuls. Chacun fonde une Union et recrute des porteurs à Ville de l'Aube, une ville portuaire aux tuiles claires où les enfants apprennent la Keyblade en équipes rivales. Leur tâche quotidienne consiste à récolter le Lux, la lumière que produisent les cœurs, en abattant les Sans-cœur qui commencent à proliférer.\n\nMais le livre annonce aussi qu’un traître se cache parmi eux. Faute de pouvoir comparer leurs textes, les cinq Prophètes se surveillent, se soupçonnent et s’arment les uns contre les autres. La guerre n’a pas encore commencé qu’elle est déjà organisée.",
      "The Master of Masters leaves without explanation, and his Foretellers are left to lead alone. Each founds a Union and recruits wielders in Daybreak Town, a harbour town of pale roofs where children learn the Keyblade in rival teams. Their daily work is to gather Lux, the light hearts produce, by cutting down the Heartless that are beginning to multiply.\n\nBut the book also states that a traitor hides among them. Unable to compare their texts, the five Foretellers watch one another, suspect one another and arm against one another. The war has not started and is already organised.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["foretellers", "daybreak-town", "player", "chirithy"],
  },
  {
    id: "ephemer-underground",
    era: "age-of-fairy-tales",
    title: L("Ephemer découvre les machines sous la ville", "Ephemer finds the machinery beneath the town"),
    text: L(
      "Un jeune porteur curieux, Ephemer, refuse de croire que la rivalité entre Unions ait un sens. Il descend sous Ville de l'Aube et y trouve un mécanisme insoupçonné : la ville entière est un dispositif de collecte, et le Lux arraché aux Sans-cœur y est stocké au lieu d’être rendu au monde.\n\nSa découverte donne au joueur le premier soupçon que l’Âge des Fées n’est pas ce qu’il prétend. Elle vaut aussi à Ephemer d’être écarté : il disparaît avant la guerre, et c’est cette absence qui pousse son ami à chercher la vérité par ses propres moyens. Ephemer réapparaîtra plus tard, du côté des survivants.",
      "A curious young wielder, Ephemer, refuses to believe the rivalry between Unions means anything. He climbs down beneath Daybreak Town and finds an unsuspected mechanism: the whole town is a collection device, and the Lux torn from the Heartless is stored there instead of being returned to the world.\n\nHis discovery gives the player their first hint that the Age of Fairy Tales is not what it claims. It also gets him removed: he disappears before the war, and it is that absence that pushes his friend to seek the truth alone. Ephemer will resurface later, on the side of the survivors.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["ephemer", "daybreak-town", "player"],
  },
  {
    id: "ava-dandelions",
    era: "age-of-fairy-tales",
    title: L("Ava met les Dandelions à l’abri", "Ava puts the Dandelions out of reach"),
    text: L(
      "Ava, la plus jeune des Prophètes, reçoit du Maître une mission tenue secrète : sélectionner dans chaque Union des porteurs qui ne se battront pas. Elle les appelle les Dandelions, les prépare en silence et leur interdit de prendre part au conflit annoncé. Leur rôle n’est pas de gagner la guerre, mais d’y survivre pour rebâtir ensuite.\n\nCe choix condamne tous les autres. Ava sait ce qui va arriver à ceux qu’elle laisse au combat, et elle organise malgré tout leur sacrifice. C’est la décision la plus lourde de l’Âge des Fées, et celle dont dépend l’existence même de toutes les époques suivantes de la saga.",
      "Ava, the youngest of the Foretellers, is given a mission the Master keeps secret: to pick, from every Union, wielders who will not fight. She calls them the Dandelions, prepares them quietly and forbids them any part in the coming conflict. Their role is not to win the war but to outlive it and rebuild afterwards.\n\nThat choice condemns everyone else. Ava knows what will happen to those she leaves on the battlefield, and she organises their sacrifice all the same. It is the heaviest decision of the Age of Fairy Tales, and the one every later era of the saga depends on.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["ava", "foretellers", "player", "skuld"],
  },
  {
    id: "keyblade-war",
    era: "age-of-fairy-tales",
    title: L("La Guerre des Keyblades brise le monde", "The Keyblade War shatters the world"),
    text: L(
      "La défiance finit par l’emporter sur tout le reste. Les Unions se massent dans une plaine désolée et s’entretuent pour une lumière que chacun croit devoir protéger des autres. La bataille ne se conclut par aucune victoire : elle laisse un désert hérissé de Keyblades plantées dans le sol, celui que la saga appellera le Nécropole des Keyblades.\n\nLe monde unique éclate. Ce qu’il en reste se disperse en une multitude de petits mondes séparés les uns des autres par le vide, et la lumière originelle disparaît du ciel. Toute la géographie de Kingdom Hearts — des mondes isolés qu’un vaisseau doit relier — naît de cette défaite collective.",
      "Mistrust finally outweighs everything else. The Unions mass in a desolate plain and slaughter one another over a light each side believes it must protect from the others. The battle ends in no victory: it leaves a desert bristling with Keyblades driven into the ground, the place the saga will call the Keyblade Graveyard.\n\nThe single world breaks apart. What survives scatters into a multitude of small worlds separated by the void, and the original light vanishes from the sky. The entire geography of Kingdom Hearts — isolated worlds a ship must link together — is born of that collective defeat.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["keyblade-war", "keyblade-graveyard", "foretellers", "kingdom-hearts-heart"],
  },

  // ─── Le monde reconstruit ─────────────────────────────────────────
  {
    id: "data-daybreak-town",
    era: "rebuilt-world",
    when: L("Immédiatement après la guerre", "Immediately after the war"),
    title: L("Les Dandelions dans une ville qui n’a pas brûlé", "The Dandelions in a town that never burned"),
    text: L(
      "Les Dandelions se réveillent dans une Ville de l'Aube intacte, alors que le monde a été détruit. Les jours s’y ressemblent trop, certains détails ne changent jamais, et Ephemer et Skuld finissent par obtenir la réponse : cette ville est une reconstitution, un monde de données bâti sur les souvenirs de celle qui a disparu, et ils en sont eux-mêmes des copies.\n\nLeurs corps réels dorment ailleurs, à l’abri. Le dispositif n’est pas une prison mais un sas, destiné à conserver quelque chose le temps que l’extérieur se stabilise. Reste à décider si l’on peut annoncer à des survivants qu’ils ne sont pas ceux qui ont survécu.",
      "The Dandelions wake in an intact Daybreak Town although the world has been destroyed. The days there resemble one another too closely, some details never change, and Ephemer and Skuld eventually get the answer: this town is a reconstruction, a data world built from the memories of the one that is gone, and they are copies themselves.\n\nTheir real bodies sleep elsewhere, in safety. The arrangement is not a prison but an airlock, meant to preserve something until the outside settles. What remains is deciding whether one can tell survivors that they are not the ones who survived.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["ephemer", "skuld", "daybreak-town", "chirithy"],
  },
  {
    id: "strelitzia-murder",
    era: "rebuilt-world",
    title: L("Le meurtre de Strelitzia", "The murder of Strelitzia"),
    text: L(
      "Ava avait désigné Strelitzia comme l’une des cinq nouvelles dirigeantes d’Union. Trop timide pour aborder le porteur dont elle devait s’occuper, elle l’observait de loin en préparant ses mots. Elle est abattue dans une ruelle vide, d’un coup de Keyblade, avant d’avoir rien pu dire, et sa place de chef d’Union est aussitôt occupée par quelqu’un d’autre.\n\nLe corps qui a frappé est celui de Ventus, dirigé par un cœur venu d’ailleurs qui s’est glissé dans le monde de données. L’identité complète de cette présence n’est jamais livrée. Son frère Lauriam mènera l’enquête avec Elrena — c’est le seul souvenir que leurs Similis, Marluxia et Larxene, garderont d’eux-mêmes.",
      "Ava had chosen Strelitzia as one of five new Union leaders. Too shy to approach the wielder she was meant to look after, she watched him from a distance while rehearsing her words. She is struck down in an empty alley by a Keyblade before she can say anything, and her leader's seat is immediately taken by someone else.\n\nThe body that struck is Ventus's, driven by a heart from elsewhere that slipped into the data world. That presence is never fully identified. Her brother Lauriam will investigate alongside Elrena — the only memory of themselves their Nobodies, Marluxia and Larxene, will keep.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["strelitzia", "lauriam", "elrena", "ventus"],
  },
  {
    id: "hearts-sent-forward",
    era: "rebuilt-world",
    title: L("Les cœurs endormis franchissent le temps", "The sleeping hearts cross time"),
    text: L(
      "Les ténèbres finissent par s’en prendre au monde de données lui-même, qui ne tiendra pas. Les cœurs réels, eux, peuvent être envoyés vers une époque future où le monde se sera reconstruit : c’était depuis le début la fonction du dispositif. Encore faut-il quelqu’un pour couvrir ce passage.\n\nLes copies restent en arrière et livrent ce dernier combat en sachant qu’elles ne feront pas partie de ce qui sera sauvé ; le porteur que le joueur a incarné y disparaît, et son Chirithy l’attendra pour toujours dans le Monde Final. Ephemer, Skuld, Lauriam, Elrena, Brain et Ventus se réveillent dans un monde neuf qui ne sait rien d’eux.",
      "The darkness eventually turns on the data world itself, which will not hold. The real hearts, however, can be sent to a future era in which the world will have been rebuilt: that was the arrangement's purpose from the start. Someone still has to cover that passage.\n\nThe copies stay behind and fight that last battle knowing they will not be part of what is saved; the wielder the player embodied vanishes there, and their Chirithy will wait for them forever in the Final World. Ephemer, Skuld, Lauriam, Elrena, Brain and Ventus wake in a new world that knows nothing about them.",
    ),
    game: "kingdom-hearts-chi",
    entries: ["player", "chirithy", "the-final-world", "brain"],
  },
  {
    id: "xehanort-child",
    era: "rebuilt-world",
    when: L("Environ soixante-dix ans avant Kingdom Hearts", "Roughly seventy years before Kingdom Hearts"),
    title: L("L’enfant du destin des Îles du Destin", "The child of destiny on Destiny Islands"),
    text: L(
      "Sur les mêmes plages où Sora construira un radeau, un garçon nommé Xehanort est élevé à l’écart par un homme dissimulé sous une capuche bleue, qui lui répète qu’une prophétie fait de lui l’enfant du destin. Son sommeil est envahi de rêves qui ne sont pas les siens : une ville portuaire, des porteurs en tuniques colorées, une guerre.\n\nCes images viennent du gardien lui-même, qui portait la mémoire du porteur anonyme de l’Âge des Fées. Le vieil homme meurt, et une silhouette à la peau sombre et aux cheveux blancs indique à l’enfant la route d’une cité où l’on forme les porteurs. Xehanort a été mis sur son propre chemin par ce qu’il deviendra.",
      "On the same beaches where Sora will one day build a raft, a boy named Xehanort is raised apart by a man hidden under a blue hood who keeps telling him that a prophecy makes him the child of destiny. His sleep is crowded with dreams that are not his own: a harbour town, wielders in bright tunics, a war.\n\nThose images come from the guardian himself, who carried the memory of the nameless wielder of the Age of Fairy Tales. The old man dies, and a dark-skinned, white-haired figure points the child towards a city where wielders are trained. Xehanort has been set on his own road by what he will become.",
    ),
    game: "dark-road",
    entries: ["master-xehanort", "destiny-islands", "ansem-seeker-of-darkness", "player"],
  },
  {
    id: "odin-class",
    era: "rebuilt-world",
    title: L("Scala ad Caelum et la classe de Maître Odin", "Scala ad Caelum and Master Odin's class"),
    text: L(
      "Bâtie sur les vestiges de Ville de l'Aube par les descendants des cœurs sauvés, Scala ad Caelum est une cité de marbre blanc, d’escaliers et de canaux, et surtout une école où l’on forme les Porteurs de Keyblade par promotions.\n\nXehanort y entre dans la classe de Maître Odin, aux côtés d’Eraqus, Bragi, Urd, Hermod, Vor et Baldr. Entre deux entraînements, Xehanort et Eraqus jouent à l’Alba & Ater, un jeu de plateau où trente-deux pièces blanches et noires portent des noms de porteurs. C’est là qu’ils se disputent déjà : l’un veut savoir pourquoi la Guerre des Keyblades a eu lieu, l’autre estime qu’il suffit de faire son travail.",
      "Built on the remains of Daybreak Town by the descendants of the rescued hearts, Scala ad Caelum is a city of white marble, stairways and canals, and above all a school where Keyblade wielders are trained in year groups.\n\nXehanort joins Master Odin's class alongside Eraqus, Bragi, Urd, Hermod, Vor and Baldr. Between training sessions, Xehanort and Eraqus play Alba & Ater, a board game in which thirty-two white and black pieces bear the names of wielders. That is already where they argue: one wants to know why the Keyblade War happened, the other holds that doing the job properly is enough.",
    ),
    game: "dark-road",
    entries: ["scala-ad-caelum", "master-odin", "eraqus", "master-xehanort"],
  },
  {
    id: "missing-upperclassmen",
    era: "rebuilt-world",
    title: L("Les aînés disparus et les Enfers", "The missing upperclassmen and the Underworld"),
    text: L(
      "Plusieurs élèves de la promotion supérieure cessent de donner signe de vie, et Maître Odin envoie ses cadets les chercher de monde en monde. L’enquête les mène chez les morts, aux Enfers, où ils obtiennent la confirmation redoutée : Hoder, la sœur de Baldr, n’a pas survécu à son examen de Maîtrise, et ceux qui tentaient de la protéger sont tombés avec elle.\n\nVor, elle, a déjà quitté le groupe : le Miroir Magique lui a dit qu’elle ne progresserait jamais tant qu’elle resterait au chaud parmi ses amis. La série, qui d’ordinaire promet toujours un retour, laisse ici mourir onze compagnons sans en ramener aucun.",
      "Several senior students stop reporting back, and Master Odin sends his juniors to look for them from world to world. The search leads them among the dead, in the Underworld, where they get the confirmation they dreaded: Hoder, Baldr's sister, did not survive her Mark of Mastery exam, and those who tried to protect her fell with her.\n\nVor has already left the group: the Magic Mirror told her she would never improve so long as she stayed comfortable among friends. The series, which normally always promises a return, here lets eleven companions die and brings none of them back.",
    ),
    game: "dark-road",
    entries: ["master-odin", "vor", "baldr", "bragi"],
  },
  {
    id: "baldr-tower",
    era: "rebuilt-world",
    title: L("Les treize ténèbres et la mort de Baldr", "The thirteen darknesses and Baldr's death"),
    text: L(
      "Baldr percevait le contenu des cœurs et n’y a plus vu, avec les années, que la rancune et la peur. Maître Odin révèle alors ce qu’il taisait : à l’origine des Sans-cœur se tiennent treize ténèbres véritables, anciennes et sans forme, qui cherchent des cœurs où se loger. L’une d’elles s’est installée dans Baldr, qui abat méthodiquement ses aînés puis Vor.\n\nL’affrontement final a lieu au sommet de la tour de Scala ad Caelum. Xehanort tue son camarade, qui lui répond en mourant qu’ils sont de la même espèce. Sept lumières d’un côté, treize ténèbres de l’autre : le futur plan de Xehanort ne sort pas de son imagination, il l’a vu fonctionner sur ses amis.",
      "Baldr could perceive the contents of hearts and, over the years, ended up seeing nothing there but resentment and fear. Master Odin then reveals what he had kept quiet: at the origin of the Heartless stand thirteen true darknesses, ancient and formless, seeking hearts to lodge in. One of them has settled in Baldr, who methodically kills the seniors and then Vor.\n\nThe final confrontation takes place atop Scala ad Caelum's tower. Xehanort kills his classmate, who answers as he dies that the two of them are of the same kind. Seven lights on one side, thirteen darknesses on the other: Xehanort's future plan is not his invention, he watched it work on his friends.",
    ),
    game: "dark-road",
    entries: ["baldr", "master-xehanort", "darkness", "scala-ad-caelum"],
  },
  {
    id: "bragi-was-luxu",
    era: "rebuilt-world",
    title: L("Bragi n’avait jamais été Bragi", "Bragi had never been Bragi"),
    text: L(
      "Le camarade nonchalant qui plaisantait pendant les cours n’a pas survécu au coup de Baldr — mais il n’avait rien à perdre. Bragi était Luxu, occupant un corps de plus dans la longue chaîne de réceptacles que le Maître des Maîtres lui a imposée. Il laisse Bragi passer pour mort et poursuit sa route avec la Keyblade Innommée et la boîte close.\n\nLa révélation situe Luxu exactement à l’endroit et au moment où se décide le destin du futur Chercheur des Ténèbres. Dans le même temps, un homme entièrement dissimulé aborde Xehanort dans un couloir des ténèbres, lui offre un manteau noir et l’encourage à regarder à l’intérieur des cœurs.",
      "The easy-going classmate who joked through lessons did not survive Baldr's blow — but he had nothing to lose. Bragi was Luxu, occupying one more body in the long chain of vessels the Master of Masters imposed on him. He lets Bragi pass for dead and carries on with the No Name Keyblade and the sealed box.\n\nThe reveal places Luxu at the exact spot and moment where the future Seeker of Darkness's fate is settled. At the same time, a wholly hidden man approaches Xehanort in a corridor of darkness, offers him a black coat and encourages him to look inside people's hearts.",
    ),
    game: "dark-road",
    entries: ["luxu", "bragi", "black-box", "master-of-masters"],
  },
  {
    id: "odin-inheritance",
    era: "rebuilt-world",
    title: L("L’héritage d’Odin et la rupture des deux amis", "Odin's inheritance and the two friends' break"),
    text: L(
      "Maître Odin fait passer l’examen de Maîtrise à ses deux derniers élèves, puis partage son héritage comme on rend un jugement. Eraqus reçoit le Garde du Maître et la charge de la Contrée du Départ, où il formera un jour Terra, Aqua et Ventus. Xehanort reçoit la Keyblade Innommée, afin qu’il hérite, dit le vieil homme, de la résolution des Maîtres perdus.\n\nSept ans plus tard, les deux Maîtres se retrouvent à Scala ad Caelum. Xehanort soutient qu’invoquer Kingdom Hearts est le seul moyen de protéger réellement le monde, puisque l’ordre existant n’a protégé personne ; Eraqus refuse. Ils croisent le fer pour la première fois.",
      "Master Odin puts his last two students through the Mark of Mastery exam, then divides his inheritance the way one hands down a verdict. Eraqus receives Master's Defender and charge of the Land of Departure, where he will one day train Terra, Aqua and Ventus. Xehanort receives the No Name Keyblade, so that — as the old man puts it — he might inherit the resolve of the lost Masters.\n\nSeven years later the two Masters meet again in Scala ad Caelum. Xehanort argues that summoning Kingdom Hearts is the only way to truly protect the world, since the existing order protected no one; Eraqus refuses. They cross blades for the first time.",
    ),
    game: "dark-road",
    entries: ["master-odin", "eraqus", "masters-defender", "no-name"],
  },
  {
    id: "ventus-found",
    era: "rebuilt-world",
    title: L("Un enfant endormi au Nécropole des Keyblades", "A child asleep in the Keyblade Graveyard"),
    text: L(
      "Guidé par le Miroir Magique, Xehanort se rend au Nécropole des Keyblades pour interroger ce que l’Âge des Fées y a laissé. Il y trouve un garçon blond endormi entre les lames plantées, qui ne sait rien de lui-même : Ventus.\n\nIl le conduit à la Contrée du Départ et le confie à Eraqus en affirmant que cet enfant est l’enfant du destin — la formule exacte qu’un vieil homme encapuchonné employait autrefois à son sujet sur une plage. Le jeu ne dit pas s’il y croit ou s’il s’en sert. Puis il s’entretient avec Vanitas, ce qui laisse entendre qu’il sait déjà parfaitement ce qui dort à l’intérieur de Ventus.",
      "Guided by the Magic Mirror, Xehanort travels to the Keyblade Graveyard to question what the Age of Fairy Tales left there. What he finds is a blond boy asleep among the planted blades, who knows nothing about himself: Ventus.\n\nHe takes him to the Land of Departure and entrusts him to Eraqus, declaring that this child is the child of destiny — the exact phrase a hooded old man once used about him on a beach. The game does not say whether he believes it or is using it. He then speaks with Vanitas, which makes it plain that he already knows exactly what sleeps inside Ventus.",
    ),
    game: "dark-road",
    entries: ["ventus", "master-xehanort", "keyblade-graveyard", "land-of-departure"],
  },

  // ─── La génération de la Contrée du Départ ────────────────────────
  {
    id: "vanitas-split",
    era: "departure-generation",
    when: L("Environ quatorze ans avant Kingdom Hearts", "Roughly fourteen years before Kingdom Hearts"),
    title: L("Xehanort brise le cœur de Ventus", "Xehanort splits Ventus's heart"),
    text: L(
      "Le Maître Xehanort a besoin de la χ-blade, l’arme originelle dont les Keyblades ordinaires ne sont que des imitations, et il a compris qu’elle naît du choc entre une lumière et une ténèbre pures. Il prend Ventus pour apprenti et tente de le faire tomber dans les ténèbres au Nécropole des Keyblades.\n\nL’enfant résiste, alors le vieil homme force : il fend son cœur en deux. La part sombre extraite prend un corps et un nom, Vanitas, et devient l’autre moitié de l’équation. Ce qui reste de Ventus est une coquille silencieuse que Xehanort abandonne, persuadé de l’avoir détruite pour rien.",
      "Master Xehanort needs the χ-blade, the original weapon of which ordinary Keyblades are only imitations, and he has worked out that it is born of the clash between a pure light and a pure darkness. He takes Ventus as an apprentice and tries to make him fall into darkness in the Keyblade Graveyard.\n\nThe boy resists, so the old man forces the matter: he splits his heart in two. The extracted dark half takes a body and a name, Vanitas, and becomes the other half of the equation. What remains of Ventus is a silent shell Xehanort abandons, convinced he has destroyed it for nothing.",
    ),
    game: "birth-by-sleep",
    entries: ["ventus", "vanitas", "master-xehanort", "chi-blade"],
  },
  {
    id: "ventus-heart-sora",
    era: "departure-generation",
    title: L("Le cœur de Ventus se réfugie dans un nouveau-né", "Ventus's heart takes shelter in a newborn"),
    text: L(
      "Le corps vide de Ventus est laissé aux Îles du Destin. Son cœur, réduit à presque rien, y rencontre celui d’un enfant qui vient de naître et s’y accroche. L’enfant s’appelle Sora, et il ne saura jamais qu’il a hébergé quelqu’un dès ses premiers jours.\n\nAppuyé sur cette lumière étrangère, le cœur de Ventus se répare assez pour revenir dans son corps. Xehanort le conduit alors à la Contrée du Départ et le confie à Eraqus, qui l’élève avec Terra et Aqua. Ce lien discret entre deux garçons qui ne se sont jamais parlé expliquera, dix ans plus tard, presque tout ce que Sora est capable de faire.",
      "Ventus's empty body is left on Destiny Islands. His heart, worn down to almost nothing, meets there the heart of a newborn child and clings to it. The child's name is Sora, and he will never know he sheltered someone in his first days.\n\nLeaning on that foreign light, Ventus's heart mends enough to return to his body. Xehanort then takes him to the Land of Departure and leaves him with Eraqus, who raises him alongside Terra and Aqua. This quiet bond between two boys who never spoke will explain, ten years later, almost everything Sora is able to do.",
    ),
    game: "birth-by-sleep",
    entries: ["ventus", "sora", "destiny-islands", "eraqus"],
  },
  {
    id: "mark-of-mastery-terra",
    era: "departure-generation",
    when: L("Dix ans avant Kingdom Hearts", "Ten years before Kingdom Hearts"),
    title: L("L’Épreuve de Maîtrise et l’échec de Terra", "The Mark of Mastery and Terra's failure"),
    text: L(
      "Eraqus soumet ses deux aînés à l’Épreuve de Maîtrise sous le regard de Xehanort, venu en examinateur. Aqua réussit ; Terra, dont la puissance déborde et qui laisse échapper des ténèbres pendant l’épreuve, échoue. Xehanort, qui a truqué le test en y glissant des sphères d’obscurité, s’empresse ensuite de consoler le recalé en lui expliquant que les ténèbres ne sont qu’un outil dont ses maîtres ont peur.\n\nCet échec est le vrai point de départ de Birth by Sleep. Terra part en mission avec la conviction qu’il doit prouver quelque chose, et cette conviction sera exactement la prise dont Xehanort a besoin.",
      "Eraqus puts his two eldest students through the Mark of Mastery exam under Xehanort's eye, present as an examiner. Aqua passes; Terra, whose power spills over and who lets darkness slip out during the test, fails. Xehanort, who rigged the exam by seeding it with orbs of darkness, is then quick to comfort the failed candidate by explaining that darkness is merely a tool his masters happen to fear.\n\nThat failure is the true starting point of Birth by Sleep. Terra leaves on his mission convinced he has something to prove, and that conviction is exactly the handle Xehanort needs.",
    ),
    game: "birth-by-sleep",
    entries: ["terra", "aqua", "eraqus", "master-xehanort"],
  },
  {
    id: "three-depart",
    era: "departure-generation",
    title: L("Trois départs, les Nescients et Maléfique", "Three departures, the Unversed and Maleficent"),
    text: L(
      "Des créatures inconnues, les Nescients, apparaissent dans les mondes ; elles naissent des émotions négatives de Vanitas et se dissipent quand on les frappe. Eraqus envoie Terra et Aqua enquêter, et Ventus s’échappe pour les rattraper après que Vanitas lui a annoncé que Terra ne reviendra pas le même.\n\nChacun suit sa route à travers les mêmes mondes sans jamais arriver au bon moment. Terra, manipulé par Xehanort et par Maléfique, blesse ceux qu’il croit aider et transmet sans le vouloir à la petite Kairi la capacité de porter un jour une Keyblade. Aqua le suit avec la mission de le surveiller, ce qu’il vit comme une trahison de plus.",
      "Unknown creatures, the Unversed, appear across the worlds; they are born of Vanitas's negative emotions and disperse when struck. Eraqus sends Terra and Aqua to investigate, and Ventus slips away after them once Vanitas has told him Terra will not come back the same.\n\nEach follows their own road through the same worlds and never arrives at the right moment. Terra, manipulated by Xehanort and by Maleficent, hurts the people he means to help and unknowingly passes to the young Kairi the ability to one day wield a Keyblade. Aqua follows with orders to watch him, which he takes as one more betrayal.",
    ),
    game: "birth-by-sleep",
    entries: ["unversed", "vanitas", "terra", "maleficent"],
  },
  {
    id: "radiant-garden-crossroads",
    era: "departure-generation",
    title: L("Le Jardin Radieux, carrefour de la saga", "Radiant Garden, the saga's crossroads"),
    text: L(
      "Un monde de fontaines et de jardins en terrasses réunit brièvement, sans que personne le remarque, presque tous les fils de la série. Terra y affronte un garde du nom de Braig, qui y perd un œil et y gagne une place dans les projets de Xehanort. Aqua y croise une fillette aux cheveux rouges et lui jette un charme de protection : c’est Kairi.\n\nDeux enfants s’y disputent en riant, Lea et Isa, qui deviendront Axel et Saïx. Un apprenti taciturne, Ienzo, y suit le savant qui règne sur le monde, Ansem le Sage. Tous les acteurs de la génération suivante sont déjà en place ; il ne manque que le désastre.",
      "A world of fountains and terraced gardens briefly gathers, unnoticed by anyone, almost every thread of the series. Terra faces a guard named Braig there, who loses an eye and gains a place in Xehanort's plans. Aqua meets a small red-haired girl and casts a charm of protection over her: it is Kairi.\n\nTwo boys bicker and laugh nearby, Lea and Isa, who will become Axel and Saïx. A taciturn apprentice, Ienzo, follows the scholar who rules the world, Ansem the Wise. Every player of the next generation is already in place; only the disaster is missing.",
    ),
    game: "birth-by-sleep",
    entries: ["radiant-garden", "braig", "kairi", "lea"],
  },
  {
    id: "eraqus-death",
    era: "departure-generation",
    title: L("La mort de Maître Eraqus", "The death of Master Eraqus"),
    text: L(
      "Eraqus finit par apprendre ce que Ventus porte en lui, et il en tire la conclusion la plus terrible : le garçon doit être détruit avant que la χ-blade ne puisse être forgée. Terra, revenu à temps, s’interpose et lève son arme contre son propre maître pour protéger son ami.\n\nXehanort profite exactement de cette faille. Il achève Eraqus sous les yeux de Terra, laisse la Contrée du Départ s’écrouler et disparaît. Le cœur du vieux Maître, avant de s’éteindre, se réfugie dans celui de Terra, où il restera enfoui pendant plus de dix ans — et d’où il reviendra, au tout dernier instant de Kingdom Hearts III, pour emmener Xehanort avec lui.",
      "Eraqus eventually learns what Ventus carries inside him and draws the most terrible conclusion from it: the boy must be destroyed before the χ-blade can be forged. Terra, back in time, steps between them and raises his weapon against his own master to protect his friend.\n\nXehanort exploits exactly that opening. He finishes Eraqus in front of Terra, lets the Land of Departure collapse and vanishes. The old Master's heart, before going out, takes shelter in Terra's, where it will lie buried for over ten years — and from which it will return, in the very last moments of Kingdom Hearts III, to take Xehanort away with it.",
    ),
    game: "birth-by-sleep",
    entries: ["eraqus", "terra", "master-xehanort", "land-of-departure"],
  },
  {
    id: "graveyard-chi-blade",
    era: "departure-generation",
    title: L("Le Nécropole des Keyblades et la χ-blade brisée", "The Keyblade Graveyard and the shattered χ-blade"),
    text: L(
      "Les trois amis convergent vers la plaine où s’est achevée la Guerre des Keyblades, exactement là où Xehanort les attend. Vanitas contraint Ventus à la fusion et la χ-blade se forme, incomplète mais réelle. Ventus refuse de la laisser exister : il retourne le combat à l’intérieur de son propre cœur et brise l’arme, ce qui brise aussi son cœur.\n\nSon corps reste debout, respirant, vide de tout. Aqua le recueille, et le premier épisode de la chronologie interne s’achève sur une victoire qui ne ressemble à rien : trois amis partis ensemble, dont aucun ne rentrera à la maison.",
      "The three friends converge on the plain where the Keyblade War ended, exactly where Xehanort is waiting for them. Vanitas forces the merge on Ventus and the χ-blade forms, incomplete but real. Ventus refuses to let it exist: he turns the fight inward, inside his own heart, and shatters the weapon — which shatters his heart as well.\n\nHis body remains standing, breathing, emptied of everything. Aqua gathers him up, and the first episode of the internal chronology ends on a victory that resembles nothing of the kind: three friends left together, and not one of them will come home.",
    ),
    game: "birth-by-sleep",
    entries: ["chi-blade", "ventus", "vanitas", "keyblade-graveyard"],
  },
  {
    id: "terra-xehanort",
    era: "departure-generation",
    title: L("Terra-Xehanort et la Volonté Persistante", "Terra-Xehanort and the Lingering Will"),
    text: L(
      "Xehanort met son plan à exécution sur le seul corps qui lui manquait : celui de Terra. Le vieil homme abandonne sa propre enveloppe usée, s’installe dans le jeune porteur et devient Terra-Xehanort, avec des cheveux blanchis et une mémoire brouillée par la lutte des deux esprits.\n\nMais Terra ne se laisse pas prendre entièrement. Ce qui reste de sa volonté quitte son corps et s’installe dans son armure de porteur, qui se relève seule pour poursuivre Xehanort. Vaincue, l’armure s’agenouille dans le désert et y demeure dix ans, immobile, à attendre. La saga l’appellera la Volonté Persistante ; elle se réveillera au moment décisif de Kingdom Hearts III.",
      "Xehanort carries out his plan on the one body he was missing: Terra's. The old man abandons his own worn shell, settles into the young wielder and becomes Terra-Xehanort, with whitened hair and a memory blurred by the struggle of two minds.\n\nBut Terra is not entirely taken. What remains of his will leaves his body and settles into his wielder's armour, which rises on its own to pursue Xehanort. Defeated, the armour kneels in the desert and stays there for ten years, motionless, waiting. The saga will call it the Lingering Will; it will wake at the decisive moment of Kingdom Hearts III.",
    ),
    game: "birth-by-sleep",
    entries: ["terra-xehanort", "lingering-will", "terra", "master-xehanort"],
  },
  {
    id: "aqua-falls",
    era: "departure-generation",
    title: L("Le Manoir Oblivion et la chute d’Aqua", "Castle Oblivion and Aqua's fall"),
    text: L(
      "Aqua ramène le corps de Ventus à la Contrée du Départ et prend une décision définitive. Avec le Garde du Maître légué par Eraqus, elle transforme le château en labyrinthe blanc dont elle seule connaît la clé, y couche son ami endormi et efface le monde de la carte. C’est le Manoir Oblivion, où Sora perdra la mémoire des années plus tard.\n\nElle part ensuite chercher Terra et le retrouve au Jardin Radieux, occupé par Xehanort. Au bord du gouffre, elle donne son armure et sa Keyblade pour renvoyer le corps de son ami vers la lumière, et tombe seule dans le Domaine des Ténèbres. Personne n’ira l’y chercher avant très longtemps.",
      "Aqua brings Ventus's body back to the Land of Departure and makes an irreversible decision. With Master's Defender, bequeathed by Eraqus, she turns the castle into a white labyrinth whose key she alone holds, lays her sleeping friend inside it and wipes the world off the map. This is Castle Oblivion, where Sora will lose his memory years later.\n\nShe then sets out after Terra and finds him at Radiant Garden, occupied by Xehanort. On the edge of the abyss she gives up her armour and her Keyblade to send her friend's body back towards the light, and falls alone into the Realm of Darkness. Nobody will come looking for her for a very long time.",
    ),
    game: "birth-by-sleep",
    entries: ["aqua", "castle-oblivion", "realm-of-darkness", "masters-defender"],
  },

  // ─── La chute du Jardin Radieux ───────────────────────────────────
  {
    id: "xehanort-apprentice",
    era: "radiant-garden-fall",
    when: L("Peu après Birth by Sleep", "Shortly after Birth by Sleep"),
    title: L("Ansem le Sage recueille un amnésique", "Ansem the Wise takes in an amnesiac"),
    text: L(
      "Un jeune homme aux cheveux blancs est retrouvé sans mémoire au Jardin Radieux. Il ne se souvient que d’un nom, Xehanort, et le savant qui gouverne le monde, Ansem le Sage, le recueille et en fait son apprenti. C’est le corps de Terra, habité par le vieux maître dont l’esprit reprend lentement le dessus.\n\nXehanort devient rapidement le plus brillant des six apprentis du château, aux côtés de Braig, Dilan, Even, Aeleus et Ienzo. Il pousse son maître à s’intéresser aux cœurs, aux souvenirs et à ce qui se passe dans l’obscurité — c’est-à-dire, très exactement, aux questions qui ruineront ce monde.",
      "A white-haired young man is found without memory at Radiant Garden. He recalls only a name, Xehanort, and the scholar who governs the world, Ansem the Wise, takes him in as an apprentice. This is Terra's body, inhabited by the old master whose mind is slowly gaining the upper hand.\n\nXehanort quickly becomes the brightest of the castle's six apprentices, alongside Braig, Dilan, Even, Aeleus and Ienzo. He steers his master towards hearts, memories and what happens inside darkness — which is to say, precisely the questions that will ruin this world.",
    ),
    game: "kingdom-hearts-ii",
    entries: ["ansem-the-wise", "terra-xehanort", "radiant-garden", "braig"],
  },
  {
    id: "heart-experiments",
    era: "radiant-garden-fall",
    title: L("Les expériences sur les cœurs", "The experiments on hearts"),
    text: L(
      "Sous le château, dans des laboratoires que le peuple ignore, les apprentis ouvrent des cœurs pour voir ce qu’il y a dedans. Ils utilisent des habitants du monde comme sujets et provoquent ce qu’ils cherchaient à observer : les premiers Sans-cœur, ombres nées d’un cœur qui cède, se mettent à proliférer dans les sous-sols.\n\nAnsem le Sage prend peur, ordonne l’arrêt des recherches et fait sceller les salles. Xehanort et les cinq autres continuent sans lui. Les rapports que le vieux savant avait rédigés seront ensuite réécrits, dispersés à travers les mondes, et deviendront la principale source d’information — et de désinformation — de tous les personnages de la saga.",
      "Beneath the castle, in laboratories the population knows nothing about, the apprentices open hearts to see what is inside them. They use the world's inhabitants as subjects and bring about the very thing they meant to observe: the first Heartless, shadows born of a heart giving way, begin to swarm through the basements.\n\nAnsem the Wise takes fright, orders the research stopped and has the rooms sealed. Xehanort and the other five carry on without him. The reports the old scholar had written will later be rewritten, scattered across the worlds, and become the main source of information — and of misinformation — for every character in the saga.",
    ),
    game: "kingdom-hearts-ii",
    entries: ["ansem-the-wise", "heartless", "even", "ienzo"],
  },
  {
    id: "ansem-banished",
    era: "radiant-garden-fall",
    title: L("Ansem le Sage banni par ses propres apprentis", "Ansem the Wise banished by his own apprentices"),
    text: L(
      "Les six apprentis renversent leur maître et le jettent dans le Domaine des Ténèbres, où il errera des années. Xehanort lui prend jusqu’à son nom : il se fera désormais appeler Ansem, ce qui suffira à égarer tout le monde pendant deux jeux entiers.\n\nPuis les six plongent volontairement dans les ténèbres pour observer le phénomène de l’intérieur. L’expérience réussit trop bien : chacun perd son cœur et se dédouble. Leurs Sans-cœur partent chasser, et leurs corps privés de cœur continuent d’exister avec leur intelligence intacte. Ansem, le Chercheur des Ténèbres, et Xemnas naissent du même homme, le même jour.",
      "The six apprentices overthrow their master and cast him into the Realm of Darkness, where he will wander for years. Xehanort even takes his name: from now on he calls himself Ansem, which is enough to mislead everyone for two entire games.\n\nThe six then deliberately dive into darkness to observe the phenomenon from inside. The experiment works far too well: each loses his heart and splits in two. Their Heartless go off to hunt, while their heartless bodies keep existing with their intelligence intact. Ansem, Seeker of Darkness, and Xemnas are born of the same man on the same day.",
    ),
    game: "kingdom-hearts-ii",
    entries: ["ansem-the-wise", "ansem-seeker-of-darkness", "xemnas", "realm-of-darkness"],
  },
  {
    id: "radiant-garden-falls",
    era: "radiant-garden-fall",
    when: L("Neuf ans avant Kingdom Hearts", "Nine years before Kingdom Hearts"),
    title: L("Le Jardin Radieux devient la Forteresse Oubliée", "Radiant Garden becomes Hollow Bastion"),
    text: L(
      "Les Sans-cœur sortent des laboratoires et dévorent le monde. Le Jardin Radieux tombe en une nuit ; ses survivants s’enfuient vers la Ville de Traverse, parmi lesquels Léon, Aerith, Yuffie et Cid, qui mettront neuf ans à revenir. Le château vidé prend un autre nom : la Forteresse Oubliée, un mot qui dit exactement ce qu’il est devenu.\n\nUne fillette est expulsée du monde par la lumière au moment de sa chute. Elle traverse le vide et échoue sur une plage des Îles du Destin, sans aucun souvenir de l’endroit d’où elle vient. Elle s’appelle Kairi, elle est l’une des sept Princesses de Cœur, et personne, elle comprise, ne le sait encore.",
      "The Heartless spill out of the laboratories and devour the world. Radiant Garden falls in a single night; its survivors flee to Traverse Town, among them Leon, Aerith, Yuffie and Cid, who will take nine years to return. The emptied castle takes another name: Hollow Bastion, a phrase that says exactly what it has become.\n\nA small girl is cast out of the world by the light as it falls. She crosses the void and washes up on a beach in Destiny Islands with no memory of where she came from. Her name is Kairi, she is one of the seven Princesses of Heart, and nobody, herself included, knows it yet.",
    ),
    game: "kingdom-hearts",
    entries: ["radiant-garden", "heartless", "kairi", "princesses-of-heart"],
  },
  {
    id: "organization-founded",
    era: "radiant-garden-fall",
    title: L("La fondation de l’Organisation XIII", "The founding of Organization XIII"),
    text: L(
      "Les corps abandonnés par les six apprentis se rassemblent au Monde qui n’existe pas, une cité de béton blanc suspendue sous un ciel où flotte un cœur incomplet. Xemnas prend la tête du groupe et recrute d’autres Similis de la même espèce, jusqu’à former une organisation de treize membres en manteau noir.\n\nLeur discours est simple : ils n’ont pas de cœur, donc pas d’émotions, et ils veulent en retrouver un. Pour cela il faut réunir assez de cœurs pour rouvrir Kingdom Hearts, ce que seul un porteur de Keyblade peut faire à leur place. Ils attendront des années le garçon capable de récolter à leur profit.",
      "The bodies abandoned by the six apprentices gather in The World That Never Was, a city of white concrete hanging under a sky where an incomplete heart floats. Xemnas takes charge of the group and recruits other Nobodies of the same kind, until an organisation of thirteen black-coated members is formed.\n\nTheir stated case is simple: they have no hearts, therefore no emotions, and they want one back. To get there they must gather enough hearts to reopen Kingdom Hearts, something only a Keyblade wielder can do on their behalf. They will spend years waiting for the boy capable of harvesting on their account.",
    ),
    game: "kingdom-hearts-ii",
    entries: ["organization-xiii", "nobodies", "xemnas", "world-that-never-was"],
  },

  // ─── L’aventure de Sora ───────────────────────────────────────────
  {
    id: "destiny-islands-storm",
    era: "soras-journey",
    when: L("Le point de départ de la série", "The starting point of the series"),
    title: L("La nuit de la tempête aux Îles du Destin", "The night of the storm on Destiny Islands"),
    text: L(
      "Sora, Riku et Kairi ont bâti un radeau pour quitter leur archipel. La veille du départ, une sphère de ténèbres s’ouvre au-dessus de l’île et des créatures noires envahissent la plage. Riku, qui a délibérément ouvert la porte, tend la main à Sora en lui disant qu’ils n’ont plus à craindre l’obscurité, puis se laisse engloutir.\n\nC’est à cet instant que la Chaîne Royale apparaît dans la main de Sora. Il retrouve Kairi dans la grotte secrète ; elle se dissipe dans ses bras. Le monde est arraché à son ciel et disparaît. Au Château Disney, au même moment, le roi Mickey vient de partir en laissant une lettre : les étoiles s’éteignent, il faut trouver la clé.",
      "Sora, Riku and Kairi have built a raft to leave their archipelago. The night before departure, a sphere of darkness opens above the island and black creatures overrun the beach. Riku, who deliberately opened the door, holds out a hand to Sora and tells him they need not fear the dark any more, then lets himself be swallowed.\n\nAt that instant the Kingdom Key appears in Sora's hand. He finds Kairi in the secret cave; she dissolves in his arms. The world is torn from its sky and vanishes. At Disney Castle, at the same moment, King Mickey has just left behind a letter: the stars are going out, the key must be found.",
    ),
    game: "kingdom-hearts",
    entries: ["sora", "riku", "kingdom-key", "destiny-islands"],
  },
  {
    id: "traverse-town-alliance",
    era: "soras-journey",
    title: L("Ville de Traverse et l’alliance", "Traverse Town and the alliance"),
    text: L(
      "Sora se réveille dans une cité nocturne où échouent les rescapés des mondes détruits. Léon lui explique ce qu’il porte : les créatures noires sont les Sans-cœur, ce que devient un être quand son cœur cède, et la clé qu’il tient est la Keyblade, une arme qui choisit elle-même son porteur et attire autant qu’elle repousse.\n\nDonald et Dingo arrivent en vaisseau Gummi, envoyés par Mickey pour trouver ce porteur. Leur rencontre tourne à la comédie jusqu’à ce que la Chaîne Royale apparaisse devant eux. L’alliance se scelle sur un malentendu confortable : Sora cherche ses amis, ses compagnons cherchent leur roi, et personne ne le dit tout à fait.",
      "Sora wakes in a night-time city where the survivors of destroyed worlds wash up. Leon explains what he is carrying: the black creatures are the Heartless, what a person becomes when their heart gives way, and the key in his hand is the Keyblade, a weapon that picks its own wielder and attracts as much as it repels.\n\nDonald and Goofy arrive by Gummi ship, sent by Mickey to find that wielder. Their meeting plays as comedy until the Kingdom Key appears in front of them. The alliance is sealed on a comfortable misunderstanding: Sora is looking for his friends, his companions are looking for their king, and neither side quite says so.",
    ),
    game: "kingdom-hearts",
    entries: ["traverse-town", "donald", "goofy", "heartless"],
  },
  {
    id: "kairis-heart",
    era: "soras-journey",
    title: L("Le cœur de Kairi et le Sans-cœur de Sora", "Kairi's heart and Sora's Heartless"),
    text: L(
      "Maléfique a réuni six Princesses de Cœur à la Forteresse Oubliée et s’est servie de Riku, à qui elle a promis de rendre Kairi. Riku laisse alors entrer en lui la présence qui se fait appeler Ansem, et perd son corps. Devant la serrure du monde, il manque une septième princesse : c’est Kairi, dont le cœur s’était réfugié dans celui de Sora la nuit de la tempête.\n\nSora se plante dans la poitrine la Keyblade de Cœur pour le lui rendre. Kairi se réveille, il devient un Sans-cœur, et c’est elle qui le reconnaît dans la horde et le ramène à sa forme humaine. La saga vient d’énoncer sa loi non écrite.",
      "Maleficent has gathered six Princesses of Heart at Hollow Bastion and used Riku, whom she promised she would give Kairi back. Riku then lets the presence calling itself Ansem enter him, and loses his body. Before the world's keyhole a seventh princess is missing: it is Kairi, whose heart took shelter in Sora's on the night of the storm.\n\nSora drives the Keyblade of People's Hearts into his own chest to give it back. Kairi wakes, he becomes a Heartless, and it is she who recognises him in the swarm and restores his human shape. The saga has just stated its unwritten law.",
    ),
    game: "kingdom-hearts",
    entries: ["keyblade-of-heart", "sora-heartless", "kairi", "maleficent"],
  },
  {
    id: "door-to-darkness-closed",
    era: "soras-journey",
    title: L("La porte de Kingdom Hearts refermée", "The door to Kingdom Hearts sealed"),
    text: L(
      "Au Bout du Monde, agrégat de débris formé de tous les mondes engloutis, Ansem attend devant une porte monumentale. Il soutient que les ténèbres sont le fond véritable de tout cœur ; vaincu, il ordonne malgré tout que la porte s’ouvre, et ce qui en sort est une lumière insoutenable qui l’efface.\n\nDerrière les battants, pourtant, il y a un océan d’ombre. Sora, Donald et Dingo poussent les vantaux ; deux mains apparaissent de l’autre côté pour les aider, celles de Riku redevenu lui-même et du roi Mickey. Deux Keyblades tournent ensemble et la serrure se referme, laissant Riku et Mickey enfermés dans le Domaine des Ténèbres.",
      "At the End of the World, a mass of debris made of every swallowed world, Ansem waits before a monumental door. He maintains that darkness is the true foundation of every heart; defeated, he still orders the door to open, and what pours out is an unbearable light that erases him.\n\nBehind the panels, however, lies an ocean of shadow. Sora, Donald and Goofy push the doors shut; two hands appear on the far side to help, Riku's, himself again, and King Mickey's. Two Keyblades turn together and the lock closes, leaving Riku and Mickey shut inside the Realm of Darkness.",
    ),
    game: "kingdom-hearts",
    entries: ["end-of-the-world", "mickey", "riku", "kingdom-hearts-heart"],
  },
  {
    id: "castle-oblivion-memories",
    era: "soras-journey",
    when: L("Dans les semaines qui suivent Kingdom Hearts", "In the weeks following Kingdom Hearts"),
    title: L("Le Manoir Oblivion efface la mémoire de Sora", "Castle Oblivion erases Sora's memory"),
    text: L(
      "En suivant Pluto sur une route de campagne, Sora arrive devant un château blanc dont chaque étage se traverse à l’aide de cartes fabriquées avec ses propres souvenirs. Six membres en manteau noir l’y attendent : Marluxia et Larxene veulent en faire leur pantin, Vexen y fabrique un Réplica de Riku, Axel joue son propre jeu.\n\nUne jeune fille en robe blanche, Naminé, réécrit la mémoire de Sora et s’y installe à la place de Kairi. Quand la manipulation est découverte et les conspirateurs éliminés, il ne reste qu’une solution : effacer entièrement ce que Sora a vécu ici pour lui rendre le reste. Il s’endort pour un an dans une capsule, avec Donald et Dingo.",
      "Following Pluto down a country road, Sora arrives at a white castle whose every floor is crossed using cards made from his own memories. Six black-coated members are waiting: Marluxia and Larxene want him as a puppet, Vexen builds a Riku Replica there, Axel plays his own game.\n\nA girl in a white dress, Naminé, rewrites Sora's memory and installs herself in Kairi's place. When the manipulation is uncovered and the conspirators disposed of, only one solution remains: to erase entirely what Sora lived through here in order to give him back the rest. He falls asleep for a year in a pod, with Donald and Goofy.",
    ),
    game: "chain-of-memories",
    entries: ["castle-oblivion", "namine", "marluxia", "riku-replica"],
  },
  {
    id: "roxas-days",
    era: "soras-journey",
    when: L("Pendant le sommeil de Sora", "During Sora's sleep"),
    title: L("Les jours de Roxas et Xion", "The days of Roxas and Xion"),
    text: L(
      "Quand Sora est devenu un Sans-cœur, son corps a produit un Simili. Roxas se réveille sans passé à la Cité du Crépuscule, est enrôlé comme treizième membre de l’Organisation XIII et passe ses journées à récolter des cœurs avec une Keyblade qu’il ne s’explique pas.\n\nIl gagne deux amis : Axel, et une fille encapuchonnée, Xion, arrivée après lui. Le soir, ils s’assoient sur la tour de l’horloge avec une glace à l’eau de mer. C’est la seule chose que ces trois-là possèdent en propre, et le jeu la répète assez pour qu’elle devienne, dans toute la saga, le signe d’une amitié qu’on n’a pas le droit d’avoir.",
      "When Sora became a Heartless, his body produced a Nobody. Roxas wakes with no past in Twilight Town, is enlisted as the thirteenth member of Organization XIII and spends his days harvesting hearts with a Keyblade he cannot account for.\n\nHe gains two friends: Axel, and a hooded girl, Xion, who arrived after him. In the evenings they sit on the clock tower with sea-salt ice cream. It is the only thing the three of them own outright, and the game repeats it often enough that it becomes, across the whole saga, the sign of a friendship one is not entitled to have.",
    ),
    game: "358-2-days",
    entries: ["roxas", "xion", "axel", "sea-salt-ice-cream"],
  },
  {
    id: "xion-erased",
    era: "soras-journey",
    title: L("Xion effacée, Roxas repris", "Xion erased, Roxas taken back"),
    text: L(
      "Xion n’est pas un Simili. C’est une réplique fabriquée à partir des souvenirs de Sora, conçue comme une pièce de rechange, et plus elle vit, plus elle prive Sora de la mémoire dont il a besoin pour se réveiller. Quand elle le comprend, elle demande à Roxas de la détruire.\n\nIl le fait sans savoir ce qu’il fait, et elle disparaît de la mémoire de tous — sauf de la sienne, quelques secondes de trop. Roxas quitte l’Organisation pour comprendre ce qu’il est, se fait rattraper par Riku et s’endort dans une simulation numérique de la Cité du Crépuscule, où DiZ compte le fondre dans Sora pour le réveiller.",
      "Xion is not a Nobody. She is a replica built from Sora's memories, designed as a spare part, and the longer she lives the more she deprives Sora of the memory he needs in order to wake. When she works this out, she asks Roxas to destroy her.\n\nHe does so without understanding what he is doing, and she vanishes from everyone's memory — except his, for a few seconds too long. Roxas leaves the Organization to find out what he is, is caught by Riku, and falls asleep inside a digital simulation of Twilight Town, where DiZ intends to fold him back into Sora to wake him.",
    ),
    game: "358-2-days",
    entries: ["xion", "roxas", "riku", "saix"],
  },
  {
    id: "digital-twilight-town",
    era: "soras-journey",
    when: L("Un an après Chain of Memories", "One year after Chain of Memories"),
    title: L("Les sept derniers jours de Roxas", "Roxas's last seven days"),
    text: L(
      "Dans une Cité du Crépuscule qui n’existe que dans un ordinateur, Roxas passe des vacances d’été avec trois amis qui ne sont pas réels. La simulation se déglingue autour de lui : des mots disparaissent, le temps se fige, un garçon en manteau noir passe sans être vu par les autres.\n\nQuand la vérité tombe, Roxas la reçoit sans révolte et avec une amertume que le jeu ne cherche pas à adoucir : il n’aura vécu que pour être rendu. Il retrouve Sora dans la salle blanche et disparaît en lui. Sora se réveille dans sa capsule, persuadé d’avoir dormi une nuit, sans rien savoir de celui qui vient de lui céder la place.",
      "In a Twilight Town that exists only inside a computer, Roxas spends a summer holiday with three friends who are not real. The simulation comes apart around him: words vanish, time freezes, a boy in a black coat walks past unseen by anyone else.\n\nWhen the truth lands, Roxas takes it without rebellion and with a bitterness the game makes no attempt to soften: he will have lived only to be handed back. He meets Sora in the white room and disappears into him. Sora wakes in his pod convinced he slept for one night, knowing nothing of the boy who has just given up his place.",
    ),
    game: "kingdom-hearts-ii",
    entries: ["roxas", "twilight-town", "namine", "ansem-the-wise"],
  },
  {
    id: "organization-true-goal",
    era: "soras-journey",
    title: L("Le vrai but de l’Organisation XIII", "Organization XIII's real goal"),
    text: L(
      "Sora repart chercher Riku et le roi, et chaque Sans-cœur qu’il abat libère un cœur qui monte vers la lune artificielle du Monde qui n’existe pas. Il travaille pour l’Organisation sans le savoir, et Xemnas le laisse faire.\n\nCe qui se dévoile alors est plus retors que le discours officiel. Xemnas ne cherche pas seulement un cœur pour lui-même : il prépare des réceptacles. Et Ansem le Sage, revenu du Domaine des Ténèbres sous le nom de DiZ, veut détruire ce Kingdom Hearts artificiel par une machine qui explose entre ses mains. Sa dernière parole est un aveu : la haine l’a rendu aussi aveugle que ceux qu’il combattait.",
      "Sora sets off again to find Riku and the king, and every Heartless he cuts down releases a heart that rises towards the artificial moon of The World That Never Was. He is working for the Organization without knowing it, and Xemnas lets him.\n\nWhat comes to light is more convoluted than the official line. Xemnas is not merely after a heart for himself: he is preparing vessels. And Ansem the Wise, back from the Realm of Darkness under the name DiZ, tries to destroy that artificial Kingdom Hearts with a machine that blows up in his hands. His last words are a confession: hatred made him as blind as the people he was fighting.",
    ),
    game: "kingdom-hearts-ii",
    entries: ["xemnas", "organization-xiii", "world-that-never-was", "ansem-the-wise"],
  },
  {
    id: "xemnas-defeated",
    era: "soras-journey",
    title: L("La fin de Xemnas et le retour de Riku", "The end of Xemnas and Riku's return"),
    text: L(
      "Pour échapper à l’Organisation, Riku avait pris l’apparence d’Ansem, le Chercheur des Ténèbres, et vivait sous ce visage sans oser se montrer. C’est en touchant la lumière de Kairi qu’il redevient lui-même. Les deux amis livrent ensemble le dernier combat contre Xemnas dans une cité en ruine.\n\nVainqueurs, ils se retrouvent bloqués sur une plage du Domaine des Ténèbres, sans issue, jusqu’à ce qu’une porte de lumière s’ouvre devant eux. Le retour aux Îles du Destin referme dix-huit mois de séparation, et une lettre du roi, lue sur le sable, annonce déjà que rien n’est terminé.",
      "To escape the Organization, Riku had taken on the appearance of Ansem, Seeker of Darkness, and had been living behind that face without daring to show himself. It is by touching Kairi's light that he becomes himself again. The two friends fight the final battle against Xemnas together in a ruined city.\n\nVictorious, they find themselves stranded on a beach in the Realm of Darkness with no way out, until a door of light opens in front of them. The return to Destiny Islands closes eighteen months of separation, and a letter from the king, read on the sand, already announces that nothing is over.",
    ),
    game: "kingdom-hearts-ii",
    entries: ["xemnas", "riku", "kairi", "world-that-never-was"],
  },
  {
    id: "jiminy-journal",
    era: "soras-journey",
    title: L("Le journal de Jiminy et les cœurs blessés", "Jiminy's journal and the wounded hearts"),
    text: L(
      "Au Château Disney, Jiminy Criquet relit son journal et y trouve une phrase qu’il n’a jamais écrite : leurs souffrances doivent être réparées. Mickey fait numériser le carnet et y envoie une copie de Sora pour enquêter dans les mondes recopiés, rongés par des bugs.\n\nLa réponse arrive à la fin : les cœurs blessés sont ceux de Roxas, de Xion, de Naminé et d’Axel, dont les données conservent la trace. Data-Naminé livre en outre une information capitale, que le vrai Sora ne connaît pas : trois personnes attendent d’être secourues, Terra, Aqua et Ventus, et lui seul peut les atteindre. Mickey l’écrit à Yen Sid.",
      "At Disney Castle, Jiminy Criquet rereads his journal and finds a sentence he never wrote: their hurting must be undone. Mickey has the notebook digitised and sends a copy of Sora inside to investigate the recopied worlds, eaten away by bugs.\n\nThe answer comes at the end: the wounded hearts are those of Roxas, Xion, Naminé and Axel, whose traces the data preserves. Data-Naminé also delivers a decisive piece of information the real Sora does not have: three people are waiting to be rescued, Terra, Aqua and Ventus, and he alone can reach them. Mickey writes it all to Yen Sid.",
    ),
    game: "re-coded",
    entries: ["jiminy-cricket", "datascape", "data-sora", "data-namine"],
  },

  // ─── L’examen et le compte à rebours ──────────────────────────────
  {
    id: "sleeping-worlds-exam",
    era: "mark-of-mastery",
    title: L("L’examen de Maîtrise dans les Mondes Endormis", "The Mark of Mastery in the Sleeping Worlds"),
    text: L(
      "Yen Sid tire de la lettre de Mickey une conclusion pratique : la guerre approche et Sora n’a jamais été formé. Il envoie les deux garçons passer l’Épreuve de Maîtrise dans les mondes qui n’ont jamais été réveillés après leur destruction, ces Mondes Endormis peuplés d’Avale-Rêves.\n\nLa règle du voyage est cruelle : quand l’un s’endort, l’autre se réveille, et les deux ne se croisent jamais. Chacun croit avancer seul dans un même décor, sans voir que sa route est déjà dessinée par quelqu’un d’autre. L’épreuve n’en est pas une : c’est un piège tendu par Xehanort, qui a besoin d’un corps précis.",
      "Yen Sid draws a practical conclusion from Mickey's letter: war is coming and Sora was never trained. He sends the two boys to take the Mark of Mastery exam in the worlds that were never woken after their destruction, the Sleeping Worlds full of Dream Eaters.\n\nThe rule of the journey is cruel: when one falls asleep the other wakes, and the two never meet. Each believes he is moving alone through the same scenery, without seeing that his route was drawn by someone else. The exam is not one: it is a trap laid by Xehanort, who needs one particular body.",
    ),
    game: "dream-drop-distance",
    entries: ["yen-sid", "dream-eaters", "mysterious-tower", "sora"],
  },
  {
    id: "true-organization",
    era: "mark-of-mastery",
    title: L("La Vraie Organisation XIII se dévoile", "The true Organization XIII is revealed"),
    text: L(
      "Au fond du sommeil, Sora est cerné par des figures qui ne devraient plus exister : Xemnas, Ansem, Braig, et un adolescent aux cheveux blancs qui n’est autre que Xehanort jeune, tiré de son époque par un voyage dans le temps que la saga vient d’autoriser.\n\nLe plan complet apparaît enfin. La première Organisation XIII n’était qu’un filet ; la vraie doit être composée de treize réceptacles portant chacun un fragment du cœur de Xehanort. Face à eux, sept lumières. Il ne s’agit pas de gagner une guerre mais de la provoquer, au Nécropole des Keyblades, pour que la χ-blade s’y forge une seconde fois.",
      "Deep in sleep, Sora is surrounded by figures who should no longer exist: Xemnas, Ansem, Braig, and a white-haired teenager who is none other than the young Xehanort, pulled out of his own era by a time travel the saga has just made possible.\n\nThe full plan finally appears. The first Organization XIII was only a net; the true one must consist of thirteen vessels, each carrying a fragment of Xehanort's heart. Facing them, seven lights. The aim is not to win a war but to provoke one, in the Keyblade Graveyard, so that the χ-blade may be forged there a second time.",
    ),
    game: "dream-drop-distance",
    entries: ["organization-xiii", "young-xehanort", "master-xehanort", "xemnas"],
  },
  {
    id: "riku-master",
    era: "mark-of-mastery",
    title: L("Riku devient Maître de la Keyblade", "Riku becomes a Keyblade Master"),
    text: L(
      "Sora, piégé dans le sommeil, est sur le point de devenir le treizième réceptacle. Riku plonge dans son cœur pour l’en tirer et découvre ce qui s’y trouve depuis toujours : Roxas, Xion, Ventus, et la station de vitrail où tout se joue. Lea, redevenu humain, débarque à contretemps et fait échouer le rituel.\n\nYen Sid rend son verdict : Riku est promu Maître de la Keyblade, Sora non. Le garçon accepte la nouvelle en riant, sans amertume, et c’est l’une des plus belles scènes de la série. Mais il a perdu quelque chose dans l’opération, et le prochain jeu commencera sur cet affaiblissement.",
      "Sora, trapped in sleep, is about to become the thirteenth vessel. Riku dives into his heart to pull him out and finds what has always been there: Roxas, Xion, Ventus, and the stained-glass station where everything is decided. Lea, human again, crashes in at the wrong moment and wrecks the ritual.\n\nYen Sid gives his verdict: Riku is promoted to Keyblade Master, Sora is not. The boy takes the news laughing, without bitterness, and it is one of the finest scenes in the series. But he lost something in the process, and the next game will open on that weakness.",
    ),
    game: "dream-drop-distance",
    entries: ["riku", "sora", "yen-sid", "roxas"],
  },
  {
    id: "aqua-in-the-dark",
    era: "mark-of-mastery",
    when: L("Douze ans après Birth by Sleep", "Twelve years after Birth by Sleep"),
    title: L("Douze ans d’Aqua dans le Domaine des Ténèbres", "Aqua's twelve years in the Realm of Darkness"),
    text: L(
      "Pendant que la saga se déroulait ailleurs, Aqua marchait. Le Domaine des Ténèbres lui renvoie les décors de la Contrée du Départ sous forme de châteaux fantômes, la fait revoir ses deux amis en illusion et lui répète qu’elle les a perdus par sa faute. Elle croise le roi Mickey, l’aide à refermer la porte de Kingdom Hearts par l’intérieur, et reste.\n\nElle finit par rencontrer Ansem le Sage, banni comme elle. Le seul espoir qu’elle en tire — un garçon nommé Sora, capable d’atteindre les cœurs — s’effondre lorsqu’une vague de ténèbres l’emporte. Elle cesse alors de lutter, et c’est cette Aqua-là que Kingdom Hearts III retrouvera.",
      "While the saga unfolded elsewhere, Aqua walked. The Realm of Darkness throws the scenery of the Land of Departure back at her as phantom castles, shows her both friends as illusions and keeps telling her she lost them through her own fault. She meets King Mickey, helps him close the door to Kingdom Hearts from the inside, and stays behind.\n\nShe eventually meets Ansem the Wise, banished as she was. The one hope she takes from him — a boy named Sora, able to reach hearts — collapses when a wave of darkness carries her off. She stops fighting then, and it is that Aqua Kingdom Hearts III will find.",
    ),
    game: "0-2-birth-by-sleep-a-fragmentary-passage",
    entries: ["aqua", "realm-of-darkness", "mickey", "ansem-the-wise"],
  },
  {
    id: "seven-guardians",
    era: "mark-of-mastery",
    title: L("Réunir sept gardiens de la lumière", "Gathering seven guardians of light"),
    text: L(
      "Yen Sid pose le problème à voix haute : il faut sept porteurs pour tenir tête aux treize, et on n’en compte pas sept. Riku, Mickey, Sora et Aqua font quatre, à condition de retrouver la dernière. Terra et Ventus, s’ils reviennent, en feraient six.\n\nLes places manquantes sont donc comblées autrement. Lea, l’ancien Axel, obtient une Keyblade parce qu’il a décidé de vouloir quelque chose ; Kairi cesse d’être la fille qu’on protège et part s’entraîner avec Merlin. La saga corrige ici l’un de ses défauts les plus anciens : pour la première fois, ceux que l’on sauvait deviennent ceux qui se battent.",
      "Yen Sid states the problem out loud: seven wielders are needed to stand against thirteen, and there are not seven. Riku, Mickey, Sora and Aqua make four, provided the last of them can be found. Terra and Ventus, if they come back, would make six.\n\nThe missing places are therefore filled another way. Lea, the former Axel, gets a Keyblade because he decided to want something; Kairi stops being the girl who gets protected and goes off to train with Merlin. Here the saga corrects one of its oldest flaws: for the first time, the ones who used to be rescued become the ones who fight.",
    ),
    game: "dream-drop-distance",
    entries: ["guardians-of-light", "lea", "kairi", "yen-sid"],
  },

  // ─── La dernière Guerre des Keyblades ─────────────────────────────
  {
    id: "power-of-waking",
    era: "last-keyblade-war",
    title: L("Sora dépouillé et le pouvoir de l’éveil", "Sora stripped bare and the power of waking"),
    text: L(
      "Le jeu commence sur un héros diminué : Sora a perdu la plus grande partie de sa force dans le piège du sommeil. Yen Sid l’envoie chercher non pas des niveaux mais une notion, le pouvoir de l’éveil, la capacité de rendre un cœur endormi à lui-même.\n\nHercule, à l’Olympe, lui sert de modèle sans le savoir : on ne redevient pas fort, on redevient sûr de ce que l’on veut. Ce pouvoir est ce qui permettra de sauver Aqua, Ventus et Roxas. Le jeu prévient pourtant, très tôt et à plusieurs reprises, qu’il ne s’agit pas d’une clé que l’on tourne à volonté, et que son usage se paie.",
      "The game opens on a diminished hero: Sora lost most of his strength in the sleep trap. Yen Sid sends him looking not for levels but for a notion, the power of waking, the ability to restore a sleeping heart to itself.\n\nHercules, on Olympus, serves as his model without knowing it: one does not become strong again, one becomes sure of what one wants. That power is what will make it possible to save Aqua, Ventus and Roxas. The game warns nonetheless, early and repeatedly, that it is not a key one turns at will, and that using it has to be paid for.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["sora", "power-of-waking", "hercules", "yen-sid"],
  },
  {
    id: "vexen-replicas",
    era: "last-keyblade-war",
    title: L("Vexen change de camp et fabrique des réplicas", "Vexen switches sides and builds replicas"),
    text: L(
      "Recruté par la nouvelle Organisation, Even accepte de reprendre ses travaux de réplication — et travaille aussitôt contre elle. Sous le nom de Vexen, il fabrique des corps vides destinés à accueillir des cœurs, et il en fait passer un à Ienzo au Jardin Radieux.\n\nC’est le geste le plus discret et le plus décisif du jeu. Il donnera un corps à Roxas et à Xion, permettra à Naminé de revenir, et transformera la question des réplicas, jusque-là simple outil de manipulation, en moyen de réparation. Le Réplica de Riku, lui, choisira librement de céder sa place pour que Naminé existe.",
      "Recruited by the new Organization, Even agrees to resume his replication work — and immediately works against it. Under the name Vexen he builds empty bodies meant to receive hearts, and smuggles one to Ienzo at Radiant Garden.\n\nIt is the quietest and most decisive move in the game. It will give Roxas and Xion bodies, allow Naminé to come back, and turn the question of replicas, until then a mere tool of manipulation, into a means of repair. Riku Replica, for his part, will freely choose to give up his place so that Naminé can exist.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["even", "replicas", "riku-replica", "ienzo"],
  },
  {
    id: "aqua-rescued",
    era: "last-keyblade-war",
    title: L("Aqua sauvée, Ventus réveillé, Terra retrouvé", "Aqua rescued, Ventus woken, Terra found"),
    text: L(
      "Riku et Mickey descendent les premiers dans le Domaine des Ténèbres et échouent : ce qui les attaque a le visage d’Aqua, noirci par douze ans d’abandon. Sora les rejoint, ramène la porteuse à elle-même et la ramène à la lumière.\n\nAqua conduit alors Sora au Manoir Oblivion, qu’elle rend à sa forme première : la Contrée du Départ retrouve ses tours, et Ventus se réveille dans le fauteuil où elle l’avait couché. Restent Terra, dont le corps sert toujours de réceptacle à Xehanort, et une promesse vieille de dix ans que trois porte-bonheur en forme d’étoile n’ont jamais cessé de porter.",
      "Riku and Mickey go down into the Realm of Darkness first and fail: what attacks them wears Aqua's face, blackened by twelve abandoned years. Sora joins them, restores the wielder to herself and brings her back to the light.\n\nAqua then leads Sora to Castle Oblivion and returns it to its first shape: the Land of Departure recovers its towers, and Ventus wakes in the chair where she laid him down. What remains is Terra, whose body still serves Xehanort as a vessel, and a ten-year-old promise that three star-shaped charms never stopped carrying.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["aqua", "ventus", "anti-aqua", "land-of-departure"],
  },
  {
    id: "demon-tide",
    era: "last-keyblade-war",
    title: L("Le Nécropole des Keyblades et la Marée Démoniaque", "The Keyblade Graveyard and the Demon Tide"),
    text: L(
      "Les gardiens se rassemblent enfin dans la plaine où tout a commencé. Xehanort les y accueille avec une démonstration : une colonne de Sans-cœur agglomérés, la Marée Démoniaque, balaie la ligne des porteurs et les efface un à un sous les yeux de Sora, jusqu’à ce qu’il reste seul avec Donald et Dingo.\n\nLa défaite est totale et assumée par le jeu, qui laisse Sora échouer au Monde Final, ce lieu de bord où vont ceux qui ne sont ni morts ni vivants. Il y récupère les fragments de lui-même et rebrousse le temps pour reprendre la bataille — premier usage lourd du pouvoir de l’éveil, et première facture.",
      "The guardians finally gather in the plain where everything began. Xehanort welcomes them with a demonstration: a column of massed Heartless, the Demon Tide, sweeps the wielders' line and erases them one by one in front of Sora, until only he, Donald and Goofy are left.\n\nThe defeat is total and the game owns it, letting Sora wash up in the Final World, that border place where those who are neither dead nor alive end up. There he gathers the fragments of himself and turns time back to resume the battle — the first heavy use of the power of waking, and the first invoice.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["keyblade-graveyard", "demon-tide", "the-final-world", "guardians-of-light"],
  },
  {
    id: "thirteen-fall",
    era: "last-keyblade-war",
    title: L("Les treize ténèbres tombent, Luxu se montre", "The thirteen darknesses fall, Luxu shows himself"),
    text: L(
      "La seconde bataille est une succession de comptes réglés. Naminé réveille la Volonté Persistante, Terra reprend son corps et expulse le cœur de Xehanort ; Roxas surgit dans sa nouvelle réplique pour sauver Lea, Xion retrouve la mémoire en entendant son nom, et Saïx redevient Isa. Marluxia et Larxene retrouvent leurs noms d’avant, Lauriam et Elrena.\n\nReste Xigbar. Battu, il se laisse tomber d’une falaise en riant et lâche l’information qui rouvre toute la saga : il n’a jamais été qu’un corps emprunté par Luxu, qui observe cette guerre pour le compte d’un autre maître, et depuis bien plus longtemps que Xehanort.",
      "The second battle is a run of scores settled. Naminé wakes the Lingering Will, Terra takes his body back and expels Xehanort's heart; Roxas surges into his new replica to save Lea, Xion recovers her memory on hearing her name, and Saïx becomes Isa again. Marluxia and Larxene get their earlier names back, Lauriam and Elrena.\n\nThat leaves Xigbar. Beaten, he lets himself drop from a cliff laughing and hands over the information that reopens the whole saga: he was never anything but a body borrowed by Luxu, who has been watching this war on behalf of another master, and for far longer than Xehanort.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["lingering-will", "roxas", "xion", "luxu"],
  },
  {
    id: "kairi-shattered",
    era: "last-keyblade-war",
    title: L("Kairi brisée et la χ-blade forgée", "Kairi shattered and the χ-blade forged"),
    text: L(
      "La perte de ses treize réceptacles ne gêne pas Xehanort : son plan n’exigeait pas leur victoire, seulement le choc des deux camps. Il lui manque une dernière lumière, et Xemnas lui a livré Kairi.\n\nSur un promontoire, face à un Sora désarmé, le vieux maître la brise d’un coup de Keyblade comme on casse un cristal. La χ-blade se referme, entière, forgée non par une fusion mais par un meurtre commis devant celui qui devait l’empêcher. Xehanort ouvre Kingdom Hearts : un cœur immense s’allume au-dessus du Nécropole des Keyblades, la lumière que tous les épisodes cherchaient depuis le premier.",
      "Losing his thirteen vessels does not trouble Xehanort: his plan never required their victory, only the clash of the two sides. He is short one last light, and Xemnas has delivered Kairi to him.\n\nOn a promontory, facing a disarmed Sora, the old master shatters her with a stroke of his Keyblade the way one breaks a crystal. The χ-blade closes, whole, forged not by a fusion but by a murder committed in front of the person meant to prevent it. Xehanort opens Kingdom Hearts: an immense heart lights up above the Keyblade Graveyard, the light every entry has been chasing since the first.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["kairi", "chi-blade", "master-xehanort", "kingdom-hearts-heart"],
  },
  {
    id: "scala-final-battle",
    era: "last-keyblade-war",
    title: L("Scala ad Caelum et la fin de Xehanort", "Scala ad Caelum and the end of Xehanort"),
    text: L(
      "Le vieil homme se retire dans la ville blanche où il a été formé soixante ans plus tôt, et Sora l’y suit avec Donald et Dingo. La cité se replie et se déplie autour d’eux tandis que Xehanort, en armure, disperse des répliques de lui-même dans les rues.\n\nLes gardiens survivants rejoignent Sora, guidés par le cœur de Kairi. Vaincu, Xehanort maintient encore que le monde méritait d’être remis à zéro ; c’est le cœur d’Eraqus, logé dans celui de Terra depuis Birth by Sleep, qui vient le chercher et lui reproche d’avoir voulu réinitialiser une partie qu’il n’avait pas fini de jouer. Sora prend la χ-blade et referme Kingdom Hearts.",
      "The old man withdraws to the white city where he was trained sixty years earlier, and Sora follows him there with Donald and Goofy. The city folds and unfolds around them while Xehanort, in armour, scatters replicas of himself through the streets.\n\nThe surviving guardians join Sora, guided by Kairi's heart. Defeated, Xehanort still maintains that the world deserved to be reset; it is Eraqus's heart, lodged in Terra's since Birth by Sleep, that comes for him and reproaches him for wanting to reset a game he had not finished playing. Sora takes the χ-blade and closes Kingdom Hearts.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["scala-ad-caelum", "armored-xehanort", "eraqus", "master-xehanort"],
  },
  {
    id: "sora-vanishes",
    era: "last-keyblade-war",
    title: L("Sora s’efface sur la plage", "Sora fades away on the beach"),
    text: L(
      "Il manque Kairi, brisée sur le promontoire. Sora refuse de la laisser où le coup l’a envoyée, et Ansem le Sage comme Yen Sid l’avertissent explicitement : employer le pouvoir de l’éveil pour ramener quelqu’un depuis l’autre côté a un prix. Il part quand même.\n\nIl la retrouve, la ramène, et la dernière scène montre tout le monde réuni sur le sable des Îles du Destin. Puis, sans un bruit et sans explication, Sora s’efface à côté de Kairi qui lui tenait la main. Ceux qui ont mis dix-sept ans à se rassembler assistent, impuissants, à la disparition de celui qui les a tous ramenés.",
      "Kairi is missing, shattered on the promontory. Sora refuses to leave her where the blow sent her, and both Ansem the Wise and Yen Sid warn him explicitly: using the power of waking to bring someone back from the other side has a price. He goes anyway.\n\nHe finds her, brings her back, and the last scene shows everyone gathered on the sand of Destiny Islands. Then, without a sound and without explanation, Sora fades away beside the Kairi who was holding his hand. The people who took seventeen years to gather can only watch the disappearance of the one who brought them all back.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["sora", "power-of-waking", "kairi", "destiny-islands"],
  },

  // ─── Quadratum et l’après ─────────────────────────────────────────
  {
    id: "kairi-asleep",
    era: "quadratum-era",
    title: L("Kairi endormie au Jardin Radieux", "Kairi asleep at Radiant Garden"),
    text: L(
      "Faute de savoir où Sora est parti, on décide de chercher à l’intérieur. Kairi accepte d’être endormie au Jardin Radieux, sous la surveillance d’Ansem le Sage, d’Even et d’Ienzo, pendant que Naminé descend dans sa mémoire et en relit chaque strate à la recherche d’un indice.\n\nLa méthode a ses limites : un souvenir n’est pas une adresse, et ce que Kairi revoit ne dit pas où se trouve celui dont elle se souvient. Riku, lui, refuse d’attendre le résultat. La séquence sert d’épilogue à la Saga des Ténèbres et de sas vers la suivante, sur un ton de veille plutôt que d’aventure.",
      "With no way of knowing where Sora went, the decision is to search inside instead. Kairi agrees to be put to sleep at Radiant Garden, watched over by Ansem the Wise, Even and Ienzo, while Naminé descends into her memory and rereads every layer of it looking for a clue.\n\nThe method has limits: a memory is not an address, and what Kairi sees again does not say where the person she remembers can be found. Riku, for his part, refuses to wait for the result. The sequence works as an epilogue to the Dark Seeker Saga and an airlock into the next, in the register of a vigil rather than an adventure.",
    ),
    game: "melody-of-memory",
    entries: ["kairi", "namine", "radiant-garden", "ienzo"],
  },
  {
    id: "xehanort-letter",
    era: "quadratum-era",
    title: L("La lettre : Xehanort n’agissait pas seul", "The letter: Xehanort was not acting alone"),
    text: L(
      "Une lettre laissée par le Maître Xehanort confirme ce que la chute de Xigbar avait laissé entendre. Le vieil homme savait qu’il servait le dessein d’un autre, et il l’a accepté ; sa guerre n’était qu’une étape dans un plan plus ancien, dont la boîte noire et l’œil du Maître des Maîtres sont les instruments.\n\nCette lettre est le pivot officiel entre les deux grands arcs de la série. L’ennemi n’est plus un homme que l’on peut vaincre au sommet d’une tour, mais une intention qui traverse les siècles. Riku part sur cette base, sans piste, chercher Sora là où il devine qu’il se trouve.",
      "A letter left by Master Xehanort confirms what Xigbar's fall had implied. The old man knew he was serving someone else's design, and he accepted it; his war was only a stage in an older plan, whose instruments are the black box and the Master of Masters' eye.\n\nThat letter is the official hinge between the series' two great arcs. The enemy is no longer a man who can be beaten at the top of a tower, but an intention running across the centuries. Riku sets off on that basis, with no lead, to look for Sora where he guesses he must be.",
    ),
    game: "melody-of-memory",
    entries: ["master-xehanort", "luxu", "black-box", "riku"],
  },
  {
    id: "sora-quadratum",
    era: "quadratum-era",
    title: L("Le réveil à Quadratum", "Waking in Quadratum"),
    text: L(
      "Sora reprend conscience avec Donald et Dingo dans une ville nocturne aux carrefours encombrés et aux façades d’écrans, qui ne ressemble à aucun monde de la saga. Ce lieu porte un nom, Quadratum, et il est présenté comme un monde réaliste, un ailleurs qui n’appartient pas à la carte que la Keyblade sait ouvrir.\n\nLe rapport exact entre Quadratum et les mondes que l’on connaît reste ouvert : la série laisse volontairement indécis lequel des deux plans serait le rêve de l’autre. Ce qui est établi, en revanche, c’est que Sora y est arrivé parce qu’il a payé le pouvoir de l’éveil, et qu’il n’en a pas la clé du retour.",
      "Sora comes to with Donald and Goofy in a night-time city of crowded crossings and screen-covered façades, unlike any world in the saga. The place has a name, Quadratum, and it is presented as a realistic world, an elsewhere that belongs to no map the Keyblade knows how to open.\n\nThe exact relationship between Quadratum and the familiar worlds is left open: the series deliberately declines to settle which of the two planes would be the other's dream. What is established is that Sora arrived there because he paid for the power of waking, and that he holds no key to the way back.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["quadratum", "sora", "power-of-waking"],
  },
  {
    id: "yozora-duel",
    era: "quadratum-era",
    title: L("Sora face à Yozora, Riku de l’autre côté", "Sora against Yozora, Riku on the other side"),
    text: L(
      "Un jeune homme armé attend Sora sous la pluie et les néons : Yozora, le héros de Verum Rex, ce jeu d’arcade que Sora avait essayé sans y penser dans la Boîte à Jouets. Le personnage de fiction est ici parfaitement réel, il connaît Sora et affirme qu’on l’a chargé de le sauver — sans dire de quoi ni pour le compte de qui.\n\nLe duel se conclut sans que rien ne soit expliqué, sur l’ambiguïté de savoir lequel des deux appartient au monde réel. Une scène supplémentaire montre Riku éveillé dans la même ville : la promesse faite au Jardin Radieux a été tenue, et la recherche a commencé.",
      "An armed young man waits for Sora under rain and neon: Yozora, the hero of Verum Rex, the arcade game Sora once tried without a second thought in the Toy Box. The fictional character is perfectly real here, he knows Sora, and he claims he has been charged with saving him — without saying from what or on whose behalf.\n\nThe duel ends with nothing explained, on the ambiguity of which of the two belongs to the real world. A further scene shows Riku awake in the same city: the promise made at Radiant Garden has been kept, and the search has begun.",
    ),
    game: "kingdom-hearts-iii",
    entries: ["yozora", "quadratum", "riku"],
  },
  {
    id: "quadratum-darkside",
    era: "quadratum-era",
    title: L("Un Darkside sur les toits de la ville", "A Darkside over the city rooftops"),
    text: L(
      "La première bande-annonce de Kingdom Hearts IV, dévoilée le 10 avril 2022, montre Sora réveillé dans un appartement de Quadratum, plus grand et plus âgé, avant qu’un Darkside colossal ne s’installe entre les immeubles. Le combat se déroule dans des rues de ville moderne, sur les toits et le long des façades.\n\nCe choix a valeur de déclaration : les Sans-cœur les plus anciens de la série passent d’un décor de conte à une métropole ordinaire. La saga reprend son motif fondateur — l’ombre géante du tout premier rêve de Sora — et le déplace dans un monde qui n’était pas censé le connaître.",
      "The first Kingdom Hearts IV trailer, unveiled on 10 April 2022, shows Sora waking in an apartment in Quadratum, taller and older, before a colossal Darkside settles in between the buildings. The fight plays out in modern city streets, across rooftops and along façades.\n\nThe choice amounts to a statement: the series' oldest Heartless move from a storybook setting into an ordinary metropolis. The saga takes up its founding image — the giant shadow from Sora's very first dream — and relocates it in a world that was never supposed to know it.",
    ),
    game: "kingdom-hearts-iv",
    entries: ["quadratum", "darkside", "sora"],
  },
  {
    id: "strelitzia-returns",
    era: "quadratum-era",
    title: L("Strelitzia vient chercher Sora", "Strelitzia comes to find Sora"),
    text: L(
      "À la fin de la même bande-annonce, une jeune fille aux cheveux roux rejoint Sora sur un toit et lui annonce qu’elle est venue le chercher. C’est Strelitzia, la porteuse assassinée dans une ruelle de Ville de l'Aube des siècles plus tôt, et sa présence à Quadratum est le lien le plus explicite jamais posé entre l’Âge des Fées et la suite de la saga.\n\nLe jeu n’est pas sorti, et l’on ignore comment elle est arrivée là, ce qu’elle sait et qui l’envoie. Sa réapparition rouvre l’enquête d’Union χ au lieu de la clore : elle confirme que le meurtre non résolu de l’Âge des Fées est encore, dans la chronologie de la série, une affaire en cours.",
      "At the end of the same trailer, a red-haired girl joins Sora on a rooftop and tells him she has come to find him. This is Strelitzia, the wielder murdered in a Daybreak Town alley centuries earlier, and her presence in Quadratum is the most explicit link ever drawn between the Age of Fairy Tales and the rest of the saga.\n\nThe game is not out, and how she got there, what she knows and who sent her all remain unknown. Her return reopens Union χ's investigation rather than closing it: it confirms that the unsolved murder of the Age of Fairy Tales is, in the series' chronology, still an open case.",
    ),
    game: "kingdom-hearts-iv",
    entries: ["strelitzia", "quadratum", "sora"],
  },
];
