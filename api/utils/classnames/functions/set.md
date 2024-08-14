[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/classnames](../README.md) / set

# Function: set()

> **set**(`el`, `cls`, `avoid`?): `void`

Add CSS classes to an HTML element.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `el` | `HTMLElement` | `undefined` | The HTML element to which classes should be added. |
| `cls` | `string` | `undefined` | The CSS classes to add, separated by spaces. |
| `avoid`? | `string` | `'noop'` | Classes to avoid adding. |

## Returns

`void`

## Example

```ts
// Add classes to an HTML element
const element = document.getElementById('example');
set(element, 'class1 class2');
```

## Defined in

[utils/classnames.ts:23](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L23)
