import { describe, it, expect } from 'vitest';

import { uniqueID } from '../id';

describe('id', () => {
  it('should generate a unique ID with the expected format', () => {
    const id1 = uniqueID();
    const id2 = uniqueID();
    const id3 = uniqueID();

    // Check if the IDs have the correct format (start with an underscore followed by 9 characters)
    expect(id1).toMatch(/^_[a-z0-9]{9}$/);
    expect(id2).toMatch(/^_[a-z0-9]{9}$/);
    expect(id3).toMatch(/^_[a-z0-9]{9}$/);

    // Check if the generated IDs are unique
    expect(id1).not.toEqual(id2);
    expect(id2).not.toEqual(id3);
    expect(id1).not.toEqual(id3);
  });

  it('should generate different IDs on multiple calls', () => {
    // Generate a large number of IDs
    const generatedIDs = new Set();

    for (let i = 0; i < 1000; i++) {
      const id = uniqueID();

      generatedIDs.add(id);
    }

    // Check if all generated IDs are unique
    expect(generatedIDs.size).toBe(1000);
  });
});
