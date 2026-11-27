import {
  blend,
  contrastLevel,
  contrastRatio,
  RGBAType
} from '../../../utils/contrast';

/**
 * The page background when nothing sets one.
 */
const CANVAS_COLOR: RGBAType = [255, 255, 255, 1];

/**
 * Reused for colors that aren't `rgb()`, created on first use.
 */
let _context: CanvasRenderingContext2D | null | undefined;

/**
 * Parses a computed CSS color. Browsers compute most colors to `rgb()` or
 * `rgba()`, but keep others, like `oklch()` and `color()`, so those are
 * painted on a canvas and read back as sRGB.
 *
 * @param {string} color - A computed CSS color.
 * @returns {RGBAType | null} The color, or `null` if it can't be read.
 *
 * @example
 * ```ts
 * toRGBA('rgba(0, 0, 0, 0.5)'); // [0, 0, 0, 0.5]
 * ```
 */
export const toRGBA = (color: string): RGBAType | null => {
  const _match = color.match(/^rgba?\(([^)]+)\)$/);

  if (_match) {
    const [r, g, b, a = 1] = _match[1]
      .split(/[\s,/]+/)
      .filter(Boolean)
      .map(parseFloat);

    return [r, g, b, a];
  }

  if (_context === undefined)
    _context = document
      .createElement('canvas')
      .getContext('2d', { willReadFrequently: true });

  if (!_context) return null;

  _context.clearRect(0, 0, 1, 1);
  _context.fillStyle = color;
  _context.fillRect(0, 0, 1, 1);

  const [r, g, b, a] = _context.getImageData(0, 0, 1, 1).data;

  return [r, g, b, a / 255];
};

/**
 * The WCAG 2 contrast of an element's text against the background behind it.
 * The background is found by blending the background colors of the element
 * and its ancestors, down to the first opaque one, or white.
 *
 * Returns `null` when the color behind the text can't be known from styles:
 * a background image or gradient, or `opacity` below 1 on the element or an
 * ancestor. Content painted behind the text from elsewhere, like an
 * absolutely positioned sibling, isn't seen.
 *
 * @param {HTMLElement} el - The element with the text.
 * @returns {{ ratio: number; level: 'AAA' | 'AA' | 'Fail' } | null} The contrast ratio and the level it meets.
 *
 * @example
 * ```ts
 * getContrast(document.querySelector('p')); // { ratio: 4.48, level: 'Fail' }
 * ```
 */
export const getContrast = (
  el: HTMLElement
): { ratio: number; level: 'AAA' | 'AA' | 'Fail' } | null => {
  let _background: RGBAType = [0, 0, 0, 0];

  for (let node: Element | null = el; node; node = node.parentElement) {
    const _style = getComputedStyle(node);

    if (parseFloat(_style.opacity) < 1) return null;

    // Still checked for opacity, which fades everything inside
    if (_background[3] >= 1) continue;

    if (_style.backgroundImage !== 'none') return null;

    const _color = toRGBA(_style.backgroundColor);

    if (!_color) return null;

    _background = blend(_background, _color);
  }

  _background = blend(_background, CANVAS_COLOR);

  const _style = getComputedStyle(el);
  const _text = toRGBA(_style.color);

  if (!_text) return null;

  const _ratio = contrastRatio(blend(_text, _background), _background);
  const _size = parseFloat(_style.fontSize);
  const _large =
    _size >= 24 || (_size >= 18.66 && parseInt(_style.fontWeight) >= 700);

  return { ratio: _ratio, level: contrastLevel(_ratio, _large) };
};
