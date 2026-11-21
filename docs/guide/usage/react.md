# React

**SPECCER** has no dependencies, so it works in any React app. Run it after the
component has rendered, run it again when the annotated content changes, and
remove the annotations when the component unmounts.

## Component

```jsx [SpeccedButton.jsx]
import { useEffect } from 'react';
import speccer, { removeSpeccer } from '@phun-ky/speccer';
import '@phun-ky/speccer/dist/speccer.min.css';

export const SpeccedButton = ({ label = 'Save' }) => {
  // Runs after the component has rendered, and again after `label` changes
  useEffect(() => {
    speccer();
  }, [label]);

  // Runs once, after the first render
  useEffect(() => {
    let timeout;

    // Redraw when the window is resized, at most every 300 ms
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(speccer, 300);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timeout);

      // The annotations are added to <body>, not inside the component
      removeSpeccer();
    };
  }, []);

  return (
    <div data-speccer="pin-area">
      <button data-speccer="pin bracket top">{label}</button>
    </div>
  );
};
```

- **Import the CSS once**, here or in your app's entry file.
- **List the props and state that change the annotated content** in the first
  effect's dependencies, like `label` here.
- **Don't pass an `async` function to `useEffect`.** It returns a promise, so
  React never gets the cleanup function, and the listener and the annotations
  stay after the component unmounts.
- **`speccer()` draws every annotation on the page**, so call it from one
  component, or from the layout that holds the annotated components.
- **Lines and curly brackets** need
  [the `svg` element](/guide/introduction/#svg), for example in `index.html` or
  your root layout.
- **`removeSpeccer()`** on unmount removes every annotation on the page, stops
  draws that are still in progress, and keeps the `svg` element. It needs
  speccer 11.5.0 or newer.

## Server-side rendering

With Next.js or another server-side renderer, importing speccer is safe, and
effects only run in the browser, so the component works as it is. In the Next.js
App Router, add `'use client';` at the top of the file, as for any component
that uses effects.

## Lazy loading

For long pages, call `modes.lazy()` instead of `speccer()`, and
`modes.rerenderLazy()` on resize. See
[lazy loading](/guide/tutorials/lazy-loading).

If something doesn't look right, see [troubleshooting](/guide/troubleshooting).
