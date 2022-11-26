import { ListNode } from '../data-struct/singly-linked-list';

/// 迭代方式
export function reverseN(head: ListNode | undefined, n: number): ListNode | undefined {
  if (head === undefined || head.next === undefined) return head
  let pre: ListNode | undefined = undefined
  let curr: ListNode | undefined = head
  let i = 0
  while (i < n) {
    let temp = curr!.next
    curr!.next = pre
    pre = curr
    curr = temp
  }

  head.next = curr
  return pre
}

/// 递归方式
let right: ListNode | undefined = undefined
export function reverseN1(head: ListNode | undefined, n: number): ListNode | undefined {
  if (n == 1) {
    // 记录第n+1个节点
    right = head?.next
    return head
  }

  let last = reverseN1(head?.next, n - 1)
  head!.next!.next = head
  // 反转后，让节点后n后面的连起来
  head!.next = right

  return last
}