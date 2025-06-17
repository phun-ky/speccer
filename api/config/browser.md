<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / config/browser

# config/browser

> Last updated 2025-06-17T07:00:21.381Z

Contains the helper functions to activate SPECCER via a script tag, based on
attributes:

> \[!NOTE] If the activation method is dom or instant, a resize feature is
> activated, making sure everything is re-rendered on resize. for manual or lazy
> loading, you are responsible to handle resize yourself.

> \[!NOTE] Remember to add the CSS file!:

> ```html
> <link rel="stylesheet" href="../path/to/speccer.min.css" />
> ```

## Default implementation

```html
<script src="../speccer.js"</script>
```

If no attribute is applied, it will default to `data-dom`, as in, it will
initialize when `DOMContentLoaded` is fired.

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

Defined in:
[src/config/browser.ts:219](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L219)

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

---

### dom()

```ts
function dom(speccer): void;
```

Defined in:
[src/config/browser.ts:83](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L83)

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

---

### lazy()

```ts
function lazy(): void;
```

Defined in:
[src/config/browser.ts:101](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L101)

A function to initialize lazy speccer functionality.

#### Returns

`void`

#### Example

```ts
// Usage example:
// lazy();
```

---

### manual()

```ts
function manual(speccer): void;
```

Defined in:
[src/config/browser.ts:204](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L204)

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

---

**Contributing**

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help
get rid of secondary activities and to enhance systems already in place, be it
documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to
maintain my projects, create new ones and contribute to the large community
we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net)
is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
