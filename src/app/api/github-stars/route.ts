import { NextResponse } from "next/server";
import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";

// Simple proxy that returns stargazers_count for the configured repo.
export async function GET() {
  try {
    const repo = SOURCE_CODE_GITHUB_REPO;
    const apiUrl = `https://api.github.com/repos/${repo}`;

    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (process.env.GITHUB_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_API_TOKEN}`;
    }

    const res = await fetch(apiUrl, { headers });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API returned ${res.status}` },
        { status: res.status }
      );
    }

    const json = await res.json();
    const count = json?.stargazers_count ?? 0;

    // Cache this response for 1 hour at CDN/edge
    return NextResponse.json({ stargazers_count: count }, { status: 200, headers: { "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=60" } });
  } catch (err) {
    // Return 500 on errors
    // eslint-disable-next-line no-console
    console.warn("/api/github-stars: failed to fetch", err);
    return NextResponse.json({ stargazers_count: 0, error: "fetch_failed" }, { status: 500 });
  }
}
