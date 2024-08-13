[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/resize](../README.md) / activate

# Function: activate()

> **activate**(`speccer`): `void`

Attaches a debounced event listener to the window's resize event that triggers the provided function.

## Parameters

• **speccer**: [`SpeccerFunctionType`](../../../types/speccer/type-aliases/SpeccerFunctionType.md)

The function to trigger when the window is resized.

## Returns

`void`

## Example

```ts
// Define a function to be triggered on window resize
const mySpeccer = () => {
  // Your logic here
  console.log('Window resized');
};

// Activate the debounced event listener
activate(mySpeccer);
```

## Defined in

[utils/resize.ts:22](https://github.com/phun-ky/speccer/blob/main/src/utils/resize.ts#L22)