<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / config/browser

# config/browser

> Last updated 2024-08-30T19:21:42.299Z

Contains the helper functions to activate SPECCER via a script tag, based on attributes:

> \[!NOTE]
> If the activation method is dom or instant, a resize feature is activated, making sure everything is re-rendered on resize. for manual or lazy loading, you are responsible to handle resize yourself.

> \[!NOTE]
> Remember to add the CSS file!:

> ```html
> <link rel="stylesheet" href="../path/to/speccer.min.css" />
> ```

## Table of Contents

- [Default implementation](#default-implementation)
- [Manual initiation](#manual-initiation)
- [Initiate immediately](#initiate-immediately)
- [Initiate when dom ready](#initiate-when-dom-ready)
- [Initiate with lazy loading](#initiate-with-lazy-loading)
- [Functions](#functions)
  - [activate()](#activate)
  - [dom()](#dom)
  - [lazy()](#lazy)
  - [manual()](#manual)

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

## Functions

### activate()

```ts
function activate(speccer): void;
```

A function to activate speccer based on script attributes.

#### Parameters

| Parameter | Type                                                             | Description                      |
| --------- | ---------------------------------------------------------------- | -------------------------------- |
| `speccer` | [`SpeccerFunctionType`](../types/speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

#### Example

```ts
// Usage example:
// activate(mySpeccer);
```

#### Defined in

[config/browser.ts:217](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L217)

---

### dom()

```ts
function dom(speccer): void;
```

A function to initialize speccer when the DOM is ready.

#### Parameters

| Parameter | Type                                                             | Description                      |
| --------- | ---------------------------------------------------------------- | -------------------------------- |
| `speccer` | [`SpeccerFunctionType`](../types/speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

#### Example

```ts
// Usage example:
// dom(mySpeccer);
```

#### Defined in

[config/browser.ts:81](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L81)

---

### lazy()

```ts
function lazy(): void;
```

A function to initialize lazy speccer functionality.

#### Returns

`void`

#### Example

```ts
// Usage example:
// lazy();
```

#### Defined in

[config/browser.ts:99](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L99)

---

### manual()

```ts
function manual(speccer): void;
```

A function to manually activate speccer.

#### Parameters

| Parameter | Type                                                             | Description                      |
| --------- | ---------------------------------------------------------------- | -------------------------------- |
| `speccer` | [`SpeccerFunctionType`](../types/speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

#### Example

```ts
// Usage example:
// manual(mySpeccer);
```

#### Defined in

[config/browser.ts:202](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L202)

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
