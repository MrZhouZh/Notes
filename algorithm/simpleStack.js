/**
 * Stack(基于数组实现)
 * 构造函数 + 原型链
 */
function Stack() {
  this.dataStore = []
  this.top = 0
}

Stack.prototype = {
  // 入栈
  push: function(value) {
    this.dataStore[this.top++] = value
  },
  // 删除栈顶元素
  pop: function() {
    return this.dataStore[--this.top]
  },
  // 返回栈顶元素
  peek: function() {
    return this.dataStore[this.top - 1]
  },
  // 判断栈是否为空
  isEmpty: function() {
    return this.top === 0
  },
  // 清空栈
  clear: function() {
    this.top = 0
  },
  // 返回栈的大小
  size: function() {
    return this.top
  },
  print: function() {
    console.log('print', this.dataStore.toString())
  }
}

const newStack = new Stack()
newStack.push(1)
newStack.push(2)
newStack.push(3)
console.log(newStack)
newStack.print()

newStack.pop()

console.log(newStack.dataStore)
console.log(newStack.size())

/**
 * Stack(基于数组实现)
 * 构造函数
 */
function Stack2() {
  this.dataStore = []
  this.top = 0
  this.push = push
  this.peek = peek
  this.pop = pop
  this.clear = clear
  this.length = length
}

function push(element) {
  this.dataStore[this.top++] = element
}

function peek() {
  return this.dataStore[this.top - 1]
}

function pop() {
  return this.dataStore[--this.top]
}

function clear() {
  this.top = 0
}

function length() {
  return this.top
}


// Test
const newStack2 = new Stack2()
newStack2.push(1)
newStack2.push(2)
newStack2.push(3)
console.log(newStack2)

/**
 * 栈的应用之 x 进制转换
 */
function hexadecimal(decNumber, base) {
  let remStack = new Stack()
    , rem
    , binaryString = ''
    , digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }

  return binaryString
}

console.log(hexadecimal(520, 2))
console.log(hexadecimal(16, 8))
console.log(hexadecimal(255, 16))
