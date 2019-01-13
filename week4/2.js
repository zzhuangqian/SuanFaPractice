const printList = require('./printf.js')
const list = require('./testData.js')


function merge (p, q) {
  let pCurr = p
  let qCurr = q 
  let list = null
  function swapValue(node){
    let tmp = node.next
    node.next = list
    node = tmp
  }

  while(pCurr || qCurr){
    if(pCurr && qCurr){
      if(pCurr.value < qCurr.vaule) {
        swapValue(pCurr)
      }else if(pCurr.value > qCurr.value){
        swapValue(qCurr)
      } 
    }else{
      swapValue()
    }

  }
}