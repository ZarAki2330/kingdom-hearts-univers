# Visuels : règles d'utilisation et procédure d'ajout

Le site doit être richement illustré, mais tous les visuels de *Kingdom Hearts* (jaquettes, logos, artworks, captures) appartiennent à **Square Enix Co., Ltd.** et **Disney**. Aucun d'eux n'est libre de droits, et Wikipédia ou le KH Wiki ne sont pas des sources autorisées (leurs images sont elles-mêmes reproduites au titre du *fair use*, notion qui n'existe pas telle quelle en droit français).

## Ce que nous nous autorisons

| Type de visuel | Source acceptée | Conditions |
|---|---|---|
| Jaquettes, logos, key arts | **Kit presse officiel** de Square Enix (press hub) ou assets fournis par Square Enix / Disney pour la communication | Usage éditorial non commercial, mention de l'ayant droit, aucune modification hors recadrage/compression |
| Captures d'écran | Nos **propres captures** réalisées en jeu | Sans HUD de tiers, créditées « Capture : Kingdom Hearts Univers © Square Enix / Disney » |
| Illustrations du site (emblème, jaquettes générées, icônes) | Créées pour le site | Pas de reprise du logo officiel (couronne/cœur de la marque) ni de copie de personnages |
| Fan-arts | Uniquement avec l'**accord écrit** de l'artiste | Crédit nominatif + lien |

## Choix retenu (2 septembre 2026)

Après discussion, le site applique la **tolérance « site de fans »** : les jaquettes, logos et illustrations officiels sont affichés à titre d'illustration éditoriale, non commerciale, avec crédit systématique « © Square Enix / Disney » et mention de la source. Les fichiers actuels proviennent du [Kingdom Hearts Wiki](https://kingdomhearts.fandom.com/) (versions occidentales quand elles existent en bonne définition, sinon japonaises), redimensionnés à 900 px maximum. Ce n'est pas une autorisation formelle : **en cas de demande de retrait d'un ayant droit, l'image est supprimée sans discussion**, comme le font khdestiny, KH13 et les autres sites de fans. Le pied de page du site porte cette mention.

Tout jeu sans visuel reste en jaquette générée (dégradé + titre), comportement par défaut du composant `GameCover`. Les visuels n'ont pas tous le même ratio (boîtes DS/3DS presque carrées, logos horizontaux) : le composant affiche l'image entière sur un fond à la couleur du jeu.

## Procédure pour ajouter une jaquette

1. Récupérer le visuel via une source du tableau ci-dessus.
2. L'exporter en **JPEG, 900 px maximum sur le plus grand côté, < 400 Ko**, nommé `public/images/games/<slug>.jpg` (même slug que dans `src/data/games.ts`). Tout ratio est accepté.
3. Dans `src/data/games.ts`, ajouter au jeu :
   ```ts
   cover: {
     src: "/images/games/kingdom-hearts-iii.jpg",
     credit: "© Square Enix / Disney — kit presse Square Enix",
     width: 600,
     height: 800,
   },
   ```
4. Lancer `npm run check:covers` : le script vérifie la présence du fichier, la taille, le poids et le crédit, et liste les jeux encore en jaquette générée.
5. Le crédit est affiché automatiquement sur la fiche du jeu.

## Alt text

Les jaquettes officielles ont pour texte alternatif « Jaquette de *Titre* ». Les jaquettes générées sont purement décoratives (`aria-hidden`), le titre étant déjà présent dans le texte à côté.

## Illustrations de l'encyclopédie

- Fichiers : `public/images/encyclopedia/<catégorie>/<slug>.webp` (320 px max, rendus officiels détourés), référencés par `src/data/encyclopedia/images.ts` (généré) et fusionnés dans les entrées par `src/data/encyclopedia/index.ts`.
- Source : Kingdom Hearts Wiki (kingdomhearts.fandom.com), image principale de la page ou fichier nommé d'après l'entrée ; le nom du fichier d'origine figure dans `credit`.
- Droits : © Square Enix / Disney (rendus promotionnels et in-game). Usage encyclopédique non commercial, avec crédit sur chaque fiche et mention de retrait sur demande dans le pied de page.
- Concepts : 15/16 illustrés (Pouvoir de l'éveil sans visuel).
- Ajouts du 9 septembre 2026 : Kurt Zisa, le Fantôme, l'Armure Opposée (ennemis) et Pongo et Perdita (personnages, montage des deux rendus).
- Entrées sans image fiable (médaillon généré) : Joueur (Union χ), Ténèbres, Vidar, Vali, Vala, Hoder, Helgi, Heimdall, Mère de Sora, Similis et Avale-Rêves (espèces), Flutterling, Vitality Vial, Gluttonous Goo, Beat Bomber, Helmet Bomber, et quelques Keyblades de Days / KH III (Pain of Solitude, Total Eclipse, Lunar Eclipse, Twilight Blaze, Omega Weapon, Crown Unlimit, Elemental Encoder, Advent Red, Darker Than Dark, Astral Blast, Silent Dirge, Moogle O' Glory).

## Visuels des soluces

- Les tuiles des soluces réutilisent d'abord les illustrations déjà présentes dans l'encyclopédie : une section de monde prend l'image du monde, une quête annexe celle du personnage ou de l'ennemi lié (`tileImage`, `src/data/walkthrough/index.ts`). Le fond de la tuile est teinté par la couleur de l'entrée, comme les cartes de jeux.
- Les visuels propres aux soluces (personnages ou lieux absents de l'encyclopédie) sont dans `public/images/walkthrough/<nom>.webp`, 400 px maximum, déclarés à la main dans les données de la soluce avec leur crédit.
- Source et droits : identiques au reste du site (© Square Enix / Disney, via Kingdom Hearts Wiki, retrait sur demande).

## Logos des jeux

- Fichiers : `public/images/logos/<slug>.webp` (800 px, fond transparent), déclarés dans `src/data/game-logos.ts` (généré) et fusionnés dans `games` (`src/data/games.ts`). Ils remplacent les jaquettes sur les cartes, la chronologie et l'en-tête des fiches, comme sur khdestiny.fr ; la jaquette reste affichée en visuel secondaire de la fiche.
- Source : Kingdom Hearts Wiki (fichiers « <titre> logo.png ») ; les logos 0.2 et 2.8 ont été détourés (fond uni supprimé). All-in-One Package et Integrum Masterpiece n'ont pas de logo propre : visuel généré.
- Droits : © Square Enix / Disney, crédit sous le logo sur chaque fiche.
