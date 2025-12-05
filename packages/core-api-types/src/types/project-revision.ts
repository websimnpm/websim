import type { User } from "./user";

export type ProjectRevision = {
  _type: "project_revision";
  id: string;
  version: number;
  created_at: string;
  visited_at: null;
  parent_id: string | null;
  parent_revision_version: number | null;
  parent_revision_project_id: string | null;
  created_by: User;
  meta: { version: string };
  project_id: string;
  updated_at: string;
  deleted_at: null;
  stats: { multiplayer_count: number };
  draft: boolean;
  site_id: string;
  chat_session_id: null;
  chat_session_run_index: null;
  current_screenshot_url: `https://${string}/${string}` | null;
};
