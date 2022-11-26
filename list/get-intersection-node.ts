import { ListNode } from '../data-struct/singly-linked-list'

export function getIntersectionNode(headA?: ListNode, headB?: ListNode): ListNode | undefined {
  let p1 = headA
  let p2 = headB

  while(p1 !== p2) {
    if (p1 !== undefined) {
      p1 = p1.next
    } else {
      p1 = headB
    }

    if (p2 !== undefined) {
      p2 = p2.next
    } else {
      p2 = headA
    }
  }
  return p1
}