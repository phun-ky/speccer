<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / types/position

# types/position

> Last updated 2024-08-14T10:38:20.997Z

## Type Aliases

### PositionInputType

```ts
type PositionInputType: Record<string, never> | {
  center: boolean;
  modifier: number;
  sourceHeight: number;
  sourceWidth: number;
  targetHeight: number;
  targetWidth: number;
};
```

Type definition for input parameters related to positioning.

#### Defined in

[types/position.ts:14](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L14)

***

### PositionPropertiesType

```ts
type PositionPropertiesType: {
  height: number;
  left: number;
  top: number;
  width: number;
};
```

Type definition for position properties.

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`height`

</td>
<td>

`number`

</td>
<td>

[types/position.ts:7](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L7)

</td>
</tr>
<tr>
<td>

`left`

</td>
<td>

`number`

</td>
<td>

[types/position.ts:6](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L6)

</td>
</tr>
<tr>
<td>

`top`

</td>
<td>

`number`

</td>
<td>

[types/position.ts:5](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L5)

</td>
</tr>
<tr>
<td>

`width`

</td>
<td>

`number`

</td>
<td>

[types/position.ts:8](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L8)

</td>
</tr>
</table>

#### Defined in

[types/position.ts:4](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L4)

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
