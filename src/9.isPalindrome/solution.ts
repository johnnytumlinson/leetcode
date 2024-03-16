// https://leetcode.com/problems/palindrome-number/submissions/1204833493

export function isPalindrome(x: number): boolean {
    let s: string = x.toString();
    let r: string = s.split('').reverse().join('');
    return r==s;
};
