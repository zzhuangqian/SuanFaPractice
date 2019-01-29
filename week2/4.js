// 题目4: 最大整数幂
// 写一个函数floor_power_of2，求比x小的最大二的整数次幂。

// x >= 0 && x < Math.pow(2, 31) - 1
// 提示

// 位运算
// 例如
floor_power_of2(64) // 64
floor_power_of2(63) // 32
floor_power_of2(33) // 32
floor_power_of2(32) // 32


function floor_power_of2 (x) {
  /// TODO 
  let t = x
  let index = 0
  while (t > 1) {
    t = t >> 1
    index++
  }
  return Math.pow(2, index)
}