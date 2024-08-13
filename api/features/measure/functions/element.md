[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/measure](../README.md) / element

# Function: element()

> **element**(`targetEl`): `Promise`\<`void`\>

Create a measurement element and add it to the body with styles matching a specified target element.

![measure](https://github.com/phun-ky/speccer/blob/main/public/measure.png?raw=true)

## Parameters

• **targetEl**: `HTMLElement`

The target element to match styles with.

## Returns

`Promise`\<`void`\>

- A promise that resolves after creating and styling the measurement element.

## Example

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

## Defined in

[features/measure/index.ts:57](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L57)
