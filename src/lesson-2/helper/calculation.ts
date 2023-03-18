import { mathFunctions, operationFn, operator } from "./math-method";
import { isEnd, isNumber, isOperator } from "./helper";

const multiplication = '*';
const division = '/';

export const getStack = (str: string) => {
    const values = str.split(' ');
    let mustByNumber = true;

    return values.reduce((acc: string[], elm: string) => {
        if (!isOperator(elm) && !isNumber(elm)) {
            throw new Error(`Invalid value in response: ${elm}`);
        }

        if (mustByNumber && !isNumber(elm)) {
            throw new Error(`Value '${elm}' must by a number`);
        }

        if (!mustByNumber && !isOperator(elm)) {
            throw new Error(`Value '${elm}' must by a operator`);
        }

        mustByNumber = !mustByNumber;

        acc.push(elm);
        return acc;
    }, []);
}

export const plusOrMinus = (arr: string[]): number  => {
    let result = +arr[0] | 0;

    for(let i = 1; i < arr.length; i += 2) {
        const op: operator = (arr[i] as operator);
        const fn: operationFn = mathFunctions[op];
        result = fn(+result, +arr[i + 1]);
    }

    return result;
}

export const multiOrDivision = (arr: string[]): string[]  => {
    if (!arr.includes(multiplication) && !arr.includes(division)) {
        return arr;
    }

    const result = [];
    let temp = 0;

    for(let i = 1; i < arr.length; i += 2) {
        const elm = arr[i];

        if (elm === division || elm === multiplication) {
            const op: operator = (arr[i] as operator);
            const fn: operationFn = mathFunctions[op];

            const a = temp ? +temp : +arr[i - 1];
            const b = +arr[i + 1];
            temp = fn(a, b);

            isEnd(i, arr) && result.push(temp.toString());
            continue;
        }

        result.push(temp ? temp.toString() : arr[i - 1]);
        result.push(arr[i]);
        temp = 0;

        isEnd(i, arr) && result.push(arr[i + 1]);
    }

    return result;
}

export const calculation = (value: string) => {
    const stack = getStack(value);

    const updatedStack = multiOrDivision(stack);
    const result = plusOrMinus(updatedStack);
    console.log('> ', result);
}