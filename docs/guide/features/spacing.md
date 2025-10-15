# Spacing

![Image of the spacing feature](/speccer-spacing-light.png)

This feature allows you to display the spacing properties of an element or the
element and all of its children.

[[toc]]

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

### Via `<script>`-tag

Use the following attribute to display element padding and margin:

```html
<script src="https://unpkg.com/@phun-ky/speccer/dist/speccer.js"></script>
<div data-speccer="spacing [padding|margin] [bound]" class="…"></div>
```

### Programmatically

```typescript
import { spacing } from '@phun-ky/speccer';

const { create } = spacing;
const element = document.querySelector('.my-element');
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
unless you specify `padding` and `margin`.

::: tip Feature options

For more control over the feature options, you can view the available
[settings in the reference section](/api/interfaces/SpeccerOptionsInterface#examples).

:::

![Image of the spacing feature in dark mode](/speccer-spacing-dark.png)

## Bound Spacing

![spacing](/speccer-spacing-bound.png)

This option binds the speccer elements to the bounds of the element container.
Suitable for more dense layouts.

### Via `<script>`-tag

```html [index.html]
<script src="https://unpkg.com/@phun-ky/speccer/dist/speccer.js"></script>
<div data-speccer="spacing bound" class="…"></div>
```

### Programmatically

```typescript [main.ts]
import { spacing } from '@phun-ky/speccer';

const { create } = spacing;
const element = document.querySelector('.my-element');
const options = {
  slug: 'spacingTest',
  type: 'spacing',
  spacing: {
    bound: true
  }
};
await create(element, options);
```
