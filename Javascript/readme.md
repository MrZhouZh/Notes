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

```js
// 对象使用数组方法, 使用 call/apply 继承 => Array.prototype.method.call
Array.prototype.includes.call(div.classList, 'anchor')  // div.classList 原本没有 includes 方法
```
