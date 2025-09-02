<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / types/bezier

# types/bezier

> Last updated 2025-09-02T16:39:27.415Z

## Type Aliases

### BezierPathOptionsType

```ts
type BezierPathOptionsType = {
  pos1: string;
  pos2: string;
};
```

Defined in:
[src/types/bezier.ts:29](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L29)

Options for creating a bezier path.

#### Properties

##### pos1

```ts
pos1: string;
```

Defined in:
[src/types/bezier.ts:33](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L33)

The first position.

##### pos2

```ts
pos2: string;
```

Defined in:
[src/types/bezier.ts:38](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L38)

The second position.

---

### CoordinatesForBezierObjectType

```ts
type CoordinatesForBezierObjectType = {
  firstControl: CoordinatesType;
  firstPoint: CoordinatesType;
  lastControl: CoordinatesType;
  lastPoint: CoordinatesType;
};
```

Defined in:
[src/types/bezier.ts:46](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L46)

#### Properties

##### firstControl

```ts
firstControl: CoordinatesType;
```

Defined in:
[src/types/bezier.ts:48](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L48)

##### firstPoint

```ts
firstPoint: CoordinatesType;
```

Defined in:
[src/types/bezier.ts:47](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L47)

##### lastControl

```ts
lastControl: CoordinatesType;
```

Defined in:
[src/types/bezier.ts:50](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L50)

##### lastPoint

```ts
lastPoint: CoordinatesType;
```

Defined in:
[src/types/bezier.ts:49](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L49)

---

### CreateCoordinatesForCurveCoordParamType

```ts
type CreateCoordinatesForCurveCoordParamType = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
```

Defined in:
[src/types/bezier.ts:56](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L56)

Parameters for creating coordinates for a curve.

#### Properties

##### x1

```ts
x1: number;
```

Defined in:
[src/types/bezier.ts:60](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L60)

The x-coordinate of the first point.

##### x2

```ts
x2: number;
```

Defined in:
[src/types/bezier.ts:65](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L65)

The x-coordinate of the second point.

##### y1

```ts
y1: number;
```

Defined in:
[src/types/bezier.ts:70](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L70)

The y-coordinate of the first point.

##### y2

```ts
y2: number;
```

Defined in:
[src/types/bezier.ts:75](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L75)

The y-coordinate of the second point.

---

### CreateCoordinatesForCurveOptionsParamType

```ts
type CreateCoordinatesForCurveOptionsParamType = {
  direct?: boolean;
  direction: string;
  firstSet?: boolean;
};
```

Defined in:
[src/types/bezier.ts:81](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L81)

Options for creating coordinates for a curve.

#### Properties

##### direct?

```ts
optional direct: boolean;
```

Defined in:
[src/types/bezier.ts:85](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L85)

Indicates whether the curve is direct.

##### direction

```ts
direction: string;
```

Defined in:
[src/types/bezier.ts:95](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L95)

The direction of the curve.

##### firstSet?

```ts
optional firstSet: boolean;
```

Defined in:
[src/types/bezier.ts:90](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L90)

Indicates if this is the first set of coordinates.

---

### CurlyBezierPathOptionsType

```ts
type CurlyBezierPathOptionsType = {
  direction: string;
  firstSet?: boolean;
  pos1: string;
  pos2: string;
};
```

Defined in:
[src/types/bezier.ts:4](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L4)

Options for creating a curly bezier path.

#### Properties

##### direction

```ts
direction: string;
```

Defined in:
[src/types/bezier.ts:23](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L23)

The direction of the path.

##### firstSet?

```ts
optional firstSet: boolean;
```

Defined in:
[src/types/bezier.ts:18](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L18)

Indicates if this is the first part of the curly bracket or not.

##### pos1

```ts
pos1: string;
```

Defined in:
[src/types/bezier.ts:8](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L8)

The first position.

##### pos2

```ts
pos2: string;
```

Defined in:
[src/types/bezier.ts:13](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L13)

The second position.

---

**Contributing**

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help
get rid of secondary activities and to enhance systems already in place, be it
documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to
maintain my projects, create new ones and contribute to the large community
we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net)
is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
