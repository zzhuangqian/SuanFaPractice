// 题目1: 数组反转
// 写一个函数reverse，反转一个数组。不可以使用reverse函数

// let A = [3,2,1]
let A = [8,7,6,5,4,3,2]
reverse(A)

function reverse(A){
const idx = Math.floor(A.length/2)
const length = A.length-1
for(let i = 0 ; i < idx; i ++){
  [A[i], A[length - i]] = [A[length - i], A[i]] 
}
}
console.log(A)