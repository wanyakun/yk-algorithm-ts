import { leftBound } from "./left-bound";
import { rightBound } from "./right-bound";
export function searchRange(nums: number[], target: number): number[] {
  let left = leftBound(nums, target)
  let right = rightBound(nums, target)

  return [left, right]
}