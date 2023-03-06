export type DissectStylesOptionsType = {
  isCurly?: boolean;
};

export type CurlyBezierPathOptions = {
  pos1: string;
  pos2: string;
  firstSet?: boolean; // indicates if this is the first part of the curly bracket or not
  direction: string;
};

export type BezierPathOptions = {
  pos1: string;
  pos2: string;
};

export type CreateCoordinatesForCurveCoordParamType = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

export type CreateCoordinatesForCurveOptionsParamType = {
  direct?: boolean;
  firstSet?: boolean;
  direction: string;
};
