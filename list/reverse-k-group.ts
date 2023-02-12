
import { ListNode } from '../data-struct/singly-linked-list';
export function reverseKGroup(head: ListNode | undefined, k: number): ListNode | undefined {
  if (head === undefined) return undefined
  let a = head
  let b: ListNode | undefined = head
  for (let i = 0; i < k; i++) {
    // 链表不足k个，直接返回
    if (b === undefined) return head
    b = b.next
  }

  let newHead = reverse(a, b)
  head.next = reverseKGroup(b, k)
  return newHead
}

function reverse(a: ListNode, b?: ListNode): ListNode | undefined {
  let pre: ListNode | undefined = undefined
  let curr: ListNode | undefined = a
  while(a !== b) {
    let temp = curr!.next
    curr!.next = pre
    pre = curr
    curr = temp
  }
  return pre
}