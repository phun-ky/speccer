# Script

## Own files

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

## Or with a CDN

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
