export type PositionPropertiesType = {
  top: number;
  left: number;
  height: number;
  width: number;
};

export type PositionInputType =
  | Record<string, never>
  | {
      center?: boolean;
      sourceHeight?: number;
      sourceWidth?: number;
      targetHeight?: number;
      targetWidth?: number;
      modifier?: number;
    };
