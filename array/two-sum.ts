// 两数之和II
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1
  while(left < right) {
    if (numbers[left] + numbers[right] === target) {
      // 下标从1开始
      return [left + 1, right + 1]
    } else if (numbers[left] + numbers[right] < target) {
      // 小于目标值，让左侧变大
      left++
    } else if (numbers[left] + numbers[right] > target) {
      right++
    }
  }
  return [-1, -1]
}
