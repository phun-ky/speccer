<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/measure

# features/measure

> Last updated 2024-11-21T13:26:40.766Z

This feature measures given element

![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-pin-measure-height-light.png?raw=true)

## Table of Contents

- [Example](#example)
- [Functions](#functions)
  - [create()](#create)
  - [measure()](#measure)

## Example

Use the following code, either for html or js:

```html
<div
  data-speccer="measure [height left|right] | [width top|bottom]"
  class="..."
>
  …
</div>
```

```ts
const targetElement = document.getElementById('target');
const options = {
  position: 'right',
  measure: {
    height: true
  }
};

measure(targetElement, options);
```

## Functions

### create()

```ts
function create(text, options, id, tag): HTMLElement;
```

Create a measurement element with optional text, area, and element type.

#### Parameters

| Parameter | Type                                                                     | Default value | Description                         |
| --------- | ------------------------------------------------------------------------ | ------------- | ----------------------------------- |
| `text`    | `string` \| `number`                                                     | `''`          | The text to display on the element. |
| `options` | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface) | `undefined`   | The options.                        |
| `id`      | `string`                                                                 | `undefined`   | The element id.                     |
| `tag`     | `string`                                                                 | `'span'`      | The element type.                   |

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created measurement element.

#### Example

```ts
const measurement = create(100, 'width bottom', 'div');
document.body.appendChild(measurement);
```

#### Defined in

[features/measure/index.ts:61](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L61)

---

### measure()

```ts
function measure(targetElement, options?): Promise<void>;
```

Create a measurement element and add it to the body with styles matching a specified target element based on the attribute values from `data-speccer`.

![measure](https://github.com/phun-ky/speccer/blob/main/public/speccer-measure-right-full-light.png?raw=true)

#### Parameters

| Parameter       | Type                                                                     | Description                              |
| --------------- | ------------------------------------------------------------------------ | ---------------------------------------- |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)  | The target element to match styles with. |
| `options`?      | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface) | Options.                                 |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

- A promise that resolves after creating and styling the measurement element.

#### Example

##### Height to the right

```ts
const targetElement = document.getElementById('target');
const options = {
  position: 'right',
  measure: {
    height: true
  }
};

measure(targetElement, options);
```

##### Slim width to the bottom

![measure](https://github.com/phun-ky/speccer/blob/main/public/speccer-measure-bottom-dark.png?raw=true)

```ts
const targetElement = document.getElementById('target');
const options = {
  position: 'bottom',
  measure: {
    slim: true,
    width: true
  }
};

measure(targetElement, options);
```

#### Defined in

[features/measure/index.ts:127](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L127)

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
