import type { User } from "@websimai/core-api-types";

declare namespace CommentContent {
  export type Text = {
    readonly type: "text";
    readonly text: string;
    readonly italic?: boolean;
  };
  export type Break = { readonly type: "break" };
  export type User = { readonly type: "user"; readonly username: string };
  export type Link = {
    readonly type: "link";
    readonly url: `https://${string}/${string}`;
    readonly children: readonly [CommentContent];
  };
  export type Image = {
    readonly type: "image";
    readonly url: `https://${string}/${string}`;
    readonly alt: string;
  };
  export type Paragraph = {
    readonly type: "paragraph";
    readonly children: readonly CommentContent[];
  };
  export type Document = {
    readonly type: "document";
    readonly children: readonly CommentContent.Paragraph[];
  };
}

export type CommentContent =
  | CommentContent.Text
  | CommentContent.Break
  | CommentContent.User
  | CommentContent.Link
  | CommentContent.Image;

export type WebsimComment = {
  readonly id: string;
  readonly project_id: string;
  readonly content: CommentContent.Document | null;
  readonly raw_content: string | null;
  readonly created_at: string;
  readonly deleted: boolean;
  readonly author: User;
  readonly reply_count: number;
  readonly parent_comment_id: string | null;
  readonly reply_to_data: null;
  readonly pinned: boolean;
  readonly pinned_by: User | null;
  readonly reactions: readonly unknown[];
  readonly source: "comments";
  readonly type: "text";
  readonly card_data: {
    readonly type: "tip_comment";
    readonly credits_spent: number;
  } | null;
  readonly project_data: null;
};
