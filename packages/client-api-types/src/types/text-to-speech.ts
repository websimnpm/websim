export type TextToSpeechOptions = {
  /**
   * The text string to synthesize to speech.
   */
  text: string;
  /**
   * Voice identifier (e.g., "en-male") or ElevenLabs voice ID for a specific voice.
   */
  voice?: string;
  /**
   * Desired audio format.
   * Defaults to "mp3".
   */
  format?: "mp3" | "wav";
  /**
   * Playback speed multiplier.
   * Typical range 0.5 - 2.0.
   */
  speed?: number;
  /**
   * Pitch adjustment in semitones.
   * Typical range -12 to 12.
   */
  pitch?: number;
};

export type TextToSpeechResult = {
  /**
   * A public URL pointing to the generated audio file.
   */
  readonly url: `https://${string}/${string}`;
};
