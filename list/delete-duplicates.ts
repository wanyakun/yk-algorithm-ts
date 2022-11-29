import { ListNode } from '../data-struct/singly-linked-list';

export function deleteDuplicates(head: ListNode | undefined): ListNode | undefined {
  if (head === undefined) return head
  let slow = head
  let fast: ListNode | undefined = head
  while (fast !== undefined) {
    if (slow.val !== fast.val) {
      slow.next = fast
      slow = slow.next
    }
    fast = fast.next
  }
  slow.next = undefined
  return head
}
