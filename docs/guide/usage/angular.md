# Angular

**SPECCER** has no dependencies, so it works in any Angular app. Run it after
the component has rendered, run it again when the annotated content changes, and
remove the annotations when the component is destroyed.

## Component

```typescript [specced-button.component.ts]
import {
  Component,
  DestroyRef,
  afterNextRender,
  afterRenderEffect,
  inject,
  input
} from '@angular/core';
import speccer, { removeSpeccer } from '@phun-ky/speccer';

@Component({
  selector: 'app-specced-button',
  template: `
    <div data-speccer="pin-area">
      <button data-speccer="pin bracket top">{{ label() }}</button>
    </div>
  `
})
export class SpeccedButtonComponent {
  label = input('Save');

  #destroyRef = inject(DestroyRef);

  constructor() {
    // Runs after the component has rendered, and again after `label` changes
    afterRenderEffect(() => {
      this.label();
      speccer();
    });

    // Runs once, after the first render
    afterNextRender(() => {
      let timeout: ReturnType<typeof setTimeout>;

      // Redraw when the window is resized, at most every 300 ms
      const onResize = () => {
        clearTimeout(timeout);
        timeout = setTimeout(speccer, 300);
      };

      window.addEventListener('resize', onResize);

      this.#destroyRef.onDestroy(() => {
        window.removeEventListener('resize', onResize);
        clearTimeout(timeout);

        // The annotations are added to <body>, not inside the component
        removeSpeccer();
      });
    });
  }
}
```

Add the CSS once, to `styles` in `angular.json`:

```json [angular.json]
"styles": [
  "src/styles.css",
  "node_modules/@phun-ky/speccer/dist/speccer.min.css"
]
```

- **`afterRenderEffect` re-runs when the signals it reads change.** Read the
  signals that change the annotated content in it, like `label` here.
- **`afterRenderEffect` and `afterNextRender` instead of `ngAfterViewInit` and
  `ngOnDestroy`:** those also run during server-side rendering, where there is
  no `window`. The render hooks only run in the browser, and so does the cleanup
  registered in one.
- **`speccer()` draws every annotation on the page**, so call it from one
  component, or from the layout that holds the annotated components.
- **Lines and curly brackets** need
  [the `svg` element](/guide/introduction/#svg), for example in `index.html`.
- **`removeSpeccer()`** on destroy removes every annotation on the page, stops
  draws that are still in progress, and keeps the `svg` element. It needs
  speccer 11.5.0 or newer.

## Lazy loading

For long pages, call `modes.lazy()` instead of `speccer()`, and
`modes.rerenderLazy()` on resize. See
[lazy loading](/guide/tutorials/lazy-loading).

If something doesn't look right, see [troubleshooting](/guide/troubleshooting).
