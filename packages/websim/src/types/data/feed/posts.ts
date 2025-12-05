import type { WebsimComment, ProjectInfo } from "../projects";

type FeedPostsDataComment = WebsimComment & {
  author_id: string;
  project_post_project_id: string;
};

export type FeedPostsData = {
  data: { comment: FeedPostsDataComment }[];
  included_projects: ProjectInfo[];
  meta: {
    has_next_page: boolean;
    has_previous_page: boolean;
    offset: number;
    limit: number;
    total_processed: number;
  };
};
