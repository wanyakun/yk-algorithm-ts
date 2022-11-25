export class PriorityQueue {
  private data: any[] = []
  private compare: Function = () => {}
  constructor(compare: Function) {
    this.compare = compare
  }

  // 二分查找插入位置
  search(elem: any) {
    let l = 0, r = this.data.length
    while (l < r) {
      let mid = l + ((r - l) >> 1)
      if (this.compare(this.data[mid], elem) > 0) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    return l
  }

  // 添加
  push(elem: any) {
    let index = this.search(elem)
    this.data.splice(index, 0, elem)
  }

  // 取出
  pop() {
    return this.data.pop()
  }

  // 取出最优
  peek() {
    return this.data[this.data.length - 1]
  }
}