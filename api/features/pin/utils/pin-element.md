<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/pin/utils/pin-element

# features/pin/utils/pin-element

> Last updated 2024-08-19T13:10:31.107Z

## Functions

### pinElement()

```ts
function pinElement(
  targetElement,
  symbol,
  parentElement,
  areas?
): Promise<string | void>;
```

Create and style the pin element as needed.

This function appends a new pin element to the document body based on the `data-speccer="pin"` attribute
of the target element. It handles different styles, such as curly brackets or lines, based on the pin type.

#### Parameters

| Parameter       | Type          | Default value | Description                                                                        |
| --------------- | ------------- | ------------- | ---------------------------------------------------------------------------------- |
| `targetElement` | `HTMLElement` | `undefined`   | The target element that contains the pin data.                                     |
| `symbol`        | `string`      | `undefined`   | The symbol to use.                                                                 |
| `parentElement` | `HTMLElement` | `undefined`   | The parent element                                                                 |
| `areas`?        | `string`      | `''`          | Optional areas to use if not \[data-speccer] is set as an attribute on the element |

#### Returns

`Promise`\<`string` | `void`>

A promise that resolves to the id of the pin element when the process is completed, or `void` if required input is invalid.

#### Example

```ts
const targetElement = document.getElementById('target');
const symbol = 0;
pinElement(targetElement, symbol).then(() => {
  console.log('process completed');
});
```

#### Defined in

[features/pin/utils/pin-element.ts:41](https://github.com/phun-ky/speccer/blob/main/src/features/pin/utils/pin-element.ts#L41)

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
