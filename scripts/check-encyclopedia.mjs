// Contrôle de cohérence de l'encyclopédie : slugs uniques, relations valides, jeux existants.
// Usage : npm run check:encyclopedia
import { readFileSync, readdirSync } from "node:fs";

const games = [...readFileSync("src/data/games.ts", "utf8").matchAll(/^\s{4}slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
const files = readdirSync("src/data/encyclopedia").filter((f) => /^(characters|enemies|worlds|keyblades|concepts)/.test(f));
const slugs = new Map();
const relations = [];
const appearances = [];
let errors = 0;

for (const f of files) {
  const src = readFileSync(`src/data/encyclopedia/${f}`, "utf8");
  // Chaque entrée commence par "slug:" au niveau d'indentation 4
  const blocks = src.split(/\n  \{\n/).slice(1);
  for (const b of blocks) {
    const slug = b.match(/^\s*slug:\s*"([^"]+)"/m)?.[1];
    if (!slug) continue;
    if (slugs.has(slug)) { console.error(`✖ slug en double : ${slug} (${f} et ${slugs.get(slug)})`); errors++; }
    slugs.set(slug, f);
    for (const m of b.matchAll(/\{ slug: "([^"]+)", label:/g)) relations.push([slug, m[1]]);
    const app = b.match(/appearances:\s*\[([^\]]*)\]/)?.[1] ?? "";
    for (const m of app.matchAll(/"([^"]+)"/g)) appearances.push([slug, m[1]]);
    if (!/description:\s*L\(/.test(b)) { console.error(`✖ ${slug} : description manquante`); errors++; }
  }
}
for (const [from, to] of relations) if (!slugs.has(to)) { console.error(`✖ relation cassée : ${from} → ${to}`); errors++; }
for (const [from, g] of appearances) if (!games.includes(g)) { console.error(`✖ jeu inconnu : ${from} → ${g}`); errors++; }
console.log(`${slugs.size} entrées, ${relations.length} relations, ${appearances.length} apparitions.`);
process.exit(errors ? 1 : 0);
