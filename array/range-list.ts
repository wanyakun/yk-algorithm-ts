export class RangeList {
  private list: number[][]

  constructor() {
    this.list = []
  }

  add(range: number[]) {
    // range左边界
    let l = range[0]
    // range右边界
    let r = range[1]
    // 现有列表长度为0 直接添加进去
    if (this.list.length === 0) {
      this.list.push(range)
      return
    }
    // 寻找插入的点，若找到i， 插入到到i，并开始合并
    let isInsert = false
    for (let i = 0; i < this.list.length; i++) {
      if (l < this.list[i][0]) {
        // rang的左边界比当前节点的左边界小， 插入到当前节点之前
        this.list.splice(i, 0, range)
        // 合并节点
        this.marege(i)
        isInsert = true
      }
    }
    // 如果没找到插入点，表示rang的左边界比list中所有点的左边界都大，需要和最后一个点进行比较，看是否需要合并
    if (isInsert === false) {
      if (this.list[this.list.length - 1][1] < l) {
        // 最后一个节点右边界小于range的左边界，直接添加到list
        this.list.push(range)
      } else {
        // 需要和最后一个节点进行合并, 比较右边界，取最大值
        this.list[this.list.length - 1][1] = Math.max(this.list[this.list.length - 1][1], r)
      }
    }
  }

  remove(range: number[]) {
    // 要移除区间的左右边距
    let l = range[0]
    let r = range[1]
    // 遍历数组判断是否需要移除
    for (let i = 0; i < this.list.length; i++) {
      let currL = this.list[i][0]
      let currR = this.list[i][1]
      // 如果有交集
      if (!(l > currR || r < currL)) {
        let arr: number[][] = []
        if (l <= currL && r <= currR) {
          // 左边需要移除
          if (r !== currR) {
            arr.push([r, currR])
          }
        } else if (l > currL && r < currR) {
          // 中间需要移除
          arr.push([currL, l])
          arr.push([r, currR])
        } else if (l >= currL && r >= currR) {
          // 右边需要移除
          if (l !== currL) {
            arr.push([currL, l])
          }
        }
        this.list.splice(i, 1, ...arr)
        if (arr.length === 0) {
          // 整体剪除
          i--
        }
      }
    }
  }

  print() {
    let res = ''
    this.list.forEach((item) => {
      res += `[${item.toString()})`
    })
    console.log(res)
  }

  /**
   * 从第i个位置插入节点后，开始判断合并
   * @param i 插入节点的位置
   */
  marege(i: number) {
    // i 为刚添加进来的点，从i开始寻找合并的点
    // 记录要更新的位置和边界值
    let start = i
    let end = i
    let l = this.list[i][0]
    let r = this.list[i][1]
    let resL = l
    let resR = r
    // 判断是否要和前一个合并
    if (i !== 0) {
      let preL = this.list[i - 1][0]
      let preR = this.list[i - 1][1]
      // 添加进来的点的左边界在前一个点的区间内，需要和前一个点进行合并
      if (l <= preR) {
        start = i - 1
        resL = preL
      }
      if (r <= preR) {
        resR = preR
      }
    }
    // 从后一个点开始判断是否要合并
    let index = i + 1
    while(index < this.list.length) {
      let nextL = this.list[index][0]
      let nextR = this.list[index][1]
      if (r < nextL) {
        // 小于下个节点的左边界，不需要合并，后面的都不用判断了
        break
      } else if (r >= nextL && r <= nextR) {
        // 合并右边界
        end = index
        resR = nextR
        break
      } else if (r > nextR) {
        // 当前节点被合并
        end = index + 1
      }
      index++
    }
    this.list.splice(start, end - start + 1, [resL, resR])
  }
}

const rl = new RangeList();

rl.add([1, 5]);
rl.print();// Should display: [1, 5)

rl.add([10, 20]);
rl.print();// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19]);
rl.print(); // Should display: [1, 3) [19, 21)