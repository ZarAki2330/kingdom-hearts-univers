import type { EntryLore, LocalizedText } from "../types";

const L = (fr: string, en: string): LocalizedText => ({ fr, en });

/**
 * Histoire détaillée d'un troisième ensemble de Keyblades : les armes de mondes de
 * Kingdom Hearts III, les Keyblades personnelles des Wayfinders dans Birth by Sleep,
 * et l'arsenal de Re:coded et Dream Drop Distance.
 * Deux sections par entrée : apparence et symbolique, puis le jeu où on l'obtient.
 */
export const lore: Record<string, EntryLore> = {
  // ═══════════════════════════ Kingdom Hearts III ═══════════════════════════
  "heros-origin": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Genèse héroïque est une Keyblade de bronze et d'or dont la lame reprend les colonnes et les frises d'un temple grec. Sa garde forme deux volutes évoquant les cornes d'un casque de guerrier, ses dents dessinent une torche stylisée, et son porte-clés est le médaillon d'Hercule, le même emblème que portaient déjà Écusson du Héros et Olympia dans les épisodes précédents.\n\nLa Keyblade renvoie tout entière à l'Olympe et au parcours d'Hercule : le demi-dieu qui doit prouver sa valeur pour retrouver sa place, thème que Sora fait sien depuis que Yen Sid lui a repris son pouvoir. Son nom, « l'origine du héros », désigne aussi bien le point de départ d'Hercule que celui de Sora, obligé de tout réapprendre avant de mériter à nouveau le titre de Maître.",
          "Hero's Origin is a bronze-and-gold Keyblade whose blade reuses the columns and friezes of a Greek temple. Its guard forms two scrolls suggesting the horns of a warrior's helmet, its teeth trace a stylised torch, and its keychain is Hercules's medallion, the same emblem already borne by Hero's Crest and Olympia in earlier games.\n\nThe Keyblade points entirely to Olympus and to Hercules's journey: the demigod who must prove his worth to regain his place, a theme Sora has made his own since Yen Sid stripped him of his power. Its name, the hero's origin, names both Hercules's starting point and Sora's, forced to relearn everything before he can deserve the title of Master again.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Genèse héroïque est la première Keyblade que Sora obtient dans Kingdom Hearts III, à l'issue du passage sur l'Olympe. Après avoir gravi le Mont Olympe, aidé Hercule à repousser les Titans lâchés par Hadès et sauvé Mégara, Sora reçoit l'arme comme récompense de ce monde d'ouverture, qui sert aussi de long tutoriel au nouveau système de combat.\n\nElle est nettement orientée force (5 en force pour 1 en magie) et accorde la capacité Défense +. Sa transformation, le Bouclier de Contre, change la Keyblade en un large bouclier rond qui absorbe les coups puis les renvoie, et se conclut par une charge dévastatrice. C'est la première démonstration du système de transformations de l'épisode, et une arme précieuse pendant toute la première moitié de l'aventure, du Bois des Ténèbres à la Boîte à Jouets.",
          "Hero's Origin is the first Keyblade Sora obtains in Kingdom Hearts III, at the end of the Olympus chapter. After climbing Mount Olympus, helping Hercules drive back the Titans unleashed by Hades and saving Megara, Sora receives the weapon as the reward of this opening world, which doubles as a long tutorial for the new combat system.\n\nIt leans heavily toward strength (5 strength against 1 magic) and grants the Defender ability. Its formchange, Counter Shield, turns the Keyblade into a wide round shield that soaks up blows and throws them back, ending in a devastating charge. It is the first demonstration of the game's formchange system, and a valuable weapon through the whole first half of the adventure, from the Dark World to the Toy Box.",
        ),
      },
    ],
    trivia: [
      L("Elle est la troisième Keyblade de l'Olympe à porter le médaillon d'Hercule, après Olympia et Écusson du Héros.", "It is the third Olympus Keyblade to bear Hercules's medallion, after Olympia and Hero's Crest."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hero's Origin", url: "https://kingdomhearts.fandom.com/wiki/Hero%27s_Origin" }],
  },

  "shooting-star": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Étoile Filante est une Keyblade élancée aux teintes jaunes, bleues et blanches, dont la lame évoque une traînée lumineuse traversant le ciel. Sa garde bleue s'ouvre en deux arcs, ses dents forment une étoile à cinq branches et son porte-clés est lui aussi une petite étoile, en écho au motif qui parcourt toute la saga, de la Bonne Étoile aux fruits Paopu.\n\nSon esthétique la rattache à la Cité du Crépuscule et à la Tour Mystérieuse, ces lieux de passage entre deux étapes du voyage. L'étoile filante est le symbole du vœu, mais aussi, dans Kingdom Hearts, de ces mondes lointains que Sora aperçoit dans le ciel : chaque étoile est un monde, et chaque étoile qui s'éteint un monde englouti par les ténèbres.",
          "Shooting Star is a slender Keyblade in yellow, blue and white whose blade suggests a trail of light crossing the sky. Its blue guard opens into two arcs, its teeth form a five-pointed star and its keychain is another small star, echoing the motif that runs through the whole saga, from the Wishing Star to the paopu fruit.\n\nIts look ties it to Twilight Town and the Mysterious Tower, those in-between places that sit between two stages of the journey. The shooting star is the symbol of a wish, but also, in Kingdom Hearts, of the distant worlds Sora sees in the night sky: every star is a world, and every star that goes out a world swallowed by darkness.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora reçoit Étoile Filante des mains de Yen Sid lorsqu'il revient à la Tour Mystérieuse après l'Olympe, avant de repartir explorer les nouveaux mondes. C'est donc la seconde Keyblade de l'aventure, et le complément exact de la première : là où Genèse héroïque mise tout sur la force, Étoile Filante est orientée magie et offre la capacité MP +, qui accélère la régénération des points de magie.\n\nSes deux transformations en font l'arme à distance du début de partie : les Pistolets Doubles arrosent les ennemis de projectiles rapides, puis le Cyclone Magique se change en canon qui tire de lourdes salves téléguidées. Elle reste utile bien au-delà de son monde d'origine, notamment contre les vagues de Sans-cœur du Royaume de Corona et de la Boîte à Jouets, où garder ses distances vaut mieux que frapper au corps à corps.",
          "Sora receives Shooting Star from Yen Sid when he returns to the Mysterious Tower after Olympus, before setting out for the new worlds. It is therefore the adventure's second Keyblade, and the exact complement of the first: where Hero's Origin bets everything on strength, Shooting Star leans on magic and grants MP Haste, which speeds up magic-point recovery.\n\nIts two formchanges make it the early game's ranged weapon: the Double Arrowguns shower enemies with fast projectiles, then the Magic Launcher becomes a cannon firing heavy homing salvoes. It stays useful well beyond its home world, especially against the Heartless waves of the Kingdom of Corona and the Toy Box, where keeping your distance beats trading blows up close.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Shooting Star", url: "https://kingdomhearts.fandom.com/wiki/Shooting_Star" }],
  },

  "classic-tone": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Son classique est entièrement dessinée en noir et blanc, avec le trait épais et les formes rondes des dessins animés des années 1920 et 1930. Sa lame ressemble à un instrument de musique, sa garde à une note, et l'ensemble semble sorti d'une pellicule rayée, jusqu'aux petits éclats de lumière qui l'entourent.\n\nElle est un hommage direct aux débuts de Mickey Mouse, de Steamboat Willie aux courts métrages muets, et prolonge la tradition des Keyblades « rétro » de la saga, après Monochrome dans Kingdom Hearts II. Son nom japonais évoque des « notes classiques » : la musique est ici la clé, puisque ces courts métrages devaient autant à leurs partitions qu'à leur animation. Elle célèbre donc l'origine même de Disney, à l'autre extrémité de la ligne du temps par rapport aux mondes en images de synthèse de Kingdom Hearts III.",
          "Classic Tone is drawn entirely in black and white, with the thick lines and round shapes of the cartoons of the 1920s and 1930s. Its blade resembles a musical instrument, its guard a note, and the whole thing looks lifted from a scratched reel of film, down to the little flecks of light around it.\n\nIt is a direct tribute to Mickey Mouse's beginnings, from Steamboat Willie to the silent shorts, and continues the series' tradition of retro Keyblades after Monochrome in Kingdom Hearts II. Its Japanese name evokes classic notes: music is the key here, since those shorts owed as much to their scores as to their animation. It celebrates the very origin of Disney, at the opposite end of the timeline from the CG worlds of Kingdom Hearts III.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Son classique s'obtient dans Kingdom Hearts III en jouant au Classic Kingdom, la collection de mini-jeux en noir et blanc que Sora débloque sur son téléphone au fil de l'aventure : il faut atteindre un score suffisant dans chacun des vingt-trois titres, dispersés dans presque tous les mondes. C'est donc une récompense de complétionniste, qui n'intervient pas dans le récit principal mais couronne une longue collecte parallèle.\n\nStatistiquement, elle figure parmi les meilleures Keyblades du jeu, avec un profil équilibré nettement tourné vers la magie et la capacité MP de secours, qui permet de continuer à lancer des sorts une fois la jauge vidée. Sa transformation, le Bazooka Boum, la change en marteau démesuré puis en canon, dans une gerbe d'effets sonores de cartoon. Elle reste compétitive jusqu'au Nécropole des Keyblades et au combat final contre le Maître Xehanort.",
          "Classic Tone is obtained in Kingdom Hearts III by playing the Classic Kingdom, the collection of black-and-white mini-games Sora unlocks on his phone as the adventure goes on: you must reach a set score in each of the twenty-three titles, scattered across almost every world. It is therefore a completionist's reward, absent from the main story but crowning a long side hunt.\n\nStatistically it ranks among the game's best Keyblades, with a balanced profile tilted toward magic and the MP Haste ability, which keeps you casting once the gauge runs dry. Its formchange, the Boom Hammer, turns it into an oversized mallet and then a cannon, in a burst of cartoon sound effects. It stays competitive all the way to the Keyblade Graveyard and the final battle against Master Xehanort.",
        ),
      },
    ],
    trivia: [
      L("Les mini-jeux du Classic Kingdom reprennent de vrais courts métrages de Mickey, dont Steamboat Willie et Le Ballon de Mickey.", "The Classic Kingdom mini-games are based on real Mickey shorts, including Steamboat Willie and The Karnival Kid."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Classic Tone", url: "https://kingdomhearts.fandom.com/wiki/Classic_Tone" }],
  },

  "favorite-deputy": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Favorite Deputy a tout du jouet : sa lame est en bois peint, sa garde reprend le motif de vachette du gilet de Woody, ses dents dessinent l'étoile de shérif que le cow-boy porte à la poitrine, et une aile blanche et violette de Buzz l'Éclair se déploie sur le côté. Son porte-clés est la casquette d'Andy, l'enfant dont le nom est écrit sous la semelle de chaque jouet.\n\nTout y renvoie donc à la Boîte à Jouets et à Toy Story : la loyauté des jouets envers leur enfant, et le titre de « shérif adjoint » que Woody décernerait à un ami de confiance. L'aspect volontairement bricolé de l'arme rappelle aussi que, dans ce monde, Sora, Donald et Dingo sont eux-mêmes devenus des figurines articulées.",
          "Favorite Deputy is a toy through and through: its blade is painted wood, its guard reuses the cowhide pattern of Woody's vest, its teeth trace the sheriff's star pinned to the cowboy's chest, and one of Buzz Lightyear's white-and-purple wings unfolds at its side. Its keychain is Andy's cap, the boy whose name is written under every toy's boot.\n\nEverything about it points back to the Toy Box and to Toy Story: the toys' loyalty to their child, and the rank of deputy Woody would hand a trusted friend. The deliberately handmade look of the weapon is also a reminder that in this world Sora, Donald and Goofy have themselves become poseable action figures.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora reçoit Favorite Deputy en quittant la Boîte à Jouets, après avoir retrouvé les jouets enlevés par Young Xehanort, exploré le magasin Galaxy Toys et abattu le grand Sans-cœur qui en tenait la galerie. Le monde marque l'un des premiers affrontements de Kingdom Hearts III contre un membre de la nouvelle Organisation, et l'arme en est le trophée.\n\nSes statistiques penchent du côté de la force, et sa capacité Chance augmente le taux d'apparition des objets rares lâchés par les ennemis, ce qui en fait l'arme de choix pour préparer la synthèse chez les Mogs. Ses deux transformations sont franchement physiques : le Marteau Géant écrase les adversaires par le haut, puis la Perceuse Punch enchaîne les coups en tournant, redoutablement efficace contre les groupes serrés et les gros ennemis immobiles.",
          "Sora receives Favorite Deputy on leaving the Toy Box, after finding the toys abducted by Young Xehanort, exploring the Galaxy Toys store and bringing down the huge Heartless that held its atrium. The world stages one of Kingdom Hearts III's first confrontations with a member of the new Organization, and the weapon is its trophy.\n\nIts stats lean toward strength, and its Lucky Strike ability raises the rate of rare item drops from enemies, which makes it the weapon of choice when preparing synthesis at the Moogle shop. Both formchanges are frankly physical: the Hyper Hammer crushes foes from above, then the Drill Punch chains spinning blows, fearsomely effective against tight crowds and large stationary enemies.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Favorite Deputy", url: "https://kingdomhearts.fandom.com/wiki/Favorite_Deputy" }],
  },

  "crystal-snow": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Crystal Snow semble taillée dans la glace : sa lame translucide, bleutée et à facettes, paraît sculptée par la magie d'Elsa, et des flocons de neige stylisés forment sa garde comme ses dents. Le manche évoque les motifs nordiques d'Arendelle, et le porte-clés reprend la silhouette d'Olaf, le bonhomme de neige né du même pouvoir.\n\nL'arme entière tient de La Reine des Neiges : la glace comme don et comme fardeau, la solitude d'Elsa dans son palais des montagnes, et cette beauté cristalline qui peut aussi blesser. Son nom associe le cristal à la neige, deux formes du même élément, l'une ordonnée et l'autre libre, exactement le partage entre la sœur qui se contient et celle qui se laisse aller.",
          "Crystal Snow looks carved out of ice: its translucent, faceted blue blade seems shaped by Elsa's magic, and stylised snowflakes form both its guard and its teeth. The handle recalls the Nordic motifs of Arendelle, and the keychain takes the shape of Olaf, the snowman born of that same power.\n\nThe whole weapon belongs to Frozen: ice as gift and as burden, Elsa's solitude in her mountain palace, and that crystalline beauty which can also wound. Its name pairs crystal with snow, two forms of one element, one ordered and one free, exactly the divide between the sister who holds herself in and the one who lets go.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora obtient Crystal Snow à la fin d'Arendelle, après avoir traversé la montagne du Nord et le labyrinthe de glace, aidé Anna et Kristoff à rejoindre Elsa, et affronté le gigantesque loup de givre né des ténèbres semées par Larxene. Le monde s'achève sur le retour de l'été et la réconciliation des deux sœurs.\n\nLa Keyblade est franchement orientée magie et porte la capacité Protection Glace, qui réduit les dégâts de cet élément. Ses deux transformations, les Griffes de Glace puis les Lames de Glace, changent l'arme en patins et en lames tranchantes qui permettent de glisser à toute vitesse en taillant dans les rangs ennemis, avec des finish élémentaires très puissants. C'est la meilleure Keyblade de glace de Kingdom Hearts III, et une arme de choix pour les joueurs qui privilégient les sorts.",
          "Sora obtains Crystal Snow at the end of Arendelle, after crossing the North Mountain and the ice labyrinth, helping Anna and Kristoff reach Elsa, and facing the giant frost wolf born of the darkness Larxene sowed. The world closes on the return of summer and the reconciliation of the two sisters.\n\nThe Keyblade is squarely magic-oriented and carries Freeze Protection, which cuts damage from that element. Its two formchanges, Blizzard Claws then Blizzard Blades, turn the weapon into skates and cutting edges that let Sora glide at speed while slicing through enemy ranks, with very powerful elemental finishers. It is Kingdom Hearts III's best ice Keyblade, and a prime choice for spell-focused players.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Crystal Snow", url: "https://kingdomhearts.fandom.com/wiki/Crystal_Snow" }],
  },

  "hunny-spout": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Hunny Spout est une Keyblade jaune et dorée dont la lame se termine par un large pot de miel renversé, prêt à couler. Des alvéoles de rayon de miel couvrent la garde, de petites abeilles ornent le manche, et le porte-clés est une figurine de Winnie l'ourson. L'ensemble est rond, épais et joyeux, à l'opposé des armes anguleuses de la fin du jeu.\n\nElle est l'héritière directe de Doux Souvenir, la Keyblade de la Forêt des Rêves Bleus dans Kingdom Hearts II, et reprend la même idée : un monde qui n'est pas menacé par les Sans-cœur mais par l'oubli. La Forêt des Rêves Bleus n'existe qu'à l'intérieur d'un livre confié à Merlin, et son enjeu est toujours le même : ne pas laisser disparaître les souvenirs d'enfance de ceux qu'on aime.",
          "Hunny Spout is a yellow-and-gold Keyblade whose blade ends in a wide honey pot tipped over and about to pour. Honeycomb cells cover the guard, small bees decorate the handle, and the keychain is a figurine of Winnie the Pooh. The whole thing is round, thick and cheerful, the opposite of the game's angular late-game weapons.\n\nIt is the direct heir of Sweet Memories, the Hundred Acre Wood Keyblade of Kingdom Hearts II, and carries the same idea: a world threatened not by the Heartless but by forgetting. The Hundred Acre Wood exists only inside a book entrusted to Merlin, and its stake is always the same: not letting the childhood memories of those we love disappear.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Dans Kingdom Hearts III, la Forêt des Rêves Bleus est un monde annexe que Sora retrouve dans le livre gardé par Merlin, à la Tour Mystérieuse. Le récit y est court : Winnie a oublié Sora, et le monde se remet en place au fil de mini-jeux de récolte dans le potager de Coco Lapin. Hunny Spout est la récompense de ce passage facultatif.\n\nÉquilibrée mais tournée vers la magie, elle offre la capacité Récolte, qui augmente la quantité de matériaux obtenus sur les ennemis, ce qui en fait, avec Favorite Deputy, l'un des outils de farming du jeu. Ses transformations font honneur à son thème : les Pistolets à Miel arrosent les adversaires de projectiles collants qui les immobilisent, puis le Lance-Miel tire de lourdes bulles explosives. Une Keyblade de soutien, à distance, aussi drôle qu'utile.",
          "In Kingdom Hearts III, the Hundred Acre Wood is a side world Sora finds again inside the book kept by Merlin at the Mysterious Tower. Its story is short: Pooh has forgotten Sora, and the world puts itself back together through harvesting mini-games in Rabbit's garden. Hunny Spout is the reward for that optional chapter.\n\nBalanced but magic-leaning, it grants Harvester, which increases the amount of synthesis material dropped by enemies, making it, alongside Favorite Deputy, one of the game's farming tools. Its formchanges honour its theme: the Hunny Blasters spray foes with sticky projectiles that pin them down, then the Hunny Launcher fires heavy exploding bubbles. A ranged support Keyblade, as funny as it is useful.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Hunny Spout", url: "https://kingdomhearts.fandom.com/wiki/Hunny_Spout" }],
  },

  "nano-gear": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Nano Gear est une Keyblade rouge et violette aux formes lisses et arrondies, qui reprend l'armure de combat de Baymax : mêmes plaques laquées, mêmes articulations visibles, même silhouette rassurante malgré l'équipement. Sa garde évoque les microbots d'Hiro, ces petits modules noirs capables de s'assembler en n'importe quelle forme, et son porte-clés est la tête de Baymax, réduite à deux points et un trait.\n\nElle résume San Fransokyo et Les Nouveaux Héros : la technologie comme prolongement du deuil et de l'amitié, un robot de soins transformé en héros par un adolescent qui ne sait pas quoi faire de sa peine. Le nom même de l'arme, « nano », renvoie à cette idée d'une puissance faite de milliers d'unités minuscules travaillant ensemble.",
          "Nano Gear is a red-and-purple Keyblade with smooth, rounded shapes that reuse Baymax's battle armour: the same lacquered plates, the same visible joints, the same reassuring silhouette despite the gear. Its guard evokes Hiro's microbots, small black modules able to assemble into any shape, and its keychain is Baymax's face, reduced to two dots and a line.\n\nIt sums up San Fransokyo and Big Hero 6: technology as an extension of grief and friendship, a healthcare robot turned hero by a teenager who does not know what to do with his pain. The weapon's name, nano, points to that same idea of power made of thousands of tiny units working together.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "San Fransokyo est le dernier monde Disney de Kingdom Hearts III, et Nano Gear en est la récompense. Sora la reçoit après avoir parcouru la ville de nuit avec Hiro et son équipe, découvert les Sans-cœur générés par les données de Baymax, et vaincu la version sombre du robot que la nouvelle Organisation avait retournée contre ses amis, avant que le vrai Baymax ne soit restauré.\n\nSes statistiques sont équilibrées entre force et magie, et sa capacité Protection Étourdissement met Sora à l'abri des attaques qui le paralysent, précieuse dans les derniers combats. Sa transformation unique, Nano Bras, déploie autour de la Keyblade un essaim de microbots qui frappent en nuée, s'allongent pour atteindre des ennemis lointains et se referment en un poing géant. Elle arrive juste avant le Nécropole des Keyblades, au moment où l'arsenal de Sora est au complet.",
          "San Fransokyo is Kingdom Hearts III's last Disney world, and Nano Gear is its reward. Sora receives it after touring the night-time city with Hiro and his team, discovering the Heartless generated from Baymax's data, and defeating the dark version of the robot the new Organization had turned against his friends, before the real Baymax is restored.\n\nIts stats are balanced between strength and magic, and its Stun Protection ability shields Sora from paralysing attacks, precious in the closing fights. Its single formchange, Nano Arms, unfurls a swarm of microbots around the Keyblade that strike as a cloud, stretch out to reach distant enemies and close into a giant fist. It arrives just before the Keyblade Graveyard, at the point where Sora's arsenal is complete.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Nano Gear", url: "https://kingdomhearts.fandom.com/wiki/Nano_Gear" }],
  },

  "wheel-of-fate": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Wheel of Fate est une Keyblade de bois sombre et de laiton dont la garde reprend la barre à roue d'un navire, tandis que la lame évoque un mât et ses cordages. Ses dents dessinent une ancre stylisée, un pavillon noir flotte le long du manche, et son porte-clés est la boussole de Jack Sparrow, celle qui n'indique pas le nord mais ce que son porteur désire le plus.\n\nElle est l'héritière d'Aile du Vent, la Keyblade de Port Royal dans Kingdom Hearts II, et transpose Pirates des Caraïbes : la mer comme destin, la roue du gouvernail comme roue de la fortune. Le titre joue précisément sur ce double sens, entre la barre que l'on tient et le sort auquel on se soumet, thème central du monde consacré à la malédiction de Davy Jones.",
          "Wheel of Fate is a Keyblade of dark wood and brass whose guard reuses a ship's helm, while the blade suggests a mast and its rigging. Its teeth trace a stylised anchor, a black flag hangs along the handle, and its keychain is Jack Sparrow's compass, the one that points not north but to whatever its holder wants most.\n\nIt is the heir of Follow the Wind, the Port Royal Keyblade of Kingdom Hearts II, and transposes Pirates of the Caribbean: the sea as destiny, the ship's wheel as the wheel of fortune. The title plays exactly on that double meaning, between the helm you hold and the fate you submit to, the central theme of a world built around Davy Jones's curse.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Sora obtient Wheel of Fate à la fin des Caraïbes, le monde le plus vaste de Kingdom Hearts III, où il navigue librement d'île en île à bord du Black Pearl. La Keyblade lui revient après la longue bataille navale du maelström et la défaite de Davy Jones, ramené par les ténèbres et affronté aux côtés de Jack Sparrow, Will Turner et Elizabeth Swann.\n\nL'arme privilégie la force et une allonge exceptionnelle. Sa première transformation, Highwind, l'étire en une lance dont les coups perforants et les charges couvrent une grande distance, en clin d'œil aux dragons de Final Fantasy. La seconde, le Drapeau des Tempêtes, la change en hampe de pavillon qui balaye les ennemis en cercle et appelle vents et éclairs. Ces deux formes en font l'une des meilleures Keyblades de fin d'aventure pour tenir les ennemis à distance.",
          "Sora obtains Wheel of Fate at the end of The Caribbean, Kingdom Hearts III's largest world, where he sails freely from island to island aboard the Black Pearl. The Keyblade comes to him after the long naval battle in the maelstrom and the defeat of Davy Jones, brought back by darkness and fought alongside Jack Sparrow, Will Turner and Elizabeth Swann.\n\nThe weapon favours strength and exceptional reach. Its first formchange, Highwind, stretches it into a spear whose piercing strikes and charges cover great distance, a nod to Final Fantasy's dragoons. The second, Storm Flag, turns it into a flagpole that sweeps enemies in a circle and calls down wind and lightning. Those two forms make it one of the best late-game Keyblades for keeping foes at bay.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Wheel of Fate", url: "https://kingdomhearts.fandom.com/wiki/Wheel_of_Fate" }],
  },

  "grand-chef": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Grand Chef est une Keyblade blanche et argentée entièrement construite comme un ustensile de cuisine : sa lame est un manche de couvert poli, sa garde une casserole retournée, ses dents une fourchette et un couteau croisés, et le tout est ourlé de rouge comme le tablier d'un restaurant. Son porte-clés est une petite toque, ou Rémy lui-même selon les angles.\n\nElle célèbre le Bistrot que Rémy ouvre à la Cité du Crépuscule dans Kingdom Hearts III, seule intrusion de Ratatouille dans la saga. Le rat cuisinier n'a pas de monde à lui : il tient boutique dans un coin de la ville où Sora peut venir préparer des plats entre deux voyages. La Keyblade récompense donc une activité paisible, à mille lieues des combats, mais fidèle au message du film : n'importe qui peut cuisiner.",
          "Grand Chef is a white-and-silver Keyblade built entirely as a piece of kitchenware: its blade is a polished cutlery handle, its guard an upturned pan, its teeth a crossed fork and knife, and the whole is hemmed in red like a restaurant apron. Its keychain is a small toque, or Remy himself depending on the angle.\n\nIt celebrates the Bistro Remy opens in Twilight Town in Kingdom Hearts III, Ratatouille's only appearance in the series. The cooking rat has no world of his own: he keeps shop in a corner of the town where Sora can drop in to prepare dishes between journeys. The Keyblade therefore rewards a peaceful activity, far from any battle, yet faithful to the film's message: anyone can cook.",
        ),
      },
      {
        game: "kingdom-hearts-iii",
        text: L(
      "Grand Chef s'obtient au Bistrot de la Cité du Crépuscule, en réussissant toutes les recettes de Rémy avec la mention Excellent. Chaque plat se joue comme un petit exercice de rythme et de précision, et les ingrédients se récoltent dans les mondes, ce qui fait de cette Keyblade l'aboutissement d'une des plus longues quêtes annexes de Kingdom Hearts III.\n\nSes statistiques sont élevées et tournées vers la magie, à la hauteur de l'effort demandé. Sa transformation, la Poêle à Frire, change la Keyblade en un immense ustensile qui assomme les ennemis à coups de manche et les arrose de projectiles brûlants, avant un finish spectaculaire. Absurde et redoutable à la fois, elle figure parmi les armes préférées des joueurs pour la fin du jeu, y compris dans les défis de l'épisode additionnel Re Mind.",
          "Grand Chef is obtained at the Twilight Town Bistro, by completing every one of Remy's recipes with an Excellent rating. Each dish plays as a small exercise in rhythm and precision, and the ingredients are gathered across the worlds, which makes this Keyblade the culmination of one of Kingdom Hearts III's longest side quests.\n\nIts stats are high and magic-leaning, in proportion to the effort asked. Its formchange, the Frying Pan, turns the Keyblade into an enormous utensil that clubs enemies with its handle and showers them with scalding projectiles before a spectacular finisher. Absurd and formidable at once, it ranks among players' favourite endgame weapons, including for the challenges of the Re Mind add-on.",
        ),
      },
    ],
    trivia: [
      L("Rémy n'apparaît que dans ce Bistrot : Ratatouille n'a jamais eu de monde jouable dans la saga.", "Remy only appears in this Bistro: Ratatouille has never had a playable world in the series."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Grand Chef", url: "https://kingdomhearts.fandom.com/wiki/Grand_Chef" }],
  },

  // ═══════════════════════════ 358/2 Days ═══════════════════════════
  "kingdom-key-xion": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "La Keyblade de Xion est en tout point identique à la Chaîne Royale de Sora : lame argentée toute simple, garde carrée dorée, dents en forme de couronne et porte-clés à l'effigie de Mickey. Cette ressemblance n'est pas un hommage mais un symptôme, puisque Xion est une réplica façonnée à partir des souvenirs de Sora et que son arme n'est, au départ, qu'un reflet de la sienne.\n\nSa symbolique est donc celle du double et de l'emprunt : une jeune fille sans passé qui manie l'arme d'un garçon endormi, et dont le visage même change selon le regard de celui qui la contemple. Quand elle apprend enfin ce qu'elle est, la Keyblade cesse d'être une preuve d'existence pour devenir le rappel de ce qu'elle a pris à d'autres.",
          "Xion's Keyblade is identical in every detail to Sora's Kingdom Key: a plain silver blade, a square golden guard, crown-shaped teeth and the Mickey-emblem keychain. That resemblance is not a tribute but a symptom, since Xion is a replica shaped from Sora's memories and her weapon is, at first, no more than a reflection of his.\n\nIts symbolism is therefore one of doubling and borrowing: a girl with no past wielding the weapon of a sleeping boy, and whose very face changes with the eyes of whoever looks at her. When she finally learns what she is, the Keyblade stops being proof of her existence and becomes a reminder of what she took from others.",
        ),
      },
      {
        game: "358-2-days",
        text: L(
      "Dans 358/2 Days, Xion invoque cette Keyblade dès qu'elle parvient à se servir de son pouvoir, ce qui lui vaut d'être admise dans l'Organisation XIII aux côtés de Roxas. Elle en fait un usage classique au fil des missions, et l'arme est jouable dans le mode Mission du jeu, où elle sert d'équipement par défaut au personnage.\n\nSon orientation est parfaitement équilibrée, à l'image de la Chaîne Royale dont elle reprend le modèle : ni bonus de force ni bonus de magie marqués, une allonge moyenne, une arme sans spécialité. Le récit, lui, en fait tout autre chose : à mesure que Xion absorbe la puissance de Roxas, sa Keyblade cesse d'être une illusion et devient réelle, jusqu'au duel de la Cité du Crépuscule où Roxas doit l'affronter. À la mort de Xion, ce pouvoir retourne à Roxas, qui peut alors manier deux Keyblades.",
          "In 358/2 Days, Xion summons this Keyblade as soon as she manages to use her power, which earns her a place in Organization XIII alongside Roxas. She wields it plainly through her missions, and the weapon is playable in the game's Mission Mode, where it serves as the character's default equipment.\n\nIts orientation is perfectly balanced, like the Kingdom Key it copies: no marked strength or magic bonus, average reach, a weapon with no speciality. The story makes it something else entirely: as Xion absorbs Roxas's power, her Keyblade stops being an illusion and becomes real, up to the duel in Twilight Town where Roxas must face her. When Xion dies, that power returns to Roxas, who can then wield two Keyblades at once.",
        ),
      },
    ],
    trivia: [
      L("Xion réapparaît Keyblade en main au Nécropole des Keyblades dans Kingdom Hearts III, aux côtés de Roxas et d'Axel.", "Xion returns Keyblade in hand at the Keyblade Graveyard in Kingdom Hearts III, alongside Roxas and Axel."),
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Xion", url: "https://kingdomhearts.fandom.com/wiki/Xion" }],
  },

  // ═══════════════════════════ Birth by Sleep ═══════════════════════════
  "lost-memory": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Lost Memory est une Keyblade blanche et argentée, sobre et froide, dont la lame reprend la silhouette élancée de Vent d'Errance, l'arme personnelle de Ventus. La garde s'ouvre en deux ailes stylisées, les dents dessinent un motif net et anguleux, et l'ensemble donne l'impression d'une arme effacée, comme délavée.\n\nC'est précisément son propos : Ventus a perdu la mémoire à la Contrée du Départ, après que Xehanort a arraché les ténèbres de son cœur pour créer Vanitas, et il ne garde de son passé qu'un vide qu'il n'ose pas interroger. La Keyblade porte ce manque dans son nom comme dans sa couleur, celle d'une page blanche. Sa parenté de dessin avec Vent d'Errance rappelle que le garçon d'avant et celui d'aujourd'hui sont bien la même personne.",
          "Lost Memory is a white-and-silver Keyblade, spare and cold, whose blade reuses the slender silhouette of Wayward Wind, Ventus's personal weapon. The guard opens into two stylised wings, the teeth trace a crisp angular pattern, and the whole gives the impression of an erased weapon, as though washed out.\n\nThat is exactly its point: Ventus lost his memory at the Land of Departure, after Xehanort tore the darkness from his heart to create Vanitas, and all he keeps of his past is a blank he dares not question. The Keyblade carries that absence in its name as in its colour, the colour of an empty page. Its design kinship with Wayward Wind is a reminder that the boy from before and the boy of today are one person.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Lost Memory est une Keyblade exclusive au scénario de Ventus dans Birth by Sleep, obtenue en progressant dans son voyage, alors qu'il court après Terra à travers les mondes et croise sans cesse la route de Vanitas, qui le presse de se souvenir.\n\nEn jeu, elle est plus puissante que Vent d'Errance, sa Keyblade de départ, avec un bonus de magie appréciable qui convient au style rapide et aérien de Ventus. Comme toutes les Keyblades de Birth by Sleep, elle apporte surtout un Style de Combat particulier et une Attaque Ultime spécifique, qui remplacent l'idée de transformation des épisodes ultérieurs. Elle accompagne donc le joueur dans la seconde moitié d'un récit dont l'enjeu est justement de savoir ce que Ventus a oublié, et qui s'achève au Nécropole des Keyblades sur la naissance de la χ-blade.",
          "Lost Memory is a Keyblade exclusive to Ventus's episode in Birth by Sleep, obtained as his journey progresses, while he chases Terra across the worlds and keeps running into Vanitas, who urges him to remember.\n\nIn play it is stronger than Wayward Wind, his starting Keyblade, with a welcome magic bonus that suits Ventus's fast, airborne style. Like every Keyblade in Birth by Sleep, what it mainly brings is a particular Command Style and a specific Shotlock, which stand in for the formchanges of later games. It therefore accompanies the player through the second half of a story whose whole stake is what Ventus has forgotten, and which ends at the Keyblade Graveyard with the birth of the χ-blade.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Lost Memory", url: "https://kingdomhearts.fandom.com/wiki/Lost_Memory" }],
  },

  "chaos-ripper": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Chaos Ripper est une Keyblade noire et violette dont la lame, épaisse et dentelée, ressemble davantage à une arme de bourreau qu'à une clé. Sa garde est faite de pointes recourbées, ses dents évoquent une gueule ouverte, et des reflets rougeâtres parcourent le métal. Son porte-clés lui-même est anguleux et menaçant.\n\nSon dessin la rapproche ouvertement de la Vide Éternel, la Keyblade de Vanitas, et c'est tout le sens de l'objet : elle appartient à Terra, le plus fort des trois apprentis, celui que Xehanort travaille au corps depuis le début en lui répétant que les ténèbres ne sont qu'un pouvoir de plus. À mesure que Terra cède, ses Keyblades s'assombrissent, et Chaos Ripper est l'étape où le doute cesse d'être un doute.",
          "Chaos Ripper is a black-and-purple Keyblade whose thick, jagged blade looks more like an executioner's weapon than a key. Its guard is made of curved spikes, its teeth suggest an open maw, and reddish glints run through the metal. Even its keychain is angular and threatening.\n\nIts design openly recalls Void Gear, Vanitas's Keyblade, and that is the whole point of the object: it belongs to Terra, the strongest of the three apprentices, the one Xehanort has been working on from the start by repeating that darkness is only one more kind of power. As Terra gives ground, his Keyblades darken, and Chaos Ripper is the stage where doubt stops being doubt.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Chaos Ripper est réservée au scénario de Terra dans Birth by Sleep et s'obtient en avançant dans son histoire, au moment où son voyage l'a déjà conduit à user des ténèbres à plusieurs reprises, du Domaine Enchanté au Jardin Radieux.\n\nC'est l'une des Keyblades les plus brutales du jeu : son bonus de force figure parmi les plus élevés, au prix d'une magie très faible, ce qui colle exactement au style lourd et puissant de Terra. Elle favorise les Styles de Combat offensifs et les enchaînements écrasants, plutôt que les sorts. Le joueur la manie donc pendant la dernière partie du scénario, jusqu'à la confrontation du Nécropole des Keyblades et à la possession de Terra par le Maître Xehanort, qui fait de son corps le réceptacle de Terra-Xehanort.",
          "Chaos Ripper is restricted to Terra's episode in Birth by Sleep and is obtained by advancing through his story, at a point where his journey has already led him to use darkness several times, from Enchanted Dominion to Radiant Garden.\n\nIt is one of the game's most brutal Keyblades: its strength bonus is among the highest, at the cost of very weak magic, which matches Terra's heavy, powerful style exactly. It favours offensive Command Styles and crushing chains over spellcasting. The player therefore wields it through the last stretch of the episode, up to the confrontation at the Keyblade Graveyard and Terra's possession by Master Xehanort, who turns his body into the vessel known as Terra-Xehanort.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Chaos Ripper", url: "https://kingdomhearts.fandom.com/wiki/Chaos_Ripper" }],
  },

  "darkgnaw": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Darkgnaw est une Keyblade violette et noire hérissée de crocs : sa lame est bordée de pointes irrégulières, sa garde s'ouvre comme deux mâchoires, et ses dents évoquent la gueule d'un reptile. Le nom lui-même, littéralement « la morsure des ténèbres », insiste sur cette idée de quelque chose qui ronge.\n\nSon esthétique renvoie au Domaine Enchanté et à Maléfique, qui accueille Terra dans son donjon des Landes Interdites et lui souffle qu'il porte en lui une force qu'Eraqus lui interdit d'employer. Le dragon en lequel la sorcière se change est l'un des premiers grands emblèmes de ténèbres de la saga, et Darkgnaw en garde la silhouette. Dans la panoplie de Terra, elle marque le moment où la tentation devient une habitude, avant les armes plus sombres encore de la fin du récit.",
          "Darkgnaw is a purple-and-black Keyblade bristling with fangs: its blade is edged with irregular spikes, its guard opens like two jaws, and its teeth suggest a reptile's mouth. The name itself, literally the gnawing of darkness, stresses that idea of something eating away.\n\nIts look points to Enchanted Dominion and to Maleficent, who welcomes Terra into her keep at the Forbidden Mountain and whispers that he carries a strength Eraqus forbids him to use. The dragon the witch becomes is one of the saga's first great emblems of darkness, and Darkgnaw keeps its outline. Within Terra's arsenal it marks the point where temptation turns into habit, before the still darker weapons of the story's end.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Darkgnaw fait partie des Keyblades propres à Terra dans Birth by Sleep, obtenue au cours de son scénario. Elle se situe entre les armes équilibrées du début et Chaos Ripper, qui la remplace en fin de partie.\n\nComme les autres Keyblades de Terra, elle privilégie nettement la force au détriment de la magie, et convient aux Styles de Combat lourds et aux enchaînements de mêlée. Elle est aussi l'une des Keyblades du jeu à porter une teinte élémentaire de ténèbres dans ses effets, ce qui la rend utile contre les Nescients les plus résistants. Sur le plan du récit, elle accompagne Terra dans la partie de son voyage où il traque le Maître Xehanort de monde en monde, persuadé de faire ce qu'il faut, tandis qu'Aqua reçoit d'Eraqus l'ordre de le surveiller.",
          "Darkgnaw is one of the Keyblades exclusive to Terra in Birth by Sleep, obtained during his episode. It sits between the balanced weapons of the early game and Chaos Ripper, which replaces it later on.\n\nLike Terra's other Keyblades it clearly favours strength over magic, and suits heavy Command Styles and melee chains. It is also one of the game's Keyblades to carry a darkness element in its effects, which makes it useful against the tougher Unversed. In story terms it accompanies Terra through the stretch of his journey where he hunts Master Xehanort from world to world, convinced he is doing what must be done, while Aqua is ordered by Eraqus to keep watch over him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Darkgnaw", url: "https://kingdomhearts.fandom.com/wiki/Darkgnaw" }],
  },

