import { TreeNode } from "../data-struct/tree-node"


let res: number[]

export function preorderTraversal(root: TreeNode | null): number[] {
  res = []
  traverse(root)
  return res
}

function traverse(node: TreeNode | null) {
  if (node === null) {
    return
  }
  res.push(node.val)
  traverse(node.left)
  traverse(node.right)
}

export function preorderTraversal1(root: TreeNode | null): number[] {
  let res: number[] = []
  if (root === null) {
      return res
  }
  res.push(root.val)
  res = res.concat(preorderTraversal(root.left))
  res = res.concat(preorderTraversal(root.right))
  return res
};