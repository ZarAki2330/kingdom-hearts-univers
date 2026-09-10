# Feuille de route — Kingdom Hearts Univers

**Avancement global : 66 % (41/62 tâches)**

Légende : `[x]` terminée · `[~]` en cours · `[>]` demandée · `[ ]` à faire


## I. Fondations — 8/8

Repo, outillage, squelette du site

- [x] Créer le repo GitHub ZarAki2330/kingdom-hearts-univers — _Créé via le navigateur intégré_
- [x] Créer la todo list interactive avec pourcentage — _Cet artifact, republié après chaque tâche_
- [x] Analyser le style khdestiny.fr et collecter les sources — _Palette, navigation, cartes ; khdestiny, KH Wiki, kh-story_
- [x] Initialiser Next.js + Tailwind + next-intl — _Next.js 16, App Router, TypeScript, locales fr/en/es/de/it/ja_
- [x] Design system (couleurs, typos, composants accessibles) — _Thèmes Aube/Jour/Crépuscule/Nuit, Cinzel + Nunito auto-hébergées_
- [x] Page d'accueil + header/footer + sélecteur de langue — _Skip-link, menu mobile, sélecteur de thème et de langue_
- [x] README, licence, .gitignore, CI GitHub Actions (lint + build) — _Code MIT, textes CC BY-NC-SA 4.0 ; README, CI, premier push_
- [x] Choisir l'hébergement (Vercel / GitHub Pages) et déployer — _**En ligne** sur Vercel : https://kingdom-hearts-univers.vercel.app. GitHub Pages écarté (pas d'exécution serveur, donc pas de filtrage des listes côté serveur). En-têtes de sécurité, cache d'un an sur /images, adresse publique via `NEXT_PUBLIC_SITE_URL`. Vérifié en production : 4 296 URL au sitemap, robots.txt, adresses canoniques, aperçus de liens, filtres et pagination, les 6 langues ; réponse du serveur en 34 ms_

## II. Les jeux — 7/7

Fiches détaillées et frises chronologiques

- [x] Modèle de données des jeux (JSON typé) — _21 entrées : titre, dates JP/NA/EU, plateformes, développeur, durée, synopsis fr/en_
- [x] Page liste des jeux — _Filtres principaux / annexes / compilations_
- [x] Fiche détaillée par jeu — _Synopsis, plateformes, durée, place dans la chronologie, contenu des compilations ; galerie à venir_
- [x] Frise des jeux par date de sortie — _Onglets accessibles au clavier_
- [x] Frise des jeux par chronologie interne — _χ → Dark Road → BbS → KH → CoM/Days → KH II → coded → DDD → 0.2 → KH III → MoM → KH IV_
- [x] Ajouter les collections/remasters (1.5, 2.5, 2.8, All-in-One, Integrum Masterpiece)
- [x] Illustrations : jaquettes et logos (droits vérifiés) — _Jaquettes officielles (KH Wiki) 20/21, désormais visuel secondaire des fiches ; logos en tête_

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

## III bis. Compléter l'encyclopédie — 4/4

Couverture exhaustive de l'univers

- [x] Ajouter tous les personnages de l'univers — _231 personnages (2 lots) : originaux, Disney, Final Fantasy, Union χ, Dark Road ; PNJ mineurs au fil de l'eau_
- [x] Ajouter tous les ennemis de l'univers — _250 ennemis (2 lots) : Sans-cœur, Similis, Nescients, Avale-Rêves, boss de toute la série_
- [x] Ajouter toutes les Keyblades — _120 Keyblades : toute la série, y compris gears de Days et Union χ_
- [x] Ajouter tous les mondes — _50 mondes, toutes les visites de la série_

## III ter. Enrichir l'encyclopédie — 8/8

Images, navigation, profondeur des fiches

