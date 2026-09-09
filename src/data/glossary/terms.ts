import type { LocalizedText } from "@/data/games";
import type { GlossaryTerm } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Glossaire de la saga : les mots que Kingdom Hearts emploie sans jamais
 * vraiment les définir, expliqués pour quelqu'un qui découvre ou qui a oublié.
 * La liste est triée par ordre alphabétique du terme français.
 */
export const terms: GlossaryTerm[] = [
  {
    id: "age-des-fees",
    term: L("Âge des Fées", "Age of Fairy Tales"),
    en: "Age of Fairy Tales",
    category: "other",
    short: L(
      "L’époque la plus ancienne de la saga, où tous les mondes n’en formaient qu’un seul, éclairé par une lumière encore intacte.",
      "The earliest era of the saga, when all worlds were still one, lit by a light that had not yet been broken.",
    ),
    text: L(
      "L’Âge des Fées désigne le passé lointain raconté par Kingdom Hearts χ, Union χ et Dark Road. À cette époque, il n’existe pas encore de mondes séparés : un seul monde, baigné par la lumière de Kingdom Hearts, que la χ-blade protège. Des Porteurs de Keyblade y sont formés par milliers, répartis en Unions par les Prophètes.\n\nCet âge n’est pas un décor nostalgique : c’est la matrice de tout le reste. La convoitise autour de la lumière y déclenche la Guerre des Keyblades, qui brise le monde unique en une multitude de mondes isolés les uns des autres. Les Sans-cœur, les murs entre les mondes, l’existence même du vaisseau Gummi découlent de cette rupture. Les épisodes modernes passent leur temps à en déterrer les vestiges : le Livre des Prophéties, la boîte noire, Scala ad Caelum.",
      "The Age of Fairy Tales is the distant past told in Kingdom Hearts χ, Union χ and Dark Road. Back then there were no separate worlds: a single world, bathed in the light of Kingdom Hearts and guarded by the χ-blade. Keyblade wielders were trained by the thousand and split into Unions by the Foretellers.\n\nThis era is not nostalgic set dressing: it is the seed of everything else. Greed for the light triggers the Keyblade War there, shattering the single world into a multitude of worlds cut off from one another. The Heartless, the walls between worlds, the very need for a Gummi ship all follow from that break. The modern games spend their time digging up its remains: the Book of Prophecies, the black box, Scala ad Caelum.",
    ),
    related: ["guerre-des-keyblades", "prophetes", "unions", "livre-des-propheties"],
  },
  {
    id: "avale-reves",
    term: L("Avale-Rêves", "Dream Eaters"),
    en: "Dream Eaters",
    category: "creature",
    short: L(
      "Créatures des Mondes Endormis qui se nourrissent de rêves ; les Esprits protègent les dormeurs, les Cauchemars les dévorent.",
      "Creatures of the Sleeping Worlds that feed on dreams: Spirits protect sleepers, Nightmares devour them.",
    ),
    text: L(
      "Les Avale-Rêves apparaissent dans Dream Drop Distance, où Sora et Riku parcourent des mondes restés endormis depuis la première guerre contre les Sans-cœur. Dans ces mondes, ni Sans-cœur ni Similis ne peuvent exister : les Avale-Rêves y jouent leur rôle. Ils se divisent en deux familles clairement opposées, les Esprits et les Cauchemars, reconnaissables à leur emblème et à leurs couleurs.\n\nLeur particularité est mécanique autant que narrative : le joueur fabrique lui-même ses Esprits à partir de matériaux récoltés, les élève, les caresse, débloque leurs capacités sur un tableau de compétences. Ils remplacent Donald et Dingo comme équipiers pendant tout le jeu. C’est le seul épisode où les monstres ordinaires deviennent des compagnons à part entière, et cette ambiguïté — le même peuple donne les alliés et les ennemis — est exactement le sujet du jeu.",
      "Dream Eaters appear in Dream Drop Distance, where Sora and Riku travel through worlds that stayed asleep after the first war against the Heartless. In those worlds neither Heartless nor Nobodies can exist: Dream Eaters take their place. They split into two clearly opposed families, Spirits and Nightmares, told apart by their emblem and their colours.\n\nTheir quirk is as much mechanical as narrative: the player builds their own Spirits from harvested materials, raises them, pets them, unlocks their abilities on an ability board. They replace Donald and Goofy as party members for the whole game. It is the only entry where ordinary monsters become full companions, and that ambiguity — one species supplying both allies and enemies — is exactly what the game is about.",
    ),
    entry: "dream-eaters",
    related: ["esprits", "cauchemars", "mondes-endormis", "drop"],
  },
  {
    id: "boite-noire",
    term: L("Boîte noire", "Black box"),
    en: "Black box",
    category: "weapon",
    short: L(
      "Coffret scellé confié par le Maître des Maîtres à son disciple Luxu, dont le contenu n’a jamais été montré.",
      "A sealed box entrusted by the Master of Masters to his apprentice Luxu, whose contents have never been shown.",
    ),
    text: L(
      "La boîte noire est l’objet le plus obstinément mystérieux de la saga. Avant de disparaître, le Maître des Maîtres charge Luxu de la transporter à travers les âges sans jamais l’ouvrir, en se réincarnant de corps en corps pour tenir la mission. Elle traverse ainsi l’Âge des Fées, la Guerre des Keyblades et toute l’ère de Xehanort, portée par celui que l’on connaît sous le nom de Xigbar.\n\nCe qu’elle contient reste inconnu : les jeux se contentent d’indices contradictoires, et plusieurs personnages — Maléfique et Pat en tête — la cherchent activement dans Kingdom Hearts III sans savoir eux-mêmes pourquoi. Le film Back Cover en fait le cœur de son intrigue sans rien révéler. C’est un ressort assumé de suspense à long terme, laissé ouvert pour les épisodes à venir.",
      "The black box is the saga's most stubbornly mysterious object. Before vanishing, the Master of Masters charges Luxu with carrying it across the ages without ever opening it, body-hopping through host after host to keep the mission alive. It therefore crosses the Age of Fairy Tales, the Keyblade War and the whole Xehanort era, borne by the man known as Xigbar.\n\nWhat it holds is unknown: the games offer only contradictory hints, and several characters — Maleficent and Pete foremost — actively hunt it in Kingdom Hearts III without knowing why themselves. The film Back Cover makes it the centre of its plot while revealing nothing. It is an openly acknowledged long-term hook, left open for the entries still to come.",
    ),
    entry: "black-box",
    related: ["age-des-fees", "livre-des-propheties", "prophetes"],
  },
  {
    id: "cartes-de-souvenirs",
    term: L("Cartes de souvenirs", "Memory cards"),
    en: "Cards",
    category: "weapon",
    short: L(
      "Cartes créées à partir des souvenirs de celui qui les tient, seul moyen de faire apparaître les salles du Manoir Oblivion.",
      "Cards drawn from their holder's memories, the only way to conjure the rooms of Castle Oblivion.",
    ),
    text: L(
      "Dans Chain of Memories, le Manoir Oblivion est un bâtiment vide : il ne prend forme que lorsqu’un visiteur ouvre une porte avec une carte. Les cartes de monde recréent, à partir des souvenirs de Sora, des versions approximatives d’Agrabah, d’Halloween Town ou des Îles du Destin ; les cartes de salle décident de ce qu’on y trouve, du combat à l’objet rare.\n\nLe même principe gouverne les affrontements : tout, attaques, magies et invocations, passe par des cartes que l’on joue en temps réel, avec des valeurs numériques permettant de briser l’attaque adverse. Le jeu transforme ainsi sa mécanique en argument narratif : Sora avance dans un château fait de ses propres souvenirs, qui s’effacent au fur et à mesure qu’il monte. La perte de mémoire n’est pas un rebondissement, c’est le système de jeu.",
      "In Chain of Memories, Castle Oblivion is an empty building: it only takes shape when a visitor opens a door with a card. World cards rebuild rough versions of Agrabah, Halloween Town or the Destiny Islands out of Sora's memories; room cards decide what waits inside, from a fight to a rare item.\n\nThe same principle governs combat: attacks, spells and summons all run through cards played in real time, with numeric values that let you break an opponent's move. The game turns its mechanic into an argument: Sora climbs a castle made of his own memories, which fade as he rises. Memory loss is not a twist here, it is the system.",
    ),
    related: ["manoir-oblivion", "memoire", "replica"],
  },
  {
    id: "cauchemars",
    term: L("Cauchemars", "Nightmares"),
    en: "Nightmare Dream Eaters",
    category: "creature",
    short: L(
      "Les Avale-Rêves hostiles : ils dévorent les rêves des mondes endormis et servent de monstres ordinaires dans Dream Drop Distance.",
      "The hostile Dream Eaters: they devour the dreams of sleeping worlds and serve as the standard enemies of Dream Drop Distance.",
    ),
    text: L(
      "Les Cauchemars sont la moitié sombre des Avale-Rêves, marqués par un emblème dentelé aux teintes violettes. Là où les Esprits protègent, eux consomment : ils s’installent dans les Mondes Endormis et empêchent leurs cœurs de se réveiller, ce qui explique que ces mondes soient restés suspendus si longtemps.\n\nXehanort les utilise sans scrupule. Le voyage de Sora et Riku est en réalité une épreuve manipulée, et les Cauchemars y servent à épuiser Sora, à le pousser vers le sommeil et à le préparer à devenir un réceptacle. Le jeu tire aussi de cette famille plusieurs de ses boss, dont l’Armure de Ventus Cauchemar. Un Esprit vaincu peut d’ailleurs se retourner : la frontière entre les deux familles reste poreuse, ce qui rejoint le thème du jeu, celui d’un rêve dont on ne sait jamais à qui il appartient.",
      "Nightmares are the dark half of the Dream Eaters, marked by a jagged emblem in purple tones. Where Spirits protect, they consume: they settle into the Sleeping Worlds and keep their hearts from waking, which is why those worlds stayed suspended for so long.\n\nXehanort uses them without scruple. Sora and Riku's journey is in truth a rigged exam, and the Nightmares are there to wear Sora down, push him toward sleep and prepare him to become a vessel. The game also draws several bosses from the family, among them the Armored Ventus Nightmare. A Spirit can even turn: the border between the two families stays porous, which suits a game about a dream whose owner is never certain.",
    ),
    entry: "dream-eaters",
    related: ["avale-reves", "esprits", "mondes-endormis", "receptacle"],
  },
  {
    id: "chaine-royale",
    term: L("Chaîne Royale", "Kingdom Key"),
    en: "Kingdom Key",
    category: "weapon",
    short: L(
      "La Keyblade emblématique de Sora, argentée à poignée dorée, celle qui apparaît sur toutes les jaquettes de la série.",
      "Sora's signature Keyblade, silver with a golden guard, the one that appears on every cover of the series.",
    ),
    text: L(
      "La Chaîne Royale est la Keyblade que Sora reçoit au tout début du premier jeu, alors que les Îles du Destin sont englouties. Sa silhouette est devenue le logo officieux de la saga : une lame argentée, une garde dorée, un porte-clés en tête de Mickey au bout d’une chaîne.\n\nElle sert aussi de repère mécanique. Une Keyblade se personnalise en changeant son porte-clés : l’arme prend alors la forme, les statistiques et parfois les capacités liées à ce souvenir précis. La Chaîne Royale est la forme neutre, celle vers laquelle on revient toujours. Il en existe une variante blanche, la Chaîne Royale D, portée par le roi Mickey et venue du Domaine des Ténèbres. Kingdom Hearts III va plus loin en lui donnant des transformations en cours de combat, sans jamais renoncer à sa silhouette d’origine.",
      "The Kingdom Key is the Keyblade Sora receives at the very start of the first game, as the Destiny Islands are swallowed. Its silhouette has become the saga's unofficial logo: a silver shaft, a golden guard, a Mickey-head keychain dangling from a chain.\n\nIt also works as a mechanical baseline. A Keyblade is customised by swapping its keychain: the weapon then takes the shape, statistics and sometimes the abilities tied to that particular memory. The Kingdom Key is the neutral form, the one you always return to. A white variant exists, the Kingdom Key D, wielded by King Mickey and coming from the Realm of Darkness. Kingdom Hearts III goes further by giving it mid-battle transformations, without ever abandoning its original outline.",
    ),
    entry: "kingdom-key",
    related: ["keyblade", "porte-bonheur", "porteur-de-keyblade"],
  },
  {
    id: "chambre-de-l-eveil",
    term: L("Chambre de l’Éveil", "Chamber of Waking"),
    en: "Chamber of Waking",
    category: "place",
    short: L(
      "Salle secrète créée par Aqua au fond du Manoir Oblivion pour y cacher le corps endormi de Ventus.",
      "A secret room Aqua created deep inside Castle Oblivion to hide Ventus's sleeping body.",
    ),
    text: L(
      "À la fin de Birth by Sleep, Ventus a perdu son cœur et son corps ne se réveille plus. Aqua transforme alors la Contrée du Départ en Manoir Oblivion, un château labyrinthique dont elle seule connaît la structure, et y installe une pièce introuvable : la Chambre de l’Éveil, où elle laisse son ami assis sur un trône, en attendant qu’il revienne.\n\nLa chambre devient un objectif recherché pendant des années. L’Organisation XIII s’installe justement dans ce château sans réussir à la trouver ; Xehanort veut Ventus pour ses propres plans. Ce n’est que dans Kingdom Hearts III, quand Aqua est enfin sauvée et redonne au château sa forme d’origine, que la chambre s’ouvre et que Sora peut ramener le cœur de Ventus dans son corps. Elle a un pendant symétrique, la Chambre du Repos, qui abrite la Volonté Persistante de Terra.",
      "At the end of Birth by Sleep, Ventus has lost his heart and his body no longer wakes. Aqua turns the Land of Departure into Castle Oblivion, a maze whose layout only she knows, and places inside it a room nobody can find: the Chamber of Waking, where she leaves her friend seated on a throne, waiting for him to return.\n\nThe chamber becomes a prize for years. Organization XIII settles into that very castle without managing to find it; Xehanort wants Ventus for his own plans. Only in Kingdom Hearts III, once Aqua is rescued and restores the castle to its original shape, does the chamber open so Sora can return Ventus's heart to his body. It has a symmetrical counterpart, the Chamber of Repose, which shelters Terra's Lingering Will.",
    ),
    related: ["manoir-oblivion", "contree-du-depart", "coeur", "receptacle"],
  },
  {
    id: "chercheurs-des-tenebres",
    term: L("Chercheurs des Ténèbres", "Seekers of Darkness"),
    en: "Seekers of Darkness",
    category: "group",
    short: L(
      "Les treize porteurs de ténèbres que Xehanort doit réunir pour affronter sept gardiens de la lumière et reforger la χ-blade.",
      "The thirteen bearers of darkness Xehanort must gather to face seven guardians of light and reforge the χ-blade.",
    ),
    text: L(
      "Reforger la χ-blade suppose de rejouer la Guerre des Keyblades en modèle réduit : sept cœurs de pure lumière contre treize cœurs de ténèbres. Les Chercheurs des Ténèbres sont ce second camp, et Xehanort passe la saga entière à le constituer, en fragmentant son propre cœur et en plaçant chaque éclat dans un réceptacle différent.\n\nLe recrutement explique une bonne partie des zones d’ombre de la série : le Xehanort jeune ramené du passé, l’Ansem Chercheur des Ténèbres, Xemnas, Xigbar, Saïx, Vanitas et plusieurs Réplicas occupent chacun un siège. Des candidats prévus s’échappent, dont Sora, Riku et Roxas, ce qui oblige Xehanort à improviser jusqu’au dernier moment. Le groupe est souvent confondu avec la Vraie Organisation XIII, qui en est la mise en scène concrète dans Dream Drop Distance et Kingdom Hearts III.",
      "Reforging the χ-blade means replaying the Keyblade War in miniature: seven hearts of pure light against thirteen hearts of darkness. The Seekers of Darkness are that second camp, and Xehanort spends the whole saga assembling it, splitting his own heart and planting each shard in a different vessel.\n\nThe recruitment drive explains much of the series' murk: the young Xehanort pulled from the past, Ansem Seeker of Darkness, Xemnas, Xigbar, Saïx, Vanitas and several Replicas each fill a seat. Intended candidates slip away, Sora, Riku and Roxas among them, forcing Xehanort to improvise until the last minute. The group is often confused with the True Organization XIII, which is its concrete staging in Dream Drop Distance and Kingdom Hearts III.",
    ),
    related: ["vraie-organisation-xiii", "gardiens-de-la-lumiere", "chi-blade", "receptacle"],
  },
  {
    id: "chi-blade",
    term: L("χ-blade", "χ-blade"),
    en: "χ-blade",
    category: "weapon",
    short: L(
      "L’arme originelle qui protégeait Kingdom Hearts ; toutes les Keyblades n’en sont que des copies imparfaites.",
      "The original weapon that guarded Kingdom Hearts; every Keyblade is only an imperfect copy of it.",
    ),
    text: L(
      "La χ-blade — prononcée « key-blade », la lettre grecque khi se lisant « ki » — est l’arme qui gardait Kingdom Hearts à l’Âge des Fées. La Guerre des Keyblades la brise en vingt fragments, sept de lumière et treize de ténèbres, et laisse Kingdom Hearts hors d’atteinte.\n\nOn ne la fabrique pas : on la reforge, et de deux manières seulement. Soit en fusionnant un cœur de pure lumière et son opposé, ce que Xehanort tente avec Ventus et Vanitas dans Birth by Sleep ; soit en faisant s’affronter sept gardiens de la lumière et treize chercheurs des ténèbres, ce qu’il obtient enfin dans Kingdom Hearts III. Elle est donc moins une arme qu’une clé : celle qui ouvre Kingdom Hearts. Le χ de son nom parcourt d’ailleurs toute la série, jusqu’aux titres des épisodes consacrés au passé.",
      "The χ-blade — pronounced “key-blade”, the Greek letter chi being read “kee” — is the weapon that guarded Kingdom Hearts in the Age of Fairy Tales. The Keyblade War shatters it into twenty fragments, seven of light and thirteen of darkness, leaving Kingdom Hearts out of reach.\n\nIt cannot be made, only reforged, and in two ways alone. Either by fusing a heart of pure light with its opposite, which Xehanort attempts with Ventus and Vanitas in Birth by Sleep; or by pitting seven guardians of light against thirteen seekers of darkness, which he finally achieves in Kingdom Hearts III. It is therefore less a weapon than a key: the one that opens Kingdom Hearts. The χ in its name runs through the whole series, right into the titles of the entries devoted to the past.",
    ),
    entry: "chi-blade",
    related: ["keyblade", "kingdom-hearts", "guerre-des-keyblades", "chercheurs-des-tenebres"],
  },
  {
    id: "cimetiere-des-keyblades",
    term: L("Nécropole des Keyblades", "Keyblade Graveyard"),
    en: "Keyblade Graveyard",
    category: "place",
    short: L(
      "Plaine désolée hérissée de milliers de Keyblades plantées dans le sol, vestige de la Guerre des Keyblades.",
      "A desolate plain bristling with thousands of Keyblades stuck in the ground, the remains of the Keyblade War.",
    ),
    text: L(
      "Le Nécropole des Keyblades est ce qu’il reste du champ de bataille où la Guerre des Keyblades s’est achevée. Chaque arme plantée dans la poussière appartenait à un porteur mort ; le vent, les ravins et le ciel jaune en font le paysage le plus hostile de la saga, un lieu sans habitants et sans monde à sauver.\n\nSa fonction narrative est d’être le point de rendez-vous des grands affrontements. Birth by Sleep s’y termine avec la confrontation de Terra, Aqua et Ventus contre Xehanort et Vanitas. Kingdom Hearts III y ramène tout le monde pour la bataille finale contre la Vraie Organisation XIII, avec une armée de Sans-cœur en guise de comité d’accueil. Rien n’y pousse et rien n’y change : c’est un décor conçu pour rappeler que la même guerre recommence indéfiniment.",
      "The Keyblade Graveyard is what remains of the battlefield where the Keyblade War ended. Every weapon planted in the dust belonged to a dead wielder; the wind, the canyons and the yellow sky make it the saga's most hostile landscape, a place with no inhabitants and no world left to save.\n\nIts narrative job is to be the meeting point for the great confrontations. Birth by Sleep ends there with Terra, Aqua and Ventus facing Xehanort and Vanitas. Kingdom Hearts III brings everyone back for the final battle against the True Organization XIII, with an army of Heartless as the welcoming party. Nothing grows there and nothing changes: it is a setting built to remind you that the same war keeps starting over.",
    ),
    entry: "keyblade-graveyard",
    related: ["guerre-des-keyblades", "keyblade", "vraie-organisation-xiii", "gardiens-de-la-lumiere"],
  },
  {
    id: "coeur",
    term: L("Cœur", "Heart"),
    en: "Heart",
    category: "heart",
    short: L(
      "Dans Kingdom Hearts, le cœur n’est pas un organe mais ce qui fait exister un être, un objet ou un monde entier.",
      "In Kingdom Hearts the heart is not an organ but the thing that makes a person, an object or an entire world exist.",
    ),
    text: L(
      "Tout part de là. Un cœur, dans la saga, est le siège des émotions, des souvenirs et de l’identité ; il s’oppose au corps, qui n’est qu’une enveloppe, et à l’âme, qui l’anime. Les êtres vivants en possèdent un, mais aussi les mondes eux-mêmes, ce qui explique qu’un monde puisse être « dévoré » ou « refermé ».\n\nCe découpage produit toute la mécanique de la série. Un cœur qui cède aux ténèbres devient un Sans-cœur ; le corps et l’âme abandonnés forment un Simili. Un cœur peut se réfugier dans un autre, s’y endormir, se fragmenter, se transmettre par les liens d’amitié. C’est aussi pour cela que les personnages parlent sans cesse de « connexions » : dans cet univers, l’attachement n’est pas une métaphore, c’est un mécanisme physique qui permet de retrouver, de réveiller ou de reconstruire quelqu’un.",
      "Everything starts here. A heart, in this saga, is the seat of emotions, memories and identity; it stands against the body, a mere shell, and the soul, which animates it. Living beings have one, but so do worlds themselves, which is why a world can be “devoured” or “sealed”.\n\nThat division produces the whole machinery of the series. A heart that yields to darkness becomes a Heartless; the abandoned body and soul form a Nobody. A heart can take refuge inside another, fall asleep there, fragment, or pass along bonds of friendship. It is also why the characters talk endlessly about “connections”: in this universe attachment is not a metaphor but a physical mechanism that lets you find, wake or rebuild someone.",
    ),
    entry: "heart-body-soul",
    related: ["tenebres", "lumiere", "sans-coeur", "simili"],
  },
  {
    id: "contree-du-depart",
    term: L("Contrée du Départ", "Land of Departure"),
    en: "Land of Departure",
    category: "place",
    short: L(
      "Le monde-école où le maître Eraqus formait Terra, Aqua et Ventus, avant qu’Aqua ne le change en Manoir Oblivion.",
      "The school-world where Master Eraqus trained Terra, Aqua and Ventus, before Aqua turned it into Castle Oblivion.",
    ),
    text: L(
      "La Contrée du Départ est le point de départ de Birth by Sleep : un château clair posé sur des montagnes, où trois apprentis s’entraînent au maniement de la Keyblade sous l’autorité du maître Eraqus. C’est là que se déroule l’Épreuve de Maîtrise qui ouvre le jeu et qui, en échouant, envoie les trois amis sur des routes séparées.\n\nLe monde a une propriété rare : il peut être reconfiguré. Quand tout s’effondre, Aqua utilise la Keyblade d’Eraqus pour le retourner comme un gant et en faire le Manoir Oblivion, afin d’y dissimuler Ventus. Le même lieu apparaît donc sous deux visages dans la chronologie, ce qui a longtemps déconcerté les joueurs. Kingdom Hearts III le rétablit dans sa forme d’origine ; on découvre alors qu’il fut bâti à l’image de Scala ad Caelum, la cité des Porteurs de Keyblade.",
      "The Land of Departure is the starting point of Birth by Sleep: a bright castle set among mountains where three apprentices train with the Keyblade under Master Eraqus. It hosts the Mark of Mastery exam that opens the game and that, by failing, sends the three friends down separate roads.\n\nThe world has a rare property: it can be reconfigured. When everything collapses, Aqua uses Eraqus's Keyblade to turn it inside out into Castle Oblivion, in order to hide Ventus there. The same place therefore appears with two faces in the timeline, which long confused players. Kingdom Hearts III restores its original form; we then learn it was built in the image of Scala ad Caelum, the city of the Keyblade wielders.",
    ),
    entry: "land-of-departure",
    related: ["manoir-oblivion", "chambre-de-l-eveil", "epreuve-de-maitrise", "scala-ad-caelum"],
  },
  {
    id: "couloir-des-tenebres",
    term: L("Couloir des ténèbres", "Corridor of darkness"),
    en: "Corridor of Darkness",
    category: "place",
    short: L(
      "Passage instantané entre deux mondes, ouvert en traversant les ténèbres, dangereux pour qui n’est pas protégé.",
      "An instant passage between two worlds, opened by cutting through darkness, dangerous for anyone unprotected.",
    ),
    text: L(
      "Un couloir des ténèbres est un raccourci : un portail sombre que l’on ouvre d’un geste et qui débouche ailleurs, sans vaisseau ni autorisation. C’est le mode de déplacement favori de l’Organisation XIII, de Maléfique et des Sans-cœur les plus évolués, et il explique pourquoi ces personnages surgissent partout sans jamais franchir les murs entre les mondes.\n\nLe procédé a un prix. Emprunter ces couloirs expose le corps et le cœur aux ténèbres ; l’Organisation XIII s’en protège par ses fameux manteaux noirs, seule raison d’être de cette tenue devenue iconique. Les personnages sans protection en ressortent affaiblis ou corrompus, et Riku en paie longtemps le prix. Les couloirs traversent l’Entre-deux, ce qui les rend proches, dans la logique de la saga, du Domaine des Ténèbres où l’on peut se perdre pour de bon.",
      "A corridor of darkness is a shortcut: a dark portal opened with a gesture that comes out somewhere else, with no ship and no permission. It is the favoured means of travel of Organization XIII, of Maleficent and of the more advanced Heartless, and it explains why those characters turn up everywhere without ever crossing the walls between worlds.\n\nThe trick has a price. Using these corridors exposes body and heart to darkness; Organization XIII shields itself with its famous black coats, the sole reason that now-iconic outfit exists. Unprotected characters come out weakened or corrupted, and Riku pays for it for a long time. The corridors run through the In-Between, which in the saga's logic makes them close cousins of the Realm of Darkness, where one can be lost for good.",
    ),
    entry: "corridors-of-darkness",
    related: ["tenebres", "entre-deux", "domaine-des-tenebres", "organisation-xiii"],
  },
  {
    id: "dandelions",
    term: L("Dandelions", "Dandelions"),
    en: "Dandelions",
    category: "group",
    short: L(
      "Jeunes porteurs mis à l’abri avant la Guerre des Keyblades pour que la lumière survive à la destruction du monde.",
      "Young wielders put in safety before the Keyblade War so that the light would survive the world's destruction.",
    ),
    text: L(
      "À la veille de la Guerre des Keyblades, la Prophète Ava reçoit une mission différente de celle de ses pairs : au lieu de préparer la bataille, elle sélectionne dans chaque Union des porteurs prometteurs, les Dandelions, et leur interdit de combattre. Le nom évoque les pissenlits dont les graines s’envolent pour germer ailleurs.\n\nLeur rôle est d’être évacués avant la fin. Après la guerre, ils sont transférés vers un monde de substitution où le conflit n’a pas eu lieu, afin de repartir de zéro. Union χ raconte cette survie et la manière dont plusieurs d’entre eux, dont Ephemer, Skuld ou Strelitzia, finissent par comprendre que leur refuge est artificiel. Ce sont eux qui relient l’Âge des Fées aux épisodes modernes, et plusieurs réapparaissent, sous d’autres noms, bien plus tard dans la chronologie.",
      "On the eve of the Keyblade War, the Foreteller Ava is given a different mission from her peers: rather than preparing for battle, she picks promising wielders from each Union, the Dandelions, and forbids them to fight. The name evokes dandelion seeds blown away to sprout elsewhere.\n\nTheir role is to be evacuated before the end. After the war they are moved to a substitute world where the conflict never happened, so they can start over. Union χ tells that story of survival and how several of them, among them Ephemer, Skuld and Strelitzia, come to realise their refuge is artificial. They are the thread linking the Age of Fairy Tales to the modern entries, and several reappear, under other names, much later in the timeline.",
    ),
    related: ["prophetes", "unions", "guerre-des-keyblades", "age-des-fees"],
  },
  {
    id: "datascape",
    term: L("Datascape", "Datascape"),
    en: "Datascape",
    category: "place",
    short: L(
      "Monde de données reconstruit à partir du journal de Jiminy Criquet, où évolue une copie numérique de Sora.",
      "A world of data rebuilt from Jiminy Criquet's journal, where a digital copy of Sora moves and fights.",
    ),
    text: L(
      "Dans Re:coded, le journal que Jiminy Criquet a tenu pendant le premier voyage se met à afficher une phrase qu’il n’a jamais écrite. Pour comprendre, Mickey fait numériser le carnet : cela crée le Datascape, une reconstitution des mondes visités, peuplée par un Sora de données qui ignore tout de son statut.\n\nL’intérêt de ce détour n’est pas seulement technique. Les bugs qui contaminent le Datascape correspondent aux blessures et aux manques laissés par les épisodes précédents, et les réparer revient à faire remonter des souvenirs enfouis. À la fin, le message obtenu indique au vrai Sora qui il devra sauver, ce qui lance directement Dream Drop Distance. Le jeu explore aussi la question posée par les Réplicas et Naminé : une copie qui souffre et qui choisit est-elle moins réelle que l’original ?",
      "In Re:coded, the journal Jiminy Criquet kept during the first journey starts displaying a sentence he never wrote. To find out why, Mickey has the notebook digitised: that creates the Datascape, a reconstruction of the visited worlds, populated by a Data Sora who knows nothing of his status.\n\nThe detour is not merely technical. The bugs infecting the Datascape correspond to the wounds and gaps left by earlier entries, and repairing them amounts to bringing buried memories back up. In the end, the recovered message tells the real Sora whom he will have to save, which launches Dream Drop Distance directly. The game also picks up the question raised by the Replicas and Naminé: is a copy that suffers and chooses any less real than the original?",
    ),
    entry: "datascape",
    related: ["memoire", "replica", "coeur"],
  },
  {
    id: "demons",
    term: L("Démons", "Demons"),
    en: "Demon Tide / Demon Tower",
    category: "creature",
    short: L(
      "Immenses colonnes mouvantes composées de milliers de Sans-cœur agglutinés les uns aux autres, apparues dans Kingdom Hearts III.",
      "Vast moving columns made of thousands of Heartless packed together, introduced in Kingdom Hearts III.",
    ),
    text: L(
      "La Marée Démoniaque et la Tour Démoniaque ne sont pas des créatures individuelles mais des essaims : des milliers d’Ombres qui s’agglomèrent en une spirale mouvante capable de balayer une rue entière. Kingdom Hearts III en fait sa signature visuelle, en tirant parti d’une puissance de calcul que la série n’avait jamais eue.\n\nLeur fonction narrative est de rendre les Sans-cœur à nouveau menaçants après une décennie où ils étaient devenus du menu fretin. La Tour Démoniaque sert d’obstacle récurrent ; la Marée Démoniaque, plus grande encore, apparaît au Nécropole des Keyblades et engloutit littéralement les Gardiens de la Lumière, ce qui oblige Sora à user du pouvoir de l’éveil pour aller les rechercher un par un. C’est cet usage abusif qui lui coûtera son existence à la fin du jeu.",
      "The Demon Tide and the Demon Tower are not individual creatures but swarms: thousands of Shadows clumping into a churning spiral able to sweep away a whole street. Kingdom Hearts III makes them its visual signature, taking advantage of processing power the series had never had.\n\nTheir narrative job is to make the Heartless threatening again after a decade of being small fry. The Demon Tower is a recurring obstacle; the Demon Tide, larger still, appears at the Keyblade Graveyard and literally swallows the Guardians of Light, forcing Sora to use the power of waking to fetch them back one by one. That overuse is exactly what costs him his existence at the end of the game.",
    ),
    entry: "demon-tide",
    related: ["sans-coeur", "pouvoir-de-l-eveil", "cimetiere-des-keyblades", "gardiens-de-la-lumiere"],
  },
  {
    id: "domaine-de-la-lumiere",
    term: L("Domaine de la Lumière", "Realm of Light"),
    en: "Realm of Light",
    category: "place",
    short: L(
      "L’ensemble des mondes ordinaires où se déroule la majorité de la saga, par opposition au Domaine des Ténèbres.",
      "The set of ordinary worlds where most of the saga takes place, as opposed to the Realm of Darkness.",
    ),
    text: L(
      "Le Domaine de la Lumière regroupe tous les mondes que l’on visite normalement : les Îles du Destin, la Cité du Crépuscule, Agrabah, le Château Disney et les dizaines d’autres. On y parle rarement de lui, précisément parce qu’il est l’ordinaire ; il n’apparaît comme notion que lorsqu’un personnage en sort.\n\nIl a un revers exact, le Domaine des Ténèbres, et une zone intermédiaire, l’Entre-deux. Chaque domaine a ses propres Keyblades et ses propres règles de circulation : on ne passe pas librement de l’un à l’autre, et un cœur trop marqué par les ténèbres ne peut plus revenir dans la lumière sans un lien qui le ramène. Quadratum complique encore le tableau, puisque cette ville est présentée comme située hors du Domaine de la Lumière, sans appartenir pour autant aux ténèbres.",
      "The Realm of Light gathers every world one normally visits: the Destiny Islands, Twilight Town, Agrabah, Disney Castle and dozens more. It is rarely named precisely because it is the ordinary state of things; it only surfaces as a concept when a character leaves it.\n\nIt has an exact reverse, the Realm of Darkness, and an intermediate zone, the In-Between. Each realm has its own Keyblades and its own rules of passage: you do not cross freely from one to the other, and a heart too deeply marked by darkness cannot return to the light without a bond to pull it back. Quadratum complicates the picture further, since that city is presented as lying outside the Realm of Light without belonging to darkness either.",
    ),
    related: ["domaine-des-tenebres", "entre-deux", "mondes", "quadratum"],
  },
  {
    id: "domaine-des-tenebres",
    term: L("Domaine des Ténèbres", "Realm of Darkness"),
    en: "Realm of Darkness",
    category: "place",
    short: L(
      "L’envers du monde, un domaine sans soleil peuplé de Sans-cœur, dont il est presque impossible de revenir.",
      "The reverse side of the world, a sunless realm crawling with Heartless, from which return is nearly impossible.",
    ),
    text: L(
      "Le Domaine des Ténèbres est le miroir sombre du Domaine de la Lumière : mêmes contours de mondes, mais réduits à des ruines flottant dans le noir, une plage sans horizon et une mer immobile. Les Sans-cœur y sont chez eux, et le temps n’y a pas le même cours, ce qui explique que dix ans puissent y passer sans que le corps vieillisse.\n\nC’est la prison de la saga. Riku y est enfermé à la fin du premier jeu, Mickey l’y rejoint, et surtout Aqua y erre pendant plus d’une décennie, une histoire racontée dans Kingdom Hearts 0.2. On n’en sort pas par la porte : il faut une Keyblade adaptée au Domaine des Ténèbres, un couloir des ténèbres ou l’intervention de quelqu’un qui vous cherche depuis l’autre côté. La plage noire où Sora et Riku échouent en devient l’image la plus reconnaissable.",
      "The Realm of Darkness is the dark mirror of the Realm of Light: the same outlines of worlds, but reduced to ruins floating in blackness, a shore with no horizon and a motionless sea. The Heartless are at home there, and time does not run the same way, which is why ten years can pass without the body ageing.\n\nIt is the saga's prison. Riku is trapped there at the end of the first game, Mickey joins him, and above all Aqua wanders it for over a decade, a story told in Kingdom Hearts 0.2. There is no walking out: it takes a Keyblade suited to the Realm of Darkness, a corridor of darkness, or someone searching for you from the other side. The black shore where Sora and Riku wash up became its most recognisable image.",
    ),
    entry: "realm-of-darkness",
    related: ["tenebres", "domaine-de-la-lumiere", "sans-coeur", "couloir-des-tenebres"],
  },
  {
    id: "drop",
    term: L("Drop", "Drop"),
    en: "Drop",
    category: "gameplay",
    short: L(
      "Compte à rebours de Dream Drop Distance qui fait basculer le joueur de Sora à Riku, et inversement, en pleine partie.",
      "The Dream Drop Distance countdown that switches the player from Sora to Riku, and back, mid-play.",
    ),
    text: L(
      "Dream Drop Distance suit deux personnages en même temps, chacun dans sa version des Mondes Endormis. Pour rendre cette simultanéité sensible, le jeu installe une jauge de Drop qui se vide en permanence : quand elle atteint zéro, le protagoniste s’endort et le joueur reprend la partie dans la peau de l’autre, là où il l’avait laissé.\n\nLe procédé se justifie par la fiction — les deux garçons dorment et rêvent le même voyage — mais il divise les joueurs, car il peut interrompre une exploration ou même un combat de boss. Des objets et des bonus permettent de ralentir la jauge ou de choisir le moment du basculement. Le titre du jeu, Dream Drop Distance, met d’ailleurs cette mécanique au même rang que le rêve et l’éloignement des personnages, signe qu’elle est pensée comme un thème autant que comme une règle.",
      "Dream Drop Distance follows two characters at once, each in his own version of the Sleeping Worlds. To make that simultaneity tangible, the game installs a Drop gauge that drains continuously: when it hits zero the protagonist falls asleep and the player picks up as the other one, exactly where they left off.\n\nThe device is justified by the fiction — both boys are asleep, dreaming the same journey — but it divides players, since it can interrupt exploration or even a boss fight. Items and bonuses let you slow the gauge or choose when to switch. The game's title, Dream Drop Distance, places the mechanic on the same footing as the dream and the distance between the characters, a sign it was designed as a theme as much as a rule.",
    ),
    related: ["mondes-endormis", "avale-reves", "epreuve-de-maitrise"],
  },
  {
    id: "emblemes",
    term: L("Emblèmes", "Emblem Heartless"),
    en: "Emblem Heartless",
    category: "creature",
    short: L(
      "Sans-cœur fabriqués artificiellement en laboratoire, reconnaissables au symbole en forme de cœur barré qu’ils portent.",
      "Heartless manufactured artificially in a laboratory, recognisable by the crossed heart emblem they bear.",
    ),
    text: L(
      "Les Sans-cœur se divisent en deux familles. Les Emblèmes sont ceux que les expériences d’Ansem le Sage — poursuivies en réalité par son apprenti Xehanort au Jardin Radieux — ont produits en arrachant délibérément des cœurs à des cobayes. Ils portent un blason bien visible : un cœur noir barré, surmonté d’une croix pointue.\n\nCette origine artificielle a des conséquences concrètes. Les Emblèmes rassemblent l’immense majorité des ennemis rencontrés, du Soldat au Vaisseau Fantôme, et leur destruction par une Keyblade libère un cœur que l’Organisation XIII s’empresse de récupérer pour bâtir son Kingdom Hearts artificiel. Ils s’opposent aux Purs-sang, nés naturellement des ténèbres d’un cœur. La distinction, purement décorative en apparence, résume le glissement de la série : les monstres n’y sont pas des accidents, mais des produits.",
      "Heartless split into two families. Emblems are those produced by Ansem the Wise's experiments — actually pursued by his apprentice Xehanort at Radiant Garden — which deliberately tore hearts out of test subjects. They carry a clearly visible crest: a black heart crossed through and topped with a spiked cross.\n\nThat artificial origin has concrete consequences. Emblems make up the vast majority of enemies encountered, from the Soldier to the Battleship, and destroying one with a Keyblade releases a heart that Organization XIII rushes to collect to build its artificial Kingdom Hearts. They stand opposite the Purebloods, born naturally from the darkness in a heart. The distinction looks decorative but sums up the series' drift: its monsters are not accidents, they are products.",
    ),
    entry: "heartless",
    related: ["sans-coeur", "purs-sang", "organisation-xiii", "coeur"],
  },
  {
    id: "entre-deux",
    term: L("Entre-deux", "Betwixt and Between"),
    en: "Betwixt and Between",
    category: "place",
    short: L(
      "Zone intermédiaire entre la lumière et les ténèbres, traversée par les couloirs des ténèbres et habitée par les Similis.",
      "The intermediate zone between light and darkness, crossed by corridors of darkness and home to the Nobodies.",
    ),
    text: L(
      "L’Entre-deux n’appartient ni au Domaine de la Lumière ni à celui des Ténèbres : c’est l’espace situé entre les deux, celui que traversent les couloirs des ténèbres et où les Similis, qui n’existent pleinement nulle part, peuvent s’installer. Le Monde qui n’existe pas y flotte, ce qui explique son ciel perpétuellement nocturne et sa lune en forme de cœur.\n\nOn y accède rarement de plein gré. Sora, Donald et Dingo y échouent après le sacrifice d’Axel, et le lieu apparaît comme un tunnel de lumière blanche et de gouffres. Sa logique est cohérente avec le reste de la mythologie : à chaque état intermédiaire correspond un lieu, comme l’Entre-deux pour les Similis, les Mondes Endormis pour les cœurs qui n’ont pas fini de se réveiller ou le Monde Final pour ceux qui ne sont plus tout à fait vivants.",
      "The In-Between belongs to neither the Realm of Light nor the Realm of Darkness: it is the space between the two, the one corridors of darkness pass through and where Nobodies, who exist fully nowhere, can settle. The World That Never Was floats there, which explains its permanently nocturnal sky and its heart-shaped moon.\n\nOne rarely goes there on purpose. Sora, Donald and Goofy end up in it after Axel's sacrifice, and the place appears as a tunnel of white light and chasms. Its logic fits the rest of the mythology: every in-between state has its own place, the In-Between for Nobodies, the Sleeping Worlds for hearts that have not finished waking, the Final World for those no longer quite alive.",
    ),
    entry: "corridors-of-darkness",
    related: ["simili", "couloir-des-tenebres", "domaine-de-la-lumiere", "monde-final"],
  },
  {
    id: "epreuve-de-maitrise",
    term: L("Épreuve de Maîtrise", "Mark of Mastery"),
    en: "Mark of Mastery",
    category: "gameplay",
    short: L(
      "Examen qui permet à un Porteur de Keyblade de devenir Maître ; il tourne systématiquement mal dans la saga.",
      "The exam that lets a Keyblade wielder become a Master; in this saga it always goes wrong.",
    ),
    text: L(
      "Devenir Maître de la Keyblade ne s’obtient pas par ancienneté mais par un examen formel, l’Épreuve de Maîtrise, supervisé par un maître en exercice. Elle mesure moins la force que la maîtrise des ténèbres qui sommeillent en tout porteur.\n\nDeux épreuves structurent la série, et aucune ne se passe comme prévu. Dans Birth by Sleep, Eraqus examine Terra et Aqua : Aqua réussit, Terra échoue parce que ses ténèbres se manifestent, et Xehanort, invité comme observateur, en profite pour manipuler tout le monde. Dans Dream Drop Distance, Yen Sid soumet Sora et Riku à un parcours dans les Mondes Endormis ; Riku est promu, Sora tombe dans un piège tendu par la Vraie Organisation XIII. L’examen sert donc toujours de piège narratif : c’est au moment où l’institution valide un héros que l’ennemi s’introduit.",
      "Becoming a Keyblade Master is not a matter of seniority but of a formal exam, the Mark of Mastery, overseen by a serving Master. It measures mastery over the darkness sleeping in every wielder rather than raw strength.\n\nTwo exams structure the series, and neither goes to plan. In Birth by Sleep, Eraqus tests Terra and Aqua: Aqua passes, Terra fails because his darkness shows, and Xehanort, invited as an observer, uses the occasion to manipulate everyone. In Dream Drop Distance, Yen Sid sends Sora and Riku through the Sleeping Worlds; Riku is promoted, Sora walks into a trap set by the True Organization XIII. The exam is thus always a narrative trap: the moment the institution certifies a hero is the moment the enemy slips in.",
    ),
    related: ["maitre-de-la-keyblade", "porteur-de-keyblade", "mondes-endormis", "contree-du-depart"],
  },
  {
    id: "esprits",
    term: L("Esprits", "Spirits"),
    en: "Spirit Dream Eaters",
    category: "creature",
    short: L(
      "Les Avale-Rêves bienveillants, que le joueur crée et élève lui-même pour en faire ses compagnons de combat.",
      "The benevolent Dream Eaters, which the player creates and raises to serve as battle companions.",
    ),
    text: L(
      "Dans Dream Drop Distance, Sora et Riku ne voyagent pas avec Donald et Dingo mais avec des Esprits, des Avale-Rêves aux couleurs vives portant un emblème arrondi. Ils protègent les rêves au lieu de les dévorer, et ce sont eux qui affrontent les Cauchemars aux côtés des héros.\n\nLe jeu en fait un système complet : on les fabrique à partir de matériaux récoltés en combat, on les nourrit, on joue avec eux, et l’affection ainsi gagnée ouvre des cases sur leur tableau de compétences, lesquelles se transmettent au personnage principal. Chaque espèce a sa personnalité et son type élémentaire, et les combinaisons déterminent les attaques d’équipe. Le plus connu, Miaou-Miaou, est devenu une mascotte de la série. Cette parenthèse ludique porte quand même le thème du jeu : dans un monde de rêve, un monstre peut être un ami sans cesser d’être un monstre.",
      "In Dream Drop Distance, Sora and Riku travel not with Donald and Goofy but with Spirits, brightly coloured Dream Eaters bearing a rounded emblem. They protect dreams instead of devouring them, and they are the ones who fight the Nightmares alongside the heroes.\n\nThe game turns them into a full system: you craft them from materials gathered in battle, feed them, play with them, and the affection earned opens panels on their ability board, whose abilities pass on to the main character. Each species has its own personality and element, and combinations determine link attacks. The best known, Meow Wow, became a series mascot. This playful detour still carries the game's theme: in a dream world a monster can be a friend without ceasing to be a monster.",
    ),
    entry: "dream-eaters",
    related: ["avale-reves", "cauchemars", "mondes-endormis"],
  },
  {
    id: "final-mix",
    term: L("Final Mix", "Final Mix"),
    en: "Final Mix",
    category: "gameplay",
    short: L(
      "Rééditions augmentées des épisodes, longtemps réservées au Japon, qui ajoutent des boss, des scènes et des équipements inédits.",
      "Expanded re-releases of the games, long exclusive to Japan, adding bosses, scenes and equipment.",
    ),
    text: L(
      "Un Final Mix est une version enrichie d’un épisode déjà sorti : ennemis inédits, boss secrets, Keyblades supplémentaires, difficulté supplémentaire et parfois des scènes qui changent la compréhension de l’intrigue. La pratique commence avec Kingdom Hearts Final Mix en 2002 et se poursuit avec Kingdom Hearts II Final Mix et Birth by Sleep Final Mix.\n\nPendant plus de dix ans, ces versions ne sortent qu’au Japon, ce qui crée une situation étrange : le public occidental découvre par vidéos interposées des séquences essentielles, comme la scène secrète annonçant Birth by Sleep ou les combats contre les membres de l’Organisation XIII absents du jeu original. Les compilations HD des années 2010 corrigent enfin ce déséquilibre en n’incluant que les Final Mix. Depuis Kingdom Hearts III, la logique se poursuit sous forme d’extension téléchargeable avec Re Mind.",
      "A Final Mix is an enriched version of an already released entry: new enemies, secret bosses, extra Keyblades, an added difficulty level and sometimes scenes that change how the plot reads. The practice starts with Kingdom Hearts Final Mix in 2002 and continues with Kingdom Hearts II Final Mix and Birth by Sleep Final Mix.\n\nFor more than a decade these versions were released only in Japan, creating an odd situation: Western players discovered essential sequences through second-hand video, such as the secret scene teasing Birth by Sleep or the fights against Organization XIII members missing from the original. The HD collections of the 2010s finally fixed the imbalance by including only the Final Mix versions. Since Kingdom Hearts III the same logic continues as downloadable content, with Re Mind.",
    ),
    related: ["re-mind", "organisation-xiii"],
  },
  {
    id: "frontiere-entre-les-mondes",
    term: L("Frontière entre les mondes", "Boundary between worlds"),
    en: "World border",
    category: "place",
    short: L(
      "Règle fondatrice de la saga : les mondes sont séparés par des murs, et leurs habitants ne doivent pas savoir que les autres existent.",
      "The saga's founding rule: worlds are separated by walls, and their inhabitants must not know the others exist.",
    ),
    text: L(
      "Après la Guerre des Keyblades, le monde unique éclate et chaque fragment se referme derrière une barrière. Cette séparation n’est pas qu’un décor : elle donne au premier jeu son principe de voyage, puisqu’il faut un vaisseau Gummi, construit à partir des débris de ces murs, pour passer de l’un à l’autre.\n\nElle impose aussi une règle de conduite que Sora récite sans cesse : ne pas révéler l’existence des autres mondes, ne pas perturber l’ordre local. De là viennent les déguisements du groupe à Halloween Town ou sous l’océan d’Atlantica, gag récurrent qui est en réalité une obligation diplomatique. Quand la frontière cède, un monde peut être dévoré par les Sans-cœur ; le refermer suppose de verrouiller sa serrure avec une Keyblade. Kingdom Hearts III assouplit la règle, et Quadratum la remet complètement en question.",
      "After the Keyblade War the single world bursts apart and each fragment closes behind a barrier. That separation is more than scenery: it gives the first game its travel premise, since a Gummi ship, built from the debris of those very walls, is needed to move between worlds.\n\nIt also imposes a rule of conduct Sora recites constantly: never reveal that other worlds exist, never disturb the local order. Hence the party's disguises in Halloween Town or under the ocean of Atlantica, a running gag that is really a diplomatic obligation. When a border gives way, a world can be devoured by the Heartless; sealing it again means locking its Keyhole with a Keyblade. Kingdom Hearts III loosens the rule, and Quadratum calls it into question entirely.",
    ),
    related: ["mondes", "vaisseau-gummi", "serrure", "guerre-des-keyblades"],
  },
  {
    id: "gardiens-de-la-lumiere",
    term: L("Gardiens de la Lumière", "Guardians of Light"),
    en: "Guardians of Light",
    category: "group",
    short: L(
      "Les sept porteurs de lumière réunis par Yen Sid pour s’opposer aux treize chercheurs des ténèbres de Xehanort.",
      "The seven bearers of light gathered by Yen Sid to stand against Xehanort's thirteen seekers of darkness.",
    ),
    text: L(
      "Puisque Xehanort veut reforger la χ-blade en opposant sept cœurs de lumière à treize cœurs de ténèbres, le camp adverse n’a pas le choix : il doit fournir les sept. Yen Sid entreprend donc de les réunir, ce qui occupe la fin de Dream Drop Distance et l’essentiel de Kingdom Hearts III.\n\nLa liste change plusieurs fois, et c’est tout l’intérêt. Les Princesses de Cœur sont d’abord envisagées, puis écartées ; il faut former de nouveaux Porteurs de Keyblade, ce qui explique l’entraînement de Kairi et de Lea. Au Nécropole des Keyblades, le groupe final réunit Sora, Riku, Mickey, Aqua, Ventus, Terra, Kairi, Roxas, Axel et Xion, bien au-delà du compte prévu, parce que plusieurs cœurs partagent le même corps. Le pluriel importe : la saga oppose une organisation planifiée pendant des décennies à un groupe d’amis rassemblés dans l’urgence.",
      "Since Xehanort intends to reforge the χ-blade by pitting seven hearts of light against thirteen of darkness, the other side has no choice: it must supply the seven. Yen Sid therefore sets about gathering them, which occupies the end of Dream Drop Distance and most of Kingdom Hearts III.\n\nThe roster changes several times, and that is the point. The Princesses of Heart are considered first, then set aside; new Keyblade wielders have to be trained, hence Kairi's and Lea's apprenticeship. At the Keyblade Graveyard the final group brings together Sora, Riku, Mickey, Aqua, Ventus, Terra, Kairi, Roxas, Axel and Xion, well past the intended count, because several hearts share the same body. The plural matters: the saga sets an organisation planned over decades against a group of friends assembled in a hurry.",
    ),
    entry: "guardians-of-light",
    related: ["chercheurs-des-tenebres", "chi-blade", "princesses-de-coeur", "cimetiere-des-keyblades"],
  },
  {
    id: "guerre-des-keyblades",
    term: L("Guerre des Keyblades", "Keyblade War"),
    en: "Keyblade War",
    category: "other",
    short: L(
      "Conflit fondateur de l’Âge des Fées qui a brisé le monde unique en une multitude de mondes séparés.",
      "The founding conflict of the Age of Fairy Tales that shattered the single world into a multitude of separate worlds.",
    ),
    text: L(
      "La Guerre des Keyblades est la catastrophe d’origine. À l’Âge des Fées, cinq Unions de Porteurs, chacune dirigée par un Prophète, se soupçonnent mutuellement de trahison ; la méfiance orchestrée dégénère en bataille rangée au Nécropole des Keyblades, où presque tous les combattants meurent.\n\nLes conséquences sont irréversibles : la χ-blade est brisée en vingt fragments, Kingdom Hearts devient inaccessible, et le monde unique éclate en mondes séparés par des murs. Ce que la saga répète, c’est que cette guerre n’est jamais close. Xehanort veut délibérément la rejouer pour recréer la χ-blade, ce qu’il obtient dans Kingdom Hearts III ; le Nécropole des Keyblades sert alors deux fois de champ de bataille, à des siècles d’écart. La guerre n’est donc pas un souvenir mais un moule dans lequel chaque génération de personnages retombe.",
      "The Keyblade War is the original catastrophe. In the Age of Fairy Tales, five Unions of wielders, each led by a Foreteller, come to suspect one another of treachery; the engineered mistrust escalates into a pitched battle at the Keyblade Graveyard where nearly every combatant dies.\n\nThe consequences are irreversible: the χ-blade is shattered into twenty fragments, Kingdom Hearts becomes unreachable, and the single world bursts into worlds walled off from one another. What the saga keeps saying is that this war never closed. Xehanort deliberately wants to replay it in order to recreate the χ-blade, which he achieves in Kingdom Hearts III; the Keyblade Graveyard thus serves as a battlefield twice, centuries apart. The war is not a memory but a mould each generation of characters falls back into.",
    ),
    entry: "keyblade-war",
    related: ["age-des-fees", "chi-blade", "cimetiere-des-keyblades", "unions"],
  },
  {
    id: "keyblade",
    term: L("Keyblade", "Keyblade"),
    en: "Keyblade",
    category: "weapon",
    short: L(
      "Arme en forme de clé géante qui choisit elle-même son porteur et peut ouvrir ou verrouiller n’importe quel cœur.",
      "A giant key-shaped weapon that chooses its own wielder and can open or lock any heart.",
    ),
    text: L(
      "La Keyblade est l’objet central de la série, et son étrangeté est assumée : une clé assez grande pour servir d’épée. Elle n’est pas une arme parmi d’autres, elle a un usage précis, ouvrir et fermer ce qui est verrouillé — la serrure d’un monde, le cœur d’une personne, le passage vers Kingdom Hearts. C’est aussi le seul moyen de libérer réellement un cœur capturé par un Sans-cœur.\n\nElle choisit son porteur, mais ce choix se prépare : une cérémonie d’héritage transmet le pouvoir d’un porteur à un autre, comme Terra le fait pour Riku et Aqua pour Kairi. Chaque Keyblade se personnalise par un porte-clés lié à un souvenir ou à un monde. Toutes descendent de la χ-blade, dont elles sont des copies imparfaites, ce qui explique qu’aucune ne puisse à elle seule ouvrir Kingdom Hearts.",
      "The Keyblade is the series' central object, and its oddness is owned: a key large enough to serve as a sword. It is not just one weapon among others but has a precise use, opening and closing what is locked — a world's Keyhole, a person's heart, the way to Kingdom Hearts. It is also the only way to truly free a heart captured by a Heartless.\n\nIt chooses its wielder, but that choice can be prepared: an inheritance ceremony passes the power from one wielder to another, as Terra does for Riku and Aqua for Kairi. Each Keyblade is customised by a keychain tied to a memory or a world. All of them descend from the χ-blade as imperfect copies, which is why none can open Kingdom Hearts on its own.",
    ),
    entry: "keyblade",
    related: ["chi-blade", "chaine-royale", "serrure", "porteur-de-keyblade"],
  },
  {
    id: "keyblade-des-coeurs",
    term: L("Keyblade de Cœur", "Keyblade of People's Hearts"),
    en: "Keyblade of People's Hearts",
    category: "weapon",
    short: L(
      "Keyblade sombre forgée à partir des cœurs des Princesses de Cœur, capable d’ouvrir le cœur d’un être vivant.",
      "A dark Keyblade forged from the hearts of the Princesses of Heart, able to open a living person's heart.",
    ),
    text: L(
      "À la fin du premier jeu, le Xehanort possédé par Ansem, Chercheur des Ténèbres, réunit six Princesses de Cœur et fabrique une Keyblade d’un genre particulier : elle n’ouvre pas les serrures des mondes mais les cœurs eux-mêmes. Sa lame est noire, cernée de pointes, et ses dents sont ornées de figures grimaçantes.\n\nSon rôle est décisif dans une scène qui a marqué les joueurs : Sora la retourne contre lui-même pour libérer le cœur de Kairi, réfugié en lui depuis la destruction des Îles du Destin. En se transperçant, il devient temporairement un Sans-cœur, et la Keyblade se brise en libérant les cœurs des sept princesses. C’est le premier exemple d’une règle que la saga appliquera souvent : sacrifier son propre cœur pour en rendre un autre, quitte à cesser d’exister pendant un temps.",
      "At the end of the first game, the Xehanort possessed by Ansem, Seeker of Darkness, gathers six Princesses of Heart and forges a Keyblade of a particular kind: it opens not the Keyholes of worlds but hearts themselves. Its shaft is black, ringed with spikes, its teeth decorated with grimacing faces.\n\nIt is decisive in a scene players still remember: Sora turns it on himself to free Kairi's heart, sheltered inside him since the Destiny Islands were destroyed. By running himself through he briefly becomes a Heartless, and the Keyblade shatters, releasing the hearts of all seven princesses. It is the first instance of a rule the saga will apply often: sacrificing your own heart to give another back, even at the cost of ceasing to exist for a while.",
    ),
    entry: "keyblade-of-heart",
    related: ["princesses-de-coeur", "keyblade", "sans-coeur", "coeur"],
  },
  {
    id: "kingdom-hearts",
    term: L("Kingdom Hearts", "Kingdom Hearts"),
    category: "heart",
    short: L(
      "Le cœur de tous les mondes, formé de la lumière de chaque cœur individuel, que tous les antagonistes cherchent à atteindre.",
      "The heart of all worlds, formed from the light of every individual heart, which every antagonist seeks to reach.",
    ),
    text: L(
      "Kingdom Hearts n’est pas un lieu mais une source : la somme de la lumière contenue dans tous les cœurs. La saga le représente le plus souvent comme une immense lune en forme de cœur suspendue au-dessus d’un domaine intermédiaire, mais sa nature exacte reste volontairement floue.\n\nC’est précisément ce flou qui en fait un moteur d’intrigue, car il fonctionne comme un miroir : chacun y voit ce qu’il veut y trouver. Ansem, Chercheur des Ténèbres, est convaincu qu’il est fait de ténèbres et que tout en est né. Xemnas y voit la promesse d’un cœur pour les Similis et en fabrique une version artificielle en accumulant les cœurs libérés par la Keyblade de Sora. Le Maître Xehanort veut l’ouvrir pour remettre l’existence à zéro. Aucun ne se contente de le contempler, et c’est pourquoi l’arme centrale de la série est une clé.",
      "Kingdom Hearts is not a place but a source: the sum of the light held in every heart. The saga most often depicts it as an enormous heart-shaped moon hanging over an in-between realm, though its exact nature is deliberately left vague.\n\nThat vagueness is precisely what drives the plot, because it works as a mirror: everyone sees in it what they want to find. Ansem, Seeker of Darkness, is convinced it is made of darkness and that everything was born there. Xemnas sees the promise of a heart for Nobodies and builds an artificial version by hoarding the hearts freed by Sora's Keyblade. Master Xehanort wants to open it to reset existence. None of them is content to merely look at it, which is why the series' central weapon is a key.",
    ),
    entry: "kingdom-hearts-heart",
    related: ["coeur", "lumiere", "chi-blade", "keyblade"],
  },
  {
    id: "livre-des-propheties",
    term: L("Livre des Prophéties", "Book of Prophecies"),
    en: "Book of Prophecies",
    category: "weapon",
    short: L(
      "Ouvrage rédigé par le Maître des Maîtres qui décrit l’avenir, y compris la Guerre des Keyblades et sa propre disparition.",
      "A book written by the Master of Masters describing the future, including the Keyblade War and his own disappearance.",
    ),
    text: L(
      "Le Livre des Prophéties est écrit par le Maître des Maîtres à partir de ce qu’il voit grâce à son œil sans paupière, capable de percevoir le futur. Il en confie une copie à chacun de ses cinq apprentis, les Prophètes, avec pour instruction de préserver la lumière.\n\nLe livre est autant une bombe qu’un guide. Il annonce que le monde sera détruit par une guerre et que l’un des Prophètes trahira les autres ; chacun soupçonne alors ses pairs, et la prophétie se réalise précisément parce qu’elle a été lue. La saga en fait un cas d’école de prédiction auto-réalisatrice, doublé d’un doute sur les intentions du Maître, qui a peut-être écrit ces pages pour provoquer l’événement plutôt que pour l’éviter. Certains fragments, dits « Lost Pages », circulent séparément et alimentent les intrigues de Union χ.",
      "The Book of Prophecies is written by the Master of Masters from what he sees through his lidless eye, which perceives the future. He hands a copy to each of his five apprentices, the Foretellers, with instructions to preserve the light.\n\nThe book is as much a bomb as a guide. It announces that the world will be destroyed by a war and that one of the Foretellers will betray the others; each then suspects his peers, and the prophecy comes true precisely because it was read. The saga turns it into a textbook self-fulfilling prophecy, doubled with doubt about the Master's intentions, since he may have written those pages to cause the event rather than prevent it. Some fragments, the “Lost Pages”, circulate separately and feed the plots of Union χ.",
    ),
    related: ["prophetes", "age-des-fees", "guerre-des-keyblades", "boite-noire"],
  },
  {
    id: "lumiere",
    term: L("Lumière", "Light"),
    en: "Light",
    category: "heart",
    short: L(
      "Le versant clair du cœur, associé aux liens, à l’espoir et à la volonté ; jamais totalement absent, même des pires personnages.",
      "The bright side of the heart, tied to bonds, hope and will; never entirely absent, even in the worst characters.",
    ),
    text: L(
      "La lumière est ce qui subsiste au fond d’un cœur, y compris quand les ténèbres l’ont submergé. La série en fait une force concrète : elle repousse les Sans-cœur, sert de fil conducteur à ceux qui se perdent et permet de retrouver quelqu’un à travers les mondes. La formule répétée « mon ami est ma force » n’est pas une morale ajoutée après coup, c’est une description de la mécanique.\n\nSa relation aux ténèbres est plus subtile qu’un simple bien contre mal. La saga répète qu’une lumière trop pure attire les ténèbres, que la plupart des cœurs contiennent les deux, et que le vrai danger est d’y renoncer plutôt que de les mélanger. Riku incarne cette leçon en apprenant à se servir des ténèbres sans leur appartenir, et le crépuscule, à mi-chemin, devient l’un des motifs visuels favoris de la série.",
      "Light is what remains at the bottom of a heart, even once darkness has swamped it. The series treats it as a concrete force: it repels the Heartless, guides those who are lost, and lets someone be found across worlds. The oft-repeated line about friends being one's power is not a moral tacked on afterwards, it is a description of the mechanics.\n\nIts relationship with darkness is subtler than good against evil. The saga keeps saying that too pure a light attracts darkness, that most hearts contain both, and that the real danger is renouncing them rather than mixing them. Riku embodies the lesson by learning to use darkness without belonging to it, and twilight, halfway between the two, becomes one of the series' favourite visual motifs.",
    ),
    related: ["tenebres", "coeur", "kingdom-hearts", "gardiens-de-la-lumiere"],
  },
  {
    id: "maitre-de-la-keyblade",
    term: L("Maître de la Keyblade", "Keyblade Master"),
    en: "Keyblade Master",
    category: "group",
    short: L(
      "Titre officiel accordé à un porteur qui a réussi l’Épreuve de Maîtrise et peut à son tour former des élèves.",
      "The official title granted to a wielder who has passed the Mark of Mastery and may in turn train students.",
    ),
    text: L(
      "Le Maître de la Keyblade n’est pas simplement un porteur expérimenté : c’est un grade, décerné après examen, qui donne le droit de transmettre le pouvoir de la Keyblade et de juger d’autres candidats. Eraqus, Xehanort, Yen Sid et Aqua le portent ; Riku l’obtient dans Dream Drop Distance, ce qui fait de lui le premier Maître de sa génération.\n\nCe titre pèse dans le récit parce qu’il est presque toujours mal attribué. Xehanort est un maître reconnu, et c’est précisément cette autorité qui lui permet d’agir sans être inquiété pendant des décennies. Sora, personnage principal, échoue à son examen et n’obtiendra jamais le grade, ce qui devient un ressort récurrent : la saga distingue soigneusement la reconnaissance institutionnelle et la capacité réelle. À l’Âge des Fées, l’organisation était plus lourde encore, avec des maîtres formant des maîtres à Scala ad Caelum.",
      "A Keyblade Master is not merely an experienced wielder: it is a rank, awarded after an exam, that grants the right to pass on the Keyblade's power and to judge other candidates. Eraqus, Xehanort, Yen Sid and Aqua hold it; Riku earns it in Dream Drop Distance, making him the first Master of his generation.\n\nThe title matters narratively because it is nearly always misassigned. Xehanort is a recognised Master, and that authority is exactly what lets him operate unchallenged for decades. Sora, the protagonist, fails his exam and never obtains the rank, which becomes a recurring device: the saga carefully separates institutional recognition from actual ability. In the Age of Fairy Tales the structure was heavier still, with masters training masters at Scala ad Caelum.",
    ),
    related: ["epreuve-de-maitrise", "porteur-de-keyblade", "keyblade", "scala-ad-caelum"],
  },
  {
    id: "manoir-oblivion",
    term: L("Manoir Oblivion", "Castle Oblivion"),
    en: "Castle Oblivion",
    category: "place",
    short: L(
      "Château blanc où les souvenirs des visiteurs façonnent les salles et s’effacent à mesure qu’ils montent les étages.",
      "A white castle where visitors' memories shape the rooms and fade as they climb its floors.",
    ),
    text: L(
      "Le Manoir Oblivion est la Contrée du Départ retournée par Aqua pour y cacher Ventus. Vide de tout décor, il n’existe que par les cartes de souvenirs que l’on y utilise : chaque étage prend la forme d’un monde tiré de la mémoire du visiteur, et le château pousse quiconque y entre à perdre ce qu’il croyait savoir.\n\nC’est le décor unique de Chain of Memories. Une faction de l’Organisation XIII s’y installe pour manipuler Sora, en confiant à Naminé le soin de réécrire ses souvenirs, tandis que les membres complotent les uns contre les autres. Riku descend en parallèle les sous-sols, peuplés de ses propres ténèbres. Le lieu concentre donc les deux obsessions de la saga, la mémoire et l’identité, et sa véritable nature — un monde-école déguisé — ne sera révélée que bien plus tard, dans Kingdom Hearts III.",
      "Castle Oblivion is the Land of Departure turned inside out by Aqua to hide Ventus. Stripped of any setting, it exists only through the memory cards used inside it: each floor takes the shape of a world drawn from the visitor's memory, and the castle pushes anyone who enters to lose what they thought they knew.\n\nIt is the sole location of Chain of Memories. A faction of Organization XIII settles there to manipulate Sora, entrusting Naminé with rewriting his memories while its members plot against one another. Riku descends the basements in parallel, peopled by his own darkness. The place concentrates the saga's two obsessions, memory and identity, and its true nature — a school-world in disguise — is only revealed much later, in Kingdom Hearts III.",
    ),
    entry: "castle-oblivion",
    related: ["cartes-de-souvenirs", "memoire", "contree-du-depart", "chambre-de-l-eveil"],
  },
  {
    id: "memoire",
    term: L("Mémoire", "Memory"),
    en: "Memory",
    category: "heart",
    short: L(
      "Dans la saga, les souvenirs sont attachés au cœur : les modifier, les effacer ou les rendre change littéralement ce qu’est une personne.",
      "In this saga memories are attached to the heart: altering, erasing or returning them literally changes what a person is.",
    ),
    text: L(
      "Kingdom Hearts traite la mémoire comme une matière manipulable. Les souvenirs ne sont pas rangés dans le cerveau mais liés au cœur, ce qui les rend transmissibles : un cœur réfugié dans un autre y dépose ses souvenirs, et deux personnes reliées peuvent se retrouver par ce fil même après des années.\n\nCette règle produit les intrigues les plus retorses de la série. Naminé possède le pouvoir de démonter et de recomposer les souvenirs de Sora et de ceux qui lui sont liés ; Chain of Memories entier repose sur cette capacité, et Kingdom Hearts II commence par un an de sommeil nécessaire à la réparation. Xion existe parce qu’elle absorbe des souvenirs qui ne lui appartiennent pas, et disparaît quand ils lui sont retirés. La série pousse l’idée jusqu’au bout : oublier quelqu’un revient presque à le tuer, et se souvenir de lui suffit parfois à le ramener.",
      "Kingdom Hearts treats memory as workable material. Memories are not filed in the brain but bound to the heart, which makes them transferable: a heart sheltering inside another leaves its memories there, and two connected people can find each other along that thread even years later.\n\nThe rule produces the series' most convoluted plots. Naminé has the power to take apart and reassemble Sora's memories and those of anyone linked to him; the whole of Chain of Memories rests on that ability, and Kingdom Hearts II opens with a year of sleep needed for repairs. Xion exists because she absorbs memories that are not hers, and vanishes when they are taken back. The series pushes the idea to its limit: forgetting someone is nearly the same as killing them, and remembering them is sometimes enough to bring them back.",
    ),
    related: ["coeur", "cartes-de-souvenirs", "manoir-oblivion", "replica"],
  },
  {
    id: "monde-final",
    term: L("Monde Final", "The Final World"),
    en: "The Final World",
    category: "place",
    short: L(
      "Étendue blanche où échouent les cœurs dispersés de ceux qui viennent de mourir, entre disparition et retour.",
      "A white expanse where the scattered hearts of the newly dead wash up, between vanishing and returning.",
    ),
    text: L(
      "Le Monde Final apparaît dans Kingdom Hearts III comme une plaine d’eau peu profonde reflétant un ciel vide, parsemée d’étoiles qui sont en réalité des cœurs dispersés. C’est là que l’on arrive quand on meurt sans que le corps et l’âme aient suivi le même chemin, un état intermédiaire plutôt qu’un au-delà.\n\nSora y échoue après avoir été englouti par la Marée Démoniaque. Il y rencontre Chirithy et une jeune fille dont l’identité restera longtemps un mystère, et doit rassembler les fragments épars de lui-même avant de pouvoir repartir grâce au pouvoir de l’éveil. Le lieu est important pour la mythologie parce qu’il donne enfin une image à ce que la saga répète depuis vingt ans : la mort y est un état réversible, mais uniquement pour ceux que quelqu’un cherche encore.",
      "The Final World appears in Kingdom Hearts III as a plain of shallow water reflecting an empty sky, scattered with stars that are in fact dispersed hearts. It is where you arrive when you die and body and soul have not gone the same way, an intermediate state rather than an afterlife.\n\nSora washes up there after being swallowed by the Demon Tide. He meets Chirithy and a girl whose identity remains a mystery for a long time, and must gather the scattered fragments of himself before he can leave again through the power of waking. The place matters to the mythology because it finally gives an image to what the saga has been saying for twenty years: death here is a reversible state, but only for those someone is still looking for.",
    ),
    entry: "the-final-world",
    related: ["coeur", "pouvoir-de-l-eveil", "demons", "entre-deux"],
  },
  {
    id: "mondes",
    term: L("Mondes", "Worlds"),
    en: "Worlds",
    category: "place",
    short: L(
      "Chaque univers visitable de la saga, le plus souvent tiré d’un film Disney, possède son propre cœur et sa propre serrure.",
      "Each visitable universe in the saga, usually drawn from a Disney film, has its own heart and its own Keyhole.",
    ),
    text: L(
      "Un monde, dans Kingdom Hearts, est à la fois un niveau de jeu et une entité vivante. Agrabah, Halloween Town, la Cité du Crépuscule ou le Palais des Rêves possèdent chacun un cœur, ce qui les rend vulnérables : lorsque les ténèbres l’atteignent, le monde entier est dévoré et ses habitants dispersés.\n\nLeur variété est le principe même de la série. Les mondes Disney fournissent le décor et les personnages invités ; les mondes originaux, comme la Cité du Crépuscule ou le Jardin Radieux, portent l’intrigue de fond. La visite obéit à des règles fixes : Sora arrive, adopte un déguisement s’il le faut, aide les habitants sans révéler l’existence des autres mondes, puis verrouille la serrure avec sa Keyblade pour empêcher les Sans-cœur de revenir. Kingdom Hearts III agrandit considérablement leur échelle sans changer cette structure.",
      "A world, in Kingdom Hearts, is both a game level and a living entity. Agrabah, Halloween Town, Twilight Town or the Castle of Dreams each has a heart, which makes them vulnerable: when darkness reaches it, the whole world is devoured and its inhabitants scattered.\n\nTheir variety is the series' very premise. Disney worlds supply the settings and guest characters; original worlds such as Twilight Town or Radiant Garden carry the underlying plot. Visits follow fixed rules: Sora arrives, adopts a disguise if needed, helps the locals without revealing that other worlds exist, then locks the Keyhole with his Keyblade to keep the Heartless from returning. Kingdom Hearts III vastly increases their scale without changing that structure.",
    ),
    related: ["frontiere-entre-les-mondes", "serrure", "vaisseau-gummi", "coeur"],
  },
  {
    id: "mondes-endormis",
    term: L("Mondes Endormis", "Sleeping Worlds"),
    en: "Sleeping Worlds",
    category: "place",
    short: L(
      "Mondes engloutis par les ténèbres puis restaurés, mais jamais réveillés, où seuls les Avale-Rêves peuvent exister.",
      "Worlds swallowed by darkness then restored, yet never woken, where only Dream Eaters can exist.",
    ),
    text: L(
      "Quand Sora referme les serrures à la fin du premier jeu, les mondes détruits reviennent — mais certains ne se réveillent pas complètement. Ces Mondes Endormis conservent une serrure du sommeil que personne n’a rouverte, et restent suspendus dans un état de rêve, coupés du reste.\n\nDream Drop Distance en fait son terrain de jeu. Sora et Riku y sont envoyés par Yen Sid pour leur Épreuve de Maîtrise, avec la mission de réveiller sept de ces mondes. Comme ni les Sans-cœur ni les Similis ne peuvent y pénétrer, la faune y est entièrement composée d’Avale-Rêves. L’endroit permet aussi à la série de revisiter des lieux connus, comme la Cité du Crépuscule, dans une version décalée où rien n’a tout à fait le même sens, et de brouiller la question de savoir dans le rêve de qui se déroule l’aventure.",
      "When Sora seals the Keyholes at the end of the first game, the destroyed worlds come back — but some never fully wake. These Sleeping Worlds keep a keyhole of sleep no one has reopened, and stay suspended in a dreaming state, cut off from the rest.\n\nDream Drop Distance makes them its playground. Yen Sid sends Sora and Riku there for their Mark of Mastery, with orders to wake seven of them. Since neither Heartless nor Nobodies can enter, the wildlife is made up entirely of Dream Eaters. The setting also lets the series revisit familiar places such as Twilight Town in a skewed version where nothing means quite the same thing, and blur the question of whose dream the adventure is taking place in.",
    ),
    related: ["avale-reves", "serrure", "epreuve-de-maitrise", "drop"],
  },
  {
    id: "neant",
    term: L("Néant", "Nothingness"),
    en: "Nothingness",
    category: "other",
    short: L(
      "L’élément propre aux Similis, ni lumière ni ténèbres, employé comme arme par Xemnas et par l’Organisation XIII.",
      "The element belonging to the Nobodies, neither light nor darkness, wielded as a weapon by Xemnas and Organization XIII.",
    ),
    text: L(
      "Puisque les Similis n’existent pas vraiment, la saga leur attribue un élément à part, le néant. Xemnas le manie sous forme de rubans lumineux et de lames d’énergie, et le décor du Monde qui n’existe pas — bâtiments blancs, angles impossibles, ciel noir — en constitue la traduction visuelle.\n\nLe néant n’est pas seulement esthétique. Il justifie que les Similis ne puissent être détruits pour de bon qu’avec une Keyblade, sans quoi ils se recomposent ; il explique aussi la stabilité de leur domaine, l’Entre-deux, situé entre la lumière et les ténèbres. Beaucoup de noms de lieux et de techniques de l’Organisation XIII y renvoient, de la Halte du Néant au vaisseau-monde qu’affronte Sora à la fin de Kingdom Hearts II. C’est la façon dont la série donne une matière à une absence.",
      "Since Nobodies do not truly exist, the saga grants them an element of their own, nothingness. Xemnas wields it as ribbons of light and blades of energy, and the architecture of The World That Never Was — white buildings, impossible angles, black sky — is its visual translation.\n\nNothingness is not only aesthetic. It explains why Nobodies can only be destroyed for good with a Keyblade, since otherwise they reassemble; it also accounts for the stability of their realm, the In-Between, sitting between light and darkness. Many of Organization XIII's place names and techniques point back to it, from the Hall of Empty Melodies to the world-ship Sora faces at the end of Kingdom Hearts II. It is the series' way of giving substance to an absence.",
    ),
    related: ["simili", "organisation-xiii", "entre-deux", "tenebres"],
  },
  {
    id: "nescients",
    term: L("Nescients", "Unversed"),
    en: "Unversed",
    category: "creature",
    short: L(
      "Créatures nées des émotions négatives de Vanitas, qui se répandent dans les mondes de Birth by Sleep.",
      "Creatures born from Vanitas's negative emotions, spreading through the worlds of Birth by Sleep.",
    ),
    text: L(
      "Les Nescients sont l’espèce hostile propre à Birth by Sleep. Ils ne naissent ni d’un cœur perdu ni d’un corps abandonné mais des émotions négatives de Vanitas : chaque souffrance qu’il éprouve en engendre, et il n’en tire aucun bénéfice puisqu’il les récupère en les détruisant, ce qui lui rend simplement sa douleur.\n\nCe fonctionnement en fait un cas particulier dans le bestiaire. Contrairement aux Sans-cœur, ils n’ont aucun intérêt pour les cœurs des mondes ; ils sont un symptôme, pas un projet. Leur présence dans un monde signale seulement que Vanitas est passé par là, ce qui sert de fil rouge aux trois campagnes de Terra, Aqua et Ventus. Comme Vanitas est lui-même la moitié de ténèbres arrachée au cœur de Ventus, les Nescients sont, en dernière analyse, la souffrance d’un adolescent rendue visible et lâchée dans l’univers.",
      "The Unversed are the hostile species specific to Birth by Sleep. They are born neither from a lost heart nor an abandoned body but from Vanitas's negative emotions: every pain he feels spawns them, and he gains nothing by destroying them since doing so merely returns that pain to him.\n\nThat mechanism makes them a special case in the bestiary. Unlike the Heartless they have no interest in the hearts of worlds; they are a symptom, not a plan. Their presence in a world only signals that Vanitas has passed through, which serves as a through-line for the three campaigns of Terra, Aqua and Ventus. Since Vanitas is himself the dark half torn from Ventus's heart, the Unversed are, in the end, a teenager's suffering made visible and loosed on the universe.",
    ),
    entry: "unversed",
    related: ["sans-coeur", "coeur", "tenebres", "chi-blade"],
  },
  {
    id: "organisation-xiii",
    term: L("Organisation XIII", "Organization XIII"),
    en: "Organization XIII",
    category: "group",
    short: L(
      "Groupe de treize Similis en manteau noir qui cherchent à se fabriquer un cœur en réunissant un Kingdom Hearts artificiel.",
      "A group of thirteen black-coated Nobodies seeking to gain hearts by assembling an artificial Kingdom Hearts.",
    ),
    text: L(
      "L’Organisation XIII rassemble des Similis d’élite, ceux qui ont conservé une apparence et une volonté humaines. Fondée par Xemnas, elle recrute d’anciens apprentis d’Ansem le Sage puis d’autres recrues, chacun désigné par un numéro et un nom formé en ajoutant un X à son nom d’origine.\n\nLeur but déclaré est simple : n’ayant plus de cœur, ils veulent en obtenir un, et pour cela pousser Sora à détruire des Sans-cœur, chaque destruction libérant un cœur qui rejoint leur Kingdom Hearts artificiel. Leur but réel l’est moins, puisque Xemnas poursuit en secret l’agenda de Xehanort. Le manteau noir n’est pas un uniforme de style mais une protection contre les couloirs des ténèbres. Il faut la distinguer de la Vraie Organisation XIII, formée plus tard et composée non de Similis mais de réceptacles portant chacun un fragment du cœur de Xehanort.",
      "Organization XIII gathers elite Nobodies, those who kept a human shape and a will of their own. Founded by Xemnas, it recruits former apprentices of Ansem the Wise and then further members, each designated by a number and a name formed by adding an X to their original one.\n\nTheir stated goal is simple: having no hearts, they want one, and to that end they push Sora to destroy Heartless, each kill releasing a heart that joins their artificial Kingdom Hearts. Their real goal is less simple, since Xemnas is secretly pursuing Xehanort's agenda. The black coat is not a style choice but protection against corridors of darkness. It must be distinguished from the True Organization XIII, formed later and made up not of Nobodies but of vessels each carrying a fragment of Xehanort's heart.",
    ),
    entry: "organization-xiii",
    related: ["simili", "vraie-organisation-xiii", "kingdom-hearts", "couloir-des-tenebres"],
  },
  {
    id: "palier-de-l-eveil",
    term: L("Palier de l’Éveil", "Dive to the Heart"),
    en: "Dive to the Heart",
    category: "heart",
    short: L(
      "Espace mental en forme de vitrail circulaire où l’on descend au fond de son propre cœur, souvent au tout début d’un jeu.",
      "A mental space shaped like a circular stained-glass window, reached by diving into one's own heart, often at a game's opening.",
    ),
    text: L(
      "Le Palier de l’Éveil, parfois appelé Station de l’Éveil, est la représentation intérieure d’un cœur : une plateforme circulaire ornée d’un vitrail, flottant dans le noir, décorée de figures qui disent quelque chose de la personne concernée. Le vitrail de Sora montre Blanche-Neige à ses débuts, puis se complique à mesure que ses liens s’accumulent.\n\nLa saga y ouvre presque tous ses jeux, dans une séquence devenue rituelle : une voix pose des questions, propose de choisir entre une épée, un bouclier et un bâton, et fait affronter les premières Ombres. Sous ses airs de tutoriel, la scène a une fonction précise, montrer que l’aventure se joue autant à l’intérieur qu’à l’extérieur. Le lieu réapparaît chaque fois qu’un personnage doit fouiller son cœur : Ventus y dort, Roxas y découvre sa nature, Sora y retrouve ses propres fragments.",
      "The Dive to the Heart is the inner representation of a heart: a circular platform set with a stained-glass window, floating in blackness, decorated with figures that say something about the person concerned. Sora's window shows Snow White at first, then grows more crowded as his bonds accumulate.\n\nThe saga opens almost every game there, in a sequence that has become a ritual: a voice asks questions, offers a choice between sword, shield and staff, and pits you against the first Shadows. Under its tutorial guise the scene has a precise function, showing that the adventure takes place inside as much as outside. The place returns whenever a character has to search their heart: Ventus sleeps there, Roxas discovers his nature there, Sora recovers his own fragments there.",
    ),
    entry: "dive-to-the-heart",
    related: ["coeur", "memoire", "pouvoir-de-l-eveil", "chambre-de-l-eveil"],
  },
  {
    id: "porte-bonheur",
    term: L("Porte-bonheur", "Wayfinder"),
    en: "Wayfinder",
    category: "weapon",
    short: L(
      "Talismans en étoile de mer fabriqués par Aqua pour que trois amis séparés finissent toujours par se retrouver.",
      "Star-shaped charms made by Aqua so that three separated friends will always find their way back to each other.",
    ),
    text: L(
      "Avant que tout ne se disperse, Aqua taille trois porte-bonheur dans des fruits étoilés et en donne un à Terra, un à Ventus et garde le troisième. La tradition qu’elle invoque veut qu’un tel talisman crée un lien indestructible entre ceux qui le portent et les ramène toujours les uns vers les autres.\n\nDans un univers où les liens du cœur sont une force physique, l’objet fonctionne réellement. C’est le porte-bonheur qui permet à Aqua de tenir dix ans dans le Domaine des Ténèbres, et sa forme se retrouve partout dans la série : le fruit paopou des Îles du Destin, la Tendre Promesse offerte par Kairi, le porte-clés qui en découle. Birth by Sleep en fait son motif central, au point que le titre du jeu et sa musique en dérivent. C’est l’objet le plus modeste de la saga et l’un des plus efficaces.",
      "Before everything scatters, Aqua carves three charms from star-shaped fruit and gives one to Terra, one to Ventus, and keeps the third. The tradition she invokes holds that such a talisman creates an unbreakable connection between its bearers and always leads them back to one another.\n\nIn a universe where bonds of the heart are a physical force, the object genuinely works. It is the Wayfinder that lets Aqua endure ten years in the Realm of Darkness, and its shape recurs throughout the series: the paopu fruit of the Destiny Islands, the Oathkeeper charm Kairi gives Sora, the keychain that follows from it. Birth by Sleep makes it its central motif, to the point that the game's title and music derive from it. It is the saga's humblest object and one of its most effective.",
    ),
    entry: "wayfinder",
    related: ["coeur", "domaine-des-tenebres", "keyblade", "memoire"],
  },
  {
    id: "porteur-de-keyblade",
    term: L("Porteur de Keyblade", "Keyblade wielder"),
    en: "Keyblade wielder",
    category: "group",
    short: L(
      "Personne capable d’invoquer une Keyblade, soit parce que l’arme l’a choisie, soit parce qu’un porteur la lui a transmise.",
      "Someone able to summon a Keyblade, either because the weapon chose them or because a wielder passed it on.",
    ),
    text: L(
      "Le titre ne désigne aucune fonction officielle : est porteur quiconque peut faire apparaître une Keyblade dans sa main. Il y a deux façons de le devenir. La Keyblade choisit d’elle-même un cœur assez fort, comme celui de Sora ; ou bien un porteur en titre pratique la cérémonie d’héritage sur un enfant, comme Terra le fait pour Riku sans le mesurer, et Aqua pour Kairi.\n\nÀ l’Âge des Fées, les porteurs se comptaient par milliers et formaient des Unions entières ; après la Guerre des Keyblades il n’en subsiste plus qu’une poignée, ce qui rend chaque nouveau porteur précieux. La saga joue beaucoup de cette rareté : Roxas peut en manier deux à la fois, Xion en obtient une par accident, Lea en gagne une par obstination. Devenir porteur n’est jamais un privilège tranquille, puisque l’arme attire aussi bien les Sans-cœur que les manipulateurs.",
      "The title names no official post: anyone who can summon a Keyblade into their hand is a wielder. There are two ways to become one. The Keyblade itself chooses a heart strong enough, as it does with Sora; or a serving wielder performs the inheritance ceremony on a child, as Terra does for Riku without realising it, and Aqua for Kairi.\n\nIn the Age of Fairy Tales wielders numbered in the thousands and filled entire Unions; after the Keyblade War only a handful remain, which makes each new one precious. The saga plays on that scarcity: Roxas can wield two at once, Xion gains one by accident, Lea earns one through sheer stubbornness. Becoming a wielder is never a quiet privilege, since the weapon attracts Heartless and manipulators alike.",
    ),
    entry: "keyblade",
    related: ["keyblade", "maitre-de-la-keyblade", "epreuve-de-maitrise", "unions"],
  },
  {
    id: "pouvoir-de-l-eveil",
    term: L("Pouvoir de l’éveil", "Power of waking"),
    en: "Power of waking",
    category: "heart",
    short: L(
      "Capacité de la Keyblade à réveiller un cœur endormi et à rejoindre celui qu’on cherche, quel que soit l’endroit où il est.",
      "The Keyblade's ability to wake a sleeping heart and reach whoever you are looking for, wherever they are.",
    ),
    text: L(
      "Le pouvoir de l’éveil est présenté d’abord comme une clé pour les Mondes Endormis : il permet d’ouvrir la serrure du sommeil et de ramener un monde à la conscience. Kingdom Hearts III élargit la définition, puisque Sora s’en sert pour retrouver des cœurs dispersés et pour aller chercher un à un ses amis engloutis par la Marée Démoniaque.\n\nC’est la seule capacité de la série qui ait explicitement un prix. Yen Sid met Sora en garde : l’utiliser pour forcer le destin, plutôt que pour réveiller, use celui qui s’en sert. Sora l’ignore et l’emploie sans compter pour sauver tout le monde, jusqu’à la scène finale où il s’efface progressivement et disparaît, envoyé vers Quadratum. La saga transforme ainsi son motif le plus optimiste, l’idée qu’on peut toujours retrouver quelqu’un, en la faute qui coûte le héros à la fin.",
      "The power of waking is first presented as a key to the Sleeping Worlds: it opens the keyhole of sleep and returns a world to consciousness. Kingdom Hearts III widens the definition, since Sora uses it to recover scattered hearts and to fetch back, one by one, the friends swallowed by the Demon Tide.\n\nIt is the only ability in the series with an explicit price. Yen Sid warns Sora: using it to force fate rather than to wake wears down whoever wields it. Sora ignores him and spends it freely to save everyone, up to the final scene where he fades out and vanishes, sent to Quadratum. The saga thus turns its most optimistic motif, the idea that you can always find someone again, into the mistake that costs it its hero.",
    ),
    entry: "power-of-waking",
    related: ["mondes-endormis", "quadratum", "demons", "coeur"],
  },
  {
    id: "princesses-de-coeur",
    term: L("Princesses de Cœur", "Princesses of Heart"),
    en: "Princesses of Heart",
    category: "group",
    short: L(
      "Sept jeunes filles dont le cœur ne contient aucune trace de ténèbres et dont la réunion ouvre un passage vers Kingdom Hearts.",
      "Seven maidens whose hearts hold no trace of darkness and whose gathering opens a path to Kingdom Hearts.",
    ),
    text: L(
      "Les Princesses de Cœur sont Blanche-Neige, Cendrillon, Aurore, Belle, Jasmine, Alice et Kairi. Leur particularité n’est pas d’être des princesses Disney mais de posséder un cœur de pure lumière, sans la moindre part de ténèbres — ce qui les rend à la fois précieuses et vulnérables, puisqu’elles ne peuvent pas devenir des Sans-cœur mais attirent ceux-ci en masse.\n\nDans le premier jeu, Maléfique les enlève une à une pour former la Serrure Ultime, le passage vers Kingdom Hearts, et Xehanort forge avec leurs cœurs la Keyblade de Cœur. Elles sont ensuite écartées du conflit : Yen Sid renonce à en faire les sept gardiens de la lumière parce que leur pureté même les empêche de se battre. Kingdom Hearts III leur redonne une place discrète en révélant l’existence de nouvelles porteuses de cette lumière.",
      "The Princesses of Heart are Snow White, Cinderella, Aurora, Belle, Jasmine, Alice and Kairi. What sets them apart is not being Disney princesses but holding hearts of pure light with no trace of darkness — which makes them both precious and vulnerable, since they cannot become Heartless yet draw them in droves.\n\nIn the first game Maleficent abducts them one by one to form the Final Keyhole, the path to Kingdom Hearts, and Xehanort forges the Keyblade of People's Hearts from their hearts. They are then set aside from the conflict: Yen Sid gives up on making them the seven guardians of light because their very purity keeps them from fighting. Kingdom Hearts III gives them a quiet role again by revealing new bearers of that same light.",
    ),
    entry: "princesses-of-heart",
    related: ["coeur", "lumiere", "keyblade-des-coeurs", "serrure"],
  },
  {
    id: "prophetes",
    term: L("Prophètes", "Foretellers"),
    en: "Foretellers",
    category: "group",
    short: L(
      "Les cinq disciples masqués du Maître des Maîtres, chacun à la tête d’une Union de Porteurs à l’Âge des Fées.",
      "The five masked apprentices of the Master of Masters, each leading a Union of wielders in the Age of Fairy Tales.",
    ),
    text: L(
      "Ira, Aced, Invi, Gula et Ava dirigent chacun une Union de Porteurs de Keyblade et portent un masque d’animal évoquant leur nom. Leur maître leur a remis une copie du Livre des Prophéties, avec pour mission de préserver la lumière du monde, et les a avertis que l’un d’eux trahirait les autres.\n\nCet avertissement suffit à tout détruire. Chacun soupçonne ses pairs, prend des initiatives secrètes, et la méfiance dégénère en Guerre des Keyblades. Un sixième disciple, Luxu, reçoit une mission distincte, celle de transporter la boîte noire à travers les siècles ; c’est lui qui reliera l’Âge des Fées à l’ère de Xehanort. Le film Back Cover raconte cette période du point de vue des Prophètes, et Kingdom Hearts IV les ramène dans le présent, ce qui fait d’eux l’un des rares groupes de la saga à traverser toute sa chronologie.",
      "Ira, Aced, Invi, Gula and Ava each lead a Union of Keyblade wielders and wear an animal mask evoking their name. Their master handed each a copy of the Book of Prophecies with the mission of preserving the world's light, and warned them that one of them would betray the others.\n\nThat warning is enough to destroy everything. Each suspects his peers, takes secret initiatives, and mistrust escalates into the Keyblade War. A sixth apprentice, Luxu, receives a separate mission, carrying the black box across the centuries; he is the thread linking the Age of Fairy Tales to Xehanort's era. The film Back Cover tells this period from the Foretellers' point of view, and Kingdom Hearts IV brings them into the present, making them one of the few groups to span the saga's entire timeline.",
    ),
    entry: "foretellers",
    related: ["unions", "livre-des-propheties", "boite-noire", "guerre-des-keyblades"],
  },
  {
    id: "purs-sang",
    term: L("Purs-sang", "Pureblood Heartless"),
    en: "Pureblood Heartless",
    category: "creature",
    short: L(
      "Sans-cœur nés naturellement des ténèbres d’un cœur, sans aucun emblème, entièrement noirs et reconnaissables à leurs yeux jaunes.",
      "Heartless born naturally from the darkness in a heart, emblem-less, entirely black with yellow eyes.",
    ),
    text: L(
      "Les Purs-sang sont les Sans-cœur d’origine, ceux qui apparaissent spontanément quand un cœur cède aux ténèbres. Ils ne portent aucun emblème et se reconnaissent à leur silhouette d’ombre pure : l’Ombre, le Néo-ombre, le Fantôme, ou l’immense Ténébreux qui accueille Sora au début du premier jeu.\n\nContrairement aux Emblèmes, ils ne libèrent pas de cœur lorsqu’ils sont détruits, ce qui les rend inutiles pour les plans de l’Organisation XIII et explique que celle-ci s’intéresse surtout aux seconds. Leur nombre augmente partout où les ténèbres progressent, ce qui en fait un baromètre : voir apparaître des Ombres dans un monde signale que son cœur est menacé. Maléfique parvient à les commander sans Keyblade, en s’appuyant sur sa propre magie, alors que la plupart des personnages ne peuvent que les combattre.",
      "Purebloods are the original Heartless, the ones that appear spontaneously when a heart yields to darkness. They bear no emblem and are recognisable by their pure shadow silhouettes: the Shadow, the Neoshadow, the Search Ghost, or the huge Darkside that greets Sora at the start of the first game.\n\nUnlike Emblems they release no heart when destroyed, which makes them useless to Organization XIII's plans and explains why it concentrates on the others. Their numbers rise wherever darkness advances, which makes them a barometer: Shadows appearing in a world means its heart is under threat. Maleficent manages to command them without a Keyblade, drawing on her own magic, whereas most characters can only fight them.",
    ),
    entry: "heartless",
    related: ["sans-coeur", "emblemes", "tenebres", "domaine-des-tenebres"],
  },
  {
    id: "quadratum",
    term: L("Quadratum", "Quadratum"),
    en: "Quadratum",
    category: "place",
    short: L(
      "Ville contemporaine réaliste située hors du Domaine de la Lumière, où Sora échoue à la fin de Kingdom Hearts III.",
      "A realistic contemporary city outside the Realm of Light, where Sora ends up at the close of Kingdom Hearts III.",
    ),
    text: L(
      "Quadratum tranche avec tout ce que la série avait montré : une métropole nocturne réaliste, inspirée de Shibuya, sans Sans-cœur ni Disney. Sora y arrive après avoir usé le pouvoir de l’éveil au-delà du raisonnable, et il y apparaît comme une présence instable, à demi effacée.\n\nLe lieu est présenté comme situé hors du Domaine de la Lumière, ce qui en fait autre chose qu’un monde de plus sur la carte. Les personnages parlent d’un envers, d’un monde des morts ou d’une réalité qui n’aurait pas dû exister, sans qu’aucune définition ne soit tranchée pour l’instant. Yozora, silhouette venue du projet Verum Rex, y attend Sora. Quadratum est le point de départ annoncé de Kingdom Hearts IV, et c’est aujourd’hui la plus grande zone d’ombre volontairement laissée par la série.",
      "Quadratum breaks with everything the series had shown: a realistic night-time metropolis inspired by Shibuya, with no Heartless and no Disney. Sora arrives there after spending the power of waking far beyond reason, and appears as an unstable, half-erased presence.\n\nThe place is presented as lying outside the Realm of Light, which makes it something other than one more world on the map. Characters speak of a reverse side, a world of the dead, or a reality that should not exist, without any definition being settled so far. Yozora, a figure out of the Verum Rex project, waits for Sora there. Quadratum is the announced starting point of Kingdom Hearts IV, and it is currently the largest blank the series has deliberately left.",
    ),
    entry: "quadratum",
    related: ["pouvoir-de-l-eveil", "domaine-de-la-lumiere", "monde-final", "mondes"],
  },
  {
    id: "re-mind",
    term: L("Re Mind", "Re Mind"),
    en: "Re Mind",
    category: "gameplay",
    short: L(
      "Extension téléchargeable de Kingdom Hearts III qui rejoue la bataille finale en la complétant et prolonge l’histoire.",
      "The downloadable expansion for Kingdom Hearts III that replays the final battle, fills in its gaps and extends the story.",
    ),
    text: L(
      "Sorti en 2020, Re Mind reprend le climax de Kingdom Hearts III et le raconte autrement : le joueur y suit Sora revenu en arrière au Nécropole des Keyblades, où il assiste aux combats de ses alliés vus depuis l’intérieur et joue tour à tour plusieurs d’entre eux. Ce qui n’était qu’une ellipse dans le jeu de base devient une séquence complète.\n\nL’extension ajoute aussi ce que les Final Mix apportaient autrefois : un nouveau niveau de difficulté, des affrontements contre treize adversaires, un boss secret et un scénario complémentaire consacré à Kairi. Surtout, elle contient les scènes qui installent la suite de la saga, dont l’apparition de Quadratum et de Yozora. Depuis, il est admis que Re Mind fait partie intégrante de l’histoire : les résumés officiels de la série l’intègrent au même titre que le jeu principal.",
      "Released in 2020, Re Mind revisits the climax of Kingdom Hearts III and tells it differently: the player follows Sora sent back to the Keyblade Graveyard, where he witnesses his allies' fights from the inside and plays several of them in turn. What was only an ellipsis in the base game becomes a full sequence.\n\nThe expansion also adds what Final Mix versions once provided: a new difficulty level, fights against thirteen opponents, a secret boss, and an additional scenario devoted to Kairi. Above all it contains the scenes that set up the rest of the saga, including the appearance of Quadratum and Yozora. It is now taken for granted that Re Mind is part of the story proper: official recaps treat it exactly like the main game.",
    ),
    related: ["final-mix", "cimetiere-des-keyblades", "quadratum"],
  },
  {
    id: "receptacle",
    term: L("Réceptacle", "Vessel"),
    en: "Vessel",
    category: "heart",
    short: L(
      "Corps destiné à accueillir le cœur ou le fragment de cœur de quelqu’un d’autre, procédé au centre du plan de Xehanort.",
      "A body meant to house someone else's heart, or a fragment of it, the process at the centre of Xehanort's plan.",
    ),
    text: L(
      "Un réceptacle est un corps dont le cœur peut être remplacé, complété ou colonisé. Le mécanisme découle directement des règles de la saga : puisque le cœur est distinct du corps, il peut le quitter, s’installer ailleurs et cohabiter avec un autre.\n\nXehanort en fait sa méthode. Il fragmente son propre cœur et place chaque éclat dans un hôte pour composer ses treize chercheurs des ténèbres, s’appropriant au passage le corps de Terra. Le procédé explique la plupart des grandes révélations de la série : pourquoi Xehanort semble être partout, pourquoi certains personnages agissent contre leur volonté, pourquoi Sora est un objectif constant. La contre-mesure existe aussi, puisqu’un cœur accueilli peut protéger son hôte plutôt que le dominer, comme Ventus dormant en Sora ou Roxas et Xion attendant de retrouver un corps.",
      "A vessel is a body whose heart can be replaced, completed or colonised. The mechanism follows directly from the saga's rules: since the heart is distinct from the body, it can leave it, settle elsewhere and share space with another.\n\nXehanort makes it his method. He splits his own heart and plants each shard in a host to assemble his thirteen seekers of darkness, appropriating Terra's body along the way. The process explains most of the series' big reveals: why Xehanort seems to be everywhere, why certain characters act against their will, why Sora is a permanent target. The countermeasure exists too, since a sheltered heart can protect its host rather than dominate it, as with Ventus sleeping inside Sora, or Roxas and Xion waiting to regain a body.",
    ),
    related: ["coeur", "chercheurs-des-tenebres", "replica", "vraie-organisation-xiii"],
  },
  {
    id: "replica",
    term: L("Réplica", "Replica"),
    en: "Replica",
    category: "creature",
    short: L(
      "Corps artificiel créé en laboratoire pour reproduire quelqu’un, ou pour servir de réceptacle vide à un cœur.",
      "An artificial body created in a laboratory to copy someone, or to serve as an empty vessel for a heart.",
    ),
    text: L(
      "Les Réplicas sont l’œuvre de Vexen, membre de l’Organisation XIII et ancien apprenti d’Ansem le Sage. Ce sont des corps fabriqués, capables d’accueillir des souvenirs implantés et, dans certains cas, un cœur véritable. Le programme naît dans Chain of Memories avec le Réplica de Riku, une copie qui finit par se demander si ses souvenirs valent moins que ceux de l’original.\n\nLa série revient sans cesse sur cette question. Xion est un Réplica nourri des souvenirs de Sora ; sa disparition, et le fait que personne ne puisse la garder en mémoire, forment le cœur de 358/2 Days. Xehanort fabrique ensuite des Réplicas pour loger ses fragments de cœur. Dans Kingdom Hearts III, Vexen retourne son propre programme contre son camp en fournissant des corps vides qui permettent à Roxas, Xion et Naminé de revenir pour de bon.",
      "Replicas are the work of Vexen, a member of Organization XIII and a former apprentice of Ansem the Wise. They are manufactured bodies able to hold implanted memories and, in some cases, a real heart. The programme starts in Chain of Memories with the Riku Replica, a copy who ends up wondering whether his memories are worth less than the original's.\n\nThe series keeps returning to that question. Xion is a Replica fed on Sora's memories; her disappearance, and the fact that no one can keep her in mind, form the heart of 358/2 Days. Xehanort later builds Replicas to house fragments of his heart. In Kingdom Hearts III, Vexen turns his own programme against his side by supplying empty bodies that let Roxas, Xion and Naminé come back for good.",
    ),
    entry: "replicas",
    related: ["memoire", "receptacle", "organisation-xiii", "simili"],
  },
  {
    id: "sans-coeur",
    term: L("Sans-cœur", "Heartless"),
    en: "Heartless",
    category: "creature",
    short: L(
      "Créatures nées d’un cœur englouti par les ténèbres, qui n’existent que pour arracher d’autres cœurs.",
      "Creatures born from a heart swallowed by darkness, existing only to tear out other hearts.",
    ),
    text: L(
      "Quand un cœur cède aux ténèbres, il ne disparaît pas : il devient un Sans-cœur, une créature aux yeux jaunes mue par un seul instinct, s’emparer des cœurs qu’elle croise. Ils s’attaquent aussi aux mondes eux-mêmes, dont ils dévorent le cœur, ce qui provoque leur destruction complète.\n\nIls se répartissent en deux familles : les Purs-sang, nés naturellement, et les Emblèmes, produits par les expériences menées au Jardin Radieux et marqués d’un blason. Seule une Keyblade libère réellement le cœur emprisonné ; toute autre arme ne fait que retarder l’échéance. Ce sont les premiers ennemis de la saga et son idée fondatrice : un monstre qui n’est pas un envahisseur venu d’ailleurs, mais ce qu’une personne devient quand elle abandonne. Sora lui-même en devient un brièvement dans le premier jeu, ce qui donne naissance à Roxas.",
      "When a heart yields to darkness it does not vanish: it becomes a Heartless, a yellow-eyed creature driven by a single instinct, to seize the hearts it meets. They also attack worlds themselves, devouring their hearts, which destroys them completely.\n\nThey fall into two families: Purebloods, born naturally, and Emblems, produced by the experiments run at Radiant Garden and marked with a crest. Only a Keyblade truly frees the imprisoned heart; any other weapon merely delays the outcome. They are the saga's first enemies and its founding idea: a monster that is not an invader from elsewhere but what a person becomes when they give up. Sora himself briefly turns into one in the first game, which is how Roxas comes into being.",
    ),
    entry: "heartless",
    related: ["simili", "coeur", "purs-sang", "emblemes"],
  },
  {
    id: "scala-ad-caelum",
    term: L("Scala ad Caelum", "Scala ad Caelum"),
    en: "Scala ad Caelum",
    category: "place",
    short: L(
      "Cité aux tours blanches et aux escaliers vertigineux, berceau des Maîtres de la Keyblade après la Guerre des Keyblades.",
      "A city of white towers and vertiginous stairways, cradle of the Keyblade Masters after the Keyblade War.",
    ),
    text: L(
      "Scala ad Caelum — « l’escalier vers le ciel » — est une ville bâtie sur l’eau, faite de tours claires reliées par des escaliers qui se replient dans le ciel. C’est là que les Porteurs de Keyblade se sont réorganisés après la Guerre des Keyblades et que des maîtres formaient d’autres maîtres, dont le jeune Xehanort et son ami Eraqus.\n\nDark Road raconte cette période et montre la ville en activité, avec ses écoles et ses hiérarchies. Kingdom Hearts III y place le duel final entre Sora et le Maître Xehanort, dans une version démultipliée où les bâtiments se retournent et où des Réplicas de Xehanort attendent à chaque étage. Le lien avec la Contrée du Départ, bâtie à son image, révèle rétrospectivement que l’école d’Eraqus n’était qu’un vestige modeste d’une institution beaucoup plus vaste.",
      "Scala ad Caelum — “the stairway to the sky” — is a city built on water, made of pale towers linked by staircases that fold up into the sky. It is where Keyblade wielders reorganised after the Keyblade War and where masters trained other masters, among them the young Xehanort and his friend Eraqus.\n\nDark Road tells that period and shows the city in operation, with its schools and hierarchies. Kingdom Hearts III stages the final duel between Sora and Master Xehanort there, in a multiplied version where buildings flip over and Xehanort Replicas wait on every level. The connection with the Land of Departure, built in its image, reveals in hindsight that Eraqus's school was only a modest remnant of a far larger institution.",
    ),
    entry: "scala-ad-caelum",
    related: ["maitre-de-la-keyblade", "contree-du-depart", "guerre-des-keyblades", "replica"],
  },
  {
    id: "serrure",
    term: L("Serrure", "Keyhole"),
    en: "Keyhole",
    category: "heart",
    short: L(
      "Point d’accès au cœur d’un monde ; le verrouiller avec une Keyblade empêche les Sans-cœur de le détruire.",
      "The access point to a world's heart; locking it with a Keyblade keeps the Heartless from destroying it.",
    ),
    text: L(
      "Chaque monde possède une serrure, généralement dissimulée dans un lieu significatif — derrière une chute d’eau, au fond d’une grotte, dans une salle du trône. Elle donne accès au cœur du monde, et tant qu’elle reste ouverte, les Sans-cœur peuvent l’atteindre et engloutir le monde entier.\n\nC’est la quête principale du premier jeu : Sora en verrouille une par monde visité, ce qui donne à la structure du jeu sa colonne vertébrale. La Serrure Ultime, elle, mène directement à Kingdom Hearts et ne peut être ouverte qu’en réunissant les cœurs des sept Princesses de Cœur. Le concept se prolonge ensuite sous d’autres formes, notamment la serrure du sommeil des Mondes Endormis dans Dream Drop Distance. Il explique aussi pourquoi la Keyblade est une clé plutôt qu’une épée : sa fonction première n’est pas de frapper, mais de fermer.",
      "Every world has a Keyhole, usually hidden in a meaningful place — behind a waterfall, at the bottom of a cave, in a throne room. It gives access to the world's heart, and as long as it stays open the Heartless can reach it and swallow the whole world.\n\nThat is the first game's main quest: Sora locks one per world visited, which gives the game its backbone. The Final Keyhole leads straight to Kingdom Hearts and can only be opened by gathering the hearts of the seven Princesses of Heart. The concept later continues in other forms, notably the keyhole of sleep of the Sleeping Worlds in Dream Drop Distance. It also explains why the Keyblade is a key rather than a sword: its first purpose is not to strike but to close.",
    ),
    related: ["keyblade", "mondes", "princesses-de-coeur", "mondes-endormis"],
  },
  {
    id: "simili",
    term: L("Simili", "Nobody"),
    en: "Nobody",
    category: "creature",
    short: L(
      "Ce qui reste — corps et âme — quand un cœur devient un Sans-cœur : une existence sans émotions, qui n’est censée être personne.",
      "What remains — body and soul — when a heart becomes a Heartless: an existence without emotions, which is supposed to be nobody.",
    ),
    text: L(
      "Quand une personne perd son cœur, deux êtres naissent en même temps : un Sans-cœur, à partir du cœur happé par les ténèbres, et un Simili, à partir du corps et de l’âme laissés derrière. La plupart sont des créatures blanches et souples, aux mouvements désarticulés. Ceux dont le cœur était particulièrement fort gardent leur apparence humaine et forment l’Organisation XIII.\n\nLeur nom résume leur statut : ils ne sont censés être personne, et l’univers refuse de les considérer comme existants. Ils affirment n’éprouver aucune émotion, ce que la série met progressivement en doute, notamment avec Roxas, Naminé et Axel, dont les comportements contredisent la théorie. Un Simili détruit par une Keyblade renvoie le corps et l’âme vers leur propriétaire d’origine ; si le Sans-cœur correspondant est vaincu lui aussi, la personne d’origine peut être reconstituée entièrement.",
      "When someone loses their heart, two beings are born at once: a Heartless, from the heart taken by darkness, and a Nobody, from the body and soul left behind. Most are white, supple creatures with disjointed movements. Those whose heart was especially strong keep a human appearance and form Organization XIII.\n\nTheir name sums up their status: they are supposed to be nobody, and the universe refuses to count them as existing. They claim to feel no emotion, which the series gradually calls into doubt, notably through Roxas, Naminé and Axel, whose behaviour contradicts the theory. A Nobody destroyed by a Keyblade returns body and soul to their original owner; if the matching Heartless is defeated too, the original person can be restored whole.",
    ),
    entry: "nobodies",
    related: ["sans-coeur", "coeur", "organisation-xiii", "neant"],
  },
  {
    id: "tenebres",
    term: L("Ténèbres", "Darkness"),
    en: "Darkness",
    category: "heart",
    short: L(
      "Le versant sombre présent dans presque tous les cœurs : une force réelle, séduisante, qui dévore celui qui s’y abandonne.",
      "The dark side present in almost every heart: a real, seductive force that devours whoever surrenders to it.",
    ),
    text: L(
      "Dans Kingdom Hearts, les ténèbres ne sont pas une image mais une substance. Elles s’accumulent dans un cœur, se manifestent physiquement, ouvrent des passages entre les mondes et donnent une puissance immédiate à qui accepte de s’en servir. C’est ce mélange d’efficacité et de danger qui en fait le ressort de presque toutes les chutes de la saga, de Riku à Terra.\n\nLa série se garde toutefois d’en faire un simple mal. Elle répète que presque tous les cœurs en contiennent, qu’un cœur qui les nie est plus fragile qu’un cœur qui les connaît, et qu’un porteur peut apprendre à les employer sans leur appartenir — ce que Riku finit par accomplir. Céder complètement, en revanche, transforme le cœur en Sans-cœur et laisse le corps devenir un Simili. Le Domaine des Ténèbres en est la version géographique : un lieu réel où l’on peut se perdre pour toujours.",
      "In Kingdom Hearts, darkness is not an image but a substance. It builds up in a heart, manifests physically, opens passages between worlds and grants immediate power to anyone willing to use it. That mix of effectiveness and danger drives nearly every fall in the saga, from Riku to Terra.\n\nThe series is careful, though, not to reduce it to plain evil. It repeats that almost every heart holds some, that a heart which denies it is more fragile than one that knows it, and that a wielder can learn to use it without belonging to it — which Riku eventually achieves. Surrendering completely, on the other hand, turns the heart into a Heartless and leaves the body to become a Nobody. The Realm of Darkness is its geographic version: a real place where one can be lost forever.",
    ),
    entry: "darkness",
    related: ["lumiere", "coeur", "sans-coeur", "domaine-des-tenebres"],
  },
  {
    id: "unions",
    term: L("Unions", "Unions"),
    en: "Unions",
    category: "group",
    short: L(
      "Les cinq factions de Porteurs de Keyblade de l’Âge des Fées, dirigées chacune par un Prophète et rivales entre elles.",
      "The five factions of Keyblade wielders in the Age of Fairy Tales, each led by a Foreteller and rivals to one another.",
    ),
    text: L(
      "À l’Âge des Fées, les Porteurs de Keyblade sont répartis en cinq Unions, Vulpes, Anguis, Unicornis, Leopardos et Ursus, chacune placée sous l’autorité d’un Prophète. La compétition entre elles est officiellement un moyen de collecter la lumière ; dans les faits, elle installe une rivalité que la prophétie de trahison transformera en guerre.\n\nDans Kingdom Hearts χ et Union χ, ce découpage est aussi le principe du jeu : chaque joueur choisit son Union et contribue à un classement collectif. La fiction et la structure de jeu coïncident donc exactement, ce qui est rare dans la série. Les Unions donnent leur nom à Union χ et laissent une trace durable, puisque les Dandelions en sont issus et que plusieurs personnages modernes descendent de ces porteurs disparus.",
      "In the Age of Fairy Tales, Keyblade wielders are split into five Unions — Vulpes, Anguis, Unicornis, Leopardos and Ursus — each under the authority of a Foreteller. Competition between them is officially a way of collecting light; in practice it establishes a rivalry that the prophecy of betrayal turns into war.\n\nIn Kingdom Hearts χ and Union χ this division is also the game's premise: each player picks a Union and contributes to a collective ranking. Fiction and game structure line up exactly, which is rare in the series. The Unions give Union χ its name and leave a lasting mark, since the Dandelions come out of them and several modern characters descend from those vanished wielders.",
    ),
    entry: "foretellers",
    related: ["prophetes", "age-des-fees", "dandelions", "porteur-de-keyblade"],
  },
  {
    id: "vaisseau-gummi",
    term: L("Vaisseau Gummi", "Gummi Ship"),
    en: "Gummi Ship",
    category: "weapon",
    short: L(
      "Appareil assemblé à partir de blocs colorés, seul moyen de franchir les murs qui séparent les mondes.",
      "A craft assembled from coloured blocks, the only way to cross the walls separating the worlds.",
    ),
    text: L(
      "Les murs qui isolent les mondes ne se traversent pas à pied. Les blocs Gummi sont faits de la matière même de ces murs, et un vaisseau construit avec eux peut donc les franchir : c’est l’explication maison que la saga se donne pour justifier ses voyages, et le vaisseau du roi Mickey devient celui de Sora, Donald et Dingo dès le premier jeu.\n\nLe vaisseau apporte aussi son propre mode de jeu, un shoot spatial entre les mondes, doublé d’un éditeur qui permet d’assembler soi-même l’engin bloc par bloc. Chip et Dale en assurent la maintenance, Cid fournit les pièces. Chaque épisode l’a traité différemment : passage obligé dans le premier jeu, presque escamoté dans Kingdom Hearts II, transformé en zones ouvertes à explorer dans Kingdom Hearts III.",
      "The walls that isolate the worlds cannot be crossed on foot. Gummi blocks are made of the very material of those walls, so a ship built from them can pass through: that is the in-house explanation the saga gives itself for its travel, and King Mickey's ship becomes Sora, Donald and Goofy's from the first game onward.\n\nThe ship also brings its own game mode, a space shooter between worlds, paired with an editor that lets you assemble the craft block by block. Chip and Dale handle maintenance, Cid supplies the parts. Each entry has treated it differently: mandatory in the first game, nearly skipped in Kingdom Hearts II, turned into open areas to explore in Kingdom Hearts III.",
    ),
    entry: "gummi-ship",
    related: ["mondes", "frontiere-entre-les-mondes", "guerre-des-keyblades"],
  },
  {
    id: "vraie-organisation-xiii",
    term: L("Vraie Organisation XIII", "Real Organization XIII"),
    en: "Real Organization XIII",
    category: "group",
    short: L(
      "Le second groupe en manteau noir, composé non de Similis mais de réceptacles portant chacun un fragment du cœur de Xehanort.",
      "The second black-coated group, made not of Nobodies but of vessels each carrying a fragment of Xehanort's heart.",
    ),
    text: L(
      "Révélée dans Dream Drop Distance, la Vraie Organisation XIII est le véritable objectif que Xemnas poursuivait sans le dire. Elle ne cherche pas à obtenir un cœur : elle rassemble les treize chercheurs des ténèbres nécessaires pour reforger la χ-blade, chacun étant un réceptacle abritant un éclat du cœur de Xehanort.\n\nSa composition est mouvante et explique bien des surprises. On y trouve Xehanort lui-même sous plusieurs formes et à différents âges, Xemnas, Ansem Chercheur des Ténèbres, Xigbar, Saïx, Vanitas, Larxene, Marluxia, Luxord, Vexen et des Réplicas de secours. Plusieurs recrues prévues échappent au plan, ce qui oblige Xehanort à combler les places au dernier moment, et certains membres travaillent en réalité contre lui. Le manteau noir est le même que celui de l’Organisation XIII, ce qui entretient volontairement la confusion entre les deux groupes.",
      "Revealed in Dream Drop Distance, the True Organization XIII is the real goal Xemnas had been pursuing without saying so. It is not after a heart: it assembles the thirteen seekers of darkness needed to reforge the χ-blade, each one a vessel housing a shard of Xehanort's heart.\n\nIts roster shifts and explains many surprises. It includes Xehanort himself in several forms and at different ages, Xemnas, Ansem Seeker of Darkness, Xigbar, Saïx, Vanitas, Larxene, Marluxia, Luxord, Vexen and back-up Replicas. Several intended recruits escape the plan, forcing Xehanort to fill seats at the last minute, and some members are in fact working against him. The black coat is the same as Organization XIII's, which deliberately keeps the two groups easy to confuse.",
    ),
    related: ["organisation-xiii", "chercheurs-des-tenebres", "receptacle", "chi-blade"],
  },
];
