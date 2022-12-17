import { TreeNode } from "../data-struct/tree-node";

// 递归解法
// 定义：输入根节点，返回这棵二叉树的最大深度
export function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  // 利用定义，计算左右子树的最大深度
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  // 整棵树的最大深度等于左右子树的最大深度取最大值，
  // 然后再加上根节点自己
  return 1 + Math.max(left, right)
}

// 迭代解法
// 记录最大深度
let res = 0
// 记录遍历到的节点的深度
let depth = 0

export function maxDepth1(root: TreeNode | null): number {
  travel(root)
  return res
}

function travel(node: TreeNode | null) {
  if (node === null) {
    return
  }
  // 前序位置
  depth++
  if (node.left === null && node.right === null) {
    // 到达叶子节点, 更新最大深度
    res = Math.max(res, depth)
  }
  travel(node.left)
  travel(node.right)
  depth--
}

