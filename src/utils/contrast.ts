/**
 * A color as red, green and blue from 0 to 255, and alpha from 0 to 1.
 */
export type RGBAType = [number, number, number, number];

/**
 * Blends a color over a background, like the browser paints it.
 *
 * @param {RGBAType} top - The color on top.
 * @param {RGBAType} bottom - The color below it.
 * @returns {RGBAType} The blended color.
 *
 * @example
 * ```ts
 * blend([0, 0, 0, 0.5], [255, 255, 255, 1]); // [127.5, 127.5, 127.5, 1]
 * ```
 */
export const blend = (top: RGBAType, bottom: RGBAType): RGBAType => {
  const _alpha = top[3] + bottom[3] * (1 - top[3]);

  if (_alpha === 0) return [0, 0, 0, 0];

  const _channel = (i: number) =>
    (top[i] * top[3] + bottom[i] * bottom[3] * (1 - top[3])) / _alpha;

  return [_channel(0), _channel(1), _channel(2), _alpha];
};

/**
 * The relative luminance of an sRGB color, as WCAG 2 defines it.
 *
 * @param {RGBAType} color - The color. Alpha is ignored.
 * @returns {number} The luminance, from 0 for black to 1 for white.
 *
 * @example
 * ```ts
 * luminance([255, 255, 255, 1]); // 1
 * ```
 */
export const luminance = ([r, g, b]: RGBAType): number => {
  const _linear = (channel: number) => {
    const c = channel / 255;

    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * _linear(r) + 0.7152 * _linear(g) + 0.0722 * _linear(b);
};

/**
 * The WCAG 2 contrast ratio between two opaque colors.
 *
 * @param {RGBAType} a - One color.
 * @param {RGBAType} b - The other color.
 * @returns {number} The ratio, from 1 to 21.
 *
 * @example
 * ```ts
 * contrastRatio([0, 0, 0, 1], [255, 255, 255, 1]); // 21
 * ```
 */
export const contrastRatio = (a: RGBAType, b: RGBAType): number => {
  const [_lighter, _darker] = [luminance(a), luminance(b)].sort(
    (x, y) => y - x
  );

  return (_lighter + 0.05) / (_darker + 0.05);
};

/**
 * The WCAG 2 level a contrast ratio meets for text. Large text is 24px or
 * more, or 18.66px (14pt) or more and bold.
 *
 * @param {number} ratio - The contrast ratio.
 * @param {boolean} large - Whether the text is large.
 * @returns {'AAA' | 'AA' | 'Fail'} The level met.
 *
 * @example
 * ```ts
 * contrastLevel(4.6, false); // 'AA'
 * ```
 */
export const contrastLevel = (
  ratio: number,
  large: boolean
): 'AAA' | 'AA' | 'Fail' => {
  if (ratio >= (large ? 4.5 : 7)) return 'AAA';

  if (ratio >= (large ? 3 : 4.5)) return 'AA';

  return 'Fail';
};
