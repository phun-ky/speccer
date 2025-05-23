import {
  BezierPathOptionsType,
  CoordinatesForBezierObjectType,
  CreateCoordinatesForCurveCoordParamType,
  CreateCoordinatesForCurveOptionsParamType,
  CurlyBezierPathOptionsType
} from '../types/bezier';

import {
  SPECCER_DEFAULT_MEASURE_SIZE,
  SPECCER_DEFAULT_MEASURE_SIZE_NEG
} from './constants';
import { getCoordsPairFromObjects } from './get-coords-pair-from-objects';

/* node:coverage disable */
/**
 * Calculates coordinates for a Bezier curve between two points.
 *
 * @param {CreateCoordinatesForCurveCoordParamType} coords - The coordinates of the start and end points.
 * @param {CreateCoordinatesForCurveOptionsParamType} options - Options for controlling the curve's shape.
 * @returns Coordinates for the Bezier curve.
 *
 * @example
 * ```ts
 * const coordinates = createBezierCurveCoordinates(
 *   { x1: 0, x2: 100, y1: 0, y2: 100 },
 *   { direct: true, firstSet: true, direction: 'west' }
 * );
 * ```
 */
/* node:coverage enable */
export const createBezierCurveCoordinates = (
  coords: CreateCoordinatesForCurveCoordParamType,
  options: CreateCoordinatesForCurveOptionsParamType
): CoordinatesForBezierObjectType => {
  const { x1, x2, y1, y2 } = coords;
  const { direct = false, firstSet = false, direction } = options;
  const firstPoint = { x: x1, y: y1 }; // The first point of the curve
  const lastPoint = { x: x2, y: y2 }; // The last point of the curve

  if (!direct) {
    return {
      firstPoint,
      firstControl: { x: x1 + (x2 - x1) / 2, y: y1 }, // Control point for the first point
      lastPoint,
      lastControl: { x: x1 + (x2 - x1) / 2, y: y2 }
    };
  }

  if (firstSet) {
    if (direction === 'west') {
      return {
        firstPoint,
        firstControl: { x: x1 - 32, y: y1 - 16 / 2 },
        lastPoint,
        lastControl: { x: x2 + 32, y: y2 }
      };
    }

    if (direction === 'south') {
      return {
        firstPoint,
        firstControl: { x: x1 - 16 / 2, y: y1 + 32 },
        lastPoint,
        lastControl: { x: x2, y: y2 - 32 }
      };
    }

    if (direction === 'east') {
      return {
        firstPoint,
        firstControl: { x: x1 + 32, y: y1 - 16 / 2 },
        lastPoint,
        lastControl: { x: x2 - 32, y: y2 }
      };
    }

    return {
      firstPoint,
      firstControl: { x: x1 - 16 / 2, y: y1 - 32 },
      lastPoint,
      lastControl: { x: x2, y: y2 + 32 }
    };
  }

  if (direction === 'west') {
    return {
      firstPoint,
      firstControl: { x: x1 - 32, y: y1 + 16 / 2 },
      lastPoint,
      lastControl: { x: x2 + 32, y: y2 }
    };
  }

  if (direction === 'south') {
    return {
      firstPoint,
      firstControl: { x: x1 + 16 / 2, y: y1 + 32 },
      lastPoint,
      lastControl: { x: x2, y: y2 - 32 }
    };
  }

  if (direction === 'east') {
    return {
      firstPoint,
      firstControl: { x: x1 + 32, y: y1 + 16 / 2 },
      lastPoint,
      lastControl: { x: x2 - 32, y: y2 }
    };
  }

  return {
    firstPoint,
    firstControl: { x: x1 + 16 / 2, y: y1 - 32 },
    lastPoint,
    lastControl: { x: x2, y: y2 + 32 }
  };
};

/* node:coverage disable */
/**
 * Generates an SVG path for a curved line between two HTML elements.
 *
 * @param startEl - The starting HTML element.
 * @param stopEl - The ending HTML element.
 * @param options - Options for controlling the curved line.
 * @returns The SVG path string for the curved line.
 *
 * @example
 * ```ts
 * const svgPath = getCurlySVGPath(startElement, stopElement, {
 *   pos1: 'top',
 *   pos2: 'bottom',
 *   firstSet: true,
 *   direction: 'south',
 * });
 * ```
 */
