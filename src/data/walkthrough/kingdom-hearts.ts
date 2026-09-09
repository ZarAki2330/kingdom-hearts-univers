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
          level: "1",
          reward: L("Aucune conséquence : perdre ne donne pas de game over, seulement un peu d'expérience en moins.", "No consequence: losing gives no game over, only a little less experience."),
          tactics: L(
            "Le géant ne bouge pas de sa place et n'a que deux points vulnérables : les mains et la tête. Il ouvre toujours par un poing planté dans le sol, facile à éviter, qui fait surgir des Ombres — gênantes, mais elles lâchent des sphères de vie bienvenues.\n\nSi vous y arrivez, grimpez le long du bras jusqu'à l'épaule pour frapper la tête : les dégâts sont meilleurs et les points de technique rapportent de l'expérience en prime. Sinon, tapez le poing.\n\nDébarrassez-vous des Ombres avant l'attaque suivante : il s'agenouille, écarte les bras et tire des sphères qui vous suivent depuis le trou de sa poitrine. On peut les renvoyer au sabre, mais rester derrière lui et profiter du moment pour frapper une main est plus rentable. Il alterne ces deux attaques jusqu'à la fin : répétez, et gardez la Potion pour la mauvaise passe.",
            "The giant never moves and has only two weak points: the hands and the head. It always opens with a fist driven into the ground, easy to dodge, which spawns Shadows — a nuisance, but they drop welcome health orbs.\n\nIf you can, climb up its arm to its shoulder to hit the head: the damage is better and the tech points bring bonus experience. Otherwise, hit the fist.\n\nClear the Shadows before the next attack: it kneels, spreads its arms and fires homing orbs from the hole in its chest. They can be batted back, but staying behind it and using the window to hit a hand pays better. It alternates between those two attacks to the end: repeat, and keep the Potion for a bad moment.",
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
          level: "6",
          reward: L("Fin du monde, et départ pour la Ville de Traverse.", "The end of the world, and departure for Traverse Town."),
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
    soon("ville-de-traverse-1", L("Ville de Traverse", "Traverse Town"), "traverse-town", L("Première visite", "First visit")),
    soon("pays-des-merveilles", L("Pays des Merveilles", "Wonderland"), "wonderland"),
    soon("colisee-de-l-olympe", L("Colisée de l'Olympe", "Olympus Coliseum"), "olympus"),
    soon("jungle-profonde", L("Jungle Profonde", "Deep Jungle"), "deep-jungle"),
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
