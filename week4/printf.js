module.exports = function printList(node){
  let current = node
  let str = ''
  while (current) {
    // console.log(current)
    str += `->${current.value}`
    current = current.next
  }
  console.log(str)
}