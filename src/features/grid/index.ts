/* eslint no-console:0 */
import { waitForFrame } from '../../utils/wait';

const SPECCER_DATA_ATTR = 'data-speccer-grid';
const SPECCER_FEATURE_GRID = 'grid';

/**
 * Creates a visual grid overlay for a given target element.
 *
 * @param {HTMLElement} targetElement - The target element to create the grid overlay for.
 * @param {CSSStyleDeclaration} styles - The computed styles of the target element.
 * @returns {HTMLDivElement} The created grid container element.
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
export const create = (targetElement:HTMLElement, styles: CSSStyleDeclaration) => {
  const rect = targetElement.getBoundingClientRect();
  const templateColumns = styles.gridTemplateColumns;
  // const templateRows = styles['gridTemplateRows'];
  const columnGap = parseInt(styles.columnGap);
  // const rowGap = styles.rowGap;
  const padding = styles.padding;
  const gridContainer = document.createElement('div');

  document.documentElement.style.setProperty('--ph-speccer-grid-gap-original',`${columnGap}px`);
  document.documentElement.style.setProperty('--ph-speccer-grid-gap',`${columnGap < 24 ? 24 : columnGap}px`);

  if(columnGap < 24){
    gridContainer.classList.add('speccer-small-grid');
  }

  gridContainer.classList.add('ph-speccer');
  gridContainer.classList.add('speccer');
  gridContainer.classList.add('speccer-grid-container');

  gridContainer.style.height = rect.height + 64 + 'px';
  gridContainer.style.width = rect.width + 'px';
  gridContainer.style.position = 'absolute';
  gridContainer.style.left = rect.left + 'px';
  gridContainer.style.top = rect.top - 32 + 'px';
  gridContainer.style.display = 'grid';
  gridContainer.style.padding = padding;
  gridContainer.style.columnGap = `${columnGap}px`;
  gridContainer.style.gridTemplateColumns = templateColumns;

  //gridContainer.style.gridTemplateRows = templateRows;
  const numberOfItems = templateColumns.split(' ').length;

  for(let i = 0; i < numberOfItems;i++){
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

  const attr = targetElement.getAttribute(SPECCER_DATA_ATTR);

  await waitForFrame();

  const styles = window.getComputedStyle(targetElement);

  if(attr === SPECCER_FEATURE_GRID && (styles.display === 'grid' || styles.display.indexOf('grid') !== -1)){
    const gridContainerElement = create(targetElement, styles);

    document.body.appendChild(gridContainerElement);
  }
};
