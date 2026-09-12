import type { LocalizedText } from "@/data/games";
import type { WalkBeast, WalkPlace, WalkQuest } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/** Crédit commun des visuels repris du Kingdom Hearts Wiki (voir docs/IMAGES.md). */
const credit = (file: string) => `© Square Enix / Disney — via Kingdom Hearts Wiki (${file})`;

/** Une ligne d'emplacement : monde ou zone, ce qu'on y trouve, où, et ce qu'il faut avoir. */
/**
 * Une fiche du bestiaire. Les caractéristiques sont notées « début / fin » : la seconde
 * valeur est celle que l'ennemi atteint une fois les mondes montés en niveau, en fin de
 * partie. Une valeur unique signifie que l'ennemi ne monte pas.
 */
const beast = (
  entry: string,
  hp: string,
  atk: string,
  def: string,
  exp: string,
  worlds: [string, string],
  note?: [string, string],
): WalkBeast => ({ entry, hp, atk, def, exp, worlds: L(worlds[0], worlds[1]), note: note ? L(note[0], note[1]) : undefined });

const at = (world: string, what: [string, string], where: [string, string], requires?: [string, string]): WalkPlace => ({
  world: L(world, world),
  what: L(what[0], what[1]),
  where: L(where[0], where[1]),
  requires: requires ? L(requires[0], requires[1]) : undefined,
});

/**
 * Les guides et annexes de Kingdom Hearts II : tout ce qui ne fait pas avancer l'histoire
 * — les deux mondes facultatifs, les collectes, les défis de Final Mix — plus les pages de
 * référence du jeu. Elles sont annoncées avant d'être rédigées : le sommaire dit ce que la
 * soluce couvrira, et ce qui reste à écrire.
 */
