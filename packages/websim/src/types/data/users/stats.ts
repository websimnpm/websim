export type UsersStats = {
  total_likes: number;
  total_views: number;
  user_id: string;
  following_count: number;
  follower_count: number;
};

export type UsersStatsData = {
  stats: UsersStats;
};
