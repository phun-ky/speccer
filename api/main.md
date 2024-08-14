<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](README.md) / main

# main

> Last updated 2024-08-14T10:23:12.577Z

## Examples

```typescript
import '@phun-ky/speccer/dist/speccer.min.css';
import speccer from '@phun-ky/speccer';

// do stuff
speccer();
```

```html
<link rel="stylesheet" href="../path/to/speccer.min.css" />
<script src="../path/to/speccer.js"></script>
```

## Variables

### dissect

```ts
const dissect: {
  create: dissectCreate;
  dissect: _dissect;
  element: dissectElement;
};
```

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`textContent`, `area`, `id`, `n`) => `HTMLElement`

</td>
<td>

dissectCreate

</td>
<td>

[main.ts:58](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L58)

</td>
</tr>
<tr>
<td>

`dissect`

</td>
<td>

(`el`, `symbol`, `areas`?) => `Promise`\<`string` \| `void`\>

</td>
<td>

\_dissect

</td>
<td>

[main.ts:60](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L60)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`sectionEl`) => `Promise`\<`void`\>

</td>
<td>

dissectElement

</td>
<td>

[main.ts:59](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L59)

</td>
</tr>
</table>

#### Defined in

[main.ts:57](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L57)

***

### grid

```ts
const grid: {
  create: gridCreate;
  element: gridElement;
};
```

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`targetElement`, `styles`) => `HTMLDivElement`

</td>
<td>

gridCreate

</td>
<td>

[main.ts:48](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L48)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`) => `Promise`\<`void`\>

</td>
<td>

gridElement

</td>
<td>

[main.ts:49](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L49)

</td>
</tr>
</table>

#### Defined in

[main.ts:47](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L47)

***

### mark

```ts
const mark: {
  create: markCreate;
  element: markElement;
};
```

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`n`) => `HTMLElement`

</td>
<td>

markCreate

</td>
<td>

[main.ts:69](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L69)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`elementToMark`) => `Promise`\<`void`\>

</td>
<td>

markElement

</td>
<td>

[main.ts:70](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L70)

</td>
</tr>
</table>

#### Defined in

[main.ts:68](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L68)

***

### measure

```ts
const measure: {
  create: measureCreate;
  element: measureElement;
};
```

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`text`, `area`, `tag`) => `HTMLElement`

</td>
<td>

measureCreate

</td>
<td>

[main.ts:64](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L64)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetEl`) => `Promise`\<`void`\>

</td>
<td>

measureElement

</td>
<td>

[main.ts:65](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L65)

</td>
</tr>
</table>

#### Defined in

[main.ts:63](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L63)

***

### modes

```ts
const modes: {
  activate: (speccer) => void;
  dom: (speccer) => void;
  lazy: () => void;
  manual: (speccer) => void;
};
```

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`activate`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

[main.ts:82](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L82)

</td>
</tr>
<tr>
<td>

`dom`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

[main.ts:79](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L79)

</td>
</tr>
<tr>
<td>

`lazy`

</td>
<td>

() => `void`

</td>
<td>

[main.ts:80](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L80)

</td>
</tr>
<tr>
<td>

`manual`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

[main.ts:81](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L81)

</td>
</tr>
</table>

#### Defined in

[main.ts:78](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L78)

***

### spacing

```ts
const spacing: {
  create: spacingCreate;
  element: spacingElement;
};
```

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`text`, `tag`) => `HTMLElement`

</td>
<td>

spacingCreate

</td>
<td>

[main.ts:53](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L53)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetEl`) => `Promise`\<`void`\>

</td>
<td>

spacingElement

</td>
<td>

[main.ts:54](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L54)

</td>
</tr>
</table>

#### Defined in

[main.ts:52](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L52)

***

### typography

```ts
const typography: {
  create: typographyCreate;
  element: typographyElement;
};
```

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`html`, `area`) => `HTMLElement`

</td>
<td>

typographyCreate

</td>
<td>

[main.ts:74](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L74)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetEl`) => `Promise`\<`void`\>

</td>
<td>

typographyElement

</td>
<td>

[main.ts:75](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L75)

</td>
</tr>
</table>

#### Defined in

[main.ts:73](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L73)

## Functions

### default()

```ts
function default(): void
```

#### Returns

`void`

#### Defined in

[main.ts:85](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L85)

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
