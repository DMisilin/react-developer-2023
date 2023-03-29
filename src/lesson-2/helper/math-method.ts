export const plus: OperationFn = (a: number, b: number): number => a + b;

export const minus: OperationFn = (a: number, b: number): number => a - b;

export const division: OperationFn = (a: number, b: number): number => a / b;

export const multiplication: OperationFn = (a: number, b: number): number => a * b;

export type Operator = "+" | "-" | "*" | "/";
export type OperationFn = (a: number, b: number) => number;

export const mathFunctions: {[key in Operator]: OperationFn} = {
    "+": plus,
    "-": minus,
    "*": multiplication,
    "/": division
};
