[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / config/browser

# config/browser

Contains the helper functions to activate SPECCER via a script tag, based on attributes:

> [!NOTE]
> If the activation method is dom or instant, a resize feature is activated, making sure everything is re-rendered on resize. for manual or lazy loading, you are responsible to handle resize yourself.

## Default implementation
```html
<script src="../speccer.js"</script>
```

If no attribute is applied, it will default to `data-dom`, as in, it will initialize when `DOMContentLoaded` is fired.

## Manual initiation
```html
<script src="../speccer.js" data-manual</script>
```

Makes `window.speccer()` available to be used when you feel like it

## Initiate immediately
```html
<script src="../speccer.js" data-instant></script>
```

fires off `speccer()` right away

## Initiate when dom ready
```html
<script src="../speccer.js" data-dom></script>
```

Waits for `DOMContentLoaded`

## Initiate with lazy loading
```html
<script src="../speccer.js" data-lazy></script>
```

Lazy loads `speccer()` per specced element

## Index

### Functions

- [activate](functions/activate.md)
- [dom](functions/dom.md)
- [lazy](functions/lazy.md)
- [manual](functions/manual.md)
