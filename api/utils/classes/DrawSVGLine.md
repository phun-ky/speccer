<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../README.md) / utils/classes/DrawSVGLine

# utils/classes/DrawSVGLine

> Last updated 2024-11-21T14:05:20.027Z

## Classes

### DrawSVGLine

Class representing a DrawSVGLine instance.

#### Constructors

##### new DrawSVGLine()

```ts
new DrawSVGLine(
   startElement,
   stopElement,
   options?): DrawSVGLine
```

Creates a new DrawSVGLine instance.

###### Parameters

| Parameter      | Type                                                                        | Description                        |
| -------------- | --------------------------------------------------------------------------- | ---------------------------------- |
| `startElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)     | The starting element for the line. |
| `stopElement`  | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)     | The ending element for the line.   |
| `options`?     | [`SpeccerOptionsInterface`](../../types/speccer.md#specceroptionsinterface) | The ending element for the line.   |

###### Returns

[`DrawSVGLine`](DrawSVGLine.md#drawsvgline)

###### Defined in

[utils/classes/DrawSVGLine.ts:24](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L24)

#### Properties

| Property       | Type                                                                          | Defined in                                                                                                           |
| -------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `line`         | [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) | [utils/classes/DrawSVGLine.ts:16](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L16) |
| `options`      | [`SpeccerOptionsInterface`](../../types/speccer.md#specceroptionsinterface)   | [utils/classes/DrawSVGLine.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L15) |
| `startElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)       | [utils/classes/DrawSVGLine.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L13) |
| `stopElement`  | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)       | [utils/classes/DrawSVGLine.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L14) |

#### Methods

##### connect()

```ts
connect(): void
```

Connects and draws the line.

###### Returns

`void`

###### Defined in

[utils/classes/DrawSVGLine.ts:89](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L89)

##### draw()

```ts
draw(path): Promise<void>
```

Draws the line based on the provided path.

###### Parameters

| Parameter | Type                                                                          | Description                                     |
| --------- | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| `path`    | [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) | The SVGPathElement to be used as the base path. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

###### Throws

Will throw an error if no path is provided.

###### Defined in

[utils/classes/DrawSVGLine.ts:98](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L98)

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
