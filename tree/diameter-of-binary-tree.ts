import { TreeNode } from "../data-struct/tree-node";

let res = 0
function diameterOfBinaryTree(root: TreeNode | null): number {
  res = 0
  maxDepth(root)
  return res
}

function maxDepth(node: TreeNode | null): number {
  if (node === null) {
    return 0
  }
  let leftMax = maxDepth(node.left)
  let rightMax = maxDepth(node.right)
  let diameter = leftMax + rightMax
  res = Math.max(res, diameter)

  return 1 + Math.max(leftMax, rightMax)
}