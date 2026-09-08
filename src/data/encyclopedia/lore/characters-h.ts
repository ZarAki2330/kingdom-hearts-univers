import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des personnages Disney secondaires (lot H) : comparses de mondes,
 * antagonistes locaux, animaux et invocations. Clés = slugs des entrées de personnages.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────── Terre des Lions ───────────────────────
  "timon-and-pumbaa": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Timon le suricate et Pumbaa le phacochère apparaissent dans Le Roi Lion (1994), où ils recueillent un lionceau en fuite et lui enseignent leur devise : hakuna matata, « sans souci ». Leur numéro comique et leur amitié inconditionnelle en font l'un des duos les plus populaires du studio.\n\nKingdom Hearts en conserve exactement cette fonction. Ils forment le contrepoint léger de la Terre des Lions, monde par ailleurs sombre où la sécheresse, l'usurpation et les Sans-cœur pèsent sur chaque scène. Là où Simba doute et où Nala se bat, Timon et Pumbaa gardent leur insouciance, quitte à découvrir qu'elle ne suffit plus une fois le royaume menacé.",
          "Timon the meerkat and Pumbaa the warthog appear in The Lion King (1994), taking in a runaway cub and teaching him their motto: hakuna matata, “no worries”. Their comic double act and unconditional friendship made them one of the studio's most popular pairs.\n\nKingdom Hearts keeps that function precisely. They are the light counterpoint of the Pride Lands, an otherwise sombre world where drought, usurpation and Heartless weigh on every scene. Where Simba doubts and Nala fights, Timon and Pumbaa hold on to their carelessness, only to discover it is no longer enough once the kingdom is under threat.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sora, Donald et Dingo, métamorphosés en animaux, retrouvent Timon et Pumbaa dans l'oasis de la jungle où Simba vit son exil. Les deux compères refusent d'abord de croire au danger, puis se laissent entraîner quand Nala vient chercher son ami pour reprendre le Rocher des Lions.\n\nAu moment de l'assaut, ils jouent le rôle qu'ils tiennent déjà dans le film : servir d'appât aux hyènes pour dégager le passage. Ils reviennent ensuite dans plusieurs épisodes de la Terre des Lions, notamment lorsqu'ils sont poursuivis par les Sans-cœur, et Sora doit les tirer d'affaire. Leur présence, purement secondaire, sert surtout à alléger un monde dominé par Scar et par les ténèbres.",
          "Sora, Donald and Goofy, transformed into animals, find Timon and Pumbaa in the jungle oasis where Simba lives in exile. The pair refuse at first to believe in any danger, then let themselves be swept along when Nala comes to fetch her friend and retake Pride Rock.\n\nDuring the assault they play the part they already have in the film: acting as bait for the hyenas to clear the way. They return in several Pride Lands episodes afterwards, notably when the Heartless chase them and Sora has to bail them out. Their role stays firmly secondary, mainly lightening a world dominated by Scar and by darkness.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Timon and Pumbaa", url: "https://kingdomhearts.fandom.com/wiki/Timon_and_Pumbaa" }],
  },

  // ─────────────────────── Jungle Profonde ───────────────────────
  "jane-porter": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Jane Porter vient de Tarzan (1999), où elle accompagne son père, le professeur Porter, dans une expédition destinée à étudier les gorilles d'Afrique. Curieuse et obstinée, elle est la première à comprendre que l'homme sauvage rencontré dans la jungle est capable d'apprendre et de communiquer.\n\nKingdom Hearts reprend ce rôle d'intermédiaire. Dans la Jungle Profonde, elle est celle qui traduit, qui explique et qui fait le lien entre le campement des humains et le monde des gorilles. C'est aussi elle qui donne à Sora les premiers indices sur ce que cherchent vraiment Clayton et les créatures qui rôdent autour du camp.",
          "Jane Porter comes from Tarzan (1999), where she accompanies her father, Professor Porter, on an expedition to study the gorillas of Africa. Curious and stubborn, she is the first to grasp that the wild man met in the jungle can learn and communicate.\n\nKingdom Hearts keeps her role as go-between. In the Deep Jungle she is the one who translates, explains and bridges the humans' camp and the gorillas' world. She is also the one who gives Sora his first clues about what Clayton and the creatures prowling around the camp are really after.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Sora atterrit dans la Jungle Profonde après avoir été séparé de Donald et Dingo, et c'est au campement de Jane qu'il retrouve ses compagnons. Elle leur apprend que Tarzan a été élevé par les gorilles et qu'il tente de leur dire quelque chose que personne ne comprend ; les diapositives de son projecteur permettent peu à peu de traduire ses mots.\n\nQuand Clayton révèle ses véritables intentions et prend le camp d'assaut avec les Sans-cœur, Jane est enfermée avec Terk sous une nuée de créatures dans les tentes. Sora les délivre, puis part avec Tarzan affronter le chasseur près des chutes. La jeune femme choisit finalement de rester dans la jungle, et le père et la fille renoncent à ramener Tarzan en Angleterre.",
          "Sora lands in the Deep Jungle after being separated from Donald and Goofy, and it is at Jane's camp that he finds his companions again. She tells them Tarzan was raised by gorillas and is trying to say something nobody understands; the slides of her projector gradually help translate his words.\n\nWhen Clayton reveals his true intentions and storms the camp with the Heartless, Jane is trapped with Terk beneath a swarm of creatures among the tents. Sora frees them, then leaves with Tarzan to confront the hunter near the waterfalls. The young woman ultimately chooses to stay in the jungle, and father and daughter give up on taking Tarzan back to England.",
        ),
      },
    ],
    trivia: [
      L("La Jungle Profonde n'est jamais revenue dans les épisodes suivants, ce qui fait de Jane un personnage limité au premier Kingdom Hearts.", "The Deep Jungle never returned in later entries, which confines Jane to the first Kingdom Hearts."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Jane Porter", url: "https://kingdomhearts.fandom.com/wiki/Jane_Porter" }],
  },

  "kerchak": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Kerchak est le chef du groupe de gorilles de Tarzan (1999). Marqué par la perte de son propre petit, il accepte à contrecœur que Kala élève l'enfant humain trouvé dans la jungle, mais refuse longtemps de le reconnaître comme un des siens : sa méfiance envers les hommes structure tout le film.\n\nKingdom Hearts conserve ce personnage de patriarche fermé, dont l'accord conditionne l'avancée de l'intrigue. Dans la Jungle Profonde, il incarne l'obstacle qui n'est ni un ennemi ni un Sans-cœur : un chef prudent qui protège les siens et que Sora doit convaincre plutôt que combattre.",
          "Kerchak leads the gorilla troop in Tarzan (1999). Scarred by the loss of his own infant, he reluctantly lets Kala raise the human child found in the jungle, but long refuses to accept him as one of their own: his distrust of humans shapes the whole film.\n\nKingdom Hearts keeps this closed-off patriarch, whose consent gates the plot's progress. In the Deep Jungle he embodies an obstacle that is neither an enemy nor a Heartless: a cautious leader protecting his troop, whom Sora must win over rather than fight.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Kerchak interdit d'abord aux gorilles tout contact avec les humains, et ignore Sora comme il ignore Tarzan quand celui-ci plaide leur cause. Cette méfiance retarde l'accès aux zones les plus profondes de la jungle, où se cache la Serrure du monde.\n\nLorsque Clayton lance ses Sans-cœur sur les gorilles pour les capturer, Kerchak est frappé de plein fouet en protégeant sa troupe. Après la défaite du chasseur et du Sans-cœur qui l'accompagne, il accepte enfin Tarzan comme membre de sa famille et le laisse conduire Sora jusqu'à la cascade et à l'arbre où se trouve la Serrure. Son revirement, silencieux, clôt le monde sur la même image que le film : un chef qui reconnaît enfin son fils.",
          "Kerchak first forbids the gorillas any contact with humans, and ignores Sora just as he ignores Tarzan when he pleads their case. That mistrust delays access to the deepest parts of the jungle, where the world's Keyhole lies hidden.\n\nWhen Clayton sets his Heartless on the gorillas to capture them, Kerchak takes the brunt of it defending his troop. After the hunter and the Heartless with him are defeated, he finally accepts Tarzan as family and lets him lead Sora to the waterfall and the tree holding the Keyhole. His silent change of heart closes the world on the same image as the film: a leader who at last acknowledges his son.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Kerchak", url: "https://kingdomhearts.fandom.com/wiki/Kerchak" }],
  },

  "terk": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Terk est la gorille espiègle qui grandit aux côtés de Tarzan dans le film de 1999. Meneuse de bande, elle est la première à accepter l'enfant humain, quitte à le charrier sans relâche, et sert de moteur comique à la plupart des scènes de jeunesse.\n\nDans Kingdom Hearts, elle garde ce caractère curieux qui la pousse vers ce qu'elle ne devrait pas approcher : le campement des humains, ses objets brillants et ses machines. Cette curiosité, inoffensive dans le film, devient dans le jeu la raison pour laquelle elle se retrouve prise au piège au mauvais endroit et au mauvais moment.",
          "Terk is the mischievous gorilla who grows up alongside Tarzan in the 1999 film. A ringleader, she is the first to accept the human child, teasing him relentlessly all the while, and drives most of the comedy in the childhood scenes.\n\nIn Kingdom Hearts she keeps the curiosity that draws her toward what she should leave alone: the humans' camp, its shiny objects and its machines. Harmless in the film, that curiosity is in the game the reason she ends up trapped in the wrong place at the wrong time.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Terk apparaît dans la Jungle Profonde parmi les gorilles que Sora doit retrouver dispersés dans les arbres et les clairières. Elle rôde surtout autour du campement de Jane, attirée par le matériel des explorateurs, malgré l'interdiction formelle de Kerchak.\n\nQuand Clayton retourne les Sans-cœur contre les gorilles, elle est capturée avec Jane et retenue prisonnière sous une masse de créatures qui bloque les tentes. Sora, Donald et Dingo doivent disperser les Sans-cœur pour les libérer. Une fois délivrée, Terk n'intervient plus dans l'affrontement final, mais sa capture sert de déclencheur : c'est elle qui prouve à Tarzan que le chasseur s'en prend désormais ouvertement à sa famille.",
          "Terk appears in the Deep Jungle among the gorillas Sora must track down across the trees and clearings. She hangs around Jane's camp above all, drawn by the explorers' equipment, despite Kerchak's flat prohibition.\n\nWhen Clayton turns the Heartless on the gorillas, she is captured with Jane and held beneath a mass of creatures blocking the tents. Sora, Donald and Goofy have to scatter the Heartless to free them. Once released Terk takes no part in the final fight, but her capture is the trigger: she is the proof, for Tarzan, that the hunter is now openly attacking his family.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Terk", url: "https://kingdomhearts.fandom.com/wiki/Terk" }],
  },

  // ─────────────────────── Forêt des Rêves Bleus ───────────────────────
  "piglet": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Porcinet, créé par A. A. Milne et popularisé par les courts métrages Disney à partir de 1968, est le plus petit et le plus craintif des habitants de la Forêt des Rêves Bleus. Sa timidité chronique s'accompagne d'un courage discret : il finit toujours par affronter ce qui l'effraie pour aider Winnie l'Ourson.\n\nKingdom Hearts en fait l'un des amis dispersés du livre confié à Sora. Comme tous les personnages de ce monde, il n'a aucun rapport avec les Sans-cœur ni avec la guerre des Keyblades : la Forêt des Rêves Bleus est une parenthèse de calme où le héros vient se reposer entre deux mondes menacés.",
          "Piglet, created by A. A. Milne and popularised by Disney's shorts from 1968 on, is the smallest and most fearful resident of the Hundred Acre Wood. His chronic timidity comes with a quiet courage: he always ends up facing what frightens him in order to help Winnie the Pooh.\n\nKingdom Hearts makes him one of the scattered friends of the book entrusted to Sora. Like everyone in this world he has nothing to do with the Heartless or the Keyblade war: the Hundred Acre Wood is a pocket of calm where the hero comes to rest between two endangered worlds.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le livre de Winnie l'Ourson, confié à Merlin à la Ville de Traverse, a perdu plusieurs de ses pages quand son monde a été frappé par les ténèbres. À mesure que Sora retrouve ces pages, les habitants reparaissent un à un dans les clairières.\n\nPorcinet est l'un d'eux : Sora le découvre là où le vent l'a emporté et le ramène auprès de Winnie, qui ne se souvenait plus de lui. Les scènes qui suivent se jouent sous forme de petits jeux et de promenades, sans le moindre combat. Elles récompensent le joueur par des objets et par des soins, et rappellent que la restauration du livre équivaut, à l'échelle de ce monde, à la restauration d'une mémoire.",
          "Winnie the Pooh's book, entrusted to Merlin in Traverse Town, lost several of its pages when its world was struck by darkness. As Sora recovers those pages, the residents reappear one by one in the clearings.\n\nPiglet is one of them: Sora finds him where the wind carried him and brings him back to Pooh, who no longer remembered him. The scenes that follow play out as small games and walks, without a single battle. They reward the player with items and healing, and remind us that restoring the book is, on this world's scale, restoring a memory.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Dans Kingdom Hearts II, le livre a de nouveau été abîmé, cette fois par l'Organisation XIII, et Porcinet fait partie des amis que Winnie a oubliés. Sora retrouve le petit cochon dans une des pages restaurées et le ramène auprès de ses amis.\n\nLes séquences de ce monde reposent entièrement sur des mini-jeux où Porcinet participe aux côtés des autres : chasse aux ballons, courses dans les champs de citrouilles ou glissades dans les arbres. Il réapparaît dans Kingdom Hearts III lors de la récolte des fruits organisée dans la clairière, où Sora, de passage, retrouve tout le groupe intact.",
          "In Kingdom Hearts II the book has been damaged again, this time by Organization XIII, and Piglet is one of the friends Pooh has forgotten. Sora finds the little pig in one of the restored pages and brings him back to his friends.\n\nThe world's sequences rest entirely on mini-games in which Piglet takes part alongside the others: chasing balloons, running through pumpkin fields or sliding through the trees. He returns in Kingdom Hearts III during the fruit harvest held in the clearing, where a passing Sora finds the whole group intact.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Piglet", url: "https://kingdomhearts.fandom.com/wiki/Piglet" }],
  },

  "eeyore": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Bourriquet est l'âne gris et mélancolique de la Forêt des Rêves Bleus, connu pour son pessimisme placide et pour sa queue qui se détache sans cesse. Dans les histoires de Milne comme dans les adaptations Disney, ses amis passent leur temps à lui rendre sa bonne humeur, ou du moins sa queue.\n\nKingdom Hearts reprend ces deux traits sans rien y ajouter. Il est l'un des habitants à retrouver dans les pages déchirées du livre, et l'une des figures les plus reconnaissables d'un monde volontairement dépourvu d'enjeu dramatique. Sa présence, comme celle de ses amis, sert de respiration dans une saga par ailleurs occupée par les ténèbres.",
          "Eeyore is the grey, gloomy donkey of the Hundred Acre Wood, known for his placid pessimism and for a tail that keeps coming off. In Milne's stories as in Disney's adaptations, his friends spend their time restoring his good mood, or at least his tail.\n\nKingdom Hearts takes those two traits and adds nothing. He is one of the residents to be found again in the book's torn pages, and one of the most recognisable figures of a world deliberately stripped of dramatic stakes. His presence, like his friends', is a breathing space in a saga otherwise busy with darkness.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Sora découvre Bourriquet dans l'une des clairières restaurées du livre, une fois la page correspondante récupérée. L'âne a, comme toujours, perdu sa queue, et la petite quête consiste à la lui rapporter avant qu'il ne se résigne définitivement.\n\nLe personnage revient ensuite dans les mini-jeux successifs de la Forêt des Rêves Bleus : dans Chain of Memories, où le monde ressurgit sous forme de carte-souvenir, puis dans Kingdom Hearts II, où il fait partie des amis oubliés de Winnie que Sora doit réunir, et enfin dans Kingdom Hearts III lors de la récolte de fruits. Il n'intervient jamais dans un combat et ne rencontre jamais un Sans-cœur.",
          "Sora finds Eeyore in one of the book's restored clearings, once the matching page has been recovered. The donkey has, as always, lost his tail, and the small quest is to bring it back before he resigns himself for good.\n\nThe character then returns in the Hundred Acre Wood's successive mini-games: in Chain of Memories, where the world resurfaces as a memory card, then in Kingdom Hearts II, where he is one of the forgotten friends Sora must reunite with Pooh, and finally in Kingdom Hearts III during the fruit harvest. He never takes part in a battle and never meets a Heartless.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Eeyore", url: "https://kingdomhearts.fandom.com/wiki/Eeyore" }],
  },

  "rabbit": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Coco Lapin est le jardinier de la Forêt des Rêves Bleus : soucieux de l'ordre, fier de son potager et régulièrement exaspéré par les visites de Winnie l'Ourson, qui vide ses pots de miel. Sa maison, ses carottes et ses plans contrariés fournissent l'essentiel des situations comiques du groupe.\n\nKingdom Hearts s'appuie sur ce même ressort. Dans presque toutes ses apparitions, Coco Lapin confie à Sora une tâche liée à sa récolte : rapporter du miel, protéger ses cultures, remettre le jardin en état. Les mini-jeux du monde sont bâtis autour de ces préoccupations domestiques, très loin des enjeux du reste de la saga.",
          "Rabbit is the Hundred Acre Wood's gardener: fussy about order, proud of his vegetable patch and regularly exasperated by visits from Winnie the Pooh, who empties his honey pots. His house, his carrots and his thwarted plans supply most of the group's comic situations.\n\nKingdom Hearts leans on that same device. In nearly every appearance Rabbit hands Sora a task tied to his harvest: fetching honey, protecting his crops, putting the garden back in order. The world's mini-games are built around these domestic worries, a long way from the rest of the saga's stakes.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Dans le premier épisode, Coco Lapin apparaît une fois sa page restaurée dans le livre de Winnie. Sora l'aide à gérer ses réserves de miel, sujet de discorde permanent avec l'ours, au cours de petites séquences sans combat qui rapportent des objets au joueur.\n\nKingdom Hearts II développe nettement son rôle : le lapin confie à Sora la protection de son jardin, où il faut récolter les légumes tout en évitant les abeilles et les obstacles, dans l'un des mini-jeux les plus travaillés du monde. Kingdom Hearts III le montre à nouveau occupé par sa récolte, cette fois de fruits, lors du passage de Sora entre deux mondes bien plus dangereux.",
          "In the first game Rabbit appears once his page has been restored in Pooh's book. Sora helps him manage his honey stores, a permanent point of contention with the bear, in short battle-free sequences that yield items for the player.\n\nKingdom Hearts II expands his role considerably: the rabbit puts Sora in charge of his garden, where vegetables must be gathered while dodging bees and obstacles, in one of the world's most elaborate mini-games. Kingdom Hearts III shows him busy with his harvest once more, fruit this time, during Sora's visit between two far more dangerous worlds.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Rabbit", url: "https://kingdomhearts.fandom.com/wiki/Rabbit" }],
  },

  "owl": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Maître Hibou se veut le savant de la Forêt des Rêves Bleus. Perché dans son arbre, il répond à toutes les questions par de longues digressions et par des souvenirs de famille dont ses amis, trop polis pour l'interrompre, attendent patiemment la fin.\n\nKingdom Hearts lui donne un emploi taillé sur mesure : celui d'explicateur. Dans un monde entièrement constitué de mini-jeux, quelqu'un doit énoncer les règles, et c'est lui. Le hibou tient donc le rôle du tutoriel vivant, ce qui justifie sa faconde tout en la rendant utile au joueur.",
          "Owl fancies himself the scholar of the Hundred Acre Wood. Perched in his tree, he answers every question with long digressions and family reminiscences whose end his friends, too polite to interrupt, patiently await.\n\nKingdom Hearts gives him a tailor-made job: explainer. In a world made entirely of mini-games, someone has to state the rules, and he is that someone. The owl thus plays the part of a living tutorial, which justifies his verbosity while making it useful to the player.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Maître Hibou reparaît dans le livre de Winnie au fil des pages retrouvées par Sora. Il accueille le porteur de la Keyblade avec une explication détaillée de l'endroit, puis lui présente les activités proposées par ses voisins.\n\nDans Kingdom Hearts II, sa fonction se précise encore : c'est lui qui détaille les règles de chaque mini-jeu de la Forêt des Rêves Bleus avant que Sora ne s'y lance, et qui commente les résultats. Comme le reste des habitants, il ignore tout des Sans-cœur et de l'Organisation XIII ; son seul souci est que les visiteurs comprennent bien où poser les pieds et comment jouer.",
          "Owl reappears in Pooh's book as Sora recovers its pages. He greets the Keyblade wielder with a detailed account of the place, then introduces the activities his neighbours have on offer.\n\nIn Kingdom Hearts II his function sharpens further: he is the one who lays out the rules of each Hundred Acre Wood mini-game before Sora starts, and who comments on the results. Like the rest of the residents he knows nothing of the Heartless or Organization XIII; his only concern is that visitors understand where to put their feet and how to play.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Owl", url: "https://kingdomhearts.fandom.com/wiki/Owl" }],
  },

  "roo": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Petit Gourou est le fils de Grand Gourou et le plus jeune habitant de la Forêt des Rêves Bleus. Intrépide par ignorance du danger, il voue une admiration sans réserve à Tigrou, dont il imite les bonds au grand désespoir de sa mère.\n\nKingdom Hearts le montre exactement ainsi : toujours en mouvement, toujours accroché à Tigrou, et présent dans la plupart des activités du livre. Comme les autres personnages du monde, il n'a aucune fonction narrative dans la lutte contre les ténèbres ; il incarne l'insouciance enfantine que Sora retrouve chaque fois qu'il ouvre le livre.",
          "Roo is Kanga's son and the youngest resident of the Hundred Acre Wood. Fearless out of ignorance of danger, he admires Tigger without reservation and copies his bouncing to his mother's despair.\n\nKingdom Hearts shows him exactly that way: always moving, always clinging to Tigger, and present in most of the book's activities. Like the world's other characters he serves no narrative purpose in the fight against darkness; he embodies the childish carelessness Sora rediscovers each time he opens the book.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Après une première apparition dans les pages restaurées du livre dans Kingdom Hearts, Petit Gourou prend une place plus visible dans Kingdom Hearts II, où plusieurs mini-jeux tournent autour des bonds de Tigrou et de sa participation enthousiaste.\n\nIl fait partie des amis que Winnie a oubliés après le passage de l'Organisation XIII dans le livre, et que Sora doit réunir un à un dans les clairières. Une fois le groupe reconstitué, il reparaît dans les activités du monde jusqu'à Kingdom Hearts III, où la Forêt des Rêves Bleus se réduit à une visite et à une récolte de fruits partagée avec tous ses habitants.",
          "After a first appearance in the book's restored pages in Kingdom Hearts, Roo takes on a more visible place in Kingdom Hearts II, where several mini-games revolve around Tigger's bouncing and his own eager participation.\n\nHe is among the friends Pooh has forgotten after Organization XIII's meddling with the book, and whom Sora must reunite one by one in the clearings. Once the group is whole again he shows up in the world's activities through to Kingdom Hearts III, where the Hundred Acre Wood shrinks to a single visit and a fruit harvest shared with all its residents.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Roo", url: "https://kingdomhearts.fandom.com/wiki/Roo" }],
  },

  // ─────────────────────── Espace Lointain ───────────────────────
  "jumba": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Jumba Jookiba est le savant fou de Lilo et Stitch (2002), condamné par la Fédération galactique pour avoir créé une expérience génétique illégale : la créature numérotée 626, indestructible et incapable de faire autre chose que détruire.\n\nBirth by Sleep récupère ce point de départ, mais se place avant le film : 626 n'a pas encore rencontré Lilo, et Jumba est encore prisonnier. Le jeu en fait un personnage ambigu, à mi-chemin entre le savant vaniteux et le complice des ennuis qui frappent le vaisseau. Ses expériences y côtoient les Nescients, ce qui donne à l'Espace Lointain une atmosphère de laboratoire hors de contrôle.",
          "Jumba Jookiba is the mad scientist of Lilo & Stitch (2002), sentenced by the Galactic Federation for creating an illegal genetic experiment: creature number 626, indestructible and able to do nothing but destroy.\n\nBirth by Sleep picks up that premise but sets itself before the film: 626 has not yet met Lilo, and Jumba is still a prisoner. The game makes him an ambiguous figure, halfway between vain scientist and accomplice to the trouble sweeping the ship. His experiments rub shoulders with the Unversed there, giving Deep Space the air of a laboratory out of control.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "À bord du vaisseau de la Fédération galactique, Jumba occupe une cellule voisine de celle de sa créature. Il observe avec intérêt l'arrivée successive de Terra, Ventus et Aqua, et tente de tirer parti de la situation : il flatte Terra, cherche à exploiter les ténèbres qu'il devine en lui, et laisse volontiers d'autres se charger de récupérer 626.\n\nQuand les Nescients envahissent les coursives et que l'Expérience 626 s'échappe, ses manœuvres éclatent au grand jour. Aqua comprend la part qu'il a prise dans le désordre, tandis que Gantu, son geôlier, perd le contrôle du vaisseau. Jumba reste, dans ce monde, moins un adversaire qu'un opportuniste qui commente les catastrophes qu'il a lui-même provoquées.",
          "Aboard the Galactic Federation ship, Jumba occupies the cell next to his creature's. He watches the successive arrivals of Terra, Ventus and Aqua with interest and tries to turn the situation to his advantage: he flatters Terra, seeks to exploit the darkness he senses in him, and is happy to let others do the work of recovering 626.\n\nWhen the Unversed overrun the corridors and Experiment 626 escapes, his manoeuvring comes into the open. Aqua works out the part he played in the chaos, while Gantu, his jailer, loses control of the ship. In this world Jumba is less an adversary than an opportunist commenting on the disasters he set in motion.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Jumba", url: "https://kingdomhearts.fandom.com/wiki/Jumba_Jookiba" }],
  },

  "gantu": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Capitaine de la Fédération galactique dans Lilo et Stitch, Gantu est un colosse à tête de requin chargé de capturer l'Expérience 626. Rigide, obsédé par le règlement et humilié à chaque échec, il incarne l'autorité dépassée par une créature plus rapide et plus maligne que lui.\n\nBirth by Sleep en fait le maître du vaisseau qui sert de décor à l'Espace Lointain, et l'un des rares antagonistes Disney du jeu à n'avoir aucun lien avec les ténèbres de Xehanort. Sa méfiance envers les intrus, plus que la malveillance, le place en travers de la route des trois porteurs de Keyblade.",
          "A Galactic Federation captain in Lilo & Stitch, Gantu is a shark-headed giant tasked with capturing Experiment 626. Rigid, obsessed with regulations and humiliated by every failure, he embodies authority outmatched by a creature faster and cleverer than himself.\n\nBirth by Sleep makes him master of the ship that serves as Deep Space's setting, and one of the few Disney antagonists in the game with no ties to Xehanort's darkness. It is suspicion of intruders, rather than malice, that puts him in the way of the three Keyblade wielders.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Gantu détient l'Expérience 626 et Jumba dans les cellules de son vaisseau lorsque Terra, Ventus puis Aqua y font irruption. Il les prend pour des complices venus délivrer le prisonnier et refuse d'écouter leurs explications.\n\nSa poursuite du fugitif l'amène à croiser le fer avec les porteurs de Keyblade, qu'il affronte avec son canon à plasma dans les coursives et les hangars. Pendant ce temps, les Nescients se répandent dans le vaisseau et rendent la traque impossible. Gantu finit par pousser trop loin sa volonté d'en finir avec 626 : sa conduite lui coûte son commandement, ce qui le laisse, comme dans le film, en marge de la Fédération.",
          "Gantu is holding Experiment 626 and Jumba in his ship's cells when Terra, Ventus and then Aqua burst in. He takes them for accomplices come to free the prisoner and refuses to hear their explanations.\n\nHis pursuit of the fugitive brings him to blows with the Keyblade wielders, whom he faces with his plasma cannon in the corridors and hangars. Meanwhile the Unversed spread through the ship and make the hunt impossible. Gantu ends up pushing his determination to be rid of 626 too far: his conduct costs him his command, leaving him, as in the film, on the margins of the Federation.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Gantu", url: "https://kingdomhearts.fandom.com/wiki/Gantu" }],
  },

  // ─────────────────────── Château des Rêves ───────────────────────
  "prince-charming": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Le Prince Charmant de Cendrillon (1950) est un personnage volontairement schématique : il danse avec l'inconnue du bal, la perd à minuit et fait fouiller le royaume pour retrouver la propriétaire de la pantoufle de verre. Le film lui donne peu de répliques et lui confie surtout une fonction, celle de la promesse tenue.\n\nBirth by Sleep respecte cette économie. Dans le Château des Rêves, le prince n'a pas de rôle de combattant, ne rencontre jamais les Nescients de face et ne connaît rien des porteurs de Keyblade. Il sert de point d'arrivée à l'histoire de Cendrillon, à laquelle Terra puis Aqua contribuent chacun à leur manière.",
          "Prince Charming in Cinderella (1950) is a deliberately schematic figure: he dances with the stranger at the ball, loses her at midnight and has the kingdom searched for the owner of the glass slipper. The film gives him few lines and mostly one function, that of the promise kept.\n\nBirth by Sleep respects that economy. In the Castle of Dreams the prince is no fighter, never faces the Unversed directly and knows nothing of the Keyblade wielders. He is the destination of Cinderella's story, to which Terra and then Aqua each contribute in their own way.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Terra, arrivé au château pendant le bal royal, veille à ce que Cendrillon puisse y entrer malgré les Nescients qui traînent dans les jardins ; c'est là que la jeune femme rencontre le prince et danse avec lui, avant de fuir au douzième coup de minuit en abandonnant sa pantoufle.\n\nAqua intervient plus tard, quand le Grand-Duc parcourt le royaume pour faire essayer la chaussure. Elle protège la pantoufle des manigances de Lady Tremaine et de ses filles, et permet ainsi à Cendrillon de se présenter. Le prince retrouve alors l'inconnue du bal, et le monde s'achève sur le mariage, sans que les trois porteurs de Keyblade aient jamais eu à lui expliquer leur présence.",
          "Terra, arriving at the castle during the royal ball, makes sure Cinderella can get in despite the Unversed lurking in the gardens; it is there that she meets the prince and dances with him, before fleeing at the twelfth stroke of midnight and leaving her slipper behind.\n\nAqua steps in later, when the Grand Duke tours the kingdom having the shoe tried on. She protects the slipper from the schemes of Lady Tremaine and her daughters, letting Cinderella come forward. The prince then finds the stranger from the ball again, and the world closes on the wedding, without the Keyblade wielders ever having to explain themselves to him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Prince Charming", url: "https://kingdomhearts.fandom.com/wiki/Prince_Charming" }],
  },

  "lady-tremaine": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Lady Tremaine, la belle-mère de Cendrillon, est l'une des méchantes Disney les plus froides : elle ne recourt ni à la magie ni à la violence, mais à l'humiliation quotidienne et à une cruauté administrée avec calme. Son pouvoir tient à sa position dans la maison, pas à un sortilège.\n\nKingdom Hearts la fait entrer dans sa mécanique propre en reliant sa jalousie aux Nescients, les créatures nées des émotions négatives que Vanitas répand dans les mondes. Le Château des Rêves illustre ainsi, à petite échelle, le principe du jeu : une rancune humaine suffit à faire naître un monstre.",
          "Lady Tremaine, Cinderella's stepmother, is one of Disney's coldest villains: she uses neither magic nor violence, but daily humiliation and calmly administered cruelty. Her power lies in her position in the household, not in any spell.\n\nKingdom Hearts folds her into its own machinery by tying her jealousy to the Unversed, the creatures born of the negative emotions Vanitas spreads across the worlds. On a small scale, the Castle of Dreams illustrates the game's principle: a human grudge is enough to give birth to a monster.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Lady Tremaine multiplie les corvées pour empêcher sa belle-fille d'assister au bal, puis laisse ses filles déchirer la robe que les souris ont confectionnée. Quand Marraine la bonne fée déjoue ses plans et que le Grand-Duc arrive avec la pantoufle de verre, elle enferme Cendrillon à l'étage.\n\nSa jalousie attire alors un Nescient, le Carrosse Maudit, qu'elle et ses filles retournent contre la jeune femme. La créature échappe rapidement à leur contrôle et se retourne contre elles, avant qu'Aqua ne l'affronte et ne la détruise. Lady Tremaine termine ainsi le monde privée de tout : sa domination sur la maison s'effondre en même temps que le monstre né de sa rancune.",
          "Lady Tremaine piles on chores to keep her stepdaughter from the ball, then lets her daughters tear apart the dress the mice have made. When the Fairy Godmother thwarts her plans and the Grand Duke arrives with the glass slipper, she locks Cinderella upstairs.\n\nHer jealousy then draws an Unversed, the Cursed Coach, which she and her daughters turn on the young woman. The creature quickly slips their control and rounds on them, before Aqua faces and destroys it. Lady Tremaine ends the world stripped of everything: her hold over the household collapses along with the monster born of her spite.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lady Tremaine", url: "https://kingdomhearts.fandom.com/wiki/Lady_Tremaine" }],
  },

  "anastasia-and-drizella": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Anastasie et Javotte sont les deux filles de Lady Tremaine dans Cendrillon. Vaniteuses, jalouses et dépourvues du moindre talent, elles servent de relais comique à la cruauté de leur mère : elles exécutent ses volontés avec maladresse et se disputent en permanence.\n\nBirth by Sleep les traite en tandem indissociable, jusque dans son titre d'entrée. Elles n'ont pas de plan propre et n'affrontent jamais les porteurs de Keyblade ; leur fonction est d'aggraver la situation de Cendrillon et d'alimenter, avec leur mère, les émotions dont naissent les Nescients du monde.",
          "Anastasia and Drizella are Lady Tremaine's two daughters in Cinderella. Vain, jealous and utterly untalented, they act as a comic relay for their mother's cruelty: they carry out her wishes clumsily and bicker constantly.\n\nBirth by Sleep treats them as an inseparable pair, right down to how they are listed. They have no plan of their own and never face the Keyblade wielders; their function is to worsen Cinderella's plight and to feed, along with their mother, the emotions from which the world's Unversed are born.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Le soir du bal, les deux sœurs mettent en pièces la robe que les souris ont assemblée pour Cendrillon, à partir des rubans et des perles qu'elles reconnaissent comme les leurs. C'est cette scène qui envoie la jeune femme pleurer dans le jardin, où Marraine la bonne fée intervient.\n\nQuand le Grand-Duc apporte la pantoufle de verre, Anastasie et Javotte s'acharnent en vain à y glisser leur pied. Leur dépit, ajouté à celui de leur mère, donne naissance au Carrosse Maudit, un Nescient lancé contre Cendrillon qu'Aqua doit détruire. Les deux sœurs disparaissent ensuite du récit sans jamais comprendre ce qui s'est réellement joué dans la maison.",
          "On the night of the ball the two sisters tear to pieces the dress the mice have put together for Cinderella, out of ribbons and beads they recognise as their own. That scene is what sends the young woman weeping into the garden, where the Fairy Godmother appears.\n\nWhen the Grand Duke brings the glass slipper, Anastasia and Drizella struggle in vain to force their feet into it. Their spite, added to their mother's, gives rise to the Cursed Coach, an Unversed sent after Cinderella that Aqua must destroy. The two sisters then drop out of the story without ever understanding what really happened in the house.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Anastasia and Drizella", url: "https://kingdomhearts.fandom.com/wiki/Anastasia" }],
  },

  "fairy-godmother": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Marraine la bonne fée apparaît dans Cendrillon (1950) au moment le plus désespéré du récit : elle transforme une citrouille en carrosse, des souris en chevaux et des haillons en robe de bal, le tout au son de son « bibbidi-bobbidi-boo ». Sa magie a une limite, minuit, qui donne au conte sa tension.\n\nKingdom Hearts en fait une figure récurrente et lui confie un thème central de la saga : le rêve. Là où Merlin enseigne la magie de combat, la bonne fée s'occupe de ce qui relève du souhait et du cœur, et son intervention dépasse le seul monde de Cendrillon.",
          "The Fairy Godmother appears in Cinderella (1950) at the story's bleakest moment: she turns a pumpkin into a coach, mice into horses and rags into a ball gown, all to her “bibbidi-bobbidi-boo”. Her magic has a limit, midnight, which gives the tale its tension.\n\nKingdom Hearts makes her a recurring figure and hands her one of the saga's central themes: dreams. Where Merlin teaches battle magic, the Fairy Godmother deals with what belongs to wishes and the heart, and her role reaches beyond Cinderella's world alone.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans le Château des Rêves, la bonne fée apparaît à Cendrillon après que ses demi-sœurs ont détruit sa robe, et lui offre le carrosse, la tenue et les pantoufles de verre pour une nuit. Terra puis Aqua la croisent au cours de leurs visites.\n\nElle leur tient à chaque fois le même discours : un rêve auquel on croit vraiment est une force capable d'éclairer un cœur, même quand tout paraît perdu. Ces conversations donnent au monde sa fonction dans l'intrigue générale, en formulant l'idée que la lumière ne vient pas seulement de la Keyblade. La fée aide aussi indirectement Aqua à comprendre pourquoi les Nescients s'attachent aux détresses les plus intimes.",
          "In the Castle of Dreams the Fairy Godmother appears to Cinderella after her stepsisters have destroyed her dress, and grants her the coach, the gown and the glass slippers for one night. Terra and then Aqua meet her during their visits.\n\nShe gives them the same message each time: a dream truly believed in is a force able to light up a heart, even when all seems lost. These conversations give the world its place in the wider plot by voicing the idea that light does not come from the Keyblade alone. The fairy also helps Aqua understand, indirectly, why the Unversed fasten onto the most intimate distress.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Marraine la bonne fée s'installe à la Ville de Traverse dans la maison de Merlin, où elle occupe la pièce voisine de celle du magicien. C'est elle qui explique à Sora le fonctionnement des invocations.\n\nLorsque le porteur de la Keyblade rapporte une gemme d'invocation, vestige d'un monde détruit par les ténèbres, elle en libère l'esprit qui y était enfermé : Simba, Bambi, Dumbo ou la Fée Clochette peuvent alors être appelés en plein combat. Cette mécanique fait d'elle l'une des rares alliées Disney à agir directement sur les capacités du joueur, et prolonge son rôle de conte : rendre possible ce qui ne l'était plus.",
          "The Fairy Godmother settles in Traverse Town in Merlin's house, occupying the room next to the wizard's. She is the one who explains summoning to Sora.\n\nWhenever the Keyblade wielder brings back a summon gem, a remnant of a world destroyed by darkness, she releases the spirit sealed inside it: Simba, Bambi, Dumbo or Tinker Bell can then be called into battle. That mechanic makes her one of the few Disney allies to act directly on the player's abilities, extending her fairy-tale role of making possible what no longer was.",
        ),
      },
    ],
    trivia: [
      L("Elle est l'une des rares figures Disney à apparaître aussi bien dans le premier Kingdom Hearts que dans Birth by Sleep et Kingdom Hearts III.", "She is one of the few Disney figures to appear in the first Kingdom Hearts as well as in Birth by Sleep and Kingdom Hearts III."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Fairy Godmother", url: "https://kingdomhearts.fandom.com/wiki/Fairy_Godmother" }],
  },

  // ─────────────────────── Forêt des Nains ───────────────────────
  "evil-queen": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "La Reine de Blanche-Neige et les Sept Nains (1937) est la première grande méchante des longs métrages Disney. Obsédée par sa beauté, elle interroge chaque jour son miroir magique et ordonne la mort de sa belle-fille dès qu'elle apprend que celle-ci la surpasse ; puis elle se change en vieille colporteuse pour l'empoisonner elle-même.\n\nBirth by Sleep, qui se déroule avant la plupart des autres mondes de la saga, adapte fidèlement cette trame. Le jeu place les trois porteurs de Keyblade à différents moments du conte, si bien que la Reine les manipule ou les affronte selon celui que l'on incarne.",
          "The Queen in Snow White and the Seven Dwarfs (1937) is Disney's first great feature villain. Obsessed with her own beauty, she questions her magic mirror daily and orders her stepdaughter's death as soon as she learns the girl surpasses her; then she takes the shape of an old peddler to poison her herself.\n\nBirth by Sleep, set before most of the saga's other worlds, follows that plot faithfully. The game places the three Keyblade wielders at different points of the tale, so the Queen manipulates or confronts them depending on whom you play.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Terra, arrivé à la Forêt des Nains, se voit confier par la Reine la mission de rapporter le cœur de Blanche-Neige ; croyant œuvrer contre les ténèbres, il part en réalité au service de la souveraine avant de comprendre son erreur et de protéger la jeune fille.\n\nAqua, elle, s'oppose ouvertement à la Reine, qui la fait jeter dans le miroir magique : la porteuse de Keyblade doit affronter l'esprit du Miroir dans un espace clos. Pendant ce temps, la Reine, déguisée en vieille femme, offre à Blanche-Neige la pomme empoisonnée. Ventus arrive après coup et aide les Sept Nains à veiller la jeune fille endormie, en attendant le baiser qui la réveillera.",
          "Terra, arriving in the Dwarf Woodlands, is charged by the Queen with bringing back Snow White's heart; believing he is working against darkness, he is in fact serving the sovereign, until he realises his mistake and protects the girl.\n\nAqua openly opposes the Queen, who has her cast into the magic mirror: the wielder must fight the Mirror's spirit in an enclosed space. Meanwhile the Queen, disguised as an old woman, offers Snow White the poisoned apple. Ventus arrives after the fact and helps the Seven Dwarfs watch over the sleeping girl, waiting for the kiss that will wake her.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Queen", url: "https://kingdomhearts.fandom.com/wiki/Queen" }],
  },

  "seven-dwarfs": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Prof, Grincheux, Joyeux, Timide, Atchoum, Dormeur et Simplet sont les sept mineurs de Blanche-Neige et les Sept Nains. Ils vivent dans une chaumière au milieu de la forêt, travaillent dans une mine de pierres précieuses et adoptent la jeune fille en fuite, avant de veiller son cercueil de verre.\n\nBirth by Sleep les traite comme une entité collective, à la fois obstacle comique et famille d'accueil. La Forêt des Nains reprend leurs deux décors emblématiques, la mine et la chaumière, et fait d'eux les témoins de tout ce que les porteurs de Keyblade ne peuvent pas empêcher.",
          "Doc, Grumpy, Happy, Bashful, Sneezy, Sleepy and Dopey are the seven miners of Snow White and the Seven Dwarfs. They live in a cottage in the middle of the forest, work a gem mine and take in the runaway girl, before keeping vigil over her glass coffin.\n\nBirth by Sleep treats them as a collective entity, at once comic obstacle and foster family. The Dwarf Woodlands reuses their two emblematic settings, the mine and the cottage, and makes them witnesses to everything the Keyblade wielders cannot prevent.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Ventus rencontre les nains dans leur mine, où ils le prennent pour un voleur venu s'emparer de leurs pierres précieuses et le chassent sans écouter ses explications. Il doit gagner leur confiance avant de pouvoir circuler librement dans le monde.\n\nAprès que la Reine a empoisonné Blanche-Neige, les sept mineurs rentrent trop tard et découvrent la jeune fille inanimée dans la chaumière. Ventus les aide alors à comprendre ce qui s'est passé et à protéger celle qu'ils ont recueillie, tandis qu'Aqua se charge des Nescients qui rôdent autour de la forêt. Leur veille se prolonge jusqu'à l'arrivée du prince, comme dans le film, sans qu'aucun d'eux ne comprenne l'origine des créatures.",
          "Ventus meets the dwarfs in their mine, where they take him for a thief after their gems and chase him off without hearing him out. He has to earn their trust before he can move freely through the world.\n\nAfter the Queen poisons Snow White, the seven miners come home too late and find the girl lifeless in the cottage. Ventus helps them understand what happened and protect the girl they took in, while Aqua deals with the Unversed prowling the forest. Their vigil lasts until the prince arrives, as in the film, without any of them ever grasping where the creatures came from.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Seven Dwarfs", url: "https://kingdomhearts.fandom.com/wiki/Seven_Dwarfs" }],
  },

  // ─────────────────────── Domaine Enchanté ───────────────────────
  "prince-phillip": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Le prince Philippe, dans La Belle au bois dormant (1959), est le premier prince Disney à avoir une véritable personnalité et un rôle actif : il rencontre Aurore dans la forêt sans savoir qui elle est, refuse le mariage arrangé qu'on lui destine, et se bat pour la rejoindre.\n\nSon combat contre Maléfique changée en dragon est l'une des séquences les plus célèbres du studio, et Kingdom Hearts la reprend telle quelle dans Birth by Sleep. Le jeu conserve aussi ses deux armes offertes par les fées, l'Épée de vérité et le Bouclier de vertu, qui font de lui l'un des rares alliés Disney à combattre aux côtés d'un porteur de Keyblade.",
          "Prince Phillip, in Sleeping Beauty (1959), is the first Disney prince with a real personality and an active role: he meets Aurora in the forest without knowing who she is, refuses the arranged marriage planned for him, and fights to reach her.\n\nHis battle against Maleficent turned dragon is one of the studio's most famous sequences, and Kingdom Hearts reuses it wholesale in Birth by Sleep. The game also keeps his two fairy-given arms, the Sword of Truth and the Shield of Virtue, making him one of the few Disney allies to fight side by side with a Keyblade wielder.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Maléfique fait enlever Philippe et l'enferme dans les geôles de son château, sur la Montagne Interdite, comptant l'y laisser vieillir pendant que le Domaine Enchanté dort. Aqua, arrivée sur les traces de Terra et de Ventus, découvre le prisonnier et le libère avec l'aide des trois bonnes fées.\n\nArmé par Flora, Pâquerette et Pimprenelle, Philippe traverse la forêt d'épines qui a envahi le royaume, aidé par Aqua qui écarte les Nescients et les ronces. Il affronte ensuite Maléfique transformée en dragon devant le château, la porteuse de Keyblade combattant à ses côtés. Vainqueur, il rejoint la chambre d'Aurore et la réveille, mettant fin au sortilège.",
          "Maleficent has Phillip abducted and locked in the dungeons of her castle on the Forbidden Mountain, meaning to leave him there to grow old while the Enchanted Dominion sleeps. Aqua, following Terra's and Ventus's trail, finds the prisoner and frees him with the three good fairies' help.\n\nArmed by Flora, Fauna and Merryweather, Phillip crosses the forest of thorns that has swallowed the kingdom, aided by Aqua, who clears away the Unversed and the briars. He then faces Maleficent, transformed into a dragon, before the castle, with the wielder fighting at his side. Victorious, he reaches Aurora's chamber and wakes her, ending the spell.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Prince Phillip", url: "https://kingdomhearts.fandom.com/wiki/Prince_Phillip" }],
  },

  "flora-fauna-merryweather": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Flora, Pâquerette et Pimprenelle sont les trois bonnes fées de La Belle au bois dormant. Marraines d'Aurore, elles la cachent dans la forêt sous le nom de Rose pendant seize ans pour la soustraire à la malédiction de Maléfique, et se disputent sans cesse à propos de la couleur de sa robe.\n\nKingdom Hearts leur donne une double vie. Elles restent liées au Domaine Enchanté, mais s'installent aussi au service de Yen Sid, dans la Tour Mystérieuse, où elles cousent et enchantent. La saga en fait ainsi des artisanes de la magie plutôt que des combattantes, ce qui leur vaut d'apparaître dans plusieurs épisodes.",
          "Flora, Fauna and Merryweather are the three good fairies of Sleeping Beauty. Aurora's godmothers, they hide her in the forest under the name Briar Rose for sixteen years to keep her from Maleficent's curse, and bicker endlessly about the colour of her dress.\n\nKingdom Hearts gives them a double life. They remain tied to the Enchanted Dominion, but also take up residence in Yen Sid's service at the Mysterious Tower, where they sew and enchant. The saga makes them craftswomen of magic rather than fighters, which earns them appearances across several entries.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans le Domaine Enchanté, les trois fées veillent sur Aurore lorsque Maléfique parvient malgré tout à lui faire toucher le fuseau et à plonger le royaume dans le sommeil. Elles cherchent aussitôt le moyen de briser le sort.\n\nAqua les trouve alors qu'elles tentent de rejoindre le prince Philippe, prisonnier de la Montagne Interdite. Ensemble, elles le libèrent, puis les fées lui remettent l'Épée de vérité et le Bouclier de vertu. Pendant le combat contre Maléfique changée en dragon, ce sont elles qui enchantent l'épée du prince pour qu'elle puisse porter le coup décisif, tandis qu'Aqua détourne l'attention de la créature.",
          "In the Enchanted Dominion the three fairies watch over Aurora when Maleficent nonetheless gets her to touch the spindle and plunges the kingdom into sleep. They immediately look for a way to break the spell.\n\nAqua finds them as they try to reach Prince Phillip, held prisoner on the Forbidden Mountain. Together they free him, and the fairies hand him the Sword of Truth and the Shield of Virtue. During the fight against Maleficent as a dragon, it is they who enchant the prince's blade so it can strike the decisive blow, while Aqua draws the creature's attention.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Les trois fées vivent désormais à la Tour Mystérieuse, chez Yen Sid, où Sora, Donald et Dingo se présentent au début de Kingdom Hearts II. Constatant que les vêtements du garçon sont trop petits après son année de sommeil, elles lui en confectionnent de nouveaux.\n\nLeur querelle habituelle sur les couleurs prend ici un sens mécanique : les teintes qu'elles ne parviennent pas à choisir donnent naissance aux formes de la Transcendance, qui permettent à Sora de changer d'apparence et de style de combat en cours de partie. Elles réapparaissent brièvement dans Dream Drop Distance et dans Kingdom Hearts III, toujours dans la tour, aux côtés du vieux maître.",
          "The three fairies now live at the Mysterious Tower with Yen Sid, where Sora, Donald and Goofy report at the start of Kingdom Hearts II. Finding the boy's clothes too small after his year of sleep, they make him new ones.\n\nTheir usual quarrel over colours takes on a mechanical meaning here: the shades they cannot settle on give rise to the Drive Forms, which let Sora change appearance and fighting style mid-game. They reappear briefly in Dream Drop Distance and Kingdom Hearts III, still in the tower alongside the old master.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Flora, Fauna, and Merryweather", url: "https://kingdomhearts.fandom.com/wiki/Flora,_Fauna,_and_Merryweather" }],
  },

  // ─────────────────────── Arendelle ───────────────────────
  "kristoff": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Kristoff est le livreur de glace de La Reine des neiges (2013) : un solitaire bourru, élevé par les trolls, qui accepte à contrecœur d'emmener Anna sur la Montagne du Nord retrouver sa sœur. Son renne Sven lui tient lieu d'unique famille et de confident.\n\nKingdom Hearts III le garde dans ce rôle d'escorte. Arendelle étant l'un des mondes où Sora est le plus souvent séparé de ses alliés Disney, Kristoff sert de repère : il connaît la montagne, sait où passe la tempête, et c'est par lui que le joueur apprend l'essentiel de ce qui se joue entre Anna et Elsa.",
          "Kristoff is the ice harvester of Frozen (2013): a gruff loner raised by trolls who reluctantly agrees to take Anna up the North Mountain to find her sister. His reindeer Sven is his only family and confidant.\n\nKingdom Hearts III keeps him in that escort role. Arendelle being one of the worlds where Sora is most often separated from his Disney allies, Kristoff is a landmark: he knows the mountain, knows where the storm runs, and it is through him that the player learns most of what is happening between Anna and Elsa.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sora, Donald et Dingo arrivent à Arendelle en pleine tempête et se retrouvent séparés dans le Labyrinthe de glace créé par les pouvoirs d'Elsa. Kristoff, parti avec Anna vers la Montagne du Nord, croise leur route et leur explique ce qui a fait fuir la reine.\n\nAprès la descente forcée de la montagne, il ramène Anna à Arendelle, persuadé que seul « un acte d'amour véritable » peut sauver la jeune femme dont le cœur a été gelé. Il revient au galop sur le fjord quand la tempête se déchaîne, et se retrouve mêlé à l'affrontement final contre les Sans-cœur pendant que Sora fait face au Skoll. Il ne se bat jamais aux côtés du porteur de la Keyblade, mais son trajet structure la seconde moitié du monde.",
          "Sora, Donald and Goofy reach Arendelle in the middle of a blizzard and are separated inside the Labyrinth of Ice created by Elsa's powers. Kristoff, who has set out with Anna for the North Mountain, crosses their path and explains what drove the queen away.\n\nAfter the forced descent from the mountain he brings Anna back to Arendelle, convinced that only “an act of true love” can save the young woman whose heart has been frozen. He gallops back onto the fjord when the storm breaks, and is caught up in the final clash with the Heartless while Sora faces Sköll. He never fights at the wielder's side, but his journey shapes the world's second half.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Kristoff", url: "https://kingdomhearts.fandom.com/wiki/Kristoff" }],
  },

  "sven": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Sven est le renne de Kristoff dans La Reine des neiges. Muet, mais doté d'une expressivité qui pousse son maître à parler à sa place, il tire le traîneau, s'inquiète pour Anna et se montre souvent plus lucide que les humains qu'il transporte.\n\nKingdom Hearts III le reprend sans lui donner de fonction de jeu particulière : il n'est ni équipier, ni invocation, ni adversaire. Sa présence sert avant tout à rendre Arendelle conforme au film et à donner à Kristoff son partenaire habituel dans les scènes de course sur la neige.",
          "Sven is Kristoff's reindeer in Frozen. Mute, yet expressive enough that his owner speaks for him, he pulls the sled, worries about Anna and often proves more clear-sighted than the humans he carries.\n\nKingdom Hearts III brings him back without giving him any particular gameplay function: he is neither a party member, nor a summon, nor an opponent. His presence mainly keeps Arendelle faithful to the film and gives Kristoff his usual partner in the chases across the snow.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sven tire le traîneau qui emmène Anna et Kristoff vers la Montagne du Nord, à travers les vallées enneigées où Sora et ses compagnons se perdent de leur côté. Il participe ainsi, indirectement, à la fuite devant les créatures et à la traversée des pentes gelées.\n\nQuand Anna doit être ramenée d'urgence à Arendelle avant que son cœur ne gèle entièrement, c'est encore lui qui assure la descente. On le retrouve enfin sur le fjord pris par les glaces, lors de la confrontation entre Hans, Elsa et Anna, au moment où le Sans-cœur Skoll apparaît. Il ne combat jamais, mais il est de toutes les courses du monde.",
          "Sven pulls the sled carrying Anna and Kristoff toward the North Mountain, through the snowy valleys where Sora and his companions are getting lost on their own. He takes an indirect part in the flight from the creatures and the crossing of the frozen slopes.\n\nWhen Anna has to be rushed back to Arendelle before her heart freezes completely, he again handles the descent. He turns up at last on the ice-locked fjord during the confrontation between Hans, Elsa and Anna, at the moment the Heartless Sköll appears. He never fights, but he is in every chase the world has.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sven", url: "https://kingdomhearts.fandom.com/wiki/Sven" }],
  },

  "hans": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Hans, prince des Îles du Sud, est le grand retournement de La Reine des neiges : présenté comme le prétendant idéal d'Anna, il se révèle un calculateur qui n'a jamais cherché qu'un trône, et laisse la jeune femme mourir de froid pour l'obtenir.\n\nKingdom Hearts III conserve cette trahison et l'inscrit dans sa propre logique. Dans un jeu où les ténèbres du cœur prennent une forme physique, l'ambition de Hans ne peut pas rester sans conséquence : elle attire les Sans-cœur, exactement comme la jalousie de Lady Tremaine appelait les Nescients dans Birth by Sleep.",
          "Hans, prince of the Southern Isles, is Frozen's great twist: presented as Anna's ideal suitor, he turns out to be a schemer who only ever wanted a throne, and leaves the young woman to freeze to death to get it.\n\nKingdom Hearts III keeps that betrayal and writes it into its own logic. In a game where darkness of the heart takes physical form, Hans's ambition cannot remain without consequence: it draws the Heartless, exactly as Lady Tremaine's jealousy called the Unversed in Birth by Sleep.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Hans reste en retrait pendant la majeure partie de l'épisode d'Arendelle : il tient le royaume en l'absence d'Elsa et laisse croire à un dévouement sans faille. Sa véritable nature n'apparaît que sur le fjord gelé, lorsqu'il lève son épée sur la reine, à qui il compte faire porter la responsabilité de l'hiver.\n\nAnna s'interpose et le coup est arrêté. Rejeté, submergé par ses propres ténèbres, Hans est englouti au moment où surgit le Skoll, un immense Sans-cœur lupin que Sora, Donald et Dingo doivent affronter au-dessus du fjord. Ce combat sert de conclusion au monde : la trahison du prince n'est pas punie par la justice humaine, mais absorbée par les ténèbres qu'elle a nourries.",
          "Hans stays in the background for most of the Arendelle episode: he holds the kingdom in Elsa's absence and passes for utter devotion. His true nature surfaces only on the frozen fjord, when he raises his sword against the queen, on whom he means to pin the blame for the winter.\n\nAnna steps in and the blow is stopped. Rejected and overwhelmed by his own darkness, Hans is swallowed up just as Sköll appears, an enormous wolf-like Heartless that Sora, Donald and Goofy must fight above the fjord. That battle closes the world: the prince's betrayal is not punished by human justice but absorbed by the darkness it fed.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hans", url: "https://kingdomhearts.fandom.com/wiki/Hans" }],
  },

  "marshmallow": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Guimauve est le colosse de neige qu'Elsa crée dans La Reine des neiges pour chasser les visiteurs de son palais de glace. Contrairement à Olaf, né d'un souvenir heureux, il naît d'un mouvement de colère, ce qui explique sa taille et son agressivité.\n\nKingdom Hearts III exploite ce contraste. Dans un monde où les pouvoirs d'Elsa échappent à leur propriétaire, Guimauve est la preuve visible qu'une magie de lumière peut produire quelque chose de menaçant sans être pour autant corrompue par les ténèbres. Le jeu en fait donc un adversaire, mais jamais un ennemi véritable.",
          "Marshmallow is the snow giant Elsa creates in Frozen to drive visitors from her ice palace. Unlike Olaf, born of a happy memory, he is born of a burst of anger, which explains his size and aggression.\n\nKingdom Hearts III plays on that contrast. In a world where Elsa's powers escape their owner, Marshmallow is visible proof that magic of light can produce something threatening without being corrupted by darkness. The game therefore makes him an opponent, but never a true enemy.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sora, Donald et Dingo croisent Guimauve en approchant du palais de glace bâti par Elsa sur la Montagne du Nord. Le colosse les prend pour des intrus et les affronte dans un combat de boss sur les escaliers gelés, avant d'être repoussé.\n\nLa suite du monde inverse la situation : lorsque les Sans-cœur envahissent la montagne puis le fjord, Guimauve se range du côté de ceux qu'il avait chassés et se dresse entre Elsa et le danger. Sa dernière intervention le montre protégeant sa créatrice au moment où Hans s'apprête à frapper. Le personnage passe ainsi, en un seul monde, du statut d'obstacle à celui de rempart, sans jamais prononcer autre chose que des grognements.",
          "Sora, Donald and Goofy run into Marshmallow as they approach the ice palace Elsa has raised on the North Mountain. The giant takes them for intruders and fights them as a boss on the frozen stairs, before being driven back.\n\nThe rest of the world reverses the situation: when the Heartless overrun the mountain and then the fjord, Marshmallow sides with those he chased off and puts himself between Elsa and danger. His last appearance shows him shielding his creator as Hans prepares to strike. In a single world the character goes from obstacle to bulwark, without ever uttering anything but growls.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Marshmallow", url: "https://kingdomhearts.fandom.com/wiki/Marshmallow" }],
  },

  // ─────────────────────── Royaume de Corona ───────────────────────
  "mother-gothel": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Mère Gothel, dans Raiponce (2010), a volé un nourrisson royal pour conserver le pouvoir de guérison et de jeunesse contenu dans ses cheveux. Pendant dix-huit ans, elle élève l'enfant dans une tour isolée en se faisant passer pour sa mère et en la persuadant que le monde extérieur veut sa perte.\n\nKingdom Hearts III conserve cette manipulation intacte et lui ajoute une dimension propre à la saga : Gothel devient une alliée de circonstance de l'Organisation, qui s'intéresse elle aussi à Raiponce. Sa violence est purement psychologique, ce qui en fait une antagoniste très différente des porteurs de ténèbres habituels de la série.",
          "Mother Gothel, in Tangled (2010), stole a royal infant to keep the healing and youth-giving power held in her hair. For eighteen years she raises the child in an isolated tower, passing for her mother and convincing her the outside world means her harm.\n\nKingdom Hearts III keeps that manipulation intact and adds a dimension of its own: Gothel becomes a convenient ally of the Organization, which also has an interest in Rapunzel. Her violence is purely psychological, which makes her a very different antagonist from the series' usual bearers of darkness.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Quand Raiponce quitte enfin sa tour avec Flynn Rider et rencontre Sora, Gothel se lance à leur poursuite à travers la forêt et le royaume de Corona. Elle croise Marluxia, venu chercher dans ce monde l'une des sept nouvelles lumières, et les deux s'entendent le temps de séparer la jeune femme de ses compagnons.\n\nGothel parvient à ramener Raiponce dans la tour en la persuadant que Flynn l'a trahie. La supercherie s'effondre lorsque celui-ci, blessé, coupe la chevelure magique : privée de sa source de jeunesse, Gothel vieillit d'un coup et tombe de la tour. Les ténèbres nées de sa fin donnent naissance à la Sinistre Gardienne, un Sans-cœur que Sora doit affronter avant de rendre la princesse à ses parents.",
          "When Rapunzel finally leaves her tower with Flynn Rider and meets Sora, Gothel gives chase through the forest and the kingdom of Corona. She crosses paths with Marluxia, who has come to this world looking for one of the seven new lights, and the two make common cause long enough to separate the young woman from her companions.\n\nGothel manages to bring Rapunzel back to the tower by convincing her Flynn has betrayed her. The deception collapses when he, wounded, cuts the magic hair: stripped of her source of youth, Gothel ages in an instant and falls from the tower. The darkness born of her end spawns the Grim Guardianess, a Heartless Sora must defeat before the princess can be returned to her parents.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mother Gothel", url: "https://kingdomhearts.fandom.com/wiki/Mother_Gothel" }],
  },

  "maximus": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Maximus est le cheval de la garde royale de Corona dans Raiponce. Muet comme Sven, il se comporte en limier : il traque le voleur Flynn Rider avec une obstination de chien de chasse, avant de devenir son allié le plus fiable.\n\nKingdom Hearts III le reprend tel quel, avec ses courses-poursuites et ses changements d'humeur. Il n'est ni équipier ni invocation ; sa fonction est comique et narrative, et il incarne, dans un monde par ailleurs traversé par l'Organisation XIII, la partie de l'histoire qui appartient encore entièrement au film Disney.",
          "Maximus is a horse of Corona's royal guard in Tangled. Mute like Sven, he behaves like a bloodhound: he tracks the thief Flynn Rider with a hunting dog's stubbornness, before becoming his most reliable ally.\n\nKingdom Hearts III takes him as he is, chases and mood swings included. He is neither a party member nor a summon; his function is comic and narrative, and in a world otherwise crossed by Organization XIII he embodies the part of the story that still belongs entirely to the Disney film.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Maximus surgit dans la forêt de Corona sur la piste de Flynn Rider, dont il a perdu la trace après un vol au palais. Ses irruptions interrompent régulièrement le voyage de Sora, Raiponce et Flynn, et compliquent leur progression vers la ville.\n\nRaiponce finit par calmer l'animal, qui accepte une trêve avec le voleur et se joint au groupe. Il accompagne alors la jeune femme jusqu'au festival des lanternes, l'événement que Corona organise chaque année en mémoire de la princesse disparue. Après la chute de Mère Gothel et la défaite de la Sinistre Gardienne, Maximus fait partie de ceux qui assistent au retour de Raiponce auprès du roi et de la reine.",
          "Maximus bursts into the forest of Corona on Flynn Rider's trail, having lost him after a theft at the palace. His intrusions regularly interrupt Sora, Rapunzel and Flynn's journey and complicate their progress toward the city.\n\nRapunzel eventually calms the animal, who accepts a truce with the thief and joins the group. He then escorts the young woman to the lantern festival, the event Corona holds each year in memory of its lost princess. After Mother Gothel's fall and the Grim Guardianess's defeat, Maximus is among those present when Rapunzel is reunited with the king and queen.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Maximus", url: "https://kingdomhearts.fandom.com/wiki/Maximus" }],
  },

  "pascal": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Pascal est le caméléon de Raiponce, seul compagnon de la jeune fille pendant ses années d'enfermement. Il change de couleur selon son humeur, se cache dans ses cheveux et exprime par ses mimiques ce que sa maîtresse n'ose pas dire, notamment sa méfiance envers Mère Gothel.\n\nKingdom Hearts III le conserve comme accessoire vivant de Raiponce. Il n'a aucune capacité de combat et n'intervient jamais contre les Sans-cœur, mais il accompagne la princesse dans toutes ses scènes et sert de baromètre à ses émotions, dans un monde qui repose largement sur la découverte et l'émerveillement.",
          "Pascal is Rapunzel's chameleon, her only companion during her years shut away. He changes colour with his mood, hides in her hair and expresses through his faces what his owner does not dare say, notably her distrust of Mother Gothel.\n\nKingdom Hearts III keeps him as a living accessory to Rapunzel. He has no combat ability and never acts against the Heartless, but he goes with the princess through all her scenes and serves as a barometer of her feelings, in a world built largely on discovery and wonder.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Pascal quitte la tour avec Raiponce lorsque celle-ci suit Flynn Rider vers le royaume de Corona, et il assiste à toutes les premières fois de la jeune femme : l'herbe, la pluie, la foule, la danse sur la place du village.\n\nSa méfiance instinctive envers Flynn se dissipe au fil du voyage, alors qu'il reste hostile à Mère Gothel jusqu'au bout. Perché sur l'épaule de Raiponce, il traverse ainsi les affrontements contre les Sans-cœur menés par Sora, Donald et Dingo sans jamais y prendre part, et il est présent lors du festival des lanternes qui referme le monde sur le retour de la princesse.",
          "Pascal leaves the tower with Rapunzel when she follows Flynn Rider toward the kingdom of Corona, and witnesses all the young woman's firsts: grass, rain, crowds, dancing in the village square.\n\nHis instinctive distrust of Flynn fades over the journey, while he stays hostile to Mother Gothel to the end. Perched on Rapunzel's shoulder, he rides through the battles Sora, Donald and Goofy fight against the Heartless without ever taking part, and he is there for the lantern festival that closes the world on the princess's return.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Pascal", url: "https://kingdomhearts.fandom.com/wiki/Pascal" }],
  },

  // ─────────────────────── Boîte à Jouets ───────────────────────
  "rex": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Rex est le tyrannosaure en plastique de Toy Story (1995), un jouet censé être terrifiant qui passe son temps à s'excuser et à s'inquiéter. Son décalage entre l'apparence et le caractère fournit une bonne part de l'humour de la série Pixar.\n\nKingdom Hearts III lui confie, presque par accident, l'un des éléments les plus commentés de la saga : c'est un joueur de jeux vidéo, et c'est par lui qu'apparaît Verum Rex, la démo fictive exposée dans le magasin de jouets. Le héros de ce jeu, Yozora, ressemble étrangement à Sora et devient le point de départ des mystères laissés en suspens à la fin de l'épisode.",
          "Rex is the plastic tyrannosaur of Toy Story (1995), a toy meant to be terrifying who spends his time apologising and fretting. The gap between his looks and his temperament supplies much of the Pixar series' humour.\n\nKingdom Hearts III hands him, almost by accident, one of the saga's most discussed elements: he is a video-game player, and it is through him that Verum Rex surfaces, the fictional demo on display in the toy store. That game's hero, Yozora, looks oddly like Sora and becomes the starting point of the mysteries left hanging at the episode's end.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans la Boîte à Jouets, la chambre d'Andy s'est vidée : la plupart des jouets ont disparu, enlevés par le Xehanort adolescent, et ceux qui restent ne comprennent pas ce qui se passe. Rex est de ceux-là, aux côtés de Bayonne et du Sergent.\n\nQuand l'aventure se déplace vers le magasin Galaxy Toys, il découvre le stand de démonstration de Verum Rex et s'enthousiasme pour ce jeu dont le héros lui rappelle Sora. Il l'interroge d'ailleurs à ce sujet, persuadé qu'il en connaît les commandes. Ce détail comique est en réalité l'une des rares portes ouvertes de Kingdom Hearts III vers Yozora et vers la ville de Quadratum, qui n'apparaissent pleinement qu'après la fin du jeu.",
          "In the Toy Box, Andy's room has emptied out: most of the toys have vanished, taken by the young Xehanort, and those left behind cannot make sense of it. Rex is one of them, along with Hamm and Sarge.\n\nWhen the adventure moves to the Galaxy Toys store, he finds the Verum Rex demo stand and gets excited about a game whose hero reminds him of Sora. He even quizzes Sora about it, convinced he must know the controls. That comic detail is in fact one of Kingdom Hearts III's few open doors toward Yozora and the city of Quadratum, which only come fully into view after the game ends.",
        ),
      },
    ],
    trivia: [
      L("Verum Rex, le jeu dont Rex s'enthousiasme, est une démo fictive créée pour Kingdom Hearts III et présentée comme l'œuvre d'un studio du monde de Toy Story.", "Verum Rex, the game Rex gets excited about, is a fictional demo created for Kingdom Hearts III and presented as the work of a studio inside Toy Story's world."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Rex", url: "https://kingdomhearts.fandom.com/wiki/Rex" }],
  },

  "hamm": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Bayonne est la tirelire en forme de cochon de Toy Story, le pragmatique de la bande : il commente, ironise, tient les comptes et se montre rarement impressionné. Son duo avec Rex, l'anxieux, fonctionne sur le contraste entre le cynisme et la panique.\n\nKingdom Hearts III le conserve dans ce registre. Dans la Boîte à Jouets, il fait partie des jouets restés dans la chambre d'Andy après la disparition de leurs camarades, et sa réaction à l'irruption de Sora, Donald et Dingo est celle d'un sceptique confronté à trois inconnus prétendant venir d'un autre monde.",
          "Hamm is Toy Story's pig-shaped piggy bank, the group's pragmatist: he comments, needles, keeps the accounts and is rarely impressed. His pairing with the anxious Rex works on the contrast between cynicism and panic.\n\nKingdom Hearts III keeps him in that register. In the Toy Box he is one of the toys left in Andy's room after their friends vanished, and his reaction to Sora, Donald and Goofy bursting in is that of a sceptic faced with three strangers claiming to come from another world.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Bayonne accueille les trois visiteurs avec une méfiance amusée, avant que Woody et Buzz l'Éclair ne décident de leur faire confiance pour retrouver les jouets disparus. Il reste ensuite en retrait de l'aventure principale, qui se déroule surtout dans le magasin Galaxy Toys.\n\nSa présence sert de fil comique et de rappel : dans un monde où les Sans-cœur prennent l'apparence de jouets et où le Xehanort adolescent expérimente sur les cœurs des objets, Bayonne représente le point de vue le plus terre-à-terre. Il retrouve ses camarades lorsque le monde est libéré, et le groupe se reforme au complet dans la chambre.",
          "Hamm greets the three visitors with amused suspicion, before Woody and Buzz Lightyear decide to trust them to find the missing toys. He then stays clear of the main adventure, which unfolds mostly inside the Galaxy Toys store.\n\nHis presence serves as a comic thread and a reminder: in a world where the Heartless take the shape of toys and the young Xehanort experiments on the hearts of objects, Hamm holds the most down-to-earth point of view. He is reunited with his friends once the world is freed, and the group comes back together in the bedroom.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hamm", url: "https://kingdomhearts.fandom.com/wiki/Hamm" }],
  },

  // ─────────────────────── Monstropolis ───────────────────────
  "randall": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Randall Boggs est le rival de Sulli dans Monstres et Cie (2001) : un monstre reptilien capable de se fondre dans le décor, obsédé par le tableau des meilleurs collecteurs de cris et prêt à enlever une enfant humaine pour prendre la première place.\n\nKingdom Hearts III le reprend après les événements du film, alors qu'il a été chassé de l'usine. Le jeu greffe sur son ambition personnelle un allié bien plus dangereux, Vanitas, ce qui transforme une rivalité professionnelle en menace à l'échelle du monde. Randall reste toutefois un antagoniste local, sans lien avec la guerre des Keyblades.",
          "Randall Boggs is Sulley's rival in Monsters, Inc. (2001): a reptilian monster able to blend into any background, obsessed with the scare leaderboard and willing to kidnap a human child to take the top spot.\n\nKingdom Hearts III picks him up after the film's events, once he has been driven out of the factory. The game grafts a far more dangerous ally onto his personal ambition, Vanitas, turning a workplace rivalry into a world-scale threat. Randall nonetheless remains a local antagonist, with no ties to the Keyblade war.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sora, Donald et Dingo découvrent Monstropolis alors que l'usine tourne au ralenti et que d'étranges créatures rôdent dans les couloirs des portes. Randall y est revenu en secret, décidé à reprendre le contrôle de la production.\n\nSon pacte avec Vanitas lui apporte les Nescients, qui prospèrent sur la peur et la détresse, et il tente d'exploiter Bouh pour alimenter ses machines. Sulli et Mike Wazowski, aidés du porteur de la Keyblade, déjouent le plan ; Vanitas se désintéresse rapidement de son allié, qu'il n'a utilisé que comme relais. Randall est finalement expédié à travers une porte par Bouh et ses amis, et disparaît du récit sans avoir compris à qui il avait affaire.",
          "Sora, Donald and Goofy find Monstropolis with the factory running at half speed and strange creatures prowling the door corridors. Randall has slipped back in, determined to retake control of production.\n\nHis pact with Vanitas brings him the Unversed, which thrive on fear and distress, and he tries to exploit Boo to feed his machines. Sulley and Mike Wazowski, helped by the Keyblade wielder, undo the plan; Vanitas quickly loses interest in an ally he only ever used as a relay. Randall is finally sent through a door by Boo and her friends, and drops out of the story without ever grasping whom he was dealing with.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Randall Boggs", url: "https://kingdomhearts.fandom.com/wiki/Randall_Boggs" }],
  },

  // ─────────────────────── San Fransokyo ───────────────────────
  "fred": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Fred vient des Nouveaux Héros (2014), où il est la mascotte de l'université et le seul membre de l'équipe à n'avoir aucune formation scientifique. Fan de comics et de films de monstres, il obtient de Hiro un costume de kaiju cracheur de feu, exactement celui dont il rêvait.\n\nKingdom Hearts III le place dans un rôle qui lui va parfaitement : celui du personnage qui comprend immédiatement ce qui arrive. Face à un garçon armé d'une clé géante et venu d'un autre monde, Fred ne s'étonne pas, il s'enthousiasme, et c'est lui qui formule à voix haute la logique de super-héros que San Fransokyo emprunte au film.",
          "Fred comes from Big Hero 6 (2014), where he is the university mascot and the only member of the team with no scientific training. A fan of comics and monster movies, he gets from Hiro a fire-breathing kaiju suit, exactly the one he dreamed of.\n\nKingdom Hearts III puts him in a role that suits him perfectly: the character who instantly understands what is happening. Faced with a boy carrying a giant key and hailing from another world, Fred is not surprised, he is thrilled, and he is the one who says out loud the superhero logic San Fransokyo borrows from the film.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "San Fransokyo est envahie par les Sans-cœur et par d'étranges cubes de ténèbres qui se rassemblent au-dessus de la ville. Fred patrouille avec le reste de l'équipe des Big Hero 6 pendant que Hiro cherche à comprendre l'origine du phénomène.\n\nIl accueille Sora, Donald et Dingo comme des renforts venus d'un univers parallèle et se charge volontiers de la partie spectaculaire des combats, en bondissant et en crachant des flammes. Lorsque la menace se concrétise sous la forme d'une version corrompue de Baymax, Fred combat aux côtés de ses amis pour permettre à Hiro de récupérer son robot. Il n'a pas de rôle dans l'intrigue de la Keyblade, mais il est de tous les affrontements urbains du monde.",
          "San Fransokyo is overrun by Heartless and by strange cubes of darkness gathering above the city. Fred patrols with the rest of the Big Hero 6 team while Hiro tries to work out where the phenomenon comes from.\n\nHe greets Sora, Donald and Goofy as reinforcements from a parallel universe and gladly takes on the spectacular side of the fighting, leaping about and breathing fire. When the threat takes shape as a corrupted version of Baymax, Fred fights alongside his friends so Hiro can get his robot back. He has no part in the Keyblade plot, but he is in every street battle the world offers.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Fred", url: "https://kingdomhearts.fandom.com/wiki/Fred" }],
  },

  "gogo": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Go Go Tomago est l'ingénieure des Nouveaux Héros, spécialiste des transports à lévitation magnétique. Laconique, impatiente et adepte de la vitesse, elle se déplace sur des disques aimantés qui lui servent aussi bien de roues que d'armes de jet.\n\nKingdom Hearts III conserve ce caractère et cette panoplie. Dans une équipe où Fred parle sans arrêt et où Honey Lemon déborde d'enthousiasme, elle tient le rôle de celle qui tranche et qui avance. Comme les autres membres des Big Hero 6, elle n'est pas un personnage jouable mais intervient en soutien pendant les combats de San Fransokyo.",
          "Go Go Tomago is Big Hero 6's engineer, a specialist in maglev transport. Terse, impatient and devoted to speed, she moves on magnetic discs that serve as both wheels and throwing weapons.\n\nKingdom Hearts III keeps that temperament and that kit. In a team where Fred never stops talking and Honey Lemon overflows with enthusiasm, she is the one who cuts things short and moves. Like the other members of Big Hero 6 she is not a playable character but steps in as support during San Fransokyo's battles.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Go Go participe aux patrouilles organisées par Hiro dans les rues et sur les toits de San Fransokyo, où les Sans-cœur se multiplient sous forme de créatures et de cubes sombres. Elle croise Sora au cours de ces rondes et accepte son aide sans poser de questions inutiles.\n\nSes disques lui permettent de couvrir la ville plus vite que le reste de l'équipe, ce qui en fait l'éclaireuse du groupe. Lors de l'affrontement final contre la version corrompue de Baymax, elle attaque de front pendant que Sora se charge du cœur du problème. Son rôle reste, comme celui de ses coéquipiers, entièrement contenu dans son monde.",
          "Go Go joins the patrols Hiro organises through the streets and rooftops of San Fransokyo, where the Heartless are multiplying as creatures and dark cubes. She meets Sora on those rounds and accepts his help without wasting time on questions.\n\nHer discs let her cover the city faster than the rest of the team, making her the group's scout. In the final confrontation with the corrupted Baymax she attacks head-on while Sora deals with the heart of the problem. Like her teammates', her role stays entirely contained within her own world.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Go Go Tomago", url: "https://kingdomhearts.fandom.com/wiki/Go_Go_Tomago" }],
  },

  "wasabi": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Wasabi est le membre le plus méticuleux des Nouveaux Héros : un colosse obsédé par l'ordre, la précision et la sécurité, que la moindre improvisation met mal à l'aise. Son costume l'équipe de lames à plasma capables de trancher n'importe quoi, ce qui contraste avec sa prudence naturelle.\n\nKingdom Hearts III reprend ce décalage. Dans San Fransokyo, il est celui qui pose des questions pendant que les autres foncent, et qui rappelle qu'affronter des créatures inconnues sans plan n'est pas raisonnable. Sa panoplie en fait pourtant l'un des combattants les plus efficaces de l'équipe contre les Sans-cœur.",
          "Wasabi is Big Hero 6's most meticulous member: a big man obsessed with order, precision and safety, whom the slightest improvisation unsettles. His suit equips him with plasma blades able to cut through anything, in contrast with his natural caution.\n\nKingdom Hearts III keeps that mismatch. In San Fransokyo he is the one asking questions while the others charge in, pointing out that taking on unknown creatures without a plan is unwise. His kit nonetheless makes him one of the team's most effective fighters against the Heartless.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Wasabi défend les rues de San Fransokyo aux côtés de Hiro et de Baymax lorsque les Sans-cœur envahissent la ville et que d'immenses cubes de ténèbres se forment au-dessus des toits. Il accueille Sora, Donald et Dingo avec plus de méfiance que Fred, mais accepte rapidement leur aide.\n\nSes lames plasma lui permettent de tenir les carrefours pendant que le reste de l'équipe évacue les habitants. Il prend part à l'affrontement contre le Baymax corrompu par les ténèbres, un adversaire que personne dans l'équipe ne veut réellement combattre, et participe au sauvetage du robot original. Le monde s'achève sur le retour au calme, sans que les Big Hero 6 quittent jamais San Fransokyo.",
          "Wasabi defends the streets of San Fransokyo alongside Hiro and Baymax as the Heartless overrun the city and huge cubes of darkness form above the rooftops. He greets Sora, Donald and Goofy more warily than Fred does, but soon accepts their help.\n\nHis plasma blades let him hold the intersections while the rest of the team evacuates residents. He takes part in the fight against the Baymax corrupted by darkness, an opponent nobody on the team truly wants to face, and helps rescue the original robot. The world ends with calm restored, and Big Hero 6 never leaving San Fransokyo.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wasabi", url: "https://kingdomhearts.fandom.com/wiki/Wasabi" }],
  },

  "honey-lemon": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Honey Lemon est la chimiste des Nouveaux Héros. Grande, enjouée et perpétuellement optimiste, elle fabrique à la demande des billes chimiques aux effets variés — gel, glu, explosions colorées — grâce à la sacoche qu'elle porte en bandoulière.\n\nKingdom Hearts III lui conserve cet arsenal et ce tempérament. Dans un monde où la ville est menacée et où Hiro porte le deuil de son frère, elle représente la part chaleureuse de l'équipe, celle qui accueille les inconnus et rassure. C'est elle qui accepte le plus naturellement l'idée que Sora, Donald et Dingo viennent d'ailleurs.",
          "Honey Lemon is Big Hero 6's chemist. Tall, cheerful and relentlessly optimistic, she makes chemical balls to order — freezing, sticky, brightly explosive — from the purse slung across her shoulder.\n\nKingdom Hearts III keeps that arsenal and that temperament. In a world where the city is under threat and Hiro is grieving his brother, she is the team's warm side, the one who welcomes strangers and reassures them. She is the readiest to accept that Sora, Donald and Goofy come from somewhere else.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Honey Lemon rejoint les patrouilles des Big Hero 6 dans San Fransokyo envahie par les Sans-cœur, et sa sacoche chimique lui permet d'immobiliser des groupes entiers de créatures pendant que ses amis frappent.\n\nElle veille aussi sur Hiro, dont l'obsession pour la puce de Baymax inquiète l'équipe, et prend part à l'affrontement contre la copie corrompue du robot. Une fois la ville débarrassée des cubes de ténèbres, elle fait partie de ceux qui saluent le départ de Sora, Donald et Dingo. Comme le reste de l'équipe, elle ignore tout de la Keyblade et de l'Organisation XIII : San Fransokyo reste, dans Kingdom Hearts III, un monde tourné vers ses propres héros.",
          "Honey Lemon joins Big Hero 6's patrols through a San Fransokyo overrun by Heartless, her chem purse letting her pin down whole groups of creatures while her friends strike.\n\nShe also keeps an eye on Hiro, whose fixation on Baymax's chip worries the team, and takes part in the fight against the corrupted copy of the robot. Once the city is rid of the cubes of darkness, she is among those seeing Sora, Donald and Goofy off. Like the rest of the team she knows nothing of the Keyblade or Organization XIII: in Kingdom Hearts III, San Fransokyo stays a world turned toward its own heroes.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Honey Lemon", url: "https://kingdomhearts.fandom.com/wiki/Honey_Lemon" }],
  },

  // ─────────────────────── Port Royal / Les Caraïbes ───────────────────────
  "will-turner": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Will Turner est le héros de Pirates des Caraïbes : la Malédiction du Black Pearl (2003) et de ses suites. Forgeron à Port Royal, amoureux de la fille du gouverneur, il découvre qu'il est le fils d'un pirate et que son sang est la clé de la malédiction qui frappe l'équipage de Barbossa.\n\nKingdom Hearts II l'introduit dans un monde inhabituel pour la saga : un décor en prises de vue réalistes, sans aucun personnage animé, où Sora, Donald et Dingo détonnent. Kingdom Hearts III poursuit son histoire en adaptant les deuxième et troisième films, et le mène jusqu'à la barre du Hollandais volant.",
          "Will Turner is the hero of Pirates of the Caribbean: The Curse of the Black Pearl (2003) and its sequels. A blacksmith in Port Royal in love with the governor's daughter, he discovers he is a pirate's son and that his blood is the key to the curse afflicting Barbossa's crew.\n\nKingdom Hearts II drops him into a world unusual for the saga: a realistically rendered setting with no animated characters, where Sora, Donald and Goofy stand out sharply. Kingdom Hearts III continues his story by adapting the second and third films, and takes him all the way to the helm of the Flying Dutchman.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Quand l'équipage maudit de Barbossa enlève Elizabeth Swann à Port Royal, Will s'allie à Jack Sparrow pour la retrouver, et croise Sora, Donald et Dingo dès leur arrivée dans le monde. Les pirates, condamnés à devenir des squelettes au clair de lune, cherchent la dernière pièce d'or aztèque et le sang du fils de Bill le Bottier.\n\nWill accompagne le groupe jusqu'à l'Île de la Muerta, où le trésor est caché, et prête son sang pour lever la malédiction pendant que Sora affronte Barbossa devenu presque invincible. La présence de l'Organisation XIII complique l'affaire : Luxord manipule les Sans-cœur du monde, et une seconde visite est nécessaire pour en finir avec les créatures qui rôdent autour du trésor.",
          "When Barbossa's cursed crew abducts Elizabeth Swann from Port Royal, Will allies with Jack Sparrow to find her, and meets Sora, Donald and Goofy as soon as they arrive in the world. The pirates, doomed to turn to skeletons in the moonlight, are after the last Aztec gold piece and the blood of Bootstrap Bill's son.\n\nWill goes with the group to the Isla de Muerta, where the treasure is hidden, and gives his blood to lift the curse while Sora fights an all but invincible Barbossa. Organization XIII complicates matters: Luxord meddles with the world's Heartless, and a second visit is needed to be done with the creatures haunting the treasure.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Des années plus tard, dans les Caraïbes, Will sert à bord du Hollandais volant sous les ordres de Davy Jones, qui a fait de son équipage des créatures marines. Elizabeth et Jack Sparrow cherchent le coffre contenant le cœur du capitaine, seul moyen de le vaincre.\n\nSora, Donald et Dingo participent à la bataille finale dans le maelström, où le Black Pearl et le Hollandais volant s'affrontent pendant que Luxord poursuit ses propres objectifs. Blessé à mort au cours du combat, Will poignarde le cœur de Davy Jones et devient à son tour capitaine du navire, condamné à sillonner les mers, mais délivré du maître qui le retenait.",
          "Years later, in the Caribbean, Will serves aboard the Flying Dutchman under Davy Jones, who has turned his crew into sea creatures. Elizabeth and Jack Sparrow are hunting the chest holding the captain's heart, the only way to defeat him.\n\nSora, Donald and Goofy take part in the final battle in the maelstrom, where the Black Pearl and the Flying Dutchman clash while Luxord pursues aims of his own. Mortally wounded in the fight, Will stabs Davy Jones's heart and becomes the ship's captain in his turn, bound to sail the seas, but free of the master who held him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Will Turner", url: "https://kingdomhearts.fandom.com/wiki/Will_Turner" }],
  },

  "elizabeth-swann": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Fille du gouverneur de Port Royal, Elizabeth Swann passe, au fil des films Pirates des Caraïbes, du statut de jeune fille de bonne famille à celui de combattante puis de chef reconnue par les pirates eux-mêmes. Enfant, elle a dissimulé le médaillon aztèque trouvé sur Will Turner, geste qui déclenche toute l'intrigue.\n\nKingdom Hearts suit cette évolution en deux temps : otage à sauver dans Kingdom Hearts II, alliée armée dans Kingdom Hearts III. Comme les autres personnages de ce monde, elle est modélisée d'après les acteurs du film, ce qui fait de Port Royal puis des Caraïbes des mondes visuellement à part dans la saga.",
          "The daughter of Port Royal's governor, Elizabeth Swann moves across the Pirates of the Caribbean films from well-bred young lady to fighter and then to a leader the pirates themselves acknowledge. As a child she hid the Aztec medallion found on Will Turner, the act that sets the whole plot going.\n\nKingdom Hearts follows that arc in two stages: a hostage to rescue in Kingdom Hearts II, an armed ally in Kingdom Hearts III. Like the world's other characters she is modelled after the film's actors, which makes Port Royal and later the Caribbean visually distinct within the saga.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Elizabeth est enlevée par l'équipage de Barbossa parce qu'elle porte la dernière pièce d'or aztèque, celle qui doit lever la malédiction pesant sur les pirates. Retenue à bord du Black Pearl puis sur l'Île de la Muerta, elle refuse de se laisser intimider par des hommes qui se changent en squelettes au clair de lune.\n\nWill Turner, Jack Sparrow et Sora la délivrent après avoir traversé les grottes du trésor. Sa libération ne clôt pas le monde : les Sans-cœur attirés par l'or restent nombreux, et Sora doit revenir affronter les créatures qui les remplacent. Elizabeth, elle, retrouve Port Royal et Will, avant que les épisodes suivants ne la ramènent en mer.",
          "Elizabeth is abducted by Barbossa's crew because she carries the last Aztec gold piece, the one needed to lift the curse hanging over the pirates. Held aboard the Black Pearl and then on the Isla de Muerta, she refuses to be cowed by men who turn to skeletons in the moonlight.\n\nWill Turner, Jack Sparrow and Sora free her after crossing the treasure caves. Her rescue does not close the world: Heartless drawn by the gold remain plentiful, and Sora has to come back to face the creatures that replace them. Elizabeth returns to Port Royal and to Will, before the later games take her back to sea.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Devenue une combattante aguerrie, Elizabeth navigue avec Jack Sparrow et le Black Pearl dans les Caraïbes, où le Hollandais volant et son capitaine font régner la terreur. Elle prend part aux négociations comme aux abordages, et se bat aux côtés de Sora contre les Sans-cœur qui pullulent sur les îles.\n\nLors de la bataille finale, alors que les deux navires tournent dans le maelström, elle combat sur le pont pendant que Will affronte Davy Jones. La victoire lui vaut de retrouver l'homme qu'elle aime, désormais lié au Hollandais volant, dans une conclusion douce-amère que le jeu reprend fidèlement du troisième film.",
          "Now a seasoned fighter, Elizabeth sails with Jack Sparrow and the Black Pearl through a Caribbean where the Flying Dutchman and its captain hold sway. She takes part in the parleys as well as the boardings, and fights beside Sora against the Heartless swarming the islands.\n\nIn the final battle, as the two ships circle inside the maelstrom, she fights on deck while Will faces Davy Jones. Victory reunites her with the man she loves, now bound to the Flying Dutchman, in a bittersweet ending the game takes faithfully from the third film.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Elizabeth Swann", url: "https://kingdomhearts.fandom.com/wiki/Elizabeth_Swann" }],
  },

  "davy-jones": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Davy Jones, capitaine du Hollandais volant dans Pirates des Caraïbes : le Secret du coffre maudit (2006), a arraché son propre cœur pour échapper à la souffrance et l'a enfermé dans un coffre. Son visage de pieuvre et l'équipage marin qui l'entoure font de lui l'une des créations les plus spectaculaires de la série.\n\nKingdom Hearts III en fait le grand antagoniste des Caraïbes. Sa logique — un cœur séparé de son propriétaire, caché et convoité — résonne évidemment avec les thèmes de la saga, ce qui explique l'intérêt que lui porte Luxord, membre de l'Organisation XIII envoyé dans ce monde.",
          "Davy Jones, captain of the Flying Dutchman in Pirates of the Caribbean: Dead Man's Chest (2006), tore out his own heart to escape suffering and locked it in a chest. His octopus face and the sea-creature crew around him make him one of the series' most spectacular creations.\n\nKingdom Hearts III makes him the Caribbean's chief antagonist. His premise — a heart separated from its owner, hidden and coveted — obviously chimes with the saga's themes, which explains the interest taken in him by Luxord, the Organization XIII member sent to this world.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Davy Jones réclame à Jack Sparrow la dette contractée pour la remise à flot du Black Pearl et lance le Kraken à ses trousses. Sora, Donald et Dingo prennent la mer avec le capitaine, affrontent les navires fantômes et les Sans-cœur marins, et finissent par gagner l'Antre du Hollandais.\n\nLa confrontation finale a lieu dans un maelström où les deux vaisseaux s'affrontent bord à bord. Sora et ses alliés combattent Davy Jones sur le pont, tandis que Luxord cherche à s'emparer du coffre contenant son cœur pour ses propres raisons. Le capitaine tombe lorsque Will Turner, mortellement blessé, poignarde ce cœur : le Hollandais volant change alors de maître et la mer retrouve un ordre précaire.",
          "Davy Jones calls in the debt Jack Sparrow owes for raising the Black Pearl and sets the Kraken on him. Sora, Donald and Goofy take to sea with the captain, face ghost ships and marine Heartless, and eventually reach the Dutchman's domain.\n\nThe final confrontation takes place in a maelstrom where the two vessels fight broadside to broadside. Sora and his allies battle Davy Jones on deck while Luxord tries to seize the chest holding his heart for reasons of his own. The captain falls when Will Turner, mortally wounded, stabs that heart: the Flying Dutchman changes masters, and the sea regains a precarious order.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Davy Jones", url: "https://kingdomhearts.fandom.com/wiki/Davy_Jones" }],
  },

  "tia-dalma": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Tia Dalma est la voyante des bayous dans les Pirates des Caraïbes : elle lit l'avenir dans les carapaces de crabe, connaît l'histoire de Davy Jones mieux que quiconque, et manipule les pirates autant qu'elle les aide. Les films révèlent qu'elle est en réalité la déesse de la mer Calypso, enfermée dans un corps humain par le Conseil des pirates.\n\nKingdom Hearts III conserve ce double statut. Dans les Caraïbes, elle est à la fois l'informatrice indispensable et une puissance dont personne ne mesure vraiment la portée, ce qui en fait l'un des rares personnages Disney de la saga à échapper au partage entre lumière et ténèbres.",
          "Tia Dalma is the bayou seer of the Pirates of the Caribbean films: she reads the future in crab shells, knows Davy Jones's history better than anyone, and manipulates pirates as much as she helps them. The films reveal she is in truth the sea goddess Calypso, bound in human form by the Pirate Lords.\n\nKingdom Hearts III keeps that double status. In the Caribbean she is both the indispensable informant and a power whose reach nobody truly measures, which makes her one of the saga's few Disney characters to escape the split between light and darkness.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Après la disparition de Jack Sparrow et du Black Pearl, engloutis par le Kraken, c'est Tia Dalma qui indique à l'équipage le moyen de les ramener de l'Antre de Davy Jones. Elle accueille Sora, Donald et Dingo dans sa cabane des marais et leur explique ce qu'est réellement le coffre que tout le monde cherche.\n\nSes révélations sur le cœur arraché du capitaine orientent toute la fin du monde. Libérée de sa forme mortelle au cours de la bataille finale, elle reprend sa puissance de déesse et déchaîne le maelström dans lequel s'affrontent le Black Pearl et le Hollandais volant. Elle disparaît ensuite du récit sans se soucier du sort des mortels qu'elle a mis en mouvement.",
          "After Jack Sparrow and the Black Pearl are swallowed by the Kraken, it is Tia Dalma who tells the crew how to bring them back from Davy Jones's Locker. She receives Sora, Donald and Goofy in her swamp shack and explains what the chest everyone is hunting really is.\n\nHer revelations about the captain's torn-out heart shape the whole end of the world. Freed from her mortal form during the final battle, she reclaims her power as a goddess and unleashes the maelstrom in which the Black Pearl and the Flying Dutchman clash. She then vanishes from the story, indifferent to the fate of the mortals she set in motion.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Tia Dalma", url: "https://kingdomhearts.fandom.com/wiki/Tia_Dalma" }],
  },

  // ─────────────────────── Terre des Dragons ───────────────────────
  "shang": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Li Shang, dans Mulan (1998), est le jeune capitaine promu à la tête d'un camp de recrues pour prouver sa valeur au regard de son père, le général. Rigoureux et intransigeant, il transforme une troupe indisciplinée en soldats, sans se douter que sa meilleure recrue, Ping, est une femme.\n\nKingdom Hearts II en fait le supérieur direct de Sora dans la Terre des Dragons. Le monde reprend fidèlement la structure du film — l'entraînement, la trahison de la montagne, la défense de la Cité impériale — et Shang y tient le rôle de l'autorité qui doit apprendre à juger les gens sur leurs actes plutôt que sur les apparences.",
          "Li Shang, in Mulan (1998), is the young captain promoted to run a camp of recruits to prove himself in his father the general's eyes. Rigorous and unyielding, he turns an undisciplined troop into soldiers, never suspecting that his best recruit, Ping, is a woman.\n\nKingdom Hearts II makes him Sora's direct superior in the Land of Dragons. The world follows the film's structure closely — the training, the betrayal on the mountain, the defence of the Imperial City — and Shang plays the part of authority learning to judge people by their deeds rather than their appearance.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sora, Donald et Dingo s'engagent dans l'armée impériale en même temps que Mulan, déguisée sous le nom de Ping. Shang les met à l'épreuve dans son camp, puis les envoie en mission contre les Sans-cœur qui rôdent dans les montagnes.\n\nLorsque Shan Yu déclenche une avalanche pour anéantir la troupe, la ruse de Mulan sauve le capitaine. Mais la découverte de son identité conduit Shang à la renvoyer, conformément à la loi. Il revient sur son jugement pendant l'assaut de la Cité impériale : c'est elle qui repère Shan Yu, et le capitaine se bat à ses côtés pour protéger l'Empereur. Sora l'aide à repousser les Sans-cœur avant l'affrontement final devant le palais.",
          "Sora, Donald and Goofy enlist in the imperial army at the same time as Mulan, disguised under the name Ping. Shang tests them at his camp, then sends them on missions against the Heartless prowling the mountains.\n\nWhen Shan Yu triggers an avalanche to wipe out the troop, Mulan's quick thinking saves the captain. But the discovery of her identity leads Shang to dismiss her, as the law requires. He reverses that judgement during the assault on the Imperial City: she is the one who spots Shan Yu, and the captain fights at her side to protect the Emperor. Sora helps him drive back the Heartless before the final battle outside the palace.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Shang", url: "https://kingdomhearts.fandom.com/wiki/Shang" }],
  },

  "shan-yu": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Shan Yu est le chef des Huns dans Mulan, un antagoniste presque muet dont la menace tient à sa stature, à son calme et à sa cruauté méthodique. Il franchit la Grande Muraille avec son armée pour atteindre l'Empereur, et son faucon lui sert d'éclaireur.\n\nKingdom Hearts II le range parmi les méchants Disney qui commandent les Sans-cœur. Sa troupe de Huns est ainsi doublée d'une armée de créatures des ténèbres, ce qui lui permet d'apparaître partout à la fois dans la Terre des Dragons, des cols enneigés jusqu'aux toits de la Cité impériale.",
          "Shan Yu is the leader of the Huns in Mulan, an all but silent antagonist whose menace rests on his stature, his calm and his methodical cruelty. He crosses the Great Wall with his army to reach the Emperor, using his falcon as a scout.\n\nKingdom Hearts II files him among the Disney villains who command the Heartless. His band of Huns is thus doubled by an army of dark creatures, which lets him turn up everywhere at once in the Land of Dragons, from the snowy passes to the rooftops of the Imperial City.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Shan Yu suit la troupe de Shang à travers la montagne et déclenche une attaque destinée à l'anéantir. Mulan riposte en provoquant une avalanche qui ensevelit l'armée des Huns, mais le chef en réchappe et gagne la Cité impériale avec une poignée de survivants.\n\nIl s'empare du palais et menace l'Empereur, jusqu'à ce que Mulan, Shang, Sora, Donald et Dingo le rejoignent sur le toit. Le combat l'oppose au groupe entier, son faucon compris. Vaincu, il disparaît, et la Terre des Dragons connaît une accalmie ; les Sans-cœur y reviennent pourtant lors de la seconde visite de Sora, signe que la menace du monde ne tenait pas seulement à lui.",
          "Shan Yu shadows Shang's troop through the mountains and launches an attack meant to destroy it. Mulan answers by setting off an avalanche that buries the Hun army, but their leader survives and reaches the Imperial City with a handful of men.\n\nHe seizes the palace and threatens the Emperor, until Mulan, Shang, Sora, Donald and Goofy reach him on the roof. The fight pits him against the whole group, his falcon included. Defeated, he vanishes, and the Land of Dragons enjoys a lull; the Heartless nonetheless return during Sora's second visit, a sign that the world's danger did not rest on him alone.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Shan-Yu", url: "https://kingdomhearts.fandom.com/wiki/Shan-Yu" }],
  },

  "yao-ling-chien-po": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Yao, Ling et Chien-Po sont les trois recrues comiques de Mulan : le bagarreur au caractère explosif, le grand échalas moqueur et le colosse doux et placide. Chahuteurs au début du film, ils deviennent les compagnons d'armes les plus loyaux de Ping.\n\nKingdom Hearts II les traite comme un trio indissociable et leur confie le même rôle : celui de la troupe ordinaire, celle qui ne comprend rien aux Sans-cœur mais qui se bat quand même. Leur présence donne à la Terre des Dragons son ton, à mi-chemin entre l'épopée militaire et la comédie de caserne.",
          "Yao, Ling and Chien-Po are Mulan's three comic recruits: the explosive brawler, the mocking beanpole and the gentle, placid giant. Troublemakers at the start of the film, they become Ping's most loyal comrades in arms.\n\nKingdom Hearts II treats them as an inseparable trio and gives them the same role: the rank and file, who understand nothing about the Heartless but fight anyway. Their presence gives the Land of Dragons its tone, halfway between military epic and barracks comedy.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Les trois soldats chahutent d'abord Ping au camp d'entraînement de Shang, avant de l'accepter parmi eux. Sora, Donald et Dingo participent aux mêmes exercices et aux mêmes missions, notamment les patrouilles contre les Sans-cœur envoyées dans les montagnes.\n\nAprès l'avalanche et le renvoi de Mulan, on les retrouve à la Cité impériale, où ils tiennent la place pendant l'attaque des Huns. Ils acceptent alors de se déguiser pour infiltrer le palais aux côtés de Mulan, exactement comme dans le film. Aucun des trois n'apparaît dans un autre épisode de la saga : leur rôle s'arrête avec la Terre des Dragons.",
          "The three soldiers first haze Ping at Shang's training camp before accepting him among them. Sora, Donald and Goofy take part in the same drills and the same missions, notably the patrols sent into the mountains against the Heartless.\n\nAfter the avalanche and Mulan's dismissal, they turn up in the Imperial City, holding the square during the Huns' attack. They then agree to disguise themselves to slip into the palace alongside Mulan, exactly as in the film. None of the three appears in any other entry in the saga: their role ends with the Land of Dragons.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Yao, Ling, and Chien-Po", url: "https://kingdomhearts.fandom.com/wiki/Yao,_Ling,_and_Chien-Po" }],
  },

  // ─────────────────────── Invocations ───────────────────────
  "ralph": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Ralph est le héros des Mondes de Ralph (2012) : le méchant du jeu d'arcade Fix-It Felix Jr., condamné depuis trente ans à démolir un immeuble que Félix répare, et qui finit par quitter sa borne pour prouver qu'il vaut mieux que son rôle.\n\nKingdom Hearts III ne lui consacre pas de monde, mais l'intègre au système des Liens, les invocations que Sora appelle en plein combat. Le choix est cohérent avec le personnage : Ralph est un habitant de jeu vidéo, et le seul invité de la saga dont l'apparition assume ouvertement l'esthétique du pixel.",
          "Ralph is the hero of Wreck-It Ralph (2012): the villain of the arcade game Fix-It Felix Jr., condemned for thirty years to smash a building Felix repairs, who finally leaves his cabinet to prove he is worth more than his role.\n\nKingdom Hearts III gives him no world of his own but folds him into the Link system, the summons Sora calls in mid-battle. The choice suits the character: Ralph is a video-game resident, and the only guest in the saga whose appearance openly embraces a pixelated look.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Invoqué par Sora, Ralph surgit sur le champ de bataille et pulvérise les Sans-cœur à coups de poing, projetant au passage des blocs et des débris qui reprennent le décor de son propre jeu. L'attaque la plus spectaculaire du Lien fait apparaître des éléments d'arcade en gros pixels, dans un style graphique unique parmi les invocations de l'épisode.\n\nComme les autres Liens de Kingdom Hearts III, il remplace temporairement les équipiers de Sora et consacre une jauge dédiée à son intervention. Ralph n'a aucune ligne de dialogue liée à l'intrigue et ne rencontre jamais les autres personnages de la saga : sa participation reste purement ludique, mais elle vaut à sa série une présence dans le jeu.",
          "Summoned by Sora, Ralph bursts onto the battlefield and pounds the Heartless with his fists, hurling blocks and debris drawn from his own game's scenery. The Link's most spectacular attack calls up arcade elements in chunky pixels, a graphic style unique among the game's summons.\n\nLike Kingdom Hearts III's other Links he temporarily replaces Sora's party members and draws on a dedicated gauge. Ralph has no story dialogue and never meets the saga's other characters: his part stays purely playful, but it earns his film a presence in the game.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wreck-It Ralph", url: "https://kingdomhearts.fandom.com/wiki/Wreck-It_Ralph" }],
  },
};
