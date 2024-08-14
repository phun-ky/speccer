[**@phun-ky/speccer**](README.md) • **Docs**

***

[@phun-ky/speccer](README.md) / main

# main

![Speccer hero, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-hero.png?raw=true)
SPECCER, a zero dependency package to highlight elements

## See

 - https://phun-ky.net/projects/speccer/
 - https://github.com/phun-ky/speccer

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

> `const` **dissect**: `object`

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

[main.ts:62](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L62)

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

[main.ts:64](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L64)

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

[main.ts:63](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L63)

</td>
</tr>
</table>

#### Defined in

[main.ts:61](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L61)

***

### grid

> `const` **grid**: `object`

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

[main.ts:52](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L52)

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

[main.ts:53](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L53)

</td>
</tr>
</table>

#### Defined in

[main.ts:51](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L51)

***

### mark

> `const` **mark**: `object`

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

[main.ts:73](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L73)

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

[main.ts:74](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L74)

</td>
</tr>
</table>

#### Defined in

[main.ts:72](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L72)

***

### measure

> `const` **measure**: `object`

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

[main.ts:68](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L68)

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

[main.ts:69](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L69)

</td>
</tr>
</table>

#### Defined in

[main.ts:67](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L67)

***

### modes

> `const` **modes**: `object`

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

[main.ts:86](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L86)

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

[main.ts:83](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L83)

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

[main.ts:84](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L84)

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

[main.ts:85](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L85)

</td>
</tr>
</table>

#### Defined in

[main.ts:82](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L82)

***

### spacing

> `const` **spacing**: `object`

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

[main.ts:57](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L57)

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

[main.ts:58](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L58)

</td>
</tr>
</table>

#### Defined in

[main.ts:56](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L56)

***

### typography

> `const` **typography**: `object`

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

[main.ts:78](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L78)

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

[main.ts:79](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L79)

</td>
</tr>
</table>

#### Defined in

[main.ts:77](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L77)

## Functions

### default()

> **default**(): `void`

#### Returns

`void`

#### Defined in

[main.ts:89](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L89)
