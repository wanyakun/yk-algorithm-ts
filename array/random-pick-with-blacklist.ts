class RandomPickWithBlacklist {
  // 代表未加入黑名单的个数
  private sz: number
  // 存储黑名单里的数字映射关系，用于和交换到后面的值做映射
  private map: Map<number, number>

  constructor(n: number, blacklist: number[]) {
    this.sz = n - blacklist.length
    this.map = new Map()
    // 将黑名单的数组映射到map中
    blacklist.forEach((item) => {
      this.map.set(item, 666)
    })

    let last = n - 1
    blacklist.forEach((item) => {
      // 如果黑名单中的值已经在后面，就不用交换了
      if (item >= this.sz) {
        return false
      }
      // 如果被映射的值已经在黑名单，继续往前映射
      while(this.map.has(last)) {
        last--
      }

      this.map.set(item, last)
      last--
    })
  }

  pick() {
    // 获取随机索引
    let randomIndex = Math.floor(Math.random()*this.sz)
    // 如果命中黑名单中的值，则从黑名单映射关系中寻找其他的值
    if (this.map.has(randomIndex)) {
      return this.map.get(randomIndex)
    }
    // 如果没命中黑名单，直接返回
    return randomIndex
  }
}