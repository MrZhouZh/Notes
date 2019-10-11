# Puppeteer

[Github address](https://github.com/GoogleChrome/puppeteer/blob/master/README.md)

[返回首页](./README.md)

> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/). Puppeteer runs [headless](https://developers.google.com/web/updates/2017/04/headless-chrome) by default, but can be configured to run full (non-headless) Chrome or Chromium.

<!-- [START usecases] -->
###### What can I do?

Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:

* Generate screenshots and PDFs of pages.
* Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).
* Automate form submission, UI testing, keyboard input, etc.
* Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
* Capture a [timeline trace](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference) of your site to help diagnose performance issues.
* Test Chrome Extensions.
<!-- [END usecases] -->

Give it a spin: https://try-puppeteer.appspot.com/

<!-- [START getstarted] -->
## Getting Started

### Installation

To use Puppeteer in your project, run:

```bash
npm i puppeteer
# or "yarn add puppeteer"
```

Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. To skip the download, see [Environment variables](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#environment-variables).


### puppeteer-core

Since version 1.7.0 we publish the [`puppeteer-core`](https://www.npmjs.com/package/puppeteer-core) package,
a version of Puppeteer that doesn't download Chromium by default.

```bash
npm i puppeteer-core
# or "yarn add puppeteer-core"
```

`puppeteer-core` is intended to be a lightweight version of Puppeteer for launching an existing browser installation or for connecting to a remote one. Be sure that the version of puppeteer-core you install is compatible with the
browser you intend to connect to.

See [puppeteer vs puppeteer-core](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteer-vs-puppeteer-core).

### Usage

Note: Puppeteer requires at least Node v6.4.0, but the examples below use async/await which is only supported in Node v7.6.0 or greater.

Puppeteer will be familiar to people using other browser testing frameworks. You create an instance
of `Browser`, open pages, and then manipulate them with [Puppeteer's API](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#).

**Example** - navigating to https://example.com and saving a screenshot as *example.png*:

Save file as **example.js**

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

Execute script on the command line

```bash
node example.js
```

Puppeteer sets an initial page size to 800×600px, which defines the screenshot size. The page size can be customized  with [`Page.setViewport()`](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#pagesetviewportviewport).

**Example** - create a PDF.

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

Execute script on the command line

```bash
node hn.js
```

See [`Page.pdf()`](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#pagepdfoptions) for more information about creating pdfs.

**Example** - evaluate script in the context of the page

Save file as **get-dimensions.js**

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

Execute script on the command line

```bash
node get-dimensions.js
```

See [`Page.evaluate()`](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#pageevaluatepagefunction-args) for more information on `evaluate` and related methods like `evaluateOnNewDocument` and `exposeFunction`.

<!-- [END getstarted] -->

<!-- [START runtimesettings] -->
## Default runtime settings

**1. Uses Headless mode**

Puppeteer launches Chromium in [headless mode](https://developers.google.com/web/updates/2017/04/headless-chrome). To launch a full version of Chromium, set the [`headless` option](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#puppeteerlaunchoptions) when launching a browser:

```js
const browser = await puppeteer.launch({headless: false}); // default is true
```

**2. Runs a bundled version of Chromium**

By default, Puppeteer downloads and uses a specific version of Chromium so its API
is guaranteed to work out of the box. To use Puppeteer with a different version of Chrome or Chromium,
pass in the executable's path when creating a `Browser` instance:

```js
const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
```

See [`Puppeteer.launch()`](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md#puppeteerlaunchoptions) for more information.

See [`this article`](https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/) for a description of the differences between Chromium and Chrome. [`This article`](https://chromium.googlesource.com/chromium/src/+/master/docs/chromium_browser_vs_google_chrome.md) describes some differences for Linux users.

**3. Creates a fresh user profile**

Puppeteer creates its own Chromium user profile which it **cleans up on every run**.

<!-- [END runtimesettings] -->

## Resources

- [API Documentation](https://github.com/GoogleChrome/puppeteer/blob/v1.20.0/docs/api.md)
- [Examples](https://github.com/GoogleChrome/puppeteer/tree/master/examples/)
- [Community list of Puppeteer resources](https://github.com/transitive-bullshit/awesome-puppeteer)


<!-- [START debugging] -->

## Debugging tips

1. Turn off headless mode - sometimes it's useful to see what the browser is
   displaying. Instead of launching in headless mode, launch a full version of
   the browser using  `headless: false`:

        const browser = await puppeteer.launch({headless: false});

2. Slow it down - the `slowMo` option slows down Puppeteer operations by the
   specified amount of milliseconds. It's another way to help see what's going on.

        const browser = await puppeteer.launch({
          headless: false,
          slowMo: 250 // slow down by 250ms
        });

3. Capture console output - You can listen for the `console` event.
   This is also handy when debugging code in `page.evaluate()`:

        page.on('console', msg => console.log('PAGE LOG:', msg.text()));

        await page.evaluate(() => console.log(`url is ${location.href}`));

4. Use debugger in application code browser

    There are two execution context: node.js that is running test code, and the browser
    running application code being tested. This lets you debug code in the
    application code browser; ie code inside `evaluate()`.

    - Use `{devtools: true}` when launching Puppeteer:

        `const browser = await puppeteer.launch({devtools: true});`

    - Change default test timeout:

        jest: `jest.setTimeout(100000);`

        jasmine: `jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;`

        mocha: `this.timeout(100000);` (don't forget to change test to use [function and not '=>'](https://stackoverflow.com/a/23492442))

    - Add an evaluate statement with `debugger` inside / add  `debugger` to an existing evaluate statement:

      `await page.evaluate(() => {debugger;});`

       The test will now stop executing in the above evaluate statement, and chromium will stop in debug mode.

5. Use debugger in node.js

    This will let you debug test code. For example, you can step over `await page.click()` in the node.js script and see the click happen in the application code browser.

    Note that you won't be able to run `await page.click()` in
    DevTools console due to this [Chromium bug](https://bugs.chromium.org/p/chromium/issues/detail?id=833928). So if
    you want to try something out, you have to add it to your test file.

    - Add `debugger;` to your test, eg:
      ```
      debugger;
      await page.click('a[target=_blank]');
      ```
    - Set `headless` to `false`
    - Run `node --inspect-brk`, eg `node --inspect-brk node_modules/.bin/jest tests`
    - In Chrome open `chrome://inspect/#devices` and click `inspect`
    - In the newly opened test browser, type `F8` to resume test execution
    - Now your `debugger` will be hit and you can debug in the test browser


6. Enable verbose logging - internal DevTools protocol traffic
   will be logged via the [`debug`](https://github.com/visionmedia/debug) module under the `puppeteer` namespace.

        # Basic verbose logging
        env DEBUG="puppeteer:*" node script.js

        # Protocol traffic can be rather noisy. This example filters out all Network domain messages
        env DEBUG="puppeteer:*" env DEBUG_COLORS=true node script.js 2>&1 | grep -v '"Network'

7. Debug your Puppeteer (node) code easily, using [ndb](https://github.com/GoogleChromeLabs/ndb)

  - `npm install -g ndb` (or even better, use [npx](https://github.com/zkat/npx)!)

  - add a `debugger` to your Puppeteer (node) code

  - add `ndb` (or `npx ndb`) before your test command. For example:

    `ndb jest` or `ndb mocha` (or `npx ndb jest` / `npx ndb mocha`)

  - debug your test inside chromium like a boss!


<!-- [END debugging] -->

## Contributing to Puppeteer

Check out [contributing guide](https://github.com/GoogleChrome/puppeteer/blob/master/CONTRIBUTING.md) to get an overview of Puppeteer development.
