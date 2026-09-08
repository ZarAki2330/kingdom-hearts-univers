import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée des personnages (lot C) : les invités Disney d'Agrabah,
 * d'Atlantica, de l'Olympe, du Pays des Merveilles, de la Ville d'Halloween,
 * du Pays Imaginaire, du Château de la Bête, de la Terre des Lions,
 * du Pays des Dragons et des Caraïbes.
 */
export const lore: Record<string, EntryLore> = {
  // ─────────────────────────────── Aladdin ───────────────────────────────
  "aladdin": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Aladdin est le héros du long métrage Disney de 1992 : un vagabond d'Agrabah qui découvre dans la Grotte aux Merveilles une lampe magique et se fait passer pour le prince Ali afin de séduire la princesse Jasmine. Kingdom Hearts reprend cette trame presque intégralement lors de la première visite d'Agrabah, mais la mêle à l'intrigue des Sans-cœur et au conseil de vilains réuni par Maléfique.\n\nLe jeu en fait surtout un compagnon d'armes : contrairement au film, Aladdin combat au sabre aux côtés de Sora, de Donald et de Dingo, et sa cape violette d'apparat cède la place à sa veste de rue. Scott Weinger, sa voix d'origine au cinéma, le double dans les jeux, ce qui ancre le personnage dans la continuité du film ; le tapis volant et le singe Abu l'accompagnent comme dans l'œuvre originale.",
          "Aladdin is the hero of Disney's 1992 feature: a street rat from Agrabah who finds a magic lamp in the Cave of Wonders and passes himself off as Prince Ali to win Princess Jasmine. Kingdom Hearts reuses that plot almost wholesale during the first visit to Agrabah, but folds it into the Heartless storyline and the council of villains assembled by Maleficent.\n\nAbove all the game turns him into a fighting companion: unlike in the film, Aladdin battles with a scimitar beside Sora, Donald and Goofy, and his princely purple cape gives way to his street vest. Scott Weinger, his original screen voice, dubs him in the games, anchoring the character in the film's continuity; the magic carpet and the monkey Abu accompany him as in the original work.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo débarquent à Agrabah alors que la ville est envahie par les Sans-cœur. Ils sauvent Aladdin d'une embuscade, apprennent qu'il détient la lampe du Génie et qu'il a déjà fait le vœu de devenir prince pour approcher Jasmine. Mais Jafar enlève la princesse et le perroquet Iago dérobe la lampe : le vizir descend dans la Grotte aux Merveilles avec son otage.\n\nAladdin rejoint alors le groupe comme équipier. Ensemble, ils traversent les salles de la Grotte, affrontent Jafar puis le vizir métamorphosé en génie, et libèrent la caverne qui s'effondre derrière eux. Jasmine ayant été emportée par Riku, il ne reste au jeune homme qu'un souhait ; plutôt que de retrouver son amour, Aladdin l'emploie à rendre sa liberté au Génie, qui devient dès lors une invocation de Sora.",
          "Sora, Donald and Goofy land in Agrabah as the city is overrun by Heartless. They save Aladdin from an ambush, learn that he holds the Genie's lamp and that he has already wished to become a prince in order to court Jasmine. But Jafar abducts the princess and the parrot Iago steals the lamp: the vizier descends into the Cave of Wonders with his hostage.\n\nAladdin then joins the party. Together they cross the Cave's chambers, fight Jafar and then the vizier transformed into a genie, and escape the collapsing cavern. With Jasmine carried off by Riku, only one wish remains to the young man; rather than recover his love, Aladdin uses it to give the Genie his freedom, and the Genie becomes one of Sora's summons.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, l'Agrabah reconstituée à partir des souvenirs de Sora rejoue la chasse à la lampe. Aladdin y cherche de nouveau Jasmine, enlevée par Jafar, et accepte l'aide du garçon à la Keyblade sans se douter que rien de tout cela n'est réel.\n\nCette version d'Aladdin n'existe que sous forme de carte de souvenir : lorsque Sora quitte l'étage, elle disparaît avec le décor. L'épisode illustre le fonctionnement du château, où chaque monde n'est qu'une projection tirée du cœur du visiteur, et où les amis retrouvés ne conservent aucune trace des rencontres passées.",
          "In Castle Oblivion, the Agrabah rebuilt from Sora's memories replays the hunt for the lamp. Aladdin again searches for Jasmine, kidnapped by Jafar, and accepts the help of the boy with the Keyblade without suspecting that none of it is real.\n\nThis Aladdin exists only as a memory card: when Sora leaves the floor, he vanishes with the scenery. The episode illustrates how the castle works, each world being only a projection drawn from the visitor's heart, where friends found again keep no trace of past encounters.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Roxas est envoyé plusieurs fois à Agrabah pour l'Organisation XIII, en solo ou en binôme, alors que la ville est ensevelie sous une tempête de sable et infestée de Sans-cœur. Il y croise Aladdin, qui cherche un trésor pour aider sa cité et prend le membre encapuchonné pour un allié de circonstance.\n\nCes missions n'ont aucune conséquence pour Aladdin lui-même, mais elles comptent pour Roxas : c'est dans ce genre de rencontres qu'il commence à s'attacher à des gens que l'Organisation ne considère que comme des décors. Le monde sert aussi de terrain aux missions partagées avec Xion, dont la relation avec Roxas se resserre au fil des sorties.",
          "Roxas is sent to Agrabah several times for Organization XIII, alone or in pairs, while the city lies buried under a sandstorm and infested with Heartless. There he meets Aladdin, who is hunting for treasure to help his city and takes the hooded member for an ally of convenience.\n\nThese missions have no consequence for Aladdin himself, but they matter for Roxas: it is in encounters like these that he starts caring about people the Organization regards as mere scenery. The world also hosts missions shared with Xion, whose bond with Roxas tightens with each outing.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, Aladdin broie du noir : Jasmine lui manque et la ville est de nouveau agitée. Sora le retrouve alors qu'Iago, repenti, tente de se faire pardonner. Pat Hibulaire pousse un marchand ambulant à frotter la lampe de Jafar, ce qui libère le vizir génie.\n\nAladdin, Sora et Iago poursuivent Jafar à travers Agrabah puis jusqu'aux ruines de la Grotte aux Merveilles. Le combat culmine avec la destruction de la lampe ; Iago prend un tir destiné à Aladdin et Jasmine, scellant sa rédemption. Aladdin sert aussi de partenaire de jeu à part entière dans ce monde, avec ses techniques de sabre et ses limites combinées, et le monde propose la chasse aux trésors du palais avec Abu.",
          "A year later, Aladdin is glum: he misses Jasmine and the city is restless again. Sora finds him while a repentant Iago tries to earn forgiveness. Pete pushes a wandering peddler into rubbing Jafar's lamp, freeing the genie vizier.\n\nAladdin, Sora and Iago chase Jafar across Agrabah and on to the ruins of the Cave of Wonders. The fight ends with the lamp's destruction; Iago takes a blast meant for Aladdin and Jasmine, sealing his redemption. Aladdin also serves as a full party member in this world, with his scimitar techniques and combined limits, and the world offers the palace treasure hunt with Abu.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Dans le journal de Jiminy numérisé, l'Agrabah de données reproduit les événements consignés par le grillon, mais les bugs qui rongent les blocs du monde en déforment le déroulement. Le Sora de données y retrouve un Aladdin coupé de ses repères, obsédé par un trésor et par la protection de Jasmine.\n\nEn éliminant les blocs corrompus, le Sora de données rend au monde sa cohérence et permet à Aladdin d'aller au bout de sa quête. Ces séquences comptent moins pour l'histoire d'Agrabah que pour la démonstration faite au roi Mickey : les données du journal contiennent bien des cœurs à réparer, indice de la phrase mystérieuse qui a lancé toute l'enquête.",
          "In Jiminy's digitised journal, Data Agrabah reproduces the events the cricket recorded, but the bugs eating away at the world's blox distort how they play out. Data-Sora finds an Aladdin cut off from his bearings, fixated on a treasure and on protecting Jasmine.\n\nBy clearing the corrupted blox, Data-Sora restores the world's coherence and lets Aladdin see his quest through. These sequences matter less for Agrabah's story than for what they prove to King Mickey: the journal's data does hold hearts in need of mending, a clue to the mysterious sentence that started the whole investigation.",
        ),
      },
    ],
    trivia: [
      L("Scott Weinger, la voix d'Aladdin dans le film de 1992, reprend le rôle dans les jeux Kingdom Hearts.", "Scott Weinger, Aladdin's voice in the 1992 film, reprises the role in the Kingdom Hearts games."),
      L("Dans Kingdom Hearts II, Iago passe du camp de Jafar à celui des héros, un arc repris de la suite Le Retour de Jafar.", "In Kingdom Hearts II, Iago switches from Jafar's camp to the heroes', an arc taken from the sequel The Return of Jafar."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Aladdin", url: "https://kingdomhearts.fandom.com/wiki/Aladdin" }],
  },

  // ─────────────────────────────── Jasmine ───────────────────────────────
  "jasmine": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Jasmine, princesse d'Agrabah dans le film de 1992, refuse le mariage arrangé que lui impose la loi et rêve de découvrir le monde hors des murs du palais. Kingdom Hearts conserve ce caractère frondeur mais lui donne un rôle bien plus lourd : elle est l'une des sept Princesses de Cœur, ces jeunes filles dont le cœur ne contient aucune ténèbre et dont la réunion peut ouvrir la porte ultime.\n\nCe statut la place au centre du plan de Maléfique dès le premier jeu et fait d'elle une cible permanente pour les vilains. Linda Larkin, sa voix parlée dans le film, la double dans les jeux. Sa silhouette turquoise et son tigre Rajah viennent directement de l'œuvre Disney, mais son enlèvement par Jafar prend, dans Kingdom Hearts, une dimension cosmique que le dessin animé n'avait pas.",
          "Jasmine, princess of Agrabah in the 1992 film, refuses the arranged marriage the law imposes on her and dreams of seeing the world beyond the palace walls. Kingdom Hearts keeps that defiant streak but gives her a far heavier role: she is one of the seven Princesses of Heart, girls whose hearts hold no darkness and whose gathering can open the ultimate door.\n\nThat status puts her at the centre of Maleficent's plan from the first game and makes her a permanent target for villains. Linda Larkin, her speaking voice in the film, dubs her in the games. Her turquoise outfit and her tiger Rajah come straight from the Disney work, but her abduction by Jafar takes on a cosmic dimension in Kingdom Hearts that the cartoon never had.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora croise Jasmine dès son arrivée à Agrabah : elle fuit Jafar, qui veut l'épouser pour s'emparer du trône, et se cache dans la boutique de la place. Le vizir la capture peu après et l'emmène dans la Grotte aux Merveilles pour y chercher la Serrure du monde.\n\nAprès la défaite de Jafar, Riku surgit et emporte la princesse : le Sans-cœur de Xehanort a besoin d'elle pour la Serrure ultime. Jasmine rejoint donc les six autres Princesses de Cœur à la Forteresse Oubliée, plongées dans un sommeil sans rêve. Leurs cœurs révèlent finalement l'emplacement de la Serrure ultime ; une fois Sora rétabli et Kairi réveillée, les princesses retiennent les ténèbres derrière la porte du Bout du Monde le temps que les héros interviennent.",
          "Sora meets Jasmine as soon as he reaches Agrabah: she is fleeing Jafar, who wants to marry her to seize the throne, and hides in the shop on the square. The vizier captures her shortly afterwards and takes her into the Cave of Wonders to look for the world's Keyhole.\n\nAfter Jafar's defeat, Riku appears and carries the princess away: Xehanort's Heartless needs her for the final Keyhole. Jasmine thus joins the six other Princesses of Heart at Hollow Bastion, sunk in a dreamless sleep. Their hearts eventually reveal the final Keyhole's location; once Sora is restored and Kairi awakened, the princesses hold the darkness behind the door at the End of the World until the heroes can act.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Rentrée à Agrabah, Jasmine retrouve un palais menacé par le retour de Jafar, libéré de sa lampe par la manœuvre de Pat Hibulaire. Elle se montre plus active que dans le premier jeu : c'est en partie pour elle qu'Iago cherche à se faire pardonner, et elle plaide auprès d'Aladdin en faveur du perroquet repenti.\n\nJafar l'enlève de nouveau lors de sa dernière offensive et l'emporte au-dessus des ruines de la Grotte aux Merveilles. Sora, Aladdin et le tapis volant la sauvent, et Iago encaisse le tir final destiné au couple. La visite se conclut par la réconciliation d'Agrabah avec elle-même : le sultan retrouve sa fille, et Aladdin cesse enfin de se croire indigne du palais.",
          "Back in Agrabah, Jasmine finds a palace threatened by Jafar's return, freed from his lamp by Pete's scheming. She is more active than in the first game: it is partly for her sake that Iago seeks forgiveness, and she pleads the repentant parrot's case with Aladdin.\n\nJafar abducts her again during his last offensive and carries her above the ruins of the Cave of Wonders. Sora, Aladdin and the magic carpet save her, and Iago takes the final blast meant for the couple. The visit closes on Agrabah reconciled with itself: the sultan has his daughter back, and Aladdin finally stops believing himself unworthy of the palace.",
        ),
      },
    ],
    trivia: [
      L("Jasmine est la seule Princesse de Cœur dont le monde d'origine est visité à la fois dans Kingdom Hearts et dans Kingdom Hearts II.", "Jasmine is the only Princess of Heart whose home world is visited in both Kingdom Hearts and Kingdom Hearts II."),
      L("Linda Larkin, sa voix parlée dans le film de 1992, la double dans les jeux ; Lea Salonga assurait le chant au cinéma.", "Linda Larkin, her speaking voice in the 1992 film, dubs her in the games; Lea Salonga provided the singing in the film."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Jasmine", url: "https://kingdomhearts.fandom.com/wiki/Jasmine" }],
  },

  // ──────────────────────────────── Génie ────────────────────────────────
  "genie": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Génie du film de 1992, célèbre pour ses métamorphoses et ses imitations, est enfermé depuis des millénaires dans une lampe et n'aspire qu'à la liberté. Kingdom Hearts reprend le personnage tel quel : son humour absurde, ses transformations en cascade et son marché à trois vœux structurent la première visite d'Agrabah.\n\nComme Robin Williams n'a pas repris le rôle pour les jeux, c'est Dan Castellaneta — sa voix dans la série animée et les suites vidéo — qui l'interprète ; en japonais, Kōichi Yamadera lui prête sa voix. Le jeu ajoute une idée qui n'existe pas au cinéma : une fois libéré, le Génie accompagne Sora d'un monde à l'autre sous forme d'invocation, ce qui justifie sa présence loin d'Agrabah.",
          "The Genie of the 1992 film, famous for his shape-shifting and impressions, has been locked in a lamp for millennia and wants nothing but freedom. Kingdom Hearts takes the character as he is: his absurd humour, his cascading transformations and his three-wish bargain shape the first visit to Agrabah.\n\nSince Robin Williams did not reprise the role for the games, Dan Castellaneta — his voice in the animated series and the direct-to-video sequels — plays him; in Japanese, Kōichi Yamadera lends his voice. The game adds an idea the film does not have: once freed, the Genie travels with Sora from world to world as a summon, which justifies his presence far from Agrabah.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le Génie apparaît lorsque Aladdin frotte la lampe pour prouver sa bonne foi à Sora. Il rappelle les règles de son pouvoir, se lamente sur son sort de prisonnier, et suit le groupe dans la Grotte aux Merveilles après le vol de la lampe par Iago.\n\nDevenu l'esclave de Jafar, il est contraint d'exaucer le vœu du vizir, qui réclame à son tour la puissance d'un génie. Ce souhait scelle la perte de Jafar, enfermé dans une lampe noire. Aladdin utilise alors son dernier vœu pour affranchir son ami. Libre, le Génie décide de voyager, et confie à Sora une carte d'invocation : il surgit dès lors sur les champs de bataille pour lancer des sorts dévastateurs.",
          "The Genie appears when Aladdin rubs the lamp to prove his good faith to Sora. He recites the rules of his power, laments his life as a prisoner, and follows the group into the Cave of Wonders after Iago steals the lamp.\n\nMade Jafar's slave, he is forced to grant the vizier's wish for a genie's power in turn. That wish seals Jafar's doom, trapping him in a black lamp. Aladdin then uses his last wish to set his friend free. Now unbound, the Genie decides to travel, and hands Sora a summon: from then on he bursts onto battlefields to cast devastating spells.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Le Génie revient à Agrabah, cette fois libre de ses mouvements mais toujours attaché à Aladdin. Il seconde Sora contre Jafar redevenu génie et intervient dans l'affrontement final au-dessus des ruines de la Grotte aux Merveilles.\n\nComme invocation, il change de fonctionnement : au lieu d'un unique sort, il adopte l'une des formes de Sora et lui prête les techniques associées, transformant le duo en un seul combattant. Le monde d'Agrabah donne aussi lieu à quelques gags typiques du personnage, notamment ses tentatives d'apprendre la magie « à la manière de Donald ».",
          "The Genie returns to Agrabah, free to move at last but still attached to Aladdin. He seconds Sora against a Jafar restored to genie form and takes part in the final clash above the ruins of the Cave of Wonders.\n\nAs a summon he works differently: instead of a single spell, he takes on one of Sora's forms and lends him the matching techniques, turning the pair into a single fighter. Agrabah also gives rise to a few gags typical of the character, notably his attempts to learn magic “the Donald way”.",
        ),
      },
    ],
    trivia: [
      L("Dan Castellaneta, également la voix d'Homer Simpson, double le Génie dans les jeux à la place de Robin Williams.", "Dan Castellaneta, also the voice of Homer Simpson, dubs the Genie in the games in place of Robin Williams."),
      L("Dans Kingdom Hearts II, l'invocation du Génie change d'attaques selon la forme de transformation choisie par Sora.", "In Kingdom Hearts II, the Genie summon changes its attacks depending on the Drive Form Sora chooses."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Genie", url: "https://kingdomhearts.fandom.com/wiki/Genie" }],
  },

  // ──────────────────────────────── Jafar ────────────────────────────────
  "jafar": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Jafar est le grand vizir du sultan dans le film de 1992 : manipulateur, adepte de l'hypnose et flanqué du perroquet Iago, il convoite la lampe de la Grotte aux Merveilles pour prendre le pouvoir. Kingdom Hearts conserve ce parcours mais l'inscrit dans le conseil de vilains réuni par Maléfique à la Forteresse Oubliée, aux côtés de Crochet, d'Ursula, d'Hadès et d'Oogie Boogie.\n\nLe jeu accentue son ambition : il ne cherche plus seulement le trône d'Agrabah mais la Serrure de son monde, et se sert des Sans-cœur comme d'une armée. Jonathan Freeman, sa voix au cinéma, reprend le rôle. Sa double défaite — d'abord comme sorcier, puis comme génie enchaîné à sa lampe — suit fidèlement le film, mais le jeu prolonge l'histoire en le ramenant d'entre les morts.",
          "Jafar is the sultan's grand vizier in the 1992 film: a manipulator, a hypnotist, flanked by the parrot Iago, who covets the lamp of the Cave of Wonders to seize power. Kingdom Hearts keeps that arc but places it within the council of villains Maleficent gathers at Hollow Bastion, alongside Hook, Ursula, Hades and Oogie Boogie.\n\nThe game sharpens his ambition: he no longer merely wants Agrabah's throne but his world's Keyhole, and he uses the Heartless as an army. Jonathan Freeman, his screen voice, reprises the role. His double defeat — first as a sorcerer, then as a genie chained to his lamp — follows the film faithfully, but the game extends the story by bringing him back from the dead.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Jafar siège au conseil de Maléfique et se voit confier la recherche de la Serrure d'Agrabah. Pour y parvenir, il ensevelit la ville sous les Sans-cœur, enlève Jasmine et fait dérober la lampe du Génie par Iago.\n\nSora, Aladdin, Donald et Dingo le rattrapent dans la Grotte aux Merveilles. Vaincu une première fois comme sorcier, Jafar souhaite alors devenir un génie et se transforme en colosse rouge, combat que Sora remporte en frappant la lampe pendant que le Génie retient son adversaire. Enfermé dans cette lampe, Jafar disparaît sous la caverne qui s'effondre ; sa mort laisse Riku libre d'emporter Jasmine, dernière Princesse de Cœur manquante, vers la Forteresse Oubliée.",
          "Jafar sits on Maleficent's council and is assigned the search for Agrabah's Keyhole. To that end he buries the city under Heartless, abducts Jasmine and has Iago steal the Genie's lamp.\n\nSora, Aladdin, Donald and Goofy catch up with him in the Cave of Wonders. Beaten first as a sorcerer, Jafar wishes to become a genie and turns into a red colossus, a fight Sora wins by striking the lamp while the Genie holds his opponent back. Sealed in that lamp, Jafar vanishes beneath the collapsing cavern; his death leaves Riku free to carry Jasmine, the last missing Princess of Heart, off to Hollow Bastion.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, Pat Hibulaire retrouve la lampe noire de Jafar et pousse un marchand ambulant crédule à la frotter. Le génie déchaîné reprend aussitôt ses attaques contre Agrabah, où il sème le chaos et poursuit Aladdin et Iago à travers les toits et le désert.\n\nL'affrontement final a lieu au-dessus des ruines de la Grotte aux Merveilles, sur les colonnes en équilibre : Sora doit atteindre Jafar en vol avec le tapis magique tout en évitant ses colonnes de feu. La destruction de la lampe met un terme définitif au vizir. Ironiquement, la manœuvre de Pat n'aura servi ni Maléfique ni l'Organisation XIII : Jafar refusait de recevoir des ordres de quiconque.",
          "A year later Pete finds Jafar's black lamp and pushes a gullible peddler into rubbing it. The unleashed genie at once resumes his assault on Agrabah, sowing chaos and chasing Aladdin and Iago across the rooftops and the desert.\n\nThe final confrontation takes place above the ruins of the Cave of Wonders, on its teetering pillars: Sora must reach Jafar in flight on the magic carpet while dodging his columns of fire. Destroying the lamp ends the vizier for good. Ironically, Pete's scheme serves neither Maleficent nor Organization XIII: Jafar refused to take orders from anyone.",
        ),
      },
    ],
    trivia: [
      L("Jonathan Freeman, qui double Jafar au cinéma et dans les jeux, a aussi tenu le rôle dans la comédie musicale Aladdin à Broadway.", "Jonathan Freeman, who voices Jafar in the film and the games, also played the role in the Broadway musical Aladdin."),
      L("Sa forme de génie est l'un des rares boss de Kingdom Hearts que l'on affronte en deux phases distinctes dans un même lieu.", "His genie form is one of the few Kingdom Hearts bosses fought in two distinct phases in the same place."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Jafar", url: "https://kingdomhearts.fandom.com/wiki/Jafar" }],
  },

  // ──────────────────────────────── Ariel ────────────────────────────────
  "ariel": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Ariel, héroïne de La Petite Sirène (1989), est la plus jeune fille du roi Triton et rêve du monde des humains malgré l'interdiction paternelle. Kingdom Hearts déplace ce désir vers l'échelle de la saga : dans le premier jeu, ce n'est plus la surface qui l'attire mais les autres mondes, dont elle devine l'existence en écoutant Sora.\n\nLe jeu adapte le monde d'Atlantica en transformant les héros : Sora devient un garçon-sirène, Donald un poulpe et Dingo une tortue. Jodi Benson, la voix originale d'Ariel, reprend le rôle, ce qui permet à Kingdom Hearts II de bâtir tout un monde autour de chansons. Ariel y est tour à tour équipière, chanteuse et, dans Kingdom Hearts III, invocation marine.",
          "Ariel, heroine of The Little Mermaid (1989), is King Triton's youngest daughter and dreams of the human world despite her father's ban. Kingdom Hearts scales that longing up to the series: in the first game it is no longer the surface that draws her but the other worlds, whose existence she guesses at while listening to Sora.\n\nThe game adapts Atlantica by transforming the heroes: Sora becomes a merboy, Donald an octopus and Goofy a turtle. Jodi Benson, Ariel's original voice, reprises the role, which lets Kingdom Hearts II build an entire world around songs. Ariel is by turns a party member, a singer and, in Kingdom Hearts III, an aquatic summon.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Ariel accueille Sora à Atlantica et lui montre sa grotte aux trésors, où elle collectionne les objets venus d'ailleurs. Contre l'avis de son père Triton, hostile à tout ce qui touche aux autres mondes, elle aide le groupe à chercher la Serrure et rejoint l'équipe.\n\nUrsula profite de sa curiosité : par l'intermédiaire de Flotsam et Jetsam, elle pousse Ariel à dérober le trident du roi. La sorcière s'en empare et grandit jusqu'à une taille monstrueuse dans une faille sous-marine, où Sora et Ariel la vainquent. Triton, ému par le courage de sa fille, admet qu'il a eu tort de la brider et confie à Sora que la Keyblade porte une lourde responsabilité ; la Serrure d'Atlantica est alors scellée.",
          "Ariel welcomes Sora to Atlantica and shows him her grotto of treasures, where she collects objects from elsewhere. Against the wishes of her father Triton, hostile to anything touching the other worlds, she helps the group look for the Keyhole and joins the party.\n\nUrsula exploits her curiosity: through Flotsam and Jetsam, she pushes Ariel into stealing the king's trident. The witch seizes it and grows to monstrous size in an undersea chasm, where Sora and Ariel defeat her. Moved by his daughter's courage, Triton admits he was wrong to restrain her and tells Sora that the Keyblade carries a heavy responsibility; Atlantica's Keyhole is then sealed.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Atlantica devient un monde optionnel entièrement musical, où l'histoire du film est rejouée en chansons rythmées. Ariel y rencontre le prince Éric après l'avoir sauvé d'un naufrage, échange sa voix contre des jambes auprès d'Ursula, puis voit son marché se retourner contre elle.\n\nSora, Donald et Dingo l'accompagnent tout au long de ces numéros, jusqu'à la défaite d'Ursula et au mariage d'Ariel et d'Éric. Le monde ne comporte quasiment pas de combats classiques : il fonctionne comme un jeu de rythme, ce qui en fait un cas unique de la série. Le morceau final, chanté par Ariel, boucle son rêve de découvrir un ailleurs, thème déjà présent dans le premier jeu.",
          "Atlantica becomes an optional, fully musical world where the film's story is replayed in rhythm songs. Ariel meets Prince Eric after saving him from a shipwreck, trades her voice for legs with Ursula, then sees the bargain turn against her.\n\nSora, Donald and Goofy accompany her through these numbers, up to Ursula's defeat and Ariel's wedding with Eric. The world contains almost no conventional combat: it works as a rhythm game, making it unique in the series. The closing song, sung by Ariel, completes her dream of discovering somewhere else, a theme already present in the first game.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Atlantica n'est plus un monde visitable, mais Ariel revient sous forme de lien d'invocation. Sora l'appelle au combat et se retrouve emporté dans une vague géante : la sirène et ses amis déferlent sur les ennemis dans une attaque aquatique inspirée des numéros musicaux de Kingdom Hearts II.\n\nUn clin d'œil complète cette apparition dans le monde des Caraïbes, où l'on aperçoit une sirène nageant près du navire de Sora. Cette présence discrète montre comment Kingdom Hearts III recycle ses mondes anciens : plutôt qu'une visite complète, Ariel reste un souvenir agissant, mobilisable au cœur des affrontements.",
          "Atlantica is no longer a visitable world, but Ariel returns as a summon link. Sora calls her into battle and is swept up in a giant wave: the mermaid and her friends crash over enemies in an aquatic attack inspired by the musical numbers of Kingdom Hearts II.\n\nA nod completes this appearance in the Caribbean world, where a mermaid can be glimpsed swimming near Sora's ship. That discreet presence shows how Kingdom Hearts III recycles its older worlds: rather than a full visit, Ariel remains an active memory, summonable in the thick of a fight.",
        ),
      },
    ],
    trivia: [
      L("Jodi Benson double Ariel depuis le film de 1989 et dans tous ses rôles de Kingdom Hearts.", "Jodi Benson has voiced Ariel since the 1989 film and in all her Kingdom Hearts roles."),
      L("Atlantica est le seul monde de la série entièrement construit autour de séquences musicales, dans Kingdom Hearts II.", "Atlantica is the only world in the series built entirely around musical sequences, in Kingdom Hearts II."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Ariel", url: "https://kingdomhearts.fandom.com/wiki/Ariel" }],
  },

  // ─────────────────────────────── Ursula ────────────────────────────────
  "ursula": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Ursula, la sorcière des mers de La Petite Sirène (1989), est une pieuvre bannie du palais de Triton qui piège les naïfs par des contrats magiques. Kingdom Hearts la recrute dans le conseil de vilains de Maléfique et lui confie la traque de la Serrure d'Atlantica, en plus de son objectif personnel : le trident du roi.\n\nLe premier jeu s'écarte du film sur un point notable : Ursula n'y manipule pas Ariel avec un contrat de jambes humaines, mais avec la promesse de voir d'autres mondes. Kingdom Hearts II, lui, revient à la trame originale. Pat Carroll, sa voix au cinéma, reprend le rôle. Ses deux anguilles Flotsam et Jetsam l'accompagnent partout, et sa transformation géante fournit l'un des combats les plus spectaculaires du premier épisode.",
          "Ursula, the sea witch of The Little Mermaid (1989), is an octopus banished from Triton's palace who traps the naive with magical contracts. Kingdom Hearts enlists her in Maleficent's council of villains and assigns her the hunt for Atlantica's Keyhole, on top of her personal goal: the king's trident.\n\nThe first game departs from the film on one notable point: Ursula does not manipulate Ariel with a contract for human legs but with the promise of seeing other worlds. Kingdom Hearts II returns to the original plot. Pat Carroll, her screen voice, reprises the role. Her two eels Flotsam and Jetsam follow her everywhere, and her giant transformation provides one of the most spectacular fights of the first game.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Ursula observe Sora dès son arrivée à Atlantica et charge Flotsam et Jetsam de séduire Ariel par l'idée d'un ailleurs. La sirène finit par lui apporter le trident de Triton, que la sorcière s'approprie aussitôt.\n\nUne première confrontation a lieu dans son antre : vaincue, Ursula s'enfuit dans une faille sous-marine et absorbe le pouvoir du trident pour atteindre une taille titanesque. Sora, Ariel et le groupe l'affrontent au milieu des tourbillons, esquivant ses tentacules et ses éclairs. Sa disparition rend son trident à Triton et libère le monde ; le roi, humilié d'avoir été trompé, reconnaît alors que la curiosité de sa fille n'était pas un défaut.",
          "Ursula watches Sora from his arrival in Atlantica and sends Flotsam and Jetsam to tempt Ariel with the idea of somewhere else. The mermaid ends up bringing her Triton's trident, which the witch immediately claims.\n\nA first confrontation takes place in her lair: beaten, Ursula flees into an undersea chasm and absorbs the trident's power to reach titanic size. Sora, Ariel and the party face her amid the whirlpools, dodging her tentacles and lightning. Her destruction returns the trident to Triton and frees the world; the king, humiliated at having been deceived, admits that his daughter's curiosity was no flaw.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Dans l'Atlantica musical de Kingdom Hearts II, Ursula suit fidèlement le scénario du film : elle propose à Ariel d'échanger sa voix contre des jambes, puis se sert de cette voix pour envoûter le prince Éric et empêcher le mariage.\n\nDémasquée, elle reprend sa forme géante au milieu de la tempête. La confrontation prend la forme d'un numéro chanté, où le joueur doit suivre le rythme pour repousser la sorcière. Vaincue, elle disparaît définitivement des mers d'Atlantica et laisse Ariel libre de choisir sa vie sur terre. C'est la dernière apparition d'Ursula dans un monde jouable de la série.",
          "In the musical Atlantica of Kingdom Hearts II, Ursula follows the film's script closely: she offers Ariel legs in exchange for her voice, then uses that voice to bewitch Prince Eric and stop the wedding.\n\nExposed, she takes her giant form again in the middle of the storm. The confrontation is staged as a sung number in which the player must keep the rhythm to drive the witch back. Defeated, she disappears from Atlantica's seas for good and leaves Ariel free to choose a life on land. It is Ursula's last appearance in a playable world of the series.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Le prologue de Dream Drop Distance ramène Ursula sous une forme onirique. Aux Îles du Destin devenues Monde Endormi, une Ursula gigantesque jaillit des flots et poursuit Sora et Riku, qui doivent fuir en courant et en nageant tandis que la vague les rattrape.\n\nCette séquence sert d'introduction spectaculaire à l'examen de Maîtrise et rappelle que les Mondes Endormis rejouent, déformés, les souvenirs des deux garçons. L'Ursula affrontée ici n'est pas la sorcière elle-même mais l'écho d'un cauchemar ancien, ce qui explique sa taille démesurée et son irruption sur une plage où elle n'avait jamais mis les tentacules.",
          "The prologue of Dream Drop Distance brings Ursula back in a dream form. On Destiny Islands, now a Sleeping World, a gigantic Ursula erupts from the water and chases Sora and Riku, who must flee on foot and by swimming as the wave catches up.\n\nThe sequence serves as a spectacular introduction to the Mark of Mastery exam and reminds the player that the Sleeping Worlds replay the two boys' memories in distorted form. The Ursula faced here is not the witch herself but the echo of an old nightmare, which explains her outsized scale and her appearance on a beach she had never set a tentacle on.",
        ),
      },
    ],
    trivia: [
      L("Pat Carroll, voix d'Ursula depuis 1989, reprend le rôle dans Kingdom Hearts et Kingdom Hearts II.", "Pat Carroll, Ursula's voice since 1989, reprises the role in Kingdom Hearts and Kingdom Hearts II."),
      L("Dans le premier jeu, Ursula piège Ariel avec la promesse de voir d'autres mondes, et non avec le contrat de jambes humaines du film.", "In the first game, Ursula traps Ariel with the promise of seeing other worlds rather than the film's contract for human legs."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Ursula", url: "https://kingdomhearts.fandom.com/wiki/Ursula" }],
  },

  // ──────────────────────────────── Hadès ───────────────────────────────
  "hades": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Hadès du long métrage Hercule (1997) n'a rien du dieu grave de la mythologie : c'est un dieu des Enfers cynique, bavard et colérique, dont la chevelure de flammes bleues vire au rouge dès qu'il s'emporte. Kingdom Hearts conserve intégralement ce ton, jusqu'à ses formules de vendeur et ses accès de rage.\n\nLe jeu en fait l'un des vilains les plus présents de la série, à la fois recruteur de champions, organisateur de tournois truqués et allié occasionnel de Maléfique. James Woods, sa voix au cinéma, reprend systématiquement le rôle. Ses tentatives répétées pour trouver un combattant capable de battre Hercule — Cloud, Auron, puis les Titans — donnent leur fil rouge à ses apparitions, du Colisée de l'Olympe aux Enfers de Kingdom Hearts II.",
          "The Hades of the feature film Hercules (1997) is nothing like mythology's solemn god: he is a cynical, fast-talking, short-tempered lord of the Underworld whose blue flame hair turns red the moment he loses his temper. Kingdom Hearts keeps that tone entirely, down to his salesman patter and his fits of rage.\n\nThe game makes him one of the series' most present villains, at once a recruiter of champions, an organiser of rigged tournaments and an occasional ally of Maleficent. James Woods, his screen voice, consistently reprises the role. His repeated attempts to find a fighter able to beat Hercules — Cloud, Auron, then the Titans — give his appearances their through line, from Olympus Coliseum to the Underworld of Kingdom Hearts II.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Dix ans avant Sora, Hadès tient déjà les Jeux du Colisée de l'Olympe. Il repère Terra, dont il perçoit les ténèbres naissantes, et tente de l'attirer dans son camp en lui promettant la puissance ; Terra refuse mais laisse échapper un peu de sa colère, ce qui conforte le dieu dans son idée.\n\nHadès manipule aussi Zack, jeune apprenti héros, en lui accordant une force artificielle pour qu'il devienne son champion. Ventus puis Aqua déjouent ses plans successifs, et le dieu finit par être vaincu au Colisée. Cette apparition installe la logique de ses futures machinations : Hadès ne se bat presque jamais lui-même, il cherche toujours une arme humaine à lancer contre Hercule.",
          "Ten years before Sora, Hades is already running the Games at Olympus Coliseum. He spots Terra, senses the darkness stirring in him, and tries to draw him in with promises of power; Terra refuses but lets a little of his anger show, which only confirms the god's hunch.\n\nHades also manipulates Zack, a young apprentice hero, granting him artificial strength so he will become his champion. Ventus and then Aqua thwart his successive schemes, and the god is eventually beaten at the Coliseum. This appearance establishes the logic of his later plots: Hades almost never fights himself, he is always looking for a human weapon to throw at Hercules.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Hadès siège au conseil de Maléfique à la Forteresse Oubliée, où il apporte son expertise des Sans-cœur. Au Colisée de l'Olympe, il engage Cloud pour éliminer « le gamin à la clé », en lui promettant de l'aider à retrouver Séphiroth.\n\nQuand Cloud échoue, Hadès lâche sur lui le Cerbère puis affronte Sora lui-même au terme de la Coupe Hadès, le plus difficile des tournois du jeu. Battu, il jure de se venger. Son rôle mêle intrigue et contenu optionnel : les coupes du Colisée constituent l'essentiel du défi annexe de Kingdom Hearts, et Hadès en est le maître de cérémonie autant que la récompense finale.",
          "Hades sits on Maleficent's council at Hollow Bastion, where he brings his expertise on the Heartless. At Olympus Coliseum he hires Cloud to eliminate “the key kid”, promising to help him find Sephiroth in return.\n\nWhen Cloud fails, Hades looses Cerberus on him and then faces Sora himself at the end of the Hades Cup, the game's hardest tournament. Beaten, he swears revenge. His role blends plot and optional content: the Coliseum cups make up most of Kingdom Hearts' side challenge, and Hades is both their master of ceremonies and their final reward.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Hadès a rouvert le Colisée souterrain des Enfers et y organise des tournois destinés à épuiser Hercule. Il engage Auron, guerrier ramené du royaume des morts, en tentant de le lier à son service ; Auron se retourne contre lui et rejoint Sora.\n\nLe dieu enlève Mégara pour attirer Hercule dans les Enfers, libère l'Hydre sur le Colisée et provoque plusieurs affrontements successifs. Sora ne peut pas le vaincre tant qu'il se trouve dans son propre domaine, où il renaît sans cesse ; il faut l'attirer hors des Enfers, avec l'aide d'Hercule et d'Auron, pour le battre. Pat Hibulaire tente au passage de l'enrôler pour Maléfique, sans succès.",
          "Hades has reopened the Underworld's Coliseum and runs tournaments meant to wear Hercules down. He hires Auron, a warrior brought back from the realm of the dead, and tries to bind him to his service; Auron turns on him and joins Sora.\n\nThe god abducts Megara to lure Hercules into the Underworld, unleashes the Hydra on the Coliseum and provokes several successive clashes. Sora cannot defeat him while he stands in his own domain, where he endlessly revives; he must be drawn out of the Underworld, with Hercules' and Auron's help, to be beaten. Pete tries along the way to recruit him for Maleficent, without success.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Kingdom Hearts III ouvre sur l'offensive la plus ambitieuse d'Hadès : il libère les Titans emprisonnés — glace, roche, lave et vent — et les lance à l'assaut du mont Olympe pendant que Thèbes brûle. Sora, Donald et Dingo arrivent en pleine catastrophe et évacuent la ville avec Hercule.\n\nHadès enlève ensuite Mégara et l'emmène dans les Enfers, où Hercule plonge pour la sauver. Sora affronte le dieu dans les cavernes souterraines et le repousse, tandis qu'Hercule, porté par la foule de Thèbes, disperse les Titans dans le ciel. C'est la dernière apparition d'Hadès dans la saga, et la seule où sa défaite laisse Maléfique et l'Organisation entièrement hors du coup.",
          "Kingdom Hearts III opens on Hades' most ambitious offensive: he frees the imprisoned Titans — ice, rock, lava and wind — and hurls them at Mount Olympus while Thebes burns. Sora, Donald and Goofy arrive in the middle of the disaster and evacuate the city with Hercules.\n\nHades then abducts Megara and takes her to the Underworld, where Hercules dives after her. Sora faces the god in the underground caverns and drives him back, while Hercules, buoyed by the crowd of Thebes, scatters the Titans across the sky. It is Hades' final appearance in the saga, and the only one where his defeat leaves Maleficent and the Organization entirely out of the picture.",
        ),
      },
    ],
    trivia: [
      L("James Woods double Hadès dans le film comme dans tous les jeux Kingdom Hearts où il apparaît.", "James Woods voices Hades in the film and in every Kingdom Hearts game where he appears."),
      L("La Coupe Hadès est le tournoi le plus long de Kingdom Hearts : cinquante manches, dont plusieurs contre des boss déjà vaincus.", "The Hades Cup is the longest tournament in Kingdom Hearts: fifty rounds, several of them against bosses already defeated."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hades", url: "https://kingdomhearts.fandom.com/wiki/Hades" }],
  },

  // ───────────────────────────────── Phil ───────────────────────────────
  "phil": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Philoctète, dit Phil, est le satyre bougon qui entraîne les héros dans le film Hercule (1997). Vieilli, désabusé par ses échecs successifs, il reprend du service pour former le fils de Zeus. Kingdom Hearts en fait le portier et l'organisateur du Colisée de l'Olympe, rôle qu'il tient dans presque tous les épisodes.\n\nSa fonction narrative est constante : il refuse d'abord de prendre Sora au sérieux, lui impose des épreuves absurdes, puis finit par le reconnaître. Son leitmotiv, « la règle numéro un », et ses conseils d'entraîneur ponctuent les tournois. Robert Costanzo, sa voix au cinéma, le double dans les jeux. Sur le plan du gameplay, c'est lui qui donne accès aux coupes du Colisée, principal contenu de défi optionnel de la série.",
          "Philoctetes, or Phil, is the grumpy satyr who trains heroes in the film Hercules (1997). Aged and disillusioned by his string of failures, he returns to duty to train Zeus' son. Kingdom Hearts makes him the gatekeeper and organiser of Olympus Coliseum, a role he holds in nearly every game.\n\nHis narrative function is constant: he first refuses to take Sora seriously, sets him absurd trials, and eventually acknowledges him. His catchphrase about “rule number one” and his coaching tips punctuate the tournaments. Robert Costanzo, his screen voice, dubs him in the games. In gameplay terms he is the one who unlocks the Coliseum cups, the series' main optional challenge content.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Avant Hercule, Phil entraîne un autre jeune homme au Colisée : Zack, ambitieux et impatient. Terra, Ventus et Aqua le rencontrent chacun à leur tour lors des Jeux, où le satyre s'occupe des inscriptions et des règlements.\n\nPhil les prend d'abord pour de simples participants, puis les juge dignes de concourir. Ses réactions varient selon le porteur : il apprécie la discipline d'Aqua, s'inquiète de la puissance brute de Terra et adopte Ventus comme un cadet. Ce passage précise que le Colisée fonctionne déjà comme centre d'entraînement bien avant l'époque de Sora, et que Phil y traque depuis longtemps le « vrai héros » qu'il n'a encore jamais formé.",
          "Before Hercules, Phil trains another young man at the Coliseum: Zack, ambitious and impatient. Terra, Ventus and Aqua each meet him in turn during the Games, where the satyr handles entries and rules.\n\nPhil takes them at first for ordinary contestants, then judges them fit to compete. His reactions vary with each wielder: he appreciates Aqua's discipline, worries at Terra's raw power and adopts Ventus like a younger brother. The sequence establishes that the Coliseum already works as a training ground long before Sora's time, and that Phil has long been hunting the “true hero” he has never yet produced.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Phil accueille Sora au Colisée avec un mépris affiché : pour lui, ces trois gamins ne sont pas des héros. Il les met au défi de déplacer un socle de pierre, épreuve impossible, puis cède devant leur insistance et les inscrit aux tournois.\n\nLes coupes Phil, Pégase, Hercule et Hadès s'enchaînent, chacune ouvrant sur des adversaires plus rudes, jusqu'aux combats optionnels contre Séphiroth et le trio Ice Titan. À force de victoires, le satyre finit par admettre que Sora mérite le titre, tout en refusant de le dire trop clairement. Il assiste aussi, impuissant, aux manœuvres d'Hadès contre Cloud, dont il se méfie sans comprendre le marché passé avec les Enfers.",
          "Phil greets Sora at the Coliseum with open contempt: to him these three kids are no heroes. He challenges them to move a stone pedestal, an impossible trial, then gives in to their insistence and enters them in the tournaments.\n\nThe Phil, Pegasus, Hercules and Hades Cups follow one another, each opening on tougher opponents, up to the optional fights against Sephiroth and the Ice Titan. Through sheer accumulation of wins, the satyr ends up admitting Sora has earned the title, while refusing to say so too plainly. He also watches Hades' manoeuvres against Cloud helplessly, distrusting the swordsman without grasping the deal struck with the Underworld.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an plus tard, Phil s'inquiète pour Hercule, épuisé par les tournois que multiplie Hadès. Il confie à Sora l'entraînement des recrues et lui demande de veiller sur son champion, renversant la relation du premier jeu : c'est désormais le porteur de la Keyblade que l'on charge de protéger le héros.\n\nLe satyre gère aussi le Colisée souterrain, où se déroulent les coupes de Kingdom Hearts II — Coupe Olympe, Coupe Pégase, Coupe Hadès et leurs variantes Paradox. Lorsque l'Hydre saccage l'arène, Phil se retrouve en première ligne et doit compter sur Sora et Hercule pour sauver le lieu, avant d'en superviser la reconstruction.",
          "A year later Phil is worried about Hercules, worn down by the tournaments Hades keeps stacking up. He puts Sora in charge of training the recruits and asks him to look after his champion, reversing the first game's relationship: it is now the Keyblade wielder who is asked to protect the hero.\n\nThe satyr also runs the Underworld Coliseum, home to Kingdom Hearts II's cups — the Olympus, Pegasus and Hades Cups and their Paradox variants. When the Hydra wrecks the arena, Phil is on the front line and must rely on Sora and Hercules to save the place before overseeing its rebuilding.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "L'Olympe de Kingdom Hearts III est ravagé par les Titans lâchés par Hadès. Phil se trouve à Thèbes au moment de l'attaque et participe à l'évacuation des habitants avec Sora, Donald et Dingo.\n\nSon rôle s'y fait plus modeste : il n'y a plus de coupes à organiser, seulement une cité à sauver. Fidèle à lui-même, il continue de commenter les performances de chacun et rappelle à Hercule que la force ne fait pas le héros. Sa présence assure la continuité avec les épisodes précédents et boucle, discrètement, le long compagnonnage entre le satyre et le garçon qu'il refusait autrefois de laisser entrer dans son arène.",
          "The Olympus of Kingdom Hearts III is being ravaged by the Titans Hades has released. Phil is in Thebes when the attack begins and helps evacuate the inhabitants alongside Sora, Donald and Goofy.\n\nHis role here is more modest: there are no cups left to run, only a city to save. True to form, he keeps commenting on everyone's performance and reminds Hercules that strength does not make the hero. His presence ensures continuity with earlier games and quietly closes the long companionship between the satyr and the boy he once refused to let into his arena.",
        ),
      },
    ],
    trivia: [
      L("Robert Costanzo, la voix américaine de Phil dans le film de 1997, reprend le rôle dans la série.", "Robert Costanzo, Phil's American voice in the 1997 film, reprises the role in the series."),
      L("Les coupes du Colisée organisées par Phil constituent le principal contenu optionnel de Kingdom Hearts et de Kingdom Hearts II.", "The Coliseum cups Phil runs make up the main optional content of Kingdom Hearts and Kingdom Hearts II."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Philoctetes", url: "https://kingdomhearts.fandom.com/wiki/Philoctetes" }],
  },

  // ─────────────────────────────── Mégara ───────────────────────────────
  "megara": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Mégara, dite Meg, apparaît dans Hercule (1997) : ancienne servante d'Hadès à qui elle a vendu son âme pour sauver un amant ingrat, elle est chargée de séduire le héros et finit par tomber amoureuse de lui. Kingdom Hearts reprend ce passé sans le détailler et la présente surtout comme la compagne d'Hercule et le point faible qu'Hadès exploite sans relâche.\n\nSusan Egan, sa voix au cinéma, reprend le rôle dans les jeux. Le sarcasme et la fausse indifférence qui caractérisent le personnage sont conservés, mais l'accent est mis sur son inquiétude : dans les deux jeux où elle apparaît, elle est la seule à voir qu'Hercule se met en danger, bien avant Phil ou Sora.",
          "Megara, known as Meg, appears in Hercules (1997): a former servant of Hades to whom she sold her soul to save an ungrateful lover, she is tasked with seducing the hero and ends up falling for him. Kingdom Hearts keeps that backstory without detailing it and presents her chiefly as Hercules' companion and the weak point Hades exploits relentlessly.\n\nSusan Egan, her screen voice, reprises the role in the games. The character's sarcasm and feigned indifference are kept, but the emphasis falls on her worry: in both games where she appears, she is the only one to see that Hercules is putting himself in danger, well before Phil or Sora.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Meg apparaît au Colisée alors qu'Hercule enchaîne les tournois organisés par Hadès. Elle confie à Sora que le héros s'épuise et refuse de l'écouter, et demande au groupe de veiller sur lui.\n\nHadès la fait enlever pour attirer Hercule dans les Enfers ; Sora, Donald, Dingo et Auron descendent la chercher. Sauvée, elle assiste ensuite à la remontée d'Hercule, qui retrouve sa force en apprenant que ses amis sont en danger. La visite se referme sur une scène de tendresse au Colisée, où Meg, fidèle à son personnage, feint d'être exaspérée par toute cette attention.",
          "Meg appears at the Coliseum while Hercules is grinding through the tournaments Hades keeps organising. She tells Sora the hero is exhausting himself and refuses to listen, and asks the group to watch over him.\n\nHades has her abducted to lure Hercules into the Underworld; Sora, Donald, Goofy and Auron go down after her. Rescued, she then watches Hercules climb back, recovering his strength on learning that his friends are in danger. The visit closes on a tender scene at the Coliseum, where Meg, true to character, pretends to be exasperated by all the attention.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Lorsque les Titans d'Hadès attaquent l'Olympe, Meg se trouve à Thèbes, prise dans l'incendie qui ravage la cité. Sora, Donald et Dingo la mettent à l'abri au cours de l'évacuation, aux côtés des autres habitants.\n\nHadès la capture néanmoins et l'emmène dans les Enfers, contraignant Hercule à plonger derrière elle. Ce sauvetage constitue le cœur émotionnel du monde : Hercule y accepte de risquer son statut de dieu pour elle, tandis que Sora observe le lien qui les unit. Leurs retrouvailles au sommet de l'Olympe, sous le regard de Zeus, closent la visite et donnent à Sora un premier indice sur ce que signifie « le pouvoir de l'éveil ».",
          "When Hades' Titans attack Olympus, Meg is in Thebes, caught in the fire tearing through the city. Sora, Donald and Goofy get her to safety during the evacuation, alongside the other inhabitants.\n\nHades captures her nonetheless and takes her to the Underworld, forcing Hercules to dive in after her. That rescue is the emotional heart of the world: Hercules accepts risking his godhood for her, while Sora watches the bond between them. Their reunion at the summit of Olympus, under Zeus' gaze, closes the visit and gives Sora a first hint of what “the power of waking” might mean.",
        ),
      },
    ],
    trivia: [
      L("Susan Egan, la Mégara du film de 1997, double le personnage dans Kingdom Hearts II et Kingdom Hearts III.", "Susan Egan, the Megara of the 1997 film, voices the character in Kingdom Hearts II and Kingdom Hearts III."),
      L("Meg est l'un des rares personnages Disney à n'apparaître que dans les épisodes où l'Olympe est un monde jouable complet.", "Meg is one of the few Disney characters to appear only in games where Olympus is a full playable world."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Megara", url: "https://kingdomhearts.fandom.com/wiki/Megara" }],
  },

  // ──────────────────────────────── Alice ───────────────────────────────
  "alice": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Alice vient du long métrage Alice au pays des merveilles (1951), lui-même tiré des romans de Lewis Carroll. Petite fille curieuse et polie, elle suit un lapin blanc dans un terrier et traverse un monde régi par l'absurde. Kingdom Hearts reprend le procès de la Reine de Cœur et le Bois des Songes, mais leur donne un enjeu nouveau.\n\nAlice y est en effet l'une des sept Princesses de Cœur : son cœur, entièrement dépourvu de ténèbres, attire les Sans-cœur et intéresse Maléfique. Kathryn Beaumont, qui prêtait déjà sa voix à Alice en 1951, reprend le rôle dans le jeu, un demi-siècle plus tard. Le personnage garde son calme imperturbable jusque dans les situations les plus menaçantes, ce qui contraste avec la panique des habitants du Pays des Merveilles.",
          "Alice comes from the feature Alice in Wonderland (1951), itself drawn from Lewis Carroll's novels. A curious, polite little girl, she follows a white rabbit down a hole and crosses a world ruled by the absurd. Kingdom Hearts reuses the Queen of Hearts' trial and the Lotus Forest, but gives them new stakes.\n\nAlice is one of the seven Princesses of Heart: her heart, wholly free of darkness, draws the Heartless and interests Maleficent. Kathryn Beaumont, who already voiced Alice in 1951, reprises the role in the game half a century later. The character keeps her unshakeable composure even in the most threatening situations, contrasting with the panic of Wonderland's inhabitants.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo tombent au Pays des Merveilles en pleine audience : la Reine de Cœur accuse Alice d'avoir tenté de lui voler sa mémoire et exige sa décapitation. Le groupe obtient le droit de réunir des preuves, découvre dans la maison du lapin et le Bois des Songes des indices désignant les Sans-cœur, mais la reine refuse de les entendre.\n\nProfitant de la confusion, les Sans-cœur enlèvent Alice. Sora la retrouve bien plus tard à la Forteresse Oubliée, endormie avec les autres Princesses de Cœur dont les cœurs doivent révéler la Serrure ultime. Elle se réveille après la défaite du Sans-cœur de Xehanort et, avec les six autres princesses, retient les ténèbres au Bout du Monde le temps que Sora et Riku referment la porte.",
          "Sora, Donald and Goofy fall into Wonderland in the middle of a hearing: the Queen of Hearts accuses Alice of trying to steal her memory and demands her beheading. The group wins the right to gather evidence, finds clues pointing to the Heartless in the Rabbit's house and the Lotus Forest, but the queen refuses to hear them.\n\nTaking advantage of the confusion, the Heartless abduct Alice. Sora finds her much later at Hollow Bastion, asleep with the other Princesses of Heart whose hearts must reveal the final Keyhole. She wakes after the defeat of Xehanort's Heartless and, with the six other princesses, holds back the darkness at the End of the World long enough for Sora and Riku to close the door.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, le Pays des Merveilles reconstitué par les souvenirs de Sora rejoue le procès d'Alice. Cette fois, la Reine de Cœur l'accuse d'avoir dérobé ses souvenirs, variation directe sur le thème du château, où la mémoire est à la fois l'arme et l'enjeu.\n\nSora défend de nouveau la fillette, sans se rappeler l'avoir déjà fait. Cette Alice n'est qu'une image tirée de sa propre mémoire ; elle disparaît quand il quitte l'étage. La répétition souligne le piège tendu par Marluxia : plus Sora avance dans le château, plus ses souvenirs authentiques se délitent au profit de copies.",
          "In Castle Oblivion, the Wonderland rebuilt from Sora's memories replays Alice's trial. This time the Queen of Hearts accuses her of stealing her memories, a direct variation on the castle's theme, where memory is both weapon and stake.\n\nSora defends the girl again, without remembering having done so before. This Alice is only an image drawn from his own memory; she vanishes when he leaves the floor. The repetition underlines the trap Marluxia has laid: the deeper Sora goes into the castle, the more his genuine memories crumble in favour of copies.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Le Pays des Merveilles figure parmi les mondes du journal de Jiminy numérisé. Le Sora de données y retrouve Alice au milieu de blocs corrompus qui déforment le déroulement du procès et rendent les lieux instables.\n\nEn nettoyant les bugs, il rétablit la cohérence du monde et permet à l'audience de suivre son cours consigné. Alice n'y est qu'une donnée, mais l'épisode participe à la démonstration d'ensemble de Re:coded : les souvenirs du journal portent des blessures qu'il faut réparer, et cette réparation prépare la lettre de Mickey annonçant que d'autres cœurs attendent d'être sauvés.",
          "Wonderland is one of the worlds in the digitised Jiminy's journal. Data-Sora finds Alice there amid corrupted blox that distort the trial and make the place unstable.\n\nBy clearing the bugs he restores the world's coherence and lets the hearing follow its recorded course. Alice here is only data, but the episode contributes to Re:coded's overall demonstration: the journal's memories carry wounds that must be mended, and that mending sets up Mickey's letter announcing that other hearts are waiting to be saved.",
        ),
      },
    ],
    trivia: [
      L("Kathryn Beaumont, voix d'Alice dans le film de 1951, reprend le rôle dans Kingdom Hearts, cinquante ans plus tard.", "Kathryn Beaumont, Alice's voice in the 1951 film, reprises the role in Kingdom Hearts fifty years later."),
      L("Alice est la seule Princesse de Cœur dont le monde d'origine n'est jamais revisité dans Kingdom Hearts II.", "Alice is the only Princess of Heart whose home world is never revisited in Kingdom Hearts II."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Alice", url: "https://kingdomhearts.fandom.com/wiki/Alice" }],
  },

  // ───────────────────────────── Reine de Cœur ──────────────────────────
  "queen-of-hearts": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Reine de Cœur règne sur le Pays des Merveilles du film de 1951 : colossale, capricieuse, elle condamne à la décapitation quiconque la contrarie et joue au croquet avec des flamants roses. Kingdom Hearts la reprend sans nuance supplémentaire, mais lui donne le rôle d'obstacle principal du monde plutôt que celui d'alliée des ténèbres.\n\nContrairement à Jafar, Ursula ou Crochet, elle ne siège pas au conseil de Maléfique et n'a aucune conscience des Sans-cœur ni des autres mondes : elle n'est qu'une tyranne locale dont l'aveuglement facilite l'enlèvement d'Alice. Tress MacNeille lui prête sa voix dans les jeux. Ses soldats-cartes, ses procès expéditifs et son cri « qu'on lui coupe la tête ! » traversent chacune de ses apparitions.",
          "The Queen of Hearts rules the Wonderland of the 1951 film: enormous, capricious, she sentences anyone who crosses her to beheading and plays croquet with flamingos. Kingdom Hearts takes her over without added nuance, but casts her as the world's chief obstacle rather than an ally of darkness.\n\nUnlike Jafar, Ursula or Hook, she does not sit on Maleficent's council and has no awareness of the Heartless or the other worlds: she is merely a local tyrant whose blindness makes Alice's abduction easier. Tress MacNeille lends her voice in the games. Her card soldiers, her summary trials and her cry of “off with her head!” run through each of her appearances.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "La reine ouvre le Pays des Merveilles par le procès d'Alice, accusée d'avoir voulu lui voler sa mémoire. Sora obtient un délai pour rassembler des preuves, mais la souveraine truque le verdict en ne retenant qu'une seule des quatre boîtes rapportées.\n\nAlice est enfermée dans une cage suspendue, puis enlevée par les Sans-cœur pendant que Sora affronte les soldats-cartes. Furieuse, la reine accuse le groupe et lance ses troupes à leurs trousses. Le Sans-cœur Trickmaster, lâché dans la Chambre Bizarre, met un terme à l'épisode. La reine survit à tout cela sans jamais comprendre ce qui s'est réellement passé dans son jardin.",
          "The queen opens Wonderland with Alice's trial, the girl accused of trying to steal her memory. Sora obtains a delay to gather evidence, but the ruler rigs the verdict by considering only one of the four boxes brought back.\n\nAlice is locked in a hanging cage, then abducted by the Heartless while Sora fights the card soldiers. Furious, the queen blames the group and sets her troops on them. The Trickmaster Heartless, loosed in the Bizarre Room, ends the episode. The queen survives all of it without ever grasping what actually happened in her garden.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Dans le Pays des Merveilles reconstitué du Manoir Oblivion, la reine accuse cette fois Alice de lui avoir volé ses souvenirs. Le thème du château se glisse ainsi dans le décor Disney : ce qui manque n'est plus un objet mais de la mémoire.\n\nSora enquête à nouveau, subit les caprices de la souveraine et affronte ses cartes. La reine n'existe ici que le temps de l'étage : elle est un souvenir mis en scène par les Similis pour occuper le porteur de la Keyblade pendant que Marluxia et Larxene manipulent Naminé au sommet du château.",
          "In the Wonderland rebuilt inside Castle Oblivion, the queen now accuses Alice of stealing her memories. The castle's theme thus slips into the Disney set: what is missing is no longer an object but memory itself.\n\nSora investigates again, endures the ruler's whims and fights her cards. The queen exists here only for the length of the floor: she is a memory staged by the Nobodies to keep the Keyblade wielder busy while Marluxia and Larxene manipulate Naminé at the top of the castle.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Le Pays des Merveilles de données rejoue le procès une troisième fois, mais les blocs corrompus du journal en dérèglent le cours : les preuves changent de place et la reine s'emporte plus encore que d'habitude.\n\nLe Sora de données doit nettoyer les bugs pour que l'audience puisse aboutir. La reine ne perçoit évidemment rien de cette manipulation informatique et continue de réclamer des têtes. Son entêtement sert de ressort comique récurrent, mais aussi de rappel : dans un monde de données, même une tyrannie absurde n'est qu'un enregistrement à remettre en ordre.",
          "The data Wonderland replays the trial a third time, but the journal's corrupted blox throw it off course: the evidence shifts around and the queen loses her temper even more than usual.\n\nData-Sora must clear the bugs so the hearing can conclude. The queen of course perceives nothing of this computing manipulation and keeps demanding heads. Her stubbornness serves as a recurring comic device, but also as a reminder: in a world of data, even an absurd tyranny is only a record to be put back in order.",
        ),
      },
    ],
    trivia: [
      L("La Reine de Cœur est l'unique vilaine Disney majeure du premier jeu à ne pas rejoindre le conseil de Maléfique.", "The Queen of Hearts is the only major Disney villain of the first game who does not join Maleficent's council."),
      L("Tress MacNeille double la reine dans Kingdom Hearts comme dans les productions Disney contemporaines.", "Tress MacNeille voices the queen in Kingdom Hearts as in contemporary Disney productions."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Queen of Hearts", url: "https://kingdomhearts.fandom.com/wiki/Queen_of_Hearts" }],
  },

  // ─────────────────────────── Chat du Cheshire ─────────────────────────
  "cheshire-cat": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Chat du Cheshire du film de 1951 est une créature rayée de rose et de violet qui apparaît et disparaît morceau par morceau, en commençant par son sourire. Il parle par énigmes et se réjouit de la confusion qu'il provoque. Kingdom Hearts conserve intégralement cette ambiguïté : il n'aide jamais franchement, mais ne nuit jamais tout à fait.\n\nJim Cummings le double en anglais, Kōichi Yamadera en japonais. Le jeu en fait un guide involontaire pour Sora : c'est lui qui indique où chercher, qui commente les événements, et qui, d'un même mouvement, lâche sur le groupe le Sans-cœur qui garde la salle. Son alignement neutre est rare dans la série, où les personnages Disney se rangent presque toujours d'un côté ou de l'autre.",
          "The Cheshire Cat of the 1951 film is a pink and purple striped creature who appears and vanishes piece by piece, beginning with his grin. He speaks in riddles and delights in the confusion he causes. Kingdom Hearts keeps that ambiguity entirely: he never quite helps, and never quite harms.\n\nJim Cummings voices him in English, Kōichi Yamadera in Japanese. The game makes him an involuntary guide for Sora: he points out where to look, comments on events, and in the same motion looses on the group the Heartless guarding the room. His neutral alignment is rare in the series, where Disney characters almost always fall on one side or the other.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le chat surgit dans le Bois des Songes pendant que Sora cherche des preuves pour disculper Alice. Il parle d'ombres qui grandissent, indique par énigmes où trouver les indices, et disparaît avant toute question précise.\n\nAprès l'enlèvement d'Alice, il attire le groupe dans la Chambre Bizarre, allume les lampes et fait apparaître le Trickmaster, un Sans-cœur monté sur échasses qui manie des torches. Une fois le monstre vaincu, il révèle l'emplacement de la Serrure du monde. Le chat propose enfin quelques échanges d'objets et pousse Sora à revenir plus tard, plus fort — attitude typique de sa neutralité amusée.",
          "The cat turns up in the Lotus Forest while Sora hunts for evidence to clear Alice. He speaks of shadows growing larger, hints in riddles at where to find the clues, and vanishes before any precise question.\n\nAfter Alice's abduction he draws the group into the Bizarre Room, lights the lamps and conjures the Trickmaster, a stilt-walking Heartless wielding torches. Once the monster is beaten, he reveals the location of the world's Keyhole. The cat finally offers a few item trades and urges Sora to come back later, stronger — an attitude typical of his amused neutrality.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Au Manoir Oblivion, le Chat du Cheshire réapparaît dans le Pays des Merveilles reconstitué et joue le même rôle d'énigmiste. Ses répliques y prennent une résonance particulière : dans un château où les souvenirs se réécrivent, un personnage qui n'est jamais tout à fait présent devient une métaphore du lieu lui-même.\n\nIl guide Sora à travers le procès truqué de la reine et disparaît avec l'étage. Le chat n'a aucune conscience d'être un souvenir, ce qui n'empêche pas ses phrases sur l'illusion et la disparition de sonner comme un commentaire du piège de Marluxia.",
          "In Castle Oblivion, the Cheshire Cat reappears in the rebuilt Wonderland and plays the same riddling role. His lines take on a particular resonance there: in a castle where memories are rewritten, a character who is never quite present becomes a metaphor for the place itself.\n\nHe guides Sora through the queen's rigged trial and vanishes with the floor. The cat has no awareness of being a memory, which does not stop his lines about illusion and disappearance from sounding like a commentary on Marluxia's trap.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Le Pays des Merveilles du journal numérisé accueille de nouveau le chat, cette fois confronté à des blocs de bugs qui rongent le décor. Il commente la situation avec la même désinvolture, sans mesurer que le monde autour de lui est un enregistrement corrompu.\n\nSes indications aident le Sora de données à repérer les zones à nettoyer. La série lui offre là son dernier rôle notable : après Re:coded, le Chat du Cheshire n'apparaît plus dans les épisodes suivants, le Pays des Merveilles n'étant plus revisité en tant que monde jouable.",
          "The Wonderland of the digitised journal hosts the cat again, this time facing blox of bugs eating away at the scenery. He comments on the situation with the same nonchalance, never registering that the world around him is a corrupted record.\n\nHis hints help Data-Sora spot the areas to clear. The series gives him his last notable role there: after Re:coded the Cheshire Cat no longer appears, Wonderland never being revisited as a playable world.",
        ),
      },
    ],
    trivia: [
      L("Jim Cummings, voix anglaise du chat, double aussi Winnie l'ourson dans la série.", "Jim Cummings, the cat's English voice, also voices Winnie the Pooh in the series."),
      L("Le Chat du Cheshire est l'un des rares personnages Disney classés comme neutres : il aide Sora et lâche pourtant un Sans-cœur sur lui.", "The Cheshire Cat is one of the few Disney characters classed as neutral: he helps Sora and yet sets a Heartless on him."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Cheshire Cat", url: "https://kingdomhearts.fandom.com/wiki/Cheshire_Cat" }],
  },

  // ────────────────────────── Jack Skellington ─────────────────────────
  "jack-skellington": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Jack Skellington est le héros de L'Étrange Noël de monsieur Jack (1993), film d'animation en volume produit par Tim Burton. Roi des citrouilles de la Ville d'Halloween, il se lasse de sa fête annuelle et s'empare de Noël avec des résultats désastreux. Kingdom Hearts reprend cette double intrigue : la première visite porte sur Halloween, la seconde sur Noël.\n\nLe jeu adapte le style visuel du film, y compris pour les héros : Sora, Donald et Dingo reçoivent des costumes cousus de cicatrices et de bandages. Chris Sarandon, la voix parlée de Jack au cinéma, reprend le rôle. Le personnage garde son enthousiasme d'artiste et son incapacité totale à mesurer les conséquences de ses idées, ce qui fait de lui un allié aussi utile qu'imprévisible pour Sora.",
          "Jack Skellington is the hero of The Nightmare Before Christmas (1993), the stop-motion film produced by Tim Burton. Pumpkin King of Halloween Town, he grows tired of his annual festival and takes over Christmas with disastrous results. Kingdom Hearts reuses both plots: the first visit deals with Halloween, the second with Christmas.\n\nThe game adapts the film's visual style, including for the heroes: Sora, Donald and Goofy get costumes stitched from scars and bandages. Chris Sarandon, Jack's speaking voice in the film, reprises the role. The character keeps his artist's enthusiasm and his total inability to gauge the consequences of his ideas, making him an ally as useful as he is unpredictable for Sora.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Jack cherche à renouveler la fête d'Halloween et croit tenir l'idée du siècle : faire danser les Sans-cœur. Il demande au Docteur Finkelstein de fabriquer un cœur artificiel capable de les contrôler et enrôle Sora, Donald et Dingo dans le projet.\n\nOogie Boogie fait voler le cœur par Lock, Shock et Barrel, puis l'avale pour dominer les Sans-cœur. Jack accompagne Sora jusqu'au manoir du croque-mitaine et se bat à ses côtés lors des deux affrontements, contre Oogie puis contre son manoir animé. Le cœur détruit, le roi des citrouilles admet à demi-mot son erreur, mais la Serrure du monde apparaît dans la fontaine de la place, et Jack retient surtout que la fête a été mémorable.",
          "Jack is looking to freshen up Halloween and thinks he has the idea of the century: making the Heartless dance. He asks Dr Finkelstein to build an artificial heart able to control them and enlists Sora, Donald and Goofy in the project.\n\nOogie Boogie has the heart stolen by Lock, Shock and Barrel, then swallows it to dominate the Heartless. Jack goes with Sora to the boogeyman's manor and fights at his side in both confrontations, against Oogie and then against his animated manor. With the heart destroyed, the Pumpkin King half-admits his mistake, but the world's Keyhole appears in the square's fountain, and what Jack mostly takes away is that the party was memorable.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "La Ville d'Halloween reconstituée du Manoir Oblivion rejoue la fabrication du cœur artificiel. Jack, toujours en quête d'une nouveauté, entraîne Sora dans le laboratoire de Finkelstein, et Oogie Boogie s'empare une nouvelle fois du dispositif.\n\nCette version du roi des citrouilles n'est qu'une carte de souvenir, sans mémoire des événements du premier jeu. L'étage sert surtout à illustrer une idée centrale de l'épisode : le cœur ne se fabrique pas, et les tentatives de Finkelstein comme les manipulations de l'Organisation échouent sur ce même principe.",
          "The Halloween Town rebuilt in Castle Oblivion replays the making of the artificial heart. Jack, forever after something new, drags Sora into Finkelstein's laboratory, and Oogie Boogie seizes the device once again.\n\nThis Pumpkin King is only a memory card, with no recollection of the first game's events. The floor mainly illustrates a central idea of the episode: hearts cannot be manufactured, and both Finkelstein's attempts and the Organization's schemes founder on that same principle.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Roxas est envoyé en mission à la Ville d'Halloween pour l'Organisation XIII, dans des rues où les Sans-cœur prolifèrent. Il y observe Jack, occupé à préparer une nouvelle fête, sans se faire connaître de lui.\n\nCes passages illustrent le décalage entre l'Organisation et les mondes qu'elle traverse : là où Sora s'était laissé embarquer dans les projets du roi des citrouilles, Roxas ne fait qu'exécuter des ordres et repartir. Le contraste prépare la révélation de son lien avec Sora, dont il finit par hériter souvenirs et attaches sans en comprendre l'origine.",
          "Roxas is sent on missions to Halloween Town for Organization XIII, through streets swarming with Heartless. There he observes Jack, busy preparing a new festival, without making himself known.\n\nThese passages illustrate the gap between the Organization and the worlds it crosses: where Sora had let himself be swept into the Pumpkin King's projects, Roxas only carries out orders and leaves. The contrast sets up the revelation of his link with Sora, whose memories and attachments he ends up inheriting without understanding where they come from.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Jack a découvert la Ville de Noël par une porte du bois et se prend de passion pour cette nouvelle fête. Il décide de remplacer le Père Noël, entraîne Sora dans la préparation des cadeaux et confie à Sally la confection de son costume rouge.\n\nMaléfique a cependant ressuscité Oogie Boogie, qui séquestre le Père Noël et sabote les préparatifs. Jack et Sora libèrent le vieil homme et affrontent le croque-mitaine dans son antre. Lors de la seconde visite, une créature échappée du laboratoire de Finkelstein sème le désordre dans la Ville de Noël : Jack la poursuit avec Sora jusqu'à la fabrique de jouets. Le roi des citrouilles finit par accepter que Noël appartient à quelqu'un d'autre — sans renoncer à s'y inviter.",
          "Jack has discovered Christmas Town through a door in the woods and becomes obsessed with this new festival. He decides to replace Santa Claus, drags Sora into preparing presents and asks Sally to sew his red suit.\n\nMaleficent, however, has revived Oogie Boogie, who holds Santa captive and sabotages the preparations. Jack and Sora free the old man and face the boogeyman in his lair. On the second visit, a creature escaped from Finkelstein's laboratory throws Christmas Town into disorder: Jack chases it with Sora as far as the toy factory. The Pumpkin King eventually accepts that Christmas belongs to someone else — without giving up on inviting himself.",
        ),
      },
    ],
    trivia: [
      L("Chris Sarandon, la voix parlée de Jack au cinéma, reprend le rôle dans les jeux ; Danny Elfman assurait le chant dans le film.", "Chris Sarandon, Jack's speaking voice in the film, reprises the role in the games; Danny Elfman provided the singing in the film."),
      L("La Ville d'Halloween est l'un des rares mondes à donner à Sora, Donald et Dingo des costumes entièrement redessinés.", "Halloween Town is one of the few worlds to give Sora, Donald and Goofy fully redesigned costumes."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Jack Skellington", url: "https://kingdomhearts.fandom.com/wiki/Jack_Skellington" }],
  },

  // ──────────────────────────────── Sally ───────────────────────────────
  "sally": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Sally est la poupée de chiffon créée par le Docteur Finkelstein dans L'Étrange Noël de monsieur Jack (1993). Faite de morceaux recousus et de feuilles mortes, elle s'échappe régulièrement du laboratoire, s'inquiète des projets de Jack et pressent les catastrophes avant tout le monde. Kingdom Hearts conserve cette fonction de conscience discrète.\n\nElle n'est jamais équipière et ne combat pas, mais ses interventions font basculer les intrigues des deux mondes d'Halloween : c'est elle qui retient l'élément manquant de l'expérience dans le premier jeu, et elle qui redoute les conséquences du Noël de Jack dans le second. Kath Soucie lui prête sa voix. Son affection pour le roi des citrouilles, jamais formulée directement, reste fidèle au ton du film.",
          "Sally is the rag doll created by Dr Finkelstein in The Nightmare Before Christmas (1993). Stitched from scraps and dead leaves, she regularly escapes the laboratory, worries about Jack's projects and senses disasters before anyone else. Kingdom Hearts keeps that role as a quiet conscience.\n\nShe is never a party member and does not fight, but her interventions tip the plots of both Halloween worlds: she is the one holding the experiment's missing element in the first game, and the one dreading the consequences of Jack's Christmas in the second. Kath Soucie lends her voice. Her affection for the Pumpkin King, never stated outright, stays faithful to the film's tone.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le Docteur Finkelstein a besoin de plusieurs composants pour son cœur artificiel, dont un souvenir. Sally, redoutant ce que Jack pourrait faire d'un tel objet, en a dissimulé une partie et refuse d'abord de la rendre.\n\nSora finit par obtenir l'élément manquant, mais les craintes de la poupée se vérifient : le cœur passe aux mains d'Oogie Boogie, qui s'en sert pour commander les Sans-cœur. Sally reste en retrait durant l'affrontement, puis assiste au retour du calme sur la place. Sa méfiance envers les inventions de Finkelstein prend valeur d'avertissement, dans une saga entière bâtie sur la question de ce qu'on peut ou non fabriquer d'un cœur.",
          "Dr Finkelstein needs several components for his artificial heart, one of them a memory. Sally, dreading what Jack might do with such a thing, has hidden part of it and at first refuses to hand it over.\n\nSora eventually obtains the missing element, but the doll's fears prove justified: the heart falls into Oogie Boogie's hands, and he uses it to command the Heartless. Sally stays back during the confrontation, then watches calm return to the square. Her distrust of Finkelstein's inventions reads as a warning, in a saga built entirely on the question of what can and cannot be manufactured from a heart.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Quand Jack décide de remplacer le Père Noël, c'est Sally qui coud son costume rouge tout en tentant de le dissuader. Elle a le pressentiment que l'aventure tournera mal, ce que la suite confirme : Oogie Boogie, ressuscité par Maléfique, séquestre le vrai Père Noël.\n\nSally aide ensuite discrètement Sora et Jack en les orientant vers la Ville de Noël et en veillant sur les habitants pendant les troubles. Lors de la seconde visite, elle s'inquiète de la créature échappée du laboratoire de Finkelstein. Le monde se referme sur une scène où Jack, tout à ses projets, ne remarque toujours pas l'attention constante que lui porte la poupée.",
          "When Jack decides to replace Santa Claus, it is Sally who sews his red suit while trying to talk him out of it. She has a premonition the venture will go badly, and it does: Oogie Boogie, revived by Maleficent, holds the real Santa captive.\n\nSally then quietly helps Sora and Jack by pointing them towards Christmas Town and watching over the townsfolk during the upheaval. On the second visit she worries about the creature escaped from Finkelstein's laboratory. The world closes on a scene where Jack, wrapped up in his plans, still fails to notice the constant care the doll shows him.",
        ),
      },
    ],
    trivia: [
      L("Sally est l'un des rares personnages Disney importants de la série à n'être jamais jouable ni invocable.", "Sally is one of the few significant Disney characters in the series who is never playable or summonable."),
      L("Dans le premier jeu, c'est son refus initial de rendre le souvenir qui déclenche la quête d'objets de la Ville d'Halloween.", "In the first game, her initial refusal to hand over the memory sets off Halloween Town's item hunt."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sally", url: "https://kingdomhearts.fandom.com/wiki/Sally" }],
  },

  // ───────────────────────────── Oogie Boogie ───────────────────────────
  "oogie-boogie": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Oogie Boogie, le croque-mitaine de L'Étrange Noël de monsieur Jack (1993), est un sac de toile rempli d'insectes qui règne sur un antre-casino et règle tout au lancer de dés. Kingdom Hearts reprend ce décor de jeu de hasard pour ses combats et l'associe au conseil de vilains de Maléfique.\n\nLe jeu lui donne une ambition qu'il n'avait pas au cinéma : contrôler les Sans-cœur. Ken Page, sa voix chantée et parlée dans le film, reprend le rôle. Ses trois sbires Lock, Shock et Barrel exécutent ses basses œuvres, et sa mort — la dissolution de son sac libérant une nuée d'insectes — est reproduite fidèlement, ce qui n'empêche pas Maléfique de le ramener plus tard.",
          "Oogie Boogie, the boogeyman of The Nightmare Before Christmas (1993), is a burlap sack full of insects who rules a casino lair and settles everything with a roll of the dice. Kingdom Hearts reuses that gambling set for its fights and links him to Maleficent's council of villains.\n\nThe game gives him an ambition he lacked in the film: controlling the Heartless. Ken Page, his singing and speaking voice in the film, reprises the role. His three henchmen Lock, Shock and Barrel do his dirty work, and his death — his sack unravelling into a swarm of bugs — is reproduced faithfully, which does not stop Maleficent from bringing him back later.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Membre du conseil réuni par Maléfique, Oogie Boogie apprend l'existence du cœur artificiel que fabrique le Docteur Finkelstein et le fait dérober par Lock, Shock et Barrel. Il l'avale pour prendre le commandement des Sans-cœur de la Ville d'Halloween.\n\nSora, Donald, Dingo et Jack l'affrontent dans son antre, une salle de jeu truffée de pièges et de roulettes, où il faut détruire les mécanismes pour l'atteindre. Vaincu, son sac se déchire et sa nuée d'insectes se disperse ; mais les ténèbres accumulées font enfler le manoir lui-même, qui se dresse en un second boss. Sa défaite définitive rend le cœur inutilisable et libère la ville.",
          "A member of the council Maleficent gathers, Oogie Boogie learns of the artificial heart Dr Finkelstein is building and has Lock, Shock and Barrel steal it. He swallows it to take command of Halloween Town's Heartless.\n\nSora, Donald, Goofy and Jack face him in his lair, a gambling hall bristling with traps and wheels, where the machinery must be destroyed to reach him. Beaten, his sack splits and his swarm of bugs scatters; but the accumulated darkness swells the manor itself, which rises as a second boss. His final defeat renders the heart useless and frees the town.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Maléfique ramène Oogie Boogie d'entre les morts pour s'en servir contre Sora, alors que Jack se prépare à remplacer le Père Noël. Le croque-mitaine fait enlever le vieil homme et détourne les préparatifs de Noël à son profit.\n\nSora, Jack et leurs alliés le retrouvent dans son repaire, où il envoie contre eux les cadeaux piégés et des Sans-cœur. Battu, il se dissout une nouvelle fois, définitivement. Pat Hibulaire, envoyé par Maléfique, assiste à sa chute sans pouvoir l'empêcher : l'épisode illustre l'incapacité durable de la sorcière à s'appuyer sur des alliés fiables une fois l'Organisation XIII entrée en scène.",
          "Maleficent brings Oogie Boogie back from the dead to use against Sora, just as Jack prepares to replace Santa Claus. The boogeyman has the old man kidnapped and diverts the Christmas preparations to his own ends.\n\nSora, Jack and their allies find him in his lair, where he throws booby-trapped presents and Heartless at them. Beaten, he dissolves once again, this time for good. Pete, sent by Maleficent, watches him fall without being able to prevent it: the episode shows the witch's lasting inability to rely on dependable allies once Organization XIII has entered the picture.",
        ),
      },
    ],
    trivia: [
      L("Ken Page, la voix d'Oogie Boogie au cinéma, reprend le rôle dans Kingdom Hearts et Kingdom Hearts II.", "Ken Page, Oogie Boogie's screen voice, reprises the role in Kingdom Hearts and Kingdom Hearts II."),
      L("Son antre est l'un des rares décors de la série dont la structure elle-même devient un boss.", "His lair is one of the few settings in the series whose structure itself becomes a boss."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Oogie Boogie", url: "https://kingdomhearts.fandom.com/wiki/Oogie_Boogie" }],
  },

  // ─────────────────────────────── Peter Pan ────────────────────────────
  "peter-pan": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Peter Pan, héros du film Disney de 1953 tiré de la pièce de J. M. Barrie, est l'enfant qui refuse de grandir et vit au Pays Imaginaire avec les Garçons perdus. Kingdom Hearts reprend son duel éternel contre le Capitaine Crochet et sa capacité à voler grâce à la poussière de fée de Clochette.\n\nLe jeu en fait un allié de Sora aussi désinvolte qu'efficace : il combat à la dague, se moque des pirates et improvise en permanence. Christopher Steele le double en anglais. Sa présence permet surtout d'introduire le vol comme mécanique de combat, une nouveauté que le Pays Imaginaire exploite dans plusieurs épisodes, du navire de Crochet aux toits de la tour de l'horloge.",
          "Peter Pan, hero of Disney's 1953 film adapted from J. M. Barrie's play, is the boy who refuses to grow up and lives in Neverland with the Lost Boys. Kingdom Hearts reuses his endless duel with Captain Hook and his ability to fly thanks to Tinker Bell's pixie dust.\n\nThe game makes him an ally as casual as he is effective: he fights with a dagger, mocks the pirates and improvises constantly. Christopher Steele voices him in English. Above all his presence introduces flight as a combat mechanic, a novelty Neverland exploits across several games, from Hook's ship to the clock tower rooftops.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Dix ans avant Sora, le Pays Imaginaire est le théâtre d'une chasse au trésor. Le Capitaine Crochet a mis la main sur une carte et une boîte, et cherche à s'en emparer avant Peter Pan.\n\nTerra, Ventus et Aqua traversent le monde chacun à leur tour et croisent le garçon volant, qui les prend d'abord pour des adversaires puis les enrôle dans sa querelle avec les pirates. Ventus, en particulier, sympathise immédiatement avec lui : deux garçons du même âge apparent, refusant l'un et l'autre de se laisser dicter leur destin. Peter récupère finalement le trésor, sans se douter de la portée réelle des affrontements qui se jouent ailleurs entre les trois porteurs de Keyblade.",
          "Ten years before Sora, Neverland is the stage for a treasure hunt. Captain Hook has got hold of a map and a box, and wants to claim them before Peter Pan.\n\nTerra, Ventus and Aqua each cross the world in turn and meet the flying boy, who takes them for opponents at first and then enlists them in his quarrel with the pirates. Ventus in particular takes to him at once: two boys of the same apparent age, both refusing to have their fate dictated to them. Peter finally recovers the treasure, unaware of the real stakes of the battles playing out elsewhere between the three Keyblade wielders.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Sora, Donald et Dingo se réveillent prisonniers dans la cale du navire de Crochet, où Peter Pan les rejoint : il cherche Wendy, enlevée par les pirates. Le garçon les aide à s'échapper, libère Clochette enfermée dans une lanterne, et découvre avec Sora que Riku garde à bord le corps endormi de Kairi.\n\nPeter Pan enseigne le vol à Sora, ce qui transforme les affrontements sur le pont et dans les airs. Le duel final contre Crochet se conclut par la chute du capitaine dans les flots, poursuivi par le crocodile. Le groupe gagne ensuite la tour de l'horloge : en réglant les aiguilles, il révèle la Serrure du Pays Imaginaire. Peter confie alors Clochette à Sora comme invocation.",
          "Sora, Donald and Goofy wake up imprisoned in the hold of Hook's ship, where Peter Pan joins them: he is looking for Wendy, taken by the pirates. The boy helps them escape, frees Tinker Bell from a lantern, and discovers with Sora that Riku is keeping Kairi's sleeping body aboard.\n\nPeter Pan teaches Sora to fly, which transforms the fights on deck and in the air. The final duel with Hook ends with the captain falling into the water, chased by the crocodile. The group then reaches the clock tower: setting the hands reveals Neverland's Keyhole. Peter then entrusts Tinker Bell to Sora as a summon.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Roxas est envoyé au Pays Imaginaire pour l'Organisation XIII, sur le navire pirate et dans la crique. Il y croise Peter Pan et Clochette, engagés dans leur guerre permanente contre Crochet.\n\nLes missions se déroulent sans que le garçon volant comprenne à qui il a affaire ; Roxas, lui, ne peut s'empêcher d'observer une complicité dont il est exclu. Ce type de scène nourrit tout l'épisode : à force de traverser des mondes où l'amitié va de soi, le Simili de Sora finit par vouloir la même chose pour lui, Axel et Xion.",
          "Roxas is sent to Neverland for Organization XIII, on the pirate ship and in the cove. There he crosses paths with Peter Pan and Tinker Bell, locked in their permanent war with Hook.\n\nThe missions unfold without the flying boy grasping who he is dealing with; Roxas, for his part, cannot help watching a closeness he is shut out of. Scenes like these feed the whole game: by crossing worlds where friendship is a given, Sora's Nobody comes to want the same thing for himself, Axel and Xion.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Le Pays Imaginaire n'est plus un monde visitable, mais Peter Pan revient comme invocation. Appelé par Sora, il fond sur les ennemis à la dague, accompagné de Clochette qui soigne le porteur de la Keyblade pendant l'attaque.\n\nCette invocation prolonge le lien noué dans le premier jeu : Peter avait déjà confié sa fée à Sora, et le duo réapparaît désormais ensemble. Le procédé permet à la série de conserver ses personnages Disney les plus populaires lorsqu'elle ne peut pas leur consacrer un monde entier, faute de place dans un épisode déjà très fourni.",
          "Neverland is no longer a visitable world, but Peter Pan returns as a summon. Called by Sora, he swoops at enemies with his dagger, accompanied by Tinker Bell, who heals the Keyblade wielder during the attack.\n\nThe summon extends the bond formed in the first game: Peter had already entrusted his fairy to Sora, and the pair now reappears together. The device lets the series keep its most popular Disney characters when it cannot devote a whole world to them, for lack of room in an already crowded game.",
        ),
      },
    ],
    trivia: [
      L("C'est Peter Pan qui introduit le vol libre dans Kingdom Hearts, mécanique reprise dans plusieurs épisodes ultérieurs.", "Peter Pan is the character who introduces free flight in Kingdom Hearts, a mechanic reused in several later games."),
      L("Dans Birth by Sleep, Ventus et Peter Pan partagent une même défiance envers l'idée de grandir, thème central des deux personnages.", "In Birth by Sleep, Ventus and Peter Pan share the same wariness of growing up, a theme central to both characters."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Peter Pan", url: "https://kingdomhearts.fandom.com/wiki/Peter_Pan" }],
  },

  // ─────────────────────────────── Clochette ────────────────────────────
  "tinker-bell": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Clochette, la fée du film Peter Pan (1953), s'exprime uniquement par tintements et gestes, et sa jalousie envers Wendy occupe une part importante du récit. Kingdom Hearts conserve son mutisme et son caractère, mais met surtout en avant sa poussière de fée, qui permet de voler.\n\nDans les jeux, elle devient une invocation à part : au lieu d'attaquer, elle soigne Sora en continu et le relève une fois s'il tombe au combat. Ce rôle de soutien en fait l'une des invocations les plus utiles du premier épisode. Sa silhouette lumineuse et son sillage doré traversent plusieurs jeux, du Pays Imaginaire de Birth by Sleep aux invocations de Kingdom Hearts II.",
          "Tinker Bell, the fairy of Peter Pan (1953), expresses herself only in chimes and gestures, and her jealousy of Wendy takes up a good part of the story. Kingdom Hearts keeps her muteness and her temper, but foregrounds her pixie dust, which allows flight.\n\nIn the games she becomes a summon apart: instead of attacking, she heals Sora continuously and revives him once if he falls in battle. That supporting role makes her one of the most useful summons in the first game. Her glowing silhouette and golden trail run through several games, from the Neverland of Birth by Sleep to the summons of Kingdom Hearts II.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Au Pays Imaginaire, Clochette accompagne Peter Pan durant la chasse au trésor qui l'oppose au Capitaine Crochet. Elle croise Terra, Ventus et Aqua, qu'elle observe avec la méfiance habituelle qu'elle réserve aux nouveaux venus.\n\nSa poussière permet aux porteurs de se déplacer dans les airs le temps de certaines séquences, préfigurant l'usage qu'en fera Sora dix ans plus tard. Le personnage n'intervient pas dans l'intrigue principale de l'épisode, mais sa présence installe la cohérence du monde : le Pays Imaginaire fonctionne déjà exactement comme dans le premier jeu.",
          "In Neverland, Tinker Bell accompanies Peter Pan during the treasure hunt pitting him against Captain Hook. She meets Terra, Ventus and Aqua, and watches them with the wariness she habitually reserves for newcomers.\n\nHer dust lets the wielders move through the air during certain sequences, prefiguring the use Sora will make of it ten years later. The character plays no part in the game's main plot, but her presence establishes the world's consistency: Neverland already works exactly as it will in the first game.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Crochet a enfermé Clochette dans une lanterne à bord de son navire. Sora et Peter Pan la libèrent, et sa poussière permet aussitôt au groupe de voler dans la cale, sur le pont puis dans le ciel du Pays Imaginaire.\n\nElle boude un moment lorsque Peter s'inquiète pour Wendy, fidèle à sa jalousie de toujours, mais participe à l'affrontement contre le capitaine. Une fois la Serrure du monde scellée dans la tour de l'horloge, Peter Pan confie Clochette à Sora : elle devient une invocation curative, capable de maintenir le groupe en vie dans les combats les plus longs, notamment les tournois du Colisée.",
          "Hook has locked Tinker Bell in a lantern aboard his ship. Sora and Peter Pan free her, and her dust immediately lets the group fly in the hold, on deck and then through Neverland's sky.\n\nShe sulks for a while when Peter worries about Wendy, true to her lifelong jealousy, but takes part in the confrontation with the captain. Once the world's Keyhole is sealed in the clock tower, Peter Pan entrusts Tinker Bell to Sora: she becomes a healing summon, able to keep the party alive in the longest fights, notably the Coliseum tournaments.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Clochette apparaît lors des missions de Roxas au Pays Imaginaire, toujours aux côtés de Peter Pan. Elle n'a aucune raison de faire confiance à un inconnu en manteau noir et garde ses distances.\n\nLe monde sert de terrain à plusieurs missions de l'Organisation XIII, dont certaines partagées avec Xion. La fée y reste un élément de décor mouvant plus qu'un personnage d'intrigue, mais sa présence maintient la continuité entre le Pays Imaginaire du premier jeu et celui, purement fonctionnel, des missions du Simili.",
          "Tinker Bell appears during Roxas' Neverland missions, always beside Peter Pan. She has no reason to trust a stranger in a black coat and keeps her distance.\n\nThe world hosts several Organization XIII missions, some of them shared with Xion. The fairy remains a moving piece of scenery more than a plot character, but her presence maintains continuity between the Neverland of the first game and the purely functional one of the Nobody's missions.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Clochette n'est plus une invocation autonome : elle accompagne désormais celle de Peter Pan. Lorsque Sora appelle le garçon volant, la fée l'escorte et soigne le porteur de la Keyblade tandis que Peter attaque à la dague.\n\nCette fusion des deux invocations du premier jeu résume leur relation dans le film comme dans la série : la fée et le garçon fonctionnent en tandem. C'est aussi la dernière apparition notable de Clochette dans un épisode principal, le Pays Imaginaire n'étant plus revisité en tant que monde jouable après 358/2 Days.",
          "Tinker Bell is no longer a standalone summon: she now accompanies Peter Pan's. When Sora calls the flying boy, the fairy escorts him and heals the Keyblade wielder while Peter attacks with his dagger.\n\nMerging the first game's two summons sums up their relationship in the film and in the series: fairy and boy work as a pair. It is also Tinker Bell's last notable appearance in a main entry, Neverland never being revisited as a playable world after 358/2 Days.",
        ),
      },
    ],
    trivia: [
      L("Clochette ne parle jamais dans la série : comme au cinéma, elle ne s'exprime que par tintements.", "Tinker Bell never speaks in the series: as in the film, she communicates only in chimes."),
      L("Dans Kingdom Hearts, son invocation relève Sora une fois s'il tombe au combat, ce qui en fait une aide précieuse dans la Coupe Hadès.", "In Kingdom Hearts, her summon revives Sora once if he falls in battle, making her a valuable aid in the Hades Cup."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Tinker Bell", url: "https://kingdomhearts.fandom.com/wiki/Tinker_Bell" }],
  },

  // ────────────────────────── Capitaine Crochet ─────────────────────────
  "captain-hook": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Le Capitaine Crochet, antagoniste du Peter Pan de 1953, est un pirate maniéré et lâche, terrorisé par le crocodile qui lui a dévoré une main et poursuivi par le tic-tac du réveil qu'il a avalé. Kingdom Hearts conserve intégralement ce ressort comique et l'intègre au conseil de vilains de Maléfique.\n\nSon navire devient un lieu de passage important : c'est là que Riku transporte le corps de Kairi et que Sora comprend l'ampleur du plan des Sans-cœur. Corey Burton le double dans les jeux. Contrairement à Jafar ou Ursula, Crochet survit à ses défaites : il n'est jamais tué, seulement humilié, ce qui lui permet de revenir d'un épisode à l'autre.",
          "Captain Hook, the antagonist of the 1953 Peter Pan, is a mannered, cowardly pirate terrified of the crocodile that ate his hand and haunted by the ticking of the clock it swallowed. Kingdom Hearts keeps that comic device entirely and folds him into Maleficent's council of villains.\n\nHis ship becomes an important waypoint: it is there that Riku carries Kairi's body and that Sora grasps the scale of the Heartless plan. Corey Burton voices him in the games. Unlike Jafar or Ursula, Hook survives his defeats: he is never killed, only humiliated, which lets him return from one game to the next.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Dix ans avant Sora, Crochet est déjà au Pays Imaginaire, lancé dans la recherche d'un trésor dont il détient une carte. Il croise successivement Terra, Ventus et Aqua et tente de manipuler chacun d'eux pour qu'ils travaillent à son profit contre Peter Pan.\n\nSes manœuvres échouent toutes : les trois porteurs finissent par comprendre son jeu, et le trésor lui échappe. Le crocodile lui fait, ici aussi, passer un mauvais moment. Cette apparition ancre Crochet comme le seul vilain Disney du Pays Imaginaire, présent d'un bout à l'autre de la chronologie sans jamais évoluer ni tirer de leçon de ses échecs.",
          "Ten years before Sora, Hook is already in Neverland, hunting a treasure whose map he holds. He meets Terra, Ventus and Aqua in turn and tries to manipulate each of them into working for him against Peter Pan.\n\nAll his schemes fail: the three wielders see through his game, and the treasure escapes him. The crocodile gives him a bad time here too. This appearance establishes Hook as Neverland's sole Disney villain, present across the whole timeline without ever changing or learning from his failures.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Crochet sert désormais Maléfique, qui utilise son navire comme moyen de transport entre les mondes. Il retient à bord Wendy et le corps endormi de Kairi, que Riku lui confie, ainsi que Clochette enfermée dans une lanterne.\n\nSora, Donald et Dingo sont jetés en cellule puis libérés par Peter Pan. Après avoir découvert Kairi, ils affrontent le capitaine sur le pont, dans un combat où le vol enseigné par Peter change tout : Crochet, incapable de suivre, finit par tomber à la mer et s'enfuit à la nage, poursuivi par le crocodile. Le navire perdu, Maléfique n'a plus besoin de lui, mais il gardera rancune de cette humiliation.",
          "Hook now serves Maleficent, who uses his ship to travel between worlds. He holds Wendy aboard, along with Kairi's sleeping body, which Riku entrusts to him, and Tinker Bell locked in a lantern.\n\nSora, Donald and Goofy are thrown in a cell then freed by Peter Pan. After discovering Kairi they face the captain on deck, in a fight where the flight Peter taught them changes everything: Hook, unable to keep up, ends up falling into the sea and swims off, chased by the crocodile. With the ship lost, Maleficent has no further use for him, but he will nurse a grudge over the humiliation.",
        ),
      },
      {
        game: "chain-of-memories",
        text: L(
      "Le Pays Imaginaire reconstitué du Manoir Oblivion rejoue l'épisode du navire. Crochet y retient de nouveau des prisonniers et se heurte à Sora et Peter Pan, sans mémoire des événements du premier jeu.\n\nCe souvenir mis en carte se conclut comme l'original, par la chute du capitaine et la fuite devant le crocodile. La répétition sert le propos de l'épisode : les mondes du château ne sont que des reprises de ce que Sora a vécu, et le voir vaincre deux fois le même pirate souligne à quel point sa mémoire lui est reprise et rendue à volonté.",
          "The Neverland rebuilt in Castle Oblivion replays the ship episode. Hook again holds prisoners and runs into Sora and Peter Pan, with no memory of the first game's events.\n\nThis carded memory ends like the original, with the captain's fall and his flight from the crocodile. The repetition serves the game's point: the castle's worlds are only reruns of what Sora lived through, and watching him beat the same pirate twice underlines how freely his memory is taken from him and given back.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Roxas croise Crochet lors de missions de l'Organisation XIII au Pays Imaginaire. Le pirate, toujours obsédé par Peter Pan et par les trésors, prend le membre encapuchonné pour un intrus de plus sur son navire.\n\nCes missions ne modifient rien à sa situation, mais elles constituent sa dernière apparition dans la série : après 358/2 Days, le Pays Imaginaire disparaît des mondes jouables et Crochet n'est plus revu. Il reste, avec Pat Hibulaire, l'un des rares vilains Disney à traverser plusieurs épisodes sans jamais être définitivement éliminé.",
          "Roxas runs into Hook during Organization XIII missions in Neverland. The pirate, still fixated on Peter Pan and on treasure, takes the hooded member for one more intruder on his ship.\n\nThe missions change nothing in his situation, but they are his last appearance in the series: after 358/2 Days, Neverland drops out of the playable worlds and Hook is not seen again. With Pete, he remains one of the few Disney villains to cross several games without ever being definitively destroyed.",
        ),
      },
    ],
    trivia: [
      L("Corey Burton double Crochet dans les jeux Kingdom Hearts comme dans les productions Disney récentes.", "Corey Burton voices Hook in the Kingdom Hearts games as in recent Disney productions."),
      L("Crochet est l'un des rares vilains Disney de la série à n'être jamais tué : il ne fait que fuir, à chaque défaite.", "Hook is one of the few Disney villains in the series never to be killed: he merely flees after each defeat."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Captain Hook", url: "https://kingdomhearts.fandom.com/wiki/Captain_Hook" }],
  },

  // ──────────────────────────────── Belle ──────────────────────────────
  "belle": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Belle est l'héroïne de La Belle et la Bête (1991) : jeune femme cultivée d'un village de province, elle prend la place de son père prisonnier et finit par apprivoiser le maître du château maudit. Kingdom Hearts reprend le décor et les serviteurs enchantés, mais élève Belle au rang de Princesse de Cœur, l'une des sept jeunes filles au cœur exempt de ténèbres.\n\nCe statut la met au centre des plans de Maléfique dès le premier jeu. Paige O'Hara, sa voix au cinéma, reprend le rôle. Le jeu insiste sur son sang-froid : capturée, séparée de la Bête, manipulée par un Simili, elle ne cède jamais à la peur, et c'est précisément ce refus qui la rend décisive au moment où Xaldin croit tenir sa victoire.",
          "Belle is the heroine of Beauty and the Beast (1991): a well-read young woman from a provincial village who takes her imprisoned father's place and eventually tames the master of the cursed castle. Kingdom Hearts reuses the setting and the enchanted servants, but raises Belle to the rank of Princess of Heart, one of the seven girls whose hearts hold no darkness.\n\nThat status puts her at the centre of Maleficent's plans from the first game. Paige O'Hara, her screen voice, reprises the role. The game stresses her composure: captured, separated from the Beast, manipulated by a Nobody, she never gives in to fear, and it is precisely that refusal that makes her decisive when Xaldin believes he has won.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le château de la Bête est attaqué par les Sans-cœur au tout début de l'histoire ; Belle est enlevée et le monde disparaît. Elle rejoint les autres Princesses de Cœur retenues endormies à la Forteresse Oubliée, où Maléfique compte se servir de leurs cœurs pour révéler la Serrure ultime.\n\nLa Bête la rejoint en traversant les ténèbres par la seule force de sa volonté, et Sora la découvre dans la salle du trône, avec Alice, Aurore, Blanche-Neige, Cendrillon et Jasmine. Une fois le Sans-cœur de Xehanort vaincu, les princesses se réveillent ; elles retiennent ensemble les ténèbres derrière la porte du Bout du Monde pendant que Sora et Riku la referment, puis chacune rentre dans son monde reconstitué.",
          "The Beast's castle is attacked by the Heartless at the very start of the story; Belle is abducted and the world vanishes. She joins the other Princesses of Heart held asleep at Hollow Bastion, where Maleficent intends to use their hearts to reveal the final Keyhole.\n\nThe Beast reaches her by crossing the darkness on willpower alone, and Sora finds her in the throne room with Alice, Aurora, Snow White, Cinderella and Jasmine. Once Xehanort's Heartless is defeated the princesses wake; together they hold back the darkness behind the door at the End of the World while Sora and Riku close it, then each returns to her restored world.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Le Château de la Bête sert de terrain de mission à l'Organisation XIII. Roxas y observe Belle et la Bête sans jamais intervenir, tandis que Xaldin étudie le maître des lieux et la colère qui l'habite.\n\nCes séquences précisent ce que Kingdom Hearts II ne fera qu'évoquer : l'intérêt de l'Organisation pour le château n'est pas fortuit, Xaldin y prépare méthodiquement la transformation de la Bête en Sans-cœur et en Simili. Belle n'est encore, à ce stade, qu'un levier repéré par le Simili du vent.",
          "Beast's Castle serves as mission ground for Organization XIII. Roxas observes Belle and the Beast there without ever intervening, while Xaldin studies the master of the house and the rage inside him.\n\nThese sequences spell out what Kingdom Hearts II only hints at: the Organization's interest in the castle is no accident, and Xaldin is methodically preparing to turn the Beast into a Heartless and a Nobody. Belle at this stage is only a lever the Nobody of wind has noted.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Belle vit de nouveau au château, mais la Bête s'est enfermée dans sa colère et a chassé ses serviteurs. Xaldin, membre de l'Organisation XIII, souffle sur ce désespoir pour provoquer la chute du maître des lieux. Belle refuse d'abandonner et guide Sora à travers les couloirs jusqu'à lui.\n\nLors de la seconde visite, Xaldin dérobe la rose enchantée et le miroir magique, seuls objets qui rattachent encore la Bête à son humanité, et menace d'emmener Belle. Elle profite d'un instant d'inattention pour reprendre la rose et la jeter à la Bête, ce qui permet à celle-ci de résister à la manipulation. Xaldin est vaincu sur le pont du château ; la malédiction levée, Belle et le prince redevenu humain ouvrent le bal dans la grande salle.",
          "Belle lives at the castle again, but the Beast has shut himself away in his anger and driven out his servants. Xaldin, a member of Organization XIII, fans that despair to bring the master of the house down. Belle refuses to give up and guides Sora through the corridors to him.\n\nOn the second visit, Xaldin steals the enchanted rose and the magic mirror, the only objects still tying the Beast to his humanity, and threatens to take Belle away. She seizes a moment's inattention to grab the rose and throw it to the Beast, letting him resist the manipulation. Xaldin is defeated on the castle bridge; with the curse lifted, Belle and the prince, human once more, open the ball in the great hall.",
        ),
      },
    ],
    trivia: [
      L("Paige O'Hara, la voix de Belle depuis 1991, reprend le rôle dans les jeux Kingdom Hearts.", "Paige O'Hara, Belle's voice since 1991, reprises the role in the Kingdom Hearts games."),
      L("Belle est la seule Princesse de Cœur à jouer un rôle actif dans la défaite d'un membre de l'Organisation XIII.", "Belle is the only Princess of Heart to play an active part in the defeat of an Organization XIII member."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Belle", url: "https://kingdomhearts.fandom.com/wiki/Belle" }],
  },

  // ─────────────────────────────── La Bête ──────────────────────────────
  "beast": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "La Bête est le prince transformé par une enchanteresse dans le film de 1991, condamné à garder sa forme monstrueuse tant qu'il n'aura pas appris à aimer et à être aimé, avant que le dernier pétale de la rose ne tombe. Kingdom Hearts conserve cette échéance et les serviteurs enchantés du château.\n\nLe jeu ajoute une idée qui lui est propre : privé de vaisseau et de Keyblade, la Bête traverse malgré tout les ténèbres entre les mondes par la seule force de son attachement à Belle. Robby Benson, sa voix au cinéma, reprend le rôle. Ce personnage devient l'exemple type d'un cœur fort mais instable, que l'Organisation XIII cherchera précisément à briser pour en tirer un Sans-cœur et un Simili.",
          "The Beast is the prince transformed by an enchantress in the 1991 film, doomed to keep his monstrous shape until he learns to love and be loved before the rose's last petal falls. Kingdom Hearts keeps that deadline and the castle's enchanted servants.\n\nThe game adds an idea of its own: with no ship and no Keyblade, the Beast crosses the darkness between worlds anyway, on the strength of his attachment to Belle alone. Robby Benson, his screen voice, reprises the role. The character becomes the type case of a heart both strong and unstable, exactly what Organization XIII will later try to break in order to harvest a Heartless and a Nobody.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le château de la Bête tombe aux mains des Sans-cœur dès les premières heures de l'histoire et Belle est emportée. Refusant de la perdre, la Bête se jette dans les ténèbres et parvient, seul, jusqu'à la Forteresse Oubliée.\n\nSora l'y trouve devant la porte principale, épuisé mais résolu. Il feint un temps de servir Maléfique pour approcher Belle, puis rejoint le groupe et devient équipier lors de l'ascension du château. Il encaisse les coups de Riku possédé sans reculer et affirme que son cœur ne connaît pas les ténèbres tant qu'il pense à Belle. Une fois les princesses réveillées, les deux amants se retrouvent et rentrent dans un monde restauré.",
          "The Beast's castle falls to the Heartless in the story's opening hours and Belle is carried off. Refusing to lose her, the Beast throws himself into the darkness and reaches Hollow Bastion alone.\n\nSora finds him before the main gate, exhausted but resolute. He briefly pretends to serve Maleficent in order to get near Belle, then joins the party and becomes a companion during the climb through the castle. He takes blows from the possessed Riku without retreating and insists his heart knows no darkness so long as he thinks of Belle. Once the princesses are awakened, the two are reunited and return to a restored world.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Le Château de la Bête devient un terrain d'observation pour l'Organisation XIII. Xaldin y étudie la Bête, sa fureur et son attachement à la rose, cherchant l'instant précis où le désespoir le fera basculer.\n\nRoxas, envoyé en mission dans les couloirs et les jardins, croise le maître des lieux sans lui parler. Ces scènes donnent rétrospectivement tout son sens au comportement de Xaldin dans Kingdom Hearts II : le Simili du vent ne s'attaque pas au château par hasard, il exécute un plan préparé de longue date pour fabriquer un nouveau membre à l'Organisation.",
          "Beast's Castle becomes an observation ground for Organization XIII. Xaldin studies the Beast there, his fury and his attachment to the rose, looking for the precise moment despair will tip him over.\n\nRoxas, sent on missions through the corridors and gardens, crosses the master of the house without speaking to him. In hindsight these scenes give Xaldin's behaviour in Kingdom Hearts II its full meaning: the Nobody of wind does not target the castle at random, he is executing a long-prepared plan to manufacture a new member for the Organization.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Un an après, la Bête a chassé ses serviteurs et s'est enfermée dans l'aile ouest. Xaldin l'a convaincue que Belle finira par la trahir. Sora, Donald et Dingo ramènent le maître des lieux à la raison et l'aident à repousser les Sans-cœur qui infestent la salle de bal.\n\nLors de la seconde visite, Xaldin vole la rose et le miroir et pousse la Bête à l'affronter seule. Belle lui rend la rose au moment décisif, ce qui lui permet de se ressaisir ; Sora et lui vainquent le Simili sur le pont du château. La malédiction levée, le prince retrouve forme humaine et danse avec Belle. La Bête reste l'un des rares alliés Disney à avoir failli devenir un ennemi de la saga.",
          "A year later the Beast has driven out his servants and shut himself in the west wing. Xaldin has convinced him that Belle will eventually betray him. Sora, Donald and Goofy bring the master of the house back to his senses and help him drive off the Heartless infesting the ballroom.\n\nOn the second visit Xaldin steals the rose and the mirror and goads the Beast into facing him alone. Belle returns the rose at the decisive moment, letting him pull himself together; he and Sora defeat the Nobody on the castle bridge. With the curse lifted, the prince regains human form and dances with Belle. The Beast remains one of the few Disney allies who came close to becoming an enemy of the saga.",
        ),
      },
    ],
    trivia: [
      L("La Bête est le seul personnage Disney de la série à voyager entre les mondes sans vaisseau, portail ni Keyblade.", "The Beast is the only Disney character in the series to travel between worlds with no ship, portal or Keyblade."),
      L("Robby Benson, sa voix depuis 1991, l'interprète dans Kingdom Hearts, 358/2 Days et Kingdom Hearts II.", "Robby Benson, his voice since 1991, plays him in Kingdom Hearts, 358/2 Days and Kingdom Hearts II."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Beast", url: "https://kingdomhearts.fandom.com/wiki/Beast" }],
  },

  // ─────────────────────────────── Simba ────────────────────────────────
  "simba": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Simba, héros du Roi lion (1994), est le fils de Mufasa : convaincu par son oncle Scar d'être responsable de la mort de son père, il fuit la Terre des Lions et grandit loin de son royaume avant d'accepter d'y revenir. Kingdom Hearts adapte cette trame en deux temps.\n\nDans le premier jeu, Simba n'est qu'un esprit invoqué par une gemme, souvenir d'un roi qui n'a pas encore repris sa place ; c'est seulement dans Kingdom Hearts II, lorsque la Terre des Lions devient un monde visitable, que son histoire est racontée. Le jeu transforme alors Sora, Donald et Dingo en animaux. Cam Clarke lui prête sa voix dans les jeux. Simba revient enfin dans Kingdom Hearts III comme lien d'invocation.",
          "Simba, hero of The Lion King (1994), is Mufasa's son: convinced by his uncle Scar that he caused his father's death, he flees the Pride Lands and grows up far from his kingdom before agreeing to return. Kingdom Hearts adapts that plot in two stages.\n\nIn the first game Simba is only a spirit called up by a summon gem, the memory of a king who has not yet reclaimed his place; it is only in Kingdom Hearts II, when the Pride Lands become a visitable world, that his story is told. The game then turns Sora, Donald and Goofy into animals. Cam Clarke lends him his voice in the games. Simba finally returns in Kingdom Hearts III as a summon link.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "La Terre des Lions n'est pas visitable, mais Simba existe sous forme d'esprit dans une gemme d'invocation trouvée au cours du voyage. Rendu à la vie par le pouvoir de la Keyblade, il rejoint Sora sur les champs de bataille.\n\nAppelé au combat, il pousse un rugissement qui frappe les ennemis autour de lui et projette des ondes de choc. C'est l'une des invocations les plus puissantes du jeu, souvent employée dans les coupes du Colisée. Le fait qu'un simple souvenir puisse ainsi retrouver corps préfigure une constante de la série : chez Kingdom Hearts, un cœur ou un souvenir suffisamment fort ne disparaît jamais tout à fait.",
          "The Pride Lands are not visitable, but Simba exists as a spirit inside a summon gem found during the journey. Restored to life by the Keyblade's power, he joins Sora on the battlefield.\n\nCalled into a fight, he lets out a roar that strikes surrounding enemies and sends out shock waves. It is one of the game's most powerful summons, often used in the Coliseum cups. That a mere memory can regain a body this way prefigures a constant of the series: in Kingdom Hearts, a heart or a memory that is strong enough never quite disappears.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "La Terre des Lions devient un monde à part entière et Sora y prend la forme d'un lionceau, Donald celle d'un oiseau et Dingo celle d'une tortue. Ils retrouvent Simba adulte à l'oasis, où il vit sans souci avec Timon et Pumbaa, refusant d'affronter son passé.\n\nNala et Sora le convainquent de rentrer. De retour au Rocher des Lions, Simba affronte Scar, apprend la vérité sur la mort de Mufasa et reprend son trône. Mais les ténèbres de son oncle persistent : le fantôme de Scar hante le nouveau roi et ébranle sa confiance, jusqu'à ce que Sora l'aide à s'en défaire. Ces ténèbres accumulées donnent finalement naissance au colossal Groundshaker, vaincu par Simba et Sora ensemble.",
          "The Pride Lands become a full world and Sora takes the shape of a lion cub, Donald that of a bird and Goofy that of a tortoise. They find the grown Simba at the oasis, living carefree with Timon and Pumbaa and refusing to face his past.\n\nNala and Sora convince him to go home. Back at Pride Rock, Simba confronts Scar, learns the truth about Mufasa's death and reclaims his throne. But his uncle's darkness lingers: Scar's ghost haunts the new king and shakes his confidence until Sora helps him shake it off. That accumulated darkness finally spawns the colossal Groundshaker, defeated by Simba and Sora together.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "La Terre des Lions n'est plus visitable, mais Simba revient sous forme de lien d'invocation. Appelé par Sora, il déferle sur le champ de bataille avec des attaques de feu et un rugissement dévastateur, avant de se retirer dans une lumière dorée.\n\nCette réapparition résume son parcours dans la série : Simba a été tour à tour un esprit convoqué par une gemme, un roi à remettre sur son trône, puis un allié appelable à volonté. Aucun autre personnage Disney n'a occupé successivement ces trois rôles, ce qui fait de lui l'un des invités les plus constants de la saga.",
          "The Pride Lands are no longer visitable, but Simba returns as a summon link. Called by Sora, he sweeps across the battlefield with fire attacks and a devastating roar before withdrawing into golden light.\n\nThe reappearance sums up his path through the series: Simba has been in turn a spirit called up by a gem, a king to be restored to his throne, and an ally summonable at will. No other Disney character has held those three roles in succession, which makes him one of the saga's most consistent guests.",
        ),
      },
    ],
    trivia: [
      L("Dans Kingdom Hearts II, la Terre des Lions transforme Sora en lionceau, Donald en oiseau et Dingo en tortue.", "In Kingdom Hearts II, the Pride Lands turn Sora into a lion cub, Donald into a bird and Goofy into a tortoise."),
      L("Simba est présent dans quatre épisodes sous trois statuts différents : invocation, équipier et lien d'invocation.", "Simba features in four games under three different statuses: summon, party member and summon link."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Simba", url: "https://kingdomhearts.fandom.com/wiki/Simba" }],
  },

  // ──────────────────────────────── Scar ────────────────────────────────
  "scar": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Scar, le frère cadet de Mufasa dans Le Roi lion (1994), assassine le roi, fait porter la faute à Simba et transforme la Terre des Lions en désert en s'alliant aux hyènes. Kingdom Hearts II reprend l'intégralité de cette histoire, mais en la situant après la fuite de Simba : Sora arrive dans un royaume déjà ruiné par le règne de l'usurpateur.\n\nLe jeu ajoute une dimension propre à la saga : la jalousie de Scar est si profonde qu'elle attire les Sans-cœur, puis survit à sa mort sous forme de fantôme. Jim Cummings lui prête sa voix. C'est l'un des rares vilains Disney de la série dont les ténèbres résiduelles produisent un ennemi supplémentaire après sa défaite.",
          "Scar, Mufasa's younger brother in The Lion King (1994), murders the king, pins the blame on Simba and turns the Pride Lands into a desert by allying with the hyenas. Kingdom Hearts II reuses that story in full, but sets it after Simba's flight: Sora arrives in a kingdom already ruined by the usurper's reign.\n\nThe game adds a dimension of its own: Scar's jealousy runs so deep that it draws the Heartless, then outlives his death as a ghost. Jim Cummings lends him his voice. He is one of the few Disney villains in the series whose residual darkness produces an extra enemy after his defeat.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora, Donald et Dingo découvrent une Terre des Lions asséchée, tenue par Scar et sa meute de hyènes. Pat Hibulaire est passé par là et a encouragé le lion à s'abandonner aux ténèbres pour asseoir son pouvoir, ce qui a attiré des nuées de Sans-cœur sur le royaume.\n\nNala, puis Sora, convainquent Simba de rentrer. L'affrontement final a lieu au sommet du Rocher des Lions : Scar avoue le meurtre de Mufasa avant d'être vaincu, et ses propres hyènes se retournent contre lui.\n\nSa haine, pourtant, ne disparaît pas. Un spectre de Scar hante ensuite le nouveau roi, sapant sa confiance dans les gorges et les grottes, jusqu'à ce que Sora l'aide à le chasser. Les ténèbres résiduelles de l'usurpateur se condensent enfin en Groundshaker, un Sans-cœur gigantesque qui piétine la savane et que Simba abat avec Sora.",
          "Sora, Donald and Goofy find a parched Pride Lands held by Scar and his pack of hyenas. Pete has passed through and encouraged the lion to give himself over to darkness to secure his power, which has drawn swarms of Heartless onto the kingdom.\n\nNala, and then Sora, convince Simba to return. The final confrontation takes place atop Pride Rock: Scar confesses Mufasa's murder before being defeated, and his own hyenas turn on him.\n\nHis hatred, however, does not vanish. A spectre of Scar then haunts the new king, undermining his confidence through the gorges and caves until Sora helps him drive it off. The usurper's residual darkness finally condenses into the Groundshaker, a gigantic Heartless that tramples the savannah and that Simba brings down with Sora.",
        ),
      },
    ],
    trivia: [
      L("Jim Cummings, voix de Scar dans plusieurs productions Disney, l'interprète dans Kingdom Hearts II.", "Jim Cummings, Scar's voice in several Disney productions, plays him in Kingdom Hearts II."),
      L("Scar est l'un des rares vilains Disney de la série à revenir sous forme de fantôme après sa défaite.", "Scar is one of the few Disney villains in the series to return as a ghost after his defeat."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Scar", url: "https://kingdomhearts.fandom.com/wiki/Scar" }],
  },

  // ──────────────────────────────── Mulan ───────────────────────────────
  "mulan": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Mulan, héroïne du film de 1998, prend la place de son père âgé dans l'armée impériale chinoise en se faisant passer pour un homme, Ping. Kingdom Hearts II adapte fidèlement ce récit dans le monde du Pays des Dragons : le camp d'entraînement, l'avalanche, la marche sur la Cité Impériale et l'affrontement avec Shan-Yu.\n\nLe jeu en fait une équipière de Sora, armée d'une épée et accompagnée du petit dragon Mushu. Ming-Na Wen, sa voix au cinéma, reprend le rôle. Mulan est l'un des rares personnages Disney de la série dont l'arc repose entièrement sur une imposture : Sora, Donald et Dingo entrent dans le secret dès le début et deviennent complices de son déguisement.",
          "Mulan, heroine of the 1998 film, takes her aged father's place in the Chinese imperial army by passing as a man, Ping. Kingdom Hearts II adapts that story faithfully in the Land of Dragons: the training camp, the avalanche, the march on the Imperial City and the confrontation with Shan-Yu.\n\nThe game makes her one of Sora's party members, armed with a sword and accompanied by the little dragon Mushu. Ming-Na Wen, her screen voice, reprises the role. Mulan is one of the few Disney characters in the series whose arc rests entirely on an imposture: Sora, Donald and Goofy are let in on the secret from the start and become accomplices to her disguise.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sous le nom de Ping, Mulan s'engage dans l'armée du capitaine Shang avec Sora, Donald et Dingo, qui l'aident à tenir son rôle. L'entraînement au camp puis la traversée de la montagne mettent son endurance à l'épreuve, et Mushu multiplie les conseils désastreux.\n\nDans le col enneigé, elle provoque une avalanche qui anéantit l'armée des Huns mais la blesse ; les soins révèlent sa véritable identité. Shang, tenu par la loi, l'abandonne sur place au lieu de l'exécuter.\n\nMulan repart seule vers la Cité Impériale, où Shan-Yu, survivant de l'avalanche, s'apprête à s'emparer du palais. Elle sauve l'Empereur avec Sora et abat le chef hun, et se voit enfin reconnue. Lors de la seconde visite, la Sans-cœur Storm Rider menace la cité et un homme en manteau noir rôde dans les montagnes ; Mulan aide Sora à le traquer avant l'affrontement final dans le ciel.",
          "Under the name Ping, Mulan enlists in Captain Shang's army with Sora, Donald and Goofy, who help her keep up the act. Training at the camp and the crossing of the mountain test her endurance, while Mushu dispenses one disastrous piece of advice after another.\n\nIn the snowbound pass she triggers an avalanche that wipes out the Hun army but leaves her wounded; treating her reveals her true identity. Shang, bound by law, abandons her there rather than executing her.\n\nMulan sets off alone for the Imperial City, where Shan-Yu, having survived the avalanche, is preparing to seize the palace. She saves the Emperor with Sora and brings down the Hun leader, and is finally recognised. On the second visit the Storm Rider Heartless threatens the city and a man in a black coat prowls the mountains; Mulan helps Sora track him before the final battle in the sky.",
        ),
      },
    ],
    trivia: [
      L("Ming-Na Wen, la voix parlée de Mulan au cinéma, reprend le rôle dans Kingdom Hearts II.", "Ming-Na Wen, Mulan's speaking voice in the film, reprises the role in Kingdom Hearts II."),
      L("Le Pays des Dragons est l'un des rares mondes de Kingdom Hearts II où le déguisement d'un personnage constitue le ressort principal de l'intrigue.", "The Land of Dragons is one of the few Kingdom Hearts II worlds where a character's disguise drives the whole plot."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mulan", url: "https://kingdomhearts.fandom.com/wiki/Mulan" }],
  },

  // ──────────────────────────────── Mushu ───────────────────────────────
  "mushu": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Mushu est le petit dragon gardien déchu de la famille Fa dans Mulan (1998) : réduit au rang de sonneur de gong, il accompagne la jeune fille dans l'espoir de retrouver son statut. Vantard, minuscule et cracheur de feu, il fournit l'essentiel des passages comiques du film.\n\nKingdom Hearts lui donne deux vies successives : d'abord une invocation de feu dans le premier jeu, bien avant que le monde de Mulan n'existe dans la série, puis un compagnon permanent au Pays des Dragons dans Kingdom Hearts II. Mark Moseley, sa voix dans les productions Disney ultérieures, l'interprète dans les jeux, et Kōichi Yamadera le double en japonais.",
          "Mushu is the demoted little guardian dragon of the Fa family in Mulan (1998): reduced to sounding the gong, he goes with the young woman hoping to regain his standing. Boastful, tiny and fire-breathing, he supplies most of the film's comic relief.\n\nKingdom Hearts gives him two successive lives: first a fire summon in the first game, long before Mulan's world exists in the series, then a permanent companion in the Land of Dragons in Kingdom Hearts II. Mark Moseley, his voice in later Disney productions, plays him in the games, and Kōichi Yamadera dubs him in Japanese.",
        ),
      },
      {
        game: "kingdom-hearts",
        text: L(
      "Le Pays des Dragons n'existe pas encore comme monde visitable, mais Mushu apparaît sous forme d'invocation, obtenue grâce à une gemme trouvée au fil du voyage. Rendu à la vie par la Keyblade, il s'installe sur l'épaule de Sora.\n\nAppelé au combat, il crache des boules de feu sur les ennemis proches tout en couvrant Sora de commentaires exaspérés. Cette invocation reste l'une des plus utiles contre les groupes serrés. Le procédé permet à Kingdom Hearts d'intégrer des personnages Disney sans consacrer un monde entier à chaque film, contrainte forte dans un jeu déjà très dense.",
          "The Land of Dragons does not yet exist as a visitable world, but Mushu appears as a summon, obtained from a gem found during the journey. Restored to life by the Keyblade, he perches on Sora's shoulder.\n\nCalled into battle, he spits fireballs at nearby enemies while showering Sora with exasperated commentary. The summon remains one of the most useful against tight groups. The device lets Kingdom Hearts include Disney characters without devoting a whole world to each film, a strong constraint in an already dense game.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Au Pays des Dragons, Mushu veille sur Mulan tout au long de son imposture et se souvient d'avoir déjà croisé Sora, ce qui donne lieu à une réunion bruyante. Il tient le rôle de conseiller catastrophique du film, poussant sa protégée à des bravades qui manquent la faire démasquer.\n\nIl intervient aussi en combat : Sora peut déclencher avec lui des attaques enflammées, et son souffle sert lors des affrontements contre Shan-Yu et le Storm Rider. Fidèle à son personnage, Mushu s'attribue une bonne part du mérite final. Sa présence assure la continuité entre l'invocation du premier jeu et le monde complet de Kingdom Hearts II, cas rare dans la série.",
          "In the Land of Dragons, Mushu watches over Mulan throughout her imposture and remembers having met Sora before, which makes for a noisy reunion. He plays the film's role of disastrous adviser, pushing his charge into bravado that nearly gets her exposed.\n\nHe also joins in combat: Sora can trigger fiery attacks with him, and his breath comes into play against Shan-Yu and the Storm Rider. True to character, Mushu claims a good share of the final credit. His presence ensures continuity between the first game's summon and the full world of Kingdom Hearts II, a rare case in the series.",
        ),
      },
    ],
    trivia: [
      L("Mushu est l'un des rares personnages à devenir une invocation avant que son monde d'origine ne soit visitable dans la série.", "Mushu is one of the few characters to become a summon before his home world is visitable in the series."),
      L("Eddie Murphy l'interprétait au cinéma ; c'est Mark Moseley qui reprend le rôle dans les jeux.", "Eddie Murphy played him in the film; Mark Moseley takes over the role in the games."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Mushu", url: "https://kingdomhearts.fandom.com/wiki/Mushu" }],
  },

  // ─────────────────────────── Jack Sparrow ────────────────────────────
  "jack-sparrow": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Jack Sparrow vient de Pirates des Caraïbes : la Malédiction du Black Pearl (2003), premier film en prises de vues réelles adapté par la série. Son arrivée bouleverse l'esthétique de Kingdom Hearts II : Port Royal utilise des modèles réalistes, très éloignés du style cartoon des autres mondes Disney.\n\nLe personnage garde sa démarche titubante, son opportunisme et son goût du marchandage. Johnny Depp ne prête pas sa voix aux jeux : c'est James Arnold Taylor qui l'interprète en anglais. Kingdom Hearts en fait un allié instable, tenté à plusieurs reprises par l'or maudit et par la Keyblade elle-même, ce qui en fait l'un des rares compagnons Disney dont Sora doit surveiller les intentions.",
          "Jack Sparrow comes from Pirates of the Caribbean: The Curse of the Black Pearl (2003), the first live-action film the series adapted. His arrival upends the look of Kingdom Hearts II: Port Royal uses realistic models, far removed from the cartoon style of the other Disney worlds.\n\nThe character keeps his staggering gait, his opportunism and his taste for haggling. Johnny Depp does not voice the games: James Arnold Taylor plays him in English. Kingdom Hearts makes him an unstable ally, tempted more than once by the cursed gold and by the Keyblade itself, which makes him one of the few Disney companions whose intentions Sora has to watch.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Sora arrive à Port Royal alors que l'équipage maudit de Barbossa enlève Elizabeth Swann. Jack Sparrow, qui veut récupérer son navire, s'associe au groupe et à Will Turner. La malédiction de l'or aztèque transforme les pirates en squelettes sous le clair de lune, ce qui rend les combats impossibles à gagner hors des zones éclairées.\n\nLe groupe gagne l'Île de la Muerta et affronte Barbossa dans sa grotte au trésor ; la malédiction est levée lorsque les médaillons sont rendus et le sang de Will versé.\n\nLors de la seconde visite, Luxord dérobe le coffre de médaillons et un Sans-cœur, le Grim Reaper, s'empare de l'or pour devenir invulnérable. Jack, de nouveau maudit, se bat avec Sora à bord du Black Pearl et de l'Interceptor jusqu'à la destruction du monstre. Il conserve à la fin un médaillon, incapable de résister à la tentation.",
          "Sora reaches Port Royal as Barbossa's cursed crew abducts Elizabeth Swann. Jack Sparrow, who wants his ship back, teams up with the group and with Will Turner. The Aztec gold's curse turns the pirates into skeletons under moonlight, making fights unwinnable outside lit areas.\n\nThe group reaches Isla de Muerta and faces Barbossa in his treasure cave; the curse is lifted when the medallions are returned and Will's blood is spilled.\n\nOn the second visit, Luxord steals the chest of medallions and a Heartless, the Grim Reaper, takes the gold to become invulnerable. Jack, cursed again, fights with Sora aboard the Black Pearl and the Interceptor until the monster is destroyed. He keeps a medallion at the end, unable to resist temptation.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Kingdom Hearts III situe les Caraïbes à l'époque de Jusqu'au bout du monde. Sora, Donald et Dingo rejoignent Barbossa, Will et Elizabeth pour aller chercher Jack dans l'antre de Davy Jones, où le pirate est retenu avec son navire échoué sur le sable blanc.\n\nDe retour dans le monde des vivants, Jack reprend le Black Pearl et navigue entre les îles, en composant avec ses alliés autant qu'avec ses créanciers. Le Kraken et le Hollandais Volant menacent la flotte, et Luxord, membre de l'Organisation XIII, rôde sous une identité de pirate.\n\nLa bataille finale se joue dans un maelström, où le Black Pearl affronte le vaisseau de Davy Jones tandis que Will et Elizabeth se marient en plein combat. Sora repousse le Sans-cœur né de Davy Jones, et Jack repart en quête d'un nouveau trésor, fidèle à lui-même.",
          "Kingdom Hearts III sets the Caribbean in the era of At World's End. Sora, Donald and Goofy join Barbossa, Will and Elizabeth to fetch Jack from Davy Jones' Locker, where the pirate is stranded with his ship beached on white sand.\n\nBack among the living, Jack takes the Black Pearl again and sails between the islands, dealing with his allies as much as with his creditors. The Kraken and the Flying Dutchman threaten the fleet, and Luxord, a member of Organization XIII, prowls under a pirate's identity.\n\nThe final battle plays out in a maelstrom, where the Black Pearl faces Davy Jones' ship while Will and Elizabeth marry in the middle of the fight. Sora drives back the Heartless born of Davy Jones, and Jack sets off after a new treasure, true to form.",
        ),
      },
    ],
    trivia: [
      L("James Arnold Taylor double Jack Sparrow dans les jeux ; Johnny Depp n'a jamais prêté sa voix à la série.", "James Arnold Taylor voices Jack Sparrow in the games; Johnny Depp has never lent his voice to the series."),
      L("Port Royal est le premier monde de Kingdom Hearts tiré d'un film en prises de vues réelles, avec des modèles réalistes inédits dans la série.", "Port Royal is the first Kingdom Hearts world drawn from a live-action film, with realistic models new to the series."),
      L("Dans Kingdom Hearts III, la navigation en haute mer et les combats navals des Caraïbes constituent l'un des plus vastes espaces ouverts de la saga.", "In Kingdom Hearts III, the open-sea sailing and naval battles of the Caribbean form one of the saga's largest open spaces."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Jack Sparrow", url: "https://kingdomhearts.fandom.com/wiki/Jack_Sparrow" }],
  },

  // ────────────────────────────── Barbossa ─────────────────────────────
  "barbossa": {
    sections: [
      {
        title: L("Origines", "Origins"),
        text: L(
      "Hector Barbossa, antagoniste de La Malédiction du Black Pearl (2003), a pris le navire de Jack Sparrow par une mutinerie avant de tomber sous la malédiction de l'or aztèque : lui et son équipage sont des morts-vivants que le clair de lune révèle sous forme de squelettes. Kingdom Hearts II reprend cette intrigue presque intégralement.\n\nLe jeu lui ajoute une couche propre à la série : Barbossa comprend vite l'intérêt des Sans-cœur et traite avec Pat Hibulaire. Comme dans les films, il passe ensuite du camp des adversaires à celui des alliés de circonstance, ce que Kingdom Hearts III met en scène à son tour. Son rapport à Jack Sparrow, mélange de rivalité et de respect résigné, reste le moteur de tous ses choix.",
          "Hector Barbossa, antagonist of The Curse of the Black Pearl (2003), took Jack Sparrow's ship by mutiny before falling under the Aztec gold's curse: he and his crew are undead whom moonlight reveals as skeletons. Kingdom Hearts II reuses that plot almost in full.\n\nThe game adds a layer of its own: Barbossa quickly grasps the usefulness of the Heartless and deals with Pete. As in the films, he then shifts from enemy to ally of convenience, which Kingdom Hearts III stages in turn. His relationship with Jack Sparrow, a mix of rivalry and resigned respect, remains the engine of all his choices.",
        ),
      },
      {
        game: "kingdom-hearts-ii",
        text: L(
      "Barbossa fait enlever Elizabeth Swann, dont il croit qu'elle porte le sang nécessaire pour lever la malédiction, et l'emmène à l'Île de la Muerta. Pat Hibulaire lui rend visite et lui vante les Sans-cœur, qu'il finit par employer contre Sora.\n\nL'affrontement dans la grotte au trésor se joue à la lumière : sous les rayons de lune, Barbossa devient un squelette invulnérable, et Sora doit l'attirer dans l'ombre ou détruire les sources de clarté pour le blesser. Vaincu au moment où la malédiction se rompt, il tombe enfin mortel. Sa défaite laisse le Black Pearl à Jack Sparrow, avant que la seconde visite du monde ne ramène les médaillons maudits entre les mains d'un Sans-cœur.",
          "Barbossa has Elizabeth Swann abducted, believing she carries the blood needed to lift the curse, and takes her to Isla de Muerta. Pete visits him and talks up the Heartless, which he eventually uses against Sora.\n\nThe confrontation in the treasure cave hinges on light: under the moonbeams Barbossa becomes an invulnerable skeleton, and Sora must lure him into shadow or destroy the light sources to wound him. Beaten at the very moment the curse breaks, he falls mortal at last. His defeat leaves the Black Pearl to Jack Sparrow, before the world's second visit puts the cursed medallions back into a Heartless' hands.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Ramené à la vie, Barbossa commande de nouveau le Black Pearl lorsque Sora arrive dans les Caraïbes, à l'époque de Jusqu'au bout du monde. Il participe à l'expédition qui va tirer Jack Sparrow de l'antre de Davy Jones, moins par amitié que par intérêt.\n\nLes deux capitaines se disputent le navire tout au long de l'aventure, avant de faire cause commune contre le Hollandais Volant. Barbossa se bat aux côtés de Sora lors de la bataille du maelström, où la flotte des pirates affronte celle de Davy Jones. Il termine l'épisode fidèle à sa nature : allié tant que l'alliance sert ses intérêts, et prêt à reprendre le Black Pearl à la première occasion.",
          "Brought back to life, Barbossa commands the Black Pearl again when Sora reaches the Caribbean in the era of At World's End. He takes part in the expedition that pulls Jack Sparrow out of Davy Jones' Locker, less out of friendship than out of interest.\n\nThe two captains squabble over the ship throughout the adventure before making common cause against the Flying Dutchman. Barbossa fights beside Sora in the maelstrom battle, where the pirate fleet faces Davy Jones'. He ends the game true to his nature: an ally for as long as the alliance serves him, and ready to take the Black Pearl back at the first opportunity.",
        ),
      },
    ],
    trivia: [
      L("La malédiction de l'or aztèque modifie les règles de combat de Port Royal : sous la lune, les pirates sont invulnérables.", "The Aztec gold curse changes Port Royal's combat rules: under the moon, the pirates are invulnerable."),
      L("Barbossa est l'un des rares personnages Disney à passer d'adversaire à allié de Sora d'un épisode à l'autre.", "Barbossa is one of the few Disney characters to go from Sora's opponent to his ally between games."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Barbossa", url: "https://kingdomhearts.fandom.com/wiki/Barbossa" }],
  },
};
