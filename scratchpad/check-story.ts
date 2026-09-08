import { stories } from "@/data/story";
import { getGame } from "@/data/games";
import { getEntry } from "@/data/encyclopedia";

let bad = 0;
for (const s of stories) {
  if (!getGame(s.game)) { console.log("JEU INCONNU", s.game); bad++; }
  const ids = new Set<string>();
  for (const c of s.chapters) {
    if (ids.has(c.id)) { console.log("ID EN DOUBLE", s.game, c.id); bad++; }
    ids.add(c.id);
    if (!c.text.fr || !c.text.en) { console.log("TEXTE MANQUANT", s.game, c.id); bad++; }
  }
  for (const k of s.keyEntries ?? []) if (!getEntry(k)) { console.log("SLUG INCONNU", s.game, k); bad++; }
  for (const n of s.next ?? []) if (!getGame(n)) { console.log("SUITE INCONNUE", s.game, n); bad++; }
  const words = s.chapters.reduce((a, c) => a + c.text.fr.split(/\s+/).length, 0);
  console.log(s.game.padEnd(24), s.chapters.length + " ch.", words + " mots fr");
}
console.log(bad === 0 ? "OK" : bad + " problèmes");
