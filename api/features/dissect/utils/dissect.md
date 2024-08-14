<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/dissect/utils/dissect

# features/dissect/utils/dissect

> Last updated 2024-08-14T10:42:54.220Z

## Functions

### dissect()

```ts
function dissect(el, symbol, areas?): Promise<string | void>;
```

Create and style the dissection element as needed.

This function appends a new dissection element to the document body based on the anatomy data attribute
of the target element. It handles different styles, such as curly brackets or lines, based on the anatomy type.

#### Parameters

| Parameter | Type          | Default value | Description                                                                        |
| --------- | ------------- | ------------- | ---------------------------------------------------------------------------------- |
| `el`      | `HTMLElement` | `undefined`   | The target element that contains the anatomy data.                                 |
| `symbol`  | `string`      | `undefined`   | The symbol to use.                                                                 |
| `areas`?  | `string`      | `''`          | Optional areas to use if not \[data-anatomy] is set as an attribute on the element |

#### Returns

`Promise`\<`string` | `void`>

A promise that resolves to the id of the dissection element when the dissection is completed, or `void` if required input is invalid.

#### Example

```ts
const element = document.getElementById('target');
const symbol = 0;
dissect(element, symbol).then(() => {
  console.log('Dissection completed');
});
```

#### Defined in

[features/dissect/utils/dissect.ts:34](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/dissect.ts#L34)

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
