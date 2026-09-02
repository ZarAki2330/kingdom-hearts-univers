# Visuels : règles d'utilisation et procédure d'ajout

Le site doit être richement illustré, mais tous les visuels de *Kingdom Hearts* (jaquettes, logos, artworks, captures) appartiennent à **Square Enix Co., Ltd.** et **Disney**. Aucun d'eux n'est libre de droits, et Wikipédia ou le KH Wiki ne sont pas des sources autorisées (leurs images sont elles-mêmes reproduites au titre du *fair use*, notion qui n'existe pas telle quelle en droit français).

## Ce que nous nous autorisons

| Type de visuel | Source acceptée | Conditions |
|---|---|---|
| Jaquettes, logos, key arts | **Kit presse officiel** de Square Enix (press hub) ou assets fournis par Square Enix / Disney pour la communication | Usage éditorial non commercial, mention de l'ayant droit, aucune modification hors recadrage/compression |
| Captures d'écran | Nos **propres captures** réalisées en jeu | Sans HUD de tiers, créditées « Capture : Kingdom Hearts Univers © Square Enix / Disney » |
| Illustrations du site (emblème, jaquettes générées, icônes) | Créées pour le site | Pas de reprise du logo officiel (couronne/cœur de la marque) ni de copie de personnages |
| Fan-arts | Uniquement avec l'**accord écrit** de l'artiste | Crédit nominatif + lien |

Tout ce qui ne rentre pas dans ce tableau reste en jaquette générée (dégradé + titre), qui est le comportement par défaut du composant `GameCover`.

En cas de demande de retrait d'un ayant droit, l'image est supprimée sans discussion : c'est la règle des sites de fans (khdestiny, KH13…) et le seul cadre sûr.

## Procédure pour ajouter une jaquette

1. Récupérer le visuel via une source du tableau ci-dessus.
2. L'exporter en **JPEG, ratio 3:4, 600 × 800 px minimum, < 400 Ko**, nommé `public/images/games/<slug>.jpg` (même slug que dans `src/data/games.ts`).
3. Dans `src/data/games.ts`, ajouter au jeu :
   ```ts
   cover: {
     src: "/images/games/kingdom-hearts-iii.jpg",
     credit: "© Square Enix / Disney — kit presse Square Enix",
     width: 600,
     height: 800,
   },
   ```
4. Lancer `node scripts/check-covers.mjs` : le script vérifie la présence du fichier, le ratio, la taille et le crédit, et liste les jeux encore en jaquette générée.
5. Le crédit est affiché automatiquement sur la fiche du jeu.

## Alt text

Les jaquettes officielles ont pour texte alternatif « Jaquette de *Titre* ». Les jaquettes générées sont purement décoratives (`aria-hidden`), le titre étant déjà présent dans le texte à côté.
