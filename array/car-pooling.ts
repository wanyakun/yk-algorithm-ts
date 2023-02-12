// 拼车
import { Difference } from "../data-struct/difference";
export function carPooling(trips: number[][], capacity: number): boolean {
  let nums: number[] = []
  // 最多有 1001 个车站
  for (let i = 0; i < 1001; i++) {
    nums[i] = 0
  }
  // 构造差分解法
  let diff = new Difference(nums)
  trips.forEach((item) => {
    // 乘客数量
    let val = item[0]
    // 第 trip[1] 站乘客上车
    let i = item[1]
    // 第 trip[2] 站乘客已经下车，
    // 即乘客在车上的区间是 [trip[1], trip[2] - 1]
    let j = item[2] - 1
    // 进行区间操作
    diff.increment(i, j , val)
  })
  let res = diff.result()
  // 客车自始至终都不应该超载
  for (let i = 0; i < res.length; i++) {
    if (res[i] > capacity) {
      return false
    }
  }
  return true
}