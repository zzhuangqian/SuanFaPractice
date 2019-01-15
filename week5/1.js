// 题目1: 使用两个stack实现一个队列
// 给定一个Stack数据结构，实现了一个堆栈。

// class Stack {
//   constructor() {
//     this.data = []
//   }
//   // 将item放入stack中
//   push (item) {
//     this.data.push(item)
//   }
//   // 将最后一个放入的元素从stack中取出
//   // 没有元素返回null
//   pop () {
//     return this.data.pop()
//   }

//   // 返回Stack中一共有多少个元素
//   size () {
//     return this.data.length
//   }
// }

// 利用两个Stack实现一个Queue， Stack会从构造函数中传入。补全Queue的enqueue和dequeue方法。

let Stack = require('./stack.js')

class Queue {
  /**
   * 构造函数中的s1和s2是两个Stack的实例
   */
  constructor() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }

  enqueue (item) {
    if (this.s1.size() === this.s2.size()){
      this.s1.push(item)
    }else{
      this.s2.push(item)
    }
  }
  dequeue () {
    if(this.s1.size() >= this.s2.size()){
      let item = ''
      let index = 0 
      while(this.s1.size()>=1){
        index ++
        item = this.s1.pop()
        this.s2.push(item)
      }
      this.s2.pop()
      while(index -1> 0){
        this.s1.push(this.s2.pop())
        index--
      }
      return item 
    }else{
      let item = ''
      let index = 0 
      while (this.s2.size() >= 1) {
        index++
        item = this.s2.pop()
        this.s1.push(item)
      }
      this.s1.pop()
      while (index-1 > 0) {
        this.s2.push(this.s1.pop())
        index--
      }
      return item 
    }
  }
}


let queue = new Queue()
let count = 10 
for(let i = 0 ; i < count ; i ++){
  queue.enqueue(i)
}
let item = queue.dequeue()
console.log(item)
// let item2 = queue.dequeue()
// console.log(item2)
for(let i = 0 ; i < count ; i ++){
 let item =  queue.dequeue()
 console.log(item)
}