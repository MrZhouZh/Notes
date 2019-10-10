const stack = require('./stack.js')

/**
 * 栈的应用之浏览器前进与后退功能
 */
class SampleBrowser {
  constructor() {
    this.normalStack = new stack.CreatedStack()
    this.backStack = new stack.CreatedStack()
  }

  // 正常访问页面
  pushNormal(name) {
    this.normalStack.push(name)
    this.backStack.clear()
    this.displayAllStack()
  }

  // 后退
  back() {
    const value = this.normalStack.pop()
    if (value !== -1) {
      this.backStack.push(value)
      this.displayAllStack()
    }
    else {
      console.log('无法后退')
    }
  }

  // 前进
  forward() {
    const value = this.backStack.pop()
    if (value !== -1) {
      this.normalStack.push(value)
      this.displayAllStack()
    }
    else {
      console.log('无法前进')
    }
  }

  displayAllStack() {
    console.log('=================后退页面===============')
    this.backStack.display()
    console.log('=================正常访问页面===============')
    this.normalStack.display()    
  }
}

// Test
const newBrowser = new SampleBrowser()
newBrowser.pushNormal('http://www.baidu.com')
newBrowser.pushNormal('http://www.bing.com')
newBrowser.pushNormal('http://www.google.com')

newBrowser.back()
newBrowser.back()
newBrowser.back()
newBrowser.back()
newBrowser.forward()
newBrowser.forward()
newBrowser.forward()
newBrowser.forward()
newBrowser.pushNormal('github.com')
