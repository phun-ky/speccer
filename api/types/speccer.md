<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / types/speccer

# types/speccer

> Last updated 2025-08-12T10:06:52.029Z

## Interfaces

### SpeccerOptionsInterface

Defined in:
[src/types/speccer.ts:13](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L13)

#### Properties

| Property                              | Type                                                                                                                                                                 | Defined in                                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <a id="grid"></a> `grid?`             | { `both?`: `boolean`; `columns?`: `boolean`; `rows?`: `boolean`; `toggle`: `string`; }                                                                               | [src/types/speccer.ts:40](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L40) |
| `grid.both?`                          | `boolean`                                                                                                                                                            | [src/types/speccer.ts:42](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L42) |
| `grid.columns?`                       | `boolean`                                                                                                                                                            | [src/types/speccer.ts:44](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L44) |
| `grid.rows?`                          | `boolean`                                                                                                                                                            | [src/types/speccer.ts:43](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L43) |
| `grid.toggle`                         | `string`                                                                                                                                                             | [src/types/speccer.ts:41](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L41) |
| <a id="measure"></a> `measure?`       | { `height`: `boolean`; `slim`: `boolean`; `width`: `boolean`; }                                                                                                      | [src/types/speccer.ts:26](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L26) |
| `measure.height`                      | `boolean`                                                                                                                                                            | [src/types/speccer.ts:28](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L28) |
| `measure.slim`                        | `boolean`                                                                                                                                                            | [src/types/speccer.ts:27](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L27) |
| `measure.width`                       | `boolean`                                                                                                                                                            | [src/types/speccer.ts:29](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L29) |
| <a id="pin"></a> `pin?`               | { `bracket`: `boolean`; `enclose`: `boolean`; `parent`: `boolean`; `subtle`: `boolean`; `text`: `boolean`; `useCurlyBrackets`: `boolean`; `useSVGLine`: `boolean`; } | [src/types/speccer.ts:17](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L17) |
| `pin.bracket`                         | `boolean`                                                                                                                                                            | [src/types/speccer.ts:18](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L18) |
| `pin.enclose`                         | `boolean`                                                                                                                                                            | [src/types/speccer.ts:19](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L19) |
| `pin.parent`                          | `boolean`                                                                                                                                                            | [src/types/speccer.ts:21](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L21) |
| `pin.subtle`                          | `boolean`                                                                                                                                                            | [src/types/speccer.ts:20](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L20) |
| `pin.text`                            | `boolean`                                                                                                                                                            | [src/types/speccer.ts:22](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L22) |
| `pin.useCurlyBrackets`                | `boolean`                                                                                                                                                            | [src/types/speccer.ts:24](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L24) |
| `pin.useSVGLine`                      | `boolean`                                                                                                                                                            | [src/types/speccer.ts:23](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L23) |
| <a id="position"></a> `position`      | [`SpeccerPositionType`](#speccerpositiontype)                                                                                                                        | [src/types/speccer.ts:15](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L15) |
| <a id="slug"></a> `slug`              | `string`                                                                                                                                                             | [src/types/speccer.ts:14](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L14) |
| <a id="spacing"></a> `spacing?`       | { `both?`: `boolean`; `bound?`: `boolean`; `margin?`: `boolean`; `padding?`: `boolean`; }                                                                            | [src/types/speccer.ts:34](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L34) |
| `spacing.both?`                       | `boolean`                                                                                                                                                            | [src/types/speccer.ts:37](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L37) |
| `spacing.bound?`                      | `boolean`                                                                                                                                                            | [src/types/speccer.ts:38](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L38) |
| `spacing.margin?`                     | `boolean`                                                                                                                                                            | [src/types/speccer.ts:35](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L35) |
| `spacing.padding?`                    | `boolean`                                                                                                                                                            | [src/types/speccer.ts:36](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L36) |
| <a id="type"></a> `type`              | [`SpeccerFeatureType`](#speccerfeaturetype)                                                                                                                          | [src/types/speccer.ts:16](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L16) |
| <a id="typography"></a> `typography?` | { `useSyntaxHighlighting`: `boolean`; }                                                                                                                              | [src/types/speccer.ts:31](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L31) |
| `typography.useSyntaxHighlighting`    | `boolean`                                                                                                                                                            | [src/types/speccer.ts:32](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L32) |

## Type Aliases

### SpeccerFeatureType

```ts
type SpeccerFeatureType =
  | 'pin'
  | 'grid'
  | 'mark'
  | 'typography'
  | 'measure'
  | 'spacing';
```

Defined in:
[src/types/speccer.ts:3](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L3)

---

### SpeccerFunctionType()

```ts
type SpeccerFunctionType = () => void;
```

Defined in:
[src/types/speccer.ts:1](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L1)

#### Returns

`void`

---

### SpeccerPositionType

```ts
type SpeccerPositionType = 'top' | 'left' | 'right' | 'bottom';
```

Defined in:
[src/types/speccer.ts:11](https://github.com/phun-ky/speccer/blob/main/src/types/speccer.ts#L11)

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
