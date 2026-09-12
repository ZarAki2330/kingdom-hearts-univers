import type { LocalizedText } from "@/data/games";
import type { WalkPlace, Walkthrough } from "./types";
import { quests } from "./kingdom-hearts-iii-quests";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/** Crédit commun des visuels repris du Kingdom Hearts Wiki (voir docs/IMAGES.md). */
const credit = (file: string) => `© Square Enix / Disney — via Kingdom Hearts Wiki (${file})`;

/** Une ligne d'emplacement : monde ou zone, ce qu'on y trouve, où, et ce qu'il faut avoir. */
const at = (world: string, what: [string, string], where: [string, string], requires?: [string, string]): WalkPlace => ({
  world: L(world, world),
  what: L(what[0], what[1]),
  where: L(where[0], where[1]),
  requires: requires ? L(requires[0], requires[1]) : undefined,
});

export const walkthrough: Walkthrough = {
  game: "kingdom-hearts-iii",
  version: L(
    "Kingdom Hearts III, version 1.09 — le jeu de base. L'extension Re Mind fera l'objet d'un guide à part.",
    "Kingdom Hearts III, version 1.09 — the base game. The Re Mind expansion will have its own guide.",
  ),
  intro: L(
    "Kingdom Hearts III se joue autrement que ses aînés. Les mondes sont vastes et verticaux, la Course libre remplace les couloirs, et le combat tourne autour de deux systèmes nouveaux : les **formes de Keyblade**, qui transforment l'arme en cours de combo, et les **commandes d'attraction**, qui déclenchent des manèges Disney au milieu d'une mêlée.\n\nCe guide suit l'ordre d'une partie, monde par monde, et signale à chaque étape ce qui ne se retrouve pas : les **emblèmes fétiches** photographiables, les coffres isolés, et les rares moments où un monde se referme.\n\nUn mot sur la difficulté. Kingdom Hearts III est nettement plus doux que Kingdom Hearts II en Normal, et **le mode Critique est ici le mode le plus intéressant** : il ne se contente pas d'augmenter les dégâts reçus, il donne dès le départ des capacités qui rendent le système entier plus lisible. Si vous hésitez, c'est dans ce sens qu'il faut hésiter.\n\nLe guide couvre le jeu de base. Les combats de **Re Mind**, l'**Épisode Limitcut** et l'**Épisode secret** appartiennent à l'extension et seront traités séparément.",
    "Kingdom Hearts III plays differently from its elders. The worlds are vast and vertical, Free Flow replaces corridors, and combat turns on two new systems: **Keyblade transformations**, which change the weapon mid-combo, and **Attraction Flow**, which drops Disney rides into the middle of a brawl.\n\nThis guide follows the order of a playthrough, world by world, and flags at each step what cannot be found again: the photographable **Lucky Emblems**, the isolated chests, and the rare moments a world closes.\n\nA word on difficulty. Kingdom Hearts III is markedly gentler than Kingdom Hearts II on Standard, and **Critical is the interesting mode here**: it does not merely raise incoming damage, it hands you abilities from the start that make the whole system more legible. If you are hesitating, hesitate in that direction.\n\nThe guide covers the base game. The **Re Mind** fights, the **Limitcut Episode** and the **Secret Episode** belong to the expansion and will be treated separately.",
  ),
  sections: [
    {
      id: "prologue",
      title: L("Prologue", "Prologue"),
      subtitle: L("Le Palier de l'Éveil et la Tour Mystérieuse", "The Dive to the Heart and the Mysterious Tower"),
      world: "dive-to-the-heart",
      level: "1",
      status: "done",
      intro: L(
        "Un prologue court, mais qui contient **les deux seuls choix définitifs de la partie**. Ils ne se reprennent pas, et ils décident de la forme que prendra Sora pendant trente heures.\n\nLe reste est un tutoriel : se déplacer, viser, examiner. Rien ne peut être raté.",
        "A short prologue, but one that contains **the only two permanent choices in the game**. They cannot be taken back, and they decide the shape Sora takes for the next thirty hours.\n\nThe rest is a tutorial: moving, aiming, examining. Nothing can be missed.",
      ),
      steps: [
        {
          id: "choix",
          title: L("Les deux choix du Palier", "The two choices on the Station"),
          text: L(
            "Le miroir au centre du palier pose la première question. Elle fixe les **points de vie et de magie de départ**, et l'écart se réduit en montant de niveau sans jamais disparaître tout à fait :\n\n- **Sagesse** (à gauche) : 90 PV et 120 PM — la magie de Kingdom Hearts III est excellente, c'est un choix défendable.\n- **Vigueur** (au centre) : 120 PV et 100 PM — le choix confortable, surtout en mode Critique.\n- **Équilibre** (à droite) : 105 PV et 110 PM — le compromis, et le choix par défaut si vous ne savez pas.\n\nLa seconde question ne change ni statistique ni capacité disponible : elle décide **l'ordre dans lequel Sora apprend ses compétences**. C'est plus important qu'il n'y paraît en début de partie, moins vers la fin.\n\n- **Gardien** : les capacités défensives d'abord — Garde, Riposte, Dernières forces.\n- **Guerrier** : les capacités offensives d'abord — combos, finitions, boosts d'attaque.\n- **Mystique** : les capacités magiques d'abord — coût des sorts, portée, régénération.\n\nEn **Critique**, prenez **Gardien** sans hésiter : les vingt premiers niveaux sont les plus rudes, et les outils défensifs y valent davantage que deux points de dégâts.",
            "The mirror at the centre of the station asks the first question. It sets your **starting HP and MP**, and the gap narrows as you level without ever quite closing:\n\n- **Wisdom** (left): 90 HP and 120 MP — magic in Kingdom Hearts III is excellent, so this is defensible.\n- **Vitality** (middle): 120 HP and 100 MP — the comfortable pick, especially on Critical.\n- **Balance** (right): 105 HP and 110 MP — the compromise, and the default if you are unsure.\n\nThe second question changes neither stats nor which abilities you can have: it decides **the order in which Sora learns them**. That matters more than it looks early on, less towards the end.\n\n- **Guardian**: defensive abilities first — Guard, Counter, Once More.\n- **Warrior**: offensive abilities first — combos, finishers, attack boosts.\n- **Mystic**: magic abilities first — spell cost, reach, regeneration.\n\nOn **Critical**, take **Guardian** without hesitating: the first twenty levels are the roughest, and defensive tools are worth more there than two points of damage.",
          ),
        },
        {
          id: "darkside",
          title: L("Les Ombres, puis la descente", "The Shadows, then the descent"),
          text: L(
            "Trois **Ombres** apparaissent : frappez-les pour apprendre le combo, et ramassez ce qu'elles lâchent.\n\nLe sol cède ensuite, et Sora tombe face au **Ténébreux** — le même adversaire que le tout premier combat de la série, revenu ici en leçon de rappel. Il n'y a aucun risque de perdre : le combat est calibré pour enseigner.\n\nLa victoire donne les magies **Brasier** et **Glacier**, et la scène enchaîne directement sur la Tour Mystérieuse.",
            "Three **Shadows** appear: hit them to learn the combo, and pick up what they drop.\n\nThe floor then gives way, and Sora falls to face the **Darkside** — the same opponent as the series' very first fight, brought back here as a refresher. There is no real risk of losing: the fight is calibrated to teach.\n\nWinning gives the **Fire** and **Blizzard** spells, and the scene leads straight on to the Mysterious Tower.",
          ),
        },
        {
          id: "tour",
          title: L("La Tour Mystérieuse", "The Mysterious Tower"),
          text: L(
            "Sora retrouve Donald et Dingo chez **Maître Yen Sid**, qui explique ce qui s'est passé pendant *0.2 Birth by Sleep* et pourquoi Sora a perdu sa puissance : le **pouvoir de l'éveil** est ce qu'il faut retrouver.\n\nParlez à tout le monde, puis aux **Trois Bonnes Fées** dans la pièce voisine : elles offrent le nouveau vêtement de Sora, et avec lui les **commandes d'attraction**.\n\nAvant de partir, ouvrez le coffre de la salle et parlez à **Petit Chef**, qui s'installe dans votre poêle. Le vaisseau Gummi attend en bas.\n\nDestination : **Olympe**.",
            "Sora finds Donald and Goofy at **Master Yen Sid**'s, who explains what happened during *0.2 Birth by Sleep* and why Sora has lost his strength: the **power of waking** is what has to be found again.\n\nTalk to everyone, then to the **Three Good Fairies** in the next room: they hand over Sora's new garment, and with it the **Attraction Flow** commands.\n\nBefore leaving, open the room's chest and talk to **Little Chef**, who moves into your pan. The Gummi ship waits below.\n\nDestination: **Olympus**.",
          ),
        },
      ],
      missable: [
        L(
          "Les deux choix du Palier de l'Éveil sont **définitifs** : ni le miroir ni l'ordre des compétences ne se reprennent en cours de partie.",
          "The two Dive to the Heart choices are **permanent**: neither the mirror nor the ability order can be revisited later.",
        ),
      ],
    },
    {
      id: "olympe",
      title: L("Olympe", "Olympus"),
      subtitle: L("Premier monde", "First world"),
      world: "olympus",
      level: "5",
      status: "done",
      intro: L(
        "Olympe est le monde d'apprentissage, et il est long — comptez trois bonnes heures. Il enseigne tout ce sur quoi le jeu reposera ensuite : la **Course libre** sur les murs, le **Tir visé**, les **commandes d'attraction**, et surtout le **changement de forme des Keyblades**, qui n'arrive qu'après les Titans.\n\nLe monde se traverse en deux temps. D'abord **Thèbes**, une ville à sauver, avec des habitants à secourir et des Sans-cœur à chasser de rue en rue. Ensuite la **montagne**, puis le **Royaume des Dieux**, beaucoup plus verticaux.\n\nDeux choses à ne pas manquer en chemin : le **Gummiphone**, qui ouvre l'appareil photo et donc toute la chasse aux emblèmes fétiches, et la **Forge reculée**, où Dingo reçoit sa première arme forgée.",
        "Olympus is the teaching world, and it is long — allow a good three hours. It introduces everything the rest of the game leans on: **Free Flow** along walls, **Shotlock**, **Attraction Flow**, and above all **Keyblade transformations**, which only arrive after the Titans.\n\nThe world is crossed in two halves. First **Thebes**, a town to save, with citizens to rescue and Heartless to drive street by street. Then the **mountain**, and the **Realm of the Gods**, far more vertical.\n\nTwo things not to miss on the way: the **Gummiphone**, which unlocks the camera and therefore the whole Lucky Emblem hunt, and the **Remote Forge**, where Goofy gets his first forged weapon.",
      ),
      steps: [
        {
          id: "montee",
          title: L("La montée du Mont Olympe", "The climb up Mount Olympus"),
          text: L(
            "Le monde s'ouvre sur une paroi à escalader : c'est le tutoriel de la **Course libre**. Approchez un mur en courant et Sora le remonte tout seul ; la même touche sert à rebondir d'un mur à l'autre.\n\nLes premiers Sans-cœur arrivent par vagues. C'est ici qu'apparaît la première **commande d'attraction**, le **Train d'artifice** : quand l'icône s'affiche, déclenchez-la — elle nettoie l'écran et le jeu compte sur vous pour en prendre l'habitude.\n\nEn haut, le **Titan de roche** barre la route.",
            "The world opens on a cliff to climb: this is the **Free Flow** tutorial. Run at a wall and Sora runs up it on his own; the same button bounces him from wall to wall.\n\nThe first Heartless come in waves. This is where the first **Attraction Flow** command appears, the **Big Magic Mountain**: when the prompt shows, use it — it clears the screen, and the game is counting on you to build the habit.\n\nAt the top, the **Rock Titan** blocks the way.",
          ),
        },
        {
          id: "thebes",
          title: L("Thèbes : l'agora, la ville et les jardins", "Thebes: the agora, the town and the gardens"),
          text: L(
            "L'**agora** contient le premier point de sauvegarde et la **boutique du Mog** : passez-y, les objets de soin y sont bon marché et vous en aurez besoin.\n\nLa ville brûle, et le principe est simple : **secourir les habitants** signalés sur la carte, en nettoyant les Sans-cœur autour d'eux. Les **jardins de Thèbes** prolongent la même consigne, avec plus de verticalité.\n\nDeux détours qui valent le coup. L'**oliveraie** donne des ingrédients pour le Bistrot du Petit Chef — c'est la première occasion d'en ramasser, et ils serviront tout le jeu. La **venelle** propose un défi chronométré : éliminer les Sans-cœur en **moins de trois minutes**.\n\nC'est aussi ici que Sora reçoit le **Gummiphone**. Dès qu'il est en main, l'appareil photo fonctionne : à partir de maintenant, **photographiez chaque emblème fétiche** que vous croisez plutôt que d'y revenir.",
            "The **agora** holds the first save point and the **moogle shop**: stop there, healing items are cheap and you will need them.\n\nThe town is burning, and the rule is simple: **rescue the citizens** marked on the map by clearing the Heartless around them. The **Gardens of Thebes** continue the same instruction, with more verticality.\n\nTwo worthwhile detours. The **olive grove** gives ingredients for Little Chef's bistro — the first chance to gather any, and they will matter all game. The **alley** offers a timed challenge: clear the Heartless in **under three minutes**.\n\nThis is also where Sora receives the **Gummiphone**. The moment it is in hand the camera works: from now on, **photograph every Lucky Emblem** you pass rather than coming back for it.",
          ),
        },
        {
          id: "montagne",
          title: L("Le ravin, le flanc et le sommet", "The ravine, the mountainside and the summit"),
          text: L(
            "Le **ravin du Mont Olympe** demande de traverser une rivière en enchaînant les surfaces : Course libre et sauts, rien de piégeux.\n\nSur le **flanc de montagne**, Hercule quitte l'équipe. Sora continue seul avec Donald et Dingo, et la difficulté monte d'un cran — c'est le moment de vérifier vos capacités équipées.\n\nLe **sommet** ouvre sur le **Royaume des Dieux**, qui se parcourt dans plusieurs directions. Les **couloirs** relient les zones, et la **crête des nuages** enchaîne sur une séquence de **tir sur rail** : laissez-vous porter et visez.\n\nAvant l'**Apogée**, passez par la **Forge reculée** : c'est là que Dingo reçoit la **Targe royale +**, sa première arme forgée, et le principe du forgeage vous resservira dans chaque monde.",
            "The **Mount Olympus ravine** asks you to cross a river by chaining surfaces: Free Flow and jumps, nothing tricky.\n\nOn the **mountainside**, Hercules leaves the party. Sora goes on with Donald and Goofy alone, and the difficulty steps up — a good moment to check your equipped abilities.\n\nThe **summit** opens onto the **Realm of the Gods**, which branches in several directions. The **corridors** link the areas, and the **cloud ridge** leads into a **rail-shooting** sequence: let yourself be carried and aim.\n\nBefore the **Apex**, stop at the **Remote Forge**: that is where Goofy receives the **Royal Shield +**, his first forged weapon, and the forging principle will come back in every world.",
          ),
        },
        {
          id: "formes",
          title: L("Ce qu'Olympe débloque vraiment", "What Olympus actually unlocks"),
          text: L(
            "Le monde ne rapporte pas grand-chose en objets, et beaucoup en systèmes. C'est ce qu'il faut retenir.\n\nLe **changement de forme des Keyblades** s'active après les Titans : à partir de là, chaque Keyblade a deux formes qui se déclenchent en plein combo, avec leurs propres finitions. C'est le cœur du combat de Kingdom Hearts III, et le jeu ne vous le donne qu'ici.\n\nLe **Tir visé** devient disponible : maintenez la touche pour verrouiller plusieurs cibles, relâchez pour tout frapper d'un coup. Il coûte de la Concentration, qui se recharge en combattant.\n\nLes **commandes d'attraction** se multiplient — Trio-bouclier, Brasier obscur, Double duel — et chacune a son contexte d'apparition.\n\nCôté équipement, Olympe donne la Keyblade **Genèse héroïque**, le **Rapproche-cœur onirique**, et plusieurs bonus de PV et de PM. Donald y apprend **Concentration** et **Booster Feu**, Dingo **Chance**.",
            "The world hands over little in items and a great deal in systems. That is what to take from it.\n\n**Keyblade transformation** switches on after the Titans: from then on each Keyblade has two forms triggered mid-combo, with their own finishers. That is the heart of Kingdom Hearts III's combat, and the game only gives it to you here.\n\n**Shotlock** becomes available: hold the button to lock several targets, release to hit them all at once. It costs Focus, which refills as you fight.\n\nThe **Attraction Flow** commands multiply — Blaster Blaze, Mad Tea Cups, Magic Carousel — and each has its own trigger.\n\nOn equipment, Olympus gives the **Hero's Origin** Keyblade, the **Dreamy Charm**, and several HP and MP boosts. Donald learns **Focus** and **Fire Boost**, Goofy **Lucky Strike**.",
          ),
        },
      ],
      bosses: [
        {
          id: "titan-roche",
          image: { src: "/images/walkthrough/kh3-titan-roche.webp", credit: credit("Rock_Titan_KHIII.png"), width: 420, height: 362 },
          name: L("Titan de roche", "Rock Titan"),
          entry: "rock-titan",
          level: "3",
          reward: L("Un bonus de **PM maximum** pour Sora", "A **max MP** boost for Sora"),
          tactics: L(
            "Le premier vrai combat, et une leçon déguisée : il ne se gagne pas en frappant au hasard.\n\nCommencez par les **pieds**, en Course libre autour de lui. Chaque pied touché le déséquilibre, et c'est ce déséquilibre qui met ses **têtes** à portée — repérez les points lumineux, ce sont les seules zones qui comptent.\n\nLa commande d'attraction **Train d'artifice** apparaît régulièrement : servez-vous-en, elle inflige bien plus que vos combos à ce stade.",
            "The first real fight, and a disguised lesson: it is not won by swinging at random.\n\nStart with the **feet**, running around him with Free Flow. Each foot hit unbalances him, and that is what brings his **heads** into reach — look for the glowing points, they are the only spots that count.\n\nThe **Big Magic Mountain** attraction turns up regularly: use it, it deals far more than your combos do at this stage.",
          ),
          attacks: [
            { name: L("Coup de poing au sol", "Ground punch"), note: L("Il abat un poing devant lui. Sautez au moment de l'impact plutôt que de courir sur le côté.", "He slams a fist down in front of him. Jump on impact rather than running sideways.") },
            { name: L("Piétinement", "Stomp"), note: L("Une onde partant de ses pieds. C'est le moment de prendre de la hauteur en Course libre.", "A shockwave from his feet. That is the moment to take height with Free Flow.") },
          ],
        },
        {
          id: "titans-feu-glace",
          image: { src: "/images/walkthrough/kh3-titan-glace.webp", credit: credit("Ice_Titan_KH3.png"), width: 420, height: 411 },
          name: L("Les Titans de feu et de glace", "The Fire and Ice Titans"),
          entry: "ice-titan",
          level: "6",
          tactics: L(
            "Deux Titans à la fois, chacun avec son élément. Le combat se joue en hauteur : leurs **têtes** sont les points faibles, et il faut donc monter.\n\nDeux moyens d'y arriver — la **Course libre** le long de leur corps, ou le **Tir visé**, qui verrouille la tête depuis le sol. Le Tir visé est plus sûr tant qu'on n'est pas à l'aise avec les déplacements.\n\nLeurs attaques élémentaires sont larges mais lentes : elles s'esquivent en gardant du mouvement, jamais en gardant sa position. Ne restez pas entre les deux.\n\nC'est la victoire sur les Titans qui débloque le **changement de forme des Keyblades**.",
            "Two Titans at once, each with its element. The fight is decided up high: their **heads** are the weak points, so you have to climb.\n\nTwo ways to get there — **Free Flow** along their bodies, or **Shotlock**, which locks the head from the ground. Shotlock is the safer option until you are comfortable moving around them.\n\nTheir elemental attacks are wide but slow: they are dodged by staying in motion, never by holding position. Do not stand between the two of them.\n\nBeating the Titans is what unlocks **Keyblade transformations**.",
          ),
          attacks: [
            { name: L("Souffle de feu", "Fire breath"), note: L("Un cône large devant le Titan de feu. Sortez par le côté, pas en reculant.", "A wide cone in front of the Fire Titan. Leave sideways, not backwards.") },
            { name: L("Rafale de glace", "Ice blast"), note: L("Des blocs projetés à distance par le Titan de glace. Ils se détruisent au Tir visé.", "Blocks thrown at range by the Ice Titan. They can be destroyed with Shotlock.") },
          ],
        },
        {
          id: "titan-vent",
          image: { src: "/images/walkthrough/kh3-titan-vent.webp", credit: credit("Tornado_Titan_KH3.png"), width: 382, height: 420 },
          name: L("Titan de vent", "Tornado Titan"),
          entry: "tornado-titan",
          level: "8",
          reward: L("Un bonus de **PV maximum** pour Sora", "A **max HP** boost for Sora"),
          tactics: L(
            "Le combat final du monde, et le plus spectaculaire. Il se déroule en **trois phases** nettement séparées.\n\n**Au sol**, d'abord : le principe est celui du Titan de roche, on frappe ce qui est à portée en attendant une ouverture.\n\n**En chute libre** ensuite : le décor disparaît, et il n'y a plus qu'à esquiver ce qui arrive. Ne cherchez pas à attaquer pendant cette phase, elle ne récompense que la survie.\n\n**En l'air** enfin, où le **Tir visé** devient l'outil principal : verrouillez tout ce que vous pouvez et relâchez. C'est la phase qui fait la différence, et celle où la Concentration se gère vraiment.",
            "The world's final fight, and the most spectacular. It runs in **three clearly separated phases**.\n\n**On the ground** first: the principle is the Rock Titan's, you hit what is in reach and wait for an opening.\n\n**In free fall** next: the scenery disappears and there is nothing to do but dodge what comes. Do not try to attack during this phase, it only rewards survival.\n\n**In the air** last, where **Shotlock** becomes the main tool: lock everything you can and release. That is the phase that decides the fight, and where Focus really has to be managed.",
          ),
          attacks: [
            { name: L("Tornade", "Tornado"), note: L("Il aspire tout ce qui est autour. Éloignez-vous dès que l'aspiration commence.", "He sucks in everything around him. Move away the moment the pull starts.") },
            { name: L("Projection de débris", "Debris throw"), note: L("Des blocs lancés pendant la phase aérienne : le Tir visé les fait disparaître.", "Blocks thrown during the aerial phase: Shotlock removes them.") },
          ],
        },
      ],
      tables: [
        {
          id: "systemes",
          title: L("Ce que le monde apprend, et quand", "What the world teaches, and when"),
          intro: L(
            "Olympe est le seul monde du jeu qui donne autant de systèmes d'un coup. Ce tableau sert de repère : si l'un d'eux vous manque plus tard, c'est qu'il se débloque ici.",
            "Olympus is the only world in the game that hands over this many systems at once. This table is a landmark: if one of them is missing later, it unlocks here.",
          ),
          columns: [L("Système", "System"), L("Quand il arrive", "When it arrives"), L("Ce qu'il change", "What it changes")],
          rows: [
            at("Course libre", ["Dès la montée du Mont Olympe.", "From the climb up Mount Olympus."], ["Les murs deviennent des chemins. C'est ce qui rend les mondes de Kingdom Hearts III verticaux.", "Walls become paths. It is what makes Kingdom Hearts III's worlds vertical."]),
            at("Commandes d'attraction", ["Le vêtement des Trois Bonnes Fées, à la Tour Mystérieuse.", "The Three Good Fairies' garment, at the Mysterious Tower."], ["Des manèges qui s'invitent en plein combat, très puissants et scénarisés.", "Rides that drop into the middle of a fight, very strong and fully scripted."]),
            at("Gummiphone", ["À Thèbes, pendant le sauvetage des habitants.", "In Thebes, during the citizen rescues."], ["L'appareil photo, et donc les **emblèmes fétiches** : à partir d'ici, photographiez tout.", "The camera, and therefore the **Lucky Emblems**: from here on, photograph everything."]),
            at("Tir visé", ["Dans le Royaume des Dieux.", "In the Realm of the Gods."], ["Le verrouillage multiple. Indispensable contre le Titan de vent, et utile tout le jeu.", "Multi-target lock. Essential against the Tornado Titan, and useful all game."]),
            at("Changement de forme des Keyblades", ["Après la victoire sur les Titans de feu et de glace.", "After beating the Fire and Ice Titans."], ["Chaque Keyblade gagne deux formes et leurs finitions. C'est le cœur du combat.", "Each Keyblade gains two forms and their finishers. This is the heart of combat."]),
            at("Forgeage", ["À la Forge reculée, avant l'Apogée.", "At the Remote Forge, before the Apex."], ["Les armes des compagnons s'améliorent. Le principe revient dans chaque monde.", "Party weapons get upgraded. The principle returns in every world."]),
          ],
        },
      ],
      missable: [
        L(
          "Rien ne se ferme définitivement à Olympe : le monde se revisite, et les emblèmes fétiches ratés se photographient au retour. Mais le Gummiphone n'arrive qu'au milieu de Thèbes — les emblèmes croisés avant sont à reprendre ensuite.",
          "Nothing closes for good in Olympus: the world can be revisited, and missed Lucky Emblems can be photographed on return. But the Gummiphone only arrives halfway through Thebes — emblems passed before that have to be picked up later.",
        ),
      ],
    },
    { id: "cite-du-crepuscule", title: L("Cité du Crépuscule", "Twilight Town"), subtitle: L("Première visite", "First visit"), world: "twilight-town", level: "10", status: "todo" },
    { id: "coffre-a-jouets", title: L("Coffre à Jouets", "Toy Box"), world: "toy-box", level: "14", status: "todo" },
    { id: "royaume-de-corona", title: L("Royaume de Corona", "Kingdom of Corona"), world: "kingdom-of-corona", level: "21", status: "todo" },
    { id: "monstropolis", title: L("Monstropolis", "Monstropolis"), world: "monstropolis", level: "26", status: "todo" },
    { id: "arendelle", title: L("Arendelle", "Arendelle"), world: "arendelle", level: "31", status: "todo" },
    { id: "les-caraibes", title: L("Les Caraïbes", "The Caribbean"), world: "port-royal", level: "36", status: "todo" },
    { id: "san-fransokyo", title: L("San Fransokyo", "San Fransokyo"), world: "san-fransokyo", level: "42", status: "todo" },
    { id: "retour", title: L("Le retour", "The return"), subtitle: L("Tour Mystérieuse, Cité du Crépuscule et le Domaine des Ténèbres", "Mysterious Tower, Twilight Town and the Realm of Darkness"), world: "twilight-town", level: "45", status: "todo" },
    { id: "necropole-des-keyblades", title: L("Nécropole des Keyblades", "The Keyblade Graveyard"), world: "keyblade-graveyard", level: "50", status: "todo" },
    { id: "monde-final", title: L("Le Monde Final", "The Final World"), world: "the-final-world", level: "50", status: "todo" },
    { id: "scala-ad-caelum", title: L("Scala ad Caelum", "Scala ad Caelum"), world: "scala-ad-caelum", level: "55", status: "todo" },
  ],
  quests,
};
