import type { LocalizedText } from "@/data/games";
import type { WalkPlace, WalkQuest } from "./types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/** Une ligne d'emplacement : monde ou zone, ce qu'on y trouve, où, et ce qu'il faut avoir. */
const at = (world: string, what: [string, string], where: [string, string], requires?: [string, string]): WalkPlace => ({
  world: L(world, world),
  what: L(what[0], what[1]),
  where: L(where[0], where[1]),
  requires: requires ? L(requires[0], requires[1]) : undefined,
});

/**
 * Les guides et annexes de Kingdom Hearts III : les collectes, les défis facultatifs et les
 * pages de référence. Elles sont annoncées avant d'être rédigées — le sommaire dit ce que la
 * soluce couvrira, et ce qui reste à écrire.
 */
export const quests: WalkQuest[] = [
  {
    id: "emblemes-fetiches",
    title: L("Les emblèmes fétiches", "The Lucky Emblems"),
    tagline: L(
      "Quatre-vingt-dix emblèmes de Mickey à photographier, et la condition de la scène secrète.",
      "Ninety Mickey emblems to photograph, and the secret-ending condition.",
    ),
    entry: "mickey",
    status: "done",
    intro: L(
      "C'est la collecte principale de Kingdom Hearts III, et la seule qui conditionne la scène secrète. Quatre-vingt-dix silhouettes de Mickey sont dissimulées dans le décor des neuf mondes visitables ; il ne suffit pas de les voir, il faut les **photographier avec le Gummiphone**.\n\nLe principe est simple mais il a ses pièges. Un emblème n'est pas toujours un objet : c'est le plus souvent un motif que trois éléments du décor composent depuis un point de vue précis — trois pierres, trois taches, trois fenêtres. Tant que l'angle n'est pas le bon, l'appareil ne le reconnaît pas ; quand il l'est, un contour s'affiche à l'écran et il ne reste qu'à déclencher. Le zoom sert beaucoup, la position de Sora très peu : mieux vaut reculer et zoomer que s'approcher.\n\nLes emblèmes sont répartis par dizaines, **dix par monde**, et le Gummiphone les classe dans cet ordre — la liste de l'album est donc une carte de progression : un numéro manquant dit exactement dans quel monde retourner. Les neuf mondes concernés sont l'Olympe, la Cité du Crépuscule, le Coffre à jouets, le Royaume de Corona, Monstropolis, la Forêt des Rêves Bleus, Arendelle, les Caraïbes et San Fransokyo.\n\nRien n'est manquable : tous les mondes se revisitent librement après la fin de l'histoire, et les emblèmes restent en place. Il n'y a donc aucune raison de s'imposer la collecte pendant la partie — sauf pour les récompenses, qui tombent au fil des paliers et qui sont, elles, tout de suite utiles.",
      "This is Kingdom Hearts III's headline collectible, and the only one that gates the secret ending. Ninety Mickey silhouettes are hidden in the scenery of the nine visitable worlds; seeing them is not enough — you have to **photograph them with the Gummiphone**.\n\nThe principle is simple but it has its traps. An emblem is not always an object: more often it is a shape that three pieces of scenery form from one precise viewpoint — three stones, three stains, three windows. Until the angle is right the camera does not recognise it; when it is, an outline appears on screen and all that is left is to shoot. Zoom helps a great deal, Sora's position very little: better to step back and zoom than to walk closer.\n\nThe emblems come in tens, **ten per world**, and the Gummiphone files them in that order — so the album's list doubles as a progress map: a missing number says exactly which world to return to. The nine worlds concerned are Olympus, Twilight Town, Toy Box, the Kingdom of Corona, Monstropolis, the Hundred Acre Wood, Arendelle, the Caribbean and San Fransokyo.\n\nNothing is missable: every world can be revisited freely after the story ends, and the emblems stay put. So there is no reason to force the collection during the playthrough — except for the rewards, which land at each tier and are immediately useful.",
    ),
    steps: [
      {
        id: "photographier",
        title: L("Photographier proprement", "Taking the shot cleanly"),
        text: L(
          "Le Gummiphone s'ouvre à tout moment, y compris en pleine exploration. Une fois l'appareil sorti, le viseur affiche un cadre ; lorsque la forme de Mickey entre dans le champ à la bonne échelle, le jeu la souligne d'un contour lumineux. C'est ce contour, et lui seul, qui garantit que le cliché comptera.\n\nTrois réflexes évitent la plupart des échecs. **Zoomer plutôt qu'avancer** : beaucoup d'emblèmes sont composés d'éléments éloignés les uns des autres, et s'en approcher casse l'alignement. **Regarder le sol et les plafonds** : le jeu cache autant d'emblèmes au-dessus et en dessous de la ligne des yeux qu'à hauteur de regard. **Éteindre la course** dans les zones étroites : Sora glisse facilement au-delà du point de vue utile.\n\nUn emblème déjà photographié ne se reprend pas — il disparaît de l'album des clichés restants. Si le compteur d'un monde ne bouge plus, c'est presque toujours qu'il reste un emblème dans une zone annexe : un intérieur, un toit, une salle qu'on ne traverse qu'une fois dans l'histoire.",
          "The Gummiphone opens at any time, including mid-exploration. Once the camera is out, the viewfinder shows a frame; when Mickey's shape enters it at the right scale, the game outlines it in light. That outline, and only that outline, guarantees the shot will count.\n\nThree habits avoid most failures. **Zoom rather than walk**: many emblems are built from elements far apart, and getting closer breaks the alignment. **Look at floors and ceilings**: the game hides as many emblems above and below eye level as at it. **Stop running** in tight areas: Sora slides past the useful viewpoint easily.\n\nAn emblem already photographed cannot be retaken — it leaves the album of remaining shots. If a world's counter stops moving, there is almost always one emblem left in a side area: an interior, a rooftop, a room the story only crosses once.",
        ),
      },
      {
        id: "scene-secrete",
        title: L("Ce que la scène secrète demande", "What the secret ending asks for"),
        text: L(
          "La scène secrète n'est pas liée au nombre d'heures ni au taux de complétion : elle dépend uniquement du nombre d'emblèmes photographiés, et le seuil change avec la difficulté. En **Débutant** il faut les quatre-vingt-dix ; en **Standard**, soixante ; en **Vaillant**, trente. En **Critique**, ajouté après la sortie, terminer le jeu suffit — aucun emblème n'est exigé.\n\nLa logique est celle des jeux précédents inversée : plus on joue difficile, moins le jeu exige de collecte. Un joueur qui vise la scène sans y passer une semaine a donc intérêt à jouer en Vaillant, où trente emblèmes se ramassent presque naturellement en explorant.\n\nLa scène se déclenche après le générique, une fois la sauvegarde de fin chargée. Si le seuil n'était pas atteint au moment de finir, il suffit de revenir compléter la collecte et de rejouer la fin : la scène s'affiche alors normalement.",
          "The secret ending is tied neither to playtime nor to completion rate: it depends only on how many emblems you have photographed, and the threshold moves with difficulty. On **Beginner** you need all ninety; on **Standard**, sixty; on **Proud**, thirty. On **Critical**, added after release, finishing the game is enough — no emblems required.\n\nThe logic inverts the earlier games': the harder you play, the less collecting the game asks for. A player who wants the scene without spending a week on it is therefore better off on Proud, where thirty emblems come almost naturally while exploring.\n\nThe scene plays after the credits, once the ending save is loaded. If the threshold was not met when you finished, simply come back, complete the collection and replay the ending: the scene then shows normally.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Emblèmes photographiés", "Emblems photographed"),
      intro: L(
        "Les paliers tombent automatiquement, sans avoir à rendre visite à qui que ce soit. Les trois derniers valent à eux seuls la collecte complète.",
        "The tiers land automatically, with nobody to report to. The last three are worth the full collection on their own.",
      ),
      rows: [
        { tier: L("3", "3"), reward: L("Mégapotion", "Mega-Potion") },
        { tier: L("5", "5"), reward: L("Anneau étoilé", "Star Ring") },
        { tier: L("10", "10"), reward: L("Jonc Foudre +", "Thunder Ring+") },
        { tier: L("15", "15"), reward: L("Amulette lunaire", "Moon Amulet") },
        { tier: L("20", "20"), reward: L("Booster Magie", "Magic Boost") },
        { tier: L("25", "25"), reward: L("Amulette stellaire", "Star Amulet") },
        { tier: L("30", "30"), reward: L("Ruban — et la scène secrète en Vaillant", "Ribbon — and the secret ending on Proud") },
        { tier: L("35", "35"), reward: L("Poignet +", "Wristband+") },
        { tier: L("40", "40"), reward: L("Booster Attaque", "Power Boost") },
        { tier: L("45", "45"), reward: L("Collier royal", "Royal Necklace") },
        { tier: L("50", "50"), reward: L("Anneau de sagesse", "Sage Ring") },
        { tier: L("55", "55"), reward: L("Booster Défense", "Defense Boost") },
        { tier: L("60", "60"), reward: L("Anneau d'orichalque — et la scène secrète en Standard", "Orichalcum Ring — and the secret ending on Standard") },
        { tier: L("65", "65"), reward: L("Ceinture cosmique +", "Cosmic Belt+") },
        { tier: L("70", "70"), reward: L("Ruban royal", "Royal Ribbon") },
        { tier: L("80", "80"), reward: L("**Orichalque +**", "**Orichalcum+**") },
        { tier: L("90", "90"), reward: L("Barrette de Mickey — et la scène secrète en Débutant", "Mickey Clasp — and the secret ending on Beginner") },
      ],
      note: L(
        "L'**Orichalque +** du palier 80 est l'un des sept du jeu : il est donc indispensable à l'Ultima Arma, même pour un joueur qui n'a aucune envie de la scène secrète. C'est la vraie raison de pousser la collecte au-delà de soixante.",
        "The **Orichalcum+** at tier 80 is one of the game's seven: it is therefore required for the Ultima Weapon, even for a player with no interest in the secret ending. That is the real reason to push the collection past sixty.",
      ),
    },
  },
  {
    id: "foret-des-reves-bleus",
    title: L("Forêt des Rêves Bleus", "Hundred Acre Wood"),
    tagline: L(
      "Le livre de Winnie, et les mini-jeux de Petit Chef qui vont avec.",
      "Pooh's book, and the Little Chef mini-games that come with it.",
    ),
    entry: "hundred-acre-wood",
    status: "done",
    intro: L(
      "La Forêt des Rêves Bleus n'est plus un monde qu'on explore : dans Kingdom Hearts III, c'est un jardin, trois mini-jeux, et une visite qui se boucle en une demi-heure. On y entre depuis le **Bistrot du Petit Chef**, à la Cité du Crépuscule, en parlant à Merlin — le livre est posé sur une table du restaurant, et Sora y plonge exactement comme dans les jeux précédents.\n\nCe monde n'a ni ennemi, ni coffre, ni boss. Il a une fonction, et une seule : **ravitailler le bistrot**. Les trois mini-jeux rapportent des légumes, des fruits et du miel, c'est-à-dire les ingrédients que Petit Chef réclame pour ses recettes — et en quantité, ce qui en fait la solution la plus rapide au problème d'approvisionnement du restaurant.\n\nIl rapporte aussi la Keyblade **Verse-miel**, obtenue à la fin des trois épreuves. C'est une Keyblade de soutien — forme Protectrice, orientée défense et soins — qui n'a pas vocation à rester équipée toute la partie, mais qui dépanne sérieusement dans les combats où l'on encaisse.\n\nLa visite compte aussi pour les emblèmes fétiches : dix d'entre eux sont dans le jardin, et ce sont parmi les plus faciles du jeu, le décor étant petit, lumineux et sans ennemi pour déranger.",
      "The Hundred Acre Wood is no longer a world you explore: in Kingdom Hearts III it is a garden, three mini-games, and a visit that wraps up in half an hour. You enter from **Le Grand Bistrot** in Twilight Town, by speaking to Merlin — the book sits on a restaurant table, and Sora dives in exactly as in the earlier games.\n\nThis world has no enemies, no chests and no boss. It has one function: **stocking the bistro**. The three mini-games pay out vegetables, fruit and honey — the ingredients Little Chef asks for — and in quantity, which makes it the fastest answer to the restaurant's supply problem.\n\nIt also pays out the **Hunny Spout** Keyblade, earned once the three trials are done. It is a support Keyblade — protective form, geared to defence and healing — not one to keep equipped all game, but a real help in fights where you are taking hits.\n\nThe visit counts for the Lucky Emblems too: ten of them are in the garden, and they are among the game's easiest, the scenery being small, bright and free of enemies to get in the way.",
    ),
    tables: [
      {
        id: "epreuves",
        title: L("Les trois épreuves", "The three trials"),
        intro: L(
          "Elles s'enchaînent dans l'ordre, et se rejouent librement ensuite depuis le jardin : c'est là que se refait le stock du bistrot quand une recette manque d'un ingrédient.",
          "They run in order, and can be replayed freely afterwards from the garden: that is where the bistro's stock is rebuilt when a recipe is short of something.",
        ),
        columns: [L("Épreuve", "Trial"), L("Objectif", "Goal"), L("Comment s'y prendre", "How to go about it")],
        rows: [
          at(
            "La récolte de légumes",
            ["500 légumes pour Coco Lapin", "500 vegetables for Rabbit"],
            [
              "Un jeu d'alignement : relier cinq légumes identiques ou plus les efface d'un coup. Les grands groupes rapportent bien davantage que les petits, donc mieux vaut attendre qu'un amas se forme plutôt que d'effacer dès cinq. Tigrou intervient périodiquement et nettoie une zone entière — gardez-le pour un moment où le plateau est chargé.",
              "A matching game: linking five or more identical vegetables clears them at once. Big groups pay far better than small ones, so it is better to wait for a cluster to build than to clear at five. Tigger steps in periodically and clears a whole area — save him for a moment when the board is full.",
            ],
          ),
          at(
            "La cueillette de fruits",
            ["700 fruits avant qu'ils tombent à la rivière", "700 fruits before they fall into the river"],
            [
              "Même principe, mais avec un compte à rebours implicite : les fruits dérivent vers la rivière et sont perdus s'ils l'atteignent. La priorité change donc — on efface d'abord ce qui descend, quitte à casser un bel alignement en haut du plateau.",
              "Same principle, but with an implicit countdown: the fruit drifts towards the river and is lost if it gets there. The priority therefore changes — you clear what is falling first, even if that breaks a fine alignment at the top of the board.",
            ],
          ),
          at(
            "La cueillette de fleurs",
            ["Guider le miel jusqu'à Sora", "Guiding the honey to Sora"],
            [
              "La dernière épreuve se joue dans le jardin fleuri : il s'agit de ramasser les fleurs proches des pots de miel pour dégager un chemin et attirer le miel. Moins nerveuse que les deux précédentes, elle demande surtout de regarder la pente du terrain avant d'agir.",
              "The last trial plays out in the flower garden: you pick the flowers near the honey pots to clear a path and draw the honey along. Less frantic than the other two, it mostly asks you to read the slope of the ground before acting.",
            ],
          ),
        ],
      },
    ],
    steps: [
      {
        id: "ravitailler",
        title: L("Rentabiliser les mini-jeux", "Making the mini-games pay"),
        text: L(
          "Les trois épreuves se rejouent à volonté, et c'est là tout leur intérêt. Le bistrot consomme énormément d'ingrédients — vingt-huit recettes, chacune en version normale et améliorée — et la Forêt est la seule source qui ne dépende ni d'un coffre, ni d'un ennemi, ni d'un monde à retraverser.\n\nLa bonne façon d'y venir est donc en deux temps : une première visite dès que Merlin propose le livre, pour la Keyblade et les dix emblèmes ; puis des retours ponctuels, quand une recette bloque sur un ingrédient précis. Chaque épreuve indique ce qu'elle rapporte avant de commencer, ce qui évite de jouer la mauvaise.\n\nÀ noter pour les joueurs pressés : les scores demandés — 500 et 700 — sont larges. Ils tombent sans optimisation particulière dès lors qu'on ne laisse pas le plateau se vider, et il n'existe aucun palier supérieur à viser. Une fois les trois épreuves validées, le monde n'a plus rien à cacher.",
          "The three trials can be replayed at will, and that is the whole point of them. The bistro eats through ingredients — twenty-eight recipes, each in a normal and an improved version — and the Wood is the only source that depends on no chest, no enemy and no world to cross again.\n\nSo the right way to use it comes in two passes: a first visit as soon as Merlin offers the book, for the Keyblade and the ten emblems; then occasional returns, when a recipe is stuck on one ingredient. Each trial states what it pays out before you start, which saves playing the wrong one.\n\nWorth noting for players in a hurry: the required scores — 500 and 700 — are generous. They fall without any particular optimisation as long as you do not let the board empty, and there is no higher tier to aim for. Once the three trials are cleared, the world has nothing left to hide.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Étape", "Step"),
      rows: [
        { tier: L("Ouvrir le livre", "Opening the book"), reward: L("Accès au monde, et dix emblèmes fétiches à photographier", "Access to the world, and ten Lucky Emblems to photograph") },
        { tier: L("Les trois épreuves", "The three trials"), reward: L("Keyblade **Verse-miel**", "The **Hunny Spout** Keyblade") },
        { tier: L("Rejouer librement", "Replaying freely"), reward: L("Légumes, fruits et miel pour le **Bistrot du Petit Chef**", "Vegetables, fruit and honey for **Le Grand Bistrot**") },
      ],
    },
  },
  {
    id: "portails-de-combat",
    title: L("Les portails de combat", "The Battlegates"),
    tagline: L(
      "Quatorze portails, et les combats les plus durs du jeu de base.",
      "Fourteen gates, and the hardest fights in the base game.",
    ),
    entry: "heartless",
    status: "done",
    intro: L(
      "Les portails de combat apparaissent **après la fin de l'histoire**, une fois la partie rechargée sur la sauvegarde de fin. Ce sont des cercles noirs posés au sol dans les mondes déjà visités : on entre, on affronte une vague d'ennemis largement au-dessus du niveau du monde, on ressort avec une récompense qui ne s'obtient nulle part ailleurs.\n\nIls sont quinze en tout, numérotés de 0 à 14. Le **portail 0**, dans la Nécropole des Keyblades, ne rapporte rien : c'est une porte d'entraînement, qui sert à comprendre le format. Les quatorze suivants comptent, et leur difficulté est notée de une à trois étoiles.\n\nLe niveau recommandé est trompeur. Un portail à une étoile reste un combat de fin de jeu, avec des ennemis qui frappent beaucoup plus fort que ceux du monde où il se trouve. Le vrai prérequis n'est pas le niveau de Sora mais son équipement : des accessoires de résistance, une Keyblade avec une forme offensive fiable, et de quoi soigner.\n\nLe dernier, le **portail 14**, est d'une autre nature : il contient **Obscurantis**, le boss secret du jeu de base, en trois phases. Il se traite comme un combat à part entière et non comme un portail, et il est détaillé plus bas.",
      "The Battlegates appear **after the story ends**, once the game is reloaded on the ending save. They are black circles on the ground in worlds you have already visited: you step in, you fight a wave of enemies well above the world's level, you step out with a reward available nowhere else.\n\nThere are fifteen in all, numbered 0 to 14. **Gate 0**, in the Keyblade Graveyard, pays out nothing: it is a practice door, there to teach the format. The fourteen that follow count, and their difficulty is rated one to three stars.\n\nThe recommended level is misleading. A one-star gate is still an endgame fight, with enemies that hit far harder than the ones in the world hosting it. The real prerequisite is not Sora's level but his gear: resistance accessories, a Keyblade with a reliable offensive form, and the means to heal.\n\nThe last one, **gate 14**, is a different animal: it holds **Dark Inferno**, the base game's secret boss, in three phases. It is handled as a fight in its own right rather than as a gate, and is detailed below.",
    ),
    tables: [
      {
        id: "portails",
        title: L("Les quinze portails", "The fifteen gates"),
        intro: L(
          "La difficulté est celle affichée par le jeu, sur trois. Les récompenses ne se répètent pas : chaque portail donne son objet une fois, et les portails restent rejouables ensuite sans rien rapporter de plus.",
          "The difficulty is the game's own, out of three. The rewards do not repeat: each gate gives its item once, and the gates stay replayable afterwards without paying out again.",
        ),
        columns: [L("Portail", "Gate"), L("Difficulté", "Difficulty"), L("Lieu et récompense", "Location and reward")],
        rows: [
          at("0", ["1 / 3", "1 / 3"], ["Nécropole des Keyblades. Aucune récompense — c'est le portail d'entraînement.", "Keyblade Graveyard. No reward — this is the practice gate."]),
          at("1", ["1 / 3", "1 / 3"], ["L'Olympe, Royaume des Dieux – Cour. Récompense : **Attache Brasier**.", "Olympus, Realm of the Gods – Courtyard. Reward: **Blazing Charm**."]),
          at("2", ["2 / 3", "2 / 3"], ["L'Olympe, Royaume des Dieux – Apogée. Récompense : **Ceinture cosmique +**.", "Olympus, Realm of the Gods – Summit. Reward: **Cosmic Belt+**."]),
          at("3", ["2 / 3", "2 / 3"], ["La Cité du Crépuscule, Le Quartier – Le Manoir abandonné. Récompense : **Cristal évanescent**.", "Twilight Town, the Woods – the Old Mansion. Reward: **Ephemeral Crystal**."]),
          at("4", ["1 / 3", "1 / 3"], ["Coffre à jouets, Galaxy Toys – Aire de jeux. Récompense : **Mégalixir**.", "Toy Box, Galaxy Toys – Playground. Reward: **Megalixir**."]),
          at("5", ["2 / 3", "2 / 3"], ["Coffre à jouets, Galaxy Toys – Grand hall, rez-de-chaussée. Récompense : **Attache Foudre**.", "Toy Box, Galaxy Toys – Main Floor, ground level. Reward: **Thunder Charm**."]),
          at("6", ["2 / 3", "2 / 3"], ["Royaume de Corona, La Forêt – Marais. Récompense : **Cristal illusoire**.", "Kingdom of Corona, the Forest – Marsh. Reward: **Illusory Crystal**."]),
          at("7", ["1 / 3", "1 / 3"], ["Royaume de Corona, La Forêt – Collines. Récompense : **Attache Rafale**.", "Kingdom of Corona, the Forest – Hills. Reward: **Gust Charm**."]),
          at("8", ["1 / 3", "1 / 3"], ["Monstropolis, La Centrale – Grande cour. Récompense : **Cristal illusoire**.", "Monstropolis, the Factory – Main Yard. Reward: **Illusory Crystal**."]),
          at("9", ["2 / 3", "2 / 3"], ["Arendelle, Le Labyrinthe de glace – Palier intermédiaire. Récompense : **Cristal évanescent**.", "Arendelle, the Labyrinth of Ice – Middle Tier. Reward: **Ephemeral Crystal**."]),
          at("10", ["1 / 3", "1 / 3"], ["Les Caraïbes, La Haute-mer – Archipel. Récompense : **Attache Eau**.", "The Caribbean, the High Seas – Isla Verdemontaña. Reward: **Aqua Charm**."]),
          at("11", ["2 / 3", "2 / 3"], ["San Fransokyo, La Ville – Quartier nord. Récompense : **Attache zen**.", "San Fransokyo, the City – North District. Reward: **Serenity Charm**."]),
          at("12", ["1 / 3", "1 / 3"], ["San Fransokyo, La Ville – Quartier central. Récompense : **Attache Glacier**.", "San Fransokyo, the City – Central District. Reward: **Frost Charm**."]),
          at("13", ["2 / 3", "2 / 3"], ["Nécropole des Keyblades, Les Terres funestes. Récompense : **Attache trois étoiles**.", "Keyblade Graveyard, the Badlands. Reward: **Celestriad Charm**."]),
          at("14", ["3 / 3", "3 / 3"], ["Nécropole des Keyblades, Les Terres funestes. Boss secret **Obscurantis**. Récompense : **Emblème de cristal**.", "Keyblade Graveyard, the Badlands. Secret boss **Dark Inferno**. Reward: **Crystal Regalia**."]),
        ],
      },
    ],
    steps: [
      {
        id: "aborder",
        title: L("Comment aborder un portail", "How to approach a gate"),
        text: L(
          "Un portail n'est pas un combat ordinaire : c'est une succession de vagues sans pause, sans coffre et sans possibilité de fuir. Les objets consommés le sont définitivement, et il n'y a pas de sauvegarde intermédiaire — un échec renvoie devant le portail, sans rien perdre d'autre que le temps passé.\n\nTrois choses changent réellement l'issue. La première est le **choix des Keyblades équipées** : il en faut au moins une avec une forme qui nettoie les groupes — l'Arme double ou la forme Offensive — et une orientée magie pour les vagues volantes. La seconde est la **réserve de formes** : chaque changement de forme rend Sora beaucoup plus résistant pendant sa durée, et il vaut mieux enchaîner les formes que frapper à mains nues entre deux. La troisième est simplement de **ne pas rester au sol** : la plupart des attaques de zone des portails balaient horizontalement.\n\nLes attractions et les invocations sont autorisées et très efficaces, en particulier dans les portails à une étoile où elles peuvent effacer une vague entière. Elles perdent en revanche beaucoup d'intérêt contre Obscurantis, qui interrompt la mise en place.",
          "A gate is not an ordinary fight: it is a run of waves with no pause, no chest and no way out. Items you spend are spent for good, and there is no checkpoint — a failure puts you back in front of the gate, having lost nothing but the time.\n\nThree things genuinely change the outcome. The first is **which Keyblades you bring**: you want at least one with a form that clears groups — Double Arrowguns or an offensive form — and one built for magic, for the flying waves. The second is **form uptime**: every form change makes Sora far more durable for its duration, and it is better to chain forms than to swing bare-handed in between. The third is simply to **stay off the ground**: most of the gates' area attacks sweep horizontally.\n\nAttractions and summons are allowed and very effective, particularly in the one-star gates where they can erase a whole wave. They lose much of their value against Dark Inferno, who interrupts the wind-up.",
        ),
      },
    ],
    bosses: [
      {
        id: "obscurantis",
        name: L("Obscurantis", "Dark Inferno"),
        level: "Niveau 70 et plus — portail 14",
        reward: L("**Emblème de cristal**", "**Crystal Regalia**"),
        tactics: L(
          "Obscurantis est le boss secret du jeu de base, et le seul adversaire qui punisse réellement une garde mal placée. Il combat à l'épée, très vite, avec des enchaînements longs qui ne laissent presque pas de fenêtre entre deux coups : la parade ordinaire ne suffit pas, il faut **esquiver latéralement** et frapper une fois, pas trois.\n\nLa première phase est la plus lisible. Il alterne des séries de coups d'épée et des charges en ligne droite, toutes annonçées par un temps d'arrêt net. C'est le moment de placer des dégâts sûrs : une forme de Keyblade, deux ou trois coups, et on se dégage.\n\nÀ mi-vie, il s'entoure d'une aura sombre et gagne des projections de flammes noires qui restent au sol. Le terrain se réduit, et c'est ce qui tue la plupart des joueurs : on encaisse en reculant dans une zone en feu. Il faut accepter de tourner autour de lui plutôt que de battre en retraite.\n\nLa dernière phase ajoute une téléportation — il disparaît et réapparaît derrière Sora, immédiatement suivi d'un coup. Le signal est sonore avant d'être visuel ; l'esquive doit partir au son. À partir de là il ne s'agit plus que de patience : quelques coups par ouverture, jamais de gourmandise, et le combat tombe.",
          "Dark Inferno is the base game's secret boss, and the only opponent who really punishes a mistimed guard. He fights with a sword, very fast, in long strings that leave almost no window between blows: ordinary blocking is not enough — you need to **dodge sideways** and hit once, not three times.\n\nThe first phase is the most readable. He alternates sword strings and straight-line charges, each announced by a clear pause. That is when to place safe damage: a Keyblade form, two or three hits, and out.\n\nAt half health he wraps himself in a dark aura and gains black flames that linger on the ground. The arena shrinks, and that is what kills most players: taking hits while backing into a burning patch. You have to accept circling him rather than retreating.\n\nThe last phase adds a teleport — he vanishes and reappears behind Sora, immediately followed by a strike. The cue is audible before it is visible; the dodge has to start on the sound. From there it is only patience: a few hits per opening, never greedy, and the fight falls.",
        ),
        attacks: [
          {
            name: L("Enchaînement d'épée", "Sword string"),
            note: L("Quatre à six coups sans interruption. N'essayez pas de bloquer au milieu : esquivez au premier et revenez après le dernier.", "Four to six uninterrupted blows. Do not try to block mid-string: dodge on the first and come back after the last."),
          },
          {
            name: L("Charge", "Charge"),
            note: L("Une ligne droite précédée d'un arrêt net. C'est l'ouverture la plus sûre du combat, à condition de se décaler et non de reculer.", "A straight line preceded by a sharp pause. The safest opening in the fight, provided you step aside rather than back away."),
          },
          {
            name: L("Flammes noires", "Dark flames"),
            note: L("Des zones en feu qui persistent et réduisent le terrain. À partir de la mi-vie, combattez en tournant autour de lui.", "Burning patches that linger and shrink the arena. From half health on, fight by circling him."),
          },
          {
            name: L("Téléportation", "Teleport"),
            note: L("Il réapparaît dans le dos de Sora et frappe aussitôt. Le son précède l'image : esquivez à l'oreille.", "He reappears behind Sora and strikes at once. The sound comes before the image: dodge by ear."),
          },
        ],
      },
    ],
    rewards: {
      tierHeader: L("Étape", "Step"),
      rows: [
        { tier: L("Chaque portail", "Each gate"), reward: L("Un objet unique — attache, cristal, accessoire ou Mégalixir", "One unique item — charm, crystal, accessory or Megalixir") },
        { tier: L("Portail 14", "Gate 14"), reward: L("**Emblème de cristal**, le meilleur accessoire du jeu de base", "**Crystal Regalia**, the base game's best accessory") },
        { tier: L("Les quatorze portails", "All fourteen gates"), reward: L("Le trophée correspondant, et de quoi préparer les Données de l'Organisation dans Re Mind", "The matching trophy, and the groundwork for Re Mind's Data Organisation") },
      ],
    },
  },
  {
    id: "sept-flantastiques",
    title: L("Les Sept Flantastiques", "The Flantastic Seven"),
    tagline: L(
      "Sept flans, sept mini-jeux, et les meilleures récompenses de la cuisine.",
      "Seven puddings, seven mini-games, and the kitchen's best rewards.",
    ),
    entry: "heartless",
    status: "done",
    intro: L(
      "Les Flantastiques sont sept Sans-cœur pâtissiers, un par monde, chacun accompagné d'un mini-jeu qui lui est propre. Aucun ne se combat : on leur parle, on joue, on atteint le score demandé, et ils remercient en donnant leur fruit et une compétence.\n\nC'est la quête annexe la plus rentable du jeu, pour deux raisons. Les **compétences** qu'ils offrent ne s'obtiennent nulle part ailleurs et changent réellement le confort de jeu — durée des formes, des attractions, puissance de la magie. Et leurs **fruits** sont les ingrédients rares de la Tarte multifruits, la meilleure recette du bistrot, qui demande précisément les sept.\n\nIls apparaissent au fil de l'histoire, dès qu'un monde est terminé, et restent disponibles ensuite. Les sept mini-jeux sont différents les uns des autres : l'un est un jeu de rythme, l'autre une course, un autre un tir — il n'y a pas de méthode unique, seulement des scores à battre.\n\nLes sept épreuves validées donnent l'**Anneau flantastique** et un **Orichalque +**, c'est-à-dire un septième de l'Ultima Arma.",
      "The Flantastic Seven are seven pastry Heartless, one per world, each with a mini-game of its own. None of them is fought: you talk to them, you play, you hit the target score, and they thank you with their fruit and an ability.\n\nIt is the game's most profitable side quest, for two reasons. The **abilities** they hand over are available nowhere else and genuinely change how comfortable the game feels — form duration, attraction duration, magic power. And their **fruit** is the rare ingredient in the Fruit Tart, the bistro's best recipe, which asks for precisely those seven.\n\nThey appear as the story goes, as soon as a world is finished, and stay available afterwards. The seven mini-games are all different: one is a rhythm game, one a race, one a shooting gallery — there is no single method, only scores to beat.\n\nAll seven cleared gives the **Flantastic Ring** and an **Orichalcum+**, that is, one seventh of the Ultima Weapon.",
    ),
    tables: [
      {
        id: "flans",
        title: L("Les sept flans", "The seven puddings"),
        intro: L(
          "Le score indiqué est celui qui déclenche la récompense complète. Les épreuves se rejouent indéfiniment, et seuls le meilleur score compte.",
          "The score shown is the one that triggers the full reward. The trials can be replayed indefinitely, and only the best score counts.",
        ),
        columns: [L("Flan", "Pudding"), L("Où le trouver", "Where to find it"), L("Score et récompense", "Score and reward")],
        rows: [
          at("Flan à la cerise", ["L'Olympe — Thèbes, Belvédère", "Olympus — Thebes, Overlook"], ["20 000 points. Récompense : **Griottes ×3** et la compétence **Transformation accrue**.", "20,000 points. Reward: **Cherries ×3** and the **Formchange Extender** ability."]),
          at("Flan à la fraise", ["Coffre à jouets — Galaxy Toys, Espace détente", "Toy Box — Galaxy Toys, Break Room"], ["17 000 points. Récompense : **Fraise ×3** et la compétence **Attractions prolongées**.", "17,000 points. Reward: **Strawberries ×3** and the **Attraction Extender** ability."]),
          at("Flan à l'orange", ["Royaume de Corona — La Forêt, Collines", "Kingdom of Corona — the Forest, Hills"], ["23 000 points. Récompense : **Orange sanguine ×3** et la compétence **Attraction**.", "23,000 points. Reward: **Blood Oranges ×3** and the **Attraction Boost** ability."]),
          at("Flan à la banane", ["Monstropolis — La Réserve de portes, Niveau supérieur", "Monstropolis — Door Vault, Upper Level"], ["20 000 points. Récompense : **Banane ×3** et la compétence **Magie puissante accrue**.", "20,000 points. Reward: **Bananas ×3** and the **Magic Flan Boost** ability."]),
          at("Flan au raisin", ["Arendelle — La Montagne du Nord, Crête montagneuse", "Arendelle — the North Mountain, Ridge"], ["20 000 points. Récompense : **Raisin ×3** et la compétence **Glacier synchrone**.", "20,000 points. Reward: **Grapes ×3** and the **Blizzard Sync** ability."]),
          at("Flan à la pastèque", ["Les Caraïbes — Port Royal, Fort", "The Caribbean — Port Royal, Fort"], ["28 000 points. C'est le score le plus exigeant des sept. Récompense : **Pastèque ×3** et la compétence **Vaillance de concentration**.", "28,000 points — the toughest score of the seven. Reward: **Watermelons ×3** and the **Focus Converter** ability."]),
          at("Flan au melon", ["San Fransokyo — La Ville, Quartier sud, de nuit", "San Fransokyo — the City, South District, at night"], ["15 000 points. Récompense : **Melon ×3** et la compétence **Attractions prolongées**.", "15,000 points. Reward: **Melons ×3** and the **Attraction Extender** ability."]),
        ],
      },
    ],
    steps: [
      {
        id: "methode",
        title: L("Ce qui fait tomber les scores", "What makes the scores fall"),
        text: L(
          "Les sept épreuves partagent un même principe de notation : les points ne viennent pas du nombre d'actions réussies mais de la **continuité**. Chaque mini-jeu a un multiplicateur qui monte tant qu'on ne rate rien et retombe à zéro à la première erreur. Un joueur régulier mais prudent bat systématiquement un joueur rapide qui casse sa série.\n\nLa conséquence pratique est contre-intuitive : il faut **ralentir**. Dans le jeu de rythme, viser la note suivante plutôt que d'anticiper ; dans les épreuves de collecte, laisser passer un objet mal placé au lieu de plonger dessus ; dans la course, prendre la trajectoire large. Le multiplicateur rattrape très largement le temps perdu.\n\nLe flan à la pastèque, aux Caraïbes, est le seul qui demande vraiment de la pratique : 28 000 points ne tombent pas en une tentative. Les six autres passent généralement au deuxième ou troisième essai une fois le principe compris. Comme les épreuves sont rejouables sans limite et sans coût, il n'y a rien à perdre à recommencer immédiatement.",
          "The seven trials share a scoring principle: points come not from how many actions you land but from **continuity**. Each mini-game has a multiplier that climbs while you miss nothing and drops to zero on the first mistake. A steady, careful player beats a fast one who breaks their streak every time.\n\nThe practical consequence is counter-intuitive: you have to **slow down**. In the rhythm game, aim at the next note rather than anticipating; in the collection trials, let a badly placed item go instead of diving for it; in the race, take the wide line. The multiplier repays the lost time many times over.\n\nThe watermelon pudding, in the Caribbean, is the only one that really needs practice: 28,000 points do not fall on a first attempt. The other six usually go down on the second or third try once the principle is understood. Since the trials replay without limit and without cost, there is nothing to lose by restarting at once.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Étape", "Step"),
      intro: L(
        "Les fruits obtenus sont les sept ingrédients de la **Tarte multifruits**, la meilleure recette du Bistrot du Petit Chef.",
        "The fruit you earn makes up the seven ingredients of the **Fruit Tart**, Le Grand Bistrot's best recipe.",
      ),
      rows: [
        { tier: L("Chaque flan", "Each pudding"), reward: L("Trois fruits et une compétence permanente", "Three pieces of fruit and a permanent ability") },
        { tier: L("Les sept flans", "All seven puddings"), reward: L("**Anneau flantastique** et **Orichalque +**", "**Flantastic Ring** and **Orichalcum+**") },
      ],
      note: L(
        "Les compétences des Flantastiques s'équipent depuis le menu et se cumulent : **Transformation accrue** et **Attractions prolongées** sont les deux plus utiles pour les portails de combat et pour les Données de l'Organisation dans Re Mind.",
        "The Flantastic abilities are equipped from the menu and stack: **Formchange Extender** and **Attraction Extender** are the two most useful for the Battlegates and for Re Mind's Data Organisation.",
      ),
    },
  },
  {
    id: "bistrot",
    title: L("Le Bistrot du Petit Chef", "Le Grand Bistrot"),
    tagline: L(
      "Les recettes de Petit Chef, et les bonus de repas avant un combat difficile.",
      "Little Chef's recipes, and the meal bonuses before a hard fight.",
    ),
    entry: "moogles",
    status: "done",
    intro: L(
      "Le Bistrot du Petit Chef, à la Cité du Crépuscule, est le système de cuisine de Kingdom Hearts III — et, sans exagérer, la source de puissance la plus importante du jeu en dehors du niveau. Les plats préparés donnent des **bonus permanents de caractéristiques** : HP max, MP max, Attaque, Défense, Magie. Un joueur qui a cuisiné les vingt-huit recettes en version améliorée dispose d'un Sora sensiblement différent de celui qui ne l'a pas fait.\n\nLe fonctionnement tient en trois temps. On rassemble des **ingrédients**, ramassés dans les mondes, achetés chez les Mogs, obtenus auprès des Flantastiques ou récoltés dans la Forêt des Rêves Bleus. On choisit une recette, dont les ingrédients requis sont affichés. On joue ensuite un **mini-jeu de cuisine** — découpe, cuisson, dressage — dont la réussite détermine la qualité du plat.\n\nChaque recette existe en deux versions : **normale**, et **améliorée** (notée « + ») quand le mini-jeu est réussi de façon nette. La version améliorée donne toujours un bonus supérieur, et c'est elle qu'il faut viser : rater le mini-jeu ne gâche pas les ingrédients, mais oblige à en retrouver pour refaire le plat proprement.\n\nLes plats se consomment depuis le menu principal, avant un combat. L'effet dure jusqu'au prochain repas — on ne cumule donc pas deux plats, on choisit celui qui convient à ce qu'on va affronter. Enfin, le restaurant gagne des **étoiles** à mesure qu'on cuisine ; à cinq étoiles, Petit Chef offre la Keyblade **Chef étoilé**.",
      "Le Grand Bistrot, in Twilight Town, is Kingdom Hearts III's cooking system — and, without exaggeration, the largest source of power in the game outside levelling. Prepared dishes grant **permanent stat bonuses**: max HP, max MP, Strength, Defence, Magic. A player who has cooked all twenty-eight recipes in their improved version has a noticeably different Sora from one who has not.\n\nIt works in three beats. You gather **ingredients**, picked up in the worlds, bought from the moogles, earned from the Flantastic Seven or harvested in the Hundred Acre Wood. You pick a recipe, whose required ingredients are displayed. You then play a **cooking mini-game** — chopping, cooking, plating — whose success sets the dish's quality.\n\nEvery recipe exists in two versions: **normal**, and **improved** (marked \"+\") when the mini-game is cleanly cleared. The improved version always gives the higher bonus, and it is the one to aim for: failing the mini-game does not waste the ingredients, but it does mean finding more to redo the dish properly.\n\nDishes are eaten from the main menu, before a fight. The effect lasts until the next meal — you do not stack two dishes, you pick the one that suits what you are about to face. Finally, the restaurant earns **stars** as you cook; at five stars, Little Chef hands over the **Grand Chef** Keyblade.",
    ),
    tables: [
      {
        id: "entrees",
        title: L("Les entrées", "Appetisers"),
        intro: L(
          "Le bonus de gauche est celui de la version normale, celui de droite la version améliorée « + ».",
          "The left-hand bonus is the normal version, the right-hand one the improved \"+\" version.",
        ),
        columns: [L("Plat", "Dish"), L("Ingrédients", "Ingredients"), L("Effet — normal / +", "Effect — normal / +")],
        rows: [
          at("Terrine forestière", ["Morilles, Chanterelles, Pleurotes du panicaut, Trompettes de la mort", "Morels, Chanterelles, King Oyster Mushrooms, Black Trumpets"], ["HP max +2, MP max +8 / HP max +4, MP max +10", "Max HP +2, Max MP +8 / Max HP +4, Max MP +10"]),
          at("Saint-Jacques poêlées", ["Saint-Jacques, Huile d'olive", "Scallops, Olive Oil"], ["HP max +4, MP max +10 / HP max +6, MP max +12", "Max HP +4, Max MP +10 / Max HP +6, Max MP +12"]),
          at("Ratatouille", ["Courgette, Aubergine, Tomate, Ail, Laurier", "Zucchini, Aubergine, Tomato, Garlic, Bay Leaf"], ["HP max +6, MP max +12 / HP max +8, MP max +14", "Max HP +6, Max MP +12 / Max HP +8, Max MP +14"]),
          at("Mousse de homard", ["Homard, Saint-Jacques, Aneth", "Lobster, Scallops, Dill"], ["Défense +1, HP max +2, MP max +18 / Défense +1, HP max +4, MP max +20", "Defence +1, Max HP +2, Max MP +18 / Defence +1, Max HP +4, Max MP +20"]),
          at("Salade caprese", ["Fraises, Tomate, Fromage frais, Basilic", "Strawberries, Tomato, Fresh Cheese, Basil"], ["Magie +1, HP max +2, MP max +16 — la version améliorée donne le même effet.", "Magic +1, Max HP +2, Max MP +16 — the improved version gives the same effect."]),
        ],
      },
      {
        id: "potages",
        title: L("Les potages", "Soups"),
        columns: [L("Plat", "Dish"), L("Ingrédients", "Ingredients"), L("Effet — normal / +", "Effect — normal / +")],
        rows: [
          at("Consommé", ["Céleri, Oignon, Clous de girofle", "Celery, Onion, Cloves"], ["HP max +10 / HP max +12, MP max +2", "Max HP +10 / Max HP +12, Max MP +2"]),
          at("Velouté de potiron", ["Potiron, Truffe noire", "Pumpkin, Black Truffle"], ["HP max +8, MP max +2 / HP max +10, MP max +4", "Max HP +8, Max MP +2 / Max HP +10, Max MP +4"]),
          at("Potage aux carottes", ["Carotte, Oignon, Riz, Beurre", "Carrot, Onion, Rice, Butter"], ["HP max +16, MP max +3 / HP max +18, MP max +5", "Max HP +16, Max MP +3 / Max HP +18, Max MP +5"]),
          at("Bisque de crabe", ["Crabe, Tomate, Carotte, Céleri, Huile d'olive", "Crab, Tomato, Carrot, Celery, Olive Oil"], ["Magie +1, HP max +18 / Magie +1, HP max +20, MP max +2", "Magic +1, Max HP +18 / Magic +1, Max HP +20, Max MP +2"]),
          at("Soupe d'été", ["Pastèque, Tomate, Aneth", "Watermelon, Tomato, Dill"], ["Magie +1, HP max +18, MP max +3 / Magie +1, HP max +20, MP max +5", "Magic +1, Max HP +18, Max MP +3 / Magic +1, Max HP +20, Max MP +5"]),
        ],
      },
      {
        id: "poissons",
        title: L("Les poissons", "Fish courses"),
        columns: [L("Plat", "Dish"), L("Ingrédients", "Ingredients"), L("Effet — normal / +", "Effect — normal / +")],
        rows: [
          at("Sole meunière", ["Sole, Caviar", "Sole, Caviar"], ["Défense +1, HP max +2 / Défense +1, HP max +4, MP max +2", "Defence +1, Max HP +2 / Defence +1, Max HP +4, Max MP +2"]),
          at("Matelote d'anguilles", ["Anguille, Laurier, Persil", "Eel, Bay Leaf, Parsley"], ["Défense +1, HP max +4, MP max +2 / Défense +1, HP max +6, MP max +4", "Defence +1, Max HP +4, Max MP +2 / Defence +1, Max HP +6, Max MP +4"]),
          at("Bouillabaisse", ["Moules, Homard, Cabillaud, Ail, Safran", "Mussels, Lobster, Cod, Garlic, Saffron"], ["Défense +2, HP max +6, MP max +3 / Défense +2, HP max +8, MP max +5", "Defence +2, Max HP +6, Max MP +3 / Defence +2, Max HP +8, Max MP +5"]),
          at("Bar en papillote", ["Bar, Basilic, Thym, Huile d'olive", "Sea Bass, Basil, Thyme, Olive Oil"], ["Défense +2, HP max +8, MP max +2 / Défense +2, HP max +10, MP max +4", "Defence +2, Max HP +8, Max MP +2 / Defence +2, Max HP +10, Max MP +4"]),
          at("Tartare de la mer", ["Orange sanguine, Homard, Bar, Huile d'olive", "Blood Orange, Lobster, Sea Bass, Olive Oil"], ["Attaque +1, Défense +1, HP max +2, MP max +3 / Attaque +1, Défense +1, HP max +4, MP max +5", "Strength +1, Defence +1, Max HP +2, Max MP +3 / Strength +1, Defence +1, Max HP +4, Max MP +5"]),
          at("Bar poêlé", ["Raisin, Bar, Courgette, Chanterelles, Persil", "Grapes, Sea Bass, Zucchini, Chanterelles, Parsley"], ["Attaque +1, Défense +1, HP max +4, MP max +3 / Attaque +1, Défense +1, HP max +6, MP max +5", "Strength +1, Defence +1, Max HP +4, Max MP +3 / Strength +1, Defence +1, Max HP +6, Max MP +5"]),
        ],
      },
      {
        id: "viandes",
        title: L("Les viandes", "Meat dishes"),
        columns: [L("Plat", "Dish"), L("Ingrédients", "Ingredients"), L("Effet — normal / +", "Effect — normal / +")],
        rows: [
          at("Ris de veau poêlés", ["Cèpes, Citron, Veau", "Porcini, Lemon, Veal"], ["Attaque +1, HP max +4 / Attaque +1, HP max +6", "Strength +1, Max HP +4 / Strength +1, Max HP +6"]),
          at("Sauté de bœuf", ["Cornichons, Aubergine, Courgette, Bœuf", "Gherkins, Aubergine, Zucchini, Beef"], ["Attaque +1, HP max +6 / Attaque +1, HP max +8", "Strength +1, Max HP +6 / Strength +1, Max HP +8"]),
          at("Bœuf bourguignon", ["Romarin, Laurier, Thym, Ail, Bœuf", "Rosemary, Bay Leaf, Thyme, Garlic, Beef"], ["Attaque +1, HP max +8 / Attaque +1, HP max +10", "Strength +1, Max HP +8 / Strength +1, Max HP +10"]),
          at("Caille farcie", ["Riz, Champignons Portobello, Cèpes, Meuniers, Persil, Caille", "Rice, Portobello Mushrooms, Porcini, Meadow Mushrooms, Parsley, Quail"], ["Attaque +2, Défense +1, HP max +10 / Attaque +2, Défense +1, HP max +12", "Strength +2, Defence +1, Max HP +10 / Strength +2, Defence +1, Max HP +12"]),
          at("Filet mignon poêlé", ["Griottes, Beurre, Truffe noire, Romarin, Clous de girofle, Filet mignon", "Cherries, Butter, Black Truffle, Rosemary, Cloves, Tenderloin"], ["Attaque +1, Défense +1, HP max +4 / Attaque +1, Défense +1, HP max +6", "Strength +1, Defence +1, Max HP +4 / Strength +1, Defence +1, Max HP +6"]),
        ],
      },
      {
        id: "desserts",
        title: L("Les desserts", "Desserts"),
        columns: [L("Plat", "Dish"), L("Ingrédients", "Ingredients"), L("Effet — normal / +", "Effect — normal / +")],
        rows: [
          at("Mousse au chocolat", ["Chocolat, Citron, Beurre", "Chocolate, Lemon, Butter"], ["Magie +1, MP max +2 / Magie +1, MP max +4", "Magic +1, Max MP +2 / Magic +1, Max MP +4"]),
          at("Compotée de fruits", ["Poire, Pomme, Abricot", "Pear, Apple, Apricot"], ["Magie +1, MP max +6 / Magie +1, MP max +8", "Magic +1, Max MP +6 / Magic +1, Max MP +8"]),
          at("Crêpe Suzette", ["Orange, Beurre, Miel", "Orange, Butter, Honey"], ["Magie +2, MP max +4 / Magie +2, MP max +6", "Magic +2, Max MP +4 / Magic +2, Max MP +6"]),
          at("Fromage frais fruité", ["Fromage frais, Citron, Groseilles, Framboises, Mûres", "Fresh Cheese, Lemon, Redcurrants, Raspberries, Blackberries"], ["Magie +2, MP max +8 / Magie +2, MP max +10", "Magic +2, Max MP +8 / Magic +2, Max MP +10"]),
          at("Soufflé à la banane", ["Banane, Beurre, Miel", "Banana, Butter, Honey"], ["Attaque +1, Magie +1, MP max +4 / Attaque +1, Magie +1, MP max +6", "Strength +1, Magic +1, Max MP +4 / Strength +1, Magic +1, Max MP +6"]),
          at("Gelée de fruits", ["Melon, Poire, Groseilles", "Melon, Pear, Redcurrants"], ["Attaque +1, Magie +2, MP max +4 / Attaque +1, Magie +2, MP max +6", "Strength +1, Magic +2, Max MP +4 / Strength +1, Magic +2, Max MP +6"]),
          at("Tarte multifruits", ["Griottes, Fraises, Orange sanguine, Banane, Raisin, Melon, Pastèque", "Cherries, Strawberries, Blood Orange, Banana, Grapes, Melon, Watermelon"], ["Attaque +1, Magie +2, MP max +8 / Attaque +1, Magie +2, MP max +10. Demande les sept fruits des **Flantastiques**.", "Strength +1, Magic +2, Max MP +8 / Strength +1, Magic +2, Max MP +10. Needs all seven **Flantastic** fruits."]),
        ],
      },
    ],
    steps: [
      {
        id: "minijeux",
        title: L("Réussir les mini-jeux de cuisine", "Clearing the cooking mini-games"),
        text: L(
          "Trois épreuves reviennent selon la recette. La **découpe** demande d'appuyer au rythme du couteau : le repère se déplace de plus en plus vite, et l'erreur courante est d'anticiper le dernier coup. La **cuisson** est un jeu d'équilibre — maintenir la flamme dans une zone étroite, en corrigeant par petites touches plutôt qu'en compensant largement. Le **dressage** est le plus court : une série de pressions rapides, où la régularité compte plus que la vitesse.\n\nLa qualité obtenue dépend d'un seuil : en dessous, le plat sort en version normale ; au-dessus, en version « + ». Il n'y a pas d'entre-deux, et pas de troisième palier. Autrement dit, un mini-jeu réussi de justesse vaut exactement un mini-jeu réussi parfaitement.\n\nDeux conseils pratiques. D'abord, **cuisinez les recettes simples d'abord** : elles servent d'entraînement aux mini-jeux, et leurs ingrédients sont faciles à remplacer si l'on rate. Ensuite, **gardez les sept fruits des Flantastiques** pour la Tarte multifruits et rien d'autre : ce sont les seuls ingrédients réellement limités du jeu.",
          "Three trials come round depending on the recipe. **Chopping** asks you to press in time with the knife: the marker speeds up, and the common error is anticipating the last stroke. **Cooking** is a balancing game — keeping the flame in a narrow band, correcting in small touches rather than overcompensating. **Plating** is the shortest: a burst of quick presses, where steadiness matters more than speed.\n\nThe quality you get is a threshold: below it the dish comes out normal, above it improved. There is no middle ground and no third tier. In other words, a mini-game scraped through is worth exactly as much as one played perfectly.\n\nTwo practical notes. First, **cook the simple recipes first**: they double as practice, and their ingredients are easy to replace if you miss. Second, **save the seven Flantastic fruits** for the Fruit Tart and nothing else: they are the only genuinely limited ingredients in the game.",
        ),
      },
      {
        id: "quand-manger",
        title: L("Quand manger, et quoi", "When to eat, and what"),
        text: L(
          "Le bonus d'un plat remplace celui du précédent : on ne cumule pas. Le repas se choisit donc en fonction de ce qui vient, et non « le meilleur plat disponible ».\n\nAvant un **portail de combat** ou un boss qui frappe fort, la logique est défensive : la Bouillabaisse et le Bar en papillote donnent Défense +2, ce qui change davantage l'issue d'un combat long que quelques points d'attaque. Avant un combat où il faut faire des dégâts vite — les Données de l'Organisation de Re Mind, notamment — la Caille farcie (Attaque +2, Défense +1) est la référence.\n\nPour un joueur orienté magie, la Salade caprese, la Bisque de crabe et la Soupe d'été empilent Magie +1 avec de très gros bonus de MP max. La Tarte multifruits, elle, est simplement le meilleur plat du jeu toutes catégories confondues, et mérite d'être gardée pour un moment où elle compte.\n\nLes bonus de caractéristiques restent acquis tant qu'on ne mange pas autre chose, y compris après un retour au menu ou un changement de monde. Il n'y a donc pas d'urgence à manger juste avant l'affrontement : le faire au moment de partir suffit.",
          "A dish's bonus replaces the previous one: they do not stack. So the meal is chosen for what is coming, not as \"the best dish available\".\n\nBefore a **Battlegate** or a boss that hits hard, the logic is defensive: Bouillabaisse and Sea Bass en Papillote give Defence +2, which changes a long fight more than a few points of Strength. Before a fight where damage has to land fast — Re Mind's Data Organisation above all — Stuffed Quail (Strength +2, Defence +1) is the benchmark.\n\nFor a magic-leaning player, Caprese Salad, Crab Bisque and Summer Soup stack Magic +1 with very large max-MP bonuses. The Fruit Tart is simply the best dish in the game outright, and deserves to be saved for a moment where it matters.\n\nStat bonuses hold until you eat something else, including across menus and world changes. So there is no need to eat right before the fight: doing it as you set out is enough.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Étoiles du restaurant", "Restaurant stars"),
      intro: L(
        "Les étoiles montent à mesure que l'on cuisine des recettes différentes, et non en répétant la même.",
        "Stars rise as you cook different recipes, not by repeating the same one.",
      ),
      rows: [
        { tier: L("Premières étoiles", "First stars"), reward: L("De nouvelles recettes débloquées, et des ingrédients en vente chez les Mogs", "New recipes unlocked, and ingredients on sale from the moogles") },
        { tier: L("Cinq étoiles", "Five stars"), reward: L("Keyblade **Chef étoilé**", "The **Grand Chef** Keyblade") },
        { tier: L("Les vingt-huit recettes en version +", "All twenty-eight recipes at \"+\""), reward: L("Le trophée correspondant, et le maximum de bonus permanents", "The matching trophy, and the maximum permanent bonuses") },
      ],
    },
  },
  {
    id: "atelier-mog",
    title: L("L'atelier des Mogs", "The moogle workshop"),
    tagline: L(
      "La synthèse de Kingdom Hearts III : les matériaux, les recettes et l'Ultima.",
      "Kingdom Hearts III's synthesis: materials, recipes and the Ultima Weapon.",
    ),
    entry: "moogles",
    status: "done",
    intro: L(
      "Les Mogs tiennent boutique dans chaque monde, et leur atelier réunit quatre services distincts qu'il vaut mieux ne pas confondre : la **boutique**, qui vend objets et accessoires contre des munnies ; la **synthèse**, qui fabrique de l'équipement à partir de matériaux ; la **forge**, qui améliore une Keyblade déjà possédée ; et les **missions photo**, qui demandent des clichés précis en échange de matériaux.\n\nLa synthèse est le cœur du système. Les matériaux se ramassent sur les ennemis, dans les coffres et au fil de l'exploration ; chaque recette en demande une combinaison, et les recettes se débloquent à mesure que la **liste de synthèse** progresse — c'est-à-dire à mesure qu'on fabrique. Le jeu n'impose donc pas de chercher une recette cachée : il suffit de synthétiser régulièrement pour que les suivantes apparaissent.\n\nLa forge est ce qui distingue Kingdom Hearts III de ses prédécesseurs. Chaque Keyblade s'améliore par paliers successifs, jusqu'au septième, en dépensant des matériaux ; une Keyblade de début de partie entièrement forgée reste compétitive bien plus longtemps qu'on ne l'imagine. C'est aussi ce qui rend les matériaux communs précieux : on en consomme énormément.\n\nAu bout de la chaîne, l'**Ultima Arma** : la meilleure Keyblade du jeu, et la seule dont la recette demande les sept **Orichalque +**.",
      "The moogles keep shop in every world, and their workshop bundles four separate services that are best not confused: the **shop**, selling items and accessories for munny; **synthesis**, which builds equipment from materials; the **forge**, which upgrades a Keyblade you already own; and the **photo missions**, which ask for specific shots in exchange for materials.\n\nSynthesis is the heart of the system. Materials drop from enemies, sit in chests and turn up while exploring; each recipe asks for a combination, and recipes unlock as the **synthesis list** progresses — that is, as you build. So the game does not ask you to hunt for a hidden recipe: synthesising regularly is enough to make the next ones appear.\n\nThe forge is what sets Kingdom Hearts III apart from its predecessors. Every Keyblade upgrades through successive tiers, up to the seventh, by spending materials; a fully forged early Keyblade stays competitive far longer than you would expect. It is also what makes common materials valuable: you get through a great many.\n\nAt the end of the chain, the **Ultima Weapon**: the game's best Keyblade, and the only one whose recipe asks for all seven **Orichalcum+**.",
    ),
    tables: [
      {
        id: "services",
        title: L("Les quatre services de l'atelier", "The workshop's four services"),
        columns: [L("Service", "Service"), L("Ce qu'il fait", "What it does"), L("Ce qu'il faut savoir", "What to know")],
        rows: [
          at(
            "La boutique",
            ["Vend objets, accessoires et ingrédients contre des munnies", "Sells items, accessories and ingredients for munny"],
            [
              "Le stock s'enrichit à mesure que l'histoire avance et que le bistrot gagne des étoiles. Les ingrédients achetables évitent des allers-retours : vérifiez la boutique avant de partir chercher une denrée manquante.",
              "Stock grows as the story advances and the bistro earns stars. Buyable ingredients save round trips: check the shop before going out to hunt a missing item.",
            ],
          ),
          at(
            "La synthèse",
            ["Fabrique accessoires et équipements à partir de matériaux", "Builds accessories and equipment from materials"],
            [
              "Les recettes se débloquent par paliers de la liste de synthèse : plus on fabrique, plus le catalogue s'ouvre. Rien n'est définitivement manquable, mais certaines recettes tardives demandent des matériaux qui ne tombent que sur des ennemis de fin de partie.",
              "Recipes unlock in tiers of the synthesis list: the more you build, the more the catalogue opens. Nothing is permanently missable, but some late recipes need materials that drop only from endgame enemies.",
            ],
          ),
          at(
            "La forge",
            ["Améliore une Keyblade possédée, jusqu'au septième palier", "Upgrades a Keyblade you own, to the seventh tier"],
            [
              "Chaque palier coûte des matériaux et augmente Attaque et Magie de la Keyblade. Améliorer une seule Keyblade à fond est presque toujours plus efficace que d'en améliorer trois à moitié.",
              "Each tier costs materials and raises the Keyblade's Strength and Magic. Fully upgrading one Keyblade is almost always better than half-upgrading three.",
            ],
          ),
          at(
            "Les missions photo",
            ["Demande des clichés précis en échange de matériaux", "Asks for specific photographs in exchange for materials"],
            [
              "Les demandes portent sur des sujets identifiés : un ennemi en particulier, un décor, un compagnon. Elles se remplissent en explorant normalement, Gummiphone en main, et constituent la source la plus régulière de matériaux rares.",
              "The requests name their subjects: a particular enemy, a piece of scenery, a companion. They fill in while exploring normally with the Gummiphone out, and are the steadiest source of rare materials.",
            ],
          ),
        ],
      },
      {
        id: "orichalque",
        title: L("Où trouver les sept Orichalque +", "Where the seven Orichalcum+ come from"),
        intro: L(
          "Ce sont les matériaux les plus rares du jeu, et la recette de l'Ultima Arma les demande tous les sept. Deux dorment dans des coffres ; les cinq autres récompensent des quêtes annexes.",
          "These are the game's rarest materials, and the Ultima Weapon's recipe asks for all seven. Two sit in chests; the other five reward side quests.",
        ),
        columns: [L("Source", "Source"), L("Où", "Where"), L("Ce qu'il faut faire", "What it takes")],
        rows: [
          at("Coffre", ["Coffre à jouets", "Toy Box"], ["Dans les étages de Galaxy Toys, sur le trajet de l'histoire — ouvrez tous les coffres du monde.", "In the upper floors of Galaxy Toys, on the story's path — open every chest in the world."]),
          at("Coffre", ["Les Caraïbes", "The Caribbean"], ["Sur l'une des îles facultatives de la haute mer, accessible en bateau après l'ouverture de la navigation.", "On one of the optional islands of the high seas, reachable by ship once sailing opens up."]),
          at("Emblèmes fétiches", ["Palier 80", "Tier 80"], ["Photographier quatre-vingts des quatre-vingt-dix emblèmes de Mickey.", "Photograph eighty of the ninety Mickey emblems."]),
          at("Les Sept Flantastiques", ["Les sept épreuves", "All seven trials"], ["Atteindre le score demandé auprès des sept flans — donné avec l'Anneau flantastique.", "Hit the target score with all seven puddings — handed over with the Flantastic Ring."]),
          at("Vaisseau Gummi", ["L'espace ouvert", "Open space"], ["Compléter la collecte de l'espace : trésors, constellations et Sans-cœur géants.", "Complete space's collection: treasures, constellations and giant Heartless."]),
          at("Mini-jeux", ["Arendelle", "Arendelle"], ["Le meilleur palier de la descente en luge, le mini-jeu le plus exigeant du jeu de base.", "The top tier of the sled run, the base game's most demanding mini-game."]),
          at("Portails de combat", ["Les quatorze portails", "All fourteen gates"], ["Vider tous les portails, Obscurantis compris.", "Clear every gate, Dark Inferno included."]),
        ],
      },
    ],
    steps: [
      {
        id: "materiaux",
        title: L("Comprendre les familles de matériaux", "Reading the material families"),
        text: L(
          "Les matériaux de Kingdom Hearts III se lisent en deux parties : un **type**, qui dit à quoi il sert, et une **qualité**, qui dit de quel palier il relève. Les types reviennent de jeu en jeu — écrous, pierres, cristaux, gemmes, fragments, trésors — et chaque recette en combine plusieurs.\n\nLa conséquence est qu'un matériau ne se cherche pas isolément : il se cherche par famille. Un ennemi donné lâche une famille, pas un objet unique, et le bestiaire du Gummiphone note ce que chacun laisse tomber. Quand une recette bloque, la bonne question n'est pas « où trouver cet objet » mais « quel ennemi lâche cette famille, et dans quel monde ».\n\nLes matériaux rares suivent la même logique à un palier au-dessus : ils viennent des ennemis de fin de partie, des portails de combat et des missions photo. Il n'existe aucune ferme optimale unique — mais les portails de combat, qui enchaînent des vagues denses d'ennemis de haut niveau, sont de loin le meilleur endroit pour en accumuler rapidement.\n\nUn dernier point souvent ignoré : la boutique des Mogs **rachète** les matériaux en trop, et vend certains matériaux communs. Convertir un surplus inutile en munnies, puis acheter ce qui manque, fait souvent gagner plus de temps qu'une session de farm.",
          "Kingdom Hearts III's materials read in two parts: a **type**, which says what it is for, and a **quality**, which says which tier it belongs to. The types recur from game to game — bolts, stones, crystals, gems, shards, treasures — and each recipe combines several.\n\nThe upshot is that a material is not hunted on its own: it is hunted by family. A given enemy drops a family, not a single item, and the Gummiphone's bestiary records what each one leaves behind. When a recipe stalls, the right question is not \"where do I find this item\" but \"which enemy drops this family, and in which world\".\n\nRare materials follow the same logic one tier up: they come from endgame enemies, the Battlegates and the photo missions. There is no single optimal farm — but the Battlegates, which chain dense waves of high-level enemies, are by far the best place to stockpile quickly.\n\nOne last point often overlooked: the moogle shop **buys back** surplus materials, and sells some common ones. Turning a useless surplus into munny and then buying what is missing often saves more time than a farming session.",
        ),
      },
      {
        id: "ultima",
        title: L("Fabriquer l'Ultima Arma", "Building the Ultima Weapon"),
        text: L(
          "L'Ultima Arma apparaît dans la liste de synthèse une fois celle-ci suffisamment remplie — il faut donc avoir fabriqué beaucoup d'autres choses avant, ce qui est voulu : la Keyblade récompense l'usage du système, pas une recette isolée.\n\nSa recette demande les **sept Orichalque +**, accompagnés de matériaux rares que la liste affiche clairement. Les sept sources sont détaillées dans le tableau ci-dessus, et aucune n'est manquable : les coffres restent ouverts, les quêtes annexes restent disponibles après la fin de l'histoire.\n\nEn pratique, le chemin le plus court consiste à faire les **Flantastiques** et les **emblèmes fétiches** pendant la partie — ils tombent presque naturellement — puis à traiter le **vaisseau Gummi**, la **luge d'Arendelle** et les **portails de combat** après la fin, quand Sora est assez fort pour ne plus buter dessus.\n\nUne fois forgée, l'Ultima Arma dispose de la forme **Ultime**, la plus puissante du jeu, et de statistiques que rien d'autre n'approche. C'est la Keyblade avec laquelle on aborde les Données de l'Organisation de Re Mind.",
          "The Ultima Weapon appears in the synthesis list once that list is far enough along — so you have to have built a good deal first, which is the point: the Keyblade rewards using the system, not finding one recipe.\n\nIts recipe asks for the **seven Orichalcum+**, alongside rare materials the list states plainly. The seven sources are detailed in the table above, and none is missable: chests stay open, side quests stay available after the story ends.\n\nIn practice the shortest path is to do the **Flantastic Seven** and the **Lucky Emblems** during the playthrough — they fall almost naturally — then handle the **Gummi ship**, **Arendelle's sled run** and the **Battlegates** afterwards, when Sora is strong enough not to stall on them.\n\nOnce forged, the Ultima Weapon carries the **Ultimate Form**, the strongest in the game, and stats nothing else comes near. It is the Keyblade you take into Re Mind's Data Organisation.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Service", "Service"),
      rows: [
        { tier: L("Liste de synthèse", "Synthesis list"), reward: L("De nouvelles recettes à chaque palier franchi", "New recipes at each tier passed") },
        { tier: L("Forge", "Forge"), reward: L("Sept paliers d'amélioration par Keyblade", "Seven upgrade tiers per Keyblade") },
        { tier: L("Missions photo", "Photo missions"), reward: L("Matériaux rares, la source la plus régulière du jeu", "Rare materials, the game's steadiest source") },
        { tier: L("Sept Orichalque +", "Seven Orichalcum+"), reward: L("Keyblade **Ultima Arma** et sa forme Ultime", "The **Ultima Weapon** and its Ultimate Form") },
      ],
    },
  },
  {
    id: "formes-keyblade",
    title: L("Les Keyblades et leurs formes", "The Keyblades and their transformations"),
    tagline: L(
      "Chaque Keyblade et ses deux formes, ses capacités et sa finition.",
      "Each Keyblade and its two forms, its abilities and its finisher.",
    ),
    entry: "kingdom-key",
    status: "done",
    intro: L(
      "Le changement de forme est le système de combat central de Kingdom Hearts III. Chaque Keyblade se transforme en cours de combat, après un certain nombre de coups portés, et devient une arme différente : une paire de pistolets, un marteau, un yoyo, un bouclier. La forme dure un temps limité, se termine par une **finition** spectaculaire, puis la Keyblade revient à sa forme de base.\n\nCe qui compte, et qui est souvent mal compris : la forme n'est pas seulement un gain de dégâts. Elle change la **portée**, la **vitesse** et le **comportement en l'air** de Sora, et elle le rend nettement plus résistant pendant sa durée. Un joueur qui enchaîne les formes prend beaucoup moins de dégâts qu'un joueur qui frappe en forme de base, indépendamment de son niveau.\n\nChaque Keyblade a **deux formes successives** : la première s'obtient en frappant, la seconde en continuant à frapper une fois la première active. Aller jusqu'à la seconde est presque toujours préférable — c'est là que se trouvent les meilleures finitions.\n\nLes formes se partagent entre plusieurs Keyblades : la Seconde Forme, par exemple, est commune à sept d'entre elles. Ce qui les différencie alors n'est pas la forme mais les statistiques de la Keyblade, ses capacités propres et la finition qu'elle débloque.",
      "Form change is Kingdom Hearts III's central combat system. Every Keyblade transforms mid-fight, after a certain number of landed hits, and becomes a different weapon: a pair of guns, a hammer, a yo-yo, a shield. The form lasts a limited time, ends in a spectacular **finisher**, and the Keyblade returns to its base shape.\n\nWhat matters, and is often misread: the form is not only a damage gain. It changes Sora's **reach**, **speed** and **behaviour in the air**, and it makes him markedly more durable while it lasts. A player who chains forms takes far less damage than one who swings in base form, regardless of level.\n\nEvery Keyblade has **two successive forms**: the first comes from landing hits, the second from carrying on once the first is active. Reaching the second is almost always preferable — that is where the better finishers live.\n\nForms are shared between Keyblades: Second Form, for instance, is common to seven of them. What separates them then is not the form but the Keyblade's stats, its own abilities and the finisher it unlocks.",
    ),
    tables: [
      {
        id: "formes",
        title: L("Les formes et les Keyblades qui les portent", "The forms and the Keyblades that carry them"),
        intro: L(
          "Une même forme peut être partagée par plusieurs Keyblades : ce sont alors les statistiques et les capacités de l'arme qui font la différence.",
          "One form can be shared by several Keyblades: it is then the weapon's stats and abilities that make the difference.",
        ),
        columns: [L("Forme", "Form"), L("Keyblades concernées", "Keyblades"), L("Ce qu'elle apporte", "What it brings")],
        rows: [
          at(
            "Seconde Forme",
            ["Chaîne royale, Lumière stellaire, Bleu de minuit, Vert fantôme, Aube crépusculaire, Encodeur élémentaire, Réunion rouge", "Kingdom Key, Starlight, Midnight Blue, Phantom Green, Dawn Till Dusk, Elemental Encoder, Crimson Reunion"],
            ["La forme la plus répandue, et la plus polyvalente : des enchaînements plus longs et plus rapides, sans changement d'arme. C'est la forme par défaut du jeu.", "The most common form, and the most versatile: longer, faster combos without changing weapon. The game's default form."],
          ),
          at(
            "Forme Protectrice",
            ["Genèse héroïque, Verse-miel, Son classique", "Hero's Origin, Hunny Spout, Classic Tone"],
            ["Orientée défense : Sora gagne en encaissement et en zone de contrôle. Utile dans les combats longs où l'on ne peut pas esquiver en permanence.", "Defence-leaning: Sora gains durability and area control. Useful in long fights where constant dodging is not an option."],
          ),
          at(
            "Forme Élémentaire",
            ["Étoile filante, À tout jamais", "Shooting Star, Ever After"],
            ["Orientée magie : les attaques prennent un élément et frappent à distance. La meilleure option contre les ennemis volants.", "Magic-leaning: attacks take on an element and strike at range. The best option against flying enemies."],
          ),
          at(
            "Forme Offensive",
            ["Shérif de l'Ouest, Zygomagique, Gouvernail du destin", "Favourite Deputy, Happy Gear, Wheel of Fate"],
            ["Orientée dégâts bruts et nettoyage de groupes. C'est la forme à privilégier dans les portails de combat.", "Built for raw damage and clearing groups. The form to favour in the Battlegates."],
          ),
          at(
            "Forme Véloce",
            ["Neige cristalline, Microcomposant, Chef étoilé", "Crystal Snow, Nano Gear, Grand Chef"],
            ["Orientée vitesse : des enchaînements très rapides et beaucoup de mobilité, au prix d'une portée réduite.", "Speed-leaning: very fast strings and a great deal of mobility, at the cost of reach."],
          ),
          at(
            "Forme Ultime",
            ["Ultima Arma", "Ultima Weapon"],
            ["La forme la plus puissante du jeu, réservée à l'Ultima Arma. Dégâts, portée et durée y sont tous supérieurs.", "The game's strongest form, reserved for the Ultima Weapon. Damage, reach and duration are all higher."],
          ),
          at(
            "Forme Vive",
            ["Tendre promesse", "Oathkeeper"],
            ["La forme lumineuse de la Keyblade de Kairi, orientée soutien et magie de lumière.", "The light-side form of Kairi's Keyblade, geared to support and light magic."],
          ),
          at(
            "Forme Sombre",
            ["Souvenir perdu", "Oblivion"],
            ["Le pendant sombre : dégâts élevés, portée large, mais des ouvertures plus longues.", "Its dark counterpart: high damage, wide reach, but longer openings."],
          ),
          at(
            "Forme Double",
            ["Tendre promesse et Souvenir perdu", "Oathkeeper and Oblivion"],
            ["Obtenue en enchaînant les deux Keyblades : la forme la plus technique du jeu, et la plus gratifiante à maîtriser.", "Reached by chaining both Keyblades: the game's most technical form, and the most rewarding to master."],
          ),
          at(
            "Forme Rage",
            ["Toutes les Keyblades", "Every Keyblade"],
            ["Elle ne se choisit pas : elle se déclenche quand les HP de Sora tombent très bas. Puissante, mais elle empêche de soigner tant qu'elle dure — à traiter comme un avertissement, pas comme un objectif.", "It is not chosen: it triggers when Sora's HP falls very low. Powerful, but it blocks healing while it lasts — treat it as a warning, not a goal."],
          ),
        ],
      },
    ],
    steps: [
      {
        id: "enchainer",
        title: L("Enchaîner les formes", "Chaining forms"),
        text: L(
          "Le compteur qui déclenche une forme monte avec les coups portés, pas avec le temps. Frapper un ennemi de grande taille ou un groupe le remplit beaucoup plus vite qu'un adversaire isolé — ce qui veut dire que les combats difficiles, où les ennemis sont nombreux, sont aussi ceux où les formes arrivent le plus vite.\n\nUne fois la première forme active, il ne faut surtout pas la laisser expirer d'elle-même. Continuer à frapper débloque la **seconde forme**, qui prolonge l'état transformé et donne accès à une finition supérieure. La séquence complète — base, forme un, forme deux, finition — représente l'essentiel des dégâts que Sora peut infliger en un seul engagement.\n\nDeux erreurs coûtent cher. Déclencher la finition trop tôt, par réflexe, coupe la chaîne et renvoie en forme de base. Et changer de Keyblade en pleine forme annule la transformation : le changement se fait entre deux formes, jamais pendant.\n\nLes compétences **Transformation accrue**, données par les Flantastiques, allongent la durée des formes et sont, à ce titre, parmi les plus utiles du jeu.",
          "The counter that triggers a form fills with hits landed, not with time. Hitting a large enemy or a group fills it much faster than a lone opponent — which means the hard fights, where enemies are many, are also the ones where forms arrive fastest.\n\nOnce the first form is active, the one thing not to do is let it expire on its own. Carrying on hitting unlocks the **second form**, which extends the transformed state and gives access to a better finisher. The full sequence — base, form one, form two, finisher — accounts for most of the damage Sora can deal in a single engagement.\n\nTwo mistakes are expensive. Triggering the finisher early, out of reflex, cuts the chain and drops you back to base form. And switching Keyblade mid-form cancels the transformation: the switch goes between forms, never during one.\n\nThe **Formchange Extender** abilities, handed over by the Flantastic Seven, lengthen form duration and are, for that reason, among the most useful in the game.",
        ),
      },
      {
        id: "choisir",
        title: L("Choisir ses trois Keyblades", "Picking your three Keyblades"),
        text: L(
          "Sora en équipe trois à la fois, et peut basculer de l'une à l'autre en plein combat. Le bon réflexe n'est pas de prendre les trois plus puissantes mais de **couvrir trois situations** : une Keyblade qui nettoie les groupes, une qui frappe à distance, une qui encaisse.\n\nUne composition qui fonctionne du début à la fin : **Gouvernail du destin** ou **Shérif de l'Ouest** pour la forme Offensive, **Étoile filante** pour l'Élémentaire et la portée, et **Genèse héroïque** pour la Protectrice quand le combat se durcit. En fin de partie, l'**Ultima Arma** remplace la première sans discussion.\n\nIl faut aussi penser à la **forge** : améliorer trois Keyblades de front coûte trois fois plus de matériaux pour un gain dilué. Mieux vaut en pousser une à fond, celle qu'on garde équipée le plus longtemps, et laisser les deux autres à un palier intermédiaire.\n\nDernier point : les Keyblades ont des **capacités propres**, affichées dans le menu, qui restent actives tant que l'arme est équipée. Certaines — attraction de munnies, doublement d'objets, résistance à un élément — valent à elles seules de garder une Keyblade moins puissante à un moment donné de la partie.",
          "Sora equips three at a time and can switch between them mid-fight. The right instinct is not to take the three strongest but to **cover three situations**: one Keyblade that clears groups, one that hits at range, one that soaks damage.\n\nA loadout that works from start to finish: **Wheel of Fate** or **Favourite Deputy** for the offensive form, **Shooting Star** for elemental reach, and **Hero's Origin** for the protective form when a fight gets rough. Late on, the **Ultima Weapon** replaces the first without argument.\n\nThe **forge** matters here too: upgrading three Keyblades in parallel costs three times the materials for a diluted gain. Better to push one all the way — the one you keep equipped longest — and leave the other two at a middle tier.\n\nOne last point: Keyblades carry **abilities of their own**, listed in the menu, active as long as the weapon is equipped. Some — munny magnet, doubled drops, resistance to an element — are on their own reason enough to keep a weaker Keyblade at a given point in the game.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("À retenir", "Key point"),
      rows: [
        { tier: L("Deux formes par Keyblade", "Two forms per Keyblade"), reward: L("La seconde donne la meilleure finition — n'arrêtez pas la chaîne à la première", "The second gives the better finisher — do not stop the chain at the first") },
        { tier: L("Durée des formes", "Form duration"), reward: L("Allongée par les compétences **Transformation accrue** des Flantastiques", "Extended by the Flantastic Seven's **Formchange Extender** abilities") },
        { tier: L("Trois Keyblades équipées", "Three Keyblades equipped"), reward: L("Couvrir groupe, distance et défense plutôt que cumuler la puissance brute", "Cover crowds, range and defence rather than stacking raw power") },
        { tier: L("Ultima Arma", "Ultima Weapon"), reward: L("Forme **Ultime**, la plus puissante du jeu", "**Ultimate Form**, the strongest in the game") },
      ],
    },
  },
  {
    id: "figurines-hercule",
    title: L("Les figurines dorées d'Hercule", "The golden Hercules figures"),
    tagline: L(
      "Cinq statuettes cachées dans Thèbes, et l'accessoire qu'un enfant échange contre elles.",
      "Five statuettes hidden around Thebes, and the accessory a child trades for them.",
    ),
    entry: "hercules",
    status: "done",
    intro: L(
      "C'est la plus courte des quêtes annexes de Kingdom Hearts III, et la plus facile à manquer : elle tient entièrement dans un seul monde, l'**Olympe**, et rien dans le jeu ne prévient qu'elle existe tant qu'on n'a pas trouvé la première figurine.\n\nCinq statuettes dorées à l'effigie d'Hercule sont posées dans Thèbes. Elles ne brillent pas, ne sonnent pas et n'apparaissent pas sur la carte : ce sont de petits objets dorés posés dans le décor, qu'il faut voir. Une fois les cinq en poche, on les rapporte à **l'enfant de l'Agora**, qui les collectionne — c'est lui qui donne la récompense.\n\nRien n'est manquable. L'Olympe se revisite librement, et les figurines restent en place jusqu'à ce qu'on les ramasse, y compris après la fin de l'histoire. Un joueur qui découvre la quête tard peut donc la boucler en une quinzaine de minutes.\n\nLa récompense, la **Ceinture de héros**, est une protection honnête sans être exceptionnelle. L'intérêt réel de la quête est ailleurs : elle oblige à fouiller Thèbes de fond en comble, et c'est précisément là que se trouvent plusieurs des dix emblèmes fétiches de l'Olympe.",
      "This is Kingdom Hearts III's shortest side quest, and the easiest to miss: it sits entirely in one world, **Olympus**, and nothing in the game hints that it exists until you have found the first figure.\n\nFive gold statuettes of Hercules are set around Thebes. They do not glow, do not chime and do not show on the map: they are small golden objects placed in the scenery, and you have to see them. Once you have all five, you bring them to **the child in the Agora**, who collects them — he is the one who pays out.\n\nNothing is missable. Olympus can be revisited freely, and the figures stay put until you pick them up, including after the story ends. A player who finds the quest late can therefore finish it in about fifteen minutes.\n\nThe reward, the **Hero's Belt**, is a decent armour piece rather than an exceptional one. The real value of the quest is elsewhere: it forces you to comb Thebes thoroughly, and that is exactly where several of Olympus's ten Lucky Emblems are.",
    ),
    tables: [
      {
        id: "emplacements",
        title: L("Les cinq figurines", "The five figures"),
        intro: L(
          "Toutes sont dans Thèbes, et toutes sont accessibles dès la première visite du quartier — aucune ne demande une capacité obtenue plus tard.",
          "All are in Thebes, and all are reachable from your first visit to the district — none needs an ability earned later.",
        ),
        columns: [L("Zone", "Area"), L("Figurine", "Figure"), L("Où exactement", "Exactly where")],
        rows: [
          at("Thèbes — Venelle", ["Figurine 1", "Figure 1"], ["Dans le temple en reconstruction, au milieu des échafaudages.", "In the temple under reconstruction, among the scaffolding."]),
          at("Thèbes — Jardins", ["Figurine 2", "Figure 2"], ["Au fond du trou creusé par Pat.", "At the bottom of the hole dug by Pete."]),
          at("Thèbes — Jardins", ["Figurine 3", "Figure 3"], ["Dans le bâtiment où vous aviez secouru un habitant pendant l'histoire.", "Inside the building where you rescued a citizen during the story."]),
          at("Thèbes — Belvédère", ["Figurine 4", "Figure 4"], ["Posée sur un banc, près du point de sauvegarde.", "Sitting on a bench, near the save point."]),
          at("Thèbes — Belvédère", ["Figurine 5", "Figure 5"], ["En hauteur, sur le bouclier de la statue géante — il faut grimper.", "Up high, on the giant statue's shield — you have to climb."]),
        ],
      },
    ],
    steps: [
      {
        id: "fouiller",
        title: L("Fouiller Thèbes efficacement", "Combing Thebes efficiently"),
        text: L(
          "Les cinq figurines partagent un défaut de conception qui joue contre le joueur : elles sont **petites et dorées**, dans une ville entièrement ocre et dorée. Les chercher à l'œil nu, en courant, ne marche pas.\n\nLa méthode qui fonctionne est de traiter Thèbes zone par zone — Venelle, Jardins, Belvédère — et, dans chacune, de faire un tour complet en marchant, caméra basse. Trois des cinq figurines sont au niveau du sol ou en dessous ; les deux autres demandent de lever les yeux, dont celle du bouclier de la statue, qui s'atteint en escaladant le mur voisin.\n\nProfitez-en pour sortir le Gummiphone : les emblèmes fétiches de l'Olympe sont répartis entre ces mêmes zones, et une seule traversée méthodique règle les deux collectes d'un coup. C'est le vrai gain de temps de cette quête.\n\nL'enfant de l'Agora accepte les figurines une par une, mais ne donne la Ceinture de héros qu'à la cinquième. Inutile donc de faire l'aller-retour à chaque trouvaille.",
          "The five figures share a design flaw that works against the player: they are **small and gold**, in a city that is entirely ochre and gold. Hunting them by eye while running does not work.\n\nWhat works is to treat Thebes area by area — Alley, Gardens, Overlook — and in each one, do a full circuit at walking pace with the camera low. Three of the five are at ground level or below; the other two need you to look up, including the one on the statue's shield, reached by climbing the neighbouring wall.\n\nTake the chance to have the Gummiphone out: Olympus's Lucky Emblems are spread across those same areas, and one methodical sweep settles both collections at once. That is this quest's real time saving.\n\nThe child in the Agora accepts the figures one at a time, but only hands over the Hero's Belt at the fifth. So there is no point walking back after each find.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Figurines rendues", "Figures returned"),
      rows: [
        { tier: L("Les cinq", "All five"), reward: L("Protection **Ceinture de héros**, remise par l'enfant de l'Agora", "The **Hero's Belt** armour, handed over by the child in the Agora") },
      ],
      note: L(
        "La quête est sans conséquence sur le reste du jeu : aucun trophée ne lui est attaché et aucune autre récompense n'en dépend. Elle vaut surtout comme prétexte à fouiller Thèbes, où se cachent plusieurs **emblèmes fétiches**.",
        "The quest has no knock-on effects: no trophy is attached to it and no other reward depends on it. Its main value is as an excuse to comb Thebes, where several **Lucky Emblems** hide.",
      ),
    },
  },
  {
    id: "royaume-classique",
    title: L("Le Royaume Classique", "Classic Kingdom"),
    tagline: L(
      "Vingt-trois mini-jeux en noir et blanc, tirés des courts-métrages de Mickey.",
      "Twenty-three black-and-white mini-games, drawn from the Mickey shorts.",
    ),
    entry: "mickey",
    status: "done",
    intro: L(
      "Le Royaume Classique est une console portable intégrée au Gummiphone, qui rejoue vingt-trois courts-métrages de Mickey sous forme de mini-jeux en noir et blanc. C'est un hommage direct aux *Game & Watch* de Nintendo — même écran, mêmes silhouettes, même façon de compter les points.\n\nL'option apparaît une fois la **Cité du Crépuscule terminée**, avec le premier jeu déjà installé. Les vingt-deux autres se trouvent ensuite un peu partout : certains sur les panneaux d'affichage de la Cité du Crépuscule, les autres dans des coffres répartis dans six mondes. Ils ne sont pas manquables — les coffres restent ouverts après la fin de l'histoire.\n\nChaque jeu se joue seul ou à deux, et enregistre un meilleur score. Il n'y a pas de score minimum à atteindre pour valider un jeu : il suffit d'y **marquer des points au moins une fois** pour qu'il compte comme joué. La collection complète rapporte la Keyblade **Son classique**, une arme à forme Protectrice reconnaissable à son allure de dessin animé.\n\nC'est aussi une annexe reposante : aucun combat, aucun ennemi, et des parties de deux minutes qu'on peut lancer entre deux mondes.",
      "Classic Kingdom is a handheld console built into the Gummiphone, replaying twenty-three Mickey shorts as black-and-white mini-games. It is a direct homage to Nintendo's *Game & Watch* — same screen, same silhouettes, same way of counting points.\n\nThe option appears once **Twilight Town is finished**, with the first game already installed. The other twenty-two turn up all over: some on Twilight Town's notice boards, the rest in chests spread across six worlds. They are not missable — the chests stay open after the story ends.\n\nEach game plays solo or two-player and records a best score. There is no minimum score to clear a game: **scoring at least once** is enough for it to count as played. The complete collection pays out the **Classic Tone** Keyblade, a protective-form weapon with an unmistakable cartoon look.\n\nIt is also a restful side quest: no fighting, no enemies, and two-minute rounds you can start between worlds.",
    ),
    tables: [
      {
        id: "cite",
        title: L("Les cinq premiers, à la Cité du Crépuscule", "The first five, in Twilight Town"),
        intro: L(
          "Ils s'obtiennent sans quitter la ville. Deux d'entre eux n'apparaissent sur le panneau qu'après la visite de la Forêt des Rêves Bleus.",
          "They come without leaving town. Two of them only appear on the board after the Hundred Acre Wood visit.",
        ),
        columns: [L("Mini-jeu", "Mini-game"), L("Où le trouver", "Where to find it"), L("Condition", "Condition")],
        rows: [
          at("Le pays des géants", ["Offert d'office", "Given automatically"], ["Il s'installe à la fin de la Cité du Crépuscule — c'est le jeu qui débloque l'option.", "It installs at the end of Twilight Town — the game that unlocks the option."]),
          at("Mickey postier du ciel", ["Panneau d'affichage lumineux, Quartier du Tram", "Lit notice board, Tram Common"], ["Disponible dès la première visite.", "Available from the first visit."]),
          at("Le fermier musicien", ["Panneau d'affichage lumineux, Quartier du Tram", "Lit notice board, Tram Common"], ["Disponible dès la première visite.", "Available from the first visit."]),
          at("Bâtissons", ["Panneau d'affichage, Quartier du Tram", "Notice board, Tram Common"], ["Après la visite de la Forêt des Rêves Bleus.", "After visiting the Hundred Acre Wood."]),
          at("Le docteur fou", ["Panneau d'affichage, Quartier du Tram", "Notice board, Tram Common"], ["Après la visite de la Forêt des Rêves Bleus.", "After visiting the Hundred Acre Wood."]),
        ],
      },
      {
        id: "mondes",
        title: L("Les dix-huit autres, dans les mondes", "The other eighteen, out in the worlds"),
        intro: L(
          "Ils sont dans des coffres ordinaires, sur le trajet de l'histoire ou légèrement à côté. Ouvrir tous les coffres d'un monde suffit à les récupérer.",
          "They sit in ordinary chests, on the story's path or just off it. Opening every chest in a world is enough to collect them.",
        ),
        columns: [L("Mini-jeu", "Mini-game"), L("Monde", "World"), L("Remarque", "Note")],
        rows: [
          at("Mickey jardinier", ["Coffre à jouets", "Toy Box"], ["Dans les étages de Galaxy Toys.", "In the floors of Galaxy Toys."]),
          at("Mickey chauffeur", ["Coffre à jouets", "Toy Box"], ["Dans les étages de Galaxy Toys.", "In the floors of Galaxy Toys."]),
          at("Panique rustique", ["Coffre à jouets", "Toy Box"], ["Dans les étages de Galaxy Toys.", "In the floors of Galaxy Toys."]),
          at("Mickey et le canari", ["Royaume de Corona", "Kingdom of Corona"], ["Dans la forêt ou aux abords du village.", "In the forest or around the village."]),
          at("L'art du camping", ["Royaume de Corona", "Kingdom of Corona"], ["Dans la forêt ou aux abords du village.", "In the forest or around the village."]),
          at("Mickey et les hot-dogs", ["Royaume de Corona", "Kingdom of Corona"], ["Dans la forêt ou aux abords du village.", "In the forest or around the village."]),
          at("Le golf", ["Monstropolis", "Monstropolis"], ["Dans la centrale ou la réserve de portes.", "In the factory or the door vault."]),
          at("Le cirque de Mickey", ["Monstropolis", "Monstropolis"], ["Dans la centrale ou la réserve de portes.", "In the factory or the door vault."]),
          at("Olympiades rustiques", ["Arendelle", "Arendelle"], ["Sur la montagne ou dans le labyrinthe de glace.", "On the mountain or in the labyrinth of ice."]),
          at("Mickey au grand nord", ["Arendelle", "Arendelle"], ["Sur la montagne ou dans le labyrinthe de glace.", "On the mountain or in the labyrinth of ice."]),
          at("Mickey et les chatons", ["Arendelle", "Arendelle"], ["Sur la montagne ou dans le labyrinthe de glace.", "On the mountain or in the labyrinth of ice."]),
          at("Mickey pêcheur", ["Les Caraïbes", "The Caribbean"], ["En haute mer — pensez aux îles facultatives.", "On the high seas — remember the optional islands."]),
          at("Mickey à la plage", ["Les Caraïbes", "The Caribbean"], ["En haute mer — pensez aux îles facultatives.", "On the high seas — remember the optional islands."]),
          at("Symphonie enchaînée", ["Les Caraïbes", "The Caribbean"], ["En haute mer — pensez aux îles facultatives.", "On the high seas — remember the optional islands."]),
          at("L'esseulé", ["Les Caraïbes", "The Caribbean"], ["En haute mer — pensez aux îles facultatives.", "On the high seas — remember the optional islands."]),
          at("Le base-ball", ["San Fransokyo", "San Fransokyo"], ["En ville, de jour comme de nuit.", "In the city, by day or night."]),
          at("Mickey mécano", ["San Fransokyo", "San Fransokyo"], ["En ville, de jour comme de nuit.", "In the city, by day or night."]),
          at("Mickey est de sortie", ["San Fransokyo", "San Fransokyo"], ["En ville, de jour comme de nuit.", "In the city, by day or night."]),
        ],
      },
    ],
    steps: [
      {
        id: "jouer",
        title: L("Marquer, et passer au suivant", "Score, then move on"),
        text: L(
          "Les vingt-trois jeux reposent sur deux ou trois mécaniques seulement : rattraper des objets qui tombent, éviter des obstacles qui arrivent, ou synchroniser une pression avec un mouvement régulier. Aucun ne demande de réflexes exceptionnels, et aucun n'a de limite de temps imposée : la partie s'arrête quand on rate trois fois.\n\nPour la collection et la Keyblade, il n'est pas nécessaire de faire un bon score : **marquer une fois suffit**. Le jeu est alors noté comme joué, et la Keyblade **Son classique** tombe quand les vingt-trois le sont. Un joueur pressé peut donc lancer chaque jeu, marquer un point, quitter, et boucler l'annexe en une vingtaine de minutes.\n\nLes scores élevés, eux, ne servent qu'aux trophées et à la satisfaction personnelle — il existe des paliers de score pour certains jeux, indépendants de la Keyblade. Le mode deux joueurs partage l'écran et double les objets à l'écran ; il est plus chaotique que réellement plus facile.\n\nUn détail utile : le Royaume Classique se lance depuis le Gummiphone à tout moment, y compris pendant l'exploration d'un monde. Il n'y a donc pas besoin de revenir quelque part pour jouer.",
          "The twenty-three games rest on two or three mechanics only: catching falling objects, dodging incoming obstacles, or timing a press against a steady movement. None asks for exceptional reflexes, and none has an imposed time limit: the round ends when you miss three times.\n\nFor the collection and the Keyblade, a good score is not required: **scoring once is enough**. The game is then marked as played, and the **Classic Tone** Keyblade lands when all twenty-three are. A player in a hurry can start each game, score a point, quit, and finish the side quest in twenty minutes.\n\nHigh scores only serve trophies and personal satisfaction — some games have score tiers, independent of the Keyblade. Two-player mode splits the screen and doubles the objects on it; it is more chaotic than it is actually easier.\n\nOne useful detail: Classic Kingdom launches from the Gummiphone at any time, including while exploring a world. So there is nothing to walk back to in order to play.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Étape", "Step"),
      rows: [
        { tier: L("Cité du Crépuscule terminée", "Twilight Town finished"), reward: L("L'option Royaume Classique, et le premier mini-jeu", "The Classic Kingdom option, and the first mini-game") },
        { tier: L("Chaque mini-jeu marqué", "Each mini-game scored"), reward: L("Un jeu de plus dans la collection — aucun score minimum", "One more game in the collection — no minimum score") },
        { tier: L("Les vingt-trois mini-jeux", "All twenty-three mini-games"), reward: L("Keyblade **Son classique**", "The **Classic Tone** Keyblade") },
      ],
      note: L(
        "Certains mini-jeux ont des paliers de score propres, qui comptent pour les trophées mais pas pour la Keyblade. Rien n'est manquable : les coffres qui contiennent les jeux restent ouverts après la fin de l'histoire.",
        "Some mini-games have score tiers of their own, which count for trophies but not for the Keyblade. Nothing is missable: the chests holding the games stay open after the story ends.",
      ),
    },
  },
  {
    id: "mini-jeux",
    title: L("Les mini-jeux", "The mini-games"),
    tagline: L(
      "La luge d'Arendelle, le festival de Corona, l'arcade du Coffre à jouets et le reste.",
      "Arendelle's sled run, Corona's festival, Toy Box's arcade and the rest.",
    ),
    entry: "sora",
    status: "done",
    intro: L(
      "En dehors du Royaume Classique et des Sept Flantastiques, qui ont leur propre page, Kingdom Hearts III compte quatre grands mini-jeux, un par monde, tous rattachés à une scène de l'histoire puis rejouables librement.\n\nIls ont deux points communs. D'abord, ils se rejouent depuis le lieu où on les a découverts, sans condition et sans coût : un échec ne coûte rien d'autre que le temps de la manche. Ensuite, leurs récompenses sont **liées au score**, pas à la simple participation — c'est ce qui les distingue du Royaume Classique, où marquer une fois suffit.\n\nL'un d'eux dépasse largement les autres en difficulté comme en intérêt : la **luge alpine** d'Arendelle, dont le meilleur palier rapporte un **Orichalque +**, c'est-à-dire un septième de l'Ultima Arma. C'est, avec les portails de combat, le morceau le plus exigeant du jeu de base.\n\nLa navigation des Caraïbes est traitée à part : ce n'est pas un mini-jeu mais un système d'exploration, avec ses propres objectifs chiffrés — deux cents navires coulés, et le Léviathan amélioré au maximum.",
      "Outside Classic Kingdom and the Flantastic Seven, which have pages of their own, Kingdom Hearts III has four major mini-games, one per world, each tied to a story scene and then freely replayable.\n\nThey have two things in common. First, they replay from where you found them, with no condition and no cost: a failure costs nothing but the length of the round. Second, their rewards are tied to **score**, not to mere participation — which is what sets them apart from Classic Kingdom, where scoring once is enough.\n\nOne of them far outstrips the others in difficulty and in interest: Arendelle's **Frozen Slider**, whose top tier pays out an **Orichalcum+**, that is, one seventh of the Ultima Weapon. With the Battlegates, it is the toughest thing in the base game.\n\nThe Caribbean's sailing is handled separately: it is not a mini-game but an exploration system, with numbered objectives of its own — two hundred ships sunk, and the Leviathan fully upgraded.",
    ),
    tables: [
      {
        id: "liste",
        title: L("Les quatre mini-jeux", "The four mini-games"),
        intro: L(
          "Le score indiqué est celui que demande le trophée correspondant, et il sert de bon repère : au-dessus, il n'y a plus rien à gagner.",
          "The score shown is the one the matching trophy asks for, and it makes a good marker: above it, there is nothing left to win.",
        ),
        columns: [L("Mini-jeu", "Mini-game"), L("Monde et accès", "World and access"), L("Objectif et récompense", "Goal and reward")],
        rows: [
          at(
            "Verum Rex : Beat of Lead",
            ["Coffre à jouets — la borne d'arcade de Galaxy Toys", "Toy Box — the Galaxy Toys arcade cabinet"],
            [
              "Un jeu de tir en cockpit, découvert pendant l'histoire puis rejouable à la borne. Objectif : **12 millions de points**. Le score vient des enchaînements sans dégât reçu, pas du nombre de cibles — restez en mouvement et visez les groupes.",
              "A cockpit shooter, met during the story and then replayable at the cabinet. Target: **12 million points**. Score comes from chains taken without damage, not from the number of targets — keep moving and aim at clusters.",
            ],
          ),
          at(
            "La Danse festive",
            ["Royaume de Corona — la place du village, pendant et après le festival", "Kingdom of Corona — the village square, during and after the festival"],
            [
              "Un jeu de rythme à deux, avec Raiponce. Objectif : **70 000 points**. Le multiplicateur monte tant qu'on ne rate rien : mieux vaut viser la régularité que la vitesse.",
              "A two-person rhythm game, with Rapunzel. Target: **70,000 points**. The multiplier climbs while you miss nothing: steadiness beats speed.",
            ],
          ),
          at(
            "La Luge alpine",
            ["Arendelle — la pente du Labyrinthe de glace", "Arendelle — the slope of the Labyrinth of Ice"],
            [
              "Une descente chronométrée semée d'anneaux et de rampes. Objectif : **600 000 points**, et c'est le plus difficile du jeu de base. Le palier le plus haut rapporte un **Orichalque +**.",
              "A timed descent strewn with rings and ramps. Target: **600,000 points**, and it is the hardest thing in the base game. The top tier pays out an **Orichalcum+**.",
            ],
          ),
          at(
            "Le Lumirallye",
            ["San Fransokyo — les câbles de la ville, de nuit", "San Fransokyo — the city's cables, at night"],
            [
              "Deux parcours de glisse sur les câbles, à faire au **rang A** chacun. Le rang dépend du temps et des anneaux franchis : prenez la ligne intérieure dans les virages plutôt que la plus rapide en ligne droite.",
              "Two rail-grinding courses, each to be cleared at **rank A**. Rank depends on time and rings passed: take the inside line through the turns rather than the fastest straight.",
            ],
          ),
        ],
      },
      {
        id: "caraibes",
        title: L("La navigation des Caraïbes", "Sailing in the Caribbean"),
        intro: L(
          "Ce n'est pas un mini-jeu mais un monde ouvert en bateau, avec ses propres objectifs chiffrés. Il reste accessible après la fin de l'histoire.",
          "Not a mini-game but an open world by ship, with numbered objectives of its own. It stays open after the story ends.",
        ),
        columns: [L("Objectif", "Objective"), L("Ce qu'il demande", "What it asks"), L("Comment s'y prendre", "How to go about it")],
        rows: [
          at(
            "Deux cents navires coulés",
            ["Couler 200 navires ennemis en haute mer", "Sink 200 enemy ships on the high seas"],
            [
              "Le compteur monte vite une fois le Léviathan amélioré : les escadres se croisent par groupes de trois ou quatre, et une bordée bien placée en coule deux. Inutile d'aborder — seul le naufrage compte.",
              "The counter climbs quickly once the Leviathan is upgraded: squadrons cross in groups of three or four, and a well-placed broadside sinks two. No need to board — only the sinking counts.",
            ],
          ),
          at(
            "Le Léviathan au maximum",
            ["Améliorer le navire à son dernier palier", "Upgrade the ship to its final tier"],
            [
              "Les améliorations se paient en matériaux ramassés en mer : coffres des îles, épaves, navires coulés. Les îles facultatives de l'archipel en contiennent beaucoup plus que la route de l'histoire.",
              "Upgrades are paid for in materials gathered at sea: island chests, wrecks, sunken ships. The archipelago's optional islands hold far more than the story route does.",
            ],
          ),
        ],
      },
    ],
    steps: [
      {
        id: "luge",
        title: L("La luge alpine, palier par palier", "The sled run, tier by tier"),
        text: L(
          "La luge est le seul mini-jeu du jeu de base qui demande vraiment de l'entraînement, et la raison en est son système de points : le score ne vient presque pas de la vitesse, mais des **anneaux enchaînés sans en rater un seul**. Chaque anneau franchi augmente un multiplicateur qui retombe à zéro dès qu'on en manque un.\n\nLa conséquence est la même que pour les Flantastiques, en plus marqué : il faut ralentir. Une descente propre à vitesse moyenne bat largement une descente rapide qui casse la série deux fois. Les rampes servent moins à aller vite qu'à se replacer sur la ligne d'anneaux suivante.\n\nLe parcours étant toujours identique, il s'apprend. Trois ou quatre descentes suffisent à mémoriser les deux endroits où la ligne d'anneaux change de côté — ce sont eux qui cassent les séries. À partir de là, les 600 000 points tombent en une poignée d'essais.\n\nLa récompense justifie l'effort : le palier le plus haut donne l'un des sept **Orichalque +** du jeu. Sans lui, l'Ultima Arma reste hors de portée.",
          "The sled run is the only base-game mini-game that really needs practice, and the reason is its scoring: points come hardly at all from speed, and almost entirely from **rings chained without missing one**. Each ring raises a multiplier that drops to zero the moment you miss.\n\nThe consequence is the same as for the Flantastic Seven, only sharper: you have to slow down. A clean run at medium speed beats a fast one that breaks the chain twice by a wide margin. The ramps are less about going fast than about lining up with the next run of rings.\n\nSince the course never changes, it can be learned. Three or four descents are enough to memorise the two places where the ring line switches sides — those are what break chains. From there, 600,000 points fall within a handful of attempts.\n\nThe reward justifies the effort: the top tier gives one of the game's seven **Orichalcum+**. Without it, the Ultima Weapon stays out of reach.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Mini-jeu", "Mini-game"),
      rows: [
        { tier: L("Verum Rex : Beat of Lead", "Verum Rex: Beat of Lead"), reward: L("12 millions de points — trophée **Centurion**", "12 million points — the **Centurion** trophy") },
        { tier: L("Danse festive", "Festival Dance"), reward: L("70 000 points — trophée **Danseur festif**", "70,000 points — the **Festival Dancer** trophy") },
        { tier: L("Luge alpine", "Frozen Slider"), reward: L("600 000 points — **Orichalque +** et le trophée **Champion des neiges**", "600,000 points — an **Orichalcum+** and the **Snow Champion** trophy") },
        { tier: L("Lumirallye", "Flash Tracer"), reward: L("Rang A sur les deux parcours — trophée **Engrangeur**", "Rank A on both courses — the **Harvester** trophy") },
        { tier: L("Les Caraïbes", "The Caribbean"), reward: L("200 navires coulés et le **Léviathan** au maximum — deux trophées", "200 ships sunk and the **Leviathan** fully upgraded — two trophies") },
      ],
    },
  },
  {
    id: "vaisseau-gummi",
    title: L("Le vaisseau Gummi", "The Gummi ship"),
    tagline: L(
      "Trois espaces ouverts, neuf sphères au trésor, neuf constellations et les affrontements géants.",
      "Three open-space zones, nine treasure spheres, nine constellations and the giant clashes.",
    ),
    entry: "chip-and-dale",
    status: "done",
    intro: L(
      "Le vaisseau Gummi de Kingdom Hearts III n'a plus rien du couloir de tir des épisodes précédents : c'est un **espace ouvert** qu'on parcourt librement, avec des combats optionnels, des trésors, des photos à prendre et un vaisseau à construire soi-même.\n\nIl se divise en trois zones, débloquées au fil de l'histoire. **Starlight Way** est la première : elle dessert l'Olympe, la Cité du Crépuscule, le Coffre à jouets et le Royaume de Corona. **Misty Stream** suit, avec Monstropolis, Arendelle, les Caraïbes et San Fransokyo. **The Eclipse** est la dernière, celle de la fin du jeu, et de loin la plus dure.\n\nChaque zone contient trois **sphères au trésor** — des épreuves de tir sur cibles chronométrées, qui rapportent des pièces Gummi rares — trois **constellations** à photographier, et une série d'**affrontements** contre des Sans-cœur géants, notés en étoiles.\n\nDeux d'entre eux sont de véritables boss facultatifs : le **Schwarzgeist** de Misty Stream, qui exige un vaisseau à 200 de vitesse minimum, et l'**Omega Machina** de The Eclipse, seul affrontement noté cinq étoiles du jeu. Le tout complété rapporte, entre autres, l'un des sept Orichalque +.",
      "Kingdom Hearts III's Gummi ship has nothing left of the earlier games' shooting corridor: it is an **open space** you travel freely, with optional fights, treasures, photographs to take and a ship to build yourself.\n\nIt splits into three zones, unlocked as the story goes. **Starlight Way** is the first: it serves Olympus, Twilight Town, Toy Box and the Kingdom of Corona. **Misty Stream** follows, with Monstropolis, Arendelle, the Caribbean and San Fransokyo. **The Eclipse** is the last, the endgame's, and by far the hardest.\n\nEach zone holds three **treasure spheres** — timed target-shooting trials that pay out rare Gummi parts — three **constellations** to photograph, and a run of **clashes** against giant Heartless, rated in stars.\n\nTwo of those are genuine optional bosses: Misty Stream's **Schwarzgeist**, which demands a ship with at least 200 Speed, and The Eclipse's **Omega Machina**, the game's only five-star clash. Completing the lot pays out, among other things, one of the seven Orichalcum+.",
    ),
    tables: [
      {
        id: "zones",
        title: L("Les trois espaces", "The three zones"),
        intro: L(
          "Les noms sont ceux du jeu, laissés en anglais dans toutes les versions. Chaque zone garde ses trésors et ses affrontements après la fin de l'histoire.",
          "The names are the game's own, left in English in every version. Each zone keeps its treasures and clashes after the story ends.",
        ),
        columns: [L("Espace", "Zone"), L("Mondes desservis", "Worlds served"), L("Ce qu'on y trouve", "What it holds")],
        rows: [
          at(
            "Starlight Way",
            ["L'Olympe, la Cité du Crépuscule, le Coffre à jouets, le Royaume de Corona", "Olympus, Twilight Town, Toy Box, the Kingdom of Corona"],
            [
              "Sphères au trésor α, β et γ. Constellations **Cactuar**, **Bomb** et **Moogle**. Affrontements : Astrowarrior, Flower Guardian, et Comet Crawlers — ce dernier réclame 100 de vitesse.",
              "Treasure Spheres α, β and γ. Constellations **Cactuar**, **Bomb** and **Moogle**. Clashes: Astrowarrior, Flower Guardian, and Comet Crawlers — the last needing 100 Speed.",
            ],
          ),
          at(
            "Misty Stream",
            ["Monstropolis, Arendelle, les Caraïbes, San Fransokyo", "Monstropolis, Arendelle, the Caribbean, San Fransokyo"],
            [
              "Sphères au trésor δ, ε et ζ. Constellations **Endymion**, **Tonberry** et **Imp**. Affrontements : Dreadshark, Glacial Fortress, Space Worm, et le **Schwarzgeist**, qui exige 200 de vitesse.",
              "Treasure Spheres δ, ε and ζ. Constellations **Endymion**, **Tonberry** and **Imp**. Clashes: Dreadshark, Glacial Fortress, Space Worm, and the **Schwarzgeist**, which demands 200 Speed.",
            ],
          ),
          at(
            "The Eclipse",
            ["La Nécropole des Keyblades et la fin du jeu", "The Keyblade Graveyard and the endgame"],
            [
              "Sphères au trésor η, θ et ι. Constellations **Bismarck**, **Ultros** et **Omega**. Affrontements : Colossus Pyramid, Supreme Warrior et Scarlet Shark, tous quatre étoiles, puis l'**Omega Machina**, seul cinq étoiles du jeu.",
              "Treasure Spheres η, θ and ι. Constellations **Bismarck**, **Ultros** and **Omega**. Clashes: Colossus Pyramid, Supreme Warrior and Scarlet Shark, all four stars, then the **Omega Machina**, the game's only five-star.",
            ],
          ),
        ],
      },
    ],
    steps: [
      {
        id: "construire",
        title: L("Construire un vaisseau qui tienne", "Building a ship that holds up"),
        text: L(
          "L'éditeur de vaisseau intimide, mais trois chiffres seulement décident de tout : les **PV**, la **vitesse** et la **puissance**. Les modèles préfabriqués fournis par le jeu sont volontairement médiocres sur au moins un des trois, et c'est ce qui bloque les joueurs devant les affrontements à quatre étoiles.\n\nLa **vitesse** est le chiffre à surveiller en premier, parce que deux affrontements y posent un seuil explicite : 100 pour les Comet Crawlers, **200 pour le Schwarzgeist**. Un vaisseau qui n'atteint pas 200 ne peut tout simplement pas engager ce combat, quelle que soit son artillerie.\n\nLes **PV** viennent ensuite. Contre l'Omega Machina, la question n'est pas de faire des dégâts mais de survivre assez longtemps pour en faire : un vaisseau fragile meurt avant la deuxième phase, quelle que soit l'adresse du pilote.\n\nLes pièces qui montent ces trois chiffres viennent des **sphères au trésor** et des **constellations photographiées**. La boucle est donc vertueuse : on nettoie les trésors faciles d'une zone, on améliore le vaisseau, et les affrontements de cette zone deviennent abordables. Vouloir attaquer le Schwarzgeist avec un vaisseau de départ est la façon la plus sûre de perdre une heure.",
          "The ship editor looks intimidating, but only three numbers decide anything: **HP**, **Speed** and **Power**. The prefabs the game hands you are deliberately mediocre in at least one of the three, and that is what stops players in front of the four-star clashes.\n\n**Speed** is the number to watch first, because two clashes set an explicit floor: 100 for the Comet Crawlers, **200 for the Schwarzgeist**. A ship that does not reach 200 simply cannot start that fight, whatever its guns.\n\n**HP** comes next. Against the Omega Machina, the question is not dealing damage but surviving long enough to deal any: a fragile ship dies before the second phase, however well it is flown.\n\nThe parts that raise those three numbers come from the **treasure spheres** and the **photographed constellations**. So the loop is virtuous: clear a zone's easy treasures, upgrade the ship, and that zone's clashes become manageable. Attacking the Schwarzgeist in a starting ship is the surest way to lose an hour.",
        ),
      },
      {
        id: "spheres",
        title: L("Les sphères au trésor et les constellations", "Treasure spheres and constellations"),
        text: L(
          "Les neuf **sphères au trésor**, trois par zone, fonctionnent toutes pareil : une série de cibles apparaît dans une forme donnée — un N, un Y, un T, un X — et il faut toutes les détruire dans le temps imparti avant que la forme suivante se présente. Les formes et leurs durées sont fixes, donc la sphère s'apprend comme un parcours.\n\nLa seule difficulté réelle est la dernière forme de chaque sphère, plus large que le champ de vision : il faut commencer à tirer en tournant, sans attendre de tout voir. Les sphères η, θ et ι de The Eclipse sont les plus serrées, et donnent aussi les meilleures pièces.\n\nLes neuf **constellations** ne se combattent pas : on les photographie, au Gummiphone, depuis l'espace. Elles sont posées à des endroits fixes — un coin de la carte, les abords d'un monde — et le jeu signale leur proximité. Ce sont des clins d'œil à Final Fantasy : Cactuar, Tonberry, Moogle, Bomb, Imp, Ultros, Omega, Bismarck et Endymion.\n\nLes deux collectes ont leur trophée : **Pilleur spatial** pour vingt trésors uniques, **Astronome** pour les neuf constellations photographiées.",
          "The nine **treasure spheres**, three per zone, all work the same way: a run of targets appears in a given shape — an N, a Y, a T, an X — and every one must be destroyed within the allotted time before the next shape comes up. The shapes and their timings are fixed, so a sphere is learned like a course.\n\nThe only real difficulty is each sphere's last shape, wider than the field of view: you have to start firing while turning, rather than waiting to see it all. The Eclipse's η, θ and ι spheres are the tightest, and give the best parts.\n\nThe nine **constellations** are not fought: you photograph them with the Gummiphone, from space. They sit at fixed spots — a corner of the map, the approach to a world — and the game flags when you are near. They are Final Fantasy nods: Cactuar, Tonberry, Moogle, Bomb, Imp, Ultros, Omega, Bismarck and Endymion.\n\nBoth collections have a trophy: **Space Ranger** for twenty unique treasures, **Astronomer** for all nine constellations photographed.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Objectif", "Objective"),
      rows: [
        { tier: L("Vingt trésors uniques", "Twenty unique treasures"), reward: L("Pièces Gummi rares et le trophée **Pilleur spatial**", "Rare Gummi parts and the **Space Ranger** trophy") },
        { tier: L("Les neuf constellations", "All nine constellations"), reward: L("Trophée **Astronome** et des plans de vaisseau", "The **Astronomer** trophy and ship blueprints") },
        { tier: L("Le Schwarzgeist", "The Schwarzgeist"), reward: L("Trophée **Thermosphère** — vaisseau à 200 de vitesse exigé", "The **Thermosphere** trophy — a 200-Speed ship required") },
        { tier: L("L'espace complété", "Space completed"), reward: L("**Orichalque +**, l'un des sept de l'Ultima Arma", "An **Orichalcum+**, one of the Ultima Weapon's seven") },
      ],
      note: L(
        "La section **Trésors** du Gummiphone recense les trois espaces : c'est elle qu'il faut remplir pour le trophée **Dans les moindres recoins**, et elle sert de carte de progression bien plus lisible que l'espace lui-même.",
        "The Gummiphone's **Treasures** section covers all three zones: it is what you fill for the **Down to the Last Corner** trophy, and it reads as a progress map far better than space itself does.",
      ),
    },
  },
  {
    id: "rapports-secrets",
    title: L("Les rapports secrets", "The Secret Reports"),
    tagline: L(
      "Treize carnets, un par portail de combat, qui expliquent ce que l'histoire garde pour elle.",
      "Thirteen notebooks, one per Battlegate, explaining what the story keeps back.",
    ),
    entry: "ansem-the-wise",
    status: "done",
    intro: L(
      "Les rapports secrets sont la tradition de la série : des documents écrits par les personnages eux-mêmes, qui comblent les trous laissés par les cinématiques. Kingdom Hearts III en compte **treize**, et les place tous derrière la même porte — chacun récompense un **portail de combat** vidé.\n\nAutrement dit, ils n'apparaissent qu'après la fin de l'histoire, et ils demandent d'avoir fait la quête annexe la plus difficile du jeu de base. C'est un choix délibéré : ces textes répondent à des questions que seul un joueur ayant terminé le jeu se pose, et plusieurs d'entre eux ne se comprennent qu'une fois la fin vue.\n\nCe qu'ils apportent est considérable. Les notes de Xehanort éclairent son apprentissage et ses expériences sur le cœur ; celles de Vexen expliquent le programme de répliques et ce que l'Organisation appelle sa « véritable » version ; les mémoires de Saïx donnent enfin le point de vue d'un personnage que le jeu tient à distance ; les analyses d'Ienzo portent sur le code d'Ansem le Sage. Les trois derniers, signés d'un auteur non identifié, sont les plus discutés de la série.\n\nIls se relisent à tout moment depuis le **Gummiphone**, dans la section qui leur est réservée.",
      "Secret Reports are a series tradition: documents written by the characters themselves, filling the gaps the cutscenes leave. Kingdom Hearts III has **thirteen**, and puts them all behind one door — each rewards a cleared **Battlegate**.\n\nWhich is to say they only appear after the story ends, and they ask you to have done the base game's hardest side quest. That is deliberate: these texts answer questions only a player who has finished the game asks, and several of them make sense only once the ending has been seen.\n\nWhat they add is considerable. Xehanort's notes shed light on his apprenticeship and his experiments on the heart; Vexen's explain the replica programme and what the Organisation calls its \"true\" version; Saïx's memoirs finally give the point of view of a character the game keeps at arm's length; Ienzo's analyses concern Ansem the Wise's code. The last three, by an unidentified author, are the most argued-over in the series.\n\nThey can be reread at any time from the **Gummiphone**, in the section set aside for them.",
    ),
    tables: [
      {
        id: "liste",
        title: L("Les treize rapports", "The thirteen reports"),
        intro: L(
          "Ils se débloquent dans l'ordre où les portails sont vidés, et non dans l'ordre de la liste. Aucun n'est manquable : les portails restent ouverts indéfiniment.",
          "They unlock in the order the gates are cleared, not in list order. None is missable: the gates stay open indefinitely.",
        ),
        columns: [L("N°", "No."), L("Auteur", "Author"), L("Titre", "Title")],
        rows: [
          at("1", ["Auteur inconnu", "Unknown author"], ["Réminiscences", "Reminiscences"]),
          at("2", ["Xehanort", "Xehanort"], ["Journal de l'examen de Symbole de maîtrise", "Mark of Mastery exam journal"]),
          at("3", ["Xehanort", "Xehanort"], ["Expériences sur le cœur — Notes sur le sujet X, extrait n° 1", "Experiments on the heart — Notes on subject X, extract 1"]),
          at("4", ["Xehanort", "Xehanort"], ["Expériences sur le cœur — Notes sur le sujet X, extrait n° 2", "Experiments on the heart — Notes on subject X, extract 2"]),
          at("5", ["Saïx", "Saïx"], ["Mémoires, extrait n° 1", "Memoirs, extract 1"]),
          at("6", ["Saïx", "Saïx"], ["Mémoires, extrait n° 2", "Memoirs, extract 2"]),
          at("7", ["Vexen", "Vexen"], ["Réflexions sur le projet de réplication humaine et la réanimation", "Thoughts on the human replica project and reanimation"]),
          at("8", ["Vexen", "Vexen"], ["La « véritable » Organisation", "The \"true\" Organisation"]),
          at("9", ["Ienzo", "Ienzo"], ["Analyse partielle du code d'Ansem le Sage, extrait n° 1", "Partial analysis of Ansem the Wise's code, extract 1"]),
          at("10", ["Ienzo", "Ienzo"], ["Analyse partielle du code d'Ansem, extrait n° 2", "Partial analysis of Ansem's code, extract 2"]),
          at("11", ["Inconnu", "Unknown"], ["Observations, extrait n° 1", "Observations, extract 1"]),
          at("12", ["Inconnu", "Unknown"], ["Observations, extrait n° 2", "Observations, extract 2"]),
          at("13", ["Inconnu", "Unknown"], ["Observations, extrait n° 3", "Observations, extract 3"]),
        ],
      },
    ],
    steps: [
      {
        id: "lire",
        title: L("Dans quel ordre les lire", "What order to read them in"),
        text: L(
          "L'ordre de déblocage étant celui des portails, la plupart des joueurs les découvrent mélangés. Ce n'est pas grave : chaque rapport se suffit à lui-même, et le Gummiphone les range ensuite dans l'ordre numérique, qui est celui de lecture.\n\nUne seule précaution vaut d'être prise : lisez les **deux extraits d'une même série à la suite**. Les notes de Xehanort sur le sujet X, les mémoires de Saïx et les analyses d'Ienzo forment des paires ; prises isolément, elles paraissent obscures, alors que lues d'affilée elles disent quelque chose de net.\n\nLes trois derniers, les **Observations**, sont d'une autre nature. Ils ne racontent pas un épisode passé mais commentent le présent depuis un point de vue extérieur, et ce sont eux qui préparent la suite de la série. Gardez-les pour la fin, après avoir vu la scène secrète : ils s'éclairent mutuellement.\n\nÀ noter enfin que ces textes sont d'authentiques révélations, et pas des compléments décoratifs. Un joueur qui trouve la fin de Kingdom Hearts III confuse y trouvera la plupart des réponses qui lui manquaient.",
          "Since the unlock order follows the gates, most players meet them shuffled. That is fine: each report stands on its own, and the Gummiphone then files them in numerical order, which is the reading order.\n\nOne precaution is worth taking: read the **two extracts of a series back to back**. Xehanort's notes on subject X, Saïx's memoirs and Ienzo's analyses come in pairs; taken alone they read as obscure, whereas read in sequence they say something clear.\n\nThe last three, the **Observations**, are a different animal. They do not recount a past episode but comment on the present from outside, and they are what sets up the rest of the series. Save them for last, after the secret ending: they light each other up.\n\nWorth noting, finally, that these texts are genuine revelations rather than decorative extras. A player who finds Kingdom Hearts III's ending confusing will find most of the missing answers here.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Étape", "Step"),
      rows: [
        { tier: L("Chaque portail de combat vidé", "Each Battlegate cleared"), reward: L("Un rapport secret, consultable au Gummiphone", "One Secret Report, readable on the Gummiphone") },
        { tier: L("Les treize rapports", "All thirteen reports"), reward: L("La totalité du contexte que l'histoire laisse hors champ", "All the context the story leaves off-screen") },
      ],
      note: L(
        "Les rapports partagent leur condition avec les récompenses des **portails de combat** : une seule série de combats débloque les deux. Voir l'annexe qui leur est consacrée pour l'ordre dans lequel les aborder.",
        "The reports share their condition with the **Battlegates**' rewards: one run of fights unlocks both. See the annexe devoted to them for the order to take them in.",
      ),
    },
  },
  {
    id: "inventaire",
    title: L("L'inventaire", "The inventory"),
    tagline: L(
      "Keyblades, armes des compagnons, accessoires, protections et objets-clés.",
      "Keyblades, party weapons, accessories, armour and key items.",
    ),
    entry: "kingdom-key",
    status: "done",
    intro: L(
      "L'inventaire de Kingdom Hearts III se range en cinq catégories : les **armes** — les Keyblades de Sora, les bâtons de Donald, les boucliers de Dingo —, les **protections**, les **accessoires**, les **objets** consommables et les **objets-clés**.\n\nDeux choses distinguent cet inventaire de ceux des épisodes précédents. D'abord, chaque Keyblade s'**améliore à la forge** des Mogs, sur sept paliers : les chiffres donnés ci-dessous sont ceux de l'arme à son état d'origine, et une Keyblade entièrement forgée dépasse largement une arme plus récente laissée telle quelle. Ensuite, Sora en équipe **trois à la fois** et bascule de l'une à l'autre en plein combat — ce qui fait de la composition un choix tactique, pas un simple classement par puissance.\n\nLes accessoires, eux, ne se contentent plus de donner des points : beaucoup portent une **capacité** — Convertisseur de Soin, Explosion de MP, Concentration X — qui pèse davantage que les deux ou trois points d'attaque affichés à côté.\n\nLes protections ne sont pas détaillées ici une par une : elles suivent une progression linéaire, et la meilleure disponible est presque toujours la bonne. La seule à mériter d'être cherchée est la **Ceinture de héros**, donnée par les figurines dorées de l'Olympe.",
      "Kingdom Hearts III's inventory falls into five categories: **weapons** — Sora's Keyblades, Donald's staves, Goofy's shields —, **armour**, **accessories**, consumable **items** and **key items**.\n\nTwo things set this inventory apart from earlier games'. First, every Keyblade **upgrades at the moogle forge**, across seven tiers: the figures below are the weapon's base state, and a fully forged Keyblade comfortably beats a newer one left as it is. Second, Sora equips **three at a time** and switches between them mid-fight — which makes the loadout a tactical choice, not a ranking by power.\n\nAccessories no longer merely hand out points either: many carry an **ability** — Heal Converter, MP Explosion, Focus Barrage — that weighs more than the two or three points of Strength listed beside it.\n\nArmour is not itemised here: it follows a linear progression, and the best available piece is almost always the right one. The only one worth hunting is the **Hero's Belt**, given by Olympus's golden figures.",
    ),
    tables: [
      {
        id: "keyblades",
        title: L("Les Keyblades de Sora", "Sora's Keyblades"),
        intro: L(
          "Force et Magie sont celles de l'arme non améliorée. Chacune gagne sept paliers à la forge des Mogs ; les formes de chaque Keyblade sont détaillées dans l'annexe qui leur est consacrée.",
          "Strength and Magic are the unupgraded weapon's. Each gains seven tiers at the moogle forge; every Keyblade's forms are detailed in the annexe devoted to them.",
        ),
        columns: [L("Keyblade", "Keyblade"), L("Force / Magie", "Strength / Magic"), L("Obtention", "How it's obtained")],
        rows: [
          at("Chaîne royale", ["4 / 3", "4 / 3"], ["Arme de départ.", "Starting weapon."]),
          at("Genèse héroïque", ["5 / 2", "5 / 2"], ["Terminer l'Olympe.", "Finish Olympus."]),
          at("Étoile filante", ["3 / 5", "3 / 5"], ["Terminer la Cité du Crépuscule.", "Finish Twilight Town."]),
          at("Shérif de l'Ouest", ["6 / 3", "6 / 3"], ["Terminer le Coffre à jouets.", "Finish Toy Box."]),
          at("À tout jamais", ["2 / 7", "2 / 7"], ["Terminer le Royaume de Corona.", "Finish the Kingdom of Corona."]),
          at("Zygomagique", ["7 / 3", "7 / 3"], ["Terminer Monstropolis.", "Finish Monstropolis."]),
          at("Neige cristalline", ["4 / 7", "4 / 7"], ["Terminer Arendelle.", "Finish Arendelle."]),
          at("Verse-miel", ["6 / 5", "6 / 5"], ["Terminer la Forêt des Rêves Bleus.", "Finish the Hundred Acre Wood."]),
          at("Microcomposant", ["7 / 5", "7 / 5"], ["Terminer San Fransokyo.", "Finish San Fransokyo."]),
          at("Gouvernail du destin", ["8 / 5", "8 / 5"], ["Terminer les Caraïbes.", "Finish the Caribbean."]),
          at("Lumière stellaire", ["4 / 4", "4 / 4"], ["Fin du jeu.", "End of the game."]),
          at("Chef étoilé", ["5 / 7", "5 / 7"], ["Cinq étoiles au **Bistrot du Petit Chef**.", "Five stars at **Le Grand Bistrot**."]),
          at("Son classique", ["6 / 9", "6 / 9"], ["Marquer un score dans chacun des vingt-trois jeux du **Royaume Classique**.", "Score in each of Classic Kingdom's twenty-three games."]),
          at("Ultima Arma", ["13 / 13", "13 / 13"], ["Synthèse à l'**atelier des Mogs**, avec les sept Orichalque +.", "Synthesis at the **moogle workshop**, with all seven Orichalcum+."]),
        ],
      },
      {
        id: "compagnons",
        title: L("Les armes des compagnons", "The party's weapons"),
        intro: L(
          "Elles ne se forgent pas : elles s'achètent, se trouvent en coffre ou se synthétisent. Contrairement aux Keyblades, la plus récente est presque toujours la meilleure.",
          "They are not forged: they are bought, found in chests or synthesised. Unlike the Keyblades, the newest is nearly always the best.",
        ),
        columns: [L("Compagnon", "Companion"), L("Armes", "Weapons"), L("Où les obtenir", "Where to get them")],
        rows: [
          at(
            "Donald — les bâtons",
            ["Bâton de magicien, Marteau de bois, Baguette magique, Nirvana, Astrolabe, et leurs versions améliorées", "Mage's Staff, Wooden Hammer, Magic Wand, Nirvana, Astrolabe, and their improved versions"],
            [
              "Le bâton de départ, puis la boutique des Mogs et les coffres des mondes. Les versions améliorées passent par la synthèse.",
              "The starting staff, then the moogle shop and world chests. The improved versions go through synthesis.",
            ],
          ),
          at(
            "Dingo — les boucliers",
            ["Targe royale, Targe mécanique, Targe stellaire, Bouclier d'Aegis, Ancre des tempêtes, jusqu'à Save the King", "Royal Shield, Mecha Shield, Star Shield, Aegis Shield, Storm Anchor, up to Save the King"],
            [
              "Même logique : boutique, coffres et synthèse. **Save the King**, le dernier, monte à 9 en Force.",
              "Same logic: shop, chests and synthesis. **Save the King**, the last one, reaches 9 Strength.",
            ],
          ),
        ],
      },
      {
        id: "accessoires",
        title: L("Les accessoires", "Accessories"),
        collapsed: true,
        intro: L(
          "Regroupés par familles. Les PC indiqués sont les points de capacité que l'accessoire coûte à équiper ; ce sont les capacités, plus que les points, qui font la valeur des meilleurs.",
          "Grouped by family. The AP figure is what the accessory costs to equip; it is the abilities, more than the points, that make the best ones worth it.",
        ),
        columns: [L("Famille", "Family"), L("Exemples", "Examples"), L("Ce qu'ils apportent", "What they bring")],
        rows: [
          at(
            "Les anneaux d'attaque",
            ["Anneau de compétences, Anneau cosmique, Anneau d'orichalque", "Skill Ring, Cosmic Ring, Orichalcum Ring"],
            [
              "De +1 à +6 en Attaque. L'**Anneau d'orichalque** (6 ATT pour 10 PC) est le meilleur rapport du jeu sur cette ligne.",
              "From +1 to +6 Strength. The **Orichalcum Ring** (6 Str for 10 AP) is the game's best value on this line.",
            ],
          ),
          at(
            "Les anneaux de magie",
            ["Anneau magique, Anneau runique, Anneau de sorcier", "Magic Ring, Rune Ring, Sorcerer's Ring"],
            ["De +2 à +5 en Magie, pour un coût en PC très faible. La base d'une composition orientée sorts.", "From +2 to +5 Magic, at a very low AP cost. The backbone of a spell-leaning loadout."],
          ),
          at(
            "Les boucles",
            ["Boucle de soldat, Boucle fine lame, Boucle de mage", "Soldier Earring, Fencer Earring, Mage Earring"],
            ["Elles mélangent Attaque et Magie — le choix par défaut quand on ne veut se fermer aucune option.", "They mix Strength and Magic — the default choice when you want to keep every option open."],
          ),
          at(
            "Les amulettes et colliers",
            ["Amulette de bronze, Amulette d'argent, Amulette cosmique, Collier royal", "Bronze Amulet, Silver Amulet, Cosmic Amulet, Royal Necklace"],
            ["Les amulettes montent progressivement jusqu'à 4 ATT / 4 MAG. Plusieurs viennent des paliers d'emblèmes fétiches.", "The amulets climb steadily to 4 Str / 4 Mag. Several come from the Lucky Emblem tiers."],
          ),
          at(
            "Les attaches élémentaires",
            ["Attache Brasier, Attache Foudre, Attache Rafale, Attache Eau, Attache Glacier, Attache zen, Attache trois étoiles", "Blazing Charm, Thunder Charm, Gust Charm, Aqua Charm, Frost Charm, Serenity Charm, Celestriad Charm"],
            [
              "Chacune renforce un élément et se gagne dans un **portail de combat**. Utiles surtout contre un boss dont on connaît la faiblesse.",
              "Each strengthens one element and is won in a **Battlegate**. Mostly useful against a boss whose weakness you know.",
            ],
          ),
          at(
            "Les accessoires spéciaux",
            ["Barrette de Mickey, Emblème de cristal, Anneau flantastique, Ruban royal", "Mickey Clasp, Crystal Regalia, Flantastic Ring, Royal Ribbon"],
            [
              "Les quatre récompenses de fin de collecte. La **Barrette de Mickey** (3 ATT, 5 MAG, 90 emblèmes) donne Concentration X et Magie infinie ; l'**Emblème de cristal** (5 ATT, 5 MAG) vient du portail 14.",
              "The four end-of-collection rewards. The **Mickey Clasp** (3 Str, 5 Mag, 90 emblems) grants Focus Barrage and Infinite Magic; the **Crystal Regalia** (5 Str, 5 Mag) comes from gate 14.",
            ],
          ),
        ],
      },
      {
        id: "objets",
        title: L("Objets et objets-clés", "Items and key items"),
        intro: L(
          "Les consommables sont d'une simplicité assumée dans cet épisode : peu de variété, beaucoup de quantité.",
          "Consumables are deliberately simple this time round: little variety, plenty of quantity.",
        ),
        columns: [L("Catégorie", "Category"), L("Ce qu'elle contient", "What it holds"), L("Remarque", "Note")],
        rows: [
          at(
            "Les soins",
            ["Potion, Mégapotion, Éther, Méga-éther, Élixir, Mégalixir", "Potion, Mega-Potion, Ether, Mega-Ether, Elixir, Megalixir"],
            [
              "Les Mégapotions soignent toute l'équipe : dans un combat long, elles valent trois Potions. Le Mégalixir du portail 4 est à garder pour un affrontement précis.",
              "Mega-Potions heal the whole party: in a long fight they are worth three Potions. The Megalixir from gate 4 is worth saving for a specific fight.",
            ],
          ),
          at(
            "Les boosters",
            ["Booster Attaque, Booster Magie, Booster Défense, Booster PV, Booster PM", "Power Boost, Magic Boost, Defense Boost, HP Boost, MP Boost"],
            [
              "Bonus permanents. Ils viennent surtout des paliers d'**emblèmes fétiches** — et se cumulent avec les bonus du bistrot.",
              "Permanent bonuses. They come mostly from the **Lucky Emblem** tiers — and stack with the bistro's bonuses.",
            ],
          ),
          at(
            "Les objets-clés",
            ["Gummiphone, les sept Orichalque +, les cartes du Royaume Classique, les figurines dorées", "The Gummiphone, the seven Orichalcum+, the Classic Kingdom cards, the golden figures"],
            [
              "Ils ne s'utilisent pas : ils ouvrent des systèmes ou servent de matériau. Le Gummiphone porte à lui seul la photo, le bestiaire, les rapports secrets et le Royaume Classique.",
              "They are not used: they open systems or serve as material. The Gummiphone alone carries the camera, the bestiary, the Secret Reports and Classic Kingdom.",
            ],
          ),
        ],
      },
    ],
    rewards: {
      tierHeader: L("À retenir", "Key point"),
      rows: [
        { tier: L("La forge", "The forge"), reward: L("Sept paliers par Keyblade — une arme forgée bat une arme récente", "Seven tiers per Keyblade — a forged weapon beats a newer one") },
        { tier: L("Trois Keyblades", "Three Keyblades"), reward: L("Couvrir groupe, distance et défense plutôt que cumuler la puissance", "Cover crowds, range and defence rather than stacking power") },
        { tier: L("Les accessoires", "Accessories"), reward: L("Leurs capacités pèsent plus que les points affichés", "Their abilities weigh more than the listed points") },
        { tier: L("Ultima Arma", "Ultima Weapon"), reward: L("13 / 13 — aucune autre arme n'en approche", "13 / 13 — nothing else comes close") },
      ],
    },
  },
  {
    id: "bestiaire",
    title: L("Le bestiaire", "The bestiary"),
    tagline: L(
      "Les Sans-cœur, les Nescients et les Similis de Kingdom Hearts III, et ce qu'ils lâchent.",
      "Kingdom Hearts III's Heartless, Unversed and Nobodies, and what they drop.",
    ),
    entry: "heartless",
    status: "done",
    intro: L(
      "Le bestiaire de Kingdom Hearts III tient dans le **Gummiphone**, section « Adversaires » : chaque espèce rencontrée s'y inscrit, avec les mondes où on la croise et les matériaux qu'elle laisse tomber. Le remplir entièrement vaut un trophée, mais son vrai usage est ailleurs — c'est la table de correspondance qui dit quel ennemi farmer pour quelle recette de synthèse.\n\nLa composition du bestiaire est particulière à cet épisode. Les **Sans-cœur** occupent presque toute la place : une cinquantaine d'espèces, réparties entre les neuf mondes et les portails de combat. Les **Nescients** ne reviennent que dans un seul monde, Monstropolis, où ils tiennent lieu d'ennemis locaux. Quant aux **Similis**, ils n'existent plus comme troupe : l'Organisation XIII se bat en personne, et aucun Simili commun ne patrouille dans les mondes.\n\nLa lecture des objets lâchés obéit à une logique simple : chaque espèce est liée à une **famille de matériaux** — torturé, ardent, apaisant, vibrant, grondant, hyalin, ressourçant, affamé, glacial, illusoire — et laisse tomber les trois qualités de cette famille, éclat, pierre puis gemme ou cristal selon son niveau. Quand une recette bloque, c'est la famille qu'on cherche, pas l'objet.\n\nLes portails de combat, indiqués par leur numéro dans le tableau, sont de loin le meilleur endroit pour accumuler : ils enchaînent des vagues denses d'ennemis de haut niveau, donc des matériaux de qualité supérieure.",
      "Kingdom Hearts III's bestiary lives in the **Gummiphone**, under \"Enemies\": every species you meet is recorded there, with the worlds you meet it in and the materials it drops. Filling it is worth a trophy, but its real use is elsewhere — it is the lookup table that says which enemy to farm for which synthesis recipe.\n\nThe bestiary's make-up is particular to this game. **Heartless** take up nearly all of it: some fifty species, spread across the nine worlds and the Battlegates. **Unversed** return in one world only, Monstropolis, where they stand in for local enemies. As for **Nobodies**, they no longer exist as rank and file: Organisation XIII fights in person, and no common Nobody patrols the worlds.\n\nReading the drops follows a simple logic: each species is tied to a **material family** — Writhing, Blazing, Soothing, Wellspring, Pulsing, Lucid, Remembrance, Hungry, Frost, Illusory — and drops that family's three qualities, shard, then stone, then gem or crystal by its level. When a recipe stalls, it is the family you look for, not the item.\n\nThe Battlegates, shown by number in the table, are by far the best place to stockpile: they chain dense waves of high-level enemies, and therefore higher-grade materials.",
    ),
    tables: [
      {
        id: "sans-coeur",
        title: L("Les Sans-cœur", "The Heartless"),
        collapsed: true,
        intro: L(
          "Les mondes sont ceux où l'espèce apparaît en jeu libre ; les numéros renvoient aux portails de combat. Les objets sont donnés dans l'ordre de rareté croissante.",
          "The worlds are where the species appears in free play; the numbers refer to the Battlegates. Drops are listed from commonest to rarest.",
        ),
        columns: [L("Sans-cœur", "Heartless"), L("Où on le croise", "Where you meet it"), L("Ce qu'il lâche", "What it drops")],
        rows: [
          at("Ombre", ["Olympe, Crépuscule, Coffre à jouets, Corona, San Fransokyo, portails", "Olympus, Twilight Town, Toy Box, Corona, San Fransokyo, gates"], ["Éclat torturé, Pierre torturée", "Writhing Shard, Writhing Stone"]),
          at("Crypto Ombre", ["San Fransokyo, portail 0", "San Fransokyo, gate 0"], ["Pierre torturée, Gemme torturée, Pierre ressourçante", "Writhing Stone, Writhing Gem, Remembrance Stone"]),
          at("Noctule", ["Corona, Monstropolis, Arendelle, portail 0", "Corona, Monstropolis, Arendelle, gate 0"], ["Éclat torturé, Pierre torturée, Gemme torturée", "Writhing Shard, Stone, Gem"]),
          at("Pyronucléo", ["Olympe, Monstropolis, portails 1 et 8", "Olympus, Monstropolis, gates 1 and 8"], ["Éclat ardent, Pierre ardente", "Blazing Shard, Blazing Stone"]),
          at("Aquanucléo", ["Olympe, Monstropolis, Caraïbes, portails 1 et 10", "Olympus, Monstropolis, the Caribbean, gates 1 and 10"], ["Éclat apaisant, Pierre apaisante", "Soothing Shard, Soothing Stone"]),
          at("Terranucléo", ["Olympe, Caraïbes, portail 10", "Olympus, the Caribbean, gate 10"], ["Éclat et Pierre vibrants ; Éclat et Pierre affamés pour la variante sableuse", "Wellspring Shard and Stone; Hungry Shard and Stone for the sandy variant"]),
          at("Soldat", ["Olympe, Arendelle, San Fransokyo, portail 2", "Olympus, Arendelle, San Fransokyo, gate 2"], ["Éclat vibrant, Éclat grondant, Éclat ressourçant", "Wellspring, Pulsing and Remembrance Shards"]),
          at("Soldat cuirassé", ["San Fransokyo, portail 12", "San Fransokyo, gate 12"], ["Gemme ressourçante, Cristal ressourçant, Cristal ardent", "Remembrance Gem and Crystal, Blazing Crystal"]),
          at("Soldat volant", ["Olympe, portail 1", "Olympus, gate 1"], ["Éclat hyalin, Pierre hyaline", "Lucid Shard, Lucid Stone"]),
          at("Rondouillard", ["Olympe, Crépuscule, Coffre à jouets, Monstropolis, Caraïbes, portail 10", "Olympus, Twilight Town, Toy Box, Monstropolis, the Caribbean, gate 10"], ["Éclat ressourçant, Pierre ressourçante, Éclat affamé", "Remembrance Shard and Stone, Hungry Shard"]),
          at("Rondouillard casqué", ["Arendelle, portail 11", "Arendelle, gate 11"], ["Gemme torturée, Cristal ressourçant, Cristal vibrant", "Writhing Gem, Remembrance Crystal, Wellspring Crystal"]),
          at("Samba cinabre", ["Olympe, Crépuscule, Coffre à jouets, portail 13", "Olympus, Twilight Town, Toy Box, gate 13"], ["Pierre ardente, Gemme ardente", "Blazing Stone, Blazing Gem"]),
          at("Rumba azurée", ["Corona, Monstropolis, Arendelle, Caraïbes, portail 10", "Corona, Monstropolis, Arendelle, the Caribbean, gate 10"], ["Pierre apaisante, Gemme apaisante", "Soothing Stone, Soothing Gem"]),
          at("Cadence dorée", ["Coffre à jouets, Monstropolis, Arendelle, Caraïbes, San Fransokyo, portail 13", "Toy Box, Monstropolis, Arendelle, the Caribbean, San Fransokyo, gate 13"], ["Pierre grondante, Gemme grondante", "Pulsing Stone, Pulsing Gem"]),
          at("Boléro verdâtre", ["Corona, portail 7", "Corona, gate 7"], ["Pierre hyaline, Gemme hyaline", "Lucid Stone, Lucid Gem"]),
          at("Chapot", ["Olympe", "Olympus"], ["Éclat affamé, Pierre affamée", "Hungry Shard, Hungry Stone"]),
          at("Chapot de vitalité", ["Arendelle", "Arendelle"], ["Éclat affamé, Pierre affamée, Pierre ressourçante", "Hungry Shard and Stone, Remembrance Stone"]),
          at("Chapot de magie", ["Arendelle", "Arendelle"], ["Éclat affamé, Pierre affamée, Pierre ressourçante", "Hungry Shard and Stone, Remembrance Stone"]),
          at("Chapot de concentration", ["Arendelle", "Arendelle"], ["Éclat affamé, Pierre affamée, Pierre ressourçante", "Hungry Shard and Stone, Remembrance Stone"]),
          at("Chapot de munnies", ["Crépuscule", "Twilight Town"], ["Éclat affamé, Pierre affamée, Pierre ressourçante", "Hungry Shard and Stone, Remembrance Stone"]),
          at("Archer fantasque", ["Olympe, Crépuscule, Corona, portail 1", "Olympus, Twilight Town, Corona, gate 1"], ["Éclat ardent, Éclat grondant, Éclat ressourçant", "Blazing, Pulsing and Remembrance Shards"]),
          at("Rock'n'troll", ["Olympe, Arendelle, portail 2", "Olympus, Arendelle, gate 2"], ["Pierre ressourçante, Gemme ressourçante", "Remembrance Stone, Remembrance Gem"]),
          at("Troll métalleux", ["San Fransokyo, portail 11", "San Fransokyo, gate 11"], ["Pierre ressourçante, Gemme ressourçante", "Remembrance Stone, Remembrance Gem"]),
          at("Faune", ["Olympe, Arendelle, portail 1", "Olympus, Arendelle, gate 1"], ["Pierre vibrante, Gemme vibrante, Éclat ressourçant", "Wellspring Stone and Gem, Remembrance Shard"]),
          at("Mécanitaure", ["San Fransokyo, portail 12", "San Fransokyo, gate 12"], ["Cristal torturé, Gemme ressourçante, Cristal affamé", "Writhing Crystal, Remembrance Gem, Hungry Crystal"]),
          at("Soldat jouet", ["Coffre à jouets, portails 4 et 5", "Toy Box, gates 4 and 5"], ["Éclat apaisant, Éclat ressourçant", "Soothing Shard, Remembrance Shard"]),
          at("Grobusier", ["Coffre à jouets, San Fransokyo, portails 4 et 5", "Toy Box, San Fransokyo, gates 4 and 5"], ["Éclat ardent, Pierre ardente, Pierre ressourçante", "Blazing Shard and Stone, Remembrance Stone"]),
          at("Marionnette", ["Coffre à jouets", "Toy Box"], ["Éclat grondant, Pierre grondante", "Pulsing Shard, Pulsing Stone"]),
          at("Primate costaud", ["Crépuscule, Corona, Caraïbes, portail 6", "Twilight Town, Corona, the Caribbean, gate 6"], ["Éclat vibrant, Pierre vibrante, Éclat ressourçant", "Wellspring Shard and Stone, Remembrance Shard"]),
          at("Pelleteur", ["Monstropolis, San Fransokyo", "Monstropolis, San Fransokyo"], ["Gemme vibrante, Pierre ressourçante, Gemme ressourçante", "Wellspring Gem, Remembrance Stone and Gem"]),
          at("Tendrombrelle", ["Corona, Arendelle, portail 7", "Corona, Arendelle, gate 7"], ["Éclat ressourçant, Pierre ressourçante, Pierre affamée", "Remembrance Shard and Stone, Hungry Stone"]),
          at("Gros duveteux", ["Corona, portail 7", "Corona, gate 7"], ["Pierre et Gemme hyalines, Pierre ressourçante ; empilé : Pierre ressourçante, Éclat affamé", "Lucid Stone and Gem, Remembrance Stone; stacked: Remembrance Stone, Hungry Shard"]),
          at("Fleurond", ["Corona, portail 7", "Corona, gate 7"], ["Éclat hyalin, Pierre hyaline", "Lucid Shard, Lucid Stone"]),
          at("Char du chaos", ["Corona, portail 6", "Corona, gate 6"], ["Gemme ressourçante, Pierre affamée", "Remembrance Gem, Hungry Stone"]),
          at("Cornu des neiges", ["Arendelle", "Arendelle"], ["Éclat glacial, Pierre glaciale", "Frost Shard, Frost Stone"]),
          at("Dragon de givre", ["Arendelle", "Arendelle"], ["Cristal glacial ; ailes : Pierre et Gemme glaciales ; queue : Pierre, Gemme et Cristal affamés", "Frost Crystal; wings: Frost Stone and Gem; tail: Hungry Stone, Gem and Crystal"]),
          at("Mouche à vapeur", ["Caraïbes, portail 10", "The Caribbean, gate 10"], ["Pierre hyaline, Gemme hyaline, Gemme ressourçante", "Lucid Stone and Gem, Remembrance Gem"]),
          at("Vilain marin", ["Caraïbes", "The Caribbean"], ["Varie avec la couleur : bleu glacial, rouge ardent, jaune grondant, multicolore apaisant", "Varies with colour: blue Frost, red Blazing, yellow Pulsing, multicoloured Soothing"]),
          at("Océanien lancier", ["Caraïbes, portail 10", "The Caribbean, gate 10"], ["Pierre, Gemme et Cristal apaisants", "Soothing Stone, Gem and Crystal"]),
          at("Forbandit", ["Caraïbes, portail 10", "The Caribbean, gate 10"], ["Cristal hyalin, Gemme ressourçante, Cristal ressourçant", "Lucid Crystal, Remembrance Gem and Crystal"]),
          at("Pneumaniaque", ["San Fransokyo, portails 4 et 12", "San Fransokyo, gates 4 and 12"], ["Pierre, Gemme et Cristal grondants", "Pulsing Stone, Gem and Crystal"]),
          at("Tour démoniaque", ["Portail 8", "Gate 8"], ["Cristal illusoire", "Illusory Crystal"]),
        ],
      },
      {
        id: "nescients",
        title: L("Les Nescients", "The Unversed"),
        intro: L(
          "Ils ne reviennent que dans un monde, Monstropolis, où ils remplacent les Sans-cœur comme troupe locale. Quatre espèces, toutes liées à Vanitas.",
          "They return in one world only, Monstropolis, where they replace the Heartless as local rank and file. Four species, all tied to Vanitas.",
        ),
        columns: [L("Nescient", "Unversed"), L("Monde", "World"), L("Ce qu'il faut savoir", "What to know")],
        rows: [
          at("Inondeur", ["Monstropolis", "Monstropolis"], ["L'équivalent de l'Ombre chez les Nescients : nombreux, faibles, et là pour remplir le terrain.", "The Unversed answer to the Shadow: numerous, weak, and there to fill the floor."]),
          at("Serpent à fleurs", ["Monstropolis", "Monstropolis"], ["Il projette du poison par des tuyaux et peut infliger la **Paralysie** — à traiter en priorité dans un groupe.", "It sprays poison through pipes and can inflict **Stun** — deal with it first in a group."]),
          at("Crapaud-tortue à pointes", ["Monstropolis", "Monstropolis"], ["Il gonfle et avale d'autres créatures avant de les recracher ; ses pointes punissent l'attaque au corps à corps.", "It swells and swallows other creatures before spitting them out; its spikes punish melee."]),
          at("Crapaud-tortue", ["Monstropolis", "Monstropolis"], ["La version sans pointes, à carapace souple : elle s'ouvre à la magie plus qu'aux coups.", "The spike-less version with a soft shell: magic opens it up better than blows do."]),
        ],
      },
      {
        id: "similis",
        title: L("Les Similis, et les autres", "The Nobodies, and the rest"),
        intro: L(
          "Ce que le bestiaire de cet épisode ne contient pas est aussi révélateur que ce qu'il contient.",
          "What this game's bestiary does not hold says as much as what it does.",
        ),
        columns: [L("Famille", "Family"), L("Présence dans le jeu", "Presence in the game"), L("Remarque", "Note")],
        rows: [
          at(
            "Les Similis",
            ["Aucune troupe commune", "No rank and file at all"],
            [
              "Pour la première fois de la série, aucun Simili ordinaire ne patrouille : l'Organisation XIII se bat en personne, et ses membres sont traités comme des boss, pas comme des ennemis de bestiaire.",
              "For the first time in the series, no ordinary Nobody patrols: Organisation XIII fights in person, and its members are handled as bosses, not bestiary entries.",
            ],
          ),
          at(
            "Les flans",
            ["Sept espèces, une par monde", "Seven species, one per world"],
            [
              "Ils figurent au bestiaire mais ne se combattent pas : ce sont les **Sept Flantastiques**, et chacun lâche son fruit selon le score obtenu à son mini-jeu.",
              "They appear in the bestiary but are not fought: they are the **Flantastic Seven**, and each drops its fruit according to the score you post in its mini-game.",
            ],
          ),
          at(
            "Les boss",
            ["Trente-deux affrontements au fil du cheminement", "Thirty-two fights across the walkthrough"],
            [
              "Titans, Gigas, membres de l'Organisation, plus **Obscurantis** au portail 14. Ils sont détaillés dans les sections du cheminement, encadré par encadré.",
              "Titans, Gigas, Organisation members, plus **Dark Inferno** at gate 14. They are detailed in the walkthrough's sections, fight by fight.",
            ],
          ),
        ],
      },
    ],
    rewards: {
      tierHeader: L("Objectif", "Objective"),
      rows: [
        { tier: L("Section Adversaires complétée", "Enemies section completed"), reward: L("Trophée **Connaître ses ennemis**", "The **Know Thine Enemy** trophy") },
        { tier: L("Mille ennemis vaincus", "A thousand enemies defeated"), reward: L("Trophée **Chevalier**", "The **Knight** trophy") },
        { tier: L("Trois mille", "Three thousand"), reward: L("Trophée **Fou**", "The **Bishop** trophy") },
        { tier: L("Cinq mille", "Five thousand"), reward: L("Trophée **Tour**", "The **Rook** trophy") },
      ],
      note: L(
        "Les compteurs d'ennemis vaincus montent surtout dans les **portails de combat**, qui alignent des vagues denses : c'est là que se règlent les trois trophées de comptage et l'essentiel de la récolte de matériaux.",
        "The defeat counters climb fastest in the **Battlegates**, which line up dense waves: that is where the three counting trophies and most of the material harvest get settled.",
      ),
    },
  },
  {
    id: "trophees",
    title: L("Les trophées", "Trophies"),
    tagline: L(
      "Les quarante-six trophées, et ce que demande le platine.",
      "The forty-six trophies, and what the platinum asks for.",
    ),
    entry: "jiminy-cricket",
    status: "done",
    intro: L(
      "Kingdom Hearts III compte **quarante-six trophées**, platine compris. C'est l'un des platines les plus abordables de la série : il ne demande ni difficulté imposée, ni partie à recommencer, ni chronomètre sur l'histoire. Tout se fait sur une seule sauvegarde, et presque tout après la fin.\n\nIls se rangent en quatre groupes. Les **trophées d'histoire** tombent seuls, un par monde. Les **trophées du Gummiphone** demandent de remplir ses cinq sections : emblèmes fétiches, adversaires, trésors, objets créés, records de jeu — ce sont eux qui structurent la complétion. Les **trophées de mini-jeux** exigent un score précis dans chacune des épreuves. Les **trophées de progression** comptent les ennemis vaincus, les photos prises, les navires coulés et les niveaux gagnés.\n\nTrois seulement demandent un effort réel : **Roi cachés** (les quatre-vingt-dix emblèmes fétiches), **Thermosphère** (le Schwarzgeist, donc un vaisseau Gummi à 200 de vitesse) et **Champion des neiges** (600 000 points à la luge alpine). Le reste vient avec une partie jouée complètement.\n\nÀ noter que le platine n'exige **pas** le mode Critique, ni la scène secrète, ni l'extension Re Mind — laquelle a sa propre liste, séparée.",
      "Kingdom Hearts III has **forty-six trophies**, platinum included. It is one of the series' more approachable platinums: no imposed difficulty, no second playthrough, no clock on the story. It all happens on one save, and nearly all of it after the ending.\n\nThey fall into four groups. The **story trophies** land on their own, one per world. The **Gummiphone trophies** ask you to fill its five sections: Lucky Emblems, Enemies, Treasures, Synthesis, Records — these are what structure completion. The **mini-game trophies** demand a set score in each trial. The **progress trophies** count enemies defeated, photographs taken, ships sunk and levels gained.\n\nOnly three ask for real effort: **Hidden Kings** (all ninety Lucky Emblems), **Thermosphere** (the Schwarzgeist, so a 200-Speed Gummi ship) and **Snow Champion** (600,000 points on the sled run). The rest comes with a game played through properly.\n\nWorth noting that the platinum does **not** require Critical mode, nor the secret ending, nor the Re Mind expansion — which has a list of its own.",
    ),
    tables: [
      {
        id: "histoire",
        title: L("Les trophées d'histoire", "Story trophies"),
        intro: L(
          "Ils tombent en jouant, sans détour. Aucun n'est manquable.",
          "They land as you play, with no detour. None is missable.",
        ),
        columns: [L("Trophée", "Trophy"), L("Rang", "Rank"), L("Condition", "Condition")],
        rows: [
          at("Un nouveau voyage", ["Bronze", "Bronze"], ["Commencez votre toute nouvelle aventure.", "Begin your brand-new adventure."]),
          at("Le choc des dieux", ["Bronze", "Bronze"], ["Aventurez-vous dans l'Olympe et bouclez le chapitre.", "Venture into Olympus and finish the chapter."]),
          at("Un vœu crépusculaire", ["Bronze", "Bronze"], ["Aventurez-vous dans la Cité du Crépuscule et bouclez le chapitre.", "Venture into Twilight Town and finish the chapter."]),
          at("Amis inséparables", ["Bronze", "Bronze"], ["Aventurez-vous dans le Coffre à jouets et bouclez le chapitre.", "Venture into Toy Box and finish the chapter."]),
          at("Jusqu'à la fin des temps", ["Bronze", "Bronze"], ["Aventurez-vous dans le Royaume de Corona et bouclez le chapitre.", "Venture into the Kingdom of Corona and finish the chapter."]),
          at("L'énergie du rire", ["Bronze", "Bronze"], ["Aventurez-vous à Monstropolis et bouclez le chapitre.", "Venture into Monstropolis and finish the chapter."]),
          at("Un geste d'amour", ["Bronze", "Bronze"], ["Aventurez-vous à Arendelle et bouclez le chapitre.", "Venture into Arendelle and finish the chapter."]),
          at("Le code des pirates", ["Bronze", "Bronze"], ["Aventurez-vous dans les Caraïbes et bouclez le chapitre.", "Venture into the Caribbean and finish the chapter."]),
          at("Faire la différence", ["Bronze", "Bronze"], ["Aventurez-vous à San Fransokyo et bouclez le chapitre.", "Venture into San Fransokyo and finish the chapter."]),
          at("Dans le cœur de Winnie", ["Bronze", "Bronze"], ["Aventurez-vous dans la Forêt des Rêves Bleus et bouclez le chapitre.", "Venture into the Hundred Acre Wood and finish the chapter."]),
          at("Les cœurs liés au sien", ["Bronze", "Bronze"], ["Rassemblez les sept gardiens de la lumière.", "Gather the seven guardians of light."]),
          at("Quoi qu'il advienne", ["Bronze", "Bronze"], ["Retrouvez Kairi.", "Find Kairi."]),
          at("Le combat ultime", ["Argent", "Silver"], ["Entamez l'affrontement final contre Maître Xehanort.", "Begin the final fight against Master Xehanort."]),
          at("Un autre chapitre se clôt", ["Or", "Gold"], ["Terminez le jeu et regardez la scène finale.", "Finish the game and watch the ending."]),
        ],
      },
      {
        id: "gummiphone",
        title: L("Les trophées du Gummiphone", "Gummiphone trophies"),
        intro: L(
          "Les cinq sections de l'appareil, plus les compteurs de photos. C'est ce groupe qui définit la complétion du jeu.",
          "The device's five sections, plus the photo counters. This group is what defines completion.",
        ),
        columns: [L("Trophée", "Trophy"), L("Rang", "Rank"), L("Condition", "Condition")],
        rows: [
          at("Roi cachés", ["Or", "Gold"], ["Complétez la section Emblèmes fétiches du Gummiphone — les quatre-vingt-dix.", "Complete the Gummiphone's Lucky Emblems section — all ninety."]),
          at("Connaître ses ennemis", ["Bronze", "Bronze"], ["Complétez la section Adversaires du Gummiphone.", "Complete the Gummiphone's Enemies section."]),
          at("Dans les moindres recoins", ["Argent", "Silver"], ["Complétez la section Trésors du Gummiphone.", "Complete the Gummiphone's Treasures section."]),
          at("Alchimiste", ["Argent", "Silver"], ["Complétez la section Objets créés du Gummiphone.", "Complete the Gummiphone's Synthesis section."]),
          at("Dans les annales", ["Bronze", "Bronze"], ["Complétez la section Records de jeu du Gummiphone.", "Complete the Gummiphone's Records section."]),
          at("Ouistiti !", ["Bronze", "Bronze"], ["Prenez votre première photo.", "Take your first photograph."]),
          at("Souvenirs durables", ["Bronze", "Bronze"], ["Collectionnez 50 photos.", "Collect 50 photographs."]),
        ],
      },
      {
        id: "combat",
        title: L("Les trophées de combat et de progression", "Combat and progress trophies"),
        columns: [L("Trophée", "Trophy"), L("Rang", "Rank"), L("Condition", "Condition")],
        rows: [
          at("Fou de manèges", ["Bronze", "Bronze"], ["Éliminez des ennemis avec une attraction pour la première fois.", "Defeat enemies with an attraction for the first time."]),
          at("Liés par le cœur", ["Bronze", "Bronze"], ["Éliminez des ennemis en utilisant un lien pour la première fois.", "Defeat enemies using a link for the first time."]),
          at("Grand mage", ["Bronze", "Bronze"], ["Lancez un sort de magie puissante pour la première fois.", "Cast a powerful magic spell for the first time."]),
          at("Chevalier", ["Bronze", "Bronze"], ["Éliminez 1 000 ennemis.", "Defeat 1,000 enemies."]),
          at("Fou", ["Bronze", "Bronze"], ["Éliminez 3 000 ennemis.", "Defeat 3,000 enemies."]),
          at("Tour", ["Argent", "Silver"], ["Éliminez 5 000 ennemis.", "Defeat 5,000 enemies."]),
          at("Au max", ["Argent", "Silver"], ["Faites monter Sora au niveau 99.", "Take Sora to level 99."]),
          at("Forgeron d'exception", ["Bronze", "Bronze"], ["Obtenez une Keyblade améliorée au maximum.", "Get a Keyblade upgraded to the maximum."]),
          at("Ultima Arma", ["Argent", "Silver"], ["Créez l'Ultima Arma — les sept Orichalque + sont requis.", "Create the Ultima Weapon — all seven Orichalcum+ required."]),
        ],
      },
      {
        id: "annexes",
        title: L("Les trophées des quêtes annexes", "Side-quest trophies"),
        intro: L(
          "Chacun correspond à une annexe de ce guide, et la page qui lui est consacrée en détaille la méthode.",
          "Each matches an annexe of this guide, and the page devoted to it details the method.",
        ),
        columns: [L("Trophée", "Trophy"), L("Rang", "Rank"), L("Condition", "Condition")],
        rows: [
          at("Flangorneur", ["Argent", "Silver"], ["Terminez toutes les missions des **Sept Flantastiques**.", "Complete every **Flantastic Seven** mission."]),
          at("Pilleur spatial", ["Bronze", "Bronze"], ["Utilisez le vaisseau Gummi pour obtenir 20 trésors uniques.", "Use the Gummi ship to obtain 20 unique treasures."]),
          at("Astronome", ["Bronze", "Bronze"], ["Trouvez et photographiez toutes les constellations depuis le vaisseau Gummi.", "Find and photograph every constellation from the Gummi ship."]),
          at("Thermosphère", ["Or", "Gold"], ["Détruisez le **Schwarzgeist** — un vaisseau à 200 de vitesse est exigé.", "Destroy the **Schwarzgeist** — a 200-Speed ship is required."]),
          at("Centurion", ["Bronze", "Bronze"], ["Marquez au moins 12 millions de points à Verum Rex : Beat of Lead.", "Score at least 12 million points in Verum Rex: Beat of Lead."]),
          at("Danseur festif", ["Bronze", "Bronze"], ["Marquez au moins 70 000 points à la Danse festive.", "Score at least 70,000 points in the Festival Dance."]),
          at("Champion des neiges", ["Bronze", "Bronze"], ["Marquez au moins 600 000 points à la luge alpine.", "Score at least 600,000 points on the sled run."]),
          at("Engrangeur", ["Bronze", "Bronze"], ["Obtenez le rang A sur les deux parcours du Lumirallye.", "Get rank A on both Flash Tracer courses."]),
          at("Vaisseau amiral", ["Argent", "Silver"], ["Renforcez le Léviathan au maximum.", "Upgrade the Leviathan to the maximum."]),
          at("Capitaine dans l'âme", ["Bronze", "Bronze"], ["Faites couler 200 navires ennemis dans les Caraïbes.", "Sink 200 enemy ships in the Caribbean."]),
          at("Corne d'abondance", ["Bronze", "Bronze"], ["Collectionnez chaque type d'ingrédient.", "Collect every type of ingredient."]),
          at("Repas complet", ["Bronze", "Bronze"], ["Obtenez votre premier « Excellent » en cuisinant.", "Get your first \"Excellent\" while cooking."]),
          at("Chef étoilé", ["Argent", "Silver"], ["Obtenez un « Excellent » pour chaque plat — les vingt-huit recettes.", "Get an \"Excellent\" on every dish — all twenty-eight recipes."]),
          at("As du jeu rétro", ["Bronze", "Bronze"], ["Atteignez un nouveau meilleur score dans un jeu du **Royaume Classique**.", "Set a new best score in one **Classic Kingdom** game."]),
          at("Maître du jeu rétro", ["Argent", "Silver"], ["Atteignez un nouveau meilleur score dans chacun des vingt-trois jeux.", "Set a new best score in each of the twenty-three games."]),
        ],
      },
      {
        id: "platine",
        title: L("Le platine", "The platinum"),
        columns: [L("Trophée", "Trophy"), L("Rang", "Rank"), L("Condition", "Condition")],
        rows: [
          at("Maître ès de KINGDOM HEARTS III", ["Platine", "Platinum"], ["Déverrouillez tous les autres trophées.", "Unlock every other trophy."]),
        ],
      },
    ],
    steps: [
      {
        id: "ordre",
        title: L("Dans quel ordre viser le platine", "What order to take the platinum in"),
        text: L(
          "La méthode la plus économe consiste à ne rien forcer pendant l'histoire, sauf deux choses : **prendre des photos** en permanence — les emblèmes fétiches et le compteur de cinquante clichés avancent ensemble — et **cuisiner au fur et à mesure** que les ingrédients arrivent, parce que les vingt-huit recettes demandent des allers-retours si on les garde pour la fin.\n\nUne fois le jeu terminé, l'ordre efficace est celui-ci. D'abord les **portails de combat**, qui règlent d'un coup les trois trophées de comptage d'ennemis, la récolte de matériaux pour la synthèse, et les treize rapports secrets. Ensuite l'**atelier des Mogs**, pour Alchimiste, Forgeron d'exception et l'Ultima Arma — l'ordre compte, puisque les portails fournissent les matériaux.\n\nViennent alors les **mini-jeux**, qui se travaillent l'un après l'autre sans dépendre de rien, et le **vaisseau Gummi**, dont les trésors améliorent le vaisseau et rendent le Schwarzgeist abordable. Les **emblèmes fétiches** se terminent en dernier, parce qu'ils obligent à retraverser les neuf mondes : autant le faire quand plus rien d'autre n'y attend.\n\nLe niveau 99 tombe seul en chemin, les portails donnant énormément d'expérience. Il n'y a donc aucune session de montée en niveau à prévoir.",
          "The most economical method is to force nothing during the story, except two things: **take photographs** constantly — Lucky Emblems and the fifty-photo counter advance together — and **cook as ingredients arrive**, because the twenty-eight recipes mean backtracking if you save them for the end.\n\nOnce the game is finished, the efficient order is this. First the **Battlegates**, which settle the three enemy-count trophies, the material harvest for synthesis, and the thirteen Secret Reports in one go. Then the **moogle workshop**, for Alchemist, Master Smith and the Ultima Weapon — order matters, since the gates supply the materials.\n\nThen come the **mini-games**, which can be worked one after another without depending on anything, and the **Gummi ship**, whose treasures upgrade the ship and make the Schwarzgeist manageable. The **Lucky Emblems** finish last, because they mean crossing all nine worlds again: better done when nothing else waits there.\n\nLevel 99 lands on its own along the way, the gates giving a great deal of experience. So no levelling session needs planning.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Groupe", "Group"),
      rows: [
        { tier: L("Histoire", "Story"), reward: L("Quatorze trophées, tous automatiques", "Fourteen trophies, all automatic") },
        { tier: L("Gummiphone", "Gummiphone"), reward: L("Sept trophées — le cœur de la complétion", "Seven trophies — the heart of completion") },
        { tier: L("Combat et progression", "Combat and progress"), reward: L("Neuf trophées, réglés par les portails de combat", "Nine trophies, settled by the Battlegates") },
        { tier: L("Quêtes annexes", "Side quests"), reward: L("Quinze trophées, un par annexe de ce guide", "Fifteen trophies, one per annexe of this guide") },
        { tier: L("Platine", "Platinum"), reward: L("**Maître ès de KINGDOM HEARTS III**", "**Kingdom Hearts III Master**") },
      ],
      note: L(
        "Le platine ne demande ni le mode **Critique**, ni la **scène secrète**, ni l'extension **Re Mind**, qui possède sa propre liste de trophées.",
        "The platinum requires neither **Critical** mode, nor the **secret ending**, nor the **Re Mind** expansion, which has a trophy list of its own.",
      ),
    },
  },
  {
    id: "scene-secrete",
    title: L("La scène secrète", "The secret ending"),
    tagline: L(
      "Les emblèmes fétiches par difficulté, et ce que la scène annonce.",
      "The Lucky Emblems by difficulty, and what the scene announces.",
    ),
    entry: "sora",
    status: "done",
    intro: L(
      "Comme dans chaque épisode depuis le premier, Kingdom Hearts III cache une scène supplémentaire après son épilogue, et cette scène **pose les bases de la suite de la série**. Elle n'est pas un bonus décoratif : elle introduit un lieu et une situation dont dépend tout ce qui vient ensuite.\n\nSa condition est unique et tient en une phrase : le nombre d'**emblèmes fétiches** photographiés, avec un seuil qui baisse à mesure que la difficulté monte. En **Débutant**, il faut les quatre-vingt-dix ; en **Standard**, soixante ; en **Expert**, trente. En **Critique**, ajouté après la sortie, terminer le jeu suffit — aucun emblème n'est exigé.\n\nLa logique de la série est donc inversée par rapport aux épisodes précédents : ce n'est plus le taux de complétion du Carnet qui compte, mais un unique compteur, et le jeu récompense le joueur qui accepte la difficulté plutôt que celui qui fouille.\n\nRien n'est définitif. Si le seuil n'était pas atteint au moment de finir, il suffit de revenir compléter la collecte et de recharger la sauvegarde de fin : la scène se déclenche alors normalement. Elle se revoit ensuite quand on veut, depuis l'option **Théâtre** du menu principal.",
      "As in every episode since the first, Kingdom Hearts III hides an extra scene after its epilogue, and that scene **lays the groundwork for the rest of the series**. It is not a decorative bonus: it introduces a place and a situation on which everything that follows depends.\n\nIts condition is single and fits in a sentence: the number of **Lucky Emblems** photographed, with a threshold that falls as difficulty rises. On **Beginner** you need all ninety; on **Standard**, sixty; on **Proud**, thirty. On **Critical**, added after release, finishing the game is enough — no emblems required.\n\nThe series' logic is therefore inverted from earlier games: it is no longer the Journal's completion rate that counts but a single counter, and the game rewards the player who takes on the difficulty rather than the one who searches.\n\nNothing is final. If the threshold was not met when you finished, simply come back, complete the collection and reload the ending save: the scene then plays normally. It can be rewatched at will afterwards, from the main menu's **Theatre** option.",
    ),
    tables: [
      {
        id: "conditions",
        title: L("Les conditions par difficulté", "Conditions by difficulty"),
        intro: L(
          "Le seuil est vérifié au moment de charger la sauvegarde de fin, et non pendant la partie : il peut donc être atteint après coup.",
          "The threshold is checked when the ending save is loaded, not during the playthrough: it can therefore be met after the fact.",
        ),
        columns: [L("Difficulté", "Difficulty"), L("Emblèmes exigés", "Emblems required"), L("Ce que cela implique", "What that means")],
        rows: [
          at("Débutant", ["Les 90", "All 90"], ["La collecte complète, donc une partie de complétion. C'est le mode où la scène coûte le plus cher.", "The full collection, so a completionist playthrough. This is the mode where the scene costs most."]),
          at("Standard", ["60", "60"], ["Environ deux tiers. Atteignable en fouillant sérieusement au fil des mondes, sans guide.", "About two thirds. Reachable by searching seriously world by world, without a guide."]),
          at("Expert", ["30", "30"], ["Un tiers. Ces trente-là se ramassent presque naturellement en explorant.", "A third. Those thirty come almost naturally while exploring."]),
          at("Critique", ["Aucun", "None"], ["Terminer le jeu suffit. Le mode le plus rapide vers la scène, pour un joueur qui accepte le combat exigeant.", "Finishing the game is enough. The fastest route to the scene, for a player who takes on the demanding combat."]),
        ],
      },
    ],
    steps: [
      {
        id: "choisir",
        title: L("Choisir sa route vers la scène", "Choosing your route to the scene"),
        text: L(
          "Trois profils, trois routes. Un joueur qui veut **voir la scène sans y consacrer une semaine** a intérêt à jouer en Expert : trente emblèmes tombent en explorant normalement, sans détour ni carte.\n\nUn joueur qui **vise la complétion** photographiera les quatre-vingt-dix de toute façon, quelle que soit la difficulté — la scène devient alors une conséquence, pas un objectif. C'est aussi la route qui donne l'**Orichalque +** du palier 80 et la **Barrette de Mickey** du palier 90 ; à ce titre, elle se justifie même sans la scène.\n\nUn joueur qui **cherche le défi** prendra le mode Critique, où la scène ne demande rien d'autre que de finir. C'est le seul cas où la collecte et la scène secrète sont entièrement décorrélées.\n\nDernier point pratique : la difficulté se choisit au début de la partie et ne se change plus. Si la scène compte, autant y penser à ce moment-là plutôt qu'après quarante heures de jeu.",
          "Three profiles, three routes. A player who wants to **see the scene without spending a week on it** is better off on Proud: thirty emblems fall while exploring normally, with no detour and no map.\n\nA player **going for completion** will photograph all ninety anyway, whatever the difficulty — the scene then becomes a consequence, not a goal. That route also gives the tier-80 **Orichalcum+** and the tier-90 **Mickey Clasp**; on that basis it justifies itself even without the scene.\n\nA player **after the challenge** will take Critical, where the scene asks for nothing but finishing. That is the only case where the collection and the secret ending are fully decoupled.\n\nOne last practical point: difficulty is chosen at the start of a playthrough and cannot be changed. If the scene matters, it is worth thinking about then rather than forty hours in.",
        ),
      },
      {
        id: "contenu",
        title: L("Ce que la scène annonce", "What the scene announces"),
        text: L(
          "Cette section parle de l'après. Elle ne raconte pas la scène plan par plan, mais elle en dit assez pour situer ce qu'elle ouvre — un joueur qui veut la découvrir intacte peut passer directement à la suite.\n\nLa scène ne conclut rien : elle **déplace le récit**. Elle quitte les mondes connus de la série pour une ville qui n'appartient à aucun d'eux, filmée dans un registre volontairement réaliste, à l'opposé des décors Disney. Ce contraste est le propos : la série signale qu'elle change de terrain.\n\nElle reprend aussi des éléments semés ailleurs dans le jeu — dans **Verum Rex**, le jeu d'arcade du Coffre à jouets, et dans plusieurs des **rapports secrets**, en particulier les trois *Observations* signées d'un auteur non identifié. Lus ensemble, ces trois textes et la scène forment un même dispositif : ils décrivent la même chose depuis deux côtés.\n\nC'est de là que part la suite de la série, et c'est pourquoi la scène a autant occupé les joueurs depuis la sortie du jeu. L'extension **Re Mind** revient dessus et en prolonge certaines pistes, sans les refermer.",
          "This section is about what comes after. It does not recount the scene shot by shot, but it says enough to place what it opens — a player who wants to find it intact can skip ahead.\n\nThe scene concludes nothing: it **moves the story**. It leaves the series' familiar worlds for a city belonging to none of them, filmed in a deliberately realistic register, at the opposite end from the Disney sets. That contrast is the point: the series is signalling a change of ground.\n\nIt also picks up threads sown elsewhere in the game — in **Verum Rex**, Toy Box's arcade game, and in several of the **Secret Reports**, particularly the three *Observations* by an unidentified author. Read together, those three texts and the scene form one device: they describe the same thing from two sides.\n\nThat is where the rest of the series starts, and it is why the scene has occupied players so much since release. The **Re Mind** expansion returns to it and extends some of its threads, without closing them.",
        ),
      },
    ],
    rewards: {
      tierHeader: L("Difficulté", "Difficulty"),
      rows: [
        { tier: L("Débutant", "Beginner"), reward: L("Les 90 emblèmes fétiches", "All 90 Lucky Emblems") },
        { tier: L("Standard", "Standard"), reward: L("60 emblèmes fétiches", "60 Lucky Emblems") },
        { tier: L("Expert", "Proud"), reward: L("30 emblèmes fétiches", "30 Lucky Emblems") },
        { tier: L("Critique", "Critical"), reward: L("Terminer le jeu, sans condition d'emblèmes", "Finish the game, with no emblem condition") },
      ],
      note: L(
        "La scène se déclenche après l'épilogue et se revoit ensuite depuis l'option **Théâtre** du menu principal. Elle n'est requise ni pour le platine, ni pour l'extension Re Mind.",
        "The scene plays after the epilogue and can be rewatched from the main menu's **Theatre** option. It is required neither for the platinum nor for the Re Mind expansion.",
      ),
    },
  },
];
