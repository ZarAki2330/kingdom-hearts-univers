/** Formate une date ISO (AAAA-MM-JJ ou AAAA) dans la locale demandée. */
export function formatDate(iso: string | undefined, locale: string): string | undefined {
  if (!iso) return undefined;
  if (iso.length === 4) return iso;
  const d = new Date(iso + "T00:00:00Z");
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(d);
}
