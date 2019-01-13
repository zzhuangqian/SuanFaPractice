let Node = require('./Node.js')
const printfList = require('./printf.js')
const count = 6
let list = null 
for(let i = 0 ; i < count; i++){
  let node = new Node(i)
  if(list){
    node.next = list
    list = node
  }else{
    list = node
  }
}

module.exports = list
// printfList(list)