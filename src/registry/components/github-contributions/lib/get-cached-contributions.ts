import { unstable_cache } from "next/cache"

import type { Activity } from "@/registry/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const fetchCachedContributions = unstable_cache(
  async (username: string) => {
    // Public API, so a missing env var falls back to it instead of failing the build.
    const apiUrl =
      process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL ||
      "https://github-contributions-api.jogruber.de/v4"

    const res = await fetch(`${apiUrl}/${username}?y=last`, {
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) {
      return []
    }
    const data = (await res.json()) as GitHubContributionsResponse
    return data.contributions ?? []
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)

/**
 * Contributions for `username`, or an empty list if the API is unreachable.
 * Errors are caught outside the cache so a failed fetch is retried next time
 * instead of caching an empty graph, and an outage never fails the build.
 */
export async function getCachedContributions(username: string) {
  try {
    return await fetchCachedContributions(username)
  } catch {
    return []
  }
}
