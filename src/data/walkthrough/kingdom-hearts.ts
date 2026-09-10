import type { LocalizedText } from "@/data/games";
import { quests } from "./kingdom-hearts-quests";
import type { Walkthrough } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/** Crédit commun des visuels repris du Kingdom Hearts Wiki (voir docs/IMAGES.md). */
const credit = (file: string) => `© Square Enix / Disney — via Kingdom Hearts Wiki (${file})`;

export const walkthrough: Walkthrough = {
  game: "kingdom-hearts",
  version: L(
    "Kingdom Hearts Final Mix, tel qu'il se joue aujourd'hui dans Kingdom Hearts HD 1.5 + 2.5 ReMIX.",
    "Kingdom Hearts Final Mix, as played today in Kingdom Hearts HD 1.5 + 2.5 ReMIX.",
  ),
  intro: L(
    "Cette soluce couvre le premier Kingdom Hearts du début à la fin, et pas seulement le fil de l'histoire : chaque section indique aussi les coffres, les trinités, les dalmatiens et les mini-jeux qu'on y trouve, pour terminer le jeu à 100 %.\n\nElle est écrite pour la version Final Mix, la seule disponible aujourd'hui. Quand une chose diffère de la version d'origine sortie en 2002, c'est signalé.\n\nLes sections se lisent dans l'ordre de la partie. Si vous jouez sans chercher le 100 %, suivez les étapes et ignorez les listes de ramassage : elles sont toujours à part.\n\nUn mot sur la difficulté avant de lancer une partie : Débutant offre d'emblée des objets de renfort, Expert double les dégâts encaissés. Le choix change aussi les conditions des fins secrètes — en Expert, terminer le jeu suffit pour la première ; en Normal, il faut sceller tous les trous de serrure, réunir les 99 dalmatiens et gagner la coupe de l'Hadès. Pour une partie visant le 100 %, Normal est le bon compromis.",
    "This guide covers the first Kingdom Hearts from beginning to end, and not only the main story: each section also lists the chests, Trinity Marks, puppies and mini-games found there, so the game can be finished at 100%.\n\nIt is written for the Final Mix version, the only one available today. Whenever something differs from the original 2002 release, it is pointed out.\n\nSections follow the order of a normal playthrough. If you are not chasing 100%, follow the steps and ignore the collection lists: they are always kept separate.\n\nA word on difficulty before you start: Beginner hands you stat-boosting items straight away, Proud doubles the damage you take. The choice also changes the secret-ending conditions — on Proud, finishing the game is enough for the first; on Normal you must seal every keyhole, gather all 99 puppies and win the Hades Cup. For a 100% run, Normal is the right compromise.",
  ),
  completion: [
    {
      id: "journal",
      title: L("Le Journal de Jiminy complet", "Jiminy's Journal completed"),
      text: L(
        "C'est l'objectif qui contient presque tous les autres. Il demande d'avoir vaincu au moins une fois chaque Sans-cœur du jeu, rencontré chaque personnage, rempli les fiches des mondes, activé toutes les trinités, joué à tous les mini-jeux et réuni les 99 dalmatiens. Final Mix ajoute une tête de Mickey jaune à côté de chaque section terminée : c'est votre indicateur de progression.",
        "This is the goal that contains nearly all the others. It requires defeating every Heartless in the game at least once, meeting every character, filling in the world entries, activating every Trinity Mark, playing every mini-game and gathering all 99 puppies. Final Mix puts a yellow Mickey head next to each completed section: that is your progress indicator.",
      ),
    },
    {
      id: "dalmatiens",
      title: L("Les 99 dalmatiens", "All 99 puppies"),
      text: L(
        "Les chiots sont cachés par trois dans des coffres répartis dans tous les mondes, souvent derrière une trinité ou une capacité de déplacement obtenue tard. Les ramener chez Pongo et Perdita, à la Ville de Traverse, débloque des récompenses par paliers — dont l'Orichalque nécessaire à l'Ultima Weapon.",
        "The puppies are hidden three to a chest across every world, often behind a Trinity Mark or a movement ability obtained late. Returning them to Pongo and Perdita in Traverse Town unlocks rewards in tiers — including the Orichalcum needed for the Ultima Weapon.",
      ),
    },
    {
      id: "trinites",
      title: L("Toutes les trinités", "Every Trinity Mark"),
      text: L(
        "Cinq trinités s'apprennent au fil de l'aventure (Saut, Charge, Échelle, Poussée, Détection). Certaines ouvrent la route, la plupart cachent un trésor. Presque toutes restent activables à tout moment : les manquer ne coûte que du temps, sauf une, dans le manoir d'Oogie Boogie, qui disparaît avec le manoir dans la version d'origine.",
        "Five Trinity commands are learned along the way (Jump, Charge, Ladder, Push, Detect). Some open the way forward, most hide treasure. Nearly all stay available at any time: missing one only costs time — except one in Oogie's Manor, which disappears with the manor in the original release.",
      ),
    },
    {
      id: "rapports",
      title: L("Les treize rapports d'Ansem", "All thirteen Ansem's Reports"),
      text: L(
        "Onze rapports se ramassent au fil de l'histoire ; les trois derniers, ajoutés par Final Mix, se gagnent dans les coupes du Colisée et sur les boss optionnels. Le Journal les archive et leur lecture éclaire toute la suite de la saga.",
        "Eleven reports are found along the story; the last three, added by Final Mix, come from the Coliseum cups and the optional bosses. The Journal archives them, and reading them lights up the rest of the saga.",
      ),
    },
    {
      id: "synthese",
      title: L("La synthèse et l'Ultima Weapon", "Synthesis and the Ultima Weapon"),
      text: L(
        "Le moogle de la Ville de Traverse fabrique les objets rares à partir de matériaux lâchés par les Sans-cœur. Compléter la liste mène à l'Ultima Weapon, la meilleure Keyblade du jeu, qui réclame notamment des Orichalques trouvés en très petit nombre.",
        "The moogle in Traverse Town crafts rare items from materials dropped by Heartless. Completing the list leads to the Ultima Weapon, the game's best Keyblade, which notably requires Orichalcum found only in very small numbers.",
      ),
    },
    {
      id: "boss-optionnels",
      title: L("Les boss optionnels", "The optional bosses"),
      text: L(
        "Le Fantôme à Pays Imaginaire, Kurt Zisa à Agrabah, Sephiroth au Colisée et, ajouté par Final Mix, l'Inconnu à la Forteresse Oubliée. Ce sont les combats les plus durs du jeu, tous facultatifs, tous récompensés par un objet rare ou un rapport d'Ansem.",
        "The Phantom in Neverland, Kurt Zisa in Agrabah, Sephiroth at the Coliseum and, added by Final Mix, the Unknown in Hollow Bastion. These are the hardest fights in the game, all optional, each rewarded with a rare item or an Ansem's Report.",
      ),
    },
  ],
  sections: [
    {
      id: "plongee-au-coeur",
      title: L("Plongée au cœur", "Dive to the Heart"),
      subtitle: L("Le prologue rêvé", "The dreamed prologue"),
      entry: "kingdom-key",
      status: "done",
      level: "1",
      intro: L(
        "Le jeu s'ouvre sur un rêve. Sora tombe dans le noir et se pose sur un vitrail de Blanche-Neige : c'est la Salle de l'Éveil, un tutoriel dont on ne peut pas sortir perdant. Deux choix y sont pourtant définitifs — l'arme que l'on prend, l'arme que l'on abandonne — et trois questions y règlent discrètement toute la courbe d'expérience de la partie.",
        "The game opens on a dream. Sora falls through the dark and lands on a stained-glass platform of Snow White: this is the Station of Awakening, a tutorial you cannot lose. Two choices are permanent, though — the weapon you take and the one you give up — and three questions quietly set the experience curve for the whole run.",
      ),
      tables: [
        {
          id: "armes",
          title: L("Le choix des armes", "Choosing your weapon"),
          intro: L(
            "Trois socles : l'Épée des Rêves, le Bouclier des Rêves, le Sceptre des Rêves. On en prend une, on en abandonne une autre. L'arme prise donne un bonus immédiat ; l'arme abandonnée décale l'ordre d'apprentissage des capacités pour toute la partie. Au niveau 100, les trois chemins arrivent au même endroit.",
            "Three pedestals: the Dream Sword, the Dream Shield, the Dream Rod. You take one and give up another. The weapon you take gives an immediate bonus; the one you give up shifts the order in which abilities are learned for the whole run. At level 100 all three paths end up in the same place.",
          ),
          columns: [
            L("Arme", "Weapon"),
            L("Si vous la prenez", "If you take it"),
            L("Si vous l'abandonnez", "If you give it up"),
          ],
          rows: [
            {
              world: L("Épée des Rêves", "Dream Sword"),
              what: L("La Force la plus élevée, et un emplacement d'objet supplémentaire. Capacités offensives apprises tôt.", "The highest Strength, and one extra item slot. Offensive abilities learned early."),
              where: L("Les capacités offensives arrivent nettement plus tard : les combats du début demandent plus de patience.", "Offensive abilities arrive much later: the early fights ask for more patience."),
            },
            {
              world: L("Bouclier des Rêves", "Dream Shield"),
              what: L("La Défense la plus élevée, et deux emplacements d'objets supplémentaires. C'est le chemin qui donne les meilleures capacités défensives, et tôt.", "The highest Defense, and two extra item slots. This is the path that gives the best defensive abilities, and early."),
              where: L("La Parade et les capacités défensives sont repoussées très loin dans la partie : c'est le renoncement le plus douloureux.", "Guard and the defensive abilities are pushed very late: this is the most painful sacrifice."),
            },
            {
              world: L("Sceptre des Rêves", "Dream Rod"),
              what: L("Deux points de magie en plus — le seul moyen d'en avoir trois au départ, et les PM maximum augmentent les dégâts des sorts.", "Two extra Magic Points — the only way to start with three, and maximum MP raises spell damage."),
              where: L("Les capacités de soutien et les passifs arrivent plus tard. C'est le renoncement le plus confortable pour une première partie, Donald se chargeant de la magie.", "Support abilities and passives come later. This is the most comfortable sacrifice for a first run, since Donald handles the magic."),
            },
          ],
        },
        {
          id: "questions",
          title: L("Les trois questions", "The three questions"),
          intro: L(
            "Sur le vitrail suivant, Wakka, Tidus et Selphie posent chacun une question à trois réponses. Le contenu des réponses n'a aucune importance : seul compte leur rang. Le choix majoritaire fixe la vitesse de montée en niveau.",
            "On the next platform, Wakka, Tidus and Selphie each ask a question with three answers. The wording is irrelevant: only the rank of the answer counts. The majority choice sets your levelling speed.",
          ),
          columns: [
            L("Réponses", "Answers"),
            L("Chemin", "Path"),
            L("Effet sur l'expérience", "Effect on experience"),
          ],
          rows: [
            {
              world: L("La première, au moins deux fois", "The first, at least twice"),
              what: L("Aube", "Dawn"),
              where: L("Vous gagnez 20 % d'expérience en plus jusqu'au niveau 40, puis la progression ralentit. Le bon choix pour être fort tôt.", "You gain 20% more experience up to level 40, then progress slows. The right pick to be strong early."),
            },
            {
              world: L("Un mélange", "A mix"),
              what: L("Midi", "Midday"),
              where: L("Progression régulière du début à la fin. Aucun pic, aucun creux.", "Steady progress from beginning to end. No peak, no trough."),
            },
            {
              world: L("La troisième, au moins deux fois", "The third, at least twice"),
              what: L("Crépuscule", "Dusk"),
              where: L("30 % d'expérience en moins jusqu'au niveau 40, puis nettement plus vite — et le niveau 100 demande beaucoup moins d'expérience au total.", "30% less experience up to level 40, then much faster — and level 100 costs far less experience overall."),
            },
          ],
        },
      ],
      steps: [
        {
          id: "vitraux",
          title: L("Les vitraux, un par leçon", "One platform, one lesson"),
          image: { src: "/images/walkthrough/dive-heart.webp", credit: credit("Dive to the Heart from KH1 gameplay 1.png"), width: 420, height: 236 },
          text: L(
            "Vitrail de Blanche-Neige : avancez, la voix vous fait choisir votre arme. Vitrail de Cendrillon : premières Ombres. Tuez-en une et les autres reculent ; ramassez les sphères de vie, on ne peut pas mourir ici.\n\nFinissez toujours vos enchaînements : le troisième coup frappe le plus fort et balaie plus large, ce qui compte contre un groupe.\n\nVitrail suivant, la porte translucide sert de leçon d'interaction : examinez la porte, ouvrez le coffre, poussez la grande caisse puis brisez-la — une Potion en tombe. Pensez à la mettre dans l'inventaire, elle servira contre le boss. Brisez enfin le tonneau pour rendre la porte solide.\n\nAprès les trois questions, un dernier vitrail : une embuscade d'Ombres, puis un point de sauvegarde, puis le chemin vers la tour du boss.",
            "Snow White's platform: step forward, and the voice asks you to choose. Cinderella's platform: the first Shadows. Kill one and the rest back off; pick up the health orbs, you cannot die here.\n\nAlways finish your combos: the third hit is the strongest and sweeps widest, which matters against a group.\n\nOn the next platform, the see-through door is the interaction lesson: examine the door, open the chest, push the large crate then break it — a Potion falls out. Put it in your inventory, it will help against the boss. Finally break the barrel to make the door solid.\n\nAfter the three questions, one last platform: an ambush of Shadows, then a save point, then the path to the boss's tower.",
          ),
        },
      ],
      bosses: [
        {
          id: "darkside-reve",
          name: L("Darkside", "Darkside"),
          entry: "darkside",
          image: { src: "/images/walkthrough/darkside-kh1.webp", credit: credit("Darkside_KH.png"), width: 264, height: 287 },
          level: "1",
          tactics: L(
            "On ne peut pas perdre ici : un échec ne donne pas de game over, seulement un peu moins d'expérience.\n\nLe géant ne bouge pas de sa place et n'a que deux points vulnérables : les mains et la tête. Il ouvre toujours par un poing planté dans le sol, facile à éviter, qui fait surgir des Ombres — gênantes, mais elles lâchent des sphères de vie bienvenues.\n\nSi vous y arrivez, grimpez le long du bras jusqu'à l'épaule pour frapper la tête : les dégâts sont meilleurs et les points de technique rapportent de l'expérience en prime. Sinon, tapez le poing.\n\nDébarrassez-vous des Ombres avant l'attaque suivante : il s'agenouille, écarte les bras et tire des sphères qui vous suivent depuis le trou de sa poitrine. On peut les renvoyer au sabre, mais rester derrière lui et profiter du moment pour frapper une main est plus rentable. Il alterne ces deux attaques jusqu'à la fin : répétez, et gardez la Potion pour la mauvaise passe.",
            "You cannot lose here: failing gives no game over, only a little less experience.\n\nThe giant never moves and has only two weak points: the hands and the head. It always opens with a fist driven into the ground, easy to dodge, which spawns Shadows — a nuisance, but they drop welcome health orbs.\n\nIf you can, climb up its arm to its shoulder to hit the head: the damage is better and the tech points bring bonus experience. Otherwise, hit the fist.\n\nClear the Shadows before the next attack: it kneels, spreads its arms and fires homing orbs from the hole in its chest. They can be batted back, but staying behind it and using the window to hit a hand pays better. It alternates between those two attacks to the end: repeat, and keep the Potion for a bad moment.",
          ),
          attacks: [
            { name: L("Poing au sol", "Fist slam"), note: L("Écartez-vous, tuez les Ombres, puis grimpez le bras.", "Step aside, kill the Shadows, then climb the arm.") },
            { name: L("Sphères à tête chercheuse", "Homing orbs"), note: L("Placez-vous derrière lui, ou renvoyez-les au sabre.", "Get behind it, or bat them back.") },
          ],
        },
      ],
      missable: [
        L(
          "Rien ne se perd dans ce prologue : les coffres du rêve ne comptent pas pour le Journal. Seuls le choix des armes et celui des réponses vous suivent.",
          "Nothing is lost in this prologue: the dream chests do not count towards the Journal. Only the weapon choice and the answers follow you.",
        ),
      ],
    },
    {
      id: "iles-du-destin",
      title: L("Îles du Destin", "Destiny Islands"),
      subtitle: L("Trois jours avant la tempête", "Three days before the storm"),
      world: "destiny-islands",
      status: "done",
      level: "1 → 6",
      intro: L(
        "Le vrai début du jeu, et le seul moment où l'on peut monter de niveau contre des adversaires qui ne tuent pas. Les îles ne sont plus jamais jouables après le troisième jour : tout ce qui s'y trouve doit être pris maintenant.",
        "The real start of the game, and the only moment where you can level up against opponents who cannot kill you. The islands are never playable again after the third day: everything here has to be taken now.",
      ),
      tables: [
        {
          id: "radeau",
          title: L("Premier jour : les matériaux du radeau", "Day one: the raft materials"),
          intro: L(
            "Kairi réclame quatre matériaux. Les rapporter sans lui avoir demandé d'indices donne une Méga-Potion ; avec indices, une simple Potion.",
            "Kairi asks for four materials. Bringing them back without ever asking her for hints gives a Hi-Potion; with hints, a plain Potion.",
          ),
          columns: [L("Matériau", "Material"), L("Combien", "How many"), L("Où le trouver", "Where to find it")],
          rows: [
            { world: L("Rondin", "Log"), what: L("2", "2"), where: L("Un sur la plage toute proche, l'autre sur le petit îlot où se tient Riku.", "One on the nearby beach, the other on the small islet where Riku stands.") },
            { world: L("Tissu", "Cloth"), what: L("1", "1"), where: L("Dans la cabane perchée au centre de l'île, par la passerelle en bois.", "In the tree house at the centre of the island, across the wooden walkway.") },
            { world: L("Corde", "Rope"), what: L("1", "1"), where: L("En face de la cabane, sur la plateforme de guet de Tidus, en haut de l'échelle.", "Opposite the tree house, on Tidus's lookout platform, at the top of the ladder.") },
          ],
        },
        {
          id: "duels",
          title: L("Les duels : la meilleure expérience du début", "The duels: the best experience of the early game"),
          intro: L(
            "Répétables, sans aucun risque, et de loin la meilleure source d'expérience de ce début de partie. Viser le niveau 6 ici rend les premières heures nettement plus confortables. Chaque victoire donne une Potion.",
            "Repeatable, completely safe, and by far the best source of experience this early. Reaching level 6 here makes the first hours far more comfortable. Each win gives a Potion.",
          ),
          columns: [L("Adversaire", "Opponent"), L("Où", "Where"), L("Comment le battre", "How to beat them")],
          rows: [
            { world: L("Selphie", "Selphie"), what: L("Sur le ponton", "On the pier"), where: L("Sa corde à sauter a de l'allonge mais se pare facilement : parez, puis enchaînez. La plus simple des trois.", "Her skipping rope has reach but parries easily: parry, then follow up. The easiest of the three.") },
            { world: L("Wakka", "Wakka"), what: L("Sur la plage", "On the beach"), where: L("Renvoyez son ballon d'un coup d'épée : chaque renvoi rapporte des points de technique et finit par l'étourdir. Méfiez-vous du tir qu'il annonce en s'étirant.", "Knock his ball back with a swing: each return earns tech points and eventually stuns him. Watch for the throw he telegraphs by stretching.") },
            { world: L("Tidus", "Tidus"), what: L("Sur la plateforme de guet", "On the lookout platform"), where: L("Ne le poursuivez pas. Esquivez de côté et frappez juste après sa fente ; s'il recule d'un bond, il enchaîne toujours par un coup d'estoc.", "Do not chase him. Dodge sideways and strike right after his lunge; if he jumps back, he always follows with a thrust.") },
            { world: L("Les trois ensemble", "All three at once"), what: L("Parlez à Tidus", "Talk to Tidus"), where: L("Plus dur que Riku : le ballon de Wakka arrive pendant que vous gérez les deux autres. Éliminez Tidus en premier.", "Harder than Riku: Wakka's ball arrives while you deal with the other two. Take Tidus down first.") },
            { world: L("Riku", "Riku"), what: L("Sur son îlot", "On his islet"), where: L("Beaucoup de vie, de vitesse et de force, et une parade souvent levée. Attendez qu'il attaque pour riposter, et méfiez-vous de sa charge quand il est au sol.", "Plenty of HP, speed and power, and his guard is often up. Wait for him to attack before answering, and watch for his charge when knocked down.") },
          ],
        },
        {
          id: "provisions",
          title: L("Deuxième jour : les provisions de Kairi", "Day two: Kairi's provisions"),
          intro: L(
            "Après la course contre Riku, Kairi donne sa liste. Tout se trouve sur l'île, sans capacité particulière.",
            "After the race against Riku, Kairi gives her list. Everything is on the island, no special ability needed.",
          ),
          columns: [L("Provision", "Provision"), L("Combien", "How many"), L("Où la trouver", "Where to find it")],
          rows: [
            { world: L("Noix de coco", "Coconuts"), what: L("2", "2"), where: L("En frappant les palmiers près du radeau. Ignorez les brunes, seules les jaunes comptent.", "By hitting the palm trees near the raft. Ignore the brown ones, only the yellow count.") },
            { world: L("Champignons", "Mushrooms"), what: L("3", "3"), where: L("Un dans la grotte débloquée en poussant le rocher, un dans les buissons au pied de la tour, le dernier dans la Grotte Secrète.", "One in the cave opened by pushing the boulder, one in the bushes at the foot of the tower, the last in the Secret Place.") },
            { world: L("Poissons", "Fish"), what: L("3", "3"), where: L("Dans l'eau, juste au bord de la plage : il suffit de leur courir dessus.", "In the water right off the beach: just run them down.") },
            { world: L("Œuf de mouette", "Seagull egg"), what: L("1", "1"), where: L("En haut du grand palmier près du pont, en sautant depuis le petit palmier voisin.", "On top of the tall palm by the bridge, jumping from the smaller one next to it.") },
            { world: L("Eau douce", "Drinking water"), what: L("1", "1"), where: L("À la source sous le pont, avec la gourde donnée par Kairi.", "At the spring under the bridge, with the bottle Kairi gives you.") },
          ],
        },
      ],
      steps: [
        {
          id: "jour-1",
          title: L("Premier jour : le radeau et les duels", "Day one: the raft and the duels"),
          image: { src: "/images/walkthrough/destiny-1.webp", credit: credit("Destiny Islands from KH1 gameplay 1.png"), width: 420, height: 236 },
          text: L(
            "Parlez à Kairi, récupérez les quatre matériaux du tableau ci-dessus, mais ne les rendez pas tout de suite : allez d'abord vous battre. Les duels ne coûtent rien et rapportent l'essentiel de l'expérience du début de partie.\n\nLa cabane sur la plage abrite un point de sauvegarde. Une fois le niveau 6 atteint, rapportez les matériaux à Kairi.\n\nUn mot sur les commandes : au début, l'enchaînement au sol de Sora est lent, et on se retrouve vite bloqué dans une animation au mauvais moment. L'enchaînement aérien — un petit saut, puis l'attaque — est bien plus rapide, et c'est lui qu'il faut prendre l'habitude d'utiliser.",
            "Talk to Kairi, gather the four materials from the table above, but do not hand them in yet: go and fight first. The duels cost nothing and provide most of the early experience.\n\nThe seaside shack holds a save point. Once you reach level 6, bring the materials back to Kairi.\n\nA word on the controls: early on, Sora's ground combo is slow, and it is easy to get stuck in an animation at the wrong moment. The aerial combo — a small jump, then attack — is much faster, and it is the habit worth building.",
          ),
        },
        {
          id: "jour-2",
          title: L("Deuxième jour : la course, puis les provisions", "Day two: the race, then the provisions"),
          image: { src: "/images/walkthrough/destiny-3.webp", credit: credit("Destiny Islands from KH1 gameplay 3.png"), width: 420, height: 236 },
          text: L(
            "Riku vous arrête avant même que vous n'arriviez chez Kairi et propose une course : traverser le pont, franchir la tour, toucher l'arbre en étoile. La tyrolienne du guet est plus rapide, à condition de sauter ensuite de cime en cime plutôt que de contourner — bloquez Riku dans l'échelle si vous voulez la prendre le premier.\n\nGagner rapporte une Jolie Pierre, revendable, et la course se rejoue autant de fois qu'on veut : c'est une petite source d'argent. Le nom du radeau, lui, n'a aucune conséquence.\n\nRécupérez ensuite les provisions du tableau ci-dessus. Une seconde Méga-Potion attend si vous n'avez toujours demandé aucun indice à Kairi.",
            "Riku stops you before you even reach Kairi and offers a race: cross the bridge, get past the tower, touch the star-shaped tree. The lookout's zip line is faster, provided you then jump from treetop to treetop rather than going around — block Riku on the ladder if you want it first.\n\nWinning gives a Pretty Stone, which can be sold, and the race can be replayed as often as you like: a small source of money. The raft's name has no consequence at all.\n\nThen collect the provisions from the table above. A second Hi-Potion is waiting if you still have not asked Kairi for a single hint.",
          ),
        },
        {
          id: "jour-3",
          title: L("Troisième jour : la tempête et la Keyblade", "Day three: the storm and the Keyblade"),
          text: L(
            "La nuit tombe, l'île se couvre d'Ombres et votre épée en bois ne leur fait rien : courez jusqu'à l'îlot de Riku. Après la scène, Sora reçoit la Chaîne Royale.\n\nÀ partir de là les Ombres deviennent une bonne source d'expérience et lâchent des sphères de vie : profitez-en quelques minutes avant d'entrer dans la Grotte Secrète, par la porte apparue devant l'entrée.",
            "Night falls, the island fills with Shadows and your wooden sword does nothing to them: run to Riku's islet. After the scene, Sora receives the Kingdom Key.\n\nFrom then on the Shadows are a good source of experience and drop health orbs: farm them for a few minutes before entering the Secret Place, through the door that has appeared in front of the cave.",
          ),
        },
      ],
      bosses: [
        {
          id: "darkside",
          name: L("Darkside", "Darkside"),
          entry: "darkside",
          image: { src: "/images/walkthrough/darkside-kh1.webp", credit: credit("Darkside_KH.png"), width: 264, height: 287 },
          level: "6",
          tactics: L(
            "Le même géant que dans le rêve, mais cette fois il frappe pour de bon, et vous n'avez ni allié pour vous soigner ni magie. Gardez vos Potions et ne vous acharnez pas : le combat se gagne en frappant peu, souvent, et en restant mobile.\n\nLes poignets posés au sol sont la cible la plus sûre ; la tête encaisse davantage, quand il s'agenouille ou plante un bras dans le sol. Les Ombres qu'il invoque ne sont pas seulement une gêne : elles lâchent des sphères de vie, c'est votre seul soin gratuit.",
            "The same giant as in the dream, except this time it hits for real, and you have no ally to heal you and no magic. Keep your Potions and do not get greedy: the fight is won with short, frequent hits and constant movement.\n\nThe wrists resting on the ground are the safest target; the head takes more damage, when it kneels or drives an arm into the ground. The Shadows it summons are not only a nuisance: they drop health orbs, your only free healing.",
          ),
          attacks: [
            { name: L("Flaque d'ombre", "Dark pool"), note: L("Un poing dans le sol fait surgir des Ombres. Éloignez-vous du poing, tuez ce qui vient, frappez la tête pendant que le bras est immobilisé.", "A fist into the ground spawns Shadows. Step away from the fist, kill what comes, hit the head while the arm is pinned.") },
            { name: L("Sphères noires", "Homing orbs"), note: L("À genoux, il tire des projectiles qui vous suivent. Courez en cercle, ou renvoyez-les au sabre.", "On its knees, it fires tracking projectiles. Run in a circle, or bat them back.") },
            { name: L("Pluie d'énergie", "Energy rain"), note: L("Il libère une grosse sphère dans le ciel et des éclats retombent sur votre position. Ne restez jamais immobile.", "It releases a large orb into the sky and shards rain down on your position. Never stand still.") },
          ],
        },
      ],
      collectibles: [
        {
          kind: "chest",
          label: L("Chaîne Protectrice", "Protect Chain"),
          where: L(
            "Deuxième jour, près de la tour : soulevez la caisse, posez-la contre la paroi, grimpez jusqu'à la grotte en hauteur.",
            "Day two, near the tower: pick up the crate, drop it against the cliff wall, and climb to the cave above.",
          ),
          note: L(
            "Un petit bonus de défense, et surtout le seul coffre des îles : passer à côté ferme la porte pour de bon.",
            "A small defence bonus, and above all the only chest on the islands: missing it closes the door for good.",
          ),
        },
        {
          kind: "minigame",
          label: L("Course contre Riku", "Race against Riku"),
          where: L("Deuxième jour, sur le chemin de Kairi.", "Day two, on the way to Kairi."),
          note: L(
            "Répétable : chaque victoire donne une Jolie Pierre à revendre.",
            "Repeatable: each win gives a Pretty Stone to sell.",
          ),
        },
        {
          kind: "journal",
          label: L("Fiches des personnages des îles", "Island character entries"),
          where: L(
            "Parlez à Selphie, Tidus, Wakka et Riku, et affrontez-les au moins une fois.",
            "Talk to Selphie, Tidus, Wakka and Riku, and fight each of them at least once.",
          ),
        },
      ],
      missable: [
        L(
          "La Chaîne Protectrice : les Îles du Destin ne sont plus jamais jouables après la tempête.",
          "The Protect Chain: Destiny Islands is never playable again after the storm.",
        ),
        L(
          "Les duels contre Selphie, Tidus, Wakka et Riku, pour le Journal comme pour l'expérience.",
          "The duels against Selphie, Tidus, Wakka and Riku, both for the Journal and for the experience.",
        ),
      ],
    },
    {
      id: "ville-de-traverse-1",
      title: L("Ville de Traverse", "Traverse Town"),
      subtitle: L("Première visite", "First visit"),
      world: "traverse-town",
      status: "done",
      level: "6 → 9",
      intro: L(
        "Sora se réveille dans une ruelle d'une ville qu'il ne connaît pas, où échouent les habitants des mondes engloutis. C'est ici que le jeu commence vraiment : on y trouve les boutiques, la synthèse, la première magie, le premier vrai boss, et surtout Donald et Dingo, qui ne quitteront plus l'équipe.\n\nLa ville compte quatre zones — premier, deuxième et troisième quartier, plus la ruelle — et on y revient trois fois dans la partie. Beaucoup de ce qu'elle contient demande des capacités obtenues plus tard : inutile de s'acharner maintenant, rien ne se perd.",
        "Sora wakes up in an alley of a town he does not know, where the people of swallowed worlds wash up. This is where the game really starts: the shops, synthesis, the first magic, the first real boss, and above all Donald and Goofy, who never leave the party again.\n\nThe town has four areas — First, Second and Third District, plus the Alleyway — and you come back three times over the course of the game. Much of what it holds needs abilities obtained later: no need to force it now, nothing is lost.",
      ),
      steps: [
        {
          id: "premier-quartier",
          title: L("Le premier quartier : boutiques et point de sauvegarde", "First District: shops and save point"),
          image: { src: "/images/walkthrough/traverse-1.webp", credit: credit("Traverse Town from KH1 gameplay 2.png"), width: 420, height: 236 },
          text: L(
            "Sortez de la ruelle pour arriver sur la place. Deux boutiques : celle des objets, tenue par Riri, Fifi et Loulou, et la boutique d'accessoires de Cid, qui abrite un point de sauvegarde — c'est votre base pour toute la visite.\n\nLes accessoires de Cid ne valent pas encore leur prix ; en revanche, ramassez l'éclat de mithril dans sa boutique, il servira à la synthèse bien plus tard. Une boîte aux lettres attend sur la place : les cartes postales trouvées un peu partout s'y déposent contre des objets gratuits.\n\nParlez aux habitants avant de partir. La ville est calme tant qu'on n'entre pas dans le deuxième quartier.",
            "Leave the alley for the main plaza. Two shops: the Item Shop run by Huey, Dewey and Louie, and Cid's Accessory Shop, which holds a save point — your base for the whole visit.\n\nCid's accessories are not worth their price yet; do pick up the Mythril Shard in his shop, it feeds synthesis much later. A mailbox stands on the plaza: postcards found around town are posted there for free items.\n\nTalk to the townsfolk before moving on. The town stays quiet until you enter the Second District.",
          ),
        },
        {
          id: "deuxieme-quartier",
          title: L("Deuxième quartier : les Sans-cœur, et quatre scènes à déclencher", "Second District: the Heartless, and four scenes to trigger"),
          image: { src: "/images/walkthrough/traverse-2.webp", credit: credit("Traverse Town from KH1 gameplay 3.png"), width: 420, height: 236 },
          text: L(
            "L'entrée du deuxième quartier déclenche une scène : un homme s'effondre, son cœur lui échappe, et un Soldat apparaît avant de filer. Une embuscade d'Ombres suit — sans danger, et elles lâchent désormais des munnies.\n\nRien n'oblige à explorer, mais quatre scènes facultatives montrent Donald et Dingo à la recherche de Léon, et chacune amène des Sans-cœur supplémentaires, donc de l'expérience et de l'argent. Dans l'ordre : entrez par la première porte de l'hôtel, puis rendez-vous au magasin Gizmo — les Ombres y arrivent par vagues de plus en plus fournies —, puis approchez de l'entrée de la ruelle près de la fontaine, et enfin, après avoir ramassé ce que contient la ruelle, entrez dans la maison des dalmatiens en passant par le deuxième quartier.\n\nRevenez ensuite au premier quartier : d'autres Sans-cœur y attendent. Sauvegardez chez Cid, mettez des Potions dans l'inventaire, et ressortez.",
            "Entering the Second District triggers a scene: a man collapses, his heart escapes, and a Soldier appears before slipping away. A Shadow ambush follows — harmless, and they now drop munny.\n\nNothing forces you to explore, but four optional scenes show Donald and Goofy searching for Leon, and each brings extra Heartless, so experience and money. In order: go in through the hotel's first door, then head to the Gizmo Shop — Shadows arrive there in ever larger waves —, then approach the Alleyway entrance near the fountain, and finally, after collecting what the Alleyway holds, enter the Dalmatians' house through the Second District.\n\nThen return to the First District: more Heartless are waiting. Save at Cid's, put Potions in your inventory, and step back out.",
          ),
        },
        {
          id: "hotel",
          title: L("L'hôtel : la Keyblade expliquée, et le premier sort", "The hotel: the Keyblade explained, and the first spell"),
          text: L(
            "Après le duel contre Léon, quel qu'en soit le vainqueur, Sora se réveille dans une chambre d'hôtel avec Youfie. Parlez-lui pour comprendre le principe des serrures, puis ouvrez le coffre bleu de la table avec la Keyblade : un Élixir. Un point de sauvegarde temporaire est disponible dans la chambre.\n\nDites à Léon que vous êtes prêt. Il conseille d'ignorer les Soldats qui vous tombent dessus dans le couloir — les battre reste plus rentable, sauf peut-être le premier groupe de quatre, un peu costaud à ce niveau. Les Soldats tournoient sur eux-mêmes et frappent en vrille ; à peine plus dangereux que les Ombres.\n\nRepassez par le premier quartier : Aerith y donne une Méga-Potion. Sauvegardez, puis entrez dans le troisième quartier.",
            "After the duel with Leon, whoever wins, Sora wakes in a hotel room with Yuffie. Talk to her to learn how locks work, then open the blue chest on the table with the Keyblade: an Elixir. A temporary save point sits in the room.\n\nTell Leon you are ready. He advises ignoring the Soldiers that jump you in the corridor — beating them is still worth it, except perhaps the first group of four, a bit much at this level. Soldiers spin and drill into you; barely more dangerous than Shadows.\n\nPass back through the First District: Aerith gives you a Hi-Potion there. Save, then enter the Third District.",
          ),
        },
        {
          id: "apres-le-boss",
          title: L("Après l'Armure Gardienne : l'équipe, la magie, la trinité", "After the Guard Armor: the party, the magic, the Trinity"),
          text: L(
            "Youfie, Aerith et Léon donnent 500 munnies chacun, et Léon rend l'Élixir si vous l'avez battu. Donald enseigne Brasier, Dingo la Roulade — l'esquive la plus utilisée du jeu. Équipez-les immédiatement : une capacité apprise ne sert à rien tant qu'elle n'est pas équipée. Pensez aussi au Brave Guerrier reçu en récompense, et à Rocket pour Dingo.\n\nEn repartant par les grandes portes, le jeu vous explique les marques Trio et vous donne la Trinité Saut. Ramassez les munnies qu'elle fait apparaître.\n\nAvant de quitter la ville : postez vos cartes postales, parlez à Youfie, Aerith et Léon — c'est ainsi qu'on apprend l'existence des 99 dalmatiens —, puis dépensez chez Cid, surtout pour les armes de Donald et de Dingo. La ville n'a plus de Sans-cœur : c'est le moment tranquille pour activer les trinités accessibles et ouvrir les coffres restants.\n\nAu vaisseau Gummi, deux destinations s'ouvrent : le Colisée de l'Olympe et le Pays des Merveilles. Le Pays des Merveilles est le bon choix pour l'histoire ; un détour par le Colisée donne un sort et quelques combats, ses boss les plus durs pouvant attendre.",
            "Yuffie, Aerith and Leon each give 500 munny, and Leon hands over the Elixir if you beat him. Donald teaches Fire, Goofy teaches Dodge Roll — the most used evasion in the game. Equip them at once: a learned ability does nothing until it is equipped. Remember the Brave Warrior you also receive, and Rocket for Goofy.\n\nOn the way out through the large doors, the game explains Trinity Marks and grants Trinity Jump. Pick up the munny it reveals.\n\nBefore leaving town: post your postcards, talk to Yuffie, Aerith and Leon — that is how you learn about the 99 puppies —, then spend at Cid's, above all on Donald's and Goofy's weapons. The town is free of Heartless now: this is the quiet moment to use the reachable Trinity Marks and open the remaining chests.\n\nAt the Gummi ship, two destinations open: Olympus Coliseum and Wonderland. Wonderland is the right call for the story; a detour to the Coliseum gives a spell and a few fights, its harder bosses can wait.",
          ),
        },
      ],
      tables: [
        {
          id: "a-faire",
          title: L("Ce qui se débloque ici", "What opens up here"),
          intro: L(
            "La première visite est celle qui donne les outils du reste de la partie.",
            "The first visit is the one that hands you the tools for the rest of the game.",
          ),
          columns: [L("Ce qu'on obtient", "What you get"), L("Quand", "When"), L("À quoi ça sert", "What it is for")],
          rows: [
            { world: L("Donald et Dingo", "Donald and Goofy"), what: L("Après l'Armure Gardienne", "After the Guard Armor"), where: L("Équipiers permanents : on peut régler leurs capacités, leur équipement, leurs objets et leur comportement au combat.", "Permanent party members: you can set their abilities, equipment, items and battle behaviour.") },
            { world: L("Brasier", "Fire"), what: L("Donald, après le boss", "Donald, after the boss"), where: L("La première magie offensive, et la seule attaque à distance pendant plusieurs mondes.", "The first offensive magic, and the only ranged attack for several worlds.") },
            { world: L("Roulade", "Dodge Roll"), what: L("Dingo, après le boss", "Goofy, after the boss"), where: L("L'esquive de base. À équiper tout de suite, elle change tous les combats.", "The basic evasion. Equip it right away, it changes every fight.") },
            { world: L("Trinité Saut", "Trinity Jump"), what: L("En quittant la ville", "As you leave town"), where: L("La première des cinq marques Trio ; elle ouvre des trésors dans tous les mondes.", "The first of the five Trinity commands; it opens treasures in every world.") },
            { world: L("Brave Guerrier", "Brave Warrior"), what: L("Récompense du boss", "Boss reward"), where: L("Accessoire : de la force en plus, à équiper immédiatement.", "Accessory: extra strength, equip it immediately.") },
            { world: L("1 500 munnies", "1,500 munny"), what: L("Youfie, Aerith et Léon", "Yuffie, Aerith and Leon"), where: L("De quoi renouveler les armes de Donald et de Dingo à la boutique de Cid.", "Enough to renew Donald's and Goofy's weapons at Cid's shop.") },
          ],
        },
        {
          id: "plus-tard",
          title: L("Ce qu'il faudra revenir chercher", "What you will have to come back for"),
          intro: L(
            "Rien de tout cela n'est accessible à la première visite. C'est normal : la ville se rouvre deux fois.",
            "None of this is reachable on the first visit. That is normal: the town opens up twice more.",
          ),
          columns: [L("Ce qu'on y trouve", "What is there"), L("Où", "Where"), L("Ce qu'il faut avoir", "What you need")],
          rows: [
            { world: L("Chiots 1 à 3", "Puppies 1 to 3"), what: L("Maison mystique, sur le rocher", "Mystical House, on the rock"), where: L("Planer, ou la Nage de sirène d'Atlantica.", "Glide, or Mermaid Kick from Atlantica.") },
            { world: L("Chiots 4 à 6", "Puppies 4 to 6"), what: L("Ruelle, derrière les caisses", "Alleyway, behind the crates"), where: L("Trinité Charge.", "Trinity Charge.") },
            { world: L("Chiots 7 à 9", "Puppies 7 to 9"), what: L("Atelier, au-dessus de la boutique d'accessoires", "Item Workshop, above the Accessory Shop"), where: L("Trinité Échelle.", "Trinity Ladder.") },
            { world: L("Chiots 10 à 12 et un Orichalque", "Puppies 10 to 12 and an Orichalcum"), what: L("Égout secret", "Secret Waterway"), where: L("Trinité Charge pour entrer, Trinité Détection pour l'Orichalque.", "Trinity Charge to get in, Trinity Detect for the Orichalcum.") },
            { world: L("L'atelier du mog", "The moogle workshop"), what: L("Au-dessus de la boutique d'accessoires", "Above the Accessory Shop"), where: L("Trinité Échelle. C'est là que se fait toute la synthèse du jeu.", "Trinity Ladder. All the game's synthesis happens there.") },
          ],
        },
      ],
      bosses: [
        {
          id: "leon",
          name: L("Léon", "Leon"),
          entry: "leon",
          level: "7",
          tactics: L(
            "Ce duel est facultatif et se perdre n'a rien de grave : on y laisse seulement un Élixir et une trentaine de points d'expérience. Il reste rude à ce stade de la partie.\n\nLéon avance lentement et frappe de taille ou d'estoc dès qu'on approche, avec une allonge très supérieure à la vôtre. Au corps à corps, il encaisse sans broncher et riposte aussitôt : ne restez pas collé à lui.\n\nSa boule de feu, en revanche, se renvoie d'un coup d'épée exactement comme le ballon de Wakka — elle l'étourdit et ouvre un enchaînement complet. C'est là que se gagne le combat. Son autre ouverture est son saut : en l'air, il est entièrement vulnérable, et un enchaînement aérien le cueille à l'atterrissage.\n\nToute la place du premier quartier sert d'arène : n'hésitez pas à prendre du champ pour boire une Potion.",
            "This duel is optional and losing costs little: only an Elixir and about thirty experience points. It is still rough at this stage.\n\nLeon advances slowly and swings or thrusts as soon as you get close, with far more reach than you have. Up close he shrugs off hits and counters immediately: do not stay glued to him.\n\nHis fireball, though, can be knocked back with a swing exactly like Wakka's ball — it stuns him and opens a full combo. That is where the fight is won. His other opening is his jump: in the air he is completely vulnerable, and an aerial combo catches him on the way down.\n\nThe whole First District plaza is the arena: do not hesitate to back off for a Potion.",
          ),
          attacks: [
            { name: L("Boule de feu", "Fireball"), note: L("Renvoyez-la au sabre : elle l'étourdit. Rapide, mais elle perd en précision à longue portée.", "Knock it back with a swing: it stuns him. Fast, but less accurate at long range.") },
            { name: L("Saut d'approche", "Closing jump"), note: L("Le seul moment où il est vulnérable. Enchaînement aérien.", "The one moment he is vulnerable. Aerial combo.") },
          ],
        },
        {
          id: "guard-armor",
          name: L("Armure Gardienne", "Guard Armor"),
          entry: "guard-armor",
          level: "9",
          tactics: L(
            "Cinq morceaux : deux gantelets, deux pieds-marteaux et un torse. Les gantelets tournent autour du corps, les pieds martèlent le sol, et le torse, une fois seul, se met à tourbillonner.\n\nFrappez les gantelets en premier, ils ont le moins de vie, puis les pieds, et le torse en dernier. Chaque morceau détruit fait tomber une pluie de sphères de vie et prive l'armure d'une attaque : le combat devient plus facile à mesure qu'il avance, et quand il ne reste que le torse, il tombe généralement avant d'avoir eu le temps de tourbillonner.\n\nC'est aussi votre premier combat à trois. Donald et Dingo ne sont encore que des leurres utiles : on peut leur donner des Potions, mais ne comptez pas sur eux pour les dégâts.",
            "Five parts: two gauntlets, two hammer legs and a torso. The gauntlets orbit the body, the legs stomp around, and the torso, once alone, starts spinning.\n\nHit the gauntlets first, they have the least HP, then the legs, and the torso last. Each destroyed part drops a shower of health orbs and takes an attack away from the armour: the fight gets easier as it goes, and when only the torso is left it usually falls before it can spin at all.\n\nThis is also your first three-person fight. Donald and Goofy are still little more than useful decoys: you can hand them Potions, but do not count on them for damage.",
          ),
          attacks: [
            { name: L("Écrasement", "Body slam"), note: L("L'armure entière saute et retombe sur vous. Sa plus dangereuse attaque, mais elle se voit venir : sautez de côté.", "The whole armour leaps and lands on you. Its most dangerous attack, but well telegraphed: jump aside.") },
            { name: L("Tourbillon", "Spin"), note: L("Le torse seul se met à tourner et vous poursuit. Il s'amorce d'abord : un coup au bon moment l'étourdit.", "The lone torso spins and homes in. It winds up first: a well-timed hit stuns it.") },
          ],
        },
      ],
      collectibles: [
        {
          kind: "chest",
          label: L("Éclat de mithril", "Mythril Shard"),
          where: L("Dans la boutique d'accessoires de Cid, premier quartier.", "In Cid's Accessory Shop, First District."),
          note: L("Sans usage immédiat : c'est un matériau de synthèse.", "No immediate use: it is a synthesis material."),
        },
        {
          kind: "chest",
          label: L("Élixir", "Elixir"),
          where: L("Coffre bleu de la chambre d'hôtel, à ouvrir avec la Keyblade.", "Blue chest in the hotel room, opened with the Keyblade."),
        },
        {
          kind: "report",
          label: L("Cartes postales", "Postcards"),
          where: L("Dans des coffres et en examinant certains objets de la ville ; à poster dans la boîte aux lettres du premier quartier.", "In chests and by examining certain objects around town; posted in the First District mailbox."),
          note: L("Chaque carte rapporte un objet gratuit. Il y en a dix en tout dans le jeu.", "Each postcard is worth a free item. There are ten in the game."),
        },
        {
          kind: "trinity",
          label: L("Trinité Saut", "Trinity Jump"),
          where: L("Apprise en quittant la ville, après l'Armure Gardienne.", "Learned as you leave town, after the Guard Armor."),
          note: L("Quatre marques bleues attendent déjà dans la ville : deux au premier quartier, une au troisième, une au bureau du magicien.", "Four blue marks already wait in town: two in the First District, one in the Third, one in the Magician's Study."),
        },
      ],
      missable: [
        L(
          "Rien ne se perd ici : la ville se revisite deux fois, et tous ses coffres restent accessibles jusqu'à la fin du jeu.",
          "Nothing is lost here: the town is revisited twice, and all its chests stay reachable until the end of the game.",
        ),
        L(
          "Léon n'apparaît qu'après avoir vaincu au moins cinq Sans-cœur : si la scène ne se déclenche pas, allez vous battre dans le deuxième quartier.",
          "Leon only appears once you have defeated at least five Heartless: if the scene does not trigger, go and fight in the Second District.",
        ),
      ],
    },
    {
      id: "pays-des-merveilles",
      title: L("Pays des Merveilles", "Wonderland"),
      world: "wonderland",
      status: "done",
      level: "9 → 12",
      intro: L(
        "Le monde d'Alice, et le premier vrai casse-tête du jeu : on y change de taille, on marche sur les murs et au plafond, et la même pièce — la Salle Bizarre — se traverse dans cinq états différents. Perdre du temps ici est normal ; se perdre l'est aussi.\n\nC'est aussi le monde qui donne Glacier, indispensable contre les Sans-cœur de feu, et qui abrite les Champignons Blancs, ces ennemis pacifiques qui réclament un sort précis.",
        "Alice's world, and the game's first real puzzle: you change size, walk on the walls and the ceiling, and the same room — the Bizarre Room — is crossed in five different states. Losing time here is normal; getting lost is too.\n\nIt is also the world that gives Blizzard, essential against fire Heartless, and home to the White Mushrooms, those peaceful enemies that ask for a specific spell.",
      ),
      steps: [
        {
          id: "salle-bizarre",
          title: L("La Salle Bizarre : pousser le lit, rapetisser", "The Bizarre Room: push the bed, shrink"),
          image: { src: "/images/walkthrough/wonderland-1.webp", credit: credit("Wonderland from KH1 gameplay 1.png"), width: 420, height: 236 },
          text: L(
            "Suivez le Lapin Blanc dans la Salle Bizarre. Poussez le lit contre le mur — c'est ce geste qui ouvre le passage du fond, et l'oublier fait perdre dix minutes —, parlez à la Poignée de Porte, puis buvez la fiole bleue pour rapetisser et sautez de la table.\n\nEn bas, un groupe d'Ombres, de Soldats et de Nocturnes Rouges. Ces derniers volent et lancent des boules de feu : ne leur envoyez surtout pas Brasier, ils l'absorbent et se soignent. Vos points de magie se rechargent en frappant physiquement, et les ennemis lâchent désormais des sphères de magie.\n\nPassez derrière le lit pour rejoindre le château de la Reine. Si le passage est fermé, c'est que le lit n'a pas été poussé : remontez sur la table, buvez l'autre fiole pour grandir, poussez, et rapetissez de nouveau.",
            "Follow the White Rabbit into the Bizarre Room. Push the bed against the wall — that single action opens the passage at the back, and forgetting it costs ten minutes —, talk to the Doorknob, then drink the blue bottle to shrink and jump off the table.\n\nDown below, a group of Shadows, Soldiers and Red Nocturnes. The latter fly and throw fireballs: never cast Fire at them, they absorb it and heal. Your magic recharges by landing physical hits, and enemies now drop MP orbs.\n\nGo behind the bed to reach the Queen's Castle. If the passage is closed, the bed was not pushed: climb back on the table, drink the other bottle to grow, push it, and shrink again.",
          ),
        },
        {
          id: "preuves",
          title: L("Les quatre preuves, et le sort Glacier", "The four pieces of evidence, and Blizzard"),
          text: L(
            "Le procès d'Alice s'ouvre : il faut des preuves. Il y en a quatre à trouver, mais **une seule suffit** pour continuer l'histoire — les autres sont pour le plaisir, et surtout pour Glacier.\n\nDans la forêt de lotus : la première (Empreintes) se trouve derrière la fleur rouge de droite, près d'une marque Trio bleue. La deuxième (Odeur) s'atteint en grimpant les plateformes voisines et en entrant dans le trou du tronc : on retombe dans la Salle Bizarre, sur la cuisinière. La troisième (Antenne) est au fond de la forêt, sur une plateforme près du rocher qui bloque une sortie.\n\nLa quatrième demande une manipulation : donnez une Potion à la fleur jaune pour grandir, marchez sur la souche pour faire apparaître une plateforme, frappez la noix de la branche et mangez-la pour rapetisser (frappez l'arbre si la noix doit réapparaître). Montez sur la plateforme, passez par le trou du mur : on arrive dans la Salle Bizarre, tout juste à hauteur d'une étagère où attend la dernière preuve (Griffures).\n\nLes quatre réunies, le Chat du Cheshire enseigne **Glacier** : large, portée moyenne, redoutable contre les ennemis de feu et contre les groupes serrés. Sans les quatre preuves, le sort n'arrive qu'après le boss final du monde.\n\nLes fleurs de la forêt échangent volontiers un objet contre un meilleur : placez l'objet dans votre inventaire, utilisez-le et désignez la fleur.",
            "Alice's trial opens: it needs evidence. There are four pieces to find, but **one is enough** to continue the story — the others are for the pleasure of it, and above all for Blizzard.\n\nIn the Lotus Forest: the first (Footprints) sits behind the red flower on the right, near a blue Trinity Mark. The second (Stench) is reached by climbing the nearby platforms and entering the hole in the trunk: you land in the Bizarre Room, on the stove. The third (Antenna) is at the back of the forest, on a platform near the boulder blocking an exit.\n\nThe fourth takes some handling: give a Potion to the yellow flower to grow, walk on the tree stump to make a platform appear, hit the nut on the branch and eat it to shrink (hit the tree if the nut needs to respawn). Climb the new platform, go through the hole in the wall: you end up in the Bizarre Room, just barely level with a shelf holding the last piece (Claw Marks).\n\nWith all four, the Cheshire Cat teaches **Blizzard**: wide, medium range, brutal against fire enemies and tight groups. Without all four, the spell only comes after the world's final boss.\n\nThe flowers in the forest happily trade an item for a better one: put the item in your inventory, use it, and pick the flower as the target.",
          ),
        },
        {
          id: "murs-et-plafond",
          title: L("Les murs, le plafond, et les lampes à allumer", "The walls, the ceiling, and the lamps to light"),
          text: L(
            "Après le procès, retournez à la forêt de lotus : une fleur rouge crache un rocher, et un nouveau Sans-cœur apparaît — le Costaud. Il encaisse tout de face : passez derrière lui, ou frappez-le à la magie. À 40 % de vie il s'enrage et charge ; une parade au bon moment l'arrête net.\n\nLes trois passages qui mènent à la Salle Bizarre depuis la forêt permettent désormais de marcher **sur les murs**. Explorez-les : objets utiles, dont un Boost de défense, et des ennemis. Le jardin du thé s'ouvre aussi — asseyez-vous sur les chaises vides (lisez le panneau d'abord) pour faire apparaître objets et ennemis.\n\nPar la porte de la maison, on ressort dans la Salle Bizarre, cette fois **au plafond**. Suivez le conseil du Chat : allumez les lampes pour éclairer la pièce. Redescendez vers la table aux fioles, reparlez au Chat, et le Farceur apparaît.",
            "After the trial, return to the Lotus Forest: a red flower spits out a rock, and a new Heartless appears — the Large Body. It shrugs off everything from the front: get behind it, or use magic. At 40% HP it enrages and charges; a well-timed block stops it cold.\n\nThe three passages leading to the Bizarre Room from the forest now let you walk **on the walls**. Explore them: useful items, including a Defense Up, and enemies. The Tea Party Garden opens too — sit on the empty chairs (read the sign first) to make items and enemies appear.\n\nThrough the door in the house you come out in the Bizarre Room again, this time **on the ceiling**. Follow the Cat's advice: light the lamps to brighten the room. Go back down to the table with the bottles, talk to the Cat again, and the Trickmaster appears.",
          ),
        },
      ],
      tables: [
        {
          id: "preuves-table",
          title: L("Les quatre preuves", "The four pieces of evidence"),
          intro: L(
            "Une seule suffit pour l'histoire ; les quatre donnent Glacier tout de suite.",
            "One is enough for the story; all four give Blizzard right away.",
          ),
          columns: [L("Preuve", "Evidence"), L("Où", "Where"), L("Comment y arriver", "How to get there")],
          rows: [
            { world: L("Empreintes", "Footprints"), what: L("Forêt de lotus", "Lotus Forest"), where: L("Derrière la fleur rouge de droite, dans le renfoncement à la marque Trio bleue.", "Behind the red flower on the right, in the alcove with the blue Trinity Mark.") },
            { world: L("Odeur", "Stench"), what: L("Salle Bizarre, sur la cuisinière", "Bizarre Room, on the stove"), where: L("Grimpez les plateformes de la forêt et entrez dans le trou du tronc.", "Climb the platforms in the forest and enter the hole in the trunk.") },
            { world: L("Antenne", "Antenna"), what: L("Forêt de lotus, au fond", "Lotus Forest, at the back"), where: L("Sur la plateforme près du rocher qui bloque une sortie.", "On the platform near the boulder blocking an exit.") },
            { world: L("Griffures", "Claw Marks"), what: L("Salle Bizarre, sur une étagère", "Bizarre Room, on a shelf"), where: L("Grandissez avec une Potion donnée à la fleur jaune, marchez sur la souche, frappez et mangez la noix pour rapetisser, puis passez par le trou du mur.", "Grow with a Potion given to the yellow flower, walk on the stump, hit and eat the nut to shrink, then go through the hole in the wall.") },
          ],
        },
      ],
      bosses: [
        {
          id: "crank-tower",
          entry: "crank-tower",
          name: L("La tour à manivelles", "The Crank Tower"),
          level: "10",
          tactics: L(
            "Ce n'est pas vraiment un combat. La Reine mélange les boîtes et vous en fait choisir une : les boîtes qui tombent le plus vite sont les siennes, celles qui contiennent Donald et Dingo. Si vous tombez dessus, ils sont mis en cage — frappez les cages pour les libérer.\n\nLes soldats-cartes ne frappent qu'au corps à corps et ne meurent pas : on les assomme, la Reine les réveille. Elle-même est presque inoffensive. La vraie cible est la tour, un objet inanimé qui retient la cage d'Alice : elle ne perd pas de vie mais casse après un certain nombre de coups, et chaque manivelle détruite libère une grosse récolte de vie, de magie ou de munnies.",
            "This is barely a fight. The Queen shuffles the boxes and asks you to pick one: the boxes that fall fastest are hers, the ones holding Donald and Goofy. If you pick those, they get caged — hit the cages to free them.\n\nThe Card Soldiers only hit in melee and never die: you knock them out, the Queen wakes them up. She herself is nearly harmless. The real target is the tower, an inanimate object holding Alice's cage: it has no HP but breaks after a set number of hits, and each destroyed crank releases a large batch of health, magic or munny.",
          ),
        },
        {
          id: "trickmaster",
          name: L("Le Farceur", "Trickmaster"),
          entry: "trickmaster",
          level: "12",
          tactics: L(
            "Il n'encaisse que sur le torse, et ses jambes le tiennent trop haut pour qu'on l'atteigne au sol. La bonne méthode est de grimper sur la table ou la chaise et d'enchaîner en l'air ; il s'effondre parfois quelques secondes en lâchant des sphères de vie, ce qui offre des coups gratuits.\n\nSes coups de pied et ses moulinets de bâtons font peu de dégâts et s'évitent en restant collé à ses flancs. Attention : si vous abusez de la table et de la chaise, il les aplatit ou fait tourner la chaise, et le timing des sauts devient pénible — elles reviennent à la normale au bout d'un moment.\n\nLa Foudre, si vous l'avez, est de loin la magie la plus efficace. Brasier est un piège : il enflamme ses bâtons, double ses dégâts et lui donne un lance-flammes. S'il va lui-même allumer ses bâtons à la cuisinière, lancez Glacier sur la grille du bas pour éteindre le feu avant qu'il n'y arrive.",
            "It only takes damage on the torso, and its legs hold it too high to reach from the ground. The right method is to climb the table or the chair and combo in the air; it sometimes collapses for a few seconds, dropping health orbs and offering free hits.\n\nIts kicks and baton sweeps do little damage and are avoided by hugging its sides. Careful: lean too much on the table and chair and it flattens them or sets the chair spinning, making jump timing miserable — they return to normal after a while.\n\nThunder, if you have it, is by far the most effective magic. Fire is a trap: it sets its batons alight, doubling its damage and giving it a flamethrower. If it heads to the stove to light them itself, cast Blizzard on the grate below to douse the fire before it gets there.",
          ),
          attacks: [
            { name: L("Bâtons enflammés", "Burning batons"), note: L("Provoqués par votre propre Brasier, ou allumés à la cuisinière. Glacier les refroidit ; mieux vaut éteindre la cuisinière avant.", "Caused by your own Fire, or lit at the stove. Blizzard cools them; better to douse the stove first.") },
            { name: L("Boules de feu", "Fireballs"), note: L("Une fois les bâtons allumés seulement. Se renvoient au sabre.", "Only once the batons are lit. They can be knocked back.") },
          ],
        },
      ],
      collectibles: [
        {
          kind: "ability",
          label: L("Glacier", "Blizzard"),
          where: L("Du Chat du Cheshire, après avoir réuni les quatre preuves.", "From the Cheshire Cat, after gathering all four pieces of evidence."),
          note: L("Sans les quatre preuves, le sort n'arrive qu'après le Farceur.", "Without all four, the spell only comes after the Trickmaster."),
        },
        {
          kind: "chest",
          label: L("Nécessaire de camping", "Camping Set"),
          where: L("Dans la salle du terrier, au tout début : revenez-y et battez les vagues d'ennemis.", "In the Rabbit Hole room, right at the start: come back and clear the waves of enemies."),
          note: L("Signalé comme ratable par plusieurs guides ; il se récupère aussi après le boss.", "Flagged as missable by several guides; it can also be picked up after the boss."),
        },
        {
          kind: "chest",
          label: L("Boost de défense", "Defense Up"),
          where: L("Dans la Salle Bizarre, en la parcourant sur les murs après le procès.", "In the Bizarre Room, walking on the walls after the trial."),
        },
        {
          kind: "minigame",
          label: L("Champignons Blancs", "White Mushrooms"),
          where: L("Un peu partout dans le monde.", "Scattered around the world."),
          note: L("Ils miment un sort : lancez le bon trois fois pour une récompense, trois fois le même pour un Art de sort et une meilleure chance d'obtenir la précieuse Gelée Mystère.", "They mime a spell: cast the right one three times for a reward, the same one three times for a spell Art and a better chance at the valuable Mystery Goo."),
        },
      ],
      missable: [
        L(
          "Rien ne se perd définitivement : le monde reste accessible jusqu'à la fin de la partie.",
          "Nothing is lost for good: the world stays reachable until the end of the game.",
        ),
      ],
    },
    {
      id: "colisee-de-l-olympe",
      title: L("Colisée de l'Olympe", "Olympus Coliseum"),
      world: "olympus",
      status: "done",
      level: "12 → 15",
      intro: L(
        "Le Colisée n'est pas un monde comme les autres : pas d'exploration, pas de trou de serrure à sceller pour l'instant, mais un hall, une arène, et des tournois qui rouvrent tout au long de la partie.\n\nOn peut y passer dès la sortie de la Ville de Traverse, avant même le Pays des Merveilles : il n'y a aucun combat obligatoire à l'entrée, et l'entraînement de Phil donne la Foudre — la magie la plus utile du début de partie. Les tournois, eux, valent mieux d'être abordés après le Pays des Merveilles.",
        "The Coliseum is not a world like the others: no exploration, no Keyhole to seal for now, but a lobby, an arena, and tournaments that reopen throughout the game.\n\nYou can drop by straight out of Traverse Town, before Wonderland: there is no mandatory fight at the entrance, and Phil's training gives Thunder — the most useful magic of the early game. The tournaments, though, are better tackled after Wonderland.",
      ),
      steps: [
        {
          id: "entrainement",
          title: L("L'entraînement de Phil, et la Foudre", "Phil's training, and Thunder"),
          image: { src: "/images/walkthrough/olympus-1.webp", credit: credit("Olympus Coliseum from KH1 gameplay 1.png"), width: 420, height: 236 },
          text: L(
            "Devant le Colisée, activez les deux marques Trio bleues et ouvrez l'unique coffre. Entrez dans le hall, parlez à Phil, poussez le bloc comme il le demande, reparlez-lui, et l'entraînement commence.\n\nLe principe : détruire tous les tonneaux dans le temps imparti. Ce n'est pas un test de vitesse mais de placement — un coup de fin d'enchaînement projette un tonneau, qui détruit ceux qu'il percute. Pensez à déséquiper les capacités de finition gênantes, elles cassent l'enchaînement au mauvais moment.\n\nPremière épreuve : 20 tonneaux en 30 secondes. Avancez tout droit et enchaînez chaque pile. Les deux derniers demandent un placement précis : frappez l'un pour projeter l'autre. À court de temps, Brasier fait l'affaire.\n\nDeuxième épreuve : 25 tonneaux en 60 secondes, sur une zone plus large. Faites le tour par la droite, frappez le tonneau isolé pour abattre la pile de deux, répétez derrière, puis revenez casser la pile de quatre à gauche du point de départ, et finissez par les plateformes.\n\nLes deux réussies, Phil enseigne **la Foudre** : une attaque de zone qui frappe plusieurs ennemis à la fois, bien plus efficace que Brasier contre les groupes. L'entraînement reste rejouable, mais il ne rapporte plus rien et devient inaccessible plus tard.",
            "Outside the Coliseum, activate the two blue Trinity Marks and open the single chest. Step into the lobby, talk to Phil, push the block as asked, talk again, and the training begins.\n\nThe idea: destroy every barrel within the time limit. It is not a speed test but a positioning one — a combo finisher launches a barrel, which destroys whatever it hits. Unequip awkward finishing abilities, they break the combo at the wrong moment.\n\nFirst trial: 20 barrels in 30 seconds. Walk straight ahead and combo each stack. The last two need precise placement: hit one to launch it into the other. Short on time, Fire does the job.\n\nSecond trial: 25 barrels in 60 seconds, over a wider area. Go right around the main square, hit the lone barrel to bring down the stack of two, repeat behind, then come back for the stack of four left of your starting point, and finish with the platforms.\n\nBoth cleared, Phil teaches **Thunder**: an area attack that hits several enemies at once, far better than Fire against groups. The training stays replayable, but gives nothing more and becomes unavailable later.",
          ),
        },
        {
          id: "tournoi",
          title: L("Le tournoi préliminaire", "The Preliminary Tournament"),
          text: L(
            "Hadès glisse un laissez-passer à Sora : reparlez à Phil pour entrer. Sept matchs s'enchaînent sans pause — la vie et la magie se reportent d'un match à l'autre, et le menu est inaccessible pendant le tournoi. C'est une épreuve d'endurance, pas une suite de combats.\n\nLes ennemis n'y lâchent ni sphères ni objets : tout se joue sur la récompense finale. On y découvre les Rhapsodies Bleues, petits Sans-cœur volants qui lancent des sorts de glace et craignent le feu, et un Costaud, invulnérable de face mais pas à la magie.\n\nLa Foudre règle vite les Ombres et les Soldats, beaucoup moins les Rhapsodies et les Nocturnes : contre elles, il faut viser une par une en roulant pour ne pas se faire encercler. Le septième match oppose à Cloud.",
            "Hades slips Sora an entry pass: talk to Phil again to enter. Seven matches follow without a break — HP and MP carry over, and the menu is locked during the tournament. It is an endurance run, not a series of fights.\n\nEnemies drop neither orbs nor items here: everything rides on the final reward. You meet the Blue Rhapsodies, small flying Heartless that cast ice and fear fire, and one Large Body, invulnerable from the front but not to magic.\n\nThunder clears Shadows and Soldiers quickly, Rhapsodies and Nocturnes much less: against those, target them one at a time and roll to avoid being surrounded. The seventh match is against Cloud.",
          ),
        },
      ],
      tables: [
        {
          id: "matchs",
          title: L("Les sept matchs du tournoi préliminaire", "The seven preliminary matches"),
          intro: L(
            "Aucune pause entre les matchs : soignez-vous quand un match se termine mal.",
            "No break between matches: heal up whenever one ends badly.",
          ),
          columns: [L("Match", "Match"), L("Nom", "Name"), L("Adversaires", "Opponents")],
          rows: [
            { world: L("1", "1"), what: L("Éclaireur de l'ombre", "Shadow Scout"), where: L("4 Soldats, 3 Rhapsodies Bleues.", "4 Soldiers, 3 Blue Rhapsodies.") },
            { world: L("2", "2"), what: L("Les Sinistres", "Sinisters"), where: L("10 Ombres, 3 Rhapsodies Bleues.", "10 Shadows, 3 Blue Rhapsodies.") },
            { world: L("3", "3"), what: L("Chaud et froid", "Heat & Freeze"), where: L("5 Rhapsodies Bleues, 5 Nocturnes Rouges.", "5 Blue Rhapsodies, 5 Red Nocturnes.") },
            { world: L("4", "4"), what: L("Peloton de l'ombre", "Shadow Platoon"), where: L("3 Rhapsodies Bleues, 3 Nocturnes Rouges, 2 Ombres, 2 Soldats.", "3 Blue Rhapsodies, 3 Red Nocturnes, 2 Shadows, 2 Soldiers.") },
            { world: L("5", "5"), what: L("Revanche bleue", "Blue Revenge"), where: L("9 Rhapsodies Bleues.", "9 Blue Rhapsodies.") },
            { world: L("6", "6"), what: L("Le Gros", "Big One"), where: L("1 Costaud, 4 Rhapsodies Bleues, 4 Nocturnes Rouges.", "1 Large Body, 4 Blue Rhapsodies, 4 Red Nocturnes.") },
            { world: L("7", "7"), what: L("Cloud", "Cloud"), where: L("Cloud seul. On a le droit de perdre : on n'y laisse que de l'expérience.", "Cloud alone. You are allowed to lose: only experience is at stake.") },
          ],
        },
      ],
      bosses: [
        {
          id: "cloud",
          name: L("Cloud", "Cloud"),
          entry: "cloud",
          level: "14",
          tactics: L(
            "Trois attaques, toutes lisibles. Un enchaînement large de trois coups d'épée, qu'on évite en ne restant jamais devant lui. Une ruée suivie d'un estoc, qu'il enchaîne volontiers mais qu'il annonce en grognant — une roulade sur le côté suffit. Et un saut qui retombe sur votre position, à esquiver de la même façon.\n\nDonald et Dingo tomberont sans doute : ignorez-les et gardez vos Potions pour vous. Cloud résiste à Brasier et à Glacier, mais pas à la Foudre — cela dit, Brasier se relance bien plus souvent, ce qui compense.\n\nComme Léon, il ne se laisse pas facilement étourdir, recule et pare : ne restez pas collé à lui, tournez et frappez de flanc ou de dos.",
            "Three attacks, all readable. A wide three-hit sword combo, avoided by never standing in front of him. A dash into a thrust, which he happily repeats but telegraphs with a grunt — a sideways roll is enough. And a jump that lands on your position, dodged the same way.\n\nDonald and Goofy will probably fall: ignore them and keep your Potions for yourself. Cloud resists Fire and Blizzard but not Thunder — though Fire comes back far more often, which evens it out.\n\nLike Leon, he is hard to stagger, backs off and blocks: do not stay glued to him, circle and strike from the flank or behind.",
          ),
        },
        {
          id: "cerberus",
          name: L("Cerbère", "Cerberus"),
          entry: "cerberus",
          level: "15",
          tactics: L(
            "Il apparaît que vous ayez gagné ou perdu contre Cloud. Il est difficile à ce stade : revenir plus tard, après le Pays des Merveilles ou la Jungle Profonde, est parfaitement légitime.\n\nIl est énorme, mais l'arène l'est aussi : servez-vous de toute la place. Ses seuls points faibles sont ses trois têtes. Attaquez-en une par le côté et roulez dès qu'elle s'arme pour mordre — la morsure écrase tout ce qui se trouve devant lui, et un peu sur les côtés.\n\nBrasier et Glacier mordent peu sur les têtes ; la Foudre, elle, frappe les trois cibles à la fois et passe très bien. Tant que vous évitez les ondes de choc, les boules de feu et les pointes d'énergie, ses phases de morsure sont votre fenêtre de dégâts.",
            "He shows up whether you beat Cloud or not. He is hard at this stage: coming back later, after Wonderland or Deep Jungle, is perfectly reasonable.\n\nHe is enormous, but so is the arena: use all of it. His only weak points are his three heads. Attack one from the side and roll away as soon as it winds up to bite — the bite crushes everything in front of him, and somewhat to the sides.\n\nFire and Blizzard barely dent the heads; Thunder hits all three targets at once and works very well. As long as you keep dodging the shockwaves, fireballs and energy spikes, his biting phases are your damage window.",
          ),
          attacks: [
            { name: L("Boules de feu", "Fireballs"), note: L("Il marche en crachant : roulez, ou renvoyez-les au bon moment.", "He walks while spitting: roll, or knock them back at the right moment.") },
            { name: L("Écrasement", "Ground slam"), note: L("Il se cabre puis retombe, provoquant une onde de choc. Bien annoncé.", "He rears up then slams down with a shockwave. Well telegraphed.") },
            { name: L("Pointes de ténèbres", "Energy spikes"), note: L("Il déverse des ténèbres au sol, et des pointes jaillissent sous vos pieds. Roulez sans vous arrêter ; il enchaîne souvent avec ses boules de feu.", "He pours darkness into the ground and spikes erupt under your feet. Keep rolling; he often follows with fireballs.") },
          ],
        },
      ],
      collectibles: [
        {
          kind: "ability",
          label: L("La Foudre", "Thunder"),
          where: L("De Phil, après avoir réussi les deux épreuves d'entraînement dans le temps imparti.", "From Phil, after clearing both training trials in time."),
        },
        {
          kind: "ability",
          label: L("Lame Sonique", "Sonic Blade"),
          where: L("En parlant à Cloud après la défaite de Cerbère.", "By talking to Cloud after Cerberus is defeated."),
        },
        {
          kind: "chest",
          label: L("Bandeau de l'Enfer", "Inferno Band"),
          where: L("Récompense de Cerbère. À équiper immédiatement.", "Cerberus's reward. Equip it immediately."),
        },
        {
          kind: "report",
          label: L("Licence de héros", "Hero License"),
          where: L("De Phil, après Cerbère : elle ouvre les coupes du Colisée.", "From Phil, after Cerberus: it opens the Coliseum cups."),
        },
        {
          kind: "trinity",
          label: L("Deux marques Trio bleues", "Two blue Trinity Marks"),
          where: L("Devant le Colisée, sous chacune des deux statues.", "At the Coliseum Gates, under each of the two statues."),
          note: L("Celle de droite cache les chiots 22 à 24 ; celle de gauche un éclat de mithril.", "The right one hides puppies 22 to 24; the left one a Mythril Shard."),
        },
      ],
      missable: [
        L(
          "L'entraînement de Phil devient inaccessible plus tard dans la partie : faites-le au premier passage, c'est lui qui donne la Foudre.",
          "Phil's training becomes unavailable later in the game: do it on the first visit, it is what gives Thunder.",
        ),
      ],
    },
    {
      id: "jungle-profonde",
      title: L("Jungle Profonde", "Deep Jungle"),
      world: "deep-jungle",
      status: "done",
      level: "15 → 18",
      intro: L(
        "Le monde de Tarzan, et le seul du jeu où l'on commence seul, sans magie et sans équipiers. C'est aussi le seul où l'adversaire récurrent n'est pas un Sans-cœur mais une panthère, Sabor, qu'on affronte trois fois.\n\nOn en repart avec Soin — la magie la plus utile de la partie —, la Trinité Charge et la Keyblade Roi de la jungle. Le monde n'est jamais revenu dans la saga après Kingdom Hearts.",
        "Tarzan's world, and the only one where you start alone, without magic and without party members. It is also the only one where the recurring opponent is not a Heartless but a leopard, Sabor, fought three times.\n\nYou leave with Cure — the most useful magic in the game —, Trinity Charge and the Jungle King Keyblade. The world never returned to the saga after Kingdom Hearts.",
      ),
      steps: [
        {
          id: "arrivee",
          title: L("Seul face à Sabor, puis la descente en liane", "Alone against Sabor, then the vine slide"),
          image: { src: "/images/walkthrough/jungle-1.webp", credit: credit("Deep Jungle gameplay 2.png"), width: 420, height: 236 },
          text: L(
            "Le vaisseau s'écrase, Sora est séparé de Donald et Dingo, et Sabor attaque immédiatement. On a le droit de perdre — la gagner rapporte un peu d'expérience. Elle griffe et bondit, et les coups ordinaires ne la déstabilisent pas : seuls les coups de fin d'enchaînement y parviennent. Avec 90 points de vie seulement, elle ne tient pas la distance.\n\nTarzan rejoint l'équipe. C'est un excellent équipier : rapide, et surtout capable de lancer Herbe Curative et Armure de Vent, ses équivalents de Soin et d'Aéro.\n\nAvant de le suivre, montez sur le toit de la cabane : une seconde Chaîne Protectrice y attend. Puis sautez dans le tronc creux : c'est le mini-jeu de la descente en liane, où il faut éviter ou frapper les branches jusqu'au campement.",
            "The ship crashes, Sora is separated from Donald and Goofy, and Sabor attacks at once. You are allowed to lose — winning gives a little experience. She claws and pounces, and ordinary hits do not stagger her: only combo finishers do. With only 90 HP, she cannot last.\n\nTarzan joins the party. He is an excellent companion: fast, and above all able to cast Healing Herb and Wind Armor, his versions of Cure and Aero.\n\nBefore following him, climb onto the tree house roof: a second Protect Chain waits there. Then jump down the hollow trunk: this is the Jungle Slider mini-game, where you dodge or hit branches all the way down to the Camp.",
          ),
        },
        {
          id: "campement",
          title: L("Le campement : Jane, les diapositives, et le choix de l'équipe", "The Camp: Jane, the slides, and choosing the party"),
          text: L(
            "Entrez sous la tente pour retrouver Jane, Donald et Dingo — et recevoir un Protect-G. Attention au piège de composition : on ne prend que deux équipiers, et Tarzan est clairement le meilleur des trois pour l'instant, mais **sans Donald et Dingo, aucune marque Trio n'est activable**. Sachez aussi qu'un équipier resté au camp gagne l'expérience mais n'apprend ses capacités qu'au niveau suivant passé en votre présence.\n\nRessortez, ramassez les diapositives éparpillées dans le campement, et rapportez-les. Les notes de recherche qui traînent permettent aussi de préparer quelques objets en deux expériences.\n\nEn quittant la tente, Sabor attaque une deuxième fois — sans difficulté, cette fois, avec l'équipe au complet. Elle réapparaîtra ensuite au hasard dans plusieurs zones : c'est le seul « ennemi ordinaire » du monde tant que les Sans-cœur ne sont pas arrivés.",
            "Step into the tent to find Jane, Donald and Goofy — and receive a Protect-G. Mind the party trap: you only take two companions, and Tarzan is clearly the best of the three for now, but **without Donald and Goofy no Trinity Mark can be used**. Note too that a companion left at camp gains experience but only learns his new abilities at the next level-up in your presence.\n\nStep back out, collect the slides scattered around the Camp, and return them. The research notes lying around also let you brew a few items in two experiments.\n\nAs you leave the tent, Sabor attacks a second time — no trouble now, with a full party. She then reappears at random in several areas: she is the world's only \"ordinary enemy\" until the Heartless arrive.",
          ),
        },
        {
          id: "gorilles",
          title: L("Les lianes, les gorilles, et l'arrivée des Sans-cœur", "The vines, the gorillas, and the Heartless"),
          text: L(
            "Prenez la sortie de gauche vers le marais aux hippopotames, ramassez ce qui s'y trouve, puis grimpez la liane accrochée à l'arbre du début. Balancez-vous de plateforme en plateforme jusqu'à la zone des lianes, où une scène se déclenche. Le mini-jeu du saut de liane s'y débloque, sans récompense à la clé.\n\nGrimpez encore pour rejoindre les arbres à escalader puis la cabane, nouvelle scène, et redescendez au campement. Parlez à Jane : les Sans-cœur arrivent, et ils s'en prennent aux gorilles.\n\nLes Voltigeurs sont vifs et frappent au corps à corps, sans réel danger. Les Chapardeurs, eux, fuient et lancent des peaux de banane : glisser dessus coûte beaucoup de munnies — mais les autres Sans-cœur peuvent glisser aussi, et lâchent alors objets et argent.\n\nQuatre gorilles sont à sauver : dans la bambouseraie, aux falaises, dans les arbres à escalader et à la cabane. Chacun rapporte des blocs Gummi. Reparlez ensuite à Jane, puis rendez-vous à la bambouseraie pour le dernier combat contre Sabor.",
            "Take the left exit to the Hippos' Lagoon, collect what is there, then climb the vine stuck to the tree at the start. Swing from platform to platform to the Vines area, where a scene plays. The Vine Jump mini-game unlocks there, with no reward attached.\n\nClimb again to reach the Climbing Trees then the Tree House, another scene, and head back down to the Camp. Talk to Jane: the Heartless arrive, and they are after the gorillas.\n\nPowerwilds are quick melee attackers, no real danger. Bouncywilds run away and throw banana peels: slipping costs a lot of munny — but other Heartless can slip too, and then drop items and money.\n\nFour gorillas are to be saved: in the Bamboo Thicket, at the Cliffs, in the Climbing Trees and at the Tree House. Each is worth Gummi blocks. Talk to Jane again, then head to the Bamboo Thicket for the last fight against Sabor.",
          ),
        },
        {
          id: "fin",
          title: L("Le fruit, la Serrure, et le Roi de la jungle", "The fruit, the Keyhole, and the Jungle King"),
          text: L(
            "Sabor vaincue, équipez le Croc Blanc, retournez voir Jane, puis montez aux arbres à escalader pour une grosse bagarre. Les Voltigeurs y réapparaissent sans fin : c'est un bon endroit pour monter de niveau, mais si vous préférez la paix, lancez un sort sur chacun des bourgeons de fleur de la zone pour couper les renforts. Frappez ensuite le gros fruit jusqu'à le briser : Jane et Terk sont libérées.\n\nRetour à la tente pour sauvegarder et préparer le combat, puis direction les falaises pour Clayton.\n\nAprès lui : **Soin**. C'est la magie qui change la partie — plus besoin d'ouvrir le menu pour boire une Potion ni d'espérer qu'un allié vous soigne à temps ; c'est aussi la raison de ne pas gaspiller sa magie en sorts offensifs.\n\nEntrez dans la caverne de la cascade, grimpez jusqu'à la grotte : la Serrure s'y scelle, avec un fragment Navi-G et la **Trinité Charge** à la clé. De retour à la tente, Tarzan offre le **Roi de la jungle**, plus puissant que la Chaîne Royale et surtout bien plus long.\n\nAvant de repartir vers la Ville de Traverse, la descente en liane se rejoue pour de bon : dix fruits à ramasser par parcours, cinq parcours en tout, chacun débloquant le suivant et un objet rare.",
            "With Sabor down, equip the White Fang, go back to Jane, then climb to the Climbing Trees for a big brawl. Powerwilds respawn endlessly there: a good spot to level up, but if you would rather have peace, cast a spell on each flower bud in the area to cut off the reinforcements. Then hit the large fruit until it breaks: Jane and Terk are freed.\n\nBack to the tent to save and prepare, then head for the Cliffs and Clayton.\n\nAfter him: **Cure**. This is the spell that changes the game — no more opening the menu for a Potion, no more hoping an ally heals you in time; it is also the reason not to waste MP on offensive magic.\n\nEnter the Waterfall Cavern and climb to the cave: the Keyhole is sealed there, along with a Navi-G Piece and **Trinity Charge**. Back at the tent, Tarzan hands over the **Jungle King**, stronger than the Kingdom Key and with far better reach.\n\nBefore leaving for Traverse Town, the Jungle Slider can be played properly: ten fruits to collect per course, five courses in all, each unlocking the next and a rare item.",
          ),
        },
      ],
      bosses: [
        {
          id: "sabor",
          name: L("Sabor", "Sabor"),
          entry: "sabor",
          level: "15 → 18",
          tactics: L(
            "Trois affrontements. Le premier, seul et sans magie, se perd sans conséquence : elle n'a que 90 points de vie, mais elle ne bronche pas sous les coups ordinaires — seuls les coups de fin d'enchaînement la déstabilisent. Roulez pour éviter ses bonds.\n\nLe deuxième, à la sortie de la tente, ne pose aucun problème avec une équipe complète.\n\nLe troisième, dans la bambouseraie, lui donne deux fois plus de vie et une nouvelle habitude : elle plonge dans les bambous et ressort ailleurs. Restez mobile, laissez-la venir, et frappez à la sortie de son bond.",
            "Three encounters. The first, alone and without magic, can be lost without consequence: she only has 90 HP, but ordinary hits do not stagger her — only combo finishers do. Roll to avoid her pounces.\n\nThe second, as you leave the tent, is no trouble with a full party.\n\nThe third, in the Bamboo Thicket, gives her twice the HP and a new habit: she dives into the bamboo and comes out elsewhere. Stay mobile, let her come, and hit her as she lands.",
          ),
        },
        {
          id: "clayton",
          name: L("Clayton et le Sneak Furtif", "Clayton and the Stealth Sneak"),
          entry: "stealth-sneak",
          level: "18",
          reward: L("Le sort Soin.", "The Cure spell."),
          tactics: L(
            "Remplacez Donald par Tarzan pour ce combat : ses soins valent mieux que la magie de Donald ici.\n\nPremière phase, Clayton seul, épaulé par des Voltigeurs qu'il vaut mieux ignorer. Il tire au fusil — portée longue, bonne précision, petite zone d'impact — et saute en arrière dès qu'on approche, ce qui oblige à le poursuivre. Laissé tranquille, il se soigne. Roulez au bon moment pour éviter les balles, collez-le, et enchaînez : il se laisse étourdir.\n\nDeuxième phase, il monte sur un Sans-cœur invisible, le Sneak Furtif. Clayton n'a plus besoin d'esquiver et ne peut plus être étourdi, mais les mouvements de sa monture l'empêchent souvent de viser. Le Sneak Furtif bondit et griffe, et lance une lame de vent circulaire ; visez ses flancs tant qu'il est invisible.\n\nClayton reste la cible : le battre termine le combat. Le Sneak Furtif ne rapporte que trente points d'expérience, donc s'acharner dessus n'en vaut guère la peine — sauf qu'il gêne. Quand ses yeux s'allument, il tire des sphères à tête chercheuse, renvoyables au sabre, et devient invulnérable le temps de le faire. Et si vous traînez, Clayton peut remonter dessus.",
            "Swap Donald for Tarzan in this fight: his healing beats Donald's magic here.\n\nFirst phase, Clayton alone, backed by Powerwilds best ignored. He fires his rifle — long range, good accuracy, small blast on impact — and leaps back as soon as you close in, forcing a chase. Left alone, he heals himself. Time your rolls to dodge the shots, close the gap, and combo: he staggers.\n\nSecond phase, he mounts an invisible Heartless, the Stealth Sneak. Clayton no longer needs to dodge and can no longer be staggered, but his mount's movement often spoils his aim. The Stealth Sneak leaps and claws, and casts a ring-shaped wind blade; aim for its sides while it is invisible.\n\nClayton stays the target: beating him ends the fight. The Stealth Sneak is worth only thirty experience, so grinding it down is rarely worth it — except that it is in the way. When its eyes light up it fires homing orbs, which can be knocked back, and it cannot die while doing so. And if you take too long, Clayton climbs back on.",
          ),
        },
      ],
      collectibles: [
        {
          kind: "ability",
          label: L("Soin", "Cure"),
          where: L("Après Clayton. La magie la plus utile du jeu.", "After Clayton. The most useful magic in the game."),
        },
        {
          kind: "trinity",
          label: L("Trinité Charge", "Trinity Charge"),
          where: L("En scellant la Serrure, dans la caverne de la cascade.", "By sealing the Keyhole, in the Waterfall Cavern."),
          note: L("Elle ouvre la ruelle et l'égout secret de la Ville de Traverse, et donc six dalmatiens.", "It opens Traverse Town's Alleyway and Secret Waterway, and with them six puppies."),
        },
        {
          kind: "keyblade",
          label: L("Roi de la jungle", "Jungle King"),
          where: L("De Tarzan, à la tente, après la Serrure.", "From Tarzan, at the tent, after the Keyhole."),
          note: L("Plus fort que la Chaîne Royale, et surtout bien plus long.", "Stronger than the Kingdom Key, and with far better reach."),
        },
        {
          kind: "chest",
          label: L("Chaîne Protectrice", "Protect Chain"),
          where: L("Sur le toit de la cabane, avant de suivre Tarzan.", "On the tree house roof, before following Tarzan."),
        },
        {
          kind: "minigame",
          label: L("Descente en liane", "Jungle Slider"),
          where: L("Dans le tronc creux, près de la cabane.", "In the hollow trunk, near the tree house."),
          note: L("Cinq parcours, dix fruits chacun : chaque parcours complété ouvre le suivant et donne un objet rare.", "Five courses, ten fruits each: completing a course opens the next and gives a rare item."),
        },
        {
          kind: "journal",
          label: L("Quatre gorilles à sauver", "Four gorillas to save"),
          where: L("Bambouseraie, falaises, arbres à escalader, cabane.", "Bamboo Thicket, Cliffs, Climbing Trees, Tree House."),
          note: L("Chacun rapporte des blocs Gummi.", "Each is worth Gummi blocks."),
        },
      ],
      missable: [
        L(
          "Rien ne se perd : le monde reste accessible, et la descente en liane se rejoue autant qu'on veut.",
          "Nothing is lost: the world stays reachable, and the Jungle Slider can be replayed at will.",
        ),
      ],
    },
    {
      id: "ville-de-traverse-2",
      title: L("Ville de Traverse", "Traverse Town"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "traverse-town",
      status: "done",
      level: "18 → 20",
      intro: L(
        "Les fragments Navi-G rapportés du Pays des Merveilles et de la Jungle Profonde intriguent Dingo : Léon saura peut-être ce que c'est. Le retour est obligatoire une fois ces deux mondes scellés.\n\nCette visite est courte mais dense : le trou de serrure de la ville, une invocation, un sort de défense, l'accès à la Forêt des Rêves Bleus et le raccourci Warp-G qui évite de refaire le trajet en vaisseau à chaque monde.",
        "The Navi-G Pieces brought back from Wonderland and Deep Jungle intrigue Goofy: Leon might know what they are. The return is mandatory once both worlds are sealed.\n\nThe visit is short but dense: the town's Keyhole, a summon, a defensive spell, access to the Hundred Acre Wood, and the Warp-G shortcut that saves flying to every world again.",
      ),
      steps: [
        {
          id: "leon-cid",
          title: L("Léon dans l'égout, Cid et le vieux livre", "Leon in the waterway, Cid and the old book"),
          text: L(
            "La ville a de nouveaux Sans-cœur : les Opéras Jaunes, version foudre des Nocturnes et des Rhapsodies, et les Requiems Verts, inoffensifs seuls mais qui **soignent les autres Sans-cœur** et absorbent tous les éléments sauf la Gravité. Tuez-les en premier.\n\nUn coffre du café donne un Boost de défense : lancez Glacier pour éteindre toutes les bougies.\n\nDirection la ruelle : la **Trinité Charge** ouvre la grille de l'égout secret, où Léon attend. Parlez-lui deux fois, il donne l'Éclat de Terre et vous envoie chez Cid, qui remet le vieux livre. L'Éclat de Terre s'échange chez la Bonne Fée contre l'invocation **Simba**, et le vieux livre ouvre la Forêt des Rêves Bleus, chez Merlin.\n\nAllumez la grande porte marquée du signe du feu avec Brasier, puis entrez dans la maison de l'îlot pour rencontrer Merlin et la Bonne Fée.",
            "The town has new Heartless: Yellow Operas, the thunder version of the Nocturnes and Rhapsodies, and Green Requiems, harmless alone but which **heal other Heartless** and absorb every element except Gravity. Kill those first.\n\nA chest in the café holds a Defense Up: cast Blizzard to douse every candle.\n\nHead for the Alleyway: **Trinity Charge** opens the grate to the Secret Waterway, where Leon waits. Talk to him twice, he hands over the Earthshine and sends you to Cid, who gives you the old book. The Earthshine is traded at the Fairy Godmother's for the **Simba** summon, and the old book opens the Hundred Acre Wood, at Merlin's.\n\nLight the large door marked with the fire sign using Fire, then enter the house on the island to meet Merlin and the Fairy Godmother.",
          ),
        },
        {
          id: "cloche",
          title: L("La cloche, trois fois", "The bell, three times"),
          text: L(
            "Repassez par le troisième quartier pour une scène — Riku apparaît —, puis entrez dans la petite maison près de la porte du deuxième quartier pour reparler à Cid : il a installé les fragments Navi-G et donne un **Warp-G**, qui permet de sauter le trajet vers les mondes déjà visités.\n\nReste à faire sonner la cloche trois fois : montez sur le toit du magasin Gizmo et utilisez la **Trinité Charge** sur les planches. Trois coups de cloche révèlent le trou de serrure, et l'approcher déclenche le combat.\n\nL'Armure Gardienne revient d'abord, aussi forte qu'à la première visite — donc facile désormais. Puis elle se reforme en Armure Opposée.",
            "Pass through the Third District for a scene — Riku appears —, then enter the small house near the Second District door to talk to Cid again: he has fitted the Navi-G Pieces and hands over a **Warp-G**, which skips the flight to worlds you have already visited.\n\nThat leaves the bell, three times: climb onto the Gizmo Shop roof and use **Trinity Charge** on the boards. Three rings reveal the Keyhole, and approaching it starts the fight.\n\nThe Guard Armor comes back first, as strong as on the first visit — so easy by now. Then it reforms into the Opposite Armor.",
          ),
        },
        {
          id: "apres",
          title: L("Après : Aéro, la synthèse, et le vaisseau", "Afterwards: Aero, synthesis, and the ship"),
          text: L(
            "L'Armure Opposée donne **Aéro**, un sort défensif qui divise par deux les dégâts subis pour deux points de magie — l'un des meilleurs du jeu —, et un nouveau fragment Navi-G. Donnez-le à Cid, qui rend un Comet-G et commence à vendre des blocs et améliorations Gummi ; la seule qui vaut vraiment l'achat est le COM LVL2.\n\nPassez chez Pongo et Perdita si vous avez assez de chiots : les récompenses comprennent des blocs Gummi utiles. Faites un tour à la boutique d'accessoires pour une scène avec Pinocchio, et chez Merlin pour découvrir la Forêt des Rêves Bleus.\n\nDe retour au vaisseau, la coupe de Phil s'ouvre au Colisée : c'est le bon moment pour la faire, avant Agrabah.",
            "The Opposite Armor gives **Aero**, a defensive spell that halves the damage you take for two MP — one of the best in the game — and another Navi-G Piece. Give it to Cid, who returns a Comet-G and starts selling Gummi blocks and upgrades; the only one really worth buying is COM LVL2.\n\nDrop by Pongo and Perdita if you have enough puppies: the rewards include useful Gummi blocks. Visit the Accessory Shop for a scene with Pinocchio, and Merlin's house to discover the Hundred Acre Wood.\n\nBack at the ship, the Phil Cup opens at the Coliseum: a good moment to run it, before Agrabah.",
          ),
        },
      ],
      bosses: [
        {
          id: "opposite-armor",
          name: L("Armure Opposée", "Opposite Armor"),
          entry: "opposite-armor",
          level: "20",
          reward: L("Le sort Aéro.", "The Aero spell."),
          tactics: L(
            "Beaucoup plus mobile que l'Armure Gardienne : elle lévite en permanence, charge en courtes ruées et jette ses membres sur vous. Elle se sépare ensuite en deux ensembles — les pieds avec la tête, qui roulent sur vous comme une roue, et les gantelets avec le torse, qui tournoient en vous poursuivant.\n\nSa plus dangereuse attaque est le tir : le torse se met à l'horizontale et charge de gros projectiles d'énergie qu'il envoie comme un canon. Gardez vos distances, roulez, ou servez-vous du décor pour bloquer.\n\nLe reste se pare, s'esquive ou se renvoie. Aéro et Soin font une grosse différence si vous vous acharnez sur l'attaque. Chaque morceau détruit lâche beaucoup de sphères de vie : de quoi se remettre à flot au milieu du combat.",
            "Far more mobile than the Guard Armor: it levitates constantly, dashes in short bursts and throws its limbs at you. It then splits into two sets — the legs with the head, rolling at you like a wheel, and the gauntlets with the torso, spinning as they home in.\n\nIts most dangerous attack is the shot: the torso turns horizontal and charges large energy blasts it fires like a cannon. Keep your distance, roll, or use the terrain to block.\n\nEverything else can be blocked, dodged or knocked back. Aero and Cure make a real difference if you get greedy on offence. Each destroyed part drops plenty of health orbs: enough to get back on your feet mid-fight.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Aéro", "Aero"), where: L("Récompense de l'Armure Opposée.", "The Opposite Armor's reward."), note: L("Divise par deux les dégâts subis. À garder actif sur les boss.", "Halves the damage you take. Keep it up on bosses.") },
        { kind: "ability", label: L("Invocation Simba", "Simba summon"), where: L("L'Éclat de Terre, donné par Léon, échangé chez la Bonne Fée.", "The Earthshine, given by Leon, traded at the Fairy Godmother's."), },
        { kind: "chest", label: L("Boost de défense", "Defense Up"), where: L("Dans le coffre du café : éteignez toutes les bougies avec Glacier.", "In the café chest: douse every candle with Blizzard.") },
        { kind: "report", label: L("Warp-G", "Warp-G"), where: L("De Cid, dans la petite maison du troisième quartier.", "From Cid, in the small house in the Third District."), note: L("Évite de refaire le trajet en vaisseau vers les mondes déjà visités.", "Skips the flight to worlds you have already visited.") },
      ],
      missable: [
        L("Rien ne se perd : la ville se revisite une troisième fois.", "Nothing is lost: the town is visited a third time."),
      ],
    },
    {
      id: "agrabah",
      title: L("Agrabah", "Agrabah"),
      world: "agrabah",
      status: "done",
      level: "20 → 24",
      intro: L(
        "Le monde d'Aladdin, et le plus long de cette partie du jeu : une ville en trois zones à parcourir en hauteur, une caverne aux merveilles labyrinthique, et quatre combats.\n\nIl donne beaucoup : Brasier+ et Glacier+, l'invocation Génie, la Keyblade Trois Vœux, la Trinité Échelle — qui ouvre enfin l'atelier de synthèse à la Ville de Traverse — et le premier rapport d'Ansem.",
        "Aladdin's world, and the longest of this stretch of the game: a town in three areas to be crossed from above, a maze-like Cave of Wonders, and four fights.\n\nIt gives a lot: Fira and Blizzara, the Genie summon, the Three Wishes Keyblade, Trinity Ladder — which finally opens the synthesis workshop in Traverse Town — and the first Ansem's Report.",
      ),
      steps: [
        {
          id: "ville",
          title: L("La ville : Jasmine, Jafar, et les toits", "The town: Jasmine, Jafar, and the rooftops"),
          image: { src: "/images/walkthrough/agrabah-1.webp", credit: credit("Agrabah from KH1 gameplay 1.png"), width: 420, height: 236 },
          text: L(
            "Vous arrivez au milieu des Bandits, les Sans-cœur ordinaires du monde — sans surprise, sauf leur charge à distance. Méfiez-vous aussi des Araignées-Pots, déguisées en jarres rouges : elles sautent sur vous et, plus rarement, explosent.\n\nPrenez la ruelle à gauche pour trouver Jasmine, et vous faire surprendre par Jafar. Battez les Bandits, montez là où il se tenait et utilisez la commande **Libérer** sur la serrure du mur : une porte s'ouvre en face. Passez par les volets, grimpez le bâtiment, revenez à la rue principale.\n\nLa progression se fait en hauteur : sautez d'auvent en auvent pour franchir le vide et entrer dans la maison d'Aladdin en grimpant au poteau du cul-de-sac. Déplacez les deux meubles pour libérer le Tapis et ouvrir une autre serrure, puis partez au désert : le Tapis vous mène à Aladdin.\n\nAladdin peut rejoindre l'équipe : proche de Dingo, offensif, il est pour l'instant plus fort que Donald comme que Dingo. De retour sur la place, les Gros Bandits apparaissent — comme les Costauds, mais avec du feu ; la Gravité marche bien mieux que Glacier sur eux.",
            "You land among Bandits, the world's standard Heartless — unremarkable except for their ranged lunge. Watch out too for Pot Spiders, disguised as the red jars: they leap onto you and, more rarely, blow themselves up.\n\nTake the alley on the left to find Jasmine, and be caught by Jafar. Beat the Bandits, climb to where he stood and use the **Release** command on the keyhole in the wall: a door opens across the way. Cross via the shutters, climb the building, come back to Main Street.\n\nProgress happens above ground: jump from awning to awning to cross the gap and enter Aladdin's House by climbing the pole in the dead end. Move the two cabinets to free Carpet and release another lock, then head into the desert: Carpet takes you to Aladdin.\n\nAladdin can join the party: close to Goofy, offensive, he is for now stronger than either Donald or Goofy. Back at the Plaza, Fat Bandits appear — like Large Bodies, but with fire; Gravity works far better on them than Blizzard.",
          ),
        },
        {
          id: "caverne",
          title: L("La caverne aux merveilles", "The Cave of Wonders"),
          text: L(
            "L'entrée de la rue principale est condamnée : passez par les auvents et la ruelle pour rejoindre la partie haute, contournez la maison d'Aladdin et sautez de l'auvent rouge vers la porte ouverte du bazar. Une marque Trio bleue s'y trouve ; en hauteur, une serrure à libérer et un Anneau de Feu dans un coffre. Sauvegardez chez Aladdin avant le combat contre le Mille-Pattes.\n\nAprès lui, équipez le Rayon de Lumière et finissez d'explorer la ville. Aux portes du palais, laissez les rangées de jarres tranquilles pour l'instant : l'une d'elles cache le Scorpion-Pot, un ennemi coriace propre à Final Mix.\n\nAu désert, le Tapis conduit à la caverne, gardée par un colosse de sable. À l'intérieur, deux niveaux : l'étage supérieur est simple, le niveau inférieur est un labyrinthe — et on y tombe facilement. Abu, avec Aladdin dans l'équipe, active des gemmes qui ouvrent des passages vers des coffres supplémentaires.\n\nAllez d'abord à la salle du trésor (un Boost de défense), revenez à l'entrée, descendez vers la salle des reliques, puis nagez jusqu'à la salle sombre : la **première page déchirée** y attend. Passez le point de sauvegarde, remontez la cascade jusqu'à la chambre silencieuse, gagnez la plateforme à la marque Trio bleue, puis la salle cachée, où un pilier fissuré ouvre la voie vers la salle de la lampe.",
            "The Main Street entrance is boarded up: use the awnings and the alley to reach the upper area, go around Aladdin's House and jump from the red awning to the open doorway of the Bazaar. A blue Trinity Mark sits there; up on the ledge, another lock to release and a Fire Ring in a chest. Save at Aladdin's before the Pot Centipede fight.\n\nAfter it, equip the Ray of Light and finish exploring the town. At the Palace Gates, leave the rows of jars alone for now: one of them hides the Pot Scorpion, a tough enemy unique to Final Mix.\n\nIn the desert, Carpet leads to the cave, guarded by a colossus of sand. Inside, two levels: the upper one is straightforward, the lower one is a maze — and easy to fall into. Abu, with Aladdin in the party, activates gems that open passages to extra chests.\n\nGo to the Treasure Room first (a Defense Up), return to the Entrance, go down to the Relic Chamber, then swim through to the Dark Chamber: the **first Torn Page** waits there. Past the save point, swim up the waterfall to the Silent Chamber, reach the platform with the blue Trinity Mark, then the Hidden Room, where a cracked pillar opens the way to the Lamp Chamber.",
          ),
        },
        {
          id: "apres-jafar",
          title: L("Après Jafar : la synthèse s'ouvre enfin", "After Jafar: synthesis finally opens"),
          text: L(
            "Jafar vaincu sous sa forme de génie, Brasier passe à **Brasier+**, et vous recevez le **rapport d'Ansem n° 1**. La Serrure scellée, il faut fuir sur le Tapis en évitant les colonnes de feu — un passage sur rails, sans piège.\n\nChez Aladdin : l'invocation **Génie**, la Keyblade **Trois Vœux** (un peu plus forte que le Roi de la jungle, mais moins longue) et la **Trinité Échelle**, à utiliser sur les marques vertes. La première sert tout de suite, dans la réserve d'Agrabah, pour un Boost de compétence.\n\nSurtout : avec une page déchirée et la Trinité Échelle en poche, **retournez à la Ville de Traverse**. L'échelle ouvre l'atelier au-dessus de la boutique d'accessoires — c'est là que se fait toute la synthèse du jeu. Fabriquez tout ce qui est disponible pour débloquer la série suivante, et achetez de nouvelles armes pour Donald et Dingo. Passez aussi chez Merlin pour la Forêt des Rêves Bleus.\n\nLa coupe de Phil se termine très facilement en contre-la-montre avec Glacier+.",
            "With Jafar beaten in genie form, Fire becomes **Fira**, and you receive **Ansem's Report 1**. Once the Keyhole is sealed you flee on Carpet, dodging pillars of fire — an on-rails stretch with no trap.\n\nAt Aladdin's: the **Genie** summon, the **Three Wishes** Keyblade (slightly stronger than the Jungle King, but shorter) and **Trinity Ladder**, for the green marks. The first use comes immediately, in Agrabah's Storage room, for an AP Up.\n\nAbove all: with a Torn Page and Trinity Ladder in hand, **go back to Traverse Town**. The ladder opens the workshop above the Accessory Shop — where all the game's synthesis happens. Craft everything available to unlock the next set, and buy new weapons for Donald and Goofy. Drop by Merlin's for the Hundred Acre Wood too.\n\nThe Phil Cup's time trial becomes very easy with Blizzara.",
          ),
        },
      ],
      bosses: [
        {
          id: "pot-centipede",
          name: L("Le Mille-Pattes", "Pot Centipede"),
          entry: "pot-centipede",
          level: "21",
          tactics: L(
            "Toutes les rues de la ville servent d'arène. La bête est faite d'une tête, d'une queue et d'un corps composé d'Araignées-Pots, invulnérables tant qu'elles font partie du corps.\n\nFrapper la tête ou la queue l'étourdit un instant et libère les araignées, qui redeviennent des ennemis ordinaires. Elle fuit ensuite vers la rue principale, puis la ruelle, puis la place, en appelant des renforts à chaque fois.\n\nTout le danger est là : laissez les araignées s'accumuler et vous ne gérez plus rien. Nettoyez-les systématiquement dès qu'elles se détachent, et finissez le mille-pattes une fois le terrain dégagé. Glacier et la Foudre sont parfaits contre les grappes ; Aéro amortit le reste.",
            "Every street in town serves as the arena. The creature is made of a head, a tail and a body of Pot Spiders, invulnerable while attached.\n\nHitting the head or tail stuns it briefly and frees the spiders, which become ordinary enemies. It then flees to Main Street, then the Alley, then the Plaza, calling reinforcements each time.\n\nThat is the whole danger: let the spiders pile up and you lose control. Clear them systematically as they detach, and finish the centipede once the ground is clear. Blizzard and Thunder are perfect against clusters; Aero softens the rest.",
          ),
        },
        {
          id: "gardien-caverne",
          name: L("Le Gardien de la caverne", "The Cave of Wonders' Guardian"),
          entry: "cave-of-wonders-guardian",
          level: "22",
          tactics: L(
            "Ses points faibles sont ses yeux, d'où il tire aussi des éclairs à tête chercheuse pendant tout le combat. Il crache du feu et fait apparaître sans arrêt des Bandits, des Gros Bandits et des Soldats Volants.\n\nLa méthode : grimper la tête par l'arrière — ou attendre qu'il plonge dans le sable, ce qui la met à portée —, se tenir sur le museau et frapper les yeux en laissant les équipiers s'occuper des Sans-cœur. Depuis le museau, ni les Bandits ni les éclairs ne représentent une vraie menace.\n\nSi vous êtes projeté au sol, la Foudre atteint les yeux à distance ; sinon, tapez quelques Sans-cœur pour récupérer vie et magie avant de remonter.",
            "Its weak points are its eyes, from which it also fires homing bolts throughout the fight. It breathes fire and endlessly spawns Bandits, Fat Bandits and Air Soldiers.\n\nThe method: climb the head from behind — or wait for it to dive into the sand, which brings it within reach —, stand on the nose and hit the eyes while your companions handle the Heartless. From the nose, neither the Bandits nor the bolts are a real threat.\n\nIf you are knocked down, Thunder reaches the eyes from range; otherwise hit a few Heartless to recover HP and MP before climbing back.",
          ),
        },
        {
          id: "jafar",
          name: L("Jafar", "Jafar"),
          entry: "jafar",
          level: "23",
          reward: L("Glacier devient Glacier+.", "Blizzard becomes Blizzara."),
          tactics: L(
            "Toutes ses attaques sont annoncées par une incantation : écoutez-le et vous les verrez venir. Le rayon de feu s'esquive d'une roulade. Le blizzard qu'il fait tourner au centre de la salle inflige des dégâts continus à tout ce qui s'y trouve — sortez-en. La troisième, réservée à ceux qui le collent, envoie une coulée de ténèbres dans le sol avant d'exploser : il faut fuir dès qu'il la lance.\n\nIl vole d'une plateforme à l'autre et passe à volonté dans un état de spectre invulnérable. Il s'entoure parfois d'une sphère qui annule la magie, mais elle ne dure pas.\n\nLe Génie, asservi, tourne au centre : il ne peut pas être blessé, mais il s'excuse bruyamment avant de frapper — c'est votre signal pour vous écarter. Frapper Jafar près de lui fait souvent tomber des sphères en quantité.",
            "Every attack is announced by a chant: listen and you will see them coming. The fire ray is dodged with a roll. The blizzard he spins at the centre of the room deals continuous damage to anything inside — get out. The third, reserved for anyone hugging him, sends dark energy into the floor before exploding: flee the moment he starts it.\n\nHe flies from platform to platform and slips into an invulnerable wisp state at will. He sometimes wraps himself in a sphere that blocks magic, but it does not last.\n\nGenie, enslaved, circles the centre: he cannot be hurt, but he apologises loudly before striking — that is your cue to step away. Hitting Jafar near him often showers you with orbs.",
          ),
        },
        {
          id: "jafar-genie",
          name: L("Jafar en génie", "Genie Jafar"),
          entry: "genie-jafar",
          level: "24",
          reward: L("Brasier devient Brasier+, et le rapport d'Ansem n° 1.", "Fire becomes Fira, and Ansem's Report 1."),
          tactics: L(
            "Ne visez pas Jafar : **la cible est la lampe**, tenue par Iago. Frapper le géant ne rapporte presque rien, et l'attaquer au bras le fait riposter deux fois de son rayon.\n\nIago fuit en volant, hors de portée, et les blocs mobiles compliquent les déplacements. Mais il s'épuise en arrivant au bout des blocs, côté mur : c'est là qu'on le frappe librement. Jafar lui lance un sort de soin, sans aucun effet réel.\n\nLes rochers qu'il jette s'esquivent, se parent ou se renvoient. Seuls Aéro et Soin servent ici, les autres sorts ne font rien.",
            "Do not aim at Jafar: **the target is the lamp**, held by Iago. Hitting the giant achieves almost nothing, and striking his arm makes him answer with two ray attacks.\n\nIago flees by flying out of reach, and the moving blocks make manoeuvring awkward. But he tires out at the far end of the blocks, near the wall: that is where you hit him freely. Jafar casts a cure on him, with no real effect.\n\nThe rocks he throws can be dodged, blocked or knocked back. Only Aero and Cure help here, other spells do nothing.",
          ),
        },
      ],
      collectibles: [
        { kind: "trinity", label: L("Trinité Échelle", "Trinity Ladder"), where: L("Récompense de fin de monde, chez Aladdin.", "End-of-world reward, at Aladdin's."), note: L("Elle ouvre l'atelier de synthèse de la Ville de Traverse : c'est la vraie récompense du monde.", "It opens the synthesis workshop in Traverse Town: the world's real reward.") },
        { kind: "keyblade", label: L("Trois Vœux", "Three Wishes"), where: L("De la part d'Aladdin, après la Serrure.", "From Aladdin, after the Keyhole.") },
        { kind: "ability", label: L("Invocation Génie", "Genie summon"), where: L("Après la fuite sur le Tapis.", "After the escape on Carpet.") },
        { kind: "report", label: L("Rapport d'Ansem n° 1", "Ansem's Report 1"), where: L("En battant Jafar sous sa forme de génie.", "By beating Jafar in genie form.") },
        { kind: "chest", label: L("Première page déchirée", "First Torn Page"), where: L("Salle sombre de la caverne : remontez le courant depuis la salle des reliques.", "Dark Chamber in the cave: swim upstream from the Relic Chamber.") },
        { kind: "chest", label: L("Anneau de Feu et Boost de défense", "Fire Ring and Defense Up"), where: L("Le premier en hauteur au bazar, le second dans la salle du trésor.", "The first on the Bazaar ledge, the second in the Treasure Room.") },
      ],
      missable: [
        L("Rien ne se perd, mais le Scorpion-Pot caché dans les jarres des portes du palais est coriace : ne le réveillez pas trop tôt.", "Nothing is lost, but the Pot Scorpion hidden in the jars at the Palace Gates is tough: do not wake it too early."),
      ],
    },
    {
      id: "monstro",
      title: L("Monstro", "Monstro"),
      world: "monstro",
      status: "done",
      level: "24 → 27",
      intro: L(
        "Pas un monde mais une baleine, qui avale le vaisseau en plein vol. L'intérieur est un labyrinthe de cavités numérotées, toutes identiques, reliées par des passages qui font souvent tomber d'une hauteur — impossible de revenir sur ses pas.\n\nUne seule règle sauve : **les bons passages brillent en vert**, et un Requiem Vert flotte au-dessus pour les signaler. On en repart avec le Saut Haut, qui rouvre la moitié des mondes déjà visités.",
        "Not a world but a whale, which swallows the ship in mid-flight. The inside is a maze of numbered chambers, all identical, linked by passages that often drop you from a height — no going back.\n\nOne rule saves you: **the right passages glow green**, with a Green Requiem floating above to point them out. You leave with High Jump, which reopens half the worlds you have already visited.",
      ),
      steps: [
        {
          id: "labyrinthe",
          title: L("Le labyrinthe des cavités", "The maze of chambers"),
          image: { src: "/images/walkthrough/monstro-1.webp", credit: credit("Monstro from KH1 gameplay 1.png"), width: 420, height: 236 },
          text: L(
            "Rejoignez le fond de la bouche, puis la première cavité après la scène. Nouveaux venus : les Fantômes Chercheurs, qui n'attaquent que si l'on entre dans leur faisceau, absorbent la vie et disparaissent pour ressurgir ailleurs. Ils lâchent de grosses sphères de vie et de magie : ils valent la peine d'être combattus.\n\nL'itinéraire, pour éviter d'y passer une heure : la cavité 3 est un cul-de-sac (un Méga-Éther), puis la cavité 2, dont la sortie vous fait tomber sans retour possible vers la partie haute de la cavité 3, puis la partie haute de la cavité 2. On y croise les Araignées-Tonneaux, version tonneau des Araignées-Pots — **elles explosent si on leur lance Brasier**.\n\nDe là, cavité 5, puis 6 : son passage le plus bas est un cul-de-sac avec deux objets et une marque Trio bleue. Revenez en 6 et prenez l'autre passage vers la partie haute de la cavité 5, puis la cavité 4, où l'on sauvegarde avant les entrailles.",
            "Head to the back of the Mouth, then into Chamber 1 after the cutscene. New arrivals: Search Ghosts, which only attack if you enter their searchlight, drain HP and vanish to reappear elsewhere. They drop large health and magic orbs: worth fighting.\n\nThe route, to avoid spending an hour here: Chamber 3 is a dead end (a Mega-Ether), then Chamber 2, whose exit drops you with no way back into the upper part of Chamber 3, then the upper part of Chamber 2. You meet Barrel Spiders there, the barrel version of the Pot Spiders — **they explode if hit with Fire**.\n\nFrom there, Chamber 5, then 6: its lowest passage is a dead end with two items and a blue Trinity Mark. Back to 6 and take the other passage to the upper part of Chamber 5, then Chamber 4, where you save before the Bowels.",
          ),
        },
        {
          id: "saut-haut",
          title: L("Le Saut Haut change tout", "High Jump changes everything"),
          text: L(
            "Riku se bat à vos côtés contre le premier Parasite — sans grande utilité. Dingo apprend Ovation ensuite.\n\nDans la bouche, l'eau a baissé : **prenez immédiatement le Saut Haut** dans le coffre à côté de Geppetto. C'est une capacité partagée, qui ne coûte aucun point de compétence et profite à toute l'équipe.\n\nAvec elle, refaites le tour de la bouche et des cavités : beaucoup d'objets étaient hors de portée, dont la **page déchirée** sur une plateforme de la cavité 6, et l'Éclat d'Eau dans le coffre que fouillait Pinocchio — il donne l'invocation Dumbo.\n\nRemontez ensuite par le passage au-dessus de l'entrée de la cavité 1 pour rejoindre la gorge. On peut y croiser la Truffe Rare, un Sans-cœur pacifique qui récompense selon le nombre de jongles enchaînées. En haut, l'estomac vous aspire.",
            "Riku fights alongside you against the first Parasite Cage — of little real use. Goofy learns Cheer afterwards.\n\nIn the Mouth, the water has drained: **grab High Jump immediately** from the chest next to Geppetto. It is a shared ability, costs no AP and benefits the whole party.\n\nWith it, sweep the Mouth and the chambers again: many items were out of reach, including the **Torn Page** on a platform in Chamber 6, and the Watergleam in the chest Pinocchio was rummaging through — it gives the Dumbo summon.\n\nThen climb through the passage above the Chamber 1 entrance to reach the Throat. You may meet the Rare Truffle there, a peaceful Heartless that rewards you for how long you keep it in the air. At the top, the Stomach sucks you in.",
          ),
        },
        {
          id: "apres-monstro",
          title: L("Après Monstro : trois Keyblades à récupérer", "After Monstro: three Keyblades to collect"),
          text: L(
            "Le second Parasite donne **Stop**, qui fige une cible et ses voisins ; les dégâts encaissés pendant le gel s'appliquent d'un coup à la fin. Peu utile sur les boss, précieux contre les ennemis vifs.\n\nAvant de repartir, un détour par la Ville de Traverse vaut largement le voyage : chez Geppetto, la Keyblade **Étoile Filante**, plus forte que Trois Vœux tant qu'on finit ses enchaînements (les coups de fin ont un bonus critique garanti) ; il donne aussi des plans de vaisseau Gummi selon le nombre de Sans-cœur vaincus, et **la dernière carte postale** est chez lui.\n\nChez Merlin, la Keyblade **Charme-Sort** : moins de dégâts, mais plus de magie. Et avec 51 dalmatiens, Pongo et Perdita donnent une nouvelle page déchirée.\n\nAvec tous les sorts en main, on peut aussi récupérer tous les Arts de sort auprès des Champignons Blancs : montrés à Merlin, ils valent le Bouclier des Rêves pour Dingo. Enfin, la coupe de Pégase s'ouvre au Colisée.",
            "The second Parasite Cage gives **Stop**, which freezes a target and those near it; damage dealt during the freeze lands all at once when it ends. Of little use on bosses, precious against quick enemies.\n\nBefore leaving, a detour to Traverse Town is well worth the trip: at Geppetto's, the **Wishing Star** Keyblade, stronger than Three Wishes as long as you finish your combos (finishers get a guaranteed critical bonus); he also hands out Gummi blueprints based on how many Heartless you have defeated, and **the last postcard** is in his house.\n\nAt Merlin's, the **Spellbinder** Keyblade: less damage, more magic. And with 51 puppies, Pongo and Perdita hand over another Torn Page.\n\nWith every spell in hand you can also collect all the spell Arts from the White Mushrooms: shown to Merlin, they are worth the Dream Shield for Goofy. Finally, the Pegasus Cup opens at the Coliseum.",
          ),
        },
      ],
      bosses: [
        {
          id: "parasite-cage-1",
          name: L("Parasite, première rencontre", "Parasite Cage, first encounter"),
          entry: "parasite-cage",
          level: "25",
          tactics: L(
            "Court et sans piège. Il n'a que deux attaques, deux grands balayages de ses bras-tentacules. Reculez, ou laissez Aéro et Soin absorber les coups, et frappez entre deux passages.",
            "Short and trap-free. It has only two attacks, both wide sweeps with its tentacle arms. Step back, or let Aero and Cure soak the hits, and strike between sweeps.",
          ),
        },
        {
          id: "parasite-cage-2",
          name: L("Parasite, dans l'estomac", "Parasite Cage, in the Stomach"),
          entry: "parasite-cage",
          level: "27",
          reward: L("Le sort Stop.", "The Stop spell."),
          tactics: L(
            "Riku s'en va tout de suite, et le monstre a bien plus de vie. Le sol est acide : il faut se déplacer sur des plateformes irrégulièrement espacées, ce qui complique l'esquive.\n\nDeux nouveautés : un crachat empoisonné, lancé après qu'il a aspiré l'acide de la salle, difficile à éviter de près ; et un coup de charge qui projette en arrière.\n\nQuand il encaisse assez, il s'étourdit : la sphère sombre dans sa cage stomacale devient alors librement frappable. Gardez Aéro actif pour diviser les dégâts, et Soin pour le reste. Dingo tiendra ; Donald tombera vite.",
            "Riku leaves at once, and the creature has far more HP. The floor is acidic: you have to move across unevenly spaced platforms, which makes dodging harder.\n\nTwo new moves: a poison spit, used after it sucks up the acid in the room, hard to avoid up close; and a charging swing that knocks you back.\n\nWhen it takes enough damage it stuns itself: the dark sphere inside its stomach cage is then free to hit. Keep Aero up to halve the damage, and Cure for the rest. Goofy will hold; Donald will fall fast.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Saut Haut", "High Jump"), where: L("Dans un coffre de la bouche, à côté de Geppetto, après le premier Parasite.", "In a chest in the Mouth, next to Geppetto, after the first Parasite Cage."), note: L("Capacité partagée, gratuite en points de compétence. Elle rouvre des dizaines de coffres dans les mondes précédents.", "Shared ability, free in AP. It reopens dozens of chests in earlier worlds.") },
        { kind: "chest", label: L("Page déchirée", "Torn Page"), where: L("Sur une plateforme de la cavité 6, une fois le Saut Haut obtenu.", "On a platform in Chamber 6, once High Jump is obtained.") },
        { kind: "chest", label: L("Éclat d'Eau", "Watergleam"), where: L("Dans le coffre que fouillait Pinocchio, dans la bouche.", "In the chest Pinocchio was rummaging through, in the Mouth."), note: L("Donne l'invocation Dumbo, qui rend invulnérable le temps de l'invocation.", "Gives the Dumbo summon, which makes you invulnerable for its duration.") },
        { kind: "ability", label: L("Stop", "Stop"), where: L("Récompense du second Parasite.", "The second Parasite Cage's reward.") },
        { kind: "trinity", label: L("Marque Trio bleue", "Blue Trinity Mark"), where: L("Dans le cul-de-sac bas de la cavité 6.", "In the low dead end of Chamber 6.") },
      ],
      missable: [
        L("Rien ne se perd, mais les passages à sens unique obligent parfois à refaire un tour complet : suivez les passages verts.", "Nothing is lost, but the one-way drops sometimes mean a full lap again: follow the green passages."),
      ],
    },
    {
      id: "atlantica",
      title: L("Atlantica", "Atlantica"),
      world: "atlantica",
      status: "done",
      level: "27 → 30",
      intro: L(
        "Entièrement sous l'eau, et c'est tout le sujet : on nage en trois dimensions, et l'essentiel de la panoplie habituelle — enchaînements, coups de fin, Roulade, Parade — ne fonctionne plus. La magie prend le relais, Glacier+ en tête.\n\nLe monde donne la Nage de sirène, qui permet de remonter les courants et de filer sous l'eau, la Foudre+, le rapport d'Ansem n° 3 et la Keyblade Trésor des mers.",
        "Entirely underwater, and that is the whole point: you swim in three dimensions, and most of your usual toolkit — combos, finishers, Dodge Roll, Guard — no longer works. Magic takes over, Blizzara first.\n\nThe world gives Mermaid Kick, which lets you swim against currents and dart around, plus Thundara, Ansem's Report 3 and the Crabclaw Keyblade.",
      ),
      steps: [
        {
          id: "nager",
          title: L("Apprendre à nager, et les coquillages colorés", "Learning to swim, and the coloured clams"),
          image: { src: "/images/walkthrough/atlantica-1.webp", credit: credit("Atlantica from KH1 gameplay 1.png"), width: 420, height: 236 },
          text: L(
            "Un court tutoriel avec Polochon, quelques Néons des mers — faibles, mais rapides — puis un coquillage blanc à frapper : ici, **les coquillages blancs remplacent les coffres**.\n\nAriel peut rejoindre l'équipe. Ses attaques sont moyennes, mais ses capacités sont tournées vers la magie : elle lance Potion d'Aéro, Potion de Soin et Potion de Foudre.\n\nL'orientation se fait aux **marqueurs en forme de trident**. Les coquillages colorés s'ouvrent avec la magie de la couleur correspondante. Suivez les tridents jusqu'aux profondeurs calmes, entrez dans le courant et ressortez aussitôt ; plus loin, Brasier sur un oursin ouvre un raccourci vers la vallée sous-marine.\n\nDans la caverne sous-marine, on croise des Champignons Blancs gelés : les libérer avec Stop fait apparaître un Agaric Rose, qui récompense selon le nombre de coups portés pendant le gel.",
            "A short tutorial with Flounder, a few Sea Neons — weak but quick — then a white clam to hit: here, **white clams replace chests**.\n\nAriel can join the party. Her attacks are average, but her abilities lean on magic: she casts Aero Potion, Cure Potion and Thunder Potion.\n\nYou navigate by the **trident markers**. Coloured clams open with the matching colour of magic. Follow the tridents to the Calm Depths, enter the current and leave it at once; further on, Fire on a sea urchin opens a shortcut back to the Undersea Valley.\n\nIn the Undersea Cave you meet frozen White Mushrooms: freeing them with Stop spawns a Pink Agaricus, which rewards you for how many hits you land during the freeze.",
          ),
        },
        {
          id: "trident",
          title: L("Le palais, le navire coulé, et le requin", "The palace, the sunken ship, and the shark"),
          text: L(
            "Remontez vers la gorge sous-marine puis le palais de Triton. À l'entrée, les Plongeurs, soignés par la Foudre — ne leur en lancez pas. Après la scène du trône, la gorge voit apparaître les Zones Protectrices, grosses versions des Néons qui **se scindent en petits si on les tue au corps à corps**, mais pas à la magie ni sur un coup critique.\n\nDans la grotte d'Ariel, ouvrez les trois coffres cachés parmi ses trésors : l'un contient une **page déchirée**. Prenez ensuite le dauphin qui tourne dans la gorge, puis remontez à la vallée pour le reprendre : il mène au navire coulé.\n\nÀ l'intérieur, le Requin surgit. Prenez le Trident de cristal dans le coffre proche, puis sortez l'affronter : il n'a aucune attaque notable et réapparaît au hasard dans plusieurs zones, comme Sabor. Il lâche souvent des objets de soin.\n\nLe passage vers la gorge cache un évent à frapper — un raccourci — et un gros coffre contenant un **Orichalque**.",
            "Swim up to the Undersea Gorge then Triton's Palace. At the entrance, Screwdivers, healed by Thunder — do not cast it at them. After the throne scene, the Gorge starts spawning Sheltering Zones, large versions of the Sea Neons that **split into small ones if killed in melee**, but not with magic or a critical hit.\n\nIn Ariel's Grotto, open the three chests hidden among her treasures: one holds a **Torn Page**. Then ride the dolphin circling the Gorge, and go back to the Valley to ride it again: it leads to the Sunken Ship.\n\nInside, the Shark shows up. Take the Crystal Trident from the nearby chest, then go out and fight him: he has no notable attacks and reappears at random in several areas, like Sabor. He often drops healing items.\n\nThe passage back to the Gorge hides a vent to hit — a shortcut — and a large chest holding an **Orichalcum**.",
          ),
        },
        {
          id: "ursula",
          title: L("Ursula, et la Nage de sirène", "Ursula, and Mermaid Kick"),
          text: L(
            "De retour à la grotte, approchez du renfoncement au trident pour la scène. En route vers le trône, un Aquatank attaque : porté par trois Plongeurs qu'il peut vous tirer dessus, il absorbe la Foudre et s'en sert pour soigner ses porteurs quand son antenne brille.\n\nAriel revient dans l'équipe après Triton. Direction le navire coulé : Sébastien appuie sur un bouton caché derrière une épave, le rocher se déplace, et l'antre des marées s'ouvre. Sauvegardez dans le recoin, glissez quelques Éthers dans l'inventaire, puis avancez jusqu'à l'antre d'Ursula.\n\nAprès le premier combat, vous obtenez la **Nage de sirène** : déplacement rapide, et surtout la possibilité de **remonter les courants**. Un nouvel oursin permet d'ouvrir le coquillage voisin.\n\nRepassez sauvegarder, puis retournez au navire coulé et aux profondeurs calmes : la Nage de sirène permet d'y remonter le courant et de sortir par le dernier passage, en face de celui du navire.",
            "Back at the Grotto, approach the trident indent for the scene. On the way to the throne, an Aquatank attacks: carried by three Screwdivers it can shoot at you, it absorbs Thunder and uses it to heal its carriers when its antenna glows.\n\nAriel rejoins the party after Triton. Head to the Sunken Ship: Sebastian presses a button hidden behind a wreck, the rock moves, and the Den of Tides opens. Save in the Cavern Nook, slip a few Ethers into your inventory, then push on to Ursula's Lair.\n\nAfter the first fight you get **Mermaid Kick**: fast movement, and above all the ability to **swim against currents**. Another sea urchin lets you open the clam next to it.\n\nGo back to save, then return to the Sunken Ship and the Calm Depths: Mermaid Kick lets you swim up the current and leave by the last passage, opposite the ship's.",
          ),
        },
      ],
      bosses: [
        {
          id: "ursula",
          name: L("Ursula", "Ursula"),
          entry: "ursula",
          level: "28",
          reward: L("La Nage de sirène.", "Mermaid Kick."),
          tactics: L(
            "Suivez le conseil de Triton : **la cible est le chaudron, pas Ursula**, et c'est la magie qui l'atteint — Brasier est le plus rapide et le moins cher. Le chaudron devient vert quand ça marche ; insistez et Ursula s'étourdit. Le reste du temps elle encaisse très mal les coups mais reste totalement exposée pendant l'étourdissement.\n\nLaissée tranquille, elle jette des potions dans le chaudron : cela crée des courants qui balaient la zone, ou une pluie de boules de feu autour de lui.\n\nQuand elle reprend ses esprits — ou si vous l'attaquez sans l'avoir étourdie — elle lance une toupie très dangereuse : éloignez-vous, tout simplement.\n\nÀ court de magie, buvez un Éther ou frappez ses deux murènes, Flotsam et Jetsam : elles rendent bien plus de magie que les autres ennemis. Deux ou trois séquences d'étourdissement suffisent à la faire fuir.",
            "Follow Triton's advice: **the target is the cauldron, not Ursula**, and magic is what reaches it — Fire is the fastest and cheapest. The cauldron glows green when it works; keep at it and Ursula is stunned. The rest of the time she shrugs off hits, but she is completely exposed while stunned.\n\nLeft alone, she throws potions into the cauldron: this creates currents that sweep the area, or a barrage of fireballs around it.\n\nWhen she comes to — or if you attack her without stunning her — she uses a very dangerous spinning attack: simply keep away.\n\nOut of MP, drink an Ether or hit her two morays, Flotsam and Jetsam: they restore far more magic than other enemies. Two or three stun cycles are enough to drive her off.",
          ),
        },
        {
          id: "ursula-geante",
          name: L("Ursula géante", "Giant Ursula"),
          entry: "ursula",
          level: "30",
          reward: L("La Foudre devient Foudre+, et le rapport d'Ansem n° 3.", "Thunder becomes Thundara, and Ansem's Report 3."),
          tactics: L(
            "Le boss le plus résistant du jeu jusqu'ici. Sa tête est son seul point faible, ce qui est cruel : la plupart de ses attaques passent par sa bouche.\n\nElle souffle pour vous éloigner, puis envoie des bulles à tête chercheuse — esquivez sur le côté. Elle inspire pour vous aspirer et vous mordre : il faut fuir à la Nage de sirène, et souvent on est trop près pour y arriver. Elle inspire aussi, marque un temps, puis crache un rayon de foudre : là, il faut passer **au-dessus d'elle**, s'éloigner ne suffit pas.\n\nEn permanence, des éclairs tombent autour d'elle ; une lueur au sol annonce chaque impact une seconde à l'avance.\n\nÀ cause des deux attaques buccales, frappez de dos ou de côté — même si elle pivote souvent avec vous. À 50 % de vie, elle lève le trident en annonçant que ça va faire mal : c'est une décharge massive tout autour d'elle, il faut partir immédiatement.",
            "The toughest boss so far. Her head is her only weak point, which is cruel: most of her attacks come out of her mouth.\n\nShe blows you away, then sends homing bubbles — dodge sideways. She inhales to suck you in and bite: you have to flee with Mermaid Kick, and you are often too close to make it. She also inhales, pauses, then breathes a beam of lightning: there you have to go **above her**, moving away is not enough.\n\nThroughout, lightning strikes rain around her; a glow on the ground announces each impact a second ahead.\n\nBecause of the two mouth attacks, strike from behind or the sides — though she often turns with you. At 50% HP she raises the trident and announces it will not be pretty: that is a massive burst all around her, leave at once.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Nage de sirène", "Mermaid Kick"), where: L("Après le premier combat contre Ursula.", "After the first Ursula fight."), note: L("Capacité partagée : elle permet de remonter les courants, ici et ailleurs.", "Shared ability: it lets you swim against currents, here and elsewhere.") },
        { kind: "keyblade", label: L("Trésor des mers", "Crabclaw"), where: L("En scellant la Serrure, dans la grotte d'Ariel.", "By sealing the Keyhole, in Ariel's Grotto."), note: L("Beaucoup de dégâts et un point de magie en plus, au prix de la portée.", "High damage and one extra MP, at the cost of reach.") },
        { kind: "chest", label: L("Orichalque", "Orichalcum"), where: L("Dans un gros coffre décroché près de l'évent, entre le navire coulé et la gorge.", "In a large chest knocked loose near the vent, between the Sunken Ship and the Gorge.") },
        { kind: "chest", label: L("Page déchirée", "Torn Page"), where: L("Dans l'un des trois coffres cachés parmi les trésors d'Ariel.", "In one of the three chests hidden among Ariel's treasures.") },
        { kind: "report", label: L("Rapport d'Ansem n° 3", "Ansem's Report 3"), where: L("En battant Ursula géante.", "By beating Giant Ursula.") },
        { kind: "trinity", label: L("Marque Trio rouge", "Red Trinity Mark"), where: L("Au palais de Triton, au centre de la structure en spirale : un Orichalque.", "In Triton's Palace, at the centre of the spiral structure: an Orichalcum."), requires: L("Trinité Détection, obtenue plus tard.", "Trinity Detect, obtained later.") },
      ],
      missable: [
        L("Rien ne se perd, mais sans la Nage de sirène la moitié du monde reste fermée : elle ne s'obtient qu'après le premier combat contre Ursula.", "Nothing is lost, but without Mermaid Kick half the world stays closed: it only comes after the first Ursula fight."),
      ],
    },
    {
      id: "ville-d-halloween",
      title: L("Ville d'Halloween", "Halloween Town"),
      world: "halloween-town",
      status: "done",
      level: "27 → 30",
      intro: L(
        "Le monde de Jack Skellington, et l'un des plus verticaux du jeu : tout se joue entre la place de la guillotine, le cimetière et le manoir d'Oogie Boogie, qu'il faut escalader de fond en comble.\n\nOn en repart avec Gravité+, la Keyblade Citrouille — la plus puissante à ce stade — et le rapport d'Ansem n° 7. Jack peut rejoindre l'équipe : lanceur de sorts offensif, avec ses propres versions de Brasier, Glacier, Foudre et Gravité, et de meilleures statistiques que Donald comme que Dingo.",
        "Jack Skellington's world, and one of the most vertical in the game: everything happens between Guillotine Square, the Graveyard and Oogie Boogie's Manor, which has to be climbed from bottom to top.\n\nYou leave with Gravira, the Pumpkinhead Keyblade — the strongest at this point — and Ansem's Report 7. Jack can join the party: an offensive spellcaster with his own versions of Fire, Blizzard, Thunder and Gravity, and better stats than either Donald or Goofy.",
      ),
      steps: [
        {
          id: "jack-et-le-docteur",
          title: L("Jack, le docteur, et le cœur artificiel", "Jack, the doctor, and the artificial heart"),
          image: { src: "/images/walkthrough/halloween-1.webp", credit: credit("Halloween Town from KH1 gameplay 2.png"), width: 420, height: 236 },
          text: L(
            "À l'arrivée, la place de la guillotine est occupée par des Chasseurs de Fantômes **inoffensifs** : ils ne vous attaqueront pas tant que la scène de Jack n'a pas eu lieu. Ignorez-les et partez à droite.\n\nEntrez ensuite dans le vestibule derrière la guillotine, puis dans le laboratoire, pour rencontrer le docteur Finkelstein. Jack devient recrutable à ce moment. **Fouillez la bibliothèque du laboratoire** : elle contient une page déchirée.\n\nDe retour sur la place, les Sans-cœur deviennent hostiles. Les Chevaliers Blancs apparaissent au cimetière : ils sautent pour vous frapper par-dessus ou dans le dos, et balaient une large zone de leurs longs bras — difficiles à esquiver, faciles à parer.\n\nParlez à Sally, revenez au laboratoire pour les scènes, puis retournez au cimetière. Entrez dans le cercueil pour atteindre l'ossuaire, parlez au maire, et examinez les tombes **dans l'ordre qu'il indique** : un coffre apparaît avec la Boîte à Malices.",
            "On arrival, Guillotine Square is occupied by **harmless** Search Ghosts: they will not attack until Jack's scene has played. Ignore them and head right.\n\nThen enter the Lab Entryway behind the guillotine and the Research Lab, to meet Dr. Finkelstein. Jack becomes recruitable at this point. **Examine the bookcase in the lab**: it holds a Torn Page.\n\nBack on the square, the Heartless turn hostile. Wight Knights appear in the Graveyard: they jump to hit you from above or behind, and sweep wide with their long arms — hard to dodge, easy to block.\n\nTalk to Sally, return to the lab for the cutscenes, then head back to the Graveyard. Enter the coffin to reach the Boneyard, talk to the Mayor, and examine the tombstones **in the order he gives**: a chest appears with the Jack-in-the-Box.",
          ),
        },
        {
          id: "vers-le-manoir",
          title: L("La colline du clair de lune et le manoir", "Moonlight Hill and the manor"),
          text: L(
            "Rapportez la Boîte à Malices au docteur, puis revenez sur la place : les Gargouilles apparaissent. Ces Sans-cœur volants frappent fort au corps à corps, crachent des orbes à tête chercheuse et se transforment en volute d'énergie **invulnérable** qui vous suit jusqu'à ce qu'elles se reforment. Attendez la reformation plutôt que de perdre des coups.\n\nRetournez au cimetière, puis à l'ossuaire, et prenez la porte de la crypte derrière la citrouille brisée pour rejoindre la colline du clair de lune. **Allumez la plateforme-lanterne** : elle ouvre un raccourci permanent entre la colline et le cimetière.\n\nNettoyez la zone, puis examinez les petites pierres tombales au centre : le sommet de la colline s'étire et donne accès au pont, puis au manoir d'Oogie.\n\nSi vous tombez du manoir, la baignoire sur pattes vous remonte — à condition d'avoir battu les Sans-cœur qui l'entourent. Une **marque Trio rouge** se trouve ici : elle a été déplacée dans Final Mix, précisément parce qu'elle était ratable dans la version d'origine.\n\nPassez la porte au bout du pont de corde, lancez Brasier sur la plateforme pour la mettre en mouvement, puis escaladez tout le manoir. La porte tout en haut déclenche le combat.",
            "Take the Jack-in-the-Box back to the doctor, then return to the square: Gargoyles appear. These flying Heartless hit hard in melee, spit homing orbs and turn into an **invulnerable** wisp of energy that trails you until they reform. Wait for them to reform rather than waste swings.\n\nGo back to the Graveyard, then the Boneyard, and take the crypt door behind the smashed pumpkin to reach Moonlight Hill. **Light the lantern platform**: it opens a permanent shortcut between the hill and the Graveyard.\n\nClear the area, then examine the tiny gravestones in the centre: the hilltop extends and gives access to the Bridge, then to Oogie's Manor.\n\nIf you fall from the manor, the walking bathtub takes you back up — provided you have beaten the Heartless around it. A **red Trinity Mark** sits here: it was moved in Final Mix precisely because it was missable in the original.\n\nGo through the door at the end of the rope bridge, cast Fire on the platform to set it moving, then climb the entire manor. The door at the very top starts the fight.",
          ),
        },
        {
          id: "oogie-et-apres",
          title: L("Oogie Boogie, puis le manoir lui-même", "Oogie Boogie, then the manor itself"),
          text: L(
            "Am, Stram et Gram battus, **actionnez le levier de la salle** : il ouvre la porte de la salle de torture d'Oogie Boogie. Elle est facile à repérer — d'un vert criard — mais mal placée : elle se trouve dans la partie basse du manoir, près du bout du pont de corde. Sauvegardez avant d'entrer.\n\nOogie vaincu vous donne le Diadème Sacré et le **rapport d'Ansem n° 7**. En repartant, vous le trouvez fusionné avec son propre manoir : le troisième combat s'enchaîne, mais vous pouvez encore ressortir pour sauvegarder.\n\nUne fois le manoir détruit, la Serrure se scelle automatiquement. Vous recevez **Gravité+** et, de la part de Jack, la Keyblade **Citrouille** : longue portée et la plus forte du jeu à ce stade, au prix du point de magie du Trésor des mers.\n\nDeux objets restent à ramasser : un Boost de force dans une structure de la place, et un Boost de défense dans la zone du pont. Les coffres oubliés dans le manoir se retrouvent dans un petit sous-sol caché au centre de l'espace vide.\n\nLa suite : le Pays Imaginaire, ou Atlantica si vous ne l'avez pas encore fait. Avant de partir, un détour par la Forêt des Rêves Bleus s'impose — c'est probablement votre dernière page déchirée.",
            "With Lock, Shock and Barrel beaten, **pull the lever in the room**: it opens the door to Oogie Boogie's Torture Chamber. It is easy to spot — a garish green — but awkwardly placed: it sits low in the manor, near the end of the rope bridge. Save before going in.\n\nBeating Oogie gives you the Holy Circlet and **Ansem's Report 7**. On your way out you find him merged with his own manor: the third fight follows on, though you can still step out to save.\n\nOnce the manor is destroyed, the Keyhole seals itself. You receive **Gravira** and, from Jack, the **Pumpkinhead** Keyblade: long reach and the strongest in the game at this point, at the cost of the Crabclaw's extra MP.\n\nTwo items remain: a Power Up in a structure in the Square, and a Defense Up in the Bridge area. Chests missed inside the manor turn up in a small hidden basement at the centre of the remaining space.\n\nNext: Neverland, or Atlantica if you have not done it. Before you leave, a detour to the Hundred Acre Wood is in order — this is likely your last Torn Page.",
          ),
        },
      ],
      bosses: [
        {
          id: "am-stram-gram",
          name: L("Am, Stram et Gram", "Lock, Shock, and Barrel"),
          entry: "lock-shock-and-barrel",
          level: "28",
          tactics: L(
            "Les trois sont individuellement très faibles : toute la difficulté vient de leur taille et de leur vitesse. Am (le diable) saute partout, Stram (la sorcière) tourne au centre de la salle, Gram (le squelette) fonce en ligne droite.\n\n**L'ordre compte.** Seul le dernier abattu rapporte la totalité de son expérience ; les autres n'en donnent qu'un dixième. Battez-les donc dans l'ordre Am, Stram, **puis Gram**, qui en rapporte le plus. Am lâche des sphères de vie, Stram des sphères de magie.\n\nLe verrouillage et la magie de zone valent mieux que les combos ici : ils bougent trop pour qu'on les enchaîne proprement.",
            "The three are individually very weak: the whole difficulty comes from their size and speed. Lock (the devil) jumps everywhere, Shock (the witch) spins in the middle of the room, Barrel (the skeleton) dashes in straight lines.\n\n**Order matters.** Only the last one felled grants full experience; the others give a tenth. So beat them in the order Lock, Shock, **then Barrel**, who is worth the most. Lock drops HP orbs, Shock drops MP orbs.\n\nLock-on and area magic beat combos here: they move too much to be chained cleanly.",
          ),
        },
        {
          id: "oogie-boogie",
          name: L("Oogie Boogie", "Oogie Boogie"),
          entry: "oogie-boogie",
          level: "29",
          reward: L("Le Diadème Sacré et le rapport d'Ansem n° 7.", "The Holy Circlet and Ansem's Report 7."),
          tactics: L(
            "Oogie encaisse mal les coups physiques et bien la magie, mais l'arène le tient hors de portée la plupart du temps : il court sur la passerelle du haut pendant que vous êtes en bas.\n\nIl lance deux sortes de dés. Les dés **brillants** explosent ; les trois autres tombent tous sur le même chiffre et déclenchent un effet. **Renvoyez-les** : c'est des points Tech, et si vous les touchez tous, l'effet est purement et simplement annulé.\n\nLes effets : un « 1 » lance une scie circulaire autour de la roulette, un « 4 » fait tourner des faux ; « 2 », « 3 » et « 5 » invoquent respectivement deux Gargouilles, deux Chevaliers Blancs et deux Chasseurs de Fantômes. À faible vie, les faux montent et descendent en tournant, et il peut **forcer un triple six** pour se soigner à la machine : à ce stade, ne le laissez pas respirer.\n\nAprès chaque lancer, les boutons près du pilier central s'allument. Appuyer sur un bouton enferme tout ce qui se trouve dans la section correspondante. Le but est donc de vous enfermer **avec lui** : la partie basse remonte, et il n'a plus qu'une gifle molle à opposer. Frappez jusqu'à ce qu'il vous rejette en bas, puis recommencez. Si vous le manquez, les soldats du bas vous coûteront quelques points de vie.",
            "Oogie takes physical damage badly and magic well, but the arena keeps him out of reach most of the time: he runs along the upper walkway while you are below.\n\nHe throws two kinds of dice. The **glowing** ones explode; the other three all land on the same number and trigger an effect. **Deflect them**: that is Tech Points, and if you hit them all, the effect is cancelled outright.\n\nThe effects: a \"1\" sends a circular saw around the roulette, a \"4\" starts scythes spinning; \"2\", \"3\" and \"5\" summon two Gargoyles, two Wight Knights and two Search Ghosts respectively. At low health the scythes also move up and down while rotating, and he can **force a triple six** to heal himself at the machine: by then, do not let him breathe.\n\nAfter each throw, the buttons near the central pillar light up. Pressing one seals everything inside that section. The goal is to shut yourself in **with him**: the lower area rises, and all he has left is a feeble slap. Hit him until he knocks you back down, then start again. If you miss him, the toy soldiers below will cost you some health.",
          ),
        },
        {
          id: "manoir-oogie",
          name: L("Le Manoir d'Oogie", "Oogie's Manor"),
          entry: "oogies-manor",
          level: "30",
          reward: L("Gravité+, la Keyblade Citrouille, et le trou de serrure scellé.", "Gravira, the Pumpkinhead Keyblade, and the Keyhole sealed."),
          tactics: L(
            "Le manoir est trop grand pour être attaqué : les cibles sont les **sept Amas d'Ombre** accrochés à la structure. Ils sont presque inoffensifs — une petite boule de feu de temps en temps —, mais **en détruire trois déclenche l'apparition sans fin de Gargouilles** près de vous. Prévoyez-le.\n\nLa grande lanterne tire des salves de feu sur la partie basse et médiane de la façade. Si vous la détruisez, la seconde lanterne, tout en haut, prend le relais, et le bras qui tenait la première se libère pour balayer ce qui passe dessous. En haut, le visage d'Oogie crache régulièrement des spores empoisonnées.\n\nLe vrai adversaire, en réalité, c'est l'escalade : le combat se gagne en montant proprement jusqu'au sommet sans tomber. Aéro et un peu de patience suffisent.",
            "The manor is too big to attack: the targets are the **seven Shadow Globs** clinging to the structure. They are nearly harmless — the odd small fireball — but **destroying three triggers an endless spawn of Gargoyles** near you. Plan for it.\n\nThe large lantern fires volleys at the lower and middle front of the façade. Destroy it and the second lantern at the top takes over, while the arm that held the first is freed to swipe at anything below. Up top, Oogie's face regularly spreads poisonous spores.\n\nThe real opponent is the climb: the fight is won by making it cleanly to the top without falling. Aero and a little patience are enough.",
          ),
        },
      ],
      collectibles: [
        { kind: "keyblade", label: L("Citrouille", "Pumpkinhead"), where: L("De la part de Jack, après le manoir.", "From Jack, after the manor."), note: L("Longue portée, la plus forte du jeu à ce stade.", "Long reach, the strongest in the game at this point.") },
        { kind: "ability", label: L("Gravité+", "Gravira"), where: L("En scellant la Serrure.", "By sealing the Keyhole.") },
        { kind: "report", label: L("Rapport d'Ansem n° 7", "Ansem's Report 7"), where: L("En battant Oogie Boogie.", "By beating Oogie Boogie.") },
        { kind: "chest", label: L("Page déchirée", "Torn Page"), where: L("Dans la bibliothèque du laboratoire du docteur Finkelstein.", "In the bookcase of Dr. Finkelstein's lab.") },
        { kind: "chest", label: L("Boîte à Malices", "Jack-in-the-Box"), where: L("À l'ossuaire : examinez les tombes dans l'ordre indiqué par le maire.", "In the Boneyard: examine the tombstones in the order the Mayor gives.") },
        { kind: "chest", label: L("Boost de force et Boost de défense", "Power Up and Defense Up"), where: L("Le premier dans une structure de la place, le second dans la zone du pont.", "The first in a structure in the Square, the second in the Bridge area.") },
        { kind: "trinity", label: L("Marque Trio rouge", "Red Trinity Mark"), where: L("Au manoir d'Oogie, sur le chemin après le pont de corde.", "In Oogie's Manor, on the path after the rope bridge."), note: L("Déplacée dans Final Mix : elle était ratable dans la version d'origine.", "Moved in Final Mix: it was missable in the original.") },
      ],
      missable: [
        L("Les coffres oubliés dans le manoir ne sont pas perdus : ils réapparaissent dans un sous-sol caché au centre de l'espace vide, une fois le manoir détruit.", "Chests missed inside the manor are not lost: they reappear in a hidden basement at the centre of the remaining space, once the manor is destroyed."),
      ],
    },
    {
      id: "pays-imaginaire",
      title: L("Pays Imaginaire", "Neverland"),
      world: "neverland",
      status: "done",
      level: "30 → 33",
      intro: L(
        "Le monde de Peter Pan commence par une capture : le vaisseau est éperonné, et Sora se réveille prisonnier dans les cales du navire du capitaine Crochet. Il faut au moins deux mondes facultatifs terminés — Monstro plus la Ville d'Halloween ou Atlantica — pour y accéder.\n\nC'est le monde du **vol** : à partir de la moitié, tout le groupe vole, et l'on en repart avec Plané, qui rouvre des coffres dans presque tous les mondes déjà visités. Il donne aussi Soin+, la Keyblade Harpe Féerique, l'invocation Clochette et le rapport d'Ansem n° 9.",
        "Peter Pan's world begins with a capture: the ship is rammed, and Sora wakes up a prisoner in the hold of Captain Hook's vessel. You need at least two optional worlds finished — Monstro plus Halloween Town or Atlantica — to reach it.\n\nThis is the world of **flight**: from halfway on, the whole party flies, and you leave with Glide, which reopens chests in nearly every world you have visited. It also gives Cura, the Fairy Harp Keyblade, the Tinker Bell summon and Ansem's Report 9.",
      ),
      steps: [
        {
          id: "les-cales",
          title: L("Les cales du navire", "The ship's hold"),
          image: { src: "/images/walkthrough/neverland-1.webp", credit: credit("Neverland from KH1 gameplay 2.png"), width: 420, height: 236 },
          text: L(
            "Peter Pan rejoint l'équipe dès la première scène. Il n'est pas plus fort que Donald ni que Dingo, mais il vole et lance ses propres versions de Stop et d'Aéro.\n\nLes Pirates sont les Sans-cœur ordinaires du monde : rien d'exceptionnel, sauf que **esquiver leur grand sabre les laisse déséquilibrés** un instant — c'est là qu'on frappe. Les Ombres de Sora traînent aussi ici : inoffensives, elles fuient souvent avant qu'on ait pu les tuer.\n\nLa plupart des portes sont verrouillées et les couloirs sont étroits. Montez à l'échelle, prenez la porte de droite : des Araignées-Tonneaux vous attendent, ainsi qu'un trou dans le plancher menant à la chambre froide.\n\nEn bas, nettoyez, puis prenez la seconde échelle vers la coquerie. Servez-vous de l'étagère pour sauter par **le trou le plus à droite** de la grille du plafond : vous arrivez dans une cabine avec un point de sauvegarde. C'est le moment de sortir Peter Pan de l'équipe si vous l'aviez pris. Une **marque Trio verte** révèle une échelle vers la cabine du capitaine, et le premier combat.",
            "Peter Pan joins the party in the first scene. He is no stronger than Donald or Goofy, but he flies and casts his own versions of Stop and Aero.\n\nPirates are the world's standard Heartless: nothing remarkable, except that **dodging their big cutlass leaves them stumbling** for a moment — that is when you strike. Shadow Soras also hang around: harmless, they often flee before you can kill them.\n\nMost doors are locked and the quarters are cramped. Climb the ladder, take the door on the right: Barrel Spiders await, along with a hole in the floor leading to the Freezer.\n\nDown there, clear the room, then take the second ladder to the Galley. Use the shelf to jump through **the rightmost hole** in the ceiling grating: you land in a Cabin with a save point. Now is the time to swap Peter Pan out if you had him. A **green Trinity Mark** reveals a ladder to the Captain's Cabin, and the first fight.",
          ),
        },
        {
          id: "le-pont",
          title: L("Le pont, et le vol", "The deck, and flight"),
          text: L(
            "L'Anti-Sora battu donne la Serre du Corbeau, et ouvre l'autre trappe : Wendy s'y trouve, après quoi Peter s'en va. Sauvegardez, prenez le couloir, l'autre cabine, revenez par la cabine du capitaine, et sortez enfin sur le pont.\n\nAprès la scène, Peter revient, vous apprenez **Soin+** et recevez la capacité partagée **Plané** — inutilisable ici pour l'instant, puisque tout le monde vole déjà. Vous pouvez désormais voler comme Peter, ce qui règle le combat contre les Pirates de l'Air : leur avantage aérien disparaît.\n\nUn Cuirassé apparaît aussi : ce gros Sans-cœur a des pièces destructibles individuellement, et lui retirer ses canons ou ses ailerons réduit très vite sa dangerosité. Le capitaine Crochet enchaîne immédiatement après.",
            "Beating AntiSora gives the Raven's Claw and opens the other trapdoor: Wendy is there, after which Peter leaves. Save, take the Corridor, the other Cabin, come back via the Captain's Cabin, and finally step out onto the Deck.\n\nAfter the scene, Peter rejoins, you learn **Cura** and receive the shared ability **Glide** — unusable here for now, since everyone already flies. You can now fly like Peter, which settles the Air Pirates fight: their aerial advantage vanishes.\n\nA Battleship also shows up: this large Heartless has individually destructible parts, and stripping its guns or fins cuts its threat sharply. Captain Hook follows immediately after.",
          ),
        },
        {
          id: "horloge",
          title: L("La tour de l'horloge, et les douze portes", "The clock tower, and the twelve doors"),
          text: L(
            "Crochet battu, vous volez automatiquement jusqu'à la tour de l'horloge. **Frappez la grande aiguille** de l'un des cadrans pour l'aligner sur les autres : le trou de serrure apparaît.\n\nLa récompense est copieuse : un fragment Navi-G, l'invocation **Clochette**, la Keyblade **Harpe Féerique** et la capacité partagée **Plané**.\n\nLa Harpe Féerique est votre Keyblade la plus puissante à ce stade, mais courte. Clochette est une invocation à part : elle **ne remplace pas Donald et Dingo**, soigne passivement pendant le combat, et vous ressuscite une fois si vous tombez. Plané permet de se déplacer lentement en vol dans tous les autres mondes : plusieurs coffres jusqu'ici inaccessibles s'ouvrent enfin.\n\nUn détail à ne pas manquer : si vous quittez le monde et y revenez, **une porte différente de la tour s'ouvre à chaque heure de l'horloge du jeu** — douze objets en tout, un par heure, signalés par une lumière blanche. Ce sont de bons objets, dont plusieurs Boosts.\n\nDirection la Ville de Traverse. La coupe d'Hercule est ouverte au Colisée si vous voulez la faire d'abord.",
            "With Hook beaten, you fly automatically to the Clock Tower. **Hit the large hand** on one of the clock faces to line it up with the others: the Keyhole appears.\n\nThe reward is generous: a Navi-G Piece, the **Tinker Bell** summon, the **Fairy Harp** Keyblade and the shared ability **Glide**.\n\nThe Fairy Harp is your strongest Keyblade so far, but short. Tinker Bell is a summon apart: she **does not replace Donald and Goofy**, heals passively during the fight, and revives you once if you fall. Glide lets you move slowly through the air in every other world: several previously unreachable chests finally open.\n\nOne detail not to miss: leave and come back and **a different tower door opens on each hour of the game clock** — twelve items in all, one per hour, marked by a white light. They are good items, several of them stat Ups.\n\nNext stop, Traverse Town. The Hercules Cup is open at the Coliseum if you want to run it first.",
          ),
        },
      ],
      bosses: [
        {
          id: "anti-sora",
          name: L("Anti-Sora", "AntiSora"),
          entry: "anti-sora",
          level: "31",
          reward: L("L'accessoire Serre du Corbeau.", "The Raven's Claw accessory."),
          tactics: L(
            "Il reprend une bonne partie des capacités de Sora, mais **sans magie**, et peut se fondre dans le sol comme une Ombre. Sa manœuvre la plus dangereuse est la disparition : il plonge dans le plancher, devient invisible, et ressort **derrière vous** pour frapper aussitôt.\n\nÀ mi-vie, il crée deux copies. Elles font autant de dégâts que l'original, mais **ne partagent pas sa barre de vie** : verrouillez et utilisez Analyse pour trouver le vrai, sinon vous frappez dans le vide.\n\nL'arène est petite : Roulade et Aéro font tout le travail défensif. Stop+ est très utile pour l'immobiliser, car il est difficile à enchaîner.",
            "He borrows a good part of Sora's moveset, but **no magic**, and can sink into the floor like a Shadow. His most dangerous move is the vanish: he dives into the floor, turns invisible, and comes out **behind you** to strike at once.\n\nAt half health he creates two copies. They deal as much damage as the original but **do not share its HP bar**: lock on and use Scan to find the real one, or you are swinging at nothing.\n\nThe arena is small: Dodge Roll and Aero do all the defensive work. Stopra is very useful to pin him down, as he is hard to chain.",
          ),
        },
        {
          id: "capitaine-crochet",
          name: L("Capitaine Crochet", "Captain Hook"),
          entry: "captain-hook",
          level: "32",
          reward: L("La capacité Ars Arcanum, et le rapport d'Ansem n° 9.", "The Ars Arcanum ability, and Ansem's Report 9."),
          tactics: L(
            "Crochet est **immunisé à la Foudre**, et résiste à la magie comme tous les boss — sauf à Brasier, qui le fait paniquer un instant. Attention : paniqué, il court en l'air à toute vitesse et blesse tout ce qu'il percute.\n\nLe vol est tentant, mais **on ne peut pas faire de Roulade en volant**. Servez-vous-en pour vous éloigner et récupérer, pas pour combattre. Ignorez le Cuirassé qui le soutient : il est immédiatement remplacé.\n\nAu corps à corps il est dangereux : après une provocation, son crochet **pare votre coup et contre aussitôt**. Le reste du temps, il enchaîne estocades rapides et jette des explosifs. Aéro amortit beaucoup.\n\nQuand il devient rouge de colère, il vous poursuit en déchaînant une rafale qui couvre une petite zone autour de lui : n'essayez pas de l'échanger, éloignez-vous.\n\nL'astuce du monde : **poussez-le à l'eau**. Il ressort en sautant, et vous avez le temps d'un combo aérien complet.",
            "Hook is **immune to Thunder**, and resists magic like every boss — except Fire, which panics him for a moment. Careful: panicked, he runs through the air at speed and hurts anything he hits.\n\nFlight is tempting, but **you cannot Dodge Roll while flying**. Use it to get away and recover, not to fight. Ignore the Battleship supporting him: it is instantly replaced.\n\nIn melee he is dangerous: after a taunt, his hook **blocks your swing and counters at once**. The rest of the time he chains quick thrusts and throws explosives. Aero softens a lot.\n\nWhen he turns red with anger he chases you, unleashing a flurry covering a small area around him: do not trade, get away.\n\nThe world's trick: **knock him into the water**. He leaps back out, and you have time for a full aerial combo.",
          ),
        },
      ],
      collectibles: [
        { kind: "keyblade", label: L("Harpe Féerique", "Fairy Harp"), where: L("En scellant la Serrure de la tour de l'horloge.", "By sealing the Clock Tower's Keyhole.") },
        { kind: "ability", label: L("Plané", "Glide"), where: L("En scellant la Serrure.", "By sealing the Keyhole."), note: L("Capacité partagée : elle rouvre des coffres dans presque tous les mondes déjà visités.", "Shared ability: it reopens chests in nearly every world you have visited.") },
        { kind: "ability", label: L("Invocation Clochette", "Tinker Bell summon"), where: L("En scellant la Serrure.", "By sealing the Keyhole."), note: L("Ne remplace pas les équipiers, soigne en continu et ressuscite une fois.", "Does not replace your party, heals continuously and revives you once.") },
        { kind: "ability", label: L("Soin+ et Ars Arcanum", "Cura and Ars Arcanum"), where: L("Le premier sur le pont, le second en battant Crochet.", "The first on the Deck, the second by beating Hook.") },
        { kind: "report", label: L("Rapport d'Ansem n° 9", "Ansem's Report 9"), where: L("En battant le capitaine Crochet.", "By beating Captain Hook.") },
        { kind: "chest", label: L("Les douze portes de l'horloge", "The clock tower's twelve doors"), where: L("Revenez au monde une fois par heure de l'horloge du jeu : la porte éclairée en blanc change à chaque fois.", "Come back once per hour of the game clock: the door lit in white changes each time."), note: L("Douze objets au total, dont plusieurs Boosts.", "Twelve items in all, several of them stat Ups.") },
        { kind: "trinity", label: L("Marque Trio verte", "Green Trinity Mark"), where: L("Dans la cabine avec le point de sauvegarde : elle révèle l'échelle vers la cabine du capitaine.", "In the Cabin with the save point: it reveals the ladder to the Captain's Cabin.") },
      ],
      missable: [
        L("Les douze objets de la tour de l'horloge demandent douze passages, un par heure de l'horloge du jeu : rien n'est perdu, mais rien ne s'obtient d'un coup.", "The clock tower's twelve items need twelve visits, one per hour of the game clock: nothing is lost, but nothing is obtained in one go."),
      ],
    },
    {
      id: "ville-de-traverse-3",
      title: L("Ville de Traverse", "Traverse Town"),
      subtitle: L("Troisième visite", "Third visit"),
      world: "traverse-town",
      status: "done",
      level: "33 → 35",
      intro: L(
        "Une visite très courte — une conversation avec Cid suffit à ouvrir la Forteresse Oubliée — mais c'est **le dernier moment tranquille du jeu**. Ce qui suit change tout.\n\nAprès les événements de la Forteresse Oubliée, les Sans-cœur de **tous les mondes** montent brutalement de niveau, jusqu'à l'équivalent du niveau 50 en moyenne. Tout ce qui se fait facilement maintenant — récolter des matériaux de synthèse, finir des coupes, ramasser les coffres oubliés — devient nettement plus pénible ensuite.",
        "A very short visit — one conversation with Cid opens Hollow Bastion — but it is **the last quiet moment of the game**. What follows changes everything.\n\nAfter the events of Hollow Bastion, the Heartless of **every world** jump sharply in level, to around level 50 on average. Everything that is easy right now — gathering synthesis materials, clearing cups, picking up missed chests — becomes markedly more painful afterwards.",
      ),
      steps: [
        {
          id: "cid",
          title: L("Parler à Cid", "Talk to Cid"),
          text: L(
            "Une seule chose est obligatoire : parler à Cid. La Forteresse Oubliée devient alors accessible depuis le vaisseau.\n\nAvant de partir, passez par l'atelier de synthèse : les objets fabricables ont changé, et c'est le bon moment. Fabriquez tout ce qui est disponible, chaque série débloquant la suivante.\n\nSi ce n'est pas déjà fait, récupérez aussi le **Sceptre Magique** chez Merlin et l'**Étoile Filante** chez Geppetto.",
            "Only one thing is mandatory: talk to Cid. Hollow Bastion then becomes reachable from the ship.\n\nBefore you go, drop by the Item Workshop: what you can synthesise has changed, and now is the moment. Craft everything available, each set unlocking the next.\n\nIf you have not yet, also collect the **Spellbinder** from Merlin and the **Wishing Star** from Geppetto.",
          ),
        },
        {
          id: "avant-de-partir",
          title: L("Ce qu'il vaut mieux faire maintenant", "What is better done now"),
          text: L(
            "Dingo le dit lui-même en quittant la ville : c'est le moment de repasser partout. Concrètement, avant de mettre le cap sur la Forteresse Oubliée :\n\n**Terminez la coupe d'Hercule** au Colisée. Elle est encore raisonnable ; après, elle reste faisable mais l'entraînement autour est bien plus lent.\n\n**Repassez dans tous les mondes** avec le Saut Haut, Plané et les trinités désormais disponibles : beaucoup de coffres n'étaient pas atteignables au premier passage.\n\n**Récoltez vos matériaux de synthèse maintenant.** C'est le point le plus important : les ennemis faibles d'aujourd'hui sont ceux qu'on farme confortablement. Ils ne le resteront pas.\n\n**Finissez la Forêt des Rêves Bleus** si vous avez toutes les pages déchirées.",
            "Goofy says it himself as you leave town: this is the moment to go back everywhere. Concretely, before setting course for Hollow Bastion:\n\n**Clear the Hercules Cup** at the Coliseum. It is still reasonable now; afterwards it stays doable, but the training around it is far slower.\n\n**Revisit every world** with High Jump, Glide and the Trinities you now have: many chests were out of reach on the first pass.\n\n**Gather your synthesis materials now.** This is the key point: today's weak enemies are the ones you farm comfortably. They will not stay that way.\n\n**Finish the Hundred Acre Wood** if you have all the Torn Pages.",
          ),
        },
      ],
      collectibles: [
        { kind: "keyblade", label: L("Sceptre Magique", "Spellbinder"), where: L("Chez Merlin, si ce n'est pas déjà pris.", "At Merlin's, if not already taken.") },
        { kind: "keyblade", label: L("Étoile Filante", "Wishing Star"), where: L("Chez Geppetto, si ce n'est pas déjà pris.", "At Geppetto's, if not already taken.") },
      ],
      missable: [
        L("Rien ne se perd définitivement, mais après la Forteresse Oubliée les Sans-cœur de tous les mondes passent aux alentours du niveau 50 : tout ce qui se récolte facilement doit se récolter maintenant.", "Nothing is lost for good, but after Hollow Bastion the Heartless of every world jump to around level 50: everything that is easy to gather should be gathered now."),
      ],
    },
    {
      id: "forteresse-oubliee",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      world: "radiant-garden",
      status: "done",
      level: "35 → 45",
      intro: L(
        "Le point de bascule du jeu. Sora y perd sa Keyblade, ses deux équipiers, et repart avec une épée en bois — la Bête, seule, tient l'équipe debout le temps de tout reconquérir.\n\nC'est aussi le monde le plus long et le plus labyrinthique : ascenseurs, plateformes à cristaux, une énigme de bibliothèque et une chasse aux quatre morceaux d'emblème. Quatre boss s'y enchaînent, dont le plus dur du jeu à ce stade.\n\nOn en repart avec la Trinité Détection — qui ouvre enfin les marques blanches de tous les mondes —, Gravité+, Ragnarok et deux rapports d'Ansem.",
        "The game's turning point. Sora loses his Keyblade, both companions, and leaves with a wooden sword — Beast alone keeps the party standing while everything is won back.\n\nIt is also the longest, most maze-like world: lifts, crystal platforms, a library puzzle and a hunt for four Emblem Pieces. Four bosses follow one another, including the hardest in the game at this point.\n\nYou leave with Trinity Detect — which finally opens the white marks in every world —, Gravira, Ragnarok and two Ansem's Reports.",
      ),
      steps: [
        {
          id: "sans-keyblade",
          title: L("Sans Keyblade, avec la Bête", "No Keyblade, with Beast"),
          image: { src: "/images/walkthrough/hollow-bastion-1.webp", credit: credit("Hollow Bastion from KH1 gameplay 2.png"), width: 420, height: 236 },
          text: L(
            "À l'arrivée, montez de plateforme en plateforme jusqu'au sommet. **Glacier gèle les bulles d'eau** et les transforme en plateformes ; y entrer sans les geler vous transporte sous la surface. Les deux servent.\n\nEn haut, Riku prend la Keyblade, et Donald et Dingo suivent Riku. Il vous reste **l'épée en bois**, inutile contre les Sans-cœur, mais vous gardez la magie. La **Bête** rejoint l'équipe et se charge à peu près de tout : équipez-la d'accessoires corrects, elle en a besoin.\n\nPrenez la plateforme du sommet vers les portes du château. À droite, les curieux objets en cristal activent des plateformes : examinez le rouge après les portes, puis celui d'après pour descendre au niveau de base. Les **Sphères Sombres** apparaissent ici — plus agaçantes que dangereuses, la Bête les gère seule.\n\nLa bulle de gauche active deux commutateurs et donne des objets ; celle de droite mène au canal, avec un point de sauvegarde. Utilisez **Appeler** sur la grille : la Bête l'enfonce. La bulle suivante, gelée, cache une Matière Sombre bien planquée.",
            "On arrival, climb platform by platform to the top. **Blizzard freezes the water bubbles** and turns them into platforms; entering one without freezing it carries you below the surface. Both are useful.\n\nAt the top, Riku takes the Keyblade, and Donald and Goofy follow Riku. You are left with the **Wooden Sword**, useless against Heartless, but you keep your magic. **Beast** joins the party and handles just about everything: equip him with decent accessories, he needs them.\n\nTake the platform at the top to the Castle Gates. On the right, the strange crystal objects activate platforms: examine the red one past the gates, then the next to descend to the Base Level. **Darkballs** appear here — more nuisance than danger, Beast handles them alone.\n\nThe left bubble activates two crystal switches and yields items; the right one leads to the Waterway, with a save point. Use **Call** on the gate: Beast smashes it open. The next bubble, frozen, hides a well-hidden Dark Matter.",
          ),
        },
        {
          id: "murs-et-defenseur",
          title: L("Les murs mobiles et le Défenseur", "The moving walls and the Defender"),
          text: L(
            "La zone suivante fonctionne par commutateurs qui déplacent des murs. L'énigme est simple : **activez chaque nouveau commutateur dès qu'il devient accessible**, jusqu'à atteindre une bulle. Prenez-la, puis **Libérez** le commutateur suivant : une plateforme mène à un couloir gardé par un Défenseur.\n\nLes Défenseurs bloquent tous les dégâts avec leur bouclier, lancent de la magie à distance et frappent au corps à corps. Ils ont une chance infime de lâcher le bouclier Défenseur pour Dingo.\n\nActivez le commutateur qu'il gardait, puis refaites les commutateurs **en sens inverse** pour revenir aux portes du château : la grande porte est désormais ouverte. Entrez dans le hall, et après la scène, le combat contre Riku commence.",
            "The next area works by switches that move walls. The puzzle is simple: **activate each new switch as it becomes reachable**, until you get to a bubble. Take it, then **Release** the next switch: a platform leads to a corridor guarded by a Defender.\n\nDefenders block all damage with their shield, cast ranged magic and strike in melee. They have a minuscule chance to drop the Defender shield for Goofy.\n\nActivate the switch it was guarding, then work the switches **in reverse** to return to the Castle Gates: the front door is now unlocked. Enter the Entrance Hall, and after the cutscene, the Riku fight begins.",
          ),
        },
        {
          id: "bibliotheque",
          title: L("L'énigme de la bibliothèque", "The library puzzle"),
          text: L(
            "Riku battu, laissez la Bête de côté et montez l'escalier : un **Boost de compétence** (un Boost de force dans la version d'origine) attend en haut du pilier de gauche, devant la porte fermée. Tournez à gauche pour entrer dans la bibliothèque.\n\nLe principe : chaque volume coloré se range dans la série correspondante d'une étagère, ce qui **déplace toute l'étagère** et ouvre de l'espace.\n\nL'ordre qui fonctionne : prenez le **Khama vol. 8** rouge et rangez-le dans l'étagère K. Montez, prenez le **Theon vol. 6** brun sur le bureau et l'**Azal vol. 3** jaune de l'étagère voisine avec la Trinité Échelle. Prenez le **Mava vol. 6** vert clair sur l'étagère T la plus proche des portes, puis rangez le Theon vol. 6 : un commutateur apparaît et ouvre les portes du premier étage du hall.\n\nFinissez l'énigme avant de sortir : sautez dans l'espace fermé derrière le bureau, prenez le **Salegg vol. 6** bleu entre les volumes verts de l'étagère M et rangez-le dans l'étagère S en face. Rangez ensuite l'Azal vol. 3 dans l'étagère A du début, faites le tour pour prendre le **Nahara vol. 5** jaune à l'arrière et rangez-le dans l'étagère N devant le bureau, puis prenez le **Mava vol. 3** derrière. Rangez les deux Mava dans l'étagère M du rez-de-chaussée. Le **Hafet vol. 4** violet se libère : rangez-le dans l'étagère H du premier étage.\n\nUn passage caché s'ouvre alors vers la zone des ascenseurs, où **la Gravité fait descendre les plateformes flottantes** et leurs coffres.",
            "With Riku beaten, leave Beast aside and go up the stairs: an **AP Up** (a Power Up in the original) sits on top of the left pillar, in front of the locked door. Turn left into the Library.\n\nThe principle: each coloured volume slots into the matching series on a shelf, which **moves the whole shelf** and opens up space.\n\nThe order that works: take the red **Khama vol. 8** and slot it into the K shelf. Go up, take the brown **Theon vol. 6** on the desk and the yellow **Azal vol. 3** from the neighbouring shelf using Trinity Ladder. Take the bright green **Mava vol. 6** from the T shelf nearest the doors, then insert Theon vol. 6: a switch appears and unlocks the doors to the Entrance Hall's second floor.\n\nFinish the puzzle before leaving: jump into the closed-off area behind the desk, take the blue **Salegg vol. 6** from between the M shelf's green volumes and slot it into the S shelf opposite. Then insert Azal vol. 3 into the A shelf at the start, go all the way round for the yellow **Nahara vol. 5** at the rear and put it in the N shelf in front of the desk, then take the **Mava vol. 3** behind it. Slot both Mava volumes into the ground-floor M shelf. The purple **Hafet vol. 4** comes free: put it in the H shelf on the second floor.\n\nA hidden passage then opens to the Lift Stop, where **Gravity brings the floating platforms down** along with their chests.",
          ),
        },
        {
          id: "emblemes",
          title: L("Les quatre morceaux d'emblème", "The four Emblem Pieces"),
          text: L(
            "Sur la passerelle haute du hall, quatre morceaux sont à trouver :\n\n**Un** — brisez le vase à côté de la statue de droite : le morceau apparaît dans la fontaine du rez-de-chaussée.\n\n**Deux** — allumez les **huit bougies** réparties dans la zone avec Brasier : le morceau est caché dans le brasero central. Lancez la Foudre sur la petite pierre marquée pour abaisser les plateformes qui y mènent.\n\n**Trois et quatre** — poussez deux statues supplémentaires : l'une avec la **Trinité Charge**, l'autre à la main ; un coffre se révèle en face des portes de la bibliothèque.\n\nApportez les quatre morceaux à la porte verrouillée en haut de l'escalier. Après la scène, retournez-vous : le hall se remplit de Sans-cœur, **Défenseurs**, **Sorciers** — qui absorbent tous les sorts sauf Gravité et Stop, se téléportent, et peuvent lâcher le Bâton du Sorcier pour Donald — et, dans la grande salle, des **Wyvernes**, rapides et agressives en piqué.\n\nDans Final Mix, méfiez-vous aussi des **Soldats Furtifs**, invisibles : on ne les trouve qu'au verrouillage, Stop les gère bien, et ils lâchent des Pierres d'Énergie.",
            "On the Entrance Hall's upper walkway, four pieces are to be found:\n\n**One** — smash the vase next to the statue on the right: the piece appears in the ground-floor fountain.\n\n**Two** — light the **eight candles** around the area with Fire: the piece is hidden in the central brazier. Cast Thunder on the small marked stone to lower the platforms leading to it.\n\n**Three and four** — push two more statues: one with **Trinity Charge**, the other by hand; a chest reveals itself opposite the Library doors.\n\nTake all four pieces to the locked door at the top of the staircase. After the cutscene, turn around: the hall fills with Heartless — **Defenders**, **Wizards** (which absorb every spell but Gravity and Stop, teleport away, and can drop the Wizard's Relic for Donald) — and, in the main hall, **Wyverns**, fast and aggressive in their dives.\n\nIn Final Mix, watch out too for **Stealth Soldiers**, invisible: only lock-on finds them, Stop handles them well, and they drop Energy Stones.",
          ),
        },
        {
          id: "ascenseurs",
          title: L("Ascenseurs, grande crête et haute tour", "Lift Stop, Great Crest and High Tower"),
          text: L(
            "La dernière partie du monde est une longue succession de commutateurs et de plateformes. Dans la zone des ascenseurs, le second ascenseur et le commutateur voisin mènent à des matériaux de synthèse et à un passage vers le cachot (avec une **Trinité Saut**). La porte voisine donne sur l'autre passerelle des portes du château.\n\nAttention aux Wyvernes ici : **tomber vous renvoie au niveau de base**. Le commutateur rouge met une plateforme en mouvement (l'autre a déjà été activée) et donne trois objets ; le bleu appelle un ascenseur vers la grande crête.\n\nÀ la grande crête, un commutateur donne accès à la grande plateforme ; activez le commutateur rouge du centre après le combat de mi-parcours pour arriver de l'autre côté du château. Revenez aux ascenseurs, montez, et repassez par la grande crête : un **Orichalque** attend sur la gauche.\n\nAvant de repartir vers les ascenseurs, **sautez dans le vide et Planez sous le gros bloc que vous venez de déplacer** : une Couronne Royale s'y cache (un Flotte-G dans la version d'origine). Vous retombez, mais la remontée est rapide.\n\nEnfin, par l'entrée normale des ascenseurs, allez à la haute tour : les commutateurs et les gros blocs vous mènent au dernier, qui règle la destination de l'ascenseur accessible depuis la bibliothèque.\n\nRepassez une dernière fois par les ascenseurs pour entrer dans la chapelle du château : Maléfique vous y attend.",
            "The last part of the world is a long chain of switches and platforms. In the Lift Stop, the second lift and the nearby switch lead to synthesis materials and a passage back to the Dungeon (with a **Trinity Jump**). The nearby door opens onto the other Castle Gates walkway.\n\nWatch out for Wyverns here: **falling sends you back to the Base Level**. The red switch sets a platform moving (the other was activated earlier) and yields three items; the blue one calls a lift to the Great Crest.\n\nAt the Great Crest, a switch gives access to the massive platform; hit the red switch in the centre after the mid-way fight to arrive on the other side of the castle. Return to the Lift Stop, go up, and pass through the Great Crest again: an **Orichalcum** waits on your left.\n\nBefore heading back to the Lift Stop, **jump off the edge and Glide underneath the large block you just moved**: a Royal Crown hides there (a Float-G in the original). You fall, but the climb back is quick.\n\nFinally, through the normal Lift Stop entrance, reach the High Tower: the switches and the big blocks take you to the last one, which sets the destination of the lift reached from the Library.\n\nOne last pass through the Lift Stop brings you to the Castle Chapel: Maleficent is waiting.",
          ),
        },
        {
          id: "apres-riku-ansem",
          title: L("Après Riku-Ansem : la Serrure finale", "After Riku-Ansem: the final Keyhole"),
          text: L(
            "Riku-Ansem battu, vous recevez **Ragnarok**, une capacité active qui déclenche un combo aérien avec un coup final chargeable projetant une nuée de rayons.\n\nLes scènes vous font ensuite **jouer une Ombre**. Il n'y a rien à faire : plus d'ennemis, plus d'attaque, seulement des sauts. Sautez de tous les rebords possibles jusqu'à revenir aux portes du château, puis entrez dans le hall pour retrouver Kairi, Donald et Dingo, et repartir automatiquement à la Ville de Traverse.\n\nDe retour, la Forteresse Oubliée se termine : le **Béhémoth** garde la grande salle — le plus gros Sans-cœur du jeu, dont la corne est le seul point faible — et la Serrure finale se scelle ensuite. Le rapport d'Ansem n° 10 et la Keyblade **Chaîne Ultime** (une fois tous les Orichalques réunis) sont les dernières récompenses du monde.\n\nÀ partir d'ici, les boss facultatifs deviennent accessibles : **Kurt Zisa** à Agrabah, le **Fantôme** au Pays Imaginaire, et le **Sans-cœur Inconnu** dans la Forteresse Oubliée elle-même en Final Mix.",
            "With Riku-Ansem beaten, you receive **Ragnarok**, an active ability that triggers an aerial combo with a chargeable finisher releasing a swarm of homing beams.\n\nThe cutscenes then have you **play as a Shadow**. There is nothing to do: no enemies, no attack, only jumps. Jump off every ledge you can until you reach the Castle Gates, then enter the Entrance Hall to be reunited with Kairi, Donald and Goofy, and return automatically to Traverse Town.\n\nOn your return, Hollow Bastion finishes: the **Behemoth** guards the Grand Hall — the game's largest Heartless, whose horn is the only weak point — and the final Keyhole is sealed afterwards. Ansem's Report 10 and the **Ultima Weapon** Keyblade (once every Orichalcum is gathered) are the world's last rewards.\n\nFrom here, the optional bosses open up: **Kurt Zisa** in Agrabah, the **Phantom** in Neverland, and the **Unknown** in Hollow Bastion itself in Final Mix.",
          ),
        },
      ],
      bosses: [
        {
          id: "riku",
          name: L("Riku", "Riku"),
          entry: "riku",
          level: "36",
          reward: L("La Trinité Détection.", "Trinity Detect."),
          tactics: L(
            "Vous récupérez la Keyblade, Donald et Dingo pour ce combat. Riku n'est pas très dangereux, mais **la magie ne lui fait rien** — et il ne se bat lui-même qu'au corps à corps.\n\nSes coups reprennent ceux des Îles du Destin, **sans les contres dangereux**. Aéro+ si vous en avez besoin, mais à trois, il tombe vite.\n\nSa défaite donne la **Trinité Détection**, qui active enfin les marques blanches de tous les mondes : le Pays des Merveilles, entre autres, y cache la Keyblade Chance.",
            "You get the Keyblade, Donald and Goofy back for this fight. Riku is not very dangerous, but **magic does nothing to him** — and he himself fights only in melee.\n\nHis moves are those of Destiny Islands, **without the dangerous counters**. Aerora if you need it, but three against one, he goes down fast.\n\nBeating him grants **Trinity Detect**, which finally activates the white marks in every world: Wonderland, among others, hides the Lady Luck Keyblade behind one.",
          ),
        },
        {
          id: "maleficent",
          name: L("Maléfique", "Maleficent"),
          entry: "maleficent",
          level: "40",
          reward: L("Le rapport d'Ansem n° 5, et la capacité Encouragement pour Donald.", "Ansem's Report 5, and the Cheer ability for Donald."),
          tactics: L(
            "Elle reste sur sa plateforme flottante, hors de portée. **Attaquez la plateforme** — les coups normaux comme la Gravité fonctionnent — pour la faire descendre.\n\nDe là-haut, elle invoque des Défenseurs ou des Sphères Sombres et vous frappe de son bâton : rien de grave. Le danger est ailleurs, dans **son sort de météores**, annoncé par « Météores célestes, déchaînez votre fureur ! ». Un portail s'ouvre à l'une des extrémités de la chapelle et remplit toute la zone : courez vers les bords, contre les murs, et rappelez vos équipiers pour ne pas les perdre bêtement.\n\nLaissée trop longtemps en l'air, elle déclenche aussi un orage et fait pleuvoir la foudre. Faire redescendre la plateforme y met fin — mais les éclairs qui touchent son rebord courent sur la moitié de son pourtour. Le seul endroit vraiment sûr est **dessous**.\n\nElle peut enfin se changer en boule de flammes pour se reformer à l'autre bout de la salle : c'est sa fuite si vous êtes resté sur la plateforme.",
            "She stays on her floating platform, out of reach. **Attack the platform** — normal hits and Gravity both work — to bring her down.\n\nFrom up there she summons Defenders or Darkballs and swats at you with her staff: nothing serious. The danger is elsewhere, in **her meteor spell**, announced by \"Meteors of heaven, unleash thy fury!\". A portal opens at one end of the chapel and fills the entire area: run for the edges, against the walls, and recall your party so as not to lose them pointlessly.\n\nLeft in the air too long, she also summons a lightning storm and rains bolts on you. Bringing the platform down stops it — but bolts that land on its rim travel halfway around it. The only genuinely safe spot is **underneath**.\n\nFinally she can turn into a ball of flame to reform at the other end of the room: that is her escape if you managed to stay aboard.",
          ),
        },
        {
          id: "dragon-maleficent",
          name: L("Maléfique en dragon", "Dragon Maleficent"),
          entry: "dragon-maleficent",
          level: "42",
          reward: L("L'objet Lueur de Feu, qui débloque l'invocation Mushu.", "The Fireglow item, which unlocks the Mushu summon."),
          tactics: L(
            "Bien plus dur que la forme humaine. **Invoquez Clochette** : elle soigne en continu et vous relève une fois, ce qui change tout ici.\n\nElle griffe, saute et pivote pour un coup de queue. Presque tous ses mouvements de pattes créent des **ondes de choc au sol** : sauter régulièrement suffit à les éviter.\n\nSes deux attaques dangereuses sont le souffle — des flammes vertes qui recouvrent l'essentiel du sol — et un grand cercle de boules de feu qui vous poursuivent une à une.\n\nIl existe des positions où l'on est presque intouchable, sur son dos ou au-dessus des racines de la zone, en lançant du Jet de Lame à distance. Sinon, restez collé **sous son cou**, avec Aéro+ et l'Olympia pour les dégâts : bien équipé grâce à la synthèse, le combat passe.",
            "Far harder than the human form. **Summon Tinker Bell**: she heals continuously and picks you up once, which changes everything here.\n\nShe claws, jumps and spins for a tail swipe. Almost all her leg movements create **shockwaves along the ground**: jumping regularly is enough to avoid them.\n\nHer two dangerous attacks are the breath — green flames covering most of the floor — and a great ring of fireballs that home in on you one after another.\n\nThere are spots where you are nearly untouchable, on her back or above the roots in the area, casting Strike Raid from range. Otherwise stay tucked **under her neck**, with Aerora and Olympia for damage: well equipped thanks to synthesis, the fight goes through.",
          ),
        },
        {
          id: "riku-ansem",
          name: L("Riku-Ansem", "Riku-Ansem"),
          entry: "riku-ansem",
          level: "45",
          reward: L("La capacité Ragnarok.", "The Ragnarok ability."),
          tactics: L(
            "**Seul**, et sans magie utile : Riku reste insensible aux sorts. Tout se joue sur la force — porte-clés et accessoires qui l'augmentent sont la vraie préparation de ce combat.\n\nTant que sa barre reste orange, il enchaîne des combos rapides. Il **contre la magie par un Brasier des Ténèbres**, ce qui se retourne contre lui : gardez la garde et renvoyez-lui ses propres projectiles. Réservez donc votre magie à Aéro+ et Soin+. Il peut aussi sauter et retomber en semant des pointes d'énergie autour de lui.\n\nAu tiers de vie en moins, il utilise son équivalent du Jet de Lame — parable et renvoyable — et certains de ses coups propagent des ondes.\n\nSur sa dernière barre arrive l'**Aura Sombre** : il se met à briller, lévite, puis se téléporte et fonce sans arrêt dans toute l'arène. Au sol, c'est presque impossible à éviter. La réponse est en l'air : **sautez et restez en Plané** aussi longtemps que possible, jusqu'à son coup final qui couvre la majeure partie du terrain de pointes.\n\nEntre deux Auras Sombres, frappez tout ce que vous pouvez : il la relancera, et encore, jusqu'à tomber.",
            "**Alone**, and with no useful magic: Riku stays immune to spells. Everything rides on strength — keychains and accessories that raise it are the real preparation for this fight.\n\nWhile his bar stays orange he chains quick combos. He **answers magic with Dark Firaga**, which turns against him: keep your guard up and send his own projectiles back. So save your magic for Aerora and Cura. He can also leap and land trailing energy spikes around him.\n\nA third of his HP down, he uses his version of Strike Raid — blockable and returnable — and some of his blows spread waves.\n\nOn his last bar comes **Dark Aura**: he starts glowing, floats, then teleports and dashes endlessly around the arena. On the ground it is nearly impossible to avoid. The answer is in the air: **jump and stay on Glide** as long as you can, until his finisher covers most of the field with spikes.\n\nBetween two Dark Auras, hit him with everything: he will start it again, and again, until he falls.",
          ),
        },
      ],
      collectibles: [
        { kind: "trinity", label: L("Trinité Détection", "Trinity Detect"), where: L("Récompense du combat contre Riku.", "Reward for the Riku fight."), note: L("Elle active les marques Trio blanches de tous les mondes.", "It activates the white Trinity Marks in every world.") },
        { kind: "ability", label: L("Ragnarok", "Ragnarok"), where: L("En battant Riku-Ansem.", "By beating Riku-Ansem.") },
        { kind: "ability", label: L("Lueur de Feu", "Fireglow"), where: L("En battant Maléfique en dragon.", "By beating Dragon Maleficent."), note: L("Débloque l'invocation Mushu.", "Unlocks the Mushu summon.") },
        { kind: "report", label: L("Rapports d'Ansem n° 5 et n° 10", "Ansem's Reports 5 and 10"), where: L("Le premier en battant Maléfique, le second à la fin du monde.", "The first by beating Maleficent, the second at the end of the world.") },
        { kind: "chest", label: L("Orichalque", "Orichalcum"), where: L("À la grande crête, sur la gauche, après le second passage.", "At the Great Crest, on the left, after the second pass.") },
        { kind: "chest", label: L("Couronne Royale", "Royal Crown"), where: L("Sautez dans le vide depuis la grande crête et Planez sous le gros bloc déplacé.", "Jump off the edge at the Great Crest and Glide underneath the large block you moved."), requires: L("Plané, obtenu au Pays Imaginaire.", "Glide, obtained in Neverland.") },
        { kind: "chest", label: L("Matière Sombre", "Dark Matter"), where: L("Dans une bulle du canal : gelez-la avec Glacier.", "In a bubble in the Waterway: freeze it with Blizzard.") },
        { kind: "chest", label: L("Boost de compétence", "AP Up"), where: L("En haut du pilier de gauche, devant la porte fermée du hall.", "On top of the left pillar, in front of the locked door in the Entrance Hall."), note: L("Un Boost de force dans la version d'origine.", "A Power Up in the original version.") },
        { kind: "trinity", label: L("Trinité Saut", "Trinity Jump"), where: L("Dans le cachot, via le second ascenseur de la zone des ascenseurs.", "In the Dungeon, via the second lift in the Lift Stop.") },
      ],
      missable: [
        L("Rien ne se perd, mais l'énigme de la bibliothèque doit être terminée entièrement pour ouvrir le passage caché vers la zone des ascenseurs — et les coffres qui vont avec.", "Nothing is lost, but the library puzzle has to be completed in full to open the hidden passage to the Lift Stop — and the chests that come with it."),
        L("Après ce monde, les Sans-cœur de tous les mondes passent aux alentours du niveau 50 : les matériaux de synthèse deviennent nettement plus longs à récolter.", "After this world, the Heartless of every world jump to around level 50: synthesis materials become markedly slower to gather."),
      ],
    },
    {
      id: "fin-du-monde",
      title: L("Fin du Monde", "End of the World"),
      world: "end-of-the-world",
      status: "done",
      level: "50 → 60",
      intro: L(
        "Le dernier monde : ce qu'il reste des mondes dévorés par les ténèbres, agglomérés en un seul lieu. On y traverse une dimension vide semée de coffres, un gouffre, un terminus qui rejoue un morceau de chaque monde visité, puis trois combats finaux enchaînés.\n\nUn point important : la dernière porte est un **point de non-retour**, mais rien n'est perdu — après la fin, on peut recharger sa sauvegarde et revenir finir le contenu facultatif. C'est même ce qu'il faut faire pour le 100 %.",
        "The last world: what remains of the worlds devoured by darkness, gathered into one place. You cross an empty dimension strewn with chests, a crevasse, a terminus that replays a piece of every world visited, then three final fights in a row.\n\nOne important point: the last door is a **point of no return**, but nothing is lost — after the ending you can reload your save and come back to finish the optional content. That is exactly what the 100 % requires.",
      ),
      steps: [
        {
          id: "dimension-finale",
          title: L("La dimension finale et les dix coffres", "The Final Dimension and the ten chests"),
          image: { src: "/images/walkthrough/end-of-the-world-1.webp", credit: credit("End of the World gameplay 1.png"), width: 420, height: 237 },
          text: L(
            "Passez le point de sauvegarde de la Porte des Ténèbres pour entrer dans la dimension finale, un espace pratiquement vide. **Dix coffres** y sont posés sur de minuscules îlots, reliés par des chemins invisibles : la petite plateforme sur laquelle vous êtes **pointe dans la bonne direction**. C'est le seul repère.\n\nApprocher ou ouvrir un coffre déclenche souvent un combat. Le premier introduit les **Invisibles** : parmi les Sans-cœur non-boss les plus redoutables du jeu, ils arrivent en groupe, encaissent énormément et frappent très fort. En plus du corps à corps, ils se changent en flamme et forment un anneau autour de vous — **il faut sauter au moment où l'anneau se resserre**.\n\nDes Sphères Sombres apparaissent aussi, et un **Arche-Béhémoth** au quatrième coffre : une variante recolorée, un peu plus faible que celui de la Forteresse Oubliée.\n\nLe cinquième coffre déclenche les **Étoiles Angéliques**, des Sans-cœur volants qui bloquent les attaques de face avec leurs ailes, résistent à la magie, **absorbent la Foudre** et tirent à distance. Quand l'une se met à briller, elle prépare l'une de trois attaques spéciales selon sa couleur : la frapper interrompt tout.\n\nUn second Arche-Béhémoth garde la sortie. Ensuite vient la grande crevasse : descendez jusqu'en bas. En chemin, **le Choc du Météore pour Donald** se trouve dans une zone accessible uniquement par le haut, au bout du canyon, puis par la faille du sol que révèle la mort des ennemis. Le tourbillon bleu du fond mène au terminus.",
            "Go past the Gate to the Dark's save point to enter the Final Dimension, a virtually empty space. **Ten chests** sit there on tiny islands, linked by invisible paths: the small platform you stand on **points the right way**. That is the only cue.\n\nApproaching or opening a chest often starts a fight. The first introduces the **Invisibles**: among the game's most formidable non-boss Heartless, they come in groups, absorb a huge amount and hit very hard. Besides melee, they turn into flame and form a ring around you — **you have to jump as the ring contracts**.\n\nDarkballs also appear, and an **Arch Behemoth** at the fourth chest: a recoloured variant, slightly weaker than the one in Hollow Bastion.\n\nThe fifth chest triggers the **Angel Stars**, flying Heartless that block frontal attacks with their wings, resist magic, **absorb Thunder** and shoot at range. When one starts glowing it is preparing one of three special moves depending on its colour: hitting it interrupts everything.\n\nA second Arch Behemoth guards the exit. Then comes the Giant Crevasse: make your way to the bottom. On the way, **Meteor Strike for Donald** sits in an area only reachable from above, at the end of the canyon, then through the gap in the floor revealed by killing the enemies. The blue whirlpool at the bottom leads to the World Terminus.",
          ),
        },
        {
          id: "terminus",
          title: L("Le terminus des mondes", "The World Terminus"),
          text: L(
            "Le terminus est une suite de zones séparées, chacune avec un téléporteur vers la suivante et la précédente. Au centre de chacune, un grand pilier sombre — **à condition d'avoir scellé le trou de serrure du monde correspondant**. Le pilier mène à un fragment fermé de ce monde : on y affronte ses ennemis, on ramasse un coffre, et on ressort par l'unique sortie.\n\nDans la version d'origine, ces coffres contenaient des copies des accessoires lâchés par les boss ; **en Final Mix, ce sont surtout des matériaux de synthèse**.\n\nDeux arrêts valent le détour. Le **Grand Bouclier** de Dingo se trouve dans la zone du Pays Imaginaire, dans la coquerie — accessible une fois nettoyée la salle normalement fermée par une marque Trio jaune. L'avant-dernier portail mène à la **Forêt des Rêves Bleus**, qui contient aussi un point de sauvegarde.\n\nLa dernière zone est le laboratoire : lisez le terminal, réglez son compte à ce qui apparaît, puis prenez un portail pour sortir. Le puits voisin déclenche le combat contre Chernabog.",
            "The Terminus is a chain of separate areas, each with a teleporter to the next and the previous one. At the centre of each, a tall dark pillar — **provided you sealed that world's Keyhole**. The pillar leads to a closed-off fragment of that world: you fight its enemies, pick up a chest, and leave through the only exit.\n\nIn the original version these chests held copies of the accessories dropped by bosses; **in Final Mix they are mostly synthesis materials**.\n\nTwo stops are worth the detour. Goofy's **Mighty Shield** is in the Neverland area, in the Galley — reachable once you clear the room normally locked by a yellow Trinity Mark. The second-to-last portal leads to the **Hundred Acre Wood**, which also has a save point.\n\nThe last area is the Laboratory: read the terminal, deal with what appears, then take a portal out. The pit nearby starts the Chernabog fight.",
          ),
        },
        {
          id: "avant-la-fin",
          title: L("Avant de passer la dernière porte", "Before going through the last door"),
          text: L(
            "Chernabog battu, vous recevez **Super Plané**, la dernière capacité partagée : une version bien plus rapide du Plané, qui rend tous les déplacements du jeu plus supportables.\n\nEntrez dans le cratère — le volcan désormais éteint —, traversez la suite de salles reliées par des portails, puis les **Mondes Liés** : un Arche-Béhémoth, puis des vagues de Sphères Sombres, d'Invisibles et d'Étoiles Angéliques. Battez-les jusqu'à ce que l'emblème des Sans-cœur ait complètement disparu ; l'accès au dernier repos s'ouvre alors.\n\nIl y a un point de sauvegarde, et une porte : **c'est le point de non-retour**. La franchir mène au boss final. Vous pourrez toujours recharger votre sauvegarde après la fin pour reprendre le contenu facultatif.\n\nCe qu'il reste à faire, justement : la **coupe de l'Hadès** et les deux boss facultatifs des matchs qui suivent, plus **Kurt Zisa** à Agrabah, le **Fantôme** au Pays Imaginaire et le **Sans-cœur Inconnu** dans la Forteresse Oubliée en Final Mix. Et le farm des matériaux pour les armes ultimes, l'**Ultima Weapon** en tête.\n\nJustement, la zone des Mondes Liés fait réapparaître les Sans-cœur en boucle, **Néo-Ombres compris** — exclusives à Final Mix, et dont le comportement change selon le nombre de survivantes. C'est l'un des meilleurs endroits du jeu pour récolter. Final Mix ajoute aussi deux armes puissantes à synthétiser pour Donald et Dingo.",
            "With Chernabog beaten, you receive **Superglide**, the last shared ability: a much faster version of Glide that makes every trip in the game more bearable.\n\nEnter the Crater — the now-extinct volcano —, cross the series of rooms linked by portals, then the **Linked Worlds**: an Arch Behemoth, then waves of Darkballs, Invisibles and Angel Stars. Beat them until the Heartless emblem has disappeared entirely; access to the Final Rest then opens.\n\nThere is a save point, and a door: **that is the point of no return**. Going through it leads to the final boss. You will still be able to reload your save after the ending to pick the optional content back up.\n\nWhat is left, precisely: the **Hades Cup** and the two optional bosses in the matches that follow, plus **Kurt Zisa** in Agrabah, the **Phantom** in Neverland and the **Unknown** in Hollow Bastion in Final Mix. And the grind for the materials behind the ultimate weapons, the **Ultima Weapon** first among them.\n\nOn that note, the Linked Worlds area respawns Heartless endlessly, **Neoshadows included** — exclusive to Final Mix, and whose behaviour changes with how many are left. It is one of the best farming spots in the game. Final Mix also adds two powerful weapons to synthesise for Donald and Goofy.",
          ),
        },
      ],
      bosses: [
        {
          id: "chernabog",
          name: L("Chernabog", "Chernabog"),
          entry: "chernabog",
          level: "50",
          reward: L("La capacité partagée Super Plané.", "The shared ability Superglide."),
          tactics: L(
            "Le combat a lieu au-dessus du volcan, dans une zone où **toute l'équipe vole**, comme au Pays Imaginaire. Son point faible est **la tête**, comme pour Ursula géante.\n\nIl attaque peu, mais très fort : **Aéro++ est la vraie préparation** de ce combat. Il souffle pour projeter tout le monde au loin, et enchaîne souvent avec des boules de lumière à tête chercheuse. Ses deux autres attaques courantes sont un souffle de feu balayé de gauche à droite, et un bras levé qui fait jaillir une colonne de flammes.\n\nVers la fin, il enflamme ses mains et déchaîne un combo puissant devant lui. Sa pire attaque arrive quand il se courbe puis se cambre en arrière : **le volcan entre en éruption** et embrase toute la zone plusieurs secondes. Fuyez dès le premier signe, il n'y a rien d'autre à faire.\n\nDeux détails utiles : on **ne peut pas invoquer en volant**, mais se poser une seconde sur le sommet du volcan ou sur son épaule suffit pour appeler Clochette. Et les accessoires de résistance au feu changent complètement le combat.",
            "The fight takes place above the volcano, in an area where **the whole party flies**, as in Neverland. His weak point is **the head**, like Giant Ursula's.\n\nHe attacks rarely, but very hard: **Aeroga is the real preparation** for this fight. He blows everyone away, and often follows with homing balls of light. His two other common attacks are fire breathed from side to side, and a raised arm summoning a pillar of flame.\n\nNear the end he wreathes his hands in flames and unleashes a powerful combo in front of him. His worst attack comes when he hunches then rears backwards: **the volcano erupts** and engulfs the whole area for several seconds. Flee at the first sign, there is nothing else to do.\n\nTwo useful details: you **cannot summon while flying**, but landing for a second on the volcano's summit or on his shoulder is enough to call Tinker Bell. And fire-resistance accessories change the fight completely.",
          ),
        },
        {
          id: "ansem-1",
          name: L("Ansem, premier combat", "Ansem, first fight"),
          entry: "ansem-seeker-of-darkness",
          level: "55",
          tactics: L(
            "Ansem laisse presque tout le travail à son gardien, la **Silhouette Sombre**. Elle lance des salves de lames d'énergie — **automatiquement déviées par Aéro++** —, se déploie devant Ansem pour bloquer les attaques de face, ce qui oblige à le contourner, et frappe aussi au corps à corps.\n\nSa manœuvre dangereuse est annoncée par un « Soumets-toi ! » : la Silhouette s'élance et **s'accroche à qui elle touche**. Si c'est vous, votre commande « Attaquer » se change périodiquement en « Gel » et vous cloue sur place, pendant qu'Ansem se couvre d'un bouclier d'énergie qui blesse au contact et tente de vous rentrer dedans.\n\nDeux options : **ne rien faire**, elle inflige alors quelques dégâts au hasard — c'est le plus sûr ; ou **frapper Ansem**, ce qui raccourcit le temps d'accrochage. Lui-même est lent : c'est la Silhouette qui fait le combat.\n\nAprès sa première défaite, vous avez un moment pour souffler, puis vous le suivez dans la section suivante, **coupé de Donald et Dingo**, où un Ténébreux vous attend seul. À ce stade il ne tient pas trois secondes.",
            "Ansem leaves almost all the work to his guardian, the **Dark Figure**. It throws volleys of energy blades — **automatically deflected by Aeroga** —, splays out in front of Ansem to block frontal attacks, forcing you to go around, and also lashes out in melee.\n\nIts dangerous move is announced by \"Submit!\": the Figure lunges and **latches onto whoever it hits**. If that is you, your 'Attack' command periodically turns into 'Freeze' and pins you in place, while Ansem raises an energy shield that hurts on contact and tries to ram you.\n\nTwo options: **do nothing**, and it deals minor random damage — the safest; or **hit Ansem**, which shortens the time it stays attached. He himself is slow: the Figure is the fight.\n\nAfter his first defeat you have a moment to regroup, then follow him into the next section, **cut off from Donald and Goofy**, where a Darkside waits alone. By now it does not last three seconds.",
          ),
        },
        {
          id: "ansem-2",
          name: L("Ansem, second combat", "Ansem, second fight"),
          entry: "ansem-seeker-of-darkness",
          level: "56",
          tactics: L(
            "Moins de points de vie, mais **vous êtes seul**. La Silhouette Sombre perd son disque d'énergie ; en échange, Ansem s'en sert pour **charger à travers l'arène**. Aéro++ bloque encore la charge, et devrait rester actif en permanence tout le combat.\n\nLe « Soumets-toi ! » est toujours là, et bien plus pénible sans équipiers pour encaisser à votre place.\n\nSa nouveauté est aussi sa meilleure attaque : **l'arène s'assombrit**, la Silhouette plonge dans le sol et ressort à toute vitesse **sous vos pieds**, en créant une onde de choc. Sa vitesse et sa trajectoire verticale ne laissent qu'une réponse : **des Roulades enchaînées**.\n\nSans Donald ni Dingo, les Élixirs sont votre seul filet — prévoyez-en.",
            "Less HP, but **you are alone**. The Dark Figure loses its energy disc; in exchange, Ansem uses it to **charge across the arena**. Aeroga still blocks the charge, and should stay up permanently for the whole fight.\n\n\"Submit!\" is still there, and far more annoying with no allies to take the hit for you.\n\nHis new move is also his best: **the arena darkens**, the Figure sinks into the ground and shoots out at high speed **beneath you**, creating a small shockwave. Its speed and upward path leave only one answer: **consecutive Dodge Rolls**.\n\nWith no Donald or Goofy, Elixirs are your only safety net — bring some.",
          ),
        },
        {
          id: "world-of-chaos",
          name: L("Le Monde du Chaos", "World of Chaos"),
          entry: "world-of-chaos",
          level: "60",
          reward: L("La fin du jeu, et la vidéo bonus selon la difficulté et l'avancement.", "The ending, and the bonus video depending on difficulty and completion."),
          tactics: L(
            "Ansem a fusionné avec le vaisseau. Il reste à peu près immobile, mais **sa taille et son arme à deux lames lui donnent une allonge énorme**. Des rayons laser le soutiennent en continu : ils s'évitent en bougeant, mais comme il faut aussi frapper, il est souvent plus simple de **les encaisser sous Aéro++**. Éloignez-vous en revanche dès qu'il prépare un de ses combos, qui font très mal.\n\nLe vaisseau vous souffle au loin et **draine votre magie** : détruisez la lueur dans sa gueule pour arrêter le drain. Il invoque parfois des Bit Snipers, sans conséquence. À mi-vie, le nombre de lasers augmente ; il n'apprend rien de nouveau.\n\nUne fois vaincu, il se réfugie dans la Silhouette Sombre et Sora entre dans un **Portail des Ténèbres** : détruisez les Ombres puis l'objet en forme de piège, le « cœur de la salle », pour être éjecté.\n\nLa suite est un cycle : détruisez les tourelles sur le dessus du vaisseau, un deuxième portail s'ouvre — Sphères Sombres puis cœur de la salle — et **Dingo est libéré**. Avec lui, abattez le Visage à la proue, qui lance des attaques de foudre sans grand danger. Le troisième portail est dans sa bouche : des Invisibles, un troisième cœur, et **Donald est libre**. Reste le cœur principal, au centre : sa destruction ramène Ansem.\n\nIl reprend ses attaques précédentes, avec une seule nouveauté : **une sphère de lumière** projetée devant lui, qui s'étend, vous aspire tous les trois et inflige de gros dégâts continus avant d'exploser. La seule parade est de **fuir très vite en volant** — la zone reste saturée de petits rayons ensuite.\n\nAprès quoi, c'est fini : les scènes finales et le générique s'enchaînent.",
            "Ansem has bonded with the ship. He is largely stuck in place, but **his size and double-bladed weapon give him enormous reach**. Laser beams support him continuously: they are avoided by moving, but since you also need to attack, it is often simpler to **tank them under Aeroga**. Do move away whenever he winds up one of his combos, which hurt badly.\n\nThe ship blows you away and **drains your MP**: destroy the glowing light in its jaws to stop the drain. It sometimes summons Bit Snipers, of no consequence. Halfway through, the number of lasers increases; he learns nothing new.\n\nOnce beaten he takes shelter inside the Dark Figure and Sora enters a **Portal to Darkness**: destroy the Shadows then the snare-like object, the 'room core', to be ejected.\n\nWhat follows is a cycle: destroy the artillery on top of the ship, a second portal opens — Darkballs then a room core — and **Goofy is freed**. With him, take down the Face at the bow, which throws thunder attacks of little danger. The third portal is in its mouth: Invisibles, a third core, and **Donald is free**. That leaves the main core, at the centre: destroying it brings Ansem back.\n\nHe reuses his previous attacks, with one addition: **a sphere of light** cast out in front of him, which expands, sucks all three of you in and deals heavy continuous damage before exploding. The only counter is to **fly away fast** — the area stays saturated with tiny beams afterwards.\n\nAnd then it is over: the final cutscenes and credits follow.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Super Plané", "Superglide"), where: L("En battant Chernabog.", "By beating Chernabog."), note: L("Dernière capacité partagée du jeu : une version bien plus rapide du Plané.", "The game's last shared ability: a much faster version of Glide.") },
        { kind: "ability", label: L("Choc du Météore", "Meteor Strike"), where: L("Pour Donald, dans la grande crevasse : la zone n'est accessible que par le haut, au bout du canyon.", "For Donald, in the Giant Crevasse: the area is only reachable from above, at the end of the canyon.") },
        { kind: "ability", label: L("Grand Bouclier", "Mighty Shield"), where: L("Pour Dingo, dans la zone du Pays Imaginaire du terminus, à la coquerie.", "For Goofy, in the Terminus' Neverland area, in the Galley."), requires: L("Trinité Limite, pour la salle fermée par une marque jaune.", "Trinity Limit, for the room locked by a yellow mark.") },
        { kind: "chest", label: L("Les dix coffres de la dimension finale", "The Final Dimension's ten chests"), where: L("Sur les îlots reliés par des chemins invisibles : la petite plateforme pointe la bonne direction.", "On the islets linked by invisible paths: the small platform points the right way.") },
        { kind: "chest", label: L("Les coffres du terminus", "The Terminus chests"), where: L("Un par monde dont vous avez scellé le trou de serrure, au bout du pilier sombre.", "One per world whose Keyhole you sealed, at the end of the dark pillar."), note: L("Des matériaux de synthèse en Final Mix, des accessoires dans la version d'origine.", "Synthesis materials in Final Mix, accessories in the original.") },
      ],
      missable: [
        L("Un monde dont le trou de serrure n'a pas été scellé n'a pas de pilier au terminus : son coffre est alors inaccessible pour cette partie.", "A world whose Keyhole was not sealed has no pillar at the Terminus: its chest is then out of reach for that playthrough."),
        L("La dernière porte du dernier repos est un point de non-retour, mais la sauvegarde reste rechargeable après la fin : c'est ainsi qu'on termine le contenu facultatif.", "The last door at the Final Rest is a point of no return, but the save can be reloaded after the ending: that is how the optional content gets finished."),
      ],
    },
  ],
  quests,
};
