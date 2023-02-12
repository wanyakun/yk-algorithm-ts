// 顺/逆时针旋转矩阵
import { reverse } from "./reverse-string";

// 顺时针旋转n*n二维矩阵
export function rotate(matrix: number[][]): void {
  // 1. 按照左上右下的对角线进行翻转
  let n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  // 2. 每一行进行翻转
  matrix.forEach((item) => {
    reverse(item)
  })
}

// 逆时针旋转n*n二维矩阵
export function rotate1(matrix: number[][]): void {
  // 1. 按照右上左下的对角线进行翻转
  let n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][n - i - 1]
      matrix[n - j - 1][n - i - 1] = temp
    }
  }
  // 2. 每一行进行翻转
  matrix.forEach((item) => {
    reverse(item)
  })
}