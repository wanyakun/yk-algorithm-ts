export function removeDuplicates(nums: number[]): number {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  // 数组长度为索引+1
  return slow + 1
}