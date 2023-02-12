import { ListNode } from '../data-struct/singly-linked-list';
import { mergeTwoLists } from './merge-two-lists';

// 合并 k 个有序链表
/// 顺序合并
export function mergeKLists(lists: Array<ListNode | undefined>): ListNode | undefined {
  let p: ListNode | undefined = undefined
  lists.forEach((list) => {
    p = mergeTwoLists(p, list)
  })
  return p
}

/// 分治合并
export function mergeKLists1(lists: Array<ListNode | undefined>): ListNode | undefined {
  return merege(lists, 0, lists.length - 1)
}

function merege(lists: Array<ListNode | undefined>, l: number, r: number): ListNode | undefined {
  if (l == r) {
    return lists[l]
  }

  if (l > r) {
    return undefined
  }

  let mid = (l + r) >> 1
  return mergeTwoLists(merege(lists, l, mid), merege(lists, mid + 1, r))
}

/// 借助一个新数组, 将所有节点都放到数组中，然后进对数组进行排序，最后将数组中等节点连接起来
export function mergeKLists2(lists: Array<ListNode | undefined>): ListNode | undefined {
  let dummy = new ListNode(-1)
  let p = dummy

  let nodes: ListNode[] = []
  lists.forEach((list) => {
    while(list !== undefined) {
      let temp = list.next
      list.next = undefined
      nodes.push(list)
      list = temp
    }
  })
  nodes.sort((a, b) => a!.val - b!.val)

  nodes.forEach((node) => {
    p.next = node
    p = p.next
  })
  return dummy.next
}

// 借助优先级队列