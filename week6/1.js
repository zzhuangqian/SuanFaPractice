// 题目1: 排序0, 1, 2
// 写一个函数sort，排序一个只有0，1，2三种数字的数组，需要排序。

// 在原数组上直接排序，空间复杂度O(1)
// 输入规模在100W
// 不需要返回值

function swap (A, i, j) {
  const tmp = A[i]
  A[i] = A[j]
  A[j] = tmp
}
function sort (A) {
  // A.sort()
  let lo = 0,
      mid = 0,
      hi = A.length - 1
  while (mid <= hi) {
    switch (A[mid]) {
      case 0:
        swap(A, lo++, mid++)
        break
      case 1:
        mid++
        break
      case 2:
        swap(A, mid, hi--)
        break
    }
  }
}
let arr = random(10000000)
console.time('start')
sort(arr)

console.timeEnd('start')
console.log(test(arr))
// console.log(arr)

function random(count){
  let arr = []
  for(let i = 0 ; i < count ; i ++){
    arr.push(parseInt(Math.random()*3))
  }
  return arr
}
function test(A){
  for(let i = 0 ; i < A.length ; i ++){
    if(A[i] > A[i+1]){
      return false
    }
  }
  return true
}