# Script

[[toc]]

## Usage

### Own files

Place these `script` and `link` tags in your web page:

```html [index.html]
<!-- Place this anywhere -->
<link rel="stylesheet" href="../path/to/speccer.min.css" />
<script data-manual src="../path/to/speccer.js"></script>

<script>
  // exposed by the UMD build when using data-manual
  window.speccer();
</script>
```

### Or with a CDN

```html [index.html]
<link
  rel="stylesheet"
  href="https://unpkg.com/@phun-ky/speccer/dist/speccer.min.css"
/>
<script
  data-manual
  src="https://unpkg.com/@phun-ky/speccer/dist/speccer.js"
></script>

<script>
  // exposed by the UMD build when using data-manual
  window.speccer();
</script>
```

::: warning Important

If any SVG options are used, remember to add
[the required `svg` element](/guide/introduction/#svg) to the document.

:::

## Modes

If you're using the script tag and have the marked elements ready (see below),
you do not need to do anything, but if you want to control **SPECCER** a bit
more, you have some options. Apply one of these attributes to the script element
for different types of initialization:

```html [index.html]
<script
  src="https://unpkg.com/@phun-ky/speccer/dist/speccer.js"
  data-[manual|instant|dom|lazy]
></script>
```

| Tag            | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `data-manual`  | Makes `window.speccer()` available to be used when you feel like it |
| `data-instant` | fires off `speccer()` right away                                    |
| `data-dom`     | Waits for `DOMContentLoaded`                                        |
| `data-lazy`    | Lazy loads `speccer()` per specced element                          |

If no attribute is applied, it will default to `data-dom`, as in, it will
initialize when `DOMContentLoaded` is fired.
