<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/number

# utils/number

> Last updated 2024-08-15T07:39:37.334Z

## Functions

### decimal()

```ts
function decimal(number, decimals): string;
```

Converts a number to a string with a specified number of decimal places.

#### Parameters

| Parameter  | Type                 | Default value | Description                                  |
| ---------- | -------------------- | ------------- | -------------------------------------------- |
| `number`   | `string` \| `number` | `undefined`   | The number to convert.                       |
| `decimals` | `number`             | `3`           | The number of decimal places (default is 3). |

#### Returns

`string`

- The formatted number as a string.

#### Example

```ts
// Convert a number to a string with 2 decimal places
const formattedNumber = decimal(12.3456, 2); // "12.34"
```

#### Defined in

[utils/number.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/number.ts#L15)

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
