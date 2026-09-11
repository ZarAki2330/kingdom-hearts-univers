import type { LocalizedText } from "@/data/games";
import type { WalkPlace, Walkthrough } from "./types";
import { quests } from "./kingdom-hearts-ii-quests";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/** Une ligne d'emplacement : monde ou zone, ce qu'on y trouve, où, et ce qu'il faut avoir. */
const at = (world: string, what: [string, string], where: [string, string], requires?: [string, string]): WalkPlace => ({
  world: L(world, world),
  what: L(what[0], what[1]),
  where: L(where[0], where[1]),
  requires: requires ? L(requires[0], requires[1]) : undefined,
});

/**
 * Kingdom Hearts II Final Mix. Le découpage suit celui d'une partie normale : le prologue
 * de Roxas, puis les deux tours de mondes que fait Sora, chacun rouvrant les mêmes portes
 * sur une histoire différente. C'est la structure qu'emploient les guides francophones, et
 * c'est aussi celle du jeu : un monde visité une fois n'est jamais fini.
 *
 * Les niveaux de combat indiqués sont ceux recommandés à l'arrivée dans la section.
 */
export const walkthrough: Walkthrough = {
  game: "kingdom-hearts-ii",
  version: L(
    "Kingdom Hearts II Final Mix, tel qu'il se joue aujourd'hui dans Kingdom Hearts HD 1.5 + 2.5 ReMIX.",
    "Kingdom Hearts II Final Mix, as it is played today in Kingdom Hearts HD 1.5 + 2.5 ReMIX.",
  ),
  intro: L(
    "Cette soluce couvre Kingdom Hearts II Final Mix du début à la fin, dans l'ordre d'une partie normale : le prologue de Roxas, puis les deux tours de mondes de Sora.\n\nElle est écrite pour Final Mix, la seule version disponible aujourd'hui. Ce que cette version ajoute — les Sans-cœur d'Or, les Mushroom XIII, les répliques de l'Organisation, la difficulté Critique — est signalé à chaque fois.\n\nUn mot sur la difficulté avant de commencer, parce que le choix pèse plus lourd qu'en Kingdom Hearts premier du nom : **Critique** donne d'emblée 50 points de compétence et une poignée de capacités décisives, et c'est le mode que recommandent la plupart des joueurs chevronnés malgré son nom — on encaisse deux fois plus, mais on frappe assez fort pour que les combats restent courts. Normal reste le bon choix pour découvrir l'histoire sans friction.\n\nLes sections se lisent dans l'ordre. Les mondes facultatifs — Atlantica, la Forêt des Rêves Bleus — et tout ce qui relève du 100 % sont traités à part, dans les guides et annexes.",
    "This guide covers Kingdom Hearts II Final Mix from beginning to end, in the order of a normal playthrough: Roxas's prologue, then Sora's two rounds of worlds.\n\nIt is written for Final Mix, the only version available today. Everything that version adds — the Absent Silhouettes, the Mushroom XIII, the Organisation data replicas, the Critical difficulty — is flagged as it comes.\n\nA word on difficulty before you start, because the choice weighs more here than in the first Kingdom Hearts: **Critical** hands you 50 AP and a handful of decisive abilities straight away, and it is the mode most experienced players recommend despite its name — you take twice the damage, but you hit hard enough that fights stay short. Normal remains the right choice to discover the story without friction.\n\nSections follow playthrough order. The optional worlds — Atlantica, the Hundred Acre Wood — and everything that belongs to 100% are handled separately, in the guides and reference pages.",
  ),
  sections: [
    {
      id: "prologue",
      title: L("Prologue", "Prologue"),
      subtitle: L("Les six derniers jours de Roxas", "Roxas's last six days"),
      world: "twilight-town",
      status: "done",
      level: "1 à 5",
      intro: L(
        "Kingdom Hearts II ne commence pas par Sora. Il commence par **Roxas**, un garçon qui passe ses vacances d'été à la Cité du Crépuscule avec trois amis, et dont les journées se détraquent une à une.\n\nC'est le plus long prologue de la série — comptez cinq à six heures — et il déroute souvent, parce qu'on y joue un personnage qu'on ne connaît pas, dans un monde qu'on n'a jamais vu, sans savoir où tout cela mène. Il vaut pourtant la peine d'être joué attentivement : c'est là que le jeu enseigne les **commandes réaction**, sa mécanique centrale, et les statistiques que Roxas accumule pendant ces six jours sont **transmises à Sora** ensuite.\n\nDeux choses à ne pas rater, donc : le choix d'arme du premier jour, qui donne un point définitif, et celui du troisième jour, au Palier de l'Éveil, qui décide de l'ordre dans lequel Sora apprendra ses capacités pour toute la partie.",
        "Kingdom Hearts II does not begin with Sora. It begins with **Roxas**, a boy spending his summer holidays in Twilight Town with three friends, whose days come apart one after another.\n\nIt is the longest prologue in the series — five to six hours — and it often throws players, because you control a character you do not know, in a world you have never seen, with no idea where any of it leads. It is worth playing attentively all the same: this is where the game teaches **Reaction Commands**, its central mechanic, and the stats Roxas builds over these six days are **carried over to Sora** afterwards.\n\nTwo things not to miss, then: the first day's weapon choice, which grants a permanent point, and the third day's choice at the Station of Awakening, which sets the order in which Sora learns his abilities for the entire run.",
      ),
      steps: [
        {
          id: "jour-1",
          title: L("Premier jour — le voleur", "Day one — the thief"),
          text: L(
            "La ville accuse Roxas et ses amis d'un vol qu'ils n'ont pas commis. Les trois premières tâches sont un tutoriel déguisé : approchez-vous de l'armurerie, parlez à la joaillière avec **Triangle**, puis verrouillez le chat avec **R1**. Rien de tout cela ne peut être raté.\n\nÀ la Place des Fêtes, Seifer vous provoque, et le jeu vous fait choisir une arme. **Ce choix donne un point définitif, et il passera à Sora** :\n\n- Le bâton qui ressemble à un bourdon : **+1 en magie**\n- Le bâton à garde : **+1 en défense**\n- Le bâton de Struggle : **+1 en attaque**\n\nLe combat qui suit se gagne en suivant les indications. Ensuite, une créature blanche vole l'appareil photo : poursuivez-la jusqu'au manoir. Le début du combat est perdu d'avance — c'est voulu — jusqu'à ce qu'une clé apparaisse dans la main de Roxas. La commande réaction **Glissade** l'étourdit quelques secondes : servez-vous-en autant que nécessaire.",
            "The town accuses Roxas and his friends of a theft they did not commit. The first three errands are a disguised tutorial: walk up to the armour shop, talk to the jeweller with **Triangle**, then lock on to the cat with **R1**. None of it can be failed.\n\nAt the Sandlot, Seifer picks a fight, and the game has you choose a weapon. **This choice grants a permanent point, and it carries over to Sora**:\n\n- The bat that looks like a bumblebee: **+1 Magic**\n- The bat with a guard: **+1 Defense**\n- The Struggle bat: **+1 Strength**\n\nThe fight that follows is won by following the prompts. Afterwards a white creature steals the camera: chase it to the mansion. The start of that fight is unwinnable — deliberately — until a key appears in Roxas's hand. The Reaction Command **Slide** stuns it for a few seconds: use it as often as you need.",
          ),
        },
        {
          id: "jour-2",
          title: L("Deuxième jour — les petits boulots", "Day two — the part-time jobs"),
          text: L(
            "La bande veut aller à la plage, et il faut la financer. Deux tableaux d'annonces, l'un au centre-ville et l'autre dans la rue de la gare, proposent six travaux.\n\nLa journée se termine automatiquement à **2 000 munnies**, mais ce n'est pas le seuil qui compte : **1 200 munnies donnent 2 points de compétence** et 800 en donnent un. Ces points partent avec Sora, et en début de partie ils valent plus que l'argent.\n\nLa tournée du facteur est de loin le meilleur rapport temps-argent : une vingtaine de secondes pour 50 munnies. Enchaînez-la plutôt que de vous acharner sur les autres.\n\nUne fois le compte atteint, rejoignez Hayner à la gare — et regardez l'argent se faire voler par un inconnu en manteau noir.",
            "The gang wants a day at the beach, and it has to be paid for. Two job boards, one in the Tram Common and one on Station Heights, offer six jobs.\n\nThe day ends automatically at **2,000 munny**, but that threshold is not the point: **1,200 munny grants 2 AP** and 800 grants one. Those points leave with Sora, and early on they are worth more than the money.\n\nThe mail delivery is by far the best time-to-money ratio: about twenty seconds for 50 munny. Repeat it rather than grinding the others.\n\nOnce you have enough, meet Hayner at the station — and watch the money get stolen by a stranger in a black coat.",
          ),
        },
        {
          id: "jour-3",
          title: L("Troisième jour — le Palier de l'Éveil", "Day three — the Station of Awakening"),
          text: L(
            "Après une rencontre avec une inconnue, la Place des Fêtes est attaquée et Roxas se retrouve au **Palier de l'Éveil**. Trois armes s'y présentent : l'Épée des Rêves, le Sceptre des Rêves, la Targe des Rêves.\n\n**C'est le choix le plus important du prologue.** Il ne donne pas de bonus immédiat : il décide de l'ordre dans lequel Sora apprendra ses capacités pendant toute la partie. L'épée avance les capacités offensives, la targe les défensives — dont la **Parade**, que beaucoup considèrent comme la meilleure capacité du jeu — et le sceptre les soutiens magiques.\n\nArmé de la Chaîne Royale, éliminez les trois Reflets. Vous obtenez **Pirouette** : équipez-la immédiatement dans le menu des compétences, c'est l'esquive du jeu.\n\nEn mode **Critique**, l'aventure démarre avec 50 points de compétence et un lot de capacités — Booster Réaction, Finish Plus, Attraction, Chance ×2, Concentration et Zéro XP. Prenez la Potion dans le coffre avant d'avancer, et n'hésitez pas à refaire le parcours pour quelques niveaux.",
            "After a meeting with a stranger, the Sandlot is attacked and Roxas finds himself at the **Station of Awakening**. Three weapons appear: the Dream Sword, the Dream Rod, the Dream Shield.\n\n**This is the prologue's most important choice.** It grants no immediate bonus: it sets the order in which Sora learns his abilities for the whole run. The sword brings offensive abilities forward, the shield the defensive ones — including **Guard**, which many consider the game's best ability — and the rod the magical supports.\n\nArmed with the Kingdom Key, wipe out the three Dusks. You gain **Dodge Roll**: equip it right away in the abilities menu, it is the game's evade.\n\nOn **Critical**, the adventure starts with 50 AP and a set of abilities — Reaction Boost, Finishing Plus, Draw, Lucky Lucky ×2, Combo Boost and EXP Zero. Take the Potion from the chest before moving on, and feel free to replay the route for a few levels.",
          ),
        },
        {
          id: "jour-4",
          title: L("Quatrième jour — le tournoi de Struggle", "Day four — the Struggle tournament"),
          text: L(
            "Équipez la **Parade** fraîchement obtenue et placez une Potion en raccourci (**L1**) avant de parler à l'arbitre.\n\nLes trois matchs ne posent pas de difficulté : Hayner lâche beaucoup d'orbes quand il encaisse un combo complet, Vivi est rapide mais inoffensif — attention seulement à sa tornade quand sa vie est basse — et Setzer, le champion, parle beaucoup plus qu'il ne frappe.\n\nEntre Vivi et Setzer, le tournoi s'interrompt : le Vivi affronté était une créature blanche, et sa disparition amène **Axel**, qui sort ses armes dans la foulée.\n\nLa victoire donne la **Ceinture de champion** et le **Trophée de Struggle** ; une défaite ne donne qu'une médaille, mais ne bloque rien.",
            "Equip the **Guard** you just earned and put a Potion on a shortcut (**L1**) before talking to the referee.\n\nThe three matches are not difficult: Hayner drops plenty of orbs when he takes a full combo, Vivi is quick but harmless — only watch for his tornado when his HP is low — and Setzer, the champion, talks far more than he hits.\n\nBetween Vivi and Setzer the tournament is interrupted: the Vivi you fought was a white creature, and its disappearance brings **Axel**, who draws his weapons immediately.\n\nWinning gives the **Champion Belt** and the **Struggle Trophy**; losing only gives a medal, but blocks nothing.",
          ),
        },
        {
          id: "jour-5",
          title: L("Cinquième jour — les sept mystères", "Day five — the seven wonders"),
          text: L(
            "La rédaction de rentrée porte sur les sept mystères de la ville. Avant de vous lancer : en reprenant le train **immédiatement** après l'explication du premier mystère, trois coffres s'ouvrent à la gare du centre — deux Potions et une Potion+.\n\nDescendez ensuite vers la Terrasse du Couchant. Sautez sur le **tramway en mouvement** pour atteindre un coffre au sommet d'une tour : un **Anneau de compétences**. Laissez-vous tomber sur le flanc sud du bâtiment pour une Potion, continuez jusqu'à la rivière pour une Potion+ après le petit pont, et montez les escaliers à gauche du coffre pour une dernière Potion.\n\nLes mystères s'enchaînent ensuite, et le septième — le manoir abandonné — n'est accessible qu'une fois les autres résolus.",
            "The back-to-school essay is about the town's seven wonders. Before you start: taking the train **immediately** after the first wonder is explained opens three chests at Central Station — two Potions and a Hi-Potion.\n\nThen head down to Sunset Terrace. Jump onto the **moving tram** to reach a chest on top of a tower: an **AP Boost**. Drop down the south side of that building for a Potion, carry on to the river for a Hi-Potion past the small bridge, and climb the stairs left of the chest for one last Potion.\n\nThe wonders then follow one another, and the seventh — the abandoned mansion — only opens once the others are solved.",
          ),
        },
        {
          id: "jour-6",
          title: L("Sixième jour — le manoir", "Day six — the mansion"),
          text: L(
            "Axel attaque au repaire. Éliminez ses sbires jusqu'à ce qu'une voix vous appelle au manoir, et frayez-vous un chemin jusque là.\n\nÀ l'intérieur, le fond de la pièce près de la baie vitrée cache une **Potion+**. La porte gardée par une armure, près de l'escalier, mène à la salle à manger : une **Potion** et un **Bandana elfique**. Ressortez, montez l'escalier de gauche (un coffre avec une Potion en haut), et prenez à gauche jusqu'à la **salle blanche** — vous y recevez les dessins de Naminé et la **carte du manoir**.\n\nExplorez l'étage jusqu'à la salle opposée sans oublier la Potion du coffre. Dans la bibliothèque, Roxas complète le dessin et ouvre un passage secret : descendez, prenez la **Potion+** du coffre, avancez, et **sauvegardez avant la zone suivante** — des Similis y attendent, puis Axel, pour de bon cette fois.\n\nAprès le combat, un dernier coffre (Potion+) et une porte. Les vacances de Roxas sont finies.",
            "Axel attacks at the Usual Spot. Clear his minions until a voice calls you to the mansion, then fight your way there.\n\nInside, the far end of the room by the bay window hides a **Hi-Potion**. The door guarded by a suit of armour, near the staircase, leads to the dining room: a **Potion** and an **Elven Bandana**. Come back out, climb the left staircase (a chest with a Potion at the top), and go left to the **white room** — there you receive Naminé's drawings and the **mansion map**.\n\nExplore the upper floor to the opposite room, taking the chest's Potion on the way. In the library, Roxas completes the drawing and opens a hidden passage: go down, take the chest's **Hi-Potion**, move forward, and **save before the next area** — Nobodies wait there, then Axel, for real this time.\n\nAfter the fight, one last chest (Hi-Potion) and a door. Roxas's holidays are over.",
          ),
        },
      ],
      tables: [
        {
          id: "boulots",
          title: L("Les six petits boulots", "The six part-time jobs"),
          intro: L(
            "Le seuil utile n'est pas 2 000 munnies mais **1 200**, qui donnent 2 points de compétence. La tournée du facteur est le meilleur rapport temps-argent du lot : enchaînez-la.",
            "The useful threshold is not 2,000 munny but **1,200**, which grants 2 AP. The mail delivery has the best time-to-money ratio of the lot: repeat it.",
          ),
          columns: [L("Travail", "Job"), L("Ce qu'il demande", "What it asks"), L("Ce qu'il vaut", "What it is worth")],
          rows: [
            at("Tournée du facteur", ["Activer la commande réaction au bon moment, en roulant.", "Hitting the Reaction Command at the right moment, while riding."], ["50 munnies en moins de vingt secondes. Le meilleur du lot, et de loin.", "50 munny in under twenty seconds. The best of the lot, by far."]),
            at("Collage d'affiches", ["Poser toutes les affiches en suivant un trajet efficace.", "Putting up every poster along an efficient route."], ["100 munnies, en moins d'une minute avec un bon trajet. Le second meilleur choix.", "100 munny, in under a minute with a good route. The second-best choice."]),
            at("Monte-charge", ["Marteler le bouton, et ne pas rater le sac quand il est en l'air.", "Hammering the button, and not missing the bag while it is airborne."], ["Correct, et sans piège.", "Decent, and with no catch."]),
            at("Tour d'adresse", ["Garder la balle en l'air ; verrouiller avec R1 aide à la suivre.", "Keeping the ball up; locking on with R1 helps track it."], ["Pour la même somme, trois tournées du facteur. À éviter.", "For the same money, three mail runs. Skip it."]),
            at("Déblayage", ["Détruire tous les blocs de déchets en un minimum de coups, en les regroupant.", "Destroying every junk block in as few hits as possible, by pushing them together."], ["Long. Rentable seulement si on prend le temps de tout regrouper.", "Slow. Only worth it if you take the time to group everything."]),
            at("Extermination", ["Éliminer des groupes d'abeilles.", "Wiping out swarms of bees."], ["Peu payé et agaçant. Le seul à vraiment éviter.", "Badly paid and irritating. The one job to genuinely avoid."]),
          ],
        },
        {
          id: "mysteres",
          title: L("Les sept mystères de la Cité du Crépuscule", "Twilight Town's seven wonders"),
          intro: L(
            "Les cinq premiers se résolvent dans n'importe quel ordre. Le train fantôme ne se déclenche qu'une fois les quatre autres découverts, et le manoir vient en dernier.",
            "The first five can be solved in any order. The ghost train only triggers once the other four are found, and the mansion comes last.",
          ),
          columns: [L("Mystère", "Wonder"), L("Où", "Where"), L("Ce qu'il faut faire", "What to do")],
          rows: [
            at("Le perce-muraille", ["Le mur de briques rouges, au nord-est de la carte.", "The red brick wall, north-east on the map."], ["Esquiver les balles projetées du mur, puis appuyer sur Triangle une fois devant.", "Dodge the balls the wall throws, then press Triangle once in front of it."]),
            at("Le gémissement du tunnel", ["Le tunnel, au nord.", "The tunnel, to the north."], ["Vivi s'y multiplie en copies à 1 point de vie : toutes les éliminer.", "Vivi splits into copies with 1 HP each: kill them all."]),
            at("Le sosie", ["La fontaine, au sud-ouest de la zone.", "The fountain, south-west of the area."], ["Examiner la fontaine, puis battre son propre double.", "Examine the fountain, then beat your own double."]),
            at("Le sac vivant", ["Au sommet de la Colline du Couchant, entre trois poubelles.", "At the top of Sunset Hill, between three bins."], ["Examiner le sac pour grimper dessus, puis enchaîner les commandes réaction jusqu'à épuisement de la jauge.", "Examine the bag to climb on, then chain Reaction Commands until the gauge empties."]),
            at("Le train fantôme", ["La Colline du Couchant, une fois les quatre autres résolus.", "Sunset Hill, once the other four are solved."], ["Y retourner suffit à déclencher la scène.", "Going back there is enough to trigger the scene."]),
            at("La maison hantée", ["Le manoir abandonné.", "The abandoned mansion."], ["Le dernier. Une suite de scènes s'enchaîne à l'arrivée : Riku, Ansem, et Roxas lui-même.", "The last one. A run of scenes plays on arrival: Riku, Ansem, and Roxas himself."]),
          ],
        },
      ],
      bosses: [
        {
          id: "armure-astrale",
          name: L("L'Armure Astrale", "The Twilight Thorn"),
          entry: "twilight-thorn",
          level: "3",
          reward: L("+5 points de vie, et la capacité Parade.", "+5 HP, and the Guard ability."),
          tactics: L(
            "Le premier vrai combat du jeu, et son vrai sujet est ailleurs que dans la victoire : il est là pour vous apprendre les **commandes réaction**, et il est presque impossible à perdre si vous les jouez.\n\nLa première phase est entièrement scriptée — Roxas est immobilisé et ne peut qu'enchaîner les commandes. **Marteler Triangle** suffit à toutes les réussir.\n\nLe vrai combat commence ensuite, l'Armure évanouie au sol : frappez la **tête**. Dès qu'elle bouge, éloignez-vous et sautez pour éviter le balayage de bras.\n\nElle projette souvent des **éclairs blancs** : Triangle les transforme en tremplin vers la tête. Les éclairs **noirs**, eux, sont à fuir. Une fois retombé au sol, écartez-vous immédiatement — elle riposte en battant l'air.\n\nSi la vie baisse, concentrez-vous sur les petites créatures qu'elle libère en plantant ses bras dans le sol : elles lâchent beaucoup d'orbes de vie en mourant.",
            "The game's first real fight, and its real subject is not victory: it is there to teach you **Reaction Commands**, and it is nearly impossible to lose if you play them.\n\nThe first phase is entirely scripted — Roxas is pinned and can only chain commands. **Mashing Triangle** is enough to land every one of them.\n\nThe real fight starts afterwards, with the Thorn slumped on the ground: hit the **head**. The moment it stirs, back off and jump to avoid the arm sweep.\n\nIt often throws out **white bolts**: Triangle turns them into a springboard to the head. The **black** ones are to be avoided. Once you land, move away immediately — it answers by thrashing the air.\n\nIf your HP drops, focus on the small creatures it releases by driving its arms into the ground: they drop plenty of HP orbs when killed.",
          ),
          attacks: [
            { name: L("Éclairs blancs", "White bolts"), note: L("Triangle : ils servent de tremplin jusqu'à la tête.", "Triangle: they act as a springboard up to the head.") },
            { name: L("Éclairs noirs", "Black bolts"), note: L("À éviter — ceux-là font mal.", "To be avoided — these hurt.") },
            { name: L("Bras plantés au sol", "Arms driven into the ground"), note: L("Libère des petites créatures : de la vie gratuite quand on en manque.", "Releases small creatures: free HP when you need it.") },
          ],
        },
        {
          id: "axel-1",
          name: L("Axel — premier duel", "Axel — first duel"),
          entry: "axel",
          level: "4",
          reward: L("La capacité Scan.", "The Scan ability."),
          tactics: L(
            "Axel est rapide et frappe fort, mais il a **très peu de points de vie** : le combat est court si vous parvenez à le toucher.\n\nSa fenêtre d'ouverture est le bref instant d'inattention qui suit le lancer de ses disques. Le reste du temps, restez **constamment en mouvement** et ripostez juste après son attaque.\n\nUne chose à savoir : **la Parade ne fonctionne pas sur ses attaques**. L'esquive est votre seule défense. Et quand son corps et ses armes s'enflamment, écartez-vous : sa portée et ses dégâts augmentent d'un coup.",
            "Axel is fast and hits hard, but he has **very little HP**: the fight is short if you can land your hits.\n\nHis opening is the brief moment of distraction after he throws his chakrams. The rest of the time, keep **constantly moving** and counter right after his attack.\n\nOne thing to know: **Guard does not work on his attacks**. Dodging is your only defence. And when his body and weapons catch fire, get away: his reach and damage jump at once.",
          ),
        },
        {
          id: "axel-2",
          name: L("Axel — le manoir", "Axel — the mansion"),
          entry: "axel",
          level: "5",
          reward: L("+5 points de vie.", "+5 HP."),
          tactics: L(
            "Le même adversaire, mais le combat de fin de prologue, et cette fois les commandes réaction ne sont pas un confort : elles sont **la condition de la survie**.\n\nAxel ajoute une technique qui embrase toute l'arène. Quand il se réfugie derrière son mur de flammes, placez-vous **au centre** et martelez Triangle pour esquiver ses assauts.\n\nDès que l'occasion se présente, enchaînez la commande **Transcendance** puis **Extincteur** : il est paralysé le temps qu'il faut.\n\nRoxas se bat alors avec deux Keyblades. Ses combos, au sol comme en l'air, font énormément de dégâts — n'ayez aucune retenue.",
            "The same opponent, but this is the prologue's closing fight, and this time Reaction Commands are not a convenience: they are **the condition of survival**.\n\nAxel adds a move that sets the whole arena ablaze. When he takes cover behind his wall of flame, stand **in the centre** and mash Triangle to dodge his passes.\n\nWhenever you get the chance, chain the **Rising Sun** command into **Firewall**: he is stunned for as long as you need.\n\nRoxas fights with two Keyblades here. His combos, on the ground and in the air, do enormous damage — hold nothing back.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Point de compétence ×2", "2 AP"), where: L("Atteindre 1 200 munnies avec les petits boulots du deuxième jour.", "Reach 1,200 munny with day two's part-time jobs."), note: L("800 munnies n'en donnent qu'un. C'est la seule vraie récompense de la journée.", "800 munny only grants one. It is the day's only real reward.") },
        { kind: "ability", label: L("Anneau de compétences", "AP Boost"), where: L("Terrasse du Couchant : sauter sur le tramway en mouvement pour atteindre le sommet d'une tour.", "Sunset Terrace: jump onto the moving tram to reach the top of a tower.") },
        { kind: "chest", label: L("Deux Potions et une Potion+", "Two Potions and a Hi-Potion"), where: L("Gare du centre, en reprenant le train immédiatement après l'explication du premier mystère.", "Central Station, by taking the train immediately after the first wonder is explained."), note: L("La fenêtre se referme si vous traînez.", "The window closes if you dawdle.") },
        { kind: "ability", label: L("Bandana elfique", "Elven Bandanna"), where: L("Manoir abandonné, dans la salle à manger — la porte gardée par une armure, près de l'escalier.", "The abandoned mansion, in the dining room — the door guarded by a suit of armour, near the staircase.") },
        { kind: "minigame", label: L("Ceinture de champion et Trophée de Struggle", "Champion Belt and Struggle Trophy"), where: L("Remporter le tournoi de Struggle du quatrième jour.", "Win day four's Struggle tournament."), note: L("Une défaite ne donne qu'une médaille, mais ne bloque rien.", "Losing only gives a medal, but blocks nothing.") },
      ],
      missable: [
        L("Les trois coffres de la gare du centre, qui ne s'ouvrent qu'en reprenant le train **immédiatement** après l'explication du premier mystère, le cinquième jour.", "The three chests at Central Station, which only open by taking the train **immediately** after the first wonder is explained, on day five."),
        L("Les 2 points de compétence des petits boulots : la journée s'arrête d'elle-même à 2 000 munnies, et on ne revient jamais au deuxième jour.", "The 2 AP from the part-time jobs: the day ends by itself at 2,000 munny, and you never return to day two."),
      ],
    },
    {
      id: "cite-du-crepuscule",
      title: L("Cité du Crépuscule", "Twilight Town"),
      subtitle: L("Première visite — Sora se réveille", "First visit — Sora wakes up"),
      world: "twilight-town",
      level: "3",
      status: "done",
      intro: L(
        "Sora, Donald et Dingo se réveillent après un an de sommeil, exactement là où Roxas a disparu. La section est courte et ne comporte aucun vrai combat de boss — c'est une mise en route, et une leçon de ramassage.\n\nUn point mérite qu'on s'y arrête avant de commencer : **on ne revient pas à la Cité du Crépuscule avant très longtemps**. Tous les coffres de la ville et de la gare doivent être ouverts maintenant, sous peine d'attendre une bonne dizaine d'heures de jeu.\n\nLa visite se termine à la **Tour Mystérieuse**, chez Yen Sid, qui donne la tenue de voyage, les **Fusions** et la première Keyblade nouvelle. C'est aussi là que le jeu ouvre la quête des puzzles.",
        "Sora, Donald and Goofy wake after a year asleep, in the exact spot where Roxas vanished. The section is short and has no real boss fight — it is a warm-up, and a lesson in collecting.\n\nOne point is worth pausing on before you start: **you do not come back to Twilight Town for a very long time**. Every chest in the town and the station must be opened now, or you will be waiting a good ten hours of play.\n\nThe visit ends at the **Mysterious Tower**, at Yen Sid's, who hands over the travel clothes, the **Drive Forms** and the first new Keyblade. It is also where the game opens the puzzle hunt.",
      ),
      steps: [
        {
          id: "manoir-et-ville",
          title: L("Du manoir au circuit du tram", "From the mansion to the Tram Common"),
          text: L(
            "Une fois le contrôle rendu, retournez-vous et passez le portail du manoir : une **Potion** à gauche, un **Éclat de mithril** à droite de la porte. Traversez la forêt pour rejoindre le repaire de Hayner — un inconnu à grandes oreilles vous cherche, et il n'est pas difficile de deviner qui.\n\nAvant d'aller à la gare, faites le tour des quartiers. En sortant du repaire, prenez à gauche vers la rue de la gare, descendez l'escalier de droite devant la boutique d'objets et l'armurerie, et passez l'arche entre les deux.\n\nLe **circuit du tram** concentre l'essentiel : un coffre à droite en arrivant, un deuxième en suivant les rails, un troisième en vous retournant et en vous laissant tomber. L'ouverture dans le mur mène aux **bois**, où trois coffres attendent sur les bords de la zone.",
            "Once you have control again, turn around and go through the mansion gate: a **Potion** on the left, a **Mythril Shard** to the right of the door. Cross the woods to the Usual Spot — a stranger with big ears is looking for you, and it is not hard to guess who.\n\nBefore heading to the station, tour the districts. Leaving the Usual Spot, go left towards Station Heights, down the right-hand stairs past the item shop and the armour shop, and through the arch between them.\n\nThe **Tram Common** holds most of it: a chest on the right as you arrive, a second by following the tram rails, a third by turning around and dropping down. The gap in the wall leads to the **woods**, where three chests sit around the edges of the area.",
          ),
        },
        {
          id: "toits",
          title: L("Les toits, et le Bonus PC", "The rooftops, and the AP Boost"),
          text: L(
            "De retour sur le circuit du tram, continuez à droite et empruntez le passage où se promène une dame. Grimpez à gauche jusqu'au coffre contenant une **Tente**.\n\nDe là, sautez sur le **toit vert** puis sur les suivants pour atteindre un **Bonus PC** posé au loin. Donnez-le à Sora : c'est lui qui porte les capacités les plus chères.\n\nRevenez au coffre précédent, traversez le pont de briques pour un **Éclat de mithril**, et restez sur les toits : un petit pont de pierre entre deux bâtiments mène à un dernier **Éclat de mithril**.",
            "Back on the Tram Common, carry on right and take the passage where a woman is walking. Climb up on the left to the chest holding a **Tent**.\n\nFrom there, jump onto the **green roof** and the ones after it to reach an **AP Boost** sitting further along. Give it to Sora: he is the one carrying the expensive abilities.\n\nGo back to the previous chest, cross the brick bridge for a **Mythril Shard**, and stay on the roofs: a small stone bridge between two buildings leads to one last **Mythril Shard**.",
          ),
        },
        {
          id: "gare",
          title: L("La gare, et le départ", "The station, and the departure"),
          text: L(
            "À la gare, les créatures blanches croisées depuis le début du jeu passent à l'attaque. Tenez bon : au bout d'un moment, **le roi Mickey en personne** vient prêter main-forte. Vous repartez avec une **Bourse**, une **Boule de cristal** et le **rapport d'Ansem n° 2**.\n\nAvant de parler à Donald pour monter dans le train, **vérifiez deux fois vos coffres**. Ceux de la gare centrale — une **Tente**, une **Potion+** et un **Éclat de mithril** — comme ceux de la ville. C'est le point de non-retour de la section.",
            "At the station, the white creatures you have been meeting since the start attack in force. Hold out: after a while, **King Mickey himself** steps in. You leave with a **Munny Pouch**, a **Crystal Orb** and **Ansem's Report 2**.\n\nBefore talking to Donald to board the train, **check your chests twice**. Those at Central Station — a **Tent**, a **Hi-Potion** and a **Mythril Shard** — and those in the town. This is the section's point of no return.",
          ),
        },
        {
          id: "tour-mysterieuse",
          title: L("La Tour Mystérieuse", "The Mysterious Tower"),
          text: L(
            "Après une scène propre à Final Mix, le train dépose l'équipe devant une tour. Trois coffres attendent à proximité : une **Potion**, une **Potion+** et un **Éther**.\n\nÀ l'entrée, **Pat Hibulaire** se présente, expose maladroitement ses plans et lâche quelques Sans-cœur. Réglez-leur leur compte et entrez. Près du point de sauvegarde, un **Éclat de mithril** et un **Éther** ; montez ensuite en nettoyant chaque palier.\n\nEn haut vous attend **Yen Sid**, le maître du roi. Prenez la **carte des lieux** dans le coffre avant de lire le livre : il vous expliquera ce que sont les **Similis** et qui est l'**Organisation XIII**.\n\nLa pièce voisine contient une **Pierre de mithril** et les trois Bonnes Fées. Parlez à la rouge : vous héritez de la tenue de voyage et surtout des **Fusions** — la **Vaillance** est disponible tout de suite — ainsi que de la Keyblade **Stella**. Le jeu introduit enfin la quête des **puzzles** : des pièces en forme de couronne, disséminées dans tous les mondes.\n\nDehors, le vaisseau Gummi attend. Sur l'atlas, **Start sauvegarde à tout moment**.",
            "After a scene exclusive to Final Mix, the train drops the party in front of a tower. Three chests wait nearby: a **Potion**, a **Hi-Potion** and an **Ether**.\n\nAt the entrance, **Pete** introduces himself, clumsily lays out his plans and throws a few Heartless at you. Deal with them and go in. Near the save point, a **Mythril Shard** and an **Ether**; then climb, clearing each landing.\n\nAt the top waits **Yen Sid**, the king's master. Take the **area map** from the chest before reading the book: he will explain what **Nobodies** are and who **Organisation XIII** is.\n\nThe next room holds a **Mythril Stone** and the three Good Fairies. Talk to the red one: you receive the travel clothes and, above all, the **Drive Forms** — **Valor** is available straight away — plus the Keyblade **Star Seeker**. The game finally introduces the **puzzle** hunt: crown-shaped pieces scattered across every world.\n\nOutside, the Gummi ship is waiting. On the world map, **Start saves at any time**.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC", "AP Boost"), where: L("Circuit du tram : monter au coffre de la Tente, puis sauter de toit en toit jusqu'au bonus posé au loin.", "Tram Common: climb to the Tent chest, then roof-hop to the boost sitting further along."), note: L("À donner à Sora.", "Give it to Sora.") },
        { kind: "chest", label: L("Six coffres du circuit du tram et des bois", "Six chests in the Tram Common and the woods"), where: L("Trois le long des rails du tram, trois sur les bords de la zone boisée, par l'ouverture dans le mur.", "Three along the tram rails, three around the edges of the woods, through the gap in the wall.") },
        { kind: "chest", label: L("Quatre Éclats de mithril et une Pierre de mithril", "Four Mythril Shards and one Mythril Stone"), where: L("Manoir, bois, pont de briques, toits, gare centrale ; la pierre chez Yen Sid.", "The mansion, the woods, the brick bridge, the roofs, Central Station; the stone at Yen Sid's.") },
        { kind: "report", label: L("Rapport d'Ansem n° 2", "Ansem's Report 2"), where: L("Après le combat de la gare, avec la Bourse et la Boule de cristal.", "After the station fight, along with the Munny Pouch and the Crystal Orb.") },
        { kind: "keyblade", label: L("Stella", "Star Seeker"), where: L("Des Bonnes Fées, chez Yen Sid, avec la tenue de voyage et la Fusion Vaillance.", "From the Good Fairies at Yen Sid's, with the travel clothes and the Valor Form.") },
      ],
      missable: [
        L("**Tous les coffres de la Cité du Crépuscule et de la gare.** Monter dans le train ferme le monde pour une dizaine d'heures de jeu : ce qui n'a pas été ouvert attendra.", "**Every chest in Twilight Town and the station.** Boarding the train closes the world for a good ten hours of play: whatever you left unopened will wait."),
      ],
    },
    {
      id: "forteresse-oubliee",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      subtitle: L("Première visite — retrouvailles", "First visit — reunions"),
      world: "radiant-garden",
      level: "8",
      status: "done",
      intro: L(
        "Le monde de Léon, Youffie, Aerith et Cid, revu un an plus tard : la ville se reconstruit, les boutiques ont rouvert, et l'**atelier des Mogs** est en service. C'est le point d'ancrage de toute la partie — on y reviendra cinq fois.\n\nLa section est brève et donne deux choses essentielles : les **éléments de Glace et de Feu**, c'est-à-dire les sorts Glacier et Brasier, et l'ouverture des routes stellaires vers les premiers vrais mondes.\n\nUne note sur les puzzles : plusieurs pièces sont ici hors de portée tant qu'on n'a pas le **Double saut**, qui arrive bien plus tard. Prenez celles que vous pouvez et revenez pour le reste.",
        "Leon, Yuffie, Aerith and Cid's world, seen a year on: the town is being rebuilt, the shops have reopened, and the **moogle workshop** is running. It is the anchor point of the whole game — you will come back five times.\n\nThe section is brief and gives two essential things: the **Blizzard and Fire elements**, meaning the Blizzard and Fire spells, and the opening of the star routes to the first real worlds.\n\nA note on puzzles: several pieces here are out of reach until you have **High Jump**, which comes much later. Take the ones you can and come back for the rest.",
      ),
      steps: [
        {
          id: "centre-ville",
          title: L("Le centre-ville et les Faubourgs", "The Marketplace and the Borough"),
          text: L(
            "Une **pièce de puzzle** attend sur votre gauche avant même de descendre au centre-ville. Celle posée au-dessus de la boutique, en revanche, demande le **Double saut** : notez-la et passez votre chemin.\n\nEn bas, les échoppes et l'**atelier des Mogs** sont ouverts. Parlez à **Picsou** au passage, puis continuez vers les **Faubourgs** : vous y retrouvez Youffie, et des Similis interrompent les retrouvailles. La victoire donne la **carte du centre-ville**.\n\nAvancez en nettoyant quelques Sans-cœur, ouvrez le coffre à la **Potion+**, et entrez chez **Merlin** par la porte de gauche.",
            "A **puzzle piece** waits on your left before you even go down to the Marketplace. The one above the shop, though, needs **High Jump**: note it and move on.\n\nDown below, the stalls and the **moogle workshop** are open. Talk to **Scrooge** on the way, then carry on to the **Borough**: you find Yuffie there, and Nobodies interrupt the reunion. Winning gives the **town map**.\n\nPush on, clearing a few Heartless, open the chest with the **Hi-Potion**, and go into **Merlin's house** through the door on the left.",
          ),
        },
        {
          id: "merlin",
          title: L("Chez Merlin", "At Merlin's"),
          text: L(
            "La discussion réserve une surprise de taille : **tout le monde vous avait oublié** jusqu'à récemment. Vous en repartez avec une **carte de membre** du comité de restauration et l'**élément de Glace**, donc le sort **Glacier**.\n\nAvant de sortir, servez-vous du lit pour attraper la **pièce de puzzle** au plafond.\n\nDehors, partez à droite : un **Éclat noir** dans un coffre, puis l'escalier. Une fois en haut, allez tout droit jusqu'au coffre contenant un **Bonus PC**, caché derrière une grue rouge. Retournez-vous et marchez sur le long mur de pierre pour une nouvelle **pièce de puzzle**. Sur le chemin des Fortifications, un **Reflux** et un **Éclat de mithril**.",
            "The conversation holds a considerable surprise: **everyone had forgotten you** until recently. You leave with a **membership card** for the Restoration Committee and the **Blizzard element**, meaning the **Blizzard** spell.\n\nBefore going out, use the bed to reach the **puzzle piece** on the ceiling.\n\nOutside, head right: a **Dark Shard** in a chest, then the stairs. At the top, go straight on to the chest holding an **AP Boost**, hidden behind a red crane. Turn around and walk along the long stone wall for another **puzzle piece**. On the way to the Bailey, an **Ether** and a **Mythril Shard**.",
          ),
        },
        {
          id: "fortifications",
          title: L("Les Fortifications", "The Bailey"),
          text: L(
            "Léon vous attend pour faire le point sur l'état de la Forteresse — et une horde de Similis coupe court à l'explication.\n\nC'est une **défense de porte** : la jauge verte en haut de l'écran est la résistance de la porte derrière vous, et elle tombe à chaque fois qu'un ennemi la frappe. Ne la laissez pas se vider.\n\nLes vagues s'enchaînent dans cet ordre : des **Reflets**, des **Sombreurs**, des **Samouraïs**, puis de nouveaux Reflets. Le Glacier tout juste obtenu fait des merveilles ici — il fige les Reflets, qui sont autrement pénibles à toucher. Restez entre la porte et les ennemis plutôt que de les poursuivre.\n\nLa récompense est l'**élément de Feu**, donc le sort **Brasier**.\n\nL'Organisation XIII se présente officiellement à Sora. La carte de membre se met alors à briller et révèle un **Verrou céleste** : la Keyblade ouvre **deux routes stellaires**, et le **rapport d'Ansem n° 7** rejoint le carnet.\n\nSur l'atlas, la Cité du Crépuscule est devenue inaccessible et les nouvelles voies sont bloquées : il faut d'abord franchir un parcours en vaisseau Gummi. Direction la **Terre des Dragons**, par le Champ d'astéroïdes.",
            "Leon is waiting to bring you up to date on Hollow Bastion's situation — and a horde of Nobodies cuts the explanation short.\n\nThis is a **gate defence**: the green gauge at the top of the screen is the durability of the gate behind you, and it drops every time an enemy strikes it. Do not let it empty.\n\nThe waves come in this order: **Dusks**, **Creepers**, **Samurai**, then more Dusks. The Blizzard you just earned works wonders here — it freezes Dusks, which are otherwise a pain to hit. Stay between the gate and the enemies rather than chasing them.\n\nThe reward is the **Fire element**, meaning the **Fire** spell.\n\nOrganisation XIII formally introduces itself to Sora. The membership card then starts to glow and reveals a **Keyhole**: the Keyblade opens **two star routes**, and **Ansem's Report 7** joins the journal.\n\nOn the world map, Twilight Town has become unreachable and the new routes are blocked: you must first fly a Gummi course. Head for **The Land of Dragons**, through the Asteroid Sweep.",
          ),
        },
      ],
      tables: [
        {
          id: "puzzles-hb",
          title: L("Les pièces de puzzle de cette visite", "This visit's puzzle pieces"),
          intro: L(
            "Trois pièces sont accessibles maintenant. La quatrième attend le **Double saut**, qui n'arrive pas avant plusieurs mondes : elle n'est pas perdue, notez-la simplement.",
            "Three pieces are reachable now. The fourth waits for **High Jump**, which does not arrive for several worlds yet: it is not lost, just note it.",
          ),
          columns: [L("Où", "Where"), L("Comment l'atteindre", "How to reach it"), L("Ce qu'il faut", "What you need")],
          rows: [
            at("Avant le centre-ville", ["Sur la gauche, en descendant. Elle est à portée de main.", "On the left, on the way down. Within easy reach."], ["Rien.", "Nothing."]),
            at("Chez Merlin", ["Au plafond : monter sur le lit pour l'attraper.", "On the ceiling: climb on the bed to grab it."], ["Rien.", "Nothing."]),
            at("Le long mur de pierre", ["Après le Bonus PC derrière la grue rouge, se retourner et marcher sur le mur.", "Past the AP Boost behind the red crane, turn around and walk along the wall."], ["Rien.", "Nothing."]),
            at("Au-dessus de la boutique", ["Hors de portée pour l'instant.", "Out of reach for now."], ["Double saut — plusieurs mondes plus tard.", "High Jump — several worlds later."]),
          ],
        },
      ],
      bosses: [
        {
          id: "defense-porte",
          name: L("La défense de la porte", "The gate defence"),
          entry: "dusk",
          level: "8",
          reward: L("L'élément de Feu, donc le sort Brasier.", "The Fire element, meaning the Fire spell."),
          tactics: L(
            "Ce n'est pas un boss mais une épreuve de tenue, et c'est le premier vrai test du jeu. La **jauge verte** en haut de l'écran est la porte : si elle se vide, c'est terminé.\n\nLe réflexe naturel — poursuivre les Similis — est exactement le mauvais. Restez **entre la porte et eux**, et laissez-les venir : ils vont à la porte, pas à vous.\n\nLe **Glacier** tout juste appris est la clé. Les Reflets se tordent et esquivent en permanence ; gelés, ils deviennent des cibles fixes. Léon se charge d'une partie du travail, mais c'est vous qui tenez la ligne.\n\nQuatre vagues, dans l'ordre : Reflets, Sombreurs, Samouraïs, Reflets. Les **Samouraïs** sont les seuls vraiment dangereux pour la porte — ils frappent fort et vite. Concentrez-vous sur eux dès qu'ils arrivent, quitte à laisser Léon gérer le reste.",
            "This is not a boss but a holding test, and it is the game's first real one. The **green gauge** at the top is the gate: if it empties, it is over.\n\nThe natural instinct — chasing the Nobodies — is exactly the wrong one. Stay **between the gate and them**, and let them come: they are going for the gate, not for you.\n\nThe **Blizzard** you just learned is the key. Dusks writhe and dodge constantly; frozen, they become stationary targets. Leon handles part of the work, but you are the one holding the line.\n\nFour waves, in order: Dusks, Creepers, Samurai, Dusks. The **Samurai** are the only ones genuinely dangerous to the gate — they hit hard and fast. Focus on them the moment they arrive, and let Leon handle the rest.",
          ),
          attacks: [
            { name: L("Reflets", "Dusks"), note: L("Ils esquivent sans arrêt. Glacier les fige, et c'est là qu'on les frappe.", "They dodge constantly. Blizzard freezes them, and that is when you hit.") },
            { name: L("Samouraïs", "Samurai"), note: L("Les plus dangereux pour la porte. À traiter en priorité absolue.", "The most dangerous to the gate. Absolute priority.") },
          ],
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC", "AP Boost"), where: L("En haut de l'escalier après chez Merlin, tout droit, derrière une grue rouge.", "At the top of the stairs past Merlin's, straight ahead, behind a red crane.") },
        { kind: "ability", label: L("Élément de Glace, puis élément de Feu", "Blizzard element, then Fire element"), where: L("Le premier de Merlin, le second en récompense de la défense de la porte.", "The first from Merlin, the second as the gate defence's reward.") },
        { kind: "report", label: L("Rapport d'Ansem n° 7", "Ansem's Report 7"), where: L("Après l'ouverture du Verrou céleste aux Fortifications.", "After the Keyhole opens at the Bailey.") },
        { kind: "synthesis", label: L("Éclat noir, Reflux, Éclat de mithril", "Dark Shard, Ether, Mythril Shard"), where: L("Dans les coffres du chemin entre chez Merlin et les Fortifications.", "In the chests along the path from Merlin's to the Bailey.") },
      ],
    },
    {
      id: "terre-des-dragons",
      title: L("Terre des Dragons", "The Land of Dragons"),
      subtitle: L("Première visite", "First visit"),
      world: "land-of-dragons",
      level: "10",
      status: "done",
      intro: L(
        "Le monde de Mulan, et le premier vrai monde du jeu : long, dense, et bâti autour d'une mécanique qu'on ne reverra qu'ici — la **jauge de moral**.\n\nElle remplace la jauge de vie comme condition de défaite dans presque toutes les épreuves du monde. Selon l'épreuve, elle baisse quand vous encaissez, quand **Ping** encaisse, ou simplement avec le temps. Les orbes à tête de dragon que lâchent les ennemis la rechargent.\n\nPing rejoint l'équipe et prend la place de Donald ou de Dingo — le membre écarté **gagne quand même de l'expérience**, et l'option Intervertir du menu de combat permet d'en changer à tout moment.\n\nDeux avertissements. Le **Sentier** vide la jauge à toute vitesse : n'y ramassez rien au premier passage, revenez plus tard. Et la grotte se fait **sans Donald**, donc sans soin : c'est le passage le plus exigeant de la visite.",
        "Mulan's world, and the game's first real one: long, dense, and built around a mechanic you will not see again — the **morale gauge**.\n\nIt replaces the HP bar as the losing condition in nearly every trial here. Depending on the trial, it drops when you take damage, when **Ping** takes damage, or simply over time. The dragon-headed orbs enemies drop refill it.\n\nPing joins the party in place of Donald or Goofy — the member left out **still earns experience**, and the Swap option in the battle menu lets you change at any time.\n\nTwo warnings. The **Checkpoint path** drains the gauge at speed: pick nothing up on the first pass, come back later. And the cave is done **without Donald**, so without healing: it is the visit's most demanding stretch.",
      ),
      steps: [
        {
          id: "campement",
          title: L("Le campement, et les trois missions", "The Encampment, and the three missions"),
          text: L(
            "Vous rencontrez Ping — Fa Mulan sous un déguisement — et retrouvez **Mushu**, qui accompagnait Sora en invocation dans le premier épisode. Choisissez qui de Donald ou de Dingo lui laisse sa place.\n\nAvant de bouger, consultez le Mog et ouvrez les trois coffres : un **Éclat noir**, un **Éther** et un **Éclat de mithril**.\n\nLe campement est attaqué : c'est ici que la **jauge de moral** apparaît, et elle baisse **chaque fois que Ping encaisse**. Protégez-la plus que vous ne vous protégez. La victoire donne la **carte du campement**.\n\nLe capitaine Li Shang doute des capacités de Ping et confie trois missions pour en juger. Les réussir toutes les trois donne un **Bonus PC**.",
            "You meet Ping — Fa Mulan in disguise — and find **Mushu** again, who travelled with Sora as a summon in the first game. Choose whether Donald or Goofy gives up their place.\n\nBefore moving, check the moogle's stock and open the three chests: a **Dark Shard**, an **Ether** and a **Mythril Shard**.\n\nThe camp is attacked: this is where the **morale gauge** appears, and it drops **every time Ping takes a hit**. Protect it more than you protect yourself. Winning gives the **encampment map**.\n\nCaptain Li Shang doubts Ping's ability and sets three missions to judge. Clearing all three gives an **AP Boost**.",
          ),
        },
        {
          id: "sentier",
          title: L("Le Sentier et le village", "The Checkpoint and the village"),
          text: L(
            "Montez au sommet du mirador derrière le capitaine et sautez vers la **pièce de puzzle** en donnant un coup de Keyblade en l'air pour l'attraper.\n\nSortez vers le poste de contrôle : deux coffres, un **Éclat de mithril** et une **Potion+**. Prenez ensuite le chemin derrière la rivière.\n\nSur le **Sentier**, il faut rejoindre le village en détruisant les rochers avec la commande réaction **Brise-roc**. La jauge de moral y fond à vue d'œil — elle baisse à la fois au temps et aux coups. **Ne vous occupez pas des coffres maintenant** : vous repasserez par là au calme. Le dernier passage est gardé par des **Centaurus** ; si ça tourne mal, cassez les rochers et filez sans les affronter.\n\nL'arrivée donne la **carte du village**. Avant la grotte, deux pièces de puzzle : l'une flotte au-dessus d'un tas de foin au sud-ouest, l'autre est sur un toit à l'est — le chariot près du foin sert de marchepied.",
            "Climb the watchtower behind the captain and jump towards the **puzzle piece**, swinging the Keyblade mid-air to grab it.\n\nHead out to the checkpoint: two chests, a **Mythril Shard** and a **Hi-Potion**. Then take the path behind the river.\n\nOn the **Checkpoint path**, you must reach the village by smashing rocks with the **Rock Breaker** Reaction Command. The morale gauge melts away here — it drops both over time and on hits. **Do not bother with the chests now**: you will come back through at leisure. The last passage is guarded by **Assault Riders**; if it goes badly, break the rocks and run rather than fight them.\n\nArriving gives the **village map**. Before the cave, two puzzle pieces: one floats above a hay pile to the south-west, the other is on a roof to the east — the cart near the hay is your step up.",
          ),
        },
        {
          id: "grotte",
          title: L("La grotte, sans Donald", "The cave, without Donald"),
          text: L(
            "Mushu affirme avoir vu **Shan Yu** dans une grotte derrière le village, et conseille d'y aller seul pour faire valoir Ping auprès du capitaine.\n\n**Sauvegardez avant d'entrer.** À l'intérieur, deux coffres près des chariots : un **Éclat noir** et un **Bonus PC**.\n\nL'embuscade qui suit — des Ombres et **trois Centaurus** — se livre avec Ping pour seul allié, donc **sans le soin de Donald**. C'est le passage le plus difficile de la visite. Deux règles : ne **jamais** attaquer un Centaurus en sautant, sous peine de prendre le moulinet de lance de plein fouet, et les traiter au **Glacier** à distance.\n\nLa victoire donne **Virevolte** à Sora ; Ping apprend Soin amical et gagne 15 points de vie.",
            "Mushu claims to have seen **Shan Yu** in a cave behind the village, and suggests going alone so the captain will think better of Ping.\n\n**Save before going in.** Inside, two chests by the carts: a **Dark Shard** and an **AP Boost**.\n\nThe ambush that follows — Shadows and **three Assault Riders** — is fought with Ping as your only ally, so **without Donald's healing**. It is the hardest stretch of the visit. Two rules: **never** attack an Assault Rider while jumping, or you take the spinning lance full on, and handle them with **Blizzard** from range.\n\nWinning gives Sora **Aerial Sweep**; Ping learns Mushu's Flame and gains 15 HP.",
          ),
        },
        {
          id: "sommet",
          title: L("Le sommet, et le retour au Sentier", "The summit, and back to the path"),
          text: L(
            "Le village est dévasté : l'attaque de la grotte était une diversion. Grimpez la pente derrière le point de sauvegarde.\n\nDans la zone suivante, une **pièce de puzzle** à droite près des chariots, puis un **Bonus PC** et un **Éclat glacial** dans les coffres. De petits tourbillons d'air permettent de flotter et de sauter plus haut : ils mènent à une **seconde pièce de puzzle**.\n\nAu sommet, une nuée d'**Hélicopiafs** accompagnés d'**Électro-tours**. Les deux ouvrent des commandes réaction — **Moulinet** et **Parafoudre** — et c'est le meilleur moyen de nettoyer. **Ne vous fiez pas à l'objectif affiché** : il ne s'agit pas de tous les tuer mais de **survivre une minute**. Attention aux ondes de choc des Électro-tours.\n\nLe capitaine reconnaît enfin Ping — et Mushu vend la mèche. Mulan reprend son apparence, ce qui augmente ses statistiques et ouvre la coopération **Fusée rouge**.\n\nProfitez-en pour revenir au **Sentier** ramasser ce que vous aviez laissé : deux coffres sur une plate-forme surélevée au nord (**Formule de récupération** et **Éther**), un **Éclat de mithril** au centre, et un **Éclat grondant** sur le chemin ouest.",
            "The village is in ruins: the cave attack was a diversion. Climb the slope behind the save point.\n\nIn the next area, a **puzzle piece** on the right near the carts, then an **AP Boost** and a **Frost Shard** in the chests. Small updrafts let you float and jump higher: they lead to a **second puzzle piece**.\n\nAt the summit, a swarm of **Rapid Thrusters** with **Bolt Towers**. Both open Reaction Commands — **Rodeo** and **Bolt Reversal** — and that is the best way to clear them. **Do not trust the on-screen objective**: the point is not to kill them all but to **survive for one minute**. Watch for the Bolt Towers' shockwaves.\n\nThe captain finally acknowledges Ping — and Mushu gives the game away. Mulan drops the disguise, which raises her stats and opens the **Red Rocket** limit.\n\nTake the chance to go back to the **Checkpoint path** for what you left behind: two chests on a raised platform to the north (**Mythril Shard** and **Ether**), a **Mythril Shard** in the centre, and a **Thunder Shard** on the western path.",
          ),
        },
      ],
      tables: [
        {
          id: "missions",
          title: L("Les trois missions du capitaine", "The captain's three missions"),
          intro: L(
            "Toutes ont le même principe : tuer avant que le moral ne se vide. Ce qui change d'une mission à l'autre, c'est **ce qui fait baisser la jauge** — et c'est là-dessus qu'il faut régler sa façon de jouer. Les trois réussies donnent un **Bonus PC**.",
            "They all share a principle: kill before morale empties. What changes from one to the next is **what drains the gauge** — and that is what should change how you play. All three cleared gives an **AP Boost**.",
          ),
          columns: [L("Mission", "Mission"), L("Ce qui vide la jauge", "What drains the gauge"), L("Comment s'y prendre", "How to handle it")],
          rows: [
            at("Attaque surprise", ["Le temps, et non les coups encaissés.", "Time, not damage taken."], ["Des Ombres et des Rôdeurs nocturnes, en nombre affiché à l'écran. Les feux d'artifice donnent des orbes de moral : servez-vous-en plutôt que de courir après les traînards.", "Shadows and Nightwalkers, with the count shown on screen. The fireworks give morale orbs: use them rather than chasing stragglers."]),
            at("Embuscade", ["Chaque coup reçu.", "Every hit taken."], ["Éliminer les Ombres et les Rôdeurs nocturnes d'abord, les Centaurus ensuite. Magie à distance sur ces derniers, et jamais d'attaque sautée quand ils font tournoyer leur lance.", "Clear the Shadows and Nightwalkers first, the Assault Riders after. Ranged magic on the latter, and never a jumping attack while they spin their lance."]),
            at("Recherche", ["Le temps.", "Time."], ["Huit Sans-cœur cachés dans le campement. C'est une course : repérez vite plutôt que de fouiller méthodiquement.", "Eight Heartless hidden around the camp. It is a race: spot fast rather than search methodically."]),
          ],
        },
      ],
      bosses: [
        {
          id: "shan-yu",
          name: L("Shan Yu", "Shan Yu"),
          entry: "shan-yu",
          level: "12",
          reward: L("Sora : +5 points de vie et Cyclone. Donald : +3 points de vie. Dingo : Dingo-turbo. Mulan : +20 points de vie. Et la Keyblade Dragon Tapi.", "Sora: +5 HP and Aerial Spiral. Donald: +3 HP. Goofy: Goofy Turbo. Mulan: +20 HP. Plus the Hidden Dragon Keyblade."),
          tactics: L(
            "La jauge de moral laisse place à une jauge **Portes** : c'est leur résistance, et si elle tombe à zéro le combat est perdu, quelle que soit votre vie. Tout le combat se joue autour de ça.\n\nLa priorité n'est donc pas Shan Yu mais les **Sans-cœur qui l'accompagnent** — ce sont eux qui tapent sur les portes. La coopération **Fusée rouge** avec Mulan les balaie en une fois : déclenchez-la dès qu'elle est disponible, et vous pourrez ensuite vous consacrer au chef. Ignorez le faucon, il ne fait rien de sérieux.\n\nSur Shan Yu lui-même : **parer ses coups d'épée** peut déclencher un duel, où il suffit de marteler Triangle pour le renverser. C'est votre meilleure source de dégâts.\n\nQuand il s'entoure d'une **aura noire**, arrêtez tout et bougez : il devient invincible et prépare une charge dévastatrice. Attendre qu'elle passe est la seule option ; une fois calmé, reprenez.",
            "The morale gauge gives way to a **Gate** gauge: that is the doors' durability, and if it hits zero the fight is lost whatever your HP. The whole battle turns on it.\n\nThe priority is therefore not Shan Yu but the **Heartless with him** — they are the ones hitting the doors. The **Red Rocket** limit with Mulan sweeps them away in one go: trigger it as soon as it is available, and you can then focus on the leader. Ignore the falcon, it does nothing serious.\n\nOn Shan Yu himself: **guarding his sword strikes** can start a clash, where mashing Triangle knocks him down. That is your best source of damage.\n\nWhen he wraps himself in a **black aura**, stop everything and move: he becomes invincible and winds up a devastating charge. Waiting it out is the only option; once he settles, go back in.",
          ),
          attacks: [
            { name: L("Coups d'épée", "Sword strikes"), note: L("À parer : la parade réussie ouvre un duel, et le duel le met à terre.", "Guard them: a successful guard opens a clash, and the clash floors him.") },
            { name: L("Aura noire", "Black aura"), note: L("Il devient invincible et charge. Fuir, sans chercher à le toucher.", "He becomes invincible and charges. Run, and do not try to hit him.") },
            { name: L("Les Sans-cœur d'escorte", "The escorting Heartless"), note: L("Ce sont eux qui vident la jauge des portes. Fusée rouge les efface.", "They are what drains the gate gauge. Red Rocket wipes them out.") },
          ],
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC ×3", "AP Boost ×3"), where: L("Les trois missions du capitaine réussies ; un coffre dans la grotte ; un coffre après la pente, au-delà du village.", "All three captain's missions cleared; a chest in the cave; a chest past the slope, beyond the village.") },
        { kind: "minigame", label: L("Cinq pièces de puzzle", "Five puzzle pieces"), where: L("Mirador du campement, au-dessus du foin et sur un toit au village, près des chariots et dans les tourbillons après la pente.", "The camp watchtower, above the hay and on a roof in the village, near the carts and in the updrafts past the slope.") },
        { kind: "keyblade", label: L("Dragon Tapi", "Hidden Dragon"), where: L("La victoire sur Shan Yu.", "Beating Shan Yu.") },
        { kind: "ability", label: L("Virevolte, puis Cyclone", "Aerial Sweep, then Aerial Spiral"), where: L("L'embuscade de la grotte, puis Shan Yu.", "The cave ambush, then Shan Yu.") },
        { kind: "synthesis", label: L("Éclats noir, glacial, grondant et de mithril", "Dark, Frost, Thunder and Mythril Shards"), where: L("Répartis dans les coffres du campement, du Sentier et du sommet — dont ceux à récupérer au second passage.", "Spread across the chests of the camp, the Checkpoint path and the summit — including those to collect on the second pass.") },
      ],
      missable: [
        L("Rien n'est perdu définitivement ici : le monde se revisite. Les coffres du **Sentier** laissés de côté au premier passage se ramassent après le sommet, une fois la jauge de moral désactivée.", "Nothing is permanently lost here: the world can be revisited. The **Checkpoint path** chests skipped on the first pass can be collected after the summit, once the morale gauge is switched off."),
      ],
    },
    {
      id: "chateau-de-la-bete",
      title: L("Château de la Bête", "Beast's Castle"),
      subtitle: L("Première visite", "First visit"),
      world: "beasts-castle",
      level: "13",
      status: "done",
      intro: L(
        "Trois boss en une visite, et la magie la plus importante du jeu à la clé : c'est ici qu'on obtient l'**élément de Soin**.\n\nLe château est un monde fermé et labyrinthique, où presque tout se passe entre deux ailes et un sous-sol. La Bête ne reconnaît plus personne, et la raison de son humeur porte un manteau noir.\n\nUn mot sur la **Vaillance**, obtenue chez Yen Sid : elle sert énormément ici, à la fois pour les trois boss et pour son **Double saut**, qui met à portée une pièce de puzzle des souterrains. Pensez à la monter.",
        "Three bosses in one visit, and the game's most important magic at the end of it: this is where you get the **Cure element**.\n\nThe castle is a closed, maze-like world where almost everything happens between two wings and a basement. The Beast no longer recognises anyone, and the reason for his mood wears a black coat.\n\nA word on **Valor Form**, gained at Yen Sid's: it is very useful here, both for the three bosses and for its **High Jump**, which brings one of the basement's puzzle pieces into reach. Remember to level it.",
      ),
      steps: [
        {
          id: "grand-hall",
          title: L("Le grand hall et la cour", "The Entrance Hall and the courtyard"),
          text: L(
            "L'arrivée est accueillie par une nuée d'**Ombres**, puis par la Bête elle-même, qui s'empare de la rose sans un mot.\n\nDonald aperçoit une femme en haut de l'escalier de l'aile est. Avant d'y aller, **sortez du château** par la grande porte : la cour contient des Sans-cœur et trois coffres — un **Bonus PC**, une **Potion+** et un **Éclat de mithril**.\n\nRevenez ensuite et montez le grand escalier vers l'est. Au bout de l'allée, vous entrez chez **Belle**, qui vous confie la **carte du château** et une **Formule de soin**, et vous charge de libérer les domestiques enfermés au cachot. L'aile est contient encore une **Tente** et un **Éclat de mithril**.",
            "You arrive to a swarm of **Shadows**, then to the Beast himself, who takes the rose without a word.\n\nDonald spots a woman at the top of the east wing's staircase. Before going there, **leave the castle** by the main door: the courtyard holds Heartless and three chests — an **AP Boost**, a **Hi-Potion** and a **Mythril Shard**.\n\nCome back and climb the main staircase towards the east. At the end of the corridor you walk in on **Belle**, who hands you the **castle map** and a **Mega-Potion**, and asks you to free the servants locked in the dungeon. The east wing also holds a **Tent** and a **Mythril Shard**.",
          ),
        },
        {
          id: "aile-ouest",
          title: L("L'aile ouest et la garde-robe", "The west wing and the wardrobe"),
          text: L(
            "Dans l'aile ouest, revenez sur vos pas après la scène : deux coffres attendent entre les armures — un **Éclat de mithril** et une **Potion+**. Les armures elles-mêmes se détruisent, et lâchent des **orbes de flux** : c'est de la magie gratuite, ne les ignorez pas.\n\nPlus loin, l'escalier est gardé par deux armures. À sa droite, un **Éclat de force** ; à sa gauche, un **Éclat de mithril** et une **Pierre de vitalité**.\n\nLa **garde-robe** postée devant une porte cache l'entrée du cachot. Poussez-la avec **Triangle**, et **lâchez dès qu'elle se réveille** — sinon elle se rendort de travers. Répétez jusqu'à dégager complètement le passage.",
            "In the west wing, backtrack after the scene: two chests sit between the suits of armour — a **Mythril Shard** and a **Hi-Potion**. The armour itself can be destroyed, and drops **MP orbs**: that is free magic, do not ignore it.\n\nFurther on, the staircase is guarded by two suits of armour. To its right, a **Power Shard**; to its left, a **Mythril Shard** and a **Serenity Stone**.\n\nThe **wardrobe** standing in front of a door hides the dungeon entrance. Push it with **Triangle**, and **let go the moment she wakes** — otherwise she settles back crooked. Repeat until the way is completely clear.",
          ),
        },
        {
          id: "souterrains",
          title: L("Les souterrains et les lanternes", "The basement and the lanterns"),
          text: L(
            "Duetto vaincu, entrez libérer les domestiques. Le gros coffre contient la **carte du sous-sol**, le petit un **Bonus PC**. Revenez sur vos pas et grimpez sur les reliefs pour attraper **deux pièces de puzzle**.\n\nÀ l'étage, Big Ben ordonne aux armures de s'écarter — elles obtempèrent aussitôt.\n\nSuit un mini-jeu : traverser les souterrains en allumant **trois lanternes** dans le temps imparti. La commande ne s'active que lorsque **Lumière et Miss Samovar sont à vos côtés**, et il faut parfois leur ouvrir la voie en cassant des caisses. Si la jauge verte se vide, Big Ben s'évanouit à l'entrée de la zone : il faut revenir le ranimer avec les deux autres.\n\nUne fois la mission remplie, fouillez : une **Potion+**, un **Éclat de mithril** et un **Éclat hyalin** près de la sortie, plus **deux pièces de puzzle** — dont une accessible seulement au **Double saut de la Vaillance**.\n\nLe passage secret débouche dans le hall ouest, derrière les armures. Un coffre (**Bonus PC**), puis l'aile ouest : une **Tente** en face, un **Éclat de mithril** et une **pièce de puzzle** plus haut.",
            "With the Thresholder beaten, go in and free the servants. The large chest holds the **basement map**, the small one an **AP Boost**. Backtrack and climb the scenery to grab **two puzzle pieces**.\n\nUpstairs, Cogsworth orders the armour aside — and it obeys at once.\n\nA mini-game follows: cross the basement lighting **three lanterns** within the time limit. The command only activates when **Lumiere and Mrs Potts are beside you**, and you sometimes have to clear their path by smashing crates. If the green gauge empties, Cogsworth faints at the area's entrance: you must come back and revive him with the other two.\n\nOnce the task is done, search around: a **Hi-Potion**, a **Mythril Shard** and a **Lucid Shard** near the exit, plus **two puzzle pieces** — one reachable only with **Valor Form's High Jump**.\n\nThe secret passage comes out in the west hall, behind the armour. A chest (**AP Boost**), then the west wing: a **Tent** facing you, a **Mythril Shard** and a **puzzle piece** higher up.",
          ),
        },
        {
          id: "salle-de-bal",
          title: L("La chambre, puis la salle de bal", "The bedroom, then the ballroom"),
          text: L(
            "Entrez dans la chambre de la Bête : un membre de l'Organisation s'y trouve, et le trouble de votre ami vient de lui. Il faudra le ramener à la raison — au sens propre.\n\nLe combat gagné, la Bête rejoint l'équipe. Prenez la **pièce de puzzle** et l'**Éclat ardent**, puis retournez chez Belle dans l'aile est : la garde-robe vous apprend qu'elle a suivi l'homme en noir.\n\nElle est en fait dans la **salle de bal**, par la porte entre les deux escaliers du grand hall. Un Sans-cœur y a pris possession des lieux, et le combat qui suit se déroule en deux temps.\n\nLa victoire donne l'**élément de Soin** — la magie curative, celle qui change tout pour la suite du jeu. L'équipe est ensuite transportée automatiquement à la Forteresse Oubliée, si la Terre des Dragons est déjà faite.",
            "Go into the Beast's bedroom: a member of the Organisation is there, and your friend's state comes from him. He will have to be brought back to his senses — literally.\n\nWith that fight won, the Beast joins the party. Take the **puzzle piece** and the **Blazing Shard**, then head back to Belle in the east wing: the wardrobe tells you she followed the man in black.\n\nShe is in fact in the **ballroom**, through the door between the two staircases of the Entrance Hall. A Heartless has taken the room over, and the fight that follows comes in two stages.\n\nWinning gives the **Cure element** — the healing magic, the one that changes everything for the rest of the game. The party is then carried automatically to Hollow Bastion, if The Land of Dragons is already done.",
          ),
        },
      ],
      bosses: [
        {
          id: "duetto",
          name: L("Duetto", "Thresholder"),
          entry: "thresholder",
          level: "14",
          reward: L("Sora : Frappe ascendante. Donald : Donald-brasier. Dingo : +4 points de vie.", "Sora: Upper Slash. Donald: Fire Boost. Goofy: +4 HP."),
          tactics: L(
            "Une porte possédée, et un combat en boucle plutôt qu'un combat de force.\n\nÀ votre approche, des Sans-cœur apparaissent. **Éloignez-vous de la porte pour les attirer** et réglez-leur leur compte d'abord : les affronter collé à Duetto, c'est prendre les coups de poing en prime.\n\nDuetto se contente de marteler le sol. Videz sa vie, puis déclenchez la commande réaction **Expulser** : le véritable adversaire sort de la porte, et c'est lui qu'il faut frapper.\n\nLe cycle attaquer la porte / expulser / frapper le Possesseur se répète jusqu'au bout. Pour aller vite : verrouillez le Possesseur dès sa sortie, activez la **Vaillance** et ne le lâchez plus.",
            "A possessed door, and a loop rather than a slugging match.\n\nAs you approach, Heartless appear. **Move away from the door to draw them off** and deal with them first: fighting them pressed against the Thresholder means taking its fists as a bonus.\n\nThe Thresholder simply hammers the ground. Drain its HP, then trigger the **Release** Reaction Command: the real enemy comes out of the door, and that is what you hit.\n\nThe attack the door / release / hit the Possessor loop repeats to the end. To go fast: lock onto the Possessor the moment it emerges, switch to **Valor Form** and do not let go.",
          ),
        },
        {
          id: "la-bete",
          name: L("La Bête", "The Beast"),
          entry: "beast",
          level: "15",
          reward: L("Sora : un emplacement d'armure supplémentaire. Donald : +3 points de vie. Dingo : Défenseur.", "Sora: an extra armour slot. Donald: +3 HP. Goofy: Defender."),
          tactics: L(
            "Le combat le plus court de la visite, et il ne demande qu'une chose : jouer les commandes réaction.\n\n**Réveille-toi**, déclenchée avec l'aide de Big Ben, l'immobilise quelques instants. Frappez pendant ce temps, puis recommencez.\n\nAu bout de quelques cycles, la commande **Charger** apparaît : martelez Triangle, et c'est fini. Il n'y a pas de piège, et se battre « normalement » ne ferait que rallonger inutilement.",
            "The visit's shortest fight, and it asks only one thing: play the Reaction Commands.\n\n**Wake Up**, triggered with Cogsworth's help, pins him for a few moments. Hit him during that, then start again.\n\nAfter a few cycles the **Release** command appears: mash Triangle, and it is over. There is no catch, and fighting him 'normally' would only drag it out.",
          ),
        },
        {
          id: "maillon-tenebreux",
          name: L("Maillon Ténébreux, puis Nervure", "Shadow Stalker, then Dark Thorn"),
          entry: "dark-thorn",
          level: "16",
          reward: L("Sora : +5 points de vie, Riposte, et l'élément de Soin. Donald : +3 points de vie. Dingo : un emplacement d'objet supplémentaire. La Bête : +35 points de vie.", "Sora: +5 HP, Counterguard, and the Cure element. Donald: +3 HP. Goofy: an extra item slot. The Beast: +35 HP."),
          tactics: L(
            "Un combat en deux formes, et la récompense est la magie de soin : il vaut la peine d'y arriver préparé.\n\n**Maillon Ténébreux** n'est pas costaud mais insaisissable : il traverse la salle en une seconde et se fond dans le décor. Chaque possession a sa parade — les fenêtres du fond tirent des lasers droit devant, un pilier fait bouger et frapper tous les piliers, le sol s'annonce par une lueur sous vos pieds (**sautez**), et le lustre descend tournoyer en projetant des lasers.\n\nUne fois possédé, l'élément possédé a peu de vie : videz-la, puis **Expulser** pour l'en extraire et le frapper. Répétez jusqu'à ce qu'il change de forme.\n\n**Nervure** est autrement sérieux. **Verrouillez immédiatement avec R1** : son invisibilité le rend très difficile à suivre autrement.\n\nAprès quelques coups, la chaîne **Bondir → Saisir → Centrifugeuse** devient disponible : c'est votre meilleure source de dégâts. Et quand il attrape Sora pour le faire tournoyer, tenez-vous prêt à déclencher **Lance-pierre** — la contre-attaque fait très mal.\n\nLa coopération avec la Bête est dévastatrice ici. Écartez-vous en revanche quand il s'accroche au chandelier et l'écrase au sol : l'onde de choc porte loin.",
            "One fight in two forms, and the reward is healing magic: it is worth arriving prepared.\n\n**Shadow Stalker** is not tough but it is elusive: it crosses the room in a second and melts into the scenery. Each possession has its answer — the far windows fire lasers straight ahead, a pillar sets every pillar moving and slamming, the floor announces itself with a glow under your feet (**jump**), and the chandelier comes down to spin and fire lasers.\n\nOnce possessed, the object has little HP: drain it, then **Release** to pull the Heartless out and strike. Repeat until it changes form.\n\n**Dark Thorn** is a different matter. **Lock on with R1 at once**: its invisibility makes it very hard to track otherwise.\n\nAfter a few hits, the **Bound → Grab → Cyclone** chain becomes available: that is your best source of damage. And when it grabs Sora and spins him, be ready to trigger **Slingshot** — the counter hurts badly.\n\nThe Beast's limit is devastating here. Do move away when it hangs from the chandelier and smashes it into the floor: the shockwave carries far.",
          ),
          attacks: [
            { name: L("Possession du sol", "Floor possession"), note: L("Une lueur apparaît sous Sora : sautez, sans attendre.", "A glow appears under Sora: jump, immediately.") },
            { name: L("Possession du lustre", "Chandelier possession"), note: L("Il descend et tournoie en projetant des lasers. Restez à distance.", "It comes down and spins, firing lasers. Keep your distance.") },
            { name: L("Saisie et tournoiement", "Grab and spin"), note: L("Lance-pierre : la contre-attaque la plus rentable du combat.", "Slingshot: the fight's most profitable counter.") },
          ],
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC ×3", "AP Boost ×3"), where: L("Un dans la cour, un dans le petit coffre du cachot, un dans le hall ouest derrière les armures.", "One in the courtyard, one in the dungeon's small chest, one in the west hall behind the armour.") },
        { kind: "ability", label: L("Élément de Soin", "Cure element"), where: L("La victoire sur Nervure, dans la salle de bal.", "Beating Dark Thorn, in the ballroom."), note: L("La magie la plus importante du jeu : placez-la en raccourci tout de suite.", "The game's most important magic: put it on a shortcut right away.") },
        { kind: "minigame", label: L("Six pièces de puzzle", "Six puzzle pieces"), where: L("Deux au cachot, deux dans les souterrains, une dans l'aile ouest, une dans la chambre de la Bête.", "Two in the dungeon, two in the basement, one in the west wing, one in the Beast's bedroom."), requires: L("Une des deux pièces des souterrains demande le Double saut de la Vaillance.", "One of the two basement pieces needs Valor Form's High Jump.") },
        { kind: "synthesis", label: L("Éclats de mithril, de force, ardent et hyalin, Pierre de vitalité", "Mythril, Power, Blazing and Lucid Shards, Serenity Stone"), where: L("Répartis dans la cour, les deux ailes et les souterrains.", "Spread across the courtyard, both wings and the basement.") },
      ],
    },
    {
      id: "forteresse-oubliee-2",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      subtitle: L("Deuxième visite — le livre de Winnie", "Second visit — Pooh's book"),
      world: "radiant-garden",
      level: "15",
      status: "done",
      intro: L(
        "Un passage très court — dix minutes — mais qui ouvre deux choses durables : la **Forêt des Rêves Bleus** et la **première invocation** du jeu.\n\nDes Sans-cœur se sont introduits chez Merlin, qui venait justement de retrouver le livre de Winnie en rangeant. La section se joue en aller-retour entre la maison et le livre, et se termine sur un livre déchiré et un Winnie qui ne reconnaît plus personne.\n\nAvant de commencer, faites une chose : **placez le sort Soin en raccourci**. Vous venez de l'obtenir au château de la Bête, et il ne sert à rien enfoui dans un menu.",
        "A very short stretch — ten minutes — but it opens two lasting things: the **Hundred Acre Wood** and the game's **first summon**.\n\nHeartless have got into Merlin's house, and he had just found Pooh's book again while tidying. The section plays out as a round trip between the house and the book, and ends on a torn book and a Pooh who no longer recognises anyone.\n\nBefore you start, do one thing: **put the Cure spell on a shortcut**. You have just earned it at Beast's Castle, and it is no use buried in a menu.",
      ),
      steps: [
        {
          id: "le-livre",
          title: L("La Forêt des Rêves Bleus", "The Hundred Acre Wood"),
          text: L(
            "Une fois la scène passée, examinez le livre que tient Donald pour entrer dans la **Forêt des Rêves Bleus**.\n\nPrenez l'arbre de papier à gauche pour rejoindre la maison de Winnie, et videz la zone de ses trois trésors : la **carte**, une **Pierre de mithril** et un **Bonus PC**. Parlez ensuite à l'ourson — vous êtes expulsé du livre peu après.",
            "Once the scene is over, examine the book Donald is holding to enter the **Hundred Acre Wood**.\n\nTake the paper tree on the left to reach Pooh's house, and strip the area of its three treasures: the **map**, a **Mythril Stone** and an **AP Boost**. Then talk to the bear — you are thrown out of the book shortly after.",
          ),
        },
        {
          id: "livre-dechire",
          title: L("Le livre déchiré, et Chicken Little", "The torn book, and Chicken Little"),
          text: L(
            "Les Sans-cœur sont revenus et se sont emparés du livre : éliminez-les pour le récupérer. Le combat n'est pas difficile, mais il a une conséquence — **le livre est déchiré**.\n\nRetournez-y aussitôt pour vérifier que Winnie va bien. Il va bien, mais il ne vous connaît plus : « le garçon que je ne connais pas ».\n\nDe retour chez Merlin, le magicien vous offre le **Pendentif batte** : c'est **Chicken Little**, votre première invocation. Il ne fait pas de gros dégâts mais rassemble et étourdit les groupes, ce qui vaut mieux qu'il n'y paraît.\n\nPour reprendre la Forêt des Rêves Bleus, il faudra désormais retrouver les **pages déchirées** dispersées dans les autres mondes — c'est une quête de fond, traitée à part dans les annexes.\n\nDirection le **Colisée de l'Olympe**.",
            "The Heartless are back and have taken the book: kill them to get it back. The fight is not hard, but it has a consequence — **the book is torn**.\n\nGo straight back in to check on Pooh. He is fine, but he does not know you any more: 'the boy I don't know'.\n\nBack at Merlin's, the wizard gives you the **Baseball Charm**: that is **Chicken Little**, your first summon. He does little damage but gathers and stuns groups, which is worth more than it looks.\n\nTo continue the Hundred Acre Wood, you will now have to find the **torn pages** scattered across the other worlds — a long-running hunt, covered separately in the reference pages.\n\nNext stop: **Olympus Coliseum**.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC", "AP Boost"), where: L("Dans la Forêt des Rêves Bleus, à la maison de Winnie.", "In the Hundred Acre Wood, at Pooh's house.") },
        { kind: "ability", label: L("Pendentif batte — Chicken Little", "Baseball Charm — Chicken Little"), where: L("De Merlin, après l'épisode du livre déchiré.", "From Merlin, after the torn-book episode."), note: L("La première invocation du jeu.", "The game's first summon.") },
        { kind: "synthesis", label: L("Pierre de mithril", "Mythril Stone"), where: L("À la maison de Winnie.", "At Pooh's house.") },
      ],
    },
    {
      id: "colisee",
      title: L("Colisée de l'Olympe", "Olympus Coliseum"),
      subtitle: L("Première visite", "First visit"),
      world: "olympus",
      level: "16",
      status: "done",
      intro: L(
        "La plus longue visite du premier tour, et la plus riche : quatre boss, deux zones entières à fouiller, et la magie **Foudre** en récompense finale.\n\nUne règle domine tout le passage : **aux Enfers, les Fusions et les invocations ne fonctionnent pas**. C'est la malédiction du lieu, et elle ne se lève qu'après Demyx, en récupérant la pierre de l'Olympe. Tout ce qui précède se joue donc à la Keyblade, à la magie et aux commandes réaction — pensez-y en équipant vos capacités.\n\nQuelques repères utiles dans les Enfers : les petites boules lumineuses sont inoffensives et lâchent des **orbes de magie** en éclatant, les torches donnent des **orbes de vie**, et les chutes de pierres font mal.\n\nUne sphère de ténèbres marquée d'un livre apparaît en chemin : c'est la **réplique de Zexion**, un défi de Final Mix. Il est bien trop tôt — notez-la et passez.",
        "The longest visit of the first round, and the richest: four bosses, two whole areas to comb, and the **Thunder** magic as the final reward.\n\nOne rule governs the whole stretch: **in the Underworld, Drive Forms and summons do not work**. That is the place's curse, and it only lifts after Demyx, once the Olympus Stone is recovered. Everything before that is played with the Keyblade, magic and Reaction Commands — bear it in mind when equipping abilities.\n\nA few useful landmarks in the Underworld: the small glowing balls are harmless and drop **MP orbs** when burst, the torches give **HP orbs**, and the falling rocks hurt.\n\nA dark sphere marked with a book appears along the way: that is the **Zexion replica**, a Final Mix challenge. It is far too early — note it and move on.",
      ),
      steps: [
        {
          id: "enfers",
          title: L("Les Enfers, et la fuite devant Hadès", "The Underworld, and the escape from Hades"),
          text: L(
            "Mégara vous demande de convaincre Hadès de laisser souffler Hercule. Passez la grande porte bleue.\n\nDans la grande zone circulaire, **suivez le mur de gauche** pour attraper une **pièce de puzzle** en l'air. Plus loin, un membre de l'Organisation s'enfuit dans la galerie.\n\nAu croisement : le passage droit devant donne une **Potion+** ; l'autre chemin, un **Éclat de mithril**, un **Éther** et un **Bonus PC**. Devant la sortie, une **Pierre de mithril**. La zone suivante a un point de sauvegarde, un Mog et deux coffres (**carte de la Caverne du Trépas**, **Éclat de mithril**).\n\nDans l'antre d'Hadès, le dieu et Pat préparent la transformation d'Hercule en Sans-cœur, et ressuscitent **Auron** pour cela. Auron se rebelle, Hadès attaque — et le combat révèle vite qu'**il est invincible chez lui**.\n\nLa fuite qui suit n'est pas un combat contre Hadès : le but est d'**éliminer les Sans-cœur pour faire tomber les trois barrières**. Hadès vous ralentit en lançant une boule de feu, **qui se pare**. Prenez Donald pour ses soins, et servez-vous de la coopération d'Auron. La dernière plate-forme est la plus dure : arrivez-y en forme.",
            "Megara asks you to talk Hades into giving Hercules a break. Go through the big blue door.\n\nIn the large circular area, **follow the left-hand wall** to grab a **puzzle piece** floating in the air. Further on, a member of the Organisation flees down the gallery.\n\nAt the junction: the passage straight ahead gives a **Hi-Potion**; the other path, a **Mythril Shard**, an **Ether** and an **AP Boost**. In front of the exit, a **Mythril Stone**. The next area has a save point, a moogle and two chests (**Cave of the Dead map**, **Mythril Shard**).\n\nIn Hades's chamber, the god and Pete are planning to turn Hercules into a Heartless, and revive **Auron** for the job. Auron rebels, Hades attacks — and the fight quickly shows that **he is invincible on his own ground**.\n\nThe escape that follows is not a fight against Hades: the point is to **kill the Heartless to bring down the three barriers**. Hades slows you with a fireball, **which can be guarded**. Take Donald for his healing, and use Auron's limit. The last platform is the hardest: arrive there in shape.",
          ),
        },
        {
          id: "colisee-phil",
          title: L("Le Colisée, et l'entraînement de Phil", "The Coliseum, and Phil's training"),
          text: L(
            "Cerbère battu, Auron quitte le groupe. Remontez vers le point de lumière : Hercule est épuisé, et la malédiction des Enfers est la cause. Le seul remède serait la **pierre de l'Olympe**. Vous recevez la **carte du Colisée**.\n\nPendant qu'Hercule part la chercher, Phil vous propose son entraînement. Le **mode maniaque** donne la capacité **Plongeon aérien** : c'est lui qu'il faut réussir.\n\nHercule revient avec une mauvaise nouvelle — la pierre a été volée par un homme en capuche noire — et une pire : **Mégara a été enlevée**. Hercule part affronter l'Hydre, vous redescendez aux Enfers.",
            "With Cerberus beaten, Auron leaves the party. Climb back to the point of light: Hercules is exhausted, and the Underworld's curse is why. The only cure would be the **Olympus Stone**. You receive the **Coliseum map**.\n\nWhile Hercules goes to fetch it, Phil offers his training. The **maniac mode** gives the **Aerial Dive** ability: that is the one to clear.\n\nHercules comes back with bad news — the stone has been stolen by a man in a black hood — and worse: **Megara has been taken**. Hercules leaves to face the Hydra, and you head back down.",
          ),
        },
        {
          id: "abimes",
          title: L("Les Abîmes infernaux", "The Underworld Caverns"),
          text: L(
            "Après une discussion avec Phil, un nouvel accès s'ouvre. Prenez le **Bonus Attaque** dans le gros coffre avant d'y aller.\n\nLa zone est noyée de brume et cache un gouffre : **sautez dans le vide et donnez un coup de Keyblade** pour attraper la pièce de puzzle. Un **Éclat de mithril** dans le coffre avant de passer.\n\nLongez le mur de droite jusqu'à un **Éther**. Retournez-vous : sur les deux voies, prenez **celle de droite** — la gauche est votre point d'arrivée — pour un **Éclat de vitalité**. La sortie à droite du coffre ramène à l'entrée des Abîmes, où attendent un **Bonus PC** et un **Éclat hyalin**.\n\nRetour dans le dédale : une **Pierre de mithril** à gauche, puis longez le mur gauche **en ignorant d'abord la sortie** pour atteindre un coffre (**Éclat de mithril**) et une **pièce de puzzle**. Vous pouvez ensuite prendre la sortie laissée de côté.\n\nDans l'atrium : une **Pierre hyaline**, une **pièce de puzzle**, et un **Bonus PC** en grimpant la pente et en sautant sur la petite plate-forme. De l'autre côté vous attend Demyx.",
            "After a word with Phil, a new way opens. Take the **Power Boost** from the large chest before going in.\n\nThe area is drowned in mist and hides a chasm: **jump into the void and swing the Keyblade** to catch the puzzle piece. A **Mythril Shard** in the chest before moving on.\n\nFollow the right-hand wall to an **Ether**. Turn around: of the two ways, take **the right one** — the left is where you came in — for a **Serenity Shard**. The exit right of the chest leads back to the Caverns' entrance, where an **AP Boost** and a **Lucid Shard** wait.\n\nBack in the maze: a **Mythril Stone** on the left, then follow the left wall **ignoring the exit at first** to reach a chest (**Mythril Shard**) and a **puzzle piece**. You can then take the exit you skipped.\n\nIn the atrium: a **Lucid Stone**, a **puzzle piece**, and an **AP Boost** by climbing the slope and jumping to the small platform. On the other side, Demyx is waiting.",
          ),
        },
        {
          id: "sceau",
          title: L("La Salle du sceau, et le Colisée dévasté", "The Chamber of Repose, and the ruined Coliseum"),
          text: L(
            "Demyx battu, la **pierre de l'Olympe** lève la malédiction : Fusions et invocations refonctionnent. Le **rapport d'Ansem n° 5** rejoint le carnet.\n\nDans la Salle du sceau : une **pièce de puzzle**, un **Éclat de mithril**, la **carte de la caverne** et un **Bonus PC**. **Sauvegardez**, puis examinez la pierre pour ouvrir un nouveau passage — Mégara y est, aux mains de Pat.\n\nAprès Pat, il n'y a pas de répit : l'Hydre a refait la décoration du Colisée, et c'est le vrai morceau final de la visite.\n\nLa récompense est l'**élément de Foudre** et la Keyblade **Emblème de Héros**. Le Château Disney est en danger : n'attendez pas.\n\nÀ noter : le **Bolet n° 6** est apparu au Colisée, pour qui suit la quête des Mushroom XIII.",
            "With Demyx beaten, the **Olympus Stone** lifts the curse: Drive Forms and summons work again. **Ansem's Report 5** joins the journal.\n\nIn the Chamber of Repose: a **puzzle piece**, a **Mythril Shard**, the **cave map** and an **AP Boost**. **Save**, then examine the stone to open a new passage — Megara is there, in Pete's hands.\n\nAfter Pete there is no rest: the Hydra has redecorated the Coliseum, and it is the visit's real finale.\n\nThe reward is the **Thunder element** and the **Hero's Crest** Keyblade. Disney Castle is in danger: do not linger.\n\nWorth noting: **Mushroom No. 6** has appeared at the Coliseum, for anyone following the Mushroom XIII hunt.",
          ),
        },
      ],
      tables: [
        {
          id: "entrainement",
          title: L("L'entraînement de Phil", "Phil's training"),
          intro: L(
            "Deux modes, et un seul compte vraiment : c'est le mode maniaque qui donne la capacité.",
            "Two modes, and only one really counts: the maniac mode is the one that gives the ability.",
          ),
          columns: [L("Mode", "Mode"), L("L'objectif", "The goal"), L("Ce qu'il faut savoir", "What to know")],
          rows: [
            at("Entraînement", ["20 orbes en 90 secondes, en détruisant les pots qui lévitent.", "20 orbs in 90 seconds, by smashing the floating pots."], ["Une formalité, et un échauffement.", "A formality, and a warm-up."]),
            at("Maniaque", ["100 orbes en 90 secondes.", "100 orbs in 90 seconds."], ["Au bout d'un moment, un **gros pot** apparaît : projetez-le dans un groupe de petits pour faire tomber une pluie d'orbes. C'est la seule façon d'atteindre 100. Récompense : **Plongeon aérien**.", "After a while a **large pot** appears: throw it into a group of small ones to bring down a shower of orbs. That is the only way to reach 100. Reward: **Aerial Dive**."]),
          ],
        },
      ],
      bosses: [
        {
          id: "cerbere",
          name: L("Cerbère", "Cerberus"),
          entry: "cerberus",
          level: "17",
          reward: L("Sora : Contre-garde. Auron : +40 points de vie.", "Sora: Counterguard. Auron: +40 HP."),
          tactics: L(
            "Donald et Dingo sont absents : vous n'avez qu'**Auron**, et donc pas de soin automatique. Sauvegardez et emportez des potions avant d'entrer.\n\nFrappez les **têtes** à la Keyblade. La magie est peu efficace ici, ce n'est pas la peine d'y dépenser ses points.\n\nQuand il bondit, écartez-vous : l'atterrissage provoque une **onde de choc de longue portée**. Quand il crache des boules d'énergie, la **Parade** les bloque proprement.\n\nTrois commandes réaction ponctuent le combat — **Esquiver**, **Sauter**, et **À la niche** quand le molosse tente d'enserrer Sora entre deux têtes. Cette dernière fait de gros dégâts **et** le paralyse : enchaînez immédiatement derrière.\n\nEt n'oubliez pas la coopération avec Auron : c'est votre plus grosse source de dégâts sur ce combat.",
            "Donald and Goofy are absent: you have only **Auron**, and therefore no automatic healing. Save and bring potions before going in.\n\nHit the **heads** with the Keyblade. Magic is ineffective here, there is no point spending MP on it.\n\nWhen he leaps, move: the landing causes a **long-range shockwave**. When he spits energy balls, **Guard** blocks them cleanly.\n\nThree Reaction Commands punctuate the fight — **Evade**, **Jump**, and **Bark** when the hound tries to pin Sora between two heads. That last one does heavy damage **and** stuns him: follow up immediately.\n\nAnd do not forget Auron's limit: it is your biggest source of damage in this fight.",
          ),
          attacks: [
            { name: L("Bond", "Leap"), note: L("L'atterrissage envoie une onde de choc qui porte loin. S'écarter.", "The landing sends out a shockwave that carries far. Move away.") },
            { name: L("Boules d'énergie", "Energy balls"), note: L("La Parade les bloque, au bon moment.", "Guard blocks them, on the right timing.") },
            { name: L("Saisie entre deux têtes", "Pinned between two heads"), note: L("À la niche : gros dégâts et paralysie. Le meilleur moment du combat.", "Bark: heavy damage and a stun. The fight's best moment.") },
          ],
        },
        {
          id: "demyx",
          name: L("Demyx", "Demyx"),
          entry: "demyx",
          level: "19",
          reward: L("Sora : +5 points de vie. Donald : Vaillance. Dingo : +4 points de vie. Et la pierre de l'Olympe.", "Sora: +5 HP. Donald: Valor Boost. Goofy: +4 HP. Plus the Olympus Stone."),
          tactics: L(
            "Ce n'est pas un combat, c'est un **compte à rebours** : Demyx ne vous affronte pas lui-même, il invoque des avatars d'eau à la sitar et vous regarde faire.\n\nL'objectif est net : **détruire 100 avatars en 80 secondes**. Au corps à corps, c'est impossible.\n\nLa réponse tient en une commande : **Contre-danse**. Déclenchez-la sans arrêt, elle balaie les avatars par paquets et c'est le seul rythme qui tient dans le temps imparti. Ne poursuivez jamais un avatar isolé — laissez-les venir et fauchez le groupe.",
            "This is not a fight, it is a **countdown**: Demyx does not face you himself, he summons water clones with his sitar and watches.\n\nThe objective is plain: **destroy 100 clones in 80 seconds**. In melee, that is impossible.\n\nThe answer is one command: **Wild Dance**. Trigger it constantly, it sweeps clones away in batches and it is the only pace that fits the time limit. Never chase a lone clone — let them come and mow down the group.",
          ),
        },
        {
          id: "pat-colisee",
          name: L("Pat Hibulaire", "Pete"),
          entry: "pete",
          level: "20",
          reward: L("Sora : Trinité. Donald : +3 points de vie. Dingo : Soin amical.", "Sora: Trinity Limit. Donald: +3 HP. Goofy: MP Gift."),
          tactics: L(
            "Deux phases, et la première n'est pas un combat mais une **escorte**.\n\nAu début, votre seul travail est de **tenir les Sans-cœur éloignés de Mégara** : la jauge de dégâts en haut à gauche est la sienne, et si elle se remplit c'est perdu. Pat, pendant ce temps, fait rouler une bombe au sol — **parez-la pour la lui renvoyer** —, frappe le sol pour une onde de choc, et lance des feux d'artifice. S'il s'entoure d'une sphère transparente, il se soigne.\n\nHercule finit par arriver : vous avez alors **deux minutes** pour en finir.\n\nQuand Pat se met sous bouclier, **Flipper** le désarçonne : les secondes qui suivent sont votre fenêtre à combos. Et la commande **Écran**, avec Hercule, vous protège de ses assauts.",
            "Two phases, and the first is not a fight but an **escort**.\n\nAt the start, your only job is to **keep the Heartless away from Megara**: the damage gauge at the top left is hers, and if it fills you lose. Pete meanwhile rolls a bomb along the ground — **guard it to send it back** —, slams the ground for a shockwave, and throws explosive fireworks. If he wraps himself in a transparent sphere, he is healing.\n\nHercules eventually arrives: you then have **two minutes** to finish it.\n\nWhen Pete raises his shield, **Pinball** knocks him off balance: the seconds that follow are your combo window. And the **Barrier** command, with Hercules, shields you from his attacks.",
          ),
        },
        {
          id: "hydre",
          name: L("L'Hydre", "The Hydra"),
          entry: "hydra",
          level: "21",
          reward: L("Sora : +5 points de vie et l'élément de Foudre. Donald : un emplacement d'armure supplémentaire. Dingo : +4 points de vie. Et la Keyblade Emblème de Héros.", "Sora: +5 HP and the Thunder element. Donald: an extra armour slot. Goofy: +4 HP. Plus the Hero's Crest Keyblade."),
          tactics: L(
            "Le combat le plus spectaculaire du premier tour, et il se lit en **trois phases**, une par nombre de têtes.\n\n**Une tête.** Frappez-la simplement. Sautez quand elle balance sa queue au ras du sol — elle le fait deux fois de suite. Elle invoque ensuite des éclairs et des orbes d'énergie, puis la commande **Vaincre** apparaît : elle tranche la tête. Trois repoussent.\n\n**Trois têtes.** Coupez-en une comme avant, puis **montez sur son dos** et déclenchez **Philaction** : Phil lance une jarre que Sora projette sur la créature, et **toutes les têtes se retrouvent à découvert et paralysées**. Déchaînez-vous, puis **Vaincre** à nouveau.\n\n**Sept têtes.** Elles partagent **une seule jauge de vie**, ce qui est une bonne nouvelle. Frappez normalement, mais écartez-vous quand elle fracasse ses sept têtes au sol : préparez-vous à **Vol de Pégase**, qui fait très mal. De retour au sol, continuez jusqu'à ce que **Vaincre** revienne pour le coup de grâce.\n\nMégara, à droite de l'arène, envoie des orbes de vie, de magie et de fusion : allez la voir quand ça devient serré.",
            "The most spectacular fight of the first round, and it reads in **three phases**, one per head count.\n\n**One head.** Just hit it. Jump when it sweeps its tail along the ground — it does so twice in a row. It then calls down lightning and throws energy orbs, and the **Vanquish** command appears: it cuts the head off. Three grow back.\n\n**Three heads.** Cut one off as before, then **climb onto its back** and trigger **Urninator**: Phil throws an urn that Sora slams into the creature, and **every head is exposed and stunned**. Let loose, then **Vanquish** again.\n\n**Seven heads.** They share **a single HP bar**, which is good news. Hit normally, but move away when it smashes all seven heads into the ground: be ready for **Pegasus Run**, which hurts badly. Back on the ground, keep going until **Vanquish** returns for the finishing blow.\n\nMegara, on the right of the arena, sends HP, MP and Drive orbs: go to her when things get tight.",
          ),
          attacks: [
            { name: L("Balayage de queue", "Tail sweep"), note: L("Deux fois de suite, au ras du sol. Sautez les deux.", "Twice in a row, at ground level. Jump both.") },
            { name: L("Philaction", "Urninator"), note: L("Depuis son dos : découvre et paralyse toutes les têtes d'un coup.", "From its back: exposes and stuns every head at once.") },
            { name: L("Sept têtes au sol", "Seven heads slammed down"), note: L("S'écarter, puis Vol de Pégase. La plus grosse fenêtre de dégâts du combat.", "Move away, then Pegasus Run. The fight's biggest damage window.") },
          ],
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC ×4 et Bonus Attaque", "AP Boost ×4 and Power Boost"), where: L("Galerie des Enfers, entrée des Abîmes, atrium, Salle du sceau ; le Bonus Attaque dans le gros coffre avant les Abîmes.", "The Underworld gallery, the Caverns' entrance, the atrium, the Chamber of Repose; the Power Boost in the large chest before the Caverns.") },
        { kind: "ability", label: L("Plongeon aérien", "Aerial Dive"), where: L("Réussir le mode maniaque de l'entraînement de Phil.", "Clear the maniac mode of Phil's training.") },
        { kind: "ability", label: L("Élément de Foudre", "Thunder element"), where: L("La victoire sur l'Hydre.", "Beating the Hydra.") },
        { kind: "keyblade", label: L("Emblème de Héros", "Hero's Crest"), where: L("La victoire sur l'Hydre.", "Beating the Hydra.") },
        { kind: "report", label: L("Rapport d'Ansem n° 5", "Ansem's Report 5"), where: L("Avec la pierre de l'Olympe, après Demyx.", "With the Olympus Stone, after Demyx.") },
        { kind: "minigame", label: L("Cinq pièces de puzzle", "Five puzzle pieces"), where: L("Le long du mur des Enfers, dans le gouffre embrumé, au fond du dédale, dans l'atrium et dans la Salle du sceau.", "Along the Underworld wall, in the misty chasm, at the back of the maze, in the atrium and in the Chamber of Repose.") },
      ],
      missable: [
        L("Rien n'est perdu ici — le Colisée se revisite —, mais la **réplique de Zexion** croisée en chemin est un défi de Final Mix bien trop dur à ce stade : revenez-y beaucoup plus tard.", "Nothing is lost here — the Coliseum can be revisited — but the **Zexion replica** met along the way is a Final Mix challenge far too hard at this point: come back to it much later."),
      ],
    },
    {
      id: "chateau-disney",
      title: L("Château Disney", "Disney Castle"),
      subtitle: L("Première visite", "First visit"),
      world: "disney-castle",
      level: "18",
      status: "done",
      intro: L(
        "La maison de Donald et Dingo, envahie — et le seul monde du jeu où les deux compagnons sont chez eux.\n\nLa visite est courte et se joue surtout dans le **jardin**, qui concentre sept coffres et trois pièces de puzzle. Les **Colonnades**, juste après, débordent de Sans-cœur : c'est l'un des meilleurs endroits du premier tour pour **monter la Vaillance**, et il serait dommage de les traverser en courant.\n\nElle se termine sur une découverte : la **Pierre angulaire de Lumière**, qui protège le château, est étouffée sous les ronces de Maléfique.",
        "Donald and Goofy's home, overrun — and the only world in the game where the two companions are on their own ground.\n\nThe visit is short and plays out mostly in the **courtyard**, which holds seven chests and three puzzle pieces. The **Colonnade** just after is crawling with Heartless: it is one of the first round's best spots to **level Valor Form**, and it would be a shame to run through it.\n\nIt ends on a discovery: the **Cornerstone of Light** that protects the castle is smothered under Maleficent's thorns.",
      ),
      steps: [
        {
          id: "jardin",
          title: L("Le jardin, et ses sept coffres", "The courtyard, and its seven chests"),
          text: L(
            "Sept coffres, et plus de Sans-cœur encore. Au pied du **château végétal central**, un **Éclat ardent** ; en grimpant dessus, une **pièce de puzzle** et une **Formule d'élixir**.\n\nLe reste est réparti sur les plates-formes du **pourtour de la carte** : une **Pierre ardente**, un **Bonus PC**, un **Éclat de mithril**, une **Pierre de mithril** et un second **Éclat de mithril**, plus **deux pièces de puzzle**.\n\nTraversez ensuite les Colonnades — sans vous presser, c'est du niveau facile — jusqu'à la bibliothèque, au fond. Un coffre y contient une **Page déchirée** : prenez-la **avant** de parler à la reine Minnie, qui vous remet la **carte**.",
            "Seven chests, and even more Heartless. At the foot of the **central topiary castle**, a **Blazing Shard**; climbing on it, a **puzzle piece** and a **Mega-Ether**.\n\nThe rest is spread across the platforms around the **edge of the map**: a **Blazing Stone**, an **AP Boost**, a **Mythril Shard**, a **Mythril Stone** and a second **Mythril Shard**, plus **two puzzle pieces**.\n\nThen cross the Colonnade — take your time, it is easy levelling — to the library at the far end. A chest there holds a **Torn Page**: take it **before** talking to Queen Minnie, who hands over the **map**.",
          ),
        },
        {
          id: "escorte",
          title: L("L'escorte de la reine", "Escorting the queen"),
          text: L(
            "Donald et Dingo partent prévenir les habitants : vous restez seul avec **Minnie**, qu'il faut mener jusqu'à la salle d'audience.\n\nC'est plus simple qu'il n'y paraît : **enchaînez la commande réaction Sidéral** sans interruption et rien ne vous atteint. Les portes s'ouvrent ensuite avec **Et voilà**.\n\nLa seconde zone grouille d'**Électro-tours**, et leurs ondes de choc deviennent franchement dangereuses quand plusieurs partent en même temps. Deux options : foncer au trône sous Sidéral, ou nettoyer méthodiquement pour l'expérience. La seconde vaut le détour à ce stade du jeu.\n\nDevant le trône, **Et voilà** à nouveau : la reine déclenche un mécanisme, une source de lumière balaie tous les Sans-cœur de la salle, et vous accédez à la **Pierre angulaire de Lumière** — entièrement prise dans les ronces.\n\nDirection la maison de Merlin, par le point de sauvegarde. Merlin vous ramène au château et ouvre un passage vers un monde à part, celui-là même qui a servi de porte d'entrée aux Sans-cœur.",
            "Donald and Goofy go to warn the residents: you stay alone with **Minnie**, who has to be escorted to the Audience Chamber.\n\nIt is simpler than it looks: **chain the Faith Reaction Command** without a break and nothing touches you. The doors then open with **Unlock**.\n\nThe second area is swarming with **Bolt Towers**, and their shockwaves become genuinely dangerous when several go off at once. Two options: dash to the throne under Faith, or clear it methodically for the experience. The second is worth it at this point in the game.\n\nIn front of the throne, **Unlock** again: the queen triggers a mechanism, a source of light sweeps every Heartless from the room, and you reach the **Cornerstone of Light** — completely swallowed by thorns.\n\nOff to Merlin's house, via the save point. Merlin brings you back to the castle and opens a way into a world of its own — the very one the Heartless used as their door.",
          ),
        },
      ],
      bosses: [
        {
          id: "escorte-minnie",
          name: L("Escorter la reine Minnie", "Escorting Queen Minnie"),
          entry: "minnie",
          level: "18",
          reward: L("Un emplacement d'accessoire supplémentaire, et la compétence Invocation auto.", "An extra accessory slot, and the Auto Summon ability."),
          tactics: L(
            "Ce n'est pas un combat mais une escorte, et elle a une solution unique : **Sidéral**.\n\nLa commande réaction protège Minnie et balaie ce qui approche. Tant que vous l'enchaînez, il ne se passe rien de fâcheux. Le seul moyen de rater cette épreuve est de vouloir se battre normalement.\n\nDans la salle d'audience, les **Électro-tours** changent la donne : leurs ondes de choc se cumulent. Si vous choisissez de nettoyer la zone pour l'expérience — et c'est un bon choix ici —, traitez-les une par une plutôt que de vous laisser encercler.",
            "This is not a fight but an escort, and it has one solution: **Faith**.\n\nThe Reaction Command shields Minnie and sweeps away whatever comes close. As long as you keep chaining it, nothing goes wrong. The only way to fail this trial is to try to fight normally.\n\nIn the Audience Chamber, the **Bolt Towers** change things: their shockwaves stack. If you choose to clear the area for the experience — and that is a good choice here — take them one at a time rather than letting yourself get surrounded.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC", "AP Boost"), where: L("Sur l'une des plates-formes du pourtour du jardin.", "On one of the platforms around the edge of the courtyard.") },
        { kind: "journal", label: L("Page déchirée", "Torn Page"), where: L("Dans le coffre de la bibliothèque, avant de parler à Minnie.", "In the library chest, before talking to Minnie.") },
        { kind: "minigame", label: L("Trois pièces de puzzle", "Three puzzle pieces"), where: L("Une sur le château végétal central, deux sur les plates-formes du pourtour.", "One on the central topiary castle, two on the platforms around the edge.") },
        { kind: "ability", label: L("Invocation auto, et un emplacement d'accessoire", "Auto Summon, and an accessory slot"), where: L("L'escorte de la reine Minnie.", "Escorting Queen Minnie.") },
      ],
    },
    {
      id: "riviere-intemporelle",
      title: L("Rivière Intemporelle", "Timeless River"),
      subtitle: L("Le passé du château", "The castle's past"),
      world: "timeless-river",
      level: "19",
      status: "done",
      intro: L(
        "Le monde le plus singulier du jeu : une version du Château Disney d'avant sa construction, entièrement **en noir et blanc**, à laquelle on accède par la porte que Merlin a ouverte.\n\nLa structure est simple et agréable : quatre **fenêtres temporelles** sur la colline, chacune menant à une scène à nettoyer, et une jauge **Désastre** qui remplace la barre de vie comme condition d'échec.\n\nÀ la sortie vous attendent la Fusion **Sagesse**, la Keyblade **Monochrome** et deux nouvelles routes — Atlantica et Port Royal.\n\nUne précision utile : la pièce de puzzle au sommet de l'arbre de l'embarcadère est **hors de portée pour l'instant**. Notez-la.",
        "The game's most singular world: a version of Disney Castle from before it was built, entirely **in black and white**, reached through the door Merlin opened.\n\nThe structure is simple and enjoyable: four **time windows** on the hill, each leading to a scene to clear, and a **Disaster** gauge that replaces the HP bar as the failure condition.\n\nWaiting at the exit are the **Wisdom** Drive Form, the **Monochrome** Keyblade and two new routes — Atlantica and Port Royal.\n\nOne useful note: the puzzle piece at the top of the tree by the pier is **out of reach for now**. Make a note of it.",
      ),
      steps: [
        {
          id: "colline",
          title: L("La colline et l'embarcadère", "The hill and the pier"),
          text: L(
            "Le gros coffre donne la **carte de la colline de la Pierre angulaire**, le petit un **Éclat glacial**. Un Mog et un point de sauvegarde sont sur place.\n\nSur l'embarcadère : une **Potion+**, un **Éclat de mithril** et une **pièce de puzzle**.\n\nLe combat contre Pat qui suit n'a rien d'inquiétant — sautez pour esquiver l'onde de choc de sa retombée, et déclenchez **Volte-face** quand il se met à courir. Vous découvrez ensuite qu'il y a méprise : ce Pat-là n'est pas le vôtre.\n\nAvant de vous occuper des fenêtres, prenez le passage derrière elles — la pancarte **Waterway**. Sur la Rive : trois coffres (**Pierre glaciale**, **Pierre de mithril**, **Bonus PC**) et une **pièce de puzzle**.",
            "The large chest gives the **Cornerstone Hill map**, the small one a **Frost Shard**. A moogle and a save point are on site.\n\nOn the pier: a **Hi-Potion**, a **Mythril Shard** and a **puzzle piece**.\n\nThe fight against Pete that follows is nothing to worry about — jump to dodge the shockwave when he lands, and trigger **Reversal** when he starts running. You then find out there has been a mix-up: this Pete is not yours.\n\nBefore dealing with the windows, take the passage behind them — the **Waterway** sign. On the Waterway: three chests (**Frost Stone**, **Mythril Stone**, **AP Boost**) and a **puzzle piece**.",
          ),
        },
        {
          id: "fenetres",
          title: L("Les quatre fenêtres", "The four windows"),
          text: L(
            "Chaque fenêtre examinée envoie dans une scène du passé à débarrasser de ses Sans-cœur, avant que la jauge **Désastre** ne se remplisse.\n\nChaque zone nettoyée vous vaut les félicitations du « Roi Mickey » et ouvre une fenêtre révélant les coupables : Pat — celui du présent — et Maléfique.\n\nUne fois la **carte de la fenêtre temporelle** obtenue, rendez-vous à la rive : l'ex-capitaine du bateau à vapeur s'apprête à filer avec la Pierre angulaire.",
            "Each window examined sends you into a scene from the past to clear of Heartless, before the **Disaster** gauge fills.\n\nEach area cleared earns you 'King Mickey's' congratulations and opens a window revealing the culprits: Pete — the present-day one — and Maleficent.\n\nOnce you have the **time window map**, head to the Waterway: the former steamboat captain is about to make off with the Cornerstone.",
          ),
        },
      ],
      tables: [
        {
          id: "scenes",
          title: L("Les quatre scènes du passé", "The four scenes from the past"),
          intro: L(
            "Même principe partout — nettoyer avant que la jauge Désastre ne se remplisse — mais chacune a son mécanisme propre, et c'est lui qui décide de la méthode.",
            "The same principle throughout — clear before the Disaster gauge fills — but each has its own mechanism, and that is what decides the method.",
          ),
          columns: [L("Scène", "Scene"), L("Ce qu'il s'y passe", "What happens there"), L("Comment s'y prendre", "How to handle it")],
          rows: [
            at("Le chantier", ["Des Marteau-pilons et des Minute bombes, sur un échafaudage qui bouge.", "Hammer Frames and Minute Bombs, on a moving scaffold."], ["La jauge décompte le temps. Quand l'échafaudage vous projette en l'air, la commande **Vrille** devient disponible : c'est votre meilleur nettoyage.", "The gauge counts down time. When the scaffold launches you into the air, the **Twister** command becomes available: that is your best sweep."]),
            at("Lilliput", ["Des Barons-bleus et des Marteau-pilons démolissent une ville miniature.", "Luna Bandits and Hammer Frames are wrecking a miniature town."], ["Approchez-vous de la tour pour activer **Mini canon**, qui éloigne les ennemis des bâtiments.", "Get close to the tower to trigger **Mini Cannon**, which drives enemies away from the buildings."]),
            at("L'immeuble en feu", ["La jauge monte à chaque coup porté au bâtiment.", "The gauge rises with every hit the building takes."], ["Aller vite, et se méfier des assauts combinés des deux **Chauffards** et des flammes qui se déplacent dans la zone.", "Move fast, and watch for the two **Hot Rods** attacking together and the flames wandering the area."]),
            at("La maison de Mickey", ["Les Sans-cœur démolissent la maison, et un vortex aspire les meubles.", "The Heartless are wrecking the house, and a vortex sucks in the furniture."], ["**Frapper le vortex** calme la tempête quelques instants : c'est le seul répit du lot.", "**Hitting the vortex** calms the storm for a few moments: it is the only respite of the four."]),
          ],
        },
      ],
      bosses: [
        {
          id: "pat-bateau",
          name: L("Pat Hibulaire — le bateau à vapeur", "Pete — the steamboat"),
          entry: "pete",
          level: "20",
          reward: L("Sora : Moulinets. Donald : Fantasia et Auto-coopération. Dingo : +4 points de vie.", "Sora: Slapshot. Donald: Fantasia and Auto Limit. Goofy: +4 HP."),
          tactics: L(
            "Un combat scénarisé plutôt qu'un affrontement, et il se joue entièrement aux commandes réaction.\n\nPat fuit avec le bateau en vous lançant des objets : **renvoyez-les avec Triangle**. Il perd le contrôle, le navire percute la rive et s'y immobilise un moment.\n\nDéclenchez alors **Attraper** pour que Sora se suspende à la corde de la grue, et frappez la **cage** qui contient la Pierre angulaire. Quand la grue s'apprête à bouger, **Cramponner** évite la chute.\n\nSi vous lâchez prise, il faut battre des Sans-cœur avant de pouvoir remonter : ça ne coûte que du temps, mais autant ne pas lâcher.",
            "A scripted fight rather than a real one, and it plays out entirely on Reaction Commands.\n\nPete flees with the boat, throwing objects at you: **send them back with Triangle**. He loses control, the ship hits the bank and sits there for a while.\n\nThen trigger **Grab** so Sora hangs from the crane's rope, and hit the **cage** holding the Cornerstone. When the crane is about to move, **Hang On** stops you falling.\n\nIf you let go, you have to beat Heartless before climbing back: it only costs time, but there is no reason to let go.",
          ),
        },
        {
          id: "pat-quai",
          name: L("Pat Hibulaire — le quai", "Pete — the wharf"),
          entry: "pete",
          level: "21",
          reward: L("Sora : +5 points de vie et l'élément de Miroir. Donald : +3 points de vie. Dingo : Dingo-tornade. Et la Keyblade Monochrome.", "Sora: +5 HP and the Reflect element. Donald: +3 HP. Goofy: Tornado Fusion. Plus the Monochrome Keyblade."),
          tactics: L(
            "Cette fois c'est un vrai combat, avec le Pat du passé pour allié — un allié encombrant, dont **les charges vous blessent aussi**. Déclenchez **Volte-face** quand il arrive sur vous.\n\nLes attaques de Pat sont celles du Colisée : vous les connaissez déjà.\n\nCe qui change, c'est le décor : il se transforme à mesure que sa vie baisse, et chaque décor ajoute une contrainte. **L'immeuble en feu** — il projette des flammes **qui ne se parent pas**. **La maison de Mickey** — ne vous faites pas aspirer par le vortex. **Lilliput** — attention aux tirs de canon. **Le chantier** — et là, c'est vous qui reprenez l'avantage, avec la commande **Vrille**.\n\nLa victoire donne **Monochrome**, l'élément de **Miroir**, et surtout la seconde Fusion : **Sagesse**.",
            "This time it is a real fight, with the past Pete as an ally — an awkward one, whose **charges hurt you too**. Trigger **Reversal** when he comes at you.\n\nPete's attacks are the ones from the Coliseum: you already know them.\n\nWhat changes is the setting: it shifts as his HP drops, and each one adds a constraint. **The burning building** — he throws flames that **cannot be guarded**. **Mickey's house** — do not get sucked into the vortex. **Lilliput** — watch the cannon fire. **The construction site** — and there, the advantage swings back to you, with the **Twister** command.\n\nWinning gives **Monochrome**, the **Reflect** element, and above all the second Drive Form: **Wisdom**.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC", "AP Boost"), where: L("Sur la Rive, par le passage derrière les fenêtres (pancarte Waterway).", "On the Waterway, through the passage behind the windows (Waterway sign).") },
        { kind: "keyblade", label: L("Monochrome", "Monochrome"), where: L("La victoire sur Pat, au quai.", "Beating Pete at the wharf.") },
        { kind: "ability", label: L("Élément de Miroir, et la Fusion Sagesse", "Reflect element, and the Wisdom Form"), where: L("La fin de la visite.", "The end of the visit.") },
        { kind: "minigame", label: L("Deux pièces de puzzle", "Two puzzle pieces"), where: L("Sur l'embarcadère et sur la Rive.", "On the pier and on the Waterway."), note: L("Celle au sommet de l'arbre de l'embarcadère reste hors de portée pour l'instant.", "The one at the top of the tree by the pier stays out of reach for now.") },
      ],
    },
    {
      id: "port-royal",
      title: L("Port Royal", "Port Royal"),
      subtitle: L("Première visite", "First visit"),
      world: "port-royal",
      level: "20",
      status: "done",
      intro: L(
        "Le monde des Pirates des Caraïbes, et une règle qui gouverne tout le passage : **les pirates fantômes ne sont vulnérables que dans le clair de lune**. Frappés dans l'ombre, ils encaissent sans rien sentir.\n\nDeux conséquences pratiques. D'abord, cherchez toujours **où tombe la lumière** avant d'engager. Ensuite, la magie garde ses effets même dans l'ombre : **Glacier et Foudre les paralysent**, ce qui vous laisse le temps de les amener au bon endroit.\n\nLa visite alterne exploration à terre et scènes à bord, avec deux épreuves de protection — garder la pièce, empêcher le navire d'exploser — avant Barbossa.\n\nÀ noter : la **réplique de Larxene** apparaît sur l'île de la Muerta. Comme Zexion au Colisée, c'est un défi de Final Mix : bien trop tôt.",
        "The Pirates of the Caribbean world, and one rule governs the whole visit: **the undead pirates are only vulnerable in moonlight**. Struck in shadow, they take the hit and feel nothing.\n\nTwo practical consequences. First, always look for **where the light falls** before engaging. Second, magic keeps working in the dark: **Blizzard and Thunder stun them**, which buys you time to move them into the right place.\n\nThe visit alternates exploration ashore with scenes aboard ship, with two protection trials — keep the medallion, stop the ship exploding — before Barbossa.\n\nWorth noting: the **Larxene replica** appears on the Isla de Muerta. Like Zexion at the Coliseum, it is a Final Mix challenge: far too early.",
      ),
      steps: [
        {
          id: "remparts",
          title: L("Les remparts et la ville", "The ramparts and the town"),
          text: L(
            "Des cris montent d'en bas. Résistez à l'envie de descendre : prenez d'abord la **carte maritime** dans le coffre posé sur les remparts, puis explorez l'autre versant pour un **Éclat noir**, une **Pierre de mithril** et une **pièce de puzzle**.\n\nDescendez l'escalier près du point de sauvegarde : Pat vous attend, accompagné de **pirates fantômes**. C'est votre première rencontre avec eux, et vous découvrez vite l'essentiel — la Keyblade ne leur fait rien. Utilisez **Pare-balles** contre leurs tirs, esquivez les bombes, et attendez la seconde phase, où le clair de lune les rend enfin vulnérables.\n\nPrenez le pont de pierre vers la ville. Un groupe de Sans-cœur vous y attend, dont des **Bombardes** et leur viseur lumineux. Vous rencontrez **Will Turner**, et assistez à l'enlèvement d'**Elizabeth**.\n\nÀ gauche, une **pièce de puzzle**. Frappez les caisses d'explosifs pour dégager le passage, puis la ruelle de droite : une **Pierre noire** au bout, et d'autres caisses qui révèlent une **Gemme de mithril** au nord et un passage au sud. Un **Bonus PC** se cache derrière d'autres caisses en face, et un **Éclat de mithril** traîne dans la même ruelle.\n\nAu port, **Jack Sparrow** rejoint l'équipe. Parlez à Will pour embarquer sur l'Intercepteur — la cale contient une boutique et un point de sauvegarde, ça vaut le détour — puis parlez à Jack et choisissez le Black Pearl.",
            "Cries rise from below. Resist the urge to run down: first take the **harbour map** from the chest on the ramparts, then explore the other side for a **Dark Shard**, a **Mythril Stone** and a **puzzle piece**.\n\nGo down the stairs near the save point: Pete is waiting, with **undead pirates**. It is your first meeting with them, and you quickly learn the essential — the Keyblade does nothing to them. Use **Bulletproof** against their shots, dodge the bombs, and wait for the second phase, where moonlight finally makes them vulnerable.\n\nTake the stone bridge into town. A group of Heartless waits there, including **Cannon Guns** and their glowing sights. You meet **Will Turner**, and watch **Elizabeth** being taken.\n\nOn the left, a **puzzle piece**. Hit the explosive crates to clear the way, then the alley on the right: a **Dark Stone** at the end, and more crates revealing a **Mythril Gem** to the north and a passage to the south. An **AP Boost** hides behind more crates opposite, and a **Mythril Shard** lies in the same alley.\n\nAt the harbour, **Jack Sparrow** joins the party. Talk to Will to board the Interceptor — the hold has a shop and a save point, worth the detour — then talk to Jack and choose the Black Pearl.",
          ),
        },
        {
          id: "muerta",
          title: L("L'île de la Muerta", "The Isla de Muerta"),
          text: L(
            "La poursuite mène à l'île. Jack et Will filent au secours d'Elizabeth en vous laissant sur place — Sora ne l'entend pas ainsi.\n\nL'entrée de la caverne donne un **Éclat de vitalité** et un **Éclat de mithril**. Quelques pas plus loin, Will et Elizabeth reviennent en courant, poursuivis : **tenez les pirates une minute**, le temps que l'Intercepteur appareille. Même règle que toujours — attendez le clair de lune.\n\nVous obtenez la **carte de l'île de la Muerta** et repartez automatiquement. Demandez à Will de voguer vers Port Royal : le Black Pearl vous rattrape, et les pirates veulent la pièce.",
            "The chase leads to the island. Jack and Will rush off to rescue Elizabeth, leaving you behind — Sora will have none of it.\n\nThe cave entrance gives a **Serenity Shard** and a **Mythril Shard**. A few steps further, Will and Elizabeth come running back with pursuers: **hold the pirates off for one minute** while the Interceptor gets under way. Same rule as always — wait for the moonlight.\n\nYou receive the **Isla de Muerta map** and return automatically. Ask Will to sail for Port Royal: the Black Pearl catches you, and the pirates want the medallion.",
          ),
        },
        {
          id: "tresor",
          title: L("La poudrière et la salle du trésor", "The powder store and the treasure room"),
          text: L(
            "De retour sur l'île, le symbole de la **réplique de Larxene** vous fait face : notez-le et passez.\n\nLa **poudrière** porte bien son nom. Le premier baril à gauche cache un pirate **et** un **Bonus PC**. Ceux d'après révèlent deux ennemis, un second **Bonus PC** et **deux pièces de puzzle**.\n\nLa salle du clair de lune contient un **Éclat de mithril**, une **Gemme de sérénité** et une **Pierre de force**.\n\nDirection la salle du trésor, où Barbossa vous attend.\n\nUne fois le monde terminé, la boussole de Jack ouvre deux routes — Agrabah et la Ville d'Halloween. Prenez **Agrabah** d'abord.\n\nEt revenez à Port Royal quand vous pourrez atterrir sur le **Black Pearl** : une **pièce de puzzle** sur la table près du point de sauvegarde, une autre sur la plate-forme du gouvernail. Will propose aussi un mini-jeu sur les remparts.",
            "Back on the island, the **Larxene replica**'s sigil faces you: note it and move on.\n\nThe **powder store** lives up to its name. The first barrel on the left hides a pirate **and** an **AP Boost**. The ones after reveal two enemies, a second **AP Boost** and **two puzzle pieces**.\n\nThe moonlight room holds a **Mythril Shard**, a **Serenity Gem** and a **Power Stone**.\n\nOn to the treasure room, where Barbossa is waiting.\n\nOnce the world is done, Jack's compass opens two routes — Agrabah and Halloween Town. Take **Agrabah** first.\n\nAnd come back to Port Royal when you can land on the **Black Pearl**: a **puzzle piece** on the table near the save point, another on the helm platform. Will also offers a mini-game on the ramparts.",
          ),
        },
      ],
      bosses: [
        {
          id: "garder-piece",
          name: L("Garder la pièce", "Keeping the medallion"),
          entry: "pirate",
          level: "21",
          reward: L("Sora : Vrille aérienne. Donald : Attraction. Dingo : +4 points de vie.", "Sora: Aerial Spiral. Donald: Draw. Goofy: +4 HP."),
          tactics: L(
            "Une épreuve de position plus qu'un combat.\n\nLes pirates ne sont vulnérables qu'au clair de lune, et **la poupe du navire est l'endroit le mieux éclairé** : c'est là qu'il faut les amener, pas ailleurs.\n\nLa vraie contrainte est autre : **chaque explosion qui touche Sora lui fait lâcher la pièce**. Évitez les boulets de canon à tout prix. Vous pouvez répliquer avec vos propres canons, mais vous êtes vulnérable pendant la manœuvre — à ne faire qu'avec une fenêtre nette.\n\nSi un pirate s'empare de la pièce, vous avez **60 secondes**. Pour trouver le voleur, **ciblez les pirates un par un** : une icône apparaît au-dessus de celui qui la détient. Battez-le, puis passez sur la pièce pour la reprendre.",
            "A positioning trial more than a fight.\n\nThe pirates are only vulnerable in moonlight, and **the stern of the ship is the best-lit spot**: that is where you want them, nowhere else.\n\nThe real constraint is elsewhere: **every explosion that hits Sora makes him drop the medallion**. Avoid the cannonballs at all costs. You can fire back with your own cannons, but you are vulnerable during the command — only do it on a clear window.\n\nIf a pirate takes the medallion, you have **60 seconds**. To find the thief, **lock onto the pirates one by one**: an icon appears above whoever holds it. Beat him, then walk over the medallion to take it back.",
          ),
        },
        {
          id: "barils",
          name: L("Empêcher le navire d'exploser", "Stopping the ship exploding"),
          entry: "jack-sparrow",
          level: "22",
          reward: L("Sora : un emplacement d'objet supplémentaire. Donald : +3 points de vie. Dingo : Dernières forces. Jack : +10 points de vie.", "Sora: an extra item slot. Donald: +3 HP. Goofy: Last Stand. Jack: +10 HP."),
          tactics: L(
            "Avant de commencer, deux réglages : **réactivez les compétences de Jack**, et **désactivez l'auto-coopération de Donald et Dingo** — elle se déclenche au mauvais moment et vous coûte des secondes.\n\nL'épreuve elle-même est simple si on comprend ce qu'elle demande : **éjecter les cinq barils de poudre** à la commande réaction. Les Sans-cœur essaient de les allumer, et le réflexe est de vouloir les tuer d'abord.\n\nC'est l'erreur. **Concentrez-vous sur les barils, pas sur les Sans-cœur** : à ce rythme, l'épreuve est une formalité. Ne vous occupez d'un ennemi que s'il est sur le point de faire sauter un baril que vous n'avez pas encore éjecté.",
            "Before you start, two settings: **re-enable Jack's abilities**, and **turn off Donald and Goofy's auto-limit** — it fires at the wrong moment and costs you seconds.\n\nThe trial itself is simple once you see what it asks: **eject the five powder barrels** with the Reaction Command. The Heartless try to light them, and the instinct is to kill them first.\n\nThat is the mistake. **Focus on the barrels, not the Heartless**: at that pace the trial is a formality. Only deal with an enemy if it is about to set off a barrel you have not ejected yet.",
          ),
        },
        {
          id: "barbossa",
          name: L("Barbossa", "Barbossa"),
          entry: "barbossa",
          level: "23",
          reward: L("Sora : une jauge de flux supplémentaire et Spirale ascensionnelle. Donald : +3 points de vie. Dingo : Partenariat et Auto-coopération. Jack : +15 points de vie. Et la Keyblade Gouvernail.", "Sora: an extra Drive bar and Aerial Finish. Donald: +3 HP. Goofy: Teamwork and Auto Limit. Jack: +15 HP. Plus the Rumbling Rose Keyblade."),
          tactics: L(
            "Une règle avant tout le reste : **si Jack tombe, le combat est perdu**. Surveillez-le autant que vous.\n\nBarbossa n'est pas seul. Un Sans-cœur, l'**Iguane d'ombre**, plonge toute l'arène dans le noir — et comme les pirates ne sont vulnérables qu'au clair de lune, c'est lui le vrai problème, pas Barbossa.\n\n**C'est donc lui qu'on attaque en premier.** Quelques coups suffisent, mais il revient régulièrement : **tournez la caméra autour de vous et cherchez ses yeux jaunes** dans l'obscurité. Le combat entier est fait de ces allers-retours.\n\nBarbossa, lui, lance des bombes, tire au pistolet et charge. Ses attaques au corps à corps sont redoutables : **frappez-le au Glacier à distance** d'abord, puis à la Keyblade quand il est entamé.\n\nQuand les points de magie tombent à zéro, passez en **Sagesse** : elle les régénère, et vous repartez pour un cycle.",
            "One rule above all: **if Jack goes down, the fight is lost**. Watch him as closely as yourself.\n\nBarbossa is not alone. A Heartless, the **Illuminator**, plunges the whole arena into darkness — and since pirates are only vulnerable in moonlight, that is the real problem, not Barbossa.\n\n**So it is the Heartless you attack first.** A few hits are enough, but it comes back regularly: **swing the camera around you and look for its yellow eyes** in the dark. The entire fight is made of these round trips.\n\nBarbossa himself throws bombs, fires his pistol and charges. His melee is fearsome: **hit him with Blizzard from range** first, then with the Keyblade once he is worn down.\n\nWhen your MP hits zero, switch to **Wisdom Form**: it regenerates MP, and you go round again.",
          ),
          attacks: [
            { name: L("L'obscurité", "The darkness"), note: L("Elle vient de l'Iguane d'ombre. Tant qu'il est là, Barbossa est intouchable.", "It comes from the Illuminator. While it is there, Barbossa cannot be touched.") },
            { name: L("Corps à corps", "Melee"), note: L("À éviter : préférez le Glacier à distance.", "To be avoided: use Blizzard from range instead.") },
          ],
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC ×3", "AP Boost ×3"), where: L("Derrière les caisses explosives d'une ruelle de la ville, et deux dans la poudrière de l'île.", "Behind the explosive crates in a town alley, and two in the island's powder store.") },
        { kind: "keyblade", label: L("Gouvernail", "Rumbling Rose"), where: L("La victoire sur Barbossa.", "Beating Barbossa.") },
        { kind: "minigame", label: L("Sept pièces de puzzle", "Seven puzzle pieces"), where: L("Remparts, ville, poudrière (deux), et deux sur le Black Pearl une fois qu'on peut y atterrir.", "The ramparts, the town, the powder store (two), and two on the Black Pearl once you can land there.") },
        { kind: "synthesis", label: L("Éclats et pierres noirs, de mithril, de force et de vitalité", "Dark, Mythril, Power and Serenity shards and stones"), where: L("Répartis entre les remparts, les ruelles de la ville, la caverne et la salle du clair de lune.", "Spread across the ramparts, the town alleys, the cave and the moonlight room.") },
      ],
      missable: [
        L("La **réplique de Larxene**, sur l'île de la Muerta, est un défi de Final Mix hors de portée à ce stade. Elle ne disparaît pas : revenez-y en fin de partie.", "The **Larxene replica**, on the Isla de Muerta, is a Final Mix challenge out of reach at this point. It does not disappear: come back to it late in the game."),
      ],
    },
    {
      id: "agrabah",
      title: L("Agrabah", "Agrabah"),
      subtitle: L("Première visite", "First visit"),
      world: "agrabah",
      level: "22",
      status: "done",
      intro: L(
        "Agrabah et la Ville d'Halloween partagent une particularité : **leur niveau de combat dépend du moment où on les visite**. Faits maintenant, ils sont au niveau 22 et 24. Repoussés après la Forteresse Oubliée niveau 28, ils passent à 38 et 39 — avec l'expérience et le butin qui vont avec, mais un premier tour amputé de deux mondes.\n\nLa visite est longue et très riche en coffres, dont une bonne partie est **cachée dans les stands du marché** : le sort **Brasier** les détruit, et sans lui vous passerez à côté de la moitié du monde.\n\nElle se termine sur le **Pendentif Lampe**, c'est-à-dire l'invocation du **Génie**.",
        "Agrabah and Halloween Town share a quirk: **their battle level depends on when you visit**. Done now, they sit at level 22 and 24. Put off until after Hollow Bastion level 28, they rise to 38 and 39 — with the experience and loot that follows, but a first round two worlds shorter.\n\nThe visit is long and very rich in chests, a good many of them **hidden inside the market stalls**: the **Fire** spell destroys them, and without it you will miss half the world.\n\nIt ends on the **Lamp Charm**, which is to say the **Genie** summon.",
      ),
      steps: [
        {
          id: "ville",
          title: L("La ville, et les toits", "The town, and the rooftops"),
          text: L(
            "**Iago** s'est échappé de la lampe et veut se racheter. Après la horde de Sans-cœur, la **carte d'Agrabah** en poche, ne filez pas au palais : la zone est pleine de coffres.\n\nMontez l'escalier de gauche pour une **Potion+** et un **Éclat de mithril** au même niveau. Face à ce dernier coffre, faites demi-tour et avancez **en restant sur les toits** jusqu'à un **Éclat noir**. Prenez à gauche, sautez sur le toit suivant : une **Pierre de mithril**, puis un **Éclat de mithril** plus loin. Quelques pas encore et **tournez la caméra** pour repérer un coffre dans un coin, à l'ouest : un **Bonus PC**.\n\nLa zone nord, sur le toit, donne un **Éclat de sérénité**. Sur la place principale, sautez sur un stand pour une **pièce de puzzle**. Et au sud, un petit marché cache une **pièce de puzzle** dans un stand : **Brasier** pour l'ouvrir.\n\nDevant le palais, Jasmine s'inquiète pour Aladdin, Iago se fait repérer, et **Aladdin** rejoint l'équipe en poursuivant Abu, qui a volé une lampe. Le marchand veut un trésor en échange : direction la **Caverne aux Merveilles**.",
            "**Iago** has escaped the lamp and wants to make amends. Once the Heartless horde is dealt with and the **Agrabah map** is yours, do not run to the palace: the area is full of chests.\n\nClimb the left-hand stairs for a **Hi-Potion** and a **Mythril Shard** on the same level. Facing that last chest, turn around and go forward **staying on the roofs** to a **Dark Shard**. Go left, jump to the next roof: a **Mythril Stone**, then a **Mythril Shard** further along. A few steps more and **swing the camera** to spot a chest in a corner, to the west: an **AP Boost**.\n\nThe northern area, up on the roof, gives a **Serenity Shard**. On the main square, jump onto a stall for a **puzzle piece**. And to the south, a small market hides a **puzzle piece** inside a stall: **Fire** to open it.\n\nOutside the palace, Jasmine is worried about Aladdin, Iago gets himself noticed, and **Aladdin** joins the party chasing Abu, who has stolen a lamp. The merchant wants a treasure in exchange: off to the **Cave of Wonders**.",
          ),
        },
        {
          id: "marche",
          title: L("Le marché, et la route de la caverne", "The market, and the road to the cave"),
          text: L(
            "Dans la zone du **Marché**, **détruisez tous les stands au Brasier** : quatre coffres apparaissent — un **Éclat de force**, un **Bonus PC**, une **Potion+** et un **Éclat de mithril**.\n\nMontez la longue série d'escaliers : une **pièce de puzzle** dans un stand à droite, et une **Gemme de mithril** plus loin en longeant le mur de droite.\n\nQuittez la ville par la double porte en bois. Devant le **Mur d'enceinte** : un **Anneau strié** et une **Pierre de mithril**.\n\nSur la route de la caverne, avant de suivre Pat, **faites le tour de la Tête de Tigre** : une **Pierre de force**, une **pièce de puzzle** et un **Éclat de mithril**.\n\nÀ l'intérieur, la vallée des géants se traverse de plate-forme en plate-forme : une **Potion+**, un **Éclat de mithril**, un **Bonus PC** et une **Pierre de mithril**. La plate-forme violette près de la sortie mène à une **pièce de puzzle**.",
            "In the **Bazaar**, **destroy every stall with Fire**: four chests appear — a **Power Shard**, an **AP Boost**, a **Hi-Potion** and a **Mythril Shard**.\n\nClimb the long flight of stairs: a **puzzle piece** in a stall on the right, and a **Mythril Gem** further along the right-hand wall.\n\nLeave town by the wooden double doors. At the **Palace Walls**: a **Ripple Drop** and a **Mythril Stone**.\n\nOn the road to the cave, before following Pete, **circle the Tiger Head**: a **Power Stone**, a **puzzle piece** and a **Mythril Shard**.\n\nInside, the Valley of Stone is crossed platform by platform: a **Hi-Potion**, a **Mythril Shard**, an **AP Boost** and a **Mythril Stone**. The purple platform near the exit leads to a **puzzle piece**.",
          ),
        },
        {
          id: "epreuve",
          title: L("L'épreuve de la caverne", "The cave's trial"),
          text: L(
            "Dans la deuxième salle, examinez le **cristal flottant** puis le socle au fond. Abu s'empare du cristal, et il faut l'aider à le poser : **Triangle** pour qu'il esquive les vagues, et **sautez en même temps que lui** pour les esquiver vous aussi. Arrivé au bout, **Triangle** une dernière fois.\n\nLa salle suivante est la **salle de l'épreuve**. Examinez la pierre : il faut éliminer tous les Sans-cœur en moins de deux minutes, sur des plates-formes qui **disparaissent une à une**. Allez vite : traîner, c'est se retrouver sur une plate-forme de moins avec autant d'ennemis.\n\nPensez surtout à une chose : **trois pièces de puzzle se ramassent pendant les chutes**. Inclinez la caméra vers le bas entre deux plates-formes pour les repérer.\n\nL'épreuve finie, la pierre près du point de sauvegarde ouvre la porte. Les coffres donnent la **carte de la Caverne aux Merveilles** et un **Bonus PC** — et le cercle lumineux au sol renvoie au début de l'épreuve, si vous voulez la refaire.\n\nDans la salle du trésor, Pat lâche une cinquantaine de Sans-cœur. Rien de difficile, sauf les **trois gros bandits** de la fin : une coopération en vient à bout d'un coup.",
            "In the second room, examine the **floating crystal** then the pedestal at the back. Abu grabs the crystal, and you have to help him set it down: **Triangle** so the monkey dodges the waves, and **jump at the same time as him** to dodge them yourself. At the end, **Triangle** one last time.\n\nThe next room is the **Hall of the Trial**. Examine the stone: you must clear every Heartless in under two minutes, on platforms that **vanish one by one**. Be quick: dawdling means one platform fewer and just as many enemies.\n\nAbove all, remember one thing: **three puzzle pieces are collected during the falls**. Tilt the camera down between platforms to spot them.\n\nWith the trial done, the stone near the save point opens the door. The chests give the **Cave of Wonders map** and an **AP Boost** — and the circle of light on the floor sends you back to the start of the trial, if you want another go.\n\nIn the treasure room, Pete unleashes some fifty Heartless. Nothing hard, except the **three Fat Bandits** at the end: one limit finishes them.",
          ),
        },
      ],
      bosses: [
        {
          id: "poussahs",
          name: L("Poussah Volcano et Poussah Blizzaro", "Volcano Lord and Blizzard Lord"),
          entry: "volcano-lord",
          level: "24",
          reward: L("Sora : Frappe verticale. Donald : +3 points de vie. Dingo : un emplacement d'armure supplémentaire. Et le Pendentif Lampe — l'invocation du Génie.", "Sora: Vertical Slash. Donald: +3 HP. Goofy: an extra armour slot. Plus the Lamp Charm — the Genie summon."),
          tactics: L(
            "Deux géants élémentaires, et le piège est de croire qu'il faut jouer la magie.\n\nC'est vrai sur le papier — **Volcano craint le Glacier, Blizzaro craint le Brasier** — mais leur **défense est si basse** que les combos à la Keyblade font davantage, et ne coûtent rien.\n\nDeux commandes réaction rythment le combat : **Pyro-tir** quand Volcano bondit vers vous — attention aux flaques enflammées qu'il laisse à chaque bond —, et **Givro-tir** quand Blizzaro inspire pour souffler.\n\nAchevés d'un combo, ils se dispersent en petits Sans-cœur — des **Globes caniculaires** et des **Billes réfrigérantes** — qui lâchent des sphères de vie : c'est votre réserve de soin.\n\nUne chose à retenir : Blizzaro **emprisonne vos alliés dans des blocs de glace**. Un **Brasier** les libère, et un allié gelé qui reste gelé, c'est un soigneur en moins.",
            "Two elemental giants, and the trap is to think magic is the answer.\n\nIt is true on paper — **Volcano fears Blizzard, Blizzard Lord fears Fire** — but their **defence is so low** that Keyblade combos do more, and cost nothing.\n\nTwo Reaction Commands punctuate the fight: **Fire Shot** when the Volcano Lord leaps at you — watch the burning pools it leaves with each leap — and **Blizzard Shot** when the Blizzard Lord inhales to breathe.\n\nFinished off with a combo, they scatter into small Heartless — **Fiery Globes** and **Icy Cubes** — that drop HP spheres: that is your healing reserve.\n\nOne thing to remember: the Blizzard Lord **traps your allies in blocks of ice**. A **Fire** spell frees them, and a frozen ally who stays frozen is one healer down.",
          ),
          attacks: [
            { name: L("Bonds de Volcano", "Volcano Lord's leaps"), note: L("Pyro-tir, et évitez les flaques de feu laissées au sol.", "Fire Shot, and avoid the pools of fire left behind.") },
            { name: L("Souffle de Blizzaro", "Blizzard Lord's breath"), note: L("Givro-tir dès qu'il inspire.", "Blizzard Shot the moment it inhales.") },
            { name: L("Blocs de glace", "Ice blocks"), note: L("Vos alliés y sont pris. Brasier pour les libérer, sans attendre.", "Your allies get caught in them. Fire to free them, without delay.") },
          ],
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC ×5", "AP Boost ×5"), where: L("Un coin de la ville, le marché, la vallée des géants, la sortie de l'épreuve, et la salle du trésor au second passage.", "A corner of the town, the bazaar, the Valley of Stone, the trial's exit, and the treasure room on the return visit.") },
        { kind: "ability", label: L("Pendentif Lampe — le Génie", "Lamp Charm — the Genie"), where: L("La victoire sur les deux Poussahs.", "Beating the two Lords.") },
        { kind: "minigame", label: L("Huit pièces de puzzle", "Eight puzzle pieces"), where: L("Place principale, marché sud (Brasier), escaliers, Tête de Tigre, vallée des géants, et trois pendant les chutes de l'épreuve.", "The main square, the southern market (Fire), the stairs, the Tiger Head, the Valley of Stone, and three during the trial's falls.") },
      ],
      missable: [
        L("Rien n'est perdu — le monde se revisite —, mais la moitié des coffres est **cachée dans les stands** : sans Brasier, on passe à côté sans les voir.", "Nothing is lost — the world can be revisited — but half the chests are **hidden inside the stalls**: without Fire, you walk right past them."),
      ],
    },
    {
      id: "ville-halloween",
      title: L("Ville d'Halloween", "Halloween Town"),
      subtitle: L("Première visite", "First visit"),
      world: "halloween-town",
      level: "24",
      status: "done",
      intro: L(
        "Comme Agrabah, la Ville d'Halloween **change de niveau de combat selon le moment de la visite** : 24 maintenant, 39 si vous la repoussez après la Forteresse Oubliée.\n\nLa particularité du monde est qu'il en contient deux : la Ville d'Halloween et la **Ville de Noël**, reliées par un arbre du cimetière. Jack a décidé d'organiser Noël, ce qui se passe à peu près comme on l'imagine.\n\nLa visite donne l'**élément d'Attraction** — la magie Aimant — qui ouvre au passage un nouveau chapitre d'Atlantica.",
        "Like Agrabah, Halloween Town **changes battle level depending on when you visit**: 24 now, 39 if you leave it until after Hollow Bastion.\n\nThe world's quirk is that it contains two: Halloween Town and **Christmas Town**, joined by a tree in the graveyard. Jack has decided to organise Christmas, which goes about as well as you would expect.\n\nThe visit gives the **Magnet element** — the Magnet spell — which also opens a new Atlantica chapter along the way.",
      ),
      steps: [
        {
          id: "halloween",
          title: L("La Ville d'Halloween", "Halloween Town"),
          text: L(
            "Deux coffres à l'arrivée — une **Gemme de sérénité** et une **Potion+** — avant de rejoindre la place de la Guillotine, où Jack expose son projet. Le laboratoire du docteur Finkelstein donne la **carte** dans son gros coffre.\n\nÀ la sortie, une horde de Sans-cœur envahit la place : **méfiez-vous des éléments du décor**, tous ne sont pas décoratifs. La zone nettoyée, prenez un **Éclat de fougue** au pied de la guillotine et une **Pierre de mithril** près des grilles.\n\nLes **bouches d'égout** vous projettent violemment en l'air — c'est désagréable, mais c'est aussi le seul moyen d'atteindre la **pièce de puzzle** de la place.\n\nTraversez le cimetière jusqu'à la forêt : une **Pierre de mithril**, un **Éclat grondant**, un **Bonus PC**, et une **pièce de puzzle** derrière l'arbre marqué d'un sapin de Noël. Examinez cet arbre pour être aspiré de l'autre côté.",
            "Two chests on arrival — a **Serenity Gem** and a **Hi-Potion** — before reaching Guillotine Square, where Jack lays out his plan. Dr Finkelstein's laboratory gives the **map** in its large chest.\n\nOn the way out, a horde of Heartless floods the square: **be wary of the scenery**, not all of it is decorative. Once cleared, take a **Frost Shard** at the foot of the guillotine and a **Mythril Stone** by the railings.\n\nThe **manholes** fling you violently into the air — unpleasant, but also the only way to reach the square's **puzzle piece**.\n\nCross the graveyard to the woods: a **Mythril Stone**, a **Thunder Shard**, an **AP Boost**, and a **puzzle piece** behind the tree marked with a Christmas fir. Examine that tree to be pulled through.",
          ),
        },
        {
          id: "noel",
          title: L("La Ville de Noël", "Christmas Town"),
          text: L(
            "Nouvelle apparence, nouveau monde. Prenez la **pièce de puzzle** derrière l'arbre, puis direction la maison du Perce-Oreille.\n\nDe nouveaux Sans-cœur apparaissent ; une fois réglés, quatre coffres : une **Pierre de mithril**, une **Pierre grondante**, une **Mégapotion** et une **Gemme de mithril**.\n\nÀ l'intérieur, la rencontre avec le Perce-Oreille tourne court — du bruit vient de la pièce voisine. **Avant d'y aller**, dépouillez les lieux : **deux pièces de puzzle**, la **carte de la ville** et un **Bonus PC**.\n\nCe sont Am, Stram et Gram, qui s'échappent par la fenêtre. Leurs traces mènent à une entrée jusque-là fermée, près du cimetière.",
            "New look, new world. Take the **puzzle piece** behind the tree, then head for Santa's house.\n\nMore Heartless appear; once dealt with, four chests: a **Mythril Stone**, a **Thunder Stone**, a **Mega-Potion** and a **Mythril Gem**.\n\nInside, the meeting with Santa is cut short — there is a noise in the next room. **Before going in**, strip the place: **two puzzle pieces**, the **town map** and an **AP Boost**.\n\nIt is Lock, Shock and Barrel, escaping through the window. Their tracks lead to an entrance that was closed until now, near the graveyard.",
          ),
        },
        {
          id: "usine",
          title: L("L'usine d'Oogie Boogie", "Oogie Boogie's factory"),
          text: L(
            "Après l'Automato-cage, direction la Ville de Noël : le Perce-Oreille a été enlevé par **Oogie Boogie**, que Maléfique a ramené à la vie.\n\nIl a transformé l'usine en arène de combat, et il compte bien l'essayer sur vous.\n\nLa victoire donne l'**élément d'Attraction**, c'est-à-dire la magie **Aimant** — et Jack peut enfin fêter Noël dans le costume cousu par Sally.",
            "After the Prison Keeper, head for Christmas Town: Santa has been taken by **Oogie Boogie**, whom Maleficent has brought back.\n\nHe has turned the factory into a battle arena, and he fully intends to test it on you.\n\nWinning gives the **Magnet element**, meaning the **Magnet** spell — and Jack can finally celebrate Christmas in the costume Sally sewed.",
          ),
        },
      ],
      bosses: [
        {
          id: "automato-cage",
          name: L("Automato-cage", "The Prison Keeper"),
          entry: "prison-keeper",
          level: "25",
          reward: L("Sora : Assaut. Donald : Soin amical. Dingo : +4 points de vie. Jack : +15 points de vie.", "Sora: Slapshot. Donald: MP Gift. Goofy: +4 HP. Jack: +15 HP."),
          tactics: L(
            "Un boss à trois visages, littéralement : il **avale tour à tour Am, Stram et Gram**, et chaque avalement lui donne des capacités différentes.\n\nLa première chose à savoir vaut tout le reste : **si vous êtes à côté de lui quand il tente d'en avaler un, vous pouvez l'en empêcher** — et mieux, l'attaquer de l'intérieur avec la commande **Ingestion**. Rester collé à lui est donc la bonne position par défaut.\n\nSinon, à chaque forme sa réponse :\n\n- **Avec Am**, il envoie des boules de feu plus ou moins rapides. Renvoyez-les en attaquant, ou bloquez à la **Parade** ou au **Miroir**.\n- **Avec Stram**, il s'élève et mitraille. **Restez sous lui** pour éviter les tirs, puis montez sur la colline pour l'atteindre — ou passez en **Vaillance** et servez-vous du super saut.\n- **Avec Gram**, il mord et frappe de la cage. Ce sont des attaques de contact, et la **Parade** les gère toutes.\n\nÀ la fin, il les avale **tous les trois** et cumule les trois panoplies : il n'y a rien de nouveau, il faut juste alterner les réponses.",
            "A boss with three faces, literally: it **swallows Lock, Shock and Barrel in turn**, and each one gives it different abilities.\n\nThe first thing to know is worth all the rest: **if you are beside it when it tries to swallow one, you can stop it** — and better, attack it from the inside with the **Ingest** command. Staying glued to it is therefore the right default position.\n\nOtherwise, each form has its answer:\n\n- **With Lock**, it throws fireballs at varying speeds. Send them back by attacking, or block with **Guard** or **Reflect**.\n- **With Shock**, it rises and strafes. **Stay underneath it** to avoid the shots, then climb the hill to reach it — or switch to **Valor Form** and use the high jump.\n- **With Barrel**, it bites and swings the cage. These are contact attacks, and **Guard** handles all of them.\n\nAt the end it swallows **all three** and stacks the three sets: there is nothing new, you just have to alternate the answers.",
          ),
        },
        {
          id: "oogie",
          name: L("Oogie Boogie", "Oogie Boogie"),
          entry: "oogie-boogie",
          level: "26",
          reward: L("Sora : un emplacement d'objet supplémentaire. Donald : +3 points de vie. Dingo : Dernière chance. Jack : +15 points de vie. Et l'élément d'Attraction.", "Sora: an extra item slot. Donald: +3 HP. Goofy: Second Chance. Jack: +15 HP. Plus the Magnet element."),
          tactics: L(
            "Tout le combat se déroule sur un **tapis roulant**, avec des pics derrière vous : **avancer n'est pas optionnel**.\n\nOogie est sur une plate-forme hors d'atteinte. Pour le faire descendre, il faut **la remplir de paquets cadeau** avec la commande **Catapulter**. Au bout d'un certain nombre, le monte-charge cède et vous avez enfin votre fenêtre.\n\nIl remonte assez vite — la plate-forme se reconstitue on ne sait comment — et **le tapis accélère brièvement** à ce moment-là. Courez, sous peine de finir dans les pics.\n\nSon arsenal pour vous gêner : un **gant de boxe géant** qui s'écrase sur le tapis, des **sacs violets** qui libèrent des Sans-cœur — à éliminer vite, ils gênent plus qu'ils ne blessent —, cinq **décharges électriques** faciles à esquiver, et le déplacement de la plate-forme, qui vous oblige à changer de tapis par les trous carrés d'en face.",
            "The whole fight takes place on a **conveyor belt**, with spikes behind you: **moving forward is not optional**.\n\nOogie is on a platform out of reach. To bring him down, you have to **fill it with presents** using the **Catapult** command. After enough of them, the lift gives way and you finally get your window.\n\nHe climbs back fairly quickly — the platform reassembles somehow — and **the belt briefly speeds up** at that moment. Run, or you end up in the spikes.\n\nHis arsenal for getting in your way: a **giant boxing glove** slamming into the belt, **purple sacks** releasing Heartless — kill them quickly, they hinder more than they hurt — five **electric discharges** that are easy to dodge, and moving the platform, which forces you onto another belt through the square holes opposite.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC ×2", "AP Boost ×2"), where: L("Dans la forêt entre le cimetière et l'arbre de Noël, et chez le Perce-Oreille.", "In the woods between the graveyard and the Christmas tree, and at Santa's house.") },
        { kind: "ability", label: L("Élément d'Attraction", "Magnet element"), where: L("La victoire sur Oogie Boogie.", "Beating Oogie Boogie."), note: L("Le sort Aimant ouvre aussi un nouveau chapitre d'Atlantica.", "The Magnet spell also opens a new Atlantica chapter.") },
        { kind: "minigame", label: L("Quatre pièces de puzzle", "Four puzzle pieces"), where: L("Place de la Guillotine (par les bouches d'égout), derrière l'arbre de Noël des deux côtés, et deux chez le Perce-Oreille.", "Guillotine Square (via the manholes), behind the Christmas tree on both sides, and two at Santa's house.") },
      ],
    },
    {
      id: "terre-des-lions",
      title: L("Terre des Lions", "Pride Lands"),
      subtitle: L("Première visite", "First visit"),
      world: "pride-lands",
      level: "26",
      status: "done",
      intro: L(
        "Le monde est **facultatif** — on peut terminer le jeu sans y mettre les pieds — mais le sauter a un coût précis : **la fin de Space Paranoids est inaccessible tant que les deux épisodes de la Terre des Lions ne sont pas faits**. Ce n'est donc facultatif que sur le papier.\n\nSora y devient lionceau, et cette transformation a des conséquences immédiates : **ni Fusion, ni invocation, ni coopération** — cette dernière revenant seulement quand Simba rejoint l'équipe.\n\nPassez un moment dans le menu des compétences en arrivant : le lionceau en a de nouvelles, actives en permanence. Donald et Dingo, eux, sont transformés mais n'en gagnent aucune.\n\nDétail qui compte pour la fouille : ici, **les coffres ont la forme de poires**.",
        "The world is **optional** — the game can be finished without setting foot in it — but skipping it has a precise cost: **the end of Space Paranoids is unreachable until both Pride Lands episodes are done**. So it is optional on paper only.\n\nSora becomes a lion cub here, and the transformation has immediate consequences: **no Drive Forms, no summons, no limits** — the last coming back only when Simba joins the party.\n\nSpend a moment in the abilities menu on arrival: the cub has new ones, permanently active. Donald and Goofy are transformed but gain none.\n\nA detail that matters when searching: here, **the chests are shaped like pears**.",
      ),
      steps: [
        {
          id: "cimetiere",
          title: L("Le cimetière des éléphants", "The elephant graveyard"),
          text: L(
            "Trois coffres d'entrée : la **carte de la savane**, une **Pierre de mithril** et une **Gemme noire**.\n\nDans la zone suivante, il faut protéger **Nala** poursuivie par deux énormes **Carcasses**. Approchez-vous de l'une d'elles, déclenchez **Rodéo** pour monter sur son dos, puis **Démantibuler** pour l'achever.\n\nAvant de rejoindre le Rocher du Lion, fouillez le cimetière. Le coffre droit devant contient une **Gemme glaciale**. Grimpez la pente de droite, bordée de vertèbres, et **sautez en frappant de la Keyblade** pour attraper la **pièce de puzzle**. Continuez à droite jusqu'au **Bonus PC**.\n\nRevenez et allez tout droit : une **Pierre de mithril**, une **Pierre de vitalité** près de la sortie. **Ne sortez pas encore** — retournez-vous face au crâne d'éléphant pour repérer un coffre (**Éclat de mithril**). Le nord de la carte cache une seconde **pièce de puzzle**.",
            "Three chests to start: the **savannah map**, a **Mythril Stone** and a **Dark Gem**.\n\nIn the next area you must protect **Nala**, chased by two huge **Living Bones**. Get close to one, trigger **Rodeo** to ride it, then **Dismantle** to finish it.\n\nBefore heading to Pride Rock, comb the graveyard. The chest straight ahead holds a **Frost Gem**. Climb the right-hand slope lined with vertebrae, and **jump while swinging the Keyblade** to catch the **puzzle piece**. Carry on right to the **AP Boost**.\n\nCome back and go straight on: a **Mythril Stone**, a **Serenity Stone** near the exit. **Do not leave yet** — turn to face the elephant skull to spot a chest (**Mythril Shard**). The north of the map hides a second **puzzle piece**.",
          ),
        },
        {
          id: "rocher",
          title: L("Le Rocher du Lion et la Vallée des gnous", "Pride Rock and the Wildebeest Valley"),
          text: L(
            "**Rafiki** annonce à Sora qu'il n'est pas le sauveur attendu. Le temps d'encaisser, ramassez la **carte de la zone**, un **Cristal de sérénité** et une **Pierre de mithril**. La **pièce de puzzle** au nord s'attrape en sautant depuis la falaise ; la grotte de Rafiki a un point de sauvegarde.\n\nAu moment de partir, Scar se présente — accompagné d'un lion qui n'est autre que Pat. Fuyez vers la **Vallée des gnous**.\n\nNala y enseigne **Aiguillon** : sous cette apparence, **Carré fait courir plus vite**. C'est autant un outil de déplacement qu'une esquive, et le combat contre Scar en dépendra.\n\nRamassez la **Pierre de fougue** en face, une **Pierre de mithril** à droite de la formation rocheuse, puis un **Bonus PC** et une **pièce de puzzle** près d'un autre pic. Le grand espace suivant donne une **Gemme de mithril**, une **pièce de puzzle** et une **Gemme hyaline** près de la sortie.",
            "**Rafiki** tells Sora he is not the awaited saviour. While that sinks in, pick up the **area map**, a **Serenity Crystal** and a **Mythril Stone**. The **puzzle piece** to the north is caught by jumping from the cliff; Rafiki's cave has a save point.\n\nAs you leave, Scar appears — with a lion who turns out to be Pete. Flee to the **Wildebeest Valley**.\n\nNala teaches **Dash** there: in this form, **Square makes you run faster**. It is as much a movement tool as a dodge, and the fight against Scar will depend on it.\n\nPick up the **Frost Stone** in front of you, a **Mythril Stone** right of the rock formation, then an **AP Boost** and a **puzzle piece** by another outcrop. The large open area after gives a **Mythril Gem**, a **puzzle piece** and a **Lucid Gem** near the exit.",
          ),
        },
        {
          id: "oasis",
          title: L("Les Terres arides, la Jungle et l'oasis", "The Wastelands, the Jungle and the oasis"),
          text: L(
            "Sur la route : un **Éclat de mithril**, une **Gemme de sérénité**, une **Pierre de mithril** et **deux pièces de puzzle**.\n\nDans la **Jungle** : un **Cristal de sérénité** dans le premier coffre, une **Gemme de sérénité** sur la plate-forme en face. Avant l'oasis, une **Pierre de mithril** et une **pièce de puzzle**, à attraper de la même façon qu'au cimetière.\n\n**Simba** est là, et vous reconnaît malgré votre apparence. Les retrouvailles sont brèves : Timon et Pumbaa ont besoin d'aide dans la jungle. Fouillez d'abord l'oasis — la **carte**, un **Bonus PC** et une **Page déchirée**.\n\nAu retour, la conversation entre Nala et Simba tourne mal. « Réconforter » Simba à l'oasis donne la Keyblade **Cercle Vital**, et Simba rejoint l'équipe — ce qui rend la coopération de nouveau disponible.\n\nIl vous quitte dans la savane pour reprendre sa place. Allez au Rocher du Lion assister à la chute de Scar, puis entrez dans la tanière du roi.",
            "Along the way: a **Mythril Shard**, a **Serenity Gem**, a **Mythril Stone** and **two puzzle pieces**.\n\nIn the **Jungle**: a **Serenity Crystal** in the first chest, a **Serenity Gem** on the platform ahead. Before the oasis, a **Mythril Stone** and a **puzzle piece**, caught the same way as in the graveyard.\n\n**Simba** is there, and recognises you despite your form. The reunion is brief: Timon and Pumbaa need help in the jungle. Search the oasis first — the **map**, an **AP Boost** and a **Torn Page**.\n\nOn your return, the conversation between Nala and Simba goes badly. 'Comforting' Simba at the oasis gives the **Circle of Life** Keyblade, and Simba joins the party — which brings limits back.\n\nHe leaves you in the savannah to take his place. Go to Pride Rock to watch Scar's fall, then enter the king's den.",
          ),
        },
      ],
      bosses: [
        {
          id: "hyenes",
          name: L("Shenzi, Banzaï et Ed", "Shenzi, Banzai and Ed"),
          entry: "shenzi-banzai-and-ed",
          level: "27",
          reward: L("Sora : +5 points de vie. Donald : +3 points de vie. Dingo : Chance.", "Sora: +5 HP. Donald: +3 HP. Goofy: Lucky Lucky."),
          tactics: L(
            "Ce combat ne se gagne pas sur votre barre de vie mais sur celle de **Timon et Pumbaa** : c'est eux que les hyènes visent, et c'est leur jauge qu'il faut surveiller.\n\nD'où la première règle, contre-intuitive : **ne concentrez pas vos coups sur une seule hyène**. Pendant que vous en achevez une, les deux autres travaillent tranquillement sur vos amis. Restez **près de Timon et Pumbaa** et frappez ce qui approche, sans chercher à finir quoi que ce soit.\n\nSi les trois vous assaillent en même temps, un **Brasier** les écarte.\n\nEt quand vous vous retrouvez trop loin — ça arrive —, la commande **Héler** les fait venir à vous. Double avantage : vous pouvez de nouveau les protéger, et les hyènes se mettent parfois à se battre entre elles dans la foulée.",
            "This fight is not won on your HP bar but on **Timon and Pumbaa's**: they are what the hyenas go for, and their gauge is what you watch.\n\nHence the first rule, counter-intuitive as it is: **do not focus your hits on a single hyena**. While you finish one off, the other two work away on your friends. Stay **near Timon and Pumbaa** and hit whatever comes close, without trying to finish anything.\n\nIf all three come at you at once, a **Fire** spell pushes them back.\n\nAnd when you end up too far away — it happens — the **Call Over** command brings them to you. Two benefits: you can protect them again, and the hyenas sometimes start fighting each other afterwards.",
          ),
        },
        {
          id: "scar",
          name: L("Scar", "Scar"),
          entry: "scar",
          level: "28",
          reward: L("Sora : +10 points de magie. Donald : Booster Feu. Dingo : +4 points de vie. Simba : +30 points de vie. Et l'élément de Feu — le sort Brasier +.", "Sora: +10 MP. Donald: Fire Boost. Goofy: +4 HP. Simba: +30 HP. Plus the Fire element — the Fira spell."),
          tactics: L(
            "Scar est rapide et varié : la prudence rapporte plus que l'agressivité.\n\nIl passe son temps à **se ruer sur vous ou à bondir d'un point à l'autre**, entouré de flammes — le **Glacier** l'arrête — ou d'éclairs. **Aiguillon** est votre outil : esquivez, tenez-vous à l'écart, et **attendez qu'il s'occupe de Simba pour le frapper**. C'est là que sont vos fenêtres.\n\nS'il vous plaque au sol, la commande **Parade** le repousse.\n\nSon attaque la plus dangereuse s'annonce nettement : **des orbes d'énergie noire apparaissent autour de lui**, puis il court au loin avant de foncer. La seule réponse est **Aiguillon**, tout de suite.\n\nEt n'économisez pas la coopération avec Simba : elle est très efficace sur lui.",
            "Scar is fast and varied: caution pays better than aggression here.\n\nHe spends his time **charging you or leaping from point to point**, wreathed in flames — **Blizzard** stops him — or in lightning. **Dash** is your tool: dodge, keep your distance, and **wait until his attention is on Simba to hit him**. That is where your windows are.\n\nIf he pins you to the ground, the **Guard** command pushes him off.\n\nHis most dangerous attack announces itself clearly: **orbs of dark energy appear around him**, then he runs off before charging. The only answer is **Dash**, immediately.\n\nAnd do not save the limit with Simba: it is very effective on him.",
          ),
          attacks: [
            { name: L("Bonds enflammés", "Flaming leaps"), note: L("Glacier les interrompt.", "Blizzard interrupts them.") },
            { name: L("Orbes d'énergie noire", "Orbs of dark energy"), note: L("L'annonce de sa charge. Aiguillon, sans réfléchir.", "The tell for his charge. Dash, without thinking.") },
            { name: L("Plaquage au sol", "Pin down"), note: L("La commande Parade le repousse.", "The Guard command shoves him off.") },
          ],
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC ×3", "AP Boost ×3"), where: L("Cimetière des éléphants, Vallée des gnous, et l'oasis.", "The elephant graveyard, the Wildebeest Valley, and the oasis.") },
        { kind: "keyblade", label: L("Cercle Vital", "Circle of Life"), where: L("En réconfortant Simba à l'oasis.", "By comforting Simba at the oasis.") },
        { kind: "journal", label: L("Page déchirée", "Torn Page"), where: L("À l'oasis, avec la carte et le Bonus PC.", "At the oasis, with the map and the AP Boost.") },
        { kind: "ability", label: L("Aiguillon, puis l'élément de Feu", "Dash, then the Fire element"), where: L("Nala dans la Vallée des gnous, puis la victoire sur Scar.", "Nala in the Wildebeest Valley, then beating Scar.") },
        { kind: "minigame", label: L("Neuf pièces de puzzle", "Nine puzzle pieces"), where: L("Deux au cimetière, une au Rocher du Lion, deux dans la Vallée des gnous, deux aux Terres arides, une dans la Jungle, une au Rocher avant Scar.", "Two in the graveyard, one at Pride Rock, two in the Wildebeest Valley, two in the Wastelands, one in the Jungle, one at Pride Rock before Scar.") },
      ],
      missable: [
        L("Le monde est présenté comme facultatif, mais **la fin de Space Paranoids exige ses deux épisodes**. Le sauter, c'est bloquer une partie du cheminement principal.", "The world is presented as optional, but **the end of Space Paranoids requires both its episodes**. Skipping it blocks part of the main path."),
      ],
    },
    {
      id: "cite-du-crepuscule-2",
      title: L("Cité du Crépuscule", "Twilight Town"),
      subtitle: L("Deuxième visite — Kairi", "Second visit — Kairi"),
      world: "twilight-town",
      level: "28",
      status: "done",
      intro: L(
        "Un passage de dix minutes, et pourtant une charnière : **c'est ici que commence la seconde partie de l'aventure**.\n\nAvant d'y aller, faites le tour de ce que vous avez laissé ailleurs. Une fois cette section passée, la Forteresse Oubliée enchaîne, et le rythme ne redescend plus.\n\nLa visite introduit les **Berserkers**, les Similis les plus dangereux rencontrés jusqu'ici, et donne la Keyblade **Tendre Promesse** avec la Fusion **Souvenance**.",
        "A ten-minute stretch, and yet a hinge: **this is where the second half of the adventure begins**.\n\nBefore going in, go and finish what you left elsewhere. Once this section is over, Hollow Bastion follows on, and the pace never really drops again.\n\nThe visit introduces the **Berserkers**, the most dangerous Nobodies met so far, and gives the **Oathkeeper** Keyblade with the **Limit** Drive Form.",
      ),
      steps: [
        {
          id: "place-des-fetes",
          title: L("La place des Fêtes", "The Sandlot"),
          text: L(
            "Seifer et sa bande sont attaqués par des Similis. Trois vagues de **Reflets** et d'une espèce nouvelle : les **Berserkers**.\n\nCeux-là demandent une méthode. Frappez-les jusqu'à ce qu'ils **lâchent leur arme**, puis **ramassez-la** : la commande **Furie** devient disponible, et c'est de très loin votre meilleure source de dégâts. Le sort **Miroir** protège et blesse en même temps, ce qui en fait l'autre bonne réponse.\n\nAprès la victoire, **Saïx** se présente. Seifer vous offre son **Trophée de Struggle**, et vous apprenez que Kairi est passée par là.\n\nSur la place, vous apercevez la **Silhouette Spectrale de Lexaeus** — un défi de Final Mix très au-dessus de votre niveau. Notez-la, et courez vers la gare.",
            "Seifer and his gang are under attack by Nobodies. Three waves of **Dusks** and of a new species: the **Berserkers**.\n\nThose need a method. Hit them until they **drop their weapon**, then **pick it up**: the **Berserk** command becomes available, and it is by far your best source of damage. The **Reflect** spell protects and hurts at the same time, which makes it the other good answer.\n\nAfter the fight, **Saïx** introduces himself. Seifer gives you his **Struggle Trophy**, and you learn Kairi has been through here.\n\nOn the square you spot **Lexaeus's Absent Silhouette** — a Final Mix challenge well above your level. Note it, and run to the station.",
          ),
        },
        {
          id: "gare",
          title: L("La place de la gare", "Station Plaza"),
          text: L(
            "Trop tard : Kairi a été enlevée par **Axel**.\n\nLe Trophée de Struggle révèle un **Verrou céleste**. Vous obtenez la Keyblade **Tendre Promesse** — la plus chargée symboliquement du jeu — et la Fusion **Souvenance**.\n\nAvant de partir pour la Forteresse Oubliée, **vérifiez que vous avez fait tous les autres mondes** : la seconde partie de l'aventure commence maintenant.\n\nTrois nouvelles **pièces de puzzle** sont d'ailleurs disponibles ici : une sur la place de la gare, deux sur le circuit du tram — la première sur un bâtiment après l'entrée de la forêt, la seconde sur le bâtiment central, celui de l'atelier des Mogs — toutes deux en grimpant sur le tramway. Le **Bolet n° 12** est aussi apparu, et les mini-jeux du monde sont ouverts.",
            "Too late: Kairi has been taken by **Axel**.\n\nThe Struggle Trophy reveals a **Keyhole**. You receive the **Oathkeeper** Keyblade — the most symbolically loaded in the game — and the **Limit** Drive Form.\n\nBefore leaving for Hollow Bastion, **make sure you have done every other world**: the second half of the adventure starts now.\n\nThree new **puzzle pieces** are available here, as it happens: one on Station Plaza, two on the Tram Common — the first on a building past the entrance to the woods, the second on the central building, the one with the moogle workshop — both reached by climbing on the tram. **Mushroom No. 12** has also appeared, and the world's mini-games are open.",
          ),
        },
      ],
      collectibles: [
        { kind: "keyblade", label: L("Tendre Promesse", "Oathkeeper"), where: L("Le Verrou céleste révélé par le Trophée de Struggle.", "The Keyhole revealed by the Struggle Trophy.") },
        { kind: "ability", label: L("Fusion Souvenance", "Limit Form"), where: L("Avec Tendre Promesse, à la place de la gare.", "With Oathkeeper, at Station Plaza.") },
        { kind: "minigame", label: L("Trois pièces de puzzle", "Three puzzle pieces"), where: L("Place de la gare, et deux sur le circuit du tram en grimpant sur le tramway.", "Station Plaza, and two on the Tram Common by climbing on the tram.") },
      ],
      missable: [
        L("**C'est le point de bascule de la partie.** Tout ce qui n'a pas été fait dans les mondes du premier tour devient plus long ensuite : les niveaux de combat montent, et Agrabah comme la Ville d'Halloween passent de 22 et 24 à 38 et 39.", "**This is the game's turning point.** Anything left undone in the first round's worlds gets longer afterwards: battle levels rise, and Agrabah and Halloween Town go from 22 and 24 to 38 and 39."),
      ],
    },
    {
      id: "forteresse-oubliee-3",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      subtitle: L("Troisième visite — l'ordinateur d'Ansem", "Third visit — Ansem's computer"),
      world: "radiant-garden",
      level: "28",
      status: "done",
      intro: L(
        "La ville est de nouveau menacée, et cette visite sert surtout à ouvrir une porte : celle de l'**ordinateur d'Ansem le Sage**, que le comité de restauration vient de découvrir.\n\nC'est aussi la visite des retrouvailles — **Cloud**, **Aerith**, **Tifa**, **Léon**, **Cid** — et de la présentation de **Yuna, Rikku et Paine**, le trio de Final Fantasy X-2, ici espionnes au service de Maléfique.\n\nLe château est un **dédale de couloirs** où il est facile de tourner en rond. Le cheminement ci-dessous le traverse en ramassant tout.",
        "The town is under threat again, and this visit mainly serves to open a door: the one to **Ansem the Wise's computer**, which the Restoration Committee has just found.\n\nIt is also the reunion visit — **Cloud**, **Aerith**, **Tifa**, **Leon**, **Cid** — and the introduction of **Yuna, Rikku and Paine**, the Final Fantasy X-2 trio, here working as spies for Maleficent.\n\nThe castle is a **maze of corridors** where it is easy to go round in circles. The route below crosses it picking everything up.",
      ),
      steps: [
        {
          id: "ville-et-poterne",
          title: L("De la ville à la Poterne", "From the town to the Postern"),
          text: L(
            "Passez chez Merlin en parlant à Picsou avant de sortir. Vous croisez **Cloud**, toujours à la recherche de Séphiroth, et **Aerith**. Chez Merlin, **Cid** vous envoie au bureau d'Ansem.\n\nAux Fortifications, trois jeunes filles vous interpellent : **Yuna, Rikku et Paine**. Continuez le chemin en prenant une **pièce de puzzle** dans les escaliers.\n\nTraversez le **Chantier** jusqu'à la **Poterne**, où Aerith vous indique l'entrée du château. Deux coffres : la **carte des alentours du château** et une **Gemme de mithril**. Descendez l'escalier en prenant une **pièce de puzzle** et un **Bonus PC** en bas.",
            "Stop at Merlin's, talking to Scrooge before you leave. You run into **Cloud**, still looking for Sephiroth, and **Aerith**. At Merlin's, **Cid** sends you to Ansem's study.\n\nAt the Bailey, three young women hail you: **Yuna, Rikku and Paine**. Carry on, taking a **puzzle piece** on the stairs.\n\nCross the **Restoration Site** to the **Postern**, where Aerith points out the castle entrance. Two chests: the **castle grounds map** and a **Mythril Gem**. Go down the stairs, taking a **puzzle piece** and an **AP Boost** at the bottom.",
          ),
        },
        {
          id: "dedale",
          title: L("Le dédale du château", "The castle maze"),
          text: L(
            "À l'intérieur, suivez ce chemin pour tout ramasser sans tourner en rond :\n\n- Au **premier embranchement**, à gauche : un **Cristal noir**.\n- Au **carrefour suivant**, à gauche encore : une **Pierre de mithril** près d'un mur écroulé.\n- Suivez ce couloir jusqu'au coffre suivant : un **Cristal de mithril**.\n- Revenez de quelques pas et prenez le **passage sud** vers une grande salle.\n- Tout droit à l'**ouest** : un couloir avec un **Bonus PC**.\n- Revenez à la grande salle et prenez le **couloir sud** jusqu'au bureau d'Ansem.\n\nVous y rencontrez **Tifa**, à la recherche d'un garçon « aux cheveux en pétard ». Léon arrive et vous mène à l'ordinateur. **Avant de lui parler**, ouvrez le coffre à ses côtés : une **Formule de compétences**.\n\nStitch s'en mêle, Donald fait une fausse manœuvre, et vous êtes aspirés dans le système.",
            "Inside, follow this route to pick everything up without going in circles:\n\n- At the **first fork**, go left: a **Dark Crystal**.\n- At the **next junction**, left again: a **Mythril Stone** by a collapsed wall.\n- Follow that corridor to the next chest: a **Mythril Crystal**.\n- Come back a few steps and take the **southern passage** into a large room.\n- Straight ahead to the **west**: a corridor with an **AP Boost**.\n- Back to the large room and take the **southern corridor** to Ansem's study.\n\nThere you meet **Tifa**, looking for a boy with 'spiky hair'. Leon arrives and takes you to the computer. **Before talking to him**, open the chest beside him: an **AP Boost formula**.\n\nStitch gets involved, Donald fumbles a control, and you are pulled into the system.",
          ),
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC ×2", "AP Boost ×2"), where: L("Au bas de l'escalier de la Poterne, et dans le couloir ouest du dédale.", "At the bottom of the Postern stairs, and in the maze's western corridor.") },
        { kind: "minigame", label: L("Deux pièces de puzzle", "Two puzzle pieces"), where: L("Dans les escaliers après les Fortifications, et au bas de l'escalier de la Poterne.", "On the stairs past the Bailey, and at the bottom of the Postern stairs.") },
        { kind: "synthesis", label: L("Cristal noir, Cristal de mithril, Gemme de mithril, Pierre de mithril", "Dark Crystal, Mythril Crystal, Mythril Gem, Mythril Stone"), where: L("Répartis dans le dédale du château et à la Poterne.", "Spread through the castle maze and the Postern.") },
      ],
    },
    {
      id: "space-paranoids",
      title: L("Space Paranoids", "Space Paranoids"),
      subtitle: L("Première visite", "First visit"),
      world: "the-grid",
      level: "28",
      status: "done",
      intro: L(
        "Un monde entièrement virtuel, à l'intérieur de l'ordinateur d'Ansem — et le seul du jeu dont on ne peut **pas sortir par les points de sauvegarde**. Il faut passer par les **terminaux**, et ils sont hors service à votre arrivée.\n\nLa mécanique propre au monde est la jauge de **Granules** : les Sans-cœur frappés lâchent des orbes qui la remplissent, et une jauge pleine ouvre la commande **Geler**. Elle sert à tout ici — ouvrir votre cellule, désactiver les moniteurs, immobiliser le boss.\n\n**Tron** rejoint l'équipe, et la visite se termine sur la Keyblade **Debugger photon**. Entre les deux, il y a une course de Light Cycle qu'il faudra sans doute recommencer.",
        "A fully virtual world, inside Ansem's computer — and the only one in the game you **cannot leave by save point**. You have to use the **terminals**, and they are out of order when you arrive.\n\nThe world's own mechanic is the **Data** gauge: Heartless you hit drop orbs that fill it, and a full gauge opens the **Freeze** command. It is used for everything here — opening your cell, disabling the monitors, pinning the boss.\n\n**Tron** joins the party, and the visit ends on the **Photon Debugger** Keyblade. In between there is a Light Cycle race you will probably have to retry.",
      ),
      steps: [
        {
          id: "cellule",
          title: L("La cellule, et le canyon", "The cell, and the canyon"),
          text: L(
            "Vous êtes arrêté dès l'arrivée. En cellule, vous rencontrez **Tron**.\n\nPour sortir : **frappez la porte à la Keyblade** et **ramassez les orbes noirs** à chaque coup — ils remplissent la jauge d'énergie en haut à gauche. Une fois pleine, **Geler** ouvre définitivement la porte. Tron se joint alors à vous.\n\nRamassez la **carte de la cyber cellule** et le **Cristal de mithril** dans les coffres des environs, puis placez-vous sur le disque lumineux pour rejoindre le **canyon**.\n\nIl faut réparer l'appareil de la salle de gauche. Avant : un **Cristal glacial** devant cette salle, une **Pierre de mithril** en montant les marches, puis un **Cristal noir** et une **Gemme de mithril** au sommet. De là, on atteint la salle du cœur énergétique — et une **pièce de puzzle** au passage.",
            "You are arrested on arrival. In the cell you meet **Tron**.\n\nTo get out: **hit the door with the Keyblade** and **collect the dark orbs** with each strike — they fill the energy gauge at the top left. Once full, **Freeze** opens the door for good. Tron then joins you.\n\nPick up the **Cyber Cell map** and the **Mythril Crystal** from the chests nearby, then step onto the light disc to reach the **canyon**.\n\nThe device in the left-hand room needs repairing. First: a **Frost Crystal** in front of that room, a **Mythril Stone** up the steps, then a **Dark Crystal** and a **Mythril Gem** at the top. From there you reach the Power Core room — and a **puzzle piece** on the way.",
          ),
        },
        {
          id: "bloc-rouge",
          title: L("Le bloc rouge", "The red block"),
          text: L(
            "Approchez-vous de la machine au centre et examinez le panneau de contrôle. Il faut retrouver la pièce manquante dans un temps limité.\n\nC'est un jeu d'attention : le **bloc rouge** repose au milieu d'un anneau de cubes qui descend du plafond, puis se met à tourner — **et le bloc rouge prend la couleur des autres**.\n\nIl n'y a pas d'astuce : **ne le quittez pas des yeux** jusqu'à l'arrêt de la rotation, puis frappez-le à la Keyblade.\n\nRetournez ensuite à la cyber cellule et sélectionnez le **laboratoire** au terminal.",
            "Step up to the machine in the centre and examine the control panel. You have to find the missing part within a time limit.\n\nIt is a game of attention: the **red block** sits in the middle of a ring of cubes that descends from the ceiling, then starts spinning — **and the red block takes on the same colour as the others**.\n\nThere is no trick: **do not take your eyes off it** until the ring stops, then hit it with the Keyblade.\n\nThen go back to the Cyber Cell and select the **laboratory** at the terminal.",
          ),
        },
        {
          id: "maitrise",
          title: L("Retour au château — la Fusion Maîtrise", "Back at the castle — Master Form"),
          text: L(
            "De retour à la Forteresse Oubliée, Tifa décroche le tableau d'Ansem et révèle des inscriptions. Observez-les : le **roi Mickey** arrive, et vous offre la Fusion **Maîtrise**.\n\nNe manquez pas le **Pendentif ukulélé** dans le coffre du couloir qui sépare le bureau d'Ansem de son ordinateur : c'est l'invocation de **Stitch**.\n\nExaminez de nouveau l'ordinateur pour repartir.",
            "Back at Hollow Bastion, Tifa takes Ansem's portrait off the wall and reveals an inscription. Look at it: **King Mickey** arrives, and gives you **Master Form**.\n\nDo not miss the **Ukulele Charm** in the chest in the corridor between Ansem's study and his computer: that is the **Stitch** summon.\n\nExamine the computer again to go back in.",
          ),
        },
        {
          id: "light-cycle",
          title: L("La course de Light Cycle, et la tour E/S", "The Light Cycle race, and the I/O Tower"),
          text: L(
            "Vous arrivez sur la grille de jeu pour une **course de Light Cycle**. Les commandes : **stick gauche** pour se décaler latéralement, **L1 et R1** pour tourner à gauche et à droite.\n\nPremière partie : mettre hors d'état de nuire **cinq adversaires**. **Carré** détruit la protection de la cible, **Rond** pare ses attaques, **Croix** frappe. Ensuite, il faut atteindre la sortie — et malgré les apparences, cette seconde partie est coriace. Il n'est pas rare de la recommencer plusieurs fois.\n\nTron revient dans l'équipe. Direction l'**espace de données** : examinez l'ordinateur, laissez Tron entrer le mot de passe, puis **désactivez les moniteurs en moins de deux minutes** sous les assauts continus. Le principe est toujours le même : tuez pour remplir la jauge **Granules**, puis **Geler** sur chaque moniteur.\n\nTron récupère ses pouvoirs — **pensez à dépenser ses PC** pour activer ses nouvelles compétences.\n\nSortez vers le **hall de la tour E/S** : un **Bonus PC** et un **Cristal de force**. La salle de transmission, à l'est, donne la **carte de la tour E/S** et la **Ceinture Gaia**. En ressortant dans le hall, un programme vous attend.",
            "You arrive on the game grid for a **Light Cycle race**. The controls: **left stick** to move sideways, **L1 and R1** to turn left and right.\n\nFirst part: take out **five opponents**. **Square** destroys the target's shield, **Circle** parries its attacks, **Cross** hits. Then you have to reach the exit — and despite appearances, that second part is tough. Retrying it several times is not unusual.\n\nTron rejoins the party. Head for the **Data Space**: examine the computer, let Tron enter the password, then **disable the monitors in under two minutes** under constant attack. The principle is the same as always: kill to fill the **Data** gauge, then **Freeze** each monitor.\n\nTron gets his powers back — **remember to spend his AP** to switch on his new abilities.\n\nGo out to the **I/O Tower lobby**: an **AP Boost** and a **Power Crystal**. The communications room to the east gives the **I/O Tower map** and the **Gaia Belt**. On the way back into the lobby, a program is waiting.",
          ),
        },
      ],
      bosses: [
        {
          id: "programme-belliqueux",
          name: L("Programme Belliqueux", "Hostile Program"),
          entry: "hostile-program",
          level: "30",
          reward: L("Sora : une jauge de flux supplémentaire et Onde circulaire. Donald : +3 points de vie. Dingo : Profusion. Tron : +15 points de vie. Et la Keyblade Debugger photon.", "Sora: an extra Drive bar and Round Break. Donald: +3 HP. Goofy: MP Haste. Tron: +15 HP. Plus the Photon Debugger Keyblade."),
          tactics: L(
            "Un boss agaçant plutôt que dangereux : il **se maintient systématiquement hors de portée de la Keyblade** pendant que ses attaques, elles, vous atteignent sans peine.\n\nLa mécanique est la même que partout dans ce monde : **chaque coup qu'il encaisse libère des orbes** qui remplissent la jauge Granules. Jauge pleine, la commande **Geler** l'immobilise — et c'est là, et seulement là, qu'il faut sortir l'artillerie : la coopération avec Tron, ou la Fusion **Maîtrise** toute neuve.\n\nMéfiez-vous de la **contre-attaque à son réveil** : elle vous projette loin de lui.\n\nQuand sa vie baisse, il **tournoie dans l'arène à grande vitesse** et ne s'arrête que pour tirer des rayons. L'ordre est toujours le même : de gauche à droite, puis de bas en haut, puis dans toutes les directions. **Glissez-vous sous lui** pour vous abriter et le frapper.\n\nUne seule exception : quand il se place **au centre de la zone** et arrose toute la pièce, il n'y a pas d'abri. Encaissez, amassez ce que vous pouvez, et gelez-le dès que la jauge le permet.",
            "An irritating boss rather than a dangerous one: it **systematically keeps out of Keyblade range** while its own attacks reach you without trouble.\n\nThe mechanic is the same as everywhere in this world: **every hit it takes releases orbs** that fill the Data gauge. Gauge full, the **Freeze** command pins it — and that, and only that, is when you bring out the heavy weapons: the limit with Tron, or the brand-new **Master Form**.\n\nWatch for the **counter-attack as it wakes**: it throws you well clear.\n\nWhen its HP drops, it **spins around the arena at high speed** and only stops to fire beams. The order is always the same: left to right, then bottom to top, then every direction. **Slip underneath it** to shelter and strike.\n\nOne exception: when it settles **in the centre of the area** and sprays the whole room, there is no shelter. Take it, gather what you can, and freeze it the moment the gauge allows.",
          ),
          attacks: [
            { name: L("Rayons balayants", "Sweeping beams"), note: L("Gauche-droite, puis bas-haut, puis partout. Se glisser sous lui.", "Left-right, then bottom-top, then everywhere. Slip underneath it.") },
            { name: L("Réveil après Geler", "Waking from Freeze"), note: L("Il contre-attaque et vous projette. Ne restez pas collé à la fin du gel.", "It counters and throws you clear. Do not stay glued when the freeze ends.") },
          ],
        },
      ],
      collectibles: [
        { kind: "ability", label: L("Bonus PC", "AP Boost"), where: L("Dans le hall de la tour E/S.", "In the I/O Tower lobby.") },
        { kind: "ability", label: L("Fusion Maîtrise", "Master Form"), where: L("Du roi Mickey, au bureau d'Ansem, entre les deux passages dans l'ordinateur.", "From King Mickey, in Ansem's study, between the two trips into the computer.") },
        { kind: "ability", label: L("Pendentif ukulélé — Stitch", "Ukulele Charm — Stitch"), where: L("Dans le coffre du couloir entre le bureau d'Ansem et son ordinateur.", "In the chest in the corridor between Ansem's study and his computer."), note: L("Facile à manquer : on traverse ce couloir sans y penser.", "Easy to miss: you cross that corridor without thinking about it.") },
        { kind: "keyblade", label: L("Debugger photon", "Photon Debugger"), where: L("La victoire sur le Programme Belliqueux.", "Beating the Hostile Program.") },
        { kind: "ability", label: L("Ceinture Gaia", "Gaia Belt"), where: L("Dans la salle de transmission de la tour E/S, à l'est du hall.", "In the I/O Tower's communications room, east of the lobby.") },
      ],
      missable: [
        L("Le **Pendentif ukulélé** est dans un couloir de la Forteresse Oubliée qu'on traverse deux fois sans s'arrêter. Ce n'est pas une invocation qu'on récupère plus tard sans y penser : allez la chercher.", "The **Ukulele Charm** sits in a Hollow Bastion corridor you cross twice without stopping. It is not a summon you pick up later by accident: go and get it."),
      ],
    },
    {
      id: "forteresse-oubliee-4",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      subtitle: L("Quatrième visite", "Fourth visit"),
      world: "radiant-garden",
      level: "30",
      status: "todo",
    },
    {
      id: "terre-des-dragons-2",
      title: L("Terre des Dragons", "The Land of Dragons"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "land-of-dragons",
      level: "35",
      status: "todo",
    },
    {
      id: "chateau-de-la-bete-2",
      title: L("Château de la Bête", "Beast's Castle"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "beasts-castle",
      level: "36",
      status: "todo",
    },
    {
      id: "port-royal-2",
      title: L("Port Royal", "Port Royal"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "port-royal",
      level: "37",
      status: "todo",
    },
    {
      id: "colisee-2",
      title: L("Colisée de l'Olympe", "Olympus Coliseum"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "olympus",
      level: "39",
      status: "todo",
    },
    {
      id: "agrabah-2",
      title: L("Agrabah", "Agrabah"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "agrabah",
      level: "40",
      status: "todo",
    },
    {
      id: "ville-halloween-2",
      title: L("Ville d'Halloween", "Halloween Town"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "halloween-town",
      level: "41",
      status: "todo",
    },
    {
      id: "terre-des-lions-2",
      title: L("Terre des Lions", "Pride Lands"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "pride-lands",
      level: "43",
      status: "todo",
    },
    {
      id: "forteresse-oubliee-5",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      subtitle: L("Cinquième visite", "Fifth visit"),
      world: "radiant-garden",
      level: "45",
      status: "todo",
    },
    {
      id: "space-paranoids-2",
      title: L("Space Paranoids", "Space Paranoids"),
      subtitle: L("Deuxième visite", "Second visit"),
      world: "the-grid",
      level: "45",
      status: "todo",
    },
    {
      id: "cite-du-crepuscule-3",
      title: L("Cité du Crépuscule", "Twilight Town"),
      subtitle: L("Troisième visite — le train", "Third visit — the train"),
      world: "twilight-town",
      level: "47",
      status: "todo",
    },
    {
      id: "illusiopolis",
      title: L("Illusiopolis", "The World That Never Was"),
      subtitle: L("Le Monde qui n'existe pas", "The World That Never Was"),
      world: "world-that-never-was",
      level: "50",
      status: "todo",
    },
  ],
  quests,
};
