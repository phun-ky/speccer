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

[main.ts:29](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L29)

___

### mark

• `Const` **mark**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`n`: `string`) => `HTMLElement` |
| `element` | (`elementToMark`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:39](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L39)

___

### measure

• `Const` **measure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`text`: `string` \| `number`, `area`: ``null`` \| `string`, `tag`: `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:34](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L34)

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

[main.ts:49](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L49)

___

### spacing

• `Const` **spacing**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`text`: `string` \| `number`, `tag`: `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:24](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L24)

___

### typography

• `Const` **typography**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`html`: `string`, `area`: ``null`` \| `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:44](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L44)

## Functions

### default

▸ **default**(): `void`

#### Returns

`void`

#### Defined in

[main.ts:56](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L56)
