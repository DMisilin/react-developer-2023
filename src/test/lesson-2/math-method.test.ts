import {
    plus,
    minus,
    multiplication,
    division
} from 'lesson-2/helper/math-method';

describe(('math functions'), () => {
    describe('plus function', () => {
        it('-1 + 2', () => {
            const a = -1;
            const b = 2;
            expect(plus(a, b)).toBe(a + b);
        });

        it('10 + 2', () => {
            const a = 10;
            const b = 2;
            expect(plus(a, b)).toBe(a + b);
        });

        it('-10 + 2', () => {
            const a = -10;
            const b = 2;
            expect(plus(a, b)).toBe(a + b);
        });
    });

    describe('minus function', () => {
        it('-1 - 2', () => {
            const a = -1;
            const b = 2;
            expect(minus(a, b)).toBe(a - b);
        });

        it('10 - 2', () => {
            const a = 10;
            const b = 2;
            expect(minus(a, b)).toBe(a - b);
        });

        it('-10 - (-2)', () => {
            const a = -10;
            const b = -2;
            expect(minus(a, b)).toBe(a - b);
        });
    });

    describe('multiplication function', () => {
        it('-1 * 2', () => {
            const a = -1;
            const b = 2;
            expect(multiplication(a, b)).toBe(a * b);
        });

        it('10 * 21', () => {
            const a = 10;
            const b = 21;
            expect(multiplication(a, b)).toBe(a * b);
        });
    });

    describe('division function', () => {
        it('3 / 1', () => {
            const a = 3;
            const b = 1;
            expect(division(a, b)).toBe(a / b);
        });

        it('10 / 3', () => {
            const a = 10;
            const b = 3;
            expect(division(a, b)).toBe(a / b);
        });
    });
});
