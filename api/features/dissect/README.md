[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / features/dissect

# features/dissect

This feature highlights the anatomy of an element.

![dissect](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)

In your component examples, use the following attribute. Remember to use the `data-anatomy-section` as an attribute on a parent element to scope the marking.

## Example

```html
<div data-anatomy-section>
  <div
    data-anatomy="outline [full|enclose][curly] [left|right|top|bottom]"
    class="..."
  ></div>
</div>
```

## Index

### Functions

- [element](functions/element.md)

## References

### create

Re-exports [create](utils/create/functions/create.md)

***

### dissect

Re-exports [dissect](utils/dissect/functions/dissect.md)
