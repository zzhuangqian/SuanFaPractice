
// 下面三角形的数列：

//             1
//         3     5
//       7     9    11
//     13    15    17    19
// 21    23    25    27    29
// ...

rowSumOddNumbers(1) // 1
rowSumOddNumbers(2) // 3+5=8
rowSumOddNumbers(3) // 7+9+11=27
rowSumOddNumbers(42) // 74088


function rowSumOddNumbers(n){
  if(n===1) return 1
  return rowSumOddNumbers(n-1)+n*(n-1)*2
}

console.log(rowSumOddNumbers(3))