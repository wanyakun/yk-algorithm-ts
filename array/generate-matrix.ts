export function generateMatrix(n: number): number[][] {
  // 1. 初试化二维矩阵matrix，并用0填充
  let matrix: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  // 2. 设置边界，填充
  let left = 0
  let top = 0
  let right = n - 1
  let bottom = n - 1
  let num = 1
  while(num <= n*n) {
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num
        num++
      }
      top++
    }
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num
        num++
      }
      right--
    }
    if (top <= bottom) {
      for (let i = right; i <= left; i--) {
        matrix[bottom][i] = num
        num++
      }
      bottom--
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i++) {
        matrix[i][left] = num
        num++
      }
      left++
    }
  }

  return matrix
}