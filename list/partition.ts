import { ListNode } from '../data-struct/singly-linked-list';

// 单链表的分解
export function paritition(x: number, head?: ListNode): ListNode | undefined {
  // 生成两个拆分的链表的虚拟表头
  let dummy1 = new ListNode(-1)
  let dummy2 = new ListNode(-1)

  let p1 = dummy1
  let p2 = dummy2
  let p = head

  while (p !== undefined) {
    if (p.val < x) {
      p1.next = p
      p1 = p1.next
    } else {
      p2.next = p
      p2 = p2.next
    }
    // 断开原链表中的每一个节点
    let temp = p.next
    p.next = undefined
    p = temp
  }
  p1.next = dummy2.next
  return  dummy1.next
}