import type { User } from "@websimai/core-api-types";
import { get } from "~/api";

export type UserSearchData = {
  readonly data: readonly User[];
};

/**
 * `https://api.websim.com/api/v1/user-search`
 */
export async function searchUsers(params: {
  query: string;
}): Promise<UserSearchData> {
  const path = "/user-search";
  return get<UserSearchData>({ path, params });
}
