import {
    isOperator,
    isEnd,
    isNumber,
} from 'src/lesson-2/helper/helper'

describe("helper functions", () => {
    describe("isOperator", () => {
        it("operator +", () => {
            expect(isOperator("+")).toBe(true);
        });

        it("operator -", () => {
            expect(isOperator("-")).toBe(true);
        });

        it("operator *", () => {
            expect(isOperator("*")).toBe(true);
        });

        it("operator /", () => {
            expect(isOperator("/")).toBe(true);
        });

        it("multi operator", () => {
            expect(isOperator("+/")).toBe(false);
        });

        it("non operator", () => {
            expect(isOperator("0")).toBe(false);
        });
    });

    describe("isEnd", () => {
        it("ended", () => {
            expect(isEnd(1, ["1", "+", "2"])).toBe(true);
        });

        it("empty array", () => {
            expect(isEnd(1, [])).toBe(false);
        });
        it("not end", () => {
            expect(isEnd(1, ["1", "+", "2", "-", "1"])).toBe(false);
        });
    });

    describe("isNumber", () => {
        it("string '0' is number", () => {
            expect(isNumber("0")).toBe(true);
        });

        it("string '99' is number", () => {
            expect(isNumber("99")).toBe(true);
        });

        it("null", () => {
            expect(isNumber("null")).toBe(false);
        });

        it("undefined", () => {
            expect(isNumber("undefined")).toBe(false);
        });

        it("some string", () => {
            expect(isNumber("12_")).toBe(false);
        });
    });
});