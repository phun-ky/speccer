<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/constants

# utils/constants

> Last updated 2025-06-24T06:59:58.566Z

## Variables

### SPECCER_DATA_ATTRIBUTE

```ts
const SPECCER_DATA_ATTRIBUTE: 'data-speccer' = 'data-speccer';
```

Defined in:
[src/utils/constants.ts:108](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L108)

The name of the attribute speccer uses to identify elements to spec

---

### SPECCER_DEFAULT_LINE_WIDTH

```ts
const SPECCER_DEFAULT_LINE_WIDTH: 1 = 1;
```

Defined in:
[src/utils/constants.ts:102](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L102)

Default line width value.

#### Example

```ts
// Access the default line width value
const defaultLineWidth = SPECCER_DEFAULT_LINE_WIDTH;
console.log(defaultLineWidth); // Example output: 1
```

---

### SPECCER_DEFAULT_MEASURE_SIZE

```ts
const SPECCER_DEFAULT_MEASURE_SIZE: 8 = 8;
```

Defined in:
[src/utils/constants.ts:75](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L75)

Default value for measure size.

#### Example

```ts
// Access the default measure size value
const defaultMeasureSize = SPECCER_DEFAULT_MEASURE_SIZE;
console.log(defaultMeasureSize); // Example output: 8
```

---

### SPECCER_DEFAULT_MEASURE_SIZE_NEG

```ts
const SPECCER_DEFAULT_MEASURE_SIZE_NEG: number;
```

Defined in:
[src/utils/constants.ts:88](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L88)

Negative default value for measure size.

#### Example

```ts
// Access the negative default measure size value
const negativeDefaultMeasureSize = SPECCER_DEFAULT_MEASURE_SIZE_NEG;
console.log(negativeDefaultMeasureSize); // Example output: -8
```

---

### SPECCER_DEFAULT_PIN_SPACE

```ts
const SPECCER_DEFAULT_PIN_SPACE: 48 = 48;
```

Defined in:
[src/utils/constants.ts:47](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L47)

Default value for pin space.

#### Example

```ts
// Access the default pin space value
const defaultPinSpace = SPECCER_DEFAULT_PIN_SPACE;
console.log(defaultPinSpace); // Example output: 48
```

---

### SPECCER_DEFAULT_PIN_SPACE_NEG

```ts
const SPECCER_DEFAULT_PIN_SPACE_NEG: number;
```

Defined in:
[src/utils/constants.ts:61](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L61)

Negative default value for pin space.

#### Example

```ts
// Access the negative default pin space value
const negativeDefaultPinSpace = SPECCER_DEFAULT_PIN_SPACE_NEG;
console.log(negativeDefaultPinSpace); // Example output: -48
```

---

### SPECCER_FEATURE_GRID

```ts
const SPECCER_FEATURE_GRID: 'grid' = 'grid';
```

Defined in:
[src/utils/constants.ts:138](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L138)

The selector for the `grid` feature

---

### SPECCER_FEATURE_MARK

```ts
const SPECCER_FEATURE_MARK: 'mark' = 'mark';
```

Defined in:
[src/utils/constants.ts:132](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L132)

The selector for the `mark` feature

---

### SPECCER_FEATURE_MEASURE

```ts
const SPECCER_FEATURE_MEASURE: 'measure' = 'measure';
```

Defined in:
[src/utils/constants.ts:120](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L120)

The selector for the `measure` feature

---

### SPECCER_FEATURE_PIN_AREA

```ts
const SPECCER_FEATURE_PIN_AREA: 'pin-area' = 'pin-area';
```

Defined in:
[src/utils/constants.ts:144](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L144)

The selector for the container of the `pin` feature

---

### SPECCER_FEATURE_SPACING

```ts
const SPECCER_FEATURE_SPACING: 'spacing' = 'spacing';
```

Defined in:
[src/utils/constants.ts:114](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L114)

The selector for the `spacing` feature

---

### SPECCER_FEATURE_TYPOGRAPHY

```ts
const SPECCER_FEATURE_TYPOGRAPHY: 'typography' = 'typography';
```

Defined in:
[src/utils/constants.ts:126](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L126)

The selector for the `typography` feature

---

### SPECCER_LITERALS

```ts
const SPECCER_LITERALS: string[];
```

Defined in:
[src/utils/constants.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L13)

Array of uppercase letters.

#### Example

```ts
// Access the array of uppercase letters
const letters = SPECCER_LITERALS;
console.log(letters); // Example output: ['A', 'B', 'C', ...]
```

---

### SPECCER_TAGS_TO_AVOID

```ts
const SPECCER_TAGS_TO_AVOID: string[];
```

Defined in:
[src/utils/constants.ts:27](https://github.com/phun-ky/speccer/blob/main/src/utils/constants.ts#L27)

Array of HTML tags to avoid when processing.

#### Example

```ts
// Access the array of tags to avoid
const tagsToAvoid = SPECCER_TAGS_TO_AVOID;
console.log(tagsToAvoid); // Example output: ['TR', 'TH', 'TD', ...]
```

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
