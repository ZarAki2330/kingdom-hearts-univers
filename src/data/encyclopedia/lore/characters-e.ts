import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des personnages (lot E) : les apprentis d'Ansem le Sage et leurs
 * formes humaines recomplétées, les porteurs de Daybreak Town, les doubles de données
 * de Re:coded, les réceptacles de la véritable Organisation XIII et quelques figures
 * secondaires des Îles du Destin et de la Cité du Crépuscule.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Xehanort (l'apprenti) ───────────────────────────
  // ─────────────────────────── Even ───────────────────────────
  "even": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Even est le savant en chef d'Ansem le Sage, un homme grand et blond au ton pointilleux, plus attaché à la rigueur de l'expérience qu'à ses conséquences. Comme les autres apprentis, son nom est l'anagramme de celui de son Simili augmentée d'un « x » : Even donne Vexen. La série le présente comme l'inventeur du programme des Réplicas, ces corps artificiels capables d'accueillir un cœur.\n\nSa personnalité éclaire rétrospectivement celle de Vexen, numéro IV de l'Organisation XIII et « Savant glacial » : la même arrogance de laboratoire, la même conviction que tout, y compris le cœur, finit par se laisser mesurer. Sa recomplétion en fait l'un des rares personnages de la saga à obtenir une seconde chance après avoir servi les ténèbres.",
          "Even is Ansem the Wise's chief scientist, a tall blond man with a fastidious tone, more attached to experimental rigour than to its consequences. Like the other apprentices, his name is his Nobody's anagram minus an “x”: Even yields Vexen. The series presents him as the inventor of the Replica program, artificial bodies able to house a heart.\n\nHis personality retroactively lights up Vexen's, Number IV of Organization XIII and the “Chilly Academic”: the same laboratory arrogance, the same conviction that everything, the heart included, can eventually be measured. His recompletion makes him one of the rare characters in the saga to get a second chance after serving the darkness.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dix ans avant le premier jeu, Even travaille déjà au château du Jardin Radieux. Il croise Terra, Ventus et Aqua lors de leur passage, et s'intéresse surtout au jeune Ienzo, orphelin recueilli par Ansem le Sage, dont il devient le tuteur scientifique.\n\nC'est de cette époque que datent les premières dérives. Avec Braig et le nouvel apprenti Xehanort, Even participe aux travaux menés dans les salles souterraines, où l'on cherche à comprendre ce qui se cache au fond du cœur des gens. Ansem le Sage finit par interdire ces recherches ; les apprentis les poursuivent en cachette, jusqu'à provoquer l'apparition des Sans-cœur et la chute du monde.",
          "Ten years before the first game, Even already works at the Radiant Garden castle. He meets Terra, Ventus and Aqua during their visits, and takes a particular interest in young Ienzo, an orphan taken in by Ansem the Wise, whose scientific guardian he becomes.\n\nThe first excesses date from this period. With Braig and the new apprentice Xehanort, Even takes part in the work carried out in the underground chambers, where they seek to understand what lies at the bottom of people's hearts. Ansem the Wise eventually bans the research; the apprentices continue in secret, until the Heartless appear and the world falls.",
        ),
      },
      {
        title: L("La perte du cœur", "Losing his heart"),
        text: L(
          "Les expériences finissent par se retourner contre leurs auteurs. Après avoir banni Ansem le Sage dans le Domaine des Ténèbres, les six apprentis se laissent engloutir par les ténèbres qu'ils étudiaient : leurs cœurs leur sont arrachés et leurs corps produisent des Similis d'une puissance rare.\n\nEven devient Vexen et rejoint l'Organisation XIII naissante, où il poursuit ses travaux sur la mémoire et les corps de substitution. C'est lui qui fabrique le Réplica de Riku et qui, au Manoir Oblivion, tente de manipuler Sora à l'aide de ses souvenirs. Marluxia le juge trop imprévisible et charge Axel de l'éliminer : Vexen est détruit dans les sous-sols du château, premier membre de l'Organisation à disparaître.",
          "The experiments eventually turn on those who ran them. After banishing Ansem the Wise into the Realm of Darkness, the six apprentices let themselves be swallowed by the darkness they studied: their hearts are torn from them and their bodies produce unusually powerful Nobodies.\n\nEven becomes Vexen and joins the fledgling Organization XIII, where he pursues his work on memory and substitute bodies. He is the one who builds the Riku Replica and who, in Castle Oblivion, tries to manipulate Sora using his memories. Marluxia judges him too unpredictable and orders Axel to eliminate him: Vexen is destroyed in the castle basements, the first Organization member to fall.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Recomplété comme les autres apprentis, Even réapparaît au laboratoire du Jardin Radieux aux côtés d'Ienzo, d'Aeleus et de Dilan. Rongé par le remords, il propose de racheter ses fautes de la seule manière qu'il connaisse : relancer le programme des Réplicas pour offrir des corps aux cœurs qu'il a contribué à briser.\n\nPour cela, il accepte de reprendre l'identité de Vexen et d'infiltrer la véritable Organisation XIII. Au Cimetière des Keyblades, il révèle son double jeu, remet à Ansem le Sage la réplique destinée à Roxas et se range du côté de Sora. Ses travaux permettent le retour de Roxas, de Xion et, plus tard, de Naminé. L'épilogue le montre au Jardin Radieux, savant redevenu utile, occupé à réparer ce que ses expériences avaient défait.",
          "Recompleted like the other apprentices, Even reappears in the Radiant Garden laboratory alongside Ienzo, Aeleus and Dilan. Gnawed by remorse, he offers to atone in the only way he knows: restarting the Replica program to give bodies to the hearts he helped shatter.\n\nTo do so he agrees to take up Vexen's identity again and infiltrate the real Organization XIII. At the Keyblade Graveyard he reveals his double game, hands Ansem the Wise the replica meant for Roxas and sides with Sora. His work allows Roxas, Xion and later Naminé to return. The epilogue shows him in Radiant Garden, a scientist made useful again, busy repairing what his experiments had undone.",
        ),
      },
    ],
    trivia: [
      L("« Even » est l'anagramme de « Vexen » privée du x, règle appliquée à tous les Similis issus des apprentis d'Ansem.", "“Even” is the anagram of “Vexen” without the x, a rule applied to every Nobody born from Ansem's apprentices."),
      L("Nachi Nozawa, sa voix japonaise dans Birth by Sleep, est décédé en 2010 ; Kenjiro Tsuda lui succède pour Kingdom Hearts III.", "Nachi Nozawa, his Japanese voice in Birth by Sleep, died in 2010; Kenjiro Tsuda took over for Kingdom Hearts III."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Even", url: "https://kingdomhearts.fandom.com/wiki/Even" }],
  },

  // ─────────────────────────── Ienzo ───────────────────────────
  "ienzo": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Ienzo est le plus jeune des apprentis d'Ansem le Sage : un enfant orphelin, silencieux, à la mèche bleutée, que le souverain du Jardin Radieux recueille et élève presque comme un fils. Son nom donne Zexion, le « Prestidigitateur lunaire », numéro VI de l'Organisation XIII, dont l'arme est un lexique et le pouvoir l'illusion.\n\nLà où les autres apprentis reparaissent surtout comme figures de fond, Ienzo devient dans Kingdom Hearts III un personnage à part entière : c'est lui qui tient le laboratoire du Jardin Radieux, dialogue avec Sora par Gummiphone et reconstitue patiemment les données laissées par son maître. Son parcours illustre le thème de la seconde chance qui traverse tout l'épisode.",
          "Ienzo is the youngest of Ansem the Wise's apprentices: a silent orphan child with a slate-blue fringe, taken in and raised almost as a son by Radiant Garden's ruler. His name yields Zexion, the “Cloaked Schemer”, Number VI of Organization XIII, whose weapon is a lexicon and whose power is illusion.\n\nWhere the other apprentices mostly return as background figures, Ienzo becomes a fully fledged character in Kingdom Hearts III: he runs the Radiant Garden laboratory, talks to Sora over the Gummiphone and patiently reconstructs the data left behind by his master. His arc embodies the theme of second chances that runs through the whole game.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans Birth by Sleep, Ienzo n'est qu'un petit garçon perdu dans les rues du Jardin Radieux. Ventus le trouve encerclé par des Nescients et le protège, sans savoir qui il est ; l'enfant, taciturne, ne dit presque rien avant d'être ramené auprès d'Even, qui veille sur lui.\n\nCette scène brève prend un sens rétrospectif énorme : le gamin sauvé par Ventus deviendra Zexion, l'un des artisans du piège tendu à Sora au Manoir Oblivion. Trop jeune pour comprendre ce qui se trame dans les sous-sols du château, Ienzo est néanmoins emporté avec les autres lorsque les expériences des apprentis tournent au désastre.",
          "In Birth by Sleep, Ienzo is only a small boy lost in the streets of Radiant Garden. Ventus finds him surrounded by Unversed and protects him without knowing who he is; the taciturn child says almost nothing before being taken back to Even, who looks after him.\n\nThat brief scene gains enormous weight in hindsight: the boy Ventus saves will become Zexion, one of the architects of the trap laid for Sora in Castle Oblivion. Too young to grasp what is being plotted in the castle basements, Ienzo is nonetheless swept up with the others when the apprentices' experiments turn to disaster.",
        ),
      },
      {
        title: L("La perte du cœur", "Losing his heart"),
        text: L(
          "Comme ses aînés, Ienzo perd son cœur lors de l'effondrement du Jardin Radieux et donne naissance à Zexion. Le Simili se distingue par sa froideur analytique : il manipule les illusions, lit les souvenirs et complote sans jamais se salir les mains.\n\nAu Manoir Oblivion, Zexion tente de se débarrasser de Riku en le noyant dans une illusion des Îles du Destin. Le Réplica de Riku, créé par Vexen, le surprend et absorbe son existence : Zexion disparaît en suppliant qu'on l'épargne. Sa mort précoce laisse à Ienzo un souvenir amer, celui d'avoir été effacé par une créature sortie du laboratoire de son propre mentor.",
          "Like his elders, Ienzo loses his heart when Radiant Garden collapses and gives rise to Zexion. The Nobody is marked by analytical coldness: he manipulates illusions, reads memories and schemes without ever dirtying his hands.\n\nIn Castle Oblivion, Zexion tries to be rid of Riku by drowning him in an illusion of Destiny Islands. The Riku Replica, created by Vexen, catches him off guard and absorbs his existence: Zexion vanishes while begging to be spared. That early death leaves Ienzo a bitter memory, that of being erased by a creature out of his own mentor's laboratory.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "La fin de Dream Drop Distance montre le laboratoire souterrain du Jardin Radieux où Ienzo reprend conscience, redevenu humain, aux côtés d'Aeleus et de Dilan. Les Similis vaincus depuis Kingdom Hearts II se recomplètent en effet un à un, cœur et corps réunis, sans mémoire précise de ce qu'ils ont fait entre-temps.\n\nIenzo est le premier à comprendre la situation et à en tirer parti : il fouille les ordinateurs, retrouve les traces des travaux d'Ansem le Sage et devient l'interlocuteur des alliés de Sora au Jardin Radieux. C'est là que s'amorce sa reconversion en scientifique repentant, plus curieux que jamais mais désormais du côté de ceux qui réparent.",
          "The end of Dream Drop Distance shows the underground laboratory of Radiant Garden where Ienzo comes to, human once more, alongside Aeleus and Dilan. The Nobodies defeated since Kingdom Hearts II are recompleting one by one, heart and body reunited, with no clear memory of what they did in between.\n\nIenzo is the first to grasp the situation and make use of it: he digs through the computers, finds traces of Ansem the Wise's work and becomes the point of contact for Sora's allies in Radiant Garden. There begins his conversion into a repentant scientist, more curious than ever but now on the side of those who mend things.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Ienzo est l'un des piliers du camp de la lumière dans Kingdom Hearts III. Depuis le laboratoire du Jardin Radieux, il analyse les données de Sora, restaure la conscience numérique d'Ansem le Sage et découvre que le cœur de Roxas dort toujours quelque part, ce qui rend possible son retour.\n\nIl accueille Even lorsque celui-ci propose de reprendre les Réplicas, et accepte, non sans réticence, de laisser son ancien mentor jouer les agents doubles. Lorsque Vexen livre la réplique promise, c'est Ienzo qui, avec Ansem le Sage, l'utilise pour rendre un corps à Roxas. Il retrouve enfin le calme d'un savant qui travaille pour les autres, et l'épilogue le montre au château restauré, entouré des apprentis redevenus des hommes ordinaires.",
          "Ienzo is one of the pillars of the light's side in Kingdom Hearts III. From the Radiant Garden laboratory he analyses Sora's data, restores Ansem the Wise's digital consciousness and discovers that Roxas's heart still sleeps somewhere, which makes his return possible.\n\nHe welcomes Even when the latter offers to resume the Replica work, and reluctantly agrees to let his old mentor play double agent. When Vexen delivers the promised replica, it is Ienzo who, with Ansem the Wise, uses it to give Roxas a body back. He finally finds the calm of a scientist working for others, and the epilogue shows him in the restored castle, surrounded by apprentices who have become ordinary men again.",
        ),
      },
    ],
    trivia: [
      L("Akira Ishida double Ienzo et Zexion en japonais ; Vincent Corazza reprend le rôle en anglais dans Kingdom Hearts III.", "Akira Ishida voices Ienzo and Zexion in Japanese; Vincent Corazza takes the role in English for Kingdom Hearts III."),
      L("Ienzo est le seul apprenti dont on voit l'enfance à l'écran, dans l'épisode de Ventus au Jardin Radieux.", "Ienzo is the only apprentice whose childhood is shown on screen, in Ventus's Radiant Garden episode."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Ienzo", url: "https://kingdomhearts.fandom.com/wiki/Ienzo" }],
  },

  // ─────────────────────────── Dilan ───────────────────────────
  "dilan": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Dilan est l'un des deux gardes du château du Jardin Radieux, reconnaissable à sa longue chevelure noire et à ses favoris fournis. Son nom donne Xaldin, le « Tourbillon de lances », numéro III de l'Organisation XIII, qui manie six lances et commande au vent.\n\nDe tous les apprentis, il est celui dont le rôle humain reste le plus discret : quelques répliques de sentinelle dans Birth by Sleep, une réapparition silencieuse après sa recomplétion. Cette sobriété tranche avec la cruauté de son Simili, qui s'acharne sur la Bête au Château de la Bête pour lui arracher son cœur et sa rose. Dilan illustre à lui seul la question posée par la saga : que reste-t-il de l'homme sous le Simili ?",
          "Dilan is one of the two gatekeepers of the Radiant Garden castle, recognisable by his long black hair and thick sideburns. His name yields Xaldin, the “Whirlwind Lancer”, Number III of Organization XIII, who wields six lances and commands the wind.\n\nOf all the apprentices he has the most discreet human role: a few sentry lines in Birth by Sleep, a silent return after his recompletion. That restraint contrasts with his Nobody's cruelty, hounding the Beast in his castle to tear away his heart and his rose. Dilan alone illustrates the question the saga asks: what remains of the man beneath the Nobody?",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dilan monte la garde devant l'entrée du château avec Aeleus. Lorsque Terra se présente pour interroger Ansem le Sage, les deux hommes lui barrent la route sans ménagement, méfiants envers un porteur de Keyblade venu d'un autre monde. Aqua se heurte au même refus lors de son passage.\n\nDerrière cette façade de sécurité, Dilan participe pourtant aux recherches interdites menées sous le château. Braig, qui joue double jeu pour le compte du Maître Xehanort, entraîne peu à peu ses collègues dans l'expérimentation sur les cœurs. La chute du Jardin Radieux les emporte tous : Dilan perd son cœur et devient Xaldin.",
          "Dilan stands guard at the castle entrance with Aeleus. When Terra turns up to question Ansem the Wise, the two men bar his way without ceremony, wary of a Keyblade wielder from another world. Aqua meets the same refusal when she passes through.\n\nBehind that security front, however, Dilan takes part in the forbidden research carried out beneath the castle. Braig, playing a double game for Master Xehanort, gradually draws his colleagues into experimenting on hearts. The fall of Radiant Garden sweeps them all away: Dilan loses his heart and becomes Xaldin.",
        ),
      },
      {
        title: L("La perte du cœur", "Losing his heart"),
        text: L(
          "Xaldin s'impose comme l'un des membres les plus redoutables de l'Organisation XIII : troisième dans la hiérarchie, il combat avec six lances qu'il fait tourbillonner par la magie du vent. Sa mission au Château de la Bête consiste à pousser le prince maudit au désespoir afin qu'il produise un Sans-cœur et un Simili de grande valeur.\n\nIl y échoue face à Sora, Donald, Dingo et la Bête, qui l'affrontent en haut de la terrasse ; vaincu, il disparaît en réclamant son cœur. Sa défaite, comme celle des autres numéros de l'Organisation, ouvre la voie à la recomplétion de Dilan, une fois le Sans-cœur correspondant également détruit.",
          "Xaldin establishes himself as one of Organization XIII's most formidable members: third in the hierarchy, he fights with six lances that he whirls through wind magic. His mission at Beast's Castle is to drive the cursed prince to despair so that he produces a Heartless and a Nobody of great value.\n\nHe fails against Sora, Donald, Goofy and the Beast, who face him on the upper terrace; defeated, he vanishes demanding his heart. His defeat, like that of the Organization's other numbers, opens the way to Dilan's recompletion once the matching Heartless is destroyed as well.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Dilan reprend conscience dans le laboratoire souterrain du Jardin Radieux, en même temps qu'Aeleus et Ienzo, à la fin de Dream Drop Distance. Les trois hommes, redevenus eux-mêmes, découvrent qu'ils ont passé des années sans cœur au service d'une organisation dont ils ne saisissent plus les buts.\n\nSans un mot d'excuse superflu, Dilan reprend son ancien poste : veiller sur le château et sur ceux qui y travaillent. Sa présence, comme celle d'Aeleus, rassure Ienzo au moment où le jeune savant relance les recherches d'Ansem le Sage dans un monde à nouveau menacé.",
          "Dilan comes to in the underground laboratory of Radiant Garden, at the same time as Aeleus and Ienzo, at the end of Dream Drop Distance. The three men, themselves again, learn they spent years without hearts serving an organisation whose aims they no longer grasp.\n\nWithout wasting words on apologies, Dilan resumes his old post: watching over the castle and those who work in it. His presence, like Aeleus's, reassures Ienzo just as the young scientist restarts Ansem the Wise's research in a world under threat once more.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans Kingdom Hearts III, Dilan fait partie de l'équipe du Jardin Radieux qui soutient Sora à distance. Il assure la sécurité du laboratoire pendant qu'Ienzo analyse les données et qu'Even prépare les Réplicas, et accueille avec les autres le retour d'Ansem le Sage.\n\nSes apparitions restent brèves, mais la scène finale du château rassemble tous les anciens apprentis : Dilan, Aeleus, Even, Ienzo et leur maître, autour d'un monde qui se reconstruit. Pour un personnage né d'une simple réplique de garde dans Birth by Sleep, c'est une conclusion sobre à un parcours passé presque entièrement du mauvais côté.",
          "In Kingdom Hearts III, Dilan is part of the Radiant Garden team supporting Sora from afar. He secures the laboratory while Ienzo analyses data and Even prepares the Replicas, and joins the others in welcoming Ansem the Wise back.\n\nHis appearances remain brief, but the castle's final scene gathers all the former apprentices: Dilan, Aeleus, Even, Ienzo and their master, around a world rebuilding itself. For a character born from a single guard's line in Birth by Sleep, it is a sober conclusion to a path spent almost entirely on the wrong side.",
        ),
      },
    ],
    trivia: [
      L("Comme Aeleus, Dilan n'a pas de scène de dialogue développée après sa recomplétion : les deux gardes restent des silhouettes du décor.", "Like Aeleus, Dilan gets no developed dialogue scene after his recompletion: the two guards remain background figures."),
      L("« Dilan » est l'anagramme de « Xaldin » sans le x, sur le modèle de tous les apprentis d'Ansem.", "“Dilan” is the anagram of “Xaldin” without the x, following the pattern of all of Ansem's apprentices."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dilan", url: "https://kingdomhearts.fandom.com/wiki/Dilan" }],
  },

  // ─────────────────────────── Aeleus ───────────────────────────
  "aeleus": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Aeleus est le colosse roux qui garde, avec Dilan, l'entrée du château du Jardin Radieux. Taciturne jusqu'au mutisme, il incarne la force tranquille parmi les apprentis d'Ansem le Sage. Son nom donne Lexaeus, le « Héros silencieux », numéro V de l'Organisation XIII, qui manie une énorme hache-épée et se bat en faisant trembler le sol.\n\nSa relation la plus notable est celle qu'il entretient avec Ienzo, le plus jeune du groupe, qu'il protège en silence avant comme après la perte de leurs cœurs. Ce lien discret survit à tout : recomplété, Aeleus reprend son poste au château où le jeune savant travaille, comme si rien n'avait changé.",
          "Aeleus is the auburn-haired giant who guards the Radiant Garden castle entrance with Dilan. Taciturn to the point of silence, he embodies quiet strength among Ansem the Wise's apprentices. His name yields Lexaeus, the “Silent Hero”, Number V of Organization XIII, who wields an enormous axe sword and fights by making the ground shake.\n\nHis most notable relationship is with Ienzo, the youngest of the group, whom he protects wordlessly both before and after they lose their hearts. That quiet bond survives everything: recompleted, Aeleus returns to his post in the castle where the young scientist works, as if nothing had changed.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Terra, Ventus et Aqua se heurtent tour à tour à Aeleus lors de leur passage au Jardin Radieux. Le garde refuse l'accès au château, se contentant de quelques mots secs ; il est aussi témoin de la mise en scène de Braig, qui feint l'enlèvement d'Ansem le Sage pour provoquer Terra.\n\nComme ses collègues, Aeleus est ensuite entraîné dans les expériences souterraines menées par Xehanort. La conclusion est la même pour tous : lorsque les ténèbres libérées par ces travaux submergent le monde, il perd son cœur, son corps engendre Lexaeus et le Jardin Radieux devient la Forteresse Oubliée.",
          "Terra, Ventus and Aqua each run into Aeleus during their stay in Radiant Garden. The guard refuses them entry to the castle with a few curt words; he also witnesses Braig's staged kidnapping of Ansem the Wise, meant to provoke Terra.\n\nLike his colleagues, Aeleus is then drawn into the underground experiments led by Xehanort. The outcome is the same for all: when the darkness released by that work engulfs the world, he loses his heart, his body spawns Lexaeus, and Radiant Garden becomes Hollow Bastion.",
        ),
      },
      {
        title: L("La perte du cœur", "Losing his heart"),
        text: L(
          "Lexaeus est envoyé au Manoir Oblivion avec Vexen et Zexion pour surveiller les nouveaux venus de l'Organisation. Convaincu que Riku représente une chance de sauver leur camp, il l'affronte dans les sous-sols du château afin de le pousser à embrasser les ténèbres.\n\nRiku le vainc au terme d'un combat éprouvant, mais l'effort réveille en lui la présence d'Ansem. Lexaeus disparaît sans un cri, fidèle à son surnom, et sa destruction précipite la panique de Zexion. Cette mission au Manoir Oblivion aura coûté la vie aux trois plus anciens membres de l'Organisation, tous issus du laboratoire du Jardin Radieux.",
          "Lexaeus is sent to Castle Oblivion with Vexen and Zexion to keep watch on the Organization's newcomers. Convinced that Riku is their side's best chance, he confronts him in the castle basements to push him into embracing darkness.\n\nRiku beats him after a gruelling fight, but the effort stirs Ansem's presence within him. Lexaeus vanishes without a cry, true to his nickname, and his destruction sends Zexion into a panic. That Castle Oblivion mission costs the lives of the Organization's three oldest members, all of them from the Radiant Garden laboratory.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Comme Dilan et Ienzo, Aeleus se réveille humain dans le laboratoire souterrain du Jardin Radieux à la fin de Dream Drop Distance. Le Sans-cœur et le Simili nés de son corps ayant tous deux été détruits, son cœur et son enveloppe se réunissent des années après leur séparation.\n\nSa première réaction est pragmatique : reprendre la garde, protéger le lieu et surtout Ienzo, redevenu lui aussi un jeune homme désarmé. Cette recomplétion silencieuse annonce le rôle des anciens apprentis dans Kingdom Hearts III, où le laboratoire du Jardin Radieux devient l'un des quartiers généraux du camp de la lumière.",
          "Like Dilan and Ienzo, Aeleus wakes up human in the underground laboratory of Radiant Garden at the end of Dream Drop Distance. With both the Heartless and the Nobody born of his body destroyed, his heart and shell reunite years after their separation.\n\nHis first reaction is practical: resume guard duty, protect the place and above all Ienzo, himself a defenceless young man once more. That silent recompletion foreshadows the former apprentices' role in Kingdom Hearts III, where the Radiant Garden laboratory becomes one of the light's headquarters.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Aeleus veille sur le laboratoire du Jardin Radieux pendant que ses anciens collègues travaillent à réparer leurs fautes. Il assiste au retour d'Ansem le Sage, arraché au Domaine des Ténèbres, et couvre les allées et venues d'Even lorsque celui-ci reprend l'apparence de Vexen pour infiltrer la véritable Organisation XIII.\n\nIl n'a pas de combat à mener dans cet épisode : son rôle est celui d'un rempart tranquille, présent à chaque scène du château sans jamais prendre la parole longuement. La conclusion du jeu le montre parmi les cinq hommes du laboratoire, réunis dans un monde qui se relève enfin de leurs erreurs.",
          "Aeleus watches over the Radiant Garden laboratory while his former colleagues work to repair their mistakes. He witnesses the return of Ansem the Wise, pulled out of the Realm of Darkness, and covers Even's comings and goings when the latter resumes Vexen's appearance to infiltrate the real Organization XIII.\n\nHe has no battle to fight in this game: his role is that of a quiet bulwark, present in every castle scene without ever speaking at length. The game's conclusion shows him among the laboratory's five men, gathered in a world finally recovering from their mistakes.",
        ),
      },
    ],
    trivia: [
      L("Fumihiko Tachiki, sa voix japonaise, double aussi Lexaeus : les apprentis et leurs Similis partagent systématiquement leurs comédiens.", "Fumihiko Tachiki, his Japanese voice, also plays Lexaeus: apprentices and their Nobodies always share their actors."),
      L("Le surnom de son Simili, « Héros silencieux », reflète le mutisme d'Aeleus dans toutes ses apparitions humaines.", "His Nobody's title, “Silent Hero”, mirrors Aeleus's silence in every one of his human appearances."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Aeleus", url: "https://kingdomhearts.fandom.com/wiki/Aeleus" }],
  },

  // ─────────────────────────── Braig ───────────────────────────
  "braig": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Braig est l'apprenti déloyal du lot : railleur, désinvolte, il parle à ses supérieurs comme à des camarades de jeu et se moque ouvertement des règles d'Ansem le Sage. Son nom donne Xigbar, le « Tireur d'élite », numéro II de l'Organisation XIII, qui manie deux arbalètes et manipule l'espace.\n\nSa singularité tient à ce que la saga révèle bien plus tard : Braig n'a jamais été un simple opportuniste. Kingdom Hearts III établit qu'il servait de réceptacle à Luxu, sixième apprenti du Maître des Maîtres chargé d'observer les âges depuis Daybreak Town. Sa loyauté envers le Maître Xehanort n'était donc qu'une couverture pour un plan bien plus ancien.",
          "Braig is the disloyal apprentice of the group: mocking and offhand, he speaks to his superiors like playmates and openly flouts Ansem the Wise's rules. His name yields Xigbar, the “Freeshooter”, Number II of Organization XIII, who wields twin arrowguns and manipulates space.\n\nWhat makes him singular is what the saga reveals much later: Braig was never a mere opportunist. Kingdom Hearts III establishes that he served as a vessel for Luxu, the sixth apprentice of the Master of Masters, tasked with watching the ages since Daybreak Town. His loyalty to Master Xehanort was therefore a cover for a far older plan.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Braig apparaît d'abord au Jardin Radieux, où il met en scène l'enlèvement d'Ansem le Sage pour attirer Terra et l'engager sur la voie des ténèbres. Le duel tourne mal pour lui : Terra lui balafre le visage et lui coûte un œil, blessures qu'il gardera pour toujours.\n\nAu Cimetière des Keyblades, il révèle son alliance avec le Maître Xehanort et affronte Ventus. En échange de son aide, le vieux maître lui a promis une Keyblade et lui a implanté une part de son cœur, faisant de lui le premier des réceptacles. Cette scène établit Braig comme le complice de la première heure, celui qui savait tout du plan avant même la naissance de l'Organisation.",
          "Braig first appears in Radiant Garden, staging Ansem the Wise's kidnapping to lure Terra and set him on the path of darkness. The duel goes badly for him: Terra scars his face and costs him an eye, wounds he will carry forever.\n\nAt the Keyblade Graveyard he reveals his alliance with Master Xehanort and fights Ventus. In exchange for his help, the old master has promised him a Keyblade and implanted a piece of his own heart in him, making him the first of the vessels. The scene establishes Braig as the earliest accomplice, the one who knew the whole plan before the Organization even existed.",
        ),
      },
      {
        title: L("La perte du cœur", "Losing his heart"),
        text: L(
          "Avec les autres apprentis, Braig se laisse dépouiller de son cœur lors des expériences du Jardin Radieux et devient Xigbar. Numéro II de l'Organisation XIII, il jouit d'une position privilégiée auprès de Xemnas et se permet des insolences que nul autre ne se risquerait à formuler.\n\nSes réparties troublent particulièrement Roxas : il lui parle de Ventus, de gens qu'il n'a jamais rencontrés, avec une familiarité incompréhensible. Sora finit par le vaincre dans le Monde qui n'existe pas, où Xigbar disparaît en riant, persuadé que la partie continue sans lui. Il avait raison : sa destruction n'était qu'une étape prévue par ceux qui l'habitaient.",
          "With the other apprentices, Braig lets himself be stripped of his heart during the Radiant Garden experiments and becomes Xigbar. Number II of Organization XIII, he enjoys a privileged position with Xemnas and takes liberties nobody else would dare.\n\nHis quips particularly unsettle Roxas: he speaks of Ventus and of people the boy never met with baffling familiarity. Sora eventually defeats him in The World That Never Was, where Xigbar disappears laughing, convinced the game goes on without him. He was right: his destruction was only a step foreseen by those inhabiting him.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Recomplété, Braig reparaît brièvement dans le Manoir Xehanort de la Cité du Crépuscule, en compagnie de Xemnas et du Jeune Xehanort, pour accueillir Sora tombé dans le piège des Mondes Endormis. Il redevient ensuite Xigbar au sein de la véritable Organisation XIII, treize réceptacles destinés à porter chacun un fragment du cœur du Maître Xehanort.\n\nSa présence dans les deux camps du temps — l'humain d'autrefois et le Simili ressuscité — illustre le fonctionnement du plan de Xehanort : rassembler à travers les époques des corps déjà marqués par ses ténèbres, plutôt que de convaincre de nouveaux alliés.",
          "Recompleted, Braig briefly reappears in the Xehanort Mansion of Twilight Town, alongside Xemnas and Young Xehanort, to greet Sora after he falls into the Sleeping Worlds' trap. He then becomes Xigbar again within the real Organization XIII, thirteen vessels each meant to carry a fragment of Master Xehanort's heart.\n\nHis presence on both sides of time — the man of old and the resurrected Nobody — illustrates how Xehanort's plan works: gathering across eras bodies already marked by his darkness rather than winning over new allies.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Xigbar accompagne les gardiens de Xehanort jusqu'au Cimetière des Keyblades, où il joue les meneurs de jeu, alimente les doutes de Sora et se moque de la fragilité des liens qui unissent ses amis. Vaincu, il feint la défaite et se laisse tomber du haut de Scala ad Caelum.\n\nL'épilogue révèle alors la vérité : le corps de Braig servait de réceptacle à Luxu, qui reprend le contrôle, récupère la Boîte noire et convoque les Prophètes de Daybreak Town pour la suite du plan du Maître des Maîtres. Braig, l'apprenti frondeur du Jardin Radieux, n'aura donc été qu'une étape dans une existence commencée des siècles plus tôt.",
          "Xigbar accompanies Xehanort's guardians to the Keyblade Graveyard, playing ringmaster, feeding Sora's doubts and mocking the fragility of the bonds between his friends. Defeated, he feigns collapse and lets himself fall from the heights of Scala ad Caelum.\n\nThe epilogue then reveals the truth: Braig's body served as a vessel for Luxu, who takes back control, recovers the Black Box and summons the Foretellers of Daybreak Town for the next stage of the Master of Masters' plan. Braig, the insolent apprentice of Radiant Garden, was only a stage in an existence begun centuries earlier.",
        ),
      },
    ],
    trivia: [
      L("Le japonais nomme Xigbar « Shigebaru » (シグバール) ; le jeu de mots sur son arme, l'arbalète, se perd en français.", "Japanese calls Xigbar “Shigubāru” (シグバール); the pun on his arrowgun weapon is lost in translation."),
      L("Sa cicatrice et son bandeau datent précisément du duel contre Terra dans Birth by Sleep, dix ans avant Kingdom Hearts.", "His scar and eyepatch date precisely from the duel against Terra in Birth by Sleep, ten years before Kingdom Hearts."),
      L("James Patrick Stuart le double en anglais depuis Birth by Sleep, dans les rôles de Braig, Xigbar et Luxu.", "James Patrick Stuart has voiced him in English since Birth by Sleep, as Braig, Xigbar and Luxu."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Braig", url: "https://kingdomhearts.fandom.com/wiki/Braig" },
      { label: "Kingdom Hearts Wiki — Luxu", url: "https://kingdomhearts.fandom.com/wiki/Luxu" },
    ],
  },

  // ─────────────────────────── Isa ───────────────────────────
  "isa": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Isa est un adolescent du Jardin Radieux, calme et sarcastique, inséparable de son ami Lea. Son nom donne Saïx, la « Lune sanglante », numéro VII de l'Organisation XIII, qui combat avec un claymore et entre en transe sous la lumière de Kingdom Hearts.\n\nContrairement aux six apprentis d'Ansem le Sage, Isa n'a jamais été savant ni garde : il n'est qu'un gamin trop curieux, entré par effraction dans un château où l'on menait des expériences interdites. Cette différence donne à son histoire une couleur particulière ; sa froideur de Simili découle moins d'une ambition scientifique que d'une amitié brisée et d'une quête restée sans réponse.",
          "Isa is a teenager from Radiant Garden, calm and sarcastic, inseparable from his friend Lea. His name yields Saïx, the “Luna Diviner”, Number VII of Organization XIII, who fights with a claymore and goes berserk under the light of Kingdom Hearts.\n\nUnlike Ansem the Wise's six apprentices, Isa was never a scholar or a guard: just an over-curious kid who broke into a castle where forbidden experiments were being run. That difference colours his whole story; his coldness as a Nobody stems less from scientific ambition than from a broken friendship and an unanswered search.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans Birth by Sleep, Isa et Lea traînent dans les rues du Jardin Radieux et tentent à plusieurs reprises de s'introduire dans le château, systématiquement refoulés par Dilan et Aeleus. Lea croise Ventus et l'affronte au frisbee ; Isa, resté en retrait, observe et commente.\n\nCe qui n'est alors qu'une farce d'adolescents dissimule un vrai motif, que Kingdom Hearts III explicitera : les deux garçons cherchaient une jeune fille retenue dans le château, connue des rapports sous le nom de Sujet X. Leur obstination finit par leur coûter cher, puisqu'ils sont capturés et mêlés aux expériences des apprentis.",
          "In Birth by Sleep, Isa and Lea hang around the streets of Radiant Garden and repeatedly try to sneak into the castle, always turned away by Dilan and Aeleus. Lea meets Ventus and duels him with frisbees; Isa, hanging back, watches and comments.\n\nWhat looks like a teenage prank hides a real motive that Kingdom Hearts III spells out: the two boys were looking for a girl held in the castle, known in the reports as Subject X. Their persistence costs them dearly, as they are caught and caught up in the apprentices' experiments.",
        ),
      },
      {
        title: L("La perte du cœur", "Losing his heart"),
        text: L(
          "Privé de son cœur, Isa devient Saïx et gravit rapidement la hiérarchie de l'Organisation XIII jusqu'au septième rang, en tant que bras droit de Xemnas. Il dirige les missions, distribue les ordres et surveille de près Roxas et Xion, qu'il considère comme des outils du projet Kingdom Hearts.\n\nSa relation avec Axel se délite : Saïx trahit son ancien ami, envoie Roxas au danger et manipule Xion sans état d'âme. Dans le Monde qui n'existe pas, Sora l'affronte alors qu'il se gorge de la lumière de Kingdom Hearts ; vaincu, il murmure une question sur ce qui lui manquait, dernier signe de l'Isa enfoui sous le Simili.",
          "Stripped of his heart, Isa becomes Saïx and swiftly climbs Organization XIII's hierarchy to seventh rank, as Xemnas's right hand. He runs missions, hands out orders and keeps a close watch on Roxas and Xion, whom he regards as tools of the Kingdom Hearts project.\n\nHis relationship with Axel falls apart: Saïx betrays his old friend, sends Roxas into danger and manipulates Xion without a qualm. In The World That Never Was, Sora fights him as he drinks in the light of Kingdom Hearts; defeated, he murmurs a question about what he was missing, the last trace of the Isa buried beneath the Nobody.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Ressuscité au sein de la véritable Organisation XIII, Saïx retrouve Lea et Xion au Cimetière des Keyblades. Le combat qui les oppose tourne à l'explication : Saïx avoue qu'il n'a jamais rejoint Xehanort par ambition, mais pour rester à portée de la fille disparue que Lea et lui cherchaient enfant.\n\nVaincu, il est recomplété et redevient Isa. L'épilogue le montre à la Cité du Crépuscule, mal à l'aise, acceptant enfin la glace à l'eau de mer que lui tendent Lea, Roxas et Xion : le geste qui scelle des années d'amitié gâchées. Sa dernière réplique, sur le fait qu'il faut mériter d'être pardonné, résume le thème des seconds départs qui traverse l'épisode.",
          "Revived within the real Organization XIII, Saïx meets Lea and Xion again at the Keyblade Graveyard. Their fight turns into an explanation: Saïx admits he never joined Xehanort out of ambition, but to stay close to the missing girl he and Lea searched for as children.\n\nDefeated, he is recompleted and becomes Isa again. The epilogue shows him in Twilight Town, awkward, finally accepting the sea-salt ice cream held out by Lea, Roxas and Xion: the gesture that seals years of wasted friendship. His closing line, about having to earn forgiveness, sums up the theme of second beginnings running through the game.",
        ),
      },
    ],
    trivia: [
      L("Kirk Thornton double Isa et Saïx en anglais depuis Kingdom Hearts II.", "Kirk Thornton has voiced Isa and Saïx in English since Kingdom Hearts II."),
      L("La cicatrice en X sur son front n'apparaît que chez Saïx : Isa, adolescent, n'en porte pas dans Birth by Sleep.", "The X-shaped scar on his forehead belongs to Saïx only: the teenage Isa does not have it in Birth by Sleep."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Isa", url: "https://kingdomhearts.fandom.com/wiki/Isa" }],
  },

  // ─────────────────────────── Lea ───────────────────────────
  "lea": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Lea est un garçon du Jardin Radieux à la tignasse rouge et au sourire moqueur, dont la phrase fétiche — « retiens bien ce nom » — deviendra la marque de fabrique de son Simili, Axel, numéro VIII de l'Organisation XIII. Son nom suit la règle des apprentis : Lea plus un x donne Axel.\n\nSon parcours est l'un des plus complets de la saga. Adolescent frondeur, puis Simili manipulateur devenu ami sincère de Roxas et de Xion, puis homme recomplété qui reprend le combat aux côtés de Sora, Lea finit par obtenir ce que peu de personnages atteignent : le droit de porter une Keyblade et de compter parmi les Gardiens de la Lumière.",
          "Lea is a boy from Radiant Garden with a shock of red hair and a mocking grin, whose catchphrase — “got it memorized?” — becomes the trademark of his Nobody, Axel, Number VIII of Organization XIII. His name follows the apprentices' rule: Lea plus an x gives Axel.\n\nHis arc is one of the most complete in the saga. A cheeky teenager, then a manipulative Nobody who becomes a genuine friend to Roxas and Xion, then a recompleted man who takes up the fight beside Sora, Lea ends up earning what few characters do: the right to wield a Keyblade and to stand among the Guardians of Light.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Ventus rencontre Lea au Jardin Radieux et se voit défier à coups de frisbees, dans un duel amical que le garçon perd en riant. Lea l'assure qu'il se souviendra de son nom, et lui demande de faire de même : première occurrence de la formule qui le suivra toute la série.\n\nAvec Isa, il multiplie les tentatives d'intrusion au château, poussé par la recherche d'une jeune fille dont on garde la trace dans les rapports sous le nom de Sujet X. Les deux amis finissent par être pris ; les expériences menées sous le château leur arrachent leur cœur, et Lea devient Axel.",
          "Ventus meets Lea in Radiant Garden and is challenged to a frisbee duel, a friendly bout the boy loses laughing. Lea assures him he will remember his name, and asks him to do the same: the first occurrence of the phrase that follows him through the series.\n\nWith Isa he keeps trying to break into the castle, driven by the search for a girl recorded in the reports as Subject X. The two friends are eventually caught; the experiments under the castle tear out their hearts, and Lea becomes Axel.",
        ),
      },
      {
        title: L("La perte du cœur", "Losing his heart"),
        text: L(
          "Axel sert d'abord l'Organisation avec cynisme : au Manoir Oblivion, il élimine Vexen sur ordre de Marluxia, puis dénonce le complot de ce dernier. Chargé de surveiller Roxas, il se prend pourtant d'affection pour lui et pour Xion, avec qui il partage chaque soir une glace à l'eau de mer au sommet du beffroi de la Cité du Crépuscule.\n\nCette amitié impossible pour un être « sans cœur » finit par le briser. Roxas déserte, Xion s'efface de toutes les mémoires, et Axel, resté seul, se sacrifie dans le Couloir Obscur pour ouvrir la route à Sora : il se consume en avouant qu'il voulait simplement revoir son ami.",
          "Axel first serves the Organization cynically: in Castle Oblivion he eliminates Vexen on Marluxia's orders, then exposes Marluxia's own plot. Assigned to watch Roxas, he nonetheless grows fond of him and of Xion, sharing sea-salt ice cream with them each evening atop Twilight Town's clock tower.\n\nThat friendship, impossible for a being said to have no heart, eventually breaks him. Roxas deserts, Xion is erased from every memory, and Axel, left alone, sacrifices himself in the Dark Corridor to clear the way for Sora: he burns out while admitting he simply wanted to see his friend again.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Recomplété après la chute de l'Organisation, Lea réapparaît à la Cité du Crépuscule, cheveux rouges et sourire intacts, décidé à ne plus rester spectateur. Il se présente à Yen Sid, réclame de faire quelque chose d'utile, puis se lance dans le Monde qui n'existe pas au moment où Sora tombe aux mains de Xehanort.\n\nC'est là qu'il stupéfie tout le monde : au plus fort du combat, une Keyblade apparaît dans sa main. Il l'utilise pour repousser les réceptacles de Xehanort et couvrir la fuite de ses alliés. La scène fait de Lea le premier ancien membre de l'Organisation à devenir porteur, et le désigne comme futur Gardien de la Lumière.",
          "Recompleted after the Organization's fall, Lea reappears in Twilight Town, red hair and grin intact, determined to stop being a bystander. He presents himself to Yen Sid, demands something useful to do, then charges into The World That Never Was just as Sora falls into Xehanort's hands.\n\nThere he astonishes everyone: at the height of the fight, a Keyblade appears in his hand. He uses it to drive back Xehanort's vessels and cover his allies' retreat. The scene makes Lea the first former Organization member to become a wielder, and marks him out as a future Guardian of Light.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Lea s'entraîne à la Tour Mystérieuse avec Kairi, sous la conduite de Merlin et des trois bonnes fées, et découvre que la maîtrise d'une Keyblade s'apprend mal quand on a passé des années à lancer des chakrams. Il n'obtient pas le titre de Maître, mais rejoint quand même les sept Gardiens de la Lumière au Cimetière des Keyblades.\n\nIl y affronte Xemnas et Saïx, refuse d'abandonner Isa malgré tout, et voit revenir Roxas et Xion dans des corps neufs. L'épilogue, sur la place de la Cité du Crépuscule puis au sommet du beffroi, réunit enfin les quatre autour d'une glace : la promesse faite des années plus tôt, tenue par un homme qui, cette fois, a bien un cœur.",
          "Lea trains at the Mysterious Tower with Kairi under Merlin and the three good fairies, and finds that mastering a Keyblade comes hard when you have spent years throwing chakrams. He does not earn the title of Master, but joins the seven Guardians of Light at the Keyblade Graveyard all the same.\n\nThere he faces Xemnas and Saïx, refuses to give up on Isa despite everything, and sees Roxas and Xion return in new bodies. The epilogue, in Twilight Town's square and then atop the clock tower, finally reunites the four of them over ice cream: the promise made years earlier, kept by a man who this time truly has a heart.",
        ),
      },
    ],
    trivia: [
      L("Keiji Fujiwara, sa voix japonaise depuis Chain of Memories, est décédé en 2020 ; il reste l'un des timbres emblématiques de la saga.", "Keiji Fujiwara, his Japanese voice since Chain of Memories, died in 2020; he remains one of the saga's most iconic voices."),
      L("Sa Keyblade personnelle s'appelle Flame Liberator ; elle reprend le motif des chakrams d'Axel.", "His personal Keyblade is called Flame Liberator; it reuses the motif of Axel's chakrams."),
      L("« Retiens bien ce nom » traduit la formule japonaise et anglaise « got it memorized? », devenue la signature du personnage.", "The French “retiens bien ce nom” renders the catchphrase “got it memorized?”, the character's signature line."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lea", url: "https://kingdomhearts.fandom.com/wiki/Lea" }],
  },

  // ─────────────────────────── Lauriam ───────────────────────────
  "lauriam": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Lauriam est un porteur de Keyblade de Daybreak Town, à l'époque lointaine de Kingdom Hearts χ. Cheveux roses, allure posée, il est avant tout le grand frère de Strelitzia, qu'il protège et encourage. Son nom, comme celui des autres membres de l'Organisation XIII, donne Marluxia par l'ajout d'un x.\n\nSa révélation a bouleversé la lecture de Chain of Memories : le comploteur froid du Manoir Oblivion, « Assassin gracieux » armé d'une faux, fut d'abord un jeune homme dont le seul but était de retrouver sa sœur. Cette continuité entre l'Âge des Fées et l'Organisation illustre la manière dont la saga relie ses époques par des personnages recyclés à des siècles de distance.",
          "Lauriam is a Keyblade wielder from Daybreak Town, in the distant era of Kingdom Hearts χ. Pink-haired and composed, he is above all the elder brother of Strelitzia, whom he protects and encourages. Like the other Organization XIII members, his name yields Marluxia with an added x.\n\nThe reveal reshaped how Chain of Memories reads: the cold schemer of Castle Oblivion, the scythe-wielding “Graceful Assassin”, was first a young man whose only goal was to find his sister. That continuity between the ancient age and the Organization shows how the saga links its eras through characters recycled centuries apart.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Après la Guerre des Keyblades, Ava choisit cinq nouveaux chefs d'Union parmi les Dandelions, les porteurs mis à l'abri pour préserver l'avenir. Strelitzia devait en faire partie ; elle disparaît avant d'avoir pu prendre son poste, et c'est Lauriam qui est désigné à sa place, aux côtés d'Ephemer, de Skuld, d'Elrena et de Ventus.\n\nPersuadé qu'un crime a été commis, Lauriam mène l'enquête dans une Daybreak Town où plus personne ne se souvient de sa sœur. Il s'associe à Elrena, dont le tempérament acéré contraste avec son calme, et remonte peu à peu la piste. La conclusion de son enquête ne lui rend pas Strelitzia : elle ne lui laisse que l'obsession de la retrouver, qui survivra à sa propre disparition.",
          "After the Keyblade War, Ava picks five new Union leaders among the Dandelions, the wielders sheltered to preserve the future. Strelitzia was to be one of them; she vanishes before taking up the post, and Lauriam is named in her place, alongside Ephemer, Skuld, Elrena and Ventus.\n\nConvinced a crime has been committed, Lauriam investigates in a Daybreak Town where nobody remembers his sister any more. He teams up with Elrena, whose sharp temper contrasts with his calm, and slowly follows the trail. The end of his investigation does not give Strelitzia back: it leaves him only the obsession of finding her, which outlives his own disappearance.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Réveillé dans une époque bien postérieure, Lauriam perd son cœur et devient Marluxia, numéro XI de l'Organisation XIII, sans conserver de souvenirs nets de Daybreak Town. Il reparaît dans la véritable Organisation XIII, envoyé notamment à Arendelle où il tente de séparer Sora de ses compagnons.\n\nAu Cimetière des Keyblades, il combat aux côtés de Larxene et de Luxord avant d'être vaincu. Sa disparition s'accompagne d'un éclair de mémoire : un nom de fleur, celui de Strelitzia, remonte à la surface, et il s'efface en promettant de la chercher encore. La scène relie explicitement l'Organisation à l'Âge des Fées et prépare les révélations du jeu suivant.",
          "Awakening in a far later era, Lauriam loses his heart and becomes Marluxia, Number XI of Organization XIII, retaining no clear memory of Daybreak Town. He returns within the real Organization XIII, sent among other places to Arendelle where he tries to separate Sora from his companions.\n\nAt the Keyblade Graveyard he fights beside Larxene and Luxord before being defeated. His disappearance comes with a flash of memory: a flower's name, Strelitzia's, rises to the surface, and he fades away promising to keep looking for her. The scene explicitly links the Organization to the ancient age and sets up the next game's revelations.",
        ),
      },
    ],
    trivia: [
      L("Son prénom et celui de sa sœur sont des noms de fleurs, comme l'arme de Marluxia et son pouvoir sur les pétales.", "His name and his sister's are flower names, in keeping with Marluxia's scythe and his power over petals."),
      L("Keith Ferguson et Shūichi Ikeda doublent aussi bien Lauriam que Marluxia.", "Keith Ferguson and Shūichi Ikeda voice both Lauriam and Marluxia."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lauriam", url: "https://kingdomhearts.fandom.com/wiki/Lauriam" }],
  },

  // ─────────────────────────── Elrena ───────────────────────────
  "elrena": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Elrena est une porteuse de Keyblade de Daybreak Town, blonde, moqueuse et prompte à la répartie. Son nom, additionné d'un x, donne Larxene, la « Furie hargneuse », numéro XII et unique femme de l'Organisation XIII, qui combat avec des couteaux de lancer et maîtrise la foudre.\n\nCette continuité de caractère entre l'humaine et le Simili est frappante : le mordant de Larxene n'est pas une invention de l'Organisation, il existait déjà chez la jeune porteuse. Elrena est aussi, avec Lauriam, l'une des rares figures de l'Âge des Fées dont on suit le destin jusqu'à Kingdom Hearts III, ce qui en fait un pont narratif entre les deux extrémités de la chronologie.",
          "Elrena is a Keyblade wielder from Daybreak Town, blonde, mocking and quick with a retort. Her name, with an added x, yields Larxene, the “Savage Nymph”, Number XII and the only woman in Organization XIII, who fights with throwing knives and commands lightning.\n\nThe continuity of character between human and Nobody is striking: Larxene's bite is not an Organization invention, it was already there in the young wielder. With Lauriam, Elrena is also one of the rare figures of the ancient age whose fate is followed as far as Kingdom Hearts III, making her a narrative bridge between the two ends of the timeline.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Elrena survit à la Guerre des Keyblades parmi les Dandelions, ces porteurs envoyés vers un âge nouveau pour préserver la lumière. Ava la désigne comme l'une des cinq chefs d'Union chargés de guider les rescapés, avec Ephemer, Skuld, Lauriam et Ventus.\n\nElle se lie à Lauriam et l'aide dans sa recherche de Strelitzia, non par tendresse — elle s'en défend — mais parce qu'une disparition dont personne ne garde le souvenir l'intrigue. Son franc-parler bouscule les autres chefs et met à nu les non-dits qui minent la communauté des Dandelions, à un moment où les manipulations des Prophètes commencent à peine à se dévoiler.",
          "Elrena survives the Keyblade War among the Dandelions, the wielders sent into a new age to preserve the light. Ava names her one of the five Union leaders tasked with guiding the survivors, with Ephemer, Skuld, Lauriam and Ventus.\n\nShe becomes close to Lauriam and helps him search for Strelitzia, not out of tenderness — she denies that — but because a disappearance nobody remembers intrigues her. Her bluntness shakes the other leaders and exposes the unspoken tensions eating at the Dandelion community, at a point when the Foretellers' manipulations are only beginning to surface.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Privée de son cœur à une époque ultérieure, Elrena devient Larxene et ne conserve de Daybreak Town que des impressions confuses. Membre de la véritable Organisation XIII, elle est envoyée à Arendelle, où elle se joue d'Elsa et sème le doute chez Sora, puis participe au piège du Cimetière des Keyblades.\n\nVaincue aux côtés de Marluxia et de Luxord, elle s'efface en retrouvant un fragment de mémoire : le nom d'une jeune fille qu'elle et Lauriam cherchaient autrefois. Sa dernière réplique, plus douce que tout ce qu'elle a dit auparavant, referme l'un des fils les plus inattendus de Kingdom Hearts III.",
          "Stripped of her heart in a later era, Elrena becomes Larxene and keeps only confused impressions of Daybreak Town. A member of the real Organization XIII, she is sent to Arendelle, where she toys with Elsa and sows doubt in Sora, then takes part in the Keyblade Graveyard trap.\n\nDefeated alongside Marluxia and Luxord, she fades away recovering a fragment of memory: the name of a girl she and Lauriam once searched for. Her final line, softer than anything she has said before, closes one of Kingdom Hearts III's most unexpected threads.",
        ),
      },
    ],
    trivia: [
      L("Larxene, seule femme de l'Organisation XIII d'origine, garde ce statut dans la véritable Organisation aux côtés de Xion.", "Larxene, the only woman in the original Organization XIII, keeps that status in the real Organization alongside Xion."),
      L("Shanelle Gray reprend le rôle en anglais dans Kingdom Hearts III, après Shanelle Workman dans Chain of Memories — la même comédienne sous deux noms.", "Shanelle Gray takes the English role in Kingdom Hearts III, after Shanelle Workman in Chain of Memories — the same actress under two names."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Elrena", url: "https://kingdomhearts.fandom.com/wiki/Elrena" }],
  },

  // ─────────────────────────── Chirithy ───────────────────────────
  "chirithy": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Les Chirithy sont de petites créatures de tissu, à la tête de chat et à la cape blanche, créées par le Maître des Maîtres pour accompagner les porteurs de Keyblade de Daybreak Town. Chaque porteur reçoit le sien : il le conseille, lui distribue ses missions, veille sur son sommeil et se nourrit des rêves heureux.\n\nCe sont des Esprits Avale-Rêves, cousins de ceux que Sora et Riku apprivoisent dans Dream Drop Distance. Leur double nature est cruciale : un Chirithy dont le porteur cède aux ténèbres se corrompt à son tour et devient un Cauchemar, version noire et griffue du même personnage. Leur design, volontairement enfantin, contraste avec le rôle funèbre qu'ils tiennent dans le récit de la Guerre des Keyblades.",
          "Chirithy are small cloth creatures with cat heads and white capes, created by the Master of Masters to accompany the Keyblade wielders of Daybreak Town. Each wielder receives one: it advises them, hands out their missions, watches over their sleep and feeds on happy dreams.\n\nThey are Spirit Dream Eaters, cousins of the ones Sora and Riku tame in Dream Drop Distance. Their dual nature is crucial: a Chirithy whose wielder gives in to darkness becomes corrupted in turn and turns into a Nightmare, a black and clawed version of the same character. Their deliberately childlike design contrasts with the funereal role they play in the tale of the Keyblade War.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Dans Union χ, le Chirithy du Joueur est le compagnon constant de l'aventure : il explique le fonctionnement des Unions, met en garde contre l'accumulation des ténèbres et cache longtemps ce qu'il sait du plan du Maître des Maîtres. Il se révèle plus lucide qu'il n'y paraît sur la guerre qui approche.\n\nLorsque la Guerre des Keyblades éclate, les Chirithy assistent impuissants à la disparition de leurs porteurs. Celui du Joueur reste à ses côtés jusqu'au bout et, après le sacrifice de son ami face aux ténèbres, se retrouve seul. Le récit joue de la cruauté de cette situation : des créatures faites pour veiller sur des rêves survivent à ceux qui rêvaient.",
          "In Union χ, the Player's Chirithy is the constant companion of the adventure: it explains how the Unions work, warns against the build-up of darkness and long conceals what it knows of the Master of Masters' plan. It proves far more clear-sighted about the coming war than it lets on.\n\nWhen the Keyblade War breaks out, the Chirithy watch helplessly as their wielders vanish. The Player's stays by their side to the end and, after their friend's sacrifice against the darkness, is left alone. The story leans into the cruelty of that situation: creatures made to watch over dreams outliving the dreamers.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sora rencontre un Chirithy dans le Monde Final, ce lieu blanc où échouent les cœurs séparés de leur corps. La créature lui explique la nature de l'endroit, l'aide à rassembler les fragments de son propre cœur et lui apprend à distinguer ce qui peut encore revenir de ce qui doit rester.\n\nElle avoue attendre son porteur, disparu depuis des siècles pendant la Guerre des Keyblades, sans savoir s'il reviendra un jour. Cette rencontre relie directement le jeu mobile à la trilogie principale et donne au Monde Final sa tonalité mélancolique, à mi-chemin entre l'antichambre et la salle d'attente.",
          "Sora meets a Chirithy in the Final World, the white place where hearts separated from their bodies wash up. The creature explains the nature of the place, helps him gather the fragments of his own heart and teaches him to tell what can still come back from what must stay.\n\nIt admits to waiting for its wielder, gone for centuries since the Keyblade War, without knowing whether they will ever return. That encounter ties the mobile game directly to the main trilogy and gives the Final World its melancholy tone, halfway between an antechamber and a waiting room.",
        ),
      },
      {
        game: "missing-link",
        text: L(
          "Missing-Link ramène les Chirithy à leur fonction d'origine : guider un porteur de Keyblade dans une Scala ad Caelum reconstituée à partir de souvenirs. Le compagnon du joueur y commente les découvertes, distribue les objectifs et sert de fil conducteur dans un monde dont la nature reste longtemps ambiguë.\n\nLeur retour confirme le rôle structurant de ces créatures dans toute la branche χ de la saga : partout où l'on parle de Daybreak Town, de Prophètes ou du Maître des Maîtres, un Chirithy n'est jamais loin, à la fois mascotte, tutoriel incarné et témoin des époques oubliées.",
          "Missing-Link returns the Chirithy to their original function: guiding a Keyblade wielder through a Scala ad Caelum rebuilt from memories. The player's companion comments on discoveries, hands out objectives and acts as a through-line in a world whose nature stays ambiguous for a long time.\n\nTheir return confirms how structural these creatures are to the whole χ branch of the saga: wherever Daybreak Town, the Foretellers or the Master of Masters are mentioned, a Chirithy is never far away, at once mascot, embodied tutorial and witness to forgotten ages.",
        ),
      },
    ],
    trivia: [
      L("Leur nom japonais, チリシィ, évoque la poussière (chiri) : un clin d'œil à leur origine et à leur fragilité.", "Their Japanese name, チリシィ, evokes dust (chiri), a nod to their origin and fragility."),
      L("Un Chirithy corrompu devient un Cauchemar, ennemi jouable comme adversaire dans Union χ.", "A corrupted Chirithy becomes a Nightmare, which appears as an enemy in Union χ."),
      L("Lara Jill Miller double le Chirithy anglais, y compris dans la scène du Monde Final de Kingdom Hearts III.", "Lara Jill Miller voices the English Chirithy, including in Kingdom Hearts III's Final World scene."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Chirithy", url: "https://kingdomhearts.fandom.com/wiki/Chirithy" }],
  },

  // ─────────────────────────── Sora de données ───────────────────────────
  "data-sora": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Le Sora de données est la copie numérique du héros, créée à l'intérieur du journal de Jiminy une fois celui-ci numérisé par Tic et Tac au Château Disney. Il partage l'apparence, la voix et les souvenirs du Sora de la fin de Kingdom Hearts, mais ignore d'abord qu'il n'est qu'un programme.\n\nSa particularité de jeu tient à sa fragilité : les bugs qui rongent le journal lui volent ses capacités, qu'il doit reconquérir bloc par bloc dans une matrice de compétences. Re:coded fait de cette perte progressive son thème central — le héros de données passe l'essentiel de son aventure à retrouver ce qu'on lui a pris, à commencer par la certitude d'exister.",
          "Data-Sora is the digital copy of the hero, created inside Jiminy's Journal once Chip and Dale have digitised it at Disney Castle. He shares the appearance, voice and memories of the Sora of the end of Kingdom Hearts, but at first has no idea he is only a program.\n\nHis gameplay quirk is fragility: the bugs eating away at the journal steal his abilities, which he must win back block by block on a stat matrix. Re:coded makes that gradual loss its central theme — the data hero spends most of his adventure recovering what was taken from him, starting with the certainty that he exists.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Mickey, Donald, Dingo et Jiminy découvrent dans le journal une phrase que personne n'a écrite, promettant d'apaiser une souffrance. Pour en comprendre l'origine, ils numérisent le carnet et y envoient un Sora de données chargé d'effacer les bugs qui infestent des versions reconstituées des Îles du Destin, de la Ville de Traverse, du Pays des Merveilles, de l'Olympe, d'Agrabah et de la Forteresse Oubliée.\n\nGuidé par le Riku de données, il apprend que les bugs ne sont pas de simples erreurs mais les traces des blessures inscrites dans les souvenirs de Sora. En chemin, Maléfique et Pat s'introduisent dans le système et tentent de s'en emparer, transformant l'enquête en course contre une corruption qui menace d'effacer le journal entier.",
          "Mickey, Donald, Goofy and Jiminy find in the journal a sentence nobody wrote, promising to mend a hurt. To understand where it comes from they digitise the book and send in a Data-Sora tasked with clearing the bugs infesting reconstructed versions of Destiny Islands, Traverse Town, Wonderland, Olympus Coliseum, Agrabah and Hollow Bastion.\n\nGuided by Data-Riku, he learns the bugs are not mere errors but the traces of wounds written into Sora's memories. Along the way Maleficent and Pete break into the system and try to seize it, turning the investigation into a race against a corruption threatening to erase the whole journal.",
        ),
      },
      {
        title: L("La fin du voyage", "Journey's end"),
        text: L(
          "Au terme de son périple, le Sora de données affronte une version enténébrée de lui-même née des souvenirs douloureux du journal, puis atteint le cœur du système où l'attend une Naminé de données. Elle lui révèle le sens du message : des cœurs liés à Sora souffrent encore et attendent d'être sauvés.\n\nLe Sora de données accepte alors que ses propres données soient effacées afin de transmettre cette découverte, mais Mickey préserve le journal et son héros. L'épilogue le montre continuant d'exister dans le monde de données, avec la promesse que ce qu'il a vécu comptera pour le vrai Sora. Ce dénouement lance directement les enjeux de Dream Drop Distance.",
          "At the end of his journey, Data-Sora fights a darkness-clad version of himself born from the journal's painful memories, then reaches the heart of the system where a Data-Naminé is waiting. She reveals the message's meaning: hearts connected to Sora are still hurting and waiting to be saved.\n\nData-Sora then accepts that his own data be erased so the discovery can be passed on, but Mickey preserves the journal and its hero. The epilogue shows him going on existing in the data world, with the promise that what he lived through will matter to the real Sora. That ending directly sets up the stakes of Dream Drop Distance.",
        ),
      },
    ],
    trivia: [
      L("Re:coded est la réédition sur Nintendo DS du jeu mobile japonais Kingdom Hearts coded, sorti par épisodes.", "Re:coded is the Nintendo DS reworking of the Japanese mobile game Kingdom Hearts coded, released episodically."),
      L("Haley Joel Osment et Miyu Irino doublent le Sora de données comme le Sora original.", "Haley Joel Osment and Miyu Irino voice Data-Sora just as they voice the original Sora."),
      L("Le système de progression par matrice de compétences est propre à cet épisode et n'a pas été repris ailleurs.", "The stat-matrix progression system is unique to this game and was not reused elsewhere."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Data-Sora", url: "https://kingdomhearts.fandom.com/wiki/Data-Sora" }],
  },

  // ─────────────────────────── Riku de données ───────────────────────────
  "data-riku": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Le Riku de données n'est pas une copie de Riku au sens strict : c'est le journal de Jiminy lui-même, qui prend forme humaine pour dialoguer avec ses visiteurs et emprunte pour cela les traits de l'ami de Sora. Il en a l'apparence, la voix et l'épée, la Soul Eater, mais son savoir est celui d'un système qui connaît chaque page de l'aventure.\n\nCe choix de représentation donne à Re:coded l'une de ses idées les plus élégantes : le carnet qui racontait les voyages de Sora devient un personnage à part entière, capable de commenter sa propre histoire. Il occupe dans le Datascape la place d'un administrateur, à la fois guide, garde-fou et mémoire du monde numérique.",
          "Data-Riku is not a copy of Riku in the strict sense: he is Jiminy's Journal itself, taking human form to speak with its visitors and borrowing the features of Sora's friend to do so. He has the appearance, the voice and the sword, Soul Eater, but his knowledge is that of a system that knows every page of the adventure.\n\nThat representation gives Re:coded one of its most elegant ideas: the notebook that recorded Sora's travels becomes a character in its own right, able to comment on its own story. In the Datascape he occupies the place of an administrator, at once guide, safeguard and memory of the digital world.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Le Riku de données accueille le Sora de données dans le Datascape, lui explique la nature des bugs et l'oriente d'un monde à l'autre. Il finit par révéler qu'il est le journal, et que les blocs corrompus qu'ils éliminent ensemble correspondent à des souvenirs abîmés.\n\nMaléfique et Pat, entrés dans le système, s'emparent d'une partie de ses fonctions et l'utilisent contre ses propres alliés. Le Riku de données se voit contraint d'affronter le Sora de données, avant que celui-ci ne le libère de la corruption qui le gangrène. Une fois rétabli, il choisit de sacrifier ses propres données pour purger le journal et permettre à Mickey de sauver l'ensemble ; le programme survit sous une forme diminuée, gardien d'un monde qu'il a lui-même reconstruit.",
          "Data-Riku welcomes Data-Sora into the Datascape, explains the nature of the bugs and steers him from world to world. He eventually reveals that he is the journal, and that the corrupted blocks they clear together correspond to damaged memories.\n\nMaleficent and Pete, having broken into the system, seize part of his functions and turn them against his own allies. Data-Riku is forced to fight Data-Sora, before the latter frees him from the corruption eating at him. Once restored, he chooses to sacrifice his own data to purge the journal and let Mickey save the whole, the program surviving in a reduced form, keeper of a world he rebuilt himself.",
        ),
      },
    ],
    trivia: [
      L("David Gallagher et Mamoru Miyano, voix habituelles de Riku, doublent aussi sa version de données.", "David Gallagher and Mamoru Miyano, Riku's usual voices, also play his data version."),
      L("Re:coded est le seul jeu où le journal de Jiminy, narrateur des résumés depuis Chain of Memories, devient un personnage jouable de l'intrigue.", "Re:coded is the only game where Jiminy's Journal, the narrator of recaps since Chain of Memories, becomes a character in the plot."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Data-Riku", url: "https://kingdomhearts.fandom.com/wiki/Data-Riku" }],
  },

  // ─────────────────────────── Naminé de données ───────────────────────────
  "data-namine": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "La Naminé de données est une empreinte laissée dans le journal de Jiminy par la vraie Naminé, à l'époque où elle réparait les souvenirs de Sora endormi dans le Manoir de la Cité du Crépuscule. Manipulant les liens de mémoire, elle a inscrit dans le carnet un message destiné à être découvert plus tard.\n\nElle n'est donc ni une copie complète ni un Simili : plutôt une intention conservée sous forme de données, capable de parler et d'expliquer. Son apparition à la fin de Re:coded donne rétrospectivement un sens à la phrase mystérieuse qui ouvre le jeu, « leur souffrance sera apaisée quand tu reviendras y mettre fin ».",
          "Data-Naminé is an imprint left in Jiminy's Journal by the real Naminé, back when she was repairing the memories of Sora asleep in the Twilight Town mansion. Manipulating memory links, she wrote into the book a message meant to be found later.\n\nShe is therefore neither a full copy nor a Nobody: rather an intention preserved as data, able to speak and explain. Her appearance at the end of Re:coded retroactively gives meaning to the mysterious line that opens the game, “their hurting will be mended when you return to end it”.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Au terme de son voyage dans le Datascape, le Sora de données atteint un Manoir Oblivion reconstitué où l'attend la Naminé de données. Elle lui apprend qu'en restaurant les souvenirs de Sora, la vraie Naminé a découvert dans son cœur des présences étrangères : des cœurs blessés, liés à lui sans qu'il le sache.\n\nElle nomme ceux qui attendent d'être sauvés — Roxas, Xion, Axel, ainsi que trois porteurs disparus dix ans plus tôt — et confie que seul Sora peut les atteindre. Mickey, entré dans le journal, entend le message et écrit aussitôt la lettre que Sora, Riku et Kairi reçoivent sur les Îles du Destin. La Naminé de données s'efface ensuite, sa fonction accomplie : elle n'était qu'un message en attente de destinataire.",
          "At the end of his journey through the Datascape, Data-Sora reaches a reconstructed Castle Oblivion where Data-Naminé awaits him. She tells him that, while restoring Sora's memories, the real Naminé found foreign presences inside his heart: hurting hearts, bound to him without his knowledge.\n\nShe names those waiting to be saved — Roxas, Xion, Axel, along with three wielders lost ten years earlier — and confides that only Sora can reach them. Mickey, having entered the journal, hears the message and immediately writes the letter Sora, Riku and Kairi receive on Destiny Islands. Data-Naminé then fades, her function fulfilled: she was only a message awaiting its addressee.",
        ),
      },
    ],
    trivia: [
      L("Meaghan Jette Martin double Naminé, y compris sa version de données, à partir de Birth by Sleep et Re:coded.", "Meaghan Jette Martin voices Naminé, data version included, from Birth by Sleep and Re:coded onward."),
      L("Le message qu'elle transmet est la charnière qui relie Kingdom Hearts II à Dream Drop Distance dans la chronologie.", "The message she delivers is the hinge linking Kingdom Hearts II to Dream Drop Distance in the timeline."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Data-Naminé", url: "https://kingdomhearts.fandom.com/wiki/Data-Namin%C3%A9" }],
  },

  // ─────────────────────────── Sora Sans-cœur ───────────────────────────
  "sora-heartless": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Le Sans-cœur de Sora n'est pas un boss ni un adversaire : c'est le héros lui-même, réduit à une petite Ombre noire aux yeux jaunes, la forme la plus commune des Sans-cœur. Le jeu ne lui donne pas de nom particulier ; il se contente de faire jouer le joueur avec ce corps minuscule pendant quelques instants.\n\nCe passage est l'un des plus marquants du premier Kingdom Hearts, parce qu'il matérialise sa règle centrale : n'importe quel cœur, même celui d'un porteur de Keyblade, peut devenir un Sans-cœur. Il pose aussi les fondations narratives de tout ce qui suivra, de la naissance de Roxas à la question du retour depuis les ténèbres.",
          "Sora's Heartless is not a boss or an opponent: it is the hero himself, reduced to a small black Shadow with yellow eyes, the commonest Heartless form. The game gives it no special name; it simply lets the player move in that tiny body for a few moments.\n\nThe sequence is one of the most striking in the first Kingdom Hearts, because it makes its central rule concrete: any heart, even a Keyblade wielder's, can become a Heartless. It also lays the narrative foundations for everything that follows, from Roxas's birth to the question of coming back from darkness.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "À la Forteresse Oubliée, Ansem, Chercheur des Ténèbres, révèle que le cœur de Kairi n'a jamais quitté celui de Sora depuis la destruction des Îles du Destin : la jeune fille est la septième Princesse de Cœur, et son cœur s'est réfugié dans celui du garçon. Pour la réveiller, Sora retourne contre lui la Keyblade des cœurs.\n\nL'acte libère Kairi mais coûte à Sora son propre cœur : il se dissout et laisse à sa place une petite Ombre. Le joueur guide alors ce Sans-cœur à travers le hall, poursuivi par des créatures identiques, jusqu'à Donald, Dingo et Kairi. C'est la lumière de Kairi, en le reconnaissant, qui rappelle son cœur et lui rend forme humaine, sans qu'il ait besoin d'être vaincu.",
          "In Hollow Bastion, Ansem, Seeker of Darkness, reveals that Kairi's heart never left Sora's since Destiny Islands was destroyed: the girl is the seventh Princess of Heart, and her heart took refuge in the boy's. To wake her, Sora turns the Keyblade of hearts on himself.\n\nThe act frees Kairi but costs Sora his own heart: he dissolves and leaves a small Shadow in his place. The player then guides that Heartless across the hall, chased by identical creatures, to Donald, Goofy and Kairi. It is Kairi's light, recognising him, that calls his heart back and restores his human shape, without his ever needing to be defeated.",
        ),
      },
      {
        title: L("Conséquences", "Consequences"),
        text: L(
          "Ce bref passage par les ténèbres a des suites considérables. Comme Sora possédait un cœur fort, sa perte engendre un Simili : Roxas, qui rejoindra l'Organisation XIII sans savoir d'où il vient. Le cœur de Kairi, entraîné dans l'affaire, produit à son tour Naminé, dont les pouvoirs sur la mémoire nourriront Chain of Memories.\n\nLa forme d'Ombre de Sora explique également pourquoi Kingdom Hearts II lui donne une Forme Antisora, transformation incontrôlable née de la part de ténèbres restée en lui. Enfin, l'épisode fournit à la saga son argument le plus fort sur les liens du cœur : Sora est revenu parce que quelqu'un l'attendait et l'a reconnu sous une autre apparence.",
          "That brief passage through darkness has considerable consequences. Because Sora had a strong heart, its loss produces a Nobody: Roxas, who joins Organization XIII without knowing where he comes from. Kairi's heart, caught up in the event, in turn produces Naminé, whose power over memory drives Chain of Memories.\n\nSora's Shadow form also explains why Kingdom Hearts II gives him Anti-Form, an uncontrollable transformation born of the darkness left inside him. Finally, the episode gives the saga its strongest argument about the bonds of the heart: Sora came back because someone was waiting for him and recognised him in another shape.",
        ),
      },
    ],
    trivia: [
      L("Le Sans-cœur de Sora est jouable : le joueur le dirige pendant la courte séquence qui suit sa transformation.", "Sora's Heartless is playable: the player controls it during the short sequence following his transformation."),
      L("Sa forme est celle d'une Ombre ordinaire, sans distinction visuelle, ce qui souligne l'anonymat des Sans-cœur.", "Its form is that of an ordinary Shadow, with no visual distinction, underlining the anonymity of the Heartless."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sora's Heartless", url: "https://kingdomhearts.fandom.com/wiki/Sora%27s_Heartless" }],
  },

  // ─────────────────────────── Dark Riku ───────────────────────────
  "dark-riku": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Dark Riku est le Riku du premier Kingdom Hearts, celui qui avait laissé Ansem, Chercheur des Ténèbres, s'emparer de son corps, ramené du passé par le Maître Xehanort pour compléter sa véritable Organisation XIII. Il n'est donc ni un Simili, ni une illusion, ni le Réplica de Riku : c'est le même garçon, prélevé à un moment de son histoire où les ténèbres le tenaient.\n\nSon cœur est logé dans un corps de réplique fabriqué d'après le programme d'Even, ce qui explique son apparence figée à l'adolescence et sa tenue noire à capuche. Il manie la Soul Eater et se bat avec la brutalité désinvolte du Riku possédé, ce qui en fait le miroir cruel du Riku adulte devenu Maître de la Keyblade.",
          "Dark Riku is the Riku of the first Kingdom Hearts, the one who let Ansem, Seeker of Darkness, take over his body, brought forward from the past by Master Xehanort to complete his real Organization XIII. He is therefore neither a Nobody nor an illusion nor the Riku Replica: he is the same boy, taken from a point in his story when darkness held him.\n\nHis heart is housed in a replica body built from Even's program, which explains his frozen teenage appearance and his black hooded outfit. He wields Soul Eater and fights with the offhand brutality of the possessed Riku, making him a cruel mirror of the grown Riku who has become a Keyblade Master.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dark Riku apparaît d'abord en éclaireur dans les mondes visités par Sora, notamment à San Fransokyo, où il s'infiltre pour semer des données corrompues et pousser le camp de la lumière à la faute. Riku le croise et comprend aussitôt à qui il a affaire : lui-même, tel qu'il était au pire moment de sa vie.\n\nAu Cimetière des Keyblades, il affronte Sora, Mickey et Riku dans un combat à trois contre un. Son but n'est pas seulement de vaincre : il cherche à faire douter Riku de la solidité de sa propre lumière. La défaite met fin à cette confrontation et renvoie le Riku du passé à son époque, où il poursuivra le chemin que l'on connaît.",
          "Dark Riku first appears as a scout in the worlds Sora visits, notably San Fransokyo, where he infiltrates to plant corrupted data and push the light's side into a mistake. Riku runs into him and immediately understands who he is facing: himself, as he was at the worst moment of his life.\n\nAt the Keyblade Graveyard he fights Sora, Mickey and Riku three against one. His aim is not only to win: he seeks to make Riku doubt the solidity of his own light. Defeat ends the confrontation and returns the Riku of the past to his own time, where he will walk the path we already know.",
        ),
      },
      {
        title: L("Le corps de réplique", "The replica body"),
        text: L(
          "La disparition de Dark Riku laisse derrière elle un corps de réplique vide, dans lequel subsistait le cœur du Réplica de Riku, ce double créé par Vexen au Manoir Oblivion et effacé depuis Chain of Memories. Le Réplica reprend brièvement le contrôle de l'enveloppe pour parler à Riku, dont il fut la copie et l'adversaire.\n\nPlutôt que de vivre à sa place, il choisit de céder ce corps à Naminé, qui n'en a jamais eu et n'existait jusque-là que comme Simili. Ce geste, l'un des plus émouvants de Kingdom Hearts III, permet à Naminé de revenir parmi les vivants et donne enfin un sens au programme des Réplicas, conçu à l'origine comme un outil de manipulation.",
          "Dark Riku's disappearance leaves behind an empty replica body in which the heart of the Riku Replica still lingered, the double created by Vexen in Castle Oblivion and erased since Chain of Memories. The Replica briefly takes control of the shell to speak to Riku, whose copy and opponent he once was.\n\nRather than live in his place, he chooses to give the body to Naminé, who never had one and until then existed only as a Nobody. That gesture, among the most moving in Kingdom Hearts III, lets Naminé return among the living and finally gives meaning to the Replica program, originally conceived as a tool of manipulation.",
        ),
      },
    ],
    trivia: [
      L("Son nom japonais, ダークリク, signifie littéralement « Riku sombre » ; les versions françaises conservent l'appellation anglaise.", "His Japanese name, ダークリク, literally means “Dark Riku”; French versions keep the English name."),
      L("Il faut le distinguer du Réplica de Riku de Chain of Memories, même si les deux finissent par partager le même corps.", "He must be distinguished from the Riku Replica of Chain of Memories, even though the two end up sharing the same body."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dark Riku", url: "https://kingdomhearts.fandom.com/wiki/Dark_Riku" }],
  },

  // ─────────────────────────── Xehanort armé ───────────────────────────
  "armored-xehanort": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Le Xehanort armé est la forme de combat que revêt le Maître Xehanort dans les dernières minutes de Kingdom Hearts III : une armure de porteur de Keyblade, bleu-gris et dorée, semblable à celles que Terra, Aqua et Ventus portaient pour voyager entre les mondes. Le vieil homme y ajoute la χ-blade reconstituée, arme née de l'affrontement de sept lumières et de treize ténèbres.\n\nLe choix de l'armure n'est pas anodin : elle rattache Xehanort à l'ancien ordre des porteurs de Scala ad Caelum dont il est issu, et rappelle qu'il fut lui-même un apprenti avant d'être un fossoyeur. C'est sous cette apparence qu'il livre le combat le plus long et le plus spectaculaire du jeu.",
          "Armored Xehanort is the battle form Master Xehanort takes in the final minutes of Kingdom Hearts III: a Keyblade wielder's armor, blue-grey and gold, similar to those Terra, Aqua and Ventus wore to travel between worlds. The old man adds to it the completed χ-blade, the weapon born from the clash of seven lights and thirteen darknesses.\n\nThe armor is a pointed choice: it ties Xehanort back to the old order of Scala ad Caelum wielders he came from, and recalls that he too was an apprentice before becoming a gravedigger. It is in this guise that he fights the game's longest and most spectacular battle.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Après avoir obtenu la χ-blade au Cimetière des Keyblades, Xehanort emmène Sora, Donald et Dingo à Scala ad Caelum, la cité de son enfance, et y déclenche l'affrontement final. Il revêt son armure, dresse la ville contre eux et se dédouble en répliques disséminées à travers les tours et les canaux, obligeant le trio à le poursuivre de toit en toit.\n\nLe combat s'achève lorsque l'armure est brisée. Xehanort la quitte pour un dernier duel où les Gardiens de la Lumière, revenus un à un, l'encerclent ; Kingdom Hearts s'ouvre au-dessus d'eux et le vieux maître, vaincu, finit par tendre la χ-blade à Sora. Il s'éteint auprès de son ancien ami Eraqus, réconcilié à l'instant de disparaître.",
          "After obtaining the χ-blade at the Keyblade Graveyard, Xehanort takes Sora, Donald and Goofy to Scala ad Caelum, the city of his childhood, and there begins the final confrontation. He dons his armor, turns the city against them and splits into replicas scattered across the towers and canals, forcing the trio to chase him from roof to roof.\n\nThe fight ends when the armor is shattered. Xehanort sheds it for a last duel in which the Guardians of Light, returning one by one, surround him; Kingdom Hearts opens above them and the defeated old master finally hands the χ-blade to Sora. He fades away beside his old friend Eraqus, reconciled at the moment of his disappearance.",
        ),
      },
      {
        title: L("Re Mind", "Re Mind"),
        text: L(
          "L'extension Re Mind revient sur cet épilogue et permet de rejouer le combat contre le Xehanort armé sous un autre angle. Le joueur peut y affronter le vieux maître avec plusieurs Gardiens de la Lumière plutôt qu'avec le trio habituel, ce qui donne à la rencontre des variantes tactiques inédites.\n\nRe Mind ajoute par ailleurs des affrontements de données contre les treize réceptacles et contre les formes les plus abouties de Xehanort, réservés aux joueurs les plus tenaces. Le Xehanort armé y devient l'un des sommets de difficulté de la série, aux côtés des combats secrets contre Yozora et les membres de l'Organisation en version « Data ».",
          "The Re Mind expansion revisits that epilogue and lets you replay the Armored Xehanort fight from another angle. The player can face the old master with several Guardians of Light rather than the usual trio, giving the encounter fresh tactical variants.\n\nRe Mind also adds data battles against the thirteen vessels and against Xehanort's most complete forms, reserved for the most stubborn players. Armored Xehanort becomes one of the series' difficulty peaks there, alongside the secret fights against Yozora and the Data versions of the Organization members.",
        ),
      },
    ],
    trivia: [
      L("L'armure rappelle celles de Terra, Aqua et Ventus, conçues à l'origine pour protéger les porteurs pendant les voyages entre les mondes.", "The armor recalls those of Terra, Aqua and Ventus, originally designed to protect wielders travelling between worlds."),
      L("Scala ad Caelum, décor de ce combat, signifie « escalier vers le ciel » en latin.", "Scala ad Caelum, the setting of this fight, means “stairway to heaven” in Latin."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Master Xehanort", url: "https://kingdomhearts.fandom.com/wiki/Master_Xehanort" }],
  },

  // ─────────────────────────── Mère de Sora ───────────────────────────
  "soras-mother": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "La mère de Sora est l'un des rares personnages de la saga à exister uniquement par la voix. Elle n'a pas de modèle 3D, pas de nom, pas de fiche de doublage mise en avant : on l'entend, une seule fois, appeler son fils depuis l'intérieur de la maison familiale des Îles du Destin.\n\nSa présence est pourtant significative. Kingdom Hearts se distingue par l'absence quasi totale de familles chez ses héros originaux : Riku, Kairi et Sora vivent entourés d'amis, jamais de parents à l'écran. Cette réplique unique est la seule preuve que Sora avait une vie domestique ordinaire avant que les mondes ne s'ouvrent, et elle sert de contrepoint discret à tout ce qui suit.",
          "Sora's mother is one of the rare characters in the saga to exist purely as a voice. She has no 3D model, no name, no credited performance: she is heard once, calling her son from inside the family house on Destiny Islands.\n\nHer presence still matters. Kingdom Hearts is notable for the near-total absence of families around its original heroes: Riku, Kairi and Sora live surrounded by friends, never by parents on screen. That single line is the only proof that Sora had an ordinary domestic life before the worlds opened, and it acts as a quiet counterpoint to everything that follows.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le soir où la tempête s'abat sur les Îles du Destin, Sora quitte sa chambre en toute hâte pour rejoindre la plage, inquiet pour le radeau et pour ses amis. Alors qu'il descend l'escalier, la voix de sa mère lui parvient de la pièce voisine : elle l'appelle pour le dîner, comme n'importe quel soir.\n\nSora ne répond pas et sort. Quelques minutes plus tard, les Sans-cœur envahissent l'île, le monde est englouti et le garçon se réveille à la Ville de Traverse, seul, sans plus rien de son ancienne vie. La banalité de cette phrase, prononcée juste avant la catastrophe, en fait l'un des moments les plus discrètement tragiques du premier jeu ; la mère de Sora n'est plus jamais évoquée par la suite, même après la restauration des Îles du Destin.",
          "On the night the storm hits Destiny Islands, Sora rushes out of his room for the beach, worried about the raft and about his friends. As he goes down the stairs, his mother's voice reaches him from the next room: she is calling him to dinner, like any other evening.\n\nSora does not answer and leaves. Minutes later the Heartless overrun the island, the world is swallowed and the boy wakes in Traverse Town, alone, with nothing left of his old life. The very ordinariness of that line, spoken just before the catastrophe, makes it one of the first game's quietly most tragic moments; Sora's mother is never mentioned again, even after Destiny Islands is restored.",
        ),
      },
    ],
    trivia: [
      L("Aucun parent de Sora, Riku ou Kairi n'apparaît à l'écran dans la série : cette voix est la seule exception.", "No parent of Sora, Riku or Kairi ever appears on screen in the series: this voice is the sole exception."),
      L("La scène se déroule dans la maison de Sora, décor visible uniquement lors de cette séquence de Kingdom Hearts.", "The scene takes place in Sora's house, a setting seen only during this sequence of Kingdom Hearts."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sora's Mother", url: "https://kingdomhearts.fandom.com/wiki/Sora%27s_Mother" }],
  },

  // ─────────────────────────── Grand-mère de Kairi ───────────────────────────
  "kairis-grandmother": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "La grand-mère de Kairi est une vieille dame du Jardin Radieux, dont la seule fonction dans la série est de transmettre une histoire. C'est elle qui raconte à sa petite-fille la légende du monde d'autrefois, baigné d'une lumière que les gens finirent par se disputer, jusqu'à ce que les ténèbres naissent de leurs cœurs et brisent l'unité des mondes.\n\nCe récit tient lieu de mythe fondateur à toute la saga : il explique pourquoi les mondes sont séparés, pourquoi la lumière subsiste dans le cœur des enfants et pourquoi elle peut, un jour, tout reconstruire. Le personnage n'a pas de nom et n'apparaît que quelques minutes, mais son texte est cité, résumé ou repris dans plusieurs épisodes ultérieurs.",
          "Kairi's grandmother is an old lady of Radiant Garden whose only function in the series is to pass on a story. She is the one who tells her granddaughter the legend of the world of old, bathed in a light people eventually fought over, until darkness was born from their hearts and shattered the unity of the worlds.\n\nThat tale serves as the saga's founding myth: it explains why the worlds are separated, why light endures in the hearts of children and why it may one day rebuild everything. The character has no name and appears for only a few minutes, but her text is quoted, summarised or reused in several later games.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Birth by Sleep montre la scène d'origine. Au Jardin Radieux, avant sa chute, une Kairi encore enfant écoute sa grand-mère lui raconter la légende dans une allée fleurie de la ville. Aqua, de passage, assiste à la fin du récit et échange quelques mots avec la vieille dame, avant de poser sur la petite fille une protection qui la mènera un jour vers la lumière.\n\nCette rencontre explique comment Kairi, quelques jours plus tard, se retrouve projetée jusqu'aux Îles du Destin lorsque le Jardin Radieux est englouti par les ténèbres. La légende qu'elle vient d'entendre l'accompagne alors, unique bagage d'une enfant qui a tout perdu, et ressurgit des années plus tard dans sa mémoire.",
          "Birth by Sleep shows the original scene. In Radiant Garden, before its fall, a still-young Kairi listens to her grandmother telling the legend in a flowered lane of the city. Aqua, passing through, catches the end of the tale and exchanges a few words with the old lady, before laying on the little girl a protection that will one day lead her toward the light.\n\nThat encounter explains how Kairi, a few days later, is flung all the way to Destiny Islands when Radiant Garden is swallowed by darkness. The legend she has just heard goes with her, the only baggage of a child who has lost everything, and resurfaces in her memory years later.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Dans le premier Kingdom Hearts, la légende revient au moment où Sora atteint la bibliothèque de la Forteresse Oubliée. Kairi, dont le cœur repose alors en lui, laisse remonter le souvenir de sa grand-mère, et le joueur entend le récit dans une scène en flash-back : un monde de lumière, des cœurs avides, une lumière préservée dans les enfants.\n\nLe passage fournit à Sora la clé de ce qu'il vit. Il explique la présence des Princesses de Cœur à la Forteresse Oubliée, la nature de la porte que cherche Ansem et la raison pour laquelle refermer Kingdom Hearts requiert la lumière et les ténèbres. Une simple histoire du soir devient ainsi le cadre théorique de toute la série.",
          "In the first Kingdom Hearts, the legend returns when Sora reaches the Hollow Bastion library. Kairi, whose heart rests inside him at that point, lets the memory of her grandmother surface, and the player hears the tale in a flashback: a world of light, greedy hearts, a light preserved in children.\n\nThe passage gives Sora the key to what he is living through. It explains the presence of the Princesses of Heart in Hollow Bastion, the nature of the door Ansem seeks and why closing Kingdom Hearts requires both light and darkness. A simple bedtime story thus becomes the theoretical frame of the entire series.",
        ),
      },
    ],
    trivia: [
      L("Le texte de la légende est repris presque mot pour mot dans plusieurs résumés et rappels de la série.", "The text of the legend is reused almost word for word in several of the series' recaps."),
      L("Birth by Sleep confirme rétroactivement que Kairi vient du Jardin Radieux, information seulement suggérée dans le premier jeu.", "Birth by Sleep retroactively confirms that Kairi comes from Radiant Garden, something only hinted at in the first game."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Kairi's Grandmother", url: "https://kingdomhearts.fandom.com/wiki/Kairi%27s_Grandmother" }],
  },

  // ─────────────────────────── Hayner, Pence et Olette ───────────────────────────
  "hayner-pence-olette": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Hayner, Pence et Olette forment le trio d'adolescents de la Cité du Crépuscule : Hayner l'impulsif, obsédé par le tournoi de Struggle, Pence le rondouillard curieux de tous les mystères de la ville, et Olette la plus organisée, qui traîne les deux autres à finir leurs devoirs de vacances.\n\nLeur repaire est une arrière-cour encombrée, leur horizon les sept mystères de la Cité du Crépuscule et le sommet du beffroi où l'on mange des glaces à l'eau de mer. Conçus comme des personnages ordinaires dans un univers de porteurs de Keyblade, ils incarnent la vie normale à laquelle les héros de la saga n'ont jamais tout à fait droit, et servent de repère émotionnel à Roxas comme à Sora.",
          "Hayner, Pence and Olette are Twilight Town's teenage trio: Hayner the impulsive one, obsessed with the Struggle tournament, Pence the round-faced boy curious about every mystery in town, and Olette the organised one, dragging the other two into finishing their summer homework.\n\nTheir hangout is a cluttered back alley, their horizon the seven wonders of Twilight Town and the top of the clock tower where sea-salt ice cream is eaten. Conceived as ordinary characters in a world of Keyblade wielders, they embody the normal life the saga's heroes never quite get, and act as an emotional anchor for Roxas and for Sora.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Dans 358/2 Days, Roxas croise les trois adolescents lors de ses missions à la Cité du Crépuscule, sans jamais leur parler vraiment. Membre de l'Organisation XIII, il les observe de loin : leur bande soudée est le contre-modèle exact de la vie qu'il mène, faite d'ordres et de solitude.\n\nCes apparitions préparent le glissement du début de Kingdom Hearts II. Lorsque DiZ enfermera Roxas dans une Cité du Crépuscule virtuelle pour récupérer ses souvenirs, ce sont des copies de données de Hayner, Pence et Olette qui lui tiendront lieu d'amis. Le joueur découvre ainsi que les liens les plus chaleureux du personnage ont été fabriqués pour lui.",
          "In 358/2 Days, Roxas crosses paths with the three teenagers during his missions in Twilight Town, without ever really speaking to them. As an Organization XIII member he watches from a distance: their tight-knit group is the exact opposite of the life he leads, made of orders and solitude.\n\nThose glimpses set up the shift at the start of Kingdom Hearts II. When DiZ locks Roxas inside a virtual Twilight Town to reclaim his memories, it is data copies of Hayner, Pence and Olette who stand in as his friends. The player thus discovers that the character's warmest bonds were manufactured for him.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Les premières heures du jeu se déroulent dans la Cité du Crépuscule virtuelle, où Roxas passe ses derniers jours d'été avec le trio : petits boulots, tournoi de Struggle, enquête sur les sept mystères. À mesure que le monde se dérègle, les trois amis s'effacent de sa réalité, jusqu'à la séparation finale devant le Manoir.\n\nSora rencontre ensuite leurs véritables homologues, qui ne le connaissent pas mais acceptent de l'aider. Ils lui ouvrent l'accès au Manoir, lui montrent les souterrains et lui offrent son premier repère dans un monde inconnu. Olette lui remet même de quoi financer son voyage. Sans être des combattants, ils deviennent des alliés constants du camp de la lumière.",
          "The game's first hours unfold in the virtual Twilight Town, where Roxas spends the last days of summer with the trio: odd jobs, the Struggle tournament, an investigation into the seven wonders. As the world unravels, the three friends fade out of his reality, up to the final parting in front of the mansion.\n\nSora then meets their real counterparts, who do not know him but agree to help. They open the way to the mansion, show him the underground passages and give him his first foothold in an unfamiliar world. Olette even hands him the means to fund his journey. Without being fighters, they become steady allies of the light's side.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sora, Donald et Dingo retrouvent le trio dès leur retour à la Cité du Crépuscule, où les trois adolescents lancent un bistrot de bistro-quiz et servent de base arrière au groupe. Ils accueillent Roxas quand celui-ci reparaît dans un corps neuf, sans se souvenir clairement de lui mais sans hésiter une seconde.\n\nL'épilogue leur donne l'une des dernières images du jeu : sur la place puis au sommet du beffroi, Hayner, Pence et Olette entourent Roxas, Xion, Naminé, Lea et Isa autour des glaces à l'eau de mer. Le trio ordinaire de la Cité du Crépuscule referme ainsi l'arc entamé au tout début de Kingdom Hearts II.",
          "Sora, Donald and Goofy find the trio again as soon as they return to Twilight Town, where the three teenagers are running a small bistro and serve as the group's base. They welcome Roxas when he reappears in a new body, without clearly remembering him but without a second's hesitation.\n\nThe epilogue gives them one of the game's last images: in the square and then atop the clock tower, Hayner, Pence and Olette surround Roxas, Xion, Naminé, Lea and Isa over sea-salt ice cream. Twilight Town's ordinary trio thus closes the arc begun at the very start of Kingdom Hearts II.",
        ),
      },
    ],
    trivia: [
      L("Leurs noms japonais sont ハイネ, ピンツ et オレット ; les versions occidentales conservent la même sonorité.", "Their Japanese names are ハイネ, ピンツ and オレット; Western versions keep the same sounds."),
      L("La séquence d'ouverture de Kingdom Hearts II confie au joueur le contrôle de Roxas pendant plusieurs heures avant que Sora n'apparaisse.", "Kingdom Hearts II's opening hands the player control of Roxas for several hours before Sora even appears."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hayner", url: "https://kingdomhearts.fandom.com/wiki/Hayner" }],
  },

  // ─────────────────────────── Seifer ───────────────────────────
  "seifer": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Seifer Almasy vient de Final Fantasy VIII, où il est le rival arrogant du héros Squall. Kingdom Hearts le transplante à la Cité du Crépuscule sous une forme adolescente : longue veste blanche, bonnet gris, cicatrice en travers du visage et même goût pour la provocation.\n\nIl y dirige un « comité de discipline » autoproclamé, censé faire régner l'ordre dans la ville, avec Rai, Fuu et parfois Vivi. Le personnage sert surtout de rival de proximité pour Hayner et son groupe, dans une rivalité de quartier qui se règle au tournoi de Struggle plutôt qu'à la Keyblade. C'est l'une des rares intrigues de la saga totalement dépourvue de Sans-cœur.",
          "Seifer Almasy comes from Final Fantasy VIII, where he is the arrogant rival of the hero Squall. Kingdom Hearts transplants him into Twilight Town in teenage form: long white coat, grey beanie, a scar across the face and the same taste for provocation.\n\nThere he runs a self-appointed “disciplinary committee” meant to keep order in town, with Rai, Fuu and sometimes Vivi. The character mainly serves as a local rival to Hayner's group, in a neighbourhood feud settled at the Struggle tournament rather than with Keyblades. It is one of the rare plots in the saga entirely free of Heartless.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        title: L("Kingdom Hearts II — la ville virtuelle", "Kingdom Hearts II — the virtual town"),
        text: L(
          "Dans la Cité du Crépuscule virtuelle où Roxas passe ses derniers jours, Seifer est l'adversaire quotidien : il accuse le groupe de Hayner d'avoir volé les photos de la ville, provoque des duels de Struggle sur la place et se moque de tout le monde avec ses acolytes.\n\nRoxas l'affronte à plusieurs reprises et finit par le battre au tournoi. Ces scènes servent un double objectif : elles installent le quotidien banal du personnage avant la révélation de sa nature, et elles introduisent le Struggle comme mini-jeu récurrent. Les indices d'anomalie — un temps qui se fige, des Similis qui rôdent — apparaissent d'ailleurs souvent au milieu de ces disputes de cour d'école.",
          "In the virtual Twilight Town where Roxas spends his last days, Seifer is the everyday adversary: he accuses Hayner's group of stealing the town's photos, picks Struggle fights in the square and mocks everyone with his sidekicks.\n\nRoxas faces him several times and eventually beats him in the tournament. These scenes serve two purposes: they establish the character's mundane daily life before his true nature is revealed, and they introduce Struggle as a recurring minigame. The signs that something is wrong — time freezing, Nobodies prowling — often turn up in the middle of these schoolyard squabbles.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        title: L("Kingdom Hearts II — la vraie Cité du Crépuscule", "Kingdom Hearts II — the real Twilight Town"),
        text: L(
          "Le vrai Seifer, celui de la Cité du Crépuscule réelle, croise Sora, Donald et Dingo au cours de leurs passages. Il commence par les prendre de haut, jusqu'à ce qu'un combat commun contre les Similis le pousse à revoir son jugement.\n\nDans les versions Final Mix et les rééditions, il finit par confier son trophée de Struggle à Sora en reconnaissant sa valeur, geste inattendu chez un personnage bâti sur la vantardise. Ses apparitions restent brèves et strictement locales : Seifer ne quitte jamais la Cité du Crépuscule, ne s'intéresse ni à la Keyblade ni à l'Organisation, et reste jusqu'au bout un adolescent de sa ville.",
          "The real Seifer, the one from the actual Twilight Town, meets Sora, Donald and Goofy during their visits. He starts by looking down on them, until a shared fight against the Nobodies makes him reconsider.\n\nIn the Final Mix versions and later re-releases he ends up handing his Struggle trophy to Sora in acknowledgement of his worth, an unexpected gesture from a character built on bragging. His appearances stay brief and strictly local: Seifer never leaves Twilight Town, takes no interest in the Keyblade or the Organization, and remains to the end a teenager from his own town.",
        ),
      },
    ],
    trivia: [
      L("Will Friedle et Takehito Koyasu le doublent, ce dernier reprenant son rôle de Final Fantasy VIII.", "Will Friedle and Takehito Koyasu voice him, the latter reprising his Final Fantasy VIII role."),
      L("Son bonnet et sa veste reprennent la silhouette du Seifer adulte de Final Fantasy VIII, adaptée à un adolescent.", "His beanie and coat echo the silhouette of the adult Seifer from Final Fantasy VIII, adapted to a teenager."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Seifer", url: "https://kingdomhearts.fandom.com/wiki/Seifer_Almasy" }],
  },

  // ─────────────────────────── Rai et Fuu ───────────────────────────
  "rai-and-fuu": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Rai et Fuu sont les versions adolescentes de Raijin et Fujin, les deux lieutenants de Seifer dans Final Fantasy VIII. Leurs noms japonais signifient respectivement « tonnerre » et « vent », en écho aux dieux du folklore, et Kingdom Hearts conserve leurs tics de langage devenus célèbres : Rai termine presque chaque phrase par « tu vois ? », tandis que Fuu s'exprime par mots isolés.\n\nÀ la Cité du Crépuscule, ils composent avec Seifer le comité de discipline, groupe qui se donne pour mission de faire régner l'ordre mais passe l'essentiel de son temps à chercher querelle à la bande de Hayner. Leur rôle est purement local : ils ne quittent jamais leur ville et n'ont aucun lien avec l'intrigue des Sans-cœur.",
          "Rai and Fuu are the teenage versions of Raijin and Fujin, Seifer's two lieutenants in Final Fantasy VIII. Their Japanese names mean “thunder” and “wind”, echoing folklore deities, and Kingdom Hearts keeps their famous verbal tics: Rai ends nearly every sentence with “y'know?”, while Fuu speaks in single words.\n\nIn Twilight Town they form Seifer's disciplinary committee, a group that claims to keep order but spends most of its time picking fights with Hayner's gang. Their role is purely local: they never leave their town and have no connection to the Heartless plot.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Rai et Fuu accompagnent Seifer dans toutes ses apparitions, aussi bien dans la Cité du Crépuscule virtuelle où vit Roxas que dans la ville réelle visitée par Sora. Ils encadrent le tournoi de Struggle, commentent les combats et servent d'adversaires lors de certaines épreuves.\n\nLeur affrontement avec Roxas fait partie des premières scènes jouables du jeu : la dispute autour des photos volées dégénère en bagarre au bâton de Struggle sur la place du marché. Plus tard, la découverte de Similis dans les rues les laisse aussi désemparés que le reste des habitants. Comme Seifer, ils incarnent la Cité du Crépuscule ordinaire, celle qui continue de vivre pendant que la guerre des cœurs se joue ailleurs.",
          "Rai and Fuu accompany Seifer in all his appearances, both in the virtual Twilight Town where Roxas lives and in the real town Sora visits. They oversee the Struggle tournament, comment on the fights and act as opponents in some rounds.\n\nTheir clash with Roxas is among the game's first playable scenes: the argument over the stolen photos degenerates into a Struggle-bat brawl in the market square. Later, the appearance of Nobodies in the streets leaves them as helpless as the rest of the townspeople. Like Seifer, they embody ordinary Twilight Town, the one that keeps living while the war of hearts is fought elsewhere.",
        ),
      },
    ],
    trivia: [
      L("Fujin, dans Final Fantasy VIII, parle déjà par mots isolés : Kingdom Hearts reprend fidèlement ce trait.", "Fujin already speaks in single words in Final Fantasy VIII: Kingdom Hearts faithfully keeps the trait."),
      L("Rai et Fuu ne sont jouables dans aucun épisode ; ils n'apparaissent que comme adversaires ou figurants.", "Rai and Fuu are playable in no game; they appear only as opponents or background characters."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Fuu", url: "https://kingdomhearts.fandom.com/wiki/Fuu" }],
  },

  // ─────────────────────────── Tidus, Wakka et Selphie ───────────────────────────
  "tidus-wakka-selphie": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Tidus et Wakka viennent de Final Fantasy X, Selphie Tilmitt de Final Fantasy VIII ; Kingdom Hearts les réunit sur les Îles du Destin sous la forme d'enfants du même âge que Sora, Riku et Kairi. Chacun conserve un attribut de son jeu d'origine : Tidus se bat au bâton comme au blitzball, Wakka lance un ballon, Selphie manie une corde à sauter et un caractère enjoué.\n\nLeur rôle est celui de camarades de jeu et de partenaires d'entraînement, dans un monde volontairement paisible destiné à servir de contraste avec tout ce qui suivra. Ils font partie des premiers personnages Final Fantasy que le joueur rencontre, à un moment où la série n'a pas encore montré un seul Sans-cœur.",
          "Tidus and Wakka come from Final Fantasy X, Selphie Tilmitt from Final Fantasy VIII; Kingdom Hearts brings them together on Destiny Islands as children the same age as Sora, Riku and Kairi. Each keeps an attribute from their home game: Tidus fights with a stick as he does at blitzball, Wakka throws a ball, Selphie wields a jump rope and a cheerful temperament.\n\nTheir role is that of playmates and sparring partners, in a deliberately peaceful world meant to contrast with everything that follows. They are among the first Final Fantasy characters the player meets, at a point when the series has not yet shown a single Heartless.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Sur les Îles du Destin, les trois enfants servent de tutoriel vivant : le joueur peut les défier pour apprendre les bases du combat, chacun exigeant une approche différente — parer les balles de Wakka, esquiver les assauts rapides de Tidus, contrer les moulinets de Selphie. Ils participent aussi aux préparatifs du radeau et aux courses organisées par Riku.\n\nQuand la tempête engloutit les îles, ils disparaissent avec le monde et n'apparaissent plus du reste du jeu. Leur absence pèse discrètement sur les retours de Sora : le monde restauré à la fin de l'aventure les rend à leur vie ordinaire, hors champ, sans qu'aucune scène ne le montre explicitement.",
          "On Destiny Islands the three children act as a living tutorial: the player can challenge them to learn the basics of combat, each demanding a different approach — parrying Wakka's ball, dodging Tidus's quick strikes, countering Selphie's swings. They also take part in preparing the raft and in the races Riku organises.\n\nWhen the storm swallows the islands they vanish with the world and do not appear again for the rest of the game. Their absence quietly weighs on Sora's returns: the world restored at the end of the adventure gives them back their ordinary lives, off screen, without any scene showing it outright.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Kingdom Hearts II les montre de nouveau sur les Îles du Destin restaurées, où Selphie discute avec Kairi de l'absence de Sora et de Riku. La scène rappelle que la vie a repris sur l'île pendant que les héros parcouraient les mondes.\n\nTidus et Wakka n'y ont plus de rôle de combat : ils appartiennent au décor d'une enfance à laquelle Sora ne peut plus vraiment revenir. Leur présence renforce le motif de l'île comme point de départ et point d'arrivée, ce lieu où l'on retourne toujours et qui, chaque fois, semble un peu plus petit.",
          "Kingdom Hearts II shows them again on the restored Destiny Islands, where Selphie talks to Kairi about Sora's and Riku's absence. The scene reminds us that life resumed on the island while the heroes roamed the worlds.\n\nTidus and Wakka no longer have any combat role: they belong to the scenery of a childhood Sora can no longer truly return to. Their presence reinforces the island as both starting point and destination, the place one always comes back to and that each time seems a little smaller.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Re:coded ramène le trio sous forme de données, dans la version numérisée des Îles du Destin qui ouvre le jeu. Le Sora de données y retrouve des copies de Tidus, Wakka et Selphie, fidèles à leurs répliques du premier épisode, jusqu'à ce que les bugs commencent à ronger le décor.\n\nCe retour a une fonction précise : il rejoue les premières minutes de Kingdom Hearts pour mieux montrer ce qui a été corrompu dans le journal de Jiminy. Les camarades de jeu de l'enfance deviennent des repères de mémoire, et leur altération signale au joueur que le monde qu'il explore n'est plus qu'un souvenir abîmé.",
          "Re:coded brings the trio back as data, in the digitised version of Destiny Islands that opens the game. Data-Sora meets copies of Tidus, Wakka and Selphie there, faithful to their lines from the first game, until bugs start eating away at the scenery.\n\nThat return has a precise purpose: it replays the first minutes of Kingdom Hearts the better to show what has been corrupted in Jiminy's Journal. The playmates of childhood become memory landmarks, and their alteration signals to the player that the world being explored is only a damaged recollection.",
        ),
      },
    ],
    trivia: [
      L("Tidus et Wakka sont absents de Kingdom Hearts II en tant qu'adversaires : seule Selphie y a des répliques notables.", "Tidus and Wakka are absent from Kingdom Hearts II as opponents: only Selphie has notable lines there."),
      L("Kingdom Hearts est sorti quelques mois après Final Fantasy X au Japon, ce qui rendait la présence de Tidus et Wakka particulièrement remarquée.", "Kingdom Hearts released a few months after Final Fantasy X in Japan, which made the presence of Tidus and Wakka especially noticeable."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Tidus", url: "https://kingdomhearts.fandom.com/wiki/Tidus" },
      { label: "Kingdom Hearts Wiki — Destiny Islands", url: "https://kingdomhearts.fandom.com/wiki/Destiny_Islands" },
    ],
  },
};
