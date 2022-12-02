export function lengthOfLongestSubstring(s: string): number {
  // 计数器，记录窗口内部s的每个字符出现的次数
  let window: Record<string, number> = {}
  // 初始化计数器
  for(let i = 0; i < s.length; i++) {
    let c = s.charAt(i)
    window[c] = 0
  }

  let left = 0
  let right = 0
  let len  = 0
  while(right < s.length) {
    let c = s.charAt(right)
    right++
    window[c]++

    while(window[c] > 1) {
      let d = s.charAt(left)
      left++
      window[d]--
    }
    len = Math.max(len, right - left)
  }
  return len
}