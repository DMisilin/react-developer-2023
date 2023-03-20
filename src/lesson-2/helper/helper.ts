const OPERATORS = ['+', '-', '*', '/'];

export const isMultiplierOrDivisorOp = (str: string): str is '*' | '/' => {
    return ['*', '/'].includes(str);
};

export const isOperator = (str: string): boolean => {
    return OPERATORS.includes(str);
}

export const isNumber = (value: string) => {
    return !isNaN(+value);
}

export const isEnd = (index: number ,array: string[]) => {
    return index === array.length - 2;
}