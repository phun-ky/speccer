<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/typography/utils/position

# features/typography/utils/position

> Last updated 2025-02-11T10:43:47.944Z

## Table of Contents

- [Functions](#functions)
  - [position()](#position)

## Functions

### position()

```ts
function position(
  options,
  targetElement,
  speccerElement,
): Promise<{
  left: string;
  top: string;
}>;
```

Defined in: [src/features/typography/utils/position.ts:28](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/position.ts#L28)

Calculate the position for the speccer element relative to the target element.

#### Parameters

| Parameter        | Type                                                                           | Description                      |
| ---------------- | ------------------------------------------------------------------------------ | -------------------------------- |
| `options`        | [`SpeccerOptionsInterface`](../../../types/speccer.md#specceroptionsinterface) | Options.                         |
| `targetElement`  | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)        | The target element.              |
| `speccerElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)        | The speccer element to position. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{
`left`: `string`;
`top`: `string`;
}>

- A promise that resolves with the calculated position.

#### Example

```ts
const targetElement = document.getElementById('target');
const speccerElement = document.getElementById('speccer');
const options = {…};
const position = await position(options, targetElement, speccerElement);
console.log(position); // { left: '10px', top: '20px' }
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
