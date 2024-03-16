import { pivotInteger } from './solution'

describe('2485.pivotInteger', () => {
    it('Return the pivot integer x. If no such integer exists, return -1.', () => {
        expect(pivotInteger(8)).toStrictEqual(6);
        expect(pivotInteger(1)).toStrictEqual(1);
        expect(pivotInteger(4)).toStrictEqual(-1);
    })
});