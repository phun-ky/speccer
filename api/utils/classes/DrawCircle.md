<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../README.md) / utils/classes/DrawCircle

# utils/classes/DrawCircle

> Last updated 2024-11-21T14:05:20.026Z

## Classes

### DrawCircle

Class representing a DrawCircle instance.

#### Constructors

##### new DrawCircle()

```ts
new DrawCircle(
   el,
   radius,
   options): DrawCircle
```

Creates a new DrawCircle instance.

###### Parameters

| Parameter | Type                                                                        | Description                              |
| --------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)     | The element used to position the circle. |
| `radius`  | `number`                                                                    | The radius of the circle                 |
| `options` | [`SpeccerOptionsInterface`](../../types/speccer.md#specceroptionsinterface) | The options used to identify position    |

###### Returns

[`DrawCircle`](DrawCircle.md#drawcircle)

###### Defined in

[utils/classes/DrawCircle.ts:22](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L22)

#### Properties

| Property  | Type                                                                              | Defined in                                                                                                         |
| --------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `circle`  | [`SVGCircleElement`](https://developer.mozilla.org/docs/Web/API/SVGCircleElement) | [utils/classes/DrawCircle.ts:12](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L12) |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)           | [utils/classes/DrawCircle.ts:11](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L11) |
| `options` | [`SpeccerOptionsInterface`](../../types/speccer.md#specceroptionsinterface)       | [utils/classes/DrawCircle.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L14) |
| `radius`  | `number`                                                                          | [utils/classes/DrawCircle.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L13) |

#### Methods

##### draw()

```ts
draw(): Promise<void>
```

Draws the circle based on the provided el and radius.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

###### Defined in

[utils/classes/DrawCircle.ts:78](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L78)

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
