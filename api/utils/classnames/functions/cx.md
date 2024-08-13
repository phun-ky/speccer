[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/classnames](../README.md) / cx

# Function: cx()

> **cx**(`cls`, `cls_obj`?): `string`

Combines class names and optional properties object into a single string of class names.

The `cx` function takes two parameters: `cls` and `cls_obj`.
The `cls` parameter can be either a string representing class names or an object with
properties set to `true` or `false`. The `cls_obj` parameter is an optional object with
 properties set to `true` or `false`, allowing for conditional inclusion of class names.

## Parameters

• **cls**: [`ClassNamesFirstArgType`](../../../types/interfaces/classnames/type-aliases/ClassNamesFirstArgType.md)

The class names as a string or an object with properties set to true or false.

• **cls\_obj?**: [`ClassNamesSecondArgType`](../../../types/interfaces/classnames/type-aliases/ClassNamesSecondArgType.md)

An optional object with properties set to true or false to conditionally include class names.

## Returns

`string`

- Returns a single string containing the combined class names.

## Example

```ts
// Generate CSS classes from a string and an object
const classNames = cx('class1', { class2: true, class3: false });
console.log(classNames); // Example output: 'class1 class2'
```

## Defined in

[utils/classnames.ts:105](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L105)
