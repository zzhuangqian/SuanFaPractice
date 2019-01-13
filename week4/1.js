class Node{
  constructor(v){
    this.next = null
    this.value = v
  }
}
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b 
b.next = c
c.next = d

function reverse (node) {
  if (!node) return node
  let pre = null
  let current = node
  let tmp = null
  while (current && current.next) {
    tmp = current.next
    current.next = pre
    pre = current
    current = tmp
  }
  return pre 
}
let e = new Node("sdfsdf")
let g = null 
let u = reverse(a)
printList(u)

function printList(a){
  let current = a
  while (current) {
    console.log(current)
    current = current.next
  }
}

