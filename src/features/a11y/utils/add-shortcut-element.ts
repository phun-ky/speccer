import { add } from '../../../utils/styles';
import { SPECCER_MODIFIER_KEYS, SPECCER_PHYSICAL_KEYS } from '../constants';

import { styles } from './styles';

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
 *   await addShortcutElement(shortcutElement, 'Ctrl + Shift + A');
 * }
 * ```
 */
export const addShortcutElement = async (
  el: HTMLElement,
  shortcutString: string
): Promise<void> => {
  const _regex = /\s\+\s/;
  const _keys = shortcutString.split(_regex).map((str) => str.trim());
  const _shortcut_holder = document.createElement('div');

  _shortcut_holder.classList.add('ph-speccer');
  _shortcut_holder.classList.add('speccer');
  _shortcut_holder.classList.add('a11y');
  _shortcut_holder.classList.add('shortcut-holder');

  for (const key of _keys) {
    const _key_element = document.createElement('kbd');
    const _key_text_node = document.createTextNode(key);

    _key_element.classList.add('ph-speccer');
    _key_element.classList.add('speccer');
    _key_element.classList.add('a11y');
    _key_element.classList.add('shortcut');

    if (SPECCER_MODIFIER_KEYS.includes(key.toLowerCase()))
      _key_element.classList.add('modifier');

    if (SPECCER_PHYSICAL_KEYS.includes(key.toLowerCase()))
      _key_element.classList.add('physical');

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
