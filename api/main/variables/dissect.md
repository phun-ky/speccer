[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / [main](../README.md) / dissect

# Variable: dissect

> `const` **dissect**: `object`

## Type declaration

### create()

> **create**: (`textContent`, `area`, `id`, `n`) => `HTMLElement` = `dissectCreate`

Create a dissected element with optional text content, area description, and element type.

#### Parameters

• **textContent**: `string` = `''`

The text content to add to the element.

• **area**: `string`

The area description for styling.

• **id**: `string` = `''`

The id of the dissection element

• **n**: `string` = `'span'`

The element type.

#### Returns

`HTMLElement`

- The created dissected element.

#### Example

```ts
const dissectedElement = create('A', 'outline top', 'div');
document.body.appendChild(dissectedElement);
```

### dissect()

> **dissect**: (`el`, `symbol`, `areas`?) => `Promise`\<`string` \| `void`\> = `_dissect`

Create and style the dissection element as needed.

This function appends a new dissection element to the document body based on the anatomy data attribute
of the target element. It handles different styles, such as curly brackets or lines, based on the anatomy type.

#### Parameters

• **el**: `HTMLElement`

The target element that contains the anatomy data.

• **symbol**: `string`

The symbol to use.

• **areas?**: `string` = `''`

Optional areas to use if not [data-anatomy] is set as an attribute on the element

#### Returns

`Promise`\<`string` \| `void`\>

A promise that resolves to the id of the dissection element when the dissection is completed, or `void` if required input is invalid.

#### Example

```ts
const element = document.getElementById('target');
const symbol = 0;
dissect(element, symbol).then(() => {
  console.log('Dissection completed');
});
```

### element()

> **element**: (`sectionEl`) => `Promise`\<`void`\> = `dissectElement`

Create dissected elements based on the section element and its data-anatomy attributes.

![dissect](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)

#### Parameters

• **sectionEl**: `HTMLElement`

The section element containing dissected elements.

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating dissected elements.

#### Example

```ts
const sectionElement = document.getElementById('section');
element(sectionElement);
```

## Defined in

[main.ts:40](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L40)