- [x] Ajouter une image à chaque entrée (personnages, ennemis, mondes, Keyblades) — _658 entrées sur 686 illustrées (rendus officiels KH Wiki, webp 320 px, crédit sur chaque fiche) ; 28 sans image fiable, voir docs/IMAGES.md_
- [x] Pagination des listes de l'encyclopédie — _48 entrées par page, liens réels ?page=, aria-current, précédent/suivant, 6 langues_
- [x] Filtres des listes (par jeu, type, camp…) — _Jeu (liste réelle des apparitions), type, camp (alignement / rôle) + recherche accentuée ; état dans l'URL, combinable avec la pagination_
- [x] Remplacer les jaquettes des jeux par les logos officiels (comme khdestiny.fr) — _19 logos officiels (KH Wiki, webp 800 px, fond transparent ; 0.2 et 2.8 détourés) sur cartes, chronologie et fiches ; jaquette conservée en visuel secondaire ; All-in-One et Integrum en visuel généré_
- [x] Préciser le film d'origine des personnages Disney — _139 personnages Disney : œuvre d'origine (fr/en, année) dérivée du monde + corrections manuelles, affichée sur la carte et la fiche_
- [x] Réadapter le titre du site dans la barre de navigation — _Titre sur deux lignes compactes (Kingdom Hearts / UNIVERS), plus de retour à la ligne ; menu mobile en icône avec le sélecteur de thème intégré_
- [x] Approfondir les fiches : histoire détaillée des personnages, mondes, Keyblades… — _486 fiches approfondies : les 231 personnages, les 50 mondes, les 120 Keyblades, les 16 concepts, les 4 espèces d'ennemis et 65 boss. Histoire par jeu (ordre chronologique interne), anecdotes et sources, section repliée (spoilers). Les 181 ennemis communs gardent leur description courte_
- [x] Afficher les statistiques des Keyblades par jeu — _Tableau « Statistiques par jeu » sur les fiches : 114 Keyblades, 171 lignes (Force, Magie, notes de Chain of Memories, portée, capacités), extraites du KH Wiki ; fourchettes du niveau 0 au niveau 10 pour KH III ; colonnes affichées seulement si renseignées_

## III quater. Finitions de l'interface — 7/10

Navigation, visuels et détails de présentation

- [x] Drapeaux dans le sélecteur de langue — _Drapeaux dessinés en SVG (les emojis drapeaux ne s'affichent pas sous Windows) + nom de la langue ; menu de liens réels qui conservent la page courante, clavier et Échap_
- [x] Sous-menus dans la barre de navigation — _Encyclopédie → les 5 catégories ; au survol et au clavier sur ordinateur (aria-expanded, Échap), sous-liste dépliée dans le menu mobile_
- [x] Supprimer les encadrés vides des fiches — _L'encadré des caractéristiques ne s'affiche plus quand l'entrée n'a aucune donnée à montrer (ex. Keyblades sans statistiques)_
- [ ] Remplacer les images peu flatteuses de certaines fiches — _Captures d'écran et visuels mal cadrés à remplacer par de meilleurs rendus_
- [x] Colorer les fiches selon la catégorie — _Chaque famille pose une variable `--kind` : Disney en bleu, Final Fantasy en argent, originaux en doré ; Sans-cœur rouge, Similis gris-bleu, Nescients violet, Avale-Rêves rose. Liseré à gauche des cartes, surtitre et survol colorés, jeu de teintes clair et sombre vérifié à 4,5:1 sur les 4 thèmes_
- [ ] Re-télécharger les visuels en haute définition — _Les fichiers font 320 px de haut : la visionneuse plein écran est bornée au double. Reprendre les 650 images du wiki en 800-1000 px_
- [ ] Ajouter plusieurs images par fiche (mondes, personnages) — _Galerie ou images illustrant les paragraphes de l'histoire détaillée_
- [x] Retirer le lien « code source sur GitHub » — _Lien et clé de traduction supprimés dans les 6 langues_
- [x] Corriger le surlignage bleu de la recherche (Ctrl+K) — _Contour de focus en or du thème au lieu du bleu, partout ; le champ de la palette n'a plus de contour (curseur + bordure d'accent suffisent)_
- [x] Revoir les fonds de couleur des jeux — _La couleur du jeu forme un halo dans les angles, le centre reste sombre là où se pose le logo, plus une vignette sur les bords ; 17 couleurs revues pour éviter les collisions avec la teinte des logos_

## IV. Histoire — 3/3

Récit de chaque jeu et chronologie de l'univers

- [x] Résumé détaillé de l'histoire de chaque jeu — _Section `/histoire` : les 14 jeux résumés (≈ 47 000 mots fr + en), index chronologique, sommaire ancré, avertissement spoilers, personnages et lieux clés liés à l'encyclopédie ; sous-menu Histoire dans la navbar_
- [x] Frise chronologique des événements importants — _Onglet « Par événements » de la chronologie : 60 événements en 8 ères, de l'Âge des Fées à Quadratum, avec repère temporel, jeu où l'événement est raconté et entrées liées_
- [x] Glossaire des termes — _Page `/glossaire` : 60 termes triés alphabétiquement, index par lettre, définition courte puis explication, renvoi vers la fiche et les termes liés_

## V. Soluces — 2/5

Guides et cheminement

