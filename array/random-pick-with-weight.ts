class Solution {
  private preSum: number[] = []
  constructor(w: number[]) {
    this.preSum[0] = 0
    for (let i = 1; i <= w.length; i++) {
      this.preSum[i] = this.preSum[i - 1] + w[i - 1]
    }
  }

  pickIndex(): number {
    let n = this.preSum.length
    let target = Math.floor(Math.random()*this.preSum[n - 1] + 1)
    return this.leftBound(this.preSum, target) - 1
  }

  leftBound(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      let mid = left + Math.floor((right - left)/2)
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] === target) {
        right = mid - 1
      }
    }
    return left
  }
}