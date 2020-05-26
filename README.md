# speccer

> A script to show specifications on html elements in your styleguide

Speccer was created to make it easier to document components in a style guide.

    $ npm i @phun-ky/speccer

See demo here: https://codepen.io/phun-ky/pen/xaOrYX

![Image of speccer](./speccer.png)

## Usage

Either import and run the required functions:

```javascript
import { anatomy, speccer, activateOnResize } from '@phun-ky/speccer/src/index.js';

// do stuff
anatomy();
```

Or place these `script` and `link` tags in your web page:

```html
<link rel="stylesheet" href="../path/to/speccer.css" />
<script src="../path/to/speccer.js"></script>
```

And then follow the steps below to display the specifications you want :)

**_NOTE_** The activateOnResize function is using a throttled event for the [Window: resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event), this might give you some issues in an SPA.

If you use React, you can use an effect like this:

```javascript
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import debounce from './lib/debounce';
import '@phun-ky/speccer/speccer.css';

const Component = () => {
  let speccerEventFunc;

  useEffect(() => {
    import('@phun-ky/speccer/src/index.js').then(speccerScript => {
      console.info('[@phun-ky/speccer]: Activated speccer ');

      const { anatomy, speccer } = speccerScript;
      anatomy();
      speccer();

      speccerEventFunc = debounce(function() {
        console.info('[@phun-ky/speccer]: Event resize triggered');
        speccer();
        anatomy();
      }, 300);

      window.addEventListener('resize', speccerEventFunc);
    });
  });

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', speccerEventFunc);
    };
  }, []);

  return <div />;
};

export default Component;
```

### Element spacing

![Image of speccer](./spacing.png)

In your component examples, use the following attribute:

```html
<div data-speccer class="..."></div>
```

This will display the element <em>and all of it's children</em> padding and margin.

### Element dimensions

![Image of speccer](./measure.png)

In your component examples, use the following attribute:

```html
<div data-speccer-measure="[height right|left] | [width top|bottom]" class="..."></div>
```

Where `height` and `width` comes with placement flags. Default for `height` is `left`, default for `width` is `top`.

### Highlight the anatomy of an element

![Image of speccer](./anatomy.png)

In your component examples, use the following attribute. Remember to use the `data-anatomy-section` as an attribute on a parent element to scope the marking.

```html
<div data-anatomy-section>
  <div data-anatomy="outline [full|enclose] [left|right|top|bottom]" class="..."></div>
</div>
```

This will place a pin to the outline of the element. Default is `top`.

## Advanced usage

If you want to control speccer a bit more, you have some options. Apply one of these attributes to the script element for different types of initialization:

```html
<script src="../speccer.js" data-<manual|instant|dom|lazy></script>
```

| Tag            | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| `data-manual`  | Makes `window.speccer` and `window.anatomy` available to be used when you feel like it |
| `data-instant` | fires off `anatomy()` and `speccer` right away                                         |
| `data-dom`     | Waits for `DOMContentLoaded`                                                           |
| `data-lazy`    | Lazy loads `anatomy()` and `speccer()` per specced element                             |

If no attribute is applied, it will default to `data-dom`, as in, it will initialize when `DOMContentLoaded` is fired.
