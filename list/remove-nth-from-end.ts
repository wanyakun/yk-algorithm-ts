import { ListNode } from "../data-struct/singly-linked-list";
import { theKToLast } from './the-k-to-last';

// 删除链表中的倒数第N个节点
export function removeNthFromEnd(n: number, head?: ListNode,): ListNode | undefined {
  // 添加虚拟节点防止寻找倒数第n+1节点时为null
  let dummy = new ListNode(-1)
  dummy.next = head

  let p = theKToLast(n+1, dummy)
  p!.next = p?.next?.next

  return dummy.next
}