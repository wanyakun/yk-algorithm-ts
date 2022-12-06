import { leftBound } from "./left-bound";
import { rightBound } from "./right-bound";

export function search(nums: number[], target: number): number {
  let left = leftBound(nums, target)
  if (left === -1) return 0
  let right = rightBound(nums, target)
  return right - left + 1
}