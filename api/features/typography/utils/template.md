<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../../README.md) / features/typography/utils/template

# features/typography/utils/template

> Last updated 2025-08-26T17:21:41.285Z

## Functions

### template()

```ts
function template(targetElement, useHighlighting?): Promise<string>;
```

Defined in:
[src/features/typography/utils/template.ts:20](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/template.ts#L20)

Generate a HTML string for typography styles of a target element.

#### Parameters

| Parameter          | Type                                                                    | Default value | Description                                                 |
| ------------------ | ----------------------------------------------------------------------- | ------------- | ----------------------------------------------------------- |
| `targetElement`    | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | `undefined`   | The target element for which to generate typography styles. |
| `useHighlighting?` | `boolean`                                                               | `false`       | If we should use highlighting markup                        |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`>

- A promise that resolves with the HTML string.

#### Example

```ts
const targetElement = document.getElementById('target');
const typographyStyles = await template(targetElement, true);
console.log(typographyStyles);
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
