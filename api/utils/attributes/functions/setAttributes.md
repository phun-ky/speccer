[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/attributes](../README.md) / setAttributes

# Function: setAttributes()

> **setAttributes**(`el`, `attrs`?): `void`

Sets attributes on an HTML element.

## Parameters

• **el**: `HTMLElement`

The HTML element to set attributes on.

• **attrs?**: [`AttributesMapInterface`](../../../types/interfaces/attributes/interfaces/AttributesMapInterface.md)

The attributes to set as a key-value mapping.

## Returns

`void`

## Example

```ts
const element = document.getElementById('myElement');
setAttributes(element, {
  'class': 'active',
  'data-value': '123',
});
```

## Defined in

[utils/attributes.ts:19](https://github.com/phun-ky/speccer/blob/main/src/utils/attributes.ts#L19)
