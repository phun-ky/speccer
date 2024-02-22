import quibble from 'quibble';

import assert from 'node:assert/strict';
import { describe, it, mock, before } from 'node:test';

import { SpeccerAreaEnum } from '../../../../types/enums/area';
import { position } from '../position';

before(async () => {
  await quibble.esm('../../../../utils/position', {
    get_horizontal_center_of_els: mock.fn(() => 0),
    get_vertical_center_of_els: mock.fn(() => 0),
    offset: mock.fn(() => Promise.resolve({ left: 0, top: 0 }))
  });
  await quibble.esm('../../../../utils/css', {
    pinSpace: mock.fn(() => 48)
  });
});

describe('position function', () => {
  it('calculates position for speccer element relative to the target element', async () => {
    // Create target and speccer elements
    const targetElement = document.createElement('div');

    targetElement.id = 'target';

    const speccerElement = document.createElement('div');

    speccerElement.id = 'speccer';

    // Add the target and speccer elements to the document body
    document.body.appendChild(targetElement);
    document.body.appendChild(speccerElement);

    // Call the position function with different areas
    const leftPosition = await position(null, targetElement, speccerElement);
    const rightPosition = await position(
      SpeccerAreaEnum.Right,
      targetElement,
      speccerElement
    );
    const topPosition = await position(
      SpeccerAreaEnum.Top,
      targetElement,
      speccerElement
    );
    const bottomPosition = await position(
      SpeccerAreaEnum.Bottom,
      targetElement,
      speccerElement
    );

    // Assert the calculated positions based on your logic
    assert.deepEqual(leftPosition, { left: '-48px', top: '0.000px' });
    assert.deepEqual(rightPosition, { left: '48px', top: '0.000px' });
    assert.deepEqual(topPosition, { left: '0.000px', top: '-48px' });
    assert.deepEqual(bottomPosition, { left: '0.000px', top: '48px' });

    // Remove the target and speccer elements from the document body
    document.body.removeChild(targetElement);
    document.body.removeChild(speccerElement);
  });
});
