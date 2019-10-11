# Puppeteer

[Github address](https://github.com/GoogleChrome/puppeteer/blob/master/README.md)

[返回首页](./README.md)

> Puppeteer 是一个 Node 库, 它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome。Puppeteer 默认以 headless 模式运行, 但是可以通过修改配置文件运行“有头”模式.

<!-- [START usecases] -->
###### 能做什么?

大多数在浏览器中手动执行的绝大多数操作都可以使用 Puppetteer ! 下面是一些示例:

* 生成 PDF 页面.
* 抓取 SPA (单页应用) 并生成预渲染内容 (即 "SSR" (服务器端渲染)).
* 自动提交表单, 进行 UI 测试, 键盘输入等.
* 创建一个实时更新的自动化测试环境, 使用最新版本的 Javascript 和 浏览器功能直接在最新版本的 Chrome 中执行测试.
* 捕获网站的 [timeline trace](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference) 用来帮助分析性能问题.
* 测试浏览器扩展.
<!-- [END usecases] -->

演示地址: https://try-puppeteer.appspot.com/

<!-- [START getstarted] -->
## 开始使用

### 安装

在项目中使用:

```bash
npm i puppeteer
# or "yarn add puppeteer"
```

Note: 当你安装 Puppetteer 时, 它会下载最新版本的 Chromium (~170MB Mac, ~282MB Linux, ~280MB Win), 如果想要跳过下载, 请阅读这篇 [Environment variables](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#environment-variables).


### puppeteer-core

`puppeteer-core` 是一个轻量级的 Puppetteer 版本, 用于启动现有浏览器安装或连接到远程安装.这个包默认不会下载 Chromium

```bash
npm i puppeteer-core
# or "yarn add puppeteer-core"
```

[puppeteer vs puppeteer-core](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteer-vs-puppeteer-core).

### 使用

Note: Puppeteer 需要 `Node >= v6.4.0`, 因为要兼容 `async/await` 语法.

**截图**

文件 **example.js**

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```

在命令行执行

```bash
node example.js
```

Puppeteer 初始化屏幕大小默认 800×600px, 当然也可以使用 [`Page.setViewport()`](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#pagesetviewportviewport)进行设置.

**创建 PDF**

Save file as **hn.js**

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();
```

命令行执行

```bash
node hn.js
```

更多用法戳这→: [`Page.pdf()`](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#pagepdfoptions).

**执行脚本**

文件 **get-dimensions.js**

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();
```

命令行执行

```bash
node get-dimensions.js
```

更多用法戳→ [`Page.evaluate()`](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#pageevaluatepagefunction-args).

<!-- [END getstarted] -->

## 资源:

- [API Documentation](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#).
- [Example](https://github.com/GoogleChrome/puppeteer/tree/master/examples/).
- [Awesome-Puppetteer](https://github.com/transitive-bullshit/awesome-puppeteer).
