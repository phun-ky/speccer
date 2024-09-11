<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/classnames

# utils/classnames

> Last updated 2024-09-08T20:24:15.667Z

## Functions

### cx()

```ts
function cx(cls, cls_obj?): string;
```

Combines class names and optional properties object into a single string of class names.

The `cx` function takes two parameters: `cls` and `cls_obj`.
The `cls` parameter can be either a string representing class names or an object with
properties set to `true` or `false`. The `cls_obj` parameter is an optional object with
properties set to `true` or `false`, allowing for conditional inclusion of class names.

#### Parameters

| Parameter  | Type                                                                                   | Description                                                                                   |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cls`      | [`ClassNamesFirstArgType`](../types/interfaces/classnames.md#classnamesfirstargtype)   | The class names as a string or an object with properties set to true or false.                |
| `cls_obj`? | [`ClassNamesSecondArgType`](../types/interfaces/classnames.md#classnamessecondargtype) | An optional object with properties set to true or false to conditionally include class names. |

#### Returns

`string`

- Returns a single string containing the combined class names.

#### Example

```ts
// Generate CSS classes from a string and an object
const classNames = cx('class1', { class2: true, class3: false });
console.log(classNames); // Example output: 'class1 class2'
```

#### Defined in

[utils/classnames.ts:108](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L108)

---

### remove()

```ts
function remove(el, cls, avoid?): void;
```

Remove CSS classes from an HTML element.

#### Parameters

| Parameter | Type                                                                    | Default value | Description                                            |
| --------- | ----------------------------------------------------------------------- | ------------- | ------------------------------------------------------ |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | `undefined`   | The HTML element from which classes should be removed. |
| `cls`     | `string`                                                                | `undefined`   | The CSS classes to remove, separated by spaces.        |
| `avoid`?  | `string`                                                                | `'noop'`      | Classes to avoid removing.                             |

#### Returns

`void`

#### Example

```ts
// Remove classes from an HTML element
const element = document.getElementById('example');
remove(element, 'class1 class2');
```

#### Defined in

[utils/classnames.ts:77](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L77)

---

### set()

```ts
function set(el, cls, avoid?): void;
```

Add CSS classes to an HTML element.

#### Parameters

| Parameter | Type                                                                    | Default value | Description                                        |
| --------- | ----------------------------------------------------------------------- | ------------- | -------------------------------------------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | `undefined`   | The HTML element to which classes should be added. |
| `cls`     | `string`                                                                | `undefined`   | The CSS classes to add, separated by spaces.       |
| `avoid`?  | `string`                                                                | `'noop'`      | Classes to avoid adding.                           |

#### Returns

`void`

#### Example

```ts
// Add classes to an HTML element
const element = document.getElementById('example');
set(element, 'class1 class2');
```

#### Defined in

[utils/classnames.ts:23](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L23)

---

### toggle()

```ts
function toggle(el, cls, avoid?): void;
```

Toggle CSS classes on an HTML element.

#### Parameters

| Parameter | Type                                                                    | Default value | Description                                          |
| --------- | ----------------------------------------------------------------------- | ------------- | ---------------------------------------------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | `undefined`   | The HTML element on which classes should be toggled. |
| `cls`     | `string`                                                                | `undefined`   | The CSS classes to toggle, separated by spaces.      |
| `avoid`?  | `string`                                                                | `'noop'`      | Classes to avoid toggling.                           |

#### Returns

`void`

#### Example

```ts
// Toggle classes on an HTML element
const element = document.getElementById('example');
toggle(element, 'class1 class2');
```

#### Defined in

[utils/classnames.ts:50](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L50)

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
