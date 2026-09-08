import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des lieux « abstraits » et des mondes secondaires de la saga :
 * nature du lieu, puis récit de chaque apparition, jeu par jeu.
 * Les clés sont les slugs des entrées de worlds.ts et worlds-more.ts.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Rivière Intemporelle ───────────────────────────
  "timeless-river": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "La Rivière Intemporelle n'est pas un monde comme les autres : c'est le passé du Château Disney, atteint par une porte qui apparaît dans la salle de la Pierre Angulaire lorsque les ténèbres tentent de forcer le château. Tout y est rendu dans le style des premiers courts métrages de Mickey Mouse : décors en noir et blanc, traits épais, mouvements saccadés, et absence totale de couleur, jusqu'aux héros eux-mêmes, redessinés à l'ancienne dès qu'ils franchissent le seuil.\n\nLe lieu emprunte directement à Steamboat Willie (1928) et aux dessins animés Disney des années 1920-1930 : le bateau à vapeur, le chantier de construction, la caserne de pompiers, la grange. Des « fenêtres du temps » suspendues dans le décor rejouent des scènes de ces courts métrages et servent de passages entre les zones. La Rivière Intemporelle est donc à la fois un monde à explorer et un hommage aux origines mêmes de Disney, intégré à l'intrigue par le voyage dans le temps.",
          "Timeless River is not a world like the others: it is Disney Castle's own past, reached through a door that appears in the Cornerstone of Light's hall when darkness tries to force its way into the castle. Everything there is drawn in the style of Mickey Mouse's earliest shorts: black-and-white sets, thick outlines, jerky motion and no colour at all, right down to the heroes themselves, redrawn in the old fashion the moment they cross the threshold.\n\nThe place borrows directly from Steamboat Willie (1928) and the Disney cartoons of the 1920s and 1930s: the steamboat, the building site, the fire station, the barn. Floating \"windows of time\" replay scenes from those shorts and act as passages between areas. Timeless River is therefore both a world to explore and a tribute to Disney's very origins, folded into the plot through time travel.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Quand Sora, Donald et Dingo reviennent au Château Disney, ils le trouvent envahi par les Sans-cœur : la Pierre Angulaire de Lumière, qui protège le domaine, faiblit. Merlin explique qu'une intrusion est venue du passé et qu'une porte s'est ouverte dans la salle de la Pierre Angulaire. Le trio la franchit et se retrouve transformé en personnages de dessin animé muet, dans le château tel qu'il était avant sa construction.\n\nPat, venu du présent, cherche à voler la Pierre Angulaire pour que Maléfique puisse s'emparer du château. Il croise son propre double du passé, encore capitaine de bateau à vapeur, qui ne comprend rien à l'affaire et finit par aider les héros. Sora doit rassembler des images éparpillées dans les fenêtres du temps pour ouvrir la voie, avant d'affronter le Pat du présent sur le pont du bateau à vapeur.\n\nLa victoire referme la brèche : la Pierre Angulaire retrouve son éclat et le Château Disney est sauvé. C'est aussi dans ce monde que Sora comprend à quel point le roi Mickey et son royaume sont liés à l'histoire de la lumière.",
          "When Sora, Donald and Goofy return to Disney Castle, they find it overrun by Heartless: the Cornerstone of Light, which shields the grounds, is failing. Merlin explains that an intrusion has come from the past and that a door has opened in the Cornerstone's hall. The trio steps through and finds itself turned into silent-cartoon characters, in the castle as it was before it was built.\n\nPete, come from the present, is trying to steal the Cornerstone so that Maleficent can seize the castle. He runs into his own past self, still a steamboat captain, who understands none of it and ends up helping the heroes. Sora has to gather scattered images from the windows of time to open the way, before facing present-day Pete on the deck of the steamboat.\n\nVictory closes the breach: the Cornerstone shines again and Disney Castle is saved. It is also in this world that Sora grasps how deeply King Mickey and his kingdom are tied to the history of light.",
        ),
      },
    ],
    trivia: [
      L("Sora, Donald et Dingo adoptent dans ce monde leur design des tout premiers dessins animés Disney : Dingo y porte son chapeau et sa veste d'époque.", "In this world Sora, Donald and Goofy take on a design from the earliest Disney cartoons: Goofy wears his period hat and jacket."),
      L("La musique du monde reprend des orchestrations façon fanfare muette, sans percussions modernes, pour coller au style des années 1920.", "The world's music uses silent-era band arrangements, without modern percussion, to match the 1920s style."),
      L("Le Pat du passé est le seul personnage de la saga à cohabiter à l'écran avec sa propre version future.", "Past Pete is the only character in the series to share the screen with his own future self."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Timeless River", url: "https://kingdomhearts.fandom.com/wiki/Timeless_River" },
    ],
  },

  // ─────────────────────────── Symphonie du Sorcier ───────────────────────────
  "symphony-of-sorcery": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "La Symphonie du Sorcier adapte Fantasia (1940), le film Disney qui met en images des œuvres du répertoire classique. Le monde n'est pas construit autour d'un récit parlé : il n'y a aucun dialogue de personnage Disney, et la musique y tient lieu de narration, comme dans le film. On y traverse les décors de L'Apprenti sorcier, de la Symphonie pastorale, de la Danse des heures, de Casse-Noisette et d'Une nuit sur le mont Chauve.\n\nDans la saga, ce monde est un Monde Endormi : il a été englouti par les ténèbres à l'époque de la première guerre des Keyblades et n'a jamais été tout à fait réveillé, ce qui le rend accessible pendant l'examen de Maîtrise de Dream Drop Distance. Il se déroule dans la Tour Mystérieuse d'un lointain passé, au temps où Mickey était l'apprenti de Yen Sid : le monde est donc autant le rêve du château du sorcier que celui d'une partition.",
          "Symphony of Sorcery adapts Fantasia (1940), the Disney film that set classical works to animation. The world is not built around spoken storytelling: no Disney character speaks, and music does the narrating, exactly as in the film. The player crosses the settings of The Sorcerer's Apprentice, the Pastoral Symphony, Dance of the Hours, The Nutcracker and Night on Bald Mountain.\n\nWithin the series this is a Sleeping World: it was swallowed by darkness at the time of the first Keyblade War and never fully woke, which is why it can be reached during the Mark of Mastery exam in Dream Drop Distance. It takes place in the Mysterious Tower of a distant past, when Mickey was Yen Sid's apprentice: the world is thus as much the dream of the sorcerer's castle as of a musical score."
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Sora y arrive dans la Tour Mystérieuse du passé et découvre que la musique du monde s'est déréglée : les mélodies se sont dispersées et les Avale-Rêves s'y sont installés. Il croise le jeune Mickey, apprenti de Yen Sid, qui a détourné le chapeau magique de son maître pour faire travailler les balais à sa place et provoqué l'inondation que l'on connaît. Sora l'aide à rétablir l'ordre, puis affronte le Symphony Master, un Avale-Rêves qui a pris le contrôle de la partition.\n\nRiku, plongé dans la même version du monde, traverse quant à lui les décors de Casse-Noisette avant d'atteindre le mont Chauve, où le démon Chernabog réveille les esprits de la nuit. Riku l'affronte au sommet et brise le sortilège avant l'aube.\n\nLes deux amis quittent le monde en ayant compris que les rêves d'un monde endormi peuvent être aussi bien un souvenir heureux qu'un piège : la Symphonie du Sorcier est l'une des dernières étapes avant leur retour auprès de Yen Sid.",
          "Sora arrives in the Mysterious Tower of the past and discovers that the world's music has come undone: melodies have scattered and Dream Eaters have moved in. He meets young Mickey, Yen Sid's apprentice, who has borrowed his master's magic hat to make the brooms work for him and caused the famous flood. Sora helps him set things right, then faces the Symphony Master, a Dream Eater that has taken control of the score.\n\nRiku, diving into the same version of the world, crosses the settings of The Nutcracker before reaching Bald Mountain, where the demon Chernabog rouses the spirits of the night. Riku fights him at the summit and breaks the spell before dawn.\n\nThe two friends leave the world having understood that a Sleeping World's dreams can be a happy memory as easily as a trap: Symphony of Sorcery is one of the last stops before their return to Yen Sid.",
        ),
      },
    ],
    trivia: [
      L("C'est le seul monde de la saga dont l'intrigue se raconte entièrement sans dialogue parlé de personnage Disney.", "It is the only world in the series whose story is told entirely without spoken Disney dialogue."),
      L("Le Mickey que Sora y rencontre est le Mickey du passé, apprenti de Yen Sid, et non le roi qui l'accompagne dans le présent.", "The Mickey Sora meets there is the Mickey of the past, Yen Sid's apprentice, not the king who travels with him in the present."),
      L("La Tour Mystérieuse elle-même est directement issue du segment de L'Apprenti sorcier de Fantasia.", "The Mysterious Tower itself comes straight from the Sorcerer's Apprentice segment of Fantasia."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Symphony of Sorcery", url: "https://kingdomhearts.fandom.com/wiki/Symphony_of_Sorcery" },
    ],
  },

  // ─────────────────────────── Disneyville ───────────────────────────
  "disney-town": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "Disneyville est la cité qui s'étend au pied du Château Disney : elle n'adapte pas un film précis mais l'univers des courts métrages de Mickey Mouse et de ses amis, avec ses rues colorées, sa place centrale, sa fontaine et ses boutiques. Contrairement au Château Disney de Kingdom Hearts II, on n'y visite pas les appartements royaux : la ville est le versant populaire et festif du royaume de Mickey.\n\nDans Birth by Sleep, le monde est visité pendant le Festival des Rêves, une fête organisée par la reine Minnie, qui se conclut par la remise du Prix du Million de Rêves à celui que les habitants jugent le plus méritant. Le monde est structuré autour de ses mini-jeux : les courses de Rumble Racing dans les rues, le Fruitball sur la place, et l'Ice Cream Beat, où l'on compose des glaces en rythme. C'est le seul monde de Birth by Sleep sans véritable combat de boss.",
          "Disney Town is the city spreading out at the foot of Disney Castle: it adapts no particular film but the world of the Mickey Mouse shorts, with its colourful streets, central square, fountain and shops. Unlike Disney Castle in Kingdom Hearts II, the royal apartments are not visited here: the town is the everyday, festive side of Mickey's kingdom.\n\nIn Birth by Sleep the world is visited during the Dream Festival, a celebration organised by Queen Minnie that ends with the Million Dreams Award, given to whoever the townsfolk judge most deserving. The world is built around its mini-games: Rumble Racing through the streets, Fruitball on the square, and Ice Cream Beat, where ice creams are assembled in rhythm. It is the only Birth by Sleep world without a proper boss fight.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Terra, Ventus et Aqua arrivent chacun à leur tour en pleine préparation du Festival des Rêves. Ils sont accueillis par Riri, Fifi et Loulou, guidés par Tic et Tac vers les épreuves, et rencontrent Horace pour l'Ice Cream Beat ainsi que Picsou, qui cherche une recette de glace capable de faire le tour des mondes. Chaque héros participe aux courses et aux jeux, sous l'œil bienveillant de la reine Minnie.\n\nPat, lui, veut le Prix du Million de Rêves. Il se présente d'abord sous le costume de Capitaine Justice, héros autoproclamé qui prétend sauver la ville, puis, démasqué, revient sous les traits du Capitaine Ténèbres pour saboter les épreuves. Ses tricheries finissent par être découvertes, et la reine Minnie, refusant de laisser passer une telle conduite, le bannit du royaume vers un autre monde.\n\nCe bannissement a des conséquences durables : c'est ainsi que Pat se retrouve à errer entre les mondes, puis à s'allier à Maléfique, qu'il servira dans les épisodes ultérieurs. Disneyville, monde le plus léger de Birth by Sleep, contient donc l'un de ses points de bascule.",
          "Terra, Ventus and Aqua each arrive in turn while the Dream Festival is being set up. They are welcomed by Huey, Dewey and Louie, guided to the events by Chip and Dale, and meet Horace for Ice Cream Beat as well as Scrooge McDuck, who is after an ice-cream recipe good enough to travel the worlds. Each hero takes part in the races and the games, under Queen Minnie's kindly eye.\n\nPete, for his part, wants the Million Dreams Award. He first shows up as Captain Justice, a self-proclaimed hero claiming to save the town, then, unmasked, returns as Captain Dark to sabotage the events. His cheating is eventually exposed, and Queen Minnie, refusing to let such conduct stand, banishes him from the kingdom into another world.\n\nThat banishment has lasting consequences: it is how Pete comes to wander between worlds and then to ally himself with Maleficent, whom he serves in later episodes. Disney Town, the lightest world in Birth by Sleep, therefore holds one of its turning points.",
        ),
      },
    ],
    trivia: [
      L("La glace à l'eau de mer, emblématique de la Cité du Crépuscule, est présentée dans Birth by Sleep comme une invention liée aux recherches de Picsou.", "Sea-salt ice cream, emblematic of Twilight Town, is presented in Birth by Sleep as an invention connected to Scrooge McDuck's research."),
      L("Rumble Racing est jouable en dehors du monde, depuis le Arène des Mirages, en solo comme en multijoueur.", "Rumble Racing can be played outside the world, from the Mirage Arena, solo or in multiplayer."),
      L("Le bannissement de Pat par la reine Minnie explique rétroactivement pourquoi il sert Maléfique dans le premier Kingdom Hearts.", "Pete's banishment by Queen Minnie retroactively explains why he serves Maleficent in the first Kingdom Hearts."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Disney Town", url: "https://kingdomhearts.fandom.com/wiki/Disney_Town" },
    ],
  },

  // ─────────────────────────── Game Central Station ───────────────────────────
  "game-central-station": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "Game Central Station adapte Les Mondes de Ralph (2012). Dans le film, il s'agit de la gare centrale où se croisent les personnages des bornes d'arcade d'une même salle de jeux : chaque jeu y est relié par une prise multiple, et les habitants peuvent voyager d'une borne à l'autre tant que leur machine reste branchée. Quitter son propre jeu est possible, mais mourir ailleurs que chez soi est définitif.\n\nCette gare sert de plaque tournante au monde tel qu'il apparaît dans la saga : on y accède aux jeux voisins, à commencer par Sugar Rush, le jeu de course en univers sucré de Vanellope, et par Fix-It Felix Jr., celui dont Ralph est le méchant. Le monde n'a jamais été intégré aux épisodes principaux : il est propre au volet mobile de la saga, et constitue à ce titre l'un des rares mondes Disney visitables ailleurs que sur console.",
          "Game Central Station adapts Wreck-It Ralph (2012). In the film it is the hub where the characters of an arcade's cabinets meet: every game is linked through a power strip, and its inhabitants can travel from cabinet to cabinet as long as their machine stays plugged in. Leaving your own game is possible, but dying outside it is permanent.\n\nThat station is the hub of the world as it appears in the series: from it the player reaches neighbouring games, starting with Sugar Rush, Vanellope's candy-themed racing game, and Fix-It Felix Jr., the game in which Ralph is the villain. The world has never been part of the numbered entries: it belongs to the mobile side of the series, and is thereby one of the few Disney worlds visitable outside a console game."
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Le monde a été ajouté à Kingdom Hearts Union χ sous forme d'un contenu événementiel, dans la lignée des collaborations ponctuelles du jeu mobile. Le Porteur, héros muet de l'ère des Prophètes, y débarque et découvre la gare et ses correspondances vers les autres bornes, avant de faire la connaissance de Ralph la Casse, de Vanellope von Schweetz et de Félix Fixe-Tout.\n\nComme souvent dans Union χ, l'intrigue se joue autour de l'apparition de Sans-cœur dans un monde qui n'a pas l'habitude d'en voir : les habitants des jeux d'arcade doivent distinguer ce qui relève des règles de leur propre programme et ce qui vient de l'extérieur. Le Porteur les épaule le temps de l'événement, avec des missions et des récompenses limitées dans le temps.\n\nCe passage reste anecdotique dans la chronologie générale : dans les épisodes principaux, Ralph n'apparaît que sous forme de lien d'invocation utilisable par Sora dans Kingdom Hearts III, sans monde associé.",
          "The world was added to Kingdom Hearts Union χ as event content, in line with the mobile game's occasional collaborations. The Player, the silent hero of the age of the Foretellers, arrives there and discovers the station and its connections to the other cabinets, before meeting Wreck-It Ralph, Vanellope von Schweetz and Fix-It Felix.\n\nAs often in Union χ, the plot turns on Heartless appearing in a world unused to them: the inhabitants of the arcade games have to tell apart what belongs to their own program's rules and what comes from outside. The Player supports them for the duration of the event, through time-limited quests and rewards.\n\nThe episode remains a footnote in the wider chronology: in the numbered games, Ralph appears only as a summon link Sora can call on in Kingdom Hearts III, with no world attached.",
        ),
      },
    ],
    trivia: [
      L("Le nom du monde n'a pas été traduit en français : il conserve son appellation anglaise, Game Central Station.", "The world's name was not translated into French: it keeps its English name, Game Central Station."),
      L("Dans Kingdom Hearts III, Ralph la Casse revient uniquement comme lien d'invocation, aux côtés d'Ariel, Simba et Stitch.", "In Kingdom Hearts III, Wreck-It Ralph returns only as a summon link, alongside Ariel, Simba and Stitch."),
      L("Union χ a fermé ses serveurs en 2021, ce qui rend ce monde inaccessible aujourd'hui hors des archives vidéo du jeu.", "Union χ shut down its servers in 2021, which makes this world unreachable today outside video archives of the game."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Game Central Station", url: "https://kingdomhearts.fandom.com/wiki/Game_Central_Station" },
    ],
  },

  // ─────────────────────────── Palier de l'Éveil ───────────────────────────
  "dive-to-the-heart": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "Le Palier de l'Éveil n'est pas un monde mais la représentation visuelle de l'intérieur d'un cœur. Il prend la forme d'un ou plusieurs piliers circulaires de vitrail, suspendus dans une obscurité sans fond, que l'on atteint en tombant lentement à travers le vide. Chaque vitrail porte le portrait de celui à qui le cœur appartient, entouré des visages de ceux qui comptent pour lui : le motif change donc d'un personnage à l'autre, et se modifie quand ses liens changent.\n\nDans la saga, le lieu remplit deux fonctions. C'est d'abord le décor traditionnel des tutoriels : on y apprend à se battre, et l'on y répond à des questions qui orientent la progression du personnage. C'est ensuite l'endroit où un cœur se confronte à lui-même : y descendre, c'est atteindre le fond de son propre être, entendre la voix qui l'habite, ou découvrir qu'un autre cœur y a trouvé refuge. Sa version japonaise, ダイブ・トゥ・ハート, insiste sur ce mouvement de plongée.",
          "The Dive to the Heart is not a world but the visual representation of the inside of a heart. It takes the form of one or several circular stained-glass pillars, hanging in bottomless darkness, reached by falling slowly through the void. Each pane bears the portrait of the heart's owner, ringed by the faces of those who matter to them: the design therefore differs from character to character, and shifts when their bonds change.\n\nWithin the series the place serves two purposes. It is first the traditional setting for tutorials: the player learns to fight there, and answers questions that shape the character's growth. It is then the place where a heart faces itself: descending there means reaching the bottom of one's own being, hearing the voice that dwells inside, or discovering that another heart has taken shelter in it. The Japanese name, ダイブ・トゥ・ハート, stresses that diving motion.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Le tout premier écran jouable de la saga se déroule au Palier de l'Éveil : Sora, endormi la veille de la tempête, se retrouve sur un vitrail à son effigie. Une voix sans corps le guide, lui fait choisir entre l'épée, le bouclier et le bâton, puis lui demande auquel des trois il renonce — un choix qui détermine sa progression pendant toute l'aventure.\n\nSora traverse ensuite plusieurs vitraux, apprend à frapper et à ouvrir des coffres, répond à des questions sur ce qu'il redoute et ce qu'il désire, et voit son ombre s'allonger avant de se dresser en Darkside, sa toute première créature des ténèbres. La séquence se termine sur la promesse que la porte s'ouvrira bientôt, et Sora se réveille sur la plage.\n\nRétrospectivement, cette introduction annonce tout le jeu : la Chaîne Royale, la lutte contre les Sans-cœur et l'idée qu'une lumière subsiste dans les ténèbres les plus épaisses.",
          "The very first playable screen of the series takes place in the Dive to the Heart: Sora, asleep the night before the storm, finds himself on a stained-glass pillar bearing his likeness. A bodiless voice guides him, has him choose between the sword, the shield and the staff, then asks which of the three he gives up — a choice that shapes his growth for the whole adventure.\n\nSora then crosses several pillars, learns to strike and to open chests, answers questions about what he fears and what he wants, and sees his shadow stretch out before rising as Darkside, his very first creature of darkness. The sequence ends on a promise that the door will soon open, and Sora wakes on the beach.\n\nIn hindsight this introduction announces the entire game: the Kingdom Key, the fight against the Heartless and the notion that a light remains inside the deepest darkness.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
          "Chain of Memories ne met pas en scène le Palier de l'Éveil comme un décor à parcourir, mais en fait le sujet même de son intrigue : le jeu se déroule à l'intérieur des souvenirs de Sora, que Naminé réorganise étage après étage au Manoir Oblivion. Ce que le Palier montre habituellement en images — les visages qui composent un cœur — devient ici une chaîne de souvenirs que l'on peut délier et renouer.\n\nLa conclusion du jeu applique littéralement cette logique : pour que Naminé puisse remettre ses souvenirs en ordre, Sora doit s'endormir dans une capsule et tout oublier, y compris le Manoir. Riku, de son côté, descend au plus profond de lui-même pour affronter les ténèbres qu'Ansem y a laissées, et en ressort en choisissant la voie de l'aube plutôt que la lumière ou l'ombre.\n\nLe Palier de l'Éveil réapparaîtra d'ailleurs peu après, dans Kingdom Hearts II, précisément parce que ce sommeil doit prendre fin.",
          "Chain of Memories does not stage the Dive to the Heart as a place to explore; it makes it the very subject of its plot: the game unfolds inside Sora's memories, which Naminé rearranges floor by floor in Castle Oblivion. What the Dive usually shows as an image — the faces that make up a heart — becomes here a chain of memories that can be unlinked and retied.\n\nThe game's conclusion applies that logic literally: for Naminé to put his memories back in order, Sora must sleep in a pod and forget everything, Castle Oblivion included. Riku, for his part, descends into his own depths to face the darkness Ansem left there, and comes out choosing the road to dawn rather than light or shadow.\n\nThe Dive to the Heart will return shortly afterwards, in Kingdom Hearts II, precisely because that sleep has to end.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Roxas, Simili de Sora, n'est pas censé avoir de cœur, et pourtant il rêve. Ses nuits au Château Illusoire sont peuplées de souvenirs qui ne sont pas les siens — les Îles du Destin, Riku, Kairi — et qui appartiennent en réalité à Sora endormi. Le Palier de l'Éveil est le lieu qui matérialise cette anomalie : c'est en descendant vers le fond de lui-même que Roxas touche à la vérité de son existence.\n\nLe même mécanisme explique le cas de Xion. Composée des souvenirs de Sora, elle n'a pas de visage propre : chacun la voit différemment selon le lien qui l'unit à Sora, et son apparence se dissout à mesure qu'elle rend ce qu'elle a pris. Les vitraux, où le portrait d'un cœur est entouré de ses proches, disent exactement ce qui lui manque.\n\nDays fait ainsi du Palier moins un tutoriel qu'un révélateur : ce qui s'y voit détermine ce que Roxas et Xion sont réellement.",
          "Roxas, Sora's Nobody, is not supposed to have a heart, and yet he dreams. His nights at the Castle That Never Was are filled with memories that are not his — Destiny Islands, Riku, Kairi — and that in truth belong to the sleeping Sora. The Dive to the Heart is the place that gives that anomaly a shape: it is by sinking towards his own depths that Roxas brushes against the truth of his existence.\n\nThe same mechanism explains Xion. Made of Sora's memories, she has no face of her own: each person sees her differently depending on their bond with Sora, and her appearance dissolves as she gives back what she took. The stained glass, where a heart's portrait is ringed by those close to it, says exactly what she lacks.\n\nDays therefore turns the Dive into less of a tutorial than a revealer: what is seen there defines what Roxas and Xion really are.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Kingdom Hearts II ouvre sur Roxas et non sur Sora, et lui offre son propre Palier de l'Éveil : le garçon rêve d'une plongée vers un vitrail, y affronte des Sans-cœur et entend des questions dont il ne comprend pas le sens. Le motif du vitrail, chargé des visages de Sora, trahit dès le prologue que ses souvenirs de vacances à la Cité du Crépuscule sont un décor fabriqué par DiZ.\n\nAu terme de la semaine simulée, Roxas retrouve la salle blanche où Sora dort dans sa capsule et comprend qu'il doit disparaître pour que l'autre se réveille. Sa dernière réplique, « tu as de la chance… on dirait que mon été est fini », clôt le prologue.\n\nSora s'éveille alors, et le jeu enchaîne sur son propre Palier le temps d'un rappel des commandes. Les deux plongées se répondent : celle de Roxas s'achève au moment exact où celle de Sora recommence.",
          "Kingdom Hearts II opens on Roxas rather than Sora, and gives him his own Dive to the Heart: the boy dreams of falling towards a stained-glass pillar, fights Heartless there and hears questions whose meaning escapes him. The pillar's design, crowded with Sora's faces, betrays from the prologue that his holiday memories of Twilight Town are a set built by DiZ.\n\nAt the end of the simulated week, Roxas reaches the white room where Sora sleeps in his pod and understands that he has to disappear so the other can wake. His last line, \"you're lucky… looks like my summer vacation is over\", closes the prologue.\n\nSora then wakes, and the game moves straight to his own Dive for a refresher on the controls. The two dives answer one another: Roxas's ends at the exact moment Sora's begins again.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Dans Dream Drop Distance, le Palier de l'Éveil devient le sas de chaque plongée : Sora et Riku traversent un vitrail avant d'entrer dans un Monde Endormi, et ces chutes rythment tout l'examen de Maîtrise. Chacun y répond à des questions et y forge son propre parcours, tandis que la mécanique de la « chute » les fait alterner d'un rêve à l'autre.\n\nLe lieu prend toute son importance à la fin du jeu. Le cœur de Sora, resté endormi et exposé, est envahi par les ténèbres et Xehanort tente d'en faire un nouveau réceptacle. Riku plonge alors dans le cœur de son ami et y descend jusqu'au Palier, où il découvre le vitrail de Ventus : le cœur de Sora abrite depuis des années celui du jeune homme, ainsi que ceux qu'il a recueillis au fil de ses voyages.\n\nEn ramenant Sora, Riku prouve qu'il a compris ce que le titre de Maître exige, et c'est lui, et non Sora, que Yen Sid nomme Maître de la Keyblade.",
          "In Dream Drop Distance, the Dive to the Heart becomes the airlock of every dive: Sora and Riku cross a stained-glass pillar before entering a Sleeping World, and those falls set the rhythm of the whole Mark of Mastery exam. Each answers questions there and shapes his own growth, while the \"drop\" mechanic makes them switch from one dream to the other.\n\nThe place takes on its full weight at the end of the game. Sora's heart, left asleep and exposed, is invaded by darkness and Xehanort tries to make it a new vessel. Riku then dives into his friend's heart and descends to the Dive, where he finds Ventus's stained glass: Sora's heart has for years sheltered the young man's, along with those he has taken in over his travels.\n\nBy bringing Sora back, Riku proves he has understood what the title of Master demands, and it is he, not Sora, whom Yen Sid names a Keyblade Master.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Kingdom Hearts III s'ouvre sur une chute vers les vitraux : Sora, privé de ses pouvoirs à l'issue de l'examen, replonge en lui-même pour comprendre ce qu'il a perdu et repartir de zéro. La séquence rejoue volontairement celle du premier jeu, questions comprises, et rappelle que le héros a été ramené à son point de départ.\n\nLe Palier resurgit dans les moments décisifs de la fin : le cœur de Sora, qui a servi de refuge à Ventus, à Roxas et à Xion, rend enfin chacun d'eux à son propre corps au Nécropole des Keyblades. Ce que le vitrail montrait — un visage entouré de ceux qui comptent — devient littéral, puisque ces liens deviennent des alliés en chair et en os.\n\nLe jeu ferme la boucle avec le Pouvoir de l'éveil, capacité qui consiste précisément à ouvrir les cœurs endormis. Sora en abuse pour retrouver Kairi, et le prix qu'il paie découle directement de cette porte qu'il n'aurait pas dû rouvrir.",
          "Kingdom Hearts III opens on a fall towards the stained glass: Sora, stripped of his powers at the end of the exam, dives back inside himself to understand what he has lost and start again from nothing. The sequence deliberately replays the first game's, questions included, and reminds the player that the hero has been returned to his starting point.\n\nThe Dive resurfaces at the decisive moments of the ending: Sora's heart, which has sheltered Ventus, Roxas and Xion, finally gives each of them back to their own body at the Keyblade Graveyard. What the stained glass showed — a face ringed by those who matter — becomes literal, as those bonds turn into flesh-and-blood allies.\n\nThe game closes the loop with the power of waking, the ability that consists precisely in opening sleeping hearts. Sora overuses it to bring Kairi back, and the price he pays follows directly from that door he should not have reopened.",
        ),
      },
    ],
    trivia: [
      L("Le vitrail de Sora évolue d'un épisode à l'autre : les visages qui l'entourent changent au fil des amitiés qu'il noue.", "Sora's stained glass changes from one game to the next: the faces around him shift as he forms new friendships."),
      L("Les questions posées au Palier dans le premier Kingdom Hearts influencent la vitesse à laquelle Sora gagne des niveaux, et non ses statistiques finales.", "The questions asked in the Dive in the first Kingdom Hearts affect how quickly Sora gains levels, not his final stats."),
      L("Le nom français « Palier de l'Éveil » traduit l'idée d'une station où l'on s'arrête avant de se réveiller, présente aussi dans l'anglais Station of Awakening.", "The French name “Palier de l'Éveil” conveys the idea of a landing where one pauses before waking, also present in the English Station of Awakening."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Dive to the Heart", url: "https://kingdomhearts.fandom.com/wiki/Dive_to_the_Heart" },
    ],
  },

  // ─────────────────────────── Couloirs des Ténèbres ───────────────────────────
  "corridors-of-darkness": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "L'Entre-deux, 狭間の世界 en japonais (« le monde de l'interstice »), désigne l'espace qui sépare les mondes : ni lumière, ni ténèbres complètes, mais un couloir violacé traversé de courants sombres. Les mondes de la saga sont isolés les uns des autres, et seuls un vaisseau Gummi, une Keyblade ou un couloir de ténèbres permettent de passer de l'un à l'autre ; l'Entre-deux est ce que l'on voit lorsqu'on emprunte la seconde voie.\n\nL'Organisation XIII en a fait son moyen de transport ordinaire : ses membres, dépourvus de cœur, peuvent ouvrir ces couloirs et les traverser sans risque. Pour un être de chair au cœur intact, en revanche, l'exposition prolongée aux ténèbres est dangereuse, ce qui explique les manteaux noirs de l'Organisation, conçus pour protéger ceux qui les portent. Riku, Maléfique ou Pat empruntent également ces passages, chacun pour ses propres raisons.",
          "Betwixt and Between, 狭間の世界 in Japanese (\"the world of the gap\"), is the space that separates the worlds: neither light nor full darkness, but a purplish corridor crossed by dark currents. The worlds of the series are cut off from one another, and only a Gummi ship, a Keyblade or a corridor of darkness allows passage between them; Betwixt and Between is what one sees when taking the second route.\n\nOrganization XIII made it their ordinary means of travel: its members, having no hearts, can open these corridors and cross them without risk. For a flesh-and-blood being with an intact heart, however, prolonged exposure to darkness is dangerous, which explains the Organization's black coats, designed to protect those who wear them. Riku, Maleficent and Pete also use these passages, each for their own reasons.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "L'Entre-deux n'est visité qu'une fois, mais pour l'une des scènes les plus marquantes du jeu. Après avoir traversé le manoir de la Cité du Crépuscule, Sora, Donald et Dingo empruntent le passage ouvert par l'ordinateur de DiZ pour rejoindre le Monde qui n'existe pas. Le couloir se referme aussitôt derrière eux et une nuée de Reflets les encercle.\n\nAxel apparaît alors. Il vient d'affronter Saïx et n'a plus rien à perdre : il fait exploser toute son énergie dans une attaque totale qui balaie les Similis, et se consume avec elle. Mourant, il avoue à Sora qu'il agissait pour Roxas, dit qu'il aurait voulu avoir un cœur pour comprendre ce qu'il ressentait, et ouvre d'un dernier geste le passage vers le Monde qui n'existe pas avant de disparaître.\n\nLe lieu ne sert donc qu'à un combat et à une disparition, mais il fixe le sort d'Axel jusqu'à son retour, sous son vrai nom de Lea, dans Dream Drop Distance.",
          "Betwixt and Between is visited only once, but for one of the game's most memorable scenes. After crossing the Twilight Town mansion, Sora, Donald and Goofy take the passage opened by DiZ's computer to reach The World That Never Was. The corridor closes behind them at once and a swarm of Dusks surrounds them.\n\nAxel then appears. He has just fought Saïx and has nothing left to lose: he burns all his energy in one all-out attack that sweeps the Nobodies away, and is consumed with it. Dying, he admits to Sora that he acted for Roxas, says he wishes he had a heart so he could understand what he felt, and with a last gesture opens the way to The World That Never Was before fading.\n\nThe place therefore serves only for a fight and a death, but it settles Axel's fate until his return, under his true name Lea, in Dream Drop Distance.",
        ),
      },
      {
        title: L("Les couloirs de ténèbres dans la saga", "Corridors of darkness across the series"),
        text: L(
          "Au-delà de cette unique visite, l'Entre-deux résume un principe qui structure toute la saga : les mondes doivent rester séparés, et ceux qui forcent le passage le paient. Riku, dans le premier épisode et dans Chain of Memories, apprend à emprunter les couloirs de ténèbres et en porte les traces jusqu'à en perdre son apparence dans Dream Drop Distance. Aqua, égarée dans le Domaine des Ténèbres, en fait l'expérience inverse : elle ne trouve plus de sortie pendant plus de dix ans.\n\nLes Similis, eux, se déplacent librement dans cet entre-deux parce qu'ils n'appartiennent tout à fait ni à la lumière ni aux ténèbres, ce que leur existence même illustre. Kingdom Hearts III généralise ce motif avec les couloirs qu'ouvrent la nouvelle Organisation et Maléfique, et avec le Monde Final, autre lieu situé au bord de l'existence, où échouent les cœurs qui n'ont plus de corps.",
          "Beyond that single visit, Betwixt and Between sums up a principle that structures the whole series: worlds must stay apart, and those who force a passage pay for it. Riku, in the first game and in Chain of Memories, learns to use the corridors of darkness and carries their mark to the point of losing his own appearance in Dream Drop Distance. Aqua, lost in the Realm of Darkness, has the opposite experience: she can find no way out for more than ten years.\n\nNobodies, for their part, move freely through that in-between because they belong fully neither to light nor to darkness, which their very existence illustrates. Kingdom Hearts III generalises the motif with the corridors opened by the new Organization and by Maleficent, and with The Final World, another place at the edge of existence, where hearts that have lost their bodies wash up.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, 狭間の世界, signifie littéralement « le monde de l'interstice », plus explicite que l'anglais Betwixt and Between.", "The Japanese name, 狭間の世界, literally means “the world of the gap”, more explicit than the English Betwixt and Between."),
      L("La mort d'Axel dans ce couloir est l'une des rares scènes de Kingdom Hearts II dont la version Final Mix ne change rien.", "Axel's death in this corridor is one of the few Kingdom Hearts II scenes the Final Mix version leaves untouched."),
      L("Le manteau noir de l'Organisation protège des ténèbres, ce qui explique que Sora en porte un lorsqu'il traverse le Domaine des Ténèbres dans Kingdom Hearts II.", "The Organization's black coat protects against darkness, which is why Sora wears one when crossing the Realm of Darkness in Kingdom Hearts II."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Betwixt and Between", url: "https://kingdomhearts.fandom.com/wiki/Betwixt_and_Between" },
    ],
  },

  // ─────────────────────────── Arène des Mirages ───────────────────────────
  "mirage-arena": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "Le Arène des Mirages est un lieu propre à Birth by Sleep, sans équivalent Disney : une arène de pierre claire et de lumière, suspendue dans un ciel bleu, dont la carte du monde donne l'accès à tout moment de l'aventure. Son nom anglais, Mirage Arena, dit sa nature : ce n'est pas un monde habité mais un espace d'entraînement, une illusion où les combats n'ont pas de conséquence sur le reste de la saga.\n\nSa fonction est de rassembler tout ce qui, dans Birth by Sleep, se joue en dehors du récit principal. On y trouve des missions classées où l'on affronte des vagues de Nescients, les tournois de Rumble Racing venus de Disneyville, et les parties de Plateau de commandes, le jeu de plateau du titre. Les médailles gagnées s'échangent contre des commandes, des objets et des accessoires que l'on ne trouve nulle part ailleurs. C'est aussi la principale porte d'entrée du multijoueur, où deux à six joueurs coopèrent ou s'affrontent.",
          "The Mirage Arena is a place unique to Birth by Sleep, with no Disney counterpart: an arena of pale stone and light, suspended in a blue sky, which the world map makes available at any point in the adventure. Its name says what it is: not an inhabited world but a training ground, an illusion where battles have no consequence for the rest of the series.\n\nIts purpose is to gather everything in Birth by Sleep that happens outside the main story. It holds ranked missions against waves of Unversed, the Rumble Racing tournaments brought over from Disney Town, and games of Command Board, the title's board game. Medals earned there buy commands, items and accessories found nowhere else. It is also the main gateway to multiplayer, where two to six players cooperate or compete.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Terra, Ventus et Aqua peuvent s'y rendre chacun de leur côté, quel que soit l'avancement de leur histoire. Les missions s'y débloquent progressivement et opposent le héros à des vagues de Nescients dans des conditions particulières : temps limité, ennemis renforcés, objectifs de style. Le Geôlier de Fer, boss récurrent de l'arène, revient sous quatre formes de plus en plus coriaces au fil des rangs.\n\nLa version Final Mix a enrichi le lieu de plusieurs adversaires inédits, dont l'armure du Maître Eraqus, combat purement optionnel qui n'a pas de portée narrative, et No Heart, une armure noire liée à Xehanort. Monstro, la baleine des autres épisodes, y apparaît également comme boss, sans monde qui lui soit consacré dans ce jeu.\n\nLe Arène des Mirages n'a donc aucune place dans la chronologie : c'est un espace de défi pur, mais il concentre l'essentiel du contenu annexe de Birth by Sleep et une bonne part de sa difficulté maximale.",
          "Terra, Ventus and Aqua can each go there on their own, at any point in their story. Missions unlock gradually and pit the hero against waves of Unversed under special conditions: time limits, strengthened enemies, style objectives. The Iron Imprisoner, the arena's recurring boss, returns in four increasingly tough forms as ranks go up.\n\nThe Final Mix version added several new opponents, among them Master Eraqus's armor, a purely optional fight with no narrative weight, and No Heart, a black armor tied to Xehanort. Monstro, the whale of the other games, also appears there as a boss, with no world of his own in this title.\n\nThe Mirage Arena therefore has no place in the chronology: it is a pure challenge space, but it concentrates most of Birth by Sleep's side content and a good share of its highest difficulty.",
        ),
      },
    ],
    trivia: [
      L("Le Arène des Mirages est le seul « monde » de Birth by Sleep accessible dès le début de l'aventure pour les trois héros.", "The Mirage Arena is the only Birth by Sleep “world” available from the start of the adventure for all three heroes."),
      L("Les modes multijoueur du jeu passaient par le Wi-Fi local de la PSP ; les rééditions HD les ont retirés au profit d'un contenu solo équivalent.", "The game's multiplayer modes ran over the PSP's local Wi-Fi; the HD re-releases removed them in favour of equivalent solo content."),
      L("Le Geôlier de Fer est l'un des rares boss de la saga à revenir quatre fois de suite en changeant seulement de couleur et de comportement.", "The Iron Imprisoner is one of the few bosses in the series to return four times over, changing only colour and behaviour."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Mirage Arena", url: "https://kingdomhearts.fandom.com/wiki/Mirage_Arena" },
    ],
  },

  // ─────────────────────────── Monde Final ───────────────────────────
  "the-final-world": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "Le Monde Final est un lieu original de Kingdom Hearts III : une étendue d'eau parfaitement lisse, qui réfléchit un ciel sans limite, parsemée d'étoiles flottantes et de silhouettes translucides. Rien n'y sépare le haut du bas, et l'on y marche sur la surface comme sur un sol.\n\nSa fonction est expliquée sur place : c'est là qu'échouent les cœurs qui ont perdu leur corps mais refusent de disparaître. Ils y attendent, sous forme d'étoiles, sans savoir combien de temps s'écoule, jusqu'à s'éteindre ou à retrouver un moyen de revenir. Le lieu prolonge une idée présente depuis le premier jeu — un cœur peut subsister sans son enveloppe — et lui donne enfin un décor.\n\nLe Monde Final est aussi le pendant du Palier de l'Éveil : là où le Palier montre l'intérieur d'un cœur, le Monde Final montre ce qu'il advient d'un cœur qui n'a plus rien autour de lui.",
          "The Final World is a place original to Kingdom Hearts III: a perfectly smooth stretch of water reflecting a limitless sky, scattered with floating stars and translucent silhouettes. Nothing separates up from down there, and one walks on the surface as on solid ground.\n\nIts purpose is explained on the spot: it is where hearts that have lost their body but refuse to fade wash up. They wait there as stars, with no sense of how much time passes, until they go out or find a way back. The place extends an idea present since the first game — that a heart can survive without its shell — and finally gives it a setting.\n\nThe Final World is also the counterpart of the Dive to the Heart: where the Dive shows the inside of a heart, The Final World shows what becomes of a heart with nothing left around it.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sora y arrive après avoir été anéanti par le Sans-cœur Démoniaque au Nécropole des Keyblades, en même temps que ses amis. Son corps a été dispersé et il se réveille sous la forme d'un simple point de lumière, avant qu'un Chirithy ne lui explique où il se trouve. Pour reprendre forme, Sora doit retrouver et rassembler les fragments de lui-même éparpillés à la surface de l'eau.\n\nIl y rencontre l'Étoile sans nom, une jeune fille qui a perdu son corps depuis longtemps et attend quelqu'un dont elle ne dit pas le nom. Elle indique à Sora que revenir à la vie exige de remonter le temps jusqu'au moment précédant sa perte — ce qui l'amènera à user du Pouvoir de l'éveil pour rejouer la bataille du Cimetière.\n\nDans l'épisode Re Mind, Sora revient dans ce lieu à la recherche du cœur de Kairi, dispersé lui aussi. Le Monde Final devient alors le symbole du prix à payer : sauver ceux qui n'ont plus de corps est possible, mais chaque usage du Pouvoir de l'éveil rapproche Sora de sa propre disparition, qui clôt le jeu.",
          "Sora arrives there after being wiped out by the Demon Tide at the Keyblade Graveyard, along with his friends. His body has been scattered and he wakes as a mere point of light, before a Chirithy explains where he is. To take shape again, Sora has to find and gather the pieces of himself strewn across the water's surface.\n\nHe meets the Nameless Star there, a young woman who lost her body long ago and is waiting for someone whose name she does not give. She tells Sora that returning to life requires going back to the moment before his loss — which will lead him to use the power of waking to replay the battle at the Graveyard.\n\nIn the Re Mind episode, Sora returns to the place in search of Kairi's heart, likewise scattered. The Final World then becomes the symbol of the price to pay: saving those who no longer have bodies is possible, but every use of the power of waking brings Sora closer to his own vanishing, which closes the game.",
        ),
      },
    ],
    trivia: [
      L("L'Étoile sans nom porte l'apparence de Strelitzia, personnage de l'ère des Prophètes, ce que le jeu ne dit jamais explicitement.", "The Nameless Star has the appearance of Strelitzia, a character from the age of the Foretellers, something the game never states outright."),
      L("Le Chirithy que Sora rencontre est une créature d'accompagnement issue de Kingdom Hearts χ, seul rappel du jeu mobile dans le récit principal de Kingdom Hearts III.", "The Chirithy Sora meets is a companion creature from Kingdom Hearts χ, the only reminder of the mobile game in Kingdom Hearts III's main story."),
      L("La séquence de collecte des fragments de Sora est l'un des rares passages du jeu sans aucun combat.", "The sequence gathering Sora's pieces is one of the few passages in the game with no combat at all."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — The Final World", url: "https://kingdomhearts.fandom.com/wiki/The_Final_World" },
    ],
  },

  // ─────────────────────────── Datascape ───────────────────────────
  "datascape": {
    sections: [
      {
        title: L("Origines / nature du lieu", "Origins / nature of the place"),
        text: L(
          "Le Datascape est un monde de données, pas un monde réel : il s'agit du journal de voyage tenu par Jiminy Criquet, numérisé au Château Disney afin d'en explorer le contenu de l'intérieur. Il reproduit les lieux que Sora a visités pendant le premier Kingdom Hearts — les Îles du Destin, la Ville de Traverse, le Pays des Merveilles, le Colisée de l'Olympe, Agrabah, la Forteresse Oubliée — sous forme de reconstitutions simplifiées et incomplètes.\n\nSa particularité tient aux blocs de bugs qui l'infestent : des cubes colorés qui bloquent les passages, corrompent les zones et se comportent tantôt comme des obstacles, tantôt comme des outils de progression. Les détruire répare les données. Cette anomalie donne au jeu ses mécaniques les plus originales, avec des systèmes de combat qui changent d'un monde à l'autre, du jeu de plateforme en deux dimensions au tir en vue de dos.\n\nLe Datascape est donc à la fois un décor, un problème à résoudre et une relecture du premier épisode.",
          "The Datascape is a world of data, not a real world: it is the travel journal kept by Jiminy Criquet, digitised at Disney Castle so that its contents can be explored from within. It reproduces the places Sora visited during the first Kingdom Hearts — Destiny Islands, Traverse Town, Wonderland, Olympus Coliseum, Agrabah, Hollow Bastion — as simplified, incomplete reconstructions.\n\nWhat sets it apart are the bug blocks infesting it: coloured cubes that block passages, corrupt areas and behave sometimes as obstacles, sometimes as tools for progress. Destroying them repairs the data. That anomaly gives the game its most original mechanics, with combat systems that change from world to world, from two-dimensional platforming to over-the-shoulder shooting.\n\nThe Datascape is therefore at once a setting, a problem to solve and a rereading of the first game.",
        ),
      },
      {
        game: "re-coded",
        text: L(
          "Tout part d'une phrase apparue seule dans le journal, alors que Jiminy l'avait entièrement recopié : un message annonçant que ceux qui souffrent doivent être délivrés. Incapables d'en comprendre l'origine, Mickey, Donald, Dingo et Jiminy numérisent le journal et y envoient une copie de Sora, le Sora Données, pour enquêter.\n\nCelui-ci parcourt les mondes reconstitués en éliminant les blocs de bugs, sans savoir qu'il est lui-même une donnée. Maléfique et Pat s'introduisent dans le système et s'emparent d'une partie du Datascape ; un Riku Données, encapuchonné, guide Sora depuis l'ombre. La progression révèle peu à peu que les bugs proviennent des souffrances contenues dans le journal lui-même.\n\nÀ la fin, dans un Manoir Oblivion de données, Sora Données affronte le poids de ces douleurs et finit par les accepter plutôt que de les effacer. Naminé, présente sous forme de données, révèle alors le sens du message : les souvenirs conservés dans le journal désignent Roxas, Axel, Xion, Terra, Ventus et Aqua, tous prisonniers du sommeil ou des ténèbres, que le vrai Sora seul pourra sauver.",
          "It all starts with a sentence that appeared on its own in the journal, though Jiminy had copied it out in full: a message saying that those who hurt must be freed. Unable to work out where it came from, Mickey, Donald, Goofy and Jiminy digitise the journal and send a copy of Sora, Data-Sora, inside to investigate.\n\nHe travels the recreated worlds clearing bug blocks, unaware that he is himself data. Maleficent and Pete break into the system and seize part of the Datascape; a hooded Data-Riku guides Sora from the shadows. Progress gradually reveals that the bugs come from the pain held within the journal itself.\n\nAt the end, in a data Castle Oblivion, Data-Sora faces the weight of that pain and chooses to accept it rather than erase it. Naminé, present as data, then reveals the message's meaning: the memories kept in the journal point to Roxas, Axel, Xion, Terra, Ventus and Aqua, all held by sleep or darkness, whom only the real Sora can save.",
        ),
      },
      {
        title: L("Conséquences", "Consequences"),
        text: L(
          "Le Datascape disparaît avec la fin de l'enquête, mais son message change le cours de la saga. Mickey rapporte à Yen Sid ce que le journal a livré, et c'est précisément cette liste de cœurs à sauver qui justifie l'examen de Maîtrise de Dream Drop Distance, puis la quête des sept Gardiens de la Lumière dans Kingdom Hearts III.\n\nLe monde a aussi une descendance mécanique : l'idée d'un double numérique de Sora, déjà présente avec la Cité du Crépuscule virtuelle de Kingdom Hearts II, revient dans Kingdom Hearts III avec la Cité du Crépuscule de données où Riku recherche Roxas, et dans l'épisode Re Mind, qui rejoue une bataille déjà vécue sous un autre angle.\n\nEnfin, le Sora Données lui-même n'est pas oublié : le journal restauré et son héros de données restent la preuve qu'une copie peut porter les mêmes sentiments que l'original, question centrale des épisodes suivants avec Roxas, Xion et le Réplica de Riku.",
          "The Datascape vanishes when the investigation ends, but its message changes the course of the series. Mickey reports to Yen Sid what the journal gave up, and it is precisely that list of hearts to save which justifies the Mark of Mastery exam of Dream Drop Distance, and then the search for the seven Guardians of Light in Kingdom Hearts III.\n\nThe world also has mechanical descendants: the idea of a digital double of Sora, already present with Kingdom Hearts II's virtual Twilight Town, returns in Kingdom Hearts III with the data Twilight Town where Riku searches for Roxas, and in the Re Mind episode, which replays a battle already lived through from another angle.\n\nFinally, Data-Sora himself is not forgotten: the restored journal and its data hero stand as proof that a copy can carry the same feelings as the original, the central question of the following games with Roxas, Xion and the Riku Replica.",
        ),
      },
    ],
    trivia: [
      L("Re:coded est le remake sur Nintendo DS du jeu épisodique sur téléphone mobile Kingdom Hearts coded, sorti uniquement au Japon.", "Re:coded is the Nintendo DS remake of the episodic mobile phone game Kingdom Hearts coded, released only in Japan."),
      L("Chaque monde du Datascape change de système de combat, ce qui fait de Re:coded l'épisode le plus hétérogène de la saga en termes de jeu.", "Each Datascape world changes combat system, which makes Re:coded the most mechanically varied entry in the series."),
      L("Les collections HD ne proposent pas Re:coded jouable mais un film de ses cinématiques, sous le titre Re:coded — Cinématiques HD.", "The HD collections do not include Re:coded as a playable game but as a movie of its cutscenes, titled Re:coded HD Cinematics."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Datascape", url: "https://kingdomhearts.fandom.com/wiki/Datascape" },
      { label: "Kingdom Hearts Wiki — Kingdom Hearts Re:coded", url: "https://kingdomhearts.fandom.com/wiki/Kingdom_Hearts_Re:coded" },
    ],
  },
};
