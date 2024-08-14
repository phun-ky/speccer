<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../../../README.md) / features/dissect/utils/styles

# features/dissect/utils/styles

> Last updated 2024-08-14T10:23:12.572Z

## Functions

### styles()

```ts
function styles(
   area, 
   targetEl, 
   dissectionEl, 
options?): Promise<SpeccerStylesReturnType>
```

Get styles for dissected elements based on the specified area and options.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `area` | `string` | The area description. |
| `targetEl` | `HTMLElement` | The target element. |
| `dissectionEl` | `HTMLElement` | The dissection element. |
| `options`? | [`DissectStylesOptionsType`](../../../types/bezier.md#dissectstylesoptionstype) | Optional styles options. |

#### Returns

`Promise`\<[`SpeccerStylesReturnType`](../../../types/styles.md#speccerstylesreturntype)\>

- The computed styles.

#### Example

```ts
const area = 'top-left';
const targetElement = document.getElementById('target');
const dissectionElement = document.getElementById('dissection');
const options = { isCurly: true };
const styles = await styles(area, targetElement, dissectionElement, options);
console.log(styles);
```

#### Defined in

[features/dissect/utils/styles.ts:33](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/styles.ts#L33)

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
