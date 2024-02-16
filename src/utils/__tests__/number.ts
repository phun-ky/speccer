import { describe, it, expect } from 'vitest';

import { decimal } from '../number';

describe('number', () => {
  describe('decimal', () => {
    it('should convert a number to a string with default decimal places', () => {
      // Call the decimal function without specifying decimals
      const result = decimal(12.3456);

      // Check if the result has the default number of decimal places (3)
      expect(result).toBe('12.346'); // Rounding should be applied
    });

    it('should convert a number to a string with the specified number of decimal places', () => {
      // Call the decimal function with 2 decimal places
      const result = decimal(12.3456, 2);

      // Check if the result has exactly 2 decimal places
      expect(result).toBe('12.35'); // Rounding should be applied
    });

    it('should handle numbers passed as strings', () => {
      // Call the decimal function with a number passed as a string
      const result = decimal('12.3456', 2);

      // Check if the result has exactly 2 decimal places
      expect(result).toBe('12.35'); // Rounding should be applied
    });

    it('should handle negative numbers', () => {
      // Call the decimal function with a negative number
      const result = decimal(-12.3456, 2);

      // Check if the result has exactly 2 decimal places and the negative sign
      expect(result).toBe('-12.35'); // Rounding should be applied
    });
  });
});
