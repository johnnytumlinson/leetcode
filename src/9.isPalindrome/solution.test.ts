import { isPalindrome } from './solution'

describe('977.sortedSquares', () => {
    it('Given an integer x, return true if x is a palindrome, and false otherwise.', () => {
        expect(isPalindrome(121)).toStrictEqual(true);
        expect(isPalindrome(-121)).toStrictEqual(false);
        expect(isPalindrome(10)).toStrictEqual(false);
    })
});