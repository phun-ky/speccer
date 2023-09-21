/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

/**
 * Extends the global Window interface to add custom properties.
 */
declare global {
  interface Window {
    /**
     * Represents the DrawSVGCurlyBracket class for drawing curly brackets.
     */
    DrawSVGCurlyBracket: any;

    /**
     * Represents the DrawSVGLine class for drawing lines.
     */
    DrawSVGLine: any;

    /**
     * Represents the speccer object for additional functionality.
     */
    speccer: any;
  }
}
