// https://leetcode.com/problems/find-the-pivot-integer/submissions/1204439348

export function pivotInteger(n: number): number {
    for (let i: number = 0; i <= n; i++) {
        let sumLeft: number = 0;
        let sumRight: number = 0;
        for (let l: number = 0; l <= i; l++) { sumLeft += l; }
        for (let r: number = i; r <= n; r++) { sumRight += r; }
        if (sumLeft == sumRight) { return i; }
    }
    return -1;
};
