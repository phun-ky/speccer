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

[main.ts:31](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L31)

___

### mark

• `Const` **mark**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`n`: `string`) => `HTMLElement` |
| `element` | (`elementToMark`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:41](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L41)

___

### measure

• `Const` **measure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`text`: `string` \| `number`, `area`: ``null`` \| `string`, `tag`: `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:36](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L36)

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

[main.ts:51](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L51)

___

### spacing

• `Const` **spacing**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`text`: `string` \| `number`, `tag`: `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:26](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L26)

___

### typography

• `Const` **typography**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`html`: `string`, `area`: ``null`` \| `string`) => `HTMLElement` |
| `element` | (`targetEl`: `HTMLElement`) => `Promise`\<`void`\> |

#### Defined in

[main.ts:46](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L46)

## Functions

### default

▸ **default**(): `void`

#### Returns

`void`

#### Defined in

[main.ts:58](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L58)
