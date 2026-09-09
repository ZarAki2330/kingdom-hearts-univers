import type { LocalizedText } from "@/data/games";
import type { Walkthrough, WalkSection } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

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
    "Cette soluce couvre le premier Kingdom Hearts du début à la fin, et pas seulement le fil de l'histoire : chaque section indique aussi les coffres, les trinités, les dalmatiens et les mini-jeux qu'on y trouve, pour terminer le jeu à 100 %.\n\nElle est écrite pour la version Final Mix, la seule disponible aujourd'hui. Quand une chose diffère de la version d'origine sortie en 2002, c'est signalé.\n\nLes sections se lisent dans l'ordre de la partie. Si vous jouez sans chercher le 100 %, suivez les étapes et ignorez les listes de ramassage : elles sont toujours à part.",
    "This guide covers the first Kingdom Hearts from beginning to end, and not only the main story: each section also lists the chests, Trinity Marks, puppies and mini-games found there, so the game can be finished at 100%.\n\nIt is written for the Final Mix version, the only one available today. Whenever something differs from the original 2002 release, it is pointed out.\n\nSections follow the order of a normal playthrough. If you are not chasing 100%, follow the steps and ignore the collection lists: they are always kept separate.",
  ),
  before: [
    {
      id: "version",
      title: L("Quelle version jouer", "Which version to play"),
      text: L(
        "Final Mix est la version japonaise enrichie de 2002 : nouveaux Sans-cœur, nouvelles capacités, deux Keyblades supplémentaires, les rapports d'Ansem 11 à 13 et deux boss optionnels inédits. Elle est restée exclusive au Japon sur PlayStation 2, mais c'est elle qui a été remastérisée dans Kingdom Hearts HD 1.5 ReMIX, puis dans la compilation HD 1.5 + 2.5 ReMIX.\n\nAutrement dit : si vous jouez à Kingdom Hearts aujourd'hui, vous jouez à Final Mix, quelle que soit la plateforme. C'est cette version que la soluce décrit.",
        "Final Mix is the enriched Japanese release of 2002: new Heartless, new abilities, two extra Keyblades, Ansem's Reports 11 to 13 and two new optional bosses. It stayed exclusive to Japan on PlayStation 2, but it is the version that was remastered in Kingdom Hearts HD 1.5 ReMIX, then in the HD 1.5 + 2.5 ReMIX collection.\n\nIn other words: if you play Kingdom Hearts today, you play Final Mix, whatever the platform. That is the version this guide describes.",
      ),
    },
    {
      id: "difficulte",
      title: L("Choisir sa difficulté", "Choosing a difficulty"),
      text: L(
        "Trois modes : Débutant, Normal et Expert. Débutant vous offre d'emblée un stock d'objets de renfort et divise par deux les dégâts subis en vaisseau Gummi ; Expert double les dégâts que vous encaissez.\n\nLe choix ne change pas seulement la difficulté : il change ce qu'il faut accomplir pour débloquer les fins secrètes. En Expert, terminer le jeu suffit pour la première ; en Normal, il faut sceller tous les trous de serrure, réunir les 99 dalmatiens et gagner la coupe de l'Hadès. La seconde fin secrète, elle, demande de compléter le Journal de Jiminy — c'est-à-dire, à peu de chose près, le 100 %.\n\nPour une première partie visant la complétion, Normal est le bon compromis : le jeu reste exigeant sur les boss optionnels sans rendre le remplissage du Journal pénible.",
        "Three modes: Beginner, Normal and Proud. Beginner hands you a stock of stat-boosting items straight away and halves the damage your Gummi Ship takes; Proud doubles the damage you take.\n\nThe choice does not only change difficulty: it changes what unlocks the secret endings. On Proud, simply finishing the game unlocks the first one; on Normal you must seal every keyhole, gather all 99 puppies and win the Hades Cup. The second secret ending requires completing Jiminy's Journal — which is, near enough, 100%.\n\nFor a first completion run, Normal is the right compromise: the game stays demanding on the optional bosses without making the Journal a chore.",
      ),
    },
    {
      id: "arme",
      title: L("L'épée, le bouclier ou le bâton", "Sword, shield or staff"),
      text: L(
        "Au tout début, sur les vitraux, on vous demande de choisir une arme et d'en abandonner une autre. Ce choix suit toute la partie : il fixe la répartition des statistiques de Sora et surtout l'ordre dans lequel il apprend ses capacités.\n\nL'épée donne la force, le bâton la magie, le bouclier la défense. Ce qu'on abandonne compte autant que ce qu'on prend : renoncer au bouclier repousse très loin l'apprentissage des capacités défensives, dont la Parade, tandis que renoncer au bâton retarde les capacités de soutien.\n\nUn conseil solide pour une première partie : prendre l'épée et abandonner le bâton. Sora frappe fort tôt, garde la Parade, et la magie reste largement suffisante puisque Donald s'en charge. Les trois questions posées ensuite ne changent que la vitesse de montée en niveau — vite au début, ou plus vite en fin de partie. Au niveau 100, tout le monde arrive au même endroit.",
        "Right at the start, on the stained-glass platforms, you are asked to choose one weapon and give up another. That choice follows the whole run: it sets Sora's stat growth and, above all, the order in which he learns abilities.\n\nThe sword gives strength, the staff magic, the shield defence. What you give up matters as much as what you take: dropping the shield pushes the defensive abilities, Guard included, very late, while dropping the staff delays the support abilities.\n\nA safe pick for a first run: take the sword, give up the staff. Sora hits hard early, keeps Guard, and magic stays plenty since Donald handles it. The three questions asked afterwards only change how fast you level — quickly at the start, or faster late on. At level 100 everyone ends up in the same place.",
      ),
    },
    {
      id: "reflexes",
      title: L("Trois réflexes à prendre tout de suite", "Three habits to pick up right away"),
      text: L(
        "Sauvegardez souvent : les points de sauvegarde soignent l'équipe et servent aussi de raccourcis entre les zones d'un monde.\n\nÉquipez vos capacités. Une capacité apprise n'est pas active tant qu'elle n'est pas équipée dans le menu, et les points de compétence sont comptés — c'est le principal piège du jeu pour qui vient d'un autre action-RPG.\n\nOuvrez tout ce que vous croisez. Les coffres du premier Kingdom Hearts ne se referment pas et la plupart des mondes restent accessibles jusqu'à la fin, mais quelques passages se ferment définitivement : ils sont signalés dans chaque section sous « À ne pas rater ».",
        "Save often: save points heal the party and double as shortcuts between the areas of a world.\n\nEquip your abilities. A learned ability does nothing until it is equipped in the menu, and ability points are limited — this is the game's main trap for anyone coming from another action RPG.\n\nOpen everything you walk past. Chests in the first Kingdom Hearts stay open and most worlds remain reachable until the end, but a few passages close for good: those are flagged in each section under \"Don't miss\".",
      ),
    },
  ],
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
      status: "done",
      level: L("1", "1").fr,
      intro: L(
        "Le jeu s'ouvre sur un rêve : Sora tombe dans le noir et se pose sur un vitrail. Rien n'est perdu ici, mais deux choix engagent toute la partie — l'arme que l'on prend et celle que l'on abandonne.",
        "The game opens on a dream: Sora falls through the dark and lands on a stained-glass platform. Nothing can be lost here, but two choices shape the whole run — the weapon you take and the one you give up.",
      ),
      steps: [
        {
          id: "choix",
          title: L("Le choix des armes", "Choosing your weapon"),
          text: L(
            "Trois socles apparaissent : l'épée, le bouclier, le bâton. Approchez-vous d'une arme, saisissez-la, puis choisissez celle que vous laissez.\n\nLe détail des conséquences est expliqué plus haut, dans « Avant de commencer ». En résumé : l'épée pour frapper fort, le bouclier pour encaisser, le bâton pour la magie ; abandonner le bâton est le renoncement le moins gênant pour une première partie.",
            "Three pedestals appear: sword, shield, staff. Walk up to one, take it, then choose the one you leave behind.\n\nThe consequences are explained above, in \"Before you start\". In short: sword to hit hard, shield to take hits, staff for magic; giving up the staff is the least painful choice for a first run.",
          ),
        },
        {
          id: "vitraux",
          title: L("Les vitraux et les questions", "The platforms and the questions"),
          text: L(
            "Suivent quelques leçons : marcher, frapper les premières Ombres, ouvrir un coffre, lire le panneau qui sert de tutoriel. Trois voix vous posent ensuite des questions sur ce que vous craignez et ce que vous voulez : les réponses ne font qu'avancer ou reculer votre courbe d'expérience, sans jamais bloquer quoi que ce soit.\n\nLa descente se termine par une porte, une plage de rêve, puis une chute vers le dernier vitrail où attend une ombre immense.",
            "A few lessons follow: walking, striking the first Shadows, opening a chest, reading the tutorial signs. Three voices then ask what you fear and what you want: the answers only shift your experience curve forward or back, and never lock anything away.\n\nThe descent ends with a door, a dreamed beach, then a fall to the last platform where a huge shadow waits.",
          ),
        },
      ],
      bosses: [
        {
          id: "darkside-reve",
          name: L("Darkside (rêve)", "Darkside (dream)"),
          entry: "darkside",
          level: "1",
          tactics: L(
            "Le géant ne peut pas vous tuer ici : perdre relance simplement le combat. Frappez les mains quand elles se posent au sol, et surtout la tête quand il s'agenouille — c'est la seule partie qui encaisse vraiment.\n\nQuand il plonge un poing dans le sol, une flaque sombre crache des Ombres : reculez, laissez-les venir, et profitez du bras immobilisé pour taper la tête. Évitez de rester sous lui lorsqu'il se redresse.",
            "The giant cannot kill you here: losing simply restarts the fight. Hit the hands when they land on the ground, and above all the head when it kneels — that is the only part that really takes damage.\n\nWhen it drives a fist into the ground, a dark pool spits out Shadows: back off, let them come, and use the pinned arm to hit the head. Avoid standing under it as it straightens up.",
          ),
        },
      ],
      missable: [
        L(
          "Rien ne se perd dans ce prologue : les coffres du rêve ne comptent pas pour le Journal.",
          "Nothing is lost in this prologue: the dream chests do not count towards the Journal.",
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
        "Le vrai début du jeu, et le seul moment où l'on peut monter tranquillement de niveau contre des adversaires qui ne rendent pas les coups mortels. Les îles ne sont plus jamais jouables après le troisième jour : tout ce qui s'y trouve doit être pris maintenant.",
        "The real start of the game, and the only moment where you can level up quietly against opponents whose hits are never lethal. The islands are never playable again after the third day: everything here has to be taken now.",
      ),
      steps: [
        {
          id: "jour-1",
          title: L("Premier jour : le radeau", "Day one: the raft"),
          text: L(
            "Kairi réclame quatre matériaux. Deux rondins : l'un sur la plage toute proche, l'autre sur le petit îlot où se tient Riku. Le tissu est dans la cabane perchée, au centre de l'île, par la passerelle en bois. La corde est en face, sur la plateforme de guet de Tidus, en haut de l'échelle.\n\nLa cabane sur la plage abrite un point de sauvegarde. Rapportez le tout à Kairi : elle donne une Méga-Potion si vous ne lui avez pas demandé d'indices, une simple Potion sinon.",
            "Kairi asks for four materials. Two logs: one on the nearby beach, the other on the small islet where Riku stands. The cloth is in the tree house at the centre of the island, across the wooden walkway. The rope is opposite, on Tidus's lookout platform, at the top of the ladder.\n\nThe seaside shack holds a save point. Bring everything back to Kairi: she gives a Hi-Potion if you never asked her for hints, a plain Potion otherwise.",
          ),
        },
        {
          id: "duels",
          title: L("Les duels contre les autres enfants", "Duelling the other kids"),
          text: L(
            "Avant de rendre les matériaux, allez vous battre. Selphie, Wakka, Tidus, puis les trois ensemble, puis Riku : ces duels sont répétables, sans aucun risque, et c'est de loin la meilleure source d'expérience du début de partie. Viser le niveau 6 ici rend les premières heures nettement plus confortables.\n\nSelphie, sur le ponton, se contente de sa corde à sauter : parez-la et enchaînez. Wakka lance son ballon de loin ; renvoyez-le d'un coup d'épée, chaque renvoi rapporte des points de technique et finit par l'étourdir. Tidus est vif : ne le poursuivez pas, esquivez de côté et frappez juste après sa fente. Les trois d'un coup sont plus durs que Riku, à cause du ballon de Wakka qui arrive pendant que vous gérez les deux autres — éliminez Tidus en premier.\n\nRiku frappe fort, saute haut et garde souvent sa parade. Attendez qu'il attaque pour riposter, et méfiez-vous de sa charge quand il est au sol.",
            "Before handing the materials in, go and fight. Selphie, Wakka, Tidus, then all three at once, then Riku: these duels are repeatable, completely safe, and by far the best source of early experience. Reaching level 6 here makes the first hours far more comfortable.\n\nSelphie, on the pier, only has her skipping rope: parry it and follow up. Wakka throws his ball from range; knock it back with a swing — each return earns tech points and eventually stuns him. Tidus is quick: do not chase him, dodge sideways and strike right after his lunge. All three at once is harder than Riku, because Wakka's ball arrives while you deal with the other two — take Tidus down first.\n\nRiku hits hard, jumps high and often keeps his guard up. Wait for him to attack before answering, and watch for his charge when he is knocked down.",
          ),
        },
        {
          id: "jour-2",
          title: L("Deuxième jour : la course et les provisions", "Day two: the race and the provisions"),
          text: L(
            "Riku vous propose une course avant même d'arriver chez Kairi : traverser le pont, franchir la tour, toucher l'arbre en étoile. La tyrolienne est plus rapide, mais il faut ensuite sauter de cime en cime plutôt que contourner. Gagner rapporte une Jolie Pierre, revendable, et la course se rejoue autant de fois qu'on veut.\n\nKairi donne ensuite sa liste : deux noix de coco jaunes, obtenues en frappant les palmiers près du radeau (ignorez les brunes) ; trois champignons, un dans la grotte débloquée en poussant le rocher, un dans les buissons au pied de la tour, le dernier dans la Grotte Secrète ; trois poissons, à attraper dans l'eau juste au bord de la plage ; un œuf de mouette, en haut du grand palmier près du pont, atteignable en sautant depuis le petit ; et de l'eau douce, à puiser à la source sous le pont avec la gourde de Kairi.\n\nRapportez le tout : une seconde Méga-Potion vous attend si vous n'avez toujours pas demandé d'indices.",
            "Riku offers a race before you even reach Kairi: cross the bridge, get past the tower, touch the star-shaped tree. The zip line is faster, but you then have to jump from treetop to treetop rather than going around. Winning gives a Pretty Stone, which can be sold, and the race can be replayed as often as you like.\n\nKairi then gives her list: two yellow coconuts, knocked down from the palm trees near the raft (ignore the brown ones); three mushrooms, one in the cave opened by pushing the boulder, one in the bushes at the foot of the tower, the last in the Secret Place; three fish, caught in the water right off the beach; a seagull egg, on top of the tall palm by the bridge, reached by jumping from the smaller one; and drinking water, drawn from the spring under the bridge with Kairi's bottle.\n\nBring it all back: a second Hi-Potion is waiting if you still have not asked for hints.",
          ),
        },
        {
          id: "jour-3",
          title: L("Troisième jour : la nuit et la Keyblade", "Day three: the night and the Keyblade"),
          text: L(
            "La tempête réveille l'île et les Ombres surgissent partout. Votre épée en bois ne leur fait rien : courez jusqu'à l'îlot de Riku, assistez à la scène, et Sora reçoit la Chaîne Royale.\n\nÀ partir de là, les Ombres deviennent une bonne source d'expérience et lâchent des sphères de vie : profitez-en quelques minutes avant d'entrer dans la Grotte Secrète, par la porte apparue devant l'entrée.",
            "The storm wakes the island and Shadows appear everywhere. Your wooden sword does nothing to them: run to Riku's islet, watch the scene, and Sora receives the Kingdom Key.\n\nFrom then on the Shadows are a decent source of experience and drop health orbs: farm them for a few minutes before entering the Secret Place, through the door that has appeared in front of the cave.",
          ),
        },
      ],
      bosses: [
        {
          id: "darkside",
          name: L("Darkside", "Darkside"),
          entry: "darkside",
          level: "6",
          reward: L("Fin du monde et départ pour la Ville de Traverse.", "The end of the world and departure for Traverse Town."),
          tactics: L(
            "Le même géant que dans le rêve, mais cette fois il frappe pour de bon et vous n'avez ni soin allié ni magie. Gardez des Potions et ne vous acharnez pas : le combat se gagne en frappant peu, souvent, et en restant mobile.\n\nLa tête reste la cible. Attendez qu'il s'agenouille ou qu'il enfonce un bras dans le sol : pendant ces deux moments il est immobile et sa tête est à portée. Le reste du temps, restez à distance de ses mains.",
            "The same giant as in the dream, except this time it hits for real and you have no ally healing and no magic. Keep Potions and do not get greedy: the fight is won with short, frequent hits and constant movement.\n\nThe head stays the target. Wait for it to kneel or to drive an arm into the ground: during both it is motionless and its head is in reach. The rest of the time, stay away from its hands.",
          ),
          attacks: [
            {
              name: L("Flaque d'ombre", "Dark pool"),
              note: L(
                "Un poing dans le sol fait surgir des Ombres. Éloignez-vous du poing, tuez ce qui vient, frappez la tête.",
                "A fist into the ground spawns Shadows. Step away from the fist, kill what comes, hit the head.",
              ),
            },
            {
              name: L("Sphères noires", "Homing orbs"),
              note: L(
                "À genoux, il tire des projectiles qui vous suivent. Courez en cercle : ils s'écrasent au sol.",
                "On its knees, it fires projectiles that track you. Run in a circle: they crash into the ground.",
              ),
            },
            {
              name: L("Pluie d'énergie", "Energy rain"),
              note: L(
                "Il libère une grosse sphère dans le ciel et des éclats retombent sur votre position. Ne restez jamais immobile ; les éclats peuvent aussi être renvoyés au sabre.",
                "It releases a large orb into the sky and shards rain down on your position. Never stand still; the shards can also be batted away.",
              ),
            },
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
            "Répétable : chaque victoire donne une Jolie Pierre à revendre. Le nom du radeau, lui, n'a aucune conséquence.",
            "Repeatable: each win gives a Pretty Stone to sell. The raft's name has no consequence whatsoever.",
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
    soon("synthese-et-ultima", L("Synthèse, Orichalques et Ultima Weapon", "Synthesis, Orichalcum and the Ultima Weapon")),
  ],
};
