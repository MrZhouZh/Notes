---
title: TypeScript 练习
tag: TypeScript
categories: FrontEnd
---

## 实现 Camel 类型

实现字符串首字母大写类型

```
type A = CamelCase<'big_front_end'> // BigFrontEnd
```

实现:

```ts
type CamelCase<S extends string> =
  S extends `${infer Left}_${infer Rest}`
    ? `${Left}${CamelCaseStr<Capitalize<Rest>>}`
    : S

type Str = CamelCaseStr<'big_front_end'>; // output => 'BigFrontEnd'
```

### 进阶复杂声明

实现:

```ts
type Camel<T> = T extends any
  ? {
    [K in keyof T as CamelCase<K & string>] :
      T[K] extends Array<infer Ele>
        ? Array<CamelCase<Ele & string>>
        : T[K] extends Record<string, any>
          ? Camel<T[K]>
          : T[K]
  }
  : never;

type res = Camel<{
  aa: string;
  bb: Array<'aa_abc' | 'bb_cc'>;
  cc_Dd: {
    ee_ff: string;
  };
}>

// output
// type res = {
//     aa: string;
//     bb: ("aaAbc" | "bbCc")[];
//     ccDd: {
//         eeFf: string;
//     };
// }

```
