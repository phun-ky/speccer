<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / types/position

# types/position

> Last updated 2024-11-21T14:05:20.020Z

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

[types/position.ts:24](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L24)

---

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
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
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
</tbody>
</table>

#### Defined in

[types/position.ts:4](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L4)

---

### PositionUnitPropertiesType

```ts
type PositionUnitPropertiesType: {
  height: string;
  left: string;
  top: string;
  width: string;
};
```

Type definition for position properties with units.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`height`

</td>
<td>

`string`

</td>
<td>

[types/position.ts:17](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L17)

</td>
</tr>
<tr>
<td>

`left`

</td>
<td>

`string`

</td>
<td>

[types/position.ts:16](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L16)

</td>
</tr>
<tr>
<td>

`top`

</td>
<td>

`string`

</td>
<td>

[types/position.ts:15](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L15)

</td>
</tr>
<tr>
<td>

`width`

</td>
<td>

`string`

</td>
<td>

[types/position.ts:18](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L18)

</td>
</tr>
</tbody>
</table>

#### Defined in

[types/position.ts:14](https://github.com/phun-ky/speccer/blob/main/src/types/position.ts#L14)

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
