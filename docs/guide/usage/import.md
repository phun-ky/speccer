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

## Waiting for the draw

`speccer()` draws over a few animation frames. It returns a promise that settles
when every annotation is drawn, so you can wait for it, for example in a test or
before taking a screenshot:

```ts
await speccer();
```

The promise rejects if a feature fails to draw. Calling `speccer()` without
`await` works as before. This needs speccer 11.6.0 or newer.

## Types

Types can be found in `@phun-ky/speccer/dist/speccer.d.ts`.
