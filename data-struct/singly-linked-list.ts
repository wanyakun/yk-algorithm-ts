export class ListNode {
  val: number
  next?: ListNode
  
  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val
    this.next = next
  }
}