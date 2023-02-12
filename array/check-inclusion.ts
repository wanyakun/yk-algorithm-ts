// 字符串的排列
export function checkInclusion(s: string, t: string): boolean {
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
    while(right - left >= t.length) {
      if (valid === Object.keys(need).length) {
        return true
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
  return false
}