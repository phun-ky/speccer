[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/spacing](../README.md) / element

# Function: element()

> **element**(`targetEl`): `Promise`\<`void`\>

Create and position spacing elements based on the target element's computed spacing styles.

![spacing](https://github.com/phun-ky/speccer/blob/main/public/spacing.png?raw=true)

## Parameters

• **targetEl**: `HTMLElement`

The target element to create spacing elements for.

## Returns

`Promise`\<`void`\>

- A promise that resolves after creating and positioning the spacing elements.

## Example

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

## Defined in

[features/spacing/index.ts:53](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/index.ts#L53)
