// https://leetcode.com/problems/squares-of-a-sorted-array/submissions/1204431906

export function sortedSquares(nums: number[]): number[] {
    let squares: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        squares.push(nums[i] ** 2);
    }
    squares.sort((a, b) => a - b);
    return squares;
};
