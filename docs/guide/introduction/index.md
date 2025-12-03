# Getting Started

[[toc]]

## See it in action online

You can see it in action at [CodePen](https://codepen.io/phun-ky/full/OJejexN).

## Installation

You do not have to install **SPECCER** to use it, you can use it via
[UNPKG](https://unpkg.com/) or put it directly in your own files for more
control. See the
[example under `script-module.html`](/guide/usage/import#import) or
[usage with `script`-tag](/guide/usage/script).

::: tip

**SPECCER** is both an ESM package and a UMD package. It can be used with
`import`, `required` and directly in a browser.

:::

### Prerequisites for package install

- [Node.js](https://nodejs.org/) version 22.9.0 or higher
- npm version 11.0.0 or higher

To use it as a dependency, install it with:

::: code-group

```shell [npm]
npm i --save @phun-ky/speccer
```

```shell [yarn]
yarn add @phun-ky/speccer
```

:::

## Quick Usage

::: warning

This approach requires the usage of the `data-speccer="*"` attributes in your
generated HTML. If you want more control, follow
[the approach here](/guide/tutorials/add-pins-on-click).

:::

Mark the elements in the html that you want to use **SPECCER** width, like:

::: tip

The properties in brackets ( `[]` ) means that it is optional!

:::

::: code-group

```html [pin]
<div data-speccer="pin-area">
  <div
    data-speccer="pin [bracket [curly] |enclose] [left|right|top|bottom]"
    class="…"
  ></div>
</div>
```

```html [spacing]
<div data-speccer="spacing [padding|margin] [bound]" class="…"></div>
```

```html [measure]
<div
  data-speccer="measure [height left|right] | [width top|bottom]"
  class="…"
></div>
```

```html [typography]
<p data-speccer="typography syntax right" class="…">Some text</p>
```

```html [mark]
<div data-speccer="mark" …>…</div>
```

```html [grid]
<div data-speccer="grid [rows|columns]" …>…</div>
```

```html [a11y]
<div
  data-speccer="a11y [shortcuts|tabstops|landmark|headings|autocomplete]"
  class="…"
>
  …
</div>
```

:::

### Script

If the elements are in the DOM when the scrip tag loads, you're good to go. If
you have used `data-manual`, we have a global variable available to initiate
**SPECCER**:

```html [index.html]
<script>
  // exposed by the UMD build when using data-manual
  window.speccer();
</script>
```

### Import

If you import it, you are in full control on when to call `speccer`:

```typescript [main.ts]
import '@phun-ky/speccer/dist/speccer.min.css';
import speccer from '@phun-ky/speccer';

// do stuff
speccer();
```

## SVG

If any SVG options are used, you need to add the following svg into your
document:

```html
<svg
  class="ph-speccer"
  viewBox="0 0"
  id="ph-speccer-svg"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    class="ph-speccer path original"
    id="ph-speccer-path"
    fill="none"
    stroke-width="1"
    stroke="currentColor"
  />
</svg>
```
