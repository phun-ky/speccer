[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/spacing](../README.md) / create

# Function: create()

> **create**(`text`, `tag`): `HTMLElement`

Create a spacing element with optional text content.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `text` | `string` \| `number` | `''` | The optional text content for the spacing element. |
| `tag` | `string` | `'span'` | The HTML tag for the element (default is 'span'). |

## Returns

`HTMLElement`

- The created spacing element.

## Example

```ts
const spacingElement = create(20, 'div');
document.body.appendChild(spacingElement);
```

## Defined in

[features/spacing/index.ts:25](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/index.ts#L25)
