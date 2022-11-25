import { ListNode } from "../data-struct/singly-linked-list";

export function detectCycle(head?: ListNode): ListNode | undefined {
  // 通过快慢指针判断是否为环
  let p1 = head
  let p2 = head
  // p1每走一步，p2走两步，如果p1和p2相遇，说明为存在环，否则没有环
  while (p2 !== undefined && p2.next != undefined) {
    p1 = p1?.next
    p2 = p2.next

    if (p1 === p2) {
      break
    }
  }

  // 快指针遇到空指针，说明不是环
  if (p2 === undefined || p2.next === undefined) {
    return undefined
  }

  // 假设相遇位置为k，此时p1走了k， p2走了2k
  // 假设k距离环起点为m, 那么k-m即为环的起点，如果p2继续往前走k-m,刚好的到达环的起点，
  // 此时可以将p1或p2设置为head，再走k-m后会再次相遇
  // p1重新设置为起点，再次相遇的位置即为环的七点
  p1 = head
  while(p1 !== p2) {
    p1 = p1?.next
    p2 = p2?.next
  }

  return p1
}