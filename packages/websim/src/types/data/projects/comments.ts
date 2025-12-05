import type { User } from "@websimai/core-api-types";
import type { Meta } from "../meta";

export type CommentContent =
  | { type: "text"; text: string; italic?: boolean }
  | { type: "break" }
  | { type: "user"; username: string }
  | {
      type: "link";
      url: `https://${string}/${string}`;
      children: [CommentContent];
    }
  | { type: "image"; url: `https://${string}/${string}`; alt: string };

export type WebsimComment = {
  id: string;
  project_id: string;
  content: {
    type: "document";
    children: { type: "paragraph"; children: CommentContent[] }[];
  } | null;
  raw_content: string | null;
  created_at: string;
  deleted: boolean;
  author: User;
  reply_count: number;
  parent_comment_id: string | null;
  reply_to_data: null;
  pinned: boolean;
  pinned_by: User | null;
  reactions: unknown[];
  source: "comments";
  type: "text";
  card_data: { type: "tip_comment"; credits_spent: number } | null;
  project_data: null;
};

export type ProjectsCommentData = {
  comment: WebsimComment;
  cursor: string;
};

export type ProjectsCommentsData = {
  comments: {
    data: ProjectsCommentData[];
    meta: Meta;
  };
};
