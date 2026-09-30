import type { Activity } from "@/components/kibo-ui/contribution-graph";

import { USER } from "../data/user";
import { GitHubGraph } from "./github-graph";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

type ContributionsResponse = {
  total: { lastYear: number };
  contributions: Activity[];
};

async function getContributions(username: string) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return null;
    return (await res.json()) as ContributionsResponse;
  } catch {
    return null;
  }
}

export async function GitHubContributions() {
  const data = await getContributions(USER.username);

  if (!data || data.contributions.length === 0) return null;

  return (
    <Panel id="github">
      <PanelHeader>
        <PanelTitle>GitHub Contributions</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <a
          href={`https://github.com/${USER.username}`}
          target="_blank"
          rel="noopener"
          className="block overflow-x-auto"
        >
          <GitHubGraph
            contributions={data.contributions}
            total={data.total.lastYear}
          />
        </a>
      </PanelContent>
    </Panel>
  );
}
