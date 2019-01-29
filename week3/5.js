// 题目5: 二维数组查找
// 一个n * n整数二维数组满足下面的性质：

// 左边的值比右边小
// 上边的值比下边小
// 写一个方法in_array(A, x)查找整数x是否在二维数组A中

// 如果找到返回true
// 没找到返回false

const A = [
  [1, 4, 8, 12],
  [2, 5, 9, 13],
  [3, 6, 10, 18],
  [8, 9, 13, 20],
]

in_array(A, 10) // true
in_array(A, 100) // false

function in_array (A, x) {
  /// TODO
}