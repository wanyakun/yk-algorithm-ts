// 滑动哈希 + 滑动窗口
// 假设 A: 0, C: 1, G: 2, T: 3
// R表示进制,此处4个字符，用4进制 R = 4
// L表示字符串长度，此处为10
// 尾部添加字符， num = num * R + appedValue
// 头部删除字符, num = num - deleteValue* R^(L-1)
function findRepeatedDnaSequences(s: string): string[] {
  // 把字符串转化成4进制的数组
  let nums: Record<string, number> = {}
  for (let i = 0; i < s.length; i++) {
      switch(s.charAt(i)) {
          case 'A':
              nums[i] = 0
              break
          case 'C':
              nums[i] = 1
              break
          case 'G':
              nums[i] = 2
              break
          case 'T':
              nums[i] = 3
              break
      }
  }
  // 记录重复出现的hash值
  let seen = new Set()
  // 记录重复出现的字符串
  let res = new Set()
  // 滑动窗口边界
  let left = 0
  let right = 0
  // 子字符串长度
  let L = 10
  // 数字进制
  let R = 4
  //  存储R^(L-1)值
  let RL = Math.pow(R, L - 1)
  // 维护滑动窗口的哈希值
  let windowHash = 0
  while(right < s.length) {
      // 扩大窗口，移入字符串，更新窗口的哈希值
      windowHash = windowHash*R + nums[right]
      right++
      // 当子字符串长度达到要求
      while (right - left === L) {
          // 根据哈希值判断是否出现重复子字符串
          if (seen.has(windowHash)) {
              // 窗口中的子字符串重复出现
              res.add(s.substring(left, right))
          } else {
              // 没出现，添加到hash记录中
              seen.add(windowHash)
          }
          // 缩小窗口，移出字符串，更新窗口的哈希值
          windowHash = windowHash - nums[left]*RL
          left++
      }
  }
  return Array.from(res) as string[]
}