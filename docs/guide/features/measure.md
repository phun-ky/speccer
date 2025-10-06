# Measure

![Image of the measure feature](https://raw.githubusercontent.com/phun-ky/speccer/refs/heads/main/public/speccer-measure-spacing-example-dark.png)

This feature allows you to display element dimensions.

::: info

For more technical documentation, see the relevant documentation
[under the API-section](/api/variables/measure).

:::

## Usage

### In the HTML

![Image of the measure feature](https://raw.githubusercontent.com/phun-ky/speccer/refs/heads/main/public/speccer-measure-right-full-light.png)
![Image of the measure feature](https://raw.githubusercontent.com/phun-ky/speccer/refs/heads/main/public/speccer-measure-bottom-dark.png)

Display dimensions with:

```html
<div
  data-speccer="measure [height[left|right]][width top|bottom][subtle][slim]"
  class="…"
></div>
```

Where `height` and `width` comes with placement flags. Default for `height` is
`left`, default for `width` is `top`.

### Programmatically

```typescript
import { measure } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { create } = measure as {
  create: (target: HTMLElement, options?: SpeccerOptionsInterface) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'measureTest',
  type: 'measure',
  position: 'left' | 'top' | 'right' | 'bottom',
  measure: {
    slim: [false | true],
    height: [false | true],
    width: [false | true]
  }
};
await create(element, options);
```

## Slim Measure

![Image of slim option for measure](https://raw.githubusercontent.com/phun-ky/speccer/refs/heads/main/public/speccer-measure-right-light.png)

Use a slim style:

::: code-group

```html [index.html]
<div data-speccer="measure slim height left" class="…"></div>
```

```typescript [main.ts]
import { measure } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { create } = measure as {
  create: (target: HTMLElement, options?: SpeccerOptionsInterface) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'measureTest',
  type: 'measure',
  position: 'left',
  measure: {
    slim: true,
    height: true
  }
};
await create(element, options);
```

:::

This will give a slimmer look and feel.

## Subtle Slim Measure

Use a subtle style for the slim option, uses a dashed line instead of a solid
line:

::: code-group

```html [index.html]
<div data-speccer="measure slim height left subtle" class="…"></div>
```

```typescript [main.ts]
import { measure } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { create } = measure as {
  create: (target: HTMLElement, options?: SpeccerOptionsInterface) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'measureTest',
  position: 'left',
  type: 'measure',
  measure: {
    slim: true,
    subtle: true
  }
};
await create(element, options);
```

:::

This will give a dashed border.
