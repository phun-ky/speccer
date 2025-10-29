# React

Since **SPECCER** is zero-dependency and made with vanilla, it is easily useable
with other libraries or frameworks, like React!

## useEffect

::: warning

This approach requires the usage of the `data-speccer="*"` attributes. If you
want more control, follow
[the approach here](/guide/tutorials/add-pins-on-click).

:::

If you use React, you can use an effect like this:

```javascript [Component.jsx]
import React, { useEffect } from 'react';

import debounce from './lib/debounce';
import '@phun-ky/speccer/dist/speccer.min.css';

const Component = () => {
  let speccerEventFunc;

  useEffect(async () => {
    const { default: speccer } = await import('@phun-ky/speccer');

    speccer();

    speccerEventFunc = debounce(function () {
      speccer();
    }, 300);

    window.addEventListener('resize', speccerEventFunc);

    return () => {
      window.removeEventListener('resize', speccerEventFunc);
    };
  }, []);

  return <div />;
};

export default Component;
```

Or a hook like this:

## Custom Hook

```typescript [useSpeccer.ts]
import { useEffect } from 'react';

import '@phun-ky/speccer/dist/speccer.min.css';
import debounce from './lib/debounce';

const useSpeccer = () => {
  useEffect(() => {
    let speccerEventFunc: () => void;

    const loadSpeccer = async () => {
      const { default: speccer } = await import('@phun-ky/speccer');

      speccer();

      speccerEventFunc = debounce(() => {
        speccer();
      }, 300);

      window.addEventListener('resize', speccerEventFunc);
    };

    loadSpeccer();

    return () => {
      if (speccerEventFunc) {
        window.removeEventListener('resize', speccerEventFunc);
      }
    };
  }, []);
};
```

### Usage

```typescript [MyComponent.tsx]
import { useSpeccer } from './hooks/useSpeccer';

export const MyComponent = () => {
  …
  useSpeccer();
  …
  return <div data-speccer="pin bracket top">…</div>;
};
```
