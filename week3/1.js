// 题目1: 斐波那契数列求和
// 斐波那契数列是这样一列数：

// 给定第1项、第2项，后面每一项是前两项之和，

// 5 8 13 21 34 ...

// 写一个函数fibo(a1, a2, n) ，给定第1项a1，第2项a2，求第n项的值。

// 例如：

console.log(fibo(5, 8, 3)) // 13
console.log(fibo(5, 8, 1)) // 5

/**
 * 方案1 直接递归，但是时间复杂度高，重复计算严重
 * @param {*数据第一项} a1 
 * @param {* 数据第二项} a2 
 * @param {* 返回第几位值}  n 
 */
function fibo1(a1,a2,n){
if(n ===1){
  return a1
}
if(n ===2 ){
  return a2
}
if(n >= 3){
return fibo(a1,a2,n-2)+fibo(a1,a2,n-1)
}
}
/**
 * 方案2 减少重复计算 使用尾递
 * @param {*第一项 } a1 
 * @param {* 第二项} a2 
 * @param {* 返回第几项} n 
 */
function fibo(a1,a2,n){
  if (n === 1) {
    return a1
  }
  if (n === 2) {
    return a2
  }
return fibo(a2,a1+a2,n-1)
}