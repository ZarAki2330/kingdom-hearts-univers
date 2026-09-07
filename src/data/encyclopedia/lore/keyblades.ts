import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des Keyblades marquantes de la saga : origines, symbolique, puis rôle jeu par jeu.
 * Les clés sont les slugs des entrées de keyblades.ts.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────── Chaîne Royale ───────────────────────────
  "kingdom-key": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "La Chaîne Royale est la plus dépouillée de toutes les Keyblades : une lame argentée toute simple, une garde carrée dorée, des dents en forme de couronne et, au bout de sa chaîne, le porte-clés à l'effigie de Mickey, trois cercles qui sont devenus l'emblème de la saga. Cette sobriété est voulue : elle représente la Keyblade « de base », celle du Domaine de la Lumière, dont la Chaîne Royale D de Mickey est l'exact reflet aux couleurs inversées.\n\nSon nom japonais, Kingdom Chain, insiste sur la chaîne qui relie la lame au porte-clés, symbole des liens entre les cœurs. Bien qu'elle ne brille par aucune statistique, elle est la Keyblade qui accompagne Sora du début à la fin de chaque aventure, et son dessin sert de modèle à Lumière Stellaire, la Keyblade des Porteurs de l'Âge des Fées. Elle choisit Sora la nuit où les Îles du Destin sont englouties par les ténèbres.",
          "The Kingdom Key is the plainest Keyblade of them all: a simple silver blade, a square golden guard, crown-shaped teeth and, at the end of its chain, the Mickey-emblem keychain, three circles that became the symbol of the whole series. That plainness is deliberate: it is the “default” Keyblade, the one of the Realm of Light, of which Mickey's Kingdom Key D is the exact colour-inverted reflection.\n\nIts Japanese name, Kingdom Chain, stresses the chain linking blade to keychain, a symbol of the bonds between hearts. Although it shines in no statistic, it is the Keyblade that follows Sora from the beginning to the end of every adventure, and its design is the template for Starlight, the Keyblade of the wielders of the Age of Fairy Tales. It chooses Sora on the night Destiny Islands is swallowed by darkness.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Lorsque les ténèbres engloutissent les Îles du Destin, la Chaîne Royale apparaît dans la main de Sora, qui ne sait pas encore de quoi il s'agit. Il comprend à la Ville de Traverse, grâce à Léon, que cette arme attire les Sans-cœur mais qu'elle seule peut sceller les serrures des mondes. Avec Donald et Dingo, Sora ferme ainsi une à une les serrures du Pays des Merveilles, d'Agrabah ou de la Ville d'Halloween.\n\nÀ la Forteresse Oubliée, Riku affirme que la Keyblade lui était destinée, et elle passe effectivement dans ses mains, laissant Sora avec une épée de bois. Mais lorsque Sora choisit de protéger ses amis, la Chaîne Royale revient à lui : elle a reconnu la force de son cœur. C'est avec elle que Sora libère le cœur de Kairi, affronte Ansem au Bout du Monde et, aux côtés de Mickey et de sa propre Chaîne Royale D, referme la porte de Kingdom Hearts.",
          "When darkness swallows Destiny Islands, the Kingdom Key appears in the hand of a Sora who does not yet know what it is. In Traverse Town, thanks to Leon, he learns that the weapon draws the Heartless but is the only thing that can seal the worlds' keyholes. Together with Donald and Goofy, Sora locks the keyholes of Wonderland, Agrabah or Halloween Town one after another.\n\nAt Hollow Bastion, Riku claims the Keyblade was meant for him, and it does pass into his hands, leaving Sora with a wooden sword. Yet when Sora chooses to protect his friends, the Kingdom Key returns to him: it has recognised the strength of his heart. With it, Sora frees Kairi's heart, faces Ansem at the End of the World and, side by side with Mickey and his own Kingdom Key D, closes the door to Kingdom Hearts.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Roxas, le Simili de Sora, naît avec la faculté d'invoquer la Chaîne Royale, ce qui en fait la recrue la plus précieuse de l'Organisation XIII : il est le seul à pouvoir libérer les cœurs des Sans-cœur pour nourrir le Kingdom Hearts artificiel de Xemnas. Chaque mission le voit manier cette même Keyblade, dont l'apparence change selon le Gear équipé dans son panneau de commandes.\n\nXion, réplica créée à partir des souvenirs de Sora, finit par manifester une Chaîne Royale identique. À la mort de Xion, son pouvoir retourne à Roxas, qui se met à manier deux Keyblades à la fois : Tendre Promesse et Souvenir Perdu. Dans le Monde qui n'existe pas, Riku observe que la Chaîne Royale de Roxas et celle de Sora ne font qu'une, preuve que le Simili et son original sont liés.",
          "Roxas, Sora's Nobody, is born able to summon the Kingdom Key, which makes him Organization XIII's most valuable recruit: he alone can release the hearts of the Heartless to feed Xemnas's artificial Kingdom Hearts. Every mission sees him wield that same Keyblade, whose look changes with the Gear slotted into his command panel.\n\nXion, a replica made from Sora's memories, eventually manifests an identical Kingdom Key. When Xion dies, her power returns to Roxas, who begins to wield two Keyblades at once: Oathkeeper and Oblivion. In The World That Never Was, Riku notes that Roxas's Kingdom Key and Sora's are one and the same, proof that the Nobody and his original are bound together.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Dans la Cité du Crépuscule virtuelle créée par DiZ, la Chaîne Royale se manifeste dans la main de Roxas lorsque les Reflets l'attaquent, avant qu'il ne comprenne qu'il n'est que la moitié manquante de Sora. Après leur réunion, Sora se réveille au manoir avec la Keyblade et, à la Tour Mystérieuse, Yen Sid lui confie de nouveaux vêtements ainsi que Star Seeker : la Chaîne Royale redevient l'arme de base parmi bien d'autres porte-clés.\n\nElle garde pourtant un rôle narratif : Roxas la brandit contre Sora dans le Palier de l'Éveil, et c'est elle que Sora tient face à Xemnas dans le combat final, épaulé par Riku et Point du Jour. Dans Kingdom Hearts II Final Mix, elle reste l'arme la plus modeste du jeu, mais elle est celle avec laquelle Sora traverse la seconde moitié de son voyage dans les souvenirs des joueurs.",
          "In the virtual Twilight Town built by DiZ, the Kingdom Key appears in Roxas's hand when the Dusks attack him, before he understands that he is only Sora's missing half. After their reunion, Sora wakes in the mansion holding the Keyblade and, at the Mysterious Tower, Yen Sid gives him new clothes together with Star Seeker: the Kingdom Key becomes the starting weapon among many other keychains.\n\nIt keeps a narrative role nonetheless: Roxas raises it against Sora in the Station of Awakening, and Sora holds it against Xemnas in the final battle, backed by Riku and Way to the Dawn. In Kingdom Hearts II Final Mix it remains the game's most modest weapon, yet it is the one most players picture in Sora's hand for the second half of his journey.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Kingdom Hearts III rend enfin justice à la Chaîne Royale : Sora commence l'aventure avec elle et elle dispose d'une transformation, la Seconde Forme, qui reprend les techniques emblématiques des premiers épisodes comme Sonic Blade, Arcanum ou Ragnarok. Grâce à la forge des Mogs, elle peut être renforcée jusqu'au niveau 10 et rester compétitive jusqu'au Cimetière des Keyblades, où Sora la manie contre les treize ténèbres de la nouvelle Organisation.\n\nC'est encore elle que Sora tient face au Maître Xehanort à Scala ad Caelum, avant de recevoir la χ-blade des mains de son ennemi vaincu pour refermer Kingdom Hearts. Dans Re Mind, elle accompagne Sora lorsqu'il remonte le temps pour sauver ses amis, et elle est l'arme de Sora dans Melody of Memory, qui revisite toute la saga en musique.",
          "Kingdom Hearts III finally does the Kingdom Key justice: Sora starts the adventure with it and it has a formchange, Second Form, which brings back signature techniques from the early games such as Sonic Blade, Ars Arcanum and Ragnarok. Thanks to the Moogle forge it can be upgraded to level 10 and stays competitive all the way to the Keyblade Graveyard, where Sora wields it against the thirteen darknesses of the new Organization.\n\nIt is also what Sora holds against Master Xehanort in Scala ad Caelum, before receiving the χ-blade from his defeated enemy to close Kingdom Hearts. In Re Mind it accompanies Sora as he turns back time to save his friends, and it is Sora's weapon in Melody of Memory, which revisits the whole series through music.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, Kingdom Chain (キングダムチェーン), met l'accent sur la chaîne et non sur la clé.", "The Japanese name, Kingdom Chain (キングダムチェーン), stresses the chain rather than the key."),
      L("Dans le premier jeu, la Chaîne Royale ne peut jamais être vendue : elle est la seule arme permanente de Sora.", "In the first game the Kingdom Key can never be sold: it is Sora's only permanent weapon."),
      L("Sa transformation Seconde Forme dans Kingdom Hearts III est un hommage direct aux capacités de Kingdom Hearts et Kingdom Hearts II.", "Its Second Form formchange in Kingdom Hearts III is a direct tribute to the abilities of Kingdom Hearts and Kingdom Hearts II."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Kingdom Key", url: "https://kingdomhearts.fandom.com/wiki/Kingdom_Key" },
    ],
  },

  // ─────────────────────────── Chaîne Royale D ───────────────────────────
  "kingdom-key-d": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "La Chaîne Royale D est le miroir de la Chaîne Royale : même silhouette, mais un manche argenté et une lame dorée, comme si l'on avait inversé les couleurs. Le « D » renvoie au Domaine des Ténèbres, dont elle est la Keyblade attitrée, de la même façon que la Chaîne Royale est celle du Domaine de la Lumière. Son porte-clés reprend lui aussi l'emblème de Mickey.\n\nElle appartient au roi Mickey, qui l'a trouvée lors de son passage dans le Domaine des Ténèbres, après les événements de Birth by Sleep. Elle marque un tournant pour le personnage : l'apprenti de Yen Sid, qui maniait Star Seeker, devient un Maître à part entière, capable d'agir depuis l'autre côté des mondes. Sa fonction première est de fermer, avec sa jumelle, la porte de Kingdom Hearts.",
          "The Kingdom Key D is the Kingdom Key's mirror: the same silhouette, but with a silver hilt and a golden blade, as if the colours had been swapped. The “D” refers to the Realm of Darkness, whose designated Keyblade it is, just as the Kingdom Key belongs to the Realm of Light. Its keychain also carries Mickey's emblem.\n\nIt belongs to King Mickey, who found it during his time in the Realm of Darkness after the events of Birth by Sleep. It marks a turning point for the character: Yen Sid's apprentice, who used to wield Star Seeker, becomes a fully fledged Master able to act from the other side of the worlds. Its first purpose is to close, together with its twin, the door to Kingdom Hearts.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Pendant tout le premier jeu, Mickey reste hors champ : il a quitté le Château Disney en laissant une lettre à Donald et Dingo, les chargeant de trouver « la clé ». On ne le découvre qu'au Bout du Monde, de l'autre côté de la porte de Kingdom Hearts, lorsque Sora tente de la refermer sur les Sans-cœur qui en jaillissent.\n\nMickey apparaît alors dans le Domaine des Ténèbres, la Chaîne Royale D à la main, et explique qu'il existe toujours une porte vers la lumière. Sora et lui lèvent leurs Keyblades jumelles de part et d'autre du seuil et scellent Kingdom Hearts, tandis que Riku reste enfermé avec le roi. Cette image des deux clés dressées face à face conclut le premier Kingdom Hearts et fixe pour longtemps la symbolique de ces deux armes.",
          "Throughout the first game Mickey stays off screen: he has left Disney Castle with a letter to Donald and Goofy asking them to find “the key”. He is only seen at the End of the World, on the far side of the door to Kingdom Hearts, when Sora tries to shut it on the Heartless pouring out.\n\nMickey then appears in the Realm of Darkness holding the Kingdom Key D and explains that there is always a door to the light. He and Sora raise their twin Keyblades on either side of the threshold and seal Kingdom Hearts, while Riku stays locked in with the king. That image of two keys held up face to face closes the first Kingdom Hearts and defines the symbolism of both weapons for years to come.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Mickey retrouve Sora à la Forteresse Oubliée, où il révèle que l'ennemi vaincu un an plus tôt n'était que le Sans-cœur de Xehanort. Vêtu du manteau de l'Organisation, il intervient ensuite à plusieurs reprises avec la Chaîne Royale D : lors de la bataille des Mille Sans-cœur au Jardin Radieux, puis dans le Monde qui n'existe pas.\n\nSur le plan du jeu, la Chaîne Royale D est l'arme du roi lorsqu'il vient remplacer Sora tombé au combat contre certains boss : Mickey enchaîne alors des attaques acrobatiques et peut relever son ami grâce à une commande dédiée. Dans Kingdom Hearts II Final Mix, il reste ainsi le seul allié jouable, et sa Keyblade dorée ne peut être équipée par Sora.",
          "Mickey reunites with Sora in Hollow Bastion, where he reveals that the foe defeated a year earlier was only Xehanort's Heartless. Wearing the Organization's coat, he then steps in several times with the Kingdom Key D: during the Battle of 1000 Heartless in Radiant Garden, then in The World That Never Was.\n\nGameplay-wise, the Kingdom Key D is the king's weapon when he takes over from a fallen Sora against certain bosses: Mickey chains acrobatic attacks and can revive his friend with a dedicated command. In Kingdom Hearts II Final Mix he thus remains the only playable ally, and his golden Keyblade can never be equipped by Sora.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Pendant l'examen de Maîtrise de Sora et Riku, Mickey veille depuis la Tour Mystérieuse, mais il finit par rejoindre l'action au Monde qui n'existe pas. Alors que Riku, épuisé, vient d'affronter Ansem, Sans-cœur de Xehanort, Mickey fige le temps avec le sort Stopza, Chaîne Royale D en main, avant que le Jeune Xehanort ne brise l'enchantement.\n\nQuand le Maître Xehanort ressuscité apparaît, Mickey s'interpose, Keyblade dorée levée, jusqu'à ce que Lea fasse irruption et détourne l'attention des ténèbres. Après le retour de Sora et Riku à la Tour, Mickey assiste à la nomination de Riku au rang de Maître et confie à Yen Sid le récit de sa rencontre avec Aqua dans le Domaine des Ténèbres.",
          "During Sora's and Riku's Mark of Mastery exam, Mickey watches over them from the Mysterious Tower, but he eventually joins the action in The World That Never Was. As an exhausted Riku has just fought Ansem, Xehanort's Heartless, Mickey freezes time with Stopza, Kingdom Key D in hand, before Young Xehanort breaks the spell.\n\nWhen the revived Master Xehanort appears, Mickey steps in with his golden Keyblade raised, until Lea bursts in and draws the darkness's attention. After Sora and Riku return to the Tower, Mickey witnesses Riku being named a Master and tells Yen Sid of his encounter with Aqua in the Realm of Darkness.",
        ),
      },
      {
        game: "0-2-birth-by-sleep-a-fragmentary-passage",
        text: L(
          "0.2 raconte enfin cette rencontre. Alors qu'Aqua erre depuis plus de dix ans dans le Domaine des Ténèbres, elle tombe sur Mickey au bord de la mer sombre : le roi y cherche la Keyblade de ce domaine, nécessaire pour refermer Kingdom Hearts de l'intérieur. Il tient déjà la Chaîne Royale D à la main et combat à ses côtés contre les Sans-cœur.\n\nTous deux gagnent la porte de Kingdom Hearts au moment même où Sora et Riku la ferment depuis l'autre côté. Aqua se sacrifie pour repousser une Tour Démoniaque et permettre à Mickey de rester près de la porte ; le roi conserve la Chaîne Royale D, celle-là même qu'il brandit à la fin du premier jeu. Dans Kingdom Hearts III, Mickey la manie de nouveau dans le Domaine des Ténèbres puis au Cimetière des Keyblades.",
          "0.2 finally tells that meeting. As Aqua has been wandering the Realm of Darkness for more than ten years, she runs into Mickey on the shore of the dark sea: the king is looking for that realm's Keyblade, needed to close Kingdom Hearts from within. He already holds the Kingdom Key D and fights the Heartless at her side.\n\nThe two reach the door to Kingdom Hearts at the very moment Sora and Riku close it from the other side. Aqua sacrifices herself to hold back a Demon Tower so that Mickey can stay by the door; the king keeps the Kingdom Key D, the very one he raises at the end of the first game. In Kingdom Hearts III Mickey wields it again in the Realm of Darkness and then at the Keyblade Graveyard.",
        ),
      },
    ],
    trivia: [
      L("Dans Chain of Memories, Mickey n'a pas d'arme propre : il intervient dans l'histoire de Riku sous forme de carte d'ami.", "In Chain of Memories Mickey has no weapon of his own: he helps in Riku's story as a friend card."),
      L("Les deux Chaînes Royales levées face à face à la fin du premier jeu sont l'une des images les plus reprises de la saga.", "The two Kingdom Keys raised face to face at the end of the first game are among the most reused images of the series."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Kingdom Key D", url: "https://kingdomhearts.fandom.com/wiki/Kingdom_Key_D" },
    ],
  },

  // ─────────────────────────── Tendre Promesse ───────────────────────────
  "oathkeeper": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Blanche, dorée et parcourue de motifs bleu pâle, Tendre Promesse est l'une des Keyblades les plus élégantes de la saga. Ses dents rappellent une aile, et son porte-clés est le porte-bonheur de Kairi : cinq coquillages thalassa cousus en forme d'étoile. Son nom japonais, « le porte-bonheur de la promesse », dit tout : elle naît de la promesse faite par Sora de rapporter ce porte-bonheur à Kairi.\n\nElle incarne la lumière, la fidélité et les liens, par opposition à Souvenir Perdu, sa jumelle noire. Cette dualité est au cœur de Roxas, qui les manie ensemble, et de la Forme Finale de Sora, qui les fait flotter à ses côtés. Selon les épisodes, Tendre Promesse est tantôt une Keyblade de milieu de jeu, tantôt une récompense réservée aux joueurs les plus acharnés.",
          "White, gold and lined with pale blue patterns, Oathkeeper is one of the most elegant Keyblades in the series. Its teeth suggest a wing, and its keychain is Kairi's lucky charm: five thalassa shells sewn into a star. Its Japanese name, “the charm of the promise”, says it all: it is born from Sora's promise to bring that charm back to Kairi.\n\nIt embodies light, loyalty and bonds, in contrast to Oblivion, its black twin. That duality lies at the heart of Roxas, who wields them together, and of Sora's Final Form, which lets them float at his sides. Depending on the game, Oathkeeper is sometimes a mid-game Keyblade, sometimes a reward reserved for the most dedicated players.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Après avoir libéré le cœur de Kairi à la Forteresse Oubliée, Sora revient sur les Îles du Destin, réduites à un fragment flottant dans le Bout du Monde. Kairi lui remet alors son porte-bonheur en lui faisant promettre de le lui rapporter. Ce geste donne naissance à Tendre Promesse, que Sora peut équiper dès ce moment.\n\nDans le premier jeu, elle offre un bon équilibre entre force et magie et se distingue par sa portée et son taux de coups critiques, ce qui en fait une arme fiable pour le Bout du Monde et le combat contre Ansem. Dans Chain of Memories, elle réapparaît sous forme de carte, obtenue en avançant dans le Manoir Oblivion, alors que les souvenirs de Kairi s'effacent peu à peu de la mémoire de Sora.",
          "After freeing Kairi's heart in Hollow Bastion, Sora returns to Destiny Islands, now a fragment drifting in the End of the World. Kairi hands him her lucky charm and makes him promise to bring it back to her. That gesture gives birth to Oathkeeper, which Sora can equip from then on.\n\nIn the first game it offers a good balance of strength and magic and stands out for its reach and critical rate, making it a reliable weapon for the End of the World and the fight against Ansem. In Chain of Memories it returns as a card obtained while climbing Castle Oblivion, as Kairi's memories slowly fade from Sora's mind.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Tendre Promesse devient le symbole de Roxas à la toute fin de 358/2 Days. Lorsque Xion se laisse vaincre pour que Roxas retrouve le pouvoir qu'elle lui avait pris, ses souvenirs et sa Keyblade se fondent en lui. Roxas peut alors manier deux Keyblades : Tendre Promesse dans une main, Souvenir Perdu dans l'autre.\n\nC'est ainsi armé qu'il quitte l'Organisation et affronte Riku dans le Monde qui n'existe pas, décidé à libérer Kingdom Hearts pour ramener Xion. Riku ne peut le vaincre qu'en libérant les ténèbres d'Ansem en lui. En jeu, le Gear Zéro permet de reconstituer ce double maniement, y compris dans le mode Mission.",
          "Oathkeeper becomes Roxas's symbol at the very end of 358/2 Days. When Xion lets herself be defeated so that Roxas regains the power she had taken from him, her memories and her Keyblade merge into him. Roxas can then wield two Keyblades: Oathkeeper in one hand, Oblivion in the other.\n\nArmed this way, he leaves the Organization and faces Riku in The World That Never Was, set on freeing Kingdom Hearts to bring Xion back. Riku can only defeat him by unleashing Ansem's darkness within himself. In gameplay, the Zero Gear recreates that dual wielding, including in Mission Mode.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sora reçoit Tendre Promesse dès qu'il quitte la Cité du Crépuscule après le prologue de Roxas, en souvenir de la promesse faite à Kairi. Elle est aussi l'une des deux Keyblades que Roxas brandit contre Sora dans le Palier de l'Éveil, dans Kingdom Hearts II Final Mix. Sa capacité Forme +, qui accélère la montée de la jauge des Formes, en fait une alliée précieuse pour qui aime la Forme Finale.\n\nJustement, en Forme Finale, Sora fait flotter Tendre Promesse et Souvenir Perdu autour de lui, écho visuel de Roxas. Cette forme apparaît d'abord au hasard, après la rencontre avec Roxas au Monde qui n'existe pas, comme si le Simili prêtait sa force à son original.",
          "Sora receives Oathkeeper as soon as he leaves Twilight Town after Roxas's prologue, in memory of the promise made to Kairi. It is also one of the two Keyblades Roxas raises against Sora in the Station of Awakening in Kingdom Hearts II Final Mix. Its Form Boost ability, which fills the Drive gauge faster, makes it a valuable ally for those who love Final Form.\n\nIn Final Form, precisely, Sora lets Oathkeeper and Oblivion float around him, a visual echo of Roxas. That form first appears at random, after the encounter with Roxas in The World That Never Was, as though the Nobody were lending his strength to his original.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Absente du jeu de base, Tendre Promesse est ajoutée par l'extension Re Mind, dans l'épisode Limitcut : elle récompense la victoire contre les treize combats de données de l'Organisation, accessibles depuis l'ordinateur du Jardin Radieux. Ses statistiques sont parmi les plus hautes du jeu et sa transformation, la Forme Lumière, offre une allonge et une mobilité inédites.\n\nÉquipée avec Souvenir Perdu, elle débloque la Forme Double, dans laquelle Sora combat exactement comme Roxas, deux Keyblades en main. Roxas lui-même, revenu à la vie dans un réplica, brandit Tendre Promesse et Souvenir Perdu au Cimetière des Keyblades pour sauver Sora face à Xemnas et Saïx.",
          "Absent from the base game, Oathkeeper is added by the Re Mind expansion in the Limitcut episode: it rewards victory over the thirteen Organization data battles, accessible from the computer in Radiant Garden. Its stats are among the highest in the game and its formchange, Light Form, grants unprecedented reach and mobility.\n\nEquipped together with Oblivion it unlocks Double Form, in which Sora fights exactly like Roxas, two Keyblades in hand. Roxas himself, restored to life in a replica, raises Oathkeeper and Oblivion at the Keyblade Graveyard to save Sora from Xemnas and Saïx.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, 約束のお守り, signifie littéralement « le porte-bonheur de la promesse ».", "The Japanese name, 約束のお守り, literally means “the charm of the promise”."),
      L("Dans la version anglaise, Roxas tient Tendre Promesse dans la main droite et Souvenir Perdu dans la gauche ; certaines illustrations inversent les deux.", "In the English release Roxas holds Oathkeeper in his right hand and Oblivion in his left; some artworks swap them."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Oathkeeper", url: "https://kingdomhearts.fandom.com/wiki/Oathkeeper" },
    ],
  },

  // ─────────────────────────── Souvenir Perdu ───────────────────────────
  "oblivion": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Souvenir Perdu est une Keyblade entièrement noire, aux reflets bleu nuit et argentés, avec une lame évidée qui donne l'impression d'une chaîne brisée. Son porte-clés est un petit emblème sombre en forme de couronne. Son nom japonais signifie « les souvenirs qui s'en sont allés », et son nom français, Souvenir Perdu, garde cette idée d'un passé douloureux.\n\nElle est traditionnellement associée à Riku : ses couleurs sont celles de l'Âme Éternelle, et elle apparaît dans le monde où Sora doit affronter son ami tombé dans les ténèbres. Jumelle de Tendre Promesse, elle représente le côté obscur du même lien, ce qui explique que Roxas les manie ensemble. Puissante en force et faible en magie, elle est souvent l'une des meilleures armes du jeu où elle apparaît.",
          "Oblivion is an entirely black Keyblade with midnight-blue and silver highlights, and a hollowed blade that looks like a broken chain. Its keychain is a small dark crown-shaped emblem. Its Japanese name means “the memories that have passed”, and its French name, Souvenir Perdu (“lost memory”), keeps that idea of a painful past.\n\nIt is traditionally tied to Riku: its colours are those of Soul Eater, and it appears in the world where Sora must face his friend fallen to darkness. Twin to Oathkeeper, it represents the dark side of the same bond, which is why Roxas wields them together. Strong in attack and weak in magic, it is often one of the best weapons of whichever game it appears in.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Souvenir Perdu se trouve dans un coffre de la Grande Salle de la Forteresse Oubliée, la pièce même où Sora a affronté Riku possédé par Ansem et où il a percé son propre cœur avec la Keyblade des Cœurs. Elle n'apparaît qu'une fois ces événements passés, comme un vestige de ce que Sora a perdu dans ce château.\n\nAvec sa force élevée, c'est l'une des armes les plus efficaces du premier jeu, seulement dépassée par l'Arme Ultime et, dans Final Mix, par les récompenses des boss secrets. Dans Chain of Memories, la carte Souvenir Perdu est parmi les plus puissantes du jeu de cartes et se gagne dans les derniers étages du Manoir Oblivion, au moment où Sora est prêt à sacrifier ses souvenirs pour Naminé.",
          "Oblivion lies in a chest in the Grand Hall of Hollow Bastion, the very room where Sora fought Riku possessed by Ansem and where he pierced his own heart with the Keyblade of People's Hearts. It only appears once those events have passed, like a remnant of what Sora lost in that castle.\n\nWith its high strength it is one of the most effective weapons of the first game, surpassed only by the Ultima Weapon and, in Final Mix, by the secret boss rewards. In Chain of Memories, the Oblivion card is among the strongest in the card game and is earned on the upper floors of Castle Oblivion, as Sora is ready to sacrifice his memories for Naminé.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Après la disparition de Xion, Roxas se retrouve capable de manier deux Keyblades : Souvenir Perdu apparaît dans sa main gauche, à côté de Tendre Promesse. Dans le récit, ces deux armes matérialisent les deux personnes qui ont compté pour lui, Xion et Axel, et les souvenirs de Sora qui coulent en lui.\n\nRoxas les brandit contre les Sans-cœur du Monde qui n'existe pas, puis contre Riku, avant d'être capturé par DiZ et placé dans la Cité du Crépuscule virtuelle. Dans le mode Mission, il est possible de reconstituer cette configuration avec le Gear Zéro ; Riku, jouable, manie pour sa part l'Âme Éternelle, ce qui souligne la parenté visuelle entre les deux armes noires.",
          "After Xion's disappearance, Roxas finds himself able to wield two Keyblades: Oblivion appears in his left hand beside Oathkeeper. In the story, these two weapons stand for the two people who mattered to him, Xion and Axel, and for Sora's memories flowing within him.\n\nRoxas raises them against the Heartless of The World That Never Was, then against Riku, before being captured by DiZ and placed in the virtual Twilight Town. In Mission Mode the setup can be recreated with the Zero Gear; playable Riku wields Soul Eater, which highlights the visual kinship between the two black weapons.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sora obtient Souvenir Perdu dans le Monde qui n'existe pas, après avoir enfin retrouvé Riku, prisonnier de l'apparence d'Ansem. Le moment n'est pas anodin : la Keyblade liée à Riku ne revient qu'au moment des retrouvailles. Elle affiche l'une des meilleures forces du jeu et sa capacité renforce la charge de la jauge des Formes.\n\nDans Kingdom Hearts II Final Mix, Roxas la manie contre Sora dans le Palier de l'Éveil, et le joueur peut la lui reprendre au cours du combat grâce à une commande de réaction, retournant ses propres Keyblades contre lui. Elle sert aussi de modèle à Deux en Un, la Keyblade obtenue en battant Roxas.",
          "Sora obtains Oblivion in The World That Never Was, after finally finding Riku again, trapped in Ansem's appearance. The timing matters: the Keyblade tied to Riku only returns at the moment of their reunion. It boasts some of the game's best strength and its ability boosts the Drive gauge.\n\nIn Kingdom Hearts II Final Mix, Roxas wields it against Sora in the Station of Awakening, and the player can snatch it from him mid-fight with a Reaction Command, turning his own Keyblades against him. It also serves as the model for Two Become One, the Keyblade earned by defeating Roxas.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Kingdom Hearts III Re Mind réserve Souvenir Perdu à un exploit : vaincre Yozora, le boss secret de l'épisode Limitcut, qui attend Sora dans une ville nocturne après les treize combats de données. C'est donc la dernière Keyblade que l'on peut obtenir dans le jeu.\n\nSa transformation, la Forme Ténèbres, repose sur des enchaînements rapides et des téléportations, et elle se combine avec Tendre Promesse pour déclencher la Forme Double. Dans le récit, Roxas manie les deux Keyblades au Cimetière des Keyblades, tandis que Xion, revenue à elle, se bat aux côtés d'Axel avec sa propre Chaîne Royale.",
          "Kingdom Hearts III Re Mind reserves Oblivion for a feat: defeating Yozora, the secret boss of the Limitcut episode, who waits for Sora in a night-time city after the thirteen data battles. It is therefore the last Keyblade obtainable in the game.\n\nIts formchange, Dark Form, relies on fast combos and teleports, and it combines with Oathkeeper to trigger Double Form. In the story, Roxas wields both Keyblades at the Keyblade Graveyard, while Xion, restored to herself, fights beside Axel with her own Kingdom Key.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, 過ぎ去りし思い出, se traduit par « les souvenirs qui s'en sont allés ».", "The Japanese name, 過ぎ去りし思い出, translates as “the memories that have passed”."),
      L("Souvenir Perdu et Tendre Promesse sont les deux seules Keyblades de Sora à revenir dans quatre épisodes distincts sous forme équipable.", "Oblivion and Oathkeeper are the only two of Sora's Keyblades to return as equippable weapons in four separate games."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Oblivion", url: "https://kingdomhearts.fandom.com/wiki/Oblivion" },
    ],
  },

  // ─────────────────────────── Arme Ultime ───────────────────────────
  "ultima-weapon": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "L'Arme Ultime est le nom donné, dans presque chaque épisode, à la Keyblade la plus puissante que Sora puisse obtenir. Le nom vient de Final Fantasy, où « Ultima Weapon » désigne à la fois une arme légendaire et un monstre redoutable. Chaque jeu lui donne un dessin différent, mais on retrouve des constantes : de l'or, du bleu ou du blanc, des ailes et une couronne, et un porte-clés qui reprend la couronne portée par Sora.\n\nElle n'a pas de porteur historique ni de place dans le récit : c'est une récompense de synthèse, fabriquée chez les Mogs à partir de matériaux rares dont l'Orichalque. Sa symbolique est celle de l'accomplissement : obtenir l'Arme Ultime signifie avoir exploré tous les mondes et maîtrisé le système de synthèse.",
          "The Ultima Weapon is the name given, in almost every game, to the most powerful Keyblade Sora can obtain. The name comes from Final Fantasy, where “Ultima Weapon” is both a legendary weapon and a fearsome monster. Each game gives it a different design, but some constants remain: gold, blue or white, wings and a crown, and a keychain based on the crown Sora wears.\n\nIt has no historical wielder and no place in the story: it is a synthesis reward, crafted at the Moogles' from rare materials including Orichalcum. Its symbolism is one of completion: earning the Ultima Weapon means having explored every world and mastered the synthesis system.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "Dans le premier Kingdom Hearts, l'Arme Ultime est la dernière recette de l'atelier de synthèse des Mogs, à la Ville de Traverse. Elle exige des matériaux rares laissés par des Sans-cœur précis, dont l'Orichalque, qui ne s'obtient qu'en quelques exemplaires, ainsi que des gemmes et des cristaux issus des ennemis les plus coriaces.\n\nSa force et sa magie dépassent celles de toutes les autres Keyblades du jeu, et elle dispose d'une portée exceptionnelle grâce à sa lame en forme de cœur ailé. Kingdom Hearts Final Mix allonge la liste des matériaux nécessaires, ajoutant de nouveaux objets à collecter, mais conserve son statut d'arme ultime, seulement concurrencée par les Keyblades des boss secrets.",
          "In the first Kingdom Hearts, the Ultima Weapon is the last recipe of the Moogles' synthesis workshop in Traverse Town. It requires rare materials dropped by specific Heartless, including Orichalcum, available only in a handful of copies, as well as gems and crystals from the toughest enemies.\n\nIts strength and magic exceed those of every other Keyblade in the game, and it has exceptional reach thanks to its winged-heart blade. Kingdom Hearts Final Mix lengthens the list of required materials, adding new items to collect, but keeps its status as the ultimate weapon, challenged only by the secret boss Keyblades.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Kingdom Hearts II cache la Recette Ultime dans le sous-sol du manoir de la Cité du Crépuscule, dans la salle où Sora a dormi pendant un an. La synthèse demande de l'Orichalque+, un matériau dont il n'existe que sept exemplaires dans le jeu, dispersés entre l'Espace Paranoïaque, l'Atlantica, la Forêt des Rêves Bleus, la Coupe Déesse du Destin ou encore le Mont Olympe.\n\nComme la recette de base en réclame davantage qu'il n'en existe, il faut d'abord obtenir un Cristal d'Énergie pour diviser le coût par deux. L'Arme Ultime ainsi obtenue offre MP de Secours et surpasse toutes les autres Keyblades ; dans Final Mix, elle reste au sommet malgré les nouvelles armes comme Deux en Un ou Preuve du Vainqueur.",
          "Kingdom Hearts II hides the Ultima Recipe in the basement of the Twilight Town mansion, in the room where Sora slept for a year. Synthesising it requires Orichalcum+, a material with only seven copies in the whole game, scattered between Space Paranoids, Atlantica, the Hundred Acre Wood, the Goddess of Fate Cup and Olympus Coliseum, among others.\n\nSince the base recipe asks for more than exist, an Energy Crystal must first be found to halve the cost. The Ultima Weapon then grants MP Hastega and outclasses every other Keyblade; in Final Mix it stays on top despite new weapons such as Two Become One or Winner's Proof.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Dans Kingdom Hearts III, l'Arme Ultime se forge à l'atelier des Mogs avec sept Orichalque+, deux Cristaux Lucides, deux Cristaux Pulsants et deux Cristaux Éclatants. Les sept Orichalque+ imposent de faire le tour du jeu : réussir tous les défis des Sept Flans, collectionner toutes les Marques Chanceuses, remplir les commandes photo des Mogs, terminer la course de luge d'Arendelle, vaincre le boss gummi final, obtenir un score au Monde Final et ouvrir un coffre au Cimetière des Keyblades.\n\nAvec 13 en force et en magie, elle domine toutes les autres Keyblades, y compris celles de Re Mind. Sa transformation, la Forme Ultime, fait pleuvoir des rayons de lumière et permet d'enchaîner un finisher dévastateur, ce qui en fait un atout majeur contre les combats de données et Yozora.",
          "In Kingdom Hearts III, the Ultima Weapon is forged at the Moogle workshop with seven Orichalcum+, two Wellspring Crystals, two Lucid Crystals and two Pulsing Crystals. The seven Orichalcum+ force a tour of the whole game: excel in every Flantastic Seven challenge, find every Lucky Emblem, complete the Moogles' photo missions, finish the Frozen Slider course in Arendelle, beat the final gummi boss, reach a score in the Final World and open a chest at the Keyblade Graveyard.\n\nWith 13 strength and 13 magic it dominates every other Keyblade, including those of Re Mind. Its formchange, Ultimate Form, rains beams of light and chains a devastating finisher, making it a major asset against the data battles and Yozora.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, アルテマウェポン, est la transcription directe d'« Ultima Weapon », comme dans Final Fantasy.", "The Japanese name, アルテマウェポン, is a direct transcription of “Ultima Weapon”, as in Final Fantasy."),
      L("Birth by Sleep, Re:coded et Dream Drop Distance ont aussi leur Arme Ultime, chaque fois avec un design et une méthode d'obtention différents.", "Birth by Sleep, Re:coded and Dream Drop Distance also have their own Ultima Weapon, each with a different design and method of obtaining."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Ultima Weapon", url: "https://kingdomhearts.fandom.com/wiki/Ultima_Weapon" },
    ],
  },

  // ─────────────────────────── Point du Jour ───────────────────────────
  "way-to-the-dawn": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Point du Jour est la Keyblade de Riku. Sa lame reprend l'Âme Éternelle, l'épée sombre que Riku maniait sous l'emprise des ténèbres : même lame rouge et bleu nuit, même œil bleu au niveau de la garde. Mais elle y ajoute une aile de démon d'un côté et une aile d'ange de l'autre, et son porte-clés est un cœur stylisé : la Keyblade tout entière raconte le passage de Riku des ténèbres vers une voie intermédiaire.\n\nSon nom vient de la fin de Chain of Memories, où Riku choisit « la voie de l'aube », ni lumière ni ténèbres. Elle est ainsi la première Keyblade dont le sens est explicitement moral : Riku accepte ses ténèbres sans plus s'y abandonner. Elle reste son arme jusqu'à sa destruction au début de Kingdom Hearts III.",
          "Way to the Dawn is Riku's Keyblade. Its blade recalls Soul Eater, the dark sword Riku wielded under the sway of darkness: the same red and midnight-blue blade, the same blue eye near the guard. But it adds a demon wing on one side and an angel wing on the other, and its keychain is a stylised heart: the whole Keyblade tells of Riku's passage from darkness to a middle road.\n\nIts name comes from the end of Chain of Memories, where Riku chooses “the road to dawn”, neither light nor darkness. It is thus the first Keyblade whose meaning is explicitly moral: Riku accepts his darkness without giving in to it any more. It remains his weapon until it is destroyed at the start of Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Riku passe presque tout Kingdom Hearts II dans l'ombre, sous l'apparence d'Ansem qu'il a prise pour vaincre Roxas. Dans le Monde qui n'existe pas, il est révélé que le mystérieux encapuchonné manie une Keyblade ; c'est Point du Jour, qui apparaît dans sa main sans que le jeu explique sa transformation depuis l'Âme Éternelle. Il lance aussi une autre Keyblade, Destin Florissant, à Kairi pour qu'elle puisse se défendre.\n\nUne fois Riku revenu à son apparence grâce à Naminé, il rejoint l'équipe comme allié jouable et combat avec Point du Jour aux côtés de Sora contre Xemnas, jusqu'au duel final où les deux amis, à la limite de leurs forces, ne survivent qu'en s'appuyant l'un sur l'autre. Ils regagnent ensuite les Îles du Destin par la porte de la lumière.",
          "Riku spends almost all of Kingdom Hearts II in the shadows, wearing Ansem's appearance, taken on in order to defeat Roxas. In The World That Never Was it is revealed that the mysterious hooded figure wields a Keyblade; it is Way to the Dawn, which appears in his hand without the game explaining its change from Soul Eater. He also tosses another Keyblade, Destiny's Embrace, to Kairi so she can defend herself.\n\nOnce Riku regains his appearance thanks to Naminé, he joins the party as a playable ally and fights with Way to the Dawn beside Sora against Xemnas, up to the final duel where the two friends, at the end of their strength, survive only by leaning on each other. They then return to Destiny Islands through the door to light.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Point du Jour est l'arme de Riku pendant tout l'examen de Maîtrise, ce qui en fait pour la première fois une Keyblade jouable de bout en bout. Riku traverse les Mondes Endormis avec elle et ses Avale-Rêves, en apprenant à utiliser les techniques de « Flowmotion » et les liens avec ses Esprits.\n\nAu terme de l'examen, Riku découvre qu'il a voyagé tout du long à l'intérieur des rêves de Sora. Lorsque son ami sombre dans le sommeil, c'est avec Point du Jour qu'il plonge dans le cœur de Sora, affronte le Cauchemar de Ventus en armure et libère Sora de son cauchemar. Yen Sid le proclame alors Maître de la Keyblade, le seul des deux candidats à réussir.",
          "Way to the Dawn is Riku's weapon throughout the Mark of Mastery exam, which makes it a fully playable Keyblade for the first time. Riku crosses the Sleeping Worlds with it and his Dream Eaters, learning Flowmotion and the links with his Spirits.\n\nAt the end of the exam, Riku discovers he has been travelling inside Sora's dreams all along. When his friend sinks into sleep, it is with Way to the Dawn that he dives into Sora's heart, faces the Armored Ventus Nightmare and frees Sora from his nightmare. Yen Sid then proclaims him a Keyblade Master, the only one of the two candidates to pass.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au tout début de Kingdom Hearts III, Riku et Mickey explorent le Domaine des Ténèbres à la recherche d'Aqua. Sur la plage sombre, une Tour Démoniaque, amas de Sans-cœur Ombres, les submerge. Riku frappe de toutes ses forces et la lame de Point du Jour se brise net ; Mickey et lui doivent battre en retraite.\n\nDe retour à la Tour Mystérieuse, Yen Sid remet à Riku une nouvelle Keyblade de Maître, Braveheart, et Riku confie les débris de Point du Jour... ou plutôt l'abandonne : il explique n'avoir plus besoin de cette arme née de ses ténèbres. Point du Jour n'apparaît plus ensuite, si ce n'est dans les mains du Réplica de Riku, copie de l'ancien Riku recréée par Xehanort.",
          "At the very start of Kingdom Hearts III, Riku and Mickey explore the Realm of Darkness in search of Aqua. On the dark shore, a Demon Tower, a swarm of Shadow Heartless, overwhelms them. Riku strikes with all his might and the blade of Way to the Dawn snaps clean; he and Mickey have to retreat.\n\nBack at the Mysterious Tower, Yen Sid gives Riku a new Master's Keyblade, Braveheart, and Riku lets go of Way to the Dawn: he explains he no longer needs a weapon born from his darkness. Way to the Dawn does not appear again, except in the hands of Riku Replica, a copy of the old Riku recreated by Xehanort.",
        ),
      },
    ],
    trivia: [
      L("Nomura a confirmé après coup que Point du Jour est bien l'Âme Éternelle transformée en Keyblade, le jeu ne le montrant jamais.", "Nomura later confirmed that Way to the Dawn is indeed Soul Eater turned into a Keyblade, something the game never shows."),
      L("Dans 358/2 Days et Re:coded, Riku combat encore avec l'Âme Éternelle, ce qui situe l'apparition de Point du Jour peu avant Kingdom Hearts II.", "In 358/2 Days and Re:coded Riku still fights with Soul Eater, placing the appearance of Way to the Dawn shortly before Kingdom Hearts II."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Way to the Dawn", url: "https://kingdomhearts.fandom.com/wiki/Way_to_the_Dawn" },
    ],
  },

  // ─────────────────────────── Braveheart ───────────────────────────
  "braveheart": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Braveheart est la Keyblade que Riku reçoit de Yen Sid après la destruction de Point du Jour. Son dessin tranche avec sa devancière : des lignes droites, un manche noir, une lame gris-bleu sobre et anguleuse, sans aile ni œil. Son porte-clés est un cœur stylisé, symbole du courage que Riku a fini par trouver en lui-même.\n\nCette simplicité est celle des Keyblades de Maître, comme Maître Gardien d'Eraqus : Braveheart marque l'entrée de Riku dans l'âge adulte, débarrassé du besoin d'afficher ses ténèbres. Elle est aussi la première Keyblade de Riku qui ne dérive pas de l'Âme Éternelle. Son nom se passe de traduction en français, comme en japonais où il est simplement transcrit.",
          "Braveheart is the Keyblade Riku receives from Yen Sid after Way to the Dawn is destroyed. Its design breaks with its predecessor: straight lines, a black hilt, a plain angular grey-blue blade, no wing and no eye. Its keychain is a stylised heart, symbol of the courage Riku has finally found within himself.\n\nThat simplicity is that of Masters' Keyblades, like Eraqus's Master's Defender: Braveheart marks Riku's entry into adulthood, free of the need to display his darkness. It is also the first of Riku's Keyblades that does not derive from Soul Eater. Its name is left untranslated in French, as in Japanese where it is simply transliterated.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Yen Sid remet Braveheart à Riku à la Tour Mystérieuse, en reconnaissance de son rang de Maître, peu après son retour du Domaine des Ténèbres. Riku repart aussitôt avec Mickey, puis rejoint Sora pour délivrer Aqua : dans le Domaine des Ténèbres, il combat Aqua corrompue par les ténèbres aux côtés de Sora, Braveheart en main.\n\nAu Cimetière des Keyblades, Riku affronte le Réplica de Riku, sa propre copie manipulée par Xehanort, et tente de retenir une Marée Démoniaque qui finit par engloutir tous les Gardiens, avant que Sora et le Pouvoir de l'Éveil ne rétablissent la situation. Il se bat ensuite aux côtés de Sora et Mickey contre Xigbar et le Riku des ténèbres, et se tient auprès de Sora face au Maître Xehanort à Scala ad Caelum. Dans Re Mind, Riku devient brièvement jouable avec Braveheart, dont les combos rapides et les pas glissés définissent son style de Maître.",
          "Yen Sid hands Braveheart to Riku at the Mysterious Tower in recognition of his rank as Master, shortly after his return from the Realm of Darkness. Riku sets off again at once with Mickey, then joins Sora to rescue Aqua: in the Realm of Darkness he fights a darkness-corrupted Aqua beside Sora, Braveheart in hand.\n\nAt the Keyblade Graveyard, Riku faces Riku Replica, his own copy manipulated by Xehanort, and tries to hold back a Demon Tide that ends up swallowing every Guardian, before Sora and the power of waking set things right. He then fights alongside Sora and Mickey against Xigbar and Dark Riku, and stands beside Sora against Master Xehanort in Scala ad Caelum. In Re Mind, Riku becomes briefly playable with Braveheart, whose quick combos and sliding steps define his style as a Master.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
          "Melody of Memory revient sur toute la saga du point de vue de Kairi, et Riku y apparaît avec Braveheart dans les scènes situées après la disparition de Sora. Lorsque Kairi rapporte à Yen Sid et à Riku ce qu'elle a aperçu en plongeant dans ses souvenirs, un monde inconnu où Sora pourrait se trouver, Riku se porte volontaire pour aller le chercher.\n\nL'épilogue le montre prêt à franchir la limite entre les mondes vers cet endroit, futur théâtre de Kingdom Hearts IV, tandis que Kairi choisit de poursuivre son entraînement auprès d'Aqua. Braveheart devient ainsi la Keyblade avec laquelle Riku quitte le Domaine de la Lumière pour la « réalité » de Quadratum.",
          "Melody of Memory revisits the entire saga from Kairi's point of view, and Riku appears in it with Braveheart in the scenes set after Sora's disappearance. When Kairi tells Yen Sid and Riku what she glimpsed while diving into her memories, an unknown world where Sora might be, Riku volunteers to go and find him.\n\nThe epilogue shows him ready to cross the boundary between worlds toward that place, future setting of Kingdom Hearts IV, while Kairi chooses to continue her training under Aqua. Braveheart thus becomes the Keyblade with which Riku leaves the Realm of Light for the “reality” of Quadratum.",
        ),
      },
    ],
    trivia: [
      L("Braveheart est la seule Keyblade de Riku qu'il n'a pas obtenue par lui-même : elle lui est officiellement remise par Yen Sid.", "Braveheart is the only one of Riku's Keyblades he did not obtain by himself: it is formally handed to him by Yen Sid."),
      L("Son nom japonais, ブレイブハート, est une simple transcription de l'anglais.", "Its Japanese name, ブレイブハート, is a simple transliteration of the English."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Braveheart", url: "https://kingdomhearts.fandom.com/wiki/Braveheart" },
    ],
  },

  // ─────────────────────────── Destin Florissant ───────────────────────────
  "destinys-embrace": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Destin Florissant est la Keyblade de Kairi. Colorée et printanière, elle mêle des fleurs, des vagues et des feuilles dans des tons rose, jaune et bleu ; sa garde évoque une vague et ses dents un bouquet. Son porte-clés est un fruit paopou, le fruit en forme d'étoile des Îles du Destin qui, selon la légende, lie à jamais les destins de ceux qui le partagent.\n\nSon nom japonais, « Floral Wish », insiste sur les fleurs ; le nom français retient l'idée de destin. Elle est la Keyblade d'une Princesse de Cœur devenue Porteuse : Kairi a reçu le pouvoir de la Keyblade lorsqu'Aqua, dans Birth by Sleep, l'a protégée au Jardin Radieux et que la petite fille a touché sa Keyblade, un rite de transmission involontaire.",
          "Destiny's Embrace is Kairi's Keyblade. Colourful and spring-like, it mixes flowers, waves and leaves in pink, yellow and blue tones; its guard evokes a wave and its teeth a bouquet. Its keychain is a paopu fruit, the star-shaped fruit of Destiny Islands which, legend says, binds forever the destinies of those who share it.\n\nIts Japanese name, “Floral Wish”, stresses the flowers; the French name keeps the idea of destiny. It is the Keyblade of a Princess of Heart turned wielder: Kairi received the power of the Keyblade when Aqua, in Birth by Sleep, protected her in Radiant Garden and the little girl touched her Keyblade, an unintended rite of inheritance.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Enlevée par Axel puis retenue par Saïx dans le Monde qui n'existe pas, Kairi s'évade de sa cellule grâce à Naminé et se retrouve encerclée par des Sans-cœur. Riku, sous l'apparence d'Ansem, lui lance alors une Keyblade : Destin Florissant se matérialise dans ses mains et Kairi, pour la première fois, se bat.\n\nElle tient tête aux Sans-cœur aux côtés de Riku jusqu'à l'arrivée de Sora, à qui elle rend enfin son porte-bonheur. Kairi ne devient pas jouable, mais cette scène fait d'elle la troisième Porteuse du trio, ce que le jeu confirme en la montrant Keyblade en main jusqu'à la fin de l'aventure. Le jeu ne précise pas d'où Riku tient cette Keyblade.",
          "Kidnapped by Axel then held by Saïx in The World That Never Was, Kairi escapes her cell thanks to Naminé and finds herself surrounded by Heartless. Riku, in Ansem's appearance, tosses her a Keyblade: Destiny's Embrace materialises in her hands and Kairi fights for the first time.\n\nShe holds her own against the Heartless beside Riku until Sora arrives, to whom she finally returns his lucky charm. Kairi does not become playable, but the scene makes her the trio's third wielder, which the game confirms by showing her with the Keyblade in hand until the end of the adventure. The game never explains where Riku got that Keyblade.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Pour compléter les sept Gardiens de la Lumière, Yen Sid confie Kairi et Lea à Merlin, qui les entraîne dans un lieu hors du temps. Kairi y apprend à manier Destin Florissant, écrivant ses progrès à Sora dans des lettres. Elle rejoint ensuite ses amis au Cimetière des Keyblades pour la bataille finale contre les treize ténèbres de Xehanort.\n\nElle y combat Xemnas et Saïx aux côtés de Sora et Lea, mais le Maître Xehanort la frappe pour pousser Sora à compléter la χ-blade. Sora la ramène ensuite au prix de son propre effacement. Dans Re Mind, la scène est rejouée : Kairi devient jouable avec Destin Florissant contre le Maître Xehanort, aux côtés de Sora, et ses attaques révèlent un style aérien et fleuri.",
          "To complete the seven Guardians of Light, Yen Sid entrusts Kairi and Lea to Merlin, who trains them in a place outside time. There Kairi learns to wield Destiny's Embrace, reporting her progress to Sora in letters. She then joins her friends at the Keyblade Graveyard for the final battle against Xehanort's thirteen darknesses.\n\nShe fights Xemnas and Saïx beside Sora and Lea, but Master Xehanort strikes her down to push Sora into completing the χ-blade. Sora later brings her back at the cost of his own fading. In Re Mind the scene is replayed: Kairi becomes playable with Destiny's Embrace against Master Xehanort alongside Sora, and her attacks reveal an aerial, flowery style.",
        ),
      },
      {
        game: "melody-of-memory",
        text: L(
          "Melody of Memory place Kairi au centre : endormie pour aider Ansem le Sage et les autres à retrouver la trace de Sora, elle parcourt en rêve les souvenirs de toute la saga. Au terme de ce voyage, elle affronte dans son cœur une manifestation du Maître Xehanort, et c'est avec Destin Florissant qu'elle remporte ce combat, aidée par Sora sous forme de souvenir.\n\nRéveillée, Kairi rapporte ce qu'elle a vu, puis demande à Aqua de la prendre comme élève à la Contrée du Départ pour devenir une vraie Porteuse. Destin Florissant est donc la Keyblade avec laquelle elle entame l'entraînement qui la conduit vers la suite de la saga.",
          "Melody of Memory puts Kairi at the centre: asleep to help Ansem the Wise and the others trace Sora, she wanders in dreams through the memories of the whole saga. At the end of that journey she faces a manifestation of Master Xehanort within her heart, and it is with Destiny's Embrace that she wins the fight, helped by Sora in the form of a memory.\n\nAwake again, Kairi reports what she saw, then asks Aqua to take her on as a student at the Land of Departure to become a true wielder. Destiny's Embrace is thus the Keyblade with which she begins the training leading her into the rest of the saga.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, フローラルウィッシュ (Floral Wish), diffère nettement des noms anglais et français.", "The Japanese name, フローラルウィッシュ (Floral Wish), differs markedly from the English and French names."),
      L("Kairi est jouable avec Destin Florissant dans Re Mind et dans Melody of Memory, près de quinze ans après avoir reçu la Keyblade dans Kingdom Hearts II.", "Kairi is playable with Destiny's Embrace in Re Mind and in Melody of Memory, almost fifteen years after receiving the Keyblade in Kingdom Hearts II."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Destiny's Embrace", url: "https://kingdomhearts.fandom.com/wiki/Destiny%27s_Embrace" },
    ],
  },

  // ─────────────────────────── Star Seeker ───────────────────────────
  "star-seeker": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Star Seeker est une Keyblade bleu nuit et or, dont la garde reproduit une lune et la lame un ciel étoilé ; ses dents sont formées d'étoiles et son porte-clés est une étoile filante. Elle évoque le chapeau d'apprenti sorcier de Mickey dans Fantasia, ce qui n'est pas un hasard : c'est la Keyblade que Mickey maniait quand il était l'élève de Yen Sid.\n\nElle symbolise l'apprentissage et la quête : celui qui « cherche les étoiles » est encore en formation. Mickey la manie dans Birth by Sleep, puis elle passe à Sora au début de Kingdom Hearts II, lorsque Yen Sid le prépare à son nouveau voyage. Elle est donc la Keyblade de deux apprentis devenus héros.",
          "Star Seeker is a midnight-blue and gold Keyblade whose guard reproduces a moon and whose blade a starry sky; its teeth are made of stars and its keychain is a shooting star. It evokes Mickey's sorcerer's apprentice hat from Fantasia, and that is no accident: it is the Keyblade Mickey wielded when he was Yen Sid's pupil.\n\nIt symbolises learning and questing: whoever “seeks the stars” is still in training. Mickey wields it in Birth by Sleep, then it passes to Sora at the start of Kingdom Hearts II, when Yen Sid prepares him for his new journey. It is thus the Keyblade of two apprentices turned heroes.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Dans Birth by Sleep, Mickey est l'apprenti de Yen Sid à la Tour Mystérieuse et manie Star Seeker. Emporté par un Fragment d'Étoile capricieux, il traverse les mondes et croise à plusieurs reprises la route de Terra, Ventus et Aqua : il combat avec Ven contre les Nescients au Jardin Radieux et croise Aqua à plusieurs reprises.\n\nAu Cimetière des Keyblades, il apparaît au moment critique pour relever Aqua puis lutter à ses côtés contre Vanitas et la χ-blade. Après la bataille, il ramène Aqua et Ven à la Tour Mystérieuse, puis rend Star Seeker à Yen Sid, jugeant avoir failli ; le magicien la lui rend aussitôt, le reconnaissant comme un vrai Maître de la Keyblade.",
          "In Birth by Sleep, Mickey is Yen Sid's apprentice at the Mysterious Tower and wields Star Seeker. Carried off by an unruly Star Shard, he crosses the worlds and repeatedly meets Terra, Ventus and Aqua: he fights the Unversed with Ven in Radiant Garden and crosses paths with Aqua several times.\n\nAt the Keyblade Graveyard he appears at the critical moment to help Aqua up, then fights at her side against Vanitas and the χ-blade. After the battle he brings Aqua and Ven back to the Mysterious Tower, then returns Star Seeker to Yen Sid, feeling he has failed; the wizard hands it straight back, recognising him as a true Keyblade Master.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Sora reçoit Star Seeker à la Tour Mystérieuse, en même temps que ses nouveaux vêtements offerts par les trois bonnes fées : c'est la première Keyblade autre que la Chaîne Royale du jeu, avec une force supérieure et la capacité Combo Aérien +. Le jeu ne dit pas alors qu'elle appartenait à Mickey ; ce lien n'est révélé que par Birth by Sleep.\n\nStar Seeker inaugure aussi le système des Formes : c'est avec elle que Sora découvre la Forme Bravoure, qui fait apparaître une seconde Keyblade dans sa main gauche. Elle reste utile dans les premiers mondes, Terre des Dragons et Château de la Bête, avant d'être dépassée par les porte-clés suivants.",
          "Sora receives Star Seeker at the Mysterious Tower, together with the new clothes given by the three good fairies: it is the game's first Keyblade other than the Kingdom Key, with higher strength and the Air Combo Plus ability. The game does not yet say it belonged to Mickey; that link is only revealed by Birth by Sleep.\n\nStar Seeker also inaugurates the Drive Form system: with it Sora discovers Valor Form, which puts a second Keyblade in his left hand. It stays useful in the first worlds, the Land of Dragons and Beast's Castle, before being outclassed by later keychains.",
        ),
      },
    ],
    trivia: [
      L("Le motif de lune et d'étoiles renvoie au chapeau de l'apprenti sorcier de Fantasia (1940), rôle fondateur de Mickey.", "The moon-and-stars motif refers to the sorcerer's apprentice hat from Fantasia (1940), a foundational role for Mickey."),
      L("Elle est la seule Keyblade dont le premier porteur montré à l'écran (Mickey) n'apparaît que dans un jeu sorti après celui où elle est introduite.", "It is the only Keyblade whose first on-screen wielder (Mickey) appears only in a game released after the one that introduced it."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Star Seeker", url: "https://kingdomhearts.fandom.com/wiki/Star_Seeker" },
    ],
  },

  // ─────────────────────────── Deux en Un ───────────────────────────
  "two-become-one": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Deux en Un est une Keyblade noire et blanche, symétrique, dont la silhouette combine Tendre Promesse et Souvenir Perdu : la lame évidée de l'une, l'aile stylisée de l'autre, réunies dans un dessin qui rappelle le manteau de l'Organisation XIII. Son nom, « les deux ne font qu'un » en japonais, décrit la nature de Roxas, moitié manquante de Sora.\n\nElle est introduite dans Kingdom Hearts II Final Mix comme récompense du duel contre Roxas, et sa capacité, Lumière et Ténèbres, fait basculer Sora au hasard en Forme Finale ou en Anti-Forme lorsqu'il tente de se transformer : le jeu traduit ainsi le double héritage de lumière et de ténèbres du personnage. Elle réapparaît dans 358/2 Days comme l'une des formes de la Keyblade de Roxas, obtenue avec le Gear Zéro.",
          "Two Become One is a symmetrical black-and-white Keyblade whose silhouette combines Oathkeeper and Oblivion: the hollowed blade of one, the stylised wing of the other, joined in a design that recalls Organization XIII's coat. Its name, “the two are one” in Japanese, describes the nature of Roxas, Sora's missing half.\n\nIt is introduced in Kingdom Hearts II Final Mix as the reward for duelling Roxas, and its ability, Light & Darkness, randomly switches Sora into Final Form or Anti Form when he tries to transform: the game thus expresses the character's double inheritance of light and darkness. It also appears in 358/2 Days as one of the forms of Roxas's Keyblade, obtained with the Zero Gear.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Dans 358/2 Days, la Keyblade de Roxas change de forme selon le Gear installé dans son panneau. Le Gear Zéro, l'un des plus puissants, lui donne l'apparence de Deux en Un ; si Roxas dispose de la capacité de manier deux Keyblades, ce même Gear fait apparaître Tendre Promesse et Souvenir Perdu.\n\nDeux en Un est donc, dans cet épisode, l'arme qui précède directement le double maniement final de Roxas, ce qui renforce son statut de « fusion » des deux Keyblades jumelles. Dans le mode Mission, Xion et Sora, qui utilisent les mêmes Gears que Roxas, peuvent eux aussi l'invoquer.",
          "In 358/2 Days, Roxas's Keyblade changes shape depending on the Gear installed in his panel. The Zero Gear, one of the strongest, gives it the look of Two Become One; if Roxas has the ability to dual-wield, that same Gear brings out Oathkeeper and Oblivion.\n\nTwo Become One is thus, in that game, the weapon directly preceding Roxas's final dual wielding, which reinforces its status as a “fusion” of the two twin Keyblades. In Mission Mode, Xion and Sora, who use the same Gears as Roxas, can summon it as well.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Kingdom Hearts II Final Mix ajoute un combat contre Roxas dans le Monde qui n'existe pas : au moment où Sora aperçoit son Simili sur le Chemin du Néant, il est entraîné dans le Palier de l'Éveil pour l'affronter. Roxas y manie Tendre Promesse et Souvenir Perdu, et le joueur peut lui arracher ses Keyblades grâce à une commande de réaction.\n\nUne fois Roxas vaincu, Sora reçoit Deux en Un, dotée d'une force solide et de la capacité Lumière et Ténèbres. Ce porte-clés est l'une des principales nouveautés de Final Mix avec Preuve du Vainqueur, et il reste exclusif à cette version, reprise dans les compilations HD.",
          "Kingdom Hearts II Final Mix adds a fight against Roxas in The World That Never Was: as Sora spots his Nobody on the Alley to Between, he is pulled into the Station of Awakening to face him. Roxas wields Oathkeeper and Oblivion there, and the player can snatch his Keyblades away with a Reaction Command.\n\nOnce Roxas is defeated, Sora receives Two Become One, with solid strength and the Light & Darkness ability. That keychain is one of the main additions of Final Mix together with Winner's Proof, and it remains exclusive to that version, carried over into the HD compilations.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, ふたりはひとり, signifie « deux personnes ne font qu'une ».", "The Japanese name, ふたりはひとり, means “two people are one”."),
      L("Sa capacité Lumière et Ténèbres est la seule du jeu à provoquer volontairement l'Anti-Forme.", "Its Light & Darkness ability is the only one in the game that deliberately triggers Anti Form."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Two Become One", url: "https://kingdomhearts.fandom.com/wiki/Two_Become_One" },
    ],
  },

  // ─────────────────────────── Gardien de la Terre ───────────────────────────
  "earthshaker": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Gardien de la Terre est la Keyblade de Terra, et elle lui ressemble : massive, aux tons bruns, ocre et bronze, avec une lame large terminée par des dents carrées qui évoquent un pic de montagne. Sa garde anguleuse donne l'impression d'une arme forgée dans la roche plutôt que dans le métal. Son porte-clés reprend l'emblème que Terra porte à la ceinture, symbole commun aux trois élèves d'Eraqus.\n\nElle privilégie la force brute au détriment de la magie, à l'image de son porteur, et son nom anglais, « celui qui ébranle la terre », ancre Terra dans l'élément terrestre, tout comme Ventus est lié au vent et Aqua à l'eau. Elle est la Keyblade de départ de Terra dans Birth by Sleep, avant de laisser place à sa forme aboutie, Confins de la Terre.",
          "Earthshaker is Terra's Keyblade, and it looks like him: massive, in brown, ochre and bronze tones, with a wide blade ending in square teeth that suggest a mountain peak. Its angular guard makes it look forged from rock rather than metal. Its keychain reproduces the emblem Terra wears on his belt, shared by all three of Eraqus's students.\n\nIt favours raw strength over magic, much like its wielder, and its name roots Terra in the element of earth, just as Ventus is tied to wind and Aqua to water. It is Terra's starting Keyblade in Birth by Sleep, before giving way to its finished form, Ends of the Earth.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Terra manie Gardien de la Terre lors de l'examen de Maîtrise qui ouvre Birth by Sleep, à la Contrée du Départ. Face à Aqua, il laisse échapper une bouffée de ténèbres qui lui coûte le titre de Maître. Lorsqu'Eraqus l'envoie ensuite arrêter les Nescients et retrouver le Maître Xehanort, c'est avec cette Keyblade qu'il traverse le Bois des Nains, le Château des Rêves, le Domaine Enchanté ou le Jardin Radieux.\n\nAu fil du voyage, Terra affronte des adversaires qui exploitent sa faiblesse : Maléfique, Hadès ou Braig, qu'il blesse au visage en cédant à ses ténèbres. Gardien de la Terre est aussi la Keyblade avec laquelle Terra adoube sans le savoir Riku sur les Îles du Destin, lui transmettant le pouvoir de la Keyblade. Le jeu permet de la remplacer par de nombreux porte-clés glanés dans les mondes, mais elle demeure celle de son histoire jusqu'au Cimetière des Keyblades.",
          "Terra wields Earthshaker during the Mark of Mastery exam that opens Birth by Sleep, at the Land of Departure. Facing Aqua, he lets slip a burst of darkness that costs him the title of Master. When Eraqus then sends him to stop the Unversed and find Master Xehanort, it is with this Keyblade that he crosses Dwarf Woodlands, the Castle of Dreams, Enchanted Dominion and Radiant Garden.\n\nOver the journey Terra faces opponents who exploit his weakness: Maleficent, Hades or Braig, whom he wounds in the face by giving in to his darkness. Earthshaker is also the Keyblade with which Terra unknowingly performs the inheritance ceremony on Riku at Destiny Islands, passing the power of the Keyblade to him. The game lets it be swapped for many keychains gathered across the worlds, but it remains the Keyblade of his story until the Keyblade Graveyard.",
        ),
      },
      {
        title: L("Héritage", "Legacy"),
        text: L(
          "Gardien de la Terre est la matrice de deux Keyblades essentielles. La première est Confins de la Terre, sa forme finale, que Terra obtient au Cimetière des Keyblades et qui devient l'arme de la Volonté Persistante. La seconde est indirecte : la Keyblade de Riku, car c'est le rite accompli avec Gardien de la Terre qui fait de lui un Porteur, puis conduit la Chaîne Royale à choisir Sora à sa place.\n\nDans Kingdom Hearts III, c'est Confins de la Terre et non Gardien de la Terre que l'on voit dans les mains de l'armure de Terra ; Gardien de la Terre reste ainsi une Keyblade propre à Birth by Sleep, où elle apparaît aussi dans les tenues et données de Terra dans l'Arène des Mirages.",
          "Earthshaker is the template for two essential Keyblades. The first is Ends of the Earth, its final form, which Terra obtains at the Keyblade Graveyard and which becomes the weapon of the Lingering Will. The second is indirect: Riku's Keyblade, because the ceremony performed with Earthshaker makes him a wielder, and later leads the Kingdom Key to choose Sora in his stead.\n\nIn Kingdom Hearts III it is Ends of the Earth, not Earthshaker, that appears in the hands of Terra's armour; Earthshaker thus remains a Keyblade specific to Birth by Sleep, where it also shows up on Terra's outfits and data in the Mirage Arena.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, アースシェイカー, est une transcription de l'anglais Earthshaker.", "The Japanese name, アースシェイカー, is a transliteration of the English Earthshaker."),
      L("Le trio de Birth by Sleep porte des noms latins d'éléments : Terra (terre), Ventus (vent), Aqua (eau), et leurs Keyblades reprennent ces thèmes.", "The Birth by Sleep trio bears Latin element names: Terra (earth), Ventus (wind), Aqua (water), and their Keyblades follow those themes."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Earthshaker", url: "https://kingdomhearts.fandom.com/wiki/Earthshaker" },
    ],
  },

  // ─────────────────────────── Confins de la Terre ───────────────────────────
  "ends-of-the-earth": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Confins de la Terre est la forme aboutie de Gardien de la Terre : même carrure massive, mais une lame plus longue, plus sombre, aux teintes brun-rouge et bronze, avec des dents qui se déploient comme une falaise. Son porte-clés reprend l'emblème de Terra. C'est la Keyblade de Terra telle qu'on la retrouve dans la mémoire des joueurs, car elle est celle de la Volonté Persistante.\n\nElle symbolise l'aboutissement du voyage de Terra, jusqu'aux « confins de la terre », mais aussi son échec : c'est avec elle qu'il perd son corps face au Maître Xehanort. Capable de se transformer en fouet, en canon ou en planeur dans les mains de l'armure de Terra, elle est aussi la première Keyblade à montrer ce que deviendront les transformations de Kingdom Hearts III.",
          "Ends of the Earth is the finished form of Earthshaker: the same massive build, but a longer, darker blade in reddish-brown and bronze tones, with teeth spreading out like a cliff. Its keychain carries Terra's emblem. It is Terra's Keyblade as players remember it, because it is the Lingering Will's.\n\nIt symbolises the culmination of Terra's journey, to “the ends of the earth”, but also his failure: it is with it that he loses his body to Master Xehanort. Able to turn into a whip, a cannon or a glider in the hands of Terra's armour, it is also the first Keyblade to foreshadow the formchanges of Kingdom Hearts III.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Terra obtient Confins de la Terre au Cimetière des Keyblades, au moment d'affronter le Maître Xehanort et Vanitas avec Aqua et Ventus. Le combat tourne au désastre : Ven est gelé, Aqua blessée, et Terra, cédant à sa colère, se laisse envahir par les ténèbres. Xehanort en profite pour transférer son cœur dans le corps de Terra, donnant naissance à Terra-Xehanort.\n\nMais la volonté de Terra survit dans son armure : celle-ci se relève, ramasse Confins de la Terre et affronte Terra-Xehanort dans un duel où le joueur contrôle l'armure. Victorieuse, elle reste ensuite agenouillée dans le désert, Keyblade plantée devant elle : c'est la Volonté Persistante. Dans l'Épisode Final, Aqua affronte Terra-Xehanort au Jardin Radieux, sans que la Keyblade de Terra ne lui revienne.",
          "Terra obtains Ends of the Earth at the Keyblade Graveyard, as he faces Master Xehanort and Vanitas with Aqua and Ventus. The battle turns into a disaster: Ven is frozen, Aqua wounded, and Terra, giving in to his anger, lets the darkness overtake him. Xehanort seizes the chance to transfer his heart into Terra's body, giving birth to Terra-Xehanort.\n\nBut Terra's will survives in his armour: it rises, picks up Ends of the Earth and faces Terra-Xehanort in a duel where the player controls the armour. Victorious, it then stays kneeling in the desert, Keyblade planted before it: this is the Lingering Will. In the Final Episode, Aqua faces Terra-Xehanort in Radiant Garden, without Terra's Keyblade ever coming back to her.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Kingdom Hearts II Final Mix introduit la Volonté Persistante comme boss secret, avant même que Birth by Sleep n'explique qui elle est. Après avoir terminé l'aventure, Sora découvre au Jardin Radieux un portail menant à une plaine désertique hérissée de Keyblades : le Cimetière des Keyblades. L'armure s'y relève et, prenant Sora pour Xehanort, l'attaque avec Confins de la Terre.\n\nCe combat est resté l'un des plus difficiles de la saga : la Keyblade se change en fouet à longue portée, en canon, en arc ou en planeur, et la Volonté Persistante enchaîne des techniques comme Ultima Cannon ou des sorts qui verrouillent les commandes de Sora. La victoire n'offre pas de Keyblade, mais un objet Preuve de collection, et le combat a été repris tel quel dans Kingdom Hearts HD 2.5 ReMIX.",
          "Kingdom Hearts II Final Mix introduces the Lingering Will as a secret boss, even before Birth by Sleep explains who it is. After finishing the adventure, Sora finds in Radiant Garden a portal leading to a desert plain bristling with Keyblades: the Keyblade Graveyard. The armour rises there and, mistaking Sora for Xehanort, attacks him with Ends of the Earth.\n\nThe fight has remained one of the hardest in the series: the Keyblade turns into a long-range whip, a cannon, a bow or a glider, and the Lingering Will chains techniques such as Ultima Cannon and spells that lock Sora's commands. Victory grants no Keyblade but a collectible Proof item, and the battle was carried over unchanged into Kingdom Hearts HD 2.5 ReMIX.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Cimetière des Keyblades, lorsque Terra-Xehanort vient de terrasser Ven et Aqua et menace Sora, l'armure de Terra surgit de terre, Confins de la Terre au poing, répondant à l'appel de Sora et aux liens de Terra. La Volonté Persistante affronte son propre corps possédé et le tient en échec assez longtemps pour permettre à Sora de continuer, avant que leur duel ne les emporte tous deux hors du champ de bataille.\n\nPlus tard, lorsque le cœur de Terra reprend le contrôle grâce à Sora et Ven, l'armure et la Keyblade lui reviennent enfin : Terra se bat une dernière fois contre Xehanort aux côtés d'Aqua et Ven, puis rentre avec eux à la Contrée du Départ. Re Mind ajoute un épisode où Terra redevient jouable avec Confins de la Terre.",
          "At the Keyblade Graveyard, as Terra-Xehanort has just struck down Ven and Aqua and threatens Sora, Terra's armour bursts from the ground with Ends of the Earth in hand, answering Sora's call and Terra's bonds. The Lingering Will faces its own possessed body and holds it off long enough for Sora to go on, before their duel carries them both away from the battlefield.\n\nLater, when Terra's heart regains control thanks to Sora and Ven, armour and Keyblade finally return to him: Terra fights Xehanort one last time beside Aqua and Ven, then goes home with them to the Land of Departure. Re Mind adds an episode in which Terra becomes playable once more with Ends of the Earth.",
        ),
      },
    ],
    trivia: [
      L("La Volonté Persistante de Kingdom Hearts II Final Mix est apparue avant Birth by Sleep : les joueurs ignoraient alors qu'il s'agissait de Terra.", "The Lingering Will of Kingdom Hearts II Final Mix appeared before Birth by Sleep: players did not know at the time that it was Terra."),
      L("Le nom japonais, エンズ・オブ・アース, transcrit l'anglais.", "The Japanese name, エンズ・オブ・アース, transliterates the English."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Ends of the Earth", url: "https://kingdomhearts.fandom.com/wiki/Ends_of_the_Earth" },
      { label: "Kingdom Hearts Wiki — Lingering Will", url: "https://kingdomhearts.fandom.com/wiki/Lingering_Will" },
    ],
  },

  // ─────────────────────────── Wayward Wind ───────────────────────────
  "wayward-wind": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Wayward Wind est la Keyblade de Ventus. Fine et légère, dans des tons bronze et vert, elle se termine par une lame en spirale qui évoque une rafale de vent, et son porte-clés reprend l'emblème de Ven, le même que celui de Terra et d'Aqua. Ven la tient à l'envers, lame vers l'arrière, ce qui définit son style de combat rapide et acrobatique, un maniement que Roxas retrouvera instinctivement des années plus tard.\n\nSon nom, « le vent vagabond », renvoie à l'élément de Ventus et à son caractère : un garçon curieux qui part sans permission derrière ses amis. Elle est présentée dans Birth by Sleep comme sa Keyblade de départ, mais l'histoire révèle qu'il la maniait déjà sous le Maître Xehanort, avant d'être confié à Eraqus.",
          "Wayward Wind is Ventus's Keyblade. Slim and light, in bronze and green tones, it ends in a spiralling blade evoking a gust of wind, and its keychain bears Ven's emblem, the same as Terra's and Aqua's. Ven holds it backhand, blade pointing behind him, which defines his fast, acrobatic fighting style, a grip Roxas will instinctively find again years later.\n\nIts name refers to Ventus's element and his character: a curious boy who leaves without permission to follow his friends. Birth by Sleep presents it as his starting Keyblade, but the story reveals he already wielded it under Master Xehanort, before being entrusted to Eraqus.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Ventus n'est pas autorisé à passer l'examen de Maîtrise, mais lorsque Vanitas lui laisse entendre que Terra va changer, il quitte la Contrée du Départ avec Wayward Wind pour le rejoindre. Son voyage le mène au Bois des Nains, au Château des Rêves, au Domaine Enchanté, à Disney Ville, au Jardin Radieux et au Pays Imaginaire, où il croise Mickey et affronte les Nescients.\n\nAu Cimetière des Keyblades, il apprend qu'il est la moitié de lumière d'un cœur brisé par Xehanort, et que sa fusion avec Vanitas doit forger la χ-blade. Il combat pourtant Vanitas, est possédé, et livre un ultime duel à l'intérieur de son propre cœur, Wayward Wind contre Void Gear, pour détruire la χ-blade. Son cœur, brisé, trouve refuge chez Sora, tandis qu'Aqua cache son corps endormi au Manoir Oblivion.",
          "Ventus is not allowed to take the Mark of Mastery exam, but when Vanitas hints that Terra is going to change, he leaves the Land of Departure with Wayward Wind to follow him. His journey takes him to Dwarf Woodlands, the Castle of Dreams, Enchanted Dominion, Disney Town, Radiant Garden and Neverland, where he meets Mickey and fights the Unversed.\n\nAt the Keyblade Graveyard he learns he is the light half of a heart Xehanort broke, and that his fusion with Vanitas is meant to forge the χ-blade. He fights Vanitas anyway, is possessed, and wages a final duel inside his own heart, Wayward Wind against Void Gear, to destroy the χ-blade. His shattered heart takes refuge in Sora, while Aqua hides his sleeping body in Castle Oblivion.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Pendant dix ans, le corps de Ventus dort dans la Salle de l'Éveil du Manoir Oblivion. Quand Sora ramène Aqua et que celle-ci rend au château sa forme de Contrée du Départ, Vanitas surgit pour réclamer son autre moitié ; Sora, où le cœur de Ven a mûri, est alors touché par le Pouvoir de l'Éveil et libère ce cœur. Ventus se réveille, Wayward Wind en main, et repousse Vanitas.\n\nAu Cimetière des Keyblades, il retrouve son ancien style, combattant à revers aux côtés d'Aqua contre Vanitas et Terra-Xehanort. Il aide Sora à ramener le cœur de Terra et affronte enfin Vanitas, qui accepte sa disparition. Dans l'épilogue, Ven rentre à la Contrée du Départ avec Terra et Aqua ; Re Mind le rend brièvement jouable, permettant de retrouver Wayward Wind manette en main.",
          "For ten years, Ventus's body sleeps in the Chamber of Waking in Castle Oblivion. When Sora brings Aqua back and she restores the castle to its form as the Land of Departure, Vanitas appears to claim his other half; Sora, in whom Ven's heart has matured, is then touched by the power of waking and frees that heart. Ventus wakes with Wayward Wind in hand and drives Vanitas away.\n\nAt the Keyblade Graveyard he finds his old style again, fighting backhand beside Aqua against Vanitas and Terra-Xehanort. He helps Sora bring back Terra's heart and finally faces Vanitas, who accepts his end. In the epilogue Ven returns to the Land of Departure with Terra and Aqua; Re Mind makes him briefly playable, letting players pick up Wayward Wind themselves.",
        ),
      },
    ],
    trivia: [
      L("Dans Kingdom Hearts Union χ, Ventus, alors membre des Dandelions, manie une Keyblade différente, Missing Ache.", "In Kingdom Hearts Union χ, Ventus, then a member of the Dandelions, wields a different Keyblade, Missing Ache."),
      L("Le maniement à revers de Ventus est repris par Roxas, dont le cœur est lié au sien, dans 358/2 Days et Kingdom Hearts II.", "Ventus's backhand grip is reused by Roxas, whose heart is tied to his, in 358/2 Days and Kingdom Hearts II."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Wayward Wind", url: "https://kingdomhearts.fandom.com/wiki/Wayward_Wind" },
    ],
  },

  // ─────────────────────────── Pluie Enchantée ───────────────────────────
  "rainfell": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Pluie Enchantée est la Keyblade de départ d'Aqua. Fine, bleue et argentée, elle se termine par des dents effilées qui rappellent des gouttes d'eau ou des pétales, et son porte-clés reprend l'emblème commun aux trois élèves d'Eraqus. Sa garde arrondie et ses lignes fluides contrastent avec la lourdeur de Gardien de la Terre : elle est faite pour la vitesse, les pirouettes et la magie.\n\nSon nom original, Rainfell, « la pluie tombée », s'accorde à l'élément d'Aqua, l'eau ; le nom français, Pluie Enchantée, ajoute la magie qui caractérise son porteur. Elle est la Keyblade avec laquelle Aqua devient Maître, la seule des trois élèves à réussir l'examen, et elle laisse place plus tard à Tempête, sa forme aboutie.",
          "Rainfell is Aqua's starting Keyblade. Slim, blue and silver, it ends in tapered teeth that recall raindrops or petals, and its keychain carries the emblem shared by Eraqus's three students. Its rounded guard and flowing lines contrast with the heaviness of Earthshaker: it is built for speed, pirouettes and magic.\n\nIts original name, Rainfell, matches Aqua's element, water; the French name, Pluie Enchantée (“enchanted rain”), adds the magic that defines its wielder. It is the Keyblade with which Aqua becomes a Master, the only one of the three students to pass the exam, and it later gives way to Stormfall, its finished form.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Aqua manie Pluie Enchantée dès l'examen de Maîtrise, qu'elle réussit là où Terra échoue. Eraqus la charge alors d'une double mission : suivre Terra pour surveiller ses ténèbres, et ramener Ventus. Son voyage la conduit dans les mêmes mondes que ses amis, où elle arrive souvent après eux et répare ce qu'ils ont laissé derrière : elle affronte Maléfique au Domaine Enchanté, aide Cendrillon, et protège la petite Kairi des Nescients au Jardin Radieux.\n\nCette dernière scène est décisive : en touchant la Keyblade d'Aqua, Kairi reçoit sans le savoir le pouvoir de devenir Porteuse. Aqua lance ensuite un sort de protection sur la fillette, puis, sur les Îles du Destin, choisit de ne pas faire de Sora un Porteur, estimant qu'un seul suffit dans une même famille d'amis. Pluie Enchantée reste son arme de l'histoire jusqu'au Cimetière des Keyblades.",
          "Aqua wields Rainfell from the Mark of Mastery exam onward, which she passes where Terra fails. Eraqus then gives her a double mission: follow Terra to watch over his darkness, and bring Ventus back. Her journey takes her through the same worlds as her friends, where she often arrives after them and mends what they left behind: she confronts Maleficent in Enchanted Dominion, helps Cinderella, and shields little Kairi from the Unversed in Radiant Garden.\n\nThat last scene is decisive: by touching Aqua's Keyblade, Kairi unknowingly receives the power to become a wielder. Aqua then casts a protective spell on the girl and, at Destiny Islands, chooses not to make Sora a wielder, judging that one in a group of friends is enough. Rainfell remains her story weapon until the Keyblade Graveyard.",
        ),
      },
      {
        title: L("Héritage", "Legacy"),
        text: L(
          "Pluie Enchantée disparaît du récit après Birth by Sleep. Au Cimetière des Keyblades, Aqua obtient Tempête, sa forme aboutie ; puis, dans l'Épisode Final, elle prend la Keyblade de son maître défunt, Maître Gardien, pour transformer la Contrée du Départ en Manoir Oblivion et affronter Terra-Xehanort. C'est Maître Gardien qu'elle conserve dans le Domaine des Ténèbres, dans 0.2 et dans Kingdom Hearts III.\n\nLa Keyblade bleue d'Aqua reste néanmoins essentielle à la saga : c'est elle que Kairi a touchée au Jardin Radieux, et donc l'origine indirecte de Destin Florissant. Pluie Enchantée est ainsi la Keyblade par laquelle la lignée d'Eraqus atteint la nouvelle génération de Porteurs.",
          "Rainfell disappears from the story after Birth by Sleep. At the Keyblade Graveyard Aqua obtains Stormfall, its finished form; then, in the Final Episode, she takes up her late master's Keyblade, Master's Defender, to turn the Land of Departure into Castle Oblivion and face Terra-Xehanort. It is Master's Defender she keeps in the Realm of Darkness, in 0.2 and in Kingdom Hearts III.\n\nAqua's blue Keyblade nevertheless remains essential to the saga: it is the one Kairi touched in Radiant Garden, and therefore the indirect origin of Destiny's Embrace. Rainfell is thus the Keyblade through which Eraqus's lineage reaches the new generation of wielders.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, レインフォール, transcrit l'anglais Rainfall.", "The Japanese name, レインフォール, transliterates the English Rainfall."),
      L("Le rite d'héritage accidentel de Kairi avec cette Keyblade est confirmé par Nomura et rappelé dans Kingdom Hearts III.", "Kairi's accidental inheritance ceremony with this Keyblade is confirmed by Nomura and recalled in Kingdom Hearts III."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Rainfell", url: "https://kingdomhearts.fandom.com/wiki/Rainfell" },
    ],
  },

  // ─────────────────────────── Tempête ───────────────────────────
  "stormfall": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Tempête est la forme aboutie de Pluie Enchantée, la Keyblade d'Aqua. Elle conserve sa finesse, mais ses couleurs s'assombrissent : du bleu profond, du noir et de l'argent, avec une lame qui s'élargit en une aile stylisée et des dents plus agressives. Son porte-clés reprend l'emblème des élèves d'Eraqus. Elle traduit l'endurcissement d'Aqua, passée de l'élève appliquée à la Maître qui doit sauver ses deux amis.\n\nSon nom original, Stormfall, répond à Rainfell : la pluie est devenue tempête. Tempête est l'arme d'Aqua lors de la bataille du Cimetière des Keyblades, le sommet de Birth by Sleep, mais elle ne la suit pas dans le Domaine des Ténèbres, où Aqua manie Maître Gardien.",
          "Stormfall is the finished form of Rainfell, Aqua's Keyblade. It keeps its slimness, but its colours darken: deep blue, black and silver, with a blade widening into a stylised wing and more aggressive teeth. Its keychain carries the emblem of Eraqus's students. It expresses Aqua's hardening, from the diligent student to the Master who must save her two friends.\n\nIts name answers Rainfell: rain has become storm. Stormfall is Aqua's weapon during the battle of the Keyblade Graveyard, the climax of Birth by Sleep, but it does not follow her into the Realm of Darkness, where Aqua wields Master's Defender.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Aqua obtient Tempête au Cimetière des Keyblades, lorsqu'elle rejoint Terra et Ventus pour affronter le Maître Xehanort. La bataille est le sommet du jeu : Aqua combat Vanitas et Braig, tente d'empêcher Terra de céder aux ténèbres, puis voit Ven gelé par Xehanort. Quand Vanitas fusionne avec Ventus et forge une χ-blade incomplète, Aqua l'affronte avec l'aide de Mickey et parvient, grâce à la résistance de Ven de l'intérieur, à la faire voler en éclats.\n\nL'explosion disperse les trois amis. Mickey ramène Aqua et Ven, désormais vide, à la Tour Mystérieuse. Dans l'Épisode Final, Aqua abandonne Tempête pour la Keyblade d'Eraqus, Maître Gardien, avec laquelle elle scelle la Contrée du Départ et part affronter Terra-Xehanort au Jardin Radieux, avant de se sacrifier dans le Domaine des Ténèbres pour sauver le corps de Terra.",
          "Aqua obtains Stormfall at the Keyblade Graveyard when she joins Terra and Ventus to face Master Xehanort. The battle is the game's climax: Aqua fights Vanitas and Braig, tries to stop Terra from yielding to darkness, then sees Ven frozen by Xehanort. When Vanitas merges with Ventus and forges an incomplete χ-blade, Aqua faces him with Mickey's help and, thanks to Ven's resistance from within, manages to shatter it.\n\nThe explosion scatters the three friends. Mickey brings Aqua and a now-empty Ven back to the Mysterious Tower. In the Final Episode, Aqua sets Stormfall aside for Eraqus's Keyblade, Master's Defender, with which she seals the Land of Departure and goes to face Terra-Xehanort in Radiant Garden, before sacrificing herself in the Realm of Darkness to save Terra's body.",
        ),
      },
      {
        title: L("Héritage", "Legacy"),
        text: L(
          "Tempête ne réapparaît pas dans les épisodes suivants : 0.2 et Kingdom Hearts III montrent Aqua avec Maître Gardien, y compris lorsque, corrompue par les ténèbres, elle affronte Sora sur la plage sombre. Tempête reste donc la Keyblade d'un seul jeu, mais d'un moment fondateur, celui où la χ-blade est détruite et où le sort des trois amis se scelle pour dix ans.\n\nEn jeu, elle offre un équilibre entre force et magie supérieur à Pluie Enchantée et convient particulièrement à la magie d'Aqua, que Birth by Sleep favorise avec ses sorts avancés et ses styles de commande. Kingdom Hearts III Re Mind, qui rend Aqua jouable, la montre avec Maître Gardien.",
          "Stormfall does not return in later games: 0.2 and Kingdom Hearts III show Aqua with Master's Defender, including when, corrupted by darkness, she faces Sora on the dark shore. Stormfall thus remains a one-game Keyblade, but the Keyblade of a founding moment, when the χ-blade is destroyed and the fate of the three friends is sealed for ten years.\n\nIn gameplay it offers a better balance of strength and magic than Rainfell and suits Aqua's magic especially well, which Birth by Sleep favours through advanced spells and command styles. Kingdom Hearts III Re Mind, which makes Aqua playable, shows her with Master's Defender.",
        ),
      },
    ],
    trivia: [
      L("Rainfell, Stormfall : les deux noms anglais forment un couple, tout comme Earthshaker et Ends of the Earth, ou Wayward Wind et Lost Memory pour Ven.", "Rainfell and Stormfall form a pair, just like Earthshaker and Ends of the Earth, or Wayward Wind and Lost Memory for Ven."),
      L("Le nom japonais, ストームフォール, transcrit l'anglais.", "The Japanese name, ストームフォール, transliterates the English."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Stormfall", url: "https://kingdomhearts.fandom.com/wiki/Stormfall" },
    ],
  },

  // ─────────────────────────── Maître Gardien ───────────────────────────
  "masters-defender": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Maître Gardien est la Keyblade du Maître Eraqus, gardien de la Contrée du Départ. Sobre et droite, elle mêle le gris, l'or et le bleu, avec une lame simple terminée par des dents en forme de cœur stylisé et une garde arrondie ; son porte-clés est l'emblème d'Eraqus, le même symbole que portent Terra, Ventus et Aqua. Son nom japonais, Master Keeper, dit sa fonction : elle est la clé qui garde le monde d'Eraqus.\n\nElle a en effet un pouvoir singulier : utilisée sur la serrure de la salle du trône, elle transforme la Contrée du Départ en Manoir Oblivion, un labyrinthe où seul celui qui a scellé le monde peut retrouver son chemin. Transmise à Aqua, elle devient sa Keyblade dans tous les épisodes postérieurs à Birth by Sleep.",
          "Master's Defender is the Keyblade of Master Eraqus, keeper of the Land of Departure. Sober and straight, it blends grey, gold and blue, with a simple blade ending in stylised heart-shaped teeth and a rounded guard; its keychain is Eraqus's emblem, the same symbol Terra, Ventus and Aqua wear. Its Japanese name, Master Keeper, states its function: it is the key that guards Eraqus's world.\n\nIt does hold a singular power: used on the keyhole in the throne room, it turns the Land of Departure into Castle Oblivion, a maze where only the one who sealed the world can find their way. Passed on to Aqua, it becomes her Keyblade in every game after Birth by Sleep.",
        ),
      },
      {
        game: "dark-road",
        text: L(
          "Dark Road remonte à la jeunesse d'Eraqus, élève à Scala ad Caelum aux côtés de Xehanort, sous l'enseignement du Maître Odin. Eraqus y est un jeune Porteur brillant, issu d'une lignée prestigieuse de Maîtres, et sa Keyblade est déjà Maître Gardien, signe de cet héritage familial.\n\nLe jeu montre les parties d'échecs entre Eraqus et Xehanort, plus tard rejouées dans Kingdom Hearts III, et les épreuves qui opposent les élèves aux Sans-cœur dans les mondes. Il éclaire ainsi la relation entre les deux amis, l'un attaché à la lumière et à la tradition, l'autre fasciné par les ténèbres, une opposition qui aboutira au duel de Birth by Sleep, Maître Gardien contre la Keyblade de Xehanort.",
          "Dark Road goes back to Eraqus's youth as a student in Scala ad Caelum alongside Xehanort, under Master Odin's teaching. Eraqus is a brilliant young wielder from a prestigious line of Masters, and his Keyblade is already Master's Defender, a sign of that family inheritance.\n\nThe game shows the chess games between Eraqus and Xehanort, later replayed in Kingdom Hearts III, and the trials pitting the students against the Heartless across the worlds. It thus sheds light on the relationship between the two friends, one devoted to light and tradition, the other fascinated by darkness, an opposition that leads to the Birth by Sleep duel, Master's Defender against Xehanort's Keyblade.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Eraqus manie Maître Gardien lorsqu'il tente d'éliminer Ventus, persuadé que la destruction du garçon empêchera la χ-blade de renaître. Terra s'interpose et affronte son maître ; blessé, Eraqus baisse sa garde et est frappé dans le dos par le Maître Xehanort, qui lui prend la vie. Sa Keyblade reste à la Contrée du Départ.\n\nDans l'Épisode Final, Aqua rentre au château dévasté avec le corps endormi de Ven. Se souvenant des instructions d'Eraqus, elle prend Maître Gardien, l'enfonce dans la serrure de la salle du trône et transforme la Contrée du Départ en Manoir Oblivion, pour cacher Ven aux yeux de tous. Elle part ensuite au Jardin Radieux affronter Terra-Xehanort avec cette même Keyblade, puis la garde dans le Domaine des Ténèbres, où elle sombre pour sauver Terra.",
          "Eraqus wields Master's Defender when he tries to eliminate Ventus, convinced that destroying the boy will prevent the χ-blade from returning. Terra steps in and fights his master; wounded, Eraqus lowers his guard and is struck in the back by Master Xehanort, who takes his life. His Keyblade stays at the Land of Departure.\n\nIn the Final Episode, Aqua returns to the ruined castle with Ven's sleeping body. Remembering Eraqus's instructions, she takes Master's Defender, drives it into the throne-room keyhole and turns the Land of Departure into Castle Oblivion to hide Ven from everyone. She then goes to Radiant Garden to face Terra-Xehanort with that same Keyblade, and keeps it in the Realm of Darkness, where she sinks to save Terra.",
        ),
      },
      {
        game: "0-2-birth-by-sleep-a-fragmentary-passage",
        text: L(
          "0.2 suit Aqua dans le Domaine des Ténèbres, Maître Gardien à la main, pendant les événements du premier Kingdom Hearts. Elle y traverse les ruines déformées des mondes qu'elle a visités, le Château des Rêves, le Bois des Nains, le Domaine Enchanté, et affronte les Sans-cœur ainsi que son propre reflet, une ombre d'elle-même née de ses doutes.\n\nElle finit par rencontrer Mickey, et tous deux gagnent la porte de Kingdom Hearts au moment où Sora la ferme. Aqua se sacrifie une seconde fois pour retenir une Tour Démoniaque et laisser Mickey rester près de la porte. Sur le plan du jeu, Maître Gardien est la seule Keyblade d'Aqua dans cet épisode ; elle y dispose de nouvelles commandes et de styles de combat qui préfigurent Kingdom Hearts III.",
          "0.2 follows Aqua through the Realm of Darkness, Master's Defender in hand, during the events of the first Kingdom Hearts. She crosses the warped ruins of the worlds she visited, the Castle of Dreams, Dwarf Woodlands, Enchanted Dominion, and fights the Heartless as well as her own reflection, a shadow of herself born from her doubts.\n\nShe eventually meets Mickey, and the two reach the door to Kingdom Hearts as Sora closes it. Aqua sacrifices herself a second time to hold back a Demon Tower and let Mickey stay by the door. In gameplay, Master's Defender is Aqua's only Keyblade in that episode; she has new commands and battle styles there that foreshadow Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Après dix ans dans le Domaine des Ténèbres, Aqua a cédé : lorsque Sora et Riku la retrouvent sur la plage sombre, elle est devenue Anti-Aqua et brandit Maître Gardien contre eux, dans un combat où la Keyblade de son maître sert les ténèbres. Vaincue, elle est ramenée à la lumière et conduite au Manoir Oblivion, où elle utilise Maître Gardien sur la serrure pour rendre au château sa forme de Contrée du Départ.\n\nAu Cimetière des Keyblades, elle combat avec cette Keyblade aux côtés de Ven contre Vanitas et Terra-Xehanort, avant d'être engloutie dans les ténèbres puis sauvée par Sora. Re Mind la rend jouable, toujours avec Maître Gardien. Dans Melody of Memory, elle accepte enfin Kairi comme élève, transmettant à son tour l'enseignement d'Eraqus.",
          "After ten years in the Realm of Darkness, Aqua has given in: when Sora and Riku find her on the dark shore, she has become Anti-Aqua and raises Master's Defender against them, in a fight where her master's Keyblade serves the darkness. Defeated, she is brought back to the light and taken to Castle Oblivion, where she uses Master's Defender on the keyhole to restore the castle to its form as the Land of Departure.\n\nAt the Keyblade Graveyard she fights with that Keyblade beside Ven against Vanitas and Terra-Xehanort, before being swallowed by darkness and then saved by Sora. Re Mind makes her playable, still with Master's Defender. In Melody of Memory she finally accepts Kairi as her student, passing on Eraqus's teaching in turn.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, マスターキーパー (Master Keeper), a été traduit par Master's Defender en anglais et Maître Gardien en français.", "The Japanese name, マスターキーパー (Master Keeper), became Master's Defender in English and Maître Gardien in French."),
      L("Dans Birth by Sleep, Maître Gardien devient équipable par Aqua dès le début de l'Épisode Final, avec de bonnes statistiques équilibrées.", "In Birth by Sleep, Master's Defender becomes equippable by Aqua from the start of the Final Episode, with good balanced stats."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Master's Defender", url: "https://kingdomhearts.fandom.com/wiki/Master%27s_Defender" },
    ],
  },

  // ─────────────────────────── Void Gear ───────────────────────────
  "void-gear": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Void Gear est la Keyblade de Vanitas, la moitié de ténèbres arrachée au cœur de Ventus par le Maître Xehanort. Rouge, noire et grise, hérissée d'engrenages et de dents crochues, elle ressemble davantage à une machine de guerre qu'à une clé. Un œil rouge orne sa garde, rappel de l'influence de Xehanort, et son porte-clés est un engrenage.\n\nSon nom, « l'engrenage du vide », dit le néant qui habite Vanitas, être né de la négativité pure et sans autre but que sa réunion avec Ventus. Elle est l'antithèse exacte de Wayward Wind, légère et aérienne, et leur affrontement dans le cœur de Ven est l'un des moments clés de Birth by Sleep. Son dessin est retouché dans Kingdom Hearts III, où elle gagne en netteté sans changer de nature.",
          "Void Gear is the Keyblade of Vanitas, the half of darkness torn from Ventus's heart by Master Xehanort. Red, black and grey, bristling with gears and hooked teeth, it looks more like a war machine than a key. A red eye adorns its guard, a reminder of Xehanort's influence, and its keychain is a gear.\n\nIts name speaks of the void inside Vanitas, a being born of pure negativity with no purpose other than reuniting with Ventus. It is the exact antithesis of the light, airy Wayward Wind, and their clash inside Ven's heart is one of the key moments of Birth by Sleep. Its design is refined in Kingdom Hearts III, where it gains sharpness without changing in nature.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Vanitas manie Void Gear dès sa première apparition, lorsqu'il provoque Ventus à la Contrée du Départ pour le pousser à suivre Terra. Il poursuit Ven de monde en monde, lâche les Nescients derrière lui, affronte Aqua en chemin, puis attend les trois amis au Cimetière des Keyblades. Là, il vainc Ventus, fusionne avec lui et forge une χ-blade incomplète, en manie la lame face à Aqua et Mickey.\n\nÀ l'intérieur du cœur de Ven, le duel final oppose Wayward Wind à Void Gear ; Ven l'emporte au prix de son propre cœur, et la χ-blade éclate. Void Gear est aussi la Keyblade obtenue par le joueur en battant le Vestige de Vanitas, boss secret qui attend au Cimetière des Keyblades après la fin de l'histoire : une arme puissante pour Terra, Ven ou Aqua, aux couleurs de leur ennemi.",
          "Vanitas wields Void Gear from his very first appearance, when he goads Ventus at the Land of Departure into following Terra. He pursues Ven from world to world, leaves the Unversed in his wake, fights Aqua along the way, then waits for the three friends at the Keyblade Graveyard. There he defeats Ventus, merges with him and forges an incomplete χ-blade, which he wields against Aqua and Mickey.\n\nInside Ven's heart, the final duel pits Wayward Wind against Void Gear; Ven wins at the cost of his own heart, and the χ-blade shatters. Void Gear is also the Keyblade the player earns by defeating the Vanitas Remnant, a secret boss waiting at the Keyblade Graveyard after the end of the story: a powerful weapon for Terra, Ven or Aqua, in the colours of their enemy.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Vanitas est ramené par le Maître Xehanort pour compléter ses treize ténèbres. Il apparaît à Monstropolis, où il veut arracher le cœur de Ven à Sora avec Void Gear, puis au Manoir Oblivion, où le réveil de Ventus le repousse. Au Cimetière des Keyblades, il affronte Sora, Ven et Aqua ; Ventus lui propose de coexister, mais Vanitas, fidèle à sa nature, préfère disparaître et se dissout après sa défaite.\n\nSon Void Gear redessinée figure dans les combats de données de Re Mind, où Vanitas est l'un des treize adversaires du Jardin Radieux. Ses attaques, enchaînements de coups tourbillonnants et projectiles de ténèbres, en font l'un des duels les plus nerveux de l'épisode Limitcut.",
          "Vanitas is brought back by Master Xehanort to complete his thirteen darknesses. He appears in Monstropolis, where he tries to tear Ven's heart out of Sora with Void Gear, then at Castle Oblivion, where Ventus's awakening drives him off. At the Keyblade Graveyard he faces Sora, Ven and Aqua; Ventus offers him coexistence, but Vanitas, true to his nature, prefers to vanish and dissolves after his defeat.\n\nHis redesigned Void Gear appears in the Re Mind data battles, where Vanitas is one of the thirteen opponents in Radiant Garden. His attacks, whirling combo strings and projectiles of darkness, make him one of the most frantic duels of the Limitcut episode.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, ヴォイドギア, transcrit l'anglais Void Gear.", "The Japanese name, ヴォイドギア, transliterates the English Void Gear."),
      L("Le Vestige de Vanitas, boss secret de Birth by Sleep, est un Nescient né des sentiments résiduels de Vanitas et manie une Void Gear identique.", "The Vanitas Remnant, secret boss of Birth by Sleep, is an Unversed born from Vanitas's lingering feelings and wields an identical Void Gear."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Void Gear", url: "https://kingdomhearts.fandom.com/wiki/Void_Gear" },
    ],
  },

  // ─────────────────────────── Sans-Nom ───────────────────────────
  "no-name": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Sans-Nom est la plus ancienne Keyblade connue de la saga. Noire et grise, aux formes anguleuses, elle porte sur sa garde un œil bleu, l'Œil Scrutateur, à travers lequel le Maître des Maîtres observe le futur. Son porte-clés est un petit emblème noir et ses dents évoquent une bête cornue, ce qui lui a valu son surnom de « Keyblade à tête de chèvre » chez les joueurs.\n\nElle a été forgée par le Maître des Maîtres à l'Âge des Fées et confiée à Luxu, son sixième apprenti, avec pour mission de la transmettre de porteur en porteur et de tout regarder à travers elle, jusqu'à ce que le Maître revienne. C'est pourquoi elle porte l'œil, et pourquoi elle n'a pas de nom : elle n'appartient à personne. Elle finit dans les mains du Maître Xehanort, dernier maillon de cette chaîne.",
          "No Name is the oldest known Keyblade in the series. Black and grey, with angular shapes, it bears on its guard a blue eye, the Gazing Eye, through which the Master of Masters watches the future. Its keychain is a small black emblem and its teeth suggest a horned beast, which earned it the nickname “goat Keyblade” among players.\n\nIt was forged by the Master of Masters in the Age of Fairy Tales and entrusted to Luxu, his sixth apprentice, with the mission of passing it from wielder to wielder and watching everything through it until the Master returns. That is why it carries the eye, and why it has no name: it belongs to no one. It ends up in the hands of Master Xehanort, the last link in that chain.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Dans le film Back Cover de Kingdom Hearts χ, le Maître des Maîtres confie à chacun de ses apprentis un rôle avant de disparaître. À Luxu, il remet sa propre Keyblade, dotée de l'Œil Scrutateur, et une boîte noire mystérieuse. Sa tâche est d'observer les événements de loin, sans intervenir, et de transmettre la Keyblade à travers les générations afin que le Maître puisse écrire le Livre des Prophéties à partir de ce que l'œil aura vu.\n\nLuxu obéit : il quitte Daybreak Town, observe la Guerre des Keyblades depuis une colline, puis passe de corps en corps au fil des siècles pour rester fidèle à sa mission. Chaque Porteur ayant tenu Sans-Nom a donc, sans le savoir, servi d'yeux au Maître des Maîtres.",
          "In the Back Cover film of Kingdom Hearts χ, the Master of Masters gives each of his apprentices a role before vanishing. To Luxu he hands his own Keyblade, fitted with the Gazing Eye, and a mysterious black box. His task is to watch events from afar without intervening, and to pass the Keyblade down through the generations so that the Master can write the Book of Prophecies from what the eye has seen.\n\nLuxu obeys: he leaves Daybreak Town, watches the Keyblade War from a hill, then moves from body to body over the centuries to stay true to his mission. Every wielder who has held No Name has therefore unknowingly served as the eyes of the Master of Masters.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Le Maître Xehanort manie Sans-Nom tout au long de Birth by Sleep. C'est avec elle qu'il brise le cœur de Ventus pour créer Vanitas, qu'il frappe Eraqus dans le dos et qu'il gèle Ven au Cimetière des Keyblades. Dans le combat final contre Terra, il l'utilise pour libérer son propre cœur et s'emparer du corps de son adversaire, un acte qui donne naissance à Terra-Xehanort.\n\nLe jeu offre aussi une version jouable de Sans-Nom : elle récompense la victoire contre la Silhouette Mystérieuse, boss secret du Cimetière des Keyblades qui se révélera être le Jeune Xehanort. Ses statistiques élevées en font l'une des meilleures Keyblades pour les trois héros, aux côtés de l'Arme Ultime et de Void Gear.",
          "Master Xehanort wields No Name throughout Birth by Sleep. With it he breaks Ventus's heart to create Vanitas, strikes Eraqus in the back and freezes Ven at the Keyblade Graveyard. In the final fight against Terra he uses it to release his own heart and seize his opponent's body, an act that gives birth to Terra-Xehanort.\n\nThe game also offers a playable version of No Name: it rewards victory over the Mysterious Figure, the secret boss of the Keyblade Graveyard who will turn out to be Young Xehanort. Its high stats make it one of the best Keyblades for all three heroes, alongside the Ultima Weapon and Void Gear.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Sans-Nom accompagne le Maître Xehanort jusqu'au bout de son plan. Au Cimetière des Keyblades, il la manie pour frapper Kairi et forcer Sora à compléter la χ-blade, puis à Scala ad Caelum, où il affronte Sora, Donald et Dingo dans un combat final rythmé par ses attaques de temps et de lumière. Vaincu, il remet la χ-blade à Sora et disparaît avec Eraqus.\n\nSans-Nom tombe alors au sol. Xigbar, laissé pour mort, réapparaît, la ramasse et révèle qu'il est Luxu : la Keyblade est revenue à son premier porteur, sa mission accomplie. Il convoque ensuite les Prophètes autour de la boîte noire. Dans Re Mind, Sans-Nom est encore l'arme du Maître Xehanort dans son combat de données, le plus exigeant des treize.",
          "No Name accompanies Master Xehanort to the end of his plan. At the Keyblade Graveyard he wields it to strike Kairi and force Sora to complete the χ-blade, then in Scala ad Caelum, where he faces Sora, Donald and Goofy in a final battle punctuated by his attacks of time and light. Defeated, he hands the χ-blade to Sora and vanishes with Eraqus.\n\nNo Name then falls to the ground. Xigbar, left for dead, reappears, picks it up and reveals that he is Luxu: the Keyblade has returned to its first wielder, its mission complete. He then summons the Foretellers around the black box. In Re Mind, No Name is still Master Xehanort's weapon in his data battle, the most demanding of the thirteen.",
        ),
      },
    ],
    trivia: [
      L("Sans-Nom est la seule Keyblade présente dans presque toutes les époques de la saga, de l'Âge des Fées à Kingdom Hearts III.", "No Name is the only Keyblade present in almost every era of the saga, from the Age of Fairy Tales to Kingdom Hearts III."),
      L("Son œil bleu est le même que celui des Sans-cœur emblèmes, des Nescients et des Avale-Rêves, tous liés à l'observation du Maître des Maîtres.", "Its blue eye is the same as on the Emblem Heartless, the Unversed and the Dream Eaters, all linked to the Master of Masters' watching."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — No Name", url: "https://kingdomhearts.fandom.com/wiki/No_Name" },
    ],
  },

  // ─────────────────────────── χ-blade ───────────────────────────
  "chi-blade": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "La χ-blade est la Keyblade originelle, celle dont toutes les autres ne sont que des imitations. Elle ressemble à deux Chaînes Royales croisées, dont les lames forment le χ grec, avec un cœur au centre de la garde et une lame blanche et dorée. Contrairement aux Keyblades ordinaires, elle n'est pas forgée à partir d'un cœur mais existe en tant que gardienne de Kingdom Hearts, le cœur de tous les mondes.\n\nSa lettre se prononce « kye », comme le mot-clé de la saga. Elle ne peut être reconstituée que par la rencontre de sept cœurs de pure lumière et de treize cœurs de ténèbres, ou par la fusion d'un cœur de lumière et de son double de ténèbres. Chaque tentative pour la faire renaître déclenche une guerre, et c'est autour d'elle que se noue tout le plan du Maître Xehanort.",
          "The χ-blade is the original Keyblade, of which all others are mere imitations. It looks like two crossed Kingdom Keys whose blades form the Greek χ, with a heart at the centre of the guard and a white-and-gold blade. Unlike ordinary Keyblades it is not forged from a heart but exists as the guardian of Kingdom Hearts, the heart of all worlds.\n\nIts letter is pronounced “kye”, like the series' keyword. It can only be reconstituted through the meeting of seven hearts of pure light and thirteen hearts of darkness, or through the fusion of a heart of light with its darkness counterpart. Every attempt to bring it back triggers a war, and Master Xehanort's entire plan revolves around it.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "À l'Âge des Fées, le Maître des Maîtres prédit dans le Livre des Prophéties que le monde sombrera dans les ténèbres après une guerre pour la lumière. Les Prophètes, ses apprentis, rassemblent des Porteurs dans des Unions et se disputent la Lux, jusqu'à ce que la méfiance dégénère en Guerre des Keyblades sur la plaine qui deviendra le Cimetière des Keyblades.\n\nLa légende rapportée dans Birth by Sleep raconte l'issue de cette guerre : la χ-blade a volé en éclats, sept fragments de lumière et treize de ténèbres, et Kingdom Hearts a disparu dans les ténèbres, tandis que le monde unique se scindait en une multitude de petits mondes. Les Dandelions, préservés par Ava, en héritent un monde reconstruit à partir de la lumière des cœurs d'enfants.",
          "In the Age of Fairy Tales, the Master of Masters foretells in the Book of Prophecies that the world will sink into darkness after a war over light. The Foretellers, his apprentices, gather wielders into Unions and vie for Lux, until distrust degenerates into the Keyblade War on the plain that will become the Keyblade Graveyard.\n\nThe legend recounted in Birth by Sleep tells the outcome of that war: the χ-blade shattered into seven fragments of light and thirteen of darkness, and Kingdom Hearts vanished into darkness while the single world split into a multitude of small worlds. The Dandelions, preserved by Ava, inherit a world rebuilt from the light of children's hearts.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
          "Le Maître Xehanort veut forger la χ-blade pour rouvrir Kingdom Hearts et provoquer une nouvelle Guerre des Keyblades, dont il espère tirer la connaissance. Faute de treize ténèbres, il tente la seconde méthode : il brise le cœur de Ventus, crée Vanitas, et attend que les deux moitiés, renforcées par leurs voyages, s'affrontent et fusionnent.\n\nAu Cimetière des Keyblades, Vanitas absorbe Ventus et une χ-blade apparaît dans ses mains, mais incomplète, car Ven refuse la fusion. Aqua et Mickey affrontent Vanitas tandis que Ven combat son double dans son cœur ; la χ-blade se fissure et explose, dispersant les combattants. Cet échec, dont Xehanort tire les leçons, le pousse à planifier sur des décennies la réunion des treize ténèbres et des sept lumières.",
          "Master Xehanort wants to forge the χ-blade to reopen Kingdom Hearts and provoke a new Keyblade War, from which he hopes to gain knowledge. Lacking thirteen darknesses, he tries the second method: he breaks Ventus's heart, creates Vanitas, and waits for the two halves, strengthened by their journeys, to clash and merge.\n\nAt the Keyblade Graveyard, Vanitas absorbs Ventus and a χ-blade appears in his hands, but an incomplete one, as Ven refuses the fusion. Aqua and Mickey fight Vanitas while Ven battles his double inside his heart; the χ-blade cracks and explodes, scattering the fighters. That failure, from which Xehanort draws lessons, leads him to plan over decades the gathering of thirteen darknesses and seven lights.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
          "Dream Drop Distance expose le nouveau plan de Xehanort. En envoyant son jeune lui-même à travers le temps, il rassemble treize incarnations de son propre cœur, la véritable Organisation XIII, pour incarner les treize ténèbres. Face à elles, Yen Sid doit réunir sept Gardiens de la Lumière, faute de quoi les sept Princesses de Cœur seraient les cibles.\n\nÀ la fin de l'examen de Maîtrise, le Maître Xehanort ressuscité explique lui-même ce calcul à Sora, Riku et Mickey dans le Monde qui n'existe pas : quand lumières et ténèbres s'affronteront, la χ-blade renaîtra. Il tente d'ailleurs de faire de Sora son treizième réceptacle, ce que Lea et les autres empêchent de justesse.",
          "Dream Drop Distance lays out Xehanort's new plan. By sending his younger self through time, he gathers thirteen incarnations of his own heart, the true Organization XIII, to embody the thirteen darknesses. Against them, Yen Sid must gather seven Guardians of Light, or else the seven Princesses of Heart would become the targets.\n\nAt the end of the Mark of Mastery exam, the revived Master Xehanort himself explains the arithmetic to Sora, Riku and Mickey in The World That Never Was: when lights and darknesses clash, the χ-blade will be reborn. He even tries to make Sora his thirteenth vessel, which Lea and the others narrowly prevent.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Au Cimetière des Keyblades, les sept Gardiens affrontent les treize ténèbres, mais Xehanort a prévu la défaite de ses pions : chaque affrontement compte comme un choc entre lumière et ténèbres. Lorsque le compte n'y est plus, il frappe Kairi, et Sora, fou de colère, l'attaque : le treizième choc a lieu, et la χ-blade se matérialise dans la main de Xehanort. Il l'utilise aussitôt pour ouvrir Kingdom Hearts au-dessus du champ de bataille.\n\nSora, Donald et Dingo le poursuivent à Scala ad Caelum. Vaincu, Xehanort tend la χ-blade à Sora, la seule à pouvoir refermer Kingdom Hearts. Sora la lève avec tous les Gardiens et scelle le cœur des mondes, avant de partir avec le Pouvoir de l'Éveil à la recherche de Kairi. La χ-blade disparaît alors du récit, son rôle accompli.",
          "At the Keyblade Graveyard, the seven Guardians face the thirteen darknesses, but Xehanort has planned for his pawns' defeat: each confrontation counts as a clash between light and darkness. When the tally falls short, he strikes Kairi, and Sora, mad with anger, attacks him: the thirteenth clash occurs, and the χ-blade materialises in Xehanort's hand. He uses it at once to open Kingdom Hearts above the battlefield.\n\nSora, Donald and Goofy pursue him to Scala ad Caelum. Defeated, Xehanort hands the χ-blade to Sora, the only thing able to close Kingdom Hearts. Sora raises it together with all the Guardians and seals the heart of all worlds, before leaving with the power of waking to find Kairi. The χ-blade then disappears from the story, its role fulfilled.",
        ),
      },
    ],
    trivia: [
      L("Le χ se prononce « kye » : le titre Kingdom Hearts χ et le mot « key » (clé) jouent sur cette homophonie.", "The χ is pronounced “kye”: the title Kingdom Hearts χ and the word “key” play on that homophony."),
      L("Le dessin de la χ-blade, deux Chaînes Royales croisées, est la raison pour laquelle la Chaîne Royale est présentée comme la Keyblade la plus « pure ».", "The χ-blade's design, two crossed Kingdom Keys, is why the Kingdom Key is presented as the “purest” Keyblade."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — χ-blade", url: "https://kingdomhearts.fandom.com/wiki/%CE%A7-blade" },
    ],
  },

  // ─────────────────────────── Keyblade des Cœurs ───────────────────────────
  "keyblade-of-heart": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "La Keyblade des Cœurs, ou Keyblade des Cœurs des Hommes, est une arme artificielle créée par Ansem, Sans-cœur de Xehanort, à la Forteresse Oubliée. Entièrement sombre, elle porte au bout de sa lame l'emblème des Sans-cœur en guise de dents, et son porte-clés est un cœur noir. Elle n'a pas été forgée à partir d'un cœur de Porteur mais des cœurs de six Princesses de Cœur, réunies par Maléfique.\n\nSa fonction est inverse de celle des Keyblades ordinaires : au lieu de sceller les serrures des mondes, elle ouvre les cœurs et permet d'en extraire la lumière ou les ténèbres. Ansem comptait s'en servir pour ouvrir la Serrure Finale menant à Kingdom Hearts. Elle n'apparaît que dans le premier jeu, mais ses conséquences se font sentir dans toute la saga.",
          "The Keyblade of People's Hearts is an artificial weapon created by Ansem, Xehanort's Heartless, in Hollow Bastion. Entirely dark, it bears the Heartless emblem as its teeth at the tip of its blade, and its keychain is a black heart. It was not forged from a wielder's heart but from the hearts of six Princesses of Heart gathered by Maleficent.\n\nIts function is the reverse of ordinary Keyblades: instead of sealing the worlds' keyholes, it opens hearts and allows their light or darkness to be extracted. Ansem meant to use it to open the Final Keyhole leading to Kingdom Hearts. It only appears in the first game, but its consequences are felt across the whole saga.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
          "À la Forteresse Oubliée, Riku, possédé par Ansem, révèle la Keyblade des Cœurs et l'utilise pour ouvrir le cœur de Maléfique, la transformant en dragon. Il attend ensuite Sora dans la Grande Salle, devant la Serrure Finale : celle-ci ne peut s'ouvrir que si le cœur de Kairi, caché depuis la chute des Îles du Destin dans celui de Sora, est libéré. Sora vainc Riku-Ansem, mais la Keyblade des Cœurs reste sur place.\n\nSora s'en saisit alors et la retourne contre lui-même : son cœur libère celui de Kairi, qui se réveille, tandis que les cœurs des Princesses regagnent leurs corps. La Keyblade se dissout, Sora devient un Sans-cœur, et seule l'étreinte de Kairi lui rend sa forme humaine. Cet instant, le sacrifice de Sora à la Forteresse Oubliée, est le pivot du premier jeu.",
          "In Hollow Bastion, Riku, possessed by Ansem, reveals the Keyblade of People's Hearts and uses it to open Maleficent's heart, turning her into a dragon. He then waits for Sora in the Grand Hall before the Final Keyhole, which can only open once Kairi's heart, hidden inside Sora's since the fall of Destiny Islands, is released. Sora defeats Riku-Ansem, but the Keyblade of People's Hearts remains behind.\n\nSora takes it and turns it on himself: his heart releases Kairi's, who awakens, while the Princesses' hearts return to their bodies. The Keyblade dissolves, Sora becomes a Heartless, and only Kairi's embrace restores his human form. That moment, Sora's sacrifice in Hollow Bastion, is the turning point of the first game.",
        ),
      },
      {
        title: L("Héritage", "Legacy"),
        text: L(
          "Le coup porté par Sora avec la Keyblade des Cœurs est l'événement fondateur de toute la suite de la saga. En perdant brièvement son cœur, Sora donne naissance à un Simili, Roxas, apparu dans la Cité du Crépuscule et recruté par l'Organisation XIII ; et parce que le cœur libéré est celui de Kairi, une seconde Simili voit le jour : Naminé, capable de manipuler les souvenirs de Sora.\n\nChain of Memories, 358/2 Days et Kingdom Hearts II découlent directement de cet instant. Xion elle-même, réplica façonnée à partir des souvenirs de Sora, n'existe que parce que Roxas existe. La Keyblade des Cœurs, arme d'un seul combat, est ainsi la clé de la trilogie de Xehanort.",
          "The blow Sora strikes with the Keyblade of People's Hearts is the founding event of everything that follows. By briefly losing his heart, Sora gives birth to a Nobody, Roxas, who appears in Twilight Town and is recruited by Organization XIII; and because the heart released is Kairi's, a second Nobody comes into being: Naminé, able to manipulate Sora's memories.\n\nChain of Memories, 358/2 Days and Kingdom Hearts II flow directly from that instant. Xion herself, a replica shaped from Sora's memories, only exists because Roxas does. The Keyblade of People's Hearts, weapon of a single battle, is thus the key to the Xehanort trilogy.",
        ),
      },
    ],
    trivia: [
      L("En japonais, elle s'appelle 人の心のキーブレード, « la Keyblade des cœurs des hommes », d'où son nom anglais complet.", "In Japanese it is called 人の心のキーブレード, “the Keyblade of people's hearts”, hence its full English name."),
      L("Elle est la seule Keyblade que Sora manie sans jamais pouvoir l'équiper : elle n'existe que dans une cinématique.", "It is the only Keyblade Sora wields without ever being able to equip it: it exists only in a cutscene."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Keyblade of People's Hearts", url: "https://kingdomhearts.fandom.com/wiki/Keyblade_of_People%27s_Hearts" },
    ],
  },

  // ─────────────────────────── Lumière Stellaire ───────────────────────────
  "starlight": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Lumière Stellaire est la Keyblade des Porteurs de l'Âge des Fées, celle que chaque nouveau membre d'une Union reçoit dans Kingdom Hearts χ. Sa silhouette reprend celle de la Chaîne Royale, preuve de la filiation entre les deux, mais ses couleurs sont plus douces, or, blanc et bleu, et ses dents forment une étoile ; son porte-clés est une étoile jaune. C'est une Keyblade de série, distribuée à des milliers de Porteurs.\n\nElle symbolise les débuts : celle qu'on reçoit avant de se forger sa propre voie. Le joueur de χ et d'Union χ la fait évoluer au fil de l'aventure, et Ephemer, Skuld et les autres Dandelions la manient. Dans Kingdom Hearts III, elle relie Sora aux Porteurs d'autrefois, dont il reçoit le soutien au Cimetière des Keyblades.",
          "Starlight is the Keyblade of the wielders of the Age of Fairy Tales, the one every new member of a Union receives in Kingdom Hearts χ. Its silhouette echoes the Kingdom Key, proof of the kinship between the two, but its colours are softer, gold, white and blue, and its teeth form a star; its keychain is a yellow star. It is a mass-issued Keyblade, given to thousands of wielders.\n\nIt symbolises beginnings: the Keyblade one receives before forging one's own path. The player of χ and Union χ upgrades it over the adventure, and Ephemer, Skuld and the other Dandelions wield it. In Kingdom Hearts III it links Sora to the wielders of old, whose support he receives at the Keyblade Graveyard.",
        ),
      },
      {
        game: "kingdom-hearts-chi",
        text: L(
          "Dans Kingdom Hearts χ et Union χ, le joueur incarne un Porteur de Daybreak Town qui rejoint l'une des cinq Unions dirigées par les Prophètes. Lumière Stellaire est sa première Keyblade ; il l'améliore avec des matériaux récoltés dans les mondes Disney, avant d'accéder à d'autres Keyblades comme Treasure Trove ou Lady Luck. Avec elle, il collecte la Lux et affronte les Sans-cœur avec ses Esprits Chirithy.\n\nL'histoire le voit se lier à Ephemer et Skuld, découvrir les tensions entre les Unions et survivre à la Guerre des Keyblades en rejoignant les Dandelions. Le monde rebâti par les enfants, puis les nouvelles Unions dirigées par Ephemer, Skuld, Ventus, Lauriam et Brain, sont autant d'épisodes où Lumière Stellaire reste la Keyblade la plus répandue, jusqu'à la fin d'Union χ et du monde de données.",
          "In Kingdom Hearts χ and Union χ, the player is a wielder from Daybreak Town who joins one of the five Unions led by the Foretellers. Starlight is their first Keyblade; they upgrade it with materials gathered in the Disney worlds before gaining other Keyblades such as Treasure Trove or Lady Luck. With it they collect Lux and fight the Heartless with their Chirithy Spirits.\n\nThe story sees them bond with Ephemer and Skuld, discover the tensions between the Unions and survive the Keyblade War by joining the Dandelions. The world rebuilt by the children, then the new Unions led by Ephemer, Skuld, Ventus, Lauriam and Brain, are all chapters in which Starlight remains the most common Keyblade, up to the end of Union χ and its data world.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
          "Kingdom Hearts III offre Lumière Stellaire aux joueurs qui ont lié leur compte Union χ, et permet aussi de l'obtenir en terminant tous les mini-jeux du Classic Kingdom sur le Gummiphone. Ses statistiques modestes et sa transformation, la Seconde Forme, en font l'équivalent d'une seconde Chaîne Royale, appréciée pour son style.\n\nSon rôle narratif est plus fort que ses chiffres : au Cimetière des Keyblades, lorsque la Marée Démoniaque engloutit les Gardiens, Sora se retrouve au Monde Final, puis revient sur la plaine où des milliers de Keyblades des Porteurs d'autrefois se lèvent pour le protéger, guidées par une voix qui est celle d'Ephemer. Lumière Stellaire, qui rappelle ces Porteurs, est le symbole de ce lien à travers les âges.",
          "Kingdom Hearts III gives Starlight to players who have linked their Union χ account, and also lets it be earned by completing every Classic Kingdom mini-game on the Gummiphone. Its modest stats and its formchange, Second Form, make it the equivalent of a second Kingdom Key, prized for its style.\n\nIts narrative role outweighs its numbers: at the Keyblade Graveyard, when the Demon Tide swallows the Guardians, Sora ends up in the Final World, then returns to the plain where thousands of Keyblades of the wielders of old rise to protect him, guided by a voice that is Ephemer's. Starlight, which recalls those wielders, is the symbol of that bond across the ages.",
        ),
      },
    ],
    trivia: [
      L("Dans Kingdom Hearts III, Lumière Stellaire est la seule Keyblade obtenable de deux manières distinctes, par le Classic Kingdom ou par Union χ.", "In Kingdom Hearts III, Starlight is the only Keyblade obtainable in two distinct ways, through the Classic Kingdom or through Union χ."),
      L("Le nom japonais, スターライト, transcrit l'anglais Starlight.", "The Japanese name, スターライト, transliterates the English Starlight."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Starlight", url: "https://kingdomhearts.fandom.com/wiki/Starlight" },
    ],
  },

  // ─────────────────────────── Lien de Flammes ───────────────────────────
  "bond-of-flame": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
          "Lien de Flammes est la Keyblade née d'Axel. Rouge et argent, elle reproduit ses chakrams : la garde est un chakram entier, la lame en forme de flamme s'achève sur des pointes, et son porte-clés est une petite flamme. Elle est remise à Sora après que le Simili d'Axel s'est consumé pour lui ouvrir un passage vers le Monde qui n'existe pas.\n\nSon nom dit son sens : elle est le lien, scellé par le feu, entre Sora et un ennemi devenu ami, et à travers Sora, entre Axel et Roxas, dont il voulait retrouver la compagnie. Elle renforce naturellement la magie Feu. Lea, revenu à la vie, obtiendra plus tard sa propre Keyblade, Libérateur de Flammes, qui prolonge cette imagerie de chakram et de feu.",
          "Bond of Flame is the Keyblade born from Axel. Red and silver, it reproduces his chakrams: the guard is a whole chakram, the flame-shaped blade ends in spikes, and its keychain is a small flame. It is given to Sora after Axel's Nobody burns himself out to open a passage to The World That Never Was for him.\n\nIts name says its meaning: it is the bond, sealed in fire, between Sora and an enemy turned friend, and through Sora, between Axel and Roxas, whose company he wanted back. It naturally boosts Fire magic. Lea, restored to life, will later obtain his own Keyblade, Flame Liberator, which carries on that chakram-and-fire imagery.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
          "Chronologiquement, Lien de Flammes apparaît d'abord dans 358/2 Days, comme l'une des formes que prend la Keyblade de Roxas selon le Gear équipé. Elle y est associée à un Gear de haut rang, obtenu tard dans l'aventure, et son apparence de chakram enflammé fait écho à l'amitié entre Roxas et Axel, au cœur du récit.\n\nLe jeu ne lui donne aucun rôle scénaristique, mais son inclusion est un clin d'œil aux joueurs de Kingdom Hearts II : la Keyblade que Sora recevra d'Axel existait déjà, en quelque sorte, dans les mains de Roxas, celui pour qui Axel finira par se sacrifier.",
          "Chronologically, Bond of Flame first appears in 358/2 Days as one of the forms Roxas's Keyblade takes depending on the equipped Gear. It is tied there to a high-rank Gear obtained late in the adventure, and its flaming chakram look echoes the friendship between Roxas and Axel at the heart of the story.\n\nThe game gives it no scripted role, but its inclusion is a nod to Kingdom Hearts II players: the Keyblade Sora will receive from Axel already existed, in a sense, in the hands of Roxas, the one for whom Axel will ultimately sacrifice himself.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
          "Après avoir enlevé Kairi pour attirer Sora, puis changé de camp, Axel rejoint Sora dans l'Entre-deux, un couloir entre les mondes, alors qu'une nuée de Reflets les encercle. Il déchaîne toutes ses flammes dans une ultime attaque qui anéantit les Similis mais consume son propre corps. Avant de disparaître, il avoue avoir voulu revoir Roxas, dit à Sora qu'il lui faisait ressentir quelque chose, et ouvre un passage vers le Monde qui n'existe pas.\n\nSora reçoit alors Lien de Flammes. Avec une force et une magie équilibrées et la capacité Feu +, elle est une bonne arme pour le dernier monde, et son allure enflammée rend hommage à Axel. Dans Kingdom Hearts II Final Mix, on peut l'emporter contre les données d'Axel au Jardin Radieux.",
          "After kidnapping Kairi to lure Sora, then switching sides, Axel joins Sora in Betwixt and Between, a corridor between worlds, as a swarm of Dusks surrounds them. He unleashes all his flames in a final attack that wipes out the Nobodies but burns up his own body. Before fading, he admits he wanted to see Roxas again, tells Sora that he made him feel something, and opens a passage to The World That Never Was.\n\nSora then receives Bond of Flame. With balanced strength and magic and the Fire Boost ability, it is a good weapon for the final world, and its fiery look pays tribute to Axel. In Kingdom Hearts II Final Mix it can also be brought against Axel's data in Radiant Garden.",
        ),
      },
      {
        title: L("Héritage", "Legacy"),
        text: L(
          "Lien de Flammes n'est plus équipable après Kingdom Hearts II, mais son imagerie survit. Dans Dream Drop Distance, Lea, redevenu humain, s'entraîne auprès de Merlin et des fées et invoque une Keyblade de ses propres mains à la Tour Mystérieuse ; dans Kingdom Hearts III, cette Keyblade, Libérateur de Flammes, reprend le chakram et les flammes de Lien de Flammes.\n\nLea la manie au Cimetière des Keyblades pour protéger Sora et Kairi, puis retrouve Roxas et Xion. Lien de Flammes reste ainsi, dans la mémoire des joueurs, la première trace du chemin qui a mené Axel, ennemi de Sora, à devenir un Gardien de la Lumière.",
          "Bond of Flame can no longer be equipped after Kingdom Hearts II, but its imagery lives on. In Dream Drop Distance, Lea, human again, trains with Merlin and the fairies and summons a Keyblade of his own at the Mysterious Tower; in Kingdom Hearts III that Keyblade, Flame Liberator, takes up the chakram and flames of Bond of Flame.\n\nLea wields it at the Keyblade Graveyard to protect Sora and Kairi, then reunites with Roxas and Xion. Bond of Flame thus remains, in players' memory, the first trace of the road that led Axel, Sora's enemy, to become a Guardian of Light.",
        ),
      },
    ],
    trivia: [
      L("Le nom japonais, ボンド・オブ・フレイム, transcrit l'anglais Bond of Flame.", "The Japanese name, ボンド・オブ・フレイム, transliterates the English Bond of Flame."),
      L("La scène de l'Entre-deux est l'une des rares où un membre de l'Organisation XIII meurt en allié de Sora.", "The Betwixt and Between scene is one of the rare ones in which an Organization XIII member dies as Sora's ally."),
    ],
    sources: [
      { label: "Kingdom Hearts Wiki — Bond of Flame", url: "https://kingdomhearts.fandom.com/wiki/Bond_of_Flame" },
    ],
  },
};
