# Spacing

![Image of the spacing feature](/speccer-spacing-light.png)

This feature allows you to display the spacing properties of an element or the
element and all of its children.

::: info

For more technical documentation, see the relevant documentation
[under the API-section](/api/variables/spacing).

:::

::: warning Important

For now, we avoid displaying spacing for these elements:

````typescript
/**
 * Array of HTML tags to avoid when processing.
 *
 * @type {string[]}
 * @example
 * ```ts
 * // Access the array of tags to avoid
 * const tagsToAvoid = SPECCER_TAGS_TO_AVOID;
 * console.log(tagsToAvoid); // Example output: ['TR', 'TH', 'TD', ...]
 * ```
 */
export const SPECCER_TAGS_TO_AVOID: string[] = [
  'TR',
  'TH',
  'TD',
  'TBODY',
  'THEAD',
  'TFOOT'
];
````

:::

## Usage

### In the HTML

Use the following attribute to display element padding and margin:

```html
<div data-speccer="spacing [padding|margin] [bound]" class="…"></div>
```

### Programmatically

```typescript
import { spacing } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { create } = spacing as {
  create: (target: HTMLElement, options?: SpeccerOptionsInterface) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'spacingTest',
  type: 'spacing',
  spacing: {
    both: [false | true],
    padding: [false | true],
    margin: [false | true],
    bound: [false | true]
  }
};
await create(element, options);
```

This will display the element _and all of it's children_ padding and margin,
unless you specify `padding` and `margin`

![Image of the spacing feature in dark mode](/speccer-spacing-dark.png)

## Bound Spacing

![spacing](/speccer-spacing-bound.png)

This option binds the speccer elements to the bounds of the element container.
Suitable for more dense layouts.

::: code-group

```html [index.html]
<div data-speccer="spacing bound" class="…"></div>
```

```typescript [main.ts]
import { spacing } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { create } = spacing as {
  create: (target: HTMLElement, options?: SpeccerOptionsInterface) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'spacingTest',
  type: 'spacing',
  spacing: {
    bound: true
  }
};
await create(element, options);
```

:::
