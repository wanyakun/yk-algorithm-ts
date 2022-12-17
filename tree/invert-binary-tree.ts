import { TreeNode } from "../data-struct/tree-node";

// 迭代遍历
export function invertTree(root: TreeNode | null): TreeNode | null {
  traverse(root)
  return root
}

function traverse(node: TreeNode | null) {
  if (node === null) {
    return
  }

  let temp = node.left
  node.left = node.right
  node.right = temp

  traverse(node.left)
  traverse(node.right)
}

// 递归

export function invertTree1(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }

  let left = invertTree1(root.left)
  let right = invertTree1(root.right)

  root.left = right
  root.right = left

  return root
}