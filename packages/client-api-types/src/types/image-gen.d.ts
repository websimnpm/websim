export type ImageGenAspectRatio =
  | "1:1"
  | "16:9"
  | "21:9"
  | "3:2"
  | "2:3"
  | "4:5"
  | "5:4"
  | "3:4"
  | "4:3"
  | "9:16"
  | "9:21";

export type ImageGenOptions = {
  /**
   * The primary text prompt describing the image to generate.
   * This is a required parameter.
   */
  prompt: string;
  /**
   * Optional aspect ratio for the generated image.
   * Defaults to "1:1".
   * If `width` and `height` are provided, this parameter will be ignored.
   */
  aspect_ratio?: ImageGenAspectRatio;
  /**
   * Optional width of the generated image in pixels.
   * If provided along with `height`, it overrides `aspect_ratio`.
   */
  width?: number;
  /**
   * Optional height of the generated image in pixels.
   * If provided along with `width`, it overrides `aspect_ratio`.
   */
  height?: number;
  /**
   * Optional boolean.
   * If `true`, the generated image will have a transparent background.
   * Defaults to `false`.
   */
  transparent?: boolean;
  /**
   * Optional array of image inputs.
   * Each object in the array should have a `url` property, which is a base64 encoded image data URL.
   * Supports 1-4 input images for image-to-image generation.
   */
  image_inputs?: { url: string }[];
  /**
   * Optional seed for the image generation process.
   * Using the same prompt and seed will produce variations of the same output, useful for consistent results or exploring variations.
   */
  seed?: number;
};

export type ImageGenResult = {
  /**
   * The URL of the generated image.
   * This URL can be used to display the image.
   */
  readonly url: `https://${string}/${string}`;
};

export namespace ImageGen {
  export type AspectRatio = ImageGenAspectRatio;
  export type Options = ImageGenOptions;
  export type Result = ImageGenResult;
}
