import type { Project } from "./project";
import type { ProjectRevision } from "./project-revision";
import type { Site } from "./site";
import type { User } from "./user";

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
    readonly url: string;
    readonly children: readonly [CommentContent.Text | CommentContent.Image];
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
  readonly reactions: readonly {
    readonly emoji: { readonly name: string };
    readonly user_ids: readonly string[];
  }[];
  readonly source: "comments";
  readonly type: "text";
  readonly card_data:
    | { readonly type: "tip_comment"; readonly credits_spent: number }
    | {
        readonly type: "project_post";
        readonly project: Project;
        readonly project_revision: ProjectRevision;
        readonly site: Site;
      }
    | null;
  readonly project_data: null;
  readonly post_presentation:
    | { readonly type: "tweet" }
    | {
        readonly type: "video";
        readonly video_url: `https://${string}/${string}`;
      }
    | null;
};
