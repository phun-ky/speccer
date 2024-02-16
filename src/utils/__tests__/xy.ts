import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { coords } from '../coords';
import { xy } from '../xy';

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
    vi.spyOn(coords, 'center_x').mockReturnValue(50);
    vi.spyOn(coords, 'center_y').mockReturnValue(50);
    vi.spyOn(coords, 'top').mockReturnValue(0);
    vi.spyOn(coords, 'right').mockReturnValue(100);
    vi.spyOn(coords, 'bottom').mockReturnValue(100);
    vi.spyOn(coords, 'left').mockReturnValue(0);
  });

  afterEach(() => {
    vi.clearAllMocks();
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

  describe('bottom', () => {
    it('should return the bottom center coordinates', () => {
      const result = xy.bottom(mockRect);

      expect(result).toEqual({ x: 50, y: 100 });
      expect(coords.bottom).toHaveBeenCalledWith(mockRect);
      expect(coords.center_x).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('right-bottom', () => {
    it('should return the right bottom coordinates', () => {
      const result = xy['right-bottom'](mockRect);

      expect(result).toEqual({ x: 100, y: 100 });
      expect(coords.bottom).toHaveBeenCalledWith(mockRect);
      expect(coords.right).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('left-top', () => {
    it('should return the left top coordinates', () => {
      const result = xy['left-top'](mockRect);

      expect(result).toEqual({ x: 0, y: 0 });
      expect(coords.top).toHaveBeenCalledWith(mockRect);
      expect(coords.left).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('left-bottom', () => {
    it('should return the left bottom coordinates', () => {
      const result = xy['left-bottom'](mockRect);

      expect(result).toEqual({ x: 0, y: 100 });
      expect(coords.bottom).toHaveBeenCalledWith(mockRect);
      expect(coords.left).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('top-left', () => {
    it('should return the top left coordinates', () => {
      const result = xy['top-left'](mockRect);

      expect(result).toEqual({ x: 0, y: 0 });
      expect(coords.left).toHaveBeenCalledWith(mockRect);
      expect(coords.top).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('top-right', () => {
    it('should return the top right coordinates', () => {
      const result = xy['top-right'](mockRect);

      expect(result).toEqual({ x: 100, y: 0 });
      expect(coords.right).toHaveBeenCalledWith(mockRect);
      expect(coords.top).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('bottom-left', () => {
    it('should return the bottom left coordinates', () => {
      const result = xy['bottom-left'](mockRect);

      expect(result).toEqual({ x: 0, y: 100 });
      expect(coords.left).toHaveBeenCalledWith(mockRect);
      expect(coords.bottom).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('bottom-right', () => {
    it('should return the bottom right coordinates', () => {
      const result = xy['bottom-right'](mockRect);

      expect(result).toEqual({ x: 100, y: 100 });
      expect(coords.right).toHaveBeenCalledWith(mockRect);
      expect(coords.bottom).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('top-center', () => {
    it('should return the top center coordinates', () => {
      const result = xy['top-center'](mockRect);

      expect(result).toEqual({ x: 50, y: 0 });
      expect(coords.center_x).toHaveBeenCalledWith(mockRect);
      expect(coords.top).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('right-center', () => {
    it('should return the right center coordinates', () => {
      const result = xy['right-center'](mockRect);

      expect(result).toEqual({ x: 100, y: 50 });
      expect(coords.center_y).toHaveBeenCalledWith(mockRect);
      expect(coords.right).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('bottom-center', () => {
    it('should return the bottom center coordinates', () => {
      const result = xy['bottom-center'](mockRect);

      expect(result).toEqual({ x: 50, y: 100 });
      expect(coords.center_x).toHaveBeenCalledWith(mockRect);
      expect(coords.bottom).toHaveBeenCalledWith(mockRect);
    });
  });

  describe('left-center', () => {
    it('should return the left center coordinates', () => {
      const result = xy['left-center'](mockRect);

      expect(result).toEqual({ x: 0, y: 50 });
      expect(coords.center_y).toHaveBeenCalledWith(mockRect);
      expect(coords.left).toHaveBeenCalledWith(mockRect);
    });
  });
});
