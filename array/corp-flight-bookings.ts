import { Difference } from '../data-struct/difference'

export function corpFlightBookings(bookings: number[][], n: number): number[] {
  let nums: number[] = []
  for (let i = 0; i < n; i++) {
    nums[i] = 0
  }
  let diff = new Difference(nums)
  bookings.forEach((item) => {
    let i = item[0] - 1
    let j = item[1] - 1
    let val = item[2]
    diff.increment(i, j, val)
  })
  return diff.result()
}