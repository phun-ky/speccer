<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/dissect/utils/create

# features/dissect/utils/create

> Last updated 2024-08-14T10:46:25.835Z

## Functions

### create()

```ts
function create(textContent, area, id, n): HTMLElement;
```

Create a dissected element with optional text content, area description, and element type.

#### Parameters

| Parameter     | Type     | Default value | Description                             |
| ------------- | -------- | ------------- | --------------------------------------- |
| `textContent` | `string` | `''`          | The text content to add to the element. |
| `area`        | `string` | `undefined`   | The area description for styling.       |
| `id`          | `string` | `''`          | The id of the dissection element        |
| `n`           | `string` | `'span'`      | The element type.                       |

#### Returns

`HTMLElement`

- The created dissected element.

#### Example

```ts
const dissectedElement = create('A', 'outline top', 'div');
document.body.appendChild(dissectedElement);
```

#### Defined in

[features/dissect/utils/create.ts:19](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/create.ts#L19)

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
