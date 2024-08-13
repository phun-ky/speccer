[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/css](../README.md) / normalizeNumberValue

# Function: normalizeNumberValue()

> **normalizeNumberValue**(`value`): `number`

Normalizes a string or number value to ensure it's a valid number.
If the value is within the range [0, 1] or [-1, 0), it's normalized to 0.

## Parameters

• **value**: `string` \| `number`

The value to normalize.

## Returns

`number`

- The normalized number value.

## Example

```ts
// Normalize a value to ensure it's a valid number
const normalizedValue = normalizeNumberValue("0.5");
console.log(normalizedValue); // Example output: 0.5
```

## Defined in

[utils/css.ts:42](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L42)
