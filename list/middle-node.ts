import { ListNode } from "../data-struct/singly-linked-list";

export function middleNode(head?: ListNode,): ListNode | undefined {
  let p1 = head
  let p2 = head

  while (p2 !== undefined && p2.next != undefined) {
    p1 = p1!.next
    p2 = p2.next.next
  }

  return p1
}