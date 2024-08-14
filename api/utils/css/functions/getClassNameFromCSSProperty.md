[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/css](../README.md) / getClassNameFromCSSProperty

# Function: getClassNameFromCSSProperty()

> **getClassNameFromCSSProperty**(`property`): `string`

Converts a CSS property name with "Top", "Right", "Bottom", or "Left" into a class name.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `property` | `string` | The CSS property name. |

## Returns

`string`

- The corresponding class name.

## Example

```ts
// Convert a CSS property name to a class name
const className = getClassNameFromCSSProperty("marginTop");
console.log(className); // Example output: "margin top"
```

## Defined in

[utils/css.ts:63](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L63)
