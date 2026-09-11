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
      status: "todo",
    },
    {
      id: "forteresse-oubliee",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      subtitle: L("Première visite — retrouvailles", "First visit — reunions"),
      world: "radiant-garden",
      level: "8",
      status: "todo",
    },
    {
      id: "terre-des-dragons",
      title: L("Terre des Dragons", "The Land of Dragons"),
      subtitle: L("Première visite", "First visit"),
      world: "land-of-dragons",
      level: "10",
      status: "todo",
    },
    {
      id: "chateau-de-la-bete",
      title: L("Château de la Bête", "Beast's Castle"),
      subtitle: L("Première visite", "First visit"),
      world: "beasts-castle",
      level: "13",
      status: "todo",
    },
    {
      id: "forteresse-oubliee-2",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      subtitle: L("Deuxième visite — le comité de restauration", "Second visit — the Restoration Committee"),
      world: "radiant-garden",
      level: "15",
      status: "todo",
    },
    {
      id: "colisee",
      title: L("Colisée de l'Olympe", "Olympus Coliseum"),
      subtitle: L("Première visite", "First visit"),
      world: "olympus",
      level: "16",
      status: "todo",
    },
    {
      id: "chateau-disney",
      title: L("Château Disney", "Disney Castle"),
      subtitle: L("Première visite", "First visit"),
      world: "disney-castle",
      level: "18",
      status: "todo",
    },
    {
      id: "riviere-intemporelle",
      title: L("Rivière Intemporelle", "Timeless River"),
      subtitle: L("Le passé du château", "The castle's past"),
      world: "timeless-river",
      level: "19",
      status: "todo",
    },
    {
      id: "port-royal",
      title: L("Port Royal", "Port Royal"),
      subtitle: L("Première visite", "First visit"),
      world: "port-royal",
      level: "20",
      status: "todo",
    },
    {
      id: "agrabah",
      title: L("Agrabah", "Agrabah"),
      subtitle: L("Première visite", "First visit"),
      world: "agrabah",
      level: "22",
      status: "todo",
    },
    {
      id: "ville-halloween",
      title: L("Ville d'Halloween", "Halloween Town"),
      subtitle: L("Première visite", "First visit"),
      world: "halloween-town",
      level: "24",
      status: "todo",
    },
    {
      id: "terre-des-lions",
      title: L("Terre des Lions", "Pride Lands"),
      subtitle: L("Première visite", "First visit"),
      world: "pride-lands",
      level: "26",
      status: "todo",
    },
    {
      id: "cite-du-crepuscule-2",
      title: L("Cité du Crépuscule", "Twilight Town"),
      subtitle: L("Deuxième visite — le manoir", "Second visit — the mansion"),
      world: "twilight-town",
      level: "28",
      status: "todo",
    },
    {
      id: "forteresse-oubliee-3",
      title: L("Forteresse Oubliée", "Hollow Bastion"),
      subtitle: L("Troisième visite — la bataille", "Third visit — the battle"),
      world: "radiant-garden",
      level: "28",
      status: "todo",
    },
    {
      id: "space-paranoids",
      title: L("Space Paranoids", "Space Paranoids"),
      subtitle: L("Première visite", "First visit"),
      world: "the-grid",
      level: "28",
      status: "todo",
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
