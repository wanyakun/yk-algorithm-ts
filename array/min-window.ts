/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 */

export function minWindow(s: string, t: string): string {
  // 计数器，记录t中每个字符出现的次数
  let need: Record<string, number> = {}
  // 计数器，记录窗口内部t的每个字符出现的次数
  let window: Record<string, number> = {}
  // 初始化计数器
  for(let i = 0; i < t.length; i++) {
    let c = t.charAt(i)
    if (need[c]) {
      need[c]++
    } else {
      need[c] = 1
    }
    window[c] = 0
  }
  // 滑动窗口左右边界，左开右闭区间
  let left = 0
  let right = 0
  // 标示窗口中满足need条件的个数， 如果valid和need中key的个数相同，这说明满足条件，已经完全覆盖子串
  let valid = 0
  // 记录最长覆盖子串的开始位置和长度
  let start = 0
  let len = Number.MAX_VALUE
  while(right < s.length) {
    // c为要添加进窗口的字符
    let c = s.charAt(right)
    // 扩大窗口
    right++
    // t中有c，更新窗口里c的数量，并判断和t中的数量是否相等，相等则满足条件的数量加1
    if (need[c]) {
      window[c]++
      if (window[c] === need[c]) {
        valid++
      }
    }
    // valid和need中key的个数相同，这说明满足条件，已经完全覆盖子串, 开始缩小窗口
    while(valid === Object.keys(need).length) {
      // 判断更新记录
      if (right - left < len) {
        start = left
        len = right - left
      }
      // d为将要从窗口中移除的字符
      let d = s.charAt(left)
      // 缩小窗口
      left++
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  return len === Number.MAX_VALUE ? '' : s.substring(start, start + len)
}