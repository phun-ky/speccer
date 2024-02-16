import { describe, it, expect } from '@jest/globals';

import { coords } from '../coords';
import {
  xy
} from '../xy';


describe('xy', () => {
  const mockRect: DOMRect = {
    top: 0,
    right: 100,
    bottom: 100,
    left: 0,
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    toJSON: () => null
  };

  beforeEach(() => {
    // Mocking the coords module functions
    jest.spyOn(coords, 'center_x').mockReturnValue(50);
    jest.spyOn(coords, 'center_y').mockReturnValue(50);
    jest.spyOn(coords, 'top').mockReturnValue(0);
    jest.spyOn(coords, 'right').mockReturnValue(100);
    jest.spyOn(coords, 'bottom').mockReturnValue(100);
    jest.spyOn(coords, 'left').mockReturnValue(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('center', () => {
    it('should return the center coordinates', () => {
      const result = xy.center(mockRect);

      expect(result).toEqual({ x: 50, y: 50 });
      expect(coords.center_x).toHaveBeenCalledWith(mockRect);
      expect(coords.center_y).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('top', () => {
    it('should return the top center coordinates', () => {
      const result = xy.top(mockRect);

      expect(result).toEqual({ x: 50, y: 0 });
      expect(coords.center_x).toHaveBeenCalledWith(mockRect);
      expect(coords.top).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('right', () => {
    it('should return the right center coordinates', () => {
      const result = xy.right(mockRect);

      expect(result).toEqual({ x: 100, y: 50 });
      expect(coords.right).toHaveBeenCalledWith(mockRect);
      expect(coords.center_y).toHaveBeenCalledWith(mockRect);
    });
  });
});
