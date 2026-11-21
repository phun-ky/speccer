# Troubleshooting

The problems people run into most often, with their cause and fix. If yours
isn't here, search the [issues](https://github.com/phun-ky/speccer/issues) or
[ask a question](https://github.com/phun-ky/speccer/discussions/categories/q-a).

[[toc]]

## Lines and curly brackets are missing

The browser console shows:

```text
SPECCER: pins with lines, like text and parent pins, and curly brackets need the #ph-speccer-svg element in the document. The pins are drawn without lines.
```

Text pins, pins aligned to the parent container and curly brackets are drawn in
an SVG element that you add to the page. Add
[the `svg` element and its `path`](/guide/introduction/#svg). speccer needs both
`#ph-speccer-svg` and `#ph-speccer-path`.

If the lines disappear after a while, check that your own cleanup code doesn't
remove the SVG element. It has the `ph-speccer` class, so removing every
`.ph-speccer` element removes it too. See
[annotations are left after navigating](#annotations-are-left-after-navigating).

## Nothing is styled

The annotations are in the page, but unstyled and at the bottom of it instead of
next to their elements. The CSS file isn't loaded. Import it once:

```ts
import '@phun-ky/speccer/dist/speccer.min.css';
```

Or link it:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@phun-ky/speccer/dist/speccer.min.css"
/>
```

## Annotations are in the wrong place after the layout changes

Annotations are positioned when they are drawn, so they don't follow the element
when the layout changes afterwards.

- **The window is resized:** with the script tag's `data-dom`, `data-instant`
  and `data-lazy` modes, speccer re-renders on resize. With `data-manual`, or
  when you import speccer and call `speccer()` yourself, nothing happens on
  resize: call `speccer()` again from a debounced `resize` listener. With
  `modes.lazy()`, call `modes.rerenderLazy()` instead.
- **The content changes:** no mode notices content that changes after the
  annotations were drawn, such as text that loads later, a component that
  re-renders, or an element that is added. Call `speccer()` again when it
  changes. It removes the old annotations before drawing new ones.

## Annotations are left after navigating

In single page apps, the annotations stay on the page after the component they
belong to is gone, for example after navigating to another route. They are added
to `<body>`, not inside your component, so unmounting the component doesn't
remove them.

Remove them when the component unmounts:

```ts
for (const el of document.querySelectorAll('.ph-speccer.speccer')) {
  el.remove();
}
```

This removes every annotation, and SVG lines, but keeps the `#ph-speccer-svg`
element. A function in speccer that does this is planned for 12.0
([#485](https://github.com/phun-ky/speccer/issues/485)).

## `window is not defined` during server-side rendering

Importing speccer during server-side rendering, in Next.js, Nuxt, Astro,
SvelteKit and similar, threw `ReferenceError: window is not defined` before
11.4.4. Update to the latest 11.x. Importing is safe there now, but call
`speccer()` in the browser only, for example in an effect or after the component
has mounted, since it needs the page.

## Accessibility annotations are missing with lazy loading

With `data-lazy` or `modes.lazy()`, accessibility annotations are never drawn
([#480](https://github.com/phun-ky/speccer/issues/480)). Until that's fixed,
call `a11y()` yourself after the elements are in the page. It draws the
accessibility annotations for the whole page at once:

```ts
import { a11y, modes } from '@phun-ky/speccer';

modes.lazy();
a11y();
```
