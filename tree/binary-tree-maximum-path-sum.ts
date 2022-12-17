import { TreeNode } from "../data-struct/tree-node";

let res = Number.MIN_SAFE_INTEGER

export function maxPathSum(root: TreeNode | null): number {
  res = Number.MIN_SAFE_INTEGER
  oneSideMax(root)
  return res
}

function oneSideMax(node: TreeNode | null): number {
  if (node === null) {
    return 0
  }
  // 只有大于零才算，否则就忽略
  let leftSideMax = Math.max(oneSideMax(node.left), 0)
  let rightSideMax = Math.max(oneSideMax(node.right), 0)
  // 更新结果
  let max = node.val + leftSideMax + rightSideMax
  res = Math.max(res, max)

  return node.val + Math.max(leftSideMax, rightSideMax)
}