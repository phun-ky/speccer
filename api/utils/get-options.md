<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/get-options

# utils/get-options

> Last updated 2025-06-10T05:34:41.897Z

## Functions

### getOptions()

```ts
function getOptions(
  areaString,
  targetStyle,
  customOptions?
): SpeccerOptionsInterface;
```

Defined in:
[src/utils/get-options/index.ts:50](https://github.com/phun-ky/speccer/blob/main/src/utils/get-options/index.ts#L50)

Generates Speccer options based on the provided area string and target style.

This function determines the type of feature (pin, measure, typography, grid, or
spacing) and assigns the relevant properties accordingly. It merges custom
options if provided.

#### Parameters

| Parameter        | Type                                                                                                                                                                              | Description                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `areaString`     | `string`                                                                                                                                                                          | The string defining the area type.            |
| `targetStyle`    | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)> | The computed style of the target element.     |
| `customOptions?` | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface)                                                                                                          | Optional custom options to override defaults. |

#### Returns

[`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface)

The generated Speccer options object.

#### Example

```ts
const areaString = 'pin bracket subtle';
const options = getOptions(areaString, element.style);
console.log(options);
// Output: {
//   slug: 'pinBracketSubtle',
//   position: { left: true, right: false, top: false, bottom: false },
//   type: 'pin',
//   pin: { bracket: true, enclose: false, subtle: true, ... }
// }
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
