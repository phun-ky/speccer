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
/* node:coverage enable */
import { SpeccerOptionsInterface } from '../../types/speccer';
import { set as setClassNames } from '../../utils/classnames';
import { SPECCER_DATA_ATTRIBUTE } from '../../utils/constants';
import { getOptions } from '../../utils/get-options';
import { uniqueID } from '../../utils/id';
import { isElementHidden } from '../../utils/node';
import { offset } from '../../utils/position';
import { add as addStyles, get as getStyles } from '../../utils/styles';
import { waitForFrame } from '../../utils/wait';

/* node:coverage disable */
/**
 * Creates a visual grid overlay for a given target element.
 *
 * @param {HTMLElement} targetElement - The target element to create the grid overlay for.
 * @param {Partial<CSSStyleDeclaration>} styles - The computed styles of the target element.
 * @param {SpeccerOptionsInterface} options - Options to determine what to draw
 * @returns {Promise<void>}
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * if (targetElement) {
 *   const styles = window.getComputedStyle(targetElement);
 *   await create(targetElement, styles);
 * }
 * ```
 */
/* node:coverage enable */
export const create = async (
  targetElement: HTMLElement,
  styles: Partial<CSSStyleDeclaration>,
  options: SpeccerOptionsInterface
): Promise<void> => {
  if (!targetElement) return;

  if (isElementHidden(targetElement)) return;

  const _areas_string: string =
    targetElement.getAttribute('data-speccer') || 'grid';

  await waitForFrame();

  const _options = getOptions(
    _areas_string,
    getComputedStyle(targetElement),
    options
  );

  if (_options.type !== 'grid' || !_options.grid) return;

  const { grid } = _options;

  const { toggle } = grid;
  const { height, width } = targetElement.getBoundingClientRect();
  const { top, left } = await offset(targetElement);
  const { gridTemplateColumns, gridTemplateRows, padding } = styles;
  const _pin_element_id = `speccer-${options.slug}-${targetElement.getAttribute('id') || uniqueID()}`;

  targetElement.setAttribute('data-speccer-element-id', _pin_element_id);

  if (toggle === 'columns' || toggle === 'both') {
    const columnGap = parseInt(styles.columnGap || '0');
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

    setClassNames(
      gridColumnContainer,
      'ph-speccer speccer speccer-grid-container'
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

      setClassNames(gridItem, 'ph-speccer speccer speccer-grid-item');
      gridColumnContainer.appendChild(gridItem);
    }
    document.body.appendChild(gridColumnContainer);
  }

  if (toggle === 'rows' || toggle === 'both') {
    const rowGap = parseInt(styles.rowGap || '0');
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
    gridRowContainer.classList.add('ph-speccer');
    gridRowContainer.classList.add('speccer');
    gridRowContainer.classList.add('speccer-grid-row-container');

    setClassNames(
      gridRowContainer,
      'ph-speccer speccer speccer-grid-row-container'
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

      setClassNames(gridItem, 'ph-speccer speccer speccer-grid-row-item');
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
 * @param {SpeccerOptionsInterface|undefined} [options] - Options.
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
  options?: SpeccerOptionsInterface | undefined
): Promise<void> => {
  if (!targetElement) return;

  if (isElementHidden(targetElement)) return;

  const _areas_string: string =
    targetElement.getAttribute(SPECCER_DATA_ATTRIBUTE) || '';
  const _target_style = await getStyles(targetElement);
  const _options = getOptions(_areas_string, _target_style, options);

  if (_options.type !== 'grid' || !_options.grid) return;

  await waitForFrame();

  await create(targetElement, _target_style, _options);
};
