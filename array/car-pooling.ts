import { Difference } from "../data-struct/difference";
export function carPooling(trips: number[][], capacity: number): boolean {
  let nums: number[] = []
  for (let i = 0; i < 1001; i++) {
    nums[i] = 0
  }

  let diff = new Difference(nums)
  trips.forEach((item) => {
    let val = item[0]
    let i = item[1]
    let j = item[2] - 1
    diff.increment(i, j , val)
  })
  let res = diff.result()

  for (let i = 0; i < res.length; i++) {
    if (res[i] > capacity) {
      return false
    }
  }
  return true
}