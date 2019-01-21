// 题目2: 检测一个链表是否有环
// 写一个程序has_cycle检查一个链表是否有循环应用。

const Node = require('./Node.js')

function has_cycle(node){
  let hasCycle = false
  let slow = node.next;
  if(!slow.next) return hasCycle
  let faster = node.next.next;
  while(faster&& slow){
    if(faster === slow){
      hasCycle = true
      break
    }
    slow = slow.next
    if(slow.next){
      faster = faster.next.next 
    }else{
      faster = null
    }
  }
  return hasCycle
}
