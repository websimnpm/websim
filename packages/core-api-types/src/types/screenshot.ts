export type Screenshot = {
  _type: "screenshot";
  id: string;
  project_id: string;
  project_version: number;
  created_at: string;
  state: "done";
  height: number;
  width: number;
  content_type: "image/webp";
  moderation_state: "ok";
  source: "user" | "server";
  url: `https://${string}/${string}`;
};
