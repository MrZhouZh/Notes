# vite-plugin-mock

vite 插件 - 本地 mock 数据

## 使用方法

```js
// vite.config.js
import { defineConfig } from "vite";
import vitePluginMock from "./src/plugins-vite/vite-plugin-mock";

export default defineConfig({
  plugins: [
    vitePluginMock({
      moduleName: "novicetask",
    }),
  ],
});
```

每个模块下新建 mock 文件夹, 例如 `novicetask` 模块

GET 请求 `/newcomertask/api/v1/action/query/task_chain` 接口

- 本地路径: src/components/novicetask/mock/GET/task_chain.json

- 本地启动真实路径为:
  http://localhost:3000/mock/novicetask/newcomertask/api/v1/action/query/task_chain

## mock 文件配置规则

1. mock 文件后缀可以是 json, 也可以是 js. 这里注意如果是js后缀, 则需要自调用(IIFE), 例如

```js
// data.js
const { mock, Random } = require("mockjs");
module.exports = (() => {
  return mock({
    code: 1,
    success: true,
    message: Random.string() || null,
    data: { data: [], page: { pageNum: 1, pageSize: 10, total: 0 } },
  });
})();
```

2. 涉及到请求方式 `'get' | 'post'` 等, 这里统一设定为大写方式, mock 文件在请求方
   式目录下方, 例如: `/mock/GET/task_chain.json`
3. mock 文件命名以接口的最后一级路径, 例如:
   `'newcomertask/api/v1/action/query/task_chain'` =>
   `'/mock/GET/task_chain.json'`
4. 接口匹配规则是 `mock/模块名`, 例如当前启动的是 `novicetask`, 那么本地接口匹配
   的就是 `/mock/novicetask`, 注意这里接口匹配会过滤掉
   `/mock/novicetask/remote`, 因为 `/mock/novicetask/remote` 会经过
   `server.proxy`
   
## 入参选项

| 参数名     | 说明                                                  | 类型     | 可选值                               | 默认值            |
| ---------- | ----------------------------------------------------- | -------- | ------------------------------------ | ----------------- |
| moduleName | 模块名                                                | string   | [模块名](../../../project.config.js) | 'home'            |
| dir        | 路径前缀, 完整路径应该是 `src/components/模块名/mock` | string   | -                                    | '/src/components' |
| pattern    | 匹配规则, 内部会处理为正则                            | string   | -                                    | '/mock/\*'        |
| delay      | 延迟时间区间[最小值, 最大值]                          | number[] | -                                    | [0, 100]          |
