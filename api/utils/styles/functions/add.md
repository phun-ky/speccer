[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/styles](../README.md) / add

# Function: add()

> **add**(`el`, `styles`): `Promise`\<`void`\>

Adds CSS styles to an HTMLElement.

## Parameters

• **el**: `HTMLElement`

The HTMLElement to apply styles to.

• **styles**: `object` \| `object`[]

An object or an array of objects containing CSS styles to apply.

## Returns

`Promise`\<`void`\>

- A Promise that resolves after styles are applied.

## Example

```ts
// Apply styles as an object
const element = document.getElementById('my-element');
await add(element, { color: 'red', fontSize: '16px' });

// Apply styles as an array of objects
const styles = [
  { key: 'color', value: 'blue' },
  { key: 'backgroundColor', value: 'yellow' }
];
await add(element, styles);
```

## Defined in

[utils/styles.ts:26](https://github.com/phun-ky/speccer/blob/main/src/utils/styles.ts#L26)
