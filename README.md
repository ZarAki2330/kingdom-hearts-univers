# Kingdom Hearts Univers

Encyclopédie de l'univers **Kingdom Hearts** : jeux, personnages, ennemis, mondes, Keyblades, histoire de chaque épisode et frises chronologiques (par date de sortie et par chronologie interne).

Objectif : devenir *la* référence francophone sur la saga, traduite en anglais, espagnol, allemand, italien (et japonais), et accessible à tous.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript, Turbopack)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) — locales `fr` (défaut), `en`, `es`, `de`, `it`, `ja`
- Polices auto-hébergées (Cinzel, Nunito) via Fontsource — aucun appel à Google Fonts

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run lint
```

## Structure

```
messages/            traductions de l'interface (un JSON par langue)
src/app/[locale]/    pages (accueil, jeux, chronologie…)
src/components/      composants (Header, Timeline, GameCard…)
src/data/            données encyclopédiques typées (games.ts…)
src/i18n/            routage et configuration next-intl
docs/TODO.md         feuille de route et avancement
```

## Accessibilité

Le site vise le niveau **WCAG 2.2 AA** : navigation clavier complète, lien d'évitement, landmarks, contrastes vérifiés dans les quatre thèmes (Aube, Jour, Crépuscule, Nuit), respect de `prefers-reduced-motion` et `forced-colors`.

## Sources

- [KHDestiny](https://www.khdestiny.fr/)
- [Kingdom Hearts Wiki](https://kingdomhearts.fandom.com/)
- [KH-Story — bibliographie](https://kh-story.com/bibliographie)
- [HowLongToBeat](https://howlongtobeat.com/) pour les durées indicatives

## Licences

- **Code** : [MIT](LICENSE).
- **Textes éditoriaux** (synopsis, fiches, guides, traductions) : [CC BY-NC-SA 4.0](LICENSE-CONTENT.md).
- **Visuels officiels** (jaquettes, logos, artworks) : propriété de Square Enix et Disney, utilisés à titre d'illustration. La politique d'ajout des images est décrite dans [docs/IMAGES.md](docs/IMAGES.md).

## Mentions

Site de fans sans affiliation avec Square Enix ou Disney. *Kingdom Hearts* est une marque de Square Enix Co., Ltd. et de Disney.
