<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../../../README.md) / features/spacing/utils/position

# features/spacing/utils/position

> Last updated 2024-08-14T10:18:52.245Z

## Functions

### position()

```ts
function position(
   property, 
   value, 
   spacingEl, 
targetEl): Promise<void>
```

Set the position and dimensions of a spacing element relative to a target element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `property` | `string` | The CSS property to set (e.g., 'marginTop', 'marginLeft', etc.). |
| `value` | `number` | The value of the CSS property. |
| `spacingEl` | `HTMLElement` | The spacing element. |
| `targetEl` | `HTMLElement` | The target element. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves after setting the position and dimensions.

#### Example

```ts
const spacingElement = document.getElementById('spacing');
const targetElement = document.getElementById('target');
position('marginTop', 20, spacingElement, targetElement);
```

#### Defined in

[features/spacing/utils/position.ts:21](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/utils/position.ts#L21)

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
