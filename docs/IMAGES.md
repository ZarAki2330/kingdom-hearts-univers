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
