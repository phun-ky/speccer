/**
 * Options for dissect styles.
 */
// eslint-disable-next-line import/no-unused-modules
export type DissectStylesOptionsType =
  | Record<string, never>
  | {
      /**
       * Indicates whether the style is curly or not.
       */
      isCurly?: boolean;
    };

/**
 * Options for creating a curly bezier path.
 */
export type CurlyBezierPathOptionsType = {
  /**
   * The first position.
   */
  pos1: string;

  /**
   * The second position.
   */
  pos2: string;

  /**
   * Indicates if this is the first part of the curly bracket or not.
   */
  firstSet?: boolean;

  /**
   * The direction of the path.
   */
  direction: string;
};

/**
 * Options for creating a bezier path.
 */
export type BezierPathOptionsType = {
  /**
   * The first position.
   */
  pos1: string;

  /**
   * The second position.
   */
  pos2: string;
};

/**
 * Parameters for creating coordinates for a curve.
 */
export type CreateCoordinatesForCurveCoordParamType = {
  /**
   * The x-coordinate of the first point.
   */
  x1: number;

  /**
   * The x-coordinate of the second point.
   */
  x2: number;

  /**
   * The y-coordinate of the first point.
   */
  y1: number;

  /**
   * The y-coordinate of the second point.
   */
  y2: number;
};

/**
 * Options for creating coordinates for a curve.
 */
export type CreateCoordinatesForCurveOptionsParamType = {
  /**
   * Indicates whether the curve is direct.
   */
  direct?: boolean;

  /**
   * Indicates if this is the first set of coordinates.
   */
  firstSet?: boolean;

  /**
   * The direction of the curve.
   */
  direction: string;
};
