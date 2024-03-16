// https://leetcode.com/problems/maximum-odd-binary-number/submissions/1203537207

export function maximumOddBinaryNumber(s: string): string {
    const characters: string[] = s.split('');
    let ones: string[] = characters.filter(s => s == '1');
    let zeros: string[] = characters.filter(s => s == '0');

    let result: string = '';
    if (ones.length > 1) {
        for (let i = 1; i < ones.length; i++) {
            result += ones[i];
        }
    }

    if (zeros.length > 0) {
        for (let i = 0; i < zeros.length; i++) {
            result += zeros[i];
        }
    }
    
    result += '1';
    return result;
};
