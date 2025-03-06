<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/direction-of-element

# utils/direction-of-element

> Last updated 2025-03-06T09:34:26.624Z

## Table of Contents

- [Functions](#functions)
  - [direction_of_element()](#direction_of_element)

## Functions

### direction_of_element()

```ts
function direction_of_element(options): Promise<string>;
```

Defined in:
[src/utils/direction-of-element.ts:21](https://github.com/phun-ky/speccer/blob/main/src/utils/direction-of-element.ts#L21)

Get the direction of an element based on its position relative to another
element.

#### Parameters

| Parameter        | Type                                                                                                                                                                                        | Description                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `options`        | \{ `crude`: `boolean`; `start`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement); `stop`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement); } | Options for direction calculation.                    |
| `options.crude`? | `boolean`                                                                                                                                                                                   | If the direction should be calculated crudely (NSEW). |
| `options.start`  | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)                                                                                                                     | The starting HTML element.                            |
| `options.stop`   | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)                                                                                                                     | The stopping HTML element.                            |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`>

- The calculated direction.

#### Example

```ts
// Get the direction of one element relative to another
const startElement = document.getElementById('startElement');
const stopElement = document.getElementById('stopElement');
const direction = await direction_of_element({
  start: startElement,
  stop: stopElement
});
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
