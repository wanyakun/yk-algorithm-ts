import { reverseString } from "./reverse-string";
export function reverseWords(s: string): string {
  s = s.trim()
  // 0 只有一个单词，不需要处理
  if (s.split(' ').length <= 1) return s
  // 1 翻转整个字符串
  let str: string[] = s.split('')
  reverseString(str)
  s = str.join('')
  // 2 循环翻转单词
  let words = s.split(' ')
  let res = ''
  words.forEach((item) => {
    // 忽略空白字符
    if (item.trim().length === 0) return
    let str: string[] = item.split('')
    reverseString(str)
    res.concat(str.join('')).concat(' ')
  })
  return res.trimEnd()
}