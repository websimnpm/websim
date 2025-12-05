import type { Project, ProjectRevision, Site } from "@websimai/core-api-types";
import type { WithIncluded } from "../../lib/utils";

export type FeedTrendingProject = {
  site: Site;
  likes: number;
  views: number;
  remixes: number;
  comments: number;
  is_multiplayer: boolean;
  project: Project;
  project_revision: ProjectRevision;
  token: null;
  cursor: string;
};

export type FeedTrendingData = WithIncluded<{
  feed: {
    data: FeedTrendingProject[];
    meta: { offset: number; limit: number };
  };
}>;
