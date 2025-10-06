[@phun-ky/speccer](../index.md) / typography

# Variable: typography

```ts
const typography: {
  create: (
    html: string,
    options: SpeccerOptionsInterface,
    id: string
  ) => HTMLElement;
  element: (
    targetElement: HTMLElement,
    options?: SpeccerOptionsInterface
  ) => Promise<void>;
};
```

Defined in:
[main.ts:229](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L229)

This feature presents typography

![pin](/speccer-typography-light.png?raw=true)

## Type Declaration

### create()

```ts
create: (html: string, options: SpeccerOptionsInterface, id: string) =>
  (HTMLElement = typographyCreate);
```

Create a DOM element with provided HTML and optional CSS class names.

#### Parameters

##### html

`string`

The HTML content to be set in the created element.

##### options

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

Options.

##### id

`string`

The id.

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created DOM element.

#### Example

```ts
const htmlContent = '<p>This is some HTML content.</p>';
const cssClass = 'custom-class';
const createdElement = create(htmlContent, cssClass);
document.body.appendChild(createdElement);
```

### element()

```ts
element: (targetElement: HTMLElement, options?: SpeccerOptionsInterface) =>
  (Promise<void> = typographyElement);
```

Create a specced typography element for a given target element.

![typography](/speccer-typography-light.png?raw=true)

#### Parameters

##### targetElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The target element to specc typography for.

##### options?

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

Custom options

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

- A promise that resolves once typography element is created and positioned.

#### Example

##### Default

```ts
const targetElement = document.querySelector('.target');
if (targetElement) {
  element(targetElement);
}
```

##### With syntax highlight feature

![typography](/speccer-typography-syntax-light.png?raw=true)

```ts
const targetElement = document.querySelector('.target');
const options = {
  typography: {
    useSyntaxHighlighting: true
  }
};

if (targetElement) {
  element(targetElement, options);
}
```

## Example

Use the following code, either for html or js:

```html
<div data-speccer="typography [top|right|bottom|left] [syntax]" class="...">
  …
</div>
```

```ts
const targetElement = document.getElementById('target');
const options = {
  position: 'right',
  type: 'typography',
  typography: {
    useSyntaxHighlighting: false
  }
};

typography(targetElement, options);
```
