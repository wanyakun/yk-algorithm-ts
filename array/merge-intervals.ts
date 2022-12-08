export function merge(intervals: number[][]): number[][] {
  //1. 对要合并的数组按照最左侧的数字进行升序排序
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  //2. 存储合并后的结果
  let res: number[][] = []
  //3. 遍历要合并的数组，依次和结果中的最后一个进行比较，比较右侧边距，判断是否要合并还是直接加入到结果中
  for(let i = 0; i < intervals.length; i++) {
    let l = intervals[i][0]
    let r = intervals[i][1]
    if (res.length === 0 || res[res.length - 1][1] < l) {
      res.push(intervals[i])
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], r)
    }
  }
  return res
}