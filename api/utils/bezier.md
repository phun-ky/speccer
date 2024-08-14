<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/bezier

# utils/bezier

> Last updated 2024-08-14T10:23:12.586Z

## Functions

### createBezierCurveCoordinates()

```ts
function createBezierCurveCoordinates(coords, options): {
  firstControl: {
     x: number;
     y: y1;
    };
  firstPoint: {
     x: x1;
     y: y1;
    };
  lastControl: {
     x: number;
     y: y2;
    };
  lastPoint: {
     x: x2;
     y: y2;
    };
}
```

Calculates coordinates for a Bezier curve between two points.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `coords` | [`CreateCoordinatesForCurveCoordParamType`](../types/bezier.md#createcoordinatesforcurvecoordparamtype) | The coordinates of the start and end points. |
| `options` | [`CreateCoordinatesForCurveOptionsParamType`](../types/bezier.md#createcoordinatesforcurveoptionsparamtype) | Options for controlling the curve's shape. |

#### Returns

```ts
{
  firstControl: {
     x: number;
     y: y1;
    };
  firstPoint: {
     x: x1;
     y: y1;
    };
  lastControl: {
     x: number;
     y: y2;
    };
  lastPoint: {
     x: x2;
     y: y2;
    };
}
```

Coordinates for the Bezier curve.

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `firstControl` | \{ `x`: `number`; `y`: `y1`; \} | - | [utils/bezier.ts:71](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L71) |
| `firstControl.x` | `number` | - | [utils/bezier.ts:34](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L34) |
| `firstControl.y` | `number` | y1 | [utils/bezier.ts:34](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L34) |
| `firstPoint` | \{ `x`: `x1`; `y`: `y1`; \} | - | [utils/bezier.ts:70](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L70) |
| `firstPoint.x` | `number` | x1 | [utils/bezier.ts:31](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L31) |
| `firstPoint.y` | `number` | y1 | [utils/bezier.ts:31](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L31) |
| `lastControl` | \{ `x`: `number`; `y`: `y2`; \} | - | [utils/bezier.ts:73](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L73) |
| `lastControl.x` | `number` | - | [utils/bezier.ts:35](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L35) |
| `lastControl.y` | `number` | y2 | [utils/bezier.ts:35](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L35) |
| `lastPoint` | \{ `x`: `x2`; `y`: `y2`; \} | - | [utils/bezier.ts:72](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L72) |
| `lastPoint.x` | `number` | x2 | [utils/bezier.ts:32](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L32) |
| `lastPoint.y` | `number` | y2 | [utils/bezier.ts:32](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L32) |

#### Example

```ts
const coordinates = createBezierCurveCoordinates(
  { x1: 0, x2: 100, y1: 0, y2: 100 },
  { direct: true, firstSet: true, direction: 'west' }
);
```

#### Defined in

[utils/bezier.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L25)

***

### getCurlySVGPath()

```ts
function getCurlySVGPath(
   startEl, 
   stopEl, 
options): Promise<string>
```

Generates an SVG path for a curved line between two HTML elements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `startEl` | `HTMLElement` | The starting HTML element. |
| `stopEl` | `HTMLElement` | The ending HTML element. |
| `options` | [`CurlyBezierPathOptionsType`](../types/bezier.md#curlybezierpathoptionstype) | Options for controlling the curved line. |

#### Returns

`Promise`\<`string`\>

The SVG path string for the curved line.

#### Example

```ts
const svgPath = getCurlySVGPath(startElement, stopElement, {
  pos1: 'top',
  pos2: 'bottom',
  firstSet: true,
  direction: 'south',
});
```

#### Defined in

[utils/bezier.ts:95](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L95)

***

### getPositionsForCurlySVGPath()

```ts
function getPositionsForCurlySVGPath(direction): {
  path1pos1: string;
  path1pos2: string;
  path2pos1: string;
  path2pos2: string;
}
```

Returns positions for creating an SVG path for a curved line based on a cardinal direction.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `direction` | `string` | The cardinal direction ('east', 'west', 'south', 'north'). |

#### Returns

```ts
{
  path1pos1: string;
  path1pos2: string;
  path2pos1: string;
  path2pos2: string;
}
```

Positions for creating an SVG path for a curved line.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `path1pos1` | `string` | [utils/bezier.ts:261](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L261) |
| `path1pos2` | `string` | [utils/bezier.ts:262](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L262) |
| `path2pos1` | `string` | [utils/bezier.ts:263](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L263) |
| `path2pos2` | `string` | [utils/bezier.ts:264](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L264) |

#### Example

```ts
const positions = getPositionsForCurlySVGPath('west');
```

#### Defined in

[utils/bezier.ts:226](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L226)

***

### getPositionsForSVGPath()

```ts
function getPositionsForSVGPath(direction): {
  pos1: string;
  pos2: string;
}
```

Returns positions for creating an SVG path based on a cardinal direction.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `direction` | `string` | The cardinal direction ('east', 'west', 'south', 'north'). |

#### Returns

```ts
{
  pos1: string;
  pos2: string;
}
```

Positions for creating an SVG path.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `pos1` | `string` | [utils/bezier.ts:212](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L212) |
| `pos2` | `string` | [utils/bezier.ts:212](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L212) |

#### Example

```ts
const positions = getPositionsForSVGPath('east');
```

#### Defined in

[utils/bezier.ts:188](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L188)

***

### getSVGPath()

```ts
function getSVGPath(
   startEl, 
   stopEl, 
options): Promise<string>
```

Generates an SVG path for a straight line between two HTML elements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `startEl` | `HTMLElement` | The starting HTML element. |
| `stopEl` | `HTMLElement` | The ending HTML element. |
| `options` | [`BezierPathOptionsType`](../types/bezier.md#bezierpathoptionstype) | Options for controlling the straight line. |

#### Returns

`Promise`\<`string`\>

The SVG path string for the straight line.

#### Example

```ts
const svgPath = getSVGPath(startElement, stopElement, {
  pos1: 'left',
  pos2: 'right',
});
```

#### Defined in

[utils/bezier.ts:156](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L156)

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