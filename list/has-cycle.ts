import { ListNode } from '../data-struct/singly-linked-list';
export function hasCycle(head?: ListNode) {
  // 双指针，只要相遇就有环
  let p1 = head
  let p2 = head

  while (p2 !== undefined && p2.next !== undefined) {
    p1 = p1?.next
    p2 = p2.next.next

    if (p1 === p2) {
      return true
    }
  }

  return false
}