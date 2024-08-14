<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../../README.md) / types/interfaces/position

# types/interfaces/position

> Last updated 2024-08-14T10:23:12.583Z

## Interfaces

### GetRecPropertiesInterface

Interface for functions that calculate position properties based on input.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `absolute` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates absolute position properties. | [types/interfaces/position.ts:16](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L16) |
| `fromBottom` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates position properties for moving from the bottom. | [types/interfaces/position.ts:48](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L48) |
| `fromLeft` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates position properties for moving from the left. | [types/interfaces/position.ts:64](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L64) |
| `fromRight` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates position properties for moving from the right. | [types/interfaces/position.ts:80](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L80) |
| `fromTop` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates position properties for moving from the top. | [types/interfaces/position.ts:32](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L32) |
| `toBottom` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates position properties for moving to the bottom. | [types/interfaces/position.ts:40](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L40) |
| `toLeft` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates position properties for moving to the left. | [types/interfaces/position.ts:56](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L56) |
| `toRight` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates position properties for moving to the right. | [types/interfaces/position.ts:72](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L72) |
| `toTop` | (`inp`?: [`PositionInputType`](../position.md#positioninputtype)) => [`PositionPropertiesType`](../position.md#positionpropertiestype) | Calculates position properties for moving to the top. | [types/interfaces/position.ts:24](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/position.ts#L24) |

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