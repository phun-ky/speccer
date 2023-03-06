import {
  BezierPathOptions,
  CreateCoordinatesForCurveCoordParamType,
  CreateCoordinatesForCurveOptionsParamType,
  CurlyBezierPathOptions
} from 'types/bezier';
import * as cardinal from './cardinal';

export const createCoordinatesForCurve = (
  coords: CreateCoordinatesForCurveCoordParamType,
  options: CreateCoordinatesForCurveOptionsParamType
) => {
  const { x1, x2, y1, y2 } = coords;
  const { direct = false, firstSet = false, direction } = options;
  const firstPoint = { x: x1, y: y1 }; // The first point of line
  const lastPoint = { x: x2, y: y2 }; // The last point of line

  let firstControl = { x: x1 + (x2 - x1) / 2, y: y1 }; // Controller for p0
  let lastControl = { x: x1 + (x2 - x1) / 2, y: y2 }; // Controller for p1

  if (direct) {
    // first part of the curly bracket

    if (firstSet) {
      if (direction === 'west') {
        firstControl = { x: x1 - 32, y: y1 - 16 / 2 }; // Controller for p0
        lastControl = { x: x2 + 32, y: y2 }; // Controller for p1
      } else if (direction === 'south') {
        firstControl = { x: x1 - 16 / 2, y: y1 + 32 }; // Controller for p0
        lastControl = { x: x2, y: y2 - 32 }; // Controller for p1
      } else if (direction === 'east') {
        firstControl = { x: x1 + 32, y: y1 - 16 / 2 }; // Controller for p0
        lastControl = { x: x2 - 32, y: y2 }; // Controller for p1
      } else {
        firstControl = { x: x1 - 16 / 2, y: y1 - 32 }; // Controller for p0
        lastControl = { x: x2, y: y2 + 32 }; // Controller for p1
      }
    } else {
      if (direction === 'west') {
        firstControl = { x: x1 - 32, y: y1 + 16 / 2 }; // Controller for p0
        lastControl = { x: x2 + 32, y: y2 }; // Controller for p1
      } else if (direction === 'south') {
        firstControl = { x: x1 + 16 / 2, y: y1 + 32 }; // Controller for p0
        lastControl = { x: x2, y: y2 - 32 }; // Controller for p1
      } else if (direction === 'east') {
        firstControl = { x: x1 + 32, y: y1 + 16 / 2 }; // Controller for p0
        lastControl = { x: x2 - 32, y: y2 }; // Controller for p1
      } else {
        firstControl = { x: x1 + 16 / 2, y: y1 - 32 }; // Controller for p0
        lastControl = { x: x2, y: y2 + 32 }; // Controller for p1
      }
    }
  }

  return {
    firstPoint,
    firstControl,
    lastPoint,
    lastControl
  };
};

export const getCurlySVGPath = async (
  startEl: HTMLElement,
  stopEl: HTMLElement,
  options: CurlyBezierPathOptions
) => {
  const { pos1, pos2, firstSet = false, direction } = options;
  const { x1, y1, x2, y2 } = await cardinal.get_coords_pair_from_objects(
    startEl,
    stopEl,
    pos1,
    pos2
  );
  const x1modifier = 0;
  const y1modifier = 0;

  let x2modifier = 0;
  let y2modifier = 0;

  // make a gap between the pin and the bracket center
  if (direction == 'north') {
    y2modifier = 8;
  } else if (direction == 'west') {
    x2modifier = 8;
  } else if (direction == 'east') {
    x2modifier = -8;
  } else if (direction == 'south') {
    y2modifier = -8;
  }

  const _coordinates = createCoordinatesForCurve(
    {
      x1: x1 + x1modifier,
      x2: x2 + x2modifier,
      y1: y1 + y1modifier,
      y2: y2 + y2modifier
    },
    {
      direct: true,
      firstSet,
      direction
    }
  );
  const { firstPoint, firstControl, lastControl, lastPoint } = _coordinates;

  return (
    'M ' +
    firstPoint.x +
    ' ' +
    firstPoint.y +
    'C ' +
    firstControl.x +
    ' ' +
    firstControl.y +
    ', ' +
    lastControl.x +
    ' ' +
    lastControl.y +
    ', ' +
    lastPoint.x +
    ' ' +
    lastPoint.y
  );
};

export const getSVGPath = async (
  startEl: HTMLElement,
  stopEl: HTMLElement,
  options: BezierPathOptions
) => {
  const { pos1, pos2 } = options;
  const { x1, y1, x2, y2 } = await cardinal.get_coords_pair_from_objects(
    startEl,
    stopEl,
    pos1,
    pos2
  );
  const _coordinates = createCoordinatesForCurve(
    { x1, x2, y1, y2 },
    {
      direction: ''
    }
  );
  const { firstPoint, firstControl, lastControl, lastPoint } = _coordinates;

  return (
    'M ' +
    firstPoint.x +
    ' ' +
    firstPoint.y +
    'C ' +
    firstControl.x +
    ' ' +
    firstControl.y +
    ', ' +
    lastControl.x +
    ' ' +
    lastControl.y +
    ', ' +
    lastPoint.x +
    ' ' +
    lastPoint.y
  );
};

export const getPositionsForSVGPath = (direction: string) => {
  let _pos1: string;
  let _pos2: string;

  switch (direction) {
    case 'east': {
      _pos1 = 'right';
      _pos2 = 'left';
      break;
    }
    case 'south': {
      _pos1 = 'bottom';
      _pos2 = 'top';
      break;
    }

    case 'west': {
      _pos1 = 'left';
      _pos2 = 'right';
      break;
    }
    case 'north':
    default: {
      _pos1 = 'top';
      _pos2 = 'bottom';
      break;
    }
  }

  return {
    pos1: _pos1,
    pos2: _pos2
  };
};

export const getPositionsForCurlySVGPath = (direction: string) => {
  let _path1_pos1: string;
  let _path1_pos2: string;
  let _path2_pos1: string;
  let _path2_pos2: string;

  switch (direction) {
    case 'east': {
      _path1_pos1 = 'right-top';
      _path1_pos2 = 'left-center';
      _path2_pos1 = 'right-bottom';
      _path2_pos2 = 'left-center';
      break;
    }
    case 'south': {
      _path1_pos1 = 'bottom-left';
      _path1_pos2 = 'top-center';
      _path2_pos1 = 'bottom-right';
      _path2_pos2 = 'top-center';
      break;
    }
    case 'west': {
      _path1_pos1 = 'left-top';
      _path1_pos2 = 'right-center';
      _path2_pos1 = 'left-bottom';
      _path2_pos2 = 'right-center';
      break;
    }
    case 'north':
    default: {
      _path1_pos1 = 'top-left';
      _path1_pos2 = 'bottom-center';
      _path2_pos1 = 'top-right';
      _path2_pos2 = 'bottom-center';
      break;
    }
  }

  return {
    path1pos1: _path1_pos1,
    path1pos2: _path1_pos2,
    path2pos1: _path2_pos1,
    path2pos2: _path2_pos2
  };
};
