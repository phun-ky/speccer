import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getOptions } from '..';

describe('getOptions', () => {
  const mockTargetElement = document.createElement('div');
  document.body.appendChild(mockTargetElement);

  it('should return options for a pin type', async () => {
    const areaString = 'pin';
    const options = await getOptions(areaString, mockTargetElement);

    assert.deepEqual(options, {
      slug: 'pin',
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

  it('should return options for a measure type', async () => {
    const areaString = 'measure';
    const options = await getOptions(areaString, mockTargetElement);

    assert.deepEqual(options, {
      slug: 'measure',
      position: 'top',
      type: 'measure',
      measure: {
        slim: false,
        height: false,
        width: false
      }
    });
  });

  it('should return options for a typography type', async () => {
    const areaString = 'typography';
    const options = await getOptions(areaString, mockTargetElement);

    assert.deepEqual(options, {
      slug: 'typography',
      position: 'top',
      type: 'typography',
      typography: {
        useSyntaxHighlighting: false
      }
    });
  });

  it('should return options for a grid type with columns', async () => {
    const areaString = 'grid columns';
    mockTargetElement.style.setProperty('display', 'grid');
    mockTargetElement.style.display = 'grid';
    const options = await getOptions(areaString, mockTargetElement);

    assert.deepEqual(options, {
      slug: 'gridColumns',
      position: 'top',
      type: 'grid',
      grid: {
        both: false,
        columns: true,
        rows: false,
        toggle: 'columns'
      }
    });
  });

  it('should return options for a grid type with rows', async () => {
    const areaString = 'grid rows';
    mockTargetElement.style.setProperty('display', 'grid');
    mockTargetElement.style.display = 'grid';
    const options = await getOptions(areaString, mockTargetElement);

    assert.deepEqual(options, {
      slug: 'gridRows',
      position: 'top',
      type: 'grid',
      grid: {
        both: false,
        columns: false,
        rows: true,
        toggle: 'rows'
      }
    });
  });

  it('should default to toggle both if no specific grid type is provided', async () => {
    const areaString = 'grid';
    mockTargetElement.style.setProperty('display', 'grid');
    mockTargetElement.style.display = 'grid';
    const options = await getOptions(areaString, mockTargetElement);

    assert.deepEqual(options, {
      slug: 'grid',
      position: 'top',
      type: 'grid',
      grid: {
        both: true,
        columns: false,
        rows: false,
        toggle: 'both'
      }
    });
  });
});
