import type { WebsimComment } from "@websimai/shared-types";
import type {
  Chat,
  ImageGenOptions,
  ImageGenResult,
  TextToSpeechOptions,
  TextToSpeechResult,
  WebsimUser,
  WebsimUserOrAnonymous,
} from "./types";

export interface WebsimClientAPI {
  getUser(): Promise<WebsimUserOrAnonymous>;
  /** Alias for getUser */
  getCurrentUser(): Promise<WebsimUserOrAnonymous>;
  /** @deprecated Use getBootstrap instead */
  getDistinctId(): Promise<string>;
  getBootstrap(): Promise<{
    readonly distinct_id: string;
    readonly session_id: string;
  }>;
  getCreatedBy(): Promise<WebsimUser>;
  /** Alias for getCreatedBy */
  getCreator(): Promise<WebsimUser>;
  getCurrentProject(): Promise<{
    readonly id: string;
    readonly title: string;
    readonly description: string;
  }>;
  getColorScheme(): Promise<"light" | "dark">;

  postComment(args: {
    content: string;
    credits?: number;
    images?: string[];
  }): Promise<{ readonly error?: "User has not interacted with the page" }>;

  renderVideo(args: {
    composition: string;
    inputProps?: Record<string, unknown>;
    options?: unknown;
    onProgress?: (progress: unknown) => void;
  }): Promise<{ url: string; renderId: string }>;

  addEventListener(
    eventType: "comment:created",
    callback: (data: {
      readonly comment: WebsimComment;
      readonly cursor: string;
    }) => void,
  ): () => void;

  upload(file: File): Promise<string>;

  readonly chat: Chat;

  imageGen(args: ImageGenOptions): Promise<ImageGenResult>;

  textToSpeech(args: TextToSpeechOptions): Promise<TextToSpeechResult>;

  readonly experimental?: {
    readonly v0: {
      login(): Promise<void>;

      /**
       * Saves the given htmlContent to a new websim site.
       * @param htmlContent html content to save
       * @returns object with id of the saved site
       */
      save(htmlContent: string): Promise<{ id: string }>;

      /**
       * Returns the HTML for the given siteId.
       * Defaults to the current websimsite.
       * @param siteId
       * @returns HTML for the given siteId.
       */
      getHTML(siteId?: string): Promise<string>;
    };
  };
}