export const quests: WalkQuest[] = [
  {
    id: "atlantica",
    title: L("Atlantica", "Atlantica"),
    tagline: L(
      "Le monde musical : cinq numéros chantés, entièrement facultatifs et indispensables au Carnet.",
      "The musical world: five sung numbers, entirely optional and required for the Journal.",
    ),
    entry: "atlantica",
    status: "done",
    intro: L(
      "Atlantica n'est plus un monde qu'on explore : dans Kingdom Hearts II, c'est une comédie musicale en cinq actes. Aucun ennemi, aucun coffre à ouvrir en nageant, aucun boss au sens habituel — rien que des chansons, et un rythme à suivre. Le monde s'ouvre après la première Forteresse Oubliée, mais ses actes ne se débloquent pas d'un coup : chacun attend une condition révélée à la fin du précédent, et ces conditions sont presque toutes des progrès faits ailleurs, dans l'histoire.\n\nLe principe est le même à chaque numéro. Pendant la chanson, un cercle apparaît à l'écran et se referme plus ou moins vite ; il faut appuyer sur le bouton demandé au moment où il achève sa course. Bleu, c'est **Raté** ; orange, **Pas mal** ; jaune, **Excellent**. Rater ne fait pas perdre l'acte — la chanson va au bout dans tous les cas — mais seuls les **Excellent** remplissent la partition et déclenchent les bonus.\n\nSébastien propose un entraînement avant le premier numéro : quelques minutes bien employées, parce que le rythme d'Atlantica ne se devine pas, il s'apprend. Profitez du passage pour ramasser la pièce de puzzle posée près du rocher, à l'est du jardin sous-marin.\n\nRien ici n'est obligatoire pour finir le jeu. Tout y est obligatoire pour le Carnet de Jiminy, et donc pour la fin secrète.",
      "Atlantica is no longer a world you explore: in Kingdom Hearts II it is a musical in five acts. No enemies, no chests to open while swimming, no boss in the usual sense — only songs, and a rhythm to follow. The world opens after the first Hollow Bastion visit, but its acts do not unlock at once: each waits on a condition revealed at the end of the previous one, and those conditions are nearly all progress made elsewhere, in the story.\n\nThe principle is the same in every number. During the song a circle appears on screen and closes at varying speed; you press the button shown as it completes its run. Blue is **Bad**, orange **Good**, yellow **Excellent**. Missing does not fail the act — the song always runs to the end — but only **Excellent** fills the score sheet and triggers the bonuses.\n\nSebastian offers a practice session before the first number: a few minutes well spent, because Atlantica's timing is not guessed, it is learned. While you are there, pick up the puzzle piece by the rock east of the Undersea Courtyard.\n\nNothing here is required to finish the game. Everything here is required for Jiminy's Journal, and therefore for the secret ending.",
    ),
    tables: [
      {
        id: "conditions",
        title: L("Les cinq actes et leur condition", "The five acts and their condition"),
        intro: L(
          "Chaque acte attend un progrès précis. Aucun ne se force : tant que la condition n'est pas remplie, Ariel n'a rien à proposer.",
          "Each act waits on a specific piece of progress. None can be forced: until the condition is met, Ariel has nothing to offer.",
        ),
        columns: [L("Acte", "Act"), L("Ce qu'il faut avoir", "What you need"), L("Boutons et objectif", "Buttons and goal")],
        rows: [
          at("Viens nager !", ["Rien — l'acte d'ouverture", "Nothing — the opening act"], ["Croix seulement. Chaque « Excellent » ajoute une note à la partition, cinq au maximum ; une seule suffit à valider l'acte.", "Cross only. Each Excellent adds a note to the score sheet, five at most; a single one is enough to clear the act."]),
          at("Partir là-bas !", ["La magie Aimant", "The Magnet spell"], ["Triangle et Croix. Enchaîner les « Excellent » déclenche les bonus ; visez-en au moins cinq.", "Triangle and Cross. Chaining Excellents triggers the bonuses; aim for at least five."]),
          at("Sous l'océan !", ["Cinq jauges de Flux — c'est-à-dire Space Paranoids terminé", "Five Drive gauges — that is, Space Paranoids finished"], ["Carré seulement. N'appuyez pas au moment où Sébastien apparaît. Ariel doit atteindre le haut de la jauge de droite.", "Square only. Do not press as Sebastian appears. Ariel must reach the top of the right-hand gauge."]),
          at("La revanche d'Ursula !", ["La magie Aimant +", "The Magnera spell"], ["Croix et Carré, ce dernier en pression rapide et continue. Il faut vider complètement la jauge d'Ursula.", "Cross and Square, the latter tapped fast and continuously. Ursula's gauge must be emptied completely."]),
          at("À l'aube d'un heureux jour !", ["La magie Foudre X", "The Thundaga spell"], ["Croix, Carré (parfois en continu) et Triangle. Ne touchez à rien pendant la transition vers Sébastien.", "Cross, Square (sometimes held) and Triangle. Touch nothing during the transition to Sebastian."]),
        ],
      },
    ],
    steps: [
      {
        id: "rythme",
        title: L("Comprendre la jauge avant de chanter", "Reading the gauge before you sing"),
        text: L(
          "Le cercle qui se referme n'est pas un métronome : sa vitesse change d'une note à l'autre, et c'est précisément là que le jeu se joue. Le réflexe qui marche est de regarder la couleur plutôt que la taille — le passage au jaune est bref, net, et toujours au même endroit de la course.\n\nDeux habitudes coûtent cher. La première est d'anticiper : appuyer « à peu près » donne un orange, jamais un jaune. La seconde est de continuer à appuyer pendant les transitions, quand la caméra change de personnage — plusieurs actes punissent une pression à ce moment-là par un raté sec.\n\nLes actes se rejouent autant qu'on veut, depuis la sphère verte posée près d'Ariel. Il n'y a donc aucune raison de s'acharner du premier coup : un acte réussi une fois est acquis pour le Carnet, et les enchaînements d'« Excellent » se travaillent tranquillement ensuite.",
          "The closing circle is not a metronome: its speed changes from note to note, and that is exactly where the game lives. What works is to watch the colour rather than the size — the yellow window is brief, sharp, and always at the same point of the run.\n\nTwo habits are expensive. The first is anticipating: pressing roughly on time gives an orange, never a yellow. The second is carrying on pressing through the transitions, when the camera changes character — several acts punish a press at that moment with a flat miss.\n\nActs can be replayed as often as you like, from the green sphere next to Ariel. So there is no reason to grind the first attempt: an act cleared once is banked for the Journal, and Excellent chains can be worked on calmly afterwards.",
        ),
      },
      {
        id: "actes",
        title: L("Les cinq numéros, un par un", "The five numbers, one by one"),
        image: { src: "/images/walkthrough/kh2-atlantica.webp", credit: credit("Atlantica_from_KH2_gameplay.png"), width: 480, height: 270 },
        text: L(
          "**Viens nager !** est l'acte d'apprentissage : un seul bouton, un tempo lent, et une partition de cinq notes qu'on remplit en cinq « Excellent ». Une note suffit pour passer à la suite, mais autant faire les cinq tout de suite, c'est le numéro le plus simple du monde. Deux pièces de puzzle attendent ensuite au palais de Triton.\n\n**Partir là-bas !** ajoute Triangle et accélère. C'est ici que les bonus d'enchaînement deviennent visibles : cinq « Excellent » consécutifs et le numéro se met à donner nettement plus. L'acte demande la magie Aimant, obtenue à la Terre des Dragons.\n\n**Sous l'océan !** est le morceau-titre, et le plus long. Carré seulement, mais la jauge d'Ariel à droite doit monter jusqu'en haut : c'est un acte où il faut enchaîner sans rater, pas seulement toucher juste de temps en temps. Il attend cinq jauges de Flux, donc Space Paranoids bouclé.\n\n**La revanche d'Ursula !** est le seul acte qui ressemble à un combat. Croix pour les notes, Carré martelé pour faire reculer Ursula, et une jauge à vider entièrement. Il demande Aimant + — et il rapporte la Keyblade **Mystérieux Abîme**, la meilleure Keyblade magique de cette partie du jeu.\n\n**À l'aube d'un heureux jour !** clôt le monde, avec les trois boutons et une chanson entièrement chorégraphiée. Il demande Foudre X, c'est-à-dire la toute fin du jeu ou presque. Il rapporte l'**Élément de Glace** et, surtout, un **Orichalque +** — l'un des sept du jeu, et donc un treizième de la Keyblade Ultima.",
          "**Swim This Way** is the teaching act: one button, a slow tempo, and a five-note score sheet filled by five Excellents. One note is enough to move on, but you may as well do all five — it is the easiest number in the world. Two puzzle pieces then wait at Triton's Palace.\n\n**Part of Your World** adds Triangle and picks up speed. This is where the chain bonuses become visible: five consecutive Excellents and the number starts paying markedly more. The act needs the Magnet spell, earned in the Land of Dragons.\n\n**Under the Sea** is the title number, and the longest. Square only, but Ariel's gauge on the right has to reach the top: this is an act about chaining without missing, not merely hitting well now and then. It waits on five Drive gauges, so Space Paranoids cleared.\n\n**Ursula's Revenge** is the only act that plays like a fight. Cross for the notes, Square hammered to push Ursula back, and a gauge to empty completely. It needs Magnera — and it pays out the **Mysterious Abyss** Keyblade, the best magic Keyblade of this stretch of the game.\n\n**A New Day is Dawning** closes the world, with all three buttons and a fully choreographed song. It needs Thundaga, which means the very end of the game or close to it. It pays out the **Blizzard Element** and, above all, an **Orichalcum+** — one of the game's seven, and therefore one thirteenth of the Ultima Weapon.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Acte", "Act"),
      intro: L(
        "Ce que chaque numéro rapporte. Les actes se rejouent librement une fois réussis : seule la première réussite compte pour le Carnet.",
        "What each number pays out. Acts can be replayed freely once cleared: only the first clear counts for the Journal.",
      ),
      rows: [
        { tier: L("Viens nager !", "Swim This Way"), reward: L("Ouverture du monde et deux pièces de puzzle au palais de Triton", "Opens the world, and two puzzle pieces at Triton's Palace") },
        { tier: L("Partir là-bas !", "Part of Your World"), reward: L("Bonus d'enchaînement — visez cinq « Excellent » d'affilée", "Chain bonuses — aim for five Excellents in a row") },
        { tier: L("Sous l'océan !", "Under the Sea"), reward: L("Progression du Carnet ; demande cinq jauges de Flux", "Journal progress; needs five Drive gauges") },
        { tier: L("La revanche d'Ursula !", "Ursula's Revenge"), reward: L("Keyblade **Mystérieux Abîme**", "The **Mysterious Abyss** Keyblade") },
        { tier: L("À l'aube d'un heureux jour !", "A New Day is Dawning"), reward: L("Élément de Glace et **Orichalque +**", "Blizzard Element and an **Orichalcum+**") },
      ],
      note: L(
        "Les cinq actes réussis remplissent la section Atlantica du Carnet de Jiminy, l'une des conditions de la fin secrète. Le monde compte aussi trois pièces de puzzle, à ramasser en nageant : une au jardin sous-marin, deux au palais de Triton.",
        "All five acts cleared fill Atlantica's section of Jiminy's Journal, one of the secret-ending conditions. The world also holds three puzzle pieces, picked up while swimming: one in the Undersea Courtyard, two at Triton's Palace.",
      ),
    },
  },
  {
    id: "foret-des-reves-bleus",
    title: L("Forêt des Rêves Bleus", "Hundred Acre Wood"),
    tagline: L(
      "Cinq pages du livre de Winnie, cinq mini-jeux, et la Keyblade Doux souvenir.",
      "Five pages of Pooh's book, five mini-games, and the Sweet Memories Keyblade.",
    ),
    entry: "hundred-acre-wood",
    status: "done",
    intro: L(
      "Le livre de Winnie l'Ourson revient exactement comme dans le premier jeu : cinq pages déchirées, dispersées dans cinq mondes, et une zone qui s'ouvre à chaque page rendue. L'ordre dans lequel on les ramasse n'a aucune importance — c'est le livre qui décide de l'ordre des zones.\n\nCe monde n'a aucun ennemi. Pas un seul Sans-cœur, pas un combat : rien que des coffres, des pièces de puzzle et des mini-jeux, tous rejouables à volonté jusqu'à ce que l'objectif tombe. C'est aussi le monde le plus généreux du jeu en **Bonus PC** — six coffres en contiennent un — ce qui en fait une escale rentable dès qu'on peut y aller, et pas seulement en fin de partie.\n\nOn y entre par la bibliothèque du Château Disney, une fois la première page rendue. La première visite se fait au retour de la deuxième Forteresse Oubliée, autour du niveau de combat 15.\n\nDeux choses comptent vraiment ici : la Keyblade **Doux souvenir**, qui double les objets lâchés par les ennemis, et l'**Orichalque +** du lancer de pot — l'un des sept du jeu.",
      "Pooh's book comes back exactly as it was in the first game: five torn pages, scattered across five worlds, and an area that opens with each page returned. The order you collect them in does not matter — the book decides the order of its areas.\n\nThis world has no enemies at all. Not one Heartless, not one fight: only chests, puzzle pieces and mini-games, all replayable until the target falls. It is also the game's most generous world for **AP Boosts** — six chests hold one — which makes it a profitable stop as soon as you can go, not merely an endgame errand.\n\nYou enter through Disney Castle's Library, once the first page is returned. The first visit happens on the way back from the second Hollow Bastion, around battle level 15.\n\nTwo things really matter here: the **Sweet Memories** Keyblade, which doubles enemy drops, and the **Orichalcum+** from the pot toss — one of the game's seven.",
    ),
    tables: [
      {
        id: "pages",
        title: L("Les cinq pages déchirées", "The five Torn Pages"),
        intro: L(
          "Elles se ramassent au fil de l'histoire, sans détour : chacune est dans un coffre ou au sol, sur un chemin qu'on emprunte de toute façon.",
          "They are picked up as the story goes, with no detour: each one sits in a chest or on the ground, on a path you walk anyway.",
        ),
        rows: [
          at("Château Disney", ["Page déchirée", "Torn Page"], ["À la bibliothèque — c'est celle qui ouvre le monde.", "In the Library — this is the one that opens the world."]),
          at("Terre des Lions", ["Page déchirée", "Torn Page"], ["À l'oasis.", "At the Oasis."]),
          at("Forteresse Oubliée", ["Page déchirée", "Torn Page"], ["Dans le couloir de cristal.", "In the Crystal Fissure."]),
          at("Terre des Dragons", ["Page déchirée", "Torn Page"], ["Dans la salle du trône.", "In the Throne Room."]),
          at("Agrabah", ["Page déchirée", "Torn Page"], ["Dans la salle dévastée des ruines ensevelies.", "In the Ruined Chamber of the Cave of Wonders."]),
        ],
      },
      {
        id: "coffres",
        title: L("Les coffres, zone par zone", "The chests, area by area"),
        intro: L(
          "Vingt coffres en tout, dont six **Bonus PC**. Ramassez-les avant de parler au personnage de la zone : la scène qui suit lance le mini-jeu et fait souvent changer le décor.",
          "Twenty chests in all, six of them **AP Boosts**. Pick them up before talking to the area's character: the cutscene that follows starts the mini-game and often rearranges the scenery.",
        ),
        columns: [L("Zone", "Area"), L("Contenu", "Contents"), L("Ce qu'il faut savoir", "What to know")],
        rows: [
          at("Maison de Winnie", ["Carte du monde, Bonus PC, Pierre de mithril", "World map, AP Boost, Mythril Stone"], ["La zone d'arrivée, sans mini-jeu : ouvrez les trois coffres avant de parler à Winnie.", "The arrival area, with no mini-game: open all three chests before talking to Pooh."]),
          at("Maison de Porcinet", ["Bonus Défense, Bonus PC, Gemme de mithril", "Defense Boost, AP Boost, Mythril Gem"], ["Ramassez aussi la pièce de puzzle avant de décrocher Porcinet de sa branche avec Triangle.", "Also grab the puzzle piece before pulling Piglet off his branch with Triangle."]),
          at("Maison de Coco Lapin", ["Anneau d'attraction, Cristal de mithril, Bonus PC", "Draw Ring, Mythril Crystal, AP Boost"], ["L'Anneau d'attraction attire les sphères de loin : équipez-le tout de suite, il sert partout.", "The Draw Ring pulls orbs from a distance: equip it at once, it helps everywhere."]),
          at("Maison de Maman Gourou", ["Bonus Magie, Bonus PC, Orichalque", "Magic Boost, AP Boost, Orichalcum"], ["Un Orichalque simple, à ne pas confondre avec l'Orichalque + du lancer de pot.", "A plain Orichalcum, not to be confused with the pot toss's Orichalcum+."]),
          at("Grotte hantée", ["Gemme de mithril, Bonus PC, Orichalque, Formule de défense, Cristal de mithril", "Mythril Gem, AP Boost, Orichalcum, Defense Recipe, Mythril Crystal"], ["Cinq coffres, la zone la plus riche du livre. La Formule de défense ouvre la synthèse du Bonus Défense.", "Five chests, the richest area in the book. The Defense Recipe unlocks Defense Boost synthesis."]),
          at("Butte aux étoiles", ["Anneau cosmique, Formule rouge", "Cosmic Ring, Red Recipe"], ["La Formule rouge ouvre la synthèse du Ruban rouge, puis du Ruban bleu.", "The Red Recipe unlocks Red Ribbon synthesis, then Blue Ribbon."]),
        ],
      },
    ],
    steps: [
      {
        id: "sauvetage",
        title: L("Première page : la maison de Porcinet — Sauvetage aérien", "First page: Piglet's house — Piglet's Balloon Bounce"),
        image: { src: "/images/walkthrough/kh2-foret-des-reves-bleus.webp", credit: credit("100_Acre_Wood_from_KH2_gameplay.png"), width: 480, height: 270 },
        text: L(
          "Porcinet est accroché à une branche, un ballon à la main. Décrochez-le avec Triangle : il repart aussitôt dans les airs, et le mini-jeu commence.\n\nIl s'agit de monter en cassant les obstacles avec Croix, jusqu'à rejoindre Porcinet et appuyer sur Triangle. Chaque impact sépare Winnie de vous ; il faut le rattraper, toujours avec Triangle, sous peine de perdre les points qu'il porte.\n\nLa première tentative ne compte pas : les points ne sont pas comptabilisés, c'est un tour d'essai. Ensuite, l'objectif est de **18 000 points**. Le chemin le plus court consiste à ne jamais cesser de monter — les points viennent de la hauteur et des enchaînements, pas du nettoyage méthodique de chaque étage.",
          "Piglet is hanging from a branch with a balloon. Pull him down with Triangle: he floats straight back up, and the mini-game begins.\n\nThe idea is to climb by breaking obstacles with Cross, until you reach Piglet and press Triangle. Every hit separates Pooh from you; you have to catch him again, also with Triangle, or lose the points he is carrying.\n\nThe first attempt does not count: points are not tallied, it is a practice run. After that the target is **18,000 points**. The shortest path is to never stop climbing — points come from height and chains, not from methodically clearing each floor.",
        ),
      },
      {
        id: "miel",
        title: L("Deuxième page : la maison de Coco Lapin — Chasse au miel", "Second page: Rabbit's house — Hunny Slider"),
        text: L(
          "Winnie dévale la pente sur un pot de miel, et Sora le suit. Le mini-jeu se joue à la trajectoire : il faut passer dans les cercles de miel et éviter les obstacles, en corrigeant à gauche et à droite.\n\nL'objectif est de **8 000 points**. Les cercles enchaînés valent bien plus que les cercles isolés, donc la bonne lecture est de choisir une ligne et de s'y tenir, plutôt que de courir après chaque bonus visible. Une chute ne termine pas la course, mais casse l'enchaînement — et c'est l'enchaînement qui rapporte.\n\nLa zone contient aussi l'Anneau d'attraction, dans l'un des trois coffres : équipez-le avant de rejouer, il ramasse les sphères à votre place.",
          "Pooh slides down the slope on a honey pot, and Sora follows. The mini-game is about your line: pass through the honey rings and dodge the obstacles, steering left and right.\n\nThe target is **8,000 points**. Chained rings are worth far more than isolated ones, so the right read is to pick a line and hold it rather than chasing every visible bonus. A crash does not end the run, but it breaks the chain — and the chain is what pays.\n\nThe area also holds the Draw Ring, in one of its three chests: equip it before replaying, it collects orbs for you.",
        ),
      },
      {
        id: "ballons",
        title: L("Troisième page : la maison de Maman Gourou — Saute-ballons", "Third page: Kanga's house — Balloon Bounce"),
        text: L(
          "Le plus court des cinq mini-jeux, et de loin le plus facile : il faut faire rebondir Petit Gourou de ballon en ballon, sans le laisser tomber.\n\nL'objectif est de **2 000 points** seulement. Une ou deux tentatives suffisent généralement. La seule difficulté est la caméra, qui suit le ballon plutôt que Sora : mieux vaut se placer sous la trajectoire et attendre que regarder l'écran de haut.\n\nLa zone rapporte un Bonus Magie, un Bonus PC et un Orichalque — trois coffres à ne pas oublier avant de parler à Maman Gourou.",
          "The shortest of the five mini-games, and by far the easiest: keep Roo bouncing from balloon to balloon without letting him fall.\n\nThe target is only **2,000 points**. One or two attempts usually do it. The only difficulty is the camera, which tracks the balloon rather than Sora: better to stand under the path and wait than to watch from above.\n\nThe area pays out a Magic Boost, an AP Boost and an Orichalcum — three chests not to forget before talking to Kanga.",
        ),
      },
      {
        id: "grotte",
        title: L("Quatrième page : la grotte hantée — L'exploration, et Doux souvenir", "Fourth page: the Spooky Cave — The Expotition, and Sweet Memories"),
        text: L(
          "La zone la plus riche du livre, et la seule qui demande un peu de méthode. Cinq coffres, dont la Formule de défense, avant même de commencer.\n\nLe mini-jeu consiste à traverser la grotte en menant Winnie jusqu'à la sortie, sans le perdre en route : il s'arrête devant chaque pot de miel, et la caméra ne montre jamais tout le couloir. L'objectif est de **terminer en moins d'une minute trente**, ce qui laisse peu de place aux détours — apprenez le chemin lors d'un premier passage tranquille, puis refaites-le en ligne droite.\n\nLa grotte rapporte la Keyblade **Doux souvenir**. Elle n'a presque aucune force, mais elle double les objets lâchés par les ennemis : c'est l'arme à équiper pendant toute la récolte des matériaux de synthèse, quitte à la retirer pour les combats.",
          "The richest area in the book, and the only one that needs a little method. Five chests, including the Defense Recipe, before you even start.\n\nThe mini-game is about crossing the cave leading Pooh to the exit without losing him: he stops at every honey pot, and the camera never shows the whole corridor. The target is to **finish in under a minute and a half**, which leaves little room for detours — learn the route on a calm first run, then take it in a straight line.\n\nThe cave pays out the **Sweet Memories** Keyblade. It has almost no strength, but it doubles enemy drops: this is the weapon to equip for the whole synthesis-material hunt, even if you swap it out for fights.",
        ),
      },
      {
        id: "pot",
        title: L("Cinquième page : la butte aux étoiles — Le lancer de pot", "Fifth page: Starry Hill — The Hunny Pot"),
        text: L(
          "Dernière zone, et dernier mini-jeu. Sora lance Winnie vers les pots de miel accrochés aux branches ; il faut viser, doser la puissance, et enchaîner.\n\nL'objectif est de **8 000 points**. Comme pour la chasse au miel, l'enchaînement compte davantage que le nombre de pots touchés : mieux vaut trois pots d'affilée qu'une série de tirs isolés. Prenez le temps de laisser le compteur monter entre deux lancers ratés.\n\nLa réussite rapporte l'**Élément de Soin** — la magie Soin — et un **Orichalque +**, l'un des sept du jeu. La zone contient aussi l'Anneau cosmique et la Formule rouge.\n\nUne fois les cinq mini-jeux au niveau demandé, la section du Carnet de Jiminy se remplit, et le monde reste accessible : tout se rejoue, indéfiniment.",
          "Last area, last mini-game. Sora throws Pooh at the honey pots hanging from the branches; you aim, judge the power, and chain.\n\nThe target is **8,000 points**. As with the Hunny Slider, chaining matters more than the raw number of pots hit: three in a row beats a run of isolated shots. Take the time to let the counter build between two missed throws.\n\nClearing it pays out the **Cure Element** — the Cure spell — and an **Orichalcum+**, one of the game's seven. The area also holds the Cosmic Ring and the Red Recipe.\n\nOnce all five mini-games meet their targets, Jiminy's Journal section fills in, and the world stays open: everything replays, indefinitely.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Mini-jeu", "Mini-game"),
      intro: L(
        "Les cinq objectifs, et ce que chaque zone rapporte. Les mini-jeux se rejouent autant qu'on veut : seul le meilleur score est retenu.",
        "The five targets, and what each area pays out. Mini-games replay as often as you like: only your best score is kept.",
      ),
      rows: [
        { tier: L("Sauvetage aérien — maison de Porcinet", "Piglet's Balloon Bounce — Piglet's house"), reward: L("Plus de 18 000 points. Coffres : Bonus Défense, Bonus PC, Gemme de mithril", "Over 18,000 points. Chests: Defense Boost, AP Boost, Mythril Gem") },
        { tier: L("Chasse au miel — maison de Coco Lapin", "Hunny Slider — Rabbit's house"), reward: L("Plus de 8 000 points. Coffres : Anneau d'attraction, Cristal de mithril, Bonus PC", "Over 8,000 points. Chests: Draw Ring, Mythril Crystal, AP Boost") },
        { tier: L("Saute-ballons — maison de Maman Gourou", "Balloon Bounce — Kanga's house"), reward: L("Plus de 2 000 points. Coffres : Bonus Magie, Bonus PC, Orichalque", "Over 2,000 points. Chests: Magic Boost, AP Boost, Orichalcum") },
        { tier: L("L'exploration — grotte hantée", "The Expotition — Spooky Cave"), reward: L("Moins d'une minute trente. Keyblade **Doux souvenir** ; coffres : Formule de défense, Orichalque, Bonus PC, Gemme et Cristal de mithril", "Under a minute and a half. The **Sweet Memories** Keyblade; chests: Defense Recipe, Orichalcum, AP Boost, Mythril Gem and Crystal") },
        { tier: L("Le lancer de pot — butte aux étoiles", "The Hunny Pot — Starry Hill"), reward: L("Plus de 8 000 points. **Élément de Soin** et **Orichalque +** ; coffres : Anneau cosmique, Formule rouge", "Over 8,000 points. **Cure Element** and an **Orichalcum+**; chests: Cosmic Ring, Red Recipe") },
      ],
      note: L(
        "Le monde contient aussi six pièces de puzzle, une par zone environ. Les cinq objectifs atteints remplissent la section du Carnet de Jiminy, l'une des conditions de la fin secrète.",
        "The world also holds six puzzle pieces, roughly one per area. All five targets met fill the Journal section, one of the secret-ending conditions.",
      ),
    },
  },
  {
    id: "coupes-colisee",
    title: L("Les coupes du Colisée", "The Coliseum cups"),
    tagline: L(
      "Huit tournois, dont la Coupe Hadès Paradoxe et ses cinquante manches.",
      "Eight tournaments, including the Hades Paradox Cup and its fifty rounds.",
    ),
    entry: "olympus",
    status: "done",
    intro: L(
      "Le Colisée des Enfers tient le rôle que tenait le Colisée de l'Olympe dans le premier jeu : une arène où l'on revient entre deux mondes, et une échelle qui monte bien plus haut que l'histoire. Huit tournois en tout — quatre coupes ordinaires, puis leurs quatre versions **Paradoxe**, exclusives à Final Mix.\n\nToutes se lancent depuis l'antre d'Hadès, à l'entrée des Enfers. Chaque coupe se joue en dix manches suivies d'un combat final, avec un objectif de points à dépasser : c'est ce score, et non la simple victoire, qui valide le tournoi pour le Carnet de Jiminy. Les règles changent d'une coupe à l'autre — équipe complète ou Sora seul, formes autorisées ou non, invocations permises ou interdites, parfois un temps limité ou un plafond de dégâts.\n\nLes quatre coupes Paradoxe sont une autre affaire. Elles ne rapportent rien, sauf la dernière : elles existent pour être gagnées. Et la **Coupe Hadès Paradoxe**, cinquante manches d'affilée au niveau 99, est le contenu le plus long du jeu — un marathon dont on ne sort qu'avec le Trophée de la Coupe Hadès, un objet sans autre usage que d'exister dans l'inventaire.\n\nLe score se garde entre les manches : mourir n'efface pas le tournoi, il l'annule. Il n'y a pas de sauvegarde intermédiaire.",
      "The Underdrome plays the part Olympus Coliseum played in the first game: an arena you come back to between worlds, and a ladder that climbs far higher than the story. Eight tournaments in all — four ordinary cups, then their four **Paradox** versions, exclusive to Final Mix.\n\nAll of them start from Hades' Chamber, at the Underworld Entrance. Each cup runs ten rounds followed by a final fight, with a points target to beat: it is that score, not the win alone, that clears the tournament for Jiminy's Journal. The rules change from cup to cup — full party or Sora alone, forms allowed or not, summons permitted or barred, sometimes a time limit or a damage cap.\n\nThe four Paradox Cups are another matter. They pay out nothing, except the last one: they exist to be won. And the **Hades Paradox Cup**, fifty consecutive rounds at level 99, is the longest stretch of content in the game — a marathon you leave with nothing but the Hades Cup Trophy, an item whose only use is to exist in your inventory.\n\nScore carries between rounds: dying does not erase the tournament, it cancels it. There is no mid-run save.",
    ),
    tables: [
      {
        id: "coupes",
        title: L("Les quatre coupes", "The four cups"),
        intro: L(
          "Dix manches et un combat final à chaque fois. Le niveau indiqué est celui où le tournoi se joue sans souffrir, pas le minimum absolu.",
          "Ten rounds and a final fight each time. The level given is where the tournament plays comfortably, not the absolute minimum.",
        ),
        columns: [L("Coupe", "Cup"), L("Conditions et règles", "Requirements and rules"), L("Combat final et récompenses", "Final fight and rewards")],
        rows: [
          at("Coupe Peine et Panique", ["S'ouvre après le second combat contre Pat Hibulaire, à la Rivière intemporelle. Niveau conseillé 25, objectif 2 000 points. Équipe complète, mais aucune jauge de Flux : ni formes, ni invocations.", "Opens after the second Pete fight in the Timeless River. Level 25, target 2,000 points. Full party, but no Drive gauge: no forms, no summons."], ["Youfie (255 PV) et Léon (357 PV). Récompenses : le Ceinturon et une Gemme de sérénité.", "Yuffie (255 HP) and Leon (357 HP). Rewards: the Rising Dragon and a Serenity Gem."]),
          at("Coupe Cerbère", ["S'ouvre une fois Agrabah, la Ville d'Halloween et la Terre des Lions visités. Niveau conseillé 30, objectif 1 000 points. Sora seul, formes autorisées, et trois minutes au total — quinze secondes rendues à chaque manche gagnée.", "Opens once Agrabah, Halloween Town and the Pride Lands have been visited. Level 30, target 1,000 points. Sora alone, forms allowed, and three minutes overall — fifteen seconds returned per round won."], ["Cerbère (960 PV). Récompenses : le Dragon Volant, un bâton pour Donald, et un Cristal de sérénité.", "Cerberus (960 HP). Rewards: the Rising Dragon staff for Donald, and a Serenity Crystal."]),
          at("Coupe Titan", ["S'ouvre après la victoire sur Hadès, au second passage au Colisée. Niveau conseillé 40, objectif 5 000 points. Sora seul, mais toutes les invocations sont disponibles.", "Opens after beating Hades on the second Coliseum visit. Level 40, target 5,000 points. Sora alone, but every summon is available."], ["Hercule (1 290 PV). Récompenses : le Bouclier Genji et l'Anneau d'onyx.", "Hercules (1,290 HP). Rewards: the Genji Shield and the Onyx Ring."]),
          at("Coupe de la Destinée", ["Demande les trois premières coupes et la victoire sur Xemnas, à Illusiopolis. Niveau conseillé 53, objectif 3 000 points. Équipe complète, mais les règles changent à chaque manche : soixante ou trente secondes sur certaines, cinquante points de dégâts maximum sur d'autres.", "Requires the first three cups and beating Xemnas at The World That Never Was. Level 53, target 3,000 points. Full party, but the rules change every round: sixty or thirty seconds on some, a fifty-point damage cap on others."], ["Hadès (1 575 PV) accompagné de huit Marteaux-pilons. Récompenses : un **Orichalque +** et la Keyblade **Fatalis**.", "Hades (1,575 HP) with eight Hammer Frames. Rewards: an **Orichalcum+** and the **Fatal Crest** Keyblade."]),
        ],
      },
      {
        id: "paradoxe",
        title: L("Les quatre coupes Paradoxe", "The four Paradox Cups"),
        intro: L(
          "Exclusives à Final Mix. Les mêmes adversaires, beaucoup plus résistants, et des conditions d'accès qui tiennent lieu de compteur de progression : elles mesurent moins votre niveau que le temps passé à monter formes et invocations.",
          "Exclusive to Final Mix. The same opponents, far tougher, and access conditions that double as a progress counter: they measure less your level than the hours spent levelling forms and summons.",
        ),
        columns: [L("Coupe", "Cup"), L("Conditions et règles", "Requirements and rules"), L("Combat final et récompenses", "Final fight and rewards")],
        rows: [
          at("Coupe Peine et Panique Paradoxe", ["Demande les quatre coupes ordinaires. Niveau conseillé 60, objectif 2 500 points. Équipe complète, ni formes ni invocations.", "Requires all four ordinary cups. Level 60, target 2,500 points. Full party, no forms and no summons."], ["Youfie (585 PV) et Léon (819 PV). Aucune récompense.", "Yuffie (585 HP) and Leon (819 HP). No reward."]),
          at("Coupe Cerbère Paradoxe", ["Demande les cinq formes au niveau 5. Niveau conseillé 70, objectif 1 300 points. Sora seul, formes autorisées.", "Requires all forms at level 5. Level 70, target 1,300 points. Sora alone, forms allowed."], ["Cerbère (1 995 PV). Aucune récompense.", "Cerberus (1,995 HP). No reward."]),
          at("Coupe Titan Paradoxe", ["Demande les quatre invocations au niveau 5. Niveau conseillé 80, objectif 10 000 points. Sora seul, invocations interdites.", "Requires all four summons at level 5. Level 80, target 10,000 points. Sora alone, summons barred."], ["Hercule (2 250 PV). Aucune récompense.", "Hercules (2,250 HP). No reward."]),
          at("Coupe Hadès Paradoxe", ["Demande la Forteresse Oubliée restaurée, les trois autres coupes Paradoxe, et formes et invocations au niveau 7. Niveau conseillé 99, objectif 15 000 points. **Cinquante manches** d'affilée, aux règles changeantes.", "Requires Hollow Bastion restored, the other three Paradox Cups, and forms and summons at level 7. Level 99, target 15,000 points. **Fifty rounds** in a row, with shifting rules."], ["Hadès (2 715 PV). Récompense : le **Trophée de la Coupe Hadès**, que rien d'autre ne donne.", "Hades (2,715 HP). Reward: the **Hades Cup Trophy**, which nothing else grants."]),
        ],
      },
    ],
    steps: [
      {
        id: "points",
        title: L("Marquer, plutôt que gagner", "Scoring, rather than winning"),
        image: { src: "/images/walkthrough/kh2-colisee-5.webp", credit: credit("Olympus_Coliseum_from_KH2_gameplay_5.png"), width: 480, height: 270 },
        text: L(
          "C'est la différence avec le premier jeu : ici, finir un tournoi ne suffit pas. Chaque coupe demande un score, et ce score ne vient pas du nombre d'ennemis abattus mais de la manière dont on les abat.\n\nTrois choses le font monter. Les **enchaînements** d'abord : les points s'accumulent tant qu'on ne se fait pas toucher, et repartent de zéro au premier coup encaissé. Les **commandes de réaction** ensuite, qui valent beaucoup plus qu'une attaque ordinaire — c'est pour cela que les manches remplies de gros ennemis rapportent souvent davantage que celles remplies de petits. Les **finitions** enfin, qui closent un combo et versent le bonus d'un coup.\n\nLa conséquence pratique est contre-intuitive : jouer prudemment coûte des points. Une manche expédiée en encaissant trois coups rapporte moins qu'une manche plus longue traversée sans une égratignure. Si le score manque à la fin, ce n'est presque jamais parce qu'on a été trop lent, mais parce qu'on s'est fait toucher.",
          "This is the difference from the first game: here, finishing a tournament is not enough. Each cup asks for a score, and that score does not come from the number of enemies killed but from how you kill them.\n\nThree things raise it. **Chains** first: points accumulate as long as you are not hit, and reset to zero on the first blow taken. **Reaction commands** next, worth far more than an ordinary attack — which is why rounds full of large enemies often pay better than rounds full of small ones. **Finishers** last, closing a combo and paying the bonus in one go.\n\nThe practical consequence is counter-intuitive: playing safe costs points. A round rushed while taking three hits pays less than a longer round crossed without a scratch. When the score falls short at the end, it is almost never because you were slow — it is because you were hit.",
        ),
      },
      {
        id: "preparation",
        title: L("Ce qu'il faut avoir avant d'entrer", "What to bring"),
        text: L(
          "Les coupes ordinaires ne demandent rien d'exceptionnel : le niveau conseillé, des soins, et la lecture des règles avant de valider. La Coupe Cerbère est la seule vraie exception, parce que son chronomètre transforme chaque manche en course — la Forme Vaillance, ou n'importe quoi qui tue vite, y vaut mieux qu'un jeu appliqué.\n\nPour les Paradoxe, la préparation est le tournoi. **Fenrir** et la compétence **Combo négatif** réduisent le combo au sol à un seul coup suivi de sa finition : contre des ennemis qui interrompent tout, c'est la différence entre enchaîner et se faire cueillir. **Ultima** rend les finitions bien plus larges. Les capacités **Chance** empilées sur les trois personnages, avec les Anneaux de fortune, servent surtout à la récolte, mais la Coupe Hadès Paradoxe dure assez longtemps pour que cela pèse.\n\nUn dernier point, souvent découvert trop tard : la Coupe Hadès Paradoxe ne se met pas en pause utilement. Cinquante manches sans sauvegarde intermédiaire, c'est une heure et demie à deux heures d'affilée. Mieux vaut la commencer en connaissance de cause.",
          "The ordinary cups ask for nothing exceptional: the recommended level, healing, and reading the rules before confirming. The Cerberus Cup is the one real exception, because its clock turns every round into a race — Valor Form, or anything that kills fast, beats careful play there.\n\nFor the Paradox Cups, the preparation is the tournament. **Fenrir** and the **Negative Combo** ability cut the ground combo to a single hit plus its finisher: against enemies that interrupt everything, that is the difference between chaining and being picked off. **Ultima** makes finishers far wider. **Lucky Lucky** stacked across all three characters, with Lucky Rings, mostly helps the material hunt, but the Hades Paradox Cup runs long enough for it to matter.\n\nOne last point, usually discovered too late: the Hades Paradox Cup cannot be usefully paused. Fifty rounds with no mid-run save is an hour and a half to two hours in one sitting. Better to start it knowing that.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Tournoi", "Tournament"),
      intro: L(
        "Ce que chaque coupe rapporte. Les quatre coupes ordinaires remplies au score demandé comptent pour le Carnet de Jiminy ; les Paradoxe comptent aussi, même sans récompense.",
        "What each cup pays out. The four ordinary cups cleared at the required score count for Jiminy's Journal; the Paradox Cups count too, reward or not.",
      ),
      rows: [
        { tier: L("Coupe Peine et Panique", "Pain and Panic Cup"), reward: L("Ceinturon, Gemme de sérénité — objectif 2 000 points", "Rising Dragon, Serenity Gem — target 2,000 points") },
        { tier: L("Coupe Cerbère", "Cerberus Cup"), reward: L("Dragon Volant, Cristal de sérénité — objectif 1 000 points", "Rising Dragon staff, Serenity Crystal — target 1,000 points") },
        { tier: L("Coupe Titan", "Titan Cup"), reward: L("Bouclier Genji, Anneau d'onyx — objectif 5 000 points", "Genji Shield, Onyx Ring — target 5,000 points") },
        { tier: L("Coupe de la Destinée", "Goddess of Fate Cup"), reward: L("**Orichalque +**, Keyblade **Fatalis** — objectif 3 000 points", "**Orichalcum+**, the **Fatal Crest** Keyblade — target 3,000 points") },
        { tier: L("Coupe Peine et Panique Paradoxe", "Pain and Panic Paradox Cup"), reward: L("Aucune — objectif 2 500 points", "None — target 2,500 points") },
        { tier: L("Coupe Cerbère Paradoxe", "Cerberus Paradox Cup"), reward: L("Aucune — objectif 1 300 points", "None — target 1,300 points") },
        { tier: L("Coupe Titan Paradoxe", "Titan Paradox Cup"), reward: L("Aucune — objectif 10 000 points", "None — target 10,000 points") },
        { tier: L("Coupe Hadès Paradoxe", "Hades Paradox Cup"), reward: L("**Trophée de la Coupe Hadès** — cinquante manches, objectif 15 000 points", "The **Hades Cup Trophy** — fifty rounds, target 15,000 points") },
      ],
      note: L(
        "Les coupes Paradoxe demandent formes et invocations montées : la Cerbère Paradoxe veut les cinq formes au niveau 5, la Titan Paradoxe les quatre invocations au niveau 5, et la Hadès Paradoxe les unes et les autres au niveau 7. Autant les monter en jouant plutôt que d'y revenir en fin de partie.",
        "The Paradox Cups require levelled forms and summons: Cerberus Paradox wants all forms at level 5, Titan Paradox all four summons at level 5, and Hades Paradox both at level 7. Better to level them while playing than to come back for it at the end.",
      ),
    },
  },
  {
    id: "formes",
    title: L("Les formes de Fusion", "The Drive Forms"),
    tagline: L(
      "Vaillance, Sagesse, Souvenance, Maîtrise, Suprême et la Non-Forme : comment les obtenir et comment les monter.",
      "Valor, Wisdom, Limit, Master, Final and Antiform: how to get them and how to level them.",
    ),
    entry: "sora",
    status: "done",
    intro: L(
      "Le vêtement que la Bonne Fée offre à Sora, à la Tour de Yen Sid, lui donne la capacité de fusionner avec Donald, avec Dingo, ou avec les deux. C'est le système qui structure tout Kingdom Hearts II : la jauge de Flux se remplit en combattant, et chaque forme la dépense pour transformer Sora en quelque chose d'autre pendant un temps limité.\n\nActiver une forme coûte **au moins trois jauges de Flux**, et exige que le ou les coéquipiers consommés soient conscients et présents dans l'équipe. Pendant la transformation, la jauge de Fusion remplace celle de Flux : elle descend avec le temps, et plus vite à chaque coup porté. La compétence **Booster Fusion** allonge cette durée.\n\nLe niveau maximal des formes ne dépend pas du niveau de Sora mais du **nombre de formes possédées** : avec une seule forme, on plafonne au niveau 3 ; avec les cinq, au niveau 7. Monter une forme rapporte deux choses à chaque palier — une jauge de Fusion supplémentaire, et surtout une **capacité de croissance** que Sora finit par utiliser hors transformation, à partir du niveau 3.\n\nCe sont ces capacités de croissance qui font la valeur réelle des formes : Super Saut, Sprint, Roulade, Double Saut et Vol plané. Sans elles, la moitié des pièces de puzzle et des coffres en hauteur restent hors de portée.",
      "The garment the Fairy Godmother gives Sora at Yen Sid's Tower lets him fuse with Donald, with Goofy, or with both. It is the system that structures all of Kingdom Hearts II: the Drive gauge fills as you fight, and each form spends it to turn Sora into something else for a limited time.\n\nActivating a form costs **at least three Drive bars**, and requires the consumed party member or members to be conscious and in the party. During the transformation the Form gauge replaces the Drive gauge: it drains with time, and faster with every blow struck. The **Drive Boost** ability lengthens that window.\n\nThe forms' maximum level does not depend on Sora's level but on **how many forms you own**: with a single form you cap at level 3; with all five, at level 7. Levelling a form pays two things at each tier — an extra Form bar, and above all a **growth ability** Sora eventually uses outside the transformation, from level 3 onward.\n\nThose growth abilities are what makes the forms actually valuable: High Jump, Quick Run, Dodge Roll, Aerial Dodge and Glide. Without them, half the puzzle pieces and high chests stay out of reach.",
    ),
    tables: [
      {
        id: "formes",
        title: L("Les six formes", "The six forms"),
        intro: L(
          "La Non-Forme n'est pas une forme qu'on obtient : c'est la sanction d'un usage trop fréquent des autres. Elle apparaît au hasard à la place de la forme demandée, et elle consomme la jauge quand même.",
          "Antiform is not a form you obtain: it is the penalty for overusing the others. It appears at random in place of the form you asked for, and it spends the gauge anyway.",
        ),
        columns: [L("Forme", "Form"), L("Obtention et coéquipiers", "How to get it, and who it consumes"), L("Style et capacité de croissance", "Style and growth ability")],
        rows: [
          at("Forme Vaillance", ["À la Tour de Yen Sid, avec le vêtement. Consomme Dingo. Trois jauges de Flux.", "At Yen Sid's Tower, with the garment. Consumes Goofy. Three Drive bars."], ["Deux Keyblades, corps à corps pur : plus rapide, plus fort, mais **aucune magie** — seule la commande Attaque reste. Capacité de croissance : **Super Saut**.", "Two Keyblades, pure melee: faster, stronger, but **no magic** — only the Attack command remains. Growth ability: **High Jump**."]),
          at("Forme Sagesse", ["Après le second combat contre Pat Hibulaire, à la Rivière intemporelle. Consomme Donald. Trois jauges de Flux.", "After the second Pete fight in the Timeless River. Consumes Donald. Three Drive bars."], ["La commande **Tir** remplace Attaque : Sora glisse et tire à distance, et ses sorts frappent bien plus fort. Capacité de croissance : **Sprint**.", "The **Shoot** command replaces Attack: Sora glides and fires at range, and his spells hit far harder. Growth ability: **Quick Run**."]),
          at("Forme Souvenance", ["Exclusive à Final Mix. Au second passage à la Cité du Crépuscule, une fois la Keyblade Tendre promesse obtenue. Sora combat seul. Trois jauges de Flux.", "Exclusive to Final Mix. On the second Twilight Town visit, once the Oathkeeper Keyblade is obtained. Sora fights alone. Three Drive bars."], ["Un menu de techniques reprises du premier jeu — **Aquilon, Arcanes, Diskobolos, Ragnarok** — qui coûtent des PM et déclenchent chacune une commande de réaction. Capacité de croissance : **Roulade**.", "A menu of techniques taken from the first game — **Sonic Blade, Strike Raid, Ars Arcanum, Ragnarok** — each costing MP and triggering a reaction command. Growth ability: **Dodge Roll**."]),
          at("Forme Maîtrise", ["En réactivant le cœur énergétique de Space Paranoids. Consomme Donald **et** Dingo. Quatre jauges de Flux.", "By reactivating Space Paranoids' energy core. Consumes both Donald **and** Goofy. Four Drive bars."], ["Deux Keyblades et magie renforcée, le juste milieu entre Vaillance et Sagesse — mais **aucun combo au sol** : Sora reste en l'air. Capacité de croissance : **Double Saut**.", "Two Keyblades and boosted magic, the middle ground between Valor and Wisdom — but **no ground combo**: Sora stays airborne. Growth ability: **Aerial Dodge**."]),
          at("Forme Suprême", ["Au hasard après la victoire sur Roxas, à la Forteresse Oubliée : équipez **Les deux ne font qu'un**, lancez une coupe et activez une forme à la première manche ; recommencez jusqu'à ce qu'elle sorte. Consomme Donald et Dingo. Cinq jauges de Flux.", "At random after beating Roxas in Hollow Bastion: equip **Two Become One**, start a cup and activate a form on the first round; retry until it appears. Consumes Donald and Goofy. Five Drive bars."], ["Les Keyblades flottent et frappent seules pendant les sauts, les sorts et les attaques adverses. La forme la plus rapide et la plus puissante du jeu. Capacité de croissance : **Vol plané**.", "The Keyblades float and strike on their own during jumps, spells and enemy attacks. The fastest and strongest form in the game. Growth ability: **Glide**."]),
          at("Non-Forme", ["Ne s'obtient pas : elle remplace au hasard la forme demandée quand on abuse des transformations. La probabilité baisse à mesure que les formes montent en niveau.", "Cannot be obtained: it randomly replaces the form you asked for when transformations are overused. The odds fall as your forms level up."], ["Sora devient une ombre : très rapide, très fort, mais **sans magie, sans objets, sans commandes de réaction**, et il se blesse lui-même. Ne monte pas de niveau.", "Sora becomes a shadow: very fast, very strong, but with **no magic, no items, no reaction commands**, and he damages himself. Cannot be levelled."]),
        ],
      },
      {
        id: "experience",
        title: L("Comment chaque forme gagne son expérience", "How each form earns its EXP"),
        intro: L(
          "Chaque forme compte autre chose. C'est le point que l'on comprend souvent trop tard : farmer au mauvais endroit avec la mauvaise forme ne rapporte rien du tout.",
          "Each form counts something different. This is the point usually understood too late: farming in the wrong place with the wrong form pays nothing at all.",
        ),
        columns: [L("Forme", "Form"), L("Ce qui rapporte de l'expérience", "What earns EXP"), L("Où la monter", "Where to level it")],
        rows: [
          at("Forme Vaillance", ["Un point par coup porté sur un ennemi — pas par ennemi vaincu.", "One point per hit landed on an enemy — not per enemy defeated."], ["La plus rapide à monter. Cherchez des ennemis **résistants** plutôt que nombreux : un Béhémoth encaisse des dizaines de coups.", "The fastest to level. Look for **tough** enemies rather than numerous ones: a Behemoth soaks up dozens of hits."]),
          at("Forme Sagesse", ["Un point par Sans-cœur vaincu.", "One point per Heartless defeated."], ["Les Ombres de la Rivière intemporelle et de la Cité du Crépuscule, ou les Hélicoptères du Nid du dragon : beaucoup d'ennemis faibles, vite tués au Tir.", "Shadows in the Timeless River and Twilight Town, or Rapid Thrusters at the Dragon's Nest: many weak enemies, quickly killed with Shoot."]),
          at("Forme Souvenance", ["Un point par commande de réaction de finition réussie, à la fin d'une technique.", "One point per Limit finisher reaction command used, at the end of a technique."], ["La moins chère du jeu : le niveau 7 ne demande que 90 points. Un seul ennemi résistant suffit, en enchaînant Arcanes.", "The cheapest in the game: level 7 needs only 90 points. A single tough enemy is enough, chaining Ars Arcanum."]),
          at("Forme Maîtrise", ["Les sphères de Flux ramassées : une petite vaut 1 point, une grande 3.", "Drive orbs collected: a small one is worth 1 point, a large one 3."], ["Les Centaures du Nid du dragon, ou les objets destructibles du décor. La Keyblade **Lampe magique** et la compétence **Abondance** augmentent nettement le nombre de sphères.", "Centaurions at the Dragon's Nest, or breakable scenery. The **Lamp Charm** Keyblade and the **Drive Converter** ability markedly raise the orb count."]),
          at("Forme Suprême", ["Un point par **Similis** vaincu — pas par Sans-cœur.", "One point per **Nobody** defeated — not per Heartless."], ["Le manoir de la Cité du Crépuscule et la Forteresse Oubliée, où les Similis vont par groupes. Restez près d'un point de sauvegarde pour recharger la jauge.", "The Twilight Town mansion and Hollow Bastion, where Nobodies come in groups. Stay near a save point to recharge the gauge."]),
        ],
      },
      {
        id: "paliers",
        title: L("Les paliers, forme par forme", "The tiers, form by form"),
        intro: L(
          "L'expérience totale à atteindre pour chaque niveau. Chaque palier donne une jauge de Fusion supplémentaire ; les niveaux impairs font aussi monter la capacité de croissance, et le niveau 3 la rend utilisable hors transformation.",
          "The cumulative EXP needed for each level. Every tier grants an extra Form bar; odd levels also raise the growth ability, and level 3 makes it usable outside the transformation.",
        ),
        columns: [L("Forme", "Form"), L("Niveaux 2 à 4", "Levels 2 to 4"), L("Niveaux 5 à 7", "Levels 5 to 7")],
        rows: [
          at("Forme Vaillance", ["80, 240, 520", "80, 240, 520"], ["968, 1 528, 2 200 — la plus chère, mais chaque coup compte.", "968, 1,528, 2,200 — the most expensive, but every hit counts."]),
          at("Forme Sagesse", ["12, 36, 84", "12, 36, 84"], ["160, 293, 450", "160, 293, 450"]),
          at("Forme Souvenance", ["3, 9, 21", "3, 9, 21"], ["40, 63, 90 — de loin la moins chère.", "40, 63, 90 — by far the cheapest."]),
          at("Forme Maîtrise", ["40, 120, 260", "40, 120, 260"], ["484, 932, 1 600", "484, 932, 1,600"]),
          at("Forme Suprême", ["12, 36, 84", "12, 36, 84"], ["160, 293, 450", "160, 293, 450"]),
        ],
      },
    ],
    steps: [
      {
        id: "croissance",
        title: L("Les capacités de croissance valent mieux que les formes", "The growth abilities are worth more than the forms"),
        text: L(
          "Une forme dure une poignée de secondes. Une capacité de croissance, une fois au niveau 3, reste acquise **en permanence** — et c'est elle qui change le jeu.\n\n**Super Saut** (Vaillance) et **Double Saut** (Maîtrise) ouvrent la verticale : sans eux, un tiers des pièces de puzzle et la moitié des coffres en hauteur sont inaccessibles. **Vol plané** (Suprême) prolonge tout cela et transforme les déplacements dans les grands mondes. **Sprint** (Sagesse) sert à traverser, mais aussi à esquiver une charge. **Roulade** (Souvenance) est l'esquive courte du premier jeu, et de loin la plus utile contre les Répliques de l'Organisation.\n\nLa conséquence : il n'y a aucune raison d'attendre la fin du jeu pour monter les formes. Chaque niveau atteint tôt rend les mondes suivants plus lisibles, et chaque capacité de croissance obtenue tôt évite un aller-retour plus tard.",
          "A form lasts a handful of seconds. A growth ability, once at level 3, is yours **permanently** — and that is what changes the game.\n\n**High Jump** (Valor) and **Aerial Dodge** (Master) open the vertical: without them, a third of the puzzle pieces and half the high chests are unreachable. **Glide** (Final) extends all of that and transforms movement in the larger worlds. **Quick Run** (Wisdom) crosses ground, but also dodges a charge. **Dodge Roll** (Limit) is the first game's short evade, and by far the most useful against the Organisation replicas.\n\nThe upshot: there is no reason to wait until the end of the game to level forms. Every level earned early makes the following worlds more legible, and every growth ability earned early saves a return trip later.",
        ),
      },
      {
        id: "non-forme",
        title: L("La Non-Forme, et comment s'en débarrasser", "Antiform, and how to be rid of it"),
        text: L(
          "La Non-Forme apparaît au hasard quand on enchaîne les transformations : la commande demandée devient Non-Forme, la jauge est consommée, et Sora se retrouve en ombre — très rapide, très violent, mais incapable de soigner, d'utiliser un objet ou de déclencher une commande de réaction, et il se blesse à chaque coup porté.\n\nDeux choses réduisent le risque. La première est de **monter les formes** : la probabilité de Non-Forme baisse à mesure que leurs niveaux montent. La seconde est de ne pas transformer deux fois de suite dans le même combat — c'est l'enchaînement rapproché qui la déclenche, pas l'usage en lui-même.\n\nUne fois dedans, il n'y a pas de sortie anticipée : la jauge se vide, et Sora redevient normal. Le seul réflexe utile est de s'éloigner, parce que les dégâts que Sora s'inflige ne s'arrêtent pas.\n\nÀ noter : la Non-Forme compte pour le Carnet de Jiminy. Il faut donc l'avoir vue au moins une fois — ce qui arrive de toute façon.",
          "Antiform appears at random when you chain transformations: the command you asked for becomes Antiform, the gauge is spent, and Sora ends up a shadow — very fast, very violent, but unable to heal, use an item or trigger a reaction command, and hurting himself with every blow.\n\nTwo things reduce the risk. The first is to **level your forms**: the Antiform chance drops as their levels rise. The second is not to transform twice in a row in the same fight — it is the close repetition that triggers it, not the use itself.\n\nOnce in it, there is no early exit: the gauge drains and Sora turns back. The only useful reflex is to move away, because the damage Sora deals himself does not stop.\n\nWorth noting: Antiform counts for Jiminy's Journal. So you do need to have seen it at least once — which happens anyway.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Nombre de formes possédées", "Forms owned"),
      intro: L(
        "Le plafond de niveau des formes dépend uniquement du nombre de formes obtenues. Inutile de s'acharner sur la Vaillance avant d'avoir les autres : elle ne dépassera pas son plafond.",
        "The forms' level cap depends solely on how many forms you own. No point grinding Valor before you have the others: it will not pass its cap.",
      ),
      rows: [
        { tier: L("1 forme", "1 form"), reward: L("Niveau maximal 3", "Maximum level 3") },
        { tier: L("2 formes", "2 forms"), reward: L("Niveau maximal 4", "Maximum level 4") },
        { tier: L("3 formes", "3 forms"), reward: L("Niveau maximal 5", "Maximum level 5") },
        { tier: L("4 formes", "4 forms"), reward: L("Niveau maximal 6", "Maximum level 6") },
        { tier: L("5 formes", "5 forms"), reward: L("Niveau maximal 7 — le plafond du jeu", "Maximum level 7 — the game's cap") },
      ],
      note: L(
        "Les cinq formes au niveau 7 font partie des conditions de la Coupe Hadès Paradoxe, et la section du Carnet de Jiminy consacrée aux formes demande de les avoir toutes vues, Non-Forme comprise.",
        "All five forms at level 7 is one of the Hades Paradox Cup's requirements, and the Journal's forms section asks you to have seen them all, Antiform included.",
      ),
    },
  },
  {
    id: "invocations",
    title: L("Les invocations", "The summons"),
    tagline: L(
      "Quatre pendentifs, quatre alliés : Chicken Little, le Génie, Stitch et Peter Pan.",
      "Four charms, four allies: Chicken Little, Genie, Stitch and Peter Pan.",
    ),
    entry: "chip-and-dale",
    status: "done",
    intro: L(
      "Les invocations partagent la jauge de Flux avec les formes de Fusion, et coûtent trois jauges comme elles. La différence est qu'elles ne transforment pas Sora : elles font venir un allié, qui reste jusqu'à ce que la jauge se vide, et qui remplace Donald et Dingo pendant ce temps.\n\nIl y en a quatre, représentées chacune par un **pendentif** : la batte, la lampe, l'ukulélé et la plume. Aucune n'est obligatoire pour finir le jeu ; les quatre comptent pour le Carnet de Jiminy, et deux d'entre elles sont réclamées par les coupes Paradoxe.\n\nLeurs niveaux fonctionnent comme ceux des formes : le plafond dépend du **nombre de pendentifs possédés**, et chaque palier ajoute une jauge de Fusion. Au niveau 1 avec un seul pendentif, une invocation dure trois jauges ; au niveau 7 avec les quatre, neuf. L'expérience se gagne simplement en les utilisant.\n\nUn détail qui compte : l'invocation soigne ou protège plus souvent qu'elle n'attaque. Chicken Little rend des PV, Stitch rend des PV **et** des PM, le Génie soigne en cas de danger. C'est souvent à ce titre qu'on les sort, plus que pour leurs dégâts.",
      "Summons share the Drive gauge with the Drive Forms, and cost three bars just as they do. The difference is that they do not transform Sora: they bring in an ally, who stays until the gauge drains, and who replaces Donald and Goofy for that time.\n\nThere are four, each represented by a **charm**: the bat, the lamp, the ukulele and the feather. None is required to finish the game; all four count for Jiminy's Journal, and two of them are demanded by the Paradox Cups.\n\nTheir levels work like the forms': the cap depends on **how many charms you own**, and each tier adds a Form bar. At level 1 with a single charm, a summon lasts three bars; at level 7 with all four, nine. EXP is earned simply by using them.\n\nOne detail that matters: a summon heals or protects more often than it attacks. Chicken Little restores HP, Stitch restores HP **and** MP, Genie heals when you are in danger. That is usually why you bring them out, more than for their damage.",
    ),
    tables: [
      {
        id: "invocations",
        title: L("Les quatre invocations", "The four summons"),
        intro: L(
          "Toutes coûtent trois jauges de Flux à l'activation. Aucune n'est manquable définitivement : les quatre restent accessibles jusqu'à la fin du jeu.",
          "All four cost three Drive bars to activate. None is permanently missable: all remain available until the end of the game.",
        ),
        columns: [L("Invocation", "Summon"), L("Pendentif et obtention", "Charm and how to get it"), L("Ce qu'elle fait", "What it does")],
        rows: [
          at("Chicken Little", ["**Pendentif batte**. Sora le reçoit à la Forteresse Oubliée, après un premier passage par la Forêt des Rêves Bleus.", "**Baseball Charm**. Sora receives it in Hollow Bastion, after a first visit to the Hundred Acre Wood."], ["Il suit Sora de près, lance des balles, jette des pétards qui stoppent les ennemis, siffle pour immobiliser ceux qui sont loin, et rend des PV à Sora.", "He sticks close to Sora, throws balls, tosses firecrackers that stop enemies, whistles to freeze distant ones, and restores HP to Sora."]),
          at("Le Génie", ["**Pendentif lampe**. Il faut vaincre Poussah Volcano et Poussah Blizzaro, à Agrabah.", "**Lamp Charm**. You must beat the Volcano Lord and the Blizzard Lord, in Agrabah."], ["Il soigne les PV de Sora en cas de danger et ne combat qu'au travers de ses coopérations. Il se métamorphose selon les formes de Fusion possédées, ce qui varie ses attaques.", "He heals Sora's HP when in danger and only fights through his Limits. He shapeshifts according to the Drive Forms you own, which varies his attacks."]),
          at("Stitch", ["**Pendentif ukulélé**. Dans un coffre de la Forteresse Oubliée, après avoir réactivé le cœur énergétique de Space Paranoids.", "**Ukulele Charm**. In a Hollow Bastion chest, after reactivating Space Paranoids' energy core."], ["Il joue de l'ukulélé, ce qui force les ennemis à lâcher des sphères, et rend à Sora ses PV **et** ses PM. La meilleure invocation de soutien du jeu.", "He plays the ukulele, which forces enemies to drop orbs, and restores Sora's HP **and** MP. The best support summon in the game."]),
          at("Peter Pan", ["**Pendentif plume**. Dans un coffre à bord de l'Intercepteur, au cimetière d'épaves de Port Royal.", "**Feather Charm**. In a chest aboard the Interceptor, at Port Royal's Ship Graveyard."], ["Accompagné de la Fée Clochette, il fait voler Sora au-dessus des ennemis, emporte ceux qu'ils touchent, et exécute des loopings qui infligent de gros dégâts.", "With Tinker Bell alongside, he flies Sora above the enemies, carries off those they strike, and performs loops that deal heavy damage."]),
        ],
      },
      {
        id: "niveaux",
        title: L("Les niveaux d'invocation", "Summon levels"),
        intro: L(
          "Comme pour les formes, le plafond dépend du nombre de pendentifs obtenus. L'expérience indiquée est le total à atteindre ; chaque niveau ajoute une jauge de Fusion à la durée.",
          "As with forms, the cap depends on how many charms you own. The EXP shown is cumulative; each level adds one Form bar to the duration.",
        ),
        columns: [L("Niveau", "Level"), L("Pendentifs nécessaires", "Charms needed"), L("Expérience et durée", "EXP and duration")],
        rows: [
          at("Niveau 1", ["1 à 4 pendentifs", "1 to 4 charms"], ["Aucune expérience — 3 jauges", "No EXP — 3 bars"]),
          at("Niveau 2", ["1 à 4 pendentifs", "1 to 4 charms"], ["6 points — 4 jauges", "6 points — 4 bars"]),
          at("Niveau 3", ["1 à 4 pendentifs", "1 to 4 charms"], ["22 points — 5 jauges", "22 points — 5 bars"]),
          at("Niveau 4", ["2 pendentifs au minimum", "2 charms minimum"], ["47 points — 6 jauges", "47 points — 6 bars"]),
          at("Niveau 5", ["3 pendentifs au minimum", "3 charms minimum"], ["89 points — 7 jauges. C'est le niveau exigé par la Coupe Titan Paradoxe.", "89 points — 7 bars. This is the level the Titan Paradox Cup requires."]),
          at("Niveau 6", ["Les 4 pendentifs", "All 4 charms"], ["152 points — 8 jauges", "152 points — 8 bars"]),
          at("Niveau 7", ["Les 4 pendentifs", "All 4 charms"], ["250 points — 9 jauges. Exigé par la Coupe Hadès Paradoxe.", "250 points — 9 bars. Required by the Hades Paradox Cup."]),
        ],
      },
    ],
    steps: [
      {
        id: "monter",
        title: L("Comment les monter sans y passer la soirée", "Levelling them without spending the evening on it"),
        text: L(
          "L'expérience d'invocation se gagne à l'usage : il n'y a pas d'ennemi privilégié, pas de compteur caché. Ce qui coûte du temps, ce n'est pas l'expérience, c'est la jauge de Flux — chaque invocation en dépense trois, et il faut les refaire remonter.\n\nDeux endroits rendent cela supportable. Le premier est n'importe quelle salle **avec un point de sauvegarde à proximité** : sortir et rentrer dans la salle recharge partiellement la jauge, et le point de sauvegarde permet de relancer sans attendre. Le second est le manoir de la Cité du Crépuscule, où les groupes de Similis remplissent la jauge très vite.\n\nLa Keyblade **Lampe magique** et la compétence **Abondance** augmentent le nombre de sphères de Flux lâchées : elles servent autant ici que pour la Forme Maîtrise. Une bonne partie du travail se fait donc en même temps.\n\nEn pratique, les quatre invocations au niveau 7 demandent environ mille invocations cumulées — c'est long, mais c'est le genre de chose qui se fait en arrière-plan pendant la récolte des matériaux, pas en séance dédiée.",
          "Summon EXP is earned through use: there is no preferred enemy, no hidden counter. What costs time is not the EXP but the Drive gauge — each summon spends three bars, and they have to be refilled.\n\nTwo places make that bearable. The first is any room **near a save point**: leaving and re-entering partially refills the gauge, and the save point lets you restart without waiting. The second is the Twilight Town mansion, where groups of Nobodies fill the gauge very fast.\n\nThe **Lamp Charm** Keyblade and the **Drive Converter** ability raise the number of Drive orbs dropped: they help here as much as they help Master Form. So a good part of the work happens at the same time.\n\nIn practice, all four summons at level 7 takes roughly a thousand cumulative summons — long, but the sort of thing done in the background during the material hunt, not in a dedicated session.",
        ),
      },
      {
        id: "usage",
        title: L("Laquelle sortir, et quand", "Which one to bring out, and when"),
        image: { src: "/images/encyclopedia/characters/stitch.webp", credit: credit("Stitch.png"), width: 299, height: 320 },
        text: L(
          "**Stitch** est la réponse par défaut dès qu'on l'a. Il rend des PV et des PM, ce qu'aucune autre invocation ne fait, et le retour de PM en plein combat est ce qui manque le plus dans Kingdom Hearts II — les sorts y coûtent toute la barre.\n\n**Chicken Little** sert contre les groupes : ses pétards stoppent les ennemis et son sifflet immobilise ceux qu'on ne peut pas atteindre. C'est l'invocation des salles pleines, pas des duels.\n\n**Peter Pan** est la seule qui fasse vraiment mal. Ses loopings infligent de gros dégâts, et le vol met Sora hors de portée pendant l'attaque — ce qui en fait une réponse honnête contre un boss au sol.\n\n**Le Génie** est le plus étrange : il ne combat qu'à travers ses coopérations, et il change d'apparence et d'attaques selon les formes de Fusion que Sora possède. Il soigne en cas de danger, ce qui lui donne un rôle de filet de sécurité. Il est aussi le plus lié à l'histoire, et le seul qu'on obtienne en combattant plutôt qu'en ouvrant un coffre.",
          "**Stitch** is the default answer as soon as you have him. He restores HP and MP, which no other summon does, and MP returning mid-fight is what Kingdom Hearts II lacks most — spells there cost the whole bar.\n\n**Chicken Little** is for crowds: his firecrackers stop enemies and his whistle freezes the ones you cannot reach. He is the summon for full rooms, not duels.\n\n**Peter Pan** is the only one that really hurts. His loops deal heavy damage, and flight puts Sora out of reach during the attack — which makes him an honest answer to a ground-bound boss.\n\n**Genie** is the strangest: he only fights through his Limits, and he changes appearance and attacks according to the Drive Forms Sora owns. He heals when you are in danger, which gives him a safety-net role. He is also the most tied to the story, and the only one earned by fighting rather than by opening a chest.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Invocation", "Summon"),
      intro: L(
        "Où trouver chaque pendentif, en une ligne.",
        "Where to find each charm, in one line.",
      ),
      rows: [
        { tier: L("Chicken Little — Pendentif batte", "Chicken Little — Baseball Charm"), reward: L("Forteresse Oubliée, après un premier passage par la Forêt des Rêves Bleus", "Hollow Bastion, after a first visit to the Hundred Acre Wood") },
        { tier: L("Le Génie — Pendentif lampe", "Genie — Lamp Charm"), reward: L("Agrabah, en vainquant Poussah Volcano et Poussah Blizzaro", "Agrabah, by beating the Volcano Lord and the Blizzard Lord") },
        { tier: L("Stitch — Pendentif ukulélé", "Stitch — Ukulele Charm"), reward: L("Forteresse Oubliée, dans un coffre, après la réactivation du cœur de Space Paranoids", "Hollow Bastion, in a chest, after reactivating Space Paranoids' core") },
        { tier: L("Peter Pan — Pendentif plume", "Peter Pan — Feather Charm"), reward: L("Port Royal, dans un coffre à bord de l'Intercepteur, au cimetière d'épaves", "Port Royal, in a chest aboard the Interceptor, at the Ship Graveyard") },
      ],
      note: L(
        "Les quatre invocations au niveau 5 ouvrent la Coupe Titan Paradoxe ; au niveau 7, elles font partie des conditions de la Coupe Hadès Paradoxe. Les avoir toutes utilisées remplit la section du Carnet de Jiminy qui leur est consacrée.",
        "All four summons at level 5 unlock the Titan Paradox Cup; at level 7 they are part of the Hades Paradox Cup's requirements. Having used them all fills their section of Jiminy's Journal.",
      ),
    },
  },
  {
    id: "synthese",
    title: L("La synthèse", "Synthesis"),
    tagline: L(
      "L'atelier des Mogs : quatorze familles de matériaux, seize formules, et la Keyblade Ultima.",
      "The moogle workshop: fourteen material families, sixteen recipes, and the Ultima Weapon.",
    ),
    entry: "moogles",
    status: "done",
    intro: L(
      "L'atelier des Mogs de Kingdom Hearts II est plus vaste que celui du premier jeu, et surtout plus structuré. Trois choses le gouvernent : les **matériaux**, rangés en familles et en rangs ; les **formules**, qui débloquent les recettes ; et le **niveau du Mog**, qui monte à mesure qu'on crée et qui ouvre l'accès aux ingrédients rares.\n\nOn trouve un Mog dans presque tous les mondes, mais c'est le même atelier : niveau, matériaux et formules sont partagés. Créer un objet donne de l'expérience au Mog, et chaque niveau ouvre quelque chose — d'abord les familles de matériaux réservées, puis des emplacements d'ingrédients supplémentaires, puis des réductions de coût, et enfin la **Conception libre**, qui permet de créer sans formule.\n\nAu bout de la chaîne, il y a la Keyblade **Ultima** : la meilleure arme du jeu, qu'aucun combat ne donne. Sa formule dort dans le couloir souterrain du manoir de la Cité du Crépuscule, au niveau de combat 47, et sa recette réclame **treize Orichalque +** — alors que le jeu n'en contient que sept. Les six autres se synthétisent, ce qui fait de l'Ultima l'aboutissement de tout l'atelier plutôt qu'un simple objet à fabriquer.\n\nEt le raccourci qui change tout : la Keyblade **Doux souvenir**, obtenue à la Forêt des Rêves Bleus, **double** les matériaux lâchés par les ennemis. Elle ne fait presque aucun dégât, mais elle divise par deux le temps de la récolte.",
      "Kingdom Hearts II's moogle workshop is larger than the first game's, and above all better structured. Three things govern it: **materials**, sorted into families and ranks; **recipes**, which unlock what can be made; and the **moogle's level**, which rises as you craft and which opens access to the rarer ingredients.\n\nThere is a moogle in nearly every world, but it is the same workshop: level, materials and recipes are shared. Crafting an item gives the moogle EXP, and each level opens something — first the reserved material families, then extra ingredient slots, then cost reductions, and finally **Free Development**, which lets you craft without a recipe.\n\nAt the end of the chain sits the **Ultima Weapon**: the best weapon in the game, which no fight hands you. Its recipe sleeps in the Twilight Town mansion's Basement Corridor, at battle level 47, and it calls for **thirteen Orichalcum+** — while the game contains only seven. The other six are synthesised, which makes Ultima the culmination of the whole workshop rather than merely an item to build.\n\nAnd the shortcut that changes everything: the **Sweet Memories** Keyblade, from the Hundred Acre Wood, **doubles** the materials enemies drop. It deals almost no damage, but it halves the time the hunt takes.",
    ),
    tables: [
      {
        id: "familles",
        title: L("Les quatorze familles de matériaux", "The fourteen material families"),
        intro: L(
          "Chaque famille compte quatre rangs : **Éclat** (C), **Pierre** (B), **Gemme** (A) et **Cristal** (S). Les matériaux d'un rang donné se mettent en vente dans les boutiques une fois qu'on en a obtenu assez : 30 Éclats, 25 Pierres, 20 Gemmes. Les Cristaux ne se vendent jamais.",
          "Each family has four ranks: **Shard** (C), **Stone** (B), **Gem** (A) and **Crystal** (S). Materials of a given rank go on sale in shops once you have obtained enough: 30 Shards, 25 Stones, 20 Gems. Crystals never go on sale.",
        ),
        columns: [L("Famille", "Family"), L("Les quatre rangs", "The four ranks"), L("Où les prendre", "Where to get them")],
        rows: [
          at("Ardent", ["Éclat, Pierre, Gemme, Cristal ardent", "Blazing Shard, Stone, Gem, Crystal"], ["Marteaux-pilons et Minute bombes pour l'Éclat, Rotors mous et Bombardes pour la Pierre, Gros bandits et Globes caniculaires pour la Gemme, Jazz pourpres et Crescendos pour le Cristal.", "Hammer Frames and Minute Bombs for the Shard, Rabid Dogs and Bookmasters for the Stone, Fat Bandits and Fiery Globes for the Gem, Crimson Jazz and Crescendos for the Crystal."]),
          at("Glacial", ["Éclat, Pierre, Gemme, Cristal glacial", "Frost Shard, Stone, Gem, Crystal"], ["Lanciers et Chauve-grappins, puis Chauffards et Barons bleus, puis Cartomanciens et Billes réfrigérantes ; le Cristal vient des Carcasses et d'un coffre de la Caverne du Souvenir.", "Lances and Aeroplanes, then Hot Rods and Devastators, then Cardsmen and Icy Cubes; the Crystal comes from Living Bones and a Cavern of Remembrance chest."]),
          at("Grondant", ["Éclat, Pierre, Gemme, Cristal grondant", "Lightning Shard, Stone, Gem, Crystal"], ["Les Similis aériens et les ennemis rapides, tout au long du jeu.", "Airborne Nobodies and fast enemies, throughout the game."]),
          at("Hyalin", ["Éclat, Pierre, Gemme, Cristal hyalin", "Lucid Shard, Stone, Gem, Crystal"], ["Les Sans-cœur volants et les Similis de petite taille.", "Flying Heartless and the smaller Nobodies."]),
          at("Force", ["Éclat, Pierre, Gemme, Cristal de force", "Power Shard, Stone, Gem, Crystal"], ["Les gros Sans-cœur au corps à corps.", "Large melee Heartless."]),
          at("Noir", ["Éclat, Pierre, Gemme, Cristal noir", "Dark Shard, Stone, Gem, Crystal"], ["Les Sans-cœur des mondes sombres, Ville d'Halloween et Illusiopolis en tête.", "Heartless of the darker worlds, chiefly Halloween Town and The World That Never Was."]),
          at("Mat", ["Éclat, Pierre, Gemme, Cristal mat", "Dense Shard, Stone, Gem, Crystal"], ["Les Similis de rang moyen ; le Cristal se fait rare avant la Caverne du Souvenir.", "Mid-rank Nobodies; the Crystal is scarce before the Cavern of Remembrance."]),
          at("Nébuleux", ["Éclat, Pierre, Gemme, Cristal nébuleux", "Twilight Shard, Stone, Gem, Crystal"], ["Les Similis, presque exclusivement.", "Nobodies, almost exclusively."]),
          at("Mithril", ["Éclat, Pierre, Gemme, Cristal de mithril", "Mythril Shard, Stone, Gem, Crystal"], ["Surtout dans les coffres — la Forêt des Rêves Bleus en contient plusieurs.", "Mostly in chests — the Hundred Acre Wood holds several."]),
          at("Vitalité", ["Éclat, Pierre, Gemme, Cristal de vitalité", "Bright Shard, Stone, Gem, Crystal"], ["Réservés : ils ne deviennent utilisables qu'au **niveau 2** du Mog.", "Reserved: they only become usable at moogle **level 2**."]),
          at("Fougue", ["Éclat, Pierre, Gemme, Cristal de fougue", "Energy Shard, Stone, Gem, Crystal"], ["Réservés au **niveau 2** du Mog, comme la Vitalité.", "Reserved until moogle **level 2**, like Bright."]),
          at("Sérénité", ["Éclat, Pierre, Gemme, Cristal de sérénité", "Serenity Shard, Stone, Gem, Crystal"], ["Réservés au **niveau 3** du Mog. Les plus difficiles à réunir : ils viennent surtout des récompenses de collecte.", "Reserved until moogle **level 3**. The hardest to gather: they mostly come from collection rewards."]),
          at("Tranquilité", ["Éclat, Pierre, Gemme, Cristal de tranquilité", "Remembrance Shard, Stone, Gem, Crystal"], ["Exclusifs à Final Mix : ils viennent de la Caverne du Souvenir et des Répliques de l'Organisation.", "Final Mix exclusives: from the Cavern of Remembrance and the Organisation replicas."]),
          at("Souvenir", ["Éclat, Pierre, Gemme, Cristal de souvenir", "Tranquility Shard, Stone, Gem, Crystal"], ["Exclusifs à Final Mix, mêmes sources que la Tranquilité.", "Final Mix exclusives, same sources as Remembrance."]),
          at("Rares", ["Orichalque, Orichalque +, Illusion manifeste, Illusion perdue", "Orichalcum, Orichalcum+, Manifest Illusion, Lost Illusion"], ["Les quatre matériaux hors famille. L'**Orichalque +** n'existe qu'en **sept exemplaires** dans le jeu : Forêt des Rêves Bleus, Atlantica, Space Paranoids, Cité du Crépuscule, Forteresse Oubliée, Colisée de l'Olympe, et l'atelier lui-même.", "The four family-less materials. **Orichalcum+** exists in only **seven copies** in the game: Hundred Acre Wood, Atlantica, Space Paranoids, Twilight Town, Hollow Bastion, Olympus Coliseum, and the workshop itself."]),
        ],
      },
      {
        id: "niveaux",
        title: L("Les neuf niveaux du Mog", "The moogle's nine levels"),
        intro: L(
          "Le niveau monte avec l'expérience gagnée en créant. Chaque objet créé rapporte un nombre de points fixé par sa recette : un Bonus PC en vaut 49, la Keyblade Ultima 119.",
          "The level rises with the EXP earned by crafting. Each item crafted is worth a fixed number of points set by its recipe: an AP Boost is worth 49, the Ultima Weapon 119.",
        ),
        columns: [L("Niveau", "Level"), L("Expérience", "EXP"), L("Ce qu'il ouvre", "What it opens")],
        rows: [
          at("1 — Amateur", ["40", "40"], ["Déchiffrer les formules et créer des objets.", "Read recipes and craft items."]),
          at("2 — Novice", ["60", "60"], ["Les ingrédients **Vitalité** et **Fougue** deviennent utilisables.", "**Bright** and **Energy** ingredients become usable."]),
          at("3 — Débutant", ["80", "80"], ["Les ingrédients **Sérénité** deviennent utilisables.", "**Serenity** ingredients become usable."]),
          at("4 — Doué", ["100", "100"], ["Deux emplacements d'ingrédients supplémentaires.", "Two extra ingredient slots."]),
          at("5 — Confirmé", ["200", "200"], ["Les formules de rang **C** coûtent moitié moins.", "Rank **C** recipes cost half as much."]),
          at("6 — Professionnel", ["350", "350"], ["Les formules de rang **B** coûtent moitié moins.", "Rank **B** recipes cost half as much."]),
          at("7 — Expert", ["500", "500"], ["Les formules de rang **A** coûtent moitié moins.", "Rank **A** recipes cost half as much."]),
          at("8 — Maître", ["650", "650"], ["La **Conception libre** : créer des objets sans formule.", "**Free Development**: crafting items without a recipe."]),
          at("9 — Virtuose", ["Le dernier palier", "The final tier"], ["Les formules de rang **S** coûtent moitié moins — Ultima comprise.", "Rank **S** recipes cost half as much — Ultima included."]),
        ],
      },
      {
        id: "formules",
        title: L("Les seize formules", "The sixteen recipes"),
        intro: L(
          "Certains objets ne se créent qu'une fois leur formule en poche. Cinq d'entre elles ne s'obtiennent qu'en battant les **Silhouettes Spectrales**, les six membres disparus de l'Organisation, et une sixième en terminant un puzzle du Carnet de Jiminy.",
          "Some items can only be made once you hold their recipe. Five of them come only from beating the **Absent Silhouettes**, the six vanished Organisation members, and a sixth from completing a Jiminy's Journal puzzle.",
        ),
        collapsed: true,
        columns: [L("Formule", "Recipe"), L("Ce qu'elle permet de créer", "What it lets you make"), L("Où la trouver", "Where to find it")],
        rows: [
          at("Formule de soin", ["La Mégapotion", "The Mega-Potion"], ["Château de la Bête, chambre de Belle.", "Beast's Castle, Belle's Room."]),
          at("Formule d'élixir", ["L'Élixir, puis le Mégalixir", "The Elixir, then the Megalixir"], ["Château Disney, dans la cour.", "Disney Castle, in the Courtyard."]),
          at("Formule de récupération", ["Reflux", "Drive Recovery"], ["Terre des Dragons, sur le sentier.", "Land of Dragons, on the Mountain Trail."]),
          at("Formule de compétences", ["Le Bonus PC, puis le Bonus Magie", "The AP Boost, then the Magic Boost"], ["Forteresse Oubliée, bureau d'Ansem.", "Hollow Bastion, Ansem's Study."]),
          at("Formule de défense", ["Le Bonus Défense, puis le Bonus Attaque", "The Defense Boost, then the Power Boost"], ["Forêt des Rêves Bleus, grotte hantée.", "Hundred Acre Wood, Spooky Cave."]),
          at("Formule rouge", ["Le Ruban rouge, puis le Ruban bleu", "The Red Ribbon, then the Blue Ribbon"], ["Forêt des Rêves Bleus, butte aux étoiles.", "Hundred Acre Wood, Starry Hill."]),
          at("Formule lunaire", ["L'Amulette lunaire, puis l'Amulette stellaire", "The Moon Amulet, then the Star Amulet"], ["Forteresse Oubliée, sur le chantier.", "Hollow Bastion, at the Restoration Site."]),
          at("Formule souveraine", ["Save the Queen, puis Save the Queen +", "Save the Queen, then Save the Queen+"], ["Terre des Dragons, salle du trône.", "Land of Dragons, Throne Room."]),
          at("Formule royale", ["Save the King, puis Save the King +", "Save the King, then Save the King+"], ["Port Royal, allée de débris du cimetière d'épaves.", "Port Royal, Ship Graveyard's Seadrift Row."]),
          at("Formule ultime", ["La Keyblade **Ultima**", "The **Ultima Weapon** Keyblade"], ["Cité du Crépuscule, couloir souterrain du manoir, au niveau de combat 47.", "Twilight Town, the mansion's Basement Corridor, at battle level 47."]),
          at("Formule rare", ["L'Anneau d'attraction et l'Anneau de fortune", "The Draw Ring and the Lucky Ring"], ["En terminant le puzzle **Deux faces**, dans le Carnet de Jiminy.", "By completing the **Duality** puzzle, in Jiminy's Journal."]),
          at("Formule sombre", ["Le Grimoire sombre, puis le Grimoire sombre +", "The Shadow Archive, then Shadow Archive+"], ["En vainquant la Silhouette Spectrale de **Zexion**.", "By beating **Zexion**'s Absent Silhouette."]),
          at("Formule isolante", ["Le Talisman isolant, puis le Talisman isolant +", "The Ice Cream, then Ice Cream+"], ["En vainquant la Silhouette Spectrale de **Larxene**.", "By beating **Larxene**'s Absent Silhouette."]),
          at("Formule de puissance", ["Centurion, puis Centurion +", "Centurion, then Centurion+"], ["En vainquant la Silhouette Spectrale de **Lexaeus**.", "By beating **Lexaeus**'s Absent Silhouette."]),
          at("Formule de pérennité", ["L'Épanouissement, puis l'Épanouissement +", "Full Bloom, then Full Bloom+"], ["En vainquant la Silhouette Spectrale de **Marluxia**.", "By beating **Marluxia**'s Absent Silhouette."]),
          at("Formule d'élucidation", ["La Fierté gelée, puis la Fierté gelée +", "Frost Crown, then Frost Crown+"], ["En vainquant la Silhouette Spectrale de **Vexen**.", "By beating **Vexen**'s Absent Silhouette."]),
        ],
      },
    ],
    steps: [
      {
        id: "recolte",
        title: L("Récolter sans y passer des heures", "Gathering without losing hours to it"),
        image: { src: "/images/encyclopedia/keyblades/sweet-memories.webp", credit: credit("Sweet_Memories_KHII.png"), width: 320, height: 320 },
        text: L(
          "Trois choses multiplient les matériaux lâchés, et elles se cumulent.\n\nLa première est la Keyblade **Doux souvenir**, obtenue à la grotte hantée de la Forêt des Rêves Bleus : elle **double** purement et simplement les objets lâchés. Elle n'a presque aucune force, mais pour la récolte c'est la meilleure arme du jeu.\n\nLa deuxième est la capacité **Chance**, qui se cumule sur les trois personnages. Le multiplicateur de taux vaut 1 + 0,5 × le nombre de Chance actives : avec le maximum de Chance équipées sur Sora, Donald et Dingo, plus les **Anneaux de fortune**, on monte jusqu'à 8,5 fois le taux de base.\n\nLa troisième est simplement de savoir où aller. Les matériaux ne tombent pas au hasard : chaque rang de chaque famille a ses ennemis. Le Carnet de Jiminy tient la liste, et une fois qu'on a obtenu **30 Éclats**, **25 Pierres** ou **20 Gemmes** d'une famille, le matériau se met en vente en boutique — après quoi il suffit d'avoir des munnies.\n\nC'est ce dernier point qui rend la synthèse gérable : l'essentiel du travail consiste à débloquer les ventes, pas à farmer chaque objet un par un.",
          "Three things multiply the materials dropped, and they stack.\n\nThe first is the **Sweet Memories** Keyblade, from the Hundred Acre Wood's Spooky Cave: it plainly **doubles** item drops. It has almost no strength, but for gathering it is the best weapon in the game.\n\nThe second is the **Lucky Lucky** ability, which stacks across all three characters. The drop multiplier is 1 + 0.5 × the number of active Lucky Lucky abilities: with the maximum equipped on Sora, Donald and Goofy, plus **Lucky Rings**, you reach 8.5 times the base rate.\n\nThe third is simply knowing where to go. Materials do not drop at random: each rank of each family has its enemies. Jiminy's Journal keeps the list, and once you have obtained **30 Shards**, **25 Stones** or **20 Gems** of a family, that material goes on sale in shops — after which all you need is munny.\n\nThat last point is what makes synthesis manageable: most of the work is unlocking the sales, not farming each item one by one.",
        ),
      },
      {
        id: "ultima",
        title: L("La Keyblade Ultima, et ses treize Orichalque +", "The Ultima Weapon, and its thirteen Orichalcum+"),
        image: { src: "/images/encyclopedia/keyblades/ultima-weapon.webp", credit: credit("Ultima_Weapon_KH.png"), width: 320, height: 320 },
        text: L(
          "La **Formule ultime** attend dans le couloir souterrain du manoir de la Cité du Crépuscule, accessible au niveau de combat 47 — c'est-à-dire très tard. La recette demande ensuite **treize Orichalque +**, un Orichalque, un Cristal de mithril, un Cristal mat, un Cristal nébuleux et trois Cristaux de sérénité.\n\nOr le jeu ne contient que **sept Orichalque +**. Un dans la Forêt des Rêves Bleus (le lancer de pot), un à Atlantica (le dernier acte), un à Space Paranoids, un à la Cité du Crépuscule, un à la Forteresse Oubliée, un au Colisée de l'Olympe (la Coupe de la Destinée), et un à l'atelier des Mogs lui-même, en récompense de soixante types d'ingrédients obtenus.\n\nLes six manquants se **synthétisent**, ce qui suppose d'avoir monté le Mog assez haut et réuni les matériaux nécessaires. Autrement dit : l'Ultima n'est pas un objet à fabriquer, c'est ce que l'on obtient quand l'atelier est terminé.\n\nLe conseil pratique tient en une ligne : montez le Mog au **niveau 9** avant de tenter l'Ultima. Les formules de rang S y coûtent moitié moins, et c'est précisément le rang de la Formule ultime.",
          "The **Ultima Recipe** waits in the Twilight Town mansion's Basement Corridor, reachable at battle level 47 — that is, very late. The recipe then asks for **thirteen Orichalcum+**, one Orichalcum, one Mythril Crystal, one Dense Crystal, one Twilight Crystal and three Serenity Crystals.\n\nBut the game contains only **seven Orichalcum+**. One in the Hundred Acre Wood (the pot toss), one in Atlantica (the last act), one in Space Paranoids, one in Twilight Town, one in Hollow Bastion, one at Olympus Coliseum (the Goddess of Fate Cup), and one at the moogle workshop itself, as the reward for obtaining sixty ingredient types.\n\nThe missing six are **synthesised**, which assumes the moogle has been levelled high enough and the materials gathered. In other words: Ultima is not an item you build, it is what you get when the workshop is finished.\n\nThe practical advice fits on one line: raise the moogle to **level 9** before attempting Ultima. Rank S recipes cost half as much there, and rank S is exactly what the Ultima Recipe is.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Palier atteint", "Milestone reached"),
      intro: L(
        "L'atelier récompense la collecte elle-même, indépendamment de ce qu'on fabrique. Ces paliers tombent tout seuls en jouant, à condition de passer voir le Mog de temps en temps.",
        "The workshop rewards the gathering itself, regardless of what you craft. These milestones fall on their own as you play, provided you drop in on the moogle now and then.",
      ),
      rows: [
        { tier: L("1 type d'ingrédient", "1 ingredient type"), reward: L("Élixir", "Elixir") },
        { tier: L("5 types d'ingrédients", "5 ingredient types"), reward: L("Synthèse en Conception libre", "Free Development synthesis") },
        { tier: L("15 types d'ingrédients", "15 ingredient types"), reward: L("Mégalixir", "Megalixir") },
        { tier: L("20 types d'ingrédients", "20 ingredient types"), reward: L("Conception libre 2", "Free Development 2") },
        { tier: L("10, 25, 35 et 45 types", "10, 25, 35 and 45 types"), reward: L("Un **Bonus PC** à chaque palier", "An **AP Boost** at each milestone") },
        { tier: L("30, 40 et 50 types", "30, 40 and 50 types"), reward: L("Bonus Défense, Bonus Attaque, Bonus Magie", "Defense Boost, Power Boost, Magic Boost") },
        { tier: L("55 puis 60 types", "55 then 60 types"), reward: L("Orichalque, puis **Orichalque +** — le septième du jeu", "Orichalcum, then **Orichalcum+** — the game's seventh") },
        { tier: L("Tous les ingrédients de rang A, puis S", "All rank A ingredients, then rank S"), reward: L("Illusion manifeste, puis Illusion perdue", "Manifest Illusion, then Lost Illusion") },
        { tier: L("50, 100, 250 et 500 ingrédients au total", "50, 100, 250 and 500 ingredients in total"), reward: L("Éclat, Pierre, Gemme puis **Cristal de sérénité**", "Serenity Shard, Stone, Gem then **Crystal**") },
      ],
      note: L(
        "Les matériaux **Sérénité** sont les plus rares du jeu et ne s'achètent jamais : ils viennent presque uniquement de ces paliers, des coupes du Colisée et des puzzles. Comme la recette de l'Ultima en demande trois Cristaux, c'est souvent eux qui décident du moment où la Keyblade devient accessible.",
        "**Serenity** materials are the rarest in the game and never go on sale: they come almost entirely from these milestones, the Coliseum cups and the puzzles. Since the Ultima recipe asks for three Crystals, they usually decide when the Keyblade becomes reachable.",
      ),
    },
  },
  {
    id: "mini-jeux",
    title: L("Les mini-jeux et les missions", "The mini-games and missions"),
    tagline: L(
      "Vingt-trois épreuves réparties dans neuf mondes, du Struggle au Light Cycle.",
      "Twenty-three challenges across nine worlds, from Struggle to the Light Cycle.",
    ),
    entry: "twilight-town",
    status: "done",
    intro: L(
      "Les mini-jeux de Kingdom Hearts II ne sont pas une récréation facultative : ils remplissent une section entière du Carnet de Jiminy, et donc comptent pour la fin secrète. Chacun demande un **objectif chiffré** — un temps, un score, une marge — et c'est cet objectif, pas la simple participation, qui valide l'épreuve.\n\nIls se répartissent en trois familles. Les **petits boulots** de la Cité du Crépuscule, six épreuves lancées depuis les panneaux d'annonces, qui reprennent ceux du prologue. Les **sessions de skate**, présentes dans cinq mondes, toutes bâties sur le même principe — un parcours, des figures, un score ou un temps. Et les **missions**, qui ne sont pas des mini-jeux du tout mais des combats facultatifs : Séphiroth, la Volonté Persistante, les Répliques de l'Organisation.\n\nUn avertissement qui évite une déception : les performances réalisées **avec Roxas pendant le prologue ne comptent pas**. Les six petits boulots de la Cité du Crépuscule sont à refaire avec Sora, plus tard dans le jeu.\n\nPresque tous se rejouent à volonté, et seul le meilleur résultat est retenu. Il n'y a donc rien à rater définitivement ici — seulement du temps à y passer.",
      "Kingdom Hearts II's mini-games are not optional light relief: they fill an entire section of Jiminy's Journal, and therefore count towards the secret ending. Each asks for a **numbered target** — a time, a score, a margin — and it is that target, not mere participation, that clears the challenge.\n\nThey fall into three families. Twilight Town's **odd jobs**, six challenges started from the notice boards, which reprise the prologue's. The **skateboard sessions**, present in five worlds, all built on the same principle — a course, some tricks, a score or a time. And the **missions**, which are not mini-games at all but optional fights: Sephiroth, the Lingering Will, the Organisation replicas.\n\nOne warning that saves a disappointment: performances achieved **with Roxas during the prologue do not count**. Twilight Town's six odd jobs must be done again with Sora, later in the game.\n\nNearly all of them replay freely, and only your best result is kept. So there is nothing permanently missable here — only time to spend.",
    ),
    tables: [
      {
        id: "crepuscule",
        title: L("Cité du Crépuscule — les petits boulots et le Struggle", "Twilight Town — the odd jobs and Struggle"),
        intro: L(
          "Les six premiers se lancent depuis les panneaux d'annonces de la rue de la Gare et du Circuit du tram. Rappel : ce que Roxas a fait pendant le prologue ne compte pas.",
          "The first six start from the notice boards on Station Heights and the Tram Common. Reminder: what Roxas did during the prologue does not count.",
        ),
        columns: [L("Épreuve", "Challenge"), L("Où la lancer", "Where to start it"), L("Objectif", "Target")],
        rows: [
          at("La tournée du facteur", ["Rue de la Gare, panneau d'annonces", "Station Heights, notice board"], ["Terminer en moins de 14 secondes.", "Finish in under 14 seconds."]),
          at("Monte-charge", ["Rue de la Gare, panneau d'annonces", "Station Heights, notice board"], ["Terminer en moins de 15 secondes.", "Finish in under 15 seconds."]),
          at("Tour d'adresse", ["Rue de la Gare, panneau d'annonces", "Station Heights, notice board"], ["Marquer plus de 100 points.", "Score more than 100 points."]),
          at("Collage d'affiches", ["Circuit du tram, panneau d'annonces", "Tram Common, notice board"], ["Terminer en moins de 30 secondes.", "Finish in under 30 seconds."]),
          at("Extermination", ["Circuit du tram, panneau d'annonces", "Tram Common, notice board"], ["Terminer en moins de 10 secondes.", "Finish in under 10 seconds."]),
          at("Déblayage", ["Circuit du tram, panneau d'annonces", "Tram Common, notice board"], ["Terminer avec moins de 6 points — ici, le score le plus bas gagne.", "Finish with fewer than 6 points — here the lowest score wins."]),
          at("Session de skate", ["Rue de la Gare, en parlant à la femme près de la boutique", "Station Heights, by talking to the woman near the shop"], ["Marquer plus de 1 000 points.", "Score more than 1,000 points."]),
          at("Le Struggle : Hayner", ["Place des fêtes, panneau orange au mur", "Sandlot, orange board on the wall"], ["Gagner avec plus de 100 points d'écart.", "Win by more than 100 points."]),
          at("Le Struggle : Setzer", ["Place des fêtes, panneau orange au mur", "Sandlot, orange board on the wall"], ["Gagner avec plus de 100 points d'écart.", "Win by more than 100 points."]),
          at("Le Struggle : Seifer", ["Place des fêtes, panneau orange au mur", "Sandlot, orange board on the wall"], ["Gagner avec plus de 200 points d'écart.", "Win by more than 200 points."]),
        ],
      },
      {
        id: "autres",
        title: L("Les autres mondes", "The other worlds"),
        intro: L(
          "Treize épreuves de plus, dont quatre qui sont en réalité des combats facultatifs. Les sessions de skate suivent toutes le même principe : un parcours, des figures, et un score ou un temps à battre.",
          "Thirteen more challenges, four of which are really optional fights. The skateboard sessions all follow the same principle: a course, some tricks, and a score or time to beat.",
        ),
        columns: [L("Épreuve", "Challenge"), L("Monde et point de départ", "World and starting point"), L("Objectif", "Target")],
        rows: [
          at("Skate festival", ["Forteresse Oubliée — centre-ville, en parlant à Picsou", "Hollow Bastion — Marketplace, by talking to Scrooge"], ["Marquer plus de 200 points.", "Score more than 200 points."]),
          at("Missions", ["Forteresse Oubliée — Poterne, puis Précipice des Ténèbres", "Hollow Bastion — Postern, then Dark Depths"], ["Retrouver les YuRiPa, puis affronter **Séphiroth**.", "Find the YRP, then face **Sephiroth**."]),
          at("Mission", ["Forteresse Oubliée — jardin de l'Assemblée", "Hollow Bastion — Garden of Assemblage"], ["Vaincre les **Répliques de l'Organisation XIII**.", "Beat the **Organisation XIII data replicas**."]),
          at("L'entraînement de Phil", ["Colisée de l'Olympe — portes du Colisée, après le combat contre l'Hydre", "Olympus Coliseum — Coliseum Gates, after the Hydra fight"], ["Essayer le mode entraînement, puis le mode maniaque, et marquer plus de 1 000 points.", "Try training mode, then maniac mode, and score more than 1,000 points."]),
          at("Les coupes Paradoxe", ["Colisée de l'Olympe — entrée des Enfers, antre d'Hadès", "Olympus Coliseum — Underworld Entrance, Hades' Chamber"], ["Remporter les coupes en dépassant leur objectif de points.", "Win the cups while beating their points target."]),
          at("Un mystérieux portail", ["Château Disney — hall de la Pierre Angulaire", "Disney Castle — Hall of the Cornerstone"], ["Vaincre la **Volonté Persistante**.", "Beat the **Lingering Will**."]),
          at("Mission", ["Agrabah — épreuve de la Caverne aux Merveilles", "Agrabah — the Cave of Wonders trial"], ["Retenter l'épreuve.", "Retry the trial."]),
          at("Tapis volant", ["Agrabah — salle dévastée", "Agrabah — Ruined Chamber"], ["Marquer plus de 65 points.", "Score more than 65 points."]),
          at("Skate des sables", ["Agrabah — boutique du marchand", "Agrabah — the merchant's shop"], ["Marquer plus de 10 points.", "Score more than 10 points."]),
          at("Confection de cadeaux", ["Ville d'Halloween — usine de jouets, en parlant au petit lutin de la salle d'emballage", "Halloween Town — Toy Factory, by talking to the little elf in the Wrapping Room"], ["Marquer plus de 150 points.", "Score more than 150 points."]),
          at("Skate à l'usine", ["Ville d'Halloween — colline de Noël", "Halloween Town — Candy Cane Lane"], ["Marquer plus de 1 000 points.", "Score more than 1,000 points."]),
          at("Skate contre la montre", ["Port Royal — remparts, en parlant à Will Turner", "Port Royal — the Ramparts, by talking to Will Turner"], ["Terminer en moins de 40 secondes — 23 cristaux à ramasser.", "Finish in under 40 seconds — 23 crystals to collect."]),
          at("Light Cycle", ["Space Paranoids — terminal de l'ordinateur", "Space Paranoids — the computer terminal"], ["Marquer plus de 30 points.", "Score more than 30 points."]),
        ],
      },
    ],
    steps: [
      {
        id: "struggle",
        title: L("Le Struggle : trois adversaires, deux logiques", "Struggle: three opponents, two logics"),
        image: { src: "/images/walkthrough/kh2-cite-du-crepuscule-2.webp", credit: credit("Twilight_Town_from_KH2_gameplay_2.png"), width: 480, height: 270 },
        text: L(
          "Le Struggle ne se gagne pas en frappant : il se gagne en **ramassant**. Chaque coup porté fait tomber des sphères bleues, et ce sont elles qui comptent — un adversaire qu'on matraque sans récupérer ses sphères ne fait pas monter le score.\n\nContre **Hayner** et **Setzer**, la marge demandée est de 100 points. Elle tombe naturellement si l'on prend l'habitude de frapper une ou deux fois puis de reculer pour ramasser, plutôt que d'enchaîner les combos.\n\nContre **Seifer**, il en faut 200, et sa garde change tout : il pare les attaques frontales et contre-attaque. Le rythme qui marche est d'attendre son geste, d'esquiver sur le côté, puis de frapper pendant sa récupération. La Roulade, si vous avez la Forme Souvenance montée, rend le combat nettement plus simple.\n\nUn détail qui fait gagner du temps : le combat se relance depuis le panneau orange sans aucune scène intermédiaire. Autant enchaîner les tentatives jusqu'à ce que la marge tombe.",
          "Struggle is not won by hitting: it is won by **collecting**. Every blow landed knocks loose blue orbs, and those are what count — an opponent you pummel without picking up his orbs does not raise your score.\n\nAgainst **Hayner** and **Setzer**, the required margin is 100 points. It falls naturally if you get into the habit of hitting once or twice then backing off to collect, rather than chaining combos.\n\nAgainst **Seifer**, it takes 200, and his guard changes everything: he parries frontal attacks and counters. The rhythm that works is to wait for his move, dodge to the side, then strike during his recovery. Dodge Roll, if you have Limit Form levelled, makes the fight markedly simpler.\n\nOne time-saving detail: the fight restarts from the orange board with no cutscene in between. You may as well chain attempts until the margin falls.",
        ),
      },
      {
        id: "skate",
        title: L("Les sessions de skate, et le seul vrai piège", "The skateboard sessions, and the only real trap"),
        text: L(
          "Cinq mondes proposent une session de skate, et toutes marchent pareil : un parcours, des figures qui rapportent, et un multiplicateur qui monte tant qu'on enchaîne sans toucher le sol à l'arrêt.\n\nLes objectifs varient énormément — **10 points** au skate des sables d'Agrabah contre **1 000** à la Cité du Crépuscule et à l'usine de la Ville d'Halloween. Ce n'est pas une erreur : le skate des sables est une simple formalité, les deux autres demandent de comprendre le système de multiplicateur.\n\nLe principe qui fait tout : une figure vaut peu, une **suite** de figures vaut beaucoup. Cherchez les rampes et les rails qui s'enchaînent, et acceptez de finir le parcours avec un seul long enchaînement plutôt que dix courts.\n\nLe seul vrai piège est le skate contre la montre de **Port Royal** : 23 cristaux en moins de 40 secondes, sur un parcours qu'il faut connaître. Ce n'est pas une question d'adresse mais d'itinéraire — faites un premier tour sans chronomètre en tête pour repérer les cristaux, le second passage suffit généralement.",
          "Five worlds offer a skateboard session, and they all work the same: a course, tricks that pay, and a multiplier that climbs as long as you chain without coming to a stop.\n\nThe targets vary enormously — **10 points** for Agrabah's sand skate against **1,000** in Twilight Town and Halloween Town's factory. That is not a mistake: the sand skate is a formality, the other two require understanding the multiplier.\n\nThe principle that decides everything: one trick is worth little, a **run** of tricks is worth a lot. Look for ramps and rails that link up, and accept finishing the course with one long chain rather than ten short ones.\n\nThe only real trap is **Port Royal**'s time trial: 23 crystals in under 40 seconds, on a course you have to know. It is not a question of skill but of route — take a first lap without worrying about the clock to spot the crystals; the second run usually does it.",
        ),
      },
      {
        id: "missions",
        title: L("Les « missions » : trois combats déguisés", "The \"missions\": three fights in disguise"),
        text: L(
          "Trois entrées de la liste ne sont pas des mini-jeux mais des affrontements facultatifs, parmi les plus durs du jeu. Ils apparaissent ici parce que le Carnet les compte dans la même section.\n\n**Séphiroth** attend au Précipice des Ténèbres, à la Forteresse Oubliée, après avoir retrouvé les YuRiPa à la Poterne. Il ne se débloque qu'une fois Illusiopolis franchie.\n\nLa **Volonté Persistante** dort derrière le mystérieux portail du hall de la Pierre Angulaire, au Château Disney, et ne s'ouvre qu'une fois le jeu terminé et les Répliques de l'Organisation vaincues.\n\nLes **Répliques de l'Organisation XIII** occupent le jardin de l'Assemblée, à la Forteresse Oubliée : treize combats contre des données, tous plus durs que l'original correspondant.\n\nCes trois-là ont leur propre page dans cette soluce — ils ne se préparent pas comme un mini-jeu, et rien de ce qui précède ne sert à les aborder.",
          "Three entries on the list are not mini-games but optional confrontations, among the hardest in the game. They appear here because the Journal counts them in the same section.\n\n**Sephiroth** waits at the Dark Depths in Hollow Bastion, after finding the YRP at the Postern. He only unlocks once The World That Never Was is behind you.\n\nThe **Lingering Will** sleeps behind the mysterious portal in Disney Castle's Hall of the Cornerstone, and only opens once the game is finished and the Organisation replicas beaten.\n\nThe **Organisation XIII replicas** occupy Hollow Bastion's Garden of Assemblage: thirteen data fights, each harder than the original.\n\nThose three have their own page in this guide — they are not prepared for like a mini-game, and nothing above helps you approach them.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Famille d'épreuves", "Family of challenges"),
      intro: L(
        "Ce que chaque famille apporte réellement. Les mini-jeux ne donnent presque pas d'objets : leur valeur est ailleurs.",
        "What each family actually brings. The mini-games hand out almost no items: their value is elsewhere.",
      ),
      rows: [
        { tier: L("Les six petits boulots", "The six odd jobs"), reward: L("Des munnies, et surtout la section du Carnet de Jiminy. À refaire avec Sora : le prologue ne compte pas", "Munny, and above all the Journal section. Must be redone with Sora: the prologue does not count") },
        { tier: L("Le Struggle", "Struggle"), reward: L("Une progression du Carnet par adversaire ; Seifer demande 200 points d'écart", "One Journal entry per opponent; Seifer needs a 200-point margin") },
        { tier: L("Les cinq sessions de skate", "The five skateboard sessions"), reward: L("Progression du Carnet. Objectifs de 10 à 1 000 points selon le monde", "Journal progress. Targets from 10 to 1,000 points depending on the world") },
        { tier: L("Tapis volant et confection de cadeaux", "Magic Carpet and gift wrapping"), reward: L("Progression du Carnet — 65 points et 150 points respectivement", "Journal progress — 65 and 150 points respectively") },
        { tier: L("Light Cycle", "Light Cycle"), reward: L("Progression du Carnet — plus de 30 points", "Journal progress — more than 30 points") },
        { tier: L("Les trois missions", "The three missions"), reward: L("Séphiroth, la Volonté Persistante et les Répliques — les combats facultatifs les plus durs du jeu", "Sephiroth, the Lingering Will and the replicas — the hardest optional fights in the game") },
      ],
      note: L(
        "Toutes les épreuves se rejouent, et seul le meilleur résultat compte. La section « mini-jeux » du Carnet de Jiminy fait partie des conditions de la fin secrète : c'est la seule raison sérieuse de toutes les terminer.",
        "Every challenge replays, and only your best result counts. The Journal's mini-games section is one of the secret-ending conditions: that is the only serious reason to finish them all.",
      ),
    },
  },
  {
    id: "puzzles",
    title: L("Les puzzles", "The puzzles"),
    tagline: L(
      "Six puzzles de Final Mix, 144 pièces cachées dans quinze mondes.",
      "Final Mix's six puzzles, 144 pieces hidden across fifteen worlds.",
    ),
    entry: "jiminy-cricket",
    status: "done",
    intro: L(
      "Les puzzles sont l'ajout de Final Mix le plus discret et le plus étalé : **144 pièces** disséminées dans quinze mondes, à ramasser au fil de la partie, puis à assembler dans le Carnet de Jiminy pour former six illustrations de la série.\n\nChaque pièce apparaît dans le décor sous la forme d'une petite **couronne argentée**, presque toujours en hauteur ou dans un recoin. C'est là que les puzzles rejoignent les formes de Fusion : sans Super Saut, Double Saut et Vol plané, une bonne partie des pièces reste hors d'atteinte. Autrement dit, les puzzles ne se font pas en une fois — ils se ramassent en repassant, une fois les capacités de croissance obtenues.\n\nL'assemblage lui-même se fait depuis le Carnet : on sélectionne une pièce, on la déplace, on la fait **pivoter sur elle-même** jusqu'à ce qu'elle trouve sa place. Le Carnet tient aussi le compte des pièces manquantes **monde par monde**, ce qui évite de fouiller à l'aveugle : c'est la première chose à consulter avant de partir en chercher.\n\nQuatre puzzles demandent 12 pièces, deux en demandent 48. Les récompenses vont du Bonus PC à l'**Anneau souverain** et au **Ruban jaune**, et surtout à la **Formule rare**, qui ouvre la synthèse de l'Anneau d'attraction et de l'Anneau de fortune.",
      "The puzzles are Final Mix's most discreet and most spread-out addition: **144 pieces** scattered across fifteen worlds, to be picked up as you play, then assembled in Jiminy's Journal to form six illustrations from the series.\n\nEach piece appears in the scenery as a small **silver crown**, almost always high up or tucked into a corner. That is where the puzzles meet the Drive Forms: without High Jump, Aerial Dodge and Glide, a good share of the pieces stays out of reach. In other words, the puzzles are not done in one pass — they are gathered on return trips, once the growth abilities are yours.\n\nThe assembly itself happens in the Journal: you select a piece, move it, and **rotate it** until it finds its place. The Journal also tracks missing pieces **world by world**, which saves blind searching: it is the first thing to check before setting off.\n\nFour puzzles need 12 pieces, two need 48. The rewards run from an AP Boost to the **Sovereign Ring** and the **Yellow Ribbon**, and above all to the **Rare Recipe**, which unlocks synthesis of the Draw Ring and the Lucky Ring.",
    ),
    tables: [
      {
        id: "puzzles",
        title: L("Les six puzzles", "The six puzzles"),
        intro: L(
          "Les quatre petits puzzles se terminent bien avant les deux grands : douze pièces se réunissent presque sans y penser, quarante-huit demandent d'avoir ratissé la moitié du jeu.",
          "The four small puzzles are finished long before the two large ones: twelve pieces come together almost without trying, forty-eight require having combed half the game.",
        ),
        columns: [L("Puzzle", "Puzzle"), L("Nombre de pièces", "Pieces"), L("Récompense", "Reward")],
        rows: [
          at("Éveil", ["12 pièces", "12 pieces"], ["Un **Bonus PC**.", "An **AP Boost**."]),
          at("Cœur", ["12 pièces", "12 pieces"], ["Un **Cristal de sérénité** — l'un des matériaux les plus rares du jeu.", "A **Serenity Crystal** — one of the rarest materials in the game."]),
          at("Deux faces", ["12 pièces", "12 pieces"], ["La **Formule rare**, qui ouvre la synthèse de l'Anneau d'attraction et de l'Anneau de fortune.", "The **Rare Recipe**, unlocking Draw Ring and Lucky Ring synthesis."]),
          at("Bord", ["12 pièces", "12 pieces"], ["Une **Illusion manifeste**.", "A **Manifest Illusion**."]),
          at("Aube", ["48 pièces", "48 pieces"], ["L'**Anneau souverain**.", "The **Sovereign Ring**."]),
          at("Crépuscule", ["48 pièces", "48 pieces"], ["Le **Ruban jaune**.", "The **Yellow Ribbon**."]),
        ],
      },
      {
        id: "repartition",
        title: L("Les 144 pièces, monde par monde", "The 144 pieces, world by world"),
        intro: L(
          "Combien de pièces chaque monde contient. Le Carnet de Jiminy affiche le même décompte en cours de partie, en indiquant combien il en reste : consultez-le avant de partir, il évite de fouiller un monde déjà complet.",
          "How many pieces each world holds. Jiminy's Journal shows the same count in-game, with how many remain: check it before setting off, it saves combing a world you have already finished.",
        ),
        collapsed: true,
        columns: [L("Monde", "World"), L("Pièces", "Pieces"), L("Ce qu'il faut pour les atteindre", "What you need to reach them")],
        rows: [
          at("Forteresse Oubliée / Jardin Radieux", ["23 pièces", "23 pieces"], ["Le monde le plus fourni. Beaucoup de pièces sur les toits du centre-ville et dans la Caverne du Souvenir : Vol plané indispensable.", "The richest world. Many pieces on the Marketplace rooftops and in the Cavern of Remembrance: Glide is essential."]),
          at("Cité du Crépuscule", ["20 pièces", "20 pieces"], ["Une bonne moitié se prend dès le Super Saut ; les dernières attendent le manoir et le Vol plané.", "A good half are reachable with High Jump alone; the last ones wait on the mansion and Glide."]),
          at("Agrabah", ["14 pièces", "14 pieces"], ["Les ruines ensevelies et la Caverne aux Merveilles en concentrent l'essentiel.", "The Ruins and the Cave of Wonders hold most of them."]),
          at("Port Royal", ["13 pièces", "13 pieces"], ["Beaucoup en hauteur sur les navires : Double Saut au minimum.", "Many high up on the ships: Aerial Dodge at minimum."]),
          at("Terre des Dragons", ["10 pièces", "10 pieces"], ["Le sentier et le sommet de la montagne.", "The Mountain Trail and the summit."]),
          at("Terre des Lions", ["10 pièces", "10 pieces"], ["Les falaises et les hauteurs du Rocher du Roi.", "The cliffs and the heights of Pride Rock."]),
          at("Château de la Bête", ["9 pièces", "9 pieces"], ["Le grand hall et les couloirs de l'étage.", "The Entrance Hall and the upper corridors."]),
          at("Colisée de l'Olympe", ["9 pièces", "9 pieces"], ["Les Enfers en contiennent la majorité.", "The Underworld holds most of them."]),
          at("Ville d'Halloween", ["8 pièces", "8 pieces"], ["Réparties entre la ville, le cimetière et l'usine de jouets.", "Split between the town, the graveyard and the Toy Factory."]),
          at("Illusiopolis", ["7 pièces", "7 pieces"], ["Ne se ramassent qu'en revenant après la fin du jeu.", "Only collectible by returning after the game ends."]),
          at("Forêt des Rêves Bleus", ["6 pièces", "6 pieces"], ["Une par zone environ, toutes accessibles sans capacité particulière.", "Roughly one per area, all reachable without any special ability."]),
          at("Château Disney", ["5 pièces", "5 pieces"], ["La bibliothèque, la cour et le hall de la Pierre Angulaire.", "The Library, the Courtyard and the Hall of the Cornerstone."]),
          at("Space Paranoids", ["4 pièces", "4 pieces"], ["Toutes dans les couloirs de données et la salle du cœur énergétique.", "All in the data corridors and the energy core room."]),
          at("Atlantica", ["3 pièces", "3 pieces"], ["Une au jardin sous-marin, deux au palais de Triton — à ramasser en nageant.", "One in the Undersea Courtyard, two at Triton's Palace — collected while swimming."]),
          at("Rivière intemporelle", ["3 pièces", "3 pieces"], ["Facilement manquables : le monde se ferme définitivement après la seconde visite.", "Easily missed: the world closes for good after the second visit."]),
        ],
      },
    ],
    steps: [
      {
        id: "methode",
        title: L("La méthode qui évite de tout refaire", "The method that saves doing it all twice"),
        text: L(
          "La faute classique est de chercher les pièces trop tôt. Les couronnes sont presque toutes posées en hauteur, et sans les capacités de croissance des formes de Fusion, on passe dessous sans pouvoir monter — puis on revient, et on refouille le même monde.\n\nL'ordre qui marche est l'inverse : **jouer l'histoire, monter les formes, puis ratisser**. Le **Super Saut** (Forme Vaillance, niveau 3) ouvre la première moitié des pièces, le **Double Saut** (Forme Maîtrise) la plupart des autres, et le **Vol plané** (Forme Suprême) le reste, notamment les toits de la Forteresse Oubliée. En pratique, une seule passe suffit une fois le Vol plané acquis.\n\nDeuxième réflexe : le Carnet de Jiminy affiche le nombre de pièces restantes **par monde**. Consultez-le avant chaque déplacement. Un monde affiché complet n'a plus rien à donner, et c'est autant de temps épargné.\n\nTroisième réflexe : deux mondes se ferment. La **Rivière intemporelle** disparaît définitivement après la seconde visite — ses trois pièces sont les seules vraiment manquables du jeu. **Illusiopolis** n'est accessible qu'en y retournant après la fin, ce qui n'est pas un problème mais surprend.",
          "The classic mistake is hunting pieces too early. The crowns are nearly all placed high up, and without the Drive Forms' growth abilities you walk underneath without being able to climb — then come back and comb the same world again.\n\nThe order that works is the reverse: **play the story, level the forms, then sweep**. **High Jump** (Valor, level 3) opens the first half of the pieces, **Aerial Dodge** (Master) most of the rest, and **Glide** (Final) the remainder, notably Hollow Bastion's rooftops. In practice a single pass is enough once Glide is yours.\n\nSecond reflex: Jiminy's Journal shows the number of pieces remaining **per world**. Check it before every trip. A world shown as complete has nothing left to give, and that is time saved.\n\nThird reflex: two worlds close. The **Timeless River** disappears for good after the second visit — its three pieces are the only truly missable ones in the game. **The World That Never Was** is only reachable by returning after the ending, which is not a problem but does surprise people.",
        ),
      },
      {
        id: "assemblage",
        title: L("Assembler, et par quoi commencer", "Assembling, and where to start"),
        text: L(
          "L'assemblage se fait depuis le Carnet de Jiminy, à n'importe quel point de sauvegarde. Une pièce se sélectionne, se déplace, et se **fait pivoter** : c'est la rotation qui bloque la plupart des gens, parce qu'une pièce à l'endroit et la même retournée se ressemblent beaucoup.\n\nLes pièces ne sont pas attribuées d'avance à un puzzle : c'est en les posant qu'on découvre où elles vont. Commencez donc par les **quatre puzzles de 12 pièces** — Éveil, Cœur, Deux faces et Bord — qui se bouclent bien avant les autres et donnent les récompenses les plus utiles. **Deux faces** en particulier mérite d'être visé tôt : sa Formule rare ouvre la synthèse de l'Anneau d'attraction, qui sert ensuite partout.\n\nLes deux grands, **Aube** et **Crépuscule**, demandent 48 pièces chacun, soit les deux tiers de la collecte. Ils se terminent naturellement en dernier, une fois les quinze mondes ratissés — et leurs récompenses, l'Anneau souverain et le Ruban jaune, sont des accessoires de fin de partie.\n\nRien ici n'est difficile. C'est le contenu le plus long du jeu à la seule force de la patience, et il ne demande ni niveau ni adresse : seulement de regarder en l'air.",
          "Assembly happens in Jiminy's Journal, at any save point. You select a piece, move it, and **rotate it**: rotation is what trips most people up, because a piece the right way round and the same piece flipped look very alike.\n\nPieces are not assigned to a puzzle in advance: you find out where they go by placing them. So start with the **four 12-piece puzzles** — Awakening, Heart, Duality and Frontier — which finish long before the others and give the most useful rewards. **Duality** in particular is worth targeting early: its Rare Recipe unlocks the Draw Ring, which helps everywhere afterwards.\n\nThe two large ones, **Daylight** and **Sunset**, need 48 pieces each, two thirds of the whole collection. They naturally finish last, once all fifteen worlds are combed — and their rewards, the Sovereign Ring and the Yellow Ribbon, are endgame accessories.\n\nNothing here is hard. It is the longest stretch of content in the game on patience alone, and it asks for neither level nor skill: only for looking up.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Puzzle terminé", "Puzzle completed"),
      intro: L(
        "Ce que chaque puzzle rapporte, dans l'ordre où ils se terminent naturellement.",
        "What each puzzle pays out, in the order they naturally finish.",
      ),
      rows: [
        { tier: L("Éveil — 12 pièces", "Awakening — 12 pieces"), reward: L("Bonus PC", "AP Boost") },
        { tier: L("Cœur — 12 pièces", "Heart — 12 pieces"), reward: L("Cristal de sérénité", "Serenity Crystal") },
        { tier: L("Deux faces — 12 pièces", "Duality — 12 pieces"), reward: L("**Formule rare** — Anneau d'attraction et Anneau de fortune", "**Rare Recipe** — Draw Ring and Lucky Ring") },
        { tier: L("Bord — 12 pièces", "Frontier — 12 pieces"), reward: L("Illusion manifeste", "Manifest Illusion") },
        { tier: L("Aube — 48 pièces", "Daylight — 48 pieces"), reward: L("Anneau souverain", "Sovereign Ring") },
        { tier: L("Crépuscule — 48 pièces", "Sunset — 48 pieces"), reward: L("Ruban jaune", "Yellow Ribbon") },
      ],
      note: L(
        "Les six puzzles terminés remplissent la section correspondante du Carnet de Jiminy, l'une des conditions de la fin secrète. Attention à la Rivière intemporelle : ses trois pièces sont les seules définitivement manquables du jeu.",
        "All six puzzles completed fill the matching Journal section, one of the secret-ending conditions. Mind the Timeless River: its three pieces are the only permanently missable ones in the game.",
      ),
    },
  },
  {
    id: "mushroom-xiii",
    title: L("Les Bolets XIII", "The Mushroom XIII"),
    tagline: L(
      "Treize champignons, treize défis chronométrés, et la Keyblade Treize Fongus.",
      "Thirteen mushrooms, thirteen timed challenges, and the Mushroom Keyblade.",
    ),
    entry: "mushroom-xiii",
    status: "done",
    intro: L(
      "Les Bolets XIII sont l'un des ajouts les plus retors de Final Mix. Treize champignons portant le manteau de l'Organisation, cachés un par monde, qui ne se battent pas : chacun pose une épreuve — frapper un certain nombre de fois, encaisser sans broncher, ramasser assez de sphères, le trouver parmi ses doubles — et se contente de noter la performance.\n\nIls ne se débloquent qu'**après la fin du jeu**, une fois la Caverne du Souvenir ouverte. Chaque Bolet satisfait rapporte une arme : un **bâton pour Donald** aux numéros impairs, un **bouclier pour Dingo** aux numéros pairs. Les treize réunis donnent la Keyblade **Treize Fongus** et la **Preuve de tranquilité**.\n\nCe qui les rend difficiles n'est pas la puissance mais la **précision**. Frapper 99 fois en moins de dix-neuf secondes, ou 85 fois sans jamais retomber au sol, demande la bonne Keyblade et les bonnes capacités bien plus qu'un niveau élevé. C'est la quête où l'on comprend vraiment à quoi sert **Combo négatif**.\n\nUn Bolet raté se relance immédiatement : il suffit de le frapper à nouveau. Rien n'est manquable, et rien n'oblige à les faire dans l'ordre.",
      "The Mushroom XIII are one of Final Mix's most awkward additions. Thirteen mushrooms in Organisation coats, one hidden per world, who do not fight: each sets a test — land a number of hits, take punishment without flinching, collect enough orbs, be picked out from among its doubles — and simply grades the attempt.\n\nThey only unlock **after the game is finished**, once the Cavern of Remembrance is open. Each satisfied Mushroom pays out a weapon: a **staff for Donald** on odd numbers, a **shield for Goofy** on even ones. All thirteen together give the **Mushroom** Keyblade and the **Proof of Peace**.\n\nWhat makes them hard is not power but **precision**. Landing 99 hits in under nineteen seconds, or 85 without ever touching the ground, asks for the right Keyblade and the right abilities far more than a high level. This is the quest where you finally understand what **Negative Combo** is for.\n\nA failed Mushroom restarts immediately: just hit it again. Nothing is missable, and nothing forces you to do them in order.",
    ),
    tables: [
      {
        id: "bolets",
        title: L("Les treize Bolets, monde par monde", "The thirteen Mushrooms, world by world"),
        intro: L(
          "Les numéros impairs donnent un bâton à Donald, les pairs un bouclier à Dingo. Le treizième ne demande rien d'autre que d'avoir satisfait les douze précédents.",
          "Odd numbers give Donald a staff, even numbers give Goofy a shield. The thirteenth asks nothing but that the previous twelve have been satisfied.",
        ),
        columns: [L("Bolet", "Mushroom"), L("Où le trouver", "Where to find it"), L("Le défi", "The challenge")],
        rows: [
          at("Bolet n° 1", ["Illusiopolis — Tour du Souvenir", "The World That Never Was — Memory's Skyscraper"], ["Le frapper **70 fois en 30 secondes**. Combo négatif et une Keyblade rapide sont indispensables.", "Land **70 hits in 30 seconds**. Negative Combo and a fast Keyblade are essential."]),
          at("Bolet n° 2", ["Ville d'Halloween — place du sapin", "Halloween Town — Christmas Tree Plaza"], ["Renvoyer environ **80 assauts d'énergie** : c'est un exercice de garde, pas d'attaque.", "Deflect roughly **80 energy blasts**: this is a guarding drill, not an attacking one."]),
          at("Bolet n° 3", ["Château de la Bête — le pont", "Beast's Castle — the Bridge"], ["Ramasser **450 sphères**. La Lampe magique et Abondance font gagner un temps considérable.", "Collect **450 orbs**. The Lamp Charm and Drive Converter save a great deal of time."]),
          at("Bolet n° 4", ["Terre des Dragons — portes du palais", "Land of Dragons — Palace Gate"], ["Le toucher **85 fois sans se faire attaquer une seule fois**.", "Land **85 hits without being hit once**."]),
          at("Bolet n° 5", ["Agrabah — Caverne aux Merveilles", "Agrabah — Cave of Wonders"], ["L'éliminer **en 10 secondes**. Un pic de dégâts, rien d'autre.", "Destroy it **in 10 seconds**. Pure burst damage, nothing else."]),
          at("Bolet n° 6", ["Colisée de l'Olympe — abîmes infernaux", "Olympus Coliseum — Underworld Caverns"], ["Éliminer **tous les Bolets en 45 secondes** : ils se multiplient.", "Destroy **every Mushroom in 45 seconds**: they multiply."]),
          at("Bolet n° 7", ["Cité du Crépuscule — le tunnel", "Twilight Town — the Underground Concourse"], ["L'éliminer **en 10 secondes**, comme le cinquième.", "Destroy it **in 10 seconds**, like the fifth."]),
          at("Bolet n° 8", ["Cité du Crépuscule — Tour de Yen Sid", "Twilight Town — Yen Sid's Tower"], ["Le frapper **85 fois sans jamais retomber au sol**. Le défi aérien le plus dur des treize.", "Land **85 hits without ever touching the ground**. The hardest aerial test of the thirteen."]),
          at("Bolet n° 9", ["Forteresse Oubliée — porte du château", "Hollow Bastion — Castle Gate"], ["Le faire **tourner 75 fois** sur lui-même en le frappant par en dessous.", "Make it **spin 75 times** by hitting it from underneath."]),
          at("Bolet n° 10", ["Port Royal — Île de la Muerta", "Port Royal — Isla de Muerta"], ["Trouver le **vrai Bolet en 55 secondes** parmi ses doubles.", "Find the **real Mushroom in 55 seconds** among its doubles."]),
          at("Bolet n° 11", ["Rivière intemporelle — la rive", "Timeless River — the Waterway"], ["L'attaquer **99 fois en moins de 19 secondes**. Le défi de vitesse pure.", "Attack it **99 times in under 19 seconds**. The pure speed test."]),
          at("Bolet n° 12", ["Cité du Crépuscule — le manoir", "Twilight Town — the Mansion"], ["Éliminer **40 Bolets en 30 secondes**.", "Destroy **40 Mushrooms in 30 seconds**."]),
          at("Bolet n° 13", ["Forteresse Oubliée / Jardin Radieux — le Grand Vallon", "Hollow Bastion / Radiant Garden — the Great Maw"], ["Avoir satisfait les douze autres. Récompense : la Keyblade **Treize Fongus** et la **Preuve de tranquilité**.", "Have satisfied the other twelve. Reward: the **Mushroom** Keyblade and the **Proof of Peace**."]),
        ],
      },
    ],
    steps: [
      {
        id: "equipement",
        title: L("L'équipement décide de presque tout", "Your loadout decides almost everything"),
        image: { src: "/images/encyclopedia/keyblades/fenrir.webp", credit: credit("Fenrir_KHII.png"), width: 305, height: 320 },
        text: L(
          "Trois défis sur quatre se jouent sur le **nombre de coups par seconde**, et c'est une affaire de compétences, pas de niveau.\n\n**Combo négatif** réduit le combo au sol à un seul coup suivi de sa finition. Contre un Bolet, cela veut dire que l'on frappe sans arrêt au lieu d'attendre la fin d'une longue animation : c'est la compétence qui rend possibles le premier et le onzième défi. **Fenrir** la porte naturellement.\n\nPour le huitième — 85 coups sans retomber — il faut au contraire **Booster Combo aérien** et de quoi rester en l'air : Double Saut, Vol plané, et une Keyblade qui enchaîne haut. C'est le seul défi où la Forme Maîtrise, qui ne combat qu'en l'air, rend service.\n\nPour le troisième — 450 sphères — la **Lampe magique** et **Abondance** doublent quasiment le rendement. Sans elles, le compte n'y est pas dans le temps imparti.\n\nEnfin, retirez **Attraction** pour les défis de précision : la capacité tire Sora vers les ennemis, ce qui casse les enchaînements aériens au pire moment.",
          "Three challenges in four come down to **hits per second**, and that is a matter of abilities, not level.\n\n**Negative Combo** cuts the ground combo to a single hit plus its finisher. Against a Mushroom that means striking continuously instead of waiting out a long animation: it is the ability that makes the first and eleventh tests possible at all. **Fenrir** carries it naturally.\n\nFor the eighth — 85 hits without landing — you want the opposite: **Aerial Combo Boost** and the means to stay up there: Aerial Dodge, Glide, and a Keyblade that chains high. It is the one test where Master Form, which only fights airborne, earns its place.\n\nFor the third — 450 orbs — the **Lamp Charm** and **Drive Converter** almost double the yield. Without them the count does not come in on time.\n\nFinally, take **Draw** off for the precision tests: the ability pulls Sora towards enemies, which breaks aerial chains at the worst moment.",
        ),
      },
      {
        id: "armes",
        title: L("Ce que les Bolets rapportent vraiment", "What the Mushrooms actually pay out"),
        text: L(
          "Chaque Bolet satisfait donne une arme de compagnon, et ces armes ne sont pas décoratives : plusieurs sont les meilleures du jeu pour Donald et Dingo, avec des capacités qu'aucune boutique ne vend.\n\nLes numéros **impairs** donnent des bâtons à Donald, les **pairs** des boucliers à Dingo. Le **Bolet rare**, l'un des boucliers, accorde **Carapace X** : quarante pour cent de dégâts en moins sur Dingo, ce qui le rend nettement plus utile en soutien.\n\nLe treizième donne la Keyblade **Treize Fongus** — surtout un trophée, ses statistiques étant modestes — et la **Preuve de tranquilité**, qui débloque une couronne pour Sora et compte parmi les objets de complétion.\n\nLe Carnet de Jiminy tient le compte : la section « Bolets XIII » se remplit à mesure, et le trophée **Aller aux champignons** tombe quand les treize sont satisfaits.",
          "Each satisfied Mushroom hands over a party weapon, and those weapons are not decorative: several are the best in the game for Donald and Goofy, with abilities no shop sells.\n\n**Odd** numbers give Donald staves, **even** ones give Goofy shields. The **Rare Mushroom** shield grants **Damage Control**: forty per cent less damage taken on Goofy, which makes him markedly more useful in support.\n\nThe thirteenth hands over the **Mushroom** Keyblade — mostly a trophy, its stats being modest — and the **Proof of Peace**, which unlocks a crown for Sora and counts among the completion items.\n\nJiminy's Journal keeps the tally: the Mushroom XIII section fills as you go, and the **Mushroom Hunter** trophy falls once all thirteen are satisfied.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Palier", "Milestone"),
      intro: L(
        "Les récompenses suivent la parité du numéro. Rien ne se perd : un Bolet satisfait le reste définitivement.",
        "Rewards follow the number's parity. Nothing is lost: a satisfied Mushroom stays satisfied.",
      ),
      rows: [
        { tier: L("Chaque Bolet impair", "Each odd-numbered Mushroom"), reward: L("Un bâton pour Donald", "A staff for Donald") },
        { tier: L("Chaque Bolet pair", "Each even-numbered Mushroom"), reward: L("Un bouclier pour Dingo — dont le **Bolet rare** et sa Carapace X", "A shield for Goofy — including the **Rare Mushroom** and its Damage Control") },
        { tier: L("Les treize satisfaits", "All thirteen satisfied"), reward: L("La Keyblade **Treize Fongus** et la **Preuve de tranquilité**", "The **Mushroom** Keyblade and the **Proof of Peace**") },
      ],
      note: L(
        "Les Bolets XIII ne se débloquent qu'après la fin du jeu, une fois la Caverne du Souvenir ouverte. Ils comptent pour le Carnet de Jiminy et pour le trophée « Aller aux champignons ».",
        "The Mushroom XIII only unlock after the game is finished, once the Cavern of Remembrance is open. They count for Jiminy's Journal and for the Mushroom Hunter trophy.",
      ),
    },
  },
  {
    id: "repliques-organisation",
    title: L("Silhouettes Spectrales et Répliques", "Absent Silhouettes and data replicas"),
    tagline: L(
      "Cinq silhouettes puis treize données : les combats les plus durs du jeu.",
      "Five silhouettes then thirteen data fights: the hardest battles in the game.",
    ),
    entry: "organization-xiii",
    status: "done",
    intro: L(
      "Final Mix ajoute deux séries de combats contre l'Organisation, et il faut les prendre dans l'ordre : les **Silhouettes Spectrales** d'abord, les **Répliques** ensuite.\n\nLes cinq Silhouettes Spectrales sont les membres morts avant Kingdom Hearts II — Zexion, Larxene, Lexaeus, Marluxia et Vexen — revenus le temps d'un combat dans le monde où leur histoire s'est jouée. Chacune donne une **formule de synthèse** que rien d'autre ne donne, et une **Illusion perdue**. Ce sont les seuls moyens d'obtenir le Grimoire sombre, le Talisman isolant, Centurion, l'Épanouissement et la Fierté gelée.\n\nLes treize Répliques, elles, attendent dans le **jardin de l'Assemblée**, à la Forteresse Oubliée, derrière des portails qui s'ouvrent au fond de la Caverne du Souvenir. Ce sont des versions « données » des treize membres, chacune plus dure que l'original. Elles ne s'ouvrent qu'une par une, selon ce que l'on a déjà battu.\n\nLes treize vaincues, un coffre apparaît avec la **Preuve de non-existence**. C'est le contenu le plus exigeant de Kingdom Hearts II, Volonté Persistante comprise.",
      "Final Mix adds two series of fights against the Organisation, and they must be taken in order: the **Absent Silhouettes** first, the **data replicas** after.\n\nThe five Absent Silhouettes are the members who died before Kingdom Hearts II — Zexion, Larxene, Lexaeus, Marluxia and Vexen — back for one fight in the world where their story played out. Each hands over a **synthesis recipe** nothing else gives, and a **Lost Illusion**. They are the only way to obtain the Shadow Archive, the Ice Cream, Centurion, Full Bloom and the Frost Crown.\n\nThe thirteen replicas wait in the **Garden of Assemblage** at Hollow Bastion, behind portals that open at the far end of the Cavern of Remembrance. They are data versions of the thirteen members, each harder than the original. They open one at a time, according to what you have already beaten.\n\nWith all thirteen beaten, a chest appears holding the **Proof of Nonexistence**. This is the most demanding content in Kingdom Hearts II, the Lingering Will included.",
    ),
    tables: [
      {
        id: "silhouettes",
        title: L("Les cinq Silhouettes Spectrales", "The five Absent Silhouettes"),
        intro: L(
          "Elles apparaissent une fois l'histoire terminée, chacune dans le monde qui lui revient. Vaincre une Silhouette est aussi ce qui ouvre la Réplique correspondante.",
          "They appear once the story is over, each in the world that belongs to it. Beating a Silhouette is also what opens the matching replica.",
        ),
        columns: [L("Silhouette", "Silhouette"), L("Où elle se trouve", "Where it is"), L("Ce qu'elle rapporte", "What it gives")],
        rows: [
          at("Zexion", ["Colisée de l'Olympe — Caverne du Trépas, tréfonds", "Olympus Coliseum — Cave of the Dead, Inner Chamber"], ["La **Formule sombre** : le Grimoire sombre et le Grimoire sombre +. Plus une Illusion perdue.", "The **Dark Recipe**: the Shadow Archive and Shadow Archive+. Plus a Lost Illusion."]),
          at("Larxene", ["Port Royal — Île de la Muerta, la falaise", "Port Royal — Isla de Muerta, the Cliff"], ["La **Formule isolante** : le Talisman isolant et sa version +. Plus une Illusion perdue.", "The **Lightning Recipe**: the Ice Cream and its + version. Plus a Lost Illusion."]),
          at("Lexaeus", ["Cité du Crépuscule — Place des fêtes, seconde visite", "Twilight Town — the Sandlot, second visit"], ["La **Formule de puissance** : Centurion et Centurion +. Plus une Illusion perdue.", "The **Power Recipe**: Centurion and Centurion+. Plus a Lost Illusion."]),
          at("Marluxia", ["Château de la Bête — chambre de la Bête, seconde visite", "Beast's Castle — the Beast's Room, second visit"], ["La **Formule de pérennité** : l'Épanouissement et sa version +. Plus une Illusion perdue.", "The **Blossom Recipe**: Full Bloom and its + version. Plus a Lost Illusion."]),
          at("Vexen", ["Agrabah — boutique du marchand, seconde visite", "Agrabah — the merchant's shop, second visit"], ["La **Formule d'élucidation** : la Fierté gelée et sa version +. Plus une Illusion perdue.", "The **Frost Recipe**: the Frost Crown and its + version. Plus a Lost Illusion."]),
        ],
      },
      {
        id: "repliques",
        title: L("Les treize Répliques du jardin de l'Assemblée", "The thirteen replicas of the Garden of Assemblage"),
        intro: L(
          "Chaque portail s'ouvre selon ce qui a déjà été vaincu : les cinq membres disparus demandent leur Silhouette Spectrale, les autres demandent d'avoir battu l'original dans l'histoire.",
          "Each portal opens according to what you have already beaten: the five vanished members need their Absent Silhouette, the others need the original beaten in the story.",
        ),
        collapsed: true,
        columns: [L("Réplique", "Replica"), L("Ce qui ouvre son portail", "What opens its portal"), L("Ce qu'elle rapporte", "What it gives")],
        rows: [
          at("Xemnas", ["Avoir terminé l'histoire", "Having finished the story"], ["Bonus Attaque", "Power Boost"]),
          at("Xigbar", ["L'avoir vaincu à Illusiopolis", "Having beaten him at The World That Never Was"], ["Bonus Défense", "Defense Boost"]),
          at("Xaldin", ["L'avoir vaincu au Château de la Bête", "Having beaten him at Beast's Castle"], ["Bonus Défense", "Defense Boost"]),
          at("Vexen", ["Avoir vaincu sa Silhouette Spectrale, à Agrabah", "Having beaten his Absent Silhouette, in Agrabah"], ["Illusion perdue", "Lost Illusion"]),
          at("Lexaeus", ["Avoir vaincu sa Silhouette Spectrale, à la Cité du Crépuscule", "Having beaten his Absent Silhouette, in Twilight Town"], ["Illusion perdue", "Lost Illusion"]),
          at("Zexion", ["Avoir vaincu sa Silhouette Spectrale, au Colisée", "Having beaten his Absent Silhouette, at the Coliseum"], ["Illusion perdue", "Lost Illusion"]),
          at("Saïx", ["L'avoir vaincu à Illusiopolis", "Having beaten him at The World That Never Was"], ["Bonus Défense", "Defense Boost"]),
          at("Axel", ["L'avoir affronté avant Illusiopolis", "Having faced him before The World That Never Was"], ["Bonus Magie", "Magic Boost"]),
          at("Demyx", ["L'avoir vaincu à la Forteresse Oubliée", "Having beaten him at Hollow Bastion"], ["Bonus d'expérience", "EXP Boost"]),
          at("Luxord", ["L'avoir vaincu à Illusiopolis", "Having beaten him at The World That Never Was"], ["Bonus d'expérience", "EXP Boost"]),
          at("Marluxia", ["Avoir vaincu sa Silhouette Spectrale, au Château de la Bête", "Having beaten his Absent Silhouette, at Beast's Castle"], ["Illusion perdue", "Lost Illusion"]),
          at("Larxene", ["Avoir vaincu sa Silhouette Spectrale, à Port Royal", "Having beaten her Absent Silhouette, in Port Royal"], ["Illusion perdue", "Lost Illusion"]),
          at("Roxas", ["L'avoir vaincu à Illusiopolis", "Having beaten him at The World That Never Was"], ["Bonus Magie", "Magic Boost"]),
        ],
      },
    ],
    steps: [
      {
        id: "preparation",
        title: L("Ce qu'il faut avoir avant d'ouvrir un portail", "What to have before opening a portal"),
        text: L(
          "Ces combats ne pardonnent rien, et la préparation compte davantage que le niveau. Quelques choix décident du reste.\n\n**Dernières forces** et **Dernière chance** sont obligatoires : sans elles, une seule série d'attaques tue Sora au niveau 99. **Miroir** et **Soin X** doivent être en raccourci, pas dans un menu — plusieurs Répliques ne laissent pas le temps d'ouvrir la commande.\n\nCôté armes, **Fenrir** et **Combo négatif** restent le socle : contre des adversaires qui interrompent tout, un combo court qui atteint sa finition vaut mieux qu'un long combo jamais terminé. **Ultima** est l'alternative quand on préfère la portée.\n\nCôté capacités, **Roulade** (Forme Souvenance) est la meilleure esquive du jeu contre ces combats, et **Riposte** ou **Parade** transforment plusieurs attaques en ouvertures.\n\nEnfin, emportez des **Potions +** et des **Éthers** : Kingdom Hearts II fait remonter les PM d'un coup, entièrement, et une jauge vide au mauvais moment coûte le combat.",
          "These fights forgive nothing, and preparation counts for more than level. A few choices decide the rest.\n\n**Once More** and **Second Chance** are mandatory: without them a single string of attacks kills Sora at level 99. **Reflect** and **Curaga** must be on shortcuts, not in a menu — several replicas leave no time to open the command.\n\nOn weapons, **Fenrir** and **Negative Combo** remain the foundation: against opponents who interrupt everything, a short combo that reaches its finisher beats a long one that never does. **Ultima** is the alternative when you prefer reach.\n\nOn abilities, **Dodge Roll** (Limit Form) is the best evade in the game for these fights, and **Counterguard** or **Guard** turn several attacks into openings.\n\nFinally, bring **Hi-Potions** and **Ethers**: Kingdom Hearts II refills MP all at once, and an empty bar at the wrong moment costs the fight.",
        ),
      },
      {
        id: "ordre",
        title: L("Dans quel ordre les prendre", "What order to take them in"),
        image: { src: "/images/walkthrough/kh2-illusiopolis-5.webp", credit: credit("The_World_That_Never_Was_gameplay_5.png"), width: 480, height: 270 },
        text: L(
          "Les portails s'ouvrent tout seuls à mesure que les conditions tombent, mais l'ordre dans lequel on les affronte change beaucoup la difficulté.\n\nCommencez par les **Silhouettes Spectrales**. Elles sont nettement plus abordables que les Répliques, elles ouvrent cinq portails d'un coup, et surtout elles donnent les cinq formules qui manquent à l'atelier des Mogs — donc le Grimoire sombre et l'Épanouissement, deux des meilleurs accessoires du jeu, à équiper avant d'attaquer les Répliques.\n\nEnsuite, parmi les treize, **Demyx**, **Luxord** et **Axel** sont les plus lisibles : leurs schémas d'attaque ressemblent à ceux de l'histoire, en plus rapide. **Xaldin**, **Saïx** et **Xigbar** demandent de connaître les commandes de réaction par cœur. **Roxas** et **Xemnas** viennent en dernier, et **Zexion**, **Lexaeus** et **Marluxia** — qui n'existent qu'ici — réservent des mécaniques qu'on ne voit nulle part ailleurs.\n\nRien ne s'enchaîne : chaque Réplique se retente immédiatement, depuis le jardin, sans écran de chargement ni scène à passer. C'est le seul confort que Final Mix accorde ici.",
          "The portals open on their own as the conditions fall, but the order you take them in changes the difficulty a great deal.\n\nStart with the **Absent Silhouettes**. They are markedly more approachable than the replicas, they open five portals at once, and above all they hand over the five recipes the moogle workshop is missing — so the Shadow Archive and Full Bloom, two of the best accessories in the game, ready to equip before taking on the replicas.\n\nThen, among the thirteen, **Demyx**, **Luxord** and **Axel** are the most legible: their patterns resemble the story versions, faster. **Xaldin**, **Saïx** and **Xigbar** require knowing the reaction commands by heart. **Roxas** and **Xemnas** come last, and **Zexion**, **Lexaeus** and **Marluxia** — who exist only here — hold mechanics seen nowhere else.\n\nNothing is chained: each replica retries immediately, from the garden, with no loading screen or cutscene to skip. That is the one comfort Final Mix grants here.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Palier", "Milestone"),
      intro: L(
        "Les Silhouettes donnent des formules, les Répliques des bonus de statistiques permanents. Les deux séries comptent pour le Carnet de Jiminy.",
        "The Silhouettes give recipes, the replicas permanent stat boosts. Both series count for Jiminy's Journal.",
      ),
      rows: [
        { tier: L("Chaque Silhouette Spectrale", "Each Absent Silhouette"), reward: L("Une formule de synthèse exclusive et une **Illusion perdue**", "An exclusive synthesis recipe and a **Lost Illusion**") },
        { tier: L("Chaque Réplique", "Each data replica"), reward: L("Un bonus permanent : Attaque, Défense, Magie ou expérience — ou une Illusion perdue pour les cinq membres disparus", "A permanent boost: Power, Defense, Magic or EXP — or a Lost Illusion for the five vanished members") },
        { tier: L("Les treize Répliques vaincues", "All thirteen replicas beaten"), reward: L("Un coffre contenant la **Preuve de non-existence**, qui débloque une couronne pour Sora", "A chest holding the **Proof of Nonexistence**, which unlocks a crown for Sora") },
      ],
      note: L(
        "Le trophée **Organisation sous domination** tombe avec la treizième Réplique. Les cinq formules des Silhouettes sont indispensables pour terminer l'atelier des Mogs, et donc pour la Keyblade Ultima.",
        "The **Organisation Dominated** trophy falls with the thirteenth replica. The Silhouettes' five recipes are essential to finish the moogle workshop, and therefore for the Ultima Weapon.",
      ),
    },
  },
  {
    id: "boss-optionnels",
    title: L("Les boss facultatifs", "The optional bosses"),
    tagline: L(
      "Séphiroth, la Volonté Persistante, et la Caverne du Souvenir qui y mène.",
      "Sephiroth, the Lingering Will, and the Cavern of Remembrance that leads there.",
    ),
    entry: "sephiroth",
    status: "done",
    intro: L(
      "Deux adversaires attendent en dehors de l'histoire, et ils ne se ressemblent pas. **Séphiroth** est un duel : un seul ennemi, des schémas longs, et une punition immédiate pour qui attaque au mauvais moment. La **Volonté Persistante** est autre chose — l'armure d'un porteur de Keyblade venu d'un autre jeu, et le combat le plus dur de Kingdom Hearts II.\n\nEntre les deux, il y a la **Caverne du Souvenir** : un long couloir de la Forteresse Oubliée, ajouté par Final Mix, bourré de coffres et de matériaux de rang S, et surtout la porte d'entrée de tout le contenu de fin de partie. C'est elle qui ouvre le jardin de l'Assemblée et les Répliques.\n\nAucun des deux boss n'est nécessaire pour terminer le jeu. Tous deux comptent pour le Carnet de Jiminy, et chacun a son trophée : **One-Winged Angel** pour Séphiroth, **Volonté Persistante** pour l'autre.\n\nLe conseil qui vaut pour les deux : montez au **niveau 99**, montez les formes au **niveau 7**, et venez avec Fenrir ou Ultima. Ce ne sont pas des combats qu'on gagne en s'accrochant.",
      "Two opponents wait outside the story, and they are nothing alike. **Sephiroth** is a duel: one enemy, long patterns, and an immediate punishment for attacking at the wrong moment. The **Lingering Will** is something else — the armour of a Keyblade wielder from another game, and the hardest fight in Kingdom Hearts II.\n\nBetween the two lies the **Cavern of Remembrance**: a long corridor of Hollow Bastion added by Final Mix, packed with chests and rank S materials, and above all the gateway to all the endgame content. It is what opens the Garden of Assemblage and the replicas.\n\nNeither boss is needed to finish the game. Both count for Jiminy's Journal, and each has its trophy: **One-Winged Angel** for Sephiroth, **Lingering Will** for the other.\n\nThe advice that holds for both: reach **level 99**, level the forms to **7**, and come with Fenrir or Ultima. These are not fights won by hanging on.",
    ),
    bosses: [
      {
        id: "sephiroth",
        name: L("Séphiroth", "Sephiroth"),
        entry: "sephiroth",
        level: "70+",
        reward: L("La Keyblade **Fenrir**, et la scène entre Cloud et Séphiroth", "The **Fenrir** Keyblade, and the scene between Cloud and Sephiroth"),
        tactics: L(
          "Il apparaît au **Précipice des Ténèbres**, à la Forteresse Oubliée devenue Jardin Radieux, une fois Illusiopolis derrière soi et les YuRiPa retrouvées à la Poterne.\n\nSora combat **seul** : ni Donald ni Dingo, pas de forme de Fusion, pas de coopération sauf Trinité. C'est un duel au sens strict, et la seule ressource est l'esquive.\n\nLe combat a deux temps. Tant qu'il lui reste plus de quatre jauges, Séphiroth alterne son combo de Masamune, ses colonnes de flammes et ses sphères d'énergie. En dessous, il se transfigure : plus rapide, plus long de portée, et il ajoute la pluie de météores.\n\nLa règle qui gouverne tout : **ne jamais attaquer pendant qu'il se déplace**. Séphiroth se téléporte derrière Sora à la moindre ouverture, et un combo lancé dans le vide est un combo encaissé. Frappez deux ou trois fois après une attaque terminée, puis reculez.",
          "He appears at the **Dark Depths**, in Hollow Bastion turned Radiant Garden, once The World That Never Was is behind you and the YRP have been found at the Postern.\n\nSora fights **alone**: no Donald, no Goofy, no Drive Form, no Limit except Trinity. It is a duel in the strict sense, and the only resource is evasion.\n\nThe fight has two halves. While he has more than four bars, Sephiroth alternates his Masamune combo, his flame columns and his energy orbs. Below that he transfigures: faster, longer of reach, and he adds the meteor rain.\n\nThe rule that governs everything: **never attack while he is moving**. Sephiroth teleports behind Sora at the slightest opening, and a combo thrown into empty air is a combo taken. Hit two or three times after an attack has finished, then back off.",
        ),
        attacks: [
          { name: L("Combo de Masamune", "Masamune combo"), note: L("Sept coups enchaînés. Bloquez-les un par un, ou passez au-dessus avec Super Saut, Double Saut puis Vol plané.", "Seven linked strikes. Block them one by one, or go over the top with High Jump, Aerial Dodge then Glide.") },
          { name: L("Sphères d'énergie", "Energy orbs"), note: L("En milieu de combat. **Miroir** les renvoie et ouvre une fenêtre pour frapper.", "Mid-fight. **Reflect** sends them back and opens a window to strike.") },
          { name: L("Colonnes de flammes", "Flame columns"), note: L("Elles montent du sol en suivant Sora. Le Vol plané est la seule esquive fiable.", "They rise from the ground following Sora. Glide is the only reliable evade.") },
          { name: L("Ange", "Heartless Angel"), note: L("Réduit les PV et les PM de Sora à 1. Il faut **l'interrompre** : Double Saut et Vol plané pour le rejoindre, ou une coopération Trinité.", "Cuts Sora's HP and MP to 1. It must be **interrupted**: Aerial Dodge and Glide to reach him, or a Trinity Limit.") },
          { name: L("Pluie de météores", "Meteor rain"), note: L("Dernière phase seulement. Restez en mouvement, Vol plané ou Double Saut, et ne cherchez pas à frapper pendant.", "Final phase only. Keep moving, Glide or Aerial Dodge, and do not try to hit during it.") },
        ],
      },
      {
        id: "volonte-persistante",
        name: L("La Volonté Persistante", "The Lingering Will"),
        entry: "lingering-will",
        level: "99",
        reward: L("Une **couronne** pour Sora, une **jauge de Flux supplémentaire** et une **Illusion manifeste**", "A **crown** for Sora, an **extra Drive bar** and a **Manifest Illusion**"),
        tactics: L(
          "Elle ne s'ouvre qu'après la fin du jeu : terminez l'histoire, regardez la scène finale, sauvegardez, puis rendez-vous au **hall de la Pierre Angulaire** du Château Disney et franchissez le portail. L'arène est un désert qu'on ne voit nulle part ailleurs.\n\nC'est le combat le plus long et le plus dur du jeu : une douzaine de jauges de vie, et une armure qui change d'arme en permanence. La Keyblade devient fouet, canon, arc, puis vaisseau ; chaque forme a son rythme, et aucune ne laisse d'ouverture évidente.\n\nDeux idées portent tout le combat. La première : **la garde ne suffit pas**, il faut esquiver — Roulade, Double Saut, Vol plané — parce que plusieurs attaques traversent la parade. La seconde : **Miroir** est la réponse par défaut quand on ne sait pas quoi faire, parce qu'il couvre les projectiles, les charges et une partie des sorts.\n\nSa technique ultime, à l'aura rouge, se déroule en trois phases. Elle est annoncée longtemps à l'avance : c'est le moment de s'éloigner, pas de tenter un dernier combo.\n\nLe combat se retente indéfiniment, sans scène à repasser.",
          "It only opens after the game ends: finish the story, watch the final scene, save, then go to Disney Castle's **Hall of the Cornerstone** and step through the portal. The arena is a desert seen nowhere else.\n\nThis is the longest and hardest fight in the game: a dozen health bars, and an armour that changes weapon constantly. The Keyblade becomes a whip, a cannon, a bow, then a glider; each form has its rhythm, and none leaves an obvious opening.\n\nTwo ideas carry the whole fight. First: **guarding is not enough**, you have to evade — Dodge Roll, Aerial Dodge, Glide — because several attacks go through a block. Second: **Reflect** is the default answer when you do not know what to do, because it covers projectiles, charges and part of the spells.\n\nIts ultimate technique, with the red aura, unfolds in three phases. It is telegraphed well in advance: that is the moment to back away, not to try one last combo.\n\nThe fight retries indefinitely, with no cutscene to sit through.",
        ),
        attacks: [
          { name: L("Keyblade en fouet", "Whip form"), note: L("Un tourbillon large et rapide. Il faut sortir de la zone, pas la parer.", "A wide, fast spin. You have to leave the area, not block it.") },
          { name: L("Canon", "Cannon form"), note: L("Une boule d'énergie chargée. **Miroir** la renvoie.", "A charged energy ball. **Reflect** sends it back.") },
          { name: L("Arc", "Bow form"), note: L("Des volées de flèches à distance. Le Vol plané latéral les évite proprement.", "Volleys of arrows at range. Gliding sideways avoids them cleanly.") },
          { name: L("Vaisseau Keyblade", "Keyblade glider"), note: L("Des charges enchaînées sans jamais toucher le sol. Roulade au dernier moment, jamais en avance.", "Chained charges that never touch the ground. Dodge Roll at the last moment, never early.") },
          { name: L("Aura rouge", "Red aura"), note: L("La technique ultime, en trois phases. Éloignez-vous dès l'annonce et n'attaquez pas avant la fin.", "The ultimate technique, in three phases. Move away the moment it starts and do not attack until it ends.") },
          { name: L("Aimant X et Glacier X", "Magnega and Blizzaga"), note: L("Les sorts arrivent entre deux formes d'arme. Aimant X attire Sora vers le point d'impact : anticipez la sortie.", "The spells come between weapon forms. Magnega drags Sora towards the impact point: plan your exit.") },
        ],
      },
    ],
    tables: [
      {
        id: "caverne",
        title: L("La Caverne du Souvenir", "The Cavern of Remembrance"),
        intro: L(
          "Ajoutée par Final Mix, elle part du Grand Vallon de la Forteresse Oubliée. C'est à la fois le meilleur endroit du jeu pour les matériaux de rang S et la clé de tout le contenu de fin de partie.",
          "Added by Final Mix, it starts from Hollow Bastion's Great Maw. It is at once the best place in the game for rank S materials and the key to all the endgame content.",
        ),
        columns: [L("Ce qu'on y trouve", "What it holds"), L("Ce qu'il faut pour y aller", "What you need"), L("Ce que cela ouvre", "What it opens")],
        rows: [
          at("Les coffres du couloir", ["Matériaux de rang S, Bonus PC, accessoires", "Rank S materials, AP Boosts, accessories"], ["Double Saut et Vol plané : plusieurs coffres sont hors de portée sans eux.", "Aerial Dodge and Glide: several chests are unreachable without them."], ["Rien — mais c'est la meilleure source de Cristaux du jeu.", "Nothing — but it is the game's best source of Crystals."]),
          at("Les Similis du couloir", ["Matériaux de Tranquilité et de Souvenir, exclusifs à Final Mix", "Remembrance and Tranquility materials, exclusive to Final Mix"], ["Un niveau confortable : les groupes y sont denses.", "A comfortable level: the groups there are dense."], ["Ces deux familles n'existent nulle part ailleurs.", "Those two families exist nowhere else."]),
          at("Le fond de la caverne", ["L'accès au **jardin de l'Assemblée**", "Access to the **Garden of Assemblage**"], ["Avoir traversé tout le couloir.", "Having crossed the whole corridor."], ["Les treize portails des Répliques de l'Organisation.", "The thirteen portals of the Organisation replicas."]),
          at("Le Grand Vallon", ["Le **Bolet n° 13**", "**Mushroom no. 13**"], ["Avoir satisfait les douze autres Bolets.", "Having satisfied the other twelve Mushrooms."], ["La Keyblade Treize Fongus et la Preuve de tranquilité.", "The Mushroom Keyblade and the Proof of Peace."]),
        ],
      },
    ],
    rewards: {
      tierHeader: L("Adversaire", "Opponent"),
      intro: L(
        "Les deux boss facultatifs et ce qu'ils rapportent. Ni l'un ni l'autre n'est nécessaire pour finir le jeu ; les deux comptent pour le Carnet et pour un trophée.",
        "The two optional bosses and what they pay out. Neither is needed to finish the game; both count for the Journal and for a trophy.",
      ),
      rows: [
        { tier: L("Séphiroth — Précipice des Ténèbres", "Sephiroth — Dark Depths"), reward: L("La Keyblade **Fenrir**, et le trophée **One-Winged Angel**", "The **Fenrir** Keyblade, and the **One-Winged Angel** trophy") },
        { tier: L("La Volonté Persistante — Château Disney", "The Lingering Will — Disney Castle"), reward: L("Une **couronne**, une **jauge de Flux supplémentaire**, une **Illusion manifeste**, et le trophée **Volonté Persistante**", "A **crown**, an **extra Drive bar**, a **Manifest Illusion**, and the **Lingering Will** trophy") },
      ],
      note: L(
        "La jauge de Flux supplémentaire donnée par la Volonté Persistante est la seule du jeu qui ne vienne pas de l'histoire : elle porte le total au maximum, ce qui compte pour la Coupe Hadès Paradoxe.",
        "The extra Drive bar from the Lingering Will is the only one in the game that does not come from the story: it brings the total to maximum, which matters for the Hades Paradox Cup.",
      ),
    },
  },
  {
    id: "rapports-ansem",
    title: L("Les rapports d'Ansem", "The Secret Ansem Reports"),
    tagline: L(
      "Treize rapports secrets, tous donnés par l'histoire — et aucun manquable.",
      "Thirteen secret reports, all granted by the story — and none missable.",
    ),
    entry: "ansem-the-wise",
    status: "done",
    intro: L(
      "Les rapports secrets d'Ansem sont, dans Kingdom Hearts II, la voix de ceux qui n'en ont plus. Ils ne sont pas signés d'Ansem le Sage mais de **Xemnas** et de ses recherches sur les Similis : ce sont les carnets d'un homme qui essaie de comprendre ce qu'il est devenu, et ils disent presque tout ce que l'histoire garde pour elle — l'origine de l'Organisation, la nature de Roxas, le rôle de Naminé.\n\nBonne nouvelle pour le 100 % : **aucun ne se rate**. Contrairement au premier jeu, où il fallait fouiller des coffres précis, les treize rapports de Kingdom Hearts II sont tous donnés automatiquement par la progression de l'histoire — après un combat, après une scène, après une arrivée dans un lieu. Il n'y a rien à chercher, rien à collectionner, et rien à refaire.\n\nIls remplissent leur section du Carnet de Jiminy dès qu'on les reçoit, et complètent le trophée **Chercheur**.\n\nLa seule chose qui varie d'une version à l'autre est l'ordre exact d'attribution des rapports 8, 9 et 12, selon le moment où l'on affronte Luxord, Saïx et Roxas. Cela ne change rien au total.",
      "In Kingdom Hearts II, the Secret Ansem Reports are the voice of those who no longer have one. They are not signed by Ansem the Wise but by **Xemnas**, recording his research into Nobodies: the notebooks of a man trying to understand what he has become, and they say nearly everything the story keeps back — the Organisation's origin, Roxas's nature, Naminé's role.\n\nGood news for 100%: **none can be missed**. Unlike the first game, where you had to find specific chests, Kingdom Hearts II's thirteen reports are all granted automatically by story progress — after a fight, after a cutscene, after arriving somewhere. There is nothing to hunt, nothing to collect, and nothing to redo.\n\nThey fill their Jiminy's Journal section as soon as you receive them, and complete the **Researcher** trophy.\n\nThe only thing that varies between versions is the exact order of reports 8, 9 and 12, depending on when you face Luxord, Saïx and Roxas. It changes nothing in the total.",
    ),
    tables: [
      {
        id: "rapports",
        title: L("Les treize rapports et leur déclencheur", "The thirteen reports and their trigger"),
        intro: L(
          "Chaque rapport tombe à un moment précis de l'histoire. Aucun n'exige de détour : suivre le cheminement suffit à les avoir tous.",
          "Each report drops at a precise story moment. None requires a detour: following the walkthrough is enough to get them all.",
        ),
        columns: [L("Rapport", "Report"), L("Quand on le reçoit", "When you receive it"), L("Ce qu'il apporte", "What it adds")],
        rows: [
          at("Rapport n° 1", ["Après la Bataille des Mille Sans-cœur, à la Forteresse Oubliée.", "After the Battle of the 1000 Heartless, at Hollow Bastion."], ["Le point de départ : ce qu'est un Simili, et pourquoi l'Organisation en est faite.", "The starting point: what a Nobody is, and why the Organisation is made of them."]),
          at("Rapport n° 2", ["Après la rencontre avec le Roi Mickey, sur la place de la gare.", "After meeting King Mickey at the Station Plaza."], ["Le regard de Xemnas sur le cœur, et sur ce qui manque aux Similis.", "Xemnas's view of the heart, and of what Nobodies lack."]),
          at("Rapport n° 3", ["Après la victoire sur **Xigbar**.", "After beating **Xigbar**."], ["Les débuts de l'Organisation et le recrutement de ses premiers membres.", "The Organisation's beginnings and the recruitment of its first members."]),
          at("Rapport n° 4", ["Après la victoire sur **Xaldin**.", "After beating **Xaldin**."], ["Les expériences sur les cœurs, et ce qu'elles ont coûté au Jardin Radieux.", "The experiments on hearts, and what they cost Radiant Garden."]),
          at("Rapport n° 5", ["Après la première victoire sur **Demyx**.", "After beating **Demyx** for the first time."], ["Le Kingdom Hearts que l'Organisation construit, et à quoi il doit servir.", "The Kingdom Hearts the Organisation is building, and what it is for."]),
          at("Rapport n° 6", ["Après la seconde victoire sur la **Faucheuse**, à Port Royal.", "After beating the **Grim Reaper** a second time, in Port Royal."], ["Les Sans-cœur comme outil, et la différence avec les Similis.", "Heartless as a tool, and the difference from Nobodies."]),
          at("Rapport n° 7", ["Après avoir repoussé les Similis devant la porte, à la première Forteresse Oubliée.", "After repelling the Nobodies at the gate, on the first Hollow Bastion visit."], ["Ce que l'Organisation cherche dans le Jardin Radieux.", "What the Organisation is looking for in Radiant Garden."]),
          at("Rapport n° 8", ["Après la victoire sur **Luxord** — ou après le duel entre Roxas et Sora, selon la version.", "After beating **Luxord** — or after Roxas and Sora's fight, depending on the version."], ["Naminé, et ce qu'elle est capable de faire aux souvenirs.", "Naminé, and what she can do to memories."]),
          at("Rapport n° 9", ["Après la victoire sur **Saïx** — ou sur Luxord, selon la version.", "After beating **Saïx** — or Luxord, depending on the version."], ["Roxas, et pourquoi il n'est pas un Simili comme les autres.", "Roxas, and why he is not a Nobody like the others."]),
          at("Rapport n° 10", ["En arrivant dans **l'autre Cité du Crépuscule**.", "On arriving in **the other Twilight Town**."], ["La ville de données, et ce qu'on y a fait de Roxas.", "The data town, and what was done to Roxas there."]),
          at("Rapport n° 11", ["Quand **Riku** retrouve son apparence.", "When **Riku** regains his own appearance."], ["Le prix payé par Riku, du point de vue de celui qui l'a provoqué.", "The price Riku paid, from the point of view of the man who caused it."]),
          at("Rapport n° 12", ["Après le duel entre **Roxas et Sora** — ou après Saïx, selon la version.", "After **Roxas and Sora**'s fight — or after Saïx, depending on the version."], ["Ce que Xemnas comprend enfin, trop tard.", "What Xemnas finally understands, too late."]),
          at("Rapport n° 13", ["Après la première victoire sur **Xemnas**, à Illusiopolis.", "After beating **Xemnas** for the first time, at The World That Never Was."], ["Le dernier mot de l'Organisation, et l'ouverture vers la suite de la série.", "The Organisation's last word, and the opening towards the rest of the series."]),
        ],
      },
    ],
    steps: [
      {
        id: "lecture",
        title: L("Pourquoi les lire", "Why read them"),
        text: L(
          "On peut terminer Kingdom Hearts II sans en ouvrir un seul, et l'histoire reste suivie. Mais elle reste aussi incomplète : le jeu raconte ce que Sora voit, et Sora ne voit pas grand-chose de l'Organisation avant la fin.\n\nLes rapports comblent exactement ce trou. Ils expliquent d'où viennent les treize membres, ce qu'était le Jardin Radieux avant, ce que Xehanort a fait à ses collègues, pourquoi Naminé existe et ce que Roxas représente vraiment. Une bonne partie de ce que Birth by Sleep et 358/2 Days développeront plus tard est déjà annoncée ici.\n\nIls se lisent depuis le **Carnet de Jiminy**, à n'importe quel point de sauvegarde, et restent disponibles indéfiniment. Rien n'oblige à les lire au moment où on les reçoit — mais plusieurs perdent leur effet si on les garde pour la fin, parce qu'ils répondent à des questions que le jeu vient tout juste de poser.\n\nLe conseil raisonnable : lire chaque rapport le soir où on le reçoit. Cela ne coûte que quelques minutes, et cela change la lecture de la moitié du jeu.",
          "You can finish Kingdom Hearts II without opening a single one, and the story still follows. But it also stays incomplete: the game tells what Sora sees, and Sora sees very little of the Organisation before the end.\n\nThe reports fill exactly that gap. They explain where the thirteen members came from, what Radiant Garden was before, what Xehanort did to his colleagues, why Naminé exists and what Roxas really represents. A good deal of what Birth by Sleep and 358/2 Days would later develop is already announced here.\n\nThey are read from **Jiminy's Journal**, at any save point, and stay available indefinitely. Nothing forces you to read them when you receive them — but several lose their effect if saved for the end, because they answer questions the game has only just raised.\n\nThe sensible advice: read each report the evening you receive it. It costs a few minutes, and it changes how you read half the game.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Palier", "Milestone"),
      intro: L(
        "La seule quête de collecte du jeu qui ne demande rien d'autre que de jouer.",
        "The one collection quest in the game that asks for nothing but playing it.",
      ),
      rows: [
        { tier: L("Les treize rapports reçus", "All thirteen reports received"), reward: L("La section « Rapports d'Ansem » du Carnet de Jiminy, et le trophée **Chercheur**", "The Secret Ansem Report section of Jiminy's Journal, and the **Researcher** trophy") },
      ],
      note: L(
        "Aucun rapport n'est manquable : tous sont donnés par l'histoire. Si la section du Carnet n'est pas complète en fin de partie, c'est qu'un combat facultatif n'a pas encore été fait — vérifiez Demyx à la Forteresse Oubliée et la Faucheuse à Port Royal.",
        "No report is missable: every one is granted by the story. If the Journal section is not complete at the end, an optional fight is still outstanding — check Demyx at Hollow Bastion and the Grim Reaper in Port Royal.",
      ),
    },
  },
  {
    id: "inventaire",
    title: L("L'inventaire", "The inventory"),
    tagline: L(
      "Keyblades, armures, accessoires et objets-clés : quoi équiper, et quand.",
      "Keyblades, armour, accessories and key items: what to equip, and when.",
    ),
    entry: "kingdom-key",
    status: "done",
    intro: L(
      "Kingdom Hearts II équipe trois personnages sur quatre emplacements : une **arme**, une **armure**, un **accessoire**, plus les objets rangés dans les raccourcis. Sora porte des Keyblades, Donald des bâtons, Dingo des boucliers ; les armures et les accessoires, eux, se partagent entre les trois.\n\nLe jeu change de logique par rapport au premier opus. Les statistiques brutes comptent moins que la **capacité** portée par chaque arme : une Keyblade faible mais qui double les objets lâchés, ou qui supprime le combo au sol, vaut souvent mieux qu'une Keyblade plus puissante. C'est pour cela que **Doux souvenir** sert pendant toute la récolte et que **Fenrir** s'impose pour les gros combats.\n\nLes armures de Kingdom Hearts II ne donnent presque pas de défense : elles donnent des **résistances élémentaires**, de 20 % à 30 % selon le rang, et c'est là leur intérêt. Les accessoires, eux, donnent les **PC** — les points de compétence qui décident du nombre de capacités équipables, et donc de ce que Sora sait faire.\n\nLes tableaux ci-dessous sont repliés : dépliez celui qui vous intéresse plutôt que de faire défiler l'ensemble.",
      "Kingdom Hearts II equips three characters across four slots: a **weapon**, an **armour**, an **accessory**, plus the items kept on shortcuts. Sora carries Keyblades, Donald staves, Goofy shields; armour and accessories are shared between the three.\n\nThe game changes logic from the first. Raw statistics matter less than the **ability** each weapon carries: a weak Keyblade that doubles item drops, or removes the ground combo, is often worth more than a stronger one. That is why **Sweet Memories** serves through the whole material hunt and why **Fenrir** imposes itself for the big fights.\n\nKingdom Hearts II's armour gives almost no defence: it gives **elemental resistances**, from 20% to 30% by rank, and that is its point. Accessories give the **AP** — the ability points that decide how many abilities can be equipped, and therefore what Sora can do.\n\nThe tables below are collapsed: open the one you want rather than scrolling through all of them.",
    ),
    tables: [
      {
        id: "keyblades",
        title: L("Les Keyblades qui comptent", "The Keyblades that matter"),
        intro: L(
          "Vingt-quatre Keyblades dans Final Mix. Celles-ci sont les seules dont le choix change vraiment une partie — les autres sont des étapes. Chaque fiche complète est dans l'encyclopédie.",
          "Twenty-four Keyblades in Final Mix. These are the only ones whose choice really changes a playthrough — the rest are stepping stones. Each full entry is in the encyclopedia.",
        ),
        collapsed: true,
        columns: [L("Keyblade", "Keyblade"), L("Ce qu'elle apporte", "What it brings"), L("Comment l'obtenir", "How to get it")],
        rows: [
          at("Chaîne Royale", ["3 Force / 1 Magie, et **Limite-dégâts**. L'arme de départ, jamais vraiment dépassée en début de partie.", "3 Attack / 1 Magic, and **Damage Control**. The starting weapon, never really outclassed early."], ["Dès le départ.", "From the start."]),
          at("Doux souvenir", ["Presque aucune force, mais elle **double les objets lâchés** par les ennemis. L'arme de la récolte.", "Almost no strength, but it **doubles enemy drops**. The gathering weapon."], ["Forêt des Rêves Bleus, en réussissant le mini-jeu de la grotte hantée.", "Hundred Acre Wood, by clearing the Spooky Cave mini-game."]),
          at("Tendre promesse", ["Équilibrée, et elle débloque la **Forme Souvenance** quand on la reçoit.", "Balanced, and it unlocks **Limit Form** when received."], ["Second passage à la Cité du Crépuscule.", "Second visit to Twilight Town."]),
          at("Mystérieux Abîme", ["La meilleure Keyblade magique de la partie médiane.", "The best magic Keyblade of the mid-game."], ["Atlantica, en réussissant « La revanche d'Ursula ! ».", "Atlantica, by clearing Ursula's Revenge."]),
          at("Lampe magique", ["Elle augmente le nombre de **sphères de Flux** lâchées : indispensable pour monter la Forme Maîtrise et les invocations.", "It raises the number of **Drive orbs** dropped: essential for levelling Master Form and the summons."], ["Agrabah, après la seconde visite.", "Agrabah, after the second visit."]),
          at("Citrouille de Noël", ["6 Force / 1 Magie, avec un excellent enchaînement au sol.", "6 Attack / 1 Magic, with an excellent ground chain."], ["Ville d'Halloween, en vainquant **l'Expérience**.", "Halloween Town, by beating **the Experiment**."]),
          at("Fenrir", ["7 Force / 1 Magie, et surtout **Combo négatif** : le combo au sol se réduit à un coup suivi de sa finition. L'arme des combats difficiles.", "7 Attack / 1 Magic, and above all **Negative Combo**: the ground combo shrinks to one hit plus its finisher. The weapon for hard fights."], ["Vaincre **Séphiroth**, puis amener Cloud à la Forteresse Oubliée.", "Beat **Sephiroth**, then bring Cloud to Hollow Bastion."]),
          at("Fatalis", ["Un enchaînement très long, au prix de la sécurité.", "A very long chain, at the cost of safety."], ["Remporter la **Coupe de la Destinée**, au Colisée.", "Win the **Goddess of Fate Cup**, at the Coliseum."]),
          at("Ultima", ["6 Force / 4 Magie, les meilleures finitions du jeu, et un bonus de dégâts général.", "6 Attack / 4 Magic, the best finishers in the game, and a general damage bonus."], ["**Synthèse**, avec la Formule ultime — treize Orichalque + nécessaires.", "**Synthesis**, with the Ultima Recipe — thirteen Orichalcum+ required."]),
          at("Treize Fongus", ["Un trophée plus qu'une arme, mais elle clôt la quête des Bolets.", "A trophy more than a weapon, but it closes the Mushroom quest."], ["Satisfaire les **treize Bolets XIII**.", "Satisfy all **thirteen Mushroom XIII**."]),
        ],
      },
      {
        id: "compagnons",
        title: L("Les armes de Donald et de Dingo", "Donald's and Goofy's weapons"),
        intro: L(
          "Vingt et un bâtons pour Donald, vingt boucliers pour Dingo. La majorité vient de la synthèse et des Bolets XIII — c'est la raison principale de faire cette quête.",
          "Twenty-one staves for Donald, twenty shields for Goofy. Most come from synthesis and the Mushroom XIII — which is the main reason to do that quest.",
        ),
        collapsed: true,
        columns: [L("Arme", "Weapon"), L("Pour qui, et ce qu'elle apporte", "Whose, and what it brings"), L("Comment l'obtenir", "How to get it")],
        rows: [
          at("Bâton de magicien", ["Donald — 1 Force / 1 Magie. L'arme de départ.", "Donald — 1 Attack / 1 Magic. The starting weapon."], ["Dès le départ.", "From the start."]),
          at("Save the Queen", ["Donald — 5 Force / 6 Magie, et **Soin amical** : il relève les alliés bien plus vite.", "Donald — 5 Attack / 6 Magic, and **Hyper Healing**: he revives allies much faster."], ["Synthèse, avec la Formule souveraine (Terre des Dragons, salle du trône).", "Synthesis, with the Save the Queen Recipe (Land of Dragons, Throne Room)."]),
          at("Centurion", ["Donald — 13 Force / 3 Magie, le bâton le plus puissant du jeu.", "Donald — 13 Attack / 3 Magic, the strongest staff in the game."], ["Synthèse, avec la Formule de puissance — vaincre la Silhouette Spectrale de **Lexaeus**.", "Synthesis, with the Power Recipe — beat **Lexaeus**'s Absent Silhouette."]),
          at("Dragon Volant", ["Donald — un bon compromis force et magie, disponible tôt.", "Donald — a good strength-and-magic compromise, available early."], ["Remporter la **Coupe Cerbère**, au Colisée.", "Win the **Cerberus Cup**, at the Coliseum."]),
          at("Targe royale", ["Dingo — 1 Force / 0 Magie. L'arme de départ.", "Goofy — 1 Attack / 0 Magic. The starting weapon."], ["Dès le départ.", "From the start."]),
          at("Save the King", ["Dingo — 9 Force, et il rend les **objets plus efficaces** quand il les utilise.", "Goofy — 9 Attack, and it makes the **items he uses more effective**."], ["Synthèse, avec la Formule royale (Port Royal, cimetière d'épaves).", "Synthesis, with the Save the King Recipe (Port Royal, Ship Graveyard)."]),
          at("Bolet rare", ["Dingo — 9 Force, et **Carapace X** : 40 % de dégâts en moins. Le meilleur bouclier défensif du jeu.", "Goofy — 9 Attack, and **Damage Control**: 40% less damage taken. The best defensive shield in the game."], ["L'un des **Bolets XIII** de numéro pair.", "One of the even-numbered **Mushroom XIII**."]),
          at("Bouclier Genji", ["Dingo — solide, disponible en milieu de partie.", "Goofy — solid, available mid-game."], ["Remporter la **Coupe Titan**, au Colisée.", "Win the **Titan Cup**, at the Coliseum."]),
        ],
      },
      {
        id: "armures",
        title: L("Les armures", "The armour"),
        intro: L(
          "Elles donnent peu de défense mais des **résistances élémentaires**. Les versions **+**, **X** et **XX** sont des améliorations successives de la même pièce, obtenues par synthèse.",
          "They give little defence but **elemental resistances**. The **+**, **X** and **XX** versions are successive upgrades of the same piece, obtained by synthesis.",
        ),
        collapsed: true,
        columns: [L("Armure", "Armour"), L("Défense et résistances", "Defence and resistances"), L("Comment l'obtenir", "How to get it")],
        rows: [
          at("Ceinture de champion", ["0 Défense, mais 20 % contre Feu, Glace et Foudre à la fois.", "0 Defence, but 20% against Fire, Ice and Lightning at once."], ["Remporter le tournoi de Struggle, au quatrième jour du prologue.", "Win the Struggle tournament, on the prologue's fourth day."]),
          at("Bandana elfique", ["1 Défense, aucune résistance.", "1 Defence, no resistance."], ["Boutiques : Cité du Crépuscule, Forteresse Oubliée, Terre des Dragons, Château Disney.", "Shops: Twilight Town, Hollow Bastion, Land of Dragons, Disney Castle."]),
          at("Bracelet Brasier, Gourmette Glacier, Jonc Foudre", ["1 à 3 Défense, 20 % contre l'élément correspondant. Les versions XX montent à 25 %.", "1 to 3 Defence, 20% against the matching element. The XX versions reach 25%."], ["Boutiques, puis synthèse pour les rangs X et XX.", "Shops, then synthesis for the X and XX ranks."]),
          at("Chevillère obscure, noire, sinistre, du Chaos", ["1 à 3 Défense, 20 % puis 25 % contre les **Ténèbres** — la résistance la plus utile en fin de partie.", "1 to 3 Defence, 20% then 25% against **Darkness** — the most useful resistance late on."], ["Boutiques puis synthèse.", "Shops then synthesis."]),
          at("Chaîne d'Abas, d'Aegis, cosmique", ["20 %, puis 30 % contre Feu, Glace et Foudre réunis. La Chaîne cosmique est la meilleure du groupe.", "20%, then 30% against Fire, Ice and Lightning together. The Cosmic Chain is the best of the group."], ["Boutiques ; la Chaîne cosmique est dans un coffre de la Forteresse Oubliée.", "Shops; the Cosmic Chain is in a Hollow Bastion chest."]),
          at("Ruban rouge, Ruban bleu, Ruban jaune", ["4 Défense et **tous les éléments à la fois** : 10 %, 20 % puis 25 %. Les meilleures armures du jeu.", "4 Defence and **every element at once**: 10%, 20% then 25%. The best armour in the game."], ["Synthèse avec la Formule rouge ; le Ruban jaune vient du **puzzle Crépuscule**.", "Synthesis with the Red Recipe; the Yellow Ribbon comes from the **Sunset puzzle**."]),
          at("Talisman isolant", ["3 Défense et **40 % contre la Foudre** — la résistance la plus élevée du jeu, sur un seul élément.", "3 Defence and **40% against Lightning** — the highest single-element resistance in the game."], ["Synthèse, avec la Formule isolante — vaincre la Silhouette Spectrale de **Larxene**.", "Synthesis, with the Lightning Recipe — beat **Larxene**'s Absent Silhouette."]),
          at("Ceinture Cosmique", ["6 Défense, la valeur brute la plus élevée.", "6 Defence, the highest raw value."], ["Dans un coffre, à **Illusiopolis**.", "In a chest, at **The World That Never Was**."]),
        ],
      },
      {
        id: "accessoires",
        title: L("Les accessoires", "The accessories"),
        intro: L(
          "Ils donnent les **PC**, qui décident du nombre de capacités équipables. C'est l'emplacement le plus important du jeu : un Sora sans PC ne sait presque rien faire.",
          "They give the **AP** that decides how many abilities can be equipped. It is the most important slot in the game: a Sora without AP can barely do anything.",
        ),
        collapsed: true,
        columns: [L("Accessoire", "Accessory"), L("PC / Att. / Mag.", "AP / Atk / Mag"), L("Comment l'obtenir", "How to get it")],
        rows: [
          at("Anneau de compétences", ["1 PC", "1 AP"], ["Boutiques ; coffre à la Cité du Crépuscule.", "Shops; a chest in Twilight Town."]),
          at("Sardonyx / Chevalière argent", ["1 PC, +1 Attaque ou +1 Magie", "1 AP, +1 Attack or +1 Magic"], ["Boutique du Château de la Bête.", "Beast's Castle shop."]),
          at("Anneau forgé / Tourmaline / Chevalière or", ["2 PC, parfois +1 Attaque ou Magie", "2 AP, sometimes +1 Attack or Magic"], ["Boutiques de la Rivière intemporelle et de la Ville d'Halloween.", "Timeless River and Halloween Town shops."]),
          at("Anneau ciselé / Aquamarine / Chevalière platine", ["3 PC, parfois +1 Attaque ou Magie", "3 AP, sometimes +1 Attack or Magic"], ["Boutiques de la Ville d'Halloween et de Space Paranoids.", "Halloween Town and Space Paranoids shops."]),
          at("Amulette lunaire / Amulette stellaire", ["3 puis 5 PC, +2 Attaque et +2 Magie", "3 then 5 AP, +2 Attack and +2 Magic"], ["Synthèse, avec la Formule lunaire (Forteresse Oubliée, le chantier).", "Synthesis, with the Moon Recipe (Hollow Bastion, Restoration Site)."]),
          at("Anneau d'onyx", ["5 PC", "5 AP"], ["Remporter la **Coupe Titan**.", "Win the **Titan Cup**."]),
          at("Anneau étoilé / Anneau royal", ["6 puis 7 PC", "6 then 7 AP"], ["Synthèse, à partir de la Conception libre 2.", "Synthesis, from Free Development 2 onwards."]),
          at("Amulette cosmique", ["7 PC, +2 Attaque et +2 Magie", "7 AP, +2 Attack and +2 Magic"], ["Dans un coffre, à **Space Paranoids**.", "In a chest, at **Space Paranoids**."]),
          at("Anneau cosmique", ["8 PC", "8 AP"], ["Dans un coffre, à la **butte aux étoiles** de la Forêt des Rêves Bleus.", "In a chest, at the Hundred Acre Wood's **Starry Hill**."]),
          at("Anneau souverain", ["**30 PC** — de très loin le meilleur accessoire du jeu.", "**30 AP** — by far the best accessory in the game."], ["Terminer le **puzzle Aube**, soit 48 pièces.", "Complete the **Daylight puzzle**, that is 48 pieces."]),
          at("Épanouissement / Épanouissement +", ["5 PC, +3 Attaque ; la version + ajoute **Concentration**.", "5 AP, +3 Attack; the + version adds **Combination Boost**."], ["Synthèse, avec la Formule de pérennité — Silhouette Spectrale de **Marluxia**.", "Synthesis, with the Blossom Recipe — **Marluxia**'s Absent Silhouette."]),
          at("Grimoire sombre / Grimoire sombre +", ["5 PC, +3 Magie ; la version + ajoute **Vaillance**.", "5 AP, +3 Magic; the + version adds **Draw**."], ["Synthèse, avec la Formule sombre — Silhouette Spectrale de **Zexion**.", "Synthesis, with the Dark Recipe — **Zexion**'s Absent Silhouette."]),
          at("Anneau d'attraction / Anneau de fortune", ["Pas de PC, mais **Attraction** et **Chance** — les deux capacités de récolte.", "No AP, but **Draw** and **Lucky Lucky** — the two gathering abilities."], ["Coffre de la Forêt des Rêves Bleus ; puis synthèse avec la **Formule rare** (puzzle Deux faces).", "A Hundred Acre Wood chest; then synthesis with the **Rare Recipe** (Duality puzzle)."]),
        ],
      },
      {
        id: "objets-cles",
        title: L("Les objets-clés", "The key items"),
        intro: L(
          "Ils ne s'équipent pas : ils ouvrent quelque chose, ou attestent qu'on a fait quelque chose. Le Carnet de Jiminy les compte tous.",
          "They cannot be equipped: they open something, or attest that something has been done. Jiminy's Journal counts them all.",
        ),
        collapsed: true,
        columns: [L("Objet-clé", "Key item"), L("Ce qu'il fait", "What it does"), L("Où on l'obtient", "Where you get it")],
        rows: [
          at("Pages déchirées", ["Chacune ouvre une nouvelle zone de la Forêt des Rêves Bleus.", "Each opens a new area of the Hundred Acre Wood."], ["Château Disney, Terre des Lions, Forteresse Oubliée, Terre des Dragons, Agrabah.", "Disney Castle, Pride Lands, Hollow Bastion, Land of Dragons, Agrabah."]),
          at("Bourse", ["Le porte-monnaie de Sora.", "Sora's munny pouch."], ["Tôt, à la Cité du Crépuscule.", "Early, in Twilight Town."]),
          at("Trophée de Struggle", ["La récompense du tournoi de Roxas.", "The reward from Roxas's tournament."], ["Quatrième jour du prologue.", "The prologue's fourth day."]),
          at("Dessins de Naminé", ["Ils ouvrent le passage de la bibliothèque, au manoir.", "They open the library passage in the mansion."], ["Manoir de la Cité du Crépuscule.", "The Twilight Town mansion."]),
          at("Boule de cristal", ["Un objet d'histoire du prologue.", "A story item from the prologue."], ["Place de la Cité du Crépuscule.", "Twilight Town's plaza."]),
          at("Carte de membre", ["Elle donne accès à la maison de Merlin.", "It gives access to Merlin's house."], ["Chez Merlin, à la Forteresse Oubliée.", "At Merlin's house, in Hollow Bastion."]),
          at("Pierre de l'Olympe", ["Elle autorise les invocations aux Enfers, où elles sont normalement bloquées.", "It allows summons in the Underworld, where they are normally blocked."], ["En vainquant **Demyx**, au Colisée.", "By beating **Demyx**, at the Coliseum."]),
          at("Les quatre pendentifs", ["Chacun donne une invocation : batte, lampe, ukulélé, plume.", "Each gives a summon: bat, lamp, ukulele, feather."], ["Voir la page des invocations.", "See the summons page."]),
          at("Les seize formules", ["Chacune ouvre une recette de l'atelier des Mogs.", "Each unlocks a moogle workshop recipe."], ["Voir la page de la synthèse.", "See the synthesis page."]),
          at("Preuve de tranquilité", ["Elle débloque une couronne pour Sora.", "It unlocks a crown for Sora."], ["Satisfaire les **treize Bolets XIII**.", "Satisfy all **thirteen Mushroom XIII**."]),
          at("Preuve de non-existence", ["Elle débloque une couronne pour Sora.", "It unlocks a crown for Sora."], ["Vaincre les **treize Répliques de l'Organisation**.", "Beat all **thirteen Organisation replicas**."]),
          at("Preuve de connexion", ["Elle débloque une couronne pour Sora.", "It unlocks a crown for Sora."], ["Vaincre la **Volonté Persistante**.", "Beat the **Lingering Will**."]),
        ],
      },
    ],
    steps: [
      {
        id: "priorites",
        title: L("Ce qu'il faut équiper, dans l'ordre", "What to equip, in order"),
        text: L(
          "Kingdom Hearts II se joue sur les **PC**, pas sur la force. Chaque capacité équipée en coûte, et Sora sans PC ne dispose ni de Dernières forces, ni de Dernière chance, ni de Combo négatif — c'est-à-dire de rien de ce qui rend les combats difficiles jouables.\n\nLa priorité absolue est donc l'accessoire. Passez à l'Amulette lunaire dès que la formule est en main, puis à l'Anneau cosmique (8 PC), et à l'**Anneau souverain** dès que le puzzle Aube est fini : ses **30 PC** valent à eux seuls trois autres accessoires.\n\nPour l'armure, ne cherchez pas la défense — elle est négligeable — mais la résistance. Les **Rubans** couvrent tous les éléments à la fois et remplacent avantageusement n'importe quelle pièce spécialisée. Avant de les avoir, la Chevillère contre les Ténèbres est le meilleur choix en fin de partie.\n\nPour l'arme, changez selon la tâche : **Doux souvenir** pour récolter, **Lampe magique** pour monter la Forme Maîtrise et les invocations, **Fenrir** pour les Répliques et la Volonté Persistante, **Ultima** quand on préfère la portée aux enchaînements courts.\n\nEt n'oubliez pas Donald et Dingo : **Save the Queen** rend Donald bien plus fiable pour relever l'équipe, et le **Bolet rare** fait de Dingo un allié qui survit aux combats de fin de partie.",
          "Kingdom Hearts II is played on **AP**, not strength. Every equipped ability costs some, and a Sora without AP has no Once More, no Second Chance, no Negative Combo — that is, none of what makes the hard fights playable.\n\nThe absolute priority is therefore the accessory. Move to the Moon Amulet as soon as the recipe is in hand, then to the Cosmic Ring (8 AP), and to the **Sovereign Ring** as soon as the Daylight puzzle is finished: its **30 AP** are worth three other accessories on their own.\n\nFor armour, do not look for defence — it is negligible — but for resistance. The **Ribbons** cover every element at once and comfortably replace any specialised piece. Before you have them, the Darkness anklet is the best late-game choice.\n\nFor weapons, change with the task: **Sweet Memories** to gather, the **Lamp Charm** to level Master Form and the summons, **Fenrir** for the replicas and the Lingering Will, **Ultima** when you prefer reach to short chains.\n\nAnd do not forget Donald and Goofy: **Save the Queen** makes Donald far more reliable at reviving the party, and the **Rare Mushroom** makes Goofy an ally who survives the endgame fights.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Emplacement", "Slot"),
      intro: L(
        "Le meilleur choix de fin de partie pour chaque emplacement, et d'où il vient.",
        "The best endgame choice for each slot, and where it comes from.",
      ),
      rows: [
        { tier: L("Arme de Sora", "Sora's weapon"), reward: L("**Ultima** (synthèse) pour la puissance, **Fenrir** (Séphiroth) pour les combats difficiles, **Doux souvenir** pour la récolte", "**Ultima Weapon** (synthesis) for power, **Fenrir** (Sephiroth) for hard fights, **Sweet Memories** for gathering") },
        { tier: L("Arme de Donald", "Donald's weapon"), reward: L("**Centurion** (Silhouette de Lexaeus) ou **Save the Queen** pour le soutien", "**Centurion** (Lexaeus's Silhouette) or **Save the Queen** for support") },
        { tier: L("Arme de Dingo", "Goofy's weapon"), reward: L("**Bolet rare** (Bolets XIII) et sa Carapace X", "**Rare Mushroom** (Mushroom XIII) and its Damage Control") },
        { tier: L("Armure", "Armour"), reward: L("**Ruban jaune** (puzzle Crépuscule) — 25 % contre tous les éléments", "**Yellow Ribbon** (Sunset puzzle) — 25% against every element") },
        { tier: L("Accessoire", "Accessory"), reward: L("**Anneau souverain** (puzzle Aube) — 30 PC", "**Sovereign Ring** (Daylight puzzle) — 30 AP") },
      ],
      note: L(
        "Les deux meilleures pièces du jeu — l'Anneau souverain et le Ruban jaune — viennent des deux grands puzzles de 48 pièces. C'est la meilleure raison de ramasser les 144 couronnes.",
        "The game's two best pieces — the Sovereign Ring and the Yellow Ribbon — come from the two large 48-piece puzzles. That is the best reason to collect all 144 crowns.",
      ),
    },
  },
  {
    id: "bestiaire",
    title: L("Le bestiaire", "The bestiary"),
    tagline: L(
      "Les Sans-cœur et les Similis de Kingdom Hearts II Final Mix, avec leurs caractéristiques.",
      "Kingdom Hearts II Final Mix's Heartless and Nobodies, with their statistics.",
    ),
    entry: "heartless",
    status: "done",
    intro: L(
      "Kingdom Hearts II ne fait plus combattre les mêmes créatures que le premier jeu. Les Sans-cœur sont toujours là, plus nombreux et plus variés, mais l'Organisation leur oppose une seconde espèce : les **Similis**, qui ne se tuent pas de la même façon et qui demandent presque tous une commande de réaction.\n\nLes caractéristiques ci-dessous sont notées en **fourchette** : la première valeur est celle de l'ennemi au niveau de combat le plus bas où on le rencontre, la seconde celle qu'il atteint en fin de partie. Kingdom Hearts II fait monter ses mondes en niveau à mesure que l'histoire avance, ce qui explique des écarts parfois considérables — une Ombre passe de 15 à 50 points de vie, un Reflet de 32 à 160.\n\nLes relevés viennent du bestiaire de KHDestiny, complétés au Kingdom Hearts Wiki. Les valeurs d'attaque et de défense sont celles du mode Normal ; le mode Maître double approximativement les dégâts reçus sans changer les caractéristiques des ennemis.\n\nÀ noter : les noms français employés par KHDestiny ne correspondent pas tous à ceux de l'encyclopédie du site, qui garde parfois le nom anglais faute de traduction officielle vérifiée. Les fiches cliquables ci-dessous ne couvrent donc que les espèces dont le nom est certain des deux côtés ; les tableaux, eux, sont complets.",
      "Kingdom Hearts II no longer pits you against the same creatures as the first game. The Heartless are still there, more numerous and more varied, but the Organisation answers them with a second species: the **Nobodies**, which do not die the same way and nearly all of which demand a reaction command.\n\nThe statistics below are given as **ranges**: the first value is the enemy at the lowest battle level where you meet it, the second what it reaches by the end. Kingdom Hearts II raises its worlds' levels as the story advances, which explains sometimes considerable gaps — a Shadow goes from 15 to 50 HP, a Dusk from 32 to 160.\n\nThe readings come from KHDestiny's bestiary, completed from the Kingdom Hearts Wiki. Attack and defence values are those of Standard mode; Master roughly doubles the damage taken without changing the enemies' own statistics.\n\nOne note: the French names KHDestiny uses do not all match the site's encyclopedia, which sometimes keeps the English name for want of a verified official translation. The clickable cards below therefore cover only the species whose name is certain on both sides; the tables are complete.",
    ),
    bestiary: [
      {
        id: "sans-coeur-communs",
        title: L("Sans-cœur : les espèces que l'on croise partout", "Heartless: the species you meet everywhere"),
        intro: L(
          "Les caractéristiques sont notées **début / fin de partie**. Cliquez une fiche pour ouvrir l'entrée complète de l'encyclopédie.",
          "Statistics are given **early / late game**. Click a card to open the full encyclopedia entry.",
        ),
        beasts: [
          beast("shadow", "15-50", "10-45", "5-26", "2-80", ["Tous les mondes, du prologue à Illusiopolis", "Every world, from the prologue to The World That Never Was"], ["Le Sans-cœur de base. Il s'enfonce dans le sol pour esquiver : attendez qu'il remonte plutôt que de frapper le vide.", "The basic Heartless. It sinks into the ground to dodge: wait for it to surface rather than hitting empty air."]),
          beast("soldier", "29-82", "10-37", "5-21", "10-220", ["Cité du Crépuscule, Château Disney, Forteresse Oubliée et la plupart des mondes", "Twilight Town, Disney Castle, Hollow Bastion and most worlds"], ["Il enchaîne des coups de pied rapides. Sa garde s'ouvre après sa troisième attaque.", "It chains fast kicks. Its guard opens after its third attack."]),
          beast("large-body", "98-193", "15-34", "8-19", "58-455", ["Château de la Bête, Colisée de l'Olympe, Rivière intemporelle", "Beast's Castle, Olympus Coliseum, Timeless River"], ["Invulnérable de face : il faut passer derrière, ou le faire basculer avec une commande de réaction.", "Invulnerable from the front: go around behind, or topple it with a reaction command."]),
          beast("fat-bandit", "135-210", "22-37", "12-21", "153-585", ["Agrabah", "Agrabah"], ["Même principe que le Rondouillard, avec du feu en plus. Sa panse renvoie les coups portés de face.", "Same principle as the Large Body, with fire added. Its belly deflects blows struck from the front."]),
          beast("air-pirate", "51-76", "21-34", "11-19", "50-170", ["Port Royal, Terre des Dragons", "Port Royal, Land of Dragons"], ["Il attaque en piqué depuis les airs. Verrouillez-le et attendez sa descente.", "It dives from the air. Lock on and wait for its descent."]),
          beast("wight-knight", "57-86", "24-39", "13-22", "73-248", ["Ville d'Halloween", "Halloween Town"], ["Sautillant et imprévisible, il esquive beaucoup. La magie touche plus sûrement que la Keyblade.", "Hopping and unpredictable, it dodges a great deal. Magic lands more reliably than the Keyblade."]),
          beast("crescendo", "58", "37", "21", "110", ["Colisée de l'Olympe", "Olympus Coliseum"], ["Il appelle d'autres Sans-cœur en soufflant dans son cor : tuez-le en premier.", "It calls in more Heartless by blowing its horn: kill it first."]),
          beast("devastator", "160-230", "27-42", "15-24", "255-775", ["Space Paranoids, Forteresse Oubliée", "Space Paranoids, Hollow Bastion"], ["Le plus résistant des Sans-cœur communs. Il se déplie en tourelle et tire à distance.", "The toughest of the common Heartless. It unfolds into a turret and fires at range."]),
        ],
      },
      {
        id: "similis",
        title: L("Similis : les soldats de l'Organisation", "Nobodies: the Organisation's soldiers"),
        intro: L(
          "Presque tous demandent une **commande de réaction** pour être vraiment efficaces contre eux — les frapper comme un Sans-cœur ne suffit pas.",
          "Nearly all of them require a **reaction command** to be fought efficiently — hitting them like a Heartless is not enough.",
        ),
        beasts: [
          beast("dusk", "32-160", "5-45", "2-26", "6-600", ["Tous les mondes où l'Organisation intervient, du niveau 1 au niveau 50", "Every world the Organisation touches, from level 1 to level 50"], ["Le Simili de base. Il se tord pour esquiver ; la commande de réaction l'immobilise net.", "The basic Nobody. It writhes to dodge; the reaction command pins it outright."]),
          beast("assassin", "37-152", "7-43", "3-25", "15-860", ["Cité du Crépuscule, Illusiopolis", "Twilight Town, The World That Never Was"], ["Il plonge dans le sol et ressort sous Sora. La commande de réaction le retourne contre les autres.", "It dives into the ground and surfaces under Sora. The reaction command turns it against the others."]),
          beast("samurai", "50-160", "11-45", "5-26", "30-1000", ["Forteresse Oubliée, Cité du Crépuscule, Illusiopolis", "Hollow Bastion, Twilight Town, The World That Never Was"], ["Il propose un duel : réussir la commande de réaction le tue d'un coup, la rater coûte cher.", "It offers a duel: landing the reaction command kills it outright, missing it is expensive."]),
          beast("berserker", "160-238", "43", "25", "860", ["Cité du Crépuscule, Illusiopolis", "Twilight Town, The World That Never Was"], ["Il frappe avec un immense marteau. La commande de réaction permet de le lui prendre et de s'en servir.", "It swings an enormous hammer. The reaction command lets you take it and use it yourself."]),
          beast("sniper", "122-160", "34-45", "19-26", "425-1000", ["Terre des Dragons, Cité du Crépuscule, Illusiopolis", "Land of Dragons, Twilight Town, The World That Never Was"], ["Il tire de loin, hors de portée. La commande de réaction renvoie les projectiles.", "It fires from out of reach. The reaction command sends the shots back."]),
        ],
      },
    ],
    tables: [
      {
        id: "heartless-full",
        title: L("Tous les Sans-cœur", "Every Heartless"),
        intro: L(
          "Le relevé complet du bestiaire, dans l'ordre alphabétique français de KHDestiny. Les valeurs sont notées **début-fin de partie** : PV, attaque, défense, expérience.",
          "The complete bestiary reading, in KHDestiny's French alphabetical order. Values are given **early-late**: HP, attack, defence, EXP.",
        ),
        collapsed: true,
        columns: [L("Sans-cœur", "Heartless"), L("PV / Att. / Déf. / Exp.", "HP / Atk / Def / EXP"), L("Mondes", "Worlds")],
        rows: [
          at("Androïde", ["45-65 / 27-42 / 15-24 / 51-155", "45-65 / 27-42 / 15-24 / 51-155"], ["Forteresse Oubliée, Port Royal, Space Paranoids", "Hollow Bastion, Port Royal, Space Paranoids"]),
          at("Baron bleu", ["49-74 / 20-32 / 11-18 / 45-159", "49-74 / 20-32 / 11-18 / 45-159"], ["Rivière intemporelle", "Timeless River"]),
          at("Bille réfrigérante", ["27-42 / 22-37 / 12-21 / 13-47", "27-42 / 22-37 / 12-21 / 13-47"], ["Agrabah", "Agrabah"]),
          at("Blues émeraude", ["57-84 / 24-37 / 13-21 / 110-351", "57-84 / 24-37 / 13-21 / 110-351"], ["Ville d'Halloween, Space Paranoids, Terre des Dragons, Agrabah", "Halloween Town, Space Paranoids, Land of Dragons, Agrabah"]),
          at("Bombarde", ["36-65 / 21-42 / 11-24 / 25-155", "36-65 / 21-42 / 11-24 / 25-155"], ["Port Royal, Terre des Dragons, Space Paranoids", "Port Royal, Land of Dragons, Space Paranoids"]),
          at("Bonbonnier", ["27-42 / 22-37 / 12-21 / 31-117", "27-42 / 22-37 / 12-21 / 31-117"], ["Agrabah, Terre des Lions", "Agrabah, Pride Lands"]),
          at("Bouquiniste", ["64-92 / 27-42 / 15-24 / 153-465", "64-92 / 27-42 / 15-24 / 153-465"], ["Forteresse Oubliée, Space Paranoids", "Hollow Bastion, Space Paranoids"]),
          at("Cabot indigo", ["31-56 / 17-35 / 9-20 / 17-97", "31-56 / 17-35 / 9-20 / 17-97"], ["Colisée de l'Olympe, Port Royal", "Olympus Coliseum, Port Royal"]),
          at("Carapçon", ["32-46 / 27-42 / 15-24 / 21-62", "32-46 / 27-42 / 15-24 / 21-62"], ["Plusieurs mondes", "Several worlds"]),
          at("Carcasse", ["153-223 / 26-40 / 14-23 / 218-695", "153-223 / 26-40 / 14-23 / 218-695"], ["Terre des Lions", "Pride Lands"]),
          at("Cartomancien", ["54-84 / 22-37 / 12-21 / 92-351", "54-84 / 22-37 / 12-21 / 92-351"], ["Agrabah", "Agrabah"]),
          at("Centaurus", ["85-190 / 12-34 / 6-19 / 40-425", "85-190 / 12-34 / 6-19 / 40-425"], ["Terre des Dragons — la meilleure source de sphères de Flux du jeu", "Land of Dragons — the game's best source of Drive orbs"]),
          at("Chauffard", ["123-185 / 20-32 / 11-18 / 113-398", "123-185 / 20-32 / 11-18 / 113-398"], ["Rivière intemporelle", "Timeless River"]),
          at("Chauve-grappin", ["28-59 / 15-37 / 8-21 / 12-117", "28-59 / 15-37 / 8-21 / 12-117"], ["Château de la Bête, Colisée, Terre des Dragons, Agrabah", "Beast's Castle, the Coliseum, Land of Dragons, Agrabah"]),
          at("Chevalier gargouille", ["63-124 / 15-34 / 8-19 / 35-273", "63-124 / 15-34 / 8-19 / 35-273"], ["Château de la Bête", "Beast's Castle"]),
          at("Chevalier momie", ["57-86 / 24-39 / 13-22 / 73-248", "57-86 / 24-39 / 13-22 / 73-248"], ["Ville d'Halloween", "Halloween Town"]),
          at("Chicotin diabolique", ["215 / 39 / 22 / 620", "215 / 39 / 22 / 620"], ["Ville d'Halloween", "Halloween Town"]),
          at("Cimeterriste", ["54-84 / 22-37 / 12-21 / 61-234", "54-84 / 22-37 / 12-21 / 61-234"], ["Agrabah", "Agrabah"]),
          at("Crescendo", ["58 / 37 / 21 / 110", "58 / 37 / 21 / 110"], ["Colisée de l'Olympe", "Olympus Coliseum"]),
          at("Crypto Ombre", ["74-100 / 32-45 / 18-26 / 159-400", "74-100 / 32-45 / 18-26 / 159-400"], ["Plusieurs mondes, en fin de partie", "Several worlds, late game"]),
          at("Dévastator", ["160-230 / 27-42 / 15-24 / 255-775", "160-230 / 27-42 / 15-24 / 255-775"], ["Space Paranoids, Forteresse Oubliée", "Space Paranoids, Hollow Bastion"]),
          at("Électro-tour", ["34-89 / 12-40 / 6-23 / 24-417", "34-89 / 12-40 / 6-23 / 24-417"], ["Terre des Dragons, Château Disney, Terre des Lions", "Land of Dragons, Disney Castle, Pride Lands"]),
          at("Fleur bloquante", ["44-86 / 17-39 / 9-22 / 33-248", "44-86 / 17-39 / 9-22 / 33-248"], ["Colisée de l'Olympe, Ville d'Halloween", "Olympus Coliseum, Halloween Town"]),
          at("Globe caniculaire", ["27-42 / 22-37 / 12-21 / 13-47", "27-42 / 22-37 / 12-21 / 13-47"], ["Agrabah", "Agrabah"]),
          at("Grenadier", ["143-215 / 24-39 / 13-22 / 183-620", "143-215 / 24-39 / 13-22 / 183-620"], ["Ville d'Halloween", "Halloween Town"]),
          at("Gros bandit", ["135-210 / 22-37 / 12-21 / 153-585", "135-210 / 22-37 / 12-21 / 153-585"], ["Agrabah", "Agrabah"]),
          at("Guerrier gargouille", ["63-124 / 15-34 / 8-19 / 35-273", "63-124 / 15-34 / 8-19 / 35-273"], ["Château de la Bête", "Beast's Castle"]),
          at("Hélicopiaf", ["17-45 / 12-40 / 6-23 / 4-56", "17-45 / 12-40 / 6-23 / 4-56"], ["Plusieurs mondes — ils vont toujours par nuées", "Several worlds — they always come in swarms"]),
          at("Jazz pourpre", ["108-148 / 29-42 / 16-24 / 298-775", "108-148 / 29-42 / 16-24 / 298-775"], ["Plusieurs mondes, en fin de partie", "Several worlds, late game"]),
          at("Lancier", ["63-127 / 15-35 / 8-20 / 35-291", "63-127 / 15-35 / 8-20 / 35-291"], ["Château de la Bête, Colisée, Port Royal", "Beast's Castle, the Coliseum, Port Royal"]),
          at("Marteau-pilon", ["79-124 / 20-34 / 11-19 / 68-273", "79-124 / 20-34 / 11-19 / 68-273"], ["Rivière intemporelle, Port Royal, Château de la Bête", "Timeless River, Port Royal, Beast's Castle"]),
          at("Minute bombe", ["34-58 / 19-37 / 10-21 / 21-110", "34-58 / 19-37 / 10-21 / 21-110"], ["Château Disney, Rivière intemporelle, Colisée", "Disney Castle, Timeless River, the Coliseum"]),
          at("Mono-magnum", ["64-92 / 27-42 / 15-24 / 102-310", "64-92 / 27-42 / 15-24 / 102-310"], ["Space Paranoids, Forteresse Oubliée", "Space Paranoids, Hollow Bastion"]),
          at("Ombre", ["15-50 / 10-45 / 5-26 / 2-80", "15-50 / 10-45 / 5-26 / 2-80"], ["Tous les mondes", "Every world"]),
          at("Patrouilleur", ["64-92 / 27-42 / 15-24 / 102-310", "64-92 / 27-42 / 15-24 / 102-310"], ["Space Paranoids, Forteresse Oubliée", "Space Paranoids, Hollow Bastion"]),
          at("Pirate volant", ["51-76 / 21-34 / 11-19 / 50-170", "51-76 / 21-34 / 11-19 / 50-170"], ["Port Royal, Terre des Dragons", "Port Royal, Land of Dragons"]),
          at("Pugiliste", ["61-89 / 26-40 / 14-23 / 87-278", "61-89 / 26-40 / 14-23 / 87-278"], ["Terre des Lions", "Pride Lands"]),
          at("Rôdeur nocturne", ["34-76 / 12-34 / 6-19 / 24-255", "34-76 / 12-34 / 6-19 / 24-255"], ["Terre des Dragons", "Land of Dragons"]),
          at("Rondouillard", ["98-193 / 15-34 / 8-19 / 58-455", "98-193 / 15-34 / 8-19 / 58-455"], ["Château de la Bête, Colisée, Rivière intemporelle", "Beast's Castle, the Coliseum, Timeless River"]),
          at("Rotor mou", ["51-82 / 21-37 / 11-21 / 50-220", "51-82 / 21-37 / 11-21 / 50-220"], ["Port Royal, Colisée de l'Olympe", "Port Royal, Olympus Coliseum"]),
          at("Roto-tank", ["160-230 / 27-42 / 15-24 / 255-775", "160-230 / 27-42 / 15-24 / 255-775"], ["Plusieurs mondes, en fin de partie", "Several worlds, late game"]),
          at("Shaman", ["61-89 / 26-40 / 14-23 / 131-417", "61-89 / 26-40 / 14-23 / 131-417"], ["Terre des Lions", "Pride Lands"]),
          at("Soldat", ["29-82 / 10-37 / 5-21 / 10-220", "29-82 / 10-37 / 5-21 / 10-220"], ["Plusieurs mondes", "Several worlds"]),
          at("Spectre réversible", ["71-138 / 17-39 / 9-22 / 50-372", "71-138 / 17-39 / 9-22 / 50-372"], ["Colisée de l'Olympe, Ville d'Halloween", "Olympus Coliseum, Halloween Town"]),
          at("Terrassier", ["40-58 / 24-37 / 13-21 / 37-110", "40-58 / 24-37 / 13-21 / 37-110"], ["Ville d'Halloween, Colisée de l'Olympe", "Halloween Town, Olympus Coliseum"]),
          at("Tirette", ["760-860 / 34-39 / 19-22 / 850-1240", "760-860 / 34-39 / 19-22 / 850-1240"], ["Plusieurs mondes — le Sans-cœur-coffre, à ouvrir avant qu'il ne fuie", "Several worlds — the chest Heartless, to be opened before it flees"]),
        ],
      },
      {
        id: "nobodies-full",
        title: L("Tous les Similis", "Every Nobody"),
        intro: L(
          "Dix espèces. Presque toutes demandent une commande de réaction, et toutes montent très haut en fin de partie — à Illusiopolis, elles atteignent leur plafond.",
          "Ten species. Nearly all require a reaction command, and all climb very high by the end — at The World That Never Was they reach their ceiling.",
        ),
        collapsed: true,
        columns: [L("Simili", "Nobody"), L("PV / Att. / Déf. / Exp.", "HP / Atk / Def / EXP"), L("Mondes", "Worlds")],
        rows: [
          at("Assassin", ["37-152 / 7-43 / 3-25 / 15-860", "37-152 / 7-43 / 3-25 / 15-860"], ["Cité du Crépuscule, Illusiopolis", "Twilight Town, The World That Never Was"]),
          at("Berserker", ["160-238 / 43 / 25 / 860", "160-238 / 43 / 25 / 860"], ["Cité du Crépuscule, Illusiopolis", "Twilight Town, The World That Never Was"]),
          at("Chimère", ["124-160 / 34-45 / 19-26 / 455-1000", "124-160 / 34-45 / 19-26 / 455-1000"], ["Château de la Bête, Cité du Crépuscule, Illusiopolis", "Beast's Castle, Twilight Town, The World That Never Was"]),
          at("Funambule", ["108-160 / 29-45 / 16-26 / 298-1000", "108-160 / 29-45 / 16-26 / 298-1000"], ["Forteresse Oubliée, Cité du Crépuscule, Illusiopolis", "Hollow Bastion, Twilight Town, The World That Never Was"]),
          at("Incantateur", ["160 / 45 / 26 / 1000", "160 / 45 / 26 / 1000"], ["Illusiopolis uniquement", "The World That Never Was only"]),
          at("Joueur", ["127-160 / 35-45 / 20-26 / 485-1000", "127-160 / 35-45 / 20-26 / 485-1000"], ["Port Royal, Cité du Crépuscule, Illusiopolis", "Port Royal, Twilight Town, The World That Never Was"]),
          at("Reflet", ["32-160 / 5-45 / 2-26 / 6-600", "32-160 / 5-45 / 2-26 / 6-600"], ["Tous les mondes où l'Organisation intervient", "Every world the Organisation touches"]),
          at("Samouraï", ["50-160 / 11-45 / 5-26 / 30-1000", "50-160 / 11-45 / 5-26 / 30-1000"], ["Forteresse Oubliée, Cité du Crépuscule, Illusiopolis", "Hollow Bastion, Twilight Town, The World That Never Was"]),
          at("Sniper", ["122-160 / 34-45 / 19-26 / 425-1000", "122-160 / 34-45 / 19-26 / 425-1000"], ["Terre des Dragons, Cité du Crépuscule, Illusiopolis", "Land of Dragons, Twilight Town, The World That Never Was"]),
          at("Sombreur", ["20-100 / 5-45 / 2-26 / 4-400", "20-100 / 5-45 / 2-26 / 4-400"], ["Cité du Crépuscule, Forteresse Oubliée, Illusiopolis", "Twilight Town, Hollow Bastion, The World That Never Was"]),
        ],
      },
      {
        id: "final-mix",
        title: L("Les exclusivités de Final Mix", "Final Mix exclusives"),
        intro: L(
          "Dix espèces ajoutées par Final Mix, presque toutes cantonnées à la **Caverne du Souvenir**. Elles sont aussi les seules sources des matériaux de Tranquilité et de Souvenir.",
          "Ten species added by Final Mix, nearly all confined to the **Cavern of Remembrance**. They are also the only sources of Remembrance and Tranquility materials.",
        ),
        columns: [L("Espèce", "Species"), L("Où la trouver", "Where to find it"), L("Ce qu'elle lâche", "What it drops")],
        rows: [
          at("Champion", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Viking volant", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Marteau-piqueur", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Piquier", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Bolide fou", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Fantôme vice-versa", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Nécromancien", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Crochiroptère", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Survolté", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
          at("Archimage", ["Jardin Radieux — Caverne du Souvenir", "Radiant Garden — Cavern of Remembrance"], ["Matériaux de rang A et S", "Rank A and S materials"]),
        ],
      },
    ],
    steps: [
      {
        id: "reactions",
        title: L("Les Similis ne se combattent pas comme les Sans-cœur", "Nobodies are not fought like Heartless"),
        image: { src: "/images/walkthrough/kh2-illusiopolis-4.webp", credit: credit("The_World_That_Never_Was_gameplay_4.png"), width: 480, height: 270 },
        text: L(
          "C'est la leçon que Kingdom Hearts II met une dizaine d'heures à faire passer. Un Sans-cœur se tue en le frappant ; un Simili se tue en répondant à ce qu'il propose.\n\nChaque espèce a sa **commande de réaction**, et elle change tout. Le **Samouraï** offre un duel : réussir la réaction le tue d'un seul coup, la rater expose Sora à toute sa série. Le **Berserker** porte un marteau qu'on peut lui prendre et retourner contre le groupe. L'**Assassin** plonge dans le sol, et la réaction le fait exploser au milieu des siens. Le **Sniper** tire hors de portée, et la réaction renvoie ses projectiles.\n\nSans les réactions, ces combats durent deux fois plus longtemps et coûtent bien plus cher. Avec elles, une salle pleine de Similis se vide en quelques secondes.\n\nDeux capacités méritent d'être équipées en permanence à partir de la Cité du Crépuscule : **Attraction**, qui rapproche Sora de la cible et rend les réactions plus faciles à déclencher, et **Roulade**, pour sortir des attaques de zone des Berserkers.",
          "This is the lesson Kingdom Hearts II takes about ten hours to land. A Heartless dies from being hit; a Nobody dies from answering what it offers.\n\nEach species has its **reaction command**, and it changes everything. The **Samurai** offers a duel: landing the reaction kills it in one, missing it exposes Sora to the whole string. The **Berserker** carries a hammer you can take and turn on the group. The **Assassin** dives into the ground, and the reaction detonates it among its own. The **Sniper** fires from out of reach, and the reaction sends the shots back.\n\nWithout the reactions these fights take twice as long and cost far more. With them, a room full of Nobodies empties in seconds.\n\nTwo abilities are worth keeping equipped from Twilight Town onwards: **Draw**, which pulls Sora towards the target and makes reactions easier to trigger, and **Dodge Roll**, to get out of the Berserkers' area attacks.",
        ),
      },
      {
        id: "farm",
        title: L("Où farmer quoi", "Where to farm what"),
        text: L(
          "Trois endroits reviennent sans arrêt, et ce n'est pas un hasard.\n\nLe **Nid du dragon**, à la Terre des Dragons, pour les **Centaurus** : ils lâchent des sphères de Flux en quantité, ce qui en fait la meilleure source d'expérience pour la Forme Maîtrise. Les Hélicopiafs qui les accompagnent montent la Forme Sagesse dans la foulée.\n\nLe **manoir de la Cité du Crépuscule** et la **Forteresse Oubliée**, pour les groupes de Similis : c'est là que se monte la Forme Suprême, qui ne compte que les Similis, et la jauge de Flux s'y remplit assez vite pour enchaîner les invocations.\n\nLa **Caverne du Souvenir**, pour tout le reste : c'est la seule source des matériaux de Tranquilité et de Souvenir, et de loin la meilleure pour les Cristaux de rang S. Équipez **Doux souvenir** pour doubler les objets lâchés, empilez les capacités **Chance** sur les trois personnages, et un seul aller-retour rapporte plus que dix salles ailleurs.\n\nDernier détail : les mondes montent en niveau avec l'histoire. Un ennemi farmé tôt rapporte peu ; le même en fin de partie rapporte cinq à dix fois plus. Il n'y a donc aucun intérêt à farmer avant d'avoir terminé l'histoire.",
          "Three places come up again and again, and it is no accident.\n\nThe **Dragon's Nest**, in the Land of Dragons, for the **Centaurions**: they drop Drive orbs in quantity, which makes it the best source of Master Form EXP. The Rapid Thrusters alongside level Wisdom Form at the same time.\n\nThe **Twilight Town mansion** and **Hollow Bastion**, for the Nobody groups: this is where Final Form levels, since it counts only Nobodies, and the Drive gauge refills fast enough there to chain summons.\n\nThe **Cavern of Remembrance**, for everything else: it is the only source of Remembrance and Tranquility materials, and by far the best for rank S Crystals. Equip **Sweet Memories** to double drops, stack **Lucky Lucky** across all three characters, and a single run pays more than ten rooms elsewhere.\n\nOne last detail: the worlds level up with the story. An enemy farmed early pays little; the same one late pays five to ten times more. So there is no point farming before the story is finished.",
        ),
      },
    ],
  },
  {
    id: "trophees",
    title: L("Les trophées", "Trophies"),
    tagline: L(
      "Cinquante et un trophées, tous obtenables en une seule partie — en mode Maître.",
      "Fifty-one trophies, all obtainable in a single playthrough — on Master.",
    ),
    entry: "jiminy-cricket",
    status: "done",
    intro: L(
      "La liste ci-dessous est celle de **Kingdom Hearts II Final Mix** tel qu'il est publié dans HD 2.5 ReMIX : cinquante et un trophées, dont un de platine. Les noms sont ceux de la version française officielle.\n\nLe point qui décide de tout : **aucun trophée n'est manquable**, et le platine peut s'obtenir en **une seule partie** — à condition de la faire en mode **Maître**, puisque le trophée « Réussite critique » ne s'obtient nulle part ailleurs. C'est la différence avec les deux jeux de la première compilation.\n\nSi le mode Maître vous paraît trop rude pour y faire aussi toute l'annexe — et c'est la partie la plus dure de toute la série —, la solution courante consiste à faire la partie principale en Normal ou en Facile, puis une seconde partie rapide en Maître, cinématiques passées, uniquement pour ce trophée.\n\nComptez une **soixantaine d'heures** pour le platine, selon votre aisance et le nombre de parties.",
      "The list below is for **Kingdom Hearts II Final Mix** as published in HD 2.5 ReMIX: fifty-one trophies, one of them platinum. The names are those of the official French release.\n\nThe point that decides everything: **no trophy is missable**, and the platinum can be obtained in **a single playthrough** — provided that playthrough is on **Master**, since the Critical Success trophy is available nowhere else. That is the difference from the first collection's two games.\n\nIf Master seems too harsh to also do all the side content in — and it is the hardest stretch in the whole series — the common solution is to play the main save on Standard or Easy, then a quick second save on Master, cutscenes skipped, purely for that trophy.\n\nAllow around **sixty hours** for the platinum, depending on your comfort and the number of saves.",
    ),
    tables: [
      {
        id: "progression",
        title: L("Progression et difficulté", "Progress and difficulty"),
        intro: L(
          "Les trophées qui tombent en jouant, plus les deux qui dépendent du mode choisi au démarrage.",
          "The trophies that fall as you play, plus the two that depend on the mode chosen at the start.",
        ),
        columns: [L("Trophée", "Trophy"), L("Condition", "Condition"), L("Rang", "Grade")],
        rows: [
          at("As de KINGDOM HEARTS II", ["Obtenir tous les trophées.", "Obtain every trophy."], ["Platine", "Platinum"]),
          at("Réussite critique", ["Terminer le jeu en mode Maître.", "Finish the game on Master."], ["Or", "Gold"]),
          at("Expertise", ["Terminer le jeu en mode Expert.", "Finish the game on Proud."], ["Argent", "Silver"]),
          at("Réussite admirable", ["Terminer le jeu et regarder la dernière scène.", "Finish the game and watch the final scene."], ["Argent", "Silver"]),
          at("Atteindre les cimes", ["Atteindre le niveau 99 avec Sora.", "Reach level 99 with Sora."], ["Argent", "Silver"]),
          at("La fin des vacances", ["Terminer les événements vécus par Roxas.", "Finish the events Roxas lives through."], ["Bronze", "Bronze"]),
          at("Vive le Roi", ["Être secouru par le Roi.", "Be rescued by the King."], ["Bronze", "Bronze"]),
          at("Retrouvailles", ["Retrouver Riku et Kairi.", "Find Riku and Kairi again."], ["Bronze", "Bronze"]),
        ],
      },
      {
        id: "mondes",
        title: L("Les mondes", "The worlds"),
        intro: L(
          "Un trophée par monde entièrement visité, c'est-à-dire ses deux visites terminées. Ils tombent naturellement en suivant le cheminement.",
          "One trophy per world fully visited, meaning both visits finished. They fall naturally by following the walkthrough.",
        ),
        columns: [L("Trophée", "Trophy"), L("Monde", "World"), L("Rang", "Grade")],
        rows: [
          at("Déjà-vu", ["Cité du Crépuscule", "Twilight Town"], ["Bronze", "Bronze"]),
          at("Un monde intemporel", ["Rivière Intemporelle", "Timeless River"], ["Bronze", "Bronze"]),
          at("Mieux que les honneurs", ["Terre des Dragons", "Land of Dragons"], ["Bronze", "Bronze"]),
          at("Y'a quelque chose...", ["Château de la Bête", "Beast's Castle"], ["Bronze", "Bronze"]),
          at("Gloire au héros", ["Colisée de l'Olympe", "Olympus Coliseum"], ["Bronze", "Bronze"]),
          at("Malédiction levée", ["Port Royal", "Port Royal"], ["Bronze", "Bronze"]),
          at("Amitié véritable", ["Agrabah", "Agrabah"], ["Bronze", "Bronze"]),
          at("Plaisir d'offrir", ["Ville d'Halloween", "Halloween Town"], ["Bronze", "Bronze"]),
          at("Retour royal", ["Terre des Lions", "Pride Lands"], ["Bronze", "Bronze"]),
          at("Atomes crochus", ["Space Paranoids", "Space Paranoids"], ["Bronze", "Bronze"]),
          at("Ensemble pour toujours", ["Forêt des Rêves Bleus", "Hundred Acre Wood"], ["Bronze", "Bronze"]),
          at("Confluences", ["Atlantica", "Atlantica"], ["Bronze", "Bronze"]),
        ],
      },
      {
        id: "combat",
        title: L("Combats et tournois", "Fights and tournaments"),
        intro: L(
          "Les huit coupes du Colisée, les trois grands défis de fin de partie, et les Bolets XIII. C'est la partie la plus longue du platine.",
          "The eight Coliseum cups, the three great endgame challenges, and the Mushroom XIII. This is the longest part of the platinum.",
        ),
        columns: [L("Trophée", "Trophy"), L("Condition", "Condition"), L("Rang", "Grade")],
        rows: [
          at("Graine de héros", ["Remporter la coupe Peine et Panique.", "Win the Pain and Panic Cup."], ["Bronze", "Bronze"]),
          at("Héros en devenir", ["Remporter la coupe Cerbère.", "Win the Cerberus Cup."], ["Bronze", "Bronze"]),
          at("Demi-héros", ["Remporter la coupe Titan.", "Win the Titan Cup."], ["Bronze", "Bronze"]),
          at("Véritable héros", ["Remporter la coupe de la Destinée.", "Win the Goddess of Fate Cup."], ["Bronze", "Bronze"]),
          at("Concurrent du Colisée", ["Remporter la coupe Peine et Panique Paradoxe.", "Win the Pain and Panic Paradox Cup."], ["Bronze", "Bronze"]),
          at("Grand favori du Colisée", ["Remporter la coupe Cerbère Paradoxe.", "Win the Cerberus Paradox Cup."], ["Bronze", "Bronze"]),
          at("Héros du Colisée", ["Remporter la coupe Titan Paradoxe.", "Win the Titan Paradox Cup."], ["Bronze", "Bronze"]),
          at("Dieu du Colisée", ["Remporter la coupe Hadès Paradoxe — cinquante manches.", "Win the Hades Paradox Cup — fifty rounds."], ["Argent", "Silver"]),
          at("One-Winged Angel", ["Vaincre Séphiroth.", "Beat Sephiroth."], ["Argent", "Silver"]),
          at("Volonté Persistante", ["Vaincre la Volonté Persistante.", "Beat the Lingering Will."], ["Argent", "Silver"]),
          at("Organisation sous domination", ["Vaincre les répliques de l'Organisation XIII.", "Beat the Organisation XIII replicas."], ["Or", "Gold"]),
          at("Aller aux champignons", ["Satisfaire les Bolets XIII.", "Satisfy the Mushroom XIII."], ["Argent", "Silver"]),
        ],
      },
      {
        id: "carnet",
        title: L("Le Carnet de Jiminy", "Jiminy's Journal"),
        intro: L(
          "Douze sections, douze trophées de bronze. Réunis, ils valent le Carnet complet — c'est-à-dire l'une des conditions de la fin secrète.",
          "Twelve sections, twelve bronze trophies. Together they amount to the complete Journal — one of the secret-ending conditions.",
        ),
        columns: [L("Trophée", "Trophy"), L("Section du Carnet", "Journal section"), L("Rang", "Grade")],
        rows: [
          at("Chercheur", ["Rapports d'Ansem", "Secret Ansem Reports"], ["Bronze", "Bronze"]),
          at("Professeur", ["Fiches personnages", "Character entries"], ["Bronze", "Bronze"]),
          at("Docteur ès Sans-cœur", ["Sans-cœur", "Heartless"], ["Bronze", "Bronze"]),
          at("Docteur ès Simili", ["Simili", "Nobodies"], ["Bronze", "Bronze"]),
          at("Chasseur de trésors", ["Trésors", "Treasures"], ["Bronze", "Bronze"]),
          at("Collectionneur", ["Puzzles", "Puzzles"], ["Bronze", "Bronze"]),
          at("Explorateur", ["Plans", "Maps"], ["Bronze", "Bronze"]),
          at("Conquérant", ["Missions", "Missions"], ["Bronze", "Bronze"]),
          at("Petit joueur", ["Mini-jeux", "Mini-games"], ["Bronze", "Bronze"]),
          at("Combattant coopératif", ["Coopérations", "Limits"], ["Bronze", "Bronze"]),
          at("Maître-artisan", ["Rapport de synthèse", "Synthesis report"], ["Bronze", "Bronze"]),
          at("Album de famille", ["Organigramme", "Character chart"], ["Bronze", "Bronze"]),
        ],
      },
      {
        id: "divers",
        title: L("Mini-jeux, formes et vaisseau Gummi", "Mini-games, forms and the Gummi ship"),
        intro: L(
          "Les sept derniers. « Rongé par les Ténèbres » est le seul qui demande de mal jouer volontairement.",
          "The last seven. Consumed by Darkness is the only one that asks you to play badly on purpose.",
        ),
        columns: [L("Trophée", "Trophy"), L("Condition", "Condition"), L("Rang", "Grade")],
        rows: [
          at("Pro-skateur", ["Gagner 5 000 points en skateboard.", "Score 5,000 points on the skateboard."], ["Bronze", "Bronze"]),
          at("Champion de Struggle", ["Vaincre un adversaire en lui volant l'intégralité de ses orbes.", "Beat an opponent by taking every one of his orbs."], ["Bronze", "Bronze"]),
          at("Rongé par les Ténèbres", ["Avoir adopté la Non-Forme treize fois.", "Enter Antiform thirteen times."], ["Bronze", "Bronze"]),
          at("Pilote de chasse", ["Obtenir un grade S à la fin d'une mission en vaisseau Gummi.", "Get an S rank at the end of a Gummi mission."], ["Bronze", "Bronze"]),
          at("Roi du ciel", ["Obtenir un grade S sur chacune des routes d'une mission Gummi.", "Get an S rank on every route of one Gummi mission."], ["Bronze", "Bronze"]),
          at("Dieu du ciel", ["Obtenir un grade S sur chacune des routes d'une mission spéciale.", "Get an S rank on every route of a special mission."], ["Bronze", "Bronze"]),
          at("Ingénieur aéronautique", ["Obtenir tous les modèles de vaisseaux Gummi.", "Obtain every Gummi ship model."], ["Argent", "Silver"]),
        ],
      },
    ],
    steps: [
      {
        id: "strategie",
        title: L("Comment s'y prendre", "How to go about it"),
        text: L(
          "Le platine se joue sur une seule décision : **le mode de la partie principale**.\n\nEn **mode Maître**, tout tient en une partie — « Réussite critique », « Expertise » et « Réussite admirable » tombent ensemble, et il n'y a rien à refaire. Mais l'annexe de Kingdom Hearts II en mode Maître est ce qu'il y a de plus dur dans toute la série : la Coupe Hadès Paradoxe, les treize Répliques et la Volonté Persistante y deviennent des épreuves d'endurance.\n\nEn **Normal ou Facile**, la partie est confortable, l'annexe reste longue mais faisable, et il suffit ensuite d'une **seconde partie en Maître**, cinématiques passées, pour le seul trophée manquant. C'est plus long sur le papier, plus court en pratique pour beaucoup de joueurs.\n\nDans les deux cas, l'ordre efficace est le même : terminer l'histoire, ouvrir la Caverne du Souvenir, monter formes et invocations au niveau 7 en récoltant les matériaux, puis attaquer les coupes Paradoxe, les Répliques, les Bolets et la Volonté Persistante. Le Carnet de Jiminy se remplit presque entièrement en chemin.\n\nAttention tout de même à un détail : « Rongé par les Ténèbres » demande d'avoir pris la **Non-Forme treize fois**. Elle sort au hasard, et de moins en moins souvent à mesure que les formes montent. Si le compte n'y est pas en fin de partie, il faut la provoquer en enchaînant les transformations.",
          "The platinum turns on a single decision: **the main save's mode**.\n\nOn **Master**, everything fits in one save — Critical Success, Expertise and Admirable Success all fall together, and there is nothing to redo. But Kingdom Hearts II's side content on Master is the hardest thing in the whole series: the Hades Paradox Cup, the thirteen replicas and the Lingering Will all become endurance tests.\n\nOn **Standard or Easy**, the save is comfortable, the side content stays long but doable, and a **second Master save** with cutscenes skipped then covers the one missing trophy. Longer on paper, shorter in practice for many players.\n\nEither way the efficient order is the same: finish the story, open the Cavern of Remembrance, raise forms and summons to level 7 while gathering materials, then take on the Paradox Cups, the replicas, the Mushrooms and the Lingering Will. Jiminy's Journal fills in almost entirely along the way.\n\nOne detail to watch: Consumed by Darkness asks for **Antiform thirteen times**. It appears at random, and less and less often as the forms level up. If the count is short at the end, you have to provoke it by chaining transformations.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Rang", "Grade"),
      intro: L(
        "La répartition des cinquante et un trophées.",
        "How the fifty-one trophies break down.",
      ),
      rows: [
        { tier: L("Platine", "Platinum"), reward: L("1 — « As de KINGDOM HEARTS II », pour tous les autres", "1 — the platinum, for every other trophy") },
        { tier: L("Or", "Gold"), reward: L("2 — « Réussite critique » et « Organisation sous domination »", "2 — Critical Success and Organisation Dominated") },
        { tier: L("Argent", "Silver"), reward: L("8 — dont Séphiroth, la Volonté Persistante, les Bolets XIII et la Coupe Hadès Paradoxe", "8 — including Sephiroth, the Lingering Will, the Mushroom XIII and the Hades Paradox Cup") },
        { tier: L("Bronze", "Bronze"), reward: L("40 — les mondes, les coupes, les douze sections du Carnet, les mini-jeux et le vaisseau Gummi", "40 — the worlds, the cups, the Journal's twelve sections, the mini-games and the Gummi ship") },
      ],
      note: L(
        "Aucun trophée n'est manquable. Le seul qui impose son mode est « Réussite critique », en mode Maître ; « Expertise » s'obtient aussi en Maître, puisque la difficulté supérieure valide l'inférieure.",
        "No trophy is missable. The only one that dictates its mode is Critical Success, on Master; Expertise is also earned on Master, since the higher difficulty satisfies the lower.",
      ),
    },
  },
  {
    id: "fin-secrete",
    title: L("Les fins secrètes", "The secret endings"),
    tagline: L(
      "Deux scènes cachées, et des conditions qui changent selon la difficulté choisie.",
      "Two hidden scenes, and conditions that change with the difficulty you chose.",
    ),
    entry: "terra",
    status: "done",
    intro: L(
      "Kingdom Hearts II Final Mix cache deux scènes. La première, **« La Réunion »**, se contente d'être la fin du jeu : elle apparaît quand on a visité tous les mondes et terminé l'histoire. La seconde est autre chose — c'est **« Birth by Sleep »**, la scène qui annonce tout un jeu à venir, et celle-là se mérite.\n\nSes conditions dépendent de la **difficulté choisie au démarrage**, et c'est le point que beaucoup découvrent trop tard : en mode Facile, elle est tout simplement **inaccessible**, quoi qu'on fasse. Le choix fait à la première minute de la partie décide donc de ce qu'on pourra voir à la dernière.\n\nPlus la difficulté est haute, moins il y a à faire. En mode Maître, il suffit de terminer le jeu et d'obtenir la **couronne dorée** ; en mode Normal, il faut le Carnet de Jiminy complet **et** toutes les missions Gummi. C'est la logique du jeu : la difficulté remplace la complétion.\n\nUne fois débloquées, les deux scènes se revoient depuis le **théâtre** du menu principal, sans refaire la partie.",
      "Kingdom Hearts II Final Mix hides two scenes. The first, **The Gathering**, is simply the end of the game: it appears once every world has been visited and the story finished. The second is something else — it is **Birth by Sleep**, the scene that announces a whole game to come, and that one has to be earned.\n\nIts conditions depend on the **difficulty chosen at the start**, and that is the point many discover too late: on Easy it is simply **unreachable**, whatever you do. The choice made in the first minute of the save therefore decides what you can see in the last.\n\nThe higher the difficulty, the less there is to do. On Master it is enough to finish the game and obtain the **golden crown**; on Normal you need the complete Jiminy's Journal **and** every Gummi mission. That is the game's logic: difficulty stands in for completion.\n\nOnce unlocked, both scenes can be rewatched from the **theatre** in the main menu, without replaying the save.",
    ),
    tables: [
      {
        id: "conditions",
        title: L("Les conditions, difficulté par difficulté", "The conditions, difficulty by difficulty"),
        intro: L(
          "Le mode se choisit au tout début de la partie et ne se change plus. Vérifiez ce tableau avant de commencer, pas après.",
          "The mode is chosen at the very start of the save and cannot be changed. Check this table before starting, not after.",
        ),
        columns: [L("Mode", "Mode"), L("Ce qu'il faut pour « Birth by Sleep »", "What Birth by Sleep requires"), L("Ce que cela implique", "What that means in practice")],
        rows: [
          at("Facile", ["**Inaccessible.** La scène ne se débloque pas, quelles que soient les conditions remplies.", "**Unreachable.** The scene does not unlock, whatever conditions are met."], ["Si vous voulez la fin secrète, ne choisissez pas ce mode — même pour une première partie.", "If you want the secret ending, do not choose this mode — not even for a first playthrough."]),
          at("Normal", ["Terminer le jeu, **compléter le Carnet de Jiminy**, et réussir **toutes les missions Gummi**.", "Finish the game, **complete Jiminy's Journal**, and clear **every Gummi mission**."], ["Le chemin le plus long : c'est la complétion intégrale, missions Gummi comprises.", "The longest path: full completion, Gummi missions included."]),
          at("Expert", ["Terminer le jeu et **compléter le Carnet de Jiminy**.", "Finish the game and **complete Jiminy's Journal**."], ["Les missions Gummi ne sont plus exigées. C'est le meilleur compromis pour une partie unique.", "Gummi missions are no longer required. The best compromise for a single playthrough."]),
          at("Maître", ["Terminer le jeu et obtenir la **couronne dorée**.", "Finish the game and obtain the **golden crown**."], ["Le plus court, mais le mode le plus dur du jeu. C'est aussi celui qu'exige le trophée **Réussite critique**.", "The shortest, but the hardest mode in the game. It is also what the **Critical Success** trophy demands."]),
        ],
      },
      {
        id: "carnet",
        title: L("Ce que « compléter le Carnet » veut dire", "What \"completing the Journal\" means"),
        intro: L(
          "Le Carnet de Jiminy compte douze sections, et chacune a son trophée. C'est la liste à consulter quand la fin secrète refuse de se débloquer.",
          "Jiminy's Journal has twelve sections, each with its own trophy. This is the list to check when the secret ending refuses to unlock.",
        ),
        columns: [L("Section", "Section"), L("Ce qu'elle demande", "What it asks for"), L("Où c'est traité", "Where it is covered")],
        rows: [
          at("Rapports d'Ansem", ["Les treize rapports — tous donnés par l'histoire.", "All thirteen reports — every one granted by the story."], ["Voir la page des rapports d'Ansem.", "See the Secret Ansem Reports page."]),
          at("Fiches personnages", ["Rencontrer tous les personnages du jeu.", "Meet every character in the game."], ["Tombe tout seul en visitant chaque monde entièrement.", "Falls on its own by visiting every world fully."]),
          at("Sans-cœur et Simili", ["Avoir croisé chaque espèce au moins une fois.", "Having met each species at least once."], ["Voir le bestiaire — attention aux exclusivités de la Caverne du Souvenir.", "See the bestiary — mind the Cavern of Remembrance exclusives."]),
          at("Trésors", ["Ouvrir tous les coffres de tous les mondes.", "Open every chest in every world."], ["La Rivière intemporelle se ferme définitivement : ses coffres sont les seuls vraiment manquables.", "The Timeless River closes for good: its chests are the only truly missable ones."]),
          at("Puzzles", ["Terminer les six puzzles, soit 144 pièces.", "Complete the six puzzles, that is 144 pieces."], ["Voir la page des puzzles.", "See the puzzles page."]),
          at("Plans", ["Ramasser la carte de chaque monde.", "Pick up every world's map."], ["Elles sont toutes dans des coffres, sur le chemin.", "They are all in chests, on the way."]),
          at("Missions et mini-jeux", ["Atteindre l'objectif chiffré de chaque épreuve.", "Meet the numbered target of every challenge."], ["Voir la page des mini-jeux et missions.", "See the mini-games and missions page."]),
          at("Coopérations", ["Déclencher chaque coopération au moins une fois.", "Trigger every Limit at least once."], ["Pensez aux coopérations d'invocation, souvent oubliées.", "Do not forget the summon Limits, easily overlooked."]),
          at("Rapport de synthèse", ["Créer chaque objet de l'atelier des Mogs.", "Craft every item in the moogle workshop."], ["Voir la page de la synthèse : c'est la section la plus longue.", "See the synthesis page: this is the longest section."]),
          at("Organigramme", ["Compléter l'arbre des relations entre personnages.", "Complete the character relationship chart."], ["Se remplit avec les fiches personnages.", "Fills in alongside the character entries."]),
        ],
      },
    ],
    steps: [
      {
        id: "couronne",
        title: L("La couronne dorée, et pourquoi elle change tout", "The golden crown, and why it changes everything"),
        text: L(
          "En mode Maître, la fin secrète ne demande pas le Carnet complet mais la **couronne dorée** — l'accessoire de tête que Sora peut porter, et qui n'apparaît qu'une fois les grands défis de fin de partie derrière soi.\n\nC'est un raccourci apparent. Dans les faits, la couronne dorée exige la **Volonté Persistante**, les **Répliques de l'Organisation** et les **Bolets XIII**, c'est-à-dire les trois contenus les plus difficiles du jeu, dans son mode le plus dur. Le mode Maître échange donc de la collecte contre du combat.\n\nLequel choisir dépend entièrement de ce qu'on aime. Une partie en **Expert** avec le Carnet complet est longue mais sans mur : tout y est faisable avec de la patience. Une partie en **Maître** est courte sur le papier et brutale en pratique, surtout au début, où Sora encaisse le double de dégâts avec la moitié des capacités.\n\nLe seul vrai piège reste le mode **Facile** : il est confortable, il permet de tout collecter, et il ne débloquera jamais la scène. Si la fin secrète compte pour vous, c'est la seule décision à ne pas prendre à la légère.",
          "On Master, the secret ending does not ask for a complete Journal but for the **golden crown** — the head accessory Sora can wear, which only appears once the great endgame challenges are behind you.\n\nIt is a shortcut in appearance only. In practice the golden crown requires the **Lingering Will**, the **Organisation replicas** and the **Mushroom XIII**, that is, the three hardest pieces of content in the game, on its hardest mode. Master trades collection for combat.\n\nWhich to choose depends entirely on what you enjoy. A **Proud** playthrough with the full Journal is long but has no wall: everything in it is doable with patience. A **Master** playthrough is short on paper and brutal in practice, especially early, where Sora takes double damage with half the abilities.\n\nThe one real trap remains **Easy**: it is comfortable, it lets you collect everything, and it will never unlock the scene. If the secret ending matters to you, that is the one decision not to take lightly.",
        ),
      },
      {
        id: "revoir",
        title: L("Revoir les scènes", "Rewatching the scenes"),
        text: L(
          "Une fois débloquées, les deux scènes s'ajoutent au **théâtre** du menu principal, et s'y regardent autant de fois qu'on veut, sans toucher à la sauvegarde.\n\n« La Réunion » est courte : trois silhouettes encapuchonnées dans un désert de Keyblades. Elle ne s'explique pas dans Kingdom Hearts II — c'est le rôle de Birth by Sleep, six ans plus tard.\n\n« Birth by Sleep » est nettement plus longue et montre l'affrontement dont l'autre scène est la conséquence. Elle ne raconte rien de ce que Sora a vécu : c'est un prologue, pas un épilogue, et il faut l'avoir vue pour comprendre ce que la **Volonté Persistante** fait au Château Disney.\n\nLa scène compte pour le trophée **Réussite admirable**, qui demande simplement d'avoir terminé le jeu et regardé la dernière scène.",
          "Once unlocked, both scenes are added to the **theatre** in the main menu, and can be watched as often as you like without touching the save.\n\nThe Gathering is short: three hooded figures in a desert of Keyblades. It is not explained within Kingdom Hearts II — that is Birth by Sleep's job, six years later.\n\nBirth by Sleep is markedly longer and shows the confrontation the other scene is the consequence of. It tells nothing of what Sora lived through: it is a prologue, not an epilogue, and you need to have seen it to understand what the **Lingering Will** is doing at Disney Castle.\n\nThe scene counts for the **Admirable Success** trophy, which simply asks that you finish the game and watch the final scene.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Scène", "Scene"),
      intro: L(
        "Les deux scènes cachées et ce qu'il faut pour les voir.",
        "The two hidden scenes and what it takes to see them.",
      ),
      rows: [
        { tier: L("« La Réunion »", "The Gathering"), reward: L("Visiter tous les mondes et terminer le jeu — quelle que soit la difficulté", "Visit every world and finish the game — on any difficulty") },
        { tier: L("« Birth by Sleep » — mode Facile", "Birth by Sleep — Easy"), reward: L("**Impossible à débloquer**", "**Cannot be unlocked**") },
        { tier: L("« Birth by Sleep » — mode Normal", "Birth by Sleep — Standard"), reward: L("Terminer le jeu, Carnet de Jiminy complet, et toutes les missions Gummi", "Finish the game, complete Jiminy's Journal, and clear every Gummi mission") },
        { tier: L("« Birth by Sleep » — mode Expert", "Birth by Sleep — Proud"), reward: L("Terminer le jeu et compléter le Carnet de Jiminy", "Finish the game and complete Jiminy's Journal") },
        { tier: L("« Birth by Sleep » — mode Maître", "Birth by Sleep — Critical"), reward: L("Terminer le jeu et obtenir la **couronne dorée**", "Finish the game and obtain the **golden crown**") },
      ],
      note: L(
        "Le mode se choisit au démarrage de la partie et ne se change plus. C'est la seule décision de Kingdom Hearts II qui puisse rendre un contenu définitivement inaccessible.",
        "The mode is chosen when the save is created and cannot be changed. It is the only decision in Kingdom Hearts II that can make content permanently unreachable.",
      ),
    },
  },
];
