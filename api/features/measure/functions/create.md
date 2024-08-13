[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/measure](../README.md) / create

# Function: create()

> **create**(`text`, `area`, `tag`): `HTMLElement`

Create a measurement element with optional text, area, and element type.

## Parameters

• **text**: `string` \| `number` = `''`

The text to display on the element.

• **area**: `null` \| `string` = `''`

The area to specify with CSS class.

• **tag**: `string` = `'span'`

The element type.

## Returns

`HTMLElement`

- The created measurement element.

## Example

```ts
const measurement = create(100, 'width bottom', 'div');
document.body.appendChild(measurement);
```

## Defined in

[features/measure/index.ts:28](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L28)
