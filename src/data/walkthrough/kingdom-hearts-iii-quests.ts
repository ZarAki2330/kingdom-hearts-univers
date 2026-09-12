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
          "La scène secrète n'est pas liée au nombre d'heures ni au taux de complétion : elle dépend uniquement du nombre d'emblèmes photographiés, et le seuil change avec la difficulté. En **Débutant** il faut les quatre-vingt-dix ; en **Standard**, soixante ; en **Vaillant**, trente. Le mode **Critique**, ajouté après la sortie, s'aligne sur le seuil le plus bas.\n\nLa logique est celle des jeux précédents inversée : plus on joue difficile, moins le jeu exige de collecte. Un joueur qui vise la scène sans y passer une semaine a donc intérêt à jouer en Vaillant, où trente emblèmes se ramassent presque naturellement en explorant.\n\nLa scène se déclenche après le générique, une fois la sauvegarde de fin chargée. Si le seuil n'était pas atteint au moment de finir, il suffit de revenir compléter la collecte et de rejouer la fin : la scène s'affiche alors normalement.",
          "The secret ending is tied neither to playtime nor to completion rate: it depends only on how many emblems you have photographed, and the threshold moves with difficulty. On **Beginner** you need all ninety; on **Standard**, sixty; on **Proud**, thirty. **Critical** mode, added after release, uses the lowest threshold.\n\nThe logic inverts the earlier games': the harder you play, the less collecting the game asks for. A player who wants the scene without spending a week on it is therefore better off on Proud, where thirty emblems come almost naturally while exploring.\n\nThe scene plays after the credits, once the ending save is loaded. If the threshold was not met when you finished, simply come back, complete the collection and replay the ending: the scene then shows normally.",
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
      "Les figurines cachées dans tous les mondes, et ce qu'elles rapportent.",
      "The figurines hidden across every world, and what they pay out.",
    ),
    entry: "hercules",
    status: "todo",
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
      "La luge d'Arendelle, le festival de Corona, les manèges et le reste.",
      "Arendelle's sled run, Corona's festival, the rides and the rest.",
    ),
    entry: "sora",
    status: "todo",
  },
  {
    id: "vaisseau-gummi",
    title: L("Le vaisseau Gummi", "The Gummi ship"),
    tagline: L(
      "L'espace ouvert, les trésors, les constellations et les trois Sans-cœur géants.",
      "The open space, the treasures, the constellations and the three giant Heartless.",
    ),
    entry: "chip-and-dale",
    status: "todo",
  },
  {
    id: "rapports-secrets",
    title: L("Les rapports secrets", "The Secret Reports"),
    tagline: L(
      "Les carnets qui expliquent ce que l'histoire garde pour elle.",
      "The notebooks that explain what the story keeps back.",
    ),
    entry: "ansem-the-wise",
    status: "todo",
  },
  {
    id: "inventaire",
    title: L("L'inventaire", "The inventory"),
    tagline: L(
      "Keyblades, armes des compagnons, accessoires et objets-clés.",
      "Keyblades, party weapons, accessories and key items.",
    ),
    entry: "kingdom-key",
    status: "todo",
  },
  {
    id: "bestiaire",
    title: L("Le bestiaire", "The bestiary"),
    tagline: L(
      "Les Sans-cœur, les Similis et les Nescients de Kingdom Hearts III.",
      "Kingdom Hearts III's Heartless, Nobodies and Unversed.",
    ),
    entry: "heartless",
    status: "todo",
  },
  {
    id: "trophees",
    title: L("Les trophées", "Trophies"),
    tagline: L(
      "La liste complète, et ce que demande le platine.",
      "The complete list, and what the platinum asks for.",
    ),
    entry: "jiminy-cricket",
    status: "todo",
  },
  {
    id: "scene-secrete",
    title: L("La scène secrète", "The secret ending"),
    tagline: L(
      "Les emblèmes fétiches par difficulté, et ce que la scène annonce.",
      "The Lucky Emblems by difficulty, and what the scene announces.",
    ),
    entry: "sora",
    status: "todo",
  },
];
