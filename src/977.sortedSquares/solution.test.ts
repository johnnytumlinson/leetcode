import { sortedSquares } from './solution'

describe('977.sortedSquares', () => {
    it('Return an array of the squares of each number sorted in non-decreasing order.', () => {
        expect(sortedSquares([-4, -1, 0, 3, 10])).toStrictEqual([0, 1, 9, 16, 100]);
        expect(sortedSquares([-7, -3, 2, 3, 11])).toStrictEqual([4, 9, 9, 49, 121]);
    })
});