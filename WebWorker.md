# Web Worker

资料参考[阮一峰老师](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

[返回首页](./README.md)

[前言](#前言) | [基本用法](#基本用法) | [API](#api)

## 前言

> JavaScript 语言采用的是单线程模型，也就是说，所有任务只能在一个线程上完成，一次只能做一件事。前面的任务没做完，后面的任务只能等着。随着电脑计算能力的增强，尤其是多核 CPU 的出现，单线程带来很大的不便，无法充分发挥计算机的计算能力。

Web Worker 的作用就是为 Javascript 创造多线程环境, 允许主线程创建 Worker 线程

## 基本用法

### 主线程

```js
var worker = new Worker('work.js')

// postMessage
worker.postMessage({
  cmd: 'start',
  msg: 'Hello World!'
})

// onmessage
worker.onmessage = function(event) {
  console.log('event=======>', event.data)
  doSomething()
}

// onerror
worker.onerror = function(event) {
  console.log('error=======>', event.data)
}

function doSomething() {
  // 执行
  worker.postMessage('Work done')
  
  // 关闭进程
  worker.terminate()
}
```

`Worker(path, option)`新建一个 Worker 进程, `path` 脚本文件路径, 该文件就是 Worker 线程所要执行的任务.`option`配置对象, 可选, 可指定 Worker 的名称, 用来区分多个 Worker 线程

`worker.postMessage` 参数可以是任意数据类型, 包括二进制数据, 这个方法就是线程传给 Worker 的数据

`worker.onmessage` 指定监听函数, 接收子线程发回来的消息

`worker.onerror` 监听 worker 线程异常/错误

`worker.terminate` 关闭主线程 Worker


### Worker 线程

```js
// work.js
self.addEventListener('message', function(e) {
  var data = e.data
  switch (data.cmd) {
    case 'start':
      self.postMessage('WORKER STARTED: ' + data.msg)
      break;
    case 'stop':
      self.postMessage('WORKER STOPED: ' + data.msg)
      self.close()
      break;
    default:
      self.postMessage('UnKnown command: ' + data.msg)
  }
}, false)

// or
// this.addEventListener('message', function(e) {
//   this.postMessage('You said: ', e.data)
// }, false)

// or
// addEventListener('message', function(e) {
//   postMessage('You said: ', e.data)
// }, false)

// or
// onmessage = function(e) {
//   postMessage('You said: ', e.data)
// }


```

`self.postMessage`    向主线程发送消息

`self.close`    Worker 内部关闭自身

### Worker 加载脚本

Worker 内部要加载其他脚本使用`importScripts()`

```js
importScripts('scripts.js')
// or 多个
importScripts('scripts1.js', 'scripts2.js')
```


## api

### 主线程

Worker() 构造函数返回一个 Worker 线程对象, 用来提供主线程操作的 Worker. Worker 线程对象的属性和方法如下

```
Worker
  .onmessage: 指定 message 事件的监听函数, 发送过来的数据在 Event.data 属性中
  .onerror: 指定 error 事件的监听函数, Worker 加载或执行过程出现的异常和错误
  .postMessage(): 向 Worker 线程发送消息
  .terminate(): 关闭 Worker 线程
  .onmessageerror: 指定 messageerror 事件的监听函数.发送过来的数据无法序列化成字符串时会触发该事件
```

### Worker 线程

Web Worker 有自己的全局对象, 不是主线程的`window`,而是专门为 Worker 定制的全局对象. 因此定义在 `window`上面的对象和方法不是全部都可以使用

Worker 线程有自己的全局属性和方法:

```
self
  .name: Worker 的名字, 该属性只读, 由构造函数指定
  .onmessage: 指定 message 事件的监听函数
  .postMessage: 向产生这个 Worker 线程发送消息
  .close(): 关闭 Worker 线程
  .onmessageerror: 指定 messageerror 事件的监听函数, 发送过来的数据无法序列化成字符串时会触发该事件
  .importScripts(): 加载 Js 脚本
```
