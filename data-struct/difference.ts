/**
 * 差分数组类
 * 维护一个差分数组diff， 差分数组diff里保存的值为原始nums数组里相邻两个元素之差, 即 diff[i] = nums[i] - nums[i - 1]
 * 那么反过来，从差分数组推导出nums的公式为：nums[i] = diff[i] + nums[i - 1]
 * 那么要想给i到j的区间元素都增加val，只需要将diff[i]加value，diff[j + 1]位置减val即可。
 * 从nums[i] = diff[i] + nums[i - 1]可以看出 diff[i] += val 意味着 num[i...] 都加了val， diff[j + 1] -= val 意味着 num[j+1...] 都减了 val， 所以 num[i...j] 都加了val
 */

export class Difference {
  private diff: number[] = []
  constructor(nums: number[]) {
    if (nums.length === 0) return
    this.diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] = nums[i - 1]
    }
  }

  increment(i: number, j: number, val: number) {
    this.diff[i] += val
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val
    }  
  }

  result(): number[] {
    let res: number[] = []
    res[0] = this.diff[0]
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = this.diff[i] + res[i - 1]
    }
    return res
  }
}