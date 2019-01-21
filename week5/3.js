// 题目3: 括号匹配问题
// 一个只有括号的字符串，只有这几个字符：[]() 。写一个程序match判断该字符串中括号是否匹配。
// match("()") // true
// match("()[]") // true
// match("([])") // true
// match("([()])") // true
// match("") // true
// match("(") // false
// match("((]") // false
// match("([)]") // false
console.log(match("()"))
function match (str) {
  const s = []
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '[':
      case '(':
        s.push(str[i])
        break
      case ']':
        if(s.pop() !== '['){
          return false
        }
        break
      case ')':
        if (s.pop() !== '(') {
          return false
        }
        break
    }
  }
  return s.length === 0
}