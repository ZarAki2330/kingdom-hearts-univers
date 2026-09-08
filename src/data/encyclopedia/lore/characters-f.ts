import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des personnages (lot F) : les cinq Prophètes de l'Âge des Fées,
 * les Dandelions de l'arc Union χ, la classe de Maître Odin dans Dark Road,
 * et les Mogs, marchands transversaux de la saga.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Ira ───────────────────────────
  "ira": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Ira est l'un des cinq apprentis que le Maître des Maîtres forme à Daybreak Town, à l'Âge des Fées, bien avant l'époque de Sora. Chacun reçoit un masque animalier et la charge d'une Union de porteurs de Keyblade : Ira porte le masque de licorne et dirige l'Union Unicornis. Son nom, comme celui de ses pairs, est emprunté au latin des sept péchés capitaux — ira, la colère.\n\nÀ chacun de ses apprentis, le Maître des Maîtres confie une copie du Livre des prophéties, recueil de tout ce qu'il a vu de l'avenir, et une consigne secrète connue de lui seul. Ira reçoit la plus lourde : prendre la tête des Prophètes si le Maître venait à disparaître. Studieux et scrupuleux, il est aussi le plus prisonnier du texte qu'on lui a remis, incapable d'agir sans y chercher une caution.",
          "Ira is one of the five apprentices trained by the Master of Masters in Daybreak Town, during the Age of Fairy Tales, long before Sora's time. Each receives an animal mask and charge of a Union of Keyblade wielders: Ira wears the unicorn mask and leads the Unicornis Union. His name, like those of his peers, comes from the Latin of the seven deadly sins — ira, wrath.\n\nTo each apprentice the Master of Masters entrusts a copy of the Book of Prophecies, the record of everything he has seen of the future, along with a secret instruction known only to him. Ira's is the heaviest: to lead the Foretellers should the Master ever disappear. Studious and scrupulous, he is also the most bound to the text he was given, unable to act without seeking its sanction.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Le Maître des Maîtres disparaît sans explication, et Ira assume la direction des Prophètes comme on le lui a demandé. Le rôle lui pèse : il convoque réunion sur réunion, cherche à concilier des collègues qui ne se font plus confiance, et se heurte d'emblée à Aced, qui lui reproche sa lenteur et conteste sa légitimité.\n\nLe Livre des prophéties annonce une guerre et l'existence d'un traître parmi eux. Ira, plutôt que de nommer un coupable, propose de désigner des successeurs pour que la lumière survive au désastre annoncé. Cette prudence est lue comme de la lâcheté par Aced et comme du calcul par Gula ; la méfiance s'installe et les Unions commencent à s'armer les unes contre les autres.\n\nQuand la Guerre des Keyblades éclate enfin, Ira combat au milieu des porteurs qu'il devait protéger. Le monde sombre dans le champ de ruines qui deviendra le Nécropole des Keyblades, et les Prophètes s'y perdent avec lui.",
          "The Master of Masters vanishes without explanation, and Ira takes over leadership of the Foretellers as instructed. The role weighs on him: he calls meeting after meeting, tries to reconcile colleagues who no longer trust one another, and immediately clashes with Aced, who resents his slowness and disputes his legitimacy.\n\nThe Book of Prophecies foretells a war and a traitor among them. Rather than name a culprit, Ira proposes appointing successors so that the light may outlive the coming disaster. Aced reads that caution as cowardice, Gula as calculation; distrust takes hold and the Unions begin arming against each other.\n\nWhen the Keyblade War finally breaks out, Ira fights among the very wielders he was meant to protect. The world collapses into the field of ruins that will become the Keyblade Graveyard, and the Foretellers are lost there with it.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "L'épilogue de Kingdom Hearts III ramène Ira au premier plan. Dans les étendues désertes du Nécropole des Keyblades, quatre silhouettes masquées se rassemblent : Ira, Aced, Invi et Gula, revenus d'un temps qui n'est plus le leur. Ava, seule, manque à l'appel.\n\nCelui qui les a convoqués est Luxu, le sixième apprenti dont ils ignoraient tout, aujourd'hui sous les traits de Xigbar. Il leur révèle qu'il a traversé les siècles en passant de corps en corps, chargé par le Maître des Maîtres de transmettre une Keyblade particulière. Ira écoute, incrédule, la mesure du plan dont il n'a été qu'une pièce. La scène referme l'épisode sur une nouvelle question : où est le Maître des Maîtres, et que reste-t-il à accomplir de sa prophétie.",
          "Kingdom Hearts III's epilogue brings Ira back to the fore. In the empty reaches of the Keyblade Graveyard, four masked figures gather: Ira, Aced, Invi and Gula, returned from a time no longer their own. Ava alone is missing.\n\nThe one who summoned them is Luxu, the sixth apprentice they never knew existed, now wearing Xigbar's face. He reveals that he crossed the centuries by passing from body to body, charged by the Master of Masters with handing down one particular Keyblade. Ira listens in disbelief to the scale of the plan he was only a piece of. The scene closes the game on a new question: where is the Master of Masters, and what remains of his prophecy to fulfil.",
        ),
      },
    ],
    trivia: [
      L("Les noms des cinq Prophètes reprennent le latin des péchés capitaux : Ira (colère), Aced (acedia, paresse), Invi (invidia, envie), Gula (gourmandise) et Ava (avaritia, avarice).", "The five Foretellers' names come from the Latin of the deadly sins: Ira (wrath), Aced (acedia, sloth), Invi (invidia, envy), Gula (gluttony) and Ava (avaritia, greed)."),
      L("Chaque Prophète dirige une Union portant un nom animalier latin : Unicornis pour Ira, Ursus, Anguis, Leopardus et Vulpes pour les autres.", "Each Foreteller leads a Union named after an animal in Latin: Unicornis for Ira, then Ursus, Anguis, Leopardus and Vulpes."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Ira", url: "https://kingdomhearts.fandom.com/wiki/Ira" },
    ],
  },

  // ─────────────────────────── Aced ───────────────────────────
  "aced": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Aced est le plus imposant des cinq apprentis du Maître des Maîtres. Masqué en ours, il dirige l'Union Ursus, celle que l'on associe à la force brute et à la loyauté sans détour. Son nom vient d'acedia, la paresse des péchés capitaux, choix ironique pour un personnage incapable de rester en place.\n\nLe Maître des Maîtres lui confie un rôle précis : servir de bras droit à Ira et le soutenir sans réserve. Aced l'entend comme une promesse de responsabilité partagée, alors qu'il s'agit d'une consigne de subordination. Ce malentendu, ajouté à son tempérament impulsif et à sa conviction qu'un chef doit trancher vite, fait de lui l'élément le plus instable du groupe dès que le Maître n'est plus là pour l'encadrer.",
          "Aced is the most imposing of the Master of Masters' five apprentices. Masked as a bear, he leads the Ursus Union, the one associated with raw strength and plain-spoken loyalty. His name comes from acedia, sloth among the deadly sins — an ironic choice for a character incapable of sitting still.\n\nThe Master of Masters gives him a precise role: to act as Ira's right hand and support him without reserve. Aced hears it as a promise of shared responsibility, when it is in fact an instruction to submit. That misunderstanding, added to his impulsive temper and his conviction that a leader must decide fast, makes him the most unstable member of the group as soon as the Master is no longer there to keep him in check.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Une fois le Maître des Maîtres disparu, Aced supporte de plus en plus mal l'autorité d'Ira. Il juge ses atermoiements dangereux, s'oppose ouvertement à lui en réunion, et cherche des appuis : d'abord auprès de Gula, avec qui il envisage un temps de destituer Ira, puis, seul, quand cette alliance se défait.\n\nPersuadé d'agir pour le bien des porteurs, il pousse son Union à se préparer au combat, ce qui contraint les autres à en faire autant. Invi, chargée de surveiller ses pairs, le prend en faute et l'affronte ; leur duel achève de fracturer les Prophètes. Aced en vient à considérer ses anciens frères d'armes comme des ennemis à abattre.\n\nAu Nécropole des Keyblades, il combat au milieu du carnage qu'il a contribué à provoquer. Sa force, longtemps présentée comme le rempart des Unions, n'aura fait qu'accélérer leur destruction.",
          "Once the Master of Masters is gone, Aced grows less and less able to bear Ira's authority. He judges his hesitations dangerous, opposes him openly in meetings, and looks for allies: first Gula, with whom he briefly considers removing Ira, then no one at all when that alliance falls apart.\n\nConvinced he is acting for the wielders' good, he pushes his Union to prepare for battle, forcing the others to do the same. Invi, tasked with watching her peers, catches him out and fights him; their duel finishes fracturing the Foretellers. Aced comes to see his former comrades as enemies to be put down.\n\nAt the Keyblade Graveyard he fights amid the carnage he helped bring about. His strength, long presented as the Unions' bulwark, only hastened their destruction.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Aced fait partie des quatre Prophètes réunis au Nécropole des Keyblades dans l'épilogue de Kingdom Hearts III. Toujours masqué, il retrouve Ira, Invi et Gula dans le décor même de la guerre qu'ils n'ont pas su empêcher.\n\nC'est Luxu, sous l'apparence de Xigbar, qui les a rassemblés, et qui leur apprend l'existence d'un sixième apprenti que le Maître des Maîtres leur avait cachée. Pour Aced, dont toute la conduite avait été dictée par la recherche du traître et la défiance envers ses pairs, la révélation prend une saveur particulière : la trahison qu'il traquait n'était pas là où il la cherchait. La scène reste brève et laisse les Prophètes, réunis pour la première fois depuis la guerre, face à une mission encore ouverte.",
          "Aced is one of the four Foretellers gathered at the Keyblade Graveyard in Kingdom Hearts III's epilogue. Still masked, he meets Ira, Invi and Gula again in the very landscape of the war they failed to prevent.\n\nIt is Luxu, wearing Xigbar's face, who has brought them together and who tells them of a sixth apprentice the Master of Masters had hidden from them. For Aced, whose every action was driven by the hunt for the traitor and by distrust of his peers, the revelation has a particular sting: the betrayal he chased was never where he looked for it. The scene is brief and leaves the Foretellers, together for the first time since the war, facing a mission still unfinished.",
        ),
      },
    ],
    trivia: [
      L("Aced est le seul Prophète dont l'Union, Ursus, porte le nom d'un animal terrestre massif ; sa Keyblade et son style de combat privilégient la puissance frontale.", "Aced is the only Foreteller whose Union, Ursus, is named after a massive land animal; his Keyblade and fighting style favour sheer frontal power."),
      L("Son nom vient d'acedia, la paresse, alors qu'il est le plus agité des cinq — un décalage assumé par les scénaristes.", "His name comes from acedia, sloth, though he is the most restless of the five — a mismatch the writers embraced."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Aced", url: "https://kingdomhearts.fandom.com/wiki/Aced" },
    ],
  },

  // ─────────────────────────── Invi ───────────────────────────
  "invi": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Invi porte le masque du serpent et dirige l'Union Anguis, quatrième des cinq groupes de porteurs de Keyblade de Daybreak Town. Son nom vient d'invidia, l'envie. Posée, mesurée, elle est celle dont on remarque le moins la voix dans les réunions des Prophètes, ce qui sert exactement le rôle qu'on lui a donné.\n\nLe Maître des Maîtres lui a en effet demandé de veiller sur ses pairs, d'observer leurs faits et gestes et de faire tenir l'équilibre entre eux. Elle en tire une neutralité de façade qu'elle affiche en toute circonstance. Dans les faits, elle penche du côté d'Ira, qu'elle estime légitime, et cette préférence discrète est perçue par Aced comme une partialité de plus dans un groupe déjà miné par le soupçon.",
          "Invi wears the serpent mask and leads the Anguis Union, fourth of Daybreak Town's five groups of Keyblade wielders. Her name comes from invidia, envy. Calm and measured, she is the one whose voice is least heard in the Foretellers' meetings, which suits exactly the role she was given.\n\nThe Master of Masters asked her to watch over her peers, observe what they do and keep the balance between them. From this she draws a surface neutrality she maintains in all circumstances. In practice she leans towards Ira, whom she considers legitimate, and that discreet preference is read by Aced as one more bias in a group already undermined by suspicion.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Après la disparition du Maître des Maîtres, Invi remplit sa mission à la lettre : elle rend compte à Ira des mouvements des autres Unions et tente de désamorcer les conflits avant qu'ils n'éclatent. Sa position d'observatrice la met vite en porte-à-faux, puisque tout le monde la soupçonne de rapporter.\n\nQuand Aced arme ouvertement l'Union Ursus contre les autres, c'est elle qui le confronte et le combat, considérant qu'il a rompu le pacte qui liait les cinq Prophètes. Le duel ne règle rien : il officialise la rupture et prive les Unions de leur dernier intermédiaire. Invi voit alors se réaliser exactement ce qu'elle s'était employée à empêcher, la Guerre des Keyblades, où elle disparaît avec les autres Prophètes dans l'effondrement de leur monde.",
          "After the Master of Masters disappears, Invi carries out her task to the letter: she reports the other Unions' movements to Ira and tries to defuse conflicts before they ignite. Her role as observer soon puts her in an impossible position, since everyone suspects her of informing.\n\nWhen Aced openly arms the Ursus Union against the others, it is she who confronts and fights him, judging that he has broken the pact binding the five Foretellers. The duel settles nothing: it formalises the split and deprives the Unions of their last intermediary. Invi then watches the very thing she worked to prevent come to pass — the Keyblade War, in which she vanishes with the other Foretellers as their world collapses.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Comme Ira, Aced et Gula, Invi réapparaît dans la scène qui clôt Kingdom Hearts III, au milieu du Nécropole des Keyblades. Les quatre Prophètes se retrouvent sans avoir eu le temps de s'expliquer sur ce qui les a séparés, et le silence pèse autant que les retrouvailles.\n\nLuxu, devenu Xigbar, leur explique alors qu'il était le sixième apprenti, chargé d'une mission de transmission qui l'a fait traverser les âges. Pour Invi, dont le rôle avait été de tout voir et de tout rapporter, la révélation est un aveu d'échec : l'élément qu'elle n'avait jamais observé était précisément celui qui portait le plan du Maître. Le jeu s'achève sur ce groupe reconstitué, mais amputé d'Ava, et sur la recherche du Maître des Maîtres.",
          "Like Ira, Aced and Gula, Invi reappears in the scene that closes Kingdom Hearts III, in the middle of the Keyblade Graveyard. The four Foretellers meet again without ever having had the chance to explain what drove them apart, and the silence weighs as much as the reunion.\n\nLuxu, now Xigbar, tells them he was the sixth apprentice, charged with a task of transmission that carried him across the ages. For Invi, whose role was to see and report everything, the revelation is an admission of failure: the one piece she never observed was precisely the one carrying the Master's plan. The game ends on this reassembled group, missing Ava, and on the search for the Master of Masters.",
        ),
      },
    ],
    trivia: [
      L("Invi et Ava sont les deux femmes du groupe des Prophètes ; leurs Unions, Anguis et Vulpes, sont représentées par le serpent et le renard.", "Invi and Ava are the two women among the Foretellers; their Unions, Anguis and Vulpes, are represented by the serpent and the fox."),
      L("Le masque de chaque Prophète reprend l'animal de son Union, motif que l'on retrouve sur les tenues des porteurs qui la composent.", "Each Foreteller's mask depicts their Union's animal, a motif echoed on the outfits of the wielders who belong to it."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Invi", url: "https://kingdomhearts.fandom.com/wiki/Invi" },
    ],
  },

  // ─────────────────────────── Gula ───────────────────────────
  "gula": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Gula porte le masque du léopard et dirige l'Union Leopardus. Son nom vient de gula, la gourmandise. Plus jeune d'allure que ses pairs, il est aussi le plus secret : là où Ira cherche des règles et Aced des certitudes, Gula avance seul, en gardant pour lui ce qu'il sait.\n\nLa consigne que lui a laissée le Maître des Maîtres est la plus lourde de conséquences : identifier le traître annoncé par le Livre des prophéties. Pour cela, il détient une page que les autres n'ont pas, arrachée au livre, où il est écrit qu'un des Prophètes trahira les siens. Ce savoir isolé le condamne à soupçonner ceux qu'il devrait protéger, sans pouvoir expliquer pourquoi, et fait de lui l'un des moteurs involontaires de la défiance générale.",
          "Gula wears the leopard mask and leads the Leopardus Union. His name comes from gula, gluttony. Younger-looking than his peers, he is also the most secretive: where Ira looks for rules and Aced for certainties, Gula moves alone, keeping what he knows to himself.\n\nThe instruction the Master of Masters left him carries the heaviest consequences: to identify the traitor foretold by the Book of Prophecies. For that he holds a page the others do not have, torn from the book, which states that one of the Foretellers will betray the rest. That isolated knowledge condemns him to suspect the very people he should protect, without being able to explain why, and makes him one of the unwitting engines of the general mistrust.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Gula mène son enquête en silence pendant que les Unions se déchirent. Il pactise un moment avec Aced, qui veut écarter Ira, puis se retire quand il comprend jusqu'où l'autre est prêt à aller. Il examine tour à tour chacun de ses pairs, sans jamais partager la page qui justifie sa méfiance.\n\nCette solitude a un coût : ses propres porteurs le voient s'éloigner, et les autres Prophètes finissent par le compter parmi les suspects. Lorsque les tensions débordent, Gula se retrouve à croiser le fer avec ceux qu'il surveillait, et notamment avec Aced.\n\nLa Guerre des Keyblades emporte tout. Gula y disparaît comme les autres, sans avoir désigné le traître — pour la raison, révélée bien plus tard, que celui-ci n'était pas l'un des cinq.",
          "Gula pursues his investigation in silence while the Unions tear each other apart. He briefly makes common cause with Aced, who wants Ira removed, then withdraws when he sees how far the other is willing to go. He examines each of his peers in turn, never sharing the page that justifies his suspicion.\n\nThat solitude costs him: his own wielders see him drift away, and the other Foretellers end up counting him among the suspects. When tensions boil over, Gula finds himself crossing blades with those he was watching, Aced above all.\n\nThe Keyblade War sweeps everything away. Gula vanishes with the rest, without ever naming the traitor — for the reason, revealed far later, that the traitor was not one of the five.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Gula est le quatrième Prophète présent dans l'épilogue de Kingdom Hearts III, au Nécropole des Keyblades. Le lieu même où leur monde a pris fin sert de point de ralliement à ceux qui n'ont pas su l'empêcher.\n\nLuxu, sous l'identité de Xigbar, leur apprend qu'il a été le sixième apprenti et qu'il a passé les siècles à transmettre une Keyblade de porteur en porteur, conformément à un ordre du Maître des Maîtres. Pour Gula, qui a consacré son existence à chercher un traître parmi quatre visages connus, la nouvelle éclaire rétrospectivement l'inutilité de son enquête. Les Prophètes repartent ensemble, avec pour seul horizon le retour annoncé de leur maître, et l'absence d'Ava comme unique question laissée en suspens.",
          "Gula is the fourth Foreteller present in Kingdom Hearts III's epilogue, at the Keyblade Graveyard. The very place where their world ended serves as a rallying point for those who could not prevent it.\n\nLuxu, under Xigbar's identity, tells them he was the sixth apprentice and that he spent the centuries handing a Keyblade down from wielder to wielder, following an order from the Master of Masters. For Gula, who devoted his life to hunting a traitor among four known faces, the news casts his whole investigation as futile in hindsight. The Foretellers leave together, with only their master's foretold return ahead of them, and Ava's absence as the one question left hanging.",
        ),
      },
    ],
    trivia: [
      L("La « page perdue » détenue par Gula est un fragment du Livre des prophéties dont les autres Prophètes ignorent l'existence.", "The “lost page” held by Gula is a fragment of the Book of Prophecies whose existence the other Foretellers know nothing about."),
      L("Le motif de la Keyblade de Gula, comme celles des quatre autres Prophètes, reprend l'animal de son Union.", "The design of Gula's Keyblade, like those of the other four Foretellers, echoes his Union's animal."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Gula", url: "https://kingdomhearts.fandom.com/wiki/Gula" },
    ],
  },

  // ─────────────────────────── Ava ───────────────────────────
  "ava": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Ava porte le masque du renard et dirige l'Union Vulpes. Son nom vient d'avaritia, l'avarice, mais elle est de loin la plus chaleureuse des cinq apprentis du Maître des Maîtres : elle parle aux porteurs plutôt qu'aux Prophètes, connaît les siens par leur nom et se soucie de ce qu'ils deviendront.\n\nLe rôle que lui a confié son maître la met à part. Plutôt que de gérer la guerre annoncée, elle doit la préparer autrement : rassembler dans chaque Union des porteurs assez forts et assez droits pour survivre, les tenir à l'écart du combat, et faire d'eux la semence d'un monde neuf. Ce groupe prend le nom de Dandelions, les pissenlits, dont les graines se dispersent au vent — image explicite de ce qu'elle attend d'eux.",
          "Ava wears the fox mask and leads the Vulpes Union. Her name comes from avaritia, greed, yet she is by far the warmest of the Master of Masters' five apprentices: she speaks to wielders rather than to Foretellers, knows her own by name, and cares about what will become of them.\n\nThe role her master gave her sets her apart. Rather than manage the coming war, she must prepare for it differently: gather from every Union wielders strong and upright enough to survive, keep them out of the fighting, and make of them the seed of a new world. That group takes the name Dandelions, whose seeds scatter on the wind — an explicit image of what she expects from them.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Ava parcourt Daybreak Town pour recruter ses Dandelions. Elle approche Ephemer, Skuld et d'autres porteurs prometteurs, sans jamais leur dire clairement pourquoi : leur mission est de fuir, non de se battre, et elle sait que peu l'accepteraient de bon cœur. Elle choisit également cinq futurs dirigeants d'Union, parmi lesquels Strelitzia, trop timide pour aller au bout de sa tâche.\n\nSes rapports avec les autres Prophètes se dégradent à mesure que la guerre approche : ses absences répétées la font passer pour la traîtresse aux yeux de certains, alors qu'elle exécute simplement une consigne qu'elle ne peut pas révéler. Elle croise également Luxu, dont elle apprend l'existence tardivement.\n\nAva reste au Nécropole des Keyblades quand ses Dandelions sont mis à l'abri. Contrairement à Ira, Aced, Invi et Gula, elle ne réapparaît pas dans l'épilogue de Kingdom Hearts III, et son sort demeure l'une des grandes questions ouvertes de la saga.",
          "Ava travels Daybreak Town recruiting her Dandelions. She approaches Ephemer, Skuld and other promising wielders without ever telling them plainly why: their mission is to flee, not to fight, and she knows few would accept that gladly. She also chooses five future Union leaders, among them Strelitzia, too shy to see her task through.\n\nHer relations with the other Foretellers deteriorate as the war nears: her repeated absences make some take her for the traitor, when she is merely following an instruction she cannot disclose. She also crosses paths with Luxu, whose existence she learns of late.\n\nAva stays at the Keyblade Graveyard once her Dandelions are safe. Unlike Ira, Aced, Invi and Gula, she does not reappear in Kingdom Hearts III's epilogue, and her fate remains one of the saga's great open questions.",
        ),
      },
    ],
    trivia: [
      L("Le nom « Dandelions » (pissenlits) fait référence aux graines emportées par le vent, image des porteurs dispersés vers un monde nouveau.", "The name “Dandelions” refers to seeds carried on the wind, an image of the wielders scattered towards a new world."),
      L("Ava est la seule des cinq Prophètes absente de la scène finale de Kingdom Hearts III.", "Ava is the only one of the five Foretellers absent from Kingdom Hearts III's final scene."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Ava", url: "https://kingdomhearts.fandom.com/wiki/Ava" },
    ],
  },

  // ─────────────────────────── Skuld ───────────────────────────
  "skuld": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Skuld est une porteuse de Keyblade de Daybreak Town, à l'Âge des Fées. Comme tous les porteurs de la ville, elle appartient à une Union, collecte le Lux au fil de missions confiées par sa Prophétesse et vit accompagnée d'un Chirithy. Son nom est emprunté à la mythologie nordique, où Skuld est l'une des trois Nornes, celle de l'avenir.\n\nSon tempérament la distingue de ses camarades : posée, méthodique, elle raisonne au lieu de s'emballer et n'hésite pas à dire ce qu'elle pense à ceux qui la dirigent. Amie d'Ephemer, elle partage sa curiosité pour ce qui se cache derrière les règles des Unions, mais avec plus de prudence que lui. Cette lucidité tranquille la désigne naturellement pour un rôle de responsabilité lorsque l'ancien ordre s'effondre.",
          "Skuld is a Keyblade wielder from Daybreak Town, in the Age of Fairy Tales. Like every wielder in the town she belongs to a Union, collects Lux on missions handed down by her Foreteller, and lives with a Chirithy at her side. Her name comes from Norse mythology, where Skuld is one of the three Norns, the one of the future.\n\nHer temperament sets her apart: composed and methodical, she reasons instead of rushing, and does not hesitate to tell those in charge what she thinks. A friend of Ephemer, she shares his curiosity about what lies behind the Unions' rules, though with more caution than he shows. That quiet clear-sightedness naturally marks her out for responsibility once the old order collapses.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Skuld rencontre le Joueur alors que tous deux cherchent Ephemer, disparu sans explication. De cette enquête naît une amitié solide, et elle devient l'une des rares personnes à qui le Joueur confie ce qu'il découvre de Daybreak Town.\n\nÉpargnée par la Guerre des Keyblades parce qu'elle compte parmi les Dandelions rassemblés par Ava, elle se réveille dans une ville reconstituée où les survivants doivent réapprendre à vivre ensemble. Elle est nommée l'une des cinq nouvelles dirigeantes d'Union aux côtés d'Ephemer, Brain, Lauriam et Ventus, et impose un ton différent de celui des Prophètes : moins de secrets, plus d'explications.\n\nQuand la vérité sur la nature de leur monde et sur les manipulations passées éclate, Skuld reste l'un des repères du groupe. Elle survit à l'affrontement final et fait partie de ceux qui sont envoyés vers une époque nouvelle, laissant derrière eux le monde qui les avait vus naître.",
          "Skuld meets the Player while both are searching for Ephemer, who has vanished without explanation. A solid friendship grows out of that search, and she becomes one of the few people to whom the Player confides what they learn about Daybreak Town.\n\nSpared by the Keyblade War because she is one of the Dandelions gathered by Ava, she wakes in a rebuilt town where the survivors must learn to live together again. She is named one of the five new Union leaders alongside Ephemer, Brain, Lauriam and Ventus, and sets a different tone from the Foretellers': fewer secrets, more explanations.\n\nWhen the truth about their world's nature and past manipulations comes out, Skuld remains one of the group's anchors. She survives the final confrontation and is among those sent to a new era, leaving behind the world that saw them born.",
        ),
      },
    ],
    trivia: [
      L("Les trois Nornes nordiques donnent leurs noms à des personnages de la saga : Skuld dans Union χ, Urd dans Dark Road.", "The three Norse Norns lend their names to characters in the series: Skuld in Union χ, Urd in Dark Road."),
      L("Skuld fait partie des cinq nouveaux dirigeants d'Union désignés après la Guerre des Keyblades.", "Skuld is one of the five new Union leaders appointed after the Keyblade War."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Skuld", url: "https://kingdomhearts.fandom.com/wiki/Skuld" },
    ],
  },

  // ─────────────────────────── Brain ───────────────────────────
  "brain": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Brain est un porteur de Keyblade de Daybreak Town au caractère bien à lui : ironique, sûr de son intelligence, allergique à l'autorité. Il est l'un des rares habitants de la ville à posséder une copie du Livre des prophéties, ce qui lui donne accès à un savoir normalement réservé aux Prophètes.\n\nCe privilège façonne toute sa position. Là où les autres porteurs suivent les consignes de leur Union sans les discuter, Brain lit le texte qui décrit leur avenir et refuse d'y voir un destin. Sa question centrale — peut-on encore choisir quand tout est déjà écrit — traverse tout l'arc Union χ et fait de lui un allié précieux, mais imprévisible, pour ceux qui cherchent à comprendre ce qui leur arrive.",
          "Brain is a Keyblade wielder from Daybreak Town with a character all his own: ironic, confident in his own intelligence, allergic to authority. He is one of the few people in town to own a copy of the Book of Prophecies, which gives him access to knowledge normally reserved for the Foretellers.\n\nThat privilege shapes his whole stance. Where other wielders follow their Union's instructions without question, Brain reads the text describing their future and refuses to see fate in it. His central question — can there still be a choice when everything is written — runs through the whole Union χ arc and makes him a valuable but unpredictable ally for those trying to understand what is happening to them.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Après la Guerre des Keyblades, Brain compte parmi les cinq dirigeants d'Union chargés de guider les Dandelions dans le monde reconstitué. Il est celui qui pose les questions gênantes : d'où viennent les règles, qui les a écrites, et pourquoi les survivants devraient s'y plier.\n\nSon exemplaire du Livre des prophéties lui permet de recouper ce qu'il observe avec ce qui avait été prédit, et c'est en grande partie par lui que le groupe comprend la nature véritable du lieu où ils vivent et la façon dont leurs vies ont été orientées. Il enquête aussi sur ce qui est arrivé à Strelitzia, dossier qui empoisonne les relations entre les nouveaux dirigeants.\n\nAu terme de l'aventure, Brain fait partie de ceux qui échappent à l'effondrement final et sont projetés vers une époque ultérieure, avec la conviction chevillée au corps qu'un script se brise à condition de vouloir le briser.",
          "After the Keyblade War, Brain is one of the five Union leaders charged with guiding the Dandelions through the rebuilt world. He is the one who asks the awkward questions: where do the rules come from, who wrote them, and why should the survivors obey them.\n\nHis copy of the Book of Prophecies lets him cross-check what he observes against what was foretold, and it is largely through him that the group grasps the true nature of the place they live in and the way their lives have been steered. He also investigates what happened to Strelitzia, a case that poisons relations among the new leaders.\n\nBy the end of the story Brain is among those who escape the final collapse and are cast into a later era, carrying the unshakeable conviction that a script can be broken if one truly wants to break it.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Brain refait surface bien plus tard, à Scala ad Caelum, la cité de Maître Odin et de ses élèves. Son arrivée relie explicitement l'époque de Daybreak Town à celle de la jeunesse de Xehanort, et confirme que les survivants de la Guerre des Keyblades sont bien à l'origine du monde où grandit le futur Maître.\n\nToujours aussi peu impressionné par les institutions, il observe la cité et ceux qui la dirigent avec le même regard critique qu'autrefois. Son passage éclaire d'un jour nouveau les règles étranges de Scala ad Caelum, dont l'interdiction faite aux élèves de quitter la cité, et la place que le Livre des prophéties continue d'occuper dans l'histoire longue des porteurs de Keyblade.",
          "Brain resurfaces much later, in Scala ad Caelum, the city of Master Odin and his students. His arrival explicitly links the era of Daybreak Town to that of Xehanort's youth, and confirms that the survivors of the Keyblade War are indeed at the origin of the world in which the future Master grows up.\n\nAs unimpressed by institutions as ever, he observes the city and those who run it with the same critical eye as before. His appearance casts new light on Scala ad Caelum's strange rules, including the ban on students leaving the city, and on the place the Book of Prophecies still occupies in the long history of Keyblade wielders.",
        ),
      },
    ],
    trivia: [
      L("Brain est l'un des rares personnages hors Prophètes à posséder une copie du Livre des prophéties.", "Brain is one of the few characters outside the Foretellers to own a copy of the Book of Prophecies."),
      L("Son apparition à Scala ad Caelum établit le lien direct entre l'arc Union χ et Dark Road.", "His appearance in Scala ad Caelum establishes the direct link between the Union χ arc and Dark Road."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Brain", url: "https://kingdomhearts.fandom.com/wiki/Brain" },
    ],
  },

  // ─────────────────────────── Le Joueur ───────────────────────────
  "player": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Le Joueur est le protagoniste personnalisable de Kingdom Hearts χ puis de Union χ : un porteur de Keyblade anonyme de Daybreak Town, dont le visage, la coiffure et les vêtements sont choisis par celui qui tient la manette. Ce parti pris fait de lui un cas unique dans la saga, à la fois personnage de plein droit et avatar.\n\nSon quotidien est celui d'un porteur ordinaire de l'Âge des Fées : il rejoint une Union, part en mission dans des mondes Disney pour y collecter le Lux, la lumière que son camp accumule, et rentre chez lui retrouver son Chirithy, l'Avale-Rêves qui veille sur son sommeil. Rien, au départ, ne le distingue des milliers d'autres porteurs de la ville — c'est précisément ce qui rend son parcours signifiant lorsque la guerre approche.",
          "The Player is the customizable protagonist of Kingdom Hearts χ and then Union χ: a nameless Keyblade wielder from Daybreak Town whose face, hair and clothes are chosen by whoever holds the controller. That choice makes them a unique case in the series, at once a character in their own right and an avatar.\n\nTheir daily life is that of an ordinary wielder of the Age of Fairy Tales: they join a Union, set out on missions into Disney worlds to collect Lux, the light their side accumulates, and come home to their Chirithy, the Dream Eater watching over their sleep. Nothing at first sets them apart from the town's thousands of other wielders — which is exactly what makes their journey meaningful once war approaches.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Le Joueur se lie d'amitié avec Ephemer, qui l'entraîne sous la ville à la recherche de la vérité sur les Unions, puis avec Skuld quand Ephemer disparaît. Repéré par Ava, il rejoint les Dandelions et échappe ainsi à la Guerre des Keyblades, sans savoir sur le moment ce que ce privilège coûte à ceux qui restent.\n\nLes survivants se réveillent dans une Daybreak Town reconstituée. Le Joueur y traverse l'assassinat de Strelitzia, les rivalités entre les nouveaux dirigeants d'Union et la découverte progressive de la nature réelle de ce monde, tandis qu'une entité qui se nomme simplement Ténèbres s'attaque aux porteurs.\n\nLors de l'affrontement final, le Joueur se dresse contre elle pour que ses amis puissent être envoyés vers l'époque suivante, et y laisse la vie. Son cœur échoue dans le Monde Final, où son Chirithy l'attend depuis — c'est ce même Chirithy que Sora rencontre dans Kingdom Hearts III.",
          "The Player befriends Ephemer, who drags them beneath the town in search of the truth about the Unions, and then Skuld once Ephemer vanishes. Noticed by Ava, they join the Dandelions and so escape the Keyblade War, without understanding at the time what that privilege costs those left behind.\n\nThe survivors wake in a rebuilt Daybreak Town. There the Player lives through Strelitzia's murder, the rivalries among the new Union leaders and the gradual discovery of the true nature of this world, while an entity calling itself simply Darkness preys on the wielders.\n\nIn the final confrontation the Player stands against it so their friends can be sent on to the next era, and dies doing so. Their heart comes to rest in the Final World, where their Chirithy has waited ever since — the very Chirithy Sora meets in Kingdom Hearts III.",
        ),
      },
    ],
    trivia: [
      L("Kingdom Hearts χ est le premier jeu de la saga à confier le rôle principal à un avatar entièrement personnalisable.", "Kingdom Hearts χ is the first game in the series to give the leading role to a fully customizable avatar."),
      L("Le Chirithy que Sora rencontre dans le Monde Final, dans Kingdom Hearts III, est celui du Joueur.", "The Chirithy Sora meets in the Final World in Kingdom Hearts III is the Player's own."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Player (Union χ)", url: "https://kingdomhearts.fandom.com/wiki/Player_(Kingdom_Hearts_Union_%CF%87)" },
    ],
  },

  // ─────────────────────────── Ténèbres ───────────────────────────
  "darkness": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Dans la majeure partie de la saga, les ténèbres sont un état : ce qui reste quand la lumière d'un cœur s'éteint, ce qui donne naissance aux Sans-cœur. Les récits de l'Âge des Fées introduisent une idée bien plus dérangeante : certaines ténèbres possèdent une volonté propre, une voix, une intention.\n\nCette entité, désignée simplement comme « Ténèbres », se manifeste sous la forme d'une silhouette noire sans visage. Elle parle, raisonne, négocie, et se présente comme l'une parmi plusieurs de son espèce. Elle ne détruit pas les cœurs de l'extérieur mais s'y installe, en épousant les failles de celui qu'elle habite. Ce concept rétroéclaire l'ensemble de la série : il donne une origine consciente à la corruption qui frappe tant de personnages, et fait des ténèbres un adversaire avec lequel on peut, littéralement, dialoguer.",
          "Through most of the series, darkness is a state: what remains when the light of a heart goes out, what gives rise to the Heartless. The Age of Fairy Tales stories introduce a far more unsettling idea: some darknesses have a will of their own, a voice, an intent.\n\nThis entity, called simply “Darkness”, manifests as a faceless black silhouette. It speaks, reasons, bargains, and presents itself as one of several of its kind. It does not destroy hearts from outside but settles into them, moulding itself to the flaws of whoever it inhabits. The concept casts the whole series in a new light: it gives a conscious origin to the corruption that strikes so many characters, and turns darkness into an adversary one can, literally, talk to.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Dans le monde reconstitué où vivent les Dandelions, les Ténèbres s'en prennent aux porteurs de Keyblade et se glissent dans les cœurs les plus vulnérables. Leur présence explique une partie des drames qui frappent le groupe, dont la mort de Strelitzia, et transforme une communauté de survivants en un lieu de suspicion.\n\nL'entité s'attache en particulier au cœur de Ventus, jeune porteur au cœur fragile, et y demeure. C'est cette part sombre que Maître Xehanort extraira bien plus tard du garçon endormi, donnant naissance à Vanitas — le lien direct entre l'Âge des Fées et les événements de Birth by Sleep.\n\nLors de l'affrontement final, ce sont les Ténèbres que le Joueur affronte pour permettre à ses amis d'être envoyés vers une nouvelle époque, au prix de sa propre vie.",
          "In the rebuilt world where the Dandelions live, the Darkness preys on Keyblade wielders and slips into the most vulnerable hearts. Its presence explains part of the tragedies that strike the group, including Strelitzia's death, and turns a community of survivors into a place of suspicion.\n\nThe entity attaches itself in particular to the heart of Ventus, a young wielder with a fragile heart, and remains there. It is this dark part that Master Xehanort will later extract from the sleeping boy, giving rise to Vanitas — the direct link between the Age of Fairy Tales and the events of Birth by Sleep.\n\nIn the final confrontation it is the Darkness that the Player faces so their friends can be sent to a new era, at the cost of their own life.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Dark Road prolonge cette idée à Scala ad Caelum. Les élèves de Maître Odin y découvrent que les ténèbres ne se contentent pas de rôder dans les mondes : elles choisissent des hôtes, les habitent et se servent d'eux. Baldr, brisé par la disparition de sa sœur Hoder, offre une porte grande ouverte à l'une d'elles.\n\nPour le jeune Xehanort, la révélation est décisive. Ce n'est pas une force aveugle qui a détruit sa promotion mais une volonté organisée, capable de patienter et de choisir ses proies. Il en tire une conclusion qui orientera toute sa vie : un monde où la lumière peut être ainsi retournée est un monde mal bâti, et il faudra bien, un jour, le remettre à zéro. Les Ténèbres, elles, poursuivent leur route en changeant simplement de cœur.",
          "Dark Road extends the idea to Scala ad Caelum. Master Odin's students discover there that darkness does not merely prowl the worlds: it picks hosts, inhabits them and uses them. Baldr, broken by the loss of his sister Hoder, leaves the door wide open to one of them.\n\nFor the young Xehanort the revelation is decisive. It was not a blind force that destroyed his class but an organised will, able to wait and to choose its prey. He draws from it a conclusion that will shape his entire life: a world where light can be turned like that is a badly built world, and one day it will have to be reset. The Darkness, for its part, simply moves on to another heart.",
        ),
      },
    ],
    trivia: [
      L("L'entité se présente comme l'une parmi plusieurs ténèbres douées de volonté, et non comme la source unique du mal dans la saga.", "The entity presents itself as one among several darknesses endowed with will, not as the single source of evil in the series."),
      L("La part sombre qu'elle laisse dans le cœur de Ventus est à l'origine de Vanitas, extrait par Maître Xehanort dans Birth by Sleep.", "The dark part it leaves in Ventus's heart is the origin of Vanitas, extracted by Master Xehanort in Birth by Sleep."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Darkness (character)", url: "https://kingdomhearts.fandom.com/wiki/Darkness_(character)" },
    ],
  },

  // ─────────────────────────── Maître Odin ───────────────────────────
  "master-odin": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Maître Odin est un Maître de la Keyblade de Scala ad Caelum, la cité verticale bâtie par les héritiers des porteurs de l'Âge des Fées. Il y enseigne à une classe d'élèves dont font partie Xehanort et Eraqus, des années avant que le premier ne devienne le Maître Xehanort.\n\nComme la plupart des personnages de Dark Road, son nom vient de la mythologie nordique : Odin, le dieu borgne, souverain d'Asgard et père de Baldr. Ce choix éclaire son rôle dans le récit — celui d'une figure d'autorité entourée d'une génération vouée au deuil. Sévère, avare d'explications, Odin fait respecter les règles de la cité, dont l'interdiction faite aux élèves de s'aventurer hors de Scala ad Caelum sans autorisation, et n'accorde sa confiance qu'au compte-gouttes.",
          "Master Odin is a Keyblade Master of Scala ad Caelum, the vertical city built by the heirs of the Age of Fairy Tales wielders. There he teaches a class of students that includes Xehanort and Eraqus, years before the former becomes Master Xehanort.\n\nLike most Dark Road characters, his name comes from Norse mythology: Odin, the one-eyed god, ruler of Asgard and father of Baldr. The choice illuminates his role in the story — an authority figure surrounded by a generation destined for grief. Stern and sparing with explanations, Odin enforces the city's rules, including the ban on students venturing outside Scala ad Caelum without permission, and gives his trust only in small measure.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Odin encadre la promotion de Xehanort, Eraqus, Baldr, Bragi, Hermod, Urd et Vor, et supervise leur entraînement au maniement de la Keyblade comme leurs premières sorties hors de la cité. Une promotion plus âgée, menée par Vidar, est déjà partie en mission lorsque des élèves commencent à disparaître.\n\nInquiet, Odin charge sa classe de retrouver les porteurs manquants à travers les mondes. La mission tourne à l'enquête criminelle : les jeunes gens découvrent que leurs aînés ne sont pas simplement portés disparus, et remontent une piste qui les ramène vers l'un des leurs.\n\nOdin apparaît alors sous un jour plus ambigu. Ses silences sur l'histoire de Scala ad Caelum, sur ce que la cité doit aux survivants de la Guerre des Keyblades et sur ce qu'il savait des ténèbres nourrissent la défiance de Xehanort envers les maîtres et les institutions — défiance qui deviendra, chez lui, un projet.",
          "Odin oversees the class of Xehanort, Eraqus, Baldr, Bragi, Hermod, Urd and Vor, supervising both their Keyblade training and their first excursions outside the city. An older class, led by Vidar, has already left on a mission when students begin to disappear.\n\nWorried, Odin sends his class to find the missing wielders across the worlds. The mission turns into a criminal investigation: the young people discover that their seniors are not merely missing, and follow a trail that leads back to one of their own.\n\nOdin then appears in a more ambiguous light. His silences about Scala ad Caelum's history, about what the city owes to the survivors of the Keyblade War and about what he knew of the darkness feed Xehanort's distrust of masters and institutions — a distrust that will become, in him, a design.",
        ),
      },
    ],
    trivia: [
      L("Toute la classe de Dark Road porte des noms nordiques : Odin est le père de Baldr dans les mythes, et Hoder y est l'artisan involontaire de sa mort.", "The whole Dark Road class bears Norse names: Odin is Baldr's father in the myths, and Hoder there is the unwitting cause of his death."),
      L("Dark Road est sorti en 2020 comme jeu mobile, puis a été rendu jouable hors ligne en 2022 avec sa conclusion complète.", "Dark Road launched in 2020 as a mobile game, then was made playable offline in 2022 with its full conclusion."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Odin", url: "https://kingdomhearts.fandom.com/wiki/Odin" },
    ],
  },

  // ─────────────────────────── Baldr ───────────────────────────
  "baldr": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Baldr est l'un des élèves de Maître Odin à Scala ad Caelum, camarade de promotion de Xehanort et d'Eraqus. Grand, avenant, doué, il est celui vers qui les autres se tournent naturellement, et le premier à désamorcer les tensions dans un groupe qui n'en manque pas.\n\nSon nom renvoie au dieu nordique Baldr, fils d'Odin, aimé de tous et tué par ruse — un présage transparent pour qui connaît les mythes. Sa sœur aînée, Hoder, appartient à la promotion supérieure, celle de Vidar, et il lui voue une affection sans réserve. C'est par ce lien que le drame de Dark Road passera : tout ce qui fait la douceur de Baldr est aussi ce qui le rendra vulnérable quand cette sœur ne reviendra pas.",
          "Baldr is one of Master Odin's students at Scala ad Caelum, a classmate of Xehanort and Eraqus. Tall, affable and gifted, he is the one the others naturally turn to, and the first to defuse tensions in a group that has plenty of them.\n\nHis name points to the Norse god Baldr, Odin's son, beloved by all and killed by trickery — a transparent omen for anyone who knows the myths. His older sister, Hoder, belongs to the senior class, Vidar's, and he is devoted to her without reserve. It is through that bond that Dark Road's tragedy will pass: everything gentle in Baldr is also what will make him vulnerable when that sister fails to return.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Quand les aînés de Scala ad Caelum disparaissent au cours de leur mission, Baldr perd Hoder. Le chagrin ouvre son cœur à l'une de ces ténèbres douées de volonté que le récit met en scène, et l'entité s'y installe. Le camarade rassurant devient l'antagoniste du jeu.\n\nSa classe, envoyée par Maître Odin à la recherche des disparus, met au jour le sort des aînés et finit par comprendre d'où vient la menace. L'affrontement qui suit oppose Baldr à ceux qui étaient ses amis, et coûte la vie à plusieurs d'entre eux, dont Hermod, Urd et Vor. Seuls Xehanort, Eraqus et Bragi survivent à la tragédie.\n\nPour Xehanort, ce basculement est fondateur. Voir le plus lumineux de ses camarades retourné par les ténèbres le convainc que la lumière ne protège de rien, et pose la première pierre de la conviction qui le mènera, des décennies plus tard, à vouloir recommencer le monde.",
          "When Scala ad Caelum's seniors vanish during their mission, Baldr loses Hoder. Grief opens his heart to one of those darknesses endowed with will that the story stages, and the entity settles in. The reassuring classmate becomes the game's antagonist.\n\nHis class, sent by Master Odin to find the missing, uncovers the seniors' fate and eventually works out where the threat comes from. The confrontation that follows pits Baldr against those who were his friends and costs several of them their lives, among them Hermod, Urd and Vor. Only Xehanort, Eraqus and Bragi survive the tragedy.\n\nFor Xehanort the turn is formative. Seeing the brightest of his classmates overturned by darkness convinces him that light protects nothing, and lays the first stone of the conviction that will lead him, decades later, to want to begin the world again.",
        ),
      },
    ],
    trivia: [
      L("Dans la mythologie nordique, Baldr est tué à cause de Hoder ; Dark Road inverse la relation en faisant de Hoder sa sœur, dont la perte cause sa chute.", "In Norse myth, Baldr is killed because of Hoder; Dark Road inverts the relationship by making Hoder his sister, whose loss causes his fall."),
      L("Baldr est le seul antagoniste principal de Dark Road, jeu par ailleurs centré sur la jeunesse de Xehanort.", "Baldr is the sole main antagonist of Dark Road, a game otherwise centred on Xehanort's youth."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Baldr", url: "https://kingdomhearts.fandom.com/wiki/Baldr" },
    ],
  },

  // ─────────────────────────── Bragi ───────────────────────────
  "bragi": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Bragi est un élève de la classe de Maître Odin à Scala ad Caelum, contemporain de Xehanort, d'Eraqus et de Baldr. Cheveux longs, sourire en coin, ton railleur : il cultive une nonchalance qui contraste avec le sérieux appliqué de ses camarades et qui lui sert, le plus souvent, de paravent.\n\nSon nom vient de Bragi, le dieu nordique de la poésie et de l'éloquence, ce qui convient à un personnage dont l'arme principale est la parole. Les joueurs ont rapidement relevé que « Bragi » est l'anagramme de « Braig », le nom du futur Xigbar, et que les deux personnages partagent une allure et une manière de s'exprimer très proches — un rapprochement que la série entretient sans jamais l'expliciter dans le jeu lui-même.",
          "Bragi is a student in Master Odin's class at Scala ad Caelum, a contemporary of Xehanort, Eraqus and Baldr. Long hair, a crooked smile, a mocking tone: he cultivates a nonchalance that contrasts with his classmates' earnest seriousness and that, more often than not, serves him as a screen.\n\nHis name comes from Bragi, the Norse god of poetry and eloquence, fitting for a character whose main weapon is speech. Players quickly noted that “Bragi” is an anagram of “Braig”, the name of the future Xigbar, and that the two characters share a very similar look and manner of speaking — a resemblance the series maintains without ever spelling it out in the game itself.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Bragi accompagne sa classe dans les missions confiées par Maître Odin, des exercices d'entraînement aux recherches menées à travers les mondes pour retrouver les élèves disparus. Il se distingue moins par sa puissance que par sa capacité à observer, à recouper et à poser la question que personne n'a envie d'entendre.\n\nIl s'intéresse tout particulièrement à ce que Scala ad Caelum dissimule : l'origine de la cité, les raisons de l'interdiction faite aux élèves d'en sortir, et ce que les maîtres savent des ténèbres. Ses remarques, toujours glissées sur le ton de la plaisanterie, en disent régulièrement plus long qu'il n'y paraît.\n\nQuand la tragédie déclenchée par Baldr décime la promotion, Bragi fait partie des trois rescapés avec Xehanort et Eraqus. Son parcours après Dark Road n'est pas montré, ce qui laisse entière la question de son identité véritable.",
          "Bragi goes with his class on the missions Master Odin assigns, from training exercises to searches across the worlds for the missing students. He stands out less for his power than for his ability to observe, to connect what he sees, and to ask the question nobody wants to hear.\n\nHe takes a particular interest in what Scala ad Caelum conceals: the city's origin, the reasons behind the ban on students leaving, and what the masters know about darkness. His remarks, always delivered as jokes, regularly say more than they appear to.\n\nWhen the tragedy set off by Baldr decimates the class, Bragi is one of three survivors along with Xehanort and Eraqus. What becomes of him after Dark Road is never shown, leaving the question of his true identity wide open.",
        ),
      },
    ],
    trivia: [
      L("« Bragi » est l'anagramme de « Braig », nom du personnage qui deviendra Xigbar — un clin d'œil relevé par les joueurs dès l'annonce de Dark Road.", "“Bragi” is an anagram of “Braig”, the name of the character who becomes Xigbar — a nod players spotted as soon as Dark Road was announced."),
      L("Bragi, Xehanort et Eraqus sont les seuls élèves de la classe de Maître Odin à survivre aux événements de Dark Road.", "Bragi, Xehanort and Eraqus are the only students in Master Odin's class to survive the events of Dark Road."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Bragi", url: "https://kingdomhearts.fandom.com/wiki/Bragi" },
    ],
  },

  // ─────────────────────────── Hermod ───────────────────────────
  "hermod": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Hermod est l'un des élèves de la classe de Maître Odin à Scala ad Caelum, aux côtés de Xehanort, Eraqus, Baldr, Bragi, Urd et Vor. Comme toute sa promotion, il apprend le maniement de la Keyblade dans une cité aux règles strictes, où l'on ne quitte pas les lieux sans l'autorisation d'un maître.\n\nSon nom est emprunté à Hermóðr, le messager des dieux nordiques, celui qui descend jusqu'au royaume des morts pour tenter d'y ramener Baldr. Ce choix n'a rien d'anodin dans un récit dont Baldr est l'antagoniste. Discret, appliqué, Hermod tient dans le groupe le rôle du camarade fiable, moins bruyant que Bragi et moins tourmenté que Xehanort, dont la présence rappelle que cette classe était, avant tout, une bande d'adolescents.",
          "Hermod is one of the students in Master Odin's class at Scala ad Caelum, alongside Xehanort, Eraqus, Baldr, Bragi, Urd and Vor. Like the rest of his year, he learns to wield the Keyblade in a city with strict rules, where nobody leaves without a master's permission.\n\nHis name comes from Hermóðr, the messenger of the Norse gods, the one who rides down to the realm of the dead to try to bring Baldr back. That choice is hardly incidental in a story whose antagonist is Baldr. Quiet and diligent, Hermod plays the part of the dependable classmate, less loud than Bragi and less tormented than Xehanort, and his presence is a reminder that this class was, above all, a group of teenagers.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Hermod prend part aux missions que Maître Odin confie à sa classe : entraînements, sorties encadrées dans d'autres mondes, puis la recherche des élèves de la promotion supérieure qui ne sont pas rentrés. Il fait partie du groupe qui découvre ce qu'il est advenu de Vidar et de ses camarades.\n\nCette enquête est fatale à une partie de la classe. Quand les ténèbres qui ont pris possession de Baldr se retournent contre ceux qui ont compris, Hermod compte parmi les victimes, avec Urd et Vor. Seuls Xehanort, Eraqus et Bragi sortent vivants de l'épisode.\n\nSa mort ne relève pas du simple ressort dramatique : elle pèse durablement sur Xehanort, qui y voit une nouvelle démonstration de la fragilité de ce que les maîtres appellent l'ordre du monde.",
          "Hermod takes part in the missions Master Odin assigns his class: training, supervised excursions to other worlds, then the search for the senior students who never came home. He is part of the group that discovers what became of Vidar and his companions.\n\nThat investigation proves fatal to part of the class. When the darkness that has taken hold of Baldr turns on those who have understood, Hermod is among the victims, along with Urd and Vor. Only Xehanort, Eraqus and Bragi come out of it alive.\n\nHis death is not mere dramatic machinery: it weighs lastingly on Xehanort, who reads it as one more demonstration of how fragile what the masters call the order of the world really is.",
        ),
      },
    ],
    trivia: [
      L("Hermóðr, dans les mythes nordiques, est le messager envoyé chez les morts pour ramener Baldr — un écho direct au drame de Dark Road.", "In Norse myth, Hermóðr is the messenger sent to the dead to bring Baldr back — a direct echo of Dark Road's tragedy."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Hermod", url: "https://kingdomhearts.fandom.com/wiki/Hermod" },
    ],
  },

  // ─────────────────────────── Urd ───────────────────────────
  "urd": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Urd est une élève de la classe de Maître Odin à Scala ad Caelum. Sérieuse et posée, elle fait figure d'aînée informelle auprès de camarades plus impulsifs, et rappelle volontiers les consignes quand l'un d'eux s'apprête à les enfreindre.\n\nSon nom vient d'Urd, l'une des trois Nornes de la mythologie nordique, celle qui préside au passé — Skuld, dans Union χ, en est le pendant tourné vers l'avenir. Ce système de noms n'est pas décoratif : il inscrit la promotion de Scala ad Caelum dans une continuité avec les porteurs de l'Âge des Fées, dont la cité descend directement, et souligne que ces jeunes gens héritent d'une histoire qu'on ne leur a jamais racontée.",
          "Urd is a student in Master Odin's class at Scala ad Caelum. Serious and level-headed, she acts as the informal elder among more impulsive classmates, and readily restates the rules when one of them is about to break them.\n\nHer name comes from Urd, one of the three Norns of Norse mythology, the one presiding over the past — Skuld, in Union χ, being her counterpart turned towards the future. This naming system is not decorative: it places the Scala ad Caelum class in continuity with the wielders of the Age of Fairy Tales, from whom the city directly descends, and underlines that these young people inherit a history nobody ever told them.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Urd suit l'entraînement de la classe de Maître Odin puis participe à la mission qui doit permettre de retrouver les élèves de la promotion supérieure portés disparus. Le groupe voyage de monde en monde et met peu à peu au jour la vérité sur le sort de Vidar et de ses camarades.\n\nLorsque cette vérité remonte jusqu'à Baldr et aux ténèbres qui l'habitent, Urd fait partie de ceux qui ne rentrent pas à Scala ad Caelum. Sa disparition, avec celles d'Hermod et de Vor, réduit la classe à trois survivants.\n\nLe récit ne fait pas d'elle une héroïne tragique isolée mais un membre d'un groupe brisé d'un bloc : c'est l'anéantissement collectif de cette promotion, plus que chaque mort prise séparément, qui installe chez Xehanort l'idée que le monde tel qu'il fonctionne ne mérite pas d'être préservé.",
          "Urd follows Master Odin's class training, then joins the mission to find the senior students reported missing. The group travels from world to world and gradually uncovers the truth about the fate of Vidar and his companions.\n\nWhen that truth leads back to Baldr and the darkness inhabiting him, Urd is among those who do not return to Scala ad Caelum. Her loss, together with Hermod's and Vor's, reduces the class to three survivors.\n\nThe story does not make her an isolated tragic heroine but a member of a group broken all at once: it is the collective annihilation of this class, more than any single death, that plants in Xehanort the idea that the world as it works does not deserve to be preserved.",
        ),
      },
    ],
    trivia: [
      L("Urd et Skuld, deux des trois Nornes nordiques, apparaissent respectivement dans Dark Road et dans Union χ.", "Urd and Skuld, two of the three Norse Norns, appear in Dark Road and Union χ respectively."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Urd", url: "https://kingdomhearts.fandom.com/wiki/Urd" },
    ],
  },

  // ─────────────────────────── Vor ───────────────────────────
  "vor": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Vor est la benjamine de la classe de Maître Odin à Scala ad Caelum. Enjouée, spontanée, elle apporte au groupe une légèreté que le récit prend soin d'installer avant de la lui retirer : c'est elle qui plaisante quand l'ambiance se tend, et elle qui s'attache le plus visiblement à ses camarades, Xehanort compris.\n\nSon nom vient de Vör, déesse nordique associée à la vigilance et à la connaissance de ce que l'on cherche à cacher. Comme pour le reste de la promotion, ce choix onomastique relie les élèves de Scala ad Caelum au fonds mythologique nordique dont la série tire ses noms depuis l'Âge des Fées, et donne à chaque personnage une couleur avant même qu'il ait parlé.",
          "Vor is the youngest in Master Odin's class at Scala ad Caelum. Cheerful and spontaneous, she brings the group a lightness the story takes care to establish before removing it: she is the one who jokes when the mood tightens, and the one most visibly attached to her classmates, Xehanort included.\n\nHer name comes from Vör, a Norse goddess associated with vigilance and with knowledge of what people try to hide. As with the rest of the class, the naming choice ties Scala ad Caelum's students to the Norse mythological stock the series has drawn on since the Age of Fairy Tales, and gives each character a colour before they have even spoken.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Vor accompagne sa classe dans les missions ordonnées par Maître Odin, jusqu'à la recherche des élèves de la promotion supérieure disparus. Sa jeunesse et son enthousiasme rendent d'autant plus brutal le retournement du récit lorsque le groupe comprend ce qui est arrivé aux aînés.\n\nComme Hermod et Urd, Vor ne survit pas à l'affrontement avec les ténèbres qui ont pris possession de Baldr. Sa perte est l'une des plus douloureuses pour ses camarades, et l'un des points de bascule du parcours du jeune Xehanort dans Dark Road.\n\nÀ l'échelle de la saga, ces morts donnent enfin une explication intime à un personnage jusque-là défini par ses seules ambitions : le futur Maître Xehanort a d'abord été un adolescent qui a vu disparaître presque tous ceux avec qui il avait grandi.",
          "Vor goes with her class on the missions Master Odin orders, up to the search for the missing senior students. Her youth and enthusiasm make the story's turn all the more brutal when the group works out what happened to the seniors.\n\nLike Hermod and Urd, Vor does not survive the confrontation with the darkness that has taken hold of Baldr. Her loss is among the most painful for her classmates, and one of the tipping points in young Xehanort's arc in Dark Road.\n\nOn the scale of the whole saga, these deaths finally give an intimate explanation to a character until then defined solely by his ambitions: the future Master Xehanort was first a teenager who watched almost everyone he grew up with disappear.",
        ),
      },
    ],
    trivia: [
      L("Vör, dans les mythes nordiques, est associée à la vigilance et à ce que l'on cherche à dissimuler.", "In Norse myth, Vör is associated with vigilance and with what people try to conceal."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Vor", url: "https://kingdomhearts.fandom.com/wiki/Vor" },
    ],
  },

  // ─────────────────────────── Vidar ───────────────────────────
  "vidar": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Vidar est l'élève le plus avancé de Maître Odin dans Dark Road : il appartient à la promotion supérieure, celle qui précède immédiatement Xehanort, Eraqus et leurs camarades. Cette position lui vaut d'être considéré comme le chef naturel de son groupe, et un modèle pour les plus jeunes.\n\nSon nom renvoie à Víðarr, fils d'Odin dans la mythologie nordique, connu pour sa force silencieuse et pour venger son père lors du Ragnarök. Le récit joue de cette filiation : Vidar est, dans la structure de la classe, le fils aîné symbolique du maître, celui à qui l'on confie les missions délicates, et donc celui dont la disparition ébranle le plus l'école.",
          "Vidar is Master Odin's most advanced student in Dark Road: he belongs to the senior class, the one immediately preceding Xehanort, Eraqus and their year. That position makes him the natural leader of his group and a model for the younger students.\n\nHis name points to Víðarr, Odin's son in Norse mythology, known for his silent strength and for avenging his father at Ragnarök. The story plays on that lineage: within the class structure Vidar is the master's symbolic eldest son, the one entrusted with delicate missions — and therefore the one whose disappearance shakes the school most.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Vidar mène le groupe d'aînés qui quitte Scala ad Caelum pour enquêter sur des porteurs de Keyblade disparus, avec Vali, Sigurd, Hoder, Helgi et Heimdall. L'expédition devait être une mission d'élèves confirmés ; elle ne revient jamais.\n\nC'est ce silence qui déclenche l'intrigue de Dark Road : Maître Odin envoie à son tour la classe de Xehanort sur leurs traces. Les plus jeunes remontent le parcours de leurs aînés à travers les mondes et découvrent qu'ils n'ont pas été victimes d'un accident. Les ténèbres qui ont pris possession de Baldr, brisé par la perte de sa sœur Hoder, ont fait de Vidar et de son groupe leurs premières victimes.\n\nVidar n'apparaît donc que brièvement à l'écran, mais sa disparition structure tout le jeu et contribue à faire basculer le jeune Xehanort.",
          "Vidar leads the group of seniors who leave Scala ad Caelum to investigate missing Keyblade wielders, along with Vali, Sigurd, Hoder, Helgi and Heimdall. The expedition was meant to be a mission for experienced students; it never returns.\n\nThat silence sets Dark Road's plot in motion: Master Odin in turn sends Xehanort's class after them. The younger students retrace their seniors' path across the worlds and discover they were not victims of an accident. The darkness that took hold of Baldr, broken by the loss of his sister Hoder, made Vidar and his group its first victims.\n\nVidar therefore appears only briefly on screen, but his disappearance structures the entire game and helps push the young Xehanort over the edge.",
        ),
      },
    ],
    trivia: [
      L("Víðarr est, dans les mythes nordiques, le fils d'Odin qui venge son père lors du Ragnarök.", "In Norse myth, Víðarr is Odin's son, the one who avenges his father at Ragnarök."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Vidar", url: "https://kingdomhearts.fandom.com/wiki/Vidar" },
    ],
  },

  // ─────────────────────────── Vali ───────────────────────────
  "vali": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Vali fait partie de la promotion supérieure de Maître Odin à Scala ad Caelum, celle que dirige Vidar. Ces élèves confirmés servent de repères aux plus jeunes, dont Xehanort et Eraqus, et sont les premiers à qui l'on confie des missions hors de la cité.\n\nSon nom vient de Váli, fils d'Odin dans la mythologie nordique, engendré pour venger la mort de Baldr. Comme pour tous les personnages de Dark Road, ce choix n'est pas neutre : la promotion entière porte des noms tirés du cycle qui entoure la mort du dieu, ce qui annonce dès le générique la nature du drame à venir et le rôle qu'y tiendra le camarade nommé Baldr.",
          "Vali belongs to Master Odin's senior class at Scala ad Caelum, the one led by Vidar. These experienced students serve as reference points for the younger ones, Xehanort and Eraqus among them, and are the first to be trusted with missions outside the city.\n\nHis name comes from Váli, Odin's son in Norse mythology, begotten to avenge Baldr's death. As with every Dark Road character the choice is not neutral: the whole class bears names drawn from the cycle surrounding the god's death, announcing from the credits onward the nature of the coming tragedy and the part the classmate named Baldr will play in it.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Vali quitte Scala ad Caelum avec Vidar, Sigurd, Hoder, Helgi et Heimdall pour retrouver des porteurs de Keyblade disparus. Comme le reste du groupe, il ne donne plus signe de vie, ce qui pousse Maître Odin à envoyer la classe de Xehanort sur leurs traces.\n\nLa recherche menée par les plus jeunes révèle progressivement le sort des aînés : ils n'ont pas été perdus dans les mondes, ils ont été tués. Cette découverte transforme une mission de secours en enquête, et fait comprendre à la classe de Xehanort qu'une menace consciente s'en prend spécifiquement aux élèves de Scala ad Caelum.\n\nVali reste un personnage secondaire dont le jeu montre peu de chose, mais sa disparition, avec celle de ses camarades, est le point de départ de tout ce qui suit.",
          "Vali leaves Scala ad Caelum with Vidar, Sigurd, Hoder, Helgi and Heimdall to find missing Keyblade wielders. Like the rest of the group he stops sending word, which prompts Master Odin to send Xehanort's class after them.\n\nThe younger students' search gradually reveals the seniors' fate: they were not lost in the worlds, they were killed. That discovery turns a rescue mission into an investigation, and makes Xehanort's class realise that a conscious threat is targeting Scala ad Caelum's students specifically.\n\nVali remains a secondary character of whom the game shows little, but his disappearance, with that of his companions, is the starting point of everything that follows.",
        ),
      },
    ],
    trivia: [
      L("Váli est, dans les mythes nordiques, le fils d'Odin né pour venger Baldr.", "In Norse myth, Váli is the son of Odin born to avenge Baldr."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Vali", url: "https://kingdomhearts.fandom.com/wiki/Vali" },
    ],
  },

  // ─────────────────────────── Sigurd ───────────────────────────
  "sigurd": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Sigurd compte parmi les élèves avancés de Maître Odin à Scala ad Caelum, dans le groupe que mène Vidar. Ces aînés incarnent, aux yeux de la classe de Xehanort, ce que l'on devient quand on va au bout de la formation : des porteurs autonomes, capables de mener des missions loin de la cité.\n\nSon nom est celui de Sigurd, héros de la légende nordique de la Völsunga saga, tueur du dragon Fáfnir — le Siegfried germanique. La promotion supérieure de Dark Road puise ainsi, comme la classe de Xehanort, dans le même répertoire mythologique, ce qui donne à l'ensemble de l'école une cohérence onomastique héritée du reste de la saga.",
          "Sigurd is one of Master Odin's advanced students at Scala ad Caelum, in the group led by Vidar. To Xehanort's class these seniors embody what one becomes at the end of the training: independent wielders able to run missions far from the city.\n\nHis name is that of Sigurd, hero of the Norse Völsunga saga and slayer of the dragon Fáfnir — the Germanic Siegfried. Dark Road's senior class therefore draws, like Xehanort's, on the same mythological stock, giving the whole school a naming coherence inherited from the rest of the series.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Sigurd est du voyage lorsque Vidar emmène les aînés hors de Scala ad Caelum pour retrouver des porteurs disparus. Le groupe se disperse à travers les mondes et cesse de donner des nouvelles.\n\nLa classe de Xehanort, envoyée à leur recherche par Maître Odin, reconstitue leur itinéraire et découvre ce qu'il est advenu d'eux. Sigurd figure parmi les victimes des ténèbres qui se sont emparées de Baldr, comme ses camarades de promotion.\n\nLe jeu ne développe guère sa personnalité : sa fonction narrative est d'appartenir à ce groupe d'aînés dont l'élimination méthodique fait basculer Dark Road du récit d'apprentissage vers l'enquête, puis vers la tragédie. C'est en découvrant un à un le sort de ces élèves que Xehanort commence à douter de la solidité de l'ordre défendu par les maîtres.",
          "Sigurd is on the journey when Vidar takes the seniors out of Scala ad Caelum to find missing wielders. The group scatters across the worlds and stops sending word.\n\nXehanort's class, sent after them by Master Odin, reconstructs their route and discovers what became of them. Sigurd is among the victims of the darkness that took hold of Baldr, like his fellow seniors.\n\nThe game develops little of his personality: his narrative function is to belong to that group of seniors whose methodical elimination shifts Dark Road from a coming-of-age story to an investigation, and then to tragedy. It is by uncovering these students' fates one by one that Xehanort begins to doubt the soundness of the order the masters defend.",
        ),
      },
    ],
    trivia: [
      L("Sigurd est, dans la légende nordique, le tueur du dragon Fáfnir, connu sous le nom de Siegfried dans la tradition germanique.", "In Norse legend Sigurd is the slayer of the dragon Fáfnir, known as Siegfried in the Germanic tradition."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Sigurd", url: "https://kingdomhearts.fandom.com/wiki/Sigurd" },
    ],
  },

  // ─────────────────────────── Hoder ───────────────────────────
  "hoder": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Hoder est une élève de la promotion supérieure de Maître Odin à Scala ad Caelum et, surtout, la sœur aînée de Baldr. Ce lien familial fait d'elle le personnage secondaire le plus important de Dark Road : tout le drame du jeu découle de la place qu'elle occupe dans le cœur de son frère.\n\nSon nom vient de Höðr, le dieu aveugle de la mythologie nordique qui tue Baldr sans le vouloir, manipulé par Loki. Kingdom Hearts inverse le rapport : ici, ce n'est pas Hoder qui cause la mort de Baldr, c'est la perte de Hoder qui cause la chute de Baldr. Le clin d'œil est appuyé, et sert d'avertissement à qui connaît le mythe avant même que le jeu ne commence.",
          "Hoder is a student in Master Odin's senior class at Scala ad Caelum and, above all, Baldr's older sister. That family bond makes her the most important secondary character in Dark Road: the whole tragedy of the game flows from the place she holds in her brother's heart.\n\nHer name comes from Höðr, the blind god of Norse mythology who kills Baldr unwittingly, manipulated by Loki. Kingdom Hearts inverts the relation: here it is not Hoder who causes Baldr's death, it is the loss of Hoder that causes Baldr's fall. The nod is deliberate, and serves as a warning to anyone who knows the myth before the game even begins.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Hoder part avec Vidar et les autres aînés en mission hors de Scala ad Caelum, et disparaît avec eux. Pour Baldr, resté à la cité, l'absence de sa sœur devient une obsession, puis une plaie que rien ne referme.\n\nC'est par cette faille que les ténèbres entrent. L'entité qui prend possession de Baldr trouve un cœur déjà brisé, et le camarade le plus doux de la classe de Maître Odin devient l'antagoniste du jeu. Le sort réservé aux aînés, dont Hoder, est révélé progressivement à mesure que la classe de Xehanort remonte leur piste.\n\nHoder n'a donc que peu de temps à l'écran, mais elle est le point d'origine de la chaîne d'événements qui décime deux promotions entières et qui laisse Xehanort, Eraqus et Bragi seuls survivants d'une école qu'ils croyaient inébranlable.",
          "Hoder leaves with Vidar and the other seniors on a mission outside Scala ad Caelum, and disappears with them. For Baldr, left behind in the city, his sister's absence becomes an obsession, then a wound nothing can close.\n\nIt is through that fault line that the darkness enters. The entity that takes possession of Baldr finds a heart already broken, and the gentlest classmate of Master Odin's class becomes the game's antagonist. The fate of the seniors, Hoder included, is revealed step by step as Xehanort's class follows their trail.\n\nHoder therefore has little screen time, but she is the point of origin of the chain of events that decimates two entire classes and leaves Xehanort, Eraqus and Bragi as the sole survivors of a school they believed unshakeable.",
        ),
      },
    ],
    trivia: [
      L("Dans les mythes nordiques, Höðr est le dieu aveugle qui tue Baldr malgré lui ; Dark Road renverse ce rapport en faisant de Hoder sa sœur disparue.", "In Norse myth Höðr is the blind god who kills Baldr against his will; Dark Road reverses the relation by making Hoder his lost sister."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Hoder", url: "https://kingdomhearts.fandom.com/wiki/Hoder" },
    ],
  },

  // ─────────────────────────── Helgi ───────────────────────────
  "helgi": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Helgi appartient à la promotion supérieure de Maître Odin à Scala ad Caelum, le groupe d'élèves avancés conduit par Vidar. Ces aînés forment une petite communauté à part dans l'école : plus expérimentés, plus autonomes, ils sont les seuls autorisés à mener des missions loin de la cité.\n\nSon nom est emprunté à Helgi, nom porté par plusieurs héros des poèmes nordiques de l'Edda poétique. Comme ses camarades, elle s'inscrit ainsi dans le système onomastique de Dark Road, où chaque élève renvoie à une figure de la mythologie scandinave — procédé que la saga emploie déjà pour les Nornes de l'Âge des Fées et pour les Prophètes latins de Daybreak Town.",
          "Helgi belongs to Master Odin's senior class at Scala ad Caelum, the group of advanced students led by Vidar. These seniors form a small community apart within the school: more experienced and more independent, they are the only ones allowed to run missions far from the city.\n\nHer name comes from Helgi, borne by several heroes of the Norse poems of the Poetic Edda. Like her classmates she thus fits Dark Road's naming system, in which every student points to a figure of Scandinavian mythology — a device the series already uses for the Norns of the Age of Fairy Tales and for Daybreak Town's Latin-named Foretellers.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Helgi fait partie du groupe qui quitte Scala ad Caelum avec Vidar pour enquêter sur des porteurs de Keyblade disparus. Comme les autres aînés, elle cesse de donner des nouvelles, ce qui décide Maître Odin à envoyer la classe de Xehanort à leur recherche.\n\nLes plus jeunes découvrent au fil de leur enquête ce qui est arrivé aux membres de l'expédition. Helgi compte parmi les victimes des ténèbres qui ont pris possession de Baldr après la disparition de sa sœur Hoder.\n\nLe jeu la maintient dans un rôle discret : elle sert, avec Vali, Sigurd et Heimdall, à donner une épaisseur collective au groupe des aînés, pour que leur élimination pèse comme une perte réelle et non comme un simple ressort d'intrigue. C'est cette accumulation de disparitions qui installe le climat de Dark Road et prépare le retournement final.",
          "Helgi is part of the group that leaves Scala ad Caelum with Vidar to investigate missing Keyblade wielders. Like the other seniors she stops sending word, which decides Master Odin to send Xehanort's class after them.\n\nThe younger students discover in the course of their investigation what happened to the members of the expedition. Helgi is among the victims of the darkness that took hold of Baldr after his sister Hoder disappeared.\n\nThe game keeps her in a discreet role: with Vali, Sigurd and Heimdall she gives collective substance to the group of seniors, so that their elimination registers as a real loss rather than a plot device. It is this accumulation of disappearances that sets Dark Road's mood and prepares its final turn.",
        ),
      },
    ],
    trivia: [
      L("Helgi est le nom de plusieurs héros des poèmes de l'Edda poétique, dans la tradition nordique.", "Helgi is the name of several heroes in the poems of the Poetic Edda, in the Norse tradition."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Helgi", url: "https://kingdomhearts.fandom.com/wiki/Helgi" },
    ],
  },

  // ─────────────────────────── Heimdall ───────────────────────────
  "heimdall": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Heimdall est l'un des élèves avancés de Maître Odin à Scala ad Caelum, membre du groupe que dirige Vidar. Il appartient à cette génération d'aînés que Xehanort, Eraqus et leurs camarades observent de loin, avec le mélange de respect et d'impatience propre aux élèves plus jeunes.\n\nSon nom vient de Heimdallr, le dieu nordique qui monte la garde au pont Bifröst et dont l'ouïe perçoit l'herbe pousser : la sentinelle des dieux, celle qui sonne le cor au début du Ragnarök. Le choix résonne avec la fonction de son groupe dans le récit, puisque ce sont ces aînés qui, les premiers, partent voir ce qui menace les porteurs de Keyblade et disparaissent en tentant de l'identifier.",
          "Heimdall is one of Master Odin's advanced students at Scala ad Caelum, a member of the group led by Vidar. He belongs to the generation of seniors whom Xehanort, Eraqus and their classmates watch from a distance, with the mix of respect and impatience typical of younger students.\n\nHis name comes from Heimdallr, the Norse god who guards the Bifröst bridge and whose hearing catches the grass growing: the sentinel of the gods, the one who sounds the horn at the start of Ragnarök. The choice chimes with his group's role in the story, since it is these seniors who first set out to see what threatens the Keyblade wielders, and who disappear trying to identify it.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Heimdall suit Vidar hors de Scala ad Caelum avec le reste des aînés, dans une mission qui doit faire la lumière sur des disparitions de porteurs de Keyblade. Le groupe ne revient pas.\n\nEnvoyée à leur suite, la classe de Xehanort reconstitue leur trajet à travers les mondes et met au jour, une victime après l'autre, ce qui leur est arrivé. Heimdall compte parmi les élèves tombés face aux ténèbres qui habitent désormais Baldr.\n\nCette série de découvertes alimente directement l'évolution du protagoniste. Constatant que les aînés les plus solides de l'école ont été éliminés sans que personne à Scala ad Caelum ne s'en aperçoive à temps, Xehanort commence à considérer que l'équilibre entre lumière et ténèbres défendu par les maîtres est une illusion confortable — idée qu'il portera jusqu'à ses dernières conséquences.",
          "Heimdall follows Vidar out of Scala ad Caelum with the rest of the seniors, on a mission meant to shed light on the disappearance of Keyblade wielders. The group does not return.\n\nSent after them, Xehanort's class retraces their path across the worlds and uncovers, one victim after another, what happened to them. Heimdall is among the students who fell to the darkness now inhabiting Baldr.\n\nThat series of discoveries feeds directly into the protagonist's development. Seeing that the school's most capable seniors were eliminated without anyone in Scala ad Caelum noticing in time, Xehanort begins to regard the balance between light and darkness defended by the masters as a comfortable illusion — an idea he will carry to its furthest consequences.",
        ),
      },
    ],
    trivia: [
      L("Heimdallr est, dans les mythes nordiques, le gardien du pont Bifröst qui sonne le cor annonçant le Ragnarök.", "In Norse myth, Heimdallr is the guardian of the Bifröst bridge who sounds the horn announcing Ragnarök."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Heimdall", url: "https://kingdomhearts.fandom.com/wiki/Heimdall" },
    ],
  },

  // ─────────────────────────── Vala ───────────────────────────
  "vala": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Vala est une élève de Maître Odin à Scala ad Caelum, rattachée au groupe des porteurs plus avancés qui gravitent autour de Vidar. Elle appartient à cette génération d'élèves dont la disparition, avant l'ouverture du récit, sert de point de départ à Dark Road.\n\nSon nom renvoie à la völva, la voyante des traditions nordiques, celle qui prophétise dans la Völuspá. La série a l'habitude de ces échos : les Prophètes de Daybreak Town portent des noms latins de péchés, les élèves de Scala ad Caelum des noms scandinaves. Chez Vala, la référence à la prophétie est d'autant plus notable que toute la cité descend d'un monde bâti autour du Livre des prophéties.",
          "Vala is a student of Master Odin at Scala ad Caelum, attached to the group of more advanced wielders orbiting Vidar. She belongs to the generation of students whose disappearance, before the story opens, serves as Dark Road's starting point.\n\nHer name points to the völva, the seeress of Norse tradition who prophesies in the Völuspá. The series is fond of such echoes: Daybreak Town's Foretellers bear the Latin names of sins, Scala ad Caelum's students Scandinavian ones. In Vala's case the reference to prophecy is all the more striking given that the whole city descends from a world built around the Book of Prophecies.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Vala fait partie des élèves dont l'absence inquiète Scala ad Caelum et motive le départ de l'expédition menée par Vidar. Le fil des disparitions se resserre ensuite : les aînés partis chercher les premiers manquants manquent à leur tour, et c'est la classe de Xehanort que Maître Odin envoie enfin sur leurs traces.\n\nL'enquête menée par les plus jeunes révèle que ces disparitions n'ont rien d'accidentel et remonte jusqu'aux ténèbres installées dans le cœur de Baldr après la perte de sa sœur Hoder.\n\nVala reste l'un des personnages les moins développés du jeu, mais sa fonction est claire : elle incarne la première anomalie, celle par laquelle Scala ad Caelum aurait pu comprendre ce qui la menaçait, et que l'école a traitée trop tard.",
          "Vala is among the students whose absence worries Scala ad Caelum and prompts the expedition led by Vidar. The thread of disappearances then tightens: the seniors sent to look for the first missing students go missing themselves, and it is Xehanort's class that Master Odin finally sends after them.\n\nThe younger students' investigation reveals that these disappearances are no accident, and traces them back to the darkness lodged in Baldr's heart after the loss of his sister Hoder.\n\nVala remains one of the game's least developed characters, but her function is clear: she embodies the first anomaly, the one through which Scala ad Caelum could have understood what threatened it, and which the school addressed too late.",
        ),
      },
    ],
    trivia: [
      L("Le nom Vala évoque la völva, la prophétesse des traditions nordiques qui parle dans la Völuspá.", "The name Vala evokes the völva, the seeress of Norse tradition who speaks in the Völuspá."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Vala", url: "https://kingdomhearts.fandom.com/wiki/Vala" },
    ],
  },

  // ─────────────────────────── Les Mogs ───────────────────────────
  "moogles": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Les Mogs sont l'une des créatures les plus reconnaissables de Final Fantasy. Apparus dans Final Fantasy III en 1990, ces petits êtres blancs à oreilles de chauve-souris, museau rond et pompon rouge flottant au-dessus de la tête ponctuent leurs phrases d'un « kupo » devenu leur signature. Leur nom japonais, mōguri, combine les mots désignant la taupe et la chauve-souris, ce que leur silhouette reflète assez fidèlement.\n\nQuand Square et Disney bâtissent Kingdom Hearts, les Mogs suivent la même logique que Cid, Yuffie ou Léon : ils traversent la frontière entre les deux univers et s'installent dans les mondes Disney sans que personne ne s'en étonne. On ne leur donne pas d'histoire ni de camp, mais une fonction, celle de commerçant et d'artisan. Cette neutralité en fait des figures présentes d'un bout à l'autre de la saga, du premier épisode jusqu'à Kingdom Hearts III.",
          "Moogles are among the most recognisable creatures of Final Fantasy. First appearing in Final Fantasy III in 1990, these small white beings with bat wings, a round snout and a red pompom bobbing above their heads punctuate their sentences with a “kupo” that has become their signature. Their Japanese name, mōguri, combines the words for mole and bat, which their silhouette reflects fairly faithfully.\n\nWhen Square and Disney build Kingdom Hearts, the Moogles follow the same logic as Cid, Yuffie or Leon: they cross the border between the two universes and settle into Disney worlds without anyone finding it strange. They are given neither backstory nor allegiance, but a function — merchant and craftsman. That neutrality makes them a constant presence from one end of the saga to the other, from the first game through Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "C'est dans Kingdom Hearts que les Mogs prennent leur rôle définitif dans la saga : celui d'artisans de la synthèse d'objets. Installés dans la Ville de Traverse, au-dessus de la boutique d'accessoires du premier district, ils proposent à Sora d'assembler les matériaux récupérés sur les Sans-cœur pour en tirer des objets qu'aucun marchand ne vend.\n\nLe système repose sur une collecte patiente : chaque famille de Sans-cœur laisse tomber un matériau spécifique, et les recettes se débloquent au fur et à mesure que le joueur rapporte des composants rares. Les meilleures récompenses de l'atelier, dont les accessoires ultimes, comptent parmi les objectifs de fin de partie les plus exigeants du jeu. Les Mogs y gagnent une place à part : ils ne participent pas à l'intrigue, mais leur boutique devient l'un des lieux où l'on revient le plus souvent.",
          "It is in Kingdom Hearts that the Moogles take on their definitive role in the series: craftsmen of item synthesis. Set up in Traverse Town, above the accessory shop in the First District, they offer Sora the chance to assemble materials recovered from Heartless into items no merchant sells.\n\nThe system rests on patient collecting: each family of Heartless drops a specific material, and recipes unlock as the player brings back rarer components. The workshop's best rewards, including the ultimate accessories, are among the game's most demanding endgame goals. The Moogles thus earn a place of their own: they take no part in the plot, yet their shop becomes one of the spots players return to most.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Chain of Memories transpose l'idée dans un jeu entièrement bâti sur des cartes. Un Mog tient boutique au Manoir Oblivion et vend à Sora des paquets de cartes de valeurs et de couleurs variées, seule façon d'étoffer un deck au fil de la montée des étages.\n\nLe marchand n'est pas seulement un service : il devient un élément de stratégie. Choisir entre un paquet bon marché et une pochette de cartes fortes, arbitrer entre cartes d'attaque, de magie et d'objet, fait partie de la préparation avant chaque affrontement. Riku, dans Reverse/Rebirth, ne dispose pas de la même liberté de composition, ce qui souligne à quel point la boutique du Mog structure l'expérience de Sora dans cet épisode.",
          "Chain of Memories transposes the idea into a game built entirely on cards. A Moogle keeps shop in Castle Oblivion and sells Sora packs of cards of varying values and colours, the only way to build up a deck as he climbs the floors.\n\nThe merchant is not merely a service: he becomes part of the strategy. Choosing between a cheap pack and a pouch of strong cards, balancing attack, magic and item cards, is part of the preparation before every fight. Riku, in Reverse/Rebirth, has no such freedom of composition, which underlines how much the Moogle's shop shapes Sora's experience in this game.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Dans 358/2 Days, un Mog s'est installé au cœur même du repaire de l'Organisation XIII : il tient boutique dans la Salle Grise, le hall du quartier général de l'Organisation dans le Monde qui n'existe pas, où les membres viennent chercher leurs missions. L'incongruité de la scène — une créature Final Fantasy vendant des marchandises à des Similis en manteau noir — fait partie du charme de l'épisode.\n\nSon rôle est adapté au système de progression très particulier du jeu. Roxas n'améliore pas ses statistiques en montant de niveau mais en agençant des panneaux dans une grille, et le Mog vend précisément les objets, panneaux et accessoires nécessaires à cet assemblage. Il propose aussi la synthèse, à partir des matériaux rapportés de mission, ce qui en fait le principal partenaire économique de Roxas tout au long de son année dans l'Organisation.",
          "In 358/2 Days a Moogle has set up shop in the heart of Organization XIII's own base: he trades in the Grey Area, where members come to collect their missions. The incongruity of the scene — a Final Fantasy creature selling goods to black-coated Nobodies — is part of the game's charm.\n\nHis role is adapted to the game's very particular progression system. Roxas does not improve his stats by levelling up but by arranging panels in a grid, and the Moogle sells precisely the items, panels and accessories needed for that assembly. He also offers synthesis from materials brought back from missions, making him Roxas's chief economic partner throughout his year in the Organization.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Kingdom Hearts II généralise la présence des Mogs : on en trouve dans presque chaque monde, souvent près d'un point de sauvegarde, ce qui évite au joueur de revenir sur ses pas pour vendre son butin ou refaire ses stocks. Certains d'entre eux apparaissent sous forme de projection, permettant de consulter la même boutique depuis plusieurs endroits.\n\nLa synthèse gagne en profondeur : les matériaux sont classés par familles — cristaux, gemmes, pierres et autres — et les recettes se débloquent au fil de l'aventure, jusqu'à des créations qui exigent d'avoir écumé tous les mondes. Un Mog membre de l'Organisation XIII, marchand aux allures de Simili, apparaît par ailleurs dans le Monde qui n'existe pas, prolongeant la plaisanterie ouverte par 358/2 Days.",
          "Kingdom Hearts II makes the Moogles ubiquitous: one is found in nearly every world, often near a save point, sparing the player a trek back to sell loot or restock. Some of them appear as projections, letting the same shop be consulted from several places.\n\nSynthesis gains depth: materials are sorted into families — crystals, gems, stones and others — and recipes unlock over the course of the adventure, up to creations requiring a sweep of every world. A Moogle attached to Organization XIII, a merchant with a Nobody's trappings, also appears in The World That Never Was, extending the joke opened by 358/2 Days.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Birth by Sleep confie aux Mogs la boutique d'objets que Terra, Ventus et Aqua consultent depuis le menu, où qu'ils se trouvent. Le jeu abandonne la boutique physique installée dans un monde précis au profit d'un accès permanent, ce qui colle au découpage de son aventure en trois parcours indépendants.\n\nLes Mogs y vendent objets de soin, accessoires et, surtout, les commandes qui constituent le cœur du système de combat de l'épisode : chaque sort, chaque technique se présente sous forme de commande à équiper, puis à fusionner avec une autre pour en obtenir de plus puissantes. En rendant ces commandes achetables, la boutique devient un levier direct de personnalisation, et non plus un simple complément au butin ramassé sur les Nescients.",
          "Birth by Sleep gives the Moogles the item shop that Terra, Ventus and Aqua consult from the menu wherever they are. The game drops the physical shop tied to one world in favour of permanent access, which suits its adventure split into three independent campaigns.\n\nThe Moogles sell healing items, accessories and, above all, the commands that form the core of the game's combat system: every spell and technique comes as a command to equip, then to meld with another to obtain more powerful ones. By making these commands purchasable, the shop becomes a direct lever of customisation rather than a mere supplement to loot gathered from the Unversed.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Kingdom Hearts III reprend la formule en l'élargissant. Les boutiques Mog sont accessibles dans chaque monde et regroupent achat, vente et synthèse, avec une gamme de matériaux qui couvre l'ensemble des ennemis du jeu et débouche sur les accessoires et les Keyblades les plus puissants.\n\nLes Mogs y récupèrent aussi une activité inédite : les missions photo. Sora dispose d'un appareil intégré à son Gummiphone, et les Mogs lui demandent de photographier des motifs cachés dans les mondes — des formes évoquant leur propre silhouette, notamment — en échange de récompenses. La saga leur rend par ailleurs hommage à travers plusieurs objets et Keyblades reprenant leur pompon et leurs couleurs, confirmation qu'ils sont devenus, à force de discrétion, l'un des rares repères communs à tous les épisodes.",
          "Kingdom Hearts III keeps the formula and widens it. Moogle shops are available in every world and combine buying, selling and synthesis, with a range of materials covering the game's whole bestiary and leading to its most powerful accessories and Keyblades.\n\nThe Moogles also pick up a new activity: photo missions. Sora has a camera built into his Gummiphone, and the Moogles ask him to photograph patterns hidden across the worlds — shapes evoking their own silhouette in particular — in exchange for rewards. The series also pays tribute to them through several items and Keyblades borrowing their pompom and colours, confirming that by sheer persistence they have become one of the few landmarks common to every game.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais des Mogs, mōguri (モーグリ), est un mot-valise formé à partir de mogura, la taupe, et kōmori, la chauve-souris.", "The Moogles' Japanese name, mōguri (モーグリ), is a portmanteau of mogura, mole, and kōmori, bat."),
      L("Les Mogs apparaissent pour la première fois dans Final Fantasy III (1990) et sont depuis présents dans la quasi-totalité de la série.", "Moogles first appeared in Final Fantasy III (1990) and have featured in nearly every entry of the series since."),
      L("La Kupo Coin, accessoire nommé d'après leur cri, sauve son porteur d'une mise hors de combat dans plusieurs épisodes.", "The Kupo Coin, an accessory named after their cry, saves its wearer from being knocked out in several games."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Moogle", url: "https://kingdomhearts.fandom.com/wiki/Moogle" },
      { label: "Kingdom Hearts Wiki — Synthesis", url: "https://kingdomhearts.fandom.com/wiki/Synthesis" },
    ],
  },
};
