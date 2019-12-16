# 记录简洁代码

[返回首页](./README.md)

## Compose

顾名思义, 在函数式编程中, Compose 就是将几个有特点的函数拼凑在一块, 结合产生新的函数:

```js
// 两个函数的情况下, 可以这么简写
const compose = (f, g) => (...arg) => f(g(...arg))

// 摘自 https://github.com/reduxjs/redux/blob/master/src/compose.ts
export default function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}
```

demo:

```js
let toUpperCase = (x) => x.toUpperCase()
let exClaim = (x) => x + '!'
let shout = compose(toUpperCase, exClaim)
shout('hello world') // HELLO WORLD! 
```

## Pointfree 模式

[摘自](https://www.ruanyifeng.com/blog/2017/03/pointfree.html)

> 不使用所要处理的值，只合成运算过程。中文可以译作"无值"风格。

demo:

```js
let addOne = x => x + 1
let square = x => x * x;
let addOneThenSquare = compose(addOne, square)
addOneThenSquare(2) // 9
```
