import type { Meta } from "../meta";
import type { FollowData } from "./shared";

export type FollowingData = {
  following: {
    data: FollowData[];
    meta: Meta;
  };
};
