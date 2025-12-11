import type { Project, ProjectRevision, Site } from "@websimai/core-api-types";
import { get } from "~/api";
import type { OffsetMeta, WithIncluded } from "~/types/utils";

export type FeedTrendingProject = {
  readonly site: Site;
  readonly likes: number;
  readonly views: number;
  readonly remixes: number;
  readonly comments: number;
  readonly is_multiplayer: boolean;
  readonly project: Project;
  readonly project_revision: ProjectRevision;
  readonly token: null;
  readonly cursor: string;
};

export type FeedTrendingData = WithIncluded<{
  readonly feed: {
    readonly data: readonly FeedTrendingProject[];
    readonly meta: OffsetMeta;
  };
}>;

/**
 * `https://api.websim.com/api/v1/feed/trending`
 */
export async function getFeedTrending(params?: {
  limit?: number;
  offset?: number;
  range?: "day" | "month" | "week" | "all";
  feed?: "hot" | "new" | "top" | "viral" | "recommended";
}): Promise<FeedTrendingData> {
  const path = `/feed/trending`;
  return get<FeedTrendingData>({ path, params });
}
