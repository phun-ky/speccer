[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/classnames](../README.md) / remove

# Function: remove()

> **remove**(`el`, `cls`, `avoid`?): `void`

Remove CSS classes from an HTML element.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `el` | `HTMLElement` | `undefined` | The HTML element from which classes should be removed. |
| `cls` | `string` | `undefined` | The CSS classes to remove, separated by spaces. |
| `avoid`? | `string` | `'noop'` | Classes to avoid removing. |

## Returns

`void`

## Example

```ts
// Remove classes from an HTML element
const element = document.getElementById('example');
remove(element, 'class1 class2');
```

## Defined in

[utils/classnames.ts:75](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L75)
