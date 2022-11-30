class NumMatrix {
  // preSum[i][j] 保存这 matrix[0, 0, i-1, j-1]中的元素之和
  private preSum: number[][] = []
  constructor(matrix: number[][]) {
    let m = matrix.length
    let n = matrix[0].length
    if (m === 0 || n === 0) return
    for (let i = 0; i <= m; i++) {
      this.preSum.push([])
      for (let j = 0; j <= n; j++) {
        if (i === 0 || j === 0) {
          this.preSum[i][j] = 0
        } else {
          this.preSum[i][j] = this.preSum[i][j - 1] + this.preSum[i - 1][j] + matrix[i - 1][j - 1] - this.preSum[i - 1][j - 1]
        }
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.preSum[row2 + 1][col2 + 1] - this.preSum[row2 + 1][col1] - this.preSum[row1][col2 + 1] + this.preSum[row1][col1]
  }
}