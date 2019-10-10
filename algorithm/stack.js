/**
 * Stack(基于链表的实现)
 */
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class StackBasedLinkedList {
  constructor() {
    this.top = null
  }
  push(value) {
    const node = new Node(value)
    if (this.top === null) {
      this.top = node
    }
    else {
      node.next = this.top
      this.top = node
    }
  }
  pop() {
    if (this.top === null) {
      return -1
    }
    const value = this.top.element
    this.top = this.top.next
    return value
  }
  // 为了实现浏览器的前后退
  clear() {
    this.top = null
  }
  display() {
    if (this.top !== null) {
      let temp = this.top
      while (temp !== null) {
        console.log(temp.element)
        temp = temp.next
      }
    }
  }
}

// Test
// const newStack = new StackBasedLinkedList()
// newStack.push(1)
// newStack.push(2)
// newStack.push(3)

// console.log(newStack)

exports.CreatedStack = StackBasedLinkedList
