import type { User } from "./user";

export type WebsimPromptType =
  | { type: "plaintext"; text: string }
  | { type: "manual-edit"; text: "" }
  | { type: "refactor"; text: string }
  | { type: "fix"; text: string }
  | { type: "get"; text: string }
  | { type: "tweak-edit"; text: ""; data: null };

export type SiteLoreAttachment = {
  id: string;
  mediaType: string;
  filename: string;
  description: string;
  useVision: boolean;
};

export type SiteLore = {
  version: 1;
  attachments: SiteLoreAttachment[];
  enableApi?: boolean;
  enableMobilePrompt?: boolean;
  enableDB?: boolean;
  enableMultiplayer_v2?: boolean;
  enableDB_v2_1?: boolean;
  enableLLM2?: boolean;
  enableTweaks?: boolean;
  enableComments?: boolean;
};

export type Site = {
  _type: "site";
  id: string;
  parent_id: string | null;
  created_at: string;
  state: "initial" | "generating" | "done" | "failed";
  model: string;
  lore: SiteLore | null;
  title: string | null;
  url: string | null;
  prompt: WebsimPromptType;
  owner: User;
  link_url: `/p/${string}`;
  versioned_link_url: `/p/${string}/${number}`;
  deleted_at: string | null;
  yapping: string | null;
};
