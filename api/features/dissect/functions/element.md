[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/dissect](../README.md) / element

# Function: element()

> **element**(`sectionEl`): `Promise`\<`void`\>

Create dissected elements based on the section element and its data-anatomy attributes.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sectionEl` | `HTMLElement` | The section element containing dissected elements. |

## Returns

`Promise`\<`void`\>

- A promise that resolves after creating dissected elements.

## Example

```ts
const sectionElement = document.getElementById('section');
element(sectionElement);
```

## Defined in

[features/dissect/index.ts:41](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/index.ts#L41)
