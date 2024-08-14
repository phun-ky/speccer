<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/debounce

# utils/debounce

> Last updated 2024-08-14T10:18:52.255Z

## Functions

### default()

```ts
function default(
   func, 
   wait, 
   immediate?): DebounceAnyFunctionType
```

Creates a debounced version of a function that delays its execution until after a specified waiting time has elapsed since the last time the debounced function was invoked.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `func` | [`DebounceAnyFunctionType`](../types/debounce.md#debounceanyfunctiontype) | `undefined` | The function to debounce. |
| `wait` | `number` | `undefined` | The number of milliseconds to wait before invoking the function after the last call. |
| `immediate`? | `boolean` | `false` | If `true`, the function is invoked immediately after the first call. |

#### Returns

[`DebounceAnyFunctionType`](../types/debounce.md#debounceanyfunctiontype)

- The debounced function.

#### Example

```ts
// Create a debounced function
const debouncedFn = debounce((value) => {
  console.log(value);
}, 500);

// Call the debounced function
debouncedFn('Hello'); // This will not trigger immediate execution
debouncedFn('World'); // This will trigger immediate execution
```

#### Defined in

[utils/debounce.ts:24](https://github.com/phun-ky/speccer/blob/main/src/utils/debounce.ts#L24)

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
