[@phun-ky/speccer](../README.md) / utils/css

# Module: utils/css

## Functions

### getClassNameFromCSSProperty

▸ **getClassNameFromCSSProperty**(`property`): `string`

Converts a CSS property name with "Top", "Right", "Bottom", or "Left" into a class name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | The CSS property name. |

#### Returns

`string`

- The corresponding class name.

**`Example`**

```ts
// Convert a CSS property name to a class name
const className = getClassNameFromCSSProperty("marginTop");
console.log(className); // Example output: "margin top"
```

#### Defined in

[utils/css.ts:63](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L63)

___

### getNumberValue

▸ **getNumberValue**(`value`): `number`

Parses a string value into an integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The string value to parse. |

#### Returns

`number`

- The parsed integer value.

**`Example`**

```ts
// Parse a string value into an integer
const intValue = getNumberValue("42");
console.log(intValue); // Example output: 42
```

#### Defined in

[utils/css.ts:26](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L26)

___

### getSpacing

▸ **getSpacing**(`style`): [`SpacingCSSPropertiesType`](types_css.md#spacingcsspropertiestype)

Extracts spacing-related CSS properties from a style object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | [`SpacingCSSPropertiesType`](types_css.md#spacingcsspropertiestype) | The style object. |

#### Returns

[`SpacingCSSPropertiesType`](types_css.md#spacingcsspropertiestype)

- The extracted spacing-related properties.

**`Example`**

```ts
// Extract spacing-related properties from a style object
const spacing = getSpacing({
  marginTop: "10px",
  marginLeft: "20px",
});
console.log(spacing); // Example output: { marginTop: "10px", marginLeft: "20px" }
```

#### Defined in

[utils/css.ts:93](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L93)

___

### getTypography

▸ **getTypography**(`style`): [`TypographyCSSPropertiesType`](types_css.md#typographycsspropertiestype)

Extracts typography-related CSS properties from a style object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | [`TypographyCSSPropertiesType`](types_css.md#typographycsspropertiestype) | The style object. |

#### Returns

[`TypographyCSSPropertiesType`](types_css.md#typographycsspropertiestype)

- The extracted typography-related properties.

**`Example`**

```ts
// Extract typography-related properties from a style object
const typography = getTypography({
  fontSize: "16px",
  fontWeight: "bold",
});
console.log(typography); // Example output: { fontSize: "16px", fontWeight: "bold" }
```

#### Defined in

[utils/css.ts:135](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L135)

___

### lineWidth

▸ **lineWidth**(`el`): `number`

Retrieves the value of a custom CSS property "--ph-speccer-line-width" from an element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | The HTML element. |

#### Returns

`number`

- The parsed value of the CSS property or a default value.

**`Example`**

```ts
// Get the value of a custom CSS property from an element
const value = lineWidth(document.body);
console.log(value); // Example output: 1.5
```

#### Defined in

[utils/css.ts:208](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L208)

___

### measureSize

▸ **measureSize**(`el`): `number`

Retrieves the value of a custom CSS property "--ph-speccer-measure-size" from an element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | The HTML element. |

#### Returns

`number`

- The parsed value of the CSS property or a default value.

**`Example`**

```ts
// Get the value of a custom CSS property from an element
const value = measureSize(document.body);
console.log(value); // Example output: 20
```

#### Defined in

[utils/css.ts:190](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L190)

___

### normalizeNumberValue

▸ **normalizeNumberValue**(`value`): `number`

Normalizes a string or number value to ensure it's a valid number.
If the value is within the range [0, 1] or [-1, 0), it's normalized to 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` | The value to normalize. |

#### Returns

`number`

- The normalized number value.

**`Example`**

```ts
// Normalize a value to ensure it's a valid number
const normalizedValue = normalizeNumberValue("0.5");
console.log(normalizedValue); // Example output: 0.5
```

#### Defined in

[utils/css.ts:42](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L42)

___

### pinSpace

▸ **pinSpace**(`el`): `number`

Retrieves the value of a custom CSS property "--ph-speccer-pin-space" from an element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | The HTML element. |

#### Returns

`number`

- The parsed value of the CSS property or a default value.

**`Example`**

```ts
// Get the value of a custom CSS property from an element
const value = pinSpace(document.body);
console.log(value); // Example output: 10
```

#### Defined in

[utils/css.ts:172](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L172)
