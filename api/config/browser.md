<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / config/browser

# config/browser

> Last updated 2024-08-14T10:16:53.354Z

Contains the helper functions to activate SPECCER via a script tag, based on attributes:

> [!NOTE]
> If the activation method is dom or instant, a resize feature is activated, making sure everything is re-rendered on resize. for manual or lazy loading, you are responsible to handle resize yourself.

> [!NOTE]
> Remember to add the CSS file!:
>
> ```html
> <link rel="stylesheet" href="../path/to/speccer.min.css" />
> ```

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

[config/browser.ts:155](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L155)

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

[config/browser.ts:68](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L68)

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

[config/browser.ts:86](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L86)

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

[config/browser.ts:140](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L140)

---

## Contributing

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

## Sponsor me

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

<p class="ph">
  This project created by
  <a rel="noopener noreferrer" target="_blank" class="ph" href="http://phun-ky.net" property="cc:attributionName">
    Alexander Vassbotn Røyne-Helgesen</a>
  is licensed under a
  <a rel="noopener noreferrer" target="_blank" class="ph" href="https://choosealicense.com/licenses/mit/">
    MIT License </a>.
</p>
