## 小记

[返回首页](./README.md)

在开发项目的过程中, 发现请求接口时浏览器发出了两个请求:

```
1. Request Method: OPTIONS

2. Request Method: POST
```

参考 MDN 的 [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS) 一文:

> 规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。

所以我们从中能够得到答案, 跨域请求触发了浏览器自动发起 OPTIONS 请求. OPTIONS 请求也可以理解为预检请求, 可用于检测服务器允许的 http 方法.当发起跨域请求是, 由于安全原因, 触发一定条件时浏览器会在正式请求之前自动发起 OPTIONS 请求, 即**CORS预检请求**
