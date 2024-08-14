<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/angle

# utils/angle

> Last updated 2024-08-14T10:18:52.251Z

## Functions

### angle()

```ts
function angle(
   cx, 
   cy, 
   ex, 
   ey, 
   normalize?): number
```

Returns the angle between two sets of coordinates.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `cx` | `number` | `undefined` | The x-coordinate of the first point. |
| `cy` | `number` | `undefined` | The y-coordinate of the first point. |
| `ex` | `number` | `undefined` | The x-coordinate of the second point. |
| `ey` | `number` | `undefined` | The y-coordinate of the second point. |
| `normalize`? | `boolean` | `true` | If the angle output should be normalized to a value between 0° and 360°. |

#### Returns

`number`

The angle between the given coordinates.

#### Throws

Missing input for `angle`.

#### Throws

Parameters for `angle` do not have the required type.

#### Example

```ts
// Calculate the angle between two points
const angleValue = angle(0, 0, 3, 4);
```

#### Defined in

[utils/angle.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/angle.ts#L20)

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
