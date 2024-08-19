/* eslint no-console:0 */
import { isValidGridElement } from '../../utils/area';
import { SPECCER_DATA_ATTRIBUTE } from '../../utils/constants';
import { isElementHidden } from '../../utils/node';
import { get as getStyles } from '../../utils/styles';
import { waitForFrame } from '../../utils/wait';

/**
 * Creates a visual grid overlay for a given target element.
 *
 * @param {HTMLElement} targetElement - The target element to create the grid overlay for.
 * @param {CSSStyleDeclaration} styles - The computed styles of the target element.
 * @returns {Promise<HTMLDivElement>} The created grid container element.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * if (targetElement) {
 *   const styles = window.getComputedStyle(targetElement);
 *   const gridOverlay = create(targetElement, styles);
 *   document.body.appendChild(gridOverlay);
 * }
 * ```
 */
export const create = async (
  targetElement: HTMLElement,
  styles: CSSStyleDeclaration
): Promise<HTMLDivElement> => {
  await waitForFrame();

  const { height, width, top, left } = targetElement.getBoundingClientRect();
  const { gridTemplateColumns, gridTemplate, padding } = styles;
  // const templateRows = styles['gridTemplateRows'];// for a later feature perhaps
  const columnGap = parseInt(styles.columnGap);
  // const rowGap = styles.rowGap;// for a later feature perhaps
  const gridContainer = document.createElement('div');

  document.documentElement.style.setProperty(
    '--ph-speccer-grid-gap-original',
    `${columnGap}px`
  );
  document.documentElement.style.setProperty(
    '--ph-speccer-grid-gap',
    `${columnGap < 24 ? 24 : columnGap}px`
  );

  if (columnGap < 24) gridContainer.classList.add('speccer-small-grid');

  gridContainer.classList.add('ph-speccer');
  gridContainer.classList.add('speccer');
  gridContainer.classList.add('speccer-grid-container');

  gridContainer.style.height = `${height + 64}px`;
  gridContainer.style.width = `${width}px`;
  gridContainer.style.left = `${left}px`;
  gridContainer.style.top = `${top - 32}px`;
  gridContainer.style.padding = padding;
  // gridContainer.style.columnGap = `${columnGap}px`; // using css vars instead
  gridContainer.style.gridTemplate = gridTemplate;
  gridContainer.style.gridTemplateRows = 'repeat(1, 100%)';

  //gridContainer.style.gridTemplateRows = templateRows; // for a later feature perhaps
  const numberOfItems = gridTemplateColumns.split(' ').length;

  for (let i = 0; i < numberOfItems; i++) {
    const gridItem = document.createElement('div');

    gridItem.classList.add('ph-speccer');
    gridItem.classList.add('speccer');
    gridItem.classList.add('speccer-grid-item');
    gridContainer.appendChild(gridItem);
  }

  return gridContainer;
};

/**
 * Create a visual overlay to present the column gaps for a grid container
 *
 * Adds a visual grid overlay to the target element if it has the appropriate data attribute and is a grid.
 *
 * ![grid](https://github.com/phun-ky/speccer/blob/main/public/grid.png?raw=true)
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

  const _areas_string: string | null = targetElement.getAttribute(
    SPECCER_DATA_ATTRIBUTE
  );
  const _target_styles = await getStyles(targetElement);

  if (!isValidGridElement(_areas_string, _target_styles)) return;

  if (
    isElementHidden(targetElement)
  )
    return;

  await waitForFrame();

  const gridContainerElement = await create(targetElement, _target_styles);

  document.body.appendChild(gridContainerElement);
};
