<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../README.md) / utils/classes/DrawSVGCurlyBracket

# utils/classes/DrawSVGCurlyBracket

> Last updated 2024-11-21T14:05:20.026Z

## Classes

### DrawSVGCurlyBracket

Class representing a DrawSVGCurlyBracket instance.

#### Constructors

##### new DrawSVGCurlyBracket()

```ts
new DrawSVGCurlyBracket(startElement, stopElement): DrawSVGCurlyBracket
```

Creates a new DrawSVGCurlyBracket instance.

###### Parameters

| Parameter      | Type                                                                    | Description                           |
| -------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| `startElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The starting element for the bracket. |
| `stopElement`  | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The ending element for the bracket.   |

###### Returns

[`DrawSVGCurlyBracket`](DrawSVGCurlyBracket.md#drawsvgcurlybracket)

###### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:22](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L22)

#### Properties

| Property            | Type                                                                          | Defined in                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `firstPathElement`  | [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) | [utils/classes/DrawSVGCurlyBracket.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L14) |
| `secondPathElement` | [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) | [utils/classes/DrawSVGCurlyBracket.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L15) |
| `startElement`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)       | [utils/classes/DrawSVGCurlyBracket.ts:12](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L12) |
| `stopElement`       | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)       | [utils/classes/DrawSVGCurlyBracket.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L13) |

#### Methods

##### connect()

```ts
connect(): void
```

Connects and draws the curly bracket.

###### Returns

`void`

###### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:77](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L77)

##### draw()

```ts
draw(path): Promise<void>
```

Draws the curly bracket based on the provided path.

###### Parameters

| Parameter | Type                                                                          | Description                                     |
| --------- | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| `path`    | [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) | The SVGPathElement to be used as the base path. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

###### Throws

Will throw an error if no path is provided.

###### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:111](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L111)

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
