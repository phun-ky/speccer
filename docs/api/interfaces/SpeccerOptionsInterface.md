[@phun-ky/speccer](../index.md) / SpeccerOptionsInterface

# Interface: SpeccerOptionsInterface

Defined in:
[types/speccer.ts:122](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L122)

Configuration object that tells Speccer **what** to render and **how** to render
it.

### Feature flags

Only one top-level [type](#type) is active at a time
(`"pin" | "grid" | "mark" | "typography" | "measure" | "spacing"`). The
corresponding nested section (e.g. `pin`, `grid`, `typography`, `measure`,
`spacing`) becomes relevant and other sections are typically omitted.

## Examples

```ts
import type { SpeccerOptionsInterface } from '@phun-ky/speccer';

const options: SpeccerOptionsInterface = {
  slug: 'pinBracketSubtle',
  position: 'left',
  type: 'pin',
  pin: {
    bracket: true,
    enclose: false,
    subtle: true,
    parent: false,
    text: false,
    useSVGLine: true,
    useCurlyBrackets: false
  }
};
```

```ts
const options: SpeccerOptionsInterface = {
  slug: 'measureWidthSlim',
  position: 'bottom',
  type: 'measure',
  measure: {
    slim: true,
    height: false,
    width: true
  }
};
```

```ts
const options: SpeccerOptionsInterface = {
  slug: 'codeSample',
  position: 'right',
  type: 'typography',
  typography: {
    useSyntaxHighlighting: true
  }
};
```

```ts
const marginOnly: SpeccerOptionsInterface = {
  slug: 'spacingMargin',
  position: 'top',
  type: 'spacing',
  spacing: {
    margin: true,
    padding: false,
    both: false,
    bound: false
  }
};

const bothWithBounds: SpeccerOptionsInterface = {
  slug: 'spacingBothBound',
  position: 'top',
  type: 'spacing',
  spacing: {
    margin: false,
    padding: false,
    both: true,
    bound: true
  }
};
```

```ts
const gridBoth: SpeccerOptionsInterface = {
  slug: 'gridBoth',
  position: 'bottom',
  type: 'grid',
  grid: {
    toggle: 'both', // allowed: "rows" | "columns" | "both"
    both: true,
    rows: false,
    columns: false
  }
};

const gridRows: SpeccerOptionsInterface = {
  slug: 'gridRows',
  position: 'bottom',
  type: 'grid',
  grid: {
    toggle: 'rows',
    both: false,
    rows: true,
    columns: false
  }
};
```

## Properties

### grid?

```ts
optional grid: {
  both?: boolean;
  columns?: boolean;
  rows?: boolean;
  toggle: string;
};
```

Defined in:
[types/speccer.ts:247](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L247)

Options for the `"grid"` feature.

#### both?

```ts
optional both: boolean;
```

Convenience flag set when both rows and columns are active.

#### columns?

```ts
optional columns: boolean;
```

Convenience flag set when only columns are active.

#### rows?

```ts
optional rows: boolean;
```

Convenience flag set when only rows are active.

#### toggle

```ts
toggle: string;
```

Controls which grid axes are active.

##### Remarks

Allowed values: `"rows" | "columns" | "both"`.

#### Remarks

Present only when [type](#type) is `"grid"`. `toggle` indicates the primary axis
selection and should be `"rows" | "columns" | "both"`. The convenience flags
(`both`, `rows`, `columns`) mirror the current state for easy checks.

---

### measure?

```ts
optional measure: {
  height: boolean;
  slim: boolean;
  width: boolean;
};
```

Defined in:
[types/speccer.ts:188](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L188)

Options for the `"measure"` feature.

#### height

```ts
height: boolean;
```

Show a vertical measurement (element height).

#### slim

```ts
slim: boolean;
```

Use a compact (thinner) measurement style.

#### width

```ts
width: boolean;
```

Show a horizontal measurement (element width).

#### Remarks

Present only when [type](#type) is `"measure"`. Use `height` and/or `width` to
select the axis to measure; `slim` switches to a compact rendering style for
tight layouts.

---

### pin?

```ts
optional pin: {
  bracket: boolean;
  enclose: boolean;
  parent: boolean;
  subtle: boolean;
  text: boolean;
  useCurlyBrackets: boolean;
  useSVGLine: boolean;
};
```

Defined in:
[types/speccer.ts:157](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L157)

Options for the `"pin"` feature.

#### bracket

```ts
bracket: boolean;
```

Draw bracket-style markers around the pin.

#### enclose

```ts
enclose: boolean;
```

Enclose the pin target (e.g., a boxed/outlined emphasis).

#### parent

```ts
parent: boolean;
```

Indicate that the pin references a parent container/element.

#### subtle

```ts
subtle: boolean;
```

Reduce visual weight for a subtler presentation.

#### text

```ts
text: boolean;
```

Render an inline text label along with the pin.

#### useCurlyBrackets

```ts
useCurlyBrackets: boolean;
```

Use curly brackets for bracketed pins instead of straight brackets.

#### useSVGLine

```ts
useSVGLine: boolean;
```

Use an SVG line primitive instead of a DOM line.

#### Remarks

Present only when [type](#type) is `"pin"`. Each flag toggles a specific pin
decoration or behavior.

---

### position

```ts
position: SpeccerPositionType;
```

Defined in:
[types/speccer.ts:139](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L139)

Preferred anchor side for rendering or label placement.

#### Remarks

Use to hint where visual affordances (e.g., labels, callouts) should appear
relative to the annotated element.

---

### slug

```ts
slug: string;
```

Defined in:
[types/speccer.ts:130](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L130)

Machine-readable identifier for this option set.

#### Remarks

When produced by getOptions, this is derived from the input `areaString` using a
camel-casing strategy (e.g., `"pin bracket subtle"` → `"pinBracketSubtle"`).

---

### spacing?

```ts
optional spacing: {
  both?: boolean;
  bound?: boolean;
  margin?: boolean;
  padding?: boolean;
};
```

Defined in:
[types/speccer.ts:219](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L219)

Options for the `"spacing"` feature.

#### both?

```ts
optional both: boolean;
```

Visualize both margin and padding in a combined overlay.

##### Remarks

Mutually exclusive with `margin` and `padding` where applicable.

#### bound?

```ts
optional bound: boolean;
```

Emphasize the bounding outline of the target in addition to spacing.

##### Remarks

Often used to show the element's overall occupied box.

#### margin?

```ts
optional margin: boolean;
```

Visualize the element's margins.

#### padding?

```ts
optional padding: boolean;
```

Visualize the element's padding.

#### Remarks

Present only when [type](#type) is `"spacing"`. Exactly one of `margin`,
`padding`, or `both` is typically `true`. `bound` can be used to visualize the
outer bound in addition to spacing.

---

### type

```ts
type: SpeccerFeatureType;
```

Defined in:
[types/speccer.ts:148](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L148)

Which Speccer feature this option set activates.

#### Remarks

This field determines which nested section is relevant (`pin`, `grid`, `mark`,
`typography`, `measure`, or `spacing`). Only one feature is active at a time.

---

### typography?

```ts
optional typography: {
  useSyntaxHighlighting: boolean;
};
```

Defined in:
[types/speccer.ts:206](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L206)

Options for the `"typography"` feature.

#### useSyntaxHighlighting

```ts
useSyntaxHighlighting: boolean;
```

Enable syntax highlighting for textual samples.

#### Remarks

Present only when [type](#type) is `"typography"`. Enables code-like styling or
syntax coloring when appropriate.
