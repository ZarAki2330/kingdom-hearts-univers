import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des variantes de Keyblade issues des Gears de 358/2 Days,
 * des Keyblades bonus de Kingdom Hearts III, de la Keyblade de bois et de Moogle O' Glory.
 * Aucune statistique chiffrée n'est avancée : les valeurs dépendent des panneaux et des niveaux.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Gears de 358/2 Days ───────────────────────────
  "missing-ache": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Missing Ache est une lame argentée très sobre, aux dents découpées comme une aile et prolongée par un porte-clés en forme de croix. Elle reste proche de la silhouette de la Chaîne Royale, dont elle n'est qu'un habillage : dans 358/2 Days, Roxas manie toujours la même Keyblade, mais son apparence change avec le Gear équipé.\n\nSon nom — littéralement « la douleur du manque » — annonce la tonalité mélancolique de toute la série des Gears : chaque titre décrit un sentiment d'absence, de solitude ou de crépuscule, en écho au vide que ressent un Simili privé de cœur.",
          "Missing Ache is a very plain silver blade, its teeth cut like a wing and its chain ending in a cross-shaped keychain. It stays close to the Kingdom Key's silhouette, of which it is only a skin: in 358/2 Days Roxas always wields the same Keyblade, but its look changes with the Gear he equips.\n\nIts name — the ache of something missing — sets the melancholy tone of the whole Gear line: every title names a feeling of absence, solitude or twilight, echoing the emptiness a heartless Nobody is said to feel.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Dans 358/2 Days, l'équipement de Roxas passe par un panneau : les capacités, les magies, les objets et les niveaux sont des pièces à placer dans une grille, et les Gears y occupent l'emplacement de l'arme. Missing Ache correspond au Gear de Compétence, l'un des tout premiers panneaux remis à Roxas par l'Organisation XIII au fil de ses missions.\n\nElle n'est donc pas une Keyblade distincte mais une configuration de la Chaîne Royale : équiper le Gear modifie à la fois le modèle affiché et les valeurs de combat, sans rien changer à l'histoire. Missing Ache sert de repère de début d'aventure, avant que les Gears « + » et les panneaux plus rares ne prennent le relais.",
          "In 358/2 Days, Roxas's equipment is handled through a panel grid: abilities, magic, items and even levels are pieces slotted into it, and Gears take the weapon slot. Missing Ache corresponds to the Skill Gear, one of the very first panels Organization XIII hands Roxas over the course of his missions.\n\nIt is therefore not a separate Keyblade but a configuration of the Kingdom Key: equipping the Gear changes both the model on screen and the combat values, without affecting the story. Missing Ache is the early-game benchmark, before the “+” Gears and rarer panels take over.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Missing Ache", url: "https://kingdomhearts.fandom.com/wiki/Missing_Ache" }],
  },

  "ominous-blight": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Ominous Blight reprend trait pour trait la silhouette de Missing Ache, mais assombrie : la lame s'élargit, les dents deviennent plus agressives et les couleurs virent au vert-de-gris, comme rongées. Le nom, « fléau de mauvais augure », transforme la simple douleur du manque en menace, selon un principe systématique dans 358/2 Days.\n\nChaque Gear de base possède en effet une version « + » qui garde son orientation de jeu tout en changeant de palette et de nom, souvent pour l'inverser ou l'aggraver : innocence contre culpabilité, ténèbres contre ténèbres plus noires encore.",
          "Ominous Blight repeats Missing Ache's silhouette line for line, only darkened: the blade broadens, the teeth turn more aggressive, and the colours shift to a corroded verdigris. The name, an omen of blight, turns the plain ache of absence into a threat, following a principle applied systematically in 358/2 Days.\n\nEvery base Gear has a “+” version that keeps its play orientation while changing palette and name, often to invert or worsen it: innocence against guilt, darkness against a darkness blacker still.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Ominous Blight apparaît lorsque Roxas équipe le Gear de Compétence +, obtenu en poursuivant les missions confiées par l'Organisation XIII et en dépensant les récompenses gagnées dans le Monde qui n'existe pas. Comme toutes les variantes « + », elle marque un palier de puissance par rapport au Gear de base tout en conservant le même style de combat.\n\nLe joueur ne choisit donc pas une Keyblade dans une liste : il fait de la place dans le panneau de Roxas, y insère le Gear voulu, et la Chaîne Royale change d'aspect à l'invocation suivante. Ce système remplace les porte-clés des autres épisodes, qui n'existent pas dans Days.",
          "Ominous Blight appears when Roxas equips the Skill Gear+, obtained by pushing on with the missions Organization XIII assigns and spending the rewards earned in The World That Never Was. Like every “+” variant, it marks a step up in power over the base Gear while keeping the same combat style.\n\nThe player therefore does not pick a Keyblade from a list: they clear room in Roxas's panel, slot in the desired Gear, and the Kingdom Key takes on its new shape at the next summon. This system replaces the keychains of the other games, which Days does not use.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Ominous Blight", url: "https://kingdomhearts.fandom.com/wiki/Ominous_Blight" }],
  },

  "abaddon-plasma": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Abaddon Plasma est l'une des variantes les plus étranges de Roxas : une lame violette et anguleuse, parcourue de motifs qui évoquent des décharges d'énergie, comme si la Keyblade était traversée d'électricité. Son nom associe Abaddon, l'abîme des textes bibliques, et le plasma, terme résolument moderne.\n\nCe télescopage résume assez bien l'esthétique de 358/2 Days, qui donne à des équipements de jeu des titres poétiques et sombres : Silent Dirge, Glimpse of Darkness, Pain of Solitude. Le vocabulaire du deuil et du vide accompagne une aventure entièrement construite sur la disparition programmée de son héros.",
          "Abaddon Plasma is one of Roxas's strangest variants: a purple, angular blade streaked with patterns suggesting energy discharges, as if electricity ran through the Keyblade. Its name pairs Abaddon, the abyss of biblical texts, with plasma, a resolutely modern word.\n\nThat collision sums up the aesthetic of 358/2 Days, which gives game equipment dark, poetic titles: Silent Dirge, Glimpse of Darkness, Pain of Solitude. The vocabulary of mourning and emptiness suits an adventure built entirely around the scheduled disappearance of its hero.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Abaddon Plasma correspond au Gear Technique, panneau que Roxas obtient en progressant dans les missions de l'Organisation XIII. Ce type de Gear oriente son style vers les enchaînements rapides plutôt que vers la puissance brute, une différence sensible dans un jeu où chaque mission se termine par un décompte de points.\n\nComme les autres Gears, il occupe une case du panneau et peut être remplacé à tout moment depuis la chambre grise. Sa version renforcée, le Gear Technique +, donne Pain of Solitude : les deux Keyblades partagent la même famille de couleurs violettes et la même vocation technique.",
          "Abaddon Plasma corresponds to the Technical Gear, a panel Roxas earns as he works through Organization XIII's missions. This Gear type steers his style toward quick attack chains rather than raw power, a real difference in a game where every mission ends with a score tally.\n\nLike the other Gears it takes up a slot in the panel and can be swapped at any time from the Grey Area. Its upgraded version, the Technical Gear+, yields Pain of Solitude: the two Keyblades share the same purple palette and the same technical purpose.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Abaddon Plasma", url: "https://kingdomhearts.fandom.com/wiki/Abaddon_Plasma" }],
  },

  "pain-of-solitude": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Pain of Solitude prolonge Abaddon Plasma : mêmes violets profonds, mais une silhouette plus effilée et plus travaillée, très éloignée de la simplicité de la Chaîne Royale. Son nom, « la douleur de la solitude », résume à lui seul l'année que raconte 358/2 Days.\n\nRoxas y vit entouré de treize membres qui ne lui expliquent rien, et ses seuls véritables liens — Axel et Xion — finissent par lui être arrachés. Le titre de cette variante fait donc partie du dispositif narratif du jeu : même l'écran d'équipement rappelle au joueur ce que ressent un garçon dont on répète qu'il ne peut rien ressentir.",
          "Pain of Solitude extends Abaddon Plasma: the same deep purples, but a slimmer, more elaborate silhouette, far removed from the Kingdom Key's plainness. Its name says in three words what 358/2 Days spends a year telling.\n\nRoxas lives surrounded by thirteen members who explain nothing to him, and his only real bonds — Axel and Xion — are eventually taken from him. This variant's title is therefore part of the game's storytelling: even the equipment screen reminds the player what a boy feels while being told, over and over, that he can feel nothing.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Pain of Solitude s'obtient en équipant le Gear Technique +, la version renforcée du panneau qui donne Abaddon Plasma. Roxas met la main sur ces panneaux au fil des missions et des récompenses de fin de journée, une progression rythmée par le calendrier du jeu.\n\nComme toutes les variantes, elle ne modifie ni les dialogues ni les cinématiques : Roxas y brandit toujours la Chaîne Royale. Le Gear ne change que ce que le joueur voit en mission, ce qui n'a pas empêché ces vingt-cinq apparences de devenir, pour beaucoup, des Keyblades à part entière de la saga.",
          "Pain of Solitude is obtained by equipping the Technical Gear+, the upgraded version of the panel that grants Abaddon Plasma. Roxas acquires such panels through missions and end-of-day rewards, a progression paced by the game's calendar.\n\nLike every variant it changes neither dialogue nor cutscenes: Roxas always raises the Kingdom Key there. The Gear only alters what the player sees on missions, which has not stopped these looks from being remembered by many as Keyblades in their own right.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Pain of Solitude", url: "https://kingdomhearts.fandom.com/wiki/Pain_of_Solitude" }],
  },

  "sign-of-innocence": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Blanche et bleue, dotée d'une lame fine et d'un porte-clés en forme de larme, Sign of Innocence est l'une des variantes les plus appréciées visuellement de 358/2 Days. Sa clarté tranche avec la majorité des Gears, tournés vers le violet, le noir et le vert.\n\nSon nom la place du côté de l'innocence, celle de Roxas au début de l'histoire, quand il obéit sans comprendre et se contente de compter les jours. Sa version renforcée, Crown of Guilt, retourne l'image en couronne de culpabilité : les deux titres forment l'un des couples d'opposés dont le jeu est friand.",
          "White and blue, with a slender blade and a teardrop keychain, Sign of Innocence is one of the most visually admired variants in 358/2 Days. Its brightness stands out among Gears that mostly lean on purple, black and green.\n\nIts name places it on the side of innocence — Roxas's own at the start, when he obeys without understanding and simply counts the days. Its upgraded form, Crown of Guilt, turns the image into a crown of guilt: the two titles form one of the pairs of opposites the game is fond of.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Sign of Innocence apparaît lorsque Roxas insère le Gear de Duel dans son panneau. Ce type d'équipement allonge les combos, ce qui en fait un choix confortable au milieu de l'aventure, quand les missions envoient Roxas affronter des Sans-cœur toujours plus résistants au Colisée de l'Olympe ou à la Cité du Crépuscule.\n\nLe panneau reste toutefois une ressource limitée : chaque Gear occupe plusieurs cases, en concurrence avec les panneaux de niveau, les magies et les objets de soin. Choisir une apparence de Keyblade, dans Days, revient donc toujours à renoncer à autre chose.",
          "Sign of Innocence appears when Roxas slots the Duel Gear into his panel. This equipment type lengthens combos, a comfortable choice mid-adventure, when missions send Roxas against ever sturdier Heartless in Olympus Coliseum or Twilight Town.\n\nThe panel remains a limited resource, though: each Gear takes up several cells, competing with level panels, magic and healing items. In Days, choosing a Keyblade's look always means giving something else up.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sign of Innocence", url: "https://kingdomhearts.fandom.com/wiki/Sign_of_Innocence" }],
  },

  "crown-of-guilt": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Crown of Guilt reprend les lignes de Sign of Innocence en les dorant : les dents s'organisent en couronne et la lame gagne en ornementation. Le passage de l'innocence à la culpabilité que suggère son nom accompagne la seconde moitié de 358/2 Days, lorsque Roxas comprend que ses missions servent à nourrir un Kingdom Hearts artificiel et que Xion a été fabriquée à partir des souvenirs de Sora.\n\nLa couronne, motif récurrent de la saga — pendentif de Sora, dents de la Chaîne Royale — prend ici une teinte amère : elle ne couronne rien d'autre qu'une faute.",
          "Crown of Guilt takes Sign of Innocence's lines and gilds them: the teeth arrange themselves into a crown and the blade grows more ornate. The shift from innocence to guilt suggested by its name matches the second half of 358/2 Days, when Roxas realises his missions feed an artificial Kingdom Hearts and that Xion was built from Sora's memories.\n\nThe crown, a recurring motif in the series — Sora's pendant, the Kingdom Key's teeth — turns bitter here: it crowns nothing but a wrong.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Crown of Guilt est liée au Gear de Duel +, obtenu plus tard que le Gear de Duel dont elle est la version renforcée. Elle allonge encore les enchaînements, ce qui la rend efficace lors des missions à objectif de temps ou de score, très présentes dans la seconde moitié du jeu.\n\nDans le mode multijoueur de 358/2 Days, où l'on incarne les autres membres de l'Organisation XIII, seuls Roxas et Xion peuvent afficher ces apparences de Keyblade : les Gears des autres personnages habillent leurs propres armes, du chakram d'Axel au bouclier de Xigbar.",
          "Crown of Guilt is tied to the Duel Gear+, obtained later than the Duel Gear it upgrades. It lengthens attack chains further, which helps in the timed and score-based missions that fill the game's second half.\n\nIn the multiplayer mode of 358/2 Days, where players take on the other members of Organization XIII, only Roxas and Xion can display these Keyblade looks: the same Gears dress the other characters' own weapons, from Axel's chakrams to Xigbar's arrowguns.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Crown of Guilt", url: "https://kingdomhearts.fandom.com/wiki/Crown_of_Guilt" }],
  },

  "abyssal-tide": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Abyssal Tide affiche des bleus profonds et des motifs de vagues qui la rapprochent des Keyblades marines de la saga, comme Trésor des mers ou Mystérieuse Abîme. Sa garde évoque l'écume et sa lame, massive, semble taillée pour frapper lourdement plutôt que vite.\n\nL'image de la marée abyssale colle au propos de 358/2 Days : la mer y est le décor du seul plaisir simple de Roxas, la glace à l'eau de mer partagée sur la tour de l'horloge, mais l'abîme rappelle aussi les ténèbres où sombrent les mondes. Le nom tient les deux à la fois.",
          "Abyssal Tide shows deep blues and wave motifs that place it beside the series' sea-themed Keyblades, such as Crabclaw or Mysterious Abyss. Its guard evokes foam and its heavy blade looks made to strike hard rather than fast.\n\nThe image of an abyssal tide fits 358/2 Days: the sea frames Roxas's one simple pleasure, the sea-salt ice cream shared on the clock tower, while the abyss also recalls the darkness into which worlds sink. The name holds both at once.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Abyssal Tide correspond au Gear Chargé, un panneau orienté force et allonge : les coups partent plus lentement mais portent plus loin, ce qui convient aux missions où Roxas affronte des Sans-cœur volumineux comme les Tanks ou les Grands Corps.\n\nSon Gear appartient à la première moitié de la progression : Roxas le reçoit après une série de missions, avant que le Gear Chargé + ne lui donne Leviathan. Le passage de l'un à l'autre illustre la logique du système : une même famille d'équipement, deux paliers, deux apparences qui se répondent.",
          "Abyssal Tide corresponds to the Loaded Gear, a panel built for strength and reach: blows come out more slowly but land further, which suits missions where Roxas faces bulky Heartless such as Tanks or Large Bodies.\n\nIts Gear belongs to the first half of the progression: Roxas receives it after a run of missions, before the Loaded Gear+ grants him Leviathan. Moving from one to the other illustrates the system's logic: one equipment family, two tiers, two looks that answer each other.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Abyssal Tide", url: "https://kingdomhearts.fandom.com/wiki/Abyssal_Tide" }],
  },

  "leviathan": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Leviathan garde les bleus profonds et les motifs marins d'Abyssal Tide, mais sa lame plus massive et ses dents crochues évoquent la mâchoire d'une créature des abysses. Le nom renvoie au monstre marin biblique, devenu dans Final Fantasy une invocation aquatique récurrente : un double clin d'œil typique de Kingdom Hearts.\n\nDans une série où chaque Keyblade est censée exprimer un cœur, ces titres empruntés au bestiaire mythologique disent surtout la lente dérive de Roxas vers quelque chose de plus sombre et de plus massif que ses débuts.",
          "Leviathan keeps Abyssal Tide's deep blues and marine motifs, but its heavier blade and hooked teeth suggest the jaws of a creature from the depths. The name points to the biblical sea monster, which Final Fantasy turned into a recurring water summon: a double nod typical of Kingdom Hearts.\n\nIn a series where each Keyblade is meant to express a heart, such borrowings from mythological bestiaries mostly mark Roxas's slow drift toward something darker and heavier than where he began.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Leviathan s'obtient avec le Gear Chargé +, version renforcée du panneau d'Abyssal Tide. Elle conserve la même orientation — force et portée au détriment de la vitesse — avec des valeurs supérieures, ce qui la rend utile lors des missions les plus exigeantes de la seconde moitié du jeu.\n\nComme les autres Gears « + », elle rappelle que la progression de Roxas ne passe pas par des trouvailles dans des coffres, mais par des panneaux distribués au compte-gouttes par l'Organisation XIII : c'est Saïx qui, depuis la chambre grise, décide chaque matin de ce que le numéro XIII a le droit d'emporter.",
          "Leviathan is obtained with the Loaded Gear+, the upgraded version of Abyssal Tide's panel. It keeps the same orientation — strength and reach over speed — with higher values, making it useful in the tougher missions of the game's second half.\n\nLike the other “+” Gears, it is a reminder that Roxas's progression comes not from chests but from panels doled out sparingly by Organization XIII: it is Saïx who decides each morning, from the Grey Area, what Number XIII is allowed to take with him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Leviathan", url: "https://kingdomhearts.fandom.com/wiki/Leviathan" }],
  },

  "true-lights-flight": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "True Light's Flight est la variante lumineuse par excellence de 358/2 Days : lame dorée et blanche, ailes stylisées de part et d'autre de la garde, porte-clés en forme d'étoile. Elle détonne au milieu de Keyblades dont les noms parlent de douleur, de fléau et de ténèbres.\n\nCette exception a du sens : Roxas est un Simili, donc un être « qui n'existe pas », mais il est aussi la moitié d'un cœur de lumière. L'envol de la vraie lumière que promet son nom annonce la fin du jeu, quand Roxas quitte l'Organisation XIII pour aller chercher lui-même la vérité.",
          "True Light's Flight is the light-themed variant par excellence in 358/2 Days: a gold-and-white blade, stylised wings flanking the guard, a star-shaped keychain. It stands apart from Keyblades whose names speak of ache, blight and darkness.\n\nThe exception makes sense: Roxas is a Nobody, a being said not to exist, yet he is also half of a heart of light. The flight of true light promised by its name anticipates the end of the game, when Roxas leaves Organization XIII to seek the truth himself.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "True Light's Flight correspond au Gear Chrono, panneau que Roxas obtient dans le cours normal de ses missions. Il privilégie l'allonge, un atout appréciable contre les Sans-cœur volants comme les Sorciers ou les Vespérines qui peuplent les missions du Pays Imaginaire et de la Cité du Crépuscule.\n\nSon prolongement, le Gear Chrono +, donne Rejection of Fate : la même esthétique lumineuse, poussée vers l'or. Les deux forment, avec Sign of Innocence, la petite famille claire d'un jeu par ailleurs très sombre — un contrepoint visuel que le remaster HD de 358/2 Days a mis en valeur.",
          "True Light's Flight corresponds to the Chrono Gear, a panel Roxas earns in the ordinary course of his missions. It favours reach, welcome against airborne Heartless such as Wizards or Watchers in the Neverland and Twilight Town assignments.\n\nIts follow-up, the Chrono Gear+, grants Rejection of Fate: the same luminous look, pushed toward gold. Together with Sign of Innocence they form the small bright family of an otherwise very dark game — a visual counterpoint the HD remaster of 358/2 Days brought out well.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — True Light's Flight", url: "https://kingdomhearts.fandom.com/wiki/True_Light%27s_Flight" }],
  },

  "rejection-of-fate": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Rejection of Fate reprend le style ailé et lumineux de True Light's Flight en l'ornant davantage : dents plus élaborées, dorures, lignes qui s'élancent vers la pointe. C'est l'une des variantes les plus décoratives du jeu.\n\nSon nom — le refus du destin — résonne directement avec la conclusion de 358/2 Days. Roxas a été créé pour servir d'outil, Xion pour être absorbée, et tous deux ont un terme fixé d'avance ; en quittant l'Organisation XIII puis en affrontant Riku, Roxas refuse le rôle qu'on lui a écrit, même s'il finit par rejoindre Sora.",
          "Rejection of Fate reprises the winged, luminous style of True Light's Flight with more ornament: more elaborate teeth, gilding, lines sweeping toward the tip. It is one of the game's most decorative variants.\n\nIts name — the refusal of fate — speaks directly to how 358/2 Days ends. Roxas was created as a tool, Xion to be absorbed, and both have an end set in advance; by walking out on Organization XIII and then facing Riku, Roxas refuses the role written for him, even though he ultimately returns to Sora.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Rejection of Fate est la Keyblade du Gear Chrono +, obtenu plus tard que le Gear Chrono. Elle en garde l'allonge tout en offrant des valeurs supérieures, ce qui en fait un choix solide dans les dernières missions, notamment lors des affrontements contre les Sans-cœur d'élite et les combats imposés par le scénario.\n\nCes panneaux se gagnent en accomplissant les missions journalières, en remplissant leurs objectifs annexes et en récupérant les récompenses de la chambre grise ; ils se trouvent aussi dans certains coffres disséminés dans les mondes visités par l'Organisation XIII.",
          "Rejection of Fate is the Chrono Gear+ Keyblade, obtained later than the Chrono Gear. It keeps the reach while offering higher values, a solid choice in the final missions, especially against elite Heartless and in the story's scripted fights.\n\nThese panels are earned by completing daily missions, meeting their secondary objectives and claiming Grey Area rewards; some are also found in chests scattered through the worlds Organization XIII visits.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Rejection of Fate", url: "https://kingdomhearts.fandom.com/wiki/Rejection_of_Fate" }],
  },

  "glimpse-of-darkness": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Glimpse of Darkness accumule les pointes crochues et les violets sourds sur une silhouette déjà spectrale, celle de Midnight Roar dont elle est la version renforcée. Elle appartient visuellement à la famille des armes liées aux ténèbres, aux côtés de Souvenir Perdu ou de Point du Jour.\n\nSon nom, « un aperçu des ténèbres », convient à un Simili : Roxas n'est pas un être des ténèbres, mais il naît de leur passage sur le cœur de Sora et travaille chaque jour pour une Organisation qui les manipule sans jamais lui expliquer pourquoi.",
          "Glimpse of Darkness piles hooked spikes and muted purples onto an already spectral silhouette, that of Midnight Roar, which it upgrades. Visually it belongs to the family of darkness-aligned weapons, beside Oblivion or Way to the Dawn.\n\nIts name, a glimpse of darkness, suits a Nobody: Roxas is not a creature of darkness, yet he is born of its passage over Sora's heart and works daily for an Organization that manipulates it without ever telling him why.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Glimpse of Darkness s'invoque avec le Gear Fantôme +, panneau de la seconde moitié des missions. Elle offre une puissance confortable à un moment où les missions se durcissent : Sans-cœur d'élite, chronomètres serrés, et boss réservés au numéro XIII.\n\nComme pour tous les Gears, il faut d'abord libérer assez de cases dans le panneau, quitte à retirer un panneau de niveau — car dans Days, monter de niveau consiste aussi à équiper des pièces. Cette gestion permanente de l'espace est la véritable originalité de l'épisode, bien plus que la liste de ses vingt-cinq apparences de Keyblade.",
          "Glimpse of Darkness is summoned with the Phantom Gear+, a panel from the second half of the missions. It offers comfortable power just as assignments get harder: elite Heartless, tight timers and bosses reserved for Number XIII.\n\nAs with every Gear, room must first be cleared in the panel, possibly by removing a level panel — because in Days, levelling up also means equipping pieces. That constant management of space is the episode's real originality, far more than its list of twenty-five Keyblade looks.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Glimpse of Darkness", url: "https://kingdomhearts.fandom.com/wiki/Glimpse_of_Darkness" }],
  },

  "darker-than-dark": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Darker Than Dark pousse le motif circulaire de Total Eclipse vers un noir presque total, comme si l'éclipse s'était achevée. Anneaux, disques et arêtes sombres composent une Keyblade qui ne renvoie plus aucune lumière.\n\nSon nom, volontairement excessif — « plus noir que noir » —, illustre l'humour discret que 358/2 Days glisse dans ses appellations mélancoliques. Le jeu alterne en permanence ces deux registres : les journées de Roxas se partagent entre missions gravissimes et glaces partagées, entre la voûte de Kingdom Hearts au-dessus du Monde qui n'existe pas et les blagues d'Axel.",
          "Darker Than Dark pushes Total Eclipse's circular design toward near-total black, as though the eclipse had completed. Rings, discs and dark edges make up a Keyblade that reflects no light at all.\n\nIts deliberately excessive name shows the quiet humour 358/2 Days slips into its melancholy titles. The game constantly alternates registers: Roxas's days are split between grim missions and shared ice cream, between the vault of Kingdom Hearts above The World That Never Was and Axel's jokes.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Darker Than Dark correspond au Gear d'Élévation +, version renforcée du panneau qui donne Total Eclipse. Ce type de Gear favorise les attaques ascendantes et le combat aérien, utile contre les Sans-cœur volants et lors des affrontements en hauteur.\n\nElle fait partie des apparences les plus tardives : le jeu réserve ses panneaux les plus rares aux dernières semaines du calendrier de Roxas, celles où Xion a disparu et où le numéro XIII manie déjà deux Keyblades dans les cinématiques — un détail que les Gears, eux, ne reproduisent pas en mission.",
          "Darker Than Dark corresponds to the Lift Gear+, the upgraded version of the panel that grants Total Eclipse. This Gear type favours rising attacks and aerial combat, useful against flying Heartless and in fights staged at height.\n\nIt is one of the latest looks available: the game keeps its rarest panels for the final weeks of Roxas's calendar, when Xion is gone and Number XIII already wields two Keyblades in cutscenes — a detail the Gears themselves do not reproduce on missions.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Darker Than Dark", url: "https://kingdomhearts.fandom.com/wiki/Darker_Than_Dark" }],
  },

  "astral-blast": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Astral Blast joue sur les bleus clairs et les motifs d'étoiles, ce qui la rattache au petit ensemble « céleste » de 358/2 Days, avec Total Eclipse et Lunar Eclipse. Sa lame fine et ses ornements pointus suggèrent la vitesse plus que la force.\n\nLe ciel est un motif obsédant de cet épisode : Kingdom Hearts, immense cœur de lune, domine le Monde qui n'existe pas, et l'Organisation XIII y voit l'aboutissement de tous ses efforts. Nommer une Keyblade d'après une déflagration astrale, c'est renvoyer Roxas à ce que ses missions servent réellement à construire.",
          "Astral Blast plays on light blues and star motifs, tying it to the small “celestial” set of 358/2 Days alongside Total Eclipse and Lunar Eclipse. Its slim blade and pointed ornaments suggest speed more than strength.\n\nThe sky is an obsessive motif in this game: Kingdom Hearts, an enormous heart-shaped moon, hangs over The World That Never Was, and Organization XIII sees in it the goal of all its work. Naming a Keyblade after an astral blast points Roxas back at what his missions are really building.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Astral Blast est liée au Gear Agile, panneau qui accélère les enchaînements de Roxas. Elle convient aux joueurs qui préfèrent multiplier les coups rapides plutôt que frapper fort, une approche efficace dans les missions notées à la vitesse d'exécution.\n\nSa version renforcée, le Gear Agile +, donne Maverick Flare, qui troque le bleu pour le feu. Ce fonctionnement par paires — un Gear, un Gear « + », deux apparences liées — structure toute la collection : vingt-cinq modèles au total pour une seule et même Chaîne Royale.",
          "Astral Blast is tied to the Nimble Gear, a panel that speeds up Roxas's attack chains. It suits players who prefer many quick hits to heavy blows, an effective approach in missions scored on speed.\n\nIts upgraded version, the Nimble Gear+, grants Maverick Flare, which trades blue for fire. This pairing — a Gear, a “+” Gear, two linked looks — structures the whole collection: twenty-five models in all for one and the same Kingdom Key.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Astral Blast", url: "https://kingdomhearts.fandom.com/wiki/Astral_Blast" }],
  },

  "maverick-flare": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Maverick Flare troque les bleus d'Astral Blast pour des rouges et des oranges ardents, avec des dents en forme de flammes. C'est l'une des variantes les plus voyantes de 358/2 Days.\n\nSon vocabulaire — le franc-tireur, l'embrasement — évoque immanquablement Axel, seul membre de l'Organisation XIII à s'attacher réellement à Roxas et à Xion, et seul maître du feu de la maison. Le rapprochement n'est jamais dit par le jeu, mais la palette et le nom placent cette Keyblade du côté du personnage qui aura tout tenté pour retenir Roxas.",
          "Maverick Flare swaps Astral Blast's blues for fiery reds and oranges, with flame-shaped teeth. It is one of the flashiest variants in 358/2 Days.\n\nIts vocabulary — the maverick, the flare — inevitably calls Axel to mind, the only member of Organization XIII who truly grows attached to Roxas and Xion, and the house's only master of fire. The game never states the link, but palette and name put this Keyblade on the side of the character who tried hardest to keep Roxas.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Maverick Flare s'obtient avec le Gear Agile +, version renforcée du panneau d'Astral Blast. Elle conserve la vitesse d'exécution propre à cette famille tout en offrant des valeurs supérieures, ce qui en fait l'une des variantes les plus efficaces avant les panneaux ultimes du jeu.\n\nComme toutes les apparences de Days, elle disparaît avec le système : ni Kingdom Hearts II ni les épisodes suivants ne reprennent les Gears, et Roxas y manie exclusivement la Chaîne Royale, Tendre Promesse et Souvenir Perdu.",
          "Maverick Flare is obtained with the Nimble Gear+, the upgraded version of Astral Blast's panel. It keeps the family's fast execution while offering higher values, making it one of the most effective variants before the game's ultimate panels.\n\nLike every look in Days, it vanishes with the system: neither Kingdom Hearts II nor the later games bring the Gears back, and Roxas there wields only the Kingdom Key, Oathkeeper and Oblivion.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Maverick Flare", url: "https://kingdomhearts.fandom.com/wiki/Maverick_Flare" }],
  },

  "silent-dirge": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Silent Dirge affiche des gris sourds et une lame effilée, sans ornement inutile : c'est l'une des apparences les plus austères de 358/2 Days. Son nom désigne un chant funèbre silencieux, formule paradoxale qui dit bien la situation des Similis, censés pleurer sans en avoir le droit.\n\nIl est difficile de ne pas y entendre le destin de Xion, dont la disparition efface jusqu'au souvenir qu'on avait d'elle : personne, dans l'Organisation XIII, ne pourra chanter son deuil, et Roxas lui-même oublie son nom quelques instants après l'avoir tenue dans ses bras.",
          "Silent Dirge shows muted greys and a slender blade with no needless ornament: one of the most austere looks in 358/2 Days. Its name means a soundless funeral song, a paradox that suits Nobodies, expected to grieve without the right to do so.\n\nIt is hard not to hear Xion's fate in it: her passing erases even the memory of her, so no one in Organization XIII will be able to sing her mourning, and Roxas himself forgets her name moments after holding her in his arms.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Silent Dirge fait partie des apparences avancées de Roxas, liées à un Gear « + » obtenu dans la seconde moitié des missions. Elle se distingue par sa portée, appréciable dans les missions où le numéro XIII opère seul face à des groupes de Sans-cœur.\n\nRécupérer tous ces panneaux constitue l'un des objectifs de complétion du jeu : les Gears se gagnent en accomplissant les missions et leurs objectifs annexes, et la collection complète n'est atteinte que très tard, quand le calendrier de Roxas touche à sa fin et que le mode Mission devient le principal terrain de jeu.",
          "Silent Dirge is one of Roxas's advanced looks, tied to a “+” Gear obtained in the second half of the missions. It stands out for its reach, welcome when Number XIII operates alone against groups of Heartless.\n\nCollecting all these panels is one of the game's completion goals: Gears are earned by clearing missions and their secondary objectives, and the full set is only reached very late, as Roxas's calendar runs out and Mission Mode becomes the main playground.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Silent Dirge", url: "https://kingdomhearts.fandom.com/wiki/Silent_Dirge" }],
  },

  "lunar-eclipse": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Lunar Eclipse arbore un croissant de lune et des teintes violettes qui renvoient immédiatement au Kingdom Hearts artificiel de l'Organisation XIII, ce cœur lumineux suspendu au-dessus du Monde qui n'existe pas. La lame, sombre, semble découpée dans la nuit qui l'entoure.\n\nL'éclipse est le motif central de ce petit groupe de Keyblades : Total Eclipse, Lunar Eclipse et Darker Than Dark racontent, de nom en nom, l'extinction progressive d'une lumière. Le parallèle avec l'année de Roxas, qui se termine par sa propre disparition dans Sora, est difficile à ignorer.",
          "Lunar Eclipse bears a crescent moon and purple hues that point straight at Organization XIII's artificial Kingdom Hearts, the glowing heart hanging above The World That Never Was. The dark blade looks cut out of the night around it.\n\nThe eclipse is the central motif of this small group of Keyblades: Total Eclipse, Lunar Eclipse and Darker Than Dark tell, name by name, the gradual snuffing out of a light. The parallel with Roxas's year, which ends in his own disappearance into Sora, is hard to miss.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Lunar Eclipse s'obtient avec un Gear de la seconde moitié de l'aventure, une fois que l'Organisation XIII confie à Roxas des missions plus exigeantes. Sa puissance en fait l'une des apparences les plus utiles avant les panneaux ultimes du jeu.\n\nLe principe reste le même que pour les autres : la Keyblade de Roxas est toujours la Chaîne Royale, et seul le Gear équipé dans son panneau détermine ce que le joueur voit et les valeurs de combat obtenues. Retirer le panneau fait aussitôt réapparaître la forme d'origine.",
          "Lunar Eclipse is obtained with a Gear from the second half of the adventure, once Organization XIII starts handing Roxas tougher assignments. Its power makes it one of the most useful looks before the game's ultimate panels.\n\nThe principle is unchanged: Roxas's Keyblade is always the Kingdom Key, and only the Gear slotted into his panel determines what the player sees and the combat values obtained. Remove the panel and the original shape returns at once.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lunar Eclipse", url: "https://kingdomhearts.fandom.com/wiki/Lunar_Eclipse" }],
  },

  "twilight-blaze": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Orange et rouge, Twilight Blaze reprend exactement les couleurs du coucher de soleil que Roxas contemple chaque soir depuis la tour de l'horloge de la Cité du Crépuscule, une glace à l'eau de mer à la main. Sa lame évoque des flammes figées au moment où le jour bascule.\n\nC'est sans doute la variante la plus chargée de sens du jeu : le crépuscule est le décor du seul bonheur de Roxas, mais aussi la métaphore de son statut — ni lumière ni ténèbres, entre-deux permanent, comme la ville où DiZ finira par l'enfermer dans une existence factice.",
          "Orange and red, Twilight Blaze takes exactly the colours of the sunset Roxas watches every evening from the Twilight Town clock tower, sea-salt ice cream in hand. Its blade suggests flames frozen at the moment day tips over.\n\nIt is probably the most meaning-laden variant in the game: twilight frames Roxas's only happiness, but it is also the metaphor for his status — neither light nor darkness, permanently in between, like the town where DiZ will finally lock him into a fabricated life.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Twilight Blaze compte parmi les apparences les plus puissantes de 358/2 Days et demande un Gear de haut rang, obtenu dans les dernières missions confiées à Roxas. Elle arrive donc au moment où le récit se resserre : Xion s'effondre, Axel se retrouve pris entre son amitié et ses ordres, et Roxas s'apprête à partir.\n\nComme les autres panneaux rares, ce Gear se gagne en accomplissant les missions et leurs objectifs annexes, et il occupe une part importante du panneau, obligeant le joueur à sacrifier des cases consacrées aux niveaux ou aux magies.",
          "Twilight Blaze is among the most powerful looks in 358/2 Days and requires a high-rank Gear obtained in the last missions given to Roxas. It therefore arrives as the story tightens: Xion collapses, Axel is caught between friendship and orders, and Roxas is about to walk away.\n\nLike the other rare panels, this Gear is earned by clearing missions and their secondary objectives, and it takes up a large share of the panel, forcing the player to sacrifice cells otherwise given to levels or magic.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Twilight Blaze", url: "https://kingdomhearts.fandom.com/wiki/Twilight_Blaze" }],
  },

  "omega-weapon": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Omega Weapon est la variante la plus massive de Roxas : argent et bleu, silhouette large, ornements anguleux qui l'éloignent nettement de la sobriété de la Chaîne Royale. Son nom renvoie au super-boss récurrent de Final Fantasy, l'un des nombreux ponts que Kingdom Hearts jette vers la série de Square.\n\nLa lettre oméga désigne la fin, ce qui convient à une arme de dernier palier dans un jeu dont le titre annonce déjà une soustraction : trois cent cinquante-huit jours divisés par deux, la durée exacte qui sépare l'éveil de Roxas de sa disparition.",
          "Omega Weapon is Roxas's heaviest look: silver and blue, broad in outline, with angular ornaments far removed from the Kingdom Key's plainness. Its name points to Final Fantasy's recurring superboss, one of the many bridges Kingdom Hearts throws toward Square's series.\n\nThe letter omega means the end, fitting for a final-tier weapon in a game whose title already announces a subtraction: three hundred fifty-eight days divided by two, the exact span between Roxas's awakening and his disappearance.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Omega Weapon demande le Gear Omega, panneau rare qui n'est accessible que très tard dans 358/2 Days. Elle joue le rôle que tiennent les Keyblades de synthèse dans les autres épisodes : une récompense de complétion, réservée aux joueurs qui ont accompli les missions et leurs objectifs annexes.\n\nElle est aussi l'apparence la plus efficace du mode Mission, où l'on rejoue les contrats avec les autres membres de l'Organisation XIII. Comme les autres Gears, elle ne modifie rien au récit : dans les cinématiques, Roxas brandit toujours la Chaîne Royale, puis Tendre Promesse et Souvenir Perdu.",
          "Omega Weapon requires the Omega Gear, a rare panel available only very late in 358/2 Days. It plays the part the synthesis Keyblades play in the other games: a completion reward, reserved for players who have cleared the missions and their secondary objectives.\n\nIt is also the most effective look in Mission Mode, where contracts are replayed with the other members of Organization XIII. Like every Gear it changes nothing in the story: in cutscenes Roxas still raises the Kingdom Key, then Oathkeeper and Oblivion.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Omega Weapon", url: "https://kingdomhearts.fandom.com/wiki/Omega_Weapon" }],
  },

  "umbrella": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Umbrella n'est pas une Keyblade : c'est un parapluie blanc tout ce qu'il y a de plus ordinaire, que Roxas brandit exactement comme il brandirait la Chaîne Royale. L'effet comique tient à ce décalage, renforcé par le sérieux imperturbable des animations, qui n'ont pas été retouchées.\n\nLe gag s'inscrit dans une tradition de la saga, des épées de bois des Îles du Destin aux armes de la Ville de Traverse : Kingdom Hearts aime rappeler que l'arme compte moins que le cœur qui la tient — même si, ici, la démonstration tourne au sketch.",
          "Umbrella is not a Keyblade at all: it is a perfectly ordinary white umbrella that Roxas brandishes exactly as he would the Kingdom Key. The comedy comes from that gap, sharpened by the unruffled seriousness of the animations, which were left untouched.\n\nThe joke belongs to a series tradition, from the wooden swords of Destiny Islands to the makeshift weapons of Traverse Town: Kingdom Hearts likes to insist that the weapon matters less than the heart holding it — even if here the demonstration turns into a skit.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Umbrella s'obtient en équipant le Gear Décontracté dans le panneau de Roxas. Ce panneau particulier remplace l'arme de chaque membre de l'Organisation XIII par un objet du quotidien : le numéro XIII hérite du parapluie, tandis que les autres se retrouvent avec des ustensiles tout aussi improbables en mode Mission.\n\nSans grande valeur au combat, ce Gear existe surtout pour l'amusement et pour les défis que s'imposent les joueurs. Il montre que le système de panneaux ne sert pas seulement à équilibrer les statistiques : il est aussi le terrain de jeu cosmétique de 358/2 Days.",
          "Umbrella is obtained by slotting the Casual Gear into Roxas's panel. That particular panel replaces each Organization XIII member's weapon with an everyday object: Number XIII gets the umbrella, while the others end up with equally improbable implements in Mission Mode.\n\nOf little combat value, this Gear exists mainly for fun and for self-imposed player challenges. It shows that the panel system is not only about balancing stats: it is also the cosmetic playground of 358/2 Days.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Umbrella", url: "https://kingdomhearts.fandom.com/wiki/Umbrella" }],
  },

  "aubade": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Aubade doit son nom à un genre poétique et musical : le chant de l'aube, que l'on oppose traditionnellement à la sérénade du soir. Ses teintes claires et chaudes traduisent cette idée de lever du jour.\n\nLe choix est presque provocant dans un jeu où tout ramène au crépuscule : la Cité du Crépuscule, Twilight Blaze, la lumière déclinante sur la tour de l'horloge. Aubade propose l'inverse, un début plutôt qu'une fin — ce qui, pour Roxas, ne sera vrai qu'après coup, lorsque son histoire reprendra dans Kingdom Hearts III et qu'il retrouvera Axel et Xion.",
          "Aubade takes its name from a poetic and musical form: the song of dawn, traditionally opposed to the evening serenade. Its light, warm tones carry that idea of daybreak.\n\nThe choice is almost provocative in a game where everything leads back to twilight: Twilight Town, Twilight Blaze, the fading light on the clock tower. Aubade offers the opposite, a beginning rather than an end — which for Roxas only comes true after the fact, when his story resumes in Kingdom Hearts III and he finds Axel and Xion again.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Aubade correspond au Gear Mystère, un panneau rare qui attribue à chaque membre de l'Organisation XIII une arme surprenante — un pendant sérieux au Gear Décontracté et à son parapluie. Chez Roxas, il donne cette Keyblade claire, orientée vers les attaques rapides et la fluidité des enchaînements.\n\nComme les autres panneaux inhabituels, il récompense la complétion : c'est en accomplissant les missions et leurs objectifs annexes que le joueur finit par débloquer l'ensemble des apparences, dont plusieurs n'ont d'autre intérêt que la curiosité qu'elles suscitent.",
          "Aubade corresponds to the Mystery Gear, a rare panel that gives each Organization XIII member a surprising weapon — a serious counterpart to the Casual Gear and its umbrella. For Roxas it yields this bright Keyblade, geared toward quick attacks and smooth chains.\n\nLike the other unusual panels it rewards completion: by clearing missions and their secondary objectives the player eventually unlocks the whole set of looks, several of which exist for curiosity alone.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Aubade", url: "https://kingdomhearts.fandom.com/wiki/Aubade" }],
  },

  // ─────────────────────────── Variantes bonus de Kingdom Hearts III ───────────────────────────
  "midnight-blue": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Midnight Blue est une Chaîne Royale repeinte : même lame, même garde carrée, même porte-clés à trois cercles, mais dans un camaïeu de bleu nuit qui donne à l'arme un aspect métallique et froid.\n\nLe principe de ces variantes est celui du costume alternatif : Kingdom Hearts III propose plusieurs recolorations de sa Keyblade emblématique, chacune associée à une plateforme ou à un revendeur. Elles ne changent rien au récit et n'apparaissent pas dans les cinématiques, mais elles permettent au joueur d'accompagner tout le voyage de Sora avec une Chaîne Royale à ses couleurs.",
          "Midnight Blue is a repainted Kingdom Key: the same blade, the same square guard, the same three-circle keychain, in a midnight-blue palette that gives the weapon a cold, metallic look.\n\nThese variants work like alternate costumes: Kingdom Hearts III offers several recolours of its signature Keyblade, each tied to a platform or a retailer. They change nothing in the story and do not appear in cutscenes, but they let the player travel all of Sora's journey with a Kingdom Key in their own colours.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Midnight Blue a été distribuée comme bonus de précommande de Kingdom Hearts III sur PlayStation 4. Elle est disponible dès le début de la partie, à condition d'avoir récupéré le contenu correspondant, et se sélectionne comme n'importe quel autre porte-clés depuis le menu.\n\nComme les autres recolorations, elle reprend la transformation Seconde Forme de la Chaîne Royale, qui ressuscite les techniques emblématiques des premiers épisodes. Sa capacité est orientée vers l'élément Glace, ce qui la différencie de Phantom Green et de Dawn Till Dusk, associées respectivement à la Foudre et au Feu.",
          "Midnight Blue was distributed as a PlayStation 4 pre-order bonus for Kingdom Hearts III. It is available from the start of the game, provided the matching content has been redeemed, and is selected like any other keychain from the menu.\n\nLike the other recolours it reuses the Kingdom Key's Second Form formchange, which revives signature techniques from the early games. Its ability leans on the Blizzard element, setting it apart from Phantom Green and Dawn Till Dusk, tied respectively to Thunder and Fire.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Midnight Blue", url: "https://kingdomhearts.fandom.com/wiki/Midnight_Blue" }],
  },

  "phantom-green": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Phantom Green décline la Chaîne Royale en vert profond, avec des reflets qui évoquent une lueur spectrale — d'où son nom. La silhouette, elle, reste rigoureusement identique à celle de l'arme d'origine : dents en couronne, garde carrée, chaîne et porte-clés Mickey.\n\nCes recolorations forment un trio complémentaire dans Kingdom Hearts III, chacune associée à un élément et à une plateforme de sortie. Leur intérêt est avant tout esthétique : elles offrent au joueur une Chaîne Royale personnalisée sans toucher à son rôle symbolique de Keyblade « de base » du Domaine de la Lumière.",
          "Phantom Green renders the Kingdom Key in deep green, with highlights suggesting a spectral glow — hence the name. The silhouette stays strictly identical to the original weapon: crown teeth, square guard, chain and Mickey keychain.\n\nThese recolours form a complementary trio in Kingdom Hearts III, each tied to an element and to a release platform. Their appeal is chiefly cosmetic: they give the player a personalised Kingdom Key without touching its symbolic role as the default Keyblade of the Realm of Light.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Phantom Green a été proposée en bonus de précommande de Kingdom Hearts III sur Xbox One. Elle s'utilise dès les premières heures de jeu et reste sélectionnable pendant toute l'aventure, jusqu'au Nécropole des Keyblades.\n\nComme Midnight Blue et Dawn Till Dusk, elle possède la transformation Seconde Forme et une capacité orientée vers un élément, la Foudre. Elle peut être renforcée à la forge des Mogs comme n'importe quel autre porte-clés, ce qui lui permet de rester viable en fin de partie pour les joueurs qui préfèrent conserver l'allure de la Chaîne Royale.",
          "Phantom Green was offered as an Xbox One pre-order bonus for Kingdom Hearts III. It can be used from the first hours of play and stays selectable throughout the adventure, all the way to the Keyblade Graveyard.\n\nLike Midnight Blue and Dawn Till Dusk it carries the Second Form formchange and an element-oriented ability, here Thunder. It can be upgraded at the Moogle forge like any other keychain, which keeps it viable late in the game for players who would rather keep the Kingdom Key's look.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Phantom Green", url: "https://kingdomhearts.fandom.com/wiki/Phantom_Green" }],
  },

  "dawn-till-dusk": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Dawn Till Dusk habille la Chaîne Royale d'orange et de rouge, les couleurs du crépuscule chères à la saga depuis la Cité du Crépuscule et la tour de l'horloge. Son nom, « de l'aube au crépuscule », embrasse la journée entière.\n\nElle complète le trio de recolorations de Kingdom Hearts III avec Midnight Blue et Phantom Green, chacune tirant la même arme vers un élément et une ambiance différents. Le procédé rappelle que la Chaîne Royale est, dans la saga, moins un objet qu'une forme : un dessin que le jeu peut décliner à l'infini sans jamais en changer le sens.",
          "Dawn Till Dusk dresses the Kingdom Key in orange and red, the twilight colours dear to the series since Twilight Town and its clock tower. Its name, from dawn till dusk, takes in a whole day.\n\nIt completes Kingdom Hearts III's trio of recolours alongside Midnight Blue and Phantom Green, each pulling the same weapon toward a different element and mood. The device is a reminder that the Kingdom Key is less an object than a shape: a design the games can restyle endlessly without ever changing its meaning.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Dawn Till Dusk a été distribuée en bonus de précommande de Kingdom Hearts III chez certains revendeurs, dont Amazon. Elle est utilisable dès le début de la partie une fois le contenu récupéré.\n\nSa capacité est liée à l'élément Feu et sa transformation reste la Seconde Forme, commune à toute la famille de la Chaîne Royale. Comme ses jumelles, elle se renforce à la forge des Mogs et bénéficie donc des mêmes paliers d'amélioration : elle constitue une option purement cosmétique pour les joueurs attachés à la silhouette de la Keyblade d'origine.",
          "Dawn Till Dusk was distributed as a Kingdom Hearts III pre-order bonus at selected retailers, Amazon among them. It can be used from the start of the game once the content has been redeemed.\n\nIts ability is tied to the Fire element and its formchange remains Second Form, shared by the whole Kingdom Key family. Like its siblings it is upgraded at the Moogle forge and enjoys the same improvement tiers: a purely cosmetic option for players attached to the original Keyblade's silhouette.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dawn Till Dusk", url: "https://kingdomhearts.fandom.com/wiki/Dawn_Till_Dusk" }],
  },

  "elemental-encoder": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Elemental Encoder est une Keyblade bleue parcourue de motifs de circuits, très proche de l'imagerie numérique des mondes de données : blocs lumineux, lignes géométriques et couleurs froides rappellent le Journal de Jiminy piraté de Re:coded ou les décors de Space Paranoids.\n\nSon nom associe les éléments et le codage, une manière de résumer sa fonction : elle est pensée pour les joueurs qui misent sur la magie élémentaire. Elle prolonge ainsi une longue tradition de Keyblades « informatiques » dans la saga, dont Debugger Photon est l'exemple le plus connu.",
          "Elemental Encoder is a blue Keyblade covered in circuit patterns, close to the digital imagery of the data worlds: glowing blocks, geometric lines and cold colours recall the corrupted Jiminy's Journal of Re:coded or the sets of Space Paranoids.\n\nIts name pairs elements with encoding, which sums up its purpose: it is built for players who rely on elemental magic. It continues the series' long line of “computer” Keyblades, of which Photon Debugger is the best-known example.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Elemental Encoder est une Keyblade bonus de Kingdom Hearts III, d'abord réservée à certaines éditions et opérations promotionnelles au Japon, puis rendue accessible plus largement aux joueurs.\n\nComme les autres porte-clés de l'épisode, elle se sélectionne depuis le menu, se renforce à la forge des Mogs et dispose de sa propre transformation. Son orientation la place du côté des trois magies de base — Feu, Glace et Foudre — qu'elle vient renforcer, ce qui en fait une option intéressante pour un Sora bâti autour de la magie plutôt que du corps à corps et des Attractions.",
          "Elemental Encoder is a bonus Keyblade in Kingdom Hearts III, at first limited to certain editions and promotional campaigns in Japan, then made more widely available to players.\n\nLike the game's other keychains it is picked from the menu, upgraded at the Moogle forge and comes with its own formchange. Its orientation places it alongside the three basic spells — Fire, Blizzard and Thunder — which it strengthens, making it an appealing option for a Sora built around magic rather than melee and Attractions.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Elemental Encoder", url: "https://kingdomhearts.fandom.com/wiki/Elemental_Encoder" }],
  },

  "advent-red": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Advent Red joue sur un rouge sombre et un noir mat, une palette inhabituelle pour une Keyblade et immédiatement identifiable. Son nom renvoie à Final Fantasy VII: Advent Children, le film dont Kingdom Hearts II avait déjà emprunté l'apparence de Cloud et de Sephiroth.\n\nCe clin d'œil rappelle la porosité entre les deux séries : Square Enix a peuplé les premiers Kingdom Hearts de héros de Final Fantasy, et les jeux plus récents continuent de citer cet héritage, ne serait-ce que par un porte-clés ou une couleur.",
          "Advent Red plays on dark red and matte black, an unusual and instantly recognisable palette for a Keyblade. Its name points to Final Fantasy VII: Advent Children, the film from which Kingdom Hearts II had already borrowed the looks of Cloud and Sephiroth.\n\nThe nod is a reminder of how porous the two series are: Square Enix filled the early Kingdom Hearts games with Final Fantasy heroes, and the later titles keep quoting that heritage, if only through a keychain or a colour.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Advent Red est, comme Elemental Encoder, une Keyblade bonus de Kingdom Hearts III, d'abord liée à des éditions et à des opérations promotionnelles japonaises avant d'être proposée plus largement.\n\nElle se joue comme les autres porte-clés du jeu : sélection depuis le menu, renforcement à la forge des Mogs et transformation dédiée. Son profil privilégie la force et les enchaînements plutôt que la magie, ce qui la destine à un Sora offensif. Elle reste disponible dès le début de l'aventure, sans lien avec la progression du scénario.",
          "Advent Red is, like Elemental Encoder, a bonus Keyblade in Kingdom Hearts III, at first tied to Japanese editions and promotional campaigns before being offered more widely.\n\nIt plays like the game's other keychains: chosen from the menu, upgraded at the Moogle forge and equipped with its own formchange. Its profile favours strength and combos over magic, which suits an aggressive Sora. It remains available from the start of the adventure, with no link to story progress.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Advent Red", url: "https://kingdomhearts.fandom.com/wiki/Advent_Red" }],
  },

  // ─────────────────────────── Autres ───────────────────────────
  "wooden-keyblade": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "La Keyblade de bois est une réplique d'entraînement taillée dans le bois, à la forme de la Chaîne Royale : lame plate, dents grossièrement découpées, aucune garde métallique. Elle n'a aucun pouvoir et ne peut ni sceller une serrure ni libérer un cœur.\n\nSa valeur est entièrement symbolique. Elle est le jouet de ceux qui rêvent de devenir Maîtres de la Keyblade avant d'en être dignes, comme les épées de bois avec lesquelles Sora et Riku s'affrontent sur les Îles du Destin — objets sans magie que la saga charge pourtant de tout le poids de l'enfance et des promesses qu'on y fait.",
          "The Wooden Keyblade is a practice replica carved from wood, shaped like the Kingdom Key: a flat blade, roughly cut teeth, no metal guard. It has no power and can neither seal a keyhole nor release a heart.\n\nIts value is entirely symbolic. It is the toy of those who dream of becoming Keyblade Masters before they are worthy of it, much like the wooden swords Sora and Riku duel with on Destiny Islands — objects without magic that the series nonetheless loads with all the weight of childhood and the promises made there.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Dans Birth by Sleep, la Keyblade de bois appartient à Terra, qui la donne à Ventus peu après l'arrivée de ce dernier à la Contrée du Départ, alors que le garçon amnésique ne parle presque pas encore. Le geste scelle leur amitié et fait de cet objet sans pouvoir l'un des rares souvenirs heureux du trio, avec les porte-bonheur d'Aqua.\n\nOn retrouve la même idée dans Kingdom Hearts : lorsque Riku prend la Chaîne Royale à la Forteresse Oubliée, Sora se retrouve avec une simple épée de bois — et c'est en choisissant malgré tout de protéger ses amis qu'il la voit revenir à lui.",
          "In Birth by Sleep the Wooden Keyblade belongs to Terra, who gives it to Ventus shortly after the boy arrives in the Land of Departure, while the amnesiac newcomer can barely speak. The gesture seals their friendship and makes this powerless object one of the trio's rare happy keepsakes, alongside Aqua's charms.\n\nThe same idea returns in Kingdom Hearts: when Riku takes the Kingdom Key at Hollow Bastion, Sora is left with a plain wooden sword — and it is by choosing to protect his friends anyway that he sees the Keyblade come back to him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wooden Keyblade", url: "https://kingdomhearts.fandom.com/wiki/Wooden_Keyblade" }],
  },

  "moogle-o-glory": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Moogle O' Glory est une Keyblade blanche et rose ornée de petites ailes de chauve-souris et d'un pompon rouge : le portrait exact d'un Mog. Ces créatures venues de Final Fantasy tiennent, dans toute la saga, les boutiques, les ateliers de synthèse et les forges où l'on améliore les Keyblades.\n\nLeur donner une arme à leur effigie relève de l'hommage affectueux, dans la lignée des Keyblades décalées de la série. Le jeu de mots du nom — la gloire du Mog — souligne le contraste entre l'apparence attendrissante de ces marchands et le rôle décisif qu'ils jouent dans l'équipement des porteurs.",
          "Moogle O' Glory is a white-and-pink Keyblade decorated with small bat wings and a red pom-pom: the exact portrait of a Moogle. These creatures, brought over from Final Fantasy, run the shops, synthesis workshops and forges where Keyblades are upgraded throughout the series.\n\nGiving them a weapon in their image is an affectionate tribute, in the vein of the series' more playful Keyblades. The pun in the name underlines the contrast between the endearing look of these shopkeepers and the decisive role they play in equipping wielders.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
      "Moogle O' Glory est une Keyblade propre à Kingdom Hearts Union χ, le jeu mobile qui prolonge l'histoire de l'Âge des Fées et des cinq Unions fondées par les Prophètes. Le joueur y incarne un Porteur anonyme équipé d'une Keyblade et de médailles représentant les personnages de la saga.\n\nComme les autres armes du jeu, elle se débloque au fil des quêtes puis se renforce par paliers grâce aux matériaux récoltés en mission. Chaque palier ouvre de nouveaux emplacements de médailles et améliore les bonus accordés, ce qui fait du choix de Keyblade une décision de construction de deck plus qu'une question d'apparence.",
          "Moogle O' Glory is a Keyblade unique to Kingdom Hearts Union χ, the mobile game that extends the story of the Age of Fairy Tales and the five Unions founded by the Foretellers. The player takes on a nameless wielder equipped with a Keyblade and with medals depicting the series' characters.\n\nLike the game's other weapons it is unlocked through quests, then upgraded in tiers using materials gathered on missions. Each tier opens new medal slots and improves the bonuses granted, which makes the choice of Keyblade a deck-building decision more than a question of looks.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Moogle O' Glory", url: "https://kingdomhearts.fandom.com/wiki/Moogle_O%27_Glory" }],
  },
};
