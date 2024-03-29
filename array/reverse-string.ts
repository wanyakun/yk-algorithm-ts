// 反转字符串
export function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let temp = s[right]
    s[right] = s[left]
    s[left] = temp
    left++
    right--
  }
}


export function reverse(s: string[] | number[]): void {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let temp = s[right]
    s[right] = s[left]
    s[left] = temp
    left++
    right--
  }
}