# Vue

**SPECCER** has no dependencies, so it works in any Vue 3 app. Run it after the
component has mounted, run it again when the annotated content changes, and
remove the annotations when the component unmounts.

## Component

```vue [SpeccedButton.vue]
<script setup>
import { onBeforeUnmount, onMounted, onUpdated } from 'vue';
import speccer, { removeSpeccer } from '@phun-ky/speccer';
import '@phun-ky/speccer/dist/speccer.min.css';

defineProps({ label: { type: String, default: 'Save' } });

let timeout;

// Redraw when the window is resized, at most every 300 ms
const onResize = () => {
  clearTimeout(timeout);
  timeout = setTimeout(speccer, 300);
};

onMounted(() => {
  speccer();
  window.addEventListener('resize', onResize);
});

// Runs after `label`, or anything else in the template, changes
onUpdated(() => speccer());

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
  clearTimeout(timeout);

  // The annotations are added to <body>, not inside the component
  removeSpeccer();
});
</script>

<template>
  <div data-speccer="pin-area">
    <button data-speccer="pin bracket top">{{ label }}</button>
  </div>
</template>
```

- **Import the CSS once**, here or in your app's entry file.
- **`speccer()` draws every annotation on the page**, so call it from one
  component, or from the layout that holds the annotated components.
- **Lines and curly brackets** need
  [the `svg` element](/guide/introduction/#svg), for example in `index.html` or
  your layout.
- **`removeSpeccer()`** on unmount removes every annotation on the page, stops
  draws that are still in progress, and keeps the `svg` element. It needs
  speccer 11.5.0 or newer.

## Server-side rendering

With Nuxt or another server-side renderer, importing speccer is safe, and
`onMounted`, `onUpdated` and `onBeforeUnmount` only run in the browser, so the
component works as it is.

## Lazy loading

For long pages, call `modes.lazy()` instead of `speccer()`, and
`modes.rerenderLazy()` on resize. See
[lazy loading](/guide/tutorials/lazy-loading).

If something doesn't look right, see [troubleshooting](/guide/troubleshooting).
