import type { LocalizedText } from "@/data/games";
import { quests } from "./kingdom-hearts-quests";
import type { Walkthrough, WalkSection } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/** Crédit commun des visuels repris du Kingdom Hearts Wiki (voir docs/IMAGES.md). */
const credit = (file: string) => `© Square Enix / Disney — via Kingdom Hearts Wiki (${file})`;

/** Section annoncée au sommaire mais pas encore rédigée. */
const soon = (id: string, title: LocalizedText, world?: string, subtitle?: LocalizedText): WalkSection => ({
  id,
  title,
  subtitle,
  world,
  status: "todo",
});

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
    soon("ville-de-traverse-2", L("Ville de Traverse", "Traverse Town"), "traverse-town", L("Deuxième visite", "Second visit")),
    soon("agrabah", L("Agrabah", "Agrabah"), "agrabah"),
    soon("monstro", L("Monstro", "Monstro"), "monstro"),
    soon("atlantica", L("Atlantica", "Atlantica"), "atlantica"),
    soon("ville-d-halloween", L("Ville d'Halloween", "Halloween Town"), "halloween-town"),
    soon("pays-imaginaire", L("Pays Imaginaire", "Neverland"), "neverland"),
    soon("ville-de-traverse-3", L("Ville de Traverse", "Traverse Town"), "traverse-town", L("Troisième visite", "Third visit")),
    soon("forteresse-oubliee", L("Forteresse Oubliée", "Hollow Bastion"), "radiant-garden"),
    soon("fin-du-monde", L("Fin du Monde", "End of the World"), "end-of-the-world"),
    soon("foret-des-reves-bleus", L("Forêt des Rêves Bleus", "Hundred Acre Wood"), "hundred-acre-wood", L("Facultatif", "Optional")),
    soon("coupes-et-boss", L("Coupes du Colisée et boss optionnels", "Coliseum cups and optional bosses"), "olympus"),
    { ...soon("synthese-et-ultima", L("Synthèse, Orichalques et Ultima Weapon", "Synthesis, Orichalcum and the Ultima Weapon")), entry: "moogles" },
  ],
  quests,
};
