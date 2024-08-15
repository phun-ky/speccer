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
     * Represents the DrawCircle class for drawing circles.
     */
    DrawCircle: any;

    /**
     * Represents the DrawSVGLine class for drawing lines.
     */
    DrawSVGLine: any;

    /**
     * Represents the speccer object for additional functionality.
     */
    speccer: any;

    /**
     * Represents the custom literals to be used.
     * ![Screenshot of speccer with custom literals](https://github.com/phun-ky/speccer/blob/main/public/literals.png?raw=true)
     * @example
     * ```js
     * window.SPECCER_LITERALS = [あ,い,う,え,お,か,き,く,け,こ,さ,し,す,せ,そ,た,ち,つ,て,と,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を];
     * speccer();
     * ```
     */
    SPECCER_LITERALS: string[];
  }
}
