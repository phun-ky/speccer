[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/css](../README.md) / getSpacing

# Function: getSpacing()

> **getSpacing**(`style`): [`SpacingCSSPropertiesType`](../../../types/css/type-aliases/SpacingCSSPropertiesType.md)

Extracts spacing-related CSS properties from a style object.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `style` | [`SpacingCSSPropertiesType`](../../../types/css/type-aliases/SpacingCSSPropertiesType.md) | The style object. |

## Returns

[`SpacingCSSPropertiesType`](../../../types/css/type-aliases/SpacingCSSPropertiesType.md)

- The extracted spacing-related properties.

## Example

```ts
// Extract spacing-related properties from a style object
const spacing = getSpacing({
  marginTop: "10px",
  marginLeft: "20px",
});
console.log(spacing); // Example output: { marginTop: "10px", marginLeft: "20px" }
```

## Defined in

[utils/css.ts:91](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L91)
