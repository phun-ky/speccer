<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/measure

# features/measure

> Last updated 2024-08-20T07:01:27.177Z

## Functions

### create()

```ts
function create(text, area, tag): HTMLElement;
```

Create a measurement element with optional text, area, and element type.

#### Parameters

| Parameter | Type                 | Default value | Description                         |
| --------- | -------------------- | ------------- | ----------------------------------- |
| `text`    | `string` \| `number` | `''`          | The text to display on the element. |
| `area`    | `null` \| `string`   | `''`          | The area to specify with CSS class. |
| `tag`     | `string`             | `'span'`      | The element type.                   |

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created measurement element.

#### Example

```ts
const measurement = create(100, 'width bottom', 'div');
document.body.appendChild(measurement);
```

#### Defined in

[features/measure/index.ts:29](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L29)

---

### element()

```ts
function element(targetElement): Promise<void>;
```

Create a measurement element and add it to the body with styles matching a specified target element.

![measure](https://github.com/phun-ky/speccer/blob/main/public/measure.png?raw=true)

#### Parameters

| Parameter       | Type                                                                    | Description                              |
| --------------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The target element to match styles with. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

- A promise that resolves after creating and styling the measurement element.

#### Example

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

#### Defined in

[features/measure/index.ts:58](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L58)

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
