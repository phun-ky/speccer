/* eslint no-console:0 */
import { SpeccerOptionsInterface } from '../../types/speccer';
import { SPECCER_DATA_ATTRIBUTE } from '../../utils/constants';
import { getOptions } from '../../utils/get-options';
import { isElementHidden } from '../../utils/node';
import { offset } from '../../utils/position';
import { get as getStyles } from '../../utils/styles';
import { waitForFrame } from '../../utils/wait';

/**
 * Creates a visual grid overlay for a given target element.
 *
 * @param {HTMLElement} targetElement - The target element to create the grid overlay for.
 * @param {CSSStyleDeclaration} styles - The computed styles of the target element.
 * @param {Record<string,string>} options - Options to determine what to draw
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
export const create = async (
  targetElement: HTMLElement,
  styles: CSSStyleDeclaration,
  options: SpeccerOptionsInterface
): Promise<void> => {
  await waitForFrame();

  const { grid } = options;

  if (!grid) return;

  const { toggle } = grid;
  const { height, width } = targetElement.getBoundingClientRect();
  const { top, left } = await offset(targetElement);
  const { gridTemplateColumns, gridTemplateRows, padding } = styles;

  if (toggle === 'columns' || toggle === 'both') {
    const columnGap = parseInt(styles.columnGap);
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

    gridColumnContainer.classList.add('ph-speccer');
    gridColumnContainer.classList.add('speccer');
    gridColumnContainer.classList.add('speccer-grid-container');

    gridColumnContainer.style.height = `${height + 64}px`;
    gridColumnContainer.style.width = `${width}px`;
    gridColumnContainer.style.left = `${left}px`;
    gridColumnContainer.style.top = `${top - 32}px`;
    gridColumnContainer.style.padding = padding;
    gridColumnContainer.style.gridTemplateColumns = gridTemplateColumns;

    const numberOfColumnItems = gridTemplateColumns.split(' ').length;

    for (let i = 0; i < numberOfColumnItems; i++) {
      const gridItem = document.createElement('div');

      gridItem.classList.add('ph-speccer');
      gridItem.classList.add('speccer');
      gridItem.classList.add('speccer-grid-item');
      gridColumnContainer.appendChild(gridItem);
    }
    document.body.appendChild(gridColumnContainer);
  }

  if (toggle === 'rows' || toggle === 'both') {
    const rowGap = parseInt(styles.rowGap);
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

    gridRowContainer.classList.add('ph-speccer');
    gridRowContainer.classList.add('speccer');
    gridRowContainer.classList.add('speccer-grid-row-container');

    gridRowContainer.style.width = `${width + 64}px`;
    gridRowContainer.style.height = `${height}px`;
    gridRowContainer.style.top = `${top}px`;
    gridRowContainer.style.left = `${left - 32}px`;
    gridRowContainer.style.padding = padding;
    gridRowContainer.style.gridTemplateRows = gridTemplateRows;

    const numberOfRowItems = gridTemplateRows.split(' ').length;

    for (let i = 0; i < numberOfRowItems; i++) {
      const gridItem = document.createElement('div');

      gridItem.classList.add('ph-speccer');
      gridItem.classList.add('speccer');
      gridItem.classList.add('speccer-grid-row-item');
      gridRowContainer.appendChild(gridItem);
    }
    document.body.appendChild(gridRowContainer);
  }
};

/**
 * Create a visual overlay to present the column gaps for a grid container
 *
 * Adds a visual grid overlay to the target element if it has the appropriate data attribute and is a grid.
 *
 * ![grid](https://github.com/phun-ky/speccer/blob/main/public/speccer-grid-full-dark.png?raw=true)
 *
 * @param {HTMLElement} targetElement - The target element to add the grid overlay to.
 * @returns {Promise<void>} A promise that resolves once the overlay has been added.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * if (targetElement) {
 *   element(targetElement).then(() => {
 *     console.log('Grid overlay added');
 *   });
 * }
 * ```
 */
export const element = async (targetElement: HTMLElement): Promise<void> => {
  if (!targetElement) return;

  const _areas_string: string =
    targetElement.getAttribute(SPECCER_DATA_ATTRIBUTE) || '';
  const _target_style = await getStyles(targetElement);
  const _options = getOptions(_areas_string, _target_style);

  if (_options.type !== 'grid' || !_options.grid) return;

  if (isElementHidden(targetElement)) return;

  await waitForFrame();

  await create(targetElement, _target_style, _options);
};
