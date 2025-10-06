[@phun-ky/speccer](../index.md) / spacing

# Variable: spacing

```ts
const spacing: {
  create: (text: string | number, tag: string) => HTMLElement;
  element: (
    targetElement: HTMLElement,
    options?: SpeccerOptionsInterface
  ) => Promise<void>;
};
```

Defined in:
[main.ts:99](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L99)

This feature highlights the spacing of an element.

![pin](/speccer-spacing-dark.png?raw=true) \*

## Type Declaration

### create()

```ts
create: (text: string | number, tag: string) => (HTMLElement = spacingCreate);
```

Create a spacing element with optional text content.

#### Parameters

##### text

The optional text content for the spacing element.

`string` | `number`

##### tag

`string` = `'span'`

The HTML tag for the element (default is 'span').

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created spacing element.

#### Example

```ts
const spacingElement = create(20, 'div');
document.body.appendChild(spacingElement);
```

### element()

```ts
element: (targetElement: HTMLElement, options?: SpeccerOptionsInterface) =>
  (Promise<void> = spacingElement);
```

Create and position spacing elements based on the target element's computed
spacing styles.

![spacing](/speccer-spacing-light.png?raw=true)

#### Parameters

##### targetElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The target element to create spacing elements for.

##### options?

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

Options

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

- A promise that resolves after creating and positioning the spacing elements.

#### Example

##### Default, padding and margin

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

##### Only padding

````ts
const targetElement = document.getElementById('target');
const options = {
  spacing: {
    padding: true
  }
};

element(targetElement, options);

##### Bound style, like the old feature

![spacing](/speccer-spacing-bound.png?raw=true)

This option binds the speccer elements to the bounds of the element container.

```ts
const targetElement = document.getElementById('target');
const options = {
  spacing: {
    bound: true,
  }
};

element(targetElement, options);
````

## Example

Use the following code, either for html or js:

```html
<div data-speccer="spacing [padding|margin][bound]" class="…">…</div>
```

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```
