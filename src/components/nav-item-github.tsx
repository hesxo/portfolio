import React from "react";

import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_REPO, SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export async function NavItemGitHub() {
  let stargazers_count = 0;

  try {
    // Build headers only when a token is present to avoid invalid auth failures
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (process.env.GITHUB_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_API_TOKEN}`;
    }

    // If we're running locally (dev) and don't have a GitHub token, skip the API
    // call to avoid 404s for private or non-published repos and to prevent
    // noisy warnings during development. In production, or when a token is
    // provided, fetch the repo info so we can show star counts.
    const isProduction = process.env.NODE_ENV === "production";
    const hasToken = Boolean(process.env.GITHUB_API_TOKEN);

    if (!isProduction && !hasToken) {
      // Skip fetching in dev without a token; return graceful fallback.
      // eslint-disable-next-line no-console
      console.debug("NavItemGitHub: skipping GitHub API fetch in dev (no token)");
    } else {
      // Allow overriding the repo at runtime via env for debugging or CI
      const repoToFetch = process.env.SOURCE_CODE_GITHUB_REPO ?? SOURCE_CODE_GITHUB_REPO;
      const apiUrl = `https://api.github.com/repos/${repoToFetch}`;

      const res = await fetch(apiUrl, {
        headers,
        next: { revalidate: 86400 }, // Cache for 1 day
      });

      if (res.ok) {
        const json = await res.json();
        stargazers_count = json?.stargazers_count ?? 0;
      } else {
        // Non-OK responses (rate limit, forbidden, not found) should not crash the app.
        // Log more details to help debugging (which URL was requested and status).
        console.warn(
          "NavItemGitHub: GitHub API returned non-OK response",
          res.status,
          res.statusText,
          { url: apiUrl }
        );
      }
    }
  } catch (err) {
    // Network or runtime errors (e.g. fetch failed) should be handled gracefully
    // so the layout can render without failing.
    // eslint-disable-next-line no-console
    console.warn("NavItemGitHub: failed to fetch GitHub repo info", err);
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="gap-1.5 pr-1.5 pl-2" variant="ghost" asChild>
          <a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
            <Icons.github className="-translate-y-px" />
            <span className="sr-only">GitHub</span>
            <span className="font-mono text-[13px] text-muted-foreground">
              {new Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short",
              }).format(stargazers_count)}
            </span>
          </a>
        </Button>
      </TooltipTrigger>

      <TooltipContent className="rounded-full bg-black dark:bg-zinc-800 px-3 py-1 text-sm text-white font-mono">
        {new Intl.NumberFormat("en-US").format(stargazers_count)} stars
      </TooltipContent>
    </Tooltip>
  );
}
