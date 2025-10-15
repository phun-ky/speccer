# Grid

![Screenshot of grid feature](/speccer-grid-full-light.png)

This feature allows you display the grid characteristics, for now only spacing,
of an element width `display: grid;`.

::: info

For more technical documentation, see the relevant documentation
[under the API-section](/api/variables/grid).

:::

## Usage

### Via `<script>`-tag

```html [index.html]
<script src="https://unpkg.com/@phun-ky/speccer/dist/speccer.js"></script>
<div data-speccer="grid" …>…</div>
```

### Programmatically

```typescript [main.ts]
import { grid } from '@phun-ky/speccer';

const { create } = grid;
const element = document.querySelector('.my-element');
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

::: tip

If you only want to display `rows` or `columns`, use this syntax (default is
both with `grid` only):

::: code-group

```html [via script-tag]
<div data-speccer="grid [rows|columns]" …>…</div>
```

```typescript [programmatically]
import { grid } from '@phun-ky/speccer';

const { create } = grid;
const element = document.querySelector('.my-element');
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

::: tip Feature options

For more control over the feature options, you can view the available
[settings in the reference section](/api/interfaces/SpeccerOptionsInterface#examples).

:::

![Screenshot of grid feature](/speccer-grid-full-dark.png)
