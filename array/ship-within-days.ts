export function shipWithinDays(weights: number[], days: number): number {
  // 计算边界，船最少要装一个包裹，所以最小运输能力为所有包裹的最大值, 最大运输能力为所有值之和，一次性运输完毕
  let left = Math.max(...weights)
  let right = weights.reduce((a, b) => a + b)
  // 运输能力为left，right之间的值，求运输能力的左边界
  while (left <= right) {
    let mid = left + Math.floor((right - left)/2)
    let d = getDays(weights, mid)
    // 运输能力与运输天数成反比
    if (d < days) {
      // 天数小说明运输能力强,目标值在左侧
      right = mid - 1
    } else if (d > days) {
      // 天数大说明运输能力弱，目标值在右侧
      left = mid + 1
    } else if (d === days) {
      // 天数满足，求左边界，向左收缩右边界
      right = mid - 1
    }
  }
  return left
}

function getDays(weights: number[], power: number): number {
  // 需要的天数
  let days = 0
  // 当天装在的总重量
  let curr = 0
  weights.forEach((item) => {
    if (curr + item > power) {
      days++
      curr = 0
    }
    curr += item
  })
  return days
}
