[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/mark](../README.md) / element

# Function: element()

> **element**(`elementToMark`): `Promise`\<`void`\>

Create a marker element and add it to the body with styles matching a specified element.

![mark](https://github.com/phun-ky/speccer/blob/main/public/mark.png?raw=true)

## Parameters

• **elementToMark**: `HTMLElement`

The target element to match styles with.

## Returns

`Promise`\<`void`\>

- A promise that resolves after creating and styling the marker element.

## Example

```typescript
const elementToMark = document.getElementById('target');
element(elementToMark);
```

## Defined in

[features/mark/index.ts:41](https://github.com/phun-ky/speccer/blob/main/src/features/mark/index.ts#L41)
