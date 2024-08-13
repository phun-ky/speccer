[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / [main](../README.md) / typography

# Variable: typography

> `const` **typography**: `object`

## Type declaration

### create()

> **create**: (`html`, `area`) => `HTMLElement` = `typographyCreate`

Create a DOM element with provided HTML and optional CSS class names.

#### Parameters

• **html**: `string`

The HTML content to be set in the created element.

• **area**: `null` \| `string`

The optional CSS class names to add.

#### Returns

`HTMLElement`

- The created DOM element.

#### Example

```ts
const htmlContent = '<p>This is some HTML content.</p>';
const cssClass = 'custom-class';
const createdElement = create(htmlContent, cssClass);
document.body.appendChild(createdElement);
```

### element()

> **element**: (`targetEl`) => `Promise`\<`void`\> = `typographyElement`

Create a specced typography element for a given target element.

![typography](https://github.com/phun-ky/speccer/blob/main/public/typography.png?raw=true)

#### Parameters

• **targetEl**: `HTMLElement`

The target element to specc typography for.

#### Returns

`Promise`\<`void`\>

- A promise that resolves once typography element is created and positioned.

#### Example

```ts
const targetElement = document.querySelector('.target');
if (targetElement) {
  element(targetElement);
}
```

## Defined in

[main.ts:54](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L54)
