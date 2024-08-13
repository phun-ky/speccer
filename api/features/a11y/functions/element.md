[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/a11y](../README.md) / element

# Function: element()

> **element**(`targetEl`, `content`?, `type`?): `Promise`\<`void`\>

Adds an accessibility element to the document body based on the target element and type.

![Screenshot of speccer a11y tab stops in use](https://github.com/phun-ky/speccer/blob/main/public/a11y-tabstop.png?raw=true)
![Screenshot of speccer a11y landmark in use](https://github.com/phun-ky/speccer/blob/main/public/a11y-landmark.png?raw=true)

## Parameters

• **targetEl**: `HTMLElement`

Target HTML element.

• **content?**: `unknown`

Content to be added to the accessibility element.

• **type?**: `string`

Type of accessibility element ('tabstops' or 'landmark').

## Returns

`Promise`\<`void`\>

A Promise resolving when the operation is complete.

## Example

```ts
const targetElement = document.getElementById('myElement');
if (targetElement) {
  await element(targetElement, 1, 'landmark');
  await element(targetElement, null, 'tabstops');
}
```

## Defined in

[features/a11y/index.ts:72](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/index.ts#L72)
