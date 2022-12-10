export function splitArray(nums: number[], k: number): number {
  // 计算最大和的边界，最小的时候，每个元素分割为一个数组，所以最小值为数组中的最大值
  // 最大的时候，将数组分割为1个，所以最大值是所有元素之和
  let left = Math.max(...nums)
  let right = nums.reduce((a, b) => a + b)
  while(left <= right) {
    let mid = left + Math.floor((right - left)/2)
    let count = getCount(nums, mid)
    // 子数组最大和与子数组个数成反比
    if (count < k) {
      // 数组个数越小，说明最大和越大， 目标值在左侧
      right = mid - 1
    } else if (count > k) {
      // 数组个数越大，说明最大和越越小， 目标值在右侧
      left = mid + 1
    } else if (count === k) {
      // 求最大和的最小值，也就是左边边界，右侧收缩
      right = mid - 1
    }
  } 
  return left
}

// 计算子数组最大和为sum时，数组分割的子数组个数
function getCount(nums: number[], sum: number): number {
  // 最少为一个子数组
  let count = 1
  let currSum = 0
  nums.forEach((item) => {
    if (currSum + item > sum) {
      count++
      currSum = 0
    }
    currSum += item
  })
  return count
}