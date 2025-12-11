import { get } from "~/api";

import type { ProjectInfo, WebsimComment } from "~/types";

type FeedPostsDataComment = WebsimComment & {
  readonly author_id: string;
  readonly project_post_project_id: string;
};

export type FeedPostsData = {
  readonly data: readonly { readonly comment: FeedPostsDataComment }[];
  readonly included_projects: readonly ProjectInfo[];
  readonly meta: {
    readonly has_next_page: boolean;
    readonly has_previous_page: boolean;
    readonly offset: number;
    readonly limit: number;
    readonly total_processed: number;
  };
};

/**
 * `https://api.websim.com/api/v1/feed/posts`
 */
export async function getFeedPosts(params?: {
  limit?: number;
  offset?: number;
  sort?: "for_you" | "following" | "latest";
}) {
  const path = `/feed/posts`;
  return get<FeedPostsData>({ path, params });
}
