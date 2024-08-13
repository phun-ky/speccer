[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/typography](../README.md) / create

# Function: create()

> **create**(`html`, `area`): `HTMLElement`

Create a DOM element with provided HTML and optional CSS class names.

## Parameters

• **html**: `string`

The HTML content to be set in the created element.

• **area**: `null` \| `string`

The optional CSS class names to add.

## Returns

`HTMLElement`

- The created DOM element.

## Example

```ts
const htmlContent = '<p>This is some HTML content.</p>';
const cssClass = 'custom-class';
const createdElement = create(htmlContent, cssClass);
document.body.appendChild(createdElement);
```

## Defined in

[features/typography/index.ts:23](https://github.com/phun-ky/speccer/blob/main/src/features/typography/index.ts#L23)
