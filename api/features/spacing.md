<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/spacing

# features/spacing

> Last updated 2025-02-17T12:33:43.799Z

This feature highlights the spacing of an element.

![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-spacing-dark.png?raw=true) \*

## Table of Contents

- [Example](#example)
- [Functions](#functions)
  - [create()](#create)
  - [spacing()](#spacing)

## Example

Use the following code, either for html or js:

```html
<div data-speccer="spacing [padding|margin][bound]" class="…">…</div>
```

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

## Functions

### create()

```ts
function create(text, tag): HTMLElement;
```

Defined in: [src/features/spacing/index.ts:56](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/index.ts#L56)

Create a spacing element with optional text content.

#### Parameters

| Parameter | Type                 | Default value | Description                                        |
| --------- | -------------------- | ------------- | -------------------------------------------------- |
| `text`    | `string` \| `number` | `''`          | The optional text content for the spacing element. |
| `tag`     | `string`             | `'span'`      | The HTML tag for the element (default is 'span').  |

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created spacing element.

#### Example

```ts
const spacingElement = create(20, 'div');
document.body.appendChild(spacingElement);
```

---

### spacing()

```ts
function spacing(targetElement, options?): Promise<void>;
```

Defined in: [src/features/spacing/index.ts:119](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/index.ts#L119)

Create and position spacing elements based on the target element's computed spacing styles.

![spacing](https://github.com/phun-ky/speccer/blob/main/public/speccer-spacing-light.png?raw=true)

#### Parameters

| Parameter       | Type                                                                     | Description                                        |
| --------------- | ------------------------------------------------------------------------ | -------------------------------------------------- |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)  | The target element to create spacing elements for. |
| `options`?      | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface) | Options                                            |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

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

![spacing](https://github.com/phun-ky/speccer/blob/main/public/speccer-spacing-bound.png?raw=true)

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

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