/* node:coverage enable */
export const getCurlySVGPath = async (
  startEl: HTMLElement,
  stopEl: HTMLElement,
  options: CurlyBezierPathOptionsType
) => {
  const { pos1, pos2, firstSet = false, direction } = options;
  const { x1, y1, x2, y2 } = await getCoordsPairFromObjects(
    startEl,
    stopEl,
    pos1,
    pos2
  );
  const x1modifier = 0;
  const y1modifier = 0;

  let x2modifier = 0;
  let y2modifier = 0;

  // Create a gap between the pin and the bracket center
  if (direction === 'north') y2modifier = SPECCER_DEFAULT_MEASURE_SIZE;
  else if (direction === 'west') x2modifier = SPECCER_DEFAULT_MEASURE_SIZE;
  else if (direction === 'east') x2modifier = SPECCER_DEFAULT_MEASURE_SIZE_NEG;
  else if (direction === 'south') y2modifier = SPECCER_DEFAULT_MEASURE_SIZE_NEG;

  const { firstPoint, firstControl, lastControl, lastPoint } =
    createBezierCurveCoordinates(
      {
        x1: x1 + x1modifier,
        x2: x2 + x2modifier,
        y1: y1 + y1modifier + document.documentElement.scrollTop,
        y2: y2 + y2modifier + document.documentElement.scrollTop
      },
      {
        direct: true,
        firstSet,
        direction
      }
    );

  return (
    `M ${firstPoint.x} ${firstPoint.y}` +
    `C ${firstControl.x} ${firstControl.y}, ${lastControl.x} ${lastControl.y}, ${lastPoint.x} ${lastPoint.y}`
  );
};

/* node:coverage disable */
/**
 * Generates an SVG path for a straight line between two HTML elements.
 *
 * @param startEl - The starting HTML element.
 * @param stopEl - The ending HTML element.
 * @param options - Options for controlling the straight line.
 * @returns The SVG path string for the straight line.
 *
 * @example
 * ```ts
 * const svgPath = getSVGPath(startElement, stopElement, {
 *   pos1: 'left',
 *   pos2: 'right',
 * });
 * ```
 */
/* node:coverage enable */
export const getSVGPath = async (
  startEl: HTMLElement,
  stopEl: HTMLElement,
  options: BezierPathOptionsType
) => {
  const { pos1, pos2 } = options;
  const { x1, y1, x2, y2 } = await getCoordsPairFromObjects(
    startEl,
    stopEl,
    pos1,
    pos2
  );
  const { firstPoint, firstControl, lastControl, lastPoint } =
    createBezierCurveCoordinates(
      {
        x1,
        x2,
        y1: y1 + document.documentElement.scrollTop,
        y2: y2 + document.documentElement.scrollTop
      },
      { direction: '' }
    );

  return (
    `M ${firstPoint.x} ${firstPoint.y}` +
    `C ${firstControl.x} ${firstControl.y}, ${lastControl.x} ${lastControl.y}, ${lastPoint.x} ${lastPoint.y}`
  );
};

/* node:coverage disable */
/**
 * Returns positions for creating an SVG path based on a cardinal direction.
 *
 * @param direction - The cardinal direction ('east', 'west', 'south', 'north').
 * @returns Positions for creating an SVG path.
 *
 * @example
 * ```ts
 * const positions = getPositionsForSVGPath('east');
 * ```
 */
/* node:coverage enable */
export const getPositionsForSVGPath = (direction: string) => {
  let pos1: string;
  let pos2: string;

  switch (direction) {
    case 'east':
      pos1 = 'right';
      pos2 = 'left';
      break;
    case 'south':
      pos1 = 'bottom';
      pos2 = 'top';
      break;
    case 'west':
      pos1 = 'left';
      pos2 = 'right';
      break;
    case 'north':
    default:
      pos1 = 'top';
      pos2 = 'bottom';
      break;
  }

  return { pos1, pos2 };
};

/* node:coverage disable */
/**
 * Returns positions for creating an SVG path for a curved line based on a cardinal direction.
 *
 * @param direction - The cardinal direction ('east', 'west', 'south', 'north').
 * @returns Positions for creating an SVG path for a curved line.
 *
 * @example
 * ```ts
 * const positions = getPositionsForCurlySVGPath('west');
 * ```
 */
/* node:coverage enable */
export const getPositionsForCurlySVGPath = (direction: string) => {
  let path1pos1: string;
  let path1pos2: string;
  let path2pos1: string;
  let path2pos2: string;

  switch (direction) {
    case 'east':
      path1pos1 = 'right-top';
      path1pos2 = 'left-center';
      path2pos1 = 'right-bottom';
      path2pos2 = 'left-center';
      break;
    case 'south':
      path1pos1 = 'bottom-left';
      path1pos2 = 'top-center';
      path2pos1 = 'bottom-right';
      path2pos2 = 'top-center';
      break;
    case 'west':
      path1pos1 = 'left-top';
      path1pos2 = 'right-center';
      path2pos1 = 'left-bottom';
      path2pos2 = 'right-center';
      break;
    case 'north':
    default:
      path1pos1 = 'top-left';
      path1pos2 = 'bottom-center';
      path2pos1 = 'top-right';
      path2pos2 = 'bottom-center';
      break;
  }

  return {
    path1pos1,
    path1pos2,
    path2pos1,
    path2pos2
  };
};
