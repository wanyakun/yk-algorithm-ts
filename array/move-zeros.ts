import { removeElement } from './remove-element'

export function moveZeroes(nums: number[]): void {
  let slow = removeElement(nums, 0)
  while (slow < nums.length) {
    nums[slow] = 0
    slow++
  }
}