// 5 8 13 21 34

function fibo (a1, a2, n) {
  /// TODO 
  
  function f(n){
    
      if (n === 1) return a1
      if (n === 2) return a2
      let index = n - 2
      let num =Math.ceil(index/2)
      console.log(num)
      if (index % 2 !== 0){
        return num * (a1 + a2)
      } else {
        return num * (a1 + a2) + a2
      }
  } 
  return f(n)
}
console.log(fibo(5,8,))