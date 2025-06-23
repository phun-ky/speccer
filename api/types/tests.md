<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / types/tests

# types/tests

> Last updated 2025-06-23T11:51:18.777Z

## Type Aliases

### AnyFunction()

```ts
type AnyFunction = (...args) => any;
```

Defined in:
[src/types/tests.ts:2](https://github.com/phun-ky/speccer/blob/main/src/types/tests.ts#L2)

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| ...`args` | `any`\[] |

#### Returns

`any`

---

### MockedFunction\<T>

```ts
type MockedFunction<T> = T & {
  mock?: {
    calls: Call[];
  };
};
```

Defined in:
[src/types/tests.ts:11](https://github.com/phun-ky/speccer/blob/main/src/types/tests.ts#L11)

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`mock?`

</td>
<td>

{ `calls`: `Call`\[]; }

</td>
<td>

[src/types/tests.ts:12](https://github.com/phun-ky/speccer/blob/main/src/types/tests.ts#L12)

</td>
</tr>
<tr>
<td>

`mock.calls`

</td>
<td>

`Call`\[]

</td>
<td>

[src/types/tests.ts:12](https://github.com/phun-ky/speccer/blob/main/src/types/tests.ts#L12)

</td>
</tr>
</tbody>
</table>

#### Type Parameters

| Type Parameter                              |
| ------------------------------------------- |
| `T` _extends_ [`AnyFunction`](#anyfunction) |

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
