/**
 * This feature will annotate or highlight accessibility areas like landmarks and region. It can also display tab stops/sequence and any keyboard shortcuts assigned
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-tabstops-light.png?raw=true)
 *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="a11y [shortcuts|tabstops|landmark]"
 *   class="…"
 * >
 *   …
 * </div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * a11y(targetElement);
 * ```
 *
 * @packageDocumentation
 */
/* eslint-disable import/no-unused-modules */
import { cx, set as setClassNames } from '../../utils/classnames';
import { isElementHidden } from '../../utils/node';
import { add } from '../../utils/styles';

import {
  SPECCER_LANDMARK_ELEMENTS_SELECTOR,
  SPECCER_MODIFIER_KEYS,
  SPECCER_PHYSICAL_KEYS,
  SPECCER_TABBABLE_ELEMENTS_SELECTOR
} from './constants';
import { createA11yElement } from './utils/create-a11y-element';
import { styles } from './utils/styles';

/**
 * Adds an accessibility element to the document body based on the target element and type.
 *
 * ![Screenshot of speccer a11y tab stops in use](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-tabstops-light.png?raw=true)
 * ![Screenshot of speccer a11y landmark in use](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-landmarks-light.png?raw=true)
 *
 * @param {HTMLElement} targetEl - Target HTML element.
 * @param {unknown} [content] - Content to be added to the accessibility element.
 * @param {string} type - Type of accessibility element ('tabstops' or 'landmark').
 * @returns {Promise<void>} A Promise resolving when the operation is complete.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('myElement');
 * if (targetElement) {
 *   await element(targetElement, 1, 'landmark');
 *   await element(targetElement, null, 'tabstops');
 * }
 * ```
 */
export const element = async (
  targetEl: HTMLElement,
  content: unknown,
  type: string
): Promise<void> => {
  if (!targetEl || !targetEl.checkVisibility()) return;

  const _a11y_el = createA11yElement(type, content);

  if (type === 'landmark') {
    _a11y_el.setAttribute('data-speccer-nodename', targetEl.nodeName);

    const _role =
      targetEl.role || `semantic role: ${targetEl.nodeName.toLowerCase()}`;
    const _label = targetEl.getAttribute('aria-label') || 'unnamed';

    _a11y_el.setAttribute('title', `${_label}: ${_role}`);
  }

  document.body.appendChild(_a11y_el);

  const _a11y_styles = await styles(type, targetEl as HTMLElement, _a11y_el);

  await add(_a11y_el, _a11y_styles);
};

/**
 * Adds a shortcut element to the document body based on the provided HTML element and shortcut string.
 *
 * ![Screenshot of speccer a11y shortcuts in use](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-shortcuts-light.png?raw=true)
 *
 * @param {HTMLElement} el - Target HTML element.
 * @param {string} shortcutString - Shortcut string to be displayed.
 * @returns {Promise<void>} A Promise resolving when the operation is complete.
 *
 * @example
 * ```ts
 * const shortcutElement = document.getElementById('shortcutElement');
 * if (shortcutElement) {
 *   await shortcut(shortcutElement, 'Ctrl + Shift + A');
 * }
 * ```
 */
export const shortcut = async (
  el: HTMLElement,
  shortcutString: string
): Promise<void> => {
  const _regex = /\s\+\s/;
  const _keys = shortcutString.split(_regex).map((str) => str.trim());
  const _shortcut_holder = document.createElement('div');
  const _shortcut_holder_class_names = cx('ph-speccer speccer a11y shortcut-holder');

  setClassNames(_shortcut_holder, _shortcut_holder_class_names);

  for (const key of _keys) {
    const _key_element = document.createElement('kbd');
    const _key_text_node = document.createTextNode(key);
    const _key_element_class_names = cx('ph-speccer speccer a11y shortcut', {
      modifier: SPECCER_MODIFIER_KEYS.includes(key.toLowerCase()),
      physical: SPECCER_PHYSICAL_KEYS.includes(key.toLowerCase())
    });

    setClassNames(_key_element, _key_element_class_names);

    _key_element.appendChild(_key_text_node);

    _shortcut_holder.appendChild(_key_element);
  }

  document.body.appendChild(_shortcut_holder);

  const _shortcut_holder_styles = await styles(
    'shortcut',
    el as HTMLElement,
    _shortcut_holder
  );

  await add(_shortcut_holder, _shortcut_holder_styles);
};

/**
 * Initializes the accessibility elements on the document.
 *
 * @example
 * ```ts
 * a11y();
 * ```
 */
export const a11y = () => {
  const _tab_order_elements = document.querySelectorAll(
    '[data-speccer*="a11y tabstops"]'
  );
  const _landmark_elements = document.querySelectorAll(
    '[data-speccer*="a11y landmark"]'
  );
  const _shortcut_elements = document.querySelectorAll(
    '[data-speccer*="a11y shortcut"]'
  );

  if (_shortcut_elements.length) {
    for (const el of _shortcut_elements) {
      const _shortcut_string = el.getAttribute('data-speccer-a11y-shortcut');

      if (
        !_shortcut_string ||
        _shortcut_string === '' ||
        isElementHidden(el as HTMLElement)
      )
        continue;

      shortcut(el as HTMLElement, _shortcut_string);
    }
  }

  if (_tab_order_elements.length) {
    for (const el of _tab_order_elements) {
      const _tabstops_els = el.querySelectorAll(
        SPECCER_TABBABLE_ELEMENTS_SELECTOR
      );

      for (const tabstopsEl of _tabstops_els) {
        if (isElementHidden(tabstopsEl as HTMLElement)) continue;

        element(tabstopsEl as HTMLElement, null, 'tabstops');
      }
    }
  }

  if (_landmark_elements.length) {
    for (const el of _landmark_elements) {
      const _landmark_els = el.querySelectorAll(
        SPECCER_LANDMARK_ELEMENTS_SELECTOR
      );

      for (const [landmarkIndex, landmarkEl] of _landmark_els.entries()) {
        if (isElementHidden(landmarkEl as HTMLElement)) continue;

        element(landmarkEl as HTMLElement, landmarkIndex + 1, 'landmark');
        element(landmarkEl as HTMLElement, null, 'region');
      }
    }
  }
};
