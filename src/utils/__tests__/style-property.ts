import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getParentThatIsSticky, isSticky } from '../style-property';

describe('getParentThatIsSticky', () => {
  it('should return null for an element without a sticky parent', async () => {
    const element = document.createElement('div');
    const result = await getParentThatIsSticky(element);

    assert.equal(result, null);
  });

  it('should return sticky parent element', async () => {
    const stickyParent = document.createElement('div');

    stickyParent.style.position = 'sticky';

    const element = document.createElement('div');

    stickyParent.appendChild(element);

    const result = await getParentThatIsSticky(element);

    assert.deepEqual(result, stickyParent);
  });
});

describe('isSticky', () => {
  it('should return false for an element without "position: sticky"', async () => {
    const element = document.createElement('div');
    const result = await isSticky(element);

    assert.equal(result, false);
  });

  it('should return true for an element with "position: sticky"', async () => {
    const element = document.createElement('div');

    element.style.position = 'sticky';

    const result = await isSticky(element);

    assert.equal(result, true);
  });
});
