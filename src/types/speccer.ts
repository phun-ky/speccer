export type SpeccerFunctionType = () => void;

export type SpeccerFeatureType =
  | 'pin'
  | 'grid'
  | 'mark'
  | 'typography'
  | 'measure'
  | 'spacing';

export type SpeccerPositionType = 'top' | 'left' | 'right' | 'bottom';

/**
 * Configuration object that tells Speccer **what** to render and **how** to render it.
 *
 * ### Feature flags
 * Only one top-level {@link SpeccerOptionsInterface.type | type} is active at a time
 * (`"pin" | "grid" | "mark" | "typography" | "measure" | "spacing"`). The corresponding
 * nested section (e.g. `pin`, `grid`, `typography`, `measure`, `spacing`) becomes relevant
 * and other sections are typically omitted.
 *
 * @example Basic "pin" annotation
 * ```ts
 * import type { SpeccerOptionsInterface } from "@phun-ky/speccer";
 *
 * const options: SpeccerOptionsInterface = {
 *   slug: "pinBracketSubtle",
 *   position: "left",
 *   type: "pin",
 *   pin: {
 *     bracket: true,
 *     enclose: false,
 *     subtle: true,
 *     parent: false,
 *     text: false,
 *     useSVGLine: true,
 *     useCurlyBrackets: false
 *   }
 * };
 * ```
 *
 * @example Measure width, slim style
 * ```ts
 * const options: SpeccerOptionsInterface = {
 *   slug: "measureWidthSlim",
 *   position: "bottom",
 *   type: "measure",
 *   measure: {
 *     slim: true,
 *     height: false,
 *     width: true
 *   }
 * };
 * ```
 *
 * @example Typography with syntax highlighting
 * ```ts
 * const options: SpeccerOptionsInterface = {
 *   slug: "codeSample",
 *   position: "right",
 *   type: "typography",
 *   typography: {
 *     useSyntaxHighlighting: true
 *   }
 * };
 * ```
 *
 * @example Spacing overlays (margin vs. padding vs. both)
 * ```ts
 * const marginOnly: SpeccerOptionsInterface = {
 *   slug: "spacingMargin",
 *   position: "top",
 *   type: "spacing",
 *   spacing: {
 *     margin: true,
 *     padding: false,
 *     both: false,
 *     bound: false
 *   }
 * };
 *
 * const bothWithBounds: SpeccerOptionsInterface = {
 *   slug: "spacingBothBound",
 *   position: "top",
 *   type: "spacing",
 *   spacing: {
 *     margin: false,
 *     padding: false,
 *     both: true,
 *     bound: true
 *   }
 * };
 * ```
 *
 * @example Grid overlays (rows, columns, or both)
 * ```ts
 * const gridBoth: SpeccerOptionsInterface = {
 *   slug: "gridBoth",
 *   position: "bottom",
 *   type: "grid",
 *   grid: {
 *     toggle: "both",   // allowed: "rows" | "columns" | "both"
 *     both: true,
 *     rows: false,
 *     columns: false
 *   }
 * };
 *
 * const gridRows: SpeccerOptionsInterface = {
 *   slug: "gridRows",
 *   position: "bottom",
 *   type: "grid",
 *   grid: {
 *     toggle: "rows",
 *     both: false,
 *     rows: true,
 *     columns: false
 *   }
 * };
 * ```
 */
export interface SpeccerOptionsInterface {
  /**
   * Machine-readable identifier for this option set.
   *
   * @remarks
   * When produced by {@link getOptions}, this is derived from the input `areaString`
   * using a camel-casing strategy (e.g., `"pin bracket subtle"` → `"pinBracketSubtle"`).
   */
  slug: string;

  /**
   * Preferred anchor side for rendering or label placement.
   *
   * @remarks
   * Use to hint where visual affordances (e.g., labels, callouts) should appear
   * relative to the annotated element.
   */
  position: SpeccerPositionType;

  /**
   * Which Speccer feature this option set activates.
   *
   * @remarks
   * This field determines which nested section is relevant (`pin`, `grid`, `mark`,
   * `typography`, `measure`, or `spacing`). Only one feature is active at a time.
   */
  type: SpeccerFeatureType;

  /**
   * Options for the `"pin"` feature.
   *
   * @remarks
   * Present only when {@link SpeccerOptionsInterface.type | type} is `"pin"`.
   * Each flag toggles a specific pin decoration or behavior.
   */
  pin?: {
    /** Draw bracket-style markers around the pin. */
    bracket: boolean;

    /** Enclose the pin target (e.g., a boxed/outlined emphasis). */
    enclose: boolean;

    /** Reduce visual weight for a subtler presentation. */
    subtle: boolean;

    /** Indicate that the pin references a parent container/element. */
    parent: boolean;

    /** Render an inline text label along with the pin. */
    text: boolean;

    /** Use an SVG line primitive instead of a DOM line. */
    useSVGLine: boolean;

    /** Use curly brackets for bracketed pins instead of straight brackets. */
    useCurlyBrackets: boolean;
  };

  /**
   * Options for the `"measure"` feature.
   *
   * @remarks
   * Present only when {@link SpeccerOptionsInterface.type | type} is `"measure"`.
   * Use `height` and/or `width` to select the axis to measure; `slim` switches to
   * a compact rendering style for tight layouts.
   */
  measure?: {
    /** Use a compact (thinner) measurement style. */
    slim: boolean;

    /** Show a vertical measurement (element height). */
    height: boolean;

    /** Show a horizontal measurement (element width). */
    width: boolean;
  };

  /**
   * Options for the `"typography"` feature.
   *
   * @remarks
   * Present only when {@link SpeccerOptionsInterface.type | type} is `"typography"`.
   * Enables code-like styling or syntax coloring when appropriate.
   */
  typography?: {
    /** Enable syntax highlighting for textual samples. */
    useSyntaxHighlighting: boolean;
  };

  /**
   * Options for the `"spacing"` feature.
   *
   * @remarks
   * Present only when {@link SpeccerOptionsInterface.type | type} is `"spacing"`.
   * Exactly one of `margin`, `padding`, or `both` is typically `true`.
   * `bound` can be used to visualize the outer bound in addition to spacing.
   */
  spacing?: {
    /** Visualize the element's margins. */
    margin?: boolean;

    /** Visualize the element's padding. */
    padding?: boolean;

    /**
     * Visualize both margin and padding in a combined overlay.
     * @remarks Mutually exclusive with `margin` and `padding` where applicable.
     */
    both?: boolean;

    /**
     * Emphasize the bounding outline of the target in addition to spacing.
     * @remarks Often used to show the element's overall occupied box.
     */
    bound?: boolean;
  };

  /**
   * Options for the `"grid"` feature.
   *
   * @remarks
   * Present only when {@link SpeccerOptionsInterface.type | type} is `"grid"`.
   * `toggle` indicates the primary axis selection and should be `"rows" | "columns" | "both"`.
   * The convenience flags (`both`, `rows`, `columns`) mirror the current state for easy checks.
   */
  grid?: {
    /**
     * Controls which grid axes are active.
     * @remarks Allowed values: `"rows" | "columns" | "both"`.
     */
    toggle: string;

    /** Convenience flag set when both rows and columns are active. */
    both?: boolean;

    /** Convenience flag set when only rows are active. */
    rows?: boolean;

    /** Convenience flag set when only columns are active. */
    columns?: boolean;
  };
}
