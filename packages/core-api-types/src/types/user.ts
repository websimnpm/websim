export type User = {
  _type: "user";
  id: string;
  created_at: string;
  username: string;
  discord_id: string | null;
  discord_username: string | null;
  avatar_url: `https://${string}/${string}` | null;
  is_admin: boolean;
};
