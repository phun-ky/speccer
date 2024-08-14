<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/direction-of-element

# utils/direction-of-element

> Last updated 2024-08-14T10:23:12.592Z

## Functions

### direction\_of\_element()

```ts
function direction_of_element(options): Promise<string>
```

Get the direction of an element based on its position relative to another element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options for direction calculation. |
| `options.crude`? | `boolean` | If the direction should be calculated crudely (NSEW). |
| `options.start` | `HTMLElement` | The starting HTML element. |
| `options.stop` | `HTMLElement` | The stopping HTML element. |

#### Returns

`Promise`\<`string`\>

- The calculated direction.

#### Example

```ts
// Get the direction of one element relative to another
const startElement = document.getElementById('startElement');
const stopElement = document.getElementById('stopElement');
const direction = await direction_of_element({ start: startElement, stop: stopElement });
```

#### Defined in

[utils/direction-of-element.ts:21](https://github.com/phun-ky/speccer/blob/main/src/utils/direction-of-element.ts#L21)

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