- [x] Structure des guides (par jeu, par monde) — _Section /soluces dans les 6 langues : index des guides, page par jeu (version couverte, sommaire des 15 sections, objectifs du 100 %) et page par section (étapes, combats avec attaques à connaître, liste de ramassage typée, « à ne pas rater », navigation précédent/suivant). Kingdom Hearts Final Mix ouvert avec le prologue et les Îles du Destin rédigés. Présentation reprise de khdestiny : grilles de tuiles illustrées pour le cheminement et pour les quêtes annexes_
- [x] Soluce Kingdom Hearts (Final Mix) — _les 15 sections du cheminement rédigées, du plongeon au cœur au Monde du Chaos, et 8 quêtes annexes sur 11 (99 dalmatiens, marques Trio, Forêt des Rêves Bleus, trophées, cartes postales, atelier des Mogs, ennemis spéciaux, tournois du Colisée). 60 visuels cliquables (visionneuse plein écran) : une capture du combat dans chacun des 30 encadrés, plusieurs par chapitre, toutes prises dans Kingdom Hearts et non dans les épisodes suivants_
- [ ] Soluce Kingdom Hearts II (Final Mix)
- [ ] Soluce Kingdom Hearts III + Re Mind
- [ ] Autres jeux (BbS, DDD, CoM, Days, coded, 0.2, MoM)

## VI. Traductions — 3/5

Contenu multilingue

- [x] Interface traduite : en, es, de, it — _Fichiers messages/*.json_
- [x] Interface traduite : ja — _Optionnel — première version_
- [ ] Contenu encyclopédique traduit (priorité : en)
- [ ] Vérifier les traductions existantes — _En cours : 38 noms alignés sur le wiki FR (1re passe), puis 76 Keyblades renommées d'après le champ `nom` du wiki francophone (Monoptéryx, As de Cœur, Trésor des mers, Shérif de l'Ouest…) et 200 occurrences corrigées dans les textes ; noms composés Earthshaker/Ends of the Earth et Rainfell/Stormfall séparés. Restent les ennemis, les mondes et les concepts_
- [x] Sélecteur de langue accessible + hreflang SEO — _Balises alternates générées par Next_

## VII. Accessibilité & qualité — 4/5

Le site doit être utilisable par tous

- [x] Audit WCAG 2.2 AA (contrastes, focus, landmarks, ARIA) — _axe-core sur 11 pages × 4 thèmes : 0 violation ; accent assombri (--accent-text / --accent-fill) pour 4,5:1, titres de résultats masqués, initiales sans mots-outils_
- [x] Navigation clavier complète et skip-links — _Piège de focus et retour du focus dans la palette Ctrl+K, sous-menus ouvrables à Entrée/Espace, ordre de tabulation vérifié, indicateur de focus sur tous les éléments (script `scratchpad/keyboard.mjs`)_
- [x] Mode contraste élevé, réduction des animations, taille de texte — _Page `/accessibilite` (6 langues) : contraste élevé, animations réduites, texte 112 %/125 %, mémorisés par appareil et appliqués avant le premier rendu ; en-tête qui passe à la ligne, plus aucun débordement horizontal de 390 à 1440 px dans les trois tailles ; menu compact jusqu'à 1024 px_
- [ ] Tests lecteur d'écran (NVDA) sur les pages clés
- [x] Performance Lighthouse ≥ 95, SEO, sitemap, Open Graph — _Lighthouse ordinateur : perf 95, accessibilité 100, bonnes pratiques 100, SEO 100 en moyenne sur 6 pages. Sitemap (4 296 URL avec hreflang), robots.txt, manifeste, favicon et icônes, image de partage 1200×630, canonical et Open Graph sur toutes les pages. Listes de l'encyclopédie et des jeux rendues côté serveur (cartes dans le HTML), polices via next/font (décalage de mise en page ramené de 0,32 à 0), plus de redirection selon la langue du navigateur_

## VIII. Lancement — 1/3

Devenir LA référence

- [ ] Nom de domaine et hébergement définitif
- [x] Page À propos, mentions légales, crédits (Square Enix/Disney)
- [ ] Contributions communautaires (issues, formulaire)

## IX. Édition et confort de lecture — 2/3

Gérer le contenu sans passer par le code, et regarder les images de près

- [ ] Mode administrateur pour modifier les fiches à la main — _Édition du contenu des fiches, envoi de photos et création de nouvelles fiches depuis le site, sans toucher au code_
- [x] Agrandir une image au clic — _Visionneuse plein écran sur les fiches de l'encyclopédie et les jaquettes : Échap ou clic à côté pour fermer, tabulation piégée, focus rendu à la vignette, défilement de la page bloqué, crédit conservé sous l'image. Agrandissement limité au double du fichier (320 px de haut) pour rester net_
- [x] Masquer le menu accessibilité dans le pied de page — _Lien retiré ; la page /accessibilite reste en ligne et référencée dans le sitemap_
