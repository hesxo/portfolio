"use client";

import {
  type Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";

export function GitHubGraph({
  contributions,
  total,
}: {
  contributions: Activity[];
  total: number;
}) {
  return (
    <ContributionGraph
      data={contributions}
      totalCount={total}
      blockSize={11}
      blockMargin={3}
      fontSize={12}
      className="mx-auto"
      labels={{ totalCount: "{{count}} contributions in the last year" }}
    >
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={activity}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount />
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}
