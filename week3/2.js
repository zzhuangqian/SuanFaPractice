// 题目2: 移除重复的单词
// 一个字符串由单词和空格组成，写一个函数remove_dup(str) ，移除字符串中重复的单词：


let key = remove_dup('aa bb cc aa bb') //  'cc aa bb'
// 注意顺序是保留后面的单词
console.log(key)
function remove_dup1 (str) {
  let arr = str.split(' ')
  let obj = {}
  let newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    let key = arr[i]
    if (key && !obj[key]) {
      obj[key] = key
      newArr.unshift(key)
    }
  }
  return newArr.join(' ')
}
function remove_dup(str){
  let arr = str.split(' ')
  let tmep = []
  for(let i = 0; i < arr.length; i ++){
    let key = arr[i]
    if(!arr.includes(key,i+1)){
      tmep.push(key)
    }
  }
  return tmep.join(' ')

}