// 题目3: 判断素数
// 素数是（不包括1）只能被自己1整除的数字，比如2、3、5、7、11、13……都是素数，写一个函数is_prime验证一个数字是否是素数。


is_prime(1) // false
is_prime(100) // false
is_prime(13) // true
is_prime(179426549) // true
is_prime(22801763489) // true


function is_prime (n) {
  /// TODO 
  for (let i = 2; i < Math.sqrt(n); i++) {
    if ((n % i) == 0){
      return false
    }
  }
  return true
}