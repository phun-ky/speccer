<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../../../README.md) / features/typography/utils/position

# features/typography/utils/position

> Last updated 2024-08-14T10:16:53.362Z

## Functions

### position()

```ts
function position(
   area, 
   targetEl, 
   speccerEl): Promise<{
  left: string;
  top: string;
}>
```

Calculate the position for the speccer element relative to the target element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `area` | `null` \| `string` | The area information for positioning. |
| `targetEl` | `HTMLElement` | The target element. |
| `speccerEl` | `HTMLElement` | The speccer element to position. |

#### Returns

`Promise`\<\{
  `left`: `string`;
  `top`: `string`;
 \}\>

- A promise that resolves with the calculated position.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `left` | `string` | [features/typography/utils/position.ts:31](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/position.ts#L31) |
| `top` | `string` | [features/typography/utils/position.ts:31](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/position.ts#L31) |

#### Example

```ts
const targetElement = document.getElementById('target');
const speccerElement = document.getElementById('speccer');
const area = 'top';
const position = await position(area, targetElement, speccerElement);
console.log(position); // { left: '10px', top: '20px' }
```

#### Defined in

[features/typography/utils/position.ts:27](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/position.ts#L27)

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
