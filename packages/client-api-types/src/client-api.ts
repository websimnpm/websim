import type {
  ChatCompletionOptions,
  ChatCompletionResult,
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

  addEventListener(
    eventType: "comment:created",
    callback: (data: any) => void,
  ): () => void;

  upload: (file: File) => Promise<string>;

  readonly chat: {
    readonly completions: {
      create: (args: ChatCompletionOptions) => Promise<ChatCompletionResult>;
    };
  };

  imageGen: (args: ImageGenOptions) => Promise<ImageGenResult>;

  textToSpeech: (args: TextToSpeechOptions) => Promise<TextToSpeechResult>;

  experimental: {
    v0: {
      login: () => Promise<void>;

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

  internal_only_experimental: Record<never, never>;
}
