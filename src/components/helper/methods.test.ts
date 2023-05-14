import {getRandomArray} from './methods';

describe('Function getRandomArray', () => {
  test('length test 1', () => {
    const arr = getRandomArray(10, 50, 2);
    expect(arr.length).toBe(10);
  });

  test('length test 2', () => {
    const arr = getRandomArray(1, 50, 2);
    expect(arr.length).toBe(1);
  });

  test('array with out element more than maxPoints', () => {
    const random = Math.floor(Math.random() * 10 + 1)
    const arr = getRandomArray(1000, 50, random);
    const filtered = arr.filter(elm => elm > random)
    expect(filtered.length).toBe(0);
  });

  test('array with out zero', () => {
    const arr = getRandomArray(1000, 100, 3);
    const filtered = arr.filter(elm => elm === 0)
    expect(filtered.length).toBe(0);
  });
})