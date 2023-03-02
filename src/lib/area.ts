import { DissectAreaEnum } from 'enums/area';

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

export const useSVG = (areaString: string): boolean =>
  areaString.indexOf(DissectAreaEnum.Full) === -1 &&
  areaString.indexOf(DissectAreaEnum.Enclose) === -1 &&
  areaString.indexOf(DissectAreaEnum.Curve) !== -1;
