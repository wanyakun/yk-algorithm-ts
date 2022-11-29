export function longestPalindrome(s: string): string {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i)
    let s2 = palindrome(s, i, i+1)
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }
  return res
}

function palindrome(s: string, l: number, r: number): string {
  while (l >= 0 && r <= s.length -1 && s[l] === s[r]) {
    l--
    r++
  }
  return s.substring(l+1, r)
}