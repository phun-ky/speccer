<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/typography

# features/typography

> Last updated 2025-02-11T10:43:47.943Z

This feature presents typography

![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-typography-light.png?raw=true)

## Table of Contents

- [Example](#example)
- [Functions](#functions)
  - [create()](#create)
  - [typography()](#typography)

## Example

Use the following code, either for html or js:

```html
<div data-speccer="typography [top|right|bottom|left] [syntax]" class="...">
  …
</div>
```

```ts
const targetElement = document.getElementById("target");
const options = {
  position: "right",
  type: "typography",
  typography: {
    useSyntaxHighlighting: false,
  },
};

typography(targetElement, options);
```

## Functions

### create()

```ts
function create(html, options, id): HTMLElement;
```

Defined in: [src/features/typography/index.ts:63](https://github.com/phun-ky/speccer/blob/main/src/features/typography/index.ts#L63)

Create a DOM element with provided HTML and optional CSS class names.

#### Parameters

| Parameter | Type                                                                     | Description                                        |
| --------- | ------------------------------------------------------------------------ | -------------------------------------------------- |
| `html`    | `string`                                                                 | The HTML content to be set in the created element. |
| `options` | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface) | Options.                                           |
| `id`      | `string`                                                                 | The id.                                            |

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created DOM element.

#### Example

```ts
const htmlContent = "<p>This is some HTML content.</p>";
const cssClass = "custom-class";
const createdElement = create(htmlContent, cssClass);
document.body.appendChild(createdElement);
```

---

### typography()

```ts
function typography(targetElement, options?): Promise<void>;
```

Defined in: [src/features/typography/index.ts:122](https://github.com/phun-ky/speccer/blob/main/src/features/typography/index.ts#L122)

Create a specced typography element for a given target element.

![typography](https://github.com/phun-ky/speccer/blob/main/public/speccer-typography-light.png?raw=true)

#### Parameters

| Parameter       | Type                                                                     | Description                                 |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)  | The target element to specc typography for. |
| `options`?      | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface) | Custom options                              |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

- A promise that resolves once typography element is created and positioned.

#### Example

##### Default

```ts
const targetElement = document.querySelector(".target");
if (targetElement) {
  element(targetElement);
}
```

##### With syntax higlight feature

![typography](https://github.com/phun-ky/speccer/blob/main/public/speccer-typography-syntax-light.png?raw=true)

```ts
const targetElement = document.querySelector(".target");
const options = {
  typography: {
    useSyntaxHighlighting: true,
  },
};

if (targetElement) {
  element(targetElement, options);
}
```

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
