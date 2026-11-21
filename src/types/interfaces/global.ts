import type { DrawCircle } from '../../utils/classes/DrawCircle';
import type { DrawSVGCurlyBracket } from '../../utils/classes/DrawSVGCurlyBracket';
import type { DrawSVGLine } from '../../utils/classes/DrawSVGLine';
import type { SpeccerFunctionType } from '../speccer';

/**
 * Extends the global Window interface to add custom properties.
 */
declare global {
  interface Window {
    /**
     * Represents the DrawSVGCurlyBracket class for drawing curly brackets.
     */
    DrawSVGCurlyBracket: typeof DrawSVGCurlyBracket;
    /**
     * Represents the DrawCircle class for drawing circles.
     */
    DrawCircle: typeof DrawCircle;

    /**
     * Represents the DrawSVGLine class for drawing lines.
     */
    DrawSVGLine: typeof DrawSVGLine;

    /**
     * The speccer function, set by manual mode so you can call
     * `window.speccer()` yourself.
     */
    speccer: SpeccerFunctionType;

    /**
     * Represents the custom literals to be used.
     * ![Screenshot of speccer with custom literals](/literals.png?raw=true)
     * @example
     * ```js
     * window.SPECCER_LITERALS = [あ,い,う,え,お,か,き,く,け,こ,さ,し,す,せ,そ,た,ち,つ,て,と,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を];
     * speccer();
     * ```
     */
    SPECCER_LITERALS: string[];
  }
}
