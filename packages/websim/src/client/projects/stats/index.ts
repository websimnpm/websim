import { get } from "~/api";

type DailyStat = {
  readonly day: string;
  readonly views: number;
  readonly engagement_rewards_earned: number;
  readonly offplatform_engagement_rewards_earned: number;
};

type TopReferrer = {
  readonly referrer: string;
  readonly views: number;
};

type TopCountry = {
  readonly country: string;
  readonly views: number;
};

type PlaytimeStat = {
  readonly total_active_dur: number;
  readonly avg_active_dur: number;
};

type TopTipper = {
  readonly user_id: string;
  readonly username: string;
  readonly total_tips: number;
};

export type ProjectsStatsData = {
  readonly daily_stats: readonly DailyStat[];
  readonly top_referrers: readonly TopReferrer[];
  readonly top_countries: readonly TopCountry[];
  readonly mobile_ratio: number;
  readonly playtime_stats: readonly [PlaytimeStat];
  readonly top_tippers: readonly TopTipper[];
  readonly total_tip_amount: number;
};

/**
 * https://api.websim.com/api/v1/projects/${projectId}/stats
 */
export async function getProjectStats(projectId: string) {
  const path = `/projects/${projectId}/stats`;
  return get<ProjectsStatsData>({ path });
}
