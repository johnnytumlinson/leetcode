import { maximumOddBinaryNumber } from './solution'

describe('2864.maximumOddBinaryNumber', () => {
    it('Return a string representing the maximum odd binary number that can be created from the given combination.', () => {
        expect(maximumOddBinaryNumber('010')).toStrictEqual('001');
        expect(maximumOddBinaryNumber('0101')).toStrictEqual('1001');
    });
});