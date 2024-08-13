[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/a11y](../README.md) / shortcut

# Function: shortcut()

> **shortcut**(`el`, `shortcutString`): `Promise`\<`void`\>

Adds a shortcut element to the document body based on the provided HTML element and shortcut string.

![Screenshot of speccer a11y shortcuts in use](https://github.com/phun-ky/speccer/blob/main/public/a11y-shortcut.png?raw=true)

## Parameters

• **el**: `HTMLElement`

Target HTML element.

• **shortcutString**: `string`

Shortcut string to be displayed.

## Returns

`Promise`\<`void`\>

A Promise resolving when the operation is complete.

## Example

```ts
const shortcutElement = document.getElementById('shortcutElement');
if (shortcutElement) {
  await shortcut(shortcutElement, 'Ctrl + Shift + A');
}
```

## Defined in

[features/a11y/index.ts:115](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/index.ts#L115)
