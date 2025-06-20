<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../README.md) / utils/get-options/utils

# utils/get-options/utils

> Last updated 2025-06-17T08:01:02.411Z

## Functions

### getFeatureBasedOnArea()

```ts
function getFeatureBasedOnArea(areaString, targetStyle): SpeccerFeatureType;
```

Defined in:
[src/utils/get-options/utils/index.ts:32](https://github.com/phun-ky/speccer/blob/main/src/utils/get-options/utils/index.ts#L32)

Determines the Speccer feature type based on the given area string and target
element.

#### Parameters

| Parameter     | Type                                                                                                                                                                              | Description                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `areaString`  | `string`                                                                                                                                                                          | The string representing different area types. |
| `targetStyle` | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)> | The target HTML element being evaluated.      |

#### Returns

[`SpeccerFeatureType`](../../types/speccer.md#speccerfeaturetype)

The determined Speccer feature type.

#### Example

```ts
const feature = getFeatureBasedOnArea(
  'left right pin',
  document.getElementById('myElement')
);
console.log(feature); // Output: 'pin'
```

---

### getGridToggleValue()

```ts
function getGridToggleValue(areaString): 'columns' | 'rows' | 'both';
```

Defined in:
[src/utils/get-options/utils/index.ts:95](https://github.com/phun-ky/speccer/blob/main/src/utils/get-options/utils/index.ts#L95)

Determines the grid toggle value based on the provided area string.

This function checks whether `'columns'` or `'rows'` are present in the area
string and returns the respective toggle value. Defaults to `'both'` if neither
is found.

#### Parameters

| Parameter    | Type     | Description                        |
| ------------ | -------- | ---------------------------------- |
| `areaString` | `string` | The string defining the area type. |

#### Returns

`"columns"` | `"rows"` | `"both"`

The grid toggle value.

#### Example

```ts
console.log(getGridToggleValue('grid-columns')); // Output: 'columns'
console.log(getGridToggleValue('grid-rows')); // Output: 'rows'
console.log(getGridToggleValue('grid')); // Output: 'both'
```

---

### getPositionBasedOnArea()

```ts
function getPositionBasedOnArea(areaString): SpeccerPositionType;
```

Defined in:
[src/utils/get-options/utils/index.ts:67](https://github.com/phun-ky/speccer/blob/main/src/utils/get-options/utils/index.ts#L67)

Determines the position based on the provided area string.

This function checks the area string and assigns the appropriate position.
Defaults to `'top'` if no other position is found.

#### Parameters

| Parameter    | Type     | Description                        |
| ------------ | -------- | ---------------------------------- |
| `areaString` | `string` | The string defining the area type. |

#### Returns

[`SpeccerPositionType`](../../types/speccer.md#speccerpositiontype)

The determined position (`'left' | 'right' | 'bottom' | 'top'`).

#### Example

```ts
console.log(getPositionBasedOnArea('left-area')); // Output: 'left'
console.log(getPositionBasedOnArea('right-area')); // Output: 'right'
console.log(getPositionBasedOnArea('unknown-area')); // Output: 'top'
```

---

### getSpacingToggleValue()

```ts
function getSpacingToggleValue(areaString): 'both' | 'margin' | 'padding';
```

Defined in:
[src/utils/get-options/utils/index.ts:119](https://github.com/phun-ky/speccer/blob/main/src/utils/get-options/utils/index.ts#L119)

Determines the spacing toggle value based on the provided area string.

This function checks whether `'margin'` or `'padding'` are present in the area
string and returns the respective toggle value. Defaults to `'both'` if neither
is found.

#### Parameters

| Parameter    | Type     | Description                        |
| ------------ | -------- | ---------------------------------- |
| `areaString` | `string` | The string defining the area type. |

#### Returns

`"both"` | `"margin"` | `"padding"`

The spacing toggle value.

#### Example

```ts
console.log(getSpacingToggleValue('spacing-margin')); // Output: 'margin'
console.log(getSpacingToggleValue('spacing-padding')); // Output: 'padding'
console.log(getSpacingToggleValue('spacing')); // Output: 'both'
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
