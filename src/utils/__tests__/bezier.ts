import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

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

    assert.equal(firstControl.x,-32);
    assert.equal(firstControl.y,-8);
    assert.equal(firstPoint.x,0);
    assert.equal(firstPoint.y,0);
    assert.equal(lastPoint.x,100);
    assert.equal(lastPoint.y,100);
    assert.equal(lastControl.x,132);
    assert.equal(lastControl.y,100);
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

    assert.equal(svgPath,'M 0 0C -8 32, 0 -40, 0 -8');
  });

  it('getSVGPath should generate an SVG path for a straight line', async () => {
    const startEl = document.createElement('div');
    const stopEl = document.createElement('div');
    const svgPath = await getSVGPath(startEl, stopEl, {
      pos1: 'bottom',
      pos2: 'top'
    });

    assert.equal(svgPath,'M 0 0C 0 0, 0 0, 0 0');
  });

  it('getPositionsForSVGPath should return positions based on cardinal direction', () => {
    const positions = getPositionsForSVGPath('east');
    const { pos1, pos2 } = positions;

    assert.equal(pos1,'right');
    assert.equal(pos2,'left');
  });

  it('getPositionsForCurlySVGPath should return positions for a curved SVG path based on cardinal direction', () => {
    const positions = getPositionsForCurlySVGPath('west');
    const { path1pos1, path1pos2, path2pos1, path2pos2 } = positions;

    assert.equal(path1pos1,'left-top');
    assert.equal(path1pos2,'right-center');
    assert.equal(path2pos1,'left-bottom');
    assert.equal(path2pos2,'right-center');
  });
});
