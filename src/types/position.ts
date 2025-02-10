/**
 * Type definition for position properties.
 */
export type PositionPropertiesType = {
  top: number;
  left: number;
  height: number;
  width: number;
};

/**
 * Type definition for position properties with units.
 */
export type PositionUnitPropertiesType = {
  top: string;
  left: string;
  height: string;
  width: string;
};

/**
 * Type definition for input parameters related to positioning.
 */
export type PositionInputType =
  | Record<string, never>
  | {
    center?: boolean; // Indicates whether to center the position.
    sourceHeight?: number; // Height of the source element.
    sourceWidth?: number; // Width of the source element.
    targetHeight?: number; // Height of the target element.
    targetWidth?: number; // Width of the target element.
    modifier?: number; // A modifier value for positioning.
  };
