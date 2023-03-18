export const plus: operationFn = (a: number, b: number): number => a + b;

export const minus: operationFn = (a: number, b: number): number => a - b;

export const division: operationFn = (a: number, b: number): number => a / b;

export const multiplication: operationFn = (a: number, b: number): number => a * b;

export type operator = '+' | '-' | '*' | '/';
export type operationFn = (a: number, b: number) => number;

export const mathFunctions: { [key in operator]: operationFn } = {
    "+": plus,
    "-": minus,
    "*": multiplication,
    "/": division
}
