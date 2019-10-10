/**
 * Queue 基于数组的实现
 */
class Queue {
  constructor() {
    this.dataStore = []
  }

  enQueue(value) {
    this.dataStore.push(value)
  }

  deQueue() {
    return this.dataStore.shift()
  }

  front() {
    return this.dataStore[0]
  }

  back() {
    return this.dataStore[this.dataStore.length - 1]
  }

  toString() {
    //
  }

  isEmpty() {
    if (!this.dataStore.length) {
      return true
    }
    else {
      return false
    }
  }
}

// Test
let newQueue = new Queue()
newQueue.enQueue(1)
newQueue.enQueue(2)
newQueue.enQueue(3)

console.log(newQueue)
