import type {
  Project,
  ProjectRevision,
  Site,
  User,
} from "@websimai/core-api-types";
import { get } from "~/api";
import type { CursorMeta } from "~/types/utils";

export type ProjectLikedInfo = {
  readonly project: Project;
  readonly project_revision: ProjectRevision | null;
  readonly site: Site | null;
  readonly like: {
    readonly site_id: string;
    readonly user: User;
    readonly created_at: string;
  };
  readonly cursor: string;
};

export type UsersLikesProjectsData = {
  readonly likes: { readonly data: readonly ProjectLikedInfo[] };
  readonly meta: CursorMeta;
};

/**
 * https://api.websim.com/api/v1/users/${userId}/likes
 */
export async function getUserLikedSites(
  userId: string,
  params?: { first?: number },
) {
  const path = `/users/${userId}/likes`;
  return get<UsersLikesProjectsData>({ path, params });
}
