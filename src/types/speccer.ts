export type SpeccerFunctionType = () => void;

export type SpeccerFeatureType =
  | 'pin'
  | 'grid'
  | 'mark'
  | 'typography'
  | 'measure'
  | 'spacing';

export type SpeccerPositionType = 'top' | 'left' | 'right' | 'bottom';

export interface SpeccerOptionsInterface {
  slug: string;
  position: SpeccerPositionType;
  type: SpeccerFeatureType;
  pin?: {
    bracket: boolean;
    enclose: boolean;
    subtle: boolean;
    parent: boolean;
    text: boolean;
    useSVGLine: boolean;
    useCurlyBrackets: boolean;
  };
  measure?: {
    slim: boolean;
    height: boolean;
    width: boolean;
  };
  typography?: {
    useSyntaxHighlighting: boolean;
  };
  grid?: {
    toggle: string;
  };
}
