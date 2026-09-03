# Feuille de route — Kingdom Hearts Univers

**Avancement global : 48 % (26/54 tâches)**

Légende : `[x]` terminée · `[~]` en cours · `[>]` demandée · `[ ]` à faire


## I. Fondations — 7/8

Repo, outillage, squelette du site

- [x] Créer le repo GitHub ZarAki2330/kingdom-hearts-univers — _Créé via le navigateur intégré_
- [x] Créer la todo list interactive avec pourcentage — _Cet artifact, republié après chaque tâche_
- [x] Analyser le style khdestiny.fr et collecter les sources — _Palette, navigation, cartes ; khdestiny, KH Wiki, kh-story_
- [x] Initialiser Next.js + Tailwind + next-intl — _Next.js 16, App Router, TypeScript, locales fr/en/es/de/it/ja_
- [x] Design system (couleurs, typos, composants accessibles) — _Thèmes Aube/Jour/Crépuscule/Nuit, Cinzel + Nunito auto-hébergées_
- [x] Page d'accueil + header/footer + sélecteur de langue — _Skip-link, menu mobile, sélecteur de thème et de langue_
- [x] README, licence, .gitignore, CI GitHub Actions (lint + build) — _Code MIT, textes CC BY-NC-SA 4.0 ; README, CI, premier push_
- [ ] Choisir l'hébergement (Vercel / GitHub Pages) et déployer — _Décision reportée_

## II. Les jeux — 7/7

Fiches détaillées et frises chronologiques

- [x] Modèle de données des jeux (JSON typé) — _21 entrées : titre, dates JP/NA/EU, plateformes, développeur, durée, synopsis fr/en_
- [x] Page liste des jeux — _Filtres principaux / annexes / compilations_
- [x] Fiche détaillée par jeu — _Synopsis, plateformes, durée, place dans la chronologie, contenu des compilations ; galerie à venir_
- [x] Frise des jeux par date de sortie — _Onglets accessibles au clavier_
- [x] Frise des jeux par chronologie interne — _χ → Dark Road → BbS → KH → CoM/Days → KH II → coded → DDD → 0.2 → KH III → MoM → KH IV_
- [x] Ajouter les collections/remasters (1.5, 2.5, 2.8, All-in-One, Integrum Masterpiece)
- [x] Illustrations : jaquettes et logos (droits vérifiés) — _20/21 visuels officiels (KH Wiki), crédit © Square Enix / Disney, mention de retrait en pied de page ; Integrum Masterpiece reste en jaquette générée_

## III. Encyclopédie — 8/8

Personnages, ennemis, mondes, Keyblades

- [x] Modèle de données des entrées encyclopédiques — _Types typés (personnages, ennemis, mondes, Keyblades, concepts), relations, apparitions par jeu, script check:encyclopedia_
- [x] Personnages principaux (Sora, Riku, Kairi, trio Wayfinder, Organisation XIII…) — _30 fiches fr/en : héros, trio Wayfinder, Xehanort et ses incarnations, Organisation XIII, Ephemer_
- [x] Personnages Disney et Final Fantasy — _22 fiches fr/en : Mickey, Donald, Dingo, Maléfique, Pat, Merlin… ; Léon, Cloud, Sephiroth, Auron, Zack…_
- [x] Ennemis : Sans-cœur, Similis, Nescients, Non-êtres — _4 espèces + 18 ennemis emblématiques, filtrables par famille ; portraits officiels à ajouter_
- [x] Mondes (Disney, originaux) et leur apparition par jeu — _32 mondes fr/en (12 originaux, 20 Disney) avec œuvre d'origine, apparitions par jeu, habitants liés_
- [x] Keyblades : statistiques, obtention, jeu d'origine — _30 Keyblades fr/en : Force/Magie, capacité, obtention par jeu, porteur_
- [x] Organisations et concepts (Organisation XIII, Foretellers, Kingdom Hearts, χ-blade…) — _17 concepts fr/en : Kingdom Hearts, χ-blade, Organisation XIII, Gardiens, Princesses de Cœur, Prophètes, Maître des Maîtres, Guerre des Keyblades…_
- [x] Recherche globale et navigation croisée — _Palette Ctrl+K (index statique, clavier, ARIA) + page /recherche sans JS ; fiche jeu → mondes/personnages/ennemis/Keyblades, monde → habitants, personnage → monde d'origine_

