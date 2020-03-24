## SPA 优点

1. 不需要重新加载页面

### 缺点

* 不利于**SEO** -> 服务端渲染**SSR**
* 首屏渲染时间长 -> 预渲染**Prerendering**


## Vue-Router 

### 使用方式

1. 提供一个路由配置表, 不同 URL 对应不同组件的配置
2. 初始化路由实例 `new VueRouter()`
3. 挂载到 Vue 实例上
4. 提供一个路由占位, 用来挂载 URL 匹配到的组件 

### 路由类型

* Hash 模式 丑， 无法使用锚点定位
* History 模式 需要后端配合，IE9 不兼容(可使用强制刷新处理)

## Nuxt

* 静态网站
* 动态渲染
* 简化配置


## Question

* Vuex 是通过什么方式提供响应式数据?
  A: new Vue({})
* $store 是如挂载到实例 this 上的?
  A: new Vue({})
* SPA 的缺点有哪些, 如何解决?
  A:
    * SEO
    * 首屏渲染时间
对于动态内容， 如果不使用 SSR, 如何做 SEO?
  A: 使用无头浏览器(phantomjs,headlessChrome) 方案一

- my question
为什么Vuex 的 actions 应该避免直接操作 state?
  A: state 的更改应该由 mutations 去更改, 不然 vue-devtools 插件记录不到 state 变更
