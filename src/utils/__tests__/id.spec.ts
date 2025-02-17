import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { uniqueID } from '../id';

describe('id', () => {
  it('should generate a unique ID with the expected format', () => {
    const id1 = uniqueID();
    const id2 = uniqueID();
    const id3 = uniqueID();

    // Check if the IDs have the correct format (start with an underscore followed by 9 characters)
    assert.match(id1, /^_[a-z0-9]{9}$/);
    assert.match(id2, /^_[a-z0-9]{9}$/);
    assert.match(id3, /^_[a-z0-9]{9}$/);

    // Check if the generated IDs are unique
    assert.ok(id1 !== id2);
    assert.ok(id2 !== id3);
    assert.ok(id1 !== id3);
  });

  it('should generate different IDs on multiple calls', () => {
    // Generate a large number of IDs
    const generatedIDs = new Set();

    for (let i = 0; i < 1000; i++) {
      const id = uniqueID();

      generatedIDs.add(id);
    }

    // Check if all generated IDs are unique
    assert.equal(generatedIDs.size, 1000);
  });
});
