// 田忌赛马（优势洗牌）
export function advantageCount(nums1: number[], nums2: number[]): number[] {
  // 对nums1升序排序
  nums1.sort((a, b) => a - b)
  // 使用二维数组pq存储nums2的下标和值
  let pq: number[][] = [[]]
  for (let i = 0; i < nums2.length; i++) {
    pq[i] = [i, nums2[i]]
  }
  // 对二维数组按num2的值进行升序排序
  pq.sort((a, b) => a[1] - b[1])
  // 双指针从num1中取值
  let left = 0
  let right = pq.length - 1
  // 存储nums1优势最大化后的结果
  let res: number[] = []
  // 循环遍历二维数组和num1比较
  for (let i = pq.length - 1; i >= 0; i--) {
    let index = pq[i][0]
    let val = pq[i][1]
    // 如果nums1的最大值比二维数组中nums2的值大，则是优势，保持到res中，且下标与num2对应
    // 如果小，则用最小值
    if (nums1[right] > val) {
      res[index] = nums1[right]
      right--
    } else {
      res[index] = nums1[left]
      left++
    }
  }

  return res
}