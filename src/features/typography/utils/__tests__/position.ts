import { describe, it, expect, vi } from 'vitest';

import { SpeccerAreaEnum } from '../../../../types/enums/area';
import { position } from '../position';

vi.mock('../../../../utils/position', () => ({
  get_horizontal_center_of_els: vi.fn(() => 0),
  get_vertical_center_of_els: vi.fn(() => 0),
  offset: vi.fn(() => Promise.resolve({ left: 0, top: 0 }))
}));

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

    // Mock pinSpace function
    vi.mock('../../../../utils/css', () => ({
      pinSpace: vi.fn(() => 48) // Replace with the desired mock value
    }));

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
    expect(leftPosition).toEqual({ left: '-48px', top: '0.000px' });
    expect(rightPosition).toEqual({ left: '48px', top: '0.000px' });
    expect(topPosition).toEqual({ left: '0.000px', top: '-48px' });
    expect(bottomPosition).toEqual({ left: '0.000px', top: '48px' });

    // Remove the target and speccer elements from the document body
    document.body.removeChild(targetElement);
    document.body.removeChild(speccerElement);
  });
});
