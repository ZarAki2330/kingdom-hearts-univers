/** Formate une date ISO (AAAA-MM-JJ ou AAAA) dans la locale demandée. */
export function formatDate(iso: string | undefined, locale: string): string | undefined {
  if (!iso) return undefined;
  if (iso.length === 4) return iso;
  const d = new Date(iso + "T00:00:00Z");
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(d);
}

const ROMAN: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

/** Numérotation en chiffres romains des sommaires et des chapitres (1 → I, 14 → XIV). */
export function roman(n: number): string {
  if (!Number.isFinite(n) || n < 1) return String(n);
  let rest = Math.floor(n);
  let out = "";
  for (const [value, letters] of ROMAN) {
    while (rest >= value) {
      out += letters;
      rest -= value;
    }
  }
  return out;
}
