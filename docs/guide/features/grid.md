# Grid

![Screenshot of grid feature](https://raw.githubusercontent.com/phun-ky/speccer/refs/heads/main/public/speccer-grid-full-light.png)

This feature allows you display the grid characteristics, for now only spacing,
of an element width `display: grid;`.

::: info

For more technical documentation, see the relevant documentation
[under the API-section](/api/variables/grid).

:::

## Usage

::: code-group

```html [index.html]
<div data-speccer="grid" …>…</div>
```

```typescript [main.ts]
import { grid } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { create } = grid as {
  create: (target: HTMLElement, options?: SpeccerOptionsInterface) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'gridTest',
  type: 'grid',
  grid: {
    toggle: 'both' | 'rows' | 'columns',
    both: false | true,
    rows: false | true,
    columns: false | true
  }
};
await create(element, options);
```

:::

::: tip

If you only want to display `rows` or `columns`, use this syntax (default is
both with `grid` only):

::: code-group

```html [index.html]
<div data-speccer="grid [rows|columns]" …>…</div>
```

```typescript [main.ts]
import { grid } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { create } = grid as {
  create: (target: HTMLElement, options?: SpeccerOptionsInterface) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'gridTest',
  type: 'grid',
  grid: {
    toggle: 'columns',
    both: false,
    rows: false,
    columns: true
  }
};
await create(element, options);
```

:::

![Screenshot of grid feature](https://raw.githubusercontent.com/phun-ky/speccer/refs/heads/main/public/speccer-grid-full-dark.png)
