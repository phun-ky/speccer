import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getOptions } from '../get-options';

describe('getOptions', () => {
  const mockTargetStyle = {} as CSSStyleDeclaration;

  it('should return options for a pin type', () => {
    const areaString = 'pin';
    const options = getOptions(areaString, mockTargetStyle);

    assert.deepEqual(options,{
      slug: 'pin', // Assuming camelCase('pin') returns 'pin'
      position: 'top',
      type: 'pin',
      pin: {
        bracket: false,
        enclose: false,
        subtle: false,
        parent: false,
        text: false,
        useSVGLine: false,
        useCurlyBrackets: false
      }
    });
  });

  it('should return options for a measure type', () => {
    const areaString = 'measure';
    const options = getOptions(areaString, mockTargetStyle);

    assert.deepEqual(options,{
      slug: 'measure', // Assuming camelCase('measure') returns 'measure'
      position: 'top',
      type: 'measure',
      measure: {
        slim: false,
        height: false,
        width: false
      }
    });
  });

  it('should return options for a typography type', () => {
    const areaString = 'typography';
    const options = getOptions(areaString, mockTargetStyle);

    assert.deepEqual(options,{
      slug: 'typography', // Assuming camelCase('typography') returns 'typography'
      position: 'top',
      type: 'typography',
      typography: {
        useSyntaxHighlighting: false
      }
    });
  });

  it('should return options for a grid type with columns', () => {
    const areaString = 'grid columns';
    const options = getOptions(areaString, {...mockTargetStyle, display: 'grid'});

    assert.deepEqual(options,{
      slug: 'gridColumns', // Assuming camelCase('grid columns') returns 'gridColumns'
      position: 'top',
      type: 'grid',
      grid: {
        toggle: 'columns'
      }
    });
  });

  it('should return options for a grid type with rows', () => {
    const areaString = 'grid rows';
    const options = getOptions(areaString, {...mockTargetStyle, display: 'grid'});

    assert.deepEqual(options,{
      slug: 'gridRows', // Assuming camelCase('grid rows') returns 'gridRows'
      position: 'top',
      type: 'grid',
      grid: {
        toggle: 'rows'
      }
    });
  });

  it('should default to toggle both if no specific grid type is provided', () => {
    const areaString = 'grid';
    const options = getOptions(areaString, {...mockTargetStyle, display: 'grid'});

    assert.deepEqual(options,{
      slug: 'grid', // Assuming camelCase('grid') returns 'grid'
      position: 'top',
      type: 'grid',
      grid: {
        toggle: 'both'
      }
    });
  });
});
