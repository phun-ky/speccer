[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / utils/position

# utils/position

## Functions

### getRec()

> **getRec**(`sourceEl`, `targetEl`): `Promise`\<[`GetRecPropertiesInterface`](../types/interfaces/position.md#getrecpropertiesinterface)\>

Gets various positioning properties between two HTML elements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceEl` | `HTMLElement` | The source HTML element. |
| `targetEl` | `HTMLElement` | The target HTML element. |

#### Returns

`Promise`\<[`GetRecPropertiesInterface`](../types/interfaces/position.md#getrecpropertiesinterface)\>

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

[utils/position.ts:159](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L159)

***

### get\_horizontal\_center\_of\_els()

> **get\_horizontal\_center\_of\_els**(`modifier`, `startRect`, `targetRect`): `number`

Calculates the horizontal center of two elements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modifier` | `number` | A modifier value. |
| `startRect` | `DOMRect` | The starting element's rectangle. |
| `targetRect` | `DOMRect` | The target element's rectangle. |

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

***

### get\_vertical\_center\_of\_els()

> **get\_vertical\_center\_of\_els**(`modifier`, `startRect`, `targetRect`): `number`

Calculates the vertical center of two elements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modifier` | `number` | A modifier value. |
| `startRect` | `DOMRect` | The starting element's rectangle. |
| `targetRect` | `DOMRect` | The target element's rectangle. |

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

***

### offset()

> **offset**(`targetEl`): `Promise`\<[`PositionPropertiesType`](../types/position.md#positionpropertiestype)\>

Gets the offset properties of an HTML element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetEl` | `HTMLElement` | The target HTML element. |

#### Returns

`Promise`\<[`PositionPropertiesType`](../types/position.md#positionpropertiestype)\>

- A promise that resolves to the offset properties.

#### Example

```ts
// Get the offset properties of an element
const offsetProps = await offset(targetElement);
```

#### Defined in

[utils/position.ts:59](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L59)

***

### offsetWithCenter()

> **offsetWithCenter**(`sourceEl`, `targetEl`): `Promise`\<[`PositionPropertiesType`](../types/position.md#positionpropertiestype)\>

Gets the offset properties of an HTML element with its center aligned to another element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceEl` | `HTMLElement` | The source HTML element. |
| `targetEl` | `HTMLElement` | The target HTML element. |

#### Returns

`Promise`\<[`PositionPropertiesType`](../types/position.md#positionpropertiestype)\>

- A promise that resolves to the offset properties.

#### Example

```ts
// Get the offset properties of an element with its center aligned to another element
const offsetProps = await offsetWithCenter(sourceElement, targetElement);
```

#### Defined in

[utils/position.ts:117](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L117)
