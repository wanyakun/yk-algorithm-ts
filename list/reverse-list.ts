import { ListNode } from '../data-struct/singly-linked-list';

/// 迭代方式
export function reverseList(head?: ListNode): ListNode | undefined {
  let pre: ListNode | undefined = undefined
  let curr = head
  while (curr !== undefined) {
    let temp = curr.next
    curr.next = pre
    pre = curr
    curr = temp
  }
  return pre
}

/// 递归方式
export function reverseList1(head?: ListNode): ListNode | undefined {
  if(head === undefined|| head.next === undefined) {
    return head
  }

  let last = reverseList1(head.next)
  head.next.next = head
  head.next = undefined
  return last
}