// Vérifie les visuels : fichiers présents, taille minimale, poids, crédit renseigné.
// Usage : node scripts/check-covers.mjs
import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const src = readFileSync(resolve("src/data/games.ts"), "utf8");
const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const covers = [...src.matchAll(/cover:\s*\{\s*src:\s*"([^"]+)",\s*credit:\s*"([^"]*)",\s*width:\s*(\d+),\s*height:\s*(\d+)/g)];

let errors = 0;
const withCover = new Set();
for (const [, path, credit, w, h] of covers) {
  const file = resolve("public", "." + path);
  const slug = path.split("/").pop().replace(/\.\w+$/, "");
  withCover.add(slug);
  if (!existsSync(file)) { console.error(`✖ ${path} : fichier absent`); errors++; continue; }
  if (Number(w) < 400 && Number(h) < 400) { console.error(`✖ ${path} : ${w}×${h}px trop petit (min 400px)`); errors++; }
  if (!credit.trim()) { console.error(`✖ ${path} : crédit manquant`); errors++; }
  const kb = Math.round(statSync(file).size / 1024);
  if (kb > 400) console.warn(`⚠ ${path} : ${kb} Ko (compresser sous 400 Ko)`);
}
const missing = slugs.filter((s) => !withCover.has(s));
console.log(`${withCover.size}/${slugs.length} jaquettes officielles.`);
if (missing.length) console.log("Jaquette générée (à remplacer) :\n  - " + missing.join("\n  - "));
process.exit(errors ? 1 : 0);
