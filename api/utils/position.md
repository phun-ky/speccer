<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/position

# utils/position

> Last updated 2024-11-18T09:12:16.698Z

## Functions

### get_horizontal_center_of_els()

```ts
function get_horizontal_center_of_els(modifier, startRect, targetRect): number;
```

Calculates the horizontal center of two elements.

#### Parameters

| Parameter    | Type                                                            | Description                       |
| ------------ | --------------------------------------------------------------- | --------------------------------- |
| `modifier`   | `number`                                                        | A modifier value.                 |
| `startRect`  | [`DOMRect`](https://developer.mozilla.org/docs/Web/API/DOMRect) | The starting element's rectangle. |
| `targetRect` | [`DOMRect`](https://developer.mozilla.org/docs/Web/API/DOMRect) | The target element's rectangle.   |

#### Returns

`number`

- The horizontal center position.

#### Example

```ts
// Calculate the horizontal center of two elements
const center = get_horizontal_center_of_els(0, startRect, targetRect);
```

#### Defined in

[utils/position.ts:21](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L21)

---

### get_vertical_center_of_els()

```ts
function get_vertical_center_of_els(modifier, startRect, targetRect): number;
```

Calculates the vertical center of two elements.

#### Parameters

| Parameter    | Type                                                            | Description                       |
| ------------ | --------------------------------------------------------------- | --------------------------------- |
| `modifier`   | `number`                                                        | A modifier value.                 |
| `startRect`  | [`DOMRect`](https://developer.mozilla.org/docs/Web/API/DOMRect) | The starting element's rectangle. |
| `targetRect` | [`DOMRect`](https://developer.mozilla.org/docs/Web/API/DOMRect) | The target element's rectangle.   |

#### Returns

`number`

- The vertical center position.

#### Example

```ts
// Calculate the vertical center of two elements
const center = get_vertical_center_of_els(0, startRect, targetRect);
```

#### Defined in

[utils/position.ts:41](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L41)

---

### getRec()

```ts
function getRec(sourceEl, targetEl): Promise<GetRecPropertiesInterface>;
```

Gets various positioning properties between two HTML elements.

#### Parameters

| Parameter  | Type                                                                    | Description              |
| ---------- | ----------------------------------------------------------------------- | ------------------------ |
| `sourceEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The source HTML element. |
| `targetEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The target HTML element. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`GetRecPropertiesInterface`](../types/interfaces/position.md#getrecpropertiesinterface)>

- A promise that resolves to an object with positioning functions.

#### Example

```ts
// Get positioning properties between two elements
const recProps = await getRec(sourceElement, targetElement);

// Get the absolute position properties
const absoluteProps = recProps.absolute();

// Get the position properties with the source element above the target element
const aboveProps = recProps.toTop();
```

#### Defined in

[utils/position.ts:164](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L164)

---

### offset()

```ts
function offset(targetEl): Promise<PositionPropertiesType>;
```

Gets the offset properties of an HTML element.

#### Parameters

| Parameter  | Type                                                                    | Description              |
| ---------- | ----------------------------------------------------------------------- | ------------------------ |
| `targetEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The target HTML element. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PositionPropertiesType`](../types/position.md#positionpropertiestype)>

- A promise that resolves to the offset properties.

#### Example

```ts
// Get the offset properties of an element
const offsetProps = await offset(targetElement);
```

#### Defined in

[utils/position.ts:59](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L59)

---

### offsetWithCenter()

```ts
function offsetWithCenter(sourceEl, targetEl): Promise<PositionPropertiesType>;
```

Gets the offset properties of an HTML element with its center aligned to another element.

#### Parameters

| Parameter  | Type                                                                    | Description              |
| ---------- | ----------------------------------------------------------------------- | ------------------------ |
| `sourceEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The source HTML element. |
| `targetEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The target HTML element. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PositionPropertiesType`](../types/position.md#positionpropertiestype)>

- A promise that resolves to the offset properties.

#### Example

```ts
// Get the offset properties of an element with its center aligned to another element
const offsetProps = await offsetWithCenter(sourceElement, targetElement);
```

#### Defined in

[utils/position.ts:119](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L119)

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
