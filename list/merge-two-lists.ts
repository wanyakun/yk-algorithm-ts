import { ListNode } from '../data-struct/singly-linked-list';

// 合并两个有序链表
export function mergeTwoLists(list1?: ListNode, list2?: ListNode): ListNode | undefined {
  // 生成虚拟表头
  let dummy = new ListNode(-1)
  let p = dummy
  let p1 = list1
  let p2 = list2

  while (p1 !== undefined && p2 !== undefined) {
    // 取小点拼接到目标链表后面
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    // 头后移
    p = p.next
  }

  // 如果有剩余的节点，拼接到目标节点后面
  if (p1 !== undefined) {
    p.next = p1
  }

  if (p2 !== undefined) {
    p.next = p2
  }

  return dummy.next
}