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
  readonly daily_stats: DailyStat[];
  readonly top_referrers: TopReferrer[];
  readonly top_countries: TopCountry[];
  readonly mobile_ratio: number;
  readonly playtime_stats: [PlaytimeStat];
  readonly top_tippers: TopTipper[];
  readonly total_tip_amount: number;
};
