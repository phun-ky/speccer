# Import

Import and run the required functions:

::: code-group

```ts [import.ts]
import '@phun-ky/speccer/dist/speccer.min.css';
import speccer from '@phun-ky/speccer';

// do stuff
speccer();
```

```js [common.js]
require('@phun-ky/speccer/dist/speccer.min.css');
const mod = require('@phun-ky/speccer');
const speccer = mod.default || mod;

speccer();
```

:::

## Types

Types can be found in `@phun-ky/speccer/dist/speccer.d.ts`.
