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