"brightcrest": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Brightcrest est une Keyblade bleu clair et argentée, aux lignes douces et symétriques, qui prolonge le dessin de Pluie d'Étoiles, la Keyblade personnelle d'Aqua. Sa garde s'ouvre en deux arcs élégants, ses dents forment un motif en étoile, et son porte-clés reprend la forme du Wayfinder, le porte-bonheur en verre coloré qu'Aqua a fabriqué de ses mains pour Terra, Ventus et elle-même.\n\nCe porte-clés dit tout de l'arme : le Wayfinder est censé garantir que ceux qui le portent finiront toujours par se retrouver, et il traverse toute la saga, jusqu'aux mains de Sora. Brightcrest est donc la Keyblade de l'amitié promise, portée par celle des trois qui refusera le plus longtemps de croire que cette promesse a été rompue.",
          "Brightcrest is a light-blue and silver Keyblade with soft, symmetrical lines that continue the design of Rainfell, Aqua's personal weapon. Its guard opens into two elegant arcs, its teeth form a star pattern, and its keychain takes the shape of the Wayfinder, the coloured-glass charm Aqua made with her own hands for Terra, Ventus and herself.\n\nThat keychain says everything about the weapon: the Wayfinder is meant to guarantee that those who carry it will always find their way back to one another, and it runs through the whole saga, as far as Sora's hands. Brightcrest is thus the Keyblade of a promised friendship, borne by the one of the three who will refuse the longest to believe that promise broken.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Brightcrest s'obtient dans le scénario d'Aqua de Birth by Sleep, au fil de sa progression à travers les mondes Disney où elle croise sans cesse la trace de ses deux amis sans jamais les rattraper à temps.\n\nÉquilibrée entre force et magie, elle compte parmi les meilleures armes de son épisode et convient à toutes les situations, là où Crown Unlimit demande de jouer la magie. Elle favorise les Styles de Combat rapides d'Aqua et lui laisse une bonne allonge. Sur le plan du récit, elle est indissociable de la fin du jeu : Aqua confie Ventus endormi à la Contrée du Départ, transformée en Château de la Bougie, puis plonge dans les ténèbres pour sauver Terra, et son Wayfinder finira échoué sur une plage du Domaine des Ténèbres, où elle le retrouvera bien des années plus tard.",
          "Brightcrest is obtained in Aqua's episode of Birth by Sleep, as she works through the Disney worlds where she keeps crossing her friends' trail without ever catching up in time.\n\nBalanced between strength and magic, it ranks among her episode's best weapons and suits every situation, where Crown Unlimit asks you to commit to spellcasting. It favours Aqua's fast Command Styles and leaves her good reach. In story terms it is inseparable from the game's ending: Aqua entrusts the sleeping Ventus to the Land of Departure, reshaped into Castle Oblivion, then dives into darkness to save Terra, and her Wayfinder ends up washed onto a shore of the Realm of Darkness, where she finds it again many years later.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Brightcrest", url: "https://kingdomhearts.fandom.com/wiki/Brightcrest" }],
  },

  "royal-radiance": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Royal Radiance est une Keyblade blanche, or et bleu roi, dont la lame droite et lumineuse s'orne de rinceaux dorés. Sa garde évoque les hallebardes de la garde du Château Disney, ses dents dessinent une couronne, et son porte-clés porte l'emblème aux trois cercles de Mickey.\n\nElle appartient donc à l'imagerie du Roi et de son château : la lumière comme institution, la royauté comme devoir de protection. À l'époque de Birth by Sleep, Mickey n'est encore que l'apprenti de Yen Sid, mais il possède déjà sa Chaîne Royale D et court les mondes pour aider ceux qu'il croise ; Royal Radiance anticipe le souverain qu'il deviendra. C'est aussi l'une des rares Keyblades de l'épisode que les trois héros peuvent manier indifféremment, ce qui en fait un symbole commun plutôt qu'une arme personnelle.",
          "Royal Radiance is a white, gold and royal-blue Keyblade whose straight, luminous blade is decorated with gilt scrollwork. Its guard evokes the halberds of the Disney Castle guard, its teeth form a crown, and its keychain bears Mickey's three-circle emblem.\n\nIt therefore belongs to the imagery of the King and his castle: light as an institution, royalty as a duty of protection. At the time of Birth by Sleep, Mickey is still only Yen Sid's apprentice, but he already carries his Kingdom Key D and travels the worlds to help whoever he meets; Royal Radiance anticipates the sovereign he will become. It is also one of the episode's rare Keyblades all three heroes can wield alike, which makes it a shared symbol rather than a personal weapon.",
        ),
      },
      {
        game: "birth-by-sleep",
        text: L(
      "Royal Radiance ne s'obtient pas dans l'histoire principale mais dans l'Arène Mirage, le champ de bataille virtuel accessible depuis le menu de Birth by Sleep, en récompense des tournois de haut niveau. Elle est disponible pour Terra, Ventus et Aqua, contrairement à la plupart des Keyblades du jeu, réservées à un seul personnage.\n\nSes statistiques sont élevées dans les deux domaines, avec un profil équilibré qui la rend utilisable quel que soit le style du personnage joué. C'est l'une des meilleures armes accessibles avant les Keyblades ultimes de chaque scénario, et elle récompense les joueurs qui s'attaquent aux défis les plus exigeants de l'arène, souvent en coopération. Elle n'a pas de rôle narratif propre : elle appartient à la couche annexe de Birth by Sleep, celle des arènes, des Commandes et des tournois.",
          "Royal Radiance is not obtained in the main story but in the Mirage Arena, the virtual battleground reachable from Birth by Sleep's menu, as a reward for the high-level tournaments. It is available to Terra, Ventus and Aqua alike, unlike most of the game's Keyblades, which are tied to a single character.\n\nIts stats are high in both areas, with a balanced profile that keeps it usable whatever the played character's style. It is one of the best weapons available before each episode's ultimate Keyblade, and it rewards players who take on the arena's most demanding challenges, often cooperatively. It has no story role of its own: it belongs to Birth by Sleep's side layer, the one of arenas, Commands and tournaments.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Royal Radiance", url: "https://kingdomhearts.fandom.com/wiki/Royal_Radiance" }],
  },

  // ═══════════════════════════ Re:coded ═══════════════════════════
  "zero-one": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Zero/One est une Keyblade faite de données : sa lame est composée de blocs empilés, parcourus de chiffres binaires verts et turquoise, et ses dents ressemblent à un fragment de code inachevé. La garde forme un cadre net, presque une fenêtre de programme, et l'ensemble scintille comme un affichage.\n\nSon nom dit son sujet : le zéro et le un, les deux seuls signes dont est fait le monde numérique de Re:coded. Le récit se déroule entièrement à l'intérieur du journal de Jiminy, recopié sous forme de données par Tram Cognaugh et Roi Mickey pour comprendre un message mystérieux ; les blocs qui composent la Keyblade sont ceux-là mêmes que le joueur brise et empile dans les niveaux. C'est donc une arme qui est faite de la matière du monde où elle est maniée.",
          "Zero/One is a Keyblade made of data: its blade is built from stacked blocks streaked with green and turquoise binary digits, and its teeth look like a fragment of unfinished code. The guard forms a crisp frame, almost a program window, and the whole thing shimmers like a display.\n\nIts name states its subject: zero and one, the only two signs the digital world of Re:coded is made of. The story takes place entirely inside Jiminy's journal, transcribed as data by Chip, Dale and King Mickey to make sense of a mysterious message; the blocks that compose the Keyblade are the very ones the player breaks and stacks in the levels. It is a weapon made of the substance of the world it is wielded in.",
        ),
      },
      {
        game: "re-coded",
        text: L(
      "Zero/One appartient au Sora Digital, la copie de Sora née dans les données du journal, qui explore des versions reconstituées de la Ville de Traverse, du Pays des Merveilles ou d'Agrabah pour réparer les corruptions du texte. La Keyblade est l'aboutissement de sa panoplie et compte parmi les plus puissantes du jeu.\n\nÀ la différence des autres épisodes, Re:coded ne distribue pas les Keyblades par monde : elles s'équipent depuis le menu et servent surtout de socle statistique au système de Matrice de Commandes, une grille de puces à assembler où le joueur répartit ses gains de niveau. Zero/One y offre des valeurs élevées à la fois en force et en magie. Le motif de données réapparaît par ailleurs dans 358/2 Days, où l'un des Gears de Roxas donne à sa Keyblade la même apparence en blocs.",
          "Zero/One belongs to Data-Sora, the copy of Sora born inside the journal's data, who explores reconstructed versions of Traverse Town, Wonderland or Agrabah to repair the text's corruptions. The Keyblade caps his arsenal and ranks among the game's most powerful.\n\nUnlike other entries, Re:coded does not hand out Keyblades world by world: they are equipped from the menu and mainly act as the statistical base for the Command Matrix, a grid of chips the player assembles to spend level-up gains. Zero/One offers high values in both strength and magic there. The data motif also turns up in 358/2 Days, where one of Roxas's Gears gives his Keyblade the same block-built look.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Zero/One", url: "https://kingdomhearts.fandom.com/wiki/Zero/One" }],
  },

  // ═══════════════════════════ Dream Drop Distance ═══════════════════════════
  "skull-noise": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Craque-crâne est une Keyblade rouge et noire aux formes urbaines et graphiques : sa lame reprend le crâne stylisé qui sert d'emblème aux Reapers, ses dents dessinent des lettres anguleuses comme un tag, et son porte-clés est un pin, l'objet autour duquel tourne tout le système de jeu de The World Ends with You.\n\nCe titre de Square Enix, dont l'action se déroule dans le quartier de Shibuya, est ici invité à la Ville de Traverse : Neku, Shiki, Joshua, Beat et Rhyme y apparaissent, perdus dans les mondes endormis, avec leur mémoire trouée. Les « Noise », créatures que combattent les joueurs du Jeu des Reapers, font écho aux Avale-Rêves de Dream Drop Distance, et la Keyblade célèbre cette rencontre entre deux univers de la même maison.",
          "Skull Noise is a red-and-black Keyblade with urban, graphic shapes: its blade reuses the stylised skull that serves as the Reapers' emblem, its teeth trace angular letters like a tag, and its keychain is a pin, the object the whole gameplay system of The World Ends with You revolves around.\n\nThat Square Enix title, set in the Shibuya district, is a guest here in Traverse Town: Neku, Shiki, Joshua, Beat and Rhyme appear there, lost in the sleeping worlds with holes in their memories. The Noise, the creatures the players of the Reapers' Game fight, echo the Dream Eaters of Dream Drop Distance, and the Keyblade celebrates this meeting between two universes from the same house.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Craque-crâne est la première Keyblade que Sora et Riku obtiennent chacun de leur côté dans Dream Drop Distance, à la fin de leur première visite de la Ville de Traverse, une fois aidés les rescapés de Shibuya et vaincu le Cauchemar du quartier.\n\nElle est orientée force et offre un bonus net par rapport à la Chaîne Royale de départ, ce qui en fait un remplacement immédiat pour les premières heures de jeu. Comme toutes les Keyblades de l'épisode, elle n'a pas de transformation mais modifie les statistiques du porteur et l'accès à certaines Attaques Ultimes, dans un système de combat centré sur le Flowmotion et les Liens avec les Esprits. Elle accompagne les deux héros pendant la partie du récit où ils croient encore passer un simple Examen de Maîtrise voulu par Yen Sid.",
          "Skull Noise is the first Keyblade Sora and Riku each obtain in Dream Drop Distance, at the end of their first visit to Traverse Town, once they have helped the survivors from Shibuya and defeated the district's Nightmare.\n\nIt is strength-oriented and offers a clear step up from the starting Kingdom Key, which makes it an immediate replacement for the opening hours. Like every Keyblade in this entry it has no formchange but alters the wielder's stats and access to certain Shotlocks, within a combat system built on Flowmotion and Spirit links. It accompanies the two heroes through the stretch of the story where they still believe they are simply sitting the Mark of Mastery exam set by Yen Sid.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Skull Noise", url: "https://kingdomhearts.fandom.com/wiki/Skull_Noise" }],
  },

  "guardian-bell": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Cloche gardienne est une Keyblade de pierre, de bronze et de vitrail : sa lame évoque une colonne de cathédrale, sa garde s'ouvre en rosace, ses dents figurent des gargouilles accroupies, et son porte-clés est une petite cloche. Les teintes brunes et dorées rappellent les charpentes et les cloches du beffroi.\n\nTout renvoie à La Cité des Cloches, le monde du Bossu de Notre-Dame, et à Quasimodo, le sonneur enfermé dans les hauteurs par Frollo. Le titre en dit le sens : la cloche qui protège, celle que Quasimodo fait sonner sur la ville. Le monde y ajoute la question qui traverse tout Dream Drop Distance, celle de savoir qui est vraiment le monstre, alors que la Fête des Fous transforme le sonneur en roi d'un jour avant de l'humilier.",
          "Guardian Bell is a Keyblade of stone, bronze and stained glass: its blade evokes a cathedral column, its guard opens into a rose window, its teeth depict crouching gargoyles, and its keychain is a small bell. The brown and gold tones recall the beams and bells of the tower.\n\nEverything points to La Cité des Cloches, the world of The Hunchback of Notre Dame, and to Quasimodo, the bell-ringer shut away up high by Frollo. Its title states the meaning: the bell that protects, the one Quasimodo rings out over the city. The world adds the question that runs through all of Dream Drop Distance, that of who the real monster is, as the Feast of Fools makes the ringer king for a day before humiliating him.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora et Riku reçoivent chacun Cloche gardienne à la fin de La Cité des Cloches, après avoir aidé Quasimodo et Esmeralda face à Frollo et aux Cauchemars qui hantent le beffroi, et affronté le grand Avale-Rêves du monde.\n\nLa Keyblade est orientée magie et offre une allonge appréciable, ce qui la rend confortable dans les combats en hauteur, nombreux dans ce monde vertical. Elle donne accès à des Attaques Ultimes efficaces contre les groupes, utile face aux essaims de Cauchemars ailés qui peuplent les toits. Sur le plan du récit, elle marque le moment où les deux héros commencent à comprendre que quelque chose cloche dans leur examen : Riku y croise un jeune Xehanort, et Sora, de son côté, s'enfonce un peu plus dans le piège tendu par l'Organisation.",
          "Sora and Riku each receive Guardian Bell at the end of La Cité des Cloches, after helping Quasimodo and Esmeralda against Frollo and the Nightmares haunting the tower, and defeating the world's large Dream Eater.\n\nThe Keyblade is magic-oriented and offers welcome reach, which makes it comfortable in the aerial fights that fill this vertical world. It gives access to Shotlocks effective against crowds, useful against the swarms of winged Nightmares on the rooftops. In story terms it marks the point where the two heroes begin to sense something is wrong with their exam: Riku meets a young Xehanort there, while Sora, on his side, sinks a little deeper into the trap laid by the Organization.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Guardian Bell", url: "https://kingdomhearts.fandom.com/wiki/Guardian_Bell" }],
  },

  "dual-disc": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Double disque est une Keyblade noire striée de bleu lumineux, dans l'exacte esthétique de Tron : L'Héritage. Sa lame est une barre de circuits, sa garde est formée de deux disques d'identité montés l'un contre l'autre, ses dents évoquent un connecteur, et son porte-clés est un troisième disque miniature.\n\nLe disque d'identité est l'objet central de l'univers de Tron : il contient toute la mémoire d'un programme, sert d'arme et de preuve d'existence, et le perdre revient à disparaître. La Keyblade succède au Debugger Photon de Kingdom Hearts II, qui reprenait le premier film ; le passage à la Grille, avec ses noirs profonds et ses lignes de néon, marque le saut d'une génération de décors à l'autre au sein de la même série de mondes numériques.",
          "Dual Disc is a black Keyblade streaked with glowing blue, in the exact aesthetic of Tron: Legacy. Its blade is a bar of circuitry, its guard is made of two identity discs set against each other, its teeth suggest a connector, and its keychain is a third, miniature disc.\n\nThe identity disc is the central object of Tron's universe: it holds a program's entire memory, serves as weapon and as proof of existence, and to lose it is to vanish. The Keyblade succeeds Photon Debugger from Kingdom Hearts II, which drew on the first film; the move to The Grid, with its deep blacks and neon lines, marks the jump from one generation of sets to the next within the same family of digital worlds.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Double disque s'obtient à la fin de la Grille, dans Dream Drop Distance, après que Sora et Riku ont traversé le monde numérique chacun de leur côté : Sora aux côtés de Sam Flynn et de Quorra face au programme Rinzler, Riku dans une version corrompue du système où le CLU s'empare des données des Avale-Rêves.\n\nLa Keyblade est bien équilibrée entre force et magie, sans faiblesse marquée, ce qui en fait un choix sûr pour la seconde moitié du jeu. Elle brille surtout dans les phases de Flowmotion, très présentes sur les rails et les tours de la Grille, et donne accès à des Attaques Ultimes à distance qui conviennent aux combats de véhicules et de disques. Sur le plan du récit, la Grille est l'un des mondes où l'Organisation dévoile ses cartes, en manipulant les données mêmes du monde endormi.",
          "Dual Disc is obtained at the end of The Grid in Dream Drop Distance, after Sora and Riku have each crossed the digital world separately: Sora alongside Sam Flynn and Quorra against the program Rinzler, Riku in a corrupted version of the system where CLU seizes the Dream Eaters' data.\n\nThe Keyblade is well balanced between strength and magic, with no marked weakness, which makes it a safe pick for the game's second half. It shines above all in Flowmotion sequences, plentiful on the Grid's rails and towers, and grants ranged Shotlocks suited to the vehicle and disc battles. In story terms, The Grid is one of the worlds where the Organization shows its hand, tampering with the sleeping world's very data.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Dual Disc", url: "https://kingdomhearts.fandom.com/wiki/Dual_Disc" }],
  },

  "knockout-punch": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Knockout Punch est l'une des Keyblades les plus cartoonesques de la saga : sa lame rouge et jaune se termine par un énorme gant de boxe rembourré qui tient lieu de dents, sa garde imite les cordes d'un ring, et son porte-clés est une petite coupe de vainqueur. Rien n'y est tranchant, tout y est fait pour cogner.\n\nElle appartient à la famille des Keyblades franchement humoristiques, aux côtés de Gourmandises ou de Grand Chef, qui assument de ne pas ressembler à des armes. Sa symbolique est celle du sport et du KO : la victoire arrachée d'un seul coup, sans finesse. Dans un jeu dont les mondes se traversent en Flowmotion, à toute vitesse et en rebondissant sur les murs, cette esthétique de ring et de foire tient parfaitement sa place.",
          "Knockout Punch is one of the most cartoonish Keyblades in the series: its red-and-yellow blade ends in an enormous padded boxing glove that stands in for teeth, its guard imitates the ropes of a ring, and its keychain is a small winner's trophy. Nothing about it is sharp; everything is built to hit.\n\nIt belongs to the family of frankly comic Keyblades, alongside Sweetstack or Grand Chef, which happily refuse to look like weapons. Its symbolism is that of sport and the knockout: victory snatched in a single blow, with no finesse. In a game whose worlds are crossed in Flowmotion, at speed and bouncing off walls, this ring-and-fairground look fits perfectly.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Knockout Punch fait partie des Keyblades de Dream Drop Distance qui ne sont pas remises à la fin d'un monde, mais se débloquent par les activités annexes du jeu, autour des Esprits et des défis. Elle est disponible aussi bien pour Sora que pour Riku.\n\nSon profil est extrême : un très gros bonus de force pour une magie faible, ce qui en fait une arme de corps à corps pur. Elle convient donc aux joueurs qui privilégient les enchaînements au sol et les Liens avec leurs Avale-Rêves plutôt que les sorts, et elle s'avère redoutable contre les Cauchemars les plus résistants de la fin du jeu, dans le Monde qui n'existe pas comme dans les combats optionnels. Son allonge courte est sa seule vraie limite, compensée par la mobilité que le Flowmotion offre en permanence.",
          "Knockout Punch is one of the Dream Drop Distance Keyblades that are not handed out at the end of a world but unlocked through the game's side activities, around Spirits and challenges. It is available to both Sora and Riku.\n\nIts profile is extreme: a very large strength bonus against weak magic, which makes it a pure melee weapon. It therefore suits players who favour ground chains and links with their Dream Eaters over spellcasting, and it proves formidable against the toughest late-game Nightmares, in The World That Never Was as in the optional fights. Its short reach is its only real limitation, offset by the mobility Flowmotion provides at all times.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Knockout Punch", url: "https://kingdomhearts.fandom.com/wiki/Knockout_Punch" }],
  },

  "ferris-gear": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Rouage est une Keyblade de fête foraine, aux couleurs vives de rouge, de jaune et de bleu. Sa lame est un axe de manège, ses dents forment une grande roue miniature dont les nacelles tournent réellement, et son porte-clés est un ballon d'enfant. Des ampoules et des rayures de barbe à papa complètent l'ensemble.\n\nElle appartient au Paradis des Garnements, le monde de Pinocchio dans Dream Drop Distance : l'Île aux Plaisirs, sa fête permanente et son piège, où les garçons qui s'amusent trop finissent changés en ânes. La joyeuseté du dessin cache donc quelque chose de plus sombre, à l'image de tout l'épisode, où les mondes endormis semblent d'abord accueillants avant de révéler les Cauchemars qui y dorment.",
          "Ferris Gear is a funfair Keyblade in bright reds, yellows and blues. Its blade is a ride's axle, its teeth form a miniature Ferris wheel whose cars actually turn, and its keychain is a child's balloon. Light bulbs and candy-floss stripes complete the picture.\n\nIt belongs to Prankster's Paradise, Pinocchio's world in Dream Drop Distance: Pleasure Island, its endless carnival and its trap, where boys who play too hard end up turned into donkeys. The cheerfulness of the design therefore hides something darker, like the whole game, whose sleeping worlds look welcoming at first before revealing the Nightmares asleep inside them.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora et Riku obtiennent Rouage à la fin du Paradis des Garnements, après avoir suivi Pinocchio à travers l'île et jusque dans le ventre de Monstro, où Riku affronte le Cauchemar qui a englouti le cœur du pantin, tandis que Sora se laisse rattraper par ses propres illusions.\n\nLa Keyblade est équilibrée, avec un léger avantage en magie, et se distingue par des Attaques Ultimes efficaces à moyenne portée. Elle est surtout un bon compagnon des phases de Flowmotion, nombreuses dans les manèges et les tunnels du monde. Le passage marque une étape importante du récit : c'est là que le doute de Sora s'installe pour de bon, alors que Young Xehanort lui souffle qu'il n'est pas maître de son propre sommeil, et que le piège de l'Organisation se referme lentement sur lui.",
          "Sora and Riku obtain Ferris Gear at the end of Prankster's Paradise, after following Pinocchio across the island and into Monstro's belly, where Riku faces the Nightmare that swallowed the puppet's heart while Sora lets his own illusions catch up with him.\n\nThe Keyblade is balanced, with a slight edge in magic, and stands out for Shotlocks effective at medium range. It is above all a good companion for Flowmotion sequences, plentiful among the world's rides and tunnels. The chapter marks an important step in the story: it is here that Sora's doubt truly sets in, as Young Xehanort whispers that he is not master of his own sleep, and the Organization's trap slowly closes around him.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Ferris Gear", url: "https://kingdomhearts.fandom.com/wiki/Ferris_Gear" }],
  },

  "counterpoint": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Counterpoint est une Keyblade entièrement musicale : sa lame est faite de portées où courent des croches, sa garde dessine une clé de sol et une clé de fa entrelacées, ses dents forment une double barre de mesure, et son porte-clés est une note isolée. Les teintes violettes et bleu nuit reprennent celles du chapeau et de la robe de l'apprenti sorcier.\n\nElle appartient à la Symphonie du Sorcier, monde tiré de Fantasia, où Mickey apprenti fait danser les balais dans l'atelier de Yen Sid. Le contrepoint, en musique, est l'art de faire chanter ensemble plusieurs lignes indépendantes : une image juste pour un épisode où Sora et Riku traversent les mêmes mondes séparément, chacun sa mélodie, sans jamais se croiser.",
          "Counterpoint is a wholly musical Keyblade: its blade is made of staves where quavers run, its guard traces an interlaced treble and bass clef, its teeth form a double bar line, and its keychain is a single note. The purple and midnight-blue tones echo the sorcerer's apprentice's hat and robe.\n\nIt belongs to Symphony of Sorcery, a world drawn from Fantasia, where the apprentice Mickey sets the brooms dancing in Yen Sid's workshop. Counterpoint, in music, is the art of making several independent lines sing together: an apt image for a game in which Sora and Riku cross the same worlds separately, each with his own melody, without ever meeting.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Counterpoint est remise à Sora et à Riku à la fin de la Symphonie du Sorcier, dernier monde Disney de Dream Drop Distance, une fois écartés les Cauchemars qui menaçaient de dérégler la partition et sauvé l'atelier du jeune Yen Sid.\n\nElle possède le meilleur bonus de magie des Keyblades de monde du jeu, ce qui en fait l'arme de référence pour les joueurs qui misent sur les sorts et les Attaques Ultimes offensives. Sa force est en revanche modeste, et elle demande de garder ses distances. Elle arrive juste avant le retour au Monde qui n'existe pas, où le récit bascule : Sora tombe dans le piège de la nouvelle Organisation, son cœur est presque changé en réceptacle pour Xehanort, et c'est Riku qui, en plongeant dans son sommeil, obtient le titre de Maître de la Keyblade.",
          "Counterpoint is handed to Sora and Riku at the end of Symphony of Sorcery, the last Disney world of Dream Drop Distance, once the Nightmares threatening to derail the score are driven off and the young Yen Sid's workshop is saved.\n\nIt has the best magic bonus of the game's world Keyblades, which makes it the reference weapon for players who lean on spells and offensive Shotlocks. Its strength, by contrast, is modest, and it asks you to keep your distance. It arrives just before the return to The World That Never Was, where the story turns: Sora falls into the new Organization's trap, his heart is nearly made a vessel for Xehanort, and it is Riku who, by diving into his sleep, earns the title of Keyblade Master.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Counterpoint", url: "https://kingdomhearts.fandom.com/wiki/Counterpoint" }],
  },

  "divewing": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Divewing est une Keyblade sombre, violette et magenta, dont la lame se prolonge par deux ailes membraneuses repliées. Ses dents évoquent une serre, sa garde une cage thoracique, et l'ensemble porte, en évidence, le symbole en forme d'œil griffu des Avale-Rêves de type Cauchemar.\n\nCe symbole partage tout l'épisode en deux : les Cauchemars, qui dévorent les rêves et enferment les mondes dans leur sommeil, et les Esprits, alliés que Sora et Riku créent eux-mêmes pour les combattre. Divewing choisit ouvertement le premier camp dans son iconographie, comme Riku accepte de plonger dans les ténèbres sans se laisser dévorer par elles. Son nom, « l'aile qui plonge », évoque le piqué du prédateur autant que la chute dans un rêve.",
          "Divewing is a dark purple-and-magenta Keyblade whose blade extends into two folded membranous wings. Its teeth suggest a talon, its guard a ribcage, and the whole plainly bears the clawed-eye symbol of Nightmare-type Dream Eaters.\n\nThat symbol splits the whole game in two: the Nightmares, which devour dreams and lock worlds into their sleep, and the Spirits, allies Sora and Riku create themselves to fight them. Divewing openly picks the first camp in its iconography, much as Riku accepts diving into darkness without letting it devour him. Its name, the diving wing, evokes a predator's stoop as much as a fall into a dream.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Divewing fait partie des Keyblades communes à Sora et à Riku dans Dream Drop Distance, obtenues en dehors de la progression des mondes, par les activités liées aux Avale-Rêves et à la collection.\n\nSon profil privilégie la force, avec une magie moyenne, et elle offre une bonne allonge grâce à ses ailes déployées, appréciable dans les combats aériens si nombreux dans cet épisode. Elle complète l'arsenal de la dernière partie de l'aventure, entre les Keyblades de monde et les armes secrètes comme Unbound ou l'Ultima. Le joueur la manie donc au moment où le récit quitte les mondes endormis pour la confrontation finale du Monde qui n'existe pas, face à Young Xehanort et aux douze autres ténèbres réunies par le Maître.",
          "Divewing is one of the Keyblades shared by Sora and Riku in Dream Drop Distance, obtained outside world progression, through the activities tied to Dream Eaters and collection.\n\nIts profile favours strength with average magic, and it offers good reach thanks to its spread wings, welcome in the aerial battles that fill this entry. It rounds out the late-game arsenal, between the world Keyblades and the secret weapons such as Unbound or the Ultima Weapon. The player therefore wields it as the story leaves the sleeping worlds for the final confrontation in The World That Never Was, against Young Xehanort and the twelve other darknesses gathered by the Master.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Divewing", url: "https://kingdomhearts.fandom.com/wiki/Divewing" }],
  },

  "sweet-dreams": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Sweet Dreams est une Keyblade aux teintes pastel de rose, de bleu et de jaune, aux formes rondes et rembourrées comme une peluche. Sa garde s'ouvre en deux cœurs, ses dents dessinent une étoile douce, et le symbole des Esprits, en forme de cœur griffu inversé, orne la lame. Son porte-clés évoque un petit Avale-Rêves.\n\nElle est la contrepartie exacte de Divewing : là où celle-ci arbore la marque des Cauchemars, Sweet Dreams célèbre les Esprits, ces créatures que Sora et Riku façonnent à partir de matières de rêve et qui les accompagnent en combat. C'est l'un des rares objets de la saga à mettre en avant l'idée que les compagnons se fabriquent, et que le lien qui les unit au porteur compte autant que la puissance de l'arme.",
          "Sweet Dreams is a Keyblade in pastel pinks, blues and yellows, with round, padded shapes like a plush toy. Its guard opens into two hearts, its teeth trace a soft star, and the Spirit symbol, an inverted clawed heart, decorates the blade. Its keychain suggests a small Dream Eater.\n\nIt is the exact counterpart of Divewing: where that one wears the Nightmares' mark, Sweet Dreams celebrates the Spirits, the creatures Sora and Riku shape from dream material and who fight at their side. It is one of the series' rare objects to foreground the idea that companions can be made, and that the bond tying them to the wielder counts as much as the weapon's power.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sweet Dreams est une Keyblade de haut niveau de Dream Drop Distance, obtenue par les activités liées aux Esprits plutôt qu'à la fin d'un monde : élever ses Avale-Rêves, remplir leur grille de capacités et jouer aux mini-jeux du Camp de l'Esprit.\n\nSon bonus de magie est parmi les plus élevés du jeu, ce qui en fait une arme de fin de partie pour les joueurs qui construisent leur style autour des sorts et des Liens. Elle convient particulièrement bien à Sora, dont l'attaque est déjà solide et qui profite pleinement de la puissance magique supplémentaire. Elle arrive naturellement dans la dernière ligne droite de l'aventure, au moment où les Esprits deviennent décisifs : ce sont eux qui, en fin de compte, permettent à Riku d'atteindre le cœur endormi de Sora et de le ramener.",
          "Sweet Dreams is a high-tier Keyblade of Dream Drop Distance, obtained through Spirit-related activities rather than at the end of a world: raising your Dream Eaters, filling in their ability grids and playing the Spirit camp mini-games.\n\nIts magic bonus is among the game's highest, which makes it an endgame weapon for players who build their style around spells and links. It suits Sora particularly well, since his attack is already solid and he makes full use of the extra magical power. It arrives naturally in the adventure's final stretch, at the point where the Spirits become decisive: they are what ultimately let Riku reach Sora's sleeping heart and bring him back.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Sweet Dreams", url: "https://kingdomhearts.fandom.com/wiki/Sweet_Dreams" }],
  },

  "end-of-pain": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Dolor Fina est une Keyblade noire et violette, hérissée de dents irrégulières le long de la lame, avec une garde faite de pointes recourbées et un porte-clés anguleux. Sa silhouette agressive et ses reflets froids la rangent du côté des armes les plus sombres de la saga.\n\nSon nom et son dessin renvoient directement aux Keyblades de Roxas dans 358/2 Days, dont plusieurs portaient des titres du même registre, autour du manque et de la douleur : Missing Ache, Pain of Solitude, Sign of Innocence. Dans un jeu qui traite du sommeil, des cauchemars et des cœurs blessés, « la fin de la douleur » est un titre ambigu : il désigne autant la guérison que l'oubli, et rappelle que les mondes endormis de Dream Drop Distance ne demandent qu'à être réveillés.",
          "End of Pain is a black-and-purple Keyblade, bristling with irregular teeth along the blade, with a guard made of curved spikes and an angular keychain. Its aggressive silhouette and cold sheen place it among the darkest weapons of the series.\n\nIts name and design point straight to Roxas's Keyblades in 358/2 Days, several of which carried titles in the same register, built around absence and hurt: Missing Ache, Pain of Solitude, Sign of Innocence. In a game about sleep, nightmares and wounded hearts, the end of pain is an ambiguous title: it names healing as much as forgetting, and recalls that the sleeping worlds of Dream Drop Distance are only waiting to be woken.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Dolor Fina compte parmi les Keyblades les plus puissantes de Dream Drop Distance, et ne s'obtient pas à la fin d'un monde : elle appartient à l'arsenal débloqué par les activités annexes et la progression avancée du jeu, comme Divewing ou Sweet Dreams.\n\nSon profil est nettement offensif, avec un fort bonus de force, et elle est pensée pour les combats les plus exigeants : les Cauchemars de haut niveau, les affrontements optionnels et les boss du Monde qui n'existe pas. Elle donne accès à des Attaques Ultimes destructrices qui, combinées au Flowmotion et aux Liens avec les Esprits, permettent de faire fondre les jauges de vie les plus épaisses. C'est typiquement une arme de fin de partie, à réserver aux joueurs qui ont poussé l'élevage de leurs Avale-Rêves et la collection de capacités jusqu'au bout.",
          "End of Pain is among the most powerful Keyblades in Dream Drop Distance, and is not obtained at the end of a world: it belongs to the arsenal unlocked through side activities and advanced progression, like Divewing or Sweet Dreams.\n\nIts profile is clearly offensive, with a large strength bonus, and it is built for the hardest fights: high-level Nightmares, optional battles and the bosses of The World That Never Was. It grants destructive Shotlocks that, combined with Flowmotion and Spirit links, melt the thickest health gauges. It is a textbook endgame weapon, meant for players who have pushed Dream Eater raising and ability collection to their limits.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — End of Pain", url: "https://kingdomhearts.fandom.com/wiki/End_of_Pain" }],
  },

  "all-for-one": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "All for One est une Keyblade bleue et dorée d'allure chevaleresque : sa lame reprend la forme d'une épée de mousquetaire, sa garde s'orne d'un pommeau ouvragé et d'une plume, ses dents dessinent une fleur de lys stylisée, et son porte-clés est un chapeau à large bord surmonté d'un panache.\n\nElle vient du Pays des Mousquetaires, adaptation du moyen métrage où Mickey, Donald et Dingo endossent les rôles des trois héros d'Alexandre Dumas, sous les ordres du capitaine Pat et face à Pat lui-même. Son nom reprend la devise « Tous pour un, un pour tous », qui résume mieux qu'aucune autre le thème central de Kingdom Hearts : la force que l'on tire de ses amis, et le lien qui permet de se retrouver quel que soit le monde.",
          "All for One is a blue-and-gold Keyblade with a knightly air: its blade takes the shape of a musketeer's sword, its guard bears a worked pommel and a feather, its teeth trace a stylised fleur-de-lys, and its keychain is a broad-brimmed hat crowned with a plume.\n\nIt comes from the Country of the Musketeers, an adaptation of the featurette in which Mickey, Donald and Goofy take on the roles of Dumas's three heroes, under Captain Pete's orders and against Pete himself. Its name repeats the motto all for one and one for all, which sums up better than any other the central theme of Kingdom Hearts: the strength drawn from friends, and the bond that lets them find one another whatever the world.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Sora et Riku reçoivent All for One à la fin du Pays des Mousquetaires, dans Dream Drop Distance, après avoir aidé les trois amis à déjouer le complot de Pat contre la Princesse Minnie et affronté le Cauchemar du monde. Le monde est l'un des plus légers de l'épisode, entièrement joué sur le registre de l'aventure de cape et d'épée.\n\nLa Keyblade est équilibrée, avec un léger penchant pour la force, et brille par la portée de ses attaques d'estoc. Elle donne accès à des Attaques Ultimes en ligne droite, efficaces contre les Cauchemars rapides des mondes suivants. Sur le plan du récit, ce chapitre offre une respiration avant la Symphonie du Sorcier et le retour au Monde qui n'existe pas, où l'examen des deux héros se révélera n'avoir jamais été un examen.",
          "Sora and Riku receive All for One at the end of the Country of the Musketeers in Dream Drop Distance, after helping the three friends foil Pete's plot against Princess Minnie and defeating the world's Nightmare. The world is one of the entry's lightest, played entirely as a swashbuckling adventure.\n\nThe Keyblade is balanced, with a slight lean toward strength, and shines through the reach of its thrusting attacks. It grants straight-line Shotlocks, effective against the fast Nightmares of the worlds that follow. In story terms, this chapter is a breath of air before Symphony of Sorcery and the return to The World That Never Was, where the two heroes' exam will turn out never to have been an exam at all.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — All for One", url: "https://kingdomhearts.fandom.com/wiki/All_for_One" }],
  },

  "unbound": {
    sections: [
      {
        title: L("Apparence et symbolique", "Appearance and symbolism"),
        text: L(
      "Unbound est une Keyblade blanche et dorée aux formes ouvertes : sa lame s'écarte en deux courbes comme les pages d'un livre que l'on referme mal, sa garde dessine des volutes symétriques et son porte-clés est une petite figure ailée. Sa clarté la range aux côtés des Keyblades de lumière de la saga, loin des armes dentelées de la fin du jeu.\n\nSon nom, « libéré », dit exactement ce dont il est question dans Dream Drop Distance : des mondes retenus dans leur sommeil, dont il faut délier le cœur pour qu'ils reviennent à eux. C'est aussi ce que fait Riku pour Sora dans la dernière partie du récit, en plongeant dans son sommeil pour dénouer le piège tendu par l'Organisation, et ce que la fin du jeu promet à ceux qui restent enfermés ailleurs.",
          "Unbound is a white-and-gold Keyblade with open shapes: its blade parts into two curves like the pages of a book badly closed, its guard traces symmetrical scrolls and its keychain is a small winged figure. Its brightness places it with the series' Keyblades of light, far from the jagged weapons of the endgame.\n\nIts name says exactly what Dream Drop Distance is about: worlds held in their sleep, whose hearts must be untied so they can come back to themselves. It is also what Riku does for Sora in the story's last stretch, diving into his sleep to undo the trap laid by the Organization, and what the ending promises to those still shut away elsewhere.",
        ),
      },
      {
        game: "dream-drop-distance",
        text: L(
      "Unbound est l'une des récompenses de complétion de Dream Drop Distance : elle s'obtient en menant à son terme la collection des Esprits, c'est-à-dire en créant chacun des Avale-Rêves alliés du jeu à partir des matières de rêve récoltées dans les mondes endormis.\n\nSes statistiques la placent juste derrière l'Ultima, avec un profil équilibré et sans faiblesse, et elle donne accès aux meilleures Attaques Ultimes du porteur. Elle est donc l'arme de ceux qui ont épuisé le contenu annexe avant d'affronter les combats les plus durs, notamment les affrontements secrets ajoutés dans la version HD du jeu. Sa présence dans l'arsenal résume une part importante de l'épisode : ici, la puissance ne vient pas des mondes traversés mais des compagnons que le joueur a lui-même façonnés.",
          "Unbound is one of Dream Drop Distance's completion rewards: it is obtained by finishing the Spirit collection, that is, by creating every allied Dream Eater in the game from the dream materials gathered in the sleeping worlds.\n\nIts stats place it just behind the Ultima Weapon, with a balanced, weakness-free profile, and it grants the wielder's best Shotlocks. It is therefore the weapon of players who have exhausted the side content before taking on the hardest fights, notably the secret battles added in the game's HD version. Its place in the arsenal sums up an important part of this entry: here, power comes not from the worlds crossed but from the companions the player has shaped personally.",
        ),
      },
    ],
    sources: [{ label: "Kingdom Hearts Wiki — Unbound", url: "https://kingdomhearts.fandom.com/wiki/Unbound" }],
  },
};
