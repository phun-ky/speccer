[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/typography](../README.md) / element

# Function: element()

> **element**(`targetEl`): `Promise`\<`void`\>

Create a specced typography element for a given target element.

![typography](https://github.com/phun-ky/speccer/blob/main/public/typography.png?raw=true)

## Parameters

• **targetEl**: `HTMLElement`

The target element to specc typography for.

## Returns

`Promise`\<`void`\>

- A promise that resolves once typography element is created and positioned.

## Example

```ts
const targetElement = document.querySelector('.target');
if (targetElement) {
  element(targetElement);
}
```

## Defined in

[features/typography/index.ts:58](https://github.com/phun-ky/speccer/blob/main/src/features/typography/index.ts#L58)
