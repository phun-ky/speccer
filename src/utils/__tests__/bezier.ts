import { describe, it, expect } from 'vitest';

import {
  createBezierCurveCoordinates,
  getCurlySVGPath,
  getSVGPath,
  getPositionsForSVGPath,
  getPositionsForCurlySVGPath
} from '../bezier';

describe('Bezier Functions', () => {
  it('createBezierCurveCoordinates should calculate coordinates for a Bezier curve', () => {
    const { firstPoint, lastPoint, firstControl, lastControl } =
      createBezierCurveCoordinates(
        { x1: 0, x2: 100, y1: 0, y2: 100 },
        { direct: true, firstSet: true, direction: 'west' }
      );

    expect(firstControl.x).toEqual(-32);
    expect(firstControl.y).toEqual(-8);
    expect(firstPoint.x).toEqual(0);
    expect(firstPoint.y).toEqual(0);
    expect(lastPoint.x).toEqual(100);
    expect(lastPoint.y).toEqual(100);
    expect(lastControl.x).toEqual(132);
    expect(lastControl.y).toEqual(100);
  });

  it('getCurlySVGPath should generate an SVG path for a curved line', async () => {
    const startEl = document.createElement('div');
    const stopEl = document.createElement('div');
    const svgPath = await getCurlySVGPath(startEl, stopEl, {
      pos1: 'top',
      pos2: 'bottom',
      firstSet: true,
      direction: 'south'
    });

    expect(svgPath).toEqual('M 0 0C -8 32, 0 -40, 0 -8');
  });

  it('getSVGPath should generate an SVG path for a straight line', async () => {
    const startEl = document.createElement('div');
    const stopEl = document.createElement('div');
    const svgPath = await getSVGPath(startEl, stopEl, {
      pos1: 'bottom',
      pos2: 'top'
    });

    expect(svgPath).toEqual('M 0 0C 0 0, 0 0, 0 0');
  });

  it('getPositionsForSVGPath should return positions based on cardinal direction', () => {
    const positions = getPositionsForSVGPath('east');
    const { pos1, pos2 } = positions;

    expect(pos1).toEqual('right');
    expect(pos2).toEqual('left');
  });

  it('getPositionsForCurlySVGPath should return positions for a curved SVG path based on cardinal direction', () => {
    const positions = getPositionsForCurlySVGPath('west');
    const { path1pos1, path1pos2, path2pos1, path2pos2 } = positions;

    expect(path1pos1).toEqual('left-top');
    expect(path1pos2).toEqual('right-center');
    expect(path2pos1).toEqual('left-bottom');
    expect(path2pos2).toEqual('right-center');
  });
});
