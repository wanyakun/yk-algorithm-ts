class RandomizedSet {
  private nums: number[]
  private map: Map<number, number>

  constructor() {
    this.nums = []
    this.map = new Map()
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false
    }
    this.map.set(val, this.nums.length)
    this.nums.push(val)
    return true
  }

  delete(val: number): boolean {
    if (!this.map.has(val)) {
      return false
    }
    let index: number = this.map.get(val)!
    this.nums[index] = this.nums[this.nums.length - 1]
    this.map.set(this.nums[index], index)
    this.nums.pop()
    this.map.delete(val)
    return true
  }

  getRandom(): number {
    let randomIndex = Math.floor(Math.random()*this.nums.length)
    return this.nums[randomIndex]
  }
}