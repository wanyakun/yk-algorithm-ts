export function minEatingSpeed(piles: number[], h: number): number {
  let left = 1
  let right = 0
  piles.forEach((item => {
    right = Math.max(item, right)
  }))

  while(left <= right) {
    // mid 就是速度
    let mid = left + Math.floor((right - left)/2)
    let time = getTime(piles, mid)
    // 注意这里和常规的二分查找有点不一样，时间作为比较的对象，时间和速度mid成反比，所以判断条件反过来
    if (time < h) {
      // 时间小说明速度大，目标速度在左侧
      right = mid - 1
    } else if (time > h) {
      // 时间大说明速度小，目标速度在右侧
      left = mid + 1
    } else if (time === h) {
      // 求最小速度，也就是左边界，右侧收缩
      right = mid - 1
    }
  }
  return left
}

function getTime(piles: number[], speed: number): number {
  let time = 0
  piles.forEach((item) => {
    let currTime = Math.floor((item + speed - 1)/speed)
    time += currTime
  })
  return time
}

