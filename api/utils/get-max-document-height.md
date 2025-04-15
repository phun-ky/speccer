<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/get-max-document-height

# utils/get-max-document-height

> Last updated 2025-04-15T06:57:05.327Z

## Table of Contents

- [Functions](#functions)
  - [getMaxDocumentHeight()](#getmaxdocumentheight)

## Functions

### getMaxDocumentHeight()

```ts
function getMaxDocumentHeight(): number;
```

Defined in:
[src/utils/get-max-document-height.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/get-max-document-height.ts#L14)

Retrieves the maximum document height.

This function calculates the maximum height of the document by considering
various properties of both the `<body>` and `<html>` elements.

#### Returns

`number`

The maximum height of the document in pixels.

#### Example

```ts
console.log(getMaxDocumentHeight()); // Output: Maximum height of the document (in pixels)
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
