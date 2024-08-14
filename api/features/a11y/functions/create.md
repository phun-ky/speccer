[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/a11y](../README.md) / create

# Function: create()

> **create**(`type`?, `content`?, `n`?): `HTMLElement`

Creates an HTML element based on the specified type.
*

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `type`? | `string` | `'tabstops'` | Type of element ('tabstops', 'landmark', 'region'). |
| `content`? | `unknown` | `undefined` | Content to be added to the element. |
| `n`? | `string` | `'span'` | HTML tag name (default is 'span'). |

## Returns

`HTMLElement`

The created HTML element.

## Example

```ts
const tabElement = create('tabstops', null, 'div');
const landmarkElement = create('landmark', 1, 'div');
const regionElement = create('region', null, 'div');
```

## Defined in

[features/a11y/index.ts:29](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/index.ts#L29)
