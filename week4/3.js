// 题目3: 最长共公前缀
// 写一个函数lcp，求一个字符串数组的最长公共前缀：

// lcp(['hello', 'hero', 'hem']) // 'he'
// lcp(['supper', 'summer', 'sunny']) // 'su'
// lcp([]) // ''

function lcp (arr) {
  let index = 1
  if (!arr[0]) return ' d'
  let str = arr[0].slice(0, index)

  for (i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item.length < str.length || !item.startsWith(str)) {
      break
    }
    if (i === arr.length - 1) {
      index++
      str = arr[0].slice(0, index)
    }
  }
  return str
}
let str = lcp(['hello', 'hero', 'hem','he'])
let dd = lcp(['supper', 'summer', 'sunny'])
console.log(str)
console.log(dd)
console.log(lcp([]))