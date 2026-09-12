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
          image: { src: "/images/walkthrough/kh3-olympe-2.webp", credit: credit("Olympus_011.png"), width: 480, height: 270 },
          title: L("La montée du Mont Olympe", "The climb up Mount Olympus"),
          text: L(
            "Le monde s'ouvre sur une paroi à escalader : c'est le tutoriel de la **Course libre**. Approchez un mur en courant et Sora le remonte tout seul ; la même touche sert à rebondir d'un mur à l'autre.\n\nLes premiers Sans-cœur arrivent par vagues. C'est ici qu'apparaît la première **commande d'attraction**, le **Train d'artifice** : quand l'icône s'affiche, déclenchez-la — elle nettoie l'écran et le jeu compte sur vous pour en prendre l'habitude.\n\nEn haut, le **Titan de roche** barre la route.",
            "The world opens on a cliff to climb: this is the **Free Flow** tutorial. Run at a wall and Sora runs up it on his own; the same button bounces him from wall to wall.\n\nThe first Heartless come in waves. This is where the first **Attraction Flow** command appears, the **Big Magic Mountain**: when the prompt shows, use it — it clears the screen, and the game is counting on you to build the habit.\n\nAt the top, the **Rock Titan** blocks the way.",
          ),
        },
        {
          id: "thebes",
          image: { src: "/images/walkthrough/kh3-olympe-3.webp", credit: credit("Olympus_014.jpg"), width: 480, height: 270 },
          title: L("Thèbes : l'agora, la ville et les jardins", "Thebes: the agora, the town and the gardens"),
          text: L(
            "L'**agora** contient le premier point de sauvegarde et la **boutique du Mog** : passez-y, les objets de soin y sont bon marché et vous en aurez besoin.\n\nLa ville brûle, et le principe est simple : **secourir les habitants** signalés sur la carte, en nettoyant les Sans-cœur autour d'eux. Les **jardins de Thèbes** prolongent la même consigne, avec plus de verticalité.\n\nDeux détours qui valent le coup. L'**oliveraie** donne des ingrédients pour le Bistrot du Petit Chef — c'est la première occasion d'en ramasser, et ils serviront tout le jeu. La **venelle** propose un défi chronométré : éliminer les Sans-cœur en **moins de trois minutes**.\n\nC'est aussi ici que Sora reçoit le **Gummiphone**. Dès qu'il est en main, l'appareil photo fonctionne : à partir de maintenant, **photographiez chaque emblème fétiche** que vous croisez plutôt que d'y revenir.",
            "The **agora** holds the first save point and the **moogle shop**: stop there, healing items are cheap and you will need them.\n\nThe town is burning, and the rule is simple: **rescue the citizens** marked on the map by clearing the Heartless around them. The **Gardens of Thebes** continue the same instruction, with more verticality.\n\nTwo worthwhile detours. The **olive grove** gives ingredients for Little Chef's bistro — the first chance to gather any, and they will matter all game. The **alley** offers a timed challenge: clear the Heartless in **under three minutes**.\n\nThis is also where Sora receives the **Gummiphone**. The moment it is in hand the camera works: from now on, **photograph every Lucky Emblem** you pass rather than coming back for it.",
          ),
        },
        {
          id: "montagne",
          image: { src: "/images/walkthrough/kh3-olympe-4.webp", credit: credit("Olympus_013.jpg"), width: 480, height: 270 },
          title: L("Le ravin, le flanc et le sommet", "The ravine, the mountainside and the summit"),
          text: L(
            "Le **ravin du Mont Olympe** demande de traverser une rivière en enchaînant les surfaces : Course libre et sauts, rien de piégeux.\n\nSur le **flanc de montagne**, Hercule quitte l'équipe. Sora continue seul avec Donald et Dingo, et la difficulté monte d'un cran — c'est le moment de vérifier vos capacités équipées.\n\nLe **sommet** ouvre sur le **Royaume des Dieux**, qui se parcourt dans plusieurs directions. Les **couloirs** relient les zones, et la **crête des nuages** enchaîne sur une séquence de **tir sur rail** : laissez-vous porter et visez.\n\nAvant l'**Apogée**, passez par la **Forge reculée** : c'est là que Dingo reçoit la **Targe royale +**, sa première arme forgée, et le principe du forgeage vous resservira dans chaque monde.",
            "The **Mount Olympus ravine** asks you to cross a river by chaining surfaces: Free Flow and jumps, nothing tricky.\n\nOn the **mountainside**, Hercules leaves the party. Sora goes on with Donald and Goofy alone, and the difficulty steps up — a good moment to check your equipped abilities.\n\nThe **summit** opens onto the **Realm of the Gods**, which branches in several directions. The **corridors** link the areas, and the **cloud ridge** leads into a **rail-shooting** sequence: let yourself be carried and aim.\n\nBefore the **Apex**, stop at the **Remote Forge**: that is where Goofy receives the **Royal Shield +**, his first forged weapon, and the forging principle will come back in every world.",
          ),
        },
        {
          id: "formes",
          image: { src: "/images/walkthrough/kh3-olympe-1.webp", credit: credit("Olympus_002.jpg"), width: 480, height: 270 },
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
    {
      id: "cite-du-crepuscule",
      title: L("Cité du Crépuscule", "Twilight Town"),
      subtitle: L("Première visite", "First visit"),
      world: "twilight-town",
      level: "10",
      status: "done",
      intro: L(
        "Une visite courte — une heure à peine — mais c'est celle qui installe la moitié des systèmes annexes du jeu. Le monde sert de sas entre Olympe et les sept mondes Disney, et il vaut mieux ne pas le traverser au pas de course.\n\nOn y trouve **Riri, Fifi et Loulou** et leur boutique Gummi, **Petit Chef** et son bistrot, et le **Royaume Classique** sur le Gummiphone. Ces trois-là resteront disponibles jusqu'à la fin.\n\nLe monde se termine dès qu'on a retrouvé l'**Oncle Picsou** et rapporté les ingrédients demandés. Deux destinations s'ouvrent ensuite : le **Coffre à Jouets** et le **Royaume de Corona**. Le Coffre à Jouets est le plus doux des deux.",
        "A short visit — barely an hour — but it is the one that installs half the game's side systems. The world acts as an airlock between Olympus and the seven Disney worlds, and it is better not to rush through it.\n\nHere you find **Huey, Dewey and Louie** and their Gummi shop, **Little Chef** and his bistro, and **Classic Kingdom** on the Gummiphone. All three stay available to the end.\n\nThe world ends as soon as you have found **Scrooge McDuck** and brought back the ingredients he asks for. Two destinations then open: the **Toy Box** and the **Kingdom of Corona**. The Toy Box is the gentler of the two.",
      ),
      steps: [
        {
          id: "arrivee",
          title: L("L'arrivée, et les Similis", "Arriving, and the Nobodies"),
          text: L(
            "Sora, Donald et Dingo débarquent au Quartier du tram et sont accueillis par des **Similis** — les premiers du jeu. Ils ne se battent pas comme les Sans-cœur : ils esquivent beaucoup, et les commandes contextuelles valent mieux que les combos.\n\nLe quartier se traverse librement. Prenez le temps d'ouvrir les coffres et de **photographier les emblèmes fétiches** : vous avez le Gummiphone depuis Olympe, et revenir plus tard coûte un aller-retour.\n\nLa **Marée démoniaque** apparaît au bout de la rue.",
            "Sora, Donald and Goofy arrive at the Tram Common and are greeted by **Nobodies** — the game's first. They do not fight like Heartless: they dodge a great deal, and situation commands beat combos.\n\nThe district is free to roam. Take the time to open the chests and **photograph the Lucky Emblems**: you have had the Gummiphone since Olympus, and coming back later costs a round trip.\n\nThe **Demon Tide** appears at the end of the street.",
          ),
        },
        {
          id: "picsou",
          title: L("Picsou, le bistrot et le Royaume Classique", "Scrooge, the bistro and Classic Kingdom"),
          text: L(
            "Après le combat, la ville s'ouvre vraiment. Trois choses à faire avant de repartir, et aucune n'est facultative si vous visez le 100 %.\n\n**La boutique Gummi** de Riri, Fifi et Loulou, sur la place : c'est là que s'achètent et se modifient les vaisseaux. Passez-y même sans rien acheter, elle se débloque à la première visite.\n\n**Le Bistrot du Petit Chef** : rapportez les ingrédients demandés et Petit Chef ouvre sa cuisine. Les repas donnent des **bonus de statistiques temporaires**, et ils sont largement sous-estimés — un plat complet avant un combat difficile vaut plusieurs niveaux.\n\n**Le Royaume Classique**, sur le Gummiphone : les trois premiers mini-jeux en noir et blanc — *Le Pays des géants*, *Le Fermier musicien*, *Mickey postier du ciel*. Les autres se ramassent dans les mondes suivants.\n\nDonald apprend **Coopération prolongée**.",
            "After the fight the town really opens up. Three things to do before leaving, and none of them is optional if you are aiming for 100%.\n\n**Huey, Dewey and Louie's Gummi shop**, on the square: this is where ships are bought and modified. Drop in even without buying anything, it unlocks on the first visit.\n\n**Little Chef's bistro**: bring back the ingredients he asks for and he opens his kitchen. Meals give **temporary stat bonuses**, and they are badly underrated — a full course before a hard fight is worth several levels.\n\n**Classic Kingdom**, on the Gummiphone: the first three black-and-white mini-games — *Giantland*, *Musical Farmer*, *The Barnyard Battle*. The rest are picked up in later worlds.\n\nDonald learns **Lucky Strike**.",
          ),
        },
      ],
      bosses: [
        {
          id: "maree-demoniaque",
          name: L("La Marée démoniaque", "The Demon Tide"),
          entry: "demon-tide",
          level: "10",
          reward: L("La magie **Glacier**, un bonus de **PV maximum**, et la Keyblade **Étoile filante**", "The **Blizzard** spell, a **max HP** boost, and the **Shooting Star** Keyblade"),
          tactics: L(
            "Une colonne de Sans-cœur qui traverse le Quartier du tram, plus impressionnante que dangereuse — mais elle enseigne une chose importante : **certains ennemis ne se frappent pas de face**.\n\nLe combat s'arrête tout seul une fois **deux jauges et demie** entamées : inutile de viser une victoire nette, il faut tenir et cogner.\n\nQuand elle s'entoure d'une **aura rouge**, elle accélère nettement. C'est le moment de reculer et d'attendre, pas d'insister.\n\nLes commandes d'attraction sortent souvent pendant ce combat : servez-vous-en, elles touchent toute la colonne d'un coup.",
            "A column of Heartless sweeping through the Tram Common, more impressive than dangerous — but it teaches something important: **some enemies are not hit head-on**.\n\nThe fight ends on its own once **two and a half gauges** are gone: there is no clean victory to aim for, you hold on and hit.\n\nWhen it wraps itself in a **red aura**, it speeds up markedly. That is the moment to back off and wait, not to press.\n\nAttraction commands come up often in this fight: use them, they hit the whole column at once.",
          ),
          attacks: [
            { name: L("Cercle aérien", "Aerial circle"), note: L("Elle tourne au-dessus de l'arène puis plonge dans le sol à répétition. Restez en mouvement, ne gardez jamais la même position.", "It circles above the arena then dives into the ground repeatedly. Keep moving, never hold the same spot.") },
            { name: L("Aura rouge", "Red aura"), note: L("Annonce une accélération. Reculez et laissez passer la première charge avant de revenir.", "Announces a speed-up. Back off and let the first charge pass before returning.") },
          ],
        },
      ],
      missable: [
        L(
          "Rien ne se ferme ici : la Cité du Crépuscule se revisite librement, et le bistrot comme la boutique Gummi restent ouverts jusqu'à la fin du jeu.",
          "Nothing closes here: Twilight Town can be revisited freely, and both the bistro and the Gummi shop stay open until the end of the game.",
        ),
      ],
    },
    {
      id: "coffre-a-jouets",
      title: L("Coffre à Jouets", "Toy Box"),
      subtitle: L("Le monde de Toy Story", "The Toy Story world"),
      world: "toy-box",
      level: "14",
      status: "done",
      intro: L(
        "Le plus accessible des sept mondes Disney, et celui par lequel il vaut mieux commencer. Il est bâti autour d'une idée unique : les **Gigas**, ces robots-jouets qu'on pilote depuis l'intérieur, et qui changent complètement la façon de se battre.\n\nLe monde se déroule en deux lieux. La **chambre d'Andy** sert d'introduction, puis tout se passe dans **Galaxy Toys**, un magasin sur trois étages qu'on remonte progressivement.\n\nSora y apprend **Pirouette**, l'esquive, et le monde donne quatre combats de boss — un rythme soutenu pour un monde de cette difficulté.",
        "The most approachable of the seven Disney worlds, and the one to start with. It is built around a single idea: the **Gigas**, toy mechs you pilot from inside, which completely change how you fight.\n\nThe world unfolds in two places. **Andy's room** serves as the introduction, then everything happens in **Galaxy Toys**, a three-floor store you climb.\n\nSora learns **Dodge Roll** here, and the world gives four boss fights — a brisk pace for a world of this difficulty.",
      ),
      steps: [
        {
          id: "chambre",
          image: { src: "/images/walkthrough/kh3-jouets-1.webp", credit: credit("Toy_Box_008.jpg"), width: 480, height: 270 },
          title: L("La chambre d'Andy, et la rue", "Andy's room, and the street"),
          text: L(
            "Sora, Donald et Dingo se réveillent transformés en jouets. Les premiers Sans-cœur arrivent aussitôt : le combat donne **Pirouette**, l'esquive du jeu. Équipez-la immédiatement, tout le reste du monde la suppose acquise.\n\nWoody, Buzz et les autres cherchent leurs amis disparus. La **rue** se traverse en direction de **Galaxy Toys**, avec quelques groupes de Sans-cœur sur le chemin.\n\nProfitez de la rue pour les coffres et les emblèmes : la boutique en contient beaucoup, mais elle se parcourt en étages et les allers-retours y sont plus longs.",
            "Sora, Donald and Goofy wake up as toys. The first Heartless arrive at once: the fight gives **Dodge Roll**, the game's evade. Equip it immediately, the rest of the world assumes you have it.\n\nWoody, Buzz and the others are looking for their missing friends. The **street** is crossed towards **Galaxy Toys**, with a few Heartless groups on the way.\n\nUse the street for chests and emblems: the store holds many more, but it is climbed floor by floor and backtracking there is slower.",
          ),
        },
        {
          id: "galaxy",
          image: { src: "/images/walkthrough/kh3-jouets-2.webp", credit: credit("Toy_Box_004.jpg"), width: 480, height: 270 },
          title: L("Galaxy Toys, étage par étage", "Galaxy Toys, floor by floor"),
          text: L(
            "Le magasin s'explore de bas en haut, et chaque étage a sa fonction.\n\nLe **rez-de-chaussée** présente les **Gigas** : trois variantes, reconnaissables à leur couleur. Le **rouge** frappe fort, le **bleu** va vite, le **violet** tire à distance. On monte dedans avec la commande contextuelle, et on en ressort quand la jauge est vide ou quand on le décide.\n\nLe **premier étage** est le rayon *Action*, avec ses figurines de dinosaures. Le **deuxième** abrite le rayon jeux vidéo et l'aire de jeux — c'est là que se trouve le plus gros des coffres.\n\nLe principe du monde tient en une phrase : **quand un Giga est disponible, prenez-le**. Les combats qui semblent injustes à pied deviennent triviaux dedans, et le jeu en met toujours un à portée quand il en faut un.",
            "The store is explored from the bottom up, and each floor has its purpose.\n\nThe **ground floor** introduces the **Gigas**: three variants, told apart by colour. **Red** hits hard, **blue** moves fast, **purple** fires at range. You climb in with the situation command, and step out when the gauge empties or when you choose to.\n\nThe **first floor** is the *Action* aisle, with its dinosaur figures. The **second** holds the video-game aisle and the play area — that is where most of the chests are.\n\nThe world's principle fits in one sentence: **when a Giga is available, take it**. Fights that feel unfair on foot become trivial inside one, and the game always puts one within reach when you need it.",
          ),
        },
      ],
      bosses: [
        {
          id: "gigas",
          name: L("Les Gigas possédés", "The possessed Gigas"),
          entry: "gigas-shadow",
          level: "14",
          reward: L("**Coopération prolongée** pour Dingo", "**Lucky Strike** for Goofy"),
          tactics: L(
            "Le premier vrai combat du monde, et un tutoriel déguisé : il ne se gagne pas à pied.\n\nMontez dans un **Giga** libre — il y en a toujours un à proximité — et affrontez les possédés d'égal à égal. À l'intérieur, les commandes changent : tir, charge, et une finition selon le modèle.\n\nSi votre Giga tombe, sortez-en avant l'explosion et prenez-en un autre. Les combattre à pied est possible mais long, et sans intérêt.",
            "The world's first real fight, and a disguised tutorial: it is not won on foot.\n\nClimb into a free **Giga** — there is always one nearby — and face the possessed ones on equal terms. Inside, the commands change: fire, charge, and a finisher depending on the model.\n\nIf your Giga goes down, get out before it explodes and take another. Fighting them on foot is possible but slow, and pointless.",
          ),
        },
        {
          id: "ambre-angelique",
          name: L("Ambre Angélique", "Angelic Amber"),
          entry: "angelic-amber",
          level: "15",
          reward: L("**Super saut** et un bonus de **PM maximum**", "**High Jump** and a **max MP** boost"),
          tactics: L(
            "Une poupée protégée par des **marionnettistes** : tant qu'ils sont en vie, les dégâts sur la poupée ne comptent presque pas.\n\nL'ordre est donc imposé : **éliminez d'abord les marionnettistes**, tous, puis concentrez-vous sur la poupée pendant qu'elle est seule. Elle en rappelle d'autres régulièrement — c'est un cycle, pas un accident.\n\nLa magie touche bien ici, notamment Brasier sur les groupes de marionnettistes.",
            "A doll protected by **puppeteers**: while they live, damage on the doll barely counts.\n\nThe order is therefore fixed: **kill the puppeteers first**, all of them, then focus the doll while it is alone. It calls more in regularly — that is a cycle, not an accident.\n\nMagic lands well here, particularly Fire on clusters of puppeteers.",
          ),
        },
        {
          id: "ovni",
          name: L("L'OVNI", "The UFO"),
          entry: "heartless",
          level: "16",
          reward: L("La magie **Foudre**", "The **Thunder** spell"),
          tactics: L(
            "Un adversaire qui reste en l'air, et un combat qui se joue sur la **hauteur**.\n\nGrimpez sur le présentoir pour arriver à son niveau, ou restez au sol et privilégiez les **attaques à distance** — le Tir visé et la magie sont bien plus efficaces que les combos ici.\n\nIl ne descend jamais de lui-même : si vous ne montez pas et ne tirez pas, le combat ne progresse pas.",
            "An opponent that stays airborne, and a fight decided by **height**.\n\nClimb the display stand to reach its level, or stay on the ground and favour **ranged attacks** — Shotlock and magic are far more effective than combos here.\n\nIt never comes down on its own: if you neither climb nor shoot, the fight does not progress.",
          ),
        },
        {
          id: "roi-des-jouets",
          image: { src: "/images/walkthrough/kh3-jouets-4.webp", credit: credit("Toy_Box_006.jpg"), width: 480, height: 270 },
          name: L("Le Roi des jouets", "The King of Toys"),
          entry: "king-of-toys",
          level: "18",
          reward: L("**Entaille plongeante**, un bonus de **PV maximum**, et la Keyblade **Shérif de l'Ouest**", "**Aerial Sweep**, a **max HP** boost, and the **Favorite Deputy** Keyblade"),
          tactics: L(
            "Le combat final du monde, et le plus vertical. Le Roi des jouets est trop grand pour être frappé au sol : il faut monter jusqu'à lui.\n\nLes **peluches rebondissantes** disposées dans l'arène servent de tremplins. Elles ne sont pas décoratives : c'est le seul moyen fiable d'atteindre sa tête, et le combat est calibré autour d'elles.\n\nAu sol, deux choses à éviter : les **projectiles** qu'il envoie par vagues, et ses **charges** en ligne droite. Les deux s'esquivent à la Pirouette, pas à la garde.\n\nEn haut, frappez tant que la fenêtre dure, puis redescendez plutôt que d'insister.",
            "The world's final fight, and the most vertical. The King of Toys is too big to be hit on the ground: you have to climb to him.\n\nThe **bouncy plush toys** placed around the arena are springboards. They are not decoration: they are the only reliable way to reach his head, and the fight is built around them.\n\nOn the ground, two things to avoid: the **projectiles** he sends in waves, and his straight-line **charges**. Both are dodged with Dodge Roll, not blocked.\n\nUp top, hit while the window lasts, then come back down rather than pressing on.",
          ),
        },
      ],
      tables: [
        {
          id: "gigas",
          title: L("Les trois Gigas", "The three Gigas"),
          intro: L(
            "Ils se reconnaissent à leur couleur, et le bon choix dépend de ce qu'on a en face. Rien n'empêche d'en changer en cours de combat : sortez, courez, montez dans un autre.",
            "They are told apart by colour, and the right pick depends on what you are facing. Nothing stops you from switching mid-fight: get out, run, climb into another.",
          ),
          columns: [L("Giga", "Giga"), L("Couleur", "Colour"), L("Quand le prendre", "When to take it")],
          rows: [
            at("Giga de puissance", ["Rouge", "Red"], ["Contre un ennemi unique et résistant. Ses coups sont lents mais chacun compte.", "Against a single tough enemy. Its blows are slow but each one counts."]),
            at("Giga de vitesse", ["Bleu", "Blue"], ["Contre les groupes et les ennemis qui esquivent. Il enchaîne bien plus vite.", "Against groups and dodging enemies. It chains far faster."]),
            at("Giga d'artillerie", ["Violet", "Purple"], ["Contre ce qui vole ou reste à distance. Le seul qui tire loin.", "Against anything airborne or at range. The only one that fires far."]),
          ],
        },
      ],
      missable: [
        L(
          "Le Coffre à Jouets se revisite. En revanche, plusieurs coffres de Galaxy Toys ne sont atteignables qu'en Giga : si un coffre semble hors de portée, c'est qu'il faut revenir avec le bon modèle.",
          "The Toy Box can be revisited. Several Galaxy Toys chests, however, are only reachable in a Giga: if a chest looks out of reach, it means coming back with the right model.",
        ),
      ],
    },
    {
      id: "royaume-de-corona",
      title: L("Royaume de Corona", "Kingdom of Corona"),
      subtitle: L("Le monde de Raiponce", "The Tangled world"),
      world: "kingdom-of-corona",
      level: "21",
      status: "done",
      intro: L(
        "Corona est le monde le plus contemplatif du jeu, et celui où **le temps qu'on prend est récompensé**. Sora accompagne Raiponce depuis sa tour jusqu'à la ville, et la forêt qui les sépare n'est pas qu'un couloir : quatre moments d'attention y sont cachés, et les réussir avant d'arriver en ville donne la **Barrette des bois**.\n\nLe monde est bâti en trois temps : la **forêt**, longue et ouverte, la **ville** et son festival, puis le retour à la **tour**.\n\nIl donne aussi deux capacités de déplacement majeures — **Hyper saut** et **Ascension spirale** — qui rendent les mondes suivants nettement plus lisibles.",
        "Corona is the game's most contemplative world, and the one where **taking your time is rewarded**. Sora escorts Rapunzel from her tower to the town, and the forest between them is not just a corridor: four moments of attention are hidden there, and clearing them before reaching town gives the **Forest Barrette**.\n\nThe world is built in three stages: the **forest**, long and open, the **town** and its festival, then the return to the **tower**.\n\nIt also gives two major movement abilities — **Hyper Jump** and **Spiral Ascent** — which make the following worlds markedly more legible.",
      ),
      steps: [
        {
          id: "foret",
          image: { src: "/images/walkthrough/kh3-corona-1.webp", credit: credit("Kingdom_of_Corona_002.png"), width: 480, height: 270 },
          title: L("La forêt, et les quatre moments de Raiponce", "The forest, and Rapunzel's four moments"),
          text: L(
            "Après avoir tiré Flynn Rider d'un mauvais pas, Sora escorte Raiponce à travers la forêt. Elle suit, commente, et **réagit à ce qui l'entoure** — c'est là que se joue le secret du monde.\n\nQuatre situations demandent une attention particulière, et toutes se ratent en avançant sans regarder :\n\n- Lancer **Glacier** sur un **pissenlit** pour le figer devant elle.\n- La laisser **nager** dans un étang.\n- **Protéger les lapins** d'un groupe de Sans-cœur au lieu de tout balayer.\n- **Guider les oiseaux** jusqu'à elle.\n\nLes quatre réussies **avant d'atteindre la ville** donnent la **Barrette des bois**. Après, c'est trop tard : le monde ne repropose pas ces moments.\n\nLa forêt contient aussi la plupart des coffres et des emblèmes fétiches du monde — c'est le bon moment pour fouiller, la ville est plus contrainte.",
            "After pulling Flynn Rider out of trouble, Sora escorts Rapunzel through the forest. She follows, comments, and **reacts to what is around her** — that is where the world's secret lies.\n\nFour situations ask for particular attention, and all of them are missed by walking on without looking:\n\n- Cast **Blizzard** on a **dandelion** to freeze it in front of her.\n- Let her **swim** in a pond.\n- **Protect the rabbits** from a group of Heartless instead of sweeping everything away.\n- **Guide the birds** to her.\n\nAll four cleared **before reaching town** give the **Forest Barrette**. Afterwards it is too late: the world does not offer those moments again.\n\nThe forest also holds most of the world's chests and Lucky Emblems — this is the moment to search, the town is more constrained.",
          ),
        },
        {
          id: "ville",
          image: { src: "/images/walkthrough/kh3-corona-2.webp", credit: credit("Kingdom_of_Corona_013.jpg"), width: 480, height: 270 },
          title: L("La ville, le festival et la danse", "The town, the festival and the dance"),
          text: L(
            "La ville de Corona est en fête. Le passage est surtout narratif, mais il cache un mini-jeu qui vaut le détour : la **danse sur la place centrale**, qui rapporte un **Booster de magie**.\n\nC'est un jeu de rythme court, et il se rejoue. Ne le laissez pas passer : les boosters de magie sont rares dans le jeu de base.\n\nLa ville contient quelques emblèmes fétiches, plus difficiles à repérer que ceux de la forêt — pensez à lever la caméra vers les toits.",
            "The town of Corona is celebrating. The passage is mostly narrative, but it hides a mini-game worth the detour: the **dance in the central plaza**, which pays out a **Magic Boost**.\n\nIt is a short rhythm game, and it can be replayed. Do not let it slip past: magic boosts are rare in the base game.\n\nThe town holds a few Lucky Emblems, harder to spot than the forest's — remember to look up at the rooftops.",
          ),
        },
      ],
      bosses: [
        {
          id: "chariot-du-chaos",
          name: L("Le Chariot du chaos", "The Chaos Carriage"),
          entry: "chaos-carriage",
          level: "22",
          tactics: L(
            "Un combat **défensif**, et le premier du jeu qui punit vraiment l'impatience.\n\nLe Chariot passe son temps à **charger en ligne droite**. Ces charges se parent : gardez au bon moment et il se retrouve exposé quelques secondes. C'est la seule vraie fenêtre d'attaque.\n\nEntre deux charges, il marque un **temps calme** — c'est là qu'on frappe, pas pendant qu'il se déplace.\n\nL'erreur classique est de le poursuivre. Restez en place, laissez-le venir, parez, frappez.",
            "A **defensive** fight, and the first in the game that really punishes impatience.\n\nThe Carriage spends its time **charging in straight lines**. Those charges can be parried: guard at the right moment and it is left exposed for a few seconds. That is the only real attack window.\n\nBetween two charges it has a **calm moment** — that is when you hit, not while it is moving.\n\nThe classic mistake is chasing it. Hold your ground, let it come, parry, strike.",
          ),
          attacks: [
            { name: L("Charge", "Charge"), note: L("En ligne droite, annoncée. Parez plutôt que d'esquiver : la parade ouvre la fenêtre d'attaque.", "In a straight line, telegraphed. Parry rather than dodge: the parry is what opens the window.") },
          ],
        },
        {
          id: "gardienne-funeste",
          image: { src: "/images/walkthrough/kh3-corona-3.webp", credit: credit("Kingdom_of_Corona_004.png"), width: 480, height: 270 },
          name: L("La Gardienne funeste", "The Grim Guardianess"),
          entry: "grim-guardianess",
          level: "24",
          reward: L("La Keyblade **À tout jamais**, **Hyper saut** et **Ascension spirale**", "The **Ever After** Keyblade, **Hyper Jump** and **Spiral Ascent**"),
          tactics: L(
            "Le combat final, dans la tour de Raiponce, et il se joue sur la **verticalité**.\n\nElle envoie des **nuées de corbeaux** et du **gaz paralysant** : les deux couvrent de larges zones, et les deux se fuient plutôt qu'ils ne se parent.\n\nLes **brèches de la tour** sont le chemin. Servez-vous-en pour monter à son niveau — c'est la seule façon de la frapper, et le combat alterne entre remonter et cogner.\n\nLe gaz paralysant est le vrai danger : paralysé en l'air, Sora tombe, et il faut tout remonter. Gardez une distance dès que le nuage apparaît.",
            "The final fight, in Rapunzel's tower, and it is decided by **verticality**.\n\nShe sends **flocks of crows** and **paralysing gas**: both cover wide areas, and both are fled rather than blocked.\n\nThe **breaches in the tower** are the path. Use them to climb to her level — that is the only way to hit her, and the fight alternates between climbing and striking.\n\nThe paralysing gas is the real danger: paralysed in the air, Sora falls, and the whole climb starts again. Keep your distance the moment the cloud appears.",
          ),
          attacks: [
            { name: L("Nuée de corbeaux", "Flock of crows"), note: L("Une vague large. Montez d'un cran plutôt que de tenter de la traverser.", "A wide wave. Climb a level rather than trying to cross it.") },
            { name: L("Gaz paralysant", "Paralysing gas"), note: L("Paralyse à l'impact, ce qui fait chuter Sora s'il est en l'air. Reculez dès l'apparition du nuage.", "Paralyses on contact, which drops Sora if he is airborne. Back away the moment the cloud appears.") },
          ],
        },
      ],
      missable: [
        L(
          "Les **quatre moments de Raiponce** dans la forêt ne se rejouent pas : ils doivent être réussis **avant d'entrer en ville**, sous peine de perdre définitivement la Barrette des bois pour cette partie.",
          "Rapunzel's **four forest moments** cannot be replayed: they have to be cleared **before entering town**, or the Forest Barrette is lost for that playthrough.",
        ),
      ],
    },
    {
      id: "monstropolis",
      title: L("Monstropolis", "Monstropolis"),
      subtitle: L("Le monde de Monstres & Cie", "The Monsters, Inc. world"),
      world: "monstropolis",
      level: "26",
      status: "done",
      intro: L(
        "Monstropolis change de registre : les ennemis n'y sont plus des Sans-cœur mais des **Nescients**, les créatures de *Birth by Sleep*. Ils frappent plus fort, esquivent autrement, et plusieurs n'ont qu'un seul point faible.\n\nLe monde se traverse en trois lieux : la **salle des portes** et ses rails, l'**usine**, puis la **centrale**. Les portes ne sont pas qu'un décor — elles servent de raccourcis et de pièges, et le monde joue beaucoup avec.\n\nC'est aussi le monde le plus riche en capacités : Sora y apprend **Riposte-impact** et **Maître du combo**, et récupère **Glacier +** et **Eau +**.",
        "Monstropolis changes register: the enemies are no longer Heartless but **Unversed**, the creatures from *Birth by Sleep*. They hit harder, dodge differently, and several have only one weak point.\n\nThe world is crossed in three places: the **door vault** and its rails, the **factory**, then the **power plant**. The doors are not just scenery — they act as shortcuts and traps, and the world plays with that a great deal.\n\nIt is also the richest world for abilities: Sora learns **Counter Impact** and **Combo Master**, and picks up **Blizzara+** and **Watera+**.",
      ),
      steps: [
        {
          id: "portes",
          image: { src: "/images/walkthrough/kh3-monstro-1.webp", credit: credit("Monstropolis_003.png"), width: 480, height: 270 },
          title: L("La salle des portes", "The door vault"),
          text: L(
            "Sora rencontre **Bob**, **Sulli** et **Bouh**, et se retrouve au milieu d'une usine envahie par les Nescients.\n\nLa salle des portes se parcourt sur des **rails**, avec les portes qui défilent. On saute de l'une à l'autre, on combat en équilibre, et on tombe si l'on s'endort. C'est spectaculaire et sans réelle difficulté, mais c'est là qu'on apprend à lire les Nescients.\n\nLe **Crapaud-tortue** apparaît ici : c'est le premier ennemi du jeu **entièrement blindé**. Sa carapace encaisse tout ; seule sa **gueule** prend des dégâts, et elle ne s'ouvre que lorsqu'il attaque. Attendez, encaissez, frappez à ce moment-là.",
            "Sora meets **Mike**, **Sulley** and **Boo**, and lands in the middle of a factory overrun by Unversed.\n\nThe door vault is travelled on **rails**, with the doors streaming past. You jump from one to the next, fight while balancing, and fall if you switch off. It is spectacular and not really difficult, but it is where you learn to read the Unversed.\n\nThe **Frost Serpent's** cousin, the armoured toad, appears here: the game's first **fully armoured** enemy. Its shell absorbs everything; only its **mouth** takes damage, and it only opens when it attacks. Wait, take the hit, strike then.",
          ),
        },
        {
          id: "usine",
          image: { src: "/images/walkthrough/kh3-monstro-2.webp", credit: credit("Monstropolis_008.png"), width: 480, height: 270 },
          title: L("L'usine et la centrale", "The factory and the power plant"),
          text: L(
            "L'**usine** est plus classique : des couloirs, des machines, des groupes de Nescients. C'est le passage où l'on monte en niveau sans y penser, et où les nouvelles capacités tombent.\n\n**Riposte-impact** transforme une garde réussie en contre-attaque qui touche autour de soi. **Maître du combo** empêche les combos d'être interrompus par un coup encaissé — c'est la capacité la plus importante du monde, et elle change la sensation de tous les combats suivants. Équipez-la dès qu'elle apparaît.\n\nLa **centrale** au centre de l'usine mène au combat final. Rien ne s'y ferme, mais c'est le dernier point de collecte tranquille avant le boss.",
            "The **factory** is more conventional: corridors, machines, groups of Unversed. It is the stretch where you level up without noticing, and where the new abilities drop.\n\n**Counter Impact** turns a successful guard into a counter that hits all around you. **Combo Master** stops combos from being interrupted by a hit taken — it is the world's most important ability, and it changes how every later fight feels. Equip it the moment it appears.\n\nThe **power plant** at the centre of the factory leads to the final fight. Nothing closes there, but it is the last quiet collection point before the boss.",
          ),
        },
      ],
      bosses: [
        {
          id: "immondice",
          image: { src: "/images/walkthrough/kh3-monstro-3.webp", credit: credit("Monstropolis_011.png"), width: 480, height: 270 },
          name: L("Immondice", "Lump of Horror"),
          entry: "unversed",
          level: "28",
          reward: L("La Keyblade **Zygomagique**", "The **Happy Gear** Keyblade"),
          tactics: L(
            "Un Nescient en **trois phases** nettement séparées, et chacune demande autre chose.\n\n**Première phase** : il envoie **trois salves de boules de feu** d'affilée. Elles s'esquivent à la Pirouette ou se gardent, mais il faut choisir avant la première — changer d'avis en cours de salve, c'est en prendre deux.\n\n**Deuxième phase** : des **mains sortent du sol**. Elles ne font pas beaucoup de dégâts individuellement, mais elles s'accumulent vite. Éliminez-les **à la Foudre** ou avec une commande d'impact qui touche autour de vous — les frapper une par une prend trop de temps.\n\n**Troisième phase** : il se réduit à un **gros noyau** entouré de mains. Le noyau est la cible ; les mains ne servent qu'à vous en écarter. Nettoyez ce qui gêne, puis concentrez tout sur le centre.",
            "An Unversed in **three clearly separated phases**, each asking for something different.\n\n**First phase**: it throws **three volleys of fireballs** in a row. They can be dodged or guarded, but you must pick before the first — changing your mind mid-volley means taking two.\n\n**Second phase**: **hands rise from the ground**. They do little damage individually but stack up fast. Clear them **with Thunder** or an impact command that hits all around you — hitting them one by one takes too long.\n\n**Third phase**: it reduces to a **large core** ringed by hands. The core is the target; the hands only exist to push you away. Clear what gets in the way, then put everything into the centre.",
          ),
          attacks: [
            { name: L("Salves de feu", "Fire volleys"), note: L("Trois d'affilée. Décidez avant la première si vous esquivez ou si vous gardez, et tenez-vous-y.", "Three in a row. Decide before the first whether you dodge or guard, and stick to it.") },
            { name: L("Mains du sol", "Hands from the ground"), note: L("Foudre ou une commande d'impact : les éliminer vite est plus important que de les éviter.", "Thunder or an impact command: clearing them fast matters more than avoiding them.") },
          ],
        },
      ],
    },
    {
      id: "arendelle",
      title: L("Arendelle", "Arendelle"),
      subtitle: L("Le monde de La Reine des neiges", "The Frozen world"),
      world: "arendelle",
      level: "31",
      status: "done",
      intro: L(
        "Arendelle est le monde le plus linéaire du jeu, et le plus contesté : sa **grotte de glace** est un labyrinthe où l'on redescend en boucle si l'on prend le mauvais couloir, et beaucoup de joueurs s'y arrêtent.\n\nLe principe est simple une fois compris. La montagne se monte, la grotte se traverse, le palais d'Elsa se rejoint. Entre les deux, deux passages de **luge** qui servent aussi de mini-jeu rejouable.\n\nLe monde donne la Keyblade **Neige cristalline**, et surtout **Super glissade**, qui accélère nettement les déplacements dans les mondes suivants.",
        "Arendelle is the most linear world in the game, and the most contested: its **ice labyrinth** sends you sliding back down in circles if you take the wrong corridor, and plenty of players stall there.\n\nThe principle is simple once understood. The mountain is climbed, the cave is crossed, Elsa's palace is reached. In between, two **sled** runs that double as a replayable mini-game.\n\nThe world gives the **Crystal Snow** Keyblade, and above all **Superslide**, which markedly speeds up movement in later worlds.",
      ),
      steps: [
        {
          id: "montagne",
          image: { src: "/images/walkthrough/kh3-arendelle-1.webp", credit: credit("Arendelle_01.jpg"), width: 480, height: 270 },
          title: L("La montagne et la grotte de glace", "The mountain and the ice labyrinth"),
          text: L(
            "La montée commence par des groupes de **Rhinoneiges**, gros et lents, et un premier boss.\n\nLa **grotte de glace** qui suit est le passage difficile du monde. Ce n'est pas un labyrinthe au sens strict : il y a un chemin, mais les mauvaises sorties vous renvoient en bas de la pente, et il faut tout remonter.\n\nLa règle qui marche : **suivez le vent et la lumière**. Les couloirs qui montent vraiment sont ceux où la neige est poussée vers l'avant. Quand vous hésitez, regardez d'où vient la poudreuse.\n\nDes coffres et des emblèmes fétiches jalonnent les parois — mais vérifiez votre chemin avant de faire un détour : un détour raté coûte une redescente complète.",
            "The climb starts with groups of **Snowhorns**, big and slow, and a first boss.\n\nThe **ice labyrinth** that follows is the world's hard passage. It is not a maze in the strict sense: there is a path, but wrong exits drop you back to the bottom of the slope, and the whole climb starts again.\n\nThe rule that works: **follow the wind and the light**. The corridors that really climb are the ones where the snow is pushed forward. When in doubt, look at where the powder is coming from.\n\nChests and Lucky Emblems dot the walls — but check your route before a detour: a failed detour costs a full descent.",
          ),
        },
        {
          id: "palais",
          image: { src: "/images/walkthrough/kh3-arendelle-2.webp", credit: credit("Arendelle_05.jpg"), width: 480, height: 270 },
          title: L("Le palais de glace, et la luge", "The ice palace, and the sled"),
          text: L(
            "Le palais d'Elsa est gardé par **Marshmallow**, la créature qu'elle a façonnée. Après lui, le monde s'ouvre sur sa dernière ligne droite.\n\nDeux séquences de **luge** ponctuent la descente. Elles sont scénarisées la première fois, puis deviennent un **mini-jeu rejouable** avec un score : c'est l'un des mini-jeux qui comptent pour le Carnet, autant y revenir une fois le monde terminé.\n\nLe monde abrite aussi la reconstruction d'**Olaf**, dont les morceaux sont éparpillés — une collecte facultative, mais rapide si on la fait en chemin plutôt qu'en revenant.\n\nLes **dragons de glace** croisés ici lâchent des matériaux de synthèse rares : c'est l'une des meilleures sources du jeu de base.",
            "Elsa's palace is guarded by **Marshmallow**, the creature she shaped. After him, the world opens onto its final stretch.\n\nTwo **sled** sequences punctuate the descent. They are scripted the first time, then become a **replayable mini-game** with a score: it is one of the mini-games that count for the Journal, so it is worth coming back once the world is done.\n\nThe world also hides the reassembly of **Olaf**, whose pieces are scattered — an optional hunt, but quick if done on the way rather than on a return trip.\n\nThe **ice dragons** met here drop rare synthesis materials: one of the best sources in the base game.",
          ),
        },
      ],
      bosses: [
        {
          id: "rocknbaladin",
          name: L("Rock'n'baladin", "Rock Troll"),
          entry: "unversed",
          level: "31",
          reward: L("La capacité **Brise-terre**", "The **Groundbreaker** ability"),
          tactics: L(
            "Il ne vient jamais seul : des **Rhinoneiges** l'accompagnent, et tant qu'ils sont là, ils vous poussent hors de position en permanence.\n\nL'ordre est donc imposé : **nettoyez d'abord les Rhinoneiges**, puis occupez-vous de lui.\n\nIl porte une **jauge d'armure** : tant qu'elle tient, les dégâts sont dérisoires. Brisez-la — les coups lourds et les commandes d'impact y sont bien plus efficaces que les combos rapides — et le vrai combat commence après.",
            "He never comes alone: **Snowhorns** accompany him, and while they are there they knock you out of position constantly.\n\nThe order is therefore fixed: **clear the Snowhorns first**, then deal with him.\n\nHe carries an **armour gauge**: while it holds, damage is negligible. Break it — heavy blows and impact commands work far better than fast combos — and the real fight starts after.",
          ),
        },
        {
          id: "marshmallow",
          image: { src: "/images/walkthrough/kh3-arendelle-3.webp", credit: credit("Arendelle_03.jpg"), width: 480, height: 270 },
          name: L("Marshmallow", "Marshmallow"),
          entry: "marshmallow",
          level: "33",
          reward: L("La magie **Glacier +**", "The **Blizzara** spell"),
          tactics: L(
            "Un combat de **parade**, et l'un des plus lisibles du jeu : Marshmallow enchaîne presque uniquement des frappes de bras, larges et annoncées.\n\nParez-les. Chaque parade réussie le déséquilibre et ouvre une contre-attaque — c'est le rythme du combat, et s'acharner entre deux frappes ne rapporte rien.\n\nLa magie **Brasier** ouvre des fenêtres supplémentaires : il est fait de glace, et le feu le fait reculer.\n\n**Seconde phase** : il se recouvre d'une **armure de glace** avec sa propre jauge. Même principe qu'avec Rock'n'baladin — cassez l'armure avant d'espérer entamer ses points de vie.",
            "A **parry** fight, and one of the most legible in the game: Marshmallow chains almost nothing but arm swings, wide and telegraphed.\n\nParry them. Each successful parry unbalances him and opens a counter — that is the fight's rhythm, and swinging between blows achieves nothing.\n\n**Fire** magic opens extra windows: he is made of ice, and flame drives him back.\n\n**Second phase**: he coats himself in **ice armour** with its own gauge. Same principle as the Rock Troll — break the armour before expecting to touch his HP.",
          ),
        },
        {
          id: "skoll",
          image: { src: "/images/walkthrough/kh3-arendelle-4.webp", credit: credit("Arendelle_04.jpg"), width: 480, height: 270 },
          name: L("Skǫll", "Skoll"),
          entry: "skoll",
          level: "34",
          reward: L("**Super glissade**, un bonus de **PM maximum**, et la Keyblade **Neige cristalline**", "**Superslide**, a **max MP** boost, and the **Crystal Snow** Keyblade"),
          tactics: L(
            "Le combat final : un loup d'ombre, rapide, qui **charge en ligne droite** et **invoque des doubles de sa tête** pour attaquer de plusieurs côtés à la fois.\n\nLes charges s'esquivent latéralement, jamais en reculant — il est plus rapide que Sora en ligne droite.\n\nLes doubles sont la vraie difficulté : ils arrivent par plusieurs angles et brisent les combos. **Maître du combo**, appris à Monstropolis, fait ici toute la différence.\n\nLe moment qui compte est sa **phase de lune noire** : une commande contextuelle apparaît, **Impact polaire**. Elle inflige beaucoup et interrompt la phase. Ne la ratez pas — c'est elle qui raccourcit le combat.",
            "The final fight: a shadow wolf, fast, which **charges in straight lines** and **summons duplicates of its head** to attack from several sides at once.\n\nThe charges are dodged sideways, never backwards — it is faster than Sora in a straight line.\n\nThe duplicates are the real difficulty: they come from several angles and break combos. **Combo Master**, learned in Monstropolis, makes all the difference here.\n\nThe moment that counts is its **dark moon phase**: a situation command appears, **Frozen Impact**. It deals heavily and interrupts the phase. Do not miss it — it is what shortens the fight.",
          ),
          attacks: [
            { name: L("Charge", "Charge"), note: L("En ligne droite et très rapide. Esquivez sur le côté, jamais vers l'arrière.", "Straight and very fast. Dodge sideways, never backwards.") },
            { name: L("Têtes multiples", "Multiple heads"), note: L("Des doubles qui mordent depuis plusieurs angles. Maître du combo évite de tout perdre à chaque morsure.", "Duplicates biting from several angles. Combo Master keeps a bite from costing you the whole combo.") },
            { name: L("Lune noire", "Dark moon"), note: L("La commande **Impact polaire** apparaît : déclenchez-la immédiatement.", "The **Frozen Impact** command appears: trigger it at once.") },
          ],
        },
      ],
      missable: [
        L(
          "Rien ne se ferme à Arendelle, mais la grotte de glace décourage les allers-retours : ramassez les coffres et les emblèmes au fur et à mesure de la montée plutôt que de prévoir d'y revenir.",
          "Nothing closes in Arendelle, but the ice labyrinth discourages backtracking: pick up chests and emblems as you climb rather than planning a return trip.",
        ),
      ],
    },
    {
      id: "les-caraibes",
      title: L("Les Caraïbes", "The Caribbean"),
      subtitle: L("Le monde de Pirates des Caraïbes", "The Pirates of the Caribbean world"),
      world: "port-royal",
      level: "36",
      status: "done",
      intro: L(
        "Le plus vaste monde du jeu, et le seul qui change complètement de genre : on y navigue. Le **Léviathan** se pilote librement entre les îles, avec ses propres combats navals, ses trésors et ses îlots à explorer.\n\nTrois activités se superposent. La **navigation**, qui structure tout. La **plongée**, dans les grottes sous-marines. Et la **chasse aux crabes blancs** — trois cents à trouver dans tout le monde pour réparer le navire, la plus longue collecte du jeu de base.\n\nLe monde donne la Keyblade **Gouvernail du destin**, et des emplacements supplémentaires d'objets et d'accessoires pour toute l'équipe.",
        "The largest world in the game, and the only one that changes genre outright: you sail. The **Leviathan** is piloted freely between the islands, with its own naval combat, treasures and islets to explore.\n\nThree activities overlap. **Sailing**, which structures everything. **Diving**, in the underwater caves. And the **white crab hunt** — three hundred to find across the world to repair the ship, the longest collection in the base game.\n\nThe world gives the **Wheel of Fate** Keyblade, and extra item and accessory slots for the whole party.",
      ),
      steps: [
        {
          id: "navigation",
          image: { src: "/images/walkthrough/kh3-caraibes-1.webp", credit: credit("Caribbean_KHIII_03.jpg"), width: 480, height: 270 },
          title: L("Le Léviathan, et la mer ouverte", "The Leviathan, and the open sea"),
          text: L(
            "Une fois le navire en main, la carte s'ouvre. On navigue d'île en île, on aborde, on explore, on repart — et le monde est assez grand pour qu'on s'y perde volontiers.\n\nLes **combats navals** suivent une logique simple : viser avec les canons, garder de la distance, et se servir des vagues. Ils se gagnent rarement à l'abordage.\n\nLes **grottes sous-marines** contiennent une bonne partie des coffres du monde. La plongée est libre et sans limite de souffle : prenez le temps de fouiller, c'est plus rentable ici qu'ailleurs.\n\nLes **crabes blancs** sont partout — sur les plages, dans les grottes, sur les rochers. Ils sont trois cents, et il n'y a pas de raccourci : ramassez-les en passant plutôt que de prévoir une session dédiée.",
            "Once the ship is yours, the map opens. You sail island to island, board, explore, leave again — and the world is big enough that getting lost in it is a pleasure.\n\n**Naval combat** follows a simple logic: aim with the cannons, keep your distance, and use the waves. It is rarely won by boarding.\n\nThe **underwater caves** hold a good share of the world's chests. Diving is free with no breath limit: take the time to search, it pays better here than elsewhere.\n\nThe **white crabs** are everywhere — on the beaches, in the caves, on the rocks. There are three hundred, and there is no shortcut: pick them up in passing rather than planning a dedicated session.",
          ),
        },
        {
          id: "hollandais",
          image: { src: "/images/walkthrough/kh3-caraibes-2.webp", credit: credit("Caribbean_KHIII_04.jpg"), width: 480, height: 270 },
          title: L("Le Hollandais Volant", "The Flying Dutchman"),
          text: L(
            "La dernière partie du monde se joue autour du **Hollandais Volant** et de son équipage. La mer devient hostile, les barrières d'eau apparaissent, et les combats navals se durcissent.\n\nC'est aussi ici que **Luxord** réapparaît — l'Organisation n'a pas disparu, et le monde bascule d'un coup du registre pirate au registre Kingdom Hearts.\n\nAvant d'aborder le Hollandais, videz la carte : une fois à bord, le monde se resserre nettement, et revenir chercher un coffre oublié devient long.",
            "The world's last stretch plays out around the **Flying Dutchman** and its crew. The sea turns hostile, water barriers appear, and naval combat hardens.\n\nThis is also where **Luxord** reappears — the Organisation has not gone away, and the world swings from pirate register to Kingdom Hearts register in one move.\n\nBefore boarding the Dutchman, clear the map: once aboard, the world narrows sharply, and coming back for a forgotten chest becomes slow.",
          ),
        },
      ],
      bosses: [
        {
          id: "wyverne",
          name: L("La Wyverne enragée", "The Raging Wyvern"),
          entry: "wyvern",
          level: "36",
          tactics: L(
            "Un combat **aérien**, mené depuis le dos d'une créature volante, pour protéger le Black Pearl.\n\nDeux moments distincts. En vol, vous **tirez des torpilles** : verrouillez et lâchez, la précision compte moins que la cadence.\n\nPuis vient la phase d'**escalade de l'échine** : Sora remonte le long de la créature pendant qu'elle se débat. Ne cherchez pas à frapper en montant, c'est une phase de progression, pas de combat.",
            "An **aerial** fight, ridden on a flying creature, to protect the Black Pearl.\n\nTwo distinct moments. In flight you **fire torpedoes**: lock and release, cadence matters more than precision.\n\nThen comes the **spine climb**: Sora runs up the creature while it thrashes. Do not try to hit on the way up, it is a traversal phase, not a combat one.",
          ),
        },
        {
          id: "poisson-tonnerre",
          image: { src: "/images/walkthrough/kh3-caraibes-4.webp", credit: credit("Caribbean_KHIII_02.jpg"), width: 480, height: 270 },
          name: L("Le Poisson-tonnerre", "The Lightning Angler"),
          entry: "heartless",
          level: "37",
          tactics: L(
            "Un combat **sous-marin**, court et brutal. L'adversaire est électrique, la zone est fermée, et la mobilité de Sora y est réduite.\n\nUne seule chose à retenir : **le feu le tue vite**. Enchaînez Brasier et ses versions supérieures sans économiser les PM — le combat est calibré pour être écourté, et le prolonger ne fait qu'accumuler les décharges encaissées.",
            "An **underwater** fight, short and brutal. The enemy is electric, the arena is closed, and Sora's mobility is reduced.\n\nOne thing to remember: **fire kills it fast**. Chain Fire and its upgrades without saving MP — the fight is calibrated to be cut short, and dragging it out only stacks up the shocks you take.",
          ),
        },
        {
          id: "kraken",
          name: L("Le Kraken", "The Kraken"),
          entry: "heartless",
          level: "38",
          tactics: L(
            "Un combat **naval**, et un exercice de priorités. Le Kraken attaque avec ses **tentacules**, le Hollandais Volant tire pendant ce temps, et le Black Pearl doit survivre aux deux.\n\nVisez les tentacules : ce sont elles qui font les dégâts, et chacune détruite allège la pression.\n\nLes **barrières d'eau** dressées par le Hollandais bloquent les tirs. Contournez-les plutôt que de tirer dedans — perdre une salve sur une barrière, c'est un tentacule de plus sur le Pearl.",
            "A **naval** fight, and an exercise in priorities. The Kraken attacks with its **tentacles**, the Flying Dutchman fires all the while, and the Black Pearl has to survive both.\n\nTarget the tentacles: they are what deal the damage, and each one destroyed eases the pressure.\n\nThe **water barriers** raised by the Dutchman block your shots. Go around them rather than firing into them — a volley wasted on a barrier is another tentacle on the Pearl.",
          ),
        },
        {
          id: "davy-jones",
          image: { src: "/images/walkthrough/kh3-caraibes-3.webp", credit: credit("Caribbean_KHIII_05.jpg"), width: 480, height: 270 },
          name: L("Davy Jones", "Davy Jones"),
          entry: "davy-jones",
          level: "40",
          reward: L("La Keyblade **Gouvernail du destin**", "The **Wheel of Fate** Keyblade"),
          tactics: L(
            "Le combat final, sur le pont du Hollandais Volant, en **deux phases**.\n\nLa première tourne autour de ses **téléportations** : il disparaît et réapparaît ailleurs, souvent derrière vous. Ne poursuivez pas — verrouillez et attendez la réapparition, c'est la seule façon de ne pas frapper dans le vide.\n\nLa seconde ajoute les **tentacules du Kraken** sur le pont. Elles ne le protègent pas, elles vous déplacent : traitez-les comme un décor mouvant et gardez Davy Jones comme unique cible.\n\nLe pont est étroit : la Pirouette y vaut mieux que la course, et tomber coûte plusieurs secondes.",
            "The final fight, on the Flying Dutchman's deck, in **two phases**.\n\nThe first turns on his **teleports**: he vanishes and reappears elsewhere, often behind you. Do not chase — lock on and wait for the reappearance, it is the only way not to swing at empty air.\n\nThe second adds **Kraken tentacles** on the deck. They do not protect him, they move you: treat them as shifting scenery and keep Davy Jones as your only target.\n\nThe deck is narrow: Dodge Roll beats running there, and falling costs several seconds.",
          ),
          attacks: [
            { name: L("Téléportation", "Teleport"), note: L("Il réapparaît souvent derrière Sora. Verrouillez et attendez plutôt que de courir après lui.", "He often reappears behind Sora. Lock on and wait rather than chasing.") },
            { name: L("Tentacules sur le pont", "Tentacles on deck"), note: L("Elles déplacent Sora plus qu'elles ne le blessent. Ne les prenez jamais pour cible.", "They move Sora more than they hurt him. Never take them as a target.") },
          ],
        },
      ],
      missable: [
        L(
          "Les **300 crabes blancs** restent trouvables après la fin du monde, mais la carte se parcourt moins vite une fois l'histoire terminée : mieux vaut les ramasser au fil de la navigation.",
          "The **300 white crabs** remain findable after the world ends, but the map is slower to cross once the story is done: better to gather them while sailing.",
        ),
      ],
    },
    {
      id: "san-fransokyo",
      title: L("San Fransokyo", "San Fransokyo"),
      subtitle: L("Le monde des Nouveaux Héros", "The Big Hero 6 world"),
      world: "san-fransokyo",
      level: "42",
      status: "done",
      intro: L(
        "Le dernier monde Disney, et le plus vertical de tous : San Fransokyo se parcourt **sur les toits et le long des gratte-ciel**, en Course libre presque permanente. Les rues au sol ne sont qu'un passage.\n\nLe monde introduit une nouvelle espèce de Sans-cœur, les **Pneumaniacs**, et trois combats de boss enchaînés qui montent nettement en intensité.\n\nUn avertissement qui vaut pour tout le monde : **quitter San Fransokyo déclenche la dernière ligne droite du jeu**. Videz la carte avant de partir — coffres, emblèmes fétiches, mini-jeux —, parce que le retour ne se fera plus dans les mêmes conditions.",
        "The last Disney world, and the most vertical of them all: San Fransokyo is crossed **over the rooftops and up the skyscrapers**, in near-constant Free Flow. The streets below are only a passage.\n\nThe world introduces a new Heartless species, the **Nobodies of the air**, and three chained boss fights that climb sharply in intensity.\n\nOne warning that matters for the whole world: **leaving San Fransokyo triggers the game's final stretch**. Clear the map before you go — chests, Lucky Emblems, mini-games — because coming back will not happen on the same terms.",
      ),
      steps: [
        {
          id: "toits",
          image: { src: "/images/walkthrough/kh3-sf-1.webp", credit: credit("San_Fransokyo_09.png"), width: 480, height: 270 },
          title: L("Les toits, Baymax et les Pneumaniacs", "The rooftops, Baymax and the airborne Heartless"),
          text: L(
            "Sora fait équipe avec **Baymax**, et le monde s'ouvre en hauteur. Les **Pneumaniacs** attaquent par nuées et restent en l'air : le Tir visé y est bien plus efficace que les combos.\n\nLa ville se parcourt en enchaînant les façades. Ne cherchez pas de chemin au sol : les coffres et les emblèmes sont sur les toits, les enseignes et les antennes, et la Course libre y monte plus vite qu'il n'y paraît.\n\nUn premier boss mécanique, un **Troll de métal**, sert de mise en jambes.",
            "Sora teams up with **Baymax**, and the world opens upward. The airborne Heartless attack in swarms and stay aloft: Shotlock is far more effective there than combos.\n\nThe city is crossed by chaining façades. Do not look for a route at street level: the chests and emblems are on rooftops, signs and aerials, and Free Flow climbs faster than it looks.\n\nA first mechanical boss, a **metal troll**, serves as a warm-up.",
          ),
        },
        {
          id: "entrainement",
          image: { src: "/images/walkthrough/kh3-sf-2.webp", credit: credit("San_Fransokyo_04.png"), width: 480, height: 270 },
          title: L("Le casque RA, et l'entraînement de Hiro", "The AR helmet, and Hiro's training"),
          text: L(
            "Sora récupère un **casque de réalité augmentée** qui sert à assister Hiro pendant ses exercices : passer dans des **anneaux**, éliminer des vagues d'ennemis, et des **défis de vol** chronométrés.\n\nCes exercices sont facultatifs mais comptent pour le Carnet, et ils sont le moyen le plus rapide de se familiariser avec la verticalité du monde avant les vrais combats.\n\nLe monde débloque aussi un nouveau circuit de **Lumirallye** — le mini-jeu de course en moto lumineuse.",
            "Sora picks up an **augmented-reality helmet** used to assist Hiro through his exercises: flying through **rings**, clearing waves of enemies, and timed **flight challenges**.\n\nThese are optional but count for the Journal, and they are the fastest way to get used to the world's verticality before the real fights.\n\nThe world also unlocks a new **Flantastic** circuit — the light-cycle racing mini-game.",
          ),
        },
      ],
      bosses: [
        {
          id: "catastrocoeurus",
          name: L("Catastrocœurus", "Catastrochorus"),
          level: "43",
          tactics: L(
            "Une grosse bête mécanique, en **deux phases**, et un combat qui apprend à lire les jauges d'armure en mouvement.\n\n**Première phase**, au sol : il souffle du **feu**, frappe de la **queue** avec une décharge électrique, et écrase le sol. Sa **jauge d'armure** doit tomber avant tout le reste — tant qu'elle tient, rien ne passe.\n\nUne fois l'armure brisée, un **conduit s'expose sur son dos**. C'est la seule cible qui compte : montez dessus en Course libre et frappez là.\n\n**Seconde phase** : il grimpe au sommet d'un immeuble. Le corps à corps devient impossible ; le **Tir visé** est le seul moyen de le toucher. Chargez, relâchez, rechargez — la Concentration se gère ici comme une ressource principale.",
            "A large mechanical beast, in **two phases**, and a fight that teaches reading armour gauges on the move.\n\n**First phase**, on the ground: it breathes **fire**, strikes with an electrified **tail**, and slams the ground. Its **armour gauge** has to fall before anything else — while it holds, nothing gets through.\n\nOnce the armour breaks, a **conduit is exposed on its back**. That is the only target that counts: climb up with Free Flow and hit there.\n\n**Second phase**: it climbs to the top of a building. Melee becomes impossible; **Shotlock** is the only way to reach it. Charge, release, recharge — Focus is managed here as a primary resource.",
          ),
          attacks: [
            { name: L("Souffle de feu", "Fire breath"), note: L("Un cône large au sol. Sortez par le côté, la Course libre est plus rapide que la course.", "A wide ground cone. Leave sideways; Free Flow is faster than running.") },
            { name: L("Queue électrique", "Electric tail"), note: L("Un balayage qui paralyse. Sautez plutôt que de garder.", "A sweep that paralyses. Jump rather than guard.") },
          ],
        },
        {
          id: "obscubes",
          image: { src: "/images/walkthrough/kh3-sf-3.webp", credit: credit("San_Fransokyo_07.png"), width: 480, height: 270 },
          name: L("Les Obscubes", "The Dark Cubes"),
          entry: "heartless",
          level: "44",
          tactics: L(
            "Une entité de ténèbres composée de **cubes** qui se réassemblent en permanence : tantôt des **poings**, tantôt une forme de **pieuvre**, et elle attaque aussi depuis les murs.\n\nFrapper les cubes ne sert à rien. La cible est le **cœur central** de la structure, et il n'est exposé que dans certaines configurations : attendez qu'elle s'ouvre plutôt que de cogner ce qui bouge.\n\nLes attaques murales sont les plus dangereuses parce qu'elles arrivent hors du champ de la caméra. Gardez du recul, et verrouillez le cœur plutôt qu'un cube.",
            "A darkness entity made of **cubes** that constantly reassemble: sometimes **fists**, sometimes an **octopus** shape, and it attacks from the walls as well.\n\nHitting the cubes achieves nothing. The target is the structure's **central heart**, and it is only exposed in certain configurations: wait for it to open rather than hammering whatever moves.\n\nThe wall attacks are the most dangerous because they come from outside the camera's field. Keep your distance, and lock the heart rather than a cube.",
          ),
        },
        {
          id: "baymax-obscur",
          name: L("Baymax obscur", "Dark Baymax"),
          entry: "dark-baymax",
          level: "45",
          reward: L("La Keyblade **Microcomposant**", "The **Nano Gear** Keyblade"),
          tactics: L(
            "Le combat final du monde, et le plus scénarisé, en **deux phases**.\n\n**Première phase**, une **poursuite aérienne** : il faut tirer sur les **cubes de lumière** et **renvoyer les projectiles** qu'il envoie. C'est un exercice de réflexes plus que de stratégie — les projectiles renvoyés font l'essentiel des dégâts.\n\n**Seconde phase**, sur le dos de Baymax : le combat redevient plus classique, mêlant tir à distance et corps à corps quand il s'approche.\n\nLe combat est plus impressionnant que difficile. La seule vraie erreur consiste à ignorer les projectiles renvoyables en première phase : sans eux, elle s'éternise.",
            "The world's final fight, and the most scripted, in **two phases**.\n\n**First phase**, an **aerial chase**: you shoot the **light cubes** and **send back the projectiles** he throws. It is a reflex exercise more than a strategic one — the returned projectiles do most of the damage.\n\n**Second phase**, on Baymax's back: the fight becomes more conventional, mixing ranged fire and melee when he closes in.\n\nThe fight is more impressive than hard. The one real mistake is ignoring the returnable projectiles in the first phase: without them it drags on.",
          ),
        },
      ],
      missable: [
        L(
          "**Quitter San Fransokyo déclenche la fin du jeu.** Terminez les coffres, les emblèmes fétiches, les exercices de Hiro et le Lumirallye avant de repartir : la suite enchaîne sans retour confortable vers les mondes Disney.",
          "**Leaving San Fransokyo triggers the endgame.** Finish the chests, Lucky Emblems, Hiro's exercises and the racing circuit before you go: what follows runs on without a comfortable way back to the Disney worlds.",
        ),
      ],
    },
    {
      id: "retour",
      title: L("Le retour", "The return"),
      subtitle: L("Le Monde obscur et la Contrée du Départ", "The Realm of Darkness and the Land of Departure"),
      world: "realm-of-darkness",
      level: "45",
      status: "done",
      intro: L(
        "Les mondes Disney sont derrière, et le jeu change de ton. Ce chapitre est court, dense, et il ne se parcourt plus : il s'enchaîne.\n\nSora et Riku descendent dans le **Monde obscur** pour retrouver **Aqua**, perdue là depuis dix ans. Puis vient la **Contrée du Départ**, et le réveil de **Ventus**.\n\nTrois combats s'y suivent, et ils sont d'un autre calibre que ceux des mondes Disney. C'est le moment de vérifier son équipement, de cuisiner un repas complet au bistrot, et de monter de quelques niveaux si le cœur vous en dit.",
        "The Disney worlds are behind, and the game changes tone. This chapter is short, dense, and no longer explored: it runs on.\n\nSora and Riku descend into the **Realm of Darkness** to find **Aqua**, lost there for ten years. Then comes the **Land of Departure**, and waking **Ventus**.\n\nThree fights follow one another, and they are of another calibre than the Disney worlds'. This is the moment to check your gear, cook a full meal at the bistro, and put on a few levels if you feel like it.",
      ),
      steps: [
        {
          id: "monde-obscur",
          title: L("Le Monde obscur", "The Realm of Darkness"),
          text: L(
            "Un lieu sans repères, où l'on avance à la lumière. Peu de coffres, peu d'exploration : le chapitre est bâti autour de ses deux combats.\n\nLa **Tour démoniaque** ouvre le passage. Puis vient **Aqua** — ou ce qu'il en reste après dix ans dans les ténèbres.\n\nC'est le moment le plus sombre du jeu, et il est court. Ne cherchez pas à le prolonger : il n'y a rien à y ramasser.",
            "A place without landmarks, where you move by the light. Few chests, little exploration: the chapter is built around its two fights.\n\nThe **Demon Tower** opens the way. Then comes **Aqua** — or what is left of her after ten years in the darkness.\n\nIt is the game's darkest stretch, and it is short. Do not try to draw it out: there is nothing to gather there.",
          ),
        },
        {
          id: "contree",
          title: L("La Contrée du Départ", "The Land of Departure"),
          text: L(
            "Aqua ramenée à elle, le groupe rejoint la **Contrée du Départ** pour réveiller **Ventus**. Le lieu est enfin lumineux, et le contraste avec le Monde obscur est voulu.\n\n**Vanitas** s'y oppose. Le combat est plus rapide et plus technique que les deux précédents — c'est le premier adversaire du jeu qui combat comme un porteur de Keyblade, avec des enchaînements et des esquives.\n\nAprès lui, la route mène directement à la **Nécropole des Keyblades**. C'est le dernier point calme : profitez-en pour tout équiper.",
            "With Aqua brought back, the group heads to the **Land of Departure** to wake **Ventus**. The place is bright at last, and the contrast with the Realm of Darkness is deliberate.\n\n**Vanitas** stands in the way. The fight is faster and more technical than the previous two — he is the first opponent in the game who fights like a Keyblade wielder, with chains and evades.\n\nAfter him the road leads straight to the **Keyblade Graveyard**. This is the last quiet point: use it to equip everything.",
          ),
        },
      ],
      bosses: [
        {
          id: "tour-demoniaque",
          name: L("La Tour démoniaque", "The Demon Tower"),
          entry: "demon-tower",
          level: "45",
          tactics: L(
            "La grande sœur de la Marée démoniaque croisée à la Cité du Crépuscule, en nettement plus agressive.\n\nMême principe : elle **tourne autour du terrain**, **plonge dans le sol** et **ressort sous vos pieds** à répétition. Rester immobile est la seule vraie faute.\n\nLa différence avec le premier combat, c'est qu'il faut cette fois la vaincre pour de bon. Les commandes d'attraction et les sorts de zone valent bien mieux que les combos : c'est une masse, pas une cible.",
            "The big sister of the Demon Tide met in Twilight Town, markedly more aggressive.\n\nSame principle: it **circles the arena**, **dives into the ground** and **surfaces under your feet** repeatedly. Standing still is the only real mistake.\n\nThe difference from the first fight is that this one has to be finished properly. Attraction commands and area spells are worth far more than combos: it is a mass, not a target.",
          ),
        },
        {
          id: "anti-aqua",
          name: L("Anti-Aqua", "Anti-Aqua"),
          entry: "anti-aqua",
          level: "46",
          tactics: L(
            "Un duel contre une porteuse de Keyblade, et le premier combat du jeu qui ressemble vraiment à ceux de l'Organisation.\n\nElle est **rapide**, **enchaîne les téléportations** et frappe à distance avec la magie. Poursuivre ne sert à rien : verrouillez, gardez, et frappez après ses séries.\n\nLa **parade** est ici plus utile que l'esquive : ses enchaînements se terminent par un coup lourd, et une parade bien placée ouvre une longue fenêtre.\n\nLe combat est aussi une scène : il se déroule dans un décor qui se dérobe, et la caméra ne facilite rien. Restez au centre autant que possible.",
            "A duel against a Keyblade wielder, and the first fight in the game that really resembles the Organisation's.\n\nShe is **fast**, **chains teleports** and strikes at range with magic. Chasing achieves nothing: lock on, guard, and hit after her strings.\n\n**Parrying** is more useful here than dodging: her chains end on a heavy blow, and a well-placed parry opens a long window.\n\nThe fight is also a scene: it plays out on collapsing scenery, and the camera does not help. Stay near the centre as much as you can.",
          ),
        },
        {
          id: "vanitas",
          name: L("Vanitas", "Vanitas"),
          entry: "vanitas",
          level: "47",
          tactics: L(
            "Le combat le plus technique de la première moitié de la fin. Vanitas se bat comme Sora : combos, esquives, et une **Keyblade** qu'il manie aussi bien que vous.\n\nIl alterne deux registres. Au **corps à corps**, il enchaîne vite et termine par un coup projetant — parez le dernier, jamais les premiers. À **distance**, il envoie des salves d'énergie sombre qui se renvoient au bon timing.\n\nIl invoque aussi des **Nescients** pour vous encombrer. Ne les poursuivez pas : ils ne sont là que pour casser vos combos, et ils disparaissent avec lui.\n\nLa clé est la patience. Vanitas punit l'agressivité aveugle plus sévèrement que n'importe quel adversaire croisé jusqu'ici.",
            "The most technical fight of the endgame's first half. Vanitas fights like Sora: combos, evades, and a **Keyblade** he handles as well as you do.\n\nHe alternates two registers. In **melee**, he chains fast and ends on a knockback blow — parry the last one, never the first ones. At **range**, he sends volleys of dark energy that can be sent back on the right timing.\n\nHe also summons **Unversed** to crowd you. Do not chase them: they exist only to break your combos, and they vanish with him.\n\nPatience is the key. Vanitas punishes blind aggression more severely than anything met so far.",
          ),
        },
      ],
    },
    {
      id: "necropole-des-keyblades",
      title: L("Nécropole des Keyblades", "The Keyblade Graveyard"),
      subtitle: L("L'arrivée", "The arrival"),
      world: "keyblade-graveyard",
      level: "50",
      status: "done",
      intro: L(
        "La Nécropole est le décor du dernier acte, et le jeu commence par vous y écraser.\n\nLe chapitre est court : quelques déplacements, deux capacités données d'office, et un combat que **vous n'êtes pas censé gagner**. Ce n'est pas un échec, c'est le scénario.\n\nAvant le combat, Sora reçoit deux capacités qui comptent pour tout ce qui suit : **Dernier coup** et **Vol plané**.",
        "The Graveyard is the setting of the last act, and the game starts by crushing you in it.\n\nThe chapter is short: a little travel, two abilities handed over outright, and a fight **you are not meant to win**. That is not a failure, it is the script.\n\nBefore the fight, Sora receives two abilities that matter for everything after: **Last Word** and **Glide**.",
      ),
      steps: [
        {
          id: "arrivee",
          title: L("L'arrivée, et les deux capacités", "The arrival, and the two abilities"),
          text: L(
            "Les gardiens de la lumière se rassemblent, et la Nécropole s'ouvre sur une plaine de Keyblades plantées.\n\nDeux capacités tombent ici, et il faut les équiper immédiatement :\n\n- **Dernier coup**, qui prolonge les combos d'une frappe supplémentaire.\n- **Vol plané**, qui remplace définitivement la Course libre pour les longues distances.\n\nLe chapitre ne contient presque rien à ramasser : c'est un couloir scénarisé jusqu'au combat.",
            "The guardians of light gather, and the Graveyard opens onto a plain of planted Keyblades.\n\nTwo abilities drop here, and both should be equipped at once:\n\n- **Last Word**, which extends combos by one extra strike.\n- **Glide**, which permanently replaces Free Flow over long distances.\n\nThe chapter holds almost nothing to collect: it is a scripted corridor up to the fight.",
          ),
        },
      ],
      bosses: [
        {
          id: "maree-demoniaque-2",
          name: L("La Marée démoniaque", "The Demon Tide"),
          entry: "demon-tide",
          level: "50",
          tactics: L(
            "Le même adversaire qu'à la Cité du Crépuscule, à une échelle sans rapport : une vague de Sans-cœur qui couvre l'horizon.\n\n**Ce combat ne se gagne pas.** Quoi que vous fassiez, la vague emporte les gardiens un à un, et Sora se retrouve seul. C'est voulu, et c'est ce qui mène au Monde Final.\n\nBattez-vous quand même : le jeu compte les dégâts infligés, et rien de ce que vous ferez ici ne sera perdu pour la suite.",
            "The same opponent as in Twilight Town, at an unrelated scale: a wave of Heartless covering the horizon.\n\n**This fight cannot be won.** Whatever you do, the wave carries the guardians away one by one, and Sora is left alone. That is deliberate, and it is what leads to The Final World.\n\nFight anyway: the game counts the damage dealt, and nothing you do here is wasted.",
          ),
        },
      ],
    },
    {
      id: "monde-final",
      title: L("Le Monde Final", "The Final World"),
      world: "the-final-world",
      level: "50",
      status: "done",
      intro: L(
        "Un entracte, et le plus beau passage du jeu : un désert blanc sans haut ni bas, où Sora se reconstitue morceau par morceau.\n\nLe chapitre n'a ni combat obligatoire ni difficulté. Il a en revanche **beaucoup à ramasser**, et c'est la seule occasion : **Rafale X**, l'**Écheveau de la Rupture** et un **Orichalque +** ne se trouvent nulle part ailleurs.\n\nIl abrite aussi la **Liche**, un adversaire facultatif qui se dérobe de monde en monde, et les **portails des mondes** par lesquels Sora refait le tour de son propre voyage.",
        "An interlude, and the game's most beautiful passage: a white desert with no up or down, where Sora puts himself back together piece by piece.\n\nThe chapter has no required fight and no difficulty. It does, however, have **a great deal to collect**, and this is the only chance: **Ultima Thunder**, the **Ragnarok Tangle** and an **Orichalcum+** are found nowhere else.\n\nIt also holds the **Lich**, an optional opponent who slips from world to world, and the **world portals** through which Sora retraces his own journey.",
      ),
      steps: [
        {
          id: "ramasser",
          title: L("Ce qu'il faut ramasser ici, et nulle part ailleurs", "What to collect here, and nowhere else"),
          text: L(
            "Le Monde Final est le seul chapitre du jeu où une collecte est **strictement unique**. Prenez le temps.\n\n- **Rafale X** — un sort de haut niveau qu'aucun autre monde ne donne.\n- **L'Écheveau de la Rupture** — un matériau de synthèse rare, indispensable aux dernières recettes de l'atelier des Mogs.\n- **Un Orichalque +** — l'un des sept du jeu, et donc une part de l'**Ultima**.\n\nLes **portails des mondes** dispersés dans le blanc ramènent chacun vers un monde déjà visité : ce sont des allers-retours courts, mais ils contiennent des fragments de Sora à récupérer, et le chapitre ne se termine qu'une fois l'essentiel réuni.",
            "The Final World is the only chapter in the game where a collection is **strictly unique**. Take your time.\n\n- **Ultima Thunder** — a high-level spell no other world gives.\n- **The Ragnarok Tangle** — a rare synthesis material, essential to the moogle workshop's last recipes.\n- **An Orichalcum+** — one of the game's seven, and therefore a share of the **Ultima Weapon**.\n\nThe **world portals** scattered through the white each lead back to a world already visited: short round trips, but they hold fragments of Sora to recover, and the chapter only ends once the essentials are gathered.",
          ),
        },
        {
          id: "liche",
          title: L("La Liche", "The Lich"),
          text: L(
            "La **Liche** apparaît ici, puis fuit. Elle se poursuit de monde en monde à travers les portails, et chaque rencontre est un combat court avant qu'elle ne disparaisse à nouveau.\n\nC'est facultatif, mais c'est aussi l'un des rares adversaires du jeu de base qui demande un peu de méthode : elle esquive beaucoup et se soigne si on la laisse respirer.\n\nLa terminer ferme une entrée du Carnet et donne de quoi avancer dans la synthèse.",
            "The **Lich** appears here, then flees. It is chased from world to world through the portals, and each encounter is a short fight before it vanishes again.\n\nIt is optional, but it is also one of the few opponents in the base game that asks for a little method: it dodges a great deal and heals if you let it breathe.\n\nFinishing it closes a Journal entry and gives material to push the synthesis further.",
          ),
        },
      ],
      missable: [
        L(
          "**Rafale X**, l'**Écheveau de la Rupture** et l'**Orichalque +** du Monde Final ne se trouvent nulle part ailleurs. Le chapitre se revisite après la fin du jeu, mais ne le quittez pas sans les avoir pris.",
          "**Ultima Thunder**, the **Ragnarok Tangle** and The Final World's **Orichalcum+** are found nowhere else. The chapter can be revisited after the ending, but do not leave without them.",
        ),
      ],
    },
    {
      id: "necropole-des-keyblades-2",
      title: L("Nécropole des Keyblades", "The Keyblade Graveyard"),
      subtitle: L("Les combats de l'Organisation", "The Organisation's fights"),
      world: "keyblade-graveyard",
      level: "52",
      status: "done",
      intro: L(
        "Le retour à la Nécropole, et le plus long enchaînement de combats de la série : **six affrontements** contre l'Organisation, presque sans respiration entre eux.\n\nChacun met Sora aux côtés d'alliés différents, et chacun a sa mécanique propre. Il n'y a pas de point de sauvegarde entre tous — vérifiez vos objets avant d'entrer.\n\nDeux conseils qui valent pour les six : **Maître du combo** équipé en permanence, et un repas complet du Bistrot du Petit Chef avant de commencer. Les bonus de repas durent assez longtemps pour couvrir plusieurs combats.",
        "The return to the Graveyard, and the longest chain of fights in the series: **six confrontations** with the Organisation, almost without a breath between them.\n\nEach puts Sora alongside different allies, and each has its own mechanic. There is no save point between them all — check your items before going in.\n\nTwo pieces of advice that hold for all six: **Combo Master** equipped permanently, and a full meal from Little Chef's bistro before starting. Meal bonuses last long enough to cover several fights.",
      ),
      bosses: [
        {
          id: "xigbar-riku-obscur",
          name: L("Xigbar et Riku obscur", "Xigbar and Dark Riku"),
          entry: "dark-riku",
          level: "52",
          tactics: L(
            "Deux adversaires aux registres opposés, et c'est tout le problème : **Xigbar** tire de loin en restant en hauteur, **Riku obscur** presse au corps à corps.\n\nNe les affrontez pas ensemble. Concentrez-vous sur **Riku obscur** d'abord : il est le plus dangereux à courte portée, et une fois seul, Xigbar devient lisible.\n\nContre Xigbar, le **Tir visé** est la réponse : il reste hors de portée et ne descend que rarement.",
            "Two opponents in opposite registers, and that is the whole problem: **Xigbar** fires from above and at range, **Dark Riku** presses in melee.\n\nDo not fight them together. Focus **Dark Riku** first: he is the more dangerous up close, and once he is gone Xigbar becomes legible.\n\nAgainst Xigbar, **Shotlock** is the answer: he stays out of reach and rarely comes down.",
          ),
        },
        {
          id: "luxord-marluxia-larxene",
          name: L("Luxord, Marluxia et Larxene", "Luxord, Marluxia and Larxene"),
          entry: "marluxia",
          level: "53",
          tactics: L(
            "Trois adversaires, et trois combats séparés : le jeu les donne l'un après l'autre plutôt que tous ensemble.\n\n**Luxord** impose ses règles — cartes, dés, et une jauge de temps qui le fait disparaître si elle s'épuise. Ne cherchez pas à comprendre le jeu qu'il propose, frappez la bonne carte quand la commande apparaît.\n\n**Marluxia** couvre le terrain de fleurs et de zones qui explosent. Restez en mouvement, ne gardez jamais deux fois la même position.\n\n**Larxene** est la plus rapide des trois : elle se dédouble et frappe par surprise. Les doubles disparaissent au premier coup ; ne perdez pas de temps à les distinguer, frappez large.",
            "Three opponents, and three separate fights: the game gives them one after another rather than all at once.\n\n**Luxord** imposes his rules — cards, dice, and a time gauge that makes him vanish if it runs out. Do not try to understand the game he offers; hit the right card when the command appears.\n\n**Marluxia** covers the ground in flowers and detonating zones. Keep moving, never hold the same spot twice.\n\n**Larxene** is the fastest of the three: she splits into copies and strikes by surprise. The copies vanish on the first hit; do not waste time telling them apart, swing wide.",
          ),
        },
        {
          id: "saix-3",
          name: L("Saïx", "Saïx"),
          entry: "saix",
          level: "54",
          tactics: L(
            "Le même adversaire que dans Kingdom Hearts II, avec la même mécanique : une **jauge de fureur** qui se remplit, et un Saïx qui devient incontrôlable quand elle est pleine.\n\nTant qu'il n'est pas enragé, le combat est classique : gardez, contrez, enchaînez.\n\nEnragé, il ne s'interrompt plus et traverse les gardes. **N'essayez pas de le combattre dans cet état** : esquivez, laissez la jauge redescendre, et reprenez ensuite. Le combat se gagne en acceptant de ne rien faire pendant vingt secondes.",
            "The same opponent as in Kingdom Hearts II, with the same mechanic: a **berserk gauge** that fills, and a Saïx who becomes uncontrollable once it does.\n\nWhile he is not berserk the fight is conventional: guard, counter, chain.\n\nBerserk, he no longer flinches and goes through guards. **Do not try to fight him in that state**: dodge, let the gauge drain, and resume after. The fight is won by accepting to do nothing for twenty seconds.",
          ),
        },
        {
          id: "terra-xehanort-vanitas",
          name: L("Terra-Xehanort et Vanitas", "Terra-Xehanort and Vanitas"),
          entry: "terra-xehanort",
          level: "55",
          tactics: L(
            "Deux adversaires simultanés, tous deux porteurs de Keyblade, et le combat le plus exigeant avant Xehanort lui-même.\n\n**Terra-Xehanort** est lent et lourd : ses coups traversent les gardes mal placées, mais ils sont annoncés. **Vanitas** est l'inverse — rapide, nerveux, et il vous empêche de vous concentrer sur l'autre.\n\nLa seule méthode viable est de **séparer les deux** : entraînez Vanitas loin de Terra-Xehanort, expédiez-le, puis revenez.\n\nLes alliés aident réellement ici : leurs coopérations interrompent les deux et valent souvent mieux qu'un combo de plus.",
            "Two opponents at once, both Keyblade wielders, and the most demanding fight before Xehanort himself.\n\n**Terra-Xehanort** is slow and heavy: his blows go through a badly placed guard, but they are telegraphed. **Vanitas** is the opposite — fast, twitchy, and he stops you concentrating on the other.\n\nThe only workable method is to **separate them**: draw Vanitas away from Terra-Xehanort, finish him, then come back.\n\nAllies genuinely help here: their Links interrupt both, and are often worth more than one more combo.",
          ),
        },
        {
          id: "trois-xehanort",
          name: L("Jeune Xehanort, Ansem et Xemnas", "Young Xehanort, Ansem and Xemnas"),
          entry: "young-xehanort",
          level: "56",
          tactics: L(
            "Les trois visages de Xehanort, affrontés l'un après l'autre, et chacun reprend la mécanique de son propre jeu.\n\n**Jeune Xehanort** manipule le **temps** : il fige des zones, se déplace en accéléré, et renvoie vos attaques. Attendez la fin de chaque manipulation plutôt que d'y entrer.\n\n**Ansem** joue sur les **ténèbres** et les projections : son Gardien frappe pendant qu'il reste en retrait. Visez-le lui, pas le Gardien.\n\n**Xemnas** est le plus long : il enferme Sora dans des structures et enchaîne les lames d'éther. Ses phases d'emprisonnement se brisent en frappant la bonne face — cherchez celle qui brille.",
            "Xehanort's three faces, fought one after another, each reprising the mechanic of his own game.\n\n**Young Xehanort** manipulates **time**: he freezes zones, moves at speed, and sends your attacks back. Wait out each manipulation rather than stepping into it.\n\n**Ansem** works with **darkness** and projections: his Guardian strikes while he stays back. Target him, not the Guardian.\n\n**Xemnas** is the longest: he traps Sora in structures and chains ether blades. His imprisonment phases break by hitting the right face — look for the one that glows.",
          ),
        },
      ],
    },
    {
      id: "scala-ad-caelum",
      title: L("Scala ad Caelum", "Scala ad Caelum"),
      subtitle: L("L'Escalier du ciel", "The stairway to the sky"),
      world: "scala-ad-caelum",
      level: "55",
      status: "done",
      intro: L(
        "Le dernier chapitre, dans une ville blanche suspendue qui se réorganise à chaque combat. Il n'y a plus rien à explorer ni à ramasser : trois affrontements, et la fin.\n\nC'est aussi le moment où le jeu récompense la préparation. Un **Ultima** synthétisé, des **repas du bistrot**, et les capacités défensives équipées font une différence considérable ici.\n\nUne fois le jeu terminé, une sauvegarde de fin de partie permet de revenir compléter tout ce qui reste — emblèmes fétiches, portails de combat, synthèse.",
        "The last chapter, in a suspended white city that rearranges itself between fights. There is nothing left to explore or collect: three confrontations, and the end.\n\nIt is also where the game rewards preparation. A synthesised **Ultima Weapon**, **bistro meals**, and defensive abilities equipped make a considerable difference here.\n\nOnce the game is finished, a clear save lets you come back and complete everything left — Lucky Emblems, Battlegates, synthesis.",
      ),
      bosses: [
        {
          id: "mysterieux-adversaires",
          name: L("Les mystérieux adversaires", "The mysterious opponents"),
          entry: "dark-riku",
          level: "55",
          tactics: L(
            "Une succession de **répliques** encapuchonnées, affrontées dans les rues de la ville qui se replie à mesure.\n\nElles combattent toutes de la même façon : vite, en groupe, et sans jamais laisser de longue ouverture. Ce sont moins des boss qu'une **épreuve d'endurance** avant le vrai combat.\n\nLes sorts de zone et les commandes d'attraction sont ici plus rentables que la précision : il y en a toujours plusieurs à la fois.\n\nGardez vos objets de soin pour la suite — ce passage consomme, mais ce n'est pas lui qui tue.",
            "A succession of hooded **replicas**, fought through the streets of a city folding in on itself.\n\nThey all fight the same way: fast, in numbers, and never leaving a long opening. They are less bosses than an **endurance test** before the real fight.\n\nArea spells and attraction commands pay better here than precision: there are always several at once.\n\nSave your healing items for what follows — this passage drains you, but it is not what kills.",
          ),
        },
        {
          id: "xehanort-armure",
          name: L("Maître Xehanort (armure)", "Master Xehanort (armoured)"),
          entry: "master-xehanort",
          level: "56",
          tactics: L(
            "Première forme du combat final. Xehanort combat en **armure**, entouré de blocs de ville qu'il projette.\n\nIl alterne trois registres : des **charges** en ligne droite, des **projections de décombres**, et des phases où il **gèle** une partie du terrain. Aucune ne se pare utilement — c'est un combat d'esquive.\n\nLes **blocs projetés** sont aussi votre chemin : ils servent de plateformes pour reprendre de la hauteur quand il s'éloigne.\n\nLes alliés sont présents. Leurs **coopérations** interrompent ses phases les plus longues : gardez-en une en réserve plutôt que de toutes les dépenser au début.",
            "The final fight's first form. Xehanort fights in **armour**, surrounded by city blocks he hurls.\n\nHe alternates three registers: straight-line **charges**, **debris throws**, and phases where he **freezes** part of the arena. None of them is usefully parried — this is a dodging fight.\n\nThe **thrown blocks** are also your path: they act as platforms to regain height when he moves away.\n\nAllies are present. Their **Links** interrupt his longest phases: keep one in reserve rather than spending them all at the start.",
          ),
        },
        {
          id: "xehanort-x-blade",
          name: L("Maître Xehanort (χ-blade)", "Master Xehanort (χ-blade)"),
          entry: "master-xehanort",
          level: "57",
          reward: L("La fin du jeu, et l'accès à la sauvegarde de fin de partie", "The ending, and access to the clear save"),
          tactics: L(
            "La forme finale, χ-blade en main, et le combat le plus long du jeu de base.\n\nIl combine tout ce que le jeu a enseigné : des **enchaînements de porteur de Keyblade**, des **sorts de zone**, des **phases de vol**, et des séquences scénarisées où les commandes contextuelles décident du rythme.\n\nTrois règles tiennent tout le combat. **Ne restez jamais immobile** : la plupart de ses attaques visent une position, pas une cible. **Déclenchez chaque commande contextuelle** dès qu'elle apparaît — elles infligent plus que n'importe quel combo et interrompent ses phases. **Gardez de la magie** : les fenêtres où il est vulnérable sont courtes, et un sort les exploite mieux qu'une approche.\n\nSi le combat semble hors de portée, ce n'est pas une question de niveau mais d'équipement : revenez avec **Dernières forces**, **Dernière chance**, un repas complet, et une Keyblade dont la forme vous convient.",
            "The final form, χ-blade in hand, and the longest fight in the base game.\n\nIt combines everything the game has taught: **Keyblade wielder chains**, **area spells**, **flight phases**, and scripted sequences where situation commands set the rhythm.\n\nThree rules carry the whole fight. **Never stand still**: most of his attacks target a position, not a target. **Trigger every situation command** the moment it appears — they deal more than any combo and interrupt his phases. **Keep magic in hand**: the windows where he is vulnerable are short, and a spell exploits them better than an approach.\n\nIf the fight feels out of reach, it is not a question of level but of loadout: come back with **Once More**, **Second Chance**, a full meal, and a Keyblade whose form suits you.",
          ),
        },
      ],
      missable: [
        L(
          "Rien ne se perd : la sauvegarde de fin de partie replace le joueur juste avant le dernier combat, et tous les mondes restent accessibles pour terminer les collectes.",
          "Nothing is lost: the clear save puts you back just before the final fight, and every world stays reachable to finish the collections.",
        ),
      ],
    },
  ],
  quests,
};
