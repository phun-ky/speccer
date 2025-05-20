<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../README.md) / utils/classes/DrawSVGLine

# utils/classes/DrawSVGLine

> Last updated 2025-05-20T09:52:56.288Z

## Classes

### DrawSVGLine

Defined in:
[src/utils/classes/DrawSVGLine.ts:11](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L11)

Class representing a DrawSVGLine instance.

#### Constructors

##### Constructor

```ts
new DrawSVGLine(
   startElement,
   stopElement,
   options?): DrawSVGLine;
```

Defined in:
[src/utils/classes/DrawSVGLine.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L25)

Creates a new DrawSVGLine instance.

###### Parameters

| Parameter      | Type                                                                        | Description                        |
| -------------- | --------------------------------------------------------------------------- | ---------------------------------- |
| `startElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)     | The starting element for the line. |
| `stopElement`  | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)     | The ending element for the line.   |
| `options?`     | [`SpeccerOptionsInterface`](../../types/speccer.md#specceroptionsinterface) | The ending element for the line.   |

###### Returns

[`DrawSVGLine`](#drawsvgline)

#### Properties

| Property                                 | Type                                                                          | Defined in                                                                                                               |
| ---------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <a id="line"></a> `line`                 | [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) | [src/utils/classes/DrawSVGLine.ts:17](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L17) |
| <a id="options"></a> `options`           | [`SpeccerOptionsInterface`](../../types/speccer.md#specceroptionsinterface)   | [src/utils/classes/DrawSVGLine.ts:16](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L16) |
| <a id="startelement"></a> `startElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)       | [src/utils/classes/DrawSVGLine.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L14) |
| <a id="stopelement"></a> `stopElement`   | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)       | [src/utils/classes/DrawSVGLine.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L15) |

#### Methods

##### connect()

```ts
connect(): void;
```

Defined in:
[src/utils/classes/DrawSVGLine.ts:82](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L82)

Connects and draws the line.

###### Returns

`void`

##### draw()

```ts
draw(path): Promise<void>;
```

Defined in:
[src/utils/classes/DrawSVGLine.ts:91](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L91)

Draws the line based on the provided path.

###### Parameters

| Parameter | Type                                                                          | Description                                     |
| --------- | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| `path`    | [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) | The SVGPathElement to be used as the base path. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

###### Throws

Will throw an error if no path is provided.

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
