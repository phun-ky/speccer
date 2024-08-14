<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/get-coords-pair-from-objects

# utils/get-coords-pair-from-objects

> Last updated 2024-08-14T10:23:12.592Z

## Functions

### getCoordsPairFromObjects()

```ts
function getCoordsPairFromObjects(
   el1, 
   el2, 
   pos1?, 
   pos2?): Promise<{
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}>
```

Get the x and y coordinates of two elements and return them as an object.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `el1` | `HTMLElement` | `undefined` | The first HTML element. |
| `el2` | `HTMLElement` | `undefined` | The second HTML element. |
| `pos1`? | `string` | `'center'` | The position to use for the first element. |
| `pos2`? | `string` | `'center'` | The position to use for the second element. |

#### Returns

`Promise`\<\{
  `x1`: `number`;
  `x2`: `number`;
  `y1`: `number`;
  `y2`: `number`;
 \}\>

- An object containing the coordinates.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `x1` | `number` | [utils/get-coords-pair-from-objects.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/get-coords-pair-from-objects.ts#L25) |
| `x2` | `number` | [utils/get-coords-pair-from-objects.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/get-coords-pair-from-objects.ts#L25) |
| `y1` | `number` | [utils/get-coords-pair-from-objects.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/get-coords-pair-from-objects.ts#L25) |
| `y2` | `number` | [utils/get-coords-pair-from-objects.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/get-coords-pair-from-objects.ts#L25) |

#### Throws

No element given.

#### Example

```ts
// Get coordinates for two elements
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const coordinates = await get_coords_pair_from_objects(element1, element2);
```

#### Defined in

[utils/get-coords-pair-from-objects.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/get-coords-pair-from-objects.ts#L20)

***

## Contributing

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

## Sponsor me

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

***
<p class="ph">
  This project created by
  <a rel="noopener noreferrer" target="_blank" class="ph" href="http://phun-ky.net" property="cc:attributionName">
    Alexander Vassbotn Røyne-Helgesen</a>
  is licensed under a
  <a rel="noopener noreferrer" target="_blank" class="ph" href="https://choosealicense.com/licenses/mit/">
    MIT License </a>.
</p>
