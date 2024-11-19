<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/get-options

# utils/get-options

> Last updated 2024-11-19T19:54:48.979Z

## Functions

### getOptions()

```ts
function getOptions(
  areaString,
  targetStyle,
  customOptions?
): SpeccerOptionsInterface;
```

Generates Speccer options based on the target element and the specified area string.

#### Parameters

| Parameter        | Type                                                                                    | Description                                   |
| ---------------- | --------------------------------------------------------------------------------------- | --------------------------------------------- |
| `areaString`     | `string`                                                                                | The string representing different area types. |
| `targetStyle`    | [`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration) | -                                             |
| `customOptions`? | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface)                | Custom options                                |

#### Returns

[`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface)

The generated Speccer options.

#### Example

```ts
const options = getOptions(
  document.getElementById('myElement'),
  'left right pin'
);
console.log(options);
// Output: { position: { left: true, right: true, top: false, bottom: false }, type: 'pin', pin: { bracket: false, enclose: false, subtle: false, parent: false, text: false, useSVGLine: false, useCurlyBrackets: false } }
```

#### Defined in

[utils/get-options.ts:101](https://github.com/phun-ky/speccer/blob/main/src/utils/get-options.ts#L101)

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
