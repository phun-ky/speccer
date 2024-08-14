[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/css](../README.md) / getTypography

# Function: getTypography()

> **getTypography**(`style`): [`TypographyCSSPropertiesType`](../../../types/css/type-aliases/TypographyCSSPropertiesType.md)

Extracts typography-related CSS properties from a style object.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `style` | [`TypographyCSSPropertiesType`](../../../types/css/type-aliases/TypographyCSSPropertiesType.md) | The style object. |

## Returns

[`TypographyCSSPropertiesType`](../../../types/css/type-aliases/TypographyCSSPropertiesType.md)

- The extracted typography-related properties.

## Example

```ts
// Extract typography-related properties from a style object
const typography = getTypography({
  fontSize: "16px",
  fontWeight: "bold",
});
console.log(typography); // Example output: { fontSize: "16px", fontWeight: "bold" }
```

## Defined in

[utils/css.ts:133](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L133)
