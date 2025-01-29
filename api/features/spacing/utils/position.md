<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/spacing/utils/position

# features/spacing/utils/position

> Last updated 2025-01-29T08:54:31.598Z

## Table of Contents

- [Functions](#functions)
  - [position()](#position)

## Functions

### position()

```ts
function position(
  property,
  value,
  targetElement,
  options?
): Promise<undefined | PositionUnitPropertiesType>;
```

Defined in: [src/features/spacing/utils/position.ts:21](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/utils/position.ts#L21)

Set the position and dimensions of a spacing element relative to a target element.

#### Parameters

| Parameter       | Type                                                                           | Description                                                      |
| --------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `property`      | `string`                                                                       | The CSS property to set (e.g., 'marginTop', 'marginLeft', etc.). |
| `value`         | `number`                                                                       | The value of the CSS property.                                   |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)        | The target element.                                              |
| `options`?      | [`SpeccerOptionsInterface`](../../../types/speccer.md#specceroptionsinterface) | Options.                                                         |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
\| `undefined`
\| [`PositionUnitPropertiesType`](../../../types/position.md#positionunitpropertiestype)>

- A promise that resolves after setting the position and dimensions.

#### Example

```ts
const targetElement = document.getElementById('target');
position('marginTop', 20, targetElement);
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
