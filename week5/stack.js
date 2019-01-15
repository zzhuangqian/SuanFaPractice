class Stack {
  constructor() {
    this.data = []
  }
  // 将item放入stack中
  push (item) {
    this.data.push(item)
  }
  // 将最后一个放入的元素从stack中取出
  // 没有元素返回null
  pop () {
    return this.data.pop()
  }

  // 返回Stack中一共有多少个元素
  size () {
    return this.data.length
  }
}

module.exports = Stack