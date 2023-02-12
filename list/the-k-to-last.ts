import { ListNode } from "../data-struct/singly-linked-list";

// 寻找单链表的倒数第 k 个节点
export function theKToLast(k: number, head?: ListNode,): ListNode | undefined {
  let p1: ListNode | undefined = head
  // p1 先走k步
  for (let i = 0; i < k; i++) {
    // 越界处理
    if (p1 === undefined) return undefined
    p1 = p1.next
  }
  // 添加p2,同时向后走，p1为null的时候，p2就是倒数第k个
  let p2: ListNode | undefined = head
  while (p1 !== null) {
      p1 = p1!.next
      p2 = p2!.next
  }
  return p2
}