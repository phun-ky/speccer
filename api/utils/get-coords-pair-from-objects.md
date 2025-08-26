<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/get-coords-pair-from-objects

# utils/get-coords-pair-from-objects

> Last updated 2025-08-26T17:21:42.422Z

## Functions

### getCoordsPairFromObjects()

```ts
function getCoordsPairFromObjects(
  el1,
  el2,
  pos1?,
  pos2?
): Promise<{
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}>;
```

Defined in:
[src/utils/get-coords-pair-from-objects.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/get-coords-pair-from-objects.ts#L20)

Get the x and y coordinates of two elements and return them as an object.

#### Parameters

| Parameter | Type                                                                    | Default value | Description                                 |
| --------- | ----------------------------------------------------------------------- | ------------- | ------------------------------------------- |
| `el1`     | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | `undefined`   | The first HTML element.                     |
| `el2`     | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | `undefined`   | The second HTML element.                    |
| `pos1?`   | `string`                                                                | `'center'`    | The position to use for the first element.  |
| `pos2?`   | `string`                                                                | `'center'`    | The position to use for the second element. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<{
`x1`: `number`; `x2`: `number`; `y1`: `number`; `y2`: `number`; }>

- An object containing the coordinates.

#### Throws

No element given.

#### Example

```ts
// Get coordinates for two elements
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const coordinates = await get_coords_pair_from_objects(element1, element2);
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
