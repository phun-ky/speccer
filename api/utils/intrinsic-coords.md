<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/intrinsic-coords

# utils/intrinsic-coords

> Last updated 2025-06-24T06:59:58.777Z

## Functions

### intrinsic_coords()

```ts
function intrinsic_coords(
  el,
  pos?
): Promise<{
  x: number;
  y: number;
}>;
```

Defined in:
[src/utils/intrinsic-coords.ts:22](https://github.com/phun-ky/speccer/blob/main/src/utils/intrinsic-coords.ts#L22)

Get the intrinsic coordinates of an element based on a specified position.

#### Parameters

| Parameter | Type                                                                    | Default value | Description          |
| --------- | ----------------------------------------------------------------------- | ------------- | -------------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | `undefined`   | The HTML element.    |
| `pos?`    | `string`                                                                | `'center'`    | The position to use. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<{
`x`: `number`; `y`: `number`; }>

- An object containing the coordinates.

#### Throws

No position given.

#### Throws

The position given is not the required type.

#### Example

```ts
// Get intrinsic coordinates for an element
const element = document.getElementById('example');
const coordinates = await intrinsic_coords(element, 'top-left');
```

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
