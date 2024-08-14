[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/typography/utils/template](../README.md) / template

# Function: template()

> **template**(`targetEl`, `useHighlighting`?): `Promise`\<`string`\>

Generate a HTML string for typography styles of a target element.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `targetEl` | `HTMLElement` | `undefined` | The target element for which to generate typography styles. |
| `useHighlighting`? | `boolean` | `false` | If we should use highlighting markup |

## Returns

`Promise`\<`string`\>

- A promise that resolves with the HTML string.

## Example

```ts
const targetElement = document.getElementById('target');
const typographyStyles = await template(targetElement, true);
console.log(typographyStyles);
```

## Defined in

[features/typography/utils/template.ts:18](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/template.ts#L18)
