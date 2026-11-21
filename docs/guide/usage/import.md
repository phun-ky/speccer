# Import

Import and run the required functions:

::: code-group

```ts [esm.ts]
import '@phun-ky/speccer/dist/speccer.min.css';
import speccer from '@phun-ky/speccer';

// do stuff
speccer();
```

```js [cjs.js]
// CSS through your bundler's CSS loader
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

  // Pin the elements in each pin-area
  for (const area of document.querySelectorAll('[data-speccer="pin-area"]')) {
    pin.pinElements(area);
  }
</script>
```

:::

::: warning CommonJS is deprecated

The CommonJS build (`require('@phun-ky/speccer')`) is removed in 12.0, see
[#571](https://github.com/phun-ky/speccer/issues/571). Node 22.12 and newer can
`require()` the ES module instead. Jest in CommonJS mode needs ESM support or a
transform for speccer.

:::

## Types

Types can be found in `@phun-ky/speccer/dist/speccer.d.ts`.
