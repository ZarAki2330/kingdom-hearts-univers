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
