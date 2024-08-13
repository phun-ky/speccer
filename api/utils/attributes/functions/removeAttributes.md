[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/attributes](../README.md) / removeAttributes

# Function: removeAttributes()

> **removeAttributes**(`el`, `attrs`?): `void`

Removes attributes from an HTML element.

## Parameters

• **el**: `HTMLElement`

The HTML element to remove attributes from.

• **attrs?**: `string`[]

The attributes to remove as a key-value mapping.

## Returns

`void`

## Example

```ts
const element = document.getElementById('myElement');
removeAttributes(element, ['class', 'data-value']);
```

## Defined in

[utils/attributes.ts:44](https://github.com/phun-ky/speccer/blob/main/src/utils/attributes.ts#L44)
