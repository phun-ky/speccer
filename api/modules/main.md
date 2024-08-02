[@phun-ky/speccer](../README.md) / main

# Module: main

## Variables

### dissect

• `Const` **dissect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`textContent`: `string`, `area`: `string`, `n`: `string`) => `HTMLElement` |
| `element` | (`sectionEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:40](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L40)

___

### grid

• `Const` **grid**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`targetElement`: `HTMLElement`, `styles`: `CSSStyleDeclaration`) => `HTMLDivElement` |
| `element` | (`targetElement`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:30](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L30)

___

### mark

• `Const` **mark**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`n`: `string`) => `HTMLElement` |
| `element` | (`elementToMark`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:50](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L50)

___

### measure

• `Const` **measure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`text`: `string` \| `number`, `area`: ``null`` \| `string`, `tag`: `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:45](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L45)

___

### modes

• `Const` **modes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activate` | (`speccer`: [`SpeccerFunctionType`](types_speccer.md#speccerfunctiontype)) => `void` |
| `dom` | (`speccer`: [`SpeccerFunctionType`](types_speccer.md#speccerfunctiontype)) => `void` |
| `lazy` | () => `void` |
| `manual` | (`speccer`: [`SpeccerFunctionType`](types_speccer.md#speccerfunctiontype)) => `void` |

#### Defined in

[main.ts:60](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L60)

___

### spacing

• `Const` **spacing**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`text`: `string` \| `number`, `tag`: `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:35](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L35)

___

### typography

• `Const` **typography**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`html`: `string`, `area`: ``null`` \| `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:55](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L55)

## Functions

### default

▸ **default**(): `void`

#### Returns

`void`

#### Defined in

[main.ts:67](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L67)
