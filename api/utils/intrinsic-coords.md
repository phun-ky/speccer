<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/intrinsic-coords

# utils/intrinsic-coords

> Last updated 2024-08-14T10:23:12.593Z

## Functions

### intrinsic\_coords()

```ts
function intrinsic_coords(el, pos?): Promise<{
  x: number;
  y: number;
}>
```

Get the intrinsic coordinates of an element based on a specified position.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `el` | `HTMLElement` | `undefined` | The HTML element. |
| `pos`? | `string` | `'center'` | The position to use. |

#### Returns

`Promise`\<\{
  `x`: `number`;
  `y`: `number`;
 \}\>

- An object containing the coordinates.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `x` | `number` | [utils/intrinsic-coords.ts:23](https://github.com/phun-ky/speccer/blob/main/src/utils/intrinsic-coords.ts#L23) |
| `y` | `number` | [utils/intrinsic-coords.ts:23](https://github.com/phun-ky/speccer/blob/main/src/utils/intrinsic-coords.ts#L23) |

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

#### Defined in

[utils/intrinsic-coords.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/intrinsic-coords.ts#L20)

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