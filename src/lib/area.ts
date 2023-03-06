import { DissectAreaEnum, MeasureAreaEnum } from 'enums/area';

export const getAreasFromString = (areaString: string): string[] =>
  areaString.split(' ');

export const isLeftArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Left);
};

export const isRightArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Right);
};

export const isTopArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Top);
};

export const isBottomArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Bottom);
};

export const isFullArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Full);
};

export const isEncloseArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Enclose);
};

export const isHeightArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(MeasureAreaEnum.Height);
};

export const isWidthArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(MeasureAreaEnum.Width);
};

export const useSVG = (areaString: string): boolean =>
  areaString.indexOf(DissectAreaEnum.Curly) === -1 &&
  areaString.indexOf(DissectAreaEnum.Full) === -1 &&
  areaString.indexOf(DissectAreaEnum.Enclose) === -1 &&
  areaString.indexOf(DissectAreaEnum.SVG) !== -1;

export const isCurly = (areaString: string): boolean =>
  areaString.indexOf(DissectAreaEnum.Full) !== -1 &&
  areaString.indexOf(DissectAreaEnum.Curly) !== -1;
