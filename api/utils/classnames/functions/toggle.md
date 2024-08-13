[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/classnames](../README.md) / toggle

# Function: toggle()

> **toggle**(`el`, `cls`, `avoid`?): `void`

Toggle CSS classes on an HTML element.

## Parameters

• **el**: `HTMLElement`

The HTML element on which classes should be toggled.

• **cls**: `string`

The CSS classes to toggle, separated by spaces.

• **avoid?**: `string` = `'noop'`

Classes to avoid toggling.

## Returns

`void`

## Example

```ts
// Toggle classes on an HTML element
const element = document.getElementById('example');
toggle(element, 'class1 class2');
```

## Defined in

[utils/classnames.ts:49](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L49)
