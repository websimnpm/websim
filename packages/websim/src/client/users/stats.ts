import { get } from "~/api";

export type UsersStats = {
  readonly total_likes: number;
  readonly total_views: number;
  readonly user_id: string;
  readonly following_count: number;
  readonly follower_count: number;
};

export type UsersStatsData = {
  readonly stats: UsersStats;
};

/**
 * https://api.websim.com/api/v1/users/${userId}/stats
 */
export async function getUserStats(userId: string) {
  const path = `/users/${userId}/stats`;
  return get<UsersStatsData>({ path });
}
