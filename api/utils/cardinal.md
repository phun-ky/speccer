<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/cardinal

# utils/cardinal

> Last updated 2024-08-15T08:03:55.987Z

## Functions

### cardinal_direction()

```ts
function cardinal_direction(degrees): string;
```

Gives you the cardinal direction based on degrees.
Note: The degrees start at 0, which is EAST (originally, north should be 0, but here, north is 270),
and we travel clockwise.

#### Parameters

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| `degrees` | `number` | The angle in degrees. |

#### Returns

`string`

- The cardinal direction.

#### Throws

Parameter cannot exceed 360.

#### Throws

Parameter cannot be lower than 0.

#### Example

```ts
// Get the cardinal direction for an angle in degrees
const direction = cardinal_direction(45);
```

#### Defined in

[utils/cardinal.ts:18](https://github.com/phun-ky/speccer/blob/main/src/utils/cardinal.ts#L18)

---

### cardinal_direction_crude()

```ts
function cardinal_direction_crude(degrees): string;
```

Gives you the cardinal direction based on degrees (crude version).
Note: The degrees start at 0, which is EAST (originally, north should be 0, but here, north is 270),
and we travel clockwise.

#### Parameters

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| `degrees` | `number` | The angle in degrees. |

#### Returns

`string`

- The cardinal direction (NSEW).

#### Throws

Parameter cannot exceed 360.

#### Throws

Parameter cannot be lower than 0.

#### Example

```ts
// Get the cardinal direction (crude) for an angle in degrees
const direction = cardinal_direction_crude(45);
```

#### Defined in

[utils/cardinal.ts:57](https://github.com/phun-ky/speccer/blob/main/src/utils/cardinal.ts#L57)

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
