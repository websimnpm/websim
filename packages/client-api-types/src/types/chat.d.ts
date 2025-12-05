export type ChatCompletionsMessageRole =
  | "system"
  | "user"
  | "assistant"
  | "tool";

export type ChatCompletionsMessageContent =
  | {
      /**
       * The type of content part.
       */
      type: "text";
      /**
       * The text content.
       */
      text: string;
    }
  | {
      /**
       * The type of content part.
       */
      type: "image_url";
      /**
       * An object containing the base64 encoded image data URL.
       */
      image_url: {
        /**
         * A base64 encoded image data URL.
         */
        url: string;
      };
    };

/**
 * Represents a single message in the conversation history.
 */
export type ChatCompletionsMessage = {
  /**
   * The role of the message sender.
   */
  role: ChatCompletionsMessageRole;
  /**
   * The message content.
   * Can be plain text or an array for multimodal inputs.
   */
  content: string | ChatCompletionsMessageContent[];
};

export type ChatCompletionOptions = {
  /**
   * A list of messages comprising the conversation so far.
   * Each message includes a `role` (system, user, assistant, tool) and `content`.
   */
  messages: ChatCompletionsMessage[];
  /**
   * ID of the model to use.
   * If not specified, websim uses its default model.
   */
  model?: string;
  /**
   * If `true`, the model will attempt to generate a JSON object.
   * The response content will be a string that you will need to parse.
   * Defaults to `false`.
   */
  json?: boolean;
  /**
   * If `true`, the response will be streamed back incrementally.
   * Defaults to `false`.
   */
  stream?: boolean;
  /**
   * What sampling temperature to use, between 0 and 2.
   * Higher values (e.g., 0.8) make the output more random; lower values (e.g., 0.2) make it more focused.
   * Defaults to 1.
   */
  temperature?: number;
  /**
   * An alternative to sampling with temperature, where the model considers tokens with top_p probability mass.
   * E.g., 0.1 means only tokens comprising the top 10% probability mass are considered.
   * Defaults to 1.
   */
  top_p?: number;
  /**
   * The maximum number of tokens to generate in the chat completion.
   */
  max_tokens?: number;
};

export type ChatCompletionResult = {
  /**
   * The generated text content from the assistant.
   */
  readonly content: string;
  /**
   * The role of the message sender, which will always be "assistant" for the model's response.
   */
  readonly role: "assistant";
};

export namespace ChatCompletions {
  export type MessageRole = ChatCompletionsMessageRole;
  export type ContentPart = ChatCompletionsMessageContent;
  export type Message = ChatCompletionsMessage;
  export type Options = ChatCompletionOptions;
  export type Result = ChatCompletionResult;
}
