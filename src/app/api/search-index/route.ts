import { buildIndex } from "@/lib/search";

// Index statique généré au build, chargé par la palette de recherche à l'ouverture.
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildIndex(), {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
