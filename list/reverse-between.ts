import { ListNode } from '../data-struct/singly-linked-list';
import { reverseN1 } from './reverse-n';

// 反转链表的一部分
export function reverseBetween(head: ListNode | undefined, left: number, right: number): ListNode | undefined {
  let pre: ListNode | undefined = undefined
  let curr = head
  let i = 1
  while(i < left) {
    pre = curr
    curr = curr?.next
    i++
  }

  let leftList = pre
  let revHead = curr
  while (i <= right) {
    let temp = curr?.next
    curr!.next = pre
    pre = curr
    curr = temp
    i++
  }

  if (leftList !== null) {
    leftList!.next = pre
  } else {
    head = pre
  }

  revHead!.next = curr

  return pre
}

export function reverseBetween1(head: ListNode | undefined, left: number, right: number): ListNode | undefined {
  if (left == 1) {
    return reverseN1(head, right)
  }

  head!.next = reverseBetween1(head?.next, left-1, right-1)
  return head
}