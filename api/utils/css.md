<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/css

# utils/css

> Last updated 2024-09-08T20:24:15.669Z

## Functions

### getClassNameFromCSSProperty()

```ts
function getClassNameFromCSSProperty(property): string;
```

Converts a CSS property name with "Top", "Right", "Bottom", or "Left" into a class name.

#### Parameters

| Parameter  | Type     | Description            |
| ---------- | -------- | ---------------------- |
| `property` | `string` | The CSS property name. |

#### Returns

`string`

- The corresponding class name.

#### Example

```ts
// Convert a CSS property name to a class name
const className = getClassNameFromCSSProperty('marginTop');
console.log(className); // Example output: "margin top"
```

#### Defined in

[utils/css.ts:64](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L64)

---

### getNumberValue()

```ts
function getNumberValue(value): number;
```

Parses a string value into an integer.

#### Parameters

| Parameter | Type     | Description                |
| --------- | -------- | -------------------------- |
| `value`   | `string` | The string value to parse. |

#### Returns

`number`

- The parsed integer value.

#### Example

```ts
// Parse a string value into an integer
const intValue = getNumberValue('42');
console.log(intValue); // Example output: 42
```

#### Defined in

[utils/css.ts:27](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L27)

---

### getSpacing()

```ts
function getSpacing(style, options?): SpacingCSSPropertiesType;
```

Extracts spacing-related CSS properties from a style object.

#### Parameters

| Parameter  | Type                                                                     | Description       |
| ---------- | ------------------------------------------------------------------------ | ----------------- |
| `style`    | [`SpacingCSSPropertiesType`](../types/css.md#spacingcsspropertiestype)   | The style object. |
| `options`? | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface) | Options           |

#### Returns

[`SpacingCSSPropertiesType`](../types/css.md#spacingcsspropertiestype)

- The extracted spacing-related properties.

#### Example

```ts
// Extract spacing-related properties from a style object
const spacing = getSpacing({
  marginTop: '10px',
  marginLeft: '20px'
});
console.log(spacing); // Example output: { marginTop: "10px", marginLeft: "20px" }
```

#### Defined in

[utils/css.ts:93](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L93)

---

### getTypography()

```ts
function getTypography(style): TypographyCSSPropertiesType;
```

Extracts typography-related CSS properties from a style object.

#### Parameters

| Parameter | Type                                                                         | Description       |
| --------- | ---------------------------------------------------------------------------- | ----------------- |
| `style`   | [`TypographyCSSPropertiesType`](../types/css.md#typographycsspropertiestype) | The style object. |

#### Returns

[`TypographyCSSPropertiesType`](../types/css.md#typographycsspropertiestype)

- The extracted typography-related properties.

#### Example

```ts
// Extract typography-related properties from a style object
const typography = getTypography({
  fontSize: '16px',
  fontWeight: 'bold'
});
console.log(typography); // Example output: { fontSize: "16px", fontWeight: "bold" }
```

#### Defined in

[utils/css.ts:154](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L154)

---

### lineWidth()

```ts
function lineWidth(el): number;
```

Retrieves the value of a custom CSS property "--ph-speccer-line-width" from an element.

#### Parameters

| Parameter | Type                                                                    | Description       |
| --------- | ----------------------------------------------------------------------- | ----------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The HTML element. |

#### Returns

`number`

- The parsed value of the CSS property or a default value.

#### Example

```ts
// Get the value of a custom CSS property from an element
const value = lineWidth(document.body);
console.log(value); // Example output: 1.5
```

#### Defined in

[utils/css.ts:227](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L227)

---

### measureSize()

```ts
function measureSize(el): number;
```

Retrieves the value of a custom CSS property "--ph-speccer-measure-size" from an element.

#### Parameters

| Parameter | Type                                                                    | Description       |
| --------- | ----------------------------------------------------------------------- | ----------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The HTML element. |

#### Returns

`number`

- The parsed value of the CSS property or a default value.

#### Example

```ts
// Get the value of a custom CSS property from an element
const value = measureSize(document.body);
console.log(value); // Example output: 20
```

#### Defined in

[utils/css.ts:209](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L209)

---

### normalizeNumberValue()

```ts
function normalizeNumberValue(value): number;
```

Normalizes a string or number value to ensure it's a valid number.
If the value is within the range \[0, 1] or \[-1, 0), it's normalized to 0.

#### Parameters

| Parameter | Type                 | Description             |
| --------- | -------------------- | ----------------------- |
| `value`   | `string` \| `number` | The value to normalize. |

#### Returns

`number`

- The normalized number value.

#### Example

```ts
// Normalize a value to ensure it's a valid number
const normalizedValue = normalizeNumberValue('0.5');
console.log(normalizedValue); // Example output: 0.5
```

#### Defined in

[utils/css.ts:43](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L43)

---

### pinSpace()

```ts
function pinSpace(el): number;
```

Retrieves the value of a custom CSS property "--ph-speccer-pin-space" from an element.

#### Parameters

| Parameter | Type                                                                    | Description       |
| --------- | ----------------------------------------------------------------------- | ----------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The HTML element. |

#### Returns

`number`

- The parsed value of the CSS property or a default value.

#### Example

```ts
// Get the value of a custom CSS property from an element
const value = pinSpace(document.body);
console.log(value); // Example output: 10
```

#### Defined in

[utils/css.ts:191](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L191)

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
