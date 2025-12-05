import type { User } from "./user";

export type Project = {
  _type: "project";
  id: string;
  created_at: string;
  updated_at: string;
  title: string | null;
  visibility: "public";
  slug: string | null;
  created_by: User | null;
  current_version: number | null;
  last_posted_version: number | null;
  parent_id: string | null;
  parent_version: number | null;
  deleted_at: null;
  posted: boolean;
  stats: { views: number; likes: number; comments: number };
  auto_set_current: boolean;
  description: string | null;
  comments_mode: "open" | "closed";
  enable_chat: boolean;
  from_template: boolean | null;
  domains: [{ name: string }] | { name: string }[];
  thumbnail: {
    moderation_state: "ok" | "bad";
    url: `https://${string}/${string}` | null;
  } | null;
  video: { url: `https://${string}/${string}` } | null;
};
