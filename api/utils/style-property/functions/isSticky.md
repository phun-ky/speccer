[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/style-property](../README.md) / isSticky

# Function: isSticky()

> **isSticky**(`element`): `Promise`\<`boolean`\>

Checks if an element has 'position: sticky'.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | The target element. |

## Returns

`Promise`\<`boolean`\>

- A promise that resolves to true if the element has 'position: sticky', false otherwise.

## Example

```ts
// Usage example:
const isElementSticky = await isSticky(myElement);
console.log(isElementSticky); // true or false
```

## Defined in

[utils/style-property.ts:96](https://github.com/phun-ky/speccer/blob/main/src/utils/style-property.ts#L96)
