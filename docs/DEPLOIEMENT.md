# Mettre le site en ligne sur Vercel

Le projet est prêt à être déployé : aucune configuration particulière n'est nécessaire,
Vercel reconnaît Next.js tout seul. Il reste à créer le compte et à brancher le dépôt,
ce qui prend une dizaine de minutes.

## Pourquoi Vercel plutôt que GitHub Pages

GitHub Pages ne sert que des fichiers statiques. Or les listes de l'encyclopédie et des
jeux filtrent **sur le serveur** (`?q=`, `?type=`, `?page=`) : c'est ce qui permet aux
moteurs de recherche de voir les 650 fiches. Sur Pages, il faudrait remettre ce calcul
dans le navigateur et perdre ce bénéfice. Vercel exécute le serveur Next.js, gratuitement
pour un projet personnel, et redéploie à chaque `git push`.

## Étapes

1. **Pousser les commits en attente.** Le déploiement part de la branche `main` du dépôt
   `ZarAki2330/kingdom-hearts-univers` : tout ce qui n'est pas poussé n'existe pas pour Vercel.

   ```bash
   git push
   ```

2. **Créer le compte.** Sur [vercel.com](https://vercel.com), choisir « Continue with GitHub »
   et le forfait **Hobby** (gratuit, usage non commercial — ce qui est le cas ici).

3. **Importer le projet.** *Add New… → Project*, sélectionner le dépôt
   `kingdom-hearts-univers`, autoriser Vercel à le lire. Les réglages détectés sont les bons :

   | Réglage | Valeur attendue |
   |---|---|
   | Framework Preset | Next.js |
   | Root Directory | `./` |
   | Build Command | `next build` (par défaut) |
   | Install Command | `npm ci` (par défaut) |
   | Node.js Version | 22.x |

4. **Ajouter la variable d'environnement** avant le premier déploiement
   (*Environment Variables*, ou plus tard dans *Settings → Environment Variables*) :

   | Nom | Valeur | Portée |
   |---|---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://<le-nom-choisi>.vercel.app` | Production |

   Elle sert au plan du site, à `robots.txt`, aux adresses canoniques et aux aperçus de
   liens. Sans elle, le site fonctionne quand même : il retombe sur l'adresse fournie par
   Vercel. À changer le jour où un vrai nom de domaine est branché.

5. **Déployer.** Le premier build prend deux à trois minutes (716 pages à pré-rendre dans
   six langues). Vercel donne ensuite une adresse en `.vercel.app`.

## Après le premier déploiement

- Vérifier `https://<adresse>/sitemap.xml` : les URL doivent commencer par l'adresse
  publique, pas par `localhost`.
- Vérifier `https://<adresse>/robots.txt` et l'aperçu d'un lien partagé (l'image
  `og.png` doit s'afficher).
- Déclarer le site à Google : [Search Console](https://search.google.com/search-console),
  propriété par préfixe d'URL, puis soumettre `sitemap.xml`.

## Nom de domaine

Vercel accepte un domaine acheté ailleurs (OVH, Gandi, Cloudflare…) : *Settings → Domains*,
ajouter le domaine, puis créer chez le registrar l'enregistrement indiqué (un `A` vers
l'adresse fournie, ou un `CNAME` vers `cname.vercel-dns.com`). Le certificat HTTPS est
émis automatiquement. Penser alors à mettre `NEXT_PUBLIC_SITE_URL` à jour et à redéployer.

## Ce qui est déjà en place côté code

- **En-têtes de sécurité** sur toutes les pages (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`) et cache d'un an sur
  `/images` — voir `next.config.ts`.
- **Adresse publique** résolue dans `src/lib/site.ts` : `NEXT_PUBLIC_SITE_URL` d'abord,
  sinon l'adresse Vercel du déploiement, sinon `localhost` en développement.
- **Intégration continue** GitHub Actions (`.github/workflows/ci.yml`) : lint, types et build
  à chaque push, donc un déploiement raté se voit avant Vercel.
- **Aucun secret** dans le dépôt, aucune base de données, aucun appel externe au moment du
  rendu : le site est entièrement autonome.

## Coût et limites du forfait gratuit

Le forfait Hobby couvre largement ce projet (pages pré-rendues, images optimisées par
Vercel, bande passante de 100 Go par mois). Les deux points à surveiller le jour où le
site marchera vraiment : le nombre d'images optimisées et la bande passante. Rien à
anticiper aujourd'hui.
