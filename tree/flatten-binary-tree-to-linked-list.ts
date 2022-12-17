import { TreeNode } from "../data-struct/tree-node";

function flatten(root: TreeNode | null): void {
  if (root === null) {
    return
  }

  flatten(root.left)
  flatten(root.right)

  let left = root.left
  let right = root.right

  root.left = null
  root.right = left

  let p = root
  while (p.right !== null) {
    p = p.right
  }
  p.right = right
}