## III bis. Compléter l'encyclopédie — 1/4

Couverture exhaustive de l'univers

- [~] Ajouter tous les personnages de l'univers — _Lot 1 : 80 ajoutés (131 au total). Lot 2 à venir : apprentis d’Ansem, Union χ/Dark Road, Disney secondaires_
- [~] Ajouter tous les ennemis de l'univers — _Lot 1 : 117 ajoutés (140 au total). Lot 2 à venir : Sans-cœur KH2/Days, Nescients, Avale-Rêves_
- [~] Ajouter toutes les Keyblades — _Lot 1 : 72 ajoutées (103 au total). Reste ~20 (Stormfall, Ends of the Earth, gears de Days, Union χ)_
- [x] Ajouter tous les mondes — _Lot 1 : 18 ajoutés (50 au total) — tous les mondes jouables couverts_

## III ter. Enrichir l'encyclopédie — 0/7

Images, navigation, profondeur des fiches

- [ ] Ajouter une image à chaque entrée (personnages, ennemis, mondes, Keyblades) — _Pipeline navigateur intégré → KH Wiki, crédit © Square Enix / Disney_
- [ ] Pagination des listes de l'encyclopédie — _Accessible (liens numérotés, aria-current), conservée dans l'URL_
- [ ] Filtres des listes (par jeu, type, camp…) — _Filtre par jeu en priorité ; combinable avec la recherche_
- [ ] Remplacer les jaquettes des jeux par les logos officiels (comme khdestiny.fr) — _Logos « Kingdom Hearts » (cœur bleu couronné) sur fond transparent, ex. Kingdom_Hearts_Logo.png de Wikipédia ; crédit © Square Enix / Disney_
- [ ] Préciser le film d'origine des personnages Disney — _Champ `source` + affichage sur la fiche et la carte_
- [ ] Réadapter le titre du site dans la barre de navigation
- [ ] Approfondir les fiches : histoire détaillée des personnages, mondes, Keyblades… — _Sections par jeu, chronologie interne, sources_

## IV. Histoire — 0/3

Récit de chaque jeu et chronologie de l'univers

- [ ] Résumé détaillé de l'histoire de chaque jeu — _Avec balises spoilers_
- [ ] Frise chronologique des événements importants — _De l'Âge des Fées à Quadratum_
- [ ] Glossaire des termes

## V. Soluces — 0/5

Guides et cheminement

- [ ] Structure des guides (par jeu, par monde)
- [ ] Soluce Kingdom Hearts (Final Mix)
- [ ] Soluce Kingdom Hearts II (Final Mix)
- [ ] Soluce Kingdom Hearts III + Re Mind
- [ ] Autres jeux (BbS, DDD, CoM, Days, coded, 0.2, MoM)

## VI. Traductions — 3/4

Contenu multilingue

- [x] Interface traduite : en, es, de, it — _Fichiers messages/*.json_
- [x] Interface traduite : ja — _Optionnel — première version_
- [ ] Contenu encyclopédique traduit (priorité : en)
- [x] Sélecteur de langue accessible + hreflang SEO — _Balises alternates générées par Next_

## VII. Accessibilité & qualité — 0/5

Le site doit être utilisable par tous

- [ ] Audit WCAG 2.2 AA (contrastes, focus, landmarks, ARIA)
- [ ] Navigation clavier complète et skip-links
- [ ] Mode contraste élevé, réduction des animations, taille de texte
- [ ] Tests lecteur d'écran (NVDA) sur les pages clés
- [ ] Performance Lighthouse ≥ 95, SEO, sitemap, Open Graph

## VIII. Lancement — 0/3

Devenir LA référence

- [ ] Nom de domaine et hébergement définitif
- [ ] Page À propos, mentions légales, crédits (Square Enix/Disney)
- [ ] Contributions communautaires (issues, formulaire)
