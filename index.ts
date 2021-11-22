const obj = {
    hello: 'გამარჯობა',
    world: 'სამყარო',

}

type Tr = typeof obj

export function trans<T extends keyof Tr, O extends Tr[T]>(key: T): O {
    return obj[key] as O
}

type CustomPartial<Type> = {
    [Key in keyof Type]?: Type[Key]
}

interface Person {
    name: string;
    age: number
}

type Required<Type> = {
    [Key in keyof Type]-?: Type[Key]
}


type Readonly<Type> = {
    readonly [Key in keyof Type]: Type[Key]
}
type Record<Keys extends string | number | symbol, Type> = {
    [Key in Keys]: Type
}

type NonNullable<Type> = Type extends null | undefined ? never : Type

type Exclude<Type, ExcludedUnion> = Type extends ExcludedUnion ? never : Type

type Extract<Type, Union> = Type extends Union ? Type : never

type Pick<Type, Keys extends keyof Type> = {
    [Key in Keys]: Type[Key]
}

type Omit<Type, Keys extends keyof Type> = Pick<Type, Exclude<keyof Type, Keys>>