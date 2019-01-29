// 题目2: 移除重复的单词
// 一个字符串由单词和空格组成，写一个函数remove_dup(str) ，移除字符串中重复的单词：


remove_dup('aa bb cc aa bb') //  'cc aa bb'
// 注意顺序是保留后面的单词

function remove_dup1 (str) {
  console.log(str)
  let arr = str.split(' ')
  let obj = {}
  let newArr = []
  console.log(arr)
  for (let i = arr.length - 1; i >= 0; i--) {
    let key = arr[i]
    if (key && !obj[key]) {
      obj[key] = key
      newArr.unshift(key)
    }
  }
  console.log(newArr)
  return newArr.join(' ')
}
function remove_dup(str){

}