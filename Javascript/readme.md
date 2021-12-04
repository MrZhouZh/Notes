# some useful function 

```js
// 任意长度随机字符串
function randomString(len = 32) {
  /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
    maxPos = $chars.length,
    pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
```

## call & apply 妙用

```js
// 对象使用数组方法, 使用 call/apply 继承 => Array.prototype.method.call
Array.prototype.includes.call(div.classList, 'anchor')  // div.classList 原本没有 includes 方法
```

```js
// bad
function log(msg)　{
  console.log(msg);
}
log(1)  // 1
log(2)  // 1
// 在不确定参数的情况下, 这种封装就显得效果低下

// better
function log(...args) {
  console.log.apply(console, args)
}

log(1, 2) // 1 2

// other... add '(app)' suffix
function log(...args) {
  let _args = Array.prototype.slice.call(args)
  _args.unshift('(app)')
  
  console.log.apply(console, _args)
}

log(1, 2) // (app) 1 2
```
