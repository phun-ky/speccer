[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/styles](../README.md) / get

# Function: get()

> **get**(`el`): `Promise`\<`CSSStyleDeclaration`\>

Gets the computed CSS styles of an HTMLElement.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `HTMLElement` | The HTMLElement to get computed styles from. |

## Returns

`Promise`\<`CSSStyleDeclaration`\>

- A Promise that resolves with the computed CSS styles.

## Example

```ts
// Get computed styles of an element
const element = document.getElementById('my-element');
const computedStyles = await get(element);
console.log(computedStyles.color); // Logs the color property value
```

## Defined in

[utils/styles.ts:67](https://github.com/phun-ky/speccer/blob/main/src/utils/styles.ts#L67)
