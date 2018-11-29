# speccer

> A script to show specifications on html elements in your styleguide

Speccer was created to make it easier to document components in a style guide.

    $ npm i speccer

See demo here: https://codepen.io/phun-ky/pen/xaOrYX

![Image of speccer](./speccer.png)

## Usage

Place these `script` and `link` tags in your web page:

```html
<link rel="stylesheet" href="../path/to/speccer.css">
<script src="../path/to/speccer.js"></script>
```

And then follow the steps below to display the specifications you want :)

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
  <div data-anatomy="outline [left|right|top|bottom]" class="..."></div>
</div>
```

This will place a pin to the outline of the element. Default is `top`.
