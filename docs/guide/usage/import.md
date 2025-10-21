# Import

Import and run the required functions:

::: code-group

```ts [esm.ts]
import '@phun-ky/speccer/dist/speccer.min.css';
import speccer from '@phun-ky/speccer';

// do stuff
speccer();
```

```js [umd.js]
require('@phun-ky/speccer/dist/speccer.min.css');
const mod = require('@phun-ky/speccer');
const speccer = mod.default || mod;

speccer();
```

```html [script-module.html]
<!-- Map the package name to the ESM URL -->
<script type="importmap">
  {
    "imports": {
      "@phun-ky/speccer": "https://esm.sh/@phun-ky/speccer"
    }
  }
</script>

<!-- Import default and call `speccer()` -->
<script type="module">
  import speccer from '@phun-ky/speccer';

  // Import default and call `speccer()`
  speccer();
</script>

<!-- Or import the feature you want -->
<script type="module">
  import { pin } from '@phun-ky/speccer';

  const { pinElement } = pin;

  pinElement();
</script>
```

:::

## Types

Types can be found in `@phun-ky/speccer/dist/speccer.d.ts`.
