<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/pin/utils/get-content-for-pin

# features/pin/utils/get-content-for-pin

> Last updated 2025-02-11T10:43:47.942Z

## Table of Contents

- [Functions](#functions)
  - [getContentForPin()](#getcontentforpin)

## Functions

### getContentForPin()

```ts
function getContentForPin(symbol, targetElement, options): string;
```

Defined in: [src/features/pin/utils/get-content-for-pin.ts:21](https://github.com/phun-ky/speccer/blob/main/src/features/pin/utils/get-content-for-pin.ts#L21)

Generates the content for a pin element based on the provided symbol, target element, and options.

#### Parameters

| Parameter       | Type                                                                           | Description                                                      |
| --------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `symbol`        | `string`                                                                       | The default symbol to use if no text or description is provided. |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)        | The HTML element for which the content is being generated.       |
| `options`       | [`SpeccerOptionsInterface`](../../../types/speccer.md#specceroptionsinterface) | The options that define how the content should be generated.     |

#### Returns

`string`

The generated content for the pin element.

#### Example

```ts
const symbol = "★";
const targetElement = document.getElementById("myElement");
const options = { pin: { text: true } };
const content = getContentForPin(symbol, targetElement, options);
console.log(content);
// Output: '<span class="ph-speccer title">Title Text</span>'
```

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
