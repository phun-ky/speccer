import { getCoordsPairFromObjects } from '../../../utils/get-coords-pair-from-objects';
import { getMaxDocumentHeight } from '../../../utils/get-max-document-height';
import { hasSVGElement } from '../../../utils/node';
import { add } from '../../../utils/styles';

type RectType = Pick<DOMRect, 'top' | 'right' | 'bottom' | 'left'>;

/**
 * Whether moving focus from one element to the next goes against the reading
 * order: up to an earlier row, or back along the same row. Elements that
 * overlap, like a field and its label, never count as backwards.
 *
 * @param {RectType} from - The rect of the element focus leaves.
 * @param {RectType} to - The rect of the element focus moves to.
 * @param {boolean} [rtl] - Whether rows run right to left.
 * @returns {boolean} `true` when the move goes backwards.
 *
 * @example
 * ```ts
 * isBackwards(a.getBoundingClientRect(), b.getBoundingClientRect());
 * ```
 */
export const isBackwards = (
  from: RectType,
  to: RectType,
  rtl = false
): boolean => {
  if (to.bottom <= from.top) return true;

  // Not on the same row: below is the reading order
  if (to.top >= from.bottom) return false;

  return rtl ? to.left >= from.right : to.right <= from.left;
};

/**
 * How far above the annotations a line between stops on one row arcs, in px.
 */
const ARC_HEIGHT = 32;

/**
 * Draws a line from each tab stop annotation to the next, in tab order, in
 * the `#ph-speccer-svg` element. Lines between stops on one row arc above the
 * annotations, so they don't strike through the controls. A line that goes against the
 * reading order gets the `backwards` class, since it may break WCAG 2.4.3,
 * focus order.
 *
 * @param {{ target: HTMLElement; badge: HTMLElement }[]} stops - The tab stops in tab order, with their annotations.
 * @param {boolean} [rtl] - Whether rows run right to left.
 * @returns {Promise<void>} Settles when the lines are drawn.
 *
 * @example
 * ```ts
 * await drawTabstopsPath([{ target: input, badge }, { target: button, badge: badge2 }]);
 * ```
 */
export const drawTabstopsPath = async (
  stops: { target: HTMLElement; badge: HTMLElement }[],
  rtl = false
): Promise<void> => {
  if (stops.length < 2 || !hasSVGElement()) return;

  const _canvas = document.getElementById('ph-speccer-svg') as HTMLElement;
  const _template = document.getElementById('ph-speccer-path') as Element;

  await add(_canvas, { height: `${getMaxDocumentHeight()}px` });

  for (let i = 1; i < stops.length; i++) {
    const _from = stops[i - 1];
    const _to = stops[i];
    const { x1, y1, x2, y2 } = await getCoordsPairFromObjects(
      _from.badge,
      _to.badge,
      'top-center',
      'top-center'
    );
    // Same offset as getSVGPath, since the SVG element spans the document
    const _scroll = document.documentElement.scrollTop;
    // Arc over the row, so the line doesn't strike through its controls.
    // Between rows a straight line is clearer.
    const _arc = Math.abs(y2 - y1) < _from.badge.offsetHeight ? ARC_HEIGHT : 0;
    const _line = _template.cloneNode(false) as SVGPathElement;

    _line.removeAttribute('id');
    _line.classList.remove('original');
    // `speccer a11y` so a11y() and removeAnnotations() remove it
    _line.classList.add('speccer', 'a11y', 'tabstops-path');

    if (
      isBackwards(
        _from.target.getBoundingClientRect(),
        _to.target.getBoundingClientRect(),
        rtl
      )
    )
      _line.classList.add('backwards');

    _line.setAttribute(
      'd',
      `M ${x1} ${y1 + _scroll} ` +
        `C ${x1} ${y1 + _scroll - _arc}, ${x2} ${y2 + _scroll - _arc}, ${x2} ${y2 + _scroll}`
    );
    _canvas.appendChild(_line);
  }
};
