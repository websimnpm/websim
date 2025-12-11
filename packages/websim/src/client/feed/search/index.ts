import type { Project, ProjectRevision, Site } from "@websimai/core-api-types";
import { get } from "~/api";

import type { OffsetMeta, WithIncluded } from "~/types/utils";

export type FeedSearchProject = {
  readonly site: Site;
  readonly likes: number;
  readonly views: number;
  readonly remixes: number;
  readonly comments: number;
  readonly project: Project;
  readonly project_revision: ProjectRevision;
  readonly token: null;
  readonly cursor: string;
};

export type FeedSearchData = WithIncluded<{
  readonly feed: {
    readonly data: readonly FeedSearchProject[];
    readonly meta: OffsetMeta;
  };
}>;

/**
 * `https://api.websim.com/api/v1/feed/search/${sort}/${search}`
 */
export async function searchFeed(
  sort: "best" | "newest" | "best_template",
  search: string,
  params?: {
    limit?: number;
    offset?: number;
    range?: "day" | "month" | "week" | "all";
  },
) {
  const path = `/feed/search/${sort}/${encodeURIComponent(search)}`;
  return get<FeedSearchData>({ path, params });
}
