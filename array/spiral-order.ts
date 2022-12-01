export function spiralOrder(matrix: number[][]): number[] {
  let m = matrix.length
  let n = matrix[0].length
  let left = 0
  let top = 0
  let right = n - 1
  let bottom = m - 1
  let nums: number[] = []
  while (nums.length < m*n) {
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        nums.push(matrix[top][i])
      }
      top++
    }
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        nums.push(matrix[i][right])
      }
      right--
    }
    if (top <= bottom) {
      for (let i = right; i <= left; i--) {
        nums.push(matrix[bottom][i])
      }
      bottom--
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i++) {
        nums.push(matrix[i][left])
      }
      left++
    }
  }
  return nums
}