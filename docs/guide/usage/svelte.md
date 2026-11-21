# Svelte

**SPECCER** has no dependencies, so it works in any Svelte 5 app. Run it after
the component has mounted, run it again when the annotated content changes, and
remove the annotations when the component is destroyed.

## Component

```svelte [SpeccedButton.svelte]
<script>
  import { onMount } from 'svelte';
  import speccer, { removeSpeccer } from '@phun-ky/speccer';
  import '@phun-ky/speccer/dist/speccer.min.css';

  let { label = 'Save' } = $props();

  // Runs after the component has mounted, and again after `label` changes
  $effect(() => {
    label;
    speccer();
  });

  onMount(() => {
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
  });
</script>

<div data-speccer="pin-area">
  <button data-speccer="pin bracket top">{label}</button>
</div>
```

- **Import the CSS once**, here or in your root layout.
- **`$effect` re-runs when the state it reads changes.** Read the state that
  changes the annotated content in it, like `label` here.
- **`speccer()` draws every annotation on the page**, so call it from one
  component, or from the layout that holds the annotated components.
- **Lines and curly brackets** need
  [the `svg` element](/guide/introduction/#svg), for example in `app.html` or
  your root layout.
- **`removeSpeccer()`** on destroy removes every annotation on the page, stops
  draws that are still in progress, and keeps the `svg` element. It needs
  speccer 11.5.0 or newer.

## Server-side rendering

With SvelteKit, importing speccer is safe, and `$effect` and `onMount` only run
in the browser, so the component works as it is.

## Lazy loading

For long pages, call `modes.lazy()` instead of `speccer()`, and
`modes.rerenderLazy()` on resize. See
[lazy loading](/guide/tutorials/lazy-loading).

If something doesn't look right, see [troubleshooting](/guide/troubleshooting).
