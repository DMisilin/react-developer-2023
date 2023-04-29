import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Box from './Box';

describe('Text element', () => {
  test('Text rendering with set N point', () => {
    const randomPoint = Math.floor(Math.random() * 4);
    render(<Box point={randomPoint} order={randomPoint + 1} />);

    expect(screen.getByText(randomPoint)).toBeInTheDocument();
  });

  test('Check class of element and color', () => {
    const boxClasses = ['zero', 'first', 'second', 'third', 'fourth', 'fifth'];
    const index = Math.floor(Math.random() * boxClasses.length);

    render(<Box point={index} order={index} />);
    const element = screen.getByText(index);

    expect(element.className).toBe(`box ${boxClasses[index]}`);
  });
});
