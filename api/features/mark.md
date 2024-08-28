<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/mark

# features/mark

> Last updated 2024-08-28T10:13:18.036Z

## Functions

### create()

```ts
function create(n): HTMLElement;
```

Create a marker element with an optional element type.

#### Parameters

| Parameter | Type     | Default value | Description       |
| --------- | -------- | ------------- | ----------------- |
| `n`       | `string` | `'span'`      | The element type. |

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created marker element.

#### Example

```typescript
const marker = create('div');
document.body.appendChild(marker);
```

#### Defined in

[features/mark/index.ts:22](https://github.com/phun-ky/speccer/blob/main/src/features/mark/index.ts#L22)

---

### element()

```ts
function element(targetElement): Promise<void>;
```

Create a marker element and add it to the body with styles matching a specified element.

![mark](https://github.com/phun-ky/speccer/blob/main/public/mark.png?raw=true)

#### Parameters

| Parameter       | Type                                                                    | Description                              |
| --------------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The target element to match styles with. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

- A promise that resolves after creating and styling the marker element.

#### Example

```typescript
const targetElement = document.getElementById('target');
element(targetElement);
```

#### Defined in

[features/mark/index.ts:45](https://github.com/phun-ky/speccer/blob/main/src/features/mark/index.ts#L45)

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
