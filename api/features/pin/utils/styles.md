<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/pin/utils/styles

# features/pin/utils/styles

> Last updated 2024-08-19T13:10:31.108Z

## Functions

### styles()

```ts
function styles(
  area,
  targetElement,
  pinElement,
  parentElement,
  options?
): Promise<SpeccerStylesReturnType>;
```

Get styles for pin elements based on the specified area and options.

#### Parameters

| Parameter       | Type                                                                    | Description              |
| --------------- | ----------------------------------------------------------------------- | ------------------------ |
| `area`          | `string`                                                                | The area description.    |
| `targetElement` | `HTMLElement`                                                           | The target element.      |
| `pinElement`    | `HTMLElement`                                                           | The pin element.         |
| `parentElement` | `HTMLElement`                                                           | The parent element.      |
| `options`?      | [`PinStylesOptionsType`](../../../types/bezier.md#pinstylesoptionstype) | Optional styles options. |

#### Returns

`Promise`\<[`SpeccerStylesReturnType`](../../../types/styles.md#speccerstylesreturntype)>

- The computed styles.

#### Example

```ts
const area = 'top-left';
const targetElement = document.getElementById('target');
const parentElement = document.getElementById('parent');
const pinElement = document.getElementById('pin');
const options = { isCurly: true };
const styles = await styles(
  area,
  targetElement,
  pinElement,
  parentElement,
  options
);
console.log(styles);
```

#### Defined in

[features/pin/utils/styles.ts:37](https://github.com/phun-ky/speccer/blob/main/src/features/pin/utils/styles.ts#L37)

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