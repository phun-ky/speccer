/* node:coverage disable */
/**
 * This feature will highlight the grid spacing in a `display: grid;` element.
 *
 * ![pin](/speccer-grid-full-light.png?raw=true)
 *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="grid [columns|rows]"
 *   class="…"
 * >
 *   …
 * </div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   type: 'grid',
 *   grid: {
 *     toggle: 'both'
 *   }
 * };
 *
 * grid(targetElement, options);
 * ```
 *
 * @packageDocumentation
 */
/* eslint no-console:0 */
import { SpeccerOptionsInterface } from '../../types/speccer';
import { SPECCER_DATA_ATTRIBUTE } from '../../utils/constants';
import { getOptions } from '../../utils/get-options';
import { uniqueID } from '../../utils/id';
import { isElementHidden } from '../../utils/node';
import { offset } from '../../utils/position';
import { add as addStyles, get as getStyles } from '../../utils/styles';

/**
 * Creates a visual grid overlay for a given target element.
 *
 * @param {HTMLElement} targetElement - The target element to create the grid overlay for.
 * @param {SpeccerOptionsInterface} [options] - Options to determine what to draw
 * @returns {Promise<void>}
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * if (targetElement) {
 *   await create(targetElement);
 * }
 * ```
 */
/* node:coverage enable */
export const create = async (
  targetElement: HTMLElement,
  options?: SpeccerOptionsInterface
): Promise<void> => {
  if (!targetElement) return;

  if (isElementHidden(targetElement)) return;

  const _areas_string: string =
    targetElement.getAttribute(SPECCER_DATA_ATTRIBUTE) || 'grid';

  const targetStyle = await getStyles(targetElement);

  const _options = await getOptions(_areas_string, targetElement, options);

  if (_options.type !== 'grid' || !_options.grid) return;

  const { grid } = _options;

  const { toggle } = grid;
  const { height, width } = targetElement.getBoundingClientRect();
  const { top, left } = await offset(targetElement);
  const { gridTemplateColumns, gridTemplateRows, padding } = targetStyle;
  const _pin_element_id = `speccer-${_options.slug}-${targetElement.getAttribute('id') || uniqueID()}`;

  targetElement.setAttribute('data-speccer-element-id', _pin_element_id);

  if (toggle === 'columns' || toggle === 'both') {
    const columnGap = parseInt(targetStyle.columnGap || '0');
    const gridColumnContainer = document.createElement('div');

    document.documentElement.style.setProperty(
      '--ph-speccer-grid-gap-original',
      `${columnGap}px`
    );
    document.documentElement.style.setProperty(
      '--ph-speccer-grid-gap',
      `${columnGap < 24 ? 24 : columnGap}px`
    );

    if (columnGap < 24) gridColumnContainer.classList.add('speccer-small-grid');

    gridColumnContainer.setAttribute('data-speccer-id', _pin_element_id);
    gridColumnContainer.classList.add(
      'ph-speccer',
      'speccer',
      'speccer-grid-container'
    );

    addStyles(gridColumnContainer, {
      height: `${height + 64}px`,
      width: `${width}px`,
      left: `${left}px`,
      top: `${top - 32}px`,
      padding,
      gridTemplateColumns
    });

    const numberOfColumnItems = gridTemplateColumns?.split(' ').length || 0;

    for (let i = 0; i < numberOfColumnItems; i++) {
      const gridItem = document.createElement('div');

      gridItem.classList.add('ph-speccer', 'speccer', 'speccer-grid-item');
      gridColumnContainer.appendChild(gridItem);
    }
    document.body.appendChild(gridColumnContainer);
  }

  if (toggle === 'rows' || toggle === 'both') {
    const rowGap = parseInt(targetStyle.rowGap || '0');
    const gridRowContainer = document.createElement('div');

    document.documentElement.style.setProperty(
      '--ph-speccer-grid-row-gap-original',
      `${rowGap}px`
    );
    document.documentElement.style.setProperty(
      '--ph-speccer-grid-row-gap',
      `${rowGap < 24 ? 24 : rowGap}px`
    );

    if (rowGap < 24) gridRowContainer.classList.add('speccer-small-grid');

    gridRowContainer.setAttribute('data-speccer-id', _pin_element_id);
    gridRowContainer.classList.add(
      'ph-speccer',
      'speccer',
      'speccer-grid-row-container'
    );

    addStyles(gridRowContainer, {
      width: `${width + 64}px`,
      height: `${height}px`,
      top: `${top}px`,
      left: `${left - 32}px`,
      padding,
      gridTemplateRows
    });

    const numberOfRowItems = gridTemplateRows?.split(' ').length || 0;

    for (let i = 0; i < numberOfRowItems; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('ph-speccer', 'speccer', 'speccer-grid-row-item');

      gridRowContainer.appendChild(gridItem);
    }
    document.body.appendChild(gridRowContainer);
  }
};

/* node:coverage disable */
/**
 * Create a visual overlay to present the column gaps for a grid container
 *
 * Adds a visual grid overlay to the target element if it has the appropriate data attribute and is a grid.
 *
 * ![grid](/speccer-grid-full-light.png?raw=true)
 *
 * @param {HTMLElement} targetElement - The target element to add the grid overlay to.
 * @param {SpeccerOptionsInterface} [options] - Options.
 * @returns {Promise<void>} A promise that resolves once the overlay has been added.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 *
 * grid(targetElement);
 * ```
 *
 * ##### Only rows
 *
 * ![grid](/speccer-grid-full-dark.png?raw=true)
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   type: 'grid',
 *   grid: {
 *     toggle: 'rows'
 *   }
 * };
 *
 * grid(targetElement, options);
 * ```
 */
/* node:coverage enable */
export const grid = async (
  targetElement: HTMLElement,
  options?: SpeccerOptionsInterface
): Promise<void> => {
  if (!targetElement) return;

  if (isElementHidden(targetElement)) return;

  await create(targetElement, options);
};
