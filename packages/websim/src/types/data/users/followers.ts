import type { Meta } from "../meta";
import type { FollowData } from "./shared";

export type FollowersData = {
  followers: {
    data: FollowData[];
    meta: Meta;
  };
};
