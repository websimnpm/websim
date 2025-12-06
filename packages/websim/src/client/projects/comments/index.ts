import { get } from "~/api";
import type { WebsimComment } from "~/types";
import type { DataWithMeta } from "~/types/utils";

export type ProjectsCommentData = {
  readonly comment: WebsimComment;
  readonly cursor: string;
};

export type ProjectsCommentsData = DataWithMeta<
  "comments",
  ProjectsCommentData[]
>;

/**
 * https://api.websim.com/api/v1/projects/${projectId}/comments
 */
export async function getProjectComments(
  projectId: string,
  params?: {
    first?: number;
    sort_by?: "best" | "created_at";
    sort_order?: "desc" | "asc";
    only_tips?: boolean;
    after?: string;
  },
) {
  const path = `/projects/${projectId}/comments`;
  return get<ProjectsCommentsData>({ path, params });
}

/**
 * https://api.websim.com/api/v1/projects/${projectId}/comments/${commentId}
 */
export async function getProjectComment(projectId: string, commentId: string) {
  const path = `/projects/${projectId}/comments/${commentId}`;
  return get<ProjectsCommentData>({ path });
}

/**
 * https://api.websim.com/api/v1/projects/${projectId}/comments/${commentId}/replies
 */
export async function getProjectCommentReplies(
  projectId: string,
  commentId: string,
  params?: {
    first?: number;
    sort_by?: "best" | "created_at";
  },
) {
  const path = `/projects/${projectId}/comments/${commentId}/replies`;
  return get<ProjectsCommentsData>({ path, params });
}
