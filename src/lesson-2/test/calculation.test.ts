import {
    getStack,
    plusOrMinus,
    multiOrDivision,
} from '../helper/calculation';

describe('calculation functions', () => {
    describe('getStack', () => {
        it('valid string 1', () => {
            expect(getStack('2 + 2')).toEqual(['2', '+', '2']);
        });

        it('valid string 2', () => {
            expect(getStack('2 + 2 - 3')).toEqual(['2', '+', '2', '-', '3']);
        });

        it('invalid number value', () => {
            expect(() => getStack('2 + S')).toThrow(
                TypeError("Invalid value in response: S")
            );
        });

        it('invalid operator value', () => {
            expect(() => getStack('2 + 2 & 12')).toThrow(
                TypeError("Invalid value in response: &")
            );
        });

        it('two numbers in a row', () => {
            expect(() => getStack('2 + 2 12')).toThrow(
                TypeError("Value '12' must by a operator")
            );
        });

        it('two operators in a row', () => {
            expect(() => getStack('2 + 2 - -')).toThrow(
                TypeError("Value '-' must by a number")
            );
        });
    });

    describe('plusOrMinus', () => {
        it('plus operation', () => {
            expect(plusOrMinus(['2', '+', '2'])).toBe(4);
        });

        it('minus operation', () => {
            expect(plusOrMinus(['12', '-', '2'])).toBe(10);
        });

        it('plus and minus operations', () => {
            expect(plusOrMinus(['2', '+', '2', '-', '3'])).toBe(1);
        });

        it('empty array', () => {
            expect(plusOrMinus([])).toBe(0);
        });
    });

    describe('multiOrDivision', () => {
        it('multiplication operation', () => {
            expect(multiOrDivision(['2', '*', '3'])).toEqual(['6']);
        });

        it('division operation', () => {
            expect(multiOrDivision(['12', '/', '2'])).toEqual(['6']);
        });

        it('multiplication and division operations', () => {
            expect(multiOrDivision(['2', '*', '6', '/', '3'])).toEqual(['4']);
        });

        it('empty array', () => {
            expect(multiOrDivision([])).toEqual([]);
        });

        it('operator mix 1', () => {
            expect(multiOrDivision(['2', '*', '6', '+', '9', '/', '3'])).toEqual(['12', '+', '3']);
        });

        it('operator mix 2', () => {
            expect(multiOrDivision(['2', '*', '2', '+', '2'])).toEqual(['4', '+', '2']);
        });

        it('operator mix 3', () => {
            expect(multiOrDivision(['2', '+', '2', '*', '2'])).toEqual(['2', '+', '4']);
        });
    });
});