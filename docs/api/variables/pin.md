[@phun-ky/speccer](../index.md) / pin

# Variable: pin

```ts
const pin: {
  createPinElement: (
    content: string,
    options: SpeccerOptionsInterface,
    id: string,
    n: string
  ) => HTMLElement;
  pinElement: (
    targetElement: HTMLElement,
    parentElement: HTMLElement,
    content: string,
    options: SpeccerOptionsInterface
  ) => Promise<undefined | string>;
  pinElements: (
    sectionElement: HTMLElement,
    options?: SpeccerOptionsInterface
  ) => Promise<void>;
};
```

Defined in:
[main.ts:122](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L122)

This feature annotate or highlight the anatomy of an element.

![pin](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)

In your component examples, use the following attribute. Remember to use the
`data-speccer="pin-area"`-attribute on a parent element to scope the marking.

## Type Declaration

### createPinElement()

```ts
createPinElement: (
  content: string,
  options: SpeccerOptionsInterface,
  id: string,
  n: string
) => HTMLElement;
```

Create a pin element with optional content, area description, and element type.

#### Parameters

##### content

`string` = `''`

The content to add to the element.

##### options

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

The option for styling.

##### id

`string` = `''`

The id of the pinned element

##### n

`string` = `'span'`

The element type.

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created pin element.

#### Example

```ts
const pinElement = createPinElement('A', 'outline top', 'div');
document.body.appendChild(pinElement);
```

### pinElement()

```ts
pinElement: (
  targetElement: HTMLElement,
  parentElement: HTMLElement,
  content: string,
  options: SpeccerOptionsInterface
) => Promise<undefined | string>;
```

Create and style the pin element as needed.

This function appends a new pin element to the document body based on the
`data-speccer="pin"` attribute of the target element. It handles different
styles, such as curly brackets or lines, based on the pin type.

#### Parameters

##### targetElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The target element that contains the pin data.

##### parentElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The parent element

##### content

`string`

The content to use.

##### options

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

options

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`undefined`
| `string`>

A promise that resolves to the id of the pin element when the process is
completed, or `void` if required input is invalid.

#### Example

```ts
const targetElement = document.getElementById('target');
const parentElement = document.getElementById('parent');
const content = '…';
const options = { … };
pinElement(targetElement, parentElement, content, options).then(() => {
  console.log('process completed');
});
```

### pinElements()

```ts
pinElements: (sectionElement: HTMLElement, options?: SpeccerOptionsInterface) =>
  Promise<void>;
```

Create pinned elements based on the section element and its data-speccer
attributes.

#### Parameters

##### sectionElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The section element containing pinned elements.

##### options?

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

Options.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

- A promise that resolves after creating pinned elements.

#### Example

```ts
const sectionElement = document.getElementById('section');
pinElements(sectionElement);
```

## Example

```html
<div data-speccer="pin-area">
  <div
    data-speccer="pin [bracket [curly] |enclose] [left|right|top|bottom]"
    class="..."
  ></div>
</div>
```
