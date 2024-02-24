/**
 * Array of keys considered as modifiers in shortcuts.
 * @type {string[]}
 */
export const SPECCER_MODIFIER_KEYS: string[] = [
  'alt',
  'altgraph',
  'capslock',
  'control',
  'fn',
  'fnlock',
  'hyper',
  'meta',
  'numlock',
  'os',
  'scrolllock',
  'shift',
  'super',
  'symbol',
  'command',
  'ctrl',
  'altgr',
  'symbollock'
];

export const SPECCER_PHYSICAL_KEYS: string[] = [
  'escape',
  'esc',
  'enter',
  'return',
  '⏎',
  '␛'
];

/**
 * Selector string for tabbable elements.
 * @type {string}
 */
export const SPECCER_TABBABLE_ELEMENTS_SELECTOR = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]
`;

/**
 * Selector string for landmark elements.
 * @type {string}
 */
export const SPECCER_LANDMARK_ELEMENTS_SELECTOR = `
header, footer, section, main, nav, aside, [role="section"], [role="banner"],
[role="complementary"], [role="contentinfo"], [role="form"], [role="main"],
[role="navigation"], [role="region"], [role="search"]
`;
