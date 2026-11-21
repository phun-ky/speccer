# Measure

![Image of the measure feature](/speccer-measure-spacing-example-dark.png)

This feature allows you to display element dimensions.

[[toc]]

::: info

For more technical documentation, see the relevant documentation
[under the API-section](/api/variables/measure).

:::

## Usage

![Image of the measure feature](/speccer-measure-right-full-light.png)

### Via `<script>`-tag

Display dimensions with:

```html
<script src="https://unpkg.com/@phun-ky/speccer/dist/speccer.js"></script>
<div
  data-speccer="measure [height[left|right]][width top|bottom][subtle][slim]"
  class="…"
></div>
```

Where `height` and `width` comes with placement flags. Default for `height` is
`left`, default for `width` is `top`.

### Programmatically

```typescript
import { measure } from '@phun-ky/speccer';

const { element: measureElement } = measure;
const element = document.querySelector('.my-element');
const options = {
  slug: 'measureTest',
  type: 'measure',
  position: 'left', // or 'top', 'right' or 'bottom'
  measure: {
    slim: false,
    height: true, // height, width, or both
    width: false
  }
};
await measureElement(element, options);
```

### Slim Measure

![Image of slim option for measure](/speccer-measure-right-light.png)

Use a slim style:

::: code-group

```html [via script-tag]
<div data-speccer="measure slim height left" class="…"></div>
```

```typescript [programmatically]
import { measure } from '@phun-ky/speccer';

const { element: measureElement } = measure;
const element = document.querySelector('.my-element');
const options = {
  slug: 'measureTest',
  type: 'measure',
  position: 'left',
  measure: {
    slim: true,
    height: true
  }
};
await measureElement(element, options);
```

:::

This will give a slimmer look and feel.

### Subtle Slim Measure

Use a subtle style for the slim option, uses a dashed line instead of a solid
line:

::: code-group

```html [via script-tag]
<div data-speccer="measure slim height left subtle" class="…"></div>
```

```typescript [programmatically]
import { measure } from '@phun-ky/speccer';

const { element: measureElement } = measure;
const element = document.querySelector('.my-element');
const options = {
  slug: 'measureTest',
  position: 'left',
  type: 'measure',
  measure: {
    slim: true,
    height: true,
    subtle: true
  }
};
await measureElement(element, options);
```

:::

This will give a dashed border.

![Image of the measure feature](/speccer-measure-bottom-dark.png)
