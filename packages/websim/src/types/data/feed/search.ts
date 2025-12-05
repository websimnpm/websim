import type { Site, Project, ProjectRevision } from "@websimai/core-api-types";
import type { WithIncluded } from "../../lib/utils";

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
    readonly data: FeedSearchProject[];
    readonly meta: { readonly offset: number; readonly limit: number };
  };
}>;
