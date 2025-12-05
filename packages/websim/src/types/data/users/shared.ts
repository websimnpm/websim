import type { User } from "@websimai/core-api-types";

export type Follow = {
  readonly created_at: string;
  readonly user: User;
};

export type FollowData = {
  readonly follow: Follow;
  readonly cursor: string;
};
