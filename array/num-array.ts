class NumArray {
  // preSum[i] 保存这nums[0...i-1]之和
  private preSum: number[] = []
  constructor(nums: number[]) {
    this.preSum[0] = 0
    for (let i = 1; i <= nums.length; i++) {
      this.preSum[i] = this.preSum[i - 1] + nums[i - 1]
    }
  }

  sumRange(left: number, right: number): number {
    return this.preSum[right + 1] - this.preSum[left]
  }
}