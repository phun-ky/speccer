<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../README.md) / utils/classes/DrawCircle

# utils/classes/DrawCircle

> Last updated 2025-09-16T12:35:57.800Z

## Classes

### DrawCircle

Defined in:
[src/utils/classes/DrawCircle.ts:10](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L10)

Class representing a DrawCircle instance.

#### Constructors

##### Constructor

```ts
new DrawCircle(
   el,
   radius,
   options): DrawCircle;
```

Defined in:
[src/utils/classes/DrawCircle.ts:23](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L23)

Creates a new DrawCircle instance.

###### Parameters

| Parameter | Type                                                                        | Description                              |
| --------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)     | The element used to position the circle. |
| `radius`  | `number`                                                                    | The radius of the circle                 |
| `options` | [`SpeccerOptionsInterface`](../../types/speccer.md#specceroptionsinterface) | The options used to identify position    |

###### Returns

[`DrawCircle`](#drawcircle)

#### Properties

| Property                       | Type                                                                              | Defined in                                                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| <a id="circle"></a> `circle`   | [`SVGCircleElement`](https://developer.mozilla.org/docs/Web/API/SVGCircleElement) | [src/utils/classes/DrawCircle.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L13) |
| <a id="el"></a> `el`           | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)           | [src/utils/classes/DrawCircle.ts:12](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L12) |
| <a id="options"></a> `options` | [`SpeccerOptionsInterface`](../../types/speccer.md#specceroptionsinterface)       | [src/utils/classes/DrawCircle.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L15) |
| <a id="radius"></a> `radius`   | `number`                                                                          | [src/utils/classes/DrawCircle.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L14) |

#### Methods

##### draw()

```ts
draw(): Promise<void>;
```

Defined in:
[src/utils/classes/DrawCircle.ts:71](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawCircle.ts#L71)

Draws the circle based on the provided el and radius.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

---

**Contributing**

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help
get rid of secondary activities and to enhance systems already in place, be it
documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to
maintain my projects, create new ones and contribute to the large community
we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net)
is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
