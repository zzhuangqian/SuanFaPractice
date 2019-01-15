// 题目4: 字符串的组成关系
// 写一个函数is_combination判断字符串s是不是由字符串p1, p2组成。 例如:

// 例如:

// is_combination('abc, 'ab', 'c') // true
// is_combination('abc', 'ab', 'bc') // false
// is_combination('abc', 'a', 'bc') // true
// is_combination('abc', 'abc', '') // true
// is_combination('', '', '') // true
// is_combination('a', '', 'a') // true
// googlechrome可以由ggrome和oolech组成。

//   is_combination('googlechrome', 'ggrome', 'oolech') // true
// 要求，p1, p2组成s后所有字符的顺序仍然保持不变。


function is_combination (s, p1, p2) {
  /// TODO 
  let p1Index = 0
  let p2Index = 0
  let isCombiation = true
  for (let i = 0; i < s.length; i++) {
    let at = s.charAt(i)
    if (p1 && p1.charAt(p1Index) && at === p1.charAt(p1Index)) {
      p1Index++
      isCombiation = true
      continue
    }
    if (p2 && p2.charAt(p2Index) && at === p2.charAt(p2Index)) {
      p2Index++
      isCombiation = true
      continue
    }
    isCombiation = false
    return isCombiation
  }
  return isCombiation
}