// 寻找右侧边界的二分查找
export function rightBound(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left)/2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] === target) {
      left = mid + 1
    }
  }
  if (left - 1 < 0) return -1
  return nums[left - 1] === target ? left - 1 : -1
}