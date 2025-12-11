import type { User } from "@websimai/core-api-types";
import { get } from "~/api";
import type { ProjectData, ProjectsData } from "~/types";
import type { DataWithMeta } from "~/types/utils";

export * from "./likes";
export * from "./stats";

export type UserData = {
  readonly user: User;
};

/**
 * `https://api.websim.com/api/v1/users/${userId}`
 *
 * @param userId Can be either user's id or their username, but using user's id is up to 4x faster
 */
export async function getUser(
  userId: string,
  params?: { posted?: boolean; first?: number },
): Promise<UserData> {
  const path = `/users/${userId}`;
  return get<UserData>({ path, params });
}

/**
 * `https://api.websim.com/api/v1/users/${userId}/projects`
 */
export async function getUserProjects(
  userId: string,
  params?: { posted?: boolean; first?: number },
): Promise<ProjectsData> {
  const path = `/users/${userId}/projects`;
  return get<ProjectsData>({ path, params });
}

export type UserFollow = {
  readonly created_at: string;
  readonly user: User;
};

export type UserFollowData = {
  readonly follow: UserFollow;
  readonly cursor: string;
};

export type UserFollowersData = DataWithMeta<"followers", UserFollowData[]>;

/**
 * https://api.websim.com/api/v1/users/${userId}/followers
 */
export async function getUserFollowers(
  userId: string,
  params?: { first?: number; count?: boolean },
): Promise<UserFollowersData> {
  const path = `/users/${userId}/followers`;
  return get<UserFollowersData>({ path, params });
}

export type UserFollowingData = DataWithMeta<"following", UserFollowData[]>;

/**
 * `https://api.websim.com/api/v1/users/${userId}/following`
 */
export async function getUserFollowing(
  userId: string,
  params?: { first?: number; count?: boolean },
): Promise<UserFollowingData> {
  const path = `/users/${userId}/following`;
  return get<UserFollowingData>({ path, params });
}

/**
 * `https://api.websim.com/api/v1/users/${userId}/slugs/${slug}`
 */
export async function getUserProjectBySlug(
  userId: string,
  slug: string,
): Promise<ProjectData> {
  const path = `/users/${userId}/slugs/${slug}`;
  return get<ProjectData>({ path });
}
