import { Difference  } from "../data-struct/difference";
export function getModifiedArray(length: number, updates: number[][]): number[] {
  let nums: number[] = []
  for (let i = 0; i < length; i++) {
    nums[i] = 0
  }

  let diff = new Difference(nums)
  updates.forEach((item) => {
    let i = item[0]
    let j = item[1]
    let val = item[2]
    diff.increment(i, j, val)
  })
  return diff.result()
